import{e as J,f as ue,h as ne,g as ie,A as de,a6 as me,s as U,r as d,a as ve,c as v,b as S,a7 as pe,a8 as fe,a2 as we,a9 as ce,l as o,q as t,D as G,k as l,p as m,aa as Pe,n as u,t as n,ab as z,m as be,R as k}from"../bundle.js";import{u as Ne,b as ye,a as ge,_ as p}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BSEDXuxp.js";import{_ as H,a as Ve}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DbYvCOiw.js";import{_ as Ue,a as x,b as ke}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-BnKfHs3E.js";import{_ as xe}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-BHTT2jpi.js";import{_}from"./c-TextField.vue_vue_type_script_setup_true_lang-Buqu1h6v.js";import{_ as _e}from"./c-Page.vue_vue_type_script_setup_true_lang-LCEPLqyA.js";import{R as f}from"./c-validation-DokkLKHB.js";const Ee={class:"flex flex-wrap pt-6 pb-8 mb-4"},Re={class:"basis-full lg:basis-1/2"},Se={class:"flex gap-3 mt-10 flex-wrap"},$e={class:"basis-full lg:basis-1/2"},Ce={key:0,class:"basis-full lg:basis-1/2 flex gap-3 mt-10 flex-wrap"},De={class:"flex flex-col items-center content-center"},Oe={class:"flex flex-col gap-3 items-center content-center"},Ae=J({__name:"Dashboard",setup(K){const $=ue(),X=Ne(ye).greaterOrEqual("md"),c=ne(),C=ie(),D=de(),Z=me(),{isOnline:E,debug:R}=U(Z),{content:h,routeLoading:O}=U(C),{currentUser:i,publicUser:P,isMutationLoading:A}=U(D),{firebaseUser:b,isOwner:w}=U(c),{fetchAll:ee}=C,{updateUser:ae,updatePublicUser:re}=D,N=d(!1),T=d(),q=d(),I=d(),B=d(),L=d(),y=d(),M=d(),le=d(),e=ve({firstName:{value:"",error:""},lastName:{value:"",error:""},displayName:{value:"",error:""},email:{value:"",error:""},newPassword:{value:"",error:""},currentPassword:{value:"",error:""},repeatPassword:{value:"",error:""},avatar:{value:"",error:""}}),F=v(()=>({firstName:e.firstName.value,lastName:e.lastName.value})),se=v(()=>({displayName:e.displayName.value,avatar:e.avatar.value})),oe=v(()=>!!i.value&&!S(pe.convert(i.value),F.value)),W=v(()=>!!P.value&&!S(fe.convert(P.value),se.value)),g=v(()=>{var s;return e.email.value!==((s=b.value)==null?void 0:s.email)}),V=v(()=>{const s=[];return oe.value&&s.push("Details"),W.value&&s.push("Public Profile"),g.value&&s.push("E-mail"),e.newPassword.value&&s.push("Password"),s.length?"Save "+we(s):void 0}),te=async()=>{var s;Object.keys(e).forEach(a=>e[a].error=""),e.newPassword.value&&(await Promise.all([L.value.test(),y.value.test(),M.value.test()]),!e.newPassword.error&&!e.currentPassword.error&&!e.repeatPassword.error&&(await c.updatePassword(e.newPassword.value,e.currentPassword.value),e.newPassword.value="",e.currentPassword.value="")),W.value&&(await I.value.test(),!e.displayName.error&&!e.avatar.error&&re({displayName:e.displayName.value,avatar:e.avatar.value})),g.value&&(await Promise.all([B.value.test(),y.value.test()]),!e.email.error&&!e.currentPassword.error&&(await c.updateMail(e.email.value,e.currentPassword.value),e.currentPassword.value="")),S(i.value,F.value)||(await Promise.all([T.value.test(),q.value.test()]),!e.firstName.error&&!e.lastName.error&&ae({firstName:e.firstName.value,lastName:e.lastName.value})),await ee((s=b.value)==null?void 0:s.uid,!0)};return ce(()=>{var s,a,r,j,Y;e.firstName.value=((s=i.value)==null?void 0:s.firstName)||"",e.lastName.value=((a=i.value)==null?void 0:a.lastName)||"",e.displayName.value=((r=P.value)==null?void 0:r.displayName)||"",e.email.value=((j=b.value)==null?void 0:j.email)||"",e.avatar.value=((Y=P.value)==null?void 0:Y.avatar)||""}),(s,a)=>(o(),t(_e,null,{content:G(()=>[l(i)&&l(b)?(o(),t(ge,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:"Welcome "+l(i).firstName+(l(i).lastName?" "+l(i).lastName:""),description:l(h).dashboardDescription},{default:G(()=>[m("div",Ee,[m("div",Re,[m("form",{id:"accountForm",onSubmit:a[19]||(a[19]=Pe(r=>te(),["prevent"]))},[u(_,{name:"accountType",label:"Account Type","model-value":l(w)?"Owner":"Member","input-props":{disabled:!0}},null,8,["model-value"]),u(_,{ref_key:"firstName",ref:T,name:"firstName",label:"First Name",placeholder:"Someone",modelValue:e.firstName.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.firstName.value=r),error:e.firstName.error,"onUpdate:error":a[1]||(a[1]=r=>e.firstName.error=r),rules:[l(f).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),u(_,{ref_key:"lastName",ref:q,name:"lastName",label:"Last Name",modelValue:e.lastName.value,"onUpdate:modelValue":a[2]||(a[2]=r=>e.lastName.value=r),error:e.lastName.error,"onUpdate:error":a[3]||(a[3]=r=>e.lastName.error=r),"min-length":3,"max-length":50},null,8,["modelValue","error"]),u(_,{ref_key:"displayName",ref:I,name:"displayName",label:"Public Username",modelValue:e.displayName.value,"onUpdate:modelValue":a[4]||(a[4]=r=>e.displayName.value=r),error:e.displayName.error,"onUpdate:error":a[5]||(a[5]=r=>e.displayName.error=r),rules:[l(f).MinLength],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),u(Ue,{ref_key:"email",ref:B,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[6]||(a[6]=r=>e.email.value=r),error:e.email.error,"onUpdate:error":a[7]||(a[7]=r=>e.email.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"]),g.value?(o(),t(x,{key:0,ref_key:"currentPassword",ref:y,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[8]||(a[8]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[9]||(a[9]=r=>e.currentPassword.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"])):n("",!0),u(x,{ref_key:"newPassword",ref:L,name:"newPassword",label:"New Password",modelValue:e.newPassword.value,"onUpdate:modelValue":a[10]||(a[10]=r=>e.newPassword.value=r),error:e.newPassword.error,"onUpdate:error":a[11]||(a[11]=r=>e.newPassword.error=r),min:6,max:50},null,8,["modelValue","error"]),e.newPassword.value?(o(),t(x,{key:1,ref_key:"repeatPassword",ref:M,name:"repeatPassword",label:"Repeat New Password",modelValue:e.repeatPassword.value,"onUpdate:modelValue":a[12]||(a[12]=r=>e.repeatPassword.value=r),error:e.repeatPassword.error,"onUpdate:error":a[13]||(a[13]=r=>e.repeatPassword.error=r),rules:[l(f).Required],compare:{value:e.newPassword.value,name:"New Password"}},null,8,["modelValue","error","rules","compare"])):n("",!0),e.newPassword.value&&!g.value?(o(),t(x,{key:2,ref_key:"currentPassword",ref:y,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[14]||(a[14]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[15]||(a[15]=r=>e.currentPassword.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"])):n("",!0),m("div",Se,[V.value?(o(),t(p,{key:0,class:"w-full",action:"submit",loading:l(A),label:V.value},null,8,["loading","label"])):n("",!0),l(w)?n("",!0):(o(),t(p,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[16]||(a[16]=r=>N.value=!0)}))]),l(w)?(o(),t(H,{key:3,name:"isOnline",label:"Online",modelValue:l(E),"onUpdate:modelValue":a[17]||(a[17]=r=>z(E)?E.value=r:null)},null,8,["modelValue"])):n("",!0),l(w)?(o(),t(H,{key:4,name:"debug",label:"Debug",modelValue:l(R),"onUpdate:modelValue":a[18]||(a[18]=r=>z(R)?R.value=r:null)},null,8,["modelValue"])):n("",!0)],32)]),m("div",$e,[u(xe,{ref_key:"avatar",ref:le,id:"avatar",name:"avatar",label:"Public Avatar",modelValue:e.avatar.value,"onUpdate:modelValue":a[20]||(a[20]=r=>e.avatar.value=r),error:e.avatar.error,"onUpdate:error":a[21]||(a[21]=r=>e.avatar.error=r),"is-public":"","image-props":{class:"rounded-full"},"image-container-props":{class:"!h-64 !w-64"}},null,8,["modelValue","error"])]),l(X)?n("",!0):(o(),be("div",Ce,[V.value?(o(),t(p,{key:0,class:"w-full",action:"submit",form:"accountForm",loading:l(A),label:V.value},null,8,["loading","label"])):n("",!0),l(w)?n("",!0):(o(),t(p,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[22]||(a[22]=r=>N.value=!0)}))]))]),m("div",De,[u(ke)]),m("div",Oe,[u(p,{class:"w-full md:w-1/2",label:"View Your Profile",type:"purple",loading:l(O)===l(k).USER_DETAILS,onClick:a[23]||(a[23]=r=>l($).push({name:l(k).USER_DETAILS,params:{userId:l(i).id}}))},null,8,["loading"]),u(p,{class:"w-full md:w-1/2",label:"View Your Pets",loading:l(O)===l(k).PET_OVERVIEW,route:l(k).PET_OVERVIEW},null,8,["loading","route"])])]),_:1},8,["title","description"])):n("",!0),u(Ve,{title:"Delete Account",isOpen:N.value,description:["Are you sure you want to delete your account?","This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:a[24]||(a[24]=r=>l(c).deleteAccount()),onCancel:a[25]||(a[25]=r=>N.value=!1)},null,8,["isOpen"])]),_:1}))}}),je=J({__name:"Dashboard",setup(K){return($,Q)=>(o(),t(Ae))}});export{je as default};