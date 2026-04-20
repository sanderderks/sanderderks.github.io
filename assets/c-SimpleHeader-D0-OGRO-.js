import{Cr as e,Dr as t,Er as n,Fr as r,Hi as i,Or as a,Vr as o,Xr as s,Yr as c,Zr as l,ht as u,it as d,jr as f,kr as p,oi as m,qr as h,s as g,t as _,vt as v}from"./c-ripple-C-ZS5KEU.js";import{t as y}from"./c-baseeditableholder-B3yD1zYC.js";import{t as b}from"./c-togglebutton-GOzeYixR.js";var x=g.extend({name:`selectbutton`,style:`
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
`,classes:{root:function(e){var t=e.props,n=e.instance;return[`p-selectbutton p-component`,{"p-invalid":n.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),S={name:`BaseSelectButton`,extends:y,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:x,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function C(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=E(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function w(e){return O(e)||D(e)||E(e)||T()}function T(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){if(e){if(typeof e==`string`)return k(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function D(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function O(e){if(Array.isArray(e))return k(e)}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A={name:`SelectButton`,extends:S,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?v(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?v(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?v(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?v(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!u(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(w(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=C(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(u(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=u(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return d({invalid:this.$invalid})}},directives:{ripple:_},components:{ToggleButton:b}},j=[`aria-labelledby`,`data-p`];function M(r,a,u,d,g,_){var v=l(`ToggleButton`);return h(),p(`div`,o({class:r.cx(`root`),role:`group`,"aria-labelledby":r.ariaLabelledby},r.ptmi(`root`),{"data-p":_.dataP}),[(h(!0),p(e,null,c(r.options,function(e,a){return h(),t(v,{key:_.getOptionRenderKey(e),modelValue:_.isSelected(e),onLabel:_.getOptionLabel(e),offLabel:_.getOptionLabel(e),disabled:r.disabled||_.isOptionDisabled(e),unstyled:r.unstyled,size:r.size,readonly:_.isOptionReadonly(e),onChange:function(t){return _.onOptionSelect(t,e,a)},pt:r.ptm(`pcToggleButton`)},f({_:2},[r.$slots.option?{name:`default`,fn:m(function(){return[s(r.$slots,`option`,{option:e,index:a},function(){return[n(`span`,o({ref_for:!0},r.ptm(`pcToggleButton`).label),i(_.getOptionLabel(e)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,j)}A.render=M;var N={class:`mt-3 mb-5 flex flex-col gap-3`},P={class:`text-xl font-bold`},F={key:0},I=r({__name:`SimpleHeader`,props:{title:{},description:{}},setup(e){return(t,r)=>(h(),p(`div`,N,[n(`h3`,P,i(e.title),1),e.description?(h(),p(`p`,F,i(e.description),1)):a(``,!0)]))}});export{A as n,I as t};