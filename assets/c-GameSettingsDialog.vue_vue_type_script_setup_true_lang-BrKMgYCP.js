import{_ as _e,a as Le}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-R6e5xvIM.js";import{_ as Te}from"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import{d as Ce,aO as he,s as ee,r as h,a as Pe,c as V,o as Oe,aP as M,M as Ie,aQ as J,cV as we,aR as De,aU as Ae,cW as Me,h as xe,cX as We,cY as Ne,al as $e,ai as re,cZ as Be,L as ve,c_ as Ue,c$ as Fe,d0 as Ge,aS as He,aT as Ye,e as je,bX as Ze,cD as qe,l as de,q as fe,D as Ke,n as Xe,k as j,ad as pe,t as Se}from"../bundle.js";var ze=(e=>(e.HEARTS="hearts",e.SPADES="spades",e.DIAMONDS="diamonds",e.CLUBS="clubs",e))(ze||{});const Ee={hearts:{label:"Hearts",color:"red"},spades:{label:"Spades",color:"black"},diamonds:{label:"Diamonds",color:"red"},clubs:{label:"Clubs",color:"black"}};var Qe=(e=>(e.STOCK_CLOSED="stock_closed",e.STOCK_OPEN="stock_open",e.PILE1="pile1",e.PILE2="pile2",e.PILE3="pile3",e.PILE4="pile4",e.PILE5="pile5",e.PILE6="pile6",e.PILE7="pile7",e.HEARTS="hearts",e.SPADES="spades",e.DIAMONDS="diamonds",e.CLUBS="clubs",e))(Qe||{}),Je=(e=>(e[e.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",e[e.HAS_STARTED=1]="HAS_STARTED",e[e.HAS_FINISHED=2]="HAS_FINISHED",e))(Je||{});const el={easy:.5,hard:1},Re=()=>{const e=sl();return we(e),{pile1:e.splice(0,1).map(c=>({...c,deck:"pile1"})),pile2:e.splice(0,2).map((c,f)=>f<1?{...c,hidden:!0,deck:"pile2"}:{...c,deck:"pile2"}),pile3:e.splice(0,3).map((c,f)=>f<2?{...c,hidden:!0,deck:"pile3"}:{...c,deck:"pile3"}),pile4:e.splice(0,4).map((c,f)=>f<3?{...c,hidden:!0,deck:"pile4"}:{...c,deck:"pile4"}),pile5:e.splice(0,5).map((c,f)=>f<4?{...c,hidden:!0,deck:"pile5"}:{...c,deck:"pile5"}),pile6:e.splice(0,6).map((c,f)=>f<5?{...c,hidden:!0,deck:"pile6"}:{...c,deck:"pile6"}),pile7:e.splice(0,7).map((c,f)=>f<6?{...c,hidden:!0,deck:"pile7"}:{...c,deck:"pile7"}),stock_closed:e.map(c=>({...c,hidden:!0,deck:"stock_closed"})),stock_open:[],hearts:[],spades:[],diamonds:[],clubs:[]}},ll=Ce("patienceStore",()=>{const e=he(),{personalBest:c,highscorePosition:f}=ee(e),{setPreviousHighscores:$,updateHighscores:B,sortHighscores:N}=e,D=h("hard"),P=h(0),U=h(0),d=h(0),p=h(0),I=h(0),Z=h(),T=h(!0),i=Pe(Re()),H=V(()=>el[D.value]),R=V(()=>Object.keys(i).flatMap(s=>i[s])),x=1e3,v=10,L=10,W=V(()=>{const s=d.value%10===0?d.value:Math.floor(d.value/10)*10,t=U.value*v,n=I.value*v,u=s+t+n,g=p.value*L;return Math.max(0,x-(u-g))}),K=V(()=>{const s=Math.floor(d.value/60),t=d.value%60;return`${String(s).padStart(2,"0")}:${String(t).padStart(2,"0")}`}),A=V(()=>i.hearts.length===13&&i.spades.length===13&&i.diamonds.length===13&&i.clubs.length===13);Oe(()=>{e.$init(M.PATIENCE),d.value&&P.value===1&&S()}),Ie(A,s=>{s&&P.value!==2&&(F(),P.value=2,w(),J(De))});const m=()=>{F(),U.value=0,d.value=0,p.value=0,I.value=0,P.value=0,Object.assign(i,Re()),e.setPreviousHighscores()},E=()=>{d.value=0,S(),P.value=1,setTimeout(()=>{se()},500)},S=()=>{Z.value&&F(),Z.value=setInterval(()=>{d.value++},1e3)},F=()=>{clearInterval(Z.value)},ne=()=>{const s=i.stock_open;s.length&&(s.reverse(),G(s[0],!1,t=>{t.deck="stock_closed",t.hidden=!0,i.stock_closed.push(t)}),s.splice(0,s.length),b(1))},q=s=>{const t=s.deck,n=R.value.filter(u=>u.selected);if(t==="stock_closed"){const u=i.stock_closed,g=u.indexOf(s);if(g===u.length-1){const C=D.value==="hard"?g-2:g,y=C<0?0:C,te=u.filter((ce,ie)=>ie>=y);k(),le(te,"stock_open",ce=>{ce.hidden=!1}),b(0)}}else if(t==="stock_open"){const u=i.stock_open;u.indexOf(s)===u.length-1&&(s.selected=!s.selected,n.length&&G(n[0],!1))}else if(n.length){const u=n[0];u===s?G(s,!1):z(t)&&ge(u,s)?s.value===u.value+1&&s.deck!==u.deck&&(le(n,t),u.deck==="stock_open"?b(2):b(4)):n.length===1&&Q(t)&&oe(u,s)&&s.value===u.value-1&&(Y(u,t),b(3),u.hasBeenHome=!0)}else G(s,!0)},me=s=>{const t=R.value.filter(n=>n.selected);if(t.length){const n=t[0],u=n.deck;n.value===13&&(le(t,s),u==="stock_open"?b(2):z(n.deck)&&i[n.deck].every(g=>!g.hidden)?b(5):b(4))}},X=s=>{const t=R.value.filter(n=>n.selected);if(t.length===1){const n=t[0],u=n.type;!i[s].length&&u===s&&n.value===1&&(Y(n,s),b(3))}},G=(s,t,n)=>{const u=i[s.deck],g=u.indexOf(s);u.filter((y,te)=>te>=g).forEach(y=>{y.selected=t,n==null||n(y)})},k=()=>{R.value.forEach(s=>{s.selected=!1})},Y=(s,t)=>{const n=s.deck,u=i[n].indexOf(s);s.deck=t,s.selected=!1,i[t].push(s),i[n].splice(u,1),(z(n)||n==="stock_open")&&ae(n)},le=(s,t,n)=>{const u=s[0],g=u.deck,C=i[g].indexOf(u);G(u,!1,y=>{y.deck=t,n==null||n(y),i[t].push(y)}),i[g].splice(C,s.length),Q(g)||ae(g!=="stock_closed"?g:t)},ue=s=>{if(!T.value)return!0;const t=i[s.type],n=t.length?t[t.length-1].value:0;if(s.value===n+1){const u=["hearts","spades","diamonds","clubs"],g=n<=1||u.every(C=>{const y=i[C];return(y.length?y[y.length-1].value:0)>=n});if(n===0||g)return Y(s,s.type),s.hasBeenHome=!0,b(3),!0}return!1},se=()=>{if(T.value)for(const s of["stock_open","pile1","pile2","pile3","pile4","pile5","pile6","pile7"]){const t=i[s];if(t.length&&ue(t[t.length-1]))return}},ae=s=>{const t=i[s];if(t.length){const n=t[t.length-1],u=n.deck;n.hidden=!1,setTimeout(()=>{n.deck===u&&(ue(n)||se())},500)}else setTimeout(()=>{se()},500)},b=s=>{switch(s!==5&&U.value++,s){case 0:{I.value+=2*H.value;break}case 1:{I.value+=5*H.value;break}case 2:{p.value+=10*H.value;break}case 3:{p.value+=20*H.value;break}}J(Ae)},ge=(s,t)=>s.color!==t.color,oe=(s,t)=>s.type===t.type,z=s=>["pile1","pile2","pile3","pile4","pile5","pile6","pile7"].includes(s),Q=s=>["hearts","spades","diamonds","clubs"].includes(s),w=()=>{B({difficulty:D.value,score:W.value,bonus:p.value,time:d.value,turns:U.value,penalty:I.value})};return{difficulty:D,gameStatus:P,score:W,turns:U,time:d,bonus:p,penalty:I,cards:i,doAutocomplete:T,allCards:R,formattedTime:K,personalBest:c,highscorePosition:f,$reset:m,start:E,shuffle:ne,selectCard:q,selectEmptyDeck:me,selectFinalDeck:X,deselectAllCards:k,isPlayDeck:z,isFinalDeck:Q,setPreviousHighscores:$,updatePatienceHighscore:w,sortHighscores:N}},{persist:{enabled:!0}}),sl=()=>Object.keys(Ee).flatMap(e=>{const c=e,f=[];for(let $=0;$<13;$++){const B={type:c,label:Ee[c].label,color:Ee[c].color,value:$+1,hidden:!1,selected:!1,hasBeenHome:!1};f.push(B)}return f});var al=(e=>(e[e.SOLO=0]="SOLO",e[e.ONLINE=1]="ONLINE",e))(al||{}),ol=(e=>(e[e.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",e[e.FINDING_OPPONENT=1]="FINDING_OPPONENT",e[e.HAS_STARTED=2]="HAS_STARTED",e[e.HAS_THROWN_DICES=3]="HAS_THROWN_DICES",e[e.HAS_CHOSEN_DICES=4]="HAS_CHOSEN_DICES",e[e.HAS_CHOSEN_TILE=5]="HAS_CHOSEN_TILE",e[e.HAS_LOST=6]="HAS_LOST",e[e.HAS_FINISHED=7]="HAS_FINISHED",e))(ol||{}),tl=(e=>(e[e.NONE=0]="NONE",e[e.HAS_LOST_TILE=1]="HAS_LOST_TILE",e[e.HAS_LOST_NOTHING=2]="HAS_LOST_NOTHING",e))(tl||{}),nl=(e=>(e[e.NONE=0]="NONE",e[e.WINNER_HIGHEST_SCORE=1]="WINNER_HIGHEST_SCORE",e[e.WINNER_HIGHEST_TILE=2]="WINNER_HIGHEST_TILE",e[e.LOSER=3]="LOSER",e))(nl||{}),ul=(e=>(e[e.PLAYER=0]="PLAYER",e[e.OPPONENT=1]="OPPONENT",e))(ul||{});const cl=e=>{for(let c=1;c<=6;c++)if(e.every(f=>f.value===c))return!0;return!1},ke=()=>({0:[],1:[]}),il=Ce("rainwormsStore",()=>{const e=Me(),c=he(),f=xe(),{personalBest:$,highscorePosition:B}=ee(c),{firebaseUser:N}=ee(f),{setPreviousHighscores:D,updateHighscores:P,sortHighscores:U}=c,d={onlineGames:We(e,Ne.GAME_DATA,M.RAINWORMS,Ne.ONLINE_GAMES)},p=h(1),I=h([]),Z=h(!1),T=h(null),i=h(null),H=h(null),R=h(null),x=h(0),v=h(0),L=h(0),W=h(0),K=h(0),A=h(0),m=h(Ve()),E=h(be()),S=Pe(ke()),F=V(()=>m.value.some(l=>l.isRolling)),ne=V(()=>m.value.filter(l=>l.selected).some(l=>l.value===6)),q=V(()=>l=>m.value.some(o=>o.value===l&&o.selected)),me=V(()=>l=>E.value.some(o=>o.displayValue<=l)),X=V(()=>l=>A.value===(l??0)),G=V(()=>l=>{const o=S[l??0];return o.length?o[o.length-1]:null}),k=V(()=>{let l=0;return m.value.filter(o=>o.selected).forEach(o=>{l+=o.value===6?5:o.value}),l}),Y=V(()=>l=>{let o=0;return S[l].forEach(a=>{o+=a.value}),o});Oe(()=>{c.$init(M.RAINWORMS),T.value&&oe()});const le=()=>{var l,o;x.value===1&&((l=N.value)==null?void 0:l.uid)===i.value&&Q(),(o=H.value)==null||o.call(H),H.value=null,T.value=null,R.value=null,i.value=null,v.value=0,L.value=0,W.value=0,K.value=0,A.value=0,m.value=Ve(),E.value=be(),Object.assign(S,ke()),D()},ue=()=>{x.value=0,v.value=2},se=async l=>{if(!N.value)return;i.value=N.value.uid,R.value=l,x.value=1,v.value=2;const o=N.value.uid;await b(o,l)},ae=async()=>{try{Z.value=!0,I.value=await Be(d.onlineGames)}catch(l){ve.firebaseError(!0,l)}finally{Z.value=!1}},b=async(l,o)=>{try{const a=re(d.onlineGames);await Ue(a,{userId:l,opponentId:o,gameStatus:v.value,gameStatusActivator:L.value===0?l:o,activePlayer:A.value===0?l:o,dices:m.value,tiles:E.value,score:{[l]:S[0],[o]:S[1]}}),T.value=a.id,oe(!0)}catch(a){ve.firebaseError(!0,a)}},ge=l=>{T.value=l,x.value=1,oe()},oe=(l=!1)=>{var r;if(!T.value||!N.value)return;console.log("watchOnlineGame");const o=N.value.uid;let a=!0;(r=H.value)==null||r.call(H),H.value=$e(re(d.onlineGames,T.value),_=>{if(console.log("onSnapshot.1"),console.log("create",l),console.log("activePlayer.value",A.value),console.log("init",a),!(l||A.value===0&&!a)&&(console.log("onSnapshot.2"),a=!1,_.exists())){const O=_.data();console.log("data",O);const ye=O.userId===o;i.value=O.userId,R.value=ye?O.opponentId:O.userId,v.value=O.gameStatus,L.value=O.gameStatusActivator===o?0:1,A.value=O.activePlayer===o?0:1,m.value=O.dices,E.value=O.tiles,ye?(S[0]=O.score[O.userId],S[1]=O.score[O.opponentId]):(S[0]=O.score[O.opponentId],S[1]=O.score[O.userId])}})},z=async()=>{try{if(!T.value||!N.value||!R.value)return;console.log("updateOnlineGame");const l=N.value.uid;await Fe(re(d.onlineGames,T.value),{gameStatus:v.value,gameStatusActivator:L.value===0?l:R.value,activePlayer:A.value===0?l:R.value,dices:m.value,tiles:E.value,score:{[l]:S[0],[R.value]:S[1]}})}catch(l){ve.firebaseError(!0,l)}},Q=async()=>{try{if(!T.value)return;await Ge(re(d.onlineGames,T.value))}catch(l){ve.firebaseError(!0,l)}};Ie([v,F],()=>{x.value===1&&z()},{deep:!0}),Ie(v,l=>{l===7?ce():x.value!==1&&A.value===1&&te()});const w=l=>{if(!X.value(l))return;(v.value===2||v.value===5||v.value===6)&&m.value.forEach(a=>{a.selected=!1}),v.value=3;const o=c.diceRollSpeed*1e3;m.value.forEach(a=>{a.selected||(a.isRolling=!0,setTimeout(()=>{a.value=He(6),a.isRolling=!1,m.value.sort((r,_)=>r.value-_.value),!F.value&&v.value!==6&&t()&&n(l)},He(o,o/3)))}),J(Ye)},s=async()=>{for(;F.value;)await new Promise(l=>setTimeout(l,500));return!0},t=()=>{const l=m.value.filter(o=>!o.selected&&!q.value(o.value));return!l.length||cl(l)&&l.every(o=>o.value!==6)&&m.value.filter(o=>o.selected).every(o=>o.value!==6)},n=l=>{v.value=6,L.value=l??0,S[L.value].length?K.value=1:K.value=2,u(),E.value.length===0?v.value=7:y()},u=()=>{const l=S[A.value];if(l.length){const o=l.splice(l.length-1,1)[0];E.value.push(o),E.value.sort((a,r)=>a.displayValue-r.displayValue)}E.value.splice(E.value.length-1,1)},g=(l,o)=>{X.value(o)&&!F.value&&v.value===3&&!l.selected&&!q.value(l.value)&&(v.value=4,m.value.filter(a=>a.value===l.value).forEach(a=>{a.selected=!0}),J(Ae))},C=(l,o,a)=>{if(X.value(a)&&(v.value===3||v.value===4)){if(o){const r=S[A.value===0?1:0];r.splice(r.length-1,1)}else E.value=E.value.filter(r=>r.displayValue!==l.displayValue);S[A.value].push(l),J(Ae),E.value.length===0?v.value=7:(v.value=5,L.value=a??0,y())}},y=l=>{(A.value===1||v.value!==6||l)&&(A.value===0?setTimeout(()=>{A.value=1,setTimeout(()=>{v.value=2,L.value=0},1e3)},l?0:p.value*1e3*2):setTimeout(()=>{A.value=0},l?0:p.value*1e3*2))},te=async()=>{switch(v.value){case 2:{w(1);break}case 3:{await s(),setTimeout(()=>{const l=m.value.filter(a=>!a.selected),o=G.value(0);if(o&&k.value<o.displayValue)for(let a=6;a>=1;a--){const r=l.filter(_=>_.value===a&&!q.value(a));if(r.length){const _=r.length*(a===6?5:a);if(k.value+_===o.displayValue){g(r[0],1);return}}}for(let a=6;a>=1;a--){const r=m.value.find(_=>_.value===a);if(r&&!q.value(a)){g(r,1);return}}},p.value*1e3);break}case 4:{setTimeout(()=>{const l=G.value(0),o=m.value.filter(a=>!a.selected).length;if(!o||k.value>=30){console.log(o?"i am rich":"i can only pick a tile now");for(let a=k.value;a>=21;a--){const r=E.value.find(_=>_.displayValue===a);if(r){C(r,!1,1);return}}o&&w(1)}if(E.value.every(a=>a.displayValue>k.value)&&l&&l.displayValue>k.value)console.log("my score is too low"),w(1);else if(l&&l.displayValue===k.value)console.log("i can steal"),C(l,!0,1);else if(new Set(m.value.filter(a=>a.selected).map(a=>a.value)).size<=3)if(m.value.filter(a=>!a.selected).length<=2){console.log("there aren't that much dices left");const a=E.value.filter(r=>r.displayValue>=k.value-5&&r.displayValue<=k.value).sort((r,_)=>_.displayValue-r.displayValue);a.length?(console.log("i choose the highest score within 5 tiles"),C(a[0],!1,1)):(console.log("i choose to roll again"),w(1))}else console.log("i have nothing to worry about"),w(1);else if(!ne.value)console.log("i am worrying and have no worm yet"),w(1);else{console.log("if i can choose, i choose");const a=E.value.filter(r=>r.displayValue<=k.value).sort((r,_)=>_.displayValue-r.displayValue);a.length?(console.log("i choose the highest score"),C(a[0],!1,1)):(console.log("i choose to roll again"),w(1))}},p.value*1e3);break}default:console.log("DEFAULT",v.value)}},ce=()=>{const l=Y.value(0),o=Y.value(1);l>o?W.value=1:l===o&&Math.max(...S[0].map(a=>a.displayValue))>Math.max(...S[1].map(a=>a.displayValue))?W.value=2:W.value=3,(W.value===1||W.value===2)&&(ie(),J(De)),x.value===1&&Q()},ie=()=>{P({score:Y.value(0)})};return{collections:d,onlineGames:I,onlineGamesLoading:Z,onlineGameId:T,onlineGameCreatorId:i,unsubscribeOnlineGame:H,opponentId:R,gameType:x,gameStatus:v,gameStatusActivator:L,finishStatus:W,loseStatus:K,activePlayer:A,dices:m,tiles:E,score:S,robotSpeed:p,isRolling:F,hasWorm:ne,hasAlreadyChosen:q,canSelectAnyTile:me,canPlay:X,visibleTile:G,selectedDiceTotal:k,totalScore:Y,personalBest:$,highscorePosition:B,$reset:le,start:ue,startOnline:se,continueOnlineGame:ge,fetchOnlineGames:ae,roll:w,hasFinishedRolling:s,hasLostRound:t,loseTurn:n,popLastTile:u,selectDice:g,selectTile:C,passTurn:y,setPreviousHighscores:D,updateRainwormsHighscore:ie,sortHighscores:U}},{persist:{enabled:!0}}),Ve=()=>[{id:1,value:6,selected:!1,isRolling:!1},{id:2,value:6,selected:!1,isRolling:!1},{id:3,value:6,selected:!1,isRolling:!1},{id:4,value:6,selected:!1,isRolling:!1},{id:5,value:6,selected:!1,isRolling:!1},{id:6,value:6,selected:!1,isRolling:!1},{id:7,value:6,selected:!1,isRolling:!1},{id:8,value:6,selected:!1,isRolling:!1}],be=()=>[{displayValue:21,value:1},{displayValue:22,value:1},{displayValue:23,value:1},{displayValue:24,value:1},{displayValue:25,value:2},{displayValue:26,value:2},{displayValue:27,value:2},{displayValue:28,value:2},{displayValue:29,value:3},{displayValue:30,value:3},{displayValue:31,value:3},{displayValue:32,value:3},{displayValue:33,value:4},{displayValue:34,value:4},{displayValue:35,value:4},{displayValue:36,value:4}],fl=je({__name:"GameSettingsDialog",props:Ze({gameId:{}},{isOpen:{type:Boolean,required:!0},isOpenModifiers:{}}),emits:["update:isOpen"],setup(e){const c=e,f=qe(e,"isOpen"),$=he(),{useAudio:B,diceRollSpeed:N}=ee(he()),{robotSpeed:D}=ee(il()),{doAutocomplete:P}=ee(ll()),U=V(()=>{switch(c.gameId){case M.YAHTZEE:return"v5 (12-12-2024)";case M.RAINWORMS:return"v5 (12-12-2024)";case M.PATIENCE:return"v2 (16-12-2024)";case M.GUESS_THE_WORD:return"v2 (10-01-2025)"}});return Oe(()=>{$.$init(c.gameId)}),(d,p)=>(de(),fe(Le,{isOpen:f.value,title:"Game Settings",description:d.gameId?`Current version: ${U.value}`:"General settings",cancelText:"Close",onCancel:p[4]||(p[4]=I=>f.value=!1)},{default:Ke(()=>[Xe(_e,{name:"useAudio",label:"Audio",modelValue:j(B),"onUpdate:modelValue":p[0]||(p[0]=I=>pe(B)?B.value=I:null)},null,8,["modelValue"]),d.gameId===j(M).PATIENCE?(de(),fe(_e,{key:0,name:"useAutocomplete",label:"Patience autocomplete",modelValue:j(P),"onUpdate:modelValue":p[1]||(p[1]=I=>pe(P)?P.value=I:null)},null,8,["modelValue"])):Se("",!0),d.gameId===j(M).YAHTZEE||d.gameId===j(M).RAINWORMS?(de(),fe(Te,{key:1,name:"diceSpeed",label:"Dice rolling speed",modelValue:j(N),"onUpdate:modelValue":p[2]||(p[2]=I=>pe(N)?N.value=I:null),options:[{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:1.5,label:"1.5 seconds"},{value:2,label:"2 seconds"},{value:3,label:"3 seconds"},{value:4,label:"4 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])):Se("",!0),d.gameId===j(M).RAINWORMS?(de(),fe(Te,{key:2,name:"robotSpeed",label:"Rainworms robot speed",modelValue:j(D),"onUpdate:modelValue":p[3]||(p[3]=I=>pe(D)?D.value=I:null),options:[{value:.25,label:"0.25 seconds"},{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:3,label:"3 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])):Se("",!0)]),_:1},8,["isOpen","description"]))}});export{ze as C,Qe as D,nl as F,ol as G,tl as L,ul as P,fl as _,al as a,ll as b,Je as c,il as u};
