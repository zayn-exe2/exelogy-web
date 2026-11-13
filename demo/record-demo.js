const { chromium } = require("playwright");
const path = require("path");

const URL = "http://localhost:5199/";
const OUT = path.join(__dirname, "video");
const W = 1280, H = 720;

const overlay = () => {
  const style = document.createElement("style");
  style.textContent = `
    #demo-cursor{position:fixed;z-index:2147483647;width:22px;height:22px;pointer-events:none;
      transform:translate(-3px,-2px);transition:transform .08s}
    #demo-cursor.down{transform:translate(-3px,-2px) scale(.8)}
    #demo-ripple{position:fixed;z-index:2147483646;width:36px;height:36px;margin:-18px 0 0 -18px;border-radius:50%;
      background:rgba(113,55,200,.35);pointer-events:none;opacity:0;transform:scale(.3);transition:opacity .4s,transform .4s}
    #demo-cap{position:fixed;left:24px;bottom:24px;z-index:2147483645;max-width:560px;padding:12px 18px;border-radius:14px;
      background:rgba(15,10,30,.85);color:#fff;font:600 17px/1.35 Inter,system-ui,sans-serif;
      box-shadow:0 10px 40px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.12);
      opacity:0;transform:translateY(8px);transition:opacity .35s,transform .35s}
    #demo-cap.on{opacity:1;transform:none}
    #demo-cap small{display:block;font-weight:500;font-size:12px;color:#c4b5fd;letter-spacing:.08em;text-transform:uppercase;margin-bottom:3px}
    #demo-title{position:fixed;inset:0;z-index:2147483644;display:grid;place-items:center;text-align:center;
      background:radial-gradient(circle at 50% 40%,#2a0f5c,#0b0616 70%);color:#fff;font-family:"Space Grotesk",Inter,sans-serif;
      transition:opacity .6s}
    #demo-title h1{font-size:54px;margin:0 0 10px;letter-spacing:-.02em}
    #demo-title p{font:500 20px Inter,sans-serif;color:#c4b5fd;margin:0}`;
  document.head.appendChild(style);
  const c = document.createElement("div");
  c.id = "demo-cursor";
  c.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 2l7 19 2.6-7.4L20 11z" fill="#fff" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  const r = document.createElement("div"); r.id = "demo-ripple";
  const cap = document.createElement("div"); cap.id = "demo-cap";
  document.body.append(c, r, cap);
  document.addEventListener("mousemove", e => { c.style.left = e.clientX + "px"; c.style.top = e.clientY + "px"; }, true);
  document.addEventListener("mousedown", e => {
    c.classList.add("down");
    r.style.left = e.clientX + "px"; r.style.top = e.clientY + "px";
    r.style.transition = "none"; r.style.opacity = "1"; r.style.transform = "scale(.3)";
    requestAnimationFrame(() => { r.style.transition = ""; r.style.opacity = "0"; r.style.transform = "scale(1.6)"; });
  }, true);
  document.addEventListener("mouseup", () => c.classList.remove("down"), true);
  window.__cap = (label, text) => {
    cap.classList.remove("on");
    setTimeout(() => { cap.innerHTML = text ? `<small>${label}</small>${text}` : ""; if (text) cap.classList.add("on"); }, 250);
  };
  window.__title = (h, p) => {
    let t = document.getElementById("demo-title");
    if (!h) { if (t) { t.style.opacity = "0"; setTimeout(() => t.remove(), 700); } return; }
    if (!t) { t = document.createElement("div"); t.id = "demo-title"; document.body.appendChild(t); }
    t.style.opacity = "1";
    t.innerHTML = `<div><h1>${h}</h1><p>${p}</p></div>`;
  };
};

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Users/ESHOP/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe",
  });
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    recordVideo: { dir: OUT, size: { width: W, height: H } },
  });
  // Keep the demo self-contained: no analytics hits while recording.
  await ctx.route(/googletagmanager|google-analytics|localhost:4200/, r => r.abort());
  const page = await ctx.newPage(); page.setDefaultTimeout(6000);
  const wait = ms => page.waitForTimeout(ms);
  let mx = W / 2, my = H / 2;
  const moveTo = async (loc, dx = 0, dy = 0) => {
    const b = await loc.boundingBox();
    const x = b.x + b.width / 2 + dx, y = b.y + b.height / 2 + dy;
    await page.mouse.move(x, y, { steps: Math.max(15, Math.round(Math.hypot(x - mx, y - my) / 18)) });
    mx = x; my = y;
  };
  const click = async loc => { await moveTo(loc); await wait(250); await page.mouse.down(); await wait(90); await page.mouse.up(); };
  const cap = (l, t) => page.evaluate(([l, t]) => window.__cap(l, t), [l, t]);
  const title = (h, p) => page.evaluate(([h, p]) => window.__title(h, p), [h, p]);
  const typeIn = async (loc, text) => { await click(loc); await loc.pressSequentially(text, { delay: 55 }); };


  const glide = async (dist, ms) => {
    await page.evaluate(([d, ms]) => new Promise(res => {
      const s = window.scrollY, t0 = performance.now();
      const ease = t => t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
      const f = now => { const p = Math.min(1, (now - t0) / ms); window.scrollTo(0, s + d * ease(p)); p < 1 ? requestAnimationFrame(f) : res(); };
      requestAnimationFrame(f);
    }), [dist, ms]);
  };
  const toTop = () => page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  const header = page.locator("nav").first();
  const nav = async (label, sub, path) => {
    try {
      const top = header.getByRole("link", { name: label, exact: true }).first();
      await moveTo(top); await wait(900);
      if (sub) {
        const child = page.getByRole("link", { name: sub, exact: true }).first();
        if (await child.isVisible()) { await click(child); }
        else { await click(top); if (path) await page.goto("http://localhost:5199" + path); }
      } else await click(top);
    } catch { await page.goto("http://localhost:5199" + path); }
    await page.waitForLoadState("networkidle"); await wait(400);
    if (!(await page.locator("#demo-cursor").count())) { await page.evaluate(overlay); await page.mouse.move(mx, my); }
  };
  const tourPage = async (label, text, dist, ms) => {
    await cap(label, text); await wait(1600);
    await glide(dist, ms); await wait(900);
  };

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(overlay);
  await page.mouse.move(mx, my);

  await title("Exelogy", "AI-first technology & digital growth — website tour");
  await wait(3000); await title(null); await wait(1500);

  // Home
  await cap("Home", "We build intelligent systems that help businesses grow");
  await wait(2500);
  await glide(H * 1.0, 2600); await cap("Home", "Services, products and AI use cases at a glance"); await wait(1200);
  await glide(H * 1.4, 3200); await wait(1000);
  await glide(H * 1.4, 3200); await cap("Home", "Results, case studies and industries served"); await wait(1000);
  await glide(H * 1.6, 3600); await wait(1000);
  await glide(H * 1.6, 3600); await cap("Home", "Security, testimonials and a clear call to action"); await wait(1200);
  await toTop(); await wait(1800);

  // Services
  await cap("Navigation", "Services and products are one hover away");
  await nav("Services & Solutions", "AI Solutions", "/services/ai-solutions");
  await tourPage("Service · AI Solutions", "AI agents and intelligent automation built around real workflows", H * 1.8, 4200);

  await nav("Services & Solutions", "Software Development", "/services/software-development");
  await tourPage("Service · Software Development", "Custom software and SaaS products", H * 1.4, 3400);

  // Products
  await nav("Products", "Callifier", "/products/callifier");
  await tourPage("Product · Callifier", "AI calling for lead generation, follow-ups and reception", H * 1.8, 4200);

  await nav("Products", "GrowthOS", "/products/growthos");
  await tourPage("Product · GrowthOS", "Social media and advertising workflows in one place", H * 1.4, 3400);

  // Company pages
  await nav("Work", null, "/work");
  await tourPage("Work", "Selected projects and outcomes", H * 1.3, 3200);
  await nav("Industries", null, "/industries");
  await tourPage("Industries", "Solutions tailored to each sector", H * 1.3, 3200);
  await nav("About", null, "/about");
  await tourPage("About", "The team and approach behind Exelogy", H * 1.3, 3200);

  // Chatbot moment
  await toTop(); await wait(1000);
  await cap("Exelogy AI", "An AI assistant on every page");
  const launcher = page.getByRole("button", { name: "Open Exelogy AI assistant" });
  await click(launcher); await wait(1400);
  const panel = page.getByRole("region", { name: "Exelogy AI assistant" });
  await click(panel.getByRole("button", { name: "Build an AI solution" })); await wait(3200);
  await click(panel.getByRole("button", { name: "Close chat" })); await wait(900);

  // Contact
  await cap("Contact", "Start a project with the team");
  const cta = header.getByRole("link", { name: /Book a Call/i }).first();
  try { await click(cta); } catch { await page.goto("http://localhost:5199" + "/contact"); }
  await page.waitForLoadState("networkidle"); await wait(400);
  if (!(await page.locator("#demo-cursor").count())) { await page.evaluate(overlay); await page.mouse.move(mx, my); }
  await cap("Contact", "Start a project with the team"); await wait(1500);
  await glide(H * 0.8, 2600); await wait(2000);
  await cap(null, null);

  await title("Exelogy", "Build · Automate · Grow — exelogy.com");
  await wait(3500);

  const video = page.video();
  await ctx.close();
  await browser.close();
  console.log(await video.path());
})().catch(e => { console.error(e); process.exit(1); });
