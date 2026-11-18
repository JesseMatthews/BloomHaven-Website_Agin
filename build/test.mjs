import { chromium } from 'playwright';
import fs from 'node:fs';
import axe from 'axe-core';
const base='http://localhost:8765';
const sm=fs.readFileSync('../site/sitemap.xml','utf8');
const paths=[...sm.matchAll(/<loc>https:\/\/www\.bloomhavencare\.co\.uk(.*?)<\/loc>/g)].map(m=>m[1]);
paths.push('/thank-you/','/404.html');
const b=await chromium.launch();
const bad=[];const errs=[];
for (const [name,vp] of [['d',{width:1280,height:900}],['m',{width:390,height:800}]]){
  const ctx=await b.newContext({viewport:vp,bypassCSP:true}); 
  for (const p of paths){
    const pg=await ctx.newPage();
    pg.on('console',m=>{if(m.type()==='error')errs.push(name+p+' '+m.text())});
    pg.on('requestfailed',r=>errs.push(name+p+' REQFAIL '+r.url()));
    const r=await pg.goto(base+p); if(r.status()>=400&&p!=='/404.html')bad.push(p+' '+r.status());
    await pg.addScriptTag({content:axe.source});
    const res=await pg.evaluate(async()=>await axe.run({runOnly:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}));
    for(const v of res.violations) bad.push(`${name} ${p} ${v.id} (${v.impact}) x${v.nodes.length} ${v.nodes[0].target}`);
    const ov=await pg.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
    if(ov>0)bad.push(`${name} ${p} horizontal overflow ${ov}`);
    if(['/','/home-care/','/areas/','/paying-for-care/','/contact/','/quality-and-safety/','/careers/'].includes(p)) await pg.screenshot({path:`../shots/${name}${p.replace(/\//g,'_')||'_'}.png`,fullPage:true});
    await pg.close();
  }
}
console.log('PROBLEMS\n'+[...new Set(bad)].join('\n'));console.log('ERRS\n'+[...new Set(errs)].join('\n'));
await b.close();
