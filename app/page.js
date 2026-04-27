import dynamic from "next/dynamic";
import DownloadButton from "./DownloadButton";

const ResumePdfOnePage = dynamic(() => import("./ResumePdfOnePage"));

const profileHighlights = [
  // ".NET",
  // "Angular (TypeScript)",
  // "Next.js",
  // "Tableau",
  // "AI",
  // "Full Stack Development",
];

const profileSummary =
  "Software Developer  เชี่ยวชาญด้านการพัฒนา Full Stack Development ด้วย .NET, Angular (TypeScript) และ Next.js พร้อมทักษะขั้นสูงในการสร้าง Business Intelligence ผ่าน Tableau มีความเชี่ยวชาญในการประยุกต์ใช้ AI เพื่อเพิ่มประสิทธิภาพในการทำงาน โดยยึดหลักการว่า การมี AI เป็นสิ่งสำคัญ แต่การควบคุม AI ให้ผลลัพธ์ตามที่ถูกต้อง แม่นยำ และตรงตาม Logic ที่ต้องการนั้นสำคัญยิ่งกว่า' มุ่งเน้นการเขียน Code ที่มีคุณภาพสูง ปลอดภัย และตอบโจทย์ธุรกิจได้อย่างแท้จริง";

const experiences = [
  {
    title: "Multita Co.,Ltd. — Software Developer",
    date: "2022/07 - PRESENT",
    meta: "Location: Udon Thani / Khon Kaen (Full-time Remote / WFH)",
    intro: "หน้าที่และความรับผิดชอบหลัก :",
    bullets: [
      "Full-Stack Development: ออกแบบและพัฒนา Web Application ด้วย Angular (TypeScript) ร่วมกับ SyncFusion และ DevExtreme ในส่วนของ Frontend และพัฒนาระบบหลังบ้านด้วย .NET (C#) ผ่านสถาปัตยกรรม RESTful API เพื่อการสื่อสารข้อมูลที่มีประสิทธิภาพ",
      "Business Intelligence & Analytics: บริหารจัดการและออกแบบโครงสร้างข้อมูลขนาดใหญ่เพื่อสร้าง Tableau Dashboard ขั้นสูงในการวิเคราะห์ Cash Conversion Cost ช่วยให้ฝ่ายการเงินบริหารจัดการกระแสเงินสดได้อย่างแม่นยำ",
      "Mobile Application Development: พัฒนาและดูแลระบบแอปพลิเคชันการขายและระบบประกันภัยรถยนต์ด้วย Java (Android Studio)",
    ],
    projectsTitle: "โครงการ :",
    projects: [
      "Hospital Information System (Sikarin Hospital): พัฒนาโมดูลในระบบสารสนเทศโรงพยาบาลศิครินทร์ โดยเน้นการจัดการข้อมูลคนไข้ที่ซับซ้อนด้วย Angular และ .NET",
      "Energy Sector Analytics (IRPC): รับผิดชอบในตำแหน่ง Tableau Developer ออกแบบระบบรายงานข้อมูลเชิงลึกเพื่อสนับสนุนการตัดสินใจของผู้บริหาร",
      "Insurance & Enterprise Systems (TQM & Viriyah Insurance): พัฒนาแพลตฟอร์มประกันภัยรถยนต์ในฐานะ Frontend และ Software Developer โดยมุ่งเน้นการสร้าง UI ที่รองรับการใช้งานหนัก (High-traffic)",
      "Retail Solution (PUMPUI): พัฒนาซอฟต์แวร์ระบบจัดการการขายและสต็อกสินค้าเพื่อเพิ่มประสิทธิภาพการดำเนินงาน",
    ],
  },
  {
    title: "รับงานอิสระและที่ปรึกษาด้านซอฟต์แวร์ (Freelance & Technical Consultant)",
    date: "2023/09 - PRESENT",
    bullets: [
      "Modern Full-Stack Development (Multi-Framework): พัฒนา Web Application ด้วยเทคโนโลยีที่เหมาะสมกับโจทย์ของลูกค้า ทั้งการสร้าง Complex UI ด้วย Angular/DevExtreme และการพัฒนา High-Performance Web โดยใช้ React และ Next.js เพื่อผลทางด้าน SEO และความรวดเร็วในการแสดงผล",
      "Scalable Backend & API Architecture: ออกแบบและพัฒนาส่วนหลังบ้านด้วย .NET (C#) และ Node.js โดยเน้นการสร้าง RESTful API ที่มีโครงสร้างแข็งแรง รองรับการขยายตัว และเชื่อมต่อกับระบบฐานข้อมูลอย่างมีประสิทธิภาพ",
      "Technical Consultant & Problem Solver: ช่วยวิเคราะห์หาทางออกให้กับปัญหาด้านซอฟต์แวร์ที่ซับซ้อน และทำหน้าที่เป็นตัวกลางในการเปลี่ยนโจทย์ทางธุรกิจให้กลายเป็นระบบดิจิทัลที่พร้อมใช้งานจริง โดยเน้นความถูกต้องและดูแลรักษาง่ายในระยะยาว",
    ],
  },
  {
    title: "CHAREON TUT Co.,Ltd. — Full Stack Developer (Intern)",
    date: "2021/11 - 2022/02",
    bullets: [
      "Full-Stack Development Fundamentals: ฝึกฝนการพัฒนาเว็บแอปพลิเคชันแบบครบวงจร โดยเน้นการเรียนรู้โครงสร้างระบบทั้งส่วนหน้าบ้าน (Frontend) และหลังบ้าน (Backend)",
      "Frontend Implementation: พัฒนาส่วนแสดงผลด้วย Angular โดยใช้ TypeScript, HTML และ CSS/SCSS เพื่อสร้างหน้าจอผู้ใช้งาน (UI) ให้ถูกต้องแม่นยำตามการออกแบบ (Pixel-Perfect Design)",
      "Backend & MVC Architecture: ศึกษาและพัฒนาระบบหลังบ้านด้วย Java ผ่าน Spring Boot Framework โดยประยุกต์ใช้หลักการ Spring MVC (Model-View-Controller) เพื่อแยกส่วนการทำงานของ Logic และการจัดการข้อมูลให้เป็นระบบ",
      "Professional Workflow: เรียนรู้กระบวนการทำงานจริงในรูปแบบ Software Development Life Cycle (SDLC) ตั้งแต่การวิเคราะห์ Logic ไปจนถึงการ Implementation โค้ดที่ใช้งานได้จริง",
    ],
  },
];

