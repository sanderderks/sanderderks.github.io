import{_ as be,a as Be}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-BXzLNpSe.js";import{_ as Ce}from"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import{d as xe,aO as Ee,s as te,r as d,a as Ue,c as R,o as Ne,aP as x,M as ie,aQ as ce,cV as Fe,aR as $e,aU as Te,cW as Ye,h as je,A as Ze,cX as qe,cY as Ve,L as w,cZ as Ie,ai as ue,al as Ke,c_ as Xe,c$ as ze,d0 as Qe,aS as Pe,aT as Je,e as el,bX as ll,cD as al,l as me,q as ge,D as sl,n as tl,k as Q,ad as Se,t as Oe}from"../bundle.js";var ol=(l=>(l.HEARTS="hearts",l.SPADES="spades",l.DIAMONDS="diamonds",l.CLUBS="clubs",l))(ol||{});const _e={hearts:{label:"Hearts",color:"red"},spades:{label:"Spades",color:"black"},diamonds:{label:"Diamonds",color:"red"},clubs:{label:"Clubs",color:"black"}};var nl=(l=>(l.STOCK_CLOSED="stock_closed",l.STOCK_OPEN="stock_open",l.PILE1="pile1",l.PILE2="pile2",l.PILE3="pile3",l.PILE4="pile4",l.PILE5="pile5",l.PILE6="pile6",l.PILE7="pile7",l.HEARTS="hearts",l.SPADES="spades",l.DIAMONDS="diamonds",l.CLUBS="clubs",l))(nl||{}),ul=(l=>(l[l.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",l[l.HAS_STARTED=1]="HAS_STARTED",l[l.HAS_FINISHED=2]="HAS_FINISHED",l))(ul||{});const il={easy:.5,hard:1},De=()=>{const l=rl();return Fe(l),{pile1:l.splice(0,1).map(i=>({...i,deck:"pile1"})),pile2:l.splice(0,2).map((i,f)=>f<1?{...i,hidden:!0,deck:"pile2"}:{...i,deck:"pile2"}),pile3:l.splice(0,3).map((i,f)=>f<2?{...i,hidden:!0,deck:"pile3"}:{...i,deck:"pile3"}),pile4:l.splice(0,4).map((i,f)=>f<3?{...i,hidden:!0,deck:"pile4"}:{...i,deck:"pile4"}),pile5:l.splice(0,5).map((i,f)=>f<4?{...i,hidden:!0,deck:"pile5"}:{...i,deck:"pile5"}),pile6:l.splice(0,6).map((i,f)=>f<5?{...i,hidden:!0,deck:"pile6"}:{...i,deck:"pile6"}),pile7:l.splice(0,7).map((i,f)=>f<6?{...i,hidden:!0,deck:"pile7"}:{...i,deck:"pile7"}),stock_closed:l.map(i=>({...i,hidden:!0,deck:"stock_closed"})),stock_open:[],hearts:[],spades:[],diamonds:[],clubs:[]}},cl=xe("patienceStore",()=>{const l=Ee(),{personalBest:i,highscorePosition:f}=te(l),{setPreviousHighscores:G,updateHighscores:W,sortHighscores:J}=l,I=d("hard"),P=d(0),B=d(0),g=d(0),A=d(0),T=d(0),D=d(),F=d(!0),r=Ue(De()),q=R(()=>il[I.value]),h=R(()=>Object.keys(r).flatMap(a=>r[a])),ee=1e3,C=10,Y=10,le=R(()=>{const a=g.value%10===0?g.value:Math.floor(g.value/10)*10,o=B.value*C,n=T.value*C,u=a+o+n,m=A.value*Y;return Math.max(0,ee-(u-m))}),k=R(()=>{const a=Math.floor(g.value/60),o=g.value%60;return`${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`}),j=R(()=>r.hearts.length===13&&r.spades.length===13&&r.diamonds.length===13&&r.clubs.length===13);Ne(()=>{l.$init(x.PATIENCE),g.value&&P.value===1&&U()}),ie(j,a=>{a&&P.value!==2&&(K(),P.value=2,pe(),ce($e))});const v=()=>{K(),B.value=0,g.value=0,A.value=0,T.value=0,P.value=0,Object.assign(r,De()),l.setPreviousHighscores()},M=()=>{g.value=0,U(),P.value=1,setTimeout(()=>{re()},500)},U=()=>{D.value&&K(),D.value=setInterval(()=>{g.value++},1e3)},K=()=>{clearInterval(D.value)},O=()=>{const a=r.stock_open;a.length&&(a.reverse(),b(a[0],!1,o=>{o.deck="stock_closed",o.hidden=!0,r.stock_closed.push(o)}),a.splice(0,a.length),H(1))},p=a=>{const o=a.deck,n=h.value.filter(u=>u.selected);if(o==="stock_closed"){const u=r.stock_closed,m=u.indexOf(a);if(m===u.length-1){const Z=I.value==="hard"?m-2:m,N=Z<0?0:Z,L=u.filter((de,he)=>he>=N);ae(),oe(L,"stock_open",de=>{de.hidden=!1}),H(0)}}else if(o==="stock_open"){const u=r.stock_open;u.indexOf(a)===u.length-1&&(a.selected=!a.selected,n.length&&b(n[0],!1))}else if(n.length){const u=n[0];u===a?b(a,!1):se(o)&&V(u,a)?a.value===u.value+1&&a.deck!==u.deck&&(oe(n,o),u.deck==="stock_open"?H(2):H(4)):n.length===1&&ve(o)&&ne(u,a)&&a.value===u.value-1&&($(u,o),H(3),u.hasBeenHome=!0)}else b(a,!0)},S=a=>{const o=h.value.filter(n=>n.selected);if(o.length){const n=o[0],u=n.deck;n.value===13&&(oe(o,a),u==="stock_open"?H(2):se(n.deck)&&r[n.deck].every(m=>!m.hidden)?H(5):H(4))}},E=a=>{const o=h.value.filter(n=>n.selected);if(o.length===1){const n=o[0],u=n.type;!r[a].length&&u===a&&n.value===1&&($(n,a),H(3))}},b=(a,o,n)=>{const u=r[a.deck],m=u.indexOf(a);u.filter((N,L)=>L>=m).forEach(N=>{N.selected=o,n==null||n(N)})},ae=()=>{h.value.forEach(a=>{a.selected=!1})},$=(a,o)=>{const n=a.deck,u=r[n].indexOf(a);a.deck=o,a.selected=!1,r[o].push(a),r[n].splice(u,1),(se(n)||n==="stock_open")&&z(n)},oe=(a,o,n)=>{const u=a[0],m=u.deck,Z=r[m].indexOf(u);b(u,!1,N=>{N.deck=o,n==null||n(N),r[o].push(N)}),r[m].splice(Z,a.length),ve(m)||z(m!=="stock_closed"?m:o)},X=a=>{if(!F.value)return!0;const o=r[a.type],n=o.length?o[o.length-1].value:0;if(a.value===n+1){const u=["hearts","spades","diamonds","clubs"],m=n<=1||u.every(Z=>{const N=r[Z];return(N.length?N[N.length-1].value:0)>=n});if(n===0||m)return $(a,a.type),a.hasBeenHome=!0,H(3),!0}return!1},re=()=>{if(F.value)for(const a of["stock_open","pile1","pile2","pile3","pile4","pile5","pile6","pile7"]){const o=r[a];if(o.length&&X(o[o.length-1]))return}},z=a=>{const o=r[a];if(o.length){const n=o[o.length-1],u=n.deck;n.hidden=!1,setTimeout(()=>{n.deck===u&&(X(n)||re())},500)}else setTimeout(()=>{re()},500)},H=a=>{switch(a!==5&&B.value++,a){case 0:{T.value+=2*q.value;break}case 1:{T.value+=5*q.value;break}case 2:{A.value+=10*q.value;break}case 3:{A.value+=20*q.value;break}}ce(Te)},V=(a,o)=>a.color!==o.color,ne=(a,o)=>a.type===o.type,se=a=>["pile1","pile2","pile3","pile4","pile5","pile6","pile7"].includes(a),ve=a=>["hearts","spades","diamonds","clubs"].includes(a),pe=()=>{W({difficulty:I.value,score:le.value,bonus:A.value,time:g.value,turns:B.value,penalty:T.value})};return{difficulty:I,gameStatus:P,score:le,turns:B,time:g,bonus:A,penalty:T,cards:r,doAutocomplete:F,allCards:h,formattedTime:k,personalBest:i,highscorePosition:f,$reset:v,start:M,shuffle:O,selectCard:p,selectEmptyDeck:S,selectFinalDeck:E,deselectAllCards:ae,isPlayDeck:se,isFinalDeck:ve,setPreviousHighscores:G,updatePatienceHighscore:pe,sortHighscores:J}},{persist:{enabled:!0}}),rl=()=>Object.keys(_e).flatMap(l=>{const i=l,f=[];for(let G=0;G<13;G++){const W={type:i,label:_e[i].label,color:_e[i].color,value:G+1,hidden:!1,selected:!1,hasBeenHome:!1};f.push(W)}return f});var vl=(l=>(l[l.SOLO=0]="SOLO",l[l.ONLINE=1]="ONLINE",l))(vl||{}),dl=(l=>(l[l.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",l[l.FINDING_OPPONENT=1]="FINDING_OPPONENT",l[l.HAS_STARTED=2]="HAS_STARTED",l[l.HAS_THROWN_DICES=3]="HAS_THROWN_DICES",l[l.HAS_CHOSEN_DICES=4]="HAS_CHOSEN_DICES",l[l.HAS_CHOSEN_TILE=5]="HAS_CHOSEN_TILE",l[l.HAS_LOST=6]="HAS_LOST",l[l.HAS_FINISHED=7]="HAS_FINISHED",l))(dl||{}),fl=(l=>(l[l.NONE=0]="NONE",l[l.HAS_LOST_TILE=1]="HAS_LOST_TILE",l[l.HAS_LOST_NOTHING=2]="HAS_LOST_NOTHING",l))(fl||{}),pl=(l=>(l[l.NONE=0]="NONE",l[l.WINNER_HIGHEST_SCORE=1]="WINNER_HIGHEST_SCORE",l[l.WINNER_HIGHEST_TILE=2]="WINNER_HIGHEST_TILE",l[l.LOSER=3]="LOSER",l))(pl||{}),hl=(l=>(l[l.PLAYER=0]="PLAYER",l[l.OPPONENT=1]="OPPONENT",l))(hl||{});const ml=l=>{for(let i=1;i<=6;i++)if(l.every(f=>f.value===i))return!0;return!1},Le=()=>({0:[],1:[]}),gl=xe("rainwormsStore",()=>{const l=Ye(),i=Ee(),f=je(),G=Ze(),{personalBest:W,highscorePosition:J}=te(i),{firebaseUser:I}=te(f),{combinedUsers:P,onlineUsers:B}=te(G),{setPreviousHighscores:g,updateHighscores:A,sortHighscores:T}=i,D={onlineGames:qe(l,Ve.GAME_DATA,x.RAINWORMS,Ve.ONLINE_GAMES)},F=d(1),r=d([]),q=d(!1),h=d(null),ee=d(null),C=d(null),Y=d(null),le=d(null),k=d(null),j=d(0),v=d(0),M=d(0),U=d(0),K=d(0),O=d(0),p=d(we()),S=d(Me()),E=Ue(Le()),b=R(()=>{var e;return((e=I.value)==null?void 0:e.uid)===ee.value}),ae=R(()=>{var e;return((e=P.value.find(s=>s.id===C.value))==null?void 0:e.displayName)??"unknown"}),$=R(()=>p.value.some(e=>e.isRolling)),oe=R(()=>p.value.filter(e=>e.selected).some(e=>e.value===6)),X=R(()=>e=>p.value.some(s=>s.value===e&&s.selected)),re=R(()=>e=>S.value.some(s=>s.displayValue<=e)),z=R(()=>e=>O.value===(e??0)),H=R(()=>e=>{const s=E[e??0];return s.length?s[s.length-1]:null}),V=R(()=>{let e=0;return p.value.filter(s=>s.selected).forEach(s=>{e+=s.value===6?5:s.value}),e}),ne=R(()=>e=>{let s=0;return E[e].forEach(t=>{s+=t.value}),s});Ne(()=>{i.$init(x.RAINWORMS),h.value&&u(),$.value&&p.value.forEach(e=>{e.isRolling=!1})}),ie(v,e=>{e===7?We():j.value===0&&O.value===1&&Ge()}),ie([v,O,$],()=>{j.value===1&&m()},{deep:!0}),ie(Y,(e,s)=>{!h.value||s===null||(e?w.success(`${ae.value} joined the game`):w.update(`${ae.value} became inactive`))}),ie(()=>le.value,async(e,s)=>{var c;if(!h.value||!e||!s||e.length===s.length)return;const t=e[e.length-1];if(t.userId===((c=I.value)==null?void 0:c.uid))try{await Ie(ue(D.onlineGames,h.value),{gameChat:e})}catch(_){w.firebaseError(!0,_)}else w.info(ae.value,t.message)}),ie(B,e=>{Y.value&&!e.find(s=>s.id===C.value)&&(Y.value=!1,m())});const se=()=>{h.value=null,ee.value=null,C.value=null,Y.value=null,le.value=null,j.value=0,v.value=0,M.value=0,U.value=0,K.value=0,O.value=0,p.value=we(),S.value=Me(),Object.assign(E,Le()),g()},ve=()=>{j.value=0,v.value=2},pe=async e=>{if(!I.value)return;ee.value=I.value.uid,C.value=e,j.value=1,v.value=2;const s=I.value.uid;await o(s,e)},a=async()=>{try{q.value=!0,r.value=await ze(D.onlineGames)}catch(e){w.firebaseError(!0,e)}finally{q.value=!1}},o=async(e,s)=>{try{const t=ue(D.onlineGames);await Qe(t,{creatorId:e,creatorActive:!0,opponentId:s,opponentActive:!1,gameChat:[],gameStatus:v.value,gameStatusActivator:M.value===0?e:s,activePlayer:O.value===0?e:s,dices:p.value,tiles:S.value,score:{[e]:E[0],[s]:E[1]}}),h.value=t.id,u(!0),w.success("The game has been created")}catch(t){w.firebaseError(!0,t)}},n=e=>{h.value=e,j.value=1,u(),w.success("You joined the game")},u=(e=!1)=>{var c;if(!h.value||!I.value)return;const s=I.value.uid;let t=!0;(c=k.value)==null||c.call(k),k.value=Ke(ue(D.onlineGames,h.value),async _=>{if(_.exists()){const y=_.data();if(t&&(ee.value=y.creatorId,C.value=b.value?y.opponentId:y.creatorId),Y.value=b.value?y.opponentActive:y.creatorActive,le.value=y.gameChat,e||O.value===0&&!t)return;t=!1,v.value=y.gameStatus,M.value=y.gameStatusActivator===s?0:1,O.value=y.activePlayer===s?0:1,p.value=y.dices,S.value=y.tiles,b.value?(E[0]=y.score[y.creatorId],E[1]=y.score[y.opponentId]):(E[0]=y.score[y.opponentId],E[1]=y.score[y.creatorId])}else await N(),se(),w.update("The game has been deleted by the creator")})},m=async()=>{try{if(!h.value||!I.value||!C.value)return;const e=I.value.uid;await Ie(ue(D.onlineGames,h.value),{[b.value?"creatorActive":"opponentActive"]:!0,[b.value?"opponentActive":"creatorActive"]:Y.value,gameStatus:v.value,gameStatusActivator:M.value===0?e:C.value,activePlayer:O.value===0?e:C.value,dices:p.value,tiles:S.value,score:{[e]:E[0],[C.value]:E[1]}})}catch(e){w.firebaseError(!0,e)}},Z=async()=>{var e;try{if(!h.value)return;(e=k.value)==null||e.call(k),k.value=null,await Ie(ue(D.onlineGames,h.value),{[b.value?"creatorActive":"opponentActive"]:!1})}catch(s){w.firebaseError(!0,s)}},N=async()=>{var e;try{if(!h.value||!b.value)return;(e=k.value)==null||e.call(k),k.value=null,await Xe(ue(D.onlineGames,h.value))}catch(s){w.firebaseError(!0,s)}},L=e=>{if(!z.value(e))return;(v.value===2||v.value===5||v.value===6)&&p.value.forEach(t=>{t.selected=!1}),v.value=3;const s=i.diceRollSpeed*1e3;p.value.forEach(t=>{t.selected||(t.isRolling=!0,setTimeout(()=>{t.value=Pe(6),t.isRolling=!1,p.value.sort((c,_)=>c.value-_.value),!$.value&&v.value!==6&&he()&&Re(e)},Pe(s,s/3)))}),ce(Je)},de=async()=>{for(;$.value;)await new Promise(e=>setTimeout(e,500));return!0},he=()=>{const e=p.value.filter(s=>!s.selected&&!X.value(s.value));return!e.length||ml(e)&&e.every(s=>s.value!==6)&&p.value.filter(s=>s.selected).every(s=>s.value!==6)},Re=e=>{v.value=6,M.value=e??0,E[M.value].length?K.value=1:K.value=2,He(),S.value.length===0?v.value=7:ye()},He=()=>{const e=E[O.value];if(e.length){const s=e.splice(e.length-1,1)[0];S.value.push(s),S.value.sort((t,c)=>t.displayValue-c.displayValue)}S.value.splice(S.value.length-1,1)},Ae=(e,s)=>{z.value(s)&&!$.value&&v.value===3&&!e.selected&&!X.value(e.value)&&(v.value=4,p.value.filter(t=>t.value===e.value).forEach(t=>{t.selected=!0}),ce(Te))},fe=(e,s,t)=>{if(z.value(t)&&(v.value===3||v.value===4)){if(s){const c=E[O.value===0?1:0];c.splice(c.length-1,1)}else S.value=S.value.filter(c=>c.displayValue!==e.displayValue);E[O.value].push(e),ce(Te),S.value.length===0?v.value=7:(v.value=5,M.value=t??0,ye())}},ye=e=>{(O.value===1||v.value!==6||e)&&(O.value===0?setTimeout(()=>{O.value=1,setTimeout(()=>{v.value=2,M.value=0},1e3)},e?0:F.value*1e3*2):setTimeout(()=>{O.value=0},e?0:F.value*1e3*2))},Ge=async()=>{switch(v.value){case 2:{L(1);break}case 3:{await de(),setTimeout(()=>{const e=p.value.filter(t=>!t.selected),s=H.value(0);if(s&&V.value<s.displayValue)for(let t=6;t>=1;t--){const c=e.filter(_=>_.value===t&&!X.value(t));if(c.length){const _=c.length*(t===6?5:t);if(V.value+_===s.displayValue){Ae(c[0],1);return}}}for(let t=6;t>=1;t--){const c=p.value.find(_=>_.value===t);if(c&&!X.value(t)){Ae(c,1);return}}},F.value*1e3);break}case 4:{setTimeout(()=>{const e=H.value(0),s=p.value.filter(t=>!t.selected).length;if(!s||V.value>=30){console.log(s?"i am rich":"i can only pick a tile now");for(let t=V.value;t>=21;t--){const c=S.value.find(_=>_.displayValue===t);if(c){fe(c,!1,1);return}}s&&L(1)}if(S.value.every(t=>t.displayValue>V.value)&&e&&e.displayValue>V.value)console.log("my score is too low"),L(1);else if(e&&e.displayValue===V.value)console.log("i can steal"),fe(e,!0,1);else if(new Set(p.value.filter(t=>t.selected).map(t=>t.value)).size<=3)if(p.value.filter(t=>!t.selected).length<=2){console.log("there aren't that much dices left");const t=S.value.filter(c=>c.displayValue>=V.value-5&&c.displayValue<=V.value).sort((c,_)=>_.displayValue-c.displayValue);t.length?(console.log("i choose the highest score within 5 tiles"),fe(t[0],!1,1)):(console.log("i choose to roll again"),L(1))}else console.log("i have nothing to worry about"),L(1);else if(!oe.value)console.log("i am worrying and have no worm yet"),L(1);else{console.log("if i can choose, i choose");const t=S.value.filter(c=>c.displayValue<=V.value).sort((c,_)=>_.displayValue-c.displayValue);t.length?(console.log("i choose the highest score"),fe(t[0],!1,1)):(console.log("i choose to roll again"),L(1))}},F.value*1e3);break}default:console.log("DEFAULT",v.value)}},We=()=>{const e=ne.value(0),s=ne.value(1);e>s?U.value=1:e===s&&Math.max(...E[0].map(t=>t.displayValue))>Math.max(...E[1].map(t=>t.displayValue))?U.value=2:U.value=3,(U.value===1||U.value===2)&&(ke(),ce($e))},ke=()=>{A({score:ne.value(0)})};return{collections:D,onlineGames:r,onlineGamesLoading:q,onlineGameId:h,onlineGameCreatorId:ee,onlineGameOpponentId:C,onlineGameOpponentName:ae,onlineGameOpponentActive:Y,onlineGameChat:le,gameType:j,gameStatus:v,gameStatusActivator:M,finishStatus:U,loseStatus:K,activePlayer:O,dices:p,tiles:S,score:E,robotSpeed:F,isOnlineGameOwner:b,isRolling:$,hasWorm:oe,hasAlreadyChosen:X,canSelectAnyTile:re,canPlay:z,visibleTile:H,selectedDiceTotal:V,totalScore:ne,personalBest:W,highscorePosition:J,$reset:se,start:ve,startOnlineGame:pe,fetchOnlineGames:a,continueOnlineGame:n,leaveOnlineGame:Z,deleteOnlineGame:N,roll:L,hasFinishedRolling:de,hasLostRound:he,loseTurn:Re,popLastTile:He,selectDice:Ae,selectTile:fe,passTurn:ye,setPreviousHighscores:g,updateRainwormsHighscore:ke,sortHighscores:T}},{persist:{enabled:!0}}),we=()=>[{id:1,value:6,selected:!1,isRolling:!1},{id:2,value:6,selected:!1,isRolling:!1},{id:3,value:6,selected:!1,isRolling:!1},{id:4,value:6,selected:!1,isRolling:!1},{id:5,value:6,selected:!1,isRolling:!1},{id:6,value:6,selected:!1,isRolling:!1},{id:7,value:6,selected:!1,isRolling:!1},{id:8,value:6,selected:!1,isRolling:!1}],Me=()=>[{displayValue:21,value:1},{displayValue:22,value:1},{displayValue:23,value:1},{displayValue:24,value:1},{displayValue:25,value:2},{displayValue:26,value:2},{displayValue:27,value:2},{displayValue:28,value:2},{displayValue:29,value:3},{displayValue:30,value:3},{displayValue:31,value:3},{displayValue:32,value:3},{displayValue:33,value:4},{displayValue:34,value:4},{displayValue:35,value:4},{displayValue:36,value:4}],yl=el({__name:"GameSettingsDialog",props:ll({gameId:{}},{isOpen:{type:Boolean,required:!0},isOpenModifiers:{}}),emits:["update:isOpen"],setup(l){const i=l,f=al(l,"isOpen"),G=Ee(),{useAudio:W,diceRollSpeed:J}=te(Ee()),{robotSpeed:I}=te(gl()),{doAutocomplete:P}=te(cl()),B=R(()=>{switch(i.gameId){case x.YAHTZEE:return"v5 (12-12-2024)";case x.RAINWORMS:return"v5 (12-12-2024)";case x.PATIENCE:return"v2 (16-12-2024)";case x.GUESS_THE_WORD:return"v2 (10-01-2025)"}});return Ne(()=>{G.$init(i.gameId)}),(g,A)=>(me(),ge(Be,{isOpen:f.value,title:"Game Settings",description:g.gameId?`Current version: ${B.value}`:"General settings",cancelText:"Close",onCancel:A[4]||(A[4]=T=>f.value=!1)},{default:sl(()=>[tl(be,{name:"useAudio",label:"Audio",modelValue:Q(W),"onUpdate:modelValue":A[0]||(A[0]=T=>Se(W)?W.value=T:null)},null,8,["modelValue"]),g.gameId===Q(x).PATIENCE?(me(),ge(be,{key:0,name:"useAutocomplete",label:"Patience autocomplete",modelValue:Q(P),"onUpdate:modelValue":A[1]||(A[1]=T=>Se(P)?P.value=T:null)},null,8,["modelValue"])):Oe("",!0),g.gameId===Q(x).YAHTZEE||g.gameId===Q(x).RAINWORMS?(me(),ge(Ce,{key:1,name:"diceSpeed",label:"Dice rolling speed",modelValue:Q(J),"onUpdate:modelValue":A[2]||(A[2]=T=>Se(J)?J.value=T:null),options:[{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:1.5,label:"1.5 seconds"},{value:2,label:"2 seconds"},{value:3,label:"3 seconds"},{value:4,label:"4 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])):Oe("",!0),g.gameId===Q(x).RAINWORMS?(me(),ge(Ce,{key:2,name:"robotSpeed",label:"Rainworms robot speed",modelValue:Q(I),"onUpdate:modelValue":A[3]||(A[3]=T=>Se(I)?I.value=T:null),options:[{value:.25,label:"0.25 seconds"},{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:3,label:"3 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])):Oe("",!0)]),_:1},8,["isOpen","description"]))}});export{ol as C,nl as D,pl as F,vl as G,fl as L,hl as P,yl as _,dl as a,cl as b,ul as c,gl as u};
