import{t as e}from"./c-chevronright.js";import{t}from"./c-chevronup.js";import{Ci as n,Cr as r,G as i,Gr as a,Ii as o,Jr as s,Kr as c,Lr as l,Or as u,Pr as d,Sr as f,Ur as p,Vi as m,Yr as h,dr as g,gr as _,j as v,l as y,ni as b,nt as x,pr as S,qr as C,ri as w,s as T,t as E,tt as D,wr as O,xr as k,yr as A}from"./c-ripple.js";import{s as j}from"../bundle.js";var M=y.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}});d(),S(),n();var N={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:T,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return l(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function P(e,t,n,i,a,s){return e.asChild?c(e.$slots,`default`,{key:1,class:o(e.cx(`root`)),active:s.$pcAccordionPanel.active,a11yAttrs:s.a11yAttrs}):(p(),f(g,l({key:0,name:`p-collapsible`},e.ptm(`transition`,s.ptParams)),{default:b(function(){return[!s.$pcAccordion.lazy||s.$pcAccordionPanel.active?w((p(),f(h(e.as),l({key:0,class:e.cx(`root`)},s.attrs),{default:b(function(){return[k(`div`,l({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`,s.ptParams)),[k(`div`,l({class:e.cx(`content`)},e.ptm(`content`,s.ptParams)),[c(e.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[_,s.$pcAccordion.lazy?!0:s.$pcAccordionPanel.active]]):r(``,!0)]}),_:3},16))}N.render=P;var F=y.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}});d(),n();var I={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:T,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:F,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e)}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return D(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?v(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?v(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){i(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return x({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:t,ChevronDownIcon:j},directives:{ripple:E}};function L(e,t,n,r,i,a){var u=s(`ripple`);return e.asChild?c(e.$slots,`default`,{key:1,class:o(e.cx(`root`)),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):w((p(),f(h(e.as),l({key:0,"data-p":a.dataP,class:e.cx(`root`),onClick:a.onClick},a.attrs),{default:b(function(){return[c(e.$slots,`default`,{active:a.$pcAccordionPanel.active}),c(e.$slots,`toggleicon`,{active:a.$pcAccordionPanel.active,class:o(e.cx(`toggleicon`))},function(){return[a.$pcAccordionPanel.active?(p(),f(h(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),l({key:0,class:[a.$pcAccordion.collapseIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,a.ptParams)),null,16,[`class`])):(p(),f(h(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),l({key:1,class:[a.$pcAccordion.expandIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,a.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[u]])}I.render=L;var R=y.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}});d(),n();var z={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:R,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function B(e,t,n,r,i,a){return e.asChild?c(e.$slots,`default`,{key:1,class:o(e.cx(`root`)),active:a.active,a11yAttrs:a.a11yAttrs}):(p(),f(h(e.as),l({key:0,class:e.cx(`root`)},a.attrs),{default:b(function(){return[c(e.$slots,`default`)]}),_:3},16,[`class`]))}z.render=B;var V=y.extend({name:`accordion`,style:`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,classes:{root:`p-accordion p-component`}});d(),n();var H={name:`Accordion`,extends:{name:`BaseAccordion`,extends:T,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:V,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:l({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:l(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:l(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return l(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:z,AccordionHeader:I,AccordionContent:N,ChevronUpIcon:t,ChevronRightIcon:e}};function U(e,t,n,i,s,d){var g=C(`AccordionHeader`),_=C(`AccordionContent`),v=C(`AccordionPanel`);return p(),O(`div`,l({class:e.cx(`root`)},e.ptmi(`root`)),[d.hasAccordionTab?(p(!0),O(A,{key:0},a(d.tabs,function(t,n){return p(),f(v,{key:d.getKey(t,n),value:`${n}`,pt:{root:d.getTabPT(t,`root`,n)},disabled:d.getTabProp(t,`disabled`)},{default:b(function(){return[u(g,{class:o(d.getTabProp(t,`headerClass`)),pt:d.getHeaderPT(t,n)},{toggleicon:b(function(r){return[r.active?(p(),f(h(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?`span`:`ChevronDownIcon`),l({key:0,class:[e.collapseIcon,r.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,n)),null,16,[`class`])):(p(),f(h(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?`span`:`ChevronUpIcon`),l({key:1,class:[e.expandIcon,r.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,n)),null,16,[`class`]))]}),default:b(function(){return[t.children&&t.children.headericon?(p(),f(h(t.children.headericon),{key:0,isTabActive:d.isItemActive(`${n}`),active:d.isItemActive(`${n}`),index:n},null,8,[`isTabActive`,`active`,`index`])):r(``,!0),t.props&&t.props.header?(p(),O(`span`,l({key:1,ref_for:!0},d.getTabPT(t,`headertitle`,n)),m(t.props.header),17)):r(``,!0),t.children&&t.children.header?(p(),f(h(t.children.header),{key:2})):r(``,!0)]}),_:2},1032,[`class`,`pt`]),u(_,{pt:d.getContentPT(t,n)},{default:b(function(){return[(p(),f(h(t)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):c(e.$slots,`default`,{key:1})],16)}H.render=U;export{N as i,z as n,I as r,H as t};