import{At as e,Bi as t,Cr as n,Et as r,Fi as i,Fr as a,G as o,Hr as s,Jr as c,Kr as l,Li as u,Lr as d,Mt as f,Qr as p,R as m,Rr as h,Si as g,Sr as _,Tr as v,Ur as y,Wr as b,Xn as x,Xr as S,Yr as C,_n as w,br as T,bt as ee,cn as te,cr as E,di as ne,fi as D,fr as O,hn as k,i as A,ii as j,jr as M,kr as N,l as P,lr as F,m as I,mi as L,mr as re,nt as R,oi as z,qr as B,r as V,ri as H,s as ie,sr as U,ti as W,wr as G,xr as K,yn as ae,yt as q,zt as oe}from"./c-ripple.js";import{a as se}from"../bundle.js";import{t as ce}from"./c-Dialog2.js";import{a as le,i as J,t as Y}from"./c-SelectField.js";import{t as ue}from"./c-TextField.js";import{t as X}from"./c-SwitchField.js";import{t as de}from"./c-card.js";import{i as fe,n as pe,r as me}from"./c-dialog.js";a(),g();var he={class:`container mx-auto text-center`},ge=`border-x-0 border-b-0 py-4`,_e=M({__name:`Footer`,setup(e){return(e,n)=>(b(),v(`footer`,{class:i(ge)},[_(`div`,he,[_(`p`,null,` © `+t(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}});a();var ve=()=>{let e=q(),{personalSettings:t}=x(e),n=K(()=>t.value?.primeVueTheme??`dark`);return{primeVueTheme:n,isDarkTheme:K(()=>n.value===`dark`),isLightTheme:K(()=>n.value===`light`)}},ye=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href;a(),z(),g();var be={class:`flex justify-between max-sm:pt-10`},xe={class:`hidden sm:block w-full sm:min-w-fit`},Se=[`alt`],Ce={class:`w-fit sm:max-w-1/2`},we={class:`text-title-primary`},Te={class:`text-title-secondary`},Ee={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},De={class:`sm:hidden min-w-fit mt-3`},Oe=[`alt`],ke=`surface-panel-glass`,Ae=M({__name:`HeaderContent`,setup(e){let n=f(),{routeLoading:r}=x(n);return(e,n)=>{let a=c(`RouterLink`);return b(),v(`div`,be,[_(`div`,xe,[N(a,{to:{name:L(U).HOME}},{default:H(()=>[_(`img`,{class:i([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":L(r)===L(U).HOME}]),src:ye,alt:L(F).name},null,10,Se)]),_:1},8,[`to`])]),_(`div`,Ce,[_(`h1`,we,t(L(F).name),1),_(`h2`,Te,t(L(F).service),1),_(`div`,Ee,[N(L(se),{class:i(ke),icon:`pi pi-briefcase`,label:L(F).role},null,8,[`label`]),N(L(se),{class:i(ke),icon:`pi pi-map-marker`,label:`${L(F).location.city}, ${L(F).location.country}`},null,8,[`label`])])]),_(`div`,De,[N(a,{to:{name:L(U).HOME}},{default:H(()=>[_(`img`,{class:i([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":L(r)===L(U).HOME}]),src:ye,alt:L(F).name},null,10,Oe)]),_:1},8,[`to`])])])}}});a();var je=()=>{let e=k(),t=oe(),n=q(),r=w(),{firebaseUser:i}=x(e),{houseHolds:a,activeHouseHold:o}=x(t),{activeHouseHoldId:s}=x(n),{publicUsers:c}=x(r),l=K(()=>c.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),u=K(()=>[{value:null,label:`Geen huishouden`},...[...a.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),d=K(()=>[...a.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),f=K(()=>o.value),p=K(()=>f.value?.id??d.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),m=e=>e?a.value.find(t=>t.id===e)??null:null,h=e=>{let t=m(e);return t?t.getUserOptions(l.value):[]};return{houseHoldOptions:u,requiredHouseHoldOptions:d,activeHouseHoldId:s,currentUsersHouseHold:f,defaultHouseHoldId:p,getHouseHoldById:m,getHouseHoldUserOptions:h,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...h(e)],getDefaultUserId:e=>m(e)?.getDefaultUserId(i.value?.uid)??null,normalizeUserId:(e,t)=>m(e)?.normalizeUserId(t,i.value?.uid)??t??null,normalizeUserIds:(e,t)=>m(e)?.normalizeUserIds(t,i.value?.uid)??[...new Set(t??[])]}};a(),z();var Me=M({__name:`NumberField`,props:d({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,r=p(e,`modelValue`),i=D(``);function a(){r.value=parseFloat(i.value)||0}return W(r,e=>{i.value=e.toString()},{immediate:!0}),(e,r)=>(b(),n(ue,h(t,{modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:a}),null,16,[`modelValue`,`input-props`]))}});a(),z(),g();var Ne={key:0,class:`inline-flex`},Pe={class:`my-5 flex flex-col gap-5`},Fe={class:`flex flex-col gap-3`},Ie={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Le={class:`flex flex-col gap-1`},Re={class:`text-base font-semibold text-title-secondary`},ze={key:0,class:`text-sm text-title-tertiary`},Be={key:0,class:`flex flex-col gap-3`},Ve={key:1,class:`flex flex-col gap-3`},He={key:2,class:`flex flex-col gap-4`},Ue={key:0,class:`flex flex-col gap-3`},We={key:1,class:`flex flex-col gap-3`},Ge={key:2,class:`flex flex-col gap-3`},Ke={key:3,class:`text-sm text-title-tertiary`},qe=M({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(r){let a=r,o=e(),s=k(),c=q(),{personalSettings:l,isFetchLoading:u,isMutationLoading:d}=x(c),{firebaseUser:f,isOwner:p}=x(s),{houseHoldOptions:m,activeHouseHoldId:h}=je(),g=D(!1),y=D(null),S=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],C=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],w=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],te={[U.TASKS]:`tasks`,[U.PRODUCTS]:`products`,[U.GAMES]:`games`,[E.GAMES_YAHTZEE]:`games`,[E.GAMES_YAHTZEE_RAINBOW]:`games`,[E.GAMES_RAINWORMS]:`games`,[E.GAMES_PATIENCE]:`games`,[E.GAMES_HANGMAN]:`games`},O=K(()=>{let e=o.name?.toString();return e?te[e]:void 0}),A=K(()=>o.name?.toString()),j=K(()=>O.value===`games`),M=K(()=>[E.GAMES_YAHTZEE,E.GAMES_YAHTZEE_RAINBOW].includes(A.value)),P=K(()=>A.value===E.GAMES_RAINWORMS),F=K(()=>A.value===E.GAMES_PATIENCE),I=K(()=>{switch(O.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(A.value){case E.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case E.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case E.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case E.GAMES_PATIENCE:return`Instellingen voor Patience:`;case E.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle spellen:`}default:return}}),re=K(()=>`surface-panel-glass shadow-md md:shadow-none`),R=ne(z());function z(){return l.value?l.value.clone():ee.create(f.value?.uid??``)}function B(){Object.assign(R,z()),y.value=h.value}async function V(){let e=f.value?.uid;if(!e)return;let t=R.clone();c.setActiveHouseHoldId(y.value),await c.updatePersonalSettings(e,t),g.value=!1}return W(g,e=>{e&&B()},{immediate:!0}),(e,r)=>(b(),v(T,null,[L(f)?(b(),v(`div`,Ne,[N(J,{class:i([re.value,a.buttonClass]),icon:`pi pi-cog`,label:a.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:L(u),severity:`secondary`,onClick:r[0]||=e=>g.value=!0},null,8,[`class`,`label`,`loading`])])):G(``,!0),N(ce,{"is-open":g.value,title:`Persoonlijke instellingen`,description:``,"cancel-text":`Annuleren`,"confirm-text":`Opslaan`,"confirm-loading":L(d),onConfirm:V,onCancel:r[13]||=e=>g.value=!1},{default:H(()=>[_(`div`,Pe,[_(`div`,Fe,[N(Y,{modelValue:R.primeVueTheme,"onUpdate:modelValue":r[1]||=e=>R.primeVueTheme=e,class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:S,required:``},null,8,[`modelValue`]),L(p)?(b(),n(Y,{key:0,modelValue:y.value,"onUpdate:modelValue":r[2]||=e=>y.value=e,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:L(m)},null,8,[`modelValue`,`options`])):G(``,!0)]),_(`div`,Ie,[_(`div`,Le,[_(`div`,Re,t(I.value??`Pagina-instellingen`),1),O.value?G(``,!0):(b(),v(`p`,ze,` Geen `))]),O.value===`tasks`?(b(),v(`div`,Be,[N(X,{modelValue:R.tasks.showDifficulty,"onUpdate:modelValue":r[3]||=e=>R.tasks.showDifficulty=e,class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`},null,8,[`modelValue`]),N(X,{modelValue:R.tasks.showCategories,"onUpdate:modelValue":r[4]||=e=>R.tasks.showCategories=e,class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`},null,8,[`modelValue`])])):O.value===`products`?(b(),v(`div`,Ve,[N(Me,{modelValue:R.products.amountOfDaysToShow,"onUpdate:modelValue":r[5]||=e=>R.products.amountOfDaysToShow=e,class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`},null,8,[`modelValue`]),N(X,{modelValue:R.products.showPromotions,"onUpdate:modelValue":r[6]||=e=>R.products.showPromotions=e,class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`},null,8,[`modelValue`]),N(X,{modelValue:R.products.showCategory,"onUpdate:modelValue":r[7]||=e=>R.products.showCategory=e,class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`},null,8,[`modelValue`]),N(X,{modelValue:R.products.showSubcategory,"onUpdate:modelValue":r[8]||=e=>R.products.showSubcategory=e,class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`},null,8,[`modelValue`])])):O.value===`games`?(b(),v(`div`,He,[j.value||M.value?(b(),v(`div`,Ue,[j.value?(b(),n(X,{key:0,modelValue:R.games.useAudio,"onUpdate:modelValue":r[9]||=e=>R.games.useAudio=e,class:`w-full`,name:`games.useAudio`,label:`Geluid`},null,8,[`modelValue`])):G(``,!0),M.value?(b(),n(Y,{key:1,modelValue:R.games.diceRollSpeed,"onUpdate:modelValue":r[10]||=e=>R.games.diceRollSpeed=e,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:C},null,8,[`modelValue`])):G(``,!0)])):G(``,!0),P.value?(b(),v(`div`,We,[r[14]||=_(`div`,{class:`text-sm font-semibold text-title-tertiary`},` Regenwormen `,-1),N(Y,{modelValue:R.games.rainworms.robotSpeed,"onUpdate:modelValue":r[11]||=e=>R.games.rainworms.robotSpeed=e,class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:w},null,8,[`modelValue`])])):G(``,!0),F.value?(b(),v(`div`,Ge,[r[15]||=_(`div`,{class:`text-sm font-semibold text-title-tertiary`},` Patience `,-1),N(X,{modelValue:R.games.patience.doAutocomplete,"onUpdate:modelValue":r[12]||=e=>R.games.patience.doAutocomplete=e,class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`},null,8,[`modelValue`])])):G(``,!0),!j.value&&!M.value&&!P.value&&!F.value?(b(),v(`p`,Ke,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):G(``,!0)])):G(``,!0)])])]),_:1},8,[`is-open`,`confirm-loading`])],64))}});a(),z(),g();var Je={key:0,class:`hidden lg:block`},Ye={class:`grid grid-cols-2 gap-2`},Z=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Xe=M({__name:`NavigationMenuDesktop`,setup(e){let t=k(),r=f(),{isLoggedIn:a,isLogoutLoading:o}=x(t),{visibleMenuItems:s,routeLoading:c}=x(r);return(e,r)=>L(s).length?(b(),v(`div`,Je,[_(`div`,Ye,[(b(!0),v(T,null,l(L(s),e=>(b(),n(J,{key:e.id,class:i(Z),outlined:``,href:e.url,route:e.route,loading:e.loading||L(c)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),L(a)?(b(),n(J,{key:0,class:i([Z,`!rounded-full`]),severity:`danger`,outlined:``,loading:L(o),label:`Uitloggen`,onClick:L(t).logout},null,8,[`class`,`loading`,`onClick`])):(b(),n(J,{key:1,class:i([Z,`!rounded-full`]),severity:`info`,outlined:``,route:L(U).LOGIN,loading:L(c)===L(U).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):G(``,!0)}});a(),z(),g();var Ze={class:`hidden lg:flex items-center gap-4 mb-4`},Qe={class:`hidden lg:block flex-1 space-y-2`},$e={key:0,class:`shrink-0 flex items-center gap-2`},et=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,tt=M({__name:`NavigationCardDesktop`,setup(e){let r=k(),a=ae(),{isLoggedIn:o}=x(r),{currentUser:s}=x(a);return(e,r)=>(b(),n(L(de),{class:i(et)},{content:H(()=>[_(`div`,Ze,[_(`div`,Qe,[L(s)?(b(!0),v(T,{key:0},l([`Welkom terug, ${L(s).firstName+(L(s).lastName?` `+L(s).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(b(),v(`p`,{key:e,class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},t(e),1))),128)):(b(),v(T,{key:1},l([`Welkom op mijn portfolio- en blogwebsite!`],e=>_(`p`,{key:e,class:`font-semibold text-base first:font-bold first:text-lg`},t(e),1)),64))]),L(o)?(b(),v(`div`,$e,[N(qe,{"icon-only":``,"button-class":`shrink-0 !p-6`}),N(J,{class:`shrink-0 !p-6`,route:L(U).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:H(()=>[...r[0]||=[_(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):G(``,!0)]),N(Xe)]),_:1}))}}),nt=P.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}});a(),re(),g();var rt={name:`BaseDrawer`,extends:ie,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:nt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function $(e,t,n){return(t=it(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=at(e,`string`);return Q(t)==`symbol`?t:t+``}function at(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ot={name:`Drawer`,extends:rt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&I.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&I.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&m(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&I.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&o(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&pe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&me()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return R($($($({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:fe},components:{Button:le,Portal:V,TimesIcon:A}},st=[`data-p`],ct=[`role`,`aria-modal`,`data-p`];function lt(e,r,a,o,s,l){var u=c(`Button`),d=c(`Portal`),f=C(`focustrap`);return b(),n(d,null,{default:H(function(){return[s.containerVisible?(b(),v(`div`,h({key:0,ref:l.maskRef,onMousedown:r[0]||=function(){return l.onMaskClick&&l.onMaskClick.apply(l,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":l.dataP},e.ptm(`mask`)),[N(O,h({name:`p-drawer`,onEnter:l.onEnter,onAfterEnter:l.onAfterEnter,onBeforeLeave:l.onBeforeLeave,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave,appear:``},e.ptm(`transition`)),{default:H(function(){return[e.visible?j((b(),v(`div`,h({key:0,ref:l.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":l.dataP},e.ptmi(`root`)),[e.$slots.container?B(e.$slots,`container`,{key:0,closeCallback:l.hide}):(b(),v(T,{key:1},[_(`div`,h({ref:l.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[B(e.$slots,`header`,{class:i(e.cx(`title`))},function(){return[e.header?(b(),v(`div`,h({key:0,class:e.cx(`title`)},e.ptm(`title`)),t(e.header),17)):G(``,!0)]}),e.showCloseIcon?B(e.$slots,`closebutton`,{key:0,closeCallback:l.hide},function(){return[N(u,h({ref:l.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":l.closeAriaLabel,unstyled:e.unstyled,onClick:l.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:H(function(t){return[B(e.$slots,`closeicon`,{},function(){return[(b(),n(S(e.closeIcon?`span`:`TimesIcon`),h({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):G(``,!0)],16),_(`div`,h({ref:l.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[B(e.$slots,`default`)],16),e.$slots.footer?(b(),v(`div`,h({key:0,ref:l.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[B(e.$slots,`footer`)],16)):G(``,!0)],64))],16,ct)),[[f]]):G(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,st)):G(``,!0)]}),_:3})}ot.render=lt,a(),z(),g();var ut={class:`flex flex-col gap-2 pb-4`},dt=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,ft=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,pt=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,mt=`surface-panel-glass`,ht=M({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){let a=t,o=k(),s=f(),c=e(),{isLoggedIn:d}=x(o),{visibleMenuItems:p,routeLoading:m}=x(s),{logout:h}=o,g={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},y=K({get:()=>a.isOpen,set:e=>{e!==a.isOpen&&a.toggle()}}),S=e=>{if(!e)return!1;let t=r.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?c.fullPath===`/`:c.fullPath.startsWith(n)};return(e,r)=>(b(),n(L(ot),{visible:y.value,"onUpdate:visible":r[1]||=e=>y.value=e,position:`right`,class:i(ft),"show-close-icon":!0},{default:H(()=>[_(`div`,ut,[(b(!0),v(T,null,l(L(p),e=>(b(),n(J,{key:e.id,class:i([`w-full`,dt,S(e.route)?pt:mt]),severity:`secondary`,outlined:!S(e.route),style:u(S(e.route)?g:void 0),fluid:``,href:e.url,route:e.route,loading:e.loading||L(m)===e.route,label:e.name,onClick:t.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),L(d)?(b(),v(T,{key:0},[N(J,{class:i([`w-full`,dt,mt]),severity:`secondary`,outlined:``,fluid:``,route:L(U).DASHBOARD,loading:L(m)===L(U).DASHBOARD,label:`Dashboard`,onClick:t.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),N(J,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:r[0]||=e=>{L(h)(),t.toggle()}})],64)):(b(),n(J,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:L(U).LOGIN,loading:L(m)===L(U).LOGIN,label:`Inloggen`,onClick:t.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}});a(),z(),g();var gt={class:`flex items-center gap-2`},_t=M({__name:`NavigationMenuMobile`,setup(e){let t=k(),{isLoggedIn:r}=x(t),a=D(!1),o=D(!0),c=window.scrollY,l=()=>{a.value=!a.value};function u(){let e=window.scrollY;e>c+10?o.value=!1:e<c-10&&(o.value=!0),c=e}return s(()=>{window.addEventListener(`scroll`,u)}),y(()=>{window.removeEventListener(`scroll`,u)}),(e,t)=>(b(),v(T,null,[_(`div`,{class:i([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,o.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[_(`div`,gt,[L(r)?(b(),n(qe,{key:0,"icon-only":``})):G(``,!0),N(L(le),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:l})])],2),N(ht,{"is-open":a.value,toggle:l},null,8,[`is-open`])],64))}});a();var vt={class:`sm:flex sm:items-start sm:justify-between mb-20`},yt={class:`hidden lg:flex justify-end`},bt={class:`lg:hidden w-full sm:w-1/3`},xt=M({__name:`Header`,setup(e){return(e,t)=>(b(),v(`div`,vt,[N(Ae,{class:`hidden sm:block`}),_(`div`,yt,[N(tt)]),_(`div`,bt,[N(_t)]),N(Ae,{class:`sm:hidden`})]))}});a(),g(),z();var St=M({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(t){let r=t,a=e(),{isDarkTheme:o}=ve(),c=D(),l=K(()=>o.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),u=K(()=>o.value?`surface-panel-soft`:`surface-panel`),d=()=>{r.scrollToContent&&te(c.value)};return s(()=>{d()}),W(()=>a.fullPath,()=>{d()}),(e,t)=>(b(),v(`div`,{class:i([`min-h-screen flex flex-col`,l.value])},[_(`div`,{class:i([`container py-5 rounded-b-secondary flex-1`,u.value])},[_(`header`,null,[e.$slots.header?B(e.$slots,`header`,{},void 0,void 0,0):(b(),n(xt,{key:1}))]),_(`main`,null,[_(`div`,{ref_key:`content`,ref:c},[B(e.$slots,`content`)],512)])],2),_(`footer`,null,[e.$slots.footer?B(e.$slots,`footer`,{},void 0,void 0,0):(b(),n(_e,{key:1}))])],2))}});export{ve as i,Me as n,je as r,St as t};