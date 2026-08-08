import{D as e,Dr as t,Ft as n,Hr as r,Ht as ee,Ir as i,It as a,Jn as o,Mr as s,Ni as c,O as l,Oi as u,Pt as d,Qr as f,Rr as p,S as m,Tr as h,Tt as g,Ur as _,Vr as v,Wr as y,Yr as b,Zr as x,_r as S,b as te,br as C,c as w,ii as T,si as E,sr as D,ur as O,vr as k,wr as A,xr as j,yr as M}from"../bundle.js";import{n as N,t as P}from"./c-card.js";import{t as F}from"./c-TextField.js";import{c as I,i as L,l as ne,o as re,t as ie,u as R}from"./c-dist.js";import{t as z}from"./c-DateField.js";import{i as B,n as V,r as H,t as U}from"./c-useCatCalc.js";var W=l.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),G={name:`BaseMessage`,extends:e,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:W,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=ae(e,`string`);return K(t)==`symbol`?t:t+``}function ae(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Message`,extends:G,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return g(q(q({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:m},components:{TimesIcon:w}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){oe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t,n){return(t=se(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=ce(e,`string`);return X(t)==`symbol`?t:t+``}function ce(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var $=[`data-p`],le=[`data-p`],ue=[`data-p`],de=[`aria-label`,`data-p`],fe=[`data-p`];function pe(e,t,n,ee,i,a){var o=r(`TimesIcon`),c=_(`ripple`);return p(),M(O,s({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:x(function(){return[i.visible?(p(),j(`div`,s({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":a.dataP},e.ptm(`root`)),[k(`div`,s({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?v(e.$slots,`container`,{key:0,closeCallback:a.close}):(p(),j(`div`,s({key:1,class:e.cx(`content`),"data-p":a.dataP},e.ptm(`content`)),[v(e.$slots,`icon`,{class:u(e.cx(`icon`))},function(){return[(p(),M(y(e.icon?`span`:null),s({class:[e.cx(`icon`),e.icon],"data-p":a.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(p(),j(`div`,s({key:0,class:e.cx(`text`),"data-p":a.dataP},e.ptm(`text`)),[v(e.$slots,`default`)],16,ue)):C(``,!0),e.closable?f((p(),j(`button`,s({key:1,class:e.cx(`closeButton`),"aria-label":a.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return a.close(e)},"data-p":a.dataP},Q(Q({},e.closeButtonProps),e.ptm(`closeButton`))),[v(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(p(),j(`i`,s({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,fe)):(p(),M(o,s({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":a.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,de)),[[c]]):C(``,!0)],16,le))],16)],16,$)):C(``,!0)]}),_:3},16)}Y.render=pe;var me={class:`flex flex-col items-center content-center gap-3`},he={class:`flex flex-col gap-2`},ge={class:`flex flex-col gap-4`},_e=t({__name:`CatCalc`,setup(e){let t=n(),r=a(),s=d(),l=ee(),{routeLoading:u}=o(t),{myPets:f}=o(r),{isLoggedIn:m}=o(s),g=T({petId:null,dateOfBirth:null,weight:0,activity:`default`,dryFood:`default`}),_=ie({dateOfBirth:{required:R},weight:{required:R,numeric:ne,minValue:I(1),maxValue:re(10)},activity:{required:R},dryFood:{required:R}},g,{$autoDirty:!0}),v=S(()=>f.value.find(e=>e.id===g.petId)??null),{requiredEnergy:y,daysUntilNextPhase:w}=H(()=>v.value,()=>g.dateOfBirth,()=>g.weight,()=>g.activity),O=S(()=>[{value:``,label:`Selecteer een huisdier`},...f.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))]),j=S(()=>V.filter(e=>v.value?.castrated===!0?e.castrated===!0:v.value?.castrated===!1?e.castrated!==!0:!0)),W=S(()=>j.value.find(e=>e.value===g.dryFood)),G=S(()=>W.value?y.value/W.value.energy*100:0),K=S(()=>G.value/3);return b(v,e=>{e?(g.dateOfBirth=e.dateOfBirth,g.weight=B(e).petWeight.value??0,g.activity=e.castrated||e.insideCat?`castrated`:`default`):(g.dateOfBirth=null,g.weight=0,g.activity=`default`),_.value.$reset()}),b(j,(e,t)=>{e.find(e=>e.value===g.dryFood)?e.length>t.length&&(g.dryFood=e[0].value):g.dryFood=e.length>0?e[0].value:`default`}),i(async()=>{m.value&&(await l.fetchHouseHolds(),await r.fetchPets(!0))}),(e,t)=>(p(),M(E(P),{class:`surface-panel-glass !rounded-secondary`},{content:x(()=>[t[9]||=k(`div`,{class:`p-5 md:p-10`},[k(`h2`,{class:`text-2xl font-bold mb-2`},`Cat Calculator`),k(`p`,{class:`surface-text-muted mb-2`},`Maak een kattenberekening!`)],-1),k(`div`,me,[O.value.length>0?(p(),M(N,{key:0,class:`w-full md:w-3/4 xl:w-1/2`,name:`pet`,label:`Kies een huisdier`,modelValue:g.petId,"onUpdate:modelValue":t[0]||=e=>g.petId=e,options:O.value},null,8,[`modelValue`,`options`])):C(``,!0),h(z,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:g.dateOfBirth,"onUpdate:modelValue":t[1]||=e=>g.dateOfBirth=e,disabled:!!v.value,error:E(_).dateOfBirth.$error?E(L)(E(_).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`disabled`,`error`]),h(F,{class:`w-full md:w-3/4 xl:w-1/2`,name:`weight`,label:`Gewicht (kg)`,modelValue:g.weight,"onUpdate:modelValue":t[2]||=e=>g.weight=e,modelModifiers:{number:!0},error:E(_).weight.$error?E(L)(E(_).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`,disabled:!!v.value}},null,8,[`modelValue`,`error`,`input-props`]),h(N,{class:`w-full md:w-3/4 xl:w-1/2`,name:`activity`,label:`Activiteit`,modelValue:g.activity,"onUpdate:modelValue":t[3]||=e=>g.activity=e,disabled:!!v.value,error:E(_).activity.$error?E(L)(E(_).activity):``,options:E(U),required:``},null,8,[`modelValue`,`disabled`,`error`,`options`]),E(y)>0?(p(),M(E(Y),{key:1,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:x(()=>[A(c(`Vereiste energie per dag: `+E(y).toFixed(1)+` kcal`),1)]),_:1})):C(``,!0),h(N,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Droogvoer`,modelValue:g.dryFood,"onUpdate:modelValue":t[4]||=e=>g.dryFood=e,error:E(_).dryFood.$error?E(L)(E(_).dryFood):``,options:j.value,required:``},null,8,[`modelValue`,`error`,`options`]),G.value>0?(p(),M(E(P),{key:2,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:x(()=>[...t[5]||=[A(`Resultaten:`,-1)]]),subtitle:x(()=>[...t[6]||=[k(`p`,{class:`italic`},`Gebaseerd op constanten van FEDIAF.`,-1)]]),content:x(()=>[k(`div`,he,[h(E(Y),{severity:`info`},{default:x(()=>[A(c(`Vereist droogvoer per dag: `+G.value.toFixed(1)+` g`),1)]),_:1}),h(E(Y),{severity:`info`},{default:x(()=>[A(c(`Vereist droogvoer per maaltijd: `+K.value.toFixed(1)+` g`),1)]),_:1}),E(w)===null?C(``,!0):(p(),M(E(Y),{key:0,severity:`warn`},{default:x(()=>[A(` Let op: over `+c(E(w).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:x(()=>[k(`div`,ge,[t[7]||=k(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),v.value?C(``,!0):(p(),M(te,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:E(u)===E(D).PET_OVERVIEW,route:E(D).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(p(),M(E(Y),{key:3,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:x(()=>[...t[8]||=[A(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{_e as default};