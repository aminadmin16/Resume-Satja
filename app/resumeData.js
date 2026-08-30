// Shared resume content — consumed by the web view and the PDF export.
// Work history is kept at full detail. The only condensed entry is the
// Network & CCTV job (6 bullets merged down to 4), as requested.

export const profileHighlights = [
  "Full Stack Developer",
  ".NET + Angular",
  "Next.js / React",
  "Tableau BI",
  "AI-Assisted Dev",
  "Network & CCTV",
  "4+ Years Exp.",
];

export const TECH_KEYWORDS = [
  ".NET", ".NET (C#)", "Angular", "Angular (TypeScript)", "React", "Next.js",
  "Tableau", "RESTful API", "Java", "Spring Boot", "DevExtreme", "SyncFusion",
  "TypeScript", "Node.js", "SQL",
  "Claude", "ChatGPT", "Gemini", "Kimi",
  "CCTV", "NVR", "DVR", "PoE", "Cat6", "Cat5e", "RJ-45", "DHCP",
];

export const skillGroups = [
  {
    key: "languages",
    title: { en: "Languages", th: "ภาษาที่ใช้พัฒนา" },
    skills: ["C#", "TypeScript", "JavaScript", "Java", "SQL", "HTML / CSS / SCSS"],
  },
  {
    key: "frontend",
    title: { en: "Frontend", th: "Frontend" },
    skills: ["Angular", "React", "Next.js", "DevExtreme", "SyncFusion", "Bootstrap"],
  },
  {
    key: "backend",
    title: { en: "Backend", th: "Backend" },
    skills: [".NET (C#)", "RESTful API", "Node.js", "Spring Boot (Java)", "Entity Framework"],
  },
  {
    key: "data",
    title: { en: "Data & BI", th: "Data & BI" },
    skills: ["Tableau", "SQL Server / MSSQL", "Stored Procedure", "Data Modeling"],
  },
  {
    key: "ai",
    title: { en: "AI Tools", th: "เครื่องมือ AI" },
    skills: ["Claude", "ChatGPT", "Gemini", "Kimi"],
  },
  {
    key: "tools",
    title: { en: "Tools & Platform", th: "เครื่องมือและแพลตฟอร์ม" },
    skills: ["Git & GitHub", "Postman", "Visual Studio / VS Code", "Android Studio", "Vercel", "Figma"],
  },
  {
    key: "network",
    title: { en: "Network & Hardware", th: "เครือข่ายและฮาร์ดแวร์" },
    skills: ["LAN / Cat6 Cabling", "Router & Switch Config", "Wi-Fi / Access Point", "CCTV (IP / Analog)", "Arduino (IoT)"],
  },
];

