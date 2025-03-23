import{e as b,f as q,g as U,h as M,s as w,r as m,a as B,o as C,a7 as O,l as y,q as V,D as u,n as s,p as d,ac as P,k as o,R}from"../bundle.js";import{_ as E}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_ as G,a as I,b as j}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-B3TH5kgv.js";import{_ as N}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";import{_ as A}from"./c-TextField.vue_vue_type_script_setup_true_lang-BcDK9ofr.js";import{_ as D}from"./c-Page.vue_vue_type_script_setup_true_lang-BAjMwmwZ.js";import{R as t}from"./c-validation-DokkLKHB.js";const F={class:"flex flex-col items-center content-center"},T={class:"grid grid-cols-2 mt-10 gap-3"},h=b({__name:"Register",setup(k){const l=q(),f=U(),p=M(),{routeLoading:x}=w(f),{isLoginLoading:L}=w(p),{initEmail:n,initPassword:i}=l.currentRoute.value.query,c=m(),_=m(),g=m(),e=B({email:{value:(n==null?void 0:n.toString())||"",error:""},password:{value:(i==null?void 0:i.toString())||"",error:""},firstName:{value:"",error:""}}),$=async()=>{Object.keys(e).forEach(v=>e[v].error=""),await Promise.all([c.value.test(),_.value.test(),g.value.test()]),!e.email.error&&!e.password.error&&!e.firstName.error&&p.register(e.email.value,e.password.value,e.firstName.value)};return C(()=>{l.replace({query:void 0})}),(v,r)=>{const S=O("RouterLink");return y(),V(D,null,{content:u(()=>[s(E,{class:"!bg-cyan-800 !bg-opacity-50 my-5",title:"Register",description:"Please register using your e-mail, password and first name."},{default:u(()=>[d("div",F,[d("form",{class:"w-full lg:w-1/2 xl:w-2/3 px-8 pt-6 pb-8 mb-4",onSubmit:r[6]||(r[6]=P(a=>$(),["prevent"]))},[s(A,{ref_key:"firstName",ref:g,name:"firstName",label:"First Name",placeholder:"Someone",modelValue:e.firstName.value,"onUpdate:modelValue":r[0]||(r[0]=a=>e.firstName.value=a),error:e.firstName.error,"onUpdate:error":r[1]||(r[1]=a=>e.firstName.error=a),rules:[o(t).Required,o(t).MinLength],"min-length":3,"max-length":25},null,8,["modelValue","error","rules"]),s(G,{ref_key:"email",ref:c,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":r[2]||(r[2]=a=>e.email.value=a),error:e.email.error,"onUpdate:error":r[3]||(r[3]=a=>e.email.error=a),rules:[o(t).Required]},null,8,["modelValue","error","rules"]),s(I,{ref_key:"password",ref:_,name:"password",label:"Password",modelValue:e.password.value,"onUpdate:modelValue":r[4]||(r[4]=a=>e.password.value=a),error:e.password.error,"onUpdate:error":r[5]||(r[5]=a=>e.password.error=a),rules:[o(t).Required]},null,8,["modelValue","error","rules"]),d("div",T,[s(N,{class:"col-span-full md:col-span-1",action:"submit",label:"Register",loading:o(L)},null,8,["loading"]),s(S,{to:{name:o(R).LOGIN,query:{initEmail:e.email.value,initPassword:e.password.value}},class:"col-span-full md:col-span-1"},{default:u(()=>[s(N,{class:"w-full",outlined:"",label:"Login",loading:o(x)===o(R).LOGIN},null,8,["loading"])]),_:1},8,["to"])])],32),s(j)])]),_:1})]),_:1})}}}),Y=b({__name:"Register",setup(k){return(l,f)=>(y(),V(h))}});export{Y as default};
