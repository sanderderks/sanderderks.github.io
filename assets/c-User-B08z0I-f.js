import{_ as F,a as S}from"./c-Bubble.vue_vue_type_script_setup_true_lang-DwnbaZC0.js";import{_ as T}from"./c-Page.vue_vue_type_script_setup_true_lang-BdVWSpbl.js";import{e as R,u as h,f as y,C as O,g as P,s as E,c as f,l as n,t as c,E as I,n as k,k as t,p as l,R as g,q as e,m as r,J as a,H as _,w as o,D as u}from"../bundle.js";import{_ as x}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"flex flex-wrap pt-6 pb-8 mb-4"},U={class:"table-auto text-left border-separate border-spacing-x-5"},C={key:0},w={key:1},B={key:2},$={key:3},H={key:4},M=R({__name:"User",setup(L){const i=h(),d=y(),v=O(),A=P(),{combinedUsers:N}=E(v),{routeLoading:b}=E(A),D=f(()=>i.params.userId),s=f(()=>N.value.find(m=>m.id===D.value));return(m,p)=>(n(),c(T,null,{content:I(()=>[k(F,{class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:t(l)("GENERAL_BACK"),loading:t(b)===t(g).USER_OVERVIEW,onClick:p[0]||(p[0]=q=>t(d).back())},null,8,["label","loading"]),s.value?(n(),c(S,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:s.value.displayName,avatar:s.value.avatar},{default:I(()=>[e("div",V,[e("table",U,[e("tbody",null,[s.value.firstName?(n(),r("tr",C,[e("th",null,a(t(l)("DASHBOARD_INPUT_FIRST_NAME")),1),e("td",null,[_(a(s.value.firstName)+" ",1),e("span",null,"("+a(t(l)("PROFILE_FIELD_PRIVATE"))+")",1)])])):o("",!0),s.value.lastName?(n(),r("tr",w,[e("th",null,a(t(l)("DASHBOARD_INPUT_LAST_NAME")),1),e("td",null,[_(a(s.value.lastName)+" ",1),e("span",null,"("+a(t(l)("PROFILE_FIELD_PRIVATE"))+")",1)])])):o("",!0),s.value.createdAt?(n(),r("tr",B,[e("th",null,a(t(l)("PROFILE_FIELD_CREATED_AT")),1),e("td",null,[_(a(t(u)(s.value.createdAt))+" ",1),e("span",null,"("+a(t(l)("PROFILE_FIELD_PRIVATE"))+")",1)])])):o("",!0),s.value.lastLogin?(n(),r("tr",$,[e("th",null,a(t(l)("PROFILE_FIELD_LAST_LOGIN")),1),e("td",null,[_(a(t(u)(s.value.lastLogin))+" ",1),e("span",null,"("+a(t(l)("PROFILE_FIELD_PRIVATE"))+")",1)])])):o("",!0),s.value.lastOnline?(n(),r("tr",H,[e("th",null,a(t(l)("PROFILE_FIELD_LAST_SEEN")),1),e("td",null,a(t(u)(s.value.lastOnline)),1)])):o("",!0)])])])]),_:1},8,["title","avatar"])):o("",!0)]),_:1}))}}),G=x(M,[["__scopeId","data-v-f62a7bac"]]),z=R({__name:"User",setup(L){return(i,d)=>(n(),c(G))}});export{z as default};
