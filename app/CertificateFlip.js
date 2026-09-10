"use client";

import { useState } from 'react';
import Icon from './Icon';

export default function CertificateFlip({ certificate, lang }) {
  const [back, setBack] = useState(false);
  const th = lang === 'th';
  const hintId = `${certificate.id}-flip-hint`;

  function previewBack(event) {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) {
      setBack(true);
    }
  }

  return (
    <button
      type="button"
      className="certificate-flip"
      data-flipped={back}
      aria-label={`${th ? 'แสดงด้านหลังใบรับรอง' : 'Show the back of the certificate'}: ${certificate.title[lang]}`}
      aria-pressed={back}
      aria-describedby={hintId}
      onPointerEnter={previewBack}
      onPointerLeave={event => { if (event.pointerType === 'mouse') setBack(false); }}
      onClick={() => setBack(current => !current)}
      onKeyDown={event => { if (event.key === 'Escape') setBack(false); }}
      onBlur={() => setBack(false)}
    >
      <span className="certificate-flip-stage">
        <span className="certificate-flip-inner">
          {[
            { file: certificate.file, isBack: false, label: th ? 'ด้านหน้า · ใบรับรอง' : 'Front · Certificate' },
            { file: certificate.supplement, isBack: true, label: th ? 'ด้านหลัง · รายละเอียดหลักสูตร' : 'Back · Course syllabus' },
          ].map(side => (
            <span key={side.file} className={`certificate-flip-face${side.isBack ? ' certificate-flip-face--back' : ''}`} aria-hidden={back !== side.isBack}>
              <span className={`certificate-image${certificate.rotation ? ' certificate-image--rotated' : ''}`}>
                <img src={side.file} alt={`${certificate.title[lang]} — ${side.label}`} loading="lazy" draggable="false"/>
              </span>
            </span>
          ))}
        </span>
      </span>
      <span className="certificate-flip-caption">
        <span className="certificate-flip-side" aria-live="polite">
          <Icon name="flip"/>
          {back ? (th ? 'ด้านหลัง · รายละเอียดหลักสูตร' : 'Back · Course syllabus') : (th ? 'ด้านหน้า · ใบรับรอง' : 'Front · Certificate')}
        </span>
        <span className="certificate-flip-hint" id={hintId}>
          <span className="certificate-flip-mouse-hint">{th ? 'วางเมาส์หรือคลิกเพื่อพลิก' : 'Hover or click to flip'}</span>
          <span className="certificate-flip-touch-hint">{th ? 'แตะเพื่อพลิกหน้า–หลัง' : 'Tap to flip front / back'}</span>
        </span>
      </span>
    </button>
  );
}
