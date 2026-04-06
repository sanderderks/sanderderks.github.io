import{an as j,ao as I,b as r,c,ap as v,e as y,d as _,W as L,U as C,g as w,X as A,E as V,p as R,c5 as M,s as $,q as F,cd as N,k as q,F as P,h as f,f as a,w as W,B as b,R as H,y as E,t as B}from"../bundle.js";import{_ as z}from"./c-Dialog.vue_vue_type_script_setup_true_lang-CswPTLgR.js";import{_ as K}from"./c-SelectField.vue_vue_type_script_setup_true_lang-C9NfYF1g.js";import{u as X}from"./c-useHouseHoldHelper-DG3wvPoN.js";import{_ as G}from"./c-EditButton.vue_vue_type_script_setup_true_lang-BjSzHzH2.js";import{_ as J}from"./c-TextField.vue_vue_type_script_setup_true_lang-Cl9vlvKW.js";import{_ as S}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-C7IF3Nm5.js";var Q=`
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
`,Y={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Z=j.extend({name:"progressspinner",style:Q,classes:Y}),ee={name:"BaseProgressSpinner",extends:I,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Z,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},ne={name:"ProgressSpinner",extends:ee,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},se=["fill","stroke-width"];function oe(e,l,i,o,p,u){return r(),c("div",v({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(r(),c("svg",v({class:e.cx("spin"),viewBox:"25 25 50 50",style:u.svgStyle},e.ptm("spin")),[y("circle",v({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,se)],16))],16)}ne.render=oe;const te=_({__name:"NumberField",props:A({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=e,i=L(e,"modelValue"),o=V("");function p(){i.value=parseFloat(o.value)||0}return C(i,u=>{o.value=u.toString()},{immediate:!0}),(u,g)=>(r(),w(J,v(l,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=d=>o.value=d),"input-props":{...l.inputProps,type:"number"},onBlur:p}),null,16,["modelValue","input-props"]))}}),re={class:"flex justify-end"},ae={class:"flex flex-col gap-3 my-5"},ve=_({__name:"PersonalSettings",setup(e){const l=E(),i=R(),o=M(),{personalSettings:p,isFetchLoading:u,isMutationLoading:g}=$(o),{firebaseUser:d,isOwner:O}=$(i),{houseHoldOptions:T,activeHouseHoldId:D}=X(),m=V(!1),h=V(null),t=F(x());function x(){return p.value?p.value.clone():N.create(d.value.uid)}async function U(){const k=d.value?.uid;if(!k)return;const n=t.clone();o.setActiveHouseHoldId(h.value),await o.updatePersonalSettings(k,n),m.value=!1}return C(m,()=>{Object.assign(t,x()),h.value=D.value},{immediate:!0}),q(()=>{!p.value&&d.value&&o.fetchPersonalSettings(d.value.uid)}),(k,n)=>(r(),c(P,null,[y("div",re,[f(G,{isLoading:a(u),onClick:n[0]||(n[0]=s=>m.value=!0)},null,8,["isLoading"])]),f(z,{isOpen:m.value,title:"Persoonlijke instellingen",description:"Nu kun je zelf bepalen hoe je het graag hebt.",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:a(g),onConfirm:U,onCancel:n[6]||(n[6]=s=>m.value=!1)},{default:W(()=>[y("div",ae,[a(O)?(r(),w(K,{key:0,class:"w-full md:w-1/2 place-self-center",name:"activeHouseHoldId",label:"Actief huishouden",options:a(T),modelValue:h.value,"onUpdate:modelValue":n[1]||(n[1]=s=>h.value=s)},null,8,["options","modelValue"])):b("",!0),a(l).name===a(H).TASKS?(r(),w(S,{key:1,class:"w-full md:w-1/2 place-self-center",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:t.tasks.showDifficulty,"onUpdate:modelValue":n[2]||(n[2]=s=>t.tasks.showDifficulty=s)},null,8,["modelValue"])):a(l).name===a(H).PRODUCTS?(r(),c(P,{key:2},[f(te,{class:"w-full md:w-1/2 place-self-center",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst:",modelValue:t.products.amountOfDaysToShow,"onUpdate:modelValue":n[3]||(n[3]=s=>t.products.amountOfDaysToShow=s)},null,8,["modelValue"]),f(S,{class:"w-full md:w-1/2 place-self-center",name:"products.showPromotions",label:"Toon promoties",modelValue:t.products.showPromotions,"onUpdate:modelValue":n[4]||(n[4]=s=>t.products.showPromotions=s)},null,8,["modelValue"]),f(S,{class:"w-full md:w-1/2 place-self-center",name:"products.showCategory",label:"Toon categorieën",modelValue:t.products.showCategory,"onUpdate:modelValue":n[5]||(n[5]=s=>t.products.showCategory=s)},null,8,["modelValue"])],64)):b("",!0)])]),_:1},8,["isOpen","confirmLoading"])],64))}}),le={class:"mt-3 mb-5 flex flex-col gap-3"},ie={class:"text-xl font-bold"},pe={key:0},ye=_({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(l,i)=>(r(),c("div",le,[y("h3",ie,B(e.title),1),e.description?(r(),c("p",pe,B(e.description),1)):b("",!0)]))}});export{te as _,ye as a,ve as b,ne as s};
