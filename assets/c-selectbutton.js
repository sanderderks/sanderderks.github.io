import{Bi as e,Cr as t,Er as n,Fr as r,Jr as i,Kr as a,Rr as o,Si as s,Sr as c,Tr as l,Wr as u,br as d,gt as f,l as p,nt as m,pt as h,qr as g,ri as _,t as v}from"./c-ripple.js";import{t as y}from"./c-togglebutton.js";import{m as b}from"../bundle.js";var x=p.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}});r(),s();var S={name:`BaseSelectButton`,extends:b,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:x,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function C(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=E(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function w(e){return O(e)||D(e)||E(e)||T()}function T(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){if(e){if(typeof e==`string`)return k(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function D(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function O(e){if(Array.isArray(e))return k(e)}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A={name:`SelectButton`,extends:S,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?f(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?f(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?f(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?f(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple){if(i){if(o=this.d_value.filter(function(e){return!h(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(w(this.d_value),[a]):[a]}else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=C(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(h(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=h(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return m({invalid:this.$invalid})}},directives:{ripple:v},components:{ToggleButton:y}},j=[`aria-labelledby`,`data-p`];function M(r,s,f,p,m,h){var v=i(`ToggleButton`);return u(),l(`div`,o({class:r.cx(`root`),role:`group`,"aria-labelledby":r.ariaLabelledby},r.ptmi(`root`),{"data-p":h.dataP}),[(u(!0),l(d,null,a(r.options,function(i,a){return u(),t(v,{key:h.getOptionRenderKey(i),modelValue:h.isSelected(i),onLabel:h.getOptionLabel(i),offLabel:h.getOptionLabel(i),disabled:r.disabled||h.isOptionDisabled(i),unstyled:r.unstyled,size:r.size,readonly:h.isOptionReadonly(i),onChange:function(e){return h.onOptionSelect(e,i,a)},pt:r.ptm(`pcToggleButton`)},n({_:2},[r.$slots.option?{name:`default`,fn:_(function(){return[g(r.$slots,`option`,{option:i,index:a},function(){return[c(`span`,o({ref_for:!0},r.ptm(`pcToggleButton`).label),e(h.getOptionLabel(i)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,j)}A.render=M;export{A as t};