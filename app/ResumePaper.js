import { profileHighlights, TECH_KEYWORDS, skillGroups, content } from "./resumeData";

/* ── ICONS — white glyph inside a dark circle (reference style) ── */
const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
};

function IconPhone() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6.6 3.5 8.9 3l2 4.2-2 1.4a12 12 0 0 0 6.5 6.5l1.4-2 4.2 2-.5 2.3a2 2 0 0 1-2.2 1.6C11.5 18.4 5.6 12.5 5 5.7a2 2 0 0 1 1.6-2.2Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <rect height="14" rx="2.5" width="18" x="3" y="5" />
      <path d="m3.8 6.4 7.1 5.4a2 2 0 0 0 2.2 0l7.1-5.4" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 21c4.2-4.4 6.3-7.8 6.3-10.4A6.3 6.3 0 0 0 5.7 10.6C5.7 13.2 7.8 16.6 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="m9 8-4.5 4L9 16M15 8l4.5 4L15 16" />
    </svg>
  );
}

/* ── TEXT HELPERS ── */
function escapeRegExp(v) {
  return v.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

function HighlightText({ text }) {
  const pattern = new RegExp(`(${TECH_KEYWORDS.map(escapeRegExp).join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    TECH_KEYWORDS.includes(part)
      ? <span className="text-highlight" key={i}>{part}</span>
      : part
  );
}

function BulletList({ items }) {
  return (
    <ul className="dot-list">
      {items.map((item, i) => (
        <li key={i}><HighlightText text={item} /></li>
      ))}
    </ul>
  );
}

/* ── PAPER ── */
export default function ResumePaper({ lang = "en" }) {
  const c = content[lang];

  const contactRows = [
    { icon: <IconPhone />, label: "Tel", value: <a href="tel:0835014158">083-501-4158</a> },
    { icon: <IconMail />, label: "Email", value: <a href="mailto:knownaddress90@gmail.com">knownaddress90@gmail.com</a> },
    {
      icon: <IconCode />,
      label: "GitHub",
      value: (
        <a href="https://github.com/aminadmin16" rel="noopener noreferrer" target="_blank">
          github.com/aminadmin16
        </a>
      ),
    },
    { icon: <IconPin />, label: "Location", value: "หนองบัวลำภู · Thailand" },
  ];

  const siteRows = [
    { label: "Online Resume", href: "https://resume-satja.vercel.app", text: "resume-satja.vercel.app" },
    { label: "PF Exam (Next.js)", href: "https://pf-exam-final.vercel.app", text: "pf-exam-final.vercel.app" },
  ];

  return (
    <div className="paper">
      <span aria-hidden="true" className="paper-blob paper-blob--a" />
      <span aria-hidden="true" className="paper-blob paper-blob--b" />

      <div className="paper-grid">
        {/* ══ LEFT COLUMN ══ */}
        <div className="col-left">
          <div className="profile-card">
            <div className="photo-frame">
              <img alt="Satja Chaiseanpha" className="photo" src="/profile-satja.png" />
            </div>

            <h1 className="person-name">SATJA<br />CHAISEANPHA</h1>

            <h2 className="block-title" id="contact">{c.sections.contact}</h2>
            <ul className="contact-list">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <span aria-hidden="true" className="contact-icon">{row.icon}</span>
                  <span className="contact-text">{row.value}</span>
                </li>
              ))}
            </ul>

            <h2 className="block-title" id="skills">{c.sections.skills}</h2>
            <div className="skill-list">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.key}>
                  <p className="skill-group-name">{group.title[lang]}</p>
                  <ul className="skill-run">
                    {group.skills.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="block-title">{c.sections.portfolio}</h2>
            <dl className="pair-table">
              {siteRows.map((row) => (
                <div className="pair-row" key={row.href}>
                  <dt>{row.label}</dt>
                  <dd>
                    <a href={row.href} rel="noopener noreferrer" target="_blank">{row.text}</a>
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="block-title" id="education">{c.sections.education}</h2>
            <div className="edu-block">
              <p className="edu-school">{c.education.school}</p>
              <p className="edu-degree">{c.education.degree}</p>
              <p className="edu-gpa">{c.education.gpa}</p>
              <time className="edu-date">{c.education.date}</time>
              <p className="edu-note">{c.education.note}</p>
            </div>
          </div>

          {/* Block that sits on the sheet, below the white card */}
          <div className="outer-block">
            <h2 className="block-title">{c.sections.highlights}</h2>
            <ul className="skill-run skill-run--center">
              {profileHighlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="col-right">
          <div className="right-panel">
            <section className="about-card" id="summary">
              <span className="tag-pill">{c.eyebrow}</span>
              <p className="about-text"><HighlightText text={c.profileSummary} /></p>
            </section>

            <h2 className="block-title" id="experience">{c.sections.experience}</h2>
            <div className="exp-list">
              {c.experiences.map((exp) => (
                <article className="exp" key={exp.title}>
                  <div className="exp-head">
                    <span className="exp-pill">{exp.title}</span>
                    <time className="exp-date">{exp.date}</time>
                  </div>
                  <p className="exp-meta">
                    {exp.meta}
                    {exp.salary ? <span className="exp-salary">{exp.salary}</span> : null}
                  </p>
                  {exp.intro ? <p className="exp-label">{exp.intro}</p> : null}
                  <BulletList items={exp.bullets} />
                  {exp.projectsTitle ? (
                    <>
                      <p className="exp-label">{exp.projectsTitle}</p>
                      <BulletList items={exp.projects} />
                    </>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
