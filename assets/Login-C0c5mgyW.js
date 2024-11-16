import{M as g,bO as P,q,bR as C,bQ as U,bP as E,aS as w,aQ as M,aC as B,aX as N,aK as R,s as y,bH as c,I as r,b$ as O,v as p,bM as I,bi as o,bW as f,bV as Q}from"../bundle.js";import{_ as T,a as j,b as A}from"./PasswordField.vue_vue_type_script_setup_true_lang-BeaccCuF.js";import{_ as F}from"./Page.vue_vue_type_script_setup_true_lang-C9Q_QNYk.js";import{R as b}from"./TextField.vue_vue_type_script_setup_true_lang-CJc43uTT.js";const G={class:"flex flex-col items-center content-center"},H={class:"grid grid-cols-4 mt-10 gap-3"},J=g({__name:"Login",setup(V){const l=P(),t=q(()=>l.params.redirect?JSON.parse(l.params.redirect):void 0),n=C(),{isLoginLoading:$,firebaseUser:k}=U(n),i=E(),{initEmail:u,initPassword:m}=i.currentRoute.value.query,d=w(),_=w(),e=M({email:{value:(u==null?void 0:u.toString())||"",error:""},password:{value:(m==null?void 0:m.toString())||"",error:""}}),x=async()=>{Object.keys(e).forEach(v=>e[v].error=""),await Promise.all([d.value.test(),_.value.test()]),!e.email.error&&!e.password.error&&(await n.login(e.email.value,e.password.value),k.value&&t.value&&i.push(t.value))},L=async()=>{await d.value.test(),e.email.error||n.resetPassword(e.email.value)};return B(()=>{i.replace({query:void 0})}),(v,a)=>{const S=N("RouterLink");return R(),y(F,null,{content:c(()=>[r(O,{class:"!bg-primary-800 !bg-opacity-50 my-5",title:"Login",description:"Please login using your e-mail and password."},{default:c(()=>[p("div",G,[p("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:a[4]||(a[4]=I(s=>x(),["prevent"]))},[r(T,{ref_key:"email",ref:d,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email.value=s),error:e.email.error,"onUpdate:error":a[1]||(a[1]=s=>e.email.error=s),rules:[o(b).Required]},null,8,["modelValue","error","rules"]),r(j,{ref_key:"password",ref:_,name:"password",label:"Password",modelValue:e.password.value,"onUpdate:modelValue":a[2]||(a[2]=s=>e.password.value=s),error:e.password.error,"onUpdate:error":a[3]||(a[3]=s=>e.password.error=s),rules:[o(b).Required]},null,8,["modelValue","error","rules"]),p("div",H,[r(f,{class:"col-span-full md:col-span-2",action:"submit",loading:o($),label:"Login"},null,8,["loading"]),r(S,{class:"col-span-full md:col-span-2",to:{name:o(Q).REGISTER,query:{initEmail:e.email.value,initPassword:e.password.value}}},{default:c(()=>[r(f,{class:"w-full",outlined:"",label:"Register"})]),_:1},8,["to"]),r(f,{class:"col-span-full md:col-span-2 md:col-start-3",outlined:"",label:"Forgot Password",onClick:L})])],32),r(A)])]),_:1})]),_:1})}}}),z=g({__name:"Login",setup(V){return(l,t)=>(R(),y(J))}});export{z as default};
