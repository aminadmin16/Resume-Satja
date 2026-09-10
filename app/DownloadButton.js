"use client";
import Icon from './Icon';
import {documentUrl} from './certificates';
export default function DownloadButton({lang='th',type='resume'}){return <a className="button primary" href={documentUrl(type,lang)} download><Icon name="download"/>{lang==='th'?'ดาวน์โหลด PDF':'Download PDF'}</a>}
