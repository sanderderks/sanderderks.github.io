import{_ as G}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{e as N,A as V,aG as P,s as k,r as H,c as y,o as A,as as C,M as L,l as n,m as a,p as t,t as h,w as d,O as T,H as l,G as f,k as D,C as $,n as M,h as j}from"../bundle.js";import{_ as E}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"w-full overflow-x-auto"},O={class:"w-full mt-5 text-sm md:text-base text-left text-nowrap"},R={key:0},q={key:0},z={key:1},J={key:2},K={class:"mt-5 flex justify-center"},Q=N({__name:"Highscores",props:{gameId:{},unit:{}},setup(u){const i=u,S=V(),c=P(i.gameId)(),{publicUsers:_}=k(S),{allGameData:v,fetchLoading:m}=k(c),{fetchGameData:r,fetchHighscores:I,fetchScores:b}=c,s=H("highscores"),w=H(),g=y(()=>v.value[i.gameId].gameData[s.value]),x=p=>{var e;return((e=_.value.find(o=>o.id===p))==null?void 0:e.displayName)??"Unknown"},B=()=>{s.value==="highscores"?I():b()};return A(()=>{r(),w.value=setInterval(()=>{r()},1e3*60*5)}),C(()=>{clearInterval(w.value)}),L(s,()=>{v.value[i.gameId].gameData[s.value].length||B()}),(p,e)=>(n(),a(d,null,[t("div",F,[t("table",O,[t("thead",null,[t("tr",null,[e[1]||(e[1]=t("th",null,"Pos.",-1)),e[2]||(e[2]=t("th",null,"User",-1)),e[3]||(e[3]=t("th",null,"Score",-1)),g.value.length&&g.value[0].difficulty?(n(),a("th",R,"Difficulty")):h("",!0),e[4]||(e[4]=t("th",null,"Date",-1))])]),t("tbody",null,[g.value.length?(n(!0),a(d,{key:0},T(g.value,(o,U)=>(n(),a("tr",null,[t("th",null,l(U+1),1),t("th",null,l(x(o.userId??o.id)),1),t("td",null,[f(l(o.score)+" ",1),p.unit?(n(),a(d,{key:0},[f(l(p.unit),1),o.score!==1?(n(),a(d,{key:0},[f("s")],64)):h("",!0),e[5]||(e[5]=f(" "+l(" ")))],64)):h("",!0),o.bonus?(n(),a(d,{key:1},[f("("+l(o.bonus)+" bonus)",1)],64)):h("",!0)]),o.difficulty?(n(),a("td",q,l(o.difficulty),1)):h("",!0),t("td",null,l(D($)(o.date)),1)]))),256)):D(m)?(n(),a("tr",z,e[6]||(e[6]=[t("th",null,"Loading highscores...",-1)]))):(n(),a("tr",J,[t("th",null,"There are no "+l(s.value==="highscores"?"highscores":"scores")+" yet.",1)]))])])]),t("div",K,[M(G,{class:"w-full md:w-1/2",label:`View ${s.value==="highscores"?"All Scores":"Highscores"}`,type:"secondary",onClick:e[0]||(e[0]=o=>s.value==="highscores"?s.value="scores":s.value="highscores")},null,8,["label"])])],64))}}),Z=E(Q,[["__scopeId","data-v-072f06e7"]]),ee=u=>{const i=j(),S=P(u)(),{allGameData:c,highscorePosition:_,personalBest:v}=k(S),{firebaseUser:m}=k(i),r=y(()=>m.value?_.value:null),I=y(()=>{const s=c.value[u].previousHighscorePosition;return r.value&&s?s>r.value:!1}),b=y(()=>{const s=c.value[u].previousPersonalBest;return m.value&&s?s<v.value:!1});return{currentHighscorePosition:r,hasImprovedHighscorePosition:I,hasImprovedPersonalBest:b}};export{Z as H,ee as u};