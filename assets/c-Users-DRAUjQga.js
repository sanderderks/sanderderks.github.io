import{_ as L}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_ as g}from"./c-Page.vue_vue_type_script_setup_true_lang-BAjMwmwZ.js";import{e as f,A as k,g as y,s as m,a7 as E,l as e,q as c,D as o,n as p,p as s,m as b,w as R,O as U,k as a,R as r,E as D,t as N,G as v,H as n,C}from"../bundle.js";import"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";const I={class:"pt-6 pb-8 mb-4"},w={class:"block table-auto overflow-x-auto text-left"},T={class:"h-12"},A={class:"border p-1"},B=["src"],V={class:"border px-2"},O={class:"border px-2"},$={class:"border px-2"},q={class:"border px-2"},F=f({__name:"Users",setup(h){const l=k(),d=y(),{combinedUsers:x}=m(l),{routeLoading:u,routeLoadingId:S}=m(d);return(j,i)=>{const _=E("RouterLink");return e(),c(g,null,{content:o(()=>[p(L,{class:"!bg-primary-500 !bg-opacity-35 my-5",title:"Users"},{default:o(()=>[s("div",I,[s("table",w,[i[0]||(i[0]=s("thead",null,[s("tr",null,[s("th",{class:"border px-2"}),s("th",{class:"border px-2"},"Displayname"),s("th",{class:"border px-2"},"First name"),s("th",{class:"border px-2"},"Last name"),s("th",{class:"border px-2"},"Last online")])],-1)),s("tbody",null,[(e(!0),b(R,null,U(a(x),t=>(e(),b("tr",T,[s("td",A,[t.avatar?(e(),c(_,{key:0,to:{name:a(r).USER_DETAILS,params:{userId:t.id}}},{default:o(()=>[s("img",{class:D(["rounded-full h-12 w-12 min-w-12 aspect-square object-cover",{"animate-spin":a(u)===a(r).USER_DETAILS&&a(S)===t.id}]),src:t.avatar},null,10,B)]),_:2},1032,["to"])):N("",!0)]),s("td",V,[p(_,{to:{name:a(r).USER_DETAILS,params:{userId:t.id}}},{default:o(()=>[v(n(t.displayName),1)]),_:2},1032,["to"])]),s("td",O,n(t==null?void 0:t.firstName),1),s("td",$,n(t==null?void 0:t.lastName),1),s("td",q,n(t!=null&&t.lastOnline?a(C)(t.lastOnline):""),1)]))),256))])])])]),_:1})]),_:1})}}}),J=f({__name:"Users",setup(h){return(l,d)=>(e(),c(F))}});export{J as default};
