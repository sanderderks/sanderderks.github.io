import{a as d,_ as n}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{_ as b}from"./c-Page.vue_vue_type_script_setup_true_lang-BGhe9uNp.js";import{e as C,av as E,g as $,s as c,r as v,c as h,q as i,D as f,l as o,n as r,p as u,k as s,m as _,O as S,E as T,R as p,w as I,t as L}from"../bundle.js";import{_ as A}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-BLk9_ru7.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-C6J-GyL9.js";import"./c-DateField.vue_vue_type_script_setup_true_lang-ykegzBN_.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-DbzAxtwG.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-aj-wueri.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import"./c-accordiontab.esm-CX-DBziB.js";import"./c-vuedraggable.umd-CzRFyTns.js";const D={class:"flex flex-wrap gap-3 mt-3 mb-5"},R={key:1,class:"text-neutral-300"},V={class:"flex flex-wrap gap-3 justify-center"},B={class:"w-full mt-5 flex justify-center"},U=C({__name:"Pets",setup(N){const y=E(),w=$(),{pets:m,myPets:g}=c(y),{routeLoading:k,routeLoadingId:x}=c(w),a=v(!1),l=v(!1),P=h(()=>a.value?m.value:g.value);return(O,t)=>(o(),i(b,null,{content:f(()=>[r(d,{class:"!bg-primary-500 !bg-opacity-35 my-5",title:"Your Pets",description:a.value?"Check out all these pets!":"Welcome to your Pet Overview!"},{default:f(()=>[u("div",D,[s(m).length?(o(!0),_(I,{key:0},S(P.value,e=>(o(),i(d,{key:e.id,class:T(["w-fit !min-h-[52px] h-fit !py-0 !pb-1 !p-5 bg-red-600 bg-opacity-75 border border-neutral-400 !rounded-primary",{"!ps-1":e.avatar}]),title:e.name,"title-props":{class:"!text-md text-white font-normal mt-2"},avatar:e.avatar??void 0,"avatar-props":{class:["mt-1 h-11 w-11",{"animate-spin":s(k)===s(p).PET_DETAILS&&s(x)===e.id}]},route:{name:s(p).PET_DETAILS,params:{petId:e.id}},avatarRoute:{name:s(p).PET_DETAILS,params:{petId:e.id}}},null,8,["class","title","avatar","avatar-props","route","avatarRoute"]))),128)):(o(),_("p",R," You don't have any pets yet. "))]),u("div",V,[u("div",B,[r(n,{class:"w-1/2 md:w-1/4 rounded-r-none",type:"tertiary",outlined:!a.value,label:"View all pets",onClick:t[0]||(t[0]=e=>a.value=!0)},null,8,["outlined"]),r(n,{class:"w-1/2 md:w-1/4 rounded-l-none",type:"tertiary",outlined:a.value,label:"View your pets",onClick:t[1]||(t[1]=e=>a.value=!1)},null,8,["outlined"])]),a.value?L("",!0):(o(),i(n,{key:0,class:"w-full md:w-1/2",label:"Add Pet",type:"green",outlined:"",onClick:t[2]||(t[2]=e=>l.value=!0)}))])]),_:1},8,["description"]),r(A,{"is-open":l.value,"original-pet":null,onClose:t[3]||(t[3]=e=>l.value=!1)},null,8,["is-open"])]),_:1}))}});export{U as default};
