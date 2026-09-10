"use client";

import { useState } from 'react';
import previews from './documentPreviews.json';
import DownloadButton from './DownloadButton';
import Icon from './Icon';

export default function DocumentPreview({ type, lang }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  const pages = previews[`${type}-${lang}`].pages;
  const page = pages[pageIndex];
  const th = lang === 'th';
  const pageLabel = th ? `หน้า ${pageIndex + 1} จาก ${pages.length}` : `Page ${pageIndex + 1} of ${pages.length}`;

  function goTo(index) {
    setLoading(true);
    setError(false);
    setPageIndex(index);
  }

  return (
    <div className="document-reader" id="document-preview" aria-label={th ? 'ตัวอย่างเอกสาร' : 'Document preview'}>
      <div className="document-reader-toolbar">
        <strong>{type === 'cv' ? 'CV' : 'Resume'} · {lang.toUpperCase()}</strong>
        <div className="document-reader-controls" role="group" aria-label={th ? 'เปลี่ยนหน้าเอกสาร' : 'Document pages'}>
          <button type="button" className="reader-control" disabled={pageIndex === 0} aria-label={th ? 'หน้าก่อนหน้า' : 'Previous page'} onClick={() => goTo(pageIndex - 1)}><Icon name="chevron" className="reader-previous"/></button>
          <span className="reader-page-count" aria-live="polite">{pageLabel}</span>
          <button type="button" className="reader-control" disabled={pageIndex === pages.length - 1} aria-label={th ? 'หน้าถัดไป' : 'Next page'} onClick={() => goTo(pageIndex + 1)}><Icon name="chevron" className="reader-next"/></button>
        </div>
        <div className="document-reader-controls" role="group" aria-label={th ? 'ขนาดตัวอย่าง' : 'Preview size'}>
          <button type="button" className="reader-control" disabled={zoom === 1} aria-label={th ? 'ย่อ' : 'Zoom out'} onClick={() => setZoom(current => Math.max(1, current - .5))}><Icon name="minus"/></button>
          <button type="button" className="reader-zoom" aria-label={th ? 'พอดีความกว้าง' : 'Fit to width'} onClick={() => setZoom(1)}>{Math.round(zoom * 100)}%</button>
          <button type="button" className="reader-control" disabled={zoom === 2.5} aria-label={th ? 'ขยาย' : 'Zoom in'} onClick={() => setZoom(current => Math.min(2.5, current + .5))}><Icon name="plus"/></button>
        </div>
      </div>
      <div className="document-reader-viewport" key={pageIndex} tabIndex={0} aria-label={`${type.toUpperCase()} ${lang.toUpperCase()} · ${pageLabel}`} aria-busy={loading}>
        {loading && <div className="reader-loading" role="status"><span/>{th ? 'กำลังเปิดหน้าเอกสาร…' : 'Loading page…'}</div>}
        {error ? <div className="reader-error" role="alert"><p>{th ? 'โหลดหน้านี้ไม่สำเร็จ ลองเปิดอีกครั้งหรือดาวน์โหลด PDF ได้ครับ' : 'This page could not load. Try again or download the PDF.'}</p><div className="actions"><button type="button" className="button secondary" onClick={() => { setLoading(true); setError(false); setRetry(current => current + 1); }}>{th ? 'ลองอีกครั้ง' : 'Try again'}</button><DownloadButton lang={lang} type={type}/></div></div> :
          <img key={`${pageIndex}-${retry}`} className="document-reader-page" src={`${page.src}?retry=${retry}`} width={page.width} height={page.height} style={{ width: `${zoom * 100}%` }} alt={`${type.toUpperCase()} ${lang.toUpperCase()} · ${pageLabel} · ${pageIndex === 0 ? (th ? 'ประวัติและประสบการณ์' : 'Profile and experience') : (th ? 'ใบรับรองและเอกสารแนบ' : 'Certificate attachment')}`} onLoad={() => setLoading(false)} onError={() => { setLoading(false); setError(true); }}/>
        }
      </div>
    </div>
  );
}
