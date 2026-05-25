import{A as e,Ar as t,Bn as n,Br as r,D as i,Dn as a,Ei as o,Fr as s,Ft as c,Hn as l,Hr as u,Ht as d,Ir as f,Mt as p,O as m,Oi as h,Ot as g,Pr as _,Pt as v,Rr as y,Tr as b,Tt as x,Vr as ee,Wr as te,Xr as S,Yr as C,_r as w,ai as T,b as E,br as D,c as O,cr as k,ct as A,g as j,gr as M,hr as N,ht as P,i as ne,ji as F,kn as re,kr as I,lr as L,mr as ie,ni as ae,o as R,or as z,qn as B,qr as V,ri as H,sr as U,vr as W,wr as G,x as oe,yn as se,yr as K,zr as q}from"../bundle.js";import{a as ce,i as le,n as ue,r as de,t as fe}from"./c-Dialog.js";import{n as J,t as pe}from"./c-card.js";import{t as me}from"./c-TextField.js";var he={class:`container mx-auto text-center`},ge=`border-x-0 border-b-0 py-4`,_e=b({__name:`Footer`,setup(e){return(e,t)=>(f(),D(`footer`,{class:o(ge)},[w(`div`,he,[w(`p`,null,`© `+F(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])]))}}),ve=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ye={class:`flex justify-between max-sm:pt-10`},be={class:`hidden sm:block w-full sm:min-w-fit`},xe=[`alt`],Se={class:`w-fit sm:max-w-1/2`},Ce={class:`text-title-primary`},we={class:`text-title-secondary`},Te={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Ee={class:`sm:hidden min-w-fit mt-3`},De=[`alt`],Oe=`surface-panel-glass`,ke=b({__name:`HeaderContent`,setup(e){let{routeLoading:t}=B(c());return(e,n)=>{let i=r(`RouterLink`);return f(),D(`div`,ye,[w(`div`,be,[G(i,{to:{name:T(z).HOME}},{default:C(()=>[w(`img`,{class:o([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":T(t)===T(z).HOME}]),src:ve,alt:T(k).name},null,10,xe)]),_:1},8,[`to`])]),w(`div`,Se,[w(`h1`,Ce,F(T(k).name),1),w(`h2`,we,F(T(k).service),1),w(`div`,Te,[G(T(R),{class:o(Oe),icon:`pi pi-briefcase`,label:T(k).role},null,8,[`label`]),G(T(R),{class:o(Oe),icon:`pi pi-map-marker`,label:`${T(k).location.city}, ${T(k).location.country}`},null,8,[`label`])])]),w(`div`,Ee,[G(i,{to:{name:T(z).HOME}},{default:C(()=>[w(`img`,{class:o([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":T(t)===T(z).HOME}]),src:ve,alt:T(k).name},null,10,De)]),_:1},8,[`to`])])])}}}),Ae=()=>{let e=v(),t=d(),r=n(),i=a(),{firebaseUser:o}=B(e),{houseHolds:s,activeHouseHold:c}=B(t),{activeHouseHoldId:l}=B(r),{publicUsers:u}=B(i),f=M(()=>u.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),p=M(()=>[{value:null,label:`Geen huishouden`},...[...s.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),m=M(()=>[...s.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),h=M(()=>c.value),g=M(()=>h.value?.id??m.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),_=e=>e?s.value.find(t=>t.id===e)??null:null,y=e=>{let t=_(e);return t?t.getUserOptions(f.value):[]};return{houseHoldOptions:p,requiredHouseHoldOptions:m,activeHouseHoldId:l,currentUsersHouseHold:h,defaultHouseHoldId:g,getHouseHoldById:_,getHouseHoldUserOptions:y,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},...y(e)],getDefaultUserId:e=>_(e)?.getDefaultUserId(o.value?.uid)??null,normalizeUserId:(e,t)=>_(e)?.normalizeUserId(t,o.value?.uid)??t??null,normalizeUserIds:(e,t)=>_(e)?.normalizeUserIds(t,o.value?.uid)??[...new Set(t??[])]}},je=b({__name:`NumberField`,props:I({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let n=e,r=te(e,`modelValue`),i=H(``);function a(){r.value=parseFloat(i.value)||0}return V(r,e=>{i.value=e.toString()},{immediate:!0}),(e,r)=>(f(),W(me,t(n,{modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,"input-props":{...n.inputProps,type:`number`},onBlur:a}),null,16,[`modelValue`,`input-props`]))}}),Me=m.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),Y={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:j,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Me,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return x({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Ne=[`data-p-checked`,`data-p-disabled`,`data-p`],Pe=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],Fe=[`data-p`],Ie=[`data-p`];function Le(e,n,r,i,a,o){return f(),D(`div`,t({class:e.cx(`root`),style:e.sx(`root`)},o.getPTOptions(`root`),{"data-p-checked":o.checked,"data-p-disabled":e.disabled,"data-p":o.dataP}),[w(`input`,t({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:o.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":o.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:n[0]||=function(){return o.onFocus&&o.onFocus.apply(o,arguments)},onBlur:n[1]||=function(){return o.onBlur&&o.onBlur.apply(o,arguments)},onChange:n[2]||=function(){return o.onChange&&o.onChange.apply(o,arguments)}},o.getPTOptions(`input`)),null,16,Pe),w(`div`,t({class:e.cx(`slider`)},o.getPTOptions(`slider`),{"data-p":o.dataP}),[w(`div`,t({class:e.cx(`handle`)},o.getPTOptions(`handle`),{"data-p":o.dataP}),[q(e.$slots,`handle`,{checked:o.checked})],16,Ie)],16,Fe)],16,Ne)}Y.render=Le;var Re=[`for`],X=b({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:n}){let r=e,i=M({get:()=>r.modelValue,set:e=>{r.disabled||s(`update:modelValue`,e)}}),a=M(()=>r.name+(r.id?`.${r.id}`:``)),s=n;return(n,r)=>(f(),D(`div`,null,[e.label?(f(),D(`label`,t({key:0,class:`block text-sm font-bold mb-2`,for:a.value},e.labelProps),F(e.label),17,Re)):K(``,!0),w(`div`,{class:o([`p-input flex align-middle`,{"cursor-pointer":!e.disabled}]),onClick:r[1]||=ie(e=>i.value=!i.value,[`prevent`])},[G(T(Y),{inputId:a.value,ref:`input`,modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,disabled:e.disabled,pt:{slider:{class:i.value?`bg-primary-500`:void 0}}},null,8,[`inputId`,`modelValue`,`disabled`,`pt`])],2)]))}}),ze={key:0,class:`inline-flex`},Be={class:`my-5 flex flex-col gap-5`},Ve={class:`flex flex-col gap-3`},He={class:`surface-panel-soft flex flex-col gap-4 rounded-2xl p-4`},Ue={class:`flex flex-col gap-1`},We={class:`text-base font-semibold text-title-secondary`},Ge={key:0,class:`text-sm text-title-tertiary`},Ke={key:0,class:`flex flex-col gap-3`},qe={key:1,class:`flex flex-col gap-3`},Je={key:2,class:`flex flex-col gap-4`},Ye={key:0,class:`flex flex-col gap-3`},Xe={key:1,class:`flex flex-col gap-3`},Ze={key:2,class:`flex flex-col gap-3`},Qe={key:3,class:`text-sm text-title-tertiary`},$e=b({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,r=p(),i=v(),a=n(),{personalSettings:s,isFetchLoading:c,isMutationLoading:u}=B(a),{firebaseUser:d,isOwner:m}=B(i),{houseHoldOptions:h,activeHouseHoldId:g}=Ae(),_=H(!1),y=H(null),b=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],x=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],ee=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],te={[z.TASKS]:`tasks`,[z.PRODUCTS]:`products`,[z.GAMES]:`games`,[U.GAMES_YAHTZEE]:`games`,[U.GAMES_YAHTZEE_RAINBOW]:`games`,[U.GAMES_RAINWORMS]:`games`,[U.GAMES_PATIENCE]:`games`,[U.GAMES_HANGMAN]:`games`},S=M(()=>{let e=r.name?.toString();return e?te[e]:void 0}),O=M(()=>r.name?.toString()),k=M(()=>S.value===`games`),A=M(()=>[U.GAMES_YAHTZEE,U.GAMES_YAHTZEE_RAINBOW].includes(O.value)),j=M(()=>O.value===U.GAMES_RAINWORMS),P=M(()=>O.value===U.GAMES_PATIENCE),ne=M(()=>{switch(S.value){case`tasks`:return`Instellingen voor Taken:`;case`products`:return`Instellingen voor Boodschappen:`;case`games`:switch(O.value){case U.GAMES_YAHTZEE:return`Instellingen voor Yahtzee:`;case U.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee:`;case U.GAMES_RAINWORMS:return`Instellingen voor Regenwormen:`;case U.GAMES_PATIENCE:return`Instellingen voor Patience:`;case U.GAMES_HANGMAN:return`Instellingen voor Galgje:`;default:return`Instellingen voor alle Spellen:`}default:return}}),re=M(()=>`surface-panel-glass shadow-md md:shadow-none`),I=ae(L());function L(){return s.value?s.value.clone():l.create(d.value?.uid??``)}function ie(){Object.assign(I,L()),y.value=g.value}async function R(){let e=d.value?.uid;if(!e)return;let t=I.clone();a.setActiveHouseHoldId(y.value),await a.updatePersonalSettings(e,t),_.value=!1}return V(_,e=>{e&&ie()},{immediate:!0}),(e,n)=>(f(),D(N,null,[T(d)?(f(),D(`div`,ze,[G(E,{class:o([re.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:T(c),severity:`secondary`,onClick:n[0]||=e=>_.value=!0},null,8,[`class`,`label`,`loading`])])):K(``,!0),G(fe,{isOpen:_.value,title:`Persoonlijke instellingen`,description:``,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:T(u),onConfirm:R,onCancel:n[13]||=e=>_.value=!1},{default:C(()=>[w(`div`,Be,[w(`div`,Ve,[G(J,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:b,required:``,modelValue:I.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>I.primeVueTheme=e},null,8,[`modelValue`]),T(m)?(f(),W(J,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:T(h),modelValue:y.value,"onUpdate:modelValue":n[2]||=e=>y.value=e},null,8,[`options`,`modelValue`])):K(``,!0)]),w(`div`,He,[w(`div`,Ue,[w(`div`,We,F(ne.value??`Pagina-instellingen`),1),S.value?K(``,!0):(f(),D(`p`,Ge,` Geen `))]),S.value===`tasks`?(f(),D(`div`,Ke,[G(X,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:I.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>I.tasks.showDifficulty=e},null,8,[`modelValue`]),G(X,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:I.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>I.tasks.showCategories=e},null,8,[`modelValue`])])):S.value===`products`?(f(),D(`div`,qe,[G(je,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:I.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>I.products.amountOfDaysToShow=e},null,8,[`modelValue`]),G(X,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:I.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>I.products.showPromotions=e},null,8,[`modelValue`]),G(X,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:I.products.showCategory,"onUpdate:modelValue":n[7]||=e=>I.products.showCategory=e},null,8,[`modelValue`]),G(X,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:I.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>I.products.showSubcategory=e},null,8,[`modelValue`])])):S.value===`games`?(f(),D(`div`,Je,[k.value||A.value?(f(),D(`div`,Ye,[k.value?(f(),W(X,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:I.games.useAudio,"onUpdate:modelValue":n[9]||=e=>I.games.useAudio=e},null,8,[`modelValue`])):K(``,!0),A.value?(f(),W(J,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:x,modelValue:I.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>I.games.diceRollSpeed=e},null,8,[`modelValue`])):K(``,!0)])):K(``,!0),j.value?(f(),D(`div`,Xe,[n[14]||=w(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),G(J,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:ee,modelValue:I.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>I.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):K(``,!0),P.value?(f(),D(`div`,Ze,[n[15]||=w(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),G(X,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:I.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>I.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):K(``,!0),!k.value&&!A.value&&!j.value&&!P.value?(f(),D(`p`,Qe,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):K(``,!0)])):K(``,!0)])])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),et={key:0,class:`hidden lg:block`},tt={class:`grid grid-cols-2 gap-2`},Z=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,nt=b({__name:`NavigationMenuDesktop`,setup(e){let t=v(),n=c(),{isLoggedIn:r,isLogoutLoading:i}=B(t),{visibleMenuItems:a,routeLoading:s}=B(n);return(e,n)=>T(a).length?(f(),D(`div`,et,[w(`div`,tt,[(f(!0),D(N,null,y(T(a),e=>(f(),W(E,{key:e.id,class:o(Z),outlined:``,href:e.url,route:e.route,loading:e.loading||T(s)===e.route,label:e.name},null,8,[`href`,`route`,`loading`,`label`]))),128)),T(r)?(f(),W(E,{key:0,class:o([Z,`!rounded-full`]),severity:`danger`,outlined:``,loading:T(i),label:`Uitloggen`,onClick:T(t).logout},null,8,[`class`,`loading`,`onClick`])):(f(),W(E,{key:1,class:o([Z,`!rounded-full`]),severity:`info`,outlined:``,route:T(z).LOGIN,loading:T(s)===T(z).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):K(``,!0)}}),rt={class:`hidden lg:flex items-center gap-4 mb-4`},it={class:`hidden lg:block flex-1 space-y-2`},at={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},ot={class:`font-semibold text-base first:font-bold first:text-lg`},st={key:0,class:`shrink-0 flex items-center gap-2`},ct=`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none`,lt=b({__name:`NavigationCardDesktop`,setup(e){let t=v(),n=re(),{isLoggedIn:r}=B(t),{currentUser:i}=B(n);return(e,t)=>(f(),W(T(pe),{class:o(ct)},{content:C(()=>[w(`div`,rt,[w(`div`,it,[T(i)?(f(!0),D(N,{key:0},y([`Welkom terug, ${T(i).firstName+(T(i).lastName?` `+T(i).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(f(),D(`p`,at,F(e),1))),256)):(f(),D(N,{key:1},y([`Welkom op mijn portfolio- en blogwebsite!`],e=>w(`p`,ot,F(e),1)),64))]),T(r)?(f(),D(`div`,st,[G($e,{"icon-only":``,"button-class":`shrink-0 !p-6`}),G(E,{class:`shrink-0 !p-6`,route:T(z).DASHBOARD,rounded:``,outlined:``,"aria-label":`Ga naar dashboard`},{default:C(()=>[...t[0]||=[w(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):K(``,!0)]),G(nt)]),_:1}))}}),ut=m.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),dt={name:`BaseDrawer`,extends:i,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:ut,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function $(e,t,n){return(t=ft(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e){var t=pt(e,`string`);return Q(t)==`symbol`?t:t+``}function pt(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var mt={name:`Drawer`,extends:dt,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&e.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&e.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&A(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&e.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&P(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ue()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&de()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return x($($($({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:le},components:{Button:oe,Portal:ne,TimesIcon:O}},ht=[`data-p`],gt=[`role`,`aria-modal`,`data-p`];function _t(e,n,i,a,s,c){var l=r(`Button`),d=r(`Portal`),p=ee(`focustrap`);return f(),W(d,null,{default:C(function(){return[s.containerVisible?(f(),D(`div`,t({key:0,ref:c.maskRef,onMousedown:n[0]||=function(){return c.onMaskClick&&c.onMaskClick.apply(c,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":c.dataP},e.ptm(`mask`)),[G(L,t({name:`p-drawer`,onEnter:c.onEnter,onAfterEnter:c.onAfterEnter,onBeforeLeave:c.onBeforeLeave,onLeave:c.onLeave,onAfterLeave:c.onAfterLeave,appear:``},e.ptm(`transition`)),{default:C(function(){return[e.visible?S((f(),D(`div`,t({key:0,ref:c.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":c.dataP},e.ptmi(`root`)),[e.$slots.container?q(e.$slots,`container`,{key:0,closeCallback:c.hide}):(f(),D(N,{key:1},[w(`div`,t({ref:c.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[q(e.$slots,`header`,{class:o(e.cx(`title`))},function(){return[e.header?(f(),D(`div`,t({key:0,class:e.cx(`title`)},e.ptm(`title`)),F(e.header),17)):K(``,!0)]}),e.showCloseIcon?q(e.$slots,`closebutton`,{key:0,closeCallback:c.hide},function(){return[G(l,t({ref:c.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":c.closeAriaLabel,unstyled:e.unstyled,onClick:c.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:C(function(n){return[q(e.$slots,`closeicon`,{},function(){return[(f(),W(u(e.closeIcon?`span`:`TimesIcon`),t({class:[e.closeIcon,n.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):K(``,!0)],16),w(`div`,t({ref:c.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[q(e.$slots,`default`)],16),e.$slots.footer?(f(),D(`div`,t({key:0,ref:c.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[q(e.$slots,`footer`)],16)):K(``,!0)],64))],16,gt)),[[p]]):K(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,ht)):K(``,!0)]}),_:3})}mt.render=_t;var vt={class:`flex flex-col gap-2 pb-4`},yt=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,bt=`lg:hidden !w-[min(26rem,85vw)] surface-panel-glass`,xt=`surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold`,St=`surface-panel-glass`,Ct=b({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){let t=e,n=v(),r=c(),i=p(),{isLoggedIn:a}=B(n),{visibleMenuItems:s,routeLoading:l}=B(r),{logout:u}=n,d={borderColor:`var(--p-primary-color)`,color:`var(--app-text-primary)`},m=M({get:()=>t.isOpen,set:e=>{e!==t.isOpen&&t.toggle()}}),_=e=>{if(!e)return!1;let t=g.find(t=>t.name===e);if(!t)return!1;let n=t.path.split(`/:`)[0];return n===`/`?i.fullPath===`/`:i.fullPath.startsWith(n)};return(t,n)=>(f(),W(T(mt),{visible:m.value,"onUpdate:visible":n[1]||=e=>m.value=e,position:`right`,class:o(bt),"show-close-icon":!0},{default:C(()=>[w(`div`,vt,[(f(!0),D(N,null,y(T(s),t=>(f(),W(E,{key:t.id,class:o([`w-full`,yt,_(t.route)?xt:St]),severity:`secondary`,outlined:!_(t.route),style:h(_(t.route)?d:void 0),fluid:``,href:t.url,route:t.route,loading:t.loading||T(l)===t.route,label:t.name,onClick:e.toggle},null,8,[`class`,`outlined`,`style`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),T(a)?(f(),D(N,{key:0},[G(E,{class:o([`w-full`,yt,St]),severity:`secondary`,outlined:``,fluid:``,route:T(z).DASHBOARD,loading:T(l)===T(z).DASHBOARD,label:`Dashboard`,onClick:e.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),G(E,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=t=>{T(u)(),e.toggle()}})],64)):(f(),W(E,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,severity:`info`,outlined:``,route:T(z).LOGIN,loading:T(l)===T(z).LOGIN,label:`Inloggen`,onClick:e.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`]))}}),wt={class:`flex items-center gap-2`},Tt=b({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=B(v()),n=H(!1),r=H(!0),i=window.scrollY,a=()=>{n.value=!n.value};function c(){let e=window.scrollY;e>i+10?r.value=!1:e<i-10&&(r.value=!0),i=e}return _(()=>{window.addEventListener(`scroll`,c)}),s(()=>{window.removeEventListener(`scroll`,c)}),(e,i)=>(f(),D(N,null,[w(`div`,{class:o([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[w(`div`,wt,[T(t)?(f(),W($e,{key:0,"icon-only":``})):K(``,!0),G(T(oe),{class:`surface-panel-glass`,icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:a})])],2),G(Ct,{"is-open":n.value,toggle:a},null,8,[`is-open`])],64))}}),Et={class:`sm:flex sm:items-start sm:justify-between mb-20`},Dt={class:`hidden lg:flex justify-end`},Ot={class:`lg:hidden w-full sm:w-1/3`},kt=b({__name:`Header`,setup(e){return(e,t)=>(f(),D(`div`,Et,[G(ke,{class:`hidden sm:block`}),w(`div`,Dt,[G(lt)]),w(`div`,Ot,[G(Tt)]),G(ke,{class:`sm:hidden`})]))}}),At=b({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=p(),{isDarkTheme:r}=ce(),i=H(),a=M(()=>r.value?`bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950`:`bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50`),s=M(()=>r.value?`surface-panel-soft`:`surface-panel`),c=()=>{t.scrollToContent&&se(i.value)};return _(()=>{c()}),V(()=>n.fullPath,()=>{c()}),(e,t)=>(f(),D(`div`,{class:o([`min-h-screen flex flex-col`,a.value])},[w(`div`,{class:o([`container py-5 rounded-b-secondary flex-1`,s.value])},[w(`header`,null,[e.$slots.header?q(e.$slots,`header`,{key:0}):(f(),W(kt,{key:1}))]),w(`main`,null,[w(`div`,{ref_key:`content`,ref:i},[q(e.$slots,`content`)],512)])],2),w(`footer`,null,[e.$slots.footer?q(e.$slots,`footer`,{key:0}):(f(),W(_e,{key:1}))])],2))}});export{Ae as a,je as i,X as n,Y as r,At as t};