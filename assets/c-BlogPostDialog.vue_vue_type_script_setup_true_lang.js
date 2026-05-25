const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill.js","./c-vuedraggable.umd.js","../bundle.js"])))=>i.map(i=>d[i]);
import{a as we,a2 as xe,s as H,l as mt,aa as pt,ab as Ut,ac as Ye,ad as Qe,ae as _,af as bt,j as ee,D as U,ag as jt,S as Ie,ah as zt,Z as Nt,d as j,u as Rt,E as Se,q as Q,b as a,g as v,f as c,n as K,w as V,e as m,R as X,c as u,y as q,t as A,K as ne,i as w,F as D,p as ft,h,a6 as Ht,r as M,_ as F,k as Kt,ai as Z,aj as Mt,ak as Xe,al as Ft,am as $e,an as de,T as ht,ao as f,ap as Gt,aq as je,ar as Wt,as as Yt,at as Ve,au as Qt,av as vt,aw as Xt,ax as Jt,ay as Zt,az as W,aA as he,aB as ze,aC as Je,aD as Pe,aE as G,aF as _t,aG as gt,aH as en,aI as tn,aJ as nn,aK as ln,A as qt,aL as on,aM as yt,aN as an,aO as rn,B as De,aP as Ne,m as sn,a7 as dn,a8 as J,a5 as un,V as kt,W as Te,aQ as cn,aR as mn,aS as pn,aT as bn,aU as Ze,aV as fn,aW as hn,aX as _e,aY as et,aZ as vn}from"../bundle.js";import{_ as wt}from"./c-DeleteDialog.vue_vue_type_script_setup_true_lang.js";import{_ as Y}from"./c-TextField.vue_vue_type_script_setup_true_lang.js";import{u as Re,s as gn,b as qn,c as fe}from"./c-Page.vue_vue_type_script_setup_true_lang.js";import{u as Ce,r as xt,f as He,m as yn,a as kn,d as wn}from"./c-index2.js";import{s as ve,_ as le,b as xn,a as ge}from"./c-index.js";import{s as In}from"./c-index3.js";import{_ as tt}from"./c-Countdown.vue_vue_type_script_setup_true_lang.js";import{_ as It}from"./c-Image.vue_vue_type_script_setup_true_lang.js";import{c as qe,a as ye,b as ke,s as Ke}from"./c-index4.js";import{F as Sn,u as nt,b as $n,_ as Me}from"./c-Dialog.vue_vue_type_script_setup_true_lang.js";import{s as St,_ as Pn}from"./c-DateField.vue_vue_type_script_setup_true_lang.js";import{s as $t}from"./c-index5.js";import{s as Cn}from"./c-index6.js";import{u as Vn,a as Ln,E as Bn,s as Dn}from"./c-useTaskHelper.js";import{s as Tn}from"./c-index7.js";import{u as On,a as An,b as En,_ as Un}from"./c-BuyLogMutationDialog.vue_vue_type_script_setup_true_lang.js";import{s as jn,a as zn}from"./c-index8.js";import{_ as Oe}from"./c-EditButton.vue_vue_type_script_setup_true_lang.js";import{_ as Pt}from"./c-CreateButton.vue_vue_type_script_setup_true_lang.js";import{D as Fe}from"./c-vuedraggable.umd.js";import{_ as Ct}from"./c-FileUpload.vue_vue_type_script_setup_true_lang.js";import{u as Nn,b as Rn}from"./c-index9.js";import{u as Hn}from"./c-useUsers.js";const Kn=e=>{const t=we(),n=xe(),{previousCurrentBlogPost:l,isBlogPostDatabaseActionActive:r}=H(t);let i=[];const o=U(),d=s=>{s.metadata.hasPendingWrites||r.value||(clearTimeout(o.value),o.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(l.value,!0)},200))};mt(async()=>{n.unread=n.unread.filter(z=>z.postId!==e.id);const s=pt(e),b=t.collections.blogPosts(s.isPrivate),g=n.collections.blogReactions(s.isPrivate),x=Ut(b,e.id),B=Ye(b,Qe("id","==",e.id)),T=Ye(g,Qe("post","==",x));i.push(_(B,d)),i.push(_(T,d))}),bt(()=>{clearTimeout(o.value),i.forEach(s=>{s()})})},ka=()=>{const e=we(),t=ee(),n=xe(),{visibleBlogPosts:l,isBlogPostDatabaseActionActive:r}=H(e),{isLoggedIn:i}=H(t);let o=[];const d=U(),s=b=>{b.metadata.hasPendingWrites||r.value||(clearTimeout(d.value),d.value=setTimeout(async()=>{l.value.length&&(await e.fetchBlogPosts({amount:l.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};mt(()=>{n.unread=[],o.push(_(e.collections.blogPosts(!1),s)),o.push(_(n.collections.blogReactions(!1),s)),i.value&&(o.push(_(e.collections.blogPosts(!0),s)),o.push(_(n.collections.blogReactions(!0),s)))}),bt(()=>{clearTimeout(d.value),o.forEach(b=>{b()})})},Le=e=>e?e.clone():new zt,ue=jt("blogPostDialogStore",()=>{const e=U(!1),t=U(null),n=U(Le(null)),l=U(!1),r=()=>{t.value=null,n.value=Le(null),l.value=!1},i=d=>{t.value=d,n.value=Le(d),e.value=!0},o=()=>{e.value=!1,r()};return Ie(()=>n.value,()=>{l.value=!Nt(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:l,$reset:r,openWith:i,close:o}}),Mn={class:"flex justify-between gap-3"},Fn={class:"flex flex-col"},Gn={class:"flex gap-2"},Wn=["src"],Yn=["src"],Qn={class:"flex flex-col"},Xn={class:"text-base mt-1 font-bold mb-2"},Jn={key:1,class:"text-base mt-1 font-bold mb-2"},Zn={class:"!text-[var(--p-text-color)] mt-2"},_n={key:0,class:"flex flex-col gap-2"},lt=j({__name:"BlogReaction",props:{post:{},reaction:{}},emits:["deleteClicked"],setup(e,{emit:t}){const n=e,l=t,r=Rt(),i=ee(),o=Se(),d=xe(),{routeLoading:s,routeLoadingId:b}=H(r),{firebaseUser:g,isLoggedIn:x,isOwner:B}=H(i),{publicUsers:T}=H(o),{isDatabaseDeletionActive:z}=H(d);Re();const E=w(()=>T.value.find(P=>P.id===n.reaction.userId)),y=w(()=>g.value&&n.reaction.userId===g.value.uid||B.value),I=w(()=>"surface-panel p-5 w-full md:w-3/4 xl:w-2/3 !rounded-primary"),O=w(()=>"surface-text-muted text-sm mb-2 xl:whitespace-nowrap");return(P,N)=>{const R=Q("RouterLink");return a(),v(c(ve),{id:e.reaction.id,class:K(I.value)},{content:V(()=>[m("div",Mn,[m("div",Fn,[m("div",Gn,[E.value?.avatar&&c(x)?(a(),v(R,{key:0,to:{name:c(X).USER_DETAILS,params:{userId:e.reaction.userId}}},{default:V(()=>[m("img",{class:K(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":c(s)===c(X).USER_DETAILS&&c(b)===E.value?.id}]),src:E.value.avatar},null,10,Wn)]),_:1},8,["to"])):E.value?.avatar?(a(),u("img",{key:1,class:K(["rounded-full h-12 w-12 aspect-square object-cover",{"animate-spin":c(s)===c(X).USER_DETAILS&&c(b)===E.value?.id}]),src:E.value.avatar},null,10,Yn)):q("",!0),m("div",Qn,[c(x)?(a(),v(R,{key:0,to:{name:c(X).USER_DETAILS,params:{userId:e.reaction.userId}},class:"!no-underline hover:!underline"},{default:V(()=>[m("h3",Xn,A(E.value?.displayName||"Onbekende gebruiker"),1)]),_:1},8,["to"])):(a(),u("h3",Jn,A(E.value?.displayName||"Onbekende gebruiker"),1)),m("p",{class:K(O.value)},A(c(ne)(e.reaction.date)),3)])]),m("p",Zn,A(e.reaction.message),1)]),y.value?(a(),u("div",_n,[y.value&&!e.post.locked?(a(),v(le,{key:0,disabled:c(z),onClick:N[0]||(N[0]=L=>l("deleteClicked",e.reaction))},null,8,["disabled"])):q("",!0)])):q("",!0)])]),_:1},8,["id","class"])}}}),el={class:"grid justify-items-center p-5 gap-5"},tl=j({__name:"BlogReactions",props:{post:{}},setup(e){const t=e,n=ee(),l=xe(),{firebaseUser:r,isLoggedIn:i}=H(n),{isDatabaseCreationActive:o,isDatabaseDeletionActive:d}=H(l);Re();const s=U(!1),b=U(!1),g=U(null),x=Kt({reaction:""}),T=Ce({reaction:{required:xt}},x),z=w(()=>[...t.post.reactions].reverse()),E=w(()=>z.value.filter((S,k)=>k<3)),y=w(()=>z.value.filter((S,k)=>k>=3)),I=w(()=>t.post.locked||!i.value||o.value),O=w(()=>g.value?.message?g.value.message.length>120?`${g.value.message.slice(0,117)}...`:g.value.message:null),P=w(()=>O.value?`Reactie: "${O.value}"`:void 0),N=w(()=>"surface-panel p-5 flex justify-center w-full md:w-3/4 xl:w-2/3 !rounded-primary"),R=w(()=>["!bg-[var(--p-form-field-background)] !text-[var(--p-form-field-color)] rounded-primary !border !border-[var(--p-form-field-border-color)] !placeholder:text-[var(--p-text-muted-color)]",I.value?{"!bg-[var(--p-surface-100)]":!o.value}:"",{"cursor-pointer":!i.value&&!t.post.locked}]),L=async()=>{if(o.value)return;if(!await T.value.$validate()||!r.value){Xe();return}const S=x.reaction;x.reaction="Reactie plaatsen...";const k=await l.createBlogReaction(t.post,new Ft({userId:r.value.uid,postId:t.post.id,message:S}));x.reaction=k?"":S,k&&T.value.$reset(),Xe()};function p(S){g.value=S,b.value=!0}async function C(){if(!g.value)return;await l.deleteBlogReaction(t.post,g.value.id)&&(b.value=!1,g.value=null)}return(S,k)=>(a(),u(D,null,[m("form",{action:"",onSubmit:ft(L,["prevent"])},[m("div",el,[!c(i)||e.post.reactions.filter($=>$.userId===c(r).uid).length<20?(a(),v(c(ve),{key:0,class:K(N.value)},{content:V(()=>[h(Y,{class:"w-5/6 place-self-center",id:e.post.id,inputProps:{class:R.value,disabled:I.value,autocomplete:"off"},name:"reaction",placeholder:e.post.locked?"Gesloten voor reacties":c(i)?"Reageren":"Log in om te reageren",modelValue:x.reaction,"onUpdate:modelValue":k[0]||(k[0]=$=>x.reaction=$),error:c(T).reaction.$error?c(He)(c(T).reaction):"",required:"",onClick:k[1]||(k[1]=()=>!c(i)&&!e.post.locked?c(Ht).push({name:c(X).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error"])]),_:1},8,["class"])):q("",!0),(a(!0),u(D,null,M(E.value,$=>(a(),v(lt,{post:e.post,reaction:$,onDeleteClicked:p},null,8,["post","reaction"]))),256)),(a(!0),u(D,null,M(y.value,$=>Z((a(),v(lt,{post:e.post,reaction:$,onDeleteClicked:p},null,8,["post","reaction"])),[[Mt,s.value]])),256)),e.post.reactions.length>3?(a(),v(F,{key:1,outlined:"",icon:s.value?"pi pi-angle-up":"pi pi-angle-down",label:s.value?"Verberg oudere reacties":"Bekijk oudere reacties",onClick:k[2]||(k[2]=$=>s.value=!s.value)},null,8,["icon","label"])):q("",!0)])],32),h(wt,{"is-open":b.value,"onUpdate:isOpen":k[3]||(k[3]=$=>b.value=$),title:"Reactie verwijderen","entity-label":"deze reactie",details:P.value,"confirm-loading":c(d),onConfirm:C,onCancel:k[4]||(k[4]=$=>g.value=null)},null,8,["is-open","details","confirm-loading"])],64))}});var nl=$e.extend({name:"deferredcontent"}),Ge={name:"DeferredContent",extends:de,inheritAttrs:!1,emits:["load"],style:nl,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,l=n.clientHeight;return l>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function ll(e,t,n,l,r,i){return a(),u("div",f({ref:"container"},e.ptmi("root")),[r.loaded?ht(e.$slots,"default",{key:0}):q("",!0)],16)}Ge.render=ll;var il=`
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
`,ol={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter-active",root:function(t){var n=t.instance,l=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},l,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,l=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(l)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,l=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===l,"p-galleria-thumbnail-item-active":n.isItemActive(l),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===l}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},al=$e.extend({name:"galleria",style:il,classes:ol}),rl={name:"BaseGalleria",extends:de,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:al,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function te(e){return cl(e)||ul(e)||dl(e)||sl()}function sl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dl(e,t){if(e){if(typeof e=="string")return Ae(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ae(e,t):void 0}}function ul(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cl(e){if(Array.isArray(e))return Ae(e)}function Ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Vt={name:"GalleriaItem",hostName:"Galleria",extends:de,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=te(W(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=te(W(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=te(W(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return ze(i,"data-p-active")===!0}),l=he(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=te(W(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=he(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=te(W(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeftIcon:St,ChevronRightIcon:$t},directives:{ripple:je}},ml=["disabled"],pl=["id","aria-label","aria-roledescription"],bl=["disabled"],fl=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],hl=["tabindex"];function vl(e,t,n,l,r,i){var o=Pe("ripple");return a(),u("div",f({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[m("div",f({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?Z((a(),u("button",f({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(d){return i.navBackward(d)}),disabled:i.isNavBackwardDisabled},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),v(G(n.templates.previousitemicon||"ChevronLeftIcon"),f({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,ml)),[[o]]):q("",!0),m("div",f({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":i.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":i.ariaSlideLabel},e.ptm("item")),[n.templates.item?(a(),v(G(n.templates.item),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16,pl),n.showItemNavigators?Z((a(),u("button",f({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(d){return i.navForward(d)}),disabled:i.isNavForwardDisabled},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(a(),v(G(n.templates.nextitemicon||"ChevronRightIcon"),f({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,bl)),[[o]]):q("",!0),n.templates.caption?(a(),u("div",f({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(a(),v(G(n.templates.caption),{key:0,item:i.activeItem},null,8,["item"])):q("",!0)],16)):q("",!0)],16),n.showIndicators?(a(),u("ul",f({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(a(!0),u(D,null,M(n.value,function(d,s){return a(),u("li",f({key:"p-galleria-indicator-".concat(s),class:e.cx("indicator",{index:s}),"aria-label":i.ariaPageLabel(s+1),"aria-selected":n.activeIndex===s,"aria-controls":n.id+"_item_"+s,onClick:function(g){return i.onIndicatorClick(s)},onMouseenter:function(g){return i.onIndicatorMouseEnter(s)},onKeydown:function(g){return i.onIndicatorKeyDown(g,s)}},{ref_for:!0},e.ptm("indicator",i.getIndicatorPTOptions(s)),{"data-p-active":i.isIndicatorItemActive(s)}),[n.templates.indicator?q("",!0):(a(),u("button",f({key:0,type:"button",tabindex:n.activeIndex===s?"0":"-1",class:e.cx("indicatorButton")},{ref_for:!0},e.ptm("indicatorButton",i.getIndicatorPTOptions(s))),null,16,hl)),n.templates.indicator?(a(),v(G(n.templates.indicator),{key:1,index:s,activeIndex:n.activeIndex,tabindex:n.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):q("",!0)],16,fl)}),128))],16)):q("",!0)],16)}Vt.render=vl;function Be(e){return kl(e)||yl(e)||ql(e)||gl()}function gl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ql(e,t){if(e){if(typeof e=="string")return Ee(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}function yl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kl(e){if(Array.isArray(e))return Ee(e)}function Ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Lt={name:"GalleriaThumbnails",hostName:"Galleria",extends:de,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Je(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Je(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,l=n+this.totalShiftedItems;this.d_numVisible-l-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var l=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",l),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var l=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-l-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-l,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=W(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=W(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=Be(W(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(i){return ze(i,"data-p-active")===!0}),l=he(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(i){return i===l.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=Be(W(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=he(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(l){return l===n.parentElement})},changedFocusedIndicator:function(t,n){var l=W(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');l[t].children[0].tabIndex="-1",l[n].children[0].tabIndex="0",l[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&vt(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){var l=10;Math.abs(n)<l||(n<0?this.navForward(t):this.navBackward(t))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",Xt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Be(this.responsiveOptions);var l=Jt();this.sortedResponsiveOptions.sort(function(o,d){var s=o.breakpoint,b=d.breakpoint;return Zt(s,b,-1,l)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(i.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/i.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},l=0;l<this.sortedResponsiveOptions.length;l++){var r=this.sortedResponsiveOptions[l];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeftIcon:St,ChevronRightIcon:$t,ChevronUpIcon:Cn,ChevronDownIcon:Yt},directives:{ripple:je}};function ie(e){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ie(e)}function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?it(Object(n),!0).forEach(function(l){wl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function wl(e,t,n){return(t=xl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xl(e){var t=Il(e,"string");return ie(t)=="symbol"?t:t+""}function Il(e,t){if(ie(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ie(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Sl=["disabled","aria-label"],$l=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Pl=["tabindex","aria-label","aria-current","onClick"],Cl=["disabled","aria-label"];function Vl(e,t,n,l,r,i){var o=Pe("ripple");return a(),u("div",f({class:e.cx("thumbnails")},e.ptm("thumbnails")),[m("div",f({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?Z((a(),u("button",f({key:0,class:e.cx("thumbnailPrevButton"),disabled:i.isNavBackwardDisabled,type:"button","aria-label":i.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(d){return i.navBackward(d)})},pe(pe({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),v(G(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),f({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Sl)),[[o]]):q("",!0),m("div",f({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[m("div",f({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(d){return i.onTransitionEnd(d)}),onTouchstart:t[2]||(t[2]=function(d){return i.onTouchStart(d)}),onTouchmove:t[3]||(t[3]=function(d){return i.onTouchMove(d)}),onTouchend:t[4]||(t[4]=function(d){return i.onTouchEnd(d)})},e.ptm("thumbnailItems")),[(a(!0),u(D,null,M(n.value,function(d,s){return a(),u("div",f({key:"p-galleria-thumbnail-item-".concat(s),class:e.cx("thumbnailItem",{index:s,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===s,"aria-selected":n.activeIndex===s,"aria-controls":n.containerId+"_item_"+s,onKeydown:function(g){return i.onThumbnailKeydown(g,s)}},{ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===s,"data-p-galleria-thumbnail-item-active":i.isItemActive(s),"data-p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===s}),[m("div",f({class:e.cx("thumbnail"),tabindex:n.activeIndex===s?"0":"-1","aria-label":i.ariaPageLabel(s+1),"aria-current":n.activeIndex===s?"page":void 0,onClick:function(g){return i.onItemClick(s)}},{ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(a(),v(G(n.templates.thumbnail),{key:0,item:d},null,8,["item"])):q("",!0)],16,Pl)],16,$l)}),128))],16)],16),n.showThumbnailNavigators?Z((a(),u("button",f({key:1,class:e.cx("thumbnailNextButton"),disabled:i.isNavForwardDisabled,type:"button","aria-label":i.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(d){return i.navForward(d)})},pe(pe({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(a(),v(G(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),f({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Cl)),[[o]]):q("",!0)],16)],16)}Lt.render=Vl;function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oe(e)}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(n),!0).forEach(function(l){Ll(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Ll(e,t,n){return(t=Bl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bl(e){var t=Dl(e,"string");return oe(t)=="symbol"?t:t+""}function Dl(e,t){if(oe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(oe(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Bt={name:"GalleriaContent",hostName:"Galleria",extends:de,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:at(at({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var l=["top","left","bottom","right"],r=l.find(function(i){return i===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:Vt,GalleriaThumbnails:Lt,TimesIcon:Wt},directives:{ripple:je}};function ae(e){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ae(e)}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(n),!0).forEach(function(l){Tl(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function Tl(e,t,n){return(t=Ol(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ol(e){var t=Al(e,"string");return ae(t)=="symbol"?t:t+""}function Al(e,t){if(ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(ae(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var El=["id","aria-label","aria-roledescription"],Ul=["aria-label"],jl=["aria-live"];function zl(e,t,n,l,r,i){var o=Q("GalleriaItem"),d=Q("GalleriaThumbnails"),s=Pe("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(a(),u("div",f({key:0,id:e.$id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},st(st({},e.$attrs.containerProps),i.getPTOptions("root"))),[e.$attrs.fullScreen?Z((a(),u("button",f({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(b){return e.$emit("mask-hide")})},i.getPTOptions("closeButton")),[(a(),v(G(e.$attrs.templates.closeicon||"TimesIcon"),f({class:e.cx("closeIcon")},i.getPTOptions("closeIcon")),null,16,["class"]))],16,Ul)),[[s]]):q("",!0),e.$attrs.templates&&e.$attrs.templates.header?(a(),u("div",f({key:1,class:e.cx("header")},i.getPTOptions("header")),[(a(),v(G(e.$attrs.templates.header)))],16)):q("",!0),m("div",f({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},i.getPTOptions("content")),[h(o,{id:e.$id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(b){return r.slideShowActive=b}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:i.startSlideShow,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(a(),v(d,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(b){return r.activeIndex=b}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(b){return r.slideShowActive=b}),containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:i.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:i.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):q("",!0)],16,jl),e.$attrs.templates&&e.$attrs.templates.footer?(a(),u("div",f({key:2,class:e.cx("footer")},i.getPTOptions("footer")),[(a(),v(G(e.$attrs.templates.footer)))],16)):q("",!0)],16,El)):q("",!0)}Bt.render=zl;var Dt={name:"Galleria",extends:rl,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&nt(),this.mask=null,this.container&&(Ve.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){Ve.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),$n(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&vt(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){Qt(this.target),this.target=null},onAfterLeave:function(t){Ve.clear(t),this.containerVisible=!1,nt(),this.unbindGlobalListeners()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},onKeyDown:function(t){t.code==="Escape"&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:Bt,Portal:Gt},directives:{focustrap:Sn}},Nl=["aria-modal"];function Rl(e,t,n,l,r,i){var o=Q("GalleriaContent"),d=Q("Portal"),s=Pe("focustrap");return e.fullScreen?(a(),v(d,{key:0},{default:V(function(){return[r.containerVisible?(a(),u("div",f({key:0,ref:i.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[h(_t,f({name:"p-galleria",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:V(function(){return[e.visible?Z((a(),v(o,f({key:0,ref:i.containerRef,onMaskHide:i.maskHide,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):q("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Nl)):q("",!0)]}),_:1})):(a(),v(o,f({key:1,templates:e.$slots,onActiveitemChange:i.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}Dt.render=Rl;var Hl=`
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
`,Kl={handle:{position:"absolute"},range:{position:"absolute"}},Ml={root:function(t){var n=t.instance,l=t.props;return["p-slider p-component",{"p-disabled":l.disabled,"p-invalid":n.$invalid,"p-slider-horizontal":l.orientation==="horizontal","p-slider-vertical":l.orientation==="vertical"}]},range:"p-slider-range",handle:"p-slider-handle"},Fl=$e.extend({name:"slider",style:Hl,classes:Ml,inlineStyles:Kl}),Gl={name:"BaseSlider",extends:gt,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},step:{type:Number,default:null},range:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Fl,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function re(e){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(e)}function Wl(e,t,n){return(t=Yl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yl(e){var t=Ql(e,"string");return re(t)=="symbol"?t:t+""}function Ql(e,t){if(re(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(re(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xl(e){return ei(e)||_l(e)||Zl(e)||Jl()}function Jl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zl(e,t){if(e){if(typeof e=="string")return Ue(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ue(e,t):void 0}}function _l(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ei(e){if(Array.isArray(e))return Ue(e)}function Ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var Tt={name:"Slider",extends:Gl,inheritAttrs:!1,emits:["change","slideend"],dragging:!1,handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var t=this.$el.getBoundingClientRect();this.initX=t.left+nn(),this.initY=t.top+ln(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(t){var n,l=t.touches?t.touches[0].pageX:t.pageX,r=t.touches?t.touches[0].pageY:t.pageY;this.orientation==="horizontal"?tn(this.$el)?n=(this.initX+this.barWidth-l)*100/this.barWidth:n=(l-this.initX)*100/this.barWidth:n=(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(n/100)+this.min;if(this.step){var o=this.range?this.value[this.handleIndex]:this.value,d=i-o;d<0?i=o+Math.ceil(i/this.step-o/this.step)*this.step:d>0&&(i=o+Math.floor(i/this.step-o/this.step)*this.step)}else i=Math.floor(i);this.updateModel(t,i)},updateModel:function(t,n){var l=Math.round(n*100)/100,r;this.range?(r=this.value?Xl(this.value):[],this.handleIndex==0?(l<this.min?l=this.min:l>=this.max&&(l=this.max),r[0]=l):(l>this.max?l=this.max:l<=this.min&&(l=this.min),r[1]=l)):(l<this.min?l=this.min:l>this.max&&(l=this.max),r=l),this.writeValue(r,t),this.$emit("change",r)},onDragStart:function(t,n){this.disabled||(this.$el.setAttribute("data-p-sliding",!0),this.dragging=!0,this.updateDomData(),this.range&&this.value[0]===this.max?this.handleIndex=0:this.handleIndex=n,t.currentTarget.focus())},onDrag:function(t){this.dragging&&this.setValue(t)},onDragEnd:function(t){this.dragging&&(this.dragging=!1,this.$el.setAttribute("data-p-sliding",!1),this.$emit("slideend",{originalEvent:t,value:this.value}))},onBarClick:function(t){this.disabled||ze(t.target,"data-pc-section")!=="handle"&&(this.updateDomData(),this.setValue(t))},onMouseDown:function(t,n){this.bindDragListeners(),this.onDragStart(t,n)},onKeyDown:function(t,n){switch(this.handleIndex=n,t.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(t,n),t.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(t,n),t.preventDefault();break;case"PageDown":this.decrementValue(t,n,!0),t.preventDefault();break;case"PageUp":this.incrementValue(t,n,!0),t.preventDefault();break;case"Home":this.updateModel(t,this.min),t.preventDefault();break;case"End":this.updateModel(t,this.max),t.preventDefault();break}},onBlur:function(t,n){var l,r;(l=(r=this.formField).onBlur)===null||l===void 0||l.call(r,t)},decrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]-this.step:r=this.value[n]-1:this.step?r=this.value-this.step:!this.step&&l?r=this.value-10:r=this.value-1,this.updateModel(t,r),t.preventDefault()},incrementValue:function(t,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r;this.range?this.step?r=this.value[n]+this.step:r=this.value[n]+1:this.step?r=this.value+this.step:!this.step&&l?r=this.value+10:r=this.value+1,this.updateModel(t,r),t.preventDefault()},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&(document.removeEventListener("mousemove",this.dragListener),this.dragListener=null),this.dragEndListener&&(document.removeEventListener("mouseup",this.dragEndListener),this.dragEndListener=null)},rangeStyle:function(){if(this.range){var t=this.rangeEndPosition>this.rangeStartPosition?this.rangeEndPosition-this.rangeStartPosition:this.rangeStartPosition-this.rangeEndPosition,n=this.rangeEndPosition>this.rangeStartPosition?this.rangeStartPosition:this.rangeEndPosition;return this.horizontal?{"inset-inline-start":n+"%",width:t+"%"}:{bottom:n+"%",height:t+"%"}}else return this.horizontal?{width:this.handlePosition+"%"}:{height:this.handlePosition+"%"}},handleStyle:function(){return this.horizontal?{"inset-inline-start":this.handlePosition+"%"}:{bottom:this.handlePosition+"%"}},rangeStartHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeStartPosition+"%"}:{bottom:this.rangeStartPosition+"%"}},rangeEndHandleStyle:function(){return this.horizontal?{"inset-inline-start":this.rangeEndPosition+"%"}:{bottom:this.rangeEndPosition+"%"}}},computed:{value:function(){var t;if(this.range){var n,l,r,i;return[(n=(l=this.d_value)===null||l===void 0?void 0:l[0])!==null&&n!==void 0?n:this.min,(r=(i=this.d_value)===null||i===void 0?void 0:i[1])!==null&&r!==void 0?r:this.max]}return(t=this.d_value)!==null&&t!==void 0?t:this.min},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},handlePosition:function(){return this.value<this.min?0:this.value>this.max?100:(this.value-this.min)*100/(this.max-this.min)},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.value[0]<this.min?0:(this.value[0]-this.min)*100/(this.max-this.min):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.value[1]>this.max?100:(this.value[1]-this.min)*100/(this.max-this.min):100},dataP:function(){return en(Wl({},this.orientation,this.orientation))}}},ti=["data-p"],ni=["data-p"],li=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],ii=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"],oi=["tabindex","aria-valuemin","aria-valuenow","aria-valuemax","aria-labelledby","aria-label","aria-orientation","data-p"];function ai(e,t,n,l,r,i){return a(),u("div",f({class:e.cx("root"),onClick:t[18]||(t[18]=function(){return i.onBarClick&&i.onBarClick.apply(i,arguments)})},e.ptmi("root"),{"data-p-sliding":!1,"data-p":i.dataP}),[m("span",f({class:e.cx("range"),style:[e.sx("range"),i.rangeStyle()]},e.ptm("range"),{"data-p":i.dataP}),null,16,ni),e.range?q("",!0):(a(),u("span",f({key:0,class:e.cx("handle"),style:[e.sx("handle"),i.handleStyle()],onTouchstartPassive:t[0]||(t[0]=function(o){return i.onDragStart(o)}),onTouchmovePassive:t[1]||(t[1]=function(o){return i.onDrag(o)}),onTouchend:t[2]||(t[2]=function(o){return i.onDragEnd(o)}),onMousedown:t[3]||(t[3]=function(o){return i.onMouseDown(o)}),onKeydown:t[4]||(t[4]=function(o){return i.onKeyDown(o)}),onBlur:t[5]||(t[5]=function(o){return i.onBlur(o)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("handle"),{"data-p":i.dataP}),null,16,li)),e.range?(a(),u("span",f({key:1,class:e.cx("handle"),style:[e.sx("handle"),i.rangeStartHandleStyle()],onTouchstartPassive:t[6]||(t[6]=function(o){return i.onDragStart(o,0)}),onTouchmovePassive:t[7]||(t[7]=function(o){return i.onDrag(o)}),onTouchend:t[8]||(t[8]=function(o){return i.onDragEnd(o)}),onMousedown:t[9]||(t[9]=function(o){return i.onMouseDown(o,0)}),onKeydown:t[10]||(t[10]=function(o){return i.onKeyDown(o,0)}),onBlur:t[11]||(t[11]=function(o){return i.onBlur(o,0)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[0]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("startHandler"),{"data-p":i.dataP}),null,16,ii)):q("",!0),e.range?(a(),u("span",f({key:2,class:e.cx("handle"),style:[e.sx("handle"),i.rangeEndHandleStyle()],onTouchstartPassive:t[12]||(t[12]=function(o){return i.onDragStart(o,1)}),onTouchmovePassive:t[13]||(t[13]=function(o){return i.onDrag(o)}),onTouchend:t[14]||(t[14]=function(o){return i.onDragEnd(o)}),onMousedown:t[15]||(t[15]=function(o){return i.onMouseDown(o,1)}),onKeydown:t[16]||(t[16]=function(o){return i.onKeyDown(o,1)}),onBlur:t[17]||(t[17]=function(o){return i.onBlur(o,1)}),tabindex:e.tabindex,role:"slider","aria-valuemin":e.min,"aria-valuenow":e.d_value?e.d_value[1]:null,"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation},e.ptm("endHandler"),{"data-p":i.dataP}),null,16,oi)):q("",!0)],16,ti)}Tt.render=ai;const ri=j({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(a(),u("ul",{class:K(["list-disc",{"ms-5":e.alignment==="left"}])},[(a(!0),u(D,null,M(e.bullets,l=>(a(),u("li",null,A(l),1))),256))],2))}}),si={class:"surface-text-muted text-xs font-semibold uppercase tracking-[0.24em]"},di=j({__name:"BlogPostContentBlockLabel",props:{label:{}},setup(e){return(t,n)=>(a(),u("p",si,A(e.label),1))}}),ui={class:"w-full ql-editor no-input"},ci=["innerHTML"],mi=j({__name:"BlogPostDescription",props:{description:{}},setup(e){return(t,n)=>(a(),u("div",ui,[m("div",{innerHTML:e.description},null,8,ci)]))}}),pi={class:"w-full max-w-2xl rounded-primary surface-panel-glass p-4 shadow-sm backdrop-blur-sm"},bi={class:"mb-4 flex items-start justify-between gap-3"},fi={class:"text-lg font-semibold"},hi={key:0,class:"text-sm opacity-75"},vi={key:0,class:"text-sm opacity-75"},gi={key:1,class:"flex flex-col gap-2"},qi={class:"min-w-0 flex-1"},yi={key:2,class:"text-sm opacity-75"},Ot=j({__name:"BlogPostChecklistWidget",props:{title:{},emptyLabel:{},items:{},loading:{type:Boolean},disabled:{type:Boolean}},emits:["toggle"],setup(e,{emit:t}){const n=e,l=t,{isDarkTheme:r}=Re(),i=w(()=>n.items.filter(s=>!s.checked).length),o=w(()=>r.value?"line-through text-neutral-400":"line-through text-slate-500"),d=w(()=>r.value?"text-xs text-neutral-400":"text-xs text-slate-500");return(s,b)=>(a(),u("section",pi,[m("div",bi,[m("div",null,[m("h3",fi,A(e.title),1),e.items.length?(a(),u("p",hi,A(`${i.value} open van ${e.items.length}`),1)):q("",!0)])]),e.loading?(a(),u("div",vi," Laden... ")):e.items.length?(a(),u("ul",gi,[(a(!0),u(D,null,M(e.items,g=>(a(),u("li",{key:g.id,class:"flex items-center justify-between gap-3 rounded-2xl surface-panel-glass px-3 py-2"},[m("div",qi,[m("p",{class:K(g.checked?o.value:void 0)},A(g.label),3),g.detail?(a(),u("p",{key:0,class:K(d.value)},A(g.detail),3)):q("",!0)]),h(c(gn),{"model-value":g.checked,disabled:e.disabled,pt:{slider:{class:g.checked?"bg-primary-500":void 0}},"onUpdate:modelValue":x=>l("toggle",g.id,x)},null,8,["model-value","disabled","pt","onUpdate:modelValue"])]))),128))])):(a(),u("p",yi,A(e.emptyLabel),1))]))}}),ki={class:"contents"},wi=j({__name:"BlogPostGroceryListWidget",props:{post:{},title:{}},setup(e){const t=e,n=ee(),l=qt(),r=On(),i=An(),o=Se(),{sortedProducts:d,getProductLabel:s}=En(),{products:b,isFetchLoading:g,isMutationLoading:x}=H(r),{productShopOptions:B}=H(i),{getHouseHoldUserOptionsNullable:T}=qn(),z=U(null),E=U(!1),y=U(!1),I=U(!1),O=U(!1),P=U(!1);function N($){return!$.isOutOfStock}const R=w(()=>d.value.filter($=>$.blogPostIds.includes(t.post.id)).sort(($,ce)=>Number(N($))-Number(N(ce)))),L=w(()=>R.value.map($=>({id:$.id,label:s($),detail:$.getSizeLabel(),checked:N($)}))),p=w(()=>T(z.value?.houseHoldId,"Onbekend"));async function C($,ce){if(!n.firebaseUser)return;const me=b.value.find(Et=>Et.id===$);if(!me)return;if(ce){z.value=me,E.value=!0;return}const We=me.clone();We.isOutOfStock=!0,await r.updateProduct(We,`Product "${me.name}" is niet meer op voorraad.`)}function S(){z.value=null,E.value=!1}async function k(){n.firebaseUser&&!y.value&&(y.value=!0,await l.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!I.value&&!g.value&&(I.value=!0,await r.fetchProducts()),n.firebaseUser&&!O.value&&!B.value.length&&(O.value=!0,await i.fetchProductShops()),n.firebaseUser&&!P.value&&!o.publicUsers.length&&(P.value=!0,await o.fetchPublicUsers())}return Ie(()=>n.firebaseUser?.uid,async $=>{if(!$){y.value=!1,I.value=!1,O.value=!1,P.value=!1;return}await k()},{immediate:!0}),($,ce)=>(a(),u("div",ki,[h(Ot,{title:e.title||"Boodschappenlijst","empty-label":"Er zijn nog geen producten gekoppeld aan deze blogpost.",items:L.value,loading:c(g),disabled:!c(n).firebaseUser||c(x),onToggle:C},null,8,["title","items","loading","disabled"]),z.value?(a(),v(Un,{key:0,"is-open":E.value,mode:"buy-product","user-id-options":p.value,"store-options":c(B),"selected-product":z.value,"confirm-loading":c(x),onClose:S},null,8,["is-open","user-id-options","store-options","selected-product","confirm-loading"])):q("",!0)]))}}),dt=j({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(a(),u("div",{class:K(["!p-0 md:!p-3",e.thumb?"w-full":"w-fit !py-5 md:border-none !rounded-none md:!rounded-primary"])},[h(c(Ge),null,{default:V(()=>[e.thumb?(a(),u("div",{key:0,class:"h-[20vh] inset-0 rounded-primary bg-cover bg-center",style:on({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(a(),v(It,{key:1,src:e.coverImageUrl,"image-class":["cover-image md:rounded-primary",e.imageClass]},null,8,["src","image-class"]))]),_:1})],2))}}),xi=["innerHTML"],Ii=j({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const t=e,n=w(()=>yt(t.tableData)),l=w(()=>n.value.length?n.value[0].map((o,d)=>o||d):[]),r=w(()=>n.value.slice(1).filter(o=>o.some(d=>!!d)).map(o=>{const d={};return l.value.forEach((s,b)=>{d[s]=i(o[b])}),d})),i=o=>{const d=/(https?:\/\/[^\s]+)/g;return o.replace(d,s=>{let b=s.replace("http://","").replace("https://","").replace("www.","");return b.length>15&&(b=b.substring(0,15)+"..."),`<a href="${s}" target="_blank">${b}</a>`})};return(o,d)=>(a(),v(c(jn),{value:r.value,"pt:root":"w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]",showHeaders:l.value.some(s=>typeof s=="string"),removableSort:""},{default:V(()=>[(a(!0),u(D,null,M(l.value,(s,b)=>(a(),v(c(zn),{key:s,field:g=>g[s],header:typeof s=="string"?s:"",sortable:""},{body:V(({data:g})=>[m("span",{class:K(["text-nowrap",[{"font-bold":b===0},{"text-left":e.alignment==="left"||!e.alignment,"text-center":e.alignment==="center","text-right":e.alignment==="right"}]]),innerHTML:g[s]},null,10,xi)]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","showHeaders"]))}}),Si=j({__name:"BlogPostTasksWidget",props:{post:{},title:{}},setup(e){const t=e,n=ee(),l=qt(),r=Vn(),{sortedTasks:i}=Ln(),{tasks:o,isFetchLoading:d,isMutationLoading:s}=H(r),b=U(!1),g=U(!1);function x(y){return y.wasExecutedOnDate(new Date)}const B=w(()=>i.value.filter(y=>y.blogPostIds.includes(t.post.id)).sort((y,I)=>Number(x(y))-Number(x(I)))),T=w(()=>B.value.map(y=>({id:y.id,label:y.name,checked:x(y)})));async function z(y,I){if(!n.firebaseUser)return;const O=o.value.find(L=>L.id===y);if(!O)return;const P=O.clone();if(I){P.executeLog.push(new Bn({executors:[n.firebaseUser.uid]})),await r.updateTask(P,`Taak "${O.name}" uitgevoerd`);return}const N=an(new Date).getTime(),R=rn(new Date).getTime();for(let L=P.executeLog.length-1;L>=0;L--){const p=P.executeLog[L];if(p.date.getTime()>=N&&p.date.getTime()<=R&&p.executors.includes(n.firebaseUser.uid)){P.executeLog.splice(L,1),await r.updateTask(P,`Taak "${O.name}" teruggezet`);break}}}async function E(){n.firebaseUser&&!g.value&&(g.value=!0,await l.fetchHouseHolds(n.firebaseUser.uid)),n.firebaseUser&&!b.value&&!d.value&&(b.value=!0,await r.fetchTasks())}return Ie(()=>n.firebaseUser?.uid,async y=>{if(!y){g.value=!1,b.value=!1;return}await E()},{immediate:!0}),(y,I)=>(a(),v(Ot,{title:e.title||"Taken","empty-label":"Er zijn nog geen taken gekoppeld aan deze blogpost.",items:T.value,loading:c(d),disabled:!c(n).firebaseUser||c(s),onToggle:z},null,8,["title","items","loading","disabled"]))}}),$i={class:"text-2xl font-bold"},Pi=j({__name:"BlogPostTitle",props:{title:{}},setup(e){return(t,n)=>(a(),u("h2",$i,A(e.title),1))}}),Ci={key:2,class:"w-full flex flex-col gap-1 items-center"},Vi={key:0},Li={key:0,class:"font-bold text-lg md:text-2xl"},Bi={key:1,class:"font-bold"},Di={key:1},Ti=j({__name:"BlogPostContent",props:{post:{},block:{}},setup(e){const t=e,n=w(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type==="title"),l=w(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type==="title"),r=w(()=>t.block.isWidget()||t.block.isGroup()?"":t.block.label?.trim()??"");return(i,o)=>{const d=Q("BlogPostContent",!0);return a(),u("div",{class:K(["flex flex-col",{"items-start":e.block.alignment==="left","items-center":e.block.alignment==="center"||!e.block.alignment,"items-end":e.block.alignment==="right"}])},[r.value?(a(),v(di,{key:0,label:r.value},null,8,["label"])):q("",!0),e.block.isBoolean()?(a(),v(c(Tn),{key:1,modelValue:e.block.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.block.value=s),onLabel:"True",offLabel:"False",onIcon:"pi pi-check",offIcon:"pi pi-times",disabled:""},null,8,["modelValue"])):e.block.isNumber()?(a(),u("div",Ci,[h(c(Dn),{class:"w-full",value:e.block.value},null,8,["value"]),e.block.value?q("",!0):(a(),u("span",Vi,A(e.block.value)+"% ",1))])):e.block.isString()?(a(),u(D,{key:3},[e.block.type==="title"?(a(),v(Pi,{key:0,title:e.block.value},null,8,["title"])):e.block.type==="richtext"?(a(),v(mi,{key:1,description:e.block.value},null,8,["description"])):e.block.type==="table"?(a(),v(Ii,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,["tableData","alignment"])):e.block.type==="coverimage"?(a(),v(dt,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,["post","cover-image-url"])):e.block.type==="image"?(a(),v(dt,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":"!max-h-[50vh] !max-w-[50vw]"},null,8,["post","cover-image-url"])):q("",!0)],64)):e.block.isStringList()?(a(),u(D,{key:4},[e.block.type==="bulletlist"?(a(),v(ri,{key:0,bullets:e.block.value},null,8,["bullets"])):e.block.type==="imageslider"?(a(),v(c(Ge),{key:1},{default:V(()=>[h(c(Dt),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:V(s=>[h(It,{src:s.item,"image-class":"aspect-square object-cover w-3/4 place-self-center rounded-2xl"},null,8,["src"])]),_:1},8,["value"])]),_:1})):q("",!0)],64)):e.block.isDate()?(a(),u(D,{key:5},[e.block.type==="date"?(a(),u(D,{key:0},[De(A(e.block.value?c(ne)(e.block.value):"Geen datum beschikbaar"),1)],64)):e.block.type==="countdown"?(a(),u(D,{key:1},[e.block.value?(a(),v(tt,{key:0,time:new Date(e.block.value).getTime(),direction:"down"},null,8,["time"])):q("",!0)],64)):e.block.type==="timer"?(a(),u(D,{key:2},[e.block.value?(a(),v(tt,{key:0,time:new Date(e.block.value).getTime(),direction:"up"},null,8,["time"])):q("",!0)],64)):q("",!0)],64)):e.block.isButton()?(a(),v(F,{key:6,label:e.block.value.title,href:e.block.value.url,severity:e.block.value.severity},null,8,["label","href","severity"])):e.block.isWidget()?(a(),u(D,{key:7},[e.block.type==="tasks"?(a(),v(Si,{key:0,post:e.post,title:e.block.label},null,8,["post","title"])):e.block.type==="grocerylist"?(a(),v(wi,{key:1,post:e.post,title:e.block.label},null,8,["post","title"])):q("",!0)],64)):e.block.isGroup()?(a(),v(c(Ke),{key:8,class:"surface-panel-glass rounded-xl w-full max-w-2xl",onTabOpen:c(Ne)},{default:V(()=>[h(c(qe),{value:"0",disabled:!e.block.value.length},{default:V(()=>[h(c(ye),{class:K(["px-0 bg-transparent !border-none",{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:V(()=>[m("div",null,[e.block.label||n.value?(a(),u(D,{key:0},[e.block.label||n.value?(a(),u("p",Li,A(e.block.label||e.block.value[0].value),1)):q("",!0),l.value?(a(),u("p",Bi,A(e.block.value[1].value),1)):q("",!0)],64)):(a(),u("p",Di,"Klik om te openen"))])]),_:1},8,["class","pt"]),h(c(ke),{pt:{content:{class:"flex flex-col gap-3"}}},{default:V(()=>[(a(!0),u(D,null,M(e.block.value.slice(l.value?2:n.value?1:0),s=>(a(),v(d,{key:s.id,post:e.post,block:s},null,8,["post","block"]))),128))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["onTabOpen"])):q("",!0)],2)}}}),Oi={class:"flex flex-wrap justify-end h-fit gap-3"},Ai=j({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(t,n)=>(a(),u("div",Oi,[h(Oe,{onClick:n[0]||(n[0]=l=>t.$emit("editClicked"))}),h(le,{onClick:n[1]||(n[1]=l=>t.$emit("deleteClicked"))})]))}}),Ei={class:"p-5 md:p-10"},Ui={class:"flex justify-between gap-3"},ji={class:"flex flex-col"},zi={class:"text-2xl font-bold mb-2"},Ni={key:0,class:"flex flex-wrap gap-2 mb-2"},Ri={class:"surface-text-muted text-sm mt-2 mb-2 xl:ms-2 xl:mt-2 xl:whitespace-nowrap"},Hi={class:"flex justify-between h-fit mt-2 gap-2"},Ki={class:"flex flex-wrap gap-3"},Mi={class:"flex flex-col gap-3"},wa=j({__name:"BlogPost",props:{post:{}},setup(e){const t=e,n=sn(),l=ee(),r=Se(),i=we(),o=ue(),{publicUsers:d}=H(r),{firebaseUser:s,isOwner:b}=H(l),{deleteBlogPost:g}=i,x=U(!1);n.currentRoute.value.name!==X.BLOG&&Kn(t.post);const B=w(()=>t.post.allowedUserIds?.length?d.value.filter(L=>t.post.allowedUserIds?.includes(L.id)):[]),T=w(()=>{const L=ne(t.post.date);return t.post.dateUpdated?L+` - aangepast ${ne(t.post.dateUpdated)}`:L}),z=w(()=>{const L=[];return t.post.datePinned&&L.push({value:"Vastgemaakt",severity:"success",rounded:!1}),t.post.locked&&L.push({value:"Gesloten",severity:"danger",rounded:!1,icon:"pi pi-lock"}),t.post.archived&&L.push({value:"Gearchiveerd",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),L}),E=w(()=>["surface-panel !rounded-primary overflow-hidden"]),y=w(()=>"surface-panel-glass h-fit !p-0 !px-4 !py-1"),I=w(()=>"surface-panel-soft z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3"),O=()=>{o.openWith(t.post)},P=()=>{x.value=!0},N=async()=>{await g(t.post.id)&&(x.value=!1)},R=()=>{const L=document.createElement("textarea"),{protocol:p,hostname:C,port:S}=window.location,k=`${p}//${C}`+(C==="localhost"?`:${S}`:"");L.value=`${k}#${dn.BLOG.path}/${t.post.id}`,document.body.appendChild(L),L.select(),document.execCommand("copy"),document.body.removeChild(L),J.success("Link gekopieerd!")};return(L,p)=>{const C=Q("RouterLink");return a(),u(D,null,[h(c(ve),{id:e.post.id,class:K(E.value)},{content:V(()=>[m("div",Ei,[m("div",Ui,[m("div",ji,[h(C,{to:{name:c(X).BLOG_DETAILS,params:{postId:e.post.id}},class:"!no-underline hover:!underline"},{default:V(()=>[m("h2",zi,A(e.post.title),1)]),_:1},8,["to"]),z.value.length?(a(),u("div",Ni,[(a(!0),u(D,null,M(z.value,S=>(a(),v(c(In),{key:`${S.value}-${S.icon??""}`,class:"h-fit p-2",value:S.value,severity:S.severity,rounded:S.rounded!==!1,icon:S.icon,pt:S.pt},null,8,["value","severity","rounded","icon","pt"]))),128))])):q("",!0),m("p",Ri,A(T.value),1)]),h(F,{class:"h-fit",severity:"secondary",icon:"pi pi-copy",onClick:R})]),m("div",Hi,[m("div",Ki,[(a(!0),u(D,null,M(B.value,S=>(a(),v(c(un),{key:S.id,class:K(y.value),icon:"pi pi-user",label:S.id===c(s)?.uid?"Jij":S.displayName,rounded:""},null,8,["class","label"]))),128))]),c(b)?(a(),u("div",{key:0,class:K(["flex justify-end ms-5",e.post.allowedUserIds?.length?"flex-col md:flex-row":"flex-row"])},[h(Ai,{onEditClicked:O,onDeleteClicked:P})],2)):q("",!0)]),p[1]||(p[1]=m("div",{class:"mt-5 h-px w-full border-t border-[var(--p-content-border-color)]"},null,-1)),h(c(ve),{class:K(I.value)},{content:V(()=>[m("div",Mi,[(a(!0),u(D,null,M(e.post.content,S=>(a(),v(Ti,{key:S.id,post:e.post,block:S},null,8,["post","block"]))),128))])]),_:1},8,["class"]),h(tl,{post:e.post},null,8,["post"])])]),_:1},8,["id","class"]),h(wt,{"is-open":x.value,"onUpdate:isOpen":p[0]||(p[0]=S=>x.value=S),title:"Verwijder bericht","entity-label":`het bericht '${e.post.title}'`,onConfirm:N},null,8,["is-open","entity-label"])],64)}}}),Fi={class:"block text-sm font-bold mb-2"},Gi={class:"background-gray-dark rounded-2xl"},Wi={class:"grid grid-cols-6 items-center"},Yi=j({__name:"ImageSliderField",props:Te({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=kt(e,"modelValue"),n=r=>{t.value.splice(r,1)},l=(r,i)=>{t.value[r]=i};return(r,i)=>(a(),u("div",null,[m("p",Fi,A(e.label),1),m("div",Gi,[h(c(Fe),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o),itemKey:"index",handle:".drag-handle"},{item:V(({element:o,index:d})=>[m("div",Wi,[i[1]||(i[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),h(Ct,{class:"col-span-4",id:`${e.name}.${d}`,name:`${e.name}.${d}`,modelValue:o,"blog-post":e.blogPost,"onUpdate:modelValue":s=>l(d,s)},null,8,["id","name","modelValue","blog-post","onUpdate:modelValue"]),h(le,{onClick:s=>n(d)},null,8,["onClick"])])]),_:1},8,["modelValue"])])]))}});var Qi=`
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
`,Xi={root:function(t){var n=t.instance;return["p-editor",{"p-invalid":n.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},Ji=$e.extend({name:"editor",style:Qi,classes:Xi}),Zi={name:"BaseEditor",extends:gt,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Ji,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},se(e)}function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,l)}return n}function _i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(n),!0).forEach(function(l){eo(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}function eo(e,t,n){return(t=to(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function to(e){var t=no(e,"string");return se(t)=="symbol"?t:t+""}function no(e,t){if(se(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,t);if(se(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ct=(function(){try{return window.Quill}catch{return null}})(),At={name:"Editor",extends:Zi,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},d_value:function(t,n){t!==n&&this.quill&&!this.quill.hasFocus()&&this.renderValue(t)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var t=this,n={modules:_i({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};ct?(this.quill=new ct(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):cn(()=>import("./c-quill.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(l){l&&mn(t.$refs.editorElement)&&(l.default?t.quill=new l.default(t.$refs.editorElement,n):t.quill=new l(t.$refs.editorElement,n),t.initQuill())}).then(function(){t.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(t){if(this.quill)if(t){var n=this.quill.clipboard.convert({html:t});this.quill.setContents(n)}else this.quill.setText("")},initQuill:function(){var t=this;this.renderValue(this.d_value),this.quill.on("text-change",function(n,l,r){if(r==="user"){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();i==="<p><br></p>"&&(i=""),t.writeValue(i),t.$emit("text-change",{htmlValue:i,textValue:o,delta:n,source:r,instance:t.quill})}}),this.quill.on("selection-change",function(n,l,r){var i=t.quill.getSemanticHTML(),o=t.quill.getText().trim();t.$emit("selection-change",{htmlValue:i,textValue:o,range:n,oldRange:l,source:r,instance:t.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function lo(e,t,n,l,r,i){return a(),u("div",f({class:e.cx("root")},e.ptmi("root")),[m("div",f({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ht(e.$slots,"toolbar",{},function(){return[m("span",f({class:"ql-formats"},e.ptm("formats")),[m("select",f({class:"ql-header",defaultValue:"0"},e.ptm("header")),[m("option",f({value:"1"},e.ptm("option")),"Heading",16),m("option",f({value:"2"},e.ptm("option")),"Subheading",16),m("option",f({value:"0"},e.ptm("option")),"Normal",16)],16),m("select",f({class:"ql-font"},e.ptm("font")),[m("option",pn(bn(e.ptm("option"))),null,16),m("option",f({value:"serif"},e.ptm("option")),null,16),m("option",f({value:"monospace"},e.ptm("option")),null,16)],16)],16),m("span",f({class:"ql-formats"},e.ptm("formats")),[m("button",f({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),m("button",f({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),m("button",f({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),m("span",f({class:"ql-formats"},e.ptm("formats")),[m("select",f({class:"ql-color"},e.ptm("color")),null,16),m("select",f({class:"ql-background"},e.ptm("background")),null,16)],16),m("span",f({class:"ql-formats"},e.ptm("formats")),[m("button",f({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),m("button",f({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),m("select",f({class:"ql-align"},e.ptm("select")),[m("option",f({defaultValue:""},e.ptm("option")),null,16),m("option",f({value:"center"},e.ptm("option")),null,16),m("option",f({value:"right"},e.ptm("option")),null,16),m("option",f({value:"justify"},e.ptm("option")),null,16)],16)],16),m("span",f({class:"ql-formats"},e.ptm("formats")),[m("button",f({class:"ql-link",type:"button"},e.ptm("link")),null,16),m("button",f({class:"ql-image",type:"button"},e.ptm("image")),null,16),m("button",f({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),m("span",f({class:"ql-formats"},e.ptm("formats")),[m("button",f({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),m("div",f({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}At.render=lo;const io=["for"],oo=j({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,l=w({get:()=>n.modelValue||"",set:s=>{d("update:modelValue",s)}}),r=w(()=>n.label?n.label+(n.required?" *":""):void 0),i=w(()=>n.name+(n.id?`.${n.id}`:"")),o=({instance:s})=>{s.setContents(s.clipboard.convert({html:l.value}))},d=t;return(s,b)=>(a(),u("div",null,[e.label?(a(),u("label",f({key:0,class:"block text-sm font-bold mb-2",for:i.value},e.labelProps),A(r.value),17,io)):q("",!0),h(c(At),f({id:i.value,placeholder:e.placeholder,modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=g=>l.value=g),onLoad:o},e.editorProps),null,16,["id","placeholder","modelValue"]),e.error?(a(),v(xn,{key:1,name:e.name,error:e.error},null,8,["name","error"])):q("",!0)]))}}),ao={class:"p-4 surface-panel-glass rounded-2xl"},ro={key:0},so={class:"flex gap-3"},uo=j({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,l=t,r=U(""),i=w({get:()=>n.modelValue.slice(),set:s=>{l("update:modelValue",s),r.value=""}}),o=(s,b)=>{const g=i.value.slice();g.splice(s,1,b),i.value=g},d=s=>{const b=i.value.slice();b.splice(s,1),i.value=b};return(s,b)=>(a(),u("div",ao,[i.value.length?(a(),v(c(Fe),{key:1,modelValue:i.value,"onUpdate:modelValue":b[0]||(b[0]=g=>i.value=g),itemKey:"index",handle:".drag-handle"},{item:V(({element:g,index:x})=>[m("div",so,[b[1]||(b[1]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),h(Y,{class:"w-full",id:`${e.name}.${x}`,name:e.name,"model-value":g,max:200,"delete-button":"","onUpdate:modelValue":B=>o(x,B.toString()),"onUpdate:delete":B=>d(x)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])):(a(),u("p",ro," Er zijn nog geen items toegevoegd. "))]))}}),co=["for"],mo={class:"table w-full"},po={class:"table-header-group"},bo={key:0,class:"table-row"},fo={key:0,class:"table-cell"},ho={class:"table-cell"},vo={class:"table-row-group"},go={key:0,class:"table-cell"},qo={key:1,class:"table-cell"},yo={key:2,class:"table-cell"},ko={class:"table-footer-group"},wo={class:"table-row"},xo={key:0,class:"table-cell"},Io=j({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:t}){const n=e,l=t,i=Nn(Rn).greaterOrEqual("md"),o=w({get:()=>yt(n.modelValue),set:y=>{l("update:modelValue",Ze(y))}}),d=w(()=>n.name+(n.id?"."+n.id:"")),s=w(()=>i.value&&o.value[0]?.length<2),b=(y,I,O)=>{const P=[...o.value];P[y][I]=O,l("update:modelValue",Ze(P))},g=()=>{const y=o.value;if(y.length){const I=y[0];I.length?o.value=[...y,I.map(()=>"")]:o.value=[...y,[""]]}else o.value=[[""]]},x=y=>{const I=o.value;if(I.length){const O=I[0];I.splice(y,0,O.map(()=>"")),o.value=[...I]}},B=y=>{o.value.splice(y,1),o.value=o.value},T=()=>{o.value=o.value.map(y=>[...y,""])},z=y=>{const I=o.value;for(const O of I)O.splice(y,0,"");o.value=[...I]},E=y=>{o.value=o.value.map(I=>(I.splice(y,1),I))};return(y,I)=>(a(),u("div",null,[e.label?(a(),u("label",f({key:0,class:"block text-sm font-bold mb-2",for:d.value},e.labelProps),A(e.label),17,co)):q("",!0),m("div",mo,[m("div",po,[o.value.length&&o.value[0].length>1?(a(),u("div",bo,[o.value.length>1?(a(),u("div",fo)):q("",!0),(a(!0),u(D,null,M(o.value[0],(O,P)=>(a(),u("div",ho,[o.value.length&&o.value[0].length?(a(),v(F,{key:0,class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove column":void 0,onClick:N=>E(P)},null,8,["label","onClick"])):q("",!0)]))),256))])):q("",!0)]),m("div",vo,[(a(!0),u(D,null,M(o.value,(O,P)=>(a(),u("div",{key:P,class:"table-row"},[o.value.length>1?(a(),u("div",go,[h(F,{class:"md:text-start text-nowrap",severity:"danger",icon:"pi pi-times",outlined:"",label:s.value?"Remove row":void 0,onClick:N=>B(P)},null,8,["label","onClick"])])):q("",!0),(a(!0),u(D,null,M(O,(N,R)=>(a(),v(Y,{key:R,class:"table-cell !m-0",name:`${e.name}.${P}.${R}`,modelValue:N,placeholder:P===0||R===0?"header":"cell","onUpdate:modelValue":L=>b(P,R,L.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),P===0?(a(),u("div",qo,[h(F,{class:"md:text-start text-nowrap !text-white",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add column":void 0,onClick:T},null,8,["label"])])):(a(),u("div",yo,[h(F,{class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:N=>x(P)},null,8,["label","onClick"])]))]))),128))]),m("div",ko,[m("div",wo,[o.value.length>1?(a(),u("div",xo)):q("",!0),(a(!0),u(D,null,M(o.value[0],(O,P)=>(a(),u("div",{class:"table-cell",key:P},[P===0?(a(),v(F,{key:0,class:"md:text-start text-nowrap !text-white",severity:"success",icon:"pi pi-plus",outlined:"",label:s.value?"Add row":void 0,onClick:g},null,8,["label"])):(a(),v(F,{key:1,class:"md:text-start text-nowrap",severity:"secondary",icon:"pi pi-arrow-up-left",outlined:"",label:s.value?"Insert row":void 0,onClick:N=>z(P)},null,8,["label","onClick"]))]))),128))])])])]))}}),So={class:"flex flex-col gap-4"},$o={key:1,class:"w-full flex flex-col items-center gap-3 justify-center"},Po={key:5,class:"flex flex-col gap-4 md:flex-row"},Co={key:6,class:"rounded-primary border border-dashed border-surface-300 px-4 py-3 text-sm opacity-80"},Vo=j({__name:"BlogPostContentBlockEditor",props:{content:{},id:{}},setup(e){const t=e,n=ue(),{blogPostOriginal:l}=H(n),r=()=>{t.content.isStringList()&&t.content.value.push("")};return(i,o)=>(a(),u("div",So,[e.content.isBoolean()?(a(),v(fe,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.isNumber()?(a(),u("div",$o,[h(c(Tt),{class:"w-full",name:e.content.id,modelValue:e.content.value,"onUpdate:modelValue":o[1]||(o[1]=d=>e.content.value=d)},null,8,["name","modelValue"]),m("p",null,A(e.content.value)+"%",1)])):e.content.isString()?(a(),u(D,{key:2},[e.content.type==="title"?(a(),v(Y,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[2]||(o[2]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="richtext"?(a(),v(oo,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[3]||(o[3]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="table"?(a(),v(Io,{key:2,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[4]||(o[4]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="coverimage"||e.content.type==="image"?(a(),v(Ct,{key:3,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[5]||(o[5]=d=>e.content.value=d),"blog-post":c(l)},null,8,["name","label","modelValue","blog-post"])):q("",!0)],64)):e.content.isStringList()?(a(),u(D,{key:3},[e.content.type==="bulletlist"?(a(),v(uo,{key:0,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[6]||(o[6]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.type==="imageslider"?(a(),v(Yi,{key:1,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[7]||(o[7]=d=>e.content.value=d),"blog-post":c(l)},null,8,["name","label","modelValue","blog-post"])):q("",!0),h(Pt,{class:"w-fit",label:"Item toevoegen",onClick:r})],64)):e.content.isDate()?(a(),v(Pn,{key:4,name:e.content.id,label:e.content.getLabel(),modelValue:e.content.value,"onUpdate:modelValue":o[8]||(o[8]=d=>e.content.value=d)},null,8,["name","label","modelValue"])):e.content.isButton()?(a(),u("div",Po,[h(Y,{class:"w-full",name:`${e.content.id}-title`,label:"Knop titel",modelValue:e.content.value.title,"onUpdate:modelValue":o[9]||(o[9]=d=>e.content.value.title=d)},null,8,["name","modelValue"]),h(Y,{class:"w-full",name:`${e.content.id}-url`,label:"Knop link",modelValue:e.content.value.url,"onUpdate:modelValue":o[10]||(o[10]=d=>e.content.value.url=d)},null,8,["name","modelValue"]),h(ge,{class:"w-full",name:`${e.content.id}-severity`,label:"Knop kleur",modelValue:e.content.value.severity,"onUpdate:modelValue":o[11]||(o[11]=d=>e.content.value.severity=d),options:[{value:"primary",label:"Primair"},{value:"secondary",label:"Secundair"},{value:"help",label:"Help"}]},null,8,["name","modelValue"])])):e.content.isWidget()?(a(),u("div",Co," Deze widget toont automatisch de gekoppelde "+A(e.content.getLabel().toLowerCase())+" van deze blogpost. Het label overschrijft de standaardtitel in de widget. ",1)):q("",!0),h(Y,{name:`${e.content.id}-label`,label:"Label",modelValue:e.content.label,"onUpdate:modelValue":o[12]||(o[12]=d=>e.content.label=d)},null,8,["name","modelValue"]),h(ge,{name:`${e.content.id}-alignment`,label:"Uitlijning","model-value":e.content.alignment??"center","onUpdate:modelValue":o[13]||(o[13]=d=>e.content.alignment=d),options:c(fn)},null,8,["name","model-value","options"])]))}}),Lo=j({__name:"BlogPostContentBlockMutationDialog",props:{isOpen:{type:Boolean},content:{},id:{}},emits:["close"],setup(e,{emit:t}){const n=t;return(l,r)=>e.content?(a(),v(Me,{key:0,"is-open":e.isOpen,title:`${e.content.getLabel()} bewerken`,description:"Waarde, uitlijning en optionele label van dit contentblok.","confirm-text":"Sluiten","hide-cancel-button":"",onConfirm:r[0]||(r[0]=i=>n("close")),onCancel:r[1]||(r[1]=i=>n("close"))},{default:V(()=>[h(Vo,{id:e.id,content:e.content},null,8,["id","content"])]),_:1},8,["is-open","title"])):q("",!0)}}),Bo={class:"w-full flex flex-col gap-3"},Do={key:0,class:"pointer-events-none absolute inset-0 flex items-center justify-center rounded-primary border border-dashed border-surface-300 px-4 py-6 text-center text-sm surface-text-muted"},To={class:"surface-panel-soft rounded-primary px-3 py-2"},Oo={class:"flex w-full items-center justify-between gap-3"},Ao={class:"flex gap-5"},Eo={class:"flex flex-col items-start"},Uo={class:"font-semibold"},jo={class:"surface-text-muted text-sm"},zo={key:1,class:"w-full flex items-center gap-3 justify-between"},No={class:"flex items-center gap-5"},Ro={class:"flex flex-col items-start"},Ho={class:"font-semibold"},Ko={class:"surface-text-muted text-sm"},Mo={class:"flex flex-col gap-1"},Fo={class:"mt-3 flex flex-wrap gap-3 justify-center"},Go={class:"flex flex-col justify-center items-center gap-3"},be="blog-post-content-block-clipboard",Wo=j({__name:"BlogPostContentBlocksDialog",props:Te({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Te(["delete"],["update:modelValue"]),setup(e){const t=kt(e,"modelValue"),n=U("title"),l=U(null),r=U(!1),i=U(z()),o=()=>{const p=_e.createInstance(et(),n.value,n.value,"center");t.value.push(p),l.value=p.id,r.value=!1},d=p=>{const C=t.value.findIndex(S=>S.id===p);t.value.splice(C,1)},s=w(()=>t.value.find(p=>p.id===l.value)??null),b={name:"blog-post-content",pull:!0,put:!0},g=p=>{l.value=p},x=()=>{l.value=null},B=()=>{r.value=!0},T=()=>{r.value=!1};function z(){return!!localStorage.getItem(be)}function E(p){return p instanceof Date?{__type:"date",value:p.toISOString()}:Array.isArray(p)?p.map(E):p&&typeof p=="object"?Object.fromEntries(Object.entries(p).map(([C,S])=>[C,E(S)])):p}function y(p){return Array.isArray(p)?p.map(y):p&&typeof p=="object"?"__type"in p&&p.__type==="date"&&"value"in p&&typeof p.value=="string"?new Date(p.value):Object.fromEntries(Object.entries(p).map(([C,S])=>[C,y(S)])):p}function I(p){return p.id=et(),p.isGroup()&&p.value.forEach(I),p}function O(p){const C={version:1,block:E(p.serialize())};localStorage.setItem(be,JSON.stringify(C)),i.value=!0,J.success(`Content '${R(p)}' gekopieerd`)}function P(){const p=localStorage.getItem(be);if(!p){i.value=!1,J.warning("Er staat nog geen contentblok klaar om te plakken");return}try{const C=JSON.parse(p);if(C.version!==1||!C.block)throw new Error("Invalid content clipboard payload");const S=y(C.block),k=I(_e.deserialize(S));t.value.push(k),i.value=!0,J.success(`Content '${R(k)}' geplakt`)}catch{i.value=!1,localStorage.removeItem(be),J.error("Het gekopieerde contentblok kon niet worden geplakt")}}const N=p=>{const C=p.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return C.length>80?`${C.slice(0,77)}...`:C},R=p=>p.label?`${p.label} (${p.getLabel().toLowerCase()})`:p.getLabel(),L=p=>p.isGroup()?p.value.length?p.value.length===1?"1 onderdeel":`${p.value.length} onderdelen`:"Lege sectie":p.isBoolean()?p.value?"Ingeschakeld":"Uitgeschakeld":p.isNumber()?`${p.value}%`:p.isString()?p.type==="coverimage"||p.type==="image"?p.value?"Afbeelding geselecteerd":"Nog geen afbeelding geselecteerd":p.value?N(p.value):"Nog geen inhoud ingevuld":p.isStringList()?p.value.length?`${p.value.length} items`:"Nog geen items toegevoegd":p.isDate()?p.value?ne(new Date(p.value)):"Nog geen datum geselecteerd":p.isButton()?p.value.title||p.value.url||"Nog geen knop ingevuld":p.isWidget()?`Widget: ${p.getLabel().toLowerCase()}`:p.getLabel();return(p,C)=>{const S=Q("BlogPostContentBlocksDialog",!0);return a(),u("div",Bo,[m("div",{class:K(["relative",{"min-h-24":!t.value.length}])},[t.value.length?q("",!0):(a(),u("div",Do," Sleep content hierheen om deze sectie te vullen. ")),h(c(Fe),{ref:"draggableRef",class:K(["relative flex flex-col gap-3",{"min-h-24":!t.value.length}]),modelValue:t.value,"onUpdate:modelValue":C[1]||(C[1]=k=>t.value=k),itemKey:k=>k.id,group:b,handle:".drag-handle"},{item:V(({element:k})=>[m("div",To,[k.isGroup()?(a(),v(c(Ke),{key:0,class:"w-full",onTabOpen:c(Ne)},{default:V(()=>[h(c(qe),{value:"0"},{default:V(()=>[h(c(ye),{class:"drag-handle"},{default:V(()=>[m("div",Oo,[m("div",Ao,[C[3]||(C[3]=m("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),m("div",Eo,[m("p",Uo,A(R(k)),1),m("p",jo,A(L(k)),1)])]),m("div",{class:"flex gap-1 mr-3",onClick:C[0]||(C[0]=ft(()=>{},["stop"]))},[h(F,{severity:"secondary",icon:"pi pi-copy",text:"",rounded:"",onClick:$=>O(k)},null,8,["onClick"]),h(Oe,{onClick:$=>g(k.id)},null,8,["onClick"]),h(le,{onClick:$=>d(k.id)},null,8,["onClick"])])])]),_:2},1024),h(c(ke),null,{default:V(()=>[h(S,{id:k.id,modelValue:k.value,"onUpdate:modelValue":$=>k.value=$,onDelete:$=>d(k.id)},null,8,["id","modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onTabOpen"])):(a(),u("div",zo,[m("div",No,[C[4]||(C[4]=m("i",{class:"drag-handle pi pi-arrows-v hover:cursor-pointer"},null,-1)),m("div",Ro,[m("p",Ho,A(R(k)),1),m("p",Ko,A(L(k)),1)])]),m("div",Mo,[h(F,{severity:"secondary",icon:"pi pi-copy",text:"",rounded:"",onClick:$=>O(k)},null,8,["onClick"]),h(Oe,{onClick:$=>g(k.id)},null,8,["onClick"]),h(le,{onClick:$=>d(k.id)},null,8,["onClick"])])]))])]),_:1},8,["class","modelValue","itemKey"])],2),h(Lo,{id:e.id,"is-open":!!s.value,content:s.value,onClose:x},null,8,["id","is-open","content"]),m("div",Fo,[h(F,{label:"Plak gekopieerde content",severity:"secondary",icon:"pi pi-clone",disabled:!i.value,onClick:P},null,8,["disabled"]),h(Pt,{label:"Voeg content toe",onClick:B})]),h(Me,{"is-open":r.value,title:"Content toevoegen",description:"Kies eerst het type contentblok. Daarna opent direct de editor van het nieuwe blok.",onCancel:T,onConfirm:o,"confirm-text":"Toevoegen"},{default:V(()=>[m("div",Go,[h(ge,{class:"w-full md:w-1/2",name:`${e.id}.contentType`,label:"Content type",modelValue:n.value,"onUpdate:modelValue":C[2]||(C[2]=k=>n.value=k),options:Object.entries(c(hn)).map(([k,$])=>({value:k,label:$}))},null,8,["name","modelValue","options"])])]),_:1},8,["is-open"])])}}}),Yo=j({__name:"BlogPostContentDialog",emits:["update:selected"],setup(e){const t=ue(),{blogPostMutation:n}=H(t),l=w(()=>({title:{required:xt,minLength:kn(3),maxLength:yn(50)}})),r=Ce(l,n);return(i,o)=>(a(),u(D,null,[h(Y,{class:"w-full",name:"title",label:"Titel",placeholder:"Geweldige Post",modelValue:c(n).title,"onUpdate:modelValue":o[0]||(o[0]=d=>c(n).title=d),error:c(r).title.$error?c(He)(c(r).title):"",required:"","min-length":3,"max-length":50},null,8,["modelValue","error"]),h(Wo,{modelValue:c(n).content,"onUpdate:modelValue":o[1]||(o[1]=d=>c(n).content=d)},null,8,["modelValue"])],64))}}),Qo=j({__name:"BlogPostSettingsDialog",setup(e){const t=Se(),n=ue(),{blogPostMutation:l}=H(n),{allowedPublicUsers:r}=t,{mappedUsers:i}=Hn(),o=w({get(){return!!l.value.datePinned},set(x){l.value.datePinned=x?new Date:null}}),d=U([]),s=wn.withMessage("Invalid user ID's",x=>!x.length||x.length===d.value.length),b=w(()=>({allowedUserIds:{validAllowedUserIds:s}})),g=Ce(b,l);return Ie(()=>l.value.allowedUserIds,async x=>{d.value=await r(x)},{immediate:!0}),(x,B)=>(a(),u(D,null,[h(ge,{class:"w-full md:w-1/2",name:"allowedUserIds",label:"Toegestane gebruikers",placeholder:"Dit bericht is openbaar",modelValue:c(l).allowedUserIds,"onUpdate:modelValue":B[0]||(B[0]=T=>c(l).allowedUserIds=T),error:c(g).allowedUserIds.$error?c(He)(c(g).allowedUserIds):"",options:c(i),multiple:""},null,8,["modelValue","error","options"]),h(fe,{class:"w-full md:w-1/2",name:"pinned",label:"Vastgemaakt",modelValue:o.value,"onUpdate:modelValue":B[1]||(B[1]=T=>o.value=T)},null,8,["modelValue"]),h(fe,{class:"w-full md:w-1/2",name:"locked",label:"Gesloten voor reacties",modelValue:c(l).locked,"onUpdate:modelValue":B[2]||(B[2]=T=>c(l).locked=T)},null,8,["modelValue"]),h(fe,{class:"w-full md:w-1/2",name:"archived",label:"Gearchiveerd",modelValue:c(l).archived,"onUpdate:modelValue":B[3]||(B[3]=T=>c(l).archived=T)},null,8,["modelValue"])],64))}}),Xo={ref:"dialog",class:"pt-6 mb-4 xl:px-16"},xa=j({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:t}){const n=t,l=we(),r=vn(),i=ue(),{isBlogPostsMutationLoading:o}=H(l),{isOpen:d,blogPostOriginal:s,blogPostMutation:b,hasChanges:g}=H(i),x=Ce(),B=w(()=>!!s.value?.allowedUserIds?.length&&!b.value.allowedUserIds?.length||!s.value?.allowedUserIds?.length&&!!b.value.allowedUserIds?.length),T=w(()=>pt(s.value)),z=async()=>{await x.value.$validate()&&(s.value?B.value?(i.isOpen=!1,await l.toggleBlogPostVisibility(s.value,b.value.allowedUserIds.length?"private":"public")&&(i.close(),J.success("Zichtbaarheid van bericht succesvol bijgewerkt"),n("scroll-to-updated",b.value.id))):await l.updateBlogPost(b.value,T.value)&&(J.success("Bericht succesvol bijgewerkt"),i.close(),n("scroll-to-updated",b.value.id)):await l.createBlogPost(b.value)&&(i.close(),n("scroll-to-updated",b.value.id)))},E=async()=>{await r.deleteFilesOfBlogPost(b.value,s.value??void 0),i.close()};return(y,I)=>(a(),v(Me,{isOpen:c(d),title:c(s)?"Bericht bijwerken":"Bericht maken",description:c(s)?"Werk dit bericht bij":"Maak een nieuw bericht","confirm-text":c(s)?"Bijwerken":"Maken","confirm-loading":c(o),"confirm-props":{disabled:!c(g)},onConfirm:z,onCancel:E},{default:V(()=>[m("form",Xo,[c(d)?(a(),v(c(Ke),{key:0,"active-index":0,onTabOpen:c(Ne)},{default:V(()=>[h(c(qe),{value:"content"},{default:V(()=>[h(c(ye),null,{default:V(()=>[...I[0]||(I[0]=[De(" Content ",-1)])]),_:1}),h(c(ke),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:V(()=>[h(Yo)]),_:1})]),_:1}),h(c(qe),{value:"settings"},{default:V(()=>[h(c(ye),null,{default:V(()=>[...I[1]||(I[1]=[De(" Instellingen ",-1)])]),_:1}),h(c(ke),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:V(()=>[h(Qo)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):q("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading","confirm-props"]))}});export{wa as _,xa as a,ue as b,Ai as c,Ti as d,ka as u};
