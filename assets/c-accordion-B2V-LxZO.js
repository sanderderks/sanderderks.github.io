import{$r as e,Cr as t,Dr as n,Er as r,Hi as i,Li as a,N as o,Or as s,Pr as c,Qr as l,Vr as u,Xr as d,Yr as f,Zr as p,a as m,br as h,hr as g,it as _,kr as v,oi as y,q as b,qr as x,rt as S,s as C,si as w,t as T}from"./c-ripple-CD-1upHe.js";import{o as E}from"../bundle.js";import{t as D}from"./c-chevronright-CZiZR46H.js";import{t as O}from"./c-chevronup-CjKUS9Jr.js";var k=C.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),A={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:m,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:k,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return u(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function j(t,i,o,c,l,f){return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:f.$pcAccordionPanel.active,a11yAttrs:f.a11yAttrs}):(x(),n(g,u({key:0,name:`p-collapsible`},t.ptm(`transition`,f.ptParams)),{default:y(function(){return[!f.$pcAccordion.lazy||f.$pcAccordionPanel.active?w((x(),n(e(t.as),u({key:0,class:t.cx(`root`)},f.attrs),{default:y(function(){return[r(`div`,u({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`,f.ptParams)),[r(`div`,u({class:t.cx(`content`)},t.ptm(`content`,f.ptParams)),[d(t.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[h,f.$pcAccordion.lazy?!0:f.$pcAccordionPanel.active]]):s(``,!0)]}),_:3},16))}A.render=j;var M=C.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),N={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:m,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return S(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?o(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?o(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){b(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return u(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return _({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:O,ChevronDownIcon:E},directives:{ripple:T}};function P(t,r,i,o,s,c){var f=l(`ripple`);return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:c.$pcAccordionPanel.active,a11yAttrs:c.a11yAttrs,onClick:c.onClick}):w((x(),n(e(t.as),u({key:0,"data-p":c.dataP,class:t.cx(`root`),onClick:c.onClick},c.attrs),{default:y(function(){return[d(t.$slots,`default`,{active:c.$pcAccordionPanel.active}),d(t.$slots,`toggleicon`,{active:c.$pcAccordionPanel.active,class:a(t.cx(`toggleicon`))},function(){return[c.$pcAccordionPanel.active?(x(),n(e(c.$pcAccordion.$slots.collapseicon?c.$pcAccordion.$slots.collapseicon:c.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),u({key:0,class:[c.$pcAccordion.collapseIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,c.ptParams)),null,16,[`class`])):(x(),n(e(c.$pcAccordion.$slots.expandicon?c.$pcAccordion.$slots.expandicon:c.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),u({key:1,class:[c.$pcAccordion.expandIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,c.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[f]])}N.render=P;var F=C.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),I={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:m,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:F,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return u(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function L(t,r,i,o,s,c){return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:c.active,a11yAttrs:c.a11yAttrs}):(x(),n(e(t.as),u({key:0,class:t.cx(`root`)},c.attrs),{default:y(function(){return[d(t.$slots,`default`)]}),_:3},16,[`class`]))}I.render=L;var R=C.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),z={name:`Accordion`,extends:{name:`BaseAccordion`,extends:m,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:R,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:u({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:u(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:u(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return u(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:I,AccordionHeader:N,AccordionContent:A,ChevronUpIcon:O,ChevronRightIcon:D}};function B(r,o,l,m,h,g){var _=p(`AccordionHeader`),b=p(`AccordionContent`),S=p(`AccordionPanel`);return x(),v(`div`,u({class:r.cx(`root`)},r.ptmi(`root`)),[g.hasAccordionTab?(x(!0),v(t,{key:0},f(g.tabs,function(t,o){return x(),n(S,{key:g.getKey(t,o),value:`${o}`,pt:{root:g.getTabPT(t,`root`,o)},disabled:g.getTabProp(t,`disabled`)},{default:y(function(){return[c(_,{class:a(g.getTabProp(t,`headerClass`)),pt:g.getHeaderPT(t,o)},{toggleicon:y(function(i){return[i.active?(x(),n(e(r.$slots.collapseicon?r.$slots.collapseicon:r.collapseIcon?`span`:`ChevronDownIcon`),u({key:0,class:[r.collapseIcon,i.class],"aria-hidden":`true`},{ref_for:!0},g.getTabPT(t,`headericon`,o)),null,16,[`class`])):(x(),n(e(r.$slots.expandicon?r.$slots.expandicon:r.expandIcon?`span`:`ChevronUpIcon`),u({key:1,class:[r.expandIcon,i.class],"aria-hidden":`true`},{ref_for:!0},g.getTabPT(t,`headericon`,o)),null,16,[`class`]))]}),default:y(function(){return[t.children&&t.children.headericon?(x(),n(e(t.children.headericon),{key:0,isTabActive:g.isItemActive(`${o}`),active:g.isItemActive(`${o}`),index:o},null,8,[`isTabActive`,`active`,`index`])):s(``,!0),t.props&&t.props.header?(x(),v(`span`,u({key:1,ref_for:!0},g.getTabPT(t,`headertitle`,o)),i(t.props.header),17)):s(``,!0),t.children&&t.children.header?(x(),n(e(t.children.header),{key:2})):s(``,!0)]}),_:2},1032,[`class`,`pt`]),c(b,{pt:g.getContentPT(t,o)},{default:y(function(){return[(x(),n(e(t)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):d(r.$slots,`default`,{key:1})],16)}z.render=B;export{A as i,I as n,N as r,z as t};