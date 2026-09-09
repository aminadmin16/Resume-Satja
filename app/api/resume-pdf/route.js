import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const dynamic = 'force-static';
// Retain the original download URL for existing links.
export async function GET() {
  return new Response(await readFile(path.join(process.cwd(), 'public/documents/Satja-Chaiseanpha-resume-en.pdf')), {
    headers: {'Content-Type':'application/pdf', 'Content-Disposition':'attachment; filename="Satja-Chaiseanpha-resume-en.pdf"'},
  });
}
