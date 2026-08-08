import{D as e,Dr as t,Ft as n,Hr as r,Ht as i,Ir as a,It as o,Jn as s,Mn as c,Mr as l,Ni as u,O as d,Oi as f,Pt as p,Qr as m,Rr as h,S as g,Tr as _,Tt as v,Ur as y,Vr as b,Wr as x,Yr as S,Zr as C,_r as w,b as ee,br as T,c as E,gr as D,ii as te,si as O,sr as k,ur as A,vr as j,wr as M,xr as N,yr as P}from"../bundle.js";import{n as F,t as I}from"./c-card.js";import{t as ne}from"./c-TextField.js";import{c as re,i as L,l as ie,o as ae,t as oe,u as R}from"./c-dist.js";import{t as z}from"./c-DateField.js";import{t as B}from"./c-tag.js";import{i as V,n as H,r as U,t as W}from"./c-useCatCalc.js";var G=d.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),K={name:`BaseMessage`,extends:e,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:G,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function q(e){"@babel/helpers - typeof";return q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},q(e)}function J(e,t,n){return(t=se(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=ce(e,`string`);return q(t)==`symbol`?t:t+``}function ce(e,t){if(q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Message`,extends:K,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return v(J(J({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:g},components:{TimesIcon:E}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){le(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function le(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){var t=de(e,`string`);return X(t)==`symbol`?t:t+``}function de(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var fe=[`data-p`],pe=[`data-p`],$=[`data-p`],me=[`aria-label`,`data-p`],he=[`data-p`];function ge(e,t,n,i,a,o){var s=r(`TimesIcon`),c=y(`ripple`);return h(),P(A,l({name:`p-message`,appear:``},e.ptmi(`transition`)),{default:C(function(){return[a.visible?(h(),N(`div`,l({key:0,class:e.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":o.dataP},e.ptm(`root`)),[j(`div`,l({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[e.$slots.container?b(e.$slots,`container`,{key:0,closeCallback:o.close}):(h(),N(`div`,l({key:1,class:e.cx(`content`),"data-p":o.dataP},e.ptm(`content`)),[b(e.$slots,`icon`,{class:f(e.cx(`icon`))},function(){return[(h(),P(x(e.icon?`span`:null),l({class:[e.cx(`icon`),e.icon],"data-p":o.dataP},e.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),e.$slots.default?(h(),N(`div`,l({key:0,class:e.cx(`text`),"data-p":o.dataP},e.ptm(`text`)),[b(e.$slots,`default`)],16,$)):T(``,!0),e.closable?m((h(),N(`button`,l({key:1,class:e.cx(`closeButton`),"aria-label":o.closeAriaLabel,type:`button`,onClick:t[0]||=function(e){return o.close(e)},"data-p":o.dataP},Q(Q({},e.closeButtonProps),e.ptm(`closeButton`))),[b(e.$slots,`closeicon`,{},function(){return[e.closeIcon?(h(),N(`i`,l({key:0,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,he)):(h(),P(s,l({key:1,class:[e.cx(`closeIcon`),e.closeIcon],"data-p":o.dataP},e.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,me)),[[c]]):T(``,!0)],16,pe))],16)],16,fe)):T(``,!0)]}),_:3},16)}Y.render=ge;var _e={class:`flex flex-col items-center content-center gap-3`},ve={key:1,class:`flex flex-wrap md:justify-between gap-3`},ye={class:`flex flex-col gap-2`},be={class:`flex flex-col gap-4`},xe=t({__name:`CatCalc`,setup(e){let t=n(),r=o(),l=p(),d=i(),{routeLoading:f}=s(t),{myPets:m}=s(r),{isLoggedIn:g}=s(l),v=te({petId:null,dateOfBirth:null,weight:0,activity:`default`,dryFood:`default`}),y=oe({dateOfBirth:{required:R},weight:{required:R,numeric:ie,minValue:re(1),maxValue:ae(10)},activity:{required:R},dryFood:{required:R}},v,{$autoDirty:!0}),b=w(()=>m.value.find(e=>e.id===v.petId)??null),{requiredEnergy:x,daysUntilNextPhase:E}=U(()=>b.value,()=>v.dateOfBirth,()=>v.weight,()=>v.activity),A=w(()=>m.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))),G=w(()=>H.filter(e=>b.value?.castrated===!0?e.castrated===!0:b.value?.castrated===!1?e.castrated!==!0:!0)),K=w(()=>G.value.find(e=>e.value===v.dryFood)),q=w(()=>K.value?x.value/K.value.energy*100:0),J=w(()=>q.value/3);return S(b,e=>{e?(v.dateOfBirth=e.dateOfBirth,v.weight=V(e).petWeight.value??0,v.activity=e.castrated||e.insideCat?`castrated`:`default`):(v.dateOfBirth=null,v.weight=0,v.activity=`default`),y.value.$reset()}),S(G,(e,t)=>{e.find(e=>e.value===v.dryFood)?e.length>t.length&&(v.dryFood=e[0].value):v.dryFood=e.length>0?e[0].value:`default`}),a(async()=>{g.value&&(await d.fetchHouseHolds(),await r.fetchPets(!0))}),(e,t)=>(h(),P(O(I),{class:`surface-panel-glass !rounded-secondary`},{content:C(()=>[t[9]||=j(`div`,{class:`p-5 md:p-10`},[j(`h2`,{class:`text-2xl font-bold mb-2`},`Cat Calculator`),j(`p`,{class:`surface-text-muted mb-2`},`Maak een kattenberekening!`)],-1),j(`div`,_e,[A.value.length>0?(h(),P(F,{key:0,class:`w-full md:w-3/4 xl:w-1/2`,name:`pet`,label:`Kies een huisdier`,modelValue:v.petId,"onUpdate:modelValue":t[0]||=e=>v.petId=e,options:[{value:null,label:`Selecteer een huisdier`},...A.value]},null,8,[`modelValue`,`options`])):T(``,!0),b.value?(h(),N(`div`,ve,[v.dateOfBirth?(h(),P(O(B),{key:0,severity:`success`,value:O(c)(v.dateOfBirth)},null,8,[`value`])):(h(),P(O(B),{key:1,severity:`danger`,value:`Geen geboortedatum`})),v.weight?(h(),P(O(B),{key:2,severity:`success`,value:`${v.weight.toFixed(1)} kg`},null,8,[`value`])):(h(),P(O(B),{key:3,severity:`danger`,value:`Geen gewicht`})),_(O(B),{severity:b.value.insideCat?`warn`:`success`,value:b.value.insideCat?`Binnenkat`:`Buitenkat`},null,8,[`severity`,`value`]),b.value.castrated?(h(),P(O(B),{key:4,severity:`warn`,value:b.value.gender===`male`?`Gecastreerd`:`Gesteriliseerd`},null,8,[`value`])):T(``,!0)])):(h(),N(D,{key:2},[_(z,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:v.dateOfBirth,"onUpdate:modelValue":t[1]||=e=>v.dateOfBirth=e,error:O(y).dateOfBirth.$error?O(L)(O(y).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),_(ne,{class:`w-full md:w-3/4 xl:w-1/2`,name:`weight`,label:`Gewicht (kg)`,modelValue:v.weight,"onUpdate:modelValue":t[2]||=e=>v.weight=e,modelModifiers:{number:!0},error:O(y).weight.$error?O(L)(O(y).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),_(F,{class:`w-full md:w-3/4 xl:w-1/2`,name:`activity`,label:`Activiteit`,modelValue:v.activity,"onUpdate:modelValue":t[3]||=e=>v.activity=e,error:O(y).activity.$error?O(L)(O(y).activity):``,options:O(W),required:``},null,8,[`modelValue`,`error`,`options`])],64)),O(x)>0?(h(),P(O(Y),{key:3,class:`my-3 w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:C(()=>[M(u(`Vereiste energie per dag: `+O(x).toFixed(1)+` kcal`),1)]),_:1})):T(``,!0),_(F,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Droogvoer`,modelValue:v.dryFood,"onUpdate:modelValue":t[4]||=e=>v.dryFood=e,error:O(y).dryFood.$error?O(L)(O(y).dryFood):``,options:G.value,required:``},null,8,[`modelValue`,`error`,`options`]),q.value>0?(h(),P(O(I),{key:4,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:C(()=>[...t[5]||=[M(`Resultaten:`,-1)]]),subtitle:C(()=>[...t[6]||=[j(`p`,{class:`italic`},`Gebaseerd op constanten van FEDIAF.`,-1)]]),content:C(()=>[j(`div`,ye,[_(O(Y),{severity:`info`},{default:C(()=>[M(u(`Vereist droogvoer per dag: `+q.value.toFixed(1)+` g`),1)]),_:1}),_(O(Y),{severity:`info`},{default:C(()=>[M(u(`Vereist droogvoer per maaltijd: `+J.value.toFixed(1)+` g`),1)]),_:1}),O(E)===null?T(``,!0):(h(),P(O(Y),{key:0,severity:`warn`},{default:C(()=>[M(` Let op: over `+u(O(E).toFixed(0))+` dagen verandert deze berekening. `,1)]),_:1}))])]),footer:C(()=>[j(`div`,be,[t[7]||=j(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),b.value?T(``,!0):(h(),P(ee,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:O(f)===O(k).PET_OVERVIEW,route:O(k).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(h(),P(O(Y),{key:5,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:C(()=>[...t[8]||=[M(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{xe as default};