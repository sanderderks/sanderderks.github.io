import{u as R,b as V,a as H}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di6IGPJM.js";import{ao as N,au as U,av as Z,ap as T,aU as D,cj as j,ck as W,cl as q,cm as Y,ci as L,ay as I,cn as J,az as v,aE as y,aF as x,aq as l,co as G,aI as Q,b as a,c as r,e as C,ak as X,g as b,n as _,aJ as M,B as c,t as z,x as P,w as E,h as g,aK as $,r as O,F as f,C as S,j as ee,d as te,f as A,M as ne}from"../bundle.js";import{_ as ie}from"./c-DeleteButton.vue_vue_type_script_setup_true_lang-CbnfcVsY.js";import{_ as se}from"./c-EditButton.vue_vue_type_script_setup_true_lang-B8DJ-ze0.js";var ae=`
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
`,oe={root:function(t){var n=t.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var n=t.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},re=N.extend({name:"menu",style:ae,classes:oe}),le={name:"BaseMenu",extends:T,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:re,provide:function(){return{$pcMenu:this,$parentInstance:this}}},F={name:"Menuitem",hostName:"Menu",extends:T,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,n){return t&&t.item?G(t.item[n]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:l({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:l({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return D({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:Z}},de=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],ue=["data-p"],ce=["href","target"],me=["data-p"],pe=["data-p"];function fe(e,t,n,s,d,i){var p=Q("ripple");return i.visible()?(a(),r("li",l({key:0,id:n.id,class:[e.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[C("div",l({class:e.cx("itemContent"),onClick:t[0]||(t[0]=function(h){return i.onItemClick(h)}),onMousemove:t[1]||(t[1]=function(h){return i.onItemMouseMove(h)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(a(),b(M(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):c("",!0):X((a(),r("a",l({key:0,href:n.item.url,class:e.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(a(),b(M(n.templates.itemicon),{key:0,item:n.item,class:_(e.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(a(),r("span",l({key:1,class:[e.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,me)):c("",!0),C("span",l({class:e.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),z(i.label()),17,pe)],16,ce)),[[p]])],16,ue)],16,de)):c("",!0)}F.render=fe;function K(e){return ye(e)||ve(e)||he(e)||be()}function be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(e,t){if(e){if(typeof e=="string")return w(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function ve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ye(e){if(Array.isArray(e))return w(e)}function w(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}var B={name:"Menu",extends:le,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&I.clear(this.container),this.container=null},methods:{itemClick:function(t){var n=t.item;this.disabled(n)||(n.command&&n.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(v(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)v(this.target),this.hide(),t.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var n=x(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&x(n,'a[data-pc-section="itemlink"]');this.popup&&v(this.target),s?s.click():n&&n.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=K(n).findIndex(function(d){return d.id===t});return s>-1?s+1:0},findPrevOptionIndex:function(t){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=K(n).findIndex(function(d){return d.id===t});return s>-1?s-1:0},changeFocusedOptionIndex:function(t){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=t>=n.length?n.length-1:t<0?0:t;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(t,n){this.overlayVisible?this.hide():this.show(t,n)},show:function(t,n){this.overlayVisible=!0,this.target=n??t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){J(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&I.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&v(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&I.clear(t)},alignOverlay:function(){Y(this.container,this.target);var t=L(this.target);t>L(this.container)&&(this.container.style.minWidth=L(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=t.container&&!t.container.contains(n.target),d=!(t.target&&(t.target===n.target||t.target.contains(n.target)));t.overlayVisible&&s&&d?t.hide():!t.popup&&s&&d&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new q(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!W()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){j.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return D({popup:this.popup})}},components:{PVMenuitem:F,Portal:U}},ge=["id","data-p"],ke=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Le=["id"];function Ie(e,t,n,s,d,i){var p=P("PVMenuitem"),h=P("Portal");return a(),b(h,{appendTo:e.appendTo,disabled:!e.popup},{default:E(function(){return[g($,l({name:"p-anchored-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},e.ptm("transition")),{default:E(function(){return[!e.popup||d.overlayVisible?(a(),r("div",l({key:0,ref:i.containerRef,id:e.$id,class:e.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},e.ptmi("root")),[e.$slots.start?(a(),r("div",l({key:0,class:e.cx("start")},e.ptm("start")),[O(e.$slots,"start")],16)):c("",!0),C("ul",l({ref:i.listRef,id:e.$id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":d.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},e.ptm("list")),[(a(!0),r(f,null,S(e.model,function(o,u){return a(),r(f,{key:i.label(o)+u.toString()},[o.items&&i.visible(o)&&!o.separator?(a(),r(f,{key:0},[o.items?(a(),r("li",l({key:0,id:e.$id+"_"+u,class:[e.cx("submenuLabel"),o.class],role:"none"},{ref_for:!0},e.ptm("submenuLabel")),[O(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:o},function(){return[ee(z(i.label(o)),1)]})],16,Le)):c("",!0),(a(!0),r(f,null,S(o.items,function(m,k){return a(),r(f,{key:m.label+u+"_"+k},[i.visible(m)&&!m.separator?(a(),b(p,{key:0,id:e.$id+"_"+u+"_"+k,item:m,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(a(),r("li",l({key:"separator"+u+k,class:[e.cx("separator"),o.class],style:m.style,role:"separator"},{ref_for:!0},e.ptm("separator")),null,16)):c("",!0)],64)}),128))],64)):i.visible(o)&&o.separator?(a(),r("li",l({key:"separator"+u.toString(),class:[e.cx("separator"),o.class],style:o.style,role:"separator"},{ref_for:!0},e.ptm("separator")),null,16)):(a(),b(p,{key:i.label(o)+u.toString(),id:e.$id+"_"+u,item:o,index:u,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ke),e.$slots.end?(a(),r("div",l({key:1,class:e.cx("end")},e.ptm("end")),[O(e.$slots,"end")],16)):c("",!0)],16,ge)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}B.render=Ie;const Oe={key:0,class:"flex gap-3"},Pe=te({__name:"CrudMenu",props:{itemId:{},isMutationLoading:{type:Boolean},editLabel:{},deleteLabel:{},hideDeleteOption:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(e){const n=R(V).greaterOrEqual("md"),s=ne("menuRef");return(d,i)=>A(n)?(a(),r("div",Oe,[g(se,{"is-loading":e.isMutationLoading,onClick:i[0]||(i[0]=p=>d.$emit("editClicked"))},null,8,["is-loading"]),e.hideDeleteOption?c("",!0):(a(),b(ie,{key:0,"is-loading":e.isMutationLoading,onClick:i[1]||(i[1]=p=>d.$emit("deleteClicked"))},null,8,["is-loading"]))])):(a(),r(f,{key:1},[g(H,{class:"!w-fit",icon:"pi pi-ellipsis-v","icon-only":"",text:"",variant:"neutral",onClick:s.value?.toggle},null,8,["onClick"]),g(A(B),{ref_key:"menuRef",ref:s,id:`menu-${e.itemId}`,popup:!0,model:[{label:e.editLabel??"Bewerken",icon:"pi pi-cog",disabled:e.isMutationLoading,command:()=>{d.$emit("editClicked")}},{label:e.deleteLabel??"Verwijderen",class:"text-red-500",icon:"pi pi-trash",disabled:e.isMutationLoading,visible:!e.hideDeleteOption,command:()=>{d.$emit("deleteClicked")}}]},null,8,["id","model"])],64))}});export{Pe as _,B as s};
