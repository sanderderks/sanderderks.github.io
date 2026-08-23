import{Cr as e,D as t,Fr as n,Gr as r,Ii as i,Kr as a,O as o,Or as s,S as c,Sr as l,Tt as u,Ur as d,Vr as f,Wr as p,ei as m,gr as h,ht as g,ji as _,l as v,pr as y,qr as b,ti as x,tt as S,wr as C,wt as w,xr as T,yr as E}from"../bundle.js";import{t as D}from"./c-chevronright.js";import{t as O}from"./c-chevronup.js";var k=o.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),A={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:t,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:k,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return n(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function j(t,r,i,a,o,s){return t.asChild?p(t.$slots,`default`,{key:1,class:_(t.cx(`root`)),active:s.$pcAccordionPanel.active,a11yAttrs:s.a11yAttrs}):(f(),l(y,n({key:0,name:`p-collapsible`},t.ptm(`transition`,s.ptParams)),{default:m(function(){return[!s.$pcAccordion.lazy||s.$pcAccordionPanel.active?x((f(),l(b(t.as),n({key:0,class:t.cx(`root`)},s.attrs),{default:m(function(){return[T(`div`,n({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`,s.ptParams)),[T(`div`,n({class:t.cx(`content`)},t.ptm(`content`,s.ptParams)),[p(t.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[h,s.$pcAccordion.lazy?!0:s.$pcAccordionPanel.active]]):e(``,!0)]}),_:3},16))}A.render=j;var M=o.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),N={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:t,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return w(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?S(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?S(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){g(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return n(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return u({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:O,ChevronDownIcon:v},directives:{ripple:c}};function P(e,t,r,i,o,s){var c=a(`ripple`);return e.asChild?p(e.$slots,`default`,{key:1,class:_(e.cx(`root`)),active:s.$pcAccordionPanel.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):x((f(),l(b(e.as),n({key:0,"data-p":s.dataP,class:e.cx(`root`),onClick:s.onClick},s.attrs),{default:m(function(){return[p(e.$slots,`default`,{active:s.$pcAccordionPanel.active}),p(e.$slots,`toggleicon`,{active:s.$pcAccordionPanel.active,class:_(e.cx(`toggleicon`))},function(){return[s.$pcAccordionPanel.active?(f(),l(b(s.$pcAccordion.$slots.collapseicon?s.$pcAccordion.$slots.collapseicon:s.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),n({key:0,class:[s.$pcAccordion.collapseIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,s.ptParams)),null,16,[`class`])):(f(),l(b(s.$pcAccordion.$slots.expandicon?s.$pcAccordion.$slots.expandicon:s.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),n({key:1,class:[s.$pcAccordion.expandIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,s.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[c]])}N.render=P;var F=o.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),I={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:t,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:F,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return n(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function L(e,t,r,i,a,o){return e.asChild?p(e.$slots,`default`,{key:1,class:_(e.cx(`root`)),active:o.active,a11yAttrs:o.a11yAttrs}):(f(),l(b(e.as),n({key:0,class:e.cx(`root`)},o.attrs),{default:m(function(){return[p(e.$slots,`default`)]}),_:3},16,[`class`]))}I.render=L;var R=o.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),z={name:`Accordion`,extends:{name:`BaseAccordion`,extends:t,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:R,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var r=this;return{root:n({onClick:function(e){return r.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:n(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:n(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,r){var i=this.tabs.length,a={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:i,first:r===0,last:r===i-1,active:this.isItemActive(`${r}`)}};return n(this.ptm(`accordiontab.${t}`,a),this.ptmo(this.getTabProp(e,`pt`),t,a))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:I,AccordionHeader:N,AccordionContent:A,ChevronUpIcon:O,ChevronRightIcon:D}};function B(t,a,o,c,u,h){var g=r(`AccordionHeader`),v=r(`AccordionContent`),y=r(`AccordionPanel`);return f(),C(`div`,n({class:t.cx(`root`)},t.ptmi(`root`)),[h.hasAccordionTab?(f(!0),C(E,{key:0},d(h.tabs,function(r,a){return f(),l(y,{key:h.getKey(r,a),value:`${a}`,pt:{root:h.getTabPT(r,`root`,a)},disabled:h.getTabProp(r,`disabled`)},{default:m(function(){return[s(g,{class:_(h.getTabProp(r,`headerClass`)),pt:h.getHeaderPT(r,a)},{toggleicon:m(function(e){return[e.active?(f(),l(b(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?`span`:`ChevronDownIcon`),n({key:0,class:[t.collapseIcon,e.class],"aria-hidden":`true`},{ref_for:!0},h.getTabPT(r,`headericon`,a)),null,16,[`class`])):(f(),l(b(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?`span`:`ChevronUpIcon`),n({key:1,class:[t.expandIcon,e.class],"aria-hidden":`true`},{ref_for:!0},h.getTabPT(r,`headericon`,a)),null,16,[`class`]))]}),default:m(function(){return[r.children&&r.children.headericon?(f(),l(b(r.children.headericon),{key:0,isTabActive:h.isItemActive(`${a}`),active:h.isItemActive(`${a}`),index:a},null,8,[`isTabActive`,`active`,`index`])):e(``,!0),r.props&&r.props.header?(f(),C(`span`,n({key:1,ref_for:!0},h.getTabPT(r,`headertitle`,a)),i(r.props.header),17)):e(``,!0),r.children&&r.children.header?(f(),l(b(r.children.header),{key:2})):e(``,!0)]}),_:2},1032,[`class`,`pt`]),s(v,{pt:h.getContentPT(r,a)},{default:m(function(){return[(f(),l(b(r)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):p(t.$slots,`default`,{key:1})],16)}z.render=B;export{A as i,I as n,N as r,z as t};