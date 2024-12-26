import{a as G,_ as S}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{e as $,g as C,A as L,h as M,s as w,l as a,q as p,D as g,p as u,G as m,k as t,m as _,t as E,O as N,w as R,E as k,R as i,r as T,c as U,f as h,u as P,n as o,ah as c,aF as B}from"../bundle.js";import{_ as V}from"./c-Page.vue_vue_type_script_setup_true_lang-8s5eL3aX.js";import{_ as W}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-BY2x3uHw.js";import{W as D}from"./c-Worm-DsJ68Cym.js";import{_ as Y}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{S as j}from"./c-Spades-CRNFPKDk.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-JQE6dSwt.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-Bu9S1e-e.js";import"./c-validation-DokkLKHB.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";const z={class:"mt-1"},F={key:0,class:"text-neutral-400"},I=$({__name:"OnlineUsers",setup(O){const l=C(),A=L(),b=M(),{routeLoading:x,routeLoadingId:d}=w(l),{onlineUsers:f,publicUsers:y}=w(A),{isLoggedIn:v}=w(b),n=e=>y.value.find(s=>s.id===e);return(e,s)=>(a(),p(G,{class:"my-5 flex flex-wrap gap-3 gap-y-1 !px-1 !py-2 !rounded-primary"},{default:g(()=>[u("p",z,[s[0]||(s[0]=m(" Online users: ")),t(f).length?E("",!0):(a(),_("span",F," none "))]),(a(!0),_(R,null,N(t(f),r=>(a(),_(R,{key:r.id},[n(r.id)?(a(),p(G,{key:0,class:k(["w-fit h-fit !py-0 !p-3 bg-green-500 bg-opacity-25",{"!ps-1":n(r.id).avatar}]),title:n(r.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:n(r.id).avatar,"avatar-props":{class:["mt-1 h-7 w-7",{"animate-spin":t(x)===t(i).USER_DETAILS&&t(d)===n(r.id).id}]},route:t(v)?{name:t(i).USER_DETAILS,params:{userId:n(r.id).id}}:void 0,avatarRoute:t(v)?{name:t(i).USER_DETAILS,params:{userId:n(r.id).id}}:void 0},null,8,["class","title","avatar","avatar-props","route","avatarRoute"])):E("",!0)],64))),128))]),_:1}))}}),H={key:0,class:"text-center mb-10"},Z={class:"flex justify-end"},q={class:"flex flex-wrap gap-3 justify-center my-5"},ie=$({__name:"Games",setup(O){const l=h(),A=P(),b=M(),x=C(),{routeLoading:d}=w(x),{isLoggedIn:f}=w(b),y=T(!1),v=U(()=>A.name===i.GAMES);return(n,e)=>(a(),p(V,null,{content:g(()=>[u("div",null,[v.value?(a(),_("div",H,[u("div",Z,[o(S,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:e[0]||(e[0]=s=>y.value=!0)})]),e[12]||(e[12]=u("h3",{class:"text-title-tertiary text-white font-bold"},"Welcome to the Games Overview.",-1)),e[13]||(e[13]=u("h4",{class:"text-title-tertiary"},"Choose a game:",-1)),u("div",q,[t(f)?E("",!0):(a(),p(G,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:g(()=>[e[7]||(e[7]=m(" Please ")),u("a",{class:"cursor-pointer",onClick:e[1]||(e[1]=s=>t(l).push({name:t(i).LOGIN,params:{redirect:JSON.stringify({name:t(i).GAMES})}}))}," Login "),e[8]||(e[8]=m(" to compete in the leaderboards. "))]),_:1})),o(S,{class:"relative w-full md:w-1/2",type:"green",onClick:e[2]||(e[2]=s=>t(l).push({name:t(c).GAMES_YAHTZEE}))},{default:g(()=>[e[9]||(e[9]=m(" Play Yahtzee ")),o(Y,{class:k(["absolute start-[75%] ms-4",{"animate-spin":t(d)===t(c).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1}),o(S,{class:"relative w-full md:w-1/2",type:"purple",onClick:e[3]||(e[3]=s=>t(l).push({name:t(c).GAMES_RAINWORMS}))},{default:g(()=>[e[10]||(e[10]=m(" Play Rainworms ")),o(D,{class:k(["absolute start-[75%] ms-2",{"animate-spin":t(d)===t(c).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1}),o(S,{class:"relative w-full md:w-1/2",type:"orange",onClick:e[4]||(e[4]=s=>t(l).push({name:t(c).GAMES_PATIENCE}))},{default:g(()=>[e[11]||(e[11]=m(" Play Patience ")),o(j,{class:k(["absolute start-[75%] ms-2",{"animate-spin":t(d)===t(c).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1})]),e[14]||(e[14]=m(" Soon there will be more games to play! "))])):(a(),p(S,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",loading:t(d)===t(i).GAMES,onClick:e[5]||(e[5]=s=>t(l).push({name:t(i).GAMES}))},null,8,["loading"]))]),t(f)&&!v.value?(a(),p(I,{key:0})):E("",!0),o(t(B)),t(f)&&v.value?(a(),p(I,{key:1})):E("",!0),o(W,{gameId:null,"is-open":y.value,"onUpdate:isOpen":e[6]||(e[6]=s=>y.value=s)},null,8,["is-open"])]),_:1}))}});export{ie as default};