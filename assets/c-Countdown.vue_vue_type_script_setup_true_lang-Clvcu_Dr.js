import{e as R,l as g,m as y,H as P,E as j,r as N,c as e,aB as B,aC as V,aD as F,aE as U,o as E,au as L,p as h,k as o,n as Y,G as k,t as I}from"../bundle.js";const C=R({__name:"CountdownNumber",props:{time:{},animate:{type:Boolean},direction:{}},setup(p){return(t,n)=>(g(),y("span",{class:j({"animation ease-in animate-timer-up":t.animate&&t.direction==="up","animation ease-in animate-timer-down":t.animate&&t.direction==="down"})},P(t.time),3))}}),z=(p,t)=>{const n=N(0),r=N(0),l=e(()=>a(r.value/B)),d=e(()=>r.value%B),u=e(()=>a(d.value/V)),w=e(()=>d.value%V),c=e(()=>a(w.value/F)),b=e(()=>w.value%F),v=e(()=>a(b.value/U)),m=e(()=>n.value===0&&l.value===0&&u.value===0&&c.value===0&&v.value===0),x=e(()=>n.value>0),D=e(()=>n.value>0||l.value>0||m.value),T=e(()=>n.value>0||l.value>0||u.value>0||m.value),M=e(()=>n.value>0||l.value>0||u.value>0||c.value>0||m.value),_=e(()=>n.value>0||l.value>0||u.value>0||c.value>0||v.value>0||m.value),a=i=>(t==="up"?i=Math.abs(i):i=Math.max(0,i),Math.floor(i)),s=()=>{const i=t==="up"?new Date(L(p)):new Date,f=t==="up"?new Date:new Date(L(p));if(t==="up"&&i.getTime()>f.getTime()||t==="down"&&f.getTime()<=i.getTime()){n.value=0,r.value=0;return}let H=f.getFullYear()-i.getFullYear();f.getMonth()>i.getMonth()||f.getMonth()===i.getMonth()&&f.getDate()>=i.getDate()||H--;const S=new Date(i);S.setFullYear(i.getFullYear()+H),n.value=a(H),r.value=f.getTime()-S.getTime(),setTimeout(s,1e3)};return E(()=>{s()}),{years:n,days:l,hours:u,minutes:c,seconds:v,showYears:x,showDays:D,showHours:T,showMinutes:M,showSeconds:_}},A=(p,t,n,r,l,d,u)=>{const w=N(0),c=e(()=>t.value===0&&n.value===0&&r.value===0&&l.value===0&&d.value===0),b=e(()=>u==="down"?n.value===364:n.value===0),v=e(()=>u==="down"?r.value===23:r.value===0),m=e(()=>u==="down"?l.value===59:l.value===0),x=e(()=>u==="down"?d.value===59:d.value===0),D=e(()=>t.value>=0&&b.value&&v.value&&m.value&&x.value),T=e(()=>n.value>=0&&v.value&&m.value&&x.value),M=e(()=>r.value>=0&&m.value&&x.value),_=e(()=>l.value>=0&&x.value),a=e(()=>!c.value),s=()=>{w.value=p-new Date().getTime(),setTimeout(s,1e3)};return E(()=>{s()}),{animateYears:D,animateDays:T,animateHours:M,animateMinutes:_,animateSeconds:a}},G={class:"grid grid-flow-col text-center"},$={key:0,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},q={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},J={key:1,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},K={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},O={key:2,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Q={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},W={key:3,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},X={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},Z={key:4,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ee={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ae=R({__name:"Countdown",props:{time:{},direction:{},alignment:{}},setup(p){const t=p,{years:n,days:r,hours:l,minutes:d,seconds:u,showYears:w,showDays:c,showHours:b,showMinutes:v,showSeconds:m}=z(()=>t.time,t.direction),{animateYears:x,animateDays:D,animateHours:T,animateMinutes:M,animateSeconds:_}=A(t.time,n,r,l,d,u,t.direction);return(a,s)=>(g(),y("div",{class:j({block:!a.alignment,flex:!!a.alignment,"justify-start":a.alignment==="left","justify-center":a.alignment==="center","justify-end":a.alignment==="right"})},[h("div",G,[o(w)?(g(),y("div",$,[h("span",q,[Y(C,{time:o(n),animate:o(x),direction:a.direction},null,8,["time","animate","direction"])]),s[0]||(s[0]=k(" years "))])):I("",!0),o(c)?(g(),y("div",J,[h("span",K,[Y(C,{time:o(r),animate:o(D),direction:a.direction},null,8,["time","animate","direction"])]),s[1]||(s[1]=k(" days "))])):I("",!0),o(b)?(g(),y("div",O,[h("span",Q,[Y(C,{time:o(l),animate:o(T),direction:a.direction},null,8,["time","animate","direction"])]),s[2]||(s[2]=k(" hrs "))])):I("",!0),o(v)?(g(),y("div",W,[h("span",X,[Y(C,{time:o(d),animate:o(M),direction:a.direction},null,8,["time","animate","direction"])]),s[3]||(s[3]=k(" mins "))])):I("",!0),o(m)?(g(),y("div",Z,[h("span",ee,[Y(C,{time:o(u),animate:o(_),direction:a.direction},null,8,["time","animate","direction"])]),s[4]||(s[4]=k(" secs "))])):I("",!0)])],2))}});export{ae as _};
