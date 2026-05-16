const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-Bb0L4R7Y.js","./c-vuedraggable.umd-DgCmzx0j.js","../bundle.js","../bundle6.css"])))=>i.map(i=>d[i]);
import{a as qe,a0 as ye,s as E,l as lt,a8 as it,a9 as Pt,aa as Re,ab as Ne,ac as Z,ad as at,j as we,D as U,ae as $t,Q as ot,af as Vt,Y as Ct,d as O,u as Lt,E as Oe,q as W,b as a,g as f,f as u,n as j,w as x,e as m,R as Q,c,y as g,t as T,K as me,i as I,F as V,p as Bt,h as v,a4 as Dt,r as z,k as Tt,ag as X,ah as Ot,ai as Ke,aj as At,ak as ke,al as de,S as rt,am as b,an as Et,ao as Ae,ap as Ut,aq as jt,ar as Pe,as as zt,at as st,au as Rt,av as Nt,aw as Kt,ax as F,ay as be,az as Ee,aA as Me,aB as xe,aC as H,aD as Mt,aE as dt,aF as Ht,aG as Ft,aH as Gt,aI as Wt,aJ as Qt,aK as ut,B as he,aL as fe,m as Yt,a5 as Xt,a6 as Ce,a3 as Jt,U as ct,V as Le,aM as Zt,aN as _t,aO as en,aP as tn,aQ as He,aR as Fe,aS as nn,aT as ln,aU as an,aV as on}from"../bundle.js";import{s as ve,a as Ie,_ as M,d as rn,b as ee}from"./c-index-vM0EO5P_.js";import{_ as pt}from"./c-DeleteDialog.vue_vue_type_script_setup_true_lang-DPkiEW18.js";import{_ as Y}from"./c-TextField.vue_vue_type_script_setup_true_lang-BnR6vUpn.js";import{u as mt,c as pe}from"./c-Page.vue_vue_type_script_setup_true_lang-DonXbKR1.js";import{u as Se,r as bt,f as Ue,m as sn,a as dn,d as un}from"./c-index-BUEvgqwG.js";import{s as cn}from"./c-index-BXaVxPnY.js";import{_ as Ge}from"./c-Countdown.vue_vue_type_script_setup_true_lang-DmOw3HKb.js";import{_ as ht}from"./c-Image.vue_vue_type_script_setup_true_lang-C3Ufy56X.js";import{c as te,a as ne,b as le,s as ge}from"./c-index-D_qmOlXX.js";import{F as pn,u as We,b as mn,_ as bn}from"./c-Dialog.vue_vue_type_script_setup_true_lang-tnesKXe5.js";import{s as ft,_ as hn}from"./c-DateField.vue_vue_type_script_setup_true_lang-CNtLPybq.js";import{s as vt}from"./c-index-DktuHpR4.js";import{s as fn}from"./c-index-D6uqzX1D.js";import{s as vn}from"./c-index-CIkvq7Wh.js";import{s as gn}from"./c-index-CrR83IRp.js";import{s as qn,a as yn}from"./c-index-AIURidVr.js";import{_ as gt}from"./c-EditButton.vue_vue_type_script_setup_true_lang-DtPzrvZX.js";import{_ as wn}from"./c-CreateButton.vue_vue_type_script_setup_true_lang-Bc4-ZVAw.js";import{_ as qt}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-DnRRb2ez.js";import{D as je}from"./c-vuedraggable.umd-DgCmzx0j.js";import{u as kn,b as xn}from"./c-index-swRqQCzB.js";import{u as In}from"./c-useUsers-BuNxwbpU.js";const Sn=e=>{const t=qe(),n=ye(),{previousCurrentBlogPost:l,isBlogPostDatabaseActionActive:r}=E(t);let i=[];const o=U(),p=s=>{s.metadata.hasPendingWrites||r.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(l.value,!0)},200))};lt(async()=>{n.unread=n.unread.filter(d=>d.postId!==e.id);const s=it(e),h=t.collections.blogPosts(s.isPrivate),y=n.collections.blogReactions(s.isPrivate),w=Pt(h,e.id),k=Re(h,Ne("id","==",e.id)),C=Re(y,Ne("post","==",w));i.push(Z(k,p)),i.push(Z(C,p))}),at(()=>{clearTimeout(o.value),i.forEach(s=>{s()})})},$a=()=>{const e=qe(),t=we(),n=ye(),{visibleBlogPosts:l,isBlogPostDatabaseActionActive:r}=E(e),{isLoggedIn:i}=E(t);let o=[];const p=U(),s=h=>{h.metadata.hasPendingWrites||r.value||(clearTimeout(p.value),p.value=setTimeout(async()=>{l.value.length&&(await e.fetchBlogPosts({amount:l.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};lt(()=>{n.unread=[],o.push(Z(e.collections.blogPosts(!1),s)),o.push(Z(n.collections.blogReactions(!1),s)),i.value&&(o.push(Z(e.collections.blogPosts(!0),s)),o.push(Z(n.collections.blogReactions(!0),s)))}),at(()=>{clearTimeout(p.value),o.forEach(h=>{h()})})},$e=e=>e?e.clone():new Vt,ue=$t("blogPostDialogStore",()=>{const e=U(!1),t=U(null),n=U($e(null)),l=U(!1),r=()=>{t.value=null,n.value=$e(null),l.value=!1},i=p=>{t.value=p,n.value=$e(p),e.value=!0},o=()=>{e.value=!1,r()};return ot(()=>n.value,()=>{l.value=!Ct(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:l,$reset:r,openWith:i,close:o}}),Pn={class:"flex justify-between gap-3"},$n={class:"flex flex-col"},Vn={class:"flex gap-2"},Cn=["src"],Ln=["src"],Bn={class:"flex flex-col"},Dn={class:"text-base mt-1 font-bold mb-2"},Tn={key:1,class:"text-base mt-1 font-bold mb-2"},On={class:"!text-[var(--p-text-color)] mt-2"},An={key:0,class:"flex flex-col gap-2"},Qe=O({__name:"BlogReaction",props:{post:{},reaction:{}},emits:["deleteClicked"],setup(e,{emit:t}){const n=e,l=t,r=Lt(),i=we(),o=Oe(),p=ye(),{routeLoading:s,routeLoadingId:h}=E(r),{firebaseUser:y,isLoggedIn:w,isOwner:k}=E(i),{publicUsers:C}=E(o),{isDatabaseDeletionActive:d}=E(p);mt();const q=I(()=>C.value.find(L=>L.id===n.reaction.userId)),P=I(()=>y.value&&n.reaction.userId===y.value.uid||k.value),S=I(()=>"surface-panel p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary"),A=I(()=>"surface-text-muted text-sm mb-2 xl:whitespace-nowrap");return(L,R)=>{const N=W("RouterLink");return a(),f(u(ve),{id:e.reaction.id,class:j(S.value)},{content:x(()=>[m("div",Pn,[m("div",$n,[m("div",Vn,[q.value?.avatar&&u(w)?(a(),f(N,{key:0,to:{name:u(Q).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:x(()=>[m("img",{class:j(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":u(s)===u(Q).USER_DETAILS&&u(h)===q.value?.id}]),src:q.value.avatar},null,10,Cn)]),_:1},8,["to"])):q.value?.avatar?(a(),c("img",{key:1,class:j(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":u(s)===u(Q).USER_DETAILS&&u(h)===q.value?.id}]),src:q.value.avatar},null,10,Ln)):g("",!0),m("div",Bn,[u(w)?(a(),f(N,{key:0,to:{name:u(Q).USER_DETAILS,params:{userId:e.reaction.userId}},class:"!no-underline hover:!underline"},{default:x(()=>[m("h3",Dn,T(q.value?.displayName||"Onbekende gebruiker"),1)]),_:1},8,["to"])):(a(),c("h3",Tn,T(q.value?.displayName||"Onbekende gebruiker"),1)),m("p",{class:j(A.value)},T(u(me)(e.reaction.date)),3)])]),m("p",On,T(e.reaction.message),1)]),P.value?(a(),c("div",An,[P.value&&!e.post.locked?(a(),f(Ie,{key:0,disabled:u(d),onClick:R[0]||(R[0]=B=>l("deleteClicked",e.reaction))},null,8,["disabled"])):g("",!0)])):g("",!0)])]),_:1},8,["id","class"])}}}),En={class:"grid justify-items-center p-5 gap-5"},Un=O({__name:"BlogReactions",props:{post:{}},setup(e){const t=e,n=we(),l=ye(),{firebaseUser:r,isLoggedIn:i}=E(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:p}=E(l);mt();const s=U(!1),h=U(!1),y=U(null),w=Tt({reaction:""}),C=Se({reaction:{required:bt}},w),d=I(()=>[...t.post.reactions].reverse()),q=I(()=>d.value.filter(($,D)=>D<3)),P=I(()=>d.value.filter(($,D)=>D>=3)),S=I(()=>t.post.locked||!i.value||o.value),A=I(()=>y.value?.message?y.value.message.length>120?`${y.value.message.slice(0,117)}...`:y.value.message:null),L=I(()=>A.value?`Reactie: "${A.value}"`:void 0),R=I(()=>"surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary"),N=I(()=>["!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]",S.value?{"!bg-[var(--p-surface-100)]":!o.value}:"",{"cursor-pointer":!i.value&&!t.post.locked}]),B=async()=>{if(o.value)return;if(!await C.value.$validate()||!r.value){Ke();return}const $=w.reaction;w.reaction="Reactie plaatsen...";const D=await l.createBlogReaction(t.post,new At({userId:r.value.uid,postId:t.post.id,message:$}));w.reaction=D?"":$,D&&C.value.$reset(),Ke()};function G($){y.value=$,h.value=!0}async function J(){if(!y.value)return;await l.deleteBlogReaction(t.post,y.value.id)&&(h.value=!1,y.value=null)}return($,D)=>(a(),c(V,null,[m("form",{action:"",onSubmit:Bt(B,["prevent"])},[m("div",En,[!u(i)||e.post.reactions.filter(K=>K.userId===u(r).uid).length<20?(a(),f(u(ve),{key:0,class:j(R.value)},{content:x(()=>[v(Y,{class:"w-5/6 place-self-center",id:e.post.id,inputProps:{class:N.value,disabled:S.value,autocomplete:"off"},name:"reaction",placeholder:e.post.locked?"Gesloten voor reacties":u(i)?"Reageren":"Log in om te reageren",modelValue:w.reaction,"onUpdate:modelValue":D[0]||(D[0]=K=>w.reaction=K),error:u(C).reaction.$error?u(Ue)(u(C).reaction):"",required:"",onClick:D[1]||(D[1]=()=>!u(i)&&!e.post.locked?u(Dt).push({name:u(Q).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error"])]),_:1},8,["class"])):g("",!0),(a(!0),c(V,null,z(q.value,K=>(a(),f(Qe,{post:e.post,reaction:K,onDeleteClicked:G},null,8,["post","reaction"]))),256)),(a(!0),c(V,null,z(P.value,K=>X((a(),f(Qe,{post:e.post,reaction:K,onDeleteClicked:G},null,8,["post","reaction"])),[[Ot,s.value]])),256)),e.post.reactions.length>3?(a(),f(M,{key:1,outlined:"",icon:s.value?"pi pi-angle-up":"pi pi-angle-down",label:s.value?"Verberg oudere reacties":"Bekijk oudere reacties",onClick:D[2]||(D[2]=K=>s.value=!s.value)},null,8,["icon","label"])):g("",!0)])],32),v(pt,{"is-open":h.value,"onUpdate:isOpen":D[3]||(D[3]=K=>h.value=K),title:"Reactie verwijderen","entity-label":"deze reactie",details:L.value,"confirm-loading":u(p),onConfirm:J,onCancel:D[4]||(D[4]=K=>y.value=null)},null,8,["is-open","details","confirm-loading"])],64))}});var jn=ke.extend({name:"deferredcontent"}),ze={name:"DeferredContent",extends:de,inheritAttrs:!1,emits:["load"],style:jn,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,l=n.clientHeight;return l>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function zn(e,t,n,l,r,i){return a(),c("div",b({ref:"container"},e.ptmi("root")),[r.loaded?rt(e.$slots,"default",{key:0}):g("",!0)],16)}ze.render=zn;var Rn=`
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
`,Nn={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter-active",root:function(t){var n=t.instance,l=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},l,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,l=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(l)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,l=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===l,"p-galleria-thumbnail-item-active":n.isItemActive(l),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===l}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Kn=ke.extend({name:"galleria",style:Rn,classes:Nn}),Mn={name:"BaseGalleria",extends:de,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Kn,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function _(e){return Wn(e)||Gn(e)||Fn(e)||Hn()}function Hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fn(e,t){if(e){if(typeof e=="string")return Be(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Be(e,t):void 0}}function Gn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wn(e){if(Array.isArray(e))return Be(e)}function Be(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var yt={name:"GalleriaItem",hostName:"Galleria",extends:de,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=_(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=_(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=_(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return Ee(i,"data-p-active")===!0}),l=be(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=_(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=be(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=_(F(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:ft,ChevronRightIcon:vt},directives:{ripple:Ae}},Qn=["disabled"],Yn=["id","aria-label","aria-roledescription"],Xn=["disabled"],Jn=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Zn=["tabindex"];function _n(e,t,n,l,r,i){var o=xe("ripple");return a(),c("div",b({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[m("div",b({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?X((a(),c("button",b({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(p){return i.navBackward(p)}),disabled:i.isNavBackwardDisabled},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),f(H(n.templates.previousitemicon||"ChevronLeftIcon"),b({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Qn)),[[o]]):g("",!0),m("div",b({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":i.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":i.ariaSlideLabel},e.ptm("item")),[n.templates.item?(a(),f(H(n.templates.item),{key:0,item:i.activeItem},null,8,["item"])):g("",!0)],16,Yn),n.showItemNavigators?X((a(),c("button",b({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(p){return i.navForward(p)}),disabled:i.isNavForwardDisabled},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),f(H(n.templates.nextitemicon||"ChevronRightIcon"),b({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,Xn)),[[o]]):g("",!0),n.templates.caption?(a(),c("div",b({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(a(),f(H(n.templates.caption),{key:0,item:i.activeItem},null,8,["item"])):g("",!0)],16)):g("",!0)],16),n.showIndicators?(a(),c("ul",b({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(a(!0),c(V,null,z(n.value,function(p,s){return a(),c("li",b({key:"p-galleria-indicator-".concat(s),class:e.cx("indicator",{index:s}),"aria-label":i.ariaPageLabel(s+1),"aria-selected":n.activeIndex===s,"aria-controls":n.id+"_item_"+s,onClick:function(y){return i.onIndicatorClick(s)},onMouseenter:function(y){return i.onIndicatorMouseEnter(s)},onKeydown:function(y){return i.onIndicatorKeyDown(y,s)}},{ref_for:!0},e.ptm("indicator",i.getIndicatorPTOptions(s)),{"data-p-active":i.isIndicatorItemActive(s)}),[n.templates.indicator?g("",!0):(a(),c("button",b({key:0,type:"button",tabindex:n.activeIndex===s?"0":"-1",class:e.cx("indicatorButton")},{ref_for:!0},e.ptm("indicatorButton",i.getIndicatorPTOptions(s))),null,16,Zn)),n.templates.indicator?(a(),f(H(n.templates.indicator),{key:1,index:s,activeIndex:n.activeIndex,tabindex:n.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):g("",!0)],16,Jn)}),128))],16)):g("",!0)],16)}yt.render=_n;function Ve(e){return ll(e)||nl(e)||tl(e)||el()}function el(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tl(e,t){if(e){if(typeof e=="string")return De(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?De(e,t):void 0}}function nl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ll(e){if(Array.isArray(e))return De(e)}function De(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var wt={name:"GalleriaThumbnails",hostName:"Galleria",extends:de,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Me(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Me(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,l=n+this.totalShiftedItems;this.d_numVisible-l-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var l=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",l),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var l=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-l-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-l,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=Ve(F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(i){return Ee(i,"data-p-active")===!0}),l=be(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=Ve(F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=be(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&st(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){var l=10;Math.abs(n)<l||(n<0?this.navForward(t):this.navBackward(t))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",Rt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Ve(this.responsiveOptions);var l=Nt();this.sortedResponsiveOptions.sort(function(o,p){var s=o.breakpoint,h=p.breakpoint;return Kt(s,h,-1,l)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(i.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/i.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},l=0;l<this.sortedResponsiveOptions.length;l++){var r=this.sortedResponsiveOptions[l];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:ft,ChevronRightIcon:vt,ChevronUpIcon:fn,ChevronDownIcon:jt},directives:{ripple:Ae}};function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(e)}function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ye(Object(n),!0).forEach(function(l){il(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function il(e,t,n){return(t=al(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function al(e){var t=ol(e,"string");return ie(t)=="symbol"?t:t+""}function ol(e,t){if(ie(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ie(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var rl=["disabled","aria-label"],sl=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],dl=["tabindex","aria-label","aria-current","onClick"],ul=["disabled","aria-label"];function cl(e,t,n,l,r,i){var o=xe("ripple");return a(),c("div",b({class:e.cx("thumbnails")},e.ptm("thumbnails")),[m("div",b({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?X((a(),c("button",b({key:0,class:e.cx("thumbnailPrevButton"),disabled:i.isNavBackwardDisabled,type:"button","aria-label":i.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(p){return i.navBackward(p)})},ce(ce({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),f(H(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),b({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,rl)),[[o]]):g("",!0),m("div",b({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[m("div",b({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(p){return i.onTransitionEnd(p)}),onTouchstart:t[2]||(t[2]=function(p){return i.onTouchStart(p)}),onTouchmove:t[3]||(t[3]=function(p){return i.onTouchMove(p)}),onTouchend:t[4]||(t[4]=function(p){return i.onTouchEnd(p)})},e.ptm("thumbnailItems")),[(a(!0),c(V,null,z(n.value,function(p,s){return a(),c("div",b({key:"p-galleria-thumbnail-item-".concat(s),class:e.cx("thumbnailItem",{index:s,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===s,"aria-selected":n.activeIndex===s,"aria-controls":n.containerId+"_item_"+s,onKeydown:function(y){return i.onThumbnailKeydown(y,s)}},{ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===s,"data-p-galleria-thumbnail-item-active":i.isItemActive(s),"data-p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===s}),[m("div",b({class:e.cx("thumbnail"),tabindex:n.activeIndex===s?"0":"-1","aria-label":i.ariaPageLabel(s+1),"aria-current":n.activeIndex===s?"page":void 0,onClick:function(y){return i.onItemClick(s)}},{ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(a(),f(H(n.templates.thumbnail),{key:0,item:p},null,8,["item"])):g("",!0)],16,dl)],16,sl)}),128))],16)],16),n.showThumbnailNavigators?X((a(),c("button",b({key:1,class:e.cx("thumbnailNextButton"),disabled:i.isNavForwardDisabled,type:"button","aria-label":i.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(p){return i.navForward(p)})},ce(ce({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),f(H(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),b({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,ul)),[[o]]):g("",!0)],16)],16)}wt.render=cl;function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(n),!0).forEach(function(l){pl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function pl(e,t,n){return(t=ml(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ml(e){var t=bl(e,"string");return ae(t)=="symbol"?t:t+""}function bl(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ae(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kt={name:"GalleriaContent",hostName:"Galleria",extends:de,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:Je(Je({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var l=["top","left","bottom","right"],r=l.find(function(i){return i===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:yt,GalleriaThumbnails:wt,TimesIcon:Ut},directives:{ripple:Ae}};function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ze(Object(n),!0).forEach(function(l){hl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function hl(e,t,n){return(t=fl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fl(e){var t=vl(e,"string");return oe(t)=="symbol"?t:t+""}function vl(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(oe(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gl=["id","aria-label","aria-roledescription"],ql=["aria-label"],yl=["aria-live"];function wl(e,t,n,l,r,i){var o=W("GalleriaItem"),p=W("GalleriaThumbnails"),s=xe("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(a(),c("div",b({key:0,id:e.$id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},_e(_e({},e.$attrs.containerProps),i.getPTOptions("root"))),[e.$attrs.fullScreen?X((a(),c("button",b({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(h){return e.$emit("mask-hide")})},i.getPTOptions("closeButton")),[(a(),f(H(e.$attrs.templates.closeicon||"TimesIcon"),b({class:e.cx("closeIcon")},i.getPTOptions("closeIcon")),null,16,["class"]))],16,ql)),[[s]]):g("",!0),e.$attrs.templates&&e.$attrs.templates.header?(a(),c("div",b({key:1,class:e.cx("header")},i.getPTOptions("header")),[(a(),f(H(e.$attrs.templates.header)))],16)):g("",!0),m("div",b({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},i.getPTOptions("content")),[v(o,{id:e.$id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(h){return r.slideShowActive=h}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:i.startSlideShow,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(a(),f(p,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(h){return r.slideShowActive=h}),containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:i.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):g("",!0)],16,yl),e.$attrs.templates&&e.$attrs.templates.footer?(a(),c("div",b({key:2,class:e.cx("footer")},i.getPTOptions("footer")),[(a(),f(H(e.$attrs.templates.footer)))],16)):g("",!0)],16,gl)):g("",!0)}kt.render=wl;var xt={name:"Galleria",extends:Mn,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&We(),this.mask=null,this.container&&(Pe.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){Pe.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),mn(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&st(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){zt(this.target),this.target=null},onAfterLeave:function(t){Pe.clear(t),this.containerVisible=!1,We(),this.unbindGlobalListeners()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},onKeyDown:function(t){t.code==="Escape"&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:kt,Portal:Et},directives:{focustrap:pn}},kl=["aria-modal"];function xl(e,t,n,l,r,i){var o=W("GalleriaContent"),p=W("Portal"),s=xe("focustrap");return e.fullScreen?(a(),f(p,{key:0},{default:x(function(){return[r.containerVisible?(a(),c("div",b({key:0,ref:i.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[v(Mt,b({name:"p-galleria",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:x(function(){return[e.visible?X((a(),f(o,b({key:0,ref:i.containerRef,onMaskHide:i.maskHide,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):g("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,kl)):g("",!0)]}),_:1})):(a(),f(o,b({key:1,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}xt.render=xl;var Il=`
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
`,Sl={handle:{position:"absolute"},range:{position:"absolute"}},Pl={root:function(t){var n=t.instance,l=t.props;return["p-slider p-component",{"p-disabled":l.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":l.orientation==="horizontal","p-slider-vertical":l.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},$l=ke.extend({name:"slider",style:Il,classes:Pl,inlineStyles:Sl}),Vl={name:"BaseSlider",extends:dt,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$l,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Cl(e,t,n){return(t=Ll(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ll(e){var t=Bl(e,"string");return re(t)=="symbol"?t:t+""}function Bl(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dl(e){return El(e)||Al(e)||Ol(e)||Tl()}function Tl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ol(e,t){if(e){if(typeof e=="string")return Te(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}function Al(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function El(e){if(Array.isArray(e))return Te(e)}function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var It={name:"Slider",extends:Vl,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+Gt(),this.initY=t.top+Wt(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,l=t.touches?t.touches[0].pageX:t.pageX,r=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?Ft(this.$el)?n=(this.initX+this.barWidth-l)*100/this.barWidth:n=(l-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(n/100)+this.min;if(this.step){var o=this.range?this.value[this.handleIndex]:this.value,p=i-o;p<0?i=o+Math.ceil(i/this.step-o/this.step)*this.step:p>0&&(i=o+Math.floor(i/this.step-o/this.step)*this.step)}else i=Math.floor(i);this.updateModel(t,i)},updateModel:function(t,n){var l=Math.round(n*100)/100,r;this.range?(r=this.value?Dl(this.value):[],this.handleIndex==0?(l<this.min?l=this.min:l>=this.max&&(l=this.max),r[0]=l):(l>this.max?l=this.max:l<=this.min&&(l=this.min),r[1]=l)):(l<this.min?l=this.min:l>this.max&&(l=this.max),r=l),this.writeValue(r,t),this.$emit("change",r)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||Ee(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var l,r;(l=(r=this.formField).onBlur)===null||l===void 0||l.call(r,t)},decrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]-this.step:r=this.value[n]-1:this.step?r=this.value-this.step:!this.step&&l?r=this.value-10:r=this.value-1,this.updateModel(t,r),t.preventDefault()},incrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]+this.step:r=this.value[n]+1:this.step?r=this.value+this.step:!this.step&&l?r=this.value+10:r=this.value+1,this.updateModel(t,r),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,l,r,i;return[(n=(l=this.d_value)===null||l===void 0?void 0:l[0])!==null&&n!==void 0?n:this.min,(r=(i=this.d_value)===null||i===void 0?void 0:i[1])!==null&&r!==void 0?r:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Ht(Cl({},this.orientation,this.orientation))}}},Ul=["data-p"],jl=["data-p"],zl=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],Rl=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],Nl=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function Kl(e,t,n,l,r,i){return a(),c("div",b({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},e.ptmi("root"),{"data-p-sliding":!1,"data-p":i.dataP}),[m("span",b({class:e.cx("range"),style:[e.sx("range"),i.rangeStyle()]},e.ptm("range"),{"data-p":i.dataP}),null,16,jl),e.range?g("",!0):(a(),c("span",b({key:0,class:e.cx("handle"),style:[e.sx("handle"),i.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(o){return i.onDragStart(o)}),onTouchmovePassive:t[1]||(t[1]=function(o){return i.onDrag(o)}),onTouchend:t[2]||(t[2]=function(o){return i.onDragEnd(o)}),onMousedown:t[3]||(t[3]=function(o){return i.onMouseDown(o)}),onKeydown:t[4]||(t[4]=function(o){return i.onKeyDown(o)}),onBlur:t[5]||(t[5]=function(o){return i.onBlur(o)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle"),{"data-p":i.dataP}),null,16,zl)),e.range?(a(),c("span",b({key:1,class:e.cx("handle"),style:[e.sx("handle"),i.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(o){return i.onDragStart(o,0)}),onTouchmovePassive:t[7]||(t[7]=function(o){return i.onDrag(o)}),onTouchend:t[8]||(t[8]=function(o){return i.onDragEnd(o)}),onMousedown:t[9]||(t[9]=function(o){return i.onMouseDown(o,0)}),onKeydown:t[10]||(t[10]=function(o){return i.onKeyDown(o,0)}),onBlur:t[11]||(t[11]=function(o){return i.onBlur(o,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler"),{"data-p":i.dataP}),null,16,Rl)):g("",!0),e.range?(a(),c("span",b({key:2,class:e.cx("handle"),style:[e.sx("handle"),i.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(o){return i.onDragStart(o,1)}),onTouchmovePassive:t[13]||(t[13]=function(o){return i.onDrag(o)}),onTouchend:t[14]||(t[14]=function(o){return i.onDragEnd(o)}),onMousedown:t[15]||(t[15]=function(o){return i.onMouseDown(o,1)}),onKeydown:t[16]||(t[16]=function(o){return i.onKeyDown(o,1)}),onBlur:t[17]||(t[17]=function(o){return i.onBlur(o,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler"),{"data-p":i.dataP}),null,16,Nl)):g("",!0)],16,Ul)}It.render=Kl;const Ml=O({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(a(),c("ul",{class:j(["list-disc",{"ms-5":e.alignment==="left"}])},[(a(!0),c(V,null,z(e.bullets,l=>(a(),c("li",null,T(l),1))),256))],2))}}),Hl={class:"w-full ql-editor no-input"},Fl=["innerHTML"],Gl=O({__name:"BlogPostDescription",props:{description:{}},setup(e){return(t,n)=>(a(),c("div",Hl,[m("div",{innerHTML:e.description},null,8,Fl)]))}}),et=O({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(a(),c("div",{class:j(["!p-0 md:!p-3",e.thumb?"w-full":"w-fit !py-5 md:border-none !rounded-none md:!rounded-primary"])},[v(u(ze),null,{default:x(()=>[e.thumb?(a(),c("div",{key:0,class:"h-[20vh] inset-0 rounded-primary bg-cover bg-center",style:Qt({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(a(),f(ht,{key:1,src:e.coverImageUrl,"image-class":["cover-image md:rounded-primary",e.imageClass]},null,8,["src","image-class"]))]),_:1})],2))}}),Wl=["innerHTML"],Ql=O({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const t=e,n=I(()=>ut(t.tableData)),l=I(()=>n.value.length?n.value[0].map((o,p)=>o||p):[]),r=I(()=>n.value.slice(1).filter(o=>o.some(p=>!!p)).map(o=>{const p={};return l.value.forEach((s,h)=>{p[s]=i(o[h])}),p})),i=o=>{const p=/(https?:\/\/[^\s]+)/g;return o.replace(p,s=>{let h=s.replace("http://","").replace("https://","").replace("www.","");return h.length>15&&(h=h.substring(0,15)+"..."),`<a href="${s}" target="_blank">${h}</a>`})};return(o,p)=>(a(),f(u(qn),{value:r.value,"pt:root":"w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]",showHeaders:l.value.some(s=>typeof s=="string"),removableSort:""},{default:x(()=>[(a(!0),c(V,null,z(l.value,(s,h)=>(a(),f(u(yn),{key:s,field:y=>y[s],header:typeof s=="string"?s:"",sortable:""},{body:x(({data:y})=>[m("span",{class:j(["text-nowrap",[{"font-bold":h===0},{"text-left":e.alignment==="left"||!e.alignment,"text-center":e.alignment==="center","text-right":e.alignment==="right"}]]),innerHTML:y[s]},null,10,Wl)]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","showHeaders"]))}}),Yl={class:"text-2xl font-bold"},Xl=O({__name:"BlogPostTitle",props:{title:{}},setup(e){return(t,n)=>(a(),c("h2",Yl,T(e.title),1))}}),Jl={key:1,class:"w-full flex flex-col gap-1 items-center"},Zl={key:0},_l={key:0,class:"font-bold text-lg md:text-2xl"},ei={key:1,class:"font-bold"},ti={key:1},ni=O({__name:"BlogPostContent",props:{post:{},block:{}},setup(e){const t=e,n=I(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type==="title"),l=I(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type==="title");return(r,i)=>{const o=W("BlogPostContent",!0);return a(),c("div",{class:j(["flex",{"justify-start":e.block.alignment==="left","justify-center":e.block.alignment==="center"||!e.block.alignment,"justify-end":e.block.alignment==="right"}])},[e.block.isBoolean()?(a(),f(u(gn),{key:0,modelValue:e.block.value,"onUpdate:modelValue":i[0]||(i[0]=p=>e.block.value=p),onLabel:"True",offLabel:"False",onIcon:"pi pi-check",offIcon:"pi pi-times",disabled:""},null,8,["modelValue"])):e.block.isNumber()?(a(),c("div",Jl,[v(u(vn),{class:"w-full",value:e.block.value},null,8,["value"]),e.block.value?g("",!0):(a(),c("span",Zl,T(e.block.value)+"% ",1))])):e.block.isString()?(a(),c(V,{key:2},[e.block.type==="title"?(a(),f(Xl,{key:0,title:e.block.value},null,8,["title"])):e.block.type==="richtext"?(a(),f(Gl,{key:1,description:e.block.value},null,8,["description"])):e.block.type==="table"?(a(),f(Ql,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,["tableData","alignment"])):e.block.type==="coverimage"?(a(),f(et,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,["post","cover-image-url"])):e.block.type==="image"?(a(),f(et,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":"!max-h-[50vh] !max-w-[50vw]"},null,8,["post","cover-image-url"])):g("",!0)],64)):e.block.isStringList()?(a(),c(V,{key:3},[e.block.type==="bulletlist"?(a(),f(Ml,{key:0,bullets:e.block.value},null,8,["bullets"])):e.block.type==="imageslider"?(a(),f(u(ze),{key:1},{default:x(()=>[v(u(xt),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:x(p=>[v(ht,{src:p.item,"image-class":"aspect-square object-cover w-3/4 place-self-center rounded-2xl"},null,8,["src"])]),_:1},8,["value"])]),_:1})):g("",!0)],64)):e.block.isDate()?(a(),c(V,{key:4},[e.block.type==="date"?(a(),c(V,{key:0},[he(T(e.block.value?u(me)(e.block.value):"Geen datum beschikbaar"),1)],64)):e.block.type==="countdown"?(a(),c(V,{key:1},[e.block.value?(a(),f(Ge,{key:0,time:new Date(e.block.value).getTime(),direction:"down"},null,8,["time"])):g("",!0)],64)):e.block.type==="timer"?(a(),c(V,{key:2},[e.block.value?(a(),f(Ge,{key:0,time:new Date(e.block.value).getTime(),direction:"up"},null,8,["time"])):g("",!0)],64)):g("",!0)],64)):e.block.isButton()?(a(),f(M,{key:5,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,["label","href","severity"])):e.block.isGroup()?(a(),f(u(ge),{key:6,class:"w-full",onTabOpen:u(fe)},{default:x(()=>[v(u(te),{value:"0",disabled:!e.block.value.length},{default:x(()=>[v(u(ne),{class:j(["px-0 bg-transparent !border-none",{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:x(()=>[m("div",null,[n.value?(a(),c(V,{key:0},[n.value?(a(),c("p",_l,T(e.block.value[0].value),1)):g("",!0),l.value?(a(),c("p",ei,T(e.block.value[1].value),1)):g("",!0)],64)):e.block.value.length?(a(),c("p",ti,"Klik om te openen")):g("",!0)])]),_:1},8,["class","pt"]),v(u(le),{pt:{content:{class:"flex flex-col gap-3"}}},{default:x(()=>[(a(!0),c(V,null,z(e.block.value.slice(l.value?2:n.value?1:0),p=>(a(),f(o,{key:p.id,post:e.post,block:p},null,8,["post","block"]))),128))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["onTabOpen"])):g("",!0)],2)}}}),li={class:"flex flex-wrap justify-end h-fit gap-3"},ii=O({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(t,n)=>(a(),c("div",li,[v(gt,{onClick:n[0]||(n[0]=l=>t.$emit("editClicked"))}),v(Ie,{onClick:n[1]||(n[1]=l=>t.$emit("deleteClicked"))})]))}}),ai={class:"p-5 md:p-10"},oi={class:"flex justify-between gap-3"},ri={class:"flex flex-col"},si={class:"text-2xl font-bold mb-2"},di={key:0,class:"flex flex-wrap gap-2 mb-2"},ui={class:"surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap"},ci={class:"flex justify-between h-fit mt-2 gap-2"},pi={class:"flex flex-wrap gap-3"},Va=O({__name:"BlogPost",props:{post:{}},setup(e){const t=e,n=Yt(),l=we(),r=Oe(),i=qe(),o=ue(),{publicUsers:p}=E(r),{firebaseUser:s,isOwner:h}=E(l),{deleteBlogPost:y}=i,w=U(!1);n.currentRoute.value.name!==Q.BLOG&&Sn(t.post);const k=I(()=>t.post.allowedUserIds?.length?p.value.filter(B=>t.post.allowedUserIds?.includes(B.id)):[]),C=I(()=>{const B=me(t.post.date);return t.post.dateUpdated?B+` - aangepast ${me(t.post.dateUpdated)}`:B}),d=I(()=>{const B=[];return t.post.datePinned&&B.push({value:"Vastgemaakt",severity:"success",rounded:!1}),t.post.locked&&B.push({value:"Gesloten",severity:"danger",rounded:!1,icon:"pi pi-lock"}),t.post.archived&&B.push({value:"Gearchiveerd",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),B}),q=I(()=>["surface-panel !rounded-primary overflow-hidden"]),P=I(()=>"surface-panel-glass h-fit !p-0 !px-4 !py-1"),S=I(()=>"surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3"),A=()=>{o.openWith(t.post)},L=()=>{w.value=!0},R=async()=>{await y(t.post.id)&&(w.value=!1)},N=()=>{const B=document.createElement("textarea"),{protocol:G,hostname:J,port:$}=window.location,D=`${G}//${J}`+(J==="localhost"?`:${$}`:"");B.value=`${D}#${Xt.BLOG.path}/${t.post.id}`,document.body.appendChild(B),B.select(),document.execCommand("copy"),document.body.removeChild(B),Ce.success("Link gekopieerd!")};return(B,G)=>{const J=W("RouterLink");return a(),c(V,null,[v(u(ve),{id:e.post.id,class:j(q.value)},{content:x(()=>[m("div",ai,[m("div",oi,[m("div",ri,[v(J,{to:{name:u(Q).BLOG_DETAILS,params:{postId:e.post.id}},class:"!no-underline hover:!underline"},{default:x(()=>[m("h2",si,T(e.post.title),1)]),_:1},8,["to"]),d.value.length?(a(),c("div",di,[(a(!0),c(V,null,z(d.value,$=>(a(),f(u(cn),{key:`${$.value}-${$.icon??""}`,class:"h-fit p-2",value:$.value,severity:$.severity,rounded:$.rounded!==!1,icon:$.icon,pt:$.pt},null,8,["value","severity","rounded","icon","pt"]))),128))])):g("",!0),m("p",ui,T(C.value),1)]),v(M,{class:"h-fit",severity:"secondary",icon:"pi pi-copy",onClick:N})]),m("div",ci,[m("div",pi,[(a(!0),c(V,null,z(k.value,$=>(a(),f(u(Jt),{key:$.id,class:j(P.value),icon:"pi pi-user",label:$.id===u(s)?.uid?"Jij":$.displayName,rounded:""},null,8,["class","label"]))),128))]),u(h)?(a(),c("div",{key:0,class:j(["flex justify-end ms-5",e.post.allowedUserIds?.length?"flex-col md:flex-row":"flex-row"])},[v(ii,{onEditClicked:A,onDeleteClicked:L})],2)):g("",!0)]),G[1]||(G[1]=m("div",{class:"mt-5 h-px w-full border-t border-[var(--p-content-border-color)]"},null,-1)),v(u(ve),{class:j(S.value)},{content:x(()=>[(a(!0),c(V,null,z(e.post.content,$=>(a(),f(ni,{key:$.id,post:e.post,block:$},null,8,["post","block"]))),128))]),_:1},8,["class"]),v(Un,{post:e.post},null,8,["post"])])]),_:1},8,["id","class"]),v(pt,{"is-open":w.value,"onUpdate:isOpen":G[0]||(G[0]=$=>w.value=$),title:"Verwijder bericht","entity-label":`het bericht '${e.post.title}'`,onConfirm:R},null,8,["is-open","entity-label"])],64)}}}),mi={class:"block text-sm font-bold mb-2"},bi={class:"background-gray-dark rounded-2xl"},hi={class:"grid grid-cols-6 items-center"},fi=O({__name:"ImageSliderField",props:Le({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=ct(e,"modelValue"),n=r=>{t.value.splice(r,1)},l=(r,i)=>{t.value[r]=i};return(r,i)=>(a(),c("div",null,[m("p",mi,T(e.label),1),m("div",bi,[v(u(je),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o),itemKey:"index",handle:".drag-handle"},{item:x(({element:o,index:p})=>[m("div",hi,[i[1]||(i[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),v(qt,{class:"col-span-4",id:`${e.name}.${p}`,name:`${e.name}.${p}`,modelValue:o,"blog-post":e.blogPost,"onUpdate:modelValue":s=>l(p,s)},null,8,["id","name","modelValue","blog-post","onUpdate:modelValue"]),v(Ie,{onClick:s=>n(p)},null,8,["onClick"])])]),_:1},8,["modelValue"])])]))}});var vi=`
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
`,gi={root:function(t){var n=t.instance;return["p-editor",{"p-invalid":n.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},qi=ke.extend({name:"editor",style:vi,classes:gi}),yi={name:"BaseEditor",extends:dt,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:qi,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function wi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(n),!0).forEach(function(l){ki(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function ki(e,t,n){return(t=xi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xi(e){var t=Ii(e,"string");return se(t)=="symbol"?t:t+""}function Ii(e,t){if(se(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(se(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nt=(function(){try{return window.Quill}catch{return null}})(),St={name:"Editor",extends:yi,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,n={modules:wi({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};nt?(this.quill=new nt(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):Zt(()=>import("./c-quill-Bb0L4R7Y.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(l){l&&_t(t.$refs.editorElement)&&(l.default?t.quill=new l.default(t.$refs.editorElement,n):t.quill=new l(t.$refs.editorElement,n),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var n=this.quill.clipboard.convert({html:t});this.quill.setContents(n)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(n,l,r){if(r==="user"){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();i==="<p><br></p>"&&(i=""),t.writeValue(i),t.$emit("text-change",{htmlValue:i,textValue:o,delta:n,source:r,instance:t.quill})}}),this.quill.on("selection-change",function(n,l,r){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:i,textValue:o,range:n,oldRange:l,source:r,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Si(e,t,n,l,r,i){return a(),c("div",b({class:e.cx("root")},e.ptmi("root")),[m("div",b({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[rt(e.$slots,"toolbar",{},function(){return[m("span",b({class:"ql-formats"},e.ptm("formats")),[m("select",b({class:"ql-header",defaultValue:"0"},e.ptm("header")),[m("option",b({value:"1"},e.ptm("option")),"Heading",16),m("option",b({value:"2"},e.ptm("option")),"Subheading",16),m("option",b({value:"0"},e.ptm("option")),"Normal",16)],16),m("select",b({class:"ql-font"},e.ptm("font")),[m("option",en(tn(e.ptm("option"))),null,16),m("option",b({value:"serif"},e.ptm("option")),null,16),m("option",b({value:"monospace"},e.ptm("option")),null,16)],16)],16),m("span",b({class:"ql-formats"},e.ptm("formats")),[m("button",b({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),m("button",b({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),m("button",b({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),m("span",b({class:"ql-formats"},e.ptm("formats")),[m("select",b({class:"ql-color"},e.ptm("color")),null,16),m("select",b({class:"ql-background"},e.ptm("background")),null,16)],16),m("span",b({class:"ql-formats"},e.ptm("formats")),[m("button",b({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),m("button",b({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),m("select",b({class:"ql-align"},e.ptm("select")),[m("option",b({defaultValue:""},e.ptm("option")),null,16),m("option",b({value:"center"},e.ptm("option")),null,16),m("option",b({value:"right"},e.ptm("option")),null,16),m("option",b({value:"justify"},e.ptm("option")),null,16)],16)],16),m("span",b({class:"ql-formats"},e.ptm("formats")),[m("button",b({class:"ql-link",type:"button"},e.ptm("link")),null,16),m("button",b({class:"ql-image",type:"button"},e.ptm("image")),null,16),m("button",b({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),m("span",b({class:"ql-formats"},e.ptm("formats")),[m("button",b({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),m("div",b({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}St.render=Si;const Pi=["for"],$i=O({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,l=I({get:()=>n.modelValue||"",set:s=>{p("update:modelValue",s)}}),r=I(()=>n.label?n.label+(n.required?" *":""):void 0),i=I(()=>n.name+(n.id?`.${n.id}`:"")),o=({instance:s})=>{s.setContents(s.clipboard.convert({html:l.value}))},p=t;return(s,h)=>(a(),c("div",null,[e.label?(a(),c("label",b({key:0,class:"block text-sm font-bold mb-2",for:i.value},e.labelProps),T(r.value),17,Pi)):g("",!0),v(u(St),b({id:i.value,placeholder:e.placeholder,modelValue:l.value,"onUpdate:modelValue":h[0]||(h[0]=y=>l.value=y),onLoad:o},e.editorProps),null,16,["id","placeholder","modelValue"]),e.error?(a(),f(rn,{key:1,name:e.name,error:e.error},null,8,["name","error"])):g("",!0)]))}}),Vi={class:"p-4 background-gray-dark rounded-2xl"},Ci={class:"flex gap-3"},Li=O({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,l=t,r=U(""),i=I({get:()=>n.modelValue.slice(),set:s=>{l("update:modelValue",s),r.value=""}}),o=(s,h)=>{const y=i.value.slice();y.splice(s,1,h),i.value=y},p=s=>{const h=i.value.slice();h.splice(s,1),i.value=h};return(s,h)=>(a(),c("div",Vi,[v(u(je),{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=y=>i.value=y),itemKey:"index",handle:".drag-handle"},{item:x(({element:y,index:w})=>[m("div",Ci,[h[1]||(h[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),v(Y,{class:"w-full",id:`${e.name}.${w}`,name:e.name,"model-value":y,max:200,"delete-button":"","onUpdate:modelValue":k=>o(w,k.toString()),"onUpdate:delete":k=>p(w)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])]))}}),Bi=["for"],Di={class:"table w-full"},Ti={class:"table-header-group"},Oi={key:0,class:"table-row"},Ai={key:0,class:"table-cell"},Ei={class:"table-cell"},Ui={class:"table-row-group"},ji={key:0,class:"table-cell"},zi={key:1,class:"table-cell"},Ri={key:2,class:"table-cell"},Ni={class:"table-footer-group"},Ki={class:"table-row"},Mi={key:0,class:"table-cell"},Hi=O({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const n=e,l=t,i=kn(xn).greaterOrEqual("md"),o=I({get:()=>ut(n.modelValue),set:P=>{l("update:modelValue",He(P))}}),p=I(()=>n.name+(n.id?"."+n.id:"")),s=I(()=>i.value&&o.value[0]?.length<2),h=(P,S,A)=>{const L=[...o.value];L[P][S]=A,l("update:modelValue",He(L))},y=()=>{const P=o.value;if(P.length){const S=P[0];S.length?o.value=[...P,S.map(()=>"")]:o.value=[...P,[""]]}else o.value=[[""]]},w=P=>{const S=o.value;if(S.length){const A=S[0];S.splice(P,0,A.map(()=>"")),o.value=[...S]}},k=P=>{o.value.splice(P,1),o.value=o.value},C=()=>{o.value=o.value.map(P=>[...P,""])},d=P=>{const S=o.value;for(const A of S)A.splice(P,0,"");o.value=[...S]},q=P=>{o.value=o.value.map(S=>(S.splice(P,1),S))};return(P,S)=>(a(),c("div",null,[e.label?(a(),c("label",b({key:0,class:"block text-sm font-bold mb-2",for:p.value},e.labelProps),T(e.label),17,Bi)):g("",!0),m("div",Di,[m("div",Ti,[o.value.length&&o.value[0].length>1?(a(),c("div",Oi,[o.value.length>1?(a(),c("div",Ai)):g("",!0),(a(!0),c(V,null,z(o.value[0],(A,L)=>(a(),c("div",Ei,[o.value.length&&o.value[0].length?(a(),f(M,{key:0,class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove column":void 0,onClick:R=>q(L)},null,8,["label","onClick"])):g("",!0)]))),256))])):g("",!0)]),m("div",Ui,[(a(!0),c(V,null,z(o.value,(A,L)=>(a(),c("div",{key:L,class:"table-row"},[o.value.length>1?(a(),c("div",ji,[v(M,{class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove row":void 0,onClick:R=>k(L)},null,8,["label","onClick"])])):g("",!0),(a(!0),c(V,null,z(A,(R,N)=>(a(),f(Y,{key:N,class:"table-cell !m-0",name:`${e.name}.${L}.${N}`,modelValue:R,placeholder:L===0||N===0?"header":"cell","onUpdate:modelValue":B=>h(L,N,B.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),L===0?(a(),c("div",zi,[v(M,{class:"md:text-start text-nowrap",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add column":void 0,onClick:C},null,8,["label"])])):(a(),c("div",Ri,[v(M,{class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:R=>w(L)},null,8,["label","onClick"])]))]))),128))]),m("div",Ni,[m("div",Ki,[o.value.length>1?(a(),c("div",Mi)):g("",!0),(a(!0),c(V,null,z(o.value[0],(A,L)=>(a(),c("div",{class:"table-cell",key:L},[L===0?(a(),f(M,{key:0,class:"md:text-start text-nowrap",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add row":void 0,onClick:y},null,8,["label"])):(a(),f(M,{key:1,class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:R=>d(L)},null,8,["label","onClick"]))]))),128))])])])]))}}),Fi={class:"w-full flex flex-col gap-3"},Gi={class:"flex gap-5"},Wi={key:0},Qi={key:1},Yi={key:1,class:"w-full flex gap-3 justify-between"},Xi={key:1,class:"w-full flex flex-col items-center gap-3 justify-center"},Ji={key:5,class:"w-full flex gap-3"},Zi={key:6},_i={class:"flex flex-col gap-1"},ea=O({__name:"BlogPostContentBlocksDialog",props:Le({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Le(["delete"],["update:modelValue"]),setup(e){const t=ct(e,"modelValue"),n=ue(),{blogPostOriginal:l}=E(n),r=U("title"),i=U("center"),o=U(!0),p=U(null),s=async()=>{t.value.push(ln.createInstance(an(),r.value,r.value,i.value)),o.value=!1,setTimeout(()=>{o.value=!0})},h=w=>{const k=t.value.findIndex(C=>C.id===w);t.value.splice(k,1)},y=w=>{p.value=p.value===w?null:w};return(w,k)=>{const C=W("BlogPostContentBlocksDialog",!0);return a(),c("div",Fi,[t.value.length?(a(),f(u(je),{key:0,ref:"draggableRef",class:"flex flex-col gap-3",modelValue:t.value,"onUpdate:modelValue":k[0]||(k[0]=d=>t.value=d),itemKey:d=>d.id,handle:".drag-handle"},{item:x(({element:d})=>[m("div",{class:j({"surface-panel-soft rounded-primary py-1 px-3 mt-3":p.value===d.id})},[d.isGroup()?(a(),f(u(ge),{key:0,class:"w-full",onTabOpen:u(fe)},{default:x(()=>[v(u(te),{value:"0"},{default:x(()=>[v(u(ne),{class:"drag-handle"},{default:x(()=>[m("div",Gi,[k[4]||(k[4]=m("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),d.value.length&&typeof d.value[0].value=="string"?(a(),c("p",Wi,T(d.value[0].value),1)):(a(),c("p",Qi,T(d.getLabel()),1))])]),_:2},1024),v(u(le),null,{default:x(()=>[v(C,{id:d.id,modelValue:d.value,"onUpdate:modelValue":q=>d.value=q,onDelete:q=>h(d.id)},null,8,["id","modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onTabOpen"])):(a(),c("div",Yi,[k[5]||(k[5]=m("i",{class:"drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer"},null,-1)),d.isBoolean()?(a(),f(pe,{key:0,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.isNumber()?(a(),c("div",Xi,[v(u(It),{class:"w-full",name:d.id,modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","modelValue","onUpdate:modelValue"]),m("p",null,T(d.value)+"%",1)])):d.isString()?(a(),c(V,{key:2},[d.type==="title"?(a(),f(Y,{key:0,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.type==="richtext"?(a(),f($i,{key:1,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.type==="table"?(a(),f(Hi,{key:2,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.type==="coverimage"||d.type==="image"?(a(),f(qt,{key:3,name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q,"blog-post":u(l)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):g("",!0)],64)):d.isStringList()?(a(),c(V,{key:3},[d.type==="bulletlist"?(a(),f(Li,{key:0,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.type==="imageslider"?(a(),f(fi,{key:1,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q,"blog-post":u(l)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):g("",!0)],64)):d.isDate()?(a(),f(hn,{key:4,class:"w-full",name:d.id,label:d.getLabel(),modelValue:d.value,"onUpdate:modelValue":q=>d.value=q},null,8,["name","label","modelValue","onUpdate:modelValue"])):d.isButton()?(a(),c("div",Ji,[v(Y,{class:"w-1/2",name:`${d.id}-title`,label:"Knop titel",modelValue:d.value.title,"onUpdate:modelValue":q=>d.value.title=q},null,8,["name","modelValue","onUpdate:modelValue"]),v(Y,{class:"w-1/2",name:`${d.id}-url`,label:"Knop link",modelValue:d.value.url,"onUpdate:modelValue":q=>d.value.url=q},null,8,["name","modelValue","onUpdate:modelValue"]),v(ee,{class:"w-full md:w-1/2",name:`${d.id}-severity`,label:"Knop severity",modelValue:d.value.severity,"onUpdate:modelValue":q=>d.value.severity=q,options:[{value:"primary",label:"Primair"},{value:"secondary",label:"Secundair"},{value:"help",label:"Help"}]},null,8,["name","modelValue","onUpdate:modelValue"])])):(a(),c("p",Zi,T(d.getLabel()),1)),m("div",_i,[v(gt,{onClick:q=>y(d.id)},null,8,["onClick"]),v(Ie,{onClick:q=>h(d.id)},null,8,["onClick"]),Array.isArray(d.value)?(a(),f(wn,{key:0,onClick:q=>d.value.push("")},null,8,["onClick"])):g("",!0)])])),p.value===d.id?(a(),f(ee,{key:2,class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning","model-value":d.alignment??"center","onUpdate:modelValue":q=>d.alignment=q,options:u(Fe)},null,8,["name","model-value","onUpdate:modelValue","options"])):g("",!0)],2)]),_:1},8,["modelValue","itemKey"])):g("",!0),o.value?(a(),f(u(ge),{key:1,onTabOpen:u(fe)},{default:x(()=>[v(u(te),{value:"0"},{default:x(()=>[v(u(ne),{"pt:root":"!bg-green-500 !bg-opacity-25 !border-none"},{default:x(()=>[...k[6]||(k[6]=[he(" Voeg content toe ",-1)])]),_:1}),v(u(le),{"pt:root":"bg-green-500 bg-opacity-25 rounded-b-2xl","pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[v(ee,{class:"w-full md:w-1/2",name:`${e.id}.contentType`,label:"Content type",modelValue:r.value,"onUpdate:modelValue":k[1]||(k[1]=d=>r.value=d),options:Object.entries(u(nn)).map(([d,q])=>({value:d,label:q}))},null,8,["name","modelValue","options"]),v(ee,{class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning",modelValue:i.value,"onUpdate:modelValue":k[2]||(k[2]=d=>i.value=d),options:u(Fe)},null,8,["name","modelValue","options"]),v(M,{class:"w-full md:w-1/2",severity:"success",label:"Voeg content toe",onClick:s}),e.id?(a(),f(M,{key:0,class:"w-full md:w-1/2 bg-opacity-75",severity:"danger",label:"Verwijder groep",onClick:k[3]||(k[3]=d=>w.$emit("delete"))})):g("",!0)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):g("",!0)])}}}),ta=O({__name:"BlogPostContentDialog",emits:["update:selected"],setup(e){const t=ue(),{blogPostMutation:n}=E(t),l=I(()=>({title:{required:bt,minLength:dn(3),maxLength:sn(50)}})),r=Se(l,n);return(i,o)=>(a(),c(V,null,[v(Y,{class:"w-full",name:"title",label:"Title",placeholder:"Amazing Post",modelValue:u(n).title,"onUpdate:modelValue":o[0]||(o[0]=p=>u(n).title=p),error:u(r).title.$error?u(Ue)(u(r).title):"",required:"","min-length":3,"max-length":50},null,8,["modelValue","error"]),v(ea,{modelValue:u(n).content,"onUpdate:modelValue":o[1]||(o[1]=p=>u(n).content=p)},null,8,["modelValue"])],64))}}),na=O({__name:"BlogPostSettingsDialog",setup(e){const t=Oe(),n=ue(),{blogPostMutation:l}=E(n),{allowedPublicUsers:r}=t,{mappedUsers:i}=In(),o=I({get(){return!!l.value.datePinned},set(w){l.value.datePinned=w?new Date:null}}),p=U([]),s=un.withMessage("Invalid user ID's",w=>!w.length||w.length===p.value.length),h=I(()=>({allowedUserIds:{validAllowedUserIds:s}})),y=Se(h,l);return ot(()=>l.value.allowedUserIds,async w=>{p.value=await r(w)},{immediate:!0}),(w,k)=>(a(),c(V,null,[v(ee,{class:"w-full md:w-1/2",name:"allowedUserIds",label:"Toegestane gebruikers",placeholder:"Dit bericht is openbaar",modelValue:u(l).allowedUserIds,"onUpdate:modelValue":k[0]||(k[0]=C=>u(l).allowedUserIds=C),error:u(y).allowedUserIds.$error?u(Ue)(u(y).allowedUserIds):"",options:u(i),multiple:""},null,8,["modelValue","error","options"]),v(pe,{class:"w-full md:w-1/2",name:"pinned",label:"Vastgemaakt",modelValue:o.value,"onUpdate:modelValue":k[1]||(k[1]=C=>o.value=C)},null,8,["modelValue"]),v(pe,{class:"w-full md:w-1/2",name:"locked",label:"Gesloten voor reacties",modelValue:u(l).locked,"onUpdate:modelValue":k[2]||(k[2]=C=>u(l).locked=C)},null,8,["modelValue"]),v(pe,{class:"w-full md:w-1/2",name:"archived",label:"Gearchiveerd",modelValue:u(l).archived,"onUpdate:modelValue":k[3]||(k[3]=C=>u(l).archived=C)},null,8,["modelValue"])],64))}}),la={ref:"dialog",class:"pt-6 mb-4 xl:px-16"},Ca=O({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:t}){const n=t,l=qe(),r=on(),i=ue(),{isBlogPostsMutationLoading:o}=E(l),{isOpen:p,blogPostOriginal:s,blogPostMutation:h,hasChanges:y}=E(i),w=Se(),k=I(()=>!!s.value?.allowedUserIds?.length&&!h.value.allowedUserIds?.length||!s.value?.allowedUserIds?.length&&!!h.value.allowedUserIds?.length),C=I(()=>it(s.value)),d=async()=>{await w.value.$validate()&&(s.value?k.value?(i.isOpen=!1,await l.toggleBlogPostVisibility(s.value,h.value.allowedUserIds.length?"private":"public")&&(i.close(),Ce.success("Zichtbaarheid van bericht succesvol bijgewerkt"),n("scroll-to-updated",h.value.id))):await l.updateBlogPost(h.value,C.value)&&(Ce.success("Bericht succesvol bijgewerkt"),i.close(),n("scroll-to-updated",h.value.id)):await l.createBlogPost(h.value)&&(i.close(),n("scroll-to-updated",h.value.id)))},q=async()=>{await r.deleteFilesOfBlogPost(h.value,s.value??void 0),i.close()};return(P,S)=>(a(),f(bn,{isOpen:u(p),title:u(s)?"Bericht bijwerken":"Bericht maken",description:u(s)?"Werk dit bericht bij":"Maak een nieuw bericht","confirm-text":u(s)?"Bijwerken":"Maken","confirm-loading":u(o),"confirm-props":{disabled:!u(y)},onConfirm:d,onCancel:q},{default:x(()=>[m("form",la,[u(p)?(a(),f(u(ge),{key:0,"active-index":0,onTabOpen:u(fe)},{default:x(()=>[v(u(te),{value:"content"},{default:x(()=>[v(u(ne),null,{default:x(()=>[...S[0]||(S[0]=[he(" Content ",-1)])]),_:1}),v(u(le),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[v(ta)]),_:1})]),_:1}),v(u(te),{value:"settings"},{default:x(()=>[v(u(ne),null,{default:x(()=>[...S[1]||(S[1]=[he(" Instellingen ",-1)])]),_:1}),v(u(le),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[v(na)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):g("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading","confirm-props"]))}});export{Va as _,Ca as a,ue as b,ii as c,ni as d,$a as u};
