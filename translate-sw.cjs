const fs = require('fs');
const path = require('path');
const fetch = globalThis.fetch || require('node-fetch');
const inPath = path.join(process.cwd(), 'src', 'components', 'translation', 'locale', 'en', 'translation.json');
const outPath = path.join(process.cwd(), 'src', 'components', 'translation', 'locale', 'sw', 'translation.json');
const data = JSON.parse(fs.readFileSync(inPath, 'utf8'));
const entries = Object.entries(data);
const isEmail = s => /\b[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}\b/.test(s);
const isPhone = s => /^[+]?\d[\d\s()\-/.]{4,}$/.test(s) && /\d/.test(s);
const isPath = s => /^\/[\w\-./:]*$/.test(s);
const isCurrencyCode = s => /^(UK \(GBP\)|USA \(USD\)|Kenya \(KES\)|Ksh\.?|MM\/YY)$/.test(s);
const isShortToken = s => /^[A-Za-z0-9_-]{1,3}$/.test(s);
const isPlaceholderOnly = s => /^\{[^}]+\}$/.test(s);
const shouldTranslate = s => {
  if (!s || typeof s !== 'string') return false;
  const trimmed = s.trim();
  if (trimmed.length === 0) return false;
  if (isEmail(trimmed)) return false;
  if (isPhone(trimmed) && !/[A-Za-z]/.test(trimmed)) return false;
  if (isPath(trimmed)) return false;
  if (isCurrencyCode(trimmed)) return false;
  if (isPlaceholderOnly(trimmed)) return false;
  if (/^\s*\d+\s*$/.test(trimmed)) return false;
  if (/^#{?\w+.*}$/.test(trimmed) && trimmed.includes('{')) return false;
  return true;
};
const placeholderRE = /\{[^}]+\}/g;
const quotedRE = /^(".*"|'.*')$/;
const escapeForUrl = s => encodeURIComponent(s);
const translateText = async (text) => {
  const placeholders = [];
  let replaced = text.replace(placeholderRE, (match) => {
    const token = `__PH_${placeholders.length}__`;
    placeholders.push(match);
    return token;
  });
  const quoteMatch = replaced.match(quotedRE);
  let prefix = '', suffix = '';
  if (quoteMatch) {
    prefix = replaced[0];
    suffix = replaced[replaced.length - 1];
    replaced = replaced.slice(1, -1);
  }
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=sw&dt=t&q=${escapeForUrl(replaced)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Translate API failed ${res.status}`);
  }
  const json = await res.json();
  const translated = json[0].map(item => item[0]).join('');
  let out = translated;
  placeholders.forEach((ph, index) => {
    out = out.replace(`__PH_${index}__`, ph);
  });
  if (quoteMatch) out = prefix + out + suffix;
  return out;
};
(async () => {
  const result = {};
  const toTranslate = entries.filter(([key, value]) => shouldTranslate(key));
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    if (shouldTranslate(key)) {
      try {
        const sw = await translateText(key);
        result[key] = sw;
        console.log(`${i + 1}/${entries.length}: ${key} -> ${sw}`);
      } catch (err) {
        console.error('Translate failed:', key, err.message);
        result[key] = value;
      }
    } else {
      result[key] = value;
    }
  }
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log('Wrote', Object.keys(result).length, 'entries to', outPath);
})();