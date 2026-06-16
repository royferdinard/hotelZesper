const fs = require('fs');
const path = require('path');
const root = path.join(process.cwd(), 'src');
const fileExts = new Set(['.js', '.jsx', '.ts', '.tsx']);
const seen = new Set();
const excludePattern = /(^\/|^#[^\s]*$|^\.[^\s]*$|\b(bg|text|hover|focus|md|sm|lg|xl|2xl|rounded|flex|grid|gap|px|py|mx|my|w-|h-|min-|max-|items-|justify-|content-|align-|place-|transition|duration|ease|scale|translate|absolute|relative|fixed|sticky|overflow|border|shadow|ring|outline|cursor|select|pointer|opacity|z-)[^\s]*$)/;
const visibleAttrRE = /\b(?:placeholder|alt|title|aria-label|aria-describedby|label|value|data-\w+|src|href)\s*=\s*"([^"]+)"/g;
const tRE = /\bt\(\s*(['\`\"])([\s\S]*?)\1\s*\)/g;
const i18nTRE = /\bi18n\.t\(\s*(['\`\"])([\s\S]*?)\1\s*\)/g;
const jsxTextRE = />([^<>\n]+?)</g;
const placeholderRE = /\{[^}]+\}/g;

function normalize(str) {
  return str.replace(/\s+/g, ' ').trim();
}
function isExcluded(value) {
  if (!value || typeof value !== 'string') return true;
  const text = normalize(value);
  if (text.length === 0) return true;
  if (/^\s*\d+\s*$/.test(text)) return true;
  if (/^https?:\/\//.test(text)) return true;
  if (/^\//.test(text)) return true;
  if (/^[A-Za-z0-9_.@-]+$/.test(text) && !/[a-z]/.test(text)) return true;
  if (excludePattern.test(text)) return true;
  if (text.length > 200) return true;
  if (/\b(className|style|svg|path|rect|circle|fill|stroke|transform|viewBox)\b/.test(text)) return true;
  return false;
}
function addKey(key) {
  const normalized = normalize(key);
  if (!normalized) return;
  if (excludePattern.test(normalized)) return;
  if (isExcluded(normalized)) return;
  seen.add(normalized);
}
function walk(dir) {
  for (const fileName of fs.readdirSync(dir)) {
    const filePath = path.join(dir, fileName);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (fileExts.has(path.extname(fileName))) {
      const text = fs.readFileSync(filePath, 'utf8');
      let m;
      while ((m = tRE.exec(text))) addKey(m[2]);
      while ((m = i18nTRE.exec(text))) addKey(m[2]);
      while ((m = visibleAttrRE.exec(text))) addKey(m[1]);
      while ((m = jsxTextRE.exec(text))) addKey(m[1]);
    }
  }
}

function shouldTranslate(key) {
  const trimmed = normalize(key);
  if (!trimmed) return false;
  if (/^\{|\}$/.test(trimmed)) return false;
  if (/^\w+\.\w+/.test(trimmed)) return false;
  return true;
}

async function translateText(text) {
  const placeholders = [];
  const source = normalize(text);
  const temp = source.replace(placeholderRE, (match) => {
    const token = `__PH_${placeholders.length}__`;
    placeholders.push(match);
    return token;
  });
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=sw&dt=t&q=${encodeURIComponent(temp)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Translation failed ${res.status}`);
  const json = await res.json();
  const translated = json[0].map(item => item[0]).join('');
  let out = translated;
  placeholders.forEach((ph, idx) => {
    out = out.replace(`__PH_${idx}__`, ph);
  });
  return out;
}

(async () => {
  walk(root);
  const keys = Array.from(seen).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  const enObj = {};
  const swObj = {};
  for (const key of keys) {
    enObj[key] = key;
    if (shouldTranslate(key)) {
      try {
        const tr = await translateText(key);
        swObj[key] = tr;
        console.log('TRANSLATED:', key, '=>', tr);
      } catch (e) {
        console.error('ERROR', key, e.message);
        swObj[key] = key;
      }
    } else {
      swObj[key] = key;
    }
  }
  fs.writeFileSync(path.join(process.cwd(), 'src', 'components', 'translation', 'locale', 'en', 'translation.json'), JSON.stringify(enObj, null, 2), 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'src', 'components', 'translation', 'locale', 'sw', 'translation.json'), JSON.stringify(swObj, null, 2), 'utf8');
  console.log('WROTE', keys.length, 'keys');
})();