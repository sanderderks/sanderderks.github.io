import{e as H,f as ue,h as ne,g as ie,A as de,a6 as me,s as U,r as d,a as ve,c as v,b as $,a7 as pe,a8 as fe,a3 as we,a9 as ce,l as o,q as t,D as G,k as l,p as m,aa as Pe,n as i,t as u,ab as W,m as be,R as Y}from"../bundle.js";import{u as Ne,b as ye,a as ge,_ as w}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{_ as z,a as Ve}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-JQE6dSwt.js";import{_ as Ue,a as k,b as ke}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-Bft2VAfr.js";import{_ as xe}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-he7r1aqn.js";import{_ as x}from"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import{_ as Se}from"./c-Page.vue_vue_type_script_setup_true_lang-D_ptRD34.js";import{R as p}from"./c-validation-DokkLKHB.js";const _e={class:"flex flex-wrap pt-6 pb-8 mb-4"},$e={class:"basis-full lg:basis-1/2"},Re={class:"flex gap-3 mt-10 flex-wrap"},Ce={class:"basis-full lg:basis-1/2"},De={key:0,class:"basis-full lg:basis-1/2 flex gap-3 mt-10 flex-wrap"},Ae={class:"flex flex-col items-center content-center"},Ee={class:"flex flex-col items-center content-center"},Oe=H({__name:"Dashboard",setup(J){const R=ue(),Q=Ne(ye).greaterOrEqual("md"),c=ne(),C=ie(),D=de(),X=me(),{isOnline:S,debug:_}=U(X),{content:Z,routeLoading:h}=U(C),{currentUser:n,publicUser:P,isMutationLoading:A}=U(D),{firebaseUser:b,isOwner:f}=U(c),{fetchAll:ee}=C,{updateUser:ae,updatePublicUser:re}=D,N=d(!1),E=d(),O=d(),T=d(),q=d(),B=d(),y=d(),L=d(),le=d(),e=ve({firstName:{value:"",error:""},lastName:{value:"",error:""},displayName:{value:"",error:""},email:{value:"",error:""},newPassword:{value:"",error:""},currentPassword:{value:"",error:""},repeatPassword:{value:"",error:""},avatar:{value:"",error:""}}),M=v(()=>({firstName:e.firstName.value,lastName:e.lastName.value})),se=v(()=>({displayName:e.displayName.value,avatar:e.avatar.value})),oe=v(()=>!!n.value&&!$(pe.convert(n.value),M.value)),I=v(()=>!!P.value&&!$(fe.convert(P.value),se.value)),g=v(()=>{var s;return e.email.value!==((s=b.value)==null?void 0:s.email)}),V=v(()=>{const s=[];return oe.value&&s.push("Details"),I.value&&s.push("Public Profile"),g.value&&s.push("E-mail"),e.newPassword.value&&s.push("Password"),s.length?"Save "+we(s):void 0}),te=async()=>{var s;Object.keys(e).forEach(a=>e[a].error=""),e.newPassword.value&&(await Promise.all([B.value.test(),y.value.test(),L.value.test()]),!e.newPassword.error&&!e.currentPassword.error&&!e.repeatPassword.error&&(await c.updatePassword(e.newPassword.value,e.currentPassword.value),e.newPassword.value="",e.currentPassword.value="")),I.value&&(await T.value.test(),!e.displayName.error&&!e.avatar.error&&re({displayName:e.displayName.value,avatar:e.avatar.value})),g.value&&(await Promise.all([q.value.test(),y.value.test()]),!e.email.error&&!e.currentPassword.error&&(await c.updateMail(e.email.value,e.currentPassword.value),e.currentPassword.value="")),$(n.value,M.value)||(await Promise.all([E.value.test(),O.value.test()]),!e.firstName.error&&!e.lastName.error&&ae({firstName:e.firstName.value,lastName:e.lastName.value})),await ee((s=b.value)==null?void 0:s.uid,!0)};return ce(()=>{var s,a,r,F,j;e.firstName.value=((s=n.value)==null?void 0:s.firstName)||"",e.lastName.value=((a=n.value)==null?void 0:a.lastName)||"",e.displayName.value=((r=P.value)==null?void 0:r.displayName)||"",e.email.value=((F=b.value)==null?void 0:F.email)||"",e.avatar.value=((j=P.value)==null?void 0:j.avatar)||""}),(s,a)=>(o(),t(Se,null,{content:G(()=>[l(n)&&l(b)?(o(),t(ge,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:"Welcome "+l(n).firstName+(l(n).lastName?" "+l(n).lastName:""),description:l(Z).dashboardDescription},{default:G(()=>[m("div",_e,[m("div",$e,[m("form",{id:"accountForm",onSubmit:a[19]||(a[19]=Pe(r=>te(),["prevent"]))},[i(x,{name:"accountType",label:"Account Type","model-value":l(f)?"Owner":"Member","input-props":{disabled:!0}},null,8,["model-value"]),i(x,{ref_key:"firstName",ref:E,name:"firstName",label:"First Name",placeholder:"Someone",modelValue:e.firstName.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.firstName.value=r),error:e.firstName.error,"onUpdate:error":a[1]||(a[1]=r=>e.firstName.error=r),rules:[l(p).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),i(x,{ref_key:"lastName",ref:O,name:"lastName",label:"Last Name",modelValue:e.lastName.value,"onUpdate:modelValue":a[2]||(a[2]=r=>e.lastName.value=r),error:e.lastName.error,"onUpdate:error":a[3]||(a[3]=r=>e.lastName.error=r),"min-length":3,"max-length":50},null,8,["modelValue","error"]),i(x,{ref_key:"displayName",ref:T,name:"displayName",label:"Public Username",modelValue:e.displayName.value,"onUpdate:modelValue":a[4]||(a[4]=r=>e.displayName.value=r),error:e.displayName.error,"onUpdate:error":a[5]||(a[5]=r=>e.displayName.error=r),rules:[l(p).MinLength],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),i(Ue,{ref_key:"email",ref:q,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[6]||(a[6]=r=>e.email.value=r),error:e.email.error,"onUpdate:error":a[7]||(a[7]=r=>e.email.error=r),rules:[l(p).Required]},null,8,["modelValue","error","rules"]),g.value?(o(),t(k,{key:0,ref_key:"currentPassword",ref:y,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[8]||(a[8]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[9]||(a[9]=r=>e.currentPassword.error=r),rules:[l(p).Required]},null,8,["modelValue","error","rules"])):u("",!0),i(k,{ref_key:"newPassword",ref:B,name:"newPassword",label:"New Password",modelValue:e.newPassword.value,"onUpdate:modelValue":a[10]||(a[10]=r=>e.newPassword.value=r),error:e.newPassword.error,"onUpdate:error":a[11]||(a[11]=r=>e.newPassword.error=r),min:6,max:50},null,8,["modelValue","error"]),e.newPassword.value?(o(),t(k,{key:1,ref_key:"repeatPassword",ref:L,name:"repeatPassword",label:"Repeat New Password",modelValue:e.repeatPassword.value,"onUpdate:modelValue":a[12]||(a[12]=r=>e.repeatPassword.value=r),error:e.repeatPassword.error,"onUpdate:error":a[13]||(a[13]=r=>e.repeatPassword.error=r),rules:[l(p).Required],compare:{value:e.newPassword.value,name:"New Password"}},null,8,["modelValue","error","rules","compare"])):u("",!0),e.newPassword.value&&!g.value?(o(),t(k,{key:2,ref_key:"currentPassword",ref:y,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[14]||(a[14]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[15]||(a[15]=r=>e.currentPassword.error=r),rules:[l(p).Required]},null,8,["modelValue","error","rules"])):u("",!0),m("div",Re,[V.value?(o(),t(w,{key:0,class:"w-full",action:"submit",loading:l(A),label:V.value},null,8,["loading","label"])):u("",!0),l(f)?u("",!0):(o(),t(w,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[16]||(a[16]=r=>N.value=!0)}))]),l(f)?(o(),t(z,{key:3,name:"isOnline",label:"Online",modelValue:l(S),"onUpdate:modelValue":a[17]||(a[17]=r=>W(S)?S.value=r:null)},null,8,["modelValue"])):u("",!0),l(f)?(o(),t(z,{key:4,name:"debug",label:"Debug",modelValue:l(_),"onUpdate:modelValue":a[18]||(a[18]=r=>W(_)?_.value=r:null)},null,8,["modelValue"])):u("",!0)],32)]),m("div",Ce,[i(xe,{ref_key:"avatar",ref:le,id:"avatar",name:"avatar",label:"Public Avatar",modelValue:e.avatar.value,"onUpdate:modelValue":a[20]||(a[20]=r=>e.avatar.value=r),error:e.avatar.error,"onUpdate:error":a[21]||(a[21]=r=>e.avatar.error=r),"is-public":"","image-props":{class:"rounded-full"},"image-container-props":{class:"!h-64 !w-64"}},null,8,["modelValue","error"])]),l(Q)?u("",!0):(o(),be("div",De,[V.value?(o(),t(w,{key:0,class:"w-full",action:"submit",form:"accountForm",loading:l(A),label:V.value},null,8,["loading","label"])):u("",!0),l(f)?u("",!0):(o(),t(w,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[22]||(a[22]=r=>N.value=!0)}))]))]),m("div",Ae,[i(ke)]),m("div",Ee,[i(w,{class:"w-full md:w-1/2",label:"View Your Profile",type:"purple",loading:l(h)===l(Y).USER_DETAILS,onClick:a[23]||(a[23]=r=>l(R).push({name:l(Y).USER_DETAILS,params:{userId:l(n).id}}))},null,8,["loading"])])]),_:1},8,["title","description"])):u("",!0),i(Ve,{title:"Delete Account",isOpen:N.value,description:["Are you sure you want to delete your account?","This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:a[24]||(a[24]=r=>l(c).deleteAccount()),onCancel:a[25]||(a[25]=r=>N.value=!1)},null,8,["isOpen"])]),_:1}))}}),Ge=H({__name:"Dashboard",setup(J){return(R,K)=>(o(),t(Oe))}});export{Ge as default};
