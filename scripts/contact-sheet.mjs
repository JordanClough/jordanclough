import fs from 'node:fs';

const dir = 'reviewshots';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('-vp.png'));
const order = [
  'xs-320', 'sm-375', 'sm-390', 'md-430', 'tab-600', 'tab-768',
  'tab-834', 'lap-1024', 'lap-1280', 'desk-1440', 'desk-1920', 'wide-2560',
];
const groups = {};
for (const f of files) {
  const m = f.match(/^([a-z0-9]+-[0-9]+)-/);
  const k = m ? m[1] : 'other';
  (groups[k] ??= []).push(f);
}

let h = `<!doctype html><html><head><meta charset="utf-8"><title>Portfolio review</title>
<style>
body{background:#0d0d0d;color:#eee;font-family:system-ui;margin:0;padding:24px}
h1{font-size:18px}
h2{font-size:13px;color:#38bdf8;margin:28px 0 10px;border-bottom:1px solid #2a2a2a;padding-bottom:6px;letter-spacing:.08em}
.row{display:flex;gap:14px;flex-wrap:wrap}
.cell{background:#171717;border:1px solid #2e2e2e;border-radius:10px;padding:8px}
.cell img{display:block;width:270px;height:auto;border-radius:6px}
.cap{font-size:11px;color:#9a9a9a;margin-top:6px;text-align:center}
</style></head><body><h1>Portfolio review — every viewport</h1>`;

for (const k of order) {
  if (!groups[k]) continue;
  h += `<h2>${k}</h2><div class="row">`;
  for (const f of groups[k]) {
    h += `<div class="cell"><img src="${f}" loading="lazy"><div class="cap">${f.replace('-vp.png', '')}</div></div>`;
  }
  h += '</div>';
}
h += '</body></html>';
fs.writeFileSync(`${dir}/index.html`, h);
console.log('wrote contact sheet with', files.length, 'shots');
