import{_ as R}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CCDu7Wsi.js";import{_ as S}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-CN-qhlp8.js";import{_ as U}from"./c-Page.vue_vue_type_script_setup_true_lang-CLA7q8HE.js";import{e as b,u as w,f as L,A as V,g as B,s as f,c as v,l as a,q as d,D as y,n as $,k as o,R as E,p as e,m as n,G as u,H as r,t as l,C as i}from"../bundle.js";import{_ as I}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"flex flex-wrap pt-6 pb-8 mb-4"},D={class:"table-auto text-left border-separate border-spacing-x-5"},O={key:0},T={key:1},q={key:2},F={key:3},G={key:4},H=b({__name:"User",setup(c){const m=w(),p=L(),k=V(),g=B(),{combinedUsers:x}=f(k),{routeLoading:N}=f(g),C=v(()=>m.params.userId),s=v(()=>x.value.find(_=>_.id===C.value));return(_,t)=>(a(),d(U,null,{content:y(()=>[$(S,{class:"w-full sm:w-1/2 md:w-1/3",type:"neutral",icon:"pi pi-arrow-up-left",label:"Back",loading:o(N)===o(E).USER_OVERVIEW,onClick:t[0]||(t[0]=W=>o(p).back())},null,8,["loading"]),s.value?(a(),d(R,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:s.value.displayName,avatar:s.value.avatar},{default:y(()=>[e("div",A,[e("table",D,[e("tbody",null,[s.value.firstName?(a(),n("tr",O,[t[2]||(t[2]=e("th",null,"First name",-1)),e("td",null,[u(r(s.value.firstName)+" ",1),t[1]||(t[1]=e("span",null,"(only visible to you)",-1))])])):l("",!0),s.value.lastName?(a(),n("tr",T,[t[4]||(t[4]=e("th",null,"Last name",-1)),e("td",null,[u(r(s.value.lastName)+" ",1),t[3]||(t[3]=e("span",null,"(only visible to you)",-1))])])):l("",!0),s.value.createdAt?(a(),n("tr",q,[t[6]||(t[6]=e("th",null,"Created at",-1)),e("td",null,[u(r(o(i)(s.value.createdAt))+" ",1),t[5]||(t[5]=e("span",null,"(only visible to you)",-1))])])):l("",!0),s.value.lastLogin?(a(),n("tr",F,[t[8]||(t[8]=e("th",null,"Last login",-1)),e("td",null,[u(r(o(i)(s.value.lastLogin))+" ",1),t[7]||(t[7]=e("span",null,"(only visible to you)",-1))])])):l("",!0),s.value.lastOnline?(a(),n("tr",G,[t[9]||(t[9]=e("th",null,"Last seen",-1)),e("td",null,r(o(i)(s.value.lastOnline)),1)])):l("",!0)])])])]),_:1},8,["title","avatar"])):l("",!0)]),_:1}))}}),M=I(H,[["__scopeId","data-v-04067b87"]]),Q=b({__name:"User",setup(c){return(m,p)=>(a(),d(M))}});export{Q as default};
