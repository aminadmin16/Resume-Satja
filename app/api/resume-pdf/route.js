import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright";

export const runtime = "nodejs";

/** A4 ขนาดจุด (pt) ตามมาตรฐาน PDF */
const A4_W = 595.28;
const A4_H = 841.89;

/**
 * แคปภาพ #resume-export จาก Chromium แล้วใส่ PDF หนึ่งหน้า
 * ให้ผลลัพธ์ตรงกับที่เห็นบนจอ (สี พื้นหลัง glass ฯลฯ) ไม่ผ่าน pipeline พิมพ์ที่บิดเลย์เอาต์
 */
export async function GET(request) {
  const url = new URL(request.url);
  const targetUrl = `${url.origin}/?pdf=1`;

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1700 },
      deviceScaleFactor: 2,
    });

    await page.goto(targetUrl, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "screen" });

    await page.evaluate(async () => {
      await document.fonts?.ready;
      const images = Array.from(document.images);
      await Promise.all(
        images.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete && img.naturalWidth > 0) return resolve();
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }),
        ),
      );
    });

    await page.waitForFunction(() => globalThis.__resumePdfReady === true, {
      timeout: 30_000,
    });

    await page.evaluate(
      () =>
        new Promise((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve(undefined));
          });
        }),
    );

    const pngBuffer = await page.locator("#resume-export").screenshot({
      scale: "device",
      type: "png",
    });

    const pdfDoc = await PDFDocument.create();
    const image = await pdfDoc.embedPng(pngBuffer);
    const pdfPage = pdfDoc.addPage([A4_W, A4_H]);

    const iw = image.width;
    const ih = image.height;
    const s = Math.min(A4_W / iw, A4_H / ih);
    const dw = iw * s;
    const dh = ih * s;
    const x = (A4_W - dw) / 2;
    const y = (A4_H - dh) / 2;

    pdfPage.drawImage(image, {
      height: dh,
      width: dw,
      x,
      y,
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "no-store",
        "Content-Disposition": 'attachment; filename="Satja-Chaiseanpha-Resume.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
