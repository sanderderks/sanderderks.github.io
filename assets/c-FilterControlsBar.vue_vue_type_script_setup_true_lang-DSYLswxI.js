import{am as q,aq as E,aG as z,aH as j,c4 as B,c5 as w,q as N,b as c,c as v,F as O,r as k,g as p,c6 as H,w as V,T as x,e as m,ao as I,t as M,j as U,a as W,s as G,i as b,K as J,d as Q,U as X,_ as L,y as g,D as K,f as P,a5 as D}from"../bundle.js";import{s as Y}from"./c-index-CNWDNrLG.js";import{_ as R}from"./c-Dialog.vue_vue_type_script_setup_true_lang-CyYp2QU8.js";var Z=`
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
`,ee={root:function(n){var t=n.props,s=n.instance;return["p-selectbutton p-component",{"p-invalid":s.$invalid,"p-selectbutton-fluid":t.fluid}]}},te=q.extend({name:"selectbutton",style:Z,classes:ee}),ne={name:"BaseSelectButton",extends:z,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:te,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function le(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_(e))||n){t&&(e=t);var s=0,u=function(){};return{s:u,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var f=t.next();return i=f.done,f},e:function(f){l=!0,o=f},f:function(){try{i||t.return==null||t.return()}finally{if(l)throw o}}}}function ae(e){return re(e)||ie(e)||_(e)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(e,n){if(e){if(typeof e=="string")return C(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}function ie(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function re(e){if(Array.isArray(e))return C(e)}function C(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,s=Array(n);t<n;t++)s[t]=e[t];return s}var se={name:"SelectButton",extends:ne,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?w(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?w(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?w(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?w(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,s){var u=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var o=this.isSelected(t),i=this.getOptionValue(t),l;if(this.multiple)if(o){if(l=this.d_value.filter(function(r){return!B(r,i,u.equalityKey)}),!this.allowEmpty&&l.length===0)return}else l=this.d_value?[].concat(ae(this.d_value),[i]):[i];else{if(o&&!this.allowEmpty)return;l=o?null:i}this.writeValue(l,n),this.$emit("change",{originalEvent:n,value:l})}},isSelected:function(n){var t=!1,s=this.getOptionValue(n);if(this.multiple){if(this.d_value){var u=le(this.d_value),o;try{for(u.s();!(o=u.n()).done;){var i=o.value;if(B(i,s,this.equalityKey)){t=!0;break}}}catch(l){u.e(l)}finally{u.f()}}}else t=B(this.d_value,s,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return j({invalid:this.$invalid})}},directives:{ripple:E},components:{ToggleButton:Y}},ue=["aria-labelledby","data-p"];function de(e,n,t,s,u,o){var i=N("ToggleButton");return c(),v("div",I({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":o.dataP}),[(c(!0),v(O,null,k(e.options,function(l,r){return c(),p(i,{key:o.getOptionRenderKey(l),modelValue:o.isSelected(l),onLabel:o.getOptionLabel(l),offLabel:o.getOptionLabel(l),disabled:e.disabled||o.isOptionDisabled(l),unstyled:e.unstyled,size:e.size,readonly:o.isOptionReadonly(l),onChange:function(h){return o.onOptionSelect(h,l,r)},pt:e.ptm("pcToggleButton")},H({_:2},[e.$slots.option?{name:"default",fn:V(function(){return[x(e.$slots,"option",{option:l,index:r},function(){return[m("span",I({ref_for:!0},e.ptm("pcToggleButton").label),M(o.getOptionLabel(l)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,ue)}se.render=de;const he=()=>{const e=U(),n=W(),{allBlogPosts:t}=G(n);return{blogPostOptions:b(()=>{const o=[...new Map(t.value.map(i=>[i.id,i])).values()].sort((i,l)=>l.date.getTime()-i.date.getTime());return[{value:null,label:"Geen gekoppelde blogpost"},...o.map(i=>({value:i.id,label:`${i.title} (${J(i.date)})`}))]}),loadBlogPostOptions:async()=>{await n.fetchBlogPosts({visibility:"public",amount:100,loadingIndicator:!1}),e.firebaseUser&&await n.fetchBlogPosts({visibility:"private",amount:100,loadingIndicator:!1})}}},ce={class:"w-full md:w-2/3 xl:w-1/2 place-self-center my-5 flex flex-col gap-5"},fe={class:"flex flex-wrap gap-3"},pe={key:0,class:"flex flex-wrap gap-2"},be={class:"mt-5 flex flex-col gap-4"},ve={class:"mt-5 flex flex-col gap-4"},Se=Q({__name:"FilterControlsBar",props:{filtersTitle:{default:"Filters"},viewsTitle:{default:"Weergave"},filterSummaryItems:{default:()=>[]},viewSummaryItems:{default:()=>[]}},setup(e){const n=e,t=X(),s=K(!1),u=K(!1),o=b(()=>!!t.filters),i=b(()=>!!t.views),l=b(()=>h(n.filterSummaryItems)),r=b(()=>h(n.viewSummaryItems)),f=b(()=>l.value.length||r.value.length);function h(S){return S.flatMap(a=>{if(a.visible===!1)return[];if(a.options){if(!a.options.some($=>$.value===null))return[];const y=a.options.find($=>$.value===a.selectedValue),F=a.emptyValue??null;return!y||y.value===F?[]:[{key:a.key,label:y.label,onClear:a.onClear}]}return a.active?[{key:a.key,label:a.label,onClear:a.onClear}]:[]})}function T(){s.value=!1}function A(){u.value=!1}return(S,a)=>(c(),v(O,null,[m("div",ce,[m("div",fe,[o.value?(c(),p(L,{key:0,class:"flex-1 md:flex-none",icon:"pi pi-filter",label:"Filters",severity:"secondary",outlined:"",badge:l.value.length?String(l.value.length):void 0,onClick:a[0]||(a[0]=d=>s.value=!0)},null,8,["badge"])):g("",!0),i.value?(c(),p(L,{key:1,class:"flex-1 md:flex-none",icon:"pi pi-sliders-h",label:"Weergave",severity:"secondary",outlined:"",badge:r.value.length?String(r.value.length):void 0,onClick:a[1]||(a[1]=d=>u.value=!0)},null,8,["badge"])):g("",!0)]),f.value?(c(),v("div",pe,[(c(!0),v(O,null,k(l.value,d=>(c(),p(P(D),{key:`filter-${d.key}`,label:d.label,removable:"",onRemove:y=>d.onClear?.()},null,8,["label","onRemove"]))),128)),(c(!0),v(O,null,k(r.value,d=>(c(),p(P(D),{key:`view-${d.key}`,label:d.label,removable:"",onRemove:y=>d.onClear?.()},null,8,["label","onRemove"]))),128))])):g("",!0)]),o.value?(c(),p(R,{key:0,"is-open":s.value,title:`${e.filtersTitle}${l.value.length?` (${l.value.length})`:""}`,description:"Pas toe welke items zichtbaar zijn.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[2]||(a[2]=d=>T()),onConfirm:a[3]||(a[3]=d=>T())},{default:V(()=>[m("div",be,[x(S.$slots,"filters")])]),_:3},8,["is-open","title"])):g("",!0),i.value?(c(),p(R,{key:1,"is-open":u.value,title:`${e.viewsTitle}${r.value.length?` (${r.value.length})`:""}`,description:"Kies hoe informatie wordt getoond.","confirm-text":"Klaar","confirm-props":{outlined:!0},"hide-cancel-button":"",onCancel:a[4]||(a[4]=d=>A()),onConfirm:a[5]||(a[5]=d=>A())},{default:V(()=>[m("div",ve,[x(S.$slots,"views")])]),_:3},8,["is-open","title"])):g("",!0)],64))}});export{Se as _,se as s,he as u};
