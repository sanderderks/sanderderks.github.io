import{Ar as e,Br as t,D as n,Ei as r,Hr as i,Ir as a,O as o,Rr as s,S as c,Tt as l,Vr as u,Xr as d,Yr as f,_r as p,br as m,fr as h,hr as g,ht as _,ji as v,l as y,lr as b,tt as x,vr as S,wr as C,wt as w,yr as T,zr as E}from"../bundle.js";import{t as D}from"./c-chevronright.js";import{t as O}from"./c-chevronup.js";var k=o.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),A={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:n,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:k,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return e(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function j(t,n,o,s,c,l){return t.asChild?E(t.$slots,`default`,{key:1,class:r(t.cx(`root`)),active:l.$pcAccordionPanel.active,a11yAttrs:l.a11yAttrs}):(a(),S(b,e({key:0,name:`p-collapsible`},t.ptm(`transition`,l.ptParams)),{default:f(function(){return[!l.$pcAccordion.lazy||l.$pcAccordionPanel.active?d((a(),S(i(t.as),e({key:0,class:t.cx(`root`)},l.attrs),{default:f(function(){return[p(`div`,e({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`,l.ptParams)),[p(`div`,e({class:t.cx(`content`)},t.ptm(`content`,l.ptParams)),[E(t.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[h,l.$pcAccordion.lazy?!0:l.$pcAccordionPanel.active]]):T(``,!0)]}),_:3},16))}A.render=j;var M=o.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),N={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:n,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return w(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?x(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?x(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){_(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return e(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return l({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:O,ChevronDownIcon:y},directives:{ripple:c}};function P(t,n,o,s,c,l){var p=u(`ripple`);return t.asChild?E(t.$slots,`default`,{key:1,class:r(t.cx(`root`)),active:l.$pcAccordionPanel.active,a11yAttrs:l.a11yAttrs,onClick:l.onClick}):d((a(),S(i(t.as),e({key:0,"data-p":l.dataP,class:t.cx(`root`),onClick:l.onClick},l.attrs),{default:f(function(){return[E(t.$slots,`default`,{active:l.$pcAccordionPanel.active}),E(t.$slots,`toggleicon`,{active:l.$pcAccordionPanel.active,class:r(t.cx(`toggleicon`))},function(){return[l.$pcAccordionPanel.active?(a(),S(i(l.$pcAccordion.$slots.collapseicon?l.$pcAccordion.$slots.collapseicon:l.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),e({key:0,class:[l.$pcAccordion.collapseIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,l.ptParams)),null,16,[`class`])):(a(),S(i(l.$pcAccordion.$slots.expandicon?l.$pcAccordion.$slots.expandicon:l.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),e({key:1,class:[l.$pcAccordion.expandIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,l.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[p]])}N.render=P;var F=o.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),I={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:n,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:F,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return e(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function L(t,n,o,s,c,l){return t.asChild?E(t.$slots,`default`,{key:1,class:r(t.cx(`root`)),active:l.active,a11yAttrs:l.a11yAttrs}):(a(),S(i(t.as),e({key:0,class:t.cx(`root`)},l.attrs),{default:f(function(){return[E(t.$slots,`default`)]}),_:3},16,[`class`]))}I.render=L;var R=o.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),z={name:`Accordion`,extends:{name:`BaseAccordion`,extends:n,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:R,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(t,n){var r=this;return{root:e({onClick:function(e){return r.onTabClick(e,n)}},this.getTabProp(t,`headerProps`),this.getTabPT(t,`header`,n)),toggleicon:e(this.getTabProp(t,`headeractionprops`),this.getTabPT(t,`headeraction`,n))}},getContentPT:function(t,n){return{root:e(this.getTabProp(t,`contentProps`),this.getTabPT(t,`toggleablecontent`,n)),transition:this.getTabPT(t,`transition`,n),content:this.getTabPT(t,`content`,n)}},getTabPT:function(t,n,r){var i=this.tabs.length,a={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:i,first:r===0,last:r===i-1,active:this.isItemActive(`${r}`)}};return e(this.ptm(`accordiontab.${n}`,a),this.ptmo(this.getTabProp(t,`pt`),n,a))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:I,AccordionHeader:N,AccordionContent:A,ChevronUpIcon:O,ChevronRightIcon:D}};function B(n,o,c,l,u,d){var p=t(`AccordionHeader`),h=t(`AccordionContent`),_=t(`AccordionPanel`);return a(),m(`div`,e({class:n.cx(`root`)},n.ptmi(`root`)),[d.hasAccordionTab?(a(!0),m(g,{key:0},s(d.tabs,function(t,o){return a(),S(_,{key:d.getKey(t,o),value:`${o}`,pt:{root:d.getTabPT(t,`root`,o)},disabled:d.getTabProp(t,`disabled`)},{default:f(function(){return[C(p,{class:r(d.getTabProp(t,`headerClass`)),pt:d.getHeaderPT(t,o)},{toggleicon:f(function(r){return[r.active?(a(),S(i(n.$slots.collapseicon?n.$slots.collapseicon:n.collapseIcon?`span`:`ChevronDownIcon`),e({key:0,class:[n.collapseIcon,r.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,o)),null,16,[`class`])):(a(),S(i(n.$slots.expandicon?n.$slots.expandicon:n.expandIcon?`span`:`ChevronUpIcon`),e({key:1,class:[n.expandIcon,r.class],"aria-hidden":`true`},{ref_for:!0},d.getTabPT(t,`headericon`,o)),null,16,[`class`]))]}),default:f(function(){return[t.children&&t.children.headericon?(a(),S(i(t.children.headericon),{key:0,isTabActive:d.isItemActive(`${o}`),active:d.isItemActive(`${o}`),index:o},null,8,[`isTabActive`,`active`,`index`])):T(``,!0),t.props&&t.props.header?(a(),m(`span`,e({key:1,ref_for:!0},d.getTabPT(t,`headertitle`,o)),v(t.props.header),17)):T(``,!0),t.children&&t.children.header?(a(),S(i(t.children.header),{key:2})):T(``,!0)]}),_:2},1032,[`class`,`pt`]),C(h,{pt:d.getContentPT(t,o)},{default:f(function(){return[(a(),S(i(t)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):E(n.$slots,`default`,{key:1})],16)}z.render=B;export{A as i,I as n,N as r,z as t};