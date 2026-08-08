import{Br as e,Cr as t,D as n,Di as r,Er as i,Fr as a,Ft as o,Hr as s,Ht as c,It as l,Jr as u,Lr as d,Mi as f,O as p,Pt as ee,S as m,Tt as h,Ur as g,Vr as _,Xr as v,Zr as y,_r as b,b as x,br as S,c as C,gr as w,hr as T,jr as E,lr as D,oi as O,or as k,qn as A,ri as te,vr as j,wr as M,yr as N}from"../bundle.js";import{n as P,t as F}from"./c-card.js";import{t as I}from"./c-TextField.js";import{c as L,i as R,l as ne,o as re,t as ie,u as z}from"./c-dist.js";import{t as B}from"./c-DateField.js";import{n as V,r as H,t as U}from"./c-useCatCalc.js";var W=p.extend({name:`message`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),G={name:`BaseMessage`,extends:n,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:W,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=ae(e,`string`);return K(t)==`symbol`?t:t+``}function ae(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Message`,extends:G,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return h(q(q({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:m},components:{TimesIcon:C}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Z(Object(n),!0).forEach(function(t){oe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t,n){return(t=se(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=ce(e,`string`);return X(t)==`symbol`?t:t+``}function ce(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var le=[`data-p`],ue=[`data-p`],de=[`data-p`],fe=[`aria-label`,`data-p`],pe=[`data-p`];function $(t,n,i,a,o,c){var l=_(`TimesIcon`),u=s(`ripple`);return d(),j(D,E({name:`p-message`,appear:``},t.ptmi(`transition`)),{default:v(function(){return[o.visible?(d(),S(`div`,E({key:0,class:t.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":c.dataP},t.ptm(`root`)),[b(`div`,E({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`)),[t.$slots.container?e(t.$slots,`container`,{key:0,closeCallback:c.close}):(d(),S(`div`,E({key:1,class:t.cx(`content`),"data-p":c.dataP},t.ptm(`content`)),[e(t.$slots,`icon`,{class:r(t.cx(`icon`))},function(){return[(d(),j(g(t.icon?`span`:null),E({class:[t.cx(`icon`),t.icon],"data-p":c.dataP},t.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),t.$slots.default?(d(),S(`div`,E({key:0,class:t.cx(`text`),"data-p":c.dataP},t.ptm(`text`)),[e(t.$slots,`default`)],16,de)):N(``,!0),t.closable?y((d(),S(`button`,E({key:1,class:t.cx(`closeButton`),"aria-label":c.closeAriaLabel,type:`button`,onClick:n[0]||=function(e){return c.close(e)},"data-p":c.dataP},Q(Q({},t.closeButtonProps),t.ptm(`closeButton`))),[e(t.$slots,`closeicon`,{},function(){return[t.closeIcon?(d(),S(`i`,E({key:0,class:[t.cx(`closeIcon`),t.closeIcon],"data-p":c.dataP},t.ptm(`closeIcon`)),null,16,pe)):(d(),j(l,E({key:1,class:[t.cx(`closeIcon`),t.closeIcon],"data-p":c.dataP},t.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,fe)),[[u]]):N(``,!0)],16,ue))],16)],16,le)):N(``,!0)]}),_:3},16)}Y.render=$;var me={class:`flex flex-col items-center content-center gap-3`},he={class:`flex flex-col gap-2`},ge={class:`flex flex-col gap-4`},_e=i({__name:`CatCalc`,setup(e){let n=o(),r=l(),i=ee(),s=c(),{routeLoading:p}=A(n),{myPets:m}=A(r),{isLoggedIn:h}=A(i),g=te({petId:null,dateOfBirth:null,weight:0,activity:`default`,dryFood:`default`}),_=ie({dateOfBirth:{required:z},weight:{required:z,numeric:ne,minValue:L(1),maxValue:re(10)},activity:{required:z},dryFood:{required:z}},g,{$autoDirty:!0}),y=w(()=>m.value.find(e=>e.id===g.petId)??null),{requiredEnergy:C}=H(()=>y.value,()=>g.dateOfBirth,()=>g.weight,()=>g.activity),E=w(()=>[{value:``,label:`Selecteer een huisdier`},...m.value.filter(e=>e.type===`cat`).map(e=>({value:e.id,label:e.name}))]),D=w(()=>V.filter(e=>y.value?.castrated===!0?e.castrated===!0:y.value?.castrated===!1?e.castrated!==!0:!0)),W=w(()=>D.value.find(e=>e.value===g.dryFood)),G=w(()=>W.value?C.value/W.value.energy*100:0),K=w(()=>G.value/3);return u(D,(e,t)=>{e.find(e=>e.value===g.dryFood)?e.length>t.length&&(g.dryFood=e[0].value):g.dryFood=e.length>0?e[0].value:`default`}),a(async()=>{h.value&&(await s.fetchHouseHolds(),await r.fetchPets())}),(e,n)=>(d(),j(O(F),{class:`surface-panel-glass !rounded-secondary`},{content:v(()=>[n[9]||=b(`div`,{class:`p-5 md:p-10`},[b(`h2`,{class:`text-2xl font-bold mb-2`},`Cat Calculator`),b(`p`,{class:`surface-text-muted mb-2`},`Maak een kattenberekening!`)],-1),b(`div`,me,[E.value.length>0?(d(),j(P,{key:0,class:`w-full md:w-3/4 xl:w-1/2`,name:`pet`,label:`Kies een huisdier`,modelValue:g.petId,"onUpdate:modelValue":n[0]||=e=>g.petId=e,options:E.value},null,8,[`modelValue`,`options`])):N(``,!0),y.value?N(``,!0):(d(),S(T,{key:1},[M(B,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dateOfBirth`,label:`Geboortedatum`,modelValue:g.dateOfBirth,"onUpdate:modelValue":n[1]||=e=>g.dateOfBirth=e,error:O(_).dateOfBirth.$error?O(R)(O(_).dateOfBirth):``,"without-time":``,required:``},null,8,[`modelValue`,`error`]),M(I,{class:`w-full md:w-3/4 xl:w-1/2`,name:`weight`,label:`Gewicht (kg)`,modelValue:g.weight,"onUpdate:modelValue":n[2]||=e=>g.weight=e,modelModifiers:{number:!0},error:O(_).weight.$error?O(R)(O(_).weight):``,required:``,"min-value":1,"max-value":10,"input-props":{type:`number`}},null,8,[`modelValue`,`error`]),M(P,{class:`w-full md:w-3/4 xl:w-1/2`,name:`activity`,label:`Activiteit`,modelValue:g.activity,"onUpdate:modelValue":n[3]||=e=>g.activity=e,error:O(_).activity.$error?O(R)(O(_).activity):``,options:O(U),required:``},null,8,[`modelValue`,`error`,`options`])],64)),O(C)>0?(d(),j(O(Y),{key:2,class:`w-full md:w-3/4 xl:w-1/2`,severity:`info`},{default:v(()=>[t(f(`Vereiste energie per dag: `+O(C).toFixed(1)+` kcal`),1)]),_:1})):N(``,!0),M(P,{class:`w-full md:w-3/4 xl:w-1/2`,name:`dryFood`,label:`Droogvoer`,modelValue:g.dryFood,"onUpdate:modelValue":n[4]||=e=>g.dryFood=e,error:O(_).dryFood.$error?O(R)(O(_).dryFood):``,options:D.value,required:``},null,8,[`modelValue`,`error`,`options`]),G.value>0?(d(),j(O(F),{key:3,class:`mt-5 w-full md:w-3/4 xl:w-1/2 border border-neutral-500`},{title:v(()=>[...n[5]||=[t(`Resultaten:`,-1)]]),subtitle:v(()=>[...n[6]||=[b(`p`,{class:`italic`},`Gebaseerd op constanten van FEDIAF.`,-1)]]),content:v(()=>[b(`div`,he,[M(O(Y),{severity:`contrast`},{default:v(()=>[t(f(`Vereist droogvoer per dag: `+G.value.toFixed(1)+` g`),1)]),_:1}),M(O(Y),{severity:`contrast`},{default:v(()=>[t(f(`Vereist droogvoer per maaltijd: `+K.value.toFixed(1)+` g`),1)]),_:1})])]),footer:v(()=>[b(`div`,ge,[n[7]||=b(`span`,{class:`text-neutral-400`},`^ Mogu approved!`,-1),y.value?N(``,!0):(d(),j(x,{key:0,class:`w-fit place-self-center`,label:`Maak een profiel voor je kat!`,loading:O(p)===O(k).PET_OVERVIEW,route:O(k).PET_OVERVIEW},null,8,[`loading`,`route`]))])]),_:1})):(d(),j(O(Y),{key:4,class:`w-full md:w-3/4 xl:w-1/2`,severity:`warn`},{default:v(()=>[...n[8]||=[t(` Er is nog geen resultaat beschikbaar. Vul alle velden in om een resultaat te krijgen. `,-1)]]),_:1}))])]),_:1}))}});export{_e as default};