import{_ as $,a as re}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{B as ne,_ as le,x as se,l as p,m,p as l,y as K,e as te,r as I,o as oe,q,k as u,c as v,au as L,h as ue,A as ie,s as N,av as de,g as ce,D as Z,u as pe,f as fe,n as M,R as V,H as _,t as y,C as Q,aw as me,ax as ve,ay as ge,w as j,az as ye}from"../bundle.js";import{_ as he}from"./c-Countdown.vue_vue_type_script_setup_true_lang-CuCP4XWO.js";import{a as we}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-C6J-GyL9.js";import{_ as be}from"./c-Page.vue_vue_type_script_setup_true_lang-BGhe9uNp.js";import{u as De}from"./c-useCatCalc-6gobbMX9.js";import{_ as Se}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-DyQwRqYN.js";import{_ as _e}from"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-DateField-CWvNIfkF.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-DbzAxtwG.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-aj-wueri.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import"./c-accordiontab.esm-CX-DBziB.js";import"./c-vuedraggable.umd-CzRFyTns.js";var xe={root:{position:"relative"}},Ce={root:"p-chart"},Ae=ne.extend({name:"chart",inlineStyles:xe,classes:Ce}),Oe={name:"BaseChart",extends:se,props:{type:String,data:null,options:null,plugins:null,width:{type:Number,default:300},height:{type:Number,default:150},canvasProps:{type:null,default:null}},style:Ae,provide:function(){return{$parentInstance:this}}},ae={name:"Chart",extends:Oe,inheritAttrs:!1,emits:["select","loaded"],chart:null,watch:{data:{handler:function(){this.reinit()},deep:!0},type:function(){this.reinit()},options:function(){this.reinit()}},mounted:function(){this.initChart()},beforeUnmount:function(){this.chart&&(this.chart.destroy(),this.chart=null)},methods:{initChart:function(){var e=this;le(()=>import("./c-auto-U_pncEX3.js"),__vite__mapDeps([]),import.meta.url).then(function(n){e.chart&&(e.chart.destroy(),e.chart=null),n&&n.default&&(e.chart=new n.default(e.$refs.canvas,{type:e.type,data:e.data,options:e.options,plugins:e.plugins})),e.$emit("loaded",e.chart)})},getCanvas:function(){return this.$canvas},getChart:function(){return this.chart},getBase64Image:function(){return this.chart.toBase64Image()},refresh:function(){this.chart&&this.chart.update()},reinit:function(){this.initChart()},onCanvasClick:function(e){if(this.chart){var n=this.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!1),s=this.chart.getElementsAtEventForMode(e,"dataset",{intersect:!0},!1);n&&n[0]&&s&&this.$emit("select",{originalEvent:e,element:n[0],dataset:s})}},generateLegend:function(){if(this.chart)return this.chart.generateLegend()}}};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,s)}return n}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X(Object(n),!0).forEach(function(s){ke(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function ke(t,e,n){return e=Me(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t){var e=Ee(t,"string");return R(e)=="symbol"?e:String(e)}function Ee(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(R(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Te=["width","height"];function Pe(t,e,n,s,o,h){return p(),m("div",K({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[l("canvas",K({ref:"canvas",width:t.width,height:t.height,onClick:e[0]||(e[0]=function(b){return h.onCanvasClick(b)})},ee(ee({},t.canvasProps),t.ptm("canvas"))),null,16,Te)],16)}ae.render=Pe;const Be=te({__name:"Chart",props:{headers:{},datasets:{}},setup(t){const e=I(),n=()=>{const s=getComputedStyle(document.documentElement),o="white",h="white",b=s.getPropertyValue("--p-content-border-color");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:h},grid:{color:b}},y:{type:"linear",display:!0,position:"left",beginAtZero:!0,ticks:{color:h},grid:{color:b}},y1:{type:"linear",display:!1,position:"right",ticks:{color:h},grid:{drawOnChartArea:!1,color:b}}}}};return oe(()=>{e.value=n()}),(s,o)=>(p(),q(u(ae),{type:"line",data:{labels:s.headers,datasets:s.datasets},options:e.value,class:"h-[30rem]"},null,8,["data","options"]))}});var T=(t=>(t[t.MONTHS=0]="MONTHS",t[t.YEARS_HALF=1]="YEARS_HALF",t[t.YEARS=2]="YEARS",t))(T||{});const H={0:{amount:12,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-12,1),e},calculateStartDate:(t,e)=>{const n=new Date(t);return n.setMonth(n.getMonth()+e),n},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(t.getMonth()+1,0),e}},1:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()-6*10,1),e},calculateStartDate:(t,e)=>{const n=new Date(t);return n.setMonth(n.getMonth()+e*6),n},calculateEndDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()+6,0),e}},2:{amount:10,getStartDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear()+1-10,0,1),e},calculateStartDate:(t,e)=>{const n=new Date(t);return n.setFullYear(n.getFullYear()+e,0,1),n},calculateEndDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear(),12,0),e}}},z=["January","February","March","April","May","June","July","August","September","October","November","December"],$e=(t,e)=>{const n=v(()=>L(t)),s=v(()=>L(e)),o=v(()=>{const c=new Date;return H[s.value].getStartDate(c).getTime()}),h=v(()=>{const c=o.value;return n.value.filter(w=>w.date.getTime()>=c)}),b=v(()=>{const c=i=>{const d=H[s.value].calculateStartDate(new Date(o.value),i),S=H[s.value].calculateEndDate(d);return[d.getTime(),S.getTime()]},w=(i,d)=>h.value.some(S=>S.date.getTime()>=i&&S.date.getTime()<d),a=i=>{const d=[];let S=!1;if(s.value===0){let x=0;for(let k=0;k<12;k++){const[f,D]=c(x);(S||w(f,D))&&(S=!0,d.push({label:i(new Date(f),new Date(D)),startTime:f,endTime:D})),x++}}else for(let x=0;x<H[s.value].amount;x++){const[k,f]=c(x);(S||w(k,f))&&(S=!0,d.push({label:i(new Date(k),new Date(f)),startTime:k,endTime:f}))}return d};switch(s.value){case 0:return a(i=>z[i.getMonth()]);case 1:return a((i,d)=>{const S=z[i.getMonth()],x=z[d.getMonth()];return`${S}-${x}`});case 2:return a(i=>`${i.getFullYear()}`);default:return[]}}),g=v(()=>b.value.map(c=>c.label)),A=v(()=>{const c=[];return b.value.forEach(w=>{const a=h.value.filter(i=>{const d=i.date.getTime();return d>=w.startTime&&d<w.endTime});a.length?c.push({x:w.label,y:a.reduce((i,d)=>i+d.value,0)/a.length}):c.push({x:w.label,y:null})}),c});return{headers:g,filteredData:A}},W=t=>{const e=ue(),n=ie(),{isOwner:s,firebaseUser:o}=N(e),{publicUsers:h}=N(n),b=I(T.MONTHS),g=v(()=>L(t)),A=v(()=>{var f;return(f=g.value)!=null&&f.dateOfBirth?(new Date().getTime()-new Date(g.value.dateOfBirth).getTime())/(1e3*60*60*24*365.25):0}),c=v(()=>A.value*12),w=v(()=>A.value*52),a=v(()=>h.value.find(f=>{var D;return f.id===((D=g.value)==null?void 0:D.userId)})),i=v(()=>{var f,D;return((f=g.value)==null?void 0:f.userId)===((D=o.value)==null?void 0:D.uid)||s.value}),d=v(()=>{var f;return((f=g.value)==null?void 0:f.weightLog.map(D=>({date:new Date(D.date),value:D.weight})))??[]}),{headers:S,filteredData:x}=$e(d,b),k=v(()=>{var Y;if(!((Y=g.value)!=null&&Y.dateOfBirth)||!g.value.dewormingDate)return null;const f=new Date(g.value.dateOfBirth).getTime(),D=1e3*60*60*24*365.25,O=(P,F)=>new Date(f+D/P*F);switch(!0){case w.value<3:return O(52,3);case w.value<5:return O(52,5);case w.value<7:return O(52,7);case w.value<9:return O(52,9);case c.value<3:return O(12,3);case c.value<4:return O(12,4);case c.value<5:return O(12,5);case c.value<6:return O(12,6);default:{const P=(F,B)=>new Date(new Date(g.value.dewormingDate).getTime()+D/F*B);if(g.value.type==="cat")return P(12,g.value.insideCat?6:3);if(g.value.type==="dog")return P(12,3)}}});return{weightLogPeriod:b,petAgeYears:A,petAgeMonths:c,petAgeWeeks:w,petOwner:a,isMyPet:i,nextDeworming:k,chartHeaders:S,chartData:x}},Ye=t=>{var c,w;const e=v(()=>L(t)),{petAgeYears:n,petAgeMonths:s,petAgeWeeks:o}=W(e),h=v(()=>{var i,d;if(((i=e.value)==null?void 0:i.type)!=="cat"||!((d=e.value)!=null&&d.dateOfBirth))return null;const a=n.value;switch(!0){case a<1:return{value:"kitten",label:"Kitten (0-12 months)"};case(a>=1&&a<3):return{value:"junior",label:"Junior (1-2 years)"};case(a>=3&&a<7):return{value:"adult",label:"Adult (3-6 years)"};case(a>=7&&a<11):return{value:"mature",label:"Mature (7-10 years)"};case(a>=11&&a<15):return{value:"senior",label:"Senior (11-14 years)"};case a>=15:return{value:"geriatric",label:"Geriatric (15+ years)"};default:return null}}),b=v(()=>{var a,i,d;if(!((a=e.value)!=null&&a.dateOfBirth))return null;switch((i=h.value)==null?void 0:i.value){case"kitten":return s.value<=4?"kitten0.4":"kitten1";default:return(d=e.value)!=null&&d.castrated?"castrated":"default"}}),{requiredCaloriesByWeightAndAgeAndSize:g,requiredFoodDry:A}=De("average",((c=e.value)==null?void 0:c.weight)??"",b.value??"default",((w=e.value)==null?void 0:w.gender)??"male","35","default");return{catLifeStage:h,requiredCaloriesByWeightAndAgeAndSize:h?g:null,requiredFoodDry:h?A:null}},Fe=t=>{const e=v(()=>L(t)),{petAgeYears:n}=W(e);return{dogLifeStage:v(()=>{var h,b,g;if(((h=e.value)==null?void 0:h.type)!=="dog"||!((b=e.value)!=null&&b.dateOfBirth)||!((g=e.value)!=null&&g.breedSize))return null;const o=n.value;switch(e.value.breedSize){case"small":return o<1?{value:"puppy",label:"Puppy (0-12 months)"}:o<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:o<8?{value:"adult",label:"Adult (3-7 years)"}:o<11?{value:"mature",label:"Mature (8-10 years)"}:o<15?{value:"senior",label:"Senior (11-14 years)"}:{value:"geriatric",label:"Geriatric (15+ years)"};case"medium":return o<1?{value:"puppy",label:"Puppy (0-12 months)"}:o<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:o<7?{value:"adult",label:"Adult (3-6 years)"}:o<10?{value:"mature",label:"Mature (7-9 years)"}:o<13?{value:"senior",label:"Senior (10-12 years)"}:{value:"geriatric",label:"Geriatric (13+ years)"};case"large":return o<1?{value:"puppy",label:"Puppy (0-12 months)"}:o<3?{value:"young_adult",label:"Young Adult (1-2 years)"}:o<6?{value:"adult",label:"Adult (3-5 years)"}:o<9?{value:"mature",label:"Mature (6-8 years)"}:o<12?{value:"senior",label:"Senior (9-11 years)"}:{value:"geriatric",label:"Geriatric (12+ years)"};case"giant":return o<1?{value:"puppy",label:"Puppy (0-12 months)"}:o<2?{value:"young_adult",label:"Young Adult (1-1.5 years)"}:o<5?{value:"adult",label:"Adult (2-4 years)"}:o<8?{value:"mature",label:"Mature (5-7 years)"}:o<10?{value:"senior",label:"Senior (8-9 years)"}:{value:"geriatric",label:"Geriatric (10+ years)"};default:return null}})}},Le={class:"grid grid-cols-6 mb-5 gap-5"},Re={class:"my-5"},je={class:"table-auto text-left"},He={key:0},Ie={key:1},Ne={key:2},Ve={key:3},ze={key:4},qe={key:5},We={key:6},Ge={key:7},Ue={key:8},Je={key:9},Ke={class:"my-5"},Ze={key:0,class:"flex flex-wrap md:flex-nowrap gap-3 justify-around my-5 md:mb-0"},Qe={class:"ps-5 md:ps-10 flex flex-col gap-3"},Xe={key:0,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},et={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300"},tt={key:1,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},at={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},rt={key:2,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},nt={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},lt={key:0,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},st={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300"},ot={key:2,class:"flex flex-wrap sm:flex-nowrap gap-1 sm:gap-3 justify-around"},ut={class:"w-full sm:w-1/2 md:w-2/3 text-neutral-300 sm:place-self-end"},it={class:"flex justify-center gap-3"},dt={key:4,class:"w-full text-neutral-300"},ct={class:"mt-10 flex gap-3"},pt=te({__name:"Pet",setup(t){const e=pe(),n=fe(),s=de(),o=ce(),{pets:h}=N(s),{routeLoading:b}=N(o),{deletePet:g}=s,A=I(!1),c=I(!1),w=v(()=>e.params.petId),a=v(()=>h.value.find(B=>B.id===w.value)),{weightLogPeriod:i,petOwner:d,isMyPet:S,nextDeworming:x,chartHeaders:k,chartData:f}=W(a),{catLifeStage:D,requiredCaloriesByWeightAndAgeAndSize:O,requiredFoodDry:Y}=Ye(a),{dogLifeStage:P}=Fe(a),F=async B=>{await g(B),n.push({name:V.PET_OVERVIEW})};return(B,r)=>(p(),q(be,null,{content:Z(()=>[l("div",Le,[M($,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:u(V).PET_OVERVIEW,loading:u(b)===u(V).PET_OVERVIEW,label:"Back to all pets",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),a.value?(p(),q(re,{key:0,class:"!bg-primary-500 !bg-opacity-35 my-5",title:a.value.name,"title-props":{class:"text-3xl ms-5 md:text-5xl"},avatar:a.value.avatar??void 0,"avatar-props":{class:"h-20 w-20 md:h-32 md:w-32"}},{default:Z(()=>{var G,U,J;return[l("div",Re,[l("table",je,[l("tbody",null,[r[18]||(r[18]=l("tr",{class:"thead"},[l("th",{class:"text-xl"},"Details")],-1)),u(d)?(p(),m("tr",He,[r[8]||(r[8]=l("th",null,"Owner:",-1)),l("td",null,_(u(d).displayName),1)])):y("",!0),a.value.dateOfBirth?(p(),m("tr",Ie,[r[9]||(r[9]=l("th",null,"Date of birth:",-1)),l("td",null,_(u(Q)(a.value.dateOfBirth)),1)])):y("",!0),a.value.type?(p(),m("tr",Ne,[r[10]||(r[10]=l("th",null,"Type:",-1)),l("td",null,_((G=u(me).find(({value:C})=>{var E;return C===((E=a.value)==null?void 0:E.type)}))==null?void 0:G.label),1)])):y("",!0),a.value.breed?(p(),m("tr",Ve,[r[11]||(r[11]=l("th",null,"Breed:",-1)),l("td",null,_(a.value.breed),1)])):y("",!0),a.value.breedSize&&a.value.type==="dog"?(p(),m("tr",ze,[r[12]||(r[12]=l("th",null,"Breed size:",-1)),l("td",null,_((U=u(ve).find(({value:C})=>{var E;return C===((E=a.value)==null?void 0:E.breedSize)}))==null?void 0:U.label),1)])):y("",!0),a.value.gender?(p(),m("tr",qe,[r[13]||(r[13]=l("th",null,"Gender:",-1)),l("td",null,_((J=u(ge).find(({value:C})=>{var E;return C===((E=a.value)==null?void 0:E.gender)}))==null?void 0:J.label),1)])):y("",!0),r[19]||(r[19]=l("tr",{class:"thead"},[l("th",{class:"text-xl"},"Health")],-1)),a.value.weight?(p(),m("tr",We,[r[14]||(r[14]=l("th",null,"Weight:",-1)),l("td",null,_(a.value.weight)+"kg",1)])):y("",!0),typeof a.value.insideCat=="boolean"?(p(),m("tr",Ge,[r[15]||(r[15]=l("th",null,"Inside Cat:",-1)),l("td",null,_(a.value.insideCat?"Yes":"No"),1)])):y("",!0),a.value.castrated!==void 0?(p(),m("tr",Ue,[r[16]||(r[16]=l("th",null,"Castrated:",-1)),l("td",null,_(a.value.castrated?"Yes":"No"),1)])):y("",!0),a.value.dewormingDate?(p(),m("tr",Je,[r[17]||(r[17]=l("th",null,"Last deworming:",-1)),l("td",null,_(u(Q)(a.value.dewormingDate)),1)])):y("",!0)])])]),l("div",Ke,[a.value.dateOfBirth?(p(),m("div",Ze,[M(he,{class:"w-full md:w-3/4 text-neutral-300 bg-neutral-900 rounded-secondary",time:new Date(a.value.dateOfBirth).getTime(),direction:"up"},null,8,["time"])])):y("",!0),r[25]||(r[25]=l("p",{class:"mt-5 text-xl font-bold"},"Statistics",-1)),l("div",Qe,[a.value.type==="cat"?(p(),m(j,{key:0},[u(D)?(p(),m("div",Xe,[r[20]||(r[20]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Life stage:",-1)),l("p",et,_(u(D).label),1)])):y("",!0),u(O)?(p(),m("div",tt,[r[21]||(r[21]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Required energy per day:",-1)),l("p",at,_(u(O).toFixed(1))+" kcal ",1)])):y("",!0),u(Y)?(p(),m("div",rt,[r[22]||(r[22]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Required dry food per day:",-1)),l("p",nt,_(u(Y).toFixed(1))+" g ",1)])):y("",!0)],64)):a.value.type==="dog"?(p(),m(j,{key:1},[u(P)?(p(),m("div",lt,[r[23]||(r[23]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Life stage:",-1)),l("p",st,_(u(P).label),1)])):y("",!0)],64)):y("",!0),u(x)?(p(),m("div",ot,[r[24]||(r[24]=l("p",{class:"w-full sm:w-1/2 md:w-1/3 font-bold"},"Next deworming:",-1)),l("p",ut,_(u(ye)(u(x))),1)])):y("",!0),a.value.weightLog.length?(p(),m(j,{key:3},[l("div",it,[M($,{type:"neutral",label:"Months",outlined:u(i)===u(T).MONTHS,onClick:r[0]||(r[0]=C=>i.value=u(T).MONTHS)},null,8,["outlined"]),M($,{type:"neutral",label:"Half Years",outlined:u(i)===u(T).YEARS_HALF,onClick:r[1]||(r[1]=C=>i.value=u(T).YEARS_HALF)},null,8,["outlined"]),M($,{type:"neutral",label:"Years",outlined:u(i)===u(T).YEARS,onClick:r[2]||(r[2]=C=>i.value=u(T).YEARS)},null,8,["outlined"])]),M(Be,{headers:u(k),datasets:[{label:`${a.value.name}'s weight (kg)`,fill:!1,borderColor:"red",yAxisID:"y",tension:.4,data:u(f),spanGaps:!0}]},null,8,["headers","datasets"])],64)):y("",!0),a.value.type==="other"?(p(),m("p",dt," Nothing to show yet. ")):y("",!0)])]),u(S)?(p(),m(j,{key:0},[l("div",ct,[M($,{label:"Edit",outlined:"",onClick:r[3]||(r[3]=C=>A.value=!0)}),M($,{label:"Delete",type:"danger",outlined:"",onClick:r[4]||(r[4]=C=>c.value=!0)})]),M(Se,{"is-open":A.value,"original-pet":a.value??null,onClose:r[5]||(r[5]=C=>A.value=!1)},null,8,["is-open","original-pet"]),M(we,{"is-open":c.value,title:"Delete Pet",description:"Are you sure you want to delete your pet?","confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:r[6]||(r[6]=C=>F(a.value.id)),onCancel:r[7]||(r[7]=C=>c.value=!1)},null,8,["is-open"])],64)):y("",!0)]}),_:1},8,["title","avatar"])):y("",!0)]),_:1}))}}),kt=_e(pt,[["__scopeId","data-v-65e9a212"]]);export{kt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
