(()=>{var e={};e.id=35,e.ids=[35],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21667:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>Q});var s=t(60687),i=t(54864),o=t(14159),n=t(23877),a=t(85443);function d(){let{account:e}=(0,a.vT)(),r=(0,i.d4)(e=>e.markets.markets),t=(0,i.d4)(e=>e.markets.claimableRewards),o=(0,i.d4)(r=>e?.address&&r.markets.userDefiQ[e.address.toString()]||0),d=e?.address?r.flatMap(r=>[...(r.yes_bets||[]).map(e=>({...e,market:r,side:"yes"})),...(r.no_bets||[]).map(e=>({...e,market:r,side:"no"}))].filter(r=>r.user===e.address.toString())):[],Q=e?.address?t.filter(r=>r.userId===e.address.toString()):[];return(0,s.jsxs)(p,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:"My Bet History"}),(0,s.jsxs)(x,{children:[(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{children:"Total Bets"}),(0,s.jsx)(h,{children:d.length})]}),(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{children:"Rewards"}),(0,s.jsx)(h,{children:Q.length})]}),(0,s.jsxs)(m,{title:"DEFIq: Prediction Intelligence Score",children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(n.KuA,{style:{marginRight:6,color:"#7f5af0"}}),"DEFiq"]}),(0,s.jsx)(h,{children:o})]})]})]}),(0,s.jsxs)(g,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(y,{children:"My Bets"}),(0,s.jsxs)(b,{children:[d.length," bets"]})]}),0===d.length?(0,s.jsxs)(j,{children:[(0,s.jsx)(v,{children:"\uD83C\uDFB2"}),(0,s.jsx)(w,{children:"No bets yet"}),(0,s.jsx)(A,{children:"Start betting on markets to see your history here"})]}):(0,s.jsx)(k,{children:d.map(e=>(0,s.jsxs)($,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(z,{children:e.market.title}),(0,s.jsx)(_,{children:e.market.closed?e.market.result===e.side?(0,s.jsx)(P,{children:(0,s.jsx)(n.A7C,{})}):(0,s.jsx)(S,{children:(0,s.jsx)(n._Hm,{})}):(0,s.jsx)(D,{children:(0,s.jsx)(n.w_X,{})})})]}),(0,s.jsxs)(C,{children:[(0,s.jsxs)(G,{children:[(0,s.jsx)(R,{children:"Side"}),(0,s.jsx)(M,{$side:e.side,children:"yes"===e.side?"Yes":"No"})]}),(0,s.jsxs)(G,{children:[(0,s.jsx)(R,{children:"Amount"}),(0,s.jsxs)(M,{$amount:!0,children:[e.amount," APT"]})]}),(0,s.jsxs)(G,{children:[(0,s.jsx)(R,{children:"Status"}),(0,s.jsx)(M,{children:e.market.closed?e.market.result===e.side?(0,s.jsx)(O,{children:"Won"}):(0,s.jsx)(W,{children:"Lost"}):(0,s.jsx)(X,{children:"Open"})})]})]}),(0,s.jsxs)(E,{children:[(0,s.jsx)(I,{children:new Date(1e3*e.market.closes_at).toLocaleDateString()}),(0,s.jsx)(T,{children:new Date(1e3*e.market.closes_at).toLocaleTimeString()})]})]},e.market.id+"-"+e.side))})]}),(0,s.jsxs)(g,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(y,{children:"My Rewards"}),(0,s.jsxs)(b,{children:[Q.length," rewards"]})]}),0===Q.length?(0,s.jsxs)(j,{children:[(0,s.jsx)(v,{children:"\uD83C\uDFC6"}),(0,s.jsx)(w,{children:"No rewards yet"}),(0,s.jsx)(A,{children:"Win some bets to see your rewards here"})]}):(0,s.jsx)(F,{children:Q.map(e=>(0,s.jsxs)(B,{children:[(0,s.jsxs)(L,{children:[(0,s.jsx)(N,{children:(0,s.jsx)(n.cEG,{})}),(0,s.jsx)(Y,{$claimed:e.claimed,children:e.claimed?"Claimed":"Claimable"})]}),(0,s.jsxs)(H,{children:[(0,s.jsxs)(K,{children:[(0,s.jsx)(R,{children:"Market ID"}),(0,s.jsxs)(M,{children:[e.marketId.slice(0,8),"..."]})]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(R,{children:"Amount"}),(0,s.jsxs)(M,{$reward:!0,children:[e.amount.toFixed(4)," APT"]})]})]})]},e.marketId))})]})]})}let p=o.Ay.div`
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 24px;
  @media (max-width: 600px) {
    padding: 0 16px;
    margin: 16px auto;
  }
`,l=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }
`,c=o.Ay.h1`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`,x=o.Ay.div`
  display: flex;
  gap: 24px;
  @media (max-width: 600px) {
    gap: 16px;
  }
