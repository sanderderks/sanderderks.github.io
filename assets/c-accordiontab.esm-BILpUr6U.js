import{aM as x,l as s,m as h,z as d,q as g,B as w,aN as y,Q as l,aO as C,aP as E,y as A,x as H,P as S,t as p,av as b,J as K,w as T,n as D,E as O,ar as k,as as _,aQ as B,A as N}from"../bundle.js";var P={name:"ChevronRightIcon",extends:x},j=g("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),F=[j];function L(t,e,n,a,c,r){return s(),h("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),F,16)}P.render=L;var $={root:"p-accordion p-component",tab:{root:function(e){var n=e.instance,a=e.index;return["p-accordion-tab",{"p-accordion-tab-active":n.isTabActive(a)}]},header:function(e){var n=e.instance,a=e.tab,c=e.index;return["p-accordion-header",{"p-highlight":n.isTabActive(c),"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-accordion-header-link p-accordion-header-action",headerIcon:"p-accordion-toggle-icon",headerTitle:"p-accordion-header-text",toggleableContent:"p-toggleable-content",content:"p-accordion-content"}},U=w.extend({name:"accordion",classes:$}),z={name:"BaseAccordion",extends:A,props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:U,provide:function(){return{$parentInstance:this}}},R={name:"Accordion",extends:z,inheritAttrs:!1,emits:["update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(e){this.id=e||y()},activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.id=this.id||y()},methods:{isAccordionTab:function(e){return e.type.name==="AccordionTab"},isTabActive:function(e){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(e):this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var c=this.tabs.length,r={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:c,first:a===0,last:a===c-1,active:this.isTabActive(a)}};return d(this.ptm("tab.".concat(n),{tab:r}),this.ptm("accordiontab.".concat(n),{accordiontab:r}),this.ptm("accordiontab.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowDownKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowUpKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,c=l.findSingle(a,'[data-pc-section="header"]');return c?l.getAttribute(c,"data-p-disabled")?this.findNextHeaderAction(c.parentElement):l.findSingle(c,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,c=l.findSingle(a,'[data-pc-section="header"]');return c?l.getAttribute(c,"data-p-disabled")?this.findPrevHeaderAction(c.parentElement):l.findSingle(c,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex:function(e,n,a){if(!this.getTabProp(n,"disabled")){var c=this.isTabActive(a),r=c?"tab-close":"tab-open";this.multiple?c?this.d_activeIndex=this.d_activeIndex.filter(function(i){return i!==a}):this.d_activeIndex?this.d_activeIndex.push(a):this.d_activeIndex=[a]:this.d_activeIndex=this.d_activeIndex===a?null:a,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(r,{originalEvent:e,index:a})}},changeFocusedTab:function(e,n){if(n&&(l.focus(n),this.selectOnFocus)){var a=parseInt(n.parentElement.parentElement.dataset.pcIndex,10),c=this.tabs[a];this.changeActiveIndex(e,c,a)}}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(c){e.isAccordionTab(c)&&n.push(c)}),n},[])}},components:{ChevronDownIcon:C,ChevronRightIcon:P},directives:{ripple:E}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(a){M(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function M(t,e,n){return e=V(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t){var e=q(t,"string");return f(e)=="symbol"?e:String(e)}function q(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(f(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Q=["data-pc-index","data-p-active"],J=["data-p-highlight","data-p-disabled"],Z=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],G=["id","aria-labelledby"];function W(t,e,n,a,c,r){return s(),h("div",d({class:t.cx("root")},t.ptmi("root")),[(s(!0),h(H,null,S(r.tabs,function(i,o){return s(),h("div",d({key:r.getKey(i,o),class:t.cx("tab.root",{tab:i,index:o})},r.getTabPT(i,"root",o),{"data-pc-name":"accordiontab","data-pc-index":o,"data-p-active":r.isTabActive(o)}),[g("div",d({style:r.getTabProp(i,"headerStyle"),class:[t.cx("tab.header",{tab:i,index:o}),r.getTabProp(i,"headerClass")]},u(u({},r.getTabProp(i,"headerProps")),r.getTabPT(i,"header",o)),{"data-p-highlight":r.isTabActive(o),"data-p-disabled":r.getTabProp(i,"disabled")}),[g("a",d({id:r.getTabHeaderActionId(o),class:t.cx("tab.headerAction"),tabindex:r.getTabProp(i,"disabled")?-1:t.tabindex,role:"button","aria-disabled":r.getTabProp(i,"disabled"),"aria-expanded":r.isTabActive(o),"aria-controls":r.getTabContentId(o),onClick:function(v){return r.onTabClick(v,i,o)},onKeydown:function(v){return r.onTabKeyDown(v,i,o)}},u(u({},r.getTabProp(i,"headeractionprops")),r.getTabPT(i,"headeraction",o))),[i.children&&i.children.headericon?(s(),p(b(i.children.headericon),{key:0,isTabActive:r.isTabActive(o),active:r.isTabActive(o),index:o},null,8,["isTabActive","active","index"])):r.isTabActive(o)?(s(),p(b(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),d({key:1,class:[t.cx("tab.headerIcon"),t.collapseIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",o)),null,16,["class"])):(s(),p(b(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronRightIcon"),d({key:2,class:[t.cx("tab.headerIcon"),t.expandIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",o)),null,16,["class"])),i.props&&i.props.header?(s(),h("span",d({key:3,class:t.cx("tab.headerTitle")},r.getTabPT(i,"headertitle",o)),K(i.props.header),17)):T("",!0),i.children&&i.children.header?(s(),p(b(i.children.header),{key:4})):T("",!0)],16,Z)],16,J),D(B,d({name:"p-toggleable-content"},r.getTabPT(i,"transition",o)),{default:O(function(){return[!t.lazy||r.isTabActive(o)?k((s(),h("div",d({key:0,id:r.getTabContentId(o),style:r.getTabProp(i,"contentStyle"),class:[t.cx("tab.toggleableContent"),r.getTabProp(i,"contentClass")],role:"region","aria-labelledby":r.getTabHeaderActionId(o)},u(u({},r.getTabProp(i,"contentProps")),r.getTabPT(i,"toggleablecontent",o))),[g("div",d({class:t.cx("tab.content")},r.getTabPT(i,"content",o)),[(s(),p(b(i)))],16)],16,G)),[[_,t.lazy?!0:r.isTabActive(o)]]):T("",!0)]}),_:2},1040)],16,Q)}),128))],16)}R.render=W;var X={},Y={name:"BaseAccordionTab",extends:A,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:X,provide:function(){return{$parentInstance:this}}},ee={name:"AccordionTab",extends:Y,inheritAttrs:!1};function te(t,e,n,a,c,r){return N(t.$slots,"default")}ee.render=te;export{R as a,ee as s};
