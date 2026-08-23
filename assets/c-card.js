import{Ar as e,Cr as t,D as n,Fr as r,Ii as i,O as a,Pr as o,Sr as s,Vr as c,Wr as l,Yr as u,b as d,br as f,ei as p,ji as m,qr as h,wr as g,xr as _,zr as v}from"../bundle.js";var y=e({__name:`DeleteButton`,props:{isLoading:{type:Boolean}},emits:[`click`],setup(e){return(t,n)=>(c(),s(d,{icon:`pi pi-trash`,"icon-only":``,severity:`danger`,outlined:``,loading:e.isLoading,onClick:n[0]||=e=>t.$emit(`click`)},null,8,[`loading`]))}}),b={key:0,class:`text-red-600`},x=e({__name:`ErrorMessage`,props:{name:{},error:{}},setup(e){return(n,r)=>e.error?(c(),g(`p`,b,i(e.error),1)):t(``,!0)}}),S=[`for`],C={class:`flex`},w=e({__name:`SelectField`,props:o({id:{},name:{},label:{},disabled:{type:Boolean},placeholder:{},error:{},required:{type:Boolean},options:{},multiple:{type:Boolean},searchable:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let n=e,r=u(e,`modelValue`),a=()=>n.options[0]?.value,o=e=>Array.isArray(e)?e:e==null?[]:[e],d=f({get:()=>{if(n.multiple){let e=o(r.value);if(n.required&&e.length===0){let t=a();return t===void 0?e:[t]}return e}else return n.required&&(r.value===null||r.value===void 0)?a()??r.value:r.value},set:e=>{r.value=n.multiple?o(e):e}}),y=f(()=>n.label?n.label+(n.required?` *`:``):``),b=f(()=>n.name+(n.id?`.`+n.id:``)),w=f(()=>o(d.value)),T=f(()=>n.multiple?n.options.find(e=>w.value.includes(e.value)):n.options.find(e=>e.value===d.value)),E=f(()=>[T.value?.background??`bg-transparent`,T.value?.background?`bg-opacity-90`:`bg-opacity-40`,T.value?.text]),D=f(()=>w.value.map(e=>n.options.find(t=>t.value===e)?.label).join(`, `));return v(()=>{if(n.multiple){let e=o(r.value),t=a();r.value=n.required&&e.length===0&&t!==void 0?[t]:e}else n.required&&(r.value===null||r.value===void 0)&&(r.value=a())}),(n,r)=>(c(),g(`div`,null,[e.label?(c(),g(`label`,{key:0,class:`block text-sm font-bold mb-2`,for:b.value},i(y.value),9,S)):t(``,!0),_(`div`,C,[(c(),s(h(e.multiple?`MultiSelect`:`Select`),{inputId:b.value,modelValue:d.value,"onUpdate:modelValue":r[0]||=e=>d.value=e,disabled:e.disabled,placeholder:e.placeholder??`Selecteer een optie`,filter:e.searchable,filterFields:e.searchable?[`label`]:[],class:`w-full p-input p-0`,multiple:e.multiple,options:e.options,optionValue:`value`,pt:{trigger:{class:E.value}}},{value:p(({placeholder:t})=>[_(`span`,{class:m([`block w-full p-2`,...E.value])},i((e.multiple?D.value:T.value?.label)||t),3)]),option:p(({option:e})=>[_(`span`,{class:m([`w-full p-2`,e.background,e.background?`bg-opacity-90`:`bg-opacity-40`,e.text])},i(e.label),3)]),_:1},8,[`inputId`,`modelValue`,`disabled`,`placeholder`,`filter`,`filterFields`,`multiple`,`options`,`pt`])),l(n.$slots,`default`)]),e.error?(c(),s(x,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):t(``,!0)]))}}),T={name:`Card`,extends:{name:`BaseCard`,extends:n,style:a.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function E(e,n,i,a,o,s){return c(),g(`div`,r({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(c(),g(`div`,r({key:0,class:e.cx(`header`)},e.ptm(`header`)),[l(e.$slots,`header`)],16)):t(``,!0),_(`div`,r({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(c(),g(`div`,r({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(c(),g(`div`,r({key:0,class:e.cx(`title`)},e.ptm(`title`)),[l(e.$slots,`title`)],16)):t(``,!0),e.$slots.subtitle?(c(),g(`div`,r({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[l(e.$slots,`subtitle`)],16)):t(``,!0)],16)):t(``,!0),_(`div`,r({class:e.cx(`content`)},e.ptm(`content`)),[l(e.$slots,`content`)],16),e.$slots.footer?(c(),g(`div`,r({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[l(e.$slots,`footer`)],16)):t(``,!0)],16)],16)}T.render=E;export{y as i,w as n,x as r,T as t};