`,m=o.Ay.div`
  text-align: center;
  padding: 16px 24px;
  background: ${({theme:e})=>e.colors.card};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  @media (max-width: 600px) {
    padding: 12px 16px;
  }
`,u=o.Ay.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`,h=o.Ay.div`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`,g=o.Ay.div`
  margin-bottom: 40px;
`,f=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`,y=o.Ay.h2`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`,b=o.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
  background: ${({theme:e})=>e.colors.background};
  padding: 6px 12px;
  border-radius: 20px;
`,j=o.Ay.div`
  text-align: center;
  padding: 60px 20px;
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px;
  border: 2px solid ${({theme:e})=>e.colors.border} !important;
  box-shadow: none !important;
`,v=o.Ay.div`
  font-size: 48px;
  margin-bottom: 16px;
`,w=o.Ay.h3`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 8px 0;
`,A=o.Ay.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 14px;
  margin: 0;
`,k=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,$=o.Ay.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border: 2px solid ${({theme:e})=>e.colors.border};
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }
  
  @media (max-width: 600px) {
    padding: 20px;
  }
`,q=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`,z=o.Ay.h3`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  flex: 1;
  margin-right: 16px;
`,_=o.Ay.div`
  flex-shrink: 0;
`,P=o.Ay.div`
  color: ${({theme:e})=>e.colors.accentGreen};
  font-size: 20px;
`,S=o.Ay.div`
  color: ${({theme:e})=>e.colors.accentRed};
  font-size: 20px;
`,D=o.Ay.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 20px;
`,C=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,G=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,R=o.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,M=o.Ay.span`
  color: ${({theme:e,$side:r,$amount:t,$reward:s})=>"yes"===r?e.colors.accentGreen:"no"===r?e.colors.accentRed:t||s?e.colors.primary:e.colors.text};
  font-size: 14px;
  font-weight: 600;
`,E=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,I=o.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
`,T=o.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
`,F=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,B=o.Ay.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border: 2px solid ${({theme:e})=>e.colors.border};
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }
  
  @media (max-width: 600px) {
    padding: 20px;
  }
`,L=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,N=o.Ay.div`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 24px;
`,Y=o.Ay.span`
  color: ${({theme:e,$claimed:r})=>r?e.colors.textSecondary:e.colors.accentGreen};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${({theme:e,$claimed:r})=>r?e.colors.background:`${e.colors.accentGreen}20`};
`,H=o.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,K=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=o.Ay.span`
  color: ${({theme:e})=>e.colors.accentGreen};
  font-weight: 600;
`,W=o.Ay.span`
  color: ${({theme:e})=>e.colors.accentRed};
  font-weight: 600;
`,X=o.Ay.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 600;
`;function Q(){return(0,s.jsx)(d,{})}},21820:e=>{"use strict";e.exports=require("os")},24113:(e,r,t)=>{Promise.resolve().then(t.bind(t,21667))},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33841:(e,r,t)=>{Promise.resolve().then(t.bind(t,37949))},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},37366:e=>{"use strict";e.exports=require("dns")},37949:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/enliven/Desktop/aptos/aptopos/src/app/user-bets/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/enliven/Desktop/aptos/aptopos/src/app/user-bets/page.tsx","default")},52975:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>c,pages:()=>l,routeModule:()=>x,tree:()=>p});var s=t(65239),i=t(48088),o=t(88170),n=t.n(o),a=t(30893),d={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);t.d(r,d);let p={children:["",{children:["user-bets",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,37949)),"/home/enliven/Desktop/aptos/aptopos/src/app/user-bets/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,94431)),"/home/enliven/Desktop/aptos/aptopos/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,l=["/home/enliven/Desktop/aptos/aptopos/src/app/user-bets/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/user-bets/page",pathname:"/user-bets",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(31658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},73496:e=>{"use strict";e.exports=require("http2")},74075:e=>{"use strict";e.exports=require("zlib")},77167:e=>{"use strict";e.exports=require("keyv")},77598:e=>{"use strict";e.exports=require("node:crypto")},79428:e=>{"use strict";e.exports=require("buffer")},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[447,289,658,645],()=>t(52975));module.exports=s})();