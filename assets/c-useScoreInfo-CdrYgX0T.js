import{M as H,c1 as I,cI as _,bX as f,aC as P,aK as o,u as a,v as r,bi as b,F as d,aV as B,b9 as n,H as p,t as y,c2 as D,bV as N,q as S}from"../bundle.js";import{_ as U}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"w-full mt-5 text-sm md:text-base text-left"},G={key:1},x=H({__name:"Highscores",props:{gameId:{},unit:{}},setup(u){const v=u,g=I(),l=_(v.gameId)(),{publicUsers:h}=f(g),{allGameData:m}=f(l),{fetchGameData:c}=l,i=t=>{var s;return((s=h.value.find(e=>e.id===t))==null?void 0:s.displayName)??"Unknown"};return P(()=>{c(),setInterval(()=>{c()},1e3*60*5)}),(t,s)=>(o(),a("table",V,[r("tbody",null,[b(m)[t.gameId].gameData.highscores.length?(o(!0),a(d,{key:0},B(b(m)[t.gameId].gameData.highscores,(e,k)=>(o(),a("tr",null,[r("th",null,n(k+1),1),r("th",null,n(i(e.id)),1),r("td",null,[p(n(e.score)+" ",1),t.unit?(o(),a(d,{key:0},[p(n(t.unit),1),e.score!==1?(o(),a(d,{key:0},[p("s")],64)):y("",!0)],64)):y("",!0),e.bonus?(o(),a(d,{key:1},[p("("+n(e.bonus)+" bonus)",1)],64)):y("",!0)]),r("td",null,n(b(D)(e.date)),1)]))),256)):(o(),a("tr",G,s[0]||(s[0]=[r("th",null,"There are no highscores yet.",-1)])))])]))}}),w=U(x,[["__scopeId","data-v-0ce621c6"]]),F=u=>{const v=N(),g=_(u)(),{allGameData:l,highscorePosition:h,personalBest:m}=f(g),{firebaseUser:c}=f(v),i=S(()=>c.value?h.value:null),t=S(()=>{const e=l.value[u].previousHighscorePosition;return i.value&&e?e>i.value:!1}),s=S(()=>{const e=l.value[u].previousPersonalBest;return c.value&&e?e<m.value:!1});return{currentHighscorePosition:i,hasImprovedHighscorePosition:t,hasImprovedPersonalBest:s}};export{w as H,F as u};
