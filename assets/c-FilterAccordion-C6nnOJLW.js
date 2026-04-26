import{Cr as e,Dr as t,Er as n,Fr as r,Hi as i,Nr as a,Or as o,Pr as s,Vr as c,Xr as l,Yr as u,Zr as d,gi as f,ht as p,it as m,jr as h,kr as g,oi as _,qr as v,s as y,t as b,vt as x}from"./c-ripple-BJEt1gd9.js";import{t as S}from"./c-baseeditableholder-DImt6-r8.js";import{i as C,n as w,r as T,t as E}from"./c-accordion-gO9FsJgd.js";import{t as D}from"./c-togglebutton-CbFhvxsy.js";var O=y.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-selectbutton p-component`,{"p-invalid":n.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),k={name:`BaseSelectButton`,extends:S,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:O,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function A(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=N(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function j(e){return F(e)||P(e)||N(e)||M()}function M(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e==`string`)return I(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function P(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function F(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var L={name:`SelectButton`,extends:k,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?x(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?x(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?x(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?x(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!p(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(j(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=A(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(p(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=p(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return m({invalid:this.$invalid})}},directives:{ripple:b},components:{ToggleButton:D}},R=[`aria-labelledby`,`data-p`];function z(r,a,o,s,f,p){var m=d(`ToggleButton`);return v(),g(`div`,c({class:r.cx(`root`),role:`group`,"aria-labelledby":r.ariaLabelledby},r.ptmi(`root`),{"data-p":p.dataP}),[(v(!0),g(e,null,u(r.options,function(e,a){return v(),t(m,{key:p.getOptionRenderKey(e),modelValue:p.isSelected(e),onLabel:p.getOptionLabel(e),offLabel:p.getOptionLabel(e),disabled:r.disabled||p.isOptionDisabled(e),unstyled:r.unstyled,size:r.size,readonly:p.isOptionReadonly(e),onChange:function(t){return p.onOptionSelect(t,e,a)},pt:r.ptm(`pcToggleButton`)},h({_:2},[r.$slots.option?{name:`default`,fn:_(function(){return[l(r.$slots,`option`,{option:e,index:a},function(){return[n(`span`,c({ref_for:!0},r.ptm(`pcToggleButton`).label),i(p.getOptionLabel(e)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,R)}L.render=z;var B={class:`mt-3 mb-5 flex flex-col gap-3`},V={class:`w-full flex gap-1 justify-between items-center`},H={class:`text-xl font-bold`},U={key:0},W=r({__name:`SimpleHeader`,props:{title:{},description:{}},setup(e){return(t,r)=>(v(),g(`div`,B,[n(`div`,V,[n(`h3`,H,i(e.title),1),l(t.$slots,`default`)]),e.description?(v(),g(`p`,U,i(e.description),1)):o(``,!0)]))}}),G={class:`flex flex-col gap-8 items-center`},K=r({__name:`FilterAccordion`,props:{selectedFilterCount:{}},setup(e){return(r,o)=>(v(),t(f(E),{class:`w-full md:w-2/3 xl:w-1/2 place-self-center my-5`},{default:_(()=>[s(f(w),{value:`0`},{default:_(()=>[s(f(T),null,{default:_(()=>[a(` Filters `+i(e.selectedFilterCount?`(${e.selectedFilterCount})`:``),1)]),_:1}),s(f(C),null,{default:_(()=>[n(`div`,G,[l(r.$slots,`default`)])]),_:3})]),_:3})]),_:3}))}});export{W as n,L as r,K as t};