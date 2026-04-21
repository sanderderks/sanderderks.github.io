import{ao as L,av as x,aO as A,aU as $,cb as h,cc as p,x as K,b as d,c as b,F as T,C,g as _,aj as k,w as c,r as S,e as y,aq as O,t as g,d as w,B as I,f,h as m,j as D}from"../bundle.js";import{s as E}from"./c-index-NIKtA1Xa.js";import{s as R,a as j,b as q,c as z}from"./c-index-Cih8wmwf.js";var F=`
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
`,N={root:function(n){var t=n.props,r=n.instance;return["p-selectbutton p-component",{"p-invalid":r.$invalid,"p-selectbutton-fluid":t.fluid}]}},P=L.extend({name:"selectbutton",style:F,classes:N}),H={name:"BaseSelectButton",extends:A,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:P,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function U(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=B(e))||n){t&&(e=t);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return i=u.done,u},e:function(u){a=!0,l=u},f:function(){try{i||t.return==null||t.return()}finally{if(a)throw l}}}}function M(e){return J(e)||G(e)||B(e)||W()}function W(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,n){if(e){if(typeof e=="string")return v(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}function G(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return v(e)}function v(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var Q={name:"SelectButton",extends:H,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?p(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?p(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?p(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?p(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,r){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var l=this.isSelected(t),i=this.getOptionValue(t),a;if(this.multiple)if(l){if(a=this.d_value.filter(function(o){return!h(o,i,s.equalityKey)}),!this.allowEmpty&&a.length===0)return}else a=this.d_value?[].concat(M(this.d_value),[i]):[i];else{if(l&&!this.allowEmpty)return;a=l?null:i}this.writeValue(a,n),this.$emit("change",{originalEvent:n,value:a})}},isSelected:function(n){var t=!1,r=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=U(this.d_value),l;try{for(s.s();!(l=s.n()).done;){var i=l.value;if(h(i,r,this.equalityKey)){t=!0;break}}}catch(a){s.e(a)}finally{s.f()}}}else t=h(this.d_value,r,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return $({invalid:this.$invalid})}},directives:{ripple:x},components:{ToggleButton:E}},X=["aria-labelledby","data-p"];function Y(e,n,t,r,s,l){var i=K("ToggleButton");return d(),b("div",O({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":l.dataP}),[(d(!0),b(T,null,C(e.options,function(a,o){return d(),_(i,{key:l.getOptionRenderKey(a),modelValue:l.isSelected(a),onLabel:l.getOptionLabel(a),offLabel:l.getOptionLabel(a),disabled:e.disabled||l.isOptionDisabled(a),unstyled:e.unstyled,size:e.size,readonly:l.isOptionReadonly(a),onChange:function(V){return l.onOptionSelect(V,a,o)},pt:e.ptm("pcToggleButton")},k({_:2},[e.$slots.option?{name:"default",fn:c(function(){return[S(e.$slots,"option",{option:a,index:o},function(){return[y("span",O({ref_for:!0},e.ptm("pcToggleButton").label),g(l.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,X)}Q.render=Y;const Z={class:"mt-3 mb-5 flex flex-col gap-3"},ee={class:"w-full flex gap-1 justify-between items-center"},te={class:"text-xl font-bold"},ne={key:0},oe=w({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(n,t)=>(d(),b("div",Z,[y("div",ee,[y("h3",te,g(e.title),1),S(n.$slots,"default")]),e.description?(d(),b("p",ne,g(e.description),1)):I("",!0)]))}}),ae={class:"flex flex-col gap-3 items-center"},se=w({__name:"FilterAccordion",setup(e){return(n,t)=>(d(),_(f(R),{class:"w-full md:w-2/3 xl:w-1/2 place-self-center my-5"},{default:c(()=>[m(f(j),{value:"0"},{default:c(()=>[m(f(q),null,{default:c(()=>[...t[0]||(t[0]=[D(" Filters ",-1)])]),_:1}),m(f(z),null,{default:c(()=>[y("div",ae,[S(n.$slots,"default")])]),_:3})]),_:3})]),_:3}))}});export{oe as _,se as a,Q as s};
