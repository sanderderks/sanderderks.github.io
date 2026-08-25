import{Ar as e,Bn as t,Br as n,Cr as r,D as i,Dr as a,Fr as o,Gt as s,Hn as c,Ii as l,Kt as u,Ln as d,Nt as f,O as p,Or as m,Pn as h,Pt as ee,Qr as g,Rn as _,Sr as v,Tt as y,Un as b,Ur as x,Vr as S,Wr as C,Zn as w,b as te,br as T,ci as E,ei as D,ji as O,nn as ne,o as k,qr as re,si as ie,ui as A,ur as j,vr as ae,wr as M,xr as N,yr as P,z as F,zn as oe,zr as I}from"../bundle.js";import{n as L,t as se}from"./c-Page.js";import{a as ce,t as le}from"./c-Dialog.js";import{t as R}from"./c-card.js";import{t as z}from"./c-DateField.js";import{t as B}from"./c-progressspinner.js";import{t as V}from"./c-useTime.js";import{t as H}from"./c-SimpleHeader.js";var U=p.extend({name:`avatar`,style:`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,classes:{root:function(e){var t=e.props;return[`p-avatar p-component`,{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape===`circle`,"p-avatar-lg":t.size===`large`,"p-avatar-xl":t.size===`xlarge`}]},label:`p-avatar-label`,icon:`p-avatar-icon`}}),W={name:`BaseAvatar`,extends:i,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:`normal`},shape:{type:String,default:`square`},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:U,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function G(e){"@babel/helpers - typeof";return G=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},G(e)}function K(e,t,n){return(t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){var t=de(e,`string`);return G(t)==`symbol`?t:t+``}function de(e,t){if(G(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(G(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var q={name:`Avatar`,extends:W,inheritAttrs:!1,emits:[`error`],methods:{onError:function(e){this.$emit(`error`,e)}},computed:{dataP:function(){return y(K(K({},this.shape,this.shape),this.size,this.size))}}},fe=[`aria-labelledby`,`aria-label`,`data-p`],pe=[`data-p`],J=[`data-p`],me=[`src`,`alt`,`data-p`];function he(e,t,n,i,a,s){return S(),M(`div`,o({class:e.cx(`root`),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi(`root`),{"data-p":s.dataP}),[C(e.$slots,`default`,{},function(){return[e.label?(S(),M(`span`,o({key:0,class:e.cx(`label`)},e.ptm(`label`),{"data-p":s.dataP}),l(e.label),17,pe)):e.$slots.icon?(S(),v(re(e.$slots.icon),{key:1,class:O(e.cx(`icon`))},null,8,[`class`])):e.icon?(S(),M(`span`,o({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`),{"data-p":s.dataP}),null,16,J)):e.image?(S(),M(`img`,o({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||=function(){return s.onError&&s.onError.apply(s,arguments)}},e.ptm(`image`),{"data-p":s.dataP}),null,16,me)):r(``,!0)]})],16,fe)}q.render=he;var ge=p.extend({name:`timeline`,style:`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,classes:{root:function(e){var t=e.props;return[`p-timeline p-component`,`p-timeline-`+t.align,`p-timeline-`+t.layout]},event:`p-timeline-event`,eventOpposite:`p-timeline-event-opposite`,eventSeparator:`p-timeline-event-separator`,eventMarker:`p-timeline-event-marker`,eventConnector:`p-timeline-event-connector`,eventContent:`p-timeline-event-content`}}),_e={name:`BaseTimeline`,extends:i,props:{value:null,align:{mode:String,default:`left`},layout:{mode:String,default:`vertical`},dataKey:null},style:ge,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Y(e)}function X(e,t,n){return(t=ve(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=ye(e,`string`);return Y(t)==`symbol`?t:t+``}function ye(e,t){if(Y(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Y(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Z={name:`Timeline`,extends:_e,inheritAttrs:!1,methods:{getKey:function(e,t){return this.dataKey?F(e,this.dataKey):t},getPTOptions:function(e,t){return this.ptm(e,{context:{index:t,count:this.value.length}})}},computed:{dataP:function(){return y(X(X({},this.layout,this.layout),this.align,this.align))}}},be=[`data-p`],xe=[`data-p`],Se=[`data-p`],Ce=[`data-p`],we=[`data-p`],Te=[`data-p`],Ee=[`data-p`];function De(e,t,n,i,a,s){return S(),M(`div`,o({class:e.cx(`root`)},e.ptmi(`root`),{"data-p":s.dataP}),[(S(!0),M(P,null,x(e.value,function(t,n){return S(),M(`div`,o({key:s.getKey(t,n),class:e.cx(`event`)},{ref_for:!0},s.getPTOptions(`event`,n),{"data-p":s.dataP}),[N(`div`,o({class:e.cx(`eventOpposite`,{index:n})},{ref_for:!0},s.getPTOptions(`eventOpposite`,n),{"data-p":s.dataP}),[C(e.$slots,`opposite`,{item:t,index:n})],16,Se),N(`div`,o({class:e.cx(`eventSeparator`)},{ref_for:!0},s.getPTOptions(`eventSeparator`,n),{"data-p":s.dataP}),[C(e.$slots,`marker`,{item:t,index:n},function(){return[N(`div`,o({class:e.cx(`eventMarker`)},{ref_for:!0},s.getPTOptions(`eventMarker`,n),{"data-p":s.dataP}),null,16,we)]}),n===e.value.length-1?r(``,!0):C(e.$slots,`connector`,{key:0,item:t,index:n},function(){return[N(`div`,o({class:e.cx(`eventConnector`)},{ref_for:!0},s.getPTOptions(`eventConnector`,n),{"data-p":s.dataP}),null,16,Te)]})],16,Ce),N(`div`,o({class:e.cx(`eventContent`)},{ref_for:!0},s.getPTOptions(`eventContent`,n),{"data-p":s.dataP}),[C(e.$slots,`content`,{item:t,index:n})],16,Ee)],16,xe)}),128))],16,be)}Z.render=De;var Oe={class:`flex flex-col`},Q=`!text-red-500`,$=e({__name:`HealthDataChip`,props:{subject:{},stopDate:{}},setup(e){let t=e,{simpleDateFormat:n}=V(()=>(t.stopDate??new Date).getTime(),`up`);return(e,i)=>(S(),M(`div`,Oe,[m(A(k),{label:t.subject,class:O([`justify-center`,t.stopDate?`!rounded-b-none`:void 0]),pt:{root:t.stopDate?A(void 0):Q,icon:t.stopDate?A(void 0):Q},icon:t.stopDate?`pi pi-trophy`:`pi pi-times`},null,8,[`label`,`class`,`pt`,`icon`]),t.stopDate?(S(),v(A(k),{key:0,class:`justify-center !rounded-t-none`,label:A(n),pt:{root:t.stopDate?A(void 0):Q}},null,8,[`label`,`pt`])):r(``,!0)]))}}),ke=e({__name:`HealthDataDialog`,props:{isOpen:{type:Boolean},userId:{},healthData:{},title:{default:`Bewerk gezondheidsgegevens`},description:{default:`Werk je stopdatums voor je gezondheidsgegevens bij.`}},emits:[`cancel`,`saved`],setup(e,{emit:t}){let n=e,r=t,i=s(),{isMutationLoading:a}=w(i),o=ie({stopDateAlcohol:null,stopDateSmoking:null,stopDateCafeine:null,stopDateUltraProcessedFood:null,costsAlcoholMonthly:0,costsSmokingMonthly:0,costsCafeineMonthly:0,costsUltraProcessedFoodMonthly:0}),c=T(()=>n.userId?n.healthData?new u(n.userId,n.healthData.stopDateAlcohol,n.healthData.stopDateSmoking,n.healthData.stopDateCafeine,n.healthData.stopDateUltraProcessedFood,n.healthData.costsAlcoholMonthly,n.healthData.costsSmokingMonthly,n.healthData.costsCafeineMonthly,n.healthData.costsUltraProcessedFoodMonthly):u.create(n.userId):null),l=T(()=>n.userId?new u(n.userId,o.stopDateAlcohol,o.stopDateSmoking,o.stopDateCafeine,o.stopDateUltraProcessedFood,o.costsAlcoholMonthly,o.costsSmokingMonthly,o.costsCafeineMonthly,o.costsUltraProcessedFoodMonthly):null),d=T(()=>!!c.value&&!!l.value&&!ne(c.value,l.value)),f=async()=>{!n.userId||!l.value||await i.updateHealthData(n.userId,l.value)&&r(`saved`)};return g(()=>[n.isOpen,n.healthData,n.userId],()=>{o.stopDateAlcohol=n.healthData?.stopDateAlcohol??null,o.stopDateSmoking=n.healthData?.stopDateSmoking??null,o.stopDateCafeine=n.healthData?.stopDateCafeine??null,o.stopDateUltraProcessedFood=n.healthData?.stopDateUltraProcessedFood??null,o.costsAlcoholMonthly=n.healthData?.costsAlcoholMonthly??0,o.costsSmokingMonthly=n.healthData?.costsSmokingMonthly??0,o.costsCafeineMonthly=n.healthData?.costsCafeineMonthly??0,o.costsUltraProcessedFoodMonthly=n.healthData?.costsUltraProcessedFoodMonthly??0},{immediate:!0}),(t,n)=>(S(),v(le,{isOpen:e.isOpen,title:e.title,description:e.description,"confirm-text":`Opslaan`,"confirm-loading":A(a),"confirm-props":{disabled:!d.value},onConfirm:f,onCancel:n[8]||=e=>t.$emit(`cancel`)},{default:D(()=>[N(`form`,{class:`w-full md:w-1/2 pt-6 mb-4 flex flex-col gap-3 place-self-center`,onSubmit:ae(f,[`prevent`])},[m(z,{name:`stopDateAlcohol`,label:`Gestopt met alcohol op`,modelValue:o.stopDateAlcohol,"onUpdate:modelValue":n[0]||=e=>o.stopDateAlcohol=e},null,8,[`modelValue`]),m(z,{name:`stopDateSmoking`,label:`Gestopt met roken op`,modelValue:o.stopDateSmoking,"onUpdate:modelValue":n[1]||=e=>o.stopDateSmoking=e},null,8,[`modelValue`]),m(z,{name:`stopDateCafeine`,label:`Gestopt met cafeïne op`,modelValue:o.stopDateCafeine,"onUpdate:modelValue":n[2]||=e=>o.stopDateCafeine=e},null,8,[`modelValue`]),m(z,{name:`stopDateUltraProcessedFood`,label:`Gestopt met ultrabewerkt voedsel op`,modelValue:o.stopDateUltraProcessedFood,"onUpdate:modelValue":n[3]||=e=>o.stopDateUltraProcessedFood=e},null,8,[`modelValue`]),m(L,{name:`costsAlcoholMonthly`,label:`Kosten alcohol per maand`,modelValue:o.costsAlcoholMonthly,"onUpdate:modelValue":n[4]||=e=>o.costsAlcoholMonthly=e},null,8,[`modelValue`]),m(L,{name:`costsSmokingMonthly`,label:`Kosten roken per maand`,modelValue:o.costsSmokingMonthly,"onUpdate:modelValue":n[5]||=e=>o.costsSmokingMonthly=e},null,8,[`modelValue`]),m(L,{name:`costsCafeineMonthly`,label:`Kosten cafeïne per maand`,modelValue:o.costsCafeineMonthly,"onUpdate:modelValue":n[6]||=e=>o.costsCafeineMonthly=e},null,8,[`modelValue`]),m(L,{name:`costsUltraProcessedFoodMonthly`,label:`Kosten ultrabewerkt voedsel per maand`,modelValue:o.costsUltraProcessedFoodMonthly,"onUpdate:modelValue":n[7]||=e=>o.costsUltraProcessedFoodMonthly=e},null,8,[`modelValue`])],32)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-loading`,`confirm-props`]))}}),Ae={class:`pb-6`},je={class:`flex items-center gap-2 flex-wrap`},Me=e({__name:`TimelineComponent`,props:{items:{}},setup(e){let t=e,i=E(new Date),a=E(null);function o(e){return i.value>=e.date}function s(e){return i.value<e.date&&t.items.indexOf(e)===t.items.findIndex(e=>e.date>i.value)}return I(()=>{a.value=setInterval(()=>{i.value=new Date},1e3)}),n(()=>{a.value&&clearInterval(a.value)}),(t,n)=>(S(),v(A(Z),{value:e.items},{opposite:D(e=>[N(`p`,{class:O([`text-xs whitespace-nowrap`,[o(e.item)?void 0:`text-neutral-400`,{"animate-pulse":s(e.item)}]])},l(A(h)(e.item.date)),3),N(`p`,{class:O([`text-xs whitespace-nowrap`,[o(e.item)?void 0:`text-neutral-400`,{"animate-pulse":s(e.item)}]])},` (`+l(e.item.subject.toLowerCase())+`) `,3)]),marker:D(e=>[m(A(q),{shape:`circle`,class:O([o(e.item)?`!bg-green-500 !bg-opacity-50`:`bg-surface-200 text-surface-500 dark:bg-surface-700 dark:text-surface-400`,{"animate-pulse":s(e.item)}])},{default:D(()=>[s(e.item)?(S(),M(`i`,{key:0,class:O([`animate-pulse`,e.item.upcomingIcon])},null,2)):o(e.item)?(S(),M(`i`,{key:1,class:O(e.item.pastIcon)},null,2)):(S(),M(`i`,{key:2,class:O(e.item.futureIcon)},null,2))]),_:2},1032,[`class`])]),content:D(e=>[N(`div`,Ae,[N(`div`,je,[N(`span`,{class:O([`font-medium`,o(e.item)?void 0:`text-neutral-400 dark:text-neutral-400`])},l(e.item.title),3)]),e.item.description?(S(),M(`p`,{key:0,class:O([`mt-2 text-sm`,o(e.item)?`text-neutral-700 dark:text-neutral-300`:`text-neutral-400`])},l(e.item.description),3)):r(``,!0)])]),_:1},8,[`value`]))}}),Ne=e({__name:`HealthTimelines`,props:{stopDateAlcohol:{},stopDateSmoking:{},stopDateCaffeine:{},stopDateUltraProcessedFood:{}},setup(e){let n=e,r=T(()=>n.stopDateAlcohol??new Date),i=T(()=>n.stopDateSmoking??new Date),a=T(()=>n.stopDateCaffeine??new Date),o=T(()=>n.stopDateUltraProcessedFood??new Date),s=T(()=>[{subject:`Alcohol`,date:new Date(r.value.getTime()+c),title:`Je slaapkwaliteit kan in de eerste weken verbeteren`,description:`Alcohol verstoort de slaaparchitectuur. In de eerste alcoholvrije weken merken veel mensen dat slaap rustiger wordt en nachtelijk wakker worden afneemt.`,sourceLabel:`NHS - Alcohol support`,sourceUrl:`https://www.nhs.uk/live-well/alcohol-support/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Alcohol`,date:new Date(r.value.getTime()+t),title:`Calorie-inname daalt vaak, wat gewichtsverlies kan ondersteunen`,description:`Alcohol levert veel calorieën en kan eetlust en snackgedrag beïnvloeden. Minder of niet drinken helpt daarom vaak bij gewichtsbeheersing.`,sourceLabel:`NHS - Alcohol calories`,sourceUrl:`https://www.nhs.uk/live-well/alcohol-advice/calories-in-alcohol/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Alcohol`,date:new Date(r.value.getTime()+t*3),title:`Bloeddruk kan dalen bij minder drinken`,description:`Het verminderen van alcoholgebruik kan bijdragen aan lagere bloeddruk, vooral bij mensen die eerder meer dronken.`,sourceLabel:`CDC - Alcohol and public health`,sourceUrl:`https://www.cdc.gov/alcohol/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Alcohol`,date:new Date(r.value.getTime()+t*6),title:`Leververvetting kan verbeteren bij aanhoudende abstinentie`,description:`Bij alcoholgerelateerde leververvetting kan de lever in maanden herstellen wanneer alcoholgebruik stopt.`,sourceLabel:`NHS - Alcohol-related liver disease`,sourceUrl:`https://www.nhs.uk/conditions/alcohol-related-liver-disease-arld/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Alcohol`,date:new Date(r.value.getTime()+b),title:`Langetermijnrisico op alcoholgerelateerde ziekten daalt`,description:`Langdurig minder of niet drinken verlaagt risico’s op o.a. leverziekte, cardiovasculaire schade en meerdere kankersoorten.`,sourceLabel:`WHO - Alcohol`,sourceUrl:`https://www.who.int/news-room/fact-sheets/detail/alcohol`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`}]),l=T(()=>[{subject:`Roken`,date:new Date(i.value.getTime()+oe*20),title:`Je hartslag en bloeddruk beginnen te dalen`,description:`Al binnen 20 minuten na je laatste sigaret begint je lichaam te herstellen.`,sourceLabel:`CDC - Benefits of Quitting Smoking`,sourceUrl:`https://www.cdc.gov/tobacco/about/benefits-of-quitting.html`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+_*8),title:`Koolmonoxide in je bloed daalt, zuurstoftransport verbetert`,description:`Door minder koolmonoxide kan zuurstof weer beter worden vervoerd in je bloed.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+d),title:`Koolmonoxide is doorgaans uit je lichaam`,description:`Na ongeveer 24 uur is koolmonoxide meestal uit je lichaam verdwenen.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+d*2),title:`Reuk en smaak beginnen duidelijk te verbeteren`,description:`Je zenuwuiteinden herstellen verder; veel mensen merken smaak en geur beter op.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+d*3),title:`Ontwenningsklachten zijn vaak op hun sterkst (en dus tijdelijk)`,description:`Rond dag 2-3 kan nicotine-ontwenning pieken; dit is een normaal en voorbijgaand herstelstadium.`,sourceLabel:`NHS - Managing nicotine withdrawal symptoms`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/staying-smoke-free/managing-nicotine-withdrawal-symptoms/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+c),title:`Ademen kan al iets makkelijker voelen`,description:`In de eerste week ruimen je longen slijm op; dat ondersteunt je ademhaling.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+c*2),title:`Doorbloeding en longfunctie verbeteren merkbaar (2-12 weken)`,description:`Wandelen, traplopen of sporten kan geleidelijk minder zwaar aanvoelen.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+t*6),title:`Hoesten, piepen en benauwdheid nemen vaak af (3-9 maanden)`,description:`De longfunctie kan in deze periode verder verbeteren; dagelijkse inspanning voelt vaak comfortabeler.`,sourceLabel:`NHS - Quit smoking timeline`,sourceUrl:`https://www.nhs.uk/better-health/quit-smoking/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+b),title:`Je risico op coronaire hartziekte daalt sterk`,description:`Na 1 jaar is je risico op hartziekte al duidelijk lager dan tijdens het roken.`,sourceLabel:`CDC - Benefits of Quitting Smoking`,sourceUrl:`https://www.cdc.gov/tobacco/about/benefits-of-quitting.html`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+b*5),title:`Risico op kanker van mond/keel/slokdarm/blaas daalt duidelijk`,description:`Na ongeveer 5 jaar is het risico op deze kankers vaak ongeveer gehalveerd t.o.v. doorroken.`,sourceLabel:`CDC - Benefits of Quitting Smoking`,sourceUrl:`https://www.cdc.gov/tobacco/about/benefits-of-quitting.html`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+b*10),title:`Risico op overlijden door longkanker is ongeveer gehalveerd`,description:`Ook het risico op andere kankers (o.a. strottenhoofd en pancreas) daalt verder.`,sourceLabel:`CDC - Benefits of Quitting Smoking`,sourceUrl:`https://www.cdc.gov/tobacco/about/benefits-of-quitting.html`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Roken`,date:new Date(i.value.getTime()+b*15),title:`Risico op coronaire hartziekte benadert dat van een niet-roker`,description:`Na langdurig rookvrij blijven komt je cardiovasculaire risico dicht bij dat van mensen die niet roken.`,sourceLabel:`CDC - Benefits of Quitting Smoking`,sourceUrl:`https://www.cdc.gov/tobacco/about/benefits-of-quitting.html`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`}]),u=T(()=>[{subject:`Cafeïne`,date:new Date(a.value.getTime()+d),title:`Ontwenningsklachten kunnen binnen 12-24 uur starten`,description:`Na stoppen of sterk minderen kunnen hoofdpijn, vermoeidheid, prikkelbaarheid en concentratieproblemen optreden.`,sourceLabel:`NCBI StatPearls - Caffeine Withdrawal`,sourceUrl:`https://www.ncbi.nlm.nih.gov/books/NBK430790/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Cafeïne`,date:new Date(a.value.getTime()+d*3),title:`Piek van ontwenningsklachten ligt vaak rond dag 1-2 en zakt daarna`,description:`Klachten pieken vaak tussen 20 en 51 uur en nemen daarna meestal geleidelijk af.`,sourceLabel:`NCBI StatPearls - Caffeine Withdrawal`,sourceUrl:`https://www.ncbi.nlm.nih.gov/books/NBK430790/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Cafeïne`,date:new Date(a.value.getTime()+c),title:`Ontwenning is bij de meeste mensen binnen 2-9 dagen grotendeels voorbij`,description:`De totale duur van cafeïne-ontwenning ligt vaak tussen 2 en 9 dagen, afhankelijk van gebruik en gevoeligheid.`,sourceLabel:`NCBI StatPearls - Caffeine Withdrawal`,sourceUrl:`https://www.ncbi.nlm.nih.gov/books/NBK430790/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Cafeïne`,date:new Date(a.value.getTime()+c*2),title:`Je slaap kan verbeteren als cafeïne eerder je slaap verstoorde`,description:`Minder cafeïne (vooral later op de dag) kan slaaplatentie verkorten en slaapkwaliteit verbeteren.`,sourceLabel:`Sleep Foundation - Caffeine and Sleep`,sourceUrl:`https://www.sleepfoundation.org/nutrition/caffeine-and-sleep`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`}]),f=T(()=>[{subject:`Ultrabewerkt voedsel`,date:new Date(o.value.getTime()+c),title:`Minder ultrabewerkt eten verlaagt vaak je energie-inname`,description:`In een gecontroleerde voedingsstudie aten mensen spontaan meer calorieën bij een ultrabewerkt patroon dan bij onbewerkt/minimaal bewerkt eten.`,sourceLabel:`NIH - Hall et al., Cell Metabolism (2019)`,sourceUrl:`https://pubmed.ncbi.nlm.nih.gov/31105044/`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Ultrabewerkt voedsel`,date:new Date(o.value.getTime()+t),title:`Meer vezelrijke, minimaal bewerkte voeding kan verzadiging en stoelgang verbeteren`,description:`Vervanging van ultrabewerkte producten door volkoren, groente, fruit en peulvruchten verhoogt doorgaans de vezelinname en ondersteunt darmgezondheid.`,sourceLabel:`WHO - Healthy diet`,sourceUrl:`https://www.who.int/news-room/fact-sheets/detail/healthy-diet`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Ultrabewerkt voedsel`,date:new Date(o.value.getTime()+t*3),title:`Cardiometabole markers kunnen verbeteren bij een gezonder totaalpatroon`,description:`Als minder ultrabewerkt eten samengaat met beter voedingspatroon en gewichtsverlies, kunnen bloeddruk, glucose en lipiden verbeteren.`,sourceLabel:`AHA - Scientific statement on food processing and health`,sourceUrl:`https://www.ahajournals.org/doi/10.1161/CIR.0000000000000566`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`},{subject:`Ultrabewerkt voedsel`,date:new Date(o.value.getTime()+b),title:`Lager aandeel ultrabewerkt eten hangt samen met lager risico op chronische ziekten`,description:`Grote observationele studies tonen associaties met lager risico op o.a. hart- en vaatziekten, type 2 diabetes en vroegtijdige sterfte. Dit zijn populatieverbanden, geen individuele garanties.`,sourceLabel:`The BMJ - UPF consumption and health outcomes (umbrella review)`,sourceUrl:`https://www.bmj.com/content/384/bmj-2023-077310`,pastIcon:`pi pi-heart-fill`,upcomingIcon:`pi pi-wave-pulse`,futureIcon:`pi pi-heart`}]),p=T(()=>{let e=[];return n.stopDateAlcohol&&e.push(...s.value),n.stopDateSmoking&&e.push(...l.value),n.stopDateCaffeine&&e.push(...u.value),n.stopDateUltraProcessedFood&&e.push(...f.value),e.sort((e,t)=>e.date.getTime()-t.date.getTime())});return(e,t)=>(S(),v(Me,{items:p.value},null,8,[`items`]))}}),Pe={class:`p-5 md:p-10 flex flex-col gap-6`},Fe={key:0,class:`flex justify-center py-8`},Ie={key:1,class:`flex flex-col gap-10`},Le={class:`flex justify-center flex-wrap gap-5`},Re={class:`flex justify-center flex-wrap gap-3`},ze={key:1,class:`flex justify-center`},Be={class:`p-5`},Ve=e({__name:`HealthData`,setup(e){let r=f(),i=ee(),o=s(),{isDarkTheme:c}=ce(),{firebaseUser:l,isLoggedIn:u}=w(i),{healthData:d,isFetchLoading:p,isMutationLoading:h}=w(o),_=E(!1),y=E(new Date),b=E(null),x=T(()=>l.value?.uid??null),C=T(()=>c.value?`!bg-green-950 !text-green-300`:`!bg-green-200 !text-green-700`),O=T(()=>{if(!d.value)return 0;let e=d.value.stopDateAlcohol??y.value,n=d.value.stopDateSmoking??y.value,r=d.value.stopDateCafeine??y.value,i=d.value.stopDateUltraProcessedFood??y.value,a=Math.max(0,(y.value.getTime()-e.getTime())/t),o=Math.max(0,(y.value.getTime()-n.getTime())/t),s=Math.max(0,(y.value.getTime()-r.getTime())/t),c=Math.max(0,(y.value.getTime()-i.getTime())/t),l=d.value.costsAlcoholMonthly,u=d.value.costsSmokingMonthly,f=d.value.costsCafeineMonthly,p=d.value.costsUltraProcessedFoodMonthly;return a*l+o*u+s*f+c*p});return g(x,async e=>{e&&await o.fetchHealthData(e,{silentCreateSuccess:!0})},{immediate:!0}),I(()=>{b.value=setInterval(()=>{y.value=new Date},1e3)}),n(()=>{b.value&&clearInterval(b.value)}),(e,t)=>(S(),M(P,null,[m(se,null,{content:D(()=>[A(u)?(S(),v(A(R),{key:0,class:`card-accent-primary my-5`},{content:D(()=>[N(`div`,Pe,[m(H,{title:`Gezondheid`,description:`Hier bekijk je de gezondheidseffecten van stoppen met middelengebruik.`},{default:D(()=>[m(te,{icon:`pi pi-pencil`,label:`Bewerken`,severity:`secondary`,loading:A(h),onClick:t[0]||=e=>_.value=!0},null,8,[`loading`])]),_:1}),A(p)?(S(),M(`div`,Fe,[m(A(B))])):(S(),M(`div`,Ie,[N(`div`,Le,[m($,{subject:`Alcohol`,stopDate:A(d)?.stopDateAlcohol},null,8,[`stopDate`]),m($,{subject:`Roken`,stopDate:A(d)?.stopDateSmoking},null,8,[`stopDate`]),m($,{subject:`Cafeïne`,stopDate:A(d)?.stopDateCafeine},null,8,[`stopDate`]),m($,{subject:`Ultrabewerkt voedsel`,stopDate:A(d)?.stopDateUltraProcessedFood},null,8,[`stopDate`])]),N(`div`,Re,[m(A(k),{label:`${O.value.toFixed(2)} bespaard`,pt:{root:C.value,icon:C.value},icon:`pi pi-euro`},null,8,[`label`,`pt`])]),A(d)?(S(),v(Ne,{key:0,stopDateAlcohol:A(d).stopDateAlcohol,stopDateSmoking:A(d).stopDateSmoking,stopDateCaffeine:A(d).stopDateCafeine,stopDateUltraProcessedFood:A(d).stopDateUltraProcessedFood},null,8,[`stopDateAlcohol`,`stopDateSmoking`,`stopDateCaffeine`,`stopDateUltraProcessedFood`])):(S(),v(A(R),{key:1,class:`surface-panel-glass`},{content:D(()=>[...t[4]||=[N(`p`,{class:`text-neutral-600`},` Je hebt nog geen gezondheidsgegevens ingevoerd. Klik op de knop "Bewerken" om je gegevens in te voeren. `,-1)]]),_:1}))]))])]),_:1})):(S(),M(`div`,ze,[m(A(R),{class:`w-full md:w-1/2 card-accent-primary !rounded-primary my-5`},{content:D(()=>[N(`div`,Be,[N(`a`,{class:`cursor-pointer`,onClick:t[1]||=e=>A(r).push({name:A(j).LOGIN,params:{redirect:JSON.stringify({name:A(j).HEALTH_DATA})}})},` Log in `),t[5]||=a(` om je gezondheidsgegevens te beheren. `,-1)])]),_:1})]))]),_:1}),m(ke,{isOpen:_.value,userId:x.value,healthData:A(d),onCancel:t[2]||=e=>_.value=!1,onSaved:t[3]||=e=>_.value=!1},null,8,[`isOpen`,`userId`,`healthData`])],64))}});export{Ve as default};