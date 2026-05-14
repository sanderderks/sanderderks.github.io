const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-DtYgdYzX.js","../bundle.js","../bundle6.css"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,Br as n,Cr as r,D as i,Dr as a,Ei as o,Fi as s,Fn as c,Ft as l,G as u,Gr as d,H as f,Hr as p,Ir as m,It as h,J as g,Jr as _,Jt as v,Kn as y,Lr as b,Lt as ee,Mr as te,Nr as ne,O as re,Or as x,Ot as ie,Pr as S,Qn as C,Qt as ae,Rr as w,S as oe,Sr as T,Ti as se,Tr as ce,Tt as le,V as ue,Xn as E,Xt as de,Y as fe,Yt as pe,Z as D,Zn as me,Zt as he,_r as O,an as ge,at as _e,b as ve,bn as ye,c as be,dn as xe,dr as Se,dt as Ce,ei as we,en as Te,f as Ee,fn as De,fr as k,ft as Oe,gr as A,gt as ke,hr as j,ht as Ae,i as je,in as Me,jt as Ne,ki as M,kn as Pe,kt as Fe,lr as Ie,mr as N,nn as Le,nr as Re,nt as ze,o as Be,on as Ve,or as He,pr as P,qn as F,qr as I,qt as Ue,ri as L,rr as R,ti as z,u as We,wi as B,x as V,xr as Ge,yr as Ke,zr as qe}from"../bundle.js";import{t as Je}from"./c-usePrimeVueTheme-CPB4jsIG.js";import{a as Ye,c as H,l as Xe,o as U,r as Ze,s as W,u as Qe}from"./c-Page-DnobTnBf.js";import{i as $e,n as et,r as tt,t as nt}from"./c-Dialog-DefxTyV-.js";import{a as G,c as K,i as rt,o as it,r as at,s as ot,t as q}from"./c-Bubble-D2WU2646.js";import{t as J}from"./c-TextField-DJzCcj00.js";import{t as st}from"./c-DeleteDialog-BiqDcRud.js";import{a as ct,d as lt,i as ut,s as dt,t as ft,u as pt}from"./c-dist-CUXHpseD.js";import{t as mt}from"./c-Countdown-YnuywNYO.js";import{t as ht}from"./c-Image-G7Cat9Al.js";import{n as gt,t as _t}from"./c-DateField-BeoN6_3i.js";import{t as vt}from"./c-progressbar-CjvO-_eP.js";import{t as yt}from"./c-togglebutton-C6ia89bH.js";import{n as bt,t as xt}from"./c-datatable-BF6zE1AL.js";import{t as St}from"./c-EditButton-DmBKsQ43.js";import{t as Ct}from"./c-CreateButton-rMs62oDh.js";import{t as wt}from"./c-FileUpload-B5ud_3gO.js";import{t as Tt}from"./c-vuedraggable.umd-CYtY14A5.js";import{t as Et}from"./c-useUsers-BOpHlR7g.js";var Dt=e=>{let t=Ue(),n=pe(),{previousCurrentBlogPost:r,isBlogPostDatabaseActionActive:i}=F(t),a=[],o=z(),s=n=>{n.metadata.hasPendingWrites||i.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(r.value,!0)},200))};te(async()=>{n.unread=n.unread.filter(t=>t.postId!==e.id);let r=De(e),i=t.collections.blogPosts(r.isPrivate),o=n.collections.blogReactions(r.isPrivate),c=Re(i,e.id),l=me(i,C(`id`,`==`,e.id)),u=me(o,C(`post`,`==`,c));a.push(E(l,s)),a.push(E(u,s))}),ne(()=>{clearTimeout(o.value),a.forEach(e=>{e()})})},Ot=()=>{let e=Ue(),t=h(),n=pe(),{visibleBlogPosts:r,isBlogPostDatabaseActionActive:i}=F(e),{isLoggedIn:a}=F(t),o=[],s=z(),c=t=>{t.metadata.hasPendingWrites||i.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{r.value.length&&(await e.fetchBlogPosts({amount:r.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};te(()=>{n.unread=[],o.push(E(e.collections.blogPosts(!1),c)),o.push(E(n.collections.blogReactions(!1),c)),a.value&&(o.push(E(e.collections.blogPosts(!0),c)),o.push(E(n.collections.blogReactions(!0),c)))}),ne(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},kt=e=>e?e.clone():new de,Y=y(`blogPostDialogStore`,()=>{let e=z(!1),t=z(null),n=z(kt(null)),r=z(!1),i=()=>{t.value=null,n.value=kt(null),r.value=!1};return d(()=>n.value,()=>{r.value=!Le(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=kt(r),e.value=!0},close:()=>{e.value=!1,i()}}}),At={class:`flex flex-col gap-2`},jt=r({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=ee(),a=h(),o=Pe(),s=pe(),{routeLoading:l,routeLoadingId:u}=F(i),{firebaseUser:d,isLoggedIn:f,isOwner:p}=F(a),{publicUsers:m}=F(o),{isDatabaseDeletionActive:g}=F(s),{isDarkTheme:_}=Je(),v=P(()=>m.value.find(e=>e.id===n.reaction.userId)),y=P(()=>d.value&&n.reaction.userId===d.value.uid||p.value),b=P(()=>[`p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary border`,_.value?`border-white/10 !bg-neutral-800/60`:`border-slate-200 !bg-slate-50/95 shadow-sm`]);return(t,n)=>(S(),j(q,{id:e.reaction.id,class:B(b.value),titleProps:{class:`!text-base mt-1`},descriptionProps:{class:L(_)?`text-white`:`text-slate-700`},avatarProps:{class:{"animate-spin":L(l)===L(R).USER_DETAILS&&L(u)===v.value?.id}},title:v.value?.displayName||`Onbekende gebruiker`,subTitle:L(c)(e.reaction.date),avatar:v.value?.avatar,route:L(f)?{name:L(R).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,avatarRoute:L(f)?{name:L(R).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,description:e.reaction.message},Ke({_:2},[y.value?{name:`right`,fn:I(()=>[N(`div`,At,[y.value&&!e.post.locked?(S(),j(ot,{key:0,outlined:``,disabled:L(g),onClick:n[0]||=t=>r(`deleteClicked`,e.reaction)},null,8,[`disabled`])):A(``,!0)])]),key:`0`}:void 0]),1032,[`id`,`class`,`descriptionProps`,`avatarProps`,`title`,`subTitle`,`avatar`,`route`,`avatarRoute`,`description`]))}}),Mt={class:`grid justify-items-center p-5 gap-5`},Nt=r({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=h(),r=pe(),{firebaseUser:i,isLoggedIn:a}=F(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:s}=F(r),{isDarkTheme:c}=Je(),l=z(!1),u=z(!1),d=z(null),f=we({reaction:``}),p=ft({reaction:{required:pt}},f),g=P(()=>[...t.post.reactions].reverse()),v=P(()=>g.value.filter((e,t)=>t<3)),y=P(()=>g.value.filter((e,t)=>t>=3)),b=P(()=>t.post.locked||!a.value||o.value),ee=P(()=>d.value?.message?d.value.message.length>120?`${d.value.message.slice(0,117)}...`:d.value.message:null),te=P(()=>ee.value?`Reactie: \"${ee.value}\"`:void 0),ne=P(()=>[`p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary border`,c.value?`border-white/10 !bg-neutral-800/55`:`border-slate-200 !bg-slate-50/95 shadow-sm`]),re=P(()=>[c.value?`!bg-neutral-900 rounded-primary !border !border-white/10 !placeholder-gray-300 focus:!text-white focus:!placeholder-gray-200`:`!bg-white rounded-primary !border !border-slate-200 !placeholder-slate-400 shadow-sm focus:!text-slate-900 focus:!placeholder-slate-500`,b.value?c.value?{"!bg-gray-900 !bg-opacity-50":!o.value}:{"!bg-slate-100 !border-slate-200":!o.value}:``,{"cursor-pointer":!a.value&&!t.post.locked}]),x=async()=>{if(o.value)return;if(!await p.value.$validate()||!i.value){Me();return}let e=f.reaction;f.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new Te({userId:i.value.uid,postId:t.post.id,message:e}));f.reaction=n?``:e,n&&p.value.$reset(),Me()};function C(e){d.value=e,u.value=!0}async function ae(){d.value&&await r.deleteBlogReaction(t.post,d.value.id)&&(u.value=!1,d.value=null)}return(t,n)=>(S(),O(k,null,[N(`form`,{action:``,onSubmit:Se(x,[`prevent`])},[N(`div`,Mt,[!L(a)||e.post.reactions.filter(e=>e.userId===L(i).uid).length<20?(S(),j(q,{key:0,class:B(ne.value)},{default:I(()=>[T(J,{class:`w-5/6`,id:e.post.id,inputProps:{class:re.value,disabled:b.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:L(a)?`Reageren`:`Log in om te reageren`,modelValue:f.reaction,"onUpdate:modelValue":n[0]||=e=>f.reaction=e,error:L(p).reaction.$error?L(ut)(L(p).reaction):``,required:``,onClick:n[1]||=()=>!L(a)&&!e.post.locked?L(ie).push({name:L(R).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):A(``,!0),(S(!0),O(k,null,m(v.value,t=>(S(),j(jt,{post:e.post,reaction:t,onDeleteClicked:C},null,8,[`post`,`reaction`]))),256)),(S(!0),O(k,null,m(y.value,t=>_((S(),j(jt,{post:e.post,reaction:t,onDeleteClicked:C},null,8,[`post`,`reaction`])),[[Ie,l.value]])),256)),e.post.reactions.length>3?(S(),j(K,{key:1,outlined:``,icon:l.value?`pi pi-angle-up`:`pi pi-angle-down`,label:l.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>l.value=!l.value},null,8,[`icon`,`label`])):A(``,!0)])],32),T(st,{"is-open":u.value,"onUpdate:isOpen":n[3]||=e=>u.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:te.value,"confirm-loading":L(s),onConfirm:ae,onCancel:n[4]||=e=>d.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}}),Pt={name:`DeferredContent`,extends:V,inheritAttrs:!1,emits:[`load`],style:oe.extend({name:`deferredcontent`}),data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function Ft(e,t,n,r,i,a){return S(),O(`div`,x({ref:`container`},e.ptmi(`root`)),[i.loaded?b(e.$slots,`default`,{key:0}):A(``,!0)],16)}Pt.render=Ft;var It=oe.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),Lt={name:`BaseGalleria`,extends:V,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:It,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function X(e){return Vt(e)||Bt(e)||zt(e)||Rt()}function Rt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(e,t){if(e){if(typeof e==`string`)return Ht(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ht(e,t):void 0}}function Bt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Vt(e){if(Array.isArray(e))return Ht(e)}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ut={name:`GalleriaItem`,hostName:`Galleria`,extends:V,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault();break}},onRightKey:function(){var e=X(D(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=X(D(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=X(D(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return f(e,`data-p-active`)===!0}),n=Ce(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=X(D(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=Ce(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=X(D(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:gt,ChevronRightIcon:Qe},directives:{ripple:je}},Wt=[`disabled`],Gt=[`id`,`aria-label`,`aria-roledescription`],Kt=[`disabled`],qt=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],Jt=[`tabindex`];function Yt(e,t,r,i,a,o){var s=qe(`ripple`);return S(),O(`div`,x({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[N(`div`,x({class:e.cx(`items`)},e.ptm(`items`)),[r.showItemNavigators?_((S(),O(`button`,x({key:0,type:`button`,class:e.cx(`prevButton`),onClick:t[0]||=function(e){return o.navBackward(e)},disabled:o.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(S(),j(n(r.templates.previousitemicon||`ChevronLeftIcon`),x({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,Wt)),[[s]]):A(``,!0),N(`div`,x({id:r.id+`_item_`+r.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":o.ariaSlideNumber(r.activeIndex+1),"aria-roledescription":o.ariaSlideLabel},e.ptm(`item`)),[r.templates.item?(S(),j(n(r.templates.item),{key:0,item:o.activeItem},null,8,[`item`])):A(``,!0)],16,Gt),r.showItemNavigators?_((S(),O(`button`,x({key:1,type:`button`,class:e.cx(`nextButton`),onClick:t[1]||=function(e){return o.navForward(e)},disabled:o.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(S(),j(n(r.templates.nextitemicon||`ChevronRightIcon`),x({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,Kt)),[[s]]):A(``,!0),r.templates.caption?(S(),O(`div`,x({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[r.templates.caption?(S(),j(n(r.templates.caption),{key:0,item:o.activeItem},null,8,[`item`])):A(``,!0)],16)):A(``,!0)],16),r.showIndicators?(S(),O(`ul`,x({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(S(!0),O(k,null,m(r.value,function(t,i){return S(),O(`li`,x({key:`p-galleria-indicator-${i}`,class:e.cx(`indicator`,{index:i}),"aria-label":o.ariaPageLabel(i+1),"aria-selected":r.activeIndex===i,"aria-controls":r.id+`_item_`+i,onClick:function(e){return o.onIndicatorClick(i)},onMouseenter:function(e){return o.onIndicatorMouseEnter(i)},onKeydown:function(e){return o.onIndicatorKeyDown(e,i)}},{ref_for:!0},e.ptm(`indicator`,o.getIndicatorPTOptions(i)),{"data-p-active":o.isIndicatorItemActive(i)}),[r.templates.indicator?A(``,!0):(S(),O(`button`,x({key:0,type:`button`,tabindex:r.activeIndex===i?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,o.getIndicatorPTOptions(i))),null,16,Jt)),r.templates.indicator?(S(),j(n(r.templates.indicator),{key:1,index:i,activeIndex:r.activeIndex,tabindex:r.activeIndex===i?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):A(``,!0)],16,qt)}),128))],16)):A(``,!0)],16)}Ut.render=Yt;function Xt(e){return en(e)||$t(e)||Qt(e)||Zt()}function Zt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qt(e,t){if(e){if(typeof e==`string`)return tn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tn(e,t):void 0}}function $t(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function en(e){if(Array.isArray(e))return tn(e)}function tn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var nn={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:V,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ue(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ue(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey();break}},onRightKey:function(){var e=D(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=D(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=Xt(D(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return f(e,`data-p-active`)===!0}),n=Ce(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=Xt(D(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=Ce(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=D(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&fe(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,e(this.thumbnailsStyle,`nonce`,(t=this.$primevue)==null||(t=t.config)==null||(t=t.csp)==null?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Xt(this.responsiveOptions);var r=Ae();this.sortedResponsiveOptions.sort(function(e,t){var n=e.breakpoint,i=t.breakpoint;return ke(n,i,-1,r)});for(var i=0;i<this.sortedResponsiveOptions.length;i++){var a=this.sortedResponsiveOptions[i];n+=`
                        @media screen and (max-width: ${a.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/a.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:gt,ChevronRightIcon:Qe,ChevronUpIcon:Xe,ChevronDownIcon:Ee},directives:{ripple:je}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function rn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rn(Object(n),!0).forEach(function(t){on(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function on(e,t,n){return(t=sn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e){var t=cn(e,`string`);return Z(t)==`symbol`?t:t+``}function cn(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ln=[`disabled`,`aria-label`],un=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],dn=[`tabindex`,`aria-label`,`aria-current`,`onClick`],fn=[`disabled`,`aria-label`];function pn(e,t,r,i,a,o){var s=qe(`ripple`);return S(),O(`div`,x({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[N(`div`,x({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[r.showThumbnailNavigators?_((S(),O(`button`,x({key:0,class:e.cx(`thumbnailPrevButton`),disabled:o.isNavBackwardDisabled,type:`button`,"aria-label":o.ariaPrevButtonLabel,onClick:t[0]||=function(e){return o.navBackward(e)}},an(an({},r.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(S(),j(n(r.templates.previousthumbnailicon||(r.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),x({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,ln)),[[s]]):A(``,!0),N(`div`,x({class:e.cx(`thumbnailsViewport`),style:{height:r.isVertical?r.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[N(`div`,x({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:t[1]||=function(e){return o.onTransitionEnd(e)},onTouchstart:t[2]||=function(e){return o.onTouchStart(e)},onTouchmove:t[3]||=function(e){return o.onTouchMove(e)},onTouchend:t[4]||=function(e){return o.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(S(!0),O(k,null,m(r.value,function(t,i){return S(),O(`div`,x({key:`p-galleria-thumbnail-item-${i}`,class:e.cx(`thumbnailItem`,{index:i,activeIndex:r.activeIndex}),role:`tab`,"data-p-active":r.activeIndex===i,"aria-selected":r.activeIndex===i,"aria-controls":r.containerId+`_item_`+i,onKeydown:function(e){return o.onThumbnailKeydown(e,i)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":r.activeIndex===i,"data-p-galleria-thumbnail-item-active":o.isItemActive(i),"data-p-galleria-thumbnail-item-start":o.firstItemAciveIndex()===i,"data-p-galleria-thumbnail-item-end":o.lastItemActiveIndex()===i}),[N(`div`,x({class:e.cx(`thumbnail`),tabindex:r.activeIndex===i?`0`:`-1`,"aria-label":o.ariaPageLabel(i+1),"aria-current":r.activeIndex===i?`page`:void 0,onClick:function(e){return o.onItemClick(i)}},{ref_for:!0},e.ptm(`thumbnail`)),[r.templates.thumbnail?(S(),j(n(r.templates.thumbnail),{key:0,item:t},null,8,[`item`])):A(``,!0)],16,dn)],16,un)}),128))],16)],16),r.showThumbnailNavigators?_((S(),O(`button`,x({key:1,class:e.cx(`thumbnailNextButton`),disabled:o.isNavForwardDisabled,type:`button`,"aria-label":o.ariaNextButtonLabel,onClick:t[5]||=function(e){return o.navForward(e)}},an(an({},r.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(S(),j(n(r.templates.nextthumbnailicon||(r.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),x({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,fn)),[[s]]):A(``,!0)],16)],16)}nn.render=pn;function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function mn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?mn(Object(n),!0).forEach(function(t){gn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function gn(e,t,n){return(t=_n(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _n(e){var t=vn(e,`string`);return Q(t)==`symbol`?t:t+``}function vn(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var yn={name:`GalleriaContent`,hostName:`Galleria`,extends:V,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:hn(hn({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:Ut,GalleriaThumbnails:nn,TimesIcon:We},directives:{ripple:je}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?bn(Object(n),!0).forEach(function(t){Sn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Sn(e,t,n){return(t=Cn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cn(e){var t=wn(e,`string`);return $(t)==`symbol`?t:t+``}function wn(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Tn=[`id`,`aria-label`,`aria-roledescription`],En=[`aria-label`],Dn=[`aria-live`];function On(e,t,r,i,a,o){var s=w(`GalleriaItem`),c=w(`GalleriaThumbnails`),l=qe(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(S(),O(`div`,x({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},xn(xn({},e.$attrs.containerProps),o.getPTOptions(`root`))),[e.$attrs.fullScreen?_((S(),O(`button`,x({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},o.getPTOptions(`closeButton`)),[(S(),j(n(e.$attrs.templates.closeicon||`TimesIcon`),x({class:e.cx(`closeIcon`)},o.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,En)),[[l]]):A(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(S(),O(`div`,x({key:1,class:e.cx(`header`)},o.getPTOptions(`header`)),[(S(),j(n(e.$attrs.templates.header)))],16)):A(``,!0),N(`div`,x({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},o.getPTOptions(`content`)),[T(s,{id:e.$id,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return a.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:o.startSlideShow,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(S(),j(c,{key:0,activeIndex:a.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return a.activeIndex=e},slideShowActive:a.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return a.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:a.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:o.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:o.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):A(``,!0)],16,Dn),e.$attrs.templates&&e.$attrs.templates.footer?(S(),O(`div`,x({key:2,class:e.cx(`footer`)},o.getPTOptions(`footer`)),[(S(),j(n(e.$attrs.templates.footer)))],16)):A(``,!0)],16,Tn)):A(``,!0)}yn.render=On;var kn={name:`Galleria`,extends:Lt,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&tt(),this.mask=null,this.container&&=(i.clear(this.container),null)},methods:{onBeforeEnter:function(e){i.set(`modal`,e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),et(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&fe(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){ze(this.target),this.target=null},onAfterLeave:function(e){i.clear(e),this.containerVisible=!1,tt(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:yn,Portal:Be},directives:{focustrap:$e}},An=[`aria-modal`];function jn(e,t,n,r,i,a){var o=w(`GalleriaContent`),s=w(`Portal`),c=qe(`focustrap`);return e.fullScreen?(S(),j(s,{key:0},{default:I(function(){return[i.containerVisible?(S(),O(`div`,x({key:0,ref:a.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[T(He,x({name:`p-galleria`,onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:I(function(){return[e.visible?_((S(),j(o,x({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[c]]):A(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,An)):A(``,!0)]}),_:1})):(S(),j(o,x({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}kn.render=jn;var Mn=r({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(S(),O(`ul`,{class:B([`list-disc`,{"ms-5":e.alignment===`left`}])},[(S(!0),O(k,null,m(e.bullets,e=>(S(),O(`li`,null,M(e),1))),256))],2))}}),Nn={class:`w-full ql-editor no-input`},Pn=[`innerHTML`],Fn=r({__name:`BlogPostDescription`,props:{description:{}},setup(e){return(t,n)=>(S(),O(`div`,Nn,[N(`div`,{innerHTML:e.description},null,8,Pn)]))}}),In=r({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(S(),j(q,{class:B([`!p-0 md:!p-3`,e.thumb?`w-full border border-slate-200 darkMode:border-white/10`:`w-fit xl:!p-5 border border-slate-200 darkMode:border-white/10 md:border-none !rounded-none md:!rounded-primary`])},{default:I(()=>[T(L(Pt),null,{default:I(()=>[e.thumb?(S(),O(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:o({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(S(),j(ht,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})]),_:1},8,[`class`]))}}),Ln=[`innerHTML`],Rn=r({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=P(()=>ge(t.tableData)),r=P(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=P(()=>n.value.slice(1).filter(e=>e.some(e=>!!e)).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r])}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(S(),j(L(xt),{value:i.value,"pt:root":`w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:I(()=>[(S(!0),O(k,null,m(r.value,(t,n)=>(S(),j(L(bt),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:I(({data:r})=>[N(`span`,{class:B([`text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]},null,10,Ln)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),zn={class:`text-2xl font-bold`},Bn=r({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(S(),O(`h2`,zn,M(e.title),1))}}),Vn={key:1,class:`w-full flex flex-col gap-1 items-center`},Hn={key:0},Un={key:0,class:`font-bold text-lg md:text-2xl`},Wn={key:1,class:`font-bold`},Gn={key:1},Kn=r({__name:`BlogPostContent`,props:{post:{},block:{}},setup(e){let t=e,n=P(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),r=P(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`);return(t,i)=>{let a=w(`BlogPostContent`,!0);return S(),O(`div`,{class:B([`flex`,{"justify-start":e.block.alignment===`left`,"justify-center":e.block.alignment===`center`||!e.block.alignment,"justify-end":e.block.alignment===`right`}])},[e.block.isBoolean()?(S(),j(L(yt),{key:0,modelValue:e.block.value,"onUpdate:modelValue":i[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(S(),O(`div`,Vn,[T(L(vt),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?A(``,!0):(S(),O(`span`,Hn,M(e.block.value)+`% `,1))])):e.block.isString()?(S(),O(k,{key:2},[e.block.type===`title`?(S(),j(Bn,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(S(),j(Fn,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(S(),j(Rn,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(S(),j(In,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(S(),j(In,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):A(``,!0)],64)):e.block.isStringList()?(S(),O(k,{key:3},[e.block.type===`bulletlist`?(S(),j(Mn,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(S(),j(L(Pt),{key:1},{default:I(()=>[T(L(kn),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:I(e=>[T(ht,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):A(``,!0)],64)):e.block.isDate()?(S(),O(k,{key:4},[e.block.type===`date`?(S(),O(k,{key:0},[Ge(M(e.block.value?L(c)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(S(),O(k,{key:1},[e.block.value?(S(),j(mt,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):A(``,!0)],64)):e.block.type===`timer`?(S(),O(k,{key:2},[e.block.value?(S(),j(mt,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):A(``,!0)],64)):A(``,!0)],64)):e.block.isButton()?(S(),j(K,{key:5,label:e.block.value.title,href:e.block.value.url,variant:e.block.value.variant},null,8,[`label`,`href`,`variant`])):e.block.isGroup()?(S(),j(L(Ye),{key:6,class:`w-full`,onTabOpen:L(ye)},{default:I(()=>[T(L(U),{value:`0`,disabled:!e.block.value.length},{default:I(()=>[T(L(W),{class:B([`px-0 bg-transparent !border-none`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:I(()=>[N(`div`,null,[n.value?(S(),O(k,{key:0},[n.value?(S(),O(`p`,Un,M(e.block.value[0].value),1)):A(``,!0),r.value?(S(),O(`p`,Wn,M(e.block.value[1].value),1)):A(``,!0)],64)):e.block.value.length?(S(),O(`p`,Gn,`Klik om te openen`)):A(``,!0)])]),_:1},8,[`class`,`pt`]),T(L(H),{pt:{content:{class:`flex flex-col gap-3`}}},{default:I(()=>[(S(!0),O(k,null,m(e.block.value.slice(r.value?2:+!!n.value),t=>(S(),j(a,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`onTabOpen`])):A(``,!0)],2)}}}),qn={class:`flex flex-wrap justify-end h-fit gap-3`},Jn=r({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(S(),O(`div`,qn,[T(St,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),T(ot,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),Yn={class:`flex justify-between h-fit mt-2 gap-2`},Xn={class:`flex flex-wrap gap-3`},Zn=r({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=l(),r=h(),i=Pe(),a=Ue(),o=Y(),{publicUsers:s}=F(i),{firebaseUser:u,isOwner:d}=F(r),{deleteBlogPost:f}=a,{isDarkTheme:p}=Je(),g=z(!1);n.currentRoute.value.name!==R.BLOG&&Dt(t.post);let _=P(()=>t.post.allowedUserIds?.length?s.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),v=P(()=>{let e=c(t.post.date);return t.post.dateUpdated?e+` - aangepast ${c(t.post.dateUpdated)}`:e}),y=P(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),b=P(()=>[`border !rounded-primary overflow-hidden`,p.value?`border-cyan-400/20 !bg-gradient-to-br !from-neutral-900/90 !via-neutral-900/72 !to-cyan-950/45 shadow-[0_20px_45px_rgba(8,145,178,0.12)]`:`!border-sky-200 !bg-gradient-to-br !from-slate-100 !via-sky-100 !to-blue-100 shadow-[0_20px_45px_rgba(59,130,246,0.16)]`]),ee=P(()=>p.value?`h-fit !p-0 !px-4 !py-1 !bg-neutral-800/95 !text-neutral-100 border border-cyan-400/15`:`h-fit !p-0 !px-4 !py-1 !bg-slate-50/95 !text-slate-700 border !border-sky-200 shadow-sm`),te=P(()=>[`z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3 border backdrop-blur-sm`,p.value?`border-cyan-400/10 bg-neutral-950/45 text-neutral-100 shadow-inner`:`border-sky-100 bg-slate-50/90 text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]`]),ne=P(()=>({class:p.value?`text-sm text-neutral-300 mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`:`text-sm text-slate-600 mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`})),re=()=>{o.openWith(t.post)},x=()=>{g.value=!0},ie=async()=>{await f(t.post.id)&&(g.value=!1)},C=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${Fe.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),le.success(`Link gekopieerd!`)};return(t,n)=>(S(),O(k,null,[T(q,{id:e.post.id,class:B(b.value),title:e.post.title,subTitle:v.value,"sub-title-props":ne.value,tags:y.value,clickable:``,route:{name:L(R).BLOG_DETAILS,params:{postId:e.post.id}}},{right:I(()=>[T(K,{class:`h-fit`,variant:`neutral`,icon:`pi pi-copy`,text:``,onClick:C})]),default:I(()=>[N(`div`,Yn,[N(`div`,Xn,[(S(!0),O(k,null,m(_.value,e=>(S(),j(L(be),{class:B(ee.value),icon:`pi pi-user`,label:e.id===L(u)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`class`,`label`]))),256))]),L(d)?(S(),O(`div`,{key:0,class:B([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[T(Jn,{onEditClicked:re,onDeleteClicked:x})],2)):A(``,!0)]),N(`div`,{class:B([`mt-5 h-px w-full`,L(p)?`bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent`:`bg-gradient-to-r from-transparent via-sky-500/45 to-transparent`])},null,2),T(q,{class:B(te.value)},{default:I(()=>[(S(!0),O(k,null,m(e.post.content,t=>(S(),j(Kn,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1},8,[`class`]),T(Nt,{post:e.post},null,8,[`post`])]),_:1},8,[`id`,`class`,`title`,`subTitle`,`sub-title-props`,`tags`,`route`]),T(st,{"is-open":g.value,"onUpdate:isOpen":n[0]||=e=>g.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:ie},null,8,[`is-open`,`entity-label`])],64))}}),Qn=s(Tt(),1),$n={class:`block text-sm font-bold mb-2`},er={class:`background-gray-dark rounded-2xl`},tr={class:`grid grid-cols-6 items-center`},nr=r({__name:`ImageSliderField`,props:a({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=p(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(S(),O(`div`,null,[N(`p`,$n,M(e.label),1),N(`div`,er,[T(L(Qn.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:I(({element:t,index:i})=>[N(`div`,tr,[a[1]||=N(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(wt,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),T(ot,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),rr=oe.extend({name:`editor`,style:`
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
`,classes:{root:function(e){return[`p-editor`,{"p-invalid":e.instance.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),ir={name:`BaseEditor`,extends:ve,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:rr,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ar(e)}function or(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function sr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?or(Object(n),!0).forEach(function(t){cr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):or(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function cr(e,t,n){return(t=lr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lr(e){var t=ur(e,`string`);return ar(t)==`symbol`?t:t+``}function ur(e,t){if(ar(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(ar(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var dr=function(){try{return window.Quill}catch{return null}}(),fr={name:`Editor`,extends:ir,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:sr({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};dr?(this.quill=new dr(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):Ne(()=>import(`./c-quill-DtYgdYzX.js`).then(function(n){n&&u(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1,2]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function pr(e,t,n,r,i,a){return S(),O(`div`,x({class:e.cx(`root`)},e.ptmi(`root`)),[N(`div`,x({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[b(e.$slots,`toolbar`,{},function(){return[N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`select`,x({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[N(`option`,x({value:`1`},e.ptm(`option`)),`Heading`,16),N(`option`,x({value:`2`},e.ptm(`option`)),`Subheading`,16),N(`option`,x({value:`0`},e.ptm(`option`)),`Normal`,16)],16),N(`select`,x({class:`ql-font`},e.ptm(`font`)),[N(`option`,se(ce(e.ptm(`option`))),null,16),N(`option`,x({value:`serif`},e.ptm(`option`)),null,16),N(`option`,x({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`button`,x({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),N(`button`,x({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),N(`button`,x({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`select`,x({class:`ql-color`},e.ptm(`color`)),null,16),N(`select`,x({class:`ql-background`},e.ptm(`background`)),null,16)],16),N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`button`,x({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),N(`button`,x({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),N(`select`,x({class:`ql-align`},e.ptm(`select`)),[N(`option`,x({defaultValue:``},e.ptm(`option`)),null,16),N(`option`,x({value:`center`},e.ptm(`option`)),null,16),N(`option`,x({value:`right`},e.ptm(`option`)),null,16),N(`option`,x({value:`justify`},e.ptm(`option`)),null,16)],16)],16),N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`button`,x({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),N(`button`,x({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),N(`button`,x({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),N(`span`,x({class:`ql-formats`},e.ptm(`formats`)),[N(`button`,x({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),N(`div`,x({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}fr.render=pr;var mr=[`for`],hr=r({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=P({get:()=>n.modelValue||``,set:e=>{s(`update:modelValue`,e)}}),i=P(()=>n.label?n.label+(n.required?` *`:``):void 0),a=P(()=>n.name+(n.id?`.${n.id}`:``)),o=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},s=t;return(t,n)=>(S(),O(`div`,null,[e.label?(S(),O(`label`,x({key:0,class:`block text-sm font-bold mb-2`,for:a.value},e.labelProps),M(i.value),17,mr)):A(``,!0),T(L(fr),x({id:a.value,placeholder:e.placeholder,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,onLoad:o},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(S(),j(it,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):A(``,!0)]))}}),gr={class:`p-4 background-gray-dark rounded-2xl`},_r={class:`flex gap-3`},vr=r({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=z(``),a=P({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}});P(()=>n.name+(n.id?`.`+n.id:``));let o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(S(),O(`div`,gr,[T(L(Qn.default),{modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:I(({element:t,index:r})=>[N(`div`,_r,[n[1]||=N(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(J,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])]))}}),yr=[`for`],br={class:`table w-full`},xr={class:`table-header-group`},Sr={key:0,class:`table-row`},Cr={key:0,class:`table-cell`},wr={class:`table-cell`},Tr={class:`table-row-group`},Er={key:0,class:`table-cell`},Dr={key:1,class:`table-cell`},Or={key:2,class:`table-cell`},kr={class:`table-footer-group`},Ar={class:`table-row`},jr={key:0,class:`table-cell`},Mr=r({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,i=rt(at).greaterOrEqual(`md`),a=P({get:()=>ge(n.modelValue),set:e=>{r(`update:modelValue`,Ve(e))}}),o=P(()=>n.name+(n.id?`.`+n.id:``)),s=P(()=>i.value&&a.value[0]?.length<2),c=(e,t,n)=>{let i=[...a.value];i[e][t]=n,r(`update:modelValue`,Ve(i))},l=()=>{let e=a.value;if(e.length){let t=e[0];t.length?a.value=[...e,t.map(()=>``)]:a.value=[...e,[``]]}else a.value=[[``]]},u=e=>{let t=a.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),a.value=[...t]}},d=e=>{a.value.splice(e,1),a.value=a.value},f=()=>{a.value=a.value.map(e=>[...e,``])},p=e=>{let t=a.value;for(let n of t)n.splice(e,0,``);a.value=[...t]},h=e=>{a.value=a.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(S(),O(`div`,null,[e.label?(S(),O(`label`,x({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),M(e.label),17,yr)):A(``,!0),N(`div`,br,[N(`div`,xr,[a.value.length&&a.value[0].length>1?(S(),O(`div`,Sr,[a.value.length>1?(S(),O(`div`,Cr)):A(``,!0),(S(!0),O(k,null,m(a.value[0],(e,t)=>(S(),O(`div`,wr,[a.value.length&&a.value[0].length?(S(),j(K,{key:0,class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Remove column`:void 0,onClick:e=>h(t)},null,8,[`label`,`onClick`])):A(``,!0)]))),256))])):A(``,!0)]),N(`div`,Tr,[(S(!0),O(k,null,m(a.value,(t,n)=>(S(),O(`div`,{key:n,class:`table-row`},[a.value.length>1?(S(),O(`div`,Er,[T(K,{class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Remove row`:void 0,onClick:e=>d(n)},null,8,[`label`,`onClick`])])):A(``,!0),(S(!0),O(k,null,m(t,(t,r)=>(S(),j(J,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`header`:`cell`,"onUpdate:modelValue":e=>c(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(S(),O(`div`,Dr,[T(K,{class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:s.value?`Add column`:void 0,onClick:f},null,8,[`label`])])):(S(),O(`div`,Or,[T(K,{class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Insert row`:void 0,onClick:e=>u(n)},null,8,[`label`,`onClick`])]))]))),128))]),N(`div`,kr,[N(`div`,Ar,[a.value.length>1?(S(),O(`div`,jr)):A(``,!0),(S(!0),O(k,null,m(a.value[0],(e,t)=>(S(),O(`div`,{class:`table-cell`,key:t},[t===0?(S(),j(K,{key:0,class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:s.value?`Add row`:void 0,onClick:l},null,8,[`label`])):(S(),j(K,{key:1,class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Insert row`:void 0,onClick:e=>p(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),Nr=oe.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}}),Pr={name:`BaseSlider`,extends:ve,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Nr,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function Fr(e){"@babel/helpers - typeof";return Fr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Fr(e)}function Ir(e,t,n){return(t=Lr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lr(e){var t=Rr(e,`string`);return Fr(t)==`symbol`?t:t+``}function Rr(e,t){if(Fr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Fr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function zr(e){return Ur(e)||Hr(e)||Vr(e)||Br()}function Br(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vr(e,t){if(e){if(typeof e==`string`)return Wr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wr(e,t):void 0}}function Hr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ur(e){if(Array.isArray(e))return Wr(e)}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Gr={name:`Slider`,extends:Pr,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+_e(),this.initY=e.top+re(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?g(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?zr(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||f(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault();break}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}else if(this.horizontal)return{width:this.handlePosition+`%`};else return{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return Oe(Ir({},this.orientation,this.orientation))}}},Kr=[`data-p`],qr=[`data-p`],Jr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],Yr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],Xr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function Zr(e,t,n,r,i,a){return S(),O(`div`,x({class:e.cx(`root`),onClick:t[18]||=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":a.dataP}),[N(`span`,x({class:e.cx(`range`),style:[e.sx(`range`),a.rangeStyle()]},e.ptm(`range`),{"data-p":a.dataP}),null,16,qr),e.range?A(``,!0):(S(),O(`span`,x({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),a.handleStyle()],onTouchstartPassive:t[0]||=function(e){return a.onDragStart(e)},onTouchmovePassive:t[1]||=function(e){return a.onDrag(e)},onTouchend:t[2]||=function(e){return a.onDragEnd(e)},onMousedown:t[3]||=function(e){return a.onMouseDown(e)},onKeydown:t[4]||=function(e){return a.onKeyDown(e)},onBlur:t[5]||=function(e){return a.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":a.dataP}),null,16,Jr)),e.range?(S(),O(`span`,x({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||=function(e){return a.onDragStart(e,0)},onTouchmovePassive:t[7]||=function(e){return a.onDrag(e)},onTouchend:t[8]||=function(e){return a.onDragEnd(e)},onMousedown:t[9]||=function(e){return a.onMouseDown(e,0)},onKeydown:t[10]||=function(e){return a.onKeyDown(e,0)},onBlur:t[11]||=function(e){return a.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":a.dataP}),null,16,Yr)):A(``,!0),e.range?(S(),O(`span`,x({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||=function(e){return a.onDragStart(e,1)},onTouchmovePassive:t[13]||=function(e){return a.onDrag(e)},onTouchend:t[14]||=function(e){return a.onDragEnd(e)},onMousedown:t[15]||=function(e){return a.onMouseDown(e,1)},onKeydown:t[16]||=function(e){return a.onKeyDown(e,1)},onBlur:t[17]||=function(e){return a.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":a.dataP}),null,16,Xr)):A(``,!0)],16,Kr)}Gr.render=Zr;var Qr={class:`w-full flex flex-col gap-3`},$r={class:`flex gap-5`},ei={key:0},ti={key:1},ni={key:1,class:`w-full flex gap-3 justify-between`},ri={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},ii={key:5,class:`w-full flex gap-3`},ai={key:6},oi={class:`flex flex-col gap-1`},si=r({__name:`BlogPostContentBlocksDialog`,props:a({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:a([`delete`],[`update:modelValue`]),setup(e){let n=p(e,`modelValue`),{blogPostOriginal:r}=F(Y()),i=z(`title`),a=z(`center`),o=z(!0),s=z(null),c=async()=>{n.value.push(ae.createInstance(xe(),i.value,i.value,a.value)),o.value=!1,setTimeout(()=>{o.value=!0})},l=e=>{let t=n.value.findIndex(t=>t.id===e);n.value.splice(t,1)},u=e=>{s.value=s.value===e?null:e};return(d,f)=>{let p=w(`BlogPostContentBlocksDialog`,!0);return S(),O(`div`,Qr,[n.value.length?(S(),j(L(Qn.default),{key:0,ref:`draggableRef`,class:`flex flex-col gap-3`,modelValue:n.value,"onUpdate:modelValue":f[0]||=e=>n.value=e,itemKey:e=>e.id,handle:`.drag-handle`},{item:I(({element:t})=>[N(`div`,{class:B({"bg-neutral-500 bg-opacity-25 rounded-primary py-1 px-3 mt-3":s.value===t.id})},[t.isGroup()?(S(),j(L(Ye),{key:0,class:`w-full`,onTabOpen:L(ye)},{default:I(()=>[T(L(U),{value:`0`},{default:I(()=>[T(L(W),{class:`drag-handle`},{default:I(()=>[N(`div`,$r,[f[4]||=N(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),t.value.length&&typeof t.value[0].value==`string`?(S(),O(`p`,ei,M(t.value[0].value),1)):(S(),O(`p`,ti,M(t.getLabel()),1))])]),_:2},1024),T(L(H),null,{default:I(()=>[T(p,{id:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,onDelete:e=>l(t.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`onTabOpen`])):(S(),O(`div`,ni,[f[5]||=N(`i`,{class:`drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer`},null,-1),t.isBoolean()?(S(),j(Ze,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isNumber()?(S(),O(`div`,ri,[T(L(Gr),{class:`w-full`,name:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),N(`p`,null,M(t.value)+`%`,1)])):t.isString()?(S(),O(k,{key:2},[t.type===`title`?(S(),j(J,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`richtext`?(S(),j(hr,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`table`?(S(),j(Mr,{key:2,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`coverimage`||t.type===`image`?(S(),j(wt,{key:3,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":L(r)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):A(``,!0)],64)):t.isStringList()?(S(),O(k,{key:3},[t.type===`bulletlist`?(S(),j(vr,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`imageslider`?(S(),j(nr,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":L(r)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):A(``,!0)],64)):t.isDate()?(S(),j(_t,{key:4,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isButton()?(S(),O(`div`,ii,[T(J,{class:`w-1/2`,name:`${t.id}-title`,label:`Knop titel`,modelValue:t.value.title,"onUpdate:modelValue":e=>t.value.title=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(J,{class:`w-1/2`,name:`${t.id}-url`,label:`Knop link`,modelValue:t.value.url,"onUpdate:modelValue":e=>t.value.url=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(G,{class:`w-full md:w-1/2`,name:`${t.id}-variant`,label:`Knop variant`,modelValue:t.value.variant,"onUpdate:modelValue":e=>t.value.variant=e,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`tertiary`,label:`Tertiair`}]},null,8,[`name`,`modelValue`,`onUpdate:modelValue`])])):(S(),O(`p`,ai,M(t.getLabel()),1)),N(`div`,oi,[T(St,{onClick:e=>u(t.id)},null,8,[`onClick`]),T(ot,{onClick:e=>l(t.id)},null,8,[`onClick`]),Array.isArray(t.value)?(S(),j(Ct,{key:0,onClick:e=>t.value.push(``)},null,8,[`onClick`])):A(``,!0)])])),s.value===t.id?(S(),j(G,{key:2,class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,"model-value":t.alignment??`center`,"onUpdate:modelValue":e=>t.alignment=e,options:L(he)},null,8,[`name`,`model-value`,`onUpdate:modelValue`,`options`])):A(``,!0)],2)]),_:1},8,[`modelValue`,`itemKey`])):A(``,!0),o.value?(S(),j(L(Ye),{key:1,onTabOpen:L(ye)},{default:I(()=>[T(L(U),{value:`0`},{default:I(()=>[T(L(W),{"pt:root":`!bg-green-500 !bg-opacity-25 !border-none`},{default:I(()=>[...f[6]||=[Ge(` Voeg content toe `,-1)]]),_:1}),T(L(H),{"pt:root":`bg-green-500 bg-opacity-25 rounded-b-2xl`,"pt:content":`flex flex-col justify-center items-center gap-3`},{default:I(()=>[T(G,{class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,modelValue:i.value,"onUpdate:modelValue":f[1]||=e=>i.value=e,options:Object.entries(L(t)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`]),T(G,{class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,modelValue:a.value,"onUpdate:modelValue":f[2]||=e=>a.value=e,options:L(he)},null,8,[`name`,`modelValue`,`options`]),T(K,{class:`w-full md:w-1/2`,variant:`green`,label:`Voeg content toe`,onClick:c}),e.id?(S(),j(K,{key:0,class:`w-full md:w-1/2 bg-opacity-75`,variant:`danger`,label:`Verwijder groep`,onClick:f[3]||=e=>d.$emit(`delete`)})):A(``,!0)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):A(``,!0)])}}}),ci=r({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let{blogPostMutation:t}=F(Y()),n=ft(P(()=>({title:{required:pt,minLength:dt(3),maxLength:ct(50)}})),t);return(e,r)=>(S(),O(k,null,[T(J,{class:`w-full`,name:`title`,label:`Title`,placeholder:`Amazing Post`,modelValue:L(t).title,"onUpdate:modelValue":r[0]||=e=>L(t).title=e,error:L(n).title.$error?L(ut)(L(n).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),T(si,{modelValue:L(t).content,"onUpdate:modelValue":r[1]||=e=>L(t).content=e},null,8,[`modelValue`])],64))}}),li=r({__name:`BlogPostSettingsDialog`,setup(e){let t=Pe(),{blogPostMutation:n}=F(Y()),{allowedPublicUsers:r}=t,{mappedUsers:i}=Et(),a=P({get(){return!!n.value.datePinned},set(e){n.value.datePinned=e?new Date:null}}),o=z([]),s=lt.withMessage(`Invalid user ID's`,e=>!e.length||e.length===o.value.length),c=ft(P(()=>({allowedUserIds:{validAllowedUserIds:s}})),n);return d(()=>n.value.allowedUserIds,async e=>{o.value=await r(e)},{immediate:!0}),(e,t)=>(S(),O(k,null,[T(G,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:L(n).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>L(n).allowedUserIds=e,error:L(c).allowedUserIds.$error?L(ut)(L(c).allowedUserIds):``,options:L(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),T(Ze,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e},null,8,[`modelValue`]),T(Ze,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:L(n).locked,"onUpdate:modelValue":t[2]||=e=>L(n).locked=e},null,8,[`modelValue`]),T(Ze,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:L(n).archived,"onUpdate:modelValue":t[3]||=e=>L(n).archived=e},null,8,[`modelValue`])],64))}}),ui={ref:`dialog`,class:`pt-6 mb-4 xl:px-16`},di=r({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,r=Ue(),i=v(),a=Y(),{isBlogPostsMutationLoading:o}=F(r),{isOpen:s,blogPostOriginal:c,blogPostMutation:l,hasChanges:u}=F(a),d=ft(),f=P(()=>!!c.value?.allowedUserIds?.length&&!l.value.allowedUserIds?.length||!c.value?.allowedUserIds?.length&&!!l.value.allowedUserIds?.length),p=P(()=>De(c.value)),m=async()=>{await d.value.$validate()&&(c.value?f.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(c.value,l.value.allowedUserIds.length?`private`:`public`)&&(a.close(),le.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,l.value.id))):await r.updateBlogPost(l.value,p.value)&&(le.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,l.value.id)):await r.createBlogPost(l.value)&&(a.close(),n(`scroll-to-updated`,l.value.id)))},h=async()=>{await i.deleteFilesOfBlogPost(l.value,c.value??void 0),a.close()};return(e,t)=>(S(),j(nt,{isOpen:L(s),title:L(c)?`Bericht bijwerken`:`Bericht maken`,description:L(c)?`Werk dit bericht bij`:`Maak een nieuw bericht`,"confirm-text":L(c)?`Bijwerken`:`Maken`,"confirm-loading":L(o),"confirm-props":{disabled:!L(u)},onConfirm:m,onCancel:h},{default:I(()=>[N(`form`,ui,[L(s)?(S(),j(L(Ye),{key:0,"active-index":0,onTabOpen:L(ye)},{default:I(()=>[T(L(U),{value:`content`},{default:I(()=>[T(L(W),null,{default:I(()=>[...t[0]||=[Ge(` Content `,-1)]]),_:1}),T(L(H),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:I(()=>[T(ci)]),_:1})]),_:1}),T(L(U),{value:`settings`},{default:I(()=>[T(L(W),null,{default:I(()=>[...t[1]||=[Ge(` Instellingen `,-1)]]),_:1}),T(L(H),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:I(()=>[T(li)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):A(``,!0)],512)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-text`,`confirm-loading`,`confirm-props`]))}});export{Y as a,Kn as i,Zn as n,Ot as o,Jn as r,di as t};