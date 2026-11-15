import{Ar as e,At as t,Bt as n,Ci as r,Cr as i,Et as a,G as o,Gr as s,Hr as c,Ii as l,Ir as u,Jr as d,Jt as f,Kr as p,Kt as m,Lr as h,Mt as g,Nt as _,Or as v,Pr as y,Qn as b,R as ee,Ri as x,Sr as S,Ur as C,Ut as w,Vi as T,Vn as E,Vr as D,Wt as O,Yr as k,Zr as A,ai as j,br as M,bt as te,cr as N,di as ne,dr as P,ei as F,fi as I,hi as L,i as R,l as z,m as B,ni as V,nt as H,pr as re,qr as U,r as ie,ri as ae,s as oe,wr as W,xr as G,yr as K,yt as q}from"./c-ripple.js";import{a as se}from"../bundle.js";import{t as ce}from"./c-Dialog2.js";import{a as le,i as J,t as Y}from"./c-SelectField.js";import{t as ue}from"./c-TextField.js";import{t as X}from"./c-SwitchField.js";import{t as de}from"./c-card.js";import{i as fe,n as pe,r as me}from"./c-dialog.js";y(),r();var he={class:`container mx-auto text-center`},ge=`border-x-0 border-b-0 py-4`,_e=e({__name:`Footer`,setup(e){return(e,t)=>(C(),W(`footer`,{class:l(ge)},[G(`div`,he,[G(`p`,null,` © `+T(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}});y();var ve=()=>{let e=q(),{personalSettings:t}=b(e),n=M(()=>t.value?.primeVueTheme??`dark`);return{primeVueTheme:n,isDarkTheme:M(()=>n.value===`dark`),isLightTheme:M(()=>n.value===`light`)}},ye=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href;y(),j(),r();var be={class:`flex justify-between max-sm:pt-10`},xe={class:`hidden sm:block w-full sm:min-w-fit`},Se=[`alt`],Ce={class:`w-fit sm:max-w-1/2`},we={class:`text-title-primary`},Te={class:`text-title-secondary`},Ee={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},De={class:`sm:hidden min-w-fit mt-3`},Oe=[`alt`],ke=`surface-panel-glass`,Ae=e({__name:`HeaderContent`,setup(e){let t=_(),{routeLoading:n}=b(t);return(e,t)=>{let r=U(`RouterLink`);return C(),W(`div`,be,[G(`div`,xe,[v(r,{to:{name:L(w).HOME}},{default:V(()=>[G(`img`,{class:l([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":L(n)===L(w).HOME}]),src:ye,alt:L(N).name},null,10,Se)]),_:1},8,[`to`])]),G(`div`,Ce,[G(`h1`,we,T(L(N).name),1),G(`h2`,Te,T(L(N).service),1),G(`div`,Ee,[v(L(se),{class:l(ke),icon:`pi pi-briefcase`,label:L(N).role},null,8,[`label`]),v(L(se),{class:l(ke),icon:`pi pi-map-marker`,label:`${L(N).location.city}, ${L(N).location.country}`},null,8,[`label`])])]),G(`div`,De,[v(r,{to:{name:L(w).HOME}},{default:V(()=>[G(`img`,{class:l([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":L(n)===L(w).HOME}]),src:ye,alt:L(N).name},null,10,Oe)]),_:1},8,[`to`])])])}}});y();var je=()=>{let e=g(),t=n(),r=q(),i=m(),{firebaseUser:a}=b(e),{houseHolds:o,activeHouseHold:s}=b(t),{activeHouseHoldId:c}=b(r),{publicUsers:l}=b(i),u=M(()=>l.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),d=M(()=>[{value:null,label:`Geen huishouden`},...[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),f=M(()=>[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),p=M(()=>s.value),h=M(()=>p.value?.id??f.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),_=e=>e?o.value.find(t=>t.id===e)??null:null,v=e=>{let t=_(e);return t?t.getUserOptions(u.value):[]};return{houseHoldOptions:d,requiredHouseHoldOptions:f,activeHouseHoldId:c,currentUsersHouseHold:p,defaultHouseHoldId:h,getHouseHoldById:_,getHouseHoldUserOptions:v,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...v(e)],getDefaultUserId:e=>_(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>_(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>_(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}};y(),j();var Me=e({__name:`NumberField`,props:u({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=A(e,`modelValue`),r=I(``);function i(){n.value=parseFloat(r.value)||0}return F(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(C(),S(ue,h(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}});y(),j(),r();var Ne={key:0,class:`inline-flex`},Pe={class:`my-5 flex flex-col gap-5`},Fe={class:`flex flex-col gap-3`},Ie={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Le={class:`flex flex-col gap-1`},Re={class:`text-base font-semibold text-title-secondary`},ze={key:0,class:`text-sm text-title-tertiary`},Be={key:0,class:`flex flex-col gap-3`},Ve={key:1,class:`flex flex-col gap-3`},He={key:2,class:`flex flex-col gap-4`},Ue={key:0,class:`flex flex-col gap-3`},We={key:1,class:`flex flex-col gap-3`},Ge={key:2,class:`flex flex-col gap-3`},Ke={key:3,class:`text-sm text-title-tertiary`},qe=e({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let n=e,r=t(),a=g(),o=q(),{personalSettings:s,isFetchLoading:c,isMutationLoading:u}=b(o),{firebaseUser:d,isOwner:f}=b(a),{houseHoldOptions:p,activeHouseHoldId:m}=je(),h=I(!1),_=I(null),y=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],ee=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],x=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],E={[w.TASKS]:`tasks`,[w.PRODUCTS]:`products`,[w.GAMES]:`games`,[O.GAMES_YAHTZEE]:`games`,[O.GAMES_YAHTZEE_RAINBOW]:`games`,[O.GAMES_RAINWORMS]:`games`,[O.GAMES_PATIENCE]:`games`,[O.GAMES_HANGMAN]:`games`},D=M(()=>{let e=r.name?.toString();return e?E[e]:void 0}),k=M(()=>r.name?.toString()),A=M(()=>D.value===`games`),j=M(()=>[O.GAMES_YAHTZEE,O.GAMES_YAHTZEE_RAINBOW].includes(k.value)),N=M(()=>k.value===O.GAMES_RAINWORMS),P=M(()=>k.value===O.GAMES_PATIENCE),R=M(()=>{switch(D.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(k.value){case O.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case O.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case O.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case O.GAMES_PATIENCE:return`Instellingen voor Patience:`;case O.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle spellen:`}default:return}}),z=M(()=>`surface-panel-glass shadow-md md:shadow-none`),B=ne(H());function H(){return s.value?s.value.clone():te.create(d.value?.uid??``)}function re(){Object.assign(B,H()),_.value=m.value}async function U(){let e=d.value?.uid;if(!e)return;let t=B.clone();o.setActiveHouseHoldId(_.value),await o.updatePersonalSettings(e,t),h.value=!1}return F(h,e=>{e&&re()},{immediate:!0}),(e,t)=>(C(),W(K,null,[L(d)?(C(),W(`div`,Ne,[v(J,{class:l([z.value,n.buttonClass]),icon:`pi pi-cog`,label:n.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:L(c),severity:`secondary`,onClick:t[0]||=e=>h.value=!0},null,8,[`class`,`label`,`loading`])])):i(``,!0),v(ce,{"is-open":h.value,title:`Persoonlijke instellingen`,description:``,"cancel-text":`Annuleren`,"confirm-text":`Opslaan`,"confirm-loading":L(u),onConfirm:U,onCancel:t[13]||=e=>h.value=!1},{default:V(()=>[G(`div`,Pe,[G(`div`,Fe,[v(Y,{modelValue:B.primeVueTheme,"onUpdate:modelValue":t[1]||=e=>B.primeVueTheme=e,class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:y,required:``},null,8,[`modelValue`]),L(f)?(C(),S(Y,{key:0,modelValue:_.value,"onUpdate:modelValue":t[2]||=e=>_.value=e,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:L(p)},null,8,[`modelValue`,`options`])):i(``,!0)]),G(`div`,Ie,[G(`div`,Le,[G(`div`,Re,T(R.value??`Pagina-instellingen`),1),D.value?i(``,!0):(C(),W(`p`,ze,` Geen `))]),D.value===`tasks`?(C(),W(`div`,Be,[v(X,{modelValue:B.tasks.showDifficulty,"onUpdate:modelValue":t[3]||=e=>B.tasks.showDifficulty=e,class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`},null,8,[`modelValue`]),v(X,{modelValue:B.tasks.showCategories,"onUpdate:modelValue":t[4]||=e=>B.tasks.showCategories=e,class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`},null,8,[`modelValue`])])):D.value===`products`?(C(),W(`div`,Ve,[v(Me,{modelValue:B.products.amountOfDaysToShow,"onUpdate:modelValue":t[5]||=e=>B.products.amountOfDaysToShow=e,class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`},null,8,[`modelValue`]),v(X,{modelValue:B.products.showPromotions,"onUpdate:modelValue":t[6]||=e=>B.products.showPromotions=e,class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`},null,8,[`modelValue`]),v(X,{modelValue:B.products.showCategory,"onUpdate:modelValue":t[7]||=e=>B.products.showCategory=e,class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`},null,8,[`modelValue`]),v(X,{modelValue:B.products.showSubcategory,"onUpdate:modelValue":t[8]||=e=>B.products.showSubcategory=e,class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`},null,8,[`modelValue`])])):D.value===`games`?(C(),W(`div`,He,[A.value||j.value?(C(),W(`div`,Ue,[A.value?(C(),S(X,{key:0,modelValue:B.games.useAudio,"onUpdate:modelValue":t[9]||=e=>B.games.useAudio=e,class:`w-full`,name:`games.useAudio`,label:`Geluid`},null,8,[`modelValue`])):i(``,!0),j.value?(C(),S(Y,{key:1,modelValue:B.games.diceRollSpeed,"onUpdate:modelValue":t[10]||=e=>B.games.diceRollSpeed=e,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:ee},null,8,[`modelValue`])):i(``,!0)])):i(``,!0),N.value?(C(),W(`div`,We,[t[14]||=G(`div`,{class:`text-sm font-semibold text-title-tertiary`},` Regenwormen `,-1),v(Y,{modelValue:B.games.rainworms.robotSpeed,"onUpdate:modelValue":t[11]||=e=>B.games.rainworms.robotSpeed=e,class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:x},null,8,[`modelValue`])])):i(``,!0),P.value?(C(),W(`div`,Ge,[t[15]||=G(`div`,{class:`text-sm font-semibold text-title-tertiary`},` Patience `,-1),v(X,{modelValue:B.games.patience.doAutocomplete,"onUpdate:modelValue":t[12]||=e=>B.games.patience.doAutocomplete=e,class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`},null,8,[`modelValue`])])):i(``,!0),!A.value&&!j.value&&!N.value&&!P.value?(C(),W(`p`,Ke,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):i(``,!0)])):i(``,!0)])])]),_:1},8,[`is-open`,`confirm-loading`])],64))}});y(),j(),r();var Je={key:0,class:`hidden lg:block`},Ye={class:`grid grid-cols-2 gap-2`},Z=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Xe=e({__name:`NavigationMenuDesktop`,setup(e){let t=g(),n=_(),{isLoggedIn:r,isLogoutLoading:a}=b(t),{visibleMenuItems:o,routeLoading:c}=b(n);return(e,n)=>L(o).length?(C(),W(`div`,Je,[G(`div`,Ye,[(C(!0),W(K,null,s(L(o),e=>(C(),S(J,{key:e.id,class:l(Z),outlined:``,href:e.url,route:e.route,loading:e.loading||L(c)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),L(r)?(C(),S(J,{key:0,class:l([Z,`!rounded-full`]),severity:`danger`,outlined:``,loading:L(a),label:`Uitloggen`,onClick:L(t).logout},null,8,[`class`,`loading`,`onClick`])):(C(),S(J,{key:1,class:l([Z,`!rounded-full`]),severity:`info`,outlined:``,route:L(w).LOGIN,loading:L(c)===L(w).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):i(``,!0)}});y(),j(),r();var Ze={class:`hidden lg:flex items-center gap-4 mb-4`},Qe={class:`hidden lg:block flex-1 space-y-2`},$e={key:0,class:`shrink-0 flex items-center gap-2`},et=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,tt=e({__name:`NavigationCardDesktop`,setup(e){let t=g(),n=f(),{isLoggedIn:r}=b(t),{currentUser:a}=b(n);return(e,t)=>(C(),S(L(de),{class:l(et)},{content:V(()=>[G(`div`,Ze,[G(`div`,Qe,[L(a)?(C(!0),W(K,{key:0},s([`Welkom terug, ${L(a).firstName+(L(a).lastName?` `+L(a).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(C(),W(`p`,{key:e,class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},T(e),1))),128)):(C(),W(K,{key:1},s([`Welkom op mijn portfolio- en blogwebsite!`],e=>G(`p`,{key:e,class:`font-semibold text-base first:font-bold first:text-lg`},T(e),1)),64))]),L(r)?(C(),W(`div`,$e,[v(qe,{"icon-only":``,"button-class":`shrink-0 !p-6`}),v(J,{class:`shrink-0 !p-6`,route:L(w).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:V(()=>[...t[0]||=[G(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):i(``,!0)]),v(Xe)]),_:1}))}}),nt=z.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}});y(),re(),r();var rt={name:`BaseDrawer`,extends:oe,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:nt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function $(e,t,n){return(t=it(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=at(e,`string`);return Q(t)==`symbol`?t:t+``}function at(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ot={name:`Drawer`,extends:rt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&B.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&B.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ee(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&B.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&o(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&pe()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&me()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return H($($($({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:fe},components:{Button:le,Portal:ie,TimesIcon:R}},st=[`data-p`],ct=[`role`,`aria-modal`,`data-p`];function lt(e,t,n,r,a,o){var s=U(`Button`),c=U(`Portal`),u=d(`focustrap`);return C(),S(c,null,{default:V(function(){return[a.containerVisible?(C(),W(`div`,h({key:0,ref:o.maskRef,onMousedown:t[0]||=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm(`mask`)),[v(P,h({name:`p-drawer`,onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:``},e.ptm(`transition`)),{default:V(function(){return[e.visible?ae((C(),W(`div`,h({key:0,ref:o.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi(`root`)),[e.$slots.container?p(e.$slots,`container`,{key:0,closeCallback:o.hide}):(C(),W(K,{key:1},[G(`div`,h({ref:o.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[p(e.$slots,`header`,{class:l(e.cx(`title`))},function(){return[e.header?(C(),W(`div`,h({key:0,class:e.cx(`title`)},e.ptm(`title`)),T(e.header),17)):i(``,!0)]}),e.showCloseIcon?p(e.$slots,`closebutton`,{key:0,closeCallback:o.hide},function(){return[v(s,h({ref:o.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:V(function(t){return[p(e.$slots,`closeicon`,{},function(){return[(C(),S(k(e.closeIcon?`span`:`TimesIcon`),h({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):i(``,!0)],16),G(`div`,h({ref:o.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[p(e.$slots,`default`)],16),e.$slots.footer?(C(),W(`div`,h({key:0,ref:o.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[p(e.$slots,`footer`)],16)):i(``,!0)],64))],16,ct)),[[u]]):i(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,st)):i(``,!0)]}),_:3})}ot.render=lt,y(),j(),r();var ut={class:`flex flex-col gap-2 pb-4`},dt=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,ft=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,pt=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,mt=`surface-panel-glass`,ht=e({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){let n=e,r=g(),i=_(),o=t(),{isLoggedIn:c}=b(r),{visibleMenuItems:u,routeLoading:d}=b(i),{logout:f}=r,p={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},m=M({get:()=>n.isOpen,set:e=>{e!==n.isOpen&&n.toggle()}}),h=e=>{if(!e)return!1;let t=a.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?o.fullPath===`/`:o.fullPath.startsWith(n)};return(t,n)=>(C(),S(L(ot),{visible:m.value,"onUpdate:visible":n[1]||=e=>m.value=e,position:`right`,class:l(ft),"show-close-icon":!0},{default:V(()=>[G(`div`,ut,[(C(!0),W(K,null,s(L(u),t=>(C(),S(J,{key:t.id,class:l([`w-full`,dt,h(t.route)?pt:mt]),severity:`secondary`,outlined:!h(t.route),style:x(h(t.route)?p:void 0),fluid:``,href:t.url,route:t.route,loading:t.loading||L(d)===t.route,label:t.name,onClick:e.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),L(c)?(C(),W(K,{key:0},[v(J,{class:l([`w-full`,dt,mt]),severity:`secondary`,outlined:``,fluid:``,route:L(w).DASHBOARD,loading:L(d)===L(w).DASHBOARD,label:`Dashboard`,onClick:e.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),v(J,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=t=>{L(f)(),e.toggle()}})],64)):(C(),S(J,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:L(w).LOGIN,loading:L(d)===L(w).LOGIN,label:`Inloggen`,onClick:e.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}});y(),j(),r();var gt={class:`flex items-center gap-2`},_t=e({__name:`NavigationMenuMobile`,setup(e){let t=g(),{isLoggedIn:n}=b(t),r=I(!1),a=I(!0),o=window.scrollY,s=()=>{r.value=!r.value};function u(){let e=window.scrollY;e>o+10?a.value=!1:e<o-10&&(a.value=!0),o=e}return D(()=>{window.addEventListener(`scroll`,u)}),c(()=>{window.removeEventListener(`scroll`,u)}),(e,t)=>(C(),W(K,null,[G(`div`,{class:l([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,a.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[G(`div`,gt,[L(n)?(C(),S(qe,{key:0,"icon-only":``})):i(``,!0),v(L(le),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:s})])],2),v(ht,{"is-open":r.value,toggle:s},null,8,[`is-open`])],64))}});y();var vt={class:`sm:flex sm:items-start sm:justify-between mb-20`},yt={class:`hidden lg:flex justify-end`},bt={class:`lg:hidden w-full sm:w-1/3`},xt=e({__name:`Header`,setup(e){return(e,t)=>(C(),W(`div`,vt,[v(Ae,{class:`hidden sm:block`}),G(`div`,yt,[v(tt)]),G(`div`,bt,[v(_t)]),v(Ae,{class:`sm:hidden`})]))}});y(),r(),j();var St=e({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let n=e,r=t(),{isDarkTheme:i}=ve(),a=I(),o=M(()=>i.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),s=M(()=>i.value?`surface-panel-soft`:`surface-panel`),c=()=>{n.scrollToContent&&E(a.value)};return D(()=>{c()}),F(()=>r.fullPath,()=>{c()}),(e,t)=>(C(),W(`div`,{class:l([`min-h-screen flex flex-col`,o.value])},[G(`div`,{class:l([`container py-5 rounded-b-secondary flex-1`,s.value])},[G(`header`,null,[e.$slots.header?p(e.$slots,`header`,{},void 0,void 0,0):(C(),S(xt,{key:1}))]),G(`main`,null,[G(`div`,{ref_key:`content`,ref:a},[p(e.$slots,`content`)],512)])],2),G(`footer`,null,[e.$slots.footer?p(e.$slots,`footer`,{},void 0,void 0,0):(C(),S(_e,{key:1}))])],2))}});export{ve as i,Me as n,je as r,St as t};