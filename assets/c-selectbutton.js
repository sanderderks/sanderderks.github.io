import{Br as e,Hr as t,Mr as n,Ni as r,Rr as i,S as a,Sr as o,Vr as s,Zr as c,b as l,ft as u,gr as d,i as f,vr as p,vt as m,xr as h,xt as g,yr as _}from"../bundle.js";import{t as v}from"./c-togglebutton.js";var y=a.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),b={name:`BaseSelectButton`,extends:l,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:y,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function x(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=w(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function S(e){return E(e)||T(e)||w(e)||C()}function C(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,t){if(e){if(typeof e==`string`)return D(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function T(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function E(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var O={name:`SelectButton`,extends:b,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?g(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?g(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?g(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?g(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!m(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(S(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=x(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(m(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=m(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return u({invalid:this.$invalid})}},directives:{ripple:f},components:{ToggleButton:v}},k=[`aria-labelledby`,`data-p`];function A(a,l,u,f,m,g){var v=t(`ToggleButton`);return i(),h(`div`,n({class:a.cx(`root`),role:`group`,"aria-labelledby":a.ariaLabelledby},a.ptmi(`root`),{"data-p":g.dataP}),[(i(!0),h(d,null,e(a.options,function(e,t){return i(),_(v,{key:g.getOptionRenderKey(e),modelValue:g.isSelected(e),onLabel:g.getOptionLabel(e),offLabel:g.getOptionLabel(e),disabled:a.disabled||g.isOptionDisabled(e),unstyled:a.unstyled,size:a.size,readonly:g.isOptionReadonly(e),onChange:function(n){return g.onOptionSelect(n,e,t)},pt:a.ptm(`pcToggleButton`)},o({_:2},[a.$slots.option?{name:`default`,fn:c(function(){return[s(a.$slots,`option`,{option:e,index:t},function(){return[p(`span`,n({ref_for:!0},a.ptm(`pcToggleButton`).label),r(g.getOptionLabel(e)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,k)}O.render=A;export{O as t};