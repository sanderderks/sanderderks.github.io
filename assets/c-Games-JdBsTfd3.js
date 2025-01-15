import{a as b,_ as c}from"./c-Bubble.vue_vue_type_script_setup_true_lang-DwnbaZC0.js";import{e as O,g as L,C as U,h as T,s as w,l as a,t as p,E as S,q as u,H as m,k as e,m as A,w as v,P as N,x,G as g,R as d,r as W,c as h,f as P,u as V,n,J as M,p as I,a5 as i,a6 as B}from"../bundle.js";import{_ as D}from"./c-Page.vue_vue_type_script_setup_true_lang-BdVWSpbl.js";import{_ as H}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-CSwtGWnp.js";import{W as Y}from"./c-Worm-7aG8Dkqg.js";import{_ as j}from"./c-Dice6.vue_vue_type_script_setup_true_lang-uF3qKazL.js";import{S as z}from"./c-Spades-D2IXKTy-.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-lxypY4ur.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-BFyx74Rf.js";import"./c-validation-CO90d-7g.js";const J={class:"mt-1"},Z={key:0,class:"text-neutral-400"},C=O({__name:"OnlineUsers",setup($){const o=L(),k=U(),G=T(),{routeLoading:R,routeLoadingId:f}=w(o),{onlineUsers:_,publicUsers:y}=w(k),{isLoggedIn:E}=w(G),r=t=>y.value.find(s=>s.id===t);return(t,s)=>(a(),p(b,{class:"my-5 flex flex-wrap gap-3 gap-y-1 !px-1 !py-2 !rounded-primary"},{default:S(()=>[u("p",J,[s[0]||(s[0]=m(" Online users: ")),e(_).length?v("",!0):(a(),A("span",Z," none "))]),(a(!0),A(x,null,N(e(_),l=>(a(),A(x,{key:l.id},[r(l.id)?(a(),p(b,{key:0,class:g(["w-fit h-fit !py-0 !p-3 bg-green-500 bg-opacity-25",{"!ps-1":r(l.id).avatar}]),title:r(l.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:r(l.id).avatar,"avatar-props":{class:["mt-1 h-7 w-7",{"animate-spin":e(R)===e(d).USER_DETAILS&&e(f)===r(l.id).id}]},route:e(E)?{name:e(d).USER_DETAILS,params:{userId:r(l.id).id}}:void 0,avatarRoute:e(E)?{name:e(d).USER_DETAILS,params:{userId:r(l.id).id}}:void 0},null,8,["class","title","avatar","avatar-props","route","avatarRoute"])):v("",!0)],64))),128))]),_:1}))}}),q={key:0,class:"text-center mb-10"},F={class:"flex justify-end"},K={class:"text-title-tertiary text-white font-bold"},Q={class:"text-title-tertiary"},X={class:"flex flex-wrap gap-3 justify-center my-5"},pe=O({__name:"Games",setup($){const o=P(),k=V(),G=T(),R=L(),{routeLoading:f}=w(R),{isLoggedIn:_}=w(G),y=W(!1),E=h(()=>k.name===d.GAMES);return(r,t)=>(a(),p(D,null,{content:S(()=>[u("div",null,[E.value?(a(),A("div",q,[u("div",F,[n(c,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:t[0]||(t[0]=s=>y.value=!0)})]),u("h3",K,M(e(I)("GAMES_OVERVIEW_WELCOME_TITLE")),1),u("h4",Q,M(e(I)("GAMES_OVERVIEW_WELCOME_SUBTITLE")),1),u("div",X,[e(_)?v("",!0):(a(),p(b,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:S(()=>[t[8]||(t[8]=m(" Please ")),u("a",{class:"cursor-pointer",onClick:t[1]||(t[1]=s=>e(o).push({name:e(d).LOGIN,params:{redirect:JSON.stringify({name:e(d).GAMES})}}))}," Login "),t[9]||(t[9]=m(" to compete in the leaderboards. "))]),_:1})),n(c,{class:"relative w-full md:w-1/2",type:"green",onClick:t[2]||(t[2]=s=>e(o).push({name:e(i).GAMES_YAHTZEE}))},{default:S(()=>[t[10]||(t[10]=m(" Play Yahtzee ")),n(j,{class:g(["absolute start-[75%] ms-4",{"animate-spin":e(f)===e(i).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1}),n(c,{class:"relative w-full md:w-1/2",type:"purple",onClick:t[3]||(t[3]=s=>e(o).push({name:e(i).GAMES_RAINWORMS}))},{default:S(()=>[t[11]||(t[11]=m(" Play Rainworms ")),n(Y,{class:g(["absolute start-[75%] ms-2",{"animate-spin":e(f)===e(i).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1}),n(c,{class:"relative w-full md:w-1/2",type:"orange",onClick:t[4]||(t[4]=s=>e(o).push({name:e(i).GAMES_PATIENCE}))},{default:S(()=>[t[12]||(t[12]=m(" Play Patience ")),n(z,{class:g(["absolute start-[75%] ms-2",{"animate-spin":e(f)===e(i).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1}),n(c,{class:"relative w-full md:w-1/2",type:"danger",onClick:t[5]||(t[5]=s=>e(o).push({name:e(i).GAMES_GUESS_THE_WORD}))},{default:S(()=>[t[13]||(t[13]=m(" Play Hangman ")),u("span",{class:g(["absolute start-[75%] h-[25px] w-[25px] ms-2 border rounded-full",{"animate-spin":e(f)===e(i).GAMES_GUESS_THE_WORD}])}," A ",2)]),_:1})]),t[14]||(t[14]=m(" Soon there will be more games to play! "))])):(a(),p(c,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",loading:e(f)===e(d).GAMES,onClick:t[6]||(t[6]=s=>e(o).push({name:e(d).GAMES}))},null,8,["loading"]))]),e(_)&&!E.value?(a(),p(C,{key:0})):v("",!0),n(e(B)),e(_)&&E.value?(a(),p(C,{key:1})):v("",!0),E.value?(a(),p(H,{key:2,gameId:null,"is-open":y.value,"onUpdate:isOpen":t[7]||(t[7]=s=>y.value=s)},null,8,["is-open"])):v("",!0)]),_:1}))}});export{pe as default};
