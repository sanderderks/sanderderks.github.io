import{Cr as e,Dr as t,Er as n,Fr as r,Ft as i,Gr as a,Or as o,Pr as s,Pt as c,Tt as l,Vr as u,Zn as d,a as f,dr as p,gi as m,ii as h,kr as g,mi as _,oi as v,or as y,pi as b,qr as x,s as S}from"./c-ripple-DFApLGD9.js";import{t as C}from"./c-Dialog-zeX5N2Kz.js";import{t as w}from"./c-EditButton-BNf6nDhc.js";import{t as T}from"./c-SelectField-rOUyULN8.js";import{t as E}from"./c-SwitchField-CTawr5vZ.js";import{n as D,t as O}from"./c-NumberField-CxoqFsFu.js";var k=S.extend({name:`progressspinner`,style:`
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
`,classes:{root:`p-progressspinner`,spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`}}),A={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:f,props:{strokeWidth:{type:String,default:`2`},fill:{type:String,default:`none`},animationDuration:{type:String,default:`2s`}},style:k,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},j=[`fill`,`stroke-width`];function M(e,t,r,i,a,o){return x(),g(`div`,u({class:e.cx(`root`),role:`progressbar`},e.ptmi(`root`)),[(x(),g(`svg`,u({class:e.cx(`spin`),viewBox:`25 25 50 50`,style:o.svgStyle},e.ptm(`spin`)),[n(`circle`,u({class:e.cx(`circle`),cx:`50`,cy:`50`,r:`20`,fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:`10`},e.ptm(`circle`)),null,16,j)],16))],16)}A.render=M;var N={class:`flex justify-end`},P={class:`flex flex-col gap-3 my-5`},F=r({__name:`PersonalSettings`,setup(r){let u=p(),f=l(),S=c(),{personalSettings:k,isFetchLoading:A,isMutationLoading:j}=y(S),{firebaseUser:M,isOwner:F}=y(f),{houseHoldOptions:I,activeHouseHoldId:L,defaultHouseHoldId:R}=D(),z=_(!1),B=_(null),V=b(H());function H(){return k.value?k.value.clone():i.create(M.value.uid)}async function U(){let e=M.value?.uid;if(!e)return;let t=V.clone();S.setActiveHouseHoldId(B.value),await S.updatePersonalSettings(e,t),z.value=!1}return h(z,()=>{Object.assign(V,H()),B.value=L.value},{immediate:!0}),a(()=>{!k.value&&M.value&&S.fetchPersonalSettings(M.value.uid)}),(r,i)=>(x(),g(e,null,[n(`div`,N,[s(w,{isLoading:m(A),onClick:i[0]||=e=>z.value=!0},null,8,[`isLoading`])]),s(C,{isOpen:z.value,title:`Persoonlijke instellingen`,description:`Nu kun je zelf bepalen hoe je het graag hebt.`,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:m(j),onConfirm:U,onCancel:i[6]||=e=>z.value=!1},{default:v(()=>[n(`div`,P,[m(F)?(x(),t(T,{key:0,class:`w-full md:w-1/2 place-self-center`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:m(I),modelValue:B.value,"onUpdate:modelValue":i[1]||=e=>B.value=e},null,8,[`options`,`modelValue`])):o(``,!0),m(u).name===m(d).TASKS?(x(),t(E,{key:1,class:`w-full md:w-1/2 place-self-center`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:V.tasks.showDifficulty,"onUpdate:modelValue":i[2]||=e=>V.tasks.showDifficulty=e},null,8,[`modelValue`])):m(u).name===m(d).PRODUCTS?(x(),g(e,{key:2},[s(O,{class:`w-full md:w-1/2 place-self-center`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst:`,modelValue:V.products.amountOfDaysToShow,"onUpdate:modelValue":i[3]||=e=>V.products.amountOfDaysToShow=e},null,8,[`modelValue`]),s(E,{class:`w-full md:w-1/2 place-self-center`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:V.products.showPromotions,"onUpdate:modelValue":i[4]||=e=>V.products.showPromotions=e},null,8,[`modelValue`]),s(E,{class:`w-full md:w-1/2 place-self-center`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:V.products.showCategory,"onUpdate:modelValue":i[5]||=e=>V.products.showCategory=e},null,8,[`modelValue`])],64)):o(``,!0)])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}});export{A as n,F as t};