const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-DaCiuS8O.js","./c-chunk-BZBS-Z4_.js"])))=>i.map(i=>d[i]);
import{a as e}from"./c-chunk-BZBS-Z4_.js";import{$ as t,$n as n,$r as r,B as i,Br as a,Cr as o,Ct as s,Dr as c,Dt as l,Er as u,Et as d,Fr as f,Ft as p,Gr as m,Gt as h,H as g,Hi as _,I as v,J as y,Jt as ee,Kr as b,Kt as te,Li as x,Lr as ne,M as S,N as re,Nr as C,Nt as ie,On as ae,Or as w,Pn as oe,Pr as T,Pt as se,Qr as ce,Qt as le,Ri as ue,Sr as de,Tr as E,Vr as D,W as fe,X as pe,Xn as O,Xr as me,Xt as he,Yn as ge,Yr as k,Yt as _e,Zr as A,Zt as ve,_ as ye,a as j,ar as be,br as xe,cr as Se,dr as Ce,dt as we,en as Te,er as Ee,fr as De,g as Oe,gi as M,hr as ke,ii as Ae,in as je,it as Me,jr as Ne,kr as N,kt as Pe,ln as Fe,lr as Ie,mi as P,nn as Le,oi as F,or as I,pi as Re,pt as ze,q as Be,qr as L,qt as Ve,rn as He,rt as Ue,s as We,si as R,t as Ge,ti as Ke,tr as qe,un as Je,yn as Ye,z as Xe,zi as Ze}from"./c-ripple-Drmeh0Td.js";import{l as Qe,r as $e,t as et}from"./c-portal-D4nvo1QL.js";import{t as tt}from"./c-baseeditableholder-B_RCLBd2.js";import{i as nt,o as rt}from"../bundle.js";import{a as z,i as it,r as at,t as B}from"./c-Bubble-D3BYEI-3.js";import{t as ot}from"./c-Dialog-C9TmeuQB.js";import{t as st}from"./c-DeleteDialog-kjLcRVa-.js";import{t as ct}from"./c-DeleteButton-DEUEp0zG.js";import{t as lt}from"./c-ErrorMessage-CrWxkCsC.js";import{t as V}from"./c-TextField-B2AhU5q9.js";import{a as ut,d as dt,i as H,s as ft,t as U,u as pt}from"./c-dist-BsffUP3t.js";import{t as mt}from"./c-Countdown-BWV1dz9Z.js";import{t as ht}from"./c-Image-BXO6eL4L.js";import{t as gt}from"./c-chevronright-CNU130Y6.js";import{a as _t,i as W,n as G,r as K,t as vt}from"./c-accordion-DTjV2GLR.js";import{n as yt,r as bt,t as xt}from"./c-datatable-B74hwNNn.js";import{r as St,t as Ct}from"./c-DateField-CzE_EIoU.js";import{t as wt}from"./c-progressbar-BL8J7_VJ.js";import{t as Tt}from"./c-togglebutton-DicYfsa_.js";import{t as Et}from"./c-EditButton-D45nXQjA.js";import{t as Dt}from"./c-CreateButton-CZ5ILLzN.js";import{t as Ot}from"./c-FileUpload-DJq7IgTj.js";import{t as kt}from"./c-vuedraggable.umd-D1FM-4as.js";import{t as q}from"./c-SelectField-C6-HSTii.js";import{t as At}from"./c-SwitchField-CKPKDXMe.js";import{t as jt}from"./c-useUsers-CBMeH0nK.js";var Mt=e=>{let t=h(),r=Ve(),{previousCurrentBlogPost:i,isBlogPostDatabaseActionActive:a}=O(t),o=[],s=P(),c=n=>{n.metadata.hasPendingWrites||a.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(i.value,!0)},200))};m(async()=>{r.unread=r.unread.filter(t=>t.postId!==e.id);let i=Je(e),a=t.collections.blogPosts(i.isPrivate),s=r.collections.blogReactions(i.isPrivate),l=be(a,e.id),u=Ee(a,qe(`id`,`==`,e.id)),d=Ee(s,qe(`post`,`==`,l));o.push(n(u,c)),o.push(n(d,c))}),b(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},Nt=()=>{let e=h(),t=se(),r=Ve(),{visibleBlogPosts:i,isBlogPostDatabaseActionActive:a}=O(e),{isLoggedIn:o}=O(t),s=[],c=P(),l=t=>{t.metadata.hasPendingWrites||a.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{i.value.length&&(await e.fetchBlogPosts({amount:i.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};m(()=>{r.unread=[],s.push(n(e.collections.blogPosts(!1),l)),s.push(n(r.collections.blogReactions(!1),l)),o.value&&(s.push(n(e.collections.blogPosts(!0),l)),s.push(n(r.collections.blogReactions(!0),l)))}),b(()=>{clearTimeout(c.value),s.forEach(e=>{e()})})},Pt=e=>e?e.clone():new ee,J=ge(`blogPostDialogStore`,()=>{let e=P(!1),t=P(null),n=P(Pt(null)),r=P(!1),i=()=>{t.value=null,n.value=Pt(null),r.value=!1};return Ae(()=>n.value,()=>{r.value=!Te(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=Pt(r),e.value=!0},close:()=>{e.value=!1,i()}}}),Ft={class:`flex flex-col gap-2`},It=f({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=p(),a=se(),o=ae(),s=Ve(),{routeLoading:l,routeLoadingId:d}=O(i),{firebaseUser:f,isLoggedIn:m,isOwner:h}=O(a),{publicUsers:g}=O(o),{isDatabaseDeletionActive:_}=O(s),v=E(()=>g.value.find(e=>e.id===n.reaction.userId)),y=E(()=>f.value&&n.reaction.userId===f.value.uid||h.value);return(t,n)=>(L(),c(B,{id:e.reaction.id,class:x([`p-5 w-full md:w-3/4 xl:w-2/3`,e.post.colorTertiary,e.post.opacityTertiary||`bg-opacity-50`,`!rounded-primary`]),titleProps:{class:`!text-base mt-1`},descriptionProps:{class:`text-white`},avatarProps:{class:{"animate-spin":M(l)===M(I).USER_DETAILS&&M(d)===v.value?.id}},title:v.value?.displayName||`Onbekende gebruiker`,subTitle:M(oe)(e.reaction.date),avatar:v.value?.avatar,route:M(m)?{name:M(I).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,avatarRoute:M(m)?{name:M(I).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,description:e.reaction.message},Ne({_:2},[y.value?{name:`right`,fn:F(()=>[u(`div`,Ft,[y.value&&!e.post.locked?(L(),c(ct,{key:0,outlined:``,disabled:M(_),onClick:n[0]||=t=>r(`deleteClicked`,e.reaction)},null,8,[`disabled`])):w(``,!0)])]),key:`0`}:void 0]),1032,[`id`,`class`,`avatarProps`,`title`,`subTitle`,`avatar`,`route`,`avatarRoute`,`description`]))}}),Lt={class:`grid justify-items-center p-5 gap-5`},Rt=f({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=se(),r=Ve(),{firebaseUser:i,isLoggedIn:a}=O(n),{isDatabaseCreationActive:s,isDatabaseDeletionActive:l}=O(r),f=P(!1),p=P(!1),m=P(null),h=Re({reaction:``}),g=U({reaction:{required:pt}},h),_=E(()=>[...t.post.reactions].reverse()),v=E(()=>_.value.filter((e,t)=>t<3)),y=E(()=>_.value.filter((e,t)=>t>=3)),ee=E(()=>t.post.locked||!a.value||s.value),b=E(()=>m.value?.message?m.value.message.length>120?`${m.value.message.slice(0,117)}...`:m.value.message:null),te=E(()=>b.value?`Reactie: \"${b.value}\"`:void 0),ne=async()=>{if(s.value)return;if(!await g.value.$validate()||!i.value){Le();return}let e=h.reaction;h.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new le({userId:i.value.uid,postId:t.post.id,message:e}));h.reaction=n?``:e,n&&g.value.$reset(),Le()};function S(e){m.value=e,p.value=!0}async function re(){m.value&&await r.deleteBlogReaction(t.post,m.value.id)&&(p.value=!1,m.value=null)}return(t,n)=>(L(),N(o,null,[u(`form`,{action:``,onSubmit:de(ne,[`prevent`])},[u(`div`,Lt,[!M(a)||e.post.reactions.filter(e=>e.userId===M(i).uid).length<20?(L(),c(B,{key:0,class:x([`p-5 flex justify-center w-full md:w-3/4 xl:w-2/3`,`!rounded-primary`,e.post.colorTertiary||`bg-secondary-700`,e.post.opacityTertiary||`bg-opacity-25`])},{default:F(()=>[T(V,{class:`w-5/6`,id:e.post.id,inputProps:{class:[`!bg-neutral-900 rounded-primary border-none !placeholder-gray-300`,e.post.colorSecondary||e.post.colorPrimary||`bg-secondary-600`,e.post.opacitySecondary||`!bg-opacity-20`,ee.value?{"!bg-gray-900 !bg-opacity-50":!M(s)}:`focus:!text-white focus:!placeholder-gray-200`,{"cursor-pointer":!M(a)&&!e.post.locked}],disabled:ee.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:M(a)?`Reageren`:`Log in om te reageren`,modelValue:h.reaction,"onUpdate:modelValue":n[0]||=e=>h.reaction=e,error:M(g).reaction.$error?M(H)(M(g).reaction):``,required:``,onClick:n[1]||=()=>!M(a)&&!e.post.locked?M(d).push({name:M(I).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):w(``,!0),(L(!0),N(o,null,k(v.value,t=>(L(),c(It,{post:e.post,reaction:t,onDeleteClicked:S},null,8,[`post`,`reaction`]))),256)),(L(!0),N(o,null,k(y.value,t=>R((L(),c(It,{post:e.post,reaction:t,onDeleteClicked:S},null,8,[`post`,`reaction`])),[[xe,f.value]])),256)),e.post.reactions.length>3?(L(),c(z,{key:1,outlined:``,icon:f.value?`pi pi-angle-up`:`pi pi-angle-down`,label:f.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>f.value=!f.value},null,8,[`icon`,`label`])):w(``,!0)])],32),T(st,{"is-open":p.value,"onUpdate:isOpen":n[3]||=e=>p.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:te.value,"confirm-loading":M(l),onConfirm:re,onCancel:n[4]||=e=>m.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}}),zt={name:`DeferredContent`,extends:j,inheritAttrs:!1,emits:[`load`],style:We.extend({name:`deferredcontent`}),data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function Bt(e,t,n,r,i,a){return L(),N(`div`,D({ref:`container`},e.ptmi(`root`)),[i.loaded?me(e.$slots,`default`,{key:0}):w(``,!0)],16)}zt.render=Bt;function Vt(){t({variableName:Oe(`scrollbar.width`).name})}function Ht(){y({variableName:Oe(`scrollbar.width`).name})}var Ut=We.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){var t=e.instance;return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":t.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){var t=e.instance;return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":t.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){var t=e.instance;return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":t.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index,r=e.activeIndex;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":r===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){var t=e.instance;return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":t.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),Wt={name:`BaseGalleria`,extends:j,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Ut,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function Y(e){return Jt(e)||qt(e)||Kt(e)||Gt()}function Gt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(e,t){if(e){if(typeof e==`string`)return Yt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yt(e,t):void 0}}function qt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Jt(e){if(Array.isArray(e))return Yt(e)}function Yt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Xt={name:`GalleriaItem`,hostName:`Galleria`,extends:j,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault();break}},onRightKey:function(){var e=Y(g(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=Y(g(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=Y(g(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return re(e,`data-p-active`)===!0}),n=Ue(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=Y(g(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=Ue(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=Y(g(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:St,ChevronRightIcon:gt},directives:{ripple:Ge}},Zt=[`disabled`],Qt=[`id`,`aria-label`,`aria-roledescription`],$t=[`disabled`],en=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],tn=[`tabindex`];function nn(e,t,n,i,a,s){var l=ce(`ripple`);return L(),N(`div`,D({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[u(`div`,D({class:e.cx(`items`)},e.ptm(`items`)),[n.showItemNavigators?R((L(),N(`button`,D({key:0,type:`button`,class:e.cx(`prevButton`),onClick:t[0]||=function(e){return s.navBackward(e)},disabled:s.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(L(),c(r(n.templates.previousitemicon||`ChevronLeftIcon`),D({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,Zt)),[[l]]):w(``,!0),u(`div`,D({id:n.id+`_item_`+n.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":s.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":s.ariaSlideLabel},e.ptm(`item`)),[n.templates.item?(L(),c(r(n.templates.item),{key:0,item:s.activeItem},null,8,[`item`])):w(``,!0)],16,Qt),n.showItemNavigators?R((L(),N(`button`,D({key:1,type:`button`,class:e.cx(`nextButton`),onClick:t[1]||=function(e){return s.navForward(e)},disabled:s.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(L(),c(r(n.templates.nextitemicon||`ChevronRightIcon`),D({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,$t)),[[l]]):w(``,!0),n.templates.caption?(L(),N(`div`,D({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[n.templates.caption?(L(),c(r(n.templates.caption),{key:0,item:s.activeItem},null,8,[`item`])):w(``,!0)],16)):w(``,!0)],16),n.showIndicators?(L(),N(`ul`,D({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(L(!0),N(o,null,k(n.value,function(t,i){return L(),N(`li`,D({key:`p-galleria-indicator-${i}`,class:e.cx(`indicator`,{index:i}),"aria-label":s.ariaPageLabel(i+1),"aria-selected":n.activeIndex===i,"aria-controls":n.id+`_item_`+i,onClick:function(e){return s.onIndicatorClick(i)},onMouseenter:function(e){return s.onIndicatorMouseEnter(i)},onKeydown:function(e){return s.onIndicatorKeyDown(e,i)}},{ref_for:!0},e.ptm(`indicator`,s.getIndicatorPTOptions(i)),{"data-p-active":s.isIndicatorItemActive(i)}),[n.templates.indicator?w(``,!0):(L(),N(`button`,D({key:0,type:`button`,tabindex:n.activeIndex===i?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,s.getIndicatorPTOptions(i))),null,16,tn)),n.templates.indicator?(L(),c(r(n.templates.indicator),{key:1,index:i,activeIndex:n.activeIndex,tabindex:n.activeIndex===i?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):w(``,!0)],16,en)}),128))],16)):w(``,!0)],16)}Xt.render=nn;function rn(e){return cn(e)||sn(e)||on(e)||an()}function an(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function on(e,t){if(e){if(typeof e==`string`)return ln(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ln(e,t):void 0}}function sn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function cn(e){if(Array.isArray(e))return ln(e)}function ln(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var un={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:j,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&S(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&S(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=g(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=g(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=rn(g(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return re(e,`data-p-active`)===!0}),n=Ue(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=rn(g(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=Ue(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=g(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&i(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,fe(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=rn(this.responsiveOptions);var n=we();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return ze(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:St,ChevronRightIcon:gt,ChevronUpIcon:_t,ChevronDownIcon:rt},directives:{ripple:Ge}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?dn(Object(n),!0).forEach(function(t){pn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function pn(e,t,n){return(t=mn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mn(e){var t=hn(e,`string`);return X(t)==`symbol`?t:t+``}function hn(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var gn=[`disabled`,`aria-label`],_n=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],vn=[`tabindex`,`aria-label`,`aria-current`,`onClick`],yn=[`disabled`,`aria-label`];function bn(e,t,n,i,a,s){var l=ce(`ripple`);return L(),N(`div`,D({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[u(`div`,D({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[n.showThumbnailNavigators?R((L(),N(`button`,D({key:0,class:e.cx(`thumbnailPrevButton`),disabled:s.isNavBackwardDisabled,type:`button`,"aria-label":s.ariaPrevButtonLabel,onClick:t[0]||=function(e){return s.navBackward(e)}},fn(fn({},n.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(L(),c(r(n.templates.previousthumbnailicon||(n.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),D({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,gn)),[[l]]):w(``,!0),u(`div`,D({class:e.cx(`thumbnailsViewport`),style:{height:n.isVertical?n.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[u(`div`,D({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:t[1]||=function(e){return s.onTransitionEnd(e)},onTouchstart:t[2]||=function(e){return s.onTouchStart(e)},onTouchmove:t[3]||=function(e){return s.onTouchMove(e)},onTouchend:t[4]||=function(e){return s.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(L(!0),N(o,null,k(n.value,function(t,i){return L(),N(`div`,D({key:`p-galleria-thumbnail-item-${i}`,class:e.cx(`thumbnailItem`,{index:i,activeIndex:n.activeIndex}),role:`tab`,"data-p-active":n.activeIndex===i,"aria-selected":n.activeIndex===i,"aria-controls":n.containerId+`_item_`+i,onKeydown:function(e){return s.onThumbnailKeydown(e,i)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":n.activeIndex===i,"data-p-galleria-thumbnail-item-active":s.isItemActive(i),"data-p-galleria-thumbnail-item-start":s.firstItemAciveIndex()===i,"data-p-galleria-thumbnail-item-end":s.lastItemActiveIndex()===i}),[u(`div`,D({class:e.cx(`thumbnail`),tabindex:n.activeIndex===i?`0`:`-1`,"aria-label":s.ariaPageLabel(i+1),"aria-current":n.activeIndex===i?`page`:void 0,onClick:function(e){return s.onItemClick(i)}},{ref_for:!0},e.ptm(`thumbnail`)),[n.templates.thumbnail?(L(),c(r(n.templates.thumbnail),{key:0,item:t},null,8,[`item`])):w(``,!0)],16,vn)],16,_n)}),128))],16)],16),n.showThumbnailNavigators?R((L(),N(`button`,D({key:1,class:e.cx(`thumbnailNextButton`),disabled:s.isNavForwardDisabled,type:`button`,"aria-label":s.ariaNextButtonLabel,onClick:t[5]||=function(e){return s.navForward(e)}},fn(fn({},n.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(L(),c(r(n.templates.nextthumbnailicon||(n.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),D({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,yn)),[[l]]):w(``,!0)],16)],16)}un.render=bn;function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?xn(Object(n),!0).forEach(function(t){Cn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Cn(e,t,n){return(t=wn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wn(e){var t=Tn(e,`string`);return Z(t)==`symbol`?t:t+``}function Tn(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var En={name:`GalleriaContent`,hostName:`Galleria`,extends:j,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:Sn(Sn({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:Xt,GalleriaThumbnails:un,TimesIcon:$e},directives:{ripple:Ge}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Dn(Object(n),!0).forEach(function(t){kn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function kn(e,t,n){return(t=An(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function An(e){var t=jn(e,`string`);return Q(t)==`symbol`?t:t+``}function jn(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Mn=[`id`,`aria-label`,`aria-roledescription`],Nn=[`aria-label`],Pn=[`aria-live`];function Fn(e,t,n,i,a,o){var s=A(`GalleriaItem`),l=A(`GalleriaThumbnails`),d=ce(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(L(),N(`div`,D({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},On(On({},e.$attrs.containerProps),o.getPTOptions(`root`))),[e.$attrs.fullScreen?R((L(),N(`button`,D({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},o.getPTOptions(`closeButton`)),[(L(),c(r(e.$attrs.templates.closeicon||`TimesIcon`),D({class:e.cx(`closeIcon`)},o.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,Nn)),[[d]]):w(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(L(),N(`div`,D({key:1,class:e.cx(`header`)},o.getPTOptions(`header`)),[(L(),c(r(e.$attrs.templates.header)))],16)):w(``,!0),u(`div`,D({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},o.getPTOptions(`content`)),[T(s,{id:e.$id,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return a.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:o.startSlideShow,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(L(),c(l,{key:0,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return a.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:a.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:o.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):w(``,!0)],16,Pn),e.$attrs.templates&&e.$attrs.templates.footer?(L(),N(`div`,D({key:2,class:e.cx(`footer`)},o.getPTOptions(`footer`)),[(L(),c(r(e.$attrs.templates.footer)))],16)):w(``,!0)],16,Mn)):w(``,!0)}En.render=Fn;var In={name:`Galleria`,extends:Wt,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&Ht(),this.mask=null,this.container&&=(Qe.clear(this.container),null)},methods:{onBeforeEnter:function(e){Qe.set(`modal`,e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),Vt(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&i(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){Be(this.target),this.target=null},onAfterLeave:function(e){Qe.clear(e),this.containerVisible=!1,Ht(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:En,Portal:et},directives:{focustrap:bt}},Ln=[`aria-modal`];function Rn(e,t,n,r,i,a){var o=A(`GalleriaContent`),s=A(`Portal`),l=ce(`focustrap`);return e.fullScreen?(L(),c(s,{key:0},{default:F(function(){return[i.containerVisible?(L(),N(`div`,D({key:0,ref:a.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[T(ke,D({name:`p-galleria`,onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:F(function(){return[e.visible?R((L(),c(o,D({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[l]]):w(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Ln)):w(``,!0)]}),_:1})):(L(),c(o,D({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}In.render=Rn;var zn=f({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(L(),N(`ul`,{class:x([`list-disc`,{"ms-5":e.alignment===`left`}])},[(L(!0),N(o,null,k(e.bullets,e=>(L(),N(`li`,null,_(e),1))),256))],2))}}),Bn={class:`w-full ql-editor no-input`},Vn=[`innerHTML`],Hn=f({__name:`BlogPostDescription`,props:{description:{}},setup(e){return(t,n)=>(L(),N(`div`,Bn,[u(`div`,{innerHTML:e.description},null,8,Vn)]))}}),Un=f({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(L(),c(B,{class:x([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary`,e.post?.colorTertiary,e.post?.opacityTertiary||`bg-opacity-50`])},{default:F(()=>[T(M(zt),null,{default:F(()=>[e.thumb?(L(),N(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:Ze({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(L(),c(ht,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})]),_:1},8,[`class`]))}}),Wn=[`innerHTML`],Gn=f({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=E(()=>He(t.tableData)),r=E(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=E(()=>n.value.slice(1).filter(e=>e.some(e=>!!e)).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r])}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(L(),c(M(xt),{value:i.value,"pt:root":`w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:F(()=>[(L(!0),N(o,null,k(r.value,(t,n)=>(L(),c(M(yt),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:F(({data:r})=>[u(`span`,{class:x([`text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]},null,10,Wn)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),Kn={class:`text-2xl font-bold`},qn=f({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(L(),N(`h2`,Kn,_(e.title),1))}}),Jn={key:1,class:`w-full flex flex-col gap-1 items-center`},Yn={key:0},Xn={key:0,class:`font-bold text-lg md:text-2xl`},Zn={key:1,class:`font-bold`},Qn={key:1},$n=f({__name:`BlogPostContent`,props:{post:{},block:{}},setup(e){let t=e,n=E(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),r=E(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`);return(t,i)=>{let a=A(`BlogPostContent`,!0);return L(),N(`div`,{class:x([`flex`,{"justify-start":e.block.alignment===`left`,"justify-center":e.block.alignment===`center`||!e.block.alignment,"justify-end":e.block.alignment===`right`}])},[e.block.isBoolean()?(L(),c(M(Tt),{key:0,modelValue:e.block.value,"onUpdate:modelValue":i[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(L(),N(`div`,Jn,[T(M(wt),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?w(``,!0):(L(),N(`span`,Yn,_(e.block.value)+`% `,1))])):e.block.isString()?(L(),N(o,{key:2},[e.block.type===`title`?(L(),c(qn,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(L(),c(Hn,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(L(),c(Gn,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(L(),c(Un,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(L(),c(Un,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):w(``,!0)],64)):e.block.isStringList()?(L(),N(o,{key:3},[e.block.type===`bulletlist`?(L(),c(zn,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(L(),c(M(zt),{key:1},{default:F(()=>[T(M(In),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:F(e=>[T(ht,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):w(``,!0)],64)):e.block.isDate()?(L(),N(o,{key:4},[e.block.type===`date`?(L(),N(o,{key:0},[C(_(e.block.value?M(oe)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(L(),N(o,{key:1},[e.block.value?(L(),c(mt,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):w(``,!0)],64)):e.block.type===`timer`?(L(),N(o,{key:2},[e.block.value?(L(),c(mt,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):w(``,!0)],64)):w(``,!0)],64)):e.block.isButton()?(L(),c(z,{key:5,label:e.block.value.title,href:e.block.value.url,variant:e.block.value.variant},null,8,[`label`,`href`,`variant`])):e.block.isGroup()?(L(),c(M(vt),{key:6,class:`w-full`,onTabOpen:M(Ye)},{default:F(()=>[T(M(G),{value:`0`,disabled:!e.block.value.length},{default:F(()=>[T(M(K),{class:x([`px-0 bg-transparent !border-none`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:F(()=>[u(`div`,null,[n.value?(L(),N(o,{key:0},[n.value?(L(),N(`p`,Xn,_(e.block.value[0].value),1)):w(``,!0),r.value?(L(),N(`p`,Zn,_(e.block.value[1].value),1)):w(``,!0)],64)):e.block.value.length?(L(),N(`p`,Qn,`Klik om te openen`)):w(``,!0)])]),_:1},8,[`class`,`pt`]),T(M(W),{pt:{content:{class:`flex flex-col gap-3`}}},{default:F(()=>[(L(!0),N(o,null,k(e.block.value.slice(r.value?2:n.value?1:0),t=>(L(),c(a,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`onTabOpen`])):w(``,!0)],2)}}}),er={class:`flex flex-wrap justify-end h-fit gap-3`},tr=f({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(L(),N(`div`,er,[T(Et,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),T(ct,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),nr={class:`flex justify-between h-fit mt-2 gap-2`},rr={class:`flex flex-wrap gap-3`},ir=f({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=ie(),r=se(),i=ae(),a=h(),d=J(),{publicUsers:f}=O(i),{firebaseUser:p,isOwner:m}=O(r),{deleteBlogPost:g}=a,_=P(!1);n.currentRoute.value.name!==I.BLOG&&Mt(t.post);let v=E(()=>t.post.allowedUserIds?.length?f.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),y=E(()=>{let e=oe(t.post.date);return t.post.dateUpdated?e+` - aangepast ${oe(t.post.dateUpdated)}`:e}),ee=E(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),b=()=>{d.openWith(t.post)},te=()=>{_.value=!0},ne=async()=>{await g(t.post.id)&&(_.value=!1)},S=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${l.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),s.success(`Link gekopieerd!`)};return(t,n)=>(L(),N(o,null,[T(B,{id:e.post.id,class:x([`border-4 border-transparent`,`!rounded-primary`,e.post.colorSecondary||e.post.colorPrimary||`bg-secondary-900`,e.post.opacitySecondary||`bg-opacity-50`]),title:e.post.title,subTitle:y.value,tags:ee.value,clickable:``,route:{name:M(I).BLOG_DETAILS,params:{postId:e.post.id}}},{right:F(()=>[T(z,{class:`h-fit`,variant:`neutral`,icon:`pi pi-copy`,text:``,onClick:S})]),default:F(()=>[u(`div`,nr,[u(`div`,rr,[(L(!0),N(o,null,k(v.value,e=>(L(),c(M(nt),{class:`h-fit !p-0 !px-4 !py-1 !bg-red-800 !bg-opacity-50`,icon:`pi pi-user`,label:e.id===M(p)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`label`]))),256))]),M(m)?(L(),N(`div`,{key:0,class:x([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[T(tr,{onEditClicked:b,onDeleteClicked:te})],2)):w(``,!0)]),T(B,{class:x([`z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3`,e.post.colorPrimary,e.post.opacityPrimary||`bg-opacity-50`])},{default:F(()=>[(L(!0),N(o,null,k(e.post.content,t=>(L(),c($n,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1},8,[`class`]),T(Rt,{post:e.post},null,8,[`post`])]),_:1},8,[`id`,`class`,`title`,`subTitle`,`tags`,`route`]),T(st,{"is-open":_.value,"onUpdate:isOpen":n[0]||=e=>_.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:ne},null,8,[`is-open`,`entity-label`])],64))}}),ar=e(kt(),1),or={class:`block text-sm font-bold mb-2`},sr={class:`bg-black bg-opacity-25 rounded-2xl`},cr={class:`grid grid-cols-6 items-center`},lr=f({__name:`ImageSliderField`,props:a({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=Ke(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(L(),N(`div`,null,[u(`p`,or,_(e.label),1),u(`div`,sr,[T(M(ar.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:F(({element:t,index:i})=>[u(`div`,cr,[a[1]||=u(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(Ot,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),T(ct,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),ur=We.extend({name:`editor`,style:`
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
`,classes:{root:function(e){var t=e.instance;return[`p-editor`,{"p-invalid":t.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),dr={name:`BaseEditor`,extends:tt,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:ur,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fr(Object(n),!0).forEach(function(t){mr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mr(e,t,n){return(t=hr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hr(e){var t=gr(e,`string`);return $(t)==`symbol`?t:t+``}function gr(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var _r=function(){try{return window.Quill}catch{return null}}(),vr={name:`Editor`,extends:dr,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:pr({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};_r?(this.quill=new _r(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):Pe(()=>import(`./c-quill-DaCiuS8O.js`).then(function(n){n&&v(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function yr(e,t,n,r,i,a){return L(),N(`div`,D({class:e.cx(`root`)},e.ptmi(`root`)),[u(`div`,D({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[me(e.$slots,`toolbar`,{},function(){return[u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`select`,D({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[u(`option`,D({value:`1`},e.ptm(`option`)),`Heading`,16),u(`option`,D({value:`2`},e.ptm(`option`)),`Subheading`,16),u(`option`,D({value:`0`},e.ptm(`option`)),`Normal`,16)],16),u(`select`,D({class:`ql-font`},e.ptm(`font`)),[u(`option`,ue(ne(e.ptm(`option`))),null,16),u(`option`,D({value:`serif`},e.ptm(`option`)),null,16),u(`option`,D({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`button`,D({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),u(`button`,D({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),u(`button`,D({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`select`,D({class:`ql-color`},e.ptm(`color`)),null,16),u(`select`,D({class:`ql-background`},e.ptm(`background`)),null,16)],16),u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`button`,D({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),u(`button`,D({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),u(`select`,D({class:`ql-align`},e.ptm(`select`)),[u(`option`,D({defaultValue:``},e.ptm(`option`)),null,16),u(`option`,D({value:`center`},e.ptm(`option`)),null,16),u(`option`,D({value:`right`},e.ptm(`option`)),null,16),u(`option`,D({value:`justify`},e.ptm(`option`)),null,16)],16)],16),u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`button`,D({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),u(`button`,D({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),u(`button`,D({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),u(`span`,D({class:`ql-formats`},e.ptm(`formats`)),[u(`button`,D({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),u(`div`,D({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}vr.render=yr;var br=[`for`],xr=f({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=E({get:()=>n.modelValue||``,set:e=>{s(`update:modelValue`,e)}}),i=E(()=>n.label?n.label+(n.required?` *`:``):void 0),a=E(()=>n.name+(n.id?`.${n.id}`:``)),o=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},s=t;return(t,n)=>(L(),N(`div`,null,[e.label?(L(),N(`label`,D({key:0,class:`block text-sm font-bold mb-2`,for:a.value},e.labelProps),_(i.value),17,br)):w(``,!0),T(M(vr),D({id:a.value,placeholder:e.placeholder,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,onLoad:o},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(L(),c(lt,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):w(``,!0)]))}}),Sr={class:`p-4 bg-black bg-opacity-25 rounded-2xl`},Cr={class:`flex gap-3`},wr=f({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=P(``),a=E({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}});E(()=>n.name+(n.id?`.`+n.id:``));let o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(L(),N(`div`,Sr,[T(M(ar.default),{modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:F(({element:t,index:r})=>[u(`div`,Cr,[n[1]||=u(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(V,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])]))}}),Tr=[`for`],Er={class:`table w-full`},Dr={class:`table-header-group`},Or={key:0,class:`table-row`},kr={key:0,class:`table-cell`},Ar={class:`table-cell`},jr={class:`table-row-group`},Mr={key:0,class:`table-cell`},Nr={key:1,class:`table-cell`},Pr={key:2,class:`table-cell`},Fr={class:`table-footer-group`},Ir={class:`table-row`},Lr={key:0,class:`table-cell`},Rr=f({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,i=it(at).greaterOrEqual(`md`),a=E({get:()=>He(n.modelValue),set:e=>{r(`update:modelValue`,je(e))}}),s=E(()=>n.name+(n.id?`.`+n.id:``)),l=E(()=>i.value&&a.value[0]?.length<2),d=(e,t,n)=>{let i=[...a.value];i[e][t]=n,r(`update:modelValue`,je(i))},f=()=>{let e=a.value;if(e.length){let t=e[0];t.length?a.value=[...e,t.map(()=>``)]:a.value=[...e,[``]]}else a.value=[[``]]},p=e=>{let t=a.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),a.value=[...t]}},m=e=>{a.value.splice(e,1),a.value=a.value},h=()=>{a.value=a.value.map(e=>[...e,``])},g=e=>{let t=a.value;for(let n of t)n.splice(e,0,``);a.value=[...t]},v=e=>{a.value=a.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(L(),N(`div`,null,[e.label?(L(),N(`label`,D({key:0,class:`block text-sm font-bold mb-2`,for:s.value},e.labelProps),_(e.label),17,Tr)):w(``,!0),u(`div`,Er,[u(`div`,Dr,[a.value.length&&a.value[0].length>1?(L(),N(`div`,Or,[a.value.length>1?(L(),N(`div`,kr)):w(``,!0),(L(!0),N(o,null,k(a.value[0],(e,t)=>(L(),N(`div`,Ar,[a.value.length&&a.value[0].length?(L(),c(z,{key:0,class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:l.value?`Remove column`:void 0,onClick:e=>v(t)},null,8,[`label`,`onClick`])):w(``,!0)]))),256))])):w(``,!0)]),u(`div`,jr,[(L(!0),N(o,null,k(a.value,(t,n)=>(L(),N(`div`,{key:n,class:`table-row`},[a.value.length>1?(L(),N(`div`,Mr,[T(z,{class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:l.value?`Remove row`:void 0,onClick:e=>m(n)},null,8,[`label`,`onClick`])])):w(``,!0),(L(!0),N(o,null,k(t,(t,r)=>(L(),c(V,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`header`:`cell`,"onUpdate:modelValue":e=>d(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(L(),N(`div`,Nr,[T(z,{class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:l.value?`Add column`:void 0,onClick:h},null,8,[`label`])])):(L(),N(`div`,Pr,[T(z,{class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:l.value?`Insert row`:void 0,onClick:e=>p(n)},null,8,[`label`,`onClick`])]))]))),128))]),u(`div`,Fr,[u(`div`,Ir,[a.value.length>1?(L(),N(`div`,Lr)):w(``,!0),(L(!0),N(o,null,k(a.value[0],(e,t)=>(L(),N(`div`,{class:`table-cell`,key:t},[t===0?(L(),c(z,{key:0,class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:l.value?`Add row`:void 0,onClick:f},null,8,[`label`])):(L(),c(z,{key:1,class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:l.value?`Insert row`:void 0,onClick:e=>g(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),zr=We.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}}),Br={name:`BaseSlider`,extends:tt,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:zr,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function Vr(e){"@babel/helpers - typeof";return Vr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Vr(e)}function Hr(e,t,n){return(t=Ur(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ur(e){var t=Wr(e,`string`);return Vr(t)==`symbol`?t:t+``}function Wr(e,t){if(Vr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Gr(e){return Yr(e)||Jr(e)||qr(e)||Kr()}function Kr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qr(e,t){if(e){if(typeof e==`string`)return Xr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Xr(e,t):void 0}}function Jr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Yr(e){if(Array.isArray(e))return Xr(e)}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Zr={name:`Slider`,extends:Br,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+pe(),this.initY=e.top+ye(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?Xe(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?Gr(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||re(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}else if(this.horizontal)return{width:this.handlePosition+`%`};else return{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Me(Hr({},this.orientation,this.orientation))}}},Qr=[`data-p`],$r=[`data-p`],ei=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],ti=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],ni=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function ri(e,t,n,r,i,a){return L(),N(`div`,D({class:e.cx(`root`),onClick:t[18]||=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":a.dataP}),[u(`span`,D({class:e.cx(`range`),style:[e.sx(`range`),a.rangeStyle()]},e.ptm(`range`),{"data-p":a.dataP}),null,16,$r),e.range?w(``,!0):(L(),N(`span`,D({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),a.handleStyle()],onTouchstartPassive:t[0]||=function(e){return a.onDragStart(e)},onTouchmovePassive:t[1]||=function(e){return a.onDrag(e)},onTouchend:t[2]||=function(e){return a.onDragEnd(e)},onMousedown:t[3]||=function(e){return a.onMouseDown(e)},onKeydown:t[4]||=function(e){return a.onKeyDown(e)},onBlur:t[5]||=function(e){return a.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":a.dataP}),null,16,ei)),e.range?(L(),N(`span`,D({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||=function(e){return a.onDragStart(e,0)},onTouchmovePassive:t[7]||=function(e){return a.onDrag(e)},onTouchend:t[8]||=function(e){return a.onDragEnd(e)},onMousedown:t[9]||=function(e){return a.onMouseDown(e,0)},onKeydown:t[10]||=function(e){return a.onKeyDown(e,0)},onBlur:t[11]||=function(e){return a.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":a.dataP}),null,16,ti)):w(``,!0),e.range?(L(),N(`span`,D({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||=function(e){return a.onDragStart(e,1)},onTouchmovePassive:t[13]||=function(e){return a.onDrag(e)},onTouchend:t[14]||=function(e){return a.onDragEnd(e)},onMousedown:t[15]||=function(e){return a.onMouseDown(e,1)},onKeydown:t[16]||=function(e){return a.onKeyDown(e,1)},onBlur:t[17]||=function(e){return a.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":a.dataP}),null,16,ni)):w(``,!0)],16,Qr)}Zr.render=ri;var ii={class:`w-full flex flex-col gap-3`},ai={class:`flex gap-5`},oi={key:0},si={key:1},ci={key:1,class:`w-full flex gap-3 justify-between`},li={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},ui={key:5,class:`w-full flex gap-3`},di={key:6},fi={class:`flex flex-col gap-1`},pi=f({__name:`BlogPostContentBlocksDialog`,props:a({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:a([`delete`],[`update:modelValue`]),setup(e){let t=Ke(e,`modelValue`),{blogPostOriginal:n}=O(J()),r=P(`title`),i=P(`center`),a=P(!0),s=P(null),l=async()=>{t.value.push(he.createInstance(Fe(),r.value,r.value,i.value)),a.value=!1,setTimeout(()=>{a.value=!0})},d=e=>{let n=t.value.findIndex(t=>t.id===e);t.value.splice(n,1)},f=e=>{s.value=s.value===e?null:e};return(p,m)=>{let h=A(`BlogPostContentBlocksDialog`,!0);return L(),N(`div`,ii,[t.value.length?(L(),c(M(ar.default),{key:0,ref:`draggableRef`,class:`flex flex-col gap-3`,modelValue:t.value,"onUpdate:modelValue":m[0]||=e=>t.value=e,itemKey:e=>e.id,handle:`.drag-handle`},{item:F(({element:t})=>[u(`div`,{class:x({"bg-neutral-500 bg-opacity-25 rounded-primary py-1 px-3 mt-3":s.value===t.id})},[t.isGroup()?(L(),c(M(vt),{key:0,class:`w-full`,onTabOpen:M(Ye)},{default:F(()=>[T(M(G),{value:`0`},{default:F(()=>[T(M(K),{class:`drag-handle`},{default:F(()=>[u(`div`,ai,[m[4]||=u(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),t.value.length&&typeof t.value[0].value==`string`?(L(),N(`p`,oi,_(t.value[0].value),1)):(L(),N(`p`,si,_(t.getLabel()),1))])]),_:2},1024),T(M(W),null,{default:F(()=>[T(h,{id:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,onDelete:e=>d(t.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`onTabOpen`])):(L(),N(`div`,ci,[m[5]||=u(`i`,{class:`drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer`},null,-1),t.isBoolean()?(L(),c(At,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isNumber()?(L(),N(`div`,li,[T(M(Zr),{class:`w-full`,name:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),u(`p`,null,_(t.value)+`%`,1)])):t.isString()?(L(),N(o,{key:2},[t.type===`title`?(L(),c(V,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`richtext`?(L(),c(xr,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`table`?(L(),c(Rr,{key:2,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`coverimage`||t.type===`image`?(L(),c(Ot,{key:3,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":M(n)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):w(``,!0)],64)):t.isStringList()?(L(),N(o,{key:3},[t.type===`bulletlist`?(L(),c(wr,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`imageslider`?(L(),c(lr,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":M(n)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):w(``,!0)],64)):t.isDate()?(L(),c(Ct,{key:4,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isButton()?(L(),N(`div`,ui,[T(V,{class:`w-1/2`,name:`${t.id}-title`,label:`Knop titel`,modelValue:t.value.title,"onUpdate:modelValue":e=>t.value.title=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(V,{class:`w-1/2`,name:`${t.id}-url`,label:`Knop link`,modelValue:t.value.url,"onUpdate:modelValue":e=>t.value.url=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(q,{class:`w-full md:w-1/2`,name:`${t.id}-variant`,label:`Knop variant`,modelValue:t.value.variant,"onUpdate:modelValue":e=>t.value.variant=e,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`tertiary`,label:`Tertiair`}]},null,8,[`name`,`modelValue`,`onUpdate:modelValue`])])):(L(),N(`p`,di,_(t.getLabel()),1)),u(`div`,fi,[T(Et,{onClick:e=>f(t.id)},null,8,[`onClick`]),T(ct,{onClick:e=>d(t.id)},null,8,[`onClick`]),Array.isArray(t.value)?(L(),c(Dt,{key:0,onClick:e=>t.value.push(``)},null,8,[`onClick`])):w(``,!0)])])),s.value===t.id?(L(),c(q,{key:2,class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,"model-value":t.alignment??`center`,"onUpdate:modelValue":e=>t.alignment=e,options:M(_e)},null,8,[`name`,`model-value`,`onUpdate:modelValue`,`options`])):w(``,!0)],2)]),_:1},8,[`modelValue`,`itemKey`])):w(``,!0),a.value?(L(),c(M(vt),{key:1,onTabOpen:M(Ye)},{default:F(()=>[T(M(G),{value:`0`},{default:F(()=>[T(M(K),{"pt:root":`!bg-green-500 !bg-opacity-25 !border-none`},{default:F(()=>[...m[6]||=[C(` Voeg content toe `,-1)]]),_:1}),T(M(W),{"pt:root":`bg-green-500 bg-opacity-25 rounded-b-2xl`,"pt:content":`flex flex-col justify-center items-center gap-3`},{default:F(()=>[T(q,{class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,modelValue:r.value,"onUpdate:modelValue":m[1]||=e=>r.value=e,options:Object.entries(M(ve)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,modelValue:i.value,"onUpdate:modelValue":m[2]||=e=>i.value=e,options:M(_e)},null,8,[`name`,`modelValue`,`options`]),T(z,{class:`w-full md:w-1/2`,variant:`green`,label:`Voeg content toe`,onClick:l}),e.id?(L(),c(z,{key:0,class:`w-full md:w-1/2 bg-opacity-75`,variant:`danger`,label:`Verwijder groep`,onClick:m[3]||=e=>p.$emit(`delete`)})):w(``,!0)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):w(``,!0)])}}}),mi=f({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let{blogPostMutation:t}=O(J()),n=U(E(()=>({title:{required:pt,minLength:ft(3),maxLength:ut(50)}})),t);return(e,r)=>(L(),N(o,null,[T(V,{class:`w-full`,name:`title`,label:`Title`,placeholder:`Amazing Post`,modelValue:M(t).title,"onUpdate:modelValue":r[0]||=e=>M(t).title=e,error:M(n).title.$error?M(H)(M(n).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),T(pi,{modelValue:M(t).content,"onUpdate:modelValue":r[1]||=e=>M(t).content=e},null,8,[`modelValue`])],64))}}),hi=f({__name:`BlogPostSettingsDialog`,setup(e){let t=ae(),{blogPostMutation:n}=O(J()),{allowedPublicUsers:r}=t,{mappedUsers:i}=jt(),a=E({get(){return!!n.value.datePinned},set(e){n.value.datePinned=e?new Date:null}}),s=P([]),c=dt.withMessage(`Invalid user ID's`,e=>!e.length||e.length===s.value.length),l=U(E(()=>({allowedUserIds:{validAllowedUserIds:c}})),n);return Ae(()=>n.value.allowedUserIds,async e=>{s.value=await r(e)},{immediate:!0}),(e,t)=>(L(),N(o,null,[T(q,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:M(n).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>M(n).allowedUserIds=e,error:M(l).allowedUserIds.$error?M(H)(M(l).allowedUserIds):``,options:M(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),T(At,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e},null,8,[`modelValue`]),T(At,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:M(n).locked,"onUpdate:modelValue":t[2]||=e=>M(n).locked=e},null,8,[`modelValue`]),T(At,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:M(n).archived,"onUpdate:modelValue":t[3]||=e=>M(n).archived=e},null,8,[`modelValue`])],64))}}),gi=f({__name:`BlogPostStylingDialog`,setup(e){let{blogPostMutation:t}=O(J()),n=E(()=>Ce(Ie.find(e=>e.value===t.value.colorPrimary))),r=U(E(()=>({colorPrimary:{},colorSecondary:{},colorTertiary:{},opacityPrimary:{},opacitySecondary:{},opacityTertiary:{}})),t);return(e,i)=>(L(),N(o,null,[T(q,{class:`w-full md:w-1/2`,name:`colorPrimary`,label:`Primaire stijl`,modelValue:M(t).colorPrimary,"onUpdate:modelValue":i[0]||=e=>M(t).colorPrimary=e,error:M(r).colorPrimary.$error?M(H)(M(r).colorPrimary):``,options:M(Ie),required:``},null,8,[`modelValue`,`error`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`opacityPrimary`,label:`Primaire doorzichtigheid`,modelValue:M(t).opacityPrimary,"onUpdate:modelValue":i[1]||=e=>M(t).opacityPrimary=e,error:M(r).opacityPrimary.$error?M(H)(M(r).opacityPrimary):``,options:M(Se),required:``},null,8,[`modelValue`,`error`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`colorSecondary`,label:`Secundaire stijl`,modelValue:M(t).colorSecondary,"onUpdate:modelValue":i[2]||=e=>M(t).colorSecondary=e,error:M(r).colorSecondary.$error?M(H)(M(r).colorSecondary):``,options:n.value,required:``},null,8,[`modelValue`,`error`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`opacitySecondary`,label:`Secundaire doorzichtigheid`,modelValue:M(t).opacitySecondary,"onUpdate:modelValue":i[3]||=e=>M(t).opacitySecondary=e,error:M(r).opacitySecondary.$error?M(H)(M(r).opacitySecondary):``,options:M(Se),required:``},null,8,[`modelValue`,`error`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`colorTertiary`,label:`Tertiaire stijl`,modelValue:M(t).colorTertiary,"onUpdate:modelValue":i[4]||=e=>M(t).colorTertiary=e,error:M(r).colorTertiary.$error?M(H)(M(r).colorTertiary):``,options:M(De),required:``},null,8,[`modelValue`,`error`,`options`]),T(q,{class:`w-full md:w-1/2`,name:`opacityTertiary`,label:`Tertiaire doorzichtigheid`,modelValue:M(t).opacityTertiary,"onUpdate:modelValue":i[5]||=e=>M(t).opacityTertiary=e,error:M(r).opacityTertiary.$error?M(H)(M(r).opacityTertiary):``,options:M(Se),required:``},null,8,[`modelValue`,`error`,`options`])],64))}}),_i={ref:`dialog`,class:`pt-6 mb-4 xl:px-16`},vi=f({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,r=h(),i=te(),a=J(),{isBlogPostsMutationLoading:o}=O(r),{isOpen:l,blogPostOriginal:d,blogPostMutation:f,hasChanges:p}=O(a),m=U(),g=E(()=>!!d.value?.allowedUserIds?.length&&!f.value.allowedUserIds?.length||!d.value?.allowedUserIds?.length&&!!f.value.allowedUserIds?.length),_=E(()=>Je(d.value)),v=async()=>{await m.value.$validate()&&(d.value?g.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(d.value,f.value.allowedUserIds.length?`private`:`public`)&&(a.close(),s.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,f.value.id))):await r.updateBlogPost(f.value,_.value)&&(s.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,f.value.id)):await r.createBlogPost(f.value)&&(a.close(),n(`scroll-to-updated`,f.value.id)))},y=async()=>{await i.deleteFilesOfBlogPost(f.value,d.value??void 0),a.close()};return(e,t)=>(L(),c(ot,{isOpen:M(l),title:M(d)?`Bericht bijwerken`:`Bericht maken`,description:M(d)?`Werk dit bericht bij`:`Maak een nieuw bericht`,"confirm-text":M(d)?`Bijwerken`:`Maken`,"confirm-loading":M(o),"confirm-props":{disabled:!M(p)},onConfirm:v,onCancel:y},{default:F(()=>[u(`form`,_i,[M(l)?(L(),c(M(vt),{key:0,"active-index":0,onTabOpen:M(Ye)},{default:F(()=>[T(M(G),{value:`content`},{default:F(()=>[T(M(K),null,{default:F(()=>[...t[0]||=[C(` Content `,-1)]]),_:1}),T(M(W),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:F(()=>[T(mi)]),_:1})]),_:1}),T(M(G),{value:`styling`},{default:F(()=>[T(M(K),null,{default:F(()=>[...t[1]||=[C(` Styling `,-1)]]),_:1}),T(M(W),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:F(()=>[T(gi)]),_:1})]),_:1}),T(M(G),{value:`settings`},{default:F(()=>[T(M(K),null,{default:F(()=>[...t[2]||=[C(` Settings `,-1)]]),_:1}),T(M(W),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:F(()=>[T(hi)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):w(``,!0)],512)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-text`,`confirm-loading`,`confirm-props`]))}});export{J as a,$n as i,ir as n,Nt as o,tr as r,vi as t};