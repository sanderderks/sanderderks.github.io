import{e as C,g as L,s as v,l as o,m as l,p as t,H as y,k as e,a7 as E,n as u,D as M,E as _,R as m,G as H,h as N,ao as R,ap as B,w as k,O as A,q as $,ac as G,r as S,c as Z,t as U,af as F,u as T,A as z,o as I,am as q,M as P,z as j,N as Y}from"../bundle.js";import{_ as w}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";const J={class:"bg-black text-white shadow-md py-4"},K={class:"container mx-auto text-center"},Q=C({__name:"Footer",setup(g){const r=L(),{content:a}=v(r);return(f,c)=>(o(),l("footer",J,[t("div",K,[t("p",null,"© "+y(new Date().getFullYear()+" "+e(a).footerCopyright),1)])]))}});function W(g,r){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z","clip-rule":"evenodd"}),t("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"})])}function X(g,r){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z","clip-rule":"evenodd"})])}const ee={class:"flex justify-between"},te={class:"hidden sm:block w-full sm:min-w-fit"},oe=["src","alt"],se={class:"w-fit sm:max-w-1/2"},ne={class:"text-title-primary"},le={class:"text-title-secondary"},ae={class:"text-title-tertiary absolute sm:relative mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap"},re={class:"mt-2 flex items-center whitespace-nowrap me-6"},ie={class:"mt-2 flex items-center whitespace-nowrap"},ce={class:"sm:hidden min-w-fit mt-3"},de=["src","alt"],V=C({__name:"HeaderContent",setup(g){const r=L(),{profile:a,content:f,routeLoading:c}=v(r);return(d,h)=>{const i=E("RouterLink");return o(),l("div",ee,[t("div",te,[u(i,{to:{name:e(m).HOME}},{default:M(()=>[t("img",{class:_(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":e(c)===e(m).HOME}]),src:e(f).avatarUrl,alt:e(a).name},null,10,oe)]),_:1},8,["to"])]),t("div",se,[t("h1",ne,y(e(a).name),1),t("h2",le,y(e(a).service),1),t("div",ae,[t("div",re,[u(e(W),{class:"mr-1.5 h-5 w-5 text-neutral-400"}),H(" "+y(e(a).role),1)]),t("div",ie,[u(e(X),{class:"mr-1.5 h-5 w-5 text-neutral-400"}),H(" "+y(e(a).location.city)+", "+y(e(a).location.country),1)])])]),t("div",ce,[u(i,{to:{name:e(m).HOME}},{default:M(()=>[t("img",{class:_(["h-32 w-32 md:h-48 md:w-48 rounded-full animation-scale mb-4 cursor-pointer",{"animate-spin":e(c)===e(m).HOME}]),src:e(f).avatarUrl,alt:e(a).name},null,10,de)]),_:1},8,["to"])])])}}}),ue={class:"w-3/4 sm:w-1/3 sm:mr-10 mt-12 p-4 py-8 sm:max-h-[80vh] overflow-y-auto bg-neutral-900 border border-primary-600 rounded-primary"},pe=C({__name:"NavigationDropDown",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(g){const r=N(),a=L(),{isLoggedIn:f}=v(r),{visibleMenuItems:c,routeLoading:d}=v(a),{logout:h}=r;return(i,s)=>(o(),l(k,null,[R(t("div",{class:"lg:hidden w-screen h-screen z-10 bg-neutral-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:s[0]||(s[0]=(...n)=>i.toggle&&i.toggle(...n))},null,512),[[B,i.isOpen]]),R(t("div",{class:"fixed flex justify-center sm:justify-end lg:hidden z-20 w-full",onClick:s[1]||(s[1]=G((...n)=>i.toggle&&i.toggle(...n),["self"]))},[t("div",ue,[(o(!0),l(k,null,A(e(c),n=>(o(),$(w,{class:"w-full text-lg rounded-none first:rounded-t-primary","active-class":"button-secondary",type:"secondary",outlined:"",list:"",url:n.url,route:n.route,loading:n.loading||e(d)===n.route,label:n.name},null,8,["url","route","loading","label"]))),256)),e(f)?(o(),l(k,{key:0},[u(w,{class:"w-full text-lg rounded-none first:rounded-t-primary","active-class":"button-tertiary",type:"secondary",outlined:"",list:"",route:e(m).DASHBOARD,loading:e(d)===e(m).DASHBOARD,label:"Dashboard"},null,8,["route","loading"]),u(w,{class:"w-full text-lg rounded-none rounded-b-primary first:rounded-b-primary",outlined:"",list:"",type:"danger",label:"Logout",onClick:e(h)},null,8,["onClick"])],64)):(o(),$(w,{key:1,class:"w-full text-lg rounded-none rounded-b-primary first:rounded-b-primary","active-class":"button-primary",type:"primary",outlined:"",list:"",route:e(m).LOGIN,loading:e(d)===e(m).LOGIN,label:"Login"},null,8,["route","loading"]))])],512),[[B,i.isOpen]])],64))}}),me={key:0,class:_(["flex items-center justify-between flex-wrap gap-3","lg:flex-row"])},fe={key:0,class:"flex justify-between"},ge=C({__name:"NavigationMenu",setup(g){const r=N(),a=L(),{isLoggedIn:f,isLogoutLoading:c}=v(r),{visibleMenuItems:d,routeLoading:h}=v(a),i=S(),s=S(!1),n=S(!1),D=Z(()=>s.value||n.value),O=()=>{s.value=!s.value,s.value&&F(()=>{var p;(p=i.value)==null||p.scrollIntoView({behavior:"smooth",block:"center"})})};return(p,b)=>e(d).length?(o(),l("div",me,[(o(!0),l(k,null,A(e(d),x=>(o(),$(w,{class:"hidden lg:flex lg:w-auto grow justify-center","active-class":"button-secondary",type:"secondary",outlined:"",url:x.url,route:x.route,loading:x.loading||e(h)===x.route,label:x.name},null,8,["url","route","loading","label"]))),256)),e(f)?(o(),$(w,{key:0,class:"hidden lg:flex lg:w-auto grow justify-center",type:"danger",outlined:"",loading:e(c),onClick:e(r).logout,label:"Logout"},null,8,["loading","onClick"])):(o(),$(w,{key:1,class:"hidden lg:flex lg:w-auto grow justify-center","active-class":"button-primary",type:"primary",outlined:"",route:e(m).LOGIN,loading:e(h)===e(m).LOGIN,label:"Login"},null,8,["route","loading"])),t("div",{ref_key:"dropdown",ref:i,class:"dropdown absolute lg:hidden w-full left-0 top-5 flex justify-end"},[t("div",{class:"fixed w-full sm:w-1/3 px-10",onMouseover:b[0]||(b[0]=x=>n.value=!0),onMouseleave:b[1]||(b[1]=x=>n.value=!1)},[t("div",{class:_(["flex animation",s.value?"justify-center":"justify-end"])},[u(w,{class:_(["bg-black bg-opacity-50",s.value?"w-full":"w-fit hover:w-full"]),outlined:"",icon:D.value?void 0:"pi pi-align-justify",onClick:O},{default:M(()=>[D.value?(o(),l("div",fe,[t("i",{class:_(["pi pi-angle-down animation place-self-center mr-2",{"rotate-180":s.value}])},null,2),b[2]||(b[2]=t("p",null,"Menu",-1))])):U("",!0)]),_:1},8,["class","icon"])],2)],32),u(pe,{"is-open":s.value,toggle:()=>s.value=!s.value},null,8,["is-open","toggle"])],512)])):U("",!0)}}),_e={class:_(["z-10","lg:absolute","lg:top-0 lg:right-auto","w-fit lg:w-1/3","mb-8 py-8 bg-transparent text-neutral-300","lg:bg-neutral-900 lg:bg-opacity-50 lg:rounded-primary lg:rounded-e-none","lg:px-8 lg:mt-0 lg:rounded-br-primary lg:rounded-t-none"])},ve={key:0,class:"hidden lg:flex justify-center mb-4"},he={class:"hidden lg:block w-4/5 space-y-2"},ye={class:"hidden font-semibold text-base md:first:block lg:block first:font-bold first:text-lg"},we={class:"ms-3 flex items-center justify-center w-full md:w-3/5 lg:w-1/5"},be={key:1},xe={class:"hidden lg:grid col-span-5 space-y-2 mb-5"},ke={class:"font-semibold text-base first:font-bold first:text-lg"},$e=C({__name:"NavigationCard",setup(g){const r=T(),a=L(),f=z(),{currentUser:c}=v(f),{content:d}=v(a);return(h,i)=>{const s=E("RouterLink");return o(),l("div",_e,[e(c)?(o(),l("div",ve,[t("div",he,[(o(!0),l(k,null,A(e(d).headerDescriptionUser,n=>(o(),l("p",ye,y(n.replace("%USER%",e(c).firstName+(e(c).lastName?" "+e(c).lastName:""))),1))),256))]),t("div",we,[u(s,{to:{name:e(m).DASHBOARD}},{default:M(()=>[t("i",{class:_(["pi pi-user px-2 py-1 border rounded-primary border-secondary-600 text-neutral-300 animation-scale",{"bg-secondary-600 bg-opacity-75":e(r).name===e(m).DASHBOARD}]),style:{"font-size":"3rem"}},null,2)]),_:1},8,["to"])])])):(o(),l("div",be,[t("div",xe,[(o(!0),l(k,null,A(e(d).headerDescriptionGuest,n=>(o(),l("p",ke,y(n),1))),256))])])),u(ge)])}}}),Ce={class:"sm:flex sm:items-start sm:justify-between mb-20"},De={class:"w-full sm:w-1/3 lg:flex lg:justify-end"},Se=C({__name:"Header",setup(g){return(r,a)=>(o(),l("div",Ce,[u(V,{class:"hidden sm:block"}),t("div",De,[u($e)]),u(V,{class:"sm:hidden"})]))}}),Le={class:"min-h-screen bg-gradient-to-b from-primary-900 to-black via-neutral-800"},Oe={class:_(["mx-0 sm:mx-16 xl:mx-60 px-5 pb-5 sm:p-14 rounded-b-primary","text-white bg-gradient-to-b from-transparent from-10% via-neutral-900 to-black","bg-opacity-50 border-opacity-100"])},je=C({__name:"Page",props:{scrollToContent:{type:Boolean,required:!1,default:!0}},setup(g){const r=g,a=T(),f=N(),c=z(),{firebaseUser:d}=v(f),{fetchOnlineUsers:h,updateOnlineUser:i}=c,s=S(),n=S(),D=()=>{r.scrollToContent&&Y(n.value)},O=()=>{var p;(p=d.value)!=null&&p.uid&&i(d.value.uid),h()};return I(()=>{D(),O(),s.value=setInterval(O,1e3*30)}),q(()=>{clearInterval(s.value)}),P(()=>a.fullPath,()=>{D()}),(p,b)=>(o(),l(k,null,[t("div",Le,[t("div",Oe,[t("header",null,[p.$slots.header?j(p.$slots,"header",{key:0}):(o(),$(Se,{key:1}))]),t("main",null,[t("div",{ref_key:"content",ref:n},[j(p.$slots,"content")],512)])])]),t("footer",null,[p.$slots.footer?j(p.$slots,"footer",{key:0}):(o(),$(Q,{key:1}))])],64))}});export{je as _};
