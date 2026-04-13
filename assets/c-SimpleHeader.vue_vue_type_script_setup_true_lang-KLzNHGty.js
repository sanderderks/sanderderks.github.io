import{ao as S,av as O,aO as B,aU as w,cb as f,cc as c,x as L,b as d,c as p,F as V,C as A,g as _,aj as x,w as K,r as C,e as m,aq as h,t as b,d as T,B as k}from"../bundle.js";import{s as I}from"./c-index-NIKtA1Xa.js";var D=`
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
`,E={root:function(n){var t=n.props,l=n.instance;return["p-selectbutton p-component",{"p-invalid":l.$invalid,"p-selectbutton-fluid":t.fluid}]}},R=S.extend({name:"selectbutton",style:D,classes:E}),$={name:"BaseSelectButton",extends:B,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:R,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function q(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=g(e))||n){t&&(e=t);var l=0,s=function(){};return{s,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,i=!0,r=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return i=u.done,u},e:function(u){r=!0,a=u},f:function(){try{i||t.return==null||t.return()}finally{if(r)throw a}}}}function z(e){return F(e)||P(e)||g(e)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,n){if(e){if(typeof e=="string")return y(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function P(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F(e){if(Array.isArray(e))return y(e)}function y(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,l=Array(n);t<n;t++)l[t]=e[t];return l}var H={name:"SelectButton",extends:$,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?c(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?c(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?c(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?c(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,l){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var a=this.isSelected(t),i=this.getOptionValue(t),r;if(this.multiple)if(a){if(r=this.d_value.filter(function(o){return!f(o,i,s.equalityKey)}),!this.allowEmpty&&r.length===0)return}else r=this.d_value?[].concat(z(this.d_value),[i]):[i];else{if(a&&!this.allowEmpty)return;r=a?null:i}this.writeValue(r,n),this.$emit("change",{originalEvent:n,value:r})}},isSelected:function(n){var t=!1,l=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=q(this.d_value),a;try{for(s.s();!(a=s.n()).done;){var i=a.value;if(f(i,l,this.equalityKey)){t=!0;break}}}catch(r){s.e(r)}finally{s.f()}}}else t=f(this.d_value,l,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return w({invalid:this.$invalid})}},directives:{ripple:O},components:{ToggleButton:I}},N=["aria-labelledby","data-p"];function U(e,n,t,l,s,a){var i=L("ToggleButton");return d(),p("div",h({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":a.dataP}),[(d(!0),p(V,null,A(e.options,function(r,o){return d(),_(i,{key:a.getOptionRenderKey(r),modelValue:a.isSelected(r),onLabel:a.getOptionLabel(r),offLabel:a.getOptionLabel(r),disabled:e.disabled||a.isOptionDisabled(r),unstyled:e.unstyled,size:e.size,readonly:a.isOptionReadonly(r),onChange:function(v){return a.onOptionSelect(v,r,o)},pt:e.ptm("pcToggleButton")},x({_:2},[e.$slots.option?{name:"default",fn:K(function(){return[C(e.$slots,"option",{option:r,index:o},function(){return[m("span",h({ref_for:!0},e.ptm("pcToggleButton").label),b(a.getOptionLabel(r)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,N)}H.render=U;const M={class:"mt-3 mb-5 flex flex-col gap-3"},W={class:"text-xl font-bold"},G={key:0},X=T({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(n,t)=>(d(),p("div",M,[m("h3",W,b(e.title),1),e.description?(d(),p("p",G,b(e.description),1)):k("",!0)]))}});export{X as _,H as s};
