(()=>{var e={};e.id=175,e.ids=[175],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5540:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>l});var t=o(60687),n=o(43210),i=o(16189),s=o(85443),a=o(51423),d=o(10017),p=o(14159);function c(){let{id:e}=(0,i.useParams)(),{data:r=[],isLoading:o,isError:t}=(0,a.I)({queryKey:["markets"],queryFn:d.sv,refetchInterval:1e4});r.find(r=>String(r.id)===String(e));let[p,c]=(0,n.useState)(""),[l,x]=(0,n.useState)("yes"),[u,g]=(0,n.useState)(""),[m,f]=(0,n.useState)(""),{account:b,connected:y,signAndSubmitTransaction:h}=(0,s.vT)(),[v,$]=(0,n.useState)(!1),[k,A]=(0,n.useState)(!1),[w,z]=(0,n.useState)([{id:1,user:"Alice",text:"I think this market is very interesting!",date:"2024-07-06 20:00"},{id:2,user:"Bob",text:"My bet is on YES \uD83D\uDE80",date:"2024-07-06 20:10"},{id:3,user:"Charlie",text:"I'm not so sure, but good luck everyone!",date:"2024-07-06 20:15"}]),[q,S]=(0,n.useState)("");return null;function _(e,r,o,t){let n=(t-90)*Math.PI/180;return{x:e+o*Math.cos(n),y:r+o*Math.sin(n)}}}function l(){return(0,t.jsx)(c,{})}o(23877),p.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 28px;
  min-width: 140px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  circle, path {
    transition: all 0.4s ease;
  }
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: 8px;
  transition: all 0.3s ease;
`,p.Ay.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({color:e})=>e};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`,p.Ay.div`
  max-width: 1100px;
  margin: 40px auto 0 auto;
  padding: 0 12px 40px 12px;
`,p.Ay.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0 0 40px 0;
  margin-bottom: 32px;
  border: 2px solid ${({theme:e})=>e.colors.border};
`,p.Ay.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 18px 18px 0 0;
  padding: 40px 48px 22px 48px;
  text-align: left;
`,p.Ay.h1`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 10px 0;
`,p.Ay.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.05rem;
  margin: 0 0 8px 0;
`,p.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({$color:e,theme:r})=>"green"===e?`${r.colors.accentGreen}10`:"red"===e?`${r.colors.accentRed}10`:"blue"===e?`${r.colors.primary}10`:`${r.colors.textSecondary}10`};
  color: ${({$color:e,theme:r})=>"green"===e?r.colors.accentGreen:"red"===e?r.colors.accentRed:"blue"===e?r.colors.primary:r.colors.textSecondary};
  margin-top: 10px;
  box-shadow: none;
`,p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 48px;
  }
  padding: 0 48px;
`,p.Ay.div`
  flex: 1.1;
  min-width: 0;
  margin-top: 18px;
`,p.Ay.div`
  flex: 1;
  min-width: 0;
  margin-top: 18px;
`,p.Ay.div`
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 10px;
  box-shadow: none;
  border: 2px solid ${({theme:e})=>e.colors.border};
  padding: 12px 16px;
  min-width: 120px;
  flex: 1;
`,p.Ay.div`
  display: flex;
  flex-direction: column;
`,p.Ay.div`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.05rem;
  font-weight: 700;
`,p.Ay.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.95rem;
  font-weight: 500;
`,p.Ay.div`
  background: ${({theme:e})=>e.colors.background};
  border-radius: 12px;
  box-shadow: none;
  border: 2px solid ${({theme:e})=>e.colors.border};
  padding: 18px 14px 14px 14px;
  margin-bottom: 8px;
`,p.Ay.div`
  display: flex;
  gap: 8px;
`,p.Ay.button`
  flex: 1;
  background: ${({$active:e,$side:r,theme:o})=>e?"yes"===r?o.colors.accentGreen:o.colors.accentRed:o.colors.background};
  color: ${({$active:e,theme:r})=>e?"#fff":r.colors.textSecondary};
  border: 1.5px solid ${({theme:e,$active:r,$side:o})=>r?"yes"===o?e.colors.accentGreen:e.colors.accentRed:e.colors.border};
  border-radius: 8px;
  padding: 8px 0;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: none;
  &:hover {
    background: ${({$side:e,theme:r})=>"yes"===e?r.colors.accentGreen:r.colors.accentRed};
    color: #fff;
  }
`,p.Ay.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,p.Ay.div`
  color: ${({$color:e,theme:r})=>"green"===e?r.colors.accentGreen:r.colors.accentRed};
  font-size: 1rem;
  font-weight: 700;
`,p.Ay.form`
  background: none;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 12px;
  box-shadow: none;
`,p.Ay.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
  }
`,p.Ay.div`
  flex: 1;
