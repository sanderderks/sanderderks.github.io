import{Br as e,I as t,Lr as n,Mi as r,O as i,S as a,Tt as o,Vr as s,Xr as c,_r as l,br as u,g as d,hr as f,jr as p,vr as m,xr as h,z as g,zr as _}from"../bundle.js";import{t as v}from"./c-togglebutton.js";var y=i.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),b={name:`BaseSelectButton`,extends:d,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:y,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function x(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=w(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function S(e){return E(e)||T(e)||w(e)||C()}function C(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,t){if(e){if(typeof e==`string`)return D(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function T(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function E(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var O={name:`SelectButton`,extends:b,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?g(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?g(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?g(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?g(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,n,r){var i=this;if(!(this.disabled||this.isOptionDisabled(n)||this.isOptionReadonly(n))){var a=this.isSelected(n),o=this.getOptionValue(n),s;if(this.multiple)if(a){if(s=this.d_value.filter(function(e){return!t(e,o,i.equalityKey)}),!this.allowEmpty&&s.length===0)return}else s=this.d_value?[].concat(S(this.d_value),[o]):[o];else{if(a&&!this.allowEmpty)return;s=a?null:o}this.writeValue(s,e),this.$emit(`change`,{originalEvent:e,value:s})}},isSelected:function(e){var n=!1,r=this.getOptionValue(e);if(this.multiple){if(this.d_value){var i=x(this.d_value),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;if(t(o,r,this.equalityKey)){n=!0;break}}}catch(e){i.e(e)}finally{i.f()}}}else n=t(this.d_value,r,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return o({invalid:this.$invalid})}},directives:{ripple:a},components:{ToggleButton:v}},k=[`aria-labelledby`,`data-p`];function A(t,i,a,o,d,g){var v=s(`ToggleButton`);return n(),u(`div`,p({class:t.cx(`root`),role:`group`,"aria-labelledby":t.ariaLabelledby},t.ptmi(`root`),{"data-p":g.dataP}),[(n(!0),u(f,null,_(t.options,function(i,a){return n(),m(v,{key:g.getOptionRenderKey(i),modelValue:g.isSelected(i),onLabel:g.getOptionLabel(i),offLabel:g.getOptionLabel(i),disabled:t.disabled||g.isOptionDisabled(i),unstyled:t.unstyled,size:t.size,readonly:g.isOptionReadonly(i),onChange:function(e){return g.onOptionSelect(e,i,a)},pt:t.ptm(`pcToggleButton`)},h({_:2},[t.$slots.option?{name:`default`,fn:c(function(){return[e(t.$slots,`option`,{option:i,index:a},function(){return[l(`span`,p({ref_for:!0},t.ptm(`pcToggleButton`).label),r(g.getOptionLabel(i)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,k)}O.render=A;export{O as t};