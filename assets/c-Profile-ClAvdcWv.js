import{_ as S,a as w}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BbZDUAgW.js";import{_ as L}from"./c-Page.vue_vue_type_script_setup_true_lang-CLZqIix8.js";import{M as b,bS as R,bT as B,c1 as C,bU as U,bX as _,q as p,aK as s,s as i,bH as f,I as V,bi as l,b_ as $,v as e,u as n,b9 as r,t as o,c2 as u}from"../bundle.js";const E={class:"flex flex-wrap pt-6 pb-8 mb-4"},I={class:"table-auto text-left border-separate border-spacing-x-5"},h={key:0},O={key:1},A={key:2},D={key:3},M={key:4},P=b({__name:"Profile",setup(v){const d=R(),m=B(),y=C(),k=U(),{combinedUsers:g}=_(y),{routeLoading:x}=_(k),N=p(()=>d.params.userId),t=p(()=>g.value.find(c=>c.id===N.value));return(c,a)=>(s(),i(L,null,{content:f(()=>[V(S,{class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back",loading:l(x)===l($).USER_OVERVIEW,onClick:a[0]||(a[0]=T=>l(m).back())},null,8,["loading"]),t.value?(s(),i(w,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:t.value.displayName,avatar:t.value.avatar},{default:f(()=>[e("div",E,[e("table",I,[e("tbody",null,[t.value.firstName?(s(),n("tr",h,[a[1]||(a[1]=e("th",null,"First name",-1)),e("td",null,r(t.value.firstName),1)])):o("",!0),t.value.lastName?(s(),n("tr",O,[a[2]||(a[2]=e("th",null,"Last name",-1)),e("td",null,r(t.value.lastName),1)])):o("",!0),t.value.createdAt?(s(),n("tr",A,[a[3]||(a[3]=e("th",null,"Created at",-1)),e("td",null,r(l(u)(t.value.createdAt)),1)])):o("",!0),t.value.lastLogin?(s(),n("tr",D,[a[4]||(a[4]=e("th",null,"Last login",-1)),e("td",null,r(l(u)(t.value.lastLogin)),1)])):o("",!0),t.value.lastOnline?(s(),n("tr",M,[a[5]||(a[5]=e("th",null,"Last seen",-1)),e("td",null,r(l(u)(t.value.lastOnline)),1)])):o("",!0)])])])]),_:1},8,["title","avatar"])):o("",!0)]),_:1}))}}),K=b({__name:"Profile",setup(v){return(d,m)=>(s(),i(P))}});export{K as default};