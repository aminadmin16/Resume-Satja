"use client";
export default function DownloadButton({lang = 'th', type = 'resume'}) {
  return <a className="button primary" href={`/documents/Satja-Chaiseanpha-${type}-${lang}.pdf`} download>{lang === 'th' ? 'ดาวน์โหลด' : 'Download'} {type === 'cv' ? 'CV' : 'Resume'} <span aria-hidden="true">↓</span></a>;
}
