const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-2KkJjtsQ.js","../bundle.js","../bundle6.css"])))=>i.map(i=>d[i]);
import{a as ge,a2 as qe,s as D,k as nt,aa as lt,ab as xt,ac as je,ad as ze,ae as Q,af as it,p as ue,E as T,ag as St,U as at,ah as Pt,_ as Vt,d as B,u as $t,G as De,b as o,g as v,f as s,R as X,L as be,n as K,ai as Ct,w as S,e as f,B as q,z as V,c as p,v as Lt,h,a6 as Tt,F as $,C as E,aj as Y,ak as Bt,q as Dt,al as Ne,am as Ot,an as ye,ao as ce,r as ot,ap as m,aq as At,ar as rt,as as Et,at as Ut,au as Oe,av as jt,aw as zt,ax as xe,ay as Nt,az as st,aA as Rt,aB as Kt,aC as Mt,aD as M,aE as he,aF as Ae,aG as Re,aH as we,aI as R,x as ee,aJ as Ht,t as U,aK as Ft,aL as dt,j as le,aM as fe,a5 as Gt,i as Wt,a7 as Yt,a8 as $e,W as ut,X as Ce,aN as ct,aO as Qt,aP as Xt,aQ as Jt,aR as Zt,aS as Ke,aT as _t,aU as en,aV as tn,aW as nn,aX as Me,aY as ln,aZ as an,a_ as on,a$ as He,b0 as Se,b1 as rn,b2 as sn,b3 as dn}from"../bundle.js";import{_ as ie,a as z,u as un,b as cn}from"./c-Bubble.vue_vue_type_script_setup_true_lang-x-wUDE4j.js";import{_ as pt}from"./c-Dialog.vue_vue_type_script_setup_true_lang-C5jSyHqd.js";import{_ as W}from"./c-TextField.vue_vue_type_script_setup_true_lang-DCqI1vS2.js";import{u as ke,r as F,f as H,m as pn,a as mn,d as bn}from"./c-index-D2W7oKBP.js";import{_ as Ie}from"./c-DeleteButton.vue_vue_type_script_setup_true_lang-BU45OcZ4.js";import{_ as Fe}from"./c-Countdown.vue_vue_type_script_setup_true_lang-Birlb1S7.js";import{_ as mt}from"./c-Image.vue_vue_type_script_setup_true_lang-C6VdHAP9.js";import{d as hn,s as ve,a as J,b as Z,c as _}from"./c-index-wh8tXExj.js";import{F as fn,s as vn,a as gn}from"./c-index-BrF53Wm7.js";import{s as bt,_ as qn}from"./c-DateField.vue_vue_type_script_setup_true_lang-B63M3TEh.js";import{s as ht}from"./c-index-BHpiLUEw.js";import{s as yn}from"./c-index-BOca7p60.js";import{s as wn}from"./c-index-D2A-Mevx.js";import{_ as ft}from"./c-EditButton.vue_vue_type_script_setup_true_lang-PtfVBoHr.js";import{_ as kn}from"./c-CreateButton.vue_vue_type_script_setup_true_lang-C7Lsf8YT.js";import{_ as vt}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-Cb0LZjHt.js";import{D as Ee}from"./c-vuedraggable.umd-CE2aB4rj.js";import{_ as In}from"./c-ErrorMessage.vue_vue_type_script_setup_true_lang-09PjqN-d.js";import{_ as N}from"./c-SelectField.vue_vue_type_script_setup_true_lang-CD-PlCSh.js";import{_ as me}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-C7IF3Nm5.js";import{u as xn}from"./c-useUsers-DoT8aysl.js";const Sn=e=>{const t=ge(),n=qe(),{previousCurrentBlogPost:l,isBlogPostDatabaseActionActive:r}=D(t);let i=[];const a=T(),c=d=>{d.metadata.hasPendingWrites||r.value||(clearTimeout(a.value),a.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(l.value,!0)},200))};nt(async()=>{n.unread=n.unread.filter(u=>u.postId!==e.id);const d=lt(e),b=t.collections.blogPosts(d.isPrivate),y=n.collections.blogReactions(d.isPrivate),w=xt(b,e.id),k=je(b,ze("id","==",e.id)),C=je(y,ze("post","==",w));i.push(Q(k,c)),i.push(Q(C,c))}),it(()=>{clearTimeout(a.value),i.forEach(d=>{d()})})},ma=()=>{const e=ge(),t=ue(),n=qe(),{visibleBlogPosts:l,isBlogPostDatabaseActionActive:r}=D(e),{isLoggedIn:i}=D(t);let a=[];const c=T(),d=b=>{b.metadata.hasPendingWrites||r.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{l.value.length&&(await e.fetchBlogPosts({amount:l.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};nt(()=>{n.unread=[],a.push(Q(e.collections.blogPosts(!1),d)),a.push(Q(n.collections.blogReactions(!1),d)),i.value&&(a.push(Q(e.collections.blogPosts(!0),d)),a.push(Q(n.collections.blogReactions(!0),d)))}),it(()=>{clearTimeout(c.value),a.forEach(b=>{b()})})},Pe=e=>e?e.clone():new Pt,te=St("blogPostDialogStore",()=>{const e=T(!1),t=T(null),n=T(Pe(null)),l=T(!1),r=()=>{t.value=null,n.value=Pe(null),l.value=!1},i=c=>{t.value=c,n.value=Pe(c),e.value=!0},a=()=>{e.value=!1,r()};return at(()=>n.value,()=>{l.value=!Vt(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:l,$reset:r,openWith:i,close:a}}),Pn={class:"flex flex-col gap-2"},Ge=B({__name:"BlogReaction",props:{post:{},reaction:{}},setup(e){const t=e,n=$t(),l=ue(),r=De(),i=qe(),{routeLoading:a,routeLoadingId:c}=D(n),{firebaseUser:d,isLoggedIn:b,isOwner:y}=D(l),{publicUsers:w}=D(r),{isDatabaseDeletionActive:k}=D(i),C=V(()=>w.value.find(g=>g.id===t.reaction.userId)),u=V(()=>d.value&&t.reaction.userId===d.value.uid||y.value);return(g,x)=>(o(),v(ie,{id:e.reaction.id,class:K(["p-5 w-full md:w-3/4 xl:w-2/3",e.post.colorTertiary,e.post.opacityTertiary||"bg-opacity-50","!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},avatarProps:{class:{"animate-spin":s(a)===s(X).USER_DETAILS&&s(c)===C.value?.id}},title:C.value?.displayName||"Onbekende gebruiker",subTitle:s(be)(e.reaction.date),avatar:C.value?.avatar,route:s(b)?{name:s(X).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,avatarRoute:s(b)?{name:s(X).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,description:e.reaction.message},Ct({_:2},[u.value?{name:"right",fn:S(()=>[f("div",Pn,[u.value&&!e.post.locked?(o(),v(Ie,{key:0,outlined:"",disabled:s(k),onClick:x[0]||(x[0]=I=>s(i).deleteBlogReaction(e.post,e.reaction.id))},null,8,["disabled"])):q("",!0)])]),key:"0"}:void 0]),1032,["id","class","avatarProps","title","subTitle","avatar","route","avatarRoute","description"]))}}),Vn={class:"grid justify-items-center p-5 gap-5"},$n=B({__name:"BlogReactions",props:{post:{}},setup(e){const t=e,n=ue(),l=qe(),{firebaseUser:r,isLoggedIn:i}=D(n),{isDatabaseCreationActive:a}=D(l),c=T(!1),d=Dt({reaction:""}),y=ke({reaction:{required:F}},d,{$autoDirty:!0}),w=V(()=>[...t.post.reactions].reverse()),k=V(()=>w.value.filter((x,I)=>I<3)),C=V(()=>w.value.filter((x,I)=>I>=3)),u=V(()=>t.post.locked||!i.value||a.value),g=async()=>{if(a.value)return;if(!await y.value.$validate()||!r.value){Ne();return}const x=d.reaction;d.reaction="Reactie plaatsen...";const I=await l.createBlogReaction(t.post,new Ot({userId:r.value.uid,postId:t.post.id,message:x}));d.reaction=I?"":x,I&&y.value.$reset(),Ne()};return(x,I)=>(o(),p("form",{action:"",onSubmit:Lt(g,["prevent"])},[f("div",Vn,[!s(i)||e.post.reactions.filter(L=>L.userId===s(r).uid).length<20?(o(),v(ie,{key:0,class:K(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",e.post.colorTertiary||"bg-secondary-700",e.post.opacityTertiary||"bg-opacity-25"])},{default:S(()=>[h(W,{class:"w-5/6",id:e.post.id,inputProps:{class:["!bg-neutral-900 rounded-primary border-none !placeholder-gray-300",e.post.colorSecondary||e.post.colorPrimary||"bg-secondary-600",e.post.opacitySecondary||"!bg-opacity-20",u.value?{"!bg-gray-900 !bg-opacity-50":!s(a)}:"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!s(i)&&!e.post.locked}],disabled:u.value,autocomplete:"off"},name:"reaction",placeholder:e.post.locked?"Gesloten voor reacties":s(i)?"Reageren":"Log in om te reageren",modelValue:d.reaction,"onUpdate:modelValue":I[0]||(I[0]=L=>d.reaction=L),error:s(y).reaction.$error?s(H)(s(y).reaction):"",required:"",onClick:I[1]||(I[1]=()=>!s(i)&&!e.post.locked?s(Tt).push({name:s(X).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error"])]),_:1},8,["class"])):q("",!0),(o(!0),p($,null,E(k.value,L=>(o(),v(Ge,{post:e.post,reaction:L},null,8,["post","reaction"]))),256)),(o(!0),p($,null,E(C.value,L=>Y((o(),v(Ge,{post:e.post,reaction:L},null,8,["post","reaction"])),[[Bt,c.value]])),256)),e.post.reactions.length>3?(o(),v(z,{key:1,outlined:"",icon:c.value?"pi pi-angle-up":"pi pi-angle-down",label:c.value?"Verberg oudere reacties":"Bekijk oudere reacties",onClick:I[2]||(I[2]=L=>c.value=!c.value)},null,8,["icon","label"])):q("",!0)])],32))}});var Cn=ye.extend({name:"deferredcontent"}),Ue={name:"DeferredContent",extends:ce,inheritAttrs:!1,emits:["load"],style:Cn,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,l=n.clientHeight;return l>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function Ln(e,t,n,l,r,i){return o(),p("div",m({ref:"container"},e.ptmi("root")),[r.loaded?ot(e.$slots,"default",{key:0}):q("",!0)],16)}Ue.render=Ln;function Tn(){Et({variableName:rt("scrollbar.width").name})}function We(){At({variableName:rt("scrollbar.width").name})}var Bn=`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

       .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }

    .p-galleria-enter-active {
        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-leave-active {
        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    @keyframes p-animate-galleria-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-galleria-leave {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,Dn={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter-active",root:function(t){var n=t.instance,l=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},l,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,l=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(l)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,l=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===l,"p-galleria-thumbnail-item-active":n.isItemActive(l),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===l}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},On=ye.extend({name:"galleria",style:Bn,classes:Dn}),An={name:"BaseGalleria",extends:ce,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:On,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function ne(e){return zn(e)||jn(e)||Un(e)||En()}function En(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(e,t){if(e){if(typeof e=="string")return Le(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Le(e,t):void 0}}function jn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zn(e){if(Array.isArray(e))return Le(e)}function Le(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var gt={name:"GalleriaItem",hostName:"Galleria",extends:ce,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=ne(M(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=ne(M(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=ne(M(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return Ae(i,"data-p-active")===!0}),l=he(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=ne(M(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=he(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=ne(M(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:bt,ChevronRightIcon:ht},directives:{ripple:Oe}},Nn=["disabled"],Rn=["id","aria-label","aria-roledescription"],Kn=["disabled"],Mn=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Hn=["tabindex"];function Fn(e,t,n,l,r,i){var a=we("ripple");return o(),p("div",m({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[f("div",m({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?Y((o(),p("button",m({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(c){return i.navBackward(c)}),disabled:i.isNavBackwardDisabled},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),v(R(n.templates.previousitemicon||"ChevronLeftIcon"),m({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Nn)),[[a]]):q("",!0),f("div",m({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":i.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":i.ariaSlideLabel},e.ptm("item")),[n.templates.item?(o(),v(R(n.templates.item),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16,Rn),n.showItemNavigators?Y((o(),p("button",m({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(c){return i.navForward(c)}),disabled:i.isNavForwardDisabled},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),v(R(n.templates.nextitemicon||"ChevronRightIcon"),m({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,Kn)),[[a]]):q("",!0),n.templates.caption?(o(),p("div",m({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(o(),v(R(n.templates.caption),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16)):q("",!0)],16),n.showIndicators?(o(),p("ul",m({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(o(!0),p($,null,E(n.value,function(c,d){return o(),p("li",m({key:"p-galleria-indicator-".concat(d),class:e.cx("indicator",{index:d}),"aria-label":i.ariaPageLabel(d+1),"aria-selected":n.activeIndex===d,"aria-controls":n.id+"_item_"+d,onClick:function(y){return i.onIndicatorClick(d)},onMouseenter:function(y){return i.onIndicatorMouseEnter(d)},onKeydown:function(y){return i.onIndicatorKeyDown(y,d)}},{ref_for:!0},e.ptm("indicator",i.getIndicatorPTOptions(d)),{"data-p-active":i.isIndicatorItemActive(d)}),[n.templates.indicator?q("",!0):(o(),p("button",m({key:0,type:"button",tabindex:n.activeIndex===d?"0":"-1",class:e.cx("indicatorButton")},{ref_for:!0},e.ptm("indicatorButton",i.getIndicatorPTOptions(d))),null,16,Hn)),n.templates.indicator?(o(),v(R(n.templates.indicator),{key:1,index:d,activeIndex:n.activeIndex,tabindex:n.activeIndex===d?"0":"-1"},null,8,["index","activeIndex","tabindex"])):q("",!0)],16,Mn)}),128))],16)):q("",!0)],16)}gt.render=Fn;function Ve(e){return Qn(e)||Yn(e)||Wn(e)||Gn()}function Gn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wn(e,t){if(e){if(typeof e=="string")return Te(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}function Yn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qn(e){if(Array.isArray(e))return Te(e)}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var qt={name:"GalleriaThumbnails",hostName:"Galleria",extends:ce,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Re(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Re(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,l=n+this.totalShiftedItems;this.d_numVisible-l-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var l=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",l),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var l=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-l-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-l,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=M(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=M(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=Ve(M(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(i){return Ae(i,"data-p-active")===!0}),l=he(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=Ve(M(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=he(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=M(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&st(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){var l=10;Math.abs(n)<l||(n<0?this.navForward(t):this.navBackward(t))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",Rt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Ve(this.responsiveOptions);var l=Kt();this.sortedResponsiveOptions.sort(function(a,c){var d=a.breakpoint,b=c.breakpoint;return Mt(d,b,-1,l)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(i.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/i.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},l=0;l<this.sortedResponsiveOptions.length;l++){var r=this.sortedResponsiveOptions[l];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:bt,ChevronRightIcon:ht,ChevronUpIcon:hn,ChevronDownIcon:zt},directives:{ripple:Oe}};function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ye(Object(n),!0).forEach(function(l){Xn(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Xn(e,t,n){return(t=Jn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jn(e){var t=Zn(e,"string");return ae(t)=="symbol"?t:t+""}function Zn(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ae(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _n=["disabled","aria-label"],el=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],tl=["tabindex","aria-label","aria-current","onClick"],nl=["disabled","aria-label"];function ll(e,t,n,l,r,i){var a=we("ripple");return o(),p("div",m({class:e.cx("thumbnails")},e.ptm("thumbnails")),[f("div",m({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?Y((o(),p("button",m({key:0,class:e.cx("thumbnailPrevButton"),disabled:i.isNavBackwardDisabled,type:"button","aria-label":i.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(c){return i.navBackward(c)})},pe(pe({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),v(R(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),m({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,_n)),[[a]]):q("",!0),f("div",m({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[f("div",m({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(c){return i.onTransitionEnd(c)}),onTouchstart:t[2]||(t[2]=function(c){return i.onTouchStart(c)}),onTouchmove:t[3]||(t[3]=function(c){return i.onTouchMove(c)}),onTouchend:t[4]||(t[4]=function(c){return i.onTouchEnd(c)})},e.ptm("thumbnailItems")),[(o(!0),p($,null,E(n.value,function(c,d){return o(),p("div",m({key:"p-galleria-thumbnail-item-".concat(d),class:e.cx("thumbnailItem",{index:d,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===d,"aria-selected":n.activeIndex===d,"aria-controls":n.containerId+"_item_"+d,onKeydown:function(y){return i.onThumbnailKeydown(y,d)}},{ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===d,"data-p-galleria-thumbnail-item-active":i.isItemActive(d),"data-p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===d,"data-p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===d}),[f("div",m({class:e.cx("thumbnail"),tabindex:n.activeIndex===d?"0":"-1","aria-label":i.ariaPageLabel(d+1),"aria-current":n.activeIndex===d?"page":void 0,onClick:function(y){return i.onItemClick(d)}},{ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(o(),v(R(n.templates.thumbnail),{key:0,item:c},null,8,["item"])):q("",!0)],16,tl)],16,el)}),128))],16)],16),n.showThumbnailNavigators?Y((o(),p("button",m({key:1,class:e.cx("thumbnailNextButton"),disabled:i.isNavForwardDisabled,type:"button","aria-label":i.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(c){return i.navForward(c)})},pe(pe({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),v(R(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),m({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,nl)),[[a]]):q("",!0)],16)],16)}qt.render=ll;function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qe(Object(n),!0).forEach(function(l){il(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function il(e,t,n){return(t=al(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function al(e){var t=ol(e,"string");return oe(t)=="symbol"?t:t+""}function ol(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(oe(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yt={name:"GalleriaContent",hostName:"Galleria",extends:ce,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:Xe(Xe({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var l=["top","left","bottom","right"],r=l.find(function(i){return i===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:gt,GalleriaThumbnails:qt,TimesIcon:jt},directives:{ripple:Oe}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Je(Object(n),!0).forEach(function(l){rl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function rl(e,t,n){return(t=sl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sl(e){var t=dl(e,"string");return re(t)=="symbol"?t:t+""}function dl(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ul=["id","aria-label","aria-roledescription"],cl=["aria-label"],pl=["aria-live"];function ml(e,t,n,l,r,i){var a=ee("GalleriaItem"),c=ee("GalleriaThumbnails"),d=we("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(o(),p("div",m({key:0,id:e.$id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Ze(Ze({},e.$attrs.containerProps),i.getPTOptions("root"))),[e.$attrs.fullScreen?Y((o(),p("button",m({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(b){return e.$emit("mask-hide")})},i.getPTOptions("closeButton")),[(o(),v(R(e.$attrs.templates.closeicon||"TimesIcon"),m({class:e.cx("closeIcon")},i.getPTOptions("closeIcon")),null,16,["class"]))],16,cl)),[[d]]):q("",!0),e.$attrs.templates&&e.$attrs.templates.header?(o(),p("div",m({key:1,class:e.cx("header")},i.getPTOptions("header")),[(o(),v(R(e.$attrs.templates.header)))],16)):q("",!0),f("div",m({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},i.getPTOptions("content")),[h(a,{id:e.$id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(b){return r.slideShowActive=b}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:i.startSlideShow,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(o(),v(c,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(b){return r.slideShowActive=b}),containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:i.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):q("",!0)],16,pl),e.$attrs.templates&&e.$attrs.templates.footer?(o(),p("div",m({key:2,class:e.cx("footer")},i.getPTOptions("footer")),[(o(),v(R(e.$attrs.templates.footer)))],16)):q("",!0)],16,ul)):q("",!0)}yt.render=ml;var wt={name:"Galleria",extends:An,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&We(),this.mask=null,this.container&&(xe.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){xe.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),Tn(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&st(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){Nt(this.target),this.target=null},onAfterLeave:function(t){xe.clear(t),this.containerVisible=!1,We(),this.unbindGlobalListeners()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},onKeyDown:function(t){t.code==="Escape"&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:yt,Portal:Ut},directives:{focustrap:fn}},bl=["aria-modal"];function hl(e,t,n,l,r,i){var a=ee("GalleriaContent"),c=ee("Portal"),d=we("focustrap");return e.fullScreen?(o(),v(c,{key:0},{default:S(function(){return[r.containerVisible?(o(),p("div",m({key:0,ref:i.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[h(Ht,m({name:"p-galleria",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:S(function(){return[e.visible?Y((o(),v(a,m({key:0,ref:i.containerRef,onMaskHide:i.maskHide,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[d]]):q("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,bl)):q("",!0)]}),_:1})):(o(),v(a,m({key:1,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}wt.render=hl;const fl=B({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(o(),p("ul",{class:K(["list-disc",{"ms-5":e.alignment==="left"}])},[(o(!0),p($,null,E(e.bullets,l=>(o(),p("li",null,U(l),1))),256))],2))}}),vl={class:"w-full ql-editor no-input"},gl=["innerHTML"],ql=B({__name:"BlogPostDescription",props:{description:{}},setup(e){return(t,n)=>(o(),p("div",vl,[f("div",{innerHTML:e.description},null,8,gl)]))}}),_e=B({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(o(),v(ie,{class:K(["!p-0 md:!p-3",e.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",e.post?.colorTertiary,e.post?.opacityTertiary||"bg-opacity-50"])},{default:S(()=>[h(s(Ue),null,{default:S(()=>[e.thumb?(o(),p("div",{key:0,class:"h-[20vh] inset-0 rounded-primary bg-cover bg-center",style:Ft({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(o(),v(mt,{key:1,src:e.coverImageUrl,"image-class":["cover-image md:rounded-primary",e.imageClass]},null,8,["src","image-class"]))]),_:1})]),_:1},8,["class"]))}}),yl=["innerHTML"],wl=B({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const t=e,n=V(()=>dt(t.tableData)),l=V(()=>n.value.length?n.value[0].map((a,c)=>a||c):[]),r=V(()=>n.value.slice(1).filter(a=>a.some(c=>!!c)).map(a=>{const c={};return l.value.forEach((d,b)=>{c[d]=i(a[b])}),c})),i=a=>{const c=/(https?:\/\/[^\s]+)/g;return a.replace(c,d=>{let b=d.replace("http://","").replace("https://","").replace("www.","");return b.length>15&&(b=b.substring(0,15)+"..."),`<a href="${d}" target="_blank">${b}</a>`})};return(a,c)=>(o(),v(s(vn),{value:r.value,"pt:root":"w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]",showHeaders:l.value.some(d=>typeof d=="string"),removableSort:""},{default:S(()=>[(o(!0),p($,null,E(l.value,(d,b)=>(o(),v(s(gn),{key:d,field:y=>y[d],header:typeof d=="string"?d:"",sortable:""},{body:S(({data:y})=>[f("span",{class:K(["text-nowrap",[{"font-bold":b===0},{"text-left":e.alignment==="left"||!e.alignment,"text-center":e.alignment==="center","text-right":e.alignment==="right"}]]),innerHTML:y[d]},null,10,yl)]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","showHeaders"]))}}),kl={class:"text-2xl font-bold"},Il=B({__name:"BlogPostTitle",props:{title:{}},setup(e){return(t,n)=>(o(),p("h2",kl,U(e.title),1))}}),xl={key:1,class:"w-full flex flex-col gap-1 items-center"},Sl={key:0},Pl={key:0,class:"font-bold text-lg md:text-2xl"},Vl={key:1,class:"font-bold"},$l={key:1},Cl=B({__name:"BlogPostContent",props:{post:{},block:{}},setup(e){const t=e,n=V(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type==="title"),l=V(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type==="title");return(r,i)=>{const a=ee("BlogPostContent",!0);return o(),p("div",{class:K(["flex",{"justify-start":e.block.alignment==="left","justify-center":e.block.alignment==="center"||!e.block.alignment,"justify-end":e.block.alignment==="right"}])},[e.block.isBoolean()?(o(),v(s(wn),{key:0,modelValue:e.block.value,"onUpdate:modelValue":i[0]||(i[0]=c=>e.block.value=c),onLabel:"True",offLabel:"False",onIcon:"pi pi-check",offIcon:"pi pi-times",disabled:""},null,8,["modelValue"])):e.block.isNumber()?(o(),p("div",xl,[h(s(yn),{class:"w-full",value:e.block.value},null,8,["value"]),e.block.value?q("",!0):(o(),p("span",Sl,U(e.block.value)+"% ",1))])):e.block.isString()?(o(),p($,{key:2},[e.block.type==="title"?(o(),v(Il,{key:0,title:e.block.value},null,8,["title"])):e.block.type==="richtext"?(o(),v(ql,{key:1,description:e.block.value},null,8,["description"])):e.block.type==="table"?(o(),v(wl,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,["tableData","alignment"])):e.block.type==="coverimage"?(o(),v(_e,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,["post","cover-image-url"])):e.block.type==="image"?(o(),v(_e,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":"!max-h-[50vh] !max-w-[50vw]"},null,8,["post","cover-image-url"])):q("",!0)],64)):e.block.isStringList()?(o(),p($,{key:3},[e.block.type==="bulletlist"?(o(),v(fl,{key:0,bullets:e.block.value},null,8,["bullets"])):e.block.type==="imageslider"?(o(),v(s(Ue),{key:1},{default:S(()=>[h(s(wt),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:S(c=>[h(mt,{src:c.item,"image-class":"aspect-square object-cover w-3/4 place-self-center rounded-2xl"},null,8,["src"])]),_:1},8,["value"])]),_:1})):q("",!0)],64)):e.block.isDate()?(o(),p($,{key:4},[e.block.type==="date"?(o(),p($,{key:0},[le(U(e.block.value?s(be)(e.block.value):"Geen datum beschikbaar"),1)],64)):e.block.type==="countdown"?(o(),p($,{key:1},[e.block.value?(o(),v(Fe,{key:0,time:new Date(e.block.value).getTime(),direction:"down"},null,8,["time"])):q("",!0)],64)):e.block.type==="timer"?(o(),p($,{key:2},[e.block.value?(o(),v(Fe,{key:0,time:new Date(e.block.value).getTime(),direction:"up"},null,8,["time"])):q("",!0)],64)):q("",!0)],64)):e.block.isButton()?(o(),v(z,{key:5,label:e.block.value.title,href:e.block.value.url,variant:e.block.value.variant},null,8,["label","href","variant"])):e.block.isGroup()?(o(),v(s(ve),{key:6,class:"w-full",onTabOpen:s(fe)},{default:S(()=>[h(s(J),{value:"0",disabled:!e.block.value.length},{default:S(()=>[h(s(Z),{class:K(["px-0 bg-transparent !border-none",{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:S(()=>[f("div",null,[n.value?(o(),p($,{key:0},[n.value?(o(),p("p",Pl,U(e.block.value[0].value),1)):q("",!0),l.value?(o(),p("p",Vl,U(e.block.value[1].value),1)):q("",!0)],64)):e.block.value.length?(o(),p("p",$l,"Klik om te openen")):q("",!0)])]),_:1},8,["class","pt"]),h(s(_),{pt:{content:{class:"flex flex-col gap-3"}}},{default:S(()=>[(o(!0),p($,null,E(e.block.value.slice(l.value?2:n.value?1:0),c=>(o(),v(a,{key:c.id,post:e.post,block:c},null,8,["post","block"]))),128))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["onTabOpen"])):q("",!0)],2)}}}),Ll={class:"flex flex-wrap justify-end h-fit gap-3"},Tl=B({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(t,n)=>(o(),p("div",Ll,[h(ft,{onClick:n[0]||(n[0]=l=>t.$emit("editClicked"))}),h(Ie,{onClick:n[1]||(n[1]=l=>t.$emit("deleteClicked"))})]))}}),Bl={class:"flex justify-between h-fit mt-2 gap-2"},Dl={class:"flex flex-wrap gap-3"},ba=B({__name:"BlogPost",props:{post:{}},setup(e){const t=e,n=Wt(),l=ue(),r=De(),i=ge(),a=te(),{publicUsers:c}=D(r),{firebaseUser:d,isOwner:b}=D(l),{deleteBlogPost:y}=i,w=T(!1);n.currentRoute.value.name!==X.BLOG&&Sn(t.post);const k=V(()=>t.post.allowedUserIds?.length?c.value.filter(P=>t.post.allowedUserIds?.includes(P.id)):[]),C=V(()=>{const P=be(t.post.date);return t.post.dateUpdated?P+` - aangepast ${be(t.post.dateUpdated)}`:P}),u=V(()=>{const P=[];return t.post.datePinned&&P.push({value:"Vastgemaakt",severity:"success",rounded:!1}),t.post.locked&&P.push({value:"Gesloten",severity:"danger",rounded:!1,icon:"pi pi-lock"}),t.post.archived&&P.push({value:"Gearchiveerd",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),P}),g=()=>{a.openWith(t.post)},x=()=>{w.value=!0},I=async()=>{await y(t.post.id)&&(w.value=!1)},L=()=>{const P=document.createElement("textarea"),{protocol:j,hostname:A,port:O}=window.location,G=`${j}//${A}`+(A==="localhost"?`:${O}`:"");P.value=`${G}#${Yt.BLOG.path}/${t.post.id}`,document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),$e.success("Link gekopieerd!")};return(P,j)=>(o(),p($,null,[h(ie,{id:e.post.id,class:K(["border-4 border-transparent","!rounded-primary",e.post.colorSecondary||e.post.colorPrimary||"bg-secondary-900",e.post.opacitySecondary||"bg-opacity-50"]),title:e.post.title,subTitle:C.value,tags:u.value,clickable:"",route:{name:s(X).BLOG_DETAILS,params:{postId:e.post.id}}},{right:S(()=>[h(z,{class:"h-fit",variant:"neutral",icon:"pi pi-copy",text:"",onClick:L})]),default:S(()=>[f("div",Bl,[f("div",Dl,[(o(!0),p($,null,E(k.value,A=>(o(),v(s(Gt),{class:"h-fit !p-0 !px-4 !py-1 !bg-red-800 !bg-opacity-50",icon:"pi pi-user",label:A.id===s(d)?.uid?"Jij":A.displayName,rounded:""},null,8,["label"]))),256))]),s(b)?(o(),p("div",{key:0,class:K(["flex justify-end ms-5",e.post.allowedUserIds?.length?"flex-col md:flex-row":"flex-row"])},[h(Tl,{onEditClicked:g,onDeleteClicked:x})],2)):q("",!0)]),h(ie,{class:K(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3",e.post.colorPrimary,e.post.opacityPrimary||"bg-opacity-50"])},{default:S(()=>[(o(!0),p($,null,E(e.post.content,A=>(o(),v(Cl,{key:A.id,post:e.post,block:A},null,8,["post","block"]))),128))]),_:1},8,["class"]),h($n,{post:e.post},null,8,["post"])]),_:1},8,["id","class","title","subTitle","tags","route"]),h(pt,{title:"Verwijder bericht",isOpen:w.value,description:[` Weet je zeker dat je dit bericht genaamd '${e.post.title}' wilt verwijderen?`,"Dit kan niet ongedaan worden gemaakt."],"confirm-text":"Bevestigen","confirm-props":{variant:"danger",outlined:!0},onConfirm:I,onCancel:j[0]||(j[0]=A=>w.value=!1)},null,8,["isOpen","description"])],64))}}),Ol={class:"block text-sm font-bold mb-2"},Al={class:"bg-black bg-opacity-25 rounded-2xl"},El={class:"grid grid-cols-6 items-center"},Ul=B({__name:"ImageSliderField",props:Ce({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=ut(e,"modelValue"),n=r=>{t.value.splice(r,1)},l=(r,i)=>{t.value[r]=i};return(r,i)=>(o(),p("div",null,[f("p",Ol,U(e.label),1),f("div",Al,[h(s(Ee),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=a=>t.value=a),itemKey:"index",handle:".drag-handle"},{item:S(({element:a,index:c})=>[f("div",El,[i[1]||(i[1]=f("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),h(vt,{class:"col-span-4",id:`${e.name}.${c}`,name:`${e.name}.${c}`,modelValue:a,"blog-post":e.blogPost,"onUpdate:modelValue":d=>l(c,d)},null,8,["id","name","modelValue","blog-post","onUpdate:modelValue"]),h(Ie,{onClick:d=>n(c)},null,8,["onClick"])])]),_:1},8,["modelValue"])])]))}});var jl=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`,zl={root:function(t){var n=t.instance;return["p-editor",{"p-invalid":n.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Nl=ye.extend({name:"editor",style:jl,classes:zl}),Rl={name:"BaseEditor",extends:ct,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Nl,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function Kl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(l){Ml(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Ml(e,t,n){return(t=Hl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hl(e){var t=Fl(e,"string");return se(t)=="symbol"?t:t+""}function Fl(e,t){if(se(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(se(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tt=(function(){try{return window.Quill}catch{return null}})(),kt={name:"Editor",extends:Rl,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,n={modules:Kl({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};tt?(this.quill=new tt(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):Qt(()=>import("./c-quill-2KkJjtsQ.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(l){l&&Xt(t.$refs.editorElement)&&(l.default?t.quill=new l.default(t.$refs.editorElement,n):t.quill=new l(t.$refs.editorElement,n),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var n=this.quill.clipboard.convert({html:t});this.quill.setContents(n)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(n,l,r){if(r==="user"){var i=t.quill.getSemanticHTML(),a=t.quill.getText().trim();i==="<p><br></p>"&&(i=""),t.writeValue(i),t.$emit("text-change",{htmlValue:i,textValue:a,delta:n,source:r,instance:t.quill})}}),this.quill.on("selection-change",function(n,l,r){var i=t.quill.getSemanticHTML(),a=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:i,textValue:a,range:n,oldRange:l,source:r,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Gl(e,t,n,l,r,i){return o(),p("div",m({class:e.cx("root")},e.ptmi("root")),[f("div",m({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ot(e.$slots,"toolbar",{},function(){return[f("span",m({class:"ql-formats"},e.ptm("formats")),[f("select",m({class:"ql-header",defaultValue:"0"},e.ptm("header")),[f("option",m({value:"1"},e.ptm("option")),"Heading",16),f("option",m({value:"2"},e.ptm("option")),"Subheading",16),f("option",m({value:"0"},e.ptm("option")),"Normal",16)],16),f("select",m({class:"ql-font"},e.ptm("font")),[f("option",Jt(Zt(e.ptm("option"))),null,16),f("option",m({value:"serif"},e.ptm("option")),null,16),f("option",m({value:"monospace"},e.ptm("option")),null,16)],16)],16),f("span",m({class:"ql-formats"},e.ptm("formats")),[f("button",m({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),f("button",m({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),f("button",m({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),f("span",m({class:"ql-formats"},e.ptm("formats")),[f("select",m({class:"ql-color"},e.ptm("color")),null,16),f("select",m({class:"ql-background"},e.ptm("background")),null,16)],16),f("span",m({class:"ql-formats"},e.ptm("formats")),[f("button",m({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),f("button",m({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),f("select",m({class:"ql-align"},e.ptm("select")),[f("option",m({defaultValue:""},e.ptm("option")),null,16),f("option",m({value:"center"},e.ptm("option")),null,16),f("option",m({value:"right"},e.ptm("option")),null,16),f("option",m({value:"justify"},e.ptm("option")),null,16)],16)],16),f("span",m({class:"ql-formats"},e.ptm("formats")),[f("button",m({class:"ql-link",type:"button"},e.ptm("link")),null,16),f("button",m({class:"ql-image",type:"button"},e.ptm("image")),null,16),f("button",m({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),f("span",m({class:"ql-formats"},e.ptm("formats")),[f("button",m({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),f("div",m({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}kt.render=Gl;const Wl=["for"],Yl=B({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,l=V({get:()=>n.modelValue||"",set:d=>{c("update:modelValue",d)}}),r=V(()=>n.label?n.label+(n.required?" *":""):void 0),i=V(()=>n.name+(n.id?`.${n.id}`:"")),a=({instance:d})=>{d.setContents(d.clipboard.convert({html:l.value}))},c=t;return(d,b)=>(o(),p("div",null,[e.label?(o(),p("label",m({key:0,class:"block text-sm font-bold mb-2",for:i.value},e.labelProps),U(r.value),17,Wl)):q("",!0),h(s(kt),m({id:i.value,placeholder:e.placeholder,modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=y=>l.value=y),onLoad:a},e.editorProps),null,16,["id","placeholder","modelValue"]),e.error?(o(),v(In,{key:1,name:e.name,error:e.error},null,8,["name","error"])):q("",!0)]))}}),Ql={class:"p-4 bg-black bg-opacity-25 rounded-2xl"},Xl={class:"flex gap-3"},Jl=B({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,l=t,r=T(""),i=V({get:()=>n.modelValue.slice(),set:d=>{l("update:modelValue",d),r.value=""}}),a=(d,b)=>{const y=i.value.slice();y.splice(d,1,b),i.value=y},c=d=>{const b=i.value.slice();b.splice(d,1),i.value=b};return(d,b)=>(o(),p("div",Ql,[h(s(Ee),{modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=y=>i.value=y),itemKey:"index",handle:".drag-handle"},{item:S(({element:y,index:w})=>[f("div",Xl,[b[1]||(b[1]=f("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),h(W,{class:"w-full",id:`${e.name}.${w}`,name:e.name,"model-value":y,max:200,"delete-button":"","onUpdate:modelValue":k=>a(w,k.toString()),"onUpdate:delete":k=>c(w)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])]))}}),Zl=["for"],_l={class:"table w-full"},ei={class:"table-header-group"},ti={key:0,class:"table-row"},ni={key:0,class:"table-cell"},li={class:"table-cell"},ii={class:"table-row-group"},ai={key:0,class:"table-cell"},oi={key:1,class:"table-cell"},ri={key:2,class:"table-cell"},si={class:"table-footer-group"},di={class:"table-row"},ui={key:0,class:"table-cell"},ci=B({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const n=e,l=t,i=un(cn).greaterOrEqual("md"),a=V({get:()=>dt(n.modelValue),set:x=>{l("update:modelValue",Ke(x))}}),c=V(()=>n.name+(n.id?"."+n.id:"")),d=V(()=>i.value&&a.value[0]?.length<2),b=(x,I,L)=>{const P=[...a.value];P[x][I]=L,l("update:modelValue",Ke(P))},y=()=>{const x=a.value;if(x.length){const I=x[0];I.length?a.value=[...x,I.map(()=>"")]:a.value=[...x,[""]]}else a.value=[[""]]},w=x=>{const I=a.value;if(I.length){const L=I[0];I.splice(x,0,L.map(()=>"")),a.value=[...I]}},k=x=>{a.value.splice(x,1),a.value=a.value},C=()=>{a.value=a.value.map(x=>[...x,""])},u=x=>{const I=a.value;for(const L of I)L.splice(x,0,"");a.value=[...I]},g=x=>{a.value=a.value.map(I=>(I.splice(x,1),I))};return(x,I)=>(o(),p("div",null,[e.label?(o(),p("label",m({key:0,class:"block text-sm font-bold mb-2",for:c.value},e.labelProps),U(e.label),17,Zl)):q("",!0),f("div",_l,[f("div",ei,[a.value.length&&a.value[0].length>1?(o(),p("div",ti,[a.value.length>1?(o(),p("div",ni)):q("",!0),(o(!0),p($,null,E(a.value[0],(L,P)=>(o(),p("div",li,[a.value.length&&a.value[0].length?(o(),v(z,{key:0,class:"md:text-start text-nowrap",variant:"danger",icon:"pi pi-times",outlined:"",label:d.value?"Remove column":void 0,onClick:j=>g(P)},null,8,["label","onClick"])):q("",!0)]))),256))])):q("",!0)]),f("div",ii,[(o(!0),p($,null,E(a.value,(L,P)=>(o(),p("div",{key:P,class:"table-row"},[a.value.length>1?(o(),p("div",ai,[h(z,{class:"md:text-start text-nowrap",variant:"danger",icon:"pi pi-times",outlined:"",label:d.value?"Remove row":void 0,onClick:j=>k(P)},null,8,["label","onClick"])])):q("",!0),(o(!0),p($,null,E(L,(j,A)=>(o(),v(W,{key:A,class:"table-cell !m-0",name:`${e.name}.${P}.${A}`,modelValue:j,placeholder:P===0||A===0?"header":"cell","onUpdate:modelValue":O=>b(P,A,O.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),P===0?(o(),p("div",oi,[h(z,{class:"md:text-start text-nowrap",variant:"green",icon:"pi pi-plus",outlined:"",label:d.value?"Add column":void 0,onClick:C},null,8,["label"])])):(o(),p("div",ri,[h(z,{class:"md:text-start text-nowrap",variant:"neutral",icon:"pi pi-arrow-up-left",outlined:"",label:d.value?"Insert row":void 0,onClick:j=>w(P)},null,8,["label","onClick"])]))]))),128))]),f("div",si,[f("div",di,[a.value.length>1?(o(),p("div",ui)):q("",!0),(o(!0),p($,null,E(a.value[0],(L,P)=>(o(),p("div",{class:"table-cell",key:P},[P===0?(o(),v(z,{key:0,class:"md:text-start text-nowrap",variant:"green",icon:"pi pi-plus",outlined:"",label:d.value?"Add row":void 0,onClick:y},null,8,["label"])):(o(),v(z,{key:1,class:"md:text-start text-nowrap",variant:"neutral",icon:"pi pi-arrow-up-left",outlined:"",label:d.value?"Insert row":void 0,onClick:j=>u(P)},null,8,["label","onClick"]))]))),128))])])])]))}});var pi=`
    .p-slider {
        display: block;
        position: relative;
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:focus-visible {
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        inset-block-start: 0;
        inset-inline-start: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        inset-block-start: 50%;
        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
    }

    .p-slider-vertical {
        min-height: 100px;
        width: dt('slider.track.size');
    }

    .p-slider-vertical .p-slider-handle {
        inset-inline-start: 50%;
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));
    }

    .p-slider-vertical .p-slider-range {
        inset-block-end: 0;
        inset-inline-start: 0;
        width: 100%;
    }
`,mi={handle:{position:"absolute"},range:{position:"absolute"}},bi={root:function(t){var n=t.instance,l=t.props;return["p-slider p-component",{"p-disabled":l.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":l.orientation==="horizontal","p-slider-vertical":l.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},hi=ye.extend({name:"slider",style:pi,classes:bi,inlineStyles:mi}),fi={name:"BaseSlider",extends:ct,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:hi,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},de(e)}function vi(e,t,n){return(t=gi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gi(e){var t=qi(e,"string");return de(t)=="symbol"?t:t+""}function qi(e,t){if(de(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(de(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yi(e){return xi(e)||Ii(e)||ki(e)||wi()}function wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ki(e,t){if(e){if(typeof e=="string")return Be(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}function Ii(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xi(e){if(Array.isArray(e))return Be(e)}function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var It={name:"Slider",extends:fi,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+tn(),this.initY=t.top+nn(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,l=t.touches?t.touches[0].pageX:t.pageX,r=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?en(this.$el)?n=(this.initX+this.barWidth-l)*100/this.barWidth:n=(l-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(n/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,c=i-a;c<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:c>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(t,i)},updateModel:function(t,n){var l=Math.round(n*100)/100,r;this.range?(r=this.value?yi(this.value):[],this.handleIndex==0?(l<this.min?l=this.min:l>=this.max&&(l=this.max),r[0]=l):(l>this.max?l=this.max:l<=this.min&&(l=this.min),r[1]=l)):(l<this.min?l=this.min:l>this.max&&(l=this.max),r=l),this.writeValue(r,t),this.$emit("change",r)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||Ae(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var l,r;(l=(r=this.formField).onBlur)===null||l===void 0||l.call(r,t)},decrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]-this.step:r=this.value[n]-1:this.step?r=this.value-this.step:!this.step&&l?r=this.value-10:r=this.value-1,this.updateModel(t,r),t.preventDefault()},incrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]+this.step:r=this.value[n]+1:this.step?r=this.value+this.step:!this.step&&l?r=this.value+10:r=this.value+1,this.updateModel(t,r),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,l,r,i;return[(n=(l=this.d_value)===null||l===void 0?void 0:l[0])!==null&&n!==void 0?n:this.min,(r=(i=this.d_value)===null||i===void 0?void 0:i[1])!==null&&r!==void 0?r:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return _t(vi({},this.orientation,this.orientation))}}},Si=["data-p"],Pi=["data-p"],Vi=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],$i=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],Ci=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function Li(e,t,n,l,r,i){return o(),p("div",m({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},e.ptmi("root"),{"data-p-sliding":!1,"data-p":i.dataP}),[f("span",m({class:e.cx("range"),style:[e.sx("range"),i.rangeStyle()]},e.ptm("range"),{"data-p":i.dataP}),null,16,Pi),e.range?q("",!0):(o(),p("span",m({key:0,class:e.cx("handle"),style:[e.sx("handle"),i.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(a){return i.onDragStart(a)}),onTouchmovePassive:t[1]||(t[1]=function(a){return i.onDrag(a)}),onTouchend:t[2]||(t[2]=function(a){return i.onDragEnd(a)}),onMousedown:t[3]||(t[3]=function(a){return i.onMouseDown(a)}),onKeydown:t[4]||(t[4]=function(a){return i.onKeyDown(a)}),onBlur:t[5]||(t[5]=function(a){return i.onBlur(a)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle"),{"data-p":i.dataP}),null,16,Vi)),e.range?(o(),p("span",m({key:1,class:e.cx("handle"),style:[e.sx("handle"),i.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(a){return i.onDragStart(a,0)}),onTouchmovePassive:t[7]||(t[7]=function(a){return i.onDrag(a)}),onTouchend:t[8]||(t[8]=function(a){return i.onDragEnd(a)}),onMousedown:t[9]||(t[9]=function(a){return i.onMouseDown(a,0)}),onKeydown:t[10]||(t[10]=function(a){return i.onKeyDown(a,0)}),onBlur:t[11]||(t[11]=function(a){return i.onBlur(a,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler"),{"data-p":i.dataP}),null,16,$i)):q("",!0),e.range?(o(),p("span",m({key:2,class:e.cx("handle"),style:[e.sx("handle"),i.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(a){return i.onDragStart(a,1)}),onTouchmovePassive:t[13]||(t[13]=function(a){return i.onDrag(a)}),onTouchend:t[14]||(t[14]=function(a){return i.onDragEnd(a)}),onMousedown:t[15]||(t[15]=function(a){return i.onMouseDown(a,1)}),onKeydown:t[16]||(t[16]=function(a){return i.onKeyDown(a,1)}),onBlur:t[17]||(t[17]=function(a){return i.onBlur(a,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler"),{"data-p":i.dataP}),null,16,Ci)):q("",!0)],16,Si)}It.render=Li;const Ti={class:"w-full flex flex-col gap-3"},Bi={class:"flex gap-5"},Di={key:0},Oi={key:1},Ai={key:1,class:"w-full flex gap-3 justify-between"},Ei={key:1,class:"w-full flex flex-col items-center gap-3 justify-center"},Ui={key:5,class:"w-full flex gap-3"},ji={key:6},zi={class:"flex flex-col gap-1"},Ni=B({__name:"BlogPostContentBlocksDialog",props:Ce({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Ce(["delete"],["update:modelValue"]),setup(e){const t=ut(e,"modelValue"),n=te(),{blogPostOriginal:l}=D(n),r=T("title"),i=T("center"),a=T(!0),c=T(null),d=async()=>{t.value.push(an.createInstance(on(),r.value,r.value,i.value)),a.value=!1,setTimeout(()=>{a.value=!0})},b=w=>{const k=t.value.findIndex(C=>C.id===w);t.value.splice(k,1)},y=w=>{c.value=c.value===w?null:w};return(w,k)=>{const C=ee("BlogPostContentBlocksDialog",!0);return o(),p("div",Ti,[t.value.length?(o(),v(s(Ee),{key:0,ref:"draggableRef",class:"flex flex-col gap-3",modelValue:t.value,"onUpdate:modelValue":k[0]||(k[0]=u=>t.value=u),itemKey:u=>u.id,handle:".drag-handle"},{item:S(({element:u})=>[f("div",{class:K({"bg-neutral-500 bg-opacity-25 rounded-primary py-1 px-3 mt-3":c.value===u.id})},[u.isGroup()?(o(),v(s(ve),{key:0,class:"w-full",onTabOpen:s(fe)},{default:S(()=>[h(s(J),{value:"0"},{default:S(()=>[h(s(Z),{class:"drag-handle"},{default:S(()=>[f("div",Bi,[k[4]||(k[4]=f("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),u.value.length&&typeof u.value[0].value=="string"?(o(),p("p",Di,U(u.value[0].value),1)):(o(),p("p",Oi,U(u.getLabel()),1))])]),_:2},1024),h(s(_),null,{default:S(()=>[h(C,{id:u.id,modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,onDelete:g=>b(u.id)},null,8,["id","modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onTabOpen"])):(o(),p("div",Ai,[k[5]||(k[5]=f("i",{class:"drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer"},null,-1)),u.isBoolean()?(o(),v(me,{key:0,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.isNumber()?(o(),p("div",Ei,[h(s(It),{class:"w-full",name:u.id,modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","modelValue","onUpdate:modelValue"]),f("p",null,U(u.value)+"%",1)])):u.isString()?(o(),p($,{key:2},[u.type==="title"?(o(),v(W,{key:0,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.type==="richtext"?(o(),v(Yl,{key:1,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.type==="table"?(o(),v(ci,{key:2,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.type==="coverimage"||u.type==="image"?(o(),v(vt,{key:3,name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,"blog-post":s(l)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):q("",!0)],64)):u.isStringList()?(o(),p($,{key:3},[u.type==="bulletlist"?(o(),v(Jl,{key:0,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.type==="imageslider"?(o(),v(Ul,{key:1,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g,"blog-post":s(l)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):q("",!0)],64)):u.isDate()?(o(),v(qn,{key:4,class:"w-full",name:u.id,label:u.getLabel(),modelValue:u.value,"onUpdate:modelValue":g=>u.value=g},null,8,["name","label","modelValue","onUpdate:modelValue"])):u.isButton()?(o(),p("div",Ui,[h(W,{class:"w-1/2",name:`${u.id}-title`,label:"Knop titel",modelValue:u.value.title,"onUpdate:modelValue":g=>u.value.title=g},null,8,["name","modelValue","onUpdate:modelValue"]),h(W,{class:"w-1/2",name:`${u.id}-url`,label:"Knop link",modelValue:u.value.url,"onUpdate:modelValue":g=>u.value.url=g},null,8,["name","modelValue","onUpdate:modelValue"]),h(N,{class:"w-full md:w-1/2",name:`${u.id}-variant`,label:"Knop variant",modelValue:u.value.variant,"onUpdate:modelValue":g=>u.value.variant=g,options:[{value:"primary",label:"Primair"},{value:"secondary",label:"Secundair"},{value:"tertiary",label:"Tertiair"}]},null,8,["name","modelValue","onUpdate:modelValue"])])):(o(),p("p",ji,U(u.getLabel()),1)),f("div",zi,[h(ft,{onClick:g=>y(u.id)},null,8,["onClick"]),h(Ie,{onClick:g=>b(u.id)},null,8,["onClick"]),Array.isArray(u.value)?(o(),v(kn,{key:0,onClick:g=>u.value.push("")},null,8,["onClick"])):q("",!0)])])),c.value===u.id?(o(),v(N,{key:2,class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning","model-value":u.alignment??"center","onUpdate:modelValue":g=>u.alignment=g,options:s(Me)},null,8,["name","model-value","onUpdate:modelValue","options"])):q("",!0)],2)]),_:1},8,["modelValue","itemKey"])):q("",!0),a.value?(o(),v(s(ve),{key:1,onTabOpen:s(fe)},{default:S(()=>[h(s(J),{value:"0"},{default:S(()=>[h(s(Z),{"pt:root":"!bg-green-500 !bg-opacity-25 !border-none"},{default:S(()=>[...k[6]||(k[6]=[le(" Voeg content toe ",-1)])]),_:1}),h(s(_),{"pt:root":"bg-green-500 bg-opacity-25 rounded-b-2xl","pt:content":"flex flex-col justify-center items-center gap-3"},{default:S(()=>[h(N,{class:"w-full md:w-1/2",name:`${e.id}.contentType`,label:"Content type",modelValue:r.value,"onUpdate:modelValue":k[1]||(k[1]=u=>r.value=u),options:Object.entries(s(ln)).map(([u,g])=>({value:u,label:g}))},null,8,["name","modelValue","options"]),h(N,{class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning",modelValue:i.value,"onUpdate:modelValue":k[2]||(k[2]=u=>i.value=u),options:s(Me)},null,8,["name","modelValue","options"]),h(z,{class:"w-full md:w-1/2",variant:"green",label:"Voeg content toe",onClick:d}),e.id?(o(),v(z,{key:0,class:"w-full md:w-1/2 bg-opacity-75",variant:"danger",label:"Verwijder groep",onClick:k[3]||(k[3]=u=>w.$emit("delete"))})):q("",!0)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):q("",!0)])}}}),Ri=B({__name:"BlogPostContentDialog",emits:["update:selected","error"],setup(e,{expose:t,emit:n}){const l=n,r=te(),{blogPostMutation:i}=D(r),a=V(()=>({title:{required:F,minLength:mn(3),maxLength:pn(50)}})),c=ke(a,i,{$autoDirty:!0});return t({test:async()=>{l("error",!await c.value.$validate())}}),(b,y)=>(o(),p($,null,[h(W,{class:"w-full",name:"title",label:"Title",placeholder:"Amazing Post",modelValue:s(i).title,"onUpdate:modelValue":y[0]||(y[0]=w=>s(i).title=w),error:s(c).title.$error?s(H)(s(c).title):"",required:"","min-length":3,"max-length":50},null,8,["modelValue","error"]),h(Ni,{modelValue:s(i).content,"onUpdate:modelValue":y[1]||(y[1]=w=>s(i).content=w)},null,8,["modelValue"])],64))}}),Ki=B({__name:"BlogPostSettingsDialog",emits:["error"],setup(e,{expose:t,emit:n}){const l=n,r=De(),i=te(),{blogPostMutation:a}=D(i),{allowedPublicUsers:c}=r,{mappedUsers:d}=xn(),b=V({get(){return!!a.value.datePinned},set(g){a.value.datePinned=g?new Date:null}}),y=T([]),w=bn.withMessage("Invalid user ID's",g=>!g.length||g.length===y.value.length),k=V(()=>({allowedUserIds:{validAllowedUserIds:w}})),C=ke(k,a,{$autoDirty:!0}),u=async()=>{l("error",!await C.value.$validate())};return at(()=>a.value.allowedUserIds,async g=>{y.value=await c(g)},{immediate:!0}),t({test:u}),(g,x)=>(o(),p($,null,[h(N,{class:"w-full md:w-1/2",name:"allowedUserIds",label:"Toegestane gebruikers",placeholder:"Dit bericht is openbaar",modelValue:s(a).allowedUserIds,"onUpdate:modelValue":x[0]||(x[0]=I=>s(a).allowedUserIds=I),error:s(C).allowedUserIds.$error?s(H)(s(C).allowedUserIds):"",options:s(d),multiple:""},null,8,["modelValue","error","options"]),h(me,{class:"w-full md:w-1/2",name:"pinned",label:"Vastgemaakt",modelValue:b.value,"onUpdate:modelValue":x[1]||(x[1]=I=>b.value=I)},null,8,["modelValue"]),h(me,{class:"w-full md:w-1/2",name:"locked",label:"Gesloten voor reacties",modelValue:s(a).locked,"onUpdate:modelValue":x[2]||(x[2]=I=>s(a).locked=I)},null,8,["modelValue"]),h(me,{class:"w-full md:w-1/2",name:"archived",label:"Gearchiveerd",modelValue:s(a).archived,"onUpdate:modelValue":x[3]||(x[3]=I=>s(a).archived=I)},null,8,["modelValue"])],64))}}),Mi=B({__name:"BlogPostStylingDialog",emits:["error"],setup(e,{expose:t,emit:n}){const l=n,r=te(),{blogPostMutation:i}=D(r),a=V(()=>sn(He.find(y=>y.value===i.value.colorPrimary))),c=V(()=>({colorPrimary:{required:F},colorSecondary:{required:F},colorTertiary:{required:F},opacityPrimary:{required:F},opacitySecondary:{required:F},opacityTertiary:{required:F}})),d=ke(c,i,{$autoDirty:!0});return t({test:async()=>{l("error",!await d.value.$validate())}}),(y,w)=>(o(),p($,null,[h(N,{class:"w-full md:w-1/2",name:"colorPrimary",label:"Primaire stijl",modelValue:s(i).colorPrimary,"onUpdate:modelValue":w[0]||(w[0]=k=>s(i).colorPrimary=k),error:s(d).colorPrimary.$error?s(H)(s(d).colorPrimary):"",options:s(He),required:""},null,8,["modelValue","error","options"]),h(N,{class:"w-full md:w-1/2",name:"opacityPrimary",label:"Primaire doorzichtigheid",modelValue:s(i).opacityPrimary,"onUpdate:modelValue":w[1]||(w[1]=k=>s(i).opacityPrimary=k),error:s(d).opacityPrimary.$error?s(H)(s(d).opacityPrimary):"",options:s(Se),required:""},null,8,["modelValue","error","options"]),h(N,{class:"w-full md:w-1/2",name:"colorSecondary",label:"Secundaire stijl",modelValue:s(i).colorSecondary,"onUpdate:modelValue":w[2]||(w[2]=k=>s(i).colorSecondary=k),error:s(d).colorSecondary.$error?s(H)(s(d).colorSecondary):"",options:a.value,required:""},null,8,["modelValue","error","options"]),h(N,{class:"w-full md:w-1/2",name:"opacitySecondary",label:"Secundaire doorzichtigheid",modelValue:s(i).opacitySecondary,"onUpdate:modelValue":w[3]||(w[3]=k=>s(i).opacitySecondary=k),error:s(d).opacitySecondary.$error?s(H)(s(d).opacitySecondary):"",options:s(Se),required:""},null,8,["modelValue","error","options"]),h(N,{class:"w-full md:w-1/2",name:"colorTertiary",label:"Tertiaire stijl",modelValue:s(i).colorTertiary,"onUpdate:modelValue":w[4]||(w[4]=k=>s(i).colorTertiary=k),error:s(d).colorTertiary.$error?s(H)(s(d).colorTertiary):"",options:s(rn),required:""},null,8,["modelValue","error","options"]),h(N,{class:"w-full md:w-1/2",name:"opacityTertiary",label:"Tertiaire doorzichtigheid",modelValue:s(i).opacityTertiary,"onUpdate:modelValue":w[5]||(w[5]=k=>s(i).opacityTertiary=k),error:s(d).opacityTertiary.$error?s(H)(s(d).opacityTertiary):"",options:s(Se),required:""},null,8,["modelValue","error","options"])],64))}}),Hi={ref:"dialog",class:"pt-6 mb-4 xl:px-16"},ha=B({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:t}){const n=t;ue();const l=ge(),r=dn(),i=te(),{isBlogPostsMutationLoading:a}=D(l),{isOpen:c,blogPostOriginal:d,blogPostMutation:b,hasChanges:y}=D(i),w=T(),k=T(),C=T(),u=T(!1),g=T(!1),x=T(!1),I=V(()=>!!d.value?.allowedUserIds?.length&&!b.value.allowedUserIds?.length||!d.value?.allowedUserIds?.length&&!!b.value.allowedUserIds?.length),L=V(()=>lt(d.value)),P=async()=>{await Promise.all([w.value.test(),k.value.test(),C.value.test()]),!(u.value||g.value||x.value)&&(d.value?I.value?(i.isOpen=!1,await l.toggleBlogPostVisibility(d.value,b.value.allowedUserIds.length?"private":"public")&&(i.close(),$e.success("Zichtbaarheid van bericht succesvol bijgewerkt"),n("scroll-to-updated",b.value.id))):await l.updateBlogPost(b.value,L.value)&&($e.success("Bericht succesvol bijgewerkt"),i.close(),n("scroll-to-updated",b.value.id)):await l.createBlogPost(b.value)&&(i.close(),n("scroll-to-updated",b.value.id)))},j=async()=>{await r.deleteFilesOfBlogPost(b.value,d.value??void 0),i.close()};return(A,O)=>(o(),v(pt,{isOpen:s(c),title:s(d)?"Bericht bijwerken":"Bericht maken",description:s(d)?"Werk dit bericht bij":"Maak een nieuw bericht","confirm-text":s(d)?"Bijwerken":"Maken","confirm-loading":s(a),"confirm-props":{disabled:!s(y)},onConfirm:P,onCancel:j},{default:S(()=>[f("form",Hi,[s(c)?(o(),v(s(ve),{key:0,"active-index":0,onTabOpen:s(fe)},{default:S(()=>[h(s(J),{value:"content"},{default:S(()=>[h(s(Z),null,{default:S(()=>[...O[3]||(O[3]=[le(" Content ",-1)])]),_:1}),h(s(_),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:S(()=>[h(Ri,{ref_key:"content",ref:w,onError:O[0]||(O[0]=G=>u.value=G)},null,512)]),_:1})]),_:1}),h(s(J),{value:"styling"},{default:S(()=>[h(s(Z),null,{default:S(()=>[...O[4]||(O[4]=[le(" Styling ",-1)])]),_:1}),h(s(_),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:S(()=>[h(Mi,{ref_key:"styling",ref:k,onError:O[1]||(O[1]=G=>g.value=G)},null,512)]),_:1})]),_:1}),h(s(J),{value:"settings"},{default:S(()=>[h(s(Z),null,{default:S(()=>[...O[5]||(O[5]=[le(" Settings ",-1)])]),_:1}),h(s(_),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:S(()=>[h(Ki,{ref_key:"settings",ref:C,onError:O[2]||(O[2]=G=>x.value=G)},null,512)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):q("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading","confirm-props"]))}});export{ba as _,ha as a,te as b,Tl as c,Cl as d,ma as u};
