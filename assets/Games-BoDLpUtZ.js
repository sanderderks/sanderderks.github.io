import{a as g,_ as v}from"./Bubble.vue_vue_type_script_setup_true_lang-Dk_z7oWH.js";import{_ as O}from"./Page.vue_vue_type_script_setup_true_lang-w7t3p-FT.js";import{M as S,bQ as $,bS as R,aK as s,s as l,bH as f,v as n,H as m,bi as t,u as c,t as y,aV as C,F as k,bR as A,aS as E,q as N,bP as M,bO as V,I as o,bV as b,cn as _,cF as U}from"../bundle.js";import{W as B}from"./Worm-ChnrOcEq.js";import{_ as h}from"./Dice6.vue_vue_type_script_setup_true_lang-lzciAH4f.js";import{_ as P}from"./GameSettingsDialog.vue_vue_type_script_setup_true_lang-B_Lk_geX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SwitchField.vue_vue_type_script_setup_true_lang-PInLX98O.js";import"./SelectField.vue_vue_type_script_setup_true_lang-DmhzIFzD.js";import"./validation-Bf-E2UlI.js";const W={class:"mt-1"},F={key:0,class:"text-neutral-400"},x=S({__name:"OnlineUsers",setup(G){const{onlineUsers:r,publicUsers:w}=$(R()),p=i=>w.value.find(a=>a.id===i);return(i,a)=>(s(),l(g,{class:"my-5 flex flex-wrap gap-3 !px-1 !py-2 !rounded-primary"},{default:f(()=>[n("p",W,[a[0]||(a[0]=m(" Online users: ")),t(r).length?y("",!0):(s(),c("span",F," none "))]),(s(!0),c(k,null,C(t(r),d=>(s(),c(k,{key:d.id},[p(d.id)?(s(),l(g,{key:0,class:"w-fit h-fit !py-0 !ps-1 !p-3 bg-green-500 bg-opacity-25",title:p(d.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:p(d.id).avatar,"avatar-props":{class:"mt-1 h-7 w-7"}},null,8,["title","avatar"])):y("",!0)],64))),128))]),_:1}))}}),H={key:0,class:"text-center mb-10"},I={class:"flex justify-end"},L={class:"flex flex-wrap gap-3 justify-center my-5"},X=S({__name:"Games",setup(G){const r=M(),w=V(),{firebaseUser:p}=$(A()),i=E(!1),a=N(()=>w.name===b.GAMES);return(d,e)=>(s(),l(O,null,{content:f(()=>[n("div",null,[a.value?(s(),c("div",H,[n("div",I,[o(v,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:e[0]||(e[0]=u=>i.value=!0)})]),e[10]||(e[10]=n("h3",{class:"text-title-tertiary text-white font-bold"},"Welcome to the Games Overview.",-1)),e[11]||(e[11]=n("h4",{class:"text-title-tertiary"},"Choose a game:",-1)),n("div",L,[t(p)?y("",!0):(s(),l(g,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:f(()=>[e[6]||(e[6]=m(" Please ")),n("a",{class:"cursor-pointer",onClick:e[1]||(e[1]=u=>t(r).push({name:t(b).LOGIN,params:{redirect:JSON.stringify({name:t(b).GAMES})}}))}," Login "),e[7]||(e[7]=m(" to compete in the leaderboards. "))]),_:1})),o(v,{class:"relative w-full md:w-1/2",type:"green",onClick:e[2]||(e[2]=u=>t(r).push({name:t(_).GAMES_YAHTZEE}))},{default:f(()=>[e[8]||(e[8]=m(" Play Yahtzee ")),o(h,{class:"absolute start-[75%] ms-4",width:"30",height:"30",color:"black","background-color":"white"})]),_:1}),o(v,{class:"relative w-full md:w-1/2",type:"purple",onClick:e[3]||(e[3]=u=>t(r).push({name:t(_).GAMES_RAINWORMS}))},{default:f(()=>[e[9]||(e[9]=m(" Play Rainworms ")),o(B,{class:"absolute start-[75%] ms-2",width:"50",height:"50"})]),_:1})]),e[12]||(e[12]=m(" Soon there will be more games to play! "))])):(s(),l(v,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",onClick:e[4]||(e[4]=u=>t(r).push({name:t(b).GAMES}))}))]),a.value?y("",!0):(s(),l(x,{key:0})),o(t(U)),a.value?(s(),l(x,{key:1})):y("",!0),o(P,{"is-open":i.value,"onUpdate:isOpen":e[5]||(e[5]=u=>i.value=u)},null,8,["is-open"])]),_:1}))}});export{X as default};
