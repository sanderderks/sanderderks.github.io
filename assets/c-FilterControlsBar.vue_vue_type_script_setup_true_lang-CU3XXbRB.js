import{ak as z,ao as q,aE as P,aF as j,c2 as k,c3 as w,q as N,b as c,c as b,F as O,r as V,g as p,c4 as W,w as x,S as C,e as g,am as I,t as H,d as M,T as U,y,D as T,i as m,f as K,a3 as D}from"../bundle.js";import{s as G}from"./c-index-CrR83IRp.js";import{_}from"./c-Dialog.vue_vue_type_script_setup_true_lang-tnesKXe5.js";import{_ as R}from"./c-index-vM0EO5P_.js";var J=`
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
`,Q={root:function(n){var t=n.props,o=n.instance;return["p-selectbutton p-component",{"p-invalid":o.$invalid,"p-selectbutton-fluid":t.fluid}]}},X=z.extend({name:"selectbutton",style:J,classes:Q}),Y={name:"BaseSelectButton",extends:P,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:X,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Z(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=F(e))||n){t&&(e=t);var o=0,s=function(){};return{s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(f){throw f},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,u=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return u=f.done,f},e:function(f){l=!0,i=f},f:function(){try{u||t.return==null||t.return()}finally{if(l)throw i}}}}function ee(e){return le(e)||ne(e)||F(e)||te()}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(e,n){if(e){if(typeof e=="string")return B(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?B(e,n):void 0}}function ne(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function le(e){if(Array.isArray(e))return B(e)}function B(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var ae={name:"SelectButton",extends:Y,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?w(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?w(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?w(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?w(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,o){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),u=this.getOptionValue(t),l;if(this.multiple)if(i){if(l=this.d_value.filter(function(r){return!k(r,u,s.equalityKey)}),!this.allowEmpty&&l.length===0)return}else l=this.d_value?[].concat(ee(this.d_value),[u]):[u];else{if(i&&!this.allowEmpty)return;l=i?null:u}this.writeValue(l,n),this.$emit("change",{originalEvent:n,value:l})}},isSelected:function(n){var t=!1,o=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=Z(this.d_value),i;try{for(s.s();!(i=s.n()).done;){var u=i.value;if(k(u,o,this.equalityKey)){t=!0;break}}}catch(l){s.e(l)}finally{s.f()}}}else t=k(this.d_value,o,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return j({invalid:this.$invalid})}},directives:{ripple:q},components:{ToggleButton:G}},ie=["aria-labelledby","data-p"];function re(e,n,t,o,s,i){var u=N("ToggleButton");return c(),b("div",I({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":i.dataP}),[(c(!0),b(O,null,V(e.options,function(l,r){return c(),p(u,{key:i.getOptionRenderKey(l),modelValue:i.isSelected(l),onLabel:i.getOptionLabel(l),offLabel:i.getOptionLabel(l),disabled:e.disabled||i.isOptionDisabled(l),unstyled:e.unstyled,size:e.size,readonly:i.isOptionReadonly(l),onChange:function(h){return i.onOptionSelect(h,l,r)},pt:e.ptm("pcToggleButton")},W({_:2},[e.$slots.option?{name:"default",fn:x(function(){return[C(e.$slots,"option",{option:l,index:r},function(){return[g("span",I({ref_for:!0},e.ptm("pcToggleButton").label),H(i.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,ie)}ae.render=re;const oe={class:"w-full md:w-2/3 xl:w-1/2 place-self-center my-5 flex flex-col gap-5"},se={class:"flex flex-wrap gap-3"},ue={key:0,class:"flex flex-wrap gap-2"},de={class:"mt-5 flex flex-col gap-4"},ce={class:"mt-5 flex flex-col gap-4"},ye=M({__name:"FilterControlsBar",props:{filtersTitle:{default:"Filters"},viewsTitle:{default:"Weergave"},filterSummaryItems:{default:()=>[]},viewSummaryItems:{default:()=>[]}},setup(e){const n=e,t=U(),o=T(!1),s=T(!1),i=m(()=>!!t.filters),u=m(()=>!!t.views),l=m(()=>h(n.filterSummaryItems)),r=m(()=>h(n.viewSummaryItems)),f=m(()=>l.value.length||r.value.length);function h(S){return S.flatMap(a=>{if(a.visible===!1)return[];if(a.options){if(!a.options.some($=>$.value===null))return[];const v=a.options.find($=>$.value===a.selectedValue),E=a.emptyValue??null;return!v||v.value===E?[]:[{key:a.key,label:v.label,onClear:a.onClear}]}return a.active?[{key:a.key,label:a.label,onClear:a.onClear}]:[]})}function A(){o.value=!1}function L(){s.value=!1}return(S,a)=>(c(),b(O,null,[g("div",oe,[g("div",se,[i.value?(c(),p(R,{key:0,class:"flex-1 md:flex-none",icon:"pi pi-filter",label:"Filters",severity:"secondary",outlined:"",badge:l.value.length?String(l.value.length):void 0,onClick:a[0]||(a[0]=d=>o.value=!0)},null,8,["badge"])):y("",!0),u.value?(c(),p(R,{key:1,class:"flex-1 md:flex-none",icon:"pi pi-sliders-h",label:"Weergave",severity:"secondary",outlined:"",badge:r.value.length?String(r.value.length):void 0,onClick:a[1]||(a[1]=d=>s.value=!0)},null,8,["badge"])):y("",!0)]),f.value?(c(),b("div",ue,[(c(!0),b(O,null,V(l.value,d=>(c(),p(K(D),{key:`filter-${d.key}`,label:d.label,removable:"",onRemove:v=>d.onClear?.()},null,8,["label","onRemove"]))),128)),(c(!0),b(O,null,V(r.value,d=>(c(),p(K(D),{key:`view-${d.key}`,label:d.label,removable:"",onRemove:v=>d.onClear?.()},null,8,["label","onRemove"]))),128))])):y("",!0)]),i.value?(c(),p(_,{key:0,"is-open":o.value,title:`${e.filtersTitle}${l.value.length?` (${l.value.length})`:""}`,description:"Pas toe welke items zichtbaar zijn.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[2]||(a[2]=d=>A()),onConfirm:a[3]||(a[3]=d=>A())},{default:x(()=>[g("div",de,[C(S.$slots,"filters")])]),_:3},8,["is-open","title"])):y("",!0),u.value?(c(),p(_,{key:1,"is-open":s.value,title:`${e.viewsTitle}${r.value.length?` (${r.value.length})`:""}`,description:"Kies hoe informatie wordt getoond.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[4]||(a[4]=d=>L()),onConfirm:a[5]||(a[5]=d=>L())},{default:x(()=>[g("div",ce,[C(S.$slots,"views")])]),_:3},8,["is-open","title"])):y("",!0)],64))}});export{ye as _,ae as s};
