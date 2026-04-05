const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./c-quill-CWTiZzTX.js","./c-chunk-BZBS-Z4_.js"])))=>i.map(i=>d[i]);
import{a as e}from"./c-chunk-BZBS-Z4_.js";import{$n as t,Ar as n,At as r,Bn as i,Br as a,Bt as o,Ct as s,Dr as c,Dt as l,En as u,Er as d,Et as f,Gr as p,Hn as m,Ht as h,Ii as g,Ir as _,Jr as v,Jt as y,Kn as b,Kr as x,Kt as S,Li as ee,Lt as C,Mr as w,Nr as T,Or as E,Pr as D,Qn as te,R as ne,Ri as re,Rt as ie,Sr as O,Tr as k,Ut as ae,Vi as A,Vn as oe,Vt as se,Wr as ce,Wt as le,Xn as j,Xr as ue,Xt as de,Yr as fe,Yt as pe,ai as M,ar as N,bn as me,dn as P,dr as he,ei as ge,fi as _e,hi as F,ir as ve,l as ye,nn as be,nr as xe,oi as Se,pi as I,qn as Ce,ri as we,tn as Te,tr as Ee,wr as L,wt as De,xr as Oe,yr as ke,zr as Ae,zt as R}from"./c-button-DbxlWo-7.js";import{i as z,n as B,r as V,t as H}from"./c-accordion-CXf-9bth.js";import{t as je}from"./c-baseeditableholder-DYG7Qbn_.js";import{a as Me,d as Ne,f as Pe,i as Fe,o as Ie,r as Le,s as Re,u as ze}from"../bundle.js";import{a as U,i as Be,r as Ve,t as W}from"./c-Bubble-CE_bAaGj.js";import{t as He}from"./c-Dialog-BUmGtSOl.js";import{t as G}from"./c-DeleteButton-B_GMIOSK.js";import{t as Ue}from"./c-ErrorMessage-pmsC-60i.js";import{t as K}from"./c-TextField-D5wShCEf.js";import{a as We,d as Ge,i as q,s as Ke,t as J,u as Y}from"./c-dist-Dy9psHcd.js";import{t as qe}from"./c-Countdown-CHWFXT-o.js";import{t as Je}from"./c-Image-CP__8jxz.js";import{t as Ye}from"./c-EditButton-B5zKblgG.js";import{n as Xe,t as Ze}from"./c-DateField-C07OPIiI.js";import{t as Qe}from"./c-FileUpload-z3KROQhf.js";import{t as $e}from"./c-vuedraggable.umd-Z7_sAiab.js";import{t as X}from"./c-SelectField-tnBTj60y.js";import{t as Z}from"./c-SwitchField-B9cfcTVd.js";import{t as et}from"./c-useUsers-D_H135Tq.js";var tt=e=>{let t=C(),n=R(),{previousCurrentBlogPost:r,isBlogPostDatabaseActionActive:a}=N(t),o=[],s=I(),c=n=>{n.metadata.hasPendingWrites||a.value||(clearTimeout(s.value),s.value=setTimeout(async()=>{await t.fetchBlogPost(e.id,void 0,{loadingIndicator:!1}),t.checkBlogPostForUnreadReactions(r.value,!0)},200))};ce(async()=>{n.unread=n.unread.filter(t=>t.postId!==e.id);let r=be(e),a=t.collections.blogPosts(r.isPrivate),s=n.collections.blogReactions(r.isPrivate),l=b(a,e.id),u=oe(a,m(`id`,`==`,e.id)),d=oe(s,m(`post`,`==`,l));o.push(i(u,c)),o.push(i(d,c))}),p(()=>{clearTimeout(s.value),o.forEach(e=>{e()})})},nt=()=>{let e=C(),t=l(),n=R(),{visibleBlogPosts:r,isBlogPostDatabaseActionActive:a}=N(e),{isLoggedIn:o}=N(t),s=[],c=I(),u=t=>{t.metadata.hasPendingWrites||a.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{r.value.length&&(await e.fetchBlogPosts({amount:r.value.length,loadingIndicator:!1}),e.checkBlogPostsForUnreadReactions())},200))};ce(()=>{n.unread=[],s.push(i(e.collections.blogPosts(!1),u)),s.push(i(n.collections.blogReactions(!1),u)),o.value&&(s.push(i(e.collections.blogPosts(!0),u)),s.push(i(n.collections.blogReactions(!0),u)))}),p(()=>{clearTimeout(c.value),s.forEach(e=>{e()})})},rt=e=>e?e.clone():new o,Q=ve(`blogPostDialogStore`,()=>{let e=I(!1),t=I(null),n=I(rt(null)),r=I(!1),i=()=>{t.value=null,n.value=rt(null),r.value=!1};return we(()=>n.value,()=>{r.value=!S(t.value,n.value)},{deep:!0}),{isOpen:e,blogPostOriginal:t,blogPostMutation:n,hasChanges:r,$reset:i,openWith:r=>{t.value=r,n.value=rt(r),e.value=!0},close:()=>{e.value=!1,i()}}}),it={class:`flex flex-col gap-2`},at=D({__name:`BlogReaction`,props:{post:{},reaction:{}},setup(e){let t=e,i=r(),a=l(),o=me(),s=R(),{routeLoading:f,routeLoadingId:p}=N(i),{firebaseUser:m,isLoggedIn:h,isOwner:_}=N(a),{publicUsers:v}=N(o),{isDatabaseDeletionActive:y}=N(s),b=L(()=>v.value.find(e=>e.id===t.reaction.userId)),S=L(()=>m.value&&t.reaction.userId===m.value.uid||_.value);return(t,r)=>(x(),d(W,{id:e.reaction.id,class:g([`p-5 w-full md:w-3/4 xl:w-2/3`,e.post.colorTertiary,e.post.opacityTertiary||`bg-opacity-50`,`!rounded-primary`]),titleProps:{class:`!text-base mt-1`},descriptionProps:{class:`text-white`},avatarProps:{class:{"animate-spin":F(f)===F(j).USER_DETAILS&&F(p)===b.value?.id}},title:b.value?.displayName||`Onbekende gebruiker`,subTitle:F(u)(e.reaction.date),avatar:b.value?.avatar,route:F(h)?{name:F(j).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,avatarRoute:F(h)?{name:F(j).USER_DETAILS,params:{userId:e.reaction.userId}}:void 0,description:e.reaction.message},n({_:2},[S.value?{name:`right`,fn:M(()=>[k(`div`,it,[S.value&&!e.post.locked?(x(),d(G,{key:0,outlined:``,disabled:F(y),onClick:r[0]||=t=>F(s).deleteBlogReaction(e.post,e.reaction.id)},null,8,[`disabled`])):c(``,!0)])]),key:`0`}:void 0]),1032,[`id`,`class`,`avatarProps`,`title`,`subTitle`,`avatar`,`route`,`avatarRoute`,`description`]))}}),ot={class:`grid justify-items-center p-5 gap-5`},st=D({__name:`BlogReactions`,props:{post:{}},setup(e){let t=e,n=l(),r=R(),{firebaseUser:i,isLoggedIn:a}=N(n),{isDatabaseCreationActive:o}=N(r),u=I(!1),f=_e({reaction:``}),p=J({reaction:{required:Y}},f,{$autoDirty:!0}),m=L(()=>[...t.post.reactions].reverse()),h=L(()=>m.value.filter((e,t)=>t<3)),_=L(()=>m.value.filter((e,t)=>t>=3)),b=L(()=>t.post.locked||!a.value||o.value),S=async()=>{if(o.value)return;if(!await p.value.$validate()||!i.value){y();return}let e=f.reaction;f.reaction=`Reactie plaatsen...`;let n=await r.createBlogReaction(t.post,new le({userId:i.value.uid,postId:t.post.id,message:e}));f.reaction=n?``:e,n&&p.value.$reset(),y()};return(t,n)=>(x(),E(`form`,{action:``,onSubmit:Oe(S,[`prevent`])},[k(`div`,ot,[!F(a)||e.post.reactions.filter(e=>e.userId===F(i).uid).length<20?(x(),d(W,{key:0,class:g([`p-5 flex justify-center w-full md:w-3/4 xl:w-2/3`,`!rounded-primary`,e.post.colorTertiary||`bg-secondary-700`,e.post.opacityTertiary||`bg-opacity-25`])},{default:M(()=>[T(K,{class:`w-5/6`,id:e.post.id,inputProps:{class:[`!bg-neutral-900 rounded-primary border-none !placeholder-gray-300`,e.post.colorSecondary||e.post.colorPrimary||`bg-secondary-600`,e.post.opacitySecondary||`!bg-opacity-20`,b.value?{"!bg-gray-900 !bg-opacity-50":!F(o)}:`focus:!text-white focus:!placeholder-gray-200`,{"cursor-pointer":!F(a)&&!e.post.locked}],disabled:b.value,autocomplete:`off`},name:`reaction`,placeholder:e.post.locked?`Gesloten voor reacties`:F(a)?`Reageren`:`Log in om te reageren`,modelValue:f.reaction,"onUpdate:modelValue":n[0]||=e=>f.reaction=e,error:F(p).reaction.$error?F(q)(F(p).reaction):``,required:``,onClick:n[1]||=()=>!F(a)&&!e.post.locked?F(s).push({name:F(j).LOGIN}):{}},null,8,[`id`,`inputProps`,`placeholder`,`modelValue`,`error`])]),_:1},8,[`class`])):c(``,!0),(x(!0),E(O,null,v(h.value,t=>(x(),d(at,{post:e.post,reaction:t},null,8,[`post`,`reaction`]))),256)),(x(!0),E(O,null,v(_.value,t=>Se((x(),d(at,{post:e.post,reaction:t},null,8,[`post`,`reaction`])),[[ke,u.value]])),256)),e.post.reactions.length>3?(x(),d(U,{key:1,outlined:``,icon:u.value?`pi pi-angle-up`:`pi pi-angle-down`,label:u.value?`Verberg oudere reacties`:`Bekijk oudere reacties`,onClick:n[2]||=e=>u.value=!u.value},null,8,[`icon`,`label`])):c(``,!0)])],32))}}),ct=D({__name:`BlogPostBullets`,props:{bullets:{},alignment:{}},setup(e){return(t,n)=>(x(),E(`ul`,{class:g([`list-disc`,{"ms-5":e.alignment===`left`}])},[(x(!0),E(O,null,v(e.bullets,e=>(x(),E(`li`,null,A(e),1))),256))],2))}}),lt={class:`w-full ql-editor no-input`},ut=[`innerHTML`],dt=D({__name:`BlogPostDescription`,props:{description:{}},setup(e){return(t,n)=>(x(),E(`div`,lt,[k(`div`,{innerHTML:e.description},null,8,ut)]))}}),ft=D({__name:`BlogPostImage`,props:{coverImageUrl:{},post:{},alignment:{},thumb:{type:Boolean},imageClass:{}},setup(e){return(t,n)=>(x(),d(W,{class:g([`!p-0 md:!p-3`,e.thumb?`w-full`:`w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary`,e.post?.colorTertiary,e.post?.opacityTertiary||`bg-opacity-50`])},{default:M(()=>[T(F(Re),null,{default:M(()=>[e.thumb?(x(),E(`div`,{key:0,class:`h-[20vh] inset-0 rounded-primary bg-cover bg-center`,style:re({backgroundImage:`url(${e.coverImageUrl})`})},null,4)):(x(),d(Je,{key:1,src:e.coverImageUrl,"image-class":[`cover-image md:rounded-primary`,e.imageClass]},null,8,[`src`,`image-class`]))]),_:1})]),_:1},8,[`class`]))}}),pt=[`innerHTML`],mt=D({__name:`BlogPostTable`,props:{tableData:{},alignment:{}},setup(e){let t=e,n=L(()=>pe(t.tableData)),r=L(()=>n.value.length?n.value[0].map((e,t)=>e||t):[]),i=L(()=>n.value.slice(1).filter(e=>e.some(e=>!!e)).map(e=>{let t={};return r.value.forEach((n,r)=>{t[n]=a(e[r])}),t})),a=e=>e.replace(/(https?:\/\/[^\s]+)/g,e=>{let t=e.replace(`http://`,``).replace(`https://`,``).replace(`www.`,``);return t.length>15&&(t=t.substring(0,15)+`...`),`<a href="${e}" target="_blank">${t}</a>`});return(t,n)=>(x(),d(F(ze),{value:i.value,"pt:root":`w-full max-w-[55vw] md:max-w-[50vw] lg:max-w-[60vw]`,showHeaders:r.value.some(e=>typeof e==`string`),removableSort:``},{default:M(()=>[(x(!0),E(O,null,v(r.value,(t,n)=>(x(),d(F(Ne),{key:t,field:e=>e[t],header:typeof t==`string`?t:``,sortable:``},{body:M(({data:r})=>[k(`span`,{class:g([`text-nowrap`,[{"font-bold":n===0},{"text-left":e.alignment===`left`||!e.alignment,"text-center":e.alignment===`center`,"text-right":e.alignment===`right`}]]),innerHTML:r[t]},null,10,pt)]),_:2},1032,[`field`,`header`]))),128))]),_:1},8,[`value`,`showHeaders`]))}}),ht={class:`text-2xl font-bold`},gt=D({__name:`BlogPostTitle`,props:{title:{}},setup(e){return(t,n)=>(x(),E(`h2`,ht,A(e.title),1))}}),_t={key:1,class:`w-full flex flex-col gap-1 items-center`},vt={key:0},yt={key:0,class:`font-bold text-lg md:text-2xl`},bt={key:1,class:`font-bold`},xt={key:1},St=D({__name:`BlogPostContent`,props:{post:{},block:{}},setup(e){let t=e,n=L(()=>t.block.isGroup()&&t.block.value.length>0&&t.block.value[0].type===`title`),r=L(()=>n.value&&t.block.isGroup()&&t.block.value.length>1&&t.block.value[1].type===`title`);return(t,i)=>{let a=ue(`BlogPostContent`,!0);return x(),E(`div`,{class:g([`flex`,{"justify-start":e.block.alignment===`left`,"justify-center":e.block.alignment===`center`||!e.block.alignment,"justify-end":e.block.alignment===`right`}])},[e.block.isBoolean()?(x(),d(F(Le),{key:0,modelValue:e.block.value,"onUpdate:modelValue":i[0]||=t=>e.block.value=t,onLabel:`True`,offLabel:`False`,onIcon:`pi pi-check`,offIcon:`pi pi-times`,disabled:``},null,8,[`modelValue`])):e.block.isNumber()?(x(),E(`div`,_t,[T(F(Me),{class:`w-full`,value:e.block.value},null,8,[`value`]),e.block.value?c(``,!0):(x(),E(`span`,vt,A(e.block.value)+`% `,1))])):e.block.isString()?(x(),E(O,{key:2},[e.block.type===`title`?(x(),d(gt,{key:0,title:e.block.value},null,8,[`title`])):e.block.type===`richtext`?(x(),d(dt,{key:1,description:e.block.value},null,8,[`description`])):e.block.type===`table`?(x(),d(mt,{key:2,tableData:e.block.value,alignment:e.block.alignment},null,8,[`tableData`,`alignment`])):e.block.type===`coverimage`?(x(),d(ft,{key:3,post:e.post,"cover-image-url":e.block.value},null,8,[`post`,`cover-image-url`])):e.block.type===`image`?(x(),d(ft,{key:4,post:e.post,"cover-image-url":e.block.value,"image-class":`!max-h-[50vh] !max-w-[50vw]`},null,8,[`post`,`cover-image-url`])):c(``,!0)],64)):e.block.isStringList()?(x(),E(O,{key:3},[e.block.type===`bulletlist`?(x(),d(ct,{key:0,bullets:e.block.value},null,8,[`bullets`])):e.block.type===`imageslider`?(x(),d(F(Re),{key:1},{default:M(()=>[T(F(Ie),{value:e.block.value,numVisible:5,showThumbnails:!1,showIndicators:!0,circular:!0,autoPlay:!0,transitionInterval:2e3},{item:M(e=>[T(Je,{src:e.item,"image-class":`aspect-square object-cover w-3/4 place-self-center rounded-2xl`},null,8,[`src`])]),_:1},8,[`value`])]),_:1})):c(``,!0)],64)):e.block.isDate()?(x(),E(O,{key:4},[e.block.type===`date`?(x(),E(O,{key:0},[w(A(e.block.value?F(u)(e.block.value):`Geen datum beschikbaar`),1)],64)):e.block.type===`countdown`?(x(),E(O,{key:1},[e.block.value?(x(),d(qe,{key:0,time:new Date(e.block.value).getTime(),direction:`down`},null,8,[`time`])):c(``,!0)],64)):e.block.type===`timer`?(x(),E(O,{key:2},[e.block.value?(x(),d(qe,{key:0,time:new Date(e.block.value).getTime(),direction:`up`},null,8,[`time`])):c(``,!0)],64)):c(``,!0)],64)):e.block.isButton()?(x(),d(U,{key:5,label:e.block.value.title,href:e.block.value.url,variant:e.block.value.variant},null,8,[`label`,`href`,`variant`])):e.block.isGroup()?(x(),d(F(H),{key:6,class:`w-full`,onTabOpen:F(P)},{default:M(()=>[T(F(B),{value:`0`,disabled:!e.block.value.length},{default:M(()=>[T(F(V),{class:g([`px-0 bg-transparent !border-none`,{"cursor-auto":!e.block.value.length}]),pt:{toggleicon:{class:{invisible:!e.block.value.length}}}},{default:M(()=>[k(`div`,null,[n.value?(x(),E(O,{key:0},[n.value?(x(),E(`p`,yt,A(e.block.value[0].value),1)):c(``,!0),r.value?(x(),E(`p`,bt,A(e.block.value[1].value),1)):c(``,!0)],64)):e.block.value.length?(x(),E(`p`,xt,`Klik om te openen`)):c(``,!0)])]),_:1},8,[`class`,`pt`]),T(F(z),{pt:{content:{class:`flex flex-col gap-3`}}},{default:M(()=>[(x(!0),E(O,null,v(e.block.value.slice(r.value?2:n.value?1:0),t=>(x(),d(a,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1})]),_:1},8,[`disabled`])]),_:1},8,[`onTabOpen`])):c(``,!0)],2)}}}),Ct={class:`flex flex-wrap justify-end h-fit gap-3`},wt=D({__name:`BlogPostMutationButtons`,emits:[`editClicked`,`deleteClicked`],setup(e){return(e,t)=>(x(),E(`div`,Ct,[T(Ye,{onClick:t[0]||=t=>e.$emit(`editClicked`)}),T(G,{onClick:t[1]||=t=>e.$emit(`deleteClicked`)})]))}}),Tt={class:`flex justify-between h-fit mt-2 gap-2`},Et={class:`flex flex-wrap gap-3`},Dt=D({__name:`BlogPost`,props:{post:{}},setup(e){let t=e,n=he(),r=l(),i=me(),a=C(),o=Q(),{publicUsers:s}=N(i),{firebaseUser:f,isOwner:p}=N(r),{deleteBlogPost:m}=a,h=I(!1);n.currentRoute.value.name!==j.BLOG&&tt(t.post);let _=L(()=>t.post.allowedUserIds?.length?s.value.filter(e=>t.post.allowedUserIds?.includes(e.id)):[]),y=L(()=>{let e=u(t.post.date);return t.post.dateUpdated?e+` - aangepast ${u(t.post.dateUpdated)}`:e}),b=L(()=>{let e=[];return t.post.datePinned&&e.push({value:`Vastgemaakt`,severity:`success`,rounded:!1}),t.post.locked&&e.push({value:`Gesloten`,severity:`danger`,rounded:!1,icon:`pi pi-lock`}),t.post.archived&&e.push({value:`Gearchiveerd`,severity:`warning`,rounded:!1,icon:`pi pi-file-excel`}),e}),S=()=>{o.openWith(t.post)},ee=()=>{h.value=!0},w=async()=>{await m(t.post.id)&&(h.value=!1)},D=()=>{let e=document.createElement(`textarea`),{protocol:n,hostname:r,port:i}=window.location;e.value=`${`${n}//${r}`+(r===`localhost`?`:${i}`:``)}#${De.BLOG.path}/${t.post.id}`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),Ce.success(`Link gekopieerd!`)};return(t,n)=>(x(),E(O,null,[T(W,{id:e.post.id,class:g([`border-4 border-transparent`,`!rounded-primary`,e.post.colorSecondary||e.post.colorPrimary||`bg-secondary-900`,e.post.opacitySecondary||`bg-opacity-50`]),title:e.post.title,subTitle:y.value,tags:b.value,clickable:``,route:{name:F(j).BLOG_DETAILS,params:{postId:e.post.id}}},{right:M(()=>[T(U,{class:`h-fit`,variant:`neutral`,icon:`pi pi-copy`,text:``,onClick:D})]),default:M(()=>[k(`div`,Tt,[k(`div`,Et,[(x(!0),E(O,null,v(_.value,e=>(x(),d(F(Pe),{class:`h-fit !p-0 !px-4 !py-1 !bg-red-800 !bg-opacity-50`,icon:`pi pi-user`,label:e.id===F(f)?.uid?`Jij`:e.displayName,rounded:``},null,8,[`label`]))),256))]),F(p)?(x(),E(`div`,{key:0,class:g([`flex justify-end ms-5`,e.post.allowedUserIds?.length?`flex-col md:flex-row`:`flex-row`])},[T(wt,{onEditClicked:S,onDeleteClicked:ee})],2)):c(``,!0)]),T(W,{class:g([`z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5 flex flex-col gap-3`,e.post.colorPrimary,e.post.opacityPrimary||`bg-opacity-50`])},{default:M(()=>[(x(!0),E(O,null,v(e.post.content,t=>(x(),d(St,{key:t.id,post:e.post,block:t},null,8,[`post`,`block`]))),128))]),_:1},8,[`class`]),T(st,{post:e.post},null,8,[`post`])]),_:1},8,[`id`,`class`,`title`,`subTitle`,`tags`,`route`]),T(He,{title:`Verwijder bericht`,isOpen:h.value,description:[` Weet je zeker dat je dit bericht genaamd \'${e.post.title}\' wilt verwijderen?`,`Dit kan niet ongedaan worden gemaakt.`],"confirm-text":`Bevestigen`,"confirm-props":{variant:`danger`,outlined:!0},onConfirm:w,onCancel:n[0]||=e=>h.value=!1},null,8,[`isOpen`,`description`])],64))}}),Ot=e($e(),1),kt={class:`block text-sm font-bold mb-2`},At={class:`bg-black bg-opacity-25 rounded-2xl`},jt={class:`grid grid-cols-6 items-center`},Mt=D({__name:`ImageSliderField`,props:Ae({id:{},name:{},label:{},blogPost:{},placeholder:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=ge(e,`modelValue`),n=e=>{t.value.splice(e,1)},r=(e,n)=>{t.value[e]=n};return(i,a)=>(x(),E(`div`,null,[k(`p`,kt,A(e.label),1),k(`div`,At,[T(F(Ot.default),{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,itemKey:`index`,handle:`.drag-handle`},{item:M(({element:t,index:i})=>[k(`div`,jt,[a[1]||=k(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(Qe,{class:`col-span-4`,id:`${e.name}.${i}`,name:`${e.name}.${i}`,modelValue:t,"blog-post":e.blogPost,"onUpdate:modelValue":e=>r(i,e)},null,8,[`id`,`name`,`modelValue`,`blog-post`,`onUpdate:modelValue`]),T(G,{onClick:e=>n(i)},null,8,[`onClick`])])]),_:1},8,[`modelValue`])])]))}}),Nt=ye.extend({name:`editor`,style:`
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
`,classes:{root:function(e){var t=e.instance;return[`p-editor`,{"p-invalid":t.$invalid}]},toolbar:`p-editor-toolbar`,content:`p-editor-content`}}),Pt={name:`BaseEditor`,extends:je,props:{placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Nt,provide:function(){return{$pcEditor:this,$parentInstance:this}}};function $(e){"@babel/helpers - typeof";return $=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},$(e)}function Ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ft(Object(n),!0).forEach(function(t){Lt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Lt(e,t,n){return(t=Rt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rt(e){var t=zt(e,`string`);return $(t)==`symbol`?t:t+``}function zt(e,t){if($(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if($(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Bt=function(){try{return window.Quill}catch{return null}}(),Vt={name:`Editor`,extends:Pt,inheritAttrs:!1,emits:[`text-change`,`selection-change`,`load`],quill:null,watch:{modelValue:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},d_value:function(e,t){e!==t&&this.quill&&!this.quill.hasFocus()&&this.renderValue(e)},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,t={modules:It({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:`snow`,formats:this.formats,placeholder:this.placeholder};Bt?(this.quill=new Bt(this.$refs.editorElement,t),this.initQuill(),this.handleLoad()):f(()=>import(`./c-quill-CWTiZzTX.js`).then(function(n){n&&ne(e.$refs.editorElement)&&(n.default?e.quill=new n.default(e.$refs.editorElement,t):e.quill=new n(e.$refs.editorElement,t),e.initQuill())}),__vite__mapDeps([0,1]),import.meta.url).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){if(this.quill)if(e){var t=this.quill.clipboard.convert({html:e});this.quill.setContents(t)}else this.quill.setText(``)},initQuill:function(){var e=this;this.renderValue(this.d_value),this.quill.on(`text-change`,function(t,n,r){if(r===`user`){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();i===`<p><br></p>`&&(i=``),e.writeValue(i),e.$emit(`text-change`,{htmlValue:i,textValue:a,delta:t,source:r,instance:e.quill})}}),this.quill.on(`selection-change`,function(t,n,r){var i=e.quill.getSemanticHTML(),a=e.quill.getText().trim();e.$emit(`selection-change`,{htmlValue:i,textValue:a,range:t,oldRange:n,source:r,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule(`toolbar`)&&this.$emit(`load`,{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function Ht(e,t,n,r,i,o){return x(),E(`div`,a({class:e.cx(`root`)},e.ptmi(`root`)),[k(`div`,a({ref:`toolbarElement`,class:e.cx(`toolbar`)},e.ptm(`toolbar`)),[fe(e.$slots,`toolbar`,{},function(){return[k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`select`,a({class:`ql-header`,defaultValue:`0`},e.ptm(`header`)),[k(`option`,a({value:`1`},e.ptm(`option`)),`Heading`,16),k(`option`,a({value:`2`},e.ptm(`option`)),`Subheading`,16),k(`option`,a({value:`0`},e.ptm(`option`)),`Normal`,16)],16),k(`select`,a({class:`ql-font`},e.ptm(`font`)),[k(`option`,ee(_(e.ptm(`option`))),null,16),k(`option`,a({value:`serif`},e.ptm(`option`)),null,16),k(`option`,a({value:`monospace`},e.ptm(`option`)),null,16)],16)],16),k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`button`,a({class:`ql-bold`,type:`button`},e.ptm(`bold`)),null,16),k(`button`,a({class:`ql-italic`,type:`button`},e.ptm(`italic`)),null,16),k(`button`,a({class:`ql-underline`,type:`button`},e.ptm(`underline`)),null,16)],16),k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`select`,a({class:`ql-color`},e.ptm(`color`)),null,16),k(`select`,a({class:`ql-background`},e.ptm(`background`)),null,16)],16),k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`button`,a({class:`ql-list`,value:`ordered`,type:`button`},e.ptm(`list`)),null,16),k(`button`,a({class:`ql-list`,value:`bullet`,type:`button`},e.ptm(`list`)),null,16),k(`select`,a({class:`ql-align`},e.ptm(`select`)),[k(`option`,a({defaultValue:``},e.ptm(`option`)),null,16),k(`option`,a({value:`center`},e.ptm(`option`)),null,16),k(`option`,a({value:`right`},e.ptm(`option`)),null,16),k(`option`,a({value:`justify`},e.ptm(`option`)),null,16)],16)],16),k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`button`,a({class:`ql-link`,type:`button`},e.ptm(`link`)),null,16),k(`button`,a({class:`ql-image`,type:`button`},e.ptm(`image`)),null,16),k(`button`,a({class:`ql-code-block`,type:`button`},e.ptm(`codeBlock`)),null,16)],16),k(`span`,a({class:`ql-formats`},e.ptm(`formats`)),[k(`button`,a({class:`ql-clean`,type:`button`},e.ptm(`clean`)),null,16)],16)]})],16),k(`div`,a({ref:`editorElement`,class:e.cx(`content`),style:e.editorStyle},e.ptm(`content`)),null,16)],16)}Vt.render=Ht;var Ut=[`for`],Wt=D({__name:`RichTextEditor`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},required:{type:Boolean},editorProps:{},labelProps:{}},emits:[`update:modelValue`,`click`],setup(e,{emit:t}){let n=e,r=L({get:()=>n.modelValue||``,set:e=>{l(`update:modelValue`,e)}}),i=L(()=>n.label?n.label+(n.required?` *`:``):void 0),o=L(()=>n.name+(n.id?`.${n.id}`:``)),s=({instance:e})=>{e.setContents(e.clipboard.convert({html:r.value}))},l=t;return(t,n)=>(x(),E(`div`,null,[e.label?(x(),E(`label`,a({key:0,class:`block text-sm font-bold mb-2`,for:o.value},e.labelProps),A(i.value),17,Ut)):c(``,!0),T(F(Vt),a({id:o.value,placeholder:e.placeholder,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,onLoad:s},e.editorProps),null,16,[`id`,`placeholder`,`modelValue`]),e.error?(x(),d(Ue,{key:1,name:e.name,error:e.error},null,8,[`name`,`error`])):c(``,!0)]))}}),Gt={class:`p-4 bg-black bg-opacity-25 rounded-2xl`},Kt={class:`flex gap-3`},qt=D({__name:`StringListField`,props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=I(``),a=L({get:()=>n.modelValue.slice(),set:e=>{r(`update:modelValue`,e),i.value=``}});L(()=>n.name+(n.id?`.`+n.id:``));let o=(e,t)=>{let n=a.value.slice();n.splice(e,1,t),a.value=n},s=e=>{let t=a.value.slice();t.splice(e,1),a.value=t};return(t,n)=>(x(),E(`div`,Gt,[T(F(Ot.default),{modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,itemKey:`index`,handle:`.drag-handle`},{item:M(({element:t,index:r})=>[k(`div`,Kt,[n[1]||=k(`i`,{class:`drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),T(K,{class:`w-full`,id:`${e.name}.${r}`,name:e.name,"model-value":t,max:200,"delete-button":``,"onUpdate:modelValue":e=>o(r,e.toString()),"onUpdate:delete":e=>s(r)},null,8,[`id`,`name`,`model-value`,`onUpdate:modelValue`,`onUpdate:delete`])])]),_:1},8,[`modelValue`])]))}}),Jt=[`for`],Yt={class:`table w-full`},Xt={class:`table-header-group`},Zt={key:0,class:`table-row`},Qt={key:0,class:`table-cell`},$t={class:`table-cell`},en={class:`table-row-group`},tn={key:0,class:`table-cell`},nn={key:1,class:`table-cell`},rn={key:2,class:`table-cell`},an={class:`table-footer-group`},on={class:`table-row`},sn={key:0,class:`table-cell`},cn=D({__name:`TableField`,props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:[`update:modelValue`,`update:error`],setup(e,{emit:t}){let n=e,r=t,i=Be(Ve).greaterOrEqual(`md`),o=L({get:()=>pe(n.modelValue),set:e=>{r(`update:modelValue`,de(e))}}),s=L(()=>n.name+(n.id?`.`+n.id:``)),l=L(()=>i.value&&o.value[0]?.length<2),u=(e,t,n)=>{let i=[...o.value];i[e][t]=n,r(`update:modelValue`,de(i))},f=()=>{let e=o.value;if(e.length){let t=e[0];t.length?o.value=[...e,t.map(()=>``)]:o.value=[...e,[``]]}else o.value=[[``]]},p=e=>{let t=o.value;if(t.length){let n=t[0];t.splice(e,0,n.map(()=>``)),o.value=[...t]}},m=e=>{o.value.splice(e,1),o.value=o.value},h=()=>{o.value=o.value.map(e=>[...e,``])},g=e=>{let t=o.value;for(let n of t)n.splice(e,0,``);o.value=[...t]},_=e=>{o.value=o.value.map(t=>(t.splice(e,1),t))};return(t,n)=>(x(),E(`div`,null,[e.label?(x(),E(`label`,a({key:0,class:`block text-sm font-bold mb-2`,for:s.value},e.labelProps),A(e.label),17,Jt)):c(``,!0),k(`div`,Yt,[k(`div`,Xt,[o.value.length&&o.value[0].length>1?(x(),E(`div`,Zt,[o.value.length>1?(x(),E(`div`,Qt)):c(``,!0),(x(!0),E(O,null,v(o.value[0],(e,t)=>(x(),E(`div`,$t,[o.value.length&&o.value[0].length?(x(),d(U,{key:0,class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:l.value?`Remove column`:void 0,onClick:e=>_(t)},null,8,[`label`,`onClick`])):c(``,!0)]))),256))])):c(``,!0)]),k(`div`,en,[(x(!0),E(O,null,v(o.value,(t,n)=>(x(),E(`div`,{key:n,class:`table-row`},[o.value.length>1?(x(),E(`div`,tn,[T(U,{class:`md:text-start text-nowrap`,variant:`danger`,icon:`pi pi-times`,outlined:``,label:l.value?`Remove row`:void 0,onClick:e=>m(n)},null,8,[`label`,`onClick`])])):c(``,!0),(x(!0),E(O,null,v(t,(t,r)=>(x(),d(K,{key:r,class:`table-cell !m-0`,name:`${e.name}.${n}.${r}`,modelValue:t,placeholder:n===0||r===0?`header`:`cell`,"onUpdate:modelValue":e=>u(n,r,e.toString())},null,8,[`name`,`modelValue`,`placeholder`,`onUpdate:modelValue`]))),128)),n===0?(x(),E(`div`,nn,[T(U,{class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:l.value?`Add column`:void 0,onClick:h},null,8,[`label`])])):(x(),E(`div`,rn,[T(U,{class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:l.value?`Insert row`:void 0,onClick:e=>p(n)},null,8,[`label`,`onClick`])]))]))),128))]),k(`div`,an,[k(`div`,on,[o.value.length>1?(x(),E(`div`,sn)):c(``,!0),(x(!0),E(O,null,v(o.value[0],(e,t)=>(x(),E(`div`,{class:`table-cell`,key:t},[t===0?(x(),d(U,{key:0,class:`md:text-start text-nowrap`,variant:`green`,icon:`pi pi-plus`,outlined:``,label:l.value?`Add row`:void 0,onClick:f},null,8,[`label`])):(x(),d(U,{key:1,class:`md:text-start text-nowrap`,variant:`neutral`,icon:`pi pi-arrow-up-left`,outlined:``,label:l.value?`Insert row`:void 0,onClick:e=>g(t)},null,8,[`label`,`onClick`]))]))),128))])])])]))}}),ln={class:`w-full flex flex-col gap-3`},un={class:`flex gap-5`},dn={key:0},fn={key:1},pn={key:1,class:`w-full flex gap-3 justify-between`},mn={key:1,class:`w-full flex flex-col items-center gap-3 justify-center`},hn={key:5,class:`w-full flex gap-3`},gn={key:6},_n={class:`flex flex-col gap-1`},vn=D({__name:`BlogPostContentBlocksDialog`,props:Ae({id:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Ae([`delete`],[`update:modelValue`]),setup(e){let t=ge(e,`modelValue`),{blogPostOriginal:n}=N(Q()),r=I(`title`),i=I(`center`),a=I(!0),o=I(null),s=async()=>{t.value.push(h.createInstance(Te(),r.value,r.value,i.value)),a.value=!1,setTimeout(()=>{a.value=!0})},l=e=>{let n=t.value.findIndex(t=>t.id===e);t.value.splice(n,1)},u=e=>{o.value=o.value===e?null:e};return(f,p)=>{let m=ue(`BlogPostContentBlocksDialog`,!0);return x(),E(`div`,ln,[t.value.length?(x(),d(F(Ot.default),{key:0,ref:`draggableRef`,class:`flex flex-col gap-3`,modelValue:t.value,"onUpdate:modelValue":p[0]||=e=>t.value=e,itemKey:e=>e.id,handle:`.drag-handle`},{item:M(({element:t})=>[k(`div`,{class:g({"bg-neutral-500 bg-opacity-25 rounded-primary py-1 px-3 mt-3":o.value===t.id})},[t.isGroup()?(x(),d(F(H),{key:0,class:`w-full`,onTabOpen:F(P)},{default:M(()=>[T(F(B),{value:`0`},{default:M(()=>[T(F(V),{class:`drag-handle`},{default:M(()=>[k(`div`,un,[p[4]||=k(`i`,{class:`pi pi-arrows-v place-self-center hover:cursor-pointer`},null,-1),t.value.length&&typeof t.value[0].value==`string`?(x(),E(`p`,dn,A(t.value[0].value),1)):(x(),E(`p`,fn,A(t.getLabel()),1))])]),_:2},1024),T(F(z),null,{default:M(()=>[T(m,{id:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,onDelete:e=>l(t.id)},null,8,[`id`,`modelValue`,`onUpdate:modelValue`,`onDelete`])]),_:2},1024)]),_:2},1024)]),_:2},1032,[`onTabOpen`])):(x(),E(`div`,pn,[p[5]||=k(`i`,{class:`drag-handle pi pi-arrows-v mt-12 hover:cursor-pointer`},null,-1),t.isBoolean()?(x(),d(Z,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isNumber()?(x(),E(`div`,mn,[T(F(Fe),{class:`w-full`,name:t.id,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),k(`p`,null,A(t.value)+`%`,1)])):t.isString()?(x(),E(O,{key:2},[t.type===`title`?(x(),d(K,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`richtext`?(x(),d(Wt,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`table`?(x(),d(cn,{key:2,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`coverimage`||t.type===`image`?(x(),d(Qe,{key:3,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":F(n)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):c(``,!0)],64)):t.isStringList()?(x(),E(O,{key:3},[t.type===`bulletlist`?(x(),d(qt,{key:0,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.type===`imageslider`?(x(),d(Mt,{key:1,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,"blog-post":F(n)},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`,`blog-post`])):c(``,!0)],64)):t.isDate()?(x(),d(Ze,{key:4,class:`w-full`,name:t.id,label:t.getLabel(),modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,[`name`,`label`,`modelValue`,`onUpdate:modelValue`])):t.isButton()?(x(),E(`div`,hn,[T(K,{class:`w-1/2`,name:`${t.id}-title`,label:`Knop titel`,modelValue:t.value.title,"onUpdate:modelValue":e=>t.value.title=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(K,{class:`w-1/2`,name:`${t.id}-url`,label:`Knop link`,modelValue:t.value.url,"onUpdate:modelValue":e=>t.value.url=e},null,8,[`name`,`modelValue`,`onUpdate:modelValue`]),T(X,{class:`w-full md:w-1/2`,name:`${t.id}-variant`,label:`Knop variant`,modelValue:t.value.variant,"onUpdate:modelValue":e=>t.value.variant=e,options:[{value:`primary`,label:`Primair`},{value:`secondary`,label:`Secundair`},{value:`tertiary`,label:`Tertiair`}]},null,8,[`name`,`modelValue`,`onUpdate:modelValue`])])):(x(),E(`p`,gn,A(t.getLabel()),1)),k(`div`,_n,[T(Ye,{onClick:e=>u(t.id)},null,8,[`onClick`]),T(G,{onClick:e=>l(t.id)},null,8,[`onClick`]),Array.isArray(t.value)?(x(),d(Xe,{key:0,onClick:e=>t.value.push(``)},null,8,[`onClick`])):c(``,!0)])])),o.value===t.id?(x(),d(X,{key:2,class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,"model-value":t.alignment??`center`,"onUpdate:modelValue":e=>t.alignment=e,options:F(se)},null,8,[`name`,`model-value`,`onUpdate:modelValue`,`options`])):c(``,!0)],2)]),_:1},8,[`modelValue`,`itemKey`])):c(``,!0),a.value?(x(),d(F(H),{key:1,onTabOpen:F(P)},{default:M(()=>[T(F(B),{value:`0`},{default:M(()=>[T(F(V),{"pt:root":`!bg-green-500 !bg-opacity-25 !border-none`},{default:M(()=>[...p[6]||=[w(` Voeg content toe `,-1)]]),_:1}),T(F(z),{"pt:root":`bg-green-500 bg-opacity-25 rounded-b-2xl`,"pt:content":`flex flex-col justify-center items-center gap-3`},{default:M(()=>[T(X,{class:`w-full md:w-1/2`,name:`${e.id}.contentType`,label:`Content type`,modelValue:r.value,"onUpdate:modelValue":p[1]||=e=>r.value=e,options:Object.entries(F(ae)).map(([e,t])=>({value:e,label:t}))},null,8,[`name`,`modelValue`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`${e.id}.contentAlignment`,label:`Content uitlijning`,modelValue:i.value,"onUpdate:modelValue":p[2]||=e=>i.value=e,options:F(se)},null,8,[`name`,`modelValue`,`options`]),T(U,{class:`w-full md:w-1/2`,variant:`green`,label:`Voeg content toe`,onClick:s}),e.id?(x(),d(U,{key:0,class:`w-full md:w-1/2 bg-opacity-75`,variant:`danger`,label:`Verwijder groep`,onClick:p[3]||=e=>f.$emit(`delete`)})):c(``,!0)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):c(``,!0)])}}}),yn=D({__name:`BlogPostContentDialog`,emits:[`update:selected`,`error`],setup(e,{expose:t,emit:n}){let r=n,{blogPostMutation:i}=N(Q()),a=J(L(()=>({title:{required:Y,minLength:Ke(3),maxLength:We(50)}})),i,{$autoDirty:!0});return t({test:async()=>{r(`error`,!await a.value.$validate())}}),(e,t)=>(x(),E(O,null,[T(K,{class:`w-full`,name:`title`,label:`Title`,placeholder:`Amazing Post`,modelValue:F(i).title,"onUpdate:modelValue":t[0]||=e=>F(i).title=e,error:F(a).title.$error?F(q)(F(a).title):``,required:``,"min-length":3,"max-length":50},null,8,[`modelValue`,`error`]),T(vn,{modelValue:F(i).content,"onUpdate:modelValue":t[1]||=e=>F(i).content=e},null,8,[`modelValue`])],64))}}),bn=D({__name:`BlogPostSettingsDialog`,emits:[`error`],setup(e,{expose:t,emit:n}){let r=n,i=me(),{blogPostMutation:a}=N(Q()),{allowedPublicUsers:o}=i,{mappedUsers:s}=et(),c=L({get(){return!!a.value.datePinned},set(e){a.value.datePinned=e?new Date:null}}),l=I([]),u=Ge.withMessage(`Invalid user ID's`,e=>!e.length||e.length===l.value.length),d=J(L(()=>({allowedUserIds:{validAllowedUserIds:u}})),a,{$autoDirty:!0});return we(()=>a.value.allowedUserIds,async e=>{l.value=await o(e)},{immediate:!0}),t({test:async()=>{r(`error`,!await d.value.$validate())}}),(e,t)=>(x(),E(O,null,[T(X,{class:`w-full md:w-1/2`,name:`allowedUserIds`,label:`Toegestane gebruikers`,placeholder:`Dit bericht is openbaar`,modelValue:F(a).allowedUserIds,"onUpdate:modelValue":t[0]||=e=>F(a).allowedUserIds=e,error:F(d).allowedUserIds.$error?F(q)(F(d).allowedUserIds):``,options:F(s),multiple:``},null,8,[`modelValue`,`error`,`options`]),T(Z,{class:`w-full md:w-1/2`,name:`pinned`,label:`Vastgemaakt`,modelValue:c.value,"onUpdate:modelValue":t[1]||=e=>c.value=e},null,8,[`modelValue`]),T(Z,{class:`w-full md:w-1/2`,name:`locked`,label:`Gesloten voor reacties`,modelValue:F(a).locked,"onUpdate:modelValue":t[2]||=e=>F(a).locked=e},null,8,[`modelValue`]),T(Z,{class:`w-full md:w-1/2`,name:`archived`,label:`Gearchiveerd`,modelValue:F(a).archived,"onUpdate:modelValue":t[3]||=e=>F(a).archived=e},null,8,[`modelValue`])],64))}}),xn=D({__name:`BlogPostStylingDialog`,emits:[`error`],setup(e,{expose:n,emit:r}){let i=r,{blogPostMutation:a}=N(Q()),o=L(()=>Ee(t.find(e=>e.value===a.value.colorPrimary))),s=J(L(()=>({colorPrimary:{required:Y},colorSecondary:{required:Y},colorTertiary:{required:Y},opacityPrimary:{required:Y},opacitySecondary:{required:Y},opacityTertiary:{required:Y}})),a,{$autoDirty:!0});return n({test:async()=>{i(`error`,!await s.value.$validate())}}),(e,n)=>(x(),E(O,null,[T(X,{class:`w-full md:w-1/2`,name:`colorPrimary`,label:`Primary Style`,modelValue:F(a).colorPrimary,"onUpdate:modelValue":n[0]||=e=>F(a).colorPrimary=e,error:F(s).colorPrimary.$error?F(q)(F(s).colorPrimary):``,options:F(t),required:``},null,8,[`modelValue`,`error`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`opacityPrimary`,label:`Primary Opacity`,modelValue:F(a).opacityPrimary,"onUpdate:modelValue":n[1]||=e=>F(a).opacityPrimary=e,error:F(s).opacityPrimary.$error?F(q)(F(s).opacityPrimary):``,options:F(te),required:``},null,8,[`modelValue`,`error`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`colorSecondary`,label:`Secondary Style`,modelValue:F(a).colorSecondary,"onUpdate:modelValue":n[2]||=e=>F(a).colorSecondary=e,error:F(s).colorSecondary.$error?F(q)(F(s).colorSecondary):``,options:o.value,required:``},null,8,[`modelValue`,`error`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`opacitySecondary`,label:`Secondary Opacity`,modelValue:F(a).opacitySecondary,"onUpdate:modelValue":n[3]||=e=>F(a).opacitySecondary=e,error:F(s).opacitySecondary.$error?F(q)(F(s).opacitySecondary):``,options:F(te),required:``},null,8,[`modelValue`,`error`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`colorTertiary`,label:`Tertiary Style`,modelValue:F(a).colorTertiary,"onUpdate:modelValue":n[4]||=e=>F(a).colorTertiary=e,error:F(s).colorTertiary.$error?F(q)(F(s).colorTertiary):``,options:F(xe),required:``},null,8,[`modelValue`,`error`,`options`]),T(X,{class:`w-full md:w-1/2`,name:`opacityTertiary`,label:`Tertiary Opacity`,modelValue:F(a).opacityTertiary,"onUpdate:modelValue":n[5]||=e=>F(a).opacityTertiary=e,error:F(s).opacityTertiary.$error?F(q)(F(s).opacityTertiary):``,options:F(te),required:``},null,8,[`modelValue`,`error`,`options`])],64))}}),Sn={ref:`dialog`,class:`pt-6 mb-4 xl:px-16`},Cn=D({__name:`BlogPostDialog`,emits:[`scroll-to-updated`],setup(e,{emit:t}){let n=t;l();let r=C(),i=ie(),a=Q(),{isBlogPostsMutationLoading:o}=N(r),{isOpen:s,blogPostOriginal:u,blogPostMutation:f,hasChanges:p}=N(a),m=I(),h=I(),g=I(),_=I(!1),v=I(!1),y=I(!1),b=L(()=>!!u.value?.allowedUserIds?.length&&!f.value.allowedUserIds?.length||!u.value?.allowedUserIds?.length&&!!f.value.allowedUserIds?.length),S=L(()=>be(u.value)),ee=async()=>{await Promise.all([m.value.test(),h.value.test(),g.value.test()]),!(_.value||v.value||y.value)&&(u.value?b.value?(a.isOpen=!1,await r.toggleBlogPostVisibility(u.value,f.value.allowedUserIds.length?`private`:`public`)&&(a.close(),Ce.success(`Zichtbaarheid van bericht succesvol bijgewerkt`),n(`scroll-to-updated`,f.value.id))):await r.updateBlogPost(f.value,S.value)&&(Ce.success(`Bericht succesvol bijgewerkt`),a.close(),n(`scroll-to-updated`,f.value.id)):await r.createBlogPost(f.value)&&(a.close(),n(`scroll-to-updated`,f.value.id)))},E=async()=>{await i.deleteFilesOfBlogPost(f.value,u.value??void 0),a.close()};return(e,t)=>(x(),d(He,{isOpen:F(s),title:F(u)?`Bericht bijwerken`:`Bericht maken`,description:F(u)?`Werk dit bericht bij`:`Maak een nieuw bericht`,"confirm-text":F(u)?`Bijwerken`:`Maken`,"confirm-loading":F(o),"confirm-props":{disabled:!F(p)},onConfirm:ee,onCancel:E},{default:M(()=>[k(`form`,Sn,[F(s)?(x(),d(F(H),{key:0,"active-index":0,onTabOpen:F(P)},{default:M(()=>[T(F(B),{value:`content`},{default:M(()=>[T(F(V),null,{default:M(()=>[...t[3]||=[w(` Content `,-1)]]),_:1}),T(F(z),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:M(()=>[T(yn,{ref_key:`content`,ref:m,onError:t[0]||=e=>_.value=e},null,512)]),_:1})]),_:1}),T(F(B),{value:`styling`},{default:M(()=>[T(F(V),null,{default:M(()=>[...t[4]||=[w(` Styling `,-1)]]),_:1}),T(F(z),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:M(()=>[T(xn,{ref_key:`styling`,ref:h,onError:t[1]||=e=>v.value=e},null,512)]),_:1})]),_:1}),T(F(B),{value:`settings`},{default:M(()=>[T(F(V),null,{default:M(()=>[...t[5]||=[w(` Settings `,-1)]]),_:1}),T(F(z),{"pt:content":`flex flex-col justify-center items-center gap-3`},{default:M(()=>[T(bn,{ref_key:`settings`,ref:g,onError:t[2]||=e=>y.value=e},null,512)]),_:1})]),_:1})]),_:1},8,[`onTabOpen`])):c(``,!0)],512)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-text`,`confirm-loading`,`confirm-props`]))}});export{Q as a,St as i,Dt as n,nt as o,wt as r,Cn as t};