import{A as e,Ai as t,Br as n,D as r,Dn as i,Dr as a,Ft as o,Hr as s,Ht as c,Ir as l,Jn as u,Kr as d,Lr as f,Mr as p,Mt as m,Ni as h,O as g,Oi as _,Ot as v,Pt as y,Qr as b,Rr as x,Tr as S,Tt as ee,Un as te,Ur as ne,Vn as C,Vr as w,Wr as T,Yr as E,Zr as D,_r as O,ai as k,b as A,br as j,c as M,cr as N,ct as P,gr as F,ht as I,i as L,ii as re,jr as R,kn as z,lr as B,o as V,si as H,sr as U,ur as ie,vr as W,x as G,xr as K,yn as ae,yr as q}from"../bundle.js";import{a as oe,i as se,n as ce,r as le,t as ue}from"./c-Dialog.js";import{n as J,t as de}from"./c-card.js";import{t as fe}from"./c-TextField.js";import{t as Y}from"./c-SwitchField.js";var pe={class:`container mx-auto text-center`},me=`border-x-0 border-b-0 py-4`,he=a({__name:`Footer`,setup(e){return(e,t)=>(x(),K(`footer`,{class:_(me)},[W(`div`,pe,[W(`p`,null,`© `+h(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}}),ge=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,_e={class:`flex justify-between max-sm:pt-10`},ve={class:`hidden sm:block w-full sm:min-w-fit`},ye=[`alt`],be={class:`w-fit sm:max-w-1/2`},xe={class:`text-title-primary`},Se={class:`text-title-secondary`},Ce={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},we={class:`sm:hidden min-w-fit mt-3`},Te=[`alt`],Ee=`surface-panel-glass`,De=a({__name:`HeaderContent`,setup(e){let{routeLoading:t}=u(o());return(e,n)=>{let r=s(`RouterLink`);return x(),K(`div`,_e,[W(`div`,ve,[S(r,{to:{name:H(U).HOME}},{default:D(()=>[W(`img`,{class:_([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":H(t)===H(U).HOME}]),src:ge,alt:H(B).name},null,10,ye)]),_:1},8,[`to`])]),W(`div`,be,[W(`h1`,xe,h(H(B).name),1),W(`h2`,Se,h(H(B).service),1),W(`div`,Ce,[S(H(V),{class:_(Ee),icon:`pi pi-briefcase`,label:H(B).role},null,8,[`label`]),S(H(V),{class:_(Ee),icon:`pi pi-map-marker`,label:`${H(B).location.city}, ${H(B).location.country}`},null,8,[`label`])])]),W(`div`,we,[S(r,{to:{name:H(U).HOME}},{default:D(()=>[W(`img`,{class:_([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":H(t)===H(U).HOME}]),src:ge,alt:H(B).name},null,10,Te)]),_:1},8,[`to`])])])}}}),Oe=()=>{let e=y(),t=c(),n=C(),r=i(),{firebaseUser:a}=u(e),{houseHolds:o,activeHouseHold:s}=u(t),{activeHouseHoldId:l}=u(n),{publicUsers:d}=u(r),f=O(()=>d.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),p=O(()=>[{value:null,label:`Geen huishouden`},...[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),m=O(()=>[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),h=O(()=>s.value),g=O(()=>h.value?.id??m.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),_=e=>e?o.value.find(t=>t.id===e)??null:null,v=e=>{let t=_(e);return t?t.getUserOptions(f.value):[]};return{houseHoldOptions:p,requiredHouseHoldOptions:m,activeHouseHoldId:l,currentUsersHouseHold:h,defaultHouseHoldId:g,getHouseHoldById:_,getHouseHoldUserOptions:v,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...v(e)],getDefaultUserId:e=>_(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>_(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>_(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}},ke=a({__name:`NumberField`,props:R({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=d(e,`modelValue`),r=k(``);function i(){n.value=parseFloat(r.value)||0}return E(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(x(),q(fe,p(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),Ae={key:0,class:`inline-flex`},je={class:`my-5 flex flex-col gap-5`},Me={class:`flex flex-col gap-3`},Ne={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Pe={class:`flex flex-col gap-1`},Fe={class:`text-base font-semibold text-title-secondary`},Ie={key:0,class:`text-sm text-title-tertiary`},Le={key:0,class:`flex flex-col gap-3`},Re={key:1,class:`flex flex-col gap-3`},ze={key:2,class:`flex flex-col gap-4`},Be={key:0,class:`flex flex-col gap-3`},Ve={key:1,class:`flex flex-col gap-3`},He={key:2,class:`flex flex-col gap-3`},Ue={key:3,class:`text-sm text-title-tertiary`},We=a({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,n=m(),r=y(),i=C(),{personalSettings:a,isFetchLoading:o,isMutationLoading:s}=u(i),{firebaseUser:c,isOwner:l}=u(r),{houseHoldOptions:d,activeHouseHoldId:f}=Oe(),p=k(!1),g=k(null),v=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],b=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],ee=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],ne={[U.TASKS]:`tasks`,[U.PRODUCTS]:`products`,[U.GAMES]:`games`,[N.GAMES_YAHTZEE]:`games`,[N.GAMES_YAHTZEE_RAINBOW]:`games`,[N.GAMES_RAINWORMS]:`games`,[N.GAMES_PATIENCE]:`games`,[N.GAMES_HANGMAN]:`games`},w=O(()=>{let e=n.name?.toString();return e?ne[e]:void 0}),T=O(()=>n.name?.toString()),M=O(()=>w.value===`games`),P=O(()=>[N.GAMES_YAHTZEE,N.GAMES_YAHTZEE_RAINBOW].includes(T.value)),I=O(()=>T.value===N.GAMES_RAINWORMS),L=O(()=>T.value===N.GAMES_PATIENCE),R=O(()=>{switch(w.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(T.value){case N.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case N.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case N.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case N.GAMES_PATIENCE:return`Instellingen voor Patience:`;case N.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle spellen:`}default:return}}),z=O(()=>`surface-panel-glass shadow-md md:shadow-none`),B=re(V());function V(){return a.value?a.value.clone():te.create(c.value?.uid??``)}function ie(){Object.assign(B,V()),g.value=f.value}async function G(){let e=c.value?.uid;if(!e)return;let t=B.clone();i.setActiveHouseHoldId(g.value),await i.updatePersonalSettings(e,t),p.value=!1}return E(p,e=>{e&&ie()},{immediate:!0}),(e,n)=>(x(),K(F,null,[H(c)?(x(),K(`div`,Ae,[S(A,{class:_([z.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:H(o),severity:`secondary`,onClick:n[0]||=e=>p.value=!0},null,8,[`class`,`label`,`loading`])])):j(``,!0),S(ue,{isOpen:p.value,title:`Persoonlijke instellingen`,description:``,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:H(s),onConfirm:G,onCancel:n[13]||=e=>p.value=!1},{default:D(()=>[W(`div`,je,[W(`div`,Me,[S(J,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:v,required:``,modelValue:B.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>B.primeVueTheme=e},null,8,[`modelValue`]),H(l)?(x(),q(J,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:H(d),modelValue:g.value,"onUpdate:modelValue":n[2]||=e=>g.value=e},null,8,[`options`,`modelValue`])):j(``,!0)]),W(`div`,Ne,[W(`div`,Pe,[W(`div`,Fe,h(R.value??`Pagina-instellingen`),1),w.value?j(``,!0):(x(),K(`p`,Ie,` Geen `))]),w.value===`tasks`?(x(),K(`div`,Le,[S(Y,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:B.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>B.tasks.showDifficulty=e},null,8,[`modelValue`]),S(Y,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:B.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>B.tasks.showCategories=e},null,8,[`modelValue`])])):w.value===`products`?(x(),K(`div`,Re,[S(ke,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:B.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>B.products.amountOfDaysToShow=e},null,8,[`modelValue`]),S(Y,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:B.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>B.products.showPromotions=e},null,8,[`modelValue`]),S(Y,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:B.products.showCategory,"onUpdate:modelValue":n[7]||=e=>B.products.showCategory=e},null,8,[`modelValue`]),S(Y,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:B.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>B.products.showSubcategory=e},null,8,[`modelValue`])])):w.value===`games`?(x(),K(`div`,ze,[M.value||P.value?(x(),K(`div`,Be,[M.value?(x(),q(Y,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:B.games.useAudio,"onUpdate:modelValue":n[9]||=e=>B.games.useAudio=e},null,8,[`modelValue`])):j(``,!0),P.value?(x(),q(J,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:b,modelValue:B.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>B.games.diceRollSpeed=e},null,8,[`modelValue`])):j(``,!0)])):j(``,!0),I.value?(x(),K(`div`,Ve,[n[14]||=W(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),S(J,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:ee,modelValue:B.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>B.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):j(``,!0),L.value?(x(),K(`div`,He,[n[15]||=W(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),S(Y,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:B.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>B.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):j(``,!0),!M.value&&!P.value&&!I.value&&!L.value?(x(),K(`p`,Ue,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):j(``,!0)])):j(``,!0)])])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),Ge={key:0,class:`hidden lg:block`},Ke={class:`grid grid-cols-2 gap-2`},X=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,qe=a({__name:`NavigationMenuDesktop`,setup(e){let t=y(),r=o(),{isLoggedIn:i,isLogoutLoading:a}=u(t),{visibleMenuItems:s,routeLoading:c}=u(r);return(e,r)=>H(s).length?(x(),K(`div`,Ge,[W(`div`,Ke,[(x(!0),K(F,null,n(H(s),e=>(x(),q(A,{key:e.id,class:_(X),outlined:``,href:e.url,route:e.route,loading:e.loading||H(c)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),H(i)?(x(),q(A,{key:0,class:_([X,`!rounded-full`]),severity:`danger`,outlined:``,loading:H(a),label:`Uitloggen`,onClick:H(t).logout},null,8,[`class`,`loading`,`onClick`])):(x(),q(A,{key:1,class:_([X,`!rounded-full`]),severity:`info`,outlined:``,route:H(U).LOGIN,loading:H(c)===H(U).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):j(``,!0)}}),Je={class:`hidden lg:flex items-center gap-4 mb-4`},Ye={class:`hidden lg:block flex-1 space-y-2`},Xe={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},Ze={class:`font-semibold text-base first:font-bold first:text-lg`},Qe={key:0,class:`shrink-0 flex items-center gap-2`},$e=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,et=a({__name:`NavigationCardDesktop`,setup(e){let t=y(),r=z(),{isLoggedIn:i}=u(t),{currentUser:a}=u(r);return(e,t)=>(x(),q(H(de),{class:_($e)},{content:D(()=>[W(`div`,Je,[W(`div`,Ye,[H(a)?(x(!0),K(F,{key:0},n([`Welkom terug, ${H(a).firstName+(H(a).lastName?` `+H(a).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(x(),K(`p`,Xe,h(e),1))),256)):(x(),K(F,{key:1},n([`Welkom op mijn portfolio- en blogwebsite!`],e=>W(`p`,Ze,h(e),1)),64))]),H(i)?(x(),K(`div`,Qe,[S(We,{"icon-only":``,"button-class":`shrink-0 !p-6`}),S(A,{class:`shrink-0 !p-6`,route:H(U).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:D(()=>[...t[0]||=[W(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):j(``,!0)]),S(qe)]),_:1}))}}),tt=g.extend({name:`drawer`,style:`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),nt={name:`BaseDrawer`,extends:r,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:tt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e,t,n){return(t=rt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e){var t=it(e,`string`);return Z(t)==`symbol`?t:t+``}function it(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $={name:`Drawer`,extends:nt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&e.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&e.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&P(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&e.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&I(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ce()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&le()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ee(Q(Q(Q({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:se},components:{Button:G,Portal:L,TimesIcon:M}},at=[`data-p`],ot=[`role`,`aria-modal`,`data-p`];function st(e,t,n,r,i,a){var o=s(`Button`),c=s(`Portal`),l=ne(`focustrap`);return x(),q(c,null,{default:D(function(){return[i.containerVisible?(x(),K(`div`,p({key:0,ref:a.maskRef,onMousedown:t[0]||=function(){return a.onMaskClick&&a.onMaskClick.apply(a,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":a.dataP},e.ptm(`mask`)),[S(ie,p({name:`p-drawer`,onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:D(function(){return[e.visible?b((x(),K(`div`,p({key:0,ref:a.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":a.dataP},e.ptmi(`root`)),[e.$slots.container?w(e.$slots,`container`,{key:0,closeCallback:a.hide}):(x(),K(F,{key:1},[W(`div`,p({ref:a.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[w(e.$slots,`header`,{class:_(e.cx(`title`))},function(){return[e.header?(x(),K(`div`,p({key:0,class:e.cx(`title`)},e.ptm(`title`)),h(e.header),17)):j(``,!0)]}),e.showCloseIcon?w(e.$slots,`closebutton`,{key:0,closeCallback:a.hide},function(){return[S(o,p({ref:a.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":a.closeAriaLabel,unstyled:e.unstyled,onClick:a.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:D(function(t){return[w(e.$slots,`closeicon`,{},function(){return[(x(),q(T(e.closeIcon?`span`:`TimesIcon`),p({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):j(``,!0)],16),W(`div`,p({ref:a.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[w(e.$slots,`default`)],16),e.$slots.footer?(x(),K(`div`,p({key:0,ref:a.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[w(e.$slots,`footer`)],16)):j(``,!0)],64))],16,ot)),[[l]]):j(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,at)):j(``,!0)]}),_:3})}$.render=st;var ct={class:`flex flex-col gap-2 pb-4`},lt=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,ut=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,dt=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,ft=`surface-panel-glass`,pt=a({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){let r=e,i=y(),a=o(),s=m(),{isLoggedIn:c}=u(i),{visibleMenuItems:l,routeLoading:d}=u(a),{logout:f}=i,p={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},h=O({get:()=>r.isOpen,set:e=>{e!==r.isOpen&&r.toggle()}}),g=e=>{if(!e)return!1;let t=v.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?s.fullPath===`/`:s.fullPath.startsWith(n)};return(r,i)=>(x(),q(H($),{visible:h.value,"onUpdate:visible":i[1]||=e=>h.value=e,position:`right`,class:_(ut),"show-close-icon":!0},{default:D(()=>[W(`div`,ct,[(x(!0),K(F,null,n(H(l),n=>(x(),q(A,{key:n.id,class:_([`w-full`,lt,g(n.route)?dt:ft]),severity:`secondary`,outlined:!g(n.route),style:t(g(n.route)?p:void 0),fluid:``,href:n.url,route:n.route,loading:n.loading||H(d)===n.route,label:n.name,onClick:e.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),H(c)?(x(),K(F,{key:0},[S(A,{class:_([`w-full`,lt,ft]),severity:`secondary`,outlined:``,fluid:``,route:H(U).DASHBOARD,loading:H(d)===H(U).DASHBOARD,label:`Dashboard`,onClick:e.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),S(A,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:i[0]||=t=>{H(f)(),e.toggle()}})],64)):(x(),q(A,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:H(U).LOGIN,loading:H(d)===H(U).LOGIN,label:`Inloggen`,onClick:e.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}}),mt={class:`flex items-center gap-2`},ht=a({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=u(y()),n=k(!1),r=k(!0),i=window.scrollY,a=()=>{n.value=!n.value};function o(){let e=window.scrollY;e>i+10?r.value=!1:e<i-10&&(r.value=!0),i=e}return l(()=>{window.addEventListener(`scroll`,o)}),f(()=>{window.removeEventListener(`scroll`,o)}),(e,i)=>(x(),K(F,null,[W(`div`,{class:_([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[W(`div`,mt,[H(t)?(x(),q(We,{key:0,"icon-only":``})):j(``,!0),S(H(G),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:a})])],2),S(pt,{"is-open":n.value,toggle:a},null,8,[`is-open`])],64))}}),gt={class:`sm:flex sm:items-start sm:justify-between mb-20`},_t={class:`hidden lg:flex justify-end`},vt={class:`lg:hidden w-full sm:w-1/3`},yt=a({__name:`Header`,setup(e){return(e,t)=>(x(),K(`div`,gt,[S(De,{class:`hidden sm:block`}),W(`div`,_t,[S(et)]),W(`div`,vt,[S(ht)]),S(De,{class:`sm:hidden`})]))}}),bt=a({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=m(),{isDarkTheme:r}=oe(),i=k(),a=O(()=>r.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),o=O(()=>r.value?`surface-panel-soft`:`surface-panel`),s=()=>{t.scrollToContent&&ae(i.value)};return l(()=>{s()}),E(()=>n.fullPath,()=>{s()}),(e,t)=>(x(),K(`div`,{class:_([`min-h-screen flex flex-col`,a.value])},[W(`div`,{class:_([`container py-5 rounded-b-secondary flex-1`,o.value])},[W(`header`,null,[e.$slots.header?w(e.$slots,`header`,{key:0}):(x(),q(yt,{key:1}))]),W(`main`,null,[W(`div`,{ref_key:`content`,ref:i},[w(e.$slots,`content`)],512)])],2),W(`footer`,null,[e.$slots.footer?w(e.$slots,`footer`,{key:0}):(x(),q(he,{key:1}))])],2))}});export{ke as n,Oe as r,bt as t};