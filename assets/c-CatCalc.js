import{Ar as e,At as t,Bt as n,Ci as r,Cr as i,Dr as a,Ii as ee,Jr as o,Kr as s,Lr as c,Mt as l,Nt as u,Or as d,Pr as f,Pt as te,Qn as p,Sr as m,Ur as h,Ut as g,Vi as _,Vr as ne,Yr as v,Zt as re,ai as y,br as b,di as ie,dr as x,ei as ae,fi as oe,hi as S,i as C,l as w,ni as T,nt as E,pr as D,qr as O,ri as k,s as A,t as j,wr as M,xr as N}from"./c-ripple.js";import{t as P}from"./c-CreateButton.js";import{i as se,t as F}from"./c-SelectField.js";import{t as ce}from"./c-DateField.js";import{t as I}from"./c-TextField.js";import{a as L,c as R,l as z,r as B,s as V}from"./c-validationHelpers.js";import{i as H,n as U,r as le,t as ue}from"./c-useCatCalc.js";import{t as de}from"./c-dist.js";import{n as fe,t as pe}from"./c-core.js";import{a as W,i as me,n as he,r as G,t as ge}from"./c-tabs.js";import{t as K}from"./c-tag.js";import{t as q}from"./c-card.js";var J=w.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}});f(),D(),r();var Y={name:`BaseMessage`,extends:A,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:J,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=_e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){var t=ve(e,`string`);return X(t)==`symbol`?t:t+``}function ve(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Message`,extends:Y,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return E(Z(Z({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:j},components:{TimesIcon:C}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ye(Object(n),!0).forEach(function(t){xe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function xe(e,t,n){return(t=Se(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){var t=Ce(e,`string`);return $(t)==`symbol`?t:t+``}function Ce(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var we=[`data-p`],Te=[`data-p`],Ee=[`data-p`],De=[`aria-label`,`data-p`],Oe=[`data-p`];function ke(e,t,n,r,a,l){var u=O(`TimesIcon`),d=o(`ripple`);return h(),m(x,c({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:T(function(){return[a.visible?(h(),M(`div`,c({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":l.dataP},e.ptm(`root`)),[N(`div`,c({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?s(e.$slots,`container`,{key:0,closeCallback:l.close}):(h(),M(`div`,c({key:1,class:e.cx(`content`),"data-p":l.dataP},e.ptm(`content`)),[s(e.$slots,`icon`,{class:ee(e.cx(`icon`))},function(){return[(h(),m(v(e.icon?`span`:null),c({class:[e.cx(`icon`),e.icon],"data-p":l.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(h(),M(`div`,c({key:0,class:e.cx(`text`),"data-p":l.dataP},e.ptm(`text`)),[s(e.$slots,`default`)],16,Ee)):i(``,!0),e.closable?k((h(),M(`button`,c({key:1,class:e.cx(`closeButton`),"aria-label":l.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return l.close(e)},"data-p":l.dataP},be(be({},e.closeButtonProps),e.ptm(`closeButton`))),[s(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(h(),M(`i`,c({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":l.dataP},e.ptm(`closeIcon`)),null,16,Oe)):(h(),m(u,c({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":l.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,De)),[[d]]):i(``,!0)],16,Te))],16)],16,we)):i(``,!0)]}),_:3},16)}Q.render=ke,f(),y(),r();var Ae={key:0,class:`flex flex-wrap md:justify-between gap-1 md:gap-3`},je={class:`flex flex-col items-center content-center gap-3`},Me={class:`flex flex-col gap-2`},Ne={class:`flex flex-col gap-4`},Pe=e({__name:`CatCalc`,setup(e){let r=t(),ee=u(),o=te(),s=l(),c=n(),{routeLoading:f}=p(ee),{myPets:v}=p(o),{isLoggedIn:y}=p(s),x=fe(pe).greaterOrEqual(`md`),C=oe(!1),w=ie({petId:null,dateOfBirth:null,weight:0,activityOptionId:`default`,dryFoodOptionId:`default`,manualDryFoodEnergy:0}),E={dateOfBirth:{required:z},weight:{required:z,numeric:R,minValue:V(1),maxValue:L(10)},activityOptionId:{required:z},dryFoodOptionId:{required:z},manualDryFoodEnergy:{required:z,numeric:R,minValue:V(1),maxValue:L(1e4)}},D=de(E,w,{$autoDirty:!0}),O=b(()=>v.value.find(e=>e.id===w.petId)??null),{requiredEnergy:k,daysUntilNextPhase:A}=le(()=>O.value,()=>w.dateOfBirth,()=>w.weight,()=>w.activityOptionId),j=b(()=>v.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),J=b(()=>{let e=O.value;return e?U.filter(t=>e.castrated?H(e).petAgeYears.value>=1?t.castrated===!0:!0:t.castrated===!1):U}),Y=b(()=>J.value.find(e=>e.value===w.dryFoodOptionId)),X=b(()=>C.value?w.manualDryFoodEnergy:Y.value?.energy??0),Z=b(()=>Y.value?k.value/X.value*100:0),_e=b(()=>Z.value/3);return ae(O,e=>{e?(w.dateOfBirth=e.dateOfBirth,w.weight=H(e).petWeight.value??0,w.activityOptionId=e.castrated||e.insideCat?`castrated`:`default`):(w.dateOfBirth=null,w.weight=0,w.activityOptionId=`default`),D.value.$reset()}),ae(J,(e,t)=>{e.find(e=>e.value===w.dryFoodOptionId)?e.length>t.length&&(w.dryFoodOptionId=e[0].value):w.dryFoodOptionId=e.length>0?e[0].value:`default`}),ne(async()=>{r.params.petId&&(w.petId=r.params.petId),y.value&&(await c.fetchHouseHolds(),await o.fetchPets(!0))}),(e,t)=>(h(),m(S(q),{class:`surface-panel-glass !rounded-secondary`},{content:T(()=>[t[13]||=N(`div`,{class:`p-5 md:p-10`},[N(`h2`,{class:`text-2xl font-bold mb-2`},` CatCalculator `),N(`p`,{class:`surface-text-muted mb-2`},` Bereken de energiebehoefte van je kat op basis van formules van FEDIAF. `)],-1),d(S(ge),{value:j.value.length>0?`choosePet`:`manual`,class:`w-full md:w-3/4 xl:w-1/2 place-self-center`},{default:T(()=>[d(S(me),null,{default:T(()=>[j.value.length>0?(h(),m(S(W),{key:0,value:`choosePet`},{default:T(()=>[...t[8]||=[a(` Kies je huisdier `,-1)]]),_:1})):i(``,!0),d(S(W),{value:`manual`},{default:T(()=>[...t[9]||=[a(` Handmatig `,-1)]]),_:1})]),_:1}),d(S(he),{class:`!px-0`},{default:T(()=>[d(S(G),{value:`choosePet`,class:`flex flex-col items-center content-center gap-3`},{default:T(()=>[d(F,{modelValue:w.petId,"onUpdate:modelValue":t[0]||=e=>w.petId=e,class:`w-full`,name:`pet`,label:`Mijn huisdier`,options:[{value:null,label:`Selecteer een huisdier`},...j.value]},null,8,[`modelValue`,`options`]),O.value?(h(),M(`div`,Ae,[w.dateOfBirth?(h(),m(S(K),{key:0,severity:`success`,icon:`pi pi-heart`,value:S(re)(w.dateOfBirth)},null,8,[`value`])):(h(),m(S(K),{key:1,severity:`danger`,value:`Geen geboortedatum`})),w.weight?(h(),m(S(K),{key:2,severity:`success`,value:`${w.weight.toFixed(1)} kg`},null,8,[`value`])):(h(),m(S(K),{key:3,severity:`danger`,value:`Geen gewicht`})),d(S(K),{severity:`success`,value:O.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`value`]),O.value.castrated?(h(),m(S(K),{key:4,severity:`success`,value:O.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):i(``,!0)])):i(``,!0)]),_:1}),d(S(G),{value:`manual`,class:`flex flex-col items-center content-center gap-3`},{default:T(()=>[d(ce,{modelValue:w.dateOfBirth,"onUpdate:modelValue":t[1]||=e=>w.dateOfBirth=e,class:`w-full`,name:`dateOfBirth`,label:`Geboortedatum`,error:S(D).dateOfBirth.$error?S(B)(S(D).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),d(I,{modelValue:w.weight,"onUpdate:modelValue":t[2]||=e=>w.weight=e,modelModifiers:{number:!0},class:`w-full`,name:`weight`,label:`Gewicht (kg)`,error:S(D).weight.$error?S(B)(S(D).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),d(F,{modelValue:w.activityOptionId,"onUpdate:modelValue":t[3]||=e=>w.activityOptionId=e,class:`w-full`,name:`activityOptionId`,label:`Activiteit`,error:S(D).activityOptionId.$error?S(B)(S(D).activityOptionId):``,options:S(ue),required:``},null,8,[`modelValue`,`error`,`options`])]),_:1})]),_:1})]),_:1},8,[`value`]),N(`div`,je,[S(k)>0?(h(),m(S(Q),{key:0,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:T(()=>[a(_(S(x)?`Vereiste energie per dag:`:`Energie per dag:`)+` `+_(S(k).toFixed(1)+` kcal`),1)]),_:1})):i(``,!0),C.value?(h(),m(I,{key:1,modelValue:w.manualDryFoodEnergy,"onUpdate:modelValue":t[5]||=e=>w.manualDryFoodEnergy=e,modelModifiers:{number:!0},class:`w-full md:w-3/4 xl:w-1/2`,name:`energy`,label:`Energie in 100g droogvoer (kcal)`,error:S(D).manualDryFoodEnergy.$error?S(B)(S(D).manualDryFoodEnergy):``,required:``,"min-value":1,"max-value":1e4,"input-props":{type:`number`}},{default:T(()=>[d(P,{icon:`pi pi-refresh`,onClick:t[4]||=e=>C.value=!1})]),_:1},8,[`modelValue`,`error`])):(h(),m(F,{key:2,modelValue:w.dryFoodOptionId,"onUpdate:modelValue":t[7]||=e=>w.dryFoodOptionId=e,class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Energie in 100g droogvoer (kcal)`,error:S(D).dryFoodOptionId.$error?S(B)(S(D).dryFoodOptionId):``,options:J.value,required:``},{default:T(()=>[d(P,{icon:`pi pi-pencil`,onClick:t[6]||=e=>C.value=!0})]),_:1},8,[`modelValue`,`error`,`options`])),Z.value>0?(h(),m(S(q),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:T(()=>[...t[10]||=[a(` Resultaat `,-1)]]),content:T(()=>[N(`div`,Me,[d(S(Q),{severity:`info`},{default:T(()=>[a(_(S(x)?`Vereiste droogvoer per dag:`:`Voer per dag:`)+` `+_(Z.value.toFixed(1)+` g`),1)]),_:1}),d(S(Q),{severity:`info`},{default:T(()=>[a(_(S(x)?`Vereiste droogvoer per maaltijd:`:`Voer per maaltijd:`)+` `+_(_e.value.toFixed(1)+` g`),1)]),_:1}),S(A)===null?i(``,!0):(h(),m(S(Q),{key:0,severity:`warn`},{default:T(()=>[a(` Let op: over `+_(S(A).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:T(()=>[N(`div`,Ne,[t[11]||=N(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),O.value?i(``,!0):(h(),m(se,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:S(f)===S(g).PET_OVERVIEW,route:S(g).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(h(),m(S(Q),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:T(()=>[...t[12]||=[a(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{Pe as default};