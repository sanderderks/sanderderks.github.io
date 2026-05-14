import{Cr as e,Ir as t,Lr as n,Or as r,Pr as i,Rr as a,S as o,Ur as s,_r as c,b as l,c as u,fr as d,ft as f,gr as p,hr as m,i as h,ki as g,mr as _,pr as v,qr as y,ri as b,ti as x,vt as S,xt as C,yr as w}from"../bundle.js";import{t as T}from"./c-Dialog--q6xH386.js";import{c as E}from"./c-Bubble-D2WU2646.js";import{t as D}from"./c-togglebutton-CF84BSSB.js";var O=o.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),k={name:`BaseSelectButton`,extends:l,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:O,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function A(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=N(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function j(e){return F(e)||P(e)||N(e)||M()}function M(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e==`string`)return I(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function P(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function F(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var L={name:`SelectButton`,extends:k,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?C(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?C(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?C(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?C(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!S(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(j(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=A(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(S(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=S(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return f({invalid:this.$invalid})}},directives:{ripple:h},components:{ToggleButton:D}},R=[`aria-labelledby`,`data-p`];function z(e,o,s,l,u,f){var p=a(`ToggleButton`);return i(),c(`div`,r({class:e.cx(`root`),role:`group`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`),{"data-p":f.dataP}),[(i(!0),c(d,null,t(e.options,function(t,a){return i(),m(p,{key:f.getOptionRenderKey(t),modelValue:f.isSelected(t),onLabel:f.getOptionLabel(t),offLabel:f.getOptionLabel(t),disabled:e.disabled||f.isOptionDisabled(t),unstyled:e.unstyled,size:e.size,readonly:f.isOptionReadonly(t),onChange:function(e){return f.onOptionSelect(e,t,a)},pt:e.ptm(`pcToggleButton`)},w({_:2},[e.$slots.option?{name:`default`,fn:y(function(){return[n(e.$slots,`option`,{option:t,index:a},function(){return[_(`span`,r({ref_for:!0},e.ptm(`pcToggleButton`).label),g(f.getOptionLabel(t)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,R)}L.render=z;var B={class:`mt-3 mb-5 flex flex-col gap-3`},V={class:`w-full flex gap-1 justify-between items-center`},H={class:`text-xl font-bold`},U={key:0},W=e({__name:`SimpleHeader`,props:{title:{},description:{}},setup(e){return(t,r)=>(i(),c(`div`,B,[_(`div`,V,[_(`h3`,H,g(e.title),1),n(t.$slots,`default`)]),e.description?(i(),c(`p`,U,g(e.description),1)):p(``,!0)]))}}),G={class:`w-full md:w-2/3 xl:w-1/2 place-self-center my-5 flex flex-col gap-5`},K={class:`flex flex-wrap gap-3`},q={key:0,class:`flex flex-wrap gap-2`},J={class:`mt-5 flex flex-col gap-4`},Y={class:`mt-5 flex flex-col gap-4`},X=e({__name:`FilterControlsBar`,props:{filtersTitle:{default:`Filters`},viewsTitle:{default:`Weergave`},filterSummaryItems:{default:()=>[]},viewSummaryItems:{default:()=>[]}},setup(e){let r=e,a=s(),o=x(!1),l=x(!1),f=v(()=>!!a.filters),h=v(()=>!!a.views),g=v(()=>w(r.filterSummaryItems)),S=v(()=>w(r.viewSummaryItems)),C=v(()=>g.value.length||S.value.length);function w(e){return e.flatMap(e=>{if(e.visible===!1)return[];if(e.options){if(!e.options.some(e=>e.value===null))return[];let t=e.options.find(t=>t.value===e.selectedValue),n=e.emptyValue??null;return!t||t.value===n?[]:[{key:e.key,label:t.label,onClear:e.onClear}]}return e.active?[{key:e.key,label:e.label,onClear:e.onClear}]:[]})}function D(){o.value=!1}function O(){l.value=!1}return(r,a)=>(i(),c(d,null,[_(`div`,G,[_(`div`,K,[f.value?(i(),m(E,{key:0,class:`flex-1 md:flex-none`,icon:`pi pi-filter`,label:`Filters`,severity:`secondary`,outlined:``,badge:g.value.length?String(g.value.length):void 0,onClick:a[0]||=e=>o.value=!0},null,8,[`badge`])):p(``,!0),h.value?(i(),m(E,{key:1,class:`flex-1 md:flex-none`,icon:`pi pi-sliders-h`,label:`Weergave`,severity:`secondary`,outlined:``,badge:S.value.length?String(S.value.length):void 0,onClick:a[1]||=e=>l.value=!0},null,8,[`badge`])):p(``,!0)]),C.value?(i(),c(`div`,q,[(i(!0),c(d,null,t(g.value,e=>(i(),m(b(u),{key:`filter-${e.key}`,label:e.label,removable:``,onRemove:t=>e.onClear?.()},null,8,[`label`,`onRemove`]))),128)),(i(!0),c(d,null,t(S.value,e=>(i(),m(b(u),{key:`view-${e.key}`,label:e.label,removable:``,onRemove:t=>e.onClear?.()},null,8,[`label`,`onRemove`]))),128))])):p(``,!0)]),f.value?(i(),m(T,{key:0,"is-open":o.value,title:`${e.filtersTitle}${g.value.length?` (${g.value.length})`:``}`,description:`Pas toe welke items zichtbaar zijn.`,"confirm-text":`Klaar`,"confirm-props":{outlined:!0},"hide-cancel-button":``,onCancel:a[2]||=e=>D(),onConfirm:a[3]||=e=>D()},{default:y(()=>[_(`div`,J,[n(r.$slots,`filters`)])]),_:3},8,[`is-open`,`title`])):p(``,!0),h.value?(i(),m(T,{key:1,"is-open":l.value,title:`${e.viewsTitle}${S.value.length?` (${S.value.length})`:``}`,description:`Kies hoe informatie wordt getoond.`,"confirm-text":`Klaar`,"confirm-props":{outlined:!0},"hide-cancel-button":``,onCancel:a[4]||=e=>O(),onConfirm:a[5]||=e=>O()},{default:y(()=>[_(`div`,Y,[n(r.$slots,`views`)])]),_:3},8,[`is-open`,`title`])):p(``,!0)],64))}});export{W as n,L as r,X as t};