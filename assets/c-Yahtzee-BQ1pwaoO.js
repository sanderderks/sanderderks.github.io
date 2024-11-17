import{_ as k,a as K}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CecaO51i.js";import{c1 as ve,cG as O,cH as $,cI as ee,cJ as j,cK as pe,cL as le,M as x,aK as i,u,v as o,s as h,bi as t,aZ as _e,at as G,bQ as U,aS as P,q as y,bC as oe,b9 as A,I as f,bH as _,H as m,bR as re,aC as me,aH as ge,F as ae,t as T,bP as we,aV as Ee,bV as ke,cn as ye}from"../bundle.js";import{_ as Te}from"./c-Dice6.vue_vue_type_script_setup_true_lang-lzciAH4f.js";import{u as be,H as He}from"./c-useScoreInfo-DR912uyM.js";import{_ as ie}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import{_ as Se}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-CPLsfgVQ.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-CqI702AU.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-RLKzDD90.js";import"./c-validation-Bf-E2UlI.js";var v=(e=>(e[e.ONES=0]="ONES",e[e.TWOS=1]="TWOS",e[e.THREES=2]="THREES",e[e.FOURS=3]="FOURS",e[e.FIVES=4]="FIVES",e[e.SIXES=5]="SIXES",e[e.THREE_OF_A_KIND=6]="THREE_OF_A_KIND",e[e.FOUR_OF_A_KIND=7]="FOUR_OF_A_KIND",e[e.FULL_HOUSE=8]="FULL_HOUSE",e[e.SMALL_STRAIGHT=9]="SMALL_STRAIGHT",e[e.LARGE_STRAIGHT=10]="LARGE_STRAIGHT",e[e.YAHTZEE=11]="YAHTZEE",e[e.CHANCE=12]="CHANCE",e))(v||{});const F={0:{title:"Ones",section:"top"},1:{title:"Twos",section:"top",multiplier:2},2:{title:"Threes",section:"top",multiplier:3},3:{title:"Fours",section:"top",multiplier:4},4:{title:"Fives",section:"top",multiplier:5},5:{title:"Sixes",section:"top",multiplier:6},6:{title:"Three of a Kind",section:"bottom"},7:{title:"Four of a Kind",section:"bottom"},8:{title:"Full House",section:"bottom",trueValue:25},9:{title:"Small Straight",section:"bottom",trueValue:30},10:{title:"Large Straight",section:"bottom",trueValue:40},11:{title:"Yahtzee",section:"bottom",trueValue:50},12:{title:"Chance",section:"bottom"}},X=()=>({score:[],bonus:0,finalScore:null,round:-1,reroll:-1,dices:[{id:1,value:1,selected:!1,isRolling:!1},{id:2,value:2,selected:!1,isRolling:!1},{id:3,value:3,selected:!1,isRolling:!1},{id:4,value:4,selected:!1,isRolling:!1},{id:5,value:5,selected:!1,isRolling:!1}]}),te=(e,l)=>{for(let s=1;s<=6;s++)if(e.dices.filter(r=>r.value===s).length>=l){let r=0;return e.dices.forEach(n=>{r+=n.value}),r}return!1},W=(e,l)=>{for(let s=1;s<=6;s++)if(e.dices.filter(r=>r.value===s).length===l)return!0;return!1},se=(e,l)=>{let s=0,r=l;do{e:for(let n=r-l+1;n<=r;n++)if(e.dices.some(c=>c.value===n))s++;else break e;if(s===l)return!0;s=0,r++}while(r<=6);return!1},Z=ve("yahtzeeStore",{state:()=>X(),getters:{hasStarted:e=>e.round>=0,hasFinished:e=>e.score.length===13,isRolling:e=>e.dices.some(l=>l.isRolling),hasOfValue:e=>l=>e.dices.filter(s=>s.value===l).length,hasThreeOfAKind:e=>te(e,3),hasFourOfAKind:e=>te(e,4),hasFullHouse:e=>W(e,2)&&W(e,3)?F[8].trueValue??!1:!1,hasSmallStraight:e=>se(e,4)?F[9].trueValue??!1:!1,hasLargeStraight:e=>se(e,5)?F[10].trueValue??!1:!1,hasYahtzee:e=>W(e,5)?F[11].trueValue??!1:!1,diceTotal:e=>{let l=0;return e.dices.forEach(s=>{l+=s.value}),l},scoreTotalOf:e=>l=>{let s=0;return e.score.filter(r=>F[r.row].section===l).forEach(r=>{r.value!==!1&&(s+=r.value)}),s},personalBest:e=>l=>O().personalBest($.YAHTZEE,l),highscorePosition:e=>l=>O().highscorePosition($.YAHTZEE,l)},actions:{reset(e){this.$patch(X()),O().setPreviousHighscores($.YAHTZEE,e)},start(){this.round=0},roll(){const e=O().diceRollSpeed*1e3;this.reroll++,this.dices.forEach(l=>{l.selected||(l.isRolling=!0,setTimeout(()=>{l.value=ee(6),l.isRolling=!1,this.reroll===2&&(l.selected=!0),this.dices.sort((s,r)=>s.value-r.value)},ee(e,e/3)))}),j(pe)},getScore(e){return this.score.find(l=>l.row===e)},getActualValue(e,l){let s=l;if(s===!1)return!1;const r=F[e];return r.multiplier?s*=r.multiplier:r.trueValue&&(s=r.trueValue),s},selectDice(e){this.reroll>=0&&this.reroll<2&&(e.selected=!e.selected,j(le))},selectScore(e,l){if(!this.isRolling){if(this.hasYahtzee){const s=this.score.find(r=>r.row===11);s&&s.value!==!1&&(this.bonus+=100)}this.score.push({row:e,value:l}),this.round++,this.reroll=X().reroll,this.dices.forEach(s=>{s.selected=!1}),j(le)}},setPreviousHighscores:(e,l)=>O().setPreviousHighscores($.YAHTZEE,e,l),fetchGameData:e=>O().fetchGameData($.YAHTZEE,e),updateHighscores:(e,l,s)=>O().updateHighscores($.YAHTZEE,e,l,s),sortHighscores:()=>O().sortHighscores($.YAHTZEE)},persist:{enabled:!0}}),$e={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Ae=["fill"],xe=["fill"],Oe=x({__name:"Dice1",props:{color:{},backgroundColor:{}},setup(e){return(l,s)=>(i(),u("svg",$e,[o("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:l.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Ae),o("circle",{cx:"50",cy:"50",r:"10",fill:l.color},null,8,xe)]))}}),Ce={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Ie=["fill"],Fe=["fill"],Ve=["fill"],Le=x({__name:"Dice2",props:{color:{},backgroundColor:{}},setup(e){return(l,s)=>(i(),u("svg",Ce,[o("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:l.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Ie),o("circle",{cx:"25",cy:"25",r:"10",fill:l.color},null,8,Fe),o("circle",{cx:"75",cy:"75",r:"10",fill:l.color},null,8,Ve)]))}}),De={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Re=["fill"],Ne=["fill"],Ye=["fill"],Be=["fill"],Ge=["fill"],Ue=["fill"],Pe=x({__name:"Dice5",props:{color:{},backgroundColor:{}},setup(e){return(l,s)=>(i(),u("svg",De,[o("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:l.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Re),o("circle",{cx:"25",cy:"25",r:"10",fill:l.color},null,8,Ne),o("circle",{cx:"25",cy:"75",r:"10",fill:l.color},null,8,Ye),o("circle",{cx:"50",cy:"50",r:"10",fill:l.color},null,8,Be),o("circle",{cx:"75",cy:"25",r:"10",fill:l.color},null,8,Ge),o("circle",{cx:"75",cy:"75",r:"10",fill:l.color},null,8,Ue)]))}}),Ze={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Me=["fill"],ze=["fill"],je=["fill"],Xe=["fill"],We=["fill"],Je=x({__name:"Dice4",props:{color:{},backgroundColor:{}},setup(e){return(l,s)=>(i(),u("svg",Ze,[o("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:l.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Me),o("circle",{cx:"25",cy:"25",r:"10",fill:l.color},null,8,ze),o("circle",{cx:"25",cy:"75",r:"10",fill:l.color},null,8,je),o("circle",{cx:"75",cy:"25",r:"10",fill:l.color},null,8,Xe),o("circle",{cx:"75",cy:"75",r:"10",fill:l.color},null,8,We)]))}}),qe={width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Qe=["fill"],Ke=["fill"],el=["fill"],ll=["fill"],tl=x({__name:"Dice3",props:{color:{},backgroundColor:{}},setup(e){return(l,s)=>(i(),u("svg",qe,[o("rect",{width:"100",height:"100",rx:"10",ry:"10",fill:l.backgroundColor,stroke:"#000000","stroke-width":"5"},null,8,Qe),o("circle",{cx:"25",cy:"25",r:"10",fill:l.color},null,8,Ke),o("circle",{cx:"50",cy:"50",r:"10",fill:l.color},null,8,el),o("circle",{cx:"75",cy:"75",r:"10",fill:l.color},null,8,ll)]))}}),sl=x({__name:"Dice",props:{dice:{}},setup(e){const{selectDice:l}=Z(),s={1:Oe,2:Le,3:tl,4:Je,5:Pe,6:Te};return(r,n)=>(i(),u("div",{class:G(["cursor-pointer",{"animate-spin":r.dice.isRolling}])},[(i(),h(_e(s[r.dice.value]),{color:"black",backgroundColor:r.dice.selected?"#2563eb":"white",width:"40",height:"40",onClick:n[0]||(n[0]=c=>t(l)(r.dice))},null,8,["backgroundColor"]))],2))}}),ol={class:"h-12 md:h-auto"},rl={class:"w-1/2 md:w-1/3"},al={key:0},il={key:1,class:"!ps-1 md:ps-1"},nl={key:2},ul=x({__name:"ScoreCell",props:{row:{},hasValue:{type:[Number,Boolean]}},setup(e){const l=e,s=Z(),{reroll:r}=U(s),{selectScore:n,getScore:c,getActualValue:E}=s,S=P(!1),V=F[l.row],C=y(()=>c(l.row)),b=y(()=>E(l.row,l.hasValue)),L=y(()=>b.value===!1?"X":b.value);return oe(()=>b.value,()=>{S.value=!0,setTimeout(()=>{S.value=!1})}),(D,I)=>(i(),u("tr",ol,[o("th",rl,A(t(V).title),1),C.value?(i(),u("td",al,A(C.value.value===!1?"X":C.value.value),1)):t(r)>=0&&!S.value?(i(),u("td",il,[f(k,{class:"!p-0 !h-10 md:!h-auto",type:b.value===!1||b.value===0?"neutral":void 0,onClick:I[0]||(I[0]=H=>t(n)(D.row,b.value))},{default:_(()=>[m(A(L.value),1)]),_:1},8,["type"])])):(i(),u("td",nl))]))}}),p=ie(ul,[["__scopeId","data-v-5f14174f"]]),cl={key:0,class:"h-12 md:h-auto text-red-500"},dl={class:"h-12 md:h-auto text-pink-500"},fl={key:0,class:"text-purple-500 font-bold"},hl={key:1,class:"text-red-500 font-bold"},vl={key:2,class:"text-green-500 font-bold"},pl=x({__name:"Scoreboard",setup(e){const l=Z(),{bonus:s,hasStarted:r,hasFinished:n,hasOfValue:c,hasThreeOfAKind:E,hasFourOfAKind:S,hasFullHouse:V,hasSmallStraight:C,hasLargeStraight:b,hasYahtzee:L,diceTotal:D,scoreTotalOf:I,finalScore:H}=U(l),{updateHighscores:R}=l,{firebaseUser:g}=U(re()),{currentHighscorePosition:M,hasImprovedHighscorePosition:N,hasImprovedPersonalBest:Y}=be($.YAHTZEE),a=P(),d=P(!1),ne=y(()=>c.value(1)),ue=y(()=>c.value(2)),ce=y(()=>c.value(3)),de=y(()=>c.value(4)),fe=y(()=>c.value(5)),he=y(()=>c.value(6)),B=y(()=>I.value("top")),J=y(()=>I.value("bottom"));return me(()=>{a.value=setInterval(()=>{d.value=!d.value},500)}),ge(()=>{clearInterval(a.value)}),oe(n,(z,w)=>{var q,Q;z&&z!==w&&(H.value=B.value+(B.value>=63?35:0)+J.value+s.value,(q=g.value)!=null&&q.uid&&R((Q=g.value)==null?void 0:Q.uid,H.value,s.value),new Audio("/sounds/applause-and-cheer.mp3").play())}),(z,w)=>(i(),u("table",{class:G(["w-full mt-5 text-sm md:text-base text-left",t(n)?"text-neutral-500":"text-white",t(r)?void 0:d.value?"even":"odd"])},[o("tbody",null,[f(p,{row:t(v).ONES,"has-value":ne.value},null,8,["row","has-value"]),f(p,{row:t(v).TWOS,"has-value":ue.value},null,8,["row","has-value"]),f(p,{row:t(v).THREES,"has-value":ce.value},null,8,["row","has-value"]),f(p,{row:t(v).FOURS,"has-value":de.value},null,8,["row","has-value"]),f(p,{row:t(v).FIVES,"has-value":fe.value},null,8,["row","has-value"]),f(p,{row:t(v).SIXES,"has-value":he.value},null,8,["row","has-value"]),o("tr",{class:G(["h-12 md:h-auto",t(n)?"text-white":"text-neutral-500"])},[w[0]||(w[0]=o("th",null,"TOP",-1)),o("td",null,A(t(r)?B.value:""),1)],2),o("tr",{class:G(["h-12 md:h-auto",t(n)?B.value>=63?"text-yellow-500":"text-white":"text-neutral-500"])},[w[1]||(w[1]=o("th",null,"BONUS",-1)),o("td",null,A(B.value>=63?35:t(n)?"X":""),1)],2),f(p,{row:t(v).THREE_OF_A_KIND,"has-value":t(E)},null,8,["row","has-value"]),f(p,{row:t(v).FOUR_OF_A_KIND,"has-value":t(S)},null,8,["row","has-value"]),f(p,{row:t(v).FULL_HOUSE,"has-value":t(V)},null,8,["row","has-value"]),f(p,{row:t(v).SMALL_STRAIGHT,"has-value":t(C)},null,8,["row","has-value"]),f(p,{row:t(v).LARGE_STRAIGHT,"has-value":t(b)},null,8,["row","has-value"]),f(p,{row:t(v).YAHTZEE,"has-value":t(L)},null,8,["row","has-value"]),f(p,{row:t(v).CHANCE,"has-value":t(D)},null,8,["row","has-value"]),o("tr",{class:G(["h-12 md:h-auto",t(n)?"text-white":"text-neutral-500"])},[w[2]||(w[2]=o("th",null,"BOTTOM",-1)),o("td",null,A(t(r)?J.value:""),1)],2),t(n)&&t(H)?(i(),u(ae,{key:0},[t(s)?(i(),u("tr",cl,[w[3]||(w[3]=o("th",null,"YAHTZEE BONUS",-1)),o("td",null,A(t(s)),1)])):T("",!0),o("tr",dl,[w[4]||(w[4]=o("th",null,"TOTAL",-1)),o("td",null,[m(A(t(H))+" ",1),t(N)&&t(M)===1?(i(),u("span",fl," HIGHSCORE! ")):t(N)?(i(),u("span",hl," LEADERBOARD IMPROVEMENT! ")):t(Y)?(i(),u("span",vl," PERSONAL BEST! ")):T("",!0)])])],64)):T("",!0)])],2))}}),_l=ie(pl,[["__scopeId","data-v-e6223379"]]),ml={class:"flex flex-wrap justify-center gap-3"},gl={key:3,class:"w-full flex flex-col md:flex-row gap-3 justify-center"},wl={class:"w-full md:w-1/2 flex justify-center gap-3"},El={class:"w-full md:w-1/2 flex justify-center gap-3"},kl={class:"mt-5 flex flex-col md:flex-row gap-3 justify-center"},yl={key:2,class:"flex flex-wrap gap-3 mt-3 justify-center"},Fl=x({__name:"Yahtzee",setup(e){const l=we(),s=Z(),{reroll:r,dices:n,hasStarted:c,hasFinished:E,finalScore:S,bonus:V,personalBest:C}=U(s),{start:b,reset:L,roll:D,updateHighscores:I}=s,{firebaseUser:H}=U(re()),R=P(!1),g=P(!1),M=()=>{g.value=!1,b()},N=()=>{var Y;g.value=!1,L((Y=H.value)==null?void 0:Y.uid)};return(Y,a)=>(i(),h(K,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Yahtzee",description:"Play solo."},{right:_(()=>[f(k,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:a[0]||(a[0]=d=>R.value=!0)})]),default:_(()=>[o("div",ml,[t(c)?T("",!0):(i(),h(k,{key:0,class:"w-full md:w-1/2",onClick:M},{default:_(()=>a[8]||(a[8]=[m(" Start ")])),_:1})),!t(c)&&!g.value?(i(),h(k,{key:1,class:"w-full md:w-1/2",type:"neutral",onClick:a[1]||(a[1]=d=>g.value=!0)},{default:_(()=>a[9]||(a[9]=[m(" View Highscores ")])),_:1})):t(c)?t(E)?T("",!0):(i(),u("div",gl,[o("div",wl,[!t(E)&&t(r)<2?(i(),h(k,{key:0,class:"w-full",type:"tertiary",disabled:t(n).every(d=>d.selected),onClick:t(D)},{default:_(()=>[m(A(t(r)>=0?"Reroll":"Roll"),1)]),_:1},8,["disabled","onClick"])):T("",!0)]),o("div",El,[(i(!0),u(ae,null,Ee(t(n),d=>(i(),h(sl,{dice:d},null,8,["dice"]))),256))])])):(i(),h(k,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:a[2]||(a[2]=d=>g.value=!1)},{default:_(()=>a[10]||(a[10]=[m(" Go Back ")])),_:1}))]),g.value?(i(),h(He,{key:0,"game-id":t($).YAHTZEE},null,8,["game-id"])):(i(),h(_l,{key:1})),o("div",kl,[t(c)&&!t(E)?(i(),h(k,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:N},{default:_(()=>a[11]||(a[11]=[m(" Restart ")])),_:1})):T("",!0),t(E)?(i(),h(k,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:N},{default:_(()=>a[12]||(a[12]=[m(" Play Again ")])),_:1})):T("",!0),t(E)&&!g.value?(i(),h(k,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:a[3]||(a[3]=d=>g.value=!0)},{default:_(()=>a[13]||(a[13]=[m(" View Highscores ")])),_:1})):t(E)?(i(),h(k,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:a[4]||(a[4]=d=>g.value=!1)},{default:_(()=>a[14]||(a[14]=[m(" View Your Score ")])),_:1})):T("",!0)]),t(E)?(i(),u("div",yl,[t(H)?t(S)&&t(C)(t(H).uid)<t(S)?(i(),h(k,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:a[6]||(a[6]=d=>t(I)(t(H).uid,t(S),t(V)))},{default:_(()=>a[17]||(a[17]=[m(" Add To Leaderboard ")])),_:1})):T("",!0):(i(),h(K,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:_(()=>[a[15]||(a[15]=m(" Please ")),o("a",{class:"cursor-pointer",onClick:a[5]||(a[5]=d=>t(l).push({name:t(ke).LOGIN,params:{redirect:JSON.stringify({name:t(ye).GAMES_YAHTZEE})}}))}," Login "),a[16]||(a[16]=m(" to add your score to the leaderboard. "))]),_:1}))])):T("",!0),f(Se,{"is-open":R.value,"onUpdate:isOpen":a[7]||(a[7]=d=>R.value=d)},null,8,["is-open"])]),_:1}))}});export{Fl as default};
