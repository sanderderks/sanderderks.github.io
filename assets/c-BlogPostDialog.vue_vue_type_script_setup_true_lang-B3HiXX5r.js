const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-Bg0H32zt.js","../bundle.js","../bundle6.css"])))=>i.map(i=>d[i]);
import{a as ie,a7 as re,s as R,k as Se,ag as Ce,ah as Me,ai as ve,aj as fe,ak as K,al as Ue,p as le,E as B,am as Ae,Q as Te,an as He,_ as Ne,d as O,u as Ge,G as be,b as t,g,f as o,R as Q,L as te,n as A,ao as Fe,w as x,e as p,B as P,z as S,c as q,v as Ke,h as c,ab as Qe,F as C,C as M,ap as We,aq as Je,q as Ye,ar as ke,as as Xe,t as j,at as Be,au as Ze,a1 as _e,a2 as el,av as Oe,aw as ll,ax as ol,ay as tl,j as Z,T as ne,az as ae,U as W,V as J,W as Y,x as Re,aa as nl,i as al,ac as il,ad as qe,P as ze,X as pe,aA as rl,aB as sl,aC as dl,aD as cl,r as ul,aE as V,aF as ql,aG as pl,aH as ge,aI as bl,aJ as we,aK as ml,aL as vl,aM as fl,aN as he,aO as ce,aP as kl,aQ as gl,aR as wl}from"../bundle.js";import{_,a as L,u as hl,b as yl}from"./c-Bubble.vue_vue_type_script_setup_true_lang-CZxVsloT.js";import{_ as De}from"./c-Dialog.vue_vue_type_script_setup_true_lang-BFospxzQ.js";import{_ as F}from"./c-TextField.vue_vue_type_script_setup_true_lang-DsTED8gN.js";import{u as se,r as N,f as H,m as xl,a as Vl,d as $l}from"./c-index-CziLaYsB.js";import{_ as de}from"./c-DeleteButton.vue_vue_type_script_setup_true_lang-BWOp-A9e.js";import{_ as ye}from"./c-Countdown.vue_vue_type_script_setup_true_lang-BU2npR7x.js";import{_ as je}from"./c-Image.vue_vue_type_script_setup_true_lang-JNexkQdI.js";import{_ as Ie}from"./c-EditButton.vue_vue_type_script_setup_true_lang-Dvw_FHjK.js";import{a as Pl,_ as Sl}from"./c-DateField.vue_vue_type_script_setup_true_lang-BTea349j.js";import{_ as Le}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-Bs5VOK9c.js";import{D as me}from"./c-vuedraggable.umd-DdrjzhlO.js";import{_ as Cl}from"./c-ErrorMessage.vue_vue_type_script_setup_true_lang-09PjqN-d.js";import{_ as E}from"./c-SelectField.vue_vue_type_script_setup_true_lang-C-4hMlWD.js";import{_ as oe}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-DIkeZJ30.js";import{u as Ul}from"./c-useUsers-B-0OHbwr.js";const Tl=e=>{const l=ie(),a=re(),{previousCurrentBlogPost:d,isBlogPostDatabaseActionActive:v}=R(l);let s=[];const i=B(),u=r=>{r.metadata.hasPendingWrites||v.value||(clearTimeout(i.value),i.value=setTimeout(async()=>{await l.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),l.checkBlogPostForUnreadReactions(d.value,!0)},200))};Se(async()=>{a.unread=a.unread.filter(n=>n.postId!==e.id);const r=Ce(e),b=l.collections.blogPosts(r.isPrivate),y=a.collections.blogReactions(r.isPrivate),f=Me(b,e.id),k=ve(b,fe("id","==",e.id)),U=ve(y,fe("post","==",f));s.push(K(k,u)),s.push(K(U,u))}),Ue(()=>{clearTimeout(i.value),s.forEach(r=>{r()})})},rt=()=>{const e=ie(),l=le(),a=re(),{visibleBlogPosts:d,isBlogPostDatabaseActionActive:v}=R(e),{isLoggedIn:s}=R(l);let i=[];const u=B(),r=b=>{b.metadata.hasPendingWrites||v.value||(clearTimeout(u.value),u.value=setTimeout(async()=>{d.value.length&&(await e.fetchBlogPosts({amount:d.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};Se(()=>{a.unread=[],i.push(K(e.collections.blogPosts(!1),r)),i.push(K(a.collections.blogReactions(!1),r)),s.value&&(i.push(K(e.collections.blogPosts(!0),r)),i.push(K(a.collections.blogReactions(!0),r)))}),Ue(()=>{clearTimeout(u.value),i.forEach(b=>{b()})})},ue=e=>e?e.clone():new He,X=Ae("blogPostDialogStore",()=>{const e=B(!1),l=B(null),a=B(ue(null)),d=B(!1),v=()=>{l.value=null,a.value=ue(null),d.value=!1},s=u=>{l.value=u,a.value=ue(u),e.value=!0},i=()=>{e.value=!1,v()};return Te(()=>a.value,()=>{d.value=!Ne(l.value,a.value)},{deep:!0}),{isOpen:e,blogPostOriginal:l,blogPostMutation:a,hasChanges:d,$reset:v,openWith:s,close:i}}),Bl={class:"flex flex-col gap-2"},xe=O({__name:"BlogReaction",props:{post:{},reaction:{}},setup(e){const l=e,a=Ge(),d=le(),v=be(),s=re(),{routeLoading:i,routeLoadingId:u}=R(a),{firebaseUser:r,isLoggedIn:b,isOwner:y}=R(d),{publicUsers:f}=R(v),{isDatabaseDeletionActive:k}=R(s),U=S(()=>f.value.find(m=>m.id===l.reaction.userId)),n=S(()=>r.value&&l.reaction.userId===r.value.uid||y.value);return(m,h)=>(t(),g(_,{id:e.reaction.id,class:A(["p-5 w-full md:w-3/4 xl:w-2/3",e.post.colorTertiary,e.post.opacityTertiary||"bg-opacity-50","!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},avatarProps:{class:{"animate-spin":o(i)===o(Q).USER_DETAILS&&o(u)===U.value?.id}},title:U.value?.displayName||"Onbekende gebruiker",subTitle:o(te)(e.reaction.date),avatar:U.value?.avatar,route:o(b)?{name:o(Q).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,avatarRoute:o(b)?{name:o(Q).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,description:e.reaction.message},Fe({_:2},[n.value?{name:"right",fn:x(()=>[p("div",Bl,[n.value&&!e.post.locked?(t(),g(de,{key:0,outlined:"",disabled:o(k),onClick:h[0]||(h[0]=w=>o(s).deleteBlogReaction(e.post,e.reaction.id))},null,8,["disabled"])):P("",!0)])]),key:"0"}:void 0]),1032,["id","class","avatarProps","title","subTitle","avatar","route","avatarRoute","description"]))}}),Ol={class:"grid justify-items-center p-5 gap-5"},Rl=O({__name:"BlogReactions",props:{post:{}},setup(e){const l=e,a=le(),d=re(),{firebaseUser:v,isLoggedIn:s}=R(a),{isDatabaseCreationActive:i}=R(d),u=B(!1),r=Ye({reaction:""}),y=se({reaction:{required:N}},r,{$autoDirty:!0}),f=S(()=>[...l.post.reactions].reverse()),k=S(()=>f.value.filter((h,w)=>w<3)),U=S(()=>f.value.filter((h,w)=>w>=3)),n=S(()=>l.post.locked||!s.value||i.value),m=async()=>{if(i.value)return;if(!await y.value.$validate()||!v.value){ke();return}const h=r.reaction;r.reaction="Reactie plaatsen...";const w=await d.createBlogReaction(l.post,new Xe({userId:v.value.uid,postId:l.post.id,message:h}));r.reaction=w?"":h,w&&y.value.$reset(),ke()};return(h,w)=>(t(),q("form",{action:"",onSubmit:Ke(m,["prevent"])},[p("div",Ol,[!o(s)||e.post.reactions.filter(T=>T.userId===o(v).uid).length<20?(t(),g(_,{key:0,class:A(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",e.post.colorTertiary||"bg-secondary-700",e.post.opacityTertiary||"bg-opacity-25"])},{default:x(()=>[c(F,{class:"w-5/6",id:e.post.id,inputProps:{class:["!bg-neutral-900 rounded-primary border-none !placeholder-gray-300",e.post.colorSecondary||e.post.colorPrimary||"bg-secondary-600",e.post.opacitySecondary||"!bg-opacity-20",n.value?{"!bg-gray-900 !bg-opacity-50":!o(i)}:"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!o(s)&&!e.post.locked}],disabled:n.value,autocomplete:"off"},name:"reaction",placeholder:e.post.locked?"Gesloten voor reacties":o(s)?"Reageren":"Log in om te reageren",modelValue:r.reaction,"onUpdate:modelValue":w[0]||(w[0]=T=>r.reaction=T),error:o(y).reaction.$error?o(H)(o(y).reaction):"",required:"",onClick:w[1]||(w[1]=()=>!o(s)&&!e.post.locked?o(Qe).push({name:o(Q).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error"])]),_:1},8,["class"])):P("",!0),(t(!0),q(C,null,M(k.value,T=>(t(),g(xe,{post:e.post,reaction:T},null,8,["post","reaction"]))),256)),(t(!0),q(C,null,M(U.value,T=>We((t(),g(xe,{post:e.post,reaction:T},null,8,["post","reaction"])),[[Je,u.value]])),256)),e.post.reactions.length>3?(t(),g(L,{key:1,outlined:"",icon:u.value?"pi pi-angle-up":"pi pi-angle-down",label:u.value?"Verberg oudere reacties":"Bekijk oudere reacties",onClick:w[2]||(w[2]=T=>u.value=!u.value)},null,8,["icon","label"])):P("",!0)])],32))}}),zl=O({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(l,a)=>(t(),q("ul",{class:A(["list-disc",{"ms-5":e.alignment==="left"}])},[(t(!0),q(C,null,M(e.bullets,d=>(t(),q("li",null,j(d),1))),256))],2))}}),Dl={class:"w-full ql-editor no-input"},jl=["innerHTML"],Il=O({__name:"BlogPostDescription",props:{description:{}},setup(e){return(l,a)=>(t(),q("div",Dl,[p("div",{innerHTML:e.description},null,8,jl)]))}}),Ve=O({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(l,a)=>(t(),g(_,{class:A(["!p-0 md:!p-3",e.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",e.post?.colorTertiary,e.post?.opacityTertiary||"bg-opacity-50"])},{default:x(()=>[c(o(Be),null,{default:x(()=>[e.thumb?(t(),q("div",{key:0,class:"h-[20vh] inset-0 rounded-primary bg-cover bg-center",style:Ze({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(t(),g(je,{key:1,src:e.coverImageUrl,"image-class":["cover-image md:rounded-primary",e.imageClass]},null,8,["src","image-class"]))]),_:1})]),_:1},8,["class"]))}}),Ll=["innerHTML"],El=O({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const l=e,a=S(()=>Oe(l.tableData)),d=S(()=>a.value.length?a.value[0].map((i,u)=>i||u):[]),v=S(()=>a.value.slice(1).filter(i=>i.some(u=>!!u)).map(i=>{const u={};return d.value.forEach((r,b)=>{u[r]=s(i[b])}),u})),s=i=>{const u=/(https?:\/\/[^\s]+)/g;return i.replace(u,r=>{let b=r.replace("http://","").replace("https://","").replace("www.","");return b.length>15&&(b=b.substring(0,15)+"..."),`<a href="${r}" target="_blank">${b}</a>`})};return(i,u)=>(t(),g(o(_e),{value:v.value,"pt:root":"w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]",showHeaders:d.value.some(r=>typeof r=="string"),removableSort:""},{default:x(()=>[(t(!0),q(C,null,M(d.value,(r,b)=>(t(),g(o(el),{key:r,field:y=>y[r],header:typeof r=="string"?r:"",sortable:""},{body:x(({data:y})=>[p("span",{class:A(["text-nowrap",[{"font-bold":b===0},{"text-left":e.alignment==="left"||!e.alignment,"text-center":e.alignment==="center","text-right":e.alignment==="right"}]]),innerHTML:y[r]},null,10,Ll)]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","showHeaders"]))}}),Ml={class:"text-2xl font-bold"},Al=O({__name:"BlogPostTitle",props:{title:{}},setup(e){return(l,a)=>(t(),q("h2",Ml,j(e.title),1))}}),Hl={key:1,class:"w-full flex flex-col gap-1 items-center"},Nl={key:0},Gl={key:0,class:"font-bold text-lg md:text-2xl"},Fl={key:1,class:"font-bold"},Kl={key:1},Ql=O({__name:"BlogPostContent",props:{post:{},block:{}},setup(e){const l=e,a=S(()=>l.block.isGroup()&&l.block.value.length>0&&l.block.value[0].type==="title"),d=S(()=>a.value&&l.block.isGroup()&&l.block.value.length>1&&l.block.value[1].type==="title");return(v,s)=>{const i=Re("BlogPostContent",!0);return t(),q("div",{class:A(["flex",{"justify-start":e.block.alignment==="left","justify-center":e.block.alignment==="center"||!e.block.alignment,"justify-end":e.block.alignment==="right"}])},[e.block.isBoolean()?(t(),g(o(ll),{key:0,modelValue:e.block.value,"onUpdate:modelValue":s[0]||(s[0]=u=>e.block.value=u),onLabel:"True",offLabel:"False",onIcon:"pi pi-check",offIcon:"pi pi-times",disabled:""},null,8,["modelValue"])):e.block.isNumber()?(t(),q("div",Hl,[c(o(ol),{class:"w-full",value:e.block.value},null,8,["value"]),e.block.value?P("",!0):(t(),q("span",Nl,j(e.block.value)+"% ",1))])):e.block.isString()?(t(),q(C,{key:2},[e.block.type==="title"?(t(),g(Al,{key:0,title:e.block.value},null,8,["title"])):e.block.type==="richtext"?(t(),g(Il,{key:1,description:e.block.value},null,8,["description"])):e.block.type==="table"?(t(),g(El,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,["tableData","alignment"])):e.block.type==="coverimage"?(t(),g(Ve,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,["post","cover-image-url"])):e.block.type==="image"?(t(),g(Ve,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":"!max-h-[50vh] !max-w-[50vw]"},null,8,["post","cover-image-url"])):P("",!0)],64)):e.block.isStringList()?(t(),q(C,{key:3},[e.block.type==="bulletlist"?(t(),g(zl,{key:0,bullets:e.block.value},null,8,["bullets"])):e.block.type==="imageslider"?(t(),g(o(Be),{key:1},{default:x(()=>[c(o(tl),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:x(u=>[c(je,{src:u.item,"image-class":"aspect-square object-cover w-3/4 place-self-center rounded-2xl"},null,8,["src"])]),_:1},8,["value"])]),_:1})):P("",!0)],64)):e.block.isDate()?(t(),q(C,{key:4},[e.block.type==="date"?(t(),q(C,{key:0},[Z(j(e.block.value?o(te)(e.block.value):"Geen datum beschikbaar"),1)],64)):e.block.type==="countdown"?(t(),q(C,{key:1},[e.block.value?(t(),g(ye,{key:0,time:new Date(e.block.value).getTime(),direction:"down"},null,8,["time"])):P("",!0)],64)):e.block.type==="timer"?(t(),q(C,{key:2},[e.block.value?(t(),g(ye,{key:0,time:new Date(e.block.value).getTime(),direction:"up"},null,8,["time"])):P("",!0)],64)):P("",!0)],64)):e.block.isButton()?(t(),g(L,{key:5,label:e.block.value.title,href:e.block.value.url,variant:e.block.value.variant},null,8,["label","href","variant"])):e.block.isGroup()?(t(),g(o(ne),{key:6,class:"w-full",onTabOpen:o(ae)},{default:x(()=>[c(o(W),{value:"0",disabled:!e.block.value.length},{default:x(()=>[c(o(J),{class:A(["px-0 bg-transparent !border-none",{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:x(()=>[p("div",null,[a.value?(t(),q(C,{key:0},[a.value?(t(),q("p",Gl,j(e.block.value[0].value),1)):P("",!0),d.value?(t(),q("p",Fl,j(e.block.value[1].value),1)):P("",!0)],64)):e.block.value.length?(t(),q("p",Kl,"Klik om te openen")):P("",!0)])]),_:1},8,["class","pt"]),c(o(Y),{pt:{content:{class:"flex flex-col gap-3"}}},{default:x(()=>[(t(!0),q(C,null,M(e.block.value.slice(d.value?2:a.value?1:0),u=>(t(),g(i,{key:u.id,post:e.post,block:u},null,8,["post","block"]))),128))]),_:1})]),_:1},8,["disabled"])]),_:1},8,["onTabOpen"])):P("",!0)],2)}}}),Wl={class:"flex flex-wrap justify-end h-fit gap-3"},Jl=O({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(l,a)=>(t(),q("div",Wl,[c(Ie,{onClick:a[0]||(a[0]=d=>l.$emit("editClicked"))}),c(de,{onClick:a[1]||(a[1]=d=>l.$emit("deleteClicked"))})]))}}),Yl={class:"flex justify-between h-fit mt-2 gap-2"},Xl={class:"flex flex-wrap gap-3"},st=O({__name:"BlogPost",props:{post:{}},setup(e){const l=e,a=al(),d=le(),v=be(),s=ie(),i=X(),{publicUsers:u}=R(v),{firebaseUser:r,isOwner:b}=R(d),{deleteBlogPost:y}=s,f=B(!1);a.currentRoute.value.name!==Q.BLOG&&Tl(l.post);const k=S(()=>l.post.allowedUserIds?.length?u.value.filter($=>l.post.allowedUserIds?.includes($.id)):[]),U=S(()=>{const $=te(l.post.date);return l.post.dateUpdated?$+` - aangepast ${te(l.post.dateUpdated)}`:$}),n=S(()=>{const $=[];return l.post.datePinned&&$.push({value:"Vastgemaakt",severity:"success",rounded:!1}),l.post.locked&&$.push({value:"Gesloten",severity:"danger",rounded:!1,icon:"pi pi-lock"}),l.post.archived&&$.push({value:"Gearchiveerd",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),$}),m=()=>{i.openWith(l.post)},h=()=>{f.value=!0},w=async()=>{await y(l.post.id)&&(f.value=!1)},T=()=>{const $=document.createElement("textarea"),{protocol:I,hostname:D,port:z}=window.location,G=`${I}//${D}`+(D==="localhost"?`:${z}`:"");$.value=`${G}#${il.BLOG.path}/${l.post.id}`,document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($),qe.success("Link gekopieerd!")};return($,I)=>(t(),q(C,null,[c(_,{id:e.post.id,class:A(["border-4 border-transparent","!rounded-primary",e.post.colorSecondary||e.post.colorPrimary||"bg-secondary-900",e.post.opacitySecondary||"bg-opacity-50"]),title:e.post.title,subTitle:U.value,tags:n.value,clickable:"",route:{name:o(Q).BLOG_DETAILS,params:{postId:e.post.id}}},{right:x(()=>[c(L,{class:"h-fit",variant:"neutral",icon:"pi pi-copy",text:"",onClick:T})]),default:x(()=>[p("div",Yl,[p("div",Xl,[(t(!0),q(C,null,M(k.value,D=>(t(),g(o(nl),{class:"h-fit !p-0 !px-4 !py-1 !bg-red-800 !bg-opacity-50",icon:"pi pi-user",label:D.id===o(r)?.uid?"Jij":D.displayName,rounded:""},null,8,["label"]))),256))]),o(b)?(t(),q("div",{key:0,class:A(["flex justify-end ms-5",e.post.allowedUserIds?.length?"flex-col md:flex-row":"flex-row"])},[c(Jl,{onEditClicked:m,onDeleteClicked:h})],2)):P("",!0)]),c(_,{class:A(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3",e.post.colorPrimary,e.post.opacityPrimary||"bg-opacity-50"])},{default:x(()=>[(t(!0),q(C,null,M(e.post.content,D=>(t(),g(Ql,{key:D.id,post:e.post,block:D},null,8,["post","block"]))),128))]),_:1},8,["class"]),c(Rl,{post:e.post},null,8,["post"])]),_:1},8,["id","class","title","subTitle","tags","route"]),c(De,{title:"Verwijder bericht",isOpen:f.value,description:[` Weet je zeker dat je dit bericht genaamd '${e.post.title}' wilt verwijderen?`,"Dit kan niet ongedaan worden gemaakt."],"confirm-text":"Bevestigen","confirm-props":{variant:"danger",outlined:!0},onConfirm:w,onCancel:I[0]||(I[0]=D=>f.value=!1)},null,8,["isOpen","description"])],64))}}),Zl={class:"block text-sm font-bold mb-2"},_l={class:"bg-black bg-opacity-25 rounded-2xl"},eo={class:"grid grid-cols-6 items-center"},lo=O({__name:"ImageSliderField",props:pe({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=ze(e,"modelValue"),a=v=>{l.value.splice(v,1)},d=(v,s)=>{l.value[v]=s};return(v,s)=>(t(),q("div",null,[p("p",Zl,j(e.label),1),p("div",_l,[c(o(me),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=i=>l.value=i),itemKey:"index",handle:".drag-handle"},{item:x(({element:i,index:u})=>[p("div",eo,[s[1]||(s[1]=p("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),c(Le,{class:"col-span-4",id:`${e.name}.${u}`,name:`${e.name}.${u}`,modelValue:i,"blog-post":e.blogPost,"onUpdate:modelValue":r=>d(u,r)},null,8,["id","name","modelValue","blog-post","onUpdate:modelValue"]),c(de,{onClick:r=>a(u)},null,8,["onClick"])])]),_:1},8,["modelValue"])])]))}});var oo=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`,to={root:function(l){var a=l.instance;return["p-editor",{"p-invalid":a.$invalid}]},toolbar:"p-editor-toolbar",content:"p-editor-content"},no=rl.extend({name:"editor",style:oo,classes:to}),ao={name:"BaseEditor",extends:sl,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:no,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ee(e)}function $e(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);l&&(d=d.filter(function(v){return Object.getOwnPropertyDescriptor(e,v).enumerable})),a.push.apply(a,d)}return a}function io(e){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?$e(Object(a),!0).forEach(function(d){ro(e,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$e(Object(a)).forEach(function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(a,d))})}return e}function ro(e,l,a){return(l=so(l))in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function so(e){var l=co(e,"string");return ee(l)=="symbol"?l:l+""}function co(e,l){if(ee(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var d=a.call(e,l);if(ee(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(e)}var Pe=(function(){try{return window.Quill}catch{return null}})(),Ee={name:"Editor",extends:ao,inheritAttrs:!1,emits:["text-change","selection-change","load"],quill:null,watch:{modelValue:function(l,a){l!==a&&this.quill&&!this.quill.hasFocus()&&this.renderValue(l)},d_value:function(l,a){l!==a&&this.quill&&!this.quill.hasFocus()&&this.renderValue(l)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var l=this,a={modules:io({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Pe?(this.quill=new Pe(this.$refs.editorElement,a),this.initQuill(),this.handleLoad()):dl(()=>import("./c-quill-Bg0H32zt.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(function(d){d&&cl(l.$refs.editorElement)&&(d.default?l.quill=new d.default(l.$refs.editorElement,a):l.quill=new d(l.$refs.editorElement,a),l.initQuill())}).then(function(){l.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(l){if(this.quill)if(l){var a=this.quill.clipboard.convert({html:l});this.quill.setContents(a)}else this.quill.setText("")},initQuill:function(){var l=this;this.renderValue(this.d_value),this.quill.on("text-change",function(a,d,v){if(v==="user"){var s=l.quill.getSemanticHTML(),i=l.quill.getText().trim();s==="<p><br></p>"&&(s=""),l.writeValue(s),l.$emit("text-change",{htmlValue:s,textValue:i,delta:a,source:v,instance:l.quill})}}),this.quill.on("selection-change",function(a,d,v){var s=l.quill.getSemanticHTML(),i=l.quill.getText().trim();l.$emit("selection-change",{htmlValue:s,textValue:i,range:a,oldRange:d,source:v,instance:l.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function uo(e,l,a,d,v,s){return t(),q("div",V({class:e.cx("root")},e.ptmi("root")),[p("div",V({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ul(e.$slots,"toolbar",{},function(){return[p("span",V({class:"ql-formats"},e.ptm("formats")),[p("select",V({class:"ql-header",defaultValue:"0"},e.ptm("header")),[p("option",V({value:"1"},e.ptm("option")),"Heading",16),p("option",V({value:"2"},e.ptm("option")),"Subheading",16),p("option",V({value:"0"},e.ptm("option")),"Normal",16)],16),p("select",V({class:"ql-font"},e.ptm("font")),[p("option",ql(pl(e.ptm("option"))),null,16),p("option",V({value:"serif"},e.ptm("option")),null,16),p("option",V({value:"monospace"},e.ptm("option")),null,16)],16)],16),p("span",V({class:"ql-formats"},e.ptm("formats")),[p("button",V({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),p("button",V({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),p("button",V({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),p("span",V({class:"ql-formats"},e.ptm("formats")),[p("select",V({class:"ql-color"},e.ptm("color")),null,16),p("select",V({class:"ql-background"},e.ptm("background")),null,16)],16),p("span",V({class:"ql-formats"},e.ptm("formats")),[p("button",V({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),p("button",V({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),p("select",V({class:"ql-align"},e.ptm("select")),[p("option",V({defaultValue:""},e.ptm("option")),null,16),p("option",V({value:"center"},e.ptm("option")),null,16),p("option",V({value:"right"},e.ptm("option")),null,16),p("option",V({value:"justify"},e.ptm("option")),null,16)],16)],16),p("span",V({class:"ql-formats"},e.ptm("formats")),[p("button",V({class:"ql-link",type:"button"},e.ptm("link")),null,16),p("button",V({class:"ql-image",type:"button"},e.ptm("image")),null,16),p("button",V({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),p("span",V({class:"ql-formats"},e.ptm("formats")),[p("button",V({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),p("div",V({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}Ee.render=uo;const qo=["for"],po=O({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:["update:modelValue","click"],setup(e,{emit:l}){const a=e,d=S({get:()=>a.modelValue||"",set:r=>{u("update:modelValue",r)}}),v=S(()=>a.label?a.label+(a.required?" *":""):void 0),s=S(()=>a.name+(a.id?`.${a.id}`:"")),i=({instance:r})=>{r.setContents(r.clipboard.convert({html:d.value}))},u=l;return(r,b)=>(t(),q("div",null,[e.label?(t(),q("label",V({key:0,class:"block text-sm font-bold mb-2",for:s.value},e.labelProps),j(v.value),17,qo)):P("",!0),c(o(Ee),V({id:s.value,placeholder:e.placeholder,modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=y=>d.value=y),onLoad:i},e.editorProps),null,16,["id","placeholder","modelValue"]),e.error?(t(),g(Cl,{key:1,name:e.name,error:e.error},null,8,["name","error"])):P("",!0)]))}}),bo={class:"p-4 bg-black bg-opacity-25 rounded-2xl"},mo={class:"flex gap-3"},vo=O({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,d=l,v=B(""),s=S({get:()=>a.modelValue.slice(),set:r=>{d("update:modelValue",r),v.value=""}}),i=(r,b)=>{const y=s.value.slice();y.splice(r,1,b),s.value=y},u=r=>{const b=s.value.slice();b.splice(r,1),s.value=b};return(r,b)=>(t(),q("div",bo,[c(o(me),{modelValue:s.value,"onUpdate:modelValue":b[0]||(b[0]=y=>s.value=y),itemKey:"index",handle:".drag-handle"},{item:x(({element:y,index:f})=>[p("div",mo,[b[1]||(b[1]=p("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),c(F,{class:"w-full",id:`${e.name}.${f}`,name:e.name,"model-value":y,max:200,"delete-button":"","onUpdate:modelValue":k=>i(f,k.toString()),"onUpdate:delete":k=>u(f)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])]))}}),fo=["for"],ko={class:"table w-full"},go={class:"table-header-group"},wo={key:0,class:"table-row"},ho={key:0,class:"table-cell"},yo={class:"table-cell"},xo={class:"table-row-group"},Vo={key:0,class:"table-cell"},$o={key:1,class:"table-cell"},Po={key:2,class:"table-cell"},So={class:"table-footer-group"},Co={class:"table-row"},Uo={key:0,class:"table-cell"},To=O({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:l}){const a=e,d=l,s=hl(yl).greaterOrEqual("md"),i=S({get:()=>Oe(a.modelValue),set:h=>{d("update:modelValue",ge(h))}}),u=S(()=>a.name+(a.id?"."+a.id:"")),r=S(()=>s.value&&i.value[0]?.length<2),b=(h,w,T)=>{const $=[...i.value];$[h][w]=T,d("update:modelValue",ge($))},y=()=>{const h=i.value;if(h.length){const w=h[0];w.length?i.value=[...h,w.map(()=>"")]:i.value=[...h,[""]]}else i.value=[[""]]},f=h=>{const w=i.value;if(w.length){const T=w[0];w.splice(h,0,T.map(()=>"")),i.value=[...w]}},k=h=>{i.value.splice(h,1),i.value=i.value},U=()=>{i.value=i.value.map(h=>[...h,""])},n=h=>{const w=i.value;for(const T of w)T.splice(h,0,"");i.value=[...w]},m=h=>{i.value=i.value.map(w=>(w.splice(h,1),w))};return(h,w)=>(t(),q("div",null,[e.label?(t(),q("label",V({key:0,class:"block text-sm font-bold mb-2",for:u.value},e.labelProps),j(e.label),17,fo)):P("",!0),p("div",ko,[p("div",go,[i.value.length&&i.value[0].length>1?(t(),q("div",wo,[i.value.length>1?(t(),q("div",ho)):P("",!0),(t(!0),q(C,null,M(i.value[0],(T,$)=>(t(),q("div",yo,[i.value.length&&i.value[0].length?(t(),g(L,{key:0,class:"md:text-start text-nowrap",variant:"danger",icon:"pi pi-times",outlined:"",label:r.value?"Remove column":void 0,onClick:I=>m($)},null,8,["label","onClick"])):P("",!0)]))),256))])):P("",!0)]),p("div",xo,[(t(!0),q(C,null,M(i.value,(T,$)=>(t(),q("div",{key:$,class:"table-row"},[i.value.length>1?(t(),q("div",Vo,[c(L,{class:"md:text-start text-nowrap",variant:"danger",icon:"pi pi-times",outlined:"",label:r.value?"Remove row":void 0,onClick:I=>k($)},null,8,["label","onClick"])])):P("",!0),(t(!0),q(C,null,M(T,(I,D)=>(t(),g(F,{key:D,class:"table-cell !m-0",name:`${e.name}.${$}.${D}`,modelValue:I,placeholder:$===0||D===0?"header":"cell","onUpdate:modelValue":z=>b($,D,z.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),$===0?(t(),q("div",$o,[c(L,{class:"md:text-start text-nowrap",variant:"green",icon:"pi pi-plus",outlined:"",label:r.value?"Add column":void 0,onClick:U},null,8,["label"])])):(t(),q("div",Po,[c(L,{class:"md:text-start text-nowrap",variant:"neutral",icon:"pi pi-arrow-up-left",outlined:"",label:r.value?"Insert row":void 0,onClick:I=>f($)},null,8,["label","onClick"])]))]))),128))]),p("div",So,[p("div",Co,[i.value.length>1?(t(),q("div",Uo)):P("",!0),(t(!0),q(C,null,M(i.value[0],(T,$)=>(t(),q("div",{class:"table-cell",key:$},[$===0?(t(),g(L,{key:0,class:"md:text-start text-nowrap",variant:"green",icon:"pi pi-plus",outlined:"",label:r.value?"Add row":void 0,onClick:y},null,8,["label"])):(t(),g(L,{key:1,class:"md:text-start text-nowrap",variant:"neutral",icon:"pi pi-arrow-up-left",outlined:"",label:r.value?"Insert row":void 0,onClick:I=>n($)},null,8,["label","onClick"]))]))),128))])])])]))}}),Bo={class:"w-full flex flex-col gap-3"},Oo={class:"flex gap-5"},Ro={key:0},zo={key:1},Do={key:1,class:"w-full flex gap-3 justify-between"},jo={key:1,class:"w-full flex flex-col items-center gap-3 justify-center"},Io={key:5,class:"w-full flex gap-3"},Lo={key:6},Eo={class:"flex flex-col gap-1"},Mo=O({__name:"BlogPostContentBlocksDialog",props:pe({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:pe(["delete"],["update:modelValue"]),setup(e){const l=ze(e,"modelValue"),a=X(),{blogPostOriginal:d}=R(a),v=B("title"),s=B("center"),i=B(!0),u=B(null),r=async()=>{l.value.push(vl.createInstance(fl(),v.value,v.value,s.value)),i.value=!1,setTimeout(()=>{i.value=!0})},b=f=>{const k=l.value.findIndex(U=>U.id===f);l.value.splice(k,1)},y=f=>{u.value=u.value===f?null:f};return(f,k)=>{const U=Re("BlogPostContentBlocksDialog",!0);return t(),q("div",Bo,[l.value.length?(t(),g(o(me),{key:0,ref:"draggableRef",class:"flex flex-col gap-3",modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=n=>l.value=n),itemKey:n=>n.id,handle:".drag-handle"},{item:x(({element:n})=>[p("div",{class:A({"bg-neutral-500 bg-opacity-25 rounded-primary py-1 px-3 mt-3":u.value===n.id})},[n.isGroup()?(t(),g(o(ne),{key:0,class:"w-full",onTabOpen:o(ae)},{default:x(()=>[c(o(W),{value:"0"},{default:x(()=>[c(o(J),{class:"drag-handle"},{default:x(()=>[p("div",Oo,[k[4]||(k[4]=p("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),n.value.length&&typeof n.value[0].value=="string"?(t(),q("p",Ro,j(n.value[0].value),1)):(t(),q("p",zo,j(n.getLabel()),1))])]),_:2},1024),c(o(Y),null,{default:x(()=>[c(U,{id:n.id,modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,onDelete:m=>b(n.id)},null,8,["id","modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["onTabOpen"])):(t(),q("div",Do,[k[5]||(k[5]=p("i",{class:"drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer"},null,-1)),n.isBoolean()?(t(),g(oe,{key:0,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.isNumber()?(t(),q("div",jo,[c(o(bl),{class:"w-full",name:n.id,modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","modelValue","onUpdate:modelValue"]),p("p",null,j(n.value)+"%",1)])):n.isString()?(t(),q(C,{key:2},[n.type==="title"?(t(),g(F,{key:0,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.type==="richtext"?(t(),g(po,{key:1,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.type==="table"?(t(),g(To,{key:2,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.type==="coverimage"||n.type==="image"?(t(),g(Le,{key:3,name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,"blog-post":o(d)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):P("",!0)],64)):n.isStringList()?(t(),q(C,{key:3},[n.type==="bulletlist"?(t(),g(vo,{key:0,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.type==="imageslider"?(t(),g(lo,{key:1,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,"blog-post":o(d)},null,8,["name","label","modelValue","onUpdate:modelValue","blog-post"])):P("",!0)],64)):n.isDate()?(t(),g(Pl,{key:4,class:"w-full",name:n.id,label:n.getLabel(),modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","label","modelValue","onUpdate:modelValue"])):n.isButton()?(t(),q("div",Io,[c(F,{class:"w-1/2",name:`${n.id}-title`,label:"Knop titel",modelValue:n.value.title,"onUpdate:modelValue":m=>n.value.title=m},null,8,["name","modelValue","onUpdate:modelValue"]),c(F,{class:"w-1/2",name:`${n.id}-url`,label:"Knop link",modelValue:n.value.url,"onUpdate:modelValue":m=>n.value.url=m},null,8,["name","modelValue","onUpdate:modelValue"]),c(E,{class:"w-full md:w-1/2",name:`${n.id}-variant`,label:"Knop variant",modelValue:n.value.variant,"onUpdate:modelValue":m=>n.value.variant=m,options:[{value:"primary",label:"Primair"},{value:"secondary",label:"Secundair"},{value:"tertiary",label:"Tertiair"}]},null,8,["name","modelValue","onUpdate:modelValue"])])):(t(),q("p",Lo,j(n.getLabel()),1)),p("div",Eo,[c(Ie,{onClick:m=>y(n.id)},null,8,["onClick"]),c(de,{onClick:m=>b(n.id)},null,8,["onClick"]),Array.isArray(n.value)?(t(),g(Sl,{key:0,onClick:m=>n.value.push("")},null,8,["onClick"])):P("",!0)])])),u.value===n.id?(t(),g(E,{key:2,class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning","model-value":n.alignment??"center","onUpdate:modelValue":m=>n.alignment=m,options:o(we)},null,8,["name","model-value","onUpdate:modelValue","options"])):P("",!0)],2)]),_:1},8,["modelValue","itemKey"])):P("",!0),i.value?(t(),g(o(ne),{key:1,onTabOpen:o(ae)},{default:x(()=>[c(o(W),{value:"0"},{default:x(()=>[c(o(J),{"pt:root":"!bg-green-500 !bg-opacity-25 !border-none"},{default:x(()=>[...k[6]||(k[6]=[Z(" Voeg content toe ",-1)])]),_:1}),c(o(Y),{"pt:root":"bg-green-500 bg-opacity-25 rounded-b-2xl","pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[c(E,{class:"w-full md:w-1/2",name:`${e.id}.contentType`,label:"Content type",modelValue:v.value,"onUpdate:modelValue":k[1]||(k[1]=n=>v.value=n),options:Object.entries(o(ml)).map(([n,m])=>({value:n,label:m}))},null,8,["name","modelValue","options"]),c(E,{class:"w-full md:w-1/2",name:`${e.id}.contentAlignment`,label:"Content uitlijning",modelValue:s.value,"onUpdate:modelValue":k[2]||(k[2]=n=>s.value=n),options:o(we)},null,8,["name","modelValue","options"]),c(L,{class:"w-full md:w-1/2",variant:"green",label:"Voeg content toe",onClick:r}),e.id?(t(),g(L,{key:0,class:"w-full md:w-1/2 bg-opacity-75",variant:"danger",label:"Verwijder groep",onClick:k[3]||(k[3]=n=>f.$emit("delete"))})):P("",!0)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):P("",!0)])}}}),Ao=O({__name:"BlogPostContentDialog",emits:["update:selected","error"],setup(e,{expose:l,emit:a}){const d=a,v=X(),{blogPostMutation:s}=R(v),i=S(()=>({title:{required:N,minLength:Vl(3),maxLength:xl(50)}})),u=se(i,s,{$autoDirty:!0});return l({test:async()=>{d("error",!await u.value.$validate())}}),(b,y)=>(t(),q(C,null,[c(F,{class:"w-full",name:"title",label:"Title",placeholder:"Amazing Post",modelValue:o(s).title,"onUpdate:modelValue":y[0]||(y[0]=f=>o(s).title=f),error:o(u).title.$error?o(H)(o(u).title):"",required:"","min-length":3,"max-length":50},null,8,["modelValue","error"]),c(Mo,{modelValue:o(s).content,"onUpdate:modelValue":y[1]||(y[1]=f=>o(s).content=f)},null,8,["modelValue"])],64))}}),Ho=O({__name:"BlogPostSettingsDialog",emits:["error"],setup(e,{expose:l,emit:a}){const d=a,v=be(),s=X(),{blogPostMutation:i}=R(s),{allowedPublicUsers:u}=v,{mappedUsers:r}=Ul(),b=S({get(){return!!i.value.datePinned},set(m){i.value.datePinned=m?new Date:null}}),y=B([]),f=$l.withMessage("Invalid user ID's",m=>!m.length||m.length===y.value.length),k=S(()=>({allowedUserIds:{validAllowedUserIds:f}})),U=se(k,i,{$autoDirty:!0}),n=async()=>{d("error",!await U.value.$validate())};return Te(()=>i.value.allowedUserIds,async m=>{y.value=await u(m)},{immediate:!0}),l({test:n}),(m,h)=>(t(),q(C,null,[c(E,{class:"w-full md:w-1/2",name:"allowedUserIds",label:"Toegestane gebruikers",placeholder:"Dit bericht is openbaar",modelValue:o(i).allowedUserIds,"onUpdate:modelValue":h[0]||(h[0]=w=>o(i).allowedUserIds=w),error:o(U).allowedUserIds.$error?o(H)(o(U).allowedUserIds):"",options:o(r),multiple:""},null,8,["modelValue","error","options"]),c(oe,{class:"w-full md:w-1/2",name:"pinned",label:"Vastgemaakt",modelValue:b.value,"onUpdate:modelValue":h[1]||(h[1]=w=>b.value=w)},null,8,["modelValue"]),c(oe,{class:"w-full md:w-1/2",name:"locked",label:"Gesloten voor reacties",modelValue:o(i).locked,"onUpdate:modelValue":h[2]||(h[2]=w=>o(i).locked=w)},null,8,["modelValue"]),c(oe,{class:"w-full md:w-1/2",name:"archived",label:"Gearchiveerd",modelValue:o(i).archived,"onUpdate:modelValue":h[3]||(h[3]=w=>o(i).archived=w)},null,8,["modelValue"])],64))}}),No=O({__name:"BlogPostStylingDialog",emits:["error"],setup(e,{expose:l,emit:a}){const d=a,v=X(),{blogPostMutation:s}=R(v),i=S(()=>gl(he.find(y=>y.value===s.value.colorPrimary))),u=S(()=>({colorPrimary:{required:N},colorSecondary:{required:N},colorTertiary:{required:N},opacityPrimary:{required:N},opacitySecondary:{required:N},opacityTertiary:{required:N}})),r=se(u,s,{$autoDirty:!0});return l({test:async()=>{d("error",!await r.value.$validate())}}),(y,f)=>(t(),q(C,null,[c(E,{class:"w-full md:w-1/2",name:"colorPrimary",label:"Primary Style",modelValue:o(s).colorPrimary,"onUpdate:modelValue":f[0]||(f[0]=k=>o(s).colorPrimary=k),error:o(r).colorPrimary.$error?o(H)(o(r).colorPrimary):"",options:o(he),required:""},null,8,["modelValue","error","options"]),c(E,{class:"w-full md:w-1/2",name:"opacityPrimary",label:"Primary Opacity",modelValue:o(s).opacityPrimary,"onUpdate:modelValue":f[1]||(f[1]=k=>o(s).opacityPrimary=k),error:o(r).opacityPrimary.$error?o(H)(o(r).opacityPrimary):"",options:o(ce),required:""},null,8,["modelValue","error","options"]),c(E,{class:"w-full md:w-1/2",name:"colorSecondary",label:"Secondary Style",modelValue:o(s).colorSecondary,"onUpdate:modelValue":f[2]||(f[2]=k=>o(s).colorSecondary=k),error:o(r).colorSecondary.$error?o(H)(o(r).colorSecondary):"",options:i.value,required:""},null,8,["modelValue","error","options"]),c(E,{class:"w-full md:w-1/2",name:"opacitySecondary",label:"Secondary Opacity",modelValue:o(s).opacitySecondary,"onUpdate:modelValue":f[3]||(f[3]=k=>o(s).opacitySecondary=k),error:o(r).opacitySecondary.$error?o(H)(o(r).opacitySecondary):"",options:o(ce),required:""},null,8,["modelValue","error","options"]),c(E,{class:"w-full md:w-1/2",name:"colorTertiary",label:"Tertiary Style",modelValue:o(s).colorTertiary,"onUpdate:modelValue":f[4]||(f[4]=k=>o(s).colorTertiary=k),error:o(r).colorTertiary.$error?o(H)(o(r).colorTertiary):"",options:o(kl),required:""},null,8,["modelValue","error","options"]),c(E,{class:"w-full md:w-1/2",name:"opacityTertiary",label:"Tertiary Opacity",modelValue:o(s).opacityTertiary,"onUpdate:modelValue":f[5]||(f[5]=k=>o(s).opacityTertiary=k),error:o(r).opacityTertiary.$error?o(H)(o(r).opacityTertiary):"",options:o(ce),required:""},null,8,["modelValue","error","options"])],64))}}),Go={ref:"dialog",class:"pt-6 mb-4 xl:px-16"},dt=O({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:l}){const a=l;le();const d=ie(),v=wl(),s=X(),{isBlogPostsMutationLoading:i}=R(d),{isOpen:u,blogPostOriginal:r,blogPostMutation:b,hasChanges:y}=R(s),f=B(),k=B(),U=B(),n=B(!1),m=B(!1),h=B(!1),w=S(()=>!!r.value?.allowedUserIds?.length&&!b.value.allowedUserIds?.length||!r.value?.allowedUserIds?.length&&!!b.value.allowedUserIds?.length),T=S(()=>Ce(r.value)),$=async()=>{await Promise.all([f.value.test(),k.value.test(),U.value.test()]),!(n.value||m.value||h.value)&&(r.value?w.value?(s.isOpen=!1,await d.toggleBlogPostVisibility(r.value,b.value.allowedUserIds.length?"private":"public")&&(s.close(),qe.success("Zichtbaarheid van bericht succesvol bijgewerkt"),a("scroll-to-updated",b.value.id))):await d.updateBlogPost(b.value,T.value)&&(qe.success("Bericht succesvol bijgewerkt"),s.close(),a("scroll-to-updated",b.value.id)):await d.createBlogPost(b.value)&&(s.close(),a("scroll-to-updated",b.value.id)))},I=async()=>{await v.deleteFilesOfBlogPost(b.value,r.value??void 0),s.close()};return(D,z)=>(t(),g(De,{isOpen:o(u),title:o(r)?"Bericht bijwerken":"Bericht maken",description:o(r)?"Werk dit bericht bij":"Maak een nieuw bericht","confirm-text":o(r)?"Bijwerken":"Maken","confirm-loading":o(i),"confirm-props":{disabled:!o(y)},onConfirm:$,onCancel:I},{default:x(()=>[p("form",Go,[o(u)?(t(),g(o(ne),{key:0,"active-index":0,onTabOpen:o(ae)},{default:x(()=>[c(o(W),{value:"content"},{default:x(()=>[c(o(J),null,{default:x(()=>[...z[3]||(z[3]=[Z(" Content ",-1)])]),_:1}),c(o(Y),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[c(Ao,{ref_key:"content",ref:f,onError:z[0]||(z[0]=G=>n.value=G)},null,512)]),_:1})]),_:1}),c(o(W),{value:"styling"},{default:x(()=>[c(o(J),null,{default:x(()=>[...z[4]||(z[4]=[Z(" Styling ",-1)])]),_:1}),c(o(Y),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[c(No,{ref_key:"styling",ref:k,onError:z[1]||(z[1]=G=>m.value=G)},null,512)]),_:1})]),_:1}),c(o(W),{value:"settings"},{default:x(()=>[c(o(J),null,{default:x(()=>[...z[5]||(z[5]=[Z(" Settings ",-1)])]),_:1}),c(o(Y),{"pt:content":"flex flex-col justify-center items-center gap-3"},{default:x(()=>[c(Ho,{ref_key:"settings",ref:U,onError:z[2]||(z[2]=G=>h.value=G)},null,512)]),_:1})]),_:1})]),_:1},8,["onTabOpen"])):P("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading","confirm-props"]))}});export{st as _,dt as a,X as b,Jl as c,Ql as d,rt as u};
