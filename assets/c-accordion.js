import{t as e}from"./c-chevronright.js";import{t}from"./c-chevronup.js";import{Bi as n,Cr as r,Fi as i,Fr as a,G as o,Jr as s,Kr as c,Rr as l,Si as u,Sr as d,Tr as f,Wr as p,Xr as m,Yr as h,_r as g,br as _,fr as v,ii as y,j as b,kr as x,l as S,mr as C,nt as w,qr as T,ri as E,s as D,t as O,tt as k,wr as A}from"./c-ripple.js";import{s as j}from"../bundle.js";var M=S.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}});a(),C(),u();var N={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:D,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return l(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function P(e,t,n,a,o,s){return e.asChild?T(e.$slots,`default`,{key:1,class:i(e.cx(`root`)),active:s.$pcAccordionPanel.active,a11yAttrs:s.a11yAttrs}):(p(),r(v,l({key:0,name:`p-collapsible`},e.ptm(`transition`,s.ptParams)),{default:E(function(){return[!s.$pcAccordion.lazy||s.$pcAccordionPanel.active?y((p(),r(m(e.as),l({key:0,class:e.cx(`root`)},s.attrs),{default:E(function(){return[d(`div`,l({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`,s.ptParams)),[d(`div`,l({class:e.cx(`content`)},e.ptm(`content`,s.ptParams)),[T(e.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[g,s.$pcAccordion.lazy?!0:s.$pcAccordionPanel.active]]):A(``,!0)]}),_:3},16))}N.render=P;var F=S.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}});a(),u();var I={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:D,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:F,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e)}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return k(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?b(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?b(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){o(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return w({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:t,ChevronDownIcon:j},directives:{ripple:O}};function L(e,t,n,a,o,s){var c=h(`ripple`);return e.asChild?T(e.$slots,`default`,{key:1,class:i(e.cx(`root`)),active:s.$pcAccordionPanel.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):y((p(),r(m(e.as),l({key:0,"data-p":s.dataP,class:e.cx(`root`),onClick:s.onClick},s.attrs),{default:E(function(){return[T(e.$slots,`default`,{active:s.$pcAccordionPanel.active}),T(e.$slots,`toggleicon`,{active:s.$pcAccordionPanel.active,class:i(e.cx(`toggleicon`))},function(){return[s.$pcAccordionPanel.active?(p(),r(m(s.$pcAccordion.$slots.collapseicon?s.$pcAccordion.$slots.collapseicon:s.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),l({key:0,class:[s.$pcAccordion.collapseIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,s.ptParams)),null,16,[`class`])):(p(),r(m(s.$pcAccordion.$slots.expandicon?s.$pcAccordion.$slots.expandicon:s.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),l({key:1,class:[s.$pcAccordion.expandIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,s.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[c]])}I.render=L;var R=S.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}});a(),u();var z={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:D,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:R,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function B(e,t,n,a,o,s){return e.asChild?T(e.$slots,`default`,{key:1,class:i(e.cx(`root`)),active:s.active,a11yAttrs:s.a11yAttrs}):(p(),r(m(e.as),l({key:0,class:e.cx(`root`)},s.attrs),{default:E(function(){return[T(e.$slots,`default`)]}),_:3},16,[`class`]))}z.render=B;var V=S.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}});a(),u();var H={name:`Accordion`,extends:{name:`BaseAccordion`,extends:D,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:V,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:l({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:l(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:l(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return l(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:z,AccordionHeader:I,AccordionContent:N,ChevronUpIcon:t,ChevronRightIcon:e}};function U(e,t,a,o,u,d){var h=s(`AccordionHeader`),g=s(`AccordionContent`),v=s(`AccordionPanel`);return p(),f(`div`,l({class:e.cx(`root`)},e.ptmi(`root`)),[d.hasAccordionTab?(p(!0),f(_,{key:0},c(d.tabs,function(t,a){return p(),r(v,{key:d.getKey(t,a),value:`${a}`,pt:{root:d.getTabPT(t,`root`,a)},disabled:d.getTabProp(t,`disabled`)},{default:E(function(){return[x(h,{class:i(d.getTabProp(t,`headerClass`)),pt:d.getHeaderPT(t,a)},{toggleicon:E(function(n){return[n.active?(p(),r(m(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?`span`:`ChevronDownIcon`),l({key:0,class:[e.collapseIcon,n.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,a)),null,16,[`class`])):(p(),r(m(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?`span`:`ChevronUpIcon`),l({key:1,class:[e.expandIcon,n.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,a)),null,16,[`class`]))]}),default:E(function(){return[t.children&&t.children.headericon?(p(),r(m(t.children.headericon),{key:0,isTabActive:d.isItemActive(`${a}`),active:d.isItemActive(`${a}`),index:a},null,8,[`isTabActive`,`active`,`index`])):A(``,!0),t.props&&t.props.header?(p(),f(`span`,l({key:1,ref_for:!0},d.getTabPT(t,`headertitle`,a)),n(t.props.header),17)):A(``,!0),t.children&&t.children.header?(p(),r(m(t.children.header),{key:2})):A(``,!0)]}),_:2},1032,[`class`,`pt`]),x(g,{pt:d.getContentPT(t,a)},{default:E(function(){return[(p(),r(m(t)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):T(e.$slots,`default`,{key:1})],16)}H.render=U;export{N as i,z as n,I as r,H as t};