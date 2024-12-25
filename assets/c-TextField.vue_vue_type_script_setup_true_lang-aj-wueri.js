import{e as _,l as s,q as u,c,m as b,y as k,H as P,t as f,p as B,ac as T,as as $}from"../bundle.js";import{_ as C,V as M,R as l}from"./c-validation-DokkLKHB.js";import{_ as q}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";const R=_({__name:"DeleteButton",emits:["click"],setup(y,{emit:h}){return(p,t)=>(s(),u(q,{class:"w-fit flex justify-center !rounded",type:"danger",outlined:"",icon:"pi pi-trash",onClick:t[0]||(t[0]=m=>p.$emit("click"))}))}}),D={class:"m-4"},E=["for"],I={class:"flex"},j=_({__name:"TextField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},compare:{},deleteButton:{type:Boolean}},emits:["update:modelValue","update:error","update:delete","click"],setup(y,{expose:h,emit:p}){const t=y,m=c(()=>{const e=t.modelValue;return e?typeof e=="string"?e.endsWith("  ")?e.trim():e:typeof e=="number"?e||0:e||"":t.modelValue||""}),x=c(()=>t.label?t.label+((t.rules??[]).some(e=>e.type===M.Required)?" *":""):void 0),v=c(()=>t.name+(t.id?"."+t.id:"")),L=e=>{const a=e.target.value;i("update:modelValue",a),V(a)},V=async e=>{const a=e||m.value,o=t.rules||[];typeof t.minValue=="number"&&o.push(l.Min),typeof t.maxValue=="number"&&o.push(l.Max),typeof t.minLength=="number"&&o.push(l.MinLength),typeof t.maxLength=="number"&&o.push(l.MaxLength),t.compare&&o.push(l.EqualTo);const n={value:a.toString(),minValue:t.minValue,maxValue:t.maxValue,minLength:t.minLength,maxLength:t.maxLength,compare:t.compare},d=o.filter(r=>!r.test(n)).map(r=>{var g;return((g=r.compareError)==null?void 0:g.call(r,n))||r.error(n)})||[];i("update:error",d[0]||"")},i=p;return h({test:V}),(e,a)=>{var o,n;return s(),b("div",D,[e.label?(s(),b("label",k({key:0,class:"block text-sm font-bold mb-2",for:v.value},e.labelProps),P(x.value),17,E)):f("",!0),B("div",I,[(s(),u($(((o=e.inputProps)==null?void 0:o.type)==="textarea"?"PrimeTextArea":"PrimeInputText"),k({id:v.value,ref:"input",value:m.value,class:"p-input",type:((n=e.inputProps)==null?void 0:n.type)||"text",placeholder:e.placeholder,invalid:!!e.error,onInput:L,onClick:a[0]||(a[0]=T(d=>i("click"),["stop"]))},e.inputProps),null,16,["id","value","type","placeholder","invalid"])),e.deleteButton?(s(),u(R,{key:0,class:"h-fit",onClick:a[1]||(a[1]=d=>i("update:delete"))})):f("",!0)]),e.error?(s(),u(C,{key:1,name:e.name,error:e.error},null,8,["name","error"])):f("",!0)])}}});export{j as _,R as a};
