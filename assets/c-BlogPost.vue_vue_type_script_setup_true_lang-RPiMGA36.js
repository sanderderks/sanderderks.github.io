import{i as G,s as U,r as A,o as X,a3 as de,ai as ce,aj as Y,ak as Z,al as K,am as le,h as z,e as j,g as ie,c as $,l as a,q as p,an as re,D as R,p as P,k as g,t as c,E as B,R as W,C as Q,a as pe,m,n as L,J as me,w as E,O as H,ao as ge,ap as ve,ac as fe,aq as be,B as ye,ar as he,x as ke,z as J,y as M,as as _,H as q,ae as x,T as we,f as Ce,A as $e,G as ee,X as Te,K as Be,L as Se}from"../bundle.js";import{_ as N,u as Pe,b as Ie}from"./c-Bubble.vue_vue_type_script_setup_true_lang-C0Ws0B4Z.js";import{_ as V}from"./c-CustomButton.vue_vue_type_script_setup_true_lang-DBbKX02O.js";import{_ as O}from"./c-Countdown.vue_vue_type_script_setup_true_lang-DSMslq4c.js";import{_ as De}from"./c-TextField.vue_vue_type_script_setup_true_lang-BcDK9ofr.js";import{R as Re}from"./c-validation-DokkLKHB.js";import{a as Ee,s as Ue}from"./c-accordiontab.esm-fhxUpLlW.js";import{_ as Ae}from"./c-Image.vue_vue_type_script_setup_true_lang-SpT24IqB.js";const Le=o=>{const t=G(),{collections:n,fetchBlogPost:f,checkBlogPostForUnreadReactions:h}=t,{blogPosts:v,blogReactions:k,isBlogPostDatabaseActionActive:y}=U(t);let w=[];const S=A(),r=d=>{d.metadata.hasPendingWrites||y.value||(clearTimeout(S.value),S.value=setTimeout(async()=>{await f(o.id,void 0,{loadingIndicator:!1}),h(v.value.previousData.single,!0)},200))};X(async()=>{k.value.unread=k.value.unread.filter(e=>e.postId!==o.id);const d=de(o),u=n.blogPosts(d.isPrivate),l=n.blogReactions(d.isPrivate),T=ce(u,o.id),I=Y(u,Z("id","==",o.id)),D=Y(l,Z("post","==",T));w.push(K(I,r)),w.push(K(D,r))}),le(()=>{clearTimeout(S.value),w.forEach(d=>{d()})})},dt=()=>{const o=G(),t=z(),{visibleBlogPosts:n,blogReactions:f,isBlogPostDatabaseActionActive:h}=U(o),{firebaseUser:v,isLoggedIn:k}=U(t),{collections:y,fetchBlogPosts:w,checkBlogPostsForUnreadReactions:S}=o;let r=[];const d=A(),u=l=>{l.metadata.hasPendingWrites||h.value||(clearTimeout(d.value),d.value=setTimeout(async()=>{var T;n.value.length&&(await w((T=v.value)==null?void 0:T.uid,{amount:n.value.length,loadingIndicator:!1}),S())},200))};X(()=>{f.value.unread=[],r.push(K(y.blogPosts(!1),u)),r.push(K(y.blogReactions(!1),u)),k.value&&(r.push(K(y.blogPosts(!0),u)),r.push(K(y.blogReactions(!0),u)))}),le(()=>{clearTimeout(d.value),r.forEach(l=>{l()})})},je={class:"flex flex-col gap-2"},te=j({__name:"BlogReaction",props:{post:{},reaction:{}},setup(o){const t=o,n=ie(),f=z(),h=G(),{routeLoading:v,routeLoadingId:k}=U(n),{firebaseUser:y,isLoggedIn:w,isOwner:S}=U(f),{blogReactions:r}=U(h),{deleteBlogReaction:d}=h,u=$(()=>y.value&&t.reaction.user.id===y.value.uid||S.value);return(l,T)=>(a(),p(N,{id:t.reaction.id,class:B(["p-5 w-full md:w-3/4 xl:w-2/3",t.post.colorTertiary,t.post.opacityTertiary||"bg-opacity-50","!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},avatarProps:{class:{"animate-spin":g(v)===g(W).USER_DETAILS&&g(k)===t.reaction.user.id}},title:t.reaction.user.displayName||"Unknown user",subTitle:g(Q)(t.reaction.date),avatar:t.reaction.user.avatar,route:g(w)?{name:g(W).USER_DETAILS,params:{userId:t.reaction.user.id}}:void 0,avatarRoute:g(w)?{name:g(W).USER_DETAILS,params:{userId:t.reaction.user.id}}:void 0,description:t.reaction.message},re({_:2},[u.value?{name:"right",fn:R(()=>[P("div",je,[u.value&&!t.post.locked?(a(),p(V,{key:0,type:"danger",outlined:"",class:"h-fit",label:"Delete",disabled:g(r).isDatabaseDeletionActive,onClick:T[0]||(T[0]=I=>g(d)(t.reaction.id,t.post))},null,8,["disabled"])):c("",!0)])]),key:"0"}:void 0]),1032,["id","class","avatarProps","title","subTitle","avatar","route","avatarRoute","description"]))}}),He={class:"grid justify-items-center p-5 gap-5"},Me=j({__name:"BlogReactions",props:{post:{}},setup(o){const t=o,n=ie(),f=z(),h=G(),{content:v}=U(n),{firebaseUser:k,isLoggedIn:y}=U(f),{blogReactions:w}=U(h),{createBlogReaction:S}=h,r=A(),d=A(!1),u=pe({reaction:{value:"",error:""}}),l=$(()=>[...t.post.reactions].reverse()),T=$(()=>l.value.filter((i,b)=>b<3)),I=$(()=>l.value.filter((i,b)=>b>=3)),D=$(()=>t.post.locked||!y.value||w.value.isDatabaseCreationActive),e=async()=>{if(!w.value.isDatabaseCreationActive){if(await r.value.test(),!u.reaction.error&&k.value){const i=u.reaction.value;u.reaction.value="Replying...";const b=await S(t.post,{userId:k.value.uid,postId:t.post.id,message:i,date:new Date});u.reaction.value=b?"":i}be()}};return(i,b)=>(a(),m("form",{action:"",onSubmit:fe(e,["prevent"])},[P("div",He,[!g(y)||i.post.reactions.filter(C=>C.user.id===g(k).uid).length<20?(a(),p(N,{key:0,class:B(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",i.post.colorTertiary||"bg-secondary-700",i.post.opacityTertiary||"bg-opacity-25"])},{default:R(()=>[L(De,{class:"w-5/6",id:i.post.id,inputProps:{class:["rounded-primary border-none !placeholder-gray-300",i.post.colorSecondary||i.post.colorPrimary||"bg-secondary-600",i.post.opacitySecondary||"!bg-opacity-20",D.value?{"!bg-gray-900 !bg-opacity-50":!g(w).isDatabaseCreationActive}:"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!g(y)&&!i.post.locked}],disabled:D.value,autocomplete:"off"},ref_key:"reaction",ref:r,name:"reaction",placeholder:i.post.locked?"Locked for comments":g(y)?"Reply":g(v).blogLoginGuest,modelValue:u.reaction.value,"onUpdate:modelValue":b[0]||(b[0]=C=>u.reaction.value=C),error:u.reaction.error,"onUpdate:error":b[1]||(b[1]=C=>u.reaction.error=C),rules:[g(Re).Required],onClick:b[2]||(b[2]=()=>!g(y)&&!i.post.locked?g(me).push({name:g(W).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error","rules"])]),_:1},8,["class"])):c("",!0),(a(!0),m(E,null,H(T.value,C=>(a(),p(te,{post:i.post,reaction:C},null,8,["post","reaction"]))),256)),(a(!0),m(E,null,H(I.value,C=>ge((a(),p(te,{post:i.post,reaction:C},null,8,["post","reaction"])),[[ve,d.value]])),256)),i.post.reactions.length>3?(a(),p(V,{key:1,type:"primary",outlined:"",icon:d.value?"pi pi-angle-up":"pi pi-angle-down",label:d.value?"Hide older reactions":"View older reactions",onClick:b[3]||(b[3]=C=>d.value=!d.value)},null,8,["icon","label"])):c("",!0)])],32))}});var Oe={root:function(t){var n=t.props;return["p-chip p-component",{"p-chip-image":n.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},Ke=ye.extend({name:"chip",classes:Oe}),We={name:"BaseChip",extends:ke,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Ke,provide:function(){return{$parentInstance:this}}},ue={name:"Chip",extends:We,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)},close:function(t){this.visible=!1,this.$emit("remove",t)}},components:{TimesCircleIcon:he}},Ne=["aria-label"],Ve=["src"];function qe(o,t,n,f,h,v){return h.visible?(a(),m("div",M({key:0,class:o.cx("root"),"aria-label":o.label},o.ptmi("root")),[J(o.$slots,"default",{},function(){return[o.image?(a(),m("img",M({key:0,src:o.image},o.ptm("image")),null,16,Ve)):o.$slots.icon?(a(),p(_(o.$slots.icon),M({key:1,class:o.cx("icon")},o.ptm("icon")),null,16,["class"])):o.icon?(a(),m("span",M({key:2,class:[o.cx("icon"),o.icon]},o.ptm("icon")),null,16)):c("",!0),o.label?(a(),m("div",M({key:3,class:o.cx("label")},o.ptm("label")),q(o.label),17)):c("",!0)]}),o.removable?J(o.$slots,"removeicon",{key:0,onClick:v.close,onKeydown:v.onKeydown,removeCallback:v.close,keydownCallback:v.onKeydown},function(){return[(a(),p(_(o.removeIcon?"span":"TimesCircleIcon"),M({tabindex:"0",class:[o.cx("removeIcon"),o.removeIcon],onClick:v.close,onKeydown:v.onKeydown},o.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):c("",!0)],16,Ne)):c("",!0)}ue.render=qe;const Ge=j({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(o){return(t,n)=>(a(),m("div",null,[P("div",{class:B({block:!t.alignment,flex:!!t.alignment,"justify-start":t.alignment==="left","justify-center":t.alignment==="center","justify-end":t.alignment==="right"})},[P("ul",{class:B(["list-disc",{"ms-5":t.alignment==="left"}])},[(a(!0),m(E,null,H(t.bullets,f=>(a(),m("li",null,q(f),1))),256))],2)],2)]))}}),ze={class:"ql-editor no-input"},Fe=["innerHTML"],F=j({__name:"BlogPostDescription",props:{description:{}},setup(o){return(t,n)=>(a(),m("div",ze,[P("div",{innerHTML:t.description},null,8,Fe)]))}}),ae=j({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},maxHeight:{},maxWidth:{},alignment:{},thumb:{type:Boolean}},setup(o){const t=o,n=Pe(Ie),f=n.greaterOrEqual("sm"),h=n.greaterOrEqual("md"),v=A(0),k=A(0),y=$(()=>v.value>k.value),w=$(()=>v.value>k.value*1.5),S=$(()=>k.value>v.value),r=$(()=>k.value>v.value*1.5),d=$(()=>h.value?"60%":f.value?"80%":t.maxHeight?t.maxHeight:y.value&&r.value?"80%":"100%"),u=$(()=>h.value?"60%":f.value?"80%":t.maxWidth?t.maxWidth:S.value&&w.value?"80%":"100%");return X(()=>{const l=new Image;l.src=t.coverImageUrl,l.onload=()=>{v.value=l.height,k.value=l.width}}),(l,T)=>{var I,D;return a(),m("div",{class:B({flex:!0,"justify-start":l.alignment==="left","justify-center":l.alignment===void 0||l.alignment==="center","justify-end":l.alignment==="right"})},[L(N,{class:B(["!p-0 md:!p-3 my-5",l.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",(I=l.post)==null?void 0:I.colorTertiary,((D=l.post)==null?void 0:D.opacityTertiary)||"bg-opacity-50"]),style:x({maxHeight:d.value,maxWidth:u.value})},{default:R(()=>[l.thumb?(a(),m("div",{key:0,class:"h-[20vh] inset-0 rounded-primary",style:x({backgroundImage:`url(${l.coverImageUrl})`,backgroundSize:"cover"})},null,4)):(a(),p(Ae,{key:1,src:l.coverImageUrl,"image-class":"cover-image md:rounded-primary"},null,8,["src"]))]),_:1},8,["class","style"])],2)}}}),Qe={class:"flex flex-wrap justify-end h-fit gap-3"},oe=j({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(o){return(t,n)=>(a(),m("div",Qe,[L(V,{class:"min-w-80",label:"Edit",onClick:n[0]||(n[0]=f=>t.$emit("editClicked"))}),L(V,{class:"min-w-80",type:"danger",outlined:"",label:"Delete",onClick:n[1]||(n[1]=f=>t.$emit("deleteClicked"))})]))}}),ne=j({__name:"BlogPostSectionTitle",props:{class:{},alignment:{},isExpandable:{type:Boolean},isExpanded:{type:Boolean},isSubTitle:{type:Boolean}},emits:["click"],setup(o){const t=o;return(n,f)=>(a(),m("div",{class:B(["font-bold",{"text-lg md:text-2xl":!n.isSubTitle},{"hover:underline cursor-pointer":n.isExpandable},t.class])},[P("div",{class:B({block:!n.alignment,flex:!!n.alignment,"justify-start":n.alignment==="left","justify-center":n.alignment==="center","justify-end":n.alignment==="right"})},[P("span",{class:"flex",onClick:f[0]||(f[0]=h=>n.$emit("click"))},[n.isExpandable&&n.alignment==="right"?(a(),m("i",{key:0,class:B(["pi pi-angle-down animation",{"rotate-180":n.isExpanded}])},null,2)):c("",!0),J(n.$slots,"default"),n.isExpandable&&(n.alignment==="left"||n.alignment==="center")?(a(),m("i",{key:1,class:B(["pi pi-angle-down animation",{"rotate-180":n.isExpanded}])},null,2)):c("",!0)])],2)],2))}}),Je={class:"table-auto min-w-full text-left"},Xe={key:0,class:"border border-white"},Ye=["onClick","innerHTML"],se=j({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(o){const t=o,n=A(0),f=A("asc"),h=$(()=>we(t.tableData)),v=A(h.value.slice(1)),k=(r,d)=>{r===0&&(n.value=d,y(),w())},y=()=>{f.value==="asc"?f.value="desc":f.value="asc"},w=()=>{const r=n.value;v.value=v.value.sort((d,u)=>f.value==="asc"?u[r].localeCompare(d[r]):d[r].localeCompare(u[r]))},S=r=>{const d=/(https?:\/\/[^\s]+)/g;return r.replace(d,u=>{let l=u.replace("http://","").replace("https://","").replace("www.","");return l.length>15&&(l=l.substring(0,15)+"..."),`<a href="${u}" target="_blank">${l}</a>`})};return(r,d)=>(a(),m("div",{class:B(["my-8 flex max-w-[65vw] md:max-w-[50vw] lg:max-w-[60vw] overflow-x-auto",{"justify-start":r.alignment==="left","justify-center":r.alignment==="center"||!r.alignment,"justify-end":r.alignment==="right"}])},[P("table",Je,[P("tbody",null,[(a(!0),m(E,null,H([h.value[0],...v.value],(u,l)=>(a(),m(E,{key:l},[u.every(T=>!T)?c("",!0):(a(),m("tr",Xe,[(a(!0),m(E,null,H(u,(T,I)=>(a(),m(E,{key:I},[I!==0||!h.value.every(D=>!D.length||!D[0])?(a(),m("td",{key:0,class:B(["px-2 border border-white",{"font-bold":l===0||I===0},{"cursor-pointer underline":l===0},{"text-left":r.alignment==="left"||!r.alignment,"text-center":r.alignment==="center","text-right":r.alignment==="right"}]),onClick:D=>k(l,I),innerHTML:S(T)},null,10,Ye)):c("",!0)],64))),128))]))],64))),128))])])],2))}}),Ze={class:"flex gap-3"},_e={class:"flex justify-between h-fit mt-2 gap-2"},xe={class:"flex flex-wrap gap-3"},et={class:"w-full"},tt={class:"w-full"},ct=j({__name:"BlogPost",props:{post:{},withoutMutation:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(o){const t=o,n=Ce(),f=z(),h=$e(),{publicUsers:v}=U(h),{firebaseUser:k,isOwner:y}=U(f);n.currentRoute.value.name!==W.BLOG&&Le(t.post);const w=A(t.post.archived),S=$(()=>{var e;return(e=t.post.allowedUserIds)!=null&&e.length?v.value.filter(i=>{var b;return(b=t.post.allowedUserIds)==null?void 0:b.includes(i.id)}):[]}),r=$(()=>{const e=Q(t.post.date);return t.post.dateUpdated?e+` - updated ${Q(t.post.dateUpdated)}`:e}),d=$(()=>{const e=[];return t.post.datePinned&&e.push({value:"Pinned",severity:"success",rounded:!1}),t.post.locked&&e.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),t.post.archived&&e.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),e}),u=$(()=>t.post.sections.map(e=>({...e,isExpandable:T(e)}))),l=$(()=>u.value.some(e=>e.openByDefault)?u.value.flatMap((e,i)=>e.openByDefault?i:[]):null),T=e=>!!e.description||!!e.coverImageUrl||!!e.bullets.length||!!e.table,I=e=>{var i;(i=l.value)!=null&&i.length||Te(e)},D=()=>{const e=document.createElement("textarea"),{protocol:i,hostname:b,port:C}=window.location,s=`${i}//${b}`+(b==="localhost"?`:${C}`:"");e.value=`${s}#${Be.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),Se.success("Copied link!")};return(e,i)=>(a(),p(N,{id:e.post.id,class:B([{"min-h-[90vh]":!w.value},"border-4 border-transparent","!rounded-primary",e.post.colorSecondary||e.post.colorPrimary||"bg-secondary-900",e.post.opacitySecondary||"bg-opacity-50"]),title:e.post.title,subTitle:r.value,tags:d.value,loading:e.post.loading,isCollapsed:w.value,clickable:"",route:{name:g(W).BLOG_DETAILS,params:{postId:e.post.id}}},{right:R(()=>[P("div",Ze,[w.value?g(y)&&!e.withoutMutation?(a(),p(oe,{key:1,onEditClicked:i[0]||(i[0]=b=>e.$emit("editClicked")),onDeleteClicked:i[1]||(i[1]=b=>e.$emit("deleteClicked"))})):c("",!0):(a(),p(V,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:D}))])]),default:R(()=>{var b;return[P("div",_e,[P("div",xe,[(a(!0),m(E,null,H(S.value,C=>{var s;return a(),p(g(ue),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:C.id===((s=g(k))==null?void 0:s.uid)?"You":C.displayName,rounded:""},null,8,["label"])}),256))]),g(y)&&!e.withoutMutation?(a(),m("div",{key:0,class:B(["flex justify-end ms-5",(b=e.post.allowedUserIds)!=null&&b.length?"flex-col md:flex-row":"flex-row"])},[L(oe,{onEditClicked:i[2]||(i[2]=C=>e.$emit("editClicked")),onDeleteClicked:i[3]||(i[3]=C=>e.$emit("deleteClicked"))})],2)):c("",!0)]),L(N,{class:B(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5",e.post.colorPrimary,e.post.opacityPrimary||"bg-opacity-50"])},{default:R(()=>{var C;return[P("div",{class:B(["flex relative",e.post.countdown||e.post.alignment==="center"?"flex justify-between":""])},[P("div",et,[e.post.countdown?(a(),p(O,{key:0,time:new Date(e.post.countdown).getTime(),direction:"down",alignment:e.post.alignment},null,8,["time","alignment"])):c("",!0),e.post.timer?(a(),p(O,{key:1,time:new Date(e.post.timer).getTime(),direction:"up",alignment:e.post.alignment},null,8,["time","alignment"])):c("",!0),e.post.description?(a(),p(F,{key:2,description:e.post.description},null,8,["description"])):c("",!0)])],2),e.post.coverImageUrl?(a(),p(ae,{key:0,post:e.post,"cover-image-url":e.post.coverImageUrl},null,8,["post","cover-image-url"])):c("",!0),e.post.descriptionFooter?(a(),p(F,{key:1,class:"mb-5",description:e.post.descriptionFooter},null,8,["description"])):c("",!0),e.post.table?(a(),p(se,{key:2,tableData:e.post.table,alignment:e.post.tableAlignment},null,8,["tableData","alignment"])):c("",!0),L(g(Ee),{multiple:!!((C=l.value)!=null&&C.length),"active-index":l.value,onTabOpen:I},{default:R(()=>[(a(!0),m(E,null,H(u.value,s=>(a(),p(g(Ue),{disabled:!s.isExpandable,pt:{headerAction:{class:["px-0 bg-transparent",s.isExpandable?void 0:"cursor-auto"]},headerIcon:{class:{invisible:!s.isExpandable}}}},re({header:R(()=>[P("div",tt,[s.title?(a(),p(ne,{key:0,alignment:s.alignment},{default:R(()=>[ee(q(s.title),1)]),_:2},1032,["alignment"])):c("",!0),s.subTitle?(a(),p(ne,{key:1,alignment:s.alignment,"is-sub-title":""},{default:R(()=>[ee(q(s.subTitle),1)]),_:2},1032,["alignment"])):c("",!0),s.isExpandable?c("",!0):(a(),m(E,{key:2},[s.countdown?(a(),p(O,{key:0,time:new Date(s.countdown).getTime(),direction:"down",alignment:s.alignment},null,8,["time","alignment"])):c("",!0),s.timer?(a(),p(O,{key:1,time:new Date(s.timer).getTime(),direction:"up",alignment:s.alignment},null,8,["time","alignment"])):c("",!0)],64))])]),default:R(()=>[s.description?(a(),p(F,{key:0,description:s.description,alignment:s.alignment},null,8,["description","alignment"])):c("",!0),s.coverImageUrl?(a(),p(ae,{key:1,post:e.post,"cover-image-url":s.coverImageUrl,alignment:s.alignment,"max-height":"30%"},null,8,["post","cover-image-url","alignment"])):c("",!0),L(Ge,{bullets:s.bullets,alignment:s.alignment},null,8,["bullets","alignment"]),s.isExpandable?(a(),m(E,{key:2},[s.countdown?(a(),p(O,{key:0,time:new Date(s.countdown).getTime(),direction:"down",alignment:s.alignment},null,8,["time","alignment"])):c("",!0),s.timer?(a(),p(O,{key:1,time:new Date(s.timer).getTime(),direction:"up",alignment:s.alignment},null,8,["time","alignment"])):c("",!0)],64)):c("",!0),s.table?(a(),p(se,{key:3,tableData:s.table,alignment:s.tableAlignment},null,8,["tableData","alignment"])):c("",!0)]),_:2},[s.isExpandable?void 0:{name:"headericon",fn:R(()=>[]),key:"0"}]),1032,["disabled","pt"]))),256))]),_:1},8,["multiple","active-index"])]}),_:1},8,["class"]),L(Me,{post:e.post},null,8,["post"])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed","route"]))}});export{ct as _,oe as a,ae as b,F as c,ne as d,ue as s,dt as u};
