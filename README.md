# Satja — Portfolio, CV & Resume

เว็บแนะนำตัวสองภาษา (TH / EN) เน้นจุดยืน “เข้าใจปัญหา แล้วสร้างสิ่งที่ใช้ได้จริง”

## โครงสร้าง

1. แนะนำตัว: ภาพโปรไฟล์ จุดยืน ทักษะหลัก และช่องทางไปดูผลงาน/ดาวน์โหลด
2. วิธีทำงาน: เข้าใจโจทย์ เลือกทางออก รับผิดชอบจนส่งมอบ
3. ผลงาน: บทบาทในโครงการที่ Multita พร้อมลิงก์เว็บไซต์และ GitHub เดิม
4. ประสบการณ์: ประวัติการทำงานจากข้อมูลเดิม
5. ทักษะ: จัดกลุ่มตามงานที่ทำ โดยไม่ใช้คะแนนความชำนาญที่ไม่มีหลักฐาน
6. การศึกษาและใบประกาศ: NSC 2020 โครงการสมาร์ทเอลเดอร์ ระบุว่าได้รับทุนสนับสนุนตามต้นฉบับ
7. เอกสาร: เลือก Resume / CV และภาษา ดูตัวอย่างหรือดาวน์โหลด PDF
8. ติดต่อ: อีเมล โทรศัพท์ และ GitHub

## เอกสาร PDF

- Resume: เนื้อหาย่อ 1 หน้า + ใบประกาศ 1 หน้า
- CV: เนื้อหาละเอียด 3 หน้า + ใบประกาศ 1 หน้า
- ทั้งสองรูปแบบมีภาษาไทยและอังกฤษ เนื้อหาเลือก/ค้นหาข้อความได้ และฝังฟอนต์ไทย
- ใบประกาศแนบเป็นภาพต้นฉบับบนหน้า A4 แนวนอน รักษาสัดส่วนโดยไม่ตัดภาพ
- ดาวน์โหลดจาก `public/documents` โดยตรง ไม่ต้องติดตั้ง Chromium บนโฮสต์
- URL เก่า `/api/resume-pdf` ยังคืน Resume ภาษาอังกฤษ

## การพัฒนา

```sh
npm ci
npm run dev
npm run build
```

ผล build อยู่ใน `out/` สำหรับ static hosting (รวม Sites หรือ Vercel) เก็บ dependencies และ lockfile เดิมไว้

## แก้ข้อมูลและเพิ่มใบประกาศ

- ประวัติหลักและทักษะ: `app/resumeData.js`
- เนื้อหาแนะนำตัวและผลงานบนเว็บ: `app/ResumeClient.js`
- เนื้อหาย่อและรูปแบบ PDF: `scripts/generate-pdfs.mjs`
- ใบประกาศ: เก็บไฟล์จริงใน `public/certificates/` แล้วเพิ่มรายการใน `app/certificates.js` รองรับ PDF, JPG, PNG และแนบตามลำดับรายการ
- เมื่อต้องการแสดงใบใหม่บนหน้าเว็บ ให้เพิ่มข้อมูลและการ์ดในส่วน Credentials ด้วย

หลังแก้ข้อมูล ให้สร้าง PDF ใหม่ก่อน build:

```sh
npx playwright install chromium
npm run pdf
npm run build
```

ตัวสร้าง PDF ตรวจจำนวนหน้าเนื้อหาโดยอัตโนมัติ และหยุดเมื่อ Resume เกิน 1 หน้า/จำนวนหน้า CV เปลี่ยน เพื่อป้องกันข้อความหลุดหน้าโดยไม่รู้ตัว ตรวจไฟล์จริงใน `public/documents` อีกครั้งหลังเปลี่ยนเนื้อหา ใบประกาศ PDF หลายหน้าจะถูกแนบครบทุกหน้า

ฟอนต์ Noto Sans Thai ถูกเก็บในเว็บเพื่อใช้งานโดยไม่เรียก Google Fonts ขณะ build; ใบอนุญาตอยู่ใน `public/fonts/OFL.txt`

## การตรวจที่ทำแล้ว

- Production build ผ่าน
- สร้าง PDF ทั้ง 4 รูปแบบผ่านการตรวจจำนวนหน้า
- Render ตรวจ PDF ภาษาไทย/อังกฤษและหน้าใบประกาศ: ไม่มีข้อความล้นหน้า ภาพไม่ถูกตัด
- ตรวจไฟล์ดาวน์โหลดและ static assets ในผล build

ข้อมูลประสบการณ์อ้างอิงจากโปรเจกต์เดิม ไม่เพิ่มตัวเลขผลลัพธ์ รางวัล หรือคำรับรองจากลูกค้าที่ไม่มีข้อมูลต้นฉบับ

## Visual redesign — September 2026

Dark charcoal and lime editorial design, larger typography, an identity-preserving restored studio portrait, interactive project contribution cards, expandable experience sections, and motion respecting reduced-motion preferences. Both languages and all four existing PDF downloads are retained. The PDFs remain the same verified documents; this redesign changes the website and profile photo.

Image: `public/profile-satja-studio.png`, created with the built-in ImageGen tool from the original `public/profile-satja.png`. Original retained.

Portrait edit prompt:

> Use case: identity-preserve. Asset type: professional developer portfolio portrait. Input image 1 is the edit target: a photographed old printed portrait. Create exactly ONE restored photographic portrait of this SAME man, strictly preserving his facial identity, facial proportions, distinctive eyes, nose, mouth, jawline, hairstyle, age, skin tone, expression, frontal pose, navy formal suit, white shirt, and dark tie. Do not invent another person, reshape his face, or overly beautify him. Restore natural photographic sharpness and clear detail lost in the photographed print; remove glare, paper texture and white paper border; replace only the bright blue backdrop with a smooth deep charcoal studio background with an extremely subtle dark olive undertone, suited to a #111510 dark and #cefb69 lime portfolio palette. Keep lime out of skin and clothing. Centred upper body and shoulders portrait, ample headroom, vertical 4:5 crop, high resolution, complete top of hair visible. Tasteful soft professional studio light, gentle natural shadows, realistic skin pores and hair detail, restrained retouching, polished but authentic. Preserve the same man's face and facial structure aggressively. No waxy skin, no artificial beauty filter, no added objects, no text, no logos, no watermark.
