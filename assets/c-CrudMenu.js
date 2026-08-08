import{A as e,Br as t,D as n,Dr as r,Hr as i,Jr as a,Mr as o,Ni as s,O as c,Oi as l,Qr as u,R as d,Rr as f,S as p,St as m,Tr as h,Tt as g,U as _,Ur as v,Vr as y,Wr as b,Zr as x,a as ee,b as S,br as C,d as w,dt as T,gr as E,ht as D,i as O,rt as te,si as k,ur as ne,ut as A,vr as j,wr as M,wt as N,xr as P,yr as F}from"../bundle.js";import{i as I}from"./c-card.js";import{t as L}from"./c-EditButton.js";import{n as R,t as z}from"./c-core.js";var B=c.extend({name:`menu`,style:`
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
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),V={name:`BaseMenu`,extends:n,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:B,provide:function(){return{$pcMenu:this,$parentInstance:this}}},H={name:`Menuitem`,hostName:`Menu`,extends:n,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?d(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:o({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:o({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:o({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return g({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:p}},U=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],W=[`data-p`],G=[`href`,`target`],K=[`data-p`],q=[`data-p`];function J(e,t,n,r,i,a){var c=v(`ripple`);return a.visible()?(f(),P(`li`,o({key:0,id:n.id,class:[e.cx(`item`),n.item.class],role:`menuitem`,style:n.item.style,"aria-label":a.label(),"aria-disabled":a.disabled(),"data-p-focused":a.isItemFocused(),"data-p-disabled":a.disabled()||!1,"data-p":a.dataP},a.getPTOptions(`item`)),[j(`div`,o({class:e.cx(`itemContent`),onClick:t[0]||=function(e){return a.onItemClick(e)},onMousemove:t[1]||=function(e){return a.onItemMouseMove(e)},"data-p":a.dataP},a.getPTOptions(`itemContent`)),[n.templates.item?n.templates.item?(f(),F(b(n.templates.item),{key:1,item:n.item,label:a.label(),props:a.getMenuItemProps(n.item)},null,8,[`item`,`label`,`props`])):C(``,!0):u((f(),P(`a`,o({key:0,href:n.item.url,class:e.cx(`itemLink`),target:n.item.target,tabindex:`-1`},a.getPTOptions(`itemLink`)),[n.templates.itemicon?(f(),F(b(n.templates.itemicon),{key:0,item:n.item,class:l(e.cx(`itemIcon`))},null,8,[`item`,`class`])):n.item.icon?(f(),P(`span`,o({key:1,class:[e.cx(`itemIcon`),n.item.icon],"data-p":a.dataP},a.getPTOptions(`itemIcon`)),null,16,K)):C(``,!0),j(`span`,o({class:e.cx(`itemLabel`),"data-p":a.dataP},a.getPTOptions(`itemLabel`)),s(a.label()),17,q)],16,G)),[[c]])],16,W)],16,U)):C(``,!0)}H.render=J;function Y(e){return ae(e)||ie(e)||re(e)||X()}function X(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function ie(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ae(e){if(Array.isArray(e))return Z(e)}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q={name:`Menu`,extends:V,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&e.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(D(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)D(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(A(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(e){var t=N(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&N(t,`a[data-pc-section="itemlink"]`);this.popup&&D(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=Y(A(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=Y(A(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=A(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){te(t,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&e.set(`menu`,t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&D(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(t){this.autoZIndex&&e.clear(t)},alignOverlay:function(){_(this.container,this.target),m(this.target)>m(this.container)&&(this.container.style.minWidth=m(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new w(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!T()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){ee.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return g({popup:this.popup})}},components:{PVMenuitem:H,Portal:O}},oe=[`id`,`data-p`],$=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],se=[`id`];function ce(e,n,r,a,c,l){var u=i(`PVMenuitem`),d=i(`Portal`);return f(),F(d,{appendTo:e.appendTo,disabled:!e.popup},{default:x(function(){return[h(ne,o({name:`p-anchored-overlay`,onEnter:l.onEnter,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave},e.ptm(`transition`)),{default:x(function(){return[!e.popup||c.overlayVisible?(f(),P(`div`,o({key:0,ref:l.containerRef,id:e.$id,class:e.cx(`root`),onClick:n[3]||=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)},"data-p":l.dataP},e.ptmi(`root`)),[e.$slots.start?(f(),P(`div`,o({key:0,class:e.cx(`start`)},e.ptm(`start`)),[y(e.$slots,`start`)],16)):C(``,!0),j(`ul`,o({ref:l.listRef,id:e.$id+`_list`,class:e.cx(`list`),role:`menu`,tabindex:e.tabindex,"aria-activedescendant":c.focused?l.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||=function(){return l.onListFocus&&l.onListFocus.apply(l,arguments)},onBlur:n[1]||=function(){return l.onListBlur&&l.onListBlur.apply(l,arguments)},onKeydown:n[2]||=function(){return l.onListKeyDown&&l.onListKeyDown.apply(l,arguments)}},e.ptm(`list`)),[(f(!0),P(E,null,t(e.model,function(n,r){return f(),P(E,{key:l.label(n)+r.toString()},[n.items&&l.visible(n)&&!n.separator?(f(),P(E,{key:0},[n.items?(f(),P(`li`,o({key:0,id:e.$id+`_`+r,class:[e.cx(`submenuLabel`),n.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[y(e.$slots,e.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:n},function(){return[M(s(l.label(n)),1)]})],16,se)):C(``,!0),(f(!0),P(E,null,t(n.items,function(t,i){return f(),P(E,{key:t.label+r+`_`+i},[l.visible(t)&&!t.separator?(f(),F(u,{key:0,id:e.$id+`_`+r+`_`+i,item:t,templates:e.$slots,focusedOptionId:l.focusedOptionId,unstyled:e.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):l.visible(t)&&t.separator?(f(),P(`li`,o({key:`separator`+r+i,class:[e.cx(`separator`),n.class],style:t.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):C(``,!0)],64)}),128))],64)):l.visible(n)&&n.separator?(f(),P(`li`,o({key:`separator`+r.toString(),class:[e.cx(`separator`),n.class],style:n.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):(f(),F(u,{key:l.label(n)+r.toString(),id:e.$id+`_`+r,item:n,index:r,templates:e.$slots,focusedOptionId:l.focusedOptionId,unstyled:e.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,$),e.$slots.end?(f(),P(`div`,o({key:1,class:e.cx(`end`)},e.ptm(`end`)),[y(e.$slots,`end`)],16)):C(``,!0)],16,oe)):C(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}Q.render=ce;var le={key:0,class:`flex gap-3 justify-end`},ue=r({__name:`CrudMenu`,props:{itemId:{},isMutationLoading:{type:Boolean},editLabel:{},deleteLabel:{},hideDeleteOption:{type:Boolean},additionalMenuOptions:{}},emits:[`editClicked`,`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=R(z).greaterOrEqual(`md`),o=a(`menuRef`);function s(e){n.additionalMenuOptions?.length?o.value?.toggle(e):r(`editClicked`)}return(t,n)=>(f(),P(E,null,[k(i)?(f(),P(`div`,le,[h(L,{"is-loading":e.isMutationLoading,onClick:s},null,8,[`is-loading`]),e.hideDeleteOption?C(``,!0):(f(),F(I,{key:0,"is-loading":e.isMutationLoading,onClick:n[0]||=e=>t.$emit(`deleteClicked`)},null,8,[`is-loading`]))])):(f(),F(S,{key:1,class:`!w-fit`,icon:`pi pi-ellipsis-v`,"icon-only":``,text:``,severity:`secondary`,onClick:o.value?.toggle},null,8,[`onClick`])),h(k(Q),{ref_key:`menuRef`,ref:o,id:`menu-${e.itemId}`,popup:!0,model:[{label:e.editLabel??`Bewerken`,icon:`pi pi-cog`,disabled:e.isMutationLoading,command:()=>{t.$emit(`editClicked`)}},...e.additionalMenuOptions??[],{label:e.deleteLabel??`Verwijderen`,class:`text-red-500`,icon:`pi pi-trash`,disabled:e.isMutationLoading,visible:!e.hideDeleteOption&&!k(i),command:()=>{t.$emit(`deleteClicked`)}}]},null,8,[`id`,`model`])],64))}});export{ue as t};