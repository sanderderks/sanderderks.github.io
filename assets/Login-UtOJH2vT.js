import{d as R,$ as P,a as q,p as E,s as U,X as C,r as w,z as B,h as N,a8 as j,o as b,v as y,x as c,j as r,i as p,E as M,u as o,R as O}from"../bundle.js";import{a as T,_ as f,c as h}from"./Bubble.vue_vue_type_script_setup_true_lang-Bg7w0uV0.js";import{_ as z,a as A,b as F}from"./PasswordField.vue_vue_type_script_setup_true_lang-CqtQzJRf.js";import{R as g}from"./TextField.vue_vue_type_script_setup_true_lang-Dgx0yMnh.js";const G={class:"flex flex-col items-center content-center"},I={class:"grid grid-cols-4 mt-10 gap-3"},J=R({__name:"Login",setup(x){const l=P(),t=q(()=>l.params.redirect?JSON.parse(l.params.redirect):void 0),n=E(),{isLoginLoading:$,firebaseUser:k}=U(n),i=C(),{initEmail:u,initPassword:m}=i.currentRoute.value.query,d=w(),_=w(),e=B({email:{value:(u==null?void 0:u.toString())||"",error:""},password:{value:(m==null?void 0:m.toString())||"",error:""}}),L=async()=>{Object.keys(e).forEach(v=>e[v].error=""),await Promise.all([d.value.test(),_.value.test()]),!e.email.error&&!e.password.error&&(await n.login(e.email.value,e.password.value),k.value&&t.value&&i.push(t.value))},V=async()=>{await d.value.test(),e.email.error||n.resetPassword(e.email.value)};return N(()=>{i.replace({query:void 0})}),(v,a)=>{const S=j("RouterLink");return b(),y(h,null,{content:c(()=>[r(T,{class:"!bg-primary-800 !bg-opacity-50 my-5",title:"Login",description:"Please login using your e-mail and password."},{default:c(()=>[p("div",G,[p("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:a[4]||(a[4]=M(s=>L(),["prevent"]))},[r(z,{ref_key:"email",ref:d,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email.value=s),error:e.email.error,"onUpdate:error":a[1]||(a[1]=s=>e.email.error=s),rules:[o(g).Required]},null,8,["modelValue","error","rules"]),r(A,{ref_key:"password",ref:_,name:"password",label:"Password",modelValue:e.password.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e.password.value=s),error:e.password.error,"onUpdate:error":a[3]||(a[3]=s=>e.password.error=s),rules:[o(g).Required]},null,8,["modelValue","error","rules"]),p("div",I,[r(f,{class:"col-span-full md:col-span-2",action:"submit",loading:o($),label:"Login"},null,8,["loading"]),r(S,{class:"col-span-full md:col-span-2",to:{name:o(O).REGISTER,query:{initEmail:e.email.value,initPassword:e.password.value}}},{default:c(()=>[r(f,{class:"w-full",outlined:"",label:"Register"})]),_:1},8,["to"]),r(f,{class:"col-span-full md:col-span-2 md:col-start-3",outlined:"",label:"Forgot Password",onClick:V})])],32),r(F)])]),_:1})]),_:1})}}}),Q=R({__name:"Login",setup(x){return(l,t)=>(b(),y(J))}});export{Q as default};
