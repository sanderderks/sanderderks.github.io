import{M as I,c1 as P,cI as k,bX as f,aC as B,aK as o,u as a,v as n,bi as h,F as p,aV as D,b9 as r,H as m,t as y,c2 as _,bV as N,q as S}from"../bundle.js";import{_ as U}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"w-full mt-5 text-sm md:text-base text-left"},G={key:1},x=I({__name:"Highscores",props:{gameId:{},unit:{}},setup(u){const v=u,g=P(),l=k(v.gameId)(),{publicUsers:b}=f(g),{allGameData:d}=f(l),{fetchGameData:i}=l,c=s=>{var t;return((t=b.value.find(e=>e.id===s))==null?void 0:t.displayName)??"Unknown"};return B(()=>{i(),setInterval(()=>{i()},1e3*60*5)}),(s,t)=>(o(),a("table",V,[n("tbody",null,[h(d)[s.gameId].gameData.highscores.length?(o(!0),a(p,{key:0},D(h(d)[s.gameId].gameData.highscores,(e,H)=>(o(),a("tr",null,[n("th",null,r(H+1),1),n("th",null,r(c(e.id)),1),n("td",null,[m(r(e.score)+" ",1),s.unit?(o(),a(p,{key:0},[m(r(s.unit),1),e.score!==1?(o(),a(p,{key:0},[m("s")],64)):y("",!0),t[0]||(t[0]=m(" "+r(" ")))],64)):y("",!0),e.bonus?(o(),a(p,{key:1},[m("("+r(e.bonus)+" bonus)",1)],64)):y("",!0)]),n("td",null,r(h(_)(e.date)),1)]))),256)):(o(),a("tr",G,t[1]||(t[1]=[n("th",null,"There are no highscores yet.",-1)])))])]))}}),w=U(x,[["__scopeId","data-v-98aab2a5"]]),F=u=>{const v=N(),g=k(u)(),{allGameData:l,highscorePosition:b,personalBest:d}=f(g),{firebaseUser:i}=f(v),c=S(()=>i.value?b.value:null),s=S(()=>{const e=l.value[u].previousHighscorePosition;return c.value&&e?e>c.value:!1}),t=S(()=>{const e=l.value[u].previousPersonalBest;return i.value&&e?e<d.value:!1});return{currentHighscorePosition:c,hasImprovedHighscorePosition:s,hasImprovedPersonalBest:t}};export{w as H,F as u};