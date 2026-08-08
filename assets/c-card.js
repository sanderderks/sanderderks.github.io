import{D as e,Dr as t,Ir as n,Kr as r,Mr as i,Ni as a,O as o,Oi as s,Rr as c,Vr as l,Wr as u,Zr as d,_r as f,b as p,br as m,jr as h,vr as g,xr as _,yr as v}from"../bundle.js";var y=t({__name:`DeleteButton`,props:{isLoading:{type:Boolean}},emits:[`click`],setup(e){return(t,n)=>(c(),v(p,{icon:`pi pi-trash`,"icon-only":``,severity:`danger`,outlined:``,loading:e.isLoading,onClick:n[0]||=e=>t.$emit(`click`)},null,8,[`loading`]))}}),b={key:0,class:`text-red-600`},x=t({__name:`ErrorMessage`,props:{name:{},error:{}},setup(e){return(t,n)=>e.error?(c(),_(`p`,b,a(e.error),1)):m(``,!0)}}),S=[`for`],C=t({__name:`SelectField`,props:h({id:{},name:{},label:{},disabled:{type:Boolean},placeholder:{},error:{},required:{type:Boolean},options:{},multiple:{type:Boolean},searchable:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,i=r(e,`modelValue`),o=()=>t.options[0]?.value,l=e=>Array.isArray(e)?e:e==null?[]:[e],p=f({get:()=>{if(t.multiple){let e=l(i.value);if(t.required&&e.length===0){let t=o();return t===void 0?e:[t]}return e}else return t.required&&(i.value===null||i.value===void 0)?o()??i.value:i.value},set:e=>{i.value=t.multiple?l(e):e}}),h=f(()=>t.label?t.label+(t.required?` *`:``):``),y=f(()=>t.name+(t.id?`.`+t.id:``)),b=f(()=>l(p.value)),C=f(()=>t.multiple?t.options.find(e=>b.value.includes(e.value)):t.options.find(e=>e.value===p.value)),w=f(()=>[C.value?.background??`bg-transparent`,C.value?.background?`bg-opacity-90`:`bg-opacity-40`,C.value?.text]),T=f(()=>b.value.map(e=>t.options.find(t=>t.value===e)?.label).join(`, `));return n(()=>{if(t.multiple){let e=l(i.value),n=o();i.value=t.required&&e.length===0&&n!==void 0?[n]:e}else t.required&&(i.value===null||i.value===void 0)&&(i.value=o())}),(t,n)=>(c(),_(`div`,null,[e.label?(c(),_(`label`,{key:0,class:`block text-sm font-bold mb-2`,for:y.value},a(h.value),9,S)):m(``,!0),g(`div`,null,[(c(),v(u(e.multiple?`MultiSelect`:`Select`),{inputId:y.value,modelValue:p.value,"onUpdate:modelValue":n[0]||=e=>p.value=e,disabled:e.disabled,placeholder:e.placeholder??`Selecteer een optie`,filter:e.searchable,filterFields:e.searchable?[`label`]:[],class:`w-full p-input p-0`,multiple:e.multiple,options:e.options,optionValue:`value`,pt:{trigger:{class:w.value}}},{value:d(({placeholder:t})=>[g(`span`,{class:s([`block w-full p-2`,...w.value])},a((e.multiple?T.value:C.value?.label)||t),3)]),option:d(({option:e})=>[g(`span`,{class:s([`w-full p-2`,e.background,e.background?`bg-opacity-90`:`bg-opacity-40`,e.text])},a(e.label),3)]),_:1},8,[`inputId`,`modelValue`,`disabled`,`placeholder`,`filter`,`filterFields`,`multiple`,`options`,`pt`]))]),e.error?(c(),v(x,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):m(``,!0)]))}}),w={name:`Card`,extends:{name:`BaseCard`,extends:e,style:o.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function T(e,t,n,r,a,o){return c(),_(`div`,i({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(c(),_(`div`,i({key:0,class:e.cx(`header`)},e.ptm(`header`)),[l(e.$slots,`header`)],16)):m(``,!0),g(`div`,i({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(c(),_(`div`,i({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(c(),_(`div`,i({key:0,class:e.cx(`title`)},e.ptm(`title`)),[l(e.$slots,`title`)],16)):m(``,!0),e.$slots.subtitle?(c(),_(`div`,i({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[l(e.$slots,`subtitle`)],16)):m(``,!0)],16)):m(``,!0),g(`div`,i({class:e.cx(`content`)},e.ptm(`content`)),[l(e.$slots,`content`)],16),e.$slots.footer?(c(),_(`div`,i({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[l(e.$slots,`footer`)],16)):m(``,!0)],16)],16)}w.render=T;export{y as i,C as n,x as r,w as t};