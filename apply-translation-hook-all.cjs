const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'src');
const exts = new Set(['.jsx', '.tsx']);
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (exts.has(path.extname(name))) {
      files.push(filePath);
    }
  }
}

walk(root);

const results = [];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('useTranslation')) {
    continue;
  }
  const hasJSX = /<\w+[^>]*>/.test(content) || /return\s*\(/.test(content);
  if (!hasJSX) {
    continue;
  }

  let changed = false;
  const lines = content.split(/\r?\n/);
  let importIndex = -1;
  let reactImportIndex = -1;
  let lastImportIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*import\s+.*from\s+['\"]react['\"]/.test(line)) {
      reactImportIndex = i;
      importIndex = i;
      lastImportIndex = i;
      if (/\{[^}]*\buseState\b[^}]*\}/.test(line) || /\{[^}]*\buseEffect\b[^}]*\}/.test(line) || /\{[^}]*\buseMemo\b[^}]*\}/.test(line) || /\{[^}]*\buseCallback\b[^}]*\}/.test(line)) {
        if (!/\buseTranslation\b/.test(line)) {
          lines[i] = line.replace(/\{([^}]*)\}/, (match, inner) => {
            const imports = inner.split(',').map(s => s.trim());
            if (!imports.includes('useTranslation')) {
              imports.push('useTranslation');
            }
            return `{ ${imports.join(', ')} }`;
          });
          changed = true;
        }
      }
    } else if (/^\s*import\s+/.test(line)) {
      lastImportIndex = i;
    }
  }

  if (!lines.some((line) => /import\s+\{[^}]*useTranslation[^}]*\}/.test(line))) {
    const insertAt = reactImportIndex !== -1 ? reactImportIndex + 1 : lastImportIndex + 1;
    lines.splice(insertAt, 0, "import { useTranslation } from 'react-i18next';");
    changed = true;
  }

  const newContent = lines.join('\n');
  const componentPattern = /(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{|function\s+\w+\s*\([^)]*\)\s*\{)/;
  const match = componentPattern.exec(newContent);
  if (match) {
    const start = match.index + match[0].length;
    const before = newContent.slice(0, start);
    const after = newContent.slice(start);
    const afterBrace = after.replace(/^(\s*)/, '\n$1  const { t, i18n } = useTranslation();\n$1');
    content = before + afterBrace;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    results.push(file);
  }
}

console.log(`Modified ${results.length} files:`);
results.forEach((file) => console.log(file));
