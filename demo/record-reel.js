const { chromium } = require("playwright");
const path = require("path");

const BASE = "http://localhost:5199";
const OUT = path.join(__dirname, "reel2");
const W = 540, H = 960; // CSS px; rendered at 2x → 1080×1920

const overlay = () => {
  const style = document.createElement("style");
  style.textContent = `
    #r-card{position:fixed;inset:0;z-index:2147483646;display:grid;place-items:center;text-align:center;padding:0 40px;
      background:radial-gradient(120% 80% at 50% 35%,#6d28d9 0%,#3b0f86 38%,#0c0618 78%);color:#fff;
      font-family:"Space Grotesk",Inter,sans-serif;transition:opacity .45s ease}
    #r-card .k{font:600 13px/1 "JetBrains Mono",monospace;letter-spacing:.3em;color:#c4b5fd;text-transform:uppercase;margin-bottom:22px}
    #r-card h1{font-size:64px;line-height:1.02;margin:0;letter-spacing:-.035em;font-weight:700}
    #r-card h1 em{font-style:normal;background:linear-gradient(90deg,#c084fc,#f0abfc);-webkit-background-clip:text;color:transparent}
    #r-card p{font:500 20px/1.4 Inter,sans-serif;color:#ddd6fe;margin:22px 0 0}
    #r-card img{height:64px;margin-bottom:28px;transform:translateX(24px);filter:brightness(0) invert(1)}
    #r-card .cta{display:inline-block;margin-top:34px;padding:14px 26px;border-radius:999px;background:#fff;color:#3b0f86;font:700 18px Inter,sans-serif}
    #r-card .pop{animation:pop .55s cubic-bezier(.2,.9,.3,1.3) both}
    #r-card .pop2{animation:pop .55s .18s cubic-bezier(.2,.9,.3,1.3) both}
    #r-card .pop3{animation:pop .55s .36s cubic-bezier(.2,.9,.3,1.3) both}
    @keyframes pop{from{opacity:0;transform:translateY(18px) scale(.94)}to{opacity:1;transform:none}}
    #r-cap{position:fixed;left:24px;right:24px;bottom:250px;z-index:2147483645;padding:18px 22px;border-radius:20px;
      background:rgba(18,8,40,.9);color:#fff;font:700 27px/1.2 "Space Grotesk",Inter,sans-serif;letter-spacing:-.01em;
      box-shadow:0 18px 50px rgba(30,0,80,.35);border:1px solid rgba(196,181,253,.25);
      opacity:0;transform:translateY(14px) scale(.97);transition:opacity .3s,transform .35s cubic-bezier(.2,.9,.3,1.2)}
    #r-cap.on{opacity:1;transform:none}
    #r-cap small{display:block;font:600 11px/1 "JetBrains Mono",monospace;letter-spacing:.22em;color:#c4b5fd;text-transform:uppercase;margin-bottom:9px}
    #r-cap b{background:linear-gradient(90deg,#c084fc,#f0abfc);-webkit-background-clip:text;color:transparent}
    button[aria-label="Open Exelogy AI assistant"]{display:none!important}`;
  document.head.appendChild(style);
  const cap = document.createElement("div"); cap.id = "r-cap"; document.body.appendChild(cap);
  window.__cap = (k, t) => {
    cap.classList.remove("on");
    setTimeout(() => { if (!t) return; cap.innerHTML = `<small>${k}</small>${t}`; cap.classList.add("on"); }, 220);
  };
  window.__card = html => {
    let c = document.getElementById("r-card");
    if (!html) { if (c) { c.style.opacity = "0"; setTimeout(() => c.remove(), 500); } return; }
    if (!c) { c = document.createElement("div"); c.id = "r-card"; c.style.opacity = "0"; document.body.appendChild(c); }
    c.innerHTML = `<div>${html}</div>`;
    requestAnimationFrame(() => (c.style.opacity = "1"));
  };
};

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Users/ESHOP/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe",
  });
  const ctx = await browser.newContext({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    recordVideo: { dir: OUT, size: { width: W * 2, height: H * 2 } },
  });
  await ctx.route(/googletagmanager|google-analytics|localhost:4200/, r => r.abort());
  const t0 = Date.now();
  const page = await ctx.newPage();
  page.setDefaultTimeout(8000);
  const wait = ms => page.waitForTimeout(ms);
  const cap = async () => {};
  const card = html => page.evaluate(h => window.__card(h), html);
  const go = p => page.evaluate(p => { history.pushState({}, "", p); dispatchEvent(new PopStateEvent("popstate")); window.scrollTo(0, 0); }, p);
  const glide = (d, ms) => page.evaluate(([d, ms]) => new Promise(res => {
    const s = scrollY, st = performance.now(), e = t => t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
    const f = n => { const p = Math.min(1, (n - st) / ms); scrollTo(0, s + d * e(p)); p < 1 ? requestAnimationFrame(f) : res(); };
    requestAnimationFrame(f);
  }), [d, ms]);

  // Preload every route's assets behind the opening card so cuts are instant.
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.evaluate(overlay);
  await card(`<h1 class="pop2">What is<br><em>Exelogy?</em></h1>`);
  await wait(600);
  const start = (Date.now() - t0) / 1000;
  for (const p of ["/services", "/products/callifier", "/products/growthos", "/"]) { await go(p); await wait(250); }
  await page.evaluate(() => window.scrollTo(0, 0));

  // 0 – 2.6s  hook
  await wait(1700);
  await card(null);

  // 2.6 – 6.6s  who we are
  await cap("Exelogy is", "An <b>AI-first</b> technology company");
  await wait(1400);
  await glide(H * 0.55, 2400);

  // 6.6 – 10.6s  what we do
  await go("/services"); await wait(150);
  await cap("We build", "<b>AI solutions</b>, custom software & automation");
  await wait(1000);
  await glide(H * 1.1, 2800);

  // 10.6 – 14.4s  products
  await go("/products/callifier"); await wait(150);
  await cap("Our own products", "<b>Callifier</b> — AI that makes & answers calls");
  await wait(1000);
  await glide(H * 0.9, 2500);

  // 14.4 – 17.2s
  await go("/products/growthos"); await wait(150);
  await cap("And", "<b>GrowthOS</b> — social & ads, all in one place");
  await wait(900);
  await glide(H * 0.7, 1700);

  // 17.2 – 20.5s  CTA
  await cap(null, null);
  await card(`<img class="pop" src="/logo.png" alt=""><h1 class="pop2">Build.<br>Automate.<br><em>Grow.</em></h1><div class="cta pop3">exelogy.com</div>`);
  await wait(3400);

  const video = page.video();
  await ctx.close();
  await browser.close();
  console.log(JSON.stringify({ file: await video.path(), start, total: (Date.now() - t0) / 1000 }));
})().catch(e => { console.error(e); process.exit(1); });
