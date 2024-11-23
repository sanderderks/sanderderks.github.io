import{_ as S}from"./c-Page.vue_vue_type_script_setup_true_lang-CrjQU66C.js";import{_ as f,a as b}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CecaO51i.js";import{M as m,bS as x,bQ as $,bC as R,aC as k,aK as s,u as d,v as o,F as y,aV as h,s as p,bH as u,av as A,bi as l,as as B,cm as P,bP as C,I as r,cn as v,H as w,ax as E,t as L,bV as M}from"../bundle.js";import{W as V}from"./c-Worm-yU2ZWgQJ.js";import{_ as N}from"./c-Dice6.vue_vue_type_script_setup_true_lang-lzciAH4f.js";import{u as W,_ as H}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-DsP6LyH_.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-DjwGVSFt.js";import"./c-validation-Bf-E2UlI.js";import"./c-Image.vue_vue_type_script_setup_true_lang-rBtn08tl.js";const G={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},I=m({__name:"Projects",setup(_){const n=x(),{projects:e}=$(n),i=()=>{B(()=>{const t=document.querySelectorAll(".transition-opacity");t.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),P(Array.from(t),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return R(()=>e.value,(t,a)=>{t>a&&i()}),k(()=>{i()}),(t,a)=>(s(),d(y,null,[a[0]||(a[0]=o("h3",{class:"text-title-secondary"},"My Work",-1)),o("div",G,[(s(!0),d(y,null,h(l(e),c=>(s(),p(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:c.name,url:c.url,route:{name:c.route},"with-link-icon":"",description:c.description,loading:c.loading},{default:u(()=>[(s(!0),d(y,null,h(c.technologies,g=>(s(),p(f,{class:"rounded-secondary m-1 md:mt-2 font-bold",style:A({backgroundColor:g.color}),label:g.name},null,8,["style","label"]))),256))]),_:2},1032,["title","url","route","description","loading"]))),256))])],64))}}),O={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},T={class:"mt-3"},F={class:"mt-3"},q=m({__name:"Games",setup(_){const n=C(),e=()=>{B(()=>{const i=document.querySelectorAll(".transition-opacity");i.forEach(t=>{t.classList.replace("opacity-100","opacity-0")}),P(Array.from(i),500,300,t=>{t.classList.replace("opacity-0","opacity-100")})})};return k(()=>{e()}),(i,t)=>(s(),d(y,null,[t[4]||(t[4]=o("h3",{class:"text-title-secondary"},"Play my games!",-1)),o("div",O,[r(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Yahtzee",description:"Play now! With OR without an account."},{default:u(()=>[o("div",T,[r(f,{class:"relative w-full",type:"green",onClick:t[0]||(t[0]=a=>l(n).push({name:l(v).GAMES_YAHTZEE}))},{default:u(()=>[t[2]||(t[2]=w(" Play now! ")),r(N,{class:"absolute start-[75%] ms-4",width:"30",height:"30",color:"black","background-color":"white"})]),_:1})])]),_:1}),r(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Rainworms",description:"Play now! With OR without an account."},{default:u(()=>[o("div",F,[r(f,{class:"relative w-full",type:"purple",onClick:t[1]||(t[1]=a=>l(n).push({name:l(v).GAMES_RAINWORMS}))},{default:u(()=>[t[3]||(t[3]=w(" Play now! ")),r(V,{class:"absolute start-[75%] ms-2",width:"50",height:"50"})]),_:1})])]),_:1})])],64))}}),z={class:"mt-5 grid gap-4 md:gap-10 xl:gap-20"},D={class:"flex justify-center mt-5"},Y=m({__name:"BlogPostDashboard",props:{single:{type:Boolean}},setup(_){const n=x(),{blogPosts:e,visibleBlogPosts:i,isBlogPostsFetchLoading:t}=$(n);return W(),E(()=>{e.value.visibility="public"}),(a,c)=>(s(),d("div",null,[o("div",z,[l(i).length?(s(),p(H,{key:0,post:l(i)[0],withoutMutation:""},null,8,["post"])):l(t)?L("",!0):(s(),p(b,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),o("div",D,[r(f,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",label:"View all blogposts",route:l(M).BLOG},null,8,["route"])])]))}}),K=m({__name:"Blog",setup(_){return(n,e)=>(s(),d(y,null,[e[0]||(e[0]=o("h3",{class:"text-title-secondary"},"Latest blogpost",-1)),r(Y)],64))}}),Q={class:"grid mt-20"},Z={class:"mt-32"},J={class:"mt-32"},U=m({__name:"Home",setup(_){return(n,e)=>(s(),p(S,{"scroll-to-content":!1},{content:u(()=>[o("div",Q,[r(q),o("div",Z,[r(K)]),o("div",J,[r(I)])])]),_:1}))}}),lt=m({__name:"Home",setup(_){return(n,e)=>(s(),p(U))}});export{lt as default};