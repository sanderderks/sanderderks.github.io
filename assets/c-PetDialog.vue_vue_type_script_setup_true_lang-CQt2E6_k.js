import{_ as B,a as H}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DbYvCOiw.js";import{_ as k}from"./c-DateField.vue_vue_type_script_setup_true_lang-DmSg3HvC.js";import{_ as K}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-BHTT2jpi.js";import{_ as x}from"./c-SelectField.vue_vue_type_script_setup_true_lang-4iDIQG91.js";import{_ as v}from"./c-TextField.vue_vue_type_script_setup_true_lang-Buqu1h6v.js";import{e as W,h as J,at as Q,s as N,a as X,c as d,r as o,M as Y,l as $,q as S,D as s,p as R,n as t,k as i,av as Z,au as ee,y as re,t as ae,aC as le,b as te}from"../bundle.js";import{R as _}from"./c-validation-DokkLKHB.js";import{s as I,a as oe}from"./c-accordiontab.esm-1sAn2CS4.js";const ne={class:"pt-6 mb-4 xl:px-16"},ie={class:"basis-full lg:basis-1/2"},we=W({__name:"PetDialog",props:{isOpen:{type:Boolean},originalPet:{}},emits:["close"],setup(M,{emit:q}){const n=M,f=q,G=J(),g=Q(),{isMutationLoading:T}=N(g),{firebaseUser:j}=N(G),{createPet:A,updatePet:L}=g,p=r=>({name:{value:(r==null?void 0:r.name)??"",error:""},avatar:{value:(r==null?void 0:r.avatar)??"",error:""},dateOfBirth:{value:r!=null&&r.dateOfBirth?new Date(r.dateOfBirth):null,error:""},type:{value:(r==null?void 0:r.type)??"cat",error:""},breed:{value:(r==null?void 0:r.breed)??"",error:""},gender:{value:(r==null?void 0:r.gender)??"male",error:""},weight:{value:r!=null&&r.weight?r.weight.toString():"",error:""},insideCat:{value:(r==null?void 0:r.insideCat)??!1,error:""},castrated:{value:(r==null?void 0:r.castrated)??!1,error:""},dewormingDate:{value:r!=null&&r.dewormingDate?new Date(r.dewormingDate):null,error:""}}),e=X(p(n.originalPet)),u=d(()=>{var r,a;return{name:e.name.value,userId:((r=n.originalPet)==null?void 0:r.userId)??((a=j.value)==null?void 0:a.uid)??"",avatar:e.avatar.value,dateOfBirth:e.dateOfBirth.value??null,type:e.type.value,breed:e.breed.value,gender:e.gender.value,weight:isNaN(+e.weight.value)?null:+e.weight.value,insideCat:e.type.value==="cat"?e.insideCat.value:null,castrated:e.castrated.value,dewormingDate:e.dewormingDate.value??null}}),w=o(),b=o(),V=o(),y=o(),c=o(),C=o(),h=o(),P=o(),U=o(),D=o(),m=d(()=>n.originalPet?le.convert(n.originalPet):null),F=d(()=>!te(m.value,u.value)),O=d(()=>{if(e.name.value)return e.name.value;switch(e.type.value){case"cat":return"Cat";case"dog":return"Dog";default:return"Pet"}}),z=async()=>{var r;await Promise.all([w.value.test(),b.value.test(),V.value.test(),y.value.test(),c.value.test(),C.value.test(),h.value.test(),(r=P.value)==null?void 0:r.test(),U.value.test(),D.value.test()]),!(e.name.error||e.avatar.error||e.dateOfBirth.error||e.type.error||e.breed.error||e.gender.error||e.weight.error||e.insideCat.error||e.castrated.error||e.dewormingDate.error)&&(n.originalPet?await L(n.originalPet.id,u.value):await A(u.value),f("close"))},E=()=>{f("close")};return Y(()=>[n.isOpen,n.originalPet],()=>{Object.assign(e,p(n.originalPet))}),(r,a)=>($(),S(H,{isOpen:r.isOpen,title:m.value?"Update Pet":"Create Pet",description:"Keep in mind that pet data is visible to all authenticated users.","confirm-text":m.value?F.value?"Update":"Nothing changed":"Create","confirm-loading":i(T),"confirm-props":{disabled:!F.value},onConfirm:z,onCancel:E},{default:s(()=>[R("form",ne,[t(v,{ref_key:"nameField",ref:w,id:"name",name:"name",label:"Name",placeholder:"Mogu",modelValue:e.name.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.name.value=l),error:e.name.error,"onUpdate:error":a[1]||(a[1]=l=>e.name.error=l),rules:[i(_).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),t(i(oe),null,{default:s(()=>[t(i(I),{header:`${O.value}'s Details`},{default:s(()=>[t(k,{ref_key:"dateOfBirthField",ref:V,name:"dateOfBirth",label:"Date of birth",modelValue:e.dateOfBirth.value,"onUpdate:modelValue":a[2]||(a[2]=l=>e.dateOfBirth.value=l),error:e.dateOfBirth.error,"onUpdate:error":a[3]||(a[3]=l=>e.dateOfBirth.error=l),"without-time":""},null,8,["modelValue","error"]),t(x,{ref_key:"typeField",ref:y,name:"type",label:"Type",modelValue:e.type.value,"onUpdate:modelValue":a[4]||(a[4]=l=>e.type.value=l),error:e.type.error,"onUpdate:error":a[5]||(a[5]=l=>e.type.error=l),options:i(Z)},null,8,["modelValue","error","options"]),t(v,{ref_key:"breedField",ref:c,id:"breed",name:"breed",label:"Breed",placeholder:e.type.value==="dog"?"Golden Retriever":"Maine Coone",modelValue:e.breed.value,"onUpdate:modelValue":a[6]||(a[6]=l=>e.breed.value=l),error:e.breed.error,"onUpdate:error":a[7]||(a[7]=l=>e.breed.error=l),"min-length":3,"max-length":50},null,8,["placeholder","modelValue","error"]),t(x,{ref_key:"genderField",ref:C,name:"gender",label:"Gender",modelValue:e.gender.value,"onUpdate:modelValue":a[8]||(a[8]=l=>e.gender.value=l),error:e.gender.error,"onUpdate:error":a[9]||(a[9]=l=>e.gender.error=l),options:i(ee)},null,8,["modelValue","error","options"])]),_:1},8,["header"]),t(i(I),{header:`${O.value}'s Health`},{default:s(()=>[t(v,re({ref_key:"weightField",ref:h,name:"weight",label:"Weight (kg)",modelValue:e.weight.value,"onUpdate:modelValue":a[10]||(a[10]=l=>e.weight.value=l),error:e.weight.error,"onUpdate:error":a[11]||(a[11]=l=>e.weight.error=l)},e.weight.value?{rules:[i(_).Numeric],minValue:1,maxValue:10}:void 0,{"input-props":{type:"number"}}),null,16,["modelValue","error"]),e.type.value==="cat"?($(),S(B,{key:0,ref_key:"insideCatField",ref:P,name:"insideCat",label:"Inside Cat",modelValue:e.insideCat.value,"onUpdate:modelValue":a[12]||(a[12]=l=>e.insideCat.value=l)},null,8,["modelValue"])):ae("",!0),t(B,{ref_key:"castratedField",ref:U,name:"castrated",label:"Castrated or Sterilized",modelValue:e.castrated.value,"onUpdate:modelValue":a[13]||(a[13]=l=>e.castrated.value=l)},null,8,["modelValue"]),t(k,{ref_key:"dewormingDateField",ref:D,name:"dewormingDate",label:"Last deworming date",modelValue:e.dewormingDate.value,"onUpdate:modelValue":a[14]||(a[14]=l=>e.dewormingDate.value=l),error:e.dewormingDate.error,"onUpdate:error":a[15]||(a[15]=l=>e.dewormingDate.error=l),"without-time":""},null,8,["modelValue","error"])]),_:1},8,["header"])]),_:1}),R("div",ie,[t(K,{ref_key:"avatarField",ref:b,id:"avatar",name:"avatar",label:"Avatar",modelValue:e.avatar.value,"onUpdate:modelValue":a[16]||(a[16]=l=>e.avatar.value=l),error:e.avatar.error,"onUpdate:error":a[17]||(a[17]=l=>e.avatar.error=l),"is-public":"","image-props":{class:"rounded-full"},"image-container-props":{class:"!h-64 !w-64"}},null,8,["modelValue","error"])])])]),_:1},8,["isOpen","title","confirm-text","confirm-loading","confirm-props"]))}});export{we as _};
