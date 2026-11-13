const { chromium } = require("playwright");
const path = require("path"), fs = require("fs");
const mode = process.argv[2] || "preview";
(async () => {
  const b = await chromium.launch({ executablePath: "C:/Users/ESHOP/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe" });
  const p = await b.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: mode === "preview" ? 1 : 2 });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file:///" + path.join(__dirname, "reel.html").replace(/\\/g, "/"));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  if (mode === "preview") {
    const ts = (process.argv[3] || "1.0,2.6,5.2,9.0,11.9,15.5,19.5").split(",").map(Number);
    for (const t of ts) { await p.evaluate(t => seek(t), t); await p.screenshot({ path: path.join(__dirname, `pv_${t}.png`) }); }
  } else {
    const dir = path.join(__dirname, "frames"); fs.mkdirSync(dir, { recursive: true });
    const FPS = 30, N = 20 * FPS;
    for (let i = 0; i < N; i++) {
      await p.evaluate(t => seek(t), i / FPS);
      await p.screenshot({ path: path.join(dir, `f${String(i).padStart(4, "0")}.png`) });
      if (i % 100 === 0) console.log("frame", i);
    }
  }
  await b.close();
})();
