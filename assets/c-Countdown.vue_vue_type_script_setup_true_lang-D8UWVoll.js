import{e as V,l as T,m as M,H as A,E,r as f,c as m,o as U,au as j,aC as B,aD as C,aE as N,aF as P,M as W,k as i,z as R,t as I,p as L,n as S,G as F}from"../bundle.js";const H=V({__name:"CountdownNumber",props:{time:{},animate:{type:Boolean},direction:{}},setup(y){return(n,s)=>(T(),M("span",{class:E({"animation ease-in animate-timer-up":n.animate&&(n.direction==="up"||n.direction==="current"),"animation ease-in animate-timer-down":n.animate&&n.direction==="down"})},A(n.time),3))}}),Z=(y,n)=>{const s=f(0),l=f(0),o=f(0),a=f(0),u=f(0),p=m(()=>s.value===0&&l.value===0&&o.value===0&&a.value===0&&u.value===0),w=m(()=>s.value>0),$=m(()=>s.value>0||l.value>0||p.value),k=m(()=>s.value>0||l.value>0||o.value>0||p.value),D=m(()=>s.value>0||l.value>0||o.value>0||a.value>0||p.value),b=m(()=>s.value>0||l.value>0||o.value>0||a.value>0||u.value>0||p.value),h=t=>(n==="up"?t=Math.abs(t):t=Math.max(0,t),Math.floor(t)),e=()=>{const t=new Date,r=n==="up"?new Date(j(y)):t,d=n==="up"?t:new Date(j(y));if(n==="up"&&r.getTime()>d.getTime()||n==="down"&&d.getTime()<=r.getTime()){s.value=0,l.value=0,o.value=0,a.value=0,u.value=0;return}else if(n==="current"){s.value=t.getFullYear(),l.value=t.getDate(),o.value=t.getHours(),a.value=t.getMinutes(),u.value=t.getSeconds(),setTimeout(e,1e3);return}let x=d.getFullYear()-r.getFullYear();d.getMonth()>r.getMonth()||d.getMonth()===r.getMonth()&&d.getDate()>=r.getDate()||x--;const v=new Date(r);v.setFullYear(r.getFullYear()+x),s.value=h(x);const Y=d.getTime()-v.getTime();l.value=h(Y/B);const _=Y%B;o.value=h(_/C);const g=_%C;a.value=h(g/N);const z=g%N;u.value=h(z/P),setTimeout(e,1e3)};return U(()=>{e()}),{years:s,days:l,hours:o,minutes:a,seconds:u,showYears:w,showDays:$,showHours:k,showMinutes:D,showSeconds:b}},G=(y,n,s,l,o,a,u)=>{const p=f(0),w=m(()=>n.value===0&&s.value===0&&l.value===0&&o.value===0&&a.value===0),$=m(()=>u==="down"?s.value===364:s.value===0),k=m(()=>u==="down"?l.value===23:l.value===0),D=m(()=>u==="down"?o.value===59:o.value===0),b=m(()=>u==="down"?a.value===59:a.value===0),h=m(()=>n.value>=0&&$.value&&k.value&&D.value&&b.value),e=m(()=>s.value>=0&&k.value&&D.value&&b.value),t=m(()=>l.value>=0&&D.value&&b.value),r=m(()=>o.value>=0&&b.value),d=m(()=>!w.value),x=()=>{p.value=y-new Date().getTime(),setTimeout(x,1e3)};return U(()=>{x()}),{animateYears:h,animateDays:e,animateHours:t,animateMinutes:r,animateSeconds:d}},O=()=>{const y="https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday",n=f([]),s=f([]),l=f([]),o=f([]),a=f([]),u=f(!1),p=f(!1),w=f(),$=m(()=>[...s.value.map(e=>({...e,type:"births"})),...l.value.map(e=>({...e,type:"deaths"})),...a.value.map(e=>({...e,type:"events"}))].sort((e,t)=>(t.year||0)-(e.year||0))),k=e=>{const t=e.getMonth()+1;return t<10?`0${t}`:t},D=e=>e.getDate()<10?`0${e.getDate()}`:e.getDate();return{selected:n,births:s,deaths:l,holidays:o,events:a,mixed:$,isLoading:u,hasError:p,fetchData:async(e,t,r={})=>{var d;if(((d=w.value)==null?void 0:d.getDate())!==e.getDate()){w.value=new Date,p.value=!1,u.value=!0;try{const x=k(e),c=D(e),Y=await(await fetch(`${y}/${t}/${x}/${c}`)).json(),_=g=>(r.reverse&&(g==null||g.reverse()),r.limit&&(g=g==null?void 0:g.slice(0,r.limit)),g||[]);n.value=_(Y.selected),s.value=_(Y.births),l.value=_(Y.deaths),o.value=_(Y.holidays),a.value=_(Y.events)}catch{p.value=!0}finally{u.value=!1}}},filterByYear:(e,t)=>e?e.filter(r=>r.year===t):[]}},q={key:0,class:"px-4 py-2 xl:p-4 flex justify-center items-center"},J={class:"grid grid-flow-col text-center"},K={key:0,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Q={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},X={key:1,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ee={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},te={key:2,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ne={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},se={key:3,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},ae={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},oe={key:4,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},le={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ie={key:1,class:"px-4 py-2 xl:p-4 flex flex-col justify-center gap-3"},re=V({__name:"Countdown",props:{time:{},direction:{},alignment:{}},setup(y){const n=y,{selected:s,fetchData:l}=O(),{years:o,days:a,hours:u,minutes:p,seconds:w,showYears:$,showDays:k,showHours:D,showMinutes:b,showSeconds:h}=Z(()=>n.time,n.direction),{animateYears:e,animateDays:t,animateHours:r,animateMinutes:d,animateSeconds:x}=G(n.time,o,a,u,p,w,n.direction);return W([o,a],()=>{o.value>0&&a.value===0&&l(new Date(n.time),"selected",{reverse:!0})}),(c,v)=>(T(),M("div",{class:E({block:!c.alignment,flex:!!c.alignment,"justify-start":c.alignment==="left","justify-center":c.alignment==="center","justify-end":c.alignment==="right"})},[i(a)===0&&c.$slots.birthdayText?(T(),M("div",q,[R(c.$slots,"birthdayText")])):I("",!0),L("div",J,[i($)?(T(),M("div",K,[L("span",Q,[S(H,{time:i(o),animate:i(e),direction:c.direction},null,8,["time","animate","direction"])]),v[0]||(v[0]=F(" years "))])):I("",!0),i(k)?(T(),M("div",X,[L("span",ee,[S(H,{time:i(a),animate:i(t),direction:c.direction},null,8,["time","animate","direction"])]),v[1]||(v[1]=F(" days "))])):I("",!0),i(D)?(T(),M("div",te,[L("span",ne,[S(H,{time:i(u),animate:i(r),direction:c.direction},null,8,["time","animate","direction"])]),v[2]||(v[2]=F(" hrs "))])):I("",!0),i(b)?(T(),M("div",se,[L("span",ae,[S(H,{time:i(p),animate:i(d),direction:c.direction},null,8,["time","animate","direction"])]),v[3]||(v[3]=F(" mins "))])):I("",!0),i(h)?(T(),M("div",oe,[L("span",le,[S(H,{time:i(w),animate:i(x),direction:c.direction},null,8,["time","animate","direction"])]),v[4]||(v[4]=F(" secs "))])):I("",!0)]),i(a)===0&&i(s).length?(T(),M("div",ie,[R(c.$slots,"onThisDay",{selected:i(s)})])):I("",!0)],2))}});export{re as _,O as u};
