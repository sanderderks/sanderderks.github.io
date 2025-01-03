import{_ as M}from"./c-Page.vue_vue_type_script_setup_true_lang-BGhe9uNp.js";import{_ as m,a as _}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{e as g,g as v,s as E,M as R,o as $,l as n,m as y,p as a,w as h,O as x,q as f,D as l,ae as G,k as s,af as A,ag as k,f as B,n as o,a4 as d,G as w,E as S,i as W,ah as C,t as L,R as P}from"../bundle.js";import{S as O}from"./c-Spades-CRNFPKDk.js";import{W as N}from"./c-Worm-JshW0EFQ.js";import{_ as T}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{u as H,_ as I}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-ET1wYTno.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-Countdown.vue_vue_type_script_setup_true_lang-CuCP4XWO.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-aj-wueri.js";import"./c-validation-DokkLKHB.js";import"./c-accordiontab.esm-CX-DBziB.js";import"./c-Image.vue_vue_type_script_setup_true_lang-BBaEBhzX.js";const D={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},V=g({__name:"Projects",setup(b){const r=v(),{projects:i}=E(r),c=()=>{A(()=>{const u=document.querySelectorAll(".transition-opacity");u.forEach(e=>{e.classList.replace("opacity-100","opacity-0")}),k(Array.from(u),500,300,e=>{e.classList.replace("opacity-0","opacity-100")})})};return R(()=>i.value,(u,e)=>{u>e&&c()}),$(()=>{c()}),(u,e)=>(n(),y(h,null,[e[0]||(e[0]=a("h3",{class:"text-title-secondary"},"My Work",-1)),a("div",D,[(n(!0),y(h,null,x(s(i),t=>(n(),f(_,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:t.name,url:t.url,route:{name:t.route},"with-link-icon":"",description:t.description,loading:t.loading},{default:l(()=>[(n(!0),y(h,null,x(t.technologies,p=>(n(),f(m,{class:"rounded-secondary m-1 md:mt-2 font-bold",style:G({backgroundColor:p.color}),label:p.name},null,8,["style","label"]))),256))]),_:2},1032,["title","url","route","description","loading"]))),256))])],64))}}),q={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},z={class:"mt-3"},Y={class:"mt-3"},F={class:"mt-3"},U={class:"mt-3"},Z=g({__name:"Games",setup(b){const r=B(),i=v(),{routeLoading:c}=E(i),u=()=>{A(()=>{const e=document.querySelectorAll(".transition-opacity");e.forEach(t=>{t.classList.replace("opacity-100","opacity-0")}),k(Array.from(e),500,300,t=>{t.classList.replace("opacity-0","opacity-100")})})};return $(()=>{u()}),(e,t)=>(n(),y(h,null,[t[8]||(t[8]=a("h3",{class:"text-title-secondary"},"Play my games!",-1)),a("div",q,[o(_,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Yahtzee",description:"Play now! With OR without an account."},{default:l(()=>[a("div",z,[o(m,{class:"relative w-full",type:"green",onClick:t[0]||(t[0]=p=>s(r).push({name:s(d).GAMES_YAHTZEE}))},{default:l(()=>[t[4]||(t[4]=w(" Play now! ")),o(T,{class:S(["absolute start-[75%] ms-4",{"animate-spin":s(c)===s(d).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1})])]),_:1}),o(_,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Rainworms",description:"Play now! With OR without an account."},{default:l(()=>[a("div",Y,[o(m,{class:"relative w-full",type:"purple",onClick:t[1]||(t[1]=p=>s(r).push({name:s(d).GAMES_RAINWORMS}))},{default:l(()=>[t[5]||(t[5]=w(" Play now! ")),o(N,{class:S(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(d).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1}),o(_,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Patience",description:"Play now! With OR without an account."},{default:l(()=>[a("div",F,[o(m,{class:"relative w-full",type:"orange",onClick:t[2]||(t[2]=p=>s(r).push({name:s(d).GAMES_PATIENCE}))},{default:l(()=>[t[6]||(t[6]=w(" Play now! ")),o(O,{class:S(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(d).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1}),o(_,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Guess the Word",description:"Play now! With OR without an account."},{default:l(()=>[a("div",U,[o(m,{class:"relative w-full",type:"danger",onClick:t[3]||(t[3]=p=>s(r).push({name:s(d).GAMES_GUESS_THE_WORD}))},{default:l(()=>[t[7]||(t[7]=w(" Play now! ")),a("span",{class:S(["absolute start-[75%] h-[25px] w-[25px] ms-2 border rounded-full",{"animate-spin":s(c)===s(d).GAMES_GUESS_THE_WORD}])}," A ",2)]),_:1})])]),_:1})])],64))}}),J={class:"mt-5 grid gap-4 md:gap-10 xl:gap-20"},K={class:"flex justify-center mt-5"},Q=g({__name:"BlogPostDashboard",props:{single:{type:Boolean}},setup(b){const r=v(),i=W(),{routeLoading:c}=E(r),{blogPosts:u,visibleBlogPosts:e,isBlogPostsFetchLoading:t}=E(i);return H(),C(()=>{u.value.visibility="public"}),(p,et)=>(n(),y("div",null,[a("div",J,[s(e).length?(n(),f(I,{key:0,post:s(e)[0],withoutMutation:""},null,8,["post"])):s(t)?L("",!0):(n(),f(_,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),a("div",K,[o(m,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",label:"View all blogposts",route:s(P).BLOG,loading:s(c)===s(P).BLOG},null,8,["route","loading"])])]))}}),X=g({__name:"Blog",setup(b){return(r,i)=>(n(),y(h,null,[i[0]||(i[0]=a("h3",{class:"text-title-secondary"},"Latest blogpost",-1)),o(Q)],64))}}),j={class:"grid mt-20"},tt={class:"mt-32"},st={class:"mt-32"},ot=g({__name:"Home",setup(b){return(r,i)=>(n(),f(M,{"scroll-to-content":!1},{content:l(()=>[a("div",j,[o(Z),a("div",tt,[o(X)]),a("div",st,[o(V)])])]),_:1}))}}),gt=g({__name:"Home",setup(b){return(r,i)=>(n(),f(ot))}});export{gt as default};
