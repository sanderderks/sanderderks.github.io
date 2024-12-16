import{_ as ve,a as Ge}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-JQE6dSwt.js";import{_ as il}from"./c-Page.vue_vue_type_script_setup_true_lang-8s5eL3aX.js";import{d as al,r as a,a as sl,c as D,I as oe,v as dl,b as ye,e as G,u as ul,f as Ke,g as Te,h as qe,i as ke,s as j,o as Qe,j as pl,F as cl,R as re,k as l,l as d,m as $,n as b,p as c,q as z,t as T,w as ee,B as Je,x as Ye,y as P,z as ae,A as Ie,C as Oe,D as R,E as ue,G as Be,H as ie,J as De,K as ql,L as Se,M as we,N as he,O as pe,P as ml,_ as bl,Q as vl,S as fl,T as gl,U as kl,V as Le,W as wl,X as fe,Y as Ue,Z as yl,$ as hl,a0 as ze,a1 as Ve,a2 as Vl,a3 as Me,a4 as $l}from"../bundle.js";import{_ as W,a as We,u as Xe,b as Ze,s as be}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{_ as _e,a as Ae,s as $e,b as Cl,c as Re,d as Pl,e as je,u as Sl}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-CsN60wgL.js";import{s as se,a as xe}from"./c-Image.vue_vue_type_script_setup_true_lang-DxYsW8Nr.js";import{_ as el}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-he7r1aqn.js";import{V as Ul,R as te,_ as xl}from"./c-validation-DokkLKHB.js";import{_ as de}from"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import{D as ll}from"./c-vuedraggable.umd-DZ3azzJt.js";import{_ as Z}from"./c-SelectField.vue_vue_type_script_setup_true_lang-Bu9S1e-e.js";const Ce=e=>(e==null?void 0:e.id)??dl(),Pe=e=>{var n;return{date:(e==null?void 0:e.date)||new Date,dateUpdated:(e==null?void 0:e.dateUpdated)||new Date,title:(e==null?void 0:e.title)??"",description:(e==null?void 0:e.description)??"",descriptionFooter:(e==null?void 0:e.descriptionFooter)??"",coverImageUrl:(e==null?void 0:e.coverImageUrl)??"",timer:(e==null?void 0:e.timer)??null,countdown:(e==null?void 0:e.countdown)??null,table:(e==null?void 0:e.table)??"",sections:((n=e==null?void 0:e.sections)==null?void 0:n.slice().map(p=>({...p,bullets:p.bullets.slice()})))??[],alignment:(e==null?void 0:e.alignment)??"center",tableAlignment:(e==null?void 0:e.tableAlignment)??"left",colorPrimary:(e==null?void 0:e.colorPrimary)??"",colorSecondary:(e==null?void 0:e.colorSecondary)??"",colorTertiary:(e==null?void 0:e.colorTertiary)??"",opacityPrimary:(e==null?void 0:e.opacityPrimary)??"",opacitySecondary:(e==null?void 0:e.opacitySecondary)??"",opacityTertiary:(e==null?void 0:e.opacityTertiary)??"",locked:(e==null?void 0:e.locked)??!1,allowedUserIds:(e==null?void 0:e.allowedUserIds)??[],archived:(e==null?void 0:e.archived)??!1,datePinned:(e==null?void 0:e.datePinned)??null}},me=al("blogPostDialogStore",()=>{const e=a(!1),n=a(null),p=a(Ce(null)),t=a(Pe(null)),f=sl({hasContentChanges:!1,hasStylingChanges:!1,hasSettingsChanges:!1}),s=D(()=>n.value?oe.convert(n.value):null),r=D(()=>f.hasContentChanges),O=D(()=>f.hasStylingChanges),V=D(()=>f.hasSettingsChanges),U=()=>{n.value=null,p.value=Ce(null),t.value=Pe(null),f.hasContentChanges=!1,f.hasStylingChanges=!1,f.hasSettingsChanges=!1},m=i=>{n.value=i,p.value=Ce(i),t.value=Pe(i),e.value=!0},I=()=>{e.value=!1,U()},g=()=>oe.Content.convert(t.value),v=()=>oe.Styling.convert(t.value),u=()=>oe.Settings.convert(t.value);return{isOpen:e,blogPostOriginal:n,blogPostMutationId:p,blogPostMutation:t,blogPostMutationChanges:f,blogPostOriginalMutation:s,hasBlogPostMutationContentChanges:r,hasBlogPostMutationStylingChanges:O,hasBlogPostMutationSettingsChanges:V,$reset:U,openWith:m,close:I,getBlogPostMutationContent:g,getBlogPostMutationStyling:v,getBlogPostMutationSettings:u,isMutationEqual:async()=>{s.value&&(f.hasContentChanges=!ye(oe.Content.convert(s.value),g()),f.hasStylingChanges=!ye(oe.Styling.convert(s.value),v()),f.hasSettingsChanges=!ye(oe.Settings.convert(s.value),u()))}}}),El={key:0,class:"flex justify-center mt-5"},Tl={class:"grid grid-cols-6 mb-5 gap-5"},Il=G({__name:"BlogDetails",emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=ul(),p=Ke(),t=Te(),f=qe(),s=ke(),{routeLoading:r}=j(t),{isLoggedIn:O}=j(f),{blogPosts:V,blogReactions:U,isBlogPostsFetchLoading:m}=j(s),{fetchBlogPost:I}=s,g=D(()=>n.params.postId);return Qe(async()=>{var v;if(U.value.unread=[],g.value)if(((v=V.value.data.single)==null?void 0:v.id)!==g.value){const u=await I(g.value);if(pl(u)&&u===cl.PERMISSION_DENIED&&!O.value){p.push({name:re.LOGIN,params:{redirect:JSON.stringify({name:re.BLOG_DETAILS,params:{postId:g.value}})}});return}}else V.value.data.single}),(v,u)=>l(m)?(d(),$("div",El,[b(W,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:"",label:"Loading..."})])):(d(),$(ee,{key:1},[c("div",Tl,[b(W,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:l(re).BLOG,loading:l(r)===l(re).BLOG,label:"Back to other posts",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),l(V).data.single?(d(),z(_e,{key:0,post:l(V).data.single,onEditClicked:u[0]||(u[0]=o=>v.$emit("editClicked",l(V).data.single)),onDeleteClicked:u[1]||(u[1]=o=>v.$emit("deleteClicked",l(V).data.single))},null,8,["post"])):T("",!0)],64))}});var Ol={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Bl=Je.extend({name:"card",classes:Ol}),Dl={name:"BaseCard",extends:Ye,style:Bl},nl={name:"Card",extends:Dl,inheritAttrs:!1};function Ll(e,n,p,t,f,s){return d(),$("div",P({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(d(),$("div",P({key:0,class:e.cx("header")},e.ptm("header")),[ae(e.$slots,"header")],16)):T("",!0),c("div",P({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(d(),$("div",P({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(d(),$("div",P({key:0,class:e.cx("title")},e.ptm("title")),[ae(e.$slots,"title")],16)):T("",!0),e.$slots.subtitle?(d(),$("div",P({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[ae(e.$slots,"subtitle")],16)):T("",!0)],16)):T("",!0),c("div",P({class:e.cx("content")},e.ptm("content")),[ae(e.$slots,"content")],16),e.$slots.footer?(d(),$("div",P({key:1,class:e.cx("footer")},e.ptm("footer")),[ae(e.$slots,"footer")],16)):T("",!0)],16)],16)}nl.render=Ll;const zl={class:"flex gap-3"},Ml={class:"min-h-[50vh] flex flex-col"},Al={class:"flex justify-between h-fit mt-2 gap-2"},Rl={class:"flex flex-wrap gap-3"},jl={class:"relative mt-5 min-h-[20vh] max-h-screen flex flex-col justify-end"},Nl={class:"relative min-h-[20vh] max-h-full flex-grow"},Fl={class:"w-full"},Hl={key:3,class:"w-full"},Gl={class:"flex justify-center mt-5"},Kl={class:"flex justify-center mt-3"},Ql=G({__name:"BlogPostOverview",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const n=e,p=Te(),t=qe(),f=Ie(),{routeLoading:s,routeLoadingId:r}=j(p),{publicUsers:O}=j(f),{isOwner:V}=j(t),U=a(n.post.archived),m=D(()=>{var o;return(o=n.post.allowedUserIds)!=null&&o.length?O.value.filter(i=>{var q;return(q=n.post.allowedUserIds)==null?void 0:q.includes(i.id)}):[]}),I=D(()=>{const o=Oe(new Date(n.post.date)),i=n.post.dateUpdated?Oe(new Date(n.post.dateUpdated)):"";return o+` - updated ${i}`}),g=D(()=>{const o=[];return n.post.datePinned&&o.push({value:"Pinned",severity:"success",rounded:!1}),n.post.locked&&o.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),n.post.archived&&o.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),o}),v=D(()=>n.post.sections.length?n.post.sections[0]:null),u=()=>{const o=document.createElement("textarea"),{protocol:i,hostname:q,port:B}=window.location,E=`${i}//${q}`+(q==="localhost"?`:${B}`:"");o.value=`${E}#${ql.BLOG.path}/${n.post.id}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),Se.success("Copied link!")};return(o,i)=>(d(),z(We,{id:o.post.id,class:ue([{"min-h-[50vh]":!U.value},"border-4 border-transparent","!rounded-primary",o.post.colorSecondary||o.post.colorPrimary||"bg-secondary-900",o.post.opacitySecondary||"bg-opacity-50"]),title:o.post.title,subTitle:I.value,tags:g.value,loading:o.post.loading,isCollapsed:U.value,clickable:"",onClick:i[6]||(i[6]=q=>U.value=!U.value)},{right:R(()=>[c("div",zl,[U.value?l(V)?(d(),z(Ae,{key:1,onEditClicked:i[0]||(i[0]=q=>o.$emit("editClicked")),onDeleteClicked:i[1]||(i[1]=q=>o.$emit("deleteClicked"))})):T("",!0):(d(),z(W,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:u}))])]),default:R(()=>{var q;return[c("div",Ml,[c("div",Al,[c("div",Rl,[m.value.length?(d(),$(ee,{key:0},[b(l($e),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:m.value[0].displayName,rounded:""},null,8,["label"]),m.value.length>1?(d(),z(l($e),{key:0,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:"You",rounded:""})):T("",!0),m.value.length>2?(d(),z(l($e),{key:1,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",label:`${m.value.length-2} others`,rounded:""},null,8,["label"])):T("",!0)],64)):T("",!0)]),l(V)?(d(),$("div",{key:0,class:ue(["flex justify-end ms-5",(q=o.post.allowedUserIds)!=null&&q.length?"flex-col md:flex-row":"flex-row"])},[b(Ae,{onEditClicked:i[2]||(i[2]=B=>o.$emit("editClicked")),onDeleteClicked:i[3]||(i[3]=B=>o.$emit("deleteClicked"))})],2)):T("",!0)]),c("div",jl,[i[7]||(i[7]=c("div",{class:"absolute inset-0 rounded-primary bg-gradient-to-t from-neutral-500 to-transparent"},null,-1)),c("div",Nl,[b(l(nl),{class:ue(["z-10 min-h-[20vh] p-5 text-neutral-300",o.post.colorPrimary,o.post.opacityPrimary||"bg-opacity-50"])},{header:R(()=>[o.post.coverImageUrl?(d(),z(Cl,{key:0,post:o.post,"cover-image-url":o.post.coverImageUrl,thumb:""},null,8,["post","cover-image-url"])):T("",!0)]),content:R(()=>[c("div",{class:ue(["flex relative",o.post.countdown||o.post.alignment==="center"?"flex justify-between":""])},[c("div",Fl,[o.post.countdown?(d(),z(Re,{key:0,time:new Date(o.post.countdown).getTime(),direction:"down",alignment:o.post.alignment},null,8,["time","alignment"])):T("",!0),o.post.timer?(d(),z(Re,{key:1,time:new Date(o.post.timer).getTime(),direction:"up",alignment:o.post.alignment},null,8,["time","alignment"])):T("",!0),o.post.description?(d(),z(Pl,{key:2,description:o.post.description.substring(0,150)+(o.post.description.length>=150?"...":"")},null,8,["description"])):v.value?(d(),$("div",Hl,[v.value.title?(d(),z(je,{key:0,alignment:v.value.alignment},{default:R(()=>[Be(ie(v.value.subTitle?v.value.title:`${v.value.title}...`),1)]),_:1},8,["alignment"])):T("",!0),v.value.subTitle?(d(),z(je,{key:1,alignment:v.value.alignment,"is-sub-title":""},{default:R(()=>[Be(ie(v.value.subTitle)+"... ",1)]),_:1},8,["alignment"])):T("",!0)])):T("",!0)])],2)]),_:1},8,["class"])])]),c("div",Gl,[b(W,{class:"w-full md:w-1/2",type:"neutral",label:"Read more",loading:l(s)===l(re).BLOG_DETAILS&&l(r)===o.post.id,onClick:i[4]||(i[4]=B=>l(De).push({name:l(re).BLOG_DETAILS,params:{postId:o.post.id}}))},null,8,["loading"])]),c("div",Kl,[c("p",{class:ue(o.post.reactions.length?"text-yellow-400 hover:text-yellow-500 cursor-pointer":"text-neutral-200"),onClick:i[5]||(i[5]=B=>l(De).push({name:l(re).BLOG_DETAILS,params:{postId:o.post.id}}))},ie(o.post.reactions.length)+" replies ",3)])])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Jl={key:0,class:"grid grid-cols-6 mb-5 gap-5"},Yl={key:1,class:"grid grid-cols-6 lg:hidden mb-5"},Wl={class:"grid gap-4 md:gap-10 xl:gap-20"},Xl={key:2,class:"flex justify-center mt-5"},Zl=G({__name:"BlogPosts",props:{single:{type:Boolean}},emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=qe(),p=ke(),{blogPosts:t,visibleBlogPosts:f,isBlogPostsFetchLoading:s}=j(p),{firebaseUser:r,isLoggedIn:O,isOwner:V}=j(n),{fetchBlogPosts:U}=p;Sl();const m=a(),I=a(),g=a(),v=async o=>{var i;t.value.visibility!==o&&(t.value.data[o].length||await U((i=r.value)==null?void 0:i.uid,{visibility:o}),t.value.visibility=o,t.value.isLastPage=!1,he(m.value))},u=async()=>{var i;const o=f.value.length;await U((i=r.value)==null?void 0:i.uid),f.value[o]&&he(I.value[o])};return Qe(()=>{t.value.loadedOnce||(O.value?t.value.visibility="private":t.value.visibility!=="public"&&(t.value.visibility="public"),t.value.loadedOnce=!0)}),we(()=>{var o;return(o=I.value)==null?void 0:o.length},()=>{var o;if((o=I.value)!=null&&o.length&&g.value){const i=f.value.find(q=>q.id===g.value);if(i){const q=f.value.indexOf(i);he(I.value[q]),g.value=void 0}}}),(o,i)=>(d(),$("div",{ref_key:"container",ref:m},[l(O)?(d(),$("div",Jl,[b(W,{class:"hidden lg:block col-span-2",type:"secondary",outlined:l(t).visibility!=="public",loading:l(t).isLoading.public.fetch,label:"Public Posts",onClick:i[0]||(i[0]=q=>v("public"))},null,8,["outlined","loading"]),l(V)?(d(),z(W,{key:0,class:"col-span-full md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2",type:"tertiary",label:"New Post",onClick:i[1]||(i[1]=q=>o.$emit("createClicked"))})):T("",!0),b(W,{class:"hidden lg:block col-start-5 col-span-2",type:"secondary",outlined:l(t).visibility!=="private",loading:l(t).isLoading.private.fetch,label:"Private Posts",onClick:i[2]||(i[2]=q=>v("private"))},null,8,["outlined","loading"])])):T("",!0),l(O)?(d(),$("div",Yl,[b(W,{class:"col-span-3 md:col-start-2 md:col-span-2 rounded-r-none",type:"secondary",outlined:l(t).visibility!=="public",loading:l(t).isLoading.public.fetch,label:"Public Posts",onClick:i[3]||(i[3]=q=>v("public"))},null,8,["outlined","loading"]),b(W,{class:"col-span-3 md:col-start-4 md:col-span-2 rounded-l-none",type:"secondary",outlined:l(t).visibility!=="private",loading:l(t).isLoading.private.fetch,label:"Private Posts",onClick:i[4]||(i[4]=q=>v("private"))},null,8,["outlined","loading"])])):T("",!0),c("div",Wl,[l(f).length?(d(!0),$(ee,{key:0},pe(l(f),(q,B)=>(d(),$("div",{key:q.id,ref_for:!0,ref_key:"posts",ref:I},[B===0?(d(),z(_e,{key:0,post:q,onEditClicked:E=>o.$emit("editClicked",q),onDeleteClicked:E=>o.$emit("deleteClicked",q)},null,8,["post","onEditClicked","onDeleteClicked"])):(d(),z(Ql,{key:1,post:q,onEditClicked:E=>o.$emit("editClicked",q),onDeleteClicked:E=>o.$emit("deleteClicked",q)},null,8,["post","onEditClicked","onDeleteClicked"]))]))),128)):l(s)?T("",!0):(d(),z(We,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),l(t).isLastPage?T("",!0):(d(),$("div",Xl,[b(W,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:l(f).length>0&&l(s),label:"Load more posts",onClick:u},null,8,["loading"])]))],512))}}),_l={class:"m-4"},en=["for"],ge=G({__name:"DateField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:p}){const t=e,f=D({get:()=>t.modelValue,set:V=>{O("update:modelValue",V)}}),s=D(()=>t.name+(t.id!==void 0?"."+t.id:"")),r=()=>{},O=p;return n({test:r}),(V,U)=>{const m=ml("VueDatePicker");return d(),$("div",_l,[V.label?(d(),$("label",P({key:0,class:"block text-sm font-bold mb-2",for:"dp-input-"+s.value},V.labelProps),ie(V.label),17,en)):T("",!0),b(m,{uid:s.value,class:"p-input px-5",modelValue:f.value,"onUpdate:modelValue":U[0]||(U[0]=I=>f.value=I),dark:""},null,8,["uid","modelValue"])])}}});var ln=`
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
`,nn={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Ne=Je.extend({name:"editor",css:ln,classes:nn}),on={name:"BaseEditor",extends:Ye,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Ne,provide:function(){return{$parentInstance:this}},beforeMount:function(){var n;Ne.loadStyle({nonce:(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce})}};function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ce(e)}function Fe(e,n){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(f){return Object.getOwnPropertyDescriptor(e,f).enumerable})),p.push.apply(p,t)}return p}function tn(e){for(var n=1;n<arguments.length;n++){var p=arguments[n]!=null?arguments[n]:{};n%2?Fe(Object(p),!0).forEach(function(t){rn(e,t,p[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):Fe(Object(p)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))})}return e}function rn(e,n,p){return n=an(n),n in e?Object.defineProperty(e,n,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[n]=p,e}function an(e){var n=sn(e,"string");return ce(n)=="symbol"?n:String(n)}function sn(e,n){if(ce(e)!="object"||!e)return e;var p=e[Symbol.toPrimitive];if(p!==void 0){var t=p.call(e,n||"default");if(ce(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var He=function(){try{return window.Quill}catch{return null}}(),ol={name:"Editor",extends:on,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(n,p){n!==p&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(n))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var n=this,p={modules:tn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};He?(this.quill=new He(this.$refs.editorElement,p),this.initQuill(),this.handleLoad()):bl(()=>import("./c-quill-D2YPtopm.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(t){t&&vl.isExist(n.$refs.editorElement)&&(t.default?n.quill=new t.default(n.$refs.editorElement,p):n.quill=new t(n.$refs.editorElement,p),n.initQuill())}).then(function(){n.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(n){this.quill&&(n?this.quill.setContents(this.quill.clipboard.convert(n)):this.quill.setText(""))},initQuill:function(){var n=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(p,t,f){if(f==="user"){var s=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();s==="<p><br></p>"&&(s=""),n.$emit("update:modelValue",s),n.$emit("text-change",{htmlValue:s,textValue:r,delta:p,source:f,instance:n.quill})}}),this.quill.on("selection-change",function(p,t,f){var s=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();n.$emit("selection-change",{htmlValue:s,textValue:r,range:p,oldRange:t,source:f,instance:n.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function dn(e,n,p,t,f,s){return d(),$("div",P({class:e.cx("root")},e.ptmi("root")),[c("div",P({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[ae(e.$slots,"toolbar",{},function(){return[c("span",P({class:"ql-formats"},e.ptm("formats")),[c("select",P({class:"ql-header",defaultValue:"0"},e.ptm("header")),[c("option",P({value:"1"},e.ptm("option")),"Heading",16),c("option",P({value:"2"},e.ptm("option")),"Subheading",16),c("option",P({value:"0"},e.ptm("option")),"Normal",16)],16),c("select",P({class:"ql-font"},e.ptm("font")),[c("option",fl(gl(e.ptm("option"))),null,16),c("option",P({value:"serif"},e.ptm("option")),null,16),c("option",P({value:"monospace"},e.ptm("option")),null,16)],16)],16),c("span",P({class:"ql-formats"},e.ptm("formats")),[c("button",P({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),c("button",P({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),c("button",P({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),(d(),$("span",P({key:f.reRenderColorKey,class:"ql-formats"},e.ptm("formats")),[c("select",P({class:"ql-color"},e.ptm("color")),null,16),c("select",P({class:"ql-background"},e.ptm("background")),null,16)],16)),c("span",P({class:"ql-formats"},e.ptm("formats")),[c("button",P({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),c("button",P({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),c("select",P({class:"ql-align"},e.ptm("select")),[c("option",P({defaultValue:""},e.ptm("option")),null,16),c("option",P({value:"center"},e.ptm("option")),null,16),c("option",P({value:"right"},e.ptm("option")),null,16),c("option",P({value:"justify"},e.ptm("option")),null,16)],16)],16),c("span",P({class:"ql-formats"},e.ptm("formats")),[c("button",P({class:"ql-link",type:"button"},e.ptm("link")),null,16),c("button",P({class:"ql-image",type:"button"},e.ptm("image")),null,16),c("button",P({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),c("span",P({class:"ql-formats"},e.ptm("formats")),[c("button",P({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),c("div",P({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}ol.render=dn;const un={class:"m-4"},pn=["for"],Ee=G({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},editorProps:{},labelProps:{},minLength:{},maxLength:{}},emits:["update:modelValue","update:error","click"],setup(e,{expose:n,emit:p}){const t=e,f=D({get:()=>t.modelValue||"",set:m=>{U("update:modelValue",m),V(m)}}),s=D(()=>t.label?t.label+((t.rules??[]).some(m=>m.type===Ul.Required)?" *":""):void 0),r=D(()=>t.name+(t.id?"."+t.id:"")),O=({instance:m})=>{m.setContents(m.clipboard.convert({html:f.value}))},V=async m=>{const I=m||f.value,g=t.rules||[];typeof t.minLength=="number"&&g.push(te.MinLength),typeof t.maxLength=="number"&&g.push(te.MaxLength);const v={value:I,minLength:t.minLength,maxLength:t.maxLength},u=g.filter(o=>!o.test(v)).map(o=>{var i;return((i=o.compareError)==null?void 0:i.call(o,v))||o.error(v)})||[];U("update:error",u[0]||"")},U=p;return n({test:V}),(m,I)=>(d(),$("div",un,[m.label?(d(),$("label",P({key:0,class:"block text-sm font-bold mb-2",for:r.value},m.labelProps),ie(s.value),17,pn)):T("",!0),b(l(ol),P({id:r.value,placeholder:m.placeholder,modelValue:f.value,"onUpdate:modelValue":I[0]||(I[0]=g=>f.value=g),onLoad:O},m.editorProps),null,16,["id","placeholder","modelValue"]),m.error?(d(),z(xl,{key:1,name:m.name,error:m.error},null,8,["name","error"])):T("",!0)]))}}),cn={class:"m-4"},qn=["for"],mn={class:"table w-full"},bn={class:"table-header-group"},vn={key:0,class:"table-row"},fn={key:0,class:"table-cell"},gn={class:"table-cell"},kn={class:"table-row-group"},wn={key:0,class:"table-cell"},yn={key:1,class:"table-cell"},hn={key:2,class:"table-cell"},Vn={class:"table-footer-group"},$n={class:"table-row"},Cn={key:0,class:"table-cell"},Pn={class:"table-cell"},tl=G({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:n}){const p=e,t=n,s=Xe(Ze).greaterOrEqual("md"),r=D({get:()=>kl(p.modelValue),set:u=>{t("update:modelValue",Le(u))}}),O=D(()=>p.name+(p.id?"."+p.id:"")),V=D(()=>{var u;return s.value&&((u=r.value[0])==null?void 0:u.length)<3}),U=(u,o,i)=>{const q=[...r.value];q[u][o]=i,t("update:modelValue",Le(q))},m=()=>{const u=r.value;if(u.length){const o=u[0];o.length?r.value=[...u,o.map(()=>"")]:r.value=[...u,[""]]}else r.value=[[""]]},I=u=>{r.value.splice(u,1),r.value=r.value},g=()=>{r.value=r.value.map(u=>[...u,""])},v=u=>{r.value=r.value.map(o=>(o.splice(u,1),o))};return(u,o)=>(d(),$("div",cn,[u.label?(d(),$("label",P({key:0,class:"block text-sm font-bold mb-2",for:O.value},u.labelProps),ie(u.label),17,qn)):T("",!0),c("div",mn,[c("div",bn,[r.value.length&&r.value[0].length>1?(d(),$("div",vn,[r.value.length>1?(d(),$("div",fn)):T("",!0),(d(!0),$(ee,null,pe(r.value[0],(i,q)=>(d(),$("div",gn,[r.value.length&&r.value[0].length?(d(),z(l(be),{key:0,class:"md:text-start text-nowrap",icon:"pi pi-times",label:V.value?"Remove column":void 0,onClick:B=>v(q)},null,8,["label","onClick"])):T("",!0)]))),256))])):T("",!0)]),c("div",kn,[(d(!0),$(ee,null,pe(r.value,(i,q)=>(d(),$("div",{key:q,class:"table-row"},[r.value.length>1?(d(),$("div",wn,[b(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-times",label:V.value?"Remove row":void 0,onClick:B=>I(q)},null,8,["label","onClick"])])):T("",!0),(d(!0),$(ee,null,pe(i,(B,E)=>(d(),z(de,{class:"table-cell !m-0",key:E,name:`${u.name}.${q}.${E}`,modelValue:B,placeholder:q===0||E===0?"header":"cell","onUpdate:modelValue":L=>U(q,E,L.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),q===0?(d(),$("div",yn,[b(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:V.value?"Add column":void 0,onClick:g},null,8,["label"])])):(d(),$("div",hn))]))),128))]),c("div",Vn,[c("div",$n,[r.value.length>1?(d(),$("div",Cn)):T("",!0),c("div",Pn,[b(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:V.value?"Add row":void 0,onClick:m},null,8,["label"])])])])])]))}}),Sn={key:0,class:"mb-5 p-4 border-y"},Un={class:"flex"},xn=G({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:p}){const t=e,f=p,s=a(""),r=D({get:()=>t.modelValue.slice(),set:g=>{f("update:modelValue",g),s.value=""}}),O=D(()=>t.name+(t.id?"."+t.id:"")),V=(g,v)=>{const u=r.value.slice();u.splice(g,1,v),r.value=u},U=()=>{s.value.length&&(r.value=[...r.value,s.value])},m=g=>{const v=r.value.slice();v.splice(g,1),r.value=v};return n({test:()=>{}}),(g,v)=>(d(),$("div",null,[b(de,{id:O.value,name:g.name,label:g.label,modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=u=>s.value=u),max:200,placeholder:g.placeholder,onKeydown:v[1]||(v[1]=wl(u=>U(),["enter"]))},null,8,["id","name","label","modelValue","placeholder"]),r.value.length?(d(),$("div",Sn,[b(l(ll),{modelValue:r.value,"onUpdate:modelValue":v[2]||(v[2]=u=>r.value=u),itemKey:"index",handle:".drag-handle"},{item:R(({element:u,index:o})=>[c("div",Un,[v[3]||(v[3]=c("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),b(de,{class:"w-full",id:`${g.name}.${o}`,name:g.name,"model-value":u,max:200,"delete-button":"","onUpdate:modelValue":i=>V(o,i.toString()),"onUpdate:delete":i=>m(o)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])])):T("",!0)]))}}),En={class:"md:px-5"},Tn={class:"flex justify-center"},In={key:0},On={class:"mt-3 flex justify-evenly font-bold"},Bn=G({__name:"BlogPostContentSectionDialogSection",props:{section:{}},emits:["error","delete"],setup(e,{expose:n,emit:p}){const t=p,s=Xe(Ze).greaterOrEqual("sm"),r=a(!1),O=a(),V=a(),U=a(),m=a(),I=a(),g=a(),v=a(),u=a(),o=a(),i=a(),q=a(),B=a(),E=a(),L=a(),A=a(),K=a(),Q=a(!1),X=a(!1),J=a(!1),k=a(!1),y=D(()=>[q.value,B.value,E.value,L.value,A.value,K.value,Q.value,X.value,J.value,k.value].some(w=>!!w)),M=D(()=>s.value?"View more options":"View more"),S=D(()=>s.value?"Hide more options":"View less");return n({test:async()=>{var w,h,C,N,F,H,le,ne,Y,_;await Promise.all([(w=O.value)==null?void 0:w.test(),(h=V.value)==null?void 0:h.test(),(C=U.value)==null?void 0:C.test(),(N=g.value)==null?void 0:N.test(),(F=m.value)==null?void 0:F.test(),(H=I.value)==null?void 0:H.test(),(le=v.value)==null?void 0:le.test(),(ne=u.value)==null?void 0:ne.test(),(Y=o.value)==null?void 0:Y.test(),(_=i.value)==null?void 0:_.test()]),t("error",y.value)}}),(w,h)=>(d(),$("div",En,[b(de,{class:"mt-0 pt-5",ref_key:"title",ref:O,id:w.section.id,name:"title",label:"Section Title",modelValue:w.section.title,"onUpdate:modelValue":h[0]||(h[0]=C=>w.section.title=C),error:q.value,"onUpdate:error":h[1]||(h[1]=C=>q.value=C),max:50},null,8,["id","modelValue","error"]),b(de,{ref_key:"subTitle",ref:V,id:w.section.id,name:"subTitle",label:"Section Subtitle",modelValue:w.section.subTitle,"onUpdate:modelValue":h[2]||(h[2]=C=>w.section.subTitle=C),error:B.value,"onUpdate:error":h[3]||(h[3]=C=>B.value=C),max:200},null,8,["id","modelValue","error"]),b(Ee,{ref_key:"description",ref:U,id:w.section.id,name:"description",label:"Section Description",modelValue:w.section.description,"onUpdate:modelValue":h[4]||(h[4]=C=>w.section.description=C),error:E.value,"onUpdate:error":h[5]||(h[5]=C=>E.value=C),"max-length":1e4},null,8,["id","modelValue","error"]),c("div",Tn,[b(W,{class:"w-full sm:w-2/3 xl:w-2/3 text-nowrap",type:"primary",outlined:"",icon:r.value?"pi pi-angle-up":"pi pi-angle-down",label:r.value?S.value:M.value,onClick:h[6]||(h[6]=C=>r.value=!r.value)},null,8,["icon","label"])]),r.value?(d(),$("div",In,[b(ve,{ref_key:"openByDefault",ref:i,name:"openByDefault",label:"Opened",modelValue:w.section.openByDefault,"onUpdate:modelValue":h[7]||(h[7]=C=>w.section.openByDefault=C)},null,8,["modelValue"]),b(Z,{ref_key:"alignment",ref:m,id:w.section.id,name:"alignment",label:"Alignment",modelValue:w.section.alignment,"onUpdate:modelValue":h[8]||(h[8]=C=>w.section.alignment=C),error:A.value,"onUpdate:error":h[9]||(h[9]=C=>A.value=C),options:l(fe),rules:[l(te).Required]},null,8,["id","modelValue","error","options","rules"]),b(Z,{ref_key:"tableAlignment",ref:I,id:w.section.id,name:"tableAlignment",label:"Table Alignment",modelValue:w.section.tableAlignment,"onUpdate:modelValue":h[10]||(h[10]=C=>w.section.tableAlignment=C),error:K.value,"onUpdate:error":h[11]||(h[11]=C=>K.value=C),options:l(fe),rules:[l(te).Required]},null,8,["id","modelValue","error","options","rules"]),b(el,{ref_key:"coverImageUrl",ref:g,id:w.section.id,name:"coverImageUrl",label:"Cover image",modelValue:w.section.coverImageUrl,"onUpdate:modelValue":h[12]||(h[12]=C=>w.section.coverImageUrl=C),error:L.value,"onUpdate:error":h[13]||(h[13]=C=>L.value=C)},null,8,["id","modelValue","error"]),b(ge,{ref_key:"countdown",ref:v,id:w.section.id,name:"countdown",label:"Countdown",modelValue:w.section.countdown,"onUpdate:modelValue":h[14]||(h[14]=C=>w.section.countdown=C),error:Q.value,"onUpdate:error":h[15]||(h[15]=C=>Q.value=C)},null,8,["id","modelValue","error"]),b(ge,{ref_key:"timer",ref:u,id:w.section.id,name:"timer",label:"Timer",modelValue:w.section.timer,"onUpdate:modelValue":h[16]||(h[16]=C=>w.section.timer=C),error:X.value,"onUpdate:error":h[17]||(h[17]=C=>X.value=C)},null,8,["id","modelValue","error"]),b(xn,{ref_key:"bullets",ref:o,id:w.section.id,name:"bullets",label:"Section Bullets",placeholder:"New bullet...",modelValue:w.section.bullets,"onUpdate:modelValue":h[18]||(h[18]=C=>w.section.bullets=C)},null,8,["id","modelValue"]),b(tl,{id:w.section.id,name:"table",label:"Table",modelValue:w.section.table,"onUpdate:modelValue":h[19]||(h[19]=C=>w.section.table=C)},null,8,["id","modelValue"])])):T("",!0),c("div",On,[b(W,{class:"w-full sm:w-2/3 md:w-1/2 xl:w-2/3",type:"danger",outlined:"",label:"Delete",onClick:h[20]||(h[20]=C=>w.$emit("delete"))})])]))}}),Dn={class:"flex gap-5"},Ln={class:"mt-3 flex justify-center"},zn=G({__name:"BlogPostContentDialogSection",emits:["update:selected","error"],setup(e,{expose:n,emit:p}){const t=p,f=me(),{blogPostOriginal:s,blogPostMutation:r,isOpen:O}=j(f),V=a(),U=a(),m=a(),I=a(),g=a(),v=a(),u=a([]),o=a(),i=a(),q=a(),B=a(),E=a(),L=a(!1),A=a(!1),K=a({}),Q=D(()=>[i.value,q.value,B.value,E.value,L.value,A.value,Object.values(K.value).some(M=>M)].some(M=>!!M)),X=()=>{r.value.sections.push({id:yl(),title:"",subTitle:"",description:"",alignment:"left",tableAlignment:"left",coverImageUrl:"",countdown:null,timer:null,table:"",bullets:[],openByDefault:!1})},J=M=>{const S=r.value.sections.slice(),x=S.findIndex(w=>w.id===M);S.splice(x,1),f.blogPostMutation.sections=S},k=(M,S)=>{K.value[S]=M};return n({test:async()=>{for(const M of u.value)await M.test();await Promise.all([V.value.test(),U.value.test(),m.value.test(),g.value.test(),v.value.test()]),t("error",Q.value),K.value={}}}),(M,S)=>(d(),$(ee,null,[b(de,{ref_key:"title",ref:V,name:"title",label:"Title",placeholder:"Amazing Post",modelValue:l(r).title,"onUpdate:modelValue":S[0]||(S[0]=x=>l(r).title=x),error:i.value,"onUpdate:error":S[1]||(S[1]=x=>i.value=x),rules:[l(te).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),b(Ee,{ref_key:"description",ref:U,name:"description",label:"Description",placeholder:"Something about my post...",modelValue:l(r).description,"onUpdate:modelValue":S[2]||(S[2]=x=>l(r).description=x),error:q.value,"onUpdate:error":S[3]||(S[3]=x=>q.value=x),"max-length":1e4},null,8,["modelValue","error"]),b(el,{ref_key:"coverImageUrl",ref:I,id:"coverImageUrl",name:"coverImageUrl",label:"Cover image",modelValue:l(r).coverImageUrl,"onUpdate:modelValue":S[4]||(S[4]=x=>l(r).coverImageUrl=x),error:E.value,"onUpdate:error":S[5]||(S[5]=x=>E.value=x),"blog-post":l(s)??void 0},null,8,["modelValue","error","blog-post"]),l(O)?(d(),z(l(xe),{key:0,onTabOpen:l(Ue)},{default:R(()=>[b(l(se),{header:"Other content"},{default:R(()=>[b(Ee,{ref_key:"descriptionFooter",ref:m,name:"descriptionFooter",label:"Footer",placeholder:"Some beautiful ending...",modelValue:l(r).descriptionFooter,"onUpdate:modelValue":S[6]||(S[6]=x=>l(r).descriptionFooter=x),error:B.value,"onUpdate:error":S[7]||(S[7]=x=>B.value=x),"max-length":1e4},null,8,["modelValue","error"]),b(ge,{ref_key:"countdown",ref:g,name:"countdown",label:"Countdown",modelValue:l(r).countdown,"onUpdate:modelValue":S[8]||(S[8]=x=>l(r).countdown=x),error:L.value,"onUpdate:error":S[9]||(S[9]=x=>L.value=x)},null,8,["modelValue","error"]),b(ge,{ref_key:"timer",ref:v,name:"timer",label:"Timer",modelValue:l(r).timer,"onUpdate:modelValue":S[10]||(S[10]=x=>l(r).timer=x),error:A.value,"onUpdate:error":S[11]||(S[11]=x=>A.value=x)},null,8,["modelValue","error"]),b(tl,{name:"table",label:"Table",modelValue:l(r).table,"onUpdate:modelValue":S[12]||(S[12]=x=>l(r).table=x)},null,8,["modelValue"])]),_:1}),b(l(se),{header:"Sections"},{default:R(()=>[b(l(ll),{ref_key:"draggable",ref:o,modelValue:l(r).sections,"onUpdate:modelValue":S[13]||(S[13]=x=>l(r).sections=x),itemKey:x=>x.id,handle:".drag-handle"},{item:R(({element:x})=>[l(O)?(d(),z(l(xe),{key:0,onTabOpen:l(Ue)},{default:R(()=>[b(l(se),{pt:{header:{class:"drag-handle"},toggleableContent:{class:"background-gray-dark rounded-t-primary rounded-b-primary"}}},{header:R(()=>[c("div",Dn,[S[14]||(S[14]=c("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),c("p",null,ie(x.title||"New section"),1)])]),default:R(()=>[b(Bn,{ref:w=>{u.value[x.id]=w},section:x,"is-open":l(O),onDelete:w=>J(x.id),onError:w=>k(w,x.id)},null,8,["section","is-open","onDelete","onError"])]),_:2},1024)]),_:2},1032,["onTabOpen"])):T("",!0)]),_:1},8,["modelValue","itemKey"]),c("div",Ln,[b(W,{class:"w-1/2",type:"green",label:"Add Section",onClick:X})])]),_:1})]),_:1},8,["onTabOpen"])):T("",!0)],64))}}),Mn=G({__name:"BlogPostSettingsDialogSection",emits:["error"],setup(e,{expose:n,emit:p}){const t=p,f=qe(),s=Ie(),r=me(),{publicUser:O,publicUsers:V}=j(s),{firebaseUser:U}=j(f),{blogPostMutation:m}=j(r),{allowedPublicUsers:I}=s,g=a(),v=a(),u=a(),o=a(),i=D({get(){return!!m.value.datePinned},set(k){m.value.datePinned=k?new Date:null}}),q=a(),B=a(),E=a(),L=a(),A=D(()=>[q.value,B.value,E.value,L.value].some(k=>!!k)),K=D(()=>V.value.map(({id:k,displayName:y})=>({value:k,label:y}))),Q=a([]),X=k=>{m.value.allowedUserIds=k},J=async()=>{m.value.allowedUserIds.length&&!Q.value.length&&(q.value="Invalid user ID's"),await Promise.all([v.value.test(),u.value.test(),o.value.test()]),t("error",A.value)};return we(()=>m.value.allowedUserIds,async k=>{Q.value=await I(k)},{immediate:!0}),n({test:J}),(k,y)=>(d(),$(ee,null,[b(Z,{ref_key:"allowedUsers",ref:g,name:"allowedUserIds",label:"Allowed users",placeholder:"This post is public","model-value":l(m).allowedUserIds,error:q.value,"onUpdate:error":y[0]||(y[0]=M=>q.value=M),"onUpdate:arrayValue":X,options:[{value:l(U).uid,label:l(O).displayName},...K.value.filter(({value:M})=>{var S;return M!==((S=l(U))==null?void 0:S.uid)})],multiple:""},null,8,["model-value","error","options"]),b(ve,{ref_key:"pinned",ref:o,name:"pinned",label:"Pinned",modelValue:i.value,"onUpdate:modelValue":y[1]||(y[1]=M=>i.value=M)},null,8,["modelValue"]),b(ve,{ref_key:"locked",ref:v,name:"locked",label:"Locked for commenting",modelValue:l(m).locked,"onUpdate:modelValue":y[2]||(y[2]=M=>l(m).locked=M)},null,8,["modelValue"]),b(ve,{ref_key:"archived",ref:u,name:"archived",label:"Archived",modelValue:l(m).archived,"onUpdate:modelValue":y[3]||(y[3]=M=>l(m).archived=M)},null,8,["modelValue"])],64))}}),An=G({__name:"BlogPostStylingDialogSection",emits:["error"],setup(e,{expose:n,emit:p}){const t=p,f=me(),{blogPostMutation:s}=j(f),r=a(),O=a(),V=a(),U=a(),m=a(),I=a(),g=a(),v=a(),u=a(),o=a(),i=a(),q=a(),B=a(),E=a(),L=a(),A=a(),K=D(()=>[u.value,o.value,i.value,q.value,B.value,E.value,L.value,A.value].some(J=>!!J)),Q=D(()=>hl(ze.find(J=>J.value===s.value.colorPrimary)));return n({test:async()=>{await Promise.all([r.value.test(),O.value.test(),V.value.test(),U.value.test(),m.value.test(),I.value.test(),g.value.test(),v.value.test()]),t("error",K.value)}}),(J,k)=>(d(),$(ee,null,[b(Z,{ref_key:"alignment",ref:r,name:"alignment",label:"Alignment",modelValue:l(s).alignment,"onUpdate:modelValue":k[0]||(k[0]=y=>l(s).alignment=y),error:u.value,"onUpdate:error":k[1]||(k[1]=y=>u.value=y),options:l(fe),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),b(Z,{ref_key:"tableAlignment",ref:O,name:"tableAlignment",label:"Table Alignment",modelValue:l(s).tableAlignment,"onUpdate:modelValue":k[2]||(k[2]=y=>l(s).tableAlignment=y),error:o.value,"onUpdate:error":k[3]||(k[3]=y=>o.value=y),options:l(fe),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),b(Z,{ref_key:"colorPrimary",ref:V,name:"colorPrimary",label:"Primary Style",modelValue:l(s).colorPrimary,"onUpdate:modelValue":k[4]||(k[4]=y=>l(s).colorPrimary=y),error:i.value,"onUpdate:error":k[5]||(k[5]=y=>i.value=y),options:l(ze),rules:[l(te).Required]},null,8,["modelValue","error","options","rules"]),b(Z,{ref_key:"opacityPrimary",ref:I,name:"opacityPrimary",label:"Primary Opacity",modelValue:l(s).opacityPrimary,"onUpdate:modelValue":k[6]||(k[6]=y=>l(s).opacityPrimary=y),error:E.value,"onUpdate:error":k[7]||(k[7]=y=>E.value=y),options:l(Ve)},null,8,["modelValue","error","options"]),b(Z,{ref_key:"colorSecondary",ref:U,name:"colorSecondary",label:"Secondary Style",modelValue:l(s).colorSecondary,"onUpdate:modelValue":k[8]||(k[8]=y=>l(s).colorSecondary=y),error:q.value,"onUpdate:error":k[9]||(k[9]=y=>q.value=y),options:Q.value},null,8,["modelValue","error","options"]),b(Z,{ref_key:"opacitySecondary",ref:g,name:"opacitySecondary",label:"Secondary Opacity",modelValue:l(s).opacitySecondary,"onUpdate:modelValue":k[10]||(k[10]=y=>l(s).opacitySecondary=y),error:L.value,"onUpdate:error":k[11]||(k[11]=y=>L.value=y),options:l(Ve)},null,8,["modelValue","error","options"]),b(Z,{ref_key:"colorTertiary",ref:m,name:"colorTertiary",label:"Tertiary Style",modelValue:l(s).colorTertiary,"onUpdate:modelValue":k[12]||(k[12]=y=>l(s).colorTertiary=y),error:B.value,"onUpdate:error":k[13]||(k[13]=y=>B.value=y),options:l(Vl)},null,8,["modelValue","error","options"]),b(Z,{ref_key:"opacityTertiary",ref:v,name:"opacityTertiary",label:"Tertiary Opacity",modelValue:l(s).opacityTertiary,"onUpdate:modelValue":k[14]||(k[14]=y=>l(s).opacityTertiary=y),error:A.value,"onUpdate:error":k[15]||(k[15]=y=>A.value=y),options:l(Ve)},null,8,["modelValue","error","options"])],64))}}),Rn=G({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:n}){const p=n,t=qe(),f=ke(),s=me(),{firebaseUser:r}=j(t),{isBlogPostsMutationLoading:O}=j(f),{createBlogPost:V,updateBlogPost:U,deleteFilesOfBlogPost:m,toggleBlogPostVisibility:I}=f,{getBlogPostMutationContent:g,getBlogPostMutationStyling:v,getBlogPostMutationSettings:u}=s,{isOpen:o,blogPostOriginal:i,blogPostMutationId:q,blogPostMutation:B,hasBlogPostMutationContentChanges:E,hasBlogPostMutationStylingChanges:L,hasBlogPostMutationSettingsChanges:A}=j(s),K=a(),Q=a(),X=a(),J=a(),k=a(!1),y=a(!1),M=a(!1),S=D(()=>{var N,F,H,le,ne,Y;return!!((F=(N=i.value)==null?void 0:N.allowedUserIds)!=null&&F.length)&&!((H=u().allowedUserIds)!=null&&H.length)||!((ne=(le=i.value)==null?void 0:le.allowedUserIds)!=null&&ne.length)&&!!((Y=u().allowedUserIds)!=null&&Y.length)}),x=D(()=>{const N=[];return E.value&&N.push("Content"),L.value&&N.push("Styling"),A.value&&N.push("Settings"),N.length?"Update "+Me(N):void 0}),w=D(()=>$l(i.value)),h=async()=>{var N,F,H,le,ne;if(await Promise.all([Q.value.test(),X.value.test(),J.value.test()]),!(k.value||y.value||M.value))if(!i.value)await V(q.value,B.value,(N=r.value)==null?void 0:N.uid)&&(s.close(),p("scroll-to-updated",q.value));else if(S.value){const Y=q.value;s.isOpen=!1,await I(Y,oe.convert(B.value),i.value.reactions,B.value.allowedUserIds.length?"private":"public",(F=r.value)==null?void 0:F.uid)&&(s.close(),Se.success("Successfully updated Post Visibility"),p("scroll-to-updated",Y))}else{const Y=q.value;let _=[];E.value&&_.push(await U(Y,g(),w.value,(H=r.value)==null?void 0:H.uid)),L.value&&_.push(await U(Y,v(),w.value,(le=r.value)==null?void 0:le.uid)),A.value&&(_.push(await U(Y,u(),w.value,(ne=r.value)==null?void 0:ne.uid)),p("scroll-to-updated",Y)),_=_.filter(rl=>typeof rl=="string"),_.length&&(Se.success(`Successfully updated Post ${Me(_)}`),s.close())}},C=async()=>{m(B.value,i.value??void 0),s.close()};return we(B,()=>{s.isMutationEqual()},{deep:!0}),(N,F)=>(d(),z(Ge,{isOpen:l(o),title:l(i)?"Update Post":"Create Post",description:l(i)?"Update this post":"Create a new post","confirm-text":l(i)?x.value:"Create","confirm-loading":l(O),onConfirm:h,onCancel:C},{default:R(()=>[c("form",{ref_key:"dialog",ref:K,class:"pt-6 mb-4 xl:px-16"},[l(o)?(d(),z(l(xe),{key:0,"active-index":0,onTabOpen:l(Ue)},{default:R(()=>[b(l(se),{header:"Content"},{default:R(()=>[b(zn,{ref_key:"content",ref:Q,onError:F[0]||(F[0]=H=>k.value=H)},null,512)]),_:1}),b(l(se),{header:"Styling"},{default:R(()=>[b(An,{ref_key:"styling",ref:X,onError:F[1]||(F[1]=H=>y.value=H)},null,512)]),_:1}),b(l(se),{header:"Settings"},{default:R(()=>[b(Mn,{ref_key:"settings",ref:J,onError:F[2]||(F[2]=H=>M.value=H)},null,512)]),_:1})]),_:1},8,["onTabOpen"])):T("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading"]))}}),jn={class:"grid mt-10 md:mt-15"},Nn={class:"grid justify-center"},Fn={class:"text-lg md:text-xl text-white"},Hn=["innerHTML"],Gn={class:"grid my-5 xl:px-20"},Kn=G({__name:"Blog",setup(e){const n=Ke(),p=Te(),t=Ie(),f=ke(),s=me(),{menuItems:r,content:O}=j(p),{publicUser:V}=j(t),{deleteBlogPost:U}=f,m=a(null),I=a(),g=a(!1),v=a(n.currentRoute.value.params.postId),u=D(()=>{var E;return V.value?[...O.value.blogDescriptionUser.map(L=>L.replace("%USER%",V.value.displayName||"Unknown user")),...((E=r.value.find(L=>L.id==="nfNQM4SMESU2VOkJtcgY"))==null?void 0:E.description)||[]]:O.value.blogDescriptionGuest}),o=()=>{s.openWith(null)},i=E=>{s.openWith(E)},q=E=>{m.value=E,g.value=!0},B=async E=>{await U(E)&&(g.value=!1,m.value=null)};return we(n.currentRoute,E=>{v.value=E.params.postId}),(E,L)=>(d(),z(il,null,{content:R(()=>[c("div",jn,[c("div",Nn,[(d(!0),$(ee,null,pe(u.value,A=>(d(),$("h1",Fn,[c("span",{innerHTML:A},null,8,Hn)]))),256))]),c("div",Gn,[v.value?(d(),z(Il,{key:0,onEditClicked:i,onDeleteClicked:q})):(d(),z(Zl,{key:1,onCreateClicked:o,onEditClicked:i,onDeleteClicked:q})),b(Rn,{onScrollToUpdated:L[0]||(L[0]=A=>I.value=A)}),m.value?(d(),z(Ge,{key:2,title:"Delete Post",isOpen:g.value,description:[` Are you sure you want to delete this post called ' ${m.value.title}'?`,"This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:L[1]||(L[1]=A=>B(m.value.id)),onCancel:L[2]||(L[2]=A=>g.value=!1)},null,8,["isOpen","description"])):T("",!0)])])]),_:1}))}}),to=G({__name:"Blog",setup(e){return(n,p)=>(d(),z(Kn))}});export{to as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./c-quill-D2YPtopm.js","./c-vuedraggable.umd-DZ3azzJt.js","../bundle.js","../bundle8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
