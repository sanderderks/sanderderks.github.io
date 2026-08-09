import{D as e,Dr as t,Ft as n,Hr as r,Ht as ee,Ir as i,It as a,Jn as o,Mn as s,Mr as c,Ni as l,O as u,Oi as d,Pt as te,Qr as f,Rr as p,S as m,Tr as h,Tt as g,Ur as _,Vr as v,Wr as y,Yr as b,Zr as x,_r as S,ai as ne,b as re,br as C,c as w,ii as ie,si as T,sr as E,ur as D,vr as O,wr as k,xr as A,yr as j}from"../bundle.js";import{n as M,t as N}from"./c-card.js";import{t as P}from"./c-TextField.js";import{c as F,i as I,l as L,o as R,t as ae,u as z}from"./c-dist.js";import{t as oe}from"./c-DateField.js";import{a as B,i as se,n as ce,r as V,t as le}from"./c-tabs.js";import{t as H}from"./c-tag.js";import{t as U}from"./c-CreateButton.js";import{n as ue,t as de}from"./c-core.js";import{i as fe,n as pe,r as me,t as he}from"./c-useCatCalc.js";var W=u.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),G={name:`BaseMessage`,extends:e,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:W,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=Y(e,`string`);return K(t)==`symbol`?t:t+``}function Y(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var X={name:`Message`,extends:G,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return g(q(q({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:m},components:{TimesIcon:w}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Q(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ge(e,t,n){return(t=_e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){var t=ve(e,`string`);return Z(t)==`symbol`?t:t+``}function ve(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ye=[`data-p`],be=[`data-p`],xe=[`data-p`],Se=[`aria-label`,`data-p`],Ce=[`data-p`];function we(e,t,n,ee,i,a){var o=r(`TimesIcon`),s=_(`ripple`);return p(),j(D,c({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:x(function(){return[i.visible?(p(),A(`div`,c({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":a.dataP},e.ptm(`root`)),[O(`div`,c({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?v(e.$slots,`container`,{key:0,closeCallback:a.close}):(p(),A(`div`,c({key:1,class:e.cx(`content`),"data-p":a.dataP},e.ptm(`content`)),[v(e.$slots,`icon`,{class:d(e.cx(`icon`))},function(){return[(p(),j(y(e.icon?`span`:null),c({class:[e.cx(`icon`),e.icon],"data-p":a.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(p(),A(`div`,c({key:0,class:e.cx(`text`),"data-p":a.dataP},e.ptm(`text`)),[v(e.$slots,`default`)],16,xe)):C(``,!0),e.closable?f((p(),A(`button`,c({key:1,class:e.cx(`closeButton`),"aria-label":a.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return a.close(e)},"data-p":a.dataP},$($({},e.closeButtonProps),e.ptm(`closeButton`))),[v(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(p(),A(`i`,c({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,Ce)):(p(),j(o,c({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Se)),[[s]]):C(``,!0)],16,be))],16)],16,ye)):C(``,!0)]}),_:3},16)}X.render=we;var Te={key:0,class:`flex flex-wrap md:justify-between gap-1 md:gap-3`},Ee={class:`flex flex-col items-center content-center gap-3`},De={class:`flex flex-col gap-2`},Oe={class:`flex flex-col gap-4`},ke=t({__name:`CatCalc`,setup(e){let t=n(),r=a(),c=te(),u=ee(),{routeLoading:d}=o(t),{myPets:f}=o(r),{isLoggedIn:m}=o(c),g=ue(de).greaterOrEqual(`md`),_=ne(!1),v=ie({petId:null,dateOfBirth:null,weight:0,activityOptionId:`default`,dryFoodOptionId:`default`,manualDryFoodEnergy:0}),y=ae({dateOfBirth:{required:z},weight:{required:z,numeric:L,minValue:F(1),maxValue:R(10)},activityOptionId:{required:z},dryFoodOptionId:{required:z},manualDryFoodEnergy:{required:z,numeric:L,minValue:F(1),maxValue:R(1e4)}},v,{$autoDirty:!0}),w=S(()=>f.value.find(e=>e.id===v.petId)??null),{requiredEnergy:D,daysUntilNextPhase:W}=me(()=>w.value,()=>v.dateOfBirth,()=>v.weight,()=>v.activityOptionId),G=S(()=>f.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),K=S(()=>pe.filter(e=>w.value?.castrated===!0?e.castrated===!0:w.value?.castrated===!1?e.castrated!==!0:!0)),q=S(()=>K.value.find(e=>e.value===v.dryFoodOptionId)),J=S(()=>_.value?v.manualDryFoodEnergy:q.value?.energy??0),Y=S(()=>q.value?D.value/J.value*100:0),Z=S(()=>Y.value/3);return b(w,e=>{e?(v.dateOfBirth=e.dateOfBirth,v.weight=fe(e).petWeight.value??0,v.activityOptionId=e.castrated||e.insideCat?`castrated`:`default`):(v.dateOfBirth=null,v.weight=0,v.activityOptionId=`default`),y.value.$reset()}),b(K,(e,t)=>{e.find(e=>e.value===v.dryFoodOptionId)?e.length>t.length&&(v.dryFoodOptionId=e[0].value):v.dryFoodOptionId=e.length>0?e[0].value:`default`}),i(async()=>{m.value&&(await u.fetchHouseHolds(),await r.fetchPets(!0))}),(e,t)=>(p(),j(T(N),{class:`surface-panel-glass !rounded-secondary`},{content:x(()=>[t[13]||=O(`div`,{class:`p-5 md:p-10`},[O(`h2`,{class:`text-2xl font-bold mb-2`},`Catculator`),O(`p`,{class:`surface-text-muted mb-2`},`Bereken de energiebehoefte van je kat op basis van formules van FEDIAF.`)],-1),h(T(le),{value:G.value.length>0?`choosePet`:`manual`,class:`w-full md:w-3/4 xl:w-1/2 place-self-center`},{default:x(()=>[h(T(se),null,{default:x(()=>[G.value.length>0?(p(),j(T(B),{key:0,value:`choosePet`},{default:x(()=>[...t[8]||=[k(` Kies je huisdier `,-1)]]),_:1})):C(``,!0),h(T(B),{value:`manual`},{default:x(()=>[...t[9]||=[k(`Handmatig`,-1)]]),_:1})]),_:1}),h(T(ce),{class:`!px-0`},{default:x(()=>[h(T(V),{value:`choosePet`,class:`flex flex-col items-center content-center gap-3`},{default:x(()=>[h(M,{class:`w-full`,name:`pet`,label:`Mijn huisdier`,modelValue:v.petId,"onUpdate:modelValue":t[0]||=e=>v.petId=e,options:[{value:null,label:`Selecteer een huisdier`},...G.value]},null,8,[`modelValue`,`options`]),w.value?(p(),A(`div`,Te,[v.dateOfBirth?(p(),j(T(H),{key:0,severity:`success`,icon:`pi pi-heart`,value:T(s)(v.dateOfBirth)},null,8,[`value`])):(p(),j(T(H),{key:1,severity:`danger`,value:`Geen geboortedatum`})),v.weight?(p(),j(T(H),{key:2,severity:`success`,value:`${v.weight.toFixed(1)} kg`},null,8,[`value`])):(p(),j(T(H),{key:3,severity:`danger`,value:`Geen gewicht`})),h(T(H),{severity:`success`,value:w.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`value`]),w.value.castrated?(p(),j(T(H),{key:4,severity:`success`,value:w.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):C(``,!0)])):C(``,!0)]),_:1}),h(T(V),{value:`manual`,class:`flex flex-col items-center content-center gap-3`},{default:x(()=>[h(oe,{class:`w-full`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:v.dateOfBirth,"onUpdate:modelValue":t[1]||=e=>v.dateOfBirth=e,error:T(y).dateOfBirth.$error?T(I)(T(y).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),h(P,{class:`w-full`,name:`weight`,label:`Gewicht (kg)`,modelValue:v.weight,"onUpdate:modelValue":t[2]||=e=>v.weight=e,modelModifiers:{number:!0},error:T(y).weight.$error?T(I)(T(y).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),h(M,{class:`w-full`,name:`activityOptionId`,label:`Activiteit`,modelValue:v.activityOptionId,"onUpdate:modelValue":t[3]||=e=>v.activityOptionId=e,error:T(y).activityOptionId.$error?T(I)(T(y).activityOptionId):``,options:T(he),required:``},null,8,[`modelValue`,`error`,`options`])]),_:1})]),_:1})]),_:1},8,[`value`]),O(`div`,Ee,[T(D)>0?(p(),j(T(X),{key:0,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:x(()=>[k(l(T(g)?`Vereiste energie per dag:`:`Energie per dag:`)+` `+l(T(D).toFixed(1)+` kcal`),1)]),_:1})):C(``,!0),_.value?(p(),j(P,{key:1,class:`w-full md:w-3/4 xl:w-1/2`,name:`energy`,label:`Energie in 100g droogvoer (kcal)`,modelValue:v.manualDryFoodEnergy,"onUpdate:modelValue":t[5]||=e=>v.manualDryFoodEnergy=e,modelModifiers:{number:!0},error:T(y).manualDryFoodEnergy.$error?T(I)(T(y).manualDryFoodEnergy):``,required:``,"min-value":1,"max-value":1e4,"input-props":{type:`number`}},{default:x(()=>[h(U,{icon:`pi pi-refresh`,onClick:t[4]||=e=>_.value=!1})]),_:1},8,[`modelValue`,`error`])):(p(),j(M,{key:2,class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Energie in 100g droogvoer (kcal)`,modelValue:v.dryFoodOptionId,"onUpdate:modelValue":t[7]||=e=>v.dryFoodOptionId=e,error:T(y).dryFoodOptionId.$error?T(I)(T(y).dryFoodOptionId):``,options:K.value,required:``},{default:x(()=>[h(U,{icon:`pi pi-pencil`,onClick:t[6]||=e=>_.value=!0})]),_:1},8,[`modelValue`,`error`,`options`])),Y.value>0?(p(),j(T(N),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:x(()=>[...t[10]||=[k(`Resultaat`,-1)]]),content:x(()=>[O(`div`,De,[h(T(X),{severity:`info`},{default:x(()=>[k(l(T(g)?`Vereiste droogvoer per dag:`:`Voer per dag:`)+` `+l(Y.value.toFixed(1)+` g`),1)]),_:1}),h(T(X),{severity:`info`},{default:x(()=>[k(l(T(g)?`Vereiste droogvoer per maaltijd:`:`Voer per maaltijd:`)+` `+l(Z.value.toFixed(1)+` g`),1)]),_:1}),T(W)===null?C(``,!0):(p(),j(T(X),{key:0,severity:`warn`},{default:x(()=>[k(` Let op: over `+l(T(W).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:x(()=>[O(`div`,Oe,[t[11]||=O(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),w.value?C(``,!0):(p(),j(re,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:T(d)===T(E).PET_OVERVIEW,route:T(E).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(p(),j(T(X),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:x(()=>[...t[12]||=[k(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{ke as default};