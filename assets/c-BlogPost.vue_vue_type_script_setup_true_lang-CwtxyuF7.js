import{i as z,s as E,r as A,o as X,a3 as de,ah as ce,ai as Y,aj as Z,ak as O,al as se,h as F,e as j,g as ie,c as T,l as a,q as p,am as re,D as R,p as I,k as f,t as d,E as P,R as N,C as Q,a as pe,m,n as L,J as me,w as U,O as H,an as ge,ao as ve,aa as fe,ap as be,B as ye,aq as he,x as ke,z as J,y as M,ar as x,H as q,ac as _,T as we,f as Ce,A as $e,G as ee,X as Te,K as Be,L as Pe}from"../bundle.js";import{_ as W,a as V,u as Se,b as De}from"./c-Bubble.vue_vue_type_script_setup_true_lang-Di5vSobc.js";import{_ as K}from"./c-Countdown.vue_vue_type_script_setup_true_lang-Dl8LkfcK.js";import{_ as Ie}from"./c-TextField.vue_vue_type_script_setup_true_lang-DT8z_rfW.js";import{R as Re}from"./c-validation-DokkLKHB.js";import{a as Ue,s as Ee}from"./c-accordiontab.esm-CXU5YCf-.js";import{_ as Ae}from"./c-Image.vue_vue_type_script_setup_true_lang-Cth-U2Iz.js";const Le=n=>{const e=z(),{collections:o,fetchBlogPost:b,checkBlogPostForUnreadReactions:k}=e,{blogPosts:g,blogReactions:C,isBlogPostDatabaseActionActive:y}=E(e);let h=[];const S=A(),r=c=>{c.metadata.hasPendingWrites||y.value||(clearTimeout(S.value),S.value=setTimeout(async()=>{await b(n.id,void 0,{loadingIndicator:!1}),k(g.value.previousData.single,!0)},200))};X(async()=>{C.value.unread=C.value.unread.filter(t=>t.postId!==n.id);const c=de(n),u=o.blogPosts(c.isPrivate),s=o.blogReactions(c.isPrivate),B=ce(u,n.id),D=Y(u,Z("id","==",n.id)),w=Y(s,Z("post","==",B));h.push(O(D,r)),h.push(O(w,r))}),se(()=>{clearTimeout(S.value),h.forEach(c=>{c()})})},ut=()=>{const n=z(),e=F(),{visibleBlogPosts:o,blogReactions:b,isBlogPostDatabaseActionActive:k}=E(n),{firebaseUser:g,isLoggedIn:C}=E(e),{collections:y,fetchBlogPosts:h,checkBlogPostsForUnreadReactions:S}=n;let r=[];const c=A(),u=s=>{s.metadata.hasPendingWrites||k.value||(clearTimeout(c.value),c.value=setTimeout(async()=>{var B;o.value.length&&(await h((B=g.value)==null?void 0:B.uid,{amount:o.value.length,loadingIndicator:!1}),S())},200))};X(()=>{b.value.unread=[],r.push(O(y.blogPosts(!1),u)),r.push(O(y.blogReactions(!1),u)),C.value&&(r.push(O(y.blogPosts(!0),u)),r.push(O(y.blogReactions(!0),u)))}),se(()=>{clearTimeout(c.value),r.forEach(s=>{s()})})},je={class:"flex flex-col gap-2"},te=j({__name:"BlogReaction",props:{post:{},reaction:{}},setup(n){const e=n,o=ie(),b=F(),k=z(),{routeLoading:g,routeLoadingId:C}=E(o),{firebaseUser:y,isLoggedIn:h,isOwner:S}=E(b),{blogReactions:r}=E(k),{deleteBlogReaction:c}=k,u=T(()=>r.value.unread.find(w=>w.id===e.reaction.id)),s=T(()=>{const w=[];return u.value&&w.push({value:"Unread",severity:"warning",rounded:!1}),w}),B=T(()=>y.value&&e.reaction.user.id===y.value.uid||S.value),D=()=>{r.value.unread=r.value.unread.filter(w=>w.id!==e.reaction.id)};return(w,t)=>(a(),p(V,{id:e.reaction.id,class:P(["p-5 w-full md:w-3/4 xl:w-2/3",e.post.colorTertiary,e.post.opacityTertiary||"bg-opacity-50",{"border border-yellow-400":u.value},"!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},avatarProps:{class:{"animate-spin":f(g)===f(N).USER_DETAILS&&f(C)===e.reaction.user.id}},title:e.reaction.user.displayName||"Unknown user",subTitle:f(Q)(new Date(e.reaction.date)),avatar:e.reaction.user.avatar,route:f(h)?{name:f(N).USER_DETAILS,params:{userId:e.reaction.user.id}}:void 0,avatarRoute:f(h)?{name:f(N).USER_DETAILS,params:{userId:e.reaction.user.id}}:void 0,description:e.reaction.message,tags:s.value},re({_:2},[B.value||u.value?{name:"right",fn:R(()=>[I("div",je,[B.value&&!e.post.locked?(a(),p(W,{key:0,type:"danger",outlined:"",class:"h-fit",label:"Delete",disabled:f(r).isDatabaseDeletionActive,onClick:t[0]||(t[0]=l=>f(c)(e.reaction.id,e.post))},null,8,["disabled"])):d("",!0),u.value?(a(),p(W,{key:1,type:"tertiary",outlined:"",class:"h-fit",label:"Mark as read",onClick:D})):d("",!0)])]),key:"0"}:void 0]),1032,["id","class","avatarProps","title","subTitle","avatar","route","avatarRoute","description","tags"]))}}),He={class:"grid justify-items-center p-5 gap-5"},Me=j({__name:"BlogReactions",props:{post:{}},setup(n){const e=n,o=ie(),b=F(),k=z(),{content:g}=E(o),{firebaseUser:C,isLoggedIn:y}=E(b),{blogReactions:h}=E(k),{createBlogReaction:S}=k,r=A(),c=A(!1),u=pe({reaction:{value:"",error:""}}),s=T(()=>[...e.post.reactions].reverse()),B=T(()=>s.value.filter((l,v)=>v<3)),D=T(()=>s.value.filter((l,v)=>v>=3)),w=T(()=>e.post.locked||!y.value||h.value.isDatabaseCreationActive),t=async()=>{if(!h.value.isDatabaseCreationActive){if(await r.value.test(),!u.reaction.error&&C.value){const l=u.reaction.value;u.reaction.value="Replying...";const v=await S(e.post,{userId:C.value.uid,postId:e.post.id,message:l,date:new Date});u.reaction.value=v?"":l}be()}};return(l,v)=>(a(),m("form",{action:"",onSubmit:fe(t,["prevent"])},[I("div",He,[!f(y)||l.post.reactions.filter($=>$.user.id===f(C).uid).length<20?(a(),p(V,{key:0,class:P(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",l.post.colorTertiary||"bg-secondary-700",l.post.opacityTertiary||"bg-opacity-25"])},{default:R(()=>[L(Ie,{class:"w-5/6",id:l.post.id,inputProps:{class:["rounded-primary border-none !placeholder-gray-300",l.post.colorSecondary||l.post.colorPrimary||"bg-secondary-600",l.post.opacitySecondary||"!bg-opacity-20",w.value?{"!bg-gray-900 !bg-opacity-50":!f(h).isDatabaseCreationActive}:"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!f(y)&&!l.post.locked}],disabled:w.value},ref_key:"reaction",ref:r,name:"reaction",placeholder:l.post.locked?"Locked for comments":f(y)?"Reply":f(g).blogLoginGuest,modelValue:u.reaction.value,"onUpdate:modelValue":v[0]||(v[0]=$=>u.reaction.value=$),error:u.reaction.error,"onUpdate:error":v[1]||(v[1]=$=>u.reaction.error=$),rules:[f(Re).Required],onClick:v[2]||(v[2]=()=>!f(y)&&!l.post.locked?f(me).push({name:f(N).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error","rules"])]),_:1},8,["class"])):d("",!0),(a(!0),m(U,null,H(B.value,$=>(a(),p(te,{post:l.post,reaction:$},null,8,["post","reaction"]))),256)),(a(!0),m(U,null,H(D.value,$=>ge((a(),p(te,{post:l.post,reaction:$},null,8,["post","reaction"])),[[ve,c.value]])),256)),l.post.reactions.length>3?(a(),p(W,{key:1,type:"primary",outlined:"",icon:c.value?"pi pi-angle-up":"pi pi-angle-down",label:c.value?"Hide older reactions":"View older reactions",onClick:v[3]||(v[3]=$=>c.value=!c.value)},null,8,["icon","label"])):d("",!0)])],32))}});var Ke={root:function(e){var o=e.props;return["p-chip p-component",{"p-chip-image":o.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},Oe=ye.extend({name:"chip",classes:Ke}),We={name:"BaseChip",extends:ke,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Oe,provide:function(){return{$parentInstance:this}}},ue={name:"Chip",extends:We,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:he}},Ne=["aria-label"],Ve=["src"];function qe(n,e,o,b,k,g){return k.visible?(a(),m("div",M({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[J(n.$slots,"default",{},function(){return[n.image?(a(),m("img",M({key:0,src:n.image},n.ptm("image")),null,16,Ve)):n.$slots.icon?(a(),p(x(n.$slots.icon),M({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(a(),m("span",M({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):d("",!0),n.label?(a(),m("div",M({key:3,class:n.cx("label")},n.ptm("label")),q(n.label),17)):d("",!0)]}),n.removable?J(n.$slots,"removeicon",{key:0,onClick:g.close,onKeydown:g.onKeydown,removeCallback:g.close,keydownCallback:g.onKeydown},function(){return[(a(),p(x(n.removeIcon?"span":"TimesCircleIcon"),M({tabindex:"0",class:[n.cx("removeIcon"),n.removeIcon],onClick:g.close,onKeydown:g.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):d("",!0)],16,Ne)):d("",!0)}ue.render=qe;const ze=j({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(n){return(e,o)=>(a(),m("div",null,[I("div",{class:P({block:!e.alignment,flex:!!e.alignment,"justify-start":e.alignment==="left","justify-center":e.alignment==="center","justify-end":e.alignment==="right"})},[I("ul",{class:P(["list-disc",{"ms-5":e.alignment==="left"}])},[(a(!0),m(U,null,H(e.bullets,b=>(a(),m("li",null,q(b),1))),256))],2)],2)]))}}),Fe={class:"ql-editor no-input"},Ge=["innerHTML"],G=j({__name:"BlogPostDescription",props:{description:{}},setup(n){return(e,o)=>(a(),m("div",Fe,[I("div",{innerHTML:e.description},null,8,Ge)]))}}),ae=j({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},maxHeight:{},maxWidth:{},alignment:{},thumb:{type:Boolean}},setup(n){const e=n,o=Se(De),b=o.greaterOrEqual("sm"),k=o.greaterOrEqual("md"),g=A(0),C=A(0),y=T(()=>g.value>C.value),h=T(()=>g.value>C.value*1.5),S=T(()=>C.value>g.value),r=T(()=>C.value>g.value*1.5),c=T(()=>k.value?"60%":b.value?"80%":e.maxHeight?e.maxHeight:y.value&&r.value?"80%":"100%"),u=T(()=>k.value?"60%":b.value?"80%":e.maxWidth?e.maxWidth:S.value&&h.value?"80%":"100%");return X(()=>{const s=new Image;s.src=e.coverImageUrl,s.onload=()=>{g.value=s.height,C.value=s.width}}),(s,B)=>{var D,w;return a(),m("div",{class:P({flex:!0,"justify-start":s.alignment==="left","justify-center":s.alignment===void 0||s.alignment==="center","justify-end":s.alignment==="right"})},[L(V,{class:P(["!p-0 md:!p-3 my-5",s.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",(D=s.post)==null?void 0:D.colorTertiary,((w=s.post)==null?void 0:w.opacityTertiary)||"bg-opacity-50"]),style:_({maxHeight:c.value,maxWidth:u.value})},{default:R(()=>[s.thumb?(a(),m("div",{key:0,class:"h-[20vh] inset-0 rounded-primary",style:_({backgroundImage:`url(${s.coverImageUrl})`,backgroundSize:"cover"})},null,4)):(a(),p(Ae,{key:1,src:s.coverImageUrl,"image-class":"cover-image md:rounded-primary"},null,8,["src"]))]),_:1},8,["class","style"])],2)}}}),Qe={class:"flex flex-wrap justify-end h-fit gap-3"},ne=j({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(n){return(e,o)=>(a(),m("div",Qe,[L(W,{class:"min-w-80",label:"Edit",onClick:o[0]||(o[0]=b=>e.$emit("editClicked"))}),L(W,{class:"min-w-80",type:"danger",outlined:"",label:"Delete",onClick:o[1]||(o[1]=b=>e.$emit("deleteClicked"))})]))}}),oe=j({__name:"BlogPostSectionTitle",props:{class:{},alignment:{},isExpandable:{type:Boolean},isExpanded:{type:Boolean},isSubTitle:{type:Boolean}},emits:["click"],setup(n){const e=n;return(o,b)=>(a(),m("div",{class:P(["font-bold",{"text-lg md:text-2xl":!o.isSubTitle},{"hover:underline cursor-pointer":o.isExpandable},e.class])},[I("div",{class:P({block:!o.alignment,flex:!!o.alignment,"justify-start":o.alignment==="left","justify-center":o.alignment==="center","justify-end":o.alignment==="right"})},[I("span",{class:"flex",onClick:b[0]||(b[0]=k=>o.$emit("click"))},[o.isExpandable&&o.alignment==="right"?(a(),m("i",{key:0,class:P(["pi pi-angle-down animation",{"rotate-180":o.isExpanded}])},null,2)):d("",!0),J(o.$slots,"default"),o.isExpandable&&(o.alignment==="left"||o.alignment==="center")?(a(),m("i",{key:1,class:P(["pi pi-angle-down animation",{"rotate-180":o.isExpanded}])},null,2)):d("",!0)])],2)],2))}}),Je={class:"table-auto min-w-full text-left"},Xe={key:0,class:"border border-white"},Ye=["onClick","innerHTML"],le=j({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(n){const e=n,o=A(0),b=A("asc"),k=T(()=>we(e.tableData)),g=A(k.value.slice(1)),C=(r,c)=>{r===0&&(o.value=c,y(),h())},y=()=>{b.value==="asc"?b.value="desc":b.value="asc"},h=()=>{const r=o.value;g.value=g.value.sort((c,u)=>b.value==="asc"?u[r].localeCompare(c[r]):c[r].localeCompare(u[r]))},S=r=>{const c=/(https?:\/\/[^\s]+)/g;return r.replace(c,u=>{let s=u.replace("http://","").replace("https://","").replace("www.","");return s.length>15&&(s=s.substring(0,15)+"..."),`<a href="${u}" target="_blank">${s}</a>`})};return(r,c)=>(a(),m("div",{class:P(["my-8 flex max-w-[65vw] md:max-w-[50vw] lg:max-w-[60vw] overflow-x-auto",{"justify-start":r.alignment==="left","justify-center":r.alignment==="center"||!r.alignment,"justify-end":r.alignment==="right"}])},[I("table",Je,[I("tbody",null,[(a(!0),m(U,null,H([k.value[0],...g.value],(u,s)=>(a(),m(U,{key:s},[u.every(B=>!B)?d("",!0):(a(),m("tr",Xe,[(a(!0),m(U,null,H(u,(B,D)=>(a(),m(U,{key:D},[D!==0||!k.value.every(w=>!w.length||!w[0])?(a(),m("td",{key:0,class:P(["px-2 border border-white",{"font-bold":s===0||D===0},{"cursor-pointer underline":s===0},{"text-left":r.alignment==="left"||!r.alignment,"text-center":r.alignment==="center","text-right":r.alignment==="right"}]),onClick:w=>C(s,D),innerHTML:S(B)},null,10,Ye)):d("",!0)],64))),128))]))],64))),128))])])],2))}}),Ze={class:"flex gap-3"},xe={class:"flex justify-between h-fit mt-2 gap-2"},_e={class:"flex flex-wrap gap-3"},et={class:"w-full"},tt={class:"w-full"},dt=j({__name:"BlogPost",props:{post:{},withoutMutation:{type:Boolean}},emits:["editClicked","deleteClicked"],setup(n){const e=n,o=Ce(),b=F(),k=$e(),{publicUsers:g}=E(k),{firebaseUser:C,isOwner:y}=E(b);o.currentRoute.value.name!==N.BLOG&&Le(e.post);const h=A(e.post.archived),S=T(()=>{var t;return(t=e.post.allowedUserIds)!=null&&t.length?g.value.filter(l=>{var v;return(v=e.post.allowedUserIds)==null?void 0:v.includes(l.id)}):[]}),r=T(()=>{const t=Q(new Date(e.post.date)),l=e.post.dateUpdated?Q(new Date(e.post.dateUpdated)):"";return t+` - updated ${l}`}),c=T(()=>{const t=[];return e.post.datePinned&&t.push({value:"Pinned",severity:"success",rounded:!1}),e.post.locked&&t.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),e.post.archived&&t.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),t}),u=T(()=>e.post.sections.map(t=>({...t,isExpandable:B(t)}))),s=T(()=>u.value.some(t=>t.openByDefault)?u.value.flatMap((t,l)=>t.openByDefault?l:[]):null),B=t=>!!t.description||!!t.coverImageUrl||!!t.bullets.length||!!t.table,D=t=>{var l;(l=s.value)!=null&&l.length||Te(t)},w=()=>{const t=document.createElement("textarea"),{protocol:l,hostname:v,port:$}=window.location,i=`${l}//${v}`+(v==="localhost"?`:${$}`:"");t.value=`${i}#${Be.BLOG.path}/${e.post.id}`,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),Pe.success("Copied link!")};return(t,l)=>(a(),p(V,{id:t.post.id,class:P([{"min-h-[90vh]":!h.value},"border-4 border-transparent","!rounded-primary",t.post.colorSecondary||t.post.colorPrimary||"bg-secondary-900",t.post.opacitySecondary||"bg-opacity-50"]),title:t.post.title,subTitle:r.value,tags:c.value,loading:t.post.loading,isCollapsed:h.value,clickable:"",onClick:l[4]||(l[4]=v=>h.value=!h.value)},{right:R(()=>[I("div",Ze,[h.value?f(y)&&!t.withoutMutation?(a(),p(ne,{key:1,onEditClicked:l[0]||(l[0]=v=>t.$emit("editClicked")),onDeleteClicked:l[1]||(l[1]=v=>t.$emit("deleteClicked"))})):d("",!0):(a(),p(W,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:w}))])]),default:R(()=>{var v;return[I("div",xe,[I("div",_e,[(a(!0),m(U,null,H(S.value,$=>{var i;return a(),p(f(ue),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:$.id===((i=f(C))==null?void 0:i.uid)?"You":$.displayName,rounded:""},null,8,["label"])}),256))]),f(y)&&!t.withoutMutation?(a(),m("div",{key:0,class:P(["flex justify-end ms-5",(v=t.post.allowedUserIds)!=null&&v.length?"flex-col md:flex-row":"flex-row"])},[L(ne,{onEditClicked:l[2]||(l[2]=$=>t.$emit("editClicked")),onDeleteClicked:l[3]||(l[3]=$=>t.$emit("deleteClicked"))})],2)):d("",!0)]),L(V,{class:P(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5",t.post.colorPrimary,t.post.opacityPrimary||"bg-opacity-50"])},{default:R(()=>{var $;return[I("div",{class:P(["flex relative",t.post.countdown||t.post.alignment==="center"?"flex justify-between":""])},[I("div",et,[t.post.countdown?(a(),p(K,{key:0,time:new Date(t.post.countdown).getTime(),direction:"down",alignment:t.post.alignment},null,8,["time","alignment"])):d("",!0),t.post.timer?(a(),p(K,{key:1,time:new Date(t.post.timer).getTime(),direction:"up",alignment:t.post.alignment},null,8,["time","alignment"])):d("",!0),t.post.description?(a(),p(G,{key:2,description:t.post.description},null,8,["description"])):d("",!0)])],2),t.post.coverImageUrl?(a(),p(ae,{key:0,post:t.post,"cover-image-url":t.post.coverImageUrl},null,8,["post","cover-image-url"])):d("",!0),t.post.descriptionFooter?(a(),p(G,{key:1,class:"mb-5",description:t.post.descriptionFooter},null,8,["description"])):d("",!0),t.post.table?(a(),p(le,{key:2,tableData:t.post.table,alignment:t.post.tableAlignment},null,8,["tableData","alignment"])):d("",!0),L(f(Ue),{multiple:!!(($=s.value)!=null&&$.length),"active-index":s.value,onTabOpen:D},{default:R(()=>[(a(!0),m(U,null,H(u.value,i=>(a(),p(f(Ee),{disabled:!i.isExpandable,pt:{headerAction:{class:["px-0 bg-transparent",i.isExpandable?void 0:"cursor-auto"]},headerIcon:{class:{invisible:!i.isExpandable}}}},re({header:R(()=>[I("div",tt,[i.title?(a(),p(oe,{key:0,alignment:i.alignment},{default:R(()=>[ee(q(i.title),1)]),_:2},1032,["alignment"])):d("",!0),i.subTitle?(a(),p(oe,{key:1,alignment:i.alignment,"is-sub-title":""},{default:R(()=>[ee(q(i.subTitle),1)]),_:2},1032,["alignment"])):d("",!0),i.isExpandable?d("",!0):(a(),m(U,{key:2},[i.countdown?(a(),p(K,{key:0,time:new Date(i.countdown).getTime(),direction:"down",alignment:i.alignment},null,8,["time","alignment"])):d("",!0),i.timer?(a(),p(K,{key:1,time:new Date(i.timer).getTime(),direction:"up",alignment:i.alignment},null,8,["time","alignment"])):d("",!0)],64))])]),default:R(()=>[i.description?(a(),p(G,{key:0,description:i.description,alignment:i.alignment},null,8,["description","alignment"])):d("",!0),i.coverImageUrl?(a(),p(ae,{key:1,post:t.post,"cover-image-url":i.coverImageUrl,alignment:i.alignment,"max-height":"30%"},null,8,["post","cover-image-url","alignment"])):d("",!0),L(ze,{bullets:i.bullets,alignment:i.alignment},null,8,["bullets","alignment"]),i.isExpandable?(a(),m(U,{key:2},[i.countdown?(a(),p(K,{key:0,time:new Date(i.countdown).getTime(),direction:"down",alignment:i.alignment},null,8,["time","alignment"])):d("",!0),i.timer?(a(),p(K,{key:1,time:new Date(i.timer).getTime(),direction:"up",alignment:i.alignment},null,8,["time","alignment"])):d("",!0)],64)):d("",!0),i.table?(a(),p(le,{key:3,tableData:i.table,alignment:i.tableAlignment},null,8,["tableData","alignment"])):d("",!0)]),_:2},[i.isExpandable?void 0:{name:"headericon",fn:R(()=>[]),key:"0"}]),1032,["disabled","pt"]))),256))]),_:1},8,["multiple","active-index"])]}),_:1},8,["class"]),L(Me,{post:t.post},null,8,["post"])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}});export{dt as _,ne as a,ae as b,G as c,oe as d,ue as s,ut as u};
