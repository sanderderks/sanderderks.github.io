import{d as D,p as _,c0 as j,s as V,q as B,cd as I,V as U,k as A,b as a,c as p,F as k,e as w,h as r,f as t,w as R,g as L,B as b,R as C,y as N,H,ao as F,ap as M,aq as v}from"../bundle.js";import{_ as q}from"./c-Dialog.vue_vue_type_script_setup_true_lang-D0e9Dsk4.js";import{_ as W}from"./c-SelectField.vue_vue_type_script_setup_true_lang-BPl9hr0V.js";import{u as z,_ as E}from"./c-NumberField.vue_vue_type_script_setup_true_lang-KiXqa-6I.js";import{_ as K}from"./c-EditButton.vue_vue_type_script_setup_true_lang-BJLI51Ww.js";import{_ as m}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DTiAk9xz.js";const G={class:"flex justify-end"},J={class:"flex flex-col gap-3 my-5"},pe=D({__name:"PersonalSettings",setup(o){const f=N(),y=_(),l=j(),{personalSettings:u,isFetchLoading:g,isMutationLoading:P}=V(l),{firebaseUser:d,isOwner:$}=V(y),{houseHoldOptions:x,activeHouseHoldId:O}=z(),i=H(!1),c=H(null),n=B(S());function S(){return u.value?u.value.clone():I.create(d.value.uid)}async function T(){const h=d.value?.uid;if(!h)return;const e=n.clone();l.setActiveHouseHoldId(c.value),await l.updatePersonalSettings(h,e),i.value=!1}return U(i,()=>{Object.assign(n,S()),c.value=O.value},{immediate:!0}),A(()=>{!u.value&&d.value&&l.fetchPersonalSettings(d.value.uid)}),(h,e)=>(a(),p(k,null,[w("div",G,[r(K,{isLoading:t(g),onClick:e[0]||(e[0]=s=>i.value=!0)},null,8,["isLoading"])]),r(q,{isOpen:i.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:t(P),onConfirm:T,onCancel:e[7]||(e[7]=s=>i.value=!1)},{default:R(()=>[w("div",J,[t($)?(a(),L(W,{key:0,class:"w-full md:w-1/2 place-self-center",name:"activeHouseHoldId",label:"Actief huishouden",options:t(x),modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=s=>c.value=s)},null,8,["options","modelValue"])):b("",!0),t(f).name===t(C).TASKS?(a(),p(k,{key:1},[r(m,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:n.tasks.showDifficulty,"onUpdate:modelValue":e[2]||(e[2]=s=>n.tasks.showDifficulty=s)},null,8,["modelValue"]),r(m,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showCategories",label:"Toon categorieën",modelValue:n.tasks.showCategories,"onUpdate:modelValue":e[3]||(e[3]=s=>n.tasks.showCategories=s)},null,8,["modelValue"])],64)):t(f).name===t(C).PRODUCTS?(a(),p(k,{key:2},[r(E,{class:"w-full md:w-1/2 place-self-center",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:n.products.amountOfDaysToShow,"onUpdate:modelValue":e[4]||(e[4]=s=>n.products.amountOfDaysToShow=s)},null,8,["modelValue"]),r(m,{class:"w-full md:w-1/2 place-self-center",name:"products.showPromotions",label:"Toon promoties",modelValue:n.products.showPromotions,"onUpdate:modelValue":e[5]||(e[5]=s=>n.products.showPromotions=s)},null,8,["modelValue"]),r(m,{class:"w-full md:w-1/2 place-self-center",name:"products.showCategory",label:"Toon categorieën",modelValue:n.products.showCategory,"onUpdate:modelValue":e[6]||(e[6]=s=>n.products.showCategory=s)},null,8,["modelValue"])],64)):b("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}});var Q=`
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
`,X={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Y=F.extend({name:"progressspinner",style:Q,classes:X}),Z={name:"BaseProgressSpinner",extends:M,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Y,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},ee={name:"ProgressSpinner",extends:Z,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},se=["fill","stroke-width"];function ne(o,f,y,l,u,g){return a(),p("div",v({class:o.cx("root"),role:"progressbar"},o.ptmi("root")),[(a(),p("svg",v({class:o.cx("spin"),viewBox:"25 25 50 50",style:g.svgStyle},o.ptm("spin")),[w("circle",v({class:o.cx("circle"),cx:"50",cy:"50",r:"20",fill:o.fill,"stroke-width":o.strokeWidth,strokeMiterlimit:"10"},o.ptm("circle")),null,16,se)],16))],16)}ee.render=ne;export{pe as _,ee as s};
