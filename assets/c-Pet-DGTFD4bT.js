import{_ as oe}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CCDu7Wsi.js";import{_ as B}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-CN-qhlp8.js";import{B as be,_ as we,x as De,l as u,m as C,p as D,y as W,e as J,r as q,o as fe,q as v,k as r,c as g,au as F,h as ge,A as Se,s as V,H as N,u as _e,f as xe,av as ke,g as Oe,aw as Ce,D as L,w as Y,n as E,R,t as d,C as G,ax as ce,ay as Ae,az as Pe,aA as Ee,O as Te,aB as Z,G as de}from"../bundle.js";import{u as Me,_ as $e}from"./c-Countdown.vue_vue_type_script_setup_true_lang-D8UWVoll.js";import{a as Be}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-BXzLNpSe.js";import{_ as Le}from"./c-Page.vue_vue_type_script_setup_true_lang-CLA7q8HE.js";import{u as Ye}from"./c-useCatCalc-6gobbMX9.js";import{_ as Re}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-Bpq4tb1I.js";import{_ as Ve}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-DateField-DIkLlrgD.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-C4Mtedp9.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-CvBTNZs9.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-DIKuGEia.js";import"./c-accordiontab.esm-CrO3SYCY.js";import"./c-vuedraggable.umd-6GGnRdAM.js";var Ne={root:{position:"relative"}},Fe={root:"p-chart"},Ie=be.extend({name:"chart",inlineStyles:Ne,classes:Fe}),He={name:"BaseChart",extends:De,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:Ie,provide:function(){return{$parentInstance:this}}},me={name:"Chart",extends:He,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;we(()=>import("./c-auto-U_pncEX3.js"),__vite__mapDeps([]),import.meta.url).then(function(a){e.chart&&(e.chart.destroy(),e.chart=null),a&&a.default&&(e.chart=new a.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var a=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),s=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);a&&a[0]&&s&&this.$emit("select",{originalEvent:e,element:a[0],dataset:s})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function pe(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,s)}return a}function ve(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?pe(Object(a),!0).forEach(function(s){je(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function je(t,e,a){return e=ze(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ze(t){var e=Ge(t,"string");return I(e)=="symbol"?e:String(e)}function Ge(t,e){if(I(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,e||"default");if(I(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var We=["width","height"];function qe(t,e,a,s,n,b){return u(),C("div",W({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[D("canvas",W({ref:"canvas",width:t.width,height:t.height,onClick:e[0]||(e[0]=function(w){return b.onCanvasClick(w)})},ve(ve({},t.canvasProps),t.ptm("canvas"))),null,16,We)],16)}me.render=qe;const Je=J({__name:"Chart",props:{headers:{},datasets:{}},setup(t){const e=q(),a=()=>{const s=getComputedStyle(document.documentElement),n="white",b="white",w=s.getPropertyValue("--p-content-border-color");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:b},grid:{color:w}},y:{type:"linear",display:!0,position:"left",beginAtZero:!0,ticks:{color:b},grid:{color:w}},y1:{type:"linear",display:!1,position:"right",ticks:{color:b},grid:{drawOnChartArea:!1,color:w}}}}};return fe(()=>{e.value=a()}),(s,n)=>(u(),v(r(me),{type:"line",data:{labels:s.headers,datasets:s.datasets},options:e.value,class:"h-[30rem]"},null,8,["data","options"]))}});var T=(t=>(t[t.MONTHS=0]="MONTHS",t[t.YEARS_HALF=1]="YEARS_HALF",t[t.YEARS=2]="YEARS",t))(T||{});const M={0:{amount:12,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-M[0].amount+1,1),e},calculateStartDate:(t,e)=>{const a=new Date(t);return a.setMonth(a.getMonth()+e),a},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(t.getMonth()+1,0),e},getLabel:t=>Q[t.getMonth()]},1:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-6*M[1].amount+1,1),e},calculateStartDate:(t,e)=>{const a=new Date(t);return a.setMonth(a.getMonth()+e*6),a},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()+6,0),e},getLabel:(t,e)=>{const a=Q[t.getMonth()].substring(0,3),s=Q[e.getMonth()].substring(0,3);return`${a}-${s} ${e.getFullYear()}`}},2:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear()-M[2].amount+1,0,1),e},calculateStartDate:(t,e)=>{const a=new Date(t);return a.setFullYear(a.getFullYear()+e,0,1),a},calculateEndDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear(),12,0),e},getLabel:t=>`${t.getFullYear()}`}},Q=["January","February","March","April","May","June","July","August","September","October","November","December"],Ue=(t,e)=>{const a=g(()=>F(t)),s=g(()=>F(e)),n=g(()=>{const m=new Date;return M[s.value].getStartDate(m).getTime()}),b=g(()=>{const m=n.value;return a.value.filter(o=>o.date.getTime()>=m)}),w=g(()=>{const m=S=>{const l=M[s.value].calculateStartDate(new Date(n.value),S),_=M[s.value].calculateEndDate(l);return[l.getTime(),_.getTime()]},o=(S,l)=>b.value.some(_=>_.date.getTime()>=S&&_.date.getTime()<l),f=[];let h=!1;for(let S=0;S<M[s.value].amount;S++){const[l,_]=m(S);(h||o(l,_))&&(h=!0,f.push({label:M[s.value].getLabel(new Date(l),new Date(_)),startTime:l,endTime:_}))}return f}),A=g(()=>w.value.map(m=>m.label)),c=g(()=>{const m=[];return w.value.forEach(o=>{const f=b.value.filter(h=>{const S=h.date.getTime();return S>=o.startTime&&S<o.endTime});f.length?m.push({x:o.label,y:f.reduce((h,S)=>h+S.value,0)/f.length}):m.push({x:o.label,y:null})}),m});return{headers:A,filteredData:c}},X=t=>{const e=ge(),a=Se(),{isOwner:s,firebaseUser:n}=V(e),{publicUsers:b}=V(a),w=1e3*60*60*24*365.25,A=q(T.MONTHS),c=g(()=>F(t)),m=g(()=>{var p;return(p=c.value)!=null&&p.dateOfBirth?(new Date().getTime()-new Date(c.value.dateOfBirth).getTime())/w:0}),o=g(()=>m.value*12),f=g(()=>m.value*52),h=g(()=>b.value.find(p=>{var O;return p.id===((O=c.value)==null?void 0:O.userId)})),S=g(()=>{var p,O;return((p=c.value)==null?void 0:p.userId)===((O=n.value)==null?void 0:O.uid)||s.value}),l=g(()=>{var p;return((p=c.value)==null?void 0:p.weightLog.map(O=>({date:new Date(O.date),value:O.weight})))??[]}),{headers:_,filteredData:H}=Ue(l,A),U=g(()=>{if(!c.value||!c.value.dateOfBirth)return null;const p=c.value.vetDate?new Date(c.value.vetDate):null;if(p)return m.value<=7?k(p,1,1):k(p,2,1);if(c.value.type==="cat")return k(new Date(c.value.dateOfBirth),52,10);if(c.value.type==="dog")return k(new Date(c.value.dateOfBirth),52,4)}),j=g(()=>{if(!c.value||!c.value.dateOfBirth)return null;const p=c.value.dewormingDate?new Date(c.value.dewormingDate):null;if(p){if(f.value<=9)return k(p,52,2);if(o.value<=3)return k(p,12,3);if(o.value<=6)return k(p,12,1);if(c.value.type==="cat")return k(p,12,c.value.insideCat?6:3);if(c.value.type==="dog")return k(p,12,3)}else return k(new Date(c.value.dateOfBirth),52,3)}),k=(p,O,z)=>new Date(p.getTime()+w/O*z);return{weightLogPeriod:A,petAgeYears:m,petAgeMonths:o,petAgeWeeks:f,petOwner:h,isMyPet:S,nextVetVisit:U,nextDeworming:j,chartHeaders:_,chartData:H}},Ke=t=>{var m;const e=g(()=>F(t)),{petAgeYears:a,petAgeMonths:s}=X(e),n=g(()=>{var f,h;if(((f=e.value)==null?void 0:f.type)!=="cat"||!((h=e.value)!=null&&h.dateOfBirth))return null;const o=a.value;switch(!0){case o<1:return{value:"kitten",label:"Kitten (0-12 months)"};case(o>=1&&o<3):return{value:"junior",label:"Junior (1-2 years)"};case(o>=3&&o<7):return{value:"adult",label:"Adult (3-6 years)"};case(o>=7&&o<11):return{value:"mature",label:"Mature (7-10 years)"};case(o>=11&&o<15):return{value:"senior",label:"Senior (11-14 years)"};case o>=15:return{value:"geriatric",label:"Geriatric (15+ years)"};default:return null}}),b=g(()=>e.value?e.value.weightLog.length?e.value.weightLog.map(f=>({...f,date:new Date(f.date).getTime()})).sort((f,h)=>h.date-f.date)[0].weight:e.value.weight??null:null),w=g(()=>{var o,f,h;if(!((o=e.value)!=null&&o.dateOfBirth))return null;switch((f=n.value)==null?void 0:f.value){case"kitten":return s.value<=4?"kitten0.4":"kitten1";default:return(h=e.value)!=null&&h.castrated?"castrated":"default"}}),{requiredCaloriesByWeightAndAgeAndSize:A,requiredFoodDry:c}=Ye("average",b.value??"",w.value??"default",((m=e.value)==null?void 0:m.gender)??"male","35","default");return{catLifeStage:n,petWeight:b,requiredCaloriesByWeightAndAgeAndSize:n?A:null,requiredFoodDry:n?c:null}},Ze=t=>{const e=g(()=>F(t)),{petAgeYears:a}=X(e);return{dogLifeStage:g(()=>{var b,w,A;if(((b=e.value)==null?void 0:b.type)!=="dog"||!((w=e.value)!=null&&w.dateOfBirth)||!((A=e.value)!=null&&A.breedSize))return null;const n=a.value;switch(e.value.breedSize){case"small":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<8?{value:"adult",label:"Adult (3-7 years)"}:n<11?{value:"mature",label:"Mature (8-10 years)"}:n<15?{value:"senior",label:"Senior (11-14 years)"}:{value:"geriatric",label:"Geriatric (15+ years)"};case"medium":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<7?{value:"adult",label:"Adult (3-6 years)"}:n<10?{value:"mature",label:"Mature (7-9 years)"}:n<13?{value:"senior",label:"Senior (10-12 years)"}:{value:"geriatric",label:"Geriatric (13+ years)"};case"large":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:n<6?{value:"adult",label:"Adult (3-5 years)"}:n<9?{value:"mature",label:"Mature (6-8 years)"}:n<12?{value:"senior",label:"Senior (9-11 years)"}:{value:"geriatric",label:"Geriatric (12+ years)"};case"giant":return n<1?{value:"puppy",label:"Puppy (0-12 months)"}:n<2?{value:"young_adult",label:"Young Adult (1-1.5 years)"}:n<5?{value:"adult",label:"Adult (2-4 years)"}:n<8?{value:"mature",label:"Mature (5-7 years)"}:n<10?{value:"senior",label:"Senior (8-9 years)"}:{value:"geriatric",label:"Geriatric (10+ years)"};default:return null}})}},Qe={class:"ms-5 max-sm:mt-3 md:ms-10 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-1 sm:gap-3 justify-between"},y=J({__name:"KeyValuePair",props:{title:{},value:{},titleProps:{},valueProps:{}},setup(t){return(e,a)=>(u(),C("div",Qe,[D("p",W({class:"font-bold text-nowrap"},e.titleProps),N(e.title),17),D("p",W({class:"text-neutral-300"},e.valueProps),N(e.value),17)]))}}),Xe={class:"grid grid-cols-6 mb-5 gap-5"},et={class:"break-words text-neutral-300"},tt={class:"flex flex-col gap-10"},at={key:0,class:"flex flex-wrap md:flex-nowrap gap-3 justify-around"},rt={class:"flex flex-col md:items-center"},lt={class:"text-indigo-300 font-bold"},nt={class:"text-gray-300 italic"},st={class:"mt-3 flex justify-center gap-3"},ut={key:0,class:"w-full text-neutral-300"},it={key:1,class:"flex gap-3"},ot={key:1,class:"flex justify-center"},ct=J({__name:"Pet",setup(t){const e=_e(),a=xe(),s=ke(),n=Oe(),b=ge(),{pets:w}=V(s),{routeLoading:A}=V(n),{isLoggedIn:c}=V(b),{deletePet:m}=s,o=Ce("statisticsRef"),f=q(!1),h=q(!1),S=g(()=>e.params.petId),l=g(()=>w.value.find($=>$.id===S.value)),{weightLogPeriod:_,petOwner:H,isMyPet:U,nextVetVisit:j,nextDeworming:k,chartHeaders:p,chartData:O}=X(l),{catLifeStage:z,petWeight:ee,requiredCaloriesByWeightAndAgeAndSize:te,requiredFoodDry:ae}=Ke(l),{dogLifeStage:re}=Ze(l),{births:le,holidays:ne,fetchData:ye}=Me(),he=async $=>{await m($),a.push({name:R.PET_OVERVIEW})};return fe(()=>{var $;($=l.value)!=null&&$.dateOfBirth&&ye(new Date(l.value.dateOfBirth),"all",{reverse:!0})}),($,i)=>(u(),v(Le,null,{content:L(()=>[r(c)?(u(),C(Y,{key:0},[D("div",Xe,[E(B,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:r(R).PET_OVERVIEW,loading:r(A)===r(R).PET_OVERVIEW,label:"Back to all pets",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),l.value?(u(),v(oe,{key:0,class:"!bg-primary-500 !bg-opacity-35 my-5",title:l.value.name,"title-props":{class:"text-3xl md:text-5xl"},"title-wrapper-props":{class:"ms-5"},avatar:l.value.avatar??void 0,"avatar-props":{class:"h-20 w-20 md:h-32 md:w-32"}},{underTitle:L(()=>[D("p",et,N(l.value.description),1)]),default:L(()=>{var K,se,ue,ie;return[D("div",tt,[D("div",null,[i[9]||(i[9]=D("h3",null,"Details",-1)),r(H)?(u(),v(y,{key:0,title:"Owner:",value:r(H).displayName},null,8,["value"])):d("",!0),l.value.dateOfBirth?(u(),v(y,{key:1,title:"Date of birth:",value:r(G)(l.value.dateOfBirth)},null,8,["value"])):d("",!0),r(ne).length?(u(),v(y,{key:2,title:"On this date:",value:`~ ${r(ce)(r(ne)).text}`,"title-props":{class:"text-yellow-300 italic"},"value-props":{class:"max-sm:-ms-5 ms-2 text-neutral-100 italic"}},null,8,["value"])):d("",!0),r(le).length?(u(),v(y,{key:3,class:"max-sm:-ms-3",title:"",value:`~ ${r(ce)(r(le)).text} was born`,"title-props":{class:"hidden sm:block"},"value-props":{class:"ms-2 text-neutral-100 italic"}},null,8,["value"])):d("",!0),l.value.type?(u(),v(y,{key:4,title:"Type:",value:((K=r(Ae).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.type)}))==null?void 0:K.label)??""},null,8,["value"])):d("",!0),l.value.breed?(u(),v(y,{key:5,title:"Breed:",value:l.value.breed},null,8,["value"])):d("",!0),l.value.breedSize&&l.value.type==="dog"?(u(),v(y,{key:6,title:"Breed size:",value:((se=r(Pe).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.breedSize)}))==null?void 0:se.label)??""},null,8,["value"])):d("",!0),l.value.gender?(u(),v(y,{key:7,title:"Gender:",value:((ue=r(Ee).find(({value:x})=>{var P;return x===((P=l.value)==null?void 0:P.gender)}))==null?void 0:ue.label)??""},null,8,["value"])):d("",!0),i[10]||(i[10]=D("h3",null,"Health",-1)),r(ee)?(u(),v(y,{key:8,title:"Weight:",value:r(ee)+"kg"},null,8,["value"])):d("",!0),typeof l.value.insideCat=="boolean"?(u(),v(y,{key:9,title:"Inside Cat:",value:l.value.insideCat?"Yes":"No"},null,8,["value"])):d("",!0),l.value.castrated!==void 0?(u(),v(y,{key:10,title:"Castrated:",value:l.value.castrated?"Yes":"No"},null,8,["value"])):d("",!0),l.value.vetDate?(u(),v(y,{key:11,title:"Last vet visit:",value:r(G)(l.value.vetDate)},null,8,["value"])):d("",!0),l.value.lastVaccinationDate?(u(),v(y,{key:12,title:"Last vaccination:",value:r(G)(l.value.lastVaccinationDate)},null,8,["value"])):d("",!0),l.value.dewormingDate?(u(),v(y,{key:13,title:"Last deworming:",value:r(G)(l.value.dewormingDate)},null,8,["value"])):d("",!0)]),l.value.dateOfBirth?(u(),C("div",at,[E($e,{class:"w-full md:w-3/4 text-neutral-300 bg-neutral-900 rounded-secondary",time:new Date(l.value.dateOfBirth).getTime(),direction:"up"},{birthdayText:L(()=>i[11]||(i[11]=[D("h4",{class:"text-xl xl:text-3xl text-pink-500 font-bold italic"},"Happy birthday!",-1)])),onThisDay:L(({selected:x})=>[i[12]||(i[12]=D("h5",{class:"place-self-center xl:text-xl text-slate-400 font-bold"},"Also on this day:",-1)),(u(!0),C(Y,null,Te(x,P=>(u(),C("div",rt,[D("p",lt,N(P.year),1),D("p",nt,N(P.text),1)]))),256))]),_:1},8,["time"])])):d("",!0),D("div",null,[i[13]||(i[13]=D("h3",null,"Statistics",-1)),D("div",{ref_key:"statisticsRef",ref:o},[l.value.type==="cat"?(u(),C(Y,{key:0},[r(z)?(u(),v(y,{key:0,title:"Life stage:",value:r(z).label},null,8,["value"])):d("",!0),r(te)?(u(),v(y,{key:1,title:"Required energy per day:",value:r(te).toFixed(1)+" kcal"},null,8,["value"])):d("",!0),r(ae)?(u(),v(y,{key:2,title:"Required dry food per day:",value:r(ae).toFixed(1)+" g"},null,8,["value"])):d("",!0)],64)):l.value.type==="dog"?(u(),C(Y,{key:1},[r(re)?(u(),v(y,{key:0,title:"Life stage:",value:r(re).label},null,8,["value"])):d("",!0)],64)):d("",!0),r(j)?(u(),v(y,{key:2,title:"Next vet visit:",value:r(Z)(r(j))},null,8,["value"])):d("",!0),l.value.nextVaccinationDate?(u(),v(y,{key:3,title:"Next vaccination:",value:r(Z)(new Date(l.value.nextVaccinationDate))},null,8,["value"])):d("",!0),r(k)?(u(),v(y,{key:4,title:"Next deworming:",value:r(Z)(r(k))},null,8,["value"])):d("",!0),l.value.weightLog.length?(u(),C(Y,{key:5},[D("div",st,[E(B,{type:"neutral",label:"1 Year",outlined:r(_)===r(T).MONTHS,onClick:i[0]||(i[0]=x=>_.value=r(T).MONTHS)},null,8,["outlined"]),E(B,{type:"neutral",label:"3 Years",outlined:r(_)===r(T).YEARS_HALF,onClick:i[1]||(i[1]=x=>_.value=r(T).YEARS_HALF)},null,8,["outlined"]),E(B,{type:"neutral",label:"10 Years",outlined:r(_)===r(T).YEARS,onClick:i[2]||(i[2]=x=>_.value=r(T).YEARS)},null,8,["outlined"])]),E(Je,{headers:r(p),datasets:[{label:`${l.value.name}'s weight (kg)`,fill:!1,borderColor:"red",yAxisID:"y",tension:.4,data:r(O),spanGaps:!0}]},null,8,["headers","datasets"])],64)):d("",!0)],512),(ie=r(o))!=null&&ie.childElementCount?d("",!0):(u(),C("p",ut," Nothing to show yet. "))]),r(U)?(u(),C("div",it,[E(B,{label:"Edit",outlined:"",onClick:i[3]||(i[3]=x=>f.value=!0)}),E(B,{label:"Delete",type:"danger",outlined:"",onClick:i[4]||(i[4]=x=>h.value=!0)})])):d("",!0),E(Re,{"is-open":f.value,"original-pet":l.value??null,onClose:i[5]||(i[5]=x=>f.value=!1)},null,8,["is-open","original-pet"]),E(Be,{"is-open":h.value,title:"Delete Pet",description:"Are you sure you want to delete your pet?","confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:i[6]||(i[6]=x=>he(l.value.id)),onCancel:i[7]||(i[7]=x=>h.value=!1)},null,8,["is-open"])])]}),_:1},8,["title","avatar"])):d("",!0)],64)):(u(),C("div",ot,[E(oe,{class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:L(()=>[i[14]||(i[14]=de(" Please ")),D("a",{class:"cursor-pointer",onClick:i[8]||(i[8]=K=>r(a).push({name:r(R).LOGIN,params:{redirect:JSON.stringify({name:r(R).PET_DETAILS,params:{petId:S.value}})}}))}," Login "),i[15]||(i[15]=de(" to view this pet. "))]),_:1})]))]),_:1}))}}),dt=Ve(ct,[["__scopeId","data-v-441ec227"]]),At=J({__name:"Pet",setup(t){return(e,a)=>(u(),v(dt))}});export{At as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
