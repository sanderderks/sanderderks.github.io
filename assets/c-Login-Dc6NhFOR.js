import{M as y,bS as M,bT as U,bU as I,bV as T,bX as v,aS as w,aQ as B,q as N,aC as G,aX as O,aK as S,s as L,bH as d,I as s,v as c,bM as X,bi as r,b_ as b}from"../bundle.js";import{a as j,_ as p}from"./c-Bubble.vue_vue_type_script_setup_true_lang-bYHBWxaz.js";import{_ as A,a as F,b as H}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-D0lZriuJ.js";import{_ as J}from"./c-Page.vue_vue_type_script_setup_true_lang-FMSOt8Qw.js";import{R}from"./c-validation-Bf-E2UlI.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-CiDJdyXc.js";const K={class:"flex flex-col items-center content-center"},Q={class:"grid grid-cols-4 mt-10 gap-3"},h=y({__name:"Login",setup(V){const t=M(),l=U(),k=I(),n=T(),{routeLoading:x}=v(k),{isLoggedIn:$,isLoginLoading:q}=v(n),{initEmail:i,initPassword:u}=l.currentRoute.value.query,m=w(),f=w(),e=B({email:{value:(i==null?void 0:i.toString())||"",error:""},password:{value:(u==null?void 0:u.toString())||"",error:""}}),_=N(()=>t.params.redirect?JSON.parse(t.params.redirect):void 0),E=async()=>{Object.keys(e).forEach(g=>e[g].error=""),await Promise.all([m.value.test(),f.value.test()]),!e.email.error&&!e.password.error&&(await n.login(e.email.value,e.password.value),$.value&&_.value&&l.push(_.value))},P=async()=>{await m.value.test(),e.email.error||n.resetPassword(e.email.value)};return G(()=>{l.replace({query:void 0})}),(g,a)=>{const C=O("RouterLink");return S(),L(J,null,{content:d(()=>[s(j,{class:"!bg-primary-800 !bg-opacity-50 my-5",title:"Login",description:"Please login using your e-mail and password."},{default:d(()=>[c("div",K,[c("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:a[4]||(a[4]=X(o=>E(),["prevent"]))},[s(A,{ref_key:"email",ref:m,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email.value=o),error:e.email.error,"onUpdate:error":a[1]||(a[1]=o=>e.email.error=o),rules:[r(R).Required]},null,8,["modelValue","error","rules"]),s(F,{ref_key:"password",ref:f,name:"password",label:"Password",modelValue:e.password.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e.password.value=o),error:e.password.error,"onUpdate:error":a[3]||(a[3]=o=>e.password.error=o),rules:[r(R).Required]},null,8,["modelValue","error","rules"]),c("div",Q,[s(p,{class:"col-span-full md:col-span-2",action:"submit",label:"Login",loading:r(q)},null,8,["loading"]),s(C,{class:"col-span-full md:col-span-2",to:{name:r(b).REGISTER,query:{initEmail:e.email.value,initPassword:e.password.value}}},{default:d(()=>[s(p,{class:"w-full",outlined:"",label:"Register",loading:r(x)===r(b).REGISTER},null,8,["loading"])]),_:1},8,["to"]),s(p,{class:"col-span-full md:col-span-2 md:col-start-3",outlined:"",label:"Forgot Password",onClick:P})])],32),s(H)])]),_:1})]),_:1})}}}),ae=y({__name:"Login",setup(V){return(t,l)=>(S(),L(h))}});export{ae as default};
