// Prerenders every route in public/sitemap.xml into static HTML under dist/,
// so crawlers that don't execute JavaScript (and social-link unfurlers) see
// real titles, meta tags, structured data and content instead of an empty shell.
import { chromium } from "playwright";
import { execSync, spawn } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const port = 4174;
const origin = `http://localhost:${port}`;

function getRoutes() {
  const sitemap = readFileSync(path.join(rootDir, "public/sitemap.xml"), "utf-8");
  const matches = [...sitemap.matchAll(/<loc>https:\/\/www\.exelogy\.com([^<]*)<\/loc>/g)];
  return matches.map((m) => (m[1] === "" ? "/" : m[1]));
}

function outputPathFor(route) {
  return route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.replace(/^\//, ""), "index.html");
}

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(origin);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Preview server at ${origin} did not start in time`);
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 500;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve(undefined);
        }
      }, 150);
    });
  });
  // Guarantee the very bottom was actually reached (last step can undershoot).
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  // Let staggered whileInView animations (delay + duration) finish settling
  // before scrolling back up and capturing the final DOM.
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
}

function killWhateverIsOnPort() {
  // `npx vite preview` spawns a child process tree; a plain SIGTERM to the
  // shell wrapper doesn't always reach the grandchild holding the port
  // (observed on Windows), so proactively free the port before (re)starting.
  try {
    const out = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf-8" });
    const pids = new Set(
      out
        .split("\n")
        .map((line) => line.trim().split(/\s+/).pop())
        .filter((pid) => pid && /^\d+$/.test(pid) && pid !== "0"),
    );
    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid}`);
      } catch {
        // already gone
      }
    }
  } catch {
    // nothing listening on the port, or not on Windows — fine either way
  }
}

async function main() {
  const routes = getRoutes();
  console.log(`Prerendering ${routes.length} routes...`);

  killWhateverIsOnPort();
  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(port), "--strictPort"],
    { cwd: rootDir, stdio: "pipe", shell: true },
  );
  preview.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer();

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const outputs = [];

    for (const route of routes) {
      await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
      await autoScroll(page);
      await page.waitForTimeout(250);
      const html = await page.content();
      outputs.push([outputPathFor(route), html]);
      console.log(`  rendered ${route}`);
    }

    await browser.close();

    for (const [outPath, html] of outputs) {
      mkdirSync(path.dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
    }
    console.log(`Wrote ${outputs.length} prerendered pages.`);
  } finally {
    preview.kill();
    killWhateverIsOnPort();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
