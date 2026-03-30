import{an as B,bq as j,ao as x,bs as U,$ as c,bt as M,bz as G,bA as C,bB as D,bC as W,aG as L,b as l,g as y,w as I,r as m,b9 as V,n as _,bD as J,bE as Q,bF as O,bG as X,bH as Y,bI as P,bJ as Z,bK as z,c as p,J as k,e as w,O as g,aH as tt,d as K,T as et,a9 as H,D as at,U as nt,z as q,q as st,bl as it,s as R,v as ot,bL as rt,l as lt,h as v,i as S,f as h,R as E,af as N,B as dt,E as ut,I as ct,a7 as bt}from"../bundle.js";import{_ as pt}from"./c-Dialog.vue_vue_type_script_setup_true_lang-VnSmcIXi.js";import{s as ft}from"./c-index-hs3D4GT7.js";var vt={root:function(t){var s=t.instance,n=t.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":n.disabled}]}},ht=B.extend({name:"tab",classes:vt}),mt={name:"BaseTab",extends:x,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ht,provide:function(){return{$pcTab:this,$parentInstance:this}}},gt={name:"Tab",extends:mt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var s=this.findNextTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var s=this.findPrevTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var s=this.findFirstTab();this.changeFocusedTab(t,s),t.preventDefault()},onEndKey:function(t){var s=this.findLastTab();this.changeFocusedTab(t,s),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s?t:t.nextElementSibling;return n?C(n,"data-p-disabled")||C(n,"data-pc-section")==="activebar"?this.findNextTab(n):D(n,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=s?t:t.previousElementSibling;return n?C(n,"data-p-disabled")||C(n,"data-pc-section")==="activebar"?this.findPrevTab(n):D(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,s){G(s),this.scrollInView(s)},scrollInView:function(t){var s;t==null||(s=t.scrollIntoView)===null||s===void 0||s.call(t,{block:"nearest"})}},computed:{active:function(){var t;return M((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return U({active:this.active})}},directives:{ripple:j}};function yt(e,t,s,n,i,a){var o=W("ripple");return e.asChild?m(e.$slots,"default",{key:1,dataP:a.dataP,class:_(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):L((l(),y(V(e.as),c({key:0,class:e.cx("root"),"data-p":a.dataP,onClick:a.onClick},a.attrs),{default:I(function(){return[m(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[o]])}gt.render=yt;var $t={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Tt=B.extend({name:"tablist",classes:$t}),wt={name:"BaseTabList",extends:x,props:{},style:Tt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},kt={name:"TabList",extends:wt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),n=O(t)-s,i=Math.abs(t.scrollLeft),a=n*.8,o=i-a,r=Math.max(o,0);t.scrollLeft=z(t)?-1*r:r},onNextButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),n=O(t)-s,i=Math.abs(t.scrollLeft),a=n*.8,o=i+a,r=t.scrollWidth-n,f=Math.min(o,r);t.scrollLeft=z(t)?-1*f:f},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,s=t.content,n=t.inkbar,i=t.tabs;if(n){var a=D(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=Y(a)+"px",n.style.top=P(a).top-P(i).top+"px"):(n.style.width=Z(a)+"px",n.style.left=P(a).left-P(i).left+"px")}},updateButtonState:function(){var t=this.$refs,s=t.list,n=t.content,i=n.scrollTop,a=n.scrollWidth,o=n.scrollHeight,r=n.offsetWidth,f=n.offsetHeight,u=Math.abs(n.scrollLeft),$=[O(n),X(n)],A=$[0],T=$[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=s.offsetHeight>=f&&parseInt(i)!==o-T):(this.isPrevButtonEnabled=u!==0,this.isNextButtonEnabled=s.offsetWidth>=r&&parseInt(u)!==a-A)},getVisibleButtonWidths:function(){var t=this.$refs,s=t.prevButton,n=t.nextButton,i=0;return this.showNavigators&&(i=((s==null?void 0:s.offsetWidth)||0)+((n==null?void 0:n.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return U({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Q,ChevronRightIcon:J},directives:{ripple:j}},Bt=["data-p"],xt=["aria-label","tabindex"],Ct=["data-p"],Pt=["aria-orientation"],St=["aria-label","tabindex"];function Lt(e,t,s,n,i,a){var o=W("ripple");return l(),p("div",c({ref:"list",class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[a.showNavigators&&i.isPrevButtonEnabled?L((l(),p("button",c({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),y(V(a.templates.previcon||"ChevronLeftIcon"),c({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,xt)),[[o]]):k("",!0),w("div",c({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),"data-p":a.dataP},e.ptm("content")),[w("div",c({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[m(e.$slots,"default"),w("span",c({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Pt)],16,Ct),a.showNavigators&&i.isNextButtonEnabled?L((l(),p("button",c({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),y(V(a.templates.nexticon||"ChevronRightIcon"),c({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,St)),[[o]]):k("",!0)],16,Bt)}kt.render=Lt;var Vt={root:function(t){var s=t.instance;return["p-tabpanel",{"p-tabpanel-active":s.active}]}},At=B.extend({name:"tabpanel",classes:Vt}),Ot={name:"BaseTabPanel",extends:x,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:At,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Nt={name:"TabPanel",extends:Ot,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return M((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Dt(e,t,s,n,i,a){var o,r;return a.$pcTabs?(l(),p(g,{key:1},[e.asChild?m(e.$slots,"default",{key:1,class:_(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(l(),p(g,{key:0},[!((o=a.$pcTabs)!==null&&o!==void 0&&o.lazy)||a.active?L((l(),y(V(e.as),c({key:0,class:e.cx("root")},a.attrs),{default:I(function(){return[m(e.$slots,"default")]}),_:3},16,["class"])),[[tt,(r=a.$pcTabs)!==null&&r!==void 0&&r.lazy?!0:a.active]]):k("",!0)],64))],64)):m(e.$slots,"default",{key:0})}Nt.render=Dt;var It={root:"p-tabpanels"},Kt=B.extend({name:"tabpanels",classes:It}),zt={name:"BaseTabPanels",extends:x,props:{},style:Kt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Rt={name:"TabPanels",extends:zt,inheritAttrs:!1};function Et(e,t,s,n,i,a){return l(),p("div",c({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[m(e.$slots,"default")],16)}Rt.render=Et;var Ft=`
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
`,jt={root:function(t){var s=t.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Ut=B.extend({name:"tabs",style:Ft,classes:jt}),Mt={name:"BaseTabs",extends:x,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Ut,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Wt={name:"Tabs",extends:Mt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function _t(e,t,s,n,i,a){return l(),p("div",c({class:e.cx("root")},e.ptmi("root")),[m(e.$slots,"default")],16)}Wt.render=_t;const F=K({__name:"NumberField",props:nt({id:{},name:{},label:{},placeholder:{},error:{},rules:{},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},compare:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,s=et(e,"modelValue"),n=q("");function i(){s.value=parseFloat(n.value)||0}return H(s,a=>{n.value=a.toString()},{immediate:!0}),(a,o)=>(l(),y(at,c(t,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"input-props":{...t.inputProps,type:"number"},onBlur:i}),null,16,["modelValue","input-props"]))}}),Ht={class:"flex justify-end"},qt={class:"flex flex-col gap-3 my-5"},Yt=K({__name:"PersonalSettings",setup(e){const t=dt(),s=st(),n=it(),{personalSettings:i,isFetchLoading:a,isMutationLoading:o}=R(n),{firebaseUser:r}=R(s),f=q(!1),u=ot($());function $(){return i.value?i.value.clone():rt.create(r.value.uid)}async function A(){var b;const T=(b=r.value)==null?void 0:b.uid;if(!T)return;const d=u.clone();await n.updatePersonalSettings(T,d),f.value=!1}return H(f,()=>{Object.assign(u,$())},{immediate:!0}),lt(()=>{!i.value&&r.value&&n.fetchPersonalSettings(r.value.uid)}),(T,d)=>(l(),p(g,null,[w("div",Ht,[v(S,{class:"border-none h-fit",variant:"neutral",icon:"pi pi-cog",loading:h(a),onClick:d[0]||(d[0]=b=>f.value=!0)},null,8,["loading"])]),v(pt,{isOpen:f.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:h(o),onConfirm:A,onCancel:d[6]||(d[6]=b=>f.value=!1)},{default:I(()=>[w("div",qt,[h(t).name===h(E).TASKS?(l(),p(g,{key:0},[v(F,{class:"w-full md:w-1/2 place-self-center",name:"tasks.amountOfDaysToShow",label:"Aantal dagen om te tonen in je takenlijst:",modelValue:u.tasks.amountOfDaysToShow,"onUpdate:modelValue":d[1]||(d[1]=b=>u.tasks.amountOfDaysToShow=b)},null,8,["modelValue"]),v(N,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:u.tasks.showDifficulty,"onUpdate:modelValue":d[2]||(d[2]=b=>u.tasks.showDifficulty=b)},null,8,["modelValue"])],64)):h(t).name===h(E).PRODUCTS?(l(),p(g,{key:1},[v(F,{class:"w-full md:w-1/2 place-self-center",name:"groceries.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:u.groceries.amountOfDaysToShow,"onUpdate:modelValue":d[3]||(d[3]=b=>u.groceries.amountOfDaysToShow=b)},null,8,["modelValue"]),v(N,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showPromotions",label:"Toon promoties",modelValue:u.groceries.showPromotions,"onUpdate:modelValue":d[4]||(d[4]=b=>u.groceries.showPromotions=b)},null,8,["modelValue"]),v(N,{class:"w-full md:w-1/2 place-self-center",name:"groceries.showCategory",label:"Toon categorieën",modelValue:u.groceries.showCategory,"onUpdate:modelValue":d[5]||(d[5]=b=>u.groceries.showCategory=b)},null,8,["modelValue"])],64)):k("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}}),Gt={key:0,class:"flex gap-3"},Zt=K({__name:"CrudMenu",props:{itemId:{},isMutationLoading:{type:Boolean},editLabel:{},deleteLabel:{},hideDeleteOption:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(e){const s=ut(ct).greaterOrEqual("md"),n=bt("menuRef");return(i,a)=>{var o;return h(s)?(l(),p("div",Gt,[v(S,{icon:"pi pi-cog","icon-only":"",variant:"neutral",loading:e.isMutationLoading,onClick:a[0]||(a[0]=r=>i.$emit("editClicked"))},null,8,["loading"]),e.hideDeleteOption?k("",!0):(l(),y(S,{key:0,icon:"pi pi-trash","icon-only":"",variant:"danger",loading:e.isMutationLoading,onClick:a[1]||(a[1]=r=>i.$emit("deleteClicked"))},null,8,["loading"]))])):(l(),p(g,{key:1},[v(S,{class:"!w-fit",icon:"pi pi-ellipsis-v","icon-only":"",text:"",variant:"neutral",onClick:(o=n.value)==null?void 0:o.toggle},null,8,["onClick"]),v(h(ft),{ref_key:"menuRef",ref:n,id:`menu-${e.itemId}`,popup:!0,model:[{label:e.editLabel??"Bewerken",icon:"pi pi-cog",disabled:e.isMutationLoading,command:()=>{i.$emit("editClicked")}},{label:e.deleteLabel??"Verwijderen",class:"text-red-500",icon:"pi pi-trash",disabled:e.isMutationLoading,visible:!e.hideDeleteOption,command:()=>{i.$emit("deleteClicked")}}]},null,8,["id","model"])],64))}}});export{F as _,Zt as a,kt as b,gt as c,Rt as d,Nt as e,Yt as f,Wt as s};
