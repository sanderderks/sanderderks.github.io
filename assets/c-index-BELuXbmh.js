import{d as D,p as j,c6 as B,s as S,q as I,cd as A,V as R,k as U,b as r,c,F as V,e as k,h as l,f as t,w as L,g as b,B as H,R as P,y as N,H as $,ao as F,ap as M,aq as h}from"../bundle.js";import{_ as q}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Z7TeZ0Lr.js";import{_ as W}from"./c-SelectField.vue_vue_type_script_setup_true_lang-Cq9ZUqEL.js";import{u as z,_ as E}from"./c-NumberField.vue_vue_type_script_setup_true_lang-DEuFGS-I.js";import{_ as K}from"./c-EditButton.vue_vue_type_script_setup_true_lang-BptYfC_K.js";import{_ as v}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DTiAk9xz.js";const G={class:"flex justify-end"},J={class:"flex flex-col gap-3 my-5"},pe=D({__name:"PersonalSettings",setup(n){const m=N(),y=j(),a=B(),{personalSettings:p,isFetchLoading:f,isMutationLoading:x}=S(a),{firebaseUser:u,isOwner:C}=S(y),{houseHoldOptions:O,activeHouseHoldId:T}=z(),i=$(!1),d=$(null),o=I(w());function w(){return p.value?p.value.clone():A.create(u.value.uid)}async function _(){const g=u.value?.uid;if(!g)return;const e=o.clone();a.setActiveHouseHoldId(d.value),await a.updatePersonalSettings(g,e),i.value=!1}return R(i,()=>{Object.assign(o,w()),d.value=T.value},{immediate:!0}),U(()=>{!p.value&&u.value&&a.fetchPersonalSettings(u.value.uid)}),(g,e)=>(r(),c(V,null,[k("div",G,[l(K,{isLoading:t(f),onClick:e[0]||(e[0]=s=>i.value=!0)},null,8,["isLoading"])]),l(q,{isOpen:i.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:t(x),onConfirm:_,onCancel:e[6]||(e[6]=s=>i.value=!1)},{default:L(()=>[k("div",J,[t(C)?(r(),b(W,{key:0,class:"w-full md:w-1/2 place-self-center",name:"activeHouseHoldId",label:"Actief huishouden",options:t(O),modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=s=>d.value=s)},null,8,["options","modelValue"])):H("",!0),t(m).name===t(P).TASKS?(r(),b(v,{key:1,class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:o.tasks.showDifficulty,"onUpdate:modelValue":e[2]||(e[2]=s=>o.tasks.showDifficulty=s)},null,8,["modelValue"])):t(m).name===t(P).PRODUCTS?(r(),c(V,{key:2},[l(E,{class:"w-full md:w-1/2 place-self-center",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:o.products.amountOfDaysToShow,"onUpdate:modelValue":e[3]||(e[3]=s=>o.products.amountOfDaysToShow=s)},null,8,["modelValue"]),l(v,{class:"w-full md:w-1/2 place-self-center",name:"products.showPromotions",label:"Toon promoties",modelValue:o.products.showPromotions,"onUpdate:modelValue":e[4]||(e[4]=s=>o.products.showPromotions=s)},null,8,["modelValue"]),l(v,{class:"w-full md:w-1/2 place-self-center",name:"products.showCategory",label:"Toon categorieën",modelValue:o.products.showCategory,"onUpdate:modelValue":e[5]||(e[5]=s=>o.products.showCategory=s)},null,8,["modelValue"])],64)):H("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}});var Q=`
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
`,X={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Y=F.extend({name:"progressspinner",style:Q,classes:X}),Z={name:"BaseProgressSpinner",extends:M,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Y,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},ee={name:"ProgressSpinner",extends:Z,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},ne=["fill","stroke-width"];function se(n,m,y,a,p,f){return r(),c("div",h({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(r(),c("svg",h({class:n.cx("spin"),viewBox:"25 25 50 50",style:f.svgStyle},n.ptm("spin")),[k("circle",h({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,ne)],16))],16)}ee.render=se;export{pe as _,ee as s};
