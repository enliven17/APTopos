(()=>{var e={};e.id=323,e.ids=[323],e.modules={2131:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>l,routeModule:()=>x,tree:()=>p});var o=t(65239),i=t(48088),s=t(88170),a=t.n(s),n=t(30893),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(r,d);let p={children:["",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,24459)),"/home/enliven/Desktop/aptos/aptopos/src/app/create/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,94431)),"/home/enliven/Desktop/aptos/aptopos/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,l=["/home/enliven/Desktop/aptos/aptopos/src/app/create/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},x=new o.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/create/page",pathname:"/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10017:(e,r,t)=>{"use strict";t.d(r,{TS:()=>d,jC:()=>n,sv:()=>s,vj:()=>a});let o=process.env.NEXT_PUBLIC_MODULE_ADDRESS||"0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be",i=`${o}::betting`;async function s(){try{let e=await fetch("/api/markets");if(!e.ok)throw Error(`HTTP ${e.status}`);return await e.json()}catch(e){throw console.error("Failed to fetch markets from API route:",e),Error("Failed to load markets from chain.")}}async function a(e,r){return r({function:`${i}::create_market`,type_arguments:[],arguments:[]})}async function n(e,r,t,o,s){return r({function:`${i}::place_bet`,type_arguments:[],arguments:[t,o,s]})}async function d(e,r,t){return r({function:`${i}::close_market`,type_arguments:[],arguments:[t]})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11289:(e,r,t)=>{Promise.resolve().then(t.bind(t,24459))},12412:e=>{"use strict";e.exports=require("assert")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:e=>{"use strict";e.exports=require("os")},24459:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/enliven/Desktop/aptos/aptopos/src/app/create/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/enliven/Desktop/aptos/aptopos/src/app/create/page.tsx","default")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},37366:e=>{"use strict";e.exports=require("dns")},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},63177:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>G});var o=t(60687),i=t(43210),s=t(14159),a=t(85443),n=t(10017),d=t(23877);function p(){let[e,r]=(0,i.useState)(""),[t,s]=(0,i.useState)(""),[p,G]=(0,i.useState)(""),[D,E]=(0,i.useState)(.01),[I,R]=(0,i.useState)(1),[N,B]=(0,i.useState)(.5),[F,O]=(0,i.useState)(""),[L,U]=(0,i.useState)(""),[W,X]=(0,i.useState)(!1),{account:Y,connected:H,signAndSubmitTransaction:K}=(0,a.vT)(),Z=async o=>{o.preventDefault(),O(""),U(""),X(!0);try{if(!e.trim()||!t.trim()){O("Title and description are required."),X(!1);return}if(!p){O("Closing time must be selected."),X(!1);return}if(D<=0||I<=0||D>=I){O("Min/max bet limits are invalid."),X(!1);return}if(N<.1){O("Initial pool must be at least 0.1 APT."),X(!1);return}if(!H||!Y?.address){O("Wallet is not connected."),X(!1);return}if(Math.floor(new Date(p).getTime()/1e3)<Date.now()/1e3+3600){O("Closing time must be at least 1 hour from now."),X(!1);return}await (0,n.vj)(Y.address.toString(),K),U("Market created successfully! It may take a few seconds to appear on-chain."),r(""),s(""),G(""),E(.01),R(1),B(.5)}catch(e){e&&"object"==typeof e&&"message"in e&&"string"==typeof e.message?O(e.message):O("Failed to create market. Please try again.")}finally{X(!1)}};return(0,o.jsxs)(l,{children:[(0,o.jsxs)(c,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(d.OiG,{})}),(0,o.jsxs)(u,{children:[(0,o.jsx)(m,{children:"Create New Market"}),(0,o.jsx)(h,{children:"Start a new prediction market and let users bet on outcomes"})]})]}),(0,o.jsxs)(g,{onSubmit:Z,children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)(b,{children:[(0,o.jsx)(d.__w,{}),"Market Information"]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Market Title"}),(0,o.jsx)(j,{value:e,onChange:e=>r(e.target.value),placeholder:"e.g., Will Bitcoin reach $100k by end of year?",required:!0})]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Description"}),(0,o.jsx)(w,{value:t,onChange:e=>s(e.target.value),placeholder:"Provide a clear description of what users are betting on...",required:!0})]})]}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(b,{children:[(0,o.jsx)(d.bfZ,{}),"Market Settings"]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Closing Time"}),(0,o.jsx)(j,{type:"datetime-local",value:p,onChange:e=>G(e.target.value),required:!0}),(0,o.jsx)(k,{children:"Market will close at this time and no more bets will be accepted"})]}),(0,o.jsxs)($,{children:[(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Minimum Bet (APT)"}),(0,o.jsx)(j,{type:"number",step:"0.01",min:.01,value:D,onChange:e=>E(Number(e.target.value)),required:!0})]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Maximum Bet (APT)"}),(0,o.jsx)(j,{type:"number",step:"0.01",min:.01,value:I,onChange:e=>R(Number(e.target.value)),required:!0})]})]}),(0,o.jsx)(M,{children:"Minimum bet must be at least 0.001 APT and maximum bet cannot exceed 5 APT. The values you select must be within this range."})]}),(0,o.jsxs)(f,{children:[(0,o.jsxs)(b,{children:[(0,o.jsx)(d.cEG,{}),"Pool Configuration"]}),(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{children:"Initial Pool (APT)"}),(0,o.jsx)(j,{type:"number",step:"0.01",min:.1,value:N,onChange:e=>B(Number(e.target.value)),required:!0}),(0,o.jsx)(k,{children:"Starting amount in the betting pool"})]})]}),F&&(0,o.jsxs)(A,{children:[(0,o.jsx)(q,{children:(0,o.jsx)(d.BS8,{})}),(0,o.jsx)(P,{children:F})]}),L&&(0,o.jsxs)(z,{children:[(0,o.jsx)(S,{children:(0,o.jsx)(d.A7C,{})}),(0,o.jsx)(_,{children:L})]}),(0,o.jsx)(C,{type:"submit",disabled:!H||W,children:W?"Creating...":(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.OiG,{})," Create Market"]})}),(0,o.jsx)(T,{children:"Newly created markets must first be approved before going live. If your market is not approved, the APT you provided for the pool will be refunded to your wallet."})]})]})}let l=s.Ay.div`
  max-width: 800px;
  margin: 32px auto;
  padding: 0 24px;
  @media (max-width: 600px) {
    padding: 0 16px;
    margin: 16px auto;
  }
