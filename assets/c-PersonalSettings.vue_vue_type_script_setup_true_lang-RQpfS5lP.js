import{al as k,aS as E,am as x,aT as R,Z as d,bH as F,a$ as q,bI as B,b1 as O,b3 as j,aE as S,b as c,g as w,w as K,r as v,b4 as V,n as U,bJ as J,bK as Q,bL as A,bM as Y,bN as Z,bO as P,aY as G,bP as z,c as f,J as C,e as T,O as $,aF as X,d as W,br as tt,U as H,D as et,bs as at,z as M,q as nt,bz as st,s as _,v as it,bQ as ot,l as rt,h,i as lt,f as m,R as I,ad as N,B as ut}from"../bundle.js";import{_ as dt}from"./c-Dialog.vue_vue_type_script_setup_true_lang-HoJ5O6d7.js";var ct={root:function(t){var s=t.instance,n=t.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":n.disabled}]}},bt=k.extend({name:"tab",classes:ct}),pt={name:"BaseTab",extends:x,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:bt,provide:function(){return{$pcTab:this,$parentInstance:this}}},ft={name:"Tab",extends:pt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var s=this.findNextTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var s=this.findPrevTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var s=this.findFirstTab();this.changeFocusedTab(t,s),t.preventDefault()},onEndKey:function(t){var s=this.findLastTab();this.changeFocusedTab(t,s),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s?t:t.nextElementSibling;return n?B(n,"data-p-disabled")||B(n,"data-pc-section")==="activebar"?this.findNextTab(n):O(n,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s?t:t.previousElementSibling;return n?B(n,"data-p-disabled")||B(n,"data-pc-section")==="activebar"?this.findPrevTab(n):O(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,s){q(s),this.scrollInView(s)},scrollInView:function(t){var s;t==null||(s=t.scrollIntoView)===null||s===void 0||s.call(t,{block:"nearest"})}},computed:{active:function(){var t;return F((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return d(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return R({active:this.active})}},directives:{ripple:E}};function vt(e,t,s,n,i,a){var o=j("ripple");return e.asChild?v(e.$slots,"default",{key:1,dataP:a.dataP,class:U(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):S((c(),w(V(e.as),d({key:0,class:e.cx("root"),"data-p":a.dataP,onClick:a.onClick},a.attrs),{default:K(function(){return[v(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[o]])}ft.render=vt;var ht={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},mt=k.extend({name:"tablist",classes:ht}),gt={name:"BaseTabList",extends:x,props:{},style:mt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},yt={name:"TabList",extends:gt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),n=A(t)-s,i=Math.abs(t.scrollLeft),a=n*.8,o=i-a,r=Math.max(o,0);t.scrollLeft=z(t)?-1*r:r},onNextButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),n=A(t)-s,i=Math.abs(t.scrollLeft),a=n*.8,o=i+a,r=t.scrollWidth-n,p=Math.min(o,r);t.scrollLeft=z(t)?-1*p:p},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,s=t.content,n=t.inkbar,i=t.tabs;if(n){var a=O(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=Z(a)+"px",n.style.top=P(a).top-P(i).top+"px"):(n.style.width=G(a)+"px",n.style.left=P(a).left-P(i).left+"px")}},updateButtonState:function(){var t=this.$refs,s=t.list,n=t.content,i=n.scrollTop,a=n.scrollWidth,o=n.scrollHeight,r=n.offsetWidth,p=n.offsetHeight,u=Math.abs(n.scrollLeft),g=[A(n),Y(n)],L=g[0],y=g[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=s.offsetHeight>=p&&parseInt(i)!==o-y):(this.isPrevButtonEnabled=u!==0,this.isNextButtonEnabled=s.offsetWidth>=r&&parseInt(u)!==a-L)},getVisibleButtonWidths:function(){var t=this.$refs,s=t.prevButton,n=t.nextButton,i=0;return this.showNavigators&&(i=(s?.offsetWidth||0)+(n?.offsetWidth||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return R({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Q,ChevronRightIcon:J},directives:{ripple:E}},Tt=["data-p"],$t=["aria-label","tabindex"],wt=["data-p"],kt=["aria-orientation"],xt=["aria-label","tabindex"];function Bt(e,t,s,n,i,a){var o=j("ripple");return c(),f("div",d({ref:"list",class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[a.showNavigators&&i.isPrevButtonEnabled?S((c(),f("button",d({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),w(V(a.templates.previcon||"ChevronLeftIcon"),d({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,$t)),[[o]]):C("",!0),T("div",d({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),"data-p":a.dataP},e.ptm("content")),[T("div",d({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[v(e.$slots,"default"),T("span",d({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,kt)],16,wt),a.showNavigators&&i.isNextButtonEnabled?S((c(),f("button",d({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),w(V(a.templates.nexticon||"ChevronRightIcon"),d({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,xt)),[[o]]):C("",!0)],16,Tt)}yt.render=Bt;var Pt={root:function(t){var s=t.instance;return["p-tabpanel",{"p-tabpanel-active":s.active}]}},St=k.extend({name:"tabpanel",classes:Pt}),Vt={name:"BaseTabPanel",extends:x,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:St,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Ct={name:"TabPanel",extends:Vt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return F((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Lt(e,t,s,n,i,a){var o,r;return a.$pcTabs?(c(),f($,{key:1},[e.asChild?v(e.$slots,"default",{key:1,class:U(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(c(),f($,{key:0},[!((o=a.$pcTabs)!==null&&o!==void 0&&o.lazy)||a.active?S((c(),w(V(e.as),d({key:0,class:e.cx("root")},a.attrs),{default:K(function(){return[v(e.$slots,"default")]}),_:3},16,["class"])),[[X,(r=a.$pcTabs)!==null&&r!==void 0&&r.lazy?!0:a.active]]):C("",!0)],64))],64)):v(e.$slots,"default",{key:0})}Ct.render=Lt;var At={root:"p-tabpanels"},Nt=k.extend({name:"tabpanels",classes:At}),Ot={name:"BaseTabPanels",extends:x,props:{},style:Nt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Kt={name:"TabPanels",extends:Ot,inheritAttrs:!1};function zt(e,t,s,n,i,a){return c(),f("div",d({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[v(e.$slots,"default")],16)}Kt.render=zt;var _t=`
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
`,It={root:function(t){var s=t.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Dt=k.extend({name:"tabs",style:_t,classes:It}),Et={name:"BaseTabs",extends:x,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Dt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Rt={name:"Tabs",extends:Et,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Ft(e,t,s,n,i,a){return c(),f("div",d({class:e.cx("root")},e.ptmi("root")),[v(e.$slots,"default")],16)}Rt.render=Ft;const D=W({__name:"NumberField",props:at({id:{},name:{},label:{},placeholder:{},error:{},rules:{},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},compare:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,s=tt(e,"modelValue"),n=M("");function i(){s.value=parseFloat(n.value)||0}return H(s,a=>{n.value=a.toString()},{immediate:!0}),(a,o)=>(c(),w(et,d(t,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"input-props":{...t.inputProps,type:"number"},onBlur:i}),null,16,["modelValue","input-props"]))}}),jt={class:"flex justify-end"},Ut={class:"flex flex-col gap-3 my-5"},Mt=W({__name:"PersonalSettings",setup(e){const t=ut(),s=nt(),n=st(),{personalSettings:i,isFetchLoading:a,isMutationLoading:o}=_(n),{firebaseUser:r}=_(s),p=M(!1),u=it(g());function g(){return i.value?i.value.clone():ot.create(r.value.uid)}async function L(){const y=r.value?.uid;if(!y)return;const l=u.clone();await n.updatePersonalSettings(y,l),p.value=!1}return H(p,()=>{Object.assign(u,g())},{immediate:!0}),rt(()=>{!i.value&&r.value&&n.fetchPersonalSettings(r.value.uid)}),(y,l)=>(c(),f($,null,[T("div",jt,[h(lt,{class:"border-none h-fit",variant:"neutral",icon:"pi pi-cog",loading:m(a),onClick:l[0]||(l[0]=b=>p.value=!0)},null,8,["loading"])]),h(dt,{isOpen:p.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:m(o),onConfirm:L,onCancel:l[6]||(l[6]=b=>p.value=!1)},{default:K(()=>[T("div",Ut,[m(t).name===m(I).TASKS?(c(),f($,{key:0},[h(D,{class:"w-full md:w-1/2 place-self-center",name:"tasks.amountOfDaysToShow",label:"Aantal dagen om te tonen in je takenlijst:",modelValue:u.tasks.amountOfDaysToShow,"onUpdate:modelValue":l[1]||(l[1]=b=>u.tasks.amountOfDaysToShow=b)},null,8,["modelValue"]),h(N,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:u.tasks.showDifficulty,"onUpdate:modelValue":l[2]||(l[2]=b=>u.tasks.showDifficulty=b)},null,8,["modelValue"])],64)):m(t).name===m(I).BOODSCHAPPEN?(c(),f($,{key:1},[h(D,{class:"w-full md:w-1/2 place-self-center",name:"groceries.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:u.groceries.amountOfDaysToShow,"onUpdate:modelValue":l[3]||(l[3]=b=>u.groceries.amountOfDaysToShow=b)},null,8,["modelValue"]),h(N,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showPromotions",label:"Toon promoties",modelValue:u.groceries.showPromotions,"onUpdate:modelValue":l[4]||(l[4]=b=>u.groceries.showPromotions=b)},null,8,["modelValue"]),h(N,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showCategory",label:"Toon categorieën",modelValue:u.groceries.showCategory,"onUpdate:modelValue":l[5]||(l[5]=b=>u.groceries.showCategory=b)},null,8,["modelValue"])],64)):C("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}});export{D as _,yt as a,ft as b,Kt as c,Ct as d,Mt as e,Rt as s};
