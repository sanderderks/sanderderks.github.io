const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","../bundle.js"])))=>i.map(i=>d[i]);
import{A as e,Ar as t,Br as n,Cr as r,D as i,Di as a,Dn as o,Dt as s,Er as c,Et as l,Fr as u,Ft as d,Gr as f,Gt as p,Hr as m,Ht as h,Ir as g,Jr as _,Jt as v,Kn as y,Kt as b,Lr as x,Mi as S,Mn as C,N as w,Nn as T,Nt as E,O as D,Oi as ee,Or as te,P as ne,Pn as re,Pt as O,Qn as ie,Qt as ae,Ri as oe,S as se,Tt as ce,Ur as k,V as le,Vr as A,Xn as j,Xr as M,Xt as ue,Yt as de,Zn as fe,Zr as N,Zt as pe,_r as P,b as F,br as I,c as me,ct as he,en as ge,et as _e,fr as ve,ft as ye,g as be,gr as L,hr as R,ht as xe,i as Se,ii as z,in as Ce,it as we,jr as B,ki as Te,kt as Ee,l as De,ln as Oe,lr as ke,mr as Ae,nn as je,nr as Me,o as Ne,oi as V,or as H,qn as U,qt as Pe,ri as Fe,rn as Ie,rr as W,st as Le,tt as Re,un as ze,ut as G,vn as Be,vr as K,vt as Ve,wr as q,wt as He,yr as J,zr as Y}from"../bundle.js";import{r as Ue}from"./c-Page.js";import{a as We,i as Ge,n as Ke,r as qe,t as Je}from"./c-Dialog.js";import{i as X,n as Ye,r as Xe,t as Ze}from"./c-card.js";import{t as Z}from"./c-TextField.js";import{n as Qe,t as $e}from"./c-SwitchField.js";import{t as et}from"./c-DeleteDialog.js";import{a as tt,d as nt,i as rt,s as it,t as at,u as ot}from"./c-dist.js";import{t as st}from"./c-chevronright.js";import{t as ct}from"./c-chevronup.js";import{i as lt,n as ut,r as dt,t as ft}from"./c-accordion.js";import{t as pt}from"./c-DateField.js";import{t as mt}from"./c-chevronleft.js";import{n as ht,t as gt}from"./c-datatable.js";import{t as _t}from"./c-progressbar.js";import{t as vt}from"./c-togglebutton.js";import{t as yt}from"./c-Image.js";import{t as bt}from"./c-tag.js";import{t as xt}from"./c-Countdown.js";import{t as St}from"./c-_plugin-vue_export-helper.js";import{a as Ct,t as wt}from"./c-productStore.js";import{i as Tt}from"./c-useProductHelper.js";import{t as Et}from"./c-CreateButton.js";import{t as Dt}from"./c-BuyLogMutationDialog.js";import{n as Ot,o as kt,t as At}from"./c-useTaskHelper.js";import{t as jt}from"./c-EditButton.js";import{t as Mt}from"./c-vuedraggable.umd.js";import{t as Nt}from"./c-FileUpload.js";import{n as Pt,t as Ft}from"./c-core.js";import{t as It}from"./c-useUsers.js";var Lt=e=>{let t=p(),n=Pe(),{previousCurrentBlogPost:r,isBlogPostDatabaseActionActive:i}=U(t),a=[],o=z(),s=n=>{n.metadata.hasPendingWrites||i.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(r.value,!0)},200))};u(async()=>{n.unread=n.unread.filter(t=>t.postId!==e.id);let r=ze(e),i=t.collections.blogPosts(r.isPrivate),o=n.collections.blogReactions(r.isPrivate),c=Me(i,e.id),l=fe(i,ie(`id`,`==`,e.id)),u=fe(o,ie(`post`,`==`,c));a.push(j(l,s)),a.push(j(u,s))}),g(()=>{clearTimeout(o.value),a.forEach(e=>{e()})})},Rt=()=>{let e=p(),t=O(),n=Pe(),{visibleBlogPosts:r,isBlogPostDatabaseActionActive:i}=U(e),{isLoggedIn:a}=U(t),o=[],s=z(),c=t=>{t.metadata.hasPendingWrites||i.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{r.value.length&&(await e.fetchBlogPosts({amount:r.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};u(()=>{n.unread=[],o.push(j(e.collections.blogPosts(!1),c)),o.push(j(n.collections.blogReactions(!1),c)),a.value&&(o.push(j(e.collections.blogPosts(!0),c)),o.push(j(n.collections.blogReactions(!0),c)))}),g(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},zt=e=>e?e.clone():new v,Q=y(`blogPostDialogStore`,()=>{let e=z(!1),t=z(null),n=z(zt(null)),r=z(!1),i=()=>{t.value=null,n.value=zt(null),r.value=!1};return _(()=>n.value,()=>{r.value=!ge(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=zt(r),e.value=!0},close:()=>{e.value=!1,i()}}}),Bt={class:`flex justify-between gap-3`},Vt={class:`flex flex-col`},Ht={class:`flex gap-2`},Ut=[`src`],Wt=[`src`],Gt={class:`flex flex-col`},Kt={class:`text-base mt-1 font-bold mb-2`},qt={key:1,class:`text-base mt-1 font-bold mb-2`},Jt={class:`!text-[var(--p-text-color)] mt-2`},Yt={key:0,class:`flex flex-col gap-2`},Xt=c({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=d(),s=O(),c=o(),l=Pe(),{routeLoading:u,routeLoadingId:f}=U(i),{firebaseUser:p,isLoggedIn:m,isOwner:h}=U(s),{publicUsers:g}=U(c),{isDatabaseDeletionActive:_}=U(l),{isDarkTheme:v}=We(),y=L(()=>g.value.find(e=>e.id===n.reaction.userId)),b=L(()=>p.value&&n.reaction.userId===p.value.uid||h.value),w=L(()=>`surface-panel p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary`),T=L(()=>`surface-text-muted text-sm mb-2 xl:whitespace-nowrap`);return(t,n)=>{let i=A(`RouterLink`);return x(),K(V(Ze),{id:e.reaction.id,class:a(w.value)},{content:M(()=>[P(`div`,Bt,[P(`div`,Vt,[P(`div`,Ht,[y.value?.avatar&&V(m)?(x(),K(i,{key:0,to:{name:V(H).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:M(()=>[P(`img`,{class:a([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":V(u)===V(H).USER_DETAILS&&V(f)===y.value?.id}]),src:y.value.avatar},null,10,Ut)]),_:1},8,[`to`])):y.value?.avatar?(x(),I(`img`,{key:1,class:a([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":V(u)===V(H).USER_DETAILS&&V(f)===y.value?.id}]),src:y.value.avatar},null,10,Wt)):J(``,!0),P(`div`,Gt,[V(m)?(x(),K(i,{key:0,to:{name:V(H).USER_DETAILS,params:{userId:e.reaction.userId}},class:`!no-underline hover:!underline`},{default:M(()=>[P(`h3`,Kt,S(y.value?.displayName||`Onbekende gebruiker`),1)]),_:1},8,[`to`])):(x(),I(`h3`,qt,S(y.value?.displayName||`Onbekende gebruiker`),1)),P(`p`,{class:a(T.value)},S(V(C)(e.reaction.date)),3)])]),P(`p`,Jt,S(e.reaction.message),1)]),b.value?(x(),I(`div`,Yt,[b.value&&!e.post.locked?(x(),K(X,{key:0,disabled:V(_),onClick:n[0]||=t=>r(`deleteClicked`,e.reaction)},null,8,[`disabled`])):J(``,!0)])):J(``,!0)])]),_:1},8,[`id`,`class`])}}}),Zt={class:`grid justify-items-center p-5 gap-5`},Qt=c({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=O(),r=Pe(),{firebaseUser:i,isLoggedIn:o}=U(n),{isDatabaseCreationActive:s,isDatabaseDeletionActive:c}=U(r),{isDarkTheme:u}=We(),d=z(!1),f=z(!1),p=z(null),m=Fe({reaction:``}),h=at({reaction:{required:ot}},m),g=L(()=>[...t.post.reactions].reverse()),_=L(()=>g.value.filter((e,t)=>t<3)),v=L(()=>g.value.filter((e,t)=>t>=3)),y=L(()=>t.post.locked||!o.value||s.value),b=L(()=>p.value?.message?p.value.message.length>120?`${p.value.message.slice(0,117)}...`:p.value.message:null),S=L(()=>b.value?`Reactie: \"${b.value}\"`:void 0),C=L(()=>`surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary`),w=L(()=>[`!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]`,y.value?{"!bg-[var(--p-surface-100)]":!s.value}:``,{"cursor-pointer":!o.value&&!t.post.locked}]),T=async()=>{if(s.value)return;if(!await h.value.$validate()||!i.value){je();return}let e=m.reaction;m.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new ae({userId:i.value.uid,postId:t.post.id,message:e}));m.reaction=n?``:e,n&&h.value.$reset(),je()};function E(e){p.value=e,f.value=!0}async function D(){p.value&&await r.deleteBlogReaction(t.post,p.value.id)&&(f.value=!1,p.value=null)}return(t,n)=>(x(),I(R,null,[P(`form`,{action:``,onSubmit:Ae(T,[`prevent`])},[P(`div`,Zt,[!V(o)||e.post.reactions.filter(e=>e.userId===V(i).uid).length<20?(x(),K(V(Ze),{key:0,class:a(C.value)},{content:M(()=>[q(Z,{class:`w-5/6 place-self-center`,id:e.post.id,inputProps:{class:w.value,disabled:y.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:V(o)?`Reageren`:`Log in om te reageren`,modelValue:m.reaction,"onUpdate:modelValue":n[0]||=e=>m.reaction=e,error:V(h).reaction.$error?V(rt)(V(h).reaction):``,required:``,onClick:n[1]||=()=>!V(o)&&!e.post.locked?V(l).push({name:V(H).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):J(``,!0),(x(!0),I(R,null,Y(_.value,t=>(x(),K(Xt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`]))),256)),(x(!0),I(R,null,Y(v.value,t=>N((x(),K(Xt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`])),[[ve,d.value]])),256)),e.post.reactions.length>3?(x(),K(F,{key:1,outlined:``,icon:d.value?`pi pi-angle-up`:`pi pi-angle-down`,label:d.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>d.value=!d.value},null,8,[`icon`,`label`])):J(``,!0)])],32),q(et,{"is-open":f.value,"onUpdate:isOpen":n[3]||=e=>f.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:S.value,"confirm-loading":V(c),onConfirm:D,onCancel:n[4]||=e=>p.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}}),$t={name:`DeferredContent`,extends:i,inheritAttrs:!1,emits:[`load`],style:D.extend({name:`deferredcontent`}),data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function en(e,t,r,i,a,o){return x(),I(`div`,B({ref:`container`},e.ptmi(`root`)),[a.loaded?n(e.$slots,`default`,{key:0}):J(``,!0)],16)}$t.render=en;var tn=D.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),nn={name:`BaseGalleria`,extends:i,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:tn,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function $(e){return sn(e)||on(e)||an(e)||rn()}function rn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function an(e,t){if(e){if(typeof e==`string`)return cn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cn(e,t):void 0}}function on(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function sn(e){if(Array.isArray(e))return cn(e)}function cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ln={name:`GalleriaItem`,hostName:`Galleria`,extends:i,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault();break}},onRightKey:function(){var e=$(G(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=$(G(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=$(G(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return Re(e,`data-p-active`)===!0}),n=He(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=$(G(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=He(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=$(G(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:mt,ChevronRightIcon:st},directives:{ripple:se}},un=[`disabled`],dn=[`id`,`aria-label`,`aria-roledescription`],fn=[`disabled`],pn=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],mn=[`tabindex`];function hn(e,t,n,r,i,a){var o=m(`ripple`);return x(),I(`div`,B({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[P(`div`,B({class:e.cx(`items`)},e.ptm(`items`)),[n.showItemNavigators?N((x(),I(`button`,B({key:0,type:`button`,class:e.cx(`prevButton`),onClick:t[0]||=function(e){return a.navBackward(e)},disabled:a.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(x(),K(k(n.templates.previousitemicon||`ChevronLeftIcon`),B({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,un)),[[o]]):J(``,!0),P(`div`,B({id:n.id+`_item_`+n.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm(`item`)),[n.templates.item?(x(),K(k(n.templates.item),{key:0,item:a.activeItem},null,8,[`item`])):J(``,!0)],16,dn),n.showItemNavigators?N((x(),I(`button`,B({key:1,type:`button`,class:e.cx(`nextButton`),onClick:t[1]||=function(e){return a.navForward(e)},disabled:a.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(x(),K(k(n.templates.nextitemicon||`ChevronRightIcon`),B({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,fn)),[[o]]):J(``,!0),n.templates.caption?(x(),I(`div`,B({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[n.templates.caption?(x(),K(k(n.templates.caption),{key:0,item:a.activeItem},null,8,[`item`])):J(``,!0)],16)):J(``,!0)],16),n.showIndicators?(x(),I(`ul`,B({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(x(!0),I(R,null,Y(n.value,function(t,r){return x(),I(`li`,B({key:`p-galleria-indicator-${r}`,class:e.cx(`indicator`,{index:r}),"aria-label":a.ariaPageLabel(r+1),"aria-selected":n.activeIndex===r,"aria-controls":n.id+`_item_`+r,onClick:function(e){return a.onIndicatorClick(r)},onMouseenter:function(e){return a.onIndicatorMouseEnter(r)},onKeydown:function(e){return a.onIndicatorKeyDown(e,r)}},{ref_for:!0},e.ptm(`indicator`,a.getIndicatorPTOptions(r)),{"data-p-active":a.isIndicatorItemActive(r)}),[n.templates.indicator?J(``,!0):(x(),I(`button`,B({key:0,type:`button`,tabindex:n.activeIndex===r?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,a.getIndicatorPTOptions(r))),null,16,mn)),n.templates.indicator?(x(),K(k(n.templates.indicator),{key:1,index:r,activeIndex:n.activeIndex,tabindex:n.activeIndex===r?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):J(``,!0)],16,pn)}),128))],16)):J(``,!0)],16)}ln.render=hn;function gn(e){return bn(e)||yn(e)||vn(e)||_n()}function _n(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vn(e,t){if(e){if(typeof e==`string`)return xn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xn(e,t):void 0}}function yn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function bn(e){if(Array.isArray(e))return xn(e)}function xn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Sn={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:i,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&_e(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&_e(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=G(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=G(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=gn(G(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return Re(e,`data-p-active`)===!0}),n=He(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=gn(G(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=He(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=G(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&he(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,ye(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=gn(this.responsiveOptions);var n=w();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return ne(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:mt,ChevronRightIcon:st,ChevronUpIcon:ct,ChevronDownIcon:De},directives:{ripple:se}};function Cn(e){"@babel/helpers - typeof";return Cn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Cn(e)}function wn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?wn(Object(n),!0).forEach(function(t){En(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function En(e,t,n){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dn(e){var t=On(e,`string`);return Cn(t)==`symbol`?t:t+``}function On(e,t){if(Cn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var kn=[`disabled`,`aria-label`],An=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],jn=[`tabindex`,`aria-label`,`aria-current`,`onClick`],Mn=[`disabled`,`aria-label`];function Nn(e,t,n,r,i,a){var o=m(`ripple`);return x(),I(`div`,B({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[P(`div`,B({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[n.showThumbnailNavigators?N((x(),I(`button`,B({key:0,class:e.cx(`thumbnailPrevButton`),disabled:a.isNavBackwardDisabled,type:`button`,"aria-label":a.ariaPrevButtonLabel,onClick:t[0]||=function(e){return a.navBackward(e)}},Tn(Tn({},n.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(x(),K(k(n.templates.previousthumbnailicon||(n.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),B({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,kn)),[[o]]):J(``,!0),P(`div`,B({class:e.cx(`thumbnailsViewport`),style:{height:n.isVertical?n.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[P(`div`,B({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:t[1]||=function(e){return a.onTransitionEnd(e)},onTouchstart:t[2]||=function(e){return a.onTouchStart(e)},onTouchmove:t[3]||=function(e){return a.onTouchMove(e)},onTouchend:t[4]||=function(e){return a.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(x(!0),I(R,null,Y(n.value,function(t,r){return x(),I(`div`,B({key:`p-galleria-thumbnail-item-${r}`,class:e.cx(`thumbnailItem`,{index:r,activeIndex:n.activeIndex}),role:`tab`,"data-p-active":n.activeIndex===r,"aria-selected":n.activeIndex===r,"aria-controls":n.containerId+`_item_`+r,onKeydown:function(e){return a.onThumbnailKeydown(e,r)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":n.activeIndex===r,"data-p-galleria-thumbnail-item-active":a.isItemActive(r),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===r,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===r}),[P(`div`,B({class:e.cx(`thumbnail`),tabindex:n.activeIndex===r?`0`:`-1`,"aria-label":a.ariaPageLabel(r+1),"aria-current":n.activeIndex===r?`page`:void 0,onClick:function(e){return a.onItemClick(r)}},{ref_for:!0},e.ptm(`thumbnail`)),[n.templates.thumbnail?(x(),K(k(n.templates.thumbnail),{key:0,item:t},null,8,[`item`])):J(``,!0)],16,jn)],16,An)}),128))],16)],16),n.showThumbnailNavigators?N((x(),I(`button`,B({key:1,class:e.cx(`thumbnailNextButton`),disabled:a.isNavForwardDisabled,type:`button`,"aria-label":a.ariaNextButtonLabel,onClick:t[5]||=function(e){return a.navForward(e)}},Tn(Tn({},n.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(x(),K(k(n.templates.nextthumbnailicon||(n.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),B({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,Mn)),[[o]]):J(``,!0)],16)],16)}Sn.render=Nn;function Pn(e){"@babel/helpers - typeof";return Pn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Pn(e)}function Fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function In(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Fn(Object(n),!0).forEach(function(t){Ln(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ln(e,t,n){return(t=Rn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e){var t=zn(e,`string`);return Pn(t)==`symbol`?t:t+``}function zn(e,t){if(Pn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Bn={name:`GalleriaContent`,hostName:`Galleria`,extends:i,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:In(In({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:ln,GalleriaThumbnails:Sn,TimesIcon:me},directives:{ripple:se}};function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Vn(e)}function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hn(Object(n),!0).forEach(function(t){Wn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wn(e,t,n){return(t=Gn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gn(e){var t=Kn(e,`string`);return Vn(t)==`symbol`?t:t+``}function Kn(e,t){if(Vn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var qn=[`id`,`aria-label`,`aria-roledescription`],Jn=[`aria-label`],Yn=[`aria-live`];function Xn(e,t,n,r,i,a){var o=A(`GalleriaItem`),s=A(`GalleriaThumbnails`),c=m(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(x(),I(`div`,B({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Un(Un({},e.$attrs.containerProps),a.getPTOptions(`root`))),[e.$attrs.fullScreen?N((x(),I(`button`,B({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":a.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},a.getPTOptions(`closeButton`)),[(x(),K(k(e.$attrs.templates.closeicon||`TimesIcon`),B({class:e.cx(`closeIcon`)},a.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,Jn)),[[c]]):J(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(x(),I(`div`,B({key:1,class:e.cx(`header`)},a.getPTOptions(`header`)),[(x(),K(k(e.$attrs.templates.header)))],16)):J(``,!0),P(`div`,B({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},a.getPTOptions(`content`)),[q(o,{id:e.$id,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return i.activeIndex=e},slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return i.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(x(),K(s,{key:0,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return i.activeIndex=e},slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return i.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:i.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):J(``,!0)],16,Yn),e.$attrs.templates&&e.$attrs.templates.footer?(x(),I(`div`,B({key:2,class:e.cx(`footer`)},a.getPTOptions(`footer`)),[(x(),K(k(e.$attrs.templates.footer)))],16)):J(``,!0)],16,qn)):J(``,!0)}Bn.render=Xn;var Zn={name:`Galleria`,extends:nn,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&qe(),this.mask=null,this.container&&=(e.clear(this.container),null)},methods:{onBeforeEnter:function(t){e.set(`modal`,t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),Ke(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&he(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){xe(this.target),this.target=null},onAfterLeave:function(t){e.clear(t),this.containerVisible=!1,qe(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:Bn,Portal:Se},directives:{focustrap:Ge}},Qn=[`aria-modal`];function $n(e,t,n,r,i,a){var o=A(`GalleriaContent`),s=A(`Portal`),c=m(`focustrap`);return e.fullScreen?(x(),K(s,{key:0},{default:M(function(){return[i.containerVisible?(x(),I(`div`,B({key:0,ref:a.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[q(ke,B({name:`p-galleria`,onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:M(function(){return[e.visible?N((x(),K(o,B({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[c]]):J(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Qn)):J(``,!0)]}),_:1})):(x(),K(o,B({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}Zn.render=$n;var er=D.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}}),tr={name:`BaseSlider`,extends:be,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:er,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function nr(e){"@babel/helpers - typeof";return nr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},nr(e)}function rr(e,t,n){return(t=ir(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ir(e){var t=ar(e,`string`);return nr(t)==`symbol`?t:t+``}function ar(e,t){if(nr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(nr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function or(e){return ur(e)||lr(e)||cr(e)||sr()}function sr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,t){if(e){if(typeof e==`string`)return dr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dr(e,t):void 0}}function lr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ur(e){if(Array.isArray(e))return dr(e)}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var fr={name:`Slider`,extends:tr,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+Ve(),this.initY=e.top+le(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?Le(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?or(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||Re(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}else if(this.horizontal)return{width:this.handlePosition+`%`};else return{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return ce(rr({},this.orientation,this.orientation))}}},pr=[`data-p`],mr=[`data-p`],hr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],gr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],_r=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function vr(e,t,n,r,i,a){return x(),I(`div`,B({class:e.cx(`root`),onClick:t[18]||=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":a.dataP}),[P(`span`,B({class:e.cx(`range`),style:[e.sx(`range`),a.rangeStyle()]},e.ptm(`range`),{"data-p":a.dataP}),null,16,mr),e.range?J(``,!0):(x(),I(`span`,B({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),a.handleStyle()],onTouchstartPassive:t[0]||=function(e){return a.onDragStart(e)},onTouchmovePassive:t[1]||=function(e){return a.onDrag(e)},onTouchend:t[2]||=function(e){return a.onDragEnd(e)},onMousedown:t[3]||=function(e){return a.onMouseDown(e)},onKeydown:t[4]||=function(e){return a.onKeyDown(e)},onBlur:t[5]||=function(e){return a.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":a.dataP}),null,16,hr)),e.range?(x(),I(`span`,B({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||=function(e){return a.onDragStart(e,0)},onTouchmovePassive:t[7]||=function(e){return a.onDrag(e)},onTouchend:t[8]||=function(e){return a.onDragEnd(e)},onMousedown:t[9]||=function(e){return a.onMouseDown(e,0)},onKeydown:t[10]||=function(e){return a.onKeyDown(e,0)},onBlur:t[11]||=function(e){return a.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":a.dataP}),null,16,gr)):J(``,!0),e.range?(x(),I(`span`,B({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||=function(e){return a.onDragStart(e,1)},onTouchmovePassive:t[13]||=function(e){return a.onDrag(e)},onTouchend:t[14]||=function(e){return a.onDragEnd(e)},onMousedown:t[15]||=function(e){return a.onMouseDown(e,1)},onKeydown:t[16]||=function(e){return a.onKeyDown(e,1)},onBlur:t[17]||=function(e){return a.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":a.dataP}),null,16,_r)):J(``,!0)],16,pr)}fr.render=vr;var yr=c({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(x(),I(`ul`,{class:a([`list-disc`,{"ms-5":e.alignment===`left`}])},[(x(!0),I(R,null,Y(e.bullets,e=>(x(),I(`li`,null,S(e),1))),256))],2))}}),br={class:`surface-text-muted text-xs font-semibold uppercase tracking-[0.24em] mt-3 mb-2`},xr=c({__name:`BlogPostContentBlockLabel`,props:{label:{}},setup(e){return(t,n)=>(x(),I(`p`,br,S(e.label),1))}}),Sr={class:`blog-post-richtext w-full ql-editor no-input`},Cr=[`innerHTML`],wr=St(c({__name:`BlogPostDescription`,props:{description:{}},setup(e){return(t,n)=>(x(),I(`div`,Sr,[P(`div`,{innerHTML:e.description},null,8,Cr)]))}}),[[`__scopeId`,`data-v-41fd797b`]]),Tr={class:`w-full max-w-2xl rounded-primary surface-panel-glass p-4 shadow-sm backdrop-blur-sm`},Er={class:`mb-4 flex items-start justify-between gap-3`},Dr={class:`text-lg font-semibold`},Or={key:0,class:`text-sm opacity-75`},kr={key:0,class:`text-sm opacity-75`},Ar={key:1,class:`flex flex-col gap-2`},jr={class:`min-w-0 flex-1`},Mr={key:2,class:`text-sm opacity-75`},Nr=c({__name:`BlogPostChecklistWidget`,props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:[`toggle`],setup(e,{emit:t}){let n=e,r=t,{isDarkTheme:i}=We(),o=L(()=>n.items.filter(e=>!e.checked).length),s=L(()=>i.value?`line-through text-neutral-400`:`line-through text-slate-500`),c=L(()=>i.value?`text-xs text-neutral-400`:`text-xs text-slate-500`);return(t,n)=>(x(),I(`section`,Tr,[P(`div`,Er,[P(`div`,null,[P(`h3`,Dr,S(e.title),1),e.items.length?(x(),I(`p`,Or,S(`${o.value} open van ${e.items.length}`),1)):J(``,!0)])]),e.loading?(x(),I(`div`,kr,` Laden... `)):e.items.length?(x(),I(`ul`,Ar,[(x(!0),I(R,null,Y(e.items,t=>(x(),I(`li`,{key:t.id,class:`flex items-center justify-between gap-3 rounded-2xl surface-panel-glass px-3 py-2`},[P(`div`,jr,[P(`p`,{class:a(t.checked?s.value:void 0)},S(t.label),3),t.detail?(x(),I(`p`,{key:0,class:a(c.value)},S(t.detail),3)):J(``,!0)]),q(V(Qe),{"model-value":t.checked,disabled:e.disabled,pt:{slider:{class:t.checked?`bg-primary-500`:void 0}},"onUpdate:modelValue":e=>r(`toggle`,t.id,e)},null,8,[`model-value`,`disabled`,`pt`,`onUpdate:modelValue`])]))),128))])):(x(),I(`p`,Mr,S(e.emptyLabel),1))]))}}),Pr={class:`contents`},Fr=c({__name:`BlogPostGroceryListWidget`,props:{post:{},title:{}},setup(e){let t=e,n=O(),r=h(),i=wt(),a=Ct(),s=o(),{sortedProducts:c,getProductLabel:l}=Tt(),{products:u,isFetchLoading:d,isMutationLoading:f}=U(i),{productShopOptions:p}=U(a),{getHouseHoldUserOptionsNullable:m}=Ue(),g=z(null),v=z(!1),y=z(!1),b=z(!1),S=z(!1),C=z(!1);function w(e){return!e.isOutOfStock}let T=L(()=>c.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(w(e))-Number(w(t)))),E=L(()=>T.value.map(e=>({id:e.id,label:l(e),detail:e.getSizeLabel(),checked:w(e)}))),D=L(()=>m(g.value?.houseHoldId,`Onbekend`));async function ee(e,t){if(!n.firebaseUser)return;let r=u.value.find(t=>t.id===e);if(!r)return;if(t){g.value=r,v.value=!0;return}let a=r.clone();a.isOutOfStock=!0,await i.updateProduct(a,`Product "${r.name}" is niet meer op voorraad.`)}function te(){g.value=null,v.value=!1}async function ne(){n.firebaseUser&&!y.value&&(y.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!b.value&&!d.value&&(b.value=!0,await i.fetchProducts()),n.firebaseUser&&!S.value&&!p.value.length&&(S.value=!0,await a.fetchProductShops()),n.firebaseUser&&!C.value&&!s.publicUsers.length&&(C.value=!0,await s.fetchPublicUsers())}return _(()=>n.firebaseUser?.uid,async e=>{if(!e){y.value=!1,b.value=!1,S.value=!1,C.value=!1;return}await ne()},{immediate:!0}),(t,r)=>(x(),I(`div`,Pr,[q(Nr,{title:e.title||`Boodschappenlijst`,"empty-label":`Er zijn nog geen producten gekoppeld aan deze blogpost.`,items:E.value,loading:V(d),disabled:!V(n).firebaseUser||V(f),onToggle:ee},null,8,[`title`,`items`,`loading`,`disabled`]),g.value?(x(),K(Dt,{key:0,"is-open":v.value,mode:`buy-product`,"user-id-options":D.value,"store-options":V(p),"selected-product":g.value,"confirm-loading":V(f),onClose:te},null,8,[`is-open`,`user-id-options`,`store-options`,`selected-product`,`confirm-loading`])):J(``,!0)]))}}),Ir=c({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(x(),I(`div`,{class:a([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit !py-5 md:border-none !rounded-none md:!rounded-primary`])},[q(V($t),null,{default:M(()=>[e.thumb?(x(),I(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:Te({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(x(),K(yt,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})],2))}}),Lr=[`innerHTML`],Rr=c({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=L(()=>Ie(t.tableData)),r=L(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=L(()=>n.value.slice(1).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=o(e[r]??``)}),t})),o=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(x(),K(V(gt),{value:i.value,"pt:root":`w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:M(()=>[(x(!0),I(R,null,Y(r.value,(t,n)=>(x(),K(V(ht),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:M(({data:r})=>[P(`span`,{class:a([`min-h-[1.5rem] text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]||`\xA0`},null,10,Lr)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),zr=c({__name:`BlogPostTasksWidget`,props:{post:{},title:{}},setup(e){let t=e,n=O(),r=h(),i=Ot(),{sortedTasks:a}=At(),{tasks:o,isFetchLoading:s,isMutationLoading:c}=U(i),l=z(!1),u=z(!1);function d(e){return e.wasExecutedOnDate(new Date)}let f=L(()=>a.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(d(e))-Number(d(t)))),p=L(()=>f.value.map(e=>({id:e.id,label:e.name,checked:d(e)})));async function m(e,t){if(!n.firebaseUser)return;let r=o.value.find(t=>t.id===e);if(!r)return;let a=r.clone();if(t){a.executeLog.push(new kt({executors:[n.firebaseUser.uid]})),await i.updateTask(a,`Taak "${r.name}" uitgevoerd`);return}let s=re(new Date).getTime(),c=T(new Date).getTime();for(let e=a.executeLog.length-1;e>=0;e--){let t=a.executeLog[e];if(t.date.getTime()>=s&&t.date.getTime()<=c&&t.executors.includes(n.firebaseUser.uid)){a.executeLog.splice(e,1),await i.updateTask(a,`Taak "${r.name}" teruggezet`);break}}}async function g(){n.firebaseUser&&!u.value&&(u.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!l.value&&!s.value&&(l.value=!0,await i.fetchTasks())}return _(()=>n.firebaseUser?.uid,async e=>{if(!e){u.value=!1,l.value=!1;return}await g()},{immediate:!0}),(t,r)=>(x(),K(Nr,{title:e.title||`Taken`,"empty-label":`Er zijn nog geen taken gekoppeld aan deze blogpost.`,items:p.value,loading:V(s),disabled:!V(n).firebaseUser||V(c),onToggle:m},null,8,[`title`,`items`,`loading`,`disabled`]))}}),Br={class:`text-2xl font-bold`},Vr=c({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(x(),I(`h2`,Br,S(e.title),1))}}),Hr={key:2,class:`w-full flex flex-col gap-1 items-center`},Ur={key:0},Wr={key:0,class:`font-bold text-lg md:text-2xl`},Gr={key:1,class:`font-bold`},Kr={key:1},qr=c({__name:`BlogPostContent`,props:{post:{},block:{}},setup(e){let t=e,n=L(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),i=L(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`),o=L(()=>t.block.isWidget()||t.block.isGroup()?``:t.block.label?.trim()??``);return(t,s)=>{let c=A(`BlogPostContent`,!0);return x(),I(`div`,{class:a([`flex flex-col`,{"items-start":e.block.alignment===`left`,"items-center":e.block.alignment===`center`||!e.block.alignment,"items-end":e.block.alignment===`right`}])},[o.value?(x(),K(xr,{key:0,label:o.value},null,8,[`label`])):J(``,!0),e.block.isBoolean()?(x(),K(V(vt),{key:1,modelValue:e.block.value,"onUpdate:modelValue":s[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(x(),I(`div`,Hr,[q(V(_t),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?J(``,!0):(x(),I(`span`,Ur,S(e.block.value)+`% `,1))])):e.block.isString()?(x(),I(R,{key:3},[e.block.type===`title`?(x(),K(Vr,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(x(),K(wr,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(x(),K(Rr,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(x(),K(Ir,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(x(),K(Ir,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):J(``,!0)],64)):e.block.isStringList()?(x(),I(R,{key:4},[e.block.type===`bulletlist`?(x(),K(yr,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(x(),K(V($t),{key:1},{default:M(()=>[q(V(Zn),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:M(e=>[q(yt,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):J(``,!0)],64)):e.block.isDate()?(x(),I(R,{key:5},[e.block.type===`date`?(x(),I(R,{key:0},[r(S(e.block.value?V(C)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(x(),I(R,{key:1},[e.block.value?(x(),K(xt,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):J(``,!0)],64)):e.block.type===`timer`?(x(),I(R,{key:2},[e.block.value?(x(),K(xt,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):J(``,!0)],64)):J(``,!0)],64)):e.block.isButton()?(x(),K(F,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,[`label`,`href`,`severity`])):e.block.isWidget()?(x(),I(R,{key:7},[e.block.type===`tasks`?(x(),K(zr,{key:0,post:e.post,title:e.block.label},null,8,[`post`,`title`])):e.block.type===`grocerylist`?(x(),K(Fr,{key:1,post:e.post,title:e.block.label},null,8,[`post`,`title`])):J(``,!0)],64)):e.block.isGroup()?(x(),K(V(ft),{key:8,class:`surface-panel-glass rounded-xl w-full max-w-2xl`,onTabOpen:V(Be)},{default:M(()=>[q(V(ut),{value:`0`,disabled:!e.block.value.length},{default:M(()=>[q(V(dt),{class:a([`px-0 bg-transparent !border-none`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:M(()=>[P(`div`,null,[e.block.label||n.value?(x(),I(R,{key:0},[e.block.label||n.value?(x(),I(`p`,Wr,S(e.block.label||e.block.value[0].value),1)):J(``,!0),i.value?(x(),I(`p`,Gr,S(e.block.value[1].value),1)):J(``,!0)],64)):(x(),I(`p`,Kr,`Klik om te openen`))])]),_:1},8,[`class`,`pt`]),q(V(lt),{pt:{content:{class:`flex flex-col gap-5 md:gap-10`}}},{default:M(()=>[(x(!0),I(R,null,Y(e.block.value.slice(i.value?2:+!!n.value),t=>(x(),K(c,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`onTabOpen`])):J(``,!0)],2)}}}),Jr={class:`flex flex-wrap justify-end h-fit gap-3`},Yr=c({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(x(),I(`div`,Jr,[q(jt,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),q(X,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),Xr={class:`p-5 md:p-10`},Zr={class:`flex justify-between gap-3`},Qr={class:`flex flex-col`},$r={class:`text-2xl font-bold mb-2`},ei={key:0,class:`flex flex-wrap gap-2 mb-2`},ti={class:`surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`},ni={class:`flex justify-between h-fit mt-2 gap-2`},ri={class:`flex flex-wrap gap-3`},ii={class:`flex flex-col gap-5 md:gap-10`},ai=c({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=E(),r=O(),i=o(),c=p(),l=Q(),{publicUsers:u}=U(i),{firebaseUser:d,isOwner:f}=U(r),{deleteBlogPost:m}=c,h=z(!1);n.currentRoute.value.name!==H.BLOG&&Lt(t.post);let g=L(()=>t.post.allowedUserIds?.length?u.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),_=L(()=>{let e=C(t.post.date);return t.post.dateUpdated?e+` - aangepast ${C(t.post.dateUpdated)}`:e}),v=L(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),y=L(()=>[`surface-panel !rounded-primary overflow-hidden`]),b=L(()=>`surface-panel-glass h-fit !p-0 !px-4 !py-1`),w=L(()=>`surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3`),T=()=>{l.openWith(t.post)},D=()=>{h.value=!0},ee=async()=>{await m(t.post.id)&&(h.value=!1)},te=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${s.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),W.success(`Link gekopieerd!`)};return(t,n)=>{let r=A(`RouterLink`);return x(),I(R,null,[q(V(Ze),{id:e.post.id,class:a(y.value)},{content:M(()=>[P(`div`,Xr,[P(`div`,Zr,[P(`div`,Qr,[q(r,{to:{name:V(H).BLOG_DETAILS,params:{postId:e.post.id}},class:`!no-underline hover:!underline`},{default:M(()=>[P(`h2`,$r,S(e.post.title),1)]),_:1},8,[`to`]),v.value.length?(x(),I(`div`,ei,[(x(!0),I(R,null,Y(v.value,e=>(x(),K(V(bt),{key:`${e.value}-${e.icon??``}`,class:`h-fit p-2`,value:e.value,severity:e.severity,rounded:e.rounded!==!1,icon:e.icon,pt:e.pt},null,8,[`value`,`severity`,`rounded`,`icon`,`pt`]))),128))])):J(``,!0),P(`p`,ti,S(_.value),1)]),q(F,{class:`h-fit`,severity:`secondary`,icon:`pi pi-copy`,onClick:te})]),P(`div`,ni,[P(`div`,ri,[(x(!0),I(R,null,Y(g.value,e=>(x(),K(V(Ne),{key:e.id,class:a(b.value),icon:`pi pi-user`,label:e.id===V(d)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`class`,`label`]))),128))]),V(f)?(x(),I(`div`,{key:0,class:a([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[q(Yr,{onEditClicked:T,onDeleteClicked:D})],2)):J(``,!0)]),n[1]||=P(`div`,{class:`mt-5 h-px w-full border-t border-[var(--p-content-border-color)]`},null,-1),q(V(Ze),{class:a(w.value)},{content:M(()=>[P(`div`,ii,[(x(!0),I(R,null,Y(e.post.content,t=>(x(),K(qr,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))])]),_:1},8,[`class`]),q(Qt,{post:e.post},null,8,[`post`])])]),_:1},8,[`id`,`class`]),q(et,{"is-open":h.value,"onUpdate:isOpen":n[0]||=e=>h.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:ee},null,8,[`is-open`,`entity-label`])],64)}}}),oi=oe(Mt(),1),si={class:`block text-sm font-bold mb-2`},ci={class:`background-gray-dark rounded-2xl`},li={class:`grid grid-cols-6 items-center`},ui=c({__name:`ImageSliderField`,props:t({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=f(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(x(),I(`div`,null,[P(`p`,si,S(e.label),1),P(`div`,ci,[q(V(oi.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:M(({element:t,index:i})=>[P(`div`,li,[a[1]||=P(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),q(Nt,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),q(X,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),di=D.extend({name:`editor`,style:`
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
`,classes:{root:function(e){return[`p-editor`,{"p-invalid":e.instance.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),fi={name:`BaseEditor`,extends:be,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:di,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function pi(e){"@babel/helpers - typeof";return pi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},pi(e)}function mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function hi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?mi(Object(n),!0).forEach(function(t){gi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mi(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function gi(e,t,n){return(t=_i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _i(e){var t=vi(e,`string`);return pi(t)==`symbol`?t:t+``}function vi(e,t){if(pi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(pi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var yi=function(){try{return window.Quill}catch{return null}}(),bi={name:`Editor`,extends:fi,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:hi({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};yi?(this.quill=new yi(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):Ee(()=>import(`./c-quill.js`).then(function(n){n&&we(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function xi(e,t,r,i,a,o){return x(),I(`div`,B({class:e.cx(`root`)},e.ptmi(`root`)),[P(`div`,B({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[n(e.$slots,`toolbar`,{},function(){return[P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`select`,B({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[P(`option`,B({value:`1`},e.ptm(`option`)),`Heading`,16),P(`option`,B({value:`2`},e.ptm(`option`)),`Subheading`,16),P(`option`,B({value:`0`},e.ptm(`option`)),`Normal`,16)],16),P(`select`,B({class:`ql-font`},e.ptm(`font`)),[P(`option`,ee(te(e.ptm(`option`))),null,16),P(`option`,B({value:`serif`},e.ptm(`option`)),null,16),P(`option`,B({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`button`,B({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),P(`button`,B({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),P(`button`,B({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`select`,B({class:`ql-color`},e.ptm(`color`)),null,16),P(`select`,B({class:`ql-background`},e.ptm(`background`)),null,16)],16),P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`button`,B({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),P(`button`,B({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),P(`select`,B({class:`ql-align`},e.ptm(`select`)),[P(`option`,B({defaultValue:``},e.ptm(`option`)),null,16),P(`option`,B({value:`center`},e.ptm(`option`)),null,16),P(`option`,B({value:`right`},e.ptm(`option`)),null,16),P(`option`,B({value:`justify`},e.ptm(`option`)),null,16)],16)],16),P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`button`,B({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),P(`button`,B({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),P(`button`,B({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),P(`span`,B({class:`ql-formats`},e.ptm(`formats`)),[P(`button`,B({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),P(`div`,B({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}bi.render=xi;var Si=[`for`],Ci=c({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=L({get:()=>n.modelValue||``,set:e=>{s(`update:modelValue`,e)}}),i=L(()=>n.label?n.label+(n.required?` *`:``):void 0),a=L(()=>n.name+(n.id?`.${n.id}`:``)),o=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},s=t;return(t,n)=>(x(),I(`div`,null,[e.label?(x(),I(`label`,B({key:0,class:`block text-sm font-bold mb-2`,for:a.value},e.labelProps),S(i.value),17,Si)):J(``,!0),q(V(bi),B({id:a.value,placeholder:e.placeholder,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,onLoad:o},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(x(),K(Xe,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):J(``,!0)]))}}),wi={class:`p-4 surface-panel-glass rounded-2xl`},Ti={key:0},Ei={class:`flex gap-3`},Di=c({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=z(``),a=L({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}}),o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(x(),I(`div`,wi,[a.value.length?(x(),K(V(oi.default),{key:1,modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:M(({element:t,index:r})=>[P(`div`,Ei,[n[1]||=P(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),q(Z,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])):(x(),I(`p`,Ti,` Er zijn nog geen items toegevoegd. `))]))}}),Oi=[`for`],ki={class:`table w-full`},Ai={class:`table-header-group`},ji={key:0,class:`table-row`},Mi={key:0,class:`table-cell table-action-cell`},Ni={class:`table-cell`},Pi={class:`table-row-group`},Fi={key:0,class:`table-cell table-action-cell`},Ii={key:1,class:`table-cell`},Li={key:2,class:`table-cell`},Ri={class:`table-footer-group`},zi={class:`table-row`},Bi={key:0,class:`table-cell table-action-cell`},Vi=St(c({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,i=Pt(Ft).greaterOrEqual(`md`),a=L({get:()=>Ie(n.modelValue),set:e=>{r(`update:modelValue`,Ce(e))}}),o=L(()=>n.name+(n.id?`.`+n.id:``)),s=L(()=>i.value&&a.value[0]?.length<2),c=(e,t,n)=>{let i=[...a.value];i[e][t]=n,r(`update:modelValue`,Ce(i))},l=()=>{let e=a.value;if(e.length){let t=e[0];t.length?a.value=[...e,t.map(()=>``)]:a.value=[...e,[``]]}else a.value=[[``]]},u=e=>{let t=a.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),a.value=[...t]}},d=e=>{a.value.splice(e,1),a.value=a.value},f=()=>{a.value=a.value.map(e=>[...e,``])},p=e=>{let t=a.value;for(let n of t)n.splice(e,0,``);a.value=[...t]},m=e=>{a.value=a.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(x(),I(`div`,null,[e.label?(x(),I(`label`,B({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),S(e.label),17,Oi)):J(``,!0),P(`div`,ki,[P(`div`,Ai,[a.value.length&&a.value[0].length>1?(x(),I(`div`,ji,[a.value.length>1?(x(),I(`div`,Mi)):J(``,!0),(x(!0),I(R,null,Y(a.value[0],(e,t)=>(x(),I(`div`,Ni,[a.value.length&&a.value[0].length?(x(),K(F,{key:0,class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Kolom verwijderen`:void 0,onClick:e=>m(t)},null,8,[`label`,`onClick`])):J(``,!0)]))),256))])):J(``,!0)]),P(`div`,Pi,[(x(!0),I(R,null,Y(a.value,(t,n)=>(x(),I(`div`,{key:n,class:`table-row`},[a.value.length>1?(x(),I(`div`,Fi,[q(F,{class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Rij verwijderen`:void 0,onClick:e=>d(n)},null,8,[`label`,`onClick`])])):J(``,!0),(x(!0),I(R,null,Y(t,(t,r)=>(x(),K(Z,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`Koptekst`:`Cel`,"onUpdate:modelValue":e=>c(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(x(),I(`div`,Ii,[q(F,{class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:s.value?`Kolom toevoegen`:void 0,onClick:f},null,8,[`label`])])):(x(),I(`div`,Li,[q(F,{class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Rij invoegen`:void 0,onClick:e=>u(n)},null,8,[`label`,`onClick`])]))]))),128))]),P(`div`,Ri,[P(`div`,zi,[a.value.length>1?(x(),I(`div`,Bi)):J(``,!0),(x(!0),I(R,null,Y(a.value[0],(e,t)=>(x(),I(`div`,{class:`table-cell`,key:t},[t===0?(x(),K(F,{key:0,class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:s.value?`Rij toevoegen`:void 0,onClick:l},null,8,[`label`])):(x(),K(F,{key:1,class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Kolom invoegen`:void 0,onClick:e=>p(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),[[`__scopeId`,`data-v-1c5e5d65`]]),Hi={class:`flex flex-col gap-4`},Ui={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},Wi={key:5,class:`flex flex-col gap-4 md:flex-row`},Gi={key:6,class:`rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80`},Ki=c({__name:`BlogPostContentBlockEditor`,props:{content:{},id:{}},setup(e){let t=e,{blogPostOriginal:n}=U(Q()),r=()=>{t.content.isStringList()&&t.content.value.push(``)};return(t,i)=>(x(),I(`div`,Hi,[q(Z,{name:`${e.content.id}-label`,label:`Label`,modelValue:e.content.label,"onUpdate:modelValue":i[0]||=t=>e.content.label=t},null,8,[`name`,`modelValue`]),e.content.isBoolean()?(x(),K($e,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[1]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.isNumber()?(x(),I(`div`,Ui,[q(V(fr),{class:`w-full`,name:e.content.id,modelValue:e.content.value,"onUpdate:modelValue":i[2]||=t=>e.content.value=t},null,8,[`name`,`modelValue`]),P(`p`,null,S(e.content.value)+`%`,1)])):e.content.isString()?(x(),I(R,{key:2},[e.content.type===`title`?(x(),K(Z,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[3]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`richtext`?(x(),K(Ci,{key:1,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[4]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`table`?(x(),K(Vi,{key:2,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[5]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`coverimage`||e.content.type===`image`?(x(),K(Nt,{key:3,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[6]||=t=>e.content.value=t,"blog-post":V(n)},null,8,[`name`,`modelValue`,`blog-post`])):J(``,!0)],64)):e.content.isStringList()?(x(),I(R,{key:3},[e.content.type===`bulletlist`?(x(),K(Di,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[7]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`imageslider`?(x(),K(ui,{key:1,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[8]||=t=>e.content.value=t,"blog-post":V(n)},null,8,[`name`,`modelValue`,`blog-post`])):J(``,!0),q(Et,{class:`w-fit`,label:`Item toevoegen`,onClick:r})],64)):e.content.isDate()?(x(),K(pt,{key:4,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":i[9]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.isButton()?(x(),I(`div`,Wi,[q(Z,{class:`w-full`,name:`${e.content.id}-title`,label:`Knop titel`,modelValue:e.content.value.title,"onUpdate:modelValue":i[10]||=t=>e.content.value.title=t},null,8,[`name`,`modelValue`]),q(Z,{class:`w-full`,name:`${e.content.id}-url`,label:`Knop link`,modelValue:e.content.value.url,"onUpdate:modelValue":i[11]||=t=>e.content.value.url=t},null,8,[`name`,`modelValue`]),q(Ye,{class:`w-full`,name:`${e.content.id}-severity`,label:`Knop kleur`,modelValue:e.content.value.severity,"onUpdate:modelValue":i[12]||=t=>e.content.value.severity=t,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`help`,label:`Help`}]},null,8,[`name`,`modelValue`])])):e.content.isWidget()?(x(),I(`div`,Gi,` Deze widget toont automatisch de gekoppelde `+S(e.content.getLabel().toLowerCase())+` van deze blogpost. Het label overschrijft de standaardtitel in de widget. `,1)):J(``,!0),q(Ye,{name:`${e.content.id}-alignment`,label:`Uitlijning`,"model-value":e.content.alignment??`center`,"onUpdate:modelValue":i[13]||=t=>e.content.alignment=t,options:V(de)},null,8,[`name`,`model-value`,`options`])]))}}),qi=c({__name:`BlogPostContentBlockMutationDialog`,props:{isOpen:{type:Boolean},content:{},id:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.content?(x(),K(Je,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:`Waarde, uitlijning en optionele label van dit contentblok.`,"confirm-text":`Sluiten`,"hide-cancel-button":``,onConfirm:r[0]||=e=>n(`close`),onCancel:r[1]||=e=>n(`close`)},{default:M(()=>[q(Ki,{id:e.id,content:e.content},null,8,[`id`,`content`])]),_:1},8,[`is-open`,`title`])):J(``,!0)}}),Ji={class:`w-full flex flex-col gap-10`},Yi={key:0,class:`pointer-events-none absolute inset-0 flex items-center justify-center rounded-primary border border-dashed border-surface-300 px-4 py-6 text-center text-sm surface-text-muted`},Xi={class:`px-3 py-2 flex w-full items-center justify-between gap-3`},Zi={class:`flex gap-5`},Qi={class:`flex flex-col items-start`},$i={class:`font-semibold`},ea={class:`surface-text-muted text-sm`},ta={key:1,class:`surface-panel-soft rounded-primary px-3 py-2 w-full flex items-center gap-3 justify-between`},na={class:`flex items-center gap-5`},ra={class:`flex flex-col items-start`},ia={class:`font-semibold`},aa={class:`surface-text-muted text-sm`},oa={class:`flex gap-1 items-center`},sa={class:`flex gap-3 justify-center`},ca={class:`flex flex-col justify-center items-center gap-3`},la=`blog-post-content-block-clipboard`,ua=c({__name:`BlogPostContentBlocksDialog`,props:t({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:t([`delete`],[`update:modelValue`]),setup(e){let t=f(e,`modelValue`),n=z(`title`),r=z(null),i=z(!1),o=z(g()),s=()=>{let e=ue.createInstance(Oe(),n.value,n.value,`center`);t.value.push(e),r.value=e.id,i.value=!1},c=e=>{let n=t.value.findIndex(t=>t.id===e);t.value.splice(n,1)},l=L(()=>t.value.find(e=>e.id===r.value)??null),u={name:`blog-post-content`,pull:!0,put:!0},d=e=>{r.value=e},p=()=>{r.value=null},m=()=>{i.value=!0},h=()=>{i.value=!1};function g(){return!!localStorage.getItem(la)}function _(e){return e instanceof Date?{__type:`date`,value:e.toISOString()}:Array.isArray(e)?e.map(_):e&&typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,_(t)])):e}function v(e){return Array.isArray(e)?e.map(v):e&&typeof e==`object`?`__type`in e&&e.__type===`date`&&`value`in e&&typeof e.value==`string`?new Date(e.value):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,v(t)])):e}function y(e){return e.id=Oe(),e.isGroup()&&e.value.forEach(y),e}function b(e){let t={version:1,block:_(e.serialize())};localStorage.setItem(la,JSON.stringify(t)),o.value=!0,W.success(`Content '${E(e)}' gekopieerd`)}function w(){let e=localStorage.getItem(la);if(!e){o.value=!1,W.warning(`Er staat nog geen contentblok klaar om te plakken`);return}try{let n=JSON.parse(e);if(n.version!==1||!n.block)throw Error(`Invalid content clipboard payload`);let r=v(n.block),i=y(ue.deserialize(r));t.value.push(i),o.value=!0,W.success(`Content '${E(i)}' geplakt`)}catch{o.value=!1,localStorage.removeItem(la),W.error(`Het gekopieerde contentblok kon niet worden geplakt`)}}let T=e=>{let t=e.replace(/<[^>]+>/g,` `).replace(/\s+/g,` `).trim();return t.length>80?`${t.slice(0,77)}...`:t},E=e=>e.type===`tasks`?e.label||`Taken`:e.type===`grocerylist`?e.label||`Boodschappenlijst`:e.label||`(geen naam)`,D=e=>e.isGroup()?e.value.length?e.value.length===1?`1 onderdeel`:`${e.value.length} onderdelen`:`Lege groep`:e.isBoolean()?e.value?`Ingeschakeld`:`Uitgeschakeld`:e.isNumber()?`${e.value}%`:e.isString()?e.type===`table`||e.type===`richtext`?`${e.value.length} tekens`:e.type===`coverimage`||e.type===`image`?e.value?`Afbeelding geselecteerd`:`Nog geen afbeelding geselecteerd`:e.value?T(e.value):`Nog geen inhoud ingevuld`:e.isStringList()?e.value.length?`${e.value.length} items`:`Nog geen items toegevoegd`:e.isDate()?e.value?C(new Date(e.value)):`Nog geen datum geselecteerd`:e.isButton()?e.value.title||e.value.url||`Nog geen knop ingevuld`:e.isWidget()?`Widget`:e.getLabel();return(r,f)=>{let g=A(`BlogPostContentBlocksDialog`,!0);return x(),I(`div`,Ji,[P(`div`,{class:a([`relative`,{"min-h-24":!t.value.length}])},[t.value.length?J(``,!0):(x(),I(`div`,Yi,` Sleep content hierheen om deze groep te vullen. `)),q(V(oi.default),{ref:`draggableRef`,class:a([`relative flex flex-col gap-10`,{"min-h-24":!t.value.length}]),modelValue:t.value,"onUpdate:modelValue":f[1]||=e=>t.value=e,itemKey:e=>e.id,group:u,handle:`.drag-handle`},{item:M(({element:e})=>[e.isGroup()?(x(),K(V(ft),{key:0,class:`w-full`,onTabOpen:V(Be)},{default:M(()=>[q(V(ut),{value:`0`},{default:M(()=>[q(V(dt),{class:`drag-handle`},{default:M(()=>[P(`div`,Xi,[P(`div`,Zi,[f[3]||=P(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),P(`div`,Qi,[P(`p`,$i,S(E(e)),1),P(`p`,ea,S(e.getLabel())+` - `+S(D(e).toLowerCase()),1)])]),P(`div`,{class:`flex gap-1 mr-3`,onClick:f[0]||=Ae(()=>{},[`stop`])},[q(F,{severity:`secondary`,icon:`pi pi-copy`,onClick:t=>b(e)},null,8,[`onClick`]),q(jt,{outlined:``,onClick:t=>d(e.id)},null,8,[`onClick`]),q(X,{onClick:t=>c(e.id)},null,8,[`onClick`])])])]),_:2},1024),q(V(lt),null,{default:M(()=>[q(g,{id:e.id,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,onDelete:t=>c(e.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`onTabOpen`])):(x(),I(`div`,ta,[P(`div`,na,[f[4]||=P(`i`,{class:`drag-handle pi pi-arrows-v hover:cursor-pointer`},null,-1),P(`div`,ra,[P(`p`,ia,S(E(e)),1),P(`p`,aa,S(e.getLabel())+` - `+S(D(e).toLowerCase()),1)])]),P(`div`,oa,[q(F,{severity:`secondary`,icon:`pi pi-copy`,onClick:t=>b(e)},null,8,[`onClick`]),q(jt,{outlined:``,onClick:t=>d(e.id)},null,8,[`onClick`]),q(X,{onClick:t=>c(e.id)},null,8,[`onClick`])])]))]),_:1},8,[`class`,`modelValue`,`itemKey`])],2),q(qi,{id:e.id,"is-open":!!l.value,content:l.value,onClose:p},null,8,[`id`,`is-open`,`content`]),P(`div`,sa,[q(Et,{class:`w-full md:w-1/2`,label:`Voeg content toe`,outlined:``,onClick:m}),q(F,{class:`w-full md:w-1/2`,label:`Plak gekopieerde content`,severity:`secondary`,outlined:``,icon:`pi pi-clone`,disabled:!o.value,onClick:w},null,8,[`disabled`])]),q(Je,{"is-open":i.value,title:`Content toevoegen`,description:`Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.`,onCancel:h,onConfirm:s,"confirm-text":`Toevoegen`},{default:M(()=>[P(`div`,ca,[q(Ye,{class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,modelValue:n.value,"onUpdate:modelValue":f[2]||=e=>n.value=e,options:Object.entries(V(pe)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`])])]),_:1},8,[`is-open`])])}}}),da=c({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let{blogPostMutation:t}=U(Q()),n=at(L(()=>({title:{required:ot,minLength:it(3),maxLength:tt(50)}})),t);return(e,r)=>(x(),I(R,null,[q(Z,{class:`w-full`,name:`title`,label:`Titel`,placeholder:`Geweldige Post`,modelValue:V(t).title,"onUpdate:modelValue":r[0]||=e=>V(t).title=e,error:V(n).title.$error?V(rt)(V(n).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),q(ua,{class:`mt-10`,modelValue:V(t).content,"onUpdate:modelValue":r[1]||=e=>V(t).content=e},null,8,[`modelValue`])],64))}}),fa={class:`flex flex-col gap-3 items-center`},pa=c({__name:`BlogPostSettingsDialog`,setup(e){let t=o(),{blogPostMutation:n}=U(Q()),{allowedPublicUsers:r}=t,{mappedUsers:i}=It(),a=L({get(){return!!n.value.datePinned},set(e){n.value.datePinned=e?new Date:null}}),s=z([]),c=nt.withMessage(`Invalid user ID's`,e=>!e.length||e.length===s.value.length),l=at(L(()=>({allowedUserIds:{validAllowedUserIds:c}})),n);return _(()=>n.value.allowedUserIds,async e=>{s.value=await r(e)},{immediate:!0}),(e,t)=>(x(),I(`div`,fa,[q(Ye,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:V(n).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>V(n).allowedUserIds=e,error:V(l).allowedUserIds.$error?V(rt)(V(l).allowedUserIds):``,options:V(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),q($e,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e},null,8,[`modelValue`]),q($e,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:V(n).locked,"onUpdate:modelValue":t[2]||=e=>V(n).locked=e},null,8,[`modelValue`]),q($e,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:V(n).archived,"onUpdate:modelValue":t[3]||=e=>V(n).archived=e},null,8,[`modelValue`])]))}}),ma={class:`mb-4 flex justify-end`},ha=c({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,r=p(),i=b(),a=Q(),{isBlogPostsMutationLoading:o}=U(r),{isOpen:s,blogPostOriginal:c,blogPostMutation:l,hasChanges:u}=U(a),d=at(),f=z(!1),m=L(()=>!!c.value?.allowedUserIds?.length&&!l.value.allowedUserIds?.length||!c.value?.allowedUserIds?.length&&!!l.value.allowedUserIds?.length),h=L(()=>ze(c.value)),g=async()=>{await d.value.$validate()&&(c.value?m.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(c.value,l.value.allowedUserIds.length?`private`:`public`)&&(a.close(),W.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,l.value.id))):await r.updateBlogPost(l.value,h.value)&&(W.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,l.value.id)):await r.createBlogPost(l.value)&&(a.close(),n(`scroll-to-updated`,l.value.id)))},_=async()=>{await i.deleteFilesOfBlogPost(l.value,c.value??void 0),a.close()},v=()=>{f.value=!1};return(e,t)=>(x(),I(R,null,[q(Je,{isOpen:V(s),title:V(c)?`Bericht bijwerken`:`Bericht maken`,description:``,"confirm-text":V(c)?`Bijwerken`:`Maken`,"confirm-loading":V(o),"confirm-props":{disabled:!V(u)},onConfirm:g,onCancel:_},{default:M(()=>[P(`div`,ma,[q(F,{severity:`secondary`,icon:`pi pi-cog`,label:`Instellingen`,onClick:t[0]||=e=>f.value=!0})]),q(da)]),_:1},8,[`isOpen`,`title`,`confirm-text`,`confirm-loading`,`confirm-props`]),q(Je,{isOpen:f.value,title:`Berichtinstellingen`,description:`Pas zichtbaarheid en andere berichtinstellingen aan.`,"cancel-text":`Sluiten`,onCancel:v},{default:M(()=>[q(pa)]),_:1},8,[`isOpen`])],64))}});export{Q as a,qr as i,ai as n,Rt as o,Yr as r,ha as t};