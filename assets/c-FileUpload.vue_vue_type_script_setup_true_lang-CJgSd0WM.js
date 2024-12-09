import{a as D}from"./c-TextField.vue_vue_type_script_setup_true_lang-DhuayGui.js";import{_ as I}from"./c-validation-Bf-E2UlI.js";import{M as L,bU as N,bV as T,bW as q,aS as t,q as g,cl as z,bQ as A,bC as E,aK as o,u as d,b9 as b,t as i,v as c,s as h,au as K,a4 as M,ar as O,cm as Q}from"../bundle.js";const W={class:"m-4"},G=["for"],H={class:"flex justify-between gap-1"},J=["id","disabled"],X={key:2},Y={class:"flex justify-center"},Z=["src"],le=L({__name:"FileUpload",props:{id:{},name:{},label:{},modelValue:{},error:{},isPublic:{type:Boolean},blogPost:{},imageProps:{},imageContainerProps:{}},emits:["update:modelValue","update:error"],setup(_,{expose:y,emit:P}){const l=_,V=N(),k=T(),{firebaseUser:f}=q(V),{fetchFileInfo:w,uploadFile:U,deleteFile:F}=k,v=t(),s=t(null),n=t(0),r=g(()=>z(l.modelValue||"uploads/"+A())),C=g(()=>r.value.name),u=t(),m=t(""),R=e=>{const a=e.target;a.files&&a.files.length>0&&(s.value=a.files[0],m.value=s.value.name,S())},S=async()=>{var e,a;s.value&&((e=f.value)!=null&&e.uid)&&await U(r.value,s.value,j=>n.value=j,m.value,(a=f.value)==null?void 0:a.uid,l.isPublic,l.blogPost)&&(p("update:modelValue",await Q(r.value)),s.value=null,n.value=0)},B=async()=>{await F(r.value)?(window.URL.revokeObjectURL(l.modelValue),v.value.value=null,p("update:modelValue","")):p("update:error","Failed to delete File reference")},$=()=>{};E(()=>l.modelValue,async()=>{var e;u.value=l.modelValue?await w(C.value):void 0,m.value=((e=u.value)==null?void 0:e.name)??""},{immediate:!0});const p=P;return y({test:$}),(e,a)=>(o(),d("div",W,[e.label?(o(),d("label",{key:0,class:"block text-sm font-bold mb-2",for:`${e.id}`},b(e.label),9,G)):i("",!0),c("div",H,[c("input",{id:`${e.id}`,ref_key:"fileUpload",ref:v,type:"file",accept:"image/*",onChange:R,class:"p-input",disabled:!!u.value},null,40,J),e.modelValue?(o(),h(D,{key:0,onClick:B})):i("",!0)]),e.error?(o(),h(I,{key:1,name:e.name,error:e.error},null,8,["name","error"])):i("",!0),n.value>0?(o(),d("div",X,"Uploading: "+b(n.value.toFixed(2))+"%",1)):i("",!0),c("div",Y,[c("div",K(M(e.imageContainerProps)),[u.value?(o(),d("img",O({key:0,class:"p-input-file mt-4 w-full min-w-25 md:max-w-fit",src:e.modelValue},e.imageProps),null,16,Z)):i("",!0)],16)])]))}});export{le as _};
