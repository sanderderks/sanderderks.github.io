import{Dr as e,Hr as t,Ir as n,It as r,Ln as ee,Lt as i,Mr as a,Ni as o,Oi as s,Qr as c,Rr as l,Rt as u,S as d,Tr as f,Ur as p,Vr as m,Wr as h,Wt as te,Yr as g,Zn as _,Zr as v,_r as y,ai as ne,br as b,ft as x,i as S,ii as re,si as C,sr as w,u as T,ur as E,vr as D,wr as O,x as k,xr as A,yr as j}from"../bundle.js";import{i as ie,t as M}from"./c-SelectField.js";import{t as N}from"./c-TextField.js";import{t as P}from"./c-card.js";import{t as ae}from"./c-dist.js";import{a as F,c as I,l as L,r as R,s as z}from"./c-validationHelpers.js";import{t as oe}from"./c-DateField.js";import{a as B,i as se,n as ce,r as V,t as le}from"./c-tabs.js";import{t as H}from"./c-tag.js";import{t as U}from"./c-CreateButton.js";import{n as ue,t as de}from"./c-core.js";import{i as fe,n as pe,r as me,t as he}from"./c-useCatCalc.js";var W=d.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),G={name:`BaseMessage`,extends:k,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:W,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=Y(e,`string`);return K(t)==`symbol`?t:t+``}function Y(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var X={name:`Message`,extends:G,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return x(q(q({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:S},components:{TimesIcon:T}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Q(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ge(e,t,n){return(t=_e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e){var t=ve(e,`string`);return Z(t)==`symbol`?t:t+``}function ve(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var ye=[`data-p`],be=[`data-p`],xe=[`data-p`],Se=[`aria-label`,`data-p`],Ce=[`data-p`];function we(e,n,r,ee,i,o){var u=t(`TimesIcon`),d=p(`ripple`);return l(),j(E,a({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:v(function(){return[i.visible?(l(),A(`div`,a({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":o.dataP},e.ptm(`root`)),[D(`div`,a({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?m(e.$slots,`container`,{key:0,closeCallback:o.close}):(l(),A(`div`,a({key:1,class:e.cx(`content`),"data-p":o.dataP},e.ptm(`content`)),[m(e.$slots,`icon`,{class:s(e.cx(`icon`))},function(){return[(l(),j(h(e.icon?`span`:null),a({class:[e.cx(`icon`),e.icon],"data-p":o.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(l(),A(`div`,a({key:0,class:e.cx(`text`),"data-p":o.dataP},e.ptm(`text`)),[m(e.$slots,`default`)],16,xe)):b(``,!0),e.closable?c((l(),A(`button`,a({key:1,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,type:`button`,onClick:n[0]||=function(e){return o.close(e)},"data-p":o.dataP},$($({},e.closeButtonProps),e.ptm(`closeButton`))),[m(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(l(),A(`i`,a({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,Ce)):(l(),j(u,a({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Se)),[[d]]):b(``,!0)],16,be))],16)],16,ye)):b(``,!0)]}),_:3},16)}X.render=we;var Te={key:0,class:`flex flex-wrap md:justify-between gap-1 md:gap-3`},Ee={class:`flex flex-col items-center content-center gap-3`},De={class:`flex flex-col gap-2`},Oe={class:`flex flex-col gap-4`},ke=e({__name:`CatCalc`,setup(e){let t=i(),a=u(),s=r(),c=te(),{routeLoading:d}=_(t),{myPets:p}=_(a),{isLoggedIn:m}=_(s),h=ue(de).greaterOrEqual(`md`),x=ne(!1),S=re({petId:null,dateOfBirth:null,weight:0,activityOptionId:`default`,dryFoodOptionId:`default`,manualDryFoodEnergy:0}),T=ae({dateOfBirth:{required:L},weight:{required:L,numeric:I,minValue:z(1),maxValue:F(10)},activityOptionId:{required:L},dryFoodOptionId:{required:L},manualDryFoodEnergy:{required:L,numeric:I,minValue:z(1),maxValue:F(1e4)}},S,{$autoDirty:!0}),E=y(()=>p.value.find(e=>e.id===S.petId)??null),{requiredEnergy:k,daysUntilNextPhase:W}=me(()=>E.value,()=>S.dateOfBirth,()=>S.weight,()=>S.activityOptionId),G=y(()=>p.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),K=y(()=>pe.filter(e=>E.value?.castrated===!0?e.castrated===!0:E.value?.castrated===!1?e.castrated!==!0:!0)),q=y(()=>K.value.find(e=>e.value===S.dryFoodOptionId)),J=y(()=>x.value?S.manualDryFoodEnergy:q.value?.energy??0),Y=y(()=>q.value?k.value/J.value*100:0),Z=y(()=>Y.value/3);return g(E,e=>{e?(S.dateOfBirth=e.dateOfBirth,S.weight=fe(e).petWeight.value??0,S.activityOptionId=e.castrated||e.insideCat?`castrated`:`default`):(S.dateOfBirth=null,S.weight=0,S.activityOptionId=`default`),T.value.$reset()}),g(K,(e,t)=>{e.find(e=>e.value===S.dryFoodOptionId)?e.length>t.length&&(S.dryFoodOptionId=e[0].value):S.dryFoodOptionId=e.length>0?e[0].value:`default`}),n(async()=>{m.value&&(await c.fetchHouseHolds(),await a.fetchPets(!0))}),(e,t)=>(l(),j(C(P),{class:`surface-panel-glass !rounded-secondary`},{content:v(()=>[t[13]||=D(`div`,{class:`p-5 md:p-10`},[D(`h2`,{class:`text-2xl font-bold mb-2`},`Catculator`),D(`p`,{class:`surface-text-muted mb-2`},`Bereken de energiebehoefte van je kat op basis van formules van FEDIAF.`)],-1),f(C(le),{value:G.value.length>0?`choosePet`:`manual`,class:`w-full md:w-3/4 xl:w-1/2 place-self-center`},{default:v(()=>[f(C(se),null,{default:v(()=>[G.value.length>0?(l(),j(C(B),{key:0,value:`choosePet`},{default:v(()=>[...t[8]||=[O(` Kies je huisdier `,-1)]]),_:1})):b(``,!0),f(C(B),{value:`manual`},{default:v(()=>[...t[9]||=[O(`Handmatig`,-1)]]),_:1})]),_:1}),f(C(ce),{class:`!px-0`},{default:v(()=>[f(C(V),{value:`choosePet`,class:`flex flex-col items-center content-center gap-3`},{default:v(()=>[f(M,{class:`w-full`,name:`pet`,label:`Mijn huisdier`,modelValue:S.petId,"onUpdate:modelValue":t[0]||=e=>S.petId=e,options:[{value:null,label:`Selecteer een huisdier`},...G.value]},null,8,[`modelValue`,`options`]),E.value?(l(),A(`div`,Te,[S.dateOfBirth?(l(),j(C(H),{key:0,severity:`success`,icon:`pi pi-heart`,value:C(ee)(S.dateOfBirth)},null,8,[`value`])):(l(),j(C(H),{key:1,severity:`danger`,value:`Geen geboortedatum`})),S.weight?(l(),j(C(H),{key:2,severity:`success`,value:`${S.weight.toFixed(1)} kg`},null,8,[`value`])):(l(),j(C(H),{key:3,severity:`danger`,value:`Geen gewicht`})),f(C(H),{severity:`success`,value:E.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`value`]),E.value.castrated?(l(),j(C(H),{key:4,severity:`success`,value:E.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):b(``,!0)])):b(``,!0)]),_:1}),f(C(V),{value:`manual`,class:`flex flex-col items-center content-center gap-3`},{default:v(()=>[f(oe,{class:`w-full`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:S.dateOfBirth,"onUpdate:modelValue":t[1]||=e=>S.dateOfBirth=e,error:C(T).dateOfBirth.$error?C(R)(C(T).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),f(N,{class:`w-full`,name:`weight`,label:`Gewicht (kg)`,modelValue:S.weight,"onUpdate:modelValue":t[2]||=e=>S.weight=e,modelModifiers:{number:!0},error:C(T).weight.$error?C(R)(C(T).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),f(M,{class:`w-full`,name:`activityOptionId`,label:`Activiteit`,modelValue:S.activityOptionId,"onUpdate:modelValue":t[3]||=e=>S.activityOptionId=e,error:C(T).activityOptionId.$error?C(R)(C(T).activityOptionId):``,options:C(he),required:``},null,8,[`modelValue`,`error`,`options`])]),_:1})]),_:1})]),_:1},8,[`value`]),D(`div`,Ee,[C(k)>0?(l(),j(C(X),{key:0,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:v(()=>[O(o(C(h)?`Vereiste energie per dag:`:`Energie per dag:`)+` `+o(C(k).toFixed(1)+` kcal`),1)]),_:1})):b(``,!0),x.value?(l(),j(N,{key:1,class:`w-full md:w-3/4 xl:w-1/2`,name:`energy`,label:`Energie in 100g droogvoer (kcal)`,modelValue:S.manualDryFoodEnergy,"onUpdate:modelValue":t[5]||=e=>S.manualDryFoodEnergy=e,modelModifiers:{number:!0},error:C(T).manualDryFoodEnergy.$error?C(R)(C(T).manualDryFoodEnergy):``,required:``,"min-value":1,"max-value":1e4,"input-props":{type:`number`}},{default:v(()=>[f(U,{icon:`pi pi-refresh`,onClick:t[4]||=e=>x.value=!1})]),_:1},8,[`modelValue`,`error`])):(l(),j(M,{key:2,class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Energie in 100g droogvoer (kcal)`,modelValue:S.dryFoodOptionId,"onUpdate:modelValue":t[7]||=e=>S.dryFoodOptionId=e,error:C(T).dryFoodOptionId.$error?C(R)(C(T).dryFoodOptionId):``,options:K.value,required:``},{default:v(()=>[f(U,{icon:`pi pi-pencil`,onClick:t[6]||=e=>x.value=!0})]),_:1},8,[`modelValue`,`error`,`options`])),Y.value>0?(l(),j(C(P),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:v(()=>[...t[10]||=[O(`Resultaat`,-1)]]),content:v(()=>[D(`div`,De,[f(C(X),{severity:`info`},{default:v(()=>[O(o(C(h)?`Vereiste droogvoer per dag:`:`Voer per dag:`)+` `+o(Y.value.toFixed(1)+` g`),1)]),_:1}),f(C(X),{severity:`info`},{default:v(()=>[O(o(C(h)?`Vereiste droogvoer per maaltijd:`:`Voer per maaltijd:`)+` `+o(Z.value.toFixed(1)+` g`),1)]),_:1}),C(W)===null?b(``,!0):(l(),j(C(X),{key:0,severity:`warn`},{default:v(()=>[O(` Let op: over `+o(C(W).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:v(()=>[D(`div`,Oe,[t[11]||=D(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),E.value?b(``,!0):(l(),j(ie,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:C(d)===C(w).PET_OVERVIEW,route:C(w).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(l(),j(C(X),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:v(()=>[...t[12]||=[O(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{ke as default};