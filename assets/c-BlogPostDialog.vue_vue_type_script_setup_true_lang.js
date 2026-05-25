const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","./c-vuedraggable.umd.js","../bundle.js"])))=>i.map(i=>d[i]);
import{a as ye,a2 as ke,s as z,l as dt,aa as ut,ab as Ot,ac as We,ad as Ye,ae as J,af as ct,j as _,D as U,ag as At,S as we,ah as Et,Z as Ut,d as E,u as jt,E as xe,q as Q,b as a,g as f,f as c,n as N,w as I,e as m,R as X,c as u,y as q,t as B,K as te,i as w,F as V,p as mt,h as v,a6 as zt,r as K,_ as W,k as Nt,ai as Z,aj as Rt,ak as Qe,al as Ht,am as Ie,an as se,T as pt,ao as h,ap as Kt,aq as Ue,ar as Mt,as as Ft,at as Pe,au as Gt,av as bt,aw as Wt,ax as Yt,ay as Qt,az as F,aA as be,aB as je,aC as Xe,aD as Se,aE as M,aF as Xt,aG as ht,aH as Zt,aI as Jt,aJ as _t,aK as en,A as ft,aL as tn,aM as vt,aN as nn,aO as ln,B as Le,aP as ze,m as on,a7 as an,a8 as Be,a5 as rn,V as gt,W as De,aQ as sn,aR as dn,aS as un,aT as cn,aU as Ze,aV as mn,aW as pn,aX as bn,aY as hn,aZ as fn}from"../bundle.js";import{_ as qt}from"./c-DeleteDialog.vue_vue_type_script_setup_true_lang.js";import{_ as Y}from"./c-TextField.vue_vue_type_script_setup_true_lang.js";import{u as Ne,s as vn,b as gn,c as pe}from"./c-Page.vue_vue_type_script_setup_true_lang.js";import{u as $e,r as yt,f as Re,m as qn,a as yn,d as kn}from"./c-index2.js";import{s as he,_ as ne,b as wn,a as fe}from"./c-index.js";import{s as xn}from"./c-index3.js";import{_ as Je}from"./c-Countdown.vue_vue_type_script_setup_true_lang.js";import{_ as kt}from"./c-Image.vue_vue_type_script_setup_true_lang.js";import{c as ve,a as ge,b as qe,s as He}from"./c-index4.js";import{F as In,u as _e,b as Sn,_ as Ke}from"./c-Dialog.vue_vue_type_script_setup_true_lang.js";import{s as wt,_ as $n}from"./c-DateField.vue_vue_type_script_setup_true_lang.js";import{s as xt}from"./c-index5.js";import{s as Pn}from"./c-index6.js";import{u as Cn,a as Vn,E as Ln,s as Bn}from"./c-useTaskHelper.js";import{s as Dn}from"./c-index7.js";import{u as Tn,a as On,b as An,_ as En}from"./c-BuyLogMutationDialog.vue_vue_type_script_setup_true_lang.js";import{s as Un,a as jn}from"./c-index8.js";import{_ as Te}from"./c-EditButton.vue_vue_type_script_setup_true_lang.js";import{_ as It}from"./c-CreateButton.vue_vue_type_script_setup_true_lang.js";import{D as Me}from"./c-vuedraggable.umd.js";import{_ as St}from"./c-FileUpload.vue_vue_type_script_setup_true_lang.js";import{u as zn,b as Nn}from"./c-index9.js";import{u as Rn}from"./c-useUsers.js";const Hn=e=>{const t=ye(),n=ke(),{previousCurrentBlogPost:l,isBlogPostDatabaseActionActive:r}=z(t);let i=[];const o=U(),d=s=>{s.metadata.hasPendingWrites||r.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(l.value,!0)},200))};dt(async()=>{n.unread=n.unread.filter(A=>A.postId!==e.id);const s=ut(e),b=t.collections.blogPosts(s.isPrivate),g=n.collections.blogReactions(s.isPrivate),x=Ot(b,e.id),S=We(b,Ye("id","==",e.id)),L=We(g,Ye("post","==",x));i.push(J(S,d)),i.push(J(L,d))}),ct(()=>{clearTimeout(o.value),i.forEach(s=>{s()})})},ya=()=>{const e=ye(),t=_(),n=ke(),{visibleBlogPosts:l,isBlogPostDatabaseActionActive:r}=z(e),{isLoggedIn:i}=z(t);let o=[];const d=U(),s=b=>{b.metadata.hasPendingWrites||r.value||(clearTimeout(d.value),d.value=setTimeout(async()=>{l.value.length&&(await e.fetchBlogPosts({amount:l.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};dt(()=>{n.unread=[],o.push(J(e.collections.blogPosts(!1),s)),o.push(J(n.collections.blogReactions(!1),s)),i.value&&(o.push(J(e.collections.blogPosts(!0),s)),o.push(J(n.collections.blogReactions(!0),s)))}),ct(()=>{clearTimeout(d.value),o.forEach(b=>{b()})})},Ce=e=>e?e.clone():new Et,de=At("blogPostDialogStore",()=>{const e=U(!1),t=U(null),n=U(Ce(null)),l=U(!1),r=()=>{t.value=null,n.value=Ce(null),l.value=!1},i=d=>{t.value=d,n.value=Ce(d),e.value=!0},o=()=>{e.value=!1,r()};return we(()=>n.value,()=>{l.value=!Ut(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:l,$reset:r,openWith:i,close:o}}),Kn={class:"flex justify-between gap-3"},Mn={class:"flex flex-col"},Fn={class:"flex gap-2"},Gn=["src"],Wn=["src"],Yn={class:"flex flex-col"},Qn={class:"text-base mt-1 font-bold mb-2"},Xn={key:1,class:"text-base mt-1 font-bold mb-2"},Zn={class:"!text-[var(--p-text-color)] mt-2"},Jn={key:0,class:"flex flex-col gap-2"},et=E({__name:"BlogReaction",props:{post:{},reaction:{}},emits:["deleteClicked"],setup(e,{emit:t}){const n=e,l=t,r=jt(),i=_(),o=xe(),d=ke(),{routeLoading:s,routeLoadingId:b}=z(r),{firebaseUser:g,isLoggedIn:x,isOwner:S}=z(i),{publicUsers:L}=z(o),{isDatabaseDeletionActive:A}=z(d);Ne();const O=w(()=>L.value.find(y=>y.id===n.reaction.userId)),p=w(()=>g.value&&n.reaction.userId===g.value.uid||S.value),k=w(()=>"surface-panel p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary"),$=w(()=>"surface-text-muted text-sm mb-2 xl:whitespace-nowrap");return(y,D)=>{const R=Q("RouterLink");return a(),f(c(he),{id:e.reaction.id,class:N(k.value)},{content:I(()=>[m("div",Kn,[m("div",Mn,[m("div",Fn,[O.value?.avatar&&c(x)?(a(),f(R,{key:0,to:{name:c(X).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:I(()=>[m("img",{class:N(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":c(s)===c(X).USER_DETAILS&&c(b)===O.value?.id}]),src:O.value.avatar},null,10,Gn)]),_:1},8,["to"])):O.value?.avatar?(a(),u("img",{key:1,class:N(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":c(s)===c(X).USER_DETAILS&&c(b)===O.value?.id}]),src:O.value.avatar},null,10,Wn)):q("",!0),m("div",Yn,[c(x)?(a(),f(R,{key:0,to:{name:c(X).USER_DETAILS,params:{userId:e.reaction.userId}},class:"!no-underline hover:!underline"},{default:I(()=>[m("h3",Qn,B(O.value?.displayName||"Onbekende gebruiker"),1)]),_:1},8,["to"])):(a(),u("h3",Xn,B(O.value?.displayName||"Onbekende gebruiker"),1)),m("p",{class:N($.value)},B(c(te)(e.reaction.date)),3)])]),m("p",Zn,B(e.reaction.message),1)]),p.value?(a(),u("div",Jn,[p.value&&!e.post.locked?(a(),f(ne,{key:0,disabled:c(A),onClick:D[0]||(D[0]=P=>l("deleteClicked",e.reaction))},null,8,["disabled"])):q("",!0)])):q("",!0)])]),_:1},8,["id","class"])}}}),_n={class:"grid justify-items-center p-5 gap-5"},el=E({__name:"BlogReactions",props:{post:{}},setup(e){const t=e,n=_(),l=ke(),{firebaseUser:r,isLoggedIn:i}=z(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:d}=z(l);Ne();const s=U(!1),b=U(!1),g=U(null),x=Nt({reaction:""}),L=$e({reaction:{required:yt}},x),A=w(()=>[...t.post.reactions].reverse()),O=w(()=>A.value.filter((C,j)=>j<3)),p=w(()=>A.value.filter((C,j)=>j>=3)),k=w(()=>t.post.locked||!i.value||o.value),$=w(()=>g.value?.message?g.value.message.length>120?`${g.value.message.slice(0,117)}...`:g.value.message:null),y=w(()=>$.value?`Reactie: "${$.value}"`:void 0),D=w(()=>"surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary"),R=w(()=>["!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]",k.value?{"!bg-[var(--p-surface-100)]":!o.value}:"",{"cursor-pointer":!i.value&&!t.post.locked}]),P=async()=>{if(o.value)return;if(!await L.value.$validate()||!r.value){Qe();return}const C=x.reaction;x.reaction="Reactie plaatsen...";const j=await l.createBlogReaction(t.post,new Ht({userId:r.value.uid,postId:t.post.id,message:C}));x.reaction=j?"":C,j&&L.value.$reset(),Qe()};function H(C){g.value=C,b.value=!0}async function G(){if(!g.value)return;await l.deleteBlogReaction(t.post,g.value.id)&&(b.value=!1,g.value=null)}return(C,j)=>(a(),u(V,null,[m("form",{action:"",onSubmit:mt(P,["prevent"])},[m("div",_n,[!c(i)||e.post.reactions.filter(T=>T.userId===c(r).uid).length<20?(a(),f(c(he),{key:0,class:N(D.value)},{content:I(()=>[v(Y,{class:"w-5/6 place-self-center",id:e.post.id,inputProps:{class:R.value,disabled:k.value,autocomplete:"off"},name:"reaction",placeholder:e.post.locked?"Gesloten voor reacties":c(i)?"Reageren":"Log in om te reageren",modelValue:x.reaction,"onUpdate:modelValue":j[0]||(j[0]=T=>x.reaction=T),error:c(L).reaction.$error?c(Re)(c(L).reaction):"",required:"",onClick:j[1]||(j[1]=()=>!c(i)&&!e.post.locked?c(zt).push({name:c(X).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error"])]),_:1},8,["class"])):q("",!0),(a(!0),u(V,null,K(O.value,T=>(a(),f(et,{post:e.post,reaction:T,onDeleteClicked:H},null,8,["post","reaction"]))),256)),(a(!0),u(V,null,K(p.value,T=>Z((a(),f(et,{post:e.post,reaction:T,onDeleteClicked:H},null,8,["post","reaction"])),[[Rt,s.value]])),256)),e.post.reactions.length>3?(a(),f(W,{key:1,outlined:"",icon:s.value?"pi pi-angle-up":"pi pi-angle-down",label:s.value?"Verberg oudere reacties":"Bekijk oudere reacties",onClick:j[2]||(j[2]=T=>s.value=!s.value)},null,8,["icon","label"])):q("",!0)])],32),v(qt,{"is-open":b.value,"onUpdate:isOpen":j[3]||(j[3]=T=>b.value=T),title:"Reactie verwijderen","entity-label":"deze reactie",details:y.value,"confirm-loading":c(d),onConfirm:G,onCancel:j[4]||(j[4]=T=>g.value=null)},null,8,["is-open","details","confirm-loading"])],64))}});var tl=Ie.extend({name:"deferredcontent"}),Fe={name:"DeferredContent",extends:se,inheritAttrs:!1,emits:["load"],style:tl,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,l=n.clientHeight;return l>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function nl(e,t,n,l,r,i){return a(),u("div",h({ref:"container"},e.ptmi("root")),[r.loaded?pt(e.$slots,"default",{key:0}):q("",!0)],16)}Fe.render=nl;var ll=`
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
`,il={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter-active",root:function(t){var n=t.instance,l=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},l,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,l=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(l)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,l=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===l,"p-galleria-thumbnail-item-active":n.isItemActive(l),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===l}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},ol=Ie.extend({name:"galleria",style:ll,classes:il}),al={name:"BaseGalleria",extends:se,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:ol,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function ee(e){return ul(e)||dl(e)||sl(e)||rl()}function rl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sl(e,t){if(e){if(typeof e=="string")return Oe(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oe(e,t):void 0}}function dl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ul(e){if(Array.isArray(e))return Oe(e)}function Oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var $t={name:"GalleriaItem",hostName:"Galleria",extends:se,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=ee(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=ee(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=ee(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return je(i,"data-p-active")===!0}),l=be(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=ee(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=be(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=ee(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:wt,ChevronRightIcon:xt},directives:{ripple:Ue}},cl=["disabled"],ml=["id","aria-label","aria-roledescription"],pl=["disabled"],bl=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],hl=["tabindex"];function fl(e,t,n,l,r,i){var o=Se("ripple");return a(),u("div",h({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[m("div",h({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?Z((a(),u("button",h({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(d){return i.navBackward(d)}),disabled:i.isNavBackwardDisabled},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),f(M(n.templates.previousitemicon||"ChevronLeftIcon"),h({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,cl)),[[o]]):q("",!0),m("div",h({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":i.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":i.ariaSlideLabel},e.ptm("item")),[n.templates.item?(a(),f(M(n.templates.item),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16,ml),n.showItemNavigators?Z((a(),u("button",h({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(d){return i.navForward(d)}),disabled:i.isNavForwardDisabled},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),f(M(n.templates.nextitemicon||"ChevronRightIcon"),h({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,pl)),[[o]]):q("",!0),n.templates.caption?(a(),u("div",h({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(a(),f(M(n.templates.caption),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16)):q("",!0)],16),n.showIndicators?(a(),u("ul",h({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(a(!0),u(V,null,K(n.value,function(d,s){return a(),u("li",h({key:"p-galleria-indicator-".concat(s),class:e.cx("indicator",{index:s}),"aria-label":i.ariaPageLabel(s+1),"aria-selected":n.activeIndex===s,"aria-controls":n.id+"_item_"+s,onClick:function(g){return i.onIndicatorClick(s)},onMouseenter:function(g){return i.onIndicatorMouseEnter(s)},onKeydown:function(g){return i.onIndicatorKeyDown(g,s)}},{ref_for:!0},e.ptm("indicator",i.getIndicatorPTOptions(s)),{"data-p-active":i.isIndicatorItemActive(s)}),[n.templates.indicator?q("",!0):(a(),u("button",h({key:0,type:"button",tabindex:n.activeIndex===s?"0":"-1",class:e.cx("indicatorButton")},{ref_for:!0},e.ptm("indicatorButton",i.getIndicatorPTOptions(s))),null,16,hl)),n.templates.indicator?(a(),f(M(n.templates.indicator),{key:1,index:s,activeIndex:n.activeIndex,tabindex:n.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):q("",!0)],16,bl)}),128))],16)):q("",!0)],16)}$t.render=fl;function Ve(e){return yl(e)||ql(e)||gl(e)||vl()}function vl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(e,t){if(e){if(typeof e=="string")return Ae(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(e,t):void 0}}function ql(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yl(e){if(Array.isArray(e))return Ae(e)}function Ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Pt={name:"GalleriaThumbnails",hostName:"Galleria",extends:se,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Xe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Xe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,l=n+this.totalShiftedItems;this.d_numVisible-l-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var l=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",l),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var l=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-l-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-l,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=Ve(F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(i){return je(i,"data-p-active")===!0}),l=be(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=Ve(F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=be(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&bt(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){var l=10;Math.abs(n)<l||(n<0?this.navForward(t):this.navBackward(t))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",Wt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Ve(this.responsiveOptions);var l=Yt();this.sortedResponsiveOptions.sort(function(o,d){var s=o.breakpoint,b=d.breakpoint;return Qt(s,b,-1,l)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(i.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/i.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},l=0;l<this.sortedResponsiveOptions.length;l++){var r=this.sortedResponsiveOptions[l];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:wt,ChevronRightIcon:xt,ChevronUpIcon:Pn,ChevronDownIcon:Ft},directives:{ripple:Ue}};function le(e){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(n),!0).forEach(function(l){kl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function kl(e,t,n){return(t=wl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wl(e){var t=xl(e,"string");return le(t)=="symbol"?t:t+""}function xl(e,t){if(le(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(le(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Il=["disabled","aria-label"],Sl=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],$l=["tabindex","aria-label","aria-current","onClick"],Pl=["disabled","aria-label"];function Cl(e,t,n,l,r,i){var o=Se("ripple");return a(),u("div",h({class:e.cx("thumbnails")},e.ptm("thumbnails")),[m("div",h({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?Z((a(),u("button",h({key:0,class:e.cx("thumbnailPrevButton"),disabled:i.isNavBackwardDisabled,type:"button","aria-label":i.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(d){return i.navBackward(d)})},me(me({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),f(M(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),h({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Il)),[[o]]):q("",!0),m("div",h({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[m("div",h({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(d){return i.onTransitionEnd(d)}),onTouchstart:t[2]||(t[2]=function(d){return i.onTouchStart(d)}),onTouchmove:t[3]||(t[3]=function(d){return i.onTouchMove(d)}),onTouchend:t[4]||(t[4]=function(d){return i.onTouchEnd(d)})},e.ptm("thumbnailItems")),[(a(!0),u(V,null,K(n.value,function(d,s){return a(),u("div",h({key:"p-galleria-thumbnail-item-".concat(s),class:e.cx("thumbnailItem",{index:s,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===s,"aria-selected":n.activeIndex===s,"aria-controls":n.containerId+"_item_"+s,onKeydown:function(g){return i.onThumbnailKeydown(g,s)}},{ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===s,"data-p-galleria-thumbnail-item-active":i.isItemActive(s),"data-p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===s}),[m("div",h({class:e.cx("thumbnail"),tabindex:n.activeIndex===s?"0":"-1","aria-label":i.ariaPageLabel(s+1),"aria-current":n.activeIndex===s?"page":void 0,onClick:function(g){return i.onItemClick(s)}},{ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(a(),f(M(n.templates.thumbnail),{key:0,item:d},null,8,["item"])):q("",!0)],16,$l)],16,Sl)}),128))],16)],16),n.showThumbnailNavigators?Z((a(),u("button",h({key:1,class:e.cx("thumbnailNextButton"),disabled:i.isNavForwardDisabled,type:"button","aria-label":i.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(d){return i.navForward(d)})},me(me({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),f(M(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),h({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Pl)),[[o]]):q("",!0)],16)],16)}Pt.render=Cl;function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(e)}function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nt(Object(n),!0).forEach(function(l){Vl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Vl(e,t,n){return(t=Ll(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ll(e){var t=Bl(e,"string");return ie(t)=="symbol"?t:t+""}function Bl(e,t){if(ie(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ie(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ct={name:"GalleriaContent",hostName:"Galleria",extends:se,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:lt(lt({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var l=["top","left","bottom","right"],r=l.find(function(i){return i===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:$t,GalleriaThumbnails:Pt,TimesIcon:Mt},directives:{ripple:Ue}};function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?it(Object(n),!0).forEach(function(l){Dl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Dl(e,t,n){return(t=Tl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tl(e){var t=Ol(e,"string");return oe(t)=="symbol"?t:t+""}function Ol(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(oe(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Al=["id","aria-label","aria-roledescription"],El=["aria-label"],Ul=["aria-live"];function jl(e,t,n,l,r,i){var o=Q("GalleriaItem"),d=Q("GalleriaThumbnails"),s=Se("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(a(),u("div",h({key:0,id:e.$id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},ot(ot({},e.$attrs.containerProps),i.getPTOptions("root"))),[e.$attrs.fullScreen?Z((a(),u("button",h({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(b){return e.$emit("mask-hide")})},i.getPTOptions("closeButton")),[(a(),f(M(e.$attrs.templates.closeicon||"TimesIcon"),h({class:e.cx("closeIcon")},i.getPTOptions("closeIcon")),null,16,["class"]))],16,El)),[[s]]):q("",!0),e.$attrs.templates&&e.$attrs.templates.header?(a(),u("div",h({key:1,class:e.cx("header")},i.getPTOptions("header")),[(a(),f(M(e.$attrs.templates.header)))],16)):q("",!0),m("div",h({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},i.getPTOptions("content")),[v(o,{id:e.$id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(b){return r.slideShowActive=b}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:i.startSlideShow,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(a(),f(d,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(b){return r.slideShowActive=b}),containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:i.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):q("",!0)],16,Ul),e.$attrs.templates&&e.$attrs.templates.footer?(a(),u("div",h({key:2,class:e.cx("footer")},i.getPTOptions("footer")),[(a(),f(M(e.$attrs.templates.footer)))],16)):q("",!0)],16,Al)):q("",!0)}Ct.render=jl;var Vt={name:"Galleria",extends:al,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&_e(),this.mask=null,this.container&&(Pe.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){Pe.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),Sn(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&bt(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){Gt(this.target),this.target=null},onAfterLeave:function(t){Pe.clear(t),this.containerVisible=!1,_e(),this.unbindGlobalListeners()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},onKeyDown:function(t){t.code==="Escape"&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:Ct,Portal:Kt},directives:{focustrap:In}},zl=["aria-modal"];function Nl(e,t,n,l,r,i){var o=Q("GalleriaContent"),d=Q("Portal"),s=Se("focustrap");return e.fullScreen?(a(),f(d,{key:0},{default:I(function(){return[r.containerVisible?(a(),u("div",h({key:0,ref:i.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[v(Xt,h({name:"p-galleria",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:I(function(){return[e.visible?Z((a(),f(o,h({key:0,ref:i.containerRef,onMaskHide:i.maskHide,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):q("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,zl)):q("",!0)]}),_:1})):(a(),f(o,h({key:1,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}Vt.render=Nl;var Rl=`
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
`,Hl={handle:{position:"absolute"},range:{position:"absolute"}},Kl={root:function(t){var n=t.instance,l=t.props;return["p-slider p-component",{"p-disabled":l.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":l.orientation==="horizontal","p-slider-vertical":l.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},Ml=Ie.extend({name:"slider",style:Rl,classes:Kl,inlineStyles:Hl}),Fl={name:"BaseSlider",extends:ht,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ml,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function Gl(e,t,n){return(t=Wl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wl(e){var t=Yl(e,"string");return ae(t)=="symbol"?t:t+""}function Yl(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ae(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ql(e){return _l(e)||Jl(e)||Zl(e)||Xl()}function Xl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zl(e,t){if(e){if(typeof e=="string")return Ee(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}function Jl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _l(e){if(Array.isArray(e))return Ee(e)}function Ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Lt={name:"Slider",extends:Fl,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+_t(),this.initY=t.top+en(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,l=t.touches?t.touches[0].pageX:t.pageX,r=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?Jt(this.$el)?n=(this.initX+this.barWidth-l)*100/this.barWidth:n=(l-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(n/100)+this.min;if(this.step){var o=this.range?this.value[this.handleIndex]:this.value,d=i-o;d<0?i=o+Math.ceil(i/this.step-o/this.step)*this.step:d>0&&(i=o+Math.floor(i/this.step-o/this.step)*this.step)}else i=Math.floor(i);this.updateModel(t,i)},updateModel:function(t,n){var l=Math.round(n*100)/100,r;this.range?(r=this.value?Ql(this.value):[],this.handleIndex==0?(l<this.min?l=this.min:l>=this.max&&(l=this.max),r[0]=l):(l>this.max?l=this.max:l<=this.min&&(l=this.min),r[1]=l)):(l<this.min?l=this.min:l>this.max&&(l=this.max),r=l),this.writeValue(r,t),this.$emit("change",r)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||je(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var l,r;(l=(r=this.formField).onBlur)===null||l===void 0||l.call(r,t)},decrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]-this.step:r=this.value[n]-1:this.step?r=this.value-this.step:!this.step&&l?r=this.value-10:r=this.value-1,this.updateModel(t,r),t.preventDefault()},incrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]+this.step:r=this.value[n]+1:this.step?r=this.value+this.step:!this.step&&l?r=this.value+10:r=this.value+1,this.updateModel(t,r),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,l,r,i;return[(n=(l=this.d_value)===null||l===void 0?void 0:l[0])!==null&&n!==void 0?n:this.min,(r=(i=this.d_value)===null||i===void 0?void 0:i[1])!==null&&r!==void 0?r:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Zt(Gl({},this.orientation,this.orientation))}}},ei=["data-p"],ti=["data-p"],ni=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],li=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],ii=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function oi(e,t,n,l,r,i){return a(),u("div",h({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},e.ptmi("root"),{"data-p-sliding":!1,"data-p":i.dataP}),[m("span",h({class:e.cx("range"),style:[e.sx("range"),i.rangeStyle()]},e.ptm("range"),{"data-p":i.dataP}),null,16,ti),e.range?q("",!0):(a(),u("span",h({key:0,class:e.cx("handle"),style:[e.sx("handle"),i.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(o){return i.onDragStart(o)}),onTouchmovePassive:t[1]||(t[1]=function(o){return i.onDrag(o)}),onTouchend:t[2]||(t[2]=function(o){return i.onDragEnd(o)}),onMousedown:t[3]||(t[3]=function(o){return i.onMouseDown(o)}),onKeydown:t[4]||(t[4]=function(o){return i.onKeyDown(o)}),onBlur:t[5]||(t[5]=function(o){return i.onBlur(o)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle"),{"data-p":i.dataP}),null,16,ni)),e.range?(a(),u("span",h({key:1,class:e.cx("handle"),style:[e.sx("handle"),i.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(o){return i.onDragStart(o,0)}),onTouchmovePassive:t[7]||(t[7]=function(o){return i.onDrag(o)}),onTouchend:t[8]||(t[8]=function(o){return i.onDragEnd(o)}),onMousedown:t[9]||(t[9]=function(o){return i.onMouseDown(o,0)}),onKeydown:t[10]||(t[10]=function(o){return i.onKeyDown(o,0)}),onBlur:t[11]||(t[11]=function(o){return i.onBlur(o,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler"),{"data-p":i.dataP}),null,16,li)):q("",!0),e.range?(a(),u("span",h({key:2,class:e.cx("handle"),style:[e.sx("handle"),i.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(o){return i.onDragStart(o,1)}),onTouchmovePassive:t[13]||(t[13]=function(o){return i.onDrag(o)}),onTouchend:t[14]||(t[14]=function(o){return i.onDragEnd(o)}),onMousedown:t[15]||(t[15]=function(o){return i.onMouseDown(o,1)}),onKeydown:t[16]||(t[16]=function(o){return i.onKeyDown(o,1)}),onBlur:t[17]||(t[17]=function(o){return i.onBlur(o,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler"),{"data-p":i.dataP}),null,16,ii)):q("",!0)],16,ei)}Lt.render=oi;const ai=E({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(a(),u("ul",{class:N(["list-disc",{"ms-5":e.alignment==="left"}])},[(a(!0),u(V,null,K(e.bullets,l=>(a(),u("li",null,B(l),1))),256))],2))}}),ri={class:"surface-text-muted text-xs font-semibold uppercase tracking-[0.24em]"},si=E({__name:"BlogPostContentBlockLabel",props:{label:{}},setup(e){return(t,n)=>(a(),u("p",ri,B(e.label),1))}}),di={class:"w-full ql-editor no-input"},ui=["innerHTML"],ci=E({__name:"BlogPostDescription",props:{description:{}},setup(e){return(t,n)=>(a(),u("div",di,[m("div",{innerHTML:e.description},null,8,ui)]))}}),mi={class:"w-full max-w-2xl rounded-primary surface-panel-glass p-4 shadow-sm backdrop-blur-sm"},pi={class:"mb-4 flex items-start justify-between gap-3"},bi={class:"text-lg font-semibold"},hi={key:0,class:"text-sm opacity-75"},fi={key:0,class:"text-sm opacity-75"},vi={key:1,class:"flex flex-col gap-2"},gi={class:"min-w-0 flex-1"},qi={key:2,class:"text-sm opacity-75"},Bt=E({__name:"BlogPostChecklistWidget",props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:["toggle"],setup(e,{emit:t}){const n=e,l=t,{isDarkTheme:r}=Ne(),i=w(()=>n.items.filter(s=>!s.checked).length),o=w(()=>r.value?"line-through text-neutral-400":"line-through text-slate-500"),d=w(()=>r.value?"text-xs text-neutral-400":"text-xs text-slate-500");return(s,b)=>(a(),u("section",mi,[m("div",pi,[m("div",null,[m("h3",bi,B(e.title),1),e.items.length?(a(),u("p",hi,B(`${i.value} open van ${e.items.length}`),1)):q("",!0)])]),e.loading?(a(),u("div",fi," Laden... ")):e.items.length?(a(),u("ul",vi,[(a(!0),u(V,null,K(e.items,g=>(a(),u("li",{key:g.id,class:"flex items-center justify-between gap-3 rounded-2xl surface-panel-glass px-3 py-2"},[m("div",gi,[m("p",{class:N(g.checked?o.value:void 0)},B(g.label),3),g.detail?(a(),u("p",{key:0,class:N(d.value)},B(g.detail),3)):q("",!0)]),v(c(vn),{"model-value":g.checked,disabled:e.disabled,pt:{slider:{class:g.checked?"bg-primary-500":void 0}},"onUpdate:modelValue":x=>l("toggle",g.id,x)},null,8,["model-value","disabled","pt","onUpdate:modelValue"])]))),128))])):(a(),u("p",qi,B(e.emptyLabel),1))]))}}),yi={class:"contents"},ki=E({__name:"BlogPostGroceryListWidget",props:{post:{},title:{}},setup(e){const t=e,n=_(),l=ft(),r=Tn(),i=On(),o=xe(),{sortedProducts:d,getProductLabel:s}=An(),{products:b,isFetchLoading:g,isMutationLoading:x}=z(r),{productShopOptions:S}=z(i),{getHouseHoldUserOptionsNullable:L}=gn(),A=U(null),O=U(!1),p=U(!1),k=U(!1),$=U(!1),y=U(!1);function D(T){return!T.isOutOfStock}const R=w(()=>d.value.filter(T=>T.blogPostIds.includes(t.post.id)).sort((T,ue)=>Number(D(T))-Number(D(ue)))),P=w(()=>R.value.map(T=>({id:T.id,label:s(T),detail:T.getSizeLabel(),checked:D(T)}))),H=w(()=>L(A.value?.houseHoldId,"Onbekend"));async function G(T,ue){if(!n.firebaseUser)return;const ce=b.value.find(Tt=>Tt.id===T);if(!ce)return;if(ue){A.value=ce,O.value=!0;return}const Ge=ce.clone();Ge.isOutOfStock=!0,await r.updateProduct(Ge,`Product "${ce.name}" is niet meer op voorraad.`)}function C(){A.value=null,O.value=!1}async function j(){n.firebaseUser&&!p.value&&(p.value=!0,await l.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!k.value&&!g.value&&(k.value=!0,await r.fetchProducts()),n.firebaseUser&&!$.value&&!S.value.length&&($.value=!0,await i.fetchProductShops()),n.firebaseUser&&!y.value&&!o.publicUsers.length&&(y.value=!0,await o.fetchPublicUsers())}return we(()=>n.firebaseUser?.uid,async T=>{if(!T){p.value=!1,k.value=!1,$.value=!1,y.value=!1;return}await j()},{immediate:!0}),(T,ue)=>(a(),u("div",yi,[v(Bt,{title:e.title||"Boodschappenlijst","empty-label":"Er zijn nog geen producten gekoppeld aan deze blogpost.",items:P.value,loading:c(g),disabled:!c(n).firebaseUser||c(x),onToggle:G},null,8,["title","items","loading","disabled"]),A.value?(a(),f(En,{key:0,"is-open":O.value,mode:"buy-product","user-id-options":H.value,"store-options":c(S),"selected-product":A.value,"confirm-loading":c(x),onClose:C},null,8,["is-open","user-id-options","store-options","selected-product","confirm-loading"])):q("",!0)]))}}),at=E({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(a(),u("div",{class:N(["!p-0 md:!p-3",e.thumb?"w-full":"w-fit !py-5 md:border-none !rounded-none md:!rounded-primary"])},[v(c(Fe),null,{default:I(()=>[e.thumb?(a(),u("div",{key:0,class:"h-[20vh] inset-0 rounded-primary bg-cover bg-center",style:tn({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(a(),f(kt,{key:1,src:e.coverImageUrl,"image-class":["cover-image md:rounded-primary",e.imageClass]},null,8,["src","image-class"]))]),_:1})],2))}}),wi=["innerHTML"],xi=E({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const t=e,n=w(()=>vt(t.tableData)),l=w(()=>n.value.length?n.value[0].map((o,d)=>o||d):[]),r=w(()=>n.value.slice(1).filter(o=>o.some(d=>!!d)).map(o=>{const d={};return l.value.forEach((s,b)=>{d[s]=i(o[b])}),d})),i=o=>{const d=/(https?:\/\/[^\s]+)/g;return o.replace(d,s=>{let b=s.replace("http://","").replace("https://","").replace("www.","");return b.length>15&&(b=b.substring(0,15)+"..."),`<a href="${s}" target="_blank">${b}</a>`})};return(o,d)=>(a(),f(c(Un),{value:r.value,"pt:root":"w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]",showHeaders:l.value.some(s=>typeof s=="string"),removableSort:""},{default:I(()=>[(a(!0),u(V,null,K(l.value,(s,b)=>(a(),f(c(jn),{key:s,field:g=>g[s],header:typeof s=="string"?s:"",sortable:""},{body:I(({data:g})=>[m("span",{class:N(["text-nowrap",[{"font-bold":b===0},{"text-left":e.alignment==="left"||!e.alignment,"text-center":e.alignment==="center","text-right":e.alignment==="right"}]]),innerHTML:g[s]},null,10,wi)]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","showHeaders"]))}}),Ii=E({__name:"BlogPostTasksWidget",props:{post:{},title:{}},setup(e){const t=e,n=_(),l=ft(),r=Cn(),{sortedTasks:i}=Vn(),{tasks:o,isFetchLoading:d,isMutationLoading:s}=z(r),b=U(!1),g=U(!1);function x(p){return p.wasExecutedOnDate(new Date)}const S=w(()=>i.value.filter(p=>p.blogPostIds.includes(t.post.id)).sort((p,k)=>Number(x(p))-Number(x(k)))),L=w(()=>S.value.map(p=>({id:p.id,label:p.name,checked:x(p)})));async function A(p,k){if(!n.firebaseUser)return;const $=o.value.find(P=>P.id===p);if(!$)return;const y=$.clone();if(k){y.executeLog.push(new Ln({executors:[n.firebaseUser.uid]})),await r.updateTask(y,`Taak "${$.name}" uitgevoerd`);return}const D=nn(new Date).getTime(),R=ln(new Date).getTime();for(let P=y.executeLog.length-1;P>=0;P--){const H=y.executeLog[P];if(H.date.getTime()>=D&&H.date.getTime()<=R&&H.executors.includes(n.firebaseUser.uid)){y.executeLog.splice(P,1),await r.updateTask(y,`Taak "${$.name}" teruggezet`);break}}}async function O(){n.firebaseUser&&!g.value&&(g.value=!0,await l.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!b.value&&!d.value&&(b.value=!0,await r.fetchTasks())}return we(()=>n.firebaseUser?.uid,async p=>{if(!p){g.value=!1,b.value=!1;return}await O()},{immediate:!0}),(p,k)=>(a(),f(Bt,{title:e.title||"Taken","empty-label":"Er zijn nog geen taken gekoppeld aan deze blogpost.",items:L.value,loading:c(d),disabled:!c(n).firebaseUser||c(s),onToggle:A},null,8,["title","items","loading","disabled"]))}}),Si={class:"text-2xl font-bold"},$i=E({__name:"BlogPostTitle",props:{title:{}},setup(e){return(t,n)=>(a(),u("h2",Si,B(e.title),1))}}),Pi={key:2,class:"w-full flex flex-col gap-1 items-center"},Ci={key:0},Vi={key:0,class:"font-bold text-lg md:text-2xl"},Li={key:1,class:"font-bold"},Bi={key:1},Di=E({__name:"BlogPostContent",props:{post:{},block:{}},setup(e){const t=e,n=w(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type==="title"),l=w(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type==="title"),r=w(()=>t.block.isWidget()||t.block.isGroup()?"":t.block.label?.trim()??"");return(i,o)=>{const d=Q("BlogPostContent",!0);return a(),u("div",{class:N(["flex flex-col",{"items-start":e.block.alignment==="left","items-center":e.block.alignment==="center"||!e.block.alignment,"items-end":e.block.alignment==="right"}])},[r.value?(a(),f(si,{key:0,label:r.value},null,8,["label"])):q("",!0),e.block.isBoolean()?(a(),f(c(Dn),{key:1,modelValue:e.block.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.block.value=s),onLabel:"True",offLabel:"False",onIcon:"pi pi-check",offIcon:"pi pi-times",disabled:""},null,8,["modelValue"])):e.block.isNumber()?(a(),u("div",Pi,[v(c(Bn),{class:"w-full",value:e.block.value},null,8,["value"]),e.block.value?q("",!0):(a(),u("span",Ci,B(e.block.value)+"% ",1))])):e.block.isString()?(a(),u(V,{key:3},[e.block.type==="title"?(a(),f($i,{key:0,title:e.block.value},null,8,["title"])):e.block.type==="richtext"?(a(),f(ci,{key:1,description:e.block.value},null,8,["description"])):e.block.type==="table"?(a(),f(xi,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,["tableData","alignment"])):e.block.type==="coverimage"?(a(),f(at,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,["post","cover-image-url"])):e.block.type==="image"?(a(),f(at,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":"!max-h-[50vh] !max-w-[50vw]"},null,8,["post","cover-image-url"])):q("",!0)],64)):e.block.isStringList()?(a(),u(V,{key:4},[e.block.type==="bulletlist"?(a(),f(ai,{key:0,bullets:e.block.value},null,8,["bullets"])):e.block.type==="imageslider"?(a(),f(c(Fe),{key:1},{default:I(()=>[v(c(Vt),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:I(s=>[v(kt,{src:s.item,"image-class":"aspect-square object-cover w-3/4 place-self-center rounded-2xl"},null,8,["src"])]),_:1},8,["value"])]),_:1})):q("",!0)],64)):e.block.isDate()?(a(),u(V,{key:5},[e.block.type==="date"?(a(),u(V,{key:0},[Le(B(e.block.value?c(te)(e.block.value):"Geen datum beschikbaar"),1)],64)):e.block.type==="countdown"?(a(),u(V,{key:1},[e.block.value?(a(),f(Je,{key:0,time:new Date(e.block.value).getTime(),direction:"down"},null,8,["time"])):q("",!0)],64)):e.block.type==="timer"?(a(),u(V,{key:2},[e.block.value?(a(),f(Je,{key:0,time:new Date(e.block.value).getTime(),direction:"up"},null,8,["time"])):q("",!0)],64)):q("",!0)],64)):e.block.isButton()?(a(),f(W,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,["label","href","severity"])):e.block.isWidget()?(a(),u(V,{key:7},[e.block.type==="tasks"?(a(),f(Ii,{key:0,post:e.post,title:e.block.label},null,8,["post","title"])):e.block.type==="grocerylist"?(a(),f(ki,{key:1,post:e.post,title:e.block.label},null,8,["post","title"])):q("",!0)],64)):e.block.isGroup()?(a(),f(c(He),{key:8,class:"w-full",onTabOpen:c(ze)},{default:I(()=>[v(c(ve),{value:"0",disabled:!e.block.value.length},{default:I(()=>[v(c(ge),{class:N(["px-0 bg-transparent !border-none",{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:I(()=>[m("div",null,[n.value?(a(),u(V,{key:0},[n.value?(a(),u("p",Vi,B(e.block.value[0].value),1)):q("",!0),l.value?(a(),u("p",Li,B(e.block.value[1].value),1)):q("",!0)],64)):e.block.value.length?(a(),u("p",Bi,B(e.block.label||"Klik om te openen"),1)):q("",!0)])]),_:1},8,["class","pt"]),v(c(qe),{pt:{content:{class:"flex flex-col gap-3"}}},{default:I(()=>[(a(!0),u(V,null,K(e.block.value.slice(l.value?2:n.value?1:0),s=>(a(),f(d,{key:s.id,post:e.post,block:s},null,8,["post","block"]))),128))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["onTabOpen"])):q("",!0)],2)}}}),Ti={class:"flex flex-wrap justify-end h-fit gap-3"},Oi=E({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(t,n)=>(a(),u("div",Ti,[v(Te,{onClick:n[0]||(n[0]=l=>t.$emit("editClicked"))}),v(ne,{onClick:n[1]||(n[1]=l=>t.$emit("deleteClicked"))})]))}}),Ai={class:"p-5 md:p-10"},Ei={class:"flex justify-between gap-3"},Ui={class:"flex flex-col"},ji={class:"text-2xl font-bold mb-2"},zi={key:0,class:"flex flex-wrap gap-2 mb-2"},Ni={class:"surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap"},Ri={class:"flex justify-between h-fit mt-2 gap-2"},Hi={class:"flex flex-wrap gap-3"},Ki={class:"flex flex-col gap-3"},ka=E({__name:"BlogPost",props:{post:{}},setup(e){const t=e,n=on(),l=_(),r=xe(),i=ye(),o=de(),{publicUsers:d}=z(r),{firebaseUser:s,isOwner:b}=z(l),{deleteBlogPost:g}=i,x=U(!1);n.currentRoute.value.name!==X.BLOG&&Hn(t.post);const S=w(()=>t.post.allowedUserIds?.length?d.value.filter(P=>t.post.allowedUserIds?.includes(P.id)):[]),L=w(()=>{const P=te(t.post.date);return t.post.dateUpdated?P+` - aangepast ${te(t.post.dateUpdated)}`:P}),A=w(()=>{const P=[];return t.post.datePinned&&P.push({value:"Vastgemaakt",severity:"success",rounded:!1}),t.post.locked&&P.push({value:"Gesloten",severity:"danger",rounded:!1,icon:"pi pi-lock"}),t.post.archived&&P.push({value:"Gearchiveerd",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),P}),O=w(()=>["surface-panel !rounded-primary overflow-hidden"]),p=w(()=>"surface-panel-glass h-fit !p-0 !px-4 !py-1"),k=w(()=>"surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3"),$=()=>{o.openWith(t.post)},y=()=>{x.value=!0},D=async()=>{await g(t.post.id)&&(x.value=!1)},R=()=>{const P=document.createElement("textarea"),{protocol:H,hostname:G,port:C}=window.location,j=`${H}//${G}`+(G==="localhost"?`:${C}`:"");P.value=`${j}#${an.BLOG.path}/${t.post.id}`,document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),Be.success("Link gekopieerd!")};return(P,H)=>{const G=Q("RouterLink");return a(),u(V,null,[v(c(he),{id:e.post.id,class:N(O.value)},{content:I(()=>[m("div",Ai,[m("div",Ei,[m("div",Ui,[v(G,{to:{name:c(X).BLOG_DETAILS,params:{postId:e.post.id}},class:"!no-underline hover:!underline"},{default:I(()=>[m("h2",ji,B(e.post.title),1)]),_:1},8,["to"]),A.value.length?(a(),u("div",zi,[(a(!0),u(V,null,K(A.value,C=>(a(),f(c(xn),{key:`${C.value}-${C.icon??""}`,class:"h-fit p-2",value:C.value,severity:C.severity,rounded:C.rounded!==!1,icon:C.icon,pt:C.pt},null,8,["value","severity","rounded","icon","pt"]))),128))])):q("",!0),m("p",Ni,B(L.value),1)]),v(W,{class:"h-fit",severity:"secondary",icon:"pi pi-copy",onClick:R})]),m("div",Ri,[m("div",Hi,[(a(!0),u(V,null,K(S.value,C=>(a(),f(c(rn),{key:C.id,class:N(p.value),icon:"pi pi-user",label:C.id===c(s)?.uid?"Jij":C.displayName,rounded:""},null,8,["class","label"]))),128))]),c(b)?(a(),u("div",{key:0,class:N(["flex justify-end ms-5",e.post.allowedUserIds?.length?"flex-col md:flex-row":"flex-row"])},[v(Oi,{onEditClicked:$,onDeleteClicked:y})],2)):q("",!0)]),H[1]||(H[1]=m("div",{class:"mt-5 h-px w-full border-t border-[var(--p-content-border-color)]"},null,-1)),v(c(he),{class:N(k.value)},{content:I(()=>[m("div",Ki,[(a(!0),u(V,null,K(e.post.content,C=>(a(),f(Di,{key:C.id,post:e.post,block:C},null,8,["post","block"]))),128))])]),_:1},8,["class"]),v(el,{post:e.post},null,8,["post"])])]),_:1},8,["id","class"]),v(qt,{"is-open":x.value,"onUpdate:isOpen":H[0]||(H[0]=C=>x.value=C),title:"Verwijder bericht","entity-label":`het bericht '${e.post.title}'`,onConfirm:D},null,8,["is-open","entity-label"])],64)}}}),Mi={class:"block text-sm font-bold mb-2"},Fi={class:"background-gray-dark rounded-2xl"},Gi={class:"grid grid-cols-6 items-center"},Wi=E({__name:"ImageSliderField",props:De({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=gt(e,"modelValue"),n=r=>{t.value.splice(r,1)},l=(r,i)=>{t.value[r]=i};return(r,i)=>(a(),u("div",null,[m("p",Mi,B(e.label),1),m("div",Fi,[v(c(Me),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o),itemKey:"index",handle:".drag-handle"},{item:I(({element:o,index:d})=>[m("div",Gi,[i[1]||(i[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),v(St,{class:"col-span-4",id:`${e.name}.${d}`,name:`${e.name}.${d}`,modelValue:o,"blog-post":e.blogPost,"onUpdate:modelValue":s=>l(d,s)},null,8,["id","name","modelValue","blog-post","onUpdate:modelValue"]),v(ne,{onClick:s=>n(d)},null,8,["onClick"])])]),_:1},8,["modelValue"])])]))}});var Yi=`
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
`,Qi={root:function(t){var n=t.instance;return["p-editor",{"p-invalid":n.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Xi=Ie.extend({name:"editor",style:Yi,classes:Qi}),Zi={name:"BaseEditor",extends:ht,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Xi,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function Ji(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(n),!0).forEach(function(l){_i(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function _i(e,t,n){return(t=eo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eo(e){var t=to(e,"string");return re(t)=="symbol"?t:t+""}function to(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var st=(function(){try{return window.Quill}catch{return null}})(),Dt={name:"Editor",extends:Zi,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,n={modules:Ji({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};st?(this.quill=new st(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):sn(()=>import("./c-quill.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(l){l&&dn(t.$refs.editorElement)&&(l.default?t.quill=new l.default(t.$refs.editorElement,n):t.quill=new l(t.$refs.editorElement,n),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var n=this.quill.clipboard.convert({html:t});this.quill.setContents(n)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(n,l,r){if(r==="user"){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();i==="<p><br></p>"&&(i=""),t.writeValue(i),t.$emit("text-change",{htmlValue:i,textValue:o,delta:n,source:r,instance:t.quill})}}),this.quill.on("selection-change",function(n,l,r){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:i,textValue:o,range:n,oldRange:l,source:r,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function no(e,t,n,l,r,i){return a(),u("div",h({class:e.cx("root")},e.ptmi("root")),[m("div",h({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[pt(e.$slots,"toolbar",{},function(){return[m("span",h({class:"ql-formats"},e.ptm("formats")),[m("select",h({class:"ql-header",defaultValue:"0"},e.ptm("header")),[m("option",h({value:"1"},e.ptm("option")),"Heading",16),m("option",h({value:"2"},e.ptm("option")),"Subheading",16),m("option",h({value:"0"},e.ptm("option")),"Normal",16)],16),m("select",h({class:"ql-font"},e.ptm("font")),[m("option",un(cn(e.ptm("option"))),null,16),m("option",h({value:"serif"},e.ptm("option")),null,16),m("option",h({value:"monospace"},e.ptm("option")),null,16)],16)],16),m("span",h({class:"ql-formats"},e.ptm("formats")),[m("button",h({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),m("button",h({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),m("button",h({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),m("span",h({class:"ql-formats"},e.ptm("formats")),[m("select",h({class:"ql-color"},e.ptm("color")),null,16),m("select",h({class:"ql-background"},e.ptm("background")),null,16)],16),m("span",h({class:"ql-formats"},e.ptm("formats")),[m("button",h({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),m("button",h({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),m("select",h({class:"ql-align"},e.ptm("select")),[m("option",h({defaultValue:""},e.ptm("option")),null,16),m("option",h({value:"center"},e.ptm("option")),null,16),m("option",h({value:"right"},e.ptm("option")),null,16),m("option",h({value:"justify"},e.ptm("option")),null,16)],16)],16),m("span",h({class:"ql-formats"},e.ptm("formats")),[m("button",h({class:"ql-link",type:"button"},e.ptm("link")),null,16),m("button",h({class:"ql-image",type:"button"},e.ptm("image")),null,16),m("button",h({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),m("span",h({class:"ql-formats"},e.ptm("formats")),[m("button",h({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),m("div",h({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}Dt.render=no;const lo=["for"],io=E({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,l=w({get:()=>n.modelValue||"",set:s=>{d("update:modelValue",s)}}),r=w(()=>n.label?n.label+(n.required?" *":""):void 0),i=w(()=>n.name+(n.id?`.${n.id}`:"")),o=({instance:s})=>{s.setContents(s.clipboard.convert({html:l.value}))},d=t;return(s,b)=>(a(),u("div",null,[e.label?(a(),u("label",h({key:0,class:"block text-sm font-bold mb-2",for:i.value},e.labelProps),B(r.value),17,lo)):q("",!0),v(c(Dt),h({id:i.value,placeholder:e.placeholder,modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=g=>l.value=g),onLoad:o},e.editorProps),null,16,["id","placeholder","modelValue"]),e.error?(a(),f(wn,{key:1,name:e.name,error:e.error},null,8,["name","error"])):q("",!0)]))}}),oo={class:"p-4 surface-panel-glass rounded-2xl"},ao={key:0},ro={class:"flex gap-3"},so=E({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,l=t,r=U(""),i=w({get:()=>n.modelValue.slice(),set:s=>{l("update:modelValue",s),r.value=""}}),o=(s,b)=>{const g=i.value.slice();g.splice(s,1,b),i.value=g},d=s=>{const b=i.value.slice();b.splice(s,1),i.value=b};return(s,b)=>(a(),u("div",oo,[i.value.length?(a(),f(c(Me),{key:1,modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=g=>i.value=g),itemKey:"index",handle:".drag-handle"},{item:I(({element:g,index:x})=>[m("div",ro,[b[1]||(b[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),v(Y,{class:"w-full",id:`${e.name}.${x}`,name:e.name,"model-value":g,max:200,"delete-button":"","onUpdate:modelValue":S=>o(x,S.toString()),"onUpdate:delete":S=>d(x)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])):(a(),u("p",ao," Er zijn nog geen items toegevoegd. "))]))}}),uo=["for"],co={class:"table w-full"},mo={class:"table-header-group"},po={key:0,class:"table-row"},bo={key:0,class:"table-cell"},ho={class:"table-cell"},fo={class:"table-row-group"},vo={key:0,class:"table-cell"},go={key:1,class:"table-cell"},qo={key:2,class:"table-cell"},yo={class:"table-footer-group"},ko={class:"table-row"},wo={key:0,class:"table-cell"},xo=E({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const n=e,l=t,i=zn(Nn).greaterOrEqual("md"),o=w({get:()=>vt(n.modelValue),set:p=>{l("update:modelValue",Ze(p))}}),d=w(()=>n.name+(n.id?"."+n.id:"")),s=w(()=>i.value&&o.value[0]?.length<2),b=(p,k,$)=>{const y=[...o.value];y[p][k]=$,l("update:modelValue",Ze(y))},g=()=>{const p=o.value;if(p.length){const k=p[0];k.length?o.value=[...p,k.map(()=>"")]:o.value=[...p,[""]]}else o.value=[[""]]},x=p=>{const k=o.value;if(k.length){const $=k[0];k.splice(p,0,$.map(()=>"")),o.value=[...k]}},S=p=>{o.value.splice(p,1),o.value=o.value},L=()=>{o.value=o.value.map(p=>[...p,""])},A=p=>{const k=o.value;for(const $ of k)$.splice(p,0,"");o.value=[...k]},O=p=>{o.value=o.value.map(k=>(k.splice(p,1),k))};return(p,k)=>(a(),u("div",null,[e.label?(a(),u("label",h({key:0,class:"block text-sm font-bold mb-2",for:d.value},e.labelProps),B(e.label),17,uo)):q("",!0),m("div",co,[m("div",mo,[o.value.length&&o.value[0].length>1?(a(),u("div",po,[o.value.length>1?(a(),u("div",bo)):q("",!0),(a(!0),u(V,null,K(o.value[0],($,y)=>(a(),u("div",ho,[o.value.length&&o.value[0].length?(a(),f(W,{key:0,class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove column":void 0,onClick:D=>O(y)},null,8,["label","onClick"])):q("",!0)]))),256))])):q("",!0)]),m("div",fo,[(a(!0),u(V,null,K(o.value,($,y)=>(a(),u("div",{key:y,class:"table-row"},[o.value.length>1?(a(),u("div",vo,[v(W,{class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove row":void 0,onClick:D=>S(y)},null,8,["label","onClick"])])):q("",!0),(a(!0),u(V,null,K($,(D,R)=>(a(),f(Y,{key:R,class:"table-cell !m-0",name:`${e.name}.${y}.${R}`,modelValue:D,placeholder:y===0||R===0?"header":"cell","onUpdate:modelValue":P=>b(y,R,P.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),y===0?(a(),u("div",go,[v(W,{class:"md:text-start text-nowrap !text-white",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add column":void 0,onClick:L},null,8,["label"])])):(a(),u("div",qo,[v(W,{class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:D=>x(y)},null,8,["label","onClick"])]))]))),128))]),m("div",yo,[m("div",ko,[o.value.length>1?(a(),u("div",wo)):q("",!0),(a(!0),u(V,null,K(o.value[0],($,y)=>(a(),u("div",{class:"table-cell",key:y},[y===0?(a(),f(W,{key:0,class:"md:text-start text-nowrap !text-white",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add row":void 0,onClick:g},null,8,["label"])):(a(),f(W,{key:1,class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:D=>A(y)},null,8,["label","onClick"]))]))),128))])])])]))}}),Io={class:"flex flex-col gap-4"},So={key:1,class:"w-full flex flex-col items-center gap-3 justify-center"},$o={key:5,class:"flex flex-col gap-4 md:flex-row"},Po={key:6,class:"rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80"},Co=E({__name:"BlogPostContentBlockEditor",props:{content:{},id:{}},setup(e){const t=e,n=de(),{blogPostOriginal:l}=z(n),r=()=>{t.content.isStringList()&&t.content.value.push("")};return(i,o)=>(a(),u("div",Io,[e.content.isBoolean()?(a(),f(pe,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.isNumber()?(a(),u("div",So,[v(c(Lt),{class:"w-full",name:e.content.id,modelValue:e.content.value,"onUpdate:modelValue":o[1]||(o[1]=d=>e.content.value=d)},null,8,["name","modelValue"]),m("p",null,B(e.content.value)+"%",1)])):e.content.isString()?(a(),u(V,{key:2},[e.content.type==="title"?(a(),f(Y,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[2]||(o[2]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="richtext"?(a(),f(io,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[3]||(o[3]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="table"?(a(),f(xo,{key:2,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[4]||(o[4]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="coverimage"||e.content.type==="image"?(a(),f(St,{key:3,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[5]||(o[5]=d=>e.content.value=d),"blog-post":c(l)},null,8,["name","label","modelValue","blog-post"])):q("",!0)],64)):e.content.isStringList()?(a(),u(V,{key:3},[e.content.type==="bulletlist"?(a(),f(so,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[6]||(o[6]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="imageslider"?(a(),f(Wi,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[7]||(o[7]=d=>e.content.value=d),"blog-post":c(l)},null,8,["name","label","modelValue","blog-post"])):q("",!0),v(It,{class:"w-fit",label:"Item toevoegen",onClick:r})],64)):e.content.isDate()?(a(),f($n,{key:4,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[8]||(o[8]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.isButton()?(a(),u("div",$o,[v(Y,{class:"w-full",name:`${e.content.id}-title`,label:"Knop titel",modelValue:e.content.value.title,"onUpdate:modelValue":o[9]||(o[9]=d=>e.content.value.title=d)},null,8,["name","modelValue"]),v(Y,{class:"w-full",name:`${e.content.id}-url`,label:"Knop link",modelValue:e.content.value.url,"onUpdate:modelValue":o[10]||(o[10]=d=>e.content.value.url=d)},null,8,["name","modelValue"]),v(fe,{class:"w-full",name:`${e.content.id}-severity`,label:"Knop kleur",modelValue:e.content.value.severity,"onUpdate:modelValue":o[11]||(o[11]=d=>e.content.value.severity=d),options:[{value:"primary",label:"Primair"},{value:"secondary",label:"Secundair"},{value:"help",label:"Help"}]},null,8,["name","modelValue"])])):e.content.isWidget()?(a(),u("div",Po," Deze widget toont automatisch de gekoppelde "+B(e.content.getLabel().toLowerCase())+" van deze blogpost. Het label overschrijft de standaardtitel in de widget. ",1)):q("",!0),v(Y,{name:`${e.content.id}-label`,label:"Label",modelValue:e.content.label,"onUpdate:modelValue":o[12]||(o[12]=d=>e.content.label=d)},null,8,["name","modelValue"]),v(fe,{name:`${e.content.id}-alignment`,label:"Uitlijning","model-value":e.content.alignment??"center","onUpdate:modelValue":o[13]||(o[13]=d=>e.content.alignment=d),options:c(mn)},null,8,["name","model-value","options"])]))}}),Vo=E({__name:"BlogPostContentBlockMutationDialog",props:{isOpen:{type:Boolean},content:{},id:{}},emits:["close"],setup(e,{emit:t}){const n=t;return(l,r)=>e.content?(a(),f(Ke,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:"Waarde, uitlijning en optionele label van dit contentblok.","confirm-text":"Sluiten","hide-cancel-button":"",onConfirm:r[0]||(r[0]=i=>n("close"))},{default:I(()=>[v(Co,{id:e.id,content:e.content},null,8,["id","content"])]),_:1},8,["is-open","title"])):q("",!0)}}),Lo={class:"w-full flex flex-col gap-3"},Bo={key:0,class:"pointer-events-none absolute inset-0 flex items-center justify-center rounded-primary border border-dashed border-surface-300 px-4 py-6 text-center text-sm surface-text-muted"},Do={class:"surface-panel-soft rounded-primary px-3 py-2"},To={class:"flex w-full items-center justify-between gap-3"},Oo={class:"flex gap-5"},Ao={class:"flex flex-col items-start"},Eo={class:"font-semibold"},Uo={class:"surface-text-muted text-sm"},jo={key:1,class:"w-full flex items-center gap-3 justify-between"},zo={class:"flex items-center gap-5"},No={class:"flex flex-col items-start"},Ro={class:"font-semibold"},Ho={class:"surface-text-muted text-sm"},Ko={class:"flex flex-col gap-1"},Mo={class:"mt-3 flex flex-wrap gap-3 justify-center"},Fo={class:"flex flex-col justify-center items-center gap-3"},Go=E({__name:"BlogPostContentBlocksDialog",props:De({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:De(["delete"],["update:modelValue"]),setup(e){const t=gt(e,"modelValue"),n=U("title"),l=U(null),r=U(!1),i=()=>{const p=bn.createInstance(hn(),n.value,n.value,"center");t.value.push(p),l.value=p.id,r.value=!1},o=p=>{const k=t.value.findIndex($=>$.id===p);t.value.splice(k,1)},d=w(()=>t.value.find(p=>p.id===l.value)??null),s={name:"blog-post-content",pull:!0,put:!0},b=p=>{l.value=p},g=()=>{l.value=null},x=()=>{r.value=!0},S=()=>{r.value=!1},L=p=>{const k=p.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return k.length>80?`${k.slice(0,77)}...`:k},A=p=>p.label?`${p.label} (${p.getLabel().toLowerCase()})`:p.getLabel(),O=p=>p.isGroup()?p.value.length?p.value.length===1?"1 onderdeel":`${p.value.length} onderdelen`:"Lege sectie":p.isBoolean()?p.value?"Ingeschakeld":"Uitgeschakeld":p.isNumber()?`${p.value}%`:p.isString()?p.type==="coverimage"||p.type==="image"?p.value?"Afbeelding geselecteerd":"Nog geen afbeelding geselecteerd":p.value?L(p.value):"Nog geen inhoud ingevuld":p.isStringList()?p.value.length?`${p.value.length} items`:"Nog geen items toegevoegd":p.isDate()?p.value?te(new Date(p.value)):"Nog geen datum geselecteerd":p.isButton()?p.value.title||p.value.url||"Nog geen knop ingevuld":p.isWidget()?`Widget: ${p.getLabel().toLowerCase()}`:p.getLabel();return(p,k)=>{const $=Q("BlogPostContentBlocksDialog",!0);return a(),u("div",Lo,[m("div",{class:N(["relative",{"min-h-24":!t.value.length}])},[t.value.length?q("",!0):(a(),u("div",Bo," Sleep content hierheen om deze sectie te vullen. ")),v(c(Me),{ref:"draggableRef",class:N(["relative flex flex-col gap-3",{"min-h-24":!t.value.length}]),modelValue:t.value,"onUpdate:modelValue":k[1]||(k[1]=y=>t.value=y),itemKey:y=>y.id,group:s,handle:".drag-handle"},{item:I(({element:y})=>[m("div",Do,[y.isGroup()?(a(),f(c(He),{key:0,class:"w-full",onTabOpen:c(ze)},{default:I(()=>[v(c(ve),{value:"0"},{default:I(()=>[v(c(ge),{class:"drag-handle"},{default:I(()=>[m("div",To,[m("div",Oo,[k[3]||(k[3]=m("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),m("div",Ao,[m("p",Eo,B(A(y)),1),m("p",Uo,B(O(y)),1)])]),m("div",{class:"flex gap-1 mr-3",onClick:k[0]||(k[0]=mt(()=>{},["stop"]))},[v(Te,{onClick:D=>b(y.id)},null,8,["onClick"]),v(ne,{onClick:D=>o(y.id)},null,8,["onClick"])])])]),_:2},1024),v(c(qe),null,{default:I(()=>[v($,{id:y.id,modelValue:y.value,"onUpdate:modelValue":D=>y.value=D,onDelete:D=>o(y.id)},null,8,["id","modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onTabOpen"])):(a(),u("div",jo,[m("div",zo,[k[4]||(k[4]=m("i",{class:"drag-handle pi pi-arrows-v hover:cursor-pointer"},null,-1)),m("div",No,[m("p",Ro,B(A(y)),1),m("p",Ho,B(O(y)),1)])]),m("div",Ko,[v(Te,{onClick:D=>b(y.id)},null,8,["onClick"]),v(ne,{onClick:D=>o(y.id)},null,8,["onClick"])])]))])]),_:1},8,["class","modelValue","itemKey"])],2),v(Vo,{id:e.id,"is-open":!!d.value,content:d.value,onClose:g},null,8,["id","is-open","content"]),m("div",Mo,[v(It,{label:"Voeg content toe",onClick:x})]),v(Ke,{"is-open":r.value,title:"Content toevoegen",description:"Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.",onCancel:S,onConfirm:i,"confirm-text":"Toevoegen"},{default:I(()=>[m("div",Fo,[v(fe,{class:"w-full md:w-1/2",name:`${e.id}.contentType`,label:"Content type",modelValue:n.value,"onUpdate:modelValue":k[2]||(k[2]=y=>n.value=y),options:Object.entries(c(pn)).map(([y,D])=>({value:y,label:D}))},null,8,["name","modelValue","options"])])]),_:1},8,["is-open"])])}}}),Wo=E({__name:"BlogPostContentDialog",emits:["update:selected"],setup(e){const t=de(),{blogPostMutation:n}=z(t),l=w(()=>({title:{required:yt,minLength:yn(3),maxLength:qn(50)}})),r=$e(l,n);return(i,o)=>(a(),u(V,null,[v(Y,{class:"w-full",name:"title",label:"Titel",placeholder:"Geweldige Post",modelValue:c(n).title,"onUpdate:modelValue":o[0]||(o[0]=d=>c(n).title=d),error:c(r).title.$error?c(Re)(c(r).title):"",required:"","min-length":3,"max-length":50},null,8,["modelValue","error"]),v(Go,{modelValue:c(n).content,"onUpdate:modelValue":o[1]||(o[1]=d=>c(n).content=d)},null,8,["modelValue"])],64))}}),Yo=E({__name:"BlogPostSettingsDialog",setup(e){const t=xe(),n=de(),{blogPostMutation:l}=z(n),{allowedPublicUsers:r}=t,{mappedUsers:i}=Rn(),o=w({get(){return!!l.value.datePinned},set(x){l.value.datePinned=x?new Date:null}}),d=U([]),s=kn.withMessage("Invalid user ID's",x=>!x.length||x.length===d.value.length),b=w(()=>({allowedUserIds:{validAllowedUserIds:s}})),g=$e(b,l);return we(()=>l.value.allowedUserIds,async x=>{d.value=await r(x)},{immediate:!0}),(x,S)=>(a(),u(V,null,[v(fe,{class:"w-full md:w-1/2",name:"allowedUserIds",label:"Toegestane gebruikers",placeholder:"Dit bericht is openbaar",modelValue:c(l).allowedUserIds,"onUpdate:modelValue":S[0]||(S[0]=L=>c(l).allowedUserIds=L),error:c(g).allowedUserIds.$error?c(Re)(c(g).allowedUserIds):"",options:c(i),multiple:""},null,8,["modelValue","error","options"]),v(pe,{class:"w-full md:w-1/2",name:"pinned",label:"Vastgemaakt",modelValue:o.value,"onUpdate:modelValue":S[1]||(S[1]=L=>o.value=L)},null,8,["modelValue"]),v(pe,{class:"w-full md:w-1/2",name:"locked",label:"Gesloten voor reacties",modelValue:c(l).locked,"onUpdate:modelValue":S[2]||(S[2]=L=>c(l).locked=L)},null,8,["modelValue"]),v(pe,{class:"w-full md:w-1/2",name:"archived",label:"Gearchiveerd",modelValue:c(l).archived,"onUpdate:modelValue":S[3]||(S[3]=L=>c(l).archived=L)},null,8,["modelValue"])],64))}}),Qo={ref:"dialog",class:"pt-6 mb-4 xl:px-16"},wa=E({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:t}){const n=t,l=ye(),r=fn(),i=de(),{isBlogPostsMutationLoading:o}=z(l),{isOpen:d,blogPostOriginal:s,blogPostMutation:b,hasChanges:g}=z(i),x=$e(),S=w(()=>!!s.value?.allowedUserIds?.length&&!b.value.allowedUserIds?.length||!s.value?.allowedUserIds?.length&&!!b.value.allowedUserIds?.length),L=w(()=>ut(s.value)),A=async()=>{await x.value.$validate()&&(s.value?S.value?(i.isOpen=!1,await l.toggleBlogPostVisibility(s.value,b.value.allowedUserIds.length?"private":"public")&&(i.close(),Be.success("Zichtbaarheid van bericht succesvol bijgewerkt"),n("scroll-to-updated",b.value.id))):await l.updateBlogPost(b.value,L.value)&&(Be.success("Bericht succesvol bijgewerkt"),i.close(),n("scroll-to-updated",b.value.id)):await l.createBlogPost(b.value)&&(i.close(),n("scroll-to-updated",b.value.id)))},O=async()=>{await r.deleteFilesOfBlogPost(b.value,s.value??void 0),i.close()};return(p,k)=>(a(),f(Ke,{isOpen:c(d),title:c(s)?"Bericht bijwerken":"Bericht maken",description:c(s)?"Werk dit bericht bij":"Maak een nieuw bericht","confirm-text":c(s)?"Bijwerken":"Maken","confirm-loading":c(o),"confirm-props":{disabled:!c(g)},onConfirm:A,onCancel:O},{default:I(()=>[m("form",Qo,[c(d)?(a(),f(c(He),{key:0,"active-index":0,onTabOpen:c(ze)},{default:I(()=>[v(c(ve),{value:"content"},{default:I(()=>[v(c(ge),null,{default:I(()=>[...k[0]||(k[0]=[Le(" Content ",-1)])]),_:1}),v(c(qe),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:I(()=>[v(Wo)]),_:1})]),_:1}),v(c(ve),{value:"settings"},{default:I(()=>[v(c(ge),null,{default:I(()=>[...k[1]||(k[1]=[Le(" Instellingen ",-1)])]),_:1}),v(c(qe),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:I(()=>[v(Yo)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):q("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading","confirm-props"]))}});export{ka as _,wa as a,de as b,Oi as c,Di as d,ya as u};
