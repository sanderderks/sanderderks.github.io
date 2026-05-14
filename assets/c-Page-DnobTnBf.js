import{At as e,Br as t,Cr as n,Ct as r,D as i,Dr as a,Gr as o,H as s,Hr as c,Ir as l,It as u,Jr as d,Lr as f,Lt as p,Mr as m,Nr as h,Or as g,Pr as _,Pt as v,Rr as y,S as b,Sr as x,Wt as ee,Y as te,_r as S,ar as C,b as ne,bn as re,c as w,dr as ie,dt as ae,ei as oe,f as se,fr as T,ft as E,gr as D,hr as O,i as ce,ir as k,jn as le,ki as A,kn as ue,lr as de,m as fe,mr as j,nt as pe,o as me,or as he,pr as M,qn as N,qr as P,ri as F,rr as I,ti as L,u as ge,wi as R,wt as _e,x as z,xn as ve,xr as B,zr as ye}from"../bundle.js";import{t as V}from"./c-usePrimeVueTheme-CPB4jsIG.js";import{i as be,n as xe,r as Se,t as Ce}from"./c-Dialog-DefxTyV-.js";import{a as H,c as U,l as we}from"./c-Bubble-D2WU2646.js";import{t as Te}from"./c-TextField-DJzCcj00.js";var Ee={class:`container mx-auto text-center`},De=n({__name:`Footer`,setup(e){let{isDarkTheme:t}=V(),n=M(()=>t.value?`bg-black text-white shadow-md py-4`:`bg-gradient-to-r from-white via-slate-50 to-sky-50 text-slate-700 shadow-[0_-12px_30px_rgba(148,163,184,0.14)] py-4 border-t border-slate-200/70`);return(e,t)=>(_(),S(`footer`,{class:R(n.value)},[j(`div`,Ee,[j(`p`,null,`© `+A(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])],2))}}),Oe=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ke={class:`flex justify-between max-sm:pt-10`},Ae={class:`hidden sm:block w-full sm:min-w-fit`},je=[`alt`],Me={class:`w-fit sm:max-w-1/2`},Ne={class:`text-title-primary`},Pe={class:`text-title-secondary`},Fe={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Ie={class:`sm:hidden min-w-fit mt-3`},Le=[`alt`],Re=n({__name:`HeaderContent`,setup(e){let{routeLoading:t}=N(p()),{isDarkTheme:n}=V(),r=M(()=>n.value?`!bg-white/5 !text-neutral-200`:`!bg-white/80 !text-slate-700 !border !border-slate-200/80`);return(e,n)=>{let i=y(`RouterLink`);return _(),S(`div`,ke,[j(`div`,Ae,[x(i,{to:{name:F(I).HOME}},{default:P(()=>[j(`img`,{class:R([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":F(t)===F(I).HOME}]),src:Oe,alt:F(C).name},null,10,je)]),_:1},8,[`to`])]),j(`div`,Me,[j(`h1`,Ne,A(F(C).name),1),j(`h2`,Pe,A(F(C).service),1),j(`div`,Fe,[x(F(w),{class:R(r.value),icon:`pi pi-briefcase`,label:F(C).role},null,8,[`class`,`label`]),x(F(w),{class:R(r.value),icon:`pi pi-map-marker`,label:`${F(C).location.city}, ${F(C).location.country}`},null,8,[`class`,`label`])])]),j(`div`,Ie,[x(i,{to:{name:F(I).HOME}},{default:P(()=>[j(`img`,{class:R([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":F(t)===F(I).HOME}]),src:Oe,alt:F(C).name},null,10,Le)]),_:1},8,[`to`])])])}}}),ze=()=>{let e=u(),t=ee(),n=r(),i=ue(),{firebaseUser:a}=N(e),{houseHolds:o,activeHouseHold:s}=N(t),{activeHouseHoldId:c}=N(n),{publicUsers:l}=N(i),d=M(()=>l.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),f=M(()=>[{value:null,label:`Geen huishouden`},...[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),p=M(()=>[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),m=M(()=>s.value),h=M(()=>m.value?.id??p.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),g=e=>e?o.value.find(t=>t.id===e)??null:null,_=e=>{let t=g(e);return t?t.getUserOptions(d.value):[]};return{houseHoldOptions:f,requiredHouseHoldOptions:p,activeHouseHoldId:c,currentUsersHouseHold:m,defaultHouseHoldId:h,getHouseHoldById:g,getHouseHoldUserOptions:_,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},..._(e)],getDefaultUserId:e=>g(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>g(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>g(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}},W={name:`ChevronRightIcon`,extends:fe};function Be(e){return We(e)||Ue(e)||He(e)||Ve()}function Ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,t){if(e){if(typeof e==`string`)return G(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function Ue(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function We(e){if(Array.isArray(e))return G(e)}function G(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ge(e,t,n,r,i,a){return _(),S(`svg`,g({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Be(t[0]||=[j(`path`,{d:`M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z`,fill:`currentColor`},null,-1)]),16)}W.render=Ge;var K={name:`ChevronUpIcon`,extends:fe};function Ke(e){return Xe(e)||Ye(e)||Je(e)||qe()}function qe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Je(e,t){if(e){if(typeof e==`string`)return q(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function Ye(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Xe(e){if(Array.isArray(e))return q(e)}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ze(e,t,n,r,i,a){return _(),S(`svg`,g({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Ke(t[0]||=[j(`path`,{d:`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,fill:`currentColor`},null,-1)]),16)}K.render=Ze;var Qe=b.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),J={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:z,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:Qe,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return g(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function $e(e,n,r,i,a,o){return e.asChild?f(e.$slots,`default`,{key:1,class:R(e.cx(`root`)),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(_(),O(he,g({key:0,name:`p-collapsible`},e.ptm(`transition`,o.ptParams)),{default:P(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?d((_(),O(t(e.as),g({key:0,class:e.cx(`root`)},o.attrs),{default:P(function(){return[j(`div`,g({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`,o.ptParams)),[j(`div`,g({class:e.cx(`content`)},e.ptm(`content`,o.ptParams)),[f(e.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[de,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):D(``,!0)]}),_:3},16))}J.render=$e;var et=b.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),Y={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:z,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:et,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return ae(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?s(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?s(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){pe(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return g(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return E({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:K,ChevronDownIcon:se},directives:{ripple:ce}};function tt(e,n,r,i,a,o){var s=ye(`ripple`);return e.asChild?f(e.$slots,`default`,{key:1,class:R(e.cx(`root`)),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):d((_(),O(t(e.as),g({key:0,"data-p":o.dataP,class:e.cx(`root`),onClick:o.onClick},o.attrs),{default:P(function(){return[f(e.$slots,`default`,{active:o.$pcAccordionPanel.active}),f(e.$slots,`toggleicon`,{active:o.$pcAccordionPanel.active,class:R(e.cx(`toggleicon`))},function(){return[o.$pcAccordionPanel.active?(_(),O(t(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),g({key:0,class:[o.$pcAccordion.collapseIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,o.ptParams)),null,16,[`class`])):(_(),O(t(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),g({key:1,class:[o.$pcAccordion.expandIcon,e.cx(`toggleicon`)],"aria-hidden":`true`},e.ptm(`toggleicon`,o.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[s]])}Y.render=tt;var nt=b.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),X={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:z,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:nt,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return g(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function rt(e,n,r,i,a,o){return e.asChild?f(e.$slots,`default`,{key:1,class:R(e.cx(`root`)),active:o.active,a11yAttrs:o.a11yAttrs}):(_(),O(t(e.as),g({key:0,class:e.cx(`root`)},o.attrs),{default:P(function(){return[f(e.$slots,`default`)]}),_:3},16,[`class`]))}X.render=rt;var it=b.extend({name:`accordion`,style:`
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
`,classes:{root:`p-accordion p-component`}}),at={name:`Accordion`,extends:{name:`BaseAccordion`,extends:z,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:it,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:g({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:g(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:g(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return g(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:X,AccordionHeader:Y,AccordionContent:J,ChevronUpIcon:K,ChevronRightIcon:W}};function ot(e,n,r,i,a,o){var s=y(`AccordionHeader`),c=y(`AccordionContent`),u=y(`AccordionPanel`);return _(),S(`div`,g({class:e.cx(`root`)},e.ptmi(`root`)),[o.hasAccordionTab?(_(!0),S(T,{key:0},l(o.tabs,function(n,r){return _(),O(u,{key:o.getKey(n,r),value:`${r}`,pt:{root:o.getTabPT(n,`root`,r)},disabled:o.getTabProp(n,`disabled`)},{default:P(function(){return[x(s,{class:R(o.getTabProp(n,`headerClass`)),pt:o.getHeaderPT(n,r)},{toggleicon:P(function(i){return[i.active?(_(),O(t(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?`span`:`ChevronDownIcon`),g({key:0,class:[e.collapseIcon,i.class],"aria-hidden":`true`},{ref_for:!0},o.getTabPT(n,`headericon`,r)),null,16,[`class`])):(_(),O(t(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?`span`:`ChevronUpIcon`),g({key:1,class:[e.expandIcon,i.class],"aria-hidden":`true`},{ref_for:!0},o.getTabPT(n,`headericon`,r)),null,16,[`class`]))]}),default:P(function(){return[n.children&&n.children.headericon?(_(),O(t(n.children.headericon),{key:0,isTabActive:o.isItemActive(`${r}`),active:o.isItemActive(`${r}`),index:r},null,8,[`isTabActive`,`active`,`index`])):D(``,!0),n.props&&n.props.header?(_(),S(`span`,g({key:1,ref_for:!0},o.getTabPT(n,`headertitle`,r)),A(n.props.header),17)):D(``,!0),n.children&&n.children.header?(_(),O(t(n.children.header),{key:2})):D(``,!0)]}),_:2},1032,[`class`,`pt`]),x(c,{pt:o.getContentPT(n,r)},{default:P(function(){return[(_(),O(t(n)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):f(e.$slots,`default`,{key:1})],16)}at.render=ot;var st=n({__name:`NumberField`,props:a({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=c(e,`modelValue`),r=L(``);function i(){n.value=parseFloat(r.value)||0}return o(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(_(),O(Te,g(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),ct=b.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),lt={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:ne,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ct,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return E({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},ut=[`data-p-checked`,`data-p-disabled`,`data-p`],dt=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],ft=[`data-p`],pt=[`data-p`];function mt(e,t,n,r,i,a){return _(),S(`div`,g({class:e.cx(`root`),style:e.sx(`root`)},a.getPTOptions(`root`),{"data-p-checked":a.checked,"data-p-disabled":e.disabled,"data-p":a.dataP}),[j(`input`,g({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||=function(){return a.onFocus&&a.onFocus.apply(a,arguments)},onBlur:t[1]||=function(){return a.onBlur&&a.onBlur.apply(a,arguments)},onChange:t[2]||=function(){return a.onChange&&a.onChange.apply(a,arguments)}},a.getPTOptions(`input`)),null,16,dt),j(`div`,g({class:e.cx(`slider`)},a.getPTOptions(`slider`),{"data-p":a.dataP}),[j(`div`,g({class:e.cx(`handle`)},a.getPTOptions(`handle`),{"data-p":a.dataP}),[f(e.$slots,`handle`,{checked:a.checked})],16,pt)],16,ft)],16,ut)}lt.render=mt;var ht=[`for`],Z=n({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=M({get:()=>n.modelValue,set:e=>{n.disabled||a(`update:modelValue`,e)}}),i=M(()=>n.name+(n.id?`.${n.id}`:``)),a=t;return(t,n)=>(_(),S(`div`,null,[e.label?(_(),S(`label`,g({key:0,class:`block text-sm font-bold mb-2`,for:i.value},e.labelProps),A(e.label),17,ht)):D(``,!0),j(`div`,{class:R([`p-input flex align-middle`,{"cursor-pointer":!e.disabled}]),onClick:n[1]||=ie(e=>r.value=!r.value,[`prevent`])},[x(F(lt),{inputId:i.value,ref:`input`,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,disabled:e.disabled,pt:{slider:{class:r.value?`bg-primary-500`:void 0}}},null,8,[`inputId`,`modelValue`,`disabled`,`pt`])],2)]))}}),gt={key:0,class:`inline-flex`},_t={class:`my-5 flex flex-col gap-5`},vt={class:`flex flex-col gap-3`},yt={class:`flex flex-col gap-3`},bt={class:`flex flex-col gap-3`},xt={class:`flex flex-col gap-4`},St={class:`flex flex-col gap-3`},Ct={class:`flex flex-col gap-3`},wt={class:`flex flex-col gap-3`},Tt=n({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1}},setup(e){let t=v(),n=u(),i=r(),{personalSettings:a,isFetchLoading:s,isMutationLoading:c}=N(i),{firebaseUser:l,isOwner:d}=N(n),{houseHoldOptions:f,activeHouseHoldId:p}=ze(),m=L(!1),h=L(void 0),g=L(null),y=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],b=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],ee=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],te={[I.TASKS]:`tasks`,[I.PRODUCTS]:`products`,[I.GAMES]:`games`,[k.GAMES_YAHTZEE]:`games`,[k.GAMES_YAHTZEE_RAINBOW]:`games`,[k.GAMES_RAINWORMS]:`games`,[k.GAMES_PATIENCE]:`games`,[k.GAMES_HANGMAN]:`games`},C=M(()=>{let e=t.name?.toString();return e?te[e]:void 0}),ne=M(()=>C.value?`Thema en huishouden staan direct bovenaan. De sectie voor je huidige pagina klapt automatisch open.`:`Thema en huishouden staan direct bovenaan. Extra voorkeuren vind je per onderdeel in het accordion.`),w=oe(ie());function ie(){return a.value?a.value.clone():_e.create(l.value?.uid??``)}function ae(){Object.assign(w,ie()),g.value=p.value,h.value=C.value}async function se(){let e=l.value?.uid;if(!e)return;let t=w.clone();i.setActiveHouseHoldId(g.value),await i.updatePersonalSettings(e,t),m.value=!1}return o(m,e=>{e&&ae()},{immediate:!0}),(t,n)=>(_(),S(T,null,[F(l)?(_(),S(`div`,gt,[x(U,{icon:`pi pi-cog`,label:e.iconOnly?void 0:`Instellingen`,variant:`secondary`,outlined:``,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:F(s),onClick:n[0]||=e=>m.value=!0},null,8,[`label`,`loading`])])):D(``,!0),x(Ce,{isOpen:m.value,title:`Persoonlijke instellingen`,description:ne.value,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:F(c),onConfirm:se,onCancel:n[14]||=e=>m.value=!1},{default:P(()=>[j(`div`,_t,[j(`div`,vt,[x(H,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:y,required:``,modelValue:w.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>w.primeVueTheme=e},null,8,[`modelValue`]),F(d)?(_(),O(H,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:F(f),modelValue:g.value,"onUpdate:modelValue":n[2]||=e=>g.value=e},null,8,[`options`,`modelValue`])):D(``,!0)]),x(F(at),{value:h.value,"onUpdate:value":n[13]||=e=>h.value=e,onTabOpen:F(re)},{default:P(()=>[x(F(X),{value:`tasks`},{default:P(()=>[x(F(Y),null,{default:P(()=>[...n[15]||=[B(`Taken`,-1)]]),_:1}),x(F(J),null,{default:P(()=>[j(`div`,yt,[x(Z,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:w.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>w.tasks.showDifficulty=e},null,8,[`modelValue`]),x(Z,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:w.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>w.tasks.showCategories=e},null,8,[`modelValue`])])]),_:1})]),_:1}),x(F(X),{value:`products`},{default:P(()=>[x(F(Y),null,{default:P(()=>[...n[16]||=[B(`Boodschappen`,-1)]]),_:1}),x(F(J),null,{default:P(()=>[j(`div`,bt,[x(st,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:w.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>w.products.amountOfDaysToShow=e},null,8,[`modelValue`]),x(Z,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:w.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>w.products.showPromotions=e},null,8,[`modelValue`]),x(Z,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:w.products.showCategory,"onUpdate:modelValue":n[7]||=e=>w.products.showCategory=e},null,8,[`modelValue`]),x(Z,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:w.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>w.products.showSubcategory=e},null,8,[`modelValue`])])]),_:1})]),_:1}),x(F(X),{value:`games`},{default:P(()=>[x(F(Y),null,{default:P(()=>[...n[17]||=[B(`Spellen`,-1)]]),_:1}),x(F(J),null,{default:P(()=>[j(`div`,xt,[j(`div`,St,[x(Z,{class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:w.games.useAudio,"onUpdate:modelValue":n[9]||=e=>w.games.useAudio=e},null,8,[`modelValue`]),x(H,{class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:b,modelValue:w.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>w.games.diceRollSpeed=e},null,8,[`modelValue`])]),j(`div`,Ct,[n[18]||=j(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),x(H,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:ee,modelValue:w.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>w.games.rainworms.robotSpeed=e},null,8,[`modelValue`])]),j(`div`,wt,[n[19]||=j(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),x(Z,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:w.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>w.games.patience.doAutocomplete=e},null,8,[`modelValue`])])])]),_:1})]),_:1})]),_:1},8,[`value`,`onTabOpen`])])]),_:1},8,[`isOpen`,`description`,`confirmLoading`])],64))}}),Et={key:0,class:`hidden lg:block`},Dt={class:`grid grid-cols-2 gap-2`},Ot=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,kt=n({__name:`NavigationMenuDesktop`,setup(t){let n=u(),r=p(),i=v(),{isLoggedIn:a,isLogoutLoading:o}=N(n),{visibleMenuItems:s,routeLoading:c}=N(r),{isDarkTheme:d}=V(),f=M(()=>d.value?`!border-secondary-400 !bg-secondary-500/20 !text-neutral-50`:`!border-slate-300 !bg-white/90 !text-slate-900 shadow-sm`),m=M(()=>d.value?`!border-white/10 !bg-white/5 hover:!bg-white/10`:`!border-slate-200/80 !bg-white/60 !text-slate-700 hover:!bg-white/90`),h=t=>{if(!t)return!1;let n=e.find(e=>e.name===t);if(!n)return!1;let r=n.path.split(`/:`)[0];return r===`/`?i.fullPath===`/`:i.fullPath.startsWith(r)};return(e,t)=>F(s).length?(_(),S(`div`,Et,[j(`div`,Dt,[(_(!0),S(T,null,l(F(s),e=>(_(),O(U,{key:e.id,class:R([Ot,h(e.route)?f.value:m.value]),variant:`secondary`,outlined:``,href:e.url,route:e.route,loading:e.loading||F(c)===e.route,label:e.name},null,8,[`class`,`href`,`route`,`loading`,`label`]))),128)),F(a)?(_(),O(U,{key:0,class:R([Ot,`!rounded-full`]),variant:`danger`,outlined:``,loading:F(o),label:`Uitloggen`,onClick:F(n).logout},null,8,[`class`,`loading`,`onClick`])):(_(),O(U,{key:1,class:R([Ot,`!rounded-full`]),variant:`primary`,route:F(I).LOGIN,loading:F(c)===F(I).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):D(``,!0)}}),At={name:`Card`,extends:{name:`BaseCard`,extends:z,style:b.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function jt(e,t,n,r,i,a){return _(),S(`div`,g({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(_(),S(`div`,g({key:0,class:e.cx(`header`)},e.ptm(`header`)),[f(e.$slots,`header`)],16)):D(``,!0),j(`div`,g({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(_(),S(`div`,g({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(_(),S(`div`,g({key:0,class:e.cx(`title`)},e.ptm(`title`)),[f(e.$slots,`title`)],16)):D(``,!0),e.$slots.subtitle?(_(),S(`div`,g({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[f(e.$slots,`subtitle`)],16)):D(``,!0)],16)):D(``,!0),j(`div`,g({class:e.cx(`content`)},e.ptm(`content`)),[f(e.$slots,`content`)],16),e.$slots.footer?(_(),S(`div`,g({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[f(e.$slots,`footer`)],16)):D(``,!0)],16)],16)}At.render=jt;var Mt={class:`hidden lg:flex items-center gap-4 mb-4`},Nt={class:`hidden lg:block flex-1 space-y-2`},Pt={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},Ft={class:`font-semibold text-base first:font-bold first:text-lg`},It={key:0,class:`shrink-0 flex items-center gap-2`},Lt=n({__name:`NavigationCardDesktop`,setup(e){let t=u(),n=le(),{isLoggedIn:r}=N(t),{currentUser:i}=N(n),{isDarkTheme:a}=V(),o=M(()=>a.value?`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 border border-white/10 !bg-neutral-900/75 !text-neutral-100 rounded-b-secondary backdrop-blur-sm shadow-none`:`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 border border-slate-200/80 !bg-gradient-to-b !from-white/90 !via-slate-50/95 !to-sky-50/90 !text-slate-800 rounded-b-secondary backdrop-blur-sm shadow-[0_24px_60px_rgba(148,163,184,0.22)]`);return(e,t)=>(_(),O(F(At),{class:R(o.value)},{content:P(()=>[j(`div`,Mt,[j(`div`,Nt,[F(i)?(_(!0),S(T,{key:0},l([`Welkom terug, ${F(i).firstName+(F(i).lastName?` `+F(i).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(_(),S(`p`,Pt,A(e),1))),256)):(_(),S(T,{key:1},l([`Welkom op mijn portfolio- en blogwebsite!`],e=>j(`p`,Ft,A(e),1)),64))]),F(r)?(_(),S(`div`,It,[x(Tt,{"icon-only":``}),x(U,{class:`shrink-0 !p-6`,route:F(I).DASHBOARD,rounded:``,outlined:``,severity:`secondary`,"aria-label":`Ga naar dashboard`},{default:P(()=>[...t[0]||=[j(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):D(``,!0)]),x(kt)]),_:1},8,[`class`]))}}),Rt=b.extend({name:`drawer`,style:`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),zt={name:`BaseDrawer`,extends:z,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:Rt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function $(e,t,n){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bt(e){var t=Vt(e,`string`);return Q(t)==`symbol`?t:t+``}function Vt(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ht={name:`Drawer`,extends:zt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&i.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&i.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&te(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&i.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&pe(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&xe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Se()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return E($($($({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:be},components:{Button:we,Portal:me,TimesIcon:ge}},Ut=[`data-p`],Wt=[`role`,`aria-modal`,`data-p`];function Gt(e,n,r,i,a,o){var s=y(`Button`),c=y(`Portal`),l=ye(`focustrap`);return _(),O(c,null,{default:P(function(){return[a.containerVisible?(_(),S(`div`,g({key:0,ref:o.maskRef,onMousedown:n[0]||=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm(`mask`)),[x(he,g({name:`p-drawer`,onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:``},e.ptm(`transition`)),{default:P(function(){return[e.visible?d((_(),S(`div`,g({key:0,ref:o.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi(`root`)),[e.$slots.container?f(e.$slots,`container`,{key:0,closeCallback:o.hide}):(_(),S(T,{key:1},[j(`div`,g({ref:o.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[f(e.$slots,`header`,{class:R(e.cx(`title`))},function(){return[e.header?(_(),S(`div`,g({key:0,class:e.cx(`title`)},e.ptm(`title`)),A(e.header),17)):D(``,!0)]}),e.showCloseIcon?f(e.$slots,`closebutton`,{key:0,closeCallback:o.hide},function(){return[x(s,g({ref:o.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:P(function(n){return[f(e.$slots,`closeicon`,{},function(){return[(_(),O(t(e.closeIcon?`span`:`TimesIcon`),g({class:[e.closeIcon,n.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):D(``,!0)],16),j(`div`,g({ref:o.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[f(e.$slots,`default`)],16),e.$slots.footer?(_(),S(`div`,g({key:0,ref:o.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[f(e.$slots,`footer`)],16)):D(``,!0)],64))],16,Wt)),[[l]]):D(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Ut)):D(``,!0)]}),_:3})}Ht.render=Gt;var Kt={class:`flex flex-col gap-2 pb-4`},qt=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Jt=n({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){let n=t,r=u(),i=p(),a=v(),{isLoggedIn:o}=N(r),{visibleMenuItems:s,routeLoading:c}=N(i),{logout:d}=r,{isDarkTheme:f}=V(),m=M(()=>f.value?`lg:hidden !w-[min(26rem,85vw)] !bg-neutral-900 !text-neutral-100`:`lg:hidden !w-[min(26rem,85vw)] !bg-gradient-to-b !from-white !via-slate-50 !to-sky-50 !text-slate-900 border-l border-slate-200/80`),h=M(()=>f.value?`!border-secondary-400 !bg-secondary-500/20 !text-neutral-50`:`!border-slate-300 !bg-white !text-slate-900 shadow-sm`),g=M(()=>f.value?`!border-white/10 !bg-white/5 hover:!bg-white/10`:`!border-slate-200/80 !bg-white/60 !text-slate-700 hover:!bg-white/90`),y=M({get:()=>n.isOpen,set:e=>{e!==n.isOpen&&n.toggle()}}),b=t=>{if(!t)return!1;let n=e.find(e=>e.name===t);if(!n)return!1;let r=n.path.split(`/:`)[0];return r===`/`?a.fullPath===`/`:a.fullPath.startsWith(r)};return(e,n)=>(_(),O(F(Ht),{visible:y.value,"onUpdate:visible":n[1]||=e=>y.value=e,position:`right`,class:R(m.value),"show-close-icon":!0},{default:P(()=>[j(`div`,Kt,[(_(!0),S(T,null,l(F(s),e=>(_(),O(U,{key:e.id,class:R([`w-full`,qt,b(e.route)?h.value:g.value]),variant:`secondary`,outlined:``,fluid:``,href:e.url,route:e.route,loading:e.loading||F(c)===e.route,label:e.name,onClick:t.toggle},null,8,[`class`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),F(o)?(_(),S(T,{key:0},[x(U,{class:R([`w-full`,qt,g.value]),variant:`secondary`,outlined:``,fluid:``,route:F(I).DASHBOARD,loading:F(c)===F(I).DASHBOARD,label:`Dashboard`,onClick:t.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),x(U,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,variant:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=e=>{F(d)(),t.toggle()}})],64)):(_(),O(U,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,route:F(I).LOGIN,loading:F(c)===F(I).LOGIN,label:`Inloggen`,onClick:t.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`,`class`]))}}),Yt={class:`flex items-center gap-2`},Xt=n({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=N(u()),n=L(!1),r=L(!0),{isDarkTheme:i}=V(),a=window.scrollY,o=M(()=>i.value?`!bg-black/75 !border-white/10`:`!bg-white/85 !border-slate-200/80 !text-slate-800 shadow-md backdrop-blur-sm`),s=()=>{n.value=!n.value};function c(){let e=window.scrollY;e>a+10?r.value=!1:e<a-10&&(r.value=!0),a=e}return m(()=>{window.addEventListener(`scroll`,c)}),h(()=>{window.removeEventListener(`scroll`,c)}),(e,i)=>(_(),S(T,null,[j(`div`,{class:R([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[j(`div`,Yt,[F(t)?(_(),O(Tt,{key:0,"icon-only":``})):D(``,!0),x(F(we),{class:R(o.value),icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:s},null,8,[`class`])])],2),x(Jt,{"is-open":n.value,toggle:s},null,8,[`is-open`])],64))}}),Zt={class:`sm:flex sm:items-start sm:justify-between mb-20`},Qt={class:`hidden lg:flex justify-end`},$t={class:`lg:hidden w-full sm:w-1/3`},en=n({__name:`Header`,setup(e){return(e,t)=>(_(),S(`div`,Zt,[x(Re,{class:`hidden sm:block`}),j(`div`,Qt,[x(Lt)]),j(`div`,$t,[x(Xt)]),x(Re,{class:`sm:hidden`})]))}}),tn=n({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=v(),{isDarkTheme:r}=V(),i=L(),a=M(()=>r.value?`bg-gradient-to-b from-primary-900 via-neutral-800 to-black`:`bg-gradient-to-b from-slate-200 via-sky-50 to-white`),s=M(()=>r.value?`text-white bg-gradient-to-b from-transparent from-10% via-neutral-900/95 to-black/95`:`text-slate-900 bg-gradient-to-b from-slate-100/78 via-white/88 to-sky-50/92 border border-slate-200/85 shadow-[0_24px_80px_rgba(148,163,184,0.20)]`),c=()=>{t.scrollToContent&&ve(i.value)};return m(()=>{c()}),o(()=>n.fullPath,()=>{c()}),(e,t)=>(_(),S(T,null,[j(`div`,{class:R([`min-h-screen`,a.value])},[j(`div`,{class:R([`container py-5 rounded-b-secondary`,s.value,`bg-opacity-50 border-opacity-100`])},[j(`header`,null,[e.$slots.header?f(e.$slots,`header`,{key:0}):(_(),O(en,{key:1}))]),j(`main`,null,[j(`div`,{ref_key:`content`,ref:i},[f(e.$slots,`content`)],512)])],2)],2),j(`footer`,null,[e.$slots.footer?f(e.$slots,`footer`,{key:0}):(_(),O(De,{key:1}))])],64))}});export{at as a,J as c,ze as d,st as i,K as l,At as n,X as o,Z as r,Y as s,tn as t,W as u};