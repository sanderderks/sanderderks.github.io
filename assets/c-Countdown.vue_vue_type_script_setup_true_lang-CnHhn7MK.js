import{e as R,l as T,m as M,H as A,E as V,r as f,c as m,o as U,au as N,aC as j,aD as C,aE as B,aF as G,aG as P,M as W,k as u,z as E,t as I,p as L,n as S,G as F}from"../bundle.js";const H=R({__name:"CountdownNumber",props:{time:{},animate:{type:Boolean},direction:{}},setup(w){return(t,a)=>(T(),M("span",{class:V({"animation ease-in animate-timer-up":t.animate&&(t.direction==="up"||t.direction==="current"),"animation ease-in animate-timer-down":t.animate&&t.direction==="down"})},A(t.time),3))}}),Z=(w,t)=>{const a=f(0),i=f(0),s=f(0),o=f(0),r=f(0),p=m(()=>a.value===0&&i.value===0&&s.value===0&&o.value===0&&r.value===0),D=m(()=>a.value>0),$=m(()=>a.value>0||i.value>0||p.value),k=m(()=>a.value>0||i.value>0||s.value>0||p.value),b=m(()=>a.value>0||i.value>0||s.value>0||o.value>0||p.value),y=m(()=>a.value>0||i.value>0||s.value>0||o.value>0||r.value>0||p.value),g=e=>(t==="up"?e=Math.abs(e):e=Math.max(0,e),Math.floor(e)),n=()=>{const e=new Date,l=t==="up"?new Date(N(w)):e,d=t==="up"?e:new Date(N(w));if(t==="up"&&l.getTime()>d.getTime()||t==="down"&&d.getTime()<=l.getTime()){a.value=0,i.value=0,s.value=0,o.value=0,r.value=0;return}else if(t==="current"){a.value=e.getFullYear(),i.value=e.getDate(),s.value=e.getHours(),o.value=e.getMinutes(),r.value=e.getSeconds(),setTimeout(n,1e3);return}let x=d.getFullYear()-l.getFullYear();d.getMonth()>l.getMonth()||d.getMonth()===l.getMonth()&&d.getDate()>=l.getDate()||x--;const v=new Date(l);v.setFullYear(l.getFullYear()+x),a.value=g(x);const Y=d.getTime()-v.getTime();i.value=g(Y/j);const _=Y%j;s.value=g(_/C);const h=_%C;o.value=g(h/B);const z=h%B;r.value=g(z/G),setTimeout(n,1e3)};return U(()=>{n()}),{years:a,days:i,hours:s,minutes:o,seconds:r,showYears:D,showDays:$,showHours:k,showMinutes:b,showSeconds:y}},O=(w,t,a,i,s,o,r)=>{const p=f(0),D=m(()=>t.value===0&&a.value===0&&i.value===0&&s.value===0&&o.value===0),$=m(()=>r==="down"?a.value===364:a.value===0),k=m(()=>r==="down"?i.value===23:i.value===0),b=m(()=>r==="down"?s.value===59:s.value===0),y=m(()=>r==="down"?o.value===59:o.value===0),g=m(()=>t.value>=0&&$.value&&k.value&&b.value&&y.value),n=m(()=>a.value>=0&&k.value&&b.value&&y.value),e=m(()=>i.value>=0&&b.value&&y.value),l=m(()=>s.value>=0&&y.value),d=m(()=>!D.value),x=()=>{p.value=w-new Date().getTime(),setTimeout(x,1e3)};return U(()=>{x()}),{animateYears:g,animateDays:n,animateHours:e,animateMinutes:l,animateSeconds:d}},q=()=>{const w="https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday",t=f([]),a=f([]),i=f([]),s=f([]),o=f([]),r=f(!1),p=f(!1),D=f(),$=m(()=>{const n=[...a.value.map(e=>({...e,type:"births"})),...i.value.map(e=>({...e,type:"deaths"})),...o.value.map(e=>({...e,type:"events"}))].sort((e,l)=>(l.year||0)-(e.year||0));return s.value.forEach(e=>{n.splice(P(n.length),0,{...e,type:"holidays"})}),n}),k=n=>{const e=n.getMonth()+1;return e<10?`0${e}`:e},b=n=>n.getDate()<10?`0${n.getDate()}`:n.getDate(),y=(n,e)=>n?n.filter(l=>l.year===e):[],g=async(n,e,l={})=>{var d;if(((d=D.value)==null?void 0:d.getDate())!==n.getDate()){D.value=new Date,p.value=!1,r.value=!0;try{const x=k(n),c=b(n),Y=await(await fetch(`${w}/${e}/${x}/${c}`)).json(),_=h=>(l.reverse&&(h==null||h.reverse()),l.limit&&(h=h==null?void 0:h.slice(0,l.limit)),h||[]);t.value=_(Y.selected),a.value=_(Y.births),i.value=_(Y.deaths),s.value=_(Y.holidays),o.value=_(Y.events)}catch{p.value=!0}finally{const x=[...t.value,...a.value,...i.value,...s.value,...o.value];l.retry&&!x.length&&g(n,e,{...l,retry:l.retry-1}),r.value=!1}}};return{selected:t,births:a,deaths:i,holidays:s,events:o,mixed:$,isLoading:r,hasError:p,fetchData:g,filterByYear:y}},J={key:0,class:"px-4 py-2 xl:p-4 flex justify-center items-center"},K={class:"grid grid-flow-col text-center"},Q={key:0,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},X={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ee={key:1,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},te={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ne={key:2,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ae={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},se={key:3,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},oe={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},le={key:4,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ie={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ue={key:1,class:"px-4 py-2 xl:p-4 flex flex-col justify-center gap-3"},me=R({__name:"Countdown",props:{time:{},direction:{},alignment:{}},setup(w){const t=w,{selected:a,fetchData:i}=q(),{years:s,days:o,hours:r,minutes:p,seconds:D,showYears:$,showDays:k,showHours:b,showMinutes:y,showSeconds:g}=Z(()=>t.time,t.direction),{animateYears:n,animateDays:e,animateHours:l,animateMinutes:d,animateSeconds:x}=O(t.time,s,o,r,p,D,t.direction);return W([s,o],()=>{s.value>0&&o.value===0&&i(new Date(t.time),"selected",{reverse:!0})}),(c,v)=>(T(),M("div",{class:V({block:!c.alignment,flex:!!c.alignment,"justify-start":c.alignment==="left","justify-center":c.alignment==="center","justify-end":c.alignment==="right"})},[u(o)===0&&c.$slots.birthdayText?(T(),M("div",J,[E(c.$slots,"birthdayText")])):I("",!0),L("div",K,[u($)?(T(),M("div",Q,[L("span",X,[S(H,{time:u(s),animate:u(n),direction:c.direction},null,8,["time","animate","direction"])]),v[0]||(v[0]=F(" years "))])):I("",!0),u(k)?(T(),M("div",ee,[L("span",te,[S(H,{time:u(o),animate:u(e),direction:c.direction},null,8,["time","animate","direction"])]),v[1]||(v[1]=F(" days "))])):I("",!0),u(b)?(T(),M("div",ne,[L("span",ae,[S(H,{time:u(r),animate:u(l),direction:c.direction},null,8,["time","animate","direction"])]),v[2]||(v[2]=F(" hrs "))])):I("",!0),u(y)?(T(),M("div",se,[L("span",oe,[S(H,{time:u(p),animate:u(d),direction:c.direction},null,8,["time","animate","direction"])]),v[3]||(v[3]=F(" mins "))])):I("",!0),u(g)?(T(),M("div",le,[L("span",ie,[S(H,{time:u(D),animate:u(x),direction:c.direction},null,8,["time","animate","direction"])]),v[4]||(v[4]=F(" secs "))])):I("",!0)]),u(o)===0&&u(a).length?(T(),M("div",ue,[E(c.$slots,"onThisDay",{selected:u(a)})])):I("",!0)],2))}});export{me as _,q as u};
