const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","./c-rolldown-runtime.js"])))=>i.map(i=>d[i]);
import{a as e}from"./c-rolldown-runtime.js";import{$n as t,$t as n,A as r,Ar as i,B as a,Bn as o,Bt as s,Ci as c,Cr as l,Dr as u,Dt as d,En as f,G as p,Gr as m,H as h,Hr as g,Ii as _,Ir as v,Jr as y,Kr as b,Kt as x,L as S,Li as C,Lr as w,Mn as T,Mr as E,Mt as D,Nt as O,Or as k,P as ee,Pr as A,Qn as j,R as te,Ri as ne,Sn as re,Sr as M,Tn as ie,Tt as ae,Ur as N,Ut as P,Vi as F,Vr as oe,Y as se,Yr as I,Zn as ce,Zr as le,Zt as L,_n as ue,ai as R,ar as de,bn as fe,br as z,di as pe,dr as me,dt as he,ei as ge,en as _e,er as ve,fi as B,fn as ye,gn as be,gr as xe,h as Se,hi as V,i as Ce,j as we,jn as Te,jt as Ee,l as De,lt as Oe,m as ke,mn as Ae,ni as H,nt as je,pn as Me,pr as Ne,qr as U,r as Pe,ri as W,s as Fe,t as Ie,tr as Le,tt as Re,vn as ze,vr as Be,wn as Ve,wr as G,wt as He,xr as K,xt as q,yn as Ue,yr as J}from"./c-ripple.js";import{a as We,m as Ge,s as Ke}from"../bundle.js";import{i as Y,n as qe,r as X,t as Je}from"./c-SelectField.js";import{t as Z}from"./c-TextField.js";import{i as Ye,r as Xe}from"./c-Page.js";import{i as Ze,n as Qe,r as $e}from"./c-dialog.js";import{t as et}from"./c-Dialog2.js";import{n as tt,t as nt}from"./c-SwitchField.js";import{t as rt}from"./c-card.js";import{n as it,t as at}from"./c-dist.js";import{i as ot,l as st,o as ct,r as lt}from"./c-validationHelpers.js";import{t as ut}from"./c-DeleteDialog.js";import{t as dt}from"./c-chevronright.js";import{t as ft}from"./c-chevronup.js";import{i as pt,n as mt,r as ht,t as gt}from"./c-accordion.js";import{t as _t}from"./c-DateField.js";import{t as vt}from"./c-chevronleft.js";import{n as yt,t as bt}from"./c-datatable.js";import{t as xt}from"./c-progressbar.js";import{t as St}from"./c-togglebutton.js";import{t as Ct}from"./c-Image.js";import{t as wt}from"./c-tag.js";import{t as Tt}from"./c-Countdown.js";import{t as Et}from"./c-_plugin-vue_export-helper.js";import{a as Dt,t as Ot}from"./c-productStore.js";import{i as kt}from"./c-useProductHelper.js";import{t as At}from"./c-CreateButton.js";import{t as jt}from"./c-BuyLogMutationDialog.js";import{n as Mt,o as Nt,t as Pt}from"./c-useTaskHelper.js";import{t as Ft}from"./c-EditButton.js";import{t as It}from"./c-vuedraggable.umd.js";import{t as Lt}from"./c-FileUpload.js";import{n as Rt,t as zt}from"./c-core.js";import{t as Bt}from"./c-useUsers.js";A(),R(),c();var Vt={class:`flex justify-between gap-3`},Ht={class:`flex flex-col`},Ut={class:`flex gap-2`},Wt=[`src`],Gt=[`src`],Kt={class:`flex flex-col`},qt={class:`text-base font-bold`},Jt={key:1,class:`text-base font-bold`},Yt={class:`!text-[var(--p-text-color)] mt-2`},Xt={key:0,class:`flex flex-col gap-2`},Zt=i({__name:`BlogReaction`,props:{post:{},reaction:{}},emits:[`deleteClicked`],setup(e,{emit:t}){let n=e,r=t,i=O(),a=D(),o=x(),s=Ae(),{routeLoading:c,routeLoadingId:u}=j(i),{firebaseUser:d,isLoggedIn:f,isOwner:p}=j(a),{publicUsers:m}=j(o),{isDatabaseDeletionActive:h}=j(s),g=z(()=>m.value.find(e=>e.id===n.reaction.userId)),v=z(()=>d.value&&n.reaction.userId===d.value.uid||p.value),y=z(()=>`surface-panel md:p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary`),b=z(()=>`surface-text-muted text-sm mb-2 xl:whitespace-nowrap`);return(t,n)=>{let i=U(`RouterLink`);return N(),M(V(rt),{id:e.reaction.id,class:_(y.value)},{content:H(()=>[K(`div`,Vt,[K(`div`,Ht,[K(`div`,Ut,[g.value?.avatar&&V(f)?(N(),M(i,{key:0,to:{name:V(P).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:H(()=>[K(`img`,{class:_([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":V(c)===V(P).USER_DETAILS&&V(u)===g.value?.id}]),src:g.value.avatar},null,10,Wt)]),_:1},8,[`to`])):g.value?.avatar?(N(),G(`img`,{key:1,class:_([`rounded-full h-12 w-12 aspect-square object-cover`,{"animate-spin":V(c)===V(P).USER_DETAILS&&V(u)===g.value?.id}]),src:g.value.avatar},null,10,Gt)):l(``,!0),K(`div`,Kt,[V(f)?(N(),M(i,{key:0,to:{name:V(P).USER_DETAILS,params:{userId:e.reaction.userId}},class:`!no-underline hover:!underline`},{default:H(()=>[K(`h3`,qt,F(g.value?.displayName||`Onbekende gebruiker`),1)]),_:1},8,[`to`])):(N(),G(`h3`,Jt,F(g.value?.displayName||`Onbekende gebruiker`),1)),K(`p`,{class:_(b.value)},F(V(L)(e.reaction.date)),3)])]),K(`p`,Yt,F(e.reaction.message),1)]),v.value?(N(),G(`div`,Xt,[v.value&&!e.post.locked?(N(),M(X,{key:0,disabled:V(h),onClick:n[0]||=t=>r(`deleteClicked`,e.reaction)},null,8,[`disabled`])):l(``,!0)])):l(``,!0)])]),_:1},8,[`id`,`class`])}}});A(),R(),c(),Ne();var Qt={class:`grid justify-items-center p-5 gap-5`},$t=i({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=D(),r=Ae(),{firebaseUser:i,isLoggedIn:a}=j(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:s}=j(r),{isDarkTheme:c}=Ye(),u=B(!1),d=B(!1),f=B(null),p=pe({reaction:``}),h=at({reaction:{required:st}},p),g=z(()=>[...t.post.reactions].reverse()),v=z(()=>g.value.filter((e,t)=>t<3)),y=z(()=>g.value.filter((e,t)=>t>=3)),b=z(()=>t.post.locked||!a.value||o.value),x=z(()=>f.value?.message?f.value.message.length>120?`${f.value.message.slice(0,117)}...`:f.value.message:null),S=z(()=>x.value?`Reactie: \"${x.value}\"`:void 0),C=z(()=>`surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary`),w=z(()=>[`!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]`,b.value?{"!bg-[var(--p-surface-100)]":!o.value}:``,{"cursor-pointer":!a.value&&!t.post.locked}]),T=async()=>{if(o.value)return;if(!await h.value.$validate()||!i.value){Ve();return}let e=p.reaction;p.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new fe({userId:i.value.uid,postId:t.post.id,message:e}));p.reaction=n?``:e,n&&h.value.$reset(),Ve()};function E(e){f.value=e,d.value=!0}async function O(){f.value&&await r.deleteBlogReaction(t.post,f.value.id)&&(d.value=!1,f.value=null)}return(t,n)=>(N(),G(J,null,[K(`form`,{action:``,onSubmit:Be(T,[`prevent`])},[K(`div`,Qt,[!V(a)||e.post.reactions.filter(e=>e.userId===V(i).uid).length<20?(N(),M(V(rt),{key:0,class:_(C.value)},{content:H(()=>[k(Z,{id:e.post.id,modelValue:p.reaction,"onUpdate:modelValue":n[0]||=e=>p.reaction=e,class:`w-5/6 place-self-center`,"input-props":{class:w.value,disabled:b.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:V(a)?`Reageren`:`Log in om te reageren`,error:V(h).reaction.$error?V(lt)(V(h).reaction):``,required:``,onClick:n[1]||=()=>!V(a)&&!e.post.locked?V(He).push({name:V(P).LOGIN}):{}},null,8,[`id`,`modelValue`,`input-props`,`placeholder`,`error`])]),_:1},8,[`class`])):l(``,!0),(N(!0),G(J,null,m(v.value,t=>(N(),M(Zt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`]))),256)),(N(!0),G(J,null,m(y.value,t=>W((N(),M(Zt,{post:e.post,reaction:t,onDeleteClicked:E},null,8,[`post`,`reaction`])),[[xe,u.value]])),256)),e.post.reactions.length>3?(N(),M(Y,{key:1,outlined:``,icon:u.value?`pi pi-angle-up`:`pi pi-angle-down`,label:u.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>u.value=!u.value},null,8,[`icon`,`label`])):l(``,!0)])],32),k(ut,{"is-open":d.value,"onUpdate:isOpen":n[3]||=e=>d.value=e,title:`Reactie verwijderen`,"entity-label":`deze reactie`,details:S.value,"confirm-loading":V(s),onConfirm:O,onCancel:n[4]||=e=>f.value=null},null,8,[`is-open`,`details`,`confirm-loading`])],64))}});A(),R();var en=e=>{let n=ye(),r=Ae(),{previousCurrentBlogPost:i,isBlogPostDatabaseActionActive:a}=j(n),o=[],s=B(),c=t=>{t.metadata.hasPendingWrites||a.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{await n.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),n.checkBlogPostForUnreadReactions(i.value,!0)},200))};oe(async()=>{r.unread=r.unread.filter(t=>t.postId!==e.id);let i=T(e),a=n.collections.blogPosts(i.isPrivate),s=r.collections.blogReactions(i.isPrivate),l=de(a,e.id),u=ve(a,Le(`id`,`==`,e.id)),d=ve(s,Le(`post`,`==`,l));o.push(t(u,c)),o.push(t(d,c))}),g(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},tn=()=>{let e=ye(),n=D(),r=Ae(),{visibleBlogPosts:i,isBlogPostDatabaseActionActive:a}=j(e),{isLoggedIn:o}=j(n),s=[],c=B(),l=t=>{t.metadata.hasPendingWrites||a.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{i.value.length&&(await e.fetchBlogPosts({amount:i.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};oe(()=>{r.unread=[],s.push(t(e.collections.blogPosts(!1),l)),s.push(t(r.collections.blogReactions(!1),l)),o.value&&(s.push(t(e.collections.blogPosts(!0),l)),s.push(t(r.collections.blogReactions(!0),l)))}),g(()=>{clearTimeout(c.value),s.forEach(e=>{e()})})};R(),A();var nn=e=>e?e.clone():new be,Q=ce(`blogPostDialogStore`,()=>{let e=B(!1),t=B(null),n=B(nn(null)),r=B(!1),i=()=>{t.value=null,n.value=nn(null),r.value=!1};return ge(()=>n.value,()=>{r.value=!re(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=nn(r),e.value=!0},close:()=>{e.value=!1,i()}}}),rn=De.extend({name:`deferredcontent`});A();var an={name:`DeferredContent`,extends:Fe,inheritAttrs:!1,emits:[`load`],style:rn,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var e=this;this.documentScrollListener=function(){e.shouldLoad()&&(e.load(),e.unbindScrollListener())},window.addEventListener(`scroll`,this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&=(window.removeEventListener(`scroll`,this.documentScrollListener),null)},shouldLoad:function(){if(this.loaded)return!1;var e=this.$refs.container.getBoundingClientRect();return document.documentElement.clientHeight>=e.top},load:function(e){this.loaded=!0,this.$emit(`load`,e)}}};function on(e,t,n,r,i,a){return N(),G(`div`,w({ref:`container`},e.ptmi(`root`)),[i.loaded?b(e.$slots,`default`,{key:0}):l(``,!0)],16)}an.render=on;var sn=De.extend({name:`galleria`,style:`
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
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}});A(),Ne();var cn={name:`BaseGalleria`,extends:Fe,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:sn,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function ln(e){return pn(e)||fn(e)||dn(e)||un()}function un(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dn(e,t){if(e){if(typeof e==`string`)return mn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mn(e,t):void 0}}function fn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function pn(e){if(Array.isArray(e))return mn(e)}function mn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var hn={name:`GalleriaItem`,hostName:`Galleria`,extends:Fe,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault()}},onRightKey:function(){var e=ln(a(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=ln(a(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=ln(a(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return we(e,`data-p-active`)===!0}),n=Re(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=ln(a(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=Re(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=ln(a(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:vt,ChevronRightIcon:dt},directives:{ripple:Ie}},gn=[`disabled`],_n=[`id`,`aria-label`,`aria-roledescription`],vn=[`disabled`],yn=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],bn=[`tabindex`];function xn(e,t,n,r,i,a){var o=y(`ripple`);return N(),G(`div`,w({class:e.cx(`itemsContainer`)},e.ptm(`itemsContainer`)),[K(`div`,w({class:e.cx(`items`)},e.ptm(`items`)),[n.showItemNavigators?W((N(),G(`button`,w({key:0,type:`button`,class:e.cx(`prevButton`),onClick:t[0]||=function(e){return a.navBackward(e)},disabled:a.isNavBackwardDisabled},e.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(N(),M(I(n.templates.previousitemicon||`ChevronLeftIcon`),w({class:e.cx(`prevIcon`)},e.ptm(`prevIcon`)),null,16,[`class`]))],16,gn)),[[o]]):l(``,!0),K(`div`,w({id:n.id+`_item_`+n.activeIndex,class:e.cx(`item`),role:`group`,"aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm(`item`)),[n.templates.item?(N(),M(I(n.templates.item),{key:0,item:a.activeItem},null,8,[`item`])):l(``,!0)],16,_n),n.showItemNavigators?W((N(),G(`button`,w({key:1,type:`button`,class:e.cx(`nextButton`),onClick:t[1]||=function(e){return a.navForward(e)},disabled:a.isNavForwardDisabled},e.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(N(),M(I(n.templates.nextitemicon||`ChevronRightIcon`),w({class:e.cx(`nextIcon`)},e.ptm(`nextIcon`)),null,16,[`class`]))],16,vn)),[[o]]):l(``,!0),n.templates.caption?(N(),G(`div`,w({key:2,class:e.cx(`caption`)},e.ptm(`caption`)),[n.templates.caption?(N(),M(I(n.templates.caption),{key:0,item:a.activeItem},null,8,[`item`])):l(``,!0)],16)):l(``,!0)],16),n.showIndicators?(N(),G(`ul`,w({key:0,ref:`indicatorContent`,class:e.cx(`indicatorList`)},e.ptm(`indicatorList`)),[(N(!0),G(J,null,m(n.value,function(t,r){return N(),G(`li`,w({key:`p-galleria-indicator-${r}`,class:e.cx(`indicator`,{index:r}),"aria-label":a.ariaPageLabel(r+1),"aria-selected":n.activeIndex===r,"aria-controls":n.id+`_item_`+r,onClick:function(e){return a.onIndicatorClick(r)},onMouseenter:function(e){return a.onIndicatorMouseEnter(r)},onKeydown:function(e){return a.onIndicatorKeyDown(e,r)}},{ref_for:!0},e.ptm(`indicator`,a.getIndicatorPTOptions(r)),{"data-p-active":a.isIndicatorItemActive(r)}),[n.templates.indicator?l(``,!0):(N(),G(`button`,w({key:0,type:`button`,tabindex:n.activeIndex===r?`0`:`-1`,class:e.cx(`indicatorButton`)},{ref_for:!0},e.ptm(`indicatorButton`,a.getIndicatorPTOptions(r))),null,16,bn)),n.templates.indicator?(N(),M(I(n.templates.indicator),{key:1,index:r,activeIndex:n.activeIndex,tabindex:n.activeIndex===r?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):l(``,!0)],16,yn)}),128))],16)):l(``,!0)],16)}hn.render=xn;function Sn(e){return En(e)||Tn(e)||wn(e)||Cn()}function Cn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wn(e,t){if(e){if(typeof e==`string`)return Dn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Dn(e,t):void 0}}function Tn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function En(e){if(Array.isArray(e))return Dn(e)}function Dn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var On={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:Fe,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&r(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&r(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey()}},onRightKey:function(){var e=a(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=a(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=Sn(a(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return we(e,`data-p-active`)===!0}),n=Re(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=Sn(a(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=Re(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=a(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&te(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,h(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Sn(this.responsiveOptions);var n=Oe();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return he(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:vt,ChevronRightIcon:dt,ChevronUpIcon:ft,ChevronDownIcon:Ke},directives:{ripple:Ie}};function kn(e){"@babel/helpers - typeof";return kn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},kn(e)}function An(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?An(Object(n),!0).forEach(function(t){Mn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Mn(e,t,n){return(t=Nn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nn(e){var t=Pn(e,`string`);return kn(t)==`symbol`?t:t+``}function Pn(e,t){if(kn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(kn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Fn=[`disabled`,`aria-label`],In=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],Ln=[`tabindex`,`aria-label`,`aria-current`,`onClick`],Rn=[`disabled`,`aria-label`];function zn(e,t,n,r,i,a){var o=y(`ripple`);return N(),G(`div`,w({class:e.cx(`thumbnails`)},e.ptm(`thumbnails`)),[K(`div`,w({class:e.cx(`thumbnailContent`)},e.ptm(`thumbnailContent`)),[n.showThumbnailNavigators?W((N(),G(`button`,w({key:0,class:e.cx(`thumbnailPrevButton`),disabled:a.isNavBackwardDisabled,type:`button`,"aria-label":a.ariaPrevButtonLabel,onClick:t[0]||=function(e){return a.navBackward(e)}},jn(jn({},n.prevButtonProps),e.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(N(),M(I(n.templates.previousthumbnailicon||(n.isVertical?`ChevronUpIcon`:`ChevronLeftIcon`)),w({class:e.cx(`thumbnailPrevIcon`)},e.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,Fn)),[[o]]):l(``,!0),K(`div`,w({class:e.cx(`thumbnailsViewport`),style:{height:n.isVertical?n.contentHeight:``}},e.ptm(`thumbnailsViewport`)),[K(`div`,w({ref:`itemsContainer`,class:e.cx(`thumbnailItems`),role:`tablist`,onTransitionend:t[1]||=function(e){return a.onTransitionEnd(e)},onTouchstart:t[2]||=function(e){return a.onTouchStart(e)},onTouchmove:t[3]||=function(e){return a.onTouchMove(e)},onTouchend:t[4]||=function(e){return a.onTouchEnd(e)}},e.ptm(`thumbnailItems`)),[(N(!0),G(J,null,m(n.value,function(t,r){return N(),G(`div`,w({key:`p-galleria-thumbnail-item-${r}`,class:e.cx(`thumbnailItem`,{index:r,activeIndex:n.activeIndex}),role:`tab`,"data-p-active":n.activeIndex===r,"aria-selected":n.activeIndex===r,"aria-controls":n.containerId+`_item_`+r,onKeydown:function(e){return a.onThumbnailKeydown(e,r)}},{ref_for:!0},e.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":n.activeIndex===r,"data-p-galleria-thumbnail-item-active":a.isItemActive(r),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===r,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===r}),[K(`div`,w({class:e.cx(`thumbnail`),tabindex:n.activeIndex===r?`0`:`-1`,"aria-label":a.ariaPageLabel(r+1),"aria-current":n.activeIndex===r?`page`:void 0,onClick:function(e){return a.onItemClick(r)}},{ref_for:!0},e.ptm(`thumbnail`)),[n.templates.thumbnail?(N(),M(I(n.templates.thumbnail),{key:0,item:t},null,8,[`item`])):l(``,!0)],16,Ln)],16,In)}),128))],16)],16),n.showThumbnailNavigators?W((N(),G(`button`,w({key:1,class:e.cx(`thumbnailNextButton`),disabled:a.isNavForwardDisabled,type:`button`,"aria-label":a.ariaNextButtonLabel,onClick:t[5]||=function(e){return a.navForward(e)}},jn(jn({},n.nextButtonProps),e.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(N(),M(I(n.templates.nextthumbnailicon||(n.isVertical?`ChevronDownIcon`:`ChevronRightIcon`)),w({class:e.cx(`thumbnailNextIcon`)},e.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,Rn)),[[o]]):l(``,!0)],16)],16)}On.render=zn;function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Bn(e)}function Vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Vn(Object(n),!0).forEach(function(t){Un(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Un(e,t,n){return(t=Wn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wn(e){var t=Gn(e,`string`);return Bn(t)==`symbol`?t:t+``}function Gn(e,t){if(Bn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Bn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Kn={name:`GalleriaContent`,hostName:`Galleria`,extends:Fe,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:Hn(Hn({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:hn,GalleriaThumbnails:On,TimesIcon:Ce},directives:{ripple:Ie}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qn(Object(n),!0).forEach(function(t){Yn(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yn(e,t,n){return(t=Xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xn(e){var t=Zn(e,`string`);return $(t)==`symbol`?t:t+``}function Zn(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Qn=[`id`,`aria-label`,`aria-roledescription`],$n=[`aria-label`],er=[`aria-live`];function tr(e,t,n,r,i,a){var o=U(`GalleriaItem`),s=U(`GalleriaThumbnails`),c=y(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(N(),G(`div`,w({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Jn(Jn({},e.$attrs.containerProps),a.getPTOptions(`root`))),[e.$attrs.fullScreen?W((N(),G(`button`,w({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":a.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},a.getPTOptions(`closeButton`)),[(N(),M(I(e.$attrs.templates.closeicon||`TimesIcon`),w({class:e.cx(`closeIcon`)},a.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,$n)),[[c]]):l(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(N(),G(`div`,w({key:1,class:e.cx(`header`)},a.getPTOptions(`header`)),[(N(),M(I(e.$attrs.templates.header)))],16)):l(``,!0),K(`div`,w({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},a.getPTOptions(`content`)),[k(o,{id:e.$id,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return i.activeIndex=e},slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return i.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(N(),M(s,{key:0,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return i.activeIndex=e},slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return i.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:i.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):l(``,!0)],16,er),e.$attrs.templates&&e.$attrs.templates.footer?(N(),G(`div`,w({key:2,class:e.cx(`footer`)},a.getPTOptions(`footer`)),[(N(),M(I(e.$attrs.templates.footer)))],16)):l(``,!0)],16,Qn)):l(``,!0)}Kn.render=tr;var nr={name:`Galleria`,extends:cn,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&$e(),this.mask=null,this.container&&=(ke.clear(this.container),null)},methods:{onBeforeEnter:function(e){ke.set(`modal`,e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),Qe(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&te(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){p(this.target),this.target=null},onAfterLeave:function(e){ke.clear(e),this.containerVisible=!1,$e(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:Kn,Portal:Pe},directives:{focustrap:Ze}},rr=[`aria-modal`];function ir(e,t,n,r,i,a){var o=U(`GalleriaContent`),s=U(`Portal`),c=y(`focustrap`);return e.fullScreen?(N(),M(s,{key:0},{default:H(function(){return[i.containerVisible?(N(),G(`div`,w({key:0,ref:a.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[k(me,w({name:`p-galleria`,onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:H(function(){return[e.visible?W((N(),M(o,w({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[c]]):l(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,rr)):l(``,!0)]}),_:1})):(N(),M(o,w({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}nr.render=ir;var ar=De.extend({name:`slider`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-slider p-component`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-slider-horizontal":n.orientation===`horizontal`,"p-slider-vertical":n.orientation===`vertical`}]},range:`p-slider-range`,handle:`p-slider-handle`},inlineStyles:{handle:{position:`absolute`},range:{position:`absolute`}}});A();var or={name:`BaseSlider`,extends:Ge,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ar,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},sr(e)}function cr(e,t,n){return(t=lr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lr(e){var t=ur(e,`string`);return sr(t)==`symbol`?t:t+``}function ur(e,t){if(sr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(sr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function dr(e){return hr(e)||mr(e)||pr(e)||fr()}function fr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pr(e,t){if(e){if(typeof e==`string`)return gr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gr(e,t):void 0}}function mr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function hr(e){if(Array.isArray(e))return gr(e)}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _r={name:`Slider`,extends:or,inheritAttrs:!1,emits:[`change`,`slideend`],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+se(),this.initY=e.top+Se(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?S(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;if(this.step){var a=this.range?this.value[this.handleIndex]:this.value,o=i-a;o<0?i=a+Math.ceil(i/this.step-a/this.step)*this.step:o>0&&(i=a+Math.floor(i/this.step-a/this.step)*this.step)}else i=Math.floor(i);this.updateModel(e,i)},updateModel:function(e,t){var n=Math.round(t*100)/100,r;this.range?(r=this.value?dr(this.value):[],this.handleIndex==0?(n<this.min?n=this.min:n>=this.max&&(n=this.max),r[0]=n):(n>this.max?n=this.max:n<=this.min&&(n=this.min),r[1]=n)):(n<this.min?n=this.min:n>this.max&&(n=this.max),r=n),this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){this.disabled||(this.$el.setAttribute(`data-p-sliding`,!0),this.dragging=!0,this.updateDomData(),this.handleIndex=this.range&&this.value[0]===this.max?0:t,e.currentTarget.focus())},onDrag:function(e){this.dragging&&this.setValue(e)},onDragEnd:function(e){this.dragging&&(this.dragging=!1,this.$el.setAttribute(`data-p-sliding`,!1),this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||we(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onKeyDown:function(e,t){switch(this.handleIndex=t,e.code){case`ArrowDown`:case`ArrowLeft`:this.decrementValue(e,t),e.preventDefault();break;case`ArrowUp`:case`ArrowRight`:this.incrementValue(e,t),e.preventDefault();break;case`PageDown`:this.decrementValue(e,t,!0),e.preventDefault();break;case`PageUp`:this.incrementValue(e,t,!0),e.preventDefault();break;case`Home`:this.updateModel(e,this.min),e.preventDefault();break;case`End`:this.updateModel(e,this.max),e.preventDefault()}},onBlur:function(e,t){var n,r;(n=(r=this.formField).onBlur)==null||n.call(r,e)},decrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=this.range?this.step?this.value[t]-this.step:this.value[t]-1:this.step?this.value-this.step:!this.step&&n?this.value-10:this.value-1;this.updateModel(e,r),e.preventDefault()},incrementValue:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=this.range?this.step?this.value[t]+this.step:this.value[t]+1:this.step?this.value+this.step:!this.step&&n?this.value+10:this.value+1;this.updateModel(e,r),e.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},rangeStyle:function(){if(this.range){var e=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,t=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":t+`%`,width:e+`%`}:{bottom:t+`%`,height:e+`%`}}return this.horizontal?{width:this.handlePosition+`%`}:{height:this.handlePosition+`%`}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+`%`}:{bottom:this.handlePosition+`%`}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+`%`}:{bottom:this.rangeStartPosition+`%`}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+`%`}:{bottom:this.rangeEndPosition+`%`}}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return je(cr({},this.orientation,this.orientation))}}},vr=[`data-p`],yr=[`data-p`],br=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],xr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`],Sr=[`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`,`data-p`];function Cr(e,t,n,r,i,a){return N(),G(`div`,w({class:e.cx(`root`),onClick:t[18]||=function(){return a.onBarClick&&a.onBarClick.apply(a,arguments)}},e.ptmi(`root`),{"data-p-sliding":!1,"data-p":a.dataP}),[K(`span`,w({class:e.cx(`range`),style:[e.sx(`range`),a.rangeStyle()]},e.ptm(`range`),{"data-p":a.dataP}),null,16,yr),e.range?l(``,!0):(N(),G(`span`,w({key:0,class:e.cx(`handle`),style:[e.sx(`handle`),a.handleStyle()],onTouchstartPassive:t[0]||=function(e){return a.onDragStart(e)},onTouchmovePassive:t[1]||=function(e){return a.onDrag(e)},onTouchend:t[2]||=function(e){return a.onDragEnd(e)},onMousedown:t[3]||=function(e){return a.onMouseDown(e)},onKeydown:t[4]||=function(e){return a.onKeyDown(e)},onBlur:t[5]||=function(e){return a.onBlur(e)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`handle`),{"data-p":a.dataP}),null,16,br)),e.range?(N(),G(`span`,w({key:1,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeStartHandleStyle()],onTouchstartPassive:t[6]||=function(e){return a.onDragStart(e,0)},onTouchmovePassive:t[7]||=function(e){return a.onDrag(e)},onTouchend:t[8]||=function(e){return a.onDragEnd(e)},onMousedown:t[9]||=function(e){return a.onMouseDown(e,0)},onKeydown:t[10]||=function(e){return a.onKeyDown(e,0)},onBlur:t[11]||=function(e){return a.onBlur(e,0)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`startHandler`),{"data-p":a.dataP}),null,16,xr)):l(``,!0),e.range?(N(),G(`span`,w({key:2,class:e.cx(`handle`),style:[e.sx(`handle`),a.rangeEndHandleStyle()],onTouchstartPassive:t[12]||=function(e){return a.onDragStart(e,1)},onTouchmovePassive:t[13]||=function(e){return a.onDrag(e)},onTouchend:t[14]||=function(e){return a.onDragEnd(e)},onMousedown:t[15]||=function(e){return a.onMouseDown(e,1)},onKeydown:t[16]||=function(e){return a.onKeyDown(e,1)},onBlur:t[17]||=function(e){return a.onBlur(e,1)},tabindex:e.tabindex,role:`slider`,"aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm(`endHandler`),{"data-p":a.dataP}),null,16,Sr)):l(``,!0)],16,vr)}_r.render=Cr,A(),c();var wr={class:_([`list-disc ms-10 md:ms-5 py-3`])},Tr=i({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(N(),G(`ul`,wr,[(N(!0),G(J,null,m(e.bullets,e=>(N(),G(`li`,{key:e},F(e),1))),128))]))}});A(),c();var Er={class:`ps-5 md:ps-0 surface-text-muted text-xs font-semibold uppercase tracking-[0.24em] mt-3 mb-2`},Dr=i({__name:`BlogPostContentBlockLabel`,props:{label:{}},setup(e){return(t,n)=>(N(),G(`p`,Er,F(e.label),1))}});A();var Or={class:`blog-post-richtext w-full ql-editor no-input`},kr=[`innerHTML`],Ar=Et(i({__name:`BlogPostDescription`,props:{description:{}},setup(e){let t=e,n=z(()=>t.description.replace(/&nbsp;|\u00a0/g,` `));return(e,t)=>(N(),G(`div`,Or,[K(`div`,{innerHTML:n.value},null,8,kr)]))}}),[[`__scopeId`,`data-v-337cacce`]]);A(),c(),R();var jr={class:`w-full max-w-2xl rounded-primary p-4 shadow-sm backdrop-blur-sm`},Mr={class:`mb-4 flex items-start justify-between gap-3`},Nr={class:`text-lg font-semibold`},Pr={key:0,class:`text-sm opacity-75`},Fr={key:0,class:`text-sm opacity-75`},Ir={key:1,class:`flex flex-col gap-2`},Lr={class:`min-w-0 flex-1`},Rr={key:2,class:`text-sm opacity-75`},zr=`overflow-wrap-anywhere break-words`,Br=Et(i({__name:`BlogPostChecklistWidget`,props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:[`toggle`],setup(e,{emit:t}){let n=e,r=t,{isDarkTheme:i}=Ye(),a=z(()=>n.items.filter(e=>!e.checked).length),o=z(()=>i.value?`line-through text-neutral-400`:`line-through text-slate-500`),s=z(()=>i.value?`text-xs text-neutral-400`:`text-xs text-slate-500`);return(t,n)=>(N(),G(`section`,jr,[K(`div`,Mr,[K(`div`,null,[K(`h3`,Nr,F(e.title),1),e.items.length?(N(),G(`p`,Pr,F(`${a.value} open van ${e.items.length}`),1)):l(``,!0)])]),e.loading?(N(),G(`div`,Fr,` Laden... `)):e.items.length?(N(),G(`ul`,Ir,[(N(!0),G(J,null,m(e.items,t=>(N(),G(`li`,{key:t.id,class:`flex items-center justify-between gap-3 rounded-2xl surface-panel-glass px-3 py-2`},[K(`div`,Lr,[K(`p`,{class:_([zr,t.checked?o.value:void 0])},F(t.label),3),t.detail?(N(),G(`p`,{key:0,class:_([zr,s.value])},F(t.detail),3)):l(``,!0)]),k(V(tt),{"model-value":t.checked,disabled:e.disabled,pt:{slider:{class:t.checked?`bg-primary-500`:void 0}},"onUpdate:modelValue":e=>r(`toggle`,t.id,e)},null,8,[`model-value`,`disabled`,`pt`,`onUpdate:modelValue`])]))),128))])):(N(),G(`p`,Rr,F(e.emptyLabel),1))]))}}),[[`__scopeId`,`data-v-d81e4393`]]);A(),R();var Vr={class:`contents`},Hr=i({__name:`BlogPostGroceryListWidget`,props:{post:{},title:{}},setup(e){let t=e,n=D(),r=s(),i=Ot(),a=Dt(),o=x(),{sortedProducts:c,getProductLabel:u}=kt(),{products:d,isFetchLoading:f,isMutationLoading:p}=j(i),{productShopOptions:m}=j(a),{getHouseHoldUserOptionsNullable:h}=Xe(),g=B(null),_=B(!1),v=B(!1),y=B(!1),b=B(!1),S=B(!1);function C(e){return!e.isOutOfStock}let w=z(()=>c.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(C(e))-Number(C(t)))),T=z(()=>w.value.map(e=>({id:e.id,label:u(e),detail:e.getSizeLabel(),checked:C(e)}))),E=z(()=>h(g.value?.houseHoldId,`Onbekend`));async function O(e,t){if(!n.firebaseUser)return;let r=d.value.find(t=>t.id===e);if(!r)return;if(t){g.value=r,_.value=!0;return}let a=r.clone();a.isOutOfStock=!0,await i.updateProduct(a,`Product "${r.name}" is niet meer op voorraad.`)}function ee(){g.value=null,_.value=!1}async function A(){n.firebaseUser&&!v.value&&(v.value=!0,await r.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!y.value&&!f.value&&(y.value=!0,await i.fetchProducts()),n.firebaseUser&&!b.value&&!m.value.length&&(b.value=!0,await a.fetchProductShops()),n.firebaseUser&&!S.value&&!o.publicUsers.length&&(S.value=!0,await o.fetchPublicUsers())}return ge(()=>n.firebaseUser?.uid,async e=>{e?await A():(v.value=!1,y.value=!1,b.value=!1,S.value=!1)},{immediate:!0}),(t,r)=>(N(),G(`div`,Vr,[k(Br,{title:e.title||`Boodschappenlijst`,"empty-label":`Er zijn nog geen producten gekoppeld aan deze blogpost.`,items:T.value,loading:V(f),disabled:!V(n).firebaseUser||V(p),onToggle:O},null,8,[`title`,`items`,`loading`,`disabled`]),g.value?(N(),M(jt,{key:0,"is-open":_.value,mode:`buy-product`,"user-id-options":E.value,"store-options":V(m),"selected-product":g.value,"confirm-loading":V(p),onClose:ee},null,8,[`is-open`,`user-id-options`,`store-options`,`selected-product`,`confirm-loading`])):l(``,!0)]))}});A(),c(),R();var Ur=i({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(N(),G(`div`,{class:_([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit !py-5 md:border-none !rounded-none md:!rounded-primary`])},[k(V(an),null,{default:H(()=>[e.thumb?(N(),G(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:ne({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(N(),M(Ct,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})],2))}});A(),c(),R();var Wr=[`innerHTML`],Gr=i({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=z(()=>ie(t.tableData)),r=z(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=z(()=>n.value.slice(1).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r]??``)}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(N(),M(V(bt),{value:i.value,"pt:root":`w-full max-w-[270px] md:max-w-[50vw] lg:max-w-[60vw]`,"show-headers":r.value.some(e=>typeof e==`string`),"removable-sort":``},{default:H(()=>[(N(!0),G(J,null,m(r.value,(t,n)=>(N(),M(V(yt),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:H(({data:r})=>[K(`span`,{class:_([`min-h-[1.5rem] text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]||`\xA0`},null,10,Wr)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`show-headers`]))}});A(),R();var Kr=i({__name:`BlogPostTasksWidget`,props:{post:{},title:{}},setup(e){let t=e,r=D(),i=s(),a=Mt(),{sortedTasks:o}=Pt(),{tasks:c,isFetchLoading:l,isMutationLoading:u}=j(a),d=B(!1),f=B(!1);function p(e){return e.wasExecutedOnDate(new Date)}let m=z(()=>o.value.filter(e=>e.blogPostIds.includes(t.post.id)).sort((e,t)=>Number(p(e))-Number(p(t)))),h=z(()=>m.value.map(e=>({id:e.id,label:e.name,checked:p(e)})));async function g(e,t){if(!r.firebaseUser)return;let i=c.value.find(t=>t.id===e);if(!i)return;let o=i.clone();if(t){o.executeLog.push(new Nt({executors:[r.firebaseUser.uid]})),await a.updateTask(o,`Taak "${i.name}" uitgevoerd`);return}let s=_e(new Date).getTime(),l=n(new Date).getTime();for(let e=o.executeLog.length-1;e>=0;e--){let t=o.executeLog[e];if(t.date.getTime()>=s&&t.date.getTime()<=l&&t.executors.includes(r.firebaseUser.uid)){o.executeLog.splice(e,1),await a.updateTask(o,`Taak "${i.name}" teruggezet`);break}}}async function _(){r.firebaseUser&&!f.value&&(f.value=!0,await i.fetchHouseHolds(r.firebaseUser.uid)),r.firebaseUser&&!d.value&&!l.value&&(d.value=!0,await a.fetchTasks())}return ge(()=>r.firebaseUser?.uid,async e=>{e?await _():(f.value=!1,d.value=!1)},{immediate:!0}),(t,n)=>(N(),M(Br,{title:e.title||`Taken`,"empty-label":`Er zijn nog geen taken gekoppeld aan deze blogpost.`,items:h.value,loading:V(l),disabled:!V(r).firebaseUser||V(u),onToggle:g},null,8,[`title`,`items`,`loading`,`disabled`]))}});A(),c();var qr={class:`text-2xl font-bold`},Jr=i({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(N(),G(`h2`,qr,F(e.title),1))}});A(),R(),c();var Yr={key:2,class:`w-full flex flex-col gap-1 items-center`},Xr={key:0},Zr={class:`flex w-full flex-col gap-2 py-1 md:py-0`},Qr={key:0,class:`font-bold text-lg md:text-2xl`},$r={key:1,class:`font-bold`},ei={key:1},ti=i({__name:`BlogPostContent`,props:{post:{},block:{},depth:{default:0}},setup(e){let t=e,n=[`border-emerald-500/70 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100`,`border-sky-500/70 bg-sky-500/10 text-sky-900 dark:text-sky-100`,`border-amber-500/70 bg-amber-500/10 text-amber-900 dark:text-amber-100`,`border-rose-500/70 bg-rose-500/10 text-rose-900 dark:text-rose-100`],r=z(()=>n[(t.depth-1)%n.length]),i=z(()=>t.depth>=1),a=z(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),s=z(()=>a.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`),c=z(()=>t.block.isWidget()||t.block.isGroup()?``:t.block.label?.trim()??``);return(t,n)=>{let d=U(`BlogPostContent`,!0);return N(),G(`div`,{class:_([`flex min-w-0 max-w-full flex-col`,{"items-start":e.block.alignment===`left`,"items-center":e.block.alignment===`center`||!e.block.alignment,"items-end":e.block.alignment===`right`}])},[c.value?(N(),M(Dr,{key:0,label:c.value},null,8,[`label`])):l(``,!0),e.block.isBoolean()?(N(),M(V(St),{key:1,modelValue:e.block.value,"onUpdate:modelValue":n[0]||=t=>e.block.value=t,"on-label":`True`,"off-label":`False`,"on-icon":`pi pi-check`,"off-icon":`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(N(),G(`div`,Yr,[k(V(xt),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?l(``,!0):(N(),G(`span`,Xr,F(e.block.value)+`% `,1))])):e.block.isString()?(N(),G(J,{key:3},[e.block.type===`title`?(N(),M(Jr,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(N(),M(Ar,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(N(),M(Gr,{key:2,"table-data":e.block.value,alignment:e.block.alignment},null,8,[`table-data`,`alignment`])):e.block.type===`coverimage`?(N(),M(Ur,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(N(),M(Ur,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):l(``,!0)],64)):e.block.isStringList()?(N(),G(J,{key:4},[e.block.type===`bulletlist`?(N(),M(Tr,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(N(),M(V(an),{key:1},{default:H(()=>[k(V(nr),{value:e.block.value,"num-visible":5,"show-thumbnails":!1,"show-indicators":!0,circular:!0,"auto-play":!0,"transition-interval":2e3},{item:H(e=>[k(Ct,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):l(``,!0)],64)):e.block.isDate()?(N(),G(J,{key:5},[e.block.type===`date`?(N(),G(J,{key:0},[u(F(e.block.value?V(L)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(N(),G(J,{key:1},[e.block.value?(N(),M(Tt,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):l(``,!0)],64)):e.block.type===`timer`?(N(),G(J,{key:2},[e.block.value?(N(),M(Tt,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):l(``,!0)],64)):l(``,!0)],64)):e.block.isButton()?(N(),M(Y,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,[`label`,`href`,`severity`])):e.block.isWidget()?(N(),G(J,{key:7},[e.block.type===`tasks`?(N(),M(Kr,{key:0,post:e.post,title:e.block.label},null,8,[`post`,`title`])):e.block.type===`grocerylist`?(N(),M(Hr,{key:1,post:e.post,title:e.block.label},null,8,[`post`,`title`])):l(``,!0)],64)):e.block.isGroup()?(N(),M(V(gt),{key:8,class:_([`surface-panel-glass self-stretch w-full max-w-full overflow-hidden rounded-lg md:rounded-xl`,i.value?[`border-s-4`,r.value]:void 0]),onTabOpen:V(o)},{default:H(()=>[k(V(mt),{value:`0`,disabled:!e.block.value.length},{default:H(()=>[k(V(ht),{class:_([`bg-transparent !border-none px-0`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:H(()=>[K(`div`,Zr,[e.block.label||a.value?(N(),G(J,{key:0},[e.block.label||a.value?(N(),G(`p`,Qr,F(e.block.label||e.block.value[0].value),1)):l(``,!0),s.value?(N(),G(`p`,$r,F(e.block.value[1].value),1)):l(``,!0)],64)):(N(),G(`p`,ei,` Klik om te openen `))])]),_:1},8,[`class`,`pt`]),k(V(pt),{pt:{content:{class:`!px-0 !py-0 md:!py-3 md:!px-4 flex flex-col gap-4 md:gap-8`}}},{default:H(()=>[(N(!0),G(J,null,m(e.block.value.slice(s.value?2:+!!a.value),t=>(N(),M(d,{key:t.id,post:e.post,block:t,depth:e.depth+1},null,8,[`post`,`block`,`depth`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`class`,`onTabOpen`])):l(``,!0)],2)}}});A();var ni={class:`flex flex-wrap justify-end h-fit gap-3`},ri=i({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(N(),G(`div`,ni,[k(Ft,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),k(X,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}});A(),R(),c();var ii={class:`p-4 md:p-8 lg:p-10`},ai={class:`flex justify-between gap-3`},oi={class:`flex flex-col`},si={class:`text-2xl font-bold mb-2`},ci={key:0,class:`flex flex-wrap gap-2 mb-2`},li={class:`surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap`},ui={class:`flex justify-between h-fit mt-2 gap-2`},di={class:`flex flex-wrap gap-3`},fi={class:`flex flex-col gap-5 md:gap-10`},pi=i({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=Ee(),r=D(),i=x(),a=ye(),o=Q(),{publicUsers:s}=j(i),{firebaseUser:c,isOwner:u}=j(r),d=B(!1);n.currentRoute.value.name!==P.BLOG&&en(t.post);let f=z(()=>t.post.allowedUserIds?.length?s.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),p=z(()=>{let e=L(t.post.date);return t.post.dateUpdated?e+` - aangepast ${L(t.post.dateUpdated)}`:e}),h=z(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),g=z(()=>[`surface-panel !rounded-primary overflow-hidden`]),v=z(()=>`surface-panel-glass h-fit !p-0 !px-4 !py-1`),y=z(()=>`surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] mt-4 md:mt-5 p-4 md:p-5 flex flex-col gap-3`),b=()=>{o.openWith(t.post)},S=()=>{d.value=!0},C=async()=>{await a.deleteBlogPost(t.post.id)&&(d.value=!1)},w=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${ae.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),q.success(`Link gekopieerd!`)};return(t,n)=>{let r=U(`RouterLink`);return N(),G(J,null,[k(V(rt),{id:e.post.id,class:_(g.value)},{content:H(()=>[K(`div`,ii,[K(`div`,ai,[K(`div`,oi,[k(r,{to:{name:V(P).BLOG_DETAILS,params:{postId:e.post.id}},class:`!no-underline hover:!underline`},{default:H(()=>[K(`h2`,si,F(e.post.title),1)]),_:1},8,[`to`]),h.value.length?(N(),G(`div`,ci,[(N(!0),G(J,null,m(h.value,e=>(N(),M(V(wt),{key:`${e.value}-${e.icon??``}`,class:`h-fit p-2`,value:e.value,severity:e.severity,rounded:e.rounded!==!1,icon:e.icon,pt:e.pt},null,8,[`value`,`severity`,`rounded`,`icon`,`pt`]))),128))])):l(``,!0),K(`p`,li,F(p.value),1)]),k(Y,{class:`h-fit`,severity:`secondary`,icon:`pi pi-copy`,onClick:w})]),K(`div`,ui,[K(`div`,di,[(N(!0),G(J,null,m(f.value,e=>(N(),M(V(We),{key:e.id,class:_(v.value),icon:`pi pi-user`,label:e.id===V(c)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`class`,`label`]))),128))]),V(u)?(N(),G(`div`,{key:0,class:_([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[k(ri,{onEditClicked:b,onDeleteClicked:S})],2)):l(``,!0)]),K(`div`,{class:_(y.value)},[K(`div`,fi,[(N(!0),G(J,null,m(e.post.content,t=>(N(),M(ti,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))])],2),k($t,{post:e.post},null,8,[`post`])])]),_:1},8,[`id`,`class`]),k(ut,{"is-open":d.value,"onUpdate:isOpen":n[0]||=e=>d.value=e,title:`Verwijder bericht`,"entity-label":`het bericht '${e.post.title}'`,onConfirm:C},null,8,[`is-open`,`entity-label`])],64)}}});A(),c(),R();var mi=e(It(),1),hi={class:`block text-sm font-bold mb-2`},gi={class:`background-gray-dark rounded-2xl`},_i={class:`grid grid-cols-6 items-center`},vi=i({__name:`ImageSliderField`,props:v({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=le(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(N(),G(`div`,null,[K(`p`,hi,F(e.label),1),K(`div`,gi,[k(V(mi.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,"item-key":`index`,handle:`.drag-handle`},{item:H(({element:t,index:i})=>[K(`div`,_i,[a[1]||=K(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),k(Lt,{id:`${e.name}.${i}`,class:`col-span-4`,name:`${e.name}.${i}`,"model-value":t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`model-value`,`blog-post`,`onUpdate:modelValue`]),k(X,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),yi=De.extend({name:`editor`,style:`
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
`,classes:{root:function(e){return[`p-editor`,{"p-invalid":e.instance.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}});A(),c();var bi={name:`BaseEditor`,extends:Ge,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:yi,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},xi(e)}function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ci(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Si(Object(n),!0).forEach(function(t){wi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function wi(e,t,n){return(t=Ti(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ti(e){var t=Ei(e,`string`);return xi(t)==`symbol`?t:t+``}function Ei(e,t){if(xi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(xi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Di=function(){try{return window.Quill}catch{return null}}(),Oi={name:`Editor`,extends:bi,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:Ci({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};Di?(this.quill=new Di(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):d(()=>import(`./c-quill.js`).then(function(n){n&&ee(e.$refs.editorElement)&&(e.quill=n.default?new n.default(e.$refs.editorElement,t):new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill){if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)}},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function ki(e,t,n,r,i,a){return N(),G(`div`,w({class:e.cx(`root`)},e.ptmi(`root`)),[K(`div`,w({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[b(e.$slots,`toolbar`,{},function(){return[K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`select`,w({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[K(`option`,w({value:`1`},e.ptm(`option`)),`Heading`,16),K(`option`,w({value:`2`},e.ptm(`option`)),`Subheading`,16),K(`option`,w({value:`0`},e.ptm(`option`)),`Normal`,16)],16),K(`select`,w({class:`ql-font`},e.ptm(`font`)),[K(`option`,C(E(e.ptm(`option`))),null,16),K(`option`,w({value:`serif`},e.ptm(`option`)),null,16),K(`option`,w({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`button`,w({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),K(`button`,w({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),K(`button`,w({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`select`,w({class:`ql-color`},e.ptm(`color`)),null,16),K(`select`,w({class:`ql-background`},e.ptm(`background`)),null,16)],16),K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`button`,w({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),K(`button`,w({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),K(`select`,w({class:`ql-align`},e.ptm(`select`)),[K(`option`,w({defaultValue:``},e.ptm(`option`)),null,16),K(`option`,w({value:`center`},e.ptm(`option`)),null,16),K(`option`,w({value:`right`},e.ptm(`option`)),null,16),K(`option`,w({value:`justify`},e.ptm(`option`)),null,16)],16)],16),K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`button`,w({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),K(`button`,w({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),K(`button`,w({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),K(`span`,w({class:`ql-formats`},e.ptm(`formats`)),[K(`button`,w({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),K(`div`,w({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}Oi.render=ki,A(),c(),R();var Ai=[`for`],ji=i({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=z({get:()=>n.modelValue||``,set:e=>{s(`update:modelValue`,e)}}),i=z(()=>n.label?n.label+(n.required?` *`:``):void 0),a=z(()=>n.name+(n.id?`.${n.id}`:``)),o=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},s=t;return(t,n)=>(N(),G(`div`,null,[e.label?(N(),G(`label`,w({key:0,class:`block text-sm font-bold mb-2`,for:a.value},e.labelProps),F(i.value),17,Ai)):l(``,!0),k(V(Oi),w({id:a.value,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,placeholder:e.placeholder},e.editorProps,{onLoad:o}),null,16,[`id`,`modelValue`,`placeholder`]),e.error?(N(),M(qe,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):l(``,!0)]))}});A(),R();var Mi={class:`p-4 surface-panel-glass rounded-2xl`},Ni={key:0},Pi={class:`flex gap-3`},Fi=i({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=B(``),a=z({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}}),o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(N(),G(`div`,Mi,[a.value.length?(N(),M(V(mi.default),{key:1,modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,"item-key":`index`,handle:`.drag-handle`},{item:H(({element:t,index:r})=>[K(`div`,Pi,[n[1]||=K(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),k(Z,{id:`${e.name}.${r}`,class:`w-full`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])):(N(),G(`p`,Ni,` Er zijn nog geen items toegevoegd. `))]))}});A(),c();var Ii=[`for`],Li={class:`table w-full`},Ri={class:`table-header-group`},zi={key:0,class:`table-row`},Bi={key:0,class:`table-cell table-action-cell`},Vi={class:`table-row-group`},Hi={key:0,class:`table-cell table-action-cell`},Ui={key:1,class:`table-cell`},Wi={key:2,class:`table-cell`},Gi={class:`table-footer-group`},Ki={class:`table-row`},qi={key:0,class:`table-cell table-action-cell`},Ji=Et(i({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,i=Rt(zt).greaterOrEqual(`md`),a=z({get:()=>ie(n.modelValue),set:e=>{r(`update:modelValue`,f(e))}}),o=z(()=>n.name+(n.id?`.`+n.id:``)),s=z(()=>i.value&&a.value[0]?.length<2),c=(e,t,n)=>{let i=[...a.value];i[e][t]=n,r(`update:modelValue`,f(i))},u=()=>{let e=a.value;if(e.length){let t=e[0];t.length?a.value=[...e,t.map(()=>``)]:a.value=[...e,[``]]}else a.value=[[``]]},d=e=>{let t=a.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),a.value=[...t]}},p=e=>{a.value.splice(e,1),a.value=a.value},h=()=>{a.value=a.value.map(e=>[...e,``])},g=e=>{let t=a.value;for(let n of t)n.splice(e,0,``);a.value=[...t]},_=e=>{a.value=a.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(N(),G(`div`,null,[e.label?(N(),G(`label`,w({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),F(e.label),17,Ii)):l(``,!0),K(`div`,Li,[K(`div`,Ri,[a.value.length&&a.value[0].length>1?(N(),G(`div`,zi,[a.value.length>1?(N(),G(`div`,Bi)):l(``,!0),(N(!0),G(J,null,m(a.value[0],(e,t)=>(N(),G(`div`,{key:t,class:`table-cell`},[a.value.length&&a.value[0].length?(N(),M(Y,{key:0,class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Kolom verwijderen`:void 0,onClick:e=>_(t)},null,8,[`label`,`onClick`])):l(``,!0)]))),128))])):l(``,!0)]),K(`div`,Vi,[(N(!0),G(J,null,m(a.value,(t,n)=>(N(),G(`div`,{key:n,class:`table-row`},[a.value.length>1?(N(),G(`div`,Hi,[k(Y,{class:`md:text-start text-nowrap`,severity:`danger`,icon:`pi pi-times`,outlined:``,label:s.value?`Rij verwijderen`:void 0,onClick:e=>p(n)},null,8,[`label`,`onClick`])])):l(``,!0),(N(!0),G(J,null,m(t,(t,r)=>(N(),M(Z,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,"model-value":t,placeholder:n===0||r===0?`Koptekst`:`Cel`,"onUpdate:modelValue":e=>c(n,r,e.toString())},null,8,[`name`,`model-value`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(N(),G(`div`,Ui,[k(Y,{class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:s.value?`Kolom toevoegen`:void 0,onClick:h},null,8,[`label`])])):(N(),G(`div`,Wi,[k(Y,{class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Rij invoegen`:void 0,onClick:e=>d(n)},null,8,[`label`,`onClick`])]))]))),128))]),K(`div`,Gi,[K(`div`,Ki,[a.value.length>1?(N(),G(`div`,qi)):l(``,!0),(N(!0),G(J,null,m(a.value[0],(e,t)=>(N(),G(`div`,{key:t,class:`table-cell`},[t===0?(N(),M(Y,{key:0,class:`md:text-start text-nowrap !text-white w-full`,severity:`success`,icon:`pi pi-plus`,outlined:``,label:s.value?`Rij toevoegen`:void 0,onClick:u},null,8,[`label`])):(N(),M(Y,{key:1,class:`md:text-start text-nowrap w-full`,severity:`secondary`,icon:`pi pi-arrow-up-left`,outlined:``,label:s.value?`Kolom invoegen`:void 0,onClick:e=>g(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),[[`__scopeId`,`data-v-8f4f819f`]]);A(),R(),c();var Yi={class:`flex flex-col gap-4`},Xi={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},Zi={key:5,class:`flex flex-col gap-4 md:flex-row`},Qi={key:6,class:`rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80`},$i=i({__name:`BlogPostContentBlockEditor`,props:{content:{},id:{}},setup(e){let t=e,n=Q(),{blogPostOriginal:r}=j(n),i=()=>{t.content.isStringList()&&t.content.value.push(``)};return(t,n)=>(N(),G(`div`,Yi,[k(Z,{modelValue:e.content.label,"onUpdate:modelValue":n[0]||=t=>e.content.label=t,name:`${e.content.id}-label`,label:`Label`},null,8,[`modelValue`,`name`]),e.content.isBoolean()?(N(),M(nt,{key:0,modelValue:e.content.value,"onUpdate:modelValue":n[1]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.isNumber()?(N(),G(`div`,Xi,[k(V(_r),{modelValue:e.content.value,"onUpdate:modelValue":n[2]||=t=>e.content.value=t,class:`w-full`,name:e.content.id},null,8,[`modelValue`,`name`]),K(`p`,null,F(e.content.value)+`%`,1)])):e.content.isString()?(N(),G(J,{key:2},[e.content.type===`title`?(N(),M(Z,{key:0,modelValue:e.content.value,"onUpdate:modelValue":n[3]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.type===`richtext`?(N(),M(ji,{key:1,modelValue:e.content.value,"onUpdate:modelValue":n[4]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.type===`table`?(N(),M(Ji,{key:2,modelValue:e.content.value,"onUpdate:modelValue":n[5]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.type===`coverimage`||e.content.type===`image`?(N(),M(Lt,{key:3,modelValue:e.content.value,"onUpdate:modelValue":n[6]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`,"blog-post":V(r)},null,8,[`modelValue`,`name`,`blog-post`])):l(``,!0)],64)):e.content.isStringList()?(N(),G(J,{key:3},[e.content.type===`bulletlist`?(N(),M(Fi,{key:0,modelValue:e.content.value,"onUpdate:modelValue":n[7]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.type===`imageslider`?(N(),M(vi,{key:1,modelValue:e.content.value,"onUpdate:modelValue":n[8]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`,"blog-post":V(r)},null,8,[`modelValue`,`name`,`blog-post`])):l(``,!0),k(At,{class:`w-fit`,label:`Item toevoegen`,onClick:i})],64)):e.content.isDate()?(N(),M(_t,{key:4,modelValue:e.content.value,"onUpdate:modelValue":n[9]||=t=>e.content.value=t,name:e.content.id,label:`Waarde`},null,8,[`modelValue`,`name`])):e.content.isButton()?(N(),G(`div`,Zi,[k(Z,{modelValue:e.content.value.title,"onUpdate:modelValue":n[10]||=t=>e.content.value.title=t,class:`w-full`,name:`${e.content.id}-title`,label:`Knop titel`},null,8,[`modelValue`,`name`]),k(Z,{modelValue:e.content.value.url,"onUpdate:modelValue":n[11]||=t=>e.content.value.url=t,class:`w-full`,name:`${e.content.id}-url`,label:`Knop link`},null,8,[`modelValue`,`name`]),k(Je,{modelValue:e.content.value.severity,"onUpdate:modelValue":n[12]||=t=>e.content.value.severity=t,class:`w-full`,name:`${e.content.id}-severity`,label:`Knop kleur`,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`help`,label:`Help`}]},null,8,[`modelValue`,`name`])])):e.content.isWidget()?(N(),G(`div`,Qi,` Deze widget toont automatisch de gekoppelde `+F(e.content.getLabel().toLowerCase())+` van deze blogpost. Het label overschrijft de standaardtitel in de widget. `,1)):l(``,!0),k(Je,{name:`${e.content.id}-alignment`,label:`Uitlijning`,"model-value":e.content.alignment??`center`,options:V(ue),"onUpdate:modelValue":n[13]||=t=>e.content.alignment=t},null,8,[`name`,`model-value`,`options`])]))}});A();var ea=i({__name:`BlogPostContentBlockMutationDialog`,props:{isOpen:{type:Boolean},content:{},id:{}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.content?(N(),M(et,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:`Waarde, uitlijning en optionele label van dit contentblok.`,"confirm-text":`Sluiten`,"hide-cancel-button":``,onConfirm:r[0]||=e=>n(`close`),onCancel:r[1]||=e=>n(`close`)},{default:H(()=>[k($i,{id:e.id,content:e.content},null,8,[`id`,`content`])]),_:1},8,[`is-open`,`title`])):l(``,!0)}});A(),c(),Ne(),R();var ta={class:`w-full flex flex-col gap-10`},na={key:0,class:`pointer-events-none absolute inset-0 flex items-center justify-center rounded-primary border border-dashed border-surface-300 px-4 py-6 text-center text-sm surface-text-muted`},ra={class:`flex w-full flex-col gap-3 px-3 py-2 sm:flex-row sm:items-center sm:justify-between`},ia={class:`flex min-w-0 gap-3 sm:gap-5`},aa={class:`flex min-w-0 flex-col items-start gap-1`},oa={class:`break-words font-semibold`},sa={class:`surface-text-muted break-words text-sm`},ca={key:1,class:`surface-panel-soft rounded-primary flex w-full flex-col gap-3 px-3 py-2 sm:flex-row sm:items-center sm:justify-between`},la={class:`flex min-w-0 items-center gap-3 sm:gap-5`},ua={class:`flex min-w-0 flex-col items-start`},da={class:`break-words font-semibold`},fa={class:`surface-text-muted break-words text-sm`},pa={class:`flex w-full items-center justify-end gap-1 sm:w-auto`},ma={class:`flex flex-col md:flex-row gap-3 justify-center`},ha={class:`flex flex-col justify-center items-center gap-3`},ga=`blog-post-content-block-clipboard`,_a=i({__name:`BlogPostContentBlocksDialog`,props:v({id:{},depth:{default:0}},{modelValue:{required:!0},modelModifiers:{}}),emits:v([`delete`],[`update:modelValue`]),setup(e){let t=e,n=le(e,`modelValue`),r=B(`title`),i=[`border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100`,`border-sky-500/50 bg-sky-500/10 text-sky-900 dark:text-sky-100`,`border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-100`,`border-rose-500/50 bg-rose-500/10 text-rose-900 dark:text-rose-100`],a=z(()=>i[(t.depth-1)%i.length]),s=z(()=>t.depth>=1),c=B(null),u=B(!1),d=B(x()),f=()=>{let e=ze.createInstance(Te(),r.value,r.value,`center`);n.value.push(e),c.value=e.id,u.value=!1},p=e=>{let t=n.value.findIndex(t=>t.id===e);n.value.splice(t,1)},m=z(()=>n.value.find(e=>e.id===c.value)??null),h={name:`blog-post-content`,pull:!0,put:!0},g=e=>{c.value=e},v=()=>{c.value=null},y=()=>{u.value=!0},b=()=>{u.value=!1};function x(){return!!localStorage.getItem(ga)}function S(e){return e instanceof Date?{__type:`date`,value:e.toISOString()}:Array.isArray(e)?e.map(S):e&&typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,S(t)])):e}function C(e){return Array.isArray(e)?e.map(C):e&&typeof e==`object`?`__type`in e&&e.__type===`date`&&`value`in e&&typeof e.value==`string`?new Date(e.value):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,C(t)])):e}function w(e){return e.id=Te(),e.isGroup()&&e.value.forEach(w),e}function T(e){let t={version:1,block:S(e.serialize())};localStorage.setItem(ga,JSON.stringify(t)),d.value=!0,q.success(`Content '${O(e)}' gekopieerd`)}function E(){let e=localStorage.getItem(ga);if(!e)d.value=!1,q.warning(`Er staat nog geen contentblok klaar om te plakken`);else try{let t=JSON.parse(e);if(t.version!==1||!t.block)throw Error(`Invalid content clipboard payload`);let r=C(t.block),i=w(ze.deserialize(r));n.value.push(i),d.value=!0,q.success(`Content '${O(i)}' geplakt`)}catch{d.value=!1,localStorage.removeItem(ga),q.error(`Het gekopieerde contentblok kon niet worden geplakt`)}}let D=e=>{let t=e.replace(/<[^>]+>/g,` `).replace(/\s+/g,` `).trim();return t.length>80?`${t.slice(0,77)}...`:t},O=e=>e.type===`tasks`?e.label||`Taken`:e.type===`grocerylist`?e.label||`Boodschappenlijst`:e.label||`(geen naam)`,ee=e=>e.isGroup()?e.value.length?e.value.length===1?`1 onderdeel`:`${e.value.length} onderdelen`:`Lege groep`:e.isBoolean()?e.value?`Ingeschakeld`:`Uitgeschakeld`:e.isNumber()?`${e.value}%`:e.isString()?e.type===`table`||e.type===`richtext`?`${e.value.length} tekens`:e.type===`coverimage`||e.type===`image`?e.value?`Afbeelding geselecteerd`:`Nog geen afbeelding geselecteerd`:e.value?D(e.value):`Nog geen inhoud ingevuld`:e.isStringList()?e.value.length?`${e.value.length} items`:`Nog geen items toegevoegd`:e.isDate()?e.value?L(new Date(e.value)):`Nog geen datum geselecteerd`:e.isButton()?e.value.title||e.value.url||`Nog geen knop ingevuld`:e.isWidget()?`Widget`:e.getLabel();return(t,i)=>{let c=U(`BlogPostContentBlocksDialog`,!0);return N(),G(`div`,ta,[K(`div`,{class:_([`relative`,{"min-h-24":!n.value.length}])},[n.value.length?l(``,!0):(N(),G(`div`,na,` Sleep content hierheen om deze groep te vullen. `)),k(V(mi.default),{ref:`draggableRef`,modelValue:n.value,"onUpdate:modelValue":i[1]||=e=>n.value=e,class:_([`relative flex flex-col gap-10`,{"min-h-24":!n.value.length}]),"item-key":e=>e.id,group:h,handle:`.drag-handle`},{item:H(({element:t})=>[t.isGroup()?(N(),M(V(gt),{key:0,class:_([`w-full overflow-hidden rounded-primary`,s.value?[`border-s-4`,a.value]:void 0]),onTabOpen:V(o)},{default:H(()=>[k(V(mt),{value:`0`},{default:H(()=>[k(V(ht),{class:`drag-handle`},{default:H(()=>[K(`div`,ra,[K(`div`,ia,[i[3]||=K(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),K(`div`,aa,[K(`p`,oa,F(O(t)),1),K(`p`,sa,F(t.getLabel())+` - `+F(ee(t).toLowerCase()),1)])]),K(`div`,{class:`flex w-full justify-end gap-1 sm:mr-3 sm:w-auto`,onClick:i[0]||=Be(()=>{},[`stop`])},[k(Y,{severity:`secondary`,icon:`pi pi-copy`,onClick:e=>T(t)},null,8,[`onClick`]),k(Ft,{outlined:``,onClick:e=>g(t.id)},null,8,[`onClick`]),k(X,{onClick:e=>p(t.id)},null,8,[`onClick`])])])]),_:2},1024),k(V(pt),null,{default:H(()=>[k(c,{id:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,depth:e.depth+1,onDelete:e=>p(t.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`depth`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`class`,`onTabOpen`])):(N(),G(`div`,ca,[K(`div`,la,[i[4]||=K(`i`,{class:`drag-handle pi pi-arrows-v hover:cursor-pointer`},null,-1),K(`div`,ua,[K(`p`,da,F(O(t)),1),K(`p`,fa,F(t.getLabel())+` - `+F(ee(t).toLowerCase()),1)])]),K(`div`,pa,[k(Y,{severity:`secondary`,icon:`pi pi-copy`,onClick:e=>T(t)},null,8,[`onClick`]),k(Ft,{outlined:``,onClick:e=>g(t.id)},null,8,[`onClick`]),k(X,{onClick:e=>p(t.id)},null,8,[`onClick`])])]))]),_:1},8,[`modelValue`,`class`,`item-key`])],2),k(ea,{id:e.id,"is-open":!!m.value,content:m.value,onClose:v},null,8,[`id`,`is-open`,`content`]),K(`div`,ma,[k(At,{class:`w-full md:w-1/2`,label:`Voeg content toe`,outlined:``,onClick:y}),k(Y,{class:`w-full md:w-1/2`,label:`Plak gekopieerde content`,severity:`secondary`,outlined:``,icon:`pi pi-clone`,disabled:!d.value,onClick:E},null,8,[`disabled`])]),k(et,{"is-open":u.value,title:`Content toevoegen`,description:`Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.`,"confirm-text":`Toevoegen`,onCancel:b,onConfirm:f},{default:H(()=>[K(`div`,ha,[k(Je,{modelValue:r.value,"onUpdate:modelValue":i[2]||=e=>r.value=e,class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,options:Object.entries(V(Ue)).map(([e,t])=>({value:e,label:t}))},null,8,[`modelValue`,`name`,`options`])])]),_:1},8,[`is-open`])])}}});A(),R();var va=i({__name:`BlogPostContentDialog`,emits:[`update:selected`],setup(e){let t=Q(),{blogPostMutation:n}=j(t),r=z(()=>({title:{required:st,minLength:ct(3),maxLength:ot(50)}})),i=at(r,n);return(e,t)=>(N(),G(J,null,[k(Z,{modelValue:V(n).title,"onUpdate:modelValue":t[0]||=e=>V(n).title=e,class:`w-full`,name:`title`,label:`Titel`,placeholder:`Geweldige Post`,error:V(i).title.$error?V(lt)(V(i).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),k(_a,{modelValue:V(n).content,"onUpdate:modelValue":t[1]||=e=>V(n).content=e,class:`mt-10`},null,8,[`modelValue`])],64))}});A(),R();var ya={class:`flex flex-col gap-3 items-center`},ba=i({__name:`BlogPostSettingsDialog`,setup(e){let t=x(),n=Q(),{blogPostMutation:r}=j(n),{mappedUsers:i}=Bt(),a=z({get(){return!!r.value.datePinned},set(e){r.value.datePinned=e?new Date:null}}),o=B([]),s=it.withMessage(`Invalid user ID's`,e=>!e.length||e.length===o.value.length),c=z(()=>({allowedUserIds:{validAllowedUserIds:s}})),l=at(c,r);return ge(()=>r.value.allowedUserIds,async e=>{o.value=await t.allowedPublicUsers(e)},{immediate:!0}),(e,t)=>(N(),G(`div`,ya,[k(Je,{modelValue:V(r).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>V(r).allowedUserIds=e,class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,error:V(l).allowedUserIds.$error?V(lt)(V(l).allowedUserIds):``,options:V(i),multiple:``},null,8,[`modelValue`,`error`,`options`]),k(nt,{modelValue:a.value,"onUpdate:modelValue":t[1]||=e=>a.value=e,class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`},null,8,[`modelValue`]),k(nt,{modelValue:V(r).locked,"onUpdate:modelValue":t[2]||=e=>V(r).locked=e,class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`},null,8,[`modelValue`]),k(nt,{modelValue:V(r).archived,"onUpdate:modelValue":t[3]||=e=>V(r).archived=e,class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`},null,8,[`modelValue`])]))}});A(),R();var xa={class:`mb-4 flex justify-end`},Sa=i({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t,r=ye(),i=Me(),a=Q(),{isBlogPostsMutationLoading:o}=j(r),{isOpen:s,blogPostOriginal:c,blogPostMutation:l,hasChanges:u}=j(a),d=at(),f=B(!1),p=z(()=>!!c.value?.allowedUserIds?.length&&!l.value.allowedUserIds?.length||!c.value?.allowedUserIds?.length&&!!l.value.allowedUserIds?.length),m=z(()=>T(c.value)),h=async()=>{await d.value.$validate()&&(c.value?p.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(c.value,l.value.allowedUserIds.length?`private`:`public`)&&(a.close(),q.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,l.value.id))):await r.updateBlogPost(l.value,m.value)&&(q.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,l.value.id)):await r.createBlogPost(l.value)&&(a.close(),n(`scroll-to-updated`,l.value.id)))},g=async()=>{await i.deleteFilesOfBlogPost(l.value,c.value??void 0),a.close()},_=()=>{f.value=!1};return(e,t)=>(N(),G(J,null,[k(et,{"is-open":V(s),title:V(c)?`Bericht bijwerken`:`Bericht maken`,description:``,"confirm-text":V(c)?`Bijwerken`:`Maken`,"confirm-loading":V(o),"confirm-props":{disabled:!V(u)},onConfirm:h,onCancel:g},{default:H(()=>[K(`div`,xa,[k(Y,{severity:`secondary`,icon:`pi pi-cog`,label:`Instellingen`,onClick:t[0]||=e=>f.value=!0})]),k(va)]),_:1},8,[`is-open`,`title`,`confirm-text`,`confirm-loading`,`confirm-props`]),k(et,{"is-open":f.value,title:`Berichtinstellingen`,description:`Pas zichtbaarheid en andere berichtinstellingen aan.`,"cancel-text":`Sluiten`,onCancel:_},{default:H(()=>[k(ba)]),_:1},8,[`is-open`])],64))}});export{Q as a,ti as i,pi as n,tn as o,ri as r,Sa as t};