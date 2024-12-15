import{_ as B}from"./c-Page.vue_vue_type_script_setup_true_lang-CNWvNeEe.js";import{_ as g,a as b}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{e as y,g as E,s as w,M,o as P,l as n,m,p as a,w as h,O as $,q as _,D as u,ae as R,k as s,af as A,ag as k,f as L,n as e,ah as p,G as v,E as S,i as C,ai as G,t as N,R as x}from"../bundle.js";import{S as O}from"./c-Spades-CRNFPKDk.js";import{W}from"./c-Worm-DsJ68Cym.js";import{_ as T}from"./c-Dice6.vue_vue_type_script_setup_true_lang-CyLZpKXP.js";import{u as I,_ as V}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-C7QKl9wz.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import"./c-validation-DokkLKHB.js";import"./c-Image.vue_vue_type_script_setup_true_lang-DxYsW8Nr.js";const H={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},q=y({__name:"Projects",setup(f){const i=E(),{projects:r}=w(i),c=()=>{A(()=>{const l=document.querySelectorAll(".transition-opacity");l.forEach(o=>{o.classList.replace("opacity-100","opacity-0")}),k(Array.from(l),500,300,o=>{o.classList.replace("opacity-0","opacity-100")})})};return M(()=>r.value,(l,o)=>{l>o&&c()}),P(()=>{c()}),(l,o)=>(n(),m(h,null,[o[0]||(o[0]=a("h3",{class:"text-title-secondary"},"My Work",-1)),a("div",H,[(n(!0),m(h,null,$(s(r),t=>(n(),_(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:t.name,url:t.url,route:{name:t.route},"with-link-icon":"",description:t.description,loading:t.loading},{default:u(()=>[(n(!0),m(h,null,$(t.technologies,d=>(n(),_(g,{class:"rounded-secondary m-1 md:mt-2 font-bold",style:R({backgroundColor:d.color}),label:d.name},null,8,["style","label"]))),256))]),_:2},1032,["title","url","route","description","loading"]))),256))])],64))}}),z={class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none"},D={class:"mt-3"},Y={class:"mt-3"},F={class:"mt-3"},Z=y({__name:"Games",setup(f){const i=L(),r=E(),{routeLoading:c}=w(r),l=()=>{A(()=>{const o=document.querySelectorAll(".transition-opacity");o.forEach(t=>{t.classList.replace("opacity-100","opacity-0")}),k(Array.from(o),500,300,t=>{t.classList.replace("opacity-0","opacity-100")})})};return P(()=>{l()}),(o,t)=>(n(),m(h,null,[t[6]||(t[6]=a("h3",{class:"text-title-secondary"},"Play my games!",-1)),a("div",z,[e(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Yahtzee",description:"Play now! With OR without an account."},{default:u(()=>[a("div",D,[e(g,{class:"relative w-full",type:"green",onClick:t[0]||(t[0]=d=>s(i).push({name:s(p).GAMES_YAHTZEE}))},{default:u(()=>[t[3]||(t[3]=v(" Play now! ")),e(T,{class:S(["absolute start-[75%] ms-4",{"animate-spin":s(c)===s(p).GAMES_YAHTZEE}]),width:"30",height:"30",color:"black","background-color":"white"},null,8,["class"])]),_:1})])]),_:1}),e(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Rainworms",description:"Play now! With OR without an account."},{default:u(()=>[a("div",Y,[e(g,{class:"relative w-full",type:"purple",onClick:t[1]||(t[1]=d=>s(i).push({name:s(p).GAMES_RAINWORMS}))},{default:u(()=>[t[4]||(t[4]=v(" Play now! ")),e(W,{class:S(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(p).GAMES_RAINWORMS}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1}),e(b,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:"Patience",description:"Play now! With OR without an account."},{default:u(()=>[a("div",F,[e(g,{class:"relative w-full",type:"orange",onClick:t[2]||(t[2]=d=>s(i).push({name:s(p).GAMES_PATIENCE}))},{default:u(()=>[t[5]||(t[5]=v(" Play now! ")),e(O,{class:S(["absolute start-[75%] ms-2",{"animate-spin":s(c)===s(p).GAMES_PATIENCE}]),width:"50",height:"50"},null,8,["class"])]),_:1})])]),_:1})])],64))}}),J={class:"mt-5 grid gap-4 md:gap-10 xl:gap-20"},K={class:"flex justify-center mt-5"},Q=y({__name:"BlogPostDashboard",props:{single:{type:Boolean}},setup(f){const i=E(),r=C(),{routeLoading:c}=w(i),{blogPosts:l,visibleBlogPosts:o,isBlogPostsFetchLoading:t}=w(r);return I(),G(()=>{l.value.visibility="public"}),(d,ot)=>(n(),m("div",null,[a("div",J,[s(o).length?(n(),_(V,{key:0,post:s(o)[0],withoutMutation:""},null,8,["post"])):s(t)?N("",!0):(n(),_(b,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),a("div",K,[e(g,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",label:"View all blogposts",route:s(x).BLOG,loading:s(c)===s(x).BLOG},null,8,["route","loading"])])]))}}),U=y({__name:"Blog",setup(f){return(i,r)=>(n(),m(h,null,[r[0]||(r[0]=a("h3",{class:"text-title-secondary"},"Latest blogpost",-1)),e(Q)],64))}}),X={class:"grid mt-20"},j={class:"mt-32"},tt={class:"mt-32"},st=y({__name:"Home",setup(f){return(i,r)=>(n(),_(B,{"scroll-to-content":!1},{content:u(()=>[a("div",X,[e(Z),a("div",j,[e(U)]),a("div",tt,[e(q)])])]),_:1}))}}),_t=y({__name:"Home",setup(f){return(i,r)=>(n(),_(st))}});export{_t as default};
