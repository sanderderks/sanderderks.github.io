import{_ as m}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_ as d}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";import{_ as A}from"./c-Page.vue_vue_type_script_setup_true_lang-GfuWZhDu.js";import{e as b,f as O,av as R,g as V,h as D,s as c,r as N,M as B,l as r,q as v,D as f,k as e,m as i,w as g,n as o,p as l,O as j,E as M,$ as x,R as n,G as P}from"../bundle.js";import{_ as G}from"./c-PetDialog.vue_vue_type_script_setup_true_lang-DQUnsrDB.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-DZAGepnF.js";import"./c-DateField-DIkLlrgD.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-FileUpload.vue_vue_type_script_setup_true_lang-Be1mpsKU.js";import"./c-TextField.vue_vue_type_script_setup_true_lang-BcDK9ofr.js";import"./c-validation-DokkLKHB.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-DP8PD6e8.js";import"./c-accordiontab.esm-fhxUpLlW.js";import"./c-vuedraggable.umd-rmh2Hygz.js";const W={class:"flex flex-wrap gap-3 mt-3 mb-5"},Y={key:1,class:"text-neutral-300"},q={class:"flex flex-wrap gap-3 justify-center"},z={class:"w-full flex justify-center"},F={key:1,class:"flex justify-center"},J=b({__name:"Pets",setup(h){const _=O(),u=R(),k=V(),E=D(),{pets:y,viewAllPets:a,notMyPets:$,visiblePets:C}=c(u),{routeLoading:S,routeLoadingId:I}=c(k),{isLoggedIn:L}=c(E),{fetchPets:T}=u,p=N(!1);return B(a,w=>{w&&$.value.length===0&&T(!0)},{immediate:!0}),(w,t)=>(r(),v(A,null,{content:f(()=>[e(L)?(r(),i(g,{key:0},[o(m,{class:"!bg-primary-500 !bg-opacity-35 my-5",title:e(a)?"All Pets":"Your Pets",description:e(a)?"Check out all these pets!":"Welcome to your Pet Overview!"},{default:f(()=>[l("div",W,[e(y).length?(r(!0),i(g,{key:0},j(e(C),s=>(r(),v(m,{key:s.id,class:M(["w-fit !min-h-[52px] h-fit !py-0 !pb-1 !p-5 bg-opacity-75 border border-neutral-400 !rounded-primary hover:!rounded-2xl hover:scale-110 will-change-transform transition-[color,border-radius,transform] duration-150 ease-in-out",[{"!ps-1":s.avatar},e(x)[e(y).indexOf(s)%e(x).length].background]]),title:s.name,"title-props":{class:"!text-md text-white font-normal mt-2"},avatar:s.avatar??void 0,"avatar-props":{class:["mt-1 h-11 w-11",{"animate-spin":e(S)===e(n).PET_DETAILS&&e(I)===s.id}]},route:{name:e(n).PET_DETAILS,params:{petId:s.id}},avatarRoute:{name:e(n).PET_DETAILS,params:{petId:s.id}}},null,8,["class","title","avatar","avatar-props","route","avatarRoute"]))),128)):(r(),i("p",Y," You don't have any pets yet. "))]),l("div",q,[l("div",z,[o(d,{class:"w-1/2 md:w-1/4 rounded-r-none",type:"tertiary",outlined:!e(a),label:"View all pets",onClick:t[0]||(t[0]=s=>a.value=!0)},null,8,["outlined"]),o(d,{class:"w-1/2 md:w-1/4 rounded-l-none",type:"tertiary",outlined:e(a),label:"View your pets",onClick:t[1]||(t[1]=s=>a.value=!1)},null,8,["outlined"])]),o(d,{class:"w-full md:w-1/2",label:"Add Pet",type:"green",outlined:"",onClick:t[2]||(t[2]=s=>p.value=!0)})])]),_:1},8,["title","description"]),o(G,{"is-open":p.value,"original-pet":null,onClose:t[3]||(t[3]=s=>p.value=!1)},null,8,["is-open"])],64)):(r(),i("div",F,[o(m,{class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:f(()=>[t[5]||(t[5]=P(" Please ")),l("a",{class:"cursor-pointer",onClick:t[4]||(t[4]=s=>e(_).push({name:e(n).LOGIN,params:{redirect:JSON.stringify({name:e(n).PET_OVERVIEW})}}))}," Login "),t[6]||(t[6]=P(" to view the pets on this website. "))]),_:1})]))]),_:1}))}}),le=b({__name:"Pets",setup(h){return(_,u)=>(r(),v(J))}});export{le as default};
