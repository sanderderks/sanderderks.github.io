import{Ai as e,At as t,Br as n,Cn as r,Ct as i,D as a,Dr as o,Hr as s,Ir as c,It as l,Kr as u,Lr as d,Lt as f,Mr as p,Ni as m,Nn as h,Oi as g,Pt as _,Qr as v,Rr as y,S as b,Tr as x,Ur as ee,Vr as S,Wr as te,Wt as C,Y as w,Yr as T,Zn as E,Zr as D,_r as O,ai as k,br as A,c as j,cr as M,ft as N,gr as P,ii as ne,jn as F,jr as I,lr as L,nt as re,o as R,si as z,sr as B,u as V,ur as ie,vr as H,wt as ae,x as oe,xr as U,yr as W}from"../bundle.js";import{n as se,t as ce}from"./c-Dialog.js";import{i as le,n as ue,r as de}from"./c-dialog2.js";import{a as G,i as K,t as q}from"./c-SelectField.js";import{t as fe}from"./c-TextField.js";import{t as J}from"./c-SwitchField.js";import{t as pe}from"./c-card.js";var me={class:`container mx-auto text-center`},he=`border-x-0 border-b-0 py-4`,ge=o({__name:`Footer`,setup(e){return(e,t)=>(y(),U(`footer`,{class:g(he)},[H(`div`,me,[H(`p`,null,`© `+m(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}}),_e=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ve={class:`flex justify-between max-sm:pt-10`},ye={class:`hidden sm:block w-full sm:min-w-fit`},be=[`alt`],xe={class:`w-fit sm:max-w-1/2`},Se={class:`text-title-primary`},Ce={class:`text-title-secondary`},we={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Te={class:`sm:hidden min-w-fit mt-3`},Ee=[`alt`],De=`surface-panel-glass`,Oe=o({__name:`HeaderContent`,setup(e){let{routeLoading:t}=E(f());return(e,n)=>{let r=s(`RouterLink`);return y(),U(`div`,ve,[H(`div`,ye,[x(r,{to:{name:z(B).HOME}},{default:D(()=>[H(`img`,{class:g([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":z(t)===z(B).HOME}]),src:_e,alt:z(L).name},null,10,be)]),_:1},8,[`to`])]),H(`div`,xe,[H(`h1`,Se,m(z(L).name),1),H(`h2`,Ce,m(z(L).service),1),H(`div`,we,[x(z(j),{class:g(De),icon:`pi pi-briefcase`,label:z(L).role},null,8,[`label`]),x(z(j),{class:g(De),icon:`pi pi-map-marker`,label:`${z(L).location.city}, ${z(L).location.country}`},null,8,[`label`])])]),H(`div`,Te,[x(r,{to:{name:z(B).HOME}},{default:D(()=>[H(`img`,{class:g([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":z(t)===z(B).HOME}]),src:_e,alt:z(L).name},null,10,Ee)]),_:1},8,[`to`])])])}}}),ke=()=>{let e=l(),t=C(),n=i(),r=F(),{firebaseUser:a}=E(e),{houseHolds:o,activeHouseHold:s}=E(t),{activeHouseHoldId:c}=E(n),{publicUsers:u}=E(r),d=O(()=>u.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),f=O(()=>[{value:null,label:`Geen huishouden`},...[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),p=O(()=>[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),m=O(()=>s.value),h=O(()=>m.value?.id??p.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),g=e=>e?o.value.find(t=>t.id===e)??null:null,_=e=>{let t=g(e);return t?t.getUserOptions(d.value):[]};return{houseHoldOptions:f,requiredHouseHoldOptions:p,activeHouseHoldId:c,currentUsersHouseHold:m,defaultHouseHoldId:h,getHouseHoldById:g,getHouseHoldUserOptions:_,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},..._(e)],getDefaultUserId:e=>g(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>g(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>g(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}},Ae=o({__name:`NumberField`,props:I({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=u(e,`modelValue`),r=k(``);function i(){n.value=parseFloat(r.value)||0}return T(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(y(),W(fe,p(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),je={key:0,class:`inline-flex`},Me={class:`my-5 flex flex-col gap-5`},Ne={class:`flex flex-col gap-3`},Pe={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Fe={class:`flex flex-col gap-1`},Ie={class:`text-base font-semibold text-title-secondary`},Le={key:0,class:`text-sm text-title-tertiary`},Re={key:0,class:`flex flex-col gap-3`},ze={key:1,class:`flex flex-col gap-3`},Be={key:2,class:`flex flex-col gap-4`},Ve={key:0,class:`flex flex-col gap-3`},He={key:1,class:`flex flex-col gap-3`},Ue={key:2,class:`flex flex-col gap-3`},We={key:3,class:`text-sm text-title-tertiary`},Ge=o({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,n=_(),r=l(),a=i(),{personalSettings:o,isFetchLoading:s,isMutationLoading:c}=E(a),{firebaseUser:u,isOwner:d}=E(r),{houseHoldOptions:f,activeHouseHoldId:p}=ke(),h=k(!1),v=k(null),b=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],ee=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],S=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],te={[B.TASKS]:`tasks`,[B.PRODUCTS]:`products`,[B.GAMES]:`games`,[M.GAMES_YAHTZEE]:`games`,[M.GAMES_YAHTZEE_RAINBOW]:`games`,[M.GAMES_RAINWORMS]:`games`,[M.GAMES_PATIENCE]:`games`,[M.GAMES_HANGMAN]:`games`},C=O(()=>{let e=n.name?.toString();return e?te[e]:void 0}),w=O(()=>n.name?.toString()),j=O(()=>C.value===`games`),N=O(()=>[M.GAMES_YAHTZEE,M.GAMES_YAHTZEE_RAINBOW].includes(w.value)),F=O(()=>w.value===M.GAMES_RAINWORMS),I=O(()=>w.value===M.GAMES_PATIENCE),L=O(()=>{switch(C.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(w.value){case M.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case M.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case M.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case M.GAMES_PATIENCE:return`Instellingen voor Patience:`;case M.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle spellen:`}default:return}}),re=O(()=>`surface-panel-glass shadow-md md:shadow-none`),R=ne(V());function V(){return o.value?o.value.clone():ae.create(u.value?.uid??``)}function ie(){Object.assign(R,V()),v.value=p.value}async function oe(){let e=u.value?.uid;if(!e)return;let t=R.clone();a.setActiveHouseHoldId(v.value),await a.updatePersonalSettings(e,t),h.value=!1}return T(h,e=>{e&&ie()},{immediate:!0}),(e,n)=>(y(),U(P,null,[z(u)?(y(),U(`div`,je,[x(K,{class:g([re.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:z(s),severity:`secondary`,onClick:n[0]||=e=>h.value=!0},null,8,[`class`,`label`,`loading`])])):A(``,!0),x(ce,{isOpen:h.value,title:`Persoonlijke instellingen`,description:``,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:z(c),onConfirm:oe,onCancel:n[13]||=e=>h.value=!1},{default:D(()=>[H(`div`,Me,[H(`div`,Ne,[x(q,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:b,required:``,modelValue:R.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>R.primeVueTheme=e},null,8,[`modelValue`]),z(d)?(y(),W(q,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:z(f),modelValue:v.value,"onUpdate:modelValue":n[2]||=e=>v.value=e},null,8,[`options`,`modelValue`])):A(``,!0)]),H(`div`,Pe,[H(`div`,Fe,[H(`div`,Ie,m(L.value??`Pagina-instellingen`),1),C.value?A(``,!0):(y(),U(`p`,Le,` Geen `))]),C.value===`tasks`?(y(),U(`div`,Re,[x(J,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:R.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>R.tasks.showDifficulty=e},null,8,[`modelValue`]),x(J,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:R.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>R.tasks.showCategories=e},null,8,[`modelValue`])])):C.value===`products`?(y(),U(`div`,ze,[x(Ae,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:R.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>R.products.amountOfDaysToShow=e},null,8,[`modelValue`]),x(J,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:R.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>R.products.showPromotions=e},null,8,[`modelValue`]),x(J,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:R.products.showCategory,"onUpdate:modelValue":n[7]||=e=>R.products.showCategory=e},null,8,[`modelValue`]),x(J,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:R.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>R.products.showSubcategory=e},null,8,[`modelValue`])])):C.value===`games`?(y(),U(`div`,Be,[j.value||N.value?(y(),U(`div`,Ve,[j.value?(y(),W(J,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:R.games.useAudio,"onUpdate:modelValue":n[9]||=e=>R.games.useAudio=e},null,8,[`modelValue`])):A(``,!0),N.value?(y(),W(q,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:ee,modelValue:R.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>R.games.diceRollSpeed=e},null,8,[`modelValue`])):A(``,!0)])):A(``,!0),F.value?(y(),U(`div`,He,[n[14]||=H(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),x(q,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:S,modelValue:R.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>R.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):A(``,!0),I.value?(y(),U(`div`,Ue,[n[15]||=H(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),x(J,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:R.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>R.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):A(``,!0),!j.value&&!N.value&&!F.value&&!I.value?(y(),U(`p`,We,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):A(``,!0)])):A(``,!0)])])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),Ke={key:0,class:`hidden lg:block`},qe={class:`grid grid-cols-2 gap-2`},Y=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Je=o({__name:`NavigationMenuDesktop`,setup(e){let t=l(),r=f(),{isLoggedIn:i,isLogoutLoading:a}=E(t),{visibleMenuItems:o,routeLoading:s}=E(r);return(e,r)=>z(o).length?(y(),U(`div`,Ke,[H(`div`,qe,[(y(!0),U(P,null,n(z(o),e=>(y(),W(K,{key:e.id,class:g(Y),outlined:``,href:e.url,route:e.route,loading:e.loading||z(s)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),z(i)?(y(),W(K,{key:0,class:g([Y,`!rounded-full`]),severity:`danger`,outlined:``,loading:z(a),label:`Uitloggen`,onClick:z(t).logout},null,8,[`class`,`loading`,`onClick`])):(y(),W(K,{key:1,class:g([Y,`!rounded-full`]),severity:`info`,outlined:``,route:z(B).LOGIN,loading:z(s)===z(B).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):A(``,!0)}}),Ye={class:`hidden lg:flex items-center gap-4 mb-4`},Xe={class:`hidden lg:block flex-1 space-y-2`},Ze={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},Qe={class:`font-semibold text-base first:font-bold first:text-lg`},$e={key:0,class:`shrink-0 flex items-center gap-2`},et=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,tt=o({__name:`NavigationCardDesktop`,setup(e){let t=l(),r=h(),{isLoggedIn:i}=E(t),{currentUser:a}=E(r);return(e,t)=>(y(),W(z(pe),{class:g(et)},{content:D(()=>[H(`div`,Ye,[H(`div`,Xe,[z(a)?(y(!0),U(P,{key:0},n([`Welkom terug, ${z(a).firstName+(z(a).lastName?` `+z(a).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(y(),U(`p`,Ze,m(e),1))),256)):(y(),U(P,{key:1},n([`Welkom op mijn portfolio- en blogwebsite!`],e=>H(`p`,Qe,m(e),1)),64))]),z(i)?(y(),U(`div`,$e,[x(Ge,{"icon-only":``,"button-class":`shrink-0 !p-6`}),x(K,{class:`shrink-0 !p-6`,route:z(B).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:D(()=>[...t[0]||=[H(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):A(``,!0)]),x(Je)]),_:1}))}}),nt=b.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),rt={name:`BaseDrawer`,extends:oe,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:nt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=it(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=at(e,`string`);return X(t)==`symbol`?t:t+``}function at(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Drawer`,extends:rt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&a.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&a.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&w(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&a.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&re(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ue()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&de()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return N(Z(Z(Z({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:le},components:{Button:G,Portal:R,TimesIcon:V}},ot=[`data-p`],st=[`role`,`aria-modal`,`data-p`];function ct(e,t,n,r,i,a){var o=s(`Button`),c=s(`Portal`),l=ee(`focustrap`);return y(),W(c,null,{default:D(function(){return[i.containerVisible?(y(),U(`div`,p({key:0,ref:a.maskRef,onMousedown:t[0]||=function(){return a.onMaskClick&&a.onMaskClick.apply(a,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":a.dataP},e.ptm(`mask`)),[x(ie,p({name:`p-drawer`,onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:``},e.ptm(`transition`)),{default:D(function(){return[e.visible?v((y(),U(`div`,p({key:0,ref:a.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":a.dataP},e.ptmi(`root`)),[e.$slots.container?S(e.$slots,`container`,{key:0,closeCallback:a.hide}):(y(),U(P,{key:1},[H(`div`,p({ref:a.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[S(e.$slots,`header`,{class:g(e.cx(`title`))},function(){return[e.header?(y(),U(`div`,p({key:0,class:e.cx(`title`)},e.ptm(`title`)),m(e.header),17)):A(``,!0)]}),e.showCloseIcon?S(e.$slots,`closebutton`,{key:0,closeCallback:a.hide},function(){return[x(o,p({ref:a.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":a.closeAriaLabel,unstyled:e.unstyled,onClick:a.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:D(function(t){return[S(e.$slots,`closeicon`,{},function(){return[(y(),W(te(e.closeIcon?`span`:`TimesIcon`),p({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):A(``,!0)],16),H(`div`,p({ref:a.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[S(e.$slots,`default`)],16),e.$slots.footer?(y(),U(`div`,p({key:0,ref:a.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[S(e.$slots,`footer`)],16)):A(``,!0)],64))],16,st)),[[l]]):A(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,ot)):A(``,!0)]}),_:3})}Q.render=ct;var lt={class:`flex flex-col gap-2 pb-4`},ut=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,dt=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,ft=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,$=`surface-panel-glass`,pt=o({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(r){let i=r,a=l(),o=f(),s=_(),{isLoggedIn:c}=E(a),{visibleMenuItems:u,routeLoading:d}=E(o),{logout:p}=a,m={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},h=O({get:()=>i.isOpen,set:e=>{e!==i.isOpen&&i.toggle()}}),v=e=>{if(!e)return!1;let n=t.find(t=>t.name===e);if(!n)return!1;let r=n.path.split(`/:`)[0];return r===`/`?s.fullPath===`/`:s.fullPath.startsWith(r)};return(t,i)=>(y(),W(z(Q),{visible:h.value,"onUpdate:visible":i[1]||=e=>h.value=e,position:`right`,class:g(dt),"show-close-icon":!0},{default:D(()=>[H(`div`,lt,[(y(!0),U(P,null,n(z(u),t=>(y(),W(K,{key:t.id,class:g([`w-full`,ut,v(t.route)?ft:$]),severity:`secondary`,outlined:!v(t.route),style:e(v(t.route)?m:void 0),fluid:``,href:t.url,route:t.route,loading:t.loading||z(d)===t.route,label:t.name,onClick:r.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),z(c)?(y(),U(P,{key:0},[x(K,{class:g([`w-full`,ut,$]),severity:`secondary`,outlined:``,fluid:``,route:z(B).DASHBOARD,loading:z(d)===z(B).DASHBOARD,label:`Dashboard`,onClick:r.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),x(K,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:i[0]||=e=>{z(p)(),r.toggle()}})],64)):(y(),W(K,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:z(B).LOGIN,loading:z(d)===z(B).LOGIN,label:`Inloggen`,onClick:r.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}}),mt={class:`flex items-center gap-2`},ht=o({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=E(l()),n=k(!1),r=k(!0),i=window.scrollY,a=()=>{n.value=!n.value};function o(){let e=window.scrollY;e>i+10?r.value=!1:e<i-10&&(r.value=!0),i=e}return c(()=>{window.addEventListener(`scroll`,o)}),d(()=>{window.removeEventListener(`scroll`,o)}),(e,i)=>(y(),U(P,null,[H(`div`,{class:g([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[H(`div`,mt,[z(t)?(y(),W(Ge,{key:0,"icon-only":``})):A(``,!0),x(z(G),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:a})])],2),x(pt,{"is-open":n.value,toggle:a},null,8,[`is-open`])],64))}}),gt={class:`sm:flex sm:items-start sm:justify-between mb-20`},_t={class:`hidden lg:flex justify-end`},vt={class:`lg:hidden w-full sm:w-1/3`},yt=o({__name:`Header`,setup(e){return(e,t)=>(y(),U(`div`,gt,[x(Oe,{class:`hidden sm:block`}),H(`div`,_t,[x(tt)]),H(`div`,vt,[x(ht)]),x(Oe,{class:`sm:hidden`})]))}}),bt=o({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=_(),{isDarkTheme:i}=se(),a=k(),o=O(()=>i.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),s=O(()=>i.value?`surface-panel-soft`:`surface-panel`),l=()=>{t.scrollToContent&&r(a.value)};return c(()=>{l()}),T(()=>n.fullPath,()=>{l()}),(e,t)=>(y(),U(`div`,{class:g([`min-h-screen flex flex-col`,o.value])},[H(`div`,{class:g([`container py-5 rounded-b-secondary flex-1`,s.value])},[H(`header`,null,[e.$slots.header?S(e.$slots,`header`,{key:0}):(y(),W(yt,{key:1}))]),H(`main`,null,[H(`div`,{ref_key:`content`,ref:a},[S(e.$slots,`content`)],512)])],2),H(`footer`,null,[e.$slots.footer?S(e.$slots,`footer`,{key:0}):(y(),W(ge,{key:1}))])],2))}});export{Ae as n,ke as r,bt as t};