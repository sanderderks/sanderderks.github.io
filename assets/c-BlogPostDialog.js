const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","../bundle.js"])))=>i.map(i=>d[i]);
import{$t as e,A as t,Ar as n,Br as r,Cr as i,D as a,Dr as o,Dt as s,Et as c,Fn as l,Fr as u,Ft as d,Gr as f,Hi as p,Ht as m,Ii as h,In as g,Jt as _,Kr as v,Mi as y,Mr as b,N as x,Ni as S,Nt as C,O as w,Or as T,P as E,Pn as D,Pr as O,Pt as k,Qr as A,Qt as ee,S as j,Sr as M,Tt as te,Ur as N,V as ne,Vr as P,Wr as re,Xn as ie,Xt as ae,Yr as oe,Yt as se,Zn as F,Zt as ce,an as le,b as I,bn as ue,br as L,c as de,ci as R,ct as fe,dn as pe,ei as z,en as me,er as B,et as he,fn as ge,ft as _e,g as ve,gr as ye,ht as be,i as xe,in as Se,it as Ce,ji as V,kn as we,kt as Te,l as Ee,nn as De,nr as Oe,o as ke,on as Ae,or as je,pr as Me,qr as H,qt as Ne,si as Pe,sr as U,st as Fe,ti as W,tr as Ie,tt as Le,ui as G,ur as K,ut as q,vr as Re,vt as ze,wr as J,wt as Be,xr as Y,yr as X,zr as Ve}from"../bundle.js";import{r as He}from"./c-Page.js";import{a as Ue,i as We,n as Ge,r as Ke,t as qe}from"./c-Dialog.js";import{i as Z,n as Je,r as Ye,t as Xe}from"./c-card.js";import{t as Q}from"./c-TextField.js";import{n as Ze,t as Qe}from"./c-SwitchField.js";import{t as $e}from"./c-DeleteDialog.js";import{a as et,d as tt,i as nt,s as rt,t as it,u as at}from"./c-dist.js";import{t as ot}from"./c-chevronright.js";import{t as st}from"./c-chevronup.js";import{i as ct,n as lt,r as ut,t as dt}from"./c-accordion.js";import{t as ft}from"./c-DateField.js";import{t as pt}from"./c-chevronleft.js";import{n as mt,t as ht}from"./c-datatable.js";import{t as gt}from"./c-progressbar.js";import{t as _t}from"./c-togglebutton.js";import{t as vt}from"./c-Image.js";import{t as yt}from"./c-tag.js";import{t as bt}from"./c-Countdown.js";import{t as xt}from"./c-_plugin-vue_export-helper.js";import{a as St,t as Ct}from"./c-productStore.js";import{i as wt}from"./c-useProductHelper.js";import{t as Tt}from"./c-CreateButton.js";import{t as Et}from"./c-BuyLogMutationDialog.js";import{n as Dt,o as Ot,t as kt}from"./c-useTaskHelper.js";import{t as At}from"./c-EditButton.js";import{t as jt}from"./c-vuedraggable.umd.js";import{t as Mt}from"./c-FileUpload.js";import{n as Nt,t as Pt}from"./c-core.js";import{t as Ft}from"./c-useUsers.js";var It=e=>{let t=Ne(),n=se(),{previousCurrentBlogPost:i,isBlogPostDatabaseActionActive:a}=F(t),o=[],s=R(),c=n=>{n.metadata.hasPendingWrites||a.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(i.value,!0)},200))};Ve(async()=>{n.unread=n.unread.filter(t=>t.postId!==e.id);let r=ge(e),i=t.collections.blogPosts(r.isPrivate),a=n.collections.blogReactions(r.isPrivate),s=je(i,e.id),l=Ie(i,Oe(`id`,`==`,e.id)),u=Ie(a,Oe(`post`,`==`,s));o.push(B(l,c)),o.push(B(u,c))}),r(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},Lt=()=>{let e=Ne(),t=k(),n=se(),{visibleBlogPosts:i,isBlogPostDatabaseActionActive:a}=F(e),{isLoggedIn:o}=F(t),s=[],c=R(),l=t=>{t.metadata.hasPendingWrites||a.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{i.value.length&&(await e.fetchBlogPosts({amount:i.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};Ve(()=>{n.unread=[],s.push(B(e.collections.blogPosts(!1),l)),s.push(B(n.collections.blogReactions(!1),l)),o.value&&(s.push(B(e.collections.blogPosts(!0),l)),s.push(B(n.collections.blogReactions(!0),l)))}),r(()=>{clearTimeout(c.value),s.forEach(e=>{e()})})},Rt=e=>e?e.clone():new ae,$=ie(`blogPostDialogStore`,()=>{let e=R(!1),t=R(null),n=R(Rt(null)),r=R(!1),i=()=>{t.value=null,n.value=Rt(null),r.value=!1};return A(()=>n.value,()=>{r.value=!De(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=Rt(r),e.value=!0},close:()=>{e.value=!1,i()}}}),zt={class:`flex justify-between gap-3`},Bt={class:`flex flex-col`},Vt={class:`flex gap-2`},Ht=[`src`],Ut=[`src`],Wt={class:`flex flex-col`},Gt={class:`text-base font-bold`},Kt={key:1,class:`text-base font-bold`},qt={class:`!text-[var(--p-text-color)] mt-2`},Jt={key:0,class:`flex flex-col gap-2`},Yt=n({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,a=d(),o=k(),s=we(),c=se(),{routeLoading:l,routeLoadingId:u}=F(a),{firebaseUser:p,isLoggedIn:m,isOwner:g}=F(o),{publicUsers:_}=F(s),{isDatabaseDeletionActive:v}=F(c),y=L(()=>_.value.find(e=>e.id===n.reaction.userId)),b=L(()=>p.value&&n.reaction.userId===p.value.uid||g.value),x=L(()=>`surface-panel md:p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary`),S=L(()=>`surface-text-muted text-sm mb-2 xl:whitespace-nowrap`);return(t,n)=>{let a=f(`RouterLink`);return P(),M(G(Xe),{id:e.reaction.id,class:V(x.value)},{content:z(()=>[Y(`div`,zt,[Y(`div`,Bt,[Y(`div`,Vt,[y.value?.avatar&&G(m)?(P(),M(a,{key:0,to:{name:G(K).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:z(()=>[Y(`img`,{class:V([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":G(l)===G(K).USER_DETAILS&&G(u)===y.value?.id}]),src:y.value.avatar},null,10,Ht)]),_:1},8,[`to`])):y.value?.avatar?(P(),J(`img`,{key:1,class:V([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":G(l)===G(K).USER_DETAILS&&G(u)===y.value?.id}]),src:y.value.avatar},null,10,Ut)):i(``,!0),Y(`div`,Wt,[G(m)?(P(),M(a,{key:0,to:{name:G(K).USER_DETAILS,params:{userId:e.reaction.userId}},class:`!no-underline hover:!underline`},{default:z(()=>[Y(`h3`,Gt,h(y.value?.displayName||`Onbekende gebruiker`),1)]),_:1},8,[`to`])):(P(),J(`h3`,Kt,h(y.value?.displayName||`Onbekende gebruiker`),1)),Y(`p`,{class:V(S.value)},h(G(D)(e.reaction.date)),3)])]),Y(`p`,qt,h(e.reaction.message),1)]),b.value?(P(),J(`div`,Jt,[b.value&&!e.post.locked?(P(),M(Z,{key:0,disabled:G(v),onClick:n[0]||=t=>r(`deleteClicked`,e.reaction)},null,8,[`disabled`])):i(``,!0)])):i(``,!0)])]),_:1},8,[`id`,`class`])}}}),Xt={class:`grid justify-items-center p-5 gap-5`},Zt=n({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=k(),r=se(),{firebaseUser:a,isLoggedIn:o}=F(n),{isDatabaseCreationActive:s,isDatabaseDeletionActive:l}=F(r),{isDarkTheme:u}=Ue(),d=R(!1),f=R(!1),p=R(null),m=Pe({reaction:``}),h=it({reaction:{required:at}},m),g=L(()=>[...t.post.reactions].reverse()),_=L(()=>g.value.filter((e,t)=>t<3)),v=L(()=>g.value.filter((e,t)=>t>=3)),y=L(()=>t.post.locked||!o.value||s.value),b=L(()=>p.value?.message?p.value.message.length>120?`${p.value.message.slice(0,117)}...`:p.value.message:null),x=L(()=>b.value?`Reactie: \"${b.value}\"`:void 0),S=L(()=>`surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary`),C=L(()=>[`!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]`,y.value?{"!bg-[var(--p-surface-100)]":!s.value}:``,{"cursor-pointer":!o.value&&!t.post.locked}]),w=async()=>{if(s.value)return;if(!await h.value.$validate()||!a.value){Se();return}let e=m.reaction;m.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new me({userId:a.value.uid,postId:t.post.id,message:e}));m.reaction=n?``:e,n&&h.value.$reset(),Se()};function E(e){p.value=e,f.value=!0}async function D(){p.value&&await r.deleteBlogReaction(t.post,p.value.id)&&(f.value=!1,p.value=null)}return(t,n)=>(P(),J(X,null,[Y(`form`,{action:``,onSubmit:Re(w,[`prevent`])},[Y(`div`,Xt,[!G(o)||e.post.reactions.filter(e=>e.userId===G(a).uid).length<20?(P(),M(G(Xe),{key:0,class:V(S.value)},{content:z(()=>[T(Q,{class:`w-5/6 place-self-center`,id:e.post.id,inputProps:{class:C.value,disabled:y.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:G(o)?`Reageren`:`Log in om te reageren`,modelValue:m.reaction,"onUpdate:modelValue":n[0]||=e=>m.reaction=e,error:G(h).reaction.$error?G(nt)(G(h).reaction):``,required:``,onClick:n[1]||=()=>!G(o)&&!e.post.locked?G(c).push({name:G(K).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):i(``,!0),(P(!0),J(X,null,N(_.value,t=>(P(),M(Yt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`]))),256)),(P(!0),J(X,null,N(v.value,t=>W((P(),M(Yt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`])),[[ye,d.value]])),256)),e.post.reactions.length>3?(P(),M(I,{key:1,outlined:``,icon:d.value?`pi pi-angle-up`:`pi pi-angle-down`,label:d.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>d.value=!d.value},null,8,[`icon`,`label`])):i(``,!0)])],32),T($e,{"is-open":f.value,"onUpdate:isOpen":n[3]||=e=>f.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:x.value,"confirm-loading":G(l),onConfirm:D,onCancel:n[4]||=e=>p.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}}),Qt={name:`DeferredContent`,extends:a,inheritAttrs:!1,emits:[`load`],style:w.extend({name:`deferredcontent`}),data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function $t(e,t,n,r,a,o){return P(),J(`div`,u({ref:`container`},e.ptmi(`root`)),[a.loaded?re(e.$slots,`default`,{key:0}):i(``,!0)],16)}Qt.render=$t;var en=w.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),tn={name:`BaseGalleria`,extends:a,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:en,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function nn(e){return sn(e)||on(e)||an(e)||rn()}function rn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function an(e,t){if(e){if(typeof e==`string`)return cn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cn(e,t):void 0}}function on(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function sn(e){if(Array.isArray(e))return cn(e)}function cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ln={name:`GalleriaItem`,hostName:`Galleria`,extends:a,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault();break}},onRightKey:function(){var e=nn(q(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=nn(q(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=nn(q(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return Le(e,`data-p-active`)===!0}),n=Be(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=nn(q(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=Be(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=nn(q(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:pt,ChevronRightIcon:ot},directives:{ripple:j}},un=[`disabled`],dn=[`id`,`aria-label`,`aria-roledescription`],fn=[`disabled`],pn=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],mn=[`tabindex`];function hn(e,t,n,r,a,o){var s=v(`ripple`);return P(),J(`div`,u({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[Y(`div`,u({class:e.cx(`items`)},e.ptm(`items`)),[n.showItemNavigators?W((P(),J(`button`,u({key:0,type:`button`,class:e.cx(`prevButton`),onClick:t[0]||=function(e){return o.navBackward(e)},disabled:o.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(P(),M(H(n.templates.previousitemicon||`ChevronLeftIcon`),u({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,un)),[[s]]):i(``,!0),Y(`div`,u({id:n.id+`_item_`+n.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":o.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":o.ariaSlideLabel},e.ptm(`item`)),[n.templates.item?(P(),M(H(n.templates.item),{key:0,item:o.activeItem},null,8,[`item`])):i(``,!0)],16,dn),n.showItemNavigators?W((P(),J(`button`,u({key:1,type:`button`,class:e.cx(`nextButton`),onClick:t[1]||=function(e){return o.navForward(e)},disabled:o.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(P(),M(H(n.templates.nextitemicon||`ChevronRightIcon`),u({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,fn)),[[s]]):i(``,!0),n.templates.caption?(P(),J(`div`,u({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[n.templates.caption?(P(),M(H(n.templates.caption),{key:0,item:o.activeItem},null,8,[`item`])):i(``,!0)],16)):i(``,!0)],16),n.showIndicators?(P(),J(`ul`,u({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(P(!0),J(X,null,N(n.value,function(t,r){return P(),J(`li`,u({key:`p-galleria-indicator-${r}`,class:e.cx(`indicator`,{index:r}),"aria-label":o.ariaPageLabel(r+1),"aria-selected":n.activeIndex===r,"aria-controls":n.id+`_item_`+r,onClick:function(e){return o.onIndicatorClick(r)},onMouseenter:function(e){return o.onIndicatorMouseEnter(r)},onKeydown:function(e){return o.onIndicatorKeyDown(e,r)}},{ref_for:!0},e.ptm(`indicator`,o.getIndicatorPTOptions(r)),{"data-p-active":o.isIndicatorItemActive(r)}),[n.templates.indicator?i(``,!0):(P(),J(`button`,u({key:0,type:`button`,tabindex:n.activeIndex===r?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,o.getIndicatorPTOptions(r))),null,16,mn)),n.templates.indicator?(P(),M(H(n.templates.indicator),{key:1,index:r,activeIndex:n.activeIndex,tabindex:n.activeIndex===r?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):i(``,!0)],16,pn)}),128))],16)):i(``,!0)],16)}ln.render=hn;function gn(e){return bn(e)||yn(e)||vn(e)||_n()}function _n(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vn(e,t){if(e){if(typeof e==`string`)return xn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xn(e,t):void 0}}function yn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function bn(e){if(Array.isArray(e))return xn(e)}function xn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Sn={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:a,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&he(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&he(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=q(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=q(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=gn(q(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return Le(e,`data-p-active`)===!0}),n=Be(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=gn(q(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=Be(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=q(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&fe(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,_e(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=gn(this.responsiveOptions);var n=x();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return E(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:pt,ChevronRightIcon:ot,ChevronUpIcon:st,ChevronDownIcon:Ee},directives:{ripple:j}};function Cn(e){"@babel/helpers - typeof";return Cn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Cn(e)}function wn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?wn(Object(n),!0).forEach(function(t){En(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function En(e,t,n){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dn(e){var t=On(e,`string`);return Cn(t)==`symbol`?t:t+``}function On(e,t){if(Cn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var kn=[`disabled`,`aria-label`],An=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],jn=[`tabindex`,`aria-label`,`aria-current`,`onClick`],Mn=[`disabled`,`aria-label`];function Nn(e,t,n,r,a,o){var s=v(`ripple`);return P(),J(`div`,u({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[Y(`div`,u({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[n.showThumbnailNavigators?W((P(),J(`button`,u({key:0,class:e.cx(`thumbnailPrevButton`),disabled:o.isNavBackwardDisabled,type:`button`,"aria-label":o.ariaPrevButtonLabel,onClick:t[0]||=function(e){return o.navBackward(e)}},Tn(Tn({},n.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(P(),M(H(n.templates.previousthumbnailicon||(n.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),u({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,kn)),[[s]]):i(``,!0),Y(`div`,u({class:e.cx(`thumbnailsViewport`),style:{height:n.isVertical?n.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[Y(`div`,u({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:t[1]||=function(e){return o.onTransitionEnd(e)},onTouchstart:t[2]||=function(e){return o.onTouchStart(e)},onTouchmove:t[3]||=function(e){return o.onTouchMove(e)},onTouchend:t[4]||=function(e){return o.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(P(!0),J(X,null,N(n.value,function(t,r){return P(),J(`div`,u({key:`p-galleria-thumbnail-item-${r}`,class:e.cx(`thumbnailItem`,{index:r,activeIndex:n.activeIndex}),role:`tab`,"data-p-active":n.activeIndex===r,"aria-selected":n.activeIndex===r,"aria-controls":n.containerId+`_item_`+r,onKeydown:function(e){return o.onThumbnailKeydown(e,r)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":n.activeIndex===r,"data-p-galleria-thumbnail-item-active":o.isItemActive(r),"data-p-galleria-thumbnail-item-start":o.firstItemAciveIndex()===r,"data-p-galleria-thumbnail-item-end":o.lastItemActiveIndex()===r}),[Y(`div`,u({class:e.cx(`thumbnail`),tabindex:n.activeIndex===r?`0`:`-1`,"aria-label":o.ariaPageLabel(r+1),"aria-current":n.activeIndex===r?`page`:void 0,onClick:function(e){return o.onItemClick(r)}},{ref_for:!0},e.ptm(`thumbnail`)),[n.templates.thumbnail?(P(),M(H(n.templates.thumbnail),{key:0,item:t},null,8,[`item`])):i(``,!0)],16,jn)],16,An)}),128))],16)],16),n.showThumbnailNavigators?W((P(),J(`button`,u({key:1,class:e.cx(`thumbnailNextButton`),disabled:o.isNavForwardDisabled,type:`button`,"aria-label":o.ariaNextButtonLabel,onClick:t[5]||=function(e){return o.navForward(e)}},Tn(Tn({},n.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(P(),M(H(n.templates.nextthumbnailicon||(n.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),u({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,Mn)),[[s]]):i(``,!0)],16)],16)}Sn.render=Nn;function Pn(e){"@babel/helpers - typeof";return Pn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Pn(e)}function Fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function In(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Fn(Object(n),!0).forEach(function(t){Ln(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ln(e,t,n){return(t=Rn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e){var t=zn(e,`string`);return Pn(t)==`symbol`?t:t+``}function zn(e,t){if(Pn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Pn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Bn={name:`GalleriaContent`,hostName:`Galleria`,extends:a,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:In(In({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:ln,GalleriaThumbnails:Sn,TimesIcon:de},directives:{ripple:j}};function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Vn(e)}function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Hn(Object(n),!0).forEach(function(t){Wn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wn(e,t,n){return(t=Gn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gn(e){var t=Kn(e,`string`);return Vn(t)==`symbol`?t:t+``}function Kn(e,t){if(Vn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var qn=[`id`,`aria-label`,`aria-roledescription`],Jn=[`aria-label`],Yn=[`aria-live`];function Xn(e,t,n,r,a,o){var s=f(`GalleriaItem`),c=f(`GalleriaThumbnails`),l=v(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(P(),J(`div`,u({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Un(Un({},e.$attrs.containerProps),o.getPTOptions(`root`))),[e.$attrs.fullScreen?W((P(),J(`button`,u({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},o.getPTOptions(`closeButton`)),[(P(),M(H(e.$attrs.templates.closeicon||`TimesIcon`),u({class:e.cx(`closeIcon`)},o.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,Jn)),[[l]]):i(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(P(),J(`div`,u({key:1,class:e.cx(`header`)},o.getPTOptions(`header`)),[(P(),M(H(e.$attrs.templates.header)))],16)):i(``,!0),Y(`div`,u({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},o.getPTOptions(`content`)),[T(s,{id:e.$id,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return a.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:o.startSlideShow,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(P(),M(c,{key:0,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return a.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:a.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:o.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):i(``,!0)],16,Yn),e.$attrs.templates&&e.$attrs.templates.footer?(P(),J(`div`,u({key:2,class:e.cx(`footer`)},o.getPTOptions(`footer`)),[(P(),M(H(e.$attrs.templates.footer)))],16)):i(``,!0)],16,qn)):i(``,!0)}Bn.render=Xn;var Zn={name:`Galleria`,extends:tn,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&Ke(),this.mask=null,this.container&&=(t.clear(this.container),null)},methods:{onBeforeEnter:function(e){t.set(`modal`,e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),Ge(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&fe(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){be(this.target),this.target=null},onAfterLeave:function(e){t.clear(e),this.containerVisible=!1,Ke(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:Bn,Portal:xe},directives:{focustrap:We}},Qn=[`aria-modal`];function $n(e,t,n,r,a,o){var s=f(`GalleriaContent`),c=f(`Portal`),l=v(`focustrap`);return e.fullScreen?(P(),M(c,{key:0},{default:z(function(){return[a.containerVisible?(P(),J(`div`,u({key:0,ref:o.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[T(Me,u({name:`p-galleria`,onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:``},e.ptm(`transition`)),{default:z(function(){return[e.visible?W((P(),M(s,u({key:0,ref:o.containerRef,onMaskHide:o.maskHide,templates:e.$slots,onActiveitemChange:o.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[l]]):i(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Qn)):i(``,!0)]}),_:1})):(P(),M(s,u({key:1,templates:e.$slots,onActiveitemChange:o.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}Zn.render=$n;var er=w.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}}),tr={name:`BaseSlider`,extends:ve,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:er,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function nr(e){"@babel/helpers - typeof";return nr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},nr(e)}function rr(e,t,n){return(t=ir(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ir(e){var t=ar(e,`string`);return nr(t)==`symbol`?t:t+``}function ar(e,t){if(nr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(nr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function or(e){return ur(e)||lr(e)||cr(e)||sr()}function sr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,t){if(e){if(typeof e==`string`)return dr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dr(e,t):void 0}}function lr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ur(e){if(Array.isArray(e))return dr(e)}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var fr={name:`Slider`,extends:tr,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+ze(),this.initY=e.top+ne(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?Fe(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?or(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||Le(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}else if(this.horizontal)return{width:this.handlePosition+`%`};else return{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return te(rr({},this.orientation,this.orientation))}}},pr=[`data-p`],mr=[`data-p`],hr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],gr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],_r=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function vr(e,t,n,r,a,o){return P(),J(`div`,u({class:e.cx(`root`),onClick:t[18]||=function(){return o.onBarClick&&o.onBarClick.apply(o,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":o.dataP}),[Y(`span`,u({class:e.cx(`range`),style:[e.sx(`range`),o.rangeStyle()]},e.ptm(`range`),{"data-p":o.dataP}),null,16,mr),e.range?i(``,!0):(P(),J(`span`,u({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),o.handleStyle()],onTouchstartPassive:t[0]||=function(e){return o.onDragStart(e)},onTouchmovePassive:t[1]||=function(e){return o.onDrag(e)},onTouchend:t[2]||=function(e){return o.onDragEnd(e)},onMousedown:t[3]||=function(e){return o.onMouseDown(e)},onKeydown:t[4]||=function(e){return o.onKeyDown(e)},onBlur:t[5]||=function(e){return o.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":o.dataP}),null,16,hr)),e.range?(P(),J(`span`,u({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),o.rangeStartHandleStyle()],onTouchstartPassive:t[6]||=function(e){return o.onDragStart(e,0)},onTouchmovePassive:t[7]||=function(e){return o.onDrag(e)},onTouchend:t[8]||=function(e){return o.onDragEnd(e)},onMousedown:t[9]||=function(e){return o.onMouseDown(e,0)},onKeydown:t[10]||=function(e){return o.onKeyDown(e,0)},onBlur:t[11]||=function(e){return o.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":o.dataP}),null,16,gr)):i(``,!0),e.range?(P(),J(`span`,u({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),o.rangeEndHandleStyle()],onTouchstartPassive:t[12]||=function(e){return o.onDragStart(e,1)},onTouchmovePassive:t[13]||=function(e){return o.onDrag(e)},onTouchend:t[14]||=function(e){return o.onDragEnd(e)},onMousedown:t[15]||=function(e){return o.onMouseDown(e,1)},onKeydown:t[16]||=function(e){return o.onKeyDown(e,1)},onBlur:t[17]||=function(e){return o.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":o.dataP}),null,16,_r)):i(``,!0)],16,pr)}fr.render=vr;var yr={class:V([`list-disc ms-10 md:ms-5 py-3`])},br=n({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(P(),J(`ul`,yr,[(P(!0),J(X,null,N(e.bullets,e=>(P(),J(`li`,null,h(e),1))),256))]))}}),xr={class:`ps-5 md:ps-0 surface-text-muted text-xs font-semibold uppercase tracking-[0.24em] mt-3 mb-2`},Sr=n({__name:`BlogPostContentBlockLabel`,props:{label:{}},setup(e){return(t,n)=>(P(),J(`p`,xr,h(e.label),1))}}),Cr={class:`blog-post-richtext w-full ql-editor no-input`},wr=[`innerHTML`],Tr=xt(n({__name:`BlogPostDescription`,props:{description:{}},setup(e){let t=e,n=L(()=>t.description.replace(/&nbsp;|\u00a0/g,` `));return(e,t)=>(P(),J(`div`,Cr,[Y(`div`,{innerHTML:n.value},null,8,wr)]))}}),[[`__scopeId`,`data-v-dbb96c20`]]),Er={class:`w-full max-w-2xl rounded-primary p-4 shadow-sm backdrop-blur-sm`},Dr={class:`mb-4 flex items-start justify-between gap-3`},Or={class:`text-lg font-semibold`},kr={key:0,class:`text-sm opacity-75`},Ar={key:0,class:`text-sm opacity-75`},jr={key:1,class:`flex flex-col gap-2`},Mr={class:`min-w-0 flex-1`},Nr={key:2,class:`text-sm opacity-75`},Pr=`overflow-wrap-anywhere break-words`,Fr=xt(n({__name:`BlogPostChecklistWidget`,props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:[`toggle`],setup(e,{emit:t}){let n=e,r=t,{isDarkTheme:a}=Ue(),o=L(()=>n.items.filter(e=>!e.checked).length),s=L(()=>a.value?`line-through text-neutral-400`:`line-through text-slate-500`),c=L(()=>a.value?`text-xs text-neutral-400`:`text-xs text-slate-500`);return(t,n)=>(P(),J(`section`,Er,[Y(`div`,Dr,[Y(`div`,null,[Y(`h3`,Or,h(e.title),1),e.items.length?(P(),J(`p`,kr,h(`${o.value} open van ${e.items.length}`),1)):i(``,!0)])]),e.loading?(P(),J(`div`,Ar,` Laden... `)):e.items.length?(P(),J(`ul`,jr,[(P(!0),J(X,null,N(e.items,t=>(P(),J(`li`,{key:t.id,class:`flex items-center justify-between gap-3 rounded-2xl surface-panel-glass px-3 py-2`},[Y(`div`,Mr,[Y(`p`,{class:V([Pr,t.checked?s.value:void 0])},h(t.label),3),t.detail?(P(),J(`p`,{key:0,class:V([Pr,c.value])},h(t.detail),3)):i(``,!0)]),T(G(Ze),{"model-value":t.checked,disabled:e.disabled,pt:{slider:{class:t.checked?`bg-primary-500`:void 0}},"onUpdate:modelValue":e=>r(`toggle`,t.id,e)},null,8,[`model-value`,`disabled`,`pt`,`onUpdate:modelValue`])]))),128))])):(P(),J(`p`,Nr,h(e.emptyLabel),1))]))}}),[[`__scopeId`,`data-v-82d2dbf2`]]),Ir={class:`contents`},Lr=n({__name:`BlogPostGroceryListWidget`,props:{post:{},title:{}},setup(e){let t=e,n=k(),r=m(),a=Ct(),o=St(),s=we(),{sortedProducts:c,getProductLabel:l}=wt(),{products:u,isFetchLoading:d,isMutationLoading:f}=F(a),{productShopOptions:p}=F(o),{getHouseHoldUserOptionsNullable:h}=He(),g=R(null),_=R(!1),v=R(!1),y=R(!1),b=R(!1),x=R(!1);function S(e){return!e.isOutOfStock}let C=L(()=>c.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(S(e))-Number(S(t)))),w=L(()=>C.value.map(e=>({id:e.id,label:l(e),detail:e.getSizeLabel(),checked:S(e)}))),E=L(()=>h(g.value?.houseHoldId,`Onbekend`));async function D(e,t){if(!n.firebaseUser)return;let r=u.value.find(t=>t.id===e);if(!r)return;if(t){g.value=r,_.value=!0;return}let i=r.clone();i.isOutOfStock=!0,await a.updateProduct(i,`Product "${r.name}" is niet meer op voorraad.`)}function O(){g.value=null,_.value=!1}async function ee(){n.firebaseUser&&!v.value&&(v.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!y.value&&!d.value&&(y.value=!0,await a.fetchProducts()),n.firebaseUser&&!b.value&&!p.value.length&&(b.value=!0,await o.fetchProductShops()),n.firebaseUser&&!x.value&&!s.publicUsers.length&&(x.value=!0,await s.fetchPublicUsers())}return A(()=>n.firebaseUser?.uid,async e=>{if(!e){v.value=!1,y.value=!1,b.value=!1,x.value=!1;return}await ee()},{immediate:!0}),(t,r)=>(P(),J(`div`,Ir,[T(Fr,{title:e.title||`Boodschappenlijst`,"empty-label":`Er zijn nog geen producten gekoppeld aan deze blogpost.`,items:w.value,loading:G(d),disabled:!G(n).firebaseUser||G(f),onToggle:D},null,8,[`title`,`items`,`loading`,`disabled`]),g.value?(P(),M(Et,{key:0,"is-open":_.value,mode:`buy-product`,"user-id-options":E.value,"store-options":G(p),"selected-product":g.value,"confirm-loading":G(f),onClose:O},null,8,[`is-open`,`user-id-options`,`store-options`,`selected-product`,`confirm-loading`])):i(``,!0)]))}}),Rr=n({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(P(),J(`div`,{class:V([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit !py-5 md:border-none !rounded-none md:!rounded-primary`])},[T(G(Qt),null,{default:z(()=>[e.thumb?(P(),J(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:S({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(P(),M(vt,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})],2))}}),zr=[`innerHTML`],Br=n({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=L(()=>le(t.tableData)),r=L(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=L(()=>n.value.slice(1).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r]??``)}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(P(),M(G(ht),{value:i.value,"pt:root":`w-full max-w-[270px] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:z(()=>[(P(!0),J(X,null,N(r.value,(t,n)=>(P(),M(G(mt),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:z(({data:r})=>[Y(`span`,{class:V([`min-h-[1.5rem] text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]||`\xA0`},null,10,zr)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),Vr=n({__name:`BlogPostTasksWidget`,props:{post:{},title:{}},setup(e){let t=e,n=k(),r=m(),i=Dt(),{sortedTasks:a}=kt(),{tasks:o,isFetchLoading:s,isMutationLoading:c}=F(i),u=R(!1),d=R(!1);function f(e){return e.wasExecutedOnDate(new Date)}let p=L(()=>a.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(f(e))-Number(f(t)))),h=L(()=>p.value.map(e=>({id:e.id,label:e.name,checked:f(e)})));async function _(e,t){if(!n.firebaseUser)return;let r=o.value.find(t=>t.id===e);if(!r)return;let a=r.clone();if(t){a.executeLog.push(new Ot({executors:[n.firebaseUser.uid]})),await i.updateTask(a,`Taak "${r.name}" uitgevoerd`);return}let s=g(new Date).getTime(),c=l(new Date).getTime();for(let e=a.executeLog.length-1;e>=0;e--){let t=a.executeLog[e];if(t.date.getTime()>=s&&t.date.getTime()<=c&&t.executors.includes(n.firebaseUser.uid)){a.executeLog.splice(e,1),await i.updateTask(a,`Taak "${r.name}" teruggezet`);break}}}async function v(){n.firebaseUser&&!d.value&&(d.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!u.value&&!s.value&&(u.value=!0,await i.fetchTasks())}return A(()=>n.firebaseUser?.uid,async e=>{if(!e){d.value=!1,u.value=!1;return}await v()},{immediate:!0}),(t,r)=>(P(),M(Fr,{title:e.title||`Taken`,"empty-label":`Er zijn nog geen taken gekoppeld aan deze blogpost.`,items:h.value,loading:G(s),disabled:!G(n).firebaseUser||G(c),onToggle:_},null,8,[`title`,`items`,`loading`,`disabled`]))}}),Hr={class:`text-2xl font-bold`},Ur=n({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(P(),J(`h2`,Hr,h(e.title),1))}}),Wr={key:2,class:`w-full flex flex-col gap-1 items-center`},Gr={key:0},Kr={class:`flex w-full flex-col gap-2 py-1 md:py-0`},qr={key:0,class:`font-bold text-lg md:text-2xl`},Jr={key:1,class:`font-bold`},Yr={key:1},Xr=n({__name:`BlogPostContent`,props:{post:{},block:{},depth:{default:0}},setup(e){let t=e,n=[`border-emerald-500/70 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100`,`border-sky-500/70 bg-sky-500/10 text-sky-900 dark:text-sky-100`,`border-amber-500/70 bg-amber-500/10 text-amber-900 dark:text-amber-100`,`border-rose-500/70 bg-rose-500/10 text-rose-900 dark:text-rose-100`],r=L(()=>n[(t.depth-1)%n.length]),a=L(()=>t.depth>=1),s=L(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),c=L(()=>s.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`),l=L(()=>t.block.isWidget()||t.block.isGroup()?``:t.block.label?.trim()??``);return(t,n)=>{let u=f(`BlogPostContent`,!0);return P(),J(`div`,{class:V([`flex min-w-0 max-w-full flex-col`,{"items-start":e.block.alignment===`left`,"items-center":e.block.alignment===`center`||!e.block.alignment,"items-end":e.block.alignment===`right`}])},[l.value?(P(),M(Sr,{key:0,label:l.value},null,8,[`label`])):i(``,!0),e.block.isBoolean()?(P(),M(G(_t),{key:1,modelValue:e.block.value,"onUpdate:modelValue":n[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(P(),J(`div`,Wr,[T(G(gt),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?i(``,!0):(P(),J(`span`,Gr,h(e.block.value)+`% `,1))])):e.block.isString()?(P(),J(X,{key:3},[e.block.type===`title`?(P(),M(Ur,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(P(),M(Tr,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(P(),M(Br,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(P(),M(Rr,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(P(),M(Rr,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):i(``,!0)],64)):e.block.isStringList()?(P(),J(X,{key:4},[e.block.type===`bulletlist`?(P(),M(br,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(P(),M(G(Qt),{key:1},{default:z(()=>[T(G(Zn),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:z(e=>[T(vt,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):i(``,!0)],64)):e.block.isDate()?(P(),J(X,{key:5},[e.block.type===`date`?(P(),J(X,{key:0},[o(h(e.block.value?G(D)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(P(),J(X,{key:1},[e.block.value?(P(),M(bt,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):i(``,!0)],64)):e.block.type===`timer`?(P(),J(X,{key:2},[e.block.value?(P(),M(bt,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):i(``,!0)],64)):i(``,!0)],64)):e.block.isButton()?(P(),M(I,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,[`label`,`href`,`severity`])):e.block.isWidget()?(P(),J(X,{key:7},[e.block.type===`tasks`?(P(),M(Vr,{key:0,post:e.post,title:e.block.label},null,8,[`post`,`title`])):e.block.type===`grocerylist`?(P(),M(Lr,{key:1,post:e.post,title:e.block.label},null,8,[`post`,`title`])):i(``,!0)],64)):e.block.isGroup()?(P(),M(G(dt),{key:8,class:V([`surface-panel-glass self-stretch w-full max-w-full overflow-hidden rounded-lg md:rounded-xl`,a.value?[`border-s-4`,r.value]:void 0]),onTabOpen:G(ue)},{default:z(()=>[T(G(lt),{value:`0`,disabled:!e.block.value.length},{default:z(()=>[T(G(ut),{class:V([`bg-transparent !border-none px-0`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:z(()=>[Y(`div`,Kr,[e.block.label||s.value?(P(),J(X,{key:0},[e.block.label||s.value?(P(),J(`p`,qr,h(e.block.label||e.block.value[0].value),1)):i(``,!0),c.value?(P(),J(`p`,Jr,h(e.block.value[1].value),1)):i(``,!0)],64)):(P(),J(`p`,Yr,`Klik om te openen`))])]),_:1},8,[`class`,`pt`]),T(G(ct),{pt:{content:{class:`!px-0 !py-0 md:!py-3 md:!px-4 flex flex-col gap-4 md:gap-8`}}},{default:z(()=>[(P(!0),J(X,null,N(e.block.value.slice(c.value?2:+!!s.value),t=>(P(),M(u,{key:t.id,post:e.post,block:t,depth:e.depth+1},null,8,[`post`,`block`,`depth`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`class`,`onTabOpen`])):i(``,!0)],2)}}}),Zr={class:`flex flex-wrap justify-end h-fit gap-3`},Qr=n({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(P(),J(`div`,Zr,[T(At,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),T(Z,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),$r={class:`p-4 md:p-8 lg:p-10`},ei={class:`flex justify-between gap-3`},ti={class:`flex flex-col`},ni={class:`text-2xl font-bold mb-2`},ri={key:0,class:`flex flex-wrap gap-2 mb-2`},ii={class:`surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`},ai={class:`flex justify-between h-fit mt-2 gap-2`},oi={class:`flex flex-wrap gap-3`},si={class:`flex flex-col gap-5 md:gap-10`},ci=n({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=C(),r=k(),a=we(),o=Ne(),c=$(),{publicUsers:l}=F(a),{firebaseUser:u,isOwner:d}=F(r),{deleteBlogPost:p}=o,m=R(!1);n.currentRoute.value.name!==K.BLOG&&It(t.post);let g=L(()=>t.post.allowedUserIds?.length?l.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),_=L(()=>{let e=D(t.post.date);return t.post.dateUpdated?e+` - aangepast ${D(t.post.dateUpdated)}`:e}),v=L(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),y=L(()=>[`surface-panel !rounded-primary overflow-hidden`]),b=L(()=>`surface-panel-glass h-fit !p-0 !px-4 !py-1`),x=L(()=>`surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] mt-4 md:mt-5 p-4 md:p-5 flex flex-col gap-3`),S=()=>{c.openWith(t.post)},w=()=>{m.value=!0},E=async()=>{await p(t.post.id)&&(m.value=!1)},O=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${s.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),U.success(`Link gekopieerd!`)};return(t,n)=>{let r=f(`RouterLink`);return P(),J(X,null,[T(G(Xe),{id:e.post.id,class:V(y.value)},{content:z(()=>[Y(`div`,$r,[Y(`div`,ei,[Y(`div`,ti,[T(r,{to:{name:G(K).BLOG_DETAILS,params:{postId:e.post.id}},class:`!no-underline hover:!underline`},{default:z(()=>[Y(`h2`,ni,h(e.post.title),1)]),_:1},8,[`to`]),v.value.length?(P(),J(`div`,ri,[(P(!0),J(X,null,N(v.value,e=>(P(),M(G(yt),{key:`${e.value}-${e.icon??``}`,class:`h-fit p-2`,value:e.value,severity:e.severity,rounded:e.rounded!==!1,icon:e.icon,pt:e.pt},null,8,[`value`,`severity`,`rounded`,`icon`,`pt`]))),128))])):i(``,!0),Y(`p`,ii,h(_.value),1)]),T(I,{class:`h-fit`,severity:`secondary`,icon:`pi pi-copy`,onClick:O})]),Y(`div`,ai,[Y(`div`,oi,[(P(!0),J(X,null,N(g.value,e=>(P(),M(G(ke),{key:e.id,class:V(b.value),icon:`pi pi-user`,label:e.id===G(u)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`class`,`label`]))),128))]),G(d)?(P(),J(`div`,{key:0,class:V([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[T(Qr,{onEditClicked:S,onDeleteClicked:w})],2)):i(``,!0)]),Y(`div`,{class:V(x.value)},[Y(`div`,si,[(P(!0),J(X,null,N(e.post.content,t=>(P(),M(Xr,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))])],2),T(Zt,{post:e.post},null,8,[`post`])])]),_:1},8,[`id`,`class`]),T($e,{"is-open":m.value,"onUpdate:isOpen":n[0]||=e=>m.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:E},null,8,[`is-open`,`entity-label`])],64)}}}),li=p(jt(),1),ui={class:`block text-sm font-bold mb-2`},di={class:`background-gray-dark rounded-2xl`},fi={class:`grid grid-cols-6 items-center`},pi=n({__name:`ImageSliderField`,props:O({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=oe(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(P(),J(`div`,null,[Y(`p`,ui,h(e.label),1),Y(`div`,di,[T(G(li.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:z(({element:t,index:i})=>[Y(`div`,fi,[a[1]||=Y(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(Mt,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),T(Z,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),mi=w.extend({name:`editor`,style:`
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
`,classes:{root:function(e){return[`p-editor`,{"p-invalid":e.instance.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),hi={name:`BaseEditor`,extends:ve,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:mi,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},gi(e)}function _i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function vi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?_i(Object(n),!0).forEach(function(t){yi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function yi(e,t,n){return(t=bi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bi(e){var t=xi(e,`string`);return gi(t)==`symbol`?t:t+``}function xi(e,t){if(gi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(gi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Si=function(){try{return window.Quill}catch{return null}}(),Ci={name:`Editor`,extends:hi,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:vi({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};Si?(this.quill=new Si(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):Te(()=>import(`./c-quill.js`).then(function(n){n&&Ce(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function wi(e,t,n,r,i,a){return P(),J(`div`,u({class:e.cx(`root`)},e.ptmi(`root`)),[Y(`div`,u({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[re(e.$slots,`toolbar`,{},function(){return[Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`select`,u({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[Y(`option`,u({value:`1`},e.ptm(`option`)),`Heading`,16),Y(`option`,u({value:`2`},e.ptm(`option`)),`Subheading`,16),Y(`option`,u({value:`0`},e.ptm(`option`)),`Normal`,16)],16),Y(`select`,u({class:`ql-font`},e.ptm(`font`)),[Y(`option`,y(b(e.ptm(`option`))),null,16),Y(`option`,u({value:`serif`},e.ptm(`option`)),null,16),Y(`option`,u({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`button`,u({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),Y(`button`,u({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),Y(`button`,u({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`select`,u({class:`ql-color`},e.ptm(`color`)),null,16),Y(`select`,u({class:`ql-background`},e.ptm(`background`)),null,16)],16),Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`button`,u({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),Y(`button`,u({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),Y(`select`,u({class:`ql-align`},e.ptm(`select`)),[Y(`option`,u({defaultValue:``},e.ptm(`option`)),null,16),Y(`option`,u({value:`center`},e.ptm(`option`)),null,16),Y(`option`,u({value:`right`},e.ptm(`option`)),null,16),Y(`option`,u({value:`justify`},e.ptm(`option`)),null,16)],16)],16),Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`button`,u({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),Y(`button`,u({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),Y(`button`,u({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),Y(`span`,u({class:`ql-formats`},e.ptm(`formats`)),[Y(`button`,u({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),Y(`div`,u({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}Ci.render=wi;var Ti=[`for`],Ei=n({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=L({get:()=>n.modelValue||``,set:e=>{c(`update:modelValue`,e)}}),a=L(()=>n.label?n.label+(n.required?` *`:``):void 0),o=L(()=>n.name+(n.id?`.${n.id}`:``)),s=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},c=t;return(t,n)=>(P(),J(`div`,null,[e.label?(P(),J(`label`,u({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),h(a.value),17,Ti)):i(``,!0),T(G(Ci),u({id:o.value,placeholder:e.placeholder,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,onLoad:s},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(P(),M(Ye,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):i(``,!0)]))}}),Di={class:`p-4 surface-panel-glass rounded-2xl`},Oi={key:0},ki={class:`flex gap-3`},Ai=n({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=R(``),a=L({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}}),o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(P(),J(`div`,Di,[a.value.length?(P(),M(G(li.default),{key:1,modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:z(({element:t,index:r})=>[Y(`div`,ki,[n[1]||=Y(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(Q,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])):(P(),J(`p`,Oi,` Er zijn nog geen items toegevoegd. `))]))}}),ji=[`for`],Mi={class:`table w-full`},Ni={class:`table-header-group`},Pi={key:0,class:`table-row`},Fi={key:0,class:`table-cell table-action-cell`},Ii={class:`table-cell`},Li={class:`table-row-group`},Ri={key:0,class:`table-cell table-action-cell`},zi={key:1,class:`table-cell`},Bi={key:2,class:`table-cell`},Vi={class:`table-footer-group`},Hi={class:`table-row`},Ui={key:0,class:`table-cell table-action-cell`},Wi=xt(n({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,a=Nt(Pt).greaterOrEqual(`md`),o=L({get:()=>le(n.modelValue),set:e=>{r(`update:modelValue`,Ae(e))}}),s=L(()=>n.name+(n.id?`.`+n.id:``)),c=L(()=>a.value&&o.value[0]?.length<2),l=(e,t,n)=>{let i=[...o.value];i[e][t]=n,r(`update:modelValue`,Ae(i))},d=()=>{let e=o.value;if(e.length){let t=e[0];t.length?o.value=[...e,t.map(()=>``)]:o.value=[...e,[``]]}else o.value=[[``]]},f=e=>{let t=o.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),o.value=[...t]}},p=e=>{o.value.splice(e,1),o.value=o.value},m=()=>{o.value=o.value.map(e=>[...e,``])},g=e=>{let t=o.value;for(let n of t)n.splice(e,0,``);o.value=[...t]},_=e=>{o.value=o.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(P(),J(`div`,null,[e.label?(P(),J(`label`,u({key:0,class:`block text-sm font-bold mb-2`,for:s.value},e.labelProps),h(e.label),17,ji)):i(``,!0),Y(`div`,Mi,[Y(`div`,Ni,[o.value.length&&o.value[0].length>1?(P(),J(`div`,Pi,[o.value.length>1?(P(),J(`div`,Fi)):i(``,!0),(P(!0),J(X,null,N(o.value[0],(e,t)=>(P(),J(`div`,Ii,[o.value.length&&o.value[0].length?(P(),M(I,{key:0,class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:c.value?`Kolom verwijderen`:void 0,onClick:e=>_(t)},null,8,[`label`,`onClick`])):i(``,!0)]))),256))])):i(``,!0)]),Y(`div`,Li,[(P(!0),J(X,null,N(o.value,(t,n)=>(P(),J(`div`,{key:n,class:`table-row`},[o.value.length>1?(P(),J(`div`,Ri,[T(I,{class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:c.value?`Rij verwijderen`:void 0,onClick:e=>p(n)},null,8,[`label`,`onClick`])])):i(``,!0),(P(!0),J(X,null,N(t,(t,r)=>(P(),M(Q,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`Koptekst`:`Cel`,"onUpdate:modelValue":e=>l(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(P(),J(`div`,zi,[T(I,{class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:c.value?`Kolom toevoegen`:void 0,onClick:m},null,8,[`label`])])):(P(),J(`div`,Bi,[T(I,{class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:c.value?`Rij invoegen`:void 0,onClick:e=>f(n)},null,8,[`label`,`onClick`])]))]))),128))]),Y(`div`,Vi,[Y(`div`,Hi,[o.value.length>1?(P(),J(`div`,Ui)):i(``,!0),(P(!0),J(X,null,N(o.value[0],(e,t)=>(P(),J(`div`,{class:`table-cell`,key:t},[t===0?(P(),M(I,{key:0,class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:c.value?`Rij toevoegen`:void 0,onClick:d},null,8,[`label`])):(P(),M(I,{key:1,class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:c.value?`Kolom invoegen`:void 0,onClick:e=>g(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),[[`__scopeId`,`data-v-1c5e5d65`]]),Gi={class:`flex flex-col gap-4`},Ki={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},qi={key:5,class:`flex flex-col gap-4 md:flex-row`},Ji={key:6,class:`rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80`},Yi=n({__name:`BlogPostContentBlockEditor`,props:{content:{},id:{}},setup(e){let t=e,{blogPostOriginal:n}=F($()),r=()=>{t.content.isStringList()&&t.content.value.push(``)};return(t,a)=>(P(),J(`div`,Gi,[T(Q,{name:`${e.content.id}-label`,label:`Label`,modelValue:e.content.label,"onUpdate:modelValue":a[0]||=t=>e.content.label=t},null,8,[`name`,`modelValue`]),e.content.isBoolean()?(P(),M(Qe,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[1]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.isNumber()?(P(),J(`div`,Ki,[T(G(fr),{class:`w-full`,name:e.content.id,modelValue:e.content.value,"onUpdate:modelValue":a[2]||=t=>e.content.value=t},null,8,[`name`,`modelValue`]),Y(`p`,null,h(e.content.value)+`%`,1)])):e.content.isString()?(P(),J(X,{key:2},[e.content.type===`title`?(P(),M(Q,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[3]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`richtext`?(P(),M(Ei,{key:1,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[4]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`table`?(P(),M(Wi,{key:2,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[5]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`coverimage`||e.content.type===`image`?(P(),M(Mt,{key:3,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[6]||=t=>e.content.value=t,"blog-post":G(n)},null,8,[`name`,`modelValue`,`blog-post`])):i(``,!0)],64)):e.content.isStringList()?(P(),J(X,{key:3},[e.content.type===`bulletlist`?(P(),M(Ai,{key:0,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[7]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.type===`imageslider`?(P(),M(pi,{key:1,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[8]||=t=>e.content.value=t,"blog-post":G(n)},null,8,[`name`,`modelValue`,`blog-post`])):i(``,!0),T(Tt,{class:`w-fit`,label:`Item toevoegen`,onClick:r})],64)):e.content.isDate()?(P(),M(ft,{key:4,name:e.content.id,label:`Waarde`,modelValue:e.content.value,"onUpdate:modelValue":a[9]||=t=>e.content.value=t},null,8,[`name`,`modelValue`])):e.content.isButton()?(P(),J(`div`,qi,[T(Q,{class:`w-full`,name:`${e.content.id}-title`,label:`Knop titel`,modelValue:e.content.value.title,"onUpdate:modelValue":a[10]||=t=>e.content.value.title=t},null,8,[`name`,`modelValue`]),T(Q,{class:`w-full`,name:`${e.content.id}-url`,label:`Knop link`,modelValue:e.content.value.url,"onUpdate:modelValue":a[11]||=t=>e.content.value.url=t},null,8,[`name`,`modelValue`]),T(Je,{class:`w-full`,name:`${e.content.id}-severity`,label:`Knop kleur`,modelValue:e.content.value.severity,"onUpdate:modelValue":a[12]||=t=>e.content.value.severity=t,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`help`,label:`Help`}]},null,8,[`name`,`modelValue`])])):e.content.isWidget()?(P(),J(`div`,Ji,` Deze widget toont automatisch de gekoppelde `+h(e.content.getLabel().toLowerCase())+` van deze blogpost. Het label overschrijft de standaardtitel in de widget. `,1)):i(``,!0),T(Je,{name:`${e.content.id}-alignment`,label:`Uitlijning`,"model-value":e.content.alignment??`center`,"onUpdate:modelValue":a[13]||=t=>e.content.alignment=t,options:G(ce)},null,8,[`name`,`model-value`,`options`])]))}}),Xi=n({__name:`BlogPostContentBlockMutationDialog`,props:{isOpen:{type:Boolean},content:{},id:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.content?(P(),M(qe,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:`Waarde, uitlijning en optionele label van dit contentblok.`,"confirm-text":`Sluiten`,"hide-cancel-button":``,onConfirm:r[0]||=e=>n(`close`),onCancel:r[1]||=e=>n(`close`)},{default:z(()=>[T(Yi,{id:e.id,content:e.content},null,8,[`id`,`content`])]),_:1},8,[`is-open`,`title`])):i(``,!0)}}),Zi={class:`w-full flex flex-col gap-10`},Qi={key:0,class:`pointer-events-none absolute inset-0 flex items-center justify-center rounded-primary border border-dashed border-surface-300 px-4 py-6 text-center text-sm surface-text-muted`},$i={class:`flex w-full flex-col gap-3 px-3 py-2 sm:flex-row sm:items-center sm:justify-between`},ea={class:`flex min-w-0 gap-3 sm:gap-5`},ta={class:`flex min-w-0 flex-col items-start gap-1`},na={class:`break-words font-semibold`},ra={class:`surface-text-muted break-words text-sm`},ia={key:1,class:`surface-panel-soft rounded-primary flex w-full flex-col gap-3 px-3 py-2 sm:flex-row sm:items-center sm:justify-between`},aa={class:`flex min-w-0 items-center gap-3 sm:gap-5`},oa={class:`flex min-w-0 flex-col items-start`},sa={class:`break-words font-semibold`},ca={class:`surface-text-muted break-words text-sm`},la={class:`flex w-full items-center justify-end gap-1 sm:w-auto`},ua={class:`flex flex-col md:flex-row gap-3 justify-center`},da={class:`flex flex-col justify-center items-center gap-3`},fa=`blog-post-content-block-clipboard`,pa=n({__name:`BlogPostContentBlocksDialog`,props:O({id:{},depth:{default:0}},{modelValue:{required:!0},modelModifiers:{}}),emits:O([`delete`],[`update:modelValue`]),setup(t){let n=t,r=oe(t,`modelValue`),a=R(`title`),o=[`border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100`,`border-sky-500/50 bg-sky-500/10 text-sky-900 dark:text-sky-100`,`border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-100`,`border-rose-500/50 bg-rose-500/10 text-rose-900 dark:text-rose-100`],s=L(()=>o[(n.depth-1)%o.length]),c=L(()=>n.depth>=1),l=R(null),u=R(!1),d=R(S()),p=()=>{let e=ee.createInstance(pe(),a.value,a.value,`center`);r.value.push(e),l.value=e.id,u.value=!1},m=e=>{let t=r.value.findIndex(t=>t.id===e);r.value.splice(t,1)},g=L(()=>r.value.find(e=>e.id===l.value)??null),_={name:`blog-post-content`,pull:!0,put:!0},v=e=>{l.value=e},y=()=>{l.value=null},b=()=>{u.value=!0},x=()=>{u.value=!1};function S(){return!!localStorage.getItem(fa)}function C(e){return e instanceof Date?{__type:`date`,value:e.toISOString()}:Array.isArray(e)?e.map(C):e&&typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,C(t)])):e}function w(e){return Array.isArray(e)?e.map(w):e&&typeof e==`object`?`__type`in e&&e.__type===`date`&&`value`in e&&typeof e.value==`string`?new Date(e.value):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,w(t)])):e}function E(e){return e.id=pe(),e.isGroup()&&e.value.forEach(E),e}function O(e){let t={version:1,block:C(e.serialize())};localStorage.setItem(fa,JSON.stringify(t)),d.value=!0,U.success(`Content '${j(e)}' gekopieerd`)}function k(){let e=localStorage.getItem(fa);if(!e){d.value=!1,U.warning(`Er staat nog geen contentblok klaar om te plakken`);return}try{let t=JSON.parse(e);if(t.version!==1||!t.block)throw Error(`Invalid content clipboard payload`);let n=w(t.block),i=E(ee.deserialize(n));r.value.push(i),d.value=!0,U.success(`Content '${j(i)}' geplakt`)}catch{d.value=!1,localStorage.removeItem(fa),U.error(`Het gekopieerde contentblok kon niet worden geplakt`)}}let A=e=>{let t=e.replace(/<[^>]+>/g,` `).replace(/\s+/g,` `).trim();return t.length>80?`${t.slice(0,77)}...`:t},j=e=>e.type===`tasks`?e.label||`Taken`:e.type===`grocerylist`?e.label||`Boodschappenlijst`:e.label||`(geen naam)`,te=e=>e.isGroup()?e.value.length?e.value.length===1?`1 onderdeel`:`${e.value.length} onderdelen`:`Lege groep`:e.isBoolean()?e.value?`Ingeschakeld`:`Uitgeschakeld`:e.isNumber()?`${e.value}%`:e.isString()?e.type===`table`||e.type===`richtext`?`${e.value.length} tekens`:e.type===`coverimage`||e.type===`image`?e.value?`Afbeelding geselecteerd`:`Nog geen afbeelding geselecteerd`:e.value?A(e.value):`Nog geen inhoud ingevuld`:e.isStringList()?e.value.length?`${e.value.length} items`:`Nog geen items toegevoegd`:e.isDate()?e.value?D(new Date(e.value)):`Nog geen datum geselecteerd`:e.isButton()?e.value.title||e.value.url||`Nog geen knop ingevuld`:e.isWidget()?`Widget`:e.getLabel();return(n,o)=>{let l=f(`BlogPostContentBlocksDialog`,!0);return P(),J(`div`,Zi,[Y(`div`,{class:V([`relative`,{"min-h-24":!r.value.length}])},[r.value.length?i(``,!0):(P(),J(`div`,Qi,` Sleep content hierheen om deze groep te vullen. `)),T(G(li.default),{ref:`draggableRef`,class:V([`relative flex flex-col gap-10`,{"min-h-24":!r.value.length}]),modelValue:r.value,"onUpdate:modelValue":o[1]||=e=>r.value=e,itemKey:e=>e.id,group:_,handle:`.drag-handle`},{item:z(({element:e})=>[e.isGroup()?(P(),M(G(dt),{key:0,class:V([`w-full overflow-hidden rounded-primary`,c.value?[`border-s-4`,s.value]:void 0]),onTabOpen:G(ue)},{default:z(()=>[T(G(lt),{value:`0`},{default:z(()=>[T(G(ut),{class:`drag-handle`},{default:z(()=>[Y(`div`,$i,[Y(`div`,ea,[o[3]||=Y(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),Y(`div`,ta,[Y(`p`,na,h(j(e)),1),Y(`p`,ra,h(e.getLabel())+` - `+h(te(e).toLowerCase()),1)])]),Y(`div`,{class:`flex w-full justify-end gap-1 sm:mr-3 sm:w-auto`,onClick:o[0]||=Re(()=>{},[`stop`])},[T(I,{severity:`secondary`,icon:`pi pi-copy`,onClick:t=>O(e)},null,8,[`onClick`]),T(At,{outlined:``,onClick:t=>v(e.id)},null,8,[`onClick`]),T(Z,{onClick:t=>m(e.id)},null,8,[`onClick`])])])]),_:2},1024),T(G(ct),null,{default:z(()=>[T(l,{id:e.id,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,depth:t.depth+1,onDelete:t=>m(e.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`depth`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`class`,`onTabOpen`])):(P(),J(`div`,ia,[Y(`div`,aa,[o[4]||=Y(`i`,{class:`drag-handle pi pi-arrows-v hover:cursor-pointer`},null,-1),Y(`div`,oa,[Y(`p`,sa,h(j(e)),1),Y(`p`,ca,h(e.getLabel())+` - `+h(te(e).toLowerCase()),1)])]),Y(`div`,la,[T(I,{severity:`secondary`,icon:`pi pi-copy`,onClick:t=>O(e)},null,8,[`onClick`]),T(At,{outlined:``,onClick:t=>v(e.id)},null,8,[`onClick`]),T(Z,{onClick:t=>m(e.id)},null,8,[`onClick`])])]))]),_:1},8,[`class`,`modelValue`,`itemKey`])],2),T(Xi,{id:t.id,"is-open":!!g.value,content:g.value,onClose:y},null,8,[`id`,`is-open`,`content`]),Y(`div`,ua,[T(Tt,{class:`w-full md:w-1/2`,label:`Voeg content toe`,outlined:``,onClick:b}),T(I,{class:`w-full md:w-1/2`,label:`Plak gekopieerde content`,severity:`secondary`,outlined:``,icon:`pi pi-clone`,disabled:!d.value,onClick:k},null,8,[`disabled`])]),T(qe,{"is-open":u.value,title:`Content toevoegen`,description:`Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.`,onCancel:x,onConfirm:p,"confirm-text":`Toevoegen`},{default:z(()=>[Y(`div`,da,[T(Je,{class:`w-full md:w-1/2`,name:`${t.id}.contentType`,label:`Content type`,modelValue:a.value,"onUpdate:modelValue":o[2]||=e=>a.value=e,options:Object.entries(G(e)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`])])]),_:1},8,[`is-open`])])}}}),ma=n({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let{blogPostMutation:t}=F($()),n=it(L(()=>({title:{required:at,minLength:rt(3),maxLength:et(50)}})),t);return(e,r)=>(P(),J(X,null,[T(Q,{class:`w-full`,name:`title`,label:`Titel`,placeholder:`Geweldige Post`,modelValue:G(t).title,"onUpdate:modelValue":r[0]||=e=>G(t).title=e,error:G(n).title.$error?G(nt)(G(n).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),T(pa,{class:`mt-10`,modelValue:G(t).content,"onUpdate:modelValue":r[1]||=e=>G(t).content=e},null,8,[`modelValue`])],64))}}),ha={class:`flex flex-col gap-3 items-center`},ga=n({__name:`BlogPostSettingsDialog`,setup(e){let t=we(),{blogPostMutation:n}=F($()),{allowedPublicUsers:r}=t,{mappedUsers:i}=Ft(),a=L({get(){return!!n.value.datePinned},set(e){n.value.datePinned=e?new Date:null}}),o=R([]),s=tt.withMessage(`Invalid user ID's`,e=>!e.length||e.length===o.value.length),c=it(L(()=>({allowedUserIds:{validAllowedUserIds:s}})),n);return A(()=>n.value.allowedUserIds,async e=>{o.value=await r(e)},{immediate:!0}),(e,t)=>(P(),J(`div`,ha,[T(Je,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:G(n).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>G(n).allowedUserIds=e,error:G(c).allowedUserIds.$error?G(nt)(G(c).allowedUserIds):``,options:G(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),T(Qe,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e},null,8,[`modelValue`]),T(Qe,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:G(n).locked,"onUpdate:modelValue":t[2]||=e=>G(n).locked=e},null,8,[`modelValue`]),T(Qe,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:G(n).archived,"onUpdate:modelValue":t[3]||=e=>G(n).archived=e},null,8,[`modelValue`])]))}}),_a={class:`mb-4 flex justify-end`},va=n({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,r=Ne(),i=_(),a=$(),{isBlogPostsMutationLoading:o}=F(r),{isOpen:s,blogPostOriginal:c,blogPostMutation:l,hasChanges:u}=F(a),d=it(),f=R(!1),p=L(()=>!!c.value?.allowedUserIds?.length&&!l.value.allowedUserIds?.length||!c.value?.allowedUserIds?.length&&!!l.value.allowedUserIds?.length),m=L(()=>ge(c.value)),h=async()=>{await d.value.$validate()&&(c.value?p.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(c.value,l.value.allowedUserIds.length?`private`:`public`)&&(a.close(),U.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,l.value.id))):await r.updateBlogPost(l.value,m.value)&&(U.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,l.value.id)):await r.createBlogPost(l.value)&&(a.close(),n(`scroll-to-updated`,l.value.id)))},g=async()=>{await i.deleteFilesOfBlogPost(l.value,c.value??void 0),a.close()},v=()=>{f.value=!1};return(e,t)=>(P(),J(X,null,[T(qe,{isOpen:G(s),title:G(c)?`Bericht bijwerken`:`Bericht maken`,description:``,"confirm-text":G(c)?`Bijwerken`:`Maken`,"confirm-loading":G(o),"confirm-props":{disabled:!G(u)},onConfirm:h,onCancel:g},{default:z(()=>[Y(`div`,_a,[T(I,{severity:`secondary`,icon:`pi pi-cog`,label:`Instellingen`,onClick:t[0]||=e=>f.value=!0})]),T(ma)]),_:1},8,[`isOpen`,`title`,`confirm-text`,`confirm-loading`,`confirm-props`]),T(qe,{isOpen:f.value,title:`Berichtinstellingen`,description:`Pas zichtbaarheid en andere berichtinstellingen aan.`,"cancel-text":`Sluiten`,onCancel:v},{default:z(()=>[T(ga)]),_:1},8,[`isOpen`])],64))}});export{$ as a,Xr as i,ci as n,Lt as o,Qr as r,va as t};