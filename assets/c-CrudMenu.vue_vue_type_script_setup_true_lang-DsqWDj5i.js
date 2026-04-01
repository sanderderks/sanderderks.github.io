import{an as O,bx as se,bo as H,ao as x,bq as z,by as oe,bz as re,bA as le,bB as de,bC as E,bD as D,bE as ue,bF as C,bG as A,bH as P,$ as r,bI as ce,bJ as U,b as o,c as u,e as L,aG as B,g as y,n as j,b6 as I,J as h,t as X,A as Z,w as S,h as v,bK as be,r as k,O as g,Q as q,k as pe,br as ee,bL as V,bM as fe,bN as he,bO as N,bP as me,bQ as ve,bR as K,bS as Q,aH as ge,d as W,T as ye,a9 as te,D as ke,U as we,z as ne,q as Le,bj as Te,s as _,v as xe,bT as Ie,l as Oe,i as M,f as w,R as G,af as R,B as $e,E as Ce,I as Pe,a7 as Be}from"../bundle.js";import{_ as Se}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Bb6P0zHL.js";var Ae=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,Ve={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ke=O.extend({name:"menu",style:Ae,classes:Ve}),Ee={name:"BaseMenu",extends:x,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ke,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ie={name:"Menuitem",hostName:"Menu",extends:x,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?ce(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return z({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:H}},Me=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],ze=["data-p"],De=["href","target"],Ne=["data-p"],Re=["data-p"];function Fe(t,e,n,a,s,i){var d=U("ripple");return i.visible()?(o(),u("li",r({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[L("div",r({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(b){return i.onItemClick(b)}),onMousemove:e[1]||(e[1]=function(b){return i.onItemMouseMove(b)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(o(),y(I(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):h("",!0):B((o(),u("a",r({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(o(),y(I(n.templates.itemicon),{key:0,item:n.item,class:j(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(o(),u("span",r({key:1,class:[t.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,Ne)):h("",!0),L("span",r({class:t.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),X(i.label()),17,Re)],16,De)),[[d]])],16,ze)],16,Me)):h("",!0)}ie.render=Fe;function J(t){return We(t)||je(t)||Ue(t)||He()}function He(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(t,e){if(t){if(typeof t=="string")return F(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}function je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function We(t){if(Array.isArray(t))return F(t)}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var ae={name:"Menu",extends:Ee,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&D.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(C(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)C(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(A(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=P(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),a=n&&P(n,'a[data-pc-section="itemlink"]');this.popup&&C(this.target),a?a.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=A(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=J(n).findIndex(function(s){return s.id===e});return a>-1?a+1:0},findPrevOptionIndex:function(e){var n=A(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=J(n).findIndex(function(s){return s.id===e});return a>-1?a-1:0},changeFocusedOptionIndex:function(e){var n=A(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=e>=n.length?n.length-1:e<0?0:e;a>-1&&(this.focusedOptionIndex=n[a].getAttribute("id"))},toggle:function(e,n){this.overlayVisible?this.hide():this.show(e,n)},show:function(e,n){this.overlayVisible=!0,this.target=n??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){ue(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&D.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&C(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&D.clear(e)},alignOverlay:function(){de(this.container,this.target);var e=E(this.target);e>E(this.container)&&(this.container.style.minWidth=E(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&a&&s?e.hide():!e.popup&&a&&s&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new le(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!re()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){oe.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return z({popup:this.popup})}},components:{PVMenuitem:ie,Portal:se}},Ze=["id","data-p"],qe=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Qe=["id"];function _e(t,e,n,a,s,i){var d=Z("PVMenuitem"),b=Z("Portal");return o(),y(b,{appendTo:t.appendTo,disabled:!t.popup},{default:S(function(){return[v(be,r({name:"p-anchored-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:S(function(){return[!t.popup||s.overlayVisible?(o(),u("div",r({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},t.ptmi("root")),[t.$slots.start?(o(),u("div",r({key:0,class:t.cx("start")},t.ptm("start")),[k(t.$slots,"start")],16)):h("",!0),L("ul",r({ref:i.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(o(!0),u(g,null,q(t.model,function(l,c){return o(),u(g,{key:i.label(l)+c.toString()},[l.items&&i.visible(l)&&!l.separator?(o(),u(g,{key:0},[l.items?(o(),u("li",r({key:0,id:t.$id+"_"+c,class:[t.cx("submenuLabel"),l.class],role:"none"},{ref_for:!0},t.ptm("submenuLabel")),[k(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[pe(X(i.label(l)),1)]})],16,Qe)):h("",!0),(o(!0),u(g,null,q(l.items,function(f,T){return o(),u(g,{key:f.label+c+"_"+T},[i.visible(f)&&!f.separator?(o(),y(d,{key:0,id:t.$id+"_"+c+"_"+T,item:f,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(f)&&f.separator?(o(),u("li",r({key:"separator"+c+T,class:[t.cx("separator"),l.class],style:f.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):h("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(o(),u("li",r({key:"separator"+c.toString(),class:[t.cx("separator"),l.class],style:l.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):(o(),y(d,{key:i.label(l)+c.toString(),id:t.$id+"_"+c,item:l,index:c,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,qe),t.$slots.end?(o(),u("div",r({key:1,class:t.cx("end")},t.ptm("end")),[k(t.$slots,"end")],16)):h("",!0)],16,Ze)):h("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ae.render=_e;var Ge={root:function(e){var n=e.instance,a=e.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":a.disabled}]}},Je=O.extend({name:"tab",classes:Ge}),Ye={name:"BaseTab",extends:x,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Je,provide:function(){return{$pcTab:this,$parentInstance:this}}},Xe={name:"Tab",extends:Ye,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()},onEndKey:function(e){var n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling;return a?V(a,"data-p-disabled")||V(a,"data-pc-section")==="activebar"?this.findNextTab(a):P(a,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling;return a?V(a,"data-p-disabled")||V(a,"data-pc-section")==="activebar"?this.findPrevTab(a):P(a,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,n){C(n),this.scrollInView(n)},scrollInView:function(e){var n;e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ee((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return z({active:this.active})}},directives:{ripple:H}};function et(t,e,n,a,s,i){var d=U("ripple");return t.asChild?k(t.$slots,"default",{key:1,dataP:i.dataP,class:j(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):B((o(),y(I(t.as),r({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:S(function(){return[k(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[d]])}Xe.render=et;var tt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},nt=O.extend({name:"tablist",classes:tt}),it={name:"BaseTabList",extends:x,props:{},style:nt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},at={name:"TabList",extends:it,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),a=N(e)-n,s=Math.abs(e.scrollLeft),i=a*.8,d=s-i,b=Math.max(d,0);e.scrollLeft=Q(e)?-1*b:b},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),a=N(e)-n,s=Math.abs(e.scrollLeft),i=a*.8,d=s+i,b=e.scrollWidth-a,l=Math.min(d,b);e.scrollLeft=Q(e)?-1*l:l},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,n=e.content,a=e.inkbar,s=e.tabs;if(a){var i=P(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(a.style.height=ve(i)+"px",a.style.top=K(i).top-K(s).top+"px"):(a.style.width=E(i)+"px",a.style.left=K(i).left-K(s).left+"px")}},updateButtonState:function(){var e=this.$refs,n=e.list,a=e.content,s=a.scrollTop,i=a.scrollWidth,d=a.scrollHeight,b=a.offsetWidth,l=a.offsetHeight,c=Math.abs(a.scrollLeft),f=[N(a),me(a)],T=f[0],$=f[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=n.offsetHeight>=l&&parseInt(s)!==d-$):(this.isPrevButtonEnabled=c!==0,this.isNextButtonEnabled=n.offsetWidth>=b&&parseInt(c)!==i-T)},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevButton,a=e.nextButton,s=0;return this.showNavigators&&(s=(n?.offsetWidth||0)+(a?.offsetWidth||0)),s}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return z({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:he,ChevronRightIcon:fe},directives:{ripple:H}},st=["data-p"],ot=["aria-label","tabindex"],rt=["data-p"],lt=["aria-orientation"],dt=["aria-label","tabindex"];function ut(t,e,n,a,s,i){var d=U("ripple");return o(),u("div",r({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&s.isPrevButtonEnabled?B((o(),u("button",r({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(o(),y(I(i.templates.previcon||"ChevronLeftIcon"),r({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,ot)),[[d]]):h("",!0),L("div",r({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[L("div",r({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[k(t.$slots,"default"),L("span",r({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,lt)],16,rt),i.showNavigators&&s.isNextButtonEnabled?B((o(),u("button",r({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(o(),y(I(i.templates.nexticon||"ChevronRightIcon"),r({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,dt)),[[d]]):h("",!0)],16,st)}at.render=ut;var ct={root:function(e){var n=e.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},bt=O.extend({name:"tabpanel",classes:ct}),pt={name:"BaseTabPanel",extends:x,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:bt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},ft={name:"TabPanel",extends:pt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var e;return ee((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var e;return{id:this.id,tabindex:(e=this.$pcTabs)===null||e===void 0?void 0:e.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ht(t,e,n,a,s,i){var d,b;return i.$pcTabs?(o(),u(g,{key:1},[t.asChild?k(t.$slots,"default",{key:1,class:j(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(o(),u(g,{key:0},[!((d=i.$pcTabs)!==null&&d!==void 0&&d.lazy)||i.active?B((o(),y(I(t.as),r({key:0,class:t.cx("root")},i.attrs),{default:S(function(){return[k(t.$slots,"default")]}),_:3},16,["class"])),[[ge,(b=i.$pcTabs)!==null&&b!==void 0&&b.lazy?!0:i.active]]):h("",!0)],64))],64)):k(t.$slots,"default",{key:0})}ft.render=ht;var mt={root:"p-tabpanels"},vt=O.extend({name:"tabpanels",classes:mt}),gt={name:"BaseTabPanels",extends:x,props:{},style:vt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},yt={name:"TabPanels",extends:gt,inheritAttrs:!1};function kt(t,e,n,a,s,i){return o(),u("div",r({class:t.cx("root"),role:"presentation"},t.ptmi("root")),[k(t.$slots,"default")],16)}yt.render=kt;var wt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Lt={root:function(e){var n=e.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},Tt=O.extend({name:"tabs",style:wt,classes:Lt}),xt={name:"BaseTabs",extends:x,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Tt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},It={name:"Tabs",extends:xt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Ot(t,e,n,a,s,i){return o(),u("div",r({class:t.cx("root")},t.ptmi("root")),[k(t.$slots,"default")],16)}It.render=Ot;const Y=W({__name:"NumberField",props:we({id:{},name:{},label:{},placeholder:{},error:{},rules:{},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},compare:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const e=t,n=ye(t,"modelValue"),a=ne("");function s(){n.value=parseFloat(a.value)||0}return te(n,i=>{a.value=i.toString()},{immediate:!0}),(i,d)=>(o(),y(ke,r(e,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=b=>a.value=b),"input-props":{...e.inputProps,type:"number"},onBlur:s}),null,16,["modelValue","input-props"]))}}),$t={class:"flex justify-end"},Ct={class:"flex flex-col gap-3 my-5"},At=W({__name:"PersonalSettings",setup(t){const e=$e(),n=Le(),a=Te(),{personalSettings:s,isFetchLoading:i,isMutationLoading:d}=_(a),{firebaseUser:b}=_(n),l=ne(!1),c=xe(f());function f(){return s.value?s.value.clone():Ie.create(b.value.uid)}async function T(){const $=b.value?.uid;if(!$)return;const p=c.clone();await a.updatePersonalSettings($,p),l.value=!1}return te(l,()=>{Object.assign(c,f())},{immediate:!0}),Oe(()=>{!s.value&&b.value&&a.fetchPersonalSettings(b.value.uid)}),($,p)=>(o(),u(g,null,[L("div",$t,[v(M,{class:"border-none h-fit",variant:"neutral",icon:"pi pi-cog",loading:w(i),onClick:p[0]||(p[0]=m=>l.value=!0)},null,8,["loading"])]),v(Se,{isOpen:l.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:w(d),onConfirm:T,onCancel:p[6]||(p[6]=m=>l.value=!1)},{default:S(()=>[L("div",Ct,[w(e).name===w(G).TASKS?(o(),u(g,{key:0},[v(Y,{class:"w-full md:w-1/2 place-self-center",name:"tasks.amountOfDaysToShow",label:"Aantal dagen om te tonen in je takenlijst:",modelValue:c.tasks.amountOfDaysToShow,"onUpdate:modelValue":p[1]||(p[1]=m=>c.tasks.amountOfDaysToShow=m)},null,8,["modelValue"]),v(R,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:c.tasks.showDifficulty,"onUpdate:modelValue":p[2]||(p[2]=m=>c.tasks.showDifficulty=m)},null,8,["modelValue"])],64)):w(e).name===w(G).PRODUCTS?(o(),u(g,{key:1},[v(Y,{class:"w-full md:w-1/2 place-self-center",name:"groceries.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:c.groceries.amountOfDaysToShow,"onUpdate:modelValue":p[3]||(p[3]=m=>c.groceries.amountOfDaysToShow=m)},null,8,["modelValue"]),v(R,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showPromotions",label:"Toon promoties",modelValue:c.groceries.showPromotions,"onUpdate:modelValue":p[4]||(p[4]=m=>c.groceries.showPromotions=m)},null,8,["modelValue"]),v(R,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showCategory",label:"Toon categorieën",modelValue:c.groceries.showCategory,"onUpdate:modelValue":p[5]||(p[5]=m=>c.groceries.showCategory=m)},null,8,["modelValue"])],64)):h("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}}),Pt={key:0,class:"flex gap-3"},Vt=W({__name:"CrudMenu",props:{itemId:{},isMutationLoading:{type:Boolean},editLabel:{},deleteLabel:{},hideDeleteOption:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(t){const n=Ce(Pe).greaterOrEqual("md"),a=Be("menuRef");return(s,i)=>w(n)?(o(),u("div",Pt,[v(M,{icon:"pi pi-cog","icon-only":"",variant:"neutral",loading:t.isMutationLoading,onClick:i[0]||(i[0]=d=>s.$emit("editClicked"))},null,8,["loading"]),t.hideDeleteOption?h("",!0):(o(),y(M,{key:0,icon:"pi pi-trash","icon-only":"",variant:"danger",loading:t.isMutationLoading,onClick:i[1]||(i[1]=d=>s.$emit("deleteClicked"))},null,8,["loading"]))])):(o(),u(g,{key:1},[v(M,{class:"!w-fit",icon:"pi pi-ellipsis-v","icon-only":"",text:"",variant:"neutral",onClick:a.value?.toggle},null,8,["onClick"]),v(w(ae),{ref_key:"menuRef",ref:a,id:`menu-${t.itemId}`,popup:!0,model:[{label:t.editLabel??"Bewerken",icon:"pi pi-cog",disabled:t.isMutationLoading,command:()=>{s.$emit("editClicked")}},{label:t.deleteLabel??"Verwijderen",class:"text-red-500",icon:"pi pi-trash",disabled:t.isMutationLoading,visible:!t.hideDeleteOption,command:()=>{s.$emit("deleteClicked")}}]},null,8,["id","model"])],64))}});export{Y as _,Vt as a,at as b,Xe as c,yt as d,ft as e,At as f,ae as g,It as s};
