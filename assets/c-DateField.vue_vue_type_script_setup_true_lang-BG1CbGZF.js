import{e as b,c as s,a5 as _,l as n,m as d,y as k,H as v,t as f,n as P}from"../bundle.js";const D={class:"m-4"},g=["for"],C=b({__name:"DateField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(m,{expose:u,emit:r}){const o=m,a=s({get:()=>o.modelValue,set:e=>{i("update:modelValue",e)}}),l=s(()=>o.name+(o.id!==void 0?"."+o.id:"")),p=()=>{},i=r;return u({test:p}),(e,t)=>{const c=_("VueDatePicker");return n(),d("div",D,[e.label?(n(),d("label",k({key:0,class:"block text-sm font-bold mb-2",for:"dp-input-"+l.value},e.labelProps),v(e.label),17,g)):f("",!0),P(c,{uid:l.value,class:"p-input px-5",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=V=>a.value=V),dark:""},null,8,["uid","modelValue"])])}}});export{C as _};
