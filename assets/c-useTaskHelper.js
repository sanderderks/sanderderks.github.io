import{$n as e,Ar as t,Cr as n,D as r,Fn as i,Ht as a,Ir as o,Kn as s,Nn as c,O as l,Pn as u,Pt as d,Tt as f,Un as p,Vn as m,Wn as h,Xn as g,an as _,br as v,er as y,gr as b,ji as x,ln as S,nr as C,on as w,qn as T,ri as E,rr as D,sn as O,xn as k,yr as A,zr as j}from"../bundle.js";import{a as ee}from"./c-Page.js";import{t as M}from"./c-DateRange.js";var N=l.extend({name:`progressbar`,style:`
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
`,classes:{root:function(e){var t=e.instance;return[`p-progressbar p-component`,{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:`p-progressbar-value`,label:`p-progressbar-label`}}),P={name:`ProgressBar`,extends:{name:`BaseProgressBar`,extends:r,props:{value:{type:Number,default:null},mode:{type:String,default:`determinate`},showValue:{type:Boolean,default:!0}},style:N,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+`%`,display:`flex`}},indeterminate:function(){return this.mode===`indeterminate`},determinate:function(){return this.mode===`determinate`},dataP:function(){return f({determinate:this.determinate,indeterminate:this.indeterminate})}}},F=[`aria-valuenow`,`data-p`],I=[`data-p`],L=[`data-p`],R=[`data-p`];function z(e,r,i,a,s,c){return o(),v(`div`,t({role:`progressbar`,class:e.cx(`root`),"aria-valuemin":`0`,"aria-valuenow":e.value,"aria-valuemax":`100`,"data-p":c.dataP},e.ptmi(`root`)),[c.determinate?(o(),v(`div`,t({key:0,class:e.cx(`value`),style:c.progressStyle,"data-p":c.dataP},e.ptm(`value`)),[e.value!=null&&e.value!==0&&e.showValue?(o(),v(`div`,t({key:0,class:e.cx(`label`),"data-p":c.dataP},e.ptm(`label`)),[j(e.$slots,`default`,{},function(){return[n(x(e.value+`%`),1)]})],16,L)):A(``,!0)],16,I)):c.indeterminate?(o(),v(`div`,t({key:1,class:e.cx(`value`),"data-p":c.dataP},e.ptm(`value`)),null,16,R)):A(``,!0)],16,F)}P.render=z;var B=class e{value;unit;constructor(e,t){this.value=e??0,this.unit=t??`day`}getNextDate(e){let t=new Date(e);switch(this.unit){case`day`:t.setDate(t.getDate()+this.value);break;case`week`:t.setDate(t.getDate()+this.value*7);break;case`month`:t.setMonth(t.getMonth()+this.value);break;case`year`:t.setFullYear(t.getFullYear()+this.value);break}return t}serialize(){return{value:this.value,unit:this.unit}}clone(){return new e(this.value,this.unit)}static deserialize(t){return new e(t.value,t.unit)}},V=function(e){return e.EASY=`easy`,e.MEDIUM=`medium`,e.HARD=`hard`,e.EXTREME=`extreme`,e}({}),H={easy:{label:`Makkelijk`,shortLabel:`1`,severity:`success`,multiplier:1},medium:{label:`Gemiddeld`,shortLabel:`2`,severity:`warn`,multiplier:2},hard:{label:`Moeilijk`,shortLabel:`3`,severity:`warn`,multiplier:3},extreme:{label:`Extreem`,shortLabel:`4`,severity:`danger`,multiplier:4}},U=function(e){return e.TOP=`top`,e.BOTTOM=`bottom`,e}({}),W=class t{id;houseHoldId;blogPostIds;name;isRecurring;isArchived;interval;categoryId;difficulty;assignedToId;snoozeUntil;order;subTasks;executeLog;constructor({id:e,houseHoldId:t,blogPostIds:n,name:r,isRecurring:i,isArchived:a,interval:o,categoryId:s,difficulty:c,assignedToId:l,snoozeUntil:u,order:d,subTasks:f,executeLog:p}){this.id=e??S(),this.name=r??``,this.houseHoldId=t,this.blogPostIds=[...new Set(n??[])],this.isRecurring=i??!0,this.isArchived=a??!1,this.interval=o??new B(0,`day`),this.categoryId=s??null,this.difficulty=c??null,this.assignedToId=l??null,this.snoozeUntil=u??null,this.order=d??null,this.subTasks=f??[],this.executeLog=p??[]}getSortedExecuteLogs(e=this.executeLog){return[...e].sort((e,t)=>e.date.getTime()-t.date.getTime())}getLatestExecuteDate(e=this.executeLog){let t=this.getSortedExecuteLogs(e).at(-1);return t?t.getDateWithoutTime():null}getProjectedExecuteDate(e=new Date,t=this.executeLog){let n=u(e),r=this.getLatestExecuteDate(t);if(!r||!this.interval.value)return n;let i=this.interval.getNextDate(r);return i.getTime()>=n.getTime()?i:n}getExecuteLogsBefore(e){let t=u(e);return this.executeLog.filter(e=>e.date.getTime()<t.getTime())}wasPlannedForDate(e){let t=u(e),n=this.getExecuteLogsBefore(t);return u(this.getProjectedExecuteDate(t,n)).getTime()===t.getTime()}wasExecutedOnDate(e){let t=new M(u(e),c(e),`Vandaag`,`Dag`);return this.executeLog.some(e=>t.isInExactRange(e.date))}getExecutions(e,t){return this.executeLog.filter(n=>t.isInExactRange(n.date)&&(!e||n.executors.includes(e)))}getExecutedCount(e,t){return this.getExecutions(e,t).map(t=>t.getExecutedCount(e)).reduce((e,t)=>e+t,0)}getExecutedPoints(e,t){return this.difficulty===null?0:this.getExecutedCount(e,t)*H[this.difficulty].multiplier}getAverageExecutionIntervalDays(e){let t=this.getSortedExecuteLogs().filter(t=>e.isInExactRange(t.date));if(t.length<2)return null;let n=0,r=0;for(let e=1;e<t.length;e++){let a=t[e-1],o=(t[e].date.getTime()-a.date.getTime())/i;n+=o,r++}return n/r}serialize(){return{id:this.id,houseHoldId:this.houseHoldId,blogPostIds:this.blogPostIds,name:this.name,isRecurring:this.isRecurring,isArchived:this.isArchived,interval:this.interval.serialize(),categoryId:this.categoryId,difficulty:this.difficulty,assignedToId:this.assignedToId,snoozeUntil:this.snoozeUntil?e.fromDate(this.snoozeUntil):null,order:this.order,subTasks:this.subTasks.map(e=>e.serialize()),executeLog:this.executeLog.map(e=>e.serialize())}}clone(){return new t({id:this.id,houseHoldId:this.houseHoldId,blogPostIds:[...this.blogPostIds],name:this.name,isRecurring:this.isRecurring,isArchived:this.isArchived,interval:this.interval.clone(),categoryId:this.categoryId,difficulty:this.difficulty,assignedToId:this.assignedToId,snoozeUntil:this.snoozeUntil?new Date(this.snoozeUntil):null,order:this.order,subTasks:this.subTasks.map(e=>e.clone()),executeLog:this.executeLog.map(e=>e.clone())})}static deserialize(e){return new t({id:e.id,houseHoldId:e.houseHoldId??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`,blogPostIds:e.blogPostIds,name:e.name,isRecurring:e.isRecurring,isArchived:e.isArchived,interval:e.interval?B.deserialize(e.interval):new B,categoryId:e.categoryId,difficulty:e.difficulty,assignedToId:e.assignedToId,snoozeUntil:e.snoozeUntil?.toDate(),order:e.order,subTasks:e.subTasks?.map(G.deserialize)??[],executeLog:e.executeLog.map(K.deserialize)})}},G=class e{id;name;isExecuted;constructor({id:e,name:t,isExecuted:n}){this.id=e??S(),this.name=t,this.isExecuted=n??!1}serialize(){return{id:this.id,name:this.name,isExecuted:this.isExecuted}}clone(){return new e({id:this.id,name:this.name,isExecuted:this.isExecuted})}static deserialize(t){return new e({id:t.id,name:t.name,isExecuted:t.isExecuted})}},K=class t{id;date;executors;constructor({id:e,executors:t,date:n}){this.id=e??S(),this.date=n??new Date,this.executors=t}getDateWithoutTime(){let e=new Date(this.date);return e.setHours(0,0,0,0),e}getExecutedCount(e){return e!==null&&!this.executors.includes(e)?0:1/this.executors.length}getExecutedPoints(e,t){return!t||e!==null&&!this.executors.includes(e)?0:H[t].multiplier/this.executors.length}serialize(){return{id:this.id,date:e.fromDate(this.date),executorId:null,executors:this.executors}}clone(){return new t({id:this.id,executors:[...this.executors],date:new Date(this.date)})}static deserialize(e){return new t({id:e.id,executors:e.executors||(e.executorId?[e.executorId]:[]),date:e.date.toDate()})}},q=class e{id;houseHoldId;label;constructor({id:e,houseHoldId:t,label:n}){this.id=e??S(),this.houseHoldId=t,this.label=n??``}serialize(){return{id:this.id,houseHoldId:this.houseHoldId,label:this.label}}clone(){return new e({id:this.id,houseHoldId:this.houseHoldId,label:this.label})}static deserialize(t){return new e({id:t.id,houseHoldId:t.houseHoldId??`6adb55d0-ef68-40da-9636-2d9fe3f08a44`,label:t.label})}};function J(e){return e.map(Y)}function Y(e){return q.deserialize(e)}var X=new class{async fetchMultiple(e){return O(y(e,p.TASK_CATEGORIES))}async create(e,t){await _(C(e,p.TASK_CATEGORIES,t.id),t)}async update(e,t){await k(C(e,p.TASK_CATEGORIES,t.id),{...t})}async delete(e,t){await w(C(e,p.TASK_CATEGORIES,t))}},Z=s(`taskCategoryStore`,()=>{let e=h(),t=d(),n=a(),r=m(),{firebaseUser:i}=T(t),{activeHouseHold:o}=T(n),{debug:s}=T(r),c=E([]),l=E(!1),u=E(!1),f=E(null),_=b(()=>c.value.filter(e=>e.houseHoldId===o.value?.id)),v=b(()=>[{value:null,label:`Geen`},..._.value.map(e=>({value:e.id,label:e.label}))]),x=()=>{f.value?.(),f.value=null,c.value=[]},S=()=>{l.value=!0,f.value?.(),f.value=g(y(e,p.TASK_CATEGORIES),e=>{c.value=J(e.docs.map(e=>({id:e.id,...e.data()}))),c.value=c.value.sort((e,t)=>e.label.localeCompare(t.label)),l.value=!1},e=>{l.value=!1,D.firebaseError(s.value,e)})};return{taskCategories:_,isFetchLoading:l,isMutationLoading:u,taskCategoryOptions:v,$reset:x,fetchTaskCategories:async()=>{if(!i.value){D.error(`Je moet ingelogd zijn om taakcategorieen op te halen.`),f.value?.(),f.value=null;return}S()},createTaskCategory:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taakcategorieen aan te maken.`);return}try{u.value=!0,await X.create(e,t.serialize()),D.success(`Taakcategorie succesvol aangemaakt`)}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}},updateTaskCategory:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taakcategorieen bij te werken.`);return}try{u.value=!0,await X.update(e,t.serialize()),D.success(`Taakcategorie succesvol bijgewerkt`)}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}},deleteTaskCategory:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taakcategorieen te verwijderen.`);return}try{u.value=!0,await X.delete(e,t),D.success(`Taakcategorie succesvol verwijderd`)}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}}}});function te(e){return e.map(ne)}function ne(e){return W.deserialize(e)}var Q=new class{async fetchMultiple(e){return O(y(e,p.TASKS))}async create(e,t){await _(C(e,p.TASKS,t.id),t)}async update(e,t){await k(C(e,p.TASKS,t.id),{...t})}async delete(e,t){await w(C(e,p.TASKS,t))}},$=s(`taskStore`,()=>{let e=h(),t=d(),n=a(),r=m(),{firebaseUser:i}=T(t),{activeHouseHold:o}=T(n),{debug:s}=T(r),c=E([]),l=E(!1),u=E(!1),f=E(null),_=b(()=>c.value.filter(e=>e.houseHoldId===o.value?.id)),v=()=>{f.value?.(),f.value=null,c.value=[]},x=()=>{l.value=!0,f.value?.(),f.value=g(y(e,p.TASKS),e=>{c.value=te(e.docs.map(e=>({id:e.id,...e.data()}))),l.value=!1},e=>{l.value=!1,D.firebaseError(s.value,e)})};return{tasks:_,isFetchLoading:l,isMutationLoading:u,$reset:v,fetchTasks:async()=>{if(!i.value){D.error(`Je moet ingelogd zijn om taken op te halen.`),f.value?.(),f.value=null;return}x()},createTask:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taken aan te maken.`);return}try{u.value=!0,await Q.create(e,t.serialize()),D.success(`Taak "${t.name}" succesvol aangemaakt`)}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}},updateTask:async(t,n)=>{if(!i.value){D.error(`Je moet ingelogd zijn om taken bij te werken.`);return}try{u.value=!0,await Q.update(e,t.serialize()),D.success(n??`Taak "${t.name}" succesvol bijgewerkt`)}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}},deleteTask:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taken te verwijderen.`);return}try{u.value=!0;let n=c.value.find(e=>e.id===t);n&&(await Q.delete(e,t),D.success(`Taak "${n.name}" succesvol verwijderd`))}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}},clearTaskCategory:async t=>{if(!i.value){D.error(`Je moet ingelogd zijn om taken bij te werken.`);return}let n=c.value.filter(e=>e.categoryId===t);if(n.length)try{u.value=!0,await Promise.all(n.map(t=>{let n=t.clone();return n.categoryId=null,Q.update(e,n.serialize())}))}catch(e){D.firebaseError(s.value,e)}finally{u.value=!1}}}}),re=()=>{let e=$(),t=Z(),n=d(),{currentUsersHouseHold:r,getHouseHoldUserOptions:i}=ee(),{firebaseUser:a}=T(n),{tasks:o}=T(e),{taskCategories:s}=T(t),l=b(()=>[...o.value].sort((e,t)=>{let n=e.getProjectedExecuteDate(),r=t.getProjectedExecuteDate();if(n===null&&r===null)return 0;if(n===null)return 1;if(r===null)return-1;let i=n.getTime()-r.getTime();if(i!==0)return i;let a=e=>{switch(e.order){case U.TOP:return 0;case null:case void 0:return 1;case U.BOTTOM:return 2}};return a(e)-a(t)}));function u(e){return!e.assignedToId||e.assignedToId===a.value?.uid}function f(e,t=new Date){let n=u(e),r=!e.snoozeUntil||c(e.snoozeUntil).getTime()<=t.getTime();return n&&r}let p=b(()=>{let e=M.getFutureDays(`Korte termijn`,1);return l.value.filter(t=>{let n=!t.isArchived&&(t.isRecurring||t.executeLog.length===0),r=t.getProjectedExecuteDate(),i=e.isInDayRange(r);return n&&i&&f(t)})});function m(e){return e?s.value.find(t=>t.id===e)??null:null}let h=b(()=>i(r.value?.id).sort((e,t)=>{let n=a.value?.uid;return e.value===n?-1:+(t.value===n)})),g=b(()=>[{value:null,label:`Niemand`},...h.value]);function _(e,t,n){return e?o.value.filter(r=>r.getExecutedCount(e,t)>0&&(!n||r.categoryId===n)):[]}function v(e){let t=new Date;return o.value.filter(n=>{let r=!e||n.categoryId===e,i=n.wasExecutedOnDate(t),a=f(n,t),o=n.wasPlannedForDate(t),s=!n.isArchived&&(n.isRecurring||n.executeLog.length===0);return r&&u(n)&&a&&o&&(s||i)})}return{sortedTasks:l,todaysTasks:p,getTaskCategory:m,userIdOptions:h,userIdOptionsNullable:g,getTasksExecuted:_,getTasksPlannedForToday:v}};export{V as a,W as c,P as d,q as i,U as l,$ as n,K as o,Z as r,G as s,re as t,H as u};