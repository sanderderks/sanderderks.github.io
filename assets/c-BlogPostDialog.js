const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","../bundle.js"])))=>i.map(i=>d[i]);
import{A as e,Ar as t,Br as n,Cr as r,D as i,Di as a,Dn as o,Dr as s,Dt as c,Ei as l,Et as u,Fr as d,Ft as f,Gt as p,Hr as m,Ht as h,Ir as g,Jt as _,Kn as v,Kt as y,Li as b,Mn as x,N as S,Nn as C,Nt as ee,O as w,Oi as T,P as te,Pn as ne,Pr as re,Pt as E,Qn as ie,Qt as ae,Rr as D,S as oe,Tr as O,Tt as se,V as ce,Vr as le,Wr as ue,Xn as k,Xr as A,Xt as de,Yr as j,Yt as fe,Zn as pe,Zt as me,_r as M,ai as N,b as P,br as F,c as he,ct as ge,en as _e,et as ve,fr as ye,ft as be,g as xe,gr as I,hr as L,ht as Se,i as Ce,in as we,it as Te,ji as R,kr as Ee,kt as De,l as Oe,ln as ke,lr as Ae,mr as je,ni as Me,nn as Ne,nr as Pe,o as Fe,or as z,qn as B,qr as Ie,qt as Le,ri as V,rn as Re,rr as ze,st as Be,tt as Ve,un as He,ut as H,vn as Ue,vr as U,vt as We,wr as W,wt as Ge,yr as G,zr as Ke}from"../bundle.js";import{a as qe,n as Je,r as Ye}from"./c-Page.js";import{a as Xe,i as Ze,n as Qe,r as $e,t as et}from"./c-Dialog.js";import{i as K,n as tt,r as nt,t as rt}from"./c-card.js";import{t as q}from"./c-TextField.js";import{t as it}from"./c-DeleteDialog.js";import{a as at,d as ot,i as st,s as ct,t as lt,u as ut}from"./c-dist.js";import{t as dt}from"./c-chevronright.js";import{t as ft}from"./c-chevronup.js";import{i as pt,n as mt,r as ht,t as gt}from"./c-accordion.js";import{n as _t,t as vt}from"./c-DateField.js";import{n as yt,t as bt}from"./c-datatable.js";import{d as xt,n as St,o as Ct,t as wt}from"./c-useTaskHelper.js";import{t as Tt}from"./c-togglebutton.js";import{t as Et}from"./c-Image.js";import{t as Dt}from"./c-tag.js";import{t as Ot}from"./c-Countdown.js";import{d as kt,o as At,s as jt,t as Mt}from"./c-BuyLogMutationDialog.js";import{t as Nt}from"./c-CreateButton.js";import{t as Pt}from"./c-EditButton.js";import{t as Ft}from"./c-vuedraggable.umd.js";import{t as It}from"./c-FileUpload.js";import{n as Lt,t as Rt}from"./c-core.js";import{t as zt}from"./c-useUsers.js";var Bt=e=>{let t=p(),n=Le(),{previousCurrentBlogPost:r,isBlogPostDatabaseActionActive:i}=B(t),a=[],o=V(),s=n=>{n.metadata.hasPendingWrites||i.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(r.value,!0)},200))};re(async()=>{n.unread=n.unread.filter(t=>t.postId!==e.id);let r=He(e),i=t.collections.blogPosts(r.isPrivate),o=n.collections.blogReactions(r.isPrivate),c=Pe(i,e.id),l=pe(i,ie(`id`,`==`,e.id)),u=pe(o,ie(`post`,`==`,c));a.push(k(l,s)),a.push(k(u,s))}),d(()=>{clearTimeout(o.value),a.forEach(e=>{e()})})},Vt=()=>{let e=p(),t=E(),n=Le(),{visibleBlogPosts:r,isBlogPostDatabaseActionActive:i}=B(e),{isLoggedIn:a}=B(t),o=[],s=V(),c=t=>{t.metadata.hasPendingWrites||i.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{r.value.length&&(await e.fetchBlogPosts({amount:r.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};re(()=>{n.unread=[],o.push(k(e.collections.blogPosts(!1),c)),o.push(k(n.collections.blogReactions(!1),c)),a.value&&(o.push(k(e.collections.blogPosts(!0),c)),o.push(k(n.collections.blogReactions(!0),c)))}),d(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},Ht=e=>e?e.clone():new _,J=v(`blogPostDialogStore`,()=>{let e=V(!1),t=V(null),n=V(Ht(null)),r=V(!1),i=()=>{t.value=null,n.value=Ht(null),r.value=!1};return Ie(()=>n.value,()=>{r.value=!_e(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=Ht(r),e.value=!0},close:()=>{e.value=!1,i()}}}),Ut={class:`flex justify-between gap-3`},Wt={class:`flex flex-col`},Gt={class:`flex gap-2`},Kt=[`src`],qt=[`src`],Jt={class:`flex flex-col`},Yt={class:`text-base mt-1 font-bold mb-2`},Xt={key:1,class:`text-base mt-1 font-bold mb-2`},Zt={class:`!text-[var(--p-text-color)] mt-2`},Qt={key:0,class:`flex flex-col gap-2`},$t=O({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let r=e,i=t,a=f(),s=E(),c=o(),u=Le(),{routeLoading:d,routeLoadingId:p}=B(a),{firebaseUser:m,isLoggedIn:h,isOwner:_}=B(s),{publicUsers:v}=B(c),{isDatabaseDeletionActive:y}=B(u),{isDarkTheme:b}=Xe(),S=I(()=>v.value.find(e=>e.id===r.reaction.userId)),C=I(()=>m.value&&r.reaction.userId===m.value.uid||_.value),ee=I(()=>`surface-panel p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary`),w=I(()=>`surface-text-muted text-sm mb-2 xl:whitespace-nowrap`);return(t,r)=>{let a=n(`RouterLink`);return g(),U(N(rt),{id:e.reaction.id,class:l(ee.value)},{content:j(()=>[M(`div`,Ut,[M(`div`,Wt,[M(`div`,Gt,[S.value?.avatar&&N(h)?(g(),U(a,{key:0,to:{name:N(z).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:j(()=>[M(`img`,{class:l([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":N(d)===N(z).USER_DETAILS&&N(p)===S.value?.id}]),src:S.value.avatar},null,10,Kt)]),_:1},8,[`to`])):S.value?.avatar?(g(),F(`img`,{key:1,class:l([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":N(d)===N(z).USER_DETAILS&&N(p)===S.value?.id}]),src:S.value.avatar},null,10,qt)):G(``,!0),M(`div`,Jt,[N(h)?(g(),U(a,{key:0,to:{name:N(z).USER_DETAILS,params:{userId:e.reaction.userId}},class:`!no-underline hover:!underline`},{default:j(()=>[M(`h3`,Yt,R(S.value?.displayName||`Onbekende gebruiker`),1)]),_:1},8,[`to`])):(g(),F(`h3`,Xt,R(S.value?.displayName||`Onbekende gebruiker`),1)),M(`p`,{class:l(w.value)},R(N(x)(e.reaction.date)),3)])]),M(`p`,Zt,R(e.reaction.message),1)]),C.value?(g(),F(`div`,Qt,[C.value&&!e.post.locked?(g(),U(K,{key:0,disabled:N(y),onClick:r[0]||=t=>i(`deleteClicked`,e.reaction)},null,8,[`disabled`])):G(``,!0)])):G(``,!0)])]),_:1},8,[`id`,`class`])}}}),en={class:`grid justify-items-center p-5 gap-5`},tn=O({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=E(),r=Le(),{firebaseUser:i,isLoggedIn:a}=B(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:s}=B(r),{isDarkTheme:c}=Xe(),d=V(!1),f=V(!1),p=V(null),m=Me({reaction:``}),h=lt({reaction:{required:ut}},m),_=I(()=>[...t.post.reactions].reverse()),v=I(()=>_.value.filter((e,t)=>t<3)),y=I(()=>_.value.filter((e,t)=>t>=3)),b=I(()=>t.post.locked||!a.value||o.value),x=I(()=>p.value?.message?p.value.message.length>120?`${p.value.message.slice(0,117)}...`:p.value.message:null),S=I(()=>x.value?`Reactie: \"${x.value}\"`:void 0),C=I(()=>`surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary`),ee=I(()=>[`!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]`,b.value?{"!bg-[var(--p-surface-100)]":!o.value}:``,{"cursor-pointer":!a.value&&!t.post.locked}]),w=async()=>{if(o.value)return;if(!await h.value.$validate()||!i.value){Ne();return}let e=m.reaction;m.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new ae({userId:i.value.uid,postId:t.post.id,message:e}));m.reaction=n?``:e,n&&h.value.$reset(),Ne()};function T(e){p.value=e,f.value=!0}async function te(){p.value&&await r.deleteBlogReaction(t.post,p.value.id)&&(f.value=!1,p.value=null)}return(t,n)=>(g(),F(L,null,[M(`form`,{action:``,onSubmit:je(w,[`prevent`])},[M(`div`,en,[!N(a)||e.post.reactions.filter(e=>e.userId===N(i).uid).length<20?(g(),U(N(rt),{key:0,class:l(C.value)},{content:j(()=>[W(q,{class:`w-5/6 place-self-center`,id:e.post.id,inputProps:{class:ee.value,disabled:b.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:N(a)?`Reageren`:`Log in om te reageren`,modelValue:m.reaction,"onUpdate:modelValue":n[0]||=e=>m.reaction=e,error:N(h).reaction.$error?N(st)(N(h).reaction):``,required:``,onClick:n[1]||=()=>!N(a)&&!e.post.locked?N(u).push({name:N(z).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):G(``,!0),(g(!0),F(L,null,D(v.value,t=>(g(),U($t,{post:e.post,reaction:t,onDeleteClicked:T},null,8,[`post`,`reaction`]))),256)),(g(!0),F(L,null,D(y.value,t=>A((g(),U($t,{post:e.post,reaction:t,onDeleteClicked:T},null,8,[`post`,`reaction`])),[[ye,d.value]])),256)),e.post.reactions.length>3?(g(),U(P,{key:1,outlined:``,icon:d.value?`pi pi-angle-up`:`pi pi-angle-down`,label:d.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>d.value=!d.value},null,8,[`icon`,`label`])):G(``,!0)])],32),W(it,{"is-open":f.value,"onUpdate:isOpen":n[3]||=e=>f.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:S.value,"confirm-loading":N(s),onConfirm:te,onCancel:n[4]||=e=>p.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}}),nn={name:`DeferredContent`,extends:i,inheritAttrs:!1,emits:[`load`],style:w.extend({name:`deferredcontent`}),data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function rn(e,n,r,i,a,o){return g(),F(`div`,t({ref:`container`},e.ptmi(`root`)),[a.loaded?Ke(e.$slots,`default`,{key:0}):G(``,!0)],16)}nn.render=rn;var an=w.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),on={name:`BaseGalleria`,extends:i,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:an,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function Y(e){return un(e)||ln(e)||cn(e)||sn()}function sn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(e,t){if(e){if(typeof e==`string`)return dn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dn(e,t):void 0}}function ln(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function un(e){if(Array.isArray(e))return dn(e)}function dn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var fn={name:`GalleriaItem`,hostName:`Galleria`,extends:i,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault();break}},onRightKey:function(){var e=Y(H(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=Y(H(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=Y(H(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return Ve(e,`data-p-active`)===!0}),n=Ge(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=Y(H(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=Ge(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=Y(H(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:_t,ChevronRightIcon:dt},directives:{ripple:oe}},pn=[`disabled`],mn=[`id`,`aria-label`,`aria-roledescription`],hn=[`disabled`],gn=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],_n=[`tabindex`];function vn(e,n,r,i,a,o){var s=le(`ripple`);return g(),F(`div`,t({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[M(`div`,t({class:e.cx(`items`)},e.ptm(`items`)),[r.showItemNavigators?A((g(),F(`button`,t({key:0,type:`button`,class:e.cx(`prevButton`),onClick:n[0]||=function(e){return o.navBackward(e)},disabled:o.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(g(),U(m(r.templates.previousitemicon||`ChevronLeftIcon`),t({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,pn)),[[s]]):G(``,!0),M(`div`,t({id:r.id+`_item_`+r.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":o.ariaSlideNumber(r.activeIndex+1),"aria-roledescription":o.ariaSlideLabel},e.ptm(`item`)),[r.templates.item?(g(),U(m(r.templates.item),{key:0,item:o.activeItem},null,8,[`item`])):G(``,!0)],16,mn),r.showItemNavigators?A((g(),F(`button`,t({key:1,type:`button`,class:e.cx(`nextButton`),onClick:n[1]||=function(e){return o.navForward(e)},disabled:o.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(g(),U(m(r.templates.nextitemicon||`ChevronRightIcon`),t({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,hn)),[[s]]):G(``,!0),r.templates.caption?(g(),F(`div`,t({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[r.templates.caption?(g(),U(m(r.templates.caption),{key:0,item:o.activeItem},null,8,[`item`])):G(``,!0)],16)):G(``,!0)],16),r.showIndicators?(g(),F(`ul`,t({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(g(!0),F(L,null,D(r.value,function(n,i){return g(),F(`li`,t({key:`p-galleria-indicator-${i}`,class:e.cx(`indicator`,{index:i}),"aria-label":o.ariaPageLabel(i+1),"aria-selected":r.activeIndex===i,"aria-controls":r.id+`_item_`+i,onClick:function(e){return o.onIndicatorClick(i)},onMouseenter:function(e){return o.onIndicatorMouseEnter(i)},onKeydown:function(e){return o.onIndicatorKeyDown(e,i)}},{ref_for:!0},e.ptm(`indicator`,o.getIndicatorPTOptions(i)),{"data-p-active":o.isIndicatorItemActive(i)}),[r.templates.indicator?G(``,!0):(g(),F(`button`,t({key:0,type:`button`,tabindex:r.activeIndex===i?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,o.getIndicatorPTOptions(i))),null,16,_n)),r.templates.indicator?(g(),U(m(r.templates.indicator),{key:1,index:i,activeIndex:r.activeIndex,tabindex:r.activeIndex===i?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):G(``,!0)],16,gn)}),128))],16)):G(``,!0)],16)}fn.render=vn;function yn(e){return Cn(e)||Sn(e)||xn(e)||bn()}function bn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xn(e,t){if(e){if(typeof e==`string`)return wn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wn(e,t):void 0}}function Sn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Cn(e){if(Array.isArray(e))return wn(e)}function wn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Tn={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:i,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ve(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ve(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=H(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=H(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=yn(H(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return Ve(e,`data-p-active`)===!0}),n=Ge(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=yn(H(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=Ge(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=H(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&ge(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,be(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=yn(this.responsiveOptions);var n=S();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return te(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:_t,ChevronRightIcon:dt,ChevronUpIcon:ft,ChevronDownIcon:Oe},directives:{ripple:oe}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function En(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?En(Object(n),!0).forEach(function(t){On(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):En(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function On(e,t,n){return(t=kn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kn(e){var t=An(e,`string`);return X(t)==`symbol`?t:t+``}function An(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var jn=[`disabled`,`aria-label`],Mn=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],Nn=[`tabindex`,`aria-label`,`aria-current`,`onClick`],Pn=[`disabled`,`aria-label`];function Fn(e,n,r,i,a,o){var s=le(`ripple`);return g(),F(`div`,t({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[M(`div`,t({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[r.showThumbnailNavigators?A((g(),F(`button`,t({key:0,class:e.cx(`thumbnailPrevButton`),disabled:o.isNavBackwardDisabled,type:`button`,"aria-label":o.ariaPrevButtonLabel,onClick:n[0]||=function(e){return o.navBackward(e)}},Dn(Dn({},r.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(g(),U(m(r.templates.previousthumbnailicon||(r.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),t({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,jn)),[[s]]):G(``,!0),M(`div`,t({class:e.cx(`thumbnailsViewport`),style:{height:r.isVertical?r.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[M(`div`,t({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:n[1]||=function(e){return o.onTransitionEnd(e)},onTouchstart:n[2]||=function(e){return o.onTouchStart(e)},onTouchmove:n[3]||=function(e){return o.onTouchMove(e)},onTouchend:n[4]||=function(e){return o.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(g(!0),F(L,null,D(r.value,function(n,i){return g(),F(`div`,t({key:`p-galleria-thumbnail-item-${i}`,class:e.cx(`thumbnailItem`,{index:i,activeIndex:r.activeIndex}),role:`tab`,"data-p-active":r.activeIndex===i,"aria-selected":r.activeIndex===i,"aria-controls":r.containerId+`_item_`+i,onKeydown:function(e){return o.onThumbnailKeydown(e,i)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":r.activeIndex===i,"data-p-galleria-thumbnail-item-active":o.isItemActive(i),"data-p-galleria-thumbnail-item-start":o.firstItemAciveIndex()===i,"data-p-galleria-thumbnail-item-end":o.lastItemActiveIndex()===i}),[M(`div`,t({class:e.cx(`thumbnail`),tabindex:r.activeIndex===i?`0`:`-1`,"aria-label":o.ariaPageLabel(i+1),"aria-current":r.activeIndex===i?`page`:void 0,onClick:function(e){return o.onItemClick(i)}},{ref_for:!0},e.ptm(`thumbnail`)),[r.templates.thumbnail?(g(),U(m(r.templates.thumbnail),{key:0,item:n},null,8,[`item`])):G(``,!0)],16,Nn)],16,Mn)}),128))],16)],16),r.showThumbnailNavigators?A((g(),F(`button`,t({key:1,class:e.cx(`thumbnailNextButton`),disabled:o.isNavForwardDisabled,type:`button`,"aria-label":o.ariaNextButtonLabel,onClick:n[5]||=function(e){return o.navForward(e)}},Dn(Dn({},r.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(g(),U(m(r.templates.nextthumbnailicon||(r.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),t({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,Pn)),[[s]]):G(``,!0)],16)],16)}Tn.render=Fn;function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?In(Object(n),!0).forEach(function(t){Rn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Rn(e,t,n){return(t=zn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zn(e){var t=Bn(e,`string`);return Z(t)==`symbol`?t:t+``}function Bn(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Vn={name:`GalleriaContent`,hostName:`Galleria`,extends:i,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:Ln(Ln({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:fn,GalleriaThumbnails:Tn,TimesIcon:he},directives:{ripple:oe}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hn(Object(n),!0).forEach(function(t){Wn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wn(e,t,n){return(t=Gn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gn(e){var t=Kn(e,`string`);return Q(t)==`symbol`?t:t+``}function Kn(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var qn=[`id`,`aria-label`,`aria-roledescription`],Jn=[`aria-label`],Yn=[`aria-live`];function Xn(e,r,i,a,o,s){var c=n(`GalleriaItem`),l=n(`GalleriaThumbnails`),u=le(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(g(),F(`div`,t({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Un(Un({},e.$attrs.containerProps),s.getPTOptions(`root`))),[e.$attrs.fullScreen?A((g(),F(`button`,t({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":s.closeAriaLabel,onClick:r[0]||=function(t){return e.$emit(`mask-hide`)}},s.getPTOptions(`closeButton`)),[(g(),U(m(e.$attrs.templates.closeicon||`TimesIcon`),t({class:e.cx(`closeIcon`)},s.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,Jn)),[[u]]):G(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(g(),F(`div`,t({key:1,class:e.cx(`header`)},s.getPTOptions(`header`)),[(g(),U(m(e.$attrs.templates.header)))],16)):G(``,!0),M(`div`,t({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},s.getPTOptions(`content`)),[W(c,{id:e.$id,activeIndex:o.activeIndex,"onUpdate:activeIndex":r[1]||=function(e){return o.activeIndex=e},slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":r[2]||=function(e){return o.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:s.startSlideShow,onStopSlideshow:s.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(g(),U(l,{key:0,activeIndex:o.activeIndex,"onUpdate:activeIndex":r[3]||=function(e){return o.activeIndex=e},slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":r[4]||=function(e){return o.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:o.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:s.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:s.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):G(``,!0)],16,Yn),e.$attrs.templates&&e.$attrs.templates.footer?(g(),F(`div`,t({key:2,class:e.cx(`footer`)},s.getPTOptions(`footer`)),[(g(),U(m(e.$attrs.templates.footer)))],16)):G(``,!0)],16,qn)):G(``,!0)}Vn.render=Xn;var Zn={name:`Galleria`,extends:on,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&$e(),this.mask=null,this.container&&=(e.clear(this.container),null)},methods:{onBeforeEnter:function(t){e.set(`modal`,t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),Qe(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&ge(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){Se(this.target),this.target=null},onAfterLeave:function(t){e.clear(t),this.containerVisible=!1,$e(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:Vn,Portal:Ce},directives:{focustrap:Ze}},Qn=[`aria-modal`];function $n(e,r,i,a,o,s){var c=n(`GalleriaContent`),l=n(`Portal`),u=le(`focustrap`);return e.fullScreen?(g(),U(l,{key:0},{default:j(function(){return[o.containerVisible?(g(),F(`div`,t({key:0,ref:s.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[W(Ae,t({name:`p-galleria`,onBeforeEnter:s.onBeforeEnter,onEnter:s.onEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:``},e.ptm(`transition`)),{default:j(function(){return[e.visible?A((g(),U(c,t({key:0,ref:s.containerRef,onMaskHide:s.maskHide,templates:e.$slots,onActiveitemChange:s.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[u]]):G(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Qn)):G(``,!0)]}),_:1})):(g(),U(c,t({key:1,templates:e.$slots,onActiveitemChange:s.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}Zn.render=$n;var er=w.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}}),tr={name:`BaseSlider`,extends:xe,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:er,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function nr(e){"@babel/helpers - typeof";return nr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},nr(e)}function rr(e,t,n){return(t=ir(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ir(e){var t=ar(e,`string`);return nr(t)==`symbol`?t:t+``}function ar(e,t){if(nr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(nr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function or(e){return ur(e)||lr(e)||cr(e)||sr()}function sr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,t){if(e){if(typeof e==`string`)return dr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dr(e,t):void 0}}function lr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ur(e){if(Array.isArray(e))return dr(e)}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var fr={name:`Slider`,extends:tr,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+We(),this.initY=e.top+ce(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?Be(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?or(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||Ve(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}else if(this.horizontal)return{width:this.handlePosition+`%`};else return{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return se(rr({},this.orientation,this.orientation))}}},pr=[`data-p`],mr=[`data-p`],hr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],gr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],_r=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function vr(e,n,r,i,a,o){return g(),F(`div`,t({class:e.cx(`root`),onClick:n[18]||=function(){return o.onBarClick&&o.onBarClick.apply(o,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":o.dataP}),[M(`span`,t({class:e.cx(`range`),style:[e.sx(`range`),o.rangeStyle()]},e.ptm(`range`),{"data-p":o.dataP}),null,16,mr),e.range?G(``,!0):(g(),F(`span`,t({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),o.handleStyle()],onTouchstartPassive:n[0]||=function(e){return o.onDragStart(e)},onTouchmovePassive:n[1]||=function(e){return o.onDrag(e)},onTouchend:n[2]||=function(e){return o.onDragEnd(e)},onMousedown:n[3]||=function(e){return o.onMouseDown(e)},onKeydown:n[4]||=function(e){return o.onKeyDown(e)},onBlur:n[5]||=function(e){return o.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":o.dataP}),null,16,hr)),e.range?(g(),F(`span`,t({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),o.rangeStartHandleStyle()],onTouchstartPassive:n[6]||=function(e){return o.onDragStart(e,0)},onTouchmovePassive:n[7]||=function(e){return o.onDrag(e)},onTouchend:n[8]||=function(e){return o.onDragEnd(e)},onMousedown:n[9]||=function(e){return o.onMouseDown(e,0)},onKeydown:n[10]||=function(e){return o.onKeyDown(e,0)},onBlur:n[11]||=function(e){return o.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":o.dataP}),null,16,gr)):G(``,!0),e.range?(g(),F(`span`,t({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),o.rangeEndHandleStyle()],onTouchstartPassive:n[12]||=function(e){return o.onDragStart(e,1)},onTouchmovePassive:n[13]||=function(e){return o.onDrag(e)},onTouchend:n[14]||=function(e){return o.onDragEnd(e)},onMousedown:n[15]||=function(e){return o.onMouseDown(e,1)},onKeydown:n[16]||=function(e){return o.onKeyDown(e,1)},onBlur:n[17]||=function(e){return o.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":o.dataP}),null,16,_r)):G(``,!0)],16,pr)}fr.render=vr;var yr=O({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(g(),F(`ul`,{class:l([`list-disc`,{"ms-5":e.alignment===`left`}])},[(g(!0),F(L,null,D(e.bullets,e=>(g(),F(`li`,null,R(e),1))),256))],2))}}),br={class:`surface-text-muted text-xs font-semibold uppercase tracking-[0.24em]`},xr=O({__name:`BlogPostContentBlockLabel`,props:{label:{}},setup(e){return(t,n)=>(g(),F(`p`,br,R(e.label),1))}}),Sr={class:`w-full ql-editor no-input`},Cr=[`innerHTML`],wr=O({__name:`BlogPostDescription`,props:{description:{}},setup(e){return(t,n)=>(g(),F(`div`,Sr,[M(`div`,{innerHTML:e.description},null,8,Cr)]))}}),Tr={class:`w-full max-w-2xl rounded-primary border border-surface-300/70 bg-surface-0/80 p-4 shadow-sm backdrop-blur-sm`},Er={class:`mb-4 flex items-start justify-between gap-3`},Dr={class:`text-lg font-semibold`},Or={key:0,class:`text-sm opacity-75`},kr={key:0,class:`text-sm opacity-75`},Ar={key:1,class:`flex flex-col gap-2`},jr={class:`min-w-0 flex-1`},Mr={key:2,class:`text-sm opacity-75`},Nr=O({__name:`BlogPostChecklistWidget`,props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:[`toggle`],setup(e,{emit:t}){let n=e,r=t,{isDarkTheme:i}=Xe(),a=I(()=>n.items.filter(e=>!e.checked).length),o=I(()=>i.value?`line-through text-neutral-400`:`line-through text-slate-500`),s=I(()=>i.value?`text-xs text-neutral-400`:`text-xs text-slate-500`);return(t,n)=>(g(),F(`section`,Tr,[M(`div`,Er,[M(`div`,null,[M(`h3`,Dr,R(e.title),1),e.items.length?(g(),F(`p`,Or,R(`${a.value} open van ${e.items.length}`),1)):G(``,!0)])]),e.loading?(g(),F(`div`,kr,` Laden... `)):e.items.length?(g(),F(`ul`,Ar,[(g(!0),F(L,null,D(e.items,t=>(g(),F(`li`,{key:t.id,class:`flex items-center justify-between gap-3 rounded-2xl border border-surface-200/70 px-3 py-2`},[M(`div`,jr,[M(`p`,{class:l(t.checked?o.value:void 0)},R(t.label),3),t.detail?(g(),F(`p`,{key:0,class:l(s.value)},R(t.detail),3)):G(``,!0)]),W(N(Ye),{"model-value":t.checked,disabled:e.disabled,pt:{slider:{class:t.checked?`bg-primary-500`:void 0}},"onUpdate:modelValue":e=>r(`toggle`,t.id,e)},null,8,[`model-value`,`disabled`,`pt`,`onUpdate:modelValue`])]))),128))])):(g(),F(`p`,Mr,R(e.emptyLabel),1))]))}}),Pr={class:`contents`},Fr=O({__name:`BlogPostGroceryListWidget`,props:{post:{},title:{}},setup(e){let t=e,n=E(),r=h(),i=jt(),a=kt(),s=o(),{sortedProducts:c,getProductLabel:l}=At(),{products:u,isFetchLoading:d,isMutationLoading:f}=B(i),{productShopOptions:p}=B(a),{getHouseHoldUserOptionsNullable:m}=qe(),_=V(null),v=V(!1),y=V(!1),b=V(!1),x=V(!1),S=V(!1);function C(e){return!e.isOutOfStock}let ee=I(()=>c.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(C(e))-Number(C(t)))),w=I(()=>ee.value.map(e=>({id:e.id,label:l(e),detail:e.getSizeLabel(),checked:C(e)}))),T=I(()=>m(_.value?.houseHoldId,`Onbekend`));async function te(e,t){if(!n.firebaseUser)return;let r=u.value.find(t=>t.id===e);if(!r)return;if(t){_.value=r,v.value=!0;return}let a=r.clone();a.isOutOfStock=!0,await i.updateProduct(a,`Product "${r.name}" is niet meer op voorraad.`)}function ne(){_.value=null,v.value=!1}async function re(){n.firebaseUser&&!y.value&&(y.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!b.value&&!d.value&&(b.value=!0,await i.fetchProducts()),n.firebaseUser&&!x.value&&!p.value.length&&(x.value=!0,await a.fetchProductShops()),n.firebaseUser&&!S.value&&!s.publicUsers.length&&(S.value=!0,await s.fetchPublicUsers())}return Ie(()=>n.firebaseUser?.uid,async e=>{if(!e){y.value=!1,b.value=!1,x.value=!1,S.value=!1;return}await re()},{immediate:!0}),(t,r)=>(g(),F(`div`,Pr,[W(Nr,{title:e.title||`Boodschappenlijst`,"empty-label":`Er zijn nog geen producten gekoppeld aan deze blogpost.`,items:w.value,loading:N(d),disabled:!N(n).firebaseUser||N(f),onToggle:te},null,8,[`title`,`items`,`loading`,`disabled`]),_.value?(g(),U(Mt,{key:0,"is-open":v.value,mode:`buy-product`,"user-id-options":T.value,"store-options":N(p),"selected-product":_.value,"confirm-loading":N(f),onClose:ne},null,8,[`is-open`,`user-id-options`,`store-options`,`selected-product`,`confirm-loading`])):G(``,!0)]))}}),Ir=O({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(g(),F(`div`,{class:l([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit !py-5 md:border-none !rounded-none md:!rounded-primary`])},[W(N(nn),null,{default:j(()=>[e.thumb?(g(),F(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:T({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(g(),U(Et,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})],2))}}),Lr=[`innerHTML`],Rr=O({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=I(()=>Re(t.tableData)),r=I(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=I(()=>n.value.slice(1).filter(e=>e.some(e=>!!e)).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r])}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(g(),U(N(bt),{value:i.value,"pt:root":`w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:j(()=>[(g(!0),F(L,null,D(r.value,(t,n)=>(g(),U(N(yt),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:j(({data:r})=>[M(`span`,{class:l([`text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]},null,10,Lr)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),zr=O({__name:`BlogPostTasksWidget`,props:{post:{},title:{}},setup(e){let t=e,n=E(),r=h(),i=St(),{sortedTasks:a}=wt(),{tasks:o,isFetchLoading:s,isMutationLoading:c}=B(i),l=V(!1),u=V(!1);function d(e){return e.wasExecutedOnDate(new Date)}let f=I(()=>a.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(d(e))-Number(d(t)))),p=I(()=>f.value.map(e=>({id:e.id,label:e.name,checked:d(e)})));async function m(e,t){if(!n.firebaseUser)return;let r=o.value.find(t=>t.id===e);if(!r)return;let a=r.clone();if(t){a.executeLog.push(new Ct({executors:[n.firebaseUser.uid]})),await i.updateTask(a,`Taak "${r.name}" uitgevoerd`);return}let s=ne(new Date).getTime(),c=C(new Date).getTime();for(let e=a.executeLog.length-1;e>=0;e--){let t=a.executeLog[e];if(t.date.getTime()>=s&&t.date.getTime()<=c&&t.executors.includes(n.firebaseUser.uid)){a.executeLog.splice(e,1),await i.updateTask(a,`Taak "${r.name}" teruggezet`);break}}}async function _(){n.firebaseUser&&!u.value&&(u.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!l.value&&!s.value&&(l.value=!0,await i.fetchTasks())}return Ie(()=>n.firebaseUser?.uid,async e=>{if(!e){u.value=!1,l.value=!1;return}await _()},{immediate:!0}),(t,r)=>(g(),U(Nr,{title:e.title||`Taken`,"empty-label":`Er zijn nog geen taken gekoppeld aan deze blogpost.`,items:p.value,loading:N(s),disabled:!N(n).firebaseUser||N(c),onToggle:m},null,8,[`title`,`items`,`loading`,`disabled`]))}}),Br={class:`text-2xl font-bold`},Vr=O({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(g(),F(`h2`,Br,R(e.title),1))}}),Hr={key:2,class:`w-full flex flex-col gap-1 items-center`},Ur={key:0},Wr={key:0,class:`font-bold text-lg md:text-2xl`},Gr={key:1,class:`font-bold`},Kr={key:1},qr=O({__name:`BlogPostContent`,props:{post:{},block:{}},setup(e){let t=e,i=I(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),a=I(()=>i.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`),o=I(()=>t.block.isWidget()?``:t.block.label?.trim()??``);return(t,s)=>{let c=n(`BlogPostContent`,!0);return g(),F(`div`,{class:l([`flex flex-col`,{"items-start":e.block.alignment===`left`,"items-center":e.block.alignment===`center`||!e.block.alignment,"items-end":e.block.alignment===`right`}])},[o.value?(g(),U(xr,{key:0,label:o.value},null,8,[`label`])):G(``,!0),e.block.isBoolean()?(g(),U(N(Tt),{key:1,modelValue:e.block.value,"onUpdate:modelValue":s[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(g(),F(`div`,Hr,[W(N(xt),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?G(``,!0):(g(),F(`span`,Ur,R(e.block.value)+`% `,1))])):e.block.isString()?(g(),F(L,{key:3},[e.block.type===`title`?(g(),U(Vr,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(g(),U(wr,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(g(),U(Rr,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(g(),U(Ir,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(g(),U(Ir,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):G(``,!0)],64)):e.block.isStringList()?(g(),F(L,{key:4},[e.block.type===`bulletlist`?(g(),U(yr,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(g(),U(N(nn),{key:1},{default:j(()=>[W(N(Zn),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:j(e=>[W(Et,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):G(``,!0)],64)):e.block.isDate()?(g(),F(L,{key:5},[e.block.type===`date`?(g(),F(L,{key:0},[r(R(e.block.value?N(x)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(g(),F(L,{key:1},[e.block.value?(g(),U(Ot,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):G(``,!0)],64)):e.block.type===`timer`?(g(),F(L,{key:2},[e.block.value?(g(),U(Ot,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):G(``,!0)],64)):G(``,!0)],64)):e.block.isButton()?(g(),U(P,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,[`label`,`href`,`severity`])):e.block.isWidget()?(g(),F(L,{key:7},[e.block.type===`tasks`?(g(),U(zr,{key:0,post:e.post,title:e.block.label},null,8,[`post`,`title`])):e.block.type===`grocerylist`?(g(),U(Fr,{key:1,post:e.post,title:e.block.label},null,8,[`post`,`title`])):G(``,!0)],64)):e.block.isGroup()?(g(),U(N(gt),{key:8,class:`w-full`,onTabOpen:N(Ue)},{default:j(()=>[W(N(mt),{value:`0`,disabled:!e.block.value.length},{default:j(()=>[W(N(ht),{class:l([`px-0 bg-transparent !border-none`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:j(()=>[M(`div`,null,[i.value?(g(),F(L,{key:0},[i.value?(g(),F(`p`,Wr,R(e.block.value[0].value),1)):G(``,!0),a.value?(g(),F(`p`,Gr,R(e.block.value[1].value),1)):G(``,!0)],64)):e.block.value.length?(g(),F(`p`,Kr,`Klik om te openen`)):G(``,!0)])]),_:1},8,[`class`,`pt`]),W(N(pt),{pt:{content:{class:`flex flex-col gap-3`}}},{default:j(()=>[(g(!0),F(L,null,D(e.block.value.slice(a.value?2:+!!i.value),t=>(g(),U(c,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`onTabOpen`])):G(``,!0)],2)}}}),Jr={class:`flex flex-wrap justify-end h-fit gap-3`},Yr=O({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(g(),F(`div`,Jr,[W(Pt,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),W(K,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),Xr={class:`p-5 md:p-10`},Zr={class:`flex justify-between gap-3`},Qr={class:`flex flex-col`},$r={class:`text-2xl font-bold mb-2`},ei={key:0,class:`flex flex-wrap gap-2 mb-2`},ti={class:`surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`},ni={class:`flex justify-between h-fit mt-2 gap-2`},ri={class:`flex flex-wrap gap-3`},ii={class:`flex flex-col gap-3`},ai=O({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,r=ee(),i=E(),a=o(),s=p(),u=J(),{publicUsers:d}=B(a),{firebaseUser:f,isOwner:m}=B(i),{deleteBlogPost:h}=s,_=V(!1);r.currentRoute.value.name!==z.BLOG&&Bt(t.post);let v=I(()=>t.post.allowedUserIds?.length?d.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),y=I(()=>{let e=x(t.post.date);return t.post.dateUpdated?e+` - aangepast ${x(t.post.dateUpdated)}`:e}),b=I(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),S=I(()=>[`surface-panel !rounded-primary overflow-hidden`]),C=I(()=>`surface-panel-glass h-fit !p-0 !px-4 !py-1`),w=I(()=>`surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3`),T=()=>{u.openWith(t.post)},te=()=>{_.value=!0},ne=async()=>{await h(t.post.id)&&(_.value=!1)},re=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${c.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),ze.success(`Link gekopieerd!`)};return(t,r)=>{let i=n(`RouterLink`);return g(),F(L,null,[W(N(rt),{id:e.post.id,class:l(S.value)},{content:j(()=>[M(`div`,Xr,[M(`div`,Zr,[M(`div`,Qr,[W(i,{to:{name:N(z).BLOG_DETAILS,params:{postId:e.post.id}},class:`!no-underline hover:!underline`},{default:j(()=>[M(`h2`,$r,R(e.post.title),1)]),_:1},8,[`to`]),b.value.length?(g(),F(`div`,ei,[(g(!0),F(L,null,D(b.value,e=>(g(),U(N(Dt),{key:`${e.value}-${e.icon??``}`,class:`h-fit p-2`,value:e.value,severity:e.severity,rounded:e.rounded!==!1,icon:e.icon,pt:e.pt},null,8,[`value`,`severity`,`rounded`,`icon`,`pt`]))),128))])):G(``,!0),M(`p`,ti,R(y.value),1)]),W(P,{class:`h-fit`,severity:`secondary`,icon:`pi pi-copy`,onClick:re})]),M(`div`,ni,[M(`div`,ri,[(g(!0),F(L,null,D(v.value,e=>(g(),U(N(Fe),{key:e.id,class:l(C.value),icon:`pi pi-user`,label:e.id===N(f)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`class`,`label`]))),128))]),N(m)?(g(),F(`div`,{key:0,class:l([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[W(Yr,{onEditClicked:T,onDeleteClicked:te})],2)):G(``,!0)]),r[1]||=M(`div`,{class:`mt-5 h-px w-full border-t border-[var(--p-content-border-color)]`},null,-1),W(N(rt),{class:l(w.value)},{content:j(()=>[M(`div`,ii,[(g(!0),F(L,null,D(e.post.content,t=>(g(),U(qr,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))])]),_:1},8,[`class`]),W(tn,{post:e.post},null,8,[`post`])])]),_:1},8,[`id`,`class`]),W(it,{"is-open":_.value,"onUpdate:isOpen":r[0]||=e=>_.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:ne},null,8,[`is-open`,`entity-label`])],64)}}}),oi=b(Ft(),1),si={class:`block text-sm font-bold mb-2`},ci={class:`background-gray-dark rounded-2xl`},li={class:`grid grid-cols-6 items-center`},ui=O({__name:`ImageSliderField`,props:Ee({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=ue(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(g(),F(`div`,null,[M(`p`,si,R(e.label),1),M(`div`,ci,[W(N(oi.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:j(({element:t,index:i})=>[M(`div`,li,[a[1]||=M(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),W(It,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),W(K,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),di=w.extend({name:`editor`,style:`
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
`,classes:{root:function(e){return[`p-editor`,{"p-invalid":e.instance.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),fi={name:`BaseEditor`,extends:xe,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:di,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function mi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pi(Object(n),!0).forEach(function(t){hi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function hi(e,t,n){return(t=gi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gi(e){var t=_i(e,`string`);return $(t)==`symbol`?t:t+``}function _i(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var vi=function(){try{return window.Quill}catch{return null}}(),yi={name:`Editor`,extends:fi,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:mi({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};vi?(this.quill=new vi(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):De(()=>import(`./c-quill.js`).then(function(n){n&&Te(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function bi(e,n,r,i,o,c){return g(),F(`div`,t({class:e.cx(`root`)},e.ptmi(`root`)),[M(`div`,t({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[Ke(e.$slots,`toolbar`,{},function(){return[M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`select`,t({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[M(`option`,t({value:`1`},e.ptm(`option`)),`Heading`,16),M(`option`,t({value:`2`},e.ptm(`option`)),`Subheading`,16),M(`option`,t({value:`0`},e.ptm(`option`)),`Normal`,16)],16),M(`select`,t({class:`ql-font`},e.ptm(`font`)),[M(`option`,a(s(e.ptm(`option`))),null,16),M(`option`,t({value:`serif`},e.ptm(`option`)),null,16),M(`option`,t({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`button`,t({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),M(`button`,t({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),M(`button`,t({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`select`,t({class:`ql-color`},e.ptm(`color`)),null,16),M(`select`,t({class:`ql-background`},e.ptm(`background`)),null,16)],16),M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`button`,t({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),M(`button`,t({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),M(`select`,t({class:`ql-align`},e.ptm(`select`)),[M(`option`,t({defaultValue:``},e.ptm(`option`)),null,16),M(`option`,t({value:`center`},e.ptm(`option`)),null,16),M(`option`,t({value:`right`},e.ptm(`option`)),null,16),M(`option`,t({value:`justify`},e.ptm(`option`)),null,16)],16)],16),M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`button`,t({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),M(`button`,t({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),M(`button`,t({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),M(`span`,t({class:`ql-formats`},e.ptm(`formats`)),[M(`button`,t({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),M(`div`,t({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}yi.render=bi;var xi=[`for`],Si=O({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:n}){let r=e,i=I({get:()=>r.modelValue||``,set:e=>{c(`update:modelValue`,e)}}),a=I(()=>r.label?r.label+(r.required?` *`:``):void 0),o=I(()=>r.name+(r.id?`.${r.id}`:``)),s=({instance:e})=>{e.setContents(e.clipboard.convert({html:i.value}))},c=n;return(n,r)=>(g(),F(`div`,null,[e.label?(g(),F(`label`,t({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),R(a.value),17,xi)):G(``,!0),W(N(yi),t({id:o.value,placeholder:e.placeholder,modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,onLoad:s},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(g(),U(nt,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):G(``,!0)]))}}),Ci={class:`p-4 background-gray-dark rounded-2xl`},wi={class:`flex gap-3`},Ti=O({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=V(``),a=I({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}});I(()=>n.name+(n.id?`.`+n.id:``));let o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(g(),F(`div`,Ci,[W(N(oi.default),{modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:j(({element:t,index:r})=>[M(`div`,wi,[n[1]||=M(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),W(q,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])]))}}),Ei=[`for`],Di={class:`table w-full`},Oi={class:`table-header-group`},ki={key:0,class:`table-row`},Ai={key:0,class:`table-cell`},ji={class:`table-cell`},Mi={class:`table-row-group`},Ni={key:0,class:`table-cell`},Pi={key:1,class:`table-cell`},Fi={key:2,class:`table-cell`},Ii={class:`table-footer-group`},Li={class:`table-row`},Ri={key:0,class:`table-cell`},zi=O({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:n}){let r=e,i=n,a=Lt(Rt).greaterOrEqual(`md`),o=I({get:()=>Re(r.modelValue),set:e=>{i(`update:modelValue`,we(e))}}),s=I(()=>r.name+(r.id?`.`+r.id:``)),c=I(()=>a.value&&o.value[0]?.length<2),l=(e,t,n)=>{let r=[...o.value];r[e][t]=n,i(`update:modelValue`,we(r))},u=()=>{let e=o.value;if(e.length){let t=e[0];t.length?o.value=[...e,t.map(()=>``)]:o.value=[...e,[``]]}else o.value=[[``]]},d=e=>{let t=o.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),o.value=[...t]}},f=e=>{o.value.splice(e,1),o.value=o.value},p=()=>{o.value=o.value.map(e=>[...e,``])},m=e=>{let t=o.value;for(let n of t)n.splice(e,0,``);o.value=[...t]},h=e=>{o.value=o.value.map(t=>(t.splice(e,1),t))};return(n,r)=>(g(),F(`div`,null,[e.label?(g(),F(`label`,t({key:0,class:`block text-sm font-bold mb-2`,for:s.value},e.labelProps),R(e.label),17,Ei)):G(``,!0),M(`div`,Di,[M(`div`,Oi,[o.value.length&&o.value[0].length>1?(g(),F(`div`,ki,[o.value.length>1?(g(),F(`div`,Ai)):G(``,!0),(g(!0),F(L,null,D(o.value[0],(e,t)=>(g(),F(`div`,ji,[o.value.length&&o.value[0].length?(g(),U(P,{key:0,class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:c.value?`Remove column`:void 0,onClick:e=>h(t)},null,8,[`label`,`onClick`])):G(``,!0)]))),256))])):G(``,!0)]),M(`div`,Mi,[(g(!0),F(L,null,D(o.value,(t,n)=>(g(),F(`div`,{key:n,class:`table-row`},[o.value.length>1?(g(),F(`div`,Ni,[W(P,{class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:c.value?`Remove row`:void 0,onClick:e=>f(n)},null,8,[`label`,`onClick`])])):G(``,!0),(g(!0),F(L,null,D(t,(t,r)=>(g(),U(q,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`header`:`cell`,"onUpdate:modelValue":e=>l(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(g(),F(`div`,Pi,[W(P,{class:`md:text-start text-nowrap !text-white`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:c.value?`Add column`:void 0,onClick:p},null,8,[`label`])])):(g(),F(`div`,Fi,[W(P,{class:`md:text-start text-nowrap`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:c.value?`Insert row`:void 0,onClick:e=>d(n)},null,8,[`label`,`onClick`])]))]))),128))]),M(`div`,Ii,[M(`div`,Li,[o.value.length>1?(g(),F(`div`,Ri)):G(``,!0),(g(!0),F(L,null,D(o.value[0],(e,t)=>(g(),F(`div`,{class:`table-cell`,key:t},[t===0?(g(),U(P,{key:0,class:`md:text-start text-nowrap !text-white`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:c.value?`Add row`:void 0,onClick:u},null,8,[`label`])):(g(),U(P,{key:1,class:`md:text-start text-nowrap`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:c.value?`Insert row`:void 0,onClick:e=>m(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),Bi={class:`flex flex-col gap-4`},Vi={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},Hi={key:5,class:`flex flex-col gap-4 md:flex-row`},Ui={key:6,class:`rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80`},Wi={key:7,class:`rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80`},Gi=O({__name:`BlogPostContentBlockEditor`,props:{content:{},id:{}},setup(e){let t=e,{blogPostOriginal:n}=B(J()),r=()=>{t.content.isStringList()&&t.content.value.push(``)};return(t,i)=>(g(),F(`div`,Bi,[e.content.isBoolean()?(g(),U(Je,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[0]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.isNumber()?(g(),F(`div`,Vi,[W(N(fr),{class:`w-full`,name:e.content.id,modelValue:e.content.value,"onUpdate:modelValue":i[1]||=t=>e.content.value=t},null,8,[`name`,`modelValue`]),M(`p`,null,R(e.content.value)+`%`,1)])):e.content.isString()?(g(),F(L,{key:2},[e.content.type===`title`?(g(),U(q,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[2]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.type===`richtext`?(g(),U(Si,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[3]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.type===`table`?(g(),U(zi,{key:2,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[4]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.type===`coverimage`||e.content.type===`image`?(g(),U(It,{key:3,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[5]||=t=>e.content.value=t,"blog-post":N(n)},null,8,[`name`,`label`,`modelValue`,`blog-post`])):G(``,!0)],64)):e.content.isStringList()?(g(),F(L,{key:3},[e.content.type===`bulletlist`?(g(),U(Ti,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[6]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.type===`imageslider`?(g(),U(ui,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[7]||=t=>e.content.value=t,"blog-post":N(n)},null,8,[`name`,`label`,`modelValue`,`blog-post`])):G(``,!0),W(P,{severity:`secondary`,outlined:``,label:`Item toevoegen`,icon:`pi pi-plus`,onClick:r})],64)):e.content.isDate()?(g(),U(vt,{key:4,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":i[8]||=t=>e.content.value=t},null,8,[`name`,`label`,`modelValue`])):e.content.isButton()?(g(),F(`div`,Hi,[W(q,{class:`w-full`,name:`${e.content.id}-title`,label:`Knop titel`,modelValue:e.content.value.title,"onUpdate:modelValue":i[9]||=t=>e.content.value.title=t},null,8,[`name`,`modelValue`]),W(q,{class:`w-full`,name:`${e.content.id}-url`,label:`Knop link`,modelValue:e.content.value.url,"onUpdate:modelValue":i[10]||=t=>e.content.value.url=t},null,8,[`name`,`modelValue`]),W(tt,{class:`w-full`,name:`${e.content.id}-severity`,label:`Knop kleur`,modelValue:e.content.value.severity,"onUpdate:modelValue":i[11]||=t=>e.content.value.severity=t,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`help`,label:`Help`}]},null,8,[`name`,`modelValue`])])):e.content.isWidget()?(g(),F(`div`,Ui,` Deze widget toont automatisch de gekoppelde `+R(e.content.getLabel().toLowerCase())+` van deze blogpost. Het label overschrijft de standaardtitel in de widget. `,1)):e.content.isGroup()?(g(),F(`div`,Wi,` Een sectie heeft geen eigen waarde. `)):G(``,!0),W(tt,{name:`${e.content.id}-alignment`,label:`Uitlijning`,"model-value":e.content.alignment??`center`,"onUpdate:modelValue":i[12]||=t=>e.content.alignment=t,options:N(fe)},null,8,[`name`,`model-value`,`options`]),W(q,{name:`${e.content.id}-label`,label:`Label`,modelValue:e.content.label,"onUpdate:modelValue":i[13]||=t=>e.content.label=t},null,8,[`name`,`modelValue`])]))}}),Ki=O({__name:`BlogPostContentBlockMutationDialog`,props:{isOpen:{type:Boolean},content:{},id:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.content?(g(),U(et,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:`Waarde, uitlijning en optionele label van dit contentblok.`,"cancel-text":`Sluiten`,onCancel:r[0]||=e=>n(`close`)},{default:j(()=>[W(Gi,{id:e.id,content:e.content},null,8,[`id`,`content`])]),_:1},8,[`is-open`,`title`])):G(``,!0)}}),qi={class:`w-full flex flex-col gap-3`},Ji={class:`surface-panel-soft rounded-primary px-3 py-2`},Yi={class:`flex w-full items-center justify-between gap-3`},Xi={class:`flex gap-5`},Zi={class:`flex flex-col items-start`},Qi={class:`font-semibold`},$i={class:`surface-text-muted text-sm`},ea={key:1,class:`w-full flex items-center gap-3 justify-between`},ta={class:`flex items-center gap-5`},na={class:`flex flex-col items-start`},ra={class:`font-semibold`},ia={class:`surface-text-muted text-sm`},aa={class:`flex flex-col gap-1`},oa={class:`mt-3 flex flex-wrap gap-3 justify-center`},sa={class:`flex flex-col justify-center items-center gap-3`},ca=O({__name:`BlogPostContentBlocksDialog`,props:Ee({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Ee([`delete`],[`update:modelValue`]),setup(e){let t=ue(e,`modelValue`),r=V(`title`),i=V(null),a=V(!1),o=()=>{let e=de.createInstance(ke(),r.value,r.value,`center`);t.value.push(e),i.value=e.id,a.value=!1},s=e=>{let n=t.value.findIndex(t=>t.id===e);t.value.splice(n,1)},c=I(()=>t.value.find(e=>e.id===i.value)??null),l=e=>{i.value=e},u=()=>{i.value=null},d=()=>{a.value=!0},f=()=>{a.value=!1},p=e=>{let t=e.replace(/<[^>]+>/g,` `).replace(/\s+/g,` `).trim();return t.length>80?`${t.slice(0,77)}...`:t},m=e=>e.label||e.getLabel(),h=e=>e.isGroup()?e.value.length?e.value.length===1?`1 onderdeel`:`${e.value.length} onderdelen`:`Lege sectie`:e.isBoolean()?e.value?`Ingeschakeld`:`Uitgeschakeld`:e.isNumber()?`${e.value}%`:e.isString()?e.type===`coverimage`||e.type===`image`?e.value?`Afbeelding geselecteerd`:`Nog geen afbeelding geselecteerd`:e.value?p(e.value):`Nog geen inhoud ingevuld`:e.isStringList()?e.value.length?`${e.value.length} items`:`Nog geen items toegevoegd`:e.isDate()?e.value?x(new Date(e.value)):`Nog geen datum geselecteerd`:e.isButton()?e.value.title||e.value.url||`Nog geen knop ingevuld`:e.isWidget()?`Widget: ${e.getLabel().toLowerCase()}`:e.getLabel();return(i,p)=>{let _=n(`BlogPostContentBlocksDialog`,!0);return g(),F(`div`,qi,[t.value.length?(g(),U(N(oi.default),{key:0,ref:`draggableRef`,class:`flex flex-col gap-3`,modelValue:t.value,"onUpdate:modelValue":p[1]||=e=>t.value=e,itemKey:e=>e.id,handle:`.drag-handle`},{item:j(({element:e})=>[M(`div`,Ji,[e.isGroup()?(g(),U(N(gt),{key:0,class:`w-full`,onTabOpen:N(Ue)},{default:j(()=>[W(N(mt),{value:`0`},{default:j(()=>[W(N(ht),{class:`drag-handle`},{default:j(()=>[M(`div`,Yi,[M(`div`,Xi,[p[3]||=M(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),M(`div`,Zi,[M(`p`,Qi,R(m(e)),1),M(`p`,$i,R(h(e)),1)])]),M(`div`,{class:`flex gap-1 mr-3`,onClick:p[0]||=je(()=>{},[`stop`])},[W(Pt,{onClick:t=>l(e.id)},null,8,[`onClick`]),W(K,{onClick:t=>s(e.id)},null,8,[`onClick`])])])]),_:2},1024),W(N(pt),null,{default:j(()=>[W(_,{id:e.id,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,onDelete:t=>s(e.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`onTabOpen`])):(g(),F(`div`,ea,[M(`div`,ta,[p[4]||=M(`i`,{class:`drag-handle pi pi-arrows-v hover:cursor-pointer`},null,-1),M(`div`,na,[M(`p`,ra,R(m(e)),1),M(`p`,ia,R(h(e)),1)])]),M(`div`,aa,[W(Pt,{onClick:t=>l(e.id)},null,8,[`onClick`]),W(K,{onClick:t=>s(e.id)},null,8,[`onClick`])])]))])]),_:1},8,[`modelValue`,`itemKey`])):G(``,!0),W(Ki,{id:e.id,"is-open":!!c.value,content:c.value,onClose:u},null,8,[`id`,`is-open`,`content`]),M(`div`,oa,[W(Nt,{label:`Voeg content toe`,onClick:d})]),W(et,{"is-open":a.value,title:`Content toevoegen`,description:`Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.`,onCancel:f,onConfirm:o,"confirm-text":`Toevoegen`},{default:j(()=>[M(`div`,sa,[W(tt,{class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,modelValue:r.value,"onUpdate:modelValue":p[2]||=e=>r.value=e,options:Object.entries(N(me)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`])])]),_:1},8,[`is-open`])])}}}),la=O({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let{blogPostMutation:t}=B(J()),n=lt(I(()=>({title:{required:ut,minLength:ct(3),maxLength:at(50)}})),t);return(e,r)=>(g(),F(L,null,[W(q,{class:`w-full`,name:`title`,label:`Titel`,placeholder:`Geweldige Post`,modelValue:N(t).title,"onUpdate:modelValue":r[0]||=e=>N(t).title=e,error:N(n).title.$error?N(st)(N(n).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),W(ca,{modelValue:N(t).content,"onUpdate:modelValue":r[1]||=e=>N(t).content=e},null,8,[`modelValue`])],64))}}),ua=O({__name:`BlogPostSettingsDialog`,setup(e){let t=o(),{blogPostMutation:n}=B(J()),{allowedPublicUsers:r}=t,{mappedUsers:i}=zt(),a=I({get(){return!!n.value.datePinned},set(e){n.value.datePinned=e?new Date:null}}),s=V([]),c=ot.withMessage(`Invalid user ID's`,e=>!e.length||e.length===s.value.length),l=lt(I(()=>({allowedUserIds:{validAllowedUserIds:c}})),n);return Ie(()=>n.value.allowedUserIds,async e=>{s.value=await r(e)},{immediate:!0}),(e,t)=>(g(),F(L,null,[W(tt,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:N(n).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>N(n).allowedUserIds=e,error:N(l).allowedUserIds.$error?N(st)(N(l).allowedUserIds):``,options:N(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),W(Je,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e},null,8,[`modelValue`]),W(Je,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:N(n).locked,"onUpdate:modelValue":t[2]||=e=>N(n).locked=e},null,8,[`modelValue`]),W(Je,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:N(n).archived,"onUpdate:modelValue":t[3]||=e=>N(n).archived=e},null,8,[`modelValue`])],64))}}),da={ref:`dialog`,class:`pt-6 mb-4 xl:px-16`},fa=O({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,i=p(),a=y(),o=J(),{isBlogPostsMutationLoading:s}=B(i),{isOpen:c,blogPostOriginal:l,blogPostMutation:u,hasChanges:d}=B(o),f=lt(),m=I(()=>!!l.value?.allowedUserIds?.length&&!u.value.allowedUserIds?.length||!l.value?.allowedUserIds?.length&&!!u.value.allowedUserIds?.length),h=I(()=>He(l.value)),_=async()=>{await f.value.$validate()&&(l.value?m.value?(o.isOpen=!1,await i.toggleBlogPostVisibility(l.value,u.value.allowedUserIds.length?`private`:`public`)&&(o.close(),ze.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,u.value.id))):await i.updateBlogPost(u.value,h.value)&&(ze.success(`Bericht succesvol bijgewerkt`),o.close(),n(`scroll-to-updated`,u.value.id)):await i.createBlogPost(u.value)&&(o.close(),n(`scroll-to-updated`,u.value.id)))},v=async()=>{await a.deleteFilesOfBlogPost(u.value,l.value??void 0),o.close()};return(e,t)=>(g(),U(et,{isOpen:N(c),title:N(l)?`Bericht bijwerken`:`Bericht maken`,description:N(l)?`Werk dit bericht bij`:`Maak een nieuw bericht`,"confirm-text":N(l)?`Bijwerken`:`Maken`,"confirm-loading":N(s),"confirm-props":{disabled:!N(d)},onConfirm:_,onCancel:v},{default:j(()=>[M(`form`,da,[N(c)?(g(),U(N(gt),{key:0,"active-index":0,onTabOpen:N(Ue)},{default:j(()=>[W(N(mt),{value:`content`},{default:j(()=>[W(N(ht),null,{default:j(()=>[...t[0]||=[r(` Content `,-1)]]),_:1}),W(N(pt),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:j(()=>[W(la)]),_:1})]),_:1}),W(N(mt),{value:`settings`},{default:j(()=>[W(N(ht),null,{default:j(()=>[...t[1]||=[r(` Instellingen `,-1)]]),_:1}),W(N(pt),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:j(()=>[W(ua)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):G(``,!0)],512)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-text`,`confirm-loading`,`confirm-props`]))}});export{J as a,qr as i,ai as n,Vt as o,Yr as r,fa as t};