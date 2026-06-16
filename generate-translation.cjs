const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
const exts = new Set(['.js', '.jsx', '.ts', '.tsx', '.html']);
const strings = new Set();
const attrRE = /\b(placeholder|title|alt|aria-label|aria-describedby|label|value|download)\s*=\s*"([^"]+)"/g;
function normalize(s) {
  let n = s.replace(/\s+/g, ' ').trim();
  if ((n.startsWith('"') && n.endsWith('"')) || (n.startsWith("'") && n.endsWith("'"))) {
    n = n.slice(1, -1).trim();
  }
  return n;
}
function shouldKeep(s) {
  if (!s || s.length === 0) return false;
  if (/^\{.*\}$/.test(s)) return false;
  if (/^['"]$/.test(s)) return false;
  if (/^\s*\d+\s*$/.test(s)) return false;
  if (/^https?:\/\//.test(s)) return false;
  if (/^\/[-\w:@?&=+,.~#%]+$/.test(s)) return false;
  if (/^[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+$/.test(s)) return false;
  if (/^[^\p{L}\p{N}]+$/u.test(s)) return false;
  return true;
}
function add(s) {
  const n = normalize(s);
  if (shouldKeep(n)) strings.add(n);
}
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) walk(fp);
    else if (exts.has(path.extname(name))) {
      const text = fs.readFileSync(fp, 'utf8');
      for (const m of text.matchAll(/>([^<>\n]+?)</g)) add(m[1]);
      for (const m of text.matchAll(attrRE)) add(m[2]);
    }
  }
}
walk(root);
const arr = Array.from(strings).sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
const obj = {};
arr.forEach(s => obj[s] = s);
const target = path.join(process.cwd(), 'src', 'components', 'translation', 'locale', 'en', 'translation.json');
fs.writeFileSync(target, JSON.stringify(obj, null, 2), 'utf8');
console.log('Wrote', arr.length, 'entries to', target);
