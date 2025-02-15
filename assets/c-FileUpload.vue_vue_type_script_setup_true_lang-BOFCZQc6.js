import{a as j}from"./c-TextField.vue_vue_type_script_setup_true_lang-C7FWOWw0.js";import{_ as D}from"./c-validation-DokkLKHB.js";import{e as L,h as N,i as H,s as T,r as t,c as g,aH as q,v as z,M as A,l as o,m as d,H as h,t as i,p as c,q as b,Q as E,S as M,y as O,aI as Q}from"../bundle.js";const G={class:"m-4"},J=["for"],K={class:"flex justify-between gap-1"},W=["id","disabled"],X={key:2},Y={class:"flex justify-center"},Z=["src"],le=L({__name:"FileUpload",props:{id:{},name:{},label:{},modelValue:{},error:{},isPublic:{type:Boolean},blogPost:{},imageProps:{},imageContainerProps:{}},emits:["update:modelValue","update:error"],setup(_,{expose:y,emit:P}){const l=_,k=N(),w=H(),{firebaseUser:f}=T(k),{fetchFileInfo:V,uploadFile:F,deleteFile:U}=w,v=t(),s=t(null),n=t(0),r=g(()=>q(l.modelValue||"uploads/"+z())),C=g(()=>r.value.name),u=t(),m=t(""),R=e=>{const a=e.target;a.files&&a.files.length>0&&(s.value=a.files[0],m.value=s.value.name,S())},S=async()=>{var e,a;s.value&&((e=f.value)!=null&&e.uid)&&await F(r.value,s.value,$=>n.value=$,m.value,(a=f.value)==null?void 0:a.uid,l.isPublic,l.blogPost)&&(p("update:modelValue",await Q(r.value)),s.value=null,n.value=0)},B=async()=>{await U(r.value)?(window.URL.revokeObjectURL(l.modelValue),v.value.value=null,p("update:modelValue","")):p("update:error","Failed to delete File reference")},I=()=>{};A(()=>l.modelValue,async()=>{var e;u.value=l.modelValue?await V(C.value):void 0,m.value=((e=u.value)==null?void 0:e.name)??""},{immediate:!0});const p=P;return y({test:I}),(e,a)=>(o(),d("div",G,[e.label?(o(),d("label",{key:0,class:"block text-sm font-bold mb-2",for:`${e.id}`},h(e.label),9,J)):i("",!0),c("div",K,[c("input",{id:`${e.id}`,ref_key:"fileUpload",ref:v,type:"file",accept:"image/*",onChange:R,class:"p-input",disabled:!!u.value},null,40,W),e.modelValue?(o(),b(j,{key:0,onClick:B})):i("",!0)]),e.error?(o(),b(D,{key:1,name:e.name,error:e.error},null,8,["name","error"])):i("",!0),n.value>0?(o(),d("div",X,"Uploading: "+h(n.value.toFixed(2))+"%",1)):i("",!0),c("div",Y,[c("div",E(M(e.imageContainerProps)),[u.value?(o(),d("img",O({key:0,class:"p-input-file mt-4 w-full min-w-25 md:max-w-fit",src:e.modelValue},e.imageProps),null,16,Z)):i("",!0)],16)])]))}});export{le as _};
