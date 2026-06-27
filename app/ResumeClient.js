"use client";
import { useState } from "react";
import DownloadButton from "./DownloadButton";

const profileHighlights = [
  "Full Stack Developer",
  ".NET + Angular",
  "Next.js / React",
  "Tableau BI",
  "AI-Assisted Dev",
  "4+ Years Exp.",
];

const TECH_KEYWORDS = [
  ".NET", ".NET (C#)", "Angular", "Angular (TypeScript)", "React", "Next.js",
  "Tableau", "RESTful API", "Java", "Spring Boot", "DevExtreme", "SyncFusion",
  "TypeScript", "Node.js", "SQL",
];

const skillGroups = [
  {
    key: "frontend",
    title: { en: "Frontend", th: "Frontend" },
    skills: ["Angular (TypeScript)", "React", "Next.js", "DevExtreme", "SyncFusion", "HTML / CSS / SCSS"],
  },
  {
    key: "backend",
    title: { en: "Backend", th: "Backend" },
    skills: [".NET (C#)", "RESTful API", "Node.js", "Spring Boot (Java)"],
  },
  {
    key: "data",
    title: { en: "Data & BI", th: "ข้อมูลและ BI" },
    skills: ["Tableau", "SQL / MSSQL", "Data Modeling"],
  },
  {
    key: "ai",
    title: { en: "AI & Tools", th: "AI และเครื่องมือ" },
    skills: ["AI-Assisted Dev", "Prompt Engineering", "ChatGPT API", "Git & GitHub", "Postman", "Arduino (IoT)"],
  },
];

