import{e as L,l as n,m as y,H as V,E as B,r as R,c as u,aj as X,ak as Z,al as _,am as ee,an as ge,o as Y,p as I,k as c,n as P,G as A,t as f,i as z,s as E,a4 as ve,ao as fe,ap as te,aq as ae,ar as O,as as de,h as F,g as ce,q as k,at as me,D as x,R as W,C as Q,a as ye,J as be,w as U,O as M,au as he,av as we,aa as ke,aw as $e,B as Ce,ax as Te,x as Se,z as J,y as j,ay as ne,ae as oe,U as Ie,f as Be,A as De,Y as Pe,K as xe,L as Re}from"../bundle.js";import{_ as K,a as q,u as Ue,b as Ee}from"./c-Bubble.vue_vue_type_script_setup_true_lang-iHAaGDxw.js";import{_ as Le}from"./c-TextField.vue_vue_type_script_setup_true_lang-BLqTl7i8.js";import{R as Ae}from"./c-validation-DokkLKHB.js";import{_ as Me,a as je,s as He}from"./c-Image.vue_vue_type_script_setup_true_lang-DxYsW8Nr.js";const N=L({__name:"CountdownNumber",props:{time:{},animate:{type:Boolean},direction:{}},setup(o){return(e,s)=>(n(),y("span",{class:B({"animation ease-in animate-timer-up":e.animate&&e.direction==="up","animation ease-in animate-timer-down":e.animate&&e.direction==="down"})},V(e.time),3))}}),Oe=(o,e)=>{const s=R(0),m=D=>(e==="up"?D=Math.abs(D):D=Math.max(0,D),Math.floor(D)),g=u(()=>m(s.value/X)),v=u(()=>s.value%X),b=u(()=>m(v.value/Z)),$=u(()=>v.value%Z),w=u(()=>m($.value/_)),C=u(()=>$.value%_),l=u(()=>m(C.value/ee)),p=u(()=>C.value%ee),r=u(()=>m(p.value/ge)),i=u(()=>g.value===0&&b.value===0&&w.value===0&&l.value===0&&r.value===0),T=u(()=>g.value>0),t=u(()=>g.value>0||b.value>0||i.value),d=u(()=>g.value>0||b.value>0||w.value>0||i.value),h=u(()=>g.value>0||b.value>0||w.value>0||l.value>0||i.value),a=u(()=>g.value>0||b.value>0||w.value>0||l.value>0||r.value>0||i.value),S=()=>{s.value=o-new Date().getTime(),setTimeout(S,1e3)};return Y(()=>{S()}),{years:g,days:b,hours:w,minutes:l,seconds:r,showYears:T,showDays:t,showHours:d,showMinutes:h,showSeconds:a}},Ke=(o,e,s,m,g,v,b)=>{const $=R(0),w=u(()=>e.value===0&&s.value===0&&m.value===0&&g.value===0&&v.value===0),C=u(()=>b==="down"?s.value===364:s.value===0),l=u(()=>b==="down"?m.value===23:m.value===0),p=u(()=>b==="down"?g.value===59:g.value===0),r=u(()=>b==="down"?v.value===59:v.value===0),i=u(()=>e.value>=0&&C.value&&l.value&&p.value&&r.value),T=u(()=>s.value>=0&&l.value&&p.value&&r.value),t=u(()=>m.value>=0&&p.value&&r.value),d=u(()=>g.value>=0&&r.value),h=u(()=>!w.value),a=()=>{$.value=o-new Date().getTime(),setTimeout(a,1e3)};return Y(()=>{a()}),{animateYears:i,animateDays:T,animateHours:t,animateMinutes:d,animateSeconds:h}},Ne={class:"grid grid-flow-col text-center"},We={key:0,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Ve={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},qe={key:1,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Ye={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ze={key:2,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Fe={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},Ge={key:3,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Qe={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},Je={key:4,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},Xe={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},H=L({__name:"Countdown",props:{time:{},direction:{},alignment:{}},setup(o){const e=o,{years:s,days:m,hours:g,minutes:v,seconds:b,showYears:$,showDays:w,showHours:C,showMinutes:l,showSeconds:p}=Oe(e.time,e.direction),{animateYears:r,animateDays:i,animateHours:T,animateMinutes:t,animateSeconds:d}=Ke(e.time,s,m,g,v,b,e.direction);return(h,a)=>(n(),y("div",{class:B({block:!h.alignment,flex:!!h.alignment,"justify-start":h.alignment==="left","justify-center":h.alignment==="center","justify-end":h.alignment==="right"})},[I("div",Ne,[c($)?(n(),y("div",We,[I("span",Ve,[P(N,{time:c(s),animate:c(r),direction:h.direction},null,8,["time","animate","direction"])]),a[0]||(a[0]=A(" years "))])):f("",!0),c(w)?(n(),y("div",qe,[I("span",Ye,[P(N,{time:c(m),animate:c(i),direction:h.direction},null,8,["time","animate","direction"])]),a[1]||(a[1]=A(" days "))])):f("",!0),c(C)?(n(),y("div",ze,[I("span",Fe,[P(N,{time:c(g),animate:c(T),direction:h.direction},null,8,["time","animate","direction"])]),a[2]||(a[2]=A(" hrs "))])):f("",!0),c(l)?(n(),y("div",Ge,[I("span",Qe,[P(N,{time:c(v),animate:c(t),direction:h.direction},null,8,["time","animate","direction"])]),a[3]||(a[3]=A(" mins "))])):f("",!0),c(p)?(n(),y("div",Je,[I("span",Xe,[P(N,{time:c(b),animate:c(d),direction:h.direction},null,8,["time","animate","direction"])]),a[4]||(a[4]=A(" secs "))])):f("",!0)])],2))}}),Ze=o=>{const e=z(),{collections:s,fetchBlogPost:m,checkBlogPostForUnreadReactions:g}=e,{blogPosts:v,blogReactions:b,isBlogPostDatabaseActionActive:$}=E(e);let w=[];const C=R(),l=p=>{p.metadata.hasPendingWrites||$.value||(clearTimeout(C.value),C.value=setTimeout(async()=>{await m(o.id,void 0,{loadingIndicator:!1}),g(v.value.previousData.single,!0)},200))};Y(async()=>{b.value.unread=b.value.unread.filter(h=>h.postId!==o.id);const p=ve(o),r=s.blogPosts(p.isPrivate),i=s.blogReactions(p.isPrivate),T=fe(r,o.id),t=te(r,ae("id","==",o.id)),d=te(i,ae("post","==",T));w.push(O(t,l)),w.push(O(d,l))}),de(()=>{clearTimeout(C.value),w.forEach(p=>{p()})})},St=()=>{const o=z(),e=F(),{visibleBlogPosts:s,blogReactions:m,isBlogPostDatabaseActionActive:g}=E(o),{firebaseUser:v,isLoggedIn:b}=E(e),{collections:$,fetchBlogPosts:w,checkBlogPostsForUnreadReactions:C}=o;let l=[];const p=R(),r=i=>{i.metadata.hasPendingWrites||g.value||(clearTimeout(p.value),p.value=setTimeout(async()=>{var T;await w((T=v.value)==null?void 0:T.uid,{amount:s.value.length,loadingIndicator:!1}),C()},200))};Y(()=>{m.value.unread=[],l.push(O($.blogPosts(!1),r)),l.push(O($.blogReactions(!1),r)),b.value&&(l.push(O($.blogPosts(!0),r)),l.push(O($.blogReactions(!0),r)))}),de(()=>{clearTimeout(p.value),l.forEach(i=>{i()})})},_e={class:"flex flex-col gap-2"},se=L({__name:"BlogReaction",props:{post:{},reaction:{}},setup(o){const e=o,s=ce(),m=F(),g=z(),{routeLoading:v,routeLoadingId:b}=E(s),{firebaseUser:$,isLoggedIn:w,isOwner:C}=E(m),{blogReactions:l}=E(g),{deleteBlogReaction:p}=g,r=u(()=>l.value.unread.find(d=>d.id===e.reaction.id)),i=u(()=>{const d=[];return r.value&&d.push({value:"Unread",severity:"warning",rounded:!1}),d}),T=u(()=>$.value&&e.reaction.user.id===$.value.uid||C.value),t=()=>{l.value.unread=l.value.unread.filter(d=>d.id!==e.reaction.id)};return(d,h)=>(n(),k(q,{id:e.reaction.id,class:B(["p-5 w-full md:w-3/4 xl:w-2/3",e.post.colorTertiary,e.post.opacityTertiary||"bg-opacity-50",{"border border-yellow-400":r.value},"!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},avatarProps:{class:{"animate-spin":c(v)===c(W).USER_DETAILS&&c(b)===e.reaction.user.id}},title:e.reaction.user.displayName||"Unknown user",subTitle:c(Q)(new Date(e.reaction.date)),avatar:e.reaction.user.avatar,route:c(w)?{name:c(W).USER_DETAILS,params:{userId:e.reaction.user.id}}:void 0,avatarRoute:c(w)?{name:c(W).USER_DETAILS,params:{userId:e.reaction.user.id}}:void 0,description:e.reaction.message,tags:i.value},me({_:2},[T.value||r.value?{name:"right",fn:x(()=>[I("div",_e,[T.value&&!e.post.locked?(n(),k(K,{key:0,type:"danger",outlined:"",class:"h-fit",label:"Delete",disabled:c(l).isDatabaseDeletionActive,onClick:h[0]||(h[0]=a=>c(p)(e.reaction.id,e.post))},null,8,["disabled"])):f("",!0),r.value?(n(),k(K,{key:1,type:"tertiary",outlined:"",class:"h-fit",label:"Mark as read",onClick:t})):f("",!0)])]),key:"0"}:void 0]),1032,["id","class","avatarProps","title","subTitle","avatar","route","avatarRoute","description","tags"]))}}),et={class:"grid justify-items-center p-5 gap-5"},tt=L({__name:"BlogReactions",props:{post:{}},setup(o){const e=o,s=ce(),m=F(),g=z(),{content:v}=E(s),{firebaseUser:b,isLoggedIn:$}=E(m),{blogReactions:w}=E(g),{createBlogReaction:C}=g,l=R(),p=R(!1),r=ye({reaction:{value:"",error:""}}),i=u(()=>[...e.post.reactions].reverse()),T=u(()=>i.value.filter((a,S)=>S<3)),t=u(()=>i.value.filter((a,S)=>S>=3)),d=u(()=>e.post.locked||!$.value||w.value.isDatabaseCreationActive),h=async()=>{if(!w.value.isDatabaseCreationActive){if(await l.value.test(),!r.reaction.error&&b.value){const a=r.reaction.value;r.reaction.value="Replying...";const S=await C(e.post,{userId:b.value.uid,postId:e.post.id,message:a,date:new Date});r.reaction.value=S?"":a}$e()}};return(a,S)=>(n(),y("form",{action:"",onSubmit:ke(h,["prevent"])},[I("div",et,[!c($)||a.post.reactions.filter(D=>D.user.id===c(b).uid).length<20?(n(),k(q,{key:0,class:B(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",a.post.colorTertiary||"bg-secondary-700",a.post.opacityTertiary||"bg-opacity-25"])},{default:x(()=>[P(Le,{class:"w-5/6",id:a.post.id,inputProps:{class:["rounded-primary border-none !placeholder-gray-300",a.post.colorSecondary||a.post.colorPrimary||"bg-secondary-600",a.post.opacitySecondary||"!bg-opacity-20",d.value?{"!bg-gray-900 !bg-opacity-50":!c(w).isDatabaseCreationActive}:"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!c($)&&!a.post.locked}],disabled:d.value},ref_key:"reaction",ref:l,name:"reaction",placeholder:a.post.locked?"Locked for comments":c($)?"Reply":c(v).blogLoginGuest,modelValue:r.reaction.value,"onUpdate:modelValue":S[0]||(S[0]=D=>r.reaction.value=D),error:r.reaction.error,"onUpdate:error":S[1]||(S[1]=D=>r.reaction.error=D),rules:[c(Ae).Required],onClick:S[2]||(S[2]=()=>!c($)&&!a.post.locked?c(be).push({name:c(W).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error","rules"])]),_:1},8,["class"])):f("",!0),(n(!0),y(U,null,M(T.value,D=>(n(),k(se,{post:a.post,reaction:D},null,8,["post","reaction"]))),256)),(n(!0),y(U,null,M(t.value,D=>he((n(),k(se,{post:a.post,reaction:D},null,8,["post","reaction"])),[[we,p.value]])),256)),a.post.reactions.length>3?(n(),k(K,{key:1,type:"primary",outlined:"",icon:p.value?"pi pi-angle-up":"pi pi-angle-down",label:p.value?"Hide older reactions":"View older reactions",onClick:S[3]||(S[3]=D=>p.value=!p.value)},null,8,["icon","label"])):f("",!0)])],32))}});var at={root:function(e){var s=e.props;return["p-chip p-component",{"p-chip-image":s.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},nt=Ce.extend({name:"chip",classes:at}),ot={name:"BaseChip",extends:Se,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:nt,provide:function(){return{$parentInstance:this}}},pe={name:"Chip",extends:ot,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:Te}},st=["aria-label"],lt=["src"];function it(o,e,s,m,g,v){return g.visible?(n(),y("div",j({key:0,class:o.cx("root"),"aria-label":o.label},o.ptmi("root")),[J(o.$slots,"default",{},function(){return[o.image?(n(),y("img",j({key:0,src:o.image},o.ptm("image")),null,16,lt)):o.$slots.icon?(n(),k(ne(o.$slots.icon),j({key:1,class:o.cx("icon")},o.ptm("icon")),null,16,["class"])):o.icon?(n(),y("span",j({key:2,class:[o.cx("icon"),o.icon]},o.ptm("icon")),null,16)):f("",!0),o.label?(n(),y("div",j({key:3,class:o.cx("label")},o.ptm("label")),V(o.label),17)):f("",!0)]}),o.removable?J(o.$slots,"removeicon",{key:0,onClick:v.close,onKeydown:v.onKeydown,removeCallback:v.close,keydownCallback:v.onKeydown},function(){return[(n(),k(ne(o.removeIcon?"span":"TimesCircleIcon"),j({tabindex:"0",class:[o.cx("removeIcon"),o.removeIcon],onClick:v.close,onKeydown:v.onKeydown},o.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):f("",!0)],16,st)):f("",!0)}pe.render=it;const rt=L({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(o){return(e,s)=>(n(),y("div",null,[I("div",{class:B({block:!e.alignment,flex:!!e.alignment,"justify-start":e.alignment==="left","justify-center":e.alignment==="center","justify-end":e.alignment==="right"})},[I("ul",{class:B(["list-disc",{"ms-5":e.alignment==="left"}])},[(n(!0),y(U,null,M(e.bullets,m=>(n(),y("li",null,V(m),1))),256))],2)],2)]))}}),ut={class:"ql-editor no-input"},dt=["innerHTML"],G=L({__name:"BlogPostDescription",props:{description:{}},setup(o){return(e,s)=>(n(),y("div",ut,[I("div",{innerHTML:e.description},null,8,dt)]))}}),le=L({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},maxHeight:{},maxWidth:{},alignment:{},thumb:{type:Boolean}},setup(o){const e=o,s=Ue(Ee),m=s.greaterOrEqual("sm"),g=s.greaterOrEqual("md"),v=R(0),b=R(0),$=u(()=>v.value>b.value),w=u(()=>v.value>b.value*1.5),C=u(()=>b.value>v.value),l=u(()=>b.value>v.value*1.5),p=u(()=>g.value?"60%":m.value?"80%":e.maxHeight?e.maxHeight:$.value&&l.value?"80%":"100%"),r=u(()=>g.value?"60%":m.value?"80%":e.maxWidth?e.maxWidth:C.value&&w.value?"80%":"100%");return Y(()=>{const i=new Image;i.src=e.coverImageUrl,i.onload=()=>{v.value=i.height,b.value=i.width}}),(i,T)=>{var t,d;return n(),y("div",{class:B({flex:!0,"justify-start":i.alignment==="left","justify-center":i.alignment===void 0||i.alignment==="center","justify-end":i.alignment==="right"})},[P(q,{class:B(["!p-0 md:!p-3 my-5",i.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",(t=i.post)==null?void 0:t.colorTertiary,((d=i.post)==null?void 0:d.opacityTertiary)||"bg-opacity-50"]),style:oe({maxHeight:p.value,maxWidth:r.value})},{default:x(()=>[i.thumb?(n(),y("div",{key:0,class:"h-[20vh] inset-0 rounded-primary",style:oe({backgroundImage:`url(${i.coverImageUrl})`,backgroundSize:"cover"})},null,4)):(n(),k(Me,{key:1,src:i.coverImageUrl,"image-class":"cover-image md:rounded-primary"},null,8,["src"]))]),_:1},8,["class","style"])],2)}}}),ct={class:"flex flex-wrap justify-end h-fit gap-3"},ie=L({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(o){return(e,s)=>(n(),y("div",ct,[P(K,{class:"min-w-80",label:"Edit",onClick:s[0]||(s[0]=m=>e.$emit("editClicked"))}),P(K,{class:"min-w-80",type:"danger",outlined:"",label:"Delete",onClick:s[1]||(s[1]=m=>e.$emit("deleteClicked"))})]))}}),re=L({__name:"BlogPostSectionTitle",props:{class:{},alignment:{},isExpandable:{type:Boolean},isExpanded:{type:Boolean},isSubTitle:{type:Boolean}},emits:["click"],setup(o){const e=o;return(s,m)=>(n(),y("div",{class:B(["font-bold",{"text-lg md:text-2xl":!s.isSubTitle},{"hover:underline cursor-pointer":s.isExpandable},e.class])},[I("div",{class:B({block:!s.alignment,flex:!!s.alignment,"justify-start":s.alignment==="left","justify-center":s.alignment==="center","justify-end":s.alignment==="right"})},[I("span",{class:"flex",onClick:m[0]||(m[0]=g=>s.$emit("click"))},[s.isExpandable&&s.alignment==="right"?(n(),y("i",{key:0,class:B(["pi pi-angle-down animation",{"rotate-180":s.isExpanded}])},null,2)):f("",!0),J(s.$slots,"default"),s.isExpandable&&(s.alignment==="left"||s.alignment==="center")?(n(),y("i",{key:1,class:B(["pi pi-angle-down animation",{"rotate-180":s.isExpanded}])},null,2)):f("",!0)])],2)],2))}}),mt={class:"table-auto min-w-full text-left"},pt={key:0,class:"border border-white"},gt=["onClick","innerHTML"],ue=L({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(o){const e=o,s=R(0),m=R("asc"),g=u(()=>Ie(e.tableData)),v=R(g.value.slice(1)),b=(l,p)=>{l===0&&(s.value=p,$(),w())},$=()=>{m.value==="asc"?m.value="desc":m.value="asc"},w=()=>{const l=s.value;v.value=v.value.sort((p,r)=>m.value==="asc"?r[l].localeCompare(p[l]):p[l].localeCompare(r[l]))},C=l=>{const p=/(https?:\/\/[^\s]+)/g;return l.replace(p,r=>{let i=r.replace("http://","").replace("https://","").replace("www.","");return i.length>15&&(i=i.substring(0,15)+"..."),`<a href="${r}" target="_blank">${i}</a>`})};return(l,p)=>(n(),y("div",{class:B(["my-8 flex max-w-[65vw] md:max-w-[50vw] lg:max-w-[60vw] overflow-x-auto",{"justify-start":l.alignment==="left","justify-center":l.alignment==="center"||!l.alignment,"justify-end":l.alignment==="right"}])},[I("table",mt,[I("tbody",null,[(n(!0),y(U,null,M([g.value[0],...v.value],(r,i)=>(n(),y(U,{key:i},[r.every(T=>!T)?f("",!0):(n(),y("tr",pt,[(n(!0),y(U,null,M(r,(T,t)=>(n(),y(U,{key:t},[t!==0||!g.value.every(d=>!d.length||!d[0])?(n(),y("td",{key:0,class:B(["px-2 border border-white",{"font-bold":i===0||t===0},{"cursor-pointer underline":i===0},{"text-left":l.alignment==="left"||!l.alignment,"text-center":l.alignment==="center","text-right":l.alignment==="right"}]),onClick:d=>b(i,t),innerHTML:C(T)},null,10,gt)):f("",!0)],64))),128))]))],64))),128))])])],2))}}),vt={class:"flex gap-3"},ft={class:"flex justify-between h-fit mt-2 gap-2"},yt={class:"flex flex-wrap gap-3"},bt={class:"w-full"},ht={class:"w-full"},It=L({__name:"BlogPost",props:{post:{},withoutMutation:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(o){const e=o,s=Be(),m=F(),g=De(),{publicUsers:v}=E(g),{firebaseUser:b,isOwner:$}=E(m);s.currentRoute.value.name!==W.BLOG&&Ze(e.post);const w=R(e.post.archived),C=u(()=>{var t;return(t=e.post.allowedUserIds)!=null&&t.length?v.value.filter(d=>{var h;return(h=e.post.allowedUserIds)==null?void 0:h.includes(d.id)}):[]}),l=u(()=>{const t=Q(new Date(e.post.date)),d=e.post.dateUpdated?Q(new Date(e.post.dateUpdated)):"";return t+` - updated ${d}`}),p=u(()=>{const t=[];return e.post.datePinned&&t.push({value:"Pinned",severity:"success",rounded:!1}),e.post.locked&&t.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),e.post.archived&&t.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),t}),r=u(()=>e.post.sections.map(t=>({...t,isExpandable:i(t)}))),i=t=>!!t.description||!!t.coverImageUrl||!!t.bullets.length||!!t.table,T=()=>{const t=document.createElement("textarea"),{protocol:d,hostname:h,port:a}=window.location,S=`${d}//${h}`+(h==="localhost"?`:${a}`:"");t.value=`${S}#${xe.BLOG.path}/${e.post.id}`,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),Re.success("Copied link!")};return(t,d)=>(n(),k(q,{id:t.post.id,class:B([{"min-h-[90vh]":!w.value},"border-4 border-transparent","!rounded-primary",t.post.colorSecondary||t.post.colorPrimary||"bg-secondary-900",t.post.opacitySecondary||"bg-opacity-50"]),title:t.post.title,subTitle:l.value,tags:p.value,loading:t.post.loading,isCollapsed:w.value,clickable:"",onClick:d[4]||(d[4]=h=>w.value=!w.value)},{right:x(()=>[I("div",vt,[w.value?c($)&&!t.withoutMutation?(n(),k(ie,{key:1,onEditClicked:d[0]||(d[0]=h=>t.$emit("editClicked")),onDeleteClicked:d[1]||(d[1]=h=>t.$emit("deleteClicked"))})):f("",!0):(n(),k(K,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:T}))])]),default:x(()=>{var h;return[I("div",ft,[I("div",yt,[(n(!0),y(U,null,M(C.value,a=>{var S;return n(),k(c(pe),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:a.id===((S=c(b))==null?void 0:S.uid)?"You":a.displayName,rounded:""},null,8,["label"])}),256))]),c($)&&!t.withoutMutation?(n(),y("div",{key:0,class:B(["flex justify-end ms-5",(h=t.post.allowedUserIds)!=null&&h.length?"flex-col md:flex-row":"flex-row"])},[P(ie,{onEditClicked:d[2]||(d[2]=a=>t.$emit("editClicked")),onDeleteClicked:d[3]||(d[3]=a=>t.$emit("deleteClicked"))})],2)):f("",!0)]),P(q,{class:B(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5",t.post.colorPrimary,t.post.opacityPrimary||"bg-opacity-50"])},{default:x(()=>[I("div",{class:B(["flex relative",t.post.countdown||t.post.alignment==="center"?"flex justify-between":""])},[I("div",bt,[t.post.countdown?(n(),k(H,{key:0,time:new Date(t.post.countdown).getTime(),direction:"down",alignment:t.post.alignment},null,8,["time","alignment"])):f("",!0),t.post.timer?(n(),k(H,{key:1,time:new Date(t.post.timer).getTime(),direction:"up",alignment:t.post.alignment},null,8,["time","alignment"])):f("",!0),t.post.description?(n(),k(G,{key:2,description:t.post.description},null,8,["description"])):f("",!0)])],2),t.post.coverImageUrl?(n(),k(le,{key:0,post:t.post,"cover-image-url":t.post.coverImageUrl},null,8,["post","cover-image-url"])):f("",!0),t.post.descriptionFooter?(n(),k(G,{key:1,class:"mb-5",description:t.post.descriptionFooter},null,8,["description"])):f("",!0),t.post.table?(n(),k(ue,{key:2,tableData:t.post.table,alignment:t.post.tableAlignment},null,8,["tableData","alignment"])):f("",!0),P(c(je),{onTabOpen:c(Pe)},{default:x(()=>[(n(!0),y(U,null,M(r.value,a=>(n(),k(c(He),{disabled:!a.isExpandable,pt:{headerAction:{class:["px-0 bg-transparent",a.isExpandable?void 0:"cursor-auto"]},headerIcon:{class:{invisible:!a.isExpandable}}}},me({header:x(()=>[I("div",ht,[a.title?(n(),k(re,{key:0,alignment:a.alignment},{default:x(()=>[A(V(a.title),1)]),_:2},1032,["alignment"])):f("",!0),a.subTitle?(n(),k(re,{key:1,alignment:a.alignment,"is-sub-title":""},{default:x(()=>[A(V(a.subTitle),1)]),_:2},1032,["alignment"])):f("",!0),a.isExpandable?f("",!0):(n(),y(U,{key:2},[a.countdown?(n(),k(H,{key:0,time:new Date(a.countdown).getTime(),direction:"down",alignment:a.alignment},null,8,["time","alignment"])):f("",!0),a.timer?(n(),k(H,{key:1,time:new Date(a.timer).getTime(),direction:"up",alignment:a.alignment},null,8,["time","alignment"])):f("",!0)],64))])]),default:x(()=>[a.description?(n(),k(G,{key:0,description:a.description,alignment:a.alignment},null,8,["description","alignment"])):f("",!0),a.coverImageUrl?(n(),k(le,{key:1,post:t.post,"cover-image-url":a.coverImageUrl,alignment:a.alignment,"max-height":"30%"},null,8,["post","cover-image-url","alignment"])):f("",!0),P(rt,{bullets:a.bullets,alignment:a.alignment},null,8,["bullets","alignment"]),a.isExpandable?(n(),y(U,{key:2},[a.countdown?(n(),k(H,{key:0,time:new Date(a.countdown).getTime(),direction:"down",alignment:a.alignment},null,8,["time","alignment"])):f("",!0),a.timer?(n(),k(H,{key:1,time:new Date(a.timer).getTime(),direction:"up",alignment:a.alignment},null,8,["time","alignment"])):f("",!0)],64)):f("",!0),a.table?(n(),k(ue,{key:3,tableData:a.table,alignment:a.tableAlignment},null,8,["tableData","alignment"])):f("",!0)]),_:2},[a.isExpandable?void 0:{name:"headericon",fn:x(()=>[]),key:"0"}]),1032,["disabled","pt"]))),256))]),_:1},8,["onTabOpen"])]),_:1},8,["class"]),P(tt,{post:t.post},null,8,["post"])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}});export{It as _,ie as a,le as b,H as c,G as d,re as e,pe as s,St as u};
