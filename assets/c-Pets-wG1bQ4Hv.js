import{_ as i,a as y}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di5vSobc.js";import{_ as v}from"./c-Page.vue_vue_type_script_setup_true_lang-tFpa4vFG.js";import{e as P,at as $,g as b,s as l,r as x,q as m,D as p,f as C,l as s,n,p as S,k as e,m as u,O as E,R as c,w as L}from"../bundle.js";import{_ as T}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-CgcP1gOi.js";import"./c-Dialog.vue_vue_type_script_setup_true_lang-Dlac_hNb.js";import"./c-DateField.vue_vue_type_script_setup_true_lang-BG1CbGZF.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-BYjoC5lX.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-DT8z_rfW.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-4iDIQG91.js";import"./c-accordiontab.esm-CXU5YCf-.js";const B={class:"flex flex-wrap gap-3 mt-3 mb-5"},D={key:1,class:"text-neutral-300"},G=P({__name:"Pets",setup(I){const _=C(),d=$(),f=b(),{pets:r}=l(d),{routeLoading:g,routeLoadingId:k}=l(f),a=x(!1);return(R,o)=>(s(),m(v,null,{content:p(()=>[n(y,{class:"!bg-primary-500 !bg-opacity-35 my-5",title:"Your Pets"},{default:p(()=>[S("div",B,[e(r).length?(s(!0),u(L,{key:0},E(e(r),t=>(s(),m(i,{key:t.id,label:t.name,loading:e(g)===e(c).PET_DETAILS&&e(k)===t.id,onClick:h=>e(_).push({name:e(c).PET_DETAILS,params:{petId:t.id}})},null,8,["label","loading","onClick"]))),128)):(s(),u("p",D," You don't have any pets yet. "))]),n(i,{label:"Add Pet",type:"green",onClick:o[0]||(o[0]=t=>a.value=!0)})]),_:1}),n(T,{"is-open":a.value,"original-pet":null,onClose:o[1]||(o[1]=t=>a.value=!1)},null,8,["is-open"])]),_:1}))}});export{G as default};
