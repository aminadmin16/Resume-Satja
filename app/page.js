import dynamic from "next/dynamic";

const ResumePdfOnePage = dynamic(() => import("./ResumePdfOnePage"));
const ResumeClient = dynamic(() => import("./ResumeClient"));

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const isPdf = params?.pdf === "1";

  if (isPdf) {
    return (
      <main className="resume-page resume-page--pdf">
        <ResumePdfOnePage>
          <PdfContent />
        </ResumePdfOnePage>
      </main>
    );
  }

  return <ResumeClient />;
}

// Static English content for PDF export only
function PdfContent() {
  const profileHighlights = [
    "Full Stack Developer", ".NET + Angular", "Next.js / React",
    "Tableau BI", "AI-Assisted Dev", "4+ Years Exp.",
  ];

  const TECH_KEYWORDS = [
    ".NET", ".NET (C#)", "Angular", "Angular (TypeScript)", "React", "Next.js",
    "Tableau", "RESTful API", "Java", "Spring Boot", "DevExtreme", "SyncFusion",
    "TypeScript", "Node.js", "SQL",
  ];

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

  function SectionTitle({ title }) {
    return (
      <div className="section-title">
        <span>{title}</span>
        <div />
      </div>
    );
  }

  function ResumeList({ items }) {
    return (
      <ul className="resume-list">
        {items.map((item, i) => (
          <li key={i}><HighlightText text={item} /></li>
        ))}
      </ul>
    );
  }

  const experiences = [
    {
      title: "Multita Co.,Ltd. — Software Developer",
      date: "Jul 2022 – Present",
      meta: "Full-time · Remote (Udon Thani / Khon Kaen)",
      salary: "Salary: 20,000 THB / month",
      intro: "Key Responsibilities:",
      bullets: [
        "Full-Stack Development: Designed and delivered enterprise Web Applications using Angular (TypeScript) + SyncFusion / DevExtreme on the frontend, backed by .NET (C#) RESTful APIs — serving clients in Healthcare, Insurance, and Retail verticals.",
        "Business Intelligence: Architected large-scale data pipelines and built advanced Tableau Dashboards for Cash Conversion Cost analysis, enabling Finance teams to monitor cash flow in near-real-time.",
        "Mobile Development: Built and maintained Android sales and motor-insurance applications using Java (Android Studio).",
      ],
      projectsTitle: "Notable Projects:",
      projects: [
        "Sikarin Hospital — HIS Module: Developed complex patient-data management modules within the Hospital Information System using Angular + .NET.",
        "IRPC (Energy Sector) — BI Reporting: Led Tableau development for executive-level insight reports supporting strategic decision-making across refinery operations.",
        "TQM & Viriyah Insurance — Motor Insurance Platform: Built high-traffic Frontend for car insurance workflows.",
        "PUMPUI — Retail POS System: Delivered a full sales and inventory management solution to improve operational efficiency.",
      ],
    },
    {
      title: "Freelance & Technical Consultant",
      date: "Sep 2023 – Present",
      meta: "Self-employed · Remote",
      salary: "Est. Income: 20,000 – 40,000 THB / month",
      bullets: [
        "Multi-Framework Full-Stack: Delivered client projects using Angular / DevExtreme for complex enterprise UIs and React / Next.js for SEO-optimized, high-performance public-facing websites.",
        "Backend & API Design: Designed and built scalable RESTful APIs with .NET (C#) and Node.js, connecting to SQL/NoSQL databases with clean, maintainable architecture.",
        "Technical Consulting: Translated ambiguous business requirements into clear technical specs and working digital products.",
      ],
    },
    {
      title: "CHAREON TUT Co.,Ltd. — Full Stack Developer (Intern)",
      date: "Nov 2021 – Feb 2022",
      meta: "Internship · Pathum Thani",
      bullets: [
        "Frontend: Implemented pixel-perfect UIs with Angular (TypeScript, HTML, SCSS) aligned to design specifications.",
        "Backend: Built server-side modules using Java + Spring Boot (MVC architecture).",
        "SDLC Exposure: Participated in the full software development lifecycle — from logic analysis through implementation and QA.",
      ],
    },
  ];

  const skillGroups = [
    { title: "FRONTEND", skills: [{ name: "Angular (TypeScript)" }, { name: "React" }, { name: "Next.js" }, { name: "DevExtreme" }, { name: "SyncFusion" }, { name: "HTML / CSS / SCSS" }] },
    { title: "BACKEND", skills: [{ name: ".NET (C#)" }, { name: "RESTful API" }, { name: "Node.js" }, { name: "Spring Boot (Java)" }] },
    { title: "DATA & BI", skills: [{ name: "Tableau" }, { name: "SQL / MSSQL" }, { name: "Data Modeling" }] },
    { title: "AI & TOOLS", skills: [{ name: "AI-Assisted Dev" }, { name: "Prompt Engineering" }, { name: "Git & GitHub" }, { name: "Postman" }] },
  ];

  return (
    <>
      <section className="hero-section" id="summary">
        <div className="container">
          <div className="hero-card">
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <div className="identity-card">
                  <div className="avatar-frame">
                    <img alt="Satja Chaiseanpha" className="avatar-photo" src="/profile-satja.png" />
                  </div>
                  <p className="eyebrow mb-2">Software Developer</p>
                  <h1>
                    <span>SATJA CHAISEANPHA</span>
                    <span>(FLUKE)</span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-copy">
                  <div className="contact-strip">
                    <a href="mailto:knownaddress90@gmail.com">knownaddress90@gmail.com</a>
                    <a href="tel:0835014158">083-501-4158</a>
                    <a href="https://github.com/aminadmin16" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://pf-exam-final.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    <span>หนองบัวลำภู · Thailand</span>
                  </div>
                  <h2>PROFESSIONAL SUMMARY</h2>
                  <p>
                    <HighlightText text="Full Stack Developer with 4+ years of hands-on experience delivering production-grade web applications across Healthcare, Energy, Insurance, and Retail sectors. Specialized in .NET (C#) + Angular (TypeScript) for enterprise systems, and React / Next.js for high-performance web. Proven track record building scalable RESTful APIs, advanced Tableau BI dashboards, and leading freelance projects end-to-end." />
                  </p>
                  <div className="profile-chips">
                    {profileHighlights.map((h) => <span key={h}>{h}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="section-card" id="experience">
                <SectionTitle title="WORK EXPERIENCE" />
                <div className="timeline">
                  {experiences.map((exp) => (
                    <article className="timeline-item" key={exp.title}>
                      <div className="timeline-dot" />
                      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                        <h3>{exp.title}</h3>
                        <time>{exp.date}</time>
                      </div>
                      {exp.meta ? <p className="meta">{exp.meta}</p> : null}
                      {exp.salary ? <p className="salary-line"><span className="salary-badge">{exp.salary}</span></p> : null}
                      {exp.intro ? <p className="label-line">{exp.intro}</p> : null}
                      <ResumeList items={exp.bullets} />
                      {exp.projectsTitle ? (
                        <>
                          <p className="label-line mt-3">{exp.projectsTitle}</p>
                          <ResumeList items={exp.projects} />
                        </>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <aside className="sticky-sidebar">
                <div className="section-card education-card" id="education">
                  <SectionTitle title="EDUCATION" />
                  <div className="d-flex justify-content-between gap-3">
                    <div>
                      <h3>Udon Thani Rajabhat University</h3>
                      <p>Bachelor of Science — Computer Science</p>
                      <p><strong>GPA: 3.14 / 4.00</strong></p>
                    </div>
                    <time>2017–2021</time>
                  </div>
                </div>
                <div className="section-card skills-card" id="skills">
                  <SectionTitle title="SKILLS & TECHNOLOGIES" />
                  <div className="skill-grid">
                    {skillGroups.map((group) => (
                      <div className="skill-group skill-group-plain" key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                          {group.skills.map((skill) => (
                            <li key={skill.name}>
                              <div className="skill-line"><span>{skill.name}</span></div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
