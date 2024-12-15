import{_ as we,a as Ge}from"./c-SwitchField.vue_vue_type_script_setup_true_lang-JQE6dSwt.js";import{_ as il}from"./c-Page.vue_vue_type_script_setup_true_lang-CNWvNeEe.js";import{d as al,r as s,a as sl,c as O,I as _,v as dl,b as he,e as F,u as ul,f as Ke,g as Te,h as pe,i as fe,s as A,o as Qe,j as pl,F as cl,R as ne,k as l,l as p,m as C,n as g,p as m,q as D,t as x,w as W,B as Je,x as Ye,y as P,z as te,A as Ie,C as Oe,D as M,E as se,G as Be,H as oe,J as De,K as ql,L as Se,M as ke,N as ye,O as de,P as ml,_ as bl,Q as vl,S as gl,T as fl,U as kl,V as Le,W as wl,X as ve,Y as Ue,Z as hl,$ as yl,a0 as ze,a1 as Ve,a2 as Vl,a3 as Me,a4 as $l}from"../bundle.js";import{_ as Q,a as We,u as Xe,b as Ze,s as be}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{_ as _e,a as Ae,s as $e,b as Cl,c as Re,d as Pl,e as je,u as Sl}from"./c-BlogPost.vue_vue_type_script_setup_true_lang-C7QKl9wz.js";import{s as re,a as xe}from"./c-Image.vue_vue_type_script_setup_true_lang-DxYsW8Nr.js";import{_ as el}from"./c-FileUpload.vue_vue_type_script_setup_true_lang-he7r1aqn.js";import{V as Ul,R as ee,_ as xl}from"./c-validation-DokkLKHB.js";import{_ as ie}from"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import{D as ll}from"./c-vuedraggable.umd-DZ3azzJt.js";import{_ as J}from"./c-SelectField.vue_vue_type_script_setup_true_lang-Bu9S1e-e.js";const Ce=e=>(e==null?void 0:e.id)??dl(),Pe=e=>{var n;return{date:(e==null?void 0:e.date)||new Date,dateUpdated:(e==null?void 0:e.dateUpdated)||new Date,title:(e==null?void 0:e.title)??"",description:(e==null?void 0:e.description)??"",descriptionFooter:(e==null?void 0:e.descriptionFooter)??"",coverImageUrl:(e==null?void 0:e.coverImageUrl)??"",timer:(e==null?void 0:e.timer)??null,countdown:(e==null?void 0:e.countdown)??null,table:(e==null?void 0:e.table)??"",sections:((n=e==null?void 0:e.sections)==null?void 0:n.slice().map(q=>({...q,bullets:q.bullets.slice()})))??[],alignment:(e==null?void 0:e.alignment)??"center",tableAlignment:(e==null?void 0:e.tableAlignment)??"left",colorPrimary:(e==null?void 0:e.colorPrimary)??"",colorSecondary:(e==null?void 0:e.colorSecondary)??"",colorTertiary:(e==null?void 0:e.colorTertiary)??"",opacityPrimary:(e==null?void 0:e.opacityPrimary)??"",opacitySecondary:(e==null?void 0:e.opacitySecondary)??"",opacityTertiary:(e==null?void 0:e.opacityTertiary)??"",locked:(e==null?void 0:e.locked)??!1,allowedUserIds:(e==null?void 0:e.allowedUserIds)??[],archived:(e==null?void 0:e.archived)??!1,datePinned:(e==null?void 0:e.datePinned)??null}},ce=al("blogPostDialogStore",()=>{const e=s(!1),n=s(null),q=s(Ce(null)),t=s(Pe(null)),k=sl({hasContentChanges:!1,hasStylingChanges:!1,hasSettingsChanges:!1}),u=O(()=>n.value?_.convert(n.value):null),r=O(()=>k.hasContentChanges),T=O(()=>k.hasStylingChanges),$=O(()=>k.hasSettingsChanges),S=()=>{n.value=null,q.value=Ce(null),t.value=Pe(null),k.hasContentChanges=!1,k.hasStylingChanges=!1,k.hasSettingsChanges=!1},v=i=>{n.value=i,q.value=Ce(i),t.value=Pe(i),e.value=!0},E=()=>{e.value=!1,S()},w=()=>_.Content.convert(t.value),f=()=>_.Styling.convert(t.value),c=()=>_.Settings.convert(t.value);return{isOpen:e,blogPostOriginal:n,blogPostMutationId:q,blogPostMutation:t,blogPostMutationChanges:k,blogPostOriginalMutation:u,hasBlogPostMutationContentChanges:r,hasBlogPostMutationStylingChanges:T,hasBlogPostMutationSettingsChanges:$,$reset:S,openWith:v,close:E,getBlogPostMutationContent:w,getBlogPostMutationStyling:f,getBlogPostMutationSettings:c,isMutationEqual:async()=>{u.value&&(k.hasContentChanges=!he(_.Content.convert(u.value),w()),k.hasStylingChanges=!he(_.Styling.convert(u.value),f()),k.hasSettingsChanges=!he(_.Settings.convert(u.value),c()))}}}),El={key:0,class:"flex justify-center mt-5"},Tl={class:"grid grid-cols-6 mb-5 gap-5"},Il=F({__name:"BlogDetails",emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=ul(),q=Ke(),t=Te(),k=pe(),u=fe(),{routeLoading:r}=A(t),{isLoggedIn:T}=A(k),{blogPosts:$,blogReactions:S,isBlogPostsFetchLoading:v}=A(u),{fetchBlogPost:E}=u,w=O(()=>n.params.postId);return Qe(async()=>{var f;if(S.value.unread=[],w.value)if(((f=$.value.data.single)==null?void 0:f.id)!==w.value){const c=await E(w.value);if(pl(c)&&c===cl.PERMISSION_DENIED&&!T.value){q.push({name:ne.LOGIN,params:{redirect:JSON.stringify({name:ne.BLOG_DETAILS,params:{postId:w.value}})}});return}}else $.value.data.single}),(f,c)=>l(v)?(p(),C("div",El,[g(Q,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:"",label:"Loading..."})])):(p(),C(W,{key:1},[m("div",Tl,[g(Q,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:l(ne).BLOG,loading:l(r)===l(ne).BLOG,label:"Back to other posts",icon:"pi pi-arrow-up-left"},null,8,["route","loading"])]),l($).data.single?(p(),D(_e,{key:0,post:l($).data.single,onEditClicked:c[0]||(c[0]=o=>f.$emit("editClicked",l($).data.single)),onDeleteClicked:c[1]||(c[1]=o=>f.$emit("deleteClicked",l($).data.single))},null,8,["post"])):x("",!0)],64))}});var Ol={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Bl=Je.extend({name:"card",classes:Ol}),Dl={name:"BaseCard",extends:Ye,style:Bl},nl={name:"Card",extends:Dl,inheritAttrs:!1};function Ll(e,n,q,t,k,u){return p(),C("div",P({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(p(),C("div",P({key:0,class:e.cx("header")},e.ptm("header")),[te(e.$slots,"header")],16)):x("",!0),m("div",P({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(p(),C("div",P({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(p(),C("div",P({key:0,class:e.cx("title")},e.ptm("title")),[te(e.$slots,"title")],16)):x("",!0),e.$slots.subtitle?(p(),C("div",P({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[te(e.$slots,"subtitle")],16)):x("",!0)],16)):x("",!0),m("div",P({class:e.cx("content")},e.ptm("content")),[te(e.$slots,"content")],16),e.$slots.footer?(p(),C("div",P({key:1,class:e.cx("footer")},e.ptm("footer")),[te(e.$slots,"footer")],16)):x("",!0)],16)],16)}nl.render=Ll;const zl={class:"flex gap-3"},Ml={class:"min-h-[50vh] flex flex-col"},Al={class:"flex justify-between h-fit mt-2 gap-2"},Rl={class:"flex flex-wrap gap-3"},jl={class:"relative mt-5 min-h-[20vh] max-h-screen flex flex-col justify-end"},Nl={class:"relative min-h-[20vh] max-h-full flex-grow"},Fl={class:"w-full"},Hl={key:3,class:"w-full"},Gl={class:"flex justify-center mt-5"},Kl={class:"flex justify-center mt-3"},Ql=F({__name:"BlogPostOverview",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const n=e,q=Te(),t=pe(),k=Ie(),{routeLoading:u,routeLoadingId:r}=A(q),{publicUsers:T}=A(k),{isOwner:$}=A(t),S=s(n.post.archived),v=O(()=>{var o;return(o=n.post.allowedUserIds)!=null&&o.length?T.value.filter(i=>{var b;return(b=n.post.allowedUserIds)==null?void 0:b.includes(i.id)}):[]}),E=O(()=>{const o=Oe(new Date(n.post.date)),i=n.post.dateUpdated?Oe(new Date(n.post.dateUpdated)):"";return o+` - updated ${i}`}),w=O(()=>{const o=[];return n.post.datePinned&&o.push({value:"Pinned",severity:"success",rounded:!1}),n.post.locked&&o.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),n.post.archived&&o.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),o}),f=O(()=>n.post.sections.length?n.post.sections[0]:null),c=()=>{const o=document.createElement("textarea"),{protocol:i,hostname:b,port:I}=window.location,U=`${i}//${b}`+(b==="localhost"?`:${I}`:"");o.value=`${U}#${ql.BLOG.path}/${n.post.id}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),Se.success("Copied link!")};return(o,i)=>(p(),D(We,{id:o.post.id,class:se([{"min-h-[50vh]":!S.value},"border-4 border-transparent","!rounded-primary",o.post.colorSecondary||o.post.colorPrimary||"bg-secondary-900",o.post.opacitySecondary||"bg-opacity-50"]),title:o.post.title,subTitle:E.value,tags:w.value,loading:o.post.loading,isCollapsed:S.value,clickable:"",onClick:i[6]||(i[6]=b=>S.value=!S.value)},{right:M(()=>[m("div",zl,[S.value?l($)?(p(),D(Ae,{key:1,onEditClicked:i[0]||(i[0]=b=>o.$emit("editClicked")),onDeleteClicked:i[1]||(i[1]=b=>o.$emit("deleteClicked"))})):x("",!0):(p(),D(Q,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:c}))])]),default:M(()=>{var b;return[m("div",Ml,[m("div",Al,[m("div",Rl,[v.value.length?(p(),C(W,{key:0},[g(l($e),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:v.value[0].displayName,rounded:""},null,8,["label"]),v.value.length>1?(p(),D(l($e),{key:0,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:"You",rounded:""})):x("",!0),v.value.length>2?(p(),D(l($e),{key:1,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",label:`${v.value.length-2} others`,rounded:""},null,8,["label"])):x("",!0)],64)):x("",!0)]),l($)?(p(),C("div",{key:0,class:se(["flex justify-end ms-5",(b=o.post.allowedUserIds)!=null&&b.length?"flex-col md:flex-row":"flex-row"])},[g(Ae,{onEditClicked:i[2]||(i[2]=I=>o.$emit("editClicked")),onDeleteClicked:i[3]||(i[3]=I=>o.$emit("deleteClicked"))})],2)):x("",!0)]),m("div",jl,[i[7]||(i[7]=m("div",{class:"absolute inset-0 rounded-primary bg-gradient-to-t from-neutral-500 to-transparent"},null,-1)),m("div",Nl,[g(l(nl),{class:se(["z-10 min-h-[20vh] p-5 text-neutral-300",o.post.colorPrimary,o.post.opacityPrimary||"bg-opacity-50"])},{header:M(()=>[o.post.coverImageUrl?(p(),D(Cl,{key:0,post:o.post,"cover-image-url":o.post.coverImageUrl,thumb:""},null,8,["post","cover-image-url"])):x("",!0)]),content:M(()=>[m("div",{class:se(["flex relative",o.post.countdown||o.post.alignment==="center"?"flex justify-between":""])},[m("div",Fl,[o.post.countdown?(p(),D(Re,{key:0,time:new Date(o.post.countdown).getTime(),direction:"down",alignment:o.post.alignment},null,8,["time","alignment"])):x("",!0),o.post.timer?(p(),D(Re,{key:1,time:new Date(o.post.timer).getTime(),direction:"up",alignment:o.post.alignment},null,8,["time","alignment"])):x("",!0),o.post.description?(p(),D(Pl,{key:2,description:o.post.description.substring(0,150)+(o.post.description.length>=150?"...":"")},null,8,["description"])):f.value?(p(),C("div",Hl,[f.value.title?(p(),D(je,{key:0,alignment:f.value.alignment},{default:M(()=>[Be(oe(f.value.subTitle?f.value.title:`${f.value.title}...`),1)]),_:1},8,["alignment"])):x("",!0),f.value.subTitle?(p(),D(je,{key:1,alignment:f.value.alignment,"is-sub-title":""},{default:M(()=>[Be(oe(f.value.subTitle)+"... ",1)]),_:1},8,["alignment"])):x("",!0)])):x("",!0)])],2)]),_:1},8,["class"])])]),m("div",Gl,[g(Q,{class:"w-full md:w-1/2",type:"neutral",label:"Read more",loading:l(u)===l(ne).BLOG_DETAILS&&l(r)===o.post.id,onClick:i[4]||(i[4]=I=>l(De).push({name:l(ne).BLOG_DETAILS,params:{postId:o.post.id}}))},null,8,["loading"])]),m("div",Kl,[m("p",{class:se(o.post.reactions.length?"text-yellow-400 hover:text-yellow-500 cursor-pointer":"text-neutral-200"),onClick:i[5]||(i[5]=I=>l(De).push({name:l(ne).BLOG_DETAILS,params:{postId:o.post.id}}))},oe(o.post.reactions.length)+" replies ",3)])])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Jl={key:0,class:"grid grid-cols-6 mb-5 gap-5"},Yl={key:1,class:"grid grid-cols-6 lg:hidden mb-5"},Wl={class:"grid gap-4 md:gap-10 xl:gap-20"},Xl={key:2,class:"flex justify-center mt-5"},Zl=F({__name:"BlogPosts",props:{single:{type:Boolean}},emits:["createClicked","editClicked","deleteClicked"],setup(e){const n=pe(),q=fe(),{blogPosts:t,visibleBlogPosts:k,isBlogPostsFetchLoading:u}=A(q),{firebaseUser:r,isLoggedIn:T,isOwner:$}=A(n),{fetchBlogPosts:S}=q;Sl();const v=s(),E=s(),w=s(),f=async o=>{var i;t.value.visibility!==o&&(t.value.data[o].length||await S((i=r.value)==null?void 0:i.uid,{visibility:o}),t.value.visibility=o,t.value.isLastPage=!1,ye(v.value))},c=async()=>{var i;const o=k.value.length;await S((i=r.value)==null?void 0:i.uid),k.value[o]&&ye(E.value[o])};return Qe(()=>{t.value.loadedOnce||(T.value?t.value.visibility="private":t.value.visibility!=="public"&&(t.value.visibility="public"),t.value.loadedOnce=!0)}),ke(()=>{var o;return(o=E.value)==null?void 0:o.length},()=>{var o;if((o=E.value)!=null&&o.length&&w.value){const i=k.value.find(b=>b.id===w.value);if(i){const b=k.value.indexOf(i);ye(E.value[b]),w.value=void 0}}}),(o,i)=>(p(),C("div",{ref_key:"container",ref:v},[l(T)?(p(),C("div",Jl,[g(Q,{class:"hidden lg:block col-span-2",type:"secondary",outlined:l(t).visibility!=="public",loading:l(t).isLoading.public.fetch,label:"Public Posts",onClick:i[0]||(i[0]=b=>f("public"))},null,8,["outlined","loading"]),l($)?(p(),D(Q,{key:0,class:"col-span-full md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2",type:"tertiary",label:"New Post",onClick:i[1]||(i[1]=b=>o.$emit("createClicked"))})):x("",!0),g(Q,{class:"hidden lg:block col-start-5 col-span-2",type:"secondary",outlined:l(t).visibility!=="private",loading:l(t).isLoading.private.fetch,label:"Private Posts",onClick:i[2]||(i[2]=b=>f("private"))},null,8,["outlined","loading"])])):x("",!0),l(T)?(p(),C("div",Yl,[g(Q,{class:"col-span-3 md:col-start-2 md:col-span-2 rounded-r-none",type:"secondary",outlined:l(t).visibility!=="public",loading:l(t).isLoading.public.fetch,label:"Public Posts",onClick:i[3]||(i[3]=b=>f("public"))},null,8,["outlined","loading"]),g(Q,{class:"col-span-3 md:col-start-4 md:col-span-2 rounded-l-none",type:"secondary",outlined:l(t).visibility!=="private",loading:l(t).isLoading.private.fetch,label:"Private Posts",onClick:i[4]||(i[4]=b=>f("private"))},null,8,["outlined","loading"])])):x("",!0),m("div",Wl,[l(k).length?(p(!0),C(W,{key:0},de(l(k),(b,I)=>(p(),C("div",{key:b.id,ref_for:!0,ref_key:"posts",ref:E},[I===0?(p(),D(_e,{key:0,post:b,onEditClicked:U=>o.$emit("editClicked",b),onDeleteClicked:U=>o.$emit("deleteClicked",b)},null,8,["post","onEditClicked","onDeleteClicked"])):(p(),D(Ql,{key:1,post:b,onEditClicked:U=>o.$emit("editClicked",b),onDeleteClicked:U=>o.$emit("deleteClicked",b)},null,8,["post","onEditClicked","onDeleteClicked"]))]))),128)):l(u)?x("",!0):(p(),D(We,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),l(t).isLastPage?x("",!0):(p(),C("div",Xl,[g(Q,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:l(k).length>0&&l(u),label:"Load more posts",onClick:c},null,8,["loading"])]))],512))}}),_l={class:"m-4"},en=["for"],ge=F({__name:"DateField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:q}){const t=e,k=O({get:()=>t.modelValue,set:$=>{T("update:modelValue",$)}}),u=O(()=>t.name+(t.id!==void 0?"."+t.id:"")),r=()=>{},T=q;return n({test:r}),($,S)=>{const v=ml("VueDatePicker");return p(),C("div",_l,[$.label?(p(),C("label",P({key:0,class:"block text-sm font-bold mb-2",for:"dp-input-"+u.value},$.labelProps),oe($.label),17,en)):x("",!0),g(v,{uid:u.value,class:"p-input px-5",modelValue:k.value,"onUpdate:modelValue":S[0]||(S[0]=E=>k.value=E),dark:""},null,8,["uid","modelValue"])])}}});var ln=`
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
`,nn={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Ne=Je.extend({name:"editor",css:ln,classes:nn}),on={name:"BaseEditor",extends:Ye,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Ne,provide:function(){return{$parentInstance:this}},beforeMount:function(){var n;Ne.loadStyle({nonce:(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce})}};function ue(e){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ue(e)}function Fe(e,n){var q=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(k){return Object.getOwnPropertyDescriptor(e,k).enumerable})),q.push.apply(q,t)}return q}function tn(e){for(var n=1;n<arguments.length;n++){var q=arguments[n]!=null?arguments[n]:{};n%2?Fe(Object(q),!0).forEach(function(t){rn(e,t,q[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(q)):Fe(Object(q)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(q,t))})}return e}function rn(e,n,q){return n=an(n),n in e?Object.defineProperty(e,n,{value:q,enumerable:!0,configurable:!0,writable:!0}):e[n]=q,e}function an(e){var n=sn(e,"string");return ue(n)=="symbol"?n:String(n)}function sn(e,n){if(ue(e)!="object"||!e)return e;var q=e[Symbol.toPrimitive];if(q!==void 0){var t=q.call(e,n||"default");if(ue(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var He=function(){try{return window.Quill}catch{return null}}(),ol={name:"Editor",extends:on,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(n,q){n!==q&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(n))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var n=this,q={modules:tn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};He?(this.quill=new He(this.$refs.editorElement,q),this.initQuill(),this.handleLoad()):bl(()=>import("./c-quill-D2YPtopm.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(t){t&&vl.isExist(n.$refs.editorElement)&&(t.default?n.quill=new t.default(n.$refs.editorElement,q):n.quill=new t(n.$refs.editorElement,q),n.initQuill())}).then(function(){n.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(n){this.quill&&(n?this.quill.setContents(this.quill.clipboard.convert(n)):this.quill.setText(""))},initQuill:function(){var n=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(q,t,k){if(k==="user"){var u=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();u==="<p><br></p>"&&(u=""),n.$emit("update:modelValue",u),n.$emit("text-change",{htmlValue:u,textValue:r,delta:q,source:k,instance:n.quill})}}),this.quill.on("selection-change",function(q,t,k){var u=n.$refs.editorElement.children[0].innerHTML,r=n.quill.getText().trim();n.$emit("selection-change",{htmlValue:u,textValue:r,range:q,oldRange:t,source:k,instance:n.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function dn(e,n,q,t,k,u){return p(),C("div",P({class:e.cx("root")},e.ptmi("root")),[m("div",P({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[te(e.$slots,"toolbar",{},function(){return[m("span",P({class:"ql-formats"},e.ptm("formats")),[m("select",P({class:"ql-header",defaultValue:"0"},e.ptm("header")),[m("option",P({value:"1"},e.ptm("option")),"Heading",16),m("option",P({value:"2"},e.ptm("option")),"Subheading",16),m("option",P({value:"0"},e.ptm("option")),"Normal",16)],16),m("select",P({class:"ql-font"},e.ptm("font")),[m("option",gl(fl(e.ptm("option"))),null,16),m("option",P({value:"serif"},e.ptm("option")),null,16),m("option",P({value:"monospace"},e.ptm("option")),null,16)],16)],16),m("span",P({class:"ql-formats"},e.ptm("formats")),[m("button",P({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),m("button",P({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),m("button",P({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),(p(),C("span",P({key:k.reRenderColorKey,class:"ql-formats"},e.ptm("formats")),[m("select",P({class:"ql-color"},e.ptm("color")),null,16),m("select",P({class:"ql-background"},e.ptm("background")),null,16)],16)),m("span",P({class:"ql-formats"},e.ptm("formats")),[m("button",P({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),m("button",P({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),m("select",P({class:"ql-align"},e.ptm("select")),[m("option",P({defaultValue:""},e.ptm("option")),null,16),m("option",P({value:"center"},e.ptm("option")),null,16),m("option",P({value:"right"},e.ptm("option")),null,16),m("option",P({value:"justify"},e.ptm("option")),null,16)],16)],16),m("span",P({class:"ql-formats"},e.ptm("formats")),[m("button",P({class:"ql-link",type:"button"},e.ptm("link")),null,16),m("button",P({class:"ql-image",type:"button"},e.ptm("image")),null,16),m("button",P({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),m("span",P({class:"ql-formats"},e.ptm("formats")),[m("button",P({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),m("div",P({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}ol.render=dn;const un={class:"m-4"},pn=["for"],Ee=F({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},editorProps:{},labelProps:{},minLength:{},maxLength:{}},emits:["update:modelValue","update:error","click"],setup(e,{expose:n,emit:q}){const t=e,k=O({get:()=>t.modelValue||"",set:v=>{S("update:modelValue",v),$(v)}}),u=O(()=>t.label?t.label+((t.rules??[]).some(v=>v.type===Ul.Required)?" *":""):void 0),r=O(()=>t.name+(t.id?"."+t.id:"")),T=({instance:v})=>{v.setContents(v.clipboard.convert({html:k.value}))},$=async v=>{const E=v||k.value,w=t.rules||[];typeof t.minLength=="number"&&w.push(ee.MinLength),typeof t.maxLength=="number"&&w.push(ee.MaxLength);const f={value:E,minLength:t.minLength,maxLength:t.maxLength},c=w.filter(o=>!o.test(f)).map(o=>{var i;return((i=o.compareError)==null?void 0:i.call(o,f))||o.error(f)})||[];S("update:error",c[0]||"")},S=q;return n({test:$}),(v,E)=>(p(),C("div",un,[v.label?(p(),C("label",P({key:0,class:"block text-sm font-bold mb-2",for:r.value},v.labelProps),oe(u.value),17,pn)):x("",!0),g(l(ol),P({id:r.value,placeholder:v.placeholder,modelValue:k.value,"onUpdate:modelValue":E[0]||(E[0]=w=>k.value=w),onLoad:T},v.editorProps),null,16,["id","placeholder","modelValue"]),v.error?(p(),D(xl,{key:1,name:v.name,error:v.error},null,8,["name","error"])):x("",!0)]))}}),cn={class:"m-4"},qn=["for"],mn={class:"table w-full"},bn={class:"table-header-group"},vn={key:0,class:"table-row"},gn={key:0,class:"table-cell"},fn={class:"table-cell"},kn={class:"table-row-group"},wn={key:0,class:"table-cell"},hn={key:1,class:"table-cell"},yn={key:2,class:"table-cell"},Vn={class:"table-footer-group"},$n={class:"table-row"},Cn={key:0,class:"table-cell"},Pn={class:"table-cell"},tl=F({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:n}){const q=e,t=n,u=Xe(Ze).greaterOrEqual("md"),r=O({get:()=>kl(q.modelValue),set:c=>{t("update:modelValue",Le(c))}}),T=O(()=>q.name+(q.id?"."+q.id:"")),$=O(()=>{var c;return u.value&&((c=r.value[0])==null?void 0:c.length)<3}),S=(c,o,i)=>{const b=[...r.value];b[c][o]=i,t("update:modelValue",Le(b))},v=()=>{const c=r.value;if(c.length){const o=c[0];o.length?r.value=[...c,o.map(()=>"")]:r.value=[...c,[""]]}else r.value=[[""]]},E=c=>{r.value.splice(c,1),r.value=r.value},w=()=>{r.value=r.value.map(c=>[...c,""])},f=c=>{r.value=r.value.map(o=>(o.splice(c,1),o))};return(c,o)=>(p(),C("div",cn,[c.label?(p(),C("label",P({key:0,class:"block text-sm font-bold mb-2",for:T.value},c.labelProps),oe(c.label),17,qn)):x("",!0),m("div",mn,[m("div",bn,[r.value.length&&r.value[0].length>1?(p(),C("div",vn,[r.value.length>1?(p(),C("div",gn)):x("",!0),(p(!0),C(W,null,de(r.value[0],(i,b)=>(p(),C("div",fn,[r.value.length&&r.value[0].length?(p(),D(l(be),{key:0,class:"md:text-start text-nowrap",icon:"pi pi-times",label:$.value?"Remove column":void 0,onClick:I=>f(b)},null,8,["label","onClick"])):x("",!0)]))),256))])):x("",!0)]),m("div",kn,[(p(!0),C(W,null,de(r.value,(i,b)=>(p(),C("div",{key:b,class:"table-row"},[r.value.length>1?(p(),C("div",wn,[g(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-times",label:$.value?"Remove row":void 0,onClick:I=>E(b)},null,8,["label","onClick"])])):x("",!0),(p(!0),C(W,null,de(i,(I,U)=>(p(),D(ie,{class:"table-cell !m-0",key:U,name:`${c.name}.${b}.${U}`,modelValue:I,placeholder:b===0||U===0?"header":"cell","onUpdate:modelValue":B=>S(b,U,B.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),b===0?(p(),C("div",hn,[g(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:$.value?"Add column":void 0,onClick:w},null,8,["label"])])):(p(),C("div",yn))]))),128))]),m("div",Vn,[m("div",$n,[r.value.length>1?(p(),C("div",Cn)):x("",!0),m("div",Pn,[g(l(be),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:$.value?"Add row":void 0,onClick:v},null,8,["label"])])])])])]))}}),Sn={key:0,class:"mb-5 p-4 border-y"},Un={class:"flex"},xn=F({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue","update:error"],setup(e,{expose:n,emit:q}){const t=e,k=q,u=s(""),r=O({get:()=>t.modelValue.slice(),set:w=>{k("update:modelValue",w),u.value=""}}),T=O(()=>t.name+(t.id?"."+t.id:"")),$=(w,f)=>{const c=r.value.slice();c.splice(w,1,f),r.value=c},S=()=>{u.value.length&&(r.value=[...r.value,u.value])},v=w=>{const f=r.value.slice();f.splice(w,1),r.value=f};return n({test:()=>{}}),(w,f)=>(p(),C("div",null,[g(ie,{id:T.value,name:w.name,label:w.label,modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=c=>u.value=c),max:200,placeholder:w.placeholder,onKeydown:f[1]||(f[1]=wl(c=>S(),["enter"]))},null,8,["id","name","label","modelValue","placeholder"]),r.value.length?(p(),C("div",Sn,[g(l(ll),{modelValue:r.value,"onUpdate:modelValue":f[2]||(f[2]=c=>r.value=c),itemKey:"index",handle:".drag-handle"},{item:M(({element:c,index:o})=>[m("div",Un,[f[3]||(f[3]=m("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),g(ie,{class:"w-full",id:`${w.name}.${o}`,name:w.name,"model-value":c,max:200,"delete-button":"","onUpdate:modelValue":i=>$(o,i.toString()),"onUpdate:delete":i=>v(o)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])])):x("",!0)]))}}),En={class:"md:px-5"},Tn={class:"flex justify-center"},In={key:0},On={class:"mt-3 flex justify-evenly font-bold"},Bn=F({__name:"BlogPostContentSectionDialogSection",props:{section:{}},emits:["error","delete"],setup(e,{expose:n,emit:q}){const t=q,u=Xe(Ze).greaterOrEqual("sm"),r=s(!1),T=s(),$=s(),S=s(),v=s(),E=s(),w=s(),f=s(),c=s(),o=s(),i=s(),b=s(),I=s(),U=s(),B=s(),z=s(),H=s(!1),G=s(!1),X=s(!1),K=O(()=>[i.value,b.value,I.value,U.value,B.value,z.value,H.value,G.value,X.value].some(d=>!!d)),y=O(()=>u.value?"View more options":"View more"),V=O(()=>u.value?"Hide more options":"View less");return n({test:async()=>{var d,a,h,qe,me,R,j,N,Z;await Promise.all([(d=T.value)==null?void 0:d.test(),(a=$.value)==null?void 0:a.test(),(h=S.value)==null?void 0:h.test(),(qe=w.value)==null?void 0:qe.test(),(me=v.value)==null?void 0:me.test(),(R=E.value)==null?void 0:R.test(),(j=f.value)==null?void 0:j.test(),(N=c.value)==null?void 0:N.test(),(Z=o.value)==null?void 0:Z.test()]),t("error",K.value)}}),(d,a)=>(p(),C("div",En,[g(ie,{class:"mt-0 pt-5",ref_key:"title",ref:T,id:d.section.id,name:"title",label:"Section Title",modelValue:d.section.title,"onUpdate:modelValue":a[0]||(a[0]=h=>d.section.title=h),error:i.value,"onUpdate:error":a[1]||(a[1]=h=>i.value=h),max:50},null,8,["id","modelValue","error"]),g(ie,{ref_key:"subTitle",ref:$,id:d.section.id,name:"subTitle",label:"Section Subtitle",modelValue:d.section.subTitle,"onUpdate:modelValue":a[2]||(a[2]=h=>d.section.subTitle=h),error:b.value,"onUpdate:error":a[3]||(a[3]=h=>b.value=h),max:200},null,8,["id","modelValue","error"]),g(Ee,{ref_key:"description",ref:S,id:d.section.id,name:"description",label:"Section Description",modelValue:d.section.description,"onUpdate:modelValue":a[4]||(a[4]=h=>d.section.description=h),error:I.value,"onUpdate:error":a[5]||(a[5]=h=>I.value=h),"max-length":1e4},null,8,["id","modelValue","error"]),m("div",Tn,[g(Q,{class:"w-full sm:w-2/3 xl:w-2/3 text-nowrap",type:"primary",outlined:"",icon:r.value?"pi pi-angle-up":"pi pi-angle-down",label:r.value?V.value:y.value,onClick:a[6]||(a[6]=h=>r.value=!r.value)},null,8,["icon","label"])]),r.value?(p(),C("div",In,[g(J,{ref_key:"alignment",ref:v,id:d.section.id,name:"alignment",label:"Alignment",modelValue:d.section.alignment,"onUpdate:modelValue":a[7]||(a[7]=h=>d.section.alignment=h),error:B.value,"onUpdate:error":a[8]||(a[8]=h=>B.value=h),options:l(ve),rules:[l(ee).Required]},null,8,["id","modelValue","error","options","rules"]),g(J,{ref_key:"tableAlignment",ref:E,id:d.section.id,name:"tableAlignment",label:"Table Alignment",modelValue:d.section.tableAlignment,"onUpdate:modelValue":a[9]||(a[9]=h=>d.section.tableAlignment=h),error:z.value,"onUpdate:error":a[10]||(a[10]=h=>z.value=h),options:l(ve),rules:[l(ee).Required]},null,8,["id","modelValue","error","options","rules"]),g(el,{ref_key:"coverImageUrl",ref:w,id:d.section.id,name:"coverImageUrl",label:"Cover image",modelValue:d.section.coverImageUrl,"onUpdate:modelValue":a[11]||(a[11]=h=>d.section.coverImageUrl=h),error:U.value,"onUpdate:error":a[12]||(a[12]=h=>U.value=h)},null,8,["id","modelValue","error"]),g(ge,{ref_key:"countdown",ref:f,id:d.section.id,name:"countdown",label:"Countdown",modelValue:d.section.countdown,"onUpdate:modelValue":a[13]||(a[13]=h=>d.section.countdown=h),error:H.value,"onUpdate:error":a[14]||(a[14]=h=>H.value=h)},null,8,["id","modelValue","error"]),g(ge,{ref_key:"timer",ref:c,id:d.section.id,name:"timer",label:"Timer",modelValue:d.section.timer,"onUpdate:modelValue":a[15]||(a[15]=h=>d.section.timer=h),error:G.value,"onUpdate:error":a[16]||(a[16]=h=>G.value=h)},null,8,["id","modelValue","error"]),g(xn,{ref_key:"bullets",ref:o,id:d.section.id,name:"bullets",label:"Section Bullets",placeholder:"New bullet...",modelValue:d.section.bullets,"onUpdate:modelValue":a[17]||(a[17]=h=>d.section.bullets=h)},null,8,["id","modelValue"]),g(tl,{id:d.section.id,name:"table",label:"Table",modelValue:d.section.table,"onUpdate:modelValue":a[18]||(a[18]=h=>d.section.table=h)},null,8,["id","modelValue"])])):x("",!0),m("div",On,[g(Q,{class:"w-full sm:w-2/3 md:w-1/2 xl:w-2/3",type:"danger",outlined:"",label:"Delete",onClick:a[19]||(a[19]=h=>d.$emit("delete"))})])]))}}),Dn={class:"flex gap-5"},Ln={class:"mt-3 flex justify-center"},zn=F({__name:"BlogPostContentDialogSection",emits:["update:selected","error"],setup(e,{expose:n,emit:q}){const t=q,k=ce(),{blogPostOriginal:u,blogPostMutation:r,isOpen:T}=A(k),$=s(),S=s(),v=s(),E=s(),w=s(),f=s(),c=s([]),o=s(),i=s(),b=s(),I=s(),U=s(),B=s(!1),z=s(!1),H=s({}),G=O(()=>[i.value,b.value,I.value,U.value,B.value,z.value,Object.values(H.value).some(L=>L)].some(L=>!!L)),X=()=>{r.value.sections.push({id:hl(),title:"",subTitle:"",description:"",alignment:"left",tableAlignment:"left",coverImageUrl:"",countdown:null,timer:null,table:"",bullets:[]})},K=L=>{const d=r.value.sections.slice(),a=d.findIndex(h=>h.id===L);d.splice(a,1),k.blogPostMutation.sections=d},y=(L,d)=>{H.value[d]=L};return n({test:async()=>{for(const L of c.value)await L.test();await Promise.all([$.value.test(),S.value.test(),v.value.test(),w.value.test(),f.value.test()]),t("error",G.value),H.value={}}}),(L,d)=>(p(),C(W,null,[g(ie,{ref_key:"title",ref:$,name:"title",label:"Title",placeholder:"Amazing Post",modelValue:l(r).title,"onUpdate:modelValue":d[0]||(d[0]=a=>l(r).title=a),error:i.value,"onUpdate:error":d[1]||(d[1]=a=>i.value=a),rules:[l(ee).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),g(Ee,{ref_key:"description",ref:S,name:"description",label:"Description",placeholder:"Something about my post...",modelValue:l(r).description,"onUpdate:modelValue":d[2]||(d[2]=a=>l(r).description=a),error:b.value,"onUpdate:error":d[3]||(d[3]=a=>b.value=a),"max-length":1e4},null,8,["modelValue","error"]),g(el,{ref_key:"coverImageUrl",ref:E,id:"coverImageUrl",name:"coverImageUrl",label:"Cover image",modelValue:l(r).coverImageUrl,"onUpdate:modelValue":d[4]||(d[4]=a=>l(r).coverImageUrl=a),error:U.value,"onUpdate:error":d[5]||(d[5]=a=>U.value=a),"blog-post":l(u)??void 0},null,8,["modelValue","error","blog-post"]),l(T)?(p(),D(l(xe),{key:0,onTabOpen:l(Ue)},{default:M(()=>[g(l(re),{header:"Other content"},{default:M(()=>[g(Ee,{ref_key:"descriptionFooter",ref:v,name:"descriptionFooter",label:"Footer",placeholder:"Some beautiful ending...",modelValue:l(r).descriptionFooter,"onUpdate:modelValue":d[6]||(d[6]=a=>l(r).descriptionFooter=a),error:I.value,"onUpdate:error":d[7]||(d[7]=a=>I.value=a),"max-length":1e4},null,8,["modelValue","error"]),g(ge,{ref_key:"countdown",ref:w,name:"countdown",label:"Countdown",modelValue:l(r).countdown,"onUpdate:modelValue":d[8]||(d[8]=a=>l(r).countdown=a),error:B.value,"onUpdate:error":d[9]||(d[9]=a=>B.value=a)},null,8,["modelValue","error"]),g(ge,{ref_key:"timer",ref:f,name:"timer",label:"Timer",modelValue:l(r).timer,"onUpdate:modelValue":d[10]||(d[10]=a=>l(r).timer=a),error:z.value,"onUpdate:error":d[11]||(d[11]=a=>z.value=a)},null,8,["modelValue","error"]),g(tl,{name:"table",label:"Table",modelValue:l(r).table,"onUpdate:modelValue":d[12]||(d[12]=a=>l(r).table=a)},null,8,["modelValue"])]),_:1}),g(l(re),{header:"Sections"},{default:M(()=>[g(l(ll),{ref_key:"draggable",ref:o,modelValue:l(r).sections,"onUpdate:modelValue":d[13]||(d[13]=a=>l(r).sections=a),itemKey:a=>a.id,handle:".drag-handle"},{item:M(({element:a})=>[l(T)?(p(),D(l(xe),{key:0,onTabOpen:l(Ue)},{default:M(()=>[g(l(re),{pt:{header:{class:"drag-handle"},toggleableContent:{class:"background-gray-dark rounded-t-primary rounded-b-primary"}}},{header:M(()=>[m("div",Dn,[d[14]||(d[14]=m("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),m("p",null,oe(a.title||"New section"),1)])]),default:M(()=>[g(Bn,{ref:h=>{c.value[a.id]=h},section:a,"is-open":l(T),onDelete:h=>K(a.id),onError:h=>y(h,a.id)},null,8,["section","is-open","onDelete","onError"])]),_:2},1024)]),_:2},1032,["onTabOpen"])):x("",!0)]),_:1},8,["modelValue","itemKey"]),m("div",Ln,[g(Q,{class:"w-1/2",type:"green",label:"Add Section",onClick:X})])]),_:1})]),_:1},8,["onTabOpen"])):x("",!0)],64))}}),Mn=F({__name:"BlogPostSettingsDialogSection",emits:["error"],setup(e,{expose:n,emit:q}){const t=q,k=pe(),u=Ie(),r=ce(),{publicUser:T,publicUsers:$}=A(u),{firebaseUser:S}=A(k),{blogPostMutation:v}=A(r),{allowedPublicUsers:E}=u,w=s(),f=s(),c=s(),o=s(),i=O({get(){return!!v.value.datePinned},set(y){v.value.datePinned=y?new Date:null}}),b=s(),I=s(),U=s(),B=s(),z=O(()=>[b.value,I.value,U.value,B.value].some(y=>!!y)),H=O(()=>$.value.map(({id:y,displayName:V})=>({value:y,label:V}))),G=s([]),X=y=>{v.value.allowedUserIds=y},K=async()=>{v.value.allowedUserIds.length&&!G.value.length&&(b.value="Invalid user ID's"),await Promise.all([f.value.test(),c.value.test(),o.value.test()]),t("error",z.value)};return ke(()=>v.value.allowedUserIds,async y=>{G.value=await E(y)},{immediate:!0}),n({test:K}),(y,V)=>(p(),C(W,null,[g(J,{ref_key:"allowedUsers",ref:w,name:"allowedUserIds",label:"Allowed users",placeholder:"This post is public","model-value":l(v).allowedUserIds,error:b.value,"onUpdate:error":V[0]||(V[0]=L=>b.value=L),"onUpdate:arrayValue":X,options:[{value:l(S).uid,label:l(T).displayName},...H.value.filter(({value:L})=>{var d;return L!==((d=l(S))==null?void 0:d.uid)})],multiple:""},null,8,["model-value","error","options"]),g(we,{ref_key:"pinned",ref:o,name:"pinned",label:"Pinned",modelValue:i.value,"onUpdate:modelValue":V[1]||(V[1]=L=>i.value=L)},null,8,["modelValue"]),g(we,{ref_key:"locked",ref:f,name:"locked",label:"Locked for commenting",modelValue:l(v).locked,"onUpdate:modelValue":V[2]||(V[2]=L=>l(v).locked=L)},null,8,["modelValue"]),g(we,{ref_key:"archived",ref:c,name:"archived",label:"Archived",modelValue:l(v).archived,"onUpdate:modelValue":V[3]||(V[3]=L=>l(v).archived=L)},null,8,["modelValue"])],64))}}),An=F({__name:"BlogPostStylingDialogSection",emits:["error"],setup(e,{expose:n,emit:q}){const t=q,k=ce(),{blogPostMutation:u}=A(k),r=s(),T=s(),$=s(),S=s(),v=s(),E=s(),w=s(),f=s(),c=s(),o=s(),i=s(),b=s(),I=s(),U=s(),B=s(),z=s(),H=O(()=>[c.value,o.value,i.value,b.value,I.value,U.value,B.value,z.value].some(K=>!!K)),G=O(()=>yl(ze.find(K=>K.value===u.value.colorPrimary)));return n({test:async()=>{await Promise.all([r.value.test(),T.value.test(),$.value.test(),S.value.test(),v.value.test(),E.value.test(),w.value.test(),f.value.test()]),t("error",H.value)}}),(K,y)=>(p(),C(W,null,[g(J,{ref_key:"alignment",ref:r,name:"alignment",label:"Alignment",modelValue:l(u).alignment,"onUpdate:modelValue":y[0]||(y[0]=V=>l(u).alignment=V),error:c.value,"onUpdate:error":y[1]||(y[1]=V=>c.value=V),options:l(ve),rules:[l(ee).Required]},null,8,["modelValue","error","options","rules"]),g(J,{ref_key:"tableAlignment",ref:T,name:"tableAlignment",label:"Table Alignment",modelValue:l(u).tableAlignment,"onUpdate:modelValue":y[2]||(y[2]=V=>l(u).tableAlignment=V),error:o.value,"onUpdate:error":y[3]||(y[3]=V=>o.value=V),options:l(ve),rules:[l(ee).Required]},null,8,["modelValue","error","options","rules"]),g(J,{ref_key:"colorPrimary",ref:$,name:"colorPrimary",label:"Primary Style",modelValue:l(u).colorPrimary,"onUpdate:modelValue":y[4]||(y[4]=V=>l(u).colorPrimary=V),error:i.value,"onUpdate:error":y[5]||(y[5]=V=>i.value=V),options:l(ze),rules:[l(ee).Required]},null,8,["modelValue","error","options","rules"]),g(J,{ref_key:"opacityPrimary",ref:E,name:"opacityPrimary",label:"Primary Opacity",modelValue:l(u).opacityPrimary,"onUpdate:modelValue":y[6]||(y[6]=V=>l(u).opacityPrimary=V),error:U.value,"onUpdate:error":y[7]||(y[7]=V=>U.value=V),options:l(Ve)},null,8,["modelValue","error","options"]),g(J,{ref_key:"colorSecondary",ref:S,name:"colorSecondary",label:"Secondary Style",modelValue:l(u).colorSecondary,"onUpdate:modelValue":y[8]||(y[8]=V=>l(u).colorSecondary=V),error:b.value,"onUpdate:error":y[9]||(y[9]=V=>b.value=V),options:G.value},null,8,["modelValue","error","options"]),g(J,{ref_key:"opacitySecondary",ref:w,name:"opacitySecondary",label:"Secondary Opacity",modelValue:l(u).opacitySecondary,"onUpdate:modelValue":y[10]||(y[10]=V=>l(u).opacitySecondary=V),error:B.value,"onUpdate:error":y[11]||(y[11]=V=>B.value=V),options:l(Ve)},null,8,["modelValue","error","options"]),g(J,{ref_key:"colorTertiary",ref:v,name:"colorTertiary",label:"Tertiary Style",modelValue:l(u).colorTertiary,"onUpdate:modelValue":y[12]||(y[12]=V=>l(u).colorTertiary=V),error:I.value,"onUpdate:error":y[13]||(y[13]=V=>I.value=V),options:l(Vl)},null,8,["modelValue","error","options"]),g(J,{ref_key:"opacityTertiary",ref:f,name:"opacityTertiary",label:"Tertiary Opacity",modelValue:l(u).opacityTertiary,"onUpdate:modelValue":y[14]||(y[14]=V=>l(u).opacityTertiary=V),error:z.value,"onUpdate:error":y[15]||(y[15]=V=>z.value=V),options:l(Ve)},null,8,["modelValue","error","options"])],64))}}),Rn=F({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:n}){const q=n,t=pe(),k=fe(),u=ce(),{firebaseUser:r}=A(t),{isBlogPostsMutationLoading:T}=A(k),{createBlogPost:$,updateBlogPost:S,deleteFilesOfBlogPost:v,toggleBlogPostVisibility:E}=k,{getBlogPostMutationContent:w,getBlogPostMutationStyling:f,getBlogPostMutationSettings:c}=u,{isOpen:o,blogPostOriginal:i,blogPostMutationId:b,blogPostMutation:I,hasBlogPostMutationContentChanges:U,hasBlogPostMutationStylingChanges:B,hasBlogPostMutationSettingsChanges:z}=A(u),H=s(),G=s(),X=s(),K=s(),y=s(!1),V=s(!1),L=s(!1),d=O(()=>{var R,j,N,Z,ae,Y;return!!((j=(R=i.value)==null?void 0:R.allowedUserIds)!=null&&j.length)&&!((N=c().allowedUserIds)!=null&&N.length)||!((ae=(Z=i.value)==null?void 0:Z.allowedUserIds)!=null&&ae.length)&&!!((Y=c().allowedUserIds)!=null&&Y.length)}),a=O(()=>{const R=[];return U.value&&R.push("Content"),B.value&&R.push("Styling"),z.value&&R.push("Settings"),R.length?"Update "+Me(R):void 0}),h=O(()=>$l(i.value)),qe=async()=>{var R,j,N,Z,ae;if(await Promise.all([G.value.test(),X.value.test(),K.value.test()]),!(y.value||V.value||L.value))if(!i.value)await $(b.value,I.value,(R=r.value)==null?void 0:R.uid)&&(u.close(),q("scroll-to-updated",b.value));else if(d.value){const Y=b.value;u.isOpen=!1,await E(Y,_.convert(I.value),i.value.reactions,I.value.allowedUserIds.length?"private":"public",(j=r.value)==null?void 0:j.uid)&&(u.close(),Se.success("Successfully updated Post Visibility"),q("scroll-to-updated",Y))}else{const Y=b.value;let le=[];U.value&&le.push(await S(Y,w(),h.value,(N=r.value)==null?void 0:N.uid)),B.value&&le.push(await S(Y,f(),h.value,(Z=r.value)==null?void 0:Z.uid)),z.value&&(le.push(await S(Y,c(),h.value,(ae=r.value)==null?void 0:ae.uid)),q("scroll-to-updated",Y)),le=le.filter(rl=>typeof rl=="string"),le.length&&(Se.success(`Successfully updated Post ${Me(le)}`),u.close())}},me=async()=>{v(I.value,i.value??void 0),u.close()};return ke(I,()=>{u.isMutationEqual()},{deep:!0}),(R,j)=>(p(),D(Ge,{isOpen:l(o),title:l(i)?"Update Post":"Create Post",description:l(i)?"Update this post":"Create a new post","confirm-text":l(i)?a.value:"Create","confirm-loading":l(T),onConfirm:qe,onCancel:me},{default:M(()=>[m("form",{ref_key:"dialog",ref:H,class:"pt-6 mb-4 xl:px-16"},[l(o)?(p(),D(l(xe),{key:0,"active-index":0,onTabOpen:l(Ue)},{default:M(()=>[g(l(re),{header:"Content"},{default:M(()=>[g(zn,{ref_key:"content",ref:G,onError:j[0]||(j[0]=N=>y.value=N)},null,512)]),_:1}),g(l(re),{header:"Styling"},{default:M(()=>[g(An,{ref_key:"styling",ref:X,onError:j[1]||(j[1]=N=>V.value=N)},null,512)]),_:1}),g(l(re),{header:"Settings"},{default:M(()=>[g(Mn,{ref_key:"settings",ref:K,onError:j[2]||(j[2]=N=>L.value=N)},null,512)]),_:1})]),_:1},8,["onTabOpen"])):x("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading"]))}}),jn={class:"grid mt-10 md:mt-15"},Nn={class:"grid justify-center"},Fn={class:"text-lg md:text-xl text-white"},Hn=["innerHTML"],Gn={class:"grid my-5 xl:px-20"},Kn=F({__name:"Blog",setup(e){const n=Ke(),q=Te(),t=Ie(),k=fe(),u=ce(),{menuItems:r,content:T}=A(q),{publicUser:$}=A(t),{deleteBlogPost:S}=k,v=s(null),E=s(),w=s(!1),f=s(n.currentRoute.value.params.postId),c=O(()=>{var U;return $.value?[...T.value.blogDescriptionUser.map(B=>B.replace("%USER%",$.value.displayName||"Unknown user")),...((U=r.value.find(B=>B.id==="nfNQM4SMESU2VOkJtcgY"))==null?void 0:U.description)||[]]:T.value.blogDescriptionGuest}),o=()=>{u.openWith(null)},i=U=>{u.openWith(U)},b=U=>{v.value=U,w.value=!0},I=async U=>{await S(U)&&(w.value=!1,v.value=null)};return ke(n.currentRoute,U=>{f.value=U.params.postId}),(U,B)=>(p(),D(il,null,{content:M(()=>[m("div",jn,[m("div",Nn,[(p(!0),C(W,null,de(c.value,z=>(p(),C("h1",Fn,[m("span",{innerHTML:z},null,8,Hn)]))),256))]),m("div",Gn,[f.value?(p(),D(Il,{key:0,onEditClicked:i,onDeleteClicked:b})):(p(),D(Zl,{key:1,onCreateClicked:o,onEditClicked:i,onDeleteClicked:b})),g(Rn,{onScrollToUpdated:B[0]||(B[0]=z=>E.value=z)}),v.value?(p(),D(Ge,{key:2,title:"Delete Post",isOpen:w.value,description:[` Are you sure you want to delete this post called ' ${v.value.title}'?`,"This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:B[1]||(B[1]=z=>I(v.value.id)),onCancel:B[2]||(B[2]=z=>w.value=!1)},null,8,["isOpen","description"])):x("",!0)])])]),_:1}))}}),to=F({__name:"Blog",setup(e){return(n,q)=>(p(),D(Kn))}});export{to as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./c-quill-D2YPtopm.js","./c-vuedraggable.umd-DZ3azzJt.js","../bundle.js","../bundle8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
