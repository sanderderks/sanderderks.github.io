import{e as m,bV as p,M as f,l as t,m as l,p as o,H as a,w as u,O as y,z as g,n as b,E as v,q as h,y as w,t as r,cV as $}from"../bundle.js";import{_ as d}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di5vSobc.js";const k={key:0,class:"fixed z-10 inset-0 flex items-center justify-center overflow-auto"},B={class:"relative w-full md:w-3/4 lg:w-1/2 max-h-screen"},C={class:"bg-neutral-800 border border-neutral-500 rounded-primary p-5"},T={class:"sm:p-8"},O={class:"text-title-secondary"},V={class:"mt-4 text-neutral-300"},_={class:"my-2"},z={class:"grid grid-cols-4 mt-10 gap-3"},P=m({__name:"Dialog",props:{isOpen:{type:Boolean},title:{},description:{},cancelText:{},confirmText:{},confirmLoading:{type:Boolean},confirmProps:{}},emits:["confirm","cancel"],setup(c){const i=c;return p(()=>{document.body.style.overflow=""}),f(()=>i.isOpen,()=>{i.isOpen?(document.body.style.overflow="hidden",document.body.style.marginRight=`${$()}px`):(document.body.style.marginRight="",document.body.style.overflow="")}),(e,s)=>e.isOpen?(t(),l("div",k,[o("div",{class:"fixed inset-0 bg-neutral-900 opacity-50 animation",onClick:s[0]||(s[0]=n=>e.$emit("cancel"))}),o("div",B,[o("div",C,[o("div",T,[o("h3",O,a(e.title),1),o("div",V,[(t(!0),l(u,null,y(Array.isArray(e.description)?[...e.description]:[e.description],n=>(t(),l("p",_,a(n),1))),256))]),g(e.$slots,"default")]),o("div",z,[b(d,{class:v(["col-span-full",e.confirmText?"md:col-span-2":""]),outlined:"",label:e.cancelText??"Cancel",onClick:s[1]||(s[1]=n=>e.$emit("cancel"))},null,8,["class","label"]),e.confirmText?(t(),h(d,w({key:0,class:"col-span-full md:col-span-2 md:col-start-3",loading:e.confirmLoading},e.confirmProps,{label:e.confirmText,onClick:s[2]||(s[2]=n=>e.$emit("confirm"))}),null,16,["loading","label"])):r("",!0)])])])])):r("",!0)}});export{P as _};