export const content = {
  en: {
    eyebrow: "Software Developer",
    profileSummary:
      "Full Stack Developer with 4+ years of hands-on experience delivering production-grade web applications across Healthcare, Energy, Insurance, and Retail sectors. Specialized in .NET (C#) + Angular (TypeScript) for enterprise systems, and React / Next.js for high-performance web. Proven track record building scalable RESTful APIs, advanced Tableau BI dashboards, and leading freelance projects end-to-end. Works daily with AI tools (Claude, ChatGPT, Gemini, Kimi) to engineer precise, logic-driven outputs, and takes on network & CCTV installation on weekends.",
    navItems: [
      { href: "#summary", label: "Summary" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
    ],
    sections: {
      contact: "CONTACT",
      portfolio: "WEBSITES",
      skills: "SKILLS",
      highlights: "HIGHLIGHTS",
      summary: "PROFESSIONAL SUMMARY",
      experience: "WORK EXPERIENCE",
      education: "EDUCATION",
    },
    experiences: [
      {
        title: "Freelance & Technical Consultant",
        date: "Sep 2023 – Present",
        meta: "Self-employed · Remote",
        // salary: "Est. Income: 20,000 – 40,000 THB / month",
        bullets: [
          "Multi-Framework Full-Stack: Delivered client projects using Angular / DevExtreme for complex enterprise UIs and React / Next.js for SEO-optimized, high-performance public-facing websites.",
          "Backend & API Design: Designed and built scalable RESTful APIs with .NET (C#) and Node.js, connecting to SQL/NoSQL databases with clean, maintainable architecture.",
          "Technical Consulting: Translated ambiguous business requirements into clear technical specs and working digital products — acting as sole architect, developer, and delivery lead.",
        ],
      },
      {
        title: "Network & CCTV Installation — Independent Technician",
        date: "Mar 2026 – Present",
        meta: "Part-time · Weekends & spare time · Nong Bua Lamphu / Udon Thani",
        // salary: "Per-project basis",
        intro: "Scope & Responsibilities:",
        bullets: [
          "Survey & Cost Analysis: Surveyed each site, measured cable runs, and prepared a bill of materials with 2–3 budget options (cost vs. coverage vs. equipment lifespan) so the customer could decide with clear trade-offs before purchasing.",
          "Network Installation: Ran and terminated UTP Cat5e/Cat6 with RJ-45, mounted switches and access points, and configured routers — WAN/PPPoE, LAN subnet, DHCP, Wi-Fi SSID & security, port forwarding, and channel planning to reduce interference.",
          "CCTV Installation: Delivered IP and analog camera systems end-to-end — camera placement to remove blind spots, PoE/power wiring, NVR/DVR setup, storage and retention planning, motion recording, and remote viewing on mobile.",
          "Testing, Handover & Training: Verified every link with a LAN tester, labeled ports and cable runs, delivered a layout diagram and credential sheet, and trained users on playback, clip export, Wi-Fi changes, and first-line troubleshooting — running each job solo from quotation through warranty follow-up.",
        ],
      },
      {
        title: "Multita Co.,Ltd. — Software Developer",
        date: "Jul 2022 – Jul 2026",
        meta: "Full-time · Remote (Udon Thani / Khon Kaen)",
        // salary: "Salary: 20,000 THB / month",
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
      "Full Stack Developer ประสบการณ์ 4+ ปี ในการพัฒนา Web Application ระดับ Production สำหรับธุรกิจหลากหลายอุตสาหกรรม ทั้ง Healthcare, Energy, Insurance และ Retail เชี่ยวชาญ .NET (C#) + Angular (TypeScript) สำหรับระบบ Enterprise และ React / Next.js สำหรับเว็บที่เน้นประสิทธิภาพสูง มีผลงานพิสูจน์ได้ในการสร้าง RESTful API ที่รองรับการขยายตัว, Tableau BI Dashboard ขั้นสูง และบริหารโปรเจค Freelance ได้ครบวงจร ใช้เครื่องมือ AI (Claude, ChatGPT, Gemini, Kimi) ในการทำงานประจำวัน โดยเน้นควบคุมผลลัพธ์ให้ถูกต้องและตรงตาม Logic ของธุรกิจ นอกจากนี้ยังรับงานติดตั้งระบบ Network และกล้องวงจรปิดในวันหยุด",
    navItems: [
      { href: "#summary", label: "สรุปประวัติ" },
      { href: "#experience", label: "ประสบการณ์" },
      { href: "#education", label: "การศึกษา" },
    ],
    sections: {
      contact: "ข้อมูลติดต่อ",
      portfolio: "ตัวอย่างเว็บที่ทำ",
      skills: "ทักษะ",
      highlights: "จุดเด่น",
      summary: "สรุปประวัติ",
      experience: "ประสบการณ์การทำงาน",
      education: "ประวัติการศึกษา",
    },
    experiences: [
      {
        title: "รับงานอิสระและที่ปรึกษาด้านซอฟต์แวร์ (Freelance & Consultant)",
        date: "ก.ย. 2566 – ปัจจุบัน",
        meta: "อิสระ · Remote",
        // salary: "รายได้โดยประมาณ: 20,000 – 40,000 บาท / เดือน",
        bullets: [
          "Multi-Framework Full-Stack: พัฒนา Web Application ด้วย Angular/DevExtreme สำหรับ Enterprise UI ที่ซับซ้อน และ React/Next.js สำหรับเว็บที่เน้น SEO และความเร็ว",
          "Backend & API Design: ออกแบบและพัฒนา RESTful API ที่รองรับการขยายตัวด้วย .NET (C#) และ Node.js เชื่อมต่อกับฐานข้อมูลอย่างมีประสิทธิภาพ",
          "Technical Consulting: แปลงโจทย์ทางธุรกิจให้กลายเป็นระบบดิจิทัลที่ใช้งานได้จริง รับผิดชอบตั้งแต่ Architecture ไปจนถึง Delivery",
        ],
      },
      {
        title: "รับติดตั้งระบบ Network และ CCTV (ช่างอิสระ)",
        date: "มี.ค. 2569 – ปัจจุบัน",
        meta: "งานเสริม · เสาร์–อาทิตย์ และช่วงเวลาว่าง · หนองบัวลำภู / อุดรธานี",
        // salary: "คิดค่าบริการเป็นรายงาน (ต่อโปรเจค)",
        intro: "ขอบเขตงานและความรับผิดชอบ:",
        bullets: [
          "สำรวจหน้างานและวิเคราะห์ต้นทุน: สำรวจพื้นที่ วัดระยะเดินสาย ประเมินจุดติดตั้ง แล้วจัดทำรายการอุปกรณ์พร้อมทางเลือกงบประมาณ 2–3 แบบ เปรียบเทียบราคา ความครอบคลุม และอายุการใช้งาน เพื่อให้ลูกค้าตัดสินใจได้บนข้อมูลที่ชัดเจนก่อนสั่งซื้อ",
          "ติดตั้งระบบเครือข่าย: เดินสายและเข้าหัว UTP Cat5e/Cat6 (RJ-45), ติดตั้ง Switch และ Access Point, ตั้งค่า Router ทั้ง WAN/PPPoE, LAN Subnet, DHCP, ตั้งชื่อและรหัส Wi-Fi, Port Forwarding รวมถึงเลือกช่องสัญญาณเพื่อลดการรบกวน",
          "ติดตั้งระบบกล้องวงจรปิด: ติดตั้งกล้อง IP และ Analog ครบวงจร ตั้งแต่วางตำแหน่งกล้องให้ครอบคลุมจุดอับ เดินสายไฟ/PoE ตั้งค่า NVR/DVR วางแผนความจุและระยะเวลาย้อนหลัง ตั้งค่าบันทึกตามการเคลื่อนไหว และดูผ่านมือถือจากภายนอกได้",
          "ทดสอบ ส่งมอบ และสอนการใช้งาน: ทดสอบสายทุกเส้นด้วย LAN Tester ติดป้ายกำกับพอร์ตและแนวสาย ส่งมอบแผนผังการติดตั้งพร้อมข้อมูลอุปกรณ์/รหัสผ่าน และสอนลูกค้าดูภาพย้อนหลัง ดึงคลิป เปลี่ยนรหัส Wi-Fi และแก้ปัญหาเบื้องต้น โดยดูแลเองทั้งหมดตั้งแต่เสนอราคาจนถึงรับประกันหลังการขาย",
        ],
      },
      {
        title: "บริษัท มัลติต้า จำกัด — นักพัฒนาซอฟต์แวร์",
        date: "ก.ค. 2565 – ก.ค. 2569",
        meta: "พนักงานประจำ · Remote (อุดรธานี / ขอนแก่น)",
        // salary: "เงินเดือน: 20,000 บาท / เดือน",
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
