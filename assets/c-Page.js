import{A as e,Ar as t,Bn as n,Br as r,D as i,Di as a,Dn as o,Er as s,Fr as c,Ft as l,Gr as u,Hn as d,Hr as f,Ht as p,Ir as m,Jr as h,Lr as g,Mi as _,Mt as v,O as y,Ot as b,Pt as x,Tt as ee,Ur as te,Vr as S,Xr as C,Zr as ne,_r as w,b as T,br as E,c as D,cr as O,ct as k,gr as A,hr as j,ht as M,i as N,ii as P,jr as F,ki as re,kn as ie,lr as I,o as L,oi as R,or as z,qn as B,ri as ae,sr as V,vr as H,wr as U,x as W,yn as oe,yr as G,zr as K}from"../bundle.js";import{a as se,i as ce,n as le,r as ue,t as de}from"./c-Dialog.js";import{n as q,t as fe}from"./c-card.js";import{t as pe}from"./c-TextField.js";import{t as J}from"./c-SwitchField.js";var me={class:`container mx-auto text-center`},he=`border-x-0 border-b-0 py-4`,ge=s({__name:`Footer`,setup(e){return(e,t)=>(g(),E(`footer`,{class:a(he)},[w(`div`,me,[w(`p`,null,`© `+_(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}}),_e=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ve={class:`flex justify-between max-sm:pt-10`},ye={class:`hidden sm:block w-full sm:min-w-fit`},be=[`alt`],xe={class:`w-fit sm:max-w-1/2`},Se={class:`text-title-primary`},Ce={class:`text-title-secondary`},we={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Te={class:`sm:hidden min-w-fit mt-3`},Ee=[`alt`],De=`surface-panel-glass`,Oe=s({__name:`HeaderContent`,setup(e){let{routeLoading:t}=B(l());return(e,n)=>{let r=S(`RouterLink`);return g(),E(`div`,ve,[w(`div`,ye,[U(r,{to:{name:R(z).HOME}},{default:C(()=>[w(`img`,{class:a([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":R(t)===R(z).HOME}]),src:_e,alt:R(O).name},null,10,be)]),_:1},8,[`to`])]),w(`div`,xe,[w(`h1`,Se,_(R(O).name),1),w(`h2`,Ce,_(R(O).service),1),w(`div`,we,[U(R(L),{class:a(De),icon:`pi pi-briefcase`,label:R(O).role},null,8,[`label`]),U(R(L),{class:a(De),icon:`pi pi-map-marker`,label:`${R(O).location.city}, ${R(O).location.country}`},null,8,[`label`])])]),w(`div`,Te,[U(r,{to:{name:R(z).HOME}},{default:C(()=>[w(`img`,{class:a([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":R(t)===R(z).HOME}]),src:_e,alt:R(O).name},null,10,Ee)]),_:1},8,[`to`])])])}}}),ke=()=>{let e=x(),t=p(),r=n(),i=o(),{firebaseUser:a}=B(e),{houseHolds:s,activeHouseHold:c}=B(t),{activeHouseHoldId:l}=B(r),{publicUsers:u}=B(i),d=A(()=>u.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),f=A(()=>[{value:null,label:`Geen huishouden`},...[...s.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),m=A(()=>[...s.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),h=A(()=>c.value),g=A(()=>h.value?.id??m.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),_=e=>e?s.value.find(t=>t.id===e)??null:null,v=e=>{let t=_(e);return t?t.getUserOptions(d.value):[]};return{houseHoldOptions:f,requiredHouseHoldOptions:m,activeHouseHoldId:l,currentUsersHouseHold:h,defaultHouseHoldId:g,getHouseHoldById:_,getHouseHoldUserOptions:v,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...v(e)],getDefaultUserId:e=>_(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>_(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>_(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}},Ae=s({__name:`NumberField`,props:t({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=u(e,`modelValue`),r=P(``);function i(){n.value=parseFloat(r.value)||0}return h(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(g(),H(pe,F(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),je={key:0,class:`inline-flex`},Me={class:`my-5 flex flex-col gap-5`},Ne={class:`flex flex-col gap-3`},Pe={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Fe={class:`flex flex-col gap-1`},Ie={class:`text-base font-semibold text-title-secondary`},Le={key:0,class:`text-sm text-title-tertiary`},Re={key:0,class:`flex flex-col gap-3`},ze={key:1,class:`flex flex-col gap-3`},Be={key:2,class:`flex flex-col gap-4`},Ve={key:0,class:`flex flex-col gap-3`},He={key:1,class:`flex flex-col gap-3`},Ue={key:2,class:`flex flex-col gap-3`},We={key:3,class:`text-sm text-title-tertiary`},Ge=s({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,r=v(),i=x(),o=n(),{personalSettings:s,isFetchLoading:c,isMutationLoading:l}=B(o),{firebaseUser:u,isOwner:f}=B(i),{houseHoldOptions:p,activeHouseHoldId:m}=ke(),y=P(!1),b=P(null),ee=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],te=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],S=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],ne={[z.TASKS]:`tasks`,[z.PRODUCTS]:`products`,[z.GAMES]:`games`,[V.GAMES_YAHTZEE]:`games`,[V.GAMES_YAHTZEE_RAINBOW]:`games`,[V.GAMES_RAINWORMS]:`games`,[V.GAMES_PATIENCE]:`games`,[V.GAMES_HANGMAN]:`games`},D=A(()=>{let e=r.name?.toString();return e?ne[e]:void 0}),O=A(()=>r.name?.toString()),k=A(()=>D.value===`games`),M=A(()=>[V.GAMES_YAHTZEE,V.GAMES_YAHTZEE_RAINBOW].includes(O.value)),N=A(()=>O.value===V.GAMES_RAINWORMS),F=A(()=>O.value===V.GAMES_PATIENCE),re=A(()=>{switch(D.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(O.value){case V.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case V.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case V.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case V.GAMES_PATIENCE:return`Instellingen voor Patience:`;case V.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle Spellen:`}default:return}}),ie=A(()=>`surface-panel-glass shadow-md md:shadow-none`),I=ae(L());function L(){return s.value?s.value.clone():d.create(u.value?.uid??``)}function W(){Object.assign(I,L()),b.value=m.value}async function oe(){let e=u.value?.uid;if(!e)return;let t=I.clone();o.setActiveHouseHoldId(b.value),await o.updatePersonalSettings(e,t),y.value=!1}return h(y,e=>{e&&W()},{immediate:!0}),(e,n)=>(g(),E(j,null,[R(u)?(g(),E(`div`,je,[U(T,{class:a([ie.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:R(c),severity:`secondary`,onClick:n[0]||=e=>y.value=!0},null,8,[`class`,`label`,`loading`])])):G(``,!0),U(de,{isOpen:y.value,title:`Persoonlijke instellingen`,description:``,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:R(l),onConfirm:oe,onCancel:n[13]||=e=>y.value=!1},{default:C(()=>[w(`div`,Me,[w(`div`,Ne,[U(q,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:ee,required:``,modelValue:I.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>I.primeVueTheme=e},null,8,[`modelValue`]),R(f)?(g(),H(q,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:R(p),modelValue:b.value,"onUpdate:modelValue":n[2]||=e=>b.value=e},null,8,[`options`,`modelValue`])):G(``,!0)]),w(`div`,Pe,[w(`div`,Fe,[w(`div`,Ie,_(re.value??`Pagina-instellingen`),1),D.value?G(``,!0):(g(),E(`p`,Le,` Geen `))]),D.value===`tasks`?(g(),E(`div`,Re,[U(J,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:I.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>I.tasks.showDifficulty=e},null,8,[`modelValue`]),U(J,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:I.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>I.tasks.showCategories=e},null,8,[`modelValue`])])):D.value===`products`?(g(),E(`div`,ze,[U(Ae,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:I.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>I.products.amountOfDaysToShow=e},null,8,[`modelValue`]),U(J,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:I.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>I.products.showPromotions=e},null,8,[`modelValue`]),U(J,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:I.products.showCategory,"onUpdate:modelValue":n[7]||=e=>I.products.showCategory=e},null,8,[`modelValue`]),U(J,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:I.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>I.products.showSubcategory=e},null,8,[`modelValue`])])):D.value===`games`?(g(),E(`div`,Be,[k.value||M.value?(g(),E(`div`,Ve,[k.value?(g(),H(J,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:I.games.useAudio,"onUpdate:modelValue":n[9]||=e=>I.games.useAudio=e},null,8,[`modelValue`])):G(``,!0),M.value?(g(),H(q,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:te,modelValue:I.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>I.games.diceRollSpeed=e},null,8,[`modelValue`])):G(``,!0)])):G(``,!0),N.value?(g(),E(`div`,He,[n[14]||=w(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),U(q,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:S,modelValue:I.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>I.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):G(``,!0),F.value?(g(),E(`div`,Ue,[n[15]||=w(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),U(J,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:I.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>I.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):G(``,!0),!k.value&&!M.value&&!N.value&&!F.value?(g(),E(`p`,We,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):G(``,!0)])):G(``,!0)])])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),Ke={key:0,class:`hidden lg:block`},qe={class:`grid grid-cols-2 gap-2`},Y=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Je=s({__name:`NavigationMenuDesktop`,setup(e){let t=x(),n=l(),{isLoggedIn:r,isLogoutLoading:i}=B(t),{visibleMenuItems:o,routeLoading:s}=B(n);return(e,n)=>R(o).length?(g(),E(`div`,Ke,[w(`div`,qe,[(g(!0),E(j,null,K(R(o),e=>(g(),H(T,{key:e.id,class:a(Y),outlined:``,href:e.url,route:e.route,loading:e.loading||R(s)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),R(r)?(g(),H(T,{key:0,class:a([Y,`!rounded-full`]),severity:`danger`,outlined:``,loading:R(i),label:`Uitloggen`,onClick:R(t).logout},null,8,[`class`,`loading`,`onClick`])):(g(),H(T,{key:1,class:a([Y,`!rounded-full`]),severity:`info`,outlined:``,route:R(z).LOGIN,loading:R(s)===R(z).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):G(``,!0)}}),Ye={class:`hidden lg:flex items-center gap-4 mb-4`},Xe={class:`hidden lg:block flex-1 space-y-2`},Ze={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},Qe={class:`font-semibold text-base first:font-bold first:text-lg`},$e={key:0,class:`shrink-0 flex items-center gap-2`},et=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,tt=s({__name:`NavigationCardDesktop`,setup(e){let t=x(),n=ie(),{isLoggedIn:r}=B(t),{currentUser:i}=B(n);return(e,t)=>(g(),H(R(fe),{class:a(et)},{content:C(()=>[w(`div`,Ye,[w(`div`,Xe,[R(i)?(g(!0),E(j,{key:0},K([`Welkom terug, ${R(i).firstName+(R(i).lastName?` `+R(i).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(g(),E(`p`,Ze,_(e),1))),256)):(g(),E(j,{key:1},K([`Welkom op mijn portfolio- en blogwebsite!`],e=>w(`p`,Qe,_(e),1)),64))]),R(r)?(g(),E(`div`,$e,[U(Ge,{"icon-only":``,"button-class":`shrink-0 !p-6`}),U(T,{class:`shrink-0 !p-6`,route:R(z).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:C(()=>[...t[0]||=[w(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):G(``,!0)]),U(Je)]),_:1}))}}),nt=y.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),rt={name:`BaseDrawer`,extends:i,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:nt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=it(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=at(e,`string`);return X(t)==`symbol`?t:t+``}function at(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Drawer`,extends:rt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&e.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&e.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&k(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&e.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&M(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&le()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ue()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ee(Z(Z(Z({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:ce},components:{Button:W,Portal:N,TimesIcon:D}},ot=[`data-p`],st=[`role`,`aria-modal`,`data-p`];function ct(e,t,n,i,o,s){var c=S(`Button`),l=S(`Portal`),u=f(`focustrap`);return g(),H(l,null,{default:C(function(){return[o.containerVisible?(g(),E(`div`,F({key:0,ref:s.maskRef,onMousedown:t[0]||=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":s.dataP},e.ptm(`mask`)),[U(I,F({name:`p-drawer`,onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:``},e.ptm(`transition`)),{default:C(function(){return[e.visible?ne((g(),E(`div`,F({key:0,ref:s.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":s.dataP},e.ptmi(`root`)),[e.$slots.container?r(e.$slots,`container`,{key:0,closeCallback:s.hide}):(g(),E(j,{key:1},[w(`div`,F({ref:s.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[r(e.$slots,`header`,{class:a(e.cx(`title`))},function(){return[e.header?(g(),E(`div`,F({key:0,class:e.cx(`title`)},e.ptm(`title`)),_(e.header),17)):G(``,!0)]}),e.showCloseIcon?r(e.$slots,`closebutton`,{key:0,closeCallback:s.hide},function(){return[U(c,F({ref:s.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":s.closeAriaLabel,unstyled:e.unstyled,onClick:s.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:C(function(t){return[r(e.$slots,`closeicon`,{},function(){return[(g(),H(te(e.closeIcon?`span`:`TimesIcon`),F({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):G(``,!0)],16),w(`div`,F({ref:s.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[r(e.$slots,`default`)],16),e.$slots.footer?(g(),E(`div`,F({key:0,ref:s.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[r(e.$slots,`footer`)],16)):G(``,!0)],64))],16,st)),[[u]]):G(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,ot)):G(``,!0)]}),_:3})}Q.render=ct;var lt={class:`flex flex-col gap-2 pb-4`},ut=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,dt=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,ft=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,$=`surface-panel-glass`,pt=s({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){let t=e,n=x(),r=l(),i=v(),{isLoggedIn:o}=B(n),{visibleMenuItems:s,routeLoading:c}=B(r),{logout:u}=n,d={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},f=A({get:()=>t.isOpen,set:e=>{e!==t.isOpen&&t.toggle()}}),p=e=>{if(!e)return!1;let t=b.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?i.fullPath===`/`:i.fullPath.startsWith(n)};return(t,n)=>(g(),H(R(Q),{visible:f.value,"onUpdate:visible":n[1]||=e=>f.value=e,position:`right`,class:a(dt),"show-close-icon":!0},{default:C(()=>[w(`div`,lt,[(g(!0),E(j,null,K(R(s),t=>(g(),H(T,{key:t.id,class:a([`w-full`,ut,p(t.route)?ft:$]),severity:`secondary`,outlined:!p(t.route),style:re(p(t.route)?d:void 0),fluid:``,href:t.url,route:t.route,loading:t.loading||R(c)===t.route,label:t.name,onClick:e.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),R(o)?(g(),E(j,{key:0},[U(T,{class:a([`w-full`,ut,$]),severity:`secondary`,outlined:``,fluid:``,route:R(z).DASHBOARD,loading:R(c)===R(z).DASHBOARD,label:`Dashboard`,onClick:e.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),U(T,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=t=>{R(u)(),e.toggle()}})],64)):(g(),H(T,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:R(z).LOGIN,loading:R(c)===R(z).LOGIN,label:`Inloggen`,onClick:e.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}}),mt={class:`flex items-center gap-2`},ht=s({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=B(x()),n=P(!1),r=P(!0),i=window.scrollY,o=()=>{n.value=!n.value};function s(){let e=window.scrollY;e>i+10?r.value=!1:e<i-10&&(r.value=!0),i=e}return c(()=>{window.addEventListener(`scroll`,s)}),m(()=>{window.removeEventListener(`scroll`,s)}),(e,i)=>(g(),E(j,null,[w(`div`,{class:a([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[w(`div`,mt,[R(t)?(g(),H(Ge,{key:0,"icon-only":``})):G(``,!0),U(R(W),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:o})])],2),U(pt,{"is-open":n.value,toggle:o},null,8,[`is-open`])],64))}}),gt={class:`sm:flex sm:items-start sm:justify-between mb-20`},_t={class:`hidden lg:flex justify-end`},vt={class:`lg:hidden w-full sm:w-1/3`},yt=s({__name:`Header`,setup(e){return(e,t)=>(g(),E(`div`,gt,[U(Oe,{class:`hidden sm:block`}),w(`div`,_t,[U(tt)]),w(`div`,vt,[U(ht)]),U(Oe,{class:`sm:hidden`})]))}}),bt=s({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=v(),{isDarkTheme:i}=se(),o=P(),s=A(()=>i.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),l=A(()=>i.value?`surface-panel-soft`:`surface-panel`),u=()=>{t.scrollToContent&&oe(o.value)};return c(()=>{u()}),h(()=>n.fullPath,()=>{u()}),(e,t)=>(g(),E(`div`,{class:a([`min-h-screen flex flex-col`,s.value])},[w(`div`,{class:a([`container py-5 rounded-b-secondary flex-1`,l.value])},[w(`header`,null,[e.$slots.header?r(e.$slots,`header`,{key:0}):(g(),H(yt,{key:1}))]),w(`main`,null,[w(`div`,{ref_key:`content`,ref:o},[r(e.$slots,`content`)],512)])],2),w(`footer`,null,[e.$slots.footer?r(e.$slots,`footer`,{key:0}):(g(),H(ge,{key:1}))])],2))}});export{Ae as n,ke as r,bt as t};