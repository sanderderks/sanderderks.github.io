import{$r as e,Cr as t,Dr as n,Er as r,Hi as i,Li as a,N as o,Or as s,Pr as c,Qr as l,Vr as u,Xr as d,Yr as f,Zr as p,a as m,br as h,hr as g,i as _,it as v,kr as y,oi as b,q as x,qr as S,rt as C,s as w,si as T,t as E}from"./c-ripple-BCunyqdI.js";import{o as D}from"../bundle.js";import{t as O}from"./c-chevronright-DHtIqjgR.js";var k={name:`ChevronUpIcon`,extends:_};function A(e){return P(e)||N(e)||M(e)||j()}function j(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e,t){if(e){if(typeof e==`string`)return F(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function N(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return F(e)}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t,n,i,a,o){return S(),y(`svg`,u({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),A(t[0]||=[r(`path`,{d:`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,fill:`currentColor`},null,-1)]),16)}k.render=I;var L=w.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),R={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:m,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:L,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return u(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function z(t,i,o,c,l,f){return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:f.$pcAccordionPanel.active,a11yAttrs:f.a11yAttrs}):(S(),n(g,u({key:0,name:`p-collapsible`},t.ptm(`transition`,f.ptParams)),{default:b(function(){return[!f.$pcAccordion.lazy||f.$pcAccordionPanel.active?T((S(),n(e(t.as),u({key:0,class:t.cx(`root`)},f.attrs),{default:b(function(){return[r(`div`,u({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`,f.ptParams)),[r(`div`,u({class:t.cx(`content`)},t.ptm(`content`,f.ptParams)),[d(t.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[h,f.$pcAccordion.lazy?!0:f.$pcAccordionPanel.active]]):s(``,!0)]}),_:3},16))}R.render=z;var B=w.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),V={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:m,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:B,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return C(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?o(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?o(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){x(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return u(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return v({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:k,ChevronDownIcon:D},directives:{ripple:E}};function H(t,r,i,o,s,c){var f=l(`ripple`);return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:c.$pcAccordionPanel.active,a11yAttrs:c.a11yAttrs,onClick:c.onClick}):T((S(),n(e(t.as),u({key:0,"data-p":c.dataP,class:t.cx(`root`),onClick:c.onClick},c.attrs),{default:b(function(){return[d(t.$slots,`default`,{active:c.$pcAccordionPanel.active}),d(t.$slots,`toggleicon`,{active:c.$pcAccordionPanel.active,class:a(t.cx(`toggleicon`))},function(){return[c.$pcAccordionPanel.active?(S(),n(e(c.$pcAccordion.$slots.collapseicon?c.$pcAccordion.$slots.collapseicon:c.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),u({key:0,class:[c.$pcAccordion.collapseIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,c.ptParams)),null,16,[`class`])):(S(),n(e(c.$pcAccordion.$slots.expandicon?c.$pcAccordion.$slots.expandicon:c.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),u({key:1,class:[c.$pcAccordion.expandIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,c.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[f]])}V.render=H;var U=w.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),W={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:m,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:U,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return u(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function G(t,r,i,o,s,c){return t.asChild?d(t.$slots,`default`,{key:1,class:a(t.cx(`root`)),active:c.active,a11yAttrs:c.a11yAttrs}):(S(),n(e(t.as),u({key:0,class:t.cx(`root`)},c.attrs),{default:b(function(){return[d(t.$slots,`default`)]}),_:3},16,[`class`]))}W.render=G;var K=w.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),q={name:`Accordion`,extends:{name:`BaseAccordion`,extends:m,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:K,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:u({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:u(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:u(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return u(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:W,AccordionHeader:V,AccordionContent:R,ChevronUpIcon:k,ChevronRightIcon:O}};function J(r,o,l,m,h,g){var _=p(`AccordionHeader`),v=p(`AccordionContent`),x=p(`AccordionPanel`);return S(),y(`div`,u({class:r.cx(`root`)},r.ptmi(`root`)),[g.hasAccordionTab?(S(!0),y(t,{key:0},f(g.tabs,function(t,o){return S(),n(x,{key:g.getKey(t,o),value:`${o}`,pt:{root:g.getTabPT(t,`root`,o)},disabled:g.getTabProp(t,`disabled`)},{default:b(function(){return[c(_,{class:a(g.getTabProp(t,`headerClass`)),pt:g.getHeaderPT(t,o)},{toggleicon:b(function(i){return[i.active?(S(),n(e(r.$slots.collapseicon?r.$slots.collapseicon:r.collapseIcon?`span`:`ChevronDownIcon`),u({key:0,class:[r.collapseIcon,i.class],"aria-hidden":`true`},{ref_for:!0},g.getTabPT(t,`headericon`,o)),null,16,[`class`])):(S(),n(e(r.$slots.expandicon?r.$slots.expandicon:r.expandIcon?`span`:`ChevronUpIcon`),u({key:1,class:[r.expandIcon,i.class],"aria-hidden":`true`},{ref_for:!0},g.getTabPT(t,`headericon`,o)),null,16,[`class`]))]}),default:b(function(){return[t.children&&t.children.headericon?(S(),n(e(t.children.headericon),{key:0,isTabActive:g.isItemActive(`${o}`),active:g.isItemActive(`${o}`),index:o},null,8,[`isTabActive`,`active`,`index`])):s(``,!0),t.props&&t.props.header?(S(),y(`span`,u({key:1,ref_for:!0},g.getTabPT(t,`headertitle`,o)),i(t.props.header),17)):s(``,!0),t.children&&t.children.header?(S(),n(e(t.children.header),{key:2})):s(``,!0)]}),_:2},1032,[`class`,`pt`]),c(v,{pt:g.getContentPT(t,o)},{default:b(function(){return[(S(),n(e(t)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):d(r.$slots,`default`,{key:1})],16)}q.render=J;export{k as a,R as i,W as n,V as r,q as t};