import{A as e,Br as t,Dr as n,Er as r,F as i,I as a,Ii as o,Kr as s,Or as c,Qr as l,S as u,Sr as d,Tr as f,V as p,Y as m,Yr as h,Zr as g,_t as _,ai as v,at as y,c as b,i as x,l as S,oi as C,ot as w,rt as T,yr as E,z as D}from"./c-button-DbxlWo-7.js";import{n as O}from"./c-chevrondown-TPakQoIZ.js";import{l as k}from"../bundle.js";var A=S.extend({name:`tab`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}}}),j={name:`Tab`,extends:{name:`BaseTab`,extends:b,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:A,provide:function(){return{$pcTab:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?i(t,`data-p-disabled`)||i(t,`data-pc-section`)===`activebar`?this.findNextTab(t):y(t,`[data-pc-name="tab"]`):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?i(t,`data-p-disabled`)||i(t,`data-pc-section`)===`activebar`?this.findPrevTab(t):y(t,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){m(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){return _(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},ariaControls:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},attrs:function(){return t(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return w({active:this.active})}},directives:{ripple:x}};function M(e,n,i,a,c,u){var d=g(`ripple`);return e.asChild?h(e.$slots,`default`,{key:1,dataP:u.dataP,class:o(e.cx(`root`)),active:u.active,a11yAttrs:u.a11yAttrs,onClick:u.onClick}):C((s(),r(l(e.as),t({key:0,class:e.cx(`root`),"data-p":u.dataP,onClick:u.onClick},u.attrs),{default:v(function(){return[h(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[d]])}j.render=M;var N={name:`TabList`,extends:{name:`BaseTabList`,extends:b,props:{},style:S.extend({name:`tablist`,classes:{root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`}}),provide:function(){return{$pcTabList:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=a(e)-t,r=Math.abs(e.scrollLeft)-n*.8,i=Math.max(r,0);e.scrollLeft=p(e)?-1*i:i},onNextButtonClick:function(){var e=this.$refs.content,t=this.getVisibleButtonWidths(),n=a(e)-t,r=Math.abs(e.scrollLeft)+n*.8,i=e.scrollWidth-n,o=Math.min(r,i);e.scrollLeft=p(e)?-1*o:o},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,r=t.inkbar,i=t.tabs;if(r){var a=y(n,`[data-pc-name="tab"][data-p-active="true"]`);this.$pcTabs.isVertical()?(r.style.height=u(a)+`px`,r.style.top=e(a).top-e(i).top+`px`):(r.style.width=T(a)+`px`,r.style.left=e(a).left-e(i).left+`px`)}},updateButtonState:function(){var e=this.$refs,t=e.list,n=e.content,r=n.scrollTop,i=n.scrollWidth,o=n.scrollHeight,s=n.offsetWidth,c=n.offsetHeight,l=Math.abs(n.scrollLeft),u=[a(n),D(n)],d=u[0],f=u[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=t.offsetHeight>=c&&parseInt(r)!==o-f):(this.isPrevButtonEnabled=l!==0,this.isNextButtonEnabled=t.offsetWidth>=s&&parseInt(l)!==i-d)},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return w({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:k,ChevronRightIcon:O},directives:{ripple:x}},P=[`data-p`],F=[`aria-label`,`tabindex`],I=[`data-p`],L=[`aria-orientation`],R=[`aria-label`,`tabindex`];function z(e,i,a,o,u,d){var p=g(`ripple`);return s(),c(`div`,t({ref:`list`,class:e.cx(`root`),"data-p":d.dataP},e.ptmi(`root`)),[d.showNavigators&&u.isPrevButtonEnabled?C((s(),c(`button`,t({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":d.prevButtonAriaLabel,tabindex:d.$pcTabs.tabindex,onClick:i[0]||=function(){return d.onPrevButtonClick&&d.onPrevButtonClick.apply(d,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(s(),r(l(d.templates.previcon||`ChevronLeftIcon`),t({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,F)),[[p]]):n(``,!0),f(`div`,t({ref:`content`,class:e.cx(`content`),onScroll:i[1]||=function(){return d.onScroll&&d.onScroll.apply(d,arguments)},"data-p":d.dataP},e.ptm(`content`)),[f(`div`,t({ref:`tabs`,class:e.cx(`tabList`),role:`tablist`,"aria-orientation":d.$pcTabs.orientation||`horizontal`},e.ptm(`tabList`)),[h(e.$slots,`default`),f(`span`,t({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16,L)],16,I),d.showNavigators&&u.isNextButtonEnabled?C((s(),c(`button`,t({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":d.nextButtonAriaLabel,tabindex:d.$pcTabs.tabindex,onClick:i[2]||=function(){return d.onNextButtonClick&&d.onNextButtonClick.apply(d,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(s(),r(l(d.templates.nexticon||`ChevronRightIcon`),t({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,R)),[[p]]):n(``,!0)],16,P)}N.render=z;var B=S.extend({name:`tabpanel`,classes:{root:function(e){var t=e.instance;return[`p-tabpanel`,{"p-tabpanel-active":t.active}]}}}),V={name:`TabPanel`,extends:{name:`BaseTabPanel`,extends:b,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:B,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],computed:{active:function(){return _(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},ariaLabelledby:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},attrs:function(){return t(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcTabs?.tabindex,role:`tabpanel`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`tabpanel`,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function H(e,i,a,u,f,p){var m,g;return p.$pcTabs?(s(),c(d,{key:1},[e.asChild?h(e.$slots,`default`,{key:1,class:o(e.cx(`root`)),active:p.active,a11yAttrs:p.a11yAttrs}):(s(),c(d,{key:0},[!((m=p.$pcTabs)!=null&&m.lazy)||p.active?C((s(),r(l(e.as),t({key:0,class:e.cx(`root`)},p.attrs),{default:v(function(){return[h(e.$slots,`default`)]}),_:3},16,[`class`])),[[E,(g=p.$pcTabs)!=null&&g.lazy?!0:p.active]]):n(``,!0)],64))],64)):h(e.$slots,`default`,{key:0})}V.render=H;var U={name:`TabPanels`,extends:{name:`BaseTabPanels`,extends:b,props:{},style:S.extend({name:`tabpanels`,classes:{root:`p-tabpanels`}}),provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},inheritAttrs:!1};function W(e,n,r,i,a,o){return s(),c(`div`,t({class:e.cx(`root`),role:`presentation`},e.ptmi(`root`)),[h(e.$slots,`default`)],16)}U.render=W;var G=S.extend({name:`tabs`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-tabs p-component`,{"p-tabs-scrollable":t.scrollable}]}}}),K={name:`Tabs`,extends:{name:`BaseTabs`,extends:b,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:G,provide:function(){return{$pcTabs:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},isVertical:function(){return this.orientation===`vertical`}}};function q(e,n,r,i,a,o){return s(),c(`div`,t({class:e.cx(`root`)},e.ptmi(`root`)),[h(e.$slots,`default`)],16)}K.render=q;export{j as a,N as i,U as n,V as r,K as t};