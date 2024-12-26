import{a as u,_ as P}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{_ as d}from"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import{_ as F}from"./c-TextField.vue_vue_type_script_setup_true_lang-aj-wueri.js";import{e as G,h as z,g as E,s as y,a as N,q as n,D as V,f as B,l as s,p as f,n as l,k as a,t as I,G as S,R as i}from"../bundle.js";import{u as T}from"./c-useCatCalc-6gobbMX9.js";import{R as t}from"./c-validation-DokkLKHB.js";const $={class:"flex flex-col items-center content-center"},Y=G({__name:"CatCalc",setup(L){const x=B(),w=z(),b=E(),{isLoggedIn:R}=y(w),{routeLoading:W}=y(b),e=N({calculator:{value:"average",error:""},catWeigth:{value:"",error:""},catAge:{value:"default",error:""},catGender:{value:"male",error:""},catSize:{value:"35",error:""},catFoodDry:{value:"default",error:""},catFoodWet:{value:"",error:""},catFoodSnax:{value:"",error:""},catFoodSnaxPercentage:{value:"5",error:""}}),{calculatorOptions:c,catAgeOptions:C,catGenderOptions:q,catSizeOptions:U,catFoodDryOptions:A,catFoodWetOptions:k,catFoodSnaxOptions:D,requiredCaloriesByWeightAndAgeAndSize:O,requiredFoodDry:g,requiredFoodWet:m,requiredFoodSnax:p}=T(()=>e.calculator.value,()=>e.catWeigth.value,()=>e.catAge.value,()=>e.catGender.value,()=>e.catSize.value,()=>e.catFoodDry.value,()=>e.catFoodWet.value,()=>e.catFoodSnax.value,()=>e.catFoodSnaxPercentage.value);return(M,r)=>(s(),n(u,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Cat Calculator",description:"Do a Cat Calculation!"},{default:V(()=>{var v;return[f("div",$,[l(d,{class:"w-3/4 md:w-1/2",name:"calculator",label:"Calculation based on",modelValue:e.calculator.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e.calculator.value=o),error:e.calculator.error,"onUpdate:error":r[1]||(r[1]=o=>e.calculator.error=o),options:a(c),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(F,{class:"w-3/4 md:w-1/2",name:"catWeigth",label:"Cat Weight (kg)",modelValue:e.catWeigth.value,"onUpdate:modelValue":r[2]||(r[2]=o=>e.catWeigth.value=o),error:e.catWeigth.error,"onUpdate:error":r[3]||(r[3]=o=>e.catWeigth.error=o),rules:[a(t).Required,a(t).Numeric],"min-value":1,"max-value":10,"input-props":{type:"number"}},null,8,["modelValue","error","rules"]),l(d,{class:"w-3/4 md:w-1/2",name:"catAge",label:"Cat Age",modelValue:e.catAge.value,"onUpdate:modelValue":r[4]||(r[4]=o=>e.catAge.value=o),error:e.catAge.error,"onUpdate:error":r[5]||(r[5]=o=>e.catAge.error=o),options:a(C),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(d,{class:"w-3/4 md:w-1/2",name:"catGender",label:"Cat Gender",modelValue:e.catGender.value,"onUpdate:modelValue":r[6]||(r[6]=o=>e.catGender.value=o),error:e.catGender.error,"onUpdate:error":r[7]||(r[7]=o=>e.catGender.error=o),options:a(q),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(d,{class:"w-3/4 md:w-1/2",name:"catSize",label:"Cat Shoulder Height",modelValue:e.catSize.value,"onUpdate:modelValue":r[8]||(r[8]=o=>e.catSize.value=o),error:e.catSize.error,"onUpdate:error":r[9]||(r[9]=o=>e.catSize.error=o),options:a(U),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(u,{class:"w-full md:w-2/3 my-5 border border-neutral-400 !rounded-primary",description:"Required energy per day: "+a(O).toFixed(1)+" kcal"},null,8,["description"]),l(d,{class:"w-3/4 md:w-1/2",name:"catFoodDry",label:"Dry Food",modelValue:e.catFoodDry.value,"onUpdate:modelValue":r[10]||(r[10]=o=>e.catFoodDry.value=o),error:e.catFoodDry.error,"onUpdate:error":r[11]||(r[11]=o=>e.catFoodDry.error=o),options:a(A),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(d,{class:"w-3/4 md:w-1/2",name:"catFoodWet",label:"Wet Food (25%)",modelValue:e.catFoodWet.value,"onUpdate:modelValue":r[12]||(r[12]=o=>e.catFoodWet.value=o),error:e.catFoodWet.error,"onUpdate:error":r[13]||(r[13]=o=>e.catFoodWet.error=o),options:a(k),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),l(d,{class:"w-3/4 md:w-1/2",name:"catFoodSnax",label:"Snacks",modelValue:e.catFoodSnax.value,"onUpdate:modelValue":r[14]||(r[14]=o=>e.catFoodSnax.value=o),error:e.catFoodSnax.error,"onUpdate:error":r[15]||(r[15]=o=>e.catFoodSnax.error=o),options:a(D),rules:[a(t).Required]},null,8,["modelValue","error","options","rules"]),e.catFoodSnax.value?(s(),n(F,{key:0,class:"w-3/4 md:w-1/2",name:"catFoodSnaxPercentage",label:"Snacks Percentage",modelValue:e.catFoodSnaxPercentage.value,"onUpdate:modelValue":r[16]||(r[16]=o=>e.catFoodSnaxPercentage.value=o),error:e.catFoodSnaxPercentage.error,"onUpdate:error":r[17]||(r[17]=o=>e.catFoodSnaxPercentage.error=o),rules:[a(t).Required,a(t).Numeric],"min-value":1,"max-value":10,"input-props":{type:"number"}},null,8,["modelValue","error","rules"])):I("",!0),l(u,{class:"w-full md:w-2/3 my-5 border border-neutral-400 bg-primary-600 bg-opacity-25 !rounded-primary",title:"Result","sub-title":"Based on constants from "+((v=a(c).find(o=>o.value===e.calculator.value))==null?void 0:v.label),description:["Required dry food per day: "+a(g).toFixed(1)+" g","","","Required dry food per meal: "+(a(g)/(a(m)?2:3)).toFixed(1)+" g",...a(m)?["Required wet food per day: "+a(m).toFixed(1)+" g"]:[],...a(p)?["Allowed snacks per day: "+a(p).toFixed(a(p)<1?1:0)+" snacks"]:[],"","","","^ Mogu approved!"]},null,8,["sub-title","description"]),a(R)?(s(),n(P,{key:2,label:"Create a profile for your cat!",loading:a(W)===a(i).PET_OVERVIEW,route:a(i).PET_OVERVIEW},null,8,["loading","route"])):(s(),n(u,{key:1,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:V(()=>[r[19]||(r[19]=S(" Please ")),f("a",{class:"cursor-pointer",onClick:r[18]||(r[18]=o=>a(x).push({name:a(i).LOGIN,params:{redirect:JSON.stringify({name:a(i).PET_OVERVIEW})}}))}," Login "),r[20]||(r[20]=S(" to create a profile for your cat! "))]),_:1}))])]}),_:1}))}});export{Y as default};