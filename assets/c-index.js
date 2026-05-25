import{d as h,b as r,g,_ as S,c as o,t as y,y as d,V as M,l as A,e as f,aE as z,w as B,n as C,W as D,i as u,am as I,an as E,ao as i,T as v}from"../bundle.js";const G=h({__name:"DeleteButton",props:{isLoading:{type:Boolean}},emits:["click"],setup(e){return(t,a)=>(r(),g(S,{icon:"pi pi-trash","icon-only":"",severity:"danger",outlined:"",loading:e.isLoading,onClick:a[0]||(a[0]=c=>t.$emit("click"))},null,8,["loading"]))}}),F={key:0,class:"text-red-600"},L=h({__name:"ErrorMessage",props:{name:{},error:{}},setup(e){return(t,a)=>e.error?(r(),o("p",F,y(e.error),1)):d("",!0)}}),N=["for"],H=h({__name:"SelectField",props:D({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},options:{},multiple:{type:Boolean},searchable:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,a=M(e,"modelValue"),c=()=>t.options[0]?.value,p=l=>Array.isArray(l)?l:l==null?[]:[l],m=u({get:()=>{if(t.multiple){const l=p(a.value);if(t.required&&l.length===0){const n=c();return n===void 0?l:[n]}return l}else return t.required&&(a.value===null||a.value===void 0)?c()??a.value:a.value},set:l=>{a.value=t.multiple?p(l):l}}),q=u(()=>t.label?t.label+(t.required?" *":""):""),$=u(()=>t.name+(t.id?"."+t.id:"")),k=u(()=>p(m.value)),b=u(()=>t.multiple?t.options.find(l=>k.value.includes(l.value)):t.options.find(l=>l.value===m.value)),V=u(()=>[b.value?.background??"bg-transparent",b.value?.background?"bg-opacity-90":"bg-opacity-40",b.value?.text]),w=u(()=>k.value.map(l=>t.options.find(n=>n.value===l)?.label).join(", "));return A(()=>{if(t.multiple){const l=p(a.value),n=c();a.value=t.required&&l.length===0&&n!==void 0?[n]:l}else t.required&&(a.value===null||a.value===void 0)&&(a.value=c())}),(l,n)=>(r(),o("div",null,[e.label?(r(),o("label",{key:0,class:"block text-sm font-bold mb-2",for:$.value},y(q.value),9,N)):d("",!0),f("div",null,[(r(),g(z(e.multiple?"MultiSelect":"Select"),{inputId:$.value,modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=s=>m.value=s),placeholder:e.placeholder??"Selecteer een optie",filter:e.searchable,filterFields:e.searchable?["label"]:[],class:"w-full p-input p-0",multiple:e.multiple,options:e.options,optionValue:"value",pt:{trigger:{class:V.value}}},{value:B(({placeholder:s})=>[f("span",{class:C(["block w-full p-2",...V.value])},y((e.multiple?w.value:b.value?.label)||s),3)]),option:B(({option:s})=>[f("span",{class:C(["w-full p-2",s.background,s.background?"bg-opacity-90":"bg-opacity-40",s.text])},y(s.label),3)]),_:1},8,["inputId","modelValue","placeholder","filter","filterFields","multiple","options","pt"]))]),e.error?(r(),g(L,{key:1,name:e.name,error:e.error},null,8,["name","error"])):d("",!0)]))}});var O=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,j={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},P=I.extend({name:"card",style:O,classes:j}),T={name:"BaseCard",extends:E,style:P,provide:function(){return{$pcCard:this,$parentInstance:this}}},U={name:"Card",extends:T,inheritAttrs:!1};function W(e,t,a,c,p,m){return r(),o("div",i({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(r(),o("div",i({key:0,class:e.cx("header")},e.ptm("header")),[v(e.$slots,"header")],16)):d("",!0),f("div",i({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),o("div",i({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),o("div",i({key:0,class:e.cx("title")},e.ptm("title")),[v(e.$slots,"title")],16)):d("",!0),e.$slots.subtitle?(r(),o("div",i({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[v(e.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),f("div",i({class:e.cx("content")},e.ptm("content")),[v(e.$slots,"content")],16),e.$slots.footer?(r(),o("div",i({key:1,class:e.cx("footer")},e.ptm("footer")),[v(e.$slots,"footer")],16)):d("",!0)],16)],16)}U.render=W;export{G as _,H as a,L as b,U as s};
