import{e as y,g as k,s as v,l as s,m as n,p as t,H as g,k as e,a7 as N,n as u,D as C,E as b,R as p,G as L,h as j,w,O as D,q as x,t as H,u as R,A as B,ao as S,ap as O,ac as V,r as $,c as E,af as T,o as z,M as G,z as M,N as U}from"../bundle.js";import{_ as h}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BnZmzn5o.js";const Z={class:"bg-black text-white shadow-md py-4"},F={class:"container mx-auto text-center"},q=y({__name:"Footer",setup(f){const l=k(),{content:o}=v(l);return(d,r)=>(s(),n("footer",Z,[t("div",F,[t("p",null,"© "+g(new Date().getFullYear()+" "+e(o).footerCopyright),1)])]))}});function P(f,l){return s(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z","clip-rule":"evenodd"}),t("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"})])}function I(f,l){return s(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z","clip-rule":"evenodd"})])}const Y={class:"flex justify-between max-sm:pt-10"},J={class:"hidden sm:block w-full sm:min-w-fit"},K=["src","alt"],Q={class:"w-fit sm:max-w-1/2"},W={class:"text-title-primary"},X={class:"text-title-secondary"},ee={class:"text-title-tertiary absolute sm:relative mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap"},te={class:"mt-2 flex items-center whitespace-nowrap me-6"},oe={class:"mt-2 flex items-center whitespace-nowrap"},se={class:"sm:hidden min-w-fit mt-3"},ne=["src","alt"],A=y({__name:"HeaderContent",setup(f){const l=k(),{profile:o,content:d,routeLoading:r}=v(l);return(i,m)=>{const c=N("RouterLink");return s(),n("div",Y,[t("div",J,[u(c,{to:{name:e(p).HOME}},{default:C(()=>[t("img",{class:b(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":e(r)===e(p).HOME}]),src:e(d).avatarUrl,alt:e(o).name},null,10,K)]),_:1},8,["to"])]),t("div",Q,[t("h1",W,g(e(o).name),1),t("h2",X,g(e(o).service),1),t("div",ee,[t("div",te,[u(e(P),{class:"mr-1.5 h-5 w-5 text-neutral-400"}),L(" "+g(e(o).role),1)]),t("div",oe,[u(e(I),{class:"mr-1.5 h-5 w-5 text-neutral-400"}),L(" "+g(e(o).location.city)+", "+g(e(o).location.country),1)])])]),t("div",se,[u(c,{to:{name:e(p).HOME}},{default:C(()=>[t("img",{class:b(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":e(r)===e(p).HOME}]),src:e(d).avatarUrl,alt:e(o).name},null,10,ne)]),_:1},8,["to"])])])}}}),le={key:0,class:"grid grid-flow-row grid-cols-3 gap-2"},ae=y({__name:"NavigationMenuDesktop",setup(f){const l=j(),o=k(),{isLoggedIn:d,isLogoutLoading:r}=v(l),{visibleMenuItems:i,routeLoading:m}=v(o);return(c,_)=>e(i).length?(s(),n("div",le,[(s(!0),n(w,null,D(e(i),a=>(s(),x(h,{class:"hidden lg:flex justify-center py-[0.2rem]","active-class":"button-secondary",type:"secondary",outlined:"",url:a.url,route:a.route,loading:a.loading||e(m)===a.route,label:a.name},null,8,["url","route","loading","label"]))),256)),e(d)?(s(),x(h,{key:0,class:"hidden lg:flex justify-center py-[0.2rem]",type:"danger",outlined:"",loading:e(r),onClick:e(l).logout,label:"Logout"},null,8,["loading","onClick"])):(s(),x(h,{key:1,class:"hidden lg:flex justify-center py-[0.2rem]","active-class":"button-primary",type:"primary",outlined:"",route:e(p).LOGIN,loading:e(m)===e(p).LOGIN,label:"Login"},null,8,["route","loading"]))])):H("",!0)}}),re={class:"absolute z-10 top-0 right-auto w-1/3 mt-0 mb-8 p-4 text-neutral-300 bg-neutral-900 bg-opacity-50 rounded-b-secondary"},ie={key:0,class:"hidden lg:flex justify-center mb-4"},ce={class:"hidden lg:block w-4/5 space-y-2"},de={class:"hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg"},ue={class:"ms-3 flex items-center justify-center w-full md:w-3/5 lg:w-1/5"},pe={key:1},me={class:"hidden lg:grid col-span-5 space-y-2 mb-5"},fe={class:"font-semibold text-base first:font-bold first:text-lg"},_e=y({__name:"NavigationCardDesktop",setup(f){const l=R(),o=k(),d=B(),{currentUser:r}=v(d),{content:i}=v(o);return(m,c)=>{const _=N("RouterLink");return s(),n("div",re,[e(r)?(s(),n("div",ie,[t("div",ce,[(s(!0),n(w,null,D(e(i).headerDescriptionUser,a=>(s(),n("p",de,g(a.replace("%USER%",e(r).firstName+(e(r).lastName?" "+e(r).lastName:""))),1))),256))]),t("div",ue,[u(_,{to:{name:e(p).DASHBOARD}},{default:C(()=>[t("i",{class:b(["pi pi-user px-2 py-1 border rounded-primary hover:rounded-2xl hover:scale-95 border-secondary-600 text-neutral-300 will-change-transform transition-[color,border-radius,transform] duration-150 ease-in-out",{"bg-secondary-600 bg-opacity-75":e(l).name===e(p).DASHBOARD}]),style:{"font-size":"3rem"}},null,2)]),_:1},8,["to"])])])):(s(),n("div",pe,[t("div",me,[(s(!0),n(w,null,D(e(i).headerDescriptionGuest,a=>(s(),n("p",fe,g(a),1))),256))])])),u(ae)])}}}),ge={class:"w-3/4 sm:w-1/3 sm:mr-10 mt-12 p-4 py-8 sm:max-h-[80vh] overflow-y-auto bg-neutral-900 border border-primary-600 rounded-primary"},he=y({__name:"NavigationDropDownMobile",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(f){const l=j(),o=k(),{isLoggedIn:d}=v(l),{visibleMenuItems:r,routeLoading:i}=v(o),{logout:m}=l;return(c,_)=>(s(),n(w,null,[S(t("div",{class:"lg:hidden w-screen h-screen z-10 bg-neutral-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:_[0]||(_[0]=(...a)=>c.toggle&&c.toggle(...a))},null,512),[[O,c.isOpen]]),S(t("div",{class:"fixed flex justify-center sm:justify-end lg:hidden z-20 w-full",onClick:_[1]||(_[1]=V((...a)=>c.toggle&&c.toggle(...a),["self"]))},[t("div",ge,[(s(!0),n(w,null,D(e(r),a=>(s(),x(h,{class:"w-full text-lg rounded-none first:rounded-t-primary","active-class":"button-secondary",type:"secondary",outlined:"",list:"",url:a.url,route:a.route,loading:a.loading||e(i)===a.route,label:a.name},null,8,["url","route","loading","label"]))),256)),e(d)?(s(),n(w,{key:0},[u(h,{class:"w-full text-lg rounded-none first:rounded-t-primary","active-class":"button-tertiary",type:"secondary",outlined:"",list:"",route:e(p).DASHBOARD,loading:e(i)===e(p).DASHBOARD,label:"Dashboard"},null,8,["route","loading"]),u(h,{class:"w-full text-lg rounded-none rounded-b-primary first:rounded-b-primary",outlined:"",list:"",type:"danger",label:"Logout",onClick:e(m)},null,8,["onClick"])],64)):(s(),x(h,{key:1,class:"w-full text-lg rounded-none rounded-b-primary first:rounded-b-primary","active-class":"button-primary",type:"primary",outlined:"",list:"",route:e(p).LOGIN,loading:e(i)===e(p).LOGIN,label:"Login"},null,8,["route","loading"]))])],512),[[O,c.isOpen]])],64))}}),ve={key:0,class:"flex justify-between"},ye=y({__name:"NavigationMenuMobile",setup(f){const l=$(),o=$(!1),d=$(!1),r=E(()=>o.value||d.value),i=()=>{o.value=!o.value,o.value&&T(()=>{var m;(m=l.value)==null||m.scrollIntoView({behavior:"smooth",block:"center"})})};return(m,c)=>(s(),n("div",{ref_key:"dropdown",ref:l,class:"dropdown absolute w-full left-0 top-5 flex justify-end"},[t("div",{class:"fixed w-full sm:w-1/3 px-10",onMouseover:c[0]||(c[0]=_=>d.value=!0),onMouseleave:c[1]||(c[1]=_=>d.value=!1)},[t("div",{class:b(["flex animation",o.value?"justify-center":"justify-end"])},[u(h,{class:b(["bg-black bg-opacity-75",o.value?"w-full":"w-fit hover:w-full"]),outlined:"",icon:r.value?void 0:"pi pi-align-justify",onClick:i},{default:C(()=>[r.value?(s(),n("div",ve,[t("i",{class:b(["pi pi-angle-down animation place-self-center mr-2",{"rotate-180":o.value}])},null,2),c[2]||(c[2]=t("p",null,"Menu",-1))])):H("",!0)]),_:1},8,["class","icon"])],2)],32),u(he,{"is-open":o.value,toggle:()=>o.value=!o.value},null,8,["is-open","toggle"])],512))}}),be={class:"sm:flex sm:items-start sm:justify-between mb-20"},we={class:"hidden lg:flex justify-end"},xe={class:"lg:hidden w-full sm:w-1/3"},ke=y({__name:"Header",setup(f){return(l,o)=>(s(),n("div",be,[u(A,{class:"hidden sm:block"}),t("div",we,[u(_e)]),t("div",xe,[u(ye)]),u(A,{class:"sm:hidden"})]))}}),$e={class:"min-h-screen bg-gradient-to-b from-primary-900 to-black via-neutral-800"},Ce={class:b(["container pb-5 rounded-b-secondary","text-white bg-gradient-to-b from-transparent from-10% via-neutral-900 to-black","bg-opacity-50 border-opacity-100"])},Le=y({__name:"Page",props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(f){const l=f,o=R(),d=$(),r=()=>{l.scrollToContent&&U(d.value)};return z(()=>{r()}),G(()=>o.fullPath,()=>{r()}),(i,m)=>(s(),n(w,null,[t("div",$e,[t("div",Ce,[t("header",null,[i.$slots.header?M(i.$slots,"header",{key:0}):(s(),x(ke,{key:1}))]),t("main",null,[t("div",{ref_key:"content",ref:d},[M(i.$slots,"content")],512)])])]),t("footer",null,[i.$slots.footer?M(i.$slots,"footer",{key:0}):(s(),x(q,{key:1}))])],64))}});export{Le as _};
