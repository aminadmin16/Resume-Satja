"use client";
import { useEffect, useRef, useState } from "react";
import DownloadButton from "./DownloadButton";
import ResumePaper from "./ResumePaper";
import { content } from "./resumeData";

/** A4 width in CSS pixels (210mm at 96dpi). */
const A4_WIDTH_PX = (210 * 96) / 25.4;

export default function ResumeClient() {
  const [lang, setLang] = useState("en");
  const stageRef = useRef(null);
  const c = content[lang];

  /* Keep the A4 sheet whole on narrow screens by scaling it down. */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const fit = () => {
      const styles = getComputedStyle(stage);
      const available =
        stage.clientWidth -
        Number.parseFloat(styles.paddingLeft) -
        Number.parseFloat(styles.paddingRight);
      const scale = Math.min(1, available / A4_WIDTH_PX);
      stage.style.setProperty("--paper-scale", String(scale));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-root">
      {/* ── NAV ── */}
      <nav aria-label="Resume navigation" className="top-nav">
        <a aria-label="Go to top" className="nav-brand" href="#summary">SC</a>

        <div className="nav-center">
          {c.navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <div aria-label="Language" className="lang-toggle" role="group">
            <button
              aria-pressed={lang === "en"}
              className={`lang-btn${lang === "en" ? " lang-btn--active" : ""}`}
              onClick={() => setLang("en")}
              type="button"
            >EN</button>
            <button
              aria-pressed={lang === "th"}
              className={`lang-btn${lang === "th" ? " lang-btn--active" : ""}`}
              onClick={() => setLang("th")}
              type="button"
            >TH</button>
          </div>
          <DownloadButton />
        </div>
      </nav>

      <main className="paper-stage" ref={stageRef}>
        <div className="paper-fit">
          <ResumePaper lang={lang} />
        </div>
      </main>
    </div>
  );
}
