import{A as e,Ar as t,Br as n,Cr as r,D as i,Fr as a,Ft as o,Gr as s,Ht as c,Ii as l,Kn as u,Kr as d,Mt as f,Ni as p,O as m,Or as h,Ot as g,Pr as _,Pt as v,Qr as y,Sr as b,Tt as x,Ur as S,Vr as C,Wn as ee,Wr as w,Yr as te,Zn as T,b as E,br as D,c as ne,ci as O,ct as k,dr as A,ei as j,fr as M,ht as N,i as P,ji as F,jn as I,kn as L,o as R,pr as re,qr as z,si as ie,ti as B,ui as V,ur as H,wr as U,x as W,xn as ae,xr as G,yr as K,zr as oe}from"../bundle.js";import{a as se,i as ce,n as le,r as ue,t as de}from"./c-Dialog.js";import{n as q,t as fe}from"./c-card.js";import{t as pe}from"./c-TextField.js";import{t as J}from"./c-SwitchField.js";var me={class:`container mx-auto text-center`},he=`border-x-0 border-b-0 py-4`,ge=t({__name:`Footer`,setup(e){return(e,t)=>(C(),U(`footer`,{class:F(he)},[G(`div`,me,[G(`p`,null,`© `+l(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}}),_e=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ve={class:`flex justify-between max-sm:pt-10`},ye={class:`hidden sm:block w-full sm:min-w-fit`},be=[`alt`],xe={class:`w-fit sm:max-w-1/2`},Se={class:`text-title-primary`},Ce={class:`text-title-secondary`},we={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Te={class:`sm:hidden min-w-fit mt-3`},Ee=[`alt`],De=`surface-panel-glass`,Oe=t({__name:`HeaderContent`,setup(e){let{routeLoading:t}=T(o());return(e,n)=>{let r=s(`RouterLink`);return C(),U(`div`,ve,[G(`div`,ye,[h(r,{to:{name:V(H).HOME}},{default:j(()=>[G(`img`,{class:F([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":V(t)===V(H).HOME}]),src:_e,alt:V(M).name},null,10,be)]),_:1},8,[`to`])]),G(`div`,xe,[G(`h1`,Se,l(V(M).name),1),G(`h2`,Ce,l(V(M).service),1),G(`div`,we,[h(V(R),{class:F(De),icon:`pi pi-briefcase`,label:V(M).role},null,8,[`label`]),h(V(R),{class:F(De),icon:`pi pi-map-marker`,label:`${V(M).location.city}, ${V(M).location.country}`},null,8,[`label`])])]),G(`div`,Te,[h(r,{to:{name:V(H).HOME}},{default:j(()=>[G(`img`,{class:F([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":V(t)===V(H).HOME}]),src:_e,alt:V(M).name},null,10,Ee)]),_:1},8,[`to`])])])}}}),ke=()=>{let e=v(),t=c(),n=ee(),r=L(),{firebaseUser:i}=T(e),{houseHolds:a,activeHouseHold:o}=T(t),{activeHouseHoldId:s}=T(n),{publicUsers:l}=T(r),u=D(()=>l.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),d=D(()=>[{value:null,label:`Geen huishouden`},...[...a.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),f=D(()=>[...a.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),p=D(()=>o.value),m=D(()=>p.value?.id??f.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),h=e=>e?a.value.find(t=>t.id===e)??null:null,g=e=>{let t=h(e);return t?t.getUserOptions(u.value):[]};return{houseHoldOptions:d,requiredHouseHoldOptions:f,activeHouseHoldId:s,currentUsersHouseHold:p,defaultHouseHoldId:m,getHouseHoldById:h,getHouseHoldUserOptions:g,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...g(e)],getDefaultUserId:e=>h(e)?.getDefaultUserId(i.value?.uid)??null,normalizeUserId:(e,t)=>h(e)?.normalizeUserId(t,i.value?.uid)??t??null,normalizeUserIds:(e,t)=>h(e)?.normalizeUserIds(t,i.value?.uid)??[...new Set(t??[])]}},Ae=t({__name:`NumberField`,props:_({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=te(e,`modelValue`),r=O(``);function i(){n.value=parseFloat(r.value)||0}return y(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(C(),b(pe,a(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),je={key:0,class:`inline-flex`},Me={class:`my-5 flex flex-col gap-5`},Ne={class:`flex flex-col gap-3`},Pe={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Fe={class:`flex flex-col gap-1`},Ie={class:`text-base font-semibold text-title-secondary`},Le={key:0,class:`text-sm text-title-tertiary`},Re={key:0,class:`flex flex-col gap-3`},ze={key:1,class:`flex flex-col gap-3`},Be={key:2,class:`flex flex-col gap-4`},Ve={key:0,class:`flex flex-col gap-3`},He={key:1,class:`flex flex-col gap-3`},Ue={key:2,class:`flex flex-col gap-3`},We={key:3,class:`text-sm text-title-tertiary`},Ge=t({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,n=f(),i=v(),a=ee(),{personalSettings:o,isFetchLoading:s,isMutationLoading:c}=T(a),{firebaseUser:d,isOwner:p}=T(i),{houseHoldOptions:m,activeHouseHoldId:g}=ke(),_=O(!1),x=O(null),S=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],w=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],te=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],ne={[H.TASKS]:`tasks`,[H.PRODUCTS]:`products`,[H.GAMES]:`games`,[A.GAMES_YAHTZEE]:`games`,[A.GAMES_YAHTZEE_RAINBOW]:`games`,[A.GAMES_RAINWORMS]:`games`,[A.GAMES_PATIENCE]:`games`,[A.GAMES_HANGMAN]:`games`},k=D(()=>{let e=n.name?.toString();return e?ne[e]:void 0}),M=D(()=>n.name?.toString()),N=D(()=>k.value===`games`),P=D(()=>[A.GAMES_YAHTZEE,A.GAMES_YAHTZEE_RAINBOW].includes(M.value)),I=D(()=>M.value===A.GAMES_RAINWORMS),L=D(()=>M.value===A.GAMES_PATIENCE),R=D(()=>{switch(k.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(M.value){case A.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case A.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case A.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case A.GAMES_PATIENCE:return`Instellingen voor Patience:`;case A.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle spellen:`}default:return}}),re=D(()=>`surface-panel-glass shadow-md md:shadow-none`),z=ie(B());function B(){return o.value?o.value.clone():u.create(d.value?.uid??``)}function W(){Object.assign(z,B()),x.value=g.value}async function ae(){let e=d.value?.uid;if(!e)return;let t=z.clone();a.setActiveHouseHoldId(x.value),await a.updatePersonalSettings(e,t),_.value=!1}return y(_,e=>{e&&W()},{immediate:!0}),(e,n)=>(C(),U(K,null,[V(d)?(C(),U(`div`,je,[h(E,{class:F([re.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:V(s),severity:`secondary`,onClick:n[0]||=e=>_.value=!0},null,8,[`class`,`label`,`loading`])])):r(``,!0),h(de,{isOpen:_.value,title:`Persoonlijke instellingen`,description:``,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:V(c),onConfirm:ae,onCancel:n[13]||=e=>_.value=!1},{default:j(()=>[G(`div`,Me,[G(`div`,Ne,[h(q,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:S,required:``,modelValue:z.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>z.primeVueTheme=e},null,8,[`modelValue`]),V(p)?(C(),b(q,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:V(m),modelValue:x.value,"onUpdate:modelValue":n[2]||=e=>x.value=e},null,8,[`options`,`modelValue`])):r(``,!0)]),G(`div`,Pe,[G(`div`,Fe,[G(`div`,Ie,l(R.value??`Pagina-instellingen`),1),k.value?r(``,!0):(C(),U(`p`,Le,` Geen `))]),k.value===`tasks`?(C(),U(`div`,Re,[h(J,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:z.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>z.tasks.showDifficulty=e},null,8,[`modelValue`]),h(J,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:z.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>z.tasks.showCategories=e},null,8,[`modelValue`])])):k.value===`products`?(C(),U(`div`,ze,[h(Ae,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:z.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>z.products.amountOfDaysToShow=e},null,8,[`modelValue`]),h(J,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:z.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>z.products.showPromotions=e},null,8,[`modelValue`]),h(J,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:z.products.showCategory,"onUpdate:modelValue":n[7]||=e=>z.products.showCategory=e},null,8,[`modelValue`]),h(J,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:z.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>z.products.showSubcategory=e},null,8,[`modelValue`])])):k.value===`games`?(C(),U(`div`,Be,[N.value||P.value?(C(),U(`div`,Ve,[N.value?(C(),b(J,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:z.games.useAudio,"onUpdate:modelValue":n[9]||=e=>z.games.useAudio=e},null,8,[`modelValue`])):r(``,!0),P.value?(C(),b(q,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:w,modelValue:z.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>z.games.diceRollSpeed=e},null,8,[`modelValue`])):r(``,!0)])):r(``,!0),I.value?(C(),U(`div`,He,[n[14]||=G(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),h(q,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:te,modelValue:z.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>z.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):r(``,!0),L.value?(C(),U(`div`,Ue,[n[15]||=G(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),h(J,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:z.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>z.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):r(``,!0),!N.value&&!P.value&&!I.value&&!L.value?(C(),U(`p`,We,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):r(``,!0)])):r(``,!0)])])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),Ke={key:0,class:`hidden lg:block`},qe={class:`grid grid-cols-2 gap-2`},Y=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Je=t({__name:`NavigationMenuDesktop`,setup(e){let t=v(),n=o(),{isLoggedIn:i,isLogoutLoading:a}=T(t),{visibleMenuItems:s,routeLoading:c}=T(n);return(e,n)=>V(s).length?(C(),U(`div`,Ke,[G(`div`,qe,[(C(!0),U(K,null,S(V(s),e=>(C(),b(E,{key:e.id,class:F(Y),outlined:``,href:e.url,route:e.route,loading:e.loading||V(c)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),V(i)?(C(),b(E,{key:0,class:F([Y,`!rounded-full`]),severity:`danger`,outlined:``,loading:V(a),label:`Uitloggen`,onClick:V(t).logout},null,8,[`class`,`loading`,`onClick`])):(C(),b(E,{key:1,class:F([Y,`!rounded-full`]),severity:`info`,outlined:``,route:V(H).LOGIN,loading:V(c)===V(H).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):r(``,!0)}}),Ye={class:`hidden lg:flex items-center gap-4 mb-4`},Xe={class:`hidden lg:block flex-1 space-y-2`},Ze={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},Qe={class:`font-semibold text-base first:font-bold first:text-lg`},$e={key:0,class:`shrink-0 flex items-center gap-2`},et=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,tt=t({__name:`NavigationCardDesktop`,setup(e){let t=v(),n=I(),{isLoggedIn:i}=T(t),{currentUser:a}=T(n);return(e,t)=>(C(),b(V(fe),{class:F(et)},{content:j(()=>[G(`div`,Ye,[G(`div`,Xe,[V(a)?(C(!0),U(K,{key:0},S([`Welkom terug, ${V(a).firstName+(V(a).lastName?` `+V(a).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(C(),U(`p`,Ze,l(e),1))),256)):(C(),U(K,{key:1},S([`Welkom op mijn portfolio- en blogwebsite!`],e=>G(`p`,Qe,l(e),1)),64))]),V(i)?(C(),U(`div`,$e,[h(Ge,{"icon-only":``,"button-class":`shrink-0 !p-6`}),h(E,{class:`shrink-0 !p-6`,route:V(H).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:j(()=>[...t[0]||=[G(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):r(``,!0)]),h(Je)]),_:1}))}}),nt=m.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),rt={name:`BaseDrawer`,extends:i,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:nt,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=it(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e){var t=at(e,`string`);return X(t)==`symbol`?t:t+``}function at(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Drawer`,extends:rt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&e.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&e.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&k(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&e.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&N(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&le()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&ue()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return x(Z(Z(Z({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:ce},components:{Button:W,Portal:P,TimesIcon:ne}},ot=[`data-p`],st=[`role`,`aria-modal`,`data-p`];function ct(e,t,n,i,o,c){var u=s(`Button`),f=s(`Portal`),p=d(`focustrap`);return C(),b(f,null,{default:j(function(){return[o.containerVisible?(C(),U(`div`,a({key:0,ref:c.maskRef,onMousedown:t[0]||=function(){return c.onMaskClick&&c.onMaskClick.apply(c,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":c.dataP},e.ptm(`mask`)),[h(re,a({name:`p-drawer`,onEnter:c.onEnter,onAfterEnter:c.onAfterEnter,onBeforeLeave:c.onBeforeLeave,onLeave:c.onLeave,onAfterLeave:c.onAfterLeave,appear:``},e.ptm(`transition`)),{default:j(function(){return[e.visible?B((C(),U(`div`,a({key:0,ref:c.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":c.dataP},e.ptmi(`root`)),[e.$slots.container?w(e.$slots,`container`,{key:0,closeCallback:c.hide}):(C(),U(K,{key:1},[G(`div`,a({ref:c.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[w(e.$slots,`header`,{class:F(e.cx(`title`))},function(){return[e.header?(C(),U(`div`,a({key:0,class:e.cx(`title`)},e.ptm(`title`)),l(e.header),17)):r(``,!0)]}),e.showCloseIcon?w(e.$slots,`closebutton`,{key:0,closeCallback:c.hide},function(){return[h(u,a({ref:c.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":c.closeAriaLabel,unstyled:e.unstyled,onClick:c.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:j(function(t){return[w(e.$slots,`closeicon`,{},function(){return[(C(),b(z(e.closeIcon?`span`:`TimesIcon`),a({class:[e.closeIcon,t.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):r(``,!0)],16),G(`div`,a({ref:c.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[w(e.$slots,`default`)],16),e.$slots.footer?(C(),U(`div`,a({key:0,ref:c.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[w(e.$slots,`footer`)],16)):r(``,!0)],64))],16,st)),[[p]]):r(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,ot)):r(``,!0)]}),_:3})}Q.render=ct;var lt={class:`flex flex-col gap-2 pb-4`},ut=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,dt=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,ft=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,$=`surface-panel-glass`,pt=t({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){let t=e,n=v(),r=o(),i=f(),{isLoggedIn:a}=T(n),{visibleMenuItems:s,routeLoading:c}=T(r),{logout:l}=n,u={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},d=D({get:()=>t.isOpen,set:e=>{e!==t.isOpen&&t.toggle()}}),m=e=>{if(!e)return!1;let t=g.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?i.fullPath===`/`:i.fullPath.startsWith(n)};return(t,n)=>(C(),b(V(Q),{visible:d.value,"onUpdate:visible":n[1]||=e=>d.value=e,position:`right`,class:F(dt),"show-close-icon":!0},{default:j(()=>[G(`div`,lt,[(C(!0),U(K,null,S(V(s),t=>(C(),b(E,{key:t.id,class:F([`w-full`,ut,m(t.route)?ft:$]),severity:`secondary`,outlined:!m(t.route),style:p(m(t.route)?u:void 0),fluid:``,href:t.url,route:t.route,loading:t.loading||V(c)===t.route,label:t.name,onClick:e.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),V(a)?(C(),U(K,{key:0},[h(E,{class:F([`w-full`,ut,$]),severity:`secondary`,outlined:``,fluid:``,route:V(H).DASHBOARD,loading:V(c)===V(H).DASHBOARD,label:`Dashboard`,onClick:e.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),h(E,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=t=>{V(l)(),e.toggle()}})],64)):(C(),b(E,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:V(H).LOGIN,loading:V(c)===V(H).LOGIN,label:`Inloggen`,onClick:e.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}}),mt={class:`flex items-center gap-2`},ht=t({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=T(v()),i=O(!1),a=O(!0),o=window.scrollY,s=()=>{i.value=!i.value};function c(){let e=window.scrollY;e>o+10?a.value=!1:e<o-10&&(a.value=!0),o=e}return oe(()=>{window.addEventListener(`scroll`,c)}),n(()=>{window.removeEventListener(`scroll`,c)}),(e,n)=>(C(),U(K,null,[G(`div`,{class:F([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,a.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[G(`div`,mt,[V(t)?(C(),b(Ge,{key:0,"icon-only":``})):r(``,!0),h(V(W),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:s})])],2),h(pt,{"is-open":i.value,toggle:s},null,8,[`is-open`])],64))}}),gt={class:`sm:flex sm:items-start sm:justify-between mb-20`},_t={class:`hidden lg:flex justify-end`},vt={class:`lg:hidden w-full sm:w-1/3`},yt=t({__name:`Header`,setup(e){return(e,t)=>(C(),U(`div`,gt,[h(Oe,{class:`hidden sm:block`}),G(`div`,_t,[h(tt)]),G(`div`,vt,[h(ht)]),h(Oe,{class:`sm:hidden`})]))}}),bt=t({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=f(),{isDarkTheme:r}=se(),i=O(),a=D(()=>r.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),o=D(()=>r.value?`surface-panel-soft`:`surface-panel`),s=()=>{t.scrollToContent&&ae(i.value)};return oe(()=>{s()}),y(()=>n.fullPath,()=>{s()}),(e,t)=>(C(),U(`div`,{class:F([`min-h-screen flex flex-col`,a.value])},[G(`div`,{class:F([`container py-5 rounded-b-secondary flex-1`,o.value])},[G(`header`,null,[e.$slots.header?w(e.$slots,`header`,{key:0}):(C(),b(yt,{key:1}))]),G(`main`,null,[G(`div`,{ref_key:`content`,ref:i},[w(e.$slots,`content`)],512)])],2),G(`footer`,null,[e.$slots.footer?w(e.$slots,`footer`,{key:0}):(C(),b(ge,{key:1}))])],2))}});export{Ae as n,ke as r,bt as t};