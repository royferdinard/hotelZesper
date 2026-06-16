const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
const exts = new Set(['.js', '.jsx', '.ts', '.tsx']);
const strings = new Set();
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      walk(fp);
    } else if (exts.has(path.extname(name))) {
      const text = fs.readFileSync(fp, 'utf8');
      for (const m of text.matchAll(/>([^<>\n]+?)</g)) {
        const s = m[1].trim();
        if (s) strings.add(s.replace(/\s+/g, ' ').trim());
      }
      const litRE = /(['"])(?:(?!\\1|\\\\).|\\.)*\\1/g;
      for (const m of text.matchAll(litRE)) {
        let s = m[0].slice(1, -1);
        if (!s) continue;
        if (/^[\w\s\d.,'"!?@#$%&*()\[\]{}:\-\/]+$/.test(s) && s.length > 1) {
          if (!/^(https?:\/\/|\.|\w+\/|\w+:\w+)/.test(s)) {
            strings.add(s.replace(/\s+/g, ' ').trim());
          }
        }
      }
    }
  }
}
walk(root);
const arr = Array.from(strings).sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
console.log(arr.length);
console.log(arr.join('\n'));
