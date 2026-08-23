import{Ar as e,Cr as t,D as n,Dr as r,Fr as i,Ft as ee,Gr as a,Ht as o,Ii as s,It as c,Kr as l,O as u,Or as d,Pn as te,Pt as ne,Qr as f,S as p,Sr as m,Tt as h,Vr as g,Wr as _,Zn as v,b as re,br as y,c as b,ci as ie,ei as x,ji as S,pr as C,qr as w,si as ae,ti as T,ui as E,ur as D,wr as O,xr as k,zr as A}from"../bundle.js";import{n as j,t as M}from"./c-card.js";import{t as N}from"./c-TextField.js";import{c as P,i as F,l as I,o as L,t as oe,u as R}from"./c-dist.js";import{t as se}from"./c-DateField.js";import{a as z,i as ce,n as le,r as B,t as ue}from"./c-tabs.js";import{t as V}from"./c-tag.js";import{t as H}from"./c-CreateButton.js";import{n as de,t as fe}from"./c-core.js";import{i as pe,n as me,r as he,t as U}from"./c-useCatCalc.js";var W=u.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),G={name:`BaseMessage`,extends:n,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:W,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=Y(e,`string`);return K(t)==`symbol`?t:t+``}function Y(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var X={name:`Message`,extends:G,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return h(q(q({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:p},components:{TimesIcon:b}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Q(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ge(e,t,n){return(t=_e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){var t=ve(e,`string`);return Z(t)==`symbol`?t:t+``}function ve(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ye=[`data-p`],be=[`data-p`],xe=[`data-p`],Se=[`aria-label`,`data-p`],Ce=[`data-p`];function we(e,n,r,ee,o,s){var c=a(`TimesIcon`),u=l(`ripple`);return g(),m(C,i({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:x(function(){return[o.visible?(g(),O(`div`,i({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":s.dataP},e.ptm(`root`)),[k(`div`,i({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?_(e.$slots,`container`,{key:0,closeCallback:s.close}):(g(),O(`div`,i({key:1,class:e.cx(`content`),"data-p":s.dataP},e.ptm(`content`)),[_(e.$slots,`icon`,{class:S(e.cx(`icon`))},function(){return[(g(),m(w(e.icon?`span`:null),i({class:[e.cx(`icon`),e.icon],"data-p":s.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(g(),O(`div`,i({key:0,class:e.cx(`text`),"data-p":s.dataP},e.ptm(`text`)),[_(e.$slots,`default`)],16,xe)):t(``,!0),e.closable?T((g(),O(`button`,i({key:1,class:e.cx(`closeButton`),"aria-label":s.closeAriaLabel,type:`button`,onClick:n[0]||=function(e){return s.close(e)},"data-p":s.dataP},$($({},e.closeButtonProps),e.ptm(`closeButton`))),[_(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(g(),O(`i`,i({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":s.dataP},e.ptm(`closeIcon`)),null,16,Ce)):(g(),m(c,i({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":s.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Se)),[[u]]):t(``,!0)],16,be))],16)],16,ye)):t(``,!0)]}),_:3},16)}X.render=we;var Te={key:0,class:`flex flex-wrap md:justify-between gap-1 md:gap-3`},Ee={class:`flex flex-col items-center content-center gap-3`},De={class:`flex flex-col gap-2`},Oe={class:`flex flex-col gap-4`},ke=e({__name:`CatCalc`,setup(e){let n=ee(),i=c(),a=ne(),l=o(),{routeLoading:u}=v(n),{myPets:p}=v(i),{isLoggedIn:h}=v(a),_=de(fe).greaterOrEqual(`md`),b=ie(!1),S=ae({petId:null,dateOfBirth:null,weight:0,activityOptionId:`default`,dryFoodOptionId:`default`,manualDryFoodEnergy:0}),C=oe({dateOfBirth:{required:R},weight:{required:R,numeric:I,minValue:P(1),maxValue:L(10)},activityOptionId:{required:R},dryFoodOptionId:{required:R},manualDryFoodEnergy:{required:R,numeric:I,minValue:P(1),maxValue:L(1e4)}},S,{$autoDirty:!0}),w=y(()=>p.value.find(e=>e.id===S.petId)??null),{requiredEnergy:T,daysUntilNextPhase:W}=he(()=>w.value,()=>S.dateOfBirth,()=>S.weight,()=>S.activityOptionId),G=y(()=>p.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),K=y(()=>me.filter(e=>w.value?.castrated===!0?e.castrated===!0:w.value?.castrated===!1?e.castrated!==!0:!0)),q=y(()=>K.value.find(e=>e.value===S.dryFoodOptionId)),J=y(()=>b.value?S.manualDryFoodEnergy:q.value?.energy??0),Y=y(()=>q.value?T.value/J.value*100:0),Z=y(()=>Y.value/3);return f(w,e=>{e?(S.dateOfBirth=e.dateOfBirth,S.weight=pe(e).petWeight.value??0,S.activityOptionId=e.castrated||e.insideCat?`castrated`:`default`):(S.dateOfBirth=null,S.weight=0,S.activityOptionId=`default`),C.value.$reset()}),f(K,(e,t)=>{e.find(e=>e.value===S.dryFoodOptionId)?e.length>t.length&&(S.dryFoodOptionId=e[0].value):S.dryFoodOptionId=e.length>0?e[0].value:`default`}),A(async()=>{h.value&&(await l.fetchHouseHolds(),await i.fetchPets(!0))}),(e,n)=>(g(),m(E(M),{class:`surface-panel-glass !rounded-secondary`},{content:x(()=>[n[13]||=k(`div`,{class:`p-5 md:p-10`},[k(`h2`,{class:`text-2xl font-bold mb-2`},`Catculator`),k(`p`,{class:`surface-text-muted mb-2`},`Bereken de energiebehoefte van je kat op basis van formules van FEDIAF.`)],-1),d(E(ue),{value:G.value.length>0?`choosePet`:`manual`,class:`w-full md:w-3/4 xl:w-1/2 place-self-center`},{default:x(()=>[d(E(ce),null,{default:x(()=>[G.value.length>0?(g(),m(E(z),{key:0,value:`choosePet`},{default:x(()=>[...n[8]||=[r(` Kies je huisdier `,-1)]]),_:1})):t(``,!0),d(E(z),{value:`manual`},{default:x(()=>[...n[9]||=[r(`Handmatig`,-1)]]),_:1})]),_:1}),d(E(le),{class:`!px-0`},{default:x(()=>[d(E(B),{value:`choosePet`,class:`flex flex-col items-center content-center gap-3`},{default:x(()=>[d(j,{class:`w-full`,name:`pet`,label:`Mijn huisdier`,modelValue:S.petId,"onUpdate:modelValue":n[0]||=e=>S.petId=e,options:[{value:null,label:`Selecteer een huisdier`},...G.value]},null,8,[`modelValue`,`options`]),w.value?(g(),O(`div`,Te,[S.dateOfBirth?(g(),m(E(V),{key:0,severity:`success`,icon:`pi pi-heart`,value:E(te)(S.dateOfBirth)},null,8,[`value`])):(g(),m(E(V),{key:1,severity:`danger`,value:`Geen geboortedatum`})),S.weight?(g(),m(E(V),{key:2,severity:`success`,value:`${S.weight.toFixed(1)} kg`},null,8,[`value`])):(g(),m(E(V),{key:3,severity:`danger`,value:`Geen gewicht`})),d(E(V),{severity:`success`,value:w.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`value`]),w.value.castrated?(g(),m(E(V),{key:4,severity:`success`,value:w.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):t(``,!0)])):t(``,!0)]),_:1}),d(E(B),{value:`manual`,class:`flex flex-col items-center content-center gap-3`},{default:x(()=>[d(se,{class:`w-full`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:S.dateOfBirth,"onUpdate:modelValue":n[1]||=e=>S.dateOfBirth=e,error:E(C).dateOfBirth.$error?E(F)(E(C).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),d(N,{class:`w-full`,name:`weight`,label:`Gewicht (kg)`,modelValue:S.weight,"onUpdate:modelValue":n[2]||=e=>S.weight=e,modelModifiers:{number:!0},error:E(C).weight.$error?E(F)(E(C).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),d(j,{class:`w-full`,name:`activityOptionId`,label:`Activiteit`,modelValue:S.activityOptionId,"onUpdate:modelValue":n[3]||=e=>S.activityOptionId=e,error:E(C).activityOptionId.$error?E(F)(E(C).activityOptionId):``,options:E(U),required:``},null,8,[`modelValue`,`error`,`options`])]),_:1})]),_:1})]),_:1},8,[`value`]),k(`div`,Ee,[E(T)>0?(g(),m(E(X),{key:0,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:x(()=>[r(s(E(_)?`Vereiste energie per dag:`:`Energie per dag:`)+` `+s(E(T).toFixed(1)+` kcal`),1)]),_:1})):t(``,!0),b.value?(g(),m(N,{key:1,class:`w-full md:w-3/4 xl:w-1/2`,name:`energy`,label:`Energie in 100g droogvoer (kcal)`,modelValue:S.manualDryFoodEnergy,"onUpdate:modelValue":n[5]||=e=>S.manualDryFoodEnergy=e,modelModifiers:{number:!0},error:E(C).manualDryFoodEnergy.$error?E(F)(E(C).manualDryFoodEnergy):``,required:``,"min-value":1,"max-value":1e4,"input-props":{type:`number`}},{default:x(()=>[d(H,{icon:`pi pi-refresh`,onClick:n[4]||=e=>b.value=!1})]),_:1},8,[`modelValue`,`error`])):(g(),m(j,{key:2,class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Energie in 100g droogvoer (kcal)`,modelValue:S.dryFoodOptionId,"onUpdate:modelValue":n[7]||=e=>S.dryFoodOptionId=e,error:E(C).dryFoodOptionId.$error?E(F)(E(C).dryFoodOptionId):``,options:K.value,required:``},{default:x(()=>[d(H,{icon:`pi pi-pencil`,onClick:n[6]||=e=>b.value=!0})]),_:1},8,[`modelValue`,`error`,`options`])),Y.value>0?(g(),m(E(M),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:x(()=>[...n[10]||=[r(`Resultaat`,-1)]]),content:x(()=>[k(`div`,De,[d(E(X),{severity:`info`},{default:x(()=>[r(s(E(_)?`Vereiste droogvoer per dag:`:`Voer per dag:`)+` `+s(Y.value.toFixed(1)+` g`),1)]),_:1}),d(E(X),{severity:`info`},{default:x(()=>[r(s(E(_)?`Vereiste droogvoer per maaltijd:`:`Voer per maaltijd:`)+` `+s(Z.value.toFixed(1)+` g`),1)]),_:1}),E(W)===null?t(``,!0):(g(),m(E(X),{key:0,severity:`warn`},{default:x(()=>[r(` Let op: over `+s(E(W).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:x(()=>[k(`div`,Oe,[n[11]||=k(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),w.value?t(``,!0):(g(),m(re,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:E(u)===E(D).PET_OVERVIEW,route:E(D).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(g(),m(E(X),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:x(()=>[...n[12]||=[r(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{ke as default};