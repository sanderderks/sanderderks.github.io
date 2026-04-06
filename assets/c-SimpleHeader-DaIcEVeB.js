import{Br as e,Cr as t,Dr as n,Er as r,Fr as i,Ft as a,Gr as o,Hi as s,Or as c,Pr as l,Pt as u,Tt as d,Vr as f,Zn as p,a as m,dr as h,gi as g,ii as _,kr as v,mi as y,oi as b,or as x,pi as S,qr as C,s as w,ti as T}from"./c-ripple-yTwaw3Mu.js";import{t as E}from"./c-Dialog-BM7_7QXc.js";import{t as D}from"./c-TextField-DkMg96Gy.js";import{t as O}from"./c-EditButton-DVCcLqge.js";import{t as k}from"./c-SelectField-BXWRmb5M.js";import{t as A}from"./c-SwitchField-DSoOG1XG.js";import{t as j}from"./c-useHouseHoldHelper-Uk-MBFCr.js";var M=w.extend({name:`progressspinner`,style:`
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
`,classes:{root:`p-progressspinner`,spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`}}),N={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:m,props:{strokeWidth:{type:String,default:`2`},fill:{type:String,default:`none`},animationDuration:{type:String,default:`2s`}},style:M,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},P=[`fill`,`stroke-width`];function F(e,t,n,i,a,o){return C(),v(`div`,f({class:e.cx(`root`),role:`progressbar`},e.ptmi(`root`)),[(C(),v(`svg`,f({class:e.cx(`spin`),viewBox:`25 25 50 50`,style:o.svgStyle},e.ptm(`spin`)),[r(`circle`,f({class:e.cx(`circle`),cx:`50`,cy:`50`,r:`20`,fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:`10`},e.ptm(`circle`)),null,16,P)],16))],16)}N.render=F;var I=i({__name:`NumberField`,props:e({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,r=T(e,`modelValue`),i=y(``);function a(){r.value=parseFloat(i.value)||0}return _(r,e=>{i.value=e.toString()},{immediate:!0}),(e,r)=>(C(),n(D,f(t,{modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,"input-props":{...t.inputProps,type:`number`},onBlur:a}),null,16,[`modelValue`,`input-props`]))}}),L={class:`flex justify-end`},R={class:`flex flex-col gap-3 my-5`},z=i({__name:`PersonalSettings`,setup(e){let i=h(),s=d(),f=u(),{personalSettings:m,isFetchLoading:w,isMutationLoading:T}=x(f),{firebaseUser:D,isOwner:M}=x(s),{houseHoldOptions:N,activeHouseHoldId:P,defaultHouseHoldId:F}=j(),z=y(!1),B=y(null),V=S(H());function H(){return m.value?m.value.clone():a.create(D.value.uid)}async function U(){let e=D.value?.uid;if(!e)return;let t=V.clone();f.setActiveHouseHoldId(B.value),await f.updatePersonalSettings(e,t),z.value=!1}return _(z,()=>{Object.assign(V,H()),B.value=P.value},{immediate:!0}),o(()=>{!m.value&&D.value&&f.fetchPersonalSettings(D.value.uid)}),(e,a)=>(C(),v(t,null,[r(`div`,L,[l(O,{isLoading:g(w),onClick:a[0]||=e=>z.value=!0},null,8,[`isLoading`])]),l(E,{isOpen:z.value,title:`Persoonlijke instellingen`,description:`Nu kun je zelf bepalen hoe je het graag hebt.`,cancelText:`Annuleren`,confirmText:`Opslaan`,confirmLoading:g(T),onConfirm:U,onCancel:a[6]||=e=>z.value=!1},{default:b(()=>[r(`div`,R,[g(M)?(C(),n(k,{key:0,class:`w-full md:w-1/2 place-self-center`,name:`activeHouseHoldId`,label:`Actief huishouden`,options:g(N),modelValue:B.value,"onUpdate:modelValue":a[1]||=e=>B.value=e},null,8,[`options`,`modelValue`])):c(``,!0),g(i).name===g(p).TASKS?(C(),n(A,{key:1,class:`w-full md:w-1/2 place-self-center`,name:`tasks.showDifficulty`,label:`Toon moeilijkheidsgraad`,modelValue:V.tasks.showDifficulty,"onUpdate:modelValue":a[2]||=e=>V.tasks.showDifficulty=e},null,8,[`modelValue`])):g(i).name===g(p).PRODUCTS?(C(),v(t,{key:2},[l(I,{class:`w-full md:w-1/2 place-self-center`,name:`products.amountOfDaysToShow`,label:`Aantal dagen om te tonen in je boodschappenlijst:`,modelValue:V.products.amountOfDaysToShow,"onUpdate:modelValue":a[3]||=e=>V.products.amountOfDaysToShow=e},null,8,[`modelValue`]),l(A,{class:`w-full md:w-1/2 place-self-center`,name:`products.showPromotions`,label:`Toon promoties`,modelValue:V.products.showPromotions,"onUpdate:modelValue":a[4]||=e=>V.products.showPromotions=e},null,8,[`modelValue`]),l(A,{class:`w-full md:w-1/2 place-self-center`,name:`products.showCategory`,label:`Toon categorieën`,modelValue:V.products.showCategory,"onUpdate:modelValue":a[5]||=e=>V.products.showCategory=e},null,8,[`modelValue`])],64)):c(``,!0)])]),_:1},8,[`isOpen`,`confirmLoading`])],64))}}),B={class:`mt-3 mb-5 flex flex-col gap-3`},V={class:`text-xl font-bold`},H={key:0},U=i({__name:`SimpleHeader`,props:{title:{},description:{}},setup(e){return(t,n)=>(C(),v(`div`,B,[r(`h3`,V,s(e.title),1),e.description?(C(),v(`p`,H,s(e.description),1)):c(``,!0)]))}});export{N as i,z as n,I as r,U as t};