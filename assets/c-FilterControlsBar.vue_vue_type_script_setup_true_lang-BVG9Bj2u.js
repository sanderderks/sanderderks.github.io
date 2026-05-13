import{ao as q,av as P,aO as H,aU as N,cb as k,cc as w,x as W,b as s,c as p,F as $,C as V,g as b,aj as M,w as C,r as O,e as v,aq as I,t as _,d as z,B as y,W as U,f as K,a6 as T,H as D,z as h}from"../bundle.js";import{s as G}from"./c-index-NIKtA1Xa.js";import{_ as R}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Ddvzblqv.js";import{a as F}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di6IGPJM.js";var J=`
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
`,Q={root:function(n){var t=n.props,r=n.instance;return["p-selectbutton p-component",{"p-invalid":r.$invalid,"p-selectbutton-fluid":t.fluid}]}},X=q.extend({name:"selectbutton",style:J,classes:Q}),Y={name:"BaseSelectButton",extends:H,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:X,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Z(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=E(e))||n){t&&(e=t);var r=0,u=function(){};return{s:u,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,d=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return d=f.done,f},e:function(f){l=!0,i=f},f:function(){try{d||t.return==null||t.return()}finally{if(l)throw i}}}}function ee(e){return le(e)||ne(e)||E(e)||te()}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,n){if(e){if(typeof e=="string")return B(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?B(e,n):void 0}}function ne(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function le(e){if(Array.isArray(e))return B(e)}function B(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var ae={name:"SelectButton",extends:Y,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?w(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?w(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?w(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?w(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,r){var u=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),d=this.getOptionValue(t),l;if(this.multiple)if(i){if(l=this.d_value.filter(function(o){return!k(o,d,u.equalityKey)}),!this.allowEmpty&&l.length===0)return}else l=this.d_value?[].concat(ee(this.d_value),[d]):[d];else{if(i&&!this.allowEmpty)return;l=i?null:d}this.writeValue(l,n),this.$emit("change",{originalEvent:n,value:l})}},isSelected:function(n){var t=!1,r=this.getOptionValue(n);if(this.multiple){if(this.d_value){var u=Z(this.d_value),i;try{for(u.s();!(i=u.n()).done;){var d=i.value;if(k(d,r,this.equalityKey)){t=!0;break}}}catch(l){u.e(l)}finally{u.f()}}}else t=k(this.d_value,r,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return N({invalid:this.$invalid})}},directives:{ripple:P},components:{ToggleButton:G}},ie=["aria-labelledby","data-p"];function oe(e,n,t,r,u,i){var d=W("ToggleButton");return s(),p("div",I({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":i.dataP}),[(s(!0),p($,null,V(e.options,function(l,o){return s(),b(d,{key:i.getOptionRenderKey(l),modelValue:i.isSelected(l),onLabel:i.getOptionLabel(l),offLabel:i.getOptionLabel(l),disabled:e.disabled||i.isOptionDisabled(l),unstyled:e.unstyled,size:e.size,readonly:i.isOptionReadonly(l),onChange:function(g){return i.onOptionSelect(g,l,o)},pt:e.ptm("pcToggleButton")},M({_:2},[e.$slots.option?{name:"default",fn:C(function(){return[O(e.$slots,"option",{option:l,index:o},function(){return[v("span",I({ref_for:!0},e.ptm("pcToggleButton").label),_(i.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,ie)}ae.render=oe;const re={class:"mt-3 mb-5 flex flex-col gap-3"},se={class:"w-full flex gap-1 justify-between items-center"},ue={class:"text-xl font-bold"},de={key:0},Se=z({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(n,t)=>(s(),p("div",re,[v("div",se,[v("h3",ue,_(e.title),1),O(n.$slots,"default")]),e.description?(s(),p("p",de,_(e.description),1)):y("",!0)]))}}),ce={class:"w-full md:w-2/3 xl:w-1/2 place-self-center my-5 flex flex-col gap-5"},fe={class:"flex flex-wrap gap-3"},pe={key:0,class:"flex flex-wrap gap-2"},be={class:"mt-5 flex flex-col gap-4"},ve={class:"mt-5 flex flex-col gap-4"},we=z({__name:"FilterControlsBar",props:{filtersTitle:{default:"Filters"},viewsTitle:{default:"Weergave"},filterSummaryItems:{default:()=>[]},viewSummaryItems:{default:()=>[]}},setup(e){const n=e,t=U(),r=D(!1),u=D(!1),i=h(()=>!!t.filters),d=h(()=>!!t.views),l=h(()=>g(n.filterSummaryItems)),o=h(()=>g(n.viewSummaryItems)),f=h(()=>l.value.length||o.value.length);function g(S){return S.flatMap(a=>{if(a.visible===!1)return[];if(a.options){if(!a.options.some(x=>x.value===null))return[];const m=a.options.find(x=>x.value===a.selectedValue),j=a.emptyValue??null;return!m||m.value===j?[]:[{key:a.key,label:m.label,onClear:a.onClear}]}return a.active?[{key:a.key,label:a.label,onClear:a.onClear}]:[]})}function A(){r.value=!1}function L(){u.value=!1}return(S,a)=>(s(),p($,null,[v("div",ce,[v("div",fe,[i.value?(s(),b(F,{key:0,class:"flex-1 md:flex-none",icon:"pi pi-filter",label:"Filters",severity:"secondary",outlined:"",badge:l.value.length?String(l.value.length):void 0,onClick:a[0]||(a[0]=c=>r.value=!0)},null,8,["badge"])):y("",!0),d.value?(s(),b(F,{key:1,class:"flex-1 md:flex-none",icon:"pi pi-sliders-h",label:"Weergave",severity:"secondary",outlined:"",badge:o.value.length?String(o.value.length):void 0,onClick:a[1]||(a[1]=c=>u.value=!0)},null,8,["badge"])):y("",!0)]),f.value?(s(),p("div",pe,[(s(!0),p($,null,V(l.value,c=>(s(),b(K(T),{key:`filter-${c.key}`,label:c.label,removable:"",onRemove:m=>c.onClear?.()},null,8,["label","onRemove"]))),128)),(s(!0),p($,null,V(o.value,c=>(s(),b(K(T),{key:`view-${c.key}`,label:c.label,removable:"",onRemove:m=>c.onClear?.()},null,8,["label","onRemove"]))),128))])):y("",!0)]),i.value?(s(),b(R,{key:0,"is-open":r.value,title:`${e.filtersTitle}${l.value.length?` (${l.value.length})`:""}`,description:"Pas toe welke items zichtbaar zijn.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[2]||(a[2]=c=>A()),onConfirm:a[3]||(a[3]=c=>A())},{default:C(()=>[v("div",be,[O(S.$slots,"filters")])]),_:3},8,["is-open","title"])):y("",!0),d.value?(s(),b(R,{key:1,"is-open":u.value,title:`${e.viewsTitle}${o.value.length?` (${o.value.length})`:""}`,description:"Kies hoe informatie wordt getoond.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[4]||(a[4]=c=>L()),onConfirm:a[5]||(a[5]=c=>L())},{default:C(()=>[v("div",ve,[O(S.$slots,"views")])]),_:3},8,["is-open","title"])):y("",!0)],64))}});export{Se as _,we as a,ae as s};
