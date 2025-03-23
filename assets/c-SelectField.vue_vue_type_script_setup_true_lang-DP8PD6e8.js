import{_ as w,V as D}from"./c-validation-DokkLKHB.js";import{e as N,c as s,o as S,d2 as r,l as c,m as A,p as i,H as v,q as V,D as g,E as k,as as I,t as O}from"../bundle.js";const R={class:"m-4"},E=["for"],j=N({__name:"SelectField",props:{id:{},name:{},label:{},modelValue:{},placeholder:{},error:{},rules:{},options:{},multiple:{type:Boolean}},emits:["update:modelValue","update:arrayValue","update:error"],setup(h,{expose:C,emit:B}){const l=h,u=B,d=s(()=>(l.rules??[]).some(e=>e.type===D.Required)),t=s({get:()=>{if(l.multiple){const e=Array.isArray(l.modelValue)?l.modelValue:[];return e.length?e:d.value?l.options.length?[l.options[0].value]:[]:[]}else{const e=typeof l.modelValue=="string"||typeof l.modelValue=="number"?l.modelValue:"";return e||(l.options.length?l.options[0].value:"")}},set:e=>{u("update:modelValue",r(e)[0]),u("update:arrayValue",r(e))}}),_=s(()=>l.label+(d.value?" *":"")),b=s(()=>l.name+(l.id?"."+l.id:"")),p=s(()=>l.options.find(({value:e})=>e===t.value)),f=s(()=>{var e,o,a;return[((e=p.value)==null?void 0:e.background)??"bg-transparent",(o=p.value)!=null&&o.background?"bg-opacity-90":"bg-opacity-40",((a=p.value)==null?void 0:a.text)??"text-black"]}),q=s(()=>r(t.value).map(e=>{var o;return(o=l.options.find(a=>a.value===e))==null?void 0:o.label}).join(", "));return S(()=>{d.value&&(u("update:modelValue",r(t.value)[0]),u("update:arrayValue",r(t.value)))}),C({test:async()=>{const e=l.rules||[];let o="";for(const a of r(t.value)){const n={value:a.toString()},y=e.filter(m=>!m.test(n)).map(m=>m.error(n))||[];if(y[0]){o=y[0];break}}u("update:error",o)}}),(e,o)=>(c(),A("div",R,[i("label",{class:"block text-sm font-bold mb-2",for:b.value},v(_.value),9,E),i("div",null,[(c(),V(I(e.multiple?"PrimeMultiSelect":"PrimeDropdown"),{inputId:b.value,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),placeholder:e.placeholder??"No option selected",class:"w-full p-input p-0",multiple:e.multiple,options:e.options,optionValue:"value",pt:{trigger:{class:f.value}}},{value:g(({placeholder:a})=>{var n;return[i("span",{class:k(["block w-full p-2",...f.value])},v((e.multiple?q.value:(n=p.value)==null?void 0:n.label)||a),3)]}),option:g(({option:a})=>[i("span",{class:k(["w-full p-2",a.background,a.background?"bg-opacity-90":"bg-opacity-40",a.text])},v(a.label),3)]),_:1},8,["inputId","modelValue","placeholder","multiple","options","pt"]))]),e.error?(c(),V(w,{key:0,name:e.name,error:e.error},null,8,["name","error"])):O("",!0)]))}});export{j as _};
