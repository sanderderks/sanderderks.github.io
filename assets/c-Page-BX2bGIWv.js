import{At as e,Br as t,Cr as n,Ct as r,D as i,Dr as a,Gr as o,Hr as s,Ir as c,It as l,Jr as u,Lr as d,Lt as f,Mr as p,Nr as m,Or as h,Pr as g,Pt as _,Rr as v,S as y,Sr as b,Wt as x,Y as ee,_r as S,ar as C,b as te,c as w,dr as T,ei as ne,fr as E,ft as D,gr as O,hr as k,ir as A,jn as j,ki as M,kn as N,mr as P,nt as F,o as re,or as ie,pr as I,qn as L,qr as R,ri as z,rr as B,ti as V,u as ae,wi as H,wt as oe,x as U,xn as W,zr as G}from"../bundle.js";import{t as K}from"./c-usePrimeVueTheme-CPB4jsIG.js";import{i as se,n as ce,r as le,t as ue}from"./c-Dialog--q6xH386.js";import{a as q,c as J,l as de}from"./c-Bubble-D2WU2646.js";import{t as fe}from"./c-TextField-DJzCcj00.js";var pe={class:`container mx-auto text-center`},me=n({__name:`Footer`,setup(e){let{isDarkTheme:t}=K(),n=I(()=>t.value?`bg-black text-white shadow-md py-4`:`bg-gradient-to-r from-white via-slate-50 to-sky-50 text-slate-700 shadow-[0_-12px_30px_rgba(148,163,184,0.14)] py-4 border-t border-slate-200/70`);return(e,t)=>(g(),S(`footer`,{class:H(n.value)},[P(`div`,pe,[P(`p`,null,`© `+M(new Date().getFullYear()+` Sander Derks. Alle rechten voorbehouden.`),1)])],2))}}),he=``+new URL(`../images/avatar-small.jpg`,import.meta.url).href,ge={class:`flex justify-between max-sm:pt-10`},_e={class:`hidden sm:block w-full sm:min-w-fit`},ve=[`alt`],ye={class:`w-fit sm:max-w-1/2`},be={class:`text-title-primary`},xe={class:`text-title-secondary`},Se={class:`text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2`},Ce={class:`sm:hidden min-w-fit mt-3`},we=[`alt`],Te=n({__name:`HeaderContent`,setup(e){let{routeLoading:t}=L(f()),{isDarkTheme:n}=K(),r=I(()=>n.value?`!bg-white/5 !text-neutral-200`:`!bg-white/80 !text-slate-700 !border !border-slate-200/80`);return(e,n)=>{let i=v(`RouterLink`);return g(),S(`div`,ge,[P(`div`,_e,[b(i,{to:{name:z(B).HOME}},{default:R(()=>[P(`img`,{class:H([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":z(t)===z(B).HOME}]),src:he,alt:z(C).name},null,10,ve)]),_:1},8,[`to`])]),P(`div`,ye,[P(`h1`,be,M(z(C).name),1),P(`h2`,xe,M(z(C).service),1),P(`div`,Se,[b(z(w),{class:H(r.value),icon:`pi pi-briefcase`,label:z(C).role},null,8,[`class`,`label`]),b(z(w),{class:H(r.value),icon:`pi pi-map-marker`,label:`${z(C).location.city}, ${z(C).location.country}`},null,8,[`class`,`label`])])]),P(`div`,Ce,[b(i,{to:{name:z(B).HOME}},{default:R(()=>[P(`img`,{class:H([`h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer`,{"animate-spin":z(t)===z(B).HOME}]),src:he,alt:z(C).name},null,10,we)]),_:1},8,[`to`])])])}}}),Ee=()=>{let e=l(),t=x(),n=r(),i=N(),{firebaseUser:a}=L(e),{houseHolds:o,activeHouseHold:s}=L(t),{activeHouseHoldId:c}=L(n),{publicUsers:u}=L(i),d=I(()=>u.value.reduce((e,t)=>(e[t.id]=t.displayName||t.id,e),{})),f=I(()=>[{value:null,label:`Geen huishouden`},...[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))]),p=I(()=>[...o.value].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>({value:e.id,label:e.name}))),m=I(()=>s.value),h=I(()=>m.value?.id??p.value[0]?.value??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`),g=e=>e?o.value.find(t=>t.id===e)??null:null,_=e=>{let t=g(e);return t?t.getUserOptions(d.value):[]};return{houseHoldOptions:f,requiredHouseHoldOptions:p,activeHouseHoldId:c,currentUsersHouseHold:m,defaultHouseHoldId:h,getHouseHoldById:g,getHouseHoldUserOptions:_,getHouseHoldUserOptionsNullable:(e,t=`Niemand`)=>[{value:null,label:t},..._(e)],getDefaultUserId:e=>g(e)?.getDefaultUserId(a.value?.uid)??null,normalizeUserId:(e,t)=>g(e)?.normalizeUserId(t,a.value?.uid)??t??null,normalizeUserIds:(e,t)=>g(e)?.normalizeUserIds(t,a.value?.uid)??[...new Set(t??[])]}},De=n({__name:`NumberField`,props:a({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=s(e,`modelValue`),r=V(``);function i(){n.value=parseFloat(r.value)||0}return o(n,e=>{r.value=e.toString()},{immediate:!0}),(e,n)=>(g(),k(fe,h(t,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:i}),null,16,[`modelValue`,`input-props`]))}}),Oe=y.extend({name:`toggleswitch`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),ke={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:te,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Oe,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return D({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Ae=[`data-p-checked`,`data-p-disabled`,`data-p`],je=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],Me=[`data-p`],Ne=[`data-p`];function Pe(e,t,n,r,i,a){return g(),S(`div`,h({class:e.cx(`root`),style:e.sx(`root`)},a.getPTOptions(`root`),{"data-p-checked":a.checked,"data-p-disabled":e.disabled,"data-p":a.dataP}),[P(`input`,h({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||=function(){return a.onFocus&&a.onFocus.apply(a,arguments)},onBlur:t[1]||=function(){return a.onBlur&&a.onBlur.apply(a,arguments)},onChange:t[2]||=function(){return a.onChange&&a.onChange.apply(a,arguments)}},a.getPTOptions(`input`)),null,16,je),P(`div`,h({class:e.cx(`slider`)},a.getPTOptions(`slider`),{"data-p":a.dataP}),[P(`div`,h({class:e.cx(`handle`)},a.getPTOptions(`handle`),{"data-p":a.dataP}),[d(e.$slots,`handle`,{checked:a.checked})],16,Ne)],16,Me)],16,Ae)}ke.render=Pe;var Fe=[`for`],Y=n({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=I({get:()=>n.modelValue,set:e=>{n.disabled||a(`update:modelValue`,e)}}),i=I(()=>n.name+(n.id?`.${n.id}`:``)),a=t;return(t,n)=>(g(),S(`div`,null,[e.label?(g(),S(`label`,h({key:0,class:`block text-sm font-bold mb-2`,for:i.value},e.labelProps),M(e.label),17,Fe)):O(``,!0),P(`div`,{class:H([`p-input flex align-middle`,{"cursor-pointer":!e.disabled}]),onClick:n[1]||=T(e=>r.value=!r.value,[`prevent`])},[b(z(ke),{inputId:i.value,ref:`input`,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,disabled:e.disabled,pt:{slider:{class:r.value?`bg-primary-500`:void 0}}},null,8,[`inputId`,`modelValue`,`disabled`,`pt`])],2)]))}}),Ie={key:0,class:`inline-flex`},Le={class:`my-5 flex flex-col gap-5`},Re={class:`flex flex-col gap-3`},ze={class:`flex flex-col gap-1`},Be={class:`text-base font-semibold text-title-secondary`},Ve={class:`text-sm text-title-tertiary`},He={key:0,class:`flex flex-col gap-3`},Ue={key:1,class:`flex flex-col gap-3`},We={key:2,class:`flex flex-col gap-4`},Ge={key:0,class:`flex flex-col gap-3`},Ke={key:1,class:`flex flex-col gap-3`},qe={key:2,class:`flex flex-col gap-3`},Je={key:3,class:`text-sm text-title-tertiary`},Ye=n({__name:`PersonalSettings`,props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){let t=e,n=_(),i=l(),a=r(),{personalSettings:s,isFetchLoading:c,isMutationLoading:u}=L(a),{firebaseUser:d,isOwner:f}=L(i),{houseHoldOptions:p,activeHouseHoldId:m}=Ee(),{isDarkTheme:h}=K(),v=V(!1),y=V(null),x=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],ee=[{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`},{value:4,label:`4 seconden`},{value:5,label:`5 seconden`}],C=[{value:.25,label:`0,25 seconde`},{value:.5,label:`0,5 seconde`},{value:.75,label:`0,75 seconde`},{value:1,label:`1 seconde`},{value:1.5,label:`1,5 seconde`},{value:2,label:`2 seconden`},{value:3,label:`3 seconden`}],te={[B.TASKS]:`tasks`,[B.PRODUCTS]:`products`,[B.GAMES]:`games`,[A.GAMES_YAHTZEE]:`games`,[A.GAMES_YAHTZEE_RAINBOW]:`games`,[A.GAMES_RAINWORMS]:`games`,[A.GAMES_PATIENCE]:`games`,[A.GAMES_HANGMAN]:`games`},w=I(()=>{let e=n.name?.toString();return e?te[e]:void 0}),T=I(()=>n.name?.toString()),D=I(()=>w.value===`games`),j=I(()=>[A.GAMES_YAHTZEE,A.GAMES_YAHTZEE_RAINBOW].includes(T.value)),N=I(()=>T.value===A.GAMES_RAINWORMS),F=I(()=>T.value===A.GAMES_PATIENCE),re=I(()=>{switch(w.value){case`tasks`:return`Instellingen voor Taken`;case`products`:return`Instellingen voor Boodschappen`;case`games`:switch(T.value){case A.GAMES_YAHTZEE:return`Instellingen voor Yahtzee`;case A.GAMES_YAHTZEE_RAINBOW:return`Instellingen voor Regenboog Yahtzee`;case A.GAMES_RAINWORMS:return`Instellingen voor Regenwormen`;case A.GAMES_PATIENCE:return`Instellingen voor Patience`;case A.GAMES_HANGMAN:return`Instellingen voor Galgje`;default:return`Instellingen voor Spellen`}default:return}}),ie=I(()=>{switch(w.value){case`tasks`:return`Alleen de voorkeuren voor de Taken-pagina worden hier getoond.`;case`products`:return`Alleen de voorkeuren voor de Boodschappen-pagina worden hier getoond.`;case`games`:return`Alleen de instellingen die relevant zijn voor deze spelpagina worden hier getoond.`;default:return`Voor deze pagina zijn er geen extra pagina-specifieke instellingen.`}}),ae=I(()=>h.value?t.buttonClass?`!bg-slate-900/45 hover:!bg-slate-800/70 active:!bg-slate-700/80 !text-slate-100 !border !border-white/10 shadow-md md:shadow-none backdrop-blur-sm`:`!bg-black/75 hover:!bg-black/85 active:!bg-black !text-white !border !border-white/10 shadow-md md:shadow-none backdrop-blur-sm`:`!bg-white/85 !border-slate-200/80 !text-slate-800 hover:!border-slate-400 hover:!bg-slate-200 hover:shadow-lg active:!bg-slate-300 !border shadow-md md:shadow-none backdrop-blur-sm`),U=I(()=>w.value?`Thema en huishouden staan direct bovenaan. Daaronder zie je alleen de instellingen voor deze pagina.`:`Thema en huishouden staan direct bovenaan. Voor deze pagina zijn er geen extra instellingen.`),W=ne(G());function G(){return s.value?s.value.clone():oe.create(d.value?.uid??``)}function se(){Object.assign(W,G()),y.value=m.value}async function ce(){let e=d.value?.uid;if(!e)return;let t=W.clone();a.setActiveHouseHoldId(y.value),await a.updatePersonalSettings(e,t),v.value=!1}return o(v,e=>{e&&se()},{immediate:!0}),(e,n)=>(g(),S(E,null,[z(d)?(g(),S(`div`,Ie,[b(J,{class:H([ae.value,t.buttonClass]),icon:`pi pi-cog`,label:t.iconOnly?void 0:`Instellingen`,rounded:``,"aria-label":`Persoonlijke instellingen openen`,loading:z(c),onClick:n[0]||=e=>v.value=!0},null,8,[`class`,`label`,`loading`])])):O(``,!0),b(ue,{isOpen:v.value,title:`Persoonlijke instellingen`,description:U.value,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:z(u),onConfirm:ce,onCancel:n[13]||=e=>v.value=!1},{default:R(()=>[P(`div`,Le,[P(`div`,Re,[b(q,{class:`w-full`,name:`primeVueTheme`,label:`Thema`,options:x,required:``,modelValue:W.primeVueTheme,"onUpdate:modelValue":n[1]||=e=>W.primeVueTheme=e},null,8,[`modelValue`]),z(f)?(g(),k(q,{key:0,class:`w-full`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:z(p),modelValue:y.value,"onUpdate:modelValue":n[2]||=e=>y.value=e},null,8,[`options`,`modelValue`])):O(``,!0)]),P(`div`,{class:H([`flex flex-col gap-4 rounded-2xl border p-4`,z(h)?`border-white/10 bg-black/10`:`border-slate-200/80 bg-slate-50/70`])},[P(`div`,ze,[P(`div`,Be,M(re.value??`Pagina-instellingen`),1),P(`p`,Ve,M(ie.value),1)]),w.value===`tasks`?(g(),S(`div`,He,[b(Y,{class:`w-full`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:W.tasks.showDifficulty,"onUpdate:modelValue":n[3]||=e=>W.tasks.showDifficulty=e},null,8,[`modelValue`]),b(Y,{class:`w-full`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:W.tasks.showCategories,"onUpdate:modelValue":n[4]||=e=>W.tasks.showCategories=e},null,8,[`modelValue`])])):w.value===`products`?(g(),S(`div`,Ue,[b(De,{class:`w-full`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst`,modelValue:W.products.amountOfDaysToShow,"onUpdate:modelValue":n[5]||=e=>W.products.amountOfDaysToShow=e},null,8,[`modelValue`]),b(Y,{class:`w-full`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:W.products.showPromotions,"onUpdate:modelValue":n[6]||=e=>W.products.showPromotions=e},null,8,[`modelValue`]),b(Y,{class:`w-full`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:W.products.showCategory,"onUpdate:modelValue":n[7]||=e=>W.products.showCategory=e},null,8,[`modelValue`]),b(Y,{class:`w-full`,name:`products.showSubcategory`,label:`Toon subcategorieën`,modelValue:W.products.showSubcategory,"onUpdate:modelValue":n[8]||=e=>W.products.showSubcategory=e},null,8,[`modelValue`])])):w.value===`games`?(g(),S(`div`,We,[D.value||j.value?(g(),S(`div`,Ge,[D.value?(g(),k(Y,{key:0,class:`w-full`,name:`games.useAudio`,label:`Geluid`,modelValue:W.games.useAudio,"onUpdate:modelValue":n[9]||=e=>W.games.useAudio=e},null,8,[`modelValue`])):O(``,!0),j.value?(g(),k(q,{key:1,class:`w-full`,name:`games.diceRollSpeed`,label:`Snelheid van dobbelsteenworp`,options:ee,modelValue:W.games.diceRollSpeed,"onUpdate:modelValue":n[10]||=e=>W.games.diceRollSpeed=e},null,8,[`modelValue`])):O(``,!0)])):O(``,!0),N.value?(g(),S(`div`,Ke,[n[14]||=P(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Regenwormen`,-1),b(q,{class:`w-full`,name:`games.rainworms.robotSpeed`,label:`Snelheid van Regenwormen-robot`,options:C,modelValue:W.games.rainworms.robotSpeed,"onUpdate:modelValue":n[11]||=e=>W.games.rainworms.robotSpeed=e},null,8,[`modelValue`])])):O(``,!0),F.value?(g(),S(`div`,qe,[n[15]||=P(`div`,{class:`text-sm font-semibold text-title-tertiary`},`Patience`,-1),b(Y,{class:`w-full`,name:`games.patience.doAutocomplete`,label:`Patience automatisch aanvullen`,modelValue:W.games.patience.doAutocomplete,"onUpdate:modelValue":n[12]||=e=>W.games.patience.doAutocomplete=e},null,8,[`modelValue`])])):O(``,!0),!D.value&&!j.value&&!N.value&&!F.value?(g(),S(`p`,Je,` Voor deze spelpagina zijn er op dit moment geen extra instellingen. `)):O(``,!0)])):O(``,!0)],2)])]),_:1},8,[`isOpen`,`description`,`confirmLoading`])],64))}}),Xe={key:0,class:`hidden lg:block`},Ze={class:`grid grid-cols-2 gap-2`},X=`!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,Qe=n({__name:`NavigationMenuDesktop`,setup(t){let n=l(),r=f(),i=_(),{isLoggedIn:a,isLogoutLoading:o}=L(n),{visibleMenuItems:s,routeLoading:u}=L(r),{isDarkTheme:d}=K(),p=I(()=>d.value?`!border-secondary-300 !bg-secondary-400/30 !text-neutral-50 hover:!bg-secondary-400/40 active:!bg-secondary-400/50`:`!border-slate-300 !bg-white/95 !text-slate-900 hover:!border-slate-400 hover:!bg-slate-200 hover:shadow-md active:!bg-slate-300 shadow-sm`),m=I(()=>d.value?`!border-white/10 !bg-white/5 !text-neutral-200 hover:!border-white/20 hover:!bg-white/10 active:!bg-white/15`:`!border-slate-200/80 !bg-white/60 !text-slate-700 hover:!border-slate-300 hover:!bg-slate-200 hover:!text-slate-900 hover:shadow-sm active:!bg-slate-300`),h=t=>{if(!t)return!1;let n=e.find(e=>e.name===t);if(!n)return!1;let r=n.path.split(`/:`)[0];return r===`/`?i.fullPath===`/`:i.fullPath.startsWith(r)};return(e,t)=>z(s).length?(g(),S(`div`,Xe,[P(`div`,Ze,[(g(!0),S(E,null,c(z(s),e=>(g(),k(J,{key:e.id,class:H([X,h(e.route)?p.value:m.value]),variant:`secondary`,outlined:``,href:e.url,route:e.route,loading:e.loading||z(u)===e.route,label:e.name},null,8,[`class`,`href`,`route`,`loading`,`label`]))),128)),z(a)?(g(),k(J,{key:0,class:H([X,`!rounded-full`]),variant:`danger`,outlined:``,loading:z(o),label:`Uitloggen`,onClick:z(n).logout},null,8,[`class`,`loading`,`onClick`])):(g(),k(J,{key:1,class:H([X,`!rounded-full`]),variant:`primary`,route:z(B).LOGIN,loading:z(u)===z(B).LOGIN,label:`Inloggen`},null,8,[`class`,`route`,`loading`]))])])):O(``,!0)}}),Z={name:`Card`,extends:{name:`BaseCard`,extends:U,style:y.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function $e(e,t,n,r,i,a){return g(),S(`div`,h({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(g(),S(`div`,h({key:0,class:e.cx(`header`)},e.ptm(`header`)),[d(e.$slots,`header`)],16)):O(``,!0),P(`div`,h({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(g(),S(`div`,h({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(g(),S(`div`,h({key:0,class:e.cx(`title`)},e.ptm(`title`)),[d(e.$slots,`title`)],16)):O(``,!0),e.$slots.subtitle?(g(),S(`div`,h({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[d(e.$slots,`subtitle`)],16)):O(``,!0)],16)):O(``,!0),P(`div`,h({class:e.cx(`content`)},e.ptm(`content`)),[d(e.$slots,`content`)],16),e.$slots.footer?(g(),S(`div`,h({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[d(e.$slots,`footer`)],16)):O(``,!0)],16)],16)}Z.render=$e;var et={class:`hidden lg:flex items-center gap-4 mb-4`},tt={class:`hidden lg:block flex-1 space-y-2`},nt={class:`hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg`},rt={class:`font-semibold text-base first:font-bold first:text-lg`},it={key:0,class:`shrink-0 flex items-center gap-2`},at=n({__name:`NavigationCardDesktop`,setup(e){let t=l(),n=j(),{isLoggedIn:r}=L(t),{currentUser:i}=L(n),{isDarkTheme:a}=K(),o=I(()=>a.value?`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 border border-white/10 !bg-neutral-900/75 !text-neutral-100 rounded-b-secondary backdrop-blur-sm shadow-none`:`absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 border border-slate-200/80 !bg-gradient-to-b !from-white/90 !via-slate-50/95 !to-sky-50/90 !text-slate-800 rounded-b-secondary backdrop-blur-sm shadow-[0_24px_60px_rgba(148,163,184,0.22)]`);return(e,t)=>(g(),k(z(Z),{class:H(o.value)},{content:R(()=>[P(`div`,et,[P(`div`,tt,[z(i)?(g(!0),S(E,{key:0},c([`Welkom terug, ${z(i).firstName+(z(i).lastName?` `+z(i).lastName:``)}`,`op mijn portfolio- en blogwebsite!`],e=>(g(),S(`p`,nt,M(e),1))),256)):(g(),S(E,{key:1},c([`Welkom op mijn portfolio- en blogwebsite!`],e=>P(`p`,rt,M(e),1)),64))]),z(r)?(g(),S(`div`,it,[b(Ye,{"icon-only":``,"button-class":`shrink-0 !p-6`}),b(J,{class:`shrink-0 !p-6`,route:z(B).DASHBOARD,rounded:``,outlined:``,severity:`secondary`,"aria-label":`Ga naar dashboard`},{default:R(()=>[...t[0]||=[P(`i`,{class:`pi pi-user scale-150`},null,-1)]]),_:1},8,[`route`])])):O(``,!0)]),b(Qe)]),_:1},8,[`class`]))}}),ot=y.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),st={name:`BaseDrawer`,extends:U,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:ot,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function $(e,t,n){return(t=ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ct(e){var t=lt(e,`string`);return Q(t)==`symbol`?t:t+``}function lt(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ut={name:`Drawer`,extends:st,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&i.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&i.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ee(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&i.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&F(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ce()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&le()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return D($($($({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:se},components:{Button:de,Portal:re,TimesIcon:ae}},dt=[`data-p`],ft=[`role`,`aria-modal`,`data-p`];function pt(e,n,r,i,a,o){var s=v(`Button`),c=v(`Portal`),l=G(`focustrap`);return g(),k(c,null,{default:R(function(){return[a.containerVisible?(g(),S(`div`,h({key:0,ref:o.maskRef,onMousedown:n[0]||=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)},class:e.cx(`mask`),style:e.sx(`mask`,!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm(`mask`)),[b(ie,h({name:`p-drawer`,onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:``},e.ptm(`transition`)),{default:R(function(){return[e.visible?u((g(),S(`div`,h({key:0,ref:o.containerRef,class:e.cx(`root`),style:e.sx(`root`),role:e.modal?`dialog`:`complementary`,"aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi(`root`)),[e.$slots.container?d(e.$slots,`container`,{key:0,closeCallback:o.hide}):(g(),S(E,{key:1},[P(`div`,h({ref:o.headerContainerRef,class:e.cx(`header`)},e.ptm(`header`)),[d(e.$slots,`header`,{class:H(e.cx(`title`))},function(){return[e.header?(g(),S(`div`,h({key:0,class:e.cx(`title`)},e.ptm(`title`)),M(e.header),17)):O(``,!0)]}),e.showCloseIcon?d(e.$slots,`closebutton`,{key:0,closeCallback:o.hide},function(){return[b(s,h({ref:o.closeButtonRef,type:`button`,class:e.cx(`pcCloseButton`),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:R(function(n){return[d(e.$slots,`closeicon`,{},function(){return[(g(),k(t(e.closeIcon?`span`:`TimesIcon`),h({class:[e.closeIcon,n.class]},e.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):O(``,!0)],16),P(`div`,h({ref:o.contentRef,class:e.cx(`content`)},e.ptm(`content`)),[d(e.$slots,`default`)],16),e.$slots.footer?(g(),S(`div`,h({key:0,ref:o.footerContainerRef,class:e.cx(`footer`)},e.ptm(`footer`)),[d(e.$slots,`footer`)],16)):O(``,!0)],64))],16,ft)),[[l]]):O(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,dt)):O(``,!0)]}),_:3})}ut.render=pt;var mt={class:`flex flex-col gap-2 pb-4`},ht=`!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200`,gt=n({__name:`NavigationDropDownMobile`,props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){let n=t,r=l(),i=f(),a=_(),{isLoggedIn:o}=L(r),{visibleMenuItems:s,routeLoading:u}=L(i),{logout:d}=r,{isDarkTheme:p}=K(),m=I(()=>p.value?`lg:hidden !w-[min(26rem,85vw)] !bg-neutral-900 !text-neutral-100`:`lg:hidden !w-[min(26rem,85vw)] !bg-gradient-to-b !from-white !via-slate-50 !to-sky-50 !text-slate-900 border-l border-slate-200/80`),h=I(()=>p.value?`!border-secondary-300 !bg-secondary-400/30 !text-neutral-50 hover:!bg-secondary-400/40 active:!bg-secondary-400/50`:`!border-slate-300 !bg-white !text-slate-900 hover:!border-slate-400 hover:!bg-slate-200 hover:shadow-md active:!bg-slate-300 shadow-sm`),v=I(()=>p.value?`!border-white/10 !bg-white/5 !text-neutral-200 hover:!border-white/20 hover:!bg-white/10 active:!bg-white/15`:`!border-slate-200/80 !bg-white/60 !text-slate-700 hover:!border-slate-300 hover:!bg-slate-200 hover:!text-slate-900 hover:shadow-sm active:!bg-slate-300`),y=I({get:()=>n.isOpen,set:e=>{e!==n.isOpen&&n.toggle()}}),x=t=>{if(!t)return!1;let n=e.find(e=>e.name===t);if(!n)return!1;let r=n.path.split(`/:`)[0];return r===`/`?a.fullPath===`/`:a.fullPath.startsWith(r)};return(e,n)=>(g(),k(z(ut),{visible:y.value,"onUpdate:visible":n[1]||=e=>y.value=e,position:`right`,class:H(m.value),"show-close-icon":!0},{default:R(()=>[P(`div`,mt,[(g(!0),S(E,null,c(z(s),e=>(g(),k(J,{key:e.id,class:H([`w-full`,ht,x(e.route)?h.value:v.value]),variant:`secondary`,outlined:``,fluid:``,href:e.url,route:e.route,loading:e.loading||z(u)===e.route,label:e.name,onClick:t.toggle},null,8,[`class`,`href`,`route`,`loading`,`label`,`onClick`]))),128)),z(o)?(g(),S(E,{key:0},[b(J,{class:H([`w-full`,ht,v.value]),variant:`secondary`,outlined:``,fluid:``,route:z(B).DASHBOARD,loading:z(u)===z(B).DASHBOARD,label:`Dashboard`,onClick:t.toggle},null,8,[`class`,`route`,`loading`,`onClick`]),b(J,{class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,variant:`danger`,outlined:``,label:`Uitloggen`,onClick:n[0]||=e=>{z(d)(),t.toggle()}})],64)):(g(),k(J,{key:1,class:`w-full !rounded-xl !px-3 !py-2 text-sm font-medium`,fluid:``,route:z(B).LOGIN,loading:z(u)===z(B).LOGIN,label:`Inloggen`,onClick:t.toggle},null,8,[`route`,`loading`,`onClick`]))])]),_:1},8,[`visible`,`class`]))}}),_t={class:`flex items-center gap-2`},vt=n({__name:`NavigationMenuMobile`,setup(e){let{isLoggedIn:t}=L(l()),n=V(!1),r=V(!0),{isDarkTheme:i}=K(),a=window.scrollY,o=I(()=>i.value?`!bg-black/75 !border-white/10 hover:!bg-black/85 active:!bg-black !text-white`:`!bg-white/85 !border-slate-200/80 !text-slate-800 hover:!border-slate-400 hover:!bg-slate-200 hover:shadow-lg active:!bg-slate-300 shadow-md backdrop-blur-sm`),s=()=>{n.value=!n.value};function c(){let e=window.scrollY;e>a+10?r.value=!1:e<a-10&&(r.value=!0),a=e}return p(()=>{window.addEventListener(`scroll`,c)}),m(()=>{window.removeEventListener(`scroll`,c)}),(e,i)=>(g(),S(E,null,[P(`div`,{class:H([`fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10`,[`transition-transform duration-300`,r.value?`translate-y-0 delay-0`:`-translate-y-[200%] delay-150`]])},[P(`div`,_t,[z(t)?(g(),k(Ye,{key:0,"icon-only":``})):O(``,!0),b(z(de),{class:H(o.value),icon:`pi pi-bars`,label:`Menu`,outlined:``,rounded:``,severity:`secondary`,onClick:s},null,8,[`class`])])],2),b(gt,{"is-open":n.value,toggle:s},null,8,[`is-open`])],64))}}),yt={class:`sm:flex sm:items-start sm:justify-between mb-20`},bt={class:`hidden lg:flex justify-end`},xt={class:`lg:hidden w-full sm:w-1/3`},St=n({__name:`Header`,setup(e){return(e,t)=>(g(),S(`div`,yt,[b(Te,{class:`hidden sm:block`}),P(`div`,bt,[b(at)]),P(`div`,xt,[b(vt)]),b(Te,{class:`sm:hidden`})]))}}),Ct=n({__name:`Page`,props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){let t=e,n=_(),{isDarkTheme:r}=K(),i=V(),a=I(()=>r.value?`bg-gradient-to-b from-primary-900 via-neutral-800 to-black`:`bg-gradient-to-b from-slate-200 via-sky-50 to-white`),s=I(()=>r.value?`text-white bg-gradient-to-b from-transparent from-10% via-neutral-900/95 to-black/95`:`text-slate-900 bg-gradient-to-b from-slate-100/78 via-white/88 to-sky-50/92 border border-slate-200/85 shadow-[0_24px_80px_rgba(148,163,184,0.20)]`),c=()=>{t.scrollToContent&&W(i.value)};return p(()=>{c()}),o(()=>n.fullPath,()=>{c()}),(e,t)=>(g(),S(E,null,[P(`div`,{class:H([`min-h-screen`,a.value])},[P(`div`,{class:H([`container py-5 rounded-b-secondary`,s.value,`bg-opacity-50 border-opacity-100`])},[P(`header`,null,[e.$slots.header?d(e.$slots,`header`,{key:0}):(g(),k(St,{key:1}))]),P(`main`,null,[P(`div`,{ref_key:`content`,ref:i},[d(e.$slots,`content`)],512)])],2)],2),P(`footer`,null,[e.$slots.footer?d(e.$slots,`footer`,{key:0}):(g(),k(me,{key:1}))])],64))}});export{Ee as a,De as i,Z as n,Y as r,Ct as t};