`,c=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  padding: 32px;
  background: ${({theme:e})=>e.colors.card};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
    gap: 16px;
  }
`,x=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 16px;
  font-size: 24px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`,u=s.Ay.div`
  flex: 1;
`,m=s.Ay.h1`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`,h=s.Ay.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`,g=s.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,f=s.Ay.div`
  background: ${({theme:e})=>e.colors.card};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border: 1px solid ${({theme:e})=>e.colors.border};
  @media (max-width: 600px) {
    padding: 24px 20px;
  }
`,b=s.Ay.h2`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: ${({theme:e})=>e.colors.primary};
    font-size: 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`,y=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,v=s.Ay.label`
  color: ${({theme:e})=>e.colors.text};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`,j=s.Ay.input`
  padding: 16px 20px;
  border-radius: 12px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 16px;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
  
  @media (max-width: 600px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`,w=s.Ay.textarea`
  padding: 16px 20px;
  border-radius: 12px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text};
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
  
  @media (max-width: 600px) {
    padding: 14px 16px;
    font-size: 16px;
    min-height: 100px;
  }
`,k=s.Ay.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 12px;
  margin: 4px 0 0 0;
  line-height: 1.4;
`,$=s.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,A=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: ${({theme:e})=>`${e.colors.accentRed}10`};
  border: 1px solid ${({theme:e})=>e.colors.accentRed};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.accentRed};
`,q=s.Ay.div`
  font-size: 18px;
  flex-shrink: 0;
`,P=s.Ay.span`
  font-size: 14px;
  font-weight: 500;
`,z=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: ${({theme:e})=>`${e.colors.accentGreen}10`};
  border: 1px solid ${({theme:e})=>e.colors.accentGreen};
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.accentGreen};
`,S=s.Ay.div`
  font-size: 18px;
  flex-shrink: 0;
`,_=s.Ay.span`
  font-size: 14px;
  font-weight: 500;
`,C=s.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({theme:e,disabled:r})=>r?e.colors.textSecondary:e.colors.primary};
  color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59,130,246,0.10);
    background: ${({theme:e})=>e.colors.accentGreen};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 600px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`,T=s.Ay.div`
  margin-top: 18px;
  background: ${({theme:e})=>`${e.colors.primary}08`};
  color: ${({theme:e})=>e.colors.textSecondary};
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 15px;
  font-weight: 500;
`,M=s.Ay.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 13px;
  margin: 8px 0 0 0;
  padding-left: 2px;
`;function G(){return(0,o.jsx)(p,{})}},70440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var o=t(31658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},73496:e=>{"use strict";e.exports=require("http2")},74075:e=>{"use strict";e.exports=require("zlib")},77167:e=>{"use strict";e.exports=require("keyv")},77598:e=>{"use strict";e.exports=require("node:crypto")},79428:e=>{"use strict";e.exports=require("buffer")},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},83997:e=>{"use strict";e.exports=require("tty")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")},98265:(e,r,t)=>{Promise.resolve().then(t.bind(t,63177))}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[447,289,658,645],()=>t(2131));module.exports=o})();