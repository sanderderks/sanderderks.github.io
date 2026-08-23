import{Ar as e,Bn as t,Br as n,Cr as r,D as i,Dr as a,Fr as o,Gt as s,Hn as c,Ii as l,Kt as u,Ln as d,Nt as f,O as p,Or as m,Pn as h,Pt as ee,Qr as g,Sr as _,Tt as v,Un as y,Ur as b,Vr as x,Wr as S,Zn as C,b as te,br as w,ci as T,ei as E,ji as D,nn as O,o as k,qr as A,si as j,ui as M,ur as N,vr as ne,wr as P,xr as F,yr as I,z as L,zn as R,zr as z}from"../bundle.js";import{t as re}from"./c-Page.js";import{a as ie,t as ae}from"./c-Dialog.js";import{t as B}from"./c-card.js";import{t as V}from"./c-DateField.js";import{t as H}from"./c-progressspinner.js";import{t as U}from"./c-SimpleHeader.js";var W=p.extend({name:`avatar`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-avatar p-component`,{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape===`circle`,"p-avatar-lg":t.size===`large`,"p-avatar-xl":t.size===`xlarge`}]},label:`p-avatar-label`,icon:`p-avatar-icon`}}),G={name:`BaseAvatar`,extends:i,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:`normal`},shape:{type:String,default:`square`},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:W,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function q(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=oe(e,`string`);return K(t)==`symbol`?t:t+``}function oe(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Y={name:`Avatar`,extends:G,inheritAttrs:!1,emits:[`error`],methods:{onError:function(e){this.$emit(`error`,e)}},computed:{dataP:function(){return v(q(q({},this.shape,this.shape),this.size,this.size))}}},se=[`aria-labelledby`,`aria-label`,`data-p`],ce=[`data-p`],le=[`data-p`],ue=[`src`,`alt`,`data-p`];function de(e,t,n,i,a,s){return x(),P(`div`,o({class:e.cx(`root`),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi(`root`),{"data-p":s.dataP}),[S(e.$slots,`default`,{},function(){return[e.label?(x(),P(`span`,o({key:0,class:e.cx(`label`)},e.ptm(`label`),{"data-p":s.dataP}),l(e.label),17,ce)):e.$slots.icon?(x(),_(A(e.$slots.icon),{key:1,class:D(e.cx(`icon`))},null,8,[`class`])):e.icon?(x(),P(`span`,o({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`),{"data-p":s.dataP}),null,16,le)):e.image?(x(),P(`img`,o({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||=function(){return s.onError&&s.onError.apply(s,arguments)}},e.ptm(`image`),{"data-p":s.dataP}),null,16,ue)):r(``,!0)]})],16,se)}Y.render=de;var fe=p.extend({name:`timeline`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-timeline p-component`,`p-timeline-`+t.align,`p-timeline-`+t.layout]},event:`p-timeline-event`,eventOpposite:`p-timeline-event-opposite`,eventSeparator:`p-timeline-event-separator`,eventMarker:`p-timeline-event-marker`,eventConnector:`p-timeline-event-connector`,eventContent:`p-timeline-event-content`}}),pe={name:`BaseTimeline`,extends:i,props:{value:null,align:{mode:String,default:`left`},layout:{mode:String,default:`vertical`},dataKey:null},style:fe,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function Z(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){var t=he(e,`string`);return X(t)==`symbol`?t:t+``}function he(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Timeline`,extends:pe,inheritAttrs:!1,methods:{getKey:function(e,t){return this.dataKey?L(e,this.dataKey):t},getPTOptions:function(e,t){return this.ptm(e,{context:{index:t,count:this.value.length}})}},computed:{dataP:function(){return v(Z(Z({},this.layout,this.layout),this.align,this.align))}}},ge=[`data-p`],_e=[`data-p`],ve=[`data-p`],ye=[`data-p`],be=[`data-p`],xe=[`data-p`],Se=[`data-p`];function Ce(e,t,n,i,a,s){return x(),P(`div`,o({class:e.cx(`root`)},e.ptmi(`root`),{"data-p":s.dataP}),[(x(!0),P(I,null,b(e.value,function(t,n){return x(),P(`div`,o({key:s.getKey(t,n),class:e.cx(`event`)},{ref_for:!0},s.getPTOptions(`event`,n),{"data-p":s.dataP}),[F(`div`,o({class:e.cx(`eventOpposite`,{index:n})},{ref_for:!0},s.getPTOptions(`eventOpposite`,n),{"data-p":s.dataP}),[S(e.$slots,`opposite`,{item:t,index:n})],16,ve),F(`div`,o({class:e.cx(`eventSeparator`)},{ref_for:!0},s.getPTOptions(`eventSeparator`,n),{"data-p":s.dataP}),[S(e.$slots,`marker`,{item:t,index:n},function(){return[F(`div`,o({class:e.cx(`eventMarker`)},{ref_for:!0},s.getPTOptions(`eventMarker`,n),{"data-p":s.dataP}),null,16,be)]}),n===e.value.length-1?r(``,!0):S(e.$slots,`connector`,{key:0,item:t,index:n},function(){return[F(`div`,o({class:e.cx(`eventConnector`)},{ref_for:!0},s.getPTOptions(`eventConnector`,n),{"data-p":s.dataP}),null,16,xe)]})],16,ye),F(`div`,o({class:e.cx(`eventContent`)},{ref_for:!0},s.getPTOptions(`eventContent`,n),{"data-p":s.dataP}),[S(e.$slots,`content`,{item:t,index:n})],16,Se)],16,_e)}),128))],16,ge)}Q.render=Ce;var we=e({__name:`HealthDataDialog`,props:{isOpen:{type:Boolean},userId:{},healthData:{},title:{default:`Bewerk gezondheidsgegevens`},description:{default:`Werk je stopdatums voor je gezondheidsgegevens bij.`}},emits:[`cancel`,`saved`],setup(e,{emit:t}){let n=e,r=t,i=s(),{isMutationLoading:a}=C(i),o=j({stopDateAlcohol:null,stopDateSmoking:null,stopDateCafeine:null,stopDateUltraProcessedFood:null}),c=w(()=>n.userId?n.healthData?new u(n.userId,n.healthData.stopDateAlcohol,n.healthData.stopDateSmoking,n.healthData.stopDateCafeine,n.healthData.stopDateUltraProcessedFood):u.create(n.userId):null),l=w(()=>n.userId?new u(n.userId,o.stopDateAlcohol,o.stopDateSmoking,o.stopDateCafeine,o.stopDateUltraProcessedFood):null),d=w(()=>!!c.value&&!!l.value&&!O(c.value,l.value)),f=async()=>{!n.userId||!l.value||await i.updateHealthData(n.userId,l.value)&&r(`saved`)};return g(()=>[n.isOpen,n.healthData,n.userId],()=>{o.stopDateAlcohol=n.healthData?.stopDateAlcohol??null,o.stopDateSmoking=n.healthData?.stopDateSmoking??null,o.stopDateCafeine=n.healthData?.stopDateCafeine??null,o.stopDateUltraProcessedFood=n.healthData?.stopDateUltraProcessedFood??null},{immediate:!0}),(t,n)=>(x(),_(ae,{isOpen:e.isOpen,title:e.title,description:e.description,"confirm-text":`Opslaan`,"confirm-loading":M(a),"confirm-props":{disabled:!d.value},onConfirm:f,onCancel:n[4]||=e=>t.$emit(`cancel`)},{default:E(()=>[F(`form`,{class:`w-full md:w-1/2 pt-6 mb-4 flex flex-col gap-3 place-self-center`,onSubmit:ne(f,[`prevent`])},[m(V,{name:`stopDateAlcohol`,label:`Gestopt met alcohol op`,modelValue:o.stopDateAlcohol,"onUpdate:modelValue":n[0]||=e=>o.stopDateAlcohol=e},null,8,[`modelValue`]),m(V,{name:`stopDateSmoking`,label:`Gestopt met roken op`,modelValue:o.stopDateSmoking,"onUpdate:modelValue":n[1]||=e=>o.stopDateSmoking=e},null,8,[`modelValue`]),m(V,{name:`stopDateCafeine`,label:`Gestopt met cafeine op`,modelValue:o.stopDateCafeine,"onUpdate:modelValue":n[2]||=e=>o.stopDateCafeine=e},null,8,[`modelValue`]),m(V,{name:`stopDateUltraProcessedFood`,label:`Gestopt met ultra-processed food op`,modelValue:o.stopDateUltraProcessedFood,"onUpdate:modelValue":n[3]||=e=>o.stopDateUltraProcessedFood=e},null,8,[`modelValue`])],32)]),_:1},8,[`isOpen`,`title`,`description`,`confirm-loading`,`confirm-props`]))}}),Te={class:`pb-6`},Ee={class:`flex items-center gap-2 flex-wrap`},De=e({__name:`TimelineComponent`,props:{items:{}},setup(e){let t=e,i=T(new Date),a=T(null);function o(e){return i.value>=e.date}function s(e){return i.value<e.date&&t.items.indexOf(e)===t.items.findIndex(e=>e.date>i.value)}return z(()=>{a.value=setInterval(()=>{i.value=new Date},1e3)}),n(()=>{a.value&&clearInterval(a.value)}),(t,n)=>(x(),_(M(Q),{value:e.items},{opposite:E(e=>[F(`span`,{class:D([`text-xs whitespace-nowrap`,[o(e.item)?`text-neutral-200`:`text-neutral-400`,{"animate-pulse":s(e.item)}]])},l(M(h)(e.item.date)),3)]),marker:E(e=>[m(M(Y),{shape:`circle`,class:D([o(e.item)?`!bg-green-500 !bg-opacity-50`:`bg-surface-200 text-surface-500 dark:bg-surface-700 dark:text-surface-400`,{"animate-pulse":s(e.item)}])},{default:E(()=>[F(`i`,{class:D([e.item.icon,{"animate-pulse":s(e.item)}])},null,2)]),_:2},1032,[`class`])]),content:E(e=>[F(`div`,Te,[F(`div`,Ee,[F(`span`,{class:D([`font-medium text-surface-900 dark:text-surface-0`,o(e.item)?`text-white`:`text-neutral-400`])},l(e.item.title),3)]),e.item.description?(x(),P(`p`,{key:0,class:D([`mt-2 text-sm`,o(e.item)?`text-neutral-200`:`text-neutral-400`])},l(e.item.description),3)):r(``,!0)])]),_:1},8,[`value`]))}}),$=e({__name:`HealthTimelines`,props:{stopDateAlcohol:{},stopDateSmoking:{},stopDateCaffeine:{},stopDateUltraProcessedFood:{}},setup(e){let n=e,r=w(()=>n.stopDateAlcohol??new Date),i=w(()=>n.stopDateSmoking??new Date),a=w(()=>n.stopDateCaffeine??new Date),o=w(()=>n.stopDateUltraProcessedFood??new Date),s=w(()=>[{date:new Date(r.value.getTime()+c),title:`Meer energie en een gezonder uiterlijk`,description:`Het energieniveau en de mentale scherpte nemen toe, terwijl het eerste gewichtsverlies zichtbaar wordt. Ook verbeteren de huid en verminderen wallen en donkere kringen rond de ogen.`,icon:`pi pi-sun`},{date:new Date(r.value.getTime()+t),title:`Lichamelijk herstel en betere gezondheid`,description:`Vrijwel alle lichamelijke klachten zijn verdwenen en eventuele leverschade begint te herstellen. Je hebt meer energie, een betere spijsvertering en een gezondere huid.`,icon:`pi pi-sun`},{date:new Date(r.value.getTime()+t*3),title:`Volledig lichamelijk en mentaal herstel`,description:`Het lichamelijke en mentale herstel is grotendeels voltooid, met een betere leverfunctie, conditie en weerstand. Ook zijn er duidelijk gewichtsverlies en verbeteringen in emoties en denkvermogen.`,icon:`pi pi-sun`},{date:new Date(r.value.getTime()+y),title:`Maximaal herstel en lager ziekterisico`,description:`Vrijwel al het mogelijke lichamelijke en mentale herstel is bereikt en het risico op verschillende ziekten is sterk afgenomen. Wel kan een verminderde impulscontrole de kans op terugval vergroten, vooral bij stress of sociale druk.`,icon:`pi pi-sun`}]),l=w(()=>[{date:new Date(i.value.getTime()+R*20),title:`Je bloeddruk daalt en je hartslag wordt rustiger`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+d),title:`Je bloeddruk en de kans op een hartinfarct dalen`,description:`Alle sporen van koolmonoxide zijn uit je lichaam. Je bent dus eigenlijk al na 1 dag een stukje gezonder.`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+d*2),title:`Alle nicotine is uit je lichaam. Je ruikt en je proeft beter`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+c*12),title:`Kans op hartaanval daalt en longfunctie verbetert`,description:`12 weken na het stoppen met roken daalt de kans op een hartaanval en verbetert de longfunctie.`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+d*3),title:`Ademen gaat makkelijker en je hebt meer energie`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+y*5),title:`Je kans op mondholte- of slokdarmkanker is gehalveerd`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+y*10),title:`Je hebt 50% minder kans longkanker dan toen je nog rookte`,description:`Longkanker komt meestal door roken en die kans is voor jou nu al veel kleiner geworden.`,icon:`pi pi-wave-pulse`},{date:new Date(i.value.getTime()+y*15),title:`Je kans op longkanker blijft dalen`,description:`Ook na 15 jaar blijft je kans op longkanker nog steeds dalen.`,icon:`pi pi-wave-pulse`}]),u=w(()=>[{date:new Date(a.value.getTime()+d*6),title:`Verbeterde slaap en concentratie`,description:`Je lichaam past zich aan het nieuwe ritme aan; je slaap en concentratie beginnen merkbaar te verbeteren.`,icon:`pi pi-heart`},{date:new Date(a.value.getTime()+c*2),title:`Stabielere energieniveaus`,description:`Je energie en stemming stabiliseren zich volledig; je ervaart een constantere energienatie gedurende de dag zonder de bekende suiker- of cafeïnedips.`,icon:`pi pi-heart`},{date:new Date(a.value.getTime()+t),title:`Verbeterde mentale helderheid en emotionele stabiliteit`,description:`Je cafeïnetolerantie is gereset, je slaapkwaliteit is optimaal en je ervaart minder tot geen angstgevoelens meer die door cafeïne werden veroorzaakt.`,icon:`pi pi-heart`}]),f=w(()=>[{date:new Date(o.value.getTime()+d*2),title:`Stabilisatie van de bloedsuikerspiegel`,description:`Je bloedsuikerspiegel krijgt meteen meer rust en je insulineniveau begint te dalen. Dit zorgt ervoor dat je alvleesklier minder hard hoeft te werken.`,icon:`pi pi-trash`},{date:new Date(o.value.getTime()+c*2),title:`Herstel van smaak en energie`,description:`Je smaakpapillen wennen snel aan minder suiker en zout, waardoor onbewerkt eten intenser smaakt. Ook verdwijnen de bekende energiedips, waardoor je de hele dag meer energie hebt.`,icon:`pi pi-trash`},{date:new Date(o.value.getTime()+t),title:`Verbetering van darmflora en gewicht`,description:`Je darmen herstellen omdat goede bacteriën de juiste voeding krijgen uit natuurlijke vezels. Hierdoor verlies je vaak gewicht, houdt je lichaam minder vocht vast en wordt je huid rustiger.`,icon:`pi pi-trash`},{date:new Date(o.value.getTime()+t*3),title:`Langdurige bescherming tegen ziekten`,description:`Je stofwisseling werkt weer optimaal en herstelt zich op de lange termijn. Hiermee verlaag je de kans op chronische ziekten zoals type 2 diabetes en hart- en vaatziekten.`,icon:`pi pi-trash`}]),p=w(()=>{let e=[];return n.stopDateAlcohol&&e.push(...s.value),n.stopDateSmoking&&e.push(...l.value),n.stopDateCaffeine&&e.push(...u.value),n.stopDateUltraProcessedFood&&e.push(...f.value),e.sort((e,t)=>e.date.getTime()-t.date.getTime())});return(e,t)=>(x(),_(De,{items:p.value},null,8,[`items`]))}}),Oe={class:`p-5 md:p-10 flex flex-col gap-6`},ke={key:0,class:`flex justify-center py-8`},Ae={key:1,class:`flex flex-col gap-10`},je={class:`flex justify-center flex-wrap gap-3`},Me={class:`flex justify-center flex-wrap gap-3`},Ne={key:1,class:`flex justify-center`},Pe={class:`p-5`},Fe=e({__name:`HealthData`,setup(e){let t=f(),r=ee(),i=s(),{isDarkTheme:o}=ie(),{firebaseUser:c,isLoggedIn:l}=C(r),{healthData:u,isFetchLoading:p,isMutationLoading:h}=C(i),v=T(!1),y=T(new Date),b=T(null),S=w(()=>c.value?.uid??null),O=w(()=>o.value?`border border-white/10 !bg-black/15`:`border border-slate-200 !bg-white/85 shadow-sm`),A=w(()=>o.value?`text-neutral-300`:`text-slate-600`),j=w(()=>{if(!u.value)return 0;let e=u.value.stopDateAlcohol??y.value,t=u.value.stopDateSmoking??y.value,n=u.value.stopDateCafeine??y.value,r=u.value.stopDateUltraProcessedFood??y.value,i=Math.max(0,(y.value.getTime()-e.getTime())/d),a=Math.max(0,(y.value.getTime()-t.getTime())/d),o=Math.max(0,(y.value.getTime()-n.getTime())/d),s=Math.max(0,(y.value.getTime()-r.getTime())/d);return i*5+a*12.5+o*1+s*3});return g(S,async e=>{e&&await i.fetchHealthData(e,{silentCreateSuccess:!0})},{immediate:!0}),z(()=>{b.value=setInterval(()=>{y.value=new Date},1e3)}),n(()=>{b.value&&clearInterval(b.value)}),(e,n)=>(x(),P(I,null,[m(re,null,{content:E(()=>[M(l)?(x(),_(M(B),{key:0,class:`card-accent-primary my-5`},{content:E(()=>[F(`div`,Oe,[m(U,{title:`Gezondheid`,description:`Hier bekijk je de gezondheidseffecten van stoppen met middelengebruik.`},{default:E(()=>[m(te,{icon:`pi pi-pencil`,label:`Bewerken`,severity:`secondary`,loading:M(h),onClick:n[0]||=e=>v.value=!0},null,8,[`loading`])]),_:1}),M(p)?(x(),P(`div`,ke,[m(M(H))])):(x(),P(`div`,Ae,[F(`div`,je,[m(M(k),{label:`Alcohol`,pt:{root:M(u)?.stopDateAlcohol?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`,icon:M(u)?.stopDateAlcohol?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`},icon:M(u)?.stopDateAlcohol?`pi pi-trophy`:`pi pi-times`},null,8,[`pt`,`icon`]),m(M(k),{label:`Roken`,pt:{root:M(u)?.stopDateSmoking?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`,icon:M(u)?.stopDateSmoking?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`},icon:M(u)?.stopDateSmoking?`pi pi-trophy`:`pi pi-times`},null,8,[`pt`,`icon`]),m(M(k),{label:`Cafeïne`,pt:{root:M(u)?.stopDateCafeine?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`,icon:M(u)?.stopDateCafeine?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`},icon:M(u)?.stopDateCafeine?`pi pi-trophy`:`pi pi-times`},null,8,[`pt`,`icon`]),m(M(k),{label:`Ultrabewerkt voedsel`,pt:{root:M(u)?.stopDateUltraProcessedFood?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`,icon:M(u)?.stopDateUltraProcessedFood?void 0:`!bg-red-50 dark:!bg-red-950 !text-red-700 dark:!text-red-300`},icon:M(u)?.stopDateUltraProcessedFood?`pi pi-trophy`:`pi pi-times`},null,8,[`pt`,`icon`])]),F(`div`,Me,[m(M(k),{label:`${j.value.toFixed(2)} bespaard`,pt:{root:`!bg-green-50 dark:!bg-green-950 !text-green-700 dark:!text-green-300`,icon:`!bg-green-50 dark:!bg-green-950 !text-green-700 dark:!text-green-300`},icon:`pi pi-euro`},null,8,[`label`])]),M(u)?(x(),_($,{key:0,stopDateAlcohol:M(u).stopDateAlcohol,stopDateSmoking:M(u).stopDateSmoking,stopDateCaffeine:M(u).stopDateCafeine,stopDateUltraProcessedFood:M(u).stopDateUltraProcessedFood},null,8,[`stopDateAlcohol`,`stopDateSmoking`,`stopDateCaffeine`,`stopDateUltraProcessedFood`])):(x(),_(M(B),{key:1,class:D(O.value)},{content:E(()=>[F(`p`,{class:D(A.value)},` Je hebt nog geen gezondheidsgegevens ingevoerd. Klik op de knop "Bewerken" om je gegevens in te voeren. `,2)]),_:1},8,[`class`]))]))])]),_:1})):(x(),P(`div`,Ne,[m(M(B),{class:`w-full md:w-1/2 card-accent-primary !rounded-primary my-5`},{content:E(()=>[F(`div`,Pe,[F(`a`,{class:`cursor-pointer`,onClick:n[1]||=e=>M(t).push({name:M(N).LOGIN,params:{redirect:JSON.stringify({name:M(N).HEALTH_DATA})}})},` Log in `),n[4]||=a(` om je gezondheidsgegevens te beheren. `,-1)])]),_:1})]))]),_:1}),m(we,{isOpen:v.value,userId:S.value,healthData:M(u),onCancel:n[2]||=e=>v.value=!1,onSaved:n[3]||=e=>v.value=!1},null,8,[`isOpen`,`userId`,`healthData`])],64))}});export{Fe as default};