const skillGroups = [
  {
    title: "FRONTEND",
    skills: [
      { name: "Angular (TS)", level: 95, grade: "Advanced" },
      { name: "DevExtreme", level: 90, grade: "Advanced" },
      { name: "Next.js", level: 88, grade: "Intermediate" },
      { name: "React", level: 80, grade: "Intermediate" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: ".NET (C#)", level: 95, grade: "Advanced" },
      { name: "RESTful API", level: 88, grade: "Advanced" },
      { name: "Node.js", level: 80, grade: "Intermediate" },
      { name: "Spring Boot (Java)", level: 72, grade: "Good" },
    ],
  },
  {
    title: "DATA VISUALIZATION",
    plain: true,
    skills: [
      { name: "Tableau (Reporting & BI)", level: 90, grade: "Advanced" }
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    plain: true,
    skills: [
      { name: "C#", level: 90, grade: "Advanced" },
      { name: "TypeScript", level: 90, grade: "Advanced" },
      { name: "JavaScript", level: 86, grade: "Intermediate" },
      { name: "SQL", level: 82, grade: "Intermediate" },
      { name: "Java", level: 74, grade: "Good" },
    ],
  },
  {
    title: "TOOLS & OTHERS",
    plain: true,
    skills: [
      { name: "Git", level: 84, grade: "Intermediate" },
      { name: "Postman", level: 84, grade: "Intermediate" },
      { name: "Arduino (IoT)", level: 70, grade: "Good" },
    ],
  },
];

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

function HighlightText({ text, words = profileHighlights }) {
  const pattern = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "g");

  return text.split(pattern).map((part, index) =>
    words.includes(part) ? (
      <span className="text-highlight" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function escapeRegExp(value) {
  return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

function ResumeMainContent() {
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
                      <a href="tel:092817985">092 817 985</a>
                      <span>จังหวัดหนองบัวลำภู - ประเทศไทย</span>
                    </div>
                    <h2>PROFESSIONAL SUMMARY</h2>
                    <p>
                      <HighlightText text={profileSummary} />
                    </p>
                    <div className="profile-chips" aria-label="Highlighted skills">
                      {profileHighlights.map((highlight) => (
                        <span key={highlight}>{highlight}</span>
                      ))}
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
                    {experiences.map((experience) => (
                      <article className="timeline-item" key={experience.title}>
                        <div className="timeline-dot" />
                        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                          <h3>{experience.title}</h3>
                          <time>{experience.date}</time>
                        </div>
                        {experience.meta ? <p className="meta">{experience.meta}</p> : null}
                        {experience.intro ? <p className="label-line">{experience.intro}</p> : null}
                        <ResumeList items={experience.bullets} />
                        {experience.projectsTitle ? (
                          <>
                            <p className="label-line mt-3">{experience.projectsTitle}</p>
                            <ResumeList items={experience.projects} />
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
                        <h3>มหาวิทยาลัยราชภัฏอุดรธานี</h3>
                        <p>ระดับการศึกษาปริญญาตรี วิทยาศาสตร์บัณฑิต สาขาวิทยาการคอมพิวเตอร์</p>
                        <p>GPA : 3.14</p>
                      </div>
                      <time>2017-2021</time>
                    </div>
                  </div>

                  <div className="section-card skills-card" id="skills">
                    <SectionTitle title="SKILLS & TECHNOLOGIES" />
                    <div className="skill-grid">
                      {skillGroups.map((group) => (
                        <div className={`skill-group${group.plain ? " skill-group-plain" : ""}`} key={group.title}>
                          <h3>{group.title}</h3>
                          <ul>
                            {group.skills.map((skill) => (
                              <li key={skill.name}>
                                <div className="skill-line">
                                  <span>{skill.name}</span>
                                  {group.plain ? null : <strong>{skill.grade}</strong>}
                                </div>
                                {group.plain ? null : <SkillGauge level={skill.level} name={skill.name} />}
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

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const isPdf = params?.pdf === "1";

  return (
    <main className={`resume-page${isPdf ? " resume-page--pdf" : ""}`}>
      {!isPdf ? (
        <nav className="resume-nav">
          <div className="container">
            <div className="nav-shell">
              <a className="brand-link" href="#summary" aria-label="Go to resume summary">
                SC
              </a>
              <div className="nav-links" aria-label="Resume sections">
                {navItems.map((item) => (
                  <a href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <DownloadButton />
            </div>
          </div>
        </nav>
      ) : null}

      {isPdf ? (
        <ResumePdfOnePage>
          <ResumeMainContent />
        </ResumePdfOnePage>
      ) : (
        <div className="resume-export-area" id="resume-export">
          <ResumeMainContent />
        </div>
      )}
    </main>
  );
}

function SkillGauge({ level, name }) {
  const barStyle = {
    "--level": `${level}%`,
  };
  const levelLabel = getSkillLevelLabel(level);

  return (
    <div className="skill-meter-bar" style={barStyle}>
      <meter aria-label={`${name} ${level}%`} className="visually-hidden" max="100" min="0" value={level}>
        {level}%
      </meter>
      <div className="meter-track">
        <span className="meter-fill" />
      </div>
      <div className="meter-meta">
        <span>{level}%</span>
        <small>{levelLabel}</small>
      </div>
    </div>
  );
}

function getSkillLevelLabel(level) {
  if (level >= 90) {
    return "Expert";
  }

  if (level >= 80) {
    return "Strong";
  }

  return "Good";
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
      {items.map((item) => (
        <li key={item}>
          <HighlightText
            text={item}
            words={[
              ".NET",
              ".NET (C#)",
              "Angular",
              "Angular (TypeScript)",
              "React",
              "Next.js",
              "Tableau",
              "RESTful API",
              "Java",
              "Spring Boot",
              "DevExtreme",
              "User Interface",
              "Root Cause Analysis",
              "Maintainable Code",
            ]}
          />
        </li>
      ))}
    </ul>
  );
}
