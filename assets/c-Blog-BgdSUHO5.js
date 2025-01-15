import{_ as fe,a as He}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-E4RvhRYK.js";import{_ as al}from"./c-Page.vue_vue_type_script_setup_true_lang-DsrPRCzi.js";import{d as sl,r as a,a as dl,c as B,I as te,v as ul,b as he,e as Y,u as pl,f as We,g as Ke,h as me,i as we,s as M,o as Qe,j as cl,F as ql,R as ie,k as l,l as s,m as S,n as m,p as j,q,t as D,w as O,x as le,B as Je,y as Ye,z as $,A as ae,C as Ie,D as Be,E as A,G as pe,H as De,J as se,K as Le,L as ml,M as Ue,N as ye,O as Ve,P as ce,_ as bl,Q as vl,S as fl,T as gl,U as kl,V as Re,W as wl,X as ge,Y as Ee,Z as yl,$ as hl,a0 as Ae,a1 as Ce,a2 as Vl,a3 as ze,a4 as Cl}from"../bundle.js";import{_ as J,a as xe,u as Xe,b as Ze,s as ve}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BKzNF-TX.js";import{_ as el,a as Me,s as $e,b as $l,c as Sl,d as Ne,u as Pl}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-nKh5hTHz.js";import{_ as Ge}from"./c-Countdown.vue_vue_type_script_setup_true_lang-liM5Fw9D.js";import{s as de,a as Te}from"./c-accordiontab.esm-BILpUr6U.js";import{D as ke}from"./c-DateField-DwZc4feZ.js";import{_ as ll}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-CVHL9AZd.js";import{V as Ul,R as re,_ as El}from"./c-validation-CO90d-7g.js";import{_ as ue}from"./c-TextField.vue_vue_type_script_setup_true_lang-iG9TY5KO.js";import{D as nl}from"./c-vuedraggable.umd-CDu6AEqu.js";import{_ as Z}from"./c-SelectField.vue_vue_type_script_setup_true_lang-DIXoT02e.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-Image.vue_vue_type_script_setup_true_lang-CPURrayJ.js";const Se=e=>(e==null?void 0:e.id)??ul(),Pe=e=>{var n;return{date:e!=null&&e.date?new Date(e.date):new Date,dateUpdated:e!=null&&e.dateUpdated?new Date(e.dateUpdated):new Date,title:(e==null?void 0:e.title)??"",description:(e==null?void 0:e.description)??"",descriptionFooter:(e==null?void 0:e.descriptionFooter)??"",coverImageUrl:(e==null?void 0:e.coverImageUrl)??"",timer:e!=null&&e.timer?new Date(e.timer):null,countdown:e!=null&&e.countdown?new Date(e.countdown):null,table:(e==null?void 0:e.table)??"",sections:((n=e==null?void 0:e.sections)==null?void 0:n.slice().map(p=>({...p,bullets:p.bullets.slice(),timer:p.timer?new Date(p.timer):null,countdown:p.countdown?new Date(p.countdown):null})))??[],alignment:(e==null?void 0:e.alignment)??"center",tableAlignment:(e==null?void 0:e.tableAlignment)??"left",colorPrimary:(e==null?void 0:e.colorPrimary)??"",colorSecondary:(e==null?void 0:e.colorSecondary)??"",colorTertiary:(e==null?void 0:e.colorTertiary)??"",opacityPrimary:(e==null?void 0:e.opacityPrimary)??"",opacitySecondary:(e==null?void 0:e.opacitySecondary)??"",opacityTertiary:(e==null?void 0:e.opacityTertiary)??"",locked:(e==null?void 0:e.locked)??!1,allowedUserIds:(e==null?void 0:e.allowedUserIds)??[],archived:(e==null?void 0:e.archived)??!1,datePinned:e!=null&&e.datePinned?new Date(e.datePinned):null}},be=sl("blogPostDialogStore",()=>{const e=a(!1),n=a(null),p=a(Se(null)),i=a(Pe(null)),f=dl({hasContentChanges:!1,hasStylingChanges:!1,hasSettingsChanges:!1}),d=B(()=>n.value?te.convert(n.value):null),r=B(()=>f.hasContentChanges),T=B(()=>f.hasStylingChanges),E=B(()=>f.hasSettingsChanges),P=()=>{n.value=null,p.value=Se(null),i.value=Pe(null),f.hasContentChanges=!1,f.hasStylingChanges=!1,f.hasSettingsChanges=!1},v=t=>{n.value=t,p.value=Se(t),i.value=Pe(t),e.value=!0},I=()=>{e.value=!1,P()},w=()=>te.Content.convert(i.value),b=()=>te.Styling.convert(i.value),c=()=>te.Settings.convert(i.value);return{isOpen:e,blogPostOriginal:n,blogPostMutationId:p,blogPostMutation:i,blogPostMutationChanges:f,blogPostOriginalMutation:d,hasBlogPostMutationContentChanges:r,hasBlogPostMutationStylingChanges:T,hasBlogPostMutationSettingsChanges:E,$reset:P,openWith:v,close:I,getBlogPostMutationContent:w,getBlogPostMutationStyling:b,getBlogPostMutationSettings:c,isMutationEqual:async()=>{d.value&&(f.hasContentChanges=!he(te.Content.convert(d.value),w()),f.hasStylingChanges=!he(te.Styling.convert(d.value),b()),f.hasSettingsChanges=!he(te.Settings.convert(d.value),c()))}}}),xl={key:0,class:"flex justify-center mt-5"},Tl={class:"grid grid-cols-6 mb-5 gap-5"},Ol=Y({__name:"BlogDetails",emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=pl(),p=We(),i=Ke(),f=me(),d=we(),{routeLoading:r}=M(i),{isLoggedIn:T}=M(f),{blogPosts:E,blogReactions:P,isBlogPostsFetchLoading:v}=M(d),{fetchBlogPost:I}=d,w=B(()=>n.params.postId);return Qe(async()=>{var b;if(P.value.unread=[],w.value)if(((b=E.value.data.single)==null?void 0:b.id)!==w.value){const c=await I(w.value);if(cl(c)&&c===ql.PERMISSION_DENIED&&!T.value){p.push({name:ie.LOGIN,params:{redirect:JSON.stringify({name:ie.BLOG_DETAILS,params:{postId:w.value}})}});return}}else E.value.data.single}),(b,c)=>l(v)?(s(),S("div",xl,[m(J,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:"",label:l(j)("GENERAL_LOADING")+"..."},null,8,["label"])])):(s(),S(le,{key:1},[q("div",Tl,[m(J,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:l(ie).BLOG,loading:l(r)===l(ie).BLOG,label:l(j)("BLOG_DETAILS_BACK"),icon:"pi pi-arrow-up-left"},null,8,["route","loading","label"])]),l(E).data.single?(s(),D(el,{key:0,post:l(E).data.single,onEditClicked:c[0]||(c[0]=o=>b.$emit("editClicked",l(E).data.single)),onDeleteClicked:c[1]||(c[1]=o=>b.$emit("deleteClicked",l(E).data.single))},null,8,["post"])):O("",!0)],64))}});var Il={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Bl=Je.extend({name:"card",classes:Il}),Dl={name:"BaseCard",extends:Ye,style:Bl},ol={name:"Card",extends:Dl,inheritAttrs:!1};function Ll(e,n,p,i,f,d){return s(),S("div",$({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(s(),S("div",$({key:0,class:e.cx("header")},e.ptm("header")),[ae(e.$slots,"header")],16)):O("",!0),q("div",$({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),S("div",$({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),S("div",$({key:0,class:e.cx("title")},e.ptm("title")),[ae(e.$slots,"title")],16)):O("",!0),e.$slots.subtitle?(s(),S("div",$({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[ae(e.$slots,"subtitle")],16)):O("",!0)],16)):O("",!0),q("div",$({class:e.cx("content")},e.ptm("content")),[ae(e.$slots,"content")],16),e.$slots.footer?(s(),S("div",$({key:1,class:e.cx("footer")},e.ptm("footer")),[ae(e.$slots,"footer")],16)):O("",!0)],16)],16)}ol.render=Ll;const Rl={class:"flex gap-3"},Al={class:"min-h-[50vh] flex flex-col"},zl={class:"flex justify-between h-fit mt-2 gap-2"},Ml={class:"flex flex-wrap gap-3"},Nl={class:"relative mt-5 min-h-[20vh] max-h-screen flex flex-col justify-end"},Gl={class:"relative min-h-[20vh] max-h-full flex-grow"},_l={class:"w-full"},jl={key:3,class:"w-full"},Fl={class:"flex justify-center mt-5"},Hl={class:"flex justify-center mt-3"},Wl=Y({__name:"BlogPostOverview",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const n=e,p=Ke(),i=me(),f=Ie(),{routeLoading:d,routeLoadingId:r}=M(p),{publicUsers:T}=M(f),{isOwner:E}=M(i),P=a(n.post.archived),v=B(()=>{var o;return(o=n.post.allowedUserIds)!=null&&o.length?T.value.filter(t=>{var u;return(u=n.post.allowedUserIds)==null?void 0:u.includes(t.id)}):[]}),I=B(()=>{const o=Be(n.post.date),t=n.post.dateUpdated?Be(n.post.dateUpdated):"";return o+` - ${j("GENERAL_UPDATED")} ${t}`}),w=B(()=>{const o=[];return n.post.datePinned&&o.push({value:"Pinned",severity:"success",rounded:!1}),n.post.locked&&o.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),n.post.archived&&o.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),o}),b=B(()=>n.post.sections.length?n.post.sections[0]:null),c=()=>{const o=document.createElement("textarea"),{protocol:t,hostname:u,port:x}=window.location,L=`${t}//${u}`+(u==="localhost"?`:${x}`:"");o.value=`${L}#${ml.BLOG.path}/${n.post.id}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),Ue.success("Copied link!")};return(o,t)=>(s(),D(xe,{id:o.post.id,class:pe([{"min-h-[50vh]":!P.value},"border-4 border-transparent","!rounded-primary",o.post.colorSecondary||o.post.colorPrimary||"bg-secondary-900",o.post.opacitySecondary||"bg-opacity-50"]),title:o.post.title,subTitle:I.value,tags:w.value,loading:o.post.loading,isCollapsed:P.value,clickable:"",onClick:t[6]||(t[6]=u=>P.value=!P.value)},{right:A(()=>[q("div",Rl,[P.value?l(E)?(s(),D(Me,{key:1,onEditClicked:t[0]||(t[0]=u=>o.$emit("editClicked")),onDeleteClicked:t[1]||(t[1]=u=>o.$emit("deleteClicked"))})):O("",!0):(s(),D(J,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:c}))])]),default:A(()=>{var u;return[q("div",Al,[q("div",zl,[q("div",Ml,[v.value.length?(s(),S(le,{key:0},[m(l($e),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:v.value[0].displayName,rounded:""},null,8,["label"]),v.value.length>1?(s(),D(l($e),{key:0,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:"You",rounded:""})):O("",!0),v.value.length>2?(s(),D(l($e),{key:1,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",label:`${v.value.length-2} others`,rounded:""},null,8,["label"])):O("",!0)],64)):O("",!0)]),l(E)?(s(),S("div",{key:0,class:pe(["flex justify-end ms-5",(u=o.post.allowedUserIds)!=null&&u.length?"flex-col md:flex-row":"flex-row"])},[m(Me,{onEditClicked:t[2]||(t[2]=x=>o.$emit("editClicked")),onDeleteClicked:t[3]||(t[3]=x=>o.$emit("deleteClicked"))})],2)):O("",!0)]),q("div",Nl,[t[7]||(t[7]=q("div",{class:"absolute inset-0 rounded-primary bg-gradient-to-t from-neutral-500 to-transparent"},null,-1)),q("div",Gl,[m(l(ol),{class:pe(["z-10 min-h-[20vh] p-5 text-neutral-300",o.post.colorPrimary,o.post.opacityPrimary||"bg-opacity-50"])},{header:A(()=>[o.post.coverImageUrl?(s(),D($l,{key:0,post:o.post,"cover-image-url":o.post.coverImageUrl,thumb:""},null,8,["post","cover-image-url"])):O("",!0)]),content:A(()=>[q("div",{class:pe(["flex relative",o.post.countdown||o.post.alignment==="center"?"flex justify-between":""])},[q("div",_l,[o.post.countdown?(s(),D(Ge,{key:0,time:new Date(o.post.countdown).getTime(),direction:"down",alignment:o.post.alignment},null,8,["time","alignment"])):O("",!0),o.post.timer?(s(),D(Ge,{key:1,time:new Date(o.post.timer).getTime(),direction:"up",alignment:o.post.alignment},null,8,["time","alignment"])):O("",!0),o.post.description?(s(),D(Sl,{key:2,description:o.post.description.substring(0,150)+(o.post.description.length>=150?"...":"")},null,8,["description"])):b.value?(s(),S("div",jl,[b.value.title?(s(),D(Ne,{key:0,alignment:b.value.alignment},{default:A(()=>[De(se(b.value.subTitle?b.value.title:`${b.value.title}...`),1)]),_:1},8,["alignment"])):O("",!0),b.value.subTitle?(s(),D(Ne,{key:1,alignment:b.value.alignment,"is-sub-title":""},{default:A(()=>[De(se(b.value.subTitle)+"... ",1)]),_:1},8,["alignment"])):O("",!0)])):O("",!0)])],2)]),_:1},8,["class"])])]),q("div",Fl,[m(J,{class:"w-full md:w-1/2",type:"neutral",label:"Read more",loading:l(d)===l(ie).BLOG_DETAILS&&l(r)===o.post.id,onClick:t[4]||(t[4]=x=>l(Le).push({name:l(ie).BLOG_DETAILS,params:{postId:o.post.id}}))},null,8,["loading"])]),q("div",Hl,[q("p",{class:pe(o.post.reactions.length?"text-yellow-400 hover:text-yellow-500 cursor-pointer":"text-neutral-200"),onClick:t[5]||(t[5]=x=>l(Le).push({name:l(ie).BLOG_DETAILS,params:{postId:o.post.id}}))},se(o.post.reactions.length)+" replies ",3)])])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Kl={key:0,class:"grid grid-cols-6 mb-5 gap-5"},Ql={key:1,class:"grid grid-cols-6 lg:hidden mb-5"},Jl={class:"grid gap-4 md:gap-10 xl:gap-20"},Yl={key:2,class:"flex justify-center mt-5"},Xl=Y({__name:"BlogPosts",props:{single:{type:Boolean}},emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=me(),p=we(),{blogPosts:i,visibleBlogPosts:f,isBlogPostsFetchLoading:d}=M(p),{firebaseUser:r,isLoggedIn:T,isOwner:E}=M(n),{fetchBlogPosts:P}=p;Pl();const v=a(),I=a(),w=a(),b=async o=>{var t;i.value.visibility!==o&&(i.value.data[o].length||await P((t=r.value)==null?void 0:t.uid,{visibility:o}),i.value.visibility=o,i.value.isLastPage=!1,Ve(v.value))},c=async()=>{var t;const o=f.value.length;await P((t=r.value)==null?void 0:t.uid),f.value[o]&&Ve(I.value[o])};return Qe(()=>{i.value.loadedOnce||(T.value?b("private"):i.value.visibility!=="public"&&b("public"),i.value.loadedOnce=!0)}),ye(()=>{var o;return(o=I.value)==null?void 0:o.length},()=>{var o;if((o=I.value)!=null&&o.length&&w.value){const t=f.value.find(u=>u.id===w.value);if(t){const u=f.value.indexOf(t);Ve(I.value[u]),w.value=void 0}}}),(o,t)=>(s(),S("div",{ref_key:"container",ref:v},[l(T)?(s(),S("div",Kl,[m(J,{class:"hidden lg:block col-span-2",type:"secondary",outlined:l(i).visibility!=="public",loading:l(i).isLoading.public.fetch,label:l(j)("BLOG_OVERVIEW_BUTTON_PUBLIC"),onClick:t[0]||(t[0]=u=>b("public"))},null,8,["outlined","loading","label"]),l(E)?(s(),D(J,{key:0,class:"col-span-full md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2",type:"tertiary",label:l(j)("BLOG_OVERVIEW_BUTTON_CREATE"),onClick:t[1]||(t[1]=u=>o.$emit("createClicked"))},null,8,["label"])):O("",!0),m(J,{class:"hidden lg:block col-start-5 col-span-2",type:"secondary",outlined:l(i).visibility!=="private",loading:l(i).isLoading.private.fetch,label:l(j)("BLOG_OVERVIEW_BUTTON_PRIVATE"),onClick:t[2]||(t[2]=u=>b("private"))},null,8,["outlined","loading","label"])])):O("",!0),l(T)?(s(),S("div",Ql,[m(J,{class:"col-span-3 md:col-start-2 md:col-span-2 rounded-r-none",type:"secondary",outlined:l(i).visibility!=="public",loading:l(i).isLoading.public.fetch,label:l(j)("BLOG_OVERVIEW_BUTTON_PUBLIC"),onClick:t[3]||(t[3]=u=>b("public"))},null,8,["outlined","loading","label"]),m(J,{class:"col-span-3 md:col-start-4 md:col-span-2 rounded-l-none",type:"secondary",outlined:l(i).visibility!=="private",loading:l(i).isLoading.private.fetch,label:l(j)("BLOG_OVERVIEW_BUTTON_PRIVATE"),onClick:t[4]||(t[4]=u=>b("private"))},null,8,["outlined","loading","label"])])):O("",!0),q("div",Jl,[l(f).length?(s(!0),S(le,{key:0},ce(l(f),(u,x)=>(s(),S("div",{key:u.id,ref_for:!0,ref_key:"posts",ref:I},[x===0||u.datePinned?(s(),D(el,{key:0,post:u,onEditClicked:L=>o.$emit("editClicked",u),onDeleteClicked:L=>o.$emit("deleteClicked",u)},null,8,["post","onEditClicked","onDeleteClicked"])):(s(),D(Wl,{key:1,post:u,onEditClicked:L=>o.$emit("editClicked",u),onDeleteClicked:L=>o.$emit("deleteClicked",u)},null,8,["post","onEditClicked","onDeleteClicked"]))]))),128)):l(d)?(s(),D(xe,{key:1,class:"!bg-neutral-600 !bg-opacity-40 !rounded-primary",title:l(j)("GENERAL_LOADING")+"..."},null,8,["title"])):(s(),D(xe,{key:2,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),l(i).isLastPage?O("",!0):(s(),S("div",Yl,[m(J,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:l(f).length>0&&l(d),label:l(j)("BLOG_OVERVIEW_BUTTON_LOAD_MORE"),onClick:c},null,8,["loading","label"])]))],512))}});var Zl=`
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
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
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
    padding-left: 1.5rem;
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
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
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
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
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
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
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
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
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
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
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
    padding: 3px 5px;
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
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
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
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
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
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
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
    margin-top: -1px;
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
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
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
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
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
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
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
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
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
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
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
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
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
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
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
`,en={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},_e=Je.extend({name:"editor",css:Zl,classes:en}),ln={name:"BaseEditor",extends:Ye,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:_e,provide:function(){return{$parentInstance:this}},beforeMount:function(){var n;_e.loadStyle({nonce:(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce})}};function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qe(e)}function je(e,n){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),p.push.apply(p,i)}return p}function nn(e){for(var n=1;n<arguments.length;n++){var p=arguments[n]!=null?arguments[n]:{};n%2?je(Object(p),!0).forEach(function(i){on(e,i,p[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):je(Object(p)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(p,i))})}return e}function on(e,n,p){return n=tn(n),n in e?Object.defineProperty(e,n,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[n]=p,e}function tn(e){var n=rn(e,"string");return qe(n)=="symbol"?n:String(n)}function rn(e,n){if(qe(e)!="object"||!e)return e;var p=e[Symbol.toPrimitive];if(p!==void 0){var i=p.call(e,n||"default");if(qe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Fe=function(){try{return window.Quill}catch{return null}}(),tl={name:"Editor",extends:ln,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(n,p){n!==p&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(n))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var n=this,p={modules:nn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Fe?(this.quill=new Fe(this.$refs.editorElement,p),this.initQuill(),this.handleLoad()):bl(()=>import("./c-quill-Bdz04ioQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(i){i&&vl.isExist(n.$refs.editorElement)&&(i.default?n.quill=new i.default(n.$refs.editorElement,p):n.quill=new i(n.$refs.editorElement,p),n.initQuill())}).then(function(){n.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(n){this.quill&&(n?this.quill.setContents(this.quill.clipboard.convert(n)):this.quill.setText(""))},initQuill:function(){var n=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(p,i,f){if(f==="user"){var d=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();d==="<p><br></p>"&&(d=""),n.$emit("update:modelValue",d),n.$emit("text-change",{htmlValue:d,textValue:r,delta:p,source:f,instance:n.quill})}}),this.quill.on("selection-change",function(p,i,f){var d=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();n.$emit("selection-change",{htmlValue:d,textValue:r,range:p,oldRange:i,source:f,instance:n.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function an(e,n,p,i,f,d){return s(),S("div",$({class:e.cx("root")},e.ptmi("root")),[q("div",$({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ae(e.$slots,"toolbar",{},function(){return[q("span",$({class:"ql-formats"},e.ptm("formats")),[q("select",$({class:"ql-header",defaultValue:"0"},e.ptm("header")),[q("option",$({value:"1"},e.ptm("option")),"Heading",16),q("option",$({value:"2"},e.ptm("option")),"Subheading",16),q("option",$({value:"0"},e.ptm("option")),"Normal",16)],16),q("select",$({class:"ql-font"},e.ptm("font")),[q("option",fl(gl(e.ptm("option"))),null,16),q("option",$({value:"serif"},e.ptm("option")),null,16),q("option",$({value:"monospace"},e.ptm("option")),null,16)],16)],16),q("span",$({class:"ql-formats"},e.ptm("formats")),[q("button",$({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),q("button",$({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),q("button",$({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),(s(),S("span",$({key:f.reRenderColorKey,class:"ql-formats"},e.ptm("formats")),[q("select",$({class:"ql-color"},e.ptm("color")),null,16),q("select",$({class:"ql-background"},e.ptm("background")),null,16)],16)),q("span",$({class:"ql-formats"},e.ptm("formats")),[q("button",$({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),q("button",$({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),q("select",$({class:"ql-align"},e.ptm("select")),[q("option",$({defaultValue:""},e.ptm("option")),null,16),q("option",$({value:"center"},e.ptm("option")),null,16),q("option",$({value:"right"},e.ptm("option")),null,16),q("option",$({value:"justify"},e.ptm("option")),null,16)],16)],16),q("span",$({class:"ql-formats"},e.ptm("formats")),[q("button",$({class:"ql-link",type:"button"},e.ptm("link")),null,16),q("button",$({class:"ql-image",type:"button"},e.ptm("image")),null,16),q("button",$({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),q("span",$({class:"ql-formats"},e.ptm("formats")),[q("button",$({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),q("div",$({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}tl.render=an;const sn={class:"m-4"},dn=["for"],Oe=Y({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},editorProps:{},labelProps:{},minLength:{},maxLength:{}},emits:["update:modelValue","update:error","click"],setup(e,{expose:n,emit:p}){const i=e,f=B({get:()=>i.modelValue||"",set:v=>{P("update:modelValue",v),E(v)}}),d=B(()=>i.label?i.label+((i.rules??[]).some(v=>v.type===Ul.Required)?" *":""):void 0),r=B(()=>i.name+(i.id?"."+i.id:"")),T=({instance:v})=>{v.setContents(v.clipboard.convert({html:f.value}))},E=async v=>{const I=v||f.value,w=i.rules||[];typeof i.minLength=="number"&&w.push(re.MinLength),typeof i.maxLength=="number"&&w.push(re.MaxLength);const b={value:I,minLength:i.minLength,maxLength:i.maxLength},c=w.filter(o=>!o.test(b)).map(o=>{var t;return((t=o.compareError)==null?void 0:t.call(o,b))||o.error(b)})||[];P("update:error",c[0]||"")},P=p;return n({test:E}),(v,I)=>(s(),S("div",sn,[v.label?(s(),S("label",$({key:0,class:"block text-sm font-bold mb-2",for:r.value},v.labelProps),se(d.value),17,dn)):O("",!0),m(l(tl),$({id:r.value,placeholder:v.placeholder,modelValue:f.value,"onUpdate:modelValue":I[0]||(I[0]=w=>f.value=w),onLoad:T},v.editorProps),null,16,["id","placeholder","modelValue"]),v.error?(s(),D(El,{key:1,name:v.name,error:v.error},null,8,["name","error"])):O("",!0)]))}}),un={class:"m-4"},pn=["for"],cn={class:"table w-full"},qn={class:"table-header-group"},mn={key:0,class:"table-row"},bn={key:0,class:"table-cell"},vn={class:"table-cell"},fn={class:"table-row-group"},gn={key:0,class:"table-cell"},kn={key:1,class:"table-cell"},wn={key:2,class:"table-cell"},yn={class:"table-footer-group"},hn={class:"table-row"},Vn={key:0,class:"table-cell"},Cn={class:"table-cell"},rl=Y({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:n}){const p=e,i=n,d=Xe(Ze).greaterOrEqual("md"),r=B({get:()=>kl(p.modelValue),set:c=>{i("update:modelValue",Re(c))}}),T=B(()=>p.name+(p.id?"."+p.id:"")),E=B(()=>{var c;return d.value&&((c=r.value[0])==null?void 0:c.length)<3}),P=(c,o,t)=>{const u=[...r.value];u[c][o]=t,i("update:modelValue",Re(u))},v=()=>{const c=r.value;if(c.length){const o=c[0];o.length?r.value=[...c,o.map(()=>"")]:r.value=[...c,[""]]}else r.value=[[""]]},I=c=>{r.value.splice(c,1),r.value=r.value},w=()=>{r.value=r.value.map(c=>[...c,""])},b=c=>{r.value=r.value.map(o=>(o.splice(c,1),o))};return(c,o)=>(s(),S("div",un,[c.label?(s(),S("label",$({key:0,class:"block text-sm font-bold mb-2",for:T.value},c.labelProps),se(c.label),17,pn)):O("",!0),q("div",cn,[q("div",qn,[r.value.length&&r.value[0].length>1?(s(),S("div",mn,[r.value.length>1?(s(),S("div",bn)):O("",!0),(s(!0),S(le,null,ce(r.value[0],(t,u)=>(s(),S("div",vn,[r.value.length&&r.value[0].length?(s(),D(l(ve),{key:0,class:"md:text-start text-nowrap",icon:"pi pi-times",label:E.value?"Remove column":void 0,onClick:x=>b(u)},null,8,["label","onClick"])):O("",!0)]))),256))])):O("",!0)]),q("div",fn,[(s(!0),S(le,null,ce(r.value,(t,u)=>(s(),S("div",{key:u,class:"table-row"},[r.value.length>1?(s(),S("div",gn,[m(l(ve),{class:"md:text-start text-nowrap",icon:"pi pi-times",label:E.value?"Remove row":void 0,onClick:x=>I(u)},null,8,["label","onClick"])])):O("",!0),(s(!0),S(le,null,ce(t,(x,L)=>(s(),D(ue,{class:"table-cell !m-0",key:L,name:`${c.name}.${u}.${L}`,modelValue:x,placeholder:u===0||L===0?"header":"cell","onUpdate:modelValue":z=>P(u,L,z.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),u===0?(s(),S("div",kn,[m(l(ve),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:E.value?"Add column":void 0,onClick:w},null,8,["label"])])):(s(),S("div",wn))]))),128))]),q("div",yn,[q("div",hn,[r.value.length>1?(s(),S("div",Vn)):O("",!0),q("div",Cn,[m(l(ve),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:E.value?"Add row":void 0,onClick:v},null,8,["label"])])])])])]))}}),$n={key:0,class:"mb-5 p-4 border-y"},Sn={class:"flex"},Pn=Y({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:p}){const i=e,f=p,d=a(""),r=B({get:()=>i.modelValue.slice(),set:w=>{f("update:modelValue",w),d.value=""}}),T=B(()=>i.name+(i.id?"."+i.id:"")),E=(w,b)=>{const c=r.value.slice();c.splice(w,1,b),r.value=c},P=()=>{d.value.length&&(r.value=[...r.value,d.value])},v=w=>{const b=r.value.slice();b.splice(w,1),r.value=b};return n({test:()=>{}}),(w,b)=>(s(),S("div",null,[m(ue,{id:T.value,name:w.name,label:w.label,modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=c=>d.value=c),max:200,placeholder:w.placeholder,onKeydown:b[1]||(b[1]=wl(c=>P(),["enter"]))},null,8,["id","name","label","modelValue","placeholder"]),r.value.length?(s(),S("div",$n,[m(l(nl),{modelValue:r.value,"onUpdate:modelValue":b[2]||(b[2]=c=>r.value=c),itemKey:"index",handle:".drag-handle"},{item:A(({element:c,index:o})=>[q("div",Sn,[b[3]||(b[3]=q("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),m(ue,{class:"w-full",id:`${w.name}.${o}`,name:w.name,"model-value":c,max:200,"delete-button":"","onUpdate:modelValue":t=>E(o,t.toString()),"onUpdate:delete":t=>v(o)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])])):O("",!0)]))}}),Un={class:"md:px-5"},En={class:"flex justify-center"},xn={key:0},Tn={class:"mt-3 flex justify-evenly font-bold"},On=Y({__name:"BlogPostContentSectionDialogSection",props:{section:{}},emits:["error","delete"],setup(e,{expose:n,emit:p}){const i=p,d=Xe(Ze).greaterOrEqual("sm"),r=a(!1),T=a(),E=a(),P=a(),v=a(),I=a(),w=a(),b=a(),c=a(),o=a(),t=a(),u=a(),x=a(),L=a(),z=a(),N=a(),H=a(),W=a(!1),X=a(!1),K=a(!1),g=a(!1),y=B(()=>[u.value,x.value,L.value,z.value,N.value,H.value,W.value,X.value,K.value,g.value].some(k=>!!k)),R=B(()=>d.value?"View more options":"View more"),C=B(()=>d.value?"Hide more options":"View less");return n({test:async()=>{var k,h,V,G,_,F,ne,oe,Q,ee;await Promise.all([(k=T.value)==null?void 0:k.test(),(h=E.value)==null?void 0:h.test(),(V=P.value)==null?void 0:V.test(),(G=w.value)==null?void 0:G.test(),(_=v.value)==null?void 0:_.test(),(F=I.value)==null?void 0:F.test(),(ne=b.value)==null?void 0:ne.test(),(oe=c.value)==null?void 0:oe.test(),(Q=o.value)==null?void 0:Q.test(),(ee=t.value)==null?void 0:ee.test()]),i("error",y.value)}}),(k,h)=>(s(),S("div",Un,[m(ue,{class:"mt-0 pt-5",ref_key:"title",ref:T,id:k.section.id,name:"title",label:"Section Title",modelValue:k.section.title,"onUpdate:modelValue":h[0]||(h[0]=V=>k.section.title=V),error:u.value,"onUpdate:error":h[1]||(h[1]=V=>u.value=V),max:50},null,8,["id","modelValue","error"]),m(ue,{ref_key:"subTitle",ref:E,id:k.section.id,name:"subTitle",label:"Section Subtitle",modelValue:k.section.subTitle,"onUpdate:modelValue":h[2]||(h[2]=V=>k.section.subTitle=V),error:x.value,"onUpdate:error":h[3]||(h[3]=V=>x.value=V),max:200},null,8,["id","modelValue","error"]),m(Oe,{ref_key:"description",ref:P,id:k.section.id,name:"description",label:"Section Description",modelValue:k.section.description,"onUpdate:modelValue":h[4]||(h[4]=V=>k.section.description=V),error:L.value,"onUpdate:error":h[5]||(h[5]=V=>L.value=V),"max-length":1e4},null,8,["id","modelValue","error"]),q("div",En,[m(J,{class:"w-full sm:w-2/3 xl:w-2/3 text-nowrap",type:"primary",outlined:"",icon:r.value?"pi pi-angle-up":"pi pi-angle-down",label:r.value?C.value:R.value,onClick:h[6]||(h[6]=V=>r.value=!r.value)},null,8,["icon","label"])]),r.value?(s(),S("div",xn,[m(fe,{ref_key:"openByDefault",ref:t,name:"openByDefault",label:"Opened",modelValue:k.section.openByDefault,"onUpdate:modelValue":h[7]||(h[7]=V=>k.section.openByDefault=V)},null,8,["modelValue"]),m(Z,{ref_key:"alignment",ref:v,id:k.section.id,name:"alignment",label:"Alignment",modelValue:k.section.alignment,"onUpdate:modelValue":h[8]||(h[8]=V=>k.section.alignment=V),error:N.value,"onUpdate:error":h[9]||(h[9]=V=>N.value=V),options:l(ge),rules:[l(re).Required]},null,8,["id","modelValue","error","options","rules"]),m(Z,{ref_key:"tableAlignment",ref:I,id:k.section.id,name:"tableAlignment",label:"Table Alignment",modelValue:k.section.tableAlignment,"onUpdate:modelValue":h[10]||(h[10]=V=>k.section.tableAlignment=V),error:H.value,"onUpdate:error":h[11]||(h[11]=V=>H.value=V),options:l(ge),rules:[l(re).Required]},null,8,["id","modelValue","error","options","rules"]),m(ll,{ref_key:"coverImageUrl",ref:w,id:k.section.id,name:"coverImageUrl",label:"Cover image",modelValue:k.section.coverImageUrl,"onUpdate:modelValue":h[12]||(h[12]=V=>k.section.coverImageUrl=V),error:z.value,"onUpdate:error":h[13]||(h[13]=V=>z.value=V)},null,8,["id","modelValue","error"]),m(ke,{ref_key:"countdown",ref:b,id:k.section.id,name:"countdown",label:"Countdown",modelValue:k.section.countdown,"onUpdate:modelValue":h[14]||(h[14]=V=>k.section.countdown=V),error:W.value,"onUpdate:error":h[15]||(h[15]=V=>W.value=V)},null,8,["id","modelValue","error"]),m(ke,{ref_key:"timer",ref:c,id:k.section.id,name:"timer",label:"Timer",modelValue:k.section.timer,"onUpdate:modelValue":h[16]||(h[16]=V=>k.section.timer=V),error:X.value,"onUpdate:error":h[17]||(h[17]=V=>X.value=V)},null,8,["id","modelValue","error"]),m(Pn,{ref_key:"bullets",ref:o,id:k.section.id,name:"bullets",label:"Section Bullets",placeholder:"New bullet...",modelValue:k.section.bullets,"onUpdate:modelValue":h[18]||(h[18]=V=>k.section.bullets=V)},null,8,["id","modelValue"]),m(rl,{id:k.section.id,name:"table",label:"Table",modelValue:k.section.table,"onUpdate:modelValue":h[19]||(h[19]=V=>k.section.table=V)},null,8,["id","modelValue"])])):O("",!0),q("div",Tn,[m(J,{class:"w-full sm:w-2/3 md:w-1/2 xl:w-2/3",type:"danger",outlined:"",label:"Delete",onClick:h[20]||(h[20]=V=>k.$emit("delete"))})])]))}}),In={class:"flex gap-5"},Bn={class:"mt-3 flex justify-center"},Dn=Y({__name:"BlogPostContentDialogSection",emits:["update:selected","error"],setup(e,{expose:n,emit:p}){const i=p,f=be(),{blogPostOriginal:d,blogPostMutation:r,isOpen:T}=M(f),E=a(),P=a(),v=a(),I=a(),w=a(),b=a(),c=a([]),o=a(),t=a(),u=a(),x=a(),L=a(),z=a(!1),N=a(!1),H=a({}),W=B(()=>[t.value,u.value,x.value,L.value,z.value,N.value,Object.values(H.value).some(R=>R)].some(R=>!!R)),X=()=>{r.value.sections.push({id:yl(),title:"",subTitle:"",description:"",alignment:"left",tableAlignment:"left",coverImageUrl:"",countdown:null,timer:null,table:"",bullets:[],openByDefault:!1})},K=R=>{const C=r.value.sections.slice(),U=C.findIndex(k=>k.id===R);C.splice(U,1),f.blogPostMutation.sections=C},g=(R,C)=>{H.value[C]=R};return n({test:async()=>{for(const R of c.value)await R.test();await Promise.all([E.value.test(),P.value.test(),v.value.test(),w.value.test(),b.value.test()]),i("error",W.value),H.value={}}}),(R,C)=>(s(),S(le,null,[m(ue,{ref_key:"title",ref:E,name:"title",label:"Title",placeholder:"Amazing Post",modelValue:l(r).title,"onUpdate:modelValue":C[0]||(C[0]=U=>l(r).title=U),error:t.value,"onUpdate:error":C[1]||(C[1]=U=>t.value=U),rules:[l(re).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),m(Oe,{ref_key:"description",ref:P,name:"description",label:"Description",placeholder:"Something about my post...",modelValue:l(r).description,"onUpdate:modelValue":C[2]||(C[2]=U=>l(r).description=U),error:u.value,"onUpdate:error":C[3]||(C[3]=U=>u.value=U),"max-length":1e4},null,8,["modelValue","error"]),m(ll,{ref_key:"coverImageUrl",ref:I,id:"coverImageUrl",name:"coverImageUrl",label:"Cover image",modelValue:l(r).coverImageUrl,"onUpdate:modelValue":C[4]||(C[4]=U=>l(r).coverImageUrl=U),error:L.value,"onUpdate:error":C[5]||(C[5]=U=>L.value=U),"blog-post":l(d)??void 0},null,8,["modelValue","error","blog-post"]),l(T)?(s(),D(l(Te),{key:0,onTabOpen:l(Ee)},{default:A(()=>[m(l(de),{header:"Other content"},{default:A(()=>[m(Oe,{ref_key:"descriptionFooter",ref:v,name:"descriptionFooter",label:"Footer",placeholder:"Some beautiful ending...",modelValue:l(r).descriptionFooter,"onUpdate:modelValue":C[6]||(C[6]=U=>l(r).descriptionFooter=U),error:x.value,"onUpdate:error":C[7]||(C[7]=U=>x.value=U),"max-length":1e4},null,8,["modelValue","error"]),m(ke,{ref_key:"countdown",ref:w,name:"countdown",label:"Countdown",modelValue:l(r).countdown,"onUpdate:modelValue":C[8]||(C[8]=U=>l(r).countdown=U),error:z.value,"onUpdate:error":C[9]||(C[9]=U=>z.value=U)},null,8,["modelValue","error"]),m(ke,{ref_key:"timer",ref:b,name:"timer",label:"Timer",modelValue:l(r).timer,"onUpdate:modelValue":C[10]||(C[10]=U=>l(r).timer=U),error:N.value,"onUpdate:error":C[11]||(C[11]=U=>N.value=U)},null,8,["modelValue","error"]),m(rl,{name:"table",label:"Table",modelValue:l(r).table,"onUpdate:modelValue":C[12]||(C[12]=U=>l(r).table=U)},null,8,["modelValue"])]),_:1}),m(l(de),{header:"Sections"},{default:A(()=>[m(l(nl),{ref_key:"draggable",ref:o,modelValue:l(r).sections,"onUpdate:modelValue":C[13]||(C[13]=U=>l(r).sections=U),itemKey:U=>U.id,handle:".drag-handle"},{item:A(({element:U})=>[l(T)?(s(),D(l(Te),{key:0,onTabOpen:l(Ee)},{default:A(()=>[m(l(de),{pt:{header:{class:"drag-handle"},toggleableContent:{class:"background-gray-dark rounded-t-primary rounded-b-primary pt-3 my-3"}}},{header:A(()=>[q("div",In,[C[14]||(C[14]=q("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),q("p",null,se(U.title||"New section"),1)])]),default:A(()=>[m(On,{ref:k=>{c.value[U.id]=k},section:U,"is-open":l(T),onDelete:k=>K(U.id),onError:k=>g(k,U.id)},null,8,["section","is-open","onDelete","onError"])]),_:2},1024)]),_:2},1032,["onTabOpen"])):O("",!0)]),_:1},8,["modelValue","itemKey"]),q("div",Bn,[m(J,{class:"w-1/2",type:"green",label:"Add Section",onClick:X})])]),_:1})]),_:1},8,["onTabOpen"])):O("",!0)],64))}}),Ln=Y({__name:"BlogPostSettingsDialogSection",emits:["error"],setup(e,{expose:n,emit:p}){const i=p,f=me(),d=Ie(),r=be(),{publicUser:T,publicUsers:E}=M(d),{firebaseUser:P}=M(f),{blogPostMutation:v}=M(r),{allowedPublicUsers:I}=d,w=a(),b=a(),c=a(),o=a(),t=B({get(){return!!v.value.datePinned},set(g){v.value.datePinned=g?new Date:null}}),u=a(),x=a(),L=a(),z=a(),N=B(()=>[u.value,x.value,L.value,z.value].some(g=>!!g)),H=B(()=>E.value.map(({id:g,displayName:y})=>({value:g,label:y}))),W=a([]),X=g=>{v.value.allowedUserIds=g},K=async()=>{v.value.allowedUserIds.length&&!W.value.length&&(u.value="Invalid user ID's"),await Promise.all([b.value.test(),c.value.test(),o.value.test()]),i("error",N.value)};return ye(()=>v.value.allowedUserIds,async g=>{W.value=await I(g)},{immediate:!0}),n({test:K}),(g,y)=>(s(),S(le,null,[m(Z,{ref_key:"allowedUsers",ref:w,name:"allowedUserIds",label:"Allowed users",placeholder:"This post is public","model-value":l(v).allowedUserIds,error:u.value,"onUpdate:error":y[0]||(y[0]=R=>u.value=R),"onUpdate:arrayValue":X,options:[{value:l(P).uid,label:l(T).displayName},...H.value.filter(({value:R})=>{var C;return R!==((C=l(P))==null?void 0:C.uid)})],multiple:""},null,8,["model-value","error","options"]),m(fe,{ref_key:"pinned",ref:o,name:"pinned",label:"Pinned",modelValue:t.value,"onUpdate:modelValue":y[1]||(y[1]=R=>t.value=R)},null,8,["modelValue"]),m(fe,{ref_key:"locked",ref:b,name:"locked",label:"Locked for commenting",modelValue:l(v).locked,"onUpdate:modelValue":y[2]||(y[2]=R=>l(v).locked=R)},null,8,["modelValue"]),m(fe,{ref_key:"archived",ref:c,name:"archived",label:"Archived",modelValue:l(v).archived,"onUpdate:modelValue":y[3]||(y[3]=R=>l(v).archived=R)},null,8,["modelValue"])],64))}}),Rn=Y({__name:"BlogPostStylingDialogSection",emits:["error"],setup(e,{expose:n,emit:p}){const i=p,f=be(),{blogPostMutation:d}=M(f),r=a(),T=a(),E=a(),P=a(),v=a(),I=a(),w=a(),b=a(),c=a(),o=a(),t=a(),u=a(),x=a(),L=a(),z=a(),N=a(),H=B(()=>[c.value,o.value,t.value,u.value,x.value,L.value,z.value,N.value].some(K=>!!K)),W=B(()=>hl(Ae.find(K=>K.value===d.value.colorPrimary)));return n({test:async()=>{await Promise.all([r.value.test(),T.value.test(),E.value.test(),P.value.test(),v.value.test(),I.value.test(),w.value.test(),b.value.test()]),i("error",H.value)}}),(K,g)=>(s(),S(le,null,[m(Z,{ref_key:"alignment",ref:r,name:"alignment",label:"Alignment",modelValue:l(d).alignment,"onUpdate:modelValue":g[0]||(g[0]=y=>l(d).alignment=y),error:c.value,"onUpdate:error":g[1]||(g[1]=y=>c.value=y),options:l(ge),rules:[l(re).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"tableAlignment",ref:T,name:"tableAlignment",label:"Table Alignment",modelValue:l(d).tableAlignment,"onUpdate:modelValue":g[2]||(g[2]=y=>l(d).tableAlignment=y),error:o.value,"onUpdate:error":g[3]||(g[3]=y=>o.value=y),options:l(ge),rules:[l(re).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"colorPrimary",ref:E,name:"colorPrimary",label:"Primary Style",modelValue:l(d).colorPrimary,"onUpdate:modelValue":g[4]||(g[4]=y=>l(d).colorPrimary=y),error:t.value,"onUpdate:error":g[5]||(g[5]=y=>t.value=y),options:l(Ae),rules:[l(re).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"opacityPrimary",ref:I,name:"opacityPrimary",label:"Primary Opacity",modelValue:l(d).opacityPrimary,"onUpdate:modelValue":g[6]||(g[6]=y=>l(d).opacityPrimary=y),error:L.value,"onUpdate:error":g[7]||(g[7]=y=>L.value=y),options:l(Ce)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"colorSecondary",ref:P,name:"colorSecondary",label:"Secondary Style",modelValue:l(d).colorSecondary,"onUpdate:modelValue":g[8]||(g[8]=y=>l(d).colorSecondary=y),error:u.value,"onUpdate:error":g[9]||(g[9]=y=>u.value=y),options:W.value},null,8,["modelValue","error","options"]),m(Z,{ref_key:"opacitySecondary",ref:w,name:"opacitySecondary",label:"Secondary Opacity",modelValue:l(d).opacitySecondary,"onUpdate:modelValue":g[10]||(g[10]=y=>l(d).opacitySecondary=y),error:z.value,"onUpdate:error":g[11]||(g[11]=y=>z.value=y),options:l(Ce)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"colorTertiary",ref:v,name:"colorTertiary",label:"Tertiary Style",modelValue:l(d).colorTertiary,"onUpdate:modelValue":g[12]||(g[12]=y=>l(d).colorTertiary=y),error:x.value,"onUpdate:error":g[13]||(g[13]=y=>x.value=y),options:l(Vl)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"opacityTertiary",ref:b,name:"opacityTertiary",label:"Tertiary Opacity",modelValue:l(d).opacityTertiary,"onUpdate:modelValue":g[14]||(g[14]=y=>l(d).opacityTertiary=y),error:N.value,"onUpdate:error":g[15]||(g[15]=y=>N.value=y),options:l(Ce)},null,8,["modelValue","error","options"])],64))}}),An=Y({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:n}){const p=n,i=me(),f=we(),d=be(),{firebaseUser:r}=M(i),{isBlogPostsMutationLoading:T}=M(f),{createBlogPost:E,updateBlogPost:P,deleteFilesOfBlogPost:v,toggleBlogPostVisibility:I}=f,{getBlogPostMutationContent:w,getBlogPostMutationStyling:b,getBlogPostMutationSettings:c}=d,{isOpen:o,blogPostOriginal:t,blogPostMutationId:u,blogPostMutation:x,hasBlogPostMutationContentChanges:L,hasBlogPostMutationStylingChanges:z,hasBlogPostMutationSettingsChanges:N}=M(d),H=a(),W=a(),X=a(),K=a(),g=a(!1),y=a(!1),R=a(!1),C=B(()=>{var G,_,F,ne,oe,Q;return!!((_=(G=t.value)==null?void 0:G.allowedUserIds)!=null&&_.length)&&!((F=c().allowedUserIds)!=null&&F.length)||!((oe=(ne=t.value)==null?void 0:ne.allowedUserIds)!=null&&oe.length)&&!!((Q=c().allowedUserIds)!=null&&Q.length)}),U=B(()=>{const G=[];return L.value&&G.push("Content"),z.value&&G.push("Styling"),N.value&&G.push("Settings"),G.length?"Update "+ze(G):void 0}),k=B(()=>Cl(t.value)),h=async()=>{var G,_,F,ne,oe;if(await Promise.all([W.value.test(),X.value.test(),K.value.test()]),!(g.value||y.value||R.value))if(!t.value)await E(u.value,x.value,(G=r.value)==null?void 0:G.uid)&&(d.close(),p("scroll-to-updated",u.value));else if(C.value){const Q=u.value;d.isOpen=!1,await I(Q,te.convert(x.value),t.value.reactions,x.value.allowedUserIds.length?"private":"public",(_=r.value)==null?void 0:_.uid)&&(d.close(),Ue.success("Successfully updated Post Visibility"),p("scroll-to-updated",Q))}else{const Q=u.value;let ee=[];L.value&&ee.push(await P(Q,w(),k.value,(F=r.value)==null?void 0:F.uid)),z.value&&ee.push(await P(Q,b(),k.value,(ne=r.value)==null?void 0:ne.uid)),N.value&&(ee.push(await P(Q,c(),k.value,(oe=r.value)==null?void 0:oe.uid)),p("scroll-to-updated",Q)),ee=ee.filter(il=>typeof il=="string"),ee.length&&(Ue.success(`Successfully updated Post ${ze(ee)}`),d.close())}},V=async()=>{v(x.value,t.value??void 0),d.close()};return ye(x,()=>{d.isMutationEqual()},{deep:!0}),(G,_)=>(s(),D(He,{isOpen:l(o),title:l(t)?"Update Post":"Create Post",description:l(t)?"Update this post":"Create a new post","confirm-text":l(t)?U.value:"Create","confirm-loading":l(T),onConfirm:h,onCancel:V},{default:A(()=>[q("form",{ref_key:"dialog",ref:H,class:"pt-6 mb-4 xl:px-16"},[l(o)?(s(),D(l(Te),{key:0,"active-index":0,onTabOpen:l(Ee)},{default:A(()=>[m(l(de),{header:"Content"},{default:A(()=>[m(Dn,{ref_key:"content",ref:W,onError:_[0]||(_[0]=F=>g.value=F)},null,512)]),_:1}),m(l(de),{header:"Styling"},{default:A(()=>[m(Rn,{ref_key:"styling",ref:X,onError:_[1]||(_[1]=F=>y.value=F)},null,512)]),_:1}),m(l(de),{header:"Settings"},{default:A(()=>[m(Ln,{ref_key:"settings",ref:K,onError:_[2]||(_[2]=F=>R.value=F)},null,512)]),_:1})]),_:1},8,["onTabOpen"])):O("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading"]))}}),zn={class:"grid mt-10 md:mt-15"},Mn={class:"grid justify-center"},Nn={class:"text-lg md:text-xl text-white"},Gn=["innerHTML"],_n={class:"grid my-5 xl:px-20"},jn=Y({__name:"Blog",setup(e){const n=We(),p=Ie(),i=we(),f=be(),{publicUser:d}=M(p),{deleteBlogPost:r}=i,T=a(null),E=a(),P=a(!1),v=a(n.currentRoute.value.params.postId),I=B(()=>d.value?[`${j("BLOG_OVERVIEW_DESCRIPTION_1")} <strong>${d.value.displayName}</strong>. ${j("BLOG_OVERVIEW_DESCRIPTION_2")}`,j("BLOG_OVERVIEW_DESCRIPTION_3")]:[j("BLOG_OVERVIEW_DESCRIPTION_1_GUEST"),j("BLOG_OVERVIEW_DESCRIPTION_2_GUEST")]),w=()=>{f.openWith(null)},b=t=>{f.openWith(t)},c=t=>{T.value=t,P.value=!0},o=async t=>{await r(t)&&(P.value=!1,T.value=null)};return ye(n.currentRoute,t=>{v.value=t.params.postId}),(t,u)=>(s(),D(al,null,{content:A(()=>[q("div",zn,[q("div",Mn,[(s(!0),S(le,null,ce(I.value,x=>(s(),S("h1",Nn,[q("span",{innerHTML:x},null,8,Gn)]))),256))]),q("div",_n,[v.value?(s(),D(Ol,{key:0,onEditClicked:b,onDeleteClicked:c})):(s(),D(Xl,{key:1,onCreateClicked:w,onEditClicked:b,onDeleteClicked:c})),m(An,{onScrollToUpdated:u[0]||(u[0]=x=>E.value=x)}),T.value?(s(),D(He,{key:2,title:"Delete Post",isOpen:P.value,description:[` Are you sure you want to delete this post called ' ${T.value.title}'?`,"This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:u[1]||(u[1]=x=>o(T.value.id)),onCancel:u[2]||(u[2]=x=>P.value=!1)},null,8,["isOpen","description"])):O("",!0)])])]),_:1}))}}),io=Y({__name:"Blog",setup(e){return(n,p)=>(s(),D(jn))}});export{io as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./c-quill-Bdz04ioQ.js","./c-vuedraggable.umd-CDu6AEqu.js","../bundle.js","../bundle8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
