import{_ as Ke}from"./c-Dialog.vue_vue_type_script_setup_true_lang-Dlac_hNb.js";import{_ as il}from"./c-Page.vue_vue_type_script_setup_true_lang-tFpa4vFG.js";import{d as al,r as a,a as sl,c as D,I as oe,v as dl,b as ye,e as W,u as ul,f as Qe,g as Ie,h as qe,i as ke,s as j,o as Je,j as pl,F as cl,R as re,k as l,l as s,m as S,n as m,p as c,q as z,t as T,w as ee,B as Ye,x as We,y as C,z as ie,A as Oe,C as Be,D as R,E as ue,G as De,H as ae,J as Le,K as ql,L as Pe,M as we,N as he,O as pe,_ as ml,P as bl,Q as vl,S as fl,T as gl,U as ze,V as kl,W as fe,X as Ue,Y as wl,Z as yl,$ as Me,a0 as $e,a1 as hl,a2 as Ae,a3 as $l}from"../bundle.js";import{_ as Y,a as xe,u as Xe,b as Ze,s as be}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di5vSobc.js";import{_ as _e,a as Re,s as Ve,b as Vl,c as Cl,d as je,u as Sl}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-CwtxyuF7.js";import{_ as Ne}from"./c-Countdown.vue_vue_type_script_setup_true_lang-Dl8LkfcK.js";import{s as se,a as Ee}from"./c-accordiontab.esm-CXU5YCf-.js";import{_ as ge}from"./c-DateField.vue_vue_type_script_setup_true_lang-BG1CbGZF.js";import{_ as el}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-BYjoC5lX.js";import{V as Pl,R as te,_ as Ul}from"./c-validation-DokkLKHB.js";import{_ as de}from"./c-TextField.vue_vue_type_script_setup_true_lang-DT8z_rfW.js";import{D as ll}from"./c-vuedraggable.umd-BC1GM7Qy.js";import{_ as Z}from"./c-SelectField.vue_vue_type_script_setup_true_lang-4iDIQG91.js";import{_ as ve}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-B4V7xdcD.js";import"./c-Image.vue_vue_type_script_setup_true_lang-Cth-U2Iz.js";const Ce=e=>(e==null?void 0:e.id)??dl(),Se=e=>{var n;return{date:(e==null?void 0:e.date)||new Date,dateUpdated:(e==null?void 0:e.dateUpdated)||new Date,title:(e==null?void 0:e.title)??"",description:(e==null?void 0:e.description)??"",descriptionFooter:(e==null?void 0:e.descriptionFooter)??"",coverImageUrl:(e==null?void 0:e.coverImageUrl)??"",timer:(e==null?void 0:e.timer)??null,countdown:(e==null?void 0:e.countdown)??null,table:(e==null?void 0:e.table)??"",sections:((n=e==null?void 0:e.sections)==null?void 0:n.slice().map(q=>({...q,bullets:q.bullets.slice()})))??[],alignment:(e==null?void 0:e.alignment)??"center",tableAlignment:(e==null?void 0:e.tableAlignment)??"left",colorPrimary:(e==null?void 0:e.colorPrimary)??"",colorSecondary:(e==null?void 0:e.colorSecondary)??"",colorTertiary:(e==null?void 0:e.colorTertiary)??"",opacityPrimary:(e==null?void 0:e.opacityPrimary)??"",opacitySecondary:(e==null?void 0:e.opacitySecondary)??"",opacityTertiary:(e==null?void 0:e.opacityTertiary)??"",locked:(e==null?void 0:e.locked)??!1,allowedUserIds:(e==null?void 0:e.allowedUserIds)??[],archived:(e==null?void 0:e.archived)??!1,datePinned:(e==null?void 0:e.datePinned)??null}},me=al("blogPostDialogStore",()=>{const e=a(!1),n=a(null),q=a(Ce(null)),i=a(Se(null)),f=sl({hasContentChanges:!1,hasStylingChanges:!1,hasSettingsChanges:!1}),d=D(()=>n.value?oe.convert(n.value):null),t=D(()=>f.hasContentChanges),B=D(()=>f.hasStylingChanges),U=D(()=>f.hasSettingsChanges),E=()=>{n.value=null,q.value=Ce(null),i.value=Se(null),f.hasContentChanges=!1,f.hasStylingChanges=!1,f.hasSettingsChanges=!1},b=r=>{n.value=r,q.value=Ce(r),i.value=Se(r),e.value=!0},I=()=>{e.value=!1,E()},g=()=>oe.Content.convert(i.value),v=()=>oe.Styling.convert(i.value),u=()=>oe.Settings.convert(i.value);return{isOpen:e,blogPostOriginal:n,blogPostMutationId:q,blogPostMutation:i,blogPostMutationChanges:f,blogPostOriginalMutation:d,hasBlogPostMutationContentChanges:t,hasBlogPostMutationStylingChanges:B,hasBlogPostMutationSettingsChanges:U,$reset:E,openWith:b,close:I,getBlogPostMutationContent:g,getBlogPostMutationStyling:v,getBlogPostMutationSettings:u,isMutationEqual:async()=>{d.value&&(f.hasContentChanges=!ye(oe.Content.convert(d.value),g()),f.hasStylingChanges=!ye(oe.Styling.convert(d.value),v()),f.hasSettingsChanges=!ye(oe.Settings.convert(d.value),u()))}}}),xl={key:0,class:"flex justify-center mt-5"},El={class:"grid grid-cols-6 mb-5 gap-5"},Tl=W({__name:"BlogDetails",emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=ul(),q=Qe(),i=Ie(),f=qe(),d=ke(),{routeLoading:t}=j(i),{isLoggedIn:B}=j(f),{blogPosts:U,blogReactions:E,isBlogPostsFetchLoading:b}=j(d),{fetchBlogPost:I}=d,g=D(()=>n.params.postId);return Je(async()=>{var v;if(E.value.unread=[],g.value)if(((v=U.value.data.single)==null?void 0:v.id)!==g.value){const u=await I(g.value);if(pl(u)&&u===cl.PERMISSION_DENIED&&!B.value){q.push({name:re.LOGIN,params:{redirect:JSON.stringify({name:re.BLOG_DETAILS,params:{postId:g.value}})}});return}}else U.value.data.single}),(v,u)=>l(b)?(s(),S("div",xl,[m(Y,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:"",label:"Loading..."})])):(s(),S(ee,{key:1},[c("div",El,[m(Y,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:l(re).BLOG,loading:l(t)===l(re).BLOG,label:"Back to other posts",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),l(U).data.single?(s(),z(_e,{key:0,post:l(U).data.single,onEditClicked:u[0]||(u[0]=o=>v.$emit("editClicked",l(U).data.single)),onDeleteClicked:u[1]||(u[1]=o=>v.$emit("deleteClicked",l(U).data.single))},null,8,["post"])):T("",!0)],64))}});var Il={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ol=Ye.extend({name:"card",classes:Il}),Bl={name:"BaseCard",extends:We,style:Ol},nl={name:"Card",extends:Bl,inheritAttrs:!1};function Dl(e,n,q,i,f,d){return s(),S("div",C({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(s(),S("div",C({key:0,class:e.cx("header")},e.ptm("header")),[ie(e.$slots,"header")],16)):T("",!0),c("div",C({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(s(),S("div",C({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(s(),S("div",C({key:0,class:e.cx("title")},e.ptm("title")),[ie(e.$slots,"title")],16)):T("",!0),e.$slots.subtitle?(s(),S("div",C({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[ie(e.$slots,"subtitle")],16)):T("",!0)],16)):T("",!0),c("div",C({class:e.cx("content")},e.ptm("content")),[ie(e.$slots,"content")],16),e.$slots.footer?(s(),S("div",C({key:1,class:e.cx("footer")},e.ptm("footer")),[ie(e.$slots,"footer")],16)):T("",!0)],16)],16)}nl.render=Dl;const Ll={class:"flex gap-3"},zl={class:"min-h-[50vh] flex flex-col"},Ml={class:"flex justify-between h-fit mt-2 gap-2"},Al={class:"flex flex-wrap gap-3"},Rl={class:"relative mt-5 min-h-[20vh] max-h-screen flex flex-col justify-end"},jl={class:"relative min-h-[20vh] max-h-full flex-grow"},Nl={class:"w-full"},Fl={key:3,class:"w-full"},Hl={class:"flex justify-center mt-5"},Gl={class:"flex justify-center mt-3"},Kl=W({__name:"BlogPostOverview",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const n=e,q=Ie(),i=qe(),f=Oe(),{routeLoading:d,routeLoadingId:t}=j(q),{publicUsers:B}=j(f),{isOwner:U}=j(i),E=a(n.post.archived),b=D(()=>{var o;return(o=n.post.allowedUserIds)!=null&&o.length?B.value.filter(r=>{var p;return(p=n.post.allowedUserIds)==null?void 0:p.includes(r.id)}):[]}),I=D(()=>{const o=Be(new Date(n.post.date)),r=n.post.dateUpdated?Be(new Date(n.post.dateUpdated)):"";return o+` - updated ${r}`}),g=D(()=>{const o=[];return n.post.datePinned&&o.push({value:"Pinned",severity:"success",rounded:!1}),n.post.locked&&o.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),n.post.archived&&o.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),o}),v=D(()=>n.post.sections.length?n.post.sections[0]:null),u=()=>{const o=document.createElement("textarea"),{protocol:r,hostname:p,port:O}=window.location,x=`${r}//${p}`+(p==="localhost"?`:${O}`:"");o.value=`${x}#${ql.BLOG.path}/${n.post.id}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),Pe.success("Copied link!")};return(o,r)=>(s(),z(xe,{id:o.post.id,class:ue([{"min-h-[50vh]":!E.value},"border-4 border-transparent","!rounded-primary",o.post.colorSecondary||o.post.colorPrimary||"bg-secondary-900",o.post.opacitySecondary||"bg-opacity-50"]),title:o.post.title,subTitle:I.value,tags:g.value,loading:o.post.loading,isCollapsed:E.value,clickable:"",onClick:r[6]||(r[6]=p=>E.value=!E.value)},{right:R(()=>[c("div",Ll,[E.value?l(U)?(s(),z(Re,{key:1,onEditClicked:r[0]||(r[0]=p=>o.$emit("editClicked")),onDeleteClicked:r[1]||(r[1]=p=>o.$emit("deleteClicked"))})):T("",!0):(s(),z(Y,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:u}))])]),default:R(()=>{var p;return[c("div",zl,[c("div",Ml,[c("div",Al,[b.value.length?(s(),S(ee,{key:0},[m(l(Ve),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:b.value[0].displayName,rounded:""},null,8,["label"]),b.value.length>1?(s(),z(l(Ve),{key:0,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:"You",rounded:""})):T("",!0),b.value.length>2?(s(),z(l(Ve),{key:1,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",label:`${b.value.length-2} others`,rounded:""},null,8,["label"])):T("",!0)],64)):T("",!0)]),l(U)?(s(),S("div",{key:0,class:ue(["flex justify-end ms-5",(p=o.post.allowedUserIds)!=null&&p.length?"flex-col md:flex-row":"flex-row"])},[m(Re,{onEditClicked:r[2]||(r[2]=O=>o.$emit("editClicked")),onDeleteClicked:r[3]||(r[3]=O=>o.$emit("deleteClicked"))})],2)):T("",!0)]),c("div",Rl,[r[7]||(r[7]=c("div",{class:"absolute inset-0 rounded-primary bg-gradient-to-t from-neutral-500 to-transparent"},null,-1)),c("div",jl,[m(l(nl),{class:ue(["z-10 min-h-[20vh] p-5 text-neutral-300",o.post.colorPrimary,o.post.opacityPrimary||"bg-opacity-50"])},{header:R(()=>[o.post.coverImageUrl?(s(),z(Vl,{key:0,post:o.post,"cover-image-url":o.post.coverImageUrl,thumb:""},null,8,["post","cover-image-url"])):T("",!0)]),content:R(()=>[c("div",{class:ue(["flex relative",o.post.countdown||o.post.alignment==="center"?"flex justify-between":""])},[c("div",Nl,[o.post.countdown?(s(),z(Ne,{key:0,time:new Date(o.post.countdown).getTime(),direction:"down",alignment:o.post.alignment},null,8,["time","alignment"])):T("",!0),o.post.timer?(s(),z(Ne,{key:1,time:new Date(o.post.timer).getTime(),direction:"up",alignment:o.post.alignment},null,8,["time","alignment"])):T("",!0),o.post.description?(s(),z(Cl,{key:2,description:o.post.description.substring(0,150)+(o.post.description.length>=150?"...":"")},null,8,["description"])):v.value?(s(),S("div",Fl,[v.value.title?(s(),z(je,{key:0,alignment:v.value.alignment},{default:R(()=>[De(ae(v.value.subTitle?v.value.title:`${v.value.title}...`),1)]),_:1},8,["alignment"])):T("",!0),v.value.subTitle?(s(),z(je,{key:1,alignment:v.value.alignment,"is-sub-title":""},{default:R(()=>[De(ae(v.value.subTitle)+"... ",1)]),_:1},8,["alignment"])):T("",!0)])):T("",!0)])],2)]),_:1},8,["class"])])]),c("div",Hl,[m(Y,{class:"w-full md:w-1/2",type:"neutral",label:"Read more",loading:l(d)===l(re).BLOG_DETAILS&&l(t)===o.post.id,onClick:r[4]||(r[4]=O=>l(Le).push({name:l(re).BLOG_DETAILS,params:{postId:o.post.id}}))},null,8,["loading"])]),c("div",Gl,[c("p",{class:ue(o.post.reactions.length?"text-yellow-400 hover:text-yellow-500 cursor-pointer":"text-neutral-200"),onClick:r[5]||(r[5]=O=>l(Le).push({name:l(re).BLOG_DETAILS,params:{postId:o.post.id}}))},ae(o.post.reactions.length)+" replies ",3)])])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Ql={key:0,class:"grid grid-cols-6 mb-5 gap-5"},Jl={key:1,class:"grid grid-cols-6 lg:hidden mb-5"},Yl={class:"grid gap-4 md:gap-10 xl:gap-20"},Wl={key:2,class:"flex justify-center mt-5"},Xl=W({__name:"BlogPosts",props:{single:{type:Boolean}},emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=qe(),q=ke(),{blogPosts:i,visibleBlogPosts:f,isBlogPostsFetchLoading:d}=j(q),{firebaseUser:t,isLoggedIn:B,isOwner:U}=j(n),{fetchBlogPosts:E}=q;Sl();const b=a(),I=a(),g=a(),v=async o=>{var r;i.value.visibility!==o&&(i.value.data[o].length||await E((r=t.value)==null?void 0:r.uid,{visibility:o}),i.value.visibility=o,i.value.isLastPage=!1,he(b.value))},u=async()=>{var r;const o=f.value.length;await E((r=t.value)==null?void 0:r.uid),f.value[o]&&he(I.value[o])};return Je(()=>{i.value.loadedOnce||(B.value?v("private"):i.value.visibility!=="public"&&v("public"),i.value.loadedOnce=!0)}),we(()=>{var o;return(o=I.value)==null?void 0:o.length},()=>{var o;if((o=I.value)!=null&&o.length&&g.value){const r=f.value.find(p=>p.id===g.value);if(r){const p=f.value.indexOf(r);he(I.value[p]),g.value=void 0}}}),(o,r)=>(s(),S("div",{ref_key:"container",ref:b},[l(B)?(s(),S("div",Ql,[m(Y,{class:"hidden lg:block col-span-2",type:"secondary",outlined:l(i).visibility!=="public",loading:l(i).isLoading.public.fetch,label:"Public Posts",onClick:r[0]||(r[0]=p=>v("public"))},null,8,["outlined","loading"]),l(U)?(s(),z(Y,{key:0,class:"col-span-full md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2",type:"tertiary",label:"New Post",onClick:r[1]||(r[1]=p=>o.$emit("createClicked"))})):T("",!0),m(Y,{class:"hidden lg:block col-start-5 col-span-2",type:"secondary",outlined:l(i).visibility!=="private",loading:l(i).isLoading.private.fetch,label:"Private Posts",onClick:r[2]||(r[2]=p=>v("private"))},null,8,["outlined","loading"])])):T("",!0),l(B)?(s(),S("div",Jl,[m(Y,{class:"col-span-3 md:col-start-2 md:col-span-2 rounded-r-none",type:"secondary",outlined:l(i).visibility!=="public",loading:l(i).isLoading.public.fetch,label:"Public Posts",onClick:r[3]||(r[3]=p=>v("public"))},null,8,["outlined","loading"]),m(Y,{class:"col-span-3 md:col-start-4 md:col-span-2 rounded-l-none",type:"secondary",outlined:l(i).visibility!=="private",loading:l(i).isLoading.private.fetch,label:"Private Posts",onClick:r[4]||(r[4]=p=>v("private"))},null,8,["outlined","loading"])])):T("",!0),c("div",Yl,[l(f).length?(s(!0),S(ee,{key:0},pe(l(f),(p,O)=>(s(),S("div",{key:p.id,ref_for:!0,ref_key:"posts",ref:I},[O===0||p.datePinned?(s(),z(_e,{key:0,post:p,onEditClicked:x=>o.$emit("editClicked",p),onDeleteClicked:x=>o.$emit("deleteClicked",p)},null,8,["post","onEditClicked","onDeleteClicked"])):(s(),z(Kl,{key:1,post:p,onEditClicked:x=>o.$emit("editClicked",p),onDeleteClicked:x=>o.$emit("deleteClicked",p)},null,8,["post","onEditClicked","onDeleteClicked"]))]))),128)):l(d)?(s(),z(xe,{key:1,class:"!bg-neutral-600 !bg-opacity-40 !rounded-primary",title:"Loading..."})):(s(),z(xe,{key:2,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),l(i).isLastPage?T("",!0):(s(),S("div",Wl,[m(Y,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:l(f).length>0&&l(d),label:"Load more posts",onClick:u},null,8,["loading"])]))],512))}});var Zl=`
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
`,_l={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Fe=Ye.extend({name:"editor",css:Zl,classes:_l}),en={name:"BaseEditor",extends:We,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Fe,provide:function(){return{$parentInstance:this}},beforeMount:function(){var n;Fe.loadStyle({nonce:(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce})}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ce(e)}function He(e,n){var q=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),q.push.apply(q,i)}return q}function ln(e){for(var n=1;n<arguments.length;n++){var q=arguments[n]!=null?arguments[n]:{};n%2?He(Object(q),!0).forEach(function(i){nn(e,i,q[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(q)):He(Object(q)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(q,i))})}return e}function nn(e,n,q){return n=on(n),n in e?Object.defineProperty(e,n,{value:q,enumerable:!0,configurable:!0,writable:!0}):e[n]=q,e}function on(e){var n=tn(e,"string");return ce(n)=="symbol"?n:String(n)}function tn(e,n){if(ce(e)!="object"||!e)return e;var q=e[Symbol.toPrimitive];if(q!==void 0){var i=q.call(e,n||"default");if(ce(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Ge=function(){try{return window.Quill}catch{return null}}(),ol={name:"Editor",extends:en,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(n,q){n!==q&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(n))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var n=this,q={modules:ln({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Ge?(this.quill=new Ge(this.$refs.editorElement,q),this.initQuill(),this.handleLoad()):ml(()=>import("./c-quill-iXw6_4Pn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(i){i&&bl.isExist(n.$refs.editorElement)&&(i.default?n.quill=new i.default(n.$refs.editorElement,q):n.quill=new i(n.$refs.editorElement,q),n.initQuill())}).then(function(){n.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(n){this.quill&&(n?this.quill.setContents(this.quill.clipboard.convert(n)):this.quill.setText(""))},initQuill:function(){var n=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(q,i,f){if(f==="user"){var d=n.$refs.editorElement.children[0].innerHTML,t=n.quill.getText().trim();d==="<p><br></p>"&&(d=""),n.$emit("update:modelValue",d),n.$emit("text-change",{htmlValue:d,textValue:t,delta:q,source:f,instance:n.quill})}}),this.quill.on("selection-change",function(q,i,f){var d=n.$refs.editorElement.children[0].innerHTML,t=n.quill.getText().trim();n.$emit("selection-change",{htmlValue:d,textValue:t,range:q,oldRange:i,source:f,instance:n.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function rn(e,n,q,i,f,d){return s(),S("div",C({class:e.cx("root")},e.ptmi("root")),[c("div",C({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ie(e.$slots,"toolbar",{},function(){return[c("span",C({class:"ql-formats"},e.ptm("formats")),[c("select",C({class:"ql-header",defaultValue:"0"},e.ptm("header")),[c("option",C({value:"1"},e.ptm("option")),"Heading",16),c("option",C({value:"2"},e.ptm("option")),"Subheading",16),c("option",C({value:"0"},e.ptm("option")),"Normal",16)],16),c("select",C({class:"ql-font"},e.ptm("font")),[c("option",vl(fl(e.ptm("option"))),null,16),c("option",C({value:"serif"},e.ptm("option")),null,16),c("option",C({value:"monospace"},e.ptm("option")),null,16)],16)],16),c("span",C({class:"ql-formats"},e.ptm("formats")),[c("button",C({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),c("button",C({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),c("button",C({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),(s(),S("span",C({key:f.reRenderColorKey,class:"ql-formats"},e.ptm("formats")),[c("select",C({class:"ql-color"},e.ptm("color")),null,16),c("select",C({class:"ql-background"},e.ptm("background")),null,16)],16)),c("span",C({class:"ql-formats"},e.ptm("formats")),[c("button",C({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),c("button",C({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),c("select",C({class:"ql-align"},e.ptm("select")),[c("option",C({defaultValue:""},e.ptm("option")),null,16),c("option",C({value:"center"},e.ptm("option")),null,16),c("option",C({value:"right"},e.ptm("option")),null,16),c("option",C({value:"justify"},e.ptm("option")),null,16)],16)],16),c("span",C({class:"ql-formats"},e.ptm("formats")),[c("button",C({class:"ql-link",type:"button"},e.ptm("link")),null,16),c("button",C({class:"ql-image",type:"button"},e.ptm("image")),null,16),c("button",C({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),c("span",C({class:"ql-formats"},e.ptm("formats")),[c("button",C({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),c("div",C({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}ol.render=rn;const an={class:"m-4"},sn=["for"],Te=W({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},editorProps:{},labelProps:{},minLength:{},maxLength:{}},emits:["update:modelValue","update:error","click"],setup(e,{expose:n,emit:q}){const i=e,f=D({get:()=>i.modelValue||"",set:b=>{E("update:modelValue",b),U(b)}}),d=D(()=>i.label?i.label+((i.rules??[]).some(b=>b.type===Pl.Required)?" *":""):void 0),t=D(()=>i.name+(i.id?"."+i.id:"")),B=({instance:b})=>{b.setContents(b.clipboard.convert({html:f.value}))},U=async b=>{const I=b||f.value,g=i.rules||[];typeof i.minLength=="number"&&g.push(te.MinLength),typeof i.maxLength=="number"&&g.push(te.MaxLength);const v={value:I,minLength:i.minLength,maxLength:i.maxLength},u=g.filter(o=>!o.test(v)).map(o=>{var r;return((r=o.compareError)==null?void 0:r.call(o,v))||o.error(v)})||[];E("update:error",u[0]||"")},E=q;return n({test:U}),(b,I)=>(s(),S("div",an,[b.label?(s(),S("label",C({key:0,class:"block text-sm font-bold mb-2",for:t.value},b.labelProps),ae(d.value),17,sn)):T("",!0),m(l(ol),C({id:t.value,placeholder:b.placeholder,modelValue:f.value,"onUpdate:modelValue":I[0]||(I[0]=g=>f.value=g),onLoad:B},b.editorProps),null,16,["id","placeholder","modelValue"]),b.error?(s(),z(Ul,{key:1,name:b.name,error:b.error},null,8,["name","error"])):T("",!0)]))}}),dn={class:"m-4"},un=["for"],pn={class:"table w-full"},cn={class:"table-header-group"},qn={key:0,class:"table-row"},mn={key:0,class:"table-cell"},bn={class:"table-cell"},vn={class:"table-row-group"},fn={key:0,class:"table-cell"},gn={key:1,class:"table-cell"},kn={key:2,class:"table-cell"},wn={class:"table-footer-group"},yn={class:"table-row"},hn={key:0,class:"table-cell"},$n={class:"table-cell"},tl=W({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:n}){const q=e,i=n,d=Xe(Ze).greaterOrEqual("md"),t=D({get:()=>gl(q.modelValue),set:u=>{i("update:modelValue",ze(u))}}),B=D(()=>q.name+(q.id?"."+q.id:"")),U=D(()=>{var u;return d.value&&((u=t.value[0])==null?void 0:u.length)<3}),E=(u,o,r)=>{const p=[...t.value];p[u][o]=r,i("update:modelValue",ze(p))},b=()=>{const u=t.value;if(u.length){const o=u[0];o.length?t.value=[...u,o.map(()=>"")]:t.value=[...u,[""]]}else t.value=[[""]]},I=u=>{t.value.splice(u,1),t.value=t.value},g=()=>{t.value=t.value.map(u=>[...u,""])},v=u=>{t.value=t.value.map(o=>(o.splice(u,1),o))};return(u,o)=>(s(),S("div",dn,[u.label?(s(),S("label",C({key:0,class:"block text-sm font-bold mb-2",for:B.value},u.labelProps),ae(u.label),17,un)):T("",!0),c("div",pn,[c("div",cn,[t.value.length&&t.value[0].length>1?(s(),S("div",qn,[t.value.length>1?(s(),S("div",mn)):T("",!0),(s(!0),S(ee,null,pe(t.value[0],(r,p)=>(s(),S("div",bn,[t.value.length&&t.value[0].length?(s(),z(l(be),{key:0,class:"md:text-start text-nowrap",icon:"pi pi-times",label:U.value?"Remove column":void 0,onClick:O=>v(p)},null,8,["label","onClick"])):T("",!0)]))),256))])):T("",!0)]),c("div",vn,[(s(!0),S(ee,null,pe(t.value,(r,p)=>(s(),S("div",{key:p,class:"table-row"},[t.value.length>1?(s(),S("div",fn,[m(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-times",label:U.value?"Remove row":void 0,onClick:O=>I(p)},null,8,["label","onClick"])])):T("",!0),(s(!0),S(ee,null,pe(r,(O,x)=>(s(),z(de,{class:"table-cell !m-0",key:x,name:`${u.name}.${p}.${x}`,modelValue:O,placeholder:p===0||x===0?"header":"cell","onUpdate:modelValue":L=>E(p,x,L.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),p===0?(s(),S("div",gn,[m(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:U.value?"Add column":void 0,onClick:g},null,8,["label"])])):(s(),S("div",kn))]))),128))]),c("div",wn,[c("div",yn,[t.value.length>1?(s(),S("div",hn)):T("",!0),c("div",$n,[m(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:U.value?"Add row":void 0,onClick:b},null,8,["label"])])])])])]))}}),Vn={key:0,class:"mb-5 p-4 border-y"},Cn={class:"flex"},Sn=W({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:q}){const i=e,f=q,d=a(""),t=D({get:()=>i.modelValue.slice(),set:g=>{f("update:modelValue",g),d.value=""}}),B=D(()=>i.name+(i.id?"."+i.id:"")),U=(g,v)=>{const u=t.value.slice();u.splice(g,1,v),t.value=u},E=()=>{d.value.length&&(t.value=[...t.value,d.value])},b=g=>{const v=t.value.slice();v.splice(g,1),t.value=v};return n({test:()=>{}}),(g,v)=>(s(),S("div",null,[m(de,{id:B.value,name:g.name,label:g.label,modelValue:d.value,"onUpdate:modelValue":v[0]||(v[0]=u=>d.value=u),max:200,placeholder:g.placeholder,onKeydown:v[1]||(v[1]=kl(u=>E(),["enter"]))},null,8,["id","name","label","modelValue","placeholder"]),t.value.length?(s(),S("div",Vn,[m(l(ll),{modelValue:t.value,"onUpdate:modelValue":v[2]||(v[2]=u=>t.value=u),itemKey:"index",handle:".drag-handle"},{item:R(({element:u,index:o})=>[c("div",Cn,[v[3]||(v[3]=c("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),m(de,{class:"w-full",id:`${g.name}.${o}`,name:g.name,"model-value":u,max:200,"delete-button":"","onUpdate:modelValue":r=>U(o,r.toString()),"onUpdate:delete":r=>b(o)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])])):T("",!0)]))}}),Pn={class:"md:px-5"},Un={class:"flex justify-center"},xn={key:0},En={class:"mt-3 flex justify-evenly font-bold"},Tn=W({__name:"BlogPostContentSectionDialogSection",props:{section:{}},emits:["error","delete"],setup(e,{expose:n,emit:q}){const i=q,d=Xe(Ze).greaterOrEqual("sm"),t=a(!1),B=a(),U=a(),E=a(),b=a(),I=a(),g=a(),v=a(),u=a(),o=a(),r=a(),p=a(),O=a(),x=a(),L=a(),A=a(),G=a(),K=a(!1),X=a(!1),Q=a(!1),k=a(!1),y=D(()=>[p.value,O.value,x.value,L.value,A.value,G.value,K.value,X.value,Q.value,k.value].some(w=>!!w)),M=D(()=>d.value?"View more options":"View more"),V=D(()=>d.value?"Hide more options":"View less");return n({test:async()=>{var w,h,$,N,F,H,le,ne,J,_;await Promise.all([(w=B.value)==null?void 0:w.test(),(h=U.value)==null?void 0:h.test(),($=E.value)==null?void 0:$.test(),(N=g.value)==null?void 0:N.test(),(F=b.value)==null?void 0:F.test(),(H=I.value)==null?void 0:H.test(),(le=v.value)==null?void 0:le.test(),(ne=u.value)==null?void 0:ne.test(),(J=o.value)==null?void 0:J.test(),(_=r.value)==null?void 0:_.test()]),i("error",y.value)}}),(w,h)=>(s(),S("div",Pn,[m(de,{class:"mt-0 pt-5",ref_key:"title",ref:B,id:w.section.id,name:"title",label:"Section Title",modelValue:w.section.title,"onUpdate:modelValue":h[0]||(h[0]=$=>w.section.title=$),error:p.value,"onUpdate:error":h[1]||(h[1]=$=>p.value=$),max:50},null,8,["id","modelValue","error"]),m(de,{ref_key:"subTitle",ref:U,id:w.section.id,name:"subTitle",label:"Section Subtitle",modelValue:w.section.subTitle,"onUpdate:modelValue":h[2]||(h[2]=$=>w.section.subTitle=$),error:O.value,"onUpdate:error":h[3]||(h[3]=$=>O.value=$),max:200},null,8,["id","modelValue","error"]),m(Te,{ref_key:"description",ref:E,id:w.section.id,name:"description",label:"Section Description",modelValue:w.section.description,"onUpdate:modelValue":h[4]||(h[4]=$=>w.section.description=$),error:x.value,"onUpdate:error":h[5]||(h[5]=$=>x.value=$),"max-length":1e4},null,8,["id","modelValue","error"]),c("div",Un,[m(Y,{class:"w-full sm:w-2/3 xl:w-2/3 text-nowrap",type:"primary",outlined:"",icon:t.value?"pi pi-angle-up":"pi pi-angle-down",label:t.value?V.value:M.value,onClick:h[6]||(h[6]=$=>t.value=!t.value)},null,8,["icon","label"])]),t.value?(s(),S("div",xn,[m(ve,{ref_key:"openByDefault",ref:r,name:"openByDefault",label:"Opened",modelValue:w.section.openByDefault,"onUpdate:modelValue":h[7]||(h[7]=$=>w.section.openByDefault=$)},null,8,["modelValue"]),m(Z,{ref_key:"alignment",ref:b,id:w.section.id,name:"alignment",label:"Alignment",modelValue:w.section.alignment,"onUpdate:modelValue":h[8]||(h[8]=$=>w.section.alignment=$),error:A.value,"onUpdate:error":h[9]||(h[9]=$=>A.value=$),options:l(fe),rules:[l(te).Required]},null,8,["id","modelValue","error","options","rules"]),m(Z,{ref_key:"tableAlignment",ref:I,id:w.section.id,name:"tableAlignment",label:"Table Alignment",modelValue:w.section.tableAlignment,"onUpdate:modelValue":h[10]||(h[10]=$=>w.section.tableAlignment=$),error:G.value,"onUpdate:error":h[11]||(h[11]=$=>G.value=$),options:l(fe),rules:[l(te).Required]},null,8,["id","modelValue","error","options","rules"]),m(el,{ref_key:"coverImageUrl",ref:g,id:w.section.id,name:"coverImageUrl",label:"Cover image",modelValue:w.section.coverImageUrl,"onUpdate:modelValue":h[12]||(h[12]=$=>w.section.coverImageUrl=$),error:L.value,"onUpdate:error":h[13]||(h[13]=$=>L.value=$)},null,8,["id","modelValue","error"]),m(ge,{ref_key:"countdown",ref:v,id:w.section.id,name:"countdown",label:"Countdown",modelValue:w.section.countdown,"onUpdate:modelValue":h[14]||(h[14]=$=>w.section.countdown=$),error:K.value,"onUpdate:error":h[15]||(h[15]=$=>K.value=$)},null,8,["id","modelValue","error"]),m(ge,{ref_key:"timer",ref:u,id:w.section.id,name:"timer",label:"Timer",modelValue:w.section.timer,"onUpdate:modelValue":h[16]||(h[16]=$=>w.section.timer=$),error:X.value,"onUpdate:error":h[17]||(h[17]=$=>X.value=$)},null,8,["id","modelValue","error"]),m(Sn,{ref_key:"bullets",ref:o,id:w.section.id,name:"bullets",label:"Section Bullets",placeholder:"New bullet...",modelValue:w.section.bullets,"onUpdate:modelValue":h[18]||(h[18]=$=>w.section.bullets=$)},null,8,["id","modelValue"]),m(tl,{id:w.section.id,name:"table",label:"Table",modelValue:w.section.table,"onUpdate:modelValue":h[19]||(h[19]=$=>w.section.table=$)},null,8,["id","modelValue"])])):T("",!0),c("div",En,[m(Y,{class:"w-full sm:w-2/3 md:w-1/2 xl:w-2/3",type:"danger",outlined:"",label:"Delete",onClick:h[20]||(h[20]=$=>w.$emit("delete"))})])]))}}),In={class:"flex gap-5"},On={class:"mt-3 flex justify-center"},Bn=W({__name:"BlogPostContentDialogSection",emits:["update:selected","error"],setup(e,{expose:n,emit:q}){const i=q,f=me(),{blogPostOriginal:d,blogPostMutation:t,isOpen:B}=j(f),U=a(),E=a(),b=a(),I=a(),g=a(),v=a(),u=a([]),o=a(),r=a(),p=a(),O=a(),x=a(),L=a(!1),A=a(!1),G=a({}),K=D(()=>[r.value,p.value,O.value,x.value,L.value,A.value,Object.values(G.value).some(M=>M)].some(M=>!!M)),X=()=>{t.value.sections.push({id:wl(),title:"",subTitle:"",description:"",alignment:"left",tableAlignment:"left",coverImageUrl:"",countdown:null,timer:null,table:"",bullets:[],openByDefault:!1})},Q=M=>{const V=t.value.sections.slice(),P=V.findIndex(w=>w.id===M);V.splice(P,1),f.blogPostMutation.sections=V},k=(M,V)=>{G.value[V]=M};return n({test:async()=>{for(const M of u.value)await M.test();await Promise.all([U.value.test(),E.value.test(),b.value.test(),g.value.test(),v.value.test()]),i("error",K.value),G.value={}}}),(M,V)=>(s(),S(ee,null,[m(de,{ref_key:"title",ref:U,name:"title",label:"Title",placeholder:"Amazing Post",modelValue:l(t).title,"onUpdate:modelValue":V[0]||(V[0]=P=>l(t).title=P),error:r.value,"onUpdate:error":V[1]||(V[1]=P=>r.value=P),rules:[l(te).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),m(Te,{ref_key:"description",ref:E,name:"description",label:"Description",placeholder:"Something about my post...",modelValue:l(t).description,"onUpdate:modelValue":V[2]||(V[2]=P=>l(t).description=P),error:p.value,"onUpdate:error":V[3]||(V[3]=P=>p.value=P),"max-length":1e4},null,8,["modelValue","error"]),m(el,{ref_key:"coverImageUrl",ref:I,id:"coverImageUrl",name:"coverImageUrl",label:"Cover image",modelValue:l(t).coverImageUrl,"onUpdate:modelValue":V[4]||(V[4]=P=>l(t).coverImageUrl=P),error:x.value,"onUpdate:error":V[5]||(V[5]=P=>x.value=P),"blog-post":l(d)??void 0},null,8,["modelValue","error","blog-post"]),l(B)?(s(),z(l(Ee),{key:0,onTabOpen:l(Ue)},{default:R(()=>[m(l(se),{header:"Other content"},{default:R(()=>[m(Te,{ref_key:"descriptionFooter",ref:b,name:"descriptionFooter",label:"Footer",placeholder:"Some beautiful ending...",modelValue:l(t).descriptionFooter,"onUpdate:modelValue":V[6]||(V[6]=P=>l(t).descriptionFooter=P),error:O.value,"onUpdate:error":V[7]||(V[7]=P=>O.value=P),"max-length":1e4},null,8,["modelValue","error"]),m(ge,{ref_key:"countdown",ref:g,name:"countdown",label:"Countdown",modelValue:l(t).countdown,"onUpdate:modelValue":V[8]||(V[8]=P=>l(t).countdown=P),error:L.value,"onUpdate:error":V[9]||(V[9]=P=>L.value=P)},null,8,["modelValue","error"]),m(ge,{ref_key:"timer",ref:v,name:"timer",label:"Timer",modelValue:l(t).timer,"onUpdate:modelValue":V[10]||(V[10]=P=>l(t).timer=P),error:A.value,"onUpdate:error":V[11]||(V[11]=P=>A.value=P)},null,8,["modelValue","error"]),m(tl,{name:"table",label:"Table",modelValue:l(t).table,"onUpdate:modelValue":V[12]||(V[12]=P=>l(t).table=P)},null,8,["modelValue"])]),_:1}),m(l(se),{header:"Sections"},{default:R(()=>[m(l(ll),{ref_key:"draggable",ref:o,modelValue:l(t).sections,"onUpdate:modelValue":V[13]||(V[13]=P=>l(t).sections=P),itemKey:P=>P.id,handle:".drag-handle"},{item:R(({element:P})=>[l(B)?(s(),z(l(Ee),{key:0,onTabOpen:l(Ue)},{default:R(()=>[m(l(se),{pt:{header:{class:"drag-handle"},toggleableContent:{class:"background-gray-dark rounded-t-primary rounded-b-primary"}}},{header:R(()=>[c("div",In,[V[14]||(V[14]=c("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),c("p",null,ae(P.title||"New section"),1)])]),default:R(()=>[m(Tn,{ref:w=>{u.value[P.id]=w},section:P,"is-open":l(B),onDelete:w=>Q(P.id),onError:w=>k(w,P.id)},null,8,["section","is-open","onDelete","onError"])]),_:2},1024)]),_:2},1032,["onTabOpen"])):T("",!0)]),_:1},8,["modelValue","itemKey"]),c("div",On,[m(Y,{class:"w-1/2",type:"green",label:"Add Section",onClick:X})])]),_:1})]),_:1},8,["onTabOpen"])):T("",!0)],64))}}),Dn=W({__name:"BlogPostSettingsDialogSection",emits:["error"],setup(e,{expose:n,emit:q}){const i=q,f=qe(),d=Oe(),t=me(),{publicUser:B,publicUsers:U}=j(d),{firebaseUser:E}=j(f),{blogPostMutation:b}=j(t),{allowedPublicUsers:I}=d,g=a(),v=a(),u=a(),o=a(),r=D({get(){return!!b.value.datePinned},set(k){b.value.datePinned=k?new Date:null}}),p=a(),O=a(),x=a(),L=a(),A=D(()=>[p.value,O.value,x.value,L.value].some(k=>!!k)),G=D(()=>U.value.map(({id:k,displayName:y})=>({value:k,label:y}))),K=a([]),X=k=>{b.value.allowedUserIds=k},Q=async()=>{b.value.allowedUserIds.length&&!K.value.length&&(p.value="Invalid user ID's"),await Promise.all([v.value.test(),u.value.test(),o.value.test()]),i("error",A.value)};return we(()=>b.value.allowedUserIds,async k=>{K.value=await I(k)},{immediate:!0}),n({test:Q}),(k,y)=>(s(),S(ee,null,[m(Z,{ref_key:"allowedUsers",ref:g,name:"allowedUserIds",label:"Allowed users",placeholder:"This post is public","model-value":l(b).allowedUserIds,error:p.value,"onUpdate:error":y[0]||(y[0]=M=>p.value=M),"onUpdate:arrayValue":X,options:[{value:l(E).uid,label:l(B).displayName},...G.value.filter(({value:M})=>{var V;return M!==((V=l(E))==null?void 0:V.uid)})],multiple:""},null,8,["model-value","error","options"]),m(ve,{ref_key:"pinned",ref:o,name:"pinned",label:"Pinned",modelValue:r.value,"onUpdate:modelValue":y[1]||(y[1]=M=>r.value=M)},null,8,["modelValue"]),m(ve,{ref_key:"locked",ref:v,name:"locked",label:"Locked for commenting",modelValue:l(b).locked,"onUpdate:modelValue":y[2]||(y[2]=M=>l(b).locked=M)},null,8,["modelValue"]),m(ve,{ref_key:"archived",ref:u,name:"archived",label:"Archived",modelValue:l(b).archived,"onUpdate:modelValue":y[3]||(y[3]=M=>l(b).archived=M)},null,8,["modelValue"])],64))}}),Ln=W({__name:"BlogPostStylingDialogSection",emits:["error"],setup(e,{expose:n,emit:q}){const i=q,f=me(),{blogPostMutation:d}=j(f),t=a(),B=a(),U=a(),E=a(),b=a(),I=a(),g=a(),v=a(),u=a(),o=a(),r=a(),p=a(),O=a(),x=a(),L=a(),A=a(),G=D(()=>[u.value,o.value,r.value,p.value,O.value,x.value,L.value,A.value].some(Q=>!!Q)),K=D(()=>yl(Me.find(Q=>Q.value===d.value.colorPrimary)));return n({test:async()=>{await Promise.all([t.value.test(),B.value.test(),U.value.test(),E.value.test(),b.value.test(),I.value.test(),g.value.test(),v.value.test()]),i("error",G.value)}}),(Q,k)=>(s(),S(ee,null,[m(Z,{ref_key:"alignment",ref:t,name:"alignment",label:"Alignment",modelValue:l(d).alignment,"onUpdate:modelValue":k[0]||(k[0]=y=>l(d).alignment=y),error:u.value,"onUpdate:error":k[1]||(k[1]=y=>u.value=y),options:l(fe),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"tableAlignment",ref:B,name:"tableAlignment",label:"Table Alignment",modelValue:l(d).tableAlignment,"onUpdate:modelValue":k[2]||(k[2]=y=>l(d).tableAlignment=y),error:o.value,"onUpdate:error":k[3]||(k[3]=y=>o.value=y),options:l(fe),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"colorPrimary",ref:U,name:"colorPrimary",label:"Primary Style",modelValue:l(d).colorPrimary,"onUpdate:modelValue":k[4]||(k[4]=y=>l(d).colorPrimary=y),error:r.value,"onUpdate:error":k[5]||(k[5]=y=>r.value=y),options:l(Me),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),m(Z,{ref_key:"opacityPrimary",ref:I,name:"opacityPrimary",label:"Primary Opacity",modelValue:l(d).opacityPrimary,"onUpdate:modelValue":k[6]||(k[6]=y=>l(d).opacityPrimary=y),error:x.value,"onUpdate:error":k[7]||(k[7]=y=>x.value=y),options:l($e)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"colorSecondary",ref:E,name:"colorSecondary",label:"Secondary Style",modelValue:l(d).colorSecondary,"onUpdate:modelValue":k[8]||(k[8]=y=>l(d).colorSecondary=y),error:p.value,"onUpdate:error":k[9]||(k[9]=y=>p.value=y),options:K.value},null,8,["modelValue","error","options"]),m(Z,{ref_key:"opacitySecondary",ref:g,name:"opacitySecondary",label:"Secondary Opacity",modelValue:l(d).opacitySecondary,"onUpdate:modelValue":k[10]||(k[10]=y=>l(d).opacitySecondary=y),error:L.value,"onUpdate:error":k[11]||(k[11]=y=>L.value=y),options:l($e)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"colorTertiary",ref:b,name:"colorTertiary",label:"Tertiary Style",modelValue:l(d).colorTertiary,"onUpdate:modelValue":k[12]||(k[12]=y=>l(d).colorTertiary=y),error:O.value,"onUpdate:error":k[13]||(k[13]=y=>O.value=y),options:l(hl)},null,8,["modelValue","error","options"]),m(Z,{ref_key:"opacityTertiary",ref:v,name:"opacityTertiary",label:"Tertiary Opacity",modelValue:l(d).opacityTertiary,"onUpdate:modelValue":k[14]||(k[14]=y=>l(d).opacityTertiary=y),error:A.value,"onUpdate:error":k[15]||(k[15]=y=>A.value=y),options:l($e)},null,8,["modelValue","error","options"])],64))}}),zn=W({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:n}){const q=n,i=qe(),f=ke(),d=me(),{firebaseUser:t}=j(i),{isBlogPostsMutationLoading:B}=j(f),{createBlogPost:U,updateBlogPost:E,deleteFilesOfBlogPost:b,toggleBlogPostVisibility:I}=f,{getBlogPostMutationContent:g,getBlogPostMutationStyling:v,getBlogPostMutationSettings:u}=d,{isOpen:o,blogPostOriginal:r,blogPostMutationId:p,blogPostMutation:O,hasBlogPostMutationContentChanges:x,hasBlogPostMutationStylingChanges:L,hasBlogPostMutationSettingsChanges:A}=j(d),G=a(),K=a(),X=a(),Q=a(),k=a(!1),y=a(!1),M=a(!1),V=D(()=>{var N,F,H,le,ne,J;return!!((F=(N=r.value)==null?void 0:N.allowedUserIds)!=null&&F.length)&&!((H=u().allowedUserIds)!=null&&H.length)||!((ne=(le=r.value)==null?void 0:le.allowedUserIds)!=null&&ne.length)&&!!((J=u().allowedUserIds)!=null&&J.length)}),P=D(()=>{const N=[];return x.value&&N.push("Content"),L.value&&N.push("Styling"),A.value&&N.push("Settings"),N.length?"Update "+Ae(N):void 0}),w=D(()=>$l(r.value)),h=async()=>{var N,F,H,le,ne;if(await Promise.all([K.value.test(),X.value.test(),Q.value.test()]),!(k.value||y.value||M.value))if(!r.value)await U(p.value,O.value,(N=t.value)==null?void 0:N.uid)&&(d.close(),q("scroll-to-updated",p.value));else if(V.value){const J=p.value;d.isOpen=!1,await I(J,oe.convert(O.value),r.value.reactions,O.value.allowedUserIds.length?"private":"public",(F=t.value)==null?void 0:F.uid)&&(d.close(),Pe.success("Successfully updated Post Visibility"),q("scroll-to-updated",J))}else{const J=p.value;let _=[];x.value&&_.push(await E(J,g(),w.value,(H=t.value)==null?void 0:H.uid)),L.value&&_.push(await E(J,v(),w.value,(le=t.value)==null?void 0:le.uid)),A.value&&(_.push(await E(J,u(),w.value,(ne=t.value)==null?void 0:ne.uid)),q("scroll-to-updated",J)),_=_.filter(rl=>typeof rl=="string"),_.length&&(Pe.success(`Successfully updated Post ${Ae(_)}`),d.close())}},$=async()=>{b(O.value,r.value??void 0),d.close()};return we(O,()=>{d.isMutationEqual()},{deep:!0}),(N,F)=>(s(),z(Ke,{isOpen:l(o),title:l(r)?"Update Post":"Create Post",description:l(r)?"Update this post":"Create a new post","confirm-text":l(r)?P.value:"Create","confirm-loading":l(B),onConfirm:h,onCancel:$},{default:R(()=>[c("form",{ref_key:"dialog",ref:G,class:"pt-6 mb-4 xl:px-16"},[l(o)?(s(),z(l(Ee),{key:0,"active-index":0,onTabOpen:l(Ue)},{default:R(()=>[m(l(se),{header:"Content"},{default:R(()=>[m(Bn,{ref_key:"content",ref:K,onError:F[0]||(F[0]=H=>k.value=H)},null,512)]),_:1}),m(l(se),{header:"Styling"},{default:R(()=>[m(Ln,{ref_key:"styling",ref:X,onError:F[1]||(F[1]=H=>y.value=H)},null,512)]),_:1}),m(l(se),{header:"Settings"},{default:R(()=>[m(Dn,{ref_key:"settings",ref:Q,onError:F[2]||(F[2]=H=>M.value=H)},null,512)]),_:1})]),_:1},8,["onTabOpen"])):T("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading"]))}}),Mn={class:"grid mt-10 md:mt-15"},An={class:"grid justify-center"},Rn={class:"text-lg md:text-xl text-white"},jn=["innerHTML"],Nn={class:"grid my-5 xl:px-20"},Fn=W({__name:"Blog",setup(e){const n=Qe(),q=Ie(),i=Oe(),f=ke(),d=me(),{menuItems:t,content:B}=j(q),{publicUser:U}=j(i),{deleteBlogPost:E}=f,b=a(null),I=a(),g=a(!1),v=a(n.currentRoute.value.params.postId),u=D(()=>{var x;return U.value?[...B.value.blogDescriptionUser.map(L=>L.replace("%USER%",U.value.displayName||"Unknown user")),...((x=t.value.find(L=>L.id==="nfNQM4SMESU2VOkJtcgY"))==null?void 0:x.description)||[]]:B.value.blogDescriptionGuest}),o=()=>{d.openWith(null)},r=x=>{d.openWith(x)},p=x=>{b.value=x,g.value=!0},O=async x=>{await E(x)&&(g.value=!1,b.value=null)};return we(n.currentRoute,x=>{v.value=x.params.postId}),(x,L)=>(s(),z(il,null,{content:R(()=>[c("div",Mn,[c("div",An,[(s(!0),S(ee,null,pe(u.value,A=>(s(),S("h1",Rn,[c("span",{innerHTML:A},null,8,jn)]))),256))]),c("div",Nn,[v.value?(s(),z(Tl,{key:0,onEditClicked:r,onDeleteClicked:p})):(s(),z(Xl,{key:1,onCreateClicked:o,onEditClicked:r,onDeleteClicked:p})),m(zn,{onScrollToUpdated:L[0]||(L[0]=A=>I.value=A)}),b.value?(s(),z(Ke,{key:2,title:"Delete Post",isOpen:g.value,description:[` Are you sure you want to delete this post called ' ${b.value.title}'?`,"This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:L[1]||(L[1]=A=>O(b.value.id)),onCancel:L[2]||(L[2]=A=>g.value=!1)},null,8,["isOpen","description"])):T("",!0)])])]),_:1}))}}),ro=W({__name:"Blog",setup(e){return(n,q)=>(s(),z(Fn))}});export{ro as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./c-quill-iXw6_4Pn.js","./c-vuedraggable.umd-BC1GM7Qy.js","../bundle.js","../bundle8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
