import{_ as N,a as ue,u as Ne,b as He,s as Ce,c as $l}from"./Bubble.vue_vue_type_script_setup_true_lang-Bg7w0uV0.js";import{d as L,o as i,c as f,t as Q,n as j,r as b,a as w,m as We,b as Qe,e as Ye,f as Je,g as Cl,h as me,i as q,u as n,j as h,k as ne,l as C,s as z,p as le,q as _,v as x,w as dl,x as O,y as he,R as ae,z as Pl,A as ze,F as A,B as J,C as Vl,D as xl,E as Ul,G as Sl,H as Fe,I as Tl,J as Ke,K as oe,L as T,M as Xe,N as Ze,O as ul,P as pl,Q as qe,S as El,T as _e,U as el,V as ve,W as cl,X as Ge,Y as Ve,Z as ml,_ as xe,$ as Il,a0 as Bl,a1 as Dl,a2 as Ie,a3 as Be,a4 as Ol,a5 as ie,a6 as De,a7 as Ml,a8 as Rl,a9 as ll,aa as Ll,ab as zl,ac as jl,ad as Al,ae as Nl,af as ql,ag as Hl,ah as tl,ai as Oe,aj as Fl,ak as Kl,al as nl}from"../bundle.js";import{_ as pe,R as ce,a as Gl,V as Wl}from"./TextField.vue_vue_type_script_setup_true_lang-Dgx0yMnh.js";import{_ as Ql,s as Ue,a as de}from"./Image.vue_vue_type_script_setup_true_lang-DIeNN4h0.js";import{_ as vl,a as Me,b as gl}from"./SwitchField.vue_vue_type_script_setup_true_lang-B7I08EQr.js";import{_ as te}from"./SelectField.vue_vue_type_script_setup_true_lang-x9JQmJFJ.js";import{D as bl}from"./vuedraggable.umd-B2K4y0tm.js";const fe=L({__name:"CountdownNumber",props:{time:{},animate:{type:Boolean},direction:{}},setup(e){return(l,s)=>(i(),f("span",{class:j({"animation ease-in animate-timer-up":l.animate&&l.direction==="up","animation ease-in animate-timer-down":l.animate&&l.direction==="down"})},Q(l.time),3))}}),Yl=(e,l)=>{const s=b(0),r=R=>(l==="up"?R=Math.abs(R):R=Math.max(0,R),Math.floor(R)),g=w(()=>r(s.value/We)),p=w(()=>s.value%We),a=w(()=>r(p.value/Qe)),$=w(()=>p.value%Qe),v=w(()=>r($.value/Ye)),P=w(()=>$.value%Ye),o=w(()=>r(P.value/Je)),m=w(()=>P.value%Je),k=w(()=>r(m.value/Cl)),t=w(()=>g.value===0&&a.value===0&&v.value===0&&o.value===0&&k.value===0),c=w(()=>g.value>0),d=w(()=>g.value>0||a.value>0||t.value),u=w(()=>g.value>0||a.value>0||v.value>0||t.value),V=w(()=>g.value>0||a.value>0||v.value>0||o.value>0||t.value),S=w(()=>g.value>0||a.value>0||v.value>0||o.value>0||k.value>0||t.value),M=()=>{s.value=e-new Date().getTime(),setTimeout(M,1e3)};return me(()=>{M()}),{years:g,days:a,hours:v,minutes:o,seconds:k,showYears:c,showDays:d,showHours:u,showMinutes:V,showSeconds:S}},Jl=(e,l,s,r,g,p,a)=>{const $=b(0),v=w(()=>l.value===0&&s.value===0&&r.value===0&&g.value===0&&p.value===0),P=w(()=>a==="down"?s.value===364:s.value===0),o=w(()=>a==="down"?r.value===23:r.value===0),m=w(()=>a==="down"?g.value===59:g.value===0),k=w(()=>a==="down"?p.value===59:p.value===0),t=w(()=>l.value>=0&&P.value&&o.value&&m.value&&k.value),c=w(()=>s.value>=0&&o.value&&m.value&&k.value),d=w(()=>r.value>=0&&m.value&&k.value),u=w(()=>g.value>=0&&k.value),V=w(()=>!v.value),S=()=>{$.value=e-new Date().getTime(),setTimeout(S,1e3)};return me(()=>{S()}),{animateYears:t,animateDays:c,animateHours:d,animateMinutes:u,animateSeconds:V}},Xl={class:"grid grid-flow-col text-center"},Zl={key:0,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},_l={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},et={key:1,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},lt={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},tt={key:2,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},nt={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},ot={key:3,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},it={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},rt={key:4,class:"flex flex-col py-2 px-1 sm:px-2 bg-neutral rounded-box text-neutral-content rounded-primary"},at={class:"text-xl sm:text-3xl md:text-3xl lg:text-5xl font-mono font-bold sm:font-normal"},re=L({__name:"Countdown",props:{time:{},direction:{},alignment:{}},setup(e){const l=e,{years:s,days:r,hours:g,minutes:p,seconds:a,showYears:$,showDays:v,showHours:P,showMinutes:o,showSeconds:m}=Yl(l.time,l.direction),{animateYears:k,animateDays:t,animateHours:c,animateMinutes:d,animateSeconds:u}=Jl(l.time,s,r,g,p,a,l.direction);return(V,S)=>(i(),f("div",{class:j({block:!V.alignment,flex:!!V.alignment,"justify-start":V.alignment==="left","justify-center":V.alignment==="center","justify-end":V.alignment==="right"})},[q("div",Xl,[n($)?(i(),f("div",Zl,[q("span",_l,[h(fe,{time:n(s),animate:n(k),direction:V.direction},null,8,["time","animate","direction"])]),S[0]||(S[0]=ne(" years "))])):C("",!0),n(v)?(i(),f("div",et,[q("span",lt,[h(fe,{time:n(r),animate:n(t),direction:V.direction},null,8,["time","animate","direction"])]),S[1]||(S[1]=ne(" days "))])):C("",!0),n(P)?(i(),f("div",tt,[q("span",nt,[h(fe,{time:n(g),animate:n(c),direction:V.direction},null,8,["time","animate","direction"])]),S[2]||(S[2]=ne(" hrs "))])):C("",!0),n(o)?(i(),f("div",ot,[q("span",it,[h(fe,{time:n(p),animate:n(d),direction:V.direction},null,8,["time","animate","direction"])]),S[3]||(S[3]=ne(" mins "))])):C("",!0),n(m)?(i(),f("div",rt,[q("span",at,[h(fe,{time:n(a),animate:n(u),direction:V.direction},null,8,["time","animate","direction"])]),S[4]||(S[4]=ne(" secs "))])):C("",!0)])],2))}}),st={class:"flex flex-col gap-2"},ol=L({__name:"BlogReaction",props:{post:{},reaction:{}},setup(e){const l=e,{publicUser:s,isOwner:r}=z(le()),g=_(),{deleteBlogReaction:p}=g,{blogReactions:a}=z(g),$=w(()=>a.value.unread.find(m=>m.id===l.reaction.id)),v=w(()=>{const m=[];return $.value&&m.push({value:"Unread",severity:"warning",rounded:!1}),m}),P=w(()=>s.value&&l.reaction.user.id===s.value.id||r.value),o=()=>{a.value.unread=a.value.unread.filter(m=>m.id!==l.reaction.id)};return(m,k)=>(i(),x(ue,{id:l.reaction.id,class:j(["p-5 w-full md:w-3/4 xl:w-2/3",l.post.colorTertiary,l.post.opacityTertiary||"bg-opacity-50",{"border border-yellow-400":$.value},"!rounded-primary"]),titleProps:{class:"!text-base mt-1"},descriptionProps:{class:"text-white"},title:l.reaction.user.displayName||"Unknown user",subTitle:n(he)(new Date(l.reaction.date)),avatar:l.reaction.user.avatar,avatarRoute:n(r)?{name:n(ae).USER_DETAILS,params:{userId:l.reaction.user.id}}:void 0,description:l.reaction.message,tags:v.value},dl({_:2},[P.value||$.value?{name:"right",fn:O(()=>[q("div",st,[P.value&&!l.post.locked?(i(),x(N,{key:0,type:"danger",outlined:"",class:"h-fit",label:"Delete",onClick:k[0]||(k[0]=t=>n(p)(l.reaction.id,l.post))})):C("",!0),$.value?(i(),x(N,{key:1,type:"tertiary",outlined:"",class:"h-fit",label:"Mark as read",onClick:o})):C("",!0)])]),key:"0"}:void 0]),1032,["id","class","title","subTitle","avatar","avatarRoute","description","tags"]))}}),dt={class:"grid justify-items-center p-5 gap-5"},ut=L({__name:"BlogReactions",props:{post:{}},setup(e){const l=e,{publicUser:s}=z(le()),r=_(),{content:g}=z(r),{createBlogReaction:p}=r,a=b(),$=b(!1),v=Pl({reaction:{value:"",error:""}}),P=w(()=>[...l.post.reactions].reverse()),o=w(()=>P.value.filter((c,d)=>d<3)),m=w(()=>P.value.filter((c,d)=>d>=3)),k=w(()=>l.post.locked||!s.value),t=async()=>{await a.value.test(),!v.reaction.error&&s.value&&await p(l.post,{userId:s.value.id,postId:l.post.id,message:v.reaction.value,date:new Date})&&(v.reaction.value=""),Sl()};return(c,d)=>(i(),f("form",{action:"",onSubmit:Ul(t,["prevent"])},[q("div",dt,[!n(s)||c.post.reactions.filter(u=>u.user.id===n(s).id).length<20?(i(),x(ue,{key:0,class:j(["p-5 flex justify-center w-full md:w-3/4 xl:w-2/3","!rounded-primary",c.post.colorTertiary||"bg-secondary-700",c.post.opacityTertiary||"bg-opacity-25"])},{default:O(()=>[h(pe,{class:"w-5/6",id:c.post.id,inputProps:{class:["rounded-primary border-none !placeholder-gray-300",c.post.colorSecondary||c.post.colorPrimary||"bg-secondary-600",c.post.opacitySecondary||"!bg-opacity-20",k.value?"!bg-gray-900 !bg-opacity-50":"focus:!text-white focus:!placeholder-gray-200",{"cursor-pointer":!n(s)&&!c.post.locked}],disabled:k.value},ref_key:"reaction",ref:a,name:"reaction",placeholder:c.post.locked?"Locked for comments":n(s)?"Reply":n(g).blogLoginGuest,modelValue:v.reaction.value,"onUpdate:modelValue":d[0]||(d[0]=u=>v.reaction.value=u),error:v.reaction.error,"onUpdate:error":d[1]||(d[1]=u=>v.reaction.error=u),rules:[n(ce).Required],onClick:d[2]||(d[2]=()=>!n(s)&&!c.post.locked?n(ze).push({name:n(ae).LOGIN}):{})},null,8,["id","inputProps","placeholder","modelValue","error","rules"])]),_:1},8,["class"])):C("",!0),(i(!0),f(A,null,J(o.value,u=>(i(),x(ol,{post:c.post,reaction:u},null,8,["post","reaction"]))),256)),(i(!0),f(A,null,J(m.value,u=>Vl((i(),x(ol,{post:c.post,reaction:u},null,8,["post","reaction"])),[[xl,$.value]])),256)),c.post.reactions.length>3?(i(),x(N,{key:1,type:"primary",outlined:"",icon:$.value?"pi pi-angle-up":"pi pi-angle-down",label:$.value?"Hide older reactions":"View older reactions",onClick:d[3]||(d[3]=u=>$.value=!$.value)},null,8,["icon","label"])):C("",!0)])],32))}});var pt={root:function(l){var s=l.props;return["p-chip p-component",{"p-chip-image":s.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},ct=Fe.extend({name:"chip",classes:pt}),mt={name:"BaseChip",extends:Ke,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:ct,provide:function(){return{$parentInstance:this}}},ye={name:"Chip",extends:mt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(l){(l.key==="Enter"||l.key==="Backspace")&&this.close(l)},close:function(l){this.visible=!1,this.$emit("remove",l)}},components:{TimesCircleIcon:Tl}},qt=["aria-label"],vt=["src"];function gt(e,l,s,r,g,p){return g.visible?(i(),f("div",T({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[oe(e.$slots,"default",{},function(){return[e.image?(i(),f("img",T({key:0,src:e.image},e.ptm("image")),null,16,vt)):e.$slots.icon?(i(),x(Xe(e.$slots.icon),T({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),f("span",T({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):C("",!0),e.label?(i(),f("div",T({key:3,class:e.cx("label")},e.ptm("label")),Q(e.label),17)):C("",!0)]}),e.removable?oe(e.$slots,"removeicon",{key:0,onClick:p.close,onKeydown:p.onKeydown,removeCallback:p.close,keydownCallback:p.onKeydown},function(){return[(i(),x(Xe(e.removeIcon?"span":"TimesCircleIcon"),T({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:p.close,onKeydown:p.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):C("",!0)],16,qt)):C("",!0)}ye.render=gt;const bt=L({__name:"BlogPostBullets",props:{bullets:{},alignment:{}},setup(e){return(l,s)=>(i(),f("div",null,[q("div",{class:j({block:!l.alignment,flex:!!l.alignment,"justify-start":l.alignment==="left","justify-center":l.alignment==="center","justify-end":l.alignment==="right"})},[q("ul",{class:j(["list-disc",{"ms-5":l.alignment==="left"}])},[(i(!0),f(A,null,J(l.bullets,r=>(i(),f("li",null,Q(r),1))),256))],2)],2)]))}}),ft={class:"ql-editor no-input"},yt=["innerHTML"],Pe=L({__name:"BlogPostDescription",props:{description:{}},setup(e){return(l,s)=>(i(),f("div",ft,[q("div",{innerHTML:l.description},null,8,yt)]))}}),je=L({__name:"BlogPostImage",props:{coverImageUrl:{},post:{},maxHeight:{},maxWidth:{},alignment:{},thumb:{type:Boolean}},setup(e){const l=e,s=Ne(He),r=s.greaterOrEqual("sm"),g=s.greaterOrEqual("md"),p=b(0),a=b(0),$=w(()=>p.value>a.value),v=w(()=>p.value>a.value*1.5),P=w(()=>a.value>p.value),o=w(()=>a.value>p.value*1.5),m=w(()=>g.value?"60%":r.value?"80%":l.maxHeight?l.maxHeight:$.value&&o.value?"80%":"100%"),k=w(()=>g.value?"60%":r.value?"80%":l.maxWidth?l.maxWidth:P.value&&v.value?"80%":"100%");return me(()=>{const t=new Image;t.src=l.coverImageUrl,t.onload=()=>{p.value=t.height,a.value=t.width}}),(t,c)=>{var d,u;return i(),f("div",{class:j({flex:!0,"justify-start":t.alignment==="left","justify-center":t.alignment===void 0||t.alignment==="center","justify-end":t.alignment==="right"})},[h(ue,{class:j(["!p-0 md:!p-3 my-5",t.thumb?"w-full":"w-fit xl:!p-5 border border-white md:border-none !rounded-none md:!rounded-primary",(d=t.post)==null?void 0:d.colorTertiary,((u=t.post)==null?void 0:u.opacityTertiary)||"bg-opacity-50"]),style:Ze({maxHeight:m.value,maxWidth:k.value})},{default:O(()=>[t.thumb?(i(),f("div",{key:0,class:"h-[20vh] inset-0 rounded-primary",style:Ze({backgroundImage:`url(${t.coverImageUrl})`,backgroundSize:"cover"})},null,4)):(i(),x(Ql,{key:1,src:t.coverImageUrl,"image-class":"cover-image md:rounded-primary"},null,8,["src"]))]),_:1},8,["class","style"])],2)}}}),ht={class:"flex flex-wrap justify-end h-fit gap-3"},Se=L({__name:"BlogPostMutationButtons",emits:["editClicked","deleteClicked"],setup(e){return(l,s)=>(i(),f("div",ht,[h(N,{class:"min-w-80",label:"Edit",onClick:s[0]||(s[0]=r=>l.$emit("editClicked"))}),h(N,{class:"min-w-80",type:"danger",outlined:"",label:"Delete",onClick:s[1]||(s[1]=r=>l.$emit("deleteClicked"))})]))}}),Te=L({__name:"BlogPostSectionTitle",props:{class:{},alignment:{},isExpandable:{type:Boolean},isExpanded:{type:Boolean},isSubTitle:{type:Boolean}},emits:["click"],setup(e){const l=e;return(s,r)=>(i(),f("div",{class:j(["font-bold",{"text-lg md:text-2xl":!s.isSubTitle},{"hover:underline cursor-pointer":s.isExpandable},l.class])},[q("div",{class:j({block:!s.alignment,flex:!!s.alignment,"justify-start":s.alignment==="left","justify-center":s.alignment==="center","justify-end":s.alignment==="right"})},[q("span",{class:"flex",onClick:r[0]||(r[0]=g=>s.$emit("click"))},[s.isExpandable&&s.alignment==="right"?(i(),f("i",{key:0,class:j(["pi pi-angle-down animation",{"rotate-180":s.isExpanded}])},null,2)):C("",!0),oe(s.$slots,"default"),s.isExpandable&&(s.alignment==="left"||s.alignment==="center")?(i(),f("i",{key:1,class:j(["pi pi-angle-down animation",{"rotate-180":s.isExpanded}])},null,2)):C("",!0)])],2)],2))}}),kt={class:"table-auto min-w-full text-left"},wt={key:0,class:"border border-white"},il=L({__name:"BlogPostTable",props:{tableData:{},alignment:{}},setup(e){const l=e,s=w(()=>ul(l.tableData));return(r,g)=>(i(),f("div",{class:j(["my-8 flex max-w-[50vw] overflow-x-auto",{"justify-start":r.alignment==="left","justify-center":r.alignment==="center"||!r.alignment,"justify-end":r.alignment==="right"}])},[q("table",kt,[q("tbody",null,[(i(!0),f(A,null,J(s.value,(p,a)=>(i(),f(A,{key:a},[p.every($=>!$)?C("",!0):(i(),f("tr",wt,[(i(!0),f(A,null,J(p,($,v)=>(i(),f(A,{key:v},[v!==0||!s.value.every(P=>!P.length||!P[0])?(i(),f("td",{key:0,class:j(["border border-white text-center",{"font-bold":a===0||v===0}])},Q($),3)):C("",!0)],64))),128))]))],64))),128))])])],2))}}),$t=e=>{const l=_(),{fetchBlogPost:s,checkBlogPostForUnreadReactions:r}=l,{blogPosts:g,blogReactions:p,isBlogPostDatabaseActionActive:a}=z(l);let $=[];const v=b(),P=o=>{o.metadata.hasPendingWrites||a.value||(clearTimeout(v.value),v.value=setTimeout(async()=>{await s(e.id,void 0,{loadingIndicator:!1}),r(g.value.previousData.single,!0)},200))};me(async()=>{p.value.unread=p.value.unread.filter(u=>u.postId!==e.id);const o=pl(e),m=qe.blogPosts(o.isPrivate),k=qe.blogReactions(o.isPrivate),t=El(m,e.id),c=_e(m,el("id","==",e.id)),d=_e(k,el("post","==",t));$.push(ve(c,P)),$.push(ve(d,P))}),cl(()=>{clearTimeout(v.value),$.forEach(o=>{o()})})},Ct=()=>{const e=_(),{fetchBlogPosts:l,checkBlogPostsForUnreadReactions:s}=e,{visibleBlogPosts:r,blogReactions:g,isBlogPostDatabaseActionActive:p}=z(e),{firebaseUser:a}=z(le());let $=[];const v=b(),P=o=>{o.metadata.hasPendingWrites||p.value||(clearTimeout(v.value),v.value=setTimeout(async()=>{var m;await l((m=a.value)==null?void 0:m.uid,{amount:r.value.length,loadingIndicator:!1}),s()},200))};me(()=>{g.value.unread=[],$.push(ve(qe.blogPosts(!1),P)),$.push(ve(qe.blogReactions(!1),P)),a.value&&($.push(ve(qe.blogPosts(!0),P)),$.push(ve(qe.blogReactions(!0),P)))}),cl(()=>{clearTimeout(v.value),$.forEach(o=>{o()})})},Pt={class:"flex gap-3"},Vt={class:"flex justify-between h-fit mt-2 gap-2"},xt={class:"flex flex-wrap gap-3"},Ut={class:"w-full"},St={class:"w-full"},fl=L({__name:"BlogPost",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const l=e,s=Ge(),{publicUsers:r}=z(_()),{firebaseUser:g,isOwner:p}=z(le());s.currentRoute.value.name!==ae.BLOG&&$t(l.post);const a=b(l.post.archived),$=w(()=>{var t;return(t=l.post.allowedUserIds)!=null&&t.length?r.value.filter(c=>{var d;return(d=l.post.allowedUserIds)==null?void 0:d.includes(c.id)}):[]}),v=w(()=>{const t=he(new Date(l.post.date)),c=l.post.dateUpdated?he(new Date(l.post.dateUpdated)):"";return t+` - updated ${c}`}),P=w(()=>{const t=[];return l.post.datePinned&&t.push({value:"Pinned",severity:"success",rounded:!1}),l.post.locked&&t.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),l.post.archived&&t.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),t}),o=w(()=>l.post.sections.map(t=>({...t,isExpandable:m(t)}))),m=t=>!!t.description||!!t.coverImageUrl||!!t.bullets.length||!!t.table,k=()=>{const t=document.createElement("textarea"),{protocol:c,hostname:d,port:u}=window.location,V=`${c}//${d}`+(d==="localhost"?`:${u}`:"");t.value=`${V}#${ml.BLOG.path}/${l.post.id}`,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),xe.success("Copied link!")};return(t,c)=>(i(),x(ue,{id:t.post.id,class:j([{"min-h-[90vh]":!a.value},"border-4 border-transparent","!rounded-primary",t.post.colorSecondary||t.post.colorPrimary||"bg-secondary-900",t.post.opacitySecondary||"bg-opacity-50"]),title:t.post.title,subTitle:v.value,tags:P.value,loading:t.post.loading,isCollapsed:a.value,clickable:"",onClick:c[4]||(c[4]=d=>a.value=!a.value)},{right:O(()=>[q("div",Pt,[a.value?n(p)?(i(),x(Se,{key:1,onEditClicked:c[0]||(c[0]=d=>t.$emit("editClicked")),onDeleteClicked:c[1]||(c[1]=d=>t.$emit("deleteClicked"))})):C("",!0):(i(),x(N,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:k}))])]),default:O(()=>{var d;return[q("div",Vt,[q("div",xt,[(i(!0),f(A,null,J($.value,u=>{var V;return i(),x(n(ye),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:u.id===((V=n(g))==null?void 0:V.uid)?"You":u.displayName,rounded:""},null,8,["label"])}),256))]),n(p)?(i(),f("div",{key:0,class:j(["flex justify-end ms-5",(d=t.post.allowedUserIds)!=null&&d.length?"flex-col md:flex-row":"flex-row"])},[h(Se,{onEditClicked:c[2]||(c[2]=u=>t.$emit("editClicked")),onDeleteClicked:c[3]||(c[3]=u=>t.$emit("deleteClicked"))})],2)):C("",!0)]),h(ue,{class:j(["z-10 min-h-[125px] md:min-h-[160px] p-5 mt-5",t.post.colorPrimary,t.post.opacityPrimary||"bg-opacity-50"])},{default:O(()=>[q("div",{class:j(["flex relative",t.post.countdown||t.post.alignment==="center"?"flex justify-between":""])},[q("div",Ut,[t.post.countdown?(i(),x(re,{key:0,time:new Date(t.post.countdown).getTime(),direction:"down",alignment:t.post.alignment},null,8,["time","alignment"])):C("",!0),t.post.timer?(i(),x(re,{key:1,time:new Date(t.post.timer).getTime(),direction:"up",alignment:t.post.alignment},null,8,["time","alignment"])):C("",!0),t.post.description?(i(),x(Pe,{key:2,description:t.post.description},null,8,["description"])):C("",!0)])],2),t.post.coverImageUrl?(i(),x(je,{key:0,post:t.post,"cover-image-url":t.post.coverImageUrl},null,8,["post","cover-image-url"])):C("",!0),t.post.descriptionFooter?(i(),x(Pe,{key:1,class:"mb-5",description:t.post.descriptionFooter},null,8,["description"])):C("",!0),t.post.table?(i(),x(il,{key:2,tableData:t.post.table},null,8,["tableData"])):C("",!0),h(n(Ue),{onTabOpen:n(Ve)},{default:O(()=>[(i(!0),f(A,null,J(o.value,u=>(i(),x(n(de),{disabled:!u.isExpandable,pt:{headerAction:{class:["px-0 bg-transparent",u.isExpandable?void 0:"cursor-auto"]},headerIcon:{class:{invisible:!u.isExpandable}}}},dl({header:O(()=>[q("div",St,[u.title?(i(),x(Te,{key:0,alignment:u.alignment},{default:O(()=>[ne(Q(u.title),1)]),_:2},1032,["alignment"])):C("",!0),u.subTitle?(i(),x(Te,{key:1,alignment:u.alignment,"is-sub-title":""},{default:O(()=>[ne(Q(u.subTitle),1)]),_:2},1032,["alignment"])):C("",!0),u.isExpandable?C("",!0):(i(),f(A,{key:2},[u.countdown?(i(),x(re,{key:0,time:new Date(u.countdown).getTime(),direction:"down",alignment:u.alignment},null,8,["time","alignment"])):C("",!0),u.timer?(i(),x(re,{key:1,time:new Date(u.timer).getTime(),direction:"up",alignment:u.alignment},null,8,["time","alignment"])):C("",!0)],64))])]),default:O(()=>[u.description?(i(),x(Pe,{key:0,description:u.description,alignment:u.alignment},null,8,["description","alignment"])):C("",!0),u.coverImageUrl?(i(),x(je,{key:1,post:t.post,"cover-image-url":u.coverImageUrl,alignment:u.alignment,"max-height":"30%"},null,8,["post","cover-image-url","alignment"])):C("",!0),h(bt,{bullets:u.bullets,alignment:u.alignment},null,8,["bullets","alignment"]),u.isExpandable?(i(),f(A,{key:2},[u.countdown?(i(),x(re,{key:0,time:new Date(u.countdown).getTime(),direction:"down",alignment:u.alignment},null,8,["time","alignment"])):C("",!0),u.timer?(i(),x(re,{key:1,time:new Date(u.timer).getTime(),direction:"up",alignment:u.alignment},null,8,["time","alignment"])):C("",!0)],64)):C("",!0),u.table?(i(),x(il,{key:3,tableData:u.table,alignment:u.alignment},null,8,["tableData","alignment"])):C("",!0)]),_:2},[u.isExpandable?void 0:{name:"headericon",fn:O(()=>[]),key:"0"}]),1032,["disabled","pt"]))),256))]),_:1},8,["onTabOpen"])]),_:1},8,["class"]),h(ut,{post:t.post},null,8,["post"])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Tt={key:0,class:"flex justify-center mt-5"},Et={class:"grid grid-cols-6 mb-5 gap-5"},It=L({__name:"BlogDetails",emits:["createClicked","editClicked","deleteClicked"],setup(e){const l=Il(),s=Ge(),{firebaseUser:r}=z(le()),g=_(),{fetchBlogPost:p}=g,{blogPosts:a,blogReactions:$,isBlogPostsFetchLoading:v}=z(g),P=w(()=>l.params.postId);return me(async()=>{var o;if($.value.unread=[],P.value)if(((o=a.value.data.single)==null?void 0:o.id)!==P.value){const m=await p(P.value);if(Bl(m)&&m===Dl.PERMISSION_DENIED&&!r.value){s.push({name:ae.LOGIN,params:{redirect:JSON.stringify({name:ae.BLOG_DETAILS,params:{postId:P.value}})}});return}}else a.value.data.single}),(o,m)=>n(v)?(i(),f("div",Tt,[h(N,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:"",label:"Loading..."})])):(i(),f(A,{key:1},[q("div",Et,[h(N,{class:"col-span-full md:col-span-4 lg:col-span-2",type:"tertiary",route:n(ae).BLOG,label:"Back to other posts",icon:"pi pi-arrow-up-left"},null,8,["route"])]),n(a).data.single?(i(),x(fl,{key:0,post:n(a).data.single,onEditClicked:m[0]||(m[0]=k=>o.$emit("editClicked",n(a).data.single)),onDeleteClicked:m[1]||(m[1]=k=>o.$emit("deleteClicked",n(a).data.single))},null,8,["post"])):C("",!0)],64))}});var Bt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Dt=Fe.extend({name:"card",classes:Bt}),Ot={name:"BaseCard",extends:Ke,style:Dt},yl={name:"Card",extends:Ot,inheritAttrs:!1};function Mt(e,l,s,r,g,p){return i(),f("div",T({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),f("div",T({key:0,class:e.cx("header")},e.ptm("header")),[oe(e.$slots,"header")],16)):C("",!0),q("div",T({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(i(),f("div",T({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(i(),f("div",T({key:0,class:e.cx("title")},e.ptm("title")),[oe(e.$slots,"title")],16)):C("",!0),e.$slots.subtitle?(i(),f("div",T({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[oe(e.$slots,"subtitle")],16)):C("",!0)],16)):C("",!0),q("div",T({class:e.cx("content")},e.ptm("content")),[oe(e.$slots,"content")],16),e.$slots.footer?(i(),f("div",T({key:1,class:e.cx("footer")},e.ptm("footer")),[oe(e.$slots,"footer")],16)):C("",!0)],16)],16)}yl.render=Mt;const Rt={class:"flex gap-3"},Lt={class:"min-h-[50vh] flex flex-col"},zt={class:"flex justify-between h-fit mt-2 gap-2"},jt={class:"flex flex-wrap gap-3"},At={class:"relative mt-5 min-h-[20vh] max-h-screen flex flex-col justify-end"},Nt={class:"relative min-h-[20vh] max-h-full flex-grow"},Ht={class:"w-full"},Ft={key:3,class:"w-full"},Kt={class:"flex justify-center mt-5"},Gt={class:"flex justify-center mt-3"},Wt=L({__name:"BlogPostOverview",props:{post:{}},emits:["editClicked","deleteClicked"],setup(e){const l=e,{publicUsers:s}=z(_()),{isOwner:r}=z(le()),g=b(l.post.archived),p=w(()=>{var o;return(o=l.post.allowedUserIds)!=null&&o.length?s.value.filter(m=>{var k;return(k=l.post.allowedUserIds)==null?void 0:k.includes(m.id)}):[]}),a=w(()=>{const o=he(new Date(l.post.date)),m=l.post.dateUpdated?he(new Date(l.post.dateUpdated)):"";return o+` - updated ${m}`}),$=w(()=>{const o=[];return l.post.datePinned&&o.push({value:"Pinned",severity:"success",rounded:!1}),l.post.locked&&o.push({value:"Locked",severity:"danger",rounded:!1,icon:"pi pi-lock"}),l.post.archived&&o.push({value:"Archived",severity:"warning",rounded:!1,icon:"pi pi-file-excel"}),o}),v=w(()=>l.post.sections.length?l.post.sections[0]:null),P=()=>{const o=document.createElement("textarea"),{protocol:m,hostname:k,port:t}=window.location,c=`${m}//${k}`+(k==="localhost"?`:${t}`:"");o.value=`${c}#${ml.BLOG.path}/${l.post.id}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),xe.success("Copied link!")};return(o,m)=>(i(),x(ue,{id:o.post.id,class:j([{"min-h-[50vh]":!g.value},"border-4 border-transparent","!rounded-primary",o.post.colorSecondary||o.post.colorPrimary||"bg-secondary-900",o.post.opacitySecondary||"bg-opacity-50"]),title:o.post.title,subTitle:a.value,tags:$.value,loading:o.post.loading,isCollapsed:g.value,clickable:"",onClick:m[6]||(m[6]=k=>g.value=!g.value)},{right:O(()=>[q("div",Rt,[g.value?n(r)?(i(),x(Se,{key:1,onEditClicked:m[0]||(m[0]=k=>o.$emit("editClicked")),onDeleteClicked:m[1]||(m[1]=k=>o.$emit("deleteClicked"))})):C("",!0):(i(),x(N,{key:0,class:"border-none h-fit",type:"neutral",icon:"pi pi-copy",onClick:P}))])]),default:O(()=>{var k;return[q("div",Lt,[q("div",zt,[q("div",jt,[p.value.length?(i(),f(A,{key:0},[h(n(ye),{class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:p.value[0].displayName,rounded:""},null,8,["label"]),p.value.length>1?(i(),x(n(ye),{key:0,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",icon:"pi pi-user",label:"You",rounded:""})):C("",!0),p.value.length>2?(i(),x(n(ye),{key:1,class:"h-fit !p-0 !px-4 !py-1 bg-red-800 bg-opacity-50",label:`${p.value.length-2} others`,rounded:""},null,8,["label"])):C("",!0)],64)):C("",!0)]),n(r)?(i(),f("div",{key:0,class:j(["flex justify-end ms-5",(k=o.post.allowedUserIds)!=null&&k.length?"flex-col md:flex-row":"flex-row"])},[h(Se,{onEditClicked:m[2]||(m[2]=t=>o.$emit("editClicked")),onDeleteClicked:m[3]||(m[3]=t=>o.$emit("deleteClicked"))})],2)):C("",!0)]),q("div",At,[m[7]||(m[7]=q("div",{class:"absolute inset-0 rounded-primary bg-gradient-to-t from-neutral-500 to-transparent"},null,-1)),q("div",Nt,[h(n(yl),{class:j(["z-10 min-h-[20vh] p-5 text-neutral-300",o.post.colorPrimary,o.post.opacityPrimary||"bg-opacity-50"])},{header:O(()=>[o.post.coverImageUrl?(i(),x(je,{key:0,post:o.post,"cover-image-url":o.post.coverImageUrl,thumb:""},null,8,["post","cover-image-url"])):C("",!0)]),content:O(()=>[q("div",{class:j(["flex relative",o.post.countdown||o.post.alignment==="center"?"flex justify-between":""])},[q("div",Ht,[o.post.countdown?(i(),x(re,{key:0,time:new Date(o.post.countdown).getTime(),direction:"down",alignment:o.post.alignment},null,8,["time","alignment"])):C("",!0),o.post.timer?(i(),x(re,{key:1,time:new Date(o.post.timer).getTime(),direction:"up",alignment:o.post.alignment},null,8,["time","alignment"])):C("",!0),o.post.description?(i(),x(Pe,{key:2,description:o.post.description.substring(0,50)+(o.post.description.length>=50?"...":"")},null,8,["description"])):v.value?(i(),f("div",Ft,[v.value.title?(i(),x(Te,{key:0,alignment:v.value.alignment},{default:O(()=>[ne(Q(v.value.subTitle?v.value.title:`${v.value.title}...`),1)]),_:1},8,["alignment"])):C("",!0),v.value.subTitle?(i(),x(Te,{key:1,alignment:v.value.alignment,"is-sub-title":""},{default:O(()=>[ne(Q(v.value.subTitle)+"... ",1)]),_:1},8,["alignment"])):C("",!0)])):C("",!0)])],2)]),_:1},8,["class"])])]),q("div",Kt,[h(N,{class:"w-full md:w-1/2",type:"neutral",label:"Read more",onClick:m[4]||(m[4]=t=>n(ze).push({name:n(ae).BLOG_DETAILS,params:{postId:o.post.id}}))})]),q("div",Gt,[q("p",{class:j(o.post.reactions.length?"text-yellow-400 hover:text-yellow-500 cursor-pointer":"text-neutral-200"),onClick:m[5]||(m[5]=t=>n(ze).push({name:n(ae).BLOG_DETAILS,params:{postId:o.post.id}}))},Q(o.post.reactions.length)+" replies ",3)])])]}),_:1},8,["id","class","title","subTitle","tags","loading","isCollapsed"]))}}),Qt={key:0,class:"grid grid-cols-6 mb-5 gap-5"},Yt={key:1,class:"grid grid-cols-6 lg:hidden mb-5"},Jt={class:"grid gap-4 md:gap-10 xl:gap-20"},Xt={key:2,class:"flex justify-center mt-5"},Zt=L({__name:"BlogPosts",emits:["createClicked","editClicked","deleteClicked"],setup(e){const l=_(),{fetchBlogPosts:s}=l,{blogPosts:r,visibleBlogPosts:g,isBlogPostsFetchLoading:p}=z(l),{isOwner:a,firebaseUser:$}=z(le());Ct();const v=b(),P=b(),o=b(),m=async t=>{var c;r.value.visibility!==t&&(r.value.data[t].length||await s((c=$.value)==null?void 0:c.uid,{visibility:t}),r.value.visibility=t,r.value.isLastPage=!1,Be(v.value))},k=async()=>{var c;const t=g.value.length;await s((c=$.value)==null?void 0:c.uid),g.value[t]&&Be(P.value[t])};return me(()=>{r.value.loadedOnce||($.value?r.value.visibility="private":r.value.visibility!=="public"&&(r.value.visibility="public"),r.value.loadedOnce=!0)}),Ie(()=>{var t;return(t=P.value)==null?void 0:t.length},()=>{var t;if((t=P.value)!=null&&t.length&&o.value){const c=g.value.find(d=>d.id===o.value);if(c){const d=g.value.indexOf(c);Be(P.value[d]),o.value=void 0}}}),(t,c)=>(i(),f("div",{ref_key:"container",ref:v},[n($)?(i(),f("div",Qt,[h(N,{class:"hidden lg:block col-span-2",type:"secondary",outlined:n(r).visibility!=="public",loading:n(r).isLoading.public.fetch,label:"Public Posts",onClick:c[0]||(c[0]=d=>m("public"))},null,8,["outlined","loading"]),n(a)?(i(),x(N,{key:0,class:"col-span-full md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-2",type:"tertiary",label:"New Post",onClick:c[1]||(c[1]=d=>t.$emit("createClicked"))})):C("",!0),h(N,{class:"hidden lg:block col-start-5 col-span-2",type:"secondary",outlined:n(r).visibility!=="private",loading:n(r).isLoading.private.fetch,label:"Private Posts",onClick:c[2]||(c[2]=d=>m("private"))},null,8,["outlined","loading"])])):C("",!0),n($)?(i(),f("div",Yt,[h(N,{class:"col-span-3 md:col-start-2 md:col-span-2 rounded-r-none",type:"secondary",outlined:n(r).visibility!=="public",loading:n(r).isLoading.public.fetch,label:"Public Posts",onClick:c[3]||(c[3]=d=>m("public"))},null,8,["outlined","loading"]),h(N,{class:"col-span-3 md:col-start-4 md:col-span-2 rounded-l-none",type:"secondary",outlined:n(r).visibility!=="private",loading:n(r).isLoading.private.fetch,label:"Private Posts",onClick:c[4]||(c[4]=d=>m("private"))},null,8,["outlined","loading"])])):C("",!0),q("div",Jt,[n(g).length?(i(!0),f(A,{key:0},J(n(g),(d,u)=>(i(),f("div",{key:d.id,ref_for:!0,ref_key:"posts",ref:P},[u===0?(i(),x(fl,{key:0,post:d,onEditClicked:V=>t.$emit("editClicked",d),onDeleteClicked:V=>t.$emit("deleteClicked",d)},null,8,["post","onEditClicked","onDeleteClicked"])):(i(),x(Wt,{key:1,post:d,onEditClicked:V=>t.$emit("editClicked",d),onDeleteClicked:V=>t.$emit("deleteClicked",d)},null,8,["post","onEditClicked","onDeleteClicked"]))]))),128)):n(p)?C("",!0):(i(),x(ue,{key:1,class:"!bg-red-900 !bg-opacity-40 !rounded-primary",title:"No posts"}))]),n(r).isLastPage?C("",!0):(i(),f("div",Xt,[h(N,{class:"w-full md:w-1/2 xl:w-1/4",outlined:"",loading:n(g).length>0&&n(p),label:"Load more posts",onClick:k},null,8,["loading"])]))],512))}}),Re=e=>(e==null?void 0:e.id)??Ml(),Le=e=>{var l;return{date:(e==null?void 0:e.date)||new Date,dateUpdated:(e==null?void 0:e.dateUpdated)||new Date,title:(e==null?void 0:e.title)??"",description:(e==null?void 0:e.description)??"",descriptionFooter:(e==null?void 0:e.descriptionFooter)??"",coverImageUrl:(e==null?void 0:e.coverImageUrl)??"",timer:(e==null?void 0:e.timer)??null,countdown:(e==null?void 0:e.countdown)??null,table:(e==null?void 0:e.table)??"",sections:((l=e==null?void 0:e.sections)==null?void 0:l.slice().map(s=>({...s,bullets:s.bullets.slice()})))??[],alignment:(e==null?void 0:e.alignment)??"center",colorPrimary:(e==null?void 0:e.colorPrimary)??"",colorSecondary:(e==null?void 0:e.colorSecondary)??"",colorTertiary:(e==null?void 0:e.colorTertiary)??"",opacityPrimary:(e==null?void 0:e.opacityPrimary)??"",opacitySecondary:(e==null?void 0:e.opacitySecondary)??"",opacityTertiary:(e==null?void 0:e.opacityTertiary)??"",locked:(e==null?void 0:e.locked)??!1,allowedUserIds:(e==null?void 0:e.allowedUserIds)??[],archived:(e==null?void 0:e.archived)??!1,datePinned:(e==null?void 0:e.datePinned)??null}},we=Ol("blogPostDialog",{state:()=>({isOpen:!1,blogPostOriginal:null,blogPostMutationId:Re(null),blogPostMutation:Le(null),blogPostMutationChanges:{hasContentChanges:!1,hasStylingChanges:!1,hasSettingsChanges:!1}}),getters:{blogPostOriginalMutation:e=>e.blogPostOriginal?ie.convert(e.blogPostOriginal):null,hasBlogPostMutationContentChanges:e=>e.blogPostMutationChanges.hasContentChanges,hasBlogPostMutationStylingChanges:e=>e.blogPostMutationChanges.hasStylingChanges,hasBlogPostMutationSettingsChanges:e=>e.blogPostMutationChanges.hasSettingsChanges},actions:{openWith(e){this.blogPostOriginal=e,this.blogPostMutationId=Re(e),this.blogPostMutation=Le(e),this.isOpen=!0},close(){this.isOpen=!1,this.blogPostOriginal=null,this.blogPostMutationId=Re(null),this.blogPostMutation=Le(null)},getBlogPostMutationContent(){return ie.Content.convert(this.blogPostMutation)},getBlogPostMutationStyling(){return ie.Styling.convert(this.blogPostMutation)},getBlogPostMutationSettings(){return ie.Settings.convert(this.blogPostMutation)},async isMutationEqual(){this.blogPostOriginalMutation&&(this.blogPostMutationChanges.hasContentChanges=!De(ie.Content.convert(this.blogPostOriginalMutation),this.getBlogPostMutationContent()),this.blogPostMutationChanges.hasStylingChanges=!De(ie.Styling.convert(this.blogPostOriginalMutation),this.getBlogPostMutationStyling()),this.blogPostMutationChanges.hasSettingsChanges=!De(ie.Settings.convert(this.blogPostOriginalMutation),this.getBlogPostMutationSettings()))}}}),_t={class:"m-4"},en=["for"],Ee=L({__name:"DateField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{expose:l,emit:s}){const r=e,g=w({get:()=>r.modelValue,set:v=>{$("update:modelValue",v)}}),p=w(()=>r.name+(r.id!==void 0?"."+r.id:"")),a=()=>{},$=s;return l({test:a}),(v,P)=>{const o=Rl("VueDatePicker");return i(),f("div",_t,[v.label?(i(),f("label",T({key:0,class:"block text-sm font-bold mb-2",for:"dp-input-"+p.value},v.labelProps),Q(v.label),17,en)):C("",!0),h(o,{uid:p.value,class:"p-input px-5",modelValue:g.value,"onUpdate:modelValue":P[0]||(P[0]=m=>g.value=m),dark:""},null,8,["uid","modelValue"])])}}}),ln={class:"m-4"},tn=["for"],nn={class:"table w-full"},on={class:"table-header-group"},rn={key:0,class:"table-row"},an={class:"table-cell"},sn={class:"table-cell"},dn={class:"table-row-group"},un={key:0,class:"table-cell"},pn={key:1,class:"table-cell"},cn={key:2,class:"table-cell"},mn={class:"table-footer-group"},qn={class:"table-row"},vn={class:"table-cell"},hl=L({__name:"TableField",props:{id:{},name:{},label:{},modelValue:{},labelProps:{}},emits:["update:modelValue","update:error"],setup(e,{emit:l}){const s=e,r=l,p=Ne(He).greaterOrEqual("md"),a=w({get:()=>ul(s.modelValue),set:d=>{r("update:modelValue",ll(d))}}),$=w(()=>s.name+(s.id?"."+s.id:"")),v=w(()=>{var d;return p.value&&((d=a.value[0])==null?void 0:d.length)<3}),P=(d,u,V)=>{const S=[...a.value];S[d][u]=V,r("update:modelValue",ll(S))},o=()=>{const d=a.value;if(d.length){const u=d[0];u.length?a.value=[...d,u.map(()=>"")]:a.value=[...d,[""]]}else a.value=[[""]]},m=()=>{a.value=a.value.slice(0,-1)},k=()=>{a.value=a.value.map(d=>[...d,""])},t=()=>{a.value=a.value.map(d=>d.slice(0,-1))},c=(d,u)=>d===u.length-1;return(d,u)=>(i(),f("div",ln,[d.label?(i(),f("label",T({key:0,class:"block text-sm font-bold mb-2",for:$.value},d.labelProps),Q(d.label),17,tn)):C("",!0),q("div",nn,[q("div",on,[a.value.length&&a.value[0].length>1?(i(),f("div",rn,[(i(!0),f(A,null,J(a.value[0].slice(0,-1),V=>(i(),f("div",an))),256)),q("div",sn,[a.value.length&&a.value[0].length?(i(),x(n(Ce),{key:0,class:"md:text-start text-nowrap",icon:"pi pi-times",label:v.value?"Remove column":void 0,onClick:t},null,8,["label"])):C("",!0)])])):C("",!0)]),q("div",dn,[(i(!0),f(A,null,J(a.value,(V,S)=>(i(),f("div",{key:S,class:"table-row"},[(i(!0),f(A,null,J(V,(M,R)=>(i(),x(pe,{class:"table-cell !m-0",key:R,name:`${d.name}.${S}.${R}`,modelValue:M,placeholder:S===0||R===0?"header":"cell","onUpdate:modelValue":F=>P(S,R,F.toString())},null,8,["name","modelValue","placeholder","onUpdate:modelValue"]))),128)),S===0?(i(),f("div",un,[h(n(Ce),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:v.value?"Add column":void 0,onClick:k},null,8,["label"])])):c(S,a.value)&&a.value.length>1?(i(),f("div",pn,[h(n(Ce),{class:"md:text-start text-nowrap",icon:"pi pi-times",label:v.value?"Remove row":void 0,onClick:m},null,8,["label"])])):(i(),f("div",cn))]))),128))]),q("div",mn,[q("div",qn,[q("div",vn,[h(n(Ce),{class:"md:text-start text-nowrap",icon:"pi pi-plus",label:v.value?"Add row":void 0,onClick:o},null,8,["label"])])])])])]))}});var gn=`
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
`,bn={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},rl=Fe.extend({name:"editor",css:gn,classes:bn}),fn={name:"BaseEditor",extends:Ke,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:rl,provide:function(){return{$parentInstance:this}},beforeMount:function(){var l;rl.loadStyle({nonce:(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.csp)===null||l===void 0?void 0:l.nonce})}};function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},ke(e)}function al(e,l){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),s.push.apply(s,r)}return s}function yn(e){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?al(Object(s),!0).forEach(function(r){hn(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):al(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function hn(e,l,s){return l=kn(l),l in e?Object.defineProperty(e,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[l]=s,e}function kn(e){var l=wn(e,"string");return ke(l)=="symbol"?l:String(l)}function wn(e,l){if(ke(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var r=s.call(e,l||"default");if(ke(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(e)}var sl=function(){try{return window.Quill}catch{return null}}(),kl={name:"Editor",extends:fn,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(l,s){l!==s&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(l))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var l=this,s={modules:yn({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};sl?(this.quill=new sl(this.$refs.editorElement,s),this.initQuill(),this.handleLoad()):Ll(()=>import("./quill-7w2Hp1PB.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(function(r){r&&zl.isExist(l.$refs.editorElement)&&(r.default?l.quill=new r.default(l.$refs.editorElement,s):l.quill=new r(l.$refs.editorElement,s),l.initQuill())}).then(function(){l.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(l){this.quill&&(l?this.quill.setContents(this.quill.clipboard.convert(l)):this.quill.setText(""))},initQuill:function(){var l=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(s,r,g){if(g==="user"){var p=l.$refs.editorElement.children[0].innerHTML,a=l.quill.getText().trim();p==="<p><br></p>"&&(p=""),l.$emit("update:modelValue",p),l.$emit("text-change",{htmlValue:p,textValue:a,delta:s,source:g,instance:l.quill})}}),this.quill.on("selection-change",function(s,r,g){var p=l.$refs.editorElement.children[0].innerHTML,a=l.quill.getText().trim();l.$emit("selection-change",{htmlValue:p,textValue:a,range:s,oldRange:r,source:g,instance:l.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function $n(e,l,s,r,g,p){return i(),f("div",T({class:e.cx("root")},e.ptmi("root")),[q("div",T({ref:"toolbarElement",class:e.cx("toolbar")},e.ptm("toolbar")),[oe(e.$slots,"toolbar",{},function(){return[q("span",T({class:"ql-formats"},e.ptm("formats")),[q("select",T({class:"ql-header",defaultValue:"0"},e.ptm("header")),[q("option",T({value:"1"},e.ptm("option")),"Heading",16),q("option",T({value:"2"},e.ptm("option")),"Subheading",16),q("option",T({value:"0"},e.ptm("option")),"Normal",16)],16),q("select",T({class:"ql-font"},e.ptm("font")),[q("option",jl(Al(e.ptm("option"))),null,16),q("option",T({value:"serif"},e.ptm("option")),null,16),q("option",T({value:"monospace"},e.ptm("option")),null,16)],16)],16),q("span",T({class:"ql-formats"},e.ptm("formats")),[q("button",T({class:"ql-bold",type:"button"},e.ptm("bold")),null,16),q("button",T({class:"ql-italic",type:"button"},e.ptm("italic")),null,16),q("button",T({class:"ql-underline",type:"button"},e.ptm("underline")),null,16)],16),(i(),f("span",T({key:g.reRenderColorKey,class:"ql-formats"},e.ptm("formats")),[q("select",T({class:"ql-color"},e.ptm("color")),null,16),q("select",T({class:"ql-background"},e.ptm("background")),null,16)],16)),q("span",T({class:"ql-formats"},e.ptm("formats")),[q("button",T({class:"ql-list",value:"ordered",type:"button"},e.ptm("list")),null,16),q("button",T({class:"ql-list",value:"bullet",type:"button"},e.ptm("list")),null,16),q("select",T({class:"ql-align"},e.ptm("select")),[q("option",T({defaultValue:""},e.ptm("option")),null,16),q("option",T({value:"center"},e.ptm("option")),null,16),q("option",T({value:"right"},e.ptm("option")),null,16),q("option",T({value:"justify"},e.ptm("option")),null,16)],16)],16),q("span",T({class:"ql-formats"},e.ptm("formats")),[q("button",T({class:"ql-link",type:"button"},e.ptm("link")),null,16),q("button",T({class:"ql-image",type:"button"},e.ptm("image")),null,16),q("button",T({class:"ql-code-block",type:"button"},e.ptm("codeBlock")),null,16)],16),q("span",T({class:"ql-formats"},e.ptm("formats")),[q("button",T({class:"ql-clean",type:"button"},e.ptm("clean")),null,16)],16)]})],16),q("div",T({ref:"editorElement",class:e.cx("content"),style:e.editorStyle},e.ptm("content")),null,16)],16)}kl.render=$n;const Cn={class:"m-4"},Pn=["for"],Ae=L({__name:"RichTextEditor",props:{id:{},name:{},label:{},placeholder:{},modelValue:{},error:{},rules:{},editorProps:{},labelProps:{},minLength:{},maxLength:{}},emits:["update:modelValue","update:error","click"],setup(e,{expose:l,emit:s}){const r=e,g=w({get:()=>r.modelValue||"",set:o=>{P("update:modelValue",o),v(o)}}),p=w(()=>r.label?r.label+((r.rules??[]).some(o=>o.type===Wl.Required)?" *":""):void 0),a=w(()=>r.name+(r.id?"."+r.id:"")),$=({instance:o})=>{o.setContents(o.clipboard.convert({html:g.value}))},v=async o=>{const m=o||g.value,k=r.rules||[];typeof r.minLength=="number"&&k.push(ce.MinLength),typeof r.maxLength=="number"&&k.push(ce.MaxLength);const t={value:m,minLength:r.minLength,maxLength:r.maxLength},c=k.filter(d=>!d.test(t)).map(d=>{var u;return((u=d.compareError)==null?void 0:u.call(d,t))||d.error(t)})||[];P("update:error",c[0]||"")},P=s;return l({test:v}),(o,m)=>(i(),f("div",Cn,[o.label?(i(),f("label",T({key:0,class:"block text-sm font-bold mb-2",for:a.value},o.labelProps),Q(p.value),17,Pn)):C("",!0),h(n(kl),T({id:a.value,placeholder:o.placeholder,modelValue:g.value,"onUpdate:modelValue":m[0]||(m[0]=k=>g.value=k),onLoad:$},o.editorProps),null,16,["id","placeholder","modelValue"]),o.error?(i(),x(Gl,{key:1,name:o.name,error:o.error},null,8,["name","error"])):C("",!0)]))}}),Vn={key:0,class:"mb-5 p-4 border-y"},xn={class:"flex"},Un=L({__name:"StringListField",props:{id:{},name:{},label:{},placeholder:{},modelValue:{}},emits:["update:modelValue","update:error"],setup(e,{expose:l,emit:s}){const r=e,g=s,p=b(""),a=w({get:()=>r.modelValue.slice(),set:k=>{g("update:modelValue",k),p.value=""}}),$=w(()=>r.name+(r.id?"."+r.id:"")),v=(k,t)=>{const c=a.value.slice();c.splice(k,1,t),a.value=c},P=()=>{p.value.length&&(a.value=[...a.value,p.value])},o=k=>{const t=a.value.slice();t.splice(k,1),a.value=t};return l({test:()=>{}}),(k,t)=>(i(),f("div",null,[h(pe,{id:$.value,name:k.name,label:k.label,modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=c=>p.value=c),max:200,placeholder:k.placeholder,onKeydown:t[1]||(t[1]=Nl(c=>P(),["enter"]))},null,8,["id","name","label","modelValue","placeholder"]),a.value.length?(i(),f("div",Vn,[h(n(bl),{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=c=>a.value=c),itemKey:"index",handle:".drag-handle"},{item:O(({element:c,index:d})=>[q("div",xn,[t[3]||(t[3]=q("i",{class:"drag-handle pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),h(pe,{class:"w-full",id:`${k.name}.${d}`,name:k.name,"model-value":c,max:200,"delete-button":"","onUpdate:modelValue":u=>v(d,u.toString()),"onUpdate:delete":u=>o(d)},null,8,["id","name","model-value","onUpdate:modelValue","onUpdate:delete"])])]),_:1},8,["modelValue"])])):C("",!0)]))}}),Sn={class:"md:px-5"},Tn={class:"flex justify-center"},En={key:0},In={class:"mt-3 flex justify-evenly font-bold"},Bn=L({__name:"BlogPostContentSectionDialogSection",props:{section:{}},emits:["error","delete"],setup(e,{expose:l,emit:s}){const r=s,p=Ne(He).greaterOrEqual("sm"),a=b(!1),$=b(),v=b(),P=b(),o=b(),m=b(),k=b(),t=b(),c=b(),d=b(),u=b(),V=b(),S=b(),M=b(),R=b(!1),F=b(!1),Y=b(!1),W=w(()=>[d.value,u.value,V.value,S.value,M.value,R.value,F.value,Y.value].some(E=>!!E)),D=w(()=>p.value?"View more options":"View more"),I=w(()=>p.value?"Hide more options":"View less");return l({test:async()=>{var E,U,y,B,X,$e,K,G;await Promise.all([(E=$.value)==null?void 0:E.test(),(U=v.value)==null?void 0:U.test(),(y=P.value)==null?void 0:y.test(),(B=m.value)==null?void 0:B.test(),(X=o.value)==null?void 0:X.test(),($e=k.value)==null?void 0:$e.test(),(K=t.value)==null?void 0:K.test(),(G=c.value)==null?void 0:G.test()]),r("error",W.value)}}),(E,U)=>(i(),f("div",Sn,[h(pe,{class:"mt-0 pt-5",ref_key:"title",ref:$,id:E.section.id,name:"title",label:"Section Title",modelValue:E.section.title,"onUpdate:modelValue":U[0]||(U[0]=y=>E.section.title=y),error:d.value,"onUpdate:error":U[1]||(U[1]=y=>d.value=y),max:50},null,8,["id","modelValue","error"]),h(pe,{ref_key:"subTitle",ref:v,id:E.section.id,name:"subTitle",label:"Section Subtitle",modelValue:E.section.subTitle,"onUpdate:modelValue":U[2]||(U[2]=y=>E.section.subTitle=y),error:u.value,"onUpdate:error":U[3]||(U[3]=y=>u.value=y),max:200},null,8,["id","modelValue","error"]),h(Ae,{ref_key:"description",ref:P,id:E.section.id,name:"description",label:"Section Description",modelValue:E.section.description,"onUpdate:modelValue":U[4]||(U[4]=y=>E.section.description=y),error:V.value,"onUpdate:error":U[5]||(U[5]=y=>V.value=y),"max-length":1e4},null,8,["id","modelValue","error"]),q("div",Tn,[h(N,{class:"w-full sm:w-2/3 xl:w-2/3 text-nowrap",type:"primary",outlined:"",icon:a.value?"pi pi-angle-up":"pi pi-angle-down",label:a.value?I.value:D.value,onClick:U[6]||(U[6]=y=>a.value=!a.value)},null,8,["icon","label"])]),a.value?(i(),f("div",En,[h(te,{ref_key:"alignment",ref:o,id:E.section.id,name:"alignment",label:"Alignment",modelValue:E.section.alignment,"onUpdate:modelValue":U[7]||(U[7]=y=>E.section.alignment=y),error:M.value,"onUpdate:error":U[8]||(U[8]=y=>M.value=y),options:n(ql),rules:[n(ce).Required]},null,8,["id","modelValue","error","options","rules"]),h(vl,{ref_key:"coverImageUrl",ref:m,id:E.section.id,name:"coverImageUrl",label:"Cover image",modelValue:E.section.coverImageUrl,"onUpdate:modelValue":U[9]||(U[9]=y=>E.section.coverImageUrl=y),error:S.value,"onUpdate:error":U[10]||(U[10]=y=>S.value=y)},null,8,["id","modelValue","error"]),h(Ee,{ref_key:"countdown",ref:k,id:E.section.id,name:"countdown",label:"Countdown",modelValue:E.section.countdown,"onUpdate:modelValue":U[11]||(U[11]=y=>E.section.countdown=y),error:R.value,"onUpdate:error":U[12]||(U[12]=y=>R.value=y)},null,8,["id","modelValue","error"]),h(Ee,{ref_key:"timer",ref:t,id:E.section.id,name:"timer",label:"Timer",modelValue:E.section.timer,"onUpdate:modelValue":U[13]||(U[13]=y=>E.section.timer=y),error:F.value,"onUpdate:error":U[14]||(U[14]=y=>F.value=y)},null,8,["id","modelValue","error"]),h(Un,{ref_key:"bullets",ref:c,id:E.section.id,name:"bullets",label:"Section Bullets",placeholder:"New bullet...",modelValue:E.section.bullets,"onUpdate:modelValue":U[15]||(U[15]=y=>E.section.bullets=y)},null,8,["id","modelValue"]),h(hl,{id:E.section.id,name:"table",label:"Table",modelValue:E.section.table,"onUpdate:modelValue":U[16]||(U[16]=y=>E.section.table=y)},null,8,["id","modelValue"])])):C("",!0),q("div",In,[h(N,{class:"w-full sm:w-2/3 md:w-1/2 xl:w-2/3",type:"danger",outlined:"",label:"Delete",onClick:U[17]||(U[17]=y=>E.$emit("delete"))})])]))}}),Dn={class:"flex gap-5"},On={class:"mt-3 flex justify-center"},Mn=L({__name:"BlogPostContentDialogSection",emits:["update:selected","error"],setup(e,{expose:l,emit:s}){const r=s,g=we(),{blogPostOriginal:p,blogPostMutation:a,isOpen:$}=z(g),v=b(),P=b(),o=b(),m=b(),k=b(),t=b(),c=b([]),d=b(),u=b(),V=b(),S=b(),M=b(),R=b(!1),F=b(!1),Y=b({}),W=w(()=>[u.value,V.value,S.value,M.value,R.value,F.value,Object.values(Y.value).some(U=>U)].some(U=>!!U)),D=()=>{a.value.sections.push({id:Hl(),title:"",subTitle:"",description:"",alignment:"left",coverImageUrl:"",countdown:null,timer:null,table:"",bullets:[]})},I=U=>{const y=a.value.sections.slice(),B=y.findIndex(X=>X.id===U);y.splice(B,1),g.blogPostMutation.sections=y},H=(U,y)=>{Y.value[y]=U};return l({test:async()=>{for(const U of c.value)await U.test();await Promise.all([v.value.test(),P.value.test(),o.value.test(),k.value.test(),t.value.test()]),r("error",W.value),Y.value={}}}),(U,y)=>(i(),f(A,null,[h(pe,{ref_key:"title",ref:v,name:"title",label:"Title",placeholder:"Amazing Post",modelValue:n(a).title,"onUpdate:modelValue":y[0]||(y[0]=B=>n(a).title=B),error:u.value,"onUpdate:error":y[1]||(y[1]=B=>u.value=B),rules:[n(ce).Required],"min-length":3,"max-length":50},null,8,["modelValue","error","rules"]),h(Ae,{ref_key:"description",ref:P,name:"description",label:"Description",placeholder:"Something about my post...",modelValue:n(a).description,"onUpdate:modelValue":y[2]||(y[2]=B=>n(a).description=B),error:V.value,"onUpdate:error":y[3]||(y[3]=B=>V.value=B),"max-length":1e4},null,8,["modelValue","error"]),h(vl,{ref_key:"coverImageUrl",ref:m,id:"coverImageUrl",name:"coverImageUrl",label:"Cover image",modelValue:n(a).coverImageUrl,"onUpdate:modelValue":y[4]||(y[4]=B=>n(a).coverImageUrl=B),error:M.value,"onUpdate:error":y[5]||(y[5]=B=>M.value=B),"blog-post":n(p)??void 0},null,8,["modelValue","error","blog-post"]),n($)?(i(),x(n(Ue),{key:0,onTabOpen:n(Ve)},{default:O(()=>[h(n(de),{header:"Other content"},{default:O(()=>[h(Ae,{ref_key:"descriptionFooter",ref:o,name:"descriptionFooter",label:"Footer",placeholder:"Some beautiful ending...",modelValue:n(a).descriptionFooter,"onUpdate:modelValue":y[6]||(y[6]=B=>n(a).descriptionFooter=B),error:S.value,"onUpdate:error":y[7]||(y[7]=B=>S.value=B),"max-length":1e4},null,8,["modelValue","error"]),h(Ee,{ref_key:"countdown",ref:k,name:"countdown",label:"Countdown",modelValue:n(a).countdown,"onUpdate:modelValue":y[8]||(y[8]=B=>n(a).countdown=B),error:R.value,"onUpdate:error":y[9]||(y[9]=B=>R.value=B)},null,8,["modelValue","error"]),h(Ee,{ref_key:"timer",ref:t,name:"timer",label:"Timer",modelValue:n(a).timer,"onUpdate:modelValue":y[10]||(y[10]=B=>n(a).timer=B),error:F.value,"onUpdate:error":y[11]||(y[11]=B=>F.value=B)},null,8,["modelValue","error"]),h(hl,{name:"table",label:"Table",modelValue:n(a).table,"onUpdate:modelValue":y[12]||(y[12]=B=>n(a).table=B)},null,8,["modelValue"])]),_:1}),h(n(de),{header:"Sections"},{default:O(()=>[h(n(bl),{ref_key:"draggable",ref:d,modelValue:n(a).sections,"onUpdate:modelValue":y[13]||(y[13]=B=>n(a).sections=B),itemKey:B=>B.id,handle:".drag-handle"},{item:O(({element:B})=>[n($)?(i(),x(n(Ue),{key:0,onTabOpen:n(Ve)},{default:O(()=>[h(n(de),{pt:{header:{class:"drag-handle"},toggleableContent:{class:"background-gray-dark rounded-t-primary rounded-b-primary"}}},{header:O(()=>[q("div",Dn,[y[14]||(y[14]=q("i",{class:"pi pi-arrows-v place-self-center hover:cursor-pointer"},null,-1)),q("p",null,Q(B.title||"New section"),1)])]),default:O(()=>[h(Bn,{ref:X=>{c.value[B.id]=X},section:B,"is-open":n($),onDelete:X=>I(B.id),onError:X=>H(X,B.id)},null,8,["section","is-open","onDelete","onError"])]),_:2},1024)]),_:2},1032,["onTabOpen"])):C("",!0)]),_:1},8,["modelValue","itemKey"]),q("div",On,[h(N,{class:"w-1/2",type:"green",label:"Add Section",onClick:D})])]),_:1})]),_:1},8,["onTabOpen"])):C("",!0)],64))}}),Rn=L({__name:"BlogPostSettingsDialogSection",emits:["error"],setup(e,{expose:l,emit:s}){const r=s,{firebaseUser:g,publicUser:p}=z(le()),a=_(),{allowedPublicUsers:$}=a,{publicUsers:v}=z(a),P=we(),{blogPostMutation:o}=z(P),m=b(),k=b(),t=b(),c=b(),d=w({get(){return!!o.value.datePinned},set(I){o.value.datePinned=I?new Date:null}}),u=b(),V=b(),S=b(),M=b(),R=w(()=>[u.value,V.value,S.value,M.value].some(I=>!!I)),F=w(()=>v.value.map(({id:I,displayName:H})=>({value:I,label:H}))),Y=b([]),W=I=>{o.value.allowedUserIds=I},D=async()=>{o.value.allowedUserIds.length&&!Y.value.length&&(u.value="Invalid user ID's"),await Promise.all([k.value.test(),t.value.test(),c.value.test()]),r("error",R.value)};return Ie(()=>o.value.allowedUserIds,async I=>{Y.value=await $(I)},{immediate:!0}),l({test:D}),(I,H)=>(i(),f(A,null,[h(te,{ref_key:"allowedUsers",ref:m,name:"allowedUserIds",label:"Allowed users",placeholder:"This post is public","model-value":n(o).allowedUserIds,error:u.value,"onUpdate:error":H[0]||(H[0]=E=>u.value=E),"onUpdate:arrayValue":W,options:[{value:n(g).uid,label:n(p).displayName},...F.value.filter(({value:E})=>{var U;return E!==((U=n(g))==null?void 0:U.uid)})],multiple:""},null,8,["model-value","error","options"]),h(Me,{ref_key:"pinned",ref:c,name:"pinned",label:"Pinned",modelValue:d.value,"onUpdate:modelValue":H[1]||(H[1]=E=>d.value=E)},null,8,["modelValue"]),h(Me,{ref_key:"locked",ref:k,name:"locked",label:"Locked for commenting",modelValue:n(o).locked,"onUpdate:modelValue":H[2]||(H[2]=E=>n(o).locked=E)},null,8,["modelValue"]),h(Me,{ref_key:"archived",ref:t,name:"archived",label:"Archived",modelValue:n(o).archived,"onUpdate:modelValue":H[3]||(H[3]=E=>n(o).archived=E)},null,8,["modelValue"])],64))}}),Ln=L({__name:"BlogPostStylingDialogSection",emits:["error"],setup(e,{expose:l,emit:s}){const r=s,g=we(),{blogPostMutation:p}=z(g),a=b(),$=b(),v=b(),P=b(),o=b(),m=b(),k=b(),t=b(),c=b(),d=b(),u=b(),V=b(),S=b(),M=b(),R=w(()=>[t.value,c.value,d.value,u.value,V.value,S.value,M.value].some(W=>!!W)),F=w(()=>Kl(tl.find(W=>W.value===p.value.colorPrimary)));return l({test:async()=>{await Promise.all([a.value.test(),$.value.test(),v.value.test(),P.value.test(),o.value.test(),m.value.test(),k.value.test()]),r("error",R.value)}}),(W,D)=>(i(),f(A,null,[h(te,{ref_key:"alignment",ref:a,name:"alignment",label:"Alignment",modelValue:n(p).alignment,"onUpdate:modelValue":D[0]||(D[0]=I=>n(p).alignment=I),error:t.value,"onUpdate:error":D[1]||(D[1]=I=>t.value=I),options:n(ql),rules:[n(ce).Required]},null,8,["modelValue","error","options","rules"]),h(te,{ref_key:"colorPrimary",ref:$,name:"colorPrimary",label:"Primary Style",modelValue:n(p).colorPrimary,"onUpdate:modelValue":D[2]||(D[2]=I=>n(p).colorPrimary=I),error:c.value,"onUpdate:error":D[3]||(D[3]=I=>c.value=I),options:n(tl),rules:[n(ce).Required]},null,8,["modelValue","error","options","rules"]),h(te,{ref_key:"opacityPrimary",ref:o,name:"opacityPrimary",label:"Primary Opacity",modelValue:n(p).opacityPrimary,"onUpdate:modelValue":D[4]||(D[4]=I=>n(p).opacityPrimary=I),error:V.value,"onUpdate:error":D[5]||(D[5]=I=>V.value=I),options:n(Oe)},null,8,["modelValue","error","options"]),h(te,{ref_key:"colorSecondary",ref:v,name:"colorSecondary",label:"Secondary Style",modelValue:n(p).colorSecondary,"onUpdate:modelValue":D[6]||(D[6]=I=>n(p).colorSecondary=I),error:d.value,"onUpdate:error":D[7]||(D[7]=I=>d.value=I),options:F.value},null,8,["modelValue","error","options"]),h(te,{ref_key:"opacitySecondary",ref:m,name:"opacitySecondary",label:"Secondary Opacity",modelValue:n(p).opacitySecondary,"onUpdate:modelValue":D[8]||(D[8]=I=>n(p).opacitySecondary=I),error:S.value,"onUpdate:error":D[9]||(D[9]=I=>S.value=I),options:n(Oe)},null,8,["modelValue","error","options"]),h(te,{ref_key:"colorTertiary",ref:P,name:"colorTertiary",label:"Tertiary Style",modelValue:n(p).colorTertiary,"onUpdate:modelValue":D[10]||(D[10]=I=>n(p).colorTertiary=I),error:u.value,"onUpdate:error":D[11]||(D[11]=I=>u.value=I),options:n(Fl)},null,8,["modelValue","error","options"]),h(te,{ref_key:"opacityTertiary",ref:k,name:"opacityTertiary",label:"Tertiary Opacity",modelValue:n(p).opacityTertiary,"onUpdate:modelValue":D[12]||(D[12]=I=>n(p).opacityTertiary=I),error:M.value,"onUpdate:error":D[13]||(D[13]=I=>M.value=I),options:n(Oe)},null,8,["modelValue","error","options"])],64))}}),zn=L({__name:"BlogPostDialog",emits:["scroll-to-updated"],setup(e,{emit:l}){const s=l,{firebaseUser:r}=z(le()),g=_(),{createBlogPost:p,updateBlogPost:a,deleteFilesOfBlogPost:$,toggleBlogPostVisibility:v,isBlogPostsMutationLoading:P}=g,o=we(),{getBlogPostMutationContent:m,getBlogPostMutationStyling:k,getBlogPostMutationSettings:t}=o,{isOpen:c,blogPostOriginal:d,blogPostMutationId:u,blogPostMutation:V,hasBlogPostMutationContentChanges:S,hasBlogPostMutationStylingChanges:M,hasBlogPostMutationSettingsChanges:R}=z(o),F=b(),Y=b(),W=b(),D=b(),I=b(!1),H=b(!1),E=b(!1),U=w(()=>{var K,G,Z,ge,be,ee;return!!((G=(K=d.value)==null?void 0:K.allowedUserIds)!=null&&G.length)&&!((Z=t().allowedUserIds)!=null&&Z.length)||!((be=(ge=d.value)==null?void 0:ge.allowedUserIds)!=null&&be.length)&&!!((ee=t().allowedUserIds)!=null&&ee.length)}),y=w(()=>{const K=[];return S.value&&K.push("Content"),M.value&&K.push("Styling"),R.value&&K.push("Settings"),K.length?"Update "+nl(K):void 0}),B=w(()=>pl(d.value)),X=async()=>{var K,G,Z,ge,be;if(await Promise.all([Y.value.test(),W.value.test(),D.value.test()]),!(I.value||H.value||E.value))if(!d.value)await p(u.value,V.value,(K=r.value)==null?void 0:K.uid)&&(o.close(),s("scroll-to-updated",u.value));else if(U.value){const ee=u.value;o.isOpen=!1,await v(ee,ie.convert(V.value),d.value.reactions,V.value.allowedUserIds.length?"private":"public",(G=r.value)==null?void 0:G.uid)&&(o.close(),xe.success("Successfully updated Post Visibility"),s("scroll-to-updated",ee))}else{const ee=u.value;let se=[];S.value&&se.push(await a(ee,m(),B.value,(Z=r.value)==null?void 0:Z.uid)),M.value&&se.push(await a(ee,k(),B.value,(ge=r.value)==null?void 0:ge.uid)),R.value&&(se.push(await a(ee,t(),B.value,(be=r.value)==null?void 0:be.uid)),s("scroll-to-updated",ee)),se=se.filter(wl=>typeof wl=="string"),se.length&&(xe.success(`Successfully updated Post ${nl(se)}`),o.close())}},$e=async()=>{$(V.value,d.value??void 0),o.close()};return Ie(V,()=>{o.isMutationEqual()},{deep:!0}),(K,G)=>(i(),x(gl,{isOpen:n(c),title:n(d)?"Update Post":"Create Post",description:n(d)?"Update this post":"Create a new post","confirm-text":n(d)?y.value:"Create","confirm-loading":n(P),onConfirm:X,onCancel:$e},{default:O(()=>[q("form",{ref_key:"dialog",ref:F,class:"pt-6 mb-4 xl:px-16"},[n(c)?(i(),x(n(Ue),{key:0,"active-index":0,onTabOpen:n(Ve)},{default:O(()=>[h(n(de),{header:"Content"},{default:O(()=>[h(Mn,{ref_key:"content",ref:Y,onError:G[0]||(G[0]=Z=>I.value=Z)},null,512)]),_:1}),h(n(de),{header:"Styling"},{default:O(()=>[h(Ln,{ref_key:"styling",ref:W,onError:G[1]||(G[1]=Z=>H.value=Z)},null,512)]),_:1}),h(n(de),{header:"Settings"},{default:O(()=>[h(Rn,{ref_key:"settings",ref:D,onError:G[2]||(G[2]=Z=>E.value=Z)},null,512)]),_:1})]),_:1},8,["onTabOpen"])):C("",!0)],512)]),_:1},8,["isOpen","title","description","confirm-text","confirm-loading"]))}}),jn={class:"grid mt-10 md:mt-15"},An={class:"grid justify-center"},Nn={class:"text-lg md:text-xl text-white"},Hn=["innerHTML"],Fn={class:"grid my-5 xl:px-20"},Kn=L({__name:"Blog",setup(e){const{publicUser:l}=z(le()),s=_(),{deleteBlogPost:r}=s,{menuItems:g,content:p}=z(s),a=Ge(),$=we(),v=b(null),P=b(),o=b(!1),m=b(a.currentRoute.value.params.postId),k=w(()=>{var V;return l.value?[...p.value.blogDescriptionUser.map(S=>S.replace("%USER%",l.value.displayName||"Unknown user")),...((V=g.value.find(S=>S.id==="nfNQM4SMESU2VOkJtcgY"))==null?void 0:V.description)||[]]:p.value.blogDescriptionGuest}),t=()=>{$.openWith(null)},c=V=>{$.openWith(V)},d=V=>{v.value=V,o.value=!0},u=async V=>{await r(V)&&(o.value=!1,v.value=null)};return Ie(a.currentRoute,V=>{m.value=V.params.postId}),(V,S)=>(i(),x($l,null,{content:O(()=>[q("div",jn,[q("div",An,[(i(!0),f(A,null,J(k.value,M=>(i(),f("h1",Nn,[q("span",{innerHTML:M},null,8,Hn)]))),256))]),q("div",Fn,[m.value?(i(),x(It,{key:0,onEditClicked:c,onDeleteClicked:d})):(i(),x(Zt,{key:1,onCreateClicked:t,onEditClicked:c,onDeleteClicked:d})),h(zn,{onScrollToUpdated:S[0]||(S[0]=M=>P.value=M)}),v.value?(i(),x(gl,{key:2,title:"Delete Post",isOpen:o.value,description:[` Are you sure you want to delete this post called ' ${v.value.title}'?`,"This cannot be undone."],"confirm-text":"Confirm","confirm-props":{type:"danger",outlined:!0},onConfirm:S[1]||(S[1]=M=>u(v.value.id)),onCancel:S[2]||(S[2]=M=>o.value=!1)},null,8,["isOpen","description"])):C("",!0)])])]),_:1}))}}),_n=L({__name:"Blog",setup(e){return(l,s)=>(i(),x(Kn))}});export{_n as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./quill-7w2Hp1PB.js","./vuedraggable.umd-B2K4y0tm.js","../bundle.js","../bundle8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
