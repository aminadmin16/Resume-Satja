"use client";

import { useState } from "react";

export default function DownloadButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    const exportTarget = document.getElementById("resume-export");

    if (!exportTarget || isExporting) {
      return;
    }

    setIsExporting(true);

    let restoreImages = () => {};

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);

      await waitForExportAssets(exportTarget);
      restoreImages = await inlineImagesForExport(exportTarget);

      const canvas = await html2canvas(exportTarget, {
        backgroundColor: "#f7f9fc",
        allowTaint: true,
        imageTimeout: 15000,
        logging: false,
        scale: 2,
        useCORS: false,
        windowHeight: document.documentElement.scrollHeight,
        windowWidth: document.documentElement.scrollWidth,
      });

      await paintImagesOnCanvas(canvas, exportTarget);

      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ format: "a4", orientation: "portrait", unit: "mm" });
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 8;
      const renderWidth = pageWidth - margin * 2;
      const renderHeight = (canvas.height * renderWidth) / canvas.width;
      const pageContentHeight = pageHeight - margin * 2;
      let yPosition = margin;
      let remainingHeight = renderHeight;

      pdf.addImage(imageData, "PNG", margin, yPosition, renderWidth, renderHeight);
      remainingHeight -= pageContentHeight;

      while (remainingHeight > 0) {
        yPosition -= pageContentHeight;
        pdf.addPage();
        pdf.addImage(imageData, "PNG", margin, yPosition, renderWidth, renderHeight);
        remainingHeight -= pageContentHeight;
      }

      await addImagesDirectlyToPdf(pdf, exportTarget, {
        margin,
        pageContentHeight,
        renderWidth,
      });

      pdf.save("Satja-Chaiseanpha-Resume.pdf");
    } finally {
      restoreImages();
      setIsExporting(false);
    }
  };

  return (
    <button className="download-button" disabled={isExporting} onClick={handleDownload} type="button">
      {isExporting ? "Exporting PDF..." : "Download Resume"}
    </button>
  );
}

async function waitForExportAssets(exportTarget) {
  await document.fonts?.ready;

  const images = [...exportTarget.querySelectorAll("img")];

  await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete && image.naturalWidth > 0) {
            resolve();
            return;
          }

          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        }),
    ),
  );

  await Promise.all(images.map((image) => image.decode?.().catch(() => undefined)));
}

async function inlineImagesForExport(exportTarget) {
  const images = [...exportTarget.querySelectorAll("img")];
  const originalSources = [];

  await Promise.all(
    images.map(async (image) => {
      const originalSource = image.getAttribute("src");
      const imageUrl = image.currentSrc || image.src;

      if (!originalSource || imageUrl.startsWith("data:")) {
        return;
      }

      originalSources.push([image, originalSource]);

      try {
        image.src = await imageUrlToDataUrl(imageUrl);
        await waitForImage(image);
        await image.decode?.().catch(() => undefined);
      } catch {
        image.setAttribute("src", originalSource);
      }
    }),
  );

  return () => {
    originalSources.forEach(([image, source]) => {
      image.setAttribute("src", source);
    });
  };
}

async function imageUrlToDataUrl(imageUrl) {
  const response = await fetch(imageUrl, { cache: "force-cache" });
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

function waitForImage(image) {
  return new Promise((resolve) => {
    if (image.complete && image.naturalWidth > 0) {
      resolve();
      return;
    }

    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}

async function paintImagesOnCanvas(canvas, exportTarget) {
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  const targetRect = exportTarget.getBoundingClientRect();
  const scaleX = canvas.width / targetRect.width;
  const scaleY = canvas.height / targetRect.height;
  const images = [...exportTarget.querySelectorAll("img")];

  await Promise.all(
    images.map(async (image) => {
      const sourceImage = await createDrawableImage(image.src);
      const imageRect = image.getBoundingClientRect();
      const x = (imageRect.left - targetRect.left) * scaleX;
      const y = (imageRect.top - targetRect.top) * scaleY;
      const width = imageRect.width * scaleX;
      const height = imageRect.height * scaleY;

      context.save();
      context.beginPath();
      context.arc(x + width / 2, y + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
      context.clip();
      drawImageCover(context, sourceImage, x, y, width, height);
      context.restore();
    }),
  );
}

function createDrawableImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = source;
  });
}

function drawImageCover(context, image, x, y, width, height) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const targetRatio = width / height;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > targetRatio) {
    sourceWidth = image.naturalHeight * targetRatio;
    sourceX = (image.naturalWidth - sourceWidth) / 2;
  } else {
    sourceHeight = image.naturalWidth / targetRatio;
    sourceY = (image.naturalHeight - sourceHeight) * 0.24;
  }

  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

async function addImagesDirectlyToPdf(pdf, exportTarget, layout) {
  const targetRect = exportTarget.getBoundingClientRect();
  const pdfScale = layout.renderWidth / targetRect.width;
  const images = [...exportTarget.querySelectorAll("img")];

  await Promise.all(
    images.map(async (image) => {
      const imageRect = image.getBoundingClientRect();
      const imageData = await createCircularImageDataUrl(image.src);
      const imageX = layout.margin + (imageRect.left - targetRect.left) * pdfScale;
      const imageY = layout.margin + (imageRect.top - targetRect.top) * pdfScale;
      const imageWidth = imageRect.width * pdfScale;
      const imageHeight = imageRect.height * pdfScale;
      const pageIndex = Math.floor((imageY - layout.margin) / layout.pageContentHeight);
      const pageY = imageY - pageIndex * layout.pageContentHeight;

      pdf.setPage(pageIndex + 1);
      pdf.addImage(imageData, "PNG", imageX, pageY, imageWidth, imageHeight);
    }),
  );
}

async function createCircularImageDataUrl(source) {
  const image = await createDrawableImage(source);
  const size = 512;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = size;
  canvas.height = size;

  if (!context) {
    return source;
  }

  context.clearRect(0, 0, size, size);
  context.save();
  context.beginPath();
  context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  context.clip();
  drawImageCover(context, image, 0, 0, size, size);
  context.restore();

  return canvas.toDataURL("image/png");
}
