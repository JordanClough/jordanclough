import { chromium } from 'playwright';
import fs from 'node:fs';

const base = process.env.PREVIEW_URL ?? 'http://localhost:4173/jordanclough/';
const outDir = 'reviewshots';
const pages = [
  { name: 'home', hash: '#/' },
  { name: 'projects', hash: '#/projects' },
  { name: 'skills', hash: '#/skills' },
  { name: 'contact', hash: '#/contact' },
];
const sizes = [
  { name: 'xs-320', w: 320, h: 568 },
  { name: 'sm-375', w: 375, h: 667 },
  { name: 'sm-390', w: 390, h: 844 },
  { name: 'md-430', w: 430, h: 932 },
  { name: 'tab-600', w: 600, h: 900 },
  { name: 'tab-768', w: 768, h: 1024 },
  { name: 'tab-834', w: 834, h: 1112 },
  { name: 'lap-1024', w: 1024, h: 768 },
  { name: 'lap-1280', w: 1280, h: 800 },
  { name: 'desk-1440', w: 1440, h: 900 },
  { name: 'desk-1920', w: 1920, h: 1080 },
  { name: 'wide-2560', w: 2560, h: 1440 },
];

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const report = [];

for (const s of sizes) {
  const context = await browser.newContext({
    viewport: { width: s.w, height: s.h },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  for (const p of pages) {
    await page.goto(base + p.hash, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}/${s.name}-${p.name}-vp.png` });
    await page.screenshot({ path: `${outDir}/${s.name}-${p.name}-full.png`, fullPage: true });

    const m = await page.evaluate(() => {
      const sb = document.querySelector('#primary-nav');
      const r = sb ? sb.getBoundingClientRect() : null;
      const cs = sb ? getComputedStyle(sb) : null;
      return {
        sidebarH: r ? Math.round(r.height) : null,
        sidebarPos: cs ? cs.position : null,
        viewportH: window.innerHeight,
        docH: document.documentElement.scrollHeight,
      };
    });
    report.push({ size: s.name, page: p.name, ...m });
  }

  // drawer open, only where the drawer exists (< lg = 1024)
  if (s.w < 1024) {
    await page.goto(base + '#/skills', { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    await page.evaluate(() => window.scrollTo(0, 0));
    const btn = page.locator('button[aria-label="Open menu"]');
    if (await btn.count()) {
      await btn.first().click({ force: true });
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${outDir}/${s.name}-drawer-open-vp.png` });
      const m = await page.evaluate(() => {
        const sb = document.querySelector('#primary-nav');
        const r = sb.getBoundingClientRect();
        return { sidebarH: Math.round(r.height), sidebarTop: Math.round(r.top), viewportH: window.innerHeight };
      });
      report.push({ size: s.name, page: 'drawer-open', ...m });
    }
  }
  await context.close();
  console.log('done size', s.name);
}

fs.writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
await browser.close();
console.log('FINISHED');
