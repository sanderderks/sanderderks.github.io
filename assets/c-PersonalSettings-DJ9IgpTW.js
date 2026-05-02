import{Cr as e,Dr as t,Er as n,Fr as r,Mt as i,Or as a,Pr as o,Pt as s,St as c,Vr as l,Xn as u,a as d,gi as f,ii as p,kr as m,mi as h,oi as g,or as _,pi as v,qr as y,s as b,xt as x}from"./c-ripple-Drmeh0Td.js";import{t as S}from"./c-Dialog-C9TmeuQB.js";import{t as C}from"./c-EditButton-D45nXQjA.js";import{t as w}from"./c-SelectField-C6-HSTii.js";import{t as T}from"./c-SwitchField-CKPKDXMe.js";import{n as E,t as D}from"./c-NumberField-DjoNcfSI.js";var O=b.extend({name:`progressspinner`,style:`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,classes:{root:`p-progressspinner`,spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`}}),k={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:d,props:{strokeWidth:{type:String,default:`2`},fill:{type:String,default:`none`},animationDuration:{type:String,default:`2s`}},style:O,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},A=[`fill`,`stroke-width`];function j(e,t,r,i,a,o){return y(),m(`div`,l({class:e.cx(`root`),role:`progressbar`},e.ptmi(`root`)),[(y(),m(`svg`,l({class:e.cx(`spin`),viewBox:`25 25 50 50`,style:o.svgStyle},e.ptm(`spin`)),[n(`circle`,l({class:e.cx(`circle`),cx:`50`,cy:`50`,r:`20`,fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:`10`},e.ptm(`circle`)),null,16,A)],16))],16)}k.render=j;var M={class:`flex justify-end`},N={class:`flex flex-col gap-3 my-5`},P=r({__name:`PersonalSettings`,setup(r){let l=i(),d=s(),b=x(),{personalSettings:O,isFetchLoading:k,isMutationLoading:A}=u(b),{firebaseUser:j,isOwner:P}=u(d),{houseHoldOptions:F,activeHouseHoldId:I}=E(),L=h(!1),R=h(null),z=[{value:`dark`,label:`Donker`},{value:`light`,label:`Licht`}],B=v(V());function V(){return O.value?O.value.clone():c.create(j.value.uid)}async function H(){let e=j.value?.uid;if(!e)return;let t=B.clone();b.setActiveHouseHoldId(R.value),await b.updatePersonalSettings(e,t),L.value=!1}return p(L,()=>{Object.assign(B,V()),R.value=I.value},{immediate:!0}),(r,i)=>(y(),m(e,null,[n(`div`,M,[o(C,{isLoading:f(k),onClick:i[0]||=e=>L.value=!0},null,8,[`isLoading`])]),o(S,{isOpen:L.value,title:`Persoonlijke instellingen`,description:`Nu kun je zelf bepalen hoe je het graag hebt.`,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:f(A),onConfirm:H,onCancel:i[8]||=e=>L.value=!1},{default:g(()=>[n(`div`,N,[o(w,{class:`w-full md:w-1/2 place-self-center`,name:`primeVueTheme`,label:`PrimeVue thema`,options:z,required:``,modelValue:B.primeVueTheme,"onUpdate:modelValue":i[1]||=e=>B.primeVueTheme=e},null,8,[`modelValue`]),f(P)?(y(),t(w,{key:0,class:`w-full md:w-1/2 place-self-center`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:f(F),modelValue:R.value,"onUpdate:modelValue":i[2]||=e=>R.value=e},null,8,[`options`,`modelValue`])):a(``,!0),f(l).name===f(_).TASKS?(y(),m(e,{key:1},[o(T,{class:`w-full md:w-1/2 place-self-center`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:B.tasks.showDifficulty,"onUpdate:modelValue":i[3]||=e=>B.tasks.showDifficulty=e},null,8,[`modelValue`]),o(T,{class:`w-full md:w-1/2 place-self-center`,name:`tasks.showCategories`,label:`Toon categorieën`,modelValue:B.tasks.showCategories,"onUpdate:modelValue":i[4]||=e=>B.tasks.showCategories=e},null,8,[`modelValue`])],64)):f(l).name===f(_).PRODUCTS?(y(),m(e,{key:2},[o(D,{class:`w-full md:w-1/2 place-self-center`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst:`,modelValue:B.products.amountOfDaysToShow,"onUpdate:modelValue":i[5]||=e=>B.products.amountOfDaysToShow=e},null,8,[`modelValue`]),o(T,{class:`w-full md:w-1/2 place-self-center`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:B.products.showPromotions,"onUpdate:modelValue":i[6]||=e=>B.products.showPromotions=e},null,8,[`modelValue`]),o(T,{class:`w-full md:w-1/2 place-self-center`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:B.products.showCategory,"onUpdate:modelValue":i[7]||=e=>B.products.showCategory=e},null,8,[`modelValue`])],64)):a(``,!0)])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}});export{k as n,P as t};