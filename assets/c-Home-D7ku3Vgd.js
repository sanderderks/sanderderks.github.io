import{_ as k}from"./c-Page.vue_vue_type_script_setup_true_lang-GfuWZhDu.js";import{_ as m}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";import{e as g,g as S,s as v,M as B,o as P,l as n,m as y,p as e,w as A,O as x,q as f,D as l,ae as G,k as s,af as M,ag as $,f as R,n as o,a4 as p,G as h,E as w,i as N,ah as C,t as L,R as E}from"../bundle.js";import{H}from"./c-Hangman-B4yVhf8k.js";import{S as O}from"./c-Spades-CRNFPKDk.js";import{W}from"./c-Worm-JshW0EFQ.js";import{_ as T}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{u as I,_ as V}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-RPiMGA36.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-Countdown.vue_vue_type_script_setup_true_lang-DSMslq4c.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-BcDK9ofr.js";import"./c-validation-DokkLKHB.js";import"./c-accordiontab.esm-fhxUpLlW.js";import"./c-Image.vue_vue_type_script_setup_true_lang-SpT24IqB.js";const q={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},z=g({__name:"Projects",setup(b){const r=S(),{projects:i}=v(r),c=()=>{M(()=>{const u=document.querySelectorAll(".transition-opacity");u.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),$(Array.from(u),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return B(()=>i.value,(u,a)=>{u>a&&c()}),P(()=>{c()}),(u,a)=>(n(),y("div",null,[a[0]||(a[0]=e("h3",{class:"text-title-secondary"},"My Work",-1)),e("div",q,[(n(!0),y(A,null,x(s(i),t=>(n(),f(m,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:t.name,url:t.url,route:{name:t.route},"with-link-icon":"",description:t.description,loading:t.loading},{default:l(()=>[(n(!0),y(A,null,x(t.technologies,d=>(n(),f(_,{class:"rounded-secondary m-1 md:mt-2 font-bold",style:G({backgroundColor:d.color}),label:d.name},null,8,["style","label"]))),256))]),_:2},1032,["title","url","route","description","loading"]))),256))])]))}}),D={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},Y={class:"mt-3"},F={class:"mt-3"},Z={class:"mt-3"},J={class:"mt-3"},K=g({__name:"Games",setup(b){const r=R(),i=S(),{routeLoading:c}=v(i),u=()=>{M(()=>{const a=document.querySelectorAll(".transition-opacity");a.forEach(t=>{t.classList.replace("opacity-100","opacity-0")}),$(Array.from(a),500,300,t=>{t.classList.replace("opacity-0","opacity-100")})})};return P(()=>{u()}),(a,t)=>(n(),y("div",null,[t[8]||(t[8]=e("h3",{class:"text-title-secondary"},"Play my games!",-1)),e("div",D,[o(m,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Yahtzee",description:"Play now! With OR without an account."},{default:l(()=>[e("div",Y,[o(_,{class:"relative w-full",type:"green",onClick:t[0]||(t[0]=d=>s(r).push({name:s(p).GAMES_YAHTZEE}))},{default:l(()=>[t[4]||(t[4]=h(" Play now! ")),o(T,{class:w(["absolute start-[75%] ms-4",{"animate-spin":s(c)===s(p).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1})])]),_:1}),o(m,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Rainworms",description:"Play now! With OR without an account."},{default:l(()=>[e("div",F,[o(_,{class:"relative w-full",type:"purple",onClick:t[1]||(t[1]=d=>s(r).push({name:s(p).GAMES_RAINWORMS}))},{default:l(()=>[t[5]||(t[5]=h(" Play now! ")),o(W,{class:w(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(p).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1}),o(m,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Patience",description:"Play now! With OR without an account."},{default:l(()=>[e("div",Z,[o(_,{class:"relative w-full",type:"orange",onClick:t[2]||(t[2]=d=>s(r).push({name:s(p).GAMES_PATIENCE}))},{default:l(()=>[t[6]||(t[6]=h(" Play now! ")),o(O,{class:w(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(p).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1}),o(m,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Hangman",description:"Play now! With OR without an account."},{default:l(()=>[e("div",J,[o(_,{class:"relative w-full text-black",type:"yellow",onClick:t[3]||(t[3]=d=>s(r).push({name:s(p).GAMES_HANGMAN}))},{default:l(()=>[t[7]||(t[7]=h(" Play now! ")),e("span",{class:w(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(p).GAMES_HANGMAN}])},[o(H)],2)]),_:1})])]),_:1})])]))}}),Q={class:"mt-5 grid gap-4 md:gap-10 xl:gap-20"},U={class:"flex justify-center mt-5"},X=g({__name:"BlogPostDashboard",props:{single:{type:Boolean}},setup(b){const r=S(),i=N(),{routeLoading:c}=v(r),{blogPosts:u,visibleBlogPosts:a,isBlogPostsFetchLoading:t}=v(i);return I(),C(()=>{u.value.visibility="public"}),(d,ot)=>(n(),y("div",null,[e("div",Q,[s(a).length?(n(),f(V,{key:0,post:s(a)[0],withoutMutation:""},null,8,["post"])):s(t)?L("",!0):(n(),f(m,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),e("div",U,[o(_,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",label:"View all blogposts",route:s(E).BLOG,loading:s(c)===s(E).BLOG},null,8,["route","loading"])])]))}}),j=g({__name:"Blog",setup(b){return(r,i)=>(n(),y("div",null,[i[0]||(i[0]=e("h3",{class:"text-title-secondary"},"Latest blogpost",-1)),o(X)]))}}),tt={class:"mt-20 flex flex-col gap-32"},st=g({__name:"Home",setup(b){return(r,i)=>(n(),f(k,{"scroll-to-content":!1},{content:l(()=>[e("div",tt,[o(j),o(K),o(z)])]),_:1}))}}),bt=g({__name:"Home",setup(b){return(r,i)=>(n(),f(st))}});export{bt as default};
