import{_ as w}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BLfz40U2.js";import{r as H,c as u,au as R,e as q,A as z,aO as T,s as S,o as V,am as F,M as J,l as s,m as l,p as o,n as C,k as n,t as r,w as P,O as K,H as m,G as x,C as Q,E as W,q as G,D as X,h as Y}from"../bundle.js";import{_ as Z}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const ee=(i,c)=>{const d=H(0),v=u(()=>R(i)),g=u(()=>(d.value+1)*c),p=u(()=>g.value-c),k=u(()=>d.value>0),y=u(()=>v.value.length>g.value),_=u(()=>v.value.filter((a,b)=>b>=p.value&&b<g.value));return{page:d,perPage:c,visibleData:_,hasPrevious:k,hasNext:y,$reset:()=>{d.value=0}}},te={class:"mt-5"},se={class:"flex justify-center"},oe={class:"w-full overflow-x-auto"},ne={class:"w-full mt-5 text-sm md:text-base text-left text-nowrap"},le={key:0},ae={key:0},re={key:1},ue={key:1},ie={key:0},ce={key:1},de={key:2},ve={key:3},fe={key:2},he={key:3},me={key:4},ye={colspan:"100%"},ge={key:0,class:"mt-5 flex justify-center"},pe=q({__name:"Highscores",props:{gameId:{},unit:{},withBackButton:{type:Boolean},backButtonText:{}},emits:["close"],setup(i){const c=i,d=z(),v=T(),{publicUsers:g}=S(d),{allGameData:p,fetchLoading:k}=S(v),{fetchGameData:y,fetchHighscores:_,fetchScores:B}=v,a=H("highscores"),b=H(),j=u(()=>p.value[c.gameId].gameData[a.value]),{page:D,perPage:A,visibleData:f,hasPrevious:I,hasNext:N,$reset:E}=ee(()=>j.value,10),L=h=>{var e;return((e=g.value.find(t=>t.id===h))==null?void 0:e.displayName)??"Unknown"},U=h=>{E(),a.value=h},M=()=>{a.value==="highscores"?_():B()};return V(()=>{v.$init(c.gameId),y(),b.value=setInterval(()=>{y()},1e3*60*5)}),F(()=>{clearInterval(b.value)}),J(a,()=>{p.value[c.gameId].gameData[a.value].length||M()}),(h,e)=>(s(),l("div",te,[o("div",se,[C(w,{class:"w-1/2 md:w-1/4 rounded-r-none",type:"secondary",outlined:a.value==="scores",label:"Highscores",onClick:e[0]||(e[0]=t=>U("highscores"))},null,8,["outlined"]),C(w,{class:"w-1/2 md:w-1/4 rounded-l-none",type:"secondary",outlined:a.value==="highscores",label:"All Scores",onClick:e[1]||(e[1]=t=>U("scores"))},null,8,["outlined"])]),o("div",oe,[o("table",ne,[n(f).length?(s(),l("thead",le,[o("tr",null,[e[5]||(e[5]=o("th",null,"Rank",-1)),e[6]||(e[6]=o("th",null,"User",-1)),e[7]||(e[7]=o("th",null,"Score",-1)),n(f).length&&n(f).some(t=>t.difficulty)?(s(),l("th",ae,"Difficulty")):r("",!0),e[8]||(e[8]=o("th",null,"Date",-1)),n(f).length&&n(f).some(t=>t.bonus)?(s(),l("th",re,"Bonus")):r("",!0)])])):r("",!0),n(f).length?(s(),l("tbody",ue,[(s(!0),l(P,null,K(n(f),(t,O)=>(s(),l("tr",null,[o("th",null,m(O+1+n(D)*n(A)),1),o("th",null,m(L(t.userId??t.id)),1),o("td",null,[x(m(t.score)+" ",1),h.unit?(s(),l(P,{key:0},[x(m(h.unit),1),t.score!==1?(s(),l(P,{key:0},[x("s")],64)):r("",!0)],64)):r("",!0)]),t.difficulty?(s(),l("td",ie,m(t.difficulty),1)):n(f).some($=>$.difficulty)?(s(),l("td",ce)):r("",!0),o("td",null,m(n(Q)(t.date)),1),t.bonus?(s(),l("td",de,m(t.bonus),1)):n(f).some($=>$.bonus)?(s(),l("td",ve)):r("",!0)]))),256))])):n(k)?(s(),l("tbody",fe,e[9]||(e[9]=[o("tr",null,[o("th",null,"Loading highscores...")],-1)]))):(s(),l("tbody",he,[o("tr",null,[o("th",null,"There are no "+m(a.value==="highscores"?"highscores":"scores")+" yet.",1)])])),n(I)||n(N)?(s(),l("tfoot",me,[o("tr",null,[o("td",ye,[o("div",{class:W(["w-full p-2 flex",[n(I)?"justify-between":"justify-end"]])},[n(I)?(s(),G(w,{key:0,class:"w-fit",label:"Previous",type:"neutral",onClick:e[2]||(e[2]=t=>D.value-=1)})):r("",!0),n(N)?(s(),G(w,{key:1,class:"w-fit",label:"Next",type:"neutral",onClick:e[3]||(e[3]=t=>D.value+=1)})):r("",!0)],2)])])])):r("",!0)])]),h.withBackButton?(s(),l("div",ge,[C(w,{class:"w-full md:w-1/2",type:"neutral",onClick:e[4]||(e[4]=t=>h.$emit("close"))},{default:X(()=>[x(m(h.backButtonText??"Go Back"),1)]),_:1})])):r("",!0)]))}}),we=Z(pe,[["__scopeId","data-v-fe21102c"]]),Be=i=>{const c=Y(),d=T(),{allGameData:v,highscorePosition:g,personalBest:p}=S(d),{firebaseUser:k}=S(c),y=u(()=>k.value?g.value:null),_=u(()=>{if(!i)return!1;const a=v.value[i].previousHighscorePosition;return y.value&&a?a>y.value:!1}),B=u(()=>{if(!i)return!1;const a=v.value[i].previousPersonalBest;return k.value&&a?a<p.value:!1});return V(()=>{d.$init(i)}),{currentHighscorePosition:y,hasImprovedHighscorePosition:_,hasImprovedPersonalBest:B}};export{we as H,Be as u};