const content = {
  en: {
    eyebrow: "Software Developer",
    profileSummary:
      "Full Stack Developer with 4+ years of hands-on experience delivering production-grade web applications across Healthcare, Energy, Insurance, and Retail sectors. Specialized in .NET (C#) + Angular (TypeScript) for enterprise systems, and React / Next.js for high-performance web. Proven track record building scalable RESTful APIs, advanced Tableau BI dashboards, and leading freelance projects end-to-end. Passionate about AI-assisted development — not just using AI, but engineering precise, logic-driven outputs that translate business requirements into reliable, maintainable software.",
    availabilityText: "Available · Start within 7 days · Full-time & Freelance",
    navItems: [
      { href: "#summary", label: "Summary" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
    ],
    sections: {
      contact: "CONTACT",
      portfolio: "WEBSITES",
      skills: "SKILLS",
      availability: "AVAILABILITY",
      summary: "PROFESSIONAL SUMMARY",
      experience: "WORK EXPERIENCE",
      education: "EDUCATION",
    },
    experiences: [
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
          "TQM & Viriyah Insurance — Motor Insurance Platform: Built high-traffic Frontend for car insurance workflows, handling large concurrent user loads.",
          "PUMPUI — Retail POS System: Delivered a full sales and inventory management solution to improve operational efficiency for retail stores.",
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
          "Technical Consulting: Translated ambiguous business requirements into clear technical specs and working digital products — acting as sole architect, developer, and delivery lead.",
        ],
      },
      {
        title: "CHAREON TUT Co.,Ltd. — Full Stack Developer (Intern)",
        date: "Nov 2021 – Feb 2022",
        meta: "Internship · Pathum Thani",
        bullets: [
          "Frontend: Implemented pixel-perfect UIs with Angular (TypeScript, HTML, SCSS) aligned to design specifications.",
          "Backend: Built server-side modules using Java + Spring Boot (MVC architecture) to separate business logic cleanly from data access.",
          "SDLC Exposure: Participated in the full software development lifecycle — from logic analysis through implementation and QA.",
        ],
      },
    ],
    education: {
      school: "Udon Thani Rajabhat University",
      degree: "Bachelor of Science — Computer Science",
      gpa: "GPA: 3.14 / 4.00",
      note: "Relevant: Data Structures, OOP, Database Systems, Web Development, Networking",
      date: "2017–2021",
    },
  },

  th: {
    eyebrow: "นักพัฒนาซอฟต์แวร์",
    profileSummary:
      "Full Stack Developer ประสบการณ์ 4+ ปี ในการพัฒนา Web Application ระดับ Production สำหรับธุรกิจหลากหลายอุตสาหกรรม ทั้ง Healthcare, Energy, Insurance และ Retail เชี่ยวชาญ .NET (C#) + Angular (TypeScript) สำหรับระบบ Enterprise และ React / Next.js สำหรับเว็บที่เน้นประสิทธิภาพสูง มีผลงานพิสูจน์ได้ในการสร้าง RESTful API ที่รองรับการขยายตัว, Tableau BI Dashboard ขั้นสูง และบริหารโปรเจค Freelance ได้ครบวงจร มีความสนใจในการนำ AI มาช่วยพัฒนาซอฟต์แวร์ โดยเน้นการควบคุมผลลัพธ์ให้ถูกต้อง แม่นยำ และตรงตาม Logic ของธุรกิจ",
    availabilityText: "พร้อมเริ่มงานภายใน 7 วัน · รับทั้งงานประจำและ Freelance",
    navItems: [
      { href: "#summary", label: "สรุปประวัติ" },
      { href: "#experience", label: "ประสบการณ์" },
      { href: "#education", label: "การศึกษา" },
    ],
    sections: {
      contact: "ข้อมูลติดต่อ",
      portfolio: "ตัวอย่างเว็บที่ทำ",
      skills: "ทักษะ",
      availability: "พร้อมทำงาน",
      summary: "สรุปประวัติ",
      experience: "ประสบการณ์การทำงาน",
      education: "ประวัติการศึกษา",
    },
    experiences: [
      {
        title: "บริษัท มัลติต้า จำกัด — นักพัฒนาซอฟต์แวร์",
        date: "ก.ค. 2565 – ปัจจุบัน",
        meta: "พนักงานประจำ · Remote (อุดรธานี / ขอนแก่น)",
        salary: "เงินเดือน: 20,000 บาท / เดือน",
        intro: "หน้าที่และความรับผิดชอบ:",
        bullets: [
          "Full-Stack Development: ออกแบบและพัฒนา Web Application สำหรับองค์กรด้วย Angular (TypeScript) + SyncFusion / DevExtreme ฝั่ง Frontend และ .NET (C#) RESTful API ฝั่ง Backend ให้กับลูกค้าในกลุ่ม Healthcare, Insurance และ Retail",
          "Business Intelligence: บริหารและออกแบบโครงสร้างข้อมูลขนาดใหญ่ สร้าง Tableau Dashboard ขั้นสูงสำหรับวิเคราะห์ Cash Conversion Cost ช่วยให้ฝ่ายการเงินติดตามกระแสเงินสดได้แบบ Near Real-Time",
          "Mobile Development: พัฒนาและดูแลแอปพลิเคชัน Android สำหรับระบบขายและประกันภัยรถยนต์ด้วย Java (Android Studio)",
        ],
        projectsTitle: "โครงการที่รับผิดชอบ:",
        projects: [
          "โรงพยาบาลศิครินทร์ — ระบบ HIS: พัฒนาโมดูลจัดการข้อมูลคนไข้ที่ซับซ้อนด้วย Angular + .NET",
          "IRPC (พลังงาน) — BI Reporting: รับผิดชอบตำแหน่ง Tableau Developer ออกแบบรายงานเชิงลึกสนับสนุนการตัดสินใจของผู้บริหาร",
          "TQM & Viriyah Insurance — ประกันภัยรถยนต์: พัฒนา Frontend สำหรับแพลตฟอร์มที่รองรับผู้ใช้จำนวนมาก (High-traffic)",
          "PUMPUI — ระบบ POS ค้าปลีก: พัฒนาซอฟต์แวร์จัดการการขายและสต็อกสินค้าเพื่อเพิ่มประสิทธิภาพการดำเนินงาน",
        ],
      },
      {
        title: "รับงานอิสระและที่ปรึกษาด้านซอฟต์แวร์ (Freelance & Consultant)",
        date: "ก.ย. 2566 – ปัจจุบัน",
        meta: "อิสระ · Remote",
        salary: "รายได้โดยประมาณ: 20,000 – 40,000 บาท / เดือน",
        bullets: [
          "Multi-Framework Full-Stack: พัฒนา Web Application ด้วย Angular/DevExtreme สำหรับ Enterprise UI ที่ซับซ้อน และ React/Next.js สำหรับเว็บที่เน้น SEO และความเร็ว",
          "Backend & API Design: ออกแบบและพัฒนา RESTful API ที่รองรับการขยายตัวด้วย .NET (C#) และ Node.js เชื่อมต่อกับฐานข้อมูลอย่างมีประสิทธิภาพ",
          "Technical Consulting: แปลงโจทย์ทางธุรกิจให้กลายเป็นระบบดิจิทัลที่ใช้งานได้จริง รับผิดชอบตั้งแต่ Architecture ไปจนถึง Delivery",
        ],
      },
      {
        title: "บริษัท เจริญทัศน์ จำกัด — Full Stack Developer (ฝึกงาน)",
        date: "พ.ย. 2564 – ก.พ. 2565",
        meta: "ฝึกงาน · ปทุมธานี",
        bullets: [
          "Frontend: พัฒนา UI ด้วย Angular (TypeScript, HTML, SCSS) ให้ตรงตามการออกแบบแบบ Pixel-Perfect",
          "Backend: พัฒนาระบบหลังบ้านด้วย Java + Spring Boot ใช้ MVC Architecture แยกส่วน Logic และการจัดการข้อมูล",
          "SDLC: เรียนรู้และปฏิบัติงานตาม Software Development Life Cycle จริงตั้งแต่การวิเคราะห์ไปจนถึงการส่งมอบงาน",
        ],
      },
    ],
    education: {
      school: "มหาวิทยาลัยราชภัฏอุดรธานี",
      degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
      gpa: "เกรดเฉลี่ย: 3.14 / 4.00",
      note: "วิชาที่เกี่ยวข้อง: โครงสร้างข้อมูล, OOP, ระบบฐานข้อมูล, พัฒนาเว็บ, ระบบเครือข่าย",
      date: "2560–2564",
    },
  },
};

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