`,p.Ay.label`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
`,p.Ay.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1.5px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 15px;
  margin-bottom: 2px;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: none;
  }
`,p.Ay.div`
  color: ${({theme:e})=>e.colors.accentRed};
  font-weight: bold;
  margin: 12px 0;
`,p.Ay.div`
  background: ${({theme:e})=>e.colors.secondary};
  color: ${({theme:e})=>e.colors.primary};
  padding: 14px 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`,p.Ay.div`
  margin: 24px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
`,p.Ay.button`
  background: ${({theme:e})=>e.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({theme:e})=>e.colors.accentGreen};
  }
`,p.Ay.div`
  margin-top: 18px;
`,p.Ay.h3`
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: 6px;
  font-size: 1.1rem;
`,p.Ay.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
`,p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 15px;
  &:hover {
    background: ${({theme:e})=>e.colors.background};
  }
`,p.Ay.span`
  background: ${({$side:e,theme:r})=>"yes"===e?`${r.colors.accentGreen}10`:`${r.colors.accentRed}10`};
  color: ${({$side:e,theme:r})=>"yes"===e?r.colors.accentGreen:r.colors.accentRed};
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 13px;
  text-transform: uppercase;
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 700;
  min-width: 60px;
`,p.Ay.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,p.Ay.h3`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 18px;
`,p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 18px;
`,p.Ay.div`
  background: ${({theme:e})=>e.colors.background};
  border-radius: 12px;
  padding: 18px 32px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s;
  @media (max-width: 600px) {
    padding: 14px 10px;
  }
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.text};
  font-size: 1.08rem;
  margin: 4px 0 2px 0;
`,p.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.92rem;
  margin-top: 2px;
`,p.Ay.form`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`,p.Ay.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 2px ${({theme:e})=>`${e.colors.primary}20`};
  }
`,p.Ay.button`
  background: ${({theme:e,disabled:r})=>r?e.colors.textSecondary:e.colors.primary};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: background 0.2s;
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.accentGreen};
  }
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({$color:e,theme:r})=>"green"===e?`${r.colors.accentGreen}20`:"red"===e?`${r.colors.accentRed}20`:"blue"===e?`${r.colors.primary}20`:`${r.colors.textSecondary}20`};
  color: ${({$color:e,theme:r})=>"green"===e?r.colors.accentGreen:"red"===e?r.colors.accentRed:"blue"===e?r.colors.primary:r.colors.textSecondary};
  svg {
    font-size: 14px;
  }
`,p.Ay.button`
  width: 100%;
  background: ${({theme:e})=>e.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  box-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: ${({theme:e})=>e.colors.accentGreen};
  }
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({theme:e})=>`${e.colors.accentRed}10`};
  border: 1px solid ${({theme:e})=>e.colors.accentRed};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.accentRed};
  font-size: 15px;
  margin-bottom: 10px;
`,p.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({theme:e})=>`${e.colors.accentGreen}10`};
  border: 1px solid ${({theme:e})=>e.colors.accentGreen};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.accentGreen};
  font-size: 15px;
  margin-bottom: 10px;
`},10017:(e,r,o)=>{"use strict";o.d(r,{TS:()=>d,jC:()=>a,sv:()=>i,vj:()=>s});let t=process.env.NEXT_PUBLIC_MODULE_ADDRESS||"0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be",n=`${t}::betting`;async function i(){try{let e=await fetch("/api/markets");if(!e.ok)throw Error(`HTTP ${e.status}`);return await e.json()}catch(e){throw console.error("Failed to fetch markets from API route:",e),Error("Failed to load markets from chain.")}}async function s(e,r){return r({function:`${n}::create_market`,type_arguments:[],arguments:[]})}async function a(e,r,o,t,i){return r({function:`${n}::place_bet`,type_arguments:[],arguments:[o,t,i]})}async function d(e,r,o){return r({function:`${n}::close_market`,type_arguments:[],arguments:[o]})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},37366:e=>{"use strict";e.exports=require("dns")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70440:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>n});var t=o(31658);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},71301:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>t});let t=(0,o(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/enliven/Desktop/aptos/aptopos/src/app/market/[id]/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/enliven/Desktop/aptos/aptopos/src/app/market/[id]/page.tsx","default")},71517:(e,r,o)=>{Promise.resolve().then(o.bind(o,71301))},73496:e=>{"use strict";e.exports=require("http2")},74075:e=>{"use strict";e.exports=require("zlib")},77167:e=>{"use strict";e.exports=require("keyv")},77598:e=>{"use strict";e.exports=require("node:crypto")},79428:e=>{"use strict";e.exports=require("buffer")},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},90077:(e,r,o)=>{Promise.resolve().then(o.bind(o,5540))},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")},98631:(e,r,o)=>{"use strict";o.r(r),o.d(r,{GlobalError:()=>s.a,__next_app__:()=>l,pages:()=>c,routeModule:()=>x,tree:()=>p});var t=o(65239),n=o(48088),i=o(88170),s=o.n(i),a=o(30893),d={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);o.d(r,d);let p={children:["",{children:["market",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,71301)),"/home/enliven/Desktop/aptos/aptopos/src/app/market/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(o.bind(o,94431)),"/home/enliven/Desktop/aptos/aptopos/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(o.t.bind(o,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(o.t.bind(o,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["/home/enliven/Desktop/aptos/aptopos/src/app/market/[id]/page.tsx"],l={require:o,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/market/[id]/page",pathname:"/market/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})}};var r=require("../../../webpack-runtime.js");r.C(e);var o=e=>r(r.s=e),t=r.X(0,[447,289,658,423,645],()=>o(98631));module.exports=t})();