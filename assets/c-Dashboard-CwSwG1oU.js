import{M as H,bR as ee,bQ as I,bS as ae,aS as i,aQ as re,q as v,c3 as _,ci as le,cj as se,cg as oe,bD as te,aK as o,s as t,bH as L,bi as l,v as p,bM as ue,I as d,t as u,ak as Q,u as ne}from"../bundle.js";import{u as ie,b as de,a as me,_ as g}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CecaO51i.js";import{_ as G,a as ve}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-CqI702AU.js";import{_ as pe,a as k,b as fe}from"./c-PasswordField.vue_vue_type_script_setup_true_lang-1GzfdI_9.js";import{_ as we}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-B7LkxnkG.js";import{_ as U}from"./c-TextField.vue_vue_type_script_setup_true_lang-DjwGVSFt.js";import{_ as be}from"./c-Page.vue_vue_type_script_setup_true_lang-CrjQU66C.js";import{R as f}from"./c-validation-Bf-E2UlI.js";const Pe={class:"flex flex-wrap pt-6 pb-8 mb-4"},ce={class:"basis-full lg:basis-1/2"},Ne={class:"flex gap-3 mt-10 flex-wrap"},ye={class:"basis-full lg:basis-1/2"},Ve={key:0,class:"basis-full lg:basis-1/2 flex gap-3 mt-10 flex-wrap"},ge={class:"flex flex-col items-center content-center"},ke=H({__name:"Dashboard",setup(K){const C=ie(de).greaterOrEqual("md"),m=ee(),{currentUser:n,firebaseUser:b,publicUser:P,isOwner:w,isMutationLoading:D}=I(m),O=ae(),{fetchAll:z}=O,{content:J,isOnline:x,debug:$}=I(O),c=i(!1),R=i(),A=i(),S=i(),q=i(),E=i(),N=i(),M=i(),X=i(),e=re({firstName:{value:"",error:""},lastName:{value:"",error:""},displayName:{value:"",error:""},email:{value:"",error:""},newPassword:{value:"",error:""},currentPassword:{value:"",error:""},repeatPassword:{value:"",error:""},avatar:{value:"",error:""}}),T=v(()=>({firstName:e.firstName.value,lastName:e.lastName.value})),Y=v(()=>({displayName:e.displayName.value,avatar:e.avatar.value})),Z=v(()=>!!n.value&&!_(le.convert(n.value),T.value)),B=v(()=>!!P.value&&!_(se.convert(P.value),Y.value)),y=v(()=>{var s;return e.email.value!==((s=b.value)==null?void 0:s.email)}),V=v(()=>{const s=[];return Z.value&&s.push("Details"),B.value&&s.push("Public Profile"),y.value&&s.push("E-mail"),e.newPassword.value&&s.push("Password"),s.length?"Save "+oe(s):void 0}),h=async()=>{var s;Object.keys(e).forEach(a=>e[a].error=""),e.newPassword.value&&(await Promise.all([E.value.test(),N.value.test(),M.value.test()]),!e.newPassword.error&&!e.currentPassword.error&&!e.repeatPassword.error&&(await m.updatePassword(e.newPassword.value,e.currentPassword.value),e.newPassword.value="",e.currentPassword.value="")),B.value&&(await S.value.test(),!e.displayName.error&&!e.avatar.error&&m.updatePublicUser({displayName:e.displayName.value,avatar:e.avatar.value})),y.value&&(await Promise.all([q.value.test(),N.value.test()]),!e.email.error&&!e.currentPassword.error&&(await m.updateMail(e.email.value,e.currentPassword.value),e.currentPassword.value="")),_(n.value,T.value)||(await Promise.all([R.value.test(),A.value.test()]),!e.firstName.error&&!e.lastName.error&&m.updateUser({firstName:e.firstName.value,lastName:e.lastName.value})),await z((s=b.value)==null?void 0:s.uid,!0)};return te(()=>{var s,a,r,j,F;e.firstName.value=((s=n.value)==null?void 0:s.firstName)||"",e.lastName.value=((a=n.value)==null?void 0:a.lastName)||"",e.displayName.value=((r=P.value)==null?void 0:r.displayName)||"",e.email.value=((j=b.value)==null?void 0:j.email)||"",e.avatar.value=((F=P.value)==null?void 0:F.avatar)||""}),(s,a)=>(o(),t(be,null,{content:L(()=>[l(n)&&l(b)?(o(),t(me,{key:0,class:"!bg-secondary-500 !bg-opacity-35 my-5",title:"Welcome "+l(n).firstName+(l(n).lastName?" "+l(n).lastName:""),description:l(J).dashboardDescription},{default:L(()=>[p("div",Pe,[p("div",ce,[p("form",{id:"accountForm",onSubmit:a[19]||(a[19]=ue(r=>h(),["prevent"]))},[d(U,{name:"accountType",label:"Account Type","model-value":l(w)?"Owner":"Member","input-props":{disabled:!0}},null,8,["model-value"]),d(U,{ref_key:"firstName",ref:R,name:"firstName",label:"First Name",placeholder:"Someone",modelValue:e.firstName.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.firstName.value=r),error:e.firstName.error,"onUpdate:error":a[1]||(a[1]=r=>e.firstName.error=r),rules:[l(f).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),d(U,{ref_key:"lastName",ref:A,name:"lastName",label:"Last Name",modelValue:e.lastName.value,"onUpdate:modelValue":a[2]||(a[2]=r=>e.lastName.value=r),error:e.lastName.error,"onUpdate:error":a[3]||(a[3]=r=>e.lastName.error=r),"min-length":3,"max-length":50},null,8,["modelValue","error"]),d(U,{ref_key:"displayName",ref:S,name:"displayName",label:"Public Username",modelValue:e.displayName.value,"onUpdate:modelValue":a[4]||(a[4]=r=>e.displayName.value=r),error:e.displayName.error,"onUpdate:error":a[5]||(a[5]=r=>e.displayName.error=r),rules:[l(f).MinLength],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),d(pe,{ref_key:"email",ref:q,name:"email",label:"E-mail",modelValue:e.email.value,"onUpdate:modelValue":a[6]||(a[6]=r=>e.email.value=r),error:e.email.error,"onUpdate:error":a[7]||(a[7]=r=>e.email.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"]),y.value?(o(),t(k,{key:0,ref_key:"currentPassword",ref:N,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[8]||(a[8]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[9]||(a[9]=r=>e.currentPassword.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"])):u("",!0),d(k,{ref_key:"newPassword",ref:E,name:"newPassword",label:"New Password",modelValue:e.newPassword.value,"onUpdate:modelValue":a[10]||(a[10]=r=>e.newPassword.value=r),error:e.newPassword.error,"onUpdate:error":a[11]||(a[11]=r=>e.newPassword.error=r),min:6,max:50},null,8,["modelValue","error"]),e.newPassword.value?(o(),t(k,{key:1,ref_key:"repeatPassword",ref:M,name:"repeatPassword",label:"Repeat New Password",modelValue:e.repeatPassword.value,"onUpdate:modelValue":a[12]||(a[12]=r=>e.repeatPassword.value=r),error:e.repeatPassword.error,"onUpdate:error":a[13]||(a[13]=r=>e.repeatPassword.error=r),rules:[l(f).Required],compare:{value:e.newPassword.value,name:"New Password"}},null,8,["modelValue","error","rules","compare"])):u("",!0),e.newPassword.value&&!y.value?(o(),t(k,{key:2,ref_key:"currentPassword",ref:N,name:"currentPassword",label:"Current Password",modelValue:e.currentPassword.value,"onUpdate:modelValue":a[14]||(a[14]=r=>e.currentPassword.value=r),error:e.currentPassword.error,"onUpdate:error":a[15]||(a[15]=r=>e.currentPassword.error=r),rules:[l(f).Required]},null,8,["modelValue","error","rules"])):u("",!0),p("div",Ne,[V.value?(o(),t(g,{key:0,class:"w-full",action:"submit",loading:l(D),label:V.value},null,8,["loading","label"])):u("",!0),l(w)?u("",!0):(o(),t(g,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[16]||(a[16]=r=>c.value=!0)}))]),l(w)?(o(),t(G,{key:3,name:"isOnline",label:"Online",modelValue:l(x),"onUpdate:modelValue":a[17]||(a[17]=r=>Q(x)?x.value=r:null)},null,8,["modelValue"])):u("",!0),l(w)?(o(),t(G,{key:4,name:"debug",label:"Debug",modelValue:l($),"onUpdate:modelValue":a[18]||(a[18]=r=>Q($)?$.value=r:null)},null,8,["modelValue"])):u("",!0)],32)]),p("div",ye,[d(we,{ref_key:"avatar",ref:X,id:"avatar",name:"avatar",label:"Public Avatar",modelValue:e.avatar.value,"onUpdate:modelValue":a[20]||(a[20]=r=>e.avatar.value=r),error:e.avatar.error,"onUpdate:error":a[21]||(a[21]=r=>e.avatar.error=r),"is-public":"","image-props":{class:"rounded-full"},"image-container-props":{class:"!h-64 !w-64"}},null,8,["modelValue","error"])]),l(C)?u("",!0):(o(),ne("div",Ve,[V.value?(o(),t(g,{key:0,class:"w-full",action:"submit",form:"accountForm",loading:l(D),label:V.value},null,8,["loading","label"])):u("",!0),l(w)?u("",!0):(o(),t(g,{key:1,class:"w-full",type:"danger",outlined:"",label:"Delete account",onClick:a[22]||(a[22]=r=>c.value=!0)}))]))]),p("div",ge,[d(fe)])]),_:1},8,["title","description"])):u("",!0),d(ve,{title:"Delete Account",isOpen:c.value,description:["Are you sure you want to delete your account?","This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:a[23]||(a[23]=r=>l(m).deleteAccount()),onCancel:a[24]||(a[24]=r=>c.value=!1)},null,8,["isOpen"])]),_:1}))}}),Ae=H({__name:"Dashboard",setup(K){return(W,C)=>(o(),t(ke))}});export{Ae as default};