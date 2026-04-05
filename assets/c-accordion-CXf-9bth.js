import{Br as e,Dr as t,Er as n,F as r,Ii as i,Jr as a,Kr as o,Nr as s,Or as c,Qr as l,Sr as u,Tr as d,Vi as f,Xr as p,Y as m,Yr as h,Zr as g,ai as _,at as v,c as y,i as b,l as x,mr as S,oi as C,ot as w,s as T,yr as E}from"./c-button-DbxlWo-7.js";import{n as D,t as O}from"./c-chevrondown-TPakQoIZ.js";var k={name:`ChevronUpIcon`,extends:T};function A(e){return P(e)||N(e)||M(e)||j()}function j(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e,t){if(e){if(typeof e==`string`)return F(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function N(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return F(e)}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function I(t,n,r,i,a,s){return o(),c(`svg`,e({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},t.pti()),A(n[0]||=[d(`path`,{d:`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,fill:`currentColor`},null,-1)]),16)}k.render=I;var L=x.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),R={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:y,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:L,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return e(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function z(r,a,s,c,u,f){return r.asChild?h(r.$slots,`default`,{key:1,class:i(r.cx(`root`)),active:f.$pcAccordionPanel.active,a11yAttrs:f.a11yAttrs}):(o(),n(S,e({key:0,name:`p-collapsible`},r.ptm(`transition`,f.ptParams)),{default:_(function(){return[!f.$pcAccordion.lazy||f.$pcAccordionPanel.active?C((o(),n(l(r.as),e({key:0,class:r.cx(`root`)},f.attrs),{default:_(function(){return[d(`div`,e({class:r.cx(`contentWrapper`)},r.ptm(`contentWrapper`,f.ptParams)),[d(`div`,e({class:r.cx(`content`)},r.ptm(`content`,f.ptParams)),[h(r.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[E,f.$pcAccordion.lazy?!0:f.$pcAccordionPanel.active]]):t(``,!0)]}),_:3},16))}R.render=z;var B=x.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),V={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:y,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:B,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return v(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?r(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?r(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){m(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return e(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return w({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:k,ChevronDownIcon:O},directives:{ripple:b}};function H(t,r,a,s,c,u){var d=g(`ripple`);return t.asChild?h(t.$slots,`default`,{key:1,class:i(t.cx(`root`)),active:u.$pcAccordionPanel.active,a11yAttrs:u.a11yAttrs,onClick:u.onClick}):C((o(),n(l(t.as),e({key:0,"data-p":u.dataP,class:t.cx(`root`),onClick:u.onClick},u.attrs),{default:_(function(){return[h(t.$slots,`default`,{active:u.$pcAccordionPanel.active}),h(t.$slots,`toggleicon`,{active:u.$pcAccordionPanel.active,class:i(t.cx(`toggleicon`))},function(){return[u.$pcAccordionPanel.active?(o(),n(l(u.$pcAccordion.$slots.collapseicon?u.$pcAccordion.$slots.collapseicon:u.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),e({key:0,class:[u.$pcAccordion.collapseIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,u.ptParams)),null,16,[`class`])):(o(),n(l(u.$pcAccordion.$slots.expandicon?u.$pcAccordion.$slots.expandicon:u.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),e({key:1,class:[u.$pcAccordion.expandIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,u.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[d]])}V.render=H;var U=x.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),W={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:y,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:U,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return e(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function G(t,r,a,s,c,u){return t.asChild?h(t.$slots,`default`,{key:1,class:i(t.cx(`root`)),active:u.active,a11yAttrs:u.a11yAttrs}):(o(),n(l(t.as),e({key:0,class:t.cx(`root`)},u.attrs),{default:_(function(){return[h(t.$slots,`default`)]}),_:3},16,[`class`]))}W.render=G;var K=x.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),q={name:`Accordion`,extends:{name:`BaseAccordion`,extends:y,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:K,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(t,n){var r=this;return{root:e({onClick:function(e){return r.onTabClick(e,n)}},this.getTabProp(t,`headerProps`),this.getTabPT(t,`header`,n)),toggleicon:e(this.getTabProp(t,`headeractionprops`),this.getTabPT(t,`headeraction`,n))}},getContentPT:function(t,n){return{root:e(this.getTabProp(t,`contentProps`),this.getTabPT(t,`toggleablecontent`,n)),transition:this.getTabPT(t,`transition`,n),content:this.getTabPT(t,`content`,n)}},getTabPT:function(t,n,r){var i=this.tabs.length,a={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:i,first:r===0,last:r===i-1,active:this.isItemActive(`${r}`)}};return e(this.ptm(`accordiontab.${n}`,a),this.ptmo(this.getTabProp(t,`pt`),n,a))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:W,AccordionHeader:V,AccordionContent:R,ChevronUpIcon:k,ChevronRightIcon:D}};function J(r,d,m,g,v,y){var b=p(`AccordionHeader`),x=p(`AccordionContent`),S=p(`AccordionPanel`);return o(),c(`div`,e({class:r.cx(`root`)},r.ptmi(`root`)),[y.hasAccordionTab?(o(!0),c(u,{key:0},a(y.tabs,function(a,u){return o(),n(S,{key:y.getKey(a,u),value:`${u}`,pt:{root:y.getTabPT(a,`root`,u)},disabled:y.getTabProp(a,`disabled`)},{default:_(function(){return[s(b,{class:i(y.getTabProp(a,`headerClass`)),pt:y.getHeaderPT(a,u)},{toggleicon:_(function(t){return[t.active?(o(),n(l(r.$slots.collapseicon?r.$slots.collapseicon:r.collapseIcon?`span`:`ChevronDownIcon`),e({key:0,class:[r.collapseIcon,t.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(a,`headericon`,u)),null,16,[`class`])):(o(),n(l(r.$slots.expandicon?r.$slots.expandicon:r.expandIcon?`span`:`ChevronUpIcon`),e({key:1,class:[r.expandIcon,t.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(a,`headericon`,u)),null,16,[`class`]))]}),default:_(function(){return[a.children&&a.children.headericon?(o(),n(l(a.children.headericon),{key:0,isTabActive:y.isItemActive(`${u}`),active:y.isItemActive(`${u}`),index:u},null,8,[`isTabActive`,`active`,`index`])):t(``,!0),a.props&&a.props.header?(o(),c(`span`,e({key:1,ref_for:!0},y.getTabPT(a,`headertitle`,u)),f(a.props.header),17)):t(``,!0),a.children&&a.children.header?(o(),n(l(a.children.header),{key:2})):t(``,!0)]}),_:2},1032,[`class`,`pt`]),s(x,{pt:y.getContentPT(a,u)},{default:_(function(){return[(o(),n(l(a)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):h(r.$slots,`default`,{key:1})],16)}q.render=J;export{k as a,R as i,W as n,V as r,q as t};