import{_ as T,a as ae}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{B as re,_ as le,x as ne,l as c,m as f,p as l,y as U,e as ee,r as N,o as se,q as z,k as u,c as y,au as R,h as oe,A as ue,s as F,av as ie,g as de,D as K,u as pe,f as ce,n as D,R as V,H as S,t as m,C as Z,aw as fe,ax as ve,ay as me,w as I,az as ye}from"../bundle.js";import{_ as ge}from"./c-Countdown.vue_vue_type_script_setup_true_lang-CuCP4XWO.js";import{a as he}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-C6J-GyL9.js";import{_ as be}from"./c-Page.vue_vue_type_script_setup_true_lang-BGhe9uNp.js";import{u as we}from"./c-useCatCalc-6gobbMX9.js";import{_ as Se}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-BLk9_ru7.js";import{_ as _e}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-DateField.vue_vue_type_script_setup_true_lang-ykegzBN_.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-DbzAxtwG.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-aj-wueri.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import"./c-accordiontab.esm-CX-DBziB.js";import"./c-vuedraggable.umd-CzRFyTns.js";var xe={root:{position:"relative"}},Ce={root:"p-chart"},Ae=re.extend({name:"chart",inlineStyles:xe,classes:Ce}),De={name:"BaseChart",extends:ne,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:Ae,provide:function(){return{$parentInstance:this}}},te={name:"Chart",extends:De,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;le(()=>import("./c-auto-U_pncEX3.js"),__vite__mapDeps([]),import.meta.url).then(function(o){e.chart&&(e.chart.destroy(),e.chart=null),o&&o.default&&(e.chart=new o.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var o=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),n=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);o&&o[0]&&n&&this.$emit("select",{originalEvent:e,element:o[0],dataset:n})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function j(a){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(a)}function Q(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),o.push.apply(o,n)}return o}function X(a){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Q(Object(o),!0).forEach(function(n){Oe(a,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(o,n))})}return a}function Oe(a,e,o){return e=ke(e),e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function ke(a){var e=Pe(a,"string");return j(e)=="symbol"?e:String(e)}function Pe(a,e){if(j(a)!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var n=o.call(a,e||"default");if(j(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var Ee=["width","height"];function $e(a,e,o,n,s,g){return c(),f("div",U({class:a.cx("root"),style:a.sx("root")},a.ptmi("root")),[l("canvas",U({ref:"canvas",width:a.width,height:a.height,onClick:e[0]||(e[0]=function(b){return g.onCanvasClick(b)})},X(X({},a.canvasProps),a.ptm("canvas"))),null,16,Ee)],16)}te.render=$e;const Be=ee({__name:"Chart",props:{headers:{},datasets:{}},setup(a){const e=N(),o=()=>{const n=getComputedStyle(document.documentElement),s="white",g="white",b=n.getPropertyValue("--p-content-border-color");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:s}}},scales:{x:{ticks:{color:g},grid:{color:b}},y:{type:"linear",display:!0,position:"left",beginAtZero:!0,ticks:{color:g},grid:{color:b}},y1:{type:"linear",display:!1,position:"right",ticks:{color:g},grid:{drawOnChartArea:!1,color:b}}}}};return se(()=>{e.value=o()}),(n,s)=>(c(),z(u(te),{type:"line",data:{labels:n.headers,datasets:n.datasets},options:e.value,class:"h-[30rem]"},null,8,["data","options"]))}});var k=(a=>(a[a.MONTHS=0]="MONTHS",a[a.YEARS_HALF=1]="YEARS_HALF",a[a.YEARS=2]="YEARS",a))(k||{});const E={0:{period:1e3*60*60*24*365.25/12,amount:12},1:{period:1e3*60*60*24*365.25/2,amount:10},2:{period:1e3*60*60*24*365.25,amount:10}},Te=(a,e)=>{const o=y(()=>R(a)),n=y(()=>R(e)),s=y(()=>new Date().getTime()-E[n.value].period*E[n.value].amount),g=y(()=>{if(n.value===0){const p=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date().getMonth(),d=[];for(let t=i+1;t<12;t++)d.push({label:p[t],startDate:s.value+E[n.value].period*t});for(let t=0;t<=i;t++)d.push({label:p[t],startDate:s.value+E[n.value].period*t});return d}else if(n.value===1){const p=[];for(let i=0;i<10;i++){const d=new Date(s.value).getFullYear()+Math.round(i*.5);p.push({label:i%2===0?`January ${d}`:`July ${d}`,startDate:s.value+E[n.value].period*i})}return p}else{const p=[];for(let i=0;i<10;i++){const d=new Date(s.value).getFullYear();p.push({label:`${d+i+1}`,startDate:s.value+E[n.value].period*i})}return p}}),b=y(()=>g.value.map(p=>p.label)),v=y(()=>{const p=[],i=o.value.filter(d=>{const t=d.date.getTime(),h=s.value;return t>=h});return g.value.forEach(d=>{const t=i.filter(h=>{const w=h.date.getTime(),M=d.startDate,$=d.startDate+E[n.value].period;return w>=M&&w<$});t.length?p.push({x:d.label,y:t.reduce((h,w)=>h+w.value,0)/t.length}):p.push({x:d.label,y:null})}),p});return{headers:b,filteredData:v}},q=a=>{const e=oe(),o=ue(),{isOwner:n,firebaseUser:s}=F(e),{publicUsers:g}=F(o),b=N(k.MONTHS),v=y(()=>R(a)),p=y(()=>{var _;return(_=v.value)!=null&&_.dateOfBirth?(new Date().getTime()-new Date(v.value.dateOfBirth).getTime())/(1e3*60*60*24*365.25):0}),i=y(()=>p.value*12),d=y(()=>p.value*52),t=y(()=>g.value.find(_=>{var x;return _.id===((x=v.value)==null?void 0:x.userId)})),h=y(()=>{var _,x;return((_=v.value)==null?void 0:_.userId)===((x=s.value)==null?void 0:x.uid)||n.value}),w=y(()=>{var _;return((_=v.value)==null?void 0:_.weightLog.map(x=>({date:new Date(x.date),value:x.weight})))??[]}),{headers:M,filteredData:$}=Te(w,b),H=y(()=>{var Y;if(!((Y=v.value)!=null&&Y.dateOfBirth)||!v.value.dewormingDate)return null;const _=new Date(v.value.dateOfBirth).getTime(),x=1e3*60*60*24*365.25,A=(P,L)=>new Date(_+x/P*L);switch(!0){case d.value<3:return A(52,3);case d.value<5:return A(52,5);case d.value<7:return A(52,7);case d.value<9:return A(52,9);case i.value<3:return A(12,3);case i.value<4:return A(12,4);case i.value<5:return A(12,5);case i.value<6:return A(12,6);default:{const P=(L,B)=>new Date(new Date(v.value.dewormingDate).getTime()+x/L*B);if(v.value.type==="cat")return P(12,v.value.insideCat?6:3);if(v.value.type==="dog")return P(12,3)}}});return{weightLogPeriod:b,petAgeYears:p,petAgeMonths:i,petAgeWeeks:d,petOwner:t,isMyPet:h,nextDeworming:H,chartHeaders:M,chartData:$}},Me=a=>{var i,d;const e=y(()=>R(a)),{petAgeYears:o,petAgeMonths:n,petAgeWeeks:s}=q(e),g=y(()=>{var h,w;if(((h=e.value)==null?void 0:h.type)!=="cat"||!((w=e.value)!=null&&w.dateOfBirth))return null;const t=o.value;switch(!0){case t<1:return{value:"kitten",label:"Kitten (0-12 months)"};case(t>=1&&t<3):return{value:"junior",label:"Junior (1-2 years)"};case(t>=3&&t<7):return{value:"adult",label:"Adult (3-6 years)"};case(t>=7&&t<11):return{value:"mature",label:"Mature (7-10 years)"};case(t>=11&&t<15):return{value:"senior",label:"Senior (11-14 years)"};case t>=15:return{value:"geriatric",label:"Geriatric (15+ years)"};default:return null}}),b=y(()=>{var t,h,w;if(!((t=e.value)!=null&&t.dateOfBirth))return null;switch((h=g.value)==null?void 0:h.value){case"kitten":return n.value<=4?"kitten0.4":"kitten1";default:return(w=e.value)!=null&&w.castrated?"castrated":"default"}}),{requiredCaloriesByWeightAndAgeAndSize:v,requiredFoodDry:p}=we("average",((i=e.value)==null?void 0:i.weight)??"",b.value??"default",((d=e.value)==null?void 0:d.gender)??"male","35","default");return{catLifeStage:g,requiredCaloriesByWeightAndAgeAndSize:g?v:null,requiredFoodDry:g?p:null}},Ye=a=>{const e=y(()=>R(a)),{petAgeYears:o}=q(e);return{dogLifeStage:y(()=>{var g,b,v;if(((g=e.value)==null?void 0:g.type)!=="dog"||!((b=e.value)!=null&&b.dateOfBirth)||!((v=e.value)!=null&&v.breedSize))return null;const s=o.value;switch(e.value.breedSize){case"small":return s<1?{value:"puppy",label:"Puppy (0-12 months)"}:s<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:s<8?{value:"adult",label:"Adult (3-7 years)"}:s<11?{value:"mature",label:"Mature (8-10 years)"}:s<15?{value:"senior",label:"Senior (11-14 years)"}:{value:"geriatric",label:"Geriatric (15+ years)"};case"medium":return s<1?{value:"puppy",label:"Puppy (0-12 months)"}:s<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:s<7?{value:"adult",label:"Adult (3-6 years)"}:s<10?{value:"mature",label:"Mature (7-9 years)"}:s<13?{value:"senior",label:"Senior (10-12 years)"}:{value:"geriatric",label:"Geriatric (13+ years)"};case"large":return s<1?{value:"puppy",label:"Puppy (0-12 months)"}:s<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:s<6?{value:"adult",label:"Adult (3-5 years)"}:s<9?{value:"mature",label:"Mature (6-8 years)"}:s<12?{value:"senior",label:"Senior (9-11 years)"}:{value:"geriatric",label:"Geriatric (12+ years)"};case"giant":return s<1?{value:"puppy",label:"Puppy (0-12 months)"}:s<2?{value:"young_adult",label:"Young Adult (1-1.5 years)"}:s<5?{value:"adult",label:"Adult (2-4 years)"}:s<8?{value:"mature",label:"Mature (5-7 years)"}:s<10?{value:"senior",label:"Senior (8-9 years)"}:{value:"geriatric",label:"Geriatric (10+ years)"};default:return null}})}},Le={class:"grid grid-cols-6 mb-5 gap-5"},Re={class:"my-5"},je={class:"table-auto text-left"},Ie={key:0},Ne={key:1},Fe={key:2},He={key:3},Ve={key:4},ze={key:5},qe={key:6},We={key:7},Ge={key:8},Je={key:9},Ue={class:"my-5"},Ke={key:0,class:"flex flex-wrap md:flex-nowrap gap-3 justify-around my-5 md:mb-0"},Ze={class:"ps-5 md:ps-10 flex flex-col gap-3"},Qe={key:0,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},Xe={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300"},et={key:1,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},tt={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},at={key:2,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},rt={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},lt={key:0,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},nt={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300"},st={key:2,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},ot={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},ut={class:"flex justify-center gap-3"},it={key:4,class:"w-full text-neutral-300"},dt={class:"mt-10 flex gap-3"},pt=ee({__name:"Pet",setup(a){const e=pe(),o=ce(),n=ie(),s=de(),{pets:g}=F(n),{routeLoading:b}=F(s),{deletePet:v}=n,p=N(!1),i=N(!1),d=y(()=>e.params.petId),t=y(()=>g.value.find(B=>B.id===d.value)),{weightLogPeriod:h,petOwner:w,isMyPet:M,nextDeworming:$,chartHeaders:H,chartData:_}=q(t),{catLifeStage:x,requiredCaloriesByWeightAndAgeAndSize:A,requiredFoodDry:Y}=Me(t),{dogLifeStage:P}=Ye(t),L=async B=>{await v(B),o.push({name:V.PET_OVERVIEW})};return(B,r)=>(c(),z(be,null,{content:K(()=>[l("div",Le,[D(T,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:u(V).PET_OVERVIEW,loading:u(b)===u(V).PET_OVERVIEW,label:"Back to all pets",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),t.value?(c(),z(ae,{key:0,class:"!bg-primary-500 !bg-opacity-35 my-5",title:t.value.name,"title-props":{class:"text-3xl ms-5 md:text-5xl"},avatar:t.value.avatar??void 0,"avatar-props":{class:"h-20 w-20 md:h-32 md:w-32"}},{default:K(()=>{var W,G,J;return[l("div",Re,[l("table",je,[l("tbody",null,[r[18]||(r[18]=l("tr",{class:"thead"},[l("th",{class:"text-xl"},"Details")],-1)),u(w)?(c(),f("tr",Ie,[r[8]||(r[8]=l("th",null,"Owner:",-1)),l("td",null,S(u(w).displayName),1)])):m("",!0),t.value.dateOfBirth?(c(),f("tr",Ne,[r[9]||(r[9]=l("th",null,"Date of birth:",-1)),l("td",null,S(u(Z)(t.value.dateOfBirth)),1)])):m("",!0),t.value.type?(c(),f("tr",Fe,[r[10]||(r[10]=l("th",null,"Type:",-1)),l("td",null,S((W=u(fe).find(({value:C})=>{var O;return C===((O=t.value)==null?void 0:O.type)}))==null?void 0:W.label),1)])):m("",!0),t.value.breed?(c(),f("tr",He,[r[11]||(r[11]=l("th",null,"Breed:",-1)),l("td",null,S(t.value.breed),1)])):m("",!0),t.value.breedSize&&t.value.type==="dog"?(c(),f("tr",Ve,[r[12]||(r[12]=l("th",null,"Breed size:",-1)),l("td",null,S((G=u(ve).find(({value:C})=>{var O;return C===((O=t.value)==null?void 0:O.breedSize)}))==null?void 0:G.label),1)])):m("",!0),t.value.gender?(c(),f("tr",ze,[r[13]||(r[13]=l("th",null,"Gender:",-1)),l("td",null,S((J=u(me).find(({value:C})=>{var O;return C===((O=t.value)==null?void 0:O.gender)}))==null?void 0:J.label),1)])):m("",!0),r[19]||(r[19]=l("tr",{class:"thead"},[l("th",{class:"text-xl"},"Health")],-1)),t.value.weight?(c(),f("tr",qe,[r[14]||(r[14]=l("th",null,"Weight:",-1)),l("td",null,S(t.value.weight)+"kg",1)])):m("",!0),typeof t.value.insideCat=="boolean"?(c(),f("tr",We,[r[15]||(r[15]=l("th",null,"Inside Cat:",-1)),l("td",null,S(t.value.insideCat?"Yes":"No"),1)])):m("",!0),t.value.castrated!==void 0?(c(),f("tr",Ge,[r[16]||(r[16]=l("th",null,"Castrated:",-1)),l("td",null,S(t.value.castrated?"Yes":"No"),1)])):m("",!0),t.value.dewormingDate?(c(),f("tr",Je,[r[17]||(r[17]=l("th",null,"Last deworming:",-1)),l("td",null,S(u(Z)(t.value.dewormingDate)),1)])):m("",!0)])])]),l("div",Ue,[t.value.dateOfBirth?(c(),f("div",Ke,[D(ge,{class:"w-full md:w-3/4 text-neutral-300 bg-neutral-900 rounded-secondary",time:new Date(t.value.dateOfBirth).getTime(),direction:"up"},null,8,["time"])])):m("",!0),r[25]||(r[25]=l("p",{class:"mt-5 text-xl font-bold"},"Statistics",-1)),l("div",Ze,[t.value.type==="cat"?(c(),f(I,{key:0},[u(x)?(c(),f("div",Qe,[r[20]||(r[20]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Life stage:",-1)),l("p",Xe,S(u(x).label),1)])):m("",!0),u(A)?(c(),f("div",et,[r[21]||(r[21]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Required energy per day:",-1)),l("p",tt,S(u(A).toFixed(1))+" kcal ",1)])):m("",!0),u(Y)?(c(),f("div",at,[r[22]||(r[22]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Required dry food per day:",-1)),l("p",rt,S(u(Y).toFixed(1))+" g ",1)])):m("",!0)],64)):t.value.type==="dog"?(c(),f(I,{key:1},[u(P)?(c(),f("div",lt,[r[23]||(r[23]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Life stage:",-1)),l("p",nt,S(u(P).label),1)])):m("",!0)],64)):m("",!0),u($)?(c(),f("div",st,[r[24]||(r[24]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Next deworming:",-1)),l("p",ot,S(u(ye)(u($))),1)])):m("",!0),t.value.weightLog.length?(c(),f(I,{key:3},[l("div",ut,[D(T,{type:"neutral",label:"Months",outlined:u(h)===u(k).MONTHS,onClick:r[0]||(r[0]=C=>h.value=u(k).MONTHS)},null,8,["outlined"]),D(T,{type:"neutral",label:"Half Years",outlined:u(h)===u(k).YEARS_HALF,onClick:r[1]||(r[1]=C=>h.value=u(k).YEARS_HALF)},null,8,["outlined"]),D(T,{type:"neutral",label:"Years",outlined:u(h)===u(k).YEARS,onClick:r[2]||(r[2]=C=>h.value=u(k).YEARS)},null,8,["outlined"])]),D(Be,{headers:u(H),datasets:[{label:`${t.value.name}'s weight (kg)`,fill:!1,borderColor:"red",yAxisID:"y",tension:.4,data:u(_),spanGaps:!0}]},null,8,["headers","datasets"])],64)):m("",!0),t.value.type==="other"?(c(),f("p",it," Nothing to show yet. ")):m("",!0)])]),u(M)?(c(),f(I,{key:0},[l("div",dt,[D(T,{label:"Edit",outlined:"",onClick:r[3]||(r[3]=C=>p.value=!0)}),D(T,{label:"Delete",type:"danger",outlined:"",onClick:r[4]||(r[4]=C=>i.value=!0)})]),D(Se,{"is-open":p.value,"original-pet":t.value??null,onClose:r[5]||(r[5]=C=>p.value=!1)},null,8,["is-open","original-pet"]),D(he,{"is-open":i.value,title:"Delete Pet",description:"Are you sure you want to delete your pet?","confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:r[6]||(r[6]=C=>L(t.value.id)),onCancel:r[7]||(r[7]=C=>i.value=!1)},null,8,["is-open"])],64)):m("",!0)]}),_:1},8,["title","avatar"])):m("",!0)]),_:1}))}}),Ot=_e(pt,[["__scopeId","data-v-65e9a212"]]);export{Ot as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}