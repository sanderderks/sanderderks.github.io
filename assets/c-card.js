import{Ar as e,D as t,Ei as n,Hr as r,Ir as i,O as a,Pr as o,Tr as s,Wr as c,Yr as l,_r as u,b as d,br as f,gr as p,ji as m,kr as h,vr as g,yr as _,zr as v}from"../bundle.js";var y=s({__name:`DeleteButton`,props:{isLoading:{type:Boolean}},emits:[`click`],setup(e){return(t,n)=>(i(),g(d,{icon:`pi pi-trash`,"icon-only":``,severity:`danger`,outlined:``,loading:e.isLoading,onClick:n[0]||=e=>t.$emit(`click`)},null,8,[`loading`]))}}),b={key:0,class:`text-red-600`},x=s({__name:`ErrorMessage`,props:{name:{},error:{}},setup(e){return(t,n)=>e.error?(i(),f(`p`,b,m(e.error),1)):_(``,!0)}}),S=[`for`],C=s({__name:`SelectField`,props:h({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},options:{},multiple:{type:Boolean},searchable:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,a=c(e,`modelValue`),s=()=>t.options[0]?.value,d=e=>Array.isArray(e)?e:e==null?[]:[e],h=p({get:()=>{if(t.multiple){let e=d(a.value);if(t.required&&e.length===0){let t=s();return t===void 0?e:[t]}return e}else return t.required&&(a.value===null||a.value===void 0)?s()??a.value:a.value},set:e=>{a.value=t.multiple?d(e):e}}),v=p(()=>t.label?t.label+(t.required?` *`:``):``),y=p(()=>t.name+(t.id?`.`+t.id:``)),b=p(()=>d(h.value)),C=p(()=>t.multiple?t.options.find(e=>b.value.includes(e.value)):t.options.find(e=>e.value===h.value)),w=p(()=>[C.value?.background??`bg-transparent`,C.value?.background?`bg-opacity-90`:`bg-opacity-40`,C.value?.text]),T=p(()=>b.value.map(e=>t.options.find(t=>t.value===e)?.label).join(`, `));return o(()=>{if(t.multiple){let e=d(a.value),n=s();a.value=t.required&&e.length===0&&n!==void 0?[n]:e}else t.required&&(a.value===null||a.value===void 0)&&(a.value=s())}),(t,a)=>(i(),f(`div`,null,[e.label?(i(),f(`label`,{key:0,class:`block text-sm font-bold mb-2`,for:y.value},m(v.value),9,S)):_(``,!0),u(`div`,null,[(i(),g(r(e.multiple?`MultiSelect`:`Select`),{inputId:y.value,modelValue:h.value,"onUpdate:modelValue":a[0]||=e=>h.value=e,placeholder:e.placeholder??`Selecteer een optie`,filter:e.searchable,filterFields:e.searchable?[`label`]:[],class:`w-full p-input p-0`,multiple:e.multiple,options:e.options,optionValue:`value`,pt:{trigger:{class:w.value}}},{value:l(({placeholder:t})=>[u(`span`,{class:n([`block w-full p-2`,...w.value])},m((e.multiple?T.value:C.value?.label)||t),3)]),option:l(({option:e})=>[u(`span`,{class:n([`w-full p-2`,e.background,e.background?`bg-opacity-90`:`bg-opacity-40`,e.text])},m(e.label),3)]),_:1},8,[`inputId`,`modelValue`,`placeholder`,`filter`,`filterFields`,`multiple`,`options`,`pt`]))]),e.error?(i(),g(x,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):_(``,!0)]))}}),w={name:`Card`,extends:{name:`BaseCard`,extends:t,style:a.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function T(t,n,r,a,o,s){return i(),f(`div`,e({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(i(),f(`div`,e({key:0,class:t.cx(`header`)},t.ptm(`header`)),[v(t.$slots,`header`)],16)):_(``,!0),u(`div`,e({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(i(),f(`div`,e({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(i(),f(`div`,e({key:0,class:t.cx(`title`)},t.ptm(`title`)),[v(t.$slots,`title`)],16)):_(``,!0),t.$slots.subtitle?(i(),f(`div`,e({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[v(t.$slots,`subtitle`)],16)):_(``,!0)],16)):_(``,!0),u(`div`,e({class:t.cx(`content`)},t.ptm(`content`)),[v(t.$slots,`content`)],16),t.$slots.footer?(i(),f(`div`,e({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[v(t.$slots,`footer`)],16)):_(``,!0)],16)],16)}w.render=T;export{y as i,C as n,x as r,w as t};