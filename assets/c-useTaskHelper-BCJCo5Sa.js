import{am as oe,an as le,aH as ue,b as H,c as C,ao as A,T as ce,y as $,B as de,t as ge,aY as O,aN as z,aO as G,a$ as he,bX as W,bR as Y,bS as X,bf as B,bg as p,bT as q,ab as I,bU as Q,bV as Z,ag as _,bc as ee,j as V,A as te,bW as se,s as y,D as w,i as E,a8 as c,ae as ne}from"../bundle.js";import{D as ae}from"./c-DateRange-Dhjjppai.js";import{b as me}from"./c-Page.vue_vue_type_script_setup_true_lang-Cz57hljT.js";var ve=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,fe={root:function(e){var t=e.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},pe=oe.extend({name:"progressbar",style:ve,classes:fe}),be={name:"BaseProgressBar",extends:le,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:pe,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},ye={name:"ProgressBar",extends:be,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return ue({determinate:this.determinate,indeterminate:this.indeterminate})}}},Te=["aria-valuenow","data-p"],xe=["data-p"],we=["data-p"],ke=["data-p"];function Ee(n,e,t,a,o,i){return H(),C("div",A({role:"progressbar",class:n.cx("root"),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100","data-p":i.dataP},n.ptmi("root")),[i.determinate?(H(),C("div",A({key:0,class:n.cx("value"),style:i.progressStyle,"data-p":i.dataP},n.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(H(),C("div",A({key:0,class:n.cx("label"),"data-p":i.dataP},n.ptm("label")),[ce(n.$slots,"default",{},function(){return[de(ge(n.value+"%"),1)]})],16,we)):$("",!0)],16,xe)):i.indeterminate?(H(),C("div",A({key:1,class:n.cx("value"),"data-p":i.dataP},n.ptm("value")),null,16,ke)):$("",!0)],16,Te)}ye.render=Ee;class S{value;unit;constructor(e,t){this.value=e??0,this.unit=t??"day"}getNextDate(e){const t=new Date(e);switch(this.unit){case"day":t.setDate(t.getDate()+this.value);break;case"week":t.setDate(t.getDate()+this.value*7);break;case"month":t.setMonth(t.getMonth()+this.value);break;case"year":t.setFullYear(t.getFullYear()+this.value);break}return t}serialize(){return{value:this.value,unit:this.unit}}clone(){return new S(this.value,this.unit)}static deserialize(e){return new S(e.value,e.unit)}}var De=(n=>(n.EASY="easy",n.MEDIUM="medium",n.HARD="hard",n.EXTREME="extreme",n))(De||{});const re={easy:{label:"Makkelijk",shortLabel:"1",severity:"success",multiplier:1},medium:{label:"Gemiddeld",shortLabel:"2",severity:"warn",multiplier:2},hard:{label:"Moeilijk",shortLabel:"3",severity:"warn",multiplier:3},extreme:{label:"Extreem",shortLabel:"4",severity:"danger",multiplier:4}};var N=(n=>(n.TOP="top",n.BOTTOM="bottom",n))(N||{});class P{id;houseHoldId;blogPostIds;name;isRecurring;isArchived;interval;categoryId;difficulty;assignedToId;snoozeUntil;order;subTasks;executeLog;constructor({id:e,houseHoldId:t,blogPostIds:a,name:o,isRecurring:i,isArchived:h,interval:v,categoryId:f,difficulty:d,assignedToId:m,snoozeUntil:T,order:k,subTasks:x,executeLog:D}){this.id=e??O(),this.name=o??"",this.houseHoldId=t,this.blogPostIds=[...new Set(a??[])],this.isRecurring=i??!0,this.isArchived=h??!1,this.interval=v??new S(0,"day"),this.categoryId=f??null,this.difficulty=d??null,this.assignedToId=m??null,this.snoozeUntil=T??null,this.order=k??null,this.subTasks=x??[],this.executeLog=D??[]}getSortedExecuteLogs(e=this.executeLog){return[...e].sort((t,a)=>t.date.getTime()-a.date.getTime())}getLatestExecuteDate(e=this.executeLog){const a=this.getSortedExecuteLogs(e).at(-1);return a?a.getDateWithoutTime():null}getProjectedExecuteDate(e=new Date,t=this.executeLog){const a=z(e),o=this.getLatestExecuteDate(t);if(!o||!this.interval.value)return a;const i=this.interval.getNextDate(o);return i.getTime()>=a.getTime()?i:a}getExecuteLogsBefore(e){const t=z(e);return this.executeLog.filter(a=>a.date.getTime()<t.getTime())}wasPlannedForDate(e){const t=z(e),a=this.getExecuteLogsBefore(t),o=this.getProjectedExecuteDate(t,a);return z(o).getTime()===t.getTime()}wasExecutedOnDate(e){const t=new ae(z(e),G(e),"Vandaag","Dag");return this.executeLog.some(a=>t.isInExactRange(a.date))}getExecutions(e,t){return this.executeLog.filter(a=>t.isInExactRange(a.date)&&(!e||a.executors.includes(e)))}getExecutedCount(e,t){return this.getExecutions(e,t).map(o=>o.getExecutedCount(e)).reduce((o,i)=>o+i,0)}getExecutedPoints(e,t){return this.difficulty===null?0:this.getExecutedCount(e,t)*re[this.difficulty].multiplier}getAverageExecutionIntervalDays(e){const t=this.getSortedExecuteLogs().filter(i=>e.isInExactRange(i.date));if(t.length<2)return null;let a=0,o=0;for(let i=1;i<t.length;i++){const h=t[i-1],f=(t[i].date.getTime()-h.date.getTime())/he;a+=f,o++}return a/o}serialize(){return{id:this.id,houseHoldId:this.houseHoldId,blogPostIds:this.blogPostIds,name:this.name,isRecurring:this.isRecurring,isArchived:this.isArchived,interval:this.interval.serialize(),categoryId:this.categoryId,difficulty:this.difficulty,assignedToId:this.assignedToId,snoozeUntil:this.snoozeUntil?W.fromDate(this.snoozeUntil):null,order:this.order,subTasks:this.subTasks.map(e=>e.serialize()),executeLog:this.executeLog.map(e=>e.serialize())}}clone(){return new P({id:this.id,houseHoldId:this.houseHoldId,blogPostIds:[...this.blogPostIds],name:this.name,isRecurring:this.isRecurring,isArchived:this.isArchived,interval:this.interval.clone(),categoryId:this.categoryId,difficulty:this.difficulty,assignedToId:this.assignedToId,snoozeUntil:this.snoozeUntil?new Date(this.snoozeUntil):null,order:this.order,subTasks:this.subTasks.map(e=>e.clone()),executeLog:this.executeLog.map(e=>e.clone())})}static deserialize(e){return new P({id:e.id,houseHoldId:e.houseHoldId??Y,blogPostIds:e.blogPostIds,name:e.name,isRecurring:e.isRecurring,isArchived:e.isArchived,interval:e.interval?S.deserialize(e.interval):new S,categoryId:e.categoryId,difficulty:e.difficulty,assignedToId:e.assignedToId,snoozeUntil:e.snoozeUntil?.toDate(),order:e.order,subTasks:e.subTasks?.map(j.deserialize)??[],executeLog:e.executeLog.map(R.deserialize)})}}class j{id;name;isExecuted;constructor({id:e,name:t,isExecuted:a}){this.id=e??O(),this.name=t,this.isExecuted=a??!1}serialize(){return{id:this.id,name:this.name,isExecuted:this.isExecuted}}clone(){return new j({id:this.id,name:this.name,isExecuted:this.isExecuted})}static deserialize(e){return new j({id:e.id,name:e.name,isExecuted:e.isExecuted})}}class R{id;date;executors;constructor({id:e,executors:t,date:a}){this.id=e??O(),this.date=a??new Date,this.executors=t}getDateWithoutTime(){const e=new Date(this.date);return e.setHours(0,0,0,0),e}getExecutedCount(e){return e!==null&&!this.executors.includes(e)?0:1/this.executors.length}getExecutedPoints(e,t){return!t||e!==null&&!this.executors.includes(e)?0:re[t].multiplier/this.executors.length}serialize(){return{id:this.id,date:W.fromDate(this.date),executorId:null,executors:this.executors}}clone(){return new R({id:this.id,executors:[...this.executors],date:new Date(this.date)})}static deserialize(e){return new R({id:e.id,executors:e.executors||(e.executorId?[e.executorId]:[]),date:e.date.toDate()})}}class U{id;houseHoldId;label;constructor({id:e,houseHoldId:t,label:a}){this.id=e??O(),this.houseHoldId=t,this.label=a??""}serialize(){return{id:this.id,houseHoldId:this.houseHoldId,label:this.label}}clone(){return new U({id:this.id,houseHoldId:this.houseHoldId,label:this.label})}static deserialize(e){return new U({id:e.id,houseHoldId:e.houseHoldId??Y,label:e.label})}}function Ie(n){return n.map(Se)}function Se(n){return U.deserialize(n)}class ze{async fetchMultiple(e){return X(B(e,p.TASK_CATEGORIES))}async create(e,t){await q(I(e,p.TASK_CATEGORIES,t.id),t)}async update(e,t){await Q(I(e,p.TASK_CATEGORIES,t.id),{...t})}async delete(e,t){await Z(I(e,p.TASK_CATEGORIES,t))}}const J=new ze,He=_("taskCategoryStore",()=>{const n=ee(),e=V(),t=te(),a=se(),{firebaseUser:o}=y(e),{activeHouseHold:i}=y(t),{debug:h}=y(a),v=w([]),f=w(!1),d=w(!1),m=w(null),T=E(()=>v.value.filter(s=>s.houseHoldId===i.value?.id)),k=E(()=>[{value:null,label:"Geen"},...T.value.map(s=>({value:s.id,label:s.label}))]),x=()=>{m.value?.(),m.value=null,v.value=[]},D=()=>{f.value=!0,m.value?.(),m.value=ne(B(n,p.TASK_CATEGORIES),s=>{const r=s.docs.map(u=>({id:u.id,...u.data()}));v.value=Ie(r),v.value=v.value.sort((u,b)=>u.label.localeCompare(b.label)),f.value=!1},s=>{f.value=!1,c.firebaseError(h.value,s)})};return{taskCategories:T,isFetchLoading:f,isMutationLoading:d,taskCategoryOptions:k,$reset:x,fetchTaskCategories:async()=>{if(!o.value){c.error("Je moet ingelogd zijn om taakcategorieen op te halen."),m.value?.(),m.value=null;return}D()},createTaskCategory:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taakcategorieen aan te maken.");return}try{d.value=!0,await J.create(n,s.serialize()),c.success("Taakcategorie succesvol aangemaakt")}catch(r){c.firebaseError(h.value,r)}finally{d.value=!1}},updateTaskCategory:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taakcategorieen bij te werken.");return}try{d.value=!0,await J.update(n,s.serialize()),c.success("Taakcategorie succesvol bijgewerkt")}catch(r){c.firebaseError(h.value,r)}finally{d.value=!1}},deleteTaskCategory:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taakcategorieen te verwijderen.");return}try{d.value=!0,await J.delete(n,s),c.success("Taakcategorie succesvol verwijderd")}catch(r){c.firebaseError(h.value,r)}finally{d.value=!1}}}});function Ce(n){return n.map(Ae)}function Ae(n){return P.deserialize(n)}class Le{async fetchMultiple(e){return X(B(e,p.TASKS))}async create(e,t){await q(I(e,p.TASKS,t.id),t)}async update(e,t){await Q(I(e,p.TASKS,t.id),{...t})}async delete(e,t){await Z(I(e,p.TASKS,t))}}const L=new Le,Pe=_("taskStore",()=>{const n=ee(),e=V(),t=te(),a=se(),{firebaseUser:o}=y(e),{activeHouseHold:i}=y(t),{debug:h}=y(a),v=w([]),f=w(!1),d=w(!1),m=w(null),T=E(()=>v.value.filter(s=>s.houseHoldId===i.value?.id)),k=()=>{m.value?.(),m.value=null,v.value=[]},x=()=>{f.value=!0,m.value?.(),m.value=ne(B(n,p.TASKS),s=>{const r=s.docs.map(u=>({id:u.id,...u.data()}));v.value=Ce(r),f.value=!1},s=>{f.value=!1,c.firebaseError(h.value,s)})};return{tasks:T,isFetchLoading:f,isMutationLoading:d,$reset:k,fetchTasks:async()=>{if(!o.value){c.error("Je moet ingelogd zijn om taken op te halen."),m.value?.(),m.value=null;return}x()},createTask:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taken aan te maken.");return}try{d.value=!0,await L.create(n,s.serialize()),c.success(`Taak "${s.name}" succesvol aangemaakt`)}catch(r){c.firebaseError(h.value,r)}finally{d.value=!1}},updateTask:async(s,r)=>{if(!o.value){c.error("Je moet ingelogd zijn om taken bij te werken.");return}try{d.value=!0,await L.update(n,s.serialize()),c.success(r??`Taak "${s.name}" succesvol bijgewerkt`)}catch(u){c.firebaseError(h.value,u)}finally{d.value=!1}},deleteTask:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taken te verwijderen.");return}try{d.value=!0;const r=v.value.find(u=>u.id===s);r&&(await L.delete(n,s),c.success(`Taak "${r.name}" succesvol verwijderd`))}catch(r){c.firebaseError(h.value,r)}finally{d.value=!1}},clearTaskCategory:async s=>{if(!o.value){c.error("Je moet ingelogd zijn om taken bij te werken.");return}const r=v.value.filter(u=>u.categoryId===s);if(r.length)try{d.value=!0,await Promise.all(r.map(u=>{const b=u.clone();return b.categoryId=null,L.update(n,b.serialize())}))}catch(u){c.firebaseError(h.value,u)}finally{d.value=!1}}}}),Oe=()=>{const n=Pe(),e=He(),t=V(),{currentUsersHouseHold:a,getHouseHoldUserOptions:o}=me(),{firebaseUser:i}=y(t),{tasks:h}=y(n),{taskCategories:v}=y(e),f=E(()=>[...h.value].sort((l,g)=>{const s=l.getProjectedExecuteDate(),r=g.getProjectedExecuteDate();if(s===null&&r===null)return 0;if(s===null)return 1;if(r===null)return-1;const u=s.getTime()-r.getTime();if(u!==0)return u;const b=K=>{switch(K.order){case N.TOP:return 0;case null:case void 0:return 1;case N.BOTTOM:return 2}};return b(l)-b(g)}));function d(l){return!l.assignedToId||l.assignedToId===i.value?.uid}function m(l,g=new Date){const s=d(l),r=!l.snoozeUntil||G(l.snoozeUntil).getTime()<=g.getTime();return s&&r}const T=E(()=>{const l=ae.getFutureDays("Korte termijn",1);return f.value.filter(g=>{const s=!g.isArchived&&(g.isRecurring||g.executeLog.length===0),r=g.getProjectedExecuteDate(),u=l.isInDayRange(r);return s&&u&&m(g)})});function k(l){return l?v.value.find(g=>g.id===l)??null:null}const x=E(()=>o(a.value?.id).sort((l,g)=>{const s=i.value?.uid;return l.value===s?-1:g.value===s?1:0})),D=E(()=>[{value:null,label:"Niemand"},...x.value]);function M(l,g,s){return l?h.value.filter(r=>r.getExecutedCount(l,g)>0&&(!s||r.categoryId===s)):[]}function F(l){const g=new Date;return h.value.filter(s=>{const r=!l||s.categoryId===l,u=s.wasExecutedOnDate(g),b=m(s,g),K=s.wasPlannedForDate(g),ie=!s.isArchived&&(s.isRecurring||s.executeLog.length===0);return r&&d(s)&&b&&K&&(ie||u)})}return{sortedTasks:f,todaysTasks:T,getTaskCategory:k,userIdOptions:x,userIdOptionsNullable:D,getTasksExecuted:M,getTasksPlannedForToday:F}};export{De as D,R as E,j as S,U as T,Oe as a,He as b,N as c,P as d,re as e,ye as s,Pe as u};
