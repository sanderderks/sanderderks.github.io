import{e as b,c as s,a7 as k,l as n,m,y as v,H as _,t as f,n as P}from"../bundle.js";const y={class:"m-4"},D=["for"],h=b({__name:"DateField",props:{id:{},name:{},label:{},modelValue:{},withoutTime:{type:Boolean},labelProps:{}},emits:["update:modelValue","update:error"],setup(u,{expose:i,emit:d}){const o=u,t=s({get:()=>o.modelValue,set:e=>{p("update:modelValue",e)}}),a=s(()=>o.name+(o.id!==void 0?"."+o.id:"")),r=()=>{},p=d;return i({test:r}),(e,l)=>{const c=k("VueDatePicker");return n(),m("div",y,[e.label?(n(),m("label",v({key:0,class:"block text-sm font-bold mb-2",for:"dp-input-"+a.value},e.labelProps),_(e.label),17,D)):f("",!0),P(c,{uid:a.value,class:"p-input px-5",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=V=>t.value=V),dark:"","enable-time-picker":e.withoutTime!==!0},null,8,["uid","modelValue","enable-time-picker"])])}}});export{h as _};
