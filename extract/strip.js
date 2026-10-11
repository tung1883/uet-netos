// Strip HTML to plain text for quick skim-reading of lecture files.
const fs = require('fs');
const path = require('path');

const SRC = 'C:/Users/Tung/Documents/work/thanhld_netos';
const OUT = 'C:/Users/Tung/Documents/work/netos-quiz/extract/text';
fs.mkdirSync(OUT, { recursive: true });

function stripHtml(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/(p|div|li|h[1-6]|tr|br)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.htm') || f.endsWith('.html'));
for (const f of files) {
  const html = fs.readFileSync(path.join(SRC, f), 'utf8');
  const text = stripHtml(html);
  const outName = f.replace(/\.html?$/i, '.txt');
  fs.writeFileSync(path.join(OUT, outName), text, 'utf8');
  console.log(`${f}: ${html.length} -> ${text.length} chars`);
}
