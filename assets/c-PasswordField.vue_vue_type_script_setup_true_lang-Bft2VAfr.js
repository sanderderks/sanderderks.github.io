import{e as f,g as _,s as b,l as p,m as c,w,O as k,H as h,k as V,r as g,c as i,q as v}from"../bundle.js";import{_ as y}from"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import{R as x}from"./c-validation-DokkLKHB.js";const S={class:"flex flex-col lg:justify-center lg:items-center py-10 text-md text-neutral-400"},U={class:"m-1 lg:w-4/5"},R=f({__name:"Privacy",setup(d){const s=_(),{content:n}=b(s);return(o,t)=>(p(),c("div",S,[(p(!0),c(w,null,k(V(n).privacyStatement,a=>(p(),c("p",U,h(a),1))),256))]))}}),$=f({__name:"EmailField",props:{id:{},name:{},label:{},rules:{},modelValue:{},error:{}},emits:["update:modelValue","update:error"],setup(d,{expose:s,emit:n}){const o=d,t=g(),a=i({get:()=>o.modelValue,set:e=>{u("update:modelValue",e)}}),m=i({get:()=>o.error,set:e=>{u("update:error",e??"")}}),u=n;return s({test:async()=>await t.value.test()}),(e,r)=>(p(),v(y,{ref_key:"email",ref:t,id:e.id,name:e.name,label:e.label,placeholder:"someone@example.com","input-props":{type:"email",autocomplete:"on"},modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=l=>a.value=l),error:m.value,"onUpdate:error":r[1]||(r[1]=l=>m.value=l),rules:[...e.rules,V(x).Email]},null,8,["id","name","label","modelValue","error","rules"]))}}),P=f({__name:"PasswordField",props:{id:{},name:{},label:{},placeholder:{},rules:{},modelValue:{},error:{},min:{},max:{},compare:{}},emits:["update:modelValue","update:error"],setup(d,{expose:s,emit:n}){const o=d,t=g(),a=i({get:()=>o.modelValue,set:e=>{u("update:modelValue",e)}}),m=i({get:()=>o.error,set:e=>{u("update:error",e??"")}}),u=n;return s({test:async()=>t.value.test()}),(e,r)=>(p(),v(y,{ref_key:"password",ref:t,id:e.id,name:e.name,label:e.label,placeholder:"******","input-props":{type:"password",autocomplete:"on"},modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=l=>a.value=l),error:m.value,"onUpdate:error":r[1]||(r[1]=l=>m.value=l),rules:e.rules,"min-length":e.min,"max-length":e.max,compare:e.compare},null,8,["id","name","label","modelValue","error","rules","min-length","max-length","compare"]))}});export{$ as _,P as a,R as b};
