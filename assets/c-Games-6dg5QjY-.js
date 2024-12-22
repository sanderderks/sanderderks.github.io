import{a as G,_ as w}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BSEDXuxp.js";import{e as $,g as C,A as L,h as M,s as E,l as a,q as i,D as c,p,G as d,k as t,m as _,t as g,O as N,w as R,E as k,R as l,r as T,c as U,f as h,u as P,n as r,af as y,aK as B}from"../bundle.js";import{_ as V}from"./c-Page.vue_vue_type_script_setup_true_lang-LCEPLqyA.js";import{_ as W}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-DlGg0TpJ.js";import{W as D}from"./c-Worm-Cy8oypc8.js";import{_ as Y}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{S as j}from"./c-Spades-CRNFPKDk.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-DbYvCOiw.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-4iDIQG91.js";import"./c-validation-DokkLKHB.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";const z={class:"mt-1"},H={key:0,class:"text-neutral-400"},I=$({__name:"OnlineUsers",setup(O){const u=C(),A=L(),b=M(),{routeLoading:x,routeLoadingId:f}=E(u),{onlineUsers:v,publicUsers:S}=E(A),{isLoggedIn:m}=E(b),o=e=>S.value.find(s=>s.id===e);return(e,s)=>(a(),i(G,{class:"my-5 flex flex-wrap gap-3 gap-y-1 !px-1 !py-2 !rounded-primary"},{default:c(()=>[p("p",z,[s[0]||(s[0]=d(" Online users: ")),t(v).length?g("",!0):(a(),_("span",H," none "))]),(a(!0),_(R,null,N(t(v),n=>(a(),_(R,{key:n.id},[o(n.id)?(a(),i(G,{key:0,class:k(["w-fit h-fit !py-0 !p-3 bg-green-500 bg-opacity-25",{"!ps-1":o(n.id).avatar}]),title:o(n.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:o(n.id).avatar,"avatar-props":{class:["mt-1 h-7 w-7",{"animate-spin":t(x)===t(l).USER_DETAILS&&t(f)===o(n.id).id}]},route:t(m)?{name:t(l).USER_DETAILS,params:{userId:o(n.id).id}}:void 0,avatarRoute:t(m)?{name:t(l).USER_DETAILS,params:{userId:o(n.id).id}}:void 0},null,8,["class","title","avatar","avatar-props","route","avatarRoute"])):g("",!0)],64))),128))]),_:1}))}}),Z={key:0,class:"text-center mb-10"},q={class:"flex justify-end"},F={class:"flex flex-wrap gap-3 justify-center my-5"},ie=$({__name:"Games",setup(O){const u=h(),A=P(),b=M(),x=C(),{routeLoading:f}=E(x),{isLoggedIn:v}=E(b),S=T(!1),m=U(()=>A.name===l.GAMES);return(o,e)=>(a(),i(V,null,{content:c(()=>[p("div",null,[m.value?(a(),_("div",Z,[p("div",q,[r(w,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:e[0]||(e[0]=s=>S.value=!0)})]),e[12]||(e[12]=p("h3",{class:"text-title-tertiary text-white font-bold"},"Welcome to the Games Overview.",-1)),e[13]||(e[13]=p("h4",{class:"text-title-tertiary"},"Choose a game:",-1)),p("div",F,[t(v)?g("",!0):(a(),i(G,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:c(()=>[e[7]||(e[7]=d(" Please ")),p("a",{class:"cursor-pointer",onClick:e[1]||(e[1]=s=>t(u).push({name:t(l).LOGIN,params:{redirect:JSON.stringify({name:t(l).GAMES})}}))}," Login "),e[8]||(e[8]=d(" to compete in the leaderboards. "))]),_:1})),r(w,{class:"relative w-full md:w-1/2",type:"green",onClick:e[2]||(e[2]=s=>t(u).push({name:t(y).GAMES_YAHTZEE}))},{default:c(()=>[e[9]||(e[9]=d(" Play Yahtzee ")),r(Y,{class:k(["absolute start-[75%] ms-4",{"animate-spin":t(f)===t(y).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1}),r(w,{class:"relative w-full md:w-1/2",type:"purple",onClick:e[3]||(e[3]=s=>t(u).push({name:t(y).GAMES_RAINWORMS}))},{default:c(()=>[e[10]||(e[10]=d(" Play Rainworms ")),r(D,{class:k(["absolute start-[75%] ms-2",{"animate-spin":t(f)===t(y).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1}),r(w,{class:"relative w-full md:w-1/2",type:"orange",onClick:e[4]||(e[4]=s=>t(u).push({name:t(y).GAMES_PATIENCE}))},{default:c(()=>[e[11]||(e[11]=d(" Play Patience ")),r(j,{class:k(["absolute start-[75%] ms-2",{"animate-spin":t(f)===t(y).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1})]),e[14]||(e[14]=d(" Soon there will be more games to play! "))])):(a(),i(w,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",loading:t(f)===t(l).GAMES,onClick:e[5]||(e[5]=s=>t(u).push({name:t(l).GAMES}))},null,8,["loading"]))]),t(v)&&!m.value?(a(),i(I,{key:0})):g("",!0),r(t(B)),t(v)&&m.value?(a(),i(I,{key:1})):g("",!0),m.value?(a(),i(W,{key:2,gameId:null,"is-open":S.value,"onUpdate:isOpen":e[6]||(e[6]=s=>S.value=s)},null,8,["is-open"])):g("",!0)]),_:1}))}});export{ie as default};
