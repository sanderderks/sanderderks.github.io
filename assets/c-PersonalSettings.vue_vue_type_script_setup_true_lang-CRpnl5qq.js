import{an as U,ao as j,b as a,c as v,ap as h,e as w,d as _,W as I,U as B,g as S,X as L,E as V,p as A,c5 as R,s as P,q as M,cd as F,k as N,F as x,h as c,f as r,w as q,B as $,R as H,y as W}from"../bundle.js";import{_ as E}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Be199M3M.js";import{_ as z}from"./c-SelectField.vue_vue_type_script_setup_true_lang-C9NfYF1g.js";import{u as K}from"./c-useHouseHoldHelper-DG3wvPoN.js";import{_ as X}from"./c-EditButton.vue_vue_type_script_setup_true_lang-BjSzHzH2.js";import{_ as G}from"./c-TextField.vue_vue_type_script_setup_true_lang-Cl9vlvKW.js";import{_ as k}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-C7IF3Nm5.js";var J=`
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
`,Q={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Y=U.extend({name:"progressspinner",style:J,classes:Q}),Z={name:"BaseProgressSpinner",extends:j,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Y,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},ee={name:"ProgressSpinner",extends:Z,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},ne=["fill","stroke-width"];function se(n,l,d,o,i,p){return a(),v("div",h({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(a(),v("svg",h({class:n.cx("spin"),viewBox:"25 25 50 50",style:p.svgStyle},n.ptm("spin")),[w("circle",h({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,ne)],16))],16)}ee.render=se;const oe=_({__name:"NumberField",props:L({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const l=n,d=I(n,"modelValue"),o=V("");function i(){d.value=parseFloat(o.value)||0}return B(d,p=>{o.value=p.toString()},{immediate:!0}),(p,f)=>(a(),S(G,h(l,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=u=>o.value=u),"input-props":{...l.inputProps,type:"number"},onBlur:i}),null,16,["modelValue","input-props"]))}}),te={class:"flex justify-end"},re={class:"flex flex-col gap-3 my-5"},ce=_({__name:"PersonalSettings",setup(n){const l=W(),d=A(),o=R(),{personalSettings:i,isFetchLoading:p,isMutationLoading:f}=P(o),{firebaseUser:u,isOwner:C}=P(d),{houseHoldOptions:O,activeHouseHoldId:T}=K(),m=V(!1),g=V(null),t=M(b());function b(){return i.value?i.value.clone():F.create(u.value.uid)}async function D(){const y=u.value?.uid;if(!y)return;const e=t.clone();o.setActiveHouseHoldId(g.value),await o.updatePersonalSettings(y,e),m.value=!1}return B(m,()=>{Object.assign(t,b()),g.value=T.value},{immediate:!0}),N(()=>{!i.value&&u.value&&o.fetchPersonalSettings(u.value.uid)}),(y,e)=>(a(),v(x,null,[w("div",te,[c(X,{isLoading:r(p),onClick:e[0]||(e[0]=s=>m.value=!0)},null,8,["isLoading"])]),c(E,{isOpen:m.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:r(f),onConfirm:D,onCancel:e[6]||(e[6]=s=>m.value=!1)},{default:q(()=>[w("div",re,[r(C)?(a(),S(z,{key:0,class:"w-full md:w-1/2 place-self-center",name:"activeHouseHoldId",label:"Actief huishouden",options:r(O),modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=s=>g.value=s)},null,8,["options","modelValue"])):$("",!0),r(l).name===r(H).TASKS?(a(),S(k,{key:1,class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:t.tasks.showDifficulty,"onUpdate:modelValue":e[2]||(e[2]=s=>t.tasks.showDifficulty=s)},null,8,["modelValue"])):r(l).name===r(H).PRODUCTS?(a(),v(x,{key:2},[c(oe,{class:"w-full md:w-1/2 place-self-center",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:t.products.amountOfDaysToShow,"onUpdate:modelValue":e[3]||(e[3]=s=>t.products.amountOfDaysToShow=s)},null,8,["modelValue"]),c(k,{class:"w-full md:w-1/2 place-self-center",name:"products.showPromotions",label:"Toon promoties",modelValue:t.products.showPromotions,"onUpdate:modelValue":e[4]||(e[4]=s=>t.products.showPromotions=s)},null,8,["modelValue"]),c(k,{class:"w-full md:w-1/2 place-self-center",name:"products.showCategory",label:"Toon categorieën",modelValue:t.products.showCategory,"onUpdate:modelValue":e[5]||(e[5]=s=>t.products.showCategory=s)},null,8,["modelValue"])],64)):$("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}});export{oe as _,ce as a,ee as s};
