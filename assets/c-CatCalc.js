import{Bi as e,Cr as t,Fi as n,Fr as r,Hr as ee,Jr as i,Mt as te,Nt as a,Or as o,Rr as s,Si as c,Sn as l,Sr as u,Tr as d,Wr as f,Xn as p,Xr as m,Yr as h,di as ne,fi as re,fr as g,hn as ie,i as _,ii as v,jr as y,kr as b,l as x,mi as S,mr as C,nt as w,oi as T,qr as E,ri as D,s as O,sr as k,t as A,ti as j,wr as M,xr as N,zt as ae}from"./c-ripple.js";import{t as P}from"./c-CreateButton.js";import{i as oe,t as F}from"./c-SelectField.js";import{t as se}from"./c-DateField.js";import{t as I}from"./c-TextField.js";import{i as ce,n as le,r as ue,t as de}from"./c-useCatCalc.js";import{a as L,c as R,l as z,r as B,s as V}from"./c-validationHelpers.js";import{t as fe}from"./c-dist.js";import{n as pe,t as me}from"./c-core.js";import{a as H,i as he,n as ge,r as U,t as _e}from"./c-tabs.js";import{t as W}from"./c-tag.js";import{t as G}from"./c-card.js";var K=x.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}});r(),C(),c();var q={name:`BaseMessage`,extends:O,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:K,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function Y(e,t,n){return(t=ve(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=ye(e,`string`);return J(t)==`symbol`?t:t+``}function ye(e,t){if(J(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(J(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var X={name:`Message`,extends:q,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return w(Y(Y({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:A},components:{TimesIcon:_}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Q(Object(n),!0).forEach(function(t){be(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function be(e,t,n){return(t=xe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e){var t=Se(e,`string`);return Z(t)==`symbol`?t:t+``}function Se(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ce=[`data-p`],we=[`data-p`],Te=[`data-p`],Ee=[`aria-label`,`data-p`],De=[`data-p`];function Oe(e,r,ee,te,a,o){var c=i(`TimesIcon`),l=h(`ripple`);return f(),t(g,s({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:D(function(){return[a.visible?(f(),d(`div`,s({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":o.dataP},e.ptm(`root`)),[u(`div`,s({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?E(e.$slots,`container`,{key:0,closeCallback:o.close}):(f(),d(`div`,s({key:1,class:e.cx(`content`),"data-p":o.dataP},e.ptm(`content`)),[E(e.$slots,`icon`,{class:n(e.cx(`icon`))},function(){return[(f(),t(m(e.icon?`span`:null),s({class:[e.cx(`icon`),e.icon],"data-p":o.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(f(),d(`div`,s({key:0,class:e.cx(`text`),"data-p":o.dataP},e.ptm(`text`)),[E(e.$slots,`default`)],16,Te)):M(``,!0),e.closable?v((f(),d(`button`,s({key:1,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,type:`button`,onClick:r[0]||=function(e){return o.close(e)},"data-p":o.dataP},$($({},e.closeButtonProps),e.ptm(`closeButton`))),[E(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(f(),d(`i`,s({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,De)):(f(),t(c,s({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,Ee)),[[l]]):M(``,!0)],16,we))],16)],16,Ce)):M(``,!0)]}),_:3},16)}X.render=Oe,r(),T(),c();var ke={key:0,class:`flex flex-wrap md:justify-between gap-1 md:gap-3`},Ae={class:`flex flex-col items-center content-center gap-3`},je={class:`flex flex-col gap-2`},Me={class:`flex flex-col gap-4`},Ne=y({__name:`CatCalc`,setup(n){let r=te(),i=a(),s=ie(),c=ae(),{routeLoading:m}=p(r),{myPets:h}=p(i),{isLoggedIn:g}=p(s),_=pe(me).greaterOrEqual(`md`),v=re(!1),y=ne({petId:null,dateOfBirth:null,weight:0,activityOptionId:`default`,dryFoodOptionId:`default`,manualDryFoodEnergy:0}),x={dateOfBirth:{required:z},weight:{required:z,numeric:R,minValue:V(1),maxValue:L(10)},activityOptionId:{required:z},dryFoodOptionId:{required:z},manualDryFoodEnergy:{required:z,numeric:R,minValue:V(1),maxValue:L(1e4)}},C=fe(x,y,{$autoDirty:!0}),w=N(()=>h.value.find(e=>e.id===y.petId)??null),{requiredEnergy:T,daysUntilNextPhase:E}=ue(()=>w.value,()=>y.dateOfBirth,()=>y.weight,()=>y.activityOptionId),O=N(()=>h.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),A=N(()=>le.filter(e=>w.value?.castrated===!0?e.castrated===!0:w.value?.castrated!==!1||e.castrated!==!0)),K=N(()=>A.value.find(e=>e.value===y.dryFoodOptionId)),q=N(()=>v.value?y.manualDryFoodEnergy:K.value?.energy??0),J=N(()=>K.value?T.value/q.value*100:0),Y=N(()=>J.value/3);return j(w,e=>{e?(y.dateOfBirth=e.dateOfBirth,y.weight=ce(e).petWeight.value??0,y.activityOptionId=e.castrated||e.insideCat?`castrated`:`default`):(y.dateOfBirth=null,y.weight=0,y.activityOptionId=`default`),C.value.$reset()}),j(A,(e,t)=>{e.find(e=>e.value===y.dryFoodOptionId)?e.length>t.length&&(y.dryFoodOptionId=e[0].value):y.dryFoodOptionId=e.length>0?e[0].value:`default`}),ee(async()=>{g.value&&(await c.fetchHouseHolds(),await i.fetchPets(!0))}),(n,r)=>(f(),t(S(G),{class:`surface-panel-glass !rounded-secondary`},{content:D(()=>[r[13]||=u(`div`,{class:`p-5 md:p-10`},[u(`h2`,{class:`text-2xl font-bold mb-2`},` Catculator `),u(`p`,{class:`surface-text-muted mb-2`},` Bereken de energiebehoefte van je kat op basis van formules van FEDIAF. `)],-1),b(S(_e),{value:O.value.length>0?`choosePet`:`manual`,class:`w-full md:w-3/4 xl:w-1/2 place-self-center`},{default:D(()=>[b(S(he),null,{default:D(()=>[O.value.length>0?(f(),t(S(H),{key:0,value:`choosePet`},{default:D(()=>[...r[8]||=[o(` Kies je huisdier `,-1)]]),_:1})):M(``,!0),b(S(H),{value:`manual`},{default:D(()=>[...r[9]||=[o(` Handmatig `,-1)]]),_:1})]),_:1}),b(S(ge),{class:`!px-0`},{default:D(()=>[b(S(U),{value:`choosePet`,class:`flex flex-col items-center content-center gap-3`},{default:D(()=>[b(F,{modelValue:y.petId,"onUpdate:modelValue":r[0]||=e=>y.petId=e,class:`w-full`,name:`pet`,label:`Mijn huisdier`,options:[{value:null,label:`Selecteer een huisdier`},...O.value]},null,8,[`modelValue`,`options`]),w.value?(f(),d(`div`,ke,[y.dateOfBirth?(f(),t(S(W),{key:0,severity:`success`,icon:`pi pi-heart`,value:S(l)(y.dateOfBirth)},null,8,[`value`])):(f(),t(S(W),{key:1,severity:`danger`,value:`Geen geboortedatum`})),y.weight?(f(),t(S(W),{key:2,severity:`success`,value:`${y.weight.toFixed(1)} kg`},null,8,[`value`])):(f(),t(S(W),{key:3,severity:`danger`,value:`Geen gewicht`})),b(S(W),{severity:`success`,value:w.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`value`]),w.value.castrated?(f(),t(S(W),{key:4,severity:`success`,value:w.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):M(``,!0)])):M(``,!0)]),_:1}),b(S(U),{value:`manual`,class:`flex flex-col items-center content-center gap-3`},{default:D(()=>[b(se,{modelValue:y.dateOfBirth,"onUpdate:modelValue":r[1]||=e=>y.dateOfBirth=e,class:`w-full`,name:`dateOfBirth`,label:`Geboortedatum`,error:S(C).dateOfBirth.$error?S(B)(S(C).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),b(I,{modelValue:y.weight,"onUpdate:modelValue":r[2]||=e=>y.weight=e,modelModifiers:{number:!0},class:`w-full`,name:`weight`,label:`Gewicht (kg)`,error:S(C).weight.$error?S(B)(S(C).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),b(F,{modelValue:y.activityOptionId,"onUpdate:modelValue":r[3]||=e=>y.activityOptionId=e,class:`w-full`,name:`activityOptionId`,label:`Activiteit`,error:S(C).activityOptionId.$error?S(B)(S(C).activityOptionId):``,options:S(de),required:``},null,8,[`modelValue`,`error`,`options`])]),_:1})]),_:1})]),_:1},8,[`value`]),u(`div`,Ae,[S(T)>0?(f(),t(S(X),{key:0,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:D(()=>[o(e(S(_)?`Vereiste energie per dag:`:`Energie per dag:`)+` `+e(S(T).toFixed(1)+` kcal`),1)]),_:1})):M(``,!0),v.value?(f(),t(I,{key:1,modelValue:y.manualDryFoodEnergy,"onUpdate:modelValue":r[5]||=e=>y.manualDryFoodEnergy=e,modelModifiers:{number:!0},class:`w-full md:w-3/4 xl:w-1/2`,name:`energy`,label:`Energie in 100g droogvoer (kcal)`,error:S(C).manualDryFoodEnergy.$error?S(B)(S(C).manualDryFoodEnergy):``,required:``,"min-value":1,"max-value":1e4,"input-props":{type:`number`}},{default:D(()=>[b(P,{icon:`pi pi-refresh`,onClick:r[4]||=e=>v.value=!1})]),_:1},8,[`modelValue`,`error`])):(f(),t(F,{key:2,modelValue:y.dryFoodOptionId,"onUpdate:modelValue":r[7]||=e=>y.dryFoodOptionId=e,class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Energie in 100g droogvoer (kcal)`,error:S(C).dryFoodOptionId.$error?S(B)(S(C).dryFoodOptionId):``,options:A.value,required:``},{default:D(()=>[b(P,{icon:`pi pi-pencil`,onClick:r[6]||=e=>v.value=!0})]),_:1},8,[`modelValue`,`error`,`options`])),J.value>0?(f(),t(S(G),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:D(()=>[...r[10]||=[o(` Resultaat `,-1)]]),content:D(()=>[u(`div`,je,[b(S(X),{severity:`info`},{default:D(()=>[o(e(S(_)?`Vereiste droogvoer per dag:`:`Voer per dag:`)+` `+e(J.value.toFixed(1)+` g`),1)]),_:1}),b(S(X),{severity:`info`},{default:D(()=>[o(e(S(_)?`Vereiste droogvoer per maaltijd:`:`Voer per maaltijd:`)+` `+e(Y.value.toFixed(1)+` g`),1)]),_:1}),S(E)===null?M(``,!0):(f(),t(S(X),{key:0,severity:`warn`},{default:D(()=>[o(` Let op: over `+e(S(E).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:D(()=>[u(`div`,Me,[r[11]||=u(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),w.value?M(``,!0):(f(),t(oe,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:S(m)===S(k).PET_OVERVIEW,route:S(k).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(f(),t(S(X),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:D(()=>[...r[12]||=[o(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{Ne as default};