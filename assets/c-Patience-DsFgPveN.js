import{u as q,b as z,a as U,_ as D}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BLfz40U2.js";import{l as s,m as i,a6 as se,p as l,e as Y,s as M,c as C,q as y,D as m,as as Q,G as E,H as G,E as V,ae as le,n as r,k as e,t as f,aP as K,h as ae,r as W,f as re,ad as ne,R as oe,a4 as de}from"../bundle.js";import{b as J,C as p,c as u,D as n,_ as ce}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-BrKMgYCP.js";import{u as ie,H as pe}from"./c-useScoreInfo-BX-f5KaG.js";import{_ as F}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import{S as Z}from"./c-Spades-CRNFPKDk.js";import{D as ue}from"./c-vuedraggable.umd-6GGnRdAM.js";import{_ as ye}from"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-R6e5xvIM.js";import"./c-validation-DokkLKHB.js";const fe={},me={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function ke(A,a){return s(),i("svg",me,a[0]||(a[0]=[se('<circle cx="50" cy="30" r="15" fill="black"></circle><circle cx="35" cy="50" r="15" fill="black"></circle><circle cx="65" cy="50" r="15" fill="black"></circle><rect x="45" y="50" width="10" height="30" fill="black"></rect><rect x="40" y="80" width="20" height="10" fill="black"></rect>',5)]))}const X=F(fe,[["render",ke]]),xe={},Se={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function ge(A,a){return s(),i("svg",Se,a[0]||(a[0]=[l("polygon",{points:"50,10 80,50 50,90 20,50",fill:"red"},null,-1)]))}const ee=F(xe,[["render",ge]]),ve={},we={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100"};function Ee(A,a){return s(),i("svg",we,a[0]||(a[0]=[l("path",{d:"M50 70 Q20 50 20 30 Q20 10 40 10 Q50 10 50 20 Q50 10 60 10 Q80 10 80 30 Q80 50 50 70 Z",fill:"red"},null,-1)]))}const te=F(ve,[["render",Ee]]),be={key:0,class:"w-full h-full flex justify-center"},_e={key:1,class:"relative w-full flex"},Te={class:"relative flex text-xs md:text-md lg:text-lg font-bold"},Ce=Y({__name:"Card",props:{card:{},index:{}},emits:["select"],setup(A,{emit:a}){const d=A,R=a,h=q(z).greaterOrEqual("lg"),o=J(),{gameStatus:S,cards:O}=M(o),{isPlayDeck:H}=o,L=C(()=>{if(d.card.hidden)return"";switch(d.card.value){case 13:return"K";case 12:return"Q";case 11:return"J";case 1:return"A";default:return`${d.card.value}`}}),B=C(()=>d.card.hidden?"text-primary":d.card.color==="black"?"text-black":"text-red-500"),N=C(()=>d.index===O.value[d.card.deck].length-1),$=C(()=>S.value===u.HAS_STARTED&&(N.value||!d.card.hidden)),g=C(()=>H(d.card.deck)||h.value&&d.card.deck===n.STOCK_CLOSED),j=C(()=>H(d.card.deck)?20:10),I={[p.HEARTS]:te,[p.SPADES]:Z,[p.DIAMONDS]:ee,[p.CLUBS]:X};return(k,x)=>(s(),y(U,{class:V(["z-10 absolute h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px] !p-1 !pt-0 bg-opacity-100 !rounded-primary flex justify-center border border-white",[B.value,k.card.hidden?"bg-violet-950 border-1 !border-yellow-700":"bg-neutral-300",k.card.selected?"border-[3px] !border-red-600":"!border-black",{"draggable-card":$.value&&!k.card.hidden}]]),style:le({top:g.value?`${j.value*k.index}px`:0}),"title-props":{class:"text-xl"},clickable:$.value,onClick:x[0]||(x[0]=v=>R("select"))},{fullControl:m(()=>[k.card.hidden?(s(),i("div",be,x[1]||(x[1]=[l("div",{class:"flex flex-col justify-center"},[l("p",{class:"mb-2 text-5xl text-yellow-300"},"?")],-1)]))):(s(),i("div",_e,[l("div",Te,[(s(),y(Q(I[k.card.type]),{class:"mt-[5px] sm:mt-[1px] h-[10px] w-[10px] sm:h-[20px] sm:w-[20px] md:h-[25px] md:w-[25px]"})),E(" "+G(L.value),1)]),(s(),y(Q(I[k.card.type]),{class:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] sm:w-[35px] md:w-[50px]"}))]))]),_:1},8,["class","style","clickable"]))}}),De={class:"absolute h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px]"},Ae=Y({__name:"CardDeck",props:{deckType:{},cardType:{}},setup(A){const a=A,R=q(z).greaterOrEqual("md"),P=J(),{cards:h}=M(P),{shuffle:o,selectCard:S,selectEmptyDeck:O,selectFinalDeck:H,deselectAllCards:L,isPlayDeck:B,isFinalDeck:N}=P,$={[p.HEARTS]:te,[p.SPADES]:Z,[p.DIAMONDS]:ee,[p.CLUBS]:X},g=C(()=>h.value[a.deckType]),j=C(()=>!g.value.length&&!a.cardType),I=C(()=>j.value&&a.deckType!==n.STOCK_OPEN),k=()=>{I.value&&O(a.deckType)},x=()=>{L()},v=b=>{b.added&&(S(b.added.element),g.value.length?S(g.value[g.value.length-1]):B(a.deckType)?O(a.deckType):N(a.deckType)&&H(a.deckType))};return(b,_)=>(s(),i("div",{class:V(["relative h-[90px] w-[40px] xs:h-[100px] xs:w-[50px] sm:h-[110px] sm:w-[60px] lg:h-[120px] lg:w-[80px]",{"border border-neutral-500":g.value.length===0,"cursor-pointer":I.value}]),onClick:k},[r(e(ue),{list:[...g.value],itemKey:T=>`${T.type}.s${T.value}`,group:"patience",draggable:".draggable-card",delay:e(R)?0:100,onStart:x,onChange:v,onEnd:x},{item:m(({element:T,index:t})=>[r(Ce,{card:T,index:t,onSelect:w=>e(S)(T)},null,8,["card","index","onSelect"])]),header:m(()=>[l("div",De,[b.cardType?(s(),y(Q($[b.cardType]),{key:0,class:"absolute left-1/2 transform -translate-x-1/2 w-[50px] cursor-pointer",onClick:_[0]||(_[0]=T=>e(H)(b.deckType))})):b.deckType===e(n).STOCK_CLOSED?(s(),i("div",{key:1,class:"w-full h-full flex justify-center",onClick:_[1]||(_[1]=(...T)=>e(o)&&e(o)(...T))},_[2]||(_[2]=[l("div",{class:"flex flex-col justify-center"},[l("p",{class:"text-neutral-300 text-xs md:text-md lg:text-lg mb-2"},"Shuffle")],-1)]))):f("",!0)])]),_:1},8,["list","itemKey","delay"])],2))}}),c=F(Ae,[["__scopeId","data-v-1f64f67d"]]),he={class:"flex justify-center"},He={key:0,class:"w-full flex flex-wrap gap-3 justify-center"},Ie={key:1,class:"w-full flex flex-col gap-3"},Pe={class:"my-3"},Oe={key:1},Ne={key:2,class:"w-full grid grid-cols-4 md:grid-cols-6 justify-items-center"},$e={key:1,class:"mt-5 text-center text-xl md:text-3xl font-bold"},Re={class:"text-purple-500"},Le={key:0,class:"text-blue-500 font-bold"},Be={key:1,class:"text-blue-500 font-bold"},je={key:2,class:"text-blue-500 font-bold"},Ge={class:"mt-5 flex flex-wrap gap-3 justify-center"},Ve={key:0,class:"flex flex-wrap gap-3 mt-3 justify-center"},Ze=Y({__name:"Patience",setup(A){const a=q(z);a.greaterOrEqual("md");const d=a.greaterOrEqual("lg"),R=re(),P=J(),{difficulty:h,gameStatus:o,score:S,turns:O,formattedTime:H,personalBest:L}=M(P),{currentHighscorePosition:B,hasImprovedHighscorePosition:N,hasImprovedPersonalBest:$}=ie(K.PATIENCE),{start:g,$reset:j,updatePatienceHighscore:I}=P,{firebaseUser:k}=M(ae()),x=W(!1),v=W(!1),b=()=>{v.value=!1,g()},_=()=>{v.value=!1,j()};return(T,t)=>(s(),y(U,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Patience",description:"Play solo."},{right:m(()=>[r(D,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:t[0]||(t[0]=w=>x.value=!0)})]),default:m(()=>[l("div",he,[e(o)===e(u).HAS_NOT_STARTED?(s(),i("div",He,[t[9]||(t[9]=l("div",{class:"w-full mb-5 text-pink-300"},[l("p",{class:"mb-3 text-xl text-center"},"Welcome to Patience!"),l("div",{class:"ms-3"},[l("p",{class:"text-red-400"},"1. Click a card to select it."),l("p",{class:"text-orange-400"},"2. Click another to move the selected card."),l("p",{class:"text-yellow-400"},"3. You can also drag cards, but the animations are not yet perfect."),l("p",{class:"text-green-400 font-bold"},"Enjoy!")])],-1)),r(ye,{class:"w-full md:w-1/2",name:"difficulty",label:"Difficulty",modelValue:e(h),"onUpdate:modelValue":t[1]||(t[1]=w=>ne(h)?h.value=w:null),options:[{label:"Easy",value:"easy"},{label:"Hard",value:"hard"}]},null,8,["modelValue"]),r(D,{class:"w-full md:w-1/2",onClick:b},{default:m(()=>t[8]||(t[8]=[E(" Start ")])),_:1})])):f("",!0),e(o)===e(u).HAS_STARTED?(s(),i("div",Ie,[l("div",Pe,[l("p",null,"Time: "+G(e(H)),1),l("p",null,"Turns: "+G(e(O)),1),l("p",null,"Score: "+G(e(S)),1)]),l("div",{class:V(["w-full grid gap-1 justify-items-center",e(d)?"grid-cols-8":"grid-cols-7"])},[e(d)?f("",!0):(s(),y(c,{key:0,"deck-type":e(n).STOCK_CLOSED},null,8,["deck-type"])),r(c,{"deck-type":e(n).STOCK_OPEN},null,8,["deck-type"]),t[10]||(t[10]=l("div",null,null,-1)),e(d)?(s(),i("div",Oe)):f("",!0),r(c,{"deck-type":e(n).HEARTS,"card-type":e(p).HEARTS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).SPADES,"card-type":e(p).SPADES},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).DIAMONDS,"card-type":e(p).DIAMONDS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).CLUBS,"card-type":e(p).CLUBS},null,8,["deck-type","card-type"])],2),e(o)===e(u).HAS_STARTED?(s(),i("div",{key:0,class:V(["w-full grid gap-1 justify-items-center",e(d)?"grid-cols-8":"grid-cols-7"])},[e(d)?(s(),y(c,{key:0,"deck-type":e(n).STOCK_CLOSED},null,8,["deck-type"])):f("",!0),r(c,{"deck-type":e(n).PILE1},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE2},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE3},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE4},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE5},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE6},null,8,["deck-type"]),r(c,{"deck-type":e(n).PILE7},null,8,["deck-type"])],2)):f("",!0)])):e(o)===e(u).HAS_FINISHED?(s(),i("div",Ne,[r(c,{class:"md:col-start-2","deck-type":e(n).HEARTS,"card-type":e(p).HEARTS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).SPADES,"card-type":e(p).SPADES},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).DIAMONDS,"card-type":e(p).DIAMONDS},null,8,["deck-type","card-type"]),r(c,{"deck-type":e(n).CLUBS,"card-type":e(p).CLUBS},null,8,["deck-type","card-type"])])):f("",!0)]),v.value?(s(),y(pe,{key:0,"game-id":e(K).PATIENCE,unit:"point"},null,8,["game-id"])):e(o)===e(u).HAS_FINISHED?(s(),i("div",$e,[l("p",Re,"You won with "+G(e(S))+" points!",1),e(N)&&e(B)===1?(s(),i("p",Le," HIGHSCORE! ")):e(N)?(s(),i("p",Be," LEADERBOARD IMPROVEMENT! ")):e($)?(s(),i("p",je," PERSONAL BEST! ")):f("",!0)])):f("",!0),l("div",{class:V(["flex flex-col",{"h-[50vh] justify-end":e(o)===e(u).HAS_STARTED}])},[l("div",Ge,[e(o)!==e(u).HAS_NOT_STARTED&&e(o)!==e(u).HAS_FINISHED?(s(),y(D,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:_},{default:m(()=>t[11]||(t[11]=[E(" Restart ")])),_:1})):e(o)===e(u).HAS_FINISHED?(s(),y(D,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:_},{default:m(()=>t[12]||(t[12]=[E(" Play Again ")])),_:1})):f("",!0),!v.value&&(e(o)===e(u).HAS_NOT_STARTED||e(o)===e(u).HAS_FINISHED)?(s(),y(D,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:t[2]||(t[2]=w=>v.value=!0)},{default:m(()=>t[13]||(t[13]=[E(" View Highscores ")])),_:1})):e(o)===e(u).HAS_NOT_STARTED?(s(),y(D,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:t[3]||(t[3]=w=>v.value=!1)},{default:m(()=>t[14]||(t[14]=[E(" Go Back ")])),_:1})):e(o)===e(u).HAS_FINISHED?(s(),y(D,{key:4,class:"w-full md:w-1/2",type:"neutral",onClick:t[4]||(t[4]=w=>v.value=!1)},{default:m(()=>t[15]||(t[15]=[E(" View Your Score ")])),_:1})):f("",!0)]),e(o)===e(u).HAS_FINISHED?(s(),i("div",Ve,[e(k)?e(S)&&e(L)<e(S)?(s(),y(D,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:t[6]||(t[6]=w=>e(I)())},{default:m(()=>t[18]||(t[18]=[E(" Add To Leaderboard ")])),_:1})):f("",!0):(s(),y(U,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:m(()=>[t[16]||(t[16]=E(" Please ")),l("a",{class:"cursor-pointer",onClick:t[5]||(t[5]=w=>e(R).push({name:e(oe).LOGIN,params:{redirect:JSON.stringify({name:e(de).GAMES_PATIENCE})}}))}," Login "),t[17]||(t[17]=E(" to add your score to the leaderboard. "))]),_:1}))])):f("",!0)],2),r(ce,{"game-id":e(K).PATIENCE,"is-open":x.value,"onUpdate:isOpen":t[7]||(t[7]=w=>x.value=w)},null,8,["game-id","is-open"])]),_:1}))}});export{Ze as default};
