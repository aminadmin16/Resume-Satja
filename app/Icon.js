export default function Icon({name,className=''}) {
 const paths={
  download:<><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M4 16v4h16v-4"/></>,
  file:<><path d="M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h5"/></>,
  mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
  eye:<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,
  close:<path d="m6 6 12 12M6 18 18 6"/>,
  chevron:<path d="m6 9 6 6 6-6"/>,
  external:<><path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-6"/></>,
  search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,
  layers:<><path d="m12 3 10 5-10 5L2 8 10-5Zm-9 10 9 5 9-5M3 18l9 4 9-4"/></>,
  check:<><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></>,
  hospital:<><path d="M4 21V4h16v17H4Zm5-13h6m-3-3v6m-3 10v-6h6v6"/></>,
  chart:<><path d="M4 3v18h17M8 16v-4m5 4V8m5 8V4"/></>,
  shield:<><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  phone:<><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
  award:<><circle cx="12" cy="8" r="5"/><path d="m8 12-2 10 6-3 6 3-2-10"/></>
 };
 return <svg className={`icon ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.file}</svg>;
}
