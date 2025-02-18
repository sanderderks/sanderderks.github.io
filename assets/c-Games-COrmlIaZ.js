import{a as x,_ as S}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BLfz40U2.js";import{e as N,g as $,A as O,h as C,s as A,l as a,q as p,D as y,p as m,G as u,k as t,m as k,t as w,O as L,w as M,E,R as d,r as T,c as U,f as P,u as H,n as o,a4 as i,a5 as h}from"../bundle.js";import{_ as B}from"./c-Page.vue_vue_type_script_setup_true_lang-Bv7k7jwZ.js";import{_ as V}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-jQyu4mMx.js";import{S as W}from"./c-Spades-CRNFPKDk.js";import{W as D}from"./c-Worm-JshW0EFQ.js";import{_ as Y}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{H as j}from"./c-Hangman-B4yVhf8k.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-R6e5xvIM.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import"./c-validation-DokkLKHB.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";const z={class:"mt-1"},Z={key:0,class:"text-neutral-400"},R=N({__name:"OnlineUsers",setup(I){const n=$(),_=O(),G=C(),{routeLoading:b,routeLoadingId:f}=A(n),{onlineUsers:g,publicUsers:c}=A(_),{isLoggedIn:v}=A(G),r=e=>c.value.find(s=>s.id===e);return(e,s)=>(a(),p(x,{class:"min-h-[52px] my-5 flex flex-wrap gap-3 gap-y-1 !px-1 !py-2 !rounded-primary"},{default:y(()=>[m("p",z,[s[0]||(s[0]=u(" Online users: ")),t(g).length?w("",!0):(a(),k("span",Z," none "))]),(a(!0),k(M,null,L(t(g),l=>(a(),k(M,{key:l.id},[r(l.id)?(a(),p(x,{key:0,class:E(["w-fit h-fit !py-0 !p-3 bg-green-500 bg-opacity-25",{"!ps-1":r(l.id).avatar}]),title:r(l.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:r(l.id).avatar,"avatar-props":{class:["mt-1 h-7 w-7",{"animate-spin":t(b)===t(d).USER_DETAILS&&t(f)===r(l.id).id}]},route:t(v)?{name:t(d).USER_DETAILS,params:{userId:r(l.id).id}}:void 0,avatarRoute:t(v)?{name:t(d).USER_DETAILS,params:{userId:r(l.id).id}}:void 0},null,8,["class","title","avatar","avatar-props","route","avatarRoute"])):w("",!0)],64))),128))]),_:1}))}}),q={key:0,class:"text-center mb-10"},F={class:"flex justify-end"},J={class:"flex flex-wrap gap-3 justify-center my-5"},me=N({__name:"Games",setup(I){const n=P(),_=H(),G=C(),b=$(),{routeLoading:f}=A(b),{isLoggedIn:g}=A(G),c=T(!1),v=U(()=>_.name===d.GAMES);return(r,e)=>(a(),p(B,null,{content:y(()=>[m("div",null,[v.value?(a(),k("div",q,[m("div",F,[o(S,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:e[0]||(e[0]=s=>c.value=!0)})]),e[14]||(e[14]=m("h3",{class:"text-title-tertiary text-white font-bold"},"Welcome to the Games Overview.",-1)),e[15]||(e[15]=m("h4",{class:"text-title-tertiary"},"Choose a game:",-1)),m("div",J,[t(g)?w("",!0):(a(),p(x,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:y(()=>[e[8]||(e[8]=u(" Please ")),m("a",{class:"cursor-pointer",onClick:e[1]||(e[1]=s=>t(n).push({name:t(d).LOGIN,params:{redirect:JSON.stringify({name:t(d).GAMES})}}))}," Login "),e[9]||(e[9]=u(" to compete in the leaderboards. "))]),_:1})),o(S,{class:"relative w-full md:w-1/2",type:"green",onClick:e[2]||(e[2]=s=>t(n).push({name:t(i).GAMES_YAHTZEE}))},{default:y(()=>[e[10]||(e[10]=u(" Play Yahtzee ")),o(Y,{class:E(["absolute start-[75%] ms-4",{"animate-spin":t(f)===t(i).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1}),o(S,{class:"relative w-full md:w-1/2",type:"purple",onClick:e[3]||(e[3]=s=>t(n).push({name:t(i).GAMES_RAINWORMS}))},{default:y(()=>[e[11]||(e[11]=u(" Play Rainworms ")),o(D,{class:E(["absolute start-[75%] ms-2",{"animate-spin":t(f)===t(i).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1}),o(S,{class:"relative w-full md:w-1/2",type:"orange",onClick:e[4]||(e[4]=s=>t(n).push({name:t(i).GAMES_PATIENCE}))},{default:y(()=>[e[12]||(e[12]=u(" Play Patience ")),o(W,{class:E(["absolute start-[75%] ms-2",{"animate-spin":t(f)===t(i).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1}),o(S,{class:"relative w-full md:w-1/2 text-black",type:"yellow",onClick:e[5]||(e[5]=s=>t(n).push({name:t(i).GAMES_HANGMAN}))},{default:y(()=>[e[13]||(e[13]=u(" Play Hangman ")),m("span",{class:E(["absolute start-[75%] ms-2",{"animate-spin":t(f)===t(i).GAMES_HANGMAN}])},[o(j)],2)]),_:1})]),e[16]||(e[16]=u(" Soon there will be more games to play! "))])):(a(),p(S,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",loading:t(f)===t(d).GAMES,onClick:e[6]||(e[6]=s=>t(n).push({name:t(d).GAMES}))},null,8,["loading"]))]),t(g)&&!v.value?(a(),p(R,{key:0})):w("",!0),o(t(h)),t(g)&&v.value?(a(),p(R,{key:1})):w("",!0),v.value?(a(),p(V,{key:2,gameId:null,"is-open":c.value,"onUpdate:isOpen":e[7]||(e[7]=s=>c.value=s)},null,8,["is-open"])):w("",!0)]),_:1}))}});export{me as default};
