import{M as O,bQ as k,bR as $,bS as A,q as C,s as r,bH as o,bP as E,bO as M,aK as a,v as l,u as n,bi as s,b$ as p,H as u,bV as y,t as m,I as d,cw as V,cv as x,bW as w,cx as B,aV as S,F as b,cP as P}from"../bundle.js";import{_ as U}from"./Page.vue_vue_type_script_setup_true_lang-C9Q_QNYk.js";const W={key:0,class:"text-center mb-10"},H={class:"flex flex-wrap gap-3 justify-center my-5"},_=O({__name:"Games",setup(I){const f=E(),G=M(),{firebaseUser:R}=k($()),{onlineUsers:c,publicUsers:N}=k(A()),v=C(()=>G.name===y.GAMES),i=g=>N.value.find(e=>e.id===g);return(g,e)=>(a(),r(U,null,{content:o(()=>[l("div",null,[v.value?(a(),n("div",W,[e[8]||(e[8]=l("h3",{class:"text-title-tertiary text-white font-bold"},"Welcome to the Games Overview.",-1)),e[9]||(e[9]=l("h4",{class:"text-title-tertiary"},"Choose a game:",-1)),l("div",H,[s(R)?m("",!0):(a(),r(p,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:o(()=>[e[4]||(e[4]=u(" Please ")),l("a",{class:"cursor-pointer",onClick:e[0]||(e[0]=t=>s(f).push({name:s(y).LOGIN,params:{redirect:JSON.stringify({name:s(y).GAMES})}}))}," Login "),e[5]||(e[5]=u(" to compete in the leaderboards. "))]),_:1})),d(w,{class:"relative w-full md:w-1/2",type:"green",onClick:e[1]||(e[1]=t=>s(f).push({name:s(x).GAMES_YAHTZEE}))},{default:o(()=>[e[6]||(e[6]=u(" Play Yahtzee ")),d(V,{class:"absolute start-[75%] ms-4",width:"30",height:"30",color:"black","background-color":"white"})]),_:1}),d(w,{class:"relative w-full md:w-1/2",type:"purple",onClick:e[2]||(e[2]=t=>s(f).push({name:s(x).GAMES_RAINWORMS}))},{default:o(()=>[e[7]||(e[7]=u(" Play Rainworms ")),d(B,{class:"absolute start-[75%] ms-2",width:"50",height:"50"})]),_:1})]),e[10]||(e[10]=u(" Soon there will be more games to play! "))])):(a(),r(w,{key:1,class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back to Game Overview",onClick:e[3]||(e[3]=t=>s(f).push({name:s(y).GAMES}))}))]),v.value?m("",!0):(a(),r(p,{key:0,class:"my-5 flex flex-wrap gap-3 !px-1 !py-2 !rounded-primary"},{default:o(()=>[e[11]||(e[11]=l("p",{class:"mt-1"},"Online users:",-1)),(a(!0),n(b,null,S(s(c),t=>(a(),n(b,{key:t.id},[i(t.id)?(a(),r(p,{key:0,class:"w-fit h-fit !py-0 !ps-1 !p-3 bg-green-500 bg-opacity-25",title:i(t.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:i(t.id).avatar,"avatar-props":{class:"mt-1 h-7 w-7"}},null,8,["title","avatar"])):m("",!0)],64))),128))]),_:1})),d(s(P)),v.value?(a(),r(p,{key:1,class:"my-5 flex flex-wrap gap-3 !px-1 !py-2 !rounded-primary"},{default:o(()=>[e[12]||(e[12]=l("p",{class:"mt-1"},"Online users:",-1)),(a(!0),n(b,null,S(s(c),t=>(a(),n(b,{key:t.id},[i(t.id)?(a(),r(p,{key:0,class:"w-fit h-fit !py-0 !ps-1 !p-3 bg-green-500 bg-opacity-25",title:i(t.id).displayName,"title-props":{class:"!text-sm mt-2"},avatar:i(t.id).avatar,"avatar-props":{class:"mt-1 h-7 w-7"}},null,8,["title","avatar"])):m("",!0)],64))),128))]),_:1})):m("",!0)]),_:1}))}});export{_ as default};
