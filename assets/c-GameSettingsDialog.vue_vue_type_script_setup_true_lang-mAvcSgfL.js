import{_ as G,a as ee}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-JQE6dSwt.js";import{_ as U}from"./c-SelectField.vue_vue_type_script_setup_true_lang-Bu9S1e-e.js";import{d as le,aG as K,aH as Z,s as k,r as g,a as ae,c as y,aK as Y,aI as A,aL as se,aM as q,aJ as oe,e as ue,cx as ie,l as te,q as ne,D as ve,n as L,k as w,ab as C}from"../bundle.js";var ce=(a=>(a[a.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",a[a.HAS_STARTED=1]="HAS_STARTED",a[a.HAS_THROWN_DICES=2]="HAS_THROWN_DICES",a[a.HAS_CHOSEN_DICES=3]="HAS_CHOSEN_DICES",a[a.HAS_CHOSEN_TILE=4]="HAS_CHOSEN_TILE",a[a.HAS_LOST=5]="HAS_LOST",a[a.HAS_FINISHED=6]="HAS_FINISHED",a))(ce||{}),re=(a=>(a[a.NONE=0]="NONE",a[a.HAS_LOST_TILE=1]="HAS_LOST_TILE",a[a.HAS_LOST_NOTHING=2]="HAS_LOST_NOTHING",a))(re||{}),de=(a=>(a[a.NONE=0]="NONE",a[a.WINNER_HIGHEST_SCORE=1]="WINNER_HIGHEST_SCORE",a[a.WINNER_HIGHEST_TILE=2]="WINNER_HIGHEST_TILE",a[a.LOSER=3]="LOSER",a))(de||{}),fe=(a=>(a[a.PLAYER=0]="PLAYER",a[a.ROBOT=1]="ROBOT",a))(fe||{});const pe=a=>{for(let f=1;f<=6;f++)if(a.every(S=>S.value===f))return!0;return!1},j=()=>({0:[],1:[]}),ge=le("rainwormsStore",()=>{const a=K(Z.RAINWORMS)(),{personalBest:f,highscorePosition:S}=k(a),{setPreviousHighscores:h,updateHighscores:V,sortHighscores:W}=a,n=g(1),o=g(0),m=g(0),T=g(0),R=g(0),r=g(0),i=g(z()),t=g(J()),d=ae(j()),H=y(()=>i.value.some(e=>e.isRolling)),x=y(()=>i.value.filter(e=>e.selected).some(e=>e.value===6)),E=y(()=>e=>i.value.some(s=>s.value===e&&s.selected)),F=y(()=>e=>t.value.some(s=>s.displayValue<=e)),O=y(()=>e=>r.value===(e??0)),b=y(()=>e=>{const s=d[e??0];return s.length?s[s.length-1]:null}),c=y(()=>{let e=0;return i.value.filter(s=>s.selected).forEach(s=>{e+=s.value===6?5:s.value}),e}),N=y(()=>e=>{let s=0;return d[e].forEach(l=>{s+=l.value}),s}),Q=()=>{o.value=0,m.value=0,T.value=0,R.value=0,r.value=0,i.value=z(),t.value=J(),Object.assign(d,j()),h()},X=()=>{o.value=1},p=e=>{if(!O.value(e))return;(o.value===1||o.value===4||o.value===5)&&i.value.forEach(l=>{l.selected=!1}),o.value=2;const s=a.diceRollSpeed*1e3;i.value.forEach(l=>{l.selected||(l.isRolling=!0,setTimeout(()=>{l.value=Y(6),l.isRolling=!1,i.value.sort((u,v)=>u.value-v.value),!H.value&&o.value!==5&&M()&&P(e)},Y(s,s/3)))}),A(se)},B=async()=>{for(;H.value;)await new Promise(e=>setTimeout(e,500));return!0},M=()=>{const e=i.value.filter(s=>!s.selected&&!E.value(s.value));return!e.length||pe(e)&&e.every(s=>s.value!==6)},P=e=>{o.value=5,m.value=e??0,d[m.value].length?R.value=1:R.value=2,$(),t.value.length===0?o.value=6:D()},$=()=>{const e=d[r.value];if(e.length){const s=e.splice(e.length-1,1)[0];t.value.push(s),t.value.sort((l,u)=>l.displayValue-u.displayValue)}t.value.splice(t.value.length-1,1)},I=(e,s)=>{O.value(s)&&!H.value&&o.value===2&&!e.selected&&!E.value(e.value)&&(o.value=3,i.value.filter(l=>l.value===e.value).forEach(l=>{l.selected=!0}),A(q))},_=(e,s,l)=>{if(O.value(l)&&(o.value===2||o.value===3)){if(o.value=4,m.value=l??0,s){const u=d[r.value===0?1:0];u.splice(u.length-1,1)}else t.value=t.value.filter(u=>u.displayValue!==e.displayValue);d[r.value].push(e),A(q),t.value.length===0?o.value=6:D()}},D=e=>{(r.value===1||o.value!==5||e)&&(r.value===0?setTimeout(()=>{r.value=1,setTimeout(()=>{o.value=1,m.value=0},1e3)},e?0:n.value*1e3*2):setTimeout(()=>{r.value=0},e?0:n.value*1e3*2))};return{gameStatus:o,gameStatusActivator:m,finishStatus:T,loseStatus:R,activePlayer:r,dices:i,tiles:t,score:d,robotSpeed:n,isRolling:H,hasWorm:x,hasAlreadyChosen:E,canSelectAnyTile:F,canPlay:O,visibleTile:b,selectedDiceTotal:c,totalScore:N,personalBest:f,highscorePosition:S,$reset:Q,start:X,roll:p,hasFinishedRolling:B,hasLostRound:M,loseTurn:P,popLastTile:$,selectDice:I,selectTile:_,passTurn:D,playRobot:async()=>{switch(o.value){case 1:{p(1);break}case 2:{await B(),setTimeout(()=>{const e=i.value.filter(l=>!l.selected),s=b.value(0);if(s&&c.value<s.displayValue)for(let l=6;l>=1;l--){const u=e.filter(v=>v.value===l&&!E.value(l));if(u.length){const v=u.length*(l===6?5:l);if(c.value+v===s.displayValue){I(u[0],1);return}}}for(let l=6;l>=1;l--){const u=i.value.find(v=>v.value===l);if(u&&!E.value(l)){I(u,1);return}}},n.value*1e3);break}case 3:{setTimeout(()=>{const e=b.value(0),s=i.value.filter(l=>!l.selected).length;if(!s||c.value>=30){console.log(s?"i am rich":"i can only pick a tile now");for(let l=c.value;l>=21;l--){const u=t.value.find(v=>v.displayValue===l);if(u){_(u,!1,1);return}}s&&p(1)}if(t.value.every(l=>l.displayValue>c.value)&&e&&e.displayValue>c.value)console.log("my score is too low"),p(1);else if(e&&e.displayValue===c.value)console.log("i can steal"),_(e,!0,1);else if(new Set(i.value.filter(l=>l.selected).map(l=>l.value)).size<=3)if(i.value.filter(l=>!l.selected).length<=2){console.log("there aren't that much dices left");const l=t.value.filter(u=>u.displayValue>=c.value-5&&u.displayValue<=c.value).sort((u,v)=>v.displayValue-u.displayValue);l.length?(console.log("i choose the highest score within 5 tiles"),_(l[0],!1,1)):(console.log("i choose to roll again"),p(1))}else console.log("i have nothing to worry about"),p(1);else if(!x.value)console.log("i am worrying and have no worm yet"),p(1);else{console.log("if i can choose, i choose");const l=t.value.filter(u=>u.displayValue<=c.value).sort((u,v)=>v.displayValue-u.displayValue);l.length?(console.log("i choose the highest score"),_(l[0],!1,1)):(console.log("i choose to roll again"),p(1))}},n.value*1e3);break}default:console.log("DEFAULT",o.value)}},checkFinishStatus:()=>{const e=N.value(0),s=N.value(1);e>s?T.value=1:e===s&&Math.max(...d[0].map(l=>l.displayValue))>Math.max(...d[1].map(l=>l.displayValue))?T.value=2:T.value=3,(T.value===1||T.value===2)&&(V(e),A(oe))},setPreviousHighscores:h,updateHighscores:V,sortHighscores:W}},{persist:{enabled:!0}}),z=()=>[{id:1,value:6,selected:!1,isRolling:!1},{id:2,value:6,selected:!1,isRolling:!1},{id:3,value:6,selected:!1,isRolling:!1},{id:4,value:6,selected:!1,isRolling:!1},{id:5,value:6,selected:!1,isRolling:!1},{id:6,value:6,selected:!1,isRolling:!1},{id:7,value:6,selected:!1,isRolling:!1},{id:8,value:6,selected:!1,isRolling:!1}],J=()=>[{displayValue:21,value:1},{displayValue:22,value:1},{displayValue:23,value:1},{displayValue:24,value:1},{displayValue:25,value:2},{displayValue:26,value:2},{displayValue:27,value:2},{displayValue:28,value:2},{displayValue:29,value:3},{displayValue:30,value:3},{displayValue:31,value:3},{displayValue:32,value:3},{displayValue:33,value:4},{displayValue:34,value:4},{displayValue:35,value:4},{displayValue:36,value:4}],me=ue({__name:"GameSettingsDialog",props:{isOpen:{type:Boolean,required:!0},isOpenModifiers:{}},emits:["update:isOpen"],setup(a){const f=ie(a,"isOpen"),{useAudio:S,diceRollSpeed:h}=k(K(Z.YAHTZEE)()),{robotSpeed:V}=k(ge());return(W,n)=>(te(),ne(ee,{isOpen:f.value,title:"Game Settings",description:"Current version: v5 (12-12-2024)",cancelText:"Close",onCancel:n[3]||(n[3]=o=>f.value=!1)},{default:ve(()=>[L(G,{name:"useAudio",label:"Audio",modelValue:w(S),"onUpdate:modelValue":n[0]||(n[0]=o=>C(S)?S.value=o:null)},null,8,["modelValue"]),L(U,{name:"diceSpeed",label:"Dice rolling speed",modelValue:w(h),"onUpdate:modelValue":n[1]||(n[1]=o=>C(h)?h.value=o:null),options:[{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:1.5,label:"1.5 seconds"},{value:2,label:"2 seconds"},{value:3,label:"3 seconds"},{value:4,label:"4 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"]),L(U,{name:"robotSpeed",label:"Rainworms robot speed",modelValue:w(V),"onUpdate:modelValue":n[2]||(n[2]=o=>C(V)?V.value=o:null),options:[{value:.25,label:"0.25 seconds"},{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:3,label:"3 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])]),_:1},8,["isOpen"]))}});export{de as F,ce as G,re as L,fe as P,me as _,ge as u};