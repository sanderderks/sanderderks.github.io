import{_ as oe}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_ as $}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";import{B as we,_ as De,x as Se,l as s,m as O,p as D,y as W,e as J,r as q,o as fe,q as v,k as a,c as m,au as F,h as me,A as _e,s as V,H as N,u as xe,f as ke,av as Oe,g as Ce,aw as Ae,D as B,w as Y,n as T,R,t as c,C as G,ax as ce,ay as Pe,az as Te,aA as Ee,O as Le,aB as Z,G as de}from"../bundle.js";import{u as Me,_ as $e}from"./c-Countdown.vue_vue_type_script_setup_true_lang-DSMslq4c.js";import{a as Be}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DZAGepnF.js";import{_ as Ye}from"./c-Page.vue_vue_type_script_setup_true_lang-GfuWZhDu.js";import{u as Re}from"./c-useCatCalc-6gobbMX9.js";import{_ as Ve}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-DQUnsrDB.js";import{_ as Ne}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-DateField-DIkLlrgD.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-Be1mpsKU.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-BcDK9ofr.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-DP8PD6e8.js";import"./c-accordiontab.esm-fhxUpLlW.js";import"./c-vuedraggable.umd-rmh2Hygz.js";var Fe={root:{position:"relative"}},Ie={root:"p-chart"},He=we.extend({name:"chart",inlineStyles:Fe,classes:Ie}),je={name:"BaseChart",extends:Se,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:He,provide:function(){return{$parentInstance:this}}},ge={name:"Chart",extends:je,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;De(()=>import("./c-auto-U_pncEX3.js"),__vite__mapDeps([]),import.meta.url).then(function(r){e.chart&&(e.chart.destroy(),e.chart=null),r&&r.default&&(e.chart=new r.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var r=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),u=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);r&&r[0]&&u&&this.$emit("select",{originalEvent:e,element:r[0],dataset:u})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function pe(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);e&&(u=u.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,u)}return r}function ve(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?pe(Object(r),!0).forEach(function(u){ze(t,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(r,u))})}return t}function ze(t,e,r){return e=Ge(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ge(t){var e=We(t,"string");return I(e)=="symbol"?e:String(e)}function We(t,e){if(I(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var u=r.call(t,e||"default");if(I(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var qe=["width","height"];function Je(t,e,r,u,n,b){return s(),O("div",W({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[D("canvas",W({ref:"canvas",width:t.width,height:t.height,onClick:e[0]||(e[0]=function(w){return b.onCanvasClick(w)})},ve(ve({},t.canvasProps),t.ptm("canvas"))),null,16,qe)],16)}ge.render=Je;const Ue=J({__name:"Chart",props:{headers:{},datasets:{}},setup(t){const e=q(),r=()=>{const u=getComputedStyle(document.documentElement),n="white",b="white",w=u.getPropertyValue("--p-content-border-color");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:b},grid:{color:w}},y:{type:"linear",display:!0,position:"left",beginAtZero:!0,ticks:{color:b},grid:{color:w}},y1:{type:"linear",display:!1,position:"right",ticks:{color:b},grid:{drawOnChartArea:!1,color:w}}}}};return fe(()=>{e.value=r()}),(u,n)=>(s(),v(a(ge),{type:"line",data:{labels:u.headers,datasets:u.datasets},options:e.value,class:"h-[30rem]"},null,8,["data","options"]))}});var E=(t=>(t[t.MONTHS=0]="MONTHS",t[t.YEARS_HALF=1]="YEARS_HALF",t[t.YEARS=2]="YEARS",t))(E||{});const L={0:{amount:12,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-L[0].amount+1,1),e},calculateStartDate:(t,e)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(t.getMonth()+1,0),e},getLabel:t=>Q[t.getMonth()]},1:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-6*L[1].amount+1,1),e},calculateStartDate:(t,e)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e*6),r},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()+6,0),e},getLabel:(t,e)=>{const r=Q[t.getMonth()].substring(0,3),u=Q[e.getMonth()].substring(0,3);return`${r}-${u} ${e.getFullYear()}`}},2:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear()-L[2].amount+1,0,1),e},calculateStartDate:(t,e)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e,0,1),r},calculateEndDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear(),12,0),e},getLabel:t=>`${t.getFullYear()}`}},Q=["January","February","March","April","May","June","July","August","September","October","November","December"],Ke=(t,e)=>{const r=m(()=>F(t)),u=m(()=>F(e)),n=m(()=>{const g=new Date;return L[u.value].getStartDate(g).getTime()}),b=m(()=>{const g=n.value;return r.value.filter(o=>o.date.getTime()>=g)}),w=m(()=>{const g=S=>{const l=L[u.value].calculateStartDate(new Date(n.value),S),_=L[u.value].calculateEndDate(l);return[l.getTime(),_.getTime()]},o=(S,l)=>b.value.some(_=>_.date.getTime()>=S&&_.date.getTime()<l),f=[];let h=!1;for(let S=0;S<L[u.value].amount;S++){const[l,_]=g(S);(h||o(l,_))&&(h=!0,f.push({label:L[u.value].getLabel(new Date(l),new Date(_)),startTime:l,endTime:_}))}return f}),A=m(()=>w.value.map(g=>g.label)),d=m(()=>{const g=[];return w.value.forEach(o=>{const f=b.value.filter(h=>{const S=h.date.getTime();return S>=o.startTime&&S<o.endTime});f.length?g.push({x:o.label,y:f.reduce((h,S)=>h+S.value,0)/f.length}):g.push({x:o.label,y:null})}),g});return{headers:A,filteredData:d}},X=t=>{const e=me(),r=_e(),{isOwner:u,firebaseUser:n}=V(e),{publicUsers:b}=V(r),w=1e3*60*60*24*365.25,A=q(E.MONTHS),d=m(()=>F(t)),g=m(()=>{var p;return(p=d.value)!=null&&p.dateOfBirth?(new Date().getTime()-new Date(d.value.dateOfBirth).getTime())/w:0}),o=m(()=>g.value*12),f=m(()=>g.value*52),h=m(()=>b.value.find(p=>{var C;return p.id===((C=d.value)==null?void 0:C.userId)})),S=m(()=>{var p,C;return((p=d.value)==null?void 0:p.userId)===((C=n.value)==null?void 0:C.uid)||u.value}),l=m(()=>{var p;return((p=d.value)==null?void 0:p.weightLog.map(C=>({date:new Date(C.date),value:C.weight})))??[]}),{headers:_,filteredData:H}=Ke(l,A),U=m(()=>{if(!d.value||!d.value.dateOfBirth)return null;const p=d.value.vetDate?new Date(d.value.vetDate):null;if(p)return g.value<=7?k(p,1,1):k(p,2,1);if(d.value.type==="cat")return k(new Date(d.value.dateOfBirth),52,10);if(d.value.type==="dog")return k(new Date(d.value.dateOfBirth),52,4)}),j=m(()=>{if(!d.value||!d.value.dateOfBirth)return null;const p=d.value.dewormingDate?new Date(d.value.dewormingDate):null;if(p){if(f.value<=9)return k(p,52,2);if(o.value<=3)return k(p,12,3);if(o.value<=6)return k(p,12,1);if(d.value.type==="cat")return k(p,12,d.value.insideCat?6:3);if(d.value.type==="dog")return k(p,12,3)}else return k(new Date(d.value.dateOfBirth),52,3)}),k=(p,C,z)=>new Date(p.getTime()+w/C*z);return{weightLogPeriod:A,petAgeYears:g,petAgeMonths:o,petAgeWeeks:f,petOwner:h,isMyPet:S,nextVetVisit:U,nextDeworming:j,chartHeaders:_,chartData:H}},Ze=t=>{var g;const e=m(()=>F(t)),{petAgeYears:r,petAgeMonths:u}=X(e),n=m(()=>{var f,h;if(((f=e.value)==null?void 0:f.type)!=="cat"||!((h=e.value)!=null&&h.dateOfBirth))return null;const o=r.value;switch(!0){case o<1:return{value:"kitten",label:"Kitten (0-12 months)"};case(o>=1&&o<3):return{value:"junior",label:"Junior (1-2 years)"};case(o>=3&&o<7):return{value:"adult",label:"Adult (3-6 years)"};case(o>=7&&o<11):return{value:"mature",label:"Mature (7-10 years)"};case(o>=11&&o<15):return{value:"senior",label:"Senior (11-14 years)"};case o>=15:return{value:"geriatric",label:"Geriatric (15+ years)"};default:return null}}),b=m(()=>e.value?e.value.weightLog.length?e.value.weightLog.map(f=>({...f,date:new Date(f.date).getTime()})).sort((f,h)=>h.date-f.date)[0].weight:e.value.weight??null:null),w=m(()=>{var o,f,h;if(!((o=e.value)!=null&&o.dateOfBirth))return null;switch((f=n.value)==null?void 0:f.value){case"kitten":return u.value<=4?"kitten0.4":"kitten1";default:return(h=e.value)!=null&&h.castrated?"castrated":"default"}}),{requiredCaloriesByWeightAndAgeAndSize:A,requiredFoodDry:d}=Re("average",b.value??"",w.value??"default",((g=e.value)==null?void 0:g.gender)??"male","35","default");return{catLifeStage:n,petWeight:b,requiredCaloriesByWeightAndAgeAndSize:n?A:null,requiredFoodDry:n?d:null}},Qe=t=>{const e=m(()=>F(t)),{petAgeYears:r}=X(e);return{dogLifeStage:m(()=>{var b,w,A;if(((b=e.value)==null?void 0:b.type)!=="dog"||!((w=e.value)!=null&&w.dateOfBirth)||!((A=e.value)!=null&&A.breedSize))return null;const n=r.value;switch(e.value.breedSize){case"small":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<8?{value:"adult",label:"Adult (3-7 years)"}:n<11?{value:"mature",label:"Mature (8-10 years)"}:n<15?{value:"senior",label:"Senior (11-14 years)"}:{value:"geriatric",label:"Geriatric (15+ years)"};case"medium":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<7?{value:"adult",label:"Adult (3-6 years)"}:n<10?{value:"mature",label:"Mature (7-9 years)"}:n<13?{value:"senior",label:"Senior (10-12 years)"}:{value:"geriatric",label:"Geriatric (13+ years)"};case"large":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<6?{value:"adult",label:"Adult (3-5 years)"}:n<9?{value:"mature",label:"Mature (6-8 years)"}:n<12?{value:"senior",label:"Senior (9-11 years)"}:{value:"geriatric",label:"Geriatric (12+ years)"};case"giant":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<2?{value:"young_adult",label:"Young Adult (1-1.5 years)"}:n<5?{value:"adult",label:"Adult (2-4 years)"}:n<8?{value:"mature",label:"Mature (5-7 years)"}:n<10?{value:"senior",label:"Senior (8-9 years)"}:{value:"geriatric",label:"Geriatric (10+ years)"};default:return null}})}},Xe={class:"ms-5 max-sm:mt-3 md:ms-10 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-1 sm:gap-3 justify-between"},y=J({__name:"KeyValuePair",props:{title:{},value:{},titleProps:{},valueProps:{}},setup(t){return(e,r)=>(s(),O("div",Xe,[D("p",W({class:"font-bold text-nowrap"},e.titleProps),N(e.title),17),D("p",W({class:"text-neutral-300"},e.valueProps),N(e.value),17)]))}}),et={class:"grid grid-cols-6 mb-5 gap-5"},tt={class:"break-words text-neutral-300"},at={class:"flex flex-col gap-10"},rt={key:2,class:"max-sm:mt-5 ms-5 md:ms-10 pi pi-sync animate-spin text-neutral-300"},lt={key:0,class:"flex flex-wrap md:flex-nowrap gap-3 justify-around"},nt={class:"flex flex-col md:items-center"},st={class:"text-indigo-300 font-bold"},ut={class:"text-gray-300 italic"},it={class:"mt-3 flex justify-center gap-3"},ot={key:0,class:"w-full text-neutral-300"},ct={key:1,class:"flex gap-3"},dt={key:1,class:"flex justify-center"},pt=J({__name:"Pet",setup(t){const e=xe(),r=ke(),u=Oe(),n=Ce(),b=me(),{pets:w}=V(u),{routeLoading:A}=V(n),{isLoggedIn:d}=V(b),{deletePet:g}=u,o=Ae("statisticsRef"),f=q(!1),h=q(!1),S=m(()=>e.params.petId),l=m(()=>w.value.find(M=>M.id===S.value)),{weightLogPeriod:_,petOwner:H,isMyPet:U,nextVetVisit:j,nextDeworming:k,chartHeaders:p,chartData:C}=X(l),{catLifeStage:z,petWeight:ee,requiredCaloriesByWeightAndAgeAndSize:te,requiredFoodDry:ae}=Ze(l),{dogLifeStage:re}=Qe(l),{births:le,holidays:ne,isLoading:ye,fetchData:he}=Me(),be=async M=>{await g(M),r.push({name:R.PET_OVERVIEW})};return fe(()=>{var M;(M=l.value)!=null&&M.dateOfBirth&&setTimeout(()=>{he(new Date(l.value.dateOfBirth),"all",{reverse:!0})},1e3)}),(M,i)=>(s(),v(Ye,null,{content:B(()=>[a(d)?(s(),O(Y,{key:0},[D("div",et,[T($,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:a(R).PET_OVERVIEW,loading:a(A)===a(R).PET_OVERVIEW,label:"Back to all pets",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),l.value?(s(),v(oe,{key:0,class:"!bg-primary-500 !bg-opacity-35 my-5",title:l.value.name,"title-props":{class:"text-3xl md:text-5xl"},"title-wrapper-props":{class:"ms-5"},avatar:l.value.avatar??void 0,"avatar-props":{class:"h-20 w-20 md:h-32 md:w-32"}},{underTitle:B(()=>[D("p",tt,N(l.value.description),1)]),default:B(()=>{var K,se,ue,ie;return[D("div",at,[D("div",null,[i[9]||(i[9]=D("h3",null,"Details",-1)),a(H)?(s(),v(y,{key:0,title:"Owner:",value:a(H).displayName},null,8,["value"])):c("",!0),l.value.dateOfBirth?(s(),v(y,{key:1,title:"Date of birth:",value:a(G)(l.value.dateOfBirth)},null,8,["value"])):c("",!0),a(ye)?(s(),O("i",rt)):c("",!0),a(ne).length?(s(),v(y,{key:3,title:"On this date:",value:`~ ${a(ce)(a(ne)).text}`,"title-props":{class:"text-yellow-300 italic"},"value-props":{class:"max-sm:ms-0 ms-2 text-neutral-100 italic"}},null,8,["value"])):c("",!0),a(le).length?(s(),v(y,{key:4,class:"max-sm:ms-3",title:"",value:`~ ${a(ce)(a(le)).text} was born`,"title-props":{class:"hidden sm:block"},"value-props":{class:"ms-2 text-neutral-100 italic"}},null,8,["value"])):c("",!0),l.value.type?(s(),v(y,{key:5,title:"Type:",value:((K=a(Pe).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.type)}))==null?void 0:K.label)??""},null,8,["value"])):c("",!0),l.value.breed?(s(),v(y,{key:6,title:"Breed:",value:l.value.breed},null,8,["value"])):c("",!0),l.value.breedSize&&l.value.type==="dog"?(s(),v(y,{key:7,title:"Breed size:",value:((se=a(Te).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.breedSize)}))==null?void 0:se.label)??""},null,8,["value"])):c("",!0),l.value.gender?(s(),v(y,{key:8,title:"Gender:",value:((ue=a(Ee).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.gender)}))==null?void 0:ue.label)??""},null,8,["value"])):c("",!0),i[10]||(i[10]=D("h3",null,"Health",-1)),a(ee)?(s(),v(y,{key:9,title:"Weight:",value:a(ee)+"kg"},null,8,["value"])):c("",!0),typeof l.value.insideCat=="boolean"?(s(),v(y,{key:10,title:"Inside Cat:",value:l.value.insideCat?"Yes":"No"},null,8,["value"])):c("",!0),l.value.castrated!==void 0?(s(),v(y,{key:11,title:"Castrated:",value:l.value.castrated?"Yes":"No"},null,8,["value"])):c("",!0),l.value.vetDate?(s(),v(y,{key:12,title:"Last vet visit:",value:a(G)(l.value.vetDate)},null,8,["value"])):c("",!0),l.value.lastVaccinationDate?(s(),v(y,{key:13,title:"Last vaccination:",value:a(G)(l.value.lastVaccinationDate)},null,8,["value"])):c("",!0),l.value.dewormingDate?(s(),v(y,{key:14,title:"Last deworming:",value:a(G)(l.value.dewormingDate)},null,8,["value"])):c("",!0)]),l.value.dateOfBirth?(s(),O("div",lt,[T($e,{class:"w-full md:w-3/4 text-neutral-300 bg-neutral-900 rounded-secondary",time:new Date(l.value.dateOfBirth).getTime(),direction:"up"},{birthdayText:B(()=>i[11]||(i[11]=[D("h4",{class:"text-xl xl:text-3xl text-pink-500 font-bold italic"},"Happy birthday!",-1)])),onThisDay:B(({selected:x})=>[i[12]||(i[12]=D("h5",{class:"place-self-center xl:text-xl text-slate-400 font-bold"},"Also on this day:",-1)),(s(!0),O(Y,null,Le(x,P=>(s(),O("div",nt,[D("p",st,N(P.year),1),D("p",ut,N(P.text),1)]))),256))]),_:1},8,["time"])])):c("",!0),D("div",null,[i[13]||(i[13]=D("h3",null,"Statistics",-1)),D("div",{ref_key:"statisticsRef",ref:o},[l.value.type==="cat"?(s(),O(Y,{key:0},[a(z)?(s(),v(y,{key:0,title:"Life stage:",value:a(z).label},null,8,["value"])):c("",!0),a(te)?(s(),v(y,{key:1,title:"Required energy per day:",value:a(te).toFixed(1)+" kcal"},null,8,["value"])):c("",!0),a(ae)?(s(),v(y,{key:2,title:"Required dry food per day:",value:a(ae).toFixed(1)+" g"},null,8,["value"])):c("",!0)],64)):l.value.type==="dog"?(s(),O(Y,{key:1},[a(re)?(s(),v(y,{key:0,title:"Life stage:",value:a(re).label},null,8,["value"])):c("",!0)],64)):c("",!0),a(j)?(s(),v(y,{key:2,title:"Next vet visit:",value:a(Z)(a(j))},null,8,["value"])):c("",!0),l.value.nextVaccinationDate?(s(),v(y,{key:3,title:"Next vaccination:",value:a(Z)(new Date(l.value.nextVaccinationDate))},null,8,["value"])):c("",!0),a(k)?(s(),v(y,{key:4,title:"Next deworming:",value:a(Z)(a(k))},null,8,["value"])):c("",!0),l.value.weightLog.length?(s(),O(Y,{key:5},[D("div",it,[T($,{type:"neutral",label:"1 Year",outlined:a(_)===a(E).MONTHS,onClick:i[0]||(i[0]=x=>_.value=a(E).MONTHS)},null,8,["outlined"]),T($,{type:"neutral",label:"3 Years",outlined:a(_)===a(E).YEARS_HALF,onClick:i[1]||(i[1]=x=>_.value=a(E).YEARS_HALF)},null,8,["outlined"]),T($,{type:"neutral",label:"10 Years",outlined:a(_)===a(E).YEARS,onClick:i[2]||(i[2]=x=>_.value=a(E).YEARS)},null,8,["outlined"])]),T(Ue,{headers:a(p),datasets:[{label:`${l.value.name}'s weight (kg)`,fill:!1,borderColor:"red",yAxisID:"y",tension:.4,data:a(C),spanGaps:!0}]},null,8,["headers","datasets"])],64)):c("",!0)],512),(ie=a(o))!=null&&ie.childElementCount?c("",!0):(s(),O("p",ot," Nothing to show yet. "))]),a(U)?(s(),O("div",ct,[T($,{label:"Edit",outlined:"",onClick:i[3]||(i[3]=x=>f.value=!0)}),T($,{label:"Delete",type:"danger",outlined:"",onClick:i[4]||(i[4]=x=>h.value=!0)})])):c("",!0),T(Ve,{"is-open":f.value,"original-pet":l.value??null,onClose:i[5]||(i[5]=x=>f.value=!1)},null,8,["is-open","original-pet"]),T(Be,{"is-open":h.value,title:"Delete Pet",description:"Are you sure you want to delete your pet?","confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:i[6]||(i[6]=x=>be(l.value.id)),onCancel:i[7]||(i[7]=x=>h.value=!1)},null,8,["is-open"])])]}),_:1},8,["title","avatar"])):c("",!0)],64)):(s(),O("div",dt,[T(oe,{class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:B(()=>[i[14]||(i[14]=de(" Please ")),D("a",{class:"cursor-pointer",onClick:i[8]||(i[8]=K=>a(r).push({name:a(R).LOGIN,params:{redirect:JSON.stringify({name:a(R).PET_DETAILS,params:{petId:S.value}})}}))}," Login "),i[15]||(i[15]=de(" to view this pet. "))]),_:1})]))]),_:1}))}}),vt=Ne(pt,[["__scopeId","data-v-1e36811e"]]),Tt=J({__name:"Pet",setup(t){return(e,r)=>(s(),v(vt))}});export{Tt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