export default function ResumeClient() {
  const [lang, setLang] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const c = content[lang];

  return (
    <div className="resume-root">
      {/* ── NAV ── */}
      <nav className="top-nav" aria-label="Resume navigation">
        <a className="nav-brand" href="#summary" aria-label="Go to top">SC</a>

        <div className="nav-center">
          {c.navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <span /><span /><span />
          </button>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              className={`lang-btn${lang === "en" ? " lang-btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >EN</button>
            <button
              className={`lang-btn${lang === "th" ? " lang-btn--active" : ""}`}
              onClick={() => setLang("th")}
              aria-pressed={lang === "th"}
            >TH</button>
          </div>
          <DownloadButton />
        </div>
      </nav>

      <div className="resume-wrapper">
        {/* ── SIDEBAR ── */}
        <aside className={`resume-sidebar${sidebarOpen ? " sidebar--open" : ""}`}>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >✕</button>
          <div className="sidebar-avatar-wrap">
            <img src="/profile-satja.png" alt="Satja Chaiseanpha" className="sidebar-avatar" />
          </div>

          <h1 className="sidebar-name">SATJA<br />CHAISEANPHA</h1>
          <p className="sidebar-role">{c.eyebrow}</p>
          <div className="sidebar-divider" />

          {/* Contact */}
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">{c.sections.contact}</h2>
            <ul className="sidebar-contact">
              <li>
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:knownaddress90@gmail.com">knownaddress90@gmail.com</a>
                </span>
              </li>
              <li>
                <span className="contact-label">Tel</span>
                <span className="contact-value">
                  <a href="tel:0835014158">083-501-4158</a>
                </span>
              </li>
              <li>
                <span className="contact-label">Git</span>
                <span className="contact-value">
                  <a href="https://github.com/aminadmin16" target="_blank" rel="noopener noreferrer">
                    github.com/aminadmin16
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-label">Loc</span>
                <span className="contact-value">หนองบัวลำภู · Thailand</span>
              </li>
            </ul>
          </div>

          {/* Portfolio / Websites */}
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">{c.sections.portfolio}</h2>
            <div className="sidebar-portfolio">
              <div className="portfolio-item">
                <span className="portfolio-label">Online Resume</span>
                <a
                  href="https://resume-satja.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-url"
                >
                  resume-satja.vercel.app
                </a>
              </div>
              <div className="portfolio-item">
                <span className="portfolio-label">PF Exam (Next.js)</span>
                <a
                  href="https://pf-exam-final.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-url"
                >
                  pf-exam-final.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">{c.sections.skills}</h2>
            {skillGroups.map((group) => (
              <div className="sidebar-skill-group" key={group.key}>
                <p className="sidebar-skill-group-name">{group.title[lang]}</p>
                <div className="sidebar-skills">
                  {group.skills.map((s) => (
                    <span className="sidebar-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">{c.sections.availability}</h2>
            <div className="sidebar-avail">
              <span className="avail-dot" aria-hidden="true" />
              {c.availabilityText}
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="resume-main">
          {/* Summary */}
          <section className="main-section main-section--hero" id="summary">
            <SectionTitle title={c.sections.summary} />
            <p className="summary-text">
              <HighlightText text={c.profileSummary} />
            </p>
            <div className="profile-chips" aria-label="Key skills">
              {profileHighlights.map((h) => <span key={h}>{h}</span>)}
            </div>
          </section>

          {/* Experience */}
          <section className="main-section" id="experience">
            <SectionTitle title={c.sections.experience} />
            {c.experiences.map((exp) => (
              <article className="exp-card" key={exp.title}>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-meta">{exp.meta}</p>
                  </div>
                  <time className="exp-date">{exp.date}</time>
                </div>
                {exp.salary && (
                  <div className="salary-line">
                    <span className="salary-badge">{exp.salary}</span>
                  </div>
                )}
                {exp.intro && <p className="exp-intro">{exp.intro}</p>}
                <ResumeList items={exp.bullets} />
                {exp.projectsTitle && (
                  <>
                    <p className="exp-intro">{exp.projectsTitle}</p>
                    <ResumeList items={exp.projects} />
                  </>
                )}
              </article>
            ))}
          </section>

          {/* Education */}
          <section className="main-section" id="education">
            <SectionTitle title={c.sections.education} />
            <div className="edu-card">
              <div>
                <h3>{c.education.school}</h3>
                <p>{c.education.degree}</p>
                <p><strong>{c.education.gpa}</strong></p>
                <p className="edu-note">{c.education.note}</p>
              </div>
              <time>{c.education.date}</time>
            </div>
          </section>
        </main>
      </div>

      {/* Overlay — closes drawer when tapping outside */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay overlay--open"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
