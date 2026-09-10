import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createHash } from 'node:crypto';
import { homedir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { PDFDocument } from 'pdf-lib';

const run = promisify(execFile);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

export async function generatePreviews() {
  const root = process.cwd();
  const output = path.join(root, 'public/documents/previews');
  const scratch = path.join(root, 'tmp/pdfs/previews');
  await mkdir(output, { recursive: true });
  await mkdir(scratch, { recursive: true });
  let renderer = process.env.PDFTOPPM || 'pdftoppm';
  if (!process.env.PDFTOPPM && process.platform === 'win32') {
    const bundled = path.join(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin/pdftoppm.exe');
    try { await access(bundled); renderer = bundled; } catch { /* Fall back to PATH. */ }
  }
  const manifest = {};
  const unique = new Set();
  for (const lang of ['th', 'en']) for (const type of ['resume', 'cv']) {
    const source = path.join(root, 'public/documents', `Satja-Chaiseanpha-${type}-${lang}.pdf`);
    const bytes = await readFile(source);
    const pdf = await PDFDocument.load(bytes);
    const pages = [];
    for (const [index, page] of pdf.getPages().entries()) {
      const prefix = path.join(scratch, `${type}-${lang}-${index + 1}`);
      await run(renderer, ['-f', String(index + 1), '-l', String(index + 1), '-singlefile', '-scale-to', '2200', '-jpeg', '-jpegopt', 'quality=92', source, prefix], { windowsHide: true });
      const image = await readFile(`${prefix}.jpg`);
      const filename = `${hash(image).slice(0, 24)}.jpg`;
      if (!unique.has(filename)) { await writeFile(path.join(output, filename), image); unique.add(filename); }
      const rotated = Math.abs(page.getRotation().angle) % 180 === 90;
      const width = rotated ? page.getHeight() : page.getWidth();
      const height = rotated ? page.getWidth() : page.getHeight();
      pages.push({ src: `/documents/previews/${filename}`, width: Math.round(2200 * width / Math.max(width, height)), height: Math.round(2200 * height / Math.max(width, height)) });
    }
    manifest[`${type}-${lang}`] = { pdfSha256: hash(bytes), pages };
    console.log(`${type}-${lang}: ${pages.length} preview pages`);
  }
  await writeFile(path.join(root, 'app/documentPreviews.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`${unique.size} unique preview images; certificate pages shared across documents`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await generatePreviews();
