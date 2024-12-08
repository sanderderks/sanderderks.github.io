import{_ as X,a as Z}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-Bl_d9scF.js";import{_ as B}from"./c-SelectField.vue_vue_type_script_setup_true_lang-DPHKk-JN.js";import{bO as ee,cF as G,aS as S,aQ as le,q as p,cG as R,cH as P,cI as N,cJ as ae,cK as x,M as se,bo as oe,bU as U,aK as ue,s as ie,bH as te,I as b,bi as I,ak as D}from"../bundle.js";var ne=(a=>(a[a.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",a[a.HAS_STARTED=1]="HAS_STARTED",a[a.HAS_THROWN_DICES=2]="HAS_THROWN_DICES",a[a.HAS_CHOSEN_DICES=3]="HAS_CHOSEN_DICES",a[a.HAS_CHOSEN_TILE=4]="HAS_CHOSEN_TILE",a[a.HAS_LOST=5]="HAS_LOST",a[a.HAS_FINISHED=6]="HAS_FINISHED",a))(ne||{}),ce=(a=>(a[a.NONE=0]="NONE",a[a.HAS_LOST_TILE=1]="HAS_LOST_TILE",a[a.HAS_LOST_NOTHING=2]="HAS_LOST_NOTHING",a))(ce||{}),ve=(a=>(a[a.NONE=0]="NONE",a[a.WINNER_HIGHEST_SCORE=1]="WINNER_HIGHEST_SCORE",a[a.WINNER_HIGHEST_TILE=2]="WINNER_HIGHEST_TILE",a[a.LOSER=3]="LOSER",a))(ve||{}),re=(a=>(a[a.PLAYER=0]="PLAYER",a[a.ROBOT=1]="ROBOT",a))(re||{});const de=a=>{for(let u=1;u<=6;u++)if(a.every(c=>c.value===u))return!0;return!1},fe=ee("rainwormsStore",()=>{const a=G(),u=S(0),c=S(0),v=S(0),g=S(0),r=S(0),i=S([...$.map(e=>({...e}))]),t=S([...q]),d=le({0:[],1:[]}),y=S(1),V=p(()=>i.value.some(e=>e.isRolling)),w=p(()=>i.value.filter(e=>e.selected).some(e=>e.value===6)),m=p(()=>e=>i.value.some(s=>s.value===e&&s.selected)),K=p(()=>e=>t.value.some(s=>s.displayValue<=e)),H=p(()=>e=>r.value===(e??0)),_=p(()=>e=>{const s=d[e??0];return s.length?s[s.length-1]:null}),f=p(()=>{let e=0;return i.value.filter(s=>s.selected).forEach(s=>{e+=s.value===6?5:s.value}),e}),O=p(()=>e=>{let s=0;return d[e].forEach(l=>{s+=l.value}),s}),Y=p(()=>e=>a.personalBest(R.RAINWORMS,e)),z=p(()=>e=>a.highscorePosition(R.RAINWORMS,e)),J=e=>{u.value=0,c.value=0,v.value=0,g.value=0,r.value=0,i.value=[...$.map(s=>({...s}))],t.value=[...q],d[0]=[],d[1]=[],y.value=1,k(e)},Q=()=>{u.value=1},h=e=>{if(!H.value(e))return;(u.value===1||u.value===4||u.value===5)&&i.value.forEach(l=>{l.selected=!1}),u.value=2;const s=a.diceRollSpeed*1e3;i.value.forEach(l=>{l.selected||(l.isRolling=!0,setTimeout(()=>{l.value=P(6),l.isRolling=!1,i.value.sort((o,n)=>o.value-n.value),!V.value&&u.value!==5&&L()&&W(e)},P(s,s/3)))}),N(ae)},C=async()=>{for(;V.value;)await new Promise(e=>setTimeout(e,500));return!0},L=()=>{const e=i.value.filter(s=>!s.selected&&!m.value(s.value));return!e.length||de(e)&&e.every(s=>s.value!==6)},W=e=>{u.value=5,c.value=e??0,d[c.value].length?g.value=1:g.value=2,M(),t.value.length===0?u.value=6:A()},M=()=>{const e=d[r.value];if(e.length){const s=e.splice(e.length-1,1)[0];t.value.push(s),t.value.sort((l,o)=>l.displayValue-o.displayValue)}t.value.splice(t.value.length-1,1)},E=(e,s)=>{H.value(s)&&!V.value&&u.value===2&&!e.selected&&!m.value(e.value)&&(u.value=3,i.value.filter(l=>l.value===e.value).forEach(l=>{l.selected=!0}),N(x))},T=(e,s,l)=>{if(H.value(l)&&(u.value===2||u.value===3)){if(u.value=4,c.value=l??0,s){const o=d[r.value===0?1:0];o.splice(o.length-1,1)}else t.value=t.value.filter(o=>o.displayValue!==e.displayValue);d[r.value].push(e),N(x),t.value.length===0?u.value=6:A()}},A=e=>{(r.value===1||u.value!==5||e)&&(r.value===0?setTimeout(()=>{r.value=1,setTimeout(()=>{u.value=1,c.value=0},1e3)},e?0:y.value*1e3*2):setTimeout(()=>{r.value=0},e?0:y.value*1e3*2))},j=async()=>{switch(u.value){case 1:{h(1);break}case 2:{await C(),setTimeout(()=>{const e=i.value.filter(l=>!l.selected),s=_.value(0);if(s&&f.value<s.displayValue)for(let l=6;l>=1;l--){const o=e.filter(n=>n.value===l&&!m.value(l));if(o.length){const n=o.length*(l===6?5:l);if(f.value+n===s.displayValue){E(o[0],1);return}}}for(let l=6;l>=1;l--){const o=i.value.find(n=>n.value===l);if(o&&!m.value(l)){E(o,1);return}}},y.value*1e3);break}case 3:{setTimeout(()=>{const e=_.value(0),s=i.value.filter(l=>!l.selected).length;if(!s||f.value>=30){console.log(s?"i am rich":"i can only pick a tile now");for(let l=f.value;l>=21;l--){const o=t.value.find(n=>n.displayValue===l);if(o){T(o,!1,1);return}}s&&h(1)}if(t.value.every(l=>l.displayValue>f.value)&&e&&e.displayValue>f.value)console.log("my score is too low"),h(1);else if(e&&e.displayValue===f.value)console.log("i can steal"),T(e,!0,1);else if(new Set(i.value.filter(l=>l.selected).map(l=>l.value)).size<=3)if(i.value.filter(l=>!l.selected).length<=2){console.log("there aren't that much dices left");const l=t.value.filter(o=>o.displayValue>=f.value-5&&o.displayValue<=f.value).sort((o,n)=>n.displayValue-o.displayValue);l.length?(console.log("i choose the highest score within 5 tiles"),T(l[0],!1,1)):(console.log("i choose to roll again"),h(1))}else console.log("i have nothing to worry about"),h(1);else if(!w.value)console.log("i am worrying and have no worm yet"),h(1);else{console.log("if i can choose, i choose");const l=t.value.filter(o=>o.displayValue<=f.value).sort((o,n)=>n.displayValue-o.displayValue);l.length?(console.log("i choose the highest score"),T(l[0],!1,1)):(console.log("i choose to roll again"),h(1))}},y.value*1e3);break}default:console.log("DEFAULT",u.value)}},F=e=>{const s=O.value(0),l=O.value(1);s>l?v.value=1:s===l&&Math.max(...d[0].map(o=>o.displayValue))>Math.max(...d[1].map(o=>o.displayValue))?v.value=2:v.value=3,(v.value===1||v.value===2)&&(e&&a.updateHighscores(R.RAINWORMS,e,s),new Audio("/sounds/applause-and-cheer.mp3").play())},k=(e,s)=>a.setPreviousHighscores(R.RAINWORMS,e,s);return{gameStatus:u,gameStatusActivator:c,finishStatus:v,loseStatus:g,activePlayer:r,dices:i,tiles:t,score:d,robotSpeed:y,isRolling:V,hasWorm:w,hasAlreadyChosen:m,canSelectAnyTile:K,canPlay:H,visibleTile:_,selectedDiceTotal:f,totalScore:O,personalBest:Y,highscorePosition:z,reset:J,start:Q,roll:h,hasFinishedRolling:C,hasLostRound:L,loseTurn:W,popLastTile:M,selectDice:E,selectTile:T,passTurn:A,playRobot:j,checkFinishStatus:F,setPreviousHighscores:k,fetchGameData:e=>a.fetchGameData(R.RAINWORMS,e),updateHighscores:(e,s)=>a.updateHighscores(R.RAINWORMS,e,s),sortHighscores:()=>a.sortHighscores(R.RAINWORMS)}},{persist:{enabled:!0}}),$=[{id:1,value:6,selected:!1,isRolling:!1},{id:2,value:6,selected:!1,isRolling:!1},{id:3,value:6,selected:!1,isRolling:!1},{id:4,value:6,selected:!1,isRolling:!1},{id:5,value:6,selected:!1,isRolling:!1},{id:6,value:6,selected:!1,isRolling:!1},{id:7,value:6,selected:!1,isRolling:!1},{id:8,value:6,selected:!1,isRolling:!1}],q=[{displayValue:21,value:1},{displayValue:22,value:1},{displayValue:23,value:1},{displayValue:24,value:1},{displayValue:25,value:2},{displayValue:26,value:2},{displayValue:27,value:2},{displayValue:28,value:2},{displayValue:29,value:3},{displayValue:30,value:3},{displayValue:31,value:3},{displayValue:32,value:3},{displayValue:33,value:4},{displayValue:34,value:4},{displayValue:35,value:4},{displayValue:36,value:4}],me=se({__name:"GameSettingsDialog",props:{isOpen:{type:Boolean,required:!0},isOpenModifiers:{}},emits:["update:isOpen"],setup(a){const u=oe(a,"isOpen"),{useAudio:c,diceRollSpeed:v}=U(G()),{robotSpeed:g}=U(fe());return(r,i)=>(ue(),ie(Z,{isOpen:u.value,title:"Game Settings",description:"Current version: v3 (17-11-2024)",cancelText:"Close",onCancel:i[3]||(i[3]=t=>u.value=!1)},{default:te(()=>[b(X,{name:"useAudio",label:"Audio",modelValue:I(c),"onUpdate:modelValue":i[0]||(i[0]=t=>D(c)?c.value=t:null)},null,8,["modelValue"]),b(B,{name:"diceSpeed",label:"Dice rolling speed",modelValue:I(v),"onUpdate:modelValue":i[1]||(i[1]=t=>D(v)?v.value=t:null),options:[{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:1.5,label:"1.5 seconds"},{value:2,label:"2 seconds"},{value:3,label:"3 seconds"},{value:4,label:"4 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"]),b(B,{name:"robotSpeed",label:"Rainworms robot speed",modelValue:I(g),"onUpdate:modelValue":i[2]||(i[2]=t=>D(g)?g.value=t:null),options:[{value:.25,label:"0.25 seconds"},{value:.5,label:"0.5 seconds"},{value:.75,label:"0.75 seconds"},{value:1,label:"1 second"},{value:3,label:"3 seconds"},{value:5,label:"5 seconds"}]},null,8,["modelValue"])]),_:1},8,["isOpen"]))}});export{ve as F,ne as G,ce as L,re as P,me as _,fe as u};
