import{e as y,u as U,f as B,g as I,h as M,s as v,r as w,a as N,c as T,o as G,a7 as O,l as L,q as S,D as d,n as r,p as c,ac as h,k as s,R}from"../bundle.js";import{a as j,_ as p}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BLfz40U2.js";import{_ as A,a as D,b as F}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-DH-FFF_q.js";import{_ as J}from"./c-Page.vue_vue_type_script_setup_true_lang-Uj7_fhYZ.js";import{R as b}from"./c-validation-DokkLKHB.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-DeJvJEAf.js";const z={class:"flex flex-col items-center content-center"},H={class:"grid grid-cols-4 mt-10 gap-3"},K=y({__name:"Login",setup(k){const t=U(),l=B(),x=I(),n=M(),{routeLoading:V}=v(x),{isLoggedIn:$,isLoginLoading:q}=v(n),{initEmail:i,initPassword:u}=l.currentRoute.value.query,m=w(),f=w(),e=N({email:{value:(i==null?void 0:i.toString())||"",error:""},password:{value:(u==null?void 0:u.toString())||"",error:""}}),_=T(()=>t.params.redirect?JSON.parse(t.params.redirect):void 0),E=async()=>{Object.keys(e).forEach(g=>e[g].error=""),await Promise.all([m.value.test(),f.value.test()]),!e.email.error&&!e.password.error&&(await n.login(e.email.value,e.password.value),$.value&&_.value&&l.push(_.value))},P=async()=>{await m.value.test(),e.email.error||n.resetPassword(e.email.value)};return G(()=>{l.replace({query:void 0})}),(g,a)=>{const C=O("RouterLink");return L(),S(J,null,{content:d(()=>[r(j,{class:"!bg-primary-800 !bg-opacity-50 my-5",title:"Login",description:"Please login using your e-mail and password."},{default:d(()=>[c("div",z,[c("form",{class:"w-full lg:w-1/2 xl:w-2/3 px-8 pt-6 pb-8 mb-4",onSubmit:a[4]||(a[4]=h(o=>E(),["prevent"]))},[r(A,{ref_key:"email",ref:m,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email.value=o),error:e.email.error,"onUpdate:error":a[1]||(a[1]=o=>e.email.error=o),rules:[s(b).Required]},null,8,["modelValue","error","rules"]),r(D,{ref_key:"password",ref:f,name:"password",label:"Password",modelValue:e.password.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.password.value=o),error:e.password.error,"onUpdate:error":a[3]||(a[3]=o=>e.password.error=o),rules:[s(b).Required]},null,8,["modelValue","error","rules"]),c("div",H,[r(p,{class:"col-span-full md:col-span-2",action:"submit",label:"Login",loading:s(q)},null,8,["loading"]),r(C,{class:"col-span-full md:col-span-2",to:{name:s(R).REGISTER,query:{initEmail:e.email.value,initPassword:e.password.value}}},{default:d(()=>[r(p,{class:"w-full",outlined:"",label:"Register",loading:s(V)===s(R).REGISTER},null,8,["loading"])]),_:1},8,["to"]),r(p,{class:"col-span-full md:col-span-2 md:col-start-3",outlined:"",type:"neutral",label:"Forgot Password",onClick:P})])],32),r(F)])]),_:1})]),_:1})}}}),ae=y({__name:"Login",setup(k){return(t,l)=>(L(),S(K))}});export{ae as default};
