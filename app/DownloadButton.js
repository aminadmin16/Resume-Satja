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

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);

      await waitForExportAssets(exportTarget);

      const canvas = await html2canvas(exportTarget, {
        backgroundColor: "#f7f9fc",
        imageTimeout: 15000,
        logging: false,
        scale: 2,
        useCORS: true,
        windowHeight: document.documentElement.scrollHeight,
        windowWidth: document.documentElement.scrollWidth,
      });
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

      pdf.save("Satja-Chaiseanpha-Resume.pdf");
    } finally {
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
