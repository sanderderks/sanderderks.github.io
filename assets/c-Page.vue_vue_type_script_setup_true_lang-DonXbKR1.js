import{d as B,c as u,n as S,e as r,t as H,b as l,bm as ee,s as L,i as y,u as te,q as X,h as p,f as a,R as O,w as I,cO as U,a3 as de,j as F,A as Le,E as Ve,bM as $e,U as Ae,Q as ne,g as C,am as _,V as Oe,D as j,ak as he,aE as Be,aF as ge,S as E,y as k,p as Ee,v as oe,b3 as A,k as De,cP as Ie,F as R,r as W,O as Pe,ap as Te,an as He,al as Re,as as Me,ar as q,at as Ue,aB as Ne,aD as ze,ag as Ge,aC as je,aJ as Fe,cQ as Ke,l as be,ad as Ye,a7 as Ze}from"../bundle.js";import{_ as We,F as qe,u as Qe,b as Je}from"./c-Dialog.vue_vue_type_script_setup_true_lang-tnesKXe5.js";import{_ as D,b as Z,s as Xe,c as ve}from"./c-index-vM0EO5P_.js";import{_ as et}from"./c-TextField.vue_vue_type_script_setup_true_lang-BnR6vUpn.js";const tt={class:"container mx-auto text-center"},nt="border-x-0 border-b-0 py-4",ot=B({__name:"Footer",setup(e){return(t,n)=>(l(),u("footer",{class:S(nt)},[r("div",tt,[r("p",null,"© "+H(new Date().getFullYear()+" Sander Derks. Alle rechten voorbehouden."),1)])]))}}),at=()=>{const e=ee(),{personalSettings:t}=L(e),n=y(()=>t.value?.primeVueTheme??"dark"),s=y(()=>n.value==="dark"),i=y(()=>n.value==="light");return{primeVueTheme:n,isDarkTheme:s,isLightTheme:i}},ue=""+new URL("../images/avatar-small.jpg",import.meta.url).href,lt={class:"flex justify-between max-sm:pt-10"},st={class:"hidden sm:block w-full sm:min-w-fit"},it=["alt"],rt={class:"w-fit sm:max-w-1/2"},dt={class:"text-title-primary"},ut={class:"text-title-secondary"},ct={class:"text-title-tertiary absolute sm:relative mt-3 sm:mt-2 flex flex-col md:flex-row flex-wrap gap-2"},pt={class:"sm:hidden min-w-fit mt-3"},mt=["alt"],ce="surface-panel-glass",pe=B({__name:"HeaderContent",setup(e){const t=te(),{routeLoading:n}=L(t);return(s,i)=>{const o=X("RouterLink");return l(),u("div",lt,[r("div",st,[p(o,{to:{name:a(O).HOME}},{default:I(()=>[r("img",{class:S(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":a(n)===a(O).HOME}]),src:ue,alt:a(U).name},null,10,it)]),_:1},8,["to"])]),r("div",rt,[r("h1",dt,H(a(U).name),1),r("h2",ut,H(a(U).service),1),r("div",ct,[p(a(de),{class:S(ce),icon:"pi pi-briefcase",label:a(U).role},null,8,["label"]),p(a(de),{class:S(ce),icon:"pi pi-map-marker",label:`${a(U).location.city}, ${a(U).location.country}`},null,8,["label"])])]),r("div",pt,[p(o,{to:{name:a(O).HOME}},{default:I(()=>[r("img",{class:S(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":a(n)===a(O).HOME}]),src:ue,alt:a(U).name},null,10,mt)]),_:1},8,["to"])])])}}}),ft=()=>{const e=F(),t=Le(),n=ee(),s=Ve(),{firebaseUser:i}=L(e),{houseHolds:o,activeHouseHold:f}=L(t),{activeHouseHoldId:m}=L(n),{publicUsers:g}=L(s),x=y(()=>g.value.reduce((c,b)=>(c[b.id]=b.displayName||b.id,c),{})),z=y(()=>[{value:null,label:"Geen huishouden"},...[...o.value].sort((c,b)=>c.name.localeCompare(b.name)).map(c=>({value:c.id,label:c.name}))]),P=y(()=>[...o.value].sort((c,b)=>c.name.localeCompare(b.name)).map(c=>({value:c.id,label:c.name}))),V=y(()=>f.value),$=y(()=>V.value?.id??P.value[0]?.value??$e),w=c=>c?o.value.find(b=>b.id===c)??null:null,G=c=>{const b=w(c);return b?b.getUserOptions(x.value):[]};return{houseHoldOptions:z,requiredHouseHoldOptions:P,activeHouseHoldId:m,currentUsersHouseHold:V,defaultHouseHoldId:$,getHouseHoldById:w,getHouseHoldUserOptions:G,getHouseHoldUserOptionsNullable:(c,b="Niemand")=>[{value:null,label:b},...G(c)],getDefaultUserId:c=>w(c)?.getDefaultUserId(i.value?.uid)??null,normalizeUserId:(c,b)=>w(c)?.normalizeUserId(b,i.value?.uid)??b??null,normalizeUserIds:(c,b)=>w(c)?.normalizeUserIds(b,i.value?.uid)??[...new Set(b??[])]}},ht=B({__name:"NumberField",props:Oe({id:{},name:{},label:{},placeholder:{},error:{},required:{type:Boolean},inputProps:{},labelProps:{},minLength:{},maxLength:{},minValue:{},maxValue:{},deleteButton:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,n=Ae(e,"modelValue"),s=j("");function i(){n.value=parseFloat(s.value)||0}return ne(n,o=>{s.value=o.toString()},{immediate:!0}),(o,f)=>(l(),C(et,_(t,{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=m=>s.value=m),"input-props":{...t.inputProps,type:"number"},onBlur:i}),null,16,["modelValue","input-props"]))}});var gt=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,bt={root:{position:"relative"}},vt={root:function(t){var n=t.instance,s=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":n.checked,"p-disabled":s.disabled,"p-invalid":n.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},wt=he.extend({name:"toggleswitch",style:gt,classes:vt,inlineStyles:bt}),yt={name:"BaseToggleSwitch",extends:Be,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:wt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},we={name:"ToggleSwitch",extends:yt,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var n=this.checked?this.falseValue:this.trueValue;this.writeValue(n,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var n,s;this.$emit("blur",t),(n=(s=this.formField).onBlur)===null||n===void 0||n.call(s,t)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return ge({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},kt=["data-p-checked","data-p-disabled","data-p"],St=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],xt=["data-p"],Ct=["data-p"];function _t(e,t,n,s,i,o){return l(),u("div",_({class:e.cx("root"),style:e.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":e.disabled,"data-p":o.dataP}),[r("input",_({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:o.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":o.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:t[1]||(t[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:t[2]||(t[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,St),r("div",_({class:e.cx("slider")},o.getPTOptions("slider"),{"data-p":o.dataP}),[r("div",_({class:e.cx("handle")},o.getPTOptions("handle"),{"data-p":o.dataP}),[E(e.$slots,"handle",{checked:o.checked})],16,Ct)],16,xt)],16,kt)}we.render=_t;const Lt=["for"],N=B({__name:"SwitchField",props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=y({get:()=>n.modelValue,set:f=>{n.disabled||o("update:modelValue",f)}}),i=y(()=>n.name+(n.id?`.${n.id}`:"")),o=t;return(f,m)=>(l(),u("div",null,[e.label?(l(),u("label",_({key:0,class:"block text-sm font-bold mb-2",for:i.value},e.labelProps),H(e.label),17,Lt)):k("",!0),r("div",{class:S(["p-input flex align-middle",{"cursor-pointer":!e.disabled}]),onClick:m[1]||(m[1]=Ee(g=>s.value=!s.value,["prevent"]))},[p(a(we),{inputId:i.value,ref:"input",modelValue:s.value,"onUpdate:modelValue":m[0]||(m[0]=g=>s.value=g),disabled:e.disabled,pt:{slider:{class:s.value?"bg-primary-500":void 0}}},null,8,["inputId","modelValue","disabled","pt"])],2)]))}}),Vt={key:0,class:"inline-flex"},$t={class:"my-5 flex flex-col gap-5"},At={class:"flex flex-col gap-3"},Ot={class:"surface-panel-soft flex flex-col gap-4 rounded-2xl p-4"},Bt={class:"flex flex-col gap-1"},Et={class:"text-base font-semibold text-title-secondary"},Dt={key:0,class:"text-sm text-title-tertiary"},It={key:0,class:"flex flex-col gap-3"},Pt={key:1,class:"flex flex-col gap-3"},Tt={key:2,class:"flex flex-col gap-4"},Ht={key:0,class:"flex flex-col gap-3"},Rt={key:1,class:"flex flex-col gap-3"},Mt={key:2,class:"flex flex-col gap-3"},Ut={key:3,class:"text-sm text-title-tertiary"},ye=B({__name:"PersonalSettings",props:{iconOnly:{type:Boolean,default:!1},buttonClass:{default:void 0}},setup(e){const t=e,n=oe(),s=F(),i=ee(),{personalSettings:o,isFetchLoading:f,isMutationLoading:m}=L(i),{firebaseUser:g,isOwner:x}=L(s),{houseHoldOptions:z,activeHouseHoldId:P}=ft(),V=j(!1),$=j(null),w=[{value:"dark",label:"Donker"},{value:"light",label:"Licht"}],G=[{value:.5,label:"0,5 seconde"},{value:.75,label:"0,75 seconde"},{value:1,label:"1 seconde"},{value:1.5,label:"1,5 seconde"},{value:2,label:"2 seconden"},{value:3,label:"3 seconden"},{value:4,label:"4 seconden"},{value:5,label:"5 seconden"}],ae=[{value:.25,label:"0,25 seconde"},{value:.5,label:"0,5 seconde"},{value:.75,label:"0,75 seconde"},{value:1,label:"1 seconde"},{value:1.5,label:"1,5 seconde"},{value:2,label:"2 seconden"},{value:3,label:"3 seconden"}],le={[O.TASKS]:"tasks",[O.PRODUCTS]:"products",[O.GAMES]:"games",[A.GAMES_YAHTZEE]:"games",[A.GAMES_YAHTZEE_RAINBOW]:"games",[A.GAMES_RAINWORMS]:"games",[A.GAMES_PATIENCE]:"games",[A.GAMES_HANGMAN]:"games"},M=y(()=>{const T=n.name?.toString();return T?le[T]:void 0}),K=y(()=>n.name?.toString()),c=y(()=>M.value==="games"),b=y(()=>[A.GAMES_YAHTZEE,A.GAMES_YAHTZEE_RAINBOW].includes(K.value)),se=y(()=>K.value===A.GAMES_RAINWORMS),ie=y(()=>K.value===A.GAMES_PATIENCE),Se=y(()=>{switch(M.value){case"tasks":return"Instellingen voor Taken:";case"products":return"Instellingen voor Boodschappen:";case"games":switch(K.value){case A.GAMES_YAHTZEE:return"Instellingen voor Yahtzee:";case A.GAMES_YAHTZEE_RAINBOW:return"Instellingen voor Regenboog Yahtzee:";case A.GAMES_RAINWORMS:return"Instellingen voor Regenwormen:";case A.GAMES_PATIENCE:return"Instellingen voor Patience:";case A.GAMES_HANGMAN:return"Instellingen voor Galgje:";default:return"Instellingen voor alle Spellen:"}default:return}}),xe=y(()=>"surface-panel-glass shadow-md md:shadow-none"),v=De(re());function re(){return o.value?o.value.clone():Ie.create(g.value?.uid??"")}function Ce(){Object.assign(v,re()),$.value=P.value}async function _e(){const T=g.value?.uid;if(!T)return;const d=v.clone();i.setActiveHouseHoldId($.value),await i.updatePersonalSettings(T,d),V.value=!1}return ne(V,T=>{T&&Ce()},{immediate:!0}),(T,d)=>(l(),u(R,null,[a(g)?(l(),u("div",Vt,[p(D,{class:S([xe.value,t.buttonClass]),icon:"pi pi-cog",label:t.iconOnly?void 0:"Instellingen",rounded:"","aria-label":"Persoonlijke instellingen openen",loading:a(f),severity:"secondary",onClick:d[0]||(d[0]=h=>V.value=!0)},null,8,["class","label","loading"])])):k("",!0),p(We,{isOpen:V.value,title:"Persoonlijke instellingen",description:"",cancelText:"Annuleren",confirmText:"Opslaan",confirmLoading:a(m),onConfirm:_e,onCancel:d[13]||(d[13]=h=>V.value=!1)},{default:I(()=>[r("div",$t,[r("div",At,[p(Z,{class:"w-full",name:"primeVueTheme",label:"Thema",options:w,required:"",modelValue:v.primeVueTheme,"onUpdate:modelValue":d[1]||(d[1]=h=>v.primeVueTheme=h)},null,8,["modelValue"]),a(x)?(l(),C(Z,{key:0,class:"w-full",name:"activeHouseHoldId",label:"Actief huishouden",options:a(z),modelValue:$.value,"onUpdate:modelValue":d[2]||(d[2]=h=>$.value=h)},null,8,["options","modelValue"])):k("",!0)]),r("div",Ot,[r("div",Bt,[r("div",Et,H(Se.value??"Pagina-instellingen"),1),M.value?k("",!0):(l(),u("p",Dt," Geen "))]),M.value==="tasks"?(l(),u("div",It,[p(N,{class:"w-full",name:"tasks.showDifficulty",label:"Toon moeilijkheidsgraad",modelValue:v.tasks.showDifficulty,"onUpdate:modelValue":d[3]||(d[3]=h=>v.tasks.showDifficulty=h)},null,8,["modelValue"]),p(N,{class:"w-full",name:"tasks.showCategories",label:"Toon categorieën",modelValue:v.tasks.showCategories,"onUpdate:modelValue":d[4]||(d[4]=h=>v.tasks.showCategories=h)},null,8,["modelValue"])])):M.value==="products"?(l(),u("div",Pt,[p(ht,{class:"w-full",name:"products.amountOfDaysToShow",label:"Aantal dagen om te tonen in je boodschappenlijst",modelValue:v.products.amountOfDaysToShow,"onUpdate:modelValue":d[5]||(d[5]=h=>v.products.amountOfDaysToShow=h)},null,8,["modelValue"]),p(N,{class:"w-full",name:"products.showPromotions",label:"Toon promoties",modelValue:v.products.showPromotions,"onUpdate:modelValue":d[6]||(d[6]=h=>v.products.showPromotions=h)},null,8,["modelValue"]),p(N,{class:"w-full",name:"products.showCategory",label:"Toon categorieën",modelValue:v.products.showCategory,"onUpdate:modelValue":d[7]||(d[7]=h=>v.products.showCategory=h)},null,8,["modelValue"]),p(N,{class:"w-full",name:"products.showSubcategory",label:"Toon subcategorieën",modelValue:v.products.showSubcategory,"onUpdate:modelValue":d[8]||(d[8]=h=>v.products.showSubcategory=h)},null,8,["modelValue"])])):M.value==="games"?(l(),u("div",Tt,[c.value||b.value?(l(),u("div",Ht,[c.value?(l(),C(N,{key:0,class:"w-full",name:"games.useAudio",label:"Geluid",modelValue:v.games.useAudio,"onUpdate:modelValue":d[9]||(d[9]=h=>v.games.useAudio=h)},null,8,["modelValue"])):k("",!0),b.value?(l(),C(Z,{key:1,class:"w-full",name:"games.diceRollSpeed",label:"Snelheid van dobbelsteenworp",options:G,modelValue:v.games.diceRollSpeed,"onUpdate:modelValue":d[10]||(d[10]=h=>v.games.diceRollSpeed=h)},null,8,["modelValue"])):k("",!0)])):k("",!0),se.value?(l(),u("div",Rt,[d[14]||(d[14]=r("div",{class:"text-sm font-semibold text-title-tertiary"},"Regenwormen",-1)),p(Z,{class:"w-full",name:"games.rainworms.robotSpeed",label:"Snelheid van Regenwormen-robot",options:ae,modelValue:v.games.rainworms.robotSpeed,"onUpdate:modelValue":d[11]||(d[11]=h=>v.games.rainworms.robotSpeed=h)},null,8,["modelValue"])])):k("",!0),ie.value?(l(),u("div",Mt,[d[15]||(d[15]=r("div",{class:"text-sm font-semibold text-title-tertiary"},"Patience",-1)),p(N,{class:"w-full",name:"games.patience.doAutocomplete",label:"Patience automatisch aanvullen",modelValue:v.games.patience.doAutocomplete,"onUpdate:modelValue":d[12]||(d[12]=h=>v.games.patience.doAutocomplete=h)},null,8,["modelValue"])])):k("",!0),!c.value&&!b.value&&!se.value&&!ie.value?(l(),u("p",Ut," Voor deze spelpagina zijn er op dit moment geen extra instellingen. ")):k("",!0)])):k("",!0)])])]),_:1},8,["isOpen","confirmLoading"])],64))}}),Nt={key:0,class:"hidden lg:block"},zt={class:"grid grid-cols-2 gap-2"},Q="!w-full !justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200",Gt=B({__name:"NavigationMenuDesktop",setup(e){const t=F(),n=te(),{isLoggedIn:s,isLogoutLoading:i}=L(t),{visibleMenuItems:o,routeLoading:f}=L(n);return(m,g)=>a(o).length?(l(),u("div",Nt,[r("div",zt,[(l(!0),u(R,null,W(a(o),x=>(l(),C(D,{key:x.id,class:S(Q),outlined:"",href:x.url,route:x.route,loading:x.loading||a(f)===x.route,label:x.name},null,8,["href","route","loading","label"]))),128)),a(s)?(l(),C(D,{key:0,class:S([Q,"!rounded-full"]),severity:"danger",outlined:"",loading:a(i),label:"Uitloggen",onClick:a(t).logout},null,8,["class","loading","onClick"])):(l(),C(D,{key:1,class:S([Q,"!rounded-full"]),route:a(O).LOGIN,loading:a(f)===a(O).LOGIN,label:"Inloggen"},null,8,["class","route","loading"]))])])):k("",!0)}}),jt={class:"hidden lg:flex items-center gap-4 mb-4"},Ft={class:"hidden lg:block flex-1 space-y-2"},Kt={class:"hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg"},Yt={class:"font-semibold text-base first:font-bold first:text-lg"},Zt={key:0,class:"shrink-0 flex items-center gap-2"},Wt="absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 rounded-b-secondary surface-panel-glass backdrop-blur-sm shadow-none",qt=B({__name:"NavigationCardDesktop",setup(e){const t=F(),n=Pe(),{isLoggedIn:s}=L(t),{currentUser:i}=L(n);return(o,f)=>(l(),C(a(Xe),{class:S(Wt)},{content:I(()=>[r("div",jt,[r("div",Ft,[a(i)?(l(!0),u(R,{key:0},W([`Welkom terug, ${a(i).firstName+(a(i).lastName?" "+a(i).lastName:"")}`,"op mijn portfolio- en blogwebsite!"],m=>(l(),u("p",Kt,H(m),1))),256)):(l(),u(R,{key:1},W(["Welkom op mijn portfolio- en blogwebsite!"],m=>r("p",Yt,H(m),1)),64))]),a(s)?(l(),u("div",Zt,[p(ye,{"icon-only":"","button-class":"shrink-0 !p-6"}),p(D,{class:"shrink-0 !p-6",route:a(O).DASHBOARD,rounded:"",outlined:"","aria-label":"Ga naar dashboard"},{default:I(()=>[...f[0]||(f[0]=[r("i",{class:"pi pi-user scale-150"},null,-1)])]),_:1},8,["route"])])):k("",!0)]),p(Gt)]),_:1}))}});var Qt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,Jt={mask:function(t){var n=t.position,s=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center",pointerEvents:s?"auto":"none"}},root:{pointerEvents:"auto"}},Xt={mask:function(t){var n=t.instance,s=t.props,i=["left","right","top","bottom"],o=i.find(function(f){return f===s.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":s.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen},o?"p-drawer-".concat(o):""]},root:function(t){var n=t.instance;return["p-drawer p-component",{"p-drawer-full":n.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},en=he.extend({name:"drawer",style:Qt,classes:Xt,inlineStyles:Jt}),tn={name:"BaseDrawer",extends:Re,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:en,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function J(e,t,n){return(t=nn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nn(e){var t=on(e,"string");return Y(t)=="symbol"?t:t+""}function on(e,t){if(Y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(Y(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ke={name:"Drawer",extends:tn,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&q.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&q.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Ue(this.mask,"p-overlay-mask-leave-active"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&q.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(i){return i&&i.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.$slots.footer&&t(this.footerContainer),n||(n=this.closeButton))),n&&Me(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&Je()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Qe()},onKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return ge(J(J(J({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:qe},components:{Button:ve,Portal:He,TimesIcon:Te}},an=["data-p"],ln=["role","aria-modal","data-p"];function sn(e,t,n,s,i,o){var f=X("Button"),m=X("Portal"),g=Ne("focustrap");return l(),C(m,null,{default:I(function(){return[i.containerVisible?(l(),u("div",_({key:0,ref:o.maskRef,onMousedown:t[0]||(t[0]=function(){return o.onMaskClick&&o.onMaskClick.apply(o,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":o.dataP},e.ptm("mask")),[p(ze,_({name:"p-drawer",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},e.ptm("transition")),{default:I(function(){return[e.visible?Ge((l(),u("div",_({key:0,ref:o.containerRef,class:e.cx("root"),style:e.sx("root"),role:e.modal?"dialog":"complementary","aria-modal":e.modal?!0:void 0,"data-p":o.dataP},e.ptmi("root")),[e.$slots.container?E(e.$slots,"container",{key:0,closeCallback:o.hide}):(l(),u(R,{key:1},[r("div",_({ref:o.headerContainerRef,class:e.cx("header")},e.ptm("header")),[E(e.$slots,"header",{class:S(e.cx("title"))},function(){return[e.header?(l(),u("div",_({key:0,class:e.cx("title")},e.ptm("title")),H(e.header),17)):k("",!0)]}),e.showCloseIcon?E(e.$slots,"closebutton",{key:0,closeCallback:o.hide},function(){return[p(f,_({ref:o.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":o.closeAriaLabel,unstyled:e.unstyled,onClick:o.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:I(function(x){return[E(e.$slots,"closeicon",{},function(){return[(l(),C(je(e.closeIcon?"span":"TimesIcon"),_({class:[e.closeIcon,x.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):k("",!0)],16),r("div",_({ref:o.contentRef,class:e.cx("content")},e.ptm("content")),[E(e.$slots,"default")],16),e.$slots.footer?(l(),u("div",_({key:0,ref:o.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[E(e.$slots,"footer")],16)):k("",!0)],64))],16,ln)),[[g]]):k("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,an)):k("",!0)]}),_:3})}ke.render=sn;const rn={class:"flex flex-col gap-2 pb-4"},me="!justify-center !rounded-xl !px-3 !py-2 text-sm font-medium shadow-none transition-all duration-200",dn="lg:hidden !w-[min(26rem,85vw)] surface-panel-glass",un="surface-panel-active ring-1 ring-[var(--p-primary-color)] font-semibold",fe="surface-panel-glass",cn=B({__name:"NavigationDropDownMobile",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(e){const t=e,n=F(),s=te(),i=oe(),{isLoggedIn:o}=L(n),{visibleMenuItems:f,routeLoading:m}=L(s),{logout:g}=n,x={borderColor:"var(--p-primary-color)",color:"var(--app-text-primary)"},z=y({get:()=>t.isOpen,set:V=>{V!==t.isOpen&&t.toggle()}}),P=V=>{if(!V)return!1;const $=Ke.find(G=>G.name===V);if(!$)return!1;const w=$.path.split("/:")[0];return w==="/"?i.fullPath==="/":i.fullPath.startsWith(w)};return(V,$)=>(l(),C(a(ke),{visible:z.value,"onUpdate:visible":$[1]||($[1]=w=>z.value=w),position:"right",class:S(dn),"show-close-icon":!0},{default:I(()=>[r("div",rn,[(l(!0),u(R,null,W(a(f),w=>(l(),C(D,{key:w.id,class:S(["w-full",me,P(w.route)?un:fe]),severity:"secondary",outlined:!P(w.route),style:Fe(P(w.route)?x:void 0),fluid:"",href:w.url,route:w.route,loading:w.loading||a(m)===w.route,label:w.name,onClick:e.toggle},null,8,["class","outlined","style","href","route","loading","label","onClick"]))),128)),a(o)?(l(),u(R,{key:0},[p(D,{class:S(["w-full",me,fe]),severity:"secondary",outlined:"",fluid:"",route:a(O).DASHBOARD,loading:a(m)===a(O).DASHBOARD,label:"Dashboard",onClick:e.toggle},null,8,["class","route","loading","onClick"]),p(D,{class:"w-full !rounded-xl !px-3 !py-2 text-sm font-medium",fluid:"",severity:"danger",outlined:"",label:"Uitloggen",onClick:$[0]||($[0]=w=>{a(g)(),e.toggle()})})],64)):(l(),C(D,{key:1,class:"w-full !rounded-xl !px-3 !py-2 text-sm font-medium",fluid:"",route:a(O).LOGIN,loading:a(m)===a(O).LOGIN,label:"Inloggen",onClick:e.toggle},null,8,["route","loading","onClick"]))])]),_:1},8,["visible"]))}}),pn={class:"flex items-center gap-2"},mn=B({__name:"NavigationMenuMobile",setup(e){const t=F(),{isLoggedIn:n}=L(t),s=j(!1),i=j(!0);let o=window.scrollY;const f=()=>{s.value=!s.value};function m(){const g=window.scrollY;g>o+10?i.value=!1:g<o-10&&(i.value=!0),o=g}return be(()=>{window.addEventListener("scroll",m)}),Ye(()=>{window.removeEventListener("scroll",m)}),(g,x)=>(l(),u(R,null,[r("div",{class:S(["fixed z-10 top-5 right-0 w-full flex justify-end px-5 sm:px-10",["transition-transform duration-300",i.value?"translate-y-0 delay-0":"-translate-y-[200%] delay-150"]])},[r("div",pn,[a(n)?(l(),C(ye,{key:0,"icon-only":""})):k("",!0),p(a(ve),{class:"surface-panel-glass",icon:"pi pi-bars",label:"Menu",outlined:"",rounded:"",severity:"secondary",onClick:f})])],2),p(cn,{"is-open":s.value,toggle:f},null,8,["is-open"])],64))}}),fn={class:"sm:flex sm:items-start sm:justify-between mb-20"},hn={class:"hidden lg:flex justify-end"},gn={class:"lg:hidden w-full sm:w-1/3"},bn=B({__name:"Header",setup(e){return(t,n)=>(l(),u("div",fn,[p(pe,{class:"hidden sm:block"}),r("div",hn,[p(qt)]),r("div",gn,[p(mn)]),p(pe,{class:"sm:hidden"})]))}}),Sn=B({__name:"Page",props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(e){const t=e,n=oe(),{isDarkTheme:s}=at(),i=j(),o=y(()=>s.value?"bg-gradient-to-b from-primary-950 via-primary-900 to-slate-950":"bg-gradient-to-b from-primary-50 via-primary-100 to-slate-50"),f=y(()=>s.value?"surface-panel-soft":"surface-panel"),m=()=>{t.scrollToContent&&Ze(i.value)};return be(()=>{m()}),ne(()=>n.fullPath,()=>{m()}),(g,x)=>(l(),u("div",{class:S(["min-h-screen flex flex-col",o.value])},[r("div",{class:S(["container py-5 rounded-b-secondary flex-1",f.value])},[r("header",null,[g.$slots.header?E(g.$slots,"header",{key:0}):(l(),C(bn,{key:1}))]),r("main",null,[r("div",{ref_key:"content",ref:i},[E(g.$slots,"content")],512)])],2),r("footer",null,[g.$slots.footer?E(g.$slots,"footer",{key:0}):(l(),C(ot,{key:1}))])],2))}});export{Sn as _,ht as a,ft as b,N as c,at as u};
