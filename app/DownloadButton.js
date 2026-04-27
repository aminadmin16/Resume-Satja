"use client";

import { useState } from "react";

export default function DownloadButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    if (isExporting) {
      return;
    }

    setIsExporting(true);
    try {
      const response = await fetch("/api/resume-pdf", { method: "GET" });
      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        throw new Error(errorText || `PDF export failed (${response.status})`);
      }

      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Satja-Chaiseanpha-Resume.pdf";
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      alert(error?.message || "Failed to export PDF.");
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
