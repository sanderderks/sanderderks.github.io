import{M as B,bQ as m,bS as D,bR as k,cG as H,aC as I,aK as o,u as r,v as l,bi as h,F as v,aV as S,b9 as i,H as f,t as y,bY as G,q as _}from"../bundle.js";import{_ as N}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"w-full mt-5 text-sm md:text-base text-left"},V={key:1},x=B({__name:"Highscores",props:{gameId:{},unit:{}},setup(n){const c=n,{publicUsers:b}=m(D()),{firebaseUser:d}=m(k()),a=H(),{allGameData:u}=m(a),{fetchGameData:p}=a,g=e=>{var s;return((s=b.value.find(t=>t.id===e))==null?void 0:s.displayName)??"Unknown"};return I(()=>{var e;p(c.gameId,(e=d.value)==null?void 0:e.uid),setInterval(()=>{var s;p(c.gameId,(s=d.value)==null?void 0:s.uid)},1e3*60*5)}),(e,s)=>(o(),r("table",U,[l("tbody",null,[h(u)[e.gameId].gameData.highscores.length?(o(!0),r(v,{key:0},S(h(u)[e.gameId].gameData.highscores,(t,P)=>(o(),r("tr",null,[l("th",null,i(P+1),1),l("th",null,i(g(t.id)),1),l("td",null,[f(i(t.score)+" ",1),e.unit?(o(),r(v,{key:0},[f(i(e.unit),1),t.score!==1?(o(),r(v,{key:0},[f("s")],64)):y("",!0)],64)):y("",!0),t.bonus?(o(),r(v,{key:1},[f("("+i(t.bonus)+" bonus)",1)],64)):y("",!0)]),l("td",null,i(h(G)(t.date)),1)]))),256)):(o(),r("tr",V,s[0]||(s[0]=[l("th",null,"There are no highscores yet.",-1)])))])]))}}),w=N(x,[["__scopeId","data-v-3bae853b"]]),F=n=>{const{allGameData:c,highscorePosition:b,personalBest:d}=m(H()),{firebaseUser:a}=m(k()),u=_(()=>a.value?b.value(n,a.value.uid):null),p=_(()=>{const e=c.value[n].previousHighscorePosition;return u.value&&e?e>u.value:!1}),g=_(()=>{const e=c.value[n].previousPersonalBest;return a.value&&e?e<d.value(n,a.value.uid):!1});return{currentHighscorePosition:u,hasImprovedHighscorePosition:p,hasImprovedPersonalBest:g}};export{w as H,F as u};
