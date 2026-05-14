import{A as e,Br as t,Cr as n,D as r,Ir as i,Jr as a,Lr as o,Or as s,Pr as c,Q as l,Rr as u,S as d,Sr as f,W as p,Wr as m,Z as h,_r as g,bt as ee,dt as _,fr as v,ft as y,gr as b,h as te,hr as x,i as S,ki as C,lt as w,mr as T,nt as E,o as D,or as ne,qr as O,ri as k,s as A,wi as j,x as M,xr as N,zr as P}from"../bundle.js";import{c as F,i as I,r as L,s as R}from"./c-Bubble-D2WU2646.js";import{t as z}from"./c-EditButton-DmBKsQ43.js";var B=d.extend({name:`menu`,style:`
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
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),V={name:`BaseMenu`,extends:M,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:B,provide:function(){return{$pcMenu:this,$parentInstance:this}}},H={name:`Menuitem`,hostName:`Menu`,extends:M,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?ee(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:s({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:s({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:s({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return y({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:S}},U=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],W=[`data-p`],G=[`href`,`target`],K=[`data-p`],q=[`data-p`];function J(e,n,r,i,o,l){var u=P(`ripple`);return l.visible()?(c(),g(`li`,s({key:0,id:r.id,class:[e.cx(`item`),r.item.class],role:`menuitem`,style:r.item.style,"aria-label":l.label(),"aria-disabled":l.disabled(),"data-p-focused":l.isItemFocused(),"data-p-disabled":l.disabled()||!1,"data-p":l.dataP},l.getPTOptions(`item`)),[T(`div`,s({class:e.cx(`itemContent`),onClick:n[0]||=function(e){return l.onItemClick(e)},onMousemove:n[1]||=function(e){return l.onItemMouseMove(e)},"data-p":l.dataP},l.getPTOptions(`itemContent`)),[r.templates.item?r.templates.item?(c(),x(t(r.templates.item),{key:1,item:r.item,label:l.label(),props:l.getMenuItemProps(r.item)},null,8,[`item`,`label`,`props`])):b(``,!0):a((c(),g(`a`,s({key:0,href:r.item.url,class:e.cx(`itemLink`),target:r.item.target,tabindex:`-1`},l.getPTOptions(`itemLink`)),[r.templates.itemicon?(c(),x(t(r.templates.itemicon),{key:0,item:r.item,class:j(e.cx(`itemIcon`))},null,8,[`item`,`class`])):r.item.icon?(c(),g(`span`,s({key:1,class:[e.cx(`itemIcon`),r.item.icon],"data-p":l.dataP},l.getPTOptions(`itemIcon`)),null,16,K)):b(``,!0),T(`span`,s({class:e.cx(`itemLabel`),"data-p":l.dataP},l.getPTOptions(`itemLabel`)),C(l.label()),17,q)],16,G)),[[u]])],16,W)],16,U)):b(``,!0)}H.render=J;function Y(e){return ae(e)||ie(e)||re(e)||X()}function X(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function ie(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ae(e){if(Array.isArray(e))return Z(e)}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q={name:`Menu`,extends:V,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&r.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(E(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)E(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(h(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(e){var t=_(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&_(t,`a[data-pc-section="itemlink"]`);this.popup&&E(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=Y(h(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=Y(h(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=h(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){p(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&r.set(`menu`,e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&E(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&r.clear(e)},alignOverlay:function(){e(this.container,this.target),w(this.target)>w(this.container)&&(this.container.style.minWidth=w(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new te(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!l()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){A.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return y({popup:this.popup})}},components:{PVMenuitem:H,Portal:D}},oe=[`id`,`data-p`],$=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],se=[`id`];function ce(e,t,n,r,a,l){var d=u(`PVMenuitem`),p=u(`Portal`);return c(),x(p,{appendTo:e.appendTo,disabled:!e.popup},{default:O(function(){return[f(ne,s({name:`p-anchored-overlay`,onEnter:l.onEnter,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave},e.ptm(`transition`)),{default:O(function(){return[!e.popup||a.overlayVisible?(c(),g(`div`,s({key:0,ref:l.containerRef,id:e.$id,class:e.cx(`root`),onClick:t[3]||=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)},"data-p":l.dataP},e.ptmi(`root`)),[e.$slots.start?(c(),g(`div`,s({key:0,class:e.cx(`start`)},e.ptm(`start`)),[o(e.$slots,`start`)],16)):b(``,!0),T(`ul`,s({ref:l.listRef,id:e.$id+`_list`,class:e.cx(`list`),role:`menu`,tabindex:e.tabindex,"aria-activedescendant":a.focused?l.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||=function(){return l.onListFocus&&l.onListFocus.apply(l,arguments)},onBlur:t[1]||=function(){return l.onListBlur&&l.onListBlur.apply(l,arguments)},onKeydown:t[2]||=function(){return l.onListKeyDown&&l.onListKeyDown.apply(l,arguments)}},e.ptm(`list`)),[(c(!0),g(v,null,i(e.model,function(t,n){return c(),g(v,{key:l.label(t)+n.toString()},[t.items&&l.visible(t)&&!t.separator?(c(),g(v,{key:0},[t.items?(c(),g(`li`,s({key:0,id:e.$id+`_`+n,class:[e.cx(`submenuLabel`),t.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[o(e.$slots,e.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:t},function(){return[N(C(l.label(t)),1)]})],16,se)):b(``,!0),(c(!0),g(v,null,i(t.items,function(r,i){return c(),g(v,{key:r.label+n+`_`+i},[l.visible(r)&&!r.separator?(c(),x(d,{key:0,id:e.$id+`_`+n+`_`+i,item:r,templates:e.$slots,focusedOptionId:l.focusedOptionId,unstyled:e.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):l.visible(r)&&r.separator?(c(),g(`li`,s({key:`separator`+n+i,class:[e.cx(`separator`),t.class],style:r.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):b(``,!0)],64)}),128))],64)):l.visible(t)&&t.separator?(c(),g(`li`,s({key:`separator`+n.toString(),class:[e.cx(`separator`),t.class],style:t.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):(c(),x(d,{key:l.label(t)+n.toString(),id:e.$id+`_`+n,item:t,index:n,templates:e.$slots,focusedOptionId:l.focusedOptionId,unstyled:e.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,$),e.$slots.end?(c(),g(`div`,s({key:1,class:e.cx(`end`)},e.ptm(`end`)),[o(e.$slots,`end`)],16)):b(``,!0)],16,oe)):b(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}Q.render=ce;var le={key:0,class:`flex gap-3 justify-end`},ue=n({__name:`CrudMenu`,props:{itemId:{},isMutationLoading:{type:Boolean},editLabel:{},deleteLabel:{},hideDeleteOption:{type:Boolean},additionalMenuOptions:{}},emits:[`editClicked`,`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=I(L).greaterOrEqual(`md`),a=m(`menuRef`);function o(e){n.additionalMenuOptions?.length?a.value?.toggle(e):r(`editClicked`)}return(t,n)=>(c(),g(v,null,[k(i)?(c(),g(`div`,le,[f(z,{"is-loading":e.isMutationLoading,onClick:o},null,8,[`is-loading`]),e.hideDeleteOption?b(``,!0):(c(),x(R,{key:0,"is-loading":e.isMutationLoading,onClick:n[0]||=e=>t.$emit(`deleteClicked`)},null,8,[`is-loading`]))])):(c(),x(F,{key:1,class:`!w-fit`,icon:`pi pi-ellipsis-v`,"icon-only":``,text:``,variant:`neutral`,onClick:a.value?.toggle},null,8,[`onClick`])),f(k(Q),{ref_key:`menuRef`,ref:a,id:`menu-${e.itemId}`,popup:!0,model:[{label:e.editLabel??`Bewerken`,icon:`pi pi-cog`,disabled:e.isMutationLoading,command:()=>{t.$emit(`editClicked`)}},...e.additionalMenuOptions??[],{label:e.deleteLabel??`Verwijderen`,class:`text-red-500`,icon:`pi pi-trash`,disabled:e.isMutationLoading,visible:!e.hideDeleteOption&&!k(i),command:()=>{t.$emit(`deleteClicked`)}}]},null,8,[`id`,`model`])],64))}});export{ue as t};