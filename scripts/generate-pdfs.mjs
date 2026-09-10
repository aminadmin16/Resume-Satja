import {readFile,writeFile,mkdir,rename} from 'node:fs/promises';
import path from 'node:path';
import {chromium} from 'playwright';
import {PDFDocument,degrees} from 'pdf-lib';
import {content,skillGroups} from '../app/resumeData.js';
import {certificatePages} from '../app/certificates.js';
import {createHash} from 'node:crypto';
import {fullCV} from './full-cv.mjs';
import {classicResume} from './classic-resume.mjs';
const root=process.cwd();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const font=async file=>(await readFile(path.join(root,'public/fonts',file))).toString('base64');
const thai=await font('noto-sans-thai.woff2'),latin=await font('noto-sans-latin.woff2');
const fontCSS=`@font-face{font-family:Noto;font-weight:100 900;src:url(data:font/woff2;base64,${thai}) format('woff2');unicode-range:U+2D7,U+303,U+331,U+E01-E5B,U+200C-200D,U+25CC}@font-face{font-family:Noto;font-weight:100 900;src:url(data:font/woff2;base64,${latin}) format('woff2');unicode-range:U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}`;
await mkdir(path.join(root,'public/documents'),{recursive:true});await mkdir(path.join(root,'tmp/pdfs'),{recursive:true});
const browser=await chromium.launch({headless:true});
try{for(const lang of ['th','en'])for(const type of ['resume','cv']){
 const page=await browser.newPage();await page.setContent(type==='resume'?await classicResume(lang,fontCSS):fullCV(lang,fontCSS),{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
 if(type==='resume'){
  await page.evaluate(async()=>{await Promise.all([...document.images].map(img=>img.decode()));});
  const overflow=await page.evaluate(()=>{const paper=document.querySelector('.paper').getBoundingClientRect();return [...document.querySelectorAll('.paper-grid p,.paper-grid li,.paper-grid h1,.paper-grid h2,.exp-head')].some(el=>{const r=el.getBoundingClientRect();return r.bottom>paper.bottom-10||r.right>paper.right-10;});});
  if(overflow)throw new Error(`Classic Resume ${lang} content overflows the page`);
 }
 const bytes=await page.pdf({format:'A4',printBackground:true,preferCSSPageSize:true});const doc=await PDFDocument.load(bytes);
 await writeFile(path.join(root,'tmp/pdfs',`${type}-${lang}-body.pdf`),bytes);const expected=1;if(doc.getPageCount()!==expected)throw new Error(`${type}-${lang}: expected ${expected} body pages, got ${doc.getPageCount()}`);
 const seenAssets=new Set();
 for(const cert of certificatePages){const assetPath=path.resolve(root,'public',cert.file.replace(/^\//,''));const allowed=path.resolve(root,'public/certificates')+path.sep;if(!assetPath.startsWith(allowed))throw new Error('Certificate must be inside public/certificates');const asset=await readFile(assetPath);const hash=createHash('sha256').update(asset).digest('hex');if(seenAssets.has(hash))continue;seenAssets.add(hash);
 if(asset.subarray(0,5).toString()==='%PDF-'){const original=await PDFDocument.load(asset);for(const copied of await doc.copyPages(original,original.getPageIndices()))doc.addPage(copied);}else{let img;if(asset[0]===0xff&&asset[1]===0xd8)img=await doc.embedJpg(asset);else if(asset.subarray(1,4).toString()==='PNG')img=await doc.embedPng(asset);else throw new Error('Unsupported certificate file');const landscape=img.width>img.height;const [w,h]=landscape?[841.89,595.28]:[595.28,841.89];const p=doc.addPage([w,h]);if(cert.rotation)p.setRotation(degrees(cert.rotation));const s=Math.min((w-40)/img.width,(h-40)/img.height);p.drawImage(img,{x:(w-img.width*s)/2,y:(h-img.height*s)/2,width:img.width*s,height:img.height*s});}}
 doc.setTitle(`Satja Chaiseanpha - ${type.toUpperCase()} (${lang.toUpperCase()})`);doc.setAuthor('Satja Chaiseanpha');doc.setSubject('Professional experience and original certificates');const name=`Satja-Chaiseanpha-${type}-${lang}.pdf`;const destination=path.join(root,'public/documents',name);await writeFile(destination+'.tmp',await doc.save());await rename(destination+'.tmp',destination);console.log(`${name}: ${expected} body + ${doc.getPageCount()-expected} certificate pages`);await page.close();
}}finally{await browser.close();}
