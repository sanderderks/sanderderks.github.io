(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cu(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const uI="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",hI=Cu(uI);function yo(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=vt(r)?gI(r):yo(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(vt(t))return t;if(st(t))return t}}const fI=/;(?![^(]*\))/g,dI=/:([^]+)/,pI=/\/\*.*?\*\//gs;function gI(t){const e={};return t.replace(pI,"").split(fI).forEach(n=>{if(n){const r=n.split(dI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Eo(t){let e="";if(vt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Eo(t[n]);r&&(e+=r+" ")}else if(st(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function mI(t){if(!t)return null;let{class:e,style:n}=t;return e&&!vt(e)&&(t.class=Eo(e)),n&&(t.style=yo(n)),t}const vI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yI=Cu(vI);function UE(t){return!!t||t===""}function EI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=mi(t[r],e[r]);return n}function mi(t,e){if(t===e)return!0;let n=pm(t),r=pm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pa(t),r=Pa(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?EI(t,e):!1;if(n=st(t),r=st(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!mi(t[o],e[o]))return!1}}return String(t)===String(e)}function Au(t,e){return t.findIndex(n=>mi(n,e))}const dn=t=>vt(t)?t:t==null?"":ae(t)||st(t)&&(t.toString===BE||!Te(t.toString))?JSON.stringify(t,$E,2):String(t),$E=(t,e)=>e&&e.__v_isRef?$E(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:gs(e)?{[`Set(${e.size})`]:[...e.values()]}:st(e)&&!ae(e)&&!jE(e)?String(e):e,rt={},Us=[],qn=()=>{},_I=()=>!1,wI=/^on[^a-z]/,rl=t=>wI.test(t),sp=t=>t.startsWith("onUpdate:"),At=Object.assign,op=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bI=Object.prototype.hasOwnProperty,Ge=(t,e)=>bI.call(t,e),ae=Array.isArray,$s=t=>_o(t)==="[object Map]",gs=t=>_o(t)==="[object Set]",pm=t=>_o(t)==="[object Date]",TI=t=>_o(t)==="[object RegExp]",Te=t=>typeof t=="function",vt=t=>typeof t=="string",Pa=t=>typeof t=="symbol",st=t=>t!==null&&typeof t=="object",ap=t=>st(t)&&Te(t.then)&&Te(t.catch),BE=Object.prototype.toString,_o=t=>BE.call(t),SI=t=>_o(t).slice(8,-1),jE=t=>_o(t)==="[object Object]",lp=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oa=Cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ru=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},II=/-(\w)/g,Sn=Ru(t=>t.replace(II,(e,n)=>n?n.toUpperCase():"")),CI=/\B([A-Z])/g,Un=Ru(t=>t.replace(CI,"-$1").toLowerCase()),il=Ru(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Ru(t=>t?`on${il(t)}`:""),Zs=(t,e)=>!Object.is(t,e),Bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nc=t=>{const e=vt(t)?Number(t):NaN;return isNaN(e)?t:e};let gm;const AI=()=>gm||(gm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let On;class cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=On;try{return On=this,e()}finally{On=n}}}on(){On=this}off(){On=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function xu(t){return new cp(t)}function VE(t,e=On){e&&e.active&&e.effects.push(t)}function up(){return On}function HE(t){On&&On.cleanups.push(t)}const hp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},KE=t=>(t.w&vi)>0,WE=t=>(t.n&vi)>0,RI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vi},xI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];KE(i)&&!WE(i)?i.delete(t):e[n++]=i,i.w&=~vi,i.n&=~vi}e.length=n}},Pc=new WeakMap;let Yo=0,vi=1;const Pf=30;let zn;const Gi=Symbol(""),Df=Symbol("");class sl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,VE(this,r)}run(){if(!this.active)return this.fn();let e=zn,n=ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,ui=!0,vi=1<<++Yo,Yo<=Pf?RI(this):mm(this),this.fn()}finally{Yo<=Pf&&xI(this),vi=1<<--Yo,zn=this.parent,ui=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(mm(this),this.onStop&&this.onStop(),this.active=!1)}}function mm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function OI(t,e){t.effect&&(t=t.effect.fn);const n=new sl(t);e&&(At(n,e),e.scope&&VE(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function NI(t){t.effect.stop()}let ui=!0;const GE=[];function wo(){GE.push(ui),ui=!1}function bo(){const t=GE.pop();ui=t===void 0?!0:t}function An(t,e,n){if(ui&&zn){let r=Pc.get(t);r||Pc.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=hp()),zE(i)}}function zE(t,e){let n=!1;Yo<=Pf?WE(t)||(t.n|=vi,n=!KE(t)):n=!t.has(zn),n&&(t.add(zn),zn.deps.push(t))}function Fr(t,e,n,r,i,s){const o=Pc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ae(t)?lp(n)&&a.push(o.get("length")):(a.push(o.get(Gi)),$s(t)&&a.push(o.get(Df)));break;case"delete":ae(t)||(a.push(o.get(Gi)),$s(t)&&a.push(o.get(Df)));break;case"set":$s(t)&&a.push(o.get(Gi));break}if(a.length===1)a[0]&&kf(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);kf(hp(l))}}function kf(t,e){const n=ae(t)?t:[...t];for(const r of n)r.computed&&vm(r);for(const r of n)r.computed||vm(r)}function vm(t,e){(t!==zn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function PI(t,e){var n;return(n=Pc.get(t))===null||n===void 0?void 0:n.get(e)}const DI=Cu("__proto__,__v_isRef,__isVue"),YE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pa)),kI=Ou(),MI=Ou(!1,!0),LI=Ou(!0),FI=Ou(!0,!0),ym=UI();function UI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=De(this);for(let s=0,o=this.length;s<o;s++)An(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(De)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wo();const r=De(this)[e].apply(this,n);return bo(),r}}),t}function $I(t){const e=De(this);return An(e,"has",t),e.hasOwnProperty(t)}function Ou(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?t0:e0:e?ZE:qE).get(r))return r;const o=ae(r);if(!t){if(o&&Ge(ym,i))return Reflect.get(ym,i,s);if(i==="hasOwnProperty")return $I}const a=Reflect.get(r,i,s);return(Pa(i)?YE.has(i):DI(i))||(t||An(r,"get",i),e)?a:_t(a)?o&&lp(i)?a:a.value:st(a)?t?dp(a):ms(a):a}}const BI=XE(),jI=XE(!0);function XE(t=!1){return function(n,r,i,s){let o=n[r];if(ts(o)&&_t(o)&&!_t(i))return!1;if(!t&&(!Da(i)&&!ts(i)&&(o=De(o),i=De(i)),!ae(n)&&_t(o)&&!_t(i)))return o.value=i,!0;const a=ae(n)&&lp(r)?Number(r)<n.length:Ge(n,r),l=Reflect.set(n,r,i,s);return n===De(s)&&(a?Zs(i,o)&&Fr(n,"set",r,i):Fr(n,"add",r,i)),l}}function VI(t,e){const n=Ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Fr(t,"delete",e,void 0),r}function HI(t,e){const n=Reflect.has(t,e);return(!Pa(e)||!YE.has(e))&&An(t,"has",e),n}function KI(t){return An(t,"iterate",ae(t)?"length":Gi),Reflect.ownKeys(t)}const QE={get:kI,set:BI,deleteProperty:VI,has:HI,ownKeys:KI},JE={get:LI,set(t,e){return!0},deleteProperty(t,e){return!0}},WI=At({},QE,{get:MI,set:jI}),GI=At({},JE,{get:FI}),fp=t=>t,Nu=t=>Reflect.getPrototypeOf(t);function Ml(t,e,n=!1,r=!1){t=t.__v_raw;const i=De(t),s=De(e);n||(e!==s&&An(i,"get",e),An(i,"get",s));const{has:o}=Nu(i),a=r?fp:n?gp:ka;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ll(t,e=!1){const n=this.__v_raw,r=De(n),i=De(t);return e||(t!==i&&An(r,"has",t),An(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fl(t,e=!1){return t=t.__v_raw,!e&&An(De(t),"iterate",Gi),Reflect.get(t,"size",t)}function Em(t){t=De(t);const e=De(this);return Nu(e).has.call(e,t)||(e.add(t),Fr(e,"add",t,t)),this}function _m(t,e){e=De(e);const n=De(this),{has:r,get:i}=Nu(n);let s=r.call(n,t);s||(t=De(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Zs(e,o)&&Fr(n,"set",t,e):Fr(n,"add",t,e),this}function wm(t){const e=De(this),{has:n,get:r}=Nu(e);let i=n.call(e,t);i||(t=De(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Fr(e,"delete",t,void 0),s}function bm(){const t=De(this),e=t.size!==0,n=t.clear();return e&&Fr(t,"clear",void 0,void 0),n}function Ul(t,e){return function(r,i){const s=this,o=s.__v_raw,a=De(o),l=e?fp:t?gp:ka;return!t&&An(a,"iterate",Gi),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function $l(t,e,n){return function(...r){const i=this.__v_raw,s=De(i),o=$s(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?fp:e?gp:ka;return!e&&An(s,"iterate",l?Df:Gi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gr(t){return function(...e){return t==="delete"?!1:this}}function zI(){const t={get(s){return Ml(this,s)},get size(){return Fl(this)},has:Ll,add:Em,set:_m,delete:wm,clear:bm,forEach:Ul(!1,!1)},e={get(s){return Ml(this,s,!1,!0)},get size(){return Fl(this)},has:Ll,add:Em,set:_m,delete:wm,clear:bm,forEach:Ul(!1,!0)},n={get(s){return Ml(this,s,!0)},get size(){return Fl(this,!0)},has(s){return Ll.call(this,s,!0)},add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear"),forEach:Ul(!0,!1)},r={get(s){return Ml(this,s,!0,!0)},get size(){return Fl(this,!0)},has(s){return Ll.call(this,s,!0)},add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear"),forEach:Ul(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$l(s,!1,!1),n[s]=$l(s,!0,!1),e[s]=$l(s,!1,!0),r[s]=$l(s,!0,!0)}),[t,n,e,r]}const[YI,XI,QI,JI]=zI();function Pu(t,e){const n=e?t?JI:QI:t?XI:YI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ge(n,i)&&i in r?n:r,i,s)}const qI={get:Pu(!1,!1)},ZI={get:Pu(!1,!0)},eC={get:Pu(!0,!1)},tC={get:Pu(!0,!0)},qE=new WeakMap,ZE=new WeakMap,e0=new WeakMap,t0=new WeakMap;function nC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rC(t){return t.__v_skip||!Object.isExtensible(t)?0:nC(SI(t))}function ms(t){return ts(t)?t:Du(t,!1,QE,qI,qE)}function n0(t){return Du(t,!1,WI,ZI,ZE)}function dp(t){return Du(t,!0,JE,eC,e0)}function iC(t){return Du(t,!0,GI,tC,t0)}function Du(t,e,n,r,i){if(!st(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=rC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ur(t){return ts(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function Da(t){return!!(t&&t.__v_isShallow)}function pp(t){return ur(t)||ts(t)}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function ns(t){return xc(t,"__v_skip",!0),t}const ka=t=>st(t)?ms(t):t,gp=t=>st(t)?dp(t):t;function mp(t){ui&&zn&&(t=De(t),zE(t.dep||(t.dep=hp())))}function ku(t,e){t=De(t);const n=t.dep;n&&kf(n)}function _t(t){return!!(t&&t.__v_isRef===!0)}function hr(t){return i0(t,!1)}function r0(t){return i0(t,!0)}function i0(t,e){return _t(t)?t:new sC(t,e)}class sC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:De(e),this._value=n?e:ka(e)}get value(){return mp(this),this._value}set value(e){const n=this.__v_isShallow||Da(e)||ts(e);e=n?e:De(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ka(e),ku(this))}}function oC(t){ku(t)}function lt(t){return _t(t)?t.value:t}const aC={get:(t,e,n)=>lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return _t(i)&&!_t(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function vp(t){return ur(t)?t:new Proxy(t,aC)}class lC{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>mp(this),()=>ku(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function cC(t){return new lC(t)}function s0(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=yp(t,n);return e}class uC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PI(De(this._object),this._key)}}function yp(t,e,n){const r=t[e];return _t(r)?r:new uC(t,e,n)}var o0;class hC{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[o0]=!1,this._dirty=!0,this.effect=new sl(e,()=>{this._dirty||(this._dirty=!0,ku(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=De(this);return mp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}o0="__v_isReadonly";function fC(t,e,n=!1){let r,i;const s=Te(t);return s?(r=t,i=qn):(r=t.get,i=t.set),new hC(r,i,s||!i,n)}function dC(t,...e){}function pC(t,e){}function kr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){vs(s,e,n)}return i}function Pn(t,e,n,r){if(Te(t)){const s=kr(t,e,n,r);return s&&ap(s)&&s.catch(o=>{vs(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Pn(t[s],e,n,r));return i}function vs(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){kr(l,null,10,[t,o,a]);return}}gC(t,n,i,r)}function gC(t,e,n,r=!0){console.error(t)}let Ma=!1,Mf=!1;const tn=[];let sr=0;const js=[];let Ar=null,Ui=0;const a0=Promise.resolve();let Ep=null;function To(t){const e=Ep||a0;return t?e.then(this?t.bind(this):t):e}function mC(t){let e=sr+1,n=tn.length;for(;e<n;){const r=e+n>>>1;La(tn[r])<t?e=r+1:n=r}return e}function Mu(t){(!tn.length||!tn.includes(t,Ma&&t.allowRecurse?sr+1:sr))&&(t.id==null?tn.push(t):tn.splice(mC(t.id),0,t),l0())}function l0(){!Ma&&!Mf&&(Mf=!0,Ep=a0.then(c0))}function vC(t){const e=tn.indexOf(t);e>sr&&tn.splice(e,1)}function _p(t){ae(t)?js.push(...t):(!Ar||!Ar.includes(t,t.allowRecurse?Ui+1:Ui))&&js.push(t),l0()}function Tm(t,e=Ma?sr+1:0){for(;e<tn.length;e++){const n=tn[e];n&&n.pre&&(tn.splice(e,1),e--,n())}}function Dc(t){if(js.length){const e=[...new Set(js)];if(js.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ar.sort((n,r)=>La(n)-La(r)),Ui=0;Ui<Ar.length;Ui++)Ar[Ui]();Ar=null,Ui=0}}const La=t=>t.id==null?1/0:t.id,yC=(t,e)=>{const n=La(t)-La(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function c0(t){Mf=!1,Ma=!0,tn.sort(yC);const e=qn;try{for(sr=0;sr<tn.length;sr++){const n=tn[sr];n&&n.active!==!1&&kr(n,null,14)}}finally{sr=0,tn.length=0,Dc(),Ma=!1,Ep=null,(tn.length||js.length)&&c0()}}let Rs,Bl=[];function u0(t,e){var n,r;Rs=t,Rs?(Rs.enabled=!0,Bl.forEach(({event:i,args:s})=>Rs.emit(i,...s)),Bl=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{u0(s,e)}),setTimeout(()=>{Rs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Bl=[])},3e3)):Bl=[]}function EC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||rt;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||rt;f&&(i=n.map(d=>vt(d)?d.trim():d)),h&&(i=n.map(Oc))}let a,l=r[a=aa(e)]||r[a=aa(Sn(e))];!l&&s&&(l=r[a=aa(Un(e))]),l&&Pn(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,i)}}function h0(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Te(t)){const l=c=>{const u=h0(c,e,!0);u&&(a=!0,At(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(st(t)&&r.set(t,null),null):(ae(s)?s.forEach(l=>o[l]=null):At(o,s),st(t)&&r.set(t,o),o)}function Lu(t,e){return!t||!rl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,Un(e))||Ge(t,e))}let zt=null,Fu=null;function Fa(t){const e=zt;return zt=t,Fu=t&&t.type.__scopeId||null,e}function _C(t){Fu=t}function wC(){Fu=null}const bC=t=>Zn;function Zn(t,e=zt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Hf(-1);const s=Fa(e);let o;try{o=t(...i)}finally{Fa(s),r._d&&Hf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=Fa(t);try{if(n.shapeFlag&4){const w=i||r;y=Nn(u.call(w,w,h,s,d,f,p)),v=l}else{const w=e;y=Nn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),v=e.props?l:SC(l)}}catch(w){da.length=0,vs(w,t,1),y=Le(sn)}let E=y;if(v&&m!==!1){const w=Object.keys(v),{shapeFlag:T}=E;w.length&&T&7&&(o&&w.some(sp)&&(v=IC(v,o)),E=gr(E,v))}return n.dirs&&(E=gr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,Fa(g),y}function TC(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(yi(r)){if(r.type!==sn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const SC=t=>{let e;for(const n in t)(n==="class"||n==="style"||rl(n))&&((e||(e={}))[n]=t[n]);return e},IC=(t,e)=>{const n={};for(const r in t)(!sp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function CC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sm(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Lu(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sm(r,o,c):!0:!!o;return!1}function Sm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Lu(n,s))return!0}return!1}function wp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const f0=t=>t.__isSuspense,AC={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,l,c){t==null?xC(e,n,r,i,s,o,a,l,c):OC(t,e,n,r,i,o,a,l,c)},hydrate:NC,create:bp,normalize:PC},RC=AC;function Ua(t,e){const n=t.props&&t.props[e];Te(n)&&n()}function xC(t,e,n,r,i,s,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=bp(t,i,r,e,h,n,s,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,s,o),f.deps>0?(Ua(t,"onPending"),Ua(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,s,o),Vs(f,t.ssFallback)):f.resolve()}function OC(t,e,n,r,i,s,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=h;if(m)h.pendingBranch=f,Yn(f,m)?(l(m,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():y&&(l(p,d,n,r,i,null,s,o,a),Vs(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):c(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,i,null,s,o,a),Vs(h,d))):p&&Yn(f,p)?(l(p,f,n,r,i,h,s,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Yn(f,p))l(p,f,n,r,i,h,s,o,a),Vs(h,f);else if(Ua(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function bp(t,e,n,r,i,s,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:y}}=c,v=t.props?Nc(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:w,activeBranch:T,pendingBranch:S,pendingId:x,effects:I,parentComponent:C,container:P}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const k=T&&S.transition&&S.transition.mode==="out-in";k&&(T.transition.afterLeave=()=>{x===g.pendingId&&f(S,P,O,0)});let{anchor:O}=g;T&&(O=p(T),d(T,C,g,!0)),k||f(S,P,O,0)}Vs(g,S),g.pendingBranch=null,g.isInFallback=!1;let L=g.parent,U=!1;for(;L;){if(L.pendingBranch){L.effects.push(...I),U=!0;break}L=L.parent}U||_p(I),g.effects=[],Ua(w,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:w,activeBranch:T,parentComponent:S,container:x,isSVG:I}=g;Ua(w,"onFallback");const C=p(T),P=()=>{g.isInFallback&&(h(null,E,x,C,S,null,I,a,l),Vs(g,E))},L=E.transition&&E.transition.mode==="out-in";L&&(T.transition.afterLeave=P),g.isInFallback=!0,d(T,S,null,!0),L||P()},move(E,w,T){g.activeBranch&&f(g.activeBranch,E,w,T),g.container=E},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(E,w){const T=!!g.pendingBranch;T&&g.deps++;const S=E.vnode.el;E.asyncDep.catch(x=>{vs(x,E,0)}).then(x=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:I}=E;Kf(E,x,!1),S&&(I.el=S);const C=!S&&E.subTree.el;w(E,I,m(S||E.subTree.el),S?null:p(E.subTree),g,o,l),C&&y(C),wp(E,I.el),T&&--g.deps===0&&g.resolve()})},unmount(E,w){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,w),g.pendingBranch&&d(g.pendingBranch,n,E,w)}};return g}function NC(t,e,n,r,i,s,o,a,l){const c=e.suspense=bp(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(),u}function PC(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Im(r?n.default:n),t.ssFallback=r?Im(n.fallback):Le(sn)}function Im(t){let e;if(Te(t)){const n=ss&&t._c;n&&(t._d=!1,qe()),t=t(),n&&(t._d=!0,e=bn,B0())}return ae(t)&&(t=TC(t)),t=Nn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function d0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):_p(t)}function Vs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,wp(r,i))}function la(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=Ct||zt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(r.proxy):e}}function DC(t,e){return ol(t,null,e)}function p0(t,e){return ol(t,null,{flush:"post"})}function kC(t,e){return ol(t,null,{flush:"sync"})}const jl={};function zi(t,e,n){return ol(t,e,n)}function ol(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=rt){const a=up()===(Ct==null?void 0:Ct.scope)?Ct:null;let l,c=!1,u=!1;if(_t(t)?(l=()=>t.value,c=Da(t)):ur(t)?(l=()=>t,r=!0):ae(t)?(u=!0,c=t.some(E=>ur(E)||Da(E)),l=()=>t.map(E=>{if(_t(E))return E.value;if(ur(E))return Bi(E);if(Te(E))return kr(E,a,2)})):Te(t)?e?l=()=>kr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pn(t,a,3,[f])}:l=qn,e&&r){const E=l;l=()=>Bi(E())}let h,f=E=>{h=v.onStop=()=>{kr(E,a,4)}},d;if(to)if(f=qn,e?n&&Pn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const E=Z0();d=E.__watcherHandles||(E.__watcherHandles=[])}else return qn;let p=u?new Array(t.length).fill(jl):jl;const m=()=>{if(v.active)if(e){const E=v.run();(r||c||(u?E.some((w,T)=>Zs(w,p[T])):Zs(E,p)))&&(h&&h(),Pn(e,a,3,[E,p===jl?void 0:u&&p[0]===jl?[]:p,f]),p=E)}else v.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Ht(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Mu(m));const v=new sl(l,y);e?n?m():p=v.run():i==="post"?Ht(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&op(a.scope.effects,v)};return d&&d.push(g),g}function MC(t,e,n){const r=this.proxy,i=vt(t)?t.includes(".")?g0(r,t):()=>r[t]:t.bind(r,r);let s;Te(e)?s=e:(s=e.handler,n=e);const o=Ct;Ei(this);const a=ol(i,s.bind(r),n);return o?Ei(o):hi(),a}function g0(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Bi(t,e){if(!st(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_t(t))Bi(t.value,e);else if(ae(t))for(let n=0;n<t.length;n++)Bi(t[n],e);else if(gs(t)||$s(t))t.forEach(n=>{Bi(n,e)});else if(jE(t))for(const n in t)Bi(t[n],e);return t}function Tp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return So(()=>{t.isMounted=!0}),ju(()=>{t.isUnmounting=!0}),t}const Ln=[Function,Array],LC={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},setup(t,{slots:e}){const n=br(),r=Tp();let i;return()=>{const s=e.default&&Uu(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==sn){o=m;break}}const a=De(t),{mode:l}=a;if(r.isLeaving)return Mh(o);const c=Cm(o);if(!c)return Mh(o);const u=eo(c,a,r,n);rs(c,u);const h=n.subTree,f=h&&Cm(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,d=!0)}if(f&&f.type!==sn&&(!Yn(c,f)||d)){const m=eo(f,a,r,n);if(rs(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Mh(o);l==="in-out"&&c.type!==sn&&(m.delayLeave=(y,v,g)=>{const E=m0(r,f);E[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Sp=LC;function m0(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function eo(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),w=m0(n,t),T=(I,C)=>{I&&Pn(I,r,9,C)},S=(I,C)=>{const P=C[1];T(I,C),ae(I)?I.every(L=>L.length<=1)&&P():I.length<=1&&P()},x={mode:s,persisted:o,beforeEnter(I){let C=a;if(!n.isMounted)if(i)C=m||a;else return;I._leaveCb&&I._leaveCb(!0);const P=w[E];P&&Yn(t,P)&&P.el._leaveCb&&P.el._leaveCb(),T(C,[I])},enter(I){let C=l,P=c,L=u;if(!n.isMounted)if(i)C=y||l,P=v||c,L=g||u;else return;let U=!1;const k=I._enterCb=O=>{U||(U=!0,O?T(L,[I]):T(P,[I]),x.delayedLeave&&x.delayedLeave(),I._enterCb=void 0)};C?S(C,[I,k]):k()},leave(I,C){const P=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return C();T(h,[I]);let L=!1;const U=I._leaveCb=k=>{L||(L=!0,C(),k?T(p,[I]):T(d,[I]),I._leaveCb=void 0,w[P]===t&&delete w[P])};w[P]=t,f?S(f,[I,U]):U()},clone(I){return eo(I,e,n,r)}};return x}function Mh(t){if(al(t))return t=gr(t),t.children=null,t}function Cm(t){return al(t)?t.children?t.children[0]:void 0:t}function rs(t,e){t.shapeFlag&6&&t.component?rs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Uu(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===St?(o.patchFlag&128&&i++,r=r.concat(Uu(o.children,e,a))):(e||o.type!==sn)&&r.push(a!=null?gr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function gn(t){return Te(t)?{setup:t,name:t.name}:t}const Yi=t=>!!t.type.__asyncLoader;function FC(t){Te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(h()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return gn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ct;if(c)return()=>Lh(c,d);const p=g=>{l=null,vs(g,d,13,!r)};if(o&&d.suspense||to)return f().then(g=>()=>Lh(g,d)).catch(g=>(p(g),()=>r?Le(r,{error:g}):null));const m=hr(!1),y=hr(),v=hr(!!i);return i&&setTimeout(()=>{v.value=!1},i),s!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${s}ms.`);p(g),y.value=g}},s),f().then(()=>{m.value=!0,d.parent&&al(d.parent.vnode)&&Mu(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return Lh(c,d);if(y.value&&r)return Le(r,{error:y.value});if(n&&!v.value)return Le(n)}}})}function Lh(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=Le(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const al=t=>t.type.__isKeepAlive,UC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=br(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,E,w,T,S)=>{const x=g.component;c(g,E,w,0,a),l(x.vnode,g,E,w,x,a,T,g.slotScopeIds,S),Ht(()=>{x.isDeactivated=!1,x.a&&Bs(x.a);const I=g.props&&g.props.onVnodeMounted;I&&En(I,x.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,f,null,1,a),Ht(()=>{E.da&&Bs(E.da);const w=g.props&&g.props.onVnodeUnmounted;w&&En(w,E.parent,g),E.isDeactivated=!0},a)};function d(g){Fh(g),u(g,n,a,!0)}function p(g){i.forEach((E,w)=>{const T=Gf(E.type);T&&(!g||!g(T))&&m(w)})}function m(g){const E=i.get(g);!o||!Yn(E,o)?d(E):o&&Fh(o),i.delete(g),s.delete(g)}zi(()=>[t.include,t.exclude],([g,E])=>{g&&p(w=>Xo(g,w)),E&&p(w=>!Xo(E,w))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&i.set(y,Uh(n.subTree))};return So(v),Bu(v),ju(()=>{i.forEach(g=>{const{subTree:E,suspense:w}=n,T=Uh(E);if(g.type===T.type&&g.key===T.key){Fh(T);const S=T.component.da;S&&Ht(S,w);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!yi(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let w=Uh(E);const T=w.type,S=Gf(Yi(w)?w.type.__asyncResolved||{}:T),{include:x,exclude:I,max:C}=t;if(x&&(!S||!Xo(x,S))||I&&S&&Xo(I,S))return o=w,E;const P=w.key==null?T:w.key,L=i.get(P);return w.el&&(w=gr(w),E.shapeFlag&128&&(E.ssContent=w)),y=P,L?(w.el=L.el,w.component=L.component,w.transition&&rs(w,w.transition),w.shapeFlag|=512,s.delete(P),s.add(P)):(s.add(P),C&&s.size>parseInt(C,10)&&m(s.values().next().value)),w.shapeFlag|=256,o=w,f0(E.type)?E:w}}},$C=UC;function Xo(t,e){return ae(t)?t.some(n=>Xo(n,e)):vt(t)?t.split(",").includes(e):TI(t)?t.test(e):!1}function v0(t,e){E0(t,"a",e)}function y0(t,e){E0(t,"da",e)}function E0(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($u(e,r,n),n){let i=n.parent;for(;i&&i.parent;)al(i.parent.vnode)&&BC(r,e,n,i),i=i.parent}}function BC(t,e,n,r){const i=$u(e,t,r,!0);Vu(()=>{op(r[e],i)},n)}function Fh(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Uh(t){return t.shapeFlag&128?t.ssContent:t}function $u(t,e,n=Ct,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wo(),Ei(n);const a=Pn(e,n,t,o);return hi(),bo(),a});return r?i.unshift(s):i.push(s),s}}const Hr=t=>(e,n=Ct)=>(!to||t==="sp")&&$u(t,(...r)=>e(...r),n),_0=Hr("bm"),So=Hr("m"),w0=Hr("bu"),Bu=Hr("u"),ju=Hr("bum"),Vu=Hr("um"),b0=Hr("sp"),T0=Hr("rtg"),S0=Hr("rtc");function I0(t,e=Ct){$u("ec",t,e)}function Lf(t,e){const n=zt;if(n===null)return t;const r=Ku(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=rt]=e[s];o&&(Te(o)&&(o={mounted:o,updated:o}),o.deep&&Bi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ir(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(wo(),Pn(l,n,8,[t.el,a,t,e]),bo())}}const Ip="components",jC="directives";function C0(t,e){return Cp(Ip,t,!0,e)||t}const A0=Symbol();function VC(t){return vt(t)?Cp(Ip,t,!1)||t:t||A0}function HC(t){return Cp(jC,t)}function Cp(t,e,n=!0,r=!1){const i=zt||Ct;if(i){const s=i.type;if(t===Ip){const a=Gf(s,!1);if(a&&(a===e||a===Sn(e)||a===il(Sn(e))))return s}const o=Am(i[t]||s[t],e)||Am(i.appContext[t],e);return!o&&r?s:o}}function Am(t,e){return t&&(t[e]||t[Sn(e)]||t[il(Sn(e))])}function ca(t,e,n,r){let i;const s=n&&n[r];if(ae(t)||vt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(st(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function KC(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ae(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function ua(t,e,n={},r,i){if(zt.isCE||zt.parent&&Yi(zt.parent)&&zt.parent.isCE)return e!=="default"&&(n.name=e),Le("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),qe();const o=s&&R0(s(n)),a=jn(St,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function R0(t){return t.some(e=>yi(e)?!(e.type===sn||e.type===St&&!R0(e.children)):!0)?t:null}function WC(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:aa(r)]=t[r];return n}const Ff=t=>t?z0(t)?Ku(t)||t.proxy:Ff(t.parent):null,ha=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ff(t.parent),$root:t=>Ff(t.root),$emit:t=>t.emit,$options:t=>Ap(t),$forceUpdate:t=>t.f||(t.f=()=>Mu(t.update)),$nextTick:t=>t.n||(t.n=To.bind(t.proxy)),$watch:t=>MC.bind(t)}),$h=(t,e)=>t!==rt&&!t.__isScriptSetup&&Ge(t,e),Uf={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if($h(r,e))return o[e]=1,r[e];if(i!==rt&&Ge(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(n!==rt&&Ge(n,e))return o[e]=4,n[e];$f&&(o[e]=0)}}const u=ha[e];let h,f;if(u)return e==="$attrs"&&An(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==rt&&Ge(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ge(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return $h(i,e)?(i[e]=n,!0):r!==rt&&Ge(r,e)?(r[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==rt&&Ge(t,o)||$h(e,o)||(a=s[0])&&Ge(a,o)||Ge(r,o)||Ge(ha,o)||Ge(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},GC=At({},Uf,{get(t,e){if(e!==Symbol.unscopables)return Uf.get(t,e,t)},has(t,e){return e[0]!=="_"&&!hI(e)}});let $f=!0;function zC(t){const e=Ap(t),n=t.proxy,r=t.ctx;$f=!1,e.beforeCreate&&Rm(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:w,render:T,renderTracked:S,renderTriggered:x,errorCaptured:I,serverPrefetch:C,expose:P,inheritAttrs:L,components:U,directives:k,filters:O}=e;if(c&&YC(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const se=o[Q];Te(se)&&(r[Q]=se.bind(n))}if(i){const Q=i.call(n,n);st(Q)&&(t.data=ms(Q))}if($f=!0,s)for(const Q in s){const se=s[Q],ke=Te(se)?se.bind(n,n):Te(se.get)?se.get.bind(n,n):qn,ct=!Te(se)&&Te(se.set)?se.set.bind(n):qn,$e=_n({get:ke,set:ct});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Pe=>$e.value=Pe})}if(a)for(const Q in a)x0(a[Q],r,n,Q);if(l){const Q=Te(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(se=>{la(se,Q[se])})}u&&Rm(u,t,"c");function B(Q,se){ae(se)?se.forEach(ke=>Q(ke.bind(n))):se&&Q(se.bind(n))}if(B(_0,h),B(So,f),B(w0,d),B(Bu,p),B(v0,m),B(y0,y),B(I0,I),B(S0,S),B(T0,x),B(ju,g),B(Vu,w),B(b0,C),ae(P))if(P.length){const Q=t.exposed||(t.exposed={});P.forEach(se=>{Object.defineProperty(Q,se,{get:()=>n[se],set:ke=>n[se]=ke})})}else t.exposed||(t.exposed={});T&&t.render===qn&&(t.render=T),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function YC(t,e,n=qn,r=!1){ae(t)&&(t=Bf(t));for(const i in t){const s=t[i];let o;st(s)?"default"in s?o=In(s.from||i,s.default,!0):o=In(s.from||i):o=In(s),_t(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Rm(t,e,n){Pn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function x0(t,e,n,r){const i=r.includes(".")?g0(n,r):()=>n[r];if(vt(t)){const s=e[t];Te(s)&&zi(i,s)}else if(Te(t))zi(i,t.bind(n));else if(st(t))if(ae(t))t.forEach(s=>x0(s,e,n,r));else{const s=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(s)&&zi(i,s,t)}}function Ap(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>kc(l,c,o,!0)),kc(l,e,o)),st(e)&&s.set(e,l),l}function kc(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&kc(t,s,n,!0),i&&i.forEach(o=>kc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=XC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const XC={data:xm,props:ki,emits:ki,methods:ki,computed:ki,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:ki,directives:ki,watch:JC,provide:xm,inject:QC};function xm(t,e){return e?t?function(){return At(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function QC(t,e){return ki(Bf(t),Bf(e))}function Bf(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function ki(t,e){return t?At(At(Object.create(null),t),e):e}function JC(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const r in e)n[r]=hn(t[r],e[r]);return n}function qC(t,e,n,r=!1){const i={},s={};xc(s,Hu,1),t.propsDefaults=Object.create(null),O0(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:n0(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function ZC(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=De(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lu(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ge(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const p=Sn(f);i[p]=jf(l,a,p,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{O0(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!Ge(e,h)&&((u=Un(h))===h||!Ge(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=jf(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Ge(e,h))&&(delete s[h],c=!0)}c&&Fr(t,"set","$attrs")}function O0(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(oa(l))continue;const c=e[l];let u;i&&Ge(i,u=Sn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lu(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=De(n),c=a||rt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=jf(i,l,h,c[h],t,!Ge(c,h))}}return o}function jf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Ge(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Te(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Ei(i),r=c[n]=l.call(null,e),hi())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Un(n))&&(r=!0))}return r}function N0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Te(t)){const u=h=>{l=!0;const[f,d]=N0(h,e,!0);At(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return st(t)&&r.set(t,Us),Us;if(ae(s))for(let u=0;u<s.length;u++){const h=Sn(s[u]);Om(h)&&(o[h]=rt)}else if(s)for(const u in s){const h=Sn(u);if(Om(h)){const f=s[u],d=o[h]=ae(f)||Te(f)?{type:f}:Object.assign({},f);if(d){const p=Dm(Boolean,d.type),m=Dm(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||Ge(d,"default"))&&a.push(h)}}}const c=[o,a];return st(t)&&r.set(t,c),c}function Om(t){return t[0]!=="$"}function Nm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pm(t,e){return Nm(t)===Nm(e)}function Dm(t,e){return ae(e)?e.findIndex(n=>Pm(n,t)):Te(e)&&Pm(e,t)?0:-1}const P0=t=>t[0]==="_"||t==="$stable",Rp=t=>ae(t)?t.map(Nn):[Nn(t)],eA=(t,e,n)=>{if(e._n)return e;const r=Zn((...i)=>Rp(e(...i)),n);return r._c=!1,r},D0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(P0(i))continue;const s=t[i];if(Te(s))e[i]=eA(i,s,r);else if(s!=null){const o=Rp(s);e[i]=()=>o}}},k0=(t,e)=>{const n=Rp(e);t.slots.default=()=>n},tA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=De(e),xc(e,"_",n)):D0(e,t.slots={})}else t.slots={},e&&k0(t,e);xc(t.slots,Hu,1)},nA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=rt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(At(i,e),!n&&a===1&&delete i._):(s=!e.$stable,D0(e,i)),o=e}else e&&(k0(t,e),o={default:1});if(s)for(const a in i)!P0(a)&&!(a in o)&&delete i[a]};function M0(){return{app:null,config:{isNativeTag:_I,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rA=0;function iA(t,e){return function(r,i=null){Te(r)||(r=Object.assign({},r)),i!=null&&!st(i)&&(i=null);const s=M0(),o=new Set;let a=!1;const l=s.app={_uid:rA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:t_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Te(c.install)?(o.add(c),c.install(l,...u)):Te(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Le(r,i);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ku(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Mc(t,e,n,r,i=!1){if(ae(t)){t.forEach((f,d)=>Mc(f,e&&(ae(e)?e[d]:e),n,r,i));return}if(Yi(r)&&!i)return;const s=r.shapeFlag&4?Ku(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,Ge(h,c)&&(h[c]=null)):_t(c)&&(c.value=null)),Te(l))kr(l,a,12,[o,u]);else{const f=vt(l),d=_t(l);if(f||d){const p=()=>{if(t.f){const m=f?Ge(h,l)?h[l]:u[l]:l.value;i?ae(m)&&op(m,s):ae(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Ge(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ge(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Ht(p,n)):p()}}}let zr=!1;const Vl=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Hl=t=>t.nodeType===8;function sA(t){const{mt:e,p:n,o:{patchProp:r,createText:i,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),Dc(),g._vnode=v;return}zr=!1,h(g.firstChild,v,null,null,null),Dc(),g._vnode=v,zr&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,w,T,S=!1)=>{const x=Hl(v)&&v.data==="[",I=()=>m(v,g,E,w,T,x),{type:C,ref:P,shapeFlag:L,patchFlag:U}=g;let k=v.nodeType;g.el=v,U===-2&&(S=!1,g.dynamicChildren=null);let O=null;switch(C){case is:k!==3?g.children===""?(l(g.el=i(""),o(v),v),O=v):O=I():(v.data!==g.children&&(zr=!0,v.data=g.children),O=s(v));break;case sn:k!==8||x?O=I():O=s(v);break;case Xi:if(x&&(v=s(v),k=v.nodeType),k===1||k===3){O=v;const J=!g.children.length;for(let B=0;B<g.staticCount;B++)J&&(g.children+=O.nodeType===1?O.outerHTML:O.data),B===g.staticCount-1&&(g.anchor=O),O=s(O);return x?s(O):O}else I();break;case St:x?O=p(v,g,E,w,T,S):O=I();break;default:if(L&1)k!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?O=I():O=f(v,g,E,w,T,S);else if(L&6){g.slotScopeIds=T;const J=o(v);if(e(g,J,null,E,w,Vl(J),S),O=x?y(v):s(v),O&&Hl(O)&&O.data==="teleport end"&&(O=s(O)),Yi(g)){let B;x?(B=Le(St),B.anchor=O?O.previousSibling:J.lastChild):B=v.nodeType===3?ji(""):Le("div"),B.el=v,g.component.subTree=B}}else L&64?k!==8?O=I():O=g.type.hydrate(v,g,E,w,T,S,t,d):L&128&&(O=g.type.hydrate(v,g,E,w,Vl(o(v)),T,S,t,h))}return P!=null&&Mc(P,null,w,g),O},f=(v,g,E,w,T,S)=>{S=S||!!g.dynamicChildren;const{type:x,props:I,patchFlag:C,shapeFlag:P,dirs:L}=g,U=x==="input"&&L||x==="option";if(U||C!==-1){if(L&&ir(g,null,E,"created"),I)if(U||!S||C&48)for(const O in I)(U&&O.endsWith("value")||rl(O)&&!oa(O))&&r(v,O,null,I[O],!1,void 0,E);else I.onClick&&r(v,"onClick",null,I.onClick,!1,void 0,E);let k;if((k=I&&I.onVnodeBeforeMount)&&En(k,E,g),L&&ir(g,null,E,"beforeMount"),((k=I&&I.onVnodeMounted)||L)&&d0(()=>{k&&En(k,E,g),L&&ir(g,null,E,"mounted")},w),P&16&&!(I&&(I.innerHTML||I.textContent))){let O=d(v.firstChild,g,v,E,w,T,S);for(;O;){zr=!0;const J=O;O=O.nextSibling,a(J)}}else P&8&&v.textContent!==g.children&&(zr=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,w,T,S,x)=>{x=x||!!g.dynamicChildren;const I=g.children,C=I.length;for(let P=0;P<C;P++){const L=x?I[P]:I[P]=Nn(I[P]);if(v)v=h(v,L,w,T,S,x);else{if(L.type===is&&!L.children)continue;zr=!0,n(null,L,E,null,w,T,Vl(E),S)}}return v},p=(v,g,E,w,T,S)=>{const{slotScopeIds:x}=g;x&&(T=T?T.concat(x):x);const I=o(v),C=d(s(v),g,I,E,w,T,S);return C&&Hl(C)&&C.data==="]"?s(g.anchor=C):(zr=!0,l(g.anchor=c("]"),I,C),C)},m=(v,g,E,w,T,S)=>{if(zr=!0,g.el=null,S){const C=y(v);for(;;){const P=s(v);if(P&&P!==C)a(P);else break}}const x=s(v),I=o(v);return a(v),n(null,g,I,x,E,w,Vl(I),T),x},y=v=>{let g=0;for(;v;)if(v=s(v),v&&Hl(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return s(v);g--}return v};return[u,h]}const Ht=d0;function L0(t){return U0(t)}function F0(t){return U0(t,sA)}function U0(t,e){const n=AI();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=qn,insertStaticContent:p}=t,m=(_,b,N,F=null,$=null,K=null,q=!1,Y=null,z=!!b.dynamicChildren)=>{if(_===b)return;_&&!Yn(_,b)&&(F=H(_),Pe(_,$,K,!0),_=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:j,ref:le,shapeFlag:ie}=b;switch(j){case is:y(_,b,N,F);break;case sn:v(_,b,N,F);break;case Xi:_==null&&g(b,N,F,q);break;case St:U(_,b,N,F,$,K,q,Y,z);break;default:ie&1?T(_,b,N,F,$,K,q,Y,z):ie&6?k(_,b,N,F,$,K,q,Y,z):(ie&64||ie&128)&&j.process(_,b,N,F,$,K,q,Y,z,me)}le!=null&&$&&Mc(le,_&&_.ref,K,b||_,!b)},y=(_,b,N,F)=>{if(_==null)r(b.el=a(b.children),N,F);else{const $=b.el=_.el;b.children!==_.children&&c($,b.children)}},v=(_,b,N,F)=>{_==null?r(b.el=l(b.children||""),N,F):b.el=_.el},g=(_,b,N,F)=>{[_.el,_.anchor]=p(_.children,b,N,F,_.el,_.anchor)},E=({el:_,anchor:b},N,F)=>{let $;for(;_&&_!==b;)$=f(_),r(_,N,F),_=$;r(b,N,F)},w=({el:_,anchor:b})=>{let N;for(;_&&_!==b;)N=f(_),i(_),_=N;i(b)},T=(_,b,N,F,$,K,q,Y,z)=>{q=q||b.type==="svg",_==null?S(b,N,F,$,K,q,Y,z):C(_,b,$,K,q,Y,z)},S=(_,b,N,F,$,K,q,Y)=>{let z,j;const{type:le,props:ie,shapeFlag:ce,transition:de,dirs:Ae}=_;if(z=_.el=o(_.type,K,ie&&ie.is,ie),ce&8?u(z,_.children):ce&16&&I(_.children,z,null,F,$,K&&le!=="foreignObject",q,Y),Ae&&ir(_,null,F,"created"),x(z,_,_.scopeId,q,F),ie){for(const Be in ie)Be!=="value"&&!oa(Be)&&s(z,Be,null,ie[Be],K,_.children,F,$,W);"value"in ie&&s(z,"value",null,ie.value),(j=ie.onVnodeBeforeMount)&&En(j,F,_)}Ae&&ir(_,null,F,"beforeMount");const Xe=(!$||$&&!$.pendingBranch)&&de&&!de.persisted;Xe&&de.beforeEnter(z),r(z,b,N),((j=ie&&ie.onVnodeMounted)||Xe||Ae)&&Ht(()=>{j&&En(j,F,_),Xe&&de.enter(z),Ae&&ir(_,null,F,"mounted")},$)},x=(_,b,N,F,$)=>{if(N&&d(_,N),F)for(let K=0;K<F.length;K++)d(_,F[K]);if($){let K=$.subTree;if(b===K){const q=$.vnode;x(_,q,q.scopeId,q.slotScopeIds,$.parent)}}},I=(_,b,N,F,$,K,q,Y,z=0)=>{for(let j=z;j<_.length;j++){const le=_[j]=Y?Zr(_[j]):Nn(_[j]);m(null,le,b,N,F,$,K,q,Y)}},C=(_,b,N,F,$,K,q)=>{const Y=b.el=_.el;let{patchFlag:z,dynamicChildren:j,dirs:le}=b;z|=_.patchFlag&16;const ie=_.props||rt,ce=b.props||rt;let de;N&&Oi(N,!1),(de=ce.onVnodeBeforeUpdate)&&En(de,N,b,_),le&&ir(b,_,N,"beforeUpdate"),N&&Oi(N,!0);const Ae=$&&b.type!=="foreignObject";if(j?P(_.dynamicChildren,j,Y,N,F,Ae,K):q||se(_,b,Y,null,N,F,Ae,K,!1),z>0){if(z&16)L(Y,b,ie,ce,N,F,$);else if(z&2&&ie.class!==ce.class&&s(Y,"class",null,ce.class,$),z&4&&s(Y,"style",ie.style,ce.style,$),z&8){const Xe=b.dynamicProps;for(let Be=0;Be<Xe.length;Be++){const A=Xe[Be],R=ie[A],D=ce[A];(D!==R||A==="value")&&s(Y,A,R,D,$,_.children,N,F,W)}}z&1&&_.children!==b.children&&u(Y,b.children)}else!q&&j==null&&L(Y,b,ie,ce,N,F,$);((de=ce.onVnodeUpdated)||le)&&Ht(()=>{de&&En(de,N,b,_),le&&ir(b,_,N,"updated")},F)},P=(_,b,N,F,$,K,q)=>{for(let Y=0;Y<b.length;Y++){const z=_[Y],j=b[Y],le=z.el&&(z.type===St||!Yn(z,j)||z.shapeFlag&70)?h(z.el):N;m(z,j,le,null,F,$,K,q,!0)}},L=(_,b,N,F,$,K,q)=>{if(N!==F){if(N!==rt)for(const Y in N)!oa(Y)&&!(Y in F)&&s(_,Y,N[Y],null,q,b.children,$,K,W);for(const Y in F){if(oa(Y))continue;const z=F[Y],j=N[Y];z!==j&&Y!=="value"&&s(_,Y,j,z,q,b.children,$,K,W)}"value"in F&&s(_,"value",N.value,F.value)}},U=(_,b,N,F,$,K,q,Y,z)=>{const j=b.el=_?_.el:a(""),le=b.anchor=_?_.anchor:a("");let{patchFlag:ie,dynamicChildren:ce,slotScopeIds:de}=b;de&&(Y=Y?Y.concat(de):de),_==null?(r(j,N,F),r(le,N,F),I(b.children,N,le,$,K,q,Y,z)):ie>0&&ie&64&&ce&&_.dynamicChildren?(P(_.dynamicChildren,ce,N,$,K,q,Y),(b.key!=null||$&&b===$.subTree)&&xp(_,b,!0)):se(_,b,N,le,$,K,q,Y,z)},k=(_,b,N,F,$,K,q,Y,z)=>{b.slotScopeIds=Y,_==null?b.shapeFlag&512?$.ctx.activate(b,N,F,q,z):O(b,N,F,$,K,q,z):J(_,b,z)},O=(_,b,N,F,$,K,q)=>{const Y=_.component=G0(_,F,$);if(al(_)&&(Y.ctx.renderer=me),Y0(Y),Y.asyncDep){if($&&$.registerDep(Y,B),!_.el){const z=Y.subTree=Le(sn);v(null,z,b,N)}return}B(Y,_,b,N,$,K,q)},J=(_,b,N)=>{const F=b.component=_.component;if(CC(_,b,N))if(F.asyncDep&&!F.asyncResolved){Q(F,b,N);return}else F.next=b,vC(F.update),F.update();else b.el=_.el,F.vnode=b},B=(_,b,N,F,$,K,q)=>{const Y=()=>{if(_.isMounted){let{next:le,bu:ie,u:ce,parent:de,vnode:Ae}=_,Xe=le,Be;Oi(_,!1),le?(le.el=Ae.el,Q(_,le,q)):le=Ae,ie&&Bs(ie),(Be=le.props&&le.props.onVnodeBeforeUpdate)&&En(Be,de,le,Ae),Oi(_,!0);const A=pc(_),R=_.subTree;_.subTree=A,m(R,A,h(R.el),H(R),_,$,K),le.el=A.el,Xe===null&&wp(_,A.el),ce&&Ht(ce,$),(Be=le.props&&le.props.onVnodeUpdated)&&Ht(()=>En(Be,de,le,Ae),$)}else{let le;const{el:ie,props:ce}=b,{bm:de,m:Ae,parent:Xe}=_,Be=Yi(b);if(Oi(_,!1),de&&Bs(de),!Be&&(le=ce&&ce.onVnodeBeforeMount)&&En(le,Xe,b),Oi(_,!0),ie&&_e){const A=()=>{_.subTree=pc(_),_e(ie,_.subTree,_,$,null)};Be?b.type.__asyncLoader().then(()=>!_.isUnmounted&&A()):A()}else{const A=_.subTree=pc(_);m(null,A,N,F,_,$,K),b.el=A.el}if(Ae&&Ht(Ae,$),!Be&&(le=ce&&ce.onVnodeMounted)){const A=b;Ht(()=>En(le,Xe,A),$)}(b.shapeFlag&256||Xe&&Yi(Xe.vnode)&&Xe.vnode.shapeFlag&256)&&_.a&&Ht(_.a,$),_.isMounted=!0,b=N=F=null}},z=_.effect=new sl(Y,()=>Mu(j),_.scope),j=_.update=()=>z.run();j.id=_.uid,Oi(_,!0),j()},Q=(_,b,N)=>{b.component=_;const F=_.vnode.props;_.vnode=b,_.next=null,ZC(_,b.props,F,N),nA(_,b.children,N),wo(),Tm(),bo()},se=(_,b,N,F,$,K,q,Y,z=!1)=>{const j=_&&_.children,le=_?_.shapeFlag:0,ie=b.children,{patchFlag:ce,shapeFlag:de}=b;if(ce>0){if(ce&128){ct(j,ie,N,F,$,K,q,Y,z);return}else if(ce&256){ke(j,ie,N,F,$,K,q,Y,z);return}}de&8?(le&16&&W(j,$,K),ie!==j&&u(N,ie)):le&16?de&16?ct(j,ie,N,F,$,K,q,Y,z):W(j,$,K,!0):(le&8&&u(N,""),de&16&&I(ie,N,F,$,K,q,Y,z))},ke=(_,b,N,F,$,K,q,Y,z)=>{_=_||Us,b=b||Us;const j=_.length,le=b.length,ie=Math.min(j,le);let ce;for(ce=0;ce<ie;ce++){const de=b[ce]=z?Zr(b[ce]):Nn(b[ce]);m(_[ce],de,N,null,$,K,q,Y,z)}j>le?W(_,$,K,!0,!1,ie):I(b,N,F,$,K,q,Y,z,ie)},ct=(_,b,N,F,$,K,q,Y,z)=>{let j=0;const le=b.length;let ie=_.length-1,ce=le-1;for(;j<=ie&&j<=ce;){const de=_[j],Ae=b[j]=z?Zr(b[j]):Nn(b[j]);if(Yn(de,Ae))m(de,Ae,N,null,$,K,q,Y,z);else break;j++}for(;j<=ie&&j<=ce;){const de=_[ie],Ae=b[ce]=z?Zr(b[ce]):Nn(b[ce]);if(Yn(de,Ae))m(de,Ae,N,null,$,K,q,Y,z);else break;ie--,ce--}if(j>ie){if(j<=ce){const de=ce+1,Ae=de<le?b[de].el:F;for(;j<=ce;)m(null,b[j]=z?Zr(b[j]):Nn(b[j]),N,Ae,$,K,q,Y,z),j++}}else if(j>ce)for(;j<=ie;)Pe(_[j],$,K,!0),j++;else{const de=j,Ae=j,Xe=new Map;for(j=Ae;j<=ce;j++){const fe=b[j]=z?Zr(b[j]):Nn(b[j]);fe.key!=null&&Xe.set(fe.key,j)}let Be,A=0;const R=ce-Ae+1;let D=!1,V=0;const re=new Array(R);for(j=0;j<R;j++)re[j]=0;for(j=de;j<=ie;j++){const fe=_[j];if(A>=R){Pe(fe,$,K,!0);continue}let Re;if(fe.key!=null)Re=Xe.get(fe.key);else for(Be=Ae;Be<=ce;Be++)if(re[Be-Ae]===0&&Yn(fe,b[Be])){Re=Be;break}Re===void 0?Pe(fe,$,K,!0):(re[Re-Ae]=j+1,Re>=V?V=Re:D=!0,m(fe,b[Re],N,null,$,K,q,Y,z),A++)}const pe=D?oA(re):Us;for(Be=pe.length-1,j=R-1;j>=0;j--){const fe=Ae+j,Re=b[fe],dt=fe+1<le?b[fe+1].el:F;re[j]===0?m(null,Re,N,dt,$,K,q,Y,z):D&&(Be<0||j!==pe[Be]?$e(Re,N,dt,2):Be--)}}},$e=(_,b,N,F,$=null)=>{const{el:K,type:q,transition:Y,children:z,shapeFlag:j}=_;if(j&6){$e(_.component.subTree,b,N,F);return}if(j&128){_.suspense.move(b,N,F);return}if(j&64){q.move(_,b,N,me);return}if(q===St){r(K,b,N);for(let ie=0;ie<z.length;ie++)$e(z[ie],b,N,F);r(_.anchor,b,N);return}if(q===Xi){E(_,b,N);return}if(F!==2&&j&1&&Y)if(F===0)Y.beforeEnter(K),r(K,b,N),Ht(()=>Y.enter(K),$);else{const{leave:ie,delayLeave:ce,afterLeave:de}=Y,Ae=()=>r(K,b,N),Xe=()=>{ie(K,()=>{Ae(),de&&de()})};ce?ce(K,Ae,Xe):Xe()}else r(K,b,N)},Pe=(_,b,N,F=!1,$=!1)=>{const{type:K,props:q,ref:Y,children:z,dynamicChildren:j,shapeFlag:le,patchFlag:ie,dirs:ce}=_;if(Y!=null&&Mc(Y,null,N,_,!0),le&256){b.ctx.deactivate(_);return}const de=le&1&&ce,Ae=!Yi(_);let Xe;if(Ae&&(Xe=q&&q.onVnodeBeforeUnmount)&&En(Xe,b,_),le&6)M(_.component,N,F);else{if(le&128){_.suspense.unmount(N,F);return}de&&ir(_,null,b,"beforeUnmount"),le&64?_.type.remove(_,b,N,$,me,F):j&&(K!==St||ie>0&&ie&64)?W(j,b,N,!1,!0):(K===St&&ie&384||!$&&le&16)&&W(z,b,N),F&&ot(_)}(Ae&&(Xe=q&&q.onVnodeUnmounted)||de)&&Ht(()=>{Xe&&En(Xe,b,_),de&&ir(_,null,b,"unmounted")},N)},ot=_=>{const{type:b,el:N,anchor:F,transition:$}=_;if(b===St){yt(N,F);return}if(b===Xi){w(_);return}const K=()=>{i(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:q,delayLeave:Y}=$,z=()=>q(N,K);Y?Y(_.el,K,z):z()}else K()},yt=(_,b)=>{let N;for(;_!==b;)N=f(_),i(_),_=N;i(b)},M=(_,b,N)=>{const{bum:F,scope:$,update:K,subTree:q,um:Y}=_;F&&Bs(F),$.stop(),K&&(K.active=!1,Pe(q,_,b,N)),Y&&Ht(Y,b),Ht(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},W=(_,b,N,F=!1,$=!1,K=0)=>{for(let q=K;q<_.length;q++)Pe(_[q],b,N,F,$)},H=_=>_.shapeFlag&6?H(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),ne=(_,b,N)=>{_==null?b._vnode&&Pe(b._vnode,null,null,!0):m(b._vnode||null,_,b,null,null,null,N),Tm(),Dc(),b._vnode=_},me={p:m,um:Pe,m:$e,r:ot,mt:O,mc:I,pc:se,pbc:P,n:H,o:t};let Ke,_e;return e&&([Ke,_e]=e(me)),{render:ne,hydrate:Ke,createApp:iA(ne,Ke)}}function Oi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xp(t,e,n=!1){const r=t.children,i=e.children;if(ae(r)&&ae(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Zr(i[s]),a.el=o.el),n||xp(o,a)),a.type===is&&(a.el=o.el)}}function oA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const aA=t=>t.__isTeleport,fa=t=>t&&(t.disabled||t.disabled===""),km=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Vf=(t,e)=>{const n=t&&t.to;return vt(n)?e?e(n):null:n},lA={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=fa(e.props);let{shapeFlag:g,children:E,dynamicChildren:w}=e;if(t==null){const T=e.el=m(""),S=e.anchor=m("");d(T,n,r),d(S,n,r);const x=e.target=Vf(e.props,p),I=e.targetAnchor=m("");x&&(d(I,x),o=o||km(x));const C=(P,L)=>{g&16&&u(E,P,L,i,s,o,a,l)};v?C(n,S):x&&C(x,I)}else{e.el=t.el;const T=e.anchor=t.anchor,S=e.target=t.target,x=e.targetAnchor=t.targetAnchor,I=fa(t.props),C=I?n:S,P=I?T:x;if(o=o||km(S),w?(f(t.dynamicChildren,w,C,i,s,o,a),xp(t,e,!0)):l||h(t,e,C,P,i,s,o,a,!1),v)I||Kl(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Vf(e.props,p);L&&Kl(e,L,null,c,0)}else I&&Kl(e,S,x,c,1)}$0(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&s(u),(o||!fa(f))&&(s(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];i(p,e,n,!0,!!p.dynamicChildren)}},move:Kl,hydrate:cA};function Kl(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||fa(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&r(a,e,n)}function cA(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Vf(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(fa(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}$0(e)}return e.anchor&&o(e.anchor)}const uA=lA;function $0(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const St=Symbol(void 0),is=Symbol(void 0),sn=Symbol(void 0),Xi=Symbol(void 0),da=[];let bn=null;function qe(t=!1){da.push(bn=t?null:[])}function B0(){da.pop(),bn=da[da.length-1]||null}let ss=1;function Hf(t){ss+=t}function j0(t){return t.dynamicChildren=ss>0?bn||Us:null,B0(),ss>0&&bn&&bn.push(t),t}function Ft(t,e,n,r,i,s){return j0(nt(t,e,n,r,i,s,!0))}function jn(t,e,n,r,i){return j0(Le(t,e,n,r,i,!0))}function yi(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}function hA(t){}const Hu="__vInternal",V0=({key:t})=>t??null,gc=({ref:t,ref_key:e,ref_for:n})=>t!=null?vt(t)||_t(t)||Te(t)?{i:zt,r:t,k:e,f:!!n}:t:null;function nt(t,e=null,n=null,r=0,i=null,s=t===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&V0(e),ref:e&&gc(e),scopeId:Fu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:zt};return a?(Op(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),ss>0&&!o&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const Le=fA;function fA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===A0)&&(t=sn),yi(t)){const a=gr(t,e,!0);return n&&Op(a,n),ss>0&&!s&&bn&&(a.shapeFlag&6?bn[bn.indexOf(t)]=a:bn.push(a)),a.patchFlag|=-2,a}if(_A(t)&&(t=t.__vccOpts),e){e=H0(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Eo(a)),st(l)&&(pp(l)&&!ae(l)&&(l=At({},l)),e.style=yo(l))}const o=vt(t)?1:f0(t)?128:aA(t)?64:st(t)?4:Te(t)?2:0;return nt(t,e,n,r,i,o,s,!0)}function H0(t){return t?pp(t)||Hu in t?At({},t):t:null}function gr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?W0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&V0(a),ref:e&&e.ref?n&&i?ae(i)?i.concat(gc(e)):[i,gc(e)]:gc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ji(t=" ",e=0){return Le(is,null,t,e)}function dA(t,e){const n=Le(Xi,null,t);return n.staticCount=e,n}function K0(t="",e=!1){return e?(qe(),jn(sn,null,t)):Le(sn,null,t)}function Nn(t){return t==null||typeof t=="boolean"?Le(sn):ae(t)?Le(St,null,t.slice()):typeof t=="object"?Zr(t):Le(is,null,String(t))}function Zr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function Op(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Op(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Hu in e)?e._ctx=zt:i===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),r&64?(n=16,e=[ji(e)]):n=8);t.children=e,t.shapeFlag|=n}function W0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Eo([e.class,r.class]));else if(i==="style")e.style=yo([e.style,r.style]);else if(rl(i)){const s=e[i],o=r[i];o&&s!==o&&!(ae(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function En(t,e,n,r=null){Pn(t,e,7,[n,r])}const pA=M0();let gA=0;function G0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||pA,s={uid:gA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N0(r,i),emitsOptions:h0(r,i),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:r.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=EC.bind(null,s),t.ce&&t.ce(s),s}let Ct=null;const br=()=>Ct||zt,Ei=t=>{Ct=t,t.scope.on()},hi=()=>{Ct&&Ct.scope.off(),Ct=null};function z0(t){return t.vnode.shapeFlag&4}let to=!1;function Y0(t,e=!1){to=e;const{props:n,children:r}=t.vnode,i=z0(t);qC(t,n,i,e),tA(t,r);const s=i?mA(t,e):void 0;return to=!1,s}function mA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,Uf));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Q0(t):null;Ei(t),wo();const s=kr(r,t,0,[t.props,i]);if(bo(),hi(),ap(s)){if(s.then(hi,hi),e)return s.then(o=>{Kf(t,o,e)}).catch(o=>{vs(o,t,0)});t.asyncDep=s}else Kf(t,s,e)}else X0(t,e)}function Kf(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:st(e)&&(t.setupState=vp(e)),X0(t,n)}let Lc,Wf;function vA(t){Lc=t,Wf=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,GC))}}const yA=()=>!Lc;function X0(t,e,n){const r=t.type;if(!t.render){if(!e&&Lc&&!r.render){const i=r.template||Ap(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=At(At({isCustomElement:s,delimiters:a},o),l);r.render=Lc(i,c)}}t.render=r.render||qn,Wf&&Wf(t)}Ei(t),wo(),zC(t),bo(),hi()}function EA(t){return new Proxy(t.attrs,{get(e,n){return An(t,"get","$attrs"),e[n]}})}function Q0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=EA(t))},slots:t.slots,emit:t.emit,expose:e}}function Ku(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vp(ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ha)return ha[n](t)},has(e,n){return n in e||n in ha}}))}function Gf(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function _A(t){return Te(t)&&"__vccOpts"in t}const _n=(t,e)=>fC(t,e,to);function wA(){return null}function bA(){return null}function TA(t){}function SA(t,e){return null}function IA(){return J0().slots}function CA(){return J0().attrs}function J0(){const t=br();return t.setupContext||(t.setupContext=Q0(t))}function AA(t,e){const n=ae(t)?t.reduce((r,i)=>(r[i]={},r),{}):t;for(const r in e){const i=n[r];i?ae(i)||Te(i)?n[r]={type:i,default:e[r]}:i.default=e[r]:i===null&&(n[r]={default:e[r]})}return n}function RA(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function xA(t){const e=br();let n=t();return hi(),ap(n)&&(n=n.catch(r=>{throw Ei(e),r})),[n,()=>Ei(e)]}function Wu(t,e,n){const r=arguments.length;return r===2?st(e)&&!ae(e)?yi(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yi(n)&&(n=[n]),Le(t,e,n))}const q0=Symbol(""),Z0=()=>In(q0);function OA(){}function NA(t,e,n,r){const i=n[r];if(i&&e_(i,t))return i;const s=e();return s.memo=t.slice(),n[r]=s}function e_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(Zs(n[r],e[r]))return!1;return ss>0&&bn&&bn.push(t),!0}const t_="3.2.47",PA={createComponentInstance:G0,setupComponent:Y0,renderComponentRoot:pc,setCurrentRenderingInstance:Fa,isVNode:yi,normalizeVNode:Nn},DA=PA,kA=null,MA=null,LA="http://www.w3.org/2000/svg",$i=typeof document<"u"?document:null,Mm=$i&&$i.createElement("template"),FA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?$i.createElementNS(LA,t):$i.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>$i.createTextNode(t),createComment:t=>$i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Mm.innerHTML=r?`<svg>${t}</svg>`:t;const a=Mm.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function UA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $A(t,e,n){const r=t.style,i=vt(n);if(n&&!i){if(e&&!vt(e))for(const s in e)n[s]==null&&zf(r,s,"");for(const s in n)zf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Lm=/\s*!important$/;function zf(t,e,n){if(ae(n))n.forEach(r=>zf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BA(t,e);Lm.test(n)?t.setProperty(Un(r),n.replace(Lm,""),"important"):t[r]=n}}const Fm=["Webkit","Moz","ms"],Bh={};function BA(t,e){const n=Bh[e];if(n)return n;let r=Sn(e);if(r!=="filter"&&r in t)return Bh[e]=r;r=il(r);for(let i=0;i<Fm.length;i++){const s=Fm[i]+r;if(s in t)return Bh[e]=s}return e}const Um="http://www.w3.org/1999/xlink";function jA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Um,e.slice(6,e.length)):t.setAttributeNS(Um,e,n);else{const s=yI(e);n==null||s&&!UE(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function VA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=UE(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rr(t,e,n,r){t.addEventListener(e,n,r)}function HA(t,e,n,r){t.removeEventListener(e,n,r)}function KA(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=WA(e);if(r){const c=s[e]=YA(r,i);Rr(t,a,c,l)}else o&&(HA(t,a,o,l),s[e]=void 0)}}const $m=/(?:Once|Passive|Capture)$/;function WA(t){let e;if($m.test(t)){e={};let r;for(;r=t.match($m);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Un(t.slice(2)),e]}let jh=0;const GA=Promise.resolve(),zA=()=>jh||(GA.then(()=>jh=0),jh=Date.now());function YA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pn(XA(r,n.value),e,5,[r])};return n.value=t,n.attached=zA(),n}function XA(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Bm=/^on[a-z]/,QA=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?UA(t,r,i):e==="style"?$A(t,n,r):rl(e)?sp(e)||KA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JA(t,e,r,i))?VA(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jA(t,e,r,i))};function JA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bm.test(e)&&Te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bm.test(e)&&vt(n)?!1:e in t}function n_(t,e){const n=gn(t);class r extends Gu{constructor(s){super(n,s,e)}}return r.def=n,r}const qA=t=>n_(t,v_),ZA=typeof HTMLElement<"u"?HTMLElement:class{};class Gu extends ZA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,To(()=>{this._connected||(Qf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(r,i=!1)=>{const{props:s,styles:o}=r;let a;if(s&&!ae(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Nc(this._props[l])),(a||(a=Object.create(null)))[Sn(l)]=!0)}this._numberProps=a,i&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=ae(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(Sn))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(s){this._setProp(i,s)}})}_setAttr(e){let n=this.getAttribute(e);const r=Sn(e);this._numberProps&&this._numberProps[r]&&(n=Nc(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Un(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Un(e),n+""):n||this.removeAttribute(Un(e))))}_update(){Qf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Le(this._def,At({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,{detail:o}))};n.emit=(s,...o)=>{r(s,o),Un(s)!==s&&r(Un(s),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Gu){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function e1(t="$style"){{const e=br();if(!e)return rt;const n=e.type.__cssModules;if(!n)return rt;const r=n[t];return r||rt}}function t1(t){const e=br();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Xf(s,i))},r=()=>{const i=t(e.proxy);Yf(e.subTree,i),n(i)};p0(r),So(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Vu(()=>i.disconnect())})}function Yf(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Yf(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Xf(t.el,e);else if(t.type===St)t.children.forEach(n=>Yf(n,e));else if(t.type===Xi){let{el:n,anchor:r}=t;for(;n&&(Xf(n,e),n!==r);)n=n.nextSibling}}function Xf(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const Yr="transition",Lo="animation",Np=(t,{slots:e})=>Wu(Sp,i_(t),e);Np.displayName="Transition";const r_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},n1=Np.props=At({},Sp.props,r_),Ni=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},jm=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function i_(t){const e={};for(const U in t)U in r_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=r1(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:w,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:x=g,onAppearCancelled:I=E}=e,C=(U,k,O)=>{Jr(U,k?u:a),Jr(U,k?c:o),O&&O()},P=(U,k)=>{U._isLeaving=!1,Jr(U,h),Jr(U,d),Jr(U,f),k&&k()},L=U=>(k,O)=>{const J=U?x:g,B=()=>C(k,U,O);Ni(J,[k,B]),Vm(()=>{Jr(k,U?l:s),Cr(k,U?u:a),jm(J)||Hm(k,r,m,B)})};return At(e,{onBeforeEnter(U){Ni(v,[U]),Cr(U,s),Cr(U,o)},onBeforeAppear(U){Ni(S,[U]),Cr(U,l),Cr(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const O=()=>P(U,k);Cr(U,h),o_(),Cr(U,f),Vm(()=>{U._isLeaving&&(Jr(U,h),Cr(U,d),jm(w)||Hm(U,r,y,O))}),Ni(w,[U,O])},onEnterCancelled(U){C(U,!1),Ni(E,[U])},onAppearCancelled(U){C(U,!0),Ni(I,[U])},onLeaveCancelled(U){P(U),Ni(T,[U])}})}function r1(t){if(t==null)return null;if(st(t))return[Vh(t.enter),Vh(t.leave)];{const e=Vh(t);return[e,e]}}function Vh(t){return Nc(t)}function Cr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Jr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let i1=0;function Hm(t,e,n,r){const i=t._endId=++i1,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=s_(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),s()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function s_(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${Yr}Delay`),s=r(`${Yr}Duration`),o=Km(i,s),a=r(`${Lo}Delay`),l=r(`${Lo}Duration`),c=Km(a,l);let u=null,h=0,f=0;e===Yr?o>0&&(u=Yr,h=o,f=s.length):e===Lo?c>0&&(u=Lo,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Yr:Lo:null,f=u?u===Yr?s.length:l.length:0);const d=u===Yr&&/\b(transform|all)(,|$)/.test(r(`${Yr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Km(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Wm(n)+Wm(t[r])))}function Wm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function o_(){return document.body.offsetHeight}const a_=new WeakMap,l_=new WeakMap,c_={name:"TransitionGroup",props:At({},n1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=br(),r=Tp();let i,s;return Bu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!u1(i[0].el,n.vnode.el,o))return;i.forEach(a1),i.forEach(l1);const a=i.filter(c1);o_(),a.forEach(l=>{const c=l.el,u=c.style;Cr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Jr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=De(t),a=i_(o);let l=o.tag||St;i=s,s=e.default?Uu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&rs(u,eo(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];rs(u,eo(u,a,r,n)),a_.set(u,u.el.getBoundingClientRect())}return Le(l,null,s)}}},s1=t=>delete t.mode;c_.props;const o1=c_;function a1(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function l1(t){l_.set(t,t.el.getBoundingClientRect())}function c1(t){const e=a_.get(t),n=l_.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function u1(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=s_(r);return i.removeChild(r),s}const _i=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Bs(e,n):e};function h1(t){t.target.composing=!0}function Gm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fc={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=_i(i);const s=r||i.props&&i.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Oc(a)),t._assign(a)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",h1),Rr(t,"compositionend",Gm),Rr(t,"change",Gm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=_i(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Oc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Pp={deep:!0,created(t,e,n){t._assign=_i(n),Rr(t,"change",()=>{const r=t._modelValue,i=no(t),s=t.checked,o=t._assign;if(ae(r)){const a=Au(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(gs(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(h_(t,s))})},mounted:zm,beforeUpdate(t,e,n){t._assign=_i(n),zm(t,e,n)}};function zm(t,{value:e,oldValue:n},r){t._modelValue=e,ae(e)?t.checked=Au(e,r.props.value)>-1:gs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=mi(e,h_(t,!0)))}const Dp={created(t,{value:e},n){t.checked=mi(e,n.props.value),t._assign=_i(n),Rr(t,"change",()=>{t._assign(no(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=_i(r),e!==n&&(t.checked=mi(e,r.props.value))}},u_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=gs(e);Rr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Oc(no(o)):no(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=_i(r)},mounted(t,{value:e}){Ym(t,e)},beforeUpdate(t,e,n){t._assign=_i(n)},updated(t,{value:e}){Ym(t,e)}};function Ym(t,e){const n=t.multiple;if(!(n&&!ae(e)&&!gs(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=no(s);if(n)ae(e)?s.selected=Au(e,o)>-1:s.selected=e.has(o);else if(mi(no(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function no(t){return"_value"in t?t._value:t.value}function h_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const f_={created(t,e,n){Wl(t,e,n,null,"created")},mounted(t,e,n){Wl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Wl(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Wl(t,e,n,r,"updated")}};function d_(t,e){switch(t){case"SELECT":return u_;case"TEXTAREA":return Fc;default:switch(e){case"checkbox":return Pp;case"radio":return Dp;default:return Fc}}}function Wl(t,e,n,r,i){const o=d_(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}function f1(){Fc.getSSRProps=({value:t})=>({value:t}),Dp.getSSRProps=({value:t},e)=>{if(e.props&&mi(e.props.value,t))return{checked:!0}},Pp.getSSRProps=({value:t},e)=>{if(ae(t)){if(e.props&&Au(t,e.props.value)>-1)return{checked:!0}}else if(gs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},f_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=d_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const d1=["ctrl","shift","alt","meta"],p1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>d1.some(n=>t[`${n}Key`]&&!e.includes(n))},g1=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=p1[e[i]];if(s&&s(n,e))return}return t(n,...r)},m1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},v1=(t,e)=>n=>{if(!("key"in n))return;const r=Un(n.key);if(e.some(i=>i===r||m1[i]===r))return t(n)},Uc={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Fo(t,!0),r.enter(t)):r.leave(t,()=>{Fo(t,!1)}):Fo(t,e))},beforeUnmount(t,{value:e}){Fo(t,e)}};function Fo(t,e){t.style.display=e?t._vod:"none"}function y1(){Uc.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const p_=At({patchProp:QA},FA);let pa,Xm=!1;function g_(){return pa||(pa=L0(p_))}function m_(){return pa=Xm?pa:F0(p_),Xm=!0,pa}const Qf=(...t)=>{g_().render(...t)},v_=(...t)=>{m_().hydrate(...t)},y_=(...t)=>{const e=g_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=E_(r);if(!i)return;const s=e._component;!Te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},E1=(...t)=>{const e=m_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=E_(r);if(i)return n(i,!0,i instanceof SVGElement)},e};function E_(t){return vt(t)?document.querySelector(t):t}let Qm=!1;const _1=()=>{Qm||(Qm=!0,f1(),y1())},w1=()=>{},b1=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Sp,Comment:sn,EffectScope:cp,Fragment:St,KeepAlive:$C,ReactiveEffect:sl,Static:Xi,Suspense:RC,Teleport:uA,Text:is,Transition:Np,TransitionGroup:o1,VueElement:Gu,assertNumber:pC,callWithAsyncErrorHandling:Pn,callWithErrorHandling:kr,camelize:Sn,capitalize:il,cloneVNode:gr,compatUtils:MA,compile:w1,computed:_n,createApp:y_,createBlock:jn,createCommentVNode:K0,createElementBlock:Ft,createElementVNode:nt,createHydrationRenderer:F0,createPropsRestProxy:RA,createRenderer:L0,createSSRApp:E1,createSlots:KC,createStaticVNode:dA,createTextVNode:ji,createVNode:Le,customRef:cC,defineAsyncComponent:FC,defineComponent:gn,defineCustomElement:n_,defineEmits:bA,defineExpose:TA,defineProps:wA,defineSSRCustomElement:qA,get devtools(){return Rs},effect:OI,effectScope:xu,getCurrentInstance:br,getCurrentScope:up,getTransitionRawChildren:Uu,guardReactiveProps:H0,h:Wu,handleError:vs,hydrate:v_,initCustomFormatter:OA,initDirectivesForSSR:_1,inject:In,isMemoSame:e_,isProxy:pp,isReactive:ur,isReadonly:ts,isRef:_t,isRuntimeOnly:yA,isShallow:Da,isVNode:yi,markRaw:ns,mergeDefaults:AA,mergeProps:W0,nextTick:To,normalizeClass:Eo,normalizeProps:mI,normalizeStyle:yo,onActivated:v0,onBeforeMount:_0,onBeforeUnmount:ju,onBeforeUpdate:w0,onDeactivated:y0,onErrorCaptured:I0,onMounted:So,onRenderTracked:S0,onRenderTriggered:T0,onScopeDispose:HE,onServerPrefetch:b0,onUnmounted:Vu,onUpdated:Bu,openBlock:qe,popScopeId:wC,provide:la,proxyRefs:vp,pushScopeId:_C,queuePostFlushCb:_p,reactive:ms,readonly:dp,ref:hr,registerRuntimeCompiler:vA,render:Qf,renderList:ca,renderSlot:ua,resolveComponent:C0,resolveDirective:HC,resolveDynamicComponent:VC,resolveFilter:kA,resolveTransitionHooks:eo,setBlockTracking:Hf,setDevtoolsHook:u0,setTransitionHooks:rs,shallowReactive:n0,shallowReadonly:iC,shallowRef:r0,ssrContextKey:q0,ssrUtils:DA,stop:NI,toDisplayString:dn,toHandlerKey:aa,toHandlers:WC,toRaw:De,toRef:yp,toRefs:s0,transformVNodeArgs:hA,triggerRef:oC,unref:lt,useAttrs:CA,useCssModule:e1,useCssVars:t1,useSSRContext:Z0,useSlots:IA,useTransitionState:Tp,vModelCheckbox:Pp,vModelDynamic:f_,vModelRadio:Dp,vModelSelect:u_,vModelText:Fc,vShow:Uc,version:t_,warn:dC,watch:zi,watchEffect:DC,watchPostEffect:p0,watchSyncEffect:kC,withAsyncContext:xA,withCtx:Zn,withDefaults:SA,withDirectives:Lf,withKeys:v1,withMemo:NA,withModifiers:g1,withScopeId:bC},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(t,e){if(!t)throw Io(e)},Io=function(t){return new Error("Firebase Database ("+__.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},T1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new S1;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b_=function(t){const e=w_(t);return zu.encodeByteArray(e,!0)},$c=function(t){return b_(t).replace(/\./g,"")},Bc=function(t){try{return zu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){return T_(void 0,t)}function T_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!C1(n)||(t[n]=T_(t[n],e[n]));return t}function C1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=()=>A1().__FIREBASE_DEFAULTS__,x1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bc(t[1]);return e&&JSON.parse(e)},kp=()=>{try{return R1()||x1()||O1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S_=t=>{var e,n;return(n=(e=kp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},N1=t=>{const e=S_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P1=()=>{var t;return(t=kp())===null||t===void 0?void 0:t.config},I_=t=>{var e;return(e=kp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function k1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M1(){const t=cn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A_(){return __.NODE_ADMIN===!0}function R_(){try{return typeof indexedDB=="object"}catch{return!1}}function L1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=F1,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?U1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tr(i,a,r)}}function U1(t,e){return t.replace($1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return JSON.parse(t)}function Gt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ba(Bc(s[0])||""),n=Ba(Bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},B1=function(t){const e=x_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},j1=function(t){const e=x_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ro(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jm(s)&&Jm(o)){if(!Vc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function H1(t,e){const n=new K1(t,e);return n.subscribe.bind(n)}class K1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");W1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hh(){}function G1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,ee(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q1(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:X1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X1(t){return t===Mi?void 0:t}function Q1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const q1={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Z1=ze.INFO,eR={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},tR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Z1,this._logHandler=tR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const nR=(t,e)=>e.some(n=>t instanceof n);let qm,Zm;function rR(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iR(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,qf=new WeakMap,N_=new WeakMap,Kh=new WeakMap,Lp=new WeakMap;function sR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O_.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function oR(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Zf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aR(t){Zf=t(Zf)}function lR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return N_.set(r,e.sort?e.sort():[e]),fi(r)}:iR().includes(t)?function(...e){return t.apply(Wh(this),e),fi(O_.get(this))}:function(...e){return fi(t.apply(Wh(this),e))}}function cR(t){return typeof t=="function"?lR(t):(t instanceof IDBTransaction&&oR(t),nR(t,rR())?new Proxy(t,Zf):t)}function fi(t){if(t instanceof IDBRequest)return sR(t);if(Kh.has(t))return Kh.get(t);const e=cR(t);return e!==t&&(Kh.set(t,e),Lp.set(e,t)),e}const Wh=t=>Lp.get(t);function uR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fi(o.result),l.oldVersion,l.newVersion,fi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hR=["get","getKey","getAll","getAllKeys","count"],fR=["put","add","delete","clear"],Gh=new Map;function ev(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gh.set(e,s),s}aR(t=>({...t,get:(e,n,r)=>ev(e,n)||t.get(e,n,r),has:(e,n)=>!!ev(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",tv="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new ll("@firebase/app"),gR="@firebase/app-compat",mR="@firebase/analytics-compat",vR="@firebase/analytics",yR="@firebase/app-check-compat",ER="@firebase/app-check",_R="@firebase/auth",wR="@firebase/auth-compat",bR="@firebase/database",TR="@firebase/database-compat",SR="@firebase/functions",IR="@firebase/functions-compat",CR="@firebase/installations",AR="@firebase/installations-compat",RR="@firebase/messaging",xR="@firebase/messaging-compat",OR="@firebase/performance",NR="@firebase/performance-compat",PR="@firebase/remote-config",DR="@firebase/remote-config-compat",kR="@firebase/storage",MR="@firebase/storage-compat",LR="@firebase/firestore",FR="@firebase/firestore-compat",UR="firebase",$R="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="[DEFAULT]",BR={[ed]:"fire-core",[gR]:"fire-core-compat",[vR]:"fire-analytics",[mR]:"fire-analytics-compat",[ER]:"fire-app-check",[yR]:"fire-app-check-compat",[_R]:"fire-auth",[wR]:"fire-auth-compat",[bR]:"fire-rtdb",[TR]:"fire-rtdb-compat",[SR]:"fire-fn",[IR]:"fire-fn-compat",[CR]:"fire-iid",[AR]:"fire-iid-compat",[RR]:"fire-fcm",[xR]:"fire-fcm-compat",[OR]:"fire-perf",[NR]:"fire-perf-compat",[PR]:"fire-rc",[DR]:"fire-rc-compat",[kR]:"fire-gcs",[MR]:"fire-gcs-compat",[LR]:"fire-fst",[FR]:"fire-fst-compat","fire-js":"fire-js",[UR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map,nd=new Map;function jR(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(nd.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;nd.set(e,t);for(const n of Hc.values())jR(n,t);return!0}function Fp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},di=new Co("app","Firebase",VR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=$R;function P_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:td,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=P1()),!n)throw di.create("no-options");const s=Hc.get(i);if(s){if(Vc(n,s.options)&&Vc(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new J1(i);for(const l of nd.values())o.addComponent(l);const a=new HR(n,r,o);return Hc.set(i,a),a}function Up(t=td){const e=Hc.get(t);if(!e&&t===td)return P_();if(!e)throw di.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let i=(r=BR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}mr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="firebase-heartbeat-database",WR=1,ja="firebase-heartbeat-store";let zh=null;function D_(){return zh||(zh=uR(KR,WR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ja)}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),zh}async function GR(t){try{return(await D_()).transaction(ja).objectStore(ja).get(k_(t))}catch(e){if(e instanceof Tr)os.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function nv(t,e){try{const r=(await D_()).transaction(ja,"readwrite");return await r.objectStore(ja).put(e,k_(t)),r.done}catch(n){if(n instanceof Tr)os.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function k_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=1024,YR=30*24*60*60*1e3;class XR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rv(),{heartbeatsToSend:n,unsentEntries:r}=QR(this._heartbeatsCache.heartbeats),i=$c(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rv(){return new Date().toISOString().substring(0,10)}function QR(t,e=zR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R_()?L1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iv(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){mr(new tr("platform-logger",e=>new dR(e),"PRIVATE")),mr(new tr("heartbeat",e=>new XR(e),"PRIVATE")),Dn(ed,tv,t),Dn(ed,tv,"esm2017"),Dn("fire-js","")}qR("");function $p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZR=M_,L_=new Co("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new ll("@firebase/auth");function ex(t,...e){Kc.logLevel<=ze.WARN&&Kc.warn(`Auth (${Ci}): ${t}`,...e)}function mc(t,...e){Kc.logLevel<=ze.ERROR&&Kc.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,...e){throw Bp(t,...e)}function fr(t,...e){return Bp(t,...e)}function tx(t,e,n){const r=Object.assign(Object.assign({},ZR()),{[e]:n});return new Co("auth","Firebase",r).create(e,{appName:t.name})}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function be(t,e,...n){if(!t)throw Bp(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function $r(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nx(){return sv()==="http:"||sv()==="https:"}function sv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nx()||k1()||"connection"in navigator)?navigator.onLine:!0}function ix(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,$r(n>e,"Short delay should be less than long delay!"),this.isMobile=Mp()||C_()}get(){return rx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e){$r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new cl(3e4,6e4);function U_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ul(t,e,n,r,i={}){return $_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),F_.fetch()(B_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sx),e);try{const i=new lx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tx(t,u,c);Ur(t,u)}}catch(i){if(i instanceof Tr)throw i;Ur(t,"network-request-failed",{message:String(i)})}}async function ax(t,e,n,r,i={}){const s=await ul(t,e,n,r,i);return"mfaPendingCredential"in s&&Ur(t,"multi-factor-auth-required",{_serverResponse:s}),s}function B_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jp(t.config,i):`${t.config.apiScheme}://${i}`}class lx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fr(this.auth,"network-request-failed")),ox.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){return ul(t,"POST","/v1/accounts:delete",e)}async function ux(t,e){return ul(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hx(t,e=!1){const n=Ii(t),r=await n.getIdToken(e),i=Vp(r);be(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ga(Yh(i.auth_time)),issuedAtTime:ga(Yh(i.iat)),expirationTime:ga(Yh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yh(t){return Number(t)*1e3}function Vp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bc(n);return i?JSON.parse(i):(mc("Failed to decode base64 JWT payload"),null)}catch(i){return mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fx(t){const e=Vp(t);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tr&&dx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Va(t,ux(n,{idToken:r}));be(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vx(s.providerUserInfo):[],a=mx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new j_(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gx(t){const e=Ii(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vx(t){return t.map(e=>{var{providerId:n}=e,r=$p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(t,e){const n=await $_(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=B_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return be(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ha;return r&&(be(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(be(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(be(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){be(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new px(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new j_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hx(this,e)}reload(){return gx(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Va(this,cx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:w,isAnonymous:T,providerData:S,stsTokenManager:x}=n;be(E&&x,e,"internal-error");const I=Ha.fromJSON(this.name,x);be(typeof E=="string",e,"internal-error"),Xr(h,e.name),Xr(f,e.name),be(typeof w=="boolean",e,"internal-error"),be(typeof T=="boolean",e,"internal-error"),Xr(d,e.name),Xr(p,e.name),Xr(m,e.name),Xr(y,e.name),Xr(v,e.name),Xr(g,e.name);const C=new Qi({uid:E,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:I,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(C.providerData=S.map(P=>Object.assign({},P))),y&&(C._redirectEventId=y),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function Or(t){$r(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?($r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V_.type="NONE";const av=V_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vc(this.userKey,i.apiKey,s),this.fullPersistenceKey=vc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Or(av),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Or(av);const o=vc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Qi._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(Y_(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(G_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H_(t=cn()){return/firefox\//i.test(t)}function Hp(t=cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=cn()){return/crios\//i.test(t)}function W_(t=cn()){return/iemobile/i.test(t)}function G_(t=cn()){return/android/i.test(t)}function z_(t=cn()){return/blackberry/i.test(t)}function Y_(t=cn()){return/webos/i.test(t)}function Xu(t=cn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ex(t=cn()){var e;return Xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _x(){return M1()&&document.documentMode===10}function X_(t=cn()){return Xu(t)||G_(t)||Y_(t)||z_(t)||/windows phone/i.test(t)||W_(t)}function wx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e=[]){let n;switch(t){case"Browser":n=lv(cn());break;case"Worker":n=`${lv(cn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}async function J_(t,e){return ul(t,"GET","/v2/recaptchaConfig",U_(t,e))}function cv(t){return t!==void 0&&t.enterprise!==void 0}class q_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Z_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bx().appendChild(r)})}function Tx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sx="https://www.google.com/recaptcha/enterprise.js?render=",Ix="recaptcha-enterprise",Cx="NO_RECAPTCHA";class Ax{constructor(e){this.type=Ix,this.auth=Qu(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{J_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new q_(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Cx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Z_(Sx+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new Rx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ix()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ii(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}async initializeRecaptchaConfig(){const e=await J_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new q_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ax(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return be(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ex(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qu(t){return Ii(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=H1(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){const n=Fp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vc(s,e??{}))return i;Ur(i,"already-initialized")}return n.initialize({options:e})}function Nx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Px(t,e,n){const r=Qu(t);be(r._canInitEmulator,r,"emulator-config-failed"),be(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ew(e),{host:o,port:a}=Dx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kx()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dx(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hv(o)}}}function hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e){return ax(t,"POST","/v1/accounts:signInWithIdp",U_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="http://localhost";class as extends tw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ur("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:Mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends hl{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends hl{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends hl{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=fv(r);return new io({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fv(r);return new io({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gc(e,n,r,i)}}function rw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,s,e,r):s})}async function Lx(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return io._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Va(t,rw(r,i,e,t),n);be(s.idToken,r,"internal-error");const o=Vp(s.idToken);be(o,r,"internal-error");const{sub:a}=o;return be(t.uid===a,r,"user-mismatch"),io._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ur(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,e,n=!1){const r="signIn",i=await rw(t,r,e),s=await io._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function iw(t,e,n,r){return Ii(t).onIdTokenChanged(e,n,r)}function $x(t,e,n){return Ii(t).beforeAuthStateChanged(e,n)}const zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){const t=cn();return Hp(t)||Xu(t)}const jx=1e3,Vx=10;class ow extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bx()&&wx(),this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_x()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ow.type="LOCAL";const Hx=ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aw.type="SESSION";const lw=aw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Kx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Kp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function Gx(t){dr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function zx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xx(){return cw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="firebaseLocalStorageDb",Qx=1,Yc="firebaseLocalStorage",hw="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qu(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function Jx(){const t=indexedDB.deleteDatabase(uw);return new fl(t).toPromise()}function id(){const t=indexedDB.open(uw,Qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yc,{keyPath:hw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await Jx(),e(await id()))})})}async function dv(t,e,n){const r=qu(t,!0).put({[hw]:e,value:n});return new fl(r).toPromise()}async function qx(t,e){const n=qu(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function pv(t,e){const n=qu(t,!0).delete(e);return new fl(n).toPromise()}const Zx=800,eO=3;class fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(Xx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zx(),!this.activeServiceWorker)return;this.sender=new Wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await dv(e,zc,"1"),await pv(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qu(i,!1).getAll();return new fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fw.type="LOCAL";const tO=fw;new cl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t,e){return e?Or(e):(be(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends tw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rO(t){return Ux(t.auth,new Wp(t),t.bypassAuthState)}function iO(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),Fx(n,new Wp(t),t.bypassAuthState)}async function sO(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),Lx(n,new Wp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rO;case"linkViaPopup":case"linkViaRedirect":return sO;case"reauthViaPopup":case"reauthViaRedirect":return iO;default:Ur(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new cl(2e3,1e4);class Ds extends dw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oO.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO="pendingRedirect",yc=new Map;class lO extends dw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yc.get(this.auth._key());if(!e){try{const r=await cO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yc.set(this.auth._key(),e)}return this.bypassAuthState||yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cO(t,e){const n=fO(e),r=hO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uO(t,e){yc.set(t._key(),e)}function hO(t){return Or(t._redirectPersistence)}function fO(t){return vc(aO,t.config.apiKey,t.name)}async function dO(t,e,n=!1){const r=Qu(t),i=nO(r,e),o=await new lO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=10*60*1e3;class gO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pO&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e={}){return ul(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EO=/^https?/;async function _O(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vO(t);for(const n of e)try{if(wO(n))return}catch{}Ur(t,"unauthorized-domain")}function wO(t){const e=rd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EO.test(n))return!1;if(yO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=new cl(3e4,6e4);function mv(){const t=dr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TO(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(fr(t,"network-request-failed"))},timeout:bO.get()})}if(!((i=(r=dr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dr().gapi)===null||s===void 0)&&s.load)o();else{const a=Tx("iframefcb");return dr()[a]=()=>{gapi.load?o():n(fr(t,"network-request-failed"))},Z_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function SO(t){return Ec=Ec||TO(t),Ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new cl(5e3,15e3),CO="__/auth/iframe",AO="emulator/auth/iframe",RO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OO(t){const e=t.config;be(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,AO):`https://${t.config.authDomain}/${CO}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=xO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function NO(t){const e=await SO(t),n=dr().gapi;return be(n,t,"internal-error"),e.open({where:document.body,url:OO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fr(t,"network-request-failed"),a=dr().setTimeout(()=>{s(o)},IO.get());function l(){dr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DO=500,kO=600,MO="_blank",LO="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FO(t,e,n,r=DO,i=kO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=cn().toLowerCase();n&&(a=K_(c)?MO:n),H_(c)&&(e=e||LO,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(Ex(c)&&a!=="_self")return UO(e||"",a),new vv(null);const h=window.open(e||"",a,u);be(h,t,"popup-blocked");try{h.focus()}catch{}return new vv(h)}function UO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="__/auth/handler",BO="emulator/auth/handler",jO=encodeURIComponent("fac");async function yv(t,e,n,r,i,s){be(t.config.authDomain,t,"auth-domain-config-required"),be(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof nw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof hl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${jO}=${encodeURIComponent(l)}`:"";return`${VO(t)}?${Ao(a).slice(1)}${c}`}function VO({config:t}){return t.emulator?jp(t,BO):`https://${t.authDomain}/${$O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="webStorageSupport";class HO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=dO,this._overrideRedirectResult=uO}async _openPopup(e,n,r,i){var s;$r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yv(e,n,r,rd(),i);return FO(e,o,Kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yv(e,n,r,rd(),i);return Gx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NO(e),r=new gO(e);return n.register("authEvent",i=>(be(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xh,{type:Xh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xh];o!==void 0&&n(!!o),Ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_O(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||Hp()||Xu()}}const KO=HO;var Ev="@firebase/auth",_v="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zO(t){mr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),be(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(t)},c=new xx(r,i,s,l);return Nx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new tr("auth-internal",e=>{const n=Qu(e.getProvider("auth").getImmediate());return(r=>new WO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Ev,_v,GO(t)),Dn(Ev,_v,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=5*60,XO=I_("authIdTokenMaxAge")||YO;let wv=null;const QO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XO)return;const i=n==null?void 0:n.token;wv!==i&&(wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JO(t=Up()){const e=Fp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ox(t,{popupRedirectResolver:KO,persistence:[tO,Hx,lw]}),r=I_("authTokenSyncURL");if(r){const s=QO(r);$x(n,s,()=>s(n.currentUser)),iw(n,o=>s(o))}const i=S_("auth");return i&&Px(n,`http://${i}`),n}zO("Browser");var qO=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new Map,eN={activated:!1,tokenObservers:[]};function vr(t){return ZO.get(t)||Object.assign({},eN)}const bv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $a,await nN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $a,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function nN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Xc=new Co("appCheck","AppCheck",rN);function iN(t){if(!vr(t).activated)throw Xc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="firebase-app-check-database",oN=1,sd="firebase-app-check-store";let zl=null;function aN(){return zl||(zl=new Promise((t,e)=>{try{const n=indexedDB.open(sN,oN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Xc.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(sd,{keyPath:"compositeKey"})}}}catch(n){e(Xc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),zl)}function lN(t,e){return cN(uN(t),e)}async function cN(t,e){const r=(await aN()).transaction(sd,"readwrite"),s=r.objectStore(sd).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Xc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function uN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new ll("@firebase/app-check");function Tv(t,e){return R_()?lN(t,e).catch(n=>{od.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={error:"UNKNOWN_ERROR"};function fN(t){return zu.encodeString(JSON.stringify(t),!1)}async function ad(t,e=!1){const n=t.app;iN(n);const r=vr(n);let i=r.token,s;if(i&&!Qo(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(Qo(l)?i=l:await Tv(n,void 0))}if(!e&&i&&Qo(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await vr(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?od.warn(l.message):od.error(l),s=l}let a;return i?s?Qo(i)?a={token:i.token,internalError:s}:a=Iv(s):(a={token:i.token},r.token=i,await Tv(n,i)):a=Iv(s),o&&gN(n,a),a}function dN(t,e,n,r){const{app:i}=t,s=vr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Qo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Sv(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Sv(t))}function gw(t,e){const n=vr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Sv(t){const{app:e}=t,n=vr(e);let r=n.tokenRefresher;r||(r=pN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function pN(t){const{app:e}=t;return new tN(async()=>{const n=vr(e);let r;if(n.token?r=await ad(t,!0):r=await ad(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=vr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},bv.RETRIAL_MIN_WAIT,bv.RETRIAL_MAX_WAIT)}function gN(t,e){const n=vr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Qo(t){return t.expireTimeMillis-Date.now()>0}function Iv(t){return{token:fN(hN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=vr(this.app);for(const n of e)gw(this.app,n.next);return Promise.resolve()}}function vN(t,e){return new mN(t,e)}function yN(t){return{getToken:e=>ad(t,e),addTokenListener:e=>dN(t,"INTERNAL",e),removeTokenListener:e=>gw(t.app,e)}}const EN="@firebase/app-check",_N="0.7.0",wN="app-check",Cv="app-check-internal";function bN(){mr(new tr(wN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return vN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Cv).initialize()})),mr(new tr(Cv,t=>{const e=t.getProvider("app-check").getImmediate();return yN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dn(EN,_N)}bN();var TN="firebase",SN="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(TN,SN,"app");const mw=Symbol("firebaseApp");function vw(t){return br()&&In(mw,null)||Up(t)}const Yl=new WeakMap;function IN(t,e){if(!Yl.has(t)){const n=xu(!0);Yl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Yl.delete(t)}}return Yl.get(t)}const CN=new WeakMap,Xl=new WeakMap;function AN(t){const e=vw(t);if(!Xl.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{Xl.set(e,s),n(s.value)}];Xl.set(e,i)}return Xl.get(e)}function RN(t,e){const n=JO(e);iw(n,r=>{const i=AN();t.value=r,Array.isArray(i)&&i[1](t)})}const Av="@firebase/database",Rv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yw="";function xN(t){yw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Gt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ON(e)}}catch{}return new NN},Vi=Ew("localStorage"),ld=Ew("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new ll("@firebase/database"),PN=function(){let t=1;return function(){return t++}}(),_w=function(t){const e=z1(t),n=new V1;n.update(e);const r=n.digest();return zu.encodeByteArray(r)},dl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dl.apply(null,r):typeof r=="object"?e+=Gt(r):e+=r,e+=" "}return e};let Ji=null,xv=!0;const DN=function(t,e){ee(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ws.logLevel=ze.VERBOSE,Ji=Ws.log.bind(Ws),e&&ld.set("logging_enabled",!0)):typeof t=="function"?Ji=t:(Ji=null,ld.remove("logging_enabled"))},qt=function(...t){if(xv===!0&&(xv=!1,Ji===null&&ld.get("logging_enabled")===!0&&DN(!0)),Ji){const e=dl.apply(null,t);Ji(e)}},pl=function(t){return function(...e){qt(t,...e)}},cd=function(...t){const e="FIREBASE INTERNAL ERROR: "+dl(...t);Ws.error(e)},ls=function(...t){const e=`FIREBASE FATAL ERROR: ${dl(...t)}`;throw Ws.error(e),new Error(e)},kn=function(...t){const e="FIREBASE WARNING: "+dl(...t);Ws.warn(e)},kN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ww=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},so="[MIN_NAME]",cs="[MAX_NAME]",Ro=function(t,e){if(t===e)return 0;if(t===so||e===cs)return-1;if(e===so||t===cs)return 1;{const n=Ov(t),r=Ov(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},LN=function(t,e){return t===e?0:t<e?-1:1},Uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Gt(e))},Gp=function(t){if(typeof t!="object"||t===null)return Gt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Gt(e[r]),n+=":",n+=Gp(t[e[r]]);return n+="}",n},bw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Vn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tw=function(t){ee(!ww(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},FN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},$N=new RegExp("^-?(0*)\\d{1,10}$"),BN=-2147483648,jN=2147483647,Ov=function(t){if($N.test(t)){const e=Number(t);if(e>=BN&&e<=jN)return e}return null},gl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kn("Exception was thrown by user callback.",n),e},Math.floor(0))}},VN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ma=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class ud{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ud.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="5",Sw="v",Iw="s",Cw="r",Aw="f",Rw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xw="ls",Ow="p",hd="ac",Nw="websocket",Pw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dw(t,e,n){ee(typeof e=="string","typeof type must == string"),ee(typeof n=="object","typeof params must == object");let r;if(e===Nw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GN(t)&&(n.ns=t.namespace);const i=[];return Vn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.counters_={}}incrementCounter(e,n=1){Kr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return I1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh={},Jh={};function Yp(t){const e=t.toString();return Qh[e]||(Qh[e]=new zN),Qh[e]}function YN(t,e){const n=t.toString();return Jh[n]||(Jh[n]=e()),Jh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="start",QN="close",JN="pLPCommand",qN="pRTLPCB",kw="id",Mw="pw",Lw="ser",ZN="cb",eP="seg",tP="ts",nP="d",rP="dframe",Fw=1870,Uw=30,iP=Fw-Uw,sP=25e3,oP=3e4;class ks{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pl(e),this.stats_=Yp(n),this.urlFn=l=>(this.appCheckToken&&(l[hd]=this.appCheckToken),Dw(n,Pw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oP)),MN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nv)this.id=a,this.password=l;else if(o===QN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nv]="t",r[Lw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Sw]=zp,this.transportSessionId&&(r[Iw]=this.transportSessionId),this.lastSessionId&&(r[xw]=this.lastSessionId),this.applicationId&&(r[Ow]=this.applicationId),this.appCheckToken&&(r[hd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rw.test(location.hostname)&&(r[Cw]=Aw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FN()&&!UN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=b_(n),i=bw(r,iP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[rP]="t",r[kw]=e,r[Mw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Gt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PN(),window[JN+this.uniqueCallbackIdentifier]=e,window[qN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qt("frame writing exception"),a.stack&&qt(a.stack),qt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kw]=this.myID,e[Mw]=this.myPW,e[Lw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uw+r.length<=Fw;){const o=this.pendingSegs.shift();r=r+"&"+eP+i+"="+o.seg+"&"+tP+i+"="+o.ts+"&"+nP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(sP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=16384,lP=45e3;let Qc=null;typeof MozWebSocket<"u"?Qc=MozWebSocket:typeof WebSocket<"u"&&(Qc=WebSocket);class Xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pl(this.connId),this.stats_=Yp(n),this.connURL=Xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Sw]=zp,typeof location<"u"&&location.hostname&&Rw.test(location.hostname)&&(o[Cw]=Aw),n&&(o[Iw]=n),r&&(o[xw]=r),i&&(o[hd]=i),s&&(o[Ow]=s),Dw(e,Nw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vi.set("previous_websocket_failure",!0);try{let r;A_(),this.mySock=new Qc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qc!==null&&!Xn.forceDisallow_}static previouslyFailed(){return Vi.isInMemoryStorage||Vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bw(n,aP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xn.responsesRequiredToBeHealthy=2;Xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,Xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xn&&Xn.isAvailable();let r=n&&!Xn.previouslyFailed();if(e.webSocketOnly&&(n||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xn];else{const i=this.transports_=[];for(const s of Ka.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ka.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=6e4,uP=5e3,hP=10*1024,fP=100*1024,qh="t",Pv="d",dP="s",Dv="r",pP="e",kv="o",Mv="a",Lv="n",Fv="p",gP="h";class mP{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pl("c:"+this.id+":"),this.transportManager_=new Ka(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qh in e){const n=e[qh];n===Mv?this.upgradeIfSecondaryHealthy_():n===Dv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Uo("t",e),r=Uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Uo(qh,e);if(Pv in e){const r=e[Pv];if(n===gP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dP?this.onConnectionShutdown_(r):n===Dv?this.onReset_(r):n===pP?cd("Server Error: "+r):n===kv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zp!==r&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Bw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jc}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=32,$v=768;class ft{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function it(){return new ft("")}function Ve(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wi(t){return t.pieces_.length-t.pieceNum_}function ht(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ft(t.pieces_,e)}function jw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ft(e,0)}function $t(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ft)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ft(n,0)}function Ue(t){return t.pieceNum_>=t.pieces_.length}function Bn(t,e){const n=Ve(t),r=Ve(e);if(n===null)return e;if(n===r)return Bn(ht(t),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kw(t,e){if(wi(t)!==wi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wi(t)>wi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yP{constructor(e,n){this.errorPrefix_=n,this.parts_=Vw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yu(this.parts_[r]);Ww(this)}}function EP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yu(e),Ww(t)}function _P(t){const e=t.parts_.pop();t.byteLength_-=Yu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ww(t){if(t.byteLength_>$v)throw new Error(t.errorPrefix_+"has a key path longer than "+$v+" bytes ("+t.byteLength_+").");if(t.parts_.length>Uv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uv+") or object contains a cycle "+Li(t))}function Li(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Bw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qp}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=1e3,wP=60*5*1e3,Bv=30*1e3,bP=1.3,TP=3e4,SP="server_kill",jv=3;class Mr extends $w{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mr.nextPersistentConnectionId_++,this.log_=pl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$o,this.maxReconnectDelay_=wP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!A_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Gt(s)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $a,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Mr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kr(e,"w")){const r=ro(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||j1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=B1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Gt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):cd("Unrecognized action received from server: "+Gt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TP&&(this.reconnectDelay_=$o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qt("getToken() completed but was canceled"):(qt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new mP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{kn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(SP)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&kn(h),l())}}}interrupt(e){qt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jf(this.interruptReasons_)&&(this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ft(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jv&&(this.reconnectDelay_=Bv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yw.replace(/\./g,"-")]=1,Mp()?e["framework.cordova"]=1:C_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jc.getInstance().currentlyOnline();return Jf(this.interruptReasons_)&&e}}Mr.nextPersistentConnectionId_=0;Mr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new He(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new He(so,e),i=new He(so,n);return this.compare(r,i)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;class Gw extends Zu{static get __EMPTY_NODE(){return Ql}static set __EMPTY_NODE(e){Ql=e}compare(e,n){return Ro(e.name,n.name)}isDefinedOn(e){throw Io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return He.MIN}maxPost(){return new He(cs,Ql)}makePost(e,n){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,Ql)}toString(){return".key"}}const Gs=new Gw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ut.RED,this.left=i??Tn.EMPTY_NODE,this.right=s??Tn.EMPTY_NODE}copy(e,n,r,i,s){return new Ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ut.RED=!0;Ut.BLACK=!1;class IP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tn{constructor(e,n=Tn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Tn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ut.BLACK,null,null))}remove(e){return new Tn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ut.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jl(this.root_,null,this.comparator_,!0,e)}}Tn.EMPTY_NODE=new IP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){return Ro(t.name,e.name)}function Jp(t,e){return Ro(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;function AP(t){fd=t}const zw=function(t){return typeof t=="number"?"number:"+Tw(t):"string:"+t},Yw=function(t){if(t.isLeafNode()){const e=t.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kr(e,".sv"),"Priority must be a string or number.")}else ee(t===fd||t.isEmpty(),"priority of unexpected type.");ee(t===fd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vv;class Mt{constructor(e,n=Mt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yw(this.priorityNode_)}static set __childrenNodeConstructor(e){Vv=e}static get __childrenNodeConstructor(){return Vv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Mt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Ve(e)===".priority"?this.priorityNode_:Mt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Mt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ve(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||wi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Mt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tw(this.value_):e+=this.value_,this.lazyHash_=_w(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Mt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Mt.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Mt.VALUE_TYPE_ORDER.indexOf(n),s=Mt.VALUE_TYPE_ORDER.indexOf(r);return ee(i>=0,"Unknown leaf type: "+n),ee(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Mt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xw,Qw;function RP(t){Xw=t}function xP(t){Qw=t}class OP extends Zu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ro(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return He.MIN}maxPost(){return new He(cs,new Mt("[PRIORITY-POST]",Qw))}makePost(e,n){const r=Xw(e);return new He(n,new Mt("[PRIORITY-POST]",r))}toString(){return".priority"}}const rn=new OP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=Math.log(2);class PP{constructor(e){const n=s=>parseInt(Math.log(s)/NP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ut(f,h.node,Ut.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),m=i(d+1,c);return h=t[d],f=n?n(h):h,new Ut(f,h.node,Ut.BLACK,p,m)}},s=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const y=h-p,v=h;h-=p;const g=i(y+1,v),E=t[y],w=n?n(E):E;d(new Ut(w,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?f(y,Ut.BLACK):(f(y,Ut.BLACK),f(y,Ut.RED))}return u},o=new PP(t.length),a=s(o);return new Tn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh;const ws={};class Nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ee(ws&&rn,"ChildrenNode.ts has not been loaded"),Zh=Zh||new Nr({".priority":ws},{".priority":rn}),Zh}get(e){const n=ro(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tn?n:null}hasIndex(e){return Kr(this.indexSet_,e.toString())}addIndex(e,n){ee(e!==Gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(He.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qc(r,e.getCompare()):a=ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Nr(u,c)}addToIndexes(e,n){const r=jc(this.indexes_,(i,s)=>{const o=ro(this.indexSet_,s);if(ee(o,"Missing index implementation for "+s),i===ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(He.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),qc(a,o.getCompare())}else return ws;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new He(e.name,a))),l.insert(e,e.node)}});return new Nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=jc(this.indexes_,i=>{if(i===ws)return i;{const s=n.get(e.name);return s?i.remove(new He(e.name,s)):i}});return new Nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;class Ze{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yw(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bo||(Bo=new Ze(new Tn(Jp),null,Nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bo}updatePriority(e){return this.children_.isEmpty()?this:new Ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bo:n}}getChild(e){const n=Ve(e);return n===null?this:this.getImmediateChild(n).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ee(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new He(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bo:this.priorityNode_;return new Ze(i,o,s)}}updateChild(e,n){const r=Ve(e);if(r===null)return n;{ee(Ve(e)!==".priority"||wi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ht(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(rn,(o,a)=>{n[o]=a.val(e),r++,s&&Ze.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zw(this.getPriority().val())+":"),this.forEachChild(rn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_w(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new He(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new He(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new He(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,He.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ml?-1:0}withIndex(e){if(e===Gs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(rn),i=n.getIterator(rn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gs?null:this.indexMap_.get(e.toString())}}Ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DP extends Ze{constructor(){super(new Tn(Jp),Ze.EMPTY_NODE,Nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ze.EMPTY_NODE}isEmpty(){return!1}}const ml=new DP;Object.defineProperties(He,{MIN:{value:new He(so,Ze.EMPTY_NODE)},MAX:{value:new He(cs,ml)}});Gw.__EMPTY_NODE=Ze.EMPTY_NODE;Mt.__childrenNodeConstructor=Ze;AP(ml);xP(ml);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=!0;function Zt(t,e=null){if(t===null)return Ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Mt(n,Zt(e))}if(!(t instanceof Array)&&kP){const n=[];let r=!1;if(Vn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Zt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new He(o,l)))}}),n.length===0)return Ze.EMPTY_NODE;const s=qc(n,CP,o=>o.name,Jp);if(r){const o=qc(n,rn.getCompare());return new Ze(s,Zt(e),new Nr({".priority":o},{".priority":rn}))}else return new Ze(s,Zt(e),Nr.Default)}else{let n=Ze.EMPTY_NODE;return Vn(t,(r,i)=>{if(Kr(t,r)&&r.substring(0,1)!=="."){const s=Zt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Zt(e))}}RP(Zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP extends Zu{constructor(e){super(),this.indexPath_=e,ee(!Ue(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ro(e.name,n.name):s}makePost(e,n){const r=Zt(e),i=Ze.EMPTY_NODE.updateChild(this.indexPath_,r);return new He(n,i)}maxPost(){const e=Ze.EMPTY_NODE.updateChild(this.indexPath_,ml);return new He(cs,e)}toString(){return Vw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP extends Zu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ro(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,n){const r=Zt(e);return new He(n,r)}toString(){return".value"}}const FP=new LP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){return{type:"value",snapshotNode:t}}function $P(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function BP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:so}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rn}copy(){const e=new qp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rn?n="$priority":t.index_===FP?n="$value":t.index_===Gs?n="$key":(ee(t.index_ instanceof MP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Gt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Gt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Gt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Gt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Gt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends $w{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=pl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Zc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Kv(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),ro(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Zc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Kv(e._queryParams),r=e._path.toString(),i=new $a;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ao(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ba(a.responseText)}catch{kn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&kn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.rootNode_=Ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return{value:null,children:new Map}}function Jw(t,e,n){if(Ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ve(e);t.children.has(r)||t.children.set(r,eu());const i=t.children.get(r);e=ht(e),Jw(i,e,n)}}function dd(t,e,n){t.value!==null?n(e,t.value):HP(t,(r,i)=>{const s=new ft(e.toString()+"/"+r);dd(i,s,n)})}function HP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=10*1e3,WP=30*1e3,GP=5*60*1e3;class zP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new KP(e);const r=Gv+(WP-Gv)*Math.random();ma(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Vn(e,(i,s)=>{s>0&&Kr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*GP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lr||(lr={}));function qw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lr.ACK_USER_WRITE,this.source=qw()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ft(e));return new tu(it(),n,this.revert)}}else return ee(Ve(this.path)===e,"operationForChild called for unrelated child."),new tu(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lr.OVERWRITE}operationForChild(e){return Ue(this.path)?new us(this.source,it(),this.snap.getImmediateChild(e)):new us(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lr.MERGE}operationForChild(e){if(Ue(this.path)){const n=this.children.subtree(new ft(e));return n.isEmpty()?null:n.value?new us(this.source,it(),n.value):new Wa(this.source,it(),n)}else return ee(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wa(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ve(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jP(o.childName,o.snapshotNode))}),jo(t,i,"child_removed",e,r,n),jo(t,i,"child_added",e,r,n),jo(t,i,"child_moved",s,r,n),jo(t,i,"child_changed",e,r,n),jo(t,i,"value",e,r,n),i}function jo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>QP(t,a,l)),o.forEach(a=>{const l=XP(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function XP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QP(t,e,n){if(e.childName==null||n.childName==null)throw Io("Should only compare child_ events.");const r=new He(e.childName,e.snapshotNode),i=new He(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){return{eventCache:t,serverCache:e}}function va(t,e,n,r){return tb(new Zp(e,n,r),t.serverCache)}function nb(t,e,n,r){return tb(t.eventCache,new Zp(e,n,r))}function pd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef;const JP=()=>(ef||(ef=new Tn(LN)),ef);class ut{constructor(e,n=JP()){this.value=e,this.children=n}static fromObject(e){let n=new ut(null);return Vn(e,(r,i)=>{n=n.set(new ft(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:it(),value:this.value};if(Ue(e))return null;{const r=Ve(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ht(e),n);return s!=null?{path:$t(new ft(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const n=Ve(e),r=this.children.get(n);return r!==null?r.subtree(ht(e)):new ut(null)}}set(e,n){if(Ue(e))return new ut(n,this.children);{const r=Ve(e),s=(this.children.get(r)||new ut(null)).set(ht(e),n),o=this.children.insert(r,s);return new ut(this.value,o)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const n=Ve(e),r=this.children.get(n);if(r){const i=r.remove(ht(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ut(null):new ut(this.value,s)}else return this}}get(e){if(Ue(e))return this.value;{const n=Ve(e),r=this.children.get(n);return r?r.get(ht(e)):null}}setTree(e,n){if(Ue(e))return n;{const r=Ve(e),s=(this.children.get(r)||new ut(null)).setTree(ht(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ut(this.value,o)}}fold(e){return this.fold_(it(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_($t(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,it(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ue(e))return null;{const s=Ve(e),o=this.children.get(s);return o?o.findOnPath_(ht(e),$t(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,it(),n)}foreachOnPath_(e,n,r){if(Ue(e))return this;{this.value&&r(n,this.value);const i=Ve(e),s=this.children.get(i);return s?s.foreachOnPath_(ht(e),$t(n,i),r):new ut(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_($t(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.writeTree_=e}static empty(){return new er(new ut(null))}}function ya(t,e,n){if(Ue(e))return new er(new ut(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Bn(i,e);return s=s.updateChild(o,n),new er(t.writeTree_.set(i,s))}else{const i=new ut(n),s=t.writeTree_.setTree(e,i);return new er(s)}}}function zv(t,e,n){let r=t;return Vn(n,(i,s)=>{r=ya(r,$t(e,i),s)}),r}function Yv(t,e){if(Ue(e))return er.empty();{const n=t.writeTree_.setTree(e,new ut(null));return new er(n)}}function gd(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bn(n.path,e)):null}function Xv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rn,(r,i)=>{e.push(new He(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new He(r,i.value))}),e}function pi(t,e){if(Ue(e))return t;{const n=ys(t,e);return n!=null?new er(new ut(n)):new er(t.writeTree_.subtree(e))}}function md(t){return t.writeTree_.isEmpty()}function oo(t,e){return rb(it(),t.writeTree_,e)}function rb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(ee(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rb($t(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild($t(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t,e){return cb(e,t)}function qP(t,e,n,r,i){ee(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ya(t.visibleWrites,e,n)),t.lastWriteId=r}function ZP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function eD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ee(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tD(a,r.path)?i=!1:Qn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return nD(t),!0;if(r.snap)t.visibleWrites=Yv(t.visibleWrites,r.path);else{const a=r.children;Vn(a,l=>{t.visibleWrites=Yv(t.visibleWrites,$t(r.path,l))})}return!0}else return!1}function tD(t,e){if(t.snap)return Qn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qn($t(t.path,n),e))return!0;return!1}function nD(t){t.visibleWrites=sb(t.allWrites,rD,it()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function rD(t){return t.visible}function sb(t,e,n){let r=er.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qn(n,o)?(a=Bn(n,o),r=ya(r,a,s.snap)):Qn(o,n)&&(a=Bn(o,n),r=ya(r,it(),s.snap.getChild(a)));else if(s.children){if(Qn(n,o))a=Bn(n,o),r=zv(r,a,s.children);else if(Qn(o,n))if(a=Bn(o,n),Ue(a))r=zv(r,it(),s.children);else{const l=ro(s.children,Ve(a));if(l){const c=l.getChild(ht(a));r=ya(r,it(),c)}}}else throw Io("WriteRecord should have .snap or .children")}}return r}function ob(t,e,n,r,i){if(!r&&!i){const s=ys(t.visibleWrites,e);if(s!=null)return s;{const o=pi(t.visibleWrites,e);if(md(o))return n;if(n==null&&!gd(o,it()))return null;{const a=n||Ze.EMPTY_NODE;return oo(o,a)}}}else{const s=pi(t.visibleWrites,e);if(!i&&md(s))return n;if(!i&&n==null&&!gd(s,it()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Qn(c.path,e)||Qn(e,c.path))},a=sb(t.allWrites,o,e),l=n||Ze.EMPTY_NODE;return oo(a,l)}}}function iD(t,e,n){let r=Ze.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(rn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pi(t.visibleWrites,e);return n.forEachChild(rn,(o,a)=>{const l=oo(pi(s,new ft(o)),a);r=r.updateImmediateChild(o,l)}),Xv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pi(t.visibleWrites,e);return Xv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function sD(t,e,n,r,i){ee(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=$t(e,n);if(gd(t.visibleWrites,s))return null;{const o=pi(t.visibleWrites,s);return md(o)?i.getChild(n):oo(o,i.getChild(n))}}function oD(t,e,n,r){const i=$t(e,n),s=ys(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pi(t.visibleWrites,i);return oo(o,r.getNode().getImmediateChild(n))}else return null}function aD(t,e){return ys(t.visibleWrites,e)}function lD(t,e,n,r,i,s,o){let a;const l=pi(t.visibleWrites,e),c=ys(l,it());if(c!=null)a=c;else if(n!=null)a=oo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<i;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function cD(){return{visibleWrites:er.empty(),allWrites:[],lastWriteId:-1}}function vd(t,e,n,r){return ob(t.writeTree,t.treePath,e,n,r)}function ab(t,e){return iD(t.writeTree,t.treePath,e)}function Qv(t,e,n,r){return sD(t.writeTree,t.treePath,e,n,r)}function nu(t,e){return aD(t.writeTree,$t(t.treePath,e))}function uD(t,e,n,r,i,s){return lD(t.writeTree,t.treePath,e,n,r,i,s)}function eg(t,e,n){return oD(t.writeTree,t.treePath,e,n)}function lb(t,e){return cb($t(t.treePath,e),t.writeTree)}function cb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ee(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Hv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,BP(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$P(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Hv(r,e.snapshotNode,i.oldSnap));else throw Io("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ub=new fD;class tg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return eg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),s=uD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function dD(t,e){ee(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pD(t,e,n,r,i){const s=new hD;let o,a;if(n.type===lr.OVERWRITE){const c=n;c.source.fromUser?o=yd(t,e,c.path,c.snap,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ue(c.path),o=ru(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===lr.MERGE){const c=n;c.source.fromUser?o=mD(t,e,c.path,c.children,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ed(t,e,c.path,c.children,r,i,a,s))}else if(n.type===lr.ACK_USER_WRITE){const c=n;c.revert?o=ED(t,e,c.path,r,i,s):o=vD(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===lr.LISTEN_COMPLETE)o=yD(t,e,n.path,r,s);else throw Io("Unknown operation type: "+n.type);const l=s.getChanges();return gD(e,o,l),{viewCache:o,changes:l}}function gD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=pd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(UP(pd(e)))}}function hb(t,e,n,r,i,s){const o=e.eventCache;if(nu(r,n)!=null)return e;{let a,l;if(Ue(n))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof Ze?c:Ze.EMPTY_NODE,h=ab(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=vd(r,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ve(n);if(c===".priority"){ee(wi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Qv(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ht(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Qv(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=eg(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,s):a=o.getNode()}}return va(e,a,o.isFullyInitialized()||Ue(n),t.filter.filtersNodes())}}function ru(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Ve(n);if(!l.isCompleteForPath(n)&&wi(n)>1)return e;const p=ht(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,ub,null)}const h=nb(e,c,l.isFullyInitialized()||Ue(n),u.filtersNodes()),f=new tg(i,h,s);return hb(t,h,n,i,f,a)}function yd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new tg(i,e,s);if(Ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=va(e,c,!0,t.filter.filtersNodes());else{const h=Ve(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=va(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ht(n),d=a.getNode().getImmediateChild(h);let p;if(Ue(f))p=r;else{const m=u.getCompleteChild(h);m!=null?jw(f)===".priority"&&m.getChild(Hw(f)).isEmpty()?p=m:p=m.updateChild(f,r):p=Ze.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=va(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Jv(t,e){return t.eventCache.isCompleteForChild(e)}function mD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=$t(n,l);Jv(e,Ve(u))&&(a=yd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=$t(n,l);Jv(e,Ve(u))||(a=yd(t,a,u,c,i,s,o))}),a}function qv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ed(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ue(n)?c=r:c=new ut(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=qv(t,d,f);l=ru(t,l,new ft(h),p,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=qv(t,p,f);l=ru(t,l,new ft(h),m,i,s,o,a)}}),l}function vD(t,e,n,r,i,s,o){if(nu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ru(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Ue(n)){let c=new ut(null);return l.getNode().forEachChild(Gs,(u,h)=>{c=c.set(new ft(u),h)}),Ed(t,e,n,c,i,s,a,o)}else return e}else{let c=new ut(null);return r.foreach((u,h)=>{const f=$t(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ed(t,e,n,c,i,s,a,o)}}function yD(t,e,n,r,i){const s=e.serverCache,o=nb(e,s.getNode(),s.isFullyInitialized()||Ue(n),s.isFiltered());return hb(t,o,n,r,ub,i)}function ED(t,e,n,r,i,s){let o;if(nu(r,n)!=null)return e;{const a=new tg(r,e,i),l=e.eventCache.getNode();let c;if(Ue(n)||Ve(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vd(r,hs(e));else{const h=e.serverCache.getNode();ee(h instanceof Ze,"serverChildren would be complete if leaf node"),u=ab(r,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Ve(n);let h=eg(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ht(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ze.EMPTY_NODE,ht(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vd(r,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||nu(r,it())!=null,va(e,c,o,t.filter.filtersNodes())}}function _D(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ue(e)&&!n.getImmediateChild(Ve(e)).isEmpty())?n.getChild(e):null}function Zv(t,e,n,r){e.type===lr.MERGE&&e.source.queryId!==null&&(ee(hs(t.viewCache_),"We should always have a full cache before handling merges"),ee(pd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pD(t.processor_,i,e,n,r);return dD(t.processor_,s.viewCache),ee(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,wD(t,s.changes,s.viewCache.eventCache.getNode(),null)}function wD(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return YP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;function bD(t){ee(!ey,"__referenceConstructor has already been defined"),ey=t}function ng(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return ee(s!=null,"SyncTree gave us an op for an invalid query."),Zv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zv(o,e,n,r));return s}}function rg(t,e){let n=null;for(const r of t.views.values())n=n||_D(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty;function TD(t){ee(!ty,"__referenceConstructor has already been defined"),ty=t}class ny{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=cD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function SD(t,e,n,r,i){return qP(t.pendingWriteTree_,e,n,r,i),i?th(t,new us(qw(),e,n)):[]}function Ms(t,e,n=!1){const r=ZP(t.pendingWriteTree_,e);if(eD(t.pendingWriteTree_,e)){let s=new ut(null);return r.snap!=null?s=s.set(it(),!0):Vn(r.children,o=>{s=s.set(new ft(o),!0)}),th(t,new tu(r.path,s,n))}else return[]}function eh(t,e,n){return th(t,new us(Zw(),e,n))}function ID(t,e,n){const r=ut.fromObject(n);return th(t,new Wa(Zw(),e,r))}function CD(t,e,n,r){const i=gb(t,r);if(i!=null){const s=mb(i),o=s.path,a=s.queryId,l=Bn(o,e),c=new us(eb(a),l,n);return vb(t,o,c)}else return[]}function AD(t,e,n,r){const i=gb(t,r);if(i){const s=mb(i),o=s.path,a=s.queryId,l=Bn(o,e),c=ut.fromObject(n),u=new Wa(eb(a),l,c);return vb(t,o,u)}else return[]}function fb(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bn(o,e),c=rg(a,l);if(c)return c});return ob(i,e,s,n,!0)}function th(t,e){return db(e,t.syncPointTree_,null,ib(t.pendingWriteTree_,it()))}function db(t,e,n,r){if(Ue(t.path))return pb(t,e,n,r);{const i=e.get(it());n==null&&i!=null&&(n=rg(i,it()));let s=[];const o=Ve(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=lb(r,o);s=s.concat(db(a,l,c,u))}return i&&(s=s.concat(ng(i,t,r,n))),s}}function pb(t,e,n,r){const i=e.get(it());n==null&&i!=null&&(n=rg(i,it()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=lb(r,o),u=t.operationForChild(o);u&&(s=s.concat(pb(u,a,l,c)))}),i&&(s=s.concat(ng(i,t,r,n))),s}function gb(t,e){return t.tagToQueryMap.get(e)}function mb(t){const e=t.indexOf("$");return ee(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ft(t.substr(0,e))}}function vb(t,e,n){const r=t.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const i=ib(t.pendingWriteTree_,e);return ng(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ig(n)}node(){return this.node_}}class sg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$t(this.path_,e);return new sg(this.syncTree_,n)}node(){return fb(this.syncTree_,this.path_)}}const RD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ry=function(t,e,n){if(!t||typeof t!="object")return t;if(ee(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OD(t[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ee(!1,"Unexpected server value: "+t)}},OD=function(t,e,n){t.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const i=e.node();if(ee(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ND=function(t,e,n,r){return og(e,new sg(n,t),r)},PD=function(t,e,n){return og(t,new ig(e),n)};function og(t,e,n){const r=t.getPriority().val(),i=ry(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ry(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Mt(a,Zt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Mt(i))),o.forEachChild(rn,(a,l)=>{const c=og(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function lg(t,e){let n=e instanceof ft?e:new ft(e),r=t,i=Ve(n);for(;i!==null;){const s=ro(r.node.children,i)||{children:{},childCount:0};r=new ag(i,r,s),n=ht(n),i=Ve(n)}return r}function xo(t){return t.node.value}function yb(t,e){t.node.value=e,_d(t)}function Eb(t){return t.node.childCount>0}function DD(t){return xo(t)===void 0&&!Eb(t)}function nh(t,e){Vn(t.node.children,(n,r)=>{e(new ag(n,t,r))})}function _b(t,e,n,r){n&&!r&&e(t),nh(t,i=>{_b(i,e,!0,r)}),n&&r&&e(t)}function kD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vl(t){return new ft(t.parent===null?t.name:vl(t.parent)+"/"+t.name)}function _d(t){t.parent!==null&&MD(t.parent,t.name,t)}function MD(t,e,n){const r=DD(n),i=Kr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_d(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_d(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=/[\[\].#$\/\u0000-\u001F\u007F]/,FD=/[\[\].#$\u0000-\u001F\u007F]/,tf=10*1024*1024,wb=function(t){return typeof t=="string"&&t.length!==0&&!LD.test(t)},UD=function(t){return typeof t=="string"&&t.length!==0&&!FD.test(t)},$D=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),UD(t)},bb=function(t,e,n){const r=n instanceof ft?new yP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Li(r));if(typeof e=="function")throw new Error(t+"contains a function "+Li(r)+" with contents = "+e.toString());if(ww(e))throw new Error(t+"contains "+e.toString()+" "+Li(r));if(typeof e=="string"&&e.length>tf/3&&Yu(e)>tf)throw new Error(t+"contains a string greater than "+tf+" utf8 bytes "+Li(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Vn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wb(o)))throw new Error(t+" contains an invalid key ("+o+") "+Li(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EP(r,o),bb(t,a,r),_P(r)}),i&&s)throw new Error(t+' contains ".value" child '+Li(r)+" in addition to actual children.")}},BD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$D(n))throw new Error(G1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function VD(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Kw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Es(t,e,n){VD(t,n),HD(t,r=>Qn(r,e)||Qn(e,r))}function HD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ji&&qt("event: "+n.toString()),gl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="repo_interrupt",GD=25;class zD{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eu(),this.transactionQueueTree_=new ag,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YD(t,e,n){if(t.stats_=Yp(t.repoInfo_),t.forceRestClient_||VN())t.server_=new Zc(t.repoInfo_,(r,i,s,o)=>{iy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Gt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mr(t.repoInfo_,e,(r,i,s,o)=>{iy(t,r,i,s,o)},r=>{sy(t,r)},r=>{QD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=YN(t.repoInfo_,()=>new zP(t.stats_,t.server_)),t.infoData_=new VP,t.infoSyncTree_=new ny({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=eh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cg(t,"connected",!1),t.serverSyncTree_=new ny({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Es(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function XD(t){const n=t.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tb(t){return RD({timestamp:XD(t)})}function iy(t,e,n,r,i){t.dataUpdateCount++;const s=new ft(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=jc(n,c=>Zt(c));o=AD(t.serverSyncTree_,s,l,i)}else{const l=Zt(n);o=CD(t.serverSyncTree_,s,l,i)}else if(r){const l=jc(n,c=>Zt(c));o=ID(t.serverSyncTree_,s,l)}else{const l=Zt(n);o=eh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=hg(t,s)),Es(t.eventQueue_,a,o)}function sy(t,e){cg(t,"connected",e),e===!1&&qD(t)}function QD(t,e){Vn(e,(n,r)=>{cg(t,n,r)})}function cg(t,e,n){const r=new ft("/.info/"+e),i=Zt(n);t.infoData_.updateSnapshot(r,i);const s=eh(t.infoSyncTree_,r,i);Es(t.eventQueue_,r,s)}function JD(t){return t.nextWriteId_++}function qD(t){Sb(t,"onDisconnectEvents");const e=Tb(t),n=eu();dd(t.onDisconnect_,it(),(i,s)=>{const o=ND(i,s,t.serverSyncTree_,e);Jw(n,i,o)});let r=[];dd(n,it(),(i,s)=>{r=r.concat(eh(t.serverSyncTree_,i,s));const o=nk(t,i);hg(t,o)}),t.onDisconnect_=eu(),Es(t.eventQueue_,it(),r)}function ZD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WD)}function Sb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qt(n,...e)}function Ib(t,e,n){return fb(t.serverSyncTree_,e,n)||Ze.EMPTY_NODE}function ug(t,e=t.transactionQueueTree_){if(e||rh(t,e),xo(e)){const n=Ab(t,e);ee(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ek(t,vl(e),n)}else Eb(e)&&nh(e,n=>{ug(t,n)})}function ek(t,e,n){const r=n.map(c=>c.currentWriteId),i=Ib(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];ee(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sb(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ms(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rh(t,lg(t.transactionQueueTree_,e)),ug(t,t.transactionQueueTree_),Es(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)gl(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{kn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}hg(t,e)}},o)}function hg(t,e){const n=Cb(t,e),r=vl(n),i=Ab(t,n);return tk(t,i,r),r}function tk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bn(n,l.path);let u=!1,h;if(ee(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=GD)u=!0,h="maxretry",i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ib(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){bb("transaction failed: Data returned ",d,l.path);let p=Zt(d);typeof d=="object"&&d!=null&&Kr(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,v=Tb(t),g=PD(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=JD(t),o.splice(o.indexOf(y),1),i=i.concat(SD(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Ms(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Ms(t.serverSyncTree_,l.currentWriteId,!0))}Es(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gl(r[a]);ug(t,t.transactionQueueTree_)}function Cb(t,e){let n,r=t.transactionQueueTree_;for(n=Ve(e);n!==null&&xo(r)===void 0;)r=lg(r,n),e=ht(e),n=Ve(e);return r}function Ab(t,e){const n=[];return Rb(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Rb(t,e,n){const r=xo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);nh(e,i=>{Rb(t,i,n)})}function rh(t,e){const n=xo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yb(e,n.length>0?n:void 0)}nh(e,r=>{rh(t,r)})}function nk(t,e){const n=vl(Cb(t,e)),r=lg(t.transactionQueueTree_,e);return kD(r,i=>{nf(t,i)}),nf(t,r),_b(r,i=>{nf(t,i)}),n}function nf(t,e){const n=xo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ee(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(ee(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ms(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yb(e,void 0):n.length=s+1,Es(t.eventQueue_,vl(e),i);for(let o=0;o<r.length;o++)gl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ik(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):kn(`Invalid query segment '${n}' in query '${t}'`)}return e}const oy=function(t,e){const n=sk(t),r=n.namespace;n.domain==="firebase.com"&&ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new WN(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ft(n.pathString)}},sk=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=rk(t.substring(u,h)));const f=ik(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ue(this._path)?null:jw(this._path)}get ref(){return new Oo(this._repo,this._path)}get _queryIdentifier(){const e=Wv(this._queryParams),n=Gp(e);return n==="{}"?"default":n}get _queryObject(){return Wv(this._queryParams)}isEqual(e){if(e=Ii(e),!(e instanceof fg))return!1;const n=this._repo===e._repo,r=Kw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+vP(this._path)}}class Oo extends fg{constructor(e,n){super(e,n,new qp,!1)}get parent(){const e=Hw(this._path);return e===null?null:new Oo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bD(Oo);TD(Oo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="FIREBASE_DATABASE_EMULATOR_HOST",wd={};let ak=!1;function lk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oy(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ok]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=oy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ud(ud.OWNER):new KN(t.name,t.options,e);BD("Invalid Firebase Database URL",o),Ue(o.path)||ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=uk(a,t,u,new HN(t.name,n));return new hk(h,t)}function ck(t,e){const n=wd[e];(!n||n[t.key]!==t)&&ls(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZD(t),delete n[t.key]}function uk(t,e,n,r){let i=wd[e.name];i||(i={},wd[e.name]=i);let s=i[t.toURLString()];return s&&ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zD(t,ak,n,r),i[t.toURLString()]=s,s}class hk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oo(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ck(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ls("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){xN(Ci),mr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Dn(Av,Rv,t),Dn(Av,Rv,"esm2017")}Mr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fk();var dk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,dg=dg||{},Se=dk||self;function iu(){}function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pk(t){return Object.prototype.hasOwnProperty.call(t,rf)&&t[rf]||(t[rf]=++gk)}var rf="closure_uid_"+(1e9*Math.random()>>>0),gk=0;function mk(t,e,n){return t.call.apply(t.bind,arguments)}function vk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function on(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?on=mk:on=vk,on.apply(null,arguments)}function ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function jt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ai(){this.s=this.s,this.o=this.o}var yk=0;Ai.prototype.s=!1;Ai.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),yk!=0)&&pk(this)};Ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ay(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function an(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}an.prototype.h=function(){this.defaultPrevented=!0};var Ek=function(){if(!Se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Se.addEventListener("test",iu,e),Se.removeEventListener("test",iu,e)}catch{}return t}();function su(t){return/^[\s\xa0]*$/.test(t)}var ly=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function sf(t,e){return t<e?-1:t>e?1:0}function sh(){var t=Se.navigator;return t&&(t=t.userAgent)?t:""}function or(t){return sh().indexOf(t)!=-1}function gg(t){return gg[" "](t),t}gg[" "]=iu;function Ob(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var _k=or("Opera"),ao=or("Trident")||or("MSIE"),Nb=or("Edge"),bd=Nb||ao,Pb=or("Gecko")&&!(sh().toLowerCase().indexOf("webkit")!=-1&&!or("Edge"))&&!(or("Trident")||or("MSIE"))&&!or("Edge"),wk=sh().toLowerCase().indexOf("webkit")!=-1&&!or("Edge");function Db(){var t=Se.document;return t?t.documentMode:void 0}var ou;e:{var of="",af=function(){var t=sh();if(Pb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Nb)return/Edge\/([\d\.]+)/.exec(t);if(ao)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wk)return/WebKit\/(\S+)/.exec(t);if(_k)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(af&&(of=af?af[1]:""),ao){var lf=Db();if(lf!=null&&lf>parseFloat(of)){ou=String(lf);break e}}ou=of}var bk={};function Tk(){return Ob(bk,9,function(){let t=0;const e=ly(String(ou)).split("."),n=ly("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=sf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||sf(i[2].length==0,s[2].length==0)||sf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Td;if(Se.document&&ao){var cy=Db();Td=cy||parseInt(ou,10)||void 0}else Td=void 0;var Sk=Td;function Ga(t,e){if(an.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pb){e:{try{gg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ik[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ga.$.h.call(this)}}jt(Ga,an);var Ik={2:"touch",3:"pen",4:"mouse"};Ga.prototype.h=function(){Ga.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var El="closure_listenable_"+(1e6*Math.random()|0),Ck=0;function Ak(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Ck,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function mg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kb(t){const e={};for(const n in t)e[n]=t[n];return e}const uy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uy.length;s++)n=uy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Id(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ak(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=xb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Id(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var vg="closure_lm_"+(1e6*Math.random()|0),cf={};function Lb(t,e,n,r,i){if(r&&r.once)return Ub(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lb(t,e[s],n,r,i);return null}return n=_g(n),t&&t[El]?t.O(e,n,yl(r)?!!r.capture:!!r,i):Fb(t,e,n,!1,r,i)}function Fb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=yl(i)?!!i.capture:!!i,a=Eg(t);if(a||(t[vg]=a=new ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Rk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ek||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Bb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rk(){function t(n){return e.call(t.src,t.listener,n)}const e=xk;return t}function Ub(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ub(t,e[s],n,r,i);return null}return n=_g(n),t&&t[El]?t.P(e,n,yl(r)?!!r.capture:!!r,i):Fb(t,e,n,!0,r,i)}function $b(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$b(t,e[s],n,r,i);else r=yl(r)?!!r.capture:!!r,n=_g(n),t&&t[El]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Id(s,n,r,i),-1<n&&(oh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Id(e,n,r,i)),(n=-1<t?e[t]:null)&&yg(n))}function yg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[El])Sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Bb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eg(e))?(Sd(n,t),n.h==0&&(n.src=null,e[vg]=null)):oh(t)}}}function Bb(t){return t in cf?cf[t]:cf[t]="on"+t}function xk(t,e){if(t.fa)t=!0;else{e=new Ga(e,this);var n=t.listener,r=t.la||t.src;t.ia&&yg(t),t=n.call(r,e)}return t}function Eg(t){return t=t[vg],t instanceof ah?t:null}var uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function _g(t){return typeof t=="function"?t:(t[uf]||(t[uf]=function(e){return t.handleEvent(e)}),t[uf])}function Bt(){Ai.call(this),this.i=new ah(this),this.S=this,this.J=null}jt(Bt,Ai);Bt.prototype[El]=!0;Bt.prototype.removeEventListener=function(t,e,n,r){$b(this,t,e,n,r)};function Yt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new an(e,t);else if(e instanceof an)e.target=e.target||t;else{var i=e;e=new an(r,t),Mb(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Zl(o,r,!0,e)&&i}if(o=e.g=t,i=Zl(o,r,!0,e)&&i,i=Zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Zl(o,r,!1,e)&&i}Bt.prototype.N=function(){if(Bt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};Bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wg=Se.JSON.stringify;function Ok(){var t=Hb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nk{constructor(){this.h=this.g=null}add(e,n){const r=jb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pk,t=>t.reset());class Pk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Dk(t){Se.setTimeout(()=>{throw t},0)}function Vb(t,e){Cd||kk(),Ad||(Cd(),Ad=!0),Hb.add(t,e)}var Cd;function kk(){var t=Se.Promise.resolve(void 0);Cd=function(){t.then(Mk)}}var Ad=!1,Hb=new Nk;function Mk(){for(var t;t=Ok();){try{t.h.call(t.g)}catch(n){Dk(n)}var e=jb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ad=!1}function lh(t,e){Bt.call(this),this.h=t||1,this.g=e||Se,this.j=on(this.qb,this),this.l=Date.now()}jt(lh,Bt);te=lh.prototype;te.ga=!1;te.T=null;te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Yt(this,"tick"),this.ga&&(bg(this),this.start()))}};te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}te.N=function(){lh.$.N.call(this),bg(this),delete this.g};function Tg(t,e,n){if(typeof t=="function")n&&(t=on(t,n));else if(t&&typeof t.handleEvent=="function")t=on(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Se.setTimeout(t,e||0)}function Kb(t){t.g=Tg(()=>{t.g=null,t.i&&(t.i=!1,Kb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Lk extends Ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kb(this)}N(){super.N(),this.g&&(Se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){Ai.call(this),this.h=t,this.g={}}jt(za,Ai);var hy=[];function Wb(t,e,n,r){Array.isArray(n)||(n&&(hy[0]=n.toString()),n=hy);for(var i=0;i<n.length;i++){var s=Lb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gb(t){mg(t.g,function(e,n){this.g.hasOwnProperty(n)&&yg(e)},t),t.g={}}za.prototype.N=function(){za.$.N.call(this),Gb(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ch(){this.g=!0}ch.prototype.Ea=function(){this.g=!1};function Fk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Uk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Bk(t,n)+(r?" "+r:"")})}function $k(t,e){t.info(function(){return"TIMEOUT: "+e})}ch.prototype.info=function(){};function Bk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wg(n)}catch{return e}}var _s={},fy=null;function uh(){return fy=fy||new Bt}_s.Ta="serverreachability";function zb(t){an.call(this,_s.Ta,t)}jt(zb,an);function Ya(t){const e=uh();Yt(e,new zb(e))}_s.STAT_EVENT="statevent";function Yb(t,e){an.call(this,_s.STAT_EVENT,t),this.stat=e}jt(Yb,an);function pn(t){const e=uh();Yt(e,new Yb(e,t))}_s.Ua="timingevent";function Xb(t,e){an.call(this,_s.Ua,t),this.size=e}jt(Xb,an);function _l(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Se.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sg(){}Sg.prototype.h=null;function dy(t){return t.h||(t.h=t.i())}function Jb(){}var wl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ig(){an.call(this,"d")}jt(Ig,an);function Cg(){an.call(this,"c")}jt(Cg,an);var Rd;function fh(){}jt(fh,Sg);fh.prototype.g=function(){return new XMLHttpRequest};fh.prototype.i=function(){return{}};Rd=new fh;function bl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new za(this),this.P=jk,t=bd?125:void 0,this.V=new lh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qb}function qb(){this.i=null,this.g="",this.h=!1}var jk=45e3,xd={},au={};te=bl.prototype;te.setTimeout=function(t){this.P=t};function Od(t,e,n){t.L=1,t.v=ph(Br(e)),t.s=n,t.S=!0,Zb(t,null)}function Zb(t,e){t.G=Date.now(),Tl(t),t.A=Br(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),aT(n.i,"t",r),t.C=0,n=t.l.I,t.h=new qb,t.g=RT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Lk(on(t.Pa,t,t.g),t.O)),Wb(t.U,t.g,"readystatechange",t.nb),e=t.I?kb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ya(),Fk(t.j,t.u,t.A,t.m,t.W,t.s)}te.nb=function(t){t=t.target;const e=this.M;e&&Pr(t)==3?e.l():this.Pa(t)};te.Pa=function(t){try{if(t==this.g)e:{const u=Pr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||bd||this.g&&(this.h.h||this.g.ja()||vy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ya(3):Ya(2)),dh(this);var n=this.g.da();this.aa=n;t:if(eT(this)){var r=vy(this.g);t="";var i=r.length,s=Pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),Ea(this);var o="";break t}this.h.i=new Se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Uk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!su(a)){var c=a;break t}}c=null}if(n=c)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nd(this,n);else{this.i=!1,this.o=3,pn(12),Hi(this),Ea(this);break e}}this.S?(tT(this,u,o),bd&&this.i&&u==3&&(Wb(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Nd(this,o)),u==4&&Hi(this),this.i&&!this.J&&(u==4?ST(this.l,this):(this.i=!1,Tl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pn(12)):(this.o=0,pn(13)),Hi(this),Ea(this)}}}catch{}finally{}};function eT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function tT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Vk(t,n),i==au){e==4&&(t.o=4,pn(14),r=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xd){t.o=4,pn(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ls(t.j,t.m,i,null),Nd(t,i);eT(t)&&i!=au&&i!=xd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dg(e),e.L=!0,pn(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),Hi(t),Ea(t))}te.mb=function(){if(this.g){var t=Pr(this.g),e=this.g.ja();this.C<e.length&&(dh(this),tT(this,t,e),this.i&&t!=4&&Tl(this))}};function Vk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?au:(n=Number(e.substring(n,r)),isNaN(n)?xd:(r+=1,r+n>e.length?au:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.J=!0,Hi(this)};function Tl(t){t.Y=Date.now()+t.P,nT(t,t.P)}function nT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_l(on(t.lb,t),e)}function dh(t){t.B&&(Se.clearTimeout(t.B),t.B=null)}te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($k(this.j,this.A),this.L!=2&&(Ya(),pn(17)),Hi(this),this.o=2,Ea(this)):nT(this,this.Y-t)};function Ea(t){t.l.H==0||t.J||ST(t.l,t)}function Hi(t){dh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,bg(t.V),Gb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Nd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pd(n.h,t))){if(!t.K&&Pd(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)uu(n),vh(n);else break e;Pg(n),pn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=_l(on(n.ib,n),6e3));if(1>=uT(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ki(n,11)}else if((t.K||n.g==t)&&uu(n),!su(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ag(s,s.h),s.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,mt(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=AT(r,r.I?r.oa:null,r.Y),o.K){hT(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(dh(a),Tl(a)),r.g=o}else bT(r);0<n.i.length&&yh(n)}else c[0]!="stop"&&c[0]!="close"||Ki(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ki(n,7):Ng(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Ya(4)}catch{}}function Hk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Kk(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Kk(t),r=Hk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var iT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qi){this.h=e!==void 0?e:t.h,lu(this,t.j),this.s=t.s,this.g=t.g,cu(this,t.m),this.l=t.l,e=t.i;var n=new Xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),py(this,n),this.o=t.o}else t&&(n=String(t).match(iT))?(this.h=!!e,lu(this,n[1]||"",!0),this.s=Jo(n[2]||""),this.g=Jo(n[3]||"",!0),cu(this,n[4]),this.l=Jo(n[5]||"",!0),py(this,n[6]||"",!0),this.o=Jo(n[7]||"")):(this.h=!!e,this.i=new Xa(null,this.h))}qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qo(e,gy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qo(e,gy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qo(n,n.charAt(0)=="/"?Yk:zk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qo(n,Qk)),t.join("")};function Br(t){return new qi(t)}function lu(t,e,n){t.j=n?Jo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function py(t,e,n){e instanceof Xa?(t.i=e,Jk(t.i,t.h)):(n||(e=qo(e,Xk)),t.i=new Xa(e,t.h))}function mt(t,e,n){t.i.set(e,n)}function ph(t){return mt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Gk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gy=/[#\/\?@]/g,zk=/[#\?:]/g,Yk=/[#\?]/g,Xk=/[#\?@]/g,Qk=/#/g;function Xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&Wk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=Xa.prototype;te.add=function(t,e){Ri(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sT(t,e){Ri(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function oT(t,e){return Ri(t),e=No(t,e),t.g.has(e)}te.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};te.sa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};te.Z=function(t){Ri(this);let e=[];if(typeof t=="string")oT(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return Ri(this),this.i=null,t=No(this,t),oT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function aT(t,e,n){sT(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),pg(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jk(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sT(this,r),aT(this,i,n))},t)),t.j=e}var qk=class{constructor(t,e){this.h=t,this.g=e}};function lT(t){this.l=t||Zk,Se.PerformanceNavigationTiming?(t=Se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Se.g&&Se.g.Ka&&Se.g.Ka()&&Se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zk=10;function cT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uT(t){return t.h?1:t.g?t.g.size:0}function Pd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ag(t,e){t.g?t.g.add(e):t.h=e}function hT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lT.prototype.cancel=function(){if(this.i=fT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pg(t.i)}function Rg(){}Rg.prototype.stringify=function(t){return Se.JSON.stringify(t,void 0)};Rg.prototype.parse=function(t){return Se.JSON.parse(t,void 0)};function eM(){this.g=new Rg}function tM(t,e,n){const r=n||"";try{rT(t,function(i,s){let o=i;yl(i)&&(o=wg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function nM(t,e){const n=new ch;if(Se.Image){const r=new Image;r.onload=ql(ec,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ql(ec,n,r,"TestLoadImage: error",!1,e),r.onabort=ql(ec,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ql(ec,n,r,"TestLoadImage: timeout",!1,e),Se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ec(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sl(t){this.l=t.fc||null,this.j=t.ob||!1}jt(Sl,Sg);Sl.prototype.g=function(){return new gh(this.l,this.j)};Sl.prototype.i=function(t){return function(){return t}}({});function gh(t,e){Bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}jt(gh,Bt);var xg=0;te=gh.prototype;te.open=function(t,e){if(this.readyState!=xg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qa(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Il(this)),this.readyState=xg};te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Il(this):Qa(this),this.readyState==3&&dT(this)}};te.Za=function(t){this.g&&(this.response=this.responseText=t,Il(this))};te.Ya=function(t){this.g&&(this.response=t,Il(this))};te.ka=function(){this.g&&Il(this)};function Il(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qa(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rM=Se.JSON.parse;function Rt(t){Bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pT,this.L=this.M=!1}jt(Rt,Bt);var pT="",iM=/^https?$/i,sM=["POST","PUT"];te=Rt.prototype;te.Oa=function(t){this.M=t};te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rd.g(),this.C=this.u?dy(this.u):dy(Rd),this.g.onreadystatechange=on(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){my(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Se.FormData&&t instanceof Se.FormData,!(0<=xb(sM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vT(this),0<this.B&&((this.L=oM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=on(this.ua,this)):this.A=Tg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){my(this,s)}};function oM(t){return ao&&Tk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.ua=function(){typeof dg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Yt(this,"timeout"),this.abort(8))};function my(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gT(t),mh(t)}function gT(t){t.F||(t.F=!0,Yt(t,"complete"),Yt(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Yt(this,"complete"),Yt(this,"abort"),mh(this))};te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mh(this,!0)),Rt.$.N.call(this)};te.La=function(){this.s||(this.G||this.v||this.l?mT(this):this.kb())};te.kb=function(){mT(this)};function mT(t){if(t.h&&typeof dg<"u"&&(!t.C[1]||Pr(t)!=4||t.da()!=2)){if(t.v&&Pr(t)==4)Tg(t.La,0,t);else if(Yt(t,"readystatechange"),Pr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(iT)[1]||null;if(!i&&Se.self&&Se.self.location){var s=Se.self.location.protocol;i=s.substr(0,s.length-1)}r=!iM.test(i?i.toLowerCase():"")}n=r}if(n)Yt(t,"complete"),Yt(t,"success");else{t.m=6;try{var o=2<Pr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",gT(t)}}finally{mh(t)}}}}function mh(t,e){if(t.g){vT(t);const n=t.g,r=t.C[0]?iu:null;t.g=null,t.C=null,e||Yt(t,"ready");try{n.onreadystatechange=r}catch{}}}function vT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Se.clearTimeout(t.A),t.A=null)}function Pr(t){return t.g?t.g.readyState:0}te.da=function(){try{return 2<Pr(this)?this.g.status:-1}catch{return-1}};te.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rM(e)}};function vy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ia=function(){return this.m};te.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yT(t){let e="";return mg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Og(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):mt(t,e,n))}function Vo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ET(t){this.Ga=0,this.i=[],this.j=new ch,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vo("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vo("baseRetryDelayMs",5e3,t),this.hb=Vo("retryDelaySeedMs",1e4,t),this.eb=Vo("forwardChannelMaxRetries",2,t),this.xa=Vo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new lT(t&&t.concurrentRequestLimit),this.Ja=new eM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}te=ET.prototype;te.qa=8;te.H=1;function Ng(t){if(_T(t),t.H==3){var e=t.W++,n=Br(t.G);mt(n,"SID",t.J),mt(n,"RID",e),mt(n,"TYPE","terminate"),Cl(t,n),e=new bl(t,t.j,e,void 0),e.L=2,e.v=ph(Br(n)),n=!1,Se.navigator&&Se.navigator.sendBeacon&&(n=Se.navigator.sendBeacon(e.v.toString(),"")),!n&&Se.Image&&(new Image().src=e.v,n=!0),n||(e.g=RT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Tl(e)}CT(t)}function vh(t){t.g&&(Dg(t),t.g.cancel(),t.g=null)}function _T(t){vh(t),t.u&&(Se.clearTimeout(t.u),t.u=null),uu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Se.clearTimeout(t.m),t.m=null)}function yh(t){cT(t.h)||t.m||(t.m=!0,Vb(t.Na,t),t.C=0)}function aM(t,e){return uT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_l(on(t.Na,t,e),IT(t,t.C)),t.C++,!0)}te.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new bl(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=kb(s),Mb(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wT(this,i,e),n=Br(this.G),mt(n,"RID",t),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),Cl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(yT(s)))+"&"+e:this.o&&Og(n,this.o,s)),Ag(this.h,i),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",e),mt(n,"SID","null"),i.ba=!0,Od(i,n,null)):Od(i,n,e),this.H=2}}else this.H==3&&(t?yy(this,t):this.i.length==0||cT(this.h)||yy(this))};function yy(t,e){var n;e?n=e.m:n=t.W++;const r=Br(t.G);mt(r,"SID",t.J),mt(r,"RID",n),mt(r,"AID",t.V),Cl(t,r),t.o&&t.s&&Og(r,t.o,t.s),n=new bl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=wT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ag(t.h,n),Od(n,r,e)}function Cl(t,e){t.ma&&mg(t.ma,function(n,r){mt(e,r,n)}),t.l&&rT({},function(n,r){mt(e,r,n)})}function wT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?on(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{tM(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function bT(t){t.g||t.u||(t.ba=1,Vb(t.Ma,t),t.A=0)}function Pg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_l(on(t.Ma,t),IT(t,t.A)),t.A++,!0)}te.Ma=function(){if(this.u=null,TT(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=_l(on(this.jb,this),t)}};te.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,pn(10),vh(this),TT(this))};function Dg(t){t.B!=null&&(Se.clearTimeout(t.B),t.B=null)}function TT(t){t.g=new bl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Br(t.wa);mt(e,"RID","rpc"),mt(e,"SID",t.J),mt(e,"CI",t.M?"0":"1"),mt(e,"AID",t.V),mt(e,"TYPE","xmlhttp"),Cl(t,e),t.o&&t.s&&Og(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ph(Br(e)),n.s=null,n.S=!0,Zb(n,t)}te.ib=function(){this.v!=null&&(this.v=null,vh(this),Pg(this),pn(19))};function uu(t){t.v!=null&&(Se.clearTimeout(t.v),t.v=null)}function ST(t,e){var n=null;if(t.g==e){uu(t),Dg(t),t.g=null;var r=2}else if(Pd(t.h,e))n=e.F,hT(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=uh(),Yt(r,new Xb(r,n)),yh(t)}else bT(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&aM(t,e)||r==2&&Pg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ki(t,5);break;case 4:Ki(t,10);break;case 3:Ki(t,6);break;default:Ki(t,2)}}}function IT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ki(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=on(t.pb,t);n||(n=new qi("//www.google.com/images/cleardot.gif"),Se.location&&Se.location.protocol=="http"||lu(n,"https"),ph(n)),nM(n.toString(),r)}else pn(2);t.H=0,t.l&&t.l.za(e),CT(t),_T(t)}te.pb=function(t){t?(this.j.info("Successfully pinged google.com"),pn(2)):(this.j.info("Failed to ping google.com"),pn(1))};function CT(t){if(t.H=0,t.pa=[],t.l){const e=fT(t.h);(e.length!=0||t.i.length!=0)&&(ay(t.pa,e),ay(t.pa,t.i),t.h.i.length=0,pg(t.i),t.i.length=0),t.l.ya()}}function AT(t,e,n){var r=n instanceof qi?Br(n):new qi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),cu(r,r.m);else{var i=Se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qi(null,void 0);r&&lu(s,r),e&&(s.g=e),i&&cu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&mt(r,n,e),mt(r,"VER",t.qa),Cl(t,r),r}function RT(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Rt(new Sl({ob:!0})):new Rt(t.va),e.Oa(t.I),e}function xT(){}te=xT.prototype;te.Ba=function(){};te.Aa=function(){};te.za=function(){};te.ya=function(){};te.Va=function(){};function hu(){if(ao&&!(10<=Number(Sk)))throw Error("Environmental error: no available transport.")}hu.prototype.g=function(t,e){return new Mn(t,e)};function Mn(t,e){Bt.call(this),this.g=new ET(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!su(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!su(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Po(this)}jt(Mn,Bt);Mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;pn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=AT(t,null,t.Y),yh(t)};Mn.prototype.close=function(){Ng(this.g)};Mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wg(t),t=n);e.i.push(new qk(e.fb++,t)),e.H==3&&yh(e)};Mn.prototype.N=function(){this.g.l=null,delete this.j,Ng(this.g),delete this.g,Mn.$.N.call(this)};function OT(t){Ig.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}jt(OT,Ig);function NT(){Cg.call(this),this.status=1}jt(NT,Cg);function Po(t){this.g=t}jt(Po,xT);Po.prototype.Ba=function(){Yt(this.g,"a")};Po.prototype.Aa=function(t){Yt(this.g,new OT(t))};Po.prototype.za=function(t){Yt(this.g,new NT)};Po.prototype.ya=function(){Yt(this.g,"b")};function lM(){this.blockSize=-1}function nr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}jt(nr,lM);nr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}nr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)hf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){hf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){hf(this,r),i=0;break}}this.h=i,this.i+=e};nr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function tt(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var cM={};function kg(t){return-128<=t&&128>t?Ob(cM,t,function(e){return new tt([e|0],0>e?-1:0)}):new tt([t|0],0>t?-1:0)}function cr(t){if(isNaN(t)||!isFinite(t))return zs;if(0>t)return Wt(cr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dd;return new tt(e,0)}function PT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Wt(PT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cr(Math.pow(e,8)),r=zs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=cr(Math.pow(e,s)),r=r.R(s).add(cr(o))):(r=r.R(n),r=r.add(cr(o)))}return r}var Dd=4294967296,zs=kg(0),kd=kg(1),Ey=kg(16777216);te=tt.prototype;te.ea=function(){if($n(this))return-Wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dd+r)*e,e*=Dd}return t};te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if($n(this))return"-"+Wt(this).toString(t);for(var e=cr(Math.pow(t,6)),n=this,r="";;){var i=du(n,e).g;n=fu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $n(t){return t.h==-1}te.X=function(t){return t=fu(this,t),$n(t)?-1:Dr(t)?0:1};function Wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new tt(n,~t.h).add(kd)}te.abs=function(){return $n(this)?Wt(this):this};te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new tt(n,n[n.length-1]&-2147483648?-1:0)};function fu(t,e){return t.add(Wt(e))}te.R=function(t){if(Dr(this)||Dr(t))return zs;if($n(this))return $n(t)?Wt(this).R(Wt(t)):Wt(Wt(this).R(t));if($n(t))return Wt(this.R(Wt(t)));if(0>this.X(Ey)&&0>t.X(Ey))return cr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,tc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,tc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,tc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,tc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new tt(n,0)};function tc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ho(t,e){this.g=t,this.h=e}function du(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Ho(zs,zs);if($n(t))return e=du(Wt(t),e),new Ho(Wt(e.g),Wt(e.h));if($n(e))return e=du(t,Wt(e)),new Ho(Wt(e.g),e.h);if(30<t.g.length){if($n(t)||$n(e))throw Error("slowDivide_ only works with positive integers.");for(var n=kd,r=e;0>=r.X(t);)n=_y(n),r=_y(r);var i=bs(n,1),s=bs(r,1);for(r=bs(r,2),n=bs(n,2);!Dr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=bs(r,1),n=bs(n,1)}return e=fu(t,i.R(e)),new Ho(i,e)}for(i=zs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=cr(n),o=s.R(e);$n(o)||0<o.X(t);)n-=r,s=cr(n),o=s.R(e);Dr(s)&&(s=kd),i=i.add(s),t=fu(t,o)}return new Ho(i,t)}te.gb=function(t){return du(this,t).h};te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new tt(n,this.h&t.h)};te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new tt(n,this.h|t.h)};te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new tt(n,this.h^t.h)};function _y(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new tt(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new tt(i,t.h)}hu.prototype.createWebChannel=hu.prototype.g;Mn.prototype.send=Mn.prototype.u;Mn.prototype.open=Mn.prototype.m;Mn.prototype.close=Mn.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;Qb.COMPLETE="complete";Jb.EventType=wl;wl.OPEN="a";wl.CLOSE="b";wl.ERROR="c";wl.MESSAGE="d";Bt.prototype.listen=Bt.prototype.O;Rt.prototype.listenOnce=Rt.prototype.P;Rt.prototype.getLastError=Rt.prototype.Sa;Rt.prototype.getLastErrorCode=Rt.prototype.Ia;Rt.prototype.getStatus=Rt.prototype.da;Rt.prototype.getResponseJson=Rt.prototype.Wa;Rt.prototype.getResponseText=Rt.prototype.ja;Rt.prototype.send=Rt.prototype.ha;Rt.prototype.setWithCredentials=Rt.prototype.Oa;nr.prototype.digest=nr.prototype.l;nr.prototype.reset=nr.prototype.reset;nr.prototype.update=nr.prototype.j;tt.prototype.add=tt.prototype.add;tt.prototype.multiply=tt.prototype.R;tt.prototype.modulo=tt.prototype.gb;tt.prototype.compare=tt.prototype.X;tt.prototype.toNumber=tt.prototype.ea;tt.prototype.toString=tt.prototype.toString;tt.prototype.getBits=tt.prototype.D;tt.fromNumber=cr;tt.fromString=PT;var uM=function(){return new hu},hM=function(){return uh()},ff=hh,fM=Qb,dM=_s,wy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pM=Sl,nc=Jb,gM=Rt,mM=nr,Ys=tt;const by="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new ll("@firebase/firestore");function Ty(){return fs.logLevel}function he(t,...e){if(fs.logLevel<=ze.DEBUG){const n=e.map(Mg);fs.debug(`Firestore (${Do}): ${t}`,...n)}}function jr(t,...e){if(fs.logLevel<=ze.ERROR){const n=e.map(Mg);fs.error(`Firestore (${Do}): ${t}`,...n)}}function lo(t,...e){if(fs.logLevel<=ze.WARN){const n=e.map(Mg);fs.warn(`Firestore (${Do}): ${t}`,...n)}}function Mg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function kt(t,e){t||Oe()}function Qe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Jt.UNAUTHENTICATED))}shutdown(){}}class yM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EM{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(kt(typeof r.accessToken=="string"),new DT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return kt(e===null||typeof e=="string"),new Jt(e)}}class _M{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new _M(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(kt(typeof n.token=="string"),this.T=n.token,new bM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Je(t,e){return t<e?-1:t>e?1:0}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Cn.fromMillis(Date.now())}static fromDate(e){return Cn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Cn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Je(this.nanoseconds,e.nanoseconds):Je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Cn(0,0))}static max(){return new Ce(new Cn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&Oe(),r===void 0?r=e.length-n:r>e.length-n&&Oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class It extends Ja{construct(e,n,r){return new It(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const CM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wn extends Ja{construct(e,n,r){return new wn(e,n,r)}static isValidIdentifier(e){return CM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ye(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ye(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ye(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wn(n)}static emptyPath(){return new wn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(It.fromString(e))}static fromName(e){return new Ee(It.fromString(e).popFirst(5))}static empty(){return new Ee(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new It(e.slice()))}}function AM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Cn(n+1,0):new Cn(n,r));return new bi(i,Ee.empty(),e)}function RM(t){return new bi(t.readTime,t.key,-1)}class bi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bi(Ce.min(),Ee.empty(),-1)}static max(){return new bi(Ce.max(),Ee.empty(),-1)}}function xM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ee.comparator(t.documentKey,e.documentKey),n!==0?n:Je(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==OM)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(i=>i?G.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new G((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new G((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Al(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Fg.ct=-1;function Eh(t){return t==null}function Md(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _h(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||Kt.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rc(this.root,e,this.comparator,!0)}}class rc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Kt.RED,this.left=i??Kt.EMPTY,this.right=s??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Kt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Kt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Oe();const e=this.left.check();if(e!==this.right.check())throw Oe();return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe()}get value(){throw Oe()}get color(){throw Oe()}get left(){throw Oe()}get right(){throw Oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Iy(this.data.getIterator())}getIteratorFrom(e){return new Iy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ln(this.comparator);return n.data=e,n}}class Iy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.fields=e,e.sort(wn.comparator)}static empty(){return new ai([])}unionWith(e){let n=new ln(wn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ai(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kT("Invalid base64 string: "+i):i}}(e);return new un(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new un(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}un.EMPTY_BYTE_STRING=new un("");const DM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(kt(!!t),typeof t=="string"){let e=0;const n=DM.exec(t);if(kt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?un.fromBase64String(t):un.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $g(t){const e=t.mapValue.fields.__previous_value__;return Ug(e)?$g(e):e}function qa(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Cn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ug(t)?4:MM(t)?9007199254740991:10:Oe()}function yr(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ti(r.timestampValue),o=Ti(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ds(r.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pt(r.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(r.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pt(r.integerValue)===Pt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pt(r.doubleValue),o=Pt(i.doubleValue);return s===o?Md(s)===Md(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Sy(s)!==Sy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yr(s[a],o[a])))return!1;return!0}(t,e);default:return Oe()}}function el(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return Je(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Je(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Pt(i.integerValue||i.doubleValue),a=Pt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(qa(t),qa(e));case 5:return Je(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ds(i),a=ds(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Je(o[l],a[l]);if(c!==0)return c}return Je(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Je(Pt(i.latitude),Pt(s.latitude));return o!==0?o:Je(Pt(i.longitude),Pt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=uo(o[l],a[l]);if(c)return c}return Je(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ic.mapValue&&s===ic.mapValue)return 0;if(i===ic.mapValue)return 1;if(s===ic.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Je(a[u],c[u]);if(h!==0)return h;const f=uo(o[a[u]],l[c[u]]);if(f!==0)return f}return Je(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Oe()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Je(t,e);const n=Ti(t),r=Ti(e),i=Je(n.seconds,r.seconds);return i!==0?i:Je(n.nanos,r.nanos)}function ho(t){return Ld(t)}function Ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ti(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ld(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ld(r.fields[a])}`;return s+"}"}(t.mapValue):Oe();var e,n}function Fd(t){return!!t&&"integerValue"in t}function Bg(t){return!!t&&"arrayValue"in t}function Ay(t){return!!t&&"nullValue"in t}function Ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function df(t){return!!t&&"mapValue"in t}function _a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _h(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.value=e}static empty(){return new ar({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!df(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=wn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());df(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];df(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_h(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ar(_a(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new en(e,0,Ce.min(),Ce.min(),Ce.min(),ar.empty(),0)}static newFoundDocument(e,n,r,i){return new en(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new en(e,2,n,Ce.min(),Ce.min(),ar.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,Ce.min(),Ce.min(),ar.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ar.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.position=e,this.inclusive=n}}function xy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Ee.comparator(Ee.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function LM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{}class Dt extends MT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UM(e,n,r):n==="array-contains"?new jM(e,r):n==="in"?new VM(e,r):n==="not-in"?new HM(e,r):n==="array-contains-any"?new KM(e,r):new Dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $M(e,r):new BM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(uo(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Er extends MT{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Er(e,n)}matches(e){return LT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function LT(t){return t.op==="and"}function FT(t){return FM(t)&&LT(t)}function FM(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function Ud(t){if(t instanceof Dt)return t.field.canonicalString()+t.op.toString()+ho(t.value);if(FT(t))return t.filters.map(e=>Ud(e)).join(",");{const e=t.filters.map(n=>Ud(n)).join(",");return`${t.op}(${e})`}}function UT(t,e){return t instanceof Dt?function(n,r){return r instanceof Dt&&n.op===r.op&&n.field.isEqual(r.field)&&yr(n.value,r.value)}(t,e):t instanceof Er?function(n,r){return r instanceof Er&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&UT(s,r.filters[o]),!0):!1}(t,e):void Oe()}function $T(t){return t instanceof Dt?function(e){return`${e.field.canonicalString()} ${e.op} ${ho(e.value)}`}(t):t instanceof Er?function(e){return e.op.toString()+" {"+e.getFilters().map($T).join(" ,")+"}"}(t):"Filter"}class UM extends Dt{constructor(e,n,r){super(e,n,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const n=Ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class $M extends Dt{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BM extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ee.fromName(r.referenceValue))}class jM extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bg(n)&&el(n.arrayValue,this.value)}}class VM extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class HM extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!el(this.value.arrayValue,n)}}class KM extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Ny(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WM(t,e,n,r,i,s,o)}function jg(t){const e=Qe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),e.ft=n}return e.ft}function Vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oy(t.startAt,e.startAt)&&Oy(t.endAt,e.endAt)}function $d(t){return Ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function GM(t,e,n,r,i,s,o,a){return new wh(t,e,n,r,i,s,o,a)}function Hg(t){return new wh(t)}function Py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function YM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function XM(t){return t.collectionGroup!==null}function Xs(t){const e=Qe(t);if(e.dt===null){e.dt=[];const n=YM(e),r=zM(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new wa(n)),e.dt.push(new wa(wn.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wa(wn.keyField(),s))}}}return e.dt}function Vr(t){const e=Qe(t);if(!e._t)if(e.limitType==="F")e._t=Ny(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Xs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new wa(s.field,o))}const r=e.endAt?new pu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new pu(e.startAt.position,e.startAt.inclusive):null;e._t=Ny(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Bd(t,e,n){return new wh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bh(t,e){return Vg(Vr(t),Vr(e))&&t.limitType===e.limitType}function jT(t){return`${jg(Vr(t))}|lt:${t.limitType}`}function jd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>$T(r)).join(", ")}]`),Eh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),`Target(${n})`}(Vr(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Xs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=xy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Xs(n),r)||n.endAt&&!function(i,s,o){const a=xy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Xs(n),r))}(t,e)}function QM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VT(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=JM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JM(t,e,n){const r=t.field.isKeyField()?Ee.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?uo(a,l):Oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_h(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PM(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=new xt(Ee.comparator);function Si(){return qM}const HT=new xt(Ee.comparator);function Zo(...t){let e=HT;for(const n of t)e=e.insert(n.key,n);return e}function ZM(t){let e=HT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return ba()}function KT(){return ba()}function ba(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const eL=new ln(Ee.comparator);function Ye(...t){let e=eL;for(const n of t)e=e.add(n);return e}const tL=new ln(Je);function nL(){return tL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Md(e)?"-0":e}}function iL(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function sL(t,e,n){return t instanceof Vd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ug(i)&&(i=$g(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof gu?WT(t,e):t instanceof mu?GT(t,e):function(r,i){const s=aL(r,i),o=Dy(s)+Dy(r.wt);return Fd(s)&&Fd(r.wt)?iL(o):rL(r.serializer,o)}(t,e)}function oL(t,e,n){return t instanceof gu?WT(t,e):t instanceof mu?GT(t,e):n}function aL(t,e){return t instanceof Hd?Fd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vd extends Sh{}class gu extends Sh{constructor(e){super(),this.elements=e}}function WT(t,e){const n=zT(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class mu extends Sh{constructor(e){super(),this.elements=e}}function GT(t,e){let n=zT(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class Hd extends Sh{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Dy(t){return Pt(t.integerValue||t.doubleValue)}function zT(t){return Bg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof gu&&r instanceof gu||n instanceof mu&&r instanceof mu?co(n.elements,r.elements,yr):n instanceof Hd&&r instanceof Hd?yr(n.wt,r.wt):n instanceof Vd&&r instanceof Vd}(t.transform,e.transform)}class Zi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zi}static exists(e){return new Zi(void 0,e)}static updateTime(e){return new Zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kg{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uL(t.key,Zi.none()):new Wg(t.key,t.data,Zi.none());{const n=t.data,r=ar.empty();let i=new ln(wn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ih(t.key,r,new ai(i.toArray()),Zi.none())}}function cL(t,e,n){t instanceof Wg?function(r,i,s){const o=r.value.clone(),a=My(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ih?function(r,i,s){if(!_c(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=My(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(XT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n,r){return t instanceof Wg?function(i,s,o,a){if(!_c(i.precondition,s))return o;const l=i.value.clone(),c=Ly(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ih?function(i,s,o,a){if(!_c(i.precondition,s))return o;const l=Ly(i.fieldTransforms,a,s),c=s.data;return c.setAll(XT(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return _c(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&co(n,r,(i,s)=>lL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wg extends Kg{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ih extends Kg{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function My(t,e,n){const r=new Map;kt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oL(o,a,n[i]))}return r}function Ly(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sL(s,o,e))}return r}class uL extends Kg{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=YT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ye())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>ky(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>ky(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,je;function QT(t){if(t===void 0)return jr("GRPC error has no .code"),Z.UNKNOWN;switch(t){case Ot.OK:return Z.OK;case Ot.CANCELLED:return Z.CANCELLED;case Ot.UNKNOWN:return Z.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return Z.INTERNAL;case Ot.UNAVAILABLE:return Z.UNAVAILABLE;case Ot.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Ot.NOT_FOUND:return Z.NOT_FOUND;case Ot.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Ot.ABORTED:return Z.ABORTED;case Ot.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Ot.DATA_LOSS:return Z.DATA_LOSS;default:return Oe()}}(je=Ot||(Ot={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sc}static getOrCreateInstance(){return sc===null&&(sc=new Gg),sc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let sc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=new Ys([4294967295,4294967295],0);function Fy(t){const e=pL().encode(t),n=new mM;return n.update(e),new Uint8Array(n.digest())}function Uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([i,s],0)]}class zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ea(`Invalid padding: ${n}`);if(r<0)throw new ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ea(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ea(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Ys.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Ys.fromNumber(r)));return i.compare(gL)===1&&(i=new Ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(Ce.min(),i,new xt(Je),Si(),Ye())}}class Rl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Rl(r,n,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class JT{constructor(e,n){this.targetId=e,this.bt=n}}class qT{constructor(e,n,r=un.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $y{constructor(){this.Vt=0,this.St=jy(),this.Dt=un.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Ye(),n=Ye(),r=Ye();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Oe()}}),new Rl(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=jy()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class mL{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Si(),this.jt=By(),this.zt=new xt(Je)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:Oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if($d(o))if(i===0){const a=new Ee(o.path);this.Jt(r,a,en.newNoDocument(a,Ce.min()))}else kt(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=Gg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=ds(s).toUint8Array()}catch(u){if(u instanceof kT)return lo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new zg(l,o,a)}catch(u){return lo(u instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:i!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&$d(a.target)){const l=new Ee(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,en.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Ye();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.zt,this.Qt,r);return this.Qt=Si(),this.jt=By(),this.zt=new xt(Je),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new $y,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ln(Je),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new $y),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function By(){return new xt(Ee.comparator)}function jy(){return new xt(Ee.comparator)}const vL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),EL=(()=>({and:"AND",or:"OR"}))();class _L{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kd(t,e){return t.useProto3Json||Eh(e)?e:{value:e}}function wL(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qs(t){return kt(!!t),Ce.fromTimestamp(function(e){const n=Ti(e);return new Cn(n.seconds,n.nanos)}(t))}function TL(t,e){return function(n){return new It(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ZT(t){const e=It.fromString(t);return kt(rS(e)),e}function pf(t,e){const n=ZT(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ee(eS(n))}function Wd(t,e){return TL(t.databaseId,e)}function SL(t){const e=ZT(t);return e.length===4?It.emptyPath():eS(e)}function Vy(t){return new It(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eS(t){return kt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function IL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(kt(c===void 0||typeof c=="string"),un.fromBase64String(c||"")):(kt(c===void 0||c instanceof Uint8Array),un.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?Z.UNKNOWN:QT(l.code);return new ye(c,l.message||"")}(o);n=new qT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pf(t,r.document.name),s=Qs(r.document.updateTime),o=r.document.createTime?Qs(r.document.createTime):Ce.min(),a=new ar({mapValue:{fields:r.document.fields}}),l=en.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new wc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pf(t,r.document),s=r.readTime?Qs(r.readTime):Ce.min(),o=en.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pf(t,r.document),s=r.removedTargetIds||[];n=new wc([],s,i,null)}else{if(!("filter"in e))return Oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dL(i,s),a=r.targetId;n=new JT(a,o)}}return n}function CL(t,e){return{documents:[Wd(t,e.path)]}}function AL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return nS(Er.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:xs(u.field),direction:OL(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Kd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function RL(t){let e=SL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){kt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=tS(u);return h instanceof Er&&FT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new wa(Os(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Eh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new pu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new pu(f,h)}(n.endAt)),GM(e,i,o,s,a,"F",l,c)}function xL(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Os(e.unaryFilter.field);return Dt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Os(e.unaryFilter.field);return Dt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(e.unaryFilter.field);return Dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Os(e.unaryFilter.field);return Dt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Oe()}}(t):t.fieldFilter!==void 0?function(e){return Dt.create(Os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Er.create(e.compositeFilter.filters.map(n=>tS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Oe()}}(e.compositeFilter.op))}(t):Oe()}function OL(t){return vL[t]}function NL(t){return yL[t]}function PL(t){return EL[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Os(t){return wn.fromServerFormat(t.fieldPath)}function nS(t){return t instanceof Dt?function(e){if(e.op==="=="){if(Ry(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NAN"}};if(Ay(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ry(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NAN"}};if(Ay(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(e.field),op:NL(e.op),value:e.value}}}(t):t instanceof Er?function(e){const n=e.getFilters().map(r=>nS(r));return n.length===1?n[0]:{compositeFilter:{op:PL(e.op),filters:n}}}(t):Oe()}function rS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=Ce.min(),o=Ce.min(),a=un.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.le=e}}function kL(t){const e=RL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(){this.sn=new LL}addToCollectionParentIndex(e,n){return this.sn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(bi.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class LL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ln(It.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ln(It.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new fo(0)}static kn(){return new fo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ta(r.mutation,i,ai.empty(),Cn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ye()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Si();const o=ba(),a=ba();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ih)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ta(u.mutation,c,u.mutation.getFieldMask(),Cn.now())):o.set(c.key,ai.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new UL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new xt((o,a)=>o-a),s=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ai.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||Ye()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=KT();u.forEach(f=>{if(!s.has(f)){const d=YT(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):G.resolve(Wi());let a=-1,l=s;return o.next(c=>G.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?G.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Ye())).next(u=>({batchId:a,changes:ZM(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ee(n)).next(r=>{let i=Zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Zo();return this.indexManager.getCollectionParents(e,i).next(o=>G.forEach(o,a=>{const l=function(c,u){return new wh(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,en.newInvalidDocument(c)))});let o=Zo();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Ta(c.mutation,l,ai.empty(),Cn.now()),Th(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return G.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Qs(r.createTime)}),G.resolve()}getNamedQuery(e,n){return G.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:kL(r.bundledQuery),readTime:Qs(r.readTime)}}(n)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.overlays=new xt(Ee.comparator),this.hs=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return G.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new Ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return G.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Wi(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return G.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fL(n,r));let s=this.hs.get(n);s===void 0&&(s=Ye(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.ls=new ln(Lt.fs),this.ds=new ln(Lt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Lt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Lt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new Ee(new It([])),r=new Lt(n,e),i=new Lt(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new Ee(new It([])),r=new Lt(n,e),i=new Lt(n,e+1);let s=Ye();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Lt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Lt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return Ee.comparator(e.key,n.key)||Je(e.Es,n.Es)}static _s(e,n){return Je(e.Es,n.Es)||Ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ln(Lt.fs)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Lt(n,0),i=new Lt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ln(Je);return n.forEach(i=>{const s=new Lt(i,0),o=new Lt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),G.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Ee.isDocumentKey(s)||(s=s.child(""));const o=new Lt(new Ee(s),0);let a=new ln(Je);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Es)),!0)},o),G.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){kt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return G.forEach(n.mutations,i=>{const s=new Lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Lt(n,0),i=this.Rs.firstAfterOrEqual(r);return G.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.Ss=e,this.docs=new xt(Ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=Si();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():en.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Si();const o=n.path,a=new Ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xM(RM(u),r)<=0||(i.has(u.key)||Th(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Oe()}Ds(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KL(this)}getSize(e){return G.resolve(this.size)}}class KL extends FL{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.persistence=e,this.Cs=new ko(n=>jg(n),Vg),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Yg,this.targetCount=0,this.ks=fo.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),G.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.$n(n),G.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Fg(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new WL(this),this.indexManager=new ML,this.remoteDocumentCache=function(r){return new HL(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new DL(n),this.Ls=new BL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new VL(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const i=new zL(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return G.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class zL extends NM{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.Gs=new Yg,this.Qs=null}static js(e){return new Xg(e)}get zs(){if(this.Qs)return this.Qs;throw Oe()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),G.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.zs,r=>{const i=Ee.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return G.or([()=>G.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=Ye(),i=Ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Py(n))return G.resolve(null);let r=Vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bd(n,null,"F"),r=Vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ye(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Bd(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,i){return Py(n)||i.isEqual(Ce.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Ty()<=ze.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jd(n)),this.zi(e,o,n,AM(i,-1)))})}Qi(e,n){let r=new ln(VT(e));return n.forEach((i,s)=>{Th(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Ty()<=ze.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",jd(n)),this.qi.getDocumentsMatchingQuery(e,n,bi.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new xt(Je),this.Ji=new ko(s=>jg(s),Vg),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $L(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function QL(t,e,n,r){return new XL(t,e,n,r)}async function iS(t,e){const n=Qe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ye();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function sS(t){const e=Qe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function JL(t,e){const n=Qe(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(un.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(s,d))});let l=Si(),c=Ye();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(qL(s,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(Ce.min())){const u=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return G.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Hi=i,s))}function qL(t,e,n){let r=Ye(),i=Ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Si();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):he("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:i}})}function ZL(t,e){const n=Qe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Gd(t,e,n){const r=Qe(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Al(o))throw o;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Hy(t,e,n){const r=Qe(t);let i=Ce.min(),s=Ye();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Qe(a),h=u.Ji.get(c);return h!==void 0?G.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(r,o,Vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:Ce.min(),n?s:Ye())).next(a=>(e2(r,QM(e),a),{documents:a,sr:s})))}function e2(t,e,n){let r=t.Yi.get(e)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Ky{constructor(){this.activeTargetIds=nL()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t2{constructor(){this.Wr=new Ky,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc=null;function gf(){return oc===null?oc=268435456+Math.round(2147483648*Math.random()):oc++,"0x"+oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class s2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=gf(),a=this.Io(e,n);he("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(c=>(he("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw lo("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Do,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=r2[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=gf();return new Promise((o,a)=>{const l=new gM;l.setWithCredentials(!0),l.listenOnce(fM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ff.NO_ERROR:const u=l.getResponseJson();he(Xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ff.TIMEOUT:he(Xt,`RPC '${e}' ${s} timed out`),a(new ye(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ff.HTTP_ERROR:const h=l.getStatus();if(he(Xt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(y)>=0?y:Z.UNKNOWN}(d.status);a(new ye(p,d.message))}else a(new ye(Z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ye(Z.UNAVAILABLE,"Connection failed."));break;default:Oe()}}finally{he(Xt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);he(Xt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const i=gf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uM(),a=hM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new pM({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");he(Xt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new i2({io:m=>{f?he(Xt,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(he(Xt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),he(Xt,`RPC '${e}' stream ${i} sending:`,m),u.send(m))},ro:()=>u.close()}),p=(m,y,v)=>{m.listen(y,g=>{try{v(g)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,nc.EventType.OPEN,()=>{f||he(Xt,`RPC '${e}' stream ${i} transport opened.`)}),p(u,nc.EventType.CLOSE,()=>{f||(f=!0,he(Xt,`RPC '${e}' stream ${i} transport closed`),d.fo())}),p(u,nc.EventType.ERROR,m=>{f||(f=!0,lo(Xt,`RPC '${e}' stream ${i} transport errored:`,m),d.fo(new ye(Z.UNAVAILABLE,"The operation could not be completed")))}),p(u,nc.EventType.MESSAGE,m=>{var y;if(!f){const v=m.data[0];kt(!!v);const g=v,E=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(E){he(Xt,`RPC '${e}' stream ${i} received error:`,E);const w=E.status;let T=function(x){const I=Ot[x];if(I!==void 0)return QT(I)}(w),S=E.message;T===void 0&&(T=Z.INTERNAL,S="Unknown error status: "+w+" with message "+E.message),f=!0,d.fo(new ye(T,S)),u.close()}else he(Xt,`RPC '${e}' stream ${i} received:`,v),d._o(v)}}),p(a,dM.STAT_EVENT,m=>{m.stat===wy.PROXY?he(Xt,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===wy.NOPROXY&&he(Xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function mf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){return new _L(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&he("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new aS(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new ye(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a2 extends o2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=IL(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?Qs(s.readTime):Ce.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Vy(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=$d(a)?{documents:CL(i,a)}:{query:AL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=bL(i,s.resumeToken);const l=Kd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=wL(i,s.snapshotVersion.toTimestamp());const l=Kd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=xL(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Vy(this.serializer),n.removeTarget=e,this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ye(Z.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ye(Z.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class c2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(jr(n),this.wu=!1):he("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Ol(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Qe(a);l.Au.add(4),await xl(l),l.Pu.set("Unknown"),l.Au.delete(4),await Ah(l)}(this))})}),this.Pu=new c2(r,i)}}async function Ah(t){if(Ol(t))for(const e of t.Ru)await e(!0)}async function xl(t){for(const e of t.Ru)await e(!1)}function lS(t,e){const n=Qe(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Zg(n)?qg(n):Mo(n).Uo()&&Jg(n,e))}function cS(t,e){const n=Qe(t),r=Mo(n);n.Eu.delete(e),r.Uo()&&uS(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Ol(n)&&n.Pu.set("Unknown"))}function Jg(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).nu(e)}function uS(t,e){t.bu.Lt(e),Mo(t).su(e)}function qg(t){t.bu=new mL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.Pu.mu()}function Zg(t){return Ol(t)&&!Mo(t).qo()&&t.Eu.size>0}function Ol(t){return Qe(t).Au.size===0}function hS(t){t.bu=void 0}async function h2(t){t.Eu.forEach((e,n)=>{Jg(t,e)})}async function f2(t,e){hS(t),Zg(t)?(t.Pu.pu(e),qg(t)):t.Pu.set("Unknown")}async function d2(t,e,n){if(t.Pu.set("Online"),e instanceof qT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gy(t,r)}else if(e instanceof wc?t.bu.Wt(e):e instanceof JT?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ce.min()))try{const r=await sS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(l);c&&i.Eu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(un.EMPTY_BYTE_STRING,c.snapshotVersion)),uS(i,a);const u=new li(c.target,a,l,c.sequenceNumber);Jg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){he("RemoteStore","Failed to raise snapshot:",r),await Gy(t,r)}}async function Gy(t,e,n){if(!Al(e))throw e;t.Au.add(1),await xl(t),t.Pu.set("Offline"),n||(n=()=>sS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Ah(t)})}async function zy(t,e){const n=Qe(t);n.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const r=Ol(n);n.Au.add(3),await xl(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Ah(n)}async function p2(t,e){const n=Qe(t);e?(n.Au.delete(2),await Ah(n)):e||(n.Au.add(2),await xl(n),n.Pu.set("Unknown"))}function Mo(t){return t.Vu||(t.Vu=function(e,n,r){const i=Qe(e);return i.lu(),new a2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:h2.bind(null,t),co:f2.bind(null,t),eu:d2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Zg(t)?qg(t):t.Pu.set("Unknown")):(await t.Vu.stop(),hS(t))})),t.Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new em(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fS(t,e){if(jr("AsyncQueue",`${e}: ${t}`),Al(t))return new ye(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ee.comparator(n.key,r.key):(n,r)=>Ee.comparator(n.key,r.key),this.keyedMap=Zo(),this.sortedSet=new xt(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Du=new xt(Ee.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Oe():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class po{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new po(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this.xu=void 0,this.listeners=[]}}class m2{constructor(){this.queries=new ko(e=>jT(e),bh),this.onlineState="Unknown",this.Nu=new Set}}async function dS(t,e){const n=Qe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new g2),i)try{s.xu=await n.onListen(r)}catch(o){const a=fS(o,`Initialization of query '${jd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&tm(n)}async function pS(t,e){const n=Qe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function v2(t,e){const n=Qe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&tm(n)}function y2(t,e,n){const r=Qe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function tm(t){t.Nu.forEach(e=>{e.next()})}class gS{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.key=e}}class vS{constructor(e){this.key=e}}class E2{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Ye(),this.mutatedKeys=Ye(),this.Zu=VT(e),this.tc=new Js(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Yy,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=Th(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.ic(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.Zu(d,l)>0||c&&this.Zu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe()}};return d(h)-d(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new po(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Yy,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Ye(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new vS(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new mS(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Ye();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return po.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class _2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w2{constructor(e){this.key=e,this.lc=!1}}class b2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ko(a=>jT(a),bh),this._c=new Map,this.wc=new Set,this.mc=new xt(Ee.comparator),this.gc=new Map,this.yc=new Yg,this.Ic={},this.Tc=new Map,this.Ec=fo.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function T2(t,e){const n=O2(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await ZL(n.localStore,Vr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await S2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&lS(n.remoteStore,o)}return i}async function S2(t,e,n,r,i){t.Rc=(h,f,d)=>async function(p,m,y,v){let g=m.view.nc(y);g.ji&&(g=await Hy(p.localStore,m.query,!1).then(({documents:T})=>m.view.nc(T,g)));const E=v&&v.targetChanges.get(m.targetId),w=m.view.applyChanges(g,p.isPrimaryClient,E);return Qy(p,m.targetId,w.uc),w.snapshot}(t,h,f,d);const s=await Hy(t.localStore,e,!0),o=new E2(e,s.sr),a=o.nc(s.documents),l=Rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Qy(t,n,c.uc);const u=new _2(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function I2(t,e){const n=Qe(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!bh(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cS(n.remoteStore,r.targetId),zd(n,r.targetId)}).catch(Lg)):(zd(n,r.targetId),await Gd(n.localStore,r.targetId,!0))}async function yS(t,e){const n=Qe(t);try{const r=await JL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(kt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?kt(o.lc):i.removedDocuments.size>0&&(kt(o.lc),o.lc=!1))}),await _S(n,r,e)}catch(r){await Lg(r)}}function Xy(t,e,n){const r=Qe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Qe(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&tm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C2(t,e,n){const r=Qe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new xt(Ee.comparator);o=o.insert(s,en.newNoDocument(s,Ce.min()));const a=Ye().add(s),l=new Ch(Ce.min(),new Map,new xt(Je),o,a);await yS(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),nm(r)}else await Gd(r.localStore,e,!1).then(()=>zd(r,e,n)).catch(Lg)}function zd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||ES(t,r)})}function ES(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(cS(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),nm(t))}function Qy(t,e,n){for(const r of n)r instanceof mS?(t.yc.addReference(r.key,e),A2(t,r)):r instanceof vS?(he("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||ES(t,r.key)):Oe()}function A2(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(he("SyncEngine","New document in limbo: "+n),t.wc.add(r),nm(t))}function nm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new Ee(It.fromString(e)),r=t.Ec.next();t.gc.set(r,new w2(n)),t.mc=t.mc.insert(n,r),lS(t.remoteStore,new li(Vr(Hg(n.path)),r,"TargetPurposeLimboResolution",Fg.ct))}}async function _S(t,e,n){const r=Qe(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Qg.Bi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const c=Qe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>G.forEach(l,h=>G.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>G.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Al(u))throw u;he("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Hi=c.Hi.insert(h,p)}}}(r.localStore,s))}async function R2(t,e){const n=Qe(t);if(!n.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const r=await iS(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new ye(Z.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _S(n,r.tr)}}function x2(t,e){const n=Qe(t),r=n.gc.get(e);if(r&&r.lc)return Ye().add(r.key);{let i=Ye();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function O2(t){const e=Qe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C2.bind(null,e),e.fc.eu=v2.bind(null,e.eventManager),e.fc.vc=y2.bind(null,e.eventManager),e}class Jy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oS(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QL(this.persistence,new YL,e.initialUser,this.serializer)}createPersistence(e){return new GL(Xg.js,this.serializer)}createSharedClientState(e){return new t2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R2.bind(null,this.syncEngine),await p2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new m2}createDatastore(e){const n=oS(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new s2(i));var i;return function(s,o,a,l){return new l2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Xy(this.syncEngine,a,0),o=Wy.D()?new Wy:new n2,new u2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new b2(r,i,s,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Qe(e);he("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await xl(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Jt.UNAUTHENTICATED,this.clientId=IM.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{he("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(he("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fS(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await k2(t);he("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>zy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>zy(e.remoteStore,s)),t._onlineComponents=e}function D2(t){return t.name==="FirebaseError"?t.code===Z.FAILED_PRECONDITION||t.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function k2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!D2(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new Jy)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new Jy);return t._offlineComponents}async function M2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await qy(t,t._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await qy(t,new N2))),t._onlineComponents}async function bS(t){const e=await M2(t),n=e.eventManager;return n.onListen=T2.bind(null,e.syncEngine),n.onUnlisten=I2.bind(null,e.syncEngine),n}function L2(t,e,n={}){const r=new gi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new wS({next:h=>{s.enqueueAndForget(()=>pS(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new ye(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new ye(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new gS(Hg(o.path),c,{includeMetadataChanges:!0,Uu:!0});return dS(i,u)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}function F2(t,e,n={}){const r=new gi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new wS({next:h=>{s.enqueueAndForget(()=>pS(i,u)),h.fromCache&&a.source==="server"?l.reject(new ye(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new gS(o,c,{includeMetadataChanges:!0,Uu:!0});return dS(i,u)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t,e,n){if(!n)throw new ye(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $2(t,e,n,r){if(e===!0&&r===!0)throw new ye(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eE(t){if(Ee.isDocumentKey(t))throw new ye(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B2(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe()}function tl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=B2(t);throw new ye(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vM;switch(n.type){case"firstParty":return new wM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ye(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zy.get(e);n&&(he("ComponentProvider","Removing Datastore"),Zy.delete(e),n.terminate())}(this),Promise.resolve()}}function j2(t,e,n,r={}){var i;const s=(t=tl(t,rm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&lo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Jt.MOCK_USER;else{o=D1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ye(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Jt(l)}t._authCredentials=new yM(new DT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xi(this.firestore,e,this._key)}}class Rh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rh(this.firestore,e,this._query)}}class qs extends Rh{constructor(e,n,r){super(e,n,Hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xi(this.firestore,null,new Ee(e))}withConverter(e){return new qs(this.firestore,e,this._path)}}function V2(t,e,...n){if(t=Ii(t),U2("collection","path",e),t instanceof rm){const r=It.fromString(e,...n);return eE(r),new qs(t,null,r)}{if(!(t instanceof xi||t instanceof qs))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(It.fromString(e,...n));return eE(r),new qs(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new aS(this,"async_queue_retry"),this.Yc=()=>{const n=mf();n&&he("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=mf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=mf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new gi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Al(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=em.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Oe()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class im extends rm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new H2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||SS(this),this._firestoreClient.terminate()}}function K2(t,e){const n=typeof t=="object"?t:Up(),r=typeof t=="string"?t:e||"(default)",i=Fp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=N1("firestore");s&&j2(i,...s)}return i}function TS(t){return t._firestoreClient||SS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function SS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new kM(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new P2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vu(un.fromBase64String(e))}catch(n){throw new ye(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vu(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Je(this._lat,e._lat)||Je(this._long,e._long)}}const G2=new RegExp("[~\\*/\\[\\]]");function z2(t,e,n){if(e.search(G2)>=0)throw nE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new IS(...e.split("."))._internalPath}catch{throw nE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nE(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ye(Z.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(AS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Y2 extends CS{data(){return super.data()}}function AS(t,e){return typeof e=="string"?z2(t,e):e instanceof IS?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Q2{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _h(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new W2(Pt(e.latitude),Pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new Cn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=It.fromString(e);kt(rS(r));const i=new Za(r.get(1),r.get(3)),s=new Ee(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RS extends CS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(AS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bc extends RS{data(e={}){return super.data(e)}}class J2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ta(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bc(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new bc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ta(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new bc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ta(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:q2(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function q2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){t=tl(t,xi);const e=tl(t.firestore,im);return L2(TS(e),t._key).then(n=>tF(e,t,n))}class xS extends Q2{constructor(e){super(),this.firestore=e}convertBytes(e){return new vu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xi(this.firestore,null,n)}}function eF(t){t=tl(t,Rh);const e=tl(t.firestore,im),n=TS(e),r=new xS(e);return X2(t._query),F2(n,t._query).then(i=>new J2(e,r,t,i))}function tF(t,e,n){const r=n.docs.get(e._key),i=new xS(t);return new RS(t,i,e._key,r,new ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Do=n})(Ci),mr(new tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new im(new EM(n.getProvider("auth-internal")),new TM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ye(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dn(by,"3.11.0",t),Dn(by,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebasestorage.googleapis.com",nF="storageBucket",rF=2*60*1e3,iF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Tr{constructor(e,n,r=0){super(yf(e),`Firebase Storage: ${n} (${yf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _r;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_r||(_r={}));function yf(t){return"storage/"+t}function sF(){const t="An unknown error occurred, please check the error payload for server response.";return new Sr(_r.UNKNOWN,t)}function oF(){return new Sr(_r.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function aF(){return new Sr(_r.CANCELED,"User canceled the upload/download.")}function lF(t){return new Sr(_r.INVALID_URL,"Invalid URL '"+t+"'.")}function cF(t){return new Sr(_r.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rE(t){return new Sr(_r.INVALID_ARGUMENT,t)}function NS(){return new Sr(_r.APP_DELETED,"The Firebase app was deleted.")}function uF(t){return new Sr(_r.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jn.makeFromUrl(e,n)}catch{return new Jn(e,"")}if(r.path==="")return r;throw cF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},m=n===OS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${y}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<E.length;w++){const T=E[w],S=T.regex.exec(e);if(S){const x=S[T.indices.bucket];let I=S[T.indices.path];I||(I=""),r=new Jn(x,I),T.postModify(r);break}}if(r==null)throw lF(e);return r}}class hF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function f(){s&&clearTimeout(s)}function d(y,...v){if(c){f();return}if(y){f(),u.call(null,y,...v);return}if(l()||o){f(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function m(y){p||(p=!0,f(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function dF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pF(t){return t!==void 0}function iE(t,e,n,r){if(r<e)throw rE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rE(`Invalid value for '${t}'. Expected ${n} or less.`)}function gF(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yu||(yu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e,n,r,i,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ac(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===yu.NO_ERROR,l=s.getStatus();if(!a||mF(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===yu.ABORT;r(!1,new ac(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ac(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());pF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?NS():aF();o(l)}else{const l=oF();o(l)}};this.canceled_?n(!1,new ac(!1,null,!0)):this.backoffId_=fF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _F(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bF(t,e,n,r,i,s,o=!0){const a=gF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return _F(c,e),yF(c,n),EF(c,s),wF(c,r),new vF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this._service=e,n instanceof Jn?this._location=n:this._location=Jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Eu(e,n)}get root(){const e=new Jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SF(this._location.path)}get storage(){return this._service}get parent(){const e=TF(this._location.path);if(e===null)return null;const n=new Jn(this._location.bucket,e);return new Eu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uF(e)}}function sE(t,e){const n=e==null?void 0:e[nF];return n==null?null:Jn.makeFromBucketSpec(n,t)}class IF{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=OS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rF,this._maxUploadRetryTime=iF,this._requests=new Set,i!=null?this._bucket=Jn.makeFromBucketSpec(i,this._host):this._bucket=sE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jn.makeFromBucketSpec(this._url,e):this._bucket=sE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new hF(NS());{const o=bF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oE="@firebase/storage",aE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CF="storage";function AF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new IF(n,r,i,e,Ci)}function RF(){mr(new tr(CF,AF,"PUBLIC").setMultipleInstances(!0)),Dn(oE,aE,""),Dn(oE,aE,"esm2017")}RF();function xF(t){return K2(vw(t))}function OF(t){return(e,n)=>{const r=IN(e,n).run(()=>hr(t));CN.set(e,r),RN(r,e)}}function NF(t,{firebaseApp:e,modules:n=[]}){t.provide(mw,e);for(const r of n)t.use(r.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof window<"u";function PF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const et=Object.assign;function Ef(t,e){const n={};for(const r in e){const i=e[r];n[r]=rr(i)?i.map(t):t(i)}return n}const Sa=()=>{},rr=Array.isArray,DF=/\/$/,kF=t=>t.replace(DF,"");function _f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=UF(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function MF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lE(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LF(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&go(e.matched[r],n.matched[i])&&PS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function go(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function PS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FF(t[n],e[n]))return!1;return!0}function FF(t,e){return rr(t)?cE(t,e):rr(e)?cE(e,t):t===e}function cE(t,e){return rr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var nl;(function(t){t.pop="pop",t.push="push"})(nl||(nl={}));var Ia;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ia||(Ia={}));function $F(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kF(t)}const BF=/^[^#]+#/;function jF(t,e){return t.replace(BF,"#")+e}function VF(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xh=()=>({left:window.pageXOffset,top:window.pageYOffset});function HF(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=VF(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uE(t,e){return(history.state?history.state.position-e:-1)+t}const Yd=new Map;function KF(t,e){Yd.set(t,e)}function WF(t){const e=Yd.get(t);return Yd.delete(t),e}let GF=()=>location.protocol+"//"+location.host;function DS(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),lE(l,"")}return lE(n,t)+r+i}function zF(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const d=DS(t,location),p=n.value,m=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=m?f.position-m.position:0}else r(d);i.forEach(v=>{v(n.value,p,{delta:y,type:nl.pop,direction:y?y>0?Ia.forward:Ia.back:Ia.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const p=i.indexOf(f);p>-1&&i.splice(p,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(et({},f.state,{scroll:xh()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function hE(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?xh():null}}function YF(t){const{history:e,location:n}=window,r={value:DS(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:GF()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=et({},e.state,hE(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=et({},i.value,e.state,{forward:l,scroll:xh()});s(u.current,u,!0);const h=et({},hE(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function XF(t){t=$F(t);const e=YF(t),n=zF(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=et({location:"",base:t,go:r,createHref:jF.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function QF(t){return typeof t=="string"||t&&typeof t=="object"}function kS(t){return typeof t=="string"||typeof t=="symbol"}const Qr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},MS=Symbol("");var fE;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fE||(fE={}));function mo(t,e){return et(new Error,{type:t,[MS]:!0},e)}function Ir(t,e){return t instanceof Error&&MS in t&&(e==null||!!(t.type&e))}const dE="[^/]+?",JF={sensitive:!1,strict:!1,start:!0,end:!0},qF=/[.+*?^${}()[\]/\\]/g;function ZF(t,e){const n=et({},JF,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(qF,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=f;s.push({name:p,repeatable:m,optional:y});const g=v||dE;if(g!==dE){d+=10;try{new RegExp(`(${g})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+w.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=s[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(rr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=rr(v)?v.join("/"):v;if(!g)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function eU(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tU(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=eU(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(pE(r))return 1;if(pE(i))return-1}return i.length-r.length}function pE(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nU={type:0,value:""},rU=/[a-zA-Z0-9_]/;function iU(t){if(!t)return[[]];if(t==="/")return[[nU]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:rU.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function sU(t,e,n){const r=ZF(iU(t.path),n),i=et(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function oU(t,e){const n=[],r=new Map;e=vE({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const d=!f,p=aU(u);p.aliasOf=f&&f.record;const m=vE(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of E)y.push(et({},p,{components:f?f.record.components:p.components,path:w,aliasOf:f?f.record:p}))}let v,g;for(const E of y){const{path:w}=E;if(h&&w[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";E.path=h.record.path+(w&&S+w)}if(v=sU(E,h,m),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!mE(v)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)s(T[S],v,f&&f.children[S])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:Sa}function o(u){if(kS(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!LS(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!mE(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw mo(1,{location:u});m=f.record.name,d=et(gE(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&gE(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw mo(1,{location:u,currentLocation:h});m=f.record.name,d=et({},h.params,u.params),p=f.stringify(d)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:cU(y)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function gE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function aU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function mE(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cU(t){return t.reduce((e,n)=>et(e,n.meta),{})}function vE(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function LS(t,e){return e.children.some(n=>n===t||LS(t,n))}const FS=/#/g,uU=/&/g,hU=/\//g,fU=/=/g,dU=/\?/g,US=/\+/g,pU=/%5B/g,gU=/%5D/g,$S=/%5E/g,mU=/%60/g,BS=/%7B/g,vU=/%7C/g,jS=/%7D/g,yU=/%20/g;function sm(t){return encodeURI(""+t).replace(vU,"|").replace(pU,"[").replace(gU,"]")}function EU(t){return sm(t).replace(BS,"{").replace(jS,"}").replace($S,"^")}function Xd(t){return sm(t).replace(US,"%2B").replace(yU,"+").replace(FS,"%23").replace(uU,"%26").replace(mU,"`").replace(BS,"{").replace(jS,"}").replace($S,"^")}function _U(t){return Xd(t).replace(fU,"%3D")}function wU(t){return sm(t).replace(FS,"%23").replace(dU,"%3F")}function bU(t){return t==null?"":wU(t).replace(hU,"%2F")}function _u(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TU(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(US," "),o=s.indexOf("="),a=_u(o<0?s:s.slice(0,o)),l=o<0?null:_u(s.slice(o+1));if(a in e){let c=e[a];rr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yE(t){let e="";for(let n in t){const r=t[n];if(n=_U(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rr(r)?r.map(s=>s&&Xd(s)):[r&&Xd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function SU(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const IU=Symbol(""),EE=Symbol(""),Oh=Symbol(""),om=Symbol(""),Qd=Symbol("");function Ko(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ei(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(mo(4,{from:n,to:e})):h instanceof Error?a(h):QF(h)?a(mo(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function wf(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(CU(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ei(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=PF(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ei(f,n,r,s,o)()}))}}return i}function CU(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _E(t){const e=In(Oh),n=In(om),r=_n(()=>e.resolve(lt(t.to))),i=_n(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(go.bind(null,u));if(f>-1)return f;const d=wE(l[c-2]);return c>1&&wE(u)===d&&h[h.length-1].path!==d?h.findIndex(go.bind(null,l[c-2])):f}),s=_n(()=>i.value>-1&&OU(n.params,r.value.params)),o=_n(()=>i.value>-1&&i.value===n.matched.length-1&&PS(n.params,r.value.params));function a(l={}){return xU(l)?e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(Sa):Promise.resolve()}return{route:r,href:_n(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const AU=gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_E,setup(t,{slots:e}){const n=ms(_E(t)),{options:r}=In(Oh),i=_n(()=>({[bE(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bE(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),RU=AU;function xU(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OU(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!rr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function wE(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bE=(t,e,n)=>t??e??n,NU=gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=In(Qd),i=_n(()=>t.route||r.value),s=In(EE,0),o=_n(()=>{let c=lt(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=_n(()=>i.value.matched[o.value]);la(EE,_n(()=>o.value+1)),la(IU,a),la(Qd,i);const l=hr();return zi(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!go(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return TE(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Wu(f,et({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return TE(n.default,{Component:y,route:c})||y}}});function TE(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VS=NU;function PU(t){const e=oU(t.routes,t),n=t.parseQuery||TU,r=t.stringifyQuery||yE,i=t.history,s=Ko(),o=Ko(),a=Ko(),l=r0(Qr);let c=Qr;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ef.bind(null,M=>""+M),h=Ef.bind(null,bU),f=Ef.bind(null,_u);function d(M,W){let H,ne;return kS(M)?(H=e.getRecordMatcher(M),ne=W):ne=M,e.addRoute(ne,H)}function p(M){const W=e.getRecordMatcher(M);W&&e.removeRoute(W)}function m(){return e.getRoutes().map(M=>M.record)}function y(M){return!!e.getRecordMatcher(M)}function v(M,W){if(W=et({},W||l.value),typeof M=="string"){const _=_f(n,M,W.path),b=e.resolve({path:_.path},W),N=i.createHref(_.fullPath);return et(_,b,{params:f(b.params),hash:_u(_.hash),redirectedFrom:void 0,href:N})}let H;if("path"in M)H=et({},M,{path:_f(n,M.path,W.path).path});else{const _=et({},M.params);for(const b in _)_[b]==null&&delete _[b];H=et({},M,{params:h(M.params)}),W.params=h(W.params)}const ne=e.resolve(H,W),me=M.hash||"";ne.params=u(f(ne.params));const Ke=MF(r,et({},M,{hash:EU(me),path:ne.path})),_e=i.createHref(Ke);return et({fullPath:Ke,hash:me,query:r===yE?SU(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:_e})}function g(M){return typeof M=="string"?_f(n,M,l.value.path):et({},M)}function E(M,W){if(c!==M)return mo(8,{from:W,to:M})}function w(M){return x(M)}function T(M){return w(et(g(M),{replace:!0}))}function S(M){const W=M.matched[M.matched.length-1];if(W&&W.redirect){const{redirect:H}=W;let ne=typeof H=="function"?H(M):H;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=g(ne):{path:ne},ne.params={}),et({query:M.query,hash:M.hash,params:"path"in ne?{}:M.params},ne)}}function x(M,W){const H=c=v(M),ne=l.value,me=M.state,Ke=M.force,_e=M.replace===!0,_=S(H);if(_)return x(et(g(_),{state:typeof _=="object"?et({},me,_.state):me,force:Ke,replace:_e}),W||H);const b=H;b.redirectedFrom=W;let N;return!Ke&&LF(r,ne,H)&&(N=mo(16,{to:b,from:ne}),ct(ne,ne,!0,!1)),(N?Promise.resolve(N):C(b,ne)).catch(F=>Ir(F)?Ir(F,2)?F:ke(F):Q(F,b,ne)).then(F=>{if(F){if(Ir(F,2))return x(et({replace:_e},g(F.to),{state:typeof F.to=="object"?et({},me,F.to.state):me,force:Ke}),W||b)}else F=L(b,ne,!0,_e,me);return P(b,ne,F),F})}function I(M,W){const H=E(M,W);return H?Promise.reject(H):Promise.resolve()}function C(M,W){let H;const[ne,me,Ke]=DU(M,W);H=wf(ne.reverse(),"beforeRouteLeave",M,W);for(const _ of ne)_.leaveGuards.forEach(b=>{H.push(ei(b,M,W))});const _e=I.bind(null,M,W);return H.push(_e),Ts(H).then(()=>{H=[];for(const _ of s.list())H.push(ei(_,M,W));return H.push(_e),Ts(H)}).then(()=>{H=wf(me,"beforeRouteUpdate",M,W);for(const _ of me)_.updateGuards.forEach(b=>{H.push(ei(b,M,W))});return H.push(_e),Ts(H)}).then(()=>{H=[];for(const _ of M.matched)if(_.beforeEnter&&!W.matched.includes(_))if(rr(_.beforeEnter))for(const b of _.beforeEnter)H.push(ei(b,M,W));else H.push(ei(_.beforeEnter,M,W));return H.push(_e),Ts(H)}).then(()=>(M.matched.forEach(_=>_.enterCallbacks={}),H=wf(Ke,"beforeRouteEnter",M,W),H.push(_e),Ts(H))).then(()=>{H=[];for(const _ of o.list())H.push(ei(_,M,W));return H.push(_e),Ts(H)}).catch(_=>Ir(_,8)?_:Promise.reject(_))}function P(M,W,H){for(const ne of a.list())ne(M,W,H)}function L(M,W,H,ne,me){const Ke=E(M,W);if(Ke)return Ke;const _e=W===Qr,_=Ns?history.state:{};H&&(ne||_e?i.replace(M.fullPath,et({scroll:_e&&_&&_.scroll},me)):i.push(M.fullPath,me)),l.value=M,ct(M,W,H,_e),ke()}let U;function k(){U||(U=i.listen((M,W,H)=>{if(!yt.listening)return;const ne=v(M),me=S(ne);if(me){x(et(me,{replace:!0}),ne).catch(Sa);return}c=ne;const Ke=l.value;Ns&&KF(uE(Ke.fullPath,H.delta),xh()),C(ne,Ke).catch(_e=>Ir(_e,12)?_e:Ir(_e,2)?(x(_e.to,ne).then(_=>{Ir(_,20)&&!H.delta&&H.type===nl.pop&&i.go(-1,!1)}).catch(Sa),Promise.reject()):(H.delta&&i.go(-H.delta,!1),Q(_e,ne,Ke))).then(_e=>{_e=_e||L(ne,Ke,!1),_e&&(H.delta&&!Ir(_e,8)?i.go(-H.delta,!1):H.type===nl.pop&&Ir(_e,20)&&i.go(-1,!1)),P(ne,Ke,_e)}).catch(Sa)}))}let O=Ko(),J=Ko(),B;function Q(M,W,H){ke(M);const ne=J.list();return ne.length?ne.forEach(me=>me(M,W,H)):console.error(M),Promise.reject(M)}function se(){return B&&l.value!==Qr?Promise.resolve():new Promise((M,W)=>{O.add([M,W])})}function ke(M){return B||(B=!M,k(),O.list().forEach(([W,H])=>M?H(M):W()),O.reset()),M}function ct(M,W,H,ne){const{scrollBehavior:me}=t;if(!Ns||!me)return Promise.resolve();const Ke=!H&&WF(uE(M.fullPath,0))||(ne||!H)&&history.state&&history.state.scroll||null;return To().then(()=>me(M,W,Ke)).then(_e=>_e&&HF(_e)).catch(_e=>Q(_e,M,W))}const $e=M=>i.go(M);let Pe;const ot=new Set,yt={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:w,replace:T,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:se,install(M){const W=this;M.component("RouterLink",RU),M.component("RouterView",VS),M.config.globalProperties.$router=W,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(l)}),Ns&&!Pe&&l.value===Qr&&(Pe=!0,w(i.location).catch(me=>{}));const H={};for(const me in Qr)H[me]=_n(()=>l.value[me]);M.provide(Oh,W),M.provide(om,ms(H)),M.provide(Qd,l);const ne=M.unmount;ot.add(M),M.unmount=function(){ot.delete(M),ot.size<1&&(c=Qr,U&&U(),U=null,l.value=Qr,Pe=!1,B=!1),ne()}}};return yt}function Ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function DU(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>go(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>go(c,l))||i.push(l))}return[n,r,i]}function kU(){return In(Oh)}function MU(){return In(om)}const LU=gn({__name:"App",setup(t){return(e,n)=>(qe(),jn(lt(VS)))}});const FU={apiKey:"AIzaSyAjt3RyE1KkK110jxZQUrm9kjfclWO126k",authDomain:"personal-website-c3482.firebaseapp.com",projectId:"personal-website-c3482",storageBucket:"personal-website-c3482.appspot.com",messagingSenderId:"110986644823",appId:"1:110986644823:web:4081c484521ba6b37bc212",measurementId:"G-PF7D6JKSC3"},UU=P_(FU);/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let HS;const Nh=t=>HS=t,KS=Symbol();function Jd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ca;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ca||(Ca={}));function $U(){const t=xu(!0),e=t.run(()=>hr({}));let n=[],r=[];const i=ns({install(s){Nh(i),i._a=s,s.provide(KS,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!qO?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const WS=()=>{};function SE(t,e,n,r=WS){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&up()&&HE(i),i}function Ss(t,...e){t.slice().forEach(n=>{n(...e)})}function qd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Jd(i)&&Jd(r)&&t.hasOwnProperty(n)&&!_t(r)&&!ur(r)?t[n]=qd(i,r):t[n]=r}return t}const BU=Symbol();function jU(t){return!Jd(t)||!t.hasOwnProperty(BU)}const{assign:qr}=Object;function VU(t){return!!(_t(t)&&t.effect)}function HU(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=s0(n.state.value[t]);return qr(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=ns(_n(()=>{Nh(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=GS(t,c,e,n,r,!0),l}function GS(t,e,n={},r,i,s){let o;const a=qr({actions:{}},n),l={deep:!0};let c,u,h=ns([]),f=ns([]),d;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),hr({});let m;function y(x){let I;c=u=!1,typeof x=="function"?(x(r.state.value[t]),I={type:Ca.patchFunction,storeId:t,events:d}):(qd(r.state.value[t],x),I={type:Ca.patchObject,payload:x,storeId:t,events:d});const C=m=Symbol();To().then(()=>{m===C&&(c=!0)}),u=!0,Ss(h,I,r.state.value[t])}const v=s?function(){const{state:I}=n,C=I?I():{};this.$patch(P=>{qr(P,C)})}:WS;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function E(x,I){return function(){Nh(r);const C=Array.from(arguments),P=[],L=[];function U(J){P.push(J)}function k(J){L.push(J)}Ss(f,{args:C,name:x,store:T,after:U,onError:k});let O;try{O=I.apply(this&&this.$id===t?this:T,C)}catch(J){throw Ss(L,J),J}return O instanceof Promise?O.then(J=>(Ss(P,J),J)).catch(J=>(Ss(L,J),Promise.reject(J))):(Ss(P,O),O)}}const w={_p:r,$id:t,$onAction:SE.bind(null,f),$patch:y,$reset:v,$subscribe(x,I={}){const C=SE(h,x,I.detached,()=>P()),P=o.run(()=>zi(()=>r.state.value[t],L=>{(I.flush==="sync"?u:c)&&x({storeId:t,type:Ca.direct,events:d},L)},qr({},l,I)));return C},$dispose:g},T=ms(w);r._s.set(t,T);const S=r._e.run(()=>(o=xu(),o.run(()=>e())));for(const x in S){const I=S[x];if(_t(I)&&!VU(I)||ur(I))s||(p&&jU(I)&&(_t(I)?I.value=p[x]:qd(I,p[x])),r.state.value[t][x]=I);else if(typeof I=="function"){const C=E(x,I);S[x]=C,a.actions[x]=I}}return qr(T,S),qr(De(T),S),Object.defineProperty(T,"$state",{get:()=>r.state.value[t],set:x=>{y(I=>{qr(I,x)})}}),r._p.forEach(x=>{qr(T,o.run(()=>x({store:T,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(T.$state,p),c=!0,u=!0,T}function KU(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=br();return a=a||c&&In(KS,null),a&&Nh(a),a=HS,a._s.has(r)||(s?GS(r,e,i,a):HU(r,i,a)),a._s.get(r)}return o.$id=r,o}function zS(t){{t=De(t);const e={};for(const n in t){const r=t[n];(_t(r)||ur(r))&&(e[n]=yp(t,n))}return e}}const IE=(t,e)=>{const n=t.storage||sessionStorage,r=t.key||e.$id;if(t.paths){const i=t.paths.reduce((s,o)=>(s[o]=e.$state[o],s),{});n.setItem(r,JSON.stringify(i))}else n.setItem(r,JSON.stringify(e.$state))};var WU=({options:t,store:e})=>{var n,r,i,s;if((n=t.persist)!=null&&n.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(i=(r=t.persist)==null?void 0:r.strategies)!=null&&i.length?(s=t.persist)==null?void 0:s.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),IE(l,e))}),e.$subscribe(()=>{a.forEach(l=>{IE(l,e)})})}};const YS=$U();YS.use(WU);const GU={class:"group/bubble bg-gray-700 bg-opacity-50 rounded-3xl shadow-md p-10 hover:bg-opacity-30"},zU=["href"],YU={class:"text-2xl group-hover/bubble:underline font-bold mb-2"},XU={key:1,class:"text-2xl font-bold mb-2"},QU={class:"text-gray-400 mb-2"},am=gn({__name:"Bubble",props:{name:null,url:null,description:null,buttonText:null},setup(t){return(e,n)=>(qe(),Ft("div",GU,[t.url?(qe(),Ft("a",{key:0,href:t.url},[nt("h2",YU,dn(t.name),1)],8,zU)):(qe(),Ft("h2",XU,dn(t.name),1)),nt("p",QU,dn(t.description),1),ua(e.$slots,"default")]))}}),lm=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},JU={},qU={class:"bg-black text-white shadow-md py-4"},ZU={class:"container mx-auto text-center"};function e4(t,e){return qe(),Ft("footer",qU,[nt("div",ZU,[nt("p",null,"© "+dn(new Date().getFullYear())+" Sander Derks. All rights reserved.",1)])])}const t4=lm(JU,[["render",e4]]),XS={name:"Vue-Tailwind",role:"Software Testing",service:"Tailwind Exploration",avatarUrl:"https://freepngimg.com/thumb/duck/29-duck-png-image.png",location:{country:"The Netherlands",city:"Arnhem"},description:["Welcome to this website!","This will be an amazing experience."],websites:[]},n4=[{name:"Block 1",description:"Loading...",technologies:[]},{name:"Block 2",description:"Loading...",technologies:[]},{name:"Block 3",description:"Loading...",technologies:[]}],r4=[{name:"Link 1",url:"#"},{name:"Link 2",url:"#"},{name:"Link 3",url:"#"}],i4=xF(),QS=KU("main",{state:()=>({profile:XS,menuItems:r4,projects:n4,fetched:!0}),actions:{async fetchData(t){const e=await eF(V2(i4,t));return Promise.all(e.docs.map(async n=>{const r=n.data(),i=Object.entries(r).filter(([,s])=>s instanceof Array&&s[0]instanceof xi);if(i.length){const s=i.map(async([a,l])=>{const u=(await Promise.all(l.map(h=>Z2(h)))).map(h=>h.data());return{[a]:u}}),o=await Promise.all(s);return{...r,...o.reduce((a,l)=>({...a,...l}),{})}}else return r}))},async fetchAll(){(!this.fetched||!this.projects.length||!this.menuItems.length)&&setTimeout(async()=>{await Promise.all([this.fetchProjects(),this.fetchMenuItems()])},1e3*3),this.fetched=!0},async fetchProjects(){this.projects=await this.fetchData("projects")},async fetchMenuItems(){this.menuItems=await this.fetchData("dropdownItems")},moveProject(t,e){const n=this.projects.splice(t,1)[0];this.projects.splice(e,0,n)}},persist:{enabled:!0}});var s4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function o4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function JS(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}const Nl=JS(b1),{createElementVNode:CE,openBlock:a4,createElementBlock:l4}=Nl;var c4=function(e,n){return a4(),l4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[CE("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),CE("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})])};const{createElementVNode:u4,openBlock:h4,createElementBlock:f4}=Nl;var d4=function(e,n){return h4(),f4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[u4("path",{"fill-rule":"evenodd",d:"M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z","clip-rule":"evenodd"})])};const{createElementVNode:p4,openBlock:g4,createElementBlock:m4}=Nl;var v4=function(e,n){return g4(),m4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[p4("path",{"fill-rule":"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z","clip-rule":"evenodd"})])};const{createElementVNode:y4,openBlock:E4,createElementBlock:_4}=Nl;var w4=function(e,n){return E4(),_4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[y4("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])},b4=c4,T4=d4,S4=v4,I4=w4;const C4={class:"lg:flex lg:items-center lg:justify-between"},A4={class:"min-w-0 flex-1"},R4=["src","alt"],x4={class:"text-5xl font-bold"},O4={class:"text-3xl font-bold text-gray-100"},N4={class:"mt-1 flex flex-col sm:mt-0 xl:flex-row xl:flex-wrap xl:space-x-6"},P4={class:"mt-2 flex items-center text-xl text-gray-500"},D4={class:"mt-2 flex items-center text-xl text-gray-500"},k4={class:"grid grid-cols-5 lg:w-1/2 justify-stretch bg-black bg-opacity-50 text-indigo-300 rounded-3xl mt-8 lg:mt-0 p-8"},M4={class:"col-span-5 md:col-span-4 space-y-2"},L4={class:"hidden md:visible col-span-5 md:col-span-1 md:flex items-center justify-center md:justify-end"},F4={key:0,class:"col-span-5 flex items-center justify-between md:justify-around mt-4 gap-3 flex-wrap"},U4=["onClick"],$4={class:"flex justify-center"},B4={class:"md:hidden absolute z-20 w-3/4 left-1/2 transform -translate-x-1/2 mt-2 p-4 bg-gray-800 border border-indigo-600 divide-y divide-indigo-600 divide-opacity-50 rounded-xl"},j4=["href"],V4=gn({__name:"Header",setup(t){const{profile:e,menuItems:n}=zS(QS()),r=kU(),i=hr(),s=hr(!1),o=()=>{s.value=!s.value,s.value&&To(()=>{var a;(a=i.value)==null||a.scrollIntoView({behavior:"smooth",block:"center"})})};return(a,l)=>{const c=C0("RouterLink");return qe(),Ft("div",C4,[nt("div",A4,[Le(c,{to:{name:"home"}},{default:Zn(()=>[nt("img",{class:"w-48 h-48 rounded-full transition duration-300 ease-in-out hover:scale-110 mb-4 cursor-pointer",src:lt(e).avatarUrl,alt:lt(e).name},null,8,R4)]),_:1}),nt("h1",x4,dn(lt(e).name),1),nt("h2",O4,dn(lt(e).service),1),nt("div",N4,[nt("div",P4,[Le(lt(b4),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),ji(" "+dn(lt(e).role),1)]),nt("div",D4,[Le(lt(S4),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),ji(" "+dn(lt(e).location.city)+", "+dn(lt(e).location.country),1)])])]),nt("div",k4,[nt("div",M4,[(qe(!0),Ft(St,null,ca(lt(e).description,(u,h)=>(qe(),Ft("p",{class:Eo(h===0?"font-bold text-lg":"font-semibold text-base")},dn(u),3))),256))]),nt("div",L4,[Le(c,{to:{name:"login"}},{default:Zn(()=>[Le(lt(I4),{class:"w-16 h-16 rounded-full border-2 text-indigo-600 border-indigo-600 transition duration-300 ease-in-out hover:scale-110","aria-hidden":"true"})]),_:1})]),lt(n).length?(qe(),Ft("div",F4,[(qe(!0),Ft(St,null,ca(lt(n),u=>(qe(),Ft("button",{type:"button",class:"hidden md:inline-block px-4 py-2 border rounded-full border-indigo-600 hover:bg-indigo-800 hover:bg-opacity-50 hover:text-white active:bg-indigo-900 active:text-white transition duration-300 ease-in-out",onClick:h=>lt(r).push(u.url)},dn(u.name),9,U4))),256)),nt("div",{ref_key:"dropdown",ref:i,class:"dropdown w-full"},[nt("button",{type:"button",class:"md:hidden w-full px-4 py-2 border rounded-full border-indigo-600 hover:bg-indigo-800 hover:bg-opacity-50 hover:text-white active:bg-indigo-900 active:text-white transition duration-300 ease-in-out",onClick:o},[nt("div",$4,[Le(lt(T4),{class:"mt-0.5 mr-2.5 h-5 w-5 flex-shrink-0","aria-hidden":"true"}),ji(" Menu ")])]),Lf(nt("div",{class:"w-screen h-screen z-10 bg-gray-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-in-out",onClick:l[0]||(l[0]=u=>s.value=!1)},null,512),[[Uc,s.value]]),Lf(nt("div",B4,[(qe(!0),Ft(St,null,ca(lt(n),u=>(qe(),Ft("a",{href:u.url,class:"block text-lg text-center px-4 py-2 bg-gray-900 hover:bg-indigo-800 hover:bg-opacity-50 hover:text-white transition duration-300 ease-in-out first:rounded-t-xl",onClick:l[1]||(l[1]=h=>s.value=!1)},dn(u.name),9,j4))),256)),Le(c,{to:{name:"login"},class:"block text-lg text-center px-4 py-2 bg-gray-900 text-red-600 border-red-600 hover:bg-red-800 hover:bg-opacity-50 hover:text-white transition duration-300 ease-in-out rounded-b-xl first:rounded-t-xl"},{default:Zn(()=>[ji(" Login ")]),_:1})],512),[[Uc,s.value]])],512)])):K0("",!0)])])}}}),H4={class:"min-h-screen bg-gradient-to-t from-black to-blue-900 via-gray-800"},K4={class:"mx-0 sm:mx-16 p-5 sm:p-14 rounded-bl-3xl rounded-br-3xl text-white bg-blue-gray-900 bg-opacity-50 bg-gradient-to-b from-transparent to-black via-purple-900 border-opacity-100"},cm=gn({__name:"Page",setup(t){return document.title=MU().meta.title||Rc,(e,n)=>(qe(),Ft(St,null,[nt("div",H4,[nt("div",K4,[nt("header",null,[e.$slots.header?ua(e.$slots,"header",{key:0}):(qe(),jn(V4,{key:1}))]),nt("main",null,[ua(e.$slots,"content")])])]),nt("footer",null,[e.$slots.footer?ua(e.$slots,"footer",{key:0}):(qe(),jn(t4,{key:1}))])],64))}}),W4=gn({__name:"Login",setup(t){return(e,n)=>(qe(),jn(cm,null,{content:Zn(()=>[Le(am,{class:"bg-blue-800 bg-opacity-50 hover:bg-opacity-50 mt-5 mb-5",name:"Login",description:"Please login using your username and password."})]),_:1}))}});var Zd={},G4={get exports(){return Zd},set exports(t){Zd=t}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function AE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?AE(Object(n),!0).forEach(function(r){z4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):AE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Tc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Tc=function(e){return typeof e}:Tc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tc(t)}function z4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hn(){return Hn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hn.apply(this,arguments)}function Y4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function X4(t,e){if(t==null)return{};var n=Y4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Q4(t){return J4(t)||q4(t)||Z4(t)||e$()}function J4(t){if(Array.isArray(t))return ep(t)}function q4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Z4(t,e){if(t){if(typeof t=="string")return ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ep(t,e)}}function ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t$="1.14.0";function Lr(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Wr=Lr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pl=Lr(/Edge/i),RE=Lr(/firefox/i),Aa=Lr(/safari/i)&&!Lr(/chrome/i)&&!Lr(/android/i),qS=Lr(/iP(ad|od|hone)/i),n$=Lr(/chrome/i)&&Lr(/android/i),ZS={capture:!1,passive:!1};function Me(t,e,n){t.addEventListener(e,n,!Wr&&ZS)}function Ne(t,e,n){t.removeEventListener(e,n,!Wr&&ZS)}function wu(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function r$(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Gn(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&wu(t,e):wu(t,e))||r&&t===n)return t;if(t===n)break}while(t=r$(t))}return null}var xE=/\s+/g;function Et(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(xE," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(xE," ")}}function oe(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function es(t,e){var n="";if(typeof t=="string")n=t;else do{var r=oe(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function eI(t,e,n){if(t){var r=t.getElementsByTagName(e),i=0,s=r.length;if(n)for(;i<s;i++)n(r[i],i);return r}return[]}function pr(){var t=document.scrollingElement;return t||document.documentElement}function gt(t,e,n,r,i){if(!(!t.getBoundingClientRect&&t!==window)){var s,o,a,l,c,u,h;if(t!==window&&t.parentNode&&t!==pr()?(s=t.getBoundingClientRect(),o=s.top,a=s.left,l=s.bottom,c=s.right,u=s.height,h=s.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!Wr))do if(i&&i.getBoundingClientRect&&(oe(i,"transform")!=="none"||n&&oe(i,"position")!=="static")){var f=i.getBoundingClientRect();o-=f.top+parseInt(oe(i,"border-top-width")),a-=f.left+parseInt(oe(i,"border-left-width")),l=o+s.height,c=a+s.width;break}while(i=i.parentNode);if(r&&t!==window){var d=es(i||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,h/=p,u/=m,l=o+u,c=a+h)}return{top:o,left:a,bottom:l,right:c,width:h,height:u}}}function OE(t,e,n){for(var r=ci(t,!0),i=gt(t)[e];r;){var s=gt(r)[n],o=void 0;if(n==="top"||n==="left"?o=i>=s:o=i<=s,!o)return r;if(r===pr())break;r=ci(r,!1)}return!1}function vo(t,e,n,r){for(var i=0,s=0,o=t.children;s<o.length;){if(o[s].style.display!=="none"&&o[s]!==ve.ghost&&(r||o[s]!==ve.dragged)&&Gn(o[s],n.draggable,t,!1)){if(i===e)return o[s];i++}s++}return null}function um(t,e){for(var n=t.lastElementChild;n&&(n===ve.ghost||oe(n,"display")==="none"||e&&!wu(n,e));)n=n.previousElementSibling;return n||null}function Tt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==ve.clone&&(!e||wu(t,e))&&n++;return n}function NE(t){var e=0,n=0,r=pr();if(t)do{var i=es(t),s=i.a,o=i.d;e+=t.scrollLeft*s,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function i$(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function ci(t,e){if(!t||!t.getBoundingClientRect)return pr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=oe(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return pr();if(r||e)return n;r=!0}}while(n=n.parentNode);return pr()}function s$(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function bf(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ra;function tI(t,e){return function(){if(!Ra){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),Ra=setTimeout(function(){Ra=void 0},e)}}}function o$(){clearTimeout(Ra),Ra=void 0}function nI(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function hm(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function PE(t,e){oe(t,"position","absolute"),oe(t,"top",e.top),oe(t,"left",e.left),oe(t,"width",e.width),oe(t,"height",e.height)}function Tf(t){oe(t,"position",""),oe(t,"top",""),oe(t,"left",""),oe(t,"width",""),oe(t,"height","")}var nn="Sortable"+new Date().getTime();function a$(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(i){if(!(oe(i,"display")==="none"||i===ve.ghost)){t.push({target:i,rect:gt(i)});var s=wr({},t[t.length-1].rect);if(i.thisAnimationDuration){var o=es(i,!0);o&&(s.top-=o.f,s.left-=o.e)}i.fromRect=s}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(i$(t,{target:r}),1)},animateAll:function(r){var i=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var s=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,h=gt(c),f=c.prevFromRect,d=c.prevToRect,p=a.rect,m=es(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&bf(f,h)&&!bf(u,h)&&(p.top-h.top)/(p.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(l=c$(p,f,d,i.options)),bf(h,u)||(c.prevFromRect=u,c.prevToRect=h,l||(l=i.options.animation),i.animate(c,p,h,l)),l&&(s=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),s?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,i,s,o){if(o){oe(r,"transition",""),oe(r,"transform","");var a=es(this.el),l=a&&a.a,c=a&&a.d,u=(i.left-s.left)/(l||1),h=(i.top-s.top)/(c||1);r.animatingX=!!u,r.animatingY=!!h,oe(r,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=l$(r),oe(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),oe(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){oe(r,"transition",""),oe(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function l$(t){return t.offsetWidth}function c$(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var Is=[],Sf={initializeByDefault:!0},Dl={mount:function(e){for(var n in Sf)Sf.hasOwnProperty(n)&&!(n in e)&&(e[n]=Sf[n]);Is.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Is.push(e)},pluginEvent:function(e,n,r){var i=this;this.eventCanceled=!1,r.cancel=function(){i.eventCanceled=!0};var s=e+"Global";Is.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][s]&&n[o.pluginName][s](wr({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](wr({sortable:n},r)))})},initializePlugins:function(e,n,r,i){Is.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,Hn(r,c.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var o=this.modifyOption(e,s,e.options[s]);typeof o<"u"&&(e.options[s]=o)}},getEventProperties:function(e,n){var r={};return Is.forEach(function(i){typeof i.eventProperties=="function"&&Hn(r,i.eventProperties.call(n[i.pluginName],e))}),r},modifyOption:function(e,n,r){var i;return Is.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[n]=="function"&&(i=s.optionListeners[n].call(e[s.pluginName],r))}),i}};function na(t){var e=t.sortable,n=t.rootEl,r=t.name,i=t.targetEl,s=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,h=t.newDraggableIndex,f=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[nn],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Wr&&!Pl?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=i||n,m.clone=s,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=d?d.lastPutMode:void 0;var g=wr(wr({},p),Dl.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var u$=["evt"],vn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.evt,s=X4(r,u$);Dl.pluginEvent.bind(ve)(e,n,wr({dragEl:X,parentEl:wt,ghostEl:xe,rootEl:pt,nextEl:Fi,lastDownEl:Sc,cloneEl:bt,cloneHidden:oi,dragStarted:ra,putSortable:Vt,activeSortable:ve.active,originalEvent:i,oldIndex:Fs,oldDraggableIndex:xa,newIndex:xn,newDraggableIndex:ti,hideGhostForTarget:oI,unhideGhostForTarget:aI,cloneNowHidden:function(){oi=!0},cloneNowShown:function(){oi=!1},dispatchSortableEvent:function(a){fn({sortable:n,name:a,originalEvent:i})}},s))};function fn(t){na(wr({putSortable:Vt,cloneEl:bt,targetEl:X,rootEl:pt,oldIndex:Fs,oldDraggableIndex:xa,newIndex:xn,newDraggableIndex:ti},t))}var X,wt,xe,pt,Fi,Sc,bt,oi,Fs,xn,xa,ti,lc,Vt,Ps=!1,bu=!1,Tu=[],Pi,Kn,If,Cf,DE,kE,ra,Cs,Oa,Na=!1,cc=!1,Ic,Qt,Af=[],tp=!1,Su=[],Ph=typeof document<"u",uc=qS,ME=Pl||Wr?"cssFloat":"float",h$=Ph&&!n$&&!qS&&"draggable"in document.createElement("div"),rI=function(){if(Ph){if(Wr)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),iI=function(e,n){var r=oe(e),i=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),s=vo(e,0,n),o=vo(e,1,n),a=s&&oe(s),l=o&&oe(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+gt(s).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+gt(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return s&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=i&&r[ME]==="none"||o&&r[ME]==="none"&&c+u>i)?"vertical":"horizontal"},f$=function(e,n,r){var i=r?e.left:e.top,s=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return i===a||s===l||i+o/2===a+c/2},d$=function(e,n){var r;return Tu.some(function(i){var s=i[nn].options.emptyInsertThreshold;if(!(!s||um(i))){var o=gt(i),a=e>=o.left-s&&e<=o.right+s,l=n>=o.top-s&&n<=o.bottom+s;if(a&&l)return r=i}}),r},sI=function(e){function n(s,o){return function(a,l,c,u){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(s==null&&(o||h))return!0;if(s==null||s===!1)return!1;if(o&&s==="clone")return s;if(typeof s=="function")return n(s(a,l,c,u),o)(a,l,c,u);var f=(o?a:l).options.group.name;return s===!0||typeof s=="string"&&s===f||s.join&&s.indexOf(f)>-1}}var r={},i=e.group;(!i||Tc(i)!="object")&&(i={name:i}),r.name=i.name,r.checkPull=n(i.pull,!0),r.checkPut=n(i.put),r.revertClone=i.revertClone,e.group=r},oI=function(){!rI&&xe&&oe(xe,"display","none")},aI=function(){!rI&&xe&&oe(xe,"display","")};Ph&&document.addEventListener("click",function(t){if(bu)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),bu=!1,!1},!0);var Di=function(e){if(X){e=e.touches?e.touches[0]:e;var n=d$(e.clientX,e.clientY);if(n){var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[nn]._onDragOver(r)}}},p$=function(e){X&&X.parentNode[nn]._isOutsideThisEl(e.target)};function ve(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Hn({},e),t[nn]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return iI(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:ve.supportPointer!==!1&&"PointerEvent"in window&&!Aa,emptyInsertThreshold:5};Dl.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);sI(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:h$,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Me(t,"pointerdown",this._onTapStart):(Me(t,"mousedown",this._onTapStart),Me(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Me(t,"dragover",this),Me(t,"dragenter",this)),Tu.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Hn(this,a$())}ve.prototype={constructor:ve,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Cs=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,X):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,i=this.options,s=i.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=i.filter;if(b$(r),!X&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||i.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Aa&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=Gn(l,i.draggable,r,!1),!(l&&l.animated)&&Sc!==l)){if(Fs=Tt(l),xa=Tt(l,i.draggable),typeof u=="function"){if(u.call(this,e,l,this)){fn({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),vn("filter",n,{evt:e}),s&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=Gn(c,h.trim(),r,!1),h)return fn({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),vn("filter",n,{evt:e}),!0}),u)){s&&e.cancelable&&e.preventDefault();return}i.handle&&!Gn(c,i.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var i=this,s=i.el,o=i.options,a=s.ownerDocument,l;if(r&&!X&&r.parentNode===s){var c=gt(r);if(pt=s,X=r,wt=X.parentNode,Fi=X.nextSibling,Sc=r,lc=o.group,ve.dragged=X,Pi={target:X,clientX:(n||e).clientX,clientY:(n||e).clientY},DE=Pi.clientX-c.left,kE=Pi.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,X.style["will-change"]="all",l=function(){if(vn("delayEnded",i,{evt:e}),ve.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!RE&&i.nativeDraggable&&(X.draggable=!0),i._triggerDragStart(e,n),fn({sortable:i,name:"choose",originalEvent:e}),Et(X,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){eI(X,u.trim(),Rf)}),Me(a,"dragover",Di),Me(a,"mousemove",Di),Me(a,"touchmove",Di),Me(a,"mouseup",i._onDrop),Me(a,"touchend",i._onDrop),Me(a,"touchcancel",i._onDrop),RE&&this.nativeDraggable&&(this.options.touchStartThreshold=4,X.draggable=!0),vn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Pl||Wr))){if(ve.eventCanceled){this._onDrop();return}Me(a,"mouseup",i._disableDelayedDrag),Me(a,"touchend",i._disableDelayedDrag),Me(a,"touchcancel",i._disableDelayedDrag),Me(a,"mousemove",i._delayedDragTouchMoveHandler),Me(a,"touchmove",i._delayedDragTouchMoveHandler),o.supportPointer&&Me(a,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){X&&Rf(X),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Ne(e,"mouseup",this._disableDelayedDrag),Ne(e,"touchend",this._disableDelayedDrag),Ne(e,"touchcancel",this._disableDelayedDrag),Ne(e,"mousemove",this._delayedDragTouchMoveHandler),Ne(e,"touchmove",this._delayedDragTouchMoveHandler),Ne(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?Me(document,"pointermove",this._onTouchMove):n?Me(document,"touchmove",this._onTouchMove):Me(document,"mousemove",this._onTouchMove):(Me(X,"dragend",this),Me(pt,"dragstart",this._onDragStart));try{document.selection?Cc(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(Ps=!1,pt&&X){vn("dragStarted",this,{evt:n}),this.nativeDraggable&&Me(document,"dragover",p$);var r=this.options;!e&&Et(X,r.dragClass,!1),Et(X,r.ghostClass,!0),ve.active=this,e&&this._appendGhost(),fn({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Kn){this._lastX=Kn.clientX,this._lastY=Kn.clientY,oI();for(var e=document.elementFromPoint(Kn.clientX,Kn.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Kn.clientX,Kn.clientY),e!==n);)n=e;if(X.parentNode[nn]._isOutsideThisEl(e),n)do{if(n[nn]){var r=void 0;if(r=n[nn]._onDragOver({clientX:Kn.clientX,clientY:Kn.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);aI()}},_onTouchMove:function(e){if(Pi){var n=this.options,r=n.fallbackTolerance,i=n.fallbackOffset,s=e.touches?e.touches[0]:e,o=xe&&es(xe,!0),a=xe&&o&&o.a,l=xe&&o&&o.d,c=uc&&Qt&&NE(Qt),u=(s.clientX-Pi.clientX+i.x)/(a||1)+(c?c[0]-Af[0]:0)/(a||1),h=(s.clientY-Pi.clientY+i.y)/(l||1)+(c?c[1]-Af[1]:0)/(l||1);if(!ve.active&&!Ps){if(r&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(xe){o?(o.e+=u-(If||0),o.f+=h-(Cf||0)):o={a:1,b:0,c:0,d:1,e:u,f:h};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");oe(xe,"webkitTransform",f),oe(xe,"mozTransform",f),oe(xe,"msTransform",f),oe(xe,"transform",f),If=u,Cf=h,Kn=s}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!xe){var e=this.options.fallbackOnBody?document.body:pt,n=gt(X,!0,uc,!0,e),r=this.options;if(uc){for(Qt=e;oe(Qt,"position")==="static"&&oe(Qt,"transform")==="none"&&Qt!==document;)Qt=Qt.parentNode;Qt!==document.body&&Qt!==document.documentElement?(Qt===document&&(Qt=pr()),n.top+=Qt.scrollTop,n.left+=Qt.scrollLeft):Qt=pr(),Af=NE(Qt)}xe=X.cloneNode(!0),Et(xe,r.ghostClass,!1),Et(xe,r.fallbackClass,!0),Et(xe,r.dragClass,!0),oe(xe,"transition",""),oe(xe,"transform",""),oe(xe,"box-sizing","border-box"),oe(xe,"margin",0),oe(xe,"top",n.top),oe(xe,"left",n.left),oe(xe,"width",n.width),oe(xe,"height",n.height),oe(xe,"opacity","0.8"),oe(xe,"position",uc?"absolute":"fixed"),oe(xe,"zIndex","100000"),oe(xe,"pointerEvents","none"),ve.ghost=xe,e.appendChild(xe),oe(xe,"transform-origin",DE/parseInt(xe.style.width)*100+"% "+kE/parseInt(xe.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,i=e.dataTransfer,s=r.options;if(vn("dragStart",this,{evt:e}),ve.eventCanceled){this._onDrop();return}vn("setupClone",this),ve.eventCanceled||(bt=hm(X),bt.draggable=!1,bt.style["will-change"]="",this._hideClone(),Et(bt,this.options.chosenClass,!1),ve.clone=bt),r.cloneId=Cc(function(){vn("clone",r),!ve.eventCanceled&&(r.options.removeCloneOnHide||pt.insertBefore(bt,X),r._hideClone(),fn({sortable:r,name:"clone"}))}),!n&&Et(X,s.dragClass,!0),n?(bu=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Ne(document,"mouseup",r._onDrop),Ne(document,"touchend",r._onDrop),Ne(document,"touchcancel",r._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(r,i,X)),Me(document,"drop",r),oe(X,"transform","translateZ(0)")),Ps=!0,r._dragStartId=Cc(r._dragStarted.bind(r,n,e)),Me(document,"selectstart",r),ra=!0,Aa&&oe(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,i,s,o,a=this.options,l=a.group,c=ve.active,u=lc===l,h=a.sort,f=Vt||c,d,p=this,m=!1;if(tp)return;function y(se,ke){vn(se,p,wr({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:i,targetRect:s,canSort:h,fromSortable:f,target:r,completed:g,onMove:function($e,Pe){return hc(pt,n,X,i,$e,gt($e),e,Pe)},changed:E},ke))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function g(se){return y("dragOverCompleted",{insertion:se}),se&&(u?c._hideClone():c._showClone(p),p!==f&&(Et(X,Vt?Vt.options.ghostClass:c.options.ghostClass,!1),Et(X,a.ghostClass,!0)),Vt!==p&&p!==ve.active?Vt=p:p===ve.active&&Vt&&(Vt=null),f===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===X&&!X.animated||r===n&&!r.animated)&&(Cs=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(X.parentNode[nn]._isOutsideThisEl(e.target),!se&&Di(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){xn=Tt(X),ti=Tt(X,a.draggable),fn({sortable:p,name:"change",toEl:n,newIndex:xn,newDraggableIndex:ti,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=Gn(r,a.draggable,n,!0),y("dragOver"),ve.eventCanceled)return m;if(X.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(bu=!1,c&&!a.disabled&&(u?h||(o=wt!==pt):Vt===this||(this.lastPutMode=lc.checkPull(this,c,X,e))&&l.checkPut(this,c,X,e))){if(d=this._getDirection(e,r)==="vertical",i=gt(X),y("dragOverValid"),ve.eventCanceled)return m;if(o)return wt=pt,v(),this._hideClone(),y("revert"),ve.eventCanceled||(Fi?pt.insertBefore(X,Fi):pt.appendChild(X)),g(!0);var w=um(n,a.draggable);if(!w||y$(e,d,this)&&!w.animated){if(w===X)return g(!1);if(w&&n===e.target&&(r=w),r&&(s=gt(r)),hc(pt,n,X,i,r,s,e,!!r)!==!1)return v(),n.appendChild(X),wt=n,E(),g(!0)}else if(w&&v$(e,d,this)){var T=vo(n,0,a,!0);if(T===X)return g(!1);if(r=T,s=gt(r),hc(pt,n,X,i,r,s,e,!1)!==!1)return v(),n.insertBefore(X,T),wt=n,E(),g(!0)}else if(r.parentNode===n){s=gt(r);var S=0,x,I=X.parentNode!==n,C=!f$(X.animated&&X.toRect||i,r.animated&&r.toRect||s,d),P=d?"top":"left",L=OE(r,"top","top")||OE(X,"top","top"),U=L?L.scrollTop:void 0;Cs!==r&&(x=s[P],Na=!1,cc=!C&&a.invertSwap||I),S=E$(e,r,s,d,C?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,cc,Cs===r);var k;if(S!==0){var O=Tt(X);do O-=S,k=wt.children[O];while(k&&(oe(k,"display")==="none"||k===xe))}if(S===0||k===r)return g(!1);Cs=r,Oa=S;var J=r.nextElementSibling,B=!1;B=S===1;var Q=hc(pt,n,X,i,r,s,e,B);if(Q!==!1)return(Q===1||Q===-1)&&(B=Q===1),tp=!0,setTimeout(m$,30),v(),B&&!J?n.appendChild(X):r.parentNode.insertBefore(X,B?J:r),L&&nI(L,0,U-L.scrollTop),wt=X.parentNode,x!==void 0&&!cc&&(Ic=Math.abs(x-gt(r)[P])),E(),g(!0)}if(n.contains(X))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ne(document,"mousemove",this._onTouchMove),Ne(document,"touchmove",this._onTouchMove),Ne(document,"pointermove",this._onTouchMove),Ne(document,"dragover",Di),Ne(document,"mousemove",Di),Ne(document,"touchmove",Di)},_offUpEvents:function(){var e=this.el.ownerDocument;Ne(e,"mouseup",this._onDrop),Ne(e,"touchend",this._onDrop),Ne(e,"pointerup",this._onDrop),Ne(e,"touchcancel",this._onDrop),Ne(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(xn=Tt(X),ti=Tt(X,r.draggable),vn("drop",this,{evt:e}),wt=X&&X.parentNode,xn=Tt(X),ti=Tt(X,r.draggable),ve.eventCanceled){this._nulling();return}Ps=!1,cc=!1,Na=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),np(this.cloneId),np(this._dragStartId),this.nativeDraggable&&(Ne(document,"drop",this),Ne(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Aa&&oe(document.body,"user-select",""),oe(X,"transform",""),e&&(ra&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),xe&&xe.parentNode&&xe.parentNode.removeChild(xe),(pt===wt||Vt&&Vt.lastPutMode!=="clone")&&bt&&bt.parentNode&&bt.parentNode.removeChild(bt),X&&(this.nativeDraggable&&Ne(X,"dragend",this),Rf(X),X.style["will-change"]="",ra&&!Ps&&Et(X,Vt?Vt.options.ghostClass:this.options.ghostClass,!1),Et(X,this.options.chosenClass,!1),fn({sortable:this,name:"unchoose",toEl:wt,newIndex:null,newDraggableIndex:null,originalEvent:e}),pt!==wt?(xn>=0&&(fn({rootEl:wt,name:"add",toEl:wt,fromEl:pt,originalEvent:e}),fn({sortable:this,name:"remove",toEl:wt,originalEvent:e}),fn({rootEl:wt,name:"sort",toEl:wt,fromEl:pt,originalEvent:e}),fn({sortable:this,name:"sort",toEl:wt,originalEvent:e})),Vt&&Vt.save()):xn!==Fs&&xn>=0&&(fn({sortable:this,name:"update",toEl:wt,originalEvent:e}),fn({sortable:this,name:"sort",toEl:wt,originalEvent:e})),ve.active&&((xn==null||xn===-1)&&(xn=Fs,ti=xa),fn({sortable:this,name:"end",toEl:wt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){vn("nulling",this),pt=X=wt=xe=Fi=bt=Sc=oi=Pi=Kn=ra=xn=ti=Fs=xa=Cs=Oa=Vt=lc=ve.dragged=ve.ghost=ve.clone=ve.active=null,Su.forEach(function(e){e.checked=!0}),Su.length=If=Cf=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":X&&(this._onDragOver(e),g$(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,i=0,s=r.length,o=this.options;i<s;i++)n=r[i],Gn(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||w$(n));return e},sort:function(e,n){var r={},i=this.el;this.toArray().forEach(function(s,o){var a=i.children[o];Gn(a,this.options.draggable,i,!1)&&(r[s]=a)},this),n&&this.captureAnimationState(),e.forEach(function(s){r[s]&&(i.removeChild(r[s]),i.appendChild(r[s]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return Gn(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var i=Dl.modifyOption(this,e,n);typeof i<"u"?r[e]=i:r[e]=n,e==="group"&&sI(r)},destroy:function(){vn("destroy",this);var e=this.el;e[nn]=null,Ne(e,"mousedown",this._onTapStart),Ne(e,"touchstart",this._onTapStart),Ne(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ne(e,"dragover",this),Ne(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Tu.splice(Tu.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!oi){if(vn("hideClone",this),ve.eventCanceled)return;oe(bt,"display","none"),this.options.removeCloneOnHide&&bt.parentNode&&bt.parentNode.removeChild(bt),oi=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(oi){if(vn("showClone",this),ve.eventCanceled)return;X.parentNode==pt&&!this.options.group.revertClone?pt.insertBefore(bt,X):Fi?pt.insertBefore(bt,Fi):pt.appendChild(bt),this.options.group.revertClone&&this.animate(X,bt),oe(bt,"display",""),oi=!1}}};function g$(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function hc(t,e,n,r,i,s,o,a){var l,c=t[nn],u=c.options.onMove,h;return window.CustomEvent&&!Wr&&!Pl?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=i||e,l.relatedRect=s||gt(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(h=u.call(c,l,o)),h}function Rf(t){t.draggable=!1}function m$(){tp=!1}function v$(t,e,n){var r=gt(vo(n.el,0,n.options,!0)),i=10;return e?t.clientX<r.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-i||t.clientY<r.bottom&&t.clientX<r.left}function y$(t,e,n){var r=gt(um(n.el,n.options.draggable)),i=10;return e?t.clientX>r.right+i||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+i}function E$(t,e,n,r,i,s,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,h=r?n.bottom:n.right,f=!1;if(!o){if(a&&Ic<c*i){if(!Na&&(Oa===1?l>u+c*s/2:l<h-c*s/2)&&(Na=!0),Na)f=!0;else if(Oa===1?l<u+Ic:l>h-Ic)return-Oa}else if(l>u+c*(1-i)/2&&l<h-c*(1-i)/2)return _$(e)}return f=f||o,f&&(l<u+c*s/2||l>h-c*s/2)?l>u+c/2?1:-1:0}function _$(t){return Tt(X)<Tt(t)?1:-1}function w$(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function b$(t){Su.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&Su.push(r)}}function Cc(t){return setTimeout(t,0)}function np(t){return clearTimeout(t)}Ph&&Me(document,"touchmove",function(t){(ve.active||Ps)&&t.cancelable&&t.preventDefault()});ve.utils={on:Me,off:Ne,css:oe,find:eI,is:function(e,n){return!!Gn(e,n,e,!1)},extend:s$,throttle:tI,closest:Gn,toggleClass:Et,clone:hm,index:Tt,nextTick:Cc,cancelNextTick:np,detectDirection:iI,getChild:vo};ve.get=function(t){return t[nn]};ve.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(ve.utils=wr(wr({},ve.utils),r.utils)),Dl.mount(r)})};ve.create=function(t,e){return new ve(t,e)};ve.version=t$;var Nt=[],ia,rp,ip=!1,xf,Of,Iu,sa;function T$(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?Me(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Me(document,"pointermove",this._handleFallbackAutoScroll):r.touches?Me(document,"touchmove",this._handleFallbackAutoScroll):Me(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Ne(document,"dragover",this._handleAutoScroll):(Ne(document,"pointermove",this._handleFallbackAutoScroll),Ne(document,"touchmove",this._handleFallbackAutoScroll),Ne(document,"mousemove",this._handleFallbackAutoScroll)),LE(),Ac(),o$()},nulling:function(){Iu=rp=ia=ip=sa=xf=Of=null,Nt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var i=this,s=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(s,o);if(Iu=n,r||this.options.forceAutoScrollFallback||Pl||Wr||Aa){Nf(n,this.options,a,r);var l=ci(a,!0);ip&&(!sa||s!==xf||o!==Of)&&(sa&&LE(),sa=setInterval(function(){var c=ci(document.elementFromPoint(s,o),!0);c!==l&&(l=c,Ac()),Nf(n,i.options,c,r)},10),xf=s,Of=o)}else{if(!this.options.bubbleScroll||ci(a,!0)===pr()){Ac();return}Nf(n,this.options,ci(a,!1),!1)}}},Hn(t,{pluginName:"scroll",initializeByDefault:!0})}function Ac(){Nt.forEach(function(t){clearInterval(t.pid)}),Nt=[]}function LE(){clearInterval(sa)}var Nf=tI(function(t,e,n,r){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=pr(),c=!1,u;rp!==n&&(rp=n,Ac(),ia=e.scroll,u=e.scrollFn,ia===!0&&(ia=ci(n,!0)));var h=0,f=ia;do{var d=f,p=gt(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,w=p.height,T=void 0,S=void 0,x=d.scrollWidth,I=d.scrollHeight,C=oe(d),P=d.scrollLeft,L=d.scrollTop;d===l?(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"||C.overflowX==="visible"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"||C.overflowY==="visible")):(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"));var U=T&&(Math.abs(g-i)<=o&&P+E<x)-(Math.abs(v-i)<=o&&!!P),k=S&&(Math.abs(y-s)<=o&&L+w<I)-(Math.abs(m-s)<=o&&!!L);if(!Nt[h])for(var O=0;O<=h;O++)Nt[O]||(Nt[O]={});(Nt[h].vx!=U||Nt[h].vy!=k||Nt[h].el!==d)&&(Nt[h].el=d,Nt[h].vx=U,Nt[h].vy=k,clearInterval(Nt[h].pid),(U!=0||k!=0)&&(c=!0,Nt[h].pid=setInterval(function(){r&&this.layer===0&&ve.active._onTouchMove(Iu);var J=Nt[this.layer].vy?Nt[this.layer].vy*a:0,B=Nt[this.layer].vx?Nt[this.layer].vx*a:0;typeof u=="function"&&u.call(ve.dragged.parentNode[nn],B,J,t,Iu,Nt[this.layer].el)!=="continue"||nI(Nt[this.layer].el,B,J)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==l&&(f=ci(f,!1)));ip=c}},30),lI=function(e){var n=e.originalEvent,r=e.putSortable,i=e.dragEl,s=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||s;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(h)&&(o("spill"),this.onSpill({dragEl:i,putSortable:r}))}};function fm(){}fm.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var i=vo(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:lI};Hn(fm,{pluginName:"revertOnSpill"});function dm(){}dm.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,i=r||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop:lI};Hn(dm,{pluginName:"removeOnSpill"});var Fn;function S$(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;Fn=r},dragOverValid:function(n){var r=n.completed,i=n.target,s=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(i&&i!==c){var h=Fn;s(i)!==!1?(Et(i,u.swapClass,!0),Fn=i):Fn=null,h&&h!==Fn&&Et(h,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,i=n.putSortable,s=n.dragEl,o=i||this.sortable,a=this.options;Fn&&Et(Fn,a.swapClass,!1),Fn&&(a.swap||i&&i.options.swap)&&s!==Fn&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),I$(s,Fn),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){Fn=null}},Hn(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Fn}}})}function I$(t,e){var n=t.parentNode,r=e.parentNode,i,s;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(i=Tt(t),s=Tt(e),n.isEqualNode(r)&&i<s&&s++,n.insertBefore(e,n.children[i]),r.insertBefore(t,r.children[s]))}var Ie=[],Rn=[],Wo,Wn,Go=!1,yn=!1,As=!1,at,zo,fc;function C$(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?Me(document,"pointerup",this._deselectMultiDrag):(Me(document,"mouseup",this._deselectMultiDrag),Me(document,"touchend",this._deselectMultiDrag)),Me(document,"keydown",this._checkKeyDown),Me(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(i,s){var o="";Ie.length&&Wn===e?Ie.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=s.textContent,i.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;at=r},delayEnded:function(){this.isMultiDrag=~Ie.indexOf(at)},setupClone:function(n){var r=n.sortable,i=n.cancel;if(this.isMultiDrag){for(var s=0;s<Ie.length;s++)Rn.push(hm(Ie[s])),Rn[s].sortableIndex=Ie[s].sortableIndex,Rn[s].draggable=!1,Rn[s].style["will-change"]="",Et(Rn[s],this.options.selectedClass,!1),Ie[s]===at&&Et(Rn[s],this.options.chosenClass,!1);r._hideClone(),i()}},clone:function(n){var r=n.sortable,i=n.rootEl,s=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Ie.length&&Wn===r&&(FE(!0,i),s("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,i=n.rootEl,s=n.cancel;this.isMultiDrag&&(FE(!1,i),Rn.forEach(function(o){oe(o,"display","")}),r(),fc=!1,s())},hideClone:function(n){var r=this;n.sortable;var i=n.cloneNowHidden,s=n.cancel;this.isMultiDrag&&(Rn.forEach(function(o){oe(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),i(),fc=!0,s())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&Wn&&Wn.multiDrag._deselectMultiDrag(),Ie.forEach(function(r){r.sortableIndex=Tt(r)}),Ie=Ie.sort(function(r,i){return r.sortableIndex-i.sortableIndex}),As=!0},dragStarted:function(n){var r=this,i=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(i.captureAnimationState(),this.options.animation)){Ie.forEach(function(o){o!==at&&oe(o,"position","absolute")});var s=gt(at,!1,!0,!0);Ie.forEach(function(o){o!==at&&PE(o,s)}),yn=!0,Go=!0}i.animateAll(function(){yn=!1,Go=!1,r.options.animation&&Ie.forEach(function(o){Tf(o)}),r.options.sort&&dc()})}},dragOver:function(n){var r=n.target,i=n.completed,s=n.cancel;yn&&~Ie.indexOf(r)&&(i(!1),s())},revert:function(n){var r=n.fromSortable,i=n.rootEl,s=n.sortable,o=n.dragRect;Ie.length>1&&(Ie.forEach(function(a){s.addAnimationState({target:a,rect:yn?gt(a):o}),Tf(a),a.fromRect=o,r.removeAnimationState(a)}),yn=!1,A$(!this.options.removeCloneOnHide,i))},dragOverCompleted:function(n){var r=n.sortable,i=n.isOwner,s=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(s){if(i&&o._hideClone(),Go=!1,c.animation&&Ie.length>1&&(yn||!i&&!o.options.sort&&!l)){var u=gt(at,!1,!0,!0);Ie.forEach(function(f){f!==at&&(PE(f,u),a.appendChild(f))}),yn=!0}if(!i)if(yn||dc(),Ie.length>1){var h=fc;o._showClone(r),o.options.animation&&!fc&&h&&Rn.forEach(function(f){o.addAnimationState({target:f,rect:zo}),f.fromRect=zo,f.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,i=n.isOwner,s=n.activeSortable;if(Ie.forEach(function(a){a.thisAnimationDuration=null}),s.options.animation&&!i&&s.multiDrag.isMultiDrag){zo=Hn({},r);var o=es(at,!0);zo.top-=o.f,zo.left-=o.e}},dragOverAnimationComplete:function(){yn&&(yn=!1,dc())},drop:function(n){var r=n.originalEvent,i=n.rootEl,s=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var h=this.options,f=s.children;if(!As)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),Et(at,h.selectedClass,!~Ie.indexOf(at)),~Ie.indexOf(at))Ie.splice(Ie.indexOf(at),1),Wo=null,na({sortable:o,rootEl:i,name:"deselect",targetEl:at,originalEvt:r});else{if(Ie.push(at),na({sortable:o,rootEl:i,name:"select",targetEl:at,originalEvt:r}),r.shiftKey&&Wo&&o.el.contains(Wo)){var d=Tt(Wo),p=Tt(at);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~Ie.indexOf(f[y])||(Et(f[y],h.selectedClass,!0),Ie.push(f[y]),na({sortable:o,rootEl:i,name:"select",targetEl:f[y],originalEvt:r}))}}else Wo=at;Wn=u}if(As&&this.isMultiDrag){if(yn=!1,(s[nn].options.sort||s!==i)&&Ie.length>1){var v=gt(at),g=Tt(at,":not(."+this.options.selectedClass+")");if(!Go&&h.animation&&(at.thisAnimationDuration=null),u.captureAnimationState(),!Go&&(h.animation&&(at.fromRect=v,Ie.forEach(function(w){if(w.thisAnimationDuration=null,w!==at){var T=yn?gt(w):v;w.fromRect=T,u.addAnimationState({target:w,rect:T})}})),dc(),Ie.forEach(function(w){f[g]?s.insertBefore(w,f[g]):s.appendChild(w),g++}),l===Tt(at))){var E=!1;Ie.forEach(function(w){if(w.sortableIndex!==Tt(w)){E=!0;return}}),E&&a("update")}Ie.forEach(function(w){Tf(w)}),u.animateAll()}Wn=u}(i===s||c&&c.lastPutMode!=="clone")&&Rn.forEach(function(w){w.parentNode&&w.parentNode.removeChild(w)})}},nullingGlobal:function(){this.isMultiDrag=As=!1,Rn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Ne(document,"pointerup",this._deselectMultiDrag),Ne(document,"mouseup",this._deselectMultiDrag),Ne(document,"touchend",this._deselectMultiDrag),Ne(document,"keydown",this._checkKeyDown),Ne(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof As<"u"&&As)&&Wn===this.sortable&&!(n&&Gn(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;Ie.length;){var r=Ie[0];Et(r,this.options.selectedClass,!1),Ie.shift(),na({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Hn(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[nn];!r||!r.options.multiDrag||~Ie.indexOf(n)||(Wn&&Wn!==r&&(Wn.multiDrag._deselectMultiDrag(),Wn=r),Et(n,r.options.selectedClass,!0),Ie.push(n))},deselect:function(n){var r=n.parentNode[nn],i=Ie.indexOf(n);!r||!r.options.multiDrag||!~i||(Et(n,r.options.selectedClass,!1),Ie.splice(i,1))}},eventProperties:function(){var n=this,r=[],i=[];return Ie.forEach(function(s){r.push({multiDragElement:s,index:s.sortableIndex});var o;yn&&s!==at?o=-1:yn?o=Tt(s,":not(."+n.options.selectedClass+")"):o=Tt(s),i.push({multiDragElement:s,index:o})}),{items:Q4(Ie),clones:[].concat(Rn),oldIndicies:r,newIndicies:i}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function A$(t,e){Ie.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function FE(t,e){Rn.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function dc(){Ie.forEach(function(t){t!==at&&t.parentNode&&t.parentNode.removeChild(t)})}ve.mount(new T$);ve.mount(dm,fm);const R$=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:C$,Sortable:ve,Swap:S$,default:ve},Symbol.toStringTag,{value:"Module"})),x$=JS(R$);(function(t,e){(function(r,i){t.exports=i(Nl,x$)})(typeof self<"u"?self:s4,function(n,r){return function(i){var s={};function o(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return i[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=i,o.c=s,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(h){return a[h]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(i,s,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",i.exports=String(c)==="[object z]"},"0366":function(i,s,o){var a=o("1c0b");i.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(h){return l.call(c,h)};case 2:return function(h,f){return l.call(c,h,f)};case 3:return function(h,f,d){return l.call(c,h,f,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(i,s,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(f){try{return l(f)}catch{return u.slice()}};i.exports.f=function(d){return u&&c.call(d)=="[object Window]"?h(d):l(a(d))}},"06cf":function(i,s,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),h=o("c04e"),f=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;s.f=a?p:function(y,v){if(y=u(y),v=h(v,!0),d)try{return p(y,v)}catch{}if(f(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("cc12");i.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(i,s,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),h=c("reduce"),f=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!h||!f},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(i,s,o){var a=o("c6b6"),l=o("9263");i.exports=function(c,u){var h=c.exec;if(typeof h=="function"){var f=h.call(c,u);if(typeof f!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return f}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var h in l){var f=a[h],d=f&&f.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(i,s,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),h=c("forEach");i.exports=!u||!h?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(i,s,o){var a=o("d066");i.exports=a("document","documentElement")},"1c0b":function(i,s){i.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(i,s,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,h={next:function(){return{done:!!u++}},return:function(){c=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch{}i.exports=function(f,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},f(m)}catch{}return p}},"1d80":function(i,s){i.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(i,s,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");i.exports=function(h){return c>=51||!a(function(){var f=[],d=f.constructor={};return d[u]=function(){return{foo:1}},f[h](Boolean).foo!==1})}},"23cb":function(i,s,o){var a=o("a691"),l=Math.max,c=Math.min;i.exports=function(u,h){var f=a(u);return f<0?l(f+h,0):c(f,h)}},"23e7":function(i,s,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),h=o("ce4e"),f=o("e893"),d=o("94ca");i.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,w,T,S,x,I;if(v?w=a:g?w=a[y]||h(y,{}):w=(a[y]||{}).prototype,w)for(T in m){if(x=m[T],p.noTargetGet?(I=l(w,T),S=I&&I.value):S=w[T],E=d(v?T:y+(g?".":"#")+T,p.forced),!E&&S!==void 0){if(typeof x==typeof S)continue;f(x,S)}(p.sham||S&&S.sham)&&c(x,"sham",!0),u(w,T,x,p)}}},"241c":function(i,s,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");s.f=Object.getOwnPropertyNames||function(h){return a(h,c)}},"25f0":function(i,s,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=h;(p||m)&&a(RegExp.prototype,h,function(){var v=l(this),g=String(v.source),E=v.flags,w=String(E===void 0&&v instanceof RegExp&&!("flags"in f)?u.call(v):E);return"/"+g+"/"+w},{unsafe:!0})},"2ca0":function(i,s,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),h=o("1d80"),f=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=f("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var w=String(h(this));u(E);var T=c(m(arguments.length>1?arguments[1]:void 0,w.length)),S=String(E);return p?p.call(w,S,T):w.slice(T,T+S.length)===S}})},"2d00":function(i,s,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,h=u&&u.v8,f,d;h?(f=h.split("."),d=f[0]+f[1]):l&&(f=l.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=l.match(/Chrome\/(\d+)/),f&&(d=f[1]))),i.exports=d&&+d},"342f":function(i,s,o){var a=o("d066");i.exports=a("navigator","userAgent")||""},"35a1":function(i,s,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");i.exports=function(h){if(h!=null)return h[u]||h["@@iterator"]||l[a(h)]}},"37e8":function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");i.exports=a?Object.defineProperties:function(f,d){c(f);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(f,v=p[y++],d[v]);return f}},"3bbe":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(i,s,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",h=l.set,f=l.getterFor(u);c(String,"String",function(d){h(this,{type:u,string:String(d),index:0})},function(){var p=f(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(i,s){i.exports={}},4160:function(i,s,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(i,s,o){var a=o("da84");i.exports=a},"44ad":function(i,s,o){var a=o("d039"),l=o("c6b6"),c="".split;i.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(i,s,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),h=Array.prototype;h[u]==null&&c.f(h,u,{configurable:!0,value:l(null)}),i.exports=function(f){h[u][f]=!0}},"44e7":function(i,s,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");i.exports=function(h){var f;return a(h)&&((f=h[u])!==void 0?!!f:l(h)=="RegExp")}},4930:function(i,s,o){var a=o("d039");i.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(i,s,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(h){return function(f,d,p){var m=a(f),y=l(m.length),v=c(p,y),g;if(h&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((h||v in m)&&m[v]===d)return h||v||0;return!h&&-1}};i.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(i,s,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),h=c("filter"),f=u("filter");a({target:"Array",proto:!0,forced:!h||!f},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(i,s,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),h=o("50c4"),f=o("8418"),d=o("35a1");i.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,w=E!==void 0,T=d(y),S=0,x,I,C,P,L,U;if(w&&(E=a(E,g>2?arguments[2]:void 0,2)),T!=null&&!(v==Array&&u(T)))for(P=T.call(y),L=P.next,I=new v;!(C=L.call(P)).done;S++)U=w?c(P,E,[C.value,S],!0):C.value,f(I,S,U);else for(x=h(y.length),I=new v(x);x>S;S++)U=w?E(y[S],S):y[S],f(I,S,U);return I.length=S,I}},"4fad":function(i,s,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(i,s,o){var a=o("a691"),l=Math.min;i.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(i,s){var o={}.hasOwnProperty;i.exports=function(a,l){return o.call(a,l)}},5319:function(i,s,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),h=o("a691"),f=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,w=function(T){return T===void 0?T:String(T)};a("replace",2,function(T,S,x,I){var C=I.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,P=I.REPLACE_KEEPS_$0,L=C?"$":"$0";return[function(O,J){var B=f(this),Q=O==null?void 0:O[T];return Q!==void 0?Q.call(O,B,J):S.call(String(B),O,J)},function(k,O){if(!C&&P||typeof O=="string"&&O.indexOf(L)===-1){var J=x(S,k,this,O);if(J.done)return J.value}var B=l(k),Q=String(this),se=typeof O=="function";se||(O=String(O));var ke=B.global;if(ke){var ct=B.unicode;B.lastIndex=0}for(var $e=[];;){var Pe=p(B,Q);if(Pe===null||($e.push(Pe),!ke))break;var ot=String(Pe[0]);ot===""&&(B.lastIndex=d(Q,u(B.lastIndex),ct))}for(var yt="",M=0,W=0;W<$e.length;W++){Pe=$e[W];for(var H=String(Pe[0]),ne=m(y(h(Pe.index),Q.length),0),me=[],Ke=1;Ke<Pe.length;Ke++)me.push(w(Pe[Ke]));var _e=Pe.groups;if(se){var _=[H].concat(me,ne,Q);_e!==void 0&&_.push(_e);var b=String(O.apply(void 0,_))}else b=U(H,Q,ne,me,_e,O);ne>=M&&(yt+=Q.slice(M,ne)+b,M=ne+H.length)}return yt+Q.slice(M)}];function U(k,O,J,B,Q,se){var ke=J+k.length,ct=B.length,$e=E;return Q!==void 0&&(Q=c(Q),$e=g),S.call(se,$e,function(Pe,ot){var yt;switch(ot.charAt(0)){case"$":return"$";case"&":return k;case"`":return O.slice(0,J);case"'":return O.slice(ke);case"<":yt=Q[ot.slice(1,-1)];break;default:var M=+ot;if(M===0)return Pe;if(M>ct){var W=v(M/10);return W===0?Pe:W<=ct?B[W-1]===void 0?ot.charAt(1):B[W-1]+ot.charAt(1):Pe}yt=B[M-1]}return yt===void 0?"":yt})}})},5692:function(i,s,o){var a=o("c430"),l=o("c6cd");(i.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(i,s,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");i.exports=a("Reflect","ownKeys")||function(f){var d=l.f(u(f)),p=c.f;return p?d.concat(p(f)):d}},"5a34":function(i,s,o){var a=o("44e7");i.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(i,s){i.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(i,s,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),h=o("1c0b"),f=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return h(p),v=f(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(i,s,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(h,f){var d=String(l(h)),p=a(f),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};i.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(i,s,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");i.exports=function(h,f){var d;return l(h)&&(d=h.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(f===0?0:f)}},"69f3":function(i,s,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),h=o("5135"),f=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(C){return v(C)?y(C):m(C,{})},E=function(C){return function(P){var L;if(!c(P)||(L=y(P)).type!==C)throw TypeError("Incompatible receiver, "+C+" required");return L}};if(a){var w=new p,T=w.get,S=w.has,x=w.set;m=function(C,P){return x.call(w,C,P),P},y=function(C){return T.call(w,C)||{}},v=function(C){return S.call(w,C)}}else{var I=f("state");d[I]=!0,m=function(C,P){return u(C,I,P),P},y=function(C){return h(C,I)?C[I]:{}},v=function(C){return h(C,I)}}i.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(i,s,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),h=o("8925"),f=o("69f3"),d=f.get,p=f.enforce,m=String(String).split("String");(i.exports=function(y,v,g,E){var w=E?!!E.unsafe:!1,T=E?!!E.enumerable:!1,S=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){T?y[v]=g:u(v,g);return}else w?!S&&y[v]&&(T=!0):delete y[v];T?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||h(this)})},"6f53":function(i,s,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,h=function(f){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(f?[E,p[E]]:p[E]);return g}};i.exports={entries:h(!0),values:h(!1)}},"73d9":function(i,s,o){var a=o("44d2");a("flatMap")},7418:function(i,s){s.f=Object.getOwnPropertySymbols},"746f":function(i,s,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;i.exports=function(h){var f=a.Symbol||(a.Symbol={});l(f,h)||u(f,h,{value:c.f(h)})}},7839:function(i,s){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(i,s,o){var a=o("1d80");i.exports=function(l){return Object(a(l))}},"7c73":function(i,s,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),h=o("1be4"),f=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},w=function(C){return m+v+p+C+m+"/"+v+p},T=function(C){C.write(w("")),C.close();var P=C.parentWindow.Object;return C=null,P},S=function(){var C=f("iframe"),P="java"+v+":",L;return C.style.display="none",h.appendChild(C),C.src=String(P),L=C.contentWindow.document,L.open(),L.write(w("document.F=Object")),L.close(),L.F},x,I=function(){try{x=document.domain&&new ActiveXObject("htmlfile")}catch{}I=x?T(x):S();for(var C=c.length;C--;)delete I[y][c[C]];return I()};u[g]=!0,i.exports=Object.create||function(P,L){var U;return P!==null?(E[y]=a(P),U=new E,E[y]=null,U[g]=P):U=I(),L===void 0?U:l(U,L)}},"7dd0":function(i,s,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),h=o("d44e"),f=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),T="keys",S="values",x="entries",I=function(){return this};i.exports=function(C,P,L,U,k,O,J){l(L,P,U);var B=function(W){if(W===k&&$e)return $e;if(!E&&W in ke)return ke[W];switch(W){case T:return function(){return new L(this,W)};case S:return function(){return new L(this,W)};case x:return function(){return new L(this,W)}}return function(){return new L(this)}},Q=P+" Iterator",se=!1,ke=C.prototype,ct=ke[w]||ke["@@iterator"]||k&&ke[k],$e=!E&&ct||B(k),Pe=P=="Array"&&ke.entries||ct,ot,yt,M;if(Pe&&(ot=c(Pe.call(new C)),g!==Object.prototype&&ot.next&&(!m&&c(ot)!==g&&(u?u(ot,g):typeof ot[w]!="function"&&f(ot,w,I)),h(ot,Q,!0,!0),m&&(y[Q]=I))),k==S&&ct&&ct.name!==S&&(se=!0,$e=function(){return ct.call(this)}),(!m||J)&&ke[w]!==$e&&f(ke,w,$e),y[P]=$e,k)if(yt={values:B(S),keys:O?$e:B(T),entries:B(x)},J)for(M in yt)(E||se||!(M in ke))&&d(ke,M,yt[M]);else a({target:P,proto:!0,forced:E||se},yt);return yt}},"7f9a":function(i,s,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;i.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(i,s,o){var a=o("d039");i.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(i,s,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");i.exports=function(u,h,f){var d=a(h);d in u?l.f(u,d,c(0,f)):u[d]=f}},"861d":function(i,s){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(i,s,o){var a,l,c;(function(u,h){l=[],a=h,c=typeof a=="function"?a.apply(s,l):a,c!==void 0&&(i.exports=c)})(typeof self<"u"?self:this,function(){function u(){var h=Object.getOwnPropertyDescriptor(document,"currentScript");if(!h&&"currentScript"in document&&document.currentScript||h&&h.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var f=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=f.exec(x.stack)||d.exec(x.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,w,T=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),w=g.replace(E,"$1").trim());for(var S=0;S<T.length;S++)if(T[S].readyState==="interactive"||T[S].src===m||m===v&&T[S].innerHTML&&T[S].innerHTML.trim()===w)return T[S];return null}}return u})},8925:function(i,s,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),i.exports=a.inspectSource},"8aa5":function(i,s,o){var a=o("6547").charAt;i.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(i,s){i.exports=n},"90e3":function(i,s){var o=0,a=Math.random();i.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");i.exports=a?function(u,h,f){return l.f(u,h,c(1,f))}:function(u,h,f){return u[h]=f,u}},9263:function(i,s,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,h=c,f=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=f||p||d;m&&(h=function(v){var g=this,E,w,T,S,x=d&&g.sticky,I=a.call(g),C=g.source,P=0,L=v;return x&&(I=I.replace("y",""),I.indexOf("g")===-1&&(I+="g"),L=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(C="(?: "+C+")",L=" "+L,P++),w=new RegExp("^(?:"+C+")",I)),p&&(w=new RegExp("^"+C+"$(?!\\s)",I)),f&&(E=g.lastIndex),T=c.call(x?w:g,L),x?T?(T.input=T.input.slice(P),T[0]=T[0].slice(P),T.index=g.lastIndex,g.lastIndex+=T[0].length):g.lastIndex=0:f&&T&&(g.lastIndex=g.global?T.index+T[0].length:E),p&&T&&T.length>1&&u.call(T[0],w,function(){for(S=1;S<arguments.length-2;S++)arguments[S]===void 0&&(T[S]=void 0)}),T}),i.exports=h},"94ca":function(i,s,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=h[u(p)];return y==d?!0:y==f?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},h=c.data={},f=c.NATIVE="N",d=c.POLYFILL="P";i.exports=c},"99af":function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),h=o("7b0b"),f=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,w="Maximum allowed index exceeded",T=v>=51||!l(function(){var C=[];return C[g]=!1,C.concat()[0]!==C}),S=m("concat"),x=function(C){if(!u(C))return!1;var P=C[g];return P!==void 0?!!P:c(C)},I=!T||!S;a({target:"Array",proto:!0,forced:I},{concat:function(P){var L=h(this),U=p(L,0),k=0,O,J,B,Q,se;for(O=-1,B=arguments.length;O<B;O++)if(se=O===-1?L:arguments[O],x(se)){if(Q=f(se.length),k+Q>E)throw TypeError(w);for(J=0;J<Q;J++,k++)J in se&&d(U,k,se[J])}else{if(k>=E)throw TypeError(w);d(U,k++,se)}return U.length=k,U}})},"9bdd":function(i,s,o){var a=o("825a");i.exports=function(l,c,u,h){try{return h?c(a(u)[0],u[1]):c(u)}catch(d){var f=l.return;throw f!==void 0&&a(f.call(l)),d}}},"9bf2":function(i,s,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),h=Object.defineProperty;s.f=a?h:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return h(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(i,s,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),h=o("3f8c"),f=function(){return this};i.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),h[y]=f,d}},"9f7f":function(i,s,o){var a=o("d039");function l(c,u){return RegExp(c,u)}s.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),s.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(i,s,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(h,f,d,p,m,y,v,g){for(var E=m,w=0,T=v?c(v,g,3):!1,S;w<p;){if(w in d){if(S=T?T(d[w],w,f):d[w],y>0&&a(S))E=u(h,f,S,l(S.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");h[E]=S}E++}w++}return E};i.exports=u},a352:function(i,s){i.exports=r},a434:function(i,s,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),h=o("7b0b"),f=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,w=9007199254740991,T="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(x,I){var C=h(this),P=u(C.length),L=l(x,P),U=arguments.length,k,O,J,B,Q,se;if(U===0?k=O=0:U===1?(k=0,O=P-L):(k=U-2,O=E(g(c(I),0),P-L)),P+k-O>w)throw TypeError(T);for(J=f(C,O),B=0;B<O;B++)Q=L+B,Q in C&&d(J,B,C[Q]);if(J.length=O,k<O){for(B=L;B<P-O;B++)Q=B+O,se=B+k,Q in C?C[se]=C[Q]:delete C[se];for(B=P;B>P-O+k;B--)delete C[B-1]}else if(k>O)for(B=P-O;B>L;B--)Q=B+O-1,se=B+k-1,Q in C?C[se]=C[Q]:delete C[se];for(B=0;B<k;B++)C[B+L]=arguments[B+2];return C.length=P-O+k,J}})},a4d3:function(i,s,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),h=o("83ab"),f=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),w=o("fc6a"),T=o("c04e"),S=o("5c6c"),x=o("7c73"),I=o("df75"),C=o("241c"),P=o("057f"),L=o("7418"),U=o("06cf"),k=o("9bf2"),O=o("d1e7"),J=o("9112"),B=o("6eeb"),Q=o("5692"),se=o("f772"),ke=o("d012"),ct=o("90e3"),$e=o("b622"),Pe=o("e538"),ot=o("746f"),yt=o("d44e"),M=o("69f3"),W=o("b727").forEach,H=se("hidden"),ne="Symbol",me="prototype",Ke=$e("toPrimitive"),_e=M.set,_=M.getterFor(ne),b=Object[me],N=l.Symbol,F=c("JSON","stringify"),$=U.f,K=k.f,q=P.f,Y=O.f,z=Q("symbols"),j=Q("op-symbols"),le=Q("string-to-symbol-registry"),ie=Q("symbol-to-string-registry"),ce=Q("wks"),de=l.QObject,Ae=!de||!de[me]||!de[me].findChild,Xe=h&&p(function(){return x(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a!=7})?function(we,ue,ge){var Fe=$(b,ue);Fe&&delete b[ue],K(we,ue,ge),Fe&&we!==b&&K(b,ue,Fe)}:K,Be=function(we,ue){var ge=z[we]=x(N[me]);return _e(ge,{type:ne,tag:we,description:ue}),h||(ge.description=ue),ge},A=d?function(we){return typeof we=="symbol"}:function(we){return Object(we)instanceof N},R=function(ue,ge,Fe){ue===b&&R(j,ge,Fe),g(ue);var We=T(ge,!0);return g(Fe),m(z,We)?(Fe.enumerable?(m(ue,H)&&ue[H][We]&&(ue[H][We]=!1),Fe=x(Fe,{enumerable:S(0,!1)})):(m(ue,H)||K(ue,H,S(1,{})),ue[H][We]=!0),Xe(ue,We,Fe)):K(ue,We,Fe)},D=function(ue,ge){g(ue);var Fe=w(ge),We=I(Fe).concat(Re(Fe));return W(We,function(mn){(!h||re.call(Fe,mn))&&R(ue,mn,Fe[mn])}),ue},V=function(ue,ge){return ge===void 0?x(ue):D(x(ue),ge)},re=function(ue){var ge=T(ue,!0),Fe=Y.call(this,ge);return this===b&&m(z,ge)&&!m(j,ge)?!1:Fe||!m(this,ge)||!m(z,ge)||m(this,H)&&this[H][ge]?Fe:!0},pe=function(ue,ge){var Fe=w(ue),We=T(ge,!0);if(!(Fe===b&&m(z,We)&&!m(j,We))){var mn=$(Fe,We);return mn&&m(z,We)&&!(m(Fe,H)&&Fe[H][We])&&(mn.enumerable=!0),mn}},fe=function(ue){var ge=q(w(ue)),Fe=[];return W(ge,function(We){!m(z,We)&&!m(ke,We)&&Fe.push(We)}),Fe},Re=function(ue){var ge=ue===b,Fe=q(ge?j:w(ue)),We=[];return W(Fe,function(mn){m(z,mn)&&(!ge||m(b,mn))&&We.push(z[mn])}),We};if(f||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor");var ue=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),ge=ct(ue),Fe=function(We){this===b&&Fe.call(j,We),m(this,H)&&m(this[H],ge)&&(this[H][ge]=!1),Xe(this,ge,S(1,We))};return h&&Ae&&Xe(b,ge,{configurable:!0,set:Fe}),Be(ge,ue)},B(N[me],"toString",function(){return _(this).tag}),B(N,"withoutSetter",function(we){return Be(ct(we),we)}),O.f=re,k.f=R,U.f=pe,C.f=P.f=fe,L.f=Re,Pe.f=function(we){return Be($e(we),we)},h&&(K(N[me],"description",{configurable:!0,get:function(){return _(this).description}}),u||B(b,"propertyIsEnumerable",re,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:N}),W(I(ce),function(we){ot(we)}),a({target:ne,stat:!0,forced:!f},{for:function(we){var ue=String(we);if(m(le,ue))return le[ue];var ge=N(ue);return le[ue]=ge,ie[ge]=ue,ge},keyFor:function(ue){if(!A(ue))throw TypeError(ue+" is not a symbol");if(m(ie,ue))return ie[ue]},useSetter:function(){Ae=!0},useSimple:function(){Ae=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!h},{create:V,defineProperty:R,defineProperties:D,getOwnPropertyDescriptor:pe}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:fe,getOwnPropertySymbols:Re}),a({target:"Object",stat:!0,forced:p(function(){L.f(1)})},{getOwnPropertySymbols:function(ue){return L.f(E(ue))}}),F){var dt=!f||p(function(){var we=N();return F([we])!="[null]"||F({a:we})!="{}"||F(Object(we))!="{}"});a({target:"JSON",stat:!0,forced:dt},{stringify:function(ue,ge,Fe){for(var We=[ue],mn=1,kh;arguments.length>mn;)We.push(arguments[mn++]);if(kh=ge,!(!v(ge)&&ue===void 0||A(ue)))return y(ge)||(ge=function(cI,kl){if(typeof kh=="function"&&(kl=kh.call(this,cI,kl)),!A(kl))return kl}),We[1]=ge,F.apply(null,We)}})}N[me][Ke]||J(N[me],Ke,N[me].valueOf),yt(N,ne),ke[H]=!0},a630:function(i,s,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(h){Array.from(h)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(i,s,o){var a=o("d039");i.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(i,s){var o=Math.ceil,a=Math.floor;i.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(i,s,o){var a=o("b622"),l=a("match");i.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(i,s,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(i,s,o){var a=o("825a");i.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,h={},f=function(d){throw d};i.exports=function(d,p){if(c(h,d))return h[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:f,g=c(p,1)?p[1]:void 0;return h[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:f}):E[1]=1,m.call(E,v,g)})}},ae93:function(i,s,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),h=o("c430"),f=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!h&&!c(m,f)&&l(m,f,p),i.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(i,s,o){var a=o("00ee"),l=o("f5df");i.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(i,s,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,h=/^\s*function ([^ (]*)/,f="name";a&&!(f in c)&&l(c,f,{configurable:!0,get:function(){try{return u.call(this).match(h)[1]}catch{return""}}})},b622:function(i,s,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),h=o("4930"),f=o("fdbf"),d=l("wks"),p=a.Symbol,m=f?p:p&&p.withoutSetter||u;i.exports=function(y){return c(d,y)||(h&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(i,s,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),h=u(function(){c(1)});a({target:"Object",stat:!0,forced:h},{keys:function(d){return c(l(d))}})},b727:function(i,s,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),h=o("65f0"),f=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,w=p==5||E;return function(T,S,x,I){for(var C=c(T),P=l(C),L=a(S,x,3),U=u(P.length),k=0,O=I||h,J=m?O(T,U):y?O(T,0):void 0,B,Q;U>k;k++)if((w||k in P)&&(B=P[k],Q=L(B,k,C),p)){if(m)J[k]=Q;else if(Q)switch(p){case 3:return!0;case 5:return B;case 6:return k;case 2:f.call(J,B)}else if(g)return!1}return E?-1:v||g?g:J}};i.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(i,s,o){var a=o("861d");i.exports=function(l,c){if(!a(l))return l;var u,h;if(c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(h=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l)))return h;throw TypeError("Can't convert object to primitive value")}},c430:function(i,s){i.exports=!1},c6b6:function(i,s){var o={}.toString;i.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(i,s,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});i.exports=u},c740:function(i,s,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),h="findIndex",f=!0,d=u(h);h in[]&&Array(1)[h](function(){f=!1}),a({target:"Array",proto:!0,forced:f||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(h)},c8ba:function(i,s){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}i.exports=o},c975:function(i,s,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),h=[].indexOf,f=!!h&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:f||!d||!p},{indexOf:function(y){return f?h.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(i,s,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");i.exports=function(h,f){var d=l(h),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;f.length>p;)a(d,y=f[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(i,s,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),h=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!h},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(i,s,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);i.exports=function(h){return u?c.createElement(h):{}}},ce4e:function(i,s,o){var a=o("da84"),l=o("9112");i.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(i,s){i.exports={}},d039:function(i,s){i.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(i,s,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};i.exports=function(u,h){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][h]||l[u]&&l[u][h]}},d1e7:function(i,s,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);s.f=c?function(h){var f=l(this,h);return!!f&&f.enumerable}:a},d28b:function(i,s,o){var a=o("746f");a("iterator")},d2bb:function(i,s,o){var a=o("825a"),l=o("3bbe");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},h;try{h=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,h.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?h.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(i,s,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(i,s,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");i.exports=function(h,f,d){h&&!l(h=d?h:h.prototype,u)&&a(h,u,{configurable:!0,value:f})}},d58f:function(i,s,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),h=function(f){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),w=f?E-1:0,T=f?-1:1;if(m<2)for(;;){if(w in g){y=g[w],w+=T;break}if(w+=T,f?w<0:E<=w)throw TypeError("Reduce of empty array with no initial value")}for(;f?w>=0:E>w;w+=T)w in g&&(y=p(y,g[w],w,v));return y}};i.exports={left:h(!1),right:h(!0)}},d784:function(i,s,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),h=o("9112"),f=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var w="ab".split(g);return w.length!==2||w[0]!=="a"||w[1]!=="b"});i.exports=function(g,E,w,T){var S=c(g),x=!l(function(){var k={};return k[S]=function(){return 7},""[g](k)!=7}),I=x&&!l(function(){var k=!1,O=/a/;return g==="split"&&(O={},O.constructor={},O.constructor[f]=function(){return O},O.flags="",O[S]=/./[S]),O.exec=function(){return k=!0,null},O[S](""),!k});if(!x||!I||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var C=/./[S],P=w(S,""[g],function(k,O,J,B,Q){return O.exec===u?x&&!Q?{done:!0,value:C.call(O,J,B)}:{done:!0,value:k.call(J,O,B)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),L=P[0],U=P[1];a(String.prototype,g,L),a(RegExp.prototype,S,E==2?function(k,O){return U.call(k,this,O)}:function(k){return U.call(k,this)})}T&&h(RegExp.prototype[S],"sham",!0)}},d81d:function(i,s,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),h=c("map"),f=u("map");a({target:"Array",proto:!0,forced:!h||!f},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(i,s,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};i.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),h=o("06cf"),f=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=h.f,v=c(m),g={},E=0,w,T;v.length>E;)T=y(m,w=v[E++]),T!==void 0&&f(g,w,T);return g}})},dbf1:function(i,s,o){(function(a){o.d(s,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),h=o("b622"),f=h("iterator"),d=h("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[f]!==p)try{u(v,f,p)}catch{v[f]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(i,s,o){var a=o("ca84"),l=o("7839");i.exports=Object.keys||function(u){return a(u,l)}},e01a:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),h=o("861d"),f=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var S=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),x=this instanceof y?new p(S):S===void 0?p():p(S);return S===""&&(m[x]=!0),x};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",w=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var S=h(this)?this.valueOf():this,x=g.call(S);if(u(m,S))return"";var I=E?x.slice(7,-1):x.replace(w,"$1");return I===""?void 0:I}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(i,s,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),h=c("IE_PROTO"),f=Object.prototype;i.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,h)?d[h]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?f:null}},e177:function(i,s,o){var a=o("d039");i.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(i,s,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),h=o("7dd0"),f="Array Iterator",d=u.set,p=u.getterFor(f);i.exports=h(Array,"Array",function(m,y){d(this,{type:f,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,h=o("83ab"),f=l(function(){u(1)}),d=!h||f;a({target:"Object",stat:!0,forced:d,sham:!h},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(i,s,o){var a=o("b622");s.f=a},e893:function(i,s,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");i.exports=function(h,f){for(var d=l(f),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(h,v)||p(h,v,m(f,v))}}},e8b5:function(i,s,o){var a=o("c6b6");i.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(i,s,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;i.exports=function(h){return h!==void 0&&(l.Array===h||u[c]===h)}},f5df:function(i,s,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),h=l(function(){return arguments}())=="Arguments",f=function(d,p){try{return d[p]}catch{}};i.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=f(p=Object(d),u))=="string"?m:h?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(i,s,o){var a=o("5692"),l=o("90e3"),c=a("keys");i.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(i,s,o){if(o.r(s),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(A,R,D){return R in A?Object.defineProperty(A,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):A[R]=D,A}function h(A,R){var D=Object.keys(A);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(A);R&&(V=V.filter(function(re){return Object.getOwnPropertyDescriptor(A,re).enumerable})),D.push.apply(D,V)}return D}function f(A){for(var R=1;R<arguments.length;R++){var D=arguments[R]!=null?arguments[R]:{};R%2?h(Object(D),!0).forEach(function(V){u(A,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(V){Object.defineProperty(A,V,Object.getOwnPropertyDescriptor(D,V))})}return A}function d(A){if(Array.isArray(A))return A}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(A,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(A)))){var D=[],V=!0,re=!1,pe=void 0;try{for(var fe=A[Symbol.iterator](),Re;!(V=(Re=fe.next()).done)&&(D.push(Re.value),!(R&&D.length===R));V=!0);}catch(dt){re=!0,pe=dt}finally{try{!V&&fe.return!=null&&fe.return()}finally{if(re)throw pe}}return D}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(A,R){(R==null||R>A.length)&&(R=A.length);for(var D=0,V=new Array(R);D<R;D++)V[D]=A[D];return V}function y(A,R){if(A){if(typeof A=="string")return m(A,R);var D=Object.prototype.toString.call(A).slice(8,-1);if(D==="Object"&&A.constructor&&(D=A.constructor.name),D==="Map"||D==="Set")return Array.from(A);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(A,R)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(A,R){return d(A)||p(A,R)||y(A,R)||v()}function E(A){if(Array.isArray(A))return m(A)}function w(A){if(typeof Symbol<"u"&&Symbol.iterator in Object(A))return Array.from(A)}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(A){return E(A)||w(A)||y(A)||T()}var x=o("a352"),I=o.n(x);function C(A){A.parentElement!==null&&A.parentElement.removeChild(A)}function P(A,R,D){var V=D===0?A.children[0]:A.children[D-1].nextSibling;A.insertBefore(R,V)}var L=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(A){var R=Object.create(null);return function(V){var re=R[V];return re||(R[V]=A(V))}}var k=/-(\w)/g,O=U(function(A){return A.replace(k,function(R,D){return D.toUpperCase()})});o("5db7"),o("73d9");var J=["Start","Add","Remove","Update","End"],B=["Choose","Unchoose","Sort","Filter","Clone"],Q=["Move"],se=[Q,J,B].flatMap(function(A){return A}).map(function(A){return"on".concat(A)}),ke={manage:Q,manageAndEmit:J,emit:B};function ct(A){return se.indexOf(A)!==-1}o("caad"),o("2ca0");var $e=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Pe(A){return $e.includes(A)}function ot(A){return["transition-group","TransitionGroup"].includes(A)}function yt(A){return["id","class","role","style"].includes(A)||A.startsWith("data-")||A.startsWith("aria-")||A.startsWith("on")}function M(A){return A.reduce(function(R,D){var V=g(D,2),re=V[0],pe=V[1];return R[re]=pe,R},{})}function W(A){var R=A.$attrs,D=A.componentData,V=D===void 0?{}:D,re=M(Object.entries(R).filter(function(pe){var fe=g(pe,2),Re=fe[0];return fe[1],yt(Re)}));return f(f({},re),V)}function H(A){var R=A.$attrs,D=A.callBackBuilder,V=M(ne(R));Object.entries(D).forEach(function(pe){var fe=g(pe,2),Re=fe[0],dt=fe[1];ke[Re].forEach(function(we){V["on".concat(we)]=dt(we)})});var re="[data-draggable]".concat(V.draggable||"");return f(f({},V),{},{draggable:re})}function ne(A){return Object.entries(A).filter(function(R){var D=g(R,2),V=D[0];return D[1],!yt(V)}).map(function(R){var D=g(R,2),V=D[0],re=D[1];return[O(V),re]}).filter(function(R){var D=g(R,2),V=D[0];return D[1],!ct(V)})}o("c740");function me(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}function Ke(A,R){for(var D=0;D<R.length;D++){var V=R[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(A,V.key,V)}}function _e(A,R,D){return R&&Ke(A.prototype,R),D&&Ke(A,D),A}var _=function(R){var D=R.el;return D},b=function(R,D){return R.__draggable_context=D},N=function(R){return R.__draggable_context},F=function(){function A(R){var D=R.nodes,V=D.header,re=D.default,pe=D.footer,fe=R.root,Re=R.realList;me(this,A),this.defaultNodes=re,this.children=[].concat(S(V),S(re),S(pe)),this.externalComponent=fe.externalComponent,this.rootTransition=fe.transition,this.tag=fe.tag,this.realList=Re}return _e(A,[{key:"render",value:function(D,V){var re=this.tag,pe=this.children,fe=this._isRootComponent,Re=fe?{default:function(){return pe}}:pe;return D(re,V,Re)}},{key:"updated",value:function(){var D=this.defaultNodes,V=this.realList;D.forEach(function(re,pe){b(_(re),{element:V[pe],index:pe})})}},{key:"getUnderlyingVm",value:function(D){return N(D)}},{key:"getVmIndexFromDomIndex",value:function(D,V){var re=this.defaultNodes,pe=re.length,fe=V.children,Re=fe.item(D);if(Re===null)return pe;var dt=N(Re);if(dt)return dt.index;if(pe===0)return 0;var we=_(re[0]),ue=S(fe).findIndex(function(ge){return ge===we});return D<ue?0:pe}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),A}(),$=o("8bbf");function K(A,R){var D=A[R];return D?D():[]}function q(A){var R=A.$slots,D=A.realList,V=A.getKey,re=D||[],pe=["header","footer"].map(function(ge){return K(R,ge)}),fe=g(pe,2),Re=fe[0],dt=fe[1],we=R.item;if(!we)throw new Error("draggable element must have an item slot");var ue=re.flatMap(function(ge,Fe){return we({element:ge,index:Fe}).map(function(We){return We.key=V(ge),We.props=f(f({},We.props||{}),{},{"data-draggable":!0}),We})});if(ue.length!==re.length)throw new Error("Item slot must have only one child");return{header:Re,footer:dt,default:ue}}function Y(A){var R=ot(A),D=!Pe(A)&&!R;return{transition:R,externalComponent:D,tag:D?Object($.resolveComponent)(A):R?$.TransitionGroup:A}}function z(A){var R=A.$slots,D=A.tag,V=A.realList,re=A.getKey,pe=q({$slots:R,realList:V,getKey:re}),fe=Y(D);return new F({nodes:pe,root:fe,realList:V})}function j(A,R){var D=this;Object($.nextTick)(function(){return D.$emit(A.toLowerCase(),R)})}function le(A){var R=this;return function(D,V){if(R.realList!==null)return R["onDrag".concat(A)](D,V)}}function ie(A){var R=this,D=le.call(this,A);return function(V,re){D.call(R,V,re),j.call(R,A,V)}}var ce=null,de={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(R){return R}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},Ae=["update:modelValue","change"].concat(S([].concat(S(ke.manageAndEmit),S(ke.emit)).map(function(A){return A.toLowerCase()}))),Xe=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:de,emits:Ae,data:function(){return{error:!1}},render:function(){try{this.error=!1;var R=this.$slots,D=this.$attrs,V=this.tag,re=this.componentData,pe=this.realList,fe=this.getKey,Re=z({$slots:R,tag:V,realList:pe,getKey:fe});this.componentStructure=Re;var dt=W({$attrs:D,componentData:re});return Re.render($.h,dt)}catch(we){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},we.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&L.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var R=this;if(!this.error){var D=this.$attrs,V=this.$el,re=this.componentStructure;re.updated();var pe=H({$attrs:D,callBackBuilder:{manageAndEmit:function(dt){return ie.call(R,dt)},emit:function(dt){return j.bind(R,dt)},manage:function(dt){return le.call(R,dt)}}}),fe=V.nodeType===1?V:V.parentElement;this._sortable=new I.a(fe,pe),this.targetDomElement=fe,fe.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var R=this.list;return R||this.modelValue},getKey:function(){var R=this.itemKey;return typeof R=="function"?R:function(D){return D[R]}}},watch:{$attrs:{handler:function(R){var D=this._sortable;D&&ne(R).forEach(function(V){var re=g(V,2),pe=re[0],fe=re[1];D.option(pe,fe)})},deep:!0}},methods:{getUnderlyingVm:function(R){return this.componentStructure.getUnderlyingVm(R)||null},getUnderlyingPotencialDraggableComponent:function(R){return R.__draggable_component__},emitChanges:function(R){var D=this;Object($.nextTick)(function(){return D.$emit("change",R)})},alterList:function(R){if(this.list){R(this.list);return}var D=S(this.modelValue);R(D),this.$emit("update:modelValue",D)},spliceList:function(){var R=arguments,D=function(re){return re.splice.apply(re,S(R))};this.alterList(D)},updatePosition:function(R,D){var V=function(pe){return pe.splice(D,0,pe.splice(R,1)[0])};this.alterList(V)},getRelatedContextFromMoveEvent:function(R){var D=R.to,V=R.related,re=this.getUnderlyingPotencialDraggableComponent(D);if(!re)return{component:re};var pe=re.realList,fe={list:pe,component:re};if(D!==V&&pe){var Re=re.getUnderlyingVm(V)||{};return f(f({},Re),fe)}return fe},getVmIndexFromDomIndex:function(R){return this.componentStructure.getVmIndexFromDomIndex(R,this.targetDomElement)},onDragStart:function(R){this.context=this.getUnderlyingVm(R.item),R.item._underlying_vm_=this.clone(this.context.element),ce=R.item},onDragAdd:function(R){var D=R.item._underlying_vm_;if(D!==void 0){C(R.item);var V=this.getVmIndexFromDomIndex(R.newIndex);this.spliceList(V,0,D);var re={element:D,newIndex:V};this.emitChanges({added:re})}},onDragRemove:function(R){if(P(this.$el,R.item,R.oldIndex),R.pullMode==="clone"){C(R.clone);return}var D=this.context,V=D.index,re=D.element;this.spliceList(V,1);var pe={element:re,oldIndex:V};this.emitChanges({removed:pe})},onDragUpdate:function(R){C(R.item),P(R.from,R.item,R.oldIndex);var D=this.context.index,V=this.getVmIndexFromDomIndex(R.newIndex);this.updatePosition(D,V);var re={element:this.context.element,oldIndex:D,newIndex:V};this.emitChanges({moved:re})},computeFutureIndex:function(R,D){if(!R.element)return 0;var V=S(D.to.children).filter(function(Re){return Re.style.display!=="none"}),re=V.indexOf(D.related),pe=R.component.getVmIndexFromDomIndex(re),fe=V.indexOf(ce)!==-1;return fe||!D.willInsertAfter?pe:pe+1},onDragMove:function(R,D){var V=this.move,re=this.realList;if(!V||!re)return!0;var pe=this.getRelatedContextFromMoveEvent(R),fe=this.computeFutureIndex(pe,R),Re=f(f({},this.context),{},{futureIndex:fe}),dt=f(f({},R),{},{relatedContext:pe,draggedContext:Re});return V(dt,D)},onDragEnd:function(){ce=null}}}),Be=Xe;s.default=Be},fb6a:function(i,s,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),h=o("50c4"),f=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),w=[].slice,T=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(x,I){var C=f(this),P=h(C.length),L=u(x,P),U=u(I===void 0?P:I,P),k,O,J;if(c(C)&&(k=C.constructor,typeof k=="function"&&(k===Array||c(k.prototype))?k=void 0:l(k)&&(k=k[E],k===null&&(k=void 0)),k===Array||k===void 0))return w.call(C,L,U);for(O=new(k===void 0?Array:k)(T(U-L,0)),J=0;L<U;L++,J++)L in C&&d(O,J,C[L]);return O.length=J,O}})},fc6a:function(i,s,o){var a=o("44ad"),l=o("1d80");i.exports=function(c){return a(l(c))}},fdbc:function(i,s){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(i,s,o){var a=o("4930");i.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(G4);const O$=o4(Zd),N$=["href"],P$={key:1},D$=gn({__name:"ColororedButton",props:{text:null,url:null,color:null},setup(t){return(e,n)=>(qe(),Ft("button",{class:"mt-3 md:mt-0 text-white font-bold py-2 px-4 rounded-full",style:yo({backgroundColor:t.color})},[t.url?(qe(),Ft("a",{key:0,href:t.url},dn(t.text),9,N$)):(qe(),Ft("p",P$,dn(t.text),1))],4))}});const k$=lm(D$,[["__scopeId","data-v-a9693f67"]]),M$={class:"container mx-auto py-4"},L$=gn({__name:"Home",setup(t){const e=QS(),{fetchAll:n,moveProject:r}=e,{projects:i}=zS(e),s=o=>{o.moved&&r(o.moved.oldIndex,o.moved.newIndex)};return So(()=>{n()}),(o,a)=>(qe(),jn(cm,null,{content:Zn(()=>[nt("div",M$,[Le(lt(O$),{"model-value":lt(i),"item-key":"index",class:"grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none",onChange:s,animation:150,delay:50},{item:Zn(({element:l})=>[Le(am,{name:l.name,url:l.url,description:l.description},{default:Zn(()=>[(qe(!0),Ft(St,null,ca(l.technologies,c=>(qe(),jn(k$,{class:"m-1 md:mt-2",text:c.name,color:c.color},null,8,["text","color"]))),256))]),_:2},1032,["name","url","description"])]),_:1},8,["model-value"])])]),_:1}))}});const F$=lm(L$,[["__scopeId","data-v-463357c8"]]),U$=gn({__name:"Home",setup(t){return(e,n)=>(qe(),jn(F$))}}),$$=gn({__name:"NotFound",setup(t){return(e,n)=>(qe(),jn(cm,null,{content:Zn(()=>[Le(am,{class:"bg-red-800 bg-opacity-50 hover:bg-opacity-50 mt-5 mb-5",name:"Not found.",description:"Where are you going?"})]),_:1}))}}),B$=gn({__name:"NotFound",setup(t){return(e,n)=>(qe(),jn($$))}}),Rc=XS.name,j$=PU({history:XF("/"),routes:[{path:"/",name:"home",meta:{title:Rc+" | Home"},component:U$},{path:"/login",name:"login",meta:{title:Rc+" | Login"},component:W4},{path:"/:pathMatch(.*)*",name:"notfound",meta:{title:Rc+" | 404"},component:B$}]}),Dh=y_(LU);Dh.use(j$);Dh.use(NF,{firebaseApp:UU,modules:[OF()]});Dh.use(YS);Dh.mount("#app");
