import{d as j,p as B,c0 as I,s as V,q as A,cd as L,V as R,b as a,c as i,F as h,e as v,h as t,f as r,w as _,g as N,B as b,R as T,y as q,H as C,ao as F,ap as M,aq as k}from"../bundle.js";import{_ as W}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Ddvzblqv.js";import{_ as H}from"./c-SelectField.vue_vue_type_script_setup_true_lang-BPl9hr0V.js";import{u as z,_ as E}from"./c-NumberField.vue_vue_type_script_setup_true_lang-KiXqa-6I.js";import{_ as K}from"./c-EditButton.vue_vue_type_script_setup_true_lang-BJLI51Ww.js";import{_ as d}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DTiAk9xz.js";const G={class:"flex justify-end"},J={class:"flex flex-col gap-3 my-5"},pe=j({__name:"PersonalSettings",setup(o){const m=q(),w=B(),p=I(),{personalSettings:c,isFetchLoading:f,isMutationLoading:P}=V(p),{firebaseUser:y,isOwner:$}=V(w),{houseHoldOptions:x,activeHouseHoldId:O}=z(),l=C(!1),u=C(null),D=[{value:"dark",label:"Donker"},{value:"light",label:"Licht"}],n=A(S());function S(){return c.value?c.value.clone():L.create(y.value.uid)}async function U(){const g=y.value?.uid;if(!g)return;const e=n.clone();p.setActiveHouseHoldId(u.value),await p.updatePersonalSettings(g,e),l.value=!1}return R(l,()=>{Object.assign(n,S()),u.value=O.value},{immediate:!0}),(g,e)=>(a(),i(h,null,[v("div",G,[t(K,{isLoading:r(f),onClick:e[0]||(e[0]=s=>l.value=!0)},null,8,["isLoading"])]),t(W,{isOpen:l.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:r(P),onConfirm:U,onCancel:e[8]||(e[8]=s=>l.value=!1)},{default:_(()=>[v("div",J,[t(H,{class:"w-full md:w-1/2 place-self-center",name:"primeVueTheme",label:"PrimeVue thema",options:D,required:"",modelValue:n.primeVueTheme,"onUpdate:modelValue":e[1]||(e[1]=s=>n.primeVueTheme=s)},null,8,["modelValue"]),r($)?(a(),N(H,{key:0,class:"w-full md:w-1/2 place-self-center",name:"activeHouseHoldId",label:"Actief huishouden",options:r(x),modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=s=>u.value=s)},null,8,["options","modelValue"])):b("",!0),r(m).name===r(T).TASKS?(a(),i(h,{key:1},[t(d,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:n.tasks.showDifficulty,"onUpdate:modelValue":e[3]||(e[3]=s=>n.tasks.showDifficulty=s)},null,8,["modelValue"]),t(d,{class:"w-full md:w-1/2 place-self-center",name:"tasks.showCategories",label:"Toon categorieën",modelValue:n.tasks.showCategories,"onUpdate:modelValue":e[4]||(e[4]=s=>n.tasks.showCategories=s)},null,8,["modelValue"])],64)):r(m).name===r(T).PRODUCTS?(a(),i(h,{key:2},[t(E,{class:"w-full md:w-1/2 place-self-center",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:n.products.amountOfDaysToShow,"onUpdate:modelValue":e[5]||(e[5]=s=>n.products.amountOfDaysToShow=s)},null,8,["modelValue"]),t(d,{class:"w-full md:w-1/2 place-self-center",name:"products.showPromotions",label:"Toon promoties",modelValue:n.products.showPromotions,"onUpdate:modelValue":e[6]||(e[6]=s=>n.products.showPromotions=s)},null,8,["modelValue"]),t(d,{class:"w-full md:w-1/2 place-self-center",name:"products.showCategory",label:"Toon categorieën",modelValue:n.products.showCategory,"onUpdate:modelValue":e[7]||(e[7]=s=>n.products.showCategory=s)},null,8,["modelValue"])],64)):b("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}});var Q=`
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
`,X={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Y=F.extend({name:"progressspinner",style:Q,classes:X}),Z={name:"BaseProgressSpinner",extends:M,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Y,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},ee={name:"ProgressSpinner",extends:Z,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},se=["fill","stroke-width"];function ne(o,m,w,p,c,f){return a(),i("div",k({class:o.cx("root"),role:"progressbar"},o.ptmi("root")),[(a(),i("svg",k({class:o.cx("spin"),viewBox:"25 25 50 50",style:f.svgStyle},o.ptm("spin")),[v("circle",k({class:o.cx("circle"),cx:"50",cy:"50",r:"20",fill:o.fill,"stroke-width":o.strokeWidth,strokeMiterlimit:"10"},o.ptm("circle")),null,16,se)],16))],16)}ee.render=ne;export{pe as _,ee as s};
