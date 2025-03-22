import{_ as C,a as se}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BnZmzn5o.js";import{d as _e,aO as me,s as j,r as F,c as i,o as ne,aP as J,M as ue,aQ as q,aR as ge,aS as oe,aT as we,aU as ae,e as L,l as r,m as f,p as t,q as k,k as e,as as ke,E as Z,H as D,n as g,D as A,G as b,am as Ee,w as ie,t as I,h as ye,f as Se,O as $e,R as Te,a4 as xe}from"../bundle.js";import{_ as Ae}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{u as be,H as Oe}from"./c-useScoreInfo-DPqAtQlv.js";import{_ as He}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-BbRfJAxq.js";import{_ as ce}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-BslGDv8j.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import"./c-validation-DokkLKHB.js";var $=(l=>(l[l.ONES=0]="ONES",l[l.TWOS=1]="TWOS",l[l.THREES=2]="THREES",l[l.FOURS=3]="FOURS",l[l.FIVES=4]="FIVES",l[l.SIXES=5]="SIXES",l[l.THREE_OF_A_KIND=6]="THREE_OF_A_KIND",l[l.FOUR_OF_A_KIND=7]="FOUR_OF_A_KIND",l[l.FULL_HOUSE=8]="FULL_HOUSE",l[l.SMALL_STRAIGHT=9]="SMALL_STRAIGHT",l[l.LARGE_STRAIGHT=10]="LARGE_STRAIGHT",l[l.YAHTZEE=11]="YAHTZEE",l[l.CHANCE=12]="CHANCE",l))($||{});const Y={0:{title:"Ones",section:"top"},1:{title:"Twos",section:"top",multiplier:2},2:{title:"Threes",section:"top",multiplier:3},3:{title:"Fours",section:"top",multiplier:4},4:{title:"Fives",section:"top",multiplier:5},5:{title:"Sixes",section:"top",multiplier:6},6:{title:"Three of a Kind",section:"bottom"},7:{title:"Four of a Kind",section:"bottom"},8:{title:"Full House",section:"bottom",trueValue:25},9:{title:"Small Straight",section:"bottom",trueValue:30},10:{title:"Large Straight",section:"bottom",trueValue:40},11:{title:"Yahtzee",section:"bottom",trueValue:50},12:{title:"Chance",section:"bottom"}},Q=_e("yahtzeeStore",()=>{const l=me(),{personalBest:o,highscorePosition:h}=j(l),{setPreviousHighscores:w,updateHighscores:_,sortHighscores:E}=l,m=F([]),c=F(0),O=F(null),T=F(-1),d=F(-1),v=F(re()),N=i(()=>T.value>=0),V=i(()=>m.value.length===13),R=i(()=>v.value.some(n=>n.isRolling)),B=i(()=>n=>v.value.filter(a=>a.value===n).length),y=i(()=>X(3)),z=i(()=>X(4)),U=i(()=>G(2)&&G(3)?Y[8].trueValue??!1:!1),P=i(()=>W(4)?Y[9].trueValue??!1:!1),s=i(()=>W(5)?Y[10].trueValue??!1:!1),p=i(()=>G(5)?Y[11].trueValue??!1:!1),K=i(()=>{let n=0;return v.value.forEach(a=>{n+=a.value}),n}),M=i(()=>n=>{let a=0;return m.value.filter(u=>Y[u.row].section===n).forEach(u=>{u.value!==!1&&(a+=u.value)}),a});ne(()=>{l.$init(J.YAHTZEE)}),ue(V,n=>{if(n){let a=M.value("top");a>=63&&(a+=35),a+=M.value("bottom"),a+=c.value,O.value=a,te(),q(ge)}});const ee=()=>{m.value=[],c.value=0,O.value=null,T.value=-1,d.value=-1,v.value=re(),w()},X=n=>{for(let a=1;a<=6;a++)if(v.value.filter(u=>u.value===a).length>=n){let u=0;return v.value.forEach(S=>{u+=S.value}),u}return!1},G=n=>{for(let a=1;a<=6;a++)if(v.value.filter(u=>u.value===a).length===n)return!0;return!1},W=n=>{let a=0,u=n;do{e:for(let S=u-n+1;S<=u;S++)if(v.value.some(pe=>pe.value===S))a++;else break e;if(a===n)return!0;a=0,u++}while(u<=6);return!1},le=()=>{T.value=0},H=()=>{const n=l.diceRollSpeed*1e3;d.value++,v.value.forEach(a=>{a.selected||(a.isRolling=!0,setTimeout(()=>{a.value=oe(6),a.isRolling=!1,d.value===2&&(a.selected=!0),v.value.sort((u,S)=>u.value-S.value)},oe(n,n/3)))}),q(we)},fe=n=>m.value.find(a=>a.row===n),de=(n,a)=>{let u=a;if(u===!1)return!1;const S=Y[n];return S.multiplier?u*=S.multiplier:S.trueValue&&(u=S.trueValue),u},ve=n=>{d.value>=0&&d.value<2&&(n.selected=!n.selected,q(ae))},he=(n,a)=>{if(!R.value){if(p.value){const u=m.value.find(S=>S.row===11);u&&u.value!==!1&&(c.value+=100)}m.value.push({row:n,value:a}),T.value++,d.value=-1,v.value.forEach(u=>{u.selected=!1}),q(ae)}},te=()=>{O.value&&_({score:O.value,bonus:c.value})};return{score:m,bonus:c,finalScore:O,round:T,reroll:d,dices:v,hasStarted:N,hasFinished:V,isRolling:R,hasOfValue:B,hasThreeOfAKind:y,hasFourOfAKind:z,hasFullHouse:U,hasSmallStraight:P,hasLargeStraight:s,hasYahtzee:p,diceTotal:K,scoreTotalOf:M,personalBest:o,highscorePosition:h,$reset:ee,start:le,roll:H,getScore:fe,getActualValue:de,selectDice:ve,selectScore:he,setPreviousHighscores:w,updateYahtzeeHighscore:te,sortHighscores:E}},{persist:{enabled:!0}}),re=()=>[{id:1,value:1,selected:!1,isRolling:!1},{id:2,value:2,selected:!1,isRolling:!1},{id:3,value:3,selected:!1,isRolling:!1},{id:4,value:4,selected:!1,isRolling:!1},{id:5,value:5,selected:!1,isRolling:!1}],Ce={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Ie=["fill"],Fe=["fill"],Ve=L({__name:"Dice1",props:{color:{},backgroundColor:{}},setup(l){return(o,h)=>(r(),f("svg",Ce,[t("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:o.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Ie),t("circle",{cx:"50",cy:"50",r:"10",fill:o.color},null,8,Fe)]))}}),De={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Le=["fill"],Re=["fill"],Ne=["fill"],Be=L({__name:"Dice2",props:{color:{},backgroundColor:{}},setup(l){return(o,h)=>(r(),f("svg",De,[t("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:o.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Le),t("circle",{cx:"25",cy:"25",r:"10",fill:o.color},null,8,Re),t("circle",{cx:"75",cy:"75",r:"10",fill:o.color},null,8,Ne)]))}}),Ue={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Ge=["fill"],Ye=["fill"],Pe=["fill"],ze=["fill"],Me=L({__name:"Dice3",props:{color:{},backgroundColor:{}},setup(l){return(o,h)=>(r(),f("svg",Ue,[t("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:o.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Ge),t("circle",{cx:"25",cy:"25",r:"10",fill:o.color},null,8,Ye),t("circle",{cx:"50",cy:"50",r:"10",fill:o.color},null,8,Pe),t("circle",{cx:"75",cy:"75",r:"10",fill:o.color},null,8,ze)]))}}),Ze={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},je=["fill"],Xe=["fill"],We=["fill"],qe=["fill"],Je=["fill"],Qe=L({__name:"Dice4",props:{color:{},backgroundColor:{}},setup(l){return(o,h)=>(r(),f("svg",Ze,[t("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:o.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,je),t("circle",{cx:"25",cy:"25",r:"10",fill:o.color},null,8,Xe),t("circle",{cx:"25",cy:"75",r:"10",fill:o.color},null,8,We),t("circle",{cx:"75",cy:"25",r:"10",fill:o.color},null,8,qe),t("circle",{cx:"75",cy:"75",r:"10",fill:o.color},null,8,Je)]))}}),Ke={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},el=["fill"],ll=["fill"],tl=["fill"],sl=["fill"],ol=["fill"],al=["fill"],rl=L({__name:"Dice5",props:{color:{},backgroundColor:{}},setup(l){return(o,h)=>(r(),f("svg",Ke,[t("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:o.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,el),t("circle",{cx:"25",cy:"25",r:"10",fill:o.color},null,8,ll),t("circle",{cx:"25",cy:"75",r:"10",fill:o.color},null,8,tl),t("circle",{cx:"50",cy:"50",r:"10",fill:o.color},null,8,sl),t("circle",{cx:"75",cy:"25",r:"10",fill:o.color},null,8,ol),t("circle",{cx:"75",cy:"75",r:"10",fill:o.color},null,8,al)]))}}),nl=L({__name:"Dice",props:{dice:{}},setup(l){const{selectDice:o}=Q(),h={1:Ve,2:Be,3:Me,4:Qe,5:rl,6:Ae};return(w,_)=>(r(),f("div",{class:Z(["cursor-pointer",{"animate-spin":w.dice.isRolling}])},[(r(),k(ke(h[w.dice.value]),{color:"black",backgroundColor:w.dice.selected?"#2563eb":"white",width:"40",height:"40",onClick:_[0]||(_[0]=E=>e(o)(w.dice))},null,8,["backgroundColor"]))],2))}}),ul={class:"h-12 md:h-auto"},il={class:"w-1/2 md:w-1/3"},cl={key:0},fl={key:1,class:"!ps-1 md:ps-1"},dl={key:2},vl=L({__name:"ScoreCell",props:{row:{},hasValue:{type:[Number,Boolean]}},setup(l){const o=l,h=Q(),{reroll:w}=j(h),{selectScore:_,getScore:E,getActualValue:m}=h,c=F(!1),O=Y[o.row],T=i(()=>E(o.row)),d=i(()=>m(o.row,o.hasValue)),v=i(()=>d.value===!1?"X":d.value);return ue(()=>d.value,()=>{c.value=!0,setTimeout(()=>{c.value=!1})}),(N,V)=>(r(),f("tr",ul,[t("th",il,D(e(O).title),1),T.value?(r(),f("td",cl,D(T.value.value===!1?"X":T.value.value),1)):e(w)>=0&&!c.value?(r(),f("td",fl,[g(C,{class:"!p-0 !h-10 md:!h-auto",type:d.value===!1||d.value===0?"neutral":void 0,onClick:V[0]||(V[0]=R=>e(_)(N.row,d.value))},{default:A(()=>[b(D(v.value),1)]),_:1},8,["type"])])):(r(),f("td",dl))]))}}),x=ce(vl,[["__scopeId","data-v-cc8f6556"]]),hl={key:0,class:"h-12 md:h-auto text-red-500"},pl={class:"h-12 md:h-auto text-pink-500"},_l={key:0,class:"text-purple-500 font-bold"},ml={key:1,class:"text-red-500 font-bold"},gl={key:2,class:"text-green-500 font-bold"},wl=L({__name:"Scoreboard",setup(l){const o=Q(),{bonus:h,hasStarted:w,hasFinished:_,hasOfValue:E,hasThreeOfAKind:m,hasFourOfAKind:c,hasFullHouse:O,hasSmallStraight:T,hasLargeStraight:d,hasYahtzee:v,diceTotal:N,scoreTotalOf:V,finalScore:R}=j(o),{currentHighscorePosition:B,hasImprovedHighscorePosition:y,hasImprovedPersonalBest:z}=be(J.YAHTZEE),U=F(),P=F(!1),s=i(()=>E.value(1)),p=i(()=>E.value(2)),K=i(()=>E.value(3)),M=i(()=>E.value(4)),ee=i(()=>E.value(5)),X=i(()=>E.value(6)),G=i(()=>V.value("top")),W=i(()=>V.value("bottom"));return ne(()=>{U.value=setInterval(()=>{P.value=!P.value},500)}),Ee(()=>{clearInterval(U.value)}),(le,H)=>(r(),f("table",{class:Z(["w-full mt-5 text-sm md:text-base text-left",e(_)?"text-neutral-500":"text-white",e(w)?void 0:P.value?"even":"odd"])},[t("tbody",null,[g(x,{row:e($).ONES,"has-value":s.value},null,8,["row","has-value"]),g(x,{row:e($).TWOS,"has-value":p.value},null,8,["row","has-value"]),g(x,{row:e($).THREES,"has-value":K.value},null,8,["row","has-value"]),g(x,{row:e($).FOURS,"has-value":M.value},null,8,["row","has-value"]),g(x,{row:e($).FIVES,"has-value":ee.value},null,8,["row","has-value"]),g(x,{row:e($).SIXES,"has-value":X.value},null,8,["row","has-value"]),t("tr",{class:Z(["h-12 md:h-auto",e(_)?"text-white":"text-neutral-500"])},[H[0]||(H[0]=t("th",null,"TOP",-1)),t("td",null,D(e(w)?G.value:""),1)],2),t("tr",{class:Z(["h-12 md:h-auto",e(_)?G.value>=63?"text-yellow-500":"text-white":"text-neutral-500"])},[H[1]||(H[1]=t("th",null,"BONUS",-1)),t("td",null,D(G.value>=63?35:e(_)?"X":""),1)],2),g(x,{row:e($).THREE_OF_A_KIND,"has-value":e(m)},null,8,["row","has-value"]),g(x,{row:e($).FOUR_OF_A_KIND,"has-value":e(c)},null,8,["row","has-value"]),g(x,{row:e($).FULL_HOUSE,"has-value":e(O)},null,8,["row","has-value"]),g(x,{row:e($).SMALL_STRAIGHT,"has-value":e(T)},null,8,["row","has-value"]),g(x,{row:e($).LARGE_STRAIGHT,"has-value":e(d)},null,8,["row","has-value"]),g(x,{row:e($).YAHTZEE,"has-value":e(v)},null,8,["row","has-value"]),g(x,{row:e($).CHANCE,"has-value":e(N)},null,8,["row","has-value"]),t("tr",{class:Z(["h-12 md:h-auto",e(_)?"text-white":"text-neutral-500"])},[H[2]||(H[2]=t("th",null,"BOTTOM",-1)),t("td",null,D(e(w)?W.value:""),1)],2),e(_)&&e(R)?(r(),f(ie,{key:0},[e(h)?(r(),f("tr",hl,[H[3]||(H[3]=t("th",null,"YAHTZEE BONUS",-1)),t("td",null,D(e(h)),1)])):I("",!0),t("tr",pl,[H[4]||(H[4]=t("th",null,"TOTAL",-1)),t("td",null,[b(D(e(R))+" ",1),e(y)&&e(B)===1?(r(),f("span",_l," HIGHSCORE! ")):e(y)?(r(),f("span",ml," LEADERBOARD IMPROVEMENT! ")):e(z)?(r(),f("span",gl," PERSONAL BEST! ")):I("",!0)])])],64)):I("",!0)])],2))}}),kl=ce(wl,[["__scopeId","data-v-1cc8c08e"]]),El={class:"flex flex-wrap justify-center gap-3"},yl={key:3,class:"w-full flex flex-col md:flex-row gap-3 justify-center"},Sl={class:"w-full md:w-1/2 flex justify-center gap-3"},$l={class:"w-full md:w-1/2 flex justify-center gap-3"},Tl={class:"mt-5 flex flex-col md:flex-row gap-3 justify-center"},xl={key:2,class:"flex flex-wrap gap-3 mt-3 justify-center"},Ll=L({__name:"Yahtzee",setup(l){const o=Se(),h=Q(),w=ye(),{reroll:_,dices:E,hasStarted:m,hasFinished:c,finalScore:O,personalBest:T}=j(h),{firebaseUser:d}=j(w),{start:v,$reset:N,roll:V,updateYahtzeeHighscore:R}=h,B=F(!1),y=F(!1),z=()=>{y.value=!1,v()},U=()=>{y.value=!1,N()};return(P,s)=>(r(),k(se,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Yahtzee",description:"Play solo."},{right:A(()=>[g(C,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:s[0]||(s[0]=p=>B.value=!0)})]),default:A(()=>[t("div",El,[e(m)?I("",!0):(r(),k(C,{key:0,class:"w-full md:w-1/2",onClick:z},{default:A(()=>s[8]||(s[8]=[b(" Start ")])),_:1})),!e(m)&&!y.value?(r(),k(C,{key:1,class:"w-full md:w-1/2",type:"neutral",onClick:s[1]||(s[1]=p=>y.value=!0)},{default:A(()=>s[9]||(s[9]=[b(" View Highscores ")])),_:1})):e(m)?e(c)?I("",!0):(r(),f("div",yl,[t("div",Sl,[!e(c)&&e(_)<2?(r(),k(C,{key:0,class:"w-full",type:"tertiary",disabled:e(E).every(p=>p.selected),onClick:e(V)},{default:A(()=>[b(D(e(_)>=0?"Reroll":"Roll"),1)]),_:1},8,["disabled","onClick"])):I("",!0)]),t("div",$l,[(r(!0),f(ie,null,$e(e(E),p=>(r(),k(nl,{dice:p},null,8,["dice"]))),256))])])):(r(),k(C,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:s[2]||(s[2]=p=>y.value=!1)},{default:A(()=>s[10]||(s[10]=[b(" Go Back ")])),_:1}))]),y.value?(r(),k(Oe,{key:0,"game-id":e(J).YAHTZEE},null,8,["game-id"])):(r(),k(kl,{key:1})),t("div",Tl,[e(m)&&!e(c)?(r(),k(C,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:U},{default:A(()=>s[11]||(s[11]=[b(" Restart ")])),_:1})):I("",!0),e(c)?(r(),k(C,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:U},{default:A(()=>s[12]||(s[12]=[b(" Play Again ")])),_:1})):I("",!0),e(c)&&!y.value?(r(),k(C,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:s[3]||(s[3]=p=>y.value=!0)},{default:A(()=>s[13]||(s[13]=[b(" View Highscores ")])),_:1})):e(c)?(r(),k(C,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:s[4]||(s[4]=p=>y.value=!1)},{default:A(()=>s[14]||(s[14]=[b(" View Your Score ")])),_:1})):I("",!0)]),e(c)?(r(),f("div",xl,[e(d)?e(O)&&e(T)<e(O)?(r(),k(C,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:s[6]||(s[6]=p=>e(R)())},{default:A(()=>s[17]||(s[17]=[b(" Add To Leaderboard ")])),_:1})):I("",!0):(r(),k(se,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:A(()=>[s[15]||(s[15]=b(" Please ")),t("a",{class:"cursor-pointer",onClick:s[5]||(s[5]=p=>e(o).push({name:e(Te).LOGIN,params:{redirect:JSON.stringify({name:e(xe).GAMES_YAHTZEE})}}))}," Login "),s[16]||(s[16]=b(" to add your score to the leaderboard. "))]),_:1}))])):I("",!0),g(He,{"game-id":e(J).YAHTZEE,"is-open":B.value,"onUpdate:isOpen":s[7]||(s[7]=p=>B.value=p)},null,8,["game-id","is-open"])]),_:1}))}});export{Ll as default};
