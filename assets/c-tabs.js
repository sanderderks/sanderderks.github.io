import{H as e,J as t,K as n,L as r,Mr as i,Oi as a,Qr as o,Rr as s,S as c,U as l,Ur as u,Vr as d,Wr as f,Zr as p,br as m,dt as h,ft as g,gr as _,i as v,k as y,lt as b,nt as x,pr as S,vr as C,vt as w,x as T,xr as E,yr as D}from"../bundle.js";import{t as O}from"./c-chevronright.js";import{t as k}from"./c-chevronleft.js";var A=c.extend({name:`tab`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-tab`,{"p-tab-active":t.active,"p-disabled":n.disabled}]}}}),j={name:`Tab`,extends:{name:`BaseTab`,extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:A,provide:function(){return{$pcTab:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`,`$pcTabList`],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowRight`:this.onArrowRightKey(e);break;case`ArrowLeft`:this.onArrowLeftKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?t:t.nextElementSibling;return n?e(n,`data-p-disabled`)||e(n,`data-pc-section`)===`activebar`?this.findNextTab(n):h(n,`[data-pc-name="tab"]`):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?t:t.previousElementSibling;return n?e(n,`data-p-disabled`)||e(n,`data-pc-section`)===`activebar`?this.findPrevTab(n):h(n,`[data-pc-name="tab"]`):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){x(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)==null||t.call(e,{block:`nearest`})}},computed:{active:function(){return w(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},ariaControls:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},attrs:function(){return i(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:`tab`,"aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":`tab`,"data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return g({active:this.active})}},directives:{ripple:v}};function M(e,t,n,r,c,l){var m=u(`ripple`);return e.asChild?d(e.$slots,`default`,{key:1,dataP:l.dataP,class:a(e.cx(`root`)),active:l.active,a11yAttrs:l.a11yAttrs,onClick:l.onClick}):o((s(),D(f(e.as),i({key:0,class:e.cx(`root`),"data-p":l.dataP,onClick:l.onClick},l.attrs),{default:p(function(){return[d(e.$slots,`default`)]}),_:3},16,[`class`,`data-p`,`onClick`])),[[m]])}j.render=M;var N={name:`TabList`,extends:{name:`BaseTabList`,extends:T,props:{},style:c.extend({name:`tablist`,classes:{root:`p-tablist`,content:`p-tablist-content p-tablist-viewport`,tabList:`p-tablist-tab-list`,activeBar:`p-tablist-active-bar`,prevButton:`p-tablist-prev-button p-tablist-nav-button`,nextButton:`p-tablist-next-button p-tablist-nav-button`}}),provide:function(){return{$pcTabList:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:`post`,handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),r=l(e)-n,i=Math.abs(e.scrollLeft)-r*.8,a=Math.max(i,0);e.scrollLeft=t(e)?-1*a:a},onNextButtonClick:function(){var e=this.$refs.content,n=this.getVisibleButtonWidths(),r=l(e)-n,i=Math.abs(e.scrollLeft)+r*.8,a=e.scrollWidth-r,o=Math.min(i,a);e.scrollLeft=t(e)?-1*o:o},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)==null||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,n=e.inkbar,i=e.tabs;if(n){var a=h(t,`[data-pc-name="tab"][data-p-active="true"]`);this.$pcTabs.isVertical()?(n.style.height=y(a)+`px`,n.style.top=r(a).top-r(i).top+`px`):(n.style.width=b(a)+`px`,n.style.left=r(a).left-r(i).left+`px`)}},updateButtonState:function(){var e=this.$refs,t=e.list,r=e.content,i=r.scrollTop,a=r.scrollWidth,o=r.scrollHeight,s=r.offsetWidth,c=r.offsetHeight,u=Math.abs(r.scrollLeft),d=[l(r),n(r)],f=d[0],p=d[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=t.offsetHeight>=c&&parseInt(i)!==o-p):(this.isPrevButtonEnabled=u!==0,this.isNextButtonEnabled=t.offsetWidth>=s&&parseInt(u)!==a-f)},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevButton,n=e.nextButton,r=0;return this.showNavigators&&(r=(t?.offsetWidth||0)+(n?.offsetWidth||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return g({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:k,ChevronRightIcon:O},directives:{ripple:v}},P=[`data-p`],F=[`aria-label`,`tabindex`],I=[`data-p`],L=[`aria-orientation`],R=[`aria-label`,`tabindex`];function z(e,t,n,r,a,c){var l=u(`ripple`);return s(),E(`div`,i({ref:`list`,class:e.cx(`root`),"data-p":c.dataP},e.ptmi(`root`)),[c.showNavigators&&a.isPrevButtonEnabled?o((s(),E(`button`,i({key:0,ref:`prevButton`,type:`button`,class:e.cx(`prevButton`),"aria-label":c.prevButtonAriaLabel,tabindex:c.$pcTabs.tabindex,onClick:t[0]||=function(){return c.onPrevButtonClick&&c.onPrevButtonClick.apply(c,arguments)}},e.ptm(`prevButton`),{"data-pc-group-section":`navigator`}),[(s(),D(f(c.templates.previcon||`ChevronLeftIcon`),i({"aria-hidden":`true`},e.ptm(`prevIcon`)),null,16))],16,F)),[[l]]):m(``,!0),C(`div`,i({ref:`content`,class:e.cx(`content`),onScroll:t[1]||=function(){return c.onScroll&&c.onScroll.apply(c,arguments)},"data-p":c.dataP},e.ptm(`content`)),[C(`div`,i({ref:`tabs`,class:e.cx(`tabList`),role:`tablist`,"aria-orientation":c.$pcTabs.orientation||`horizontal`},e.ptm(`tabList`)),[d(e.$slots,`default`),C(`span`,i({ref:`inkbar`,class:e.cx(`activeBar`),role:`presentation`,"aria-hidden":`true`},e.ptm(`activeBar`)),null,16)],16,L)],16,I),c.showNavigators&&a.isNextButtonEnabled?o((s(),E(`button`,i({key:1,ref:`nextButton`,type:`button`,class:e.cx(`nextButton`),"aria-label":c.nextButtonAriaLabel,tabindex:c.$pcTabs.tabindex,onClick:t[2]||=function(){return c.onNextButtonClick&&c.onNextButtonClick.apply(c,arguments)}},e.ptm(`nextButton`),{"data-pc-group-section":`navigator`}),[(s(),D(f(c.templates.nexticon||`ChevronRightIcon`),i({"aria-hidden":`true`},e.ptm(`nextIcon`)),null,16))],16,R)),[[l]]):m(``,!0)],16,P)}N.render=z;var B=c.extend({name:`tabpanel`,classes:{root:function(e){return[`p-tabpanel`,{"p-tabpanel-active":e.instance.active}]}}}),V={name:`TabPanel`,extends:{name:`BaseTabPanel`,extends:T,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:B,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcTabs`],computed:{active:function(){return w(this.$pcTabs?.d_value,this.value)},id:function(){return`${this.$pcTabs?.$id}_tabpanel_${this.value}`},ariaLabelledby:function(){return`${this.$pcTabs?.$id}_tab_${this.value}`},attrs:function(){return i(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcTabs?.tabindex,role:`tabpanel`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`tabpanel`,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function H(e,t,n,r,c,l){var u,h;return l.$pcTabs?(s(),E(_,{key:1},[e.asChild?d(e.$slots,`default`,{key:1,class:a(e.cx(`root`)),active:l.active,a11yAttrs:l.a11yAttrs}):(s(),E(_,{key:0},[!((u=l.$pcTabs)!=null&&u.lazy)||l.active?o((s(),D(f(e.as),i({key:0,class:e.cx(`root`)},l.attrs),{default:p(function(){return[d(e.$slots,`default`)]}),_:3},16,[`class`])),[[S,(h=l.$pcTabs)!=null&&h.lazy?!0:l.active]]):m(``,!0)],64))],64)):d(e.$slots,`default`,{key:0})}V.render=H;var U={name:`TabPanels`,extends:{name:`BaseTabPanels`,extends:T,props:{},style:c.extend({name:`tabpanels`,classes:{root:`p-tabpanels`}}),provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},inheritAttrs:!1};function W(e,t,n,r,a,o){return s(),E(`div`,i({class:e.cx(`root`),role:`presentation`},e.ptmi(`root`)),[d(e.$slots,`default`)],16)}U.render=W;var G=c.extend({name:`tabs`,style:`
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
`,classes:{root:function(e){return[`p-tabs p-component`,{"p-tabs-scrollable":e.props.scrollable}]}}}),K={name:`Tabs`,extends:{name:`BaseTabs`,extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:G,provide:function(){return{$pcTabs:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit(`update:value`,e))},isVertical:function(){return this.orientation===`vertical`}}};function q(e,t,n,r,a,o){return s(),E(`div`,i({class:e.cx(`root`)},e.ptmi(`root`)),[d(e.$slots,`default`)],16)}K.render=q;export{j as a,N as i,U as n,V as r,K as t};