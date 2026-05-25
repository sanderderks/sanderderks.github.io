import{Ar as e,Br as t,D as n,Di as r,Er as i,Fr as a,Gr as o,Lr as s,Mi as c,O as l,Ur as u,Xr as d,_r as f,b as p,br as m,gr as h,jr as g,vr as _,yr as v}from"../bundle.js";var y=i({__name:`DeleteButton`,props:{isLoading:{type:Boolean}},emits:[`click`],setup(e){return(t,n)=>(s(),_(p,{icon:`pi pi-trash`,"icon-only":``,severity:`danger`,outlined:``,loading:e.isLoading,onClick:n[0]||=e=>t.$emit(`click`)},null,8,[`loading`]))}}),b={key:0,class:`text-red-600`},x=i({__name:`ErrorMessage`,props:{name:{},error:{}},setup(e){return(t,n)=>e.error?(s(),m(`p`,b,c(e.error),1)):v(``,!0)}}),S=[`for`],C=i({__name:`SelectField`,props:e({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},options:{},multiple:{type:Boolean},searchable:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=o(e,`modelValue`),i=()=>t.options[0]?.value,l=e=>Array.isArray(e)?e:e==null?[]:[e],p=h({get:()=>{if(t.multiple){let e=l(n.value);if(t.required&&e.length===0){let t=i();return t===void 0?e:[t]}return e}else return t.required&&(n.value===null||n.value===void 0)?i()??n.value:n.value},set:e=>{n.value=t.multiple?l(e):e}}),g=h(()=>t.label?t.label+(t.required?` *`:``):``),y=h(()=>t.name+(t.id?`.`+t.id:``)),b=h(()=>l(p.value)),C=h(()=>t.multiple?t.options.find(e=>b.value.includes(e.value)):t.options.find(e=>e.value===p.value)),w=h(()=>[C.value?.background??`bg-transparent`,C.value?.background?`bg-opacity-90`:`bg-opacity-40`,C.value?.text]),T=h(()=>b.value.map(e=>t.options.find(t=>t.value===e)?.label).join(`, `));return a(()=>{if(t.multiple){let e=l(n.value),r=i();n.value=t.required&&e.length===0&&r!==void 0?[r]:e}else t.required&&(n.value===null||n.value===void 0)&&(n.value=i())}),(t,n)=>(s(),m(`div`,null,[e.label?(s(),m(`label`,{key:0,class:`block text-sm font-bold mb-2`,for:y.value},c(g.value),9,S)):v(``,!0),f(`div`,null,[(s(),_(u(e.multiple?`MultiSelect`:`Select`),{inputId:y.value,modelValue:p.value,"onUpdate:modelValue":n[0]||=e=>p.value=e,placeholder:e.placeholder??`Selecteer een optie`,filter:e.searchable,filterFields:e.searchable?[`label`]:[],class:`w-full p-input p-0`,multiple:e.multiple,options:e.options,optionValue:`value`,pt:{trigger:{class:w.value}}},{value:d(({placeholder:t})=>[f(`span`,{class:r([`block w-full p-2`,...w.value])},c((e.multiple?T.value:C.value?.label)||t),3)]),option:d(({option:e})=>[f(`span`,{class:r([`w-full p-2`,e.background,e.background?`bg-opacity-90`:`bg-opacity-40`,e.text])},c(e.label),3)]),_:1},8,[`inputId`,`modelValue`,`placeholder`,`filter`,`filterFields`,`multiple`,`options`,`pt`]))]),e.error?(s(),_(x,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):v(``,!0)]))}}),w={name:`Card`,extends:{name:`BaseCard`,extends:n,style:l.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function T(e,n,r,i,a,o){return s(),m(`div`,g({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(s(),m(`div`,g({key:0,class:e.cx(`header`)},e.ptm(`header`)),[t(e.$slots,`header`)],16)):v(``,!0),f(`div`,g({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(s(),m(`div`,g({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(s(),m(`div`,g({key:0,class:e.cx(`title`)},e.ptm(`title`)),[t(e.$slots,`title`)],16)):v(``,!0),e.$slots.subtitle?(s(),m(`div`,g({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[t(e.$slots,`subtitle`)],16)):v(``,!0)],16)):v(``,!0),f(`div`,g({class:e.cx(`content`)},e.ptm(`content`)),[t(e.$slots,`content`)],16),e.$slots.footer?(s(),m(`div`,g({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[t(e.$slots,`footer`)],16)):v(``,!0)],16)],16)}w.render=T;export{y as i,C as n,x as r,w as t};