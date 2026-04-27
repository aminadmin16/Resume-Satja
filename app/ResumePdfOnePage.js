"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * โหมด export เท่านั้น (?pdf=1): กรอบ A4 หนึ่งแผ่น + scale ให้ครบในหน้าเดียว
 * ตั้ง __resumePdfReady ให้ Playwright รอก่อนสร้าง PDF
 */
export default function ResumePdfOnePage({ children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(0);

  const fit = useCallback(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (typeof globalThis.window !== "undefined") {
      globalThis.__resumePdfReady = false;
    }

    const signalReady = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          globalThis.__resumePdfReady = true;
        });
      });
    };

    if (!outer || !inner) {
      signalReady();
      return;
    }

    inner.style.transform = "";
    inner.style.left = "0px";
    inner.style.top = "0px";
    inner.classList.remove("resume-pdf-inner--ready");

    const W = outer.clientWidth;
    const H = outer.clientHeight;
    if (W < 2 || H < 2) {
      signalReady();
      return;
    }

    const iw = inner.scrollWidth;
    const ih = inner.scrollHeight;
    if (ih < 1) {
      signalReady();
      return;
    }

    const s = Math.min(1, W / iw, H / ih);
    const scaledW = iw * s;
    const scaledH = ih * s;
    const offsetX = Math.max(0, (W - scaledW) / 2);
    const offsetY = Math.max(0, (H - scaledH) / 2);

    inner.style.left = `${offsetX}px`;
    inner.style.top = `${offsetY}px`;
    inner.style.transform = `scale(${s})`;
    inner.style.transformOrigin = "top left";
    globalThis.__resumeFitScale = s;

    inner.classList.add("resume-pdf-inner--ready");
    signalReady();
  }, []);

  useEffect(() => {
    let cancelled = false;

    const runFit = async () => {
      await document.fonts?.ready?.catch(() => {});
      if (!cancelled) fit();
    };

    void runFit();

    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(fit);
    };

    const ro = new ResizeObserver(onResize);
    if (outerRef.current) ro.observe(outerRef.current);

    globalThis.addEventListener("resize", onResize);

    const imgs = document.querySelectorAll("#resume-export img");
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", fit, { once: true });
        img.addEventListener("error", fit, { once: true });
      }
    });

    globalThis.addEventListener("load", fit);

    return () => {
      cancelled = true;
      ro.disconnect();
      globalThis.removeEventListener("resize", onResize);
      globalThis.removeEventListener("load", fit);
      cancelAnimationFrame(rafRef.current);
      globalThis.__resumePdfReady = false;
    };
  }, [fit]);

  return (
    <div className="resume-pdf-stage">
      <div className="resume-pdf-sheet" id="resume-export" ref={outerRef}>
        <div className="resume-pdf-inner" ref={innerRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
