import{u as Z,b as q,a as K,_ as D}from"./c-Bubble.vue_vue_type_script_setup_true_lang-B-A_lorO.js";import{l as s,m as i,p as l,e as z,s as G,c as C,q as y,D as m,ay as U,G as E,H as M,E as j,ae as se,n as r,k as e,t as f,aH as F,h as le,r as J,f as ae,ab as re,R as ne,ah as oe}from"../bundle.js";import{a as Y,C as p,b as u,D as n,_ as de}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-B-eNJKMG.js";import{u as ce,H as ie}from"./c-useScoreInfo-DbJQ7EJj.js";import{_ as V}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import{S as W}from"./c-Spades-CRNFPKDk.js";import{D as pe}from"./c-vuedraggable.umd-B3ghgmPk.js";import{_ as ue}from"./c-SelectField.vue_vue_type_script_setup_true_lang-Bu9S1e-e.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-BocIXFtA.js";import"./c-validation-DokkLKHB.js";const ye={},fe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function me(A,a){return s(),i("svg",fe,a[0]||(a[0]=[l("path",{d:"M50 35 Q40 25 50 15 Q60 25 50 35 Z M35 50 Q25 40 35 30 Q45 40 35 50 Z M65 50 Q75 40 65 30 Q55 40 65 50 Z M50 40 Q65 55 50 65 Q35 55 50 40 Z M45 65 Q45 80 55 80 Q55 65 45 65 Z",fill:"black"},null,-1)]))}const X=V(ye,[["render",me]]),ke={},xe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function Se(A,a){return s(),i("svg",xe,a[0]||(a[0]=[l("polygon",{points:"50,10 80,50 50,90 20,50",fill:"red"},null,-1)]))}const ee=V(ke,[["render",Se]]),ge={},ve={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function we(A,a){return s(),i("svg",ve,a[0]||(a[0]=[l("path",{d:"M50 70 Q20 50 20 30 Q20 10 40 10 Q50 10 50 20 Q50 10 60 10 Q80 10 80 30 Q80 50 50 70 Z",fill:"red"},null,-1)]))}const te=V(ge,[["render",we]]),Ee={key:0,class:"w-full h-full flex justify-center"},_e={key:1,class:"relative w-full flex"},be={class:"relative flex text-xs md:text-md lg:text-lg font-bold"},Te=z({__name:"Card",props:{card:{},index:{}},emits:["select"],setup(A,{emit:a}){const d=A,R=a,h=Z(q).greaterOrEqual("lg"),o=Y(),{gameStatus:S,cards:P}=G(o),{isPlayDeck:H}=o,L=C(()=>{if(d.card.hidden)return"";switch(d.card.value){case 13:return"K";case 12:return"Q";case 11:return"J";case 1:return"A";default:return`${d.card.value}`}}),B=C(()=>d.card.hidden?"text-primary":d.card.color==="black"?"text-black":"text-red-500"),$=C(()=>d.index===P.value[d.card.deck].length-1),N=C(()=>S.value===u.HAS_STARTED&&($.value||!d.card.hidden)),g=C(()=>H(d.card.deck)||h.value&&d.card.deck===n.STOCK_CLOSED),Q=C(()=>H(d.card.deck)?20:10),I={[p.HEARTS]:te,[p.SPADES]:W,[p.DIAMONDS]:ee,[p.CLUBS]:X};return(k,x)=>(s(),y(K,{class:j(["z-10 absolute h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px] !p-1 !pt-0 bg-opacity-100 !rounded-primary flex justify-center border border-white",[B.value,k.card.hidden?"bg-violet-950 border-1 !border-yellow-700":"bg-neutral-300",k.card.selected?"border-[3px] !border-red-600":"!border-black",{"draggable-card":N.value&&!k.card.hidden}]]),style:se({top:g.value?`${Q.value*k.index}px`:0}),"title-props":{class:"text-xl"},clickable:N.value,onClick:x[0]||(x[0]=v=>R("select"))},{fullControl:m(()=>[k.card.hidden?(s(),i("div",Ee,x[1]||(x[1]=[l("div",{class:"flex flex-col justify-center"},[l("p",{class:"mb-2 text-5xl text-yellow-300"},"?")],-1)]))):(s(),i("div",_e,[l("div",be,[(s(),y(U(I[k.card.type]),{class:"mt-[5px] sm:mt-[1px] h-[10px] w-[10px] sm:h-[20px] sm:w-[20px] md:h-[25px] md:w-[25px]"})),E(" "+M(L.value),1)]),(s(),y(U(I[k.card.type]),{class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] sm:w-[35px] md:w-[50px]"}))]))]),_:1},8,["class","style","clickable"]))}}),Ce={class:"absolute h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px]"},De=z({__name:"CardDeck",props:{deckType:{},cardType:{}},setup(A){const a=A,R=Z(q).greaterOrEqual("md"),O=Y(),{cards:h}=G(O),{shuffle:o,selectCard:S,selectEmptyDeck:P,selectFinalDeck:H,deselectAllCards:L,isPlayDeck:B,isFinalDeck:$}=O,N={[p.HEARTS]:te,[p.SPADES]:W,[p.DIAMONDS]:ee,[p.CLUBS]:X},g=C(()=>h.value[a.deckType]),Q=C(()=>!g.value.length&&!a.cardType),I=C(()=>Q.value&&a.deckType!==n.STOCK_OPEN),k=()=>{I.value&&P(a.deckType)},x=()=>{L()},v=_=>{_.added&&(S(_.added.element),g.value.length?S(g.value[g.value.length-1]):B(a.deckType)?P(a.deckType):$(a.deckType)&&H(a.deckType))};return(_,b)=>(s(),i("div",{class:j(["relative h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px]",{"border border-neutral-500":g.value.length===0,"cursor-pointer":I.value}]),onClick:k},[r(e(pe),{list:[...g.value],itemKey:T=>`${T.type}.s${T.value}`,group:"patience",draggable:".draggable-card",delay:e(R)?0:100,onStart:x,onChange:v,onEnd:x},{item:m(({element:T,index:t})=>[r(Te,{card:T,index:t,onSelect:w=>e(S)(T)},null,8,["card","index","onSelect"])]),header:m(()=>[l("div",Ce,[_.cardType?(s(),y(U(N[_.cardType]),{key:0,class:"absolute left-1/2 transform -translate-x-1/2 w-[50px] cursor-pointer",onClick:b[0]||(b[0]=T=>e(H)(_.deckType))})):_.deckType===e(n).STOCK_CLOSED?(s(),i("div",{key:1,class:"w-full h-full flex justify-center",onClick:b[1]||(b[1]=(...T)=>e(o)&&e(o)(...T))},b[2]||(b[2]=[l("div",{class:"flex flex-col justify-center"},[l("p",{class:"text-neutral-300 text-xs md:text-md lg:text-lg mb-2"},"Shuffle")],-1)]))):f("",!0)])]),_:1},8,["list","itemKey","delay"])],2))}}),c=V(De,[["__scopeId","data-v-1f64f67d"]]),Ae={class:"flex justify-center"},he={key:0,class:"w-full flex flex-wrap gap-3 justify-center"},He={key:1,class:"w-full flex flex-col gap-3"},Ie={class:"my-3"},Oe={key:1},Pe={key:2,class:"w-full grid grid-cols-4 md:grid-cols-6 justify-items-center"},$e={key:1,class:"mt-5 text-center text-xl md:text-3xl font-bold"},Ne={class:"text-purple-500"},Re={key:0,class:"text-blue-500 font-bold"},Le={key:1,class:"text-blue-500 font-bold"},Be={key:2,class:"text-blue-500 font-bold"},Qe={class:"mt-5 flex flex-wrap gap-3 justify-center"},Me={key:0,class:"flex flex-wrap gap-3 mt-3 justify-center"},Je=z({__name:"Patience",setup(A){const a=Z(q);a.greaterOrEqual("md");const d=a.greaterOrEqual("lg"),R=ae(),O=Y(),{difficulty:h,gameStatus:o,score:S,turns:P,formattedTime:H,personalBest:L}=G(O),{currentHighscorePosition:B,hasImprovedHighscorePosition:$,hasImprovedPersonalBest:N}=ce(F.PATIENCE),{start:g,$reset:Q,updatePatienceHighscore:I}=O,{firebaseUser:k}=G(le()),x=J(!1),v=J(!1),_=()=>{v.value=!1,g()},b=()=>{v.value=!1,Q()};return(T,t)=>(s(),y(K,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Patience",description:"Play solo."},{right:m(()=>[r(D,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:t[0]||(t[0]=w=>x.value=!0)})]),default:m(()=>[l("div",Ae,[e(o)===e(u).HAS_NOT_STARTED?(s(),i("div",he,[t[9]||(t[9]=l("div",{class:"w-full mb-5 text-pink-300"},[l("p",{class:"mb-3 text-xl text-center"},"Welcome to Patience!"),l("div",{class:"ms-3"},[l("p",{class:"text-red-400"},"1. Click a card to select it."),l("p",{class:"text-orange-400"},"2. Click another to move the selected card."),l("p",{class:"text-yellow-400"},"3. You can also drag cards, but the animations are not yet perfect."),l("p",{class:"text-green-400 font-bold"},"Enjoy!")])],-1)),r(ue,{class:"w-full md:w-1/2",name:"difficulty",label:"Difficulty",modelValue:e(h),"onUpdate:modelValue":t[1]||(t[1]=w=>re(h)?h.value=w:null),options:[{label:"Easy",value:"easy"},{label:"Hard",value:"hard"}]},null,8,["modelValue"]),r(D,{class:"w-full md:w-1/2",onClick:_},{default:m(()=>t[8]||(t[8]=[E(" Start ")])),_:1})])):f("",!0),e(o)===e(u).HAS_STARTED?(s(),i("div",He,[l("div",Ie,[l("p",null,"Time: "+M(e(H)),1),l("p",null,"Turns: "+M(e(P)),1),l("p",null,"Score: "+M(e(S)),1)]),l("div",{class:j(["w-full grid gap-1 justify-items-center",e(d)?"grid-cols-8":"grid-cols-7"])},[e(d)?f("",!0):(s(),y(c,{key:0,"deck-type":e(n).STOCK_CLOSED},null,8,["deck-type"])),r(c,{"deck-type":e(n).STOCK_OPEN},null,8,["deck-type"]),t[10]||(t[10]=l("div",null,null,-1)),e(d)?(s(),i("div",Oe)):f("",!0),r(c,{"deck-type":e(n).HEARTS,"card-type":e(p).HEARTS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).SPADES,"card-type":e(p).SPADES},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).DIAMONDS,"card-type":e(p).DIAMONDS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).CLUBS,"card-type":e(p).CLUBS},null,8,["deck-type","card-type"])],2),e(o)===e(u).HAS_STARTED?(s(),i("div",{key:0,class:j(["w-full grid gap-1 justify-items-center",e(d)?"grid-cols-8":"grid-cols-7"])},[e(d)?(s(),y(c,{key:0,"deck-type":e(n).STOCK_CLOSED},null,8,["deck-type"])):f("",!0),r(c,{"deck-type":e(n).PILE1},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE2},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE3},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE4},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE5},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE6},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE7},null,8,["deck-type"])],2)):f("",!0)])):e(o)===e(u).HAS_FINISHED?(s(),i("div",Pe,[r(c,{class:"md:col-start-2","deck-type":e(n).HEARTS,"card-type":e(p).HEARTS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).SPADES,"card-type":e(p).SPADES},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).DIAMONDS,"card-type":e(p).DIAMONDS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).CLUBS,"card-type":e(p).CLUBS},null,8,["deck-type","card-type"])])):f("",!0)]),v.value?(s(),y(ie,{key:0,"game-id":e(F).PATIENCE,unit:"point"},null,8,["game-id"])):e(o)===e(u).HAS_FINISHED?(s(),i("div",$e,[l("p",Ne,"You won with "+M(e(S))+" points!",1),e($)&&e(B)===1?(s(),i("p",Re," HIGHSCORE! ")):e($)?(s(),i("p",Le," LEADERBOARD IMPROVEMENT! ")):e(N)?(s(),i("p",Be," PERSONAL BEST! ")):f("",!0)])):f("",!0),l("div",{class:j(["flex flex-col",{"h-[50vh] justify-end":e(o)===e(u).HAS_STARTED}])},[l("div",Qe,[e(o)!==e(u).HAS_NOT_STARTED&&e(o)!==e(u).HAS_FINISHED?(s(),y(D,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:b},{default:m(()=>t[11]||(t[11]=[E(" Restart ")])),_:1})):e(o)===e(u).HAS_FINISHED?(s(),y(D,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:b},{default:m(()=>t[12]||(t[12]=[E(" Play Again ")])),_:1})):f("",!0),!v.value&&(e(o)===e(u).HAS_NOT_STARTED||e(o)===e(u).HAS_FINISHED)?(s(),y(D,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:t[2]||(t[2]=w=>v.value=!0)},{default:m(()=>t[13]||(t[13]=[E(" View Highscores ")])),_:1})):e(o)===e(u).HAS_NOT_STARTED?(s(),y(D,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:t[3]||(t[3]=w=>v.value=!1)},{default:m(()=>t[14]||(t[14]=[E(" Go Back ")])),_:1})):e(o)===e(u).HAS_FINISHED?(s(),y(D,{key:4,class:"w-full md:w-1/2",type:"neutral",onClick:t[4]||(t[4]=w=>v.value=!1)},{default:m(()=>t[15]||(t[15]=[E(" View Your Score ")])),_:1})):f("",!0)]),e(o)===e(u).HAS_FINISHED?(s(),i("div",Me,[e(k)?e(S)&&e(L)<e(S)?(s(),y(D,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:t[6]||(t[6]=w=>e(I)())},{default:m(()=>t[18]||(t[18]=[E(" Add To Leaderboard ")])),_:1})):f("",!0):(s(),y(K,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:m(()=>[t[16]||(t[16]=E(" Please ")),l("a",{class:"cursor-pointer",onClick:t[5]||(t[5]=w=>e(R).push({name:e(ne).LOGIN,params:{redirect:JSON.stringify({name:e(oe).GAMES_PATIENCE})}}))}," Login "),t[17]||(t[17]=E(" to add your score to the leaderboard. "))]),_:1}))])):f("",!0)],2),r(de,{"game-id":e(F).PATIENCE,"is-open":x.value,"onUpdate:isOpen":t[7]||(t[7]=w=>x.value=w)},null,8,["game-id","is-open"])]),_:1}))}});export{Je as default};
