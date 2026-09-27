"use client";
import { useEffect, useState } from 'react';
import { content, skillGroups, getExperiences } from './resumeData';
import { certificates, certificatePages } from './certificates';
import DownloadButton from './DownloadButton';
import Icon from './Icon';
import PageSkeleton from './PageSkeleton';
import CertificateFlip from './CertificateFlip';
import DocumentPreview from './DocumentPreview';

const work = [
  {code:'HIS', domain:'PATIENT DATA & WORKFLOWS', tone:'health', name:'Sikarin Hospital',tag:'HEALTHCARE',stack:'Angular / .NET', th:'พัฒนาโมดูลจัดการข้อมูลผู้ป่วยในระบบ HIS ให้รองรับขั้นตอนการทำงานของโรงพยาบาล',en:'Developed patient-data management modules for hospital information workflows.'},
  {code:'BI', domain:'DATA INTO DECISIONS', tone:'data', name:'IRPC',tag:'BUSINESS INTELLIGENCE',stack:'Tableau / SQL',th:'ออกแบบรายงานและ Dashboard เพื่อให้ผู้บริหารใช้ข้อมูลประกอบการตัดสินใจ',en:'Built reports and dashboards to support executive decision-making.'},
  {code:'INSURE', domain:'MOTOR INSURANCE PLATFORM', tone:'insurance', name:'TQM & Viriyah',tag:'INSURANCE',stack:'Angular / Frontend',th:'พัฒนา Frontend สำหรับขั้นตอนการทำประกันภัยรถยนต์',en:'Built frontend interfaces for motor-insurance workflows.'},
  {code:'APP', domain:'ANDROID APPLICATION', tone:'retail', name:'PUMPUI',tag:'RETAIL',stack:'Android Studio / Java',th:'พัฒนาแอปพลิเคชัน Android ด้วยภาษา Java โดยใช้ Android Studio',en:'Developed an Android application using Java in Android Studio.'},
];
export default function ResumeClient() {
  const [lang,setLang]=useState('th');
  const [type,setType]=useState('resume');
  const [preview,setPreview]=useState(false);
  const [loading,setLoading]=useState(true);
  const [activeWork,setActiveWork]=useState(null);
  const c=content[lang]; const th=lang==='th'; const t=(a,b)=>th?a:b;
  const experiences=getExperiences(lang);
  const mainExperience=c.experiences.find(experience=>experience.featured);
  useEffect(()=>{document.documentElement.lang=lang;},[lang]);
  useEffect(()=>{
    let alive=true;
    const finish=()=>{if(alive)setLoading(false);};
    const timeout=setTimeout(finish,3000);
    const portrait=document.querySelector('.portrait-frame img');
    Promise.allSettled([document.fonts.ready,portrait?.decode()]).then(finish);
    return ()=>{alive=false;clearTimeout(timeout);};
  },[]);
  useEffect(()=>{
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('arrived');observer.unobserve(entry.target);}});
    },{threshold:0.12});
    document.querySelectorAll('.section-heading, .approach-grid article, .work-card, .certificate-card, .document-picker').forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[]);
  return <div className="site">{loading&&<div className="boot-skeleton"><PageSkeleton/></div>}<noscript><style>{`.boot-skeleton{display:none!important}`}</style></noscript>
    <a className="skip-link" href="#main">{t('ข้ามไปเนื้อหา','Skip to content')}</a>
    <header className="navigation"><a className="brand" href="#main"><span className="monogram">S.</span> SATJA<span className="brand-dot"> / DEV</span></a>
      <nav aria-label={t('เมนูหลัก','Main navigation')}><a href="#work">{t('ผลงาน','Work')}</a><a href="#experience">{t('ประสบการณ์','Experience')}</a><a href="#credentials">{t('ใบรับรอง','Credentials')}</a></nav>
      <div className="nav-end"><div className="language" aria-label="Language">{['th','en'].map(l=><button key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><a className="nav-download" href="#documents"><Icon name="file"/>CV / Resume</a></div>
    </header>
    <main id="main">
      <section className="hero wrap"><div className="hero-index" aria-hidden="true">PORTFOLIO — 2026 <span>DESIGNING SOLUTIONS. BUILDING SOFTWARE.</span></div>
        <div className="hero-copy"><p className="eyebrow">FULL STACK DEVELOPER · THAILAND</p><h1><span className="hero-line">{t('เข้าใจปัญหา','Understand the problem.')}</span><span className="hero-line accent-line">{t('พัฒนาอย่างเป็นระบบ','Build with precision.')}</span></h1>
          <p className="intro-name">{t('สัจจา ชัยแสนพา','Satja Chaiseanpha')} <span> / Fluke</span></p>
          <p className="hero-description">{t('ผมชอบทำความเข้าใจปัญหาที่ซับซ้อน แล้วเปลี่ยนให้เป็นระบบที่ใช้งานได้จริง ตั้งแต่เว็บแอปพลิเคชันและ API ไปจนถึงข้อมูลที่ช่วยให้คนตัดสินใจได้ดีขึ้น','I enjoy understanding complex problems and turning them into practical systems. From web applications and APIs to data that helps people make better decisions.')}</p>
          <div className="actions"><a href="#contact" className="button primary"><Icon name="mail"/>{t('ชวนผมร่วมงาน','Let’s work together')}</a><a href="#documents" className="button secondary"><Icon name="file"/>CV / Resume</a></div>
          <div className="hero-facts"><div><strong>4<span className="plus">+</span></strong><span>{t('ปีในงานพัฒนาซอฟต์แวร์','years in software development')}</span></div><div><strong>Full stack</strong><span>.NET · Angular · React</span></div><div><strong>Problem solver</strong><span>{t('เข้าใจโจทย์ ก่อนเขียนโค้ด','Understand first. Then build.')}</span></div></div>
        </div>
        <div className="portrait-area"><div className="portrait-label">SATJA CHAISEANPHA / SOFTWARE DEVELOPER</div><div className="portrait-frame"><img src="/profile-satja-studio.png" alt={t('สัจจา ชัยแสนพา','Satja Chaiseanpha')} width="1122" height="1402" fetchPriority="high"/></div><div className="portrait-caption"><span>01 / SATJA CHAISEANPHA</span><span>NONG BUA LAMPHU, TH</span></div><div className="portrait-note"><Icon name="check"/><p>{t('เข้าใจปัญหา ออกแบบทางออก','Understand. Design. Deliver.')}<br/><strong>{t('แล้วลงมือทำให้เกิดขึ้นจริง','Make it work in the real world.')}</strong></p></div></div>
      </section>
      <div className="hero-bottom wrap"><a href="#work">SCROLL TO EXPLORE <span>↓</span></a><span>CODE WITH PURPOSE. SOLVE WITH CARE.</span></div><div className="stack-strip"><div className="wrap"><span>MY EVERYDAY TOOLKIT</span><strong>.NET / C#</strong><strong>Angular</strong><strong>React & Next.js</strong><strong>SQL</strong><strong>Tableau</strong></div></div>
      <section className="work-section" id="work"><div className="wrap section"><div className="section-heading split"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>{t('งานจริง','Real work.')}<br/><span className="heading-muted">{t('ที่ได้ลงมือทำ','Real contribution.')}</span></h2></div><p>{t('ตัวอย่างงานที่มีส่วนพัฒนาระหว่างทำงานที่ Multita','Selected contributions during my time at Multita.')}</p></div><div className="work-grid">{work.map((w,i)=><article className={`work-card work-card--${w.tone}`} key={w.name}>
          <div className="work-visual"><div className="work-top"><span>{w.tag}</span><span>0{i+1} / 04</span></div><div className="work-type" aria-hidden="true">{w.code}<Icon name={["hospital","chart","shield","phone"][i]}/></div><div className="work-domain">{w.domain}</div><div className="work-technologies">{w.stack.split(' / ').map(x=><span key={x}>{x}</span>)}</div></div>
          <div className="work-copy"><div className="work-title-row"><h3>{w.name}</h3><button className="project-toggle" aria-expanded={activeWork===i} aria-controls={`project-${i}`} aria-label={`${activeWork===i?t('ปิดรายละเอียด','Close details'):t('ดูรายละเอียด','View details')} ${w.name}`} onClick={()=>setActiveWork(activeWork===i?null:i)}><Icon name={activeWork===i?"close":"eye"}/></button></div><p>{w[lang]}</p><div className="work-role">{t('บทบาท: นักพัฒนาซอฟต์แวร์ · Multita','Contribution: Software developer · Multita')}</div>
          <div hidden={activeWork!==i} id={`project-${i}`} className="project-detail"><span>{t('สิ่งที่รับผิดชอบ','MY CONTRIBUTION')}</span><p>{mainExperience.projects[i]}</p><a href="#experience">{t('ดูประสบการณ์การทำงาน','Explore the experience')} →</a></div></div>
        </article>)}</div><div className="live-work"><span>{t('ทดลองดูเว็บที่ทำ','Explore live websites')}</span><a href="https://pf-exam-final.vercel.app" target="_blank" rel="noreferrer">Exam / Next.js ↗</a><a href="https://pf-smart-serve.vercel.app/" target="_blank" rel="noreferrer">Smart Serve / POS ↗</a><a href="https://github.com/aminadmin16" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      <section className="section wrap" id="approach"><div className="section-heading"><p className="eyebrow">02 / APPROACH</p><h2>{t('ไม่ได้เริ่มจากโค้ด','Before the first line of code.')}<br/>{t('เริ่มจากความเข้าใจ','Understand what matters.')}</h2><p>{t('เทคโนโลยีเป็นเครื่องมือ จุดเริ่มต้นของผมคือคนที่ต้องใช้ระบบและปัญหาที่เขาต้องเจอ','Technology is a tool. I start with the people using a system and the problems they face.')}</p></div><div className="approach-grid">{[
        [t('เข้าใจโจทย์','Understand the problem'),t('แปลงความต้องการทางธุรกิจให้เป็นขอบเขตงานที่ชัดเจน มองทั้งผู้ใช้ ข้อมูล และข้อจำกัด','Translate business needs into a clear scope, considering users, data and constraints.')],
        [t('เลือกทางออกที่เหมาะ','Choose a practical solution'),t('เชื่อม Frontend, API และฐานข้อมูลเข้าด้วยกัน เลือกเครื่องมือให้เหมาะกับงานและการดูแลต่อ','Connect frontend, APIs and databases with tools suited to the task and future maintenance.')],
        [t('รับผิดชอบจนส่งมอบ','Own the delivery'),t('ดูแลงานตั้งแต่การออกแบบไปจนถึงส่งมอบ ใช้ AI ช่วยทำงานโดยตรวจความถูกต้องของ Logic','Take work from design through delivery, using AI while checking the correctness of the logic.')],
      ].map(([title,desc],i)=><article key={title}><span className="step">0{i+1} <Icon name={["search","layers","check"][i]}/></span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
      <section className="section wrap experience-section" id="experience"><div className="section-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2>{t('ประสบการณ์ที่ต่อยอดกัน','Experience that connects.')}</h2><p>{t('จากระบบองค์กร สู่งานอิสระ และการแก้ปัญหาหน้างาน','Enterprise software, independent delivery and hands-on technical work.')}</p></div><div className="timeline">{experiences.map(e=><article key={e.title} className={e.featured?'experience-featured':undefined}>{e.featured&&<span className="experience-badge">{t('ประสบการณ์หลัก','Primary experience')}</span>}<p className="date">{e.date}</p><h3>{e.title}</h3><p className="meta">{e.meta}</p><details open={Boolean(e.featured)}><summary>{t('ขอบเขตงานและความรับผิดชอบ','Scope & responsibilities')}<Icon name="chevron"/></summary><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul>{e.projects&&<div className="experience-projects"><h4>{e.projectsTitle}</h4><ul>{e.projects.map(project=><li key={project}>{project}</li>)}</ul></div>}</details></article>)}</div></section>
      <section className="section wrap skills-section" id="skills"><div className="section-heading"><p className="eyebrow">04 / CAPABILITIES</p><h2>{t('เครื่องมือที่ใช้สร้างทางออก','My tools for the job.')}</h2></div><div className="skills-grid">{skillGroups.map(g=><div key={g.key}><h3>{g.title[lang]}</h3><div className="tags">{g.skills.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></section>
      <section className="section wrap" id="credentials"><div className="section-heading"><p className="eyebrow">05 / EDUCATION & CREDENTIALS</p><h2>{t('การศึกษาและใบรับรอง','Education & credentials')}</h2></div><article className="education education-inline"><div><h3>{c.education.school}</h3><p>{c.education.degree}</p></div><div><span>{c.education.date}</span><strong>{c.education.gpa}</strong></div></article><div className="certificate-grid">{certificates.map(cert=><article className="certificate-card" key={cert.id}>{cert.supplement?<CertificateFlip certificate={cert} lang={lang}/>:(<a className={`certificate-image ${cert.rotation?'certificate-image--rotated':''}`} href={cert.file} target="_blank" rel="noreferrer" aria-label={`${t('ดูใบรับรอง','View certificate')}: ${cert.title[lang]}`}><img src={cert.file} alt={cert.title[lang]} loading="lazy"/></a>)}<div><span className="eyebrow">{cert.issuer}</span><h3>{cert.title[lang]}</h3><p>{cert.description[lang]}</p><p className="meta">{cert.date[lang]}</p><div className="certificate-actions"><a className="text-link" href={cert.source||cert.file} target="_blank" rel="noreferrer"><Icon name="award"/>{t('ดูใบรับรอง','View certificate')}</a></div></div></article>)}</div></section>
      <section className="documents-section" id="documents"><div className="wrap"><div className="document-toolbar"><div className="document-label"><Icon name="file"/><h2>{t('เลือกเอกสาร','Choose a document')}</h2></div><div className="document-tabs" role="group" aria-label={t('รูปแบบเอกสาร','Document format')}>{['resume','cv'].map(v=><button key={v} aria-pressed={type===v} onClick={()=>setType(v)}>{v==='cv'?'CV':'Resume'}</button>)}</div><div className="language" role="group" aria-label={t('ภาษาเอกสาร','Document language')}>{['th','en'].map(l=><button key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><div className="actions"><button className="button secondary" onClick={()=>setPreview(!preview)} aria-expanded={preview} aria-controls="document-preview"><Icon name={preview?'close':'eye'}/>{preview?t('ปิดตัวอย่าง','Close'):t('ดูตัวอย่าง','Preview')}</button><DownloadButton lang={lang} type={type}/></div></div><p className="document-caption">{type==='resume'?t('Resume แบบสองคอลัมน์','Two-column Resume'):t('CV ประวัติและประสบการณ์ครบในหน้าเดียว','One-page CV with full experience')} · {t(`แนบใบรับรอง ${certificates.length} รายการ รวม ${certificatePages.length} หน้า`,`Includes ${certificates.length} credentials across ${certificatePages.length} attachment pages`)}</p>{preview&&<DocumentPreview key={`${type}-${lang}`} type={type} lang={lang}/>}</div></section>
      <section className="contact-section wrap" id="contact"><p className="eyebrow">LET’S SOLVE SOMETHING</p><h2>{t('งานที่ดี','Good work')}<br/><span>{t('เริ่มจากการคุยกัน','starts with a conversation.')}</span></h2><a className="contact-email" href="mailto:knownaddress90@gmail.com"><Icon name="mail"/>knownaddress90@gmail.com</a><div className="contact-links"><a href="tel:0835014158">083-501-4158</a><a href="https://github.com/aminadmin16" target="_blank" rel="noreferrer">GitHub ↗</a><span>{t('หนองบัวลำภู · ประเทศไทย','Nong Bua Lamphu · Thailand')}</span></div></section>
    </main><footer className="wrap"><span>© {new Date().getFullYear()} Satja Chaiseanpha</span><span>THOUGHTFULLY BUILT. PURPOSEFULLY SOLVED.</span><a href="#main">{t('กลับด้านบน','Back to top')} ↑</a></footer>
  </div>;
}
