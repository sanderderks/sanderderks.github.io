import{ao as L,av as x,aO as A,aU as $,cb as m,cc as p,x as C,b as d,c as b,F as K,C as T,g as _,aj as k,w as c,r as S,e as y,aq as O,t as h,d as w,B as I,f,h as g,j as D}from"../bundle.js";import{s as E}from"./c-index-NIKtA1Xa.js";import{s as F,a as R,b as j,c as q}from"./c-index-Cih8wmwf.js";var z=`
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
`,N={root:function(n){var t=n.props,r=n.instance;return["p-selectbutton p-component",{"p-invalid":r.$invalid,"p-selectbutton-fluid":t.fluid}]}},P=L.extend({name:"selectbutton",style:z,classes:N}),H={name:"BaseSelectButton",extends:A,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:P,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function U(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=B(e))||n){t&&(e=t);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return i=u.done,u},e:function(u){l=!0,a=u},f:function(){try{i||t.return==null||t.return()}finally{if(l)throw a}}}}function M(e){return J(e)||G(e)||B(e)||W()}function W(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,n){if(e){if(typeof e=="string")return v(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}function G(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return v(e)}function v(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var Q={name:"SelectButton",extends:H,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?p(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?p(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?p(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?p(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,r){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var a=this.isSelected(t),i=this.getOptionValue(t),l;if(this.multiple)if(a){if(l=this.d_value.filter(function(o){return!m(o,i,s.equalityKey)}),!this.allowEmpty&&l.length===0)return}else l=this.d_value?[].concat(M(this.d_value),[i]):[i];else{if(a&&!this.allowEmpty)return;l=a?null:i}this.writeValue(l,n),this.$emit("change",{originalEvent:n,value:l})}},isSelected:function(n){var t=!1,r=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=U(this.d_value),a;try{for(s.s();!(a=s.n()).done;){var i=a.value;if(m(i,r,this.equalityKey)){t=!0;break}}}catch(l){s.e(l)}finally{s.f()}}}else t=m(this.d_value,r,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return $({invalid:this.$invalid})}},directives:{ripple:x},components:{ToggleButton:E}},X=["aria-labelledby","data-p"];function Y(e,n,t,r,s,a){var i=C("ToggleButton");return d(),b("div",O({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":a.dataP}),[(d(!0),b(K,null,T(e.options,function(l,o){return d(),_(i,{key:a.getOptionRenderKey(l),modelValue:a.isSelected(l),onLabel:a.getOptionLabel(l),offLabel:a.getOptionLabel(l),disabled:e.disabled||a.isOptionDisabled(l),unstyled:e.unstyled,size:e.size,readonly:a.isOptionReadonly(l),onChange:function(V){return a.onOptionSelect(V,l,o)},pt:e.ptm("pcToggleButton")},k({_:2},[e.$slots.option?{name:"default",fn:c(function(){return[S(e.$slots,"option",{option:l,index:o},function(){return[y("span",O({ref_for:!0},e.ptm("pcToggleButton").label),h(a.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,X)}Q.render=Y;const Z={class:"mt-3 mb-5 flex flex-col gap-3"},ee={class:"w-full flex gap-1 justify-between items-center"},te={class:"text-xl font-bold"},ne={key:0},oe=w({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(n,t)=>(d(),b("div",Z,[y("div",ee,[y("h3",te,h(e.title),1),S(n.$slots,"default")]),e.description?(d(),b("p",ne,h(e.description),1)):I("",!0)]))}}),le={class:"flex flex-col gap-8 items-center"},se=w({__name:"FilterAccordion",props:{selectedFilterCount:{}},setup(e){return(n,t)=>(d(),_(f(F),{class:"w-full md:w-2/3 xl:w-1/2 place-self-center my-5"},{default:c(()=>[g(f(R),{value:"0"},{default:c(()=>[g(f(j),null,{default:c(()=>[D(" Filters "+h(e.selectedFilterCount?`(${e.selectedFilterCount})`:""),1)]),_:1}),g(f(q),null,{default:c(()=>[y("div",le,[S(n.$slots,"default")])]),_:3})]),_:3})]),_:3}))}});export{oe as _,se as a,Q as s};
