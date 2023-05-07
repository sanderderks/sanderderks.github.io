(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function DC(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(s){s(n)}),(r=t.get("*"))&&r.slice().map(function(s){s(e,n)})}}}function lh(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const kC="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",MC=lh(kC);function ko(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Tt(r)?$C(r):ko(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Tt(t))return t;if(ct(t))return t}}const LC=/;(?![^(]*\))/g,FC=/:([^]+)/,UC=/\/\*.*?\*\//gs;function $C(t){const e={};return t.replace(UC,"").split(LC).forEach(n=>{if(n){const r=n.split(FC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ri(t){let e="";if(Tt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Ri(t[n]);r&&(e+=r+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function jC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Tt(e)&&(t.class=Ri(e)),n&&(t.style=ko(n)),t}const BC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VC=lh(BC);function k0(t){return!!t||t===""}function HC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=xs(t[r],e[r]);return n}function xs(t,e){if(t===e)return!0;let n=rv(t),r=rv(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ja(t),r=Ja(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?HC(t,e):!1;if(n=ct(t),r=ct(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xs(t[o],e[o]))return!1}}return String(t)===String(e)}function ch(t,e){return t.findIndex(n=>xs(n,e))}const $t=t=>Tt(t)?t:t==null?"":ae(t)||ct(t)&&(t.toString===L0||!Re(t.toString))?JSON.stringify(t,M0,2):String(t),M0=(t,e)=>e&&e.__v_isRef?M0(t,e.value):to(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xi(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!ae(e)&&!F0(e)?String(e):e,it={},eo=[],or=()=>{},KC=()=>!1,WC=/^on[^a-z]/,Il=t=>WC.test(t),Wp=t=>t.startsWith("onUpdate:"),Dt=Object.assign,Gp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},GC=Object.prototype.hasOwnProperty,qe=(t,e)=>GC.call(t,e),ae=Array.isArray,to=t=>Mo(t)==="[object Map]",xi=t=>Mo(t)==="[object Set]",rv=t=>Mo(t)==="[object Date]",zC=t=>Mo(t)==="[object RegExp]",Re=t=>typeof t=="function",Tt=t=>typeof t=="string",Ja=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",zp=t=>ct(t)&&Re(t.then)&&Re(t.catch),L0=Object.prototype.toString,Mo=t=>L0.call(t),YC=t=>Mo(t).slice(8,-1),F0=t=>Mo(t)==="[object Object]",Yp=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xa=lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},XC=/-(\w)/g,xn=uh(t=>t.replace(XC,(e,n)=>n?n.toUpperCase():"")),QC=/\B([A-Z])/g,Kn=uh(t=>t.replace(QC,"-$1").toLowerCase()),Cl=uh(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oa=uh(t=>t?`on${Cl(t)}`:""),mo=(t,e)=>!Object.is(t,e),no=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ou=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},au=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lu=t=>{const e=Tt(t)?Number(t):NaN;return isNaN(e)?t:e};let sv;const qC=()=>sv||(sv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mn;class Xp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Mn;try{return Mn=this,e()}finally{Mn=n}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hh(t){return new Xp(t)}function U0(t,e=Mn){e&&e.active&&e.effects.push(t)}function Qp(){return Mn}function $0(t){Mn&&Mn.cleanups.push(t)}const qp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},j0=t=>(t.w&Os)>0,B0=t=>(t.n&Os)>0,JC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Os},ZC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];j0(s)&&!B0(s)?s.delete(t):e[n++]=s,s.w&=~Os,s.n&=~Os}e.length=n}},cu=new WeakMap;let ga=0,Os=1;const md=30;let er;const ii=Symbol(""),vd=Symbol("");class Al{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,U0(this,r)}run(){if(!this.active)return this.fn();let e=er,n=Ts;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=er,er=this,Ts=!0,Os=1<<++ga,ga<=md?JC(this):iv(this),this.fn()}finally{ga<=md&&ZC(this),Os=1<<--ga,er=this.parent,Ts=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){er===this?this.deferStop=!0:this.active&&(iv(this),this.onStop&&this.onStop(),this.active=!1)}}function iv(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function e1(t,e){t.effect&&(t=t.effect.fn);const n=new Al(t);e&&(Dt(n,e),e.scope&&U0(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function t1(t){t.effect.stop()}let Ts=!0;const V0=[];function Lo(){V0.push(Ts),Ts=!1}function Fo(){const t=V0.pop();Ts=t===void 0?!0:t}function Pn(t,e,n){if(Ts&&er){let r=cu.get(t);r||cu.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qp()),H0(s)}}function H0(t,e){let n=!1;ga<=md?B0(t)||(t.n|=Os,n=!j0(t)):n=!t.has(er),n&&(t.add(er),er.deps.push(t))}function qr(t,e,n,r,s,i){const o=cu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ae(t)?Yp(n)&&a.push(o.get("length")):(a.push(o.get(ii)),to(t)&&a.push(o.get(vd)));break;case"delete":ae(t)||(a.push(o.get(ii)),to(t)&&a.push(o.get(vd)));break;case"set":to(t)&&a.push(o.get(ii));break}if(a.length===1)a[0]&&yd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yd(qp(l))}}function yd(t,e){const n=ae(t)?t:[...t];for(const r of n)r.computed&&ov(r);for(const r of n)r.computed||ov(r)}function ov(t,e){(t!==er||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function n1(t,e){var n;return(n=cu.get(t))===null||n===void 0?void 0:n.get(e)}const r1=lh("__proto__,__v_isRef,__isVue"),K0=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ja)),s1=fh(),i1=fh(!1,!0),o1=fh(!0),a1=fh(!0,!0),av=l1();function l1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ue(this);for(let i=0,o=this.length;i<o;i++)Pn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lo();const r=Ue(this)[e].apply(this,n);return Fo(),r}}),t}function c1(t){const e=Ue(this);return Pn(e,"has",t),e.hasOwnProperty(t)}function fh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?q0:Q0:e?X0:Y0).get(r))return r;const o=ae(r);if(!t){if(o&&qe(av,s))return Reflect.get(av,s,i);if(s==="hasOwnProperty")return c1}const a=Reflect.get(r,s,i);return(Ja(s)?K0.has(s):r1(s))||(t||Pn(r,"get",s),e)?a:Ct(a)?o&&Yp(s)?a:a.value:ct(a)?t?Zp(a):fr(a):a}}const u1=W0(),h1=W0(!0);function W0(t=!1){return function(n,r,s,i){let o=n[r];if(di(o)&&Ct(o)&&!Ct(s))return!1;if(!t&&(!Za(s)&&!di(s)&&(o=Ue(o),s=Ue(s)),!ae(n)&&Ct(o)&&!Ct(s)))return o.value=s,!0;const a=ae(n)&&Yp(r)?Number(r)<n.length:qe(n,r),l=Reflect.set(n,r,s,i);return n===Ue(i)&&(a?mo(s,o)&&qr(n,"set",r,s):qr(n,"add",r,s)),l}}function f1(t,e){const n=qe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qr(t,"delete",e,void 0),r}function d1(t,e){const n=Reflect.has(t,e);return(!Ja(e)||!K0.has(e))&&Pn(t,"has",e),n}function p1(t){return Pn(t,"iterate",ae(t)?"length":ii),Reflect.ownKeys(t)}const G0={get:s1,set:u1,deleteProperty:f1,has:d1,ownKeys:p1},z0={get:o1,set(t,e){return!0},deleteProperty(t,e){return!0}},g1=Dt({},G0,{get:i1,set:h1}),m1=Dt({},z0,{get:a1}),Jp=t=>t,dh=t=>Reflect.getPrototypeOf(t);function uc(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ue(t),i=Ue(e);n||(e!==i&&Pn(s,"get",e),Pn(s,"get",i));const{has:o}=dh(s),a=r?Jp:n?tg:el;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function hc(t,e=!1){const n=this.__v_raw,r=Ue(n),s=Ue(t);return e||(t!==s&&Pn(r,"has",t),Pn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fc(t,e=!1){return t=t.__v_raw,!e&&Pn(Ue(t),"iterate",ii),Reflect.get(t,"size",t)}function lv(t){t=Ue(t);const e=Ue(this);return dh(e).has.call(e,t)||(e.add(t),qr(e,"add",t,t)),this}function cv(t,e){e=Ue(e);const n=Ue(this),{has:r,get:s}=dh(n);let i=r.call(n,t);i||(t=Ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mo(e,o)&&qr(n,"set",t,e):qr(n,"add",t,e),this}function uv(t){const e=Ue(this),{has:n,get:r}=dh(e);let s=n.call(e,t);s||(t=Ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qr(e,"delete",t,void 0),i}function hv(){const t=Ue(this),e=t.size!==0,n=t.clear();return e&&qr(t,"clear",void 0,void 0),n}function dc(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ue(o),l=e?Jp:t?tg:el;return!t&&Pn(a,"iterate",ii),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function pc(t,e,n){return function(...r){const s=this.__v_raw,i=Ue(s),o=to(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Jp:e?tg:el;return!e&&Pn(i,"iterate",l?vd:ii),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function os(t){return function(...e){return t==="delete"?!1:this}}function v1(){const t={get(i){return uc(this,i)},get size(){return fc(this)},has:hc,add:lv,set:cv,delete:uv,clear:hv,forEach:dc(!1,!1)},e={get(i){return uc(this,i,!1,!0)},get size(){return fc(this)},has:hc,add:lv,set:cv,delete:uv,clear:hv,forEach:dc(!1,!0)},n={get(i){return uc(this,i,!0)},get size(){return fc(this,!0)},has(i){return hc.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:dc(!0,!1)},r={get(i){return uc(this,i,!0,!0)},get size(){return fc(this,!0)},has(i){return hc.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:dc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pc(i,!1,!1),n[i]=pc(i,!0,!1),e[i]=pc(i,!1,!0),r[i]=pc(i,!0,!0)}),[t,n,e,r]}const[y1,E1,_1,w1]=v1();function ph(t,e){const n=e?t?w1:_1:t?E1:y1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(qe(n,s)&&s in r?n:r,s,i)}const b1={get:ph(!1,!1)},T1={get:ph(!1,!0)},S1={get:ph(!0,!1)},I1={get:ph(!0,!0)},Y0=new WeakMap,X0=new WeakMap,Q0=new WeakMap,q0=new WeakMap;function C1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A1(t){return t.__v_skip||!Object.isExtensible(t)?0:C1(YC(t))}function fr(t){return di(t)?t:gh(t,!1,G0,b1,Y0)}function J0(t){return gh(t,!1,g1,T1,X0)}function Zp(t){return gh(t,!0,z0,S1,Q0)}function R1(t){return gh(t,!0,m1,I1,q0)}function gh(t,e,n,r,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=A1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function yr(t){return di(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function di(t){return!!(t&&t.__v_isReadonly)}function Za(t){return!!(t&&t.__v_isShallow)}function eg(t){return yr(t)||di(t)}function Ue(t){const e=t&&t.__v_raw;return e?Ue(e):t}function pi(t){return ou(t,"__v_skip",!0),t}const el=t=>ct(t)?fr(t):t,tg=t=>ct(t)?Zp(t):t;function ng(t){Ts&&er&&(t=Ue(t),H0(t.dep||(t.dep=qp())))}function mh(t,e){t=Ue(t);const n=t.dep;n&&yd(n)}function Ct(t){return!!(t&&t.__v_isRef===!0)}function wn(t){return e_(t,!1)}function Z0(t){return e_(t,!0)}function e_(t,e){return Ct(t)?t:new x1(t,e)}class x1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ue(e),this._value=n?e:el(e)}get value(){return ng(this),this._value}set value(e){const n=this.__v_isShallow||Za(e)||di(e);e=n?e:Ue(e),mo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:el(e),mh(this))}}function O1(t){mh(t)}function fe(t){return Ct(t)?t.value:t}const N1={get:(t,e,n)=>fe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rg(t){return yr(t)?t:new Proxy(t,N1)}class P1{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ng(this),()=>mh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function D1(t){return new P1(t)}function t_(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=sg(t,n);return e}class k1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return n1(Ue(this._object),this._key)}}function sg(t,e,n){const r=t[e];return Ct(r)?r:new k1(t,e,n)}var n_;class M1{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[n_]=!1,this._dirty=!0,this.effect=new Al(e,()=>{this._dirty||(this._dirty=!0,mh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ue(this);return ng(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}n_="__v_isReadonly";function L1(t,e,n=!1){let r,s;const i=Re(t);return i?(r=t,s=or):(r=t.get,s=t.set),new M1(r,s,i||!s,n)}function F1(t,...e){}function U1(t,e){}function Kr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Oi(i,e,n)}return s}function Un(t,e,n,r){if(Re(t)){const i=Kr(t,e,n,r);return i&&zp(i)&&i.catch(o=>{Oi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Un(t[i],e,n,r));return s}function Oi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kr(l,null,10,[t,o,a]);return}}$1(t,n,s,r)}function $1(t,e,n,r=!0){console.error(t)}let tl=!1,Ed=!1;const ln=[];let pr=0;const ro=[];let Lr=null,Js=0;const r_=Promise.resolve();let ig=null;function Ni(t){const e=ig||r_;return t?e.then(this?t.bind(this):t):e}function j1(t){let e=pr+1,n=ln.length;for(;e<n;){const r=e+n>>>1;nl(ln[r])<t?e=r+1:n=r}return e}function vh(t){(!ln.length||!ln.includes(t,tl&&t.allowRecurse?pr+1:pr))&&(t.id==null?ln.push(t):ln.splice(j1(t.id),0,t),s_())}function s_(){!tl&&!Ed&&(Ed=!0,ig=r_.then(i_))}function B1(t){const e=ln.indexOf(t);e>pr&&ln.splice(e,1)}function og(t){ae(t)?ro.push(...t):(!Lr||!Lr.includes(t,t.allowRecurse?Js+1:Js))&&ro.push(t),s_()}function fv(t,e=tl?pr+1:0){for(;e<ln.length;e++){const n=ln[e];n&&n.pre&&(ln.splice(e,1),e--,n())}}function uu(t){if(ro.length){const e=[...new Set(ro)];if(ro.length=0,Lr){Lr.push(...e);return}for(Lr=e,Lr.sort((n,r)=>nl(n)-nl(r)),Js=0;Js<Lr.length;Js++)Lr[Js]();Lr=null,Js=0}}const nl=t=>t.id==null?1/0:t.id,V1=(t,e)=>{const n=nl(t)-nl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function i_(t){Ed=!1,tl=!0,ln.sort(V1);const e=or;try{for(pr=0;pr<ln.length;pr++){const n=ln[pr];n&&n.active!==!1&&Kr(n,null,14)}}finally{pr=0,ln.length=0,uu(),tl=!1,ig=null,(ln.length||ro.length)&&i_()}}let Ki,gc=[];function o_(t,e){var n,r;Ki=t,Ki?(Ki.enabled=!0,gc.forEach(({event:s,args:i})=>Ki.emit(s,...i)),gc=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{o_(i,e)}),setTimeout(()=>{Ki||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,gc=[])},3e3)):gc=[]}function H1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||it;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||it;f&&(s=n.map(d=>Tt(d)?d.trim():d)),h&&(s=n.map(au))}let a,l=r[a=Oa(e)]||r[a=Oa(xn(e))];!l&&i&&(l=r[a=Oa(Kn(e))]),l&&Un(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Un(c,t,6,s)}}function a_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Re(t)){const l=c=>{const u=a_(c,e,!0);u&&(a=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ct(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):Dt(o,i),ct(t)&&r.set(t,o),o)}function yh(t,e){return!t||!Il(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,Kn(e))||qe(t,e))}let Zt=null,Eh=null;function rl(t){const e=Zt;return Zt=t,Eh=t&&t.type.__scopeId||null,e}function l_(t){Eh=t}function c_(){Eh=null}const K1=t=>At;function At(t,e=Zt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ad(-1);const i=rl(e);let o;try{o=t(...s)}finally{rl(i),r._d&&Ad(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=rl(t);try{if(n.shapeFlag&4){const w=s||r;y=Ln(u.call(w,w,h,i,d,f,p)),v=l}else{const w=e;y=Ln(w.length>1?w(i,{attrs:l,slots:a,emit:c}):w(i,null)),v=e.props?l:G1(l)}}catch(w){Da.length=0,Oi(w,t,1),y=pe(fn)}let E=y;if(v&&m!==!1){const w=Object.keys(v),{shapeFlag:T}=E;w.length&&T&7&&(o&&w.some(Wp)&&(v=z1(v,o)),E=Sr(E,v))}return n.dirs&&(E=Sr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,rl(g),y}function W1(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ns(r)){if(r.type!==fn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const G1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Il(n))&&((e||(e={}))[n]=t[n]);return e},z1=(t,e)=>{const n={};for(const r in t)(!Wp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Y1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?dv(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!yh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dv(r,o,c):!0:!!o;return!1}function dv(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yh(n,i))return!0}return!1}function ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const u_=t=>t.__isSuspense,X1={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?q1(e,n,r,s,i,o,a,l,c):J1(t,e,n,r,s,o,a,l,c)},hydrate:Z1,create:lg,normalize:eA},Q1=X1;function sl(t,e){const n=t.props&&t.props[e];Re(n)&&n()}function q1(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=lg(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(sl(t,"onPending"),sl(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),so(f,t.ssFallback)):f.resolve()}function J1(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=h;if(m)h.pendingBranch=f,tr(f,m)?(l(m,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():y&&(l(p,d,n,r,s,null,i,o,a),so(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):c(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),so(h,d))):p&&tr(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&tr(f,p))l(p,f,n,r,s,h,i,o,a),so(h,f);else if(sl(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function lg(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:y}}=c,v=t.props?lu(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:w,activeBranch:T,pendingBranch:S,pendingId:x,effects:I,parentComponent:C,container:P}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const k=T&&S.transition&&S.transition.mode==="out-in";k&&(T.transition.afterLeave=()=>{x===g.pendingId&&f(S,P,O,0)});let{anchor:O}=g;T&&(O=p(T),d(T,C,g,!0)),k||f(S,P,O,0)}so(g,S),g.pendingBranch=null,g.isInFallback=!1;let L=g.parent,U=!1;for(;L;){if(L.pendingBranch){L.effects.push(...I),U=!0;break}L=L.parent}U||og(I),g.effects=[],sl(w,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:w,activeBranch:T,parentComponent:S,container:x,isSVG:I}=g;sl(w,"onFallback");const C=p(T),P=()=>{g.isInFallback&&(h(null,E,x,C,S,null,I,a,l),so(g,E))},L=E.transition&&E.transition.mode==="out-in";L&&(T.transition.afterLeave=P),g.isInFallback=!0,d(T,S,null,!0),L||P()},move(E,w,T){g.activeBranch&&f(g.activeBranch,E,w,T),g.container=E},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(E,w){const T=!!g.pendingBranch;T&&g.deps++;const S=E.vnode.el;E.asyncDep.catch(x=>{Oi(x,E,0)}).then(x=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:I}=E;Rd(E,x,!1),S&&(I.el=S);const C=!S&&E.subTree.el;w(E,I,m(S||E.subTree.el),S?null:p(E.subTree),g,o,l),C&&y(C),ag(E,I.el),T&&--g.deps===0&&g.resolve()})},unmount(E,w){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,w),g.pendingBranch&&d(g.pendingBranch,n,E,w)}};return g}function Z1(t,e,n,r,s,i,o,a,l){const c=e.suspense=lg(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function eA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=pv(r?n.default:n),t.ssFallback=r?pv(n.fallback):pe(fn)}function pv(t){let e;if(Re(t)){const n=vi&&t._c;n&&(t._d=!1,ge()),t=t(),n&&(t._d=!0,e=An,F_())}return ae(t)&&(t=W1(t)),t=Ln(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function h_(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):og(t)}function so(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ag(r,s))}function io(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function On(t,e,n=!1){const r=Pt||Zt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Re(e)?e.call(r.proxy):e}}function tA(t,e){return Rl(t,null,e)}function f_(t,e){return Rl(t,null,{flush:"post"})}function nA(t,e){return Rl(t,null,{flush:"sync"})}const mc={};function Wr(t,e,n){return Rl(t,e,n)}function Rl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=it){const a=Qp()===(Pt==null?void 0:Pt.scope)?Pt:null;let l,c=!1,u=!1;if(Ct(t)?(l=()=>t.value,c=Za(t)):yr(t)?(l=()=>t,r=!0):ae(t)?(u=!0,c=t.some(E=>yr(E)||Za(E)),l=()=>t.map(E=>{if(Ct(E))return E.value;if(yr(E))return ei(E);if(Re(E))return Kr(E,a,2)})):Re(t)?e?l=()=>Kr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Un(t,a,3,[f])}:l=or,e&&r){const E=l;l=()=>ei(E())}let h,f=E=>{h=v.onStop=()=>{Kr(E,a,4)}},d;if(yo)if(f=or,e?n&&Un(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const E=X_();d=E.__watcherHandles||(E.__watcherHandles=[])}else return or;let p=u?new Array(t.length).fill(mc):mc;const m=()=>{if(v.active)if(e){const E=v.run();(r||c||(u?E.some((w,T)=>mo(w,p[T])):mo(E,p)))&&(h&&h(),Un(e,a,3,[E,p===mc?void 0:u&&p[0]===mc?[]:p,f]),p=E)}else v.run()};m.allowRecurse=!!e;let y;s==="sync"?y=m:s==="post"?y=()=>Xt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>vh(m));const v=new Al(l,y);e?n?m():p=v.run():s==="post"?Xt(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&Gp(a.scope.effects,v)};return d&&d.push(g),g}function rA(t,e,n){const r=this.proxy,s=Tt(t)?t.includes(".")?d_(r,t):()=>r[t]:t.bind(r,r);let i;Re(e)?i=e:(i=e.handler,n=e);const o=Pt;Ps(this);const a=Rl(s,i.bind(r),n);return o?Ps(o):Ss(),a}function d_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ei(t,e){if(!ct(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ct(t))ei(t.value,e);else if(ae(t))for(let n=0;n<t.length;n++)ei(t[n],e);else if(xi(t)||to(t))t.forEach(n=>{ei(n,e)});else if(F0(t))for(const n in t)ei(t[n],e);return t}function cg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return js(()=>{t.isMounted=!0}),Th(()=>{t.isUnmounting=!0}),t}const Vn=[Function,Array],sA={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},setup(t,{slots:e}){const n=Nr(),r=cg();let s;return()=>{const i=e.default&&_h(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const m of i)if(m.type!==fn){o=m;break}}const a=Ue(t),{mode:l}=a;if(r.isLeaving)return Ef(o);const c=gv(o);if(!c)return Ef(o);const u=vo(c,a,r,n);gi(c,u);const h=n.subTree,f=h&&gv(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();s===void 0?s=m:m!==s&&(s=m,d=!0)}if(f&&f.type!==fn&&(!tr(c,f)||d)){const m=vo(f,a,r,n);if(gi(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ef(o);l==="in-out"&&c.type!==fn&&(m.delayLeave=(y,v,g)=>{const E=p_(r,f);E[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},ug=sA;function p_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vo(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),w=p_(n,t),T=(I,C)=>{I&&Un(I,r,9,C)},S=(I,C)=>{const P=C[1];T(I,C),ae(I)?I.every(L=>L.length<=1)&&P():I.length<=1&&P()},x={mode:i,persisted:o,beforeEnter(I){let C=a;if(!n.isMounted)if(s)C=m||a;else return;I._leaveCb&&I._leaveCb(!0);const P=w[E];P&&tr(t,P)&&P.el._leaveCb&&P.el._leaveCb(),T(C,[I])},enter(I){let C=l,P=c,L=u;if(!n.isMounted)if(s)C=y||l,P=v||c,L=g||u;else return;let U=!1;const k=I._enterCb=O=>{U||(U=!0,O?T(L,[I]):T(P,[I]),x.delayedLeave&&x.delayedLeave(),I._enterCb=void 0)};C?S(C,[I,k]):k()},leave(I,C){const P=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return C();T(h,[I]);let L=!1;const U=I._leaveCb=k=>{L||(L=!0,C(),k?T(p,[I]):T(d,[I]),I._leaveCb=void 0,w[P]===t&&delete w[P])};w[P]=t,f?S(f,[I,U]):U()},clone(I){return vo(I,e,n,r)}};return x}function Ef(t){if(xl(t))return t=Sr(t),t.children=null,t}function gv(t){return xl(t)?t.children?t.children[0]:void 0:t}function gi(t,e){t.shapeFlag&6&&t.component?gi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _h(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(_h(o.children,e,a))):(e||o.type!==fn)&&r.push(a!=null?Sr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function st(t){return Re(t)?{setup:t,name:t.name}:t}const oi=t=>!!t.type.__asyncLoader;function iA(t){Re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(h()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return st({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Pt;if(c)return()=>_f(c,d);const p=g=>{l=null,Oi(g,d,13,!r)};if(o&&d.suspense||yo)return f().then(g=>()=>_f(g,d)).catch(g=>(p(g),()=>r?pe(r,{error:g}):null));const m=wn(!1),y=wn(),v=wn(!!s);return s&&setTimeout(()=>{v.value=!1},s),i!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),y.value=g}},i),f().then(()=>{m.value=!0,d.parent&&xl(d.parent.vnode)&&vh(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return _f(c,d);if(y.value&&r)return pe(r,{error:y.value});if(n&&!v.value)return pe(n)}}})}function _f(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const xl=t=>t.type.__isKeepAlive,oA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Nr(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,E,w,T,S)=>{const x=g.component;c(g,E,w,0,a),l(x.vnode,g,E,w,x,a,T,g.slotScopeIds,S),Xt(()=>{x.isDeactivated=!1,x.a&&no(x.a);const I=g.props&&g.props.onVnodeMounted;I&&Cn(I,x.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,f,null,1,a),Xt(()=>{E.da&&no(E.da);const w=g.props&&g.props.onVnodeUnmounted;w&&Cn(w,E.parent,g),E.isDeactivated=!0},a)};function d(g){wf(g),u(g,n,a,!0)}function p(g){s.forEach((E,w)=>{const T=Od(E.type);T&&(!g||!g(T))&&m(w)})}function m(g){const E=s.get(g);!o||!tr(E,o)?d(E):o&&wf(o),s.delete(g),i.delete(g)}Wr(()=>[t.include,t.exclude],([g,E])=>{g&&p(w=>ma(g,w)),E&&p(w=>!ma(E,w))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&s.set(y,bf(n.subTree))};return js(v),bh(v),Th(()=>{s.forEach(g=>{const{subTree:E,suspense:w}=n,T=bf(E);if(g.type===T.type&&g.key===T.key){wf(T);const S=T.component.da;S&&Xt(S,w);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!Ns(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let w=bf(E);const T=w.type,S=Od(oi(w)?w.type.__asyncResolved||{}:T),{include:x,exclude:I,max:C}=t;if(x&&(!S||!ma(x,S))||I&&S&&ma(I,S))return o=w,E;const P=w.key==null?T:w.key,L=s.get(P);return w.el&&(w=Sr(w),E.shapeFlag&128&&(E.ssContent=w)),y=P,L?(w.el=L.el,w.component=L.component,w.transition&&gi(w,w.transition),w.shapeFlag|=512,i.delete(P),i.add(P)):(i.add(P),C&&i.size>parseInt(C,10)&&m(i.values().next().value)),w.shapeFlag|=256,o=w,u_(E.type)?E:w}}},aA=oA;function ma(t,e){return ae(t)?t.some(n=>ma(n,e)):Tt(t)?t.split(",").includes(e):zC(t)?t.test(e):!1}function g_(t,e){v_(t,"a",e)}function m_(t,e){v_(t,"da",e)}function v_(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wh(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xl(s.parent.vnode)&&lA(r,e,n,s),s=s.parent}}function lA(t,e,n,r){const s=wh(e,t,r,!0);Sh(()=>{Gp(r[e],s)},n)}function wf(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function bf(t){return t.shapeFlag&128?t.ssContent:t}function wh(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lo(),Ps(n);const a=Un(e,n,t,o);return Ss(),Fo(),a});return r?s.unshift(i):s.push(i),i}}const rs=t=>(e,n=Pt)=>(!yo||t==="sp")&&wh(t,(...r)=>e(...r),n),y_=rs("bm"),js=rs("m"),E_=rs("bu"),bh=rs("u"),Th=rs("bum"),Sh=rs("um"),__=rs("sp"),w_=rs("rtg"),b_=rs("rtc");function T_(t,e=Pt){wh("ec",t,e)}function _d(t,e){const n=Zt;if(n===null)return t;const r=Ch(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=it]=e[i];o&&(Re(o)&&(o={mounted:o,updated:o}),o.deep&&ei(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Lo(),Un(l,n,8,[t.el,a,t,e]),Fo())}}const hg="components",cA="directives";function Ol(t,e){return fg(hg,t,!0,e)||t}const S_=Symbol();function uA(t){return Tt(t)?fg(hg,t,!1)||t:t||S_}function hA(t){return fg(cA,t)}function fg(t,e,n=!0,r=!1){const s=Zt||Pt;if(s){const i=s.type;if(t===hg){const a=Od(i,!1);if(a&&(a===e||a===xn(e)||a===Cl(xn(e))))return i}const o=mv(s[t]||i[t],e)||mv(s.appContext[t],e);return!o&&r?i:o}}function mv(t,e){return t&&(t[e]||t[xn(e)]||t[Cl(xn(e))])}function Uo(t,e,n,r){let s;const i=n&&n[r];if(ae(t)||Tt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ct(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function fA(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ae(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function ai(t,e,n={},r,s){if(Zt.isCE||Zt.parent&&oi(Zt.parent)&&Zt.parent.isCE)return e!=="default"&&(n.name=e),pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ge();const o=i&&I_(i(n)),a=bt(lt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function I_(t){return t.some(e=>Ns(e)?!(e.type===fn||e.type===lt&&!I_(e.children)):!0)?t:null}function dA(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Oa(r)]=t[r];return n}const wd=t=>t?H_(t)?Ch(t)||t.proxy:wd(t.parent):null,Na=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wd(t.parent),$root:t=>wd(t.root),$emit:t=>t.emit,$options:t=>dg(t),$forceUpdate:t=>t.f||(t.f=()=>vh(t.update)),$nextTick:t=>t.n||(t.n=Ni.bind(t.proxy)),$watch:t=>rA.bind(t)}),Tf=(t,e)=>t!==it&&!t.__isScriptSetup&&qe(t,e),bd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tf(r,e))return o[e]=1,r[e];if(s!==it&&qe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&qe(c,e))return o[e]=3,i[e];if(n!==it&&qe(n,e))return o[e]=4,n[e];Td&&(o[e]=0)}}const u=Na[e];let h,f;if(u)return e==="$attrs"&&Pn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==it&&qe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tf(s,e)?(s[e]=n,!0):r!==it&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==it&&qe(t,o)||Tf(e,o)||(a=i[0])&&qe(a,o)||qe(r,o)||qe(Na,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},pA=Dt({},bd,{get(t,e){if(e!==Symbol.unscopables)return bd.get(t,e,t)},has(t,e){return e[0]!=="_"&&!MC(e)}});let Td=!0;function gA(t){const e=dg(t),n=t.proxy,r=t.ctx;Td=!1,e.beforeCreate&&vv(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:w,render:T,renderTracked:S,renderTriggered:x,errorCaptured:I,serverPrefetch:C,expose:P,inheritAttrs:L,components:U,directives:k,filters:O}=e;if(c&&mA(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const q in o){const ie=o[q];Re(ie)&&(r[q]=ie.bind(n))}if(s){const q=s.call(n,n);ct(q)&&(t.data=fr(q))}if(Td=!0,i)for(const q in i){const ie=i[q],$e=Re(ie)?ie.bind(n,n):Re(ie.get)?ie.get.bind(n,n):or,ft=!Re(ie)&&Re(ie.set)?ie.set.bind(n):or,Ke=Ut({get:$e,set:ft});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Fe=>Ke.value=Fe})}if(a)for(const q in a)C_(a[q],r,n,q);if(l){const q=Re(l)?l.call(n):l;Reflect.ownKeys(q).forEach(ie=>{io(ie,q[ie])})}u&&vv(u,t,"c");function j(q,ie){ae(ie)?ie.forEach($e=>q($e.bind(n))):ie&&q(ie.bind(n))}if(j(y_,h),j(js,f),j(E_,d),j(bh,p),j(g_,m),j(m_,y),j(T_,I),j(b_,S),j(w_,x),j(Th,g),j(Sh,w),j(__,C),ae(P))if(P.length){const q=t.exposed||(t.exposed={});P.forEach(ie=>{Object.defineProperty(q,ie,{get:()=>n[ie],set:$e=>n[ie]=$e})})}else t.exposed||(t.exposed={});T&&t.render===or&&(t.render=T),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function mA(t,e,n=or,r=!1){ae(t)&&(t=Sd(t));for(const s in t){const i=t[s];let o;ct(i)?"default"in i?o=On(i.from||s,i.default,!0):o=On(i.from||s):o=On(i),Ct(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function vv(t,e,n){Un(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function C_(t,e,n,r){const s=r.includes(".")?d_(n,r):()=>n[r];if(Tt(t)){const i=e[t];Re(i)&&Wr(s,i)}else if(Re(t))Wr(s,t.bind(n));else if(ct(t))if(ae(t))t.forEach(i=>C_(i,e,n,r));else{const i=Re(t.handler)?t.handler.bind(n):e[t.handler];Re(i)&&Wr(s,i,t)}}function dg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>hu(l,c,o,!0)),hu(l,e,o)),ct(e)&&i.set(e,l),l}function hu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&hu(t,i,n,!0),s&&s.forEach(o=>hu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vA={data:yv,props:Ys,emits:Ys,methods:Ys,computed:Ys,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:Ys,directives:Ys,watch:EA,provide:yv,inject:yA};function yv(t,e){return e?t?function(){return Dt(Re(t)?t.call(this,this):t,Re(e)?e.call(this,this):e)}:e:t}function yA(t,e){return Ys(Sd(t),Sd(e))}function Sd(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?Dt(Dt(Object.create(null),t),e):e}function EA(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const r in e)n[r]=yn(t[r],e[r]);return n}function _A(t,e,n,r=!1){const s={},i={};ou(i,Ih,1),t.propsDefaults=Object.create(null),A_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:J0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function wA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ue(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(yh(t.emitsOptions,f))continue;const d=e[f];if(l)if(qe(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=xn(f);s[p]=Id(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{A_(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!qe(e,h)&&((u=Kn(h))===h||!qe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Id(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!qe(e,h))&&(delete i[h],c=!0)}c&&qr(t,"set","$attrs")}function A_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xa(l))continue;const c=e[l];let u;s&&qe(s,u=xn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:yh(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ue(n),c=a||it;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Id(s,l,h,c[h],t,!qe(c,h))}}return o}function Id(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=qe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Re(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ps(s),r=c[n]=l.call(null,e),Ss())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Kn(n))&&(r=!0))}return r}function R_(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Re(t)){const u=h=>{l=!0;const[f,d]=R_(h,e,!0);Dt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ct(t)&&r.set(t,eo),eo;if(ae(i))for(let u=0;u<i.length;u++){const h=xn(i[u]);Ev(h)&&(o[h]=it)}else if(i)for(const u in i){const h=xn(u);if(Ev(h)){const f=i[u],d=o[h]=ae(f)||Re(f)?{type:f}:Object.assign({},f);if(d){const p=bv(Boolean,d.type),m=bv(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||qe(d,"default"))&&a.push(h)}}}const c=[o,a];return ct(t)&&r.set(t,c),c}function Ev(t){return t[0]!=="$"}function _v(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wv(t,e){return _v(t)===_v(e)}function bv(t,e){return ae(e)?e.findIndex(n=>wv(n,t)):Re(e)&&wv(e,t)?0:-1}const x_=t=>t[0]==="_"||t==="$stable",pg=t=>ae(t)?t.map(Ln):[Ln(t)],bA=(t,e,n)=>{if(e._n)return e;const r=At((...s)=>pg(e(...s)),n);return r._c=!1,r},O_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(x_(s))continue;const i=t[s];if(Re(i))e[s]=bA(s,i,r);else if(i!=null){const o=pg(i);e[s]=()=>o}}},N_=(t,e)=>{const n=pg(e);t.slots.default=()=>n},TA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ue(e),ou(e,"_",n)):O_(e,t.slots={})}else t.slots={},e&&N_(t,e);ou(t.slots,Ih,1)},SA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=it;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Dt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,O_(e,s)),o=e}else e&&(N_(t,e),o={default:1});if(i)for(const a in s)!x_(a)&&!(a in o)&&delete s[a]};function P_(){return{app:null,config:{isNativeTag:KC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IA=0;function CA(t,e){return function(r,s=null){Re(r)||(r=Object.assign({},r)),s!=null&&!ct(s)&&(s=null);const i=P_(),o=new Set;let a=!1;const l=i.app={_uid:IA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:q_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Re(c.install)?(o.add(c),c.install(l,...u)):Re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=pe(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ch(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function fu(t,e,n,r,s=!1){if(ae(t)){t.forEach((f,d)=>fu(f,e&&(ae(e)?e[d]:e),n,r,s));return}if(oi(r)&&!s)return;const i=r.shapeFlag&4?Ch(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):Ct(c)&&(c.value=null)),Re(l))Kr(l,a,12,[o,u]);else{const f=Tt(l),d=Ct(l);if(f||d){const p=()=>{if(t.f){const m=f?qe(h,l)?h[l]:u[l]:l.value;s?ae(m)&&Gp(m,i):ae(m)?m.includes(i)||m.push(i):f?(u[l]=[i],qe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,qe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Xt(p,n)):p()}}}let as=!1;const vc=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",yc=t=>t.nodeType===8;function AA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),uu(),g._vnode=v;return}as=!1,h(g.firstChild,v,null,null,null),uu(),g._vnode=v,as&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,w,T,S=!1)=>{const x=yc(v)&&v.data==="[",I=()=>m(v,g,E,w,T,x),{type:C,ref:P,shapeFlag:L,patchFlag:U}=g;let k=v.nodeType;g.el=v,U===-2&&(S=!1,g.dynamicChildren=null);let O=null;switch(C){case mi:k!==3?g.children===""?(l(g.el=s(""),o(v),v),O=v):O=I():(v.data!==g.children&&(as=!0,v.data=g.children),O=i(v));break;case fn:k!==8||x?O=I():O=i(v);break;case li:if(x&&(v=i(v),k=v.nodeType),k===1||k===3){O=v;const J=!g.children.length;for(let j=0;j<g.staticCount;j++)J&&(g.children+=O.nodeType===1?O.outerHTML:O.data),j===g.staticCount-1&&(g.anchor=O),O=i(O);return x?i(O):O}else I();break;case lt:x?O=p(v,g,E,w,T,S):O=I();break;default:if(L&1)k!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?O=I():O=f(v,g,E,w,T,S);else if(L&6){g.slotScopeIds=T;const J=o(v);if(e(g,J,null,E,w,vc(J),S),O=x?y(v):i(v),O&&yc(O)&&O.data==="teleport end"&&(O=i(O)),oi(g)){let j;x?(j=pe(lt),j.anchor=O?O.previousSibling:J.lastChild):j=v.nodeType===3?Fn(""):pe("div"),j.el=v,g.component.subTree=j}}else L&64?k!==8?O=I():O=g.type.hydrate(v,g,E,w,T,S,t,d):L&128&&(O=g.type.hydrate(v,g,E,w,vc(o(v)),T,S,t,h))}return P!=null&&fu(P,null,w,g),O},f=(v,g,E,w,T,S)=>{S=S||!!g.dynamicChildren;const{type:x,props:I,patchFlag:C,shapeFlag:P,dirs:L}=g,U=x==="input"&&L||x==="option";if(U||C!==-1){if(L&&dr(g,null,E,"created"),I)if(U||!S||C&48)for(const O in I)(U&&O.endsWith("value")||Il(O)&&!xa(O))&&r(v,O,null,I[O],!1,void 0,E);else I.onClick&&r(v,"onClick",null,I.onClick,!1,void 0,E);let k;if((k=I&&I.onVnodeBeforeMount)&&Cn(k,E,g),L&&dr(g,null,E,"beforeMount"),((k=I&&I.onVnodeMounted)||L)&&h_(()=>{k&&Cn(k,E,g),L&&dr(g,null,E,"mounted")},w),P&16&&!(I&&(I.innerHTML||I.textContent))){let O=d(v.firstChild,g,v,E,w,T,S);for(;O;){as=!0;const J=O;O=O.nextSibling,a(J)}}else P&8&&v.textContent!==g.children&&(as=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,w,T,S,x)=>{x=x||!!g.dynamicChildren;const I=g.children,C=I.length;for(let P=0;P<C;P++){const L=x?I[P]:I[P]=Ln(I[P]);if(v)v=h(v,L,w,T,S,x);else{if(L.type===mi&&!L.children)continue;as=!0,n(null,L,E,null,w,T,vc(E),S)}}return v},p=(v,g,E,w,T,S)=>{const{slotScopeIds:x}=g;x&&(T=T?T.concat(x):x);const I=o(v),C=d(i(v),g,I,E,w,T,S);return C&&yc(C)&&C.data==="]"?i(g.anchor=C):(as=!0,l(g.anchor=c("]"),I,C),C)},m=(v,g,E,w,T,S)=>{if(as=!0,g.el=null,S){const C=y(v);for(;;){const P=i(v);if(P&&P!==C)a(P);else break}}const x=i(v),I=o(v);return a(v),n(null,g,I,x,E,w,vc(I),T),x},y=v=>{let g=0;for(;v;)if(v=i(v),v&&yc(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const Xt=h_;function D_(t){return M_(t)}function k_(t){return M_(t,AA)}function M_(t,e){const n=qC();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=or,insertStaticContent:p}=t,m=(_,b,N,F=null,$=null,W=null,Z=!1,X=null,Y=!!b.dynamicChildren)=>{if(_===b)return;_&&!tr(_,b)&&(F=H(_),Fe(_,$,W,!0),_=null),b.patchFlag===-2&&(Y=!1,b.dynamicChildren=null);const{type:B,ref:le,shapeFlag:se}=b;switch(B){case mi:y(_,b,N,F);break;case fn:v(_,b,N,F);break;case li:_==null&&g(b,N,F,Z);break;case lt:U(_,b,N,F,$,W,Z,X,Y);break;default:se&1?T(_,b,N,F,$,W,Z,X,Y):se&6?k(_,b,N,F,$,W,Z,X,Y):(se&64||se&128)&&B.process(_,b,N,F,$,W,Z,X,Y,we)}le!=null&&$&&fu(le,_&&_.ref,W,b||_,!b)},y=(_,b,N,F)=>{if(_==null)r(b.el=a(b.children),N,F);else{const $=b.el=_.el;b.children!==_.children&&c($,b.children)}},v=(_,b,N,F)=>{_==null?r(b.el=l(b.children||""),N,F):b.el=_.el},g=(_,b,N,F)=>{[_.el,_.anchor]=p(_.children,b,N,F,_.el,_.anchor)},E=({el:_,anchor:b},N,F)=>{let $;for(;_&&_!==b;)$=f(_),r(_,N,F),_=$;r(b,N,F)},w=({el:_,anchor:b})=>{let N;for(;_&&_!==b;)N=f(_),s(_),_=N;s(b)},T=(_,b,N,F,$,W,Z,X,Y)=>{Z=Z||b.type==="svg",_==null?S(b,N,F,$,W,Z,X,Y):C(_,b,$,W,Z,X,Y)},S=(_,b,N,F,$,W,Z,X)=>{let Y,B;const{type:le,props:se,shapeFlag:ce,transition:ye,dirs:Pe}=_;if(Y=_.el=o(_.type,W,se&&se.is,se),ce&8?u(Y,_.children):ce&16&&I(_.children,Y,null,F,$,W&&le!=="foreignObject",Z,X),Pe&&dr(_,null,F,"created"),x(Y,_,_.scopeId,Z,F),se){for(const We in se)We!=="value"&&!xa(We)&&i(Y,We,null,se[We],W,_.children,F,$,G);"value"in se&&i(Y,"value",null,se.value),(B=se.onVnodeBeforeMount)&&Cn(B,F,_)}Pe&&dr(_,null,F,"beforeMount");const Ze=(!$||$&&!$.pendingBranch)&&ye&&!ye.persisted;Ze&&ye.beforeEnter(Y),r(Y,b,N),((B=se&&se.onVnodeMounted)||Ze||Pe)&&Xt(()=>{B&&Cn(B,F,_),Ze&&ye.enter(Y),Pe&&dr(_,null,F,"mounted")},$)},x=(_,b,N,F,$)=>{if(N&&d(_,N),F)for(let W=0;W<F.length;W++)d(_,F[W]);if($){let W=$.subTree;if(b===W){const Z=$.vnode;x(_,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},I=(_,b,N,F,$,W,Z,X,Y=0)=>{for(let B=Y;B<_.length;B++){const le=_[B]=X?ds(_[B]):Ln(_[B]);m(null,le,b,N,F,$,W,Z,X)}},C=(_,b,N,F,$,W,Z)=>{const X=b.el=_.el;let{patchFlag:Y,dynamicChildren:B,dirs:le}=b;Y|=_.patchFlag&16;const se=_.props||it,ce=b.props||it;let ye;N&&Ks(N,!1),(ye=ce.onVnodeBeforeUpdate)&&Cn(ye,N,b,_),le&&dr(b,_,N,"beforeUpdate"),N&&Ks(N,!0);const Pe=$&&b.type!=="foreignObject";if(B?P(_.dynamicChildren,B,X,N,F,Pe,W):Z||ie(_,b,X,null,N,F,Pe,W,!1),Y>0){if(Y&16)L(X,b,se,ce,N,F,$);else if(Y&2&&se.class!==ce.class&&i(X,"class",null,ce.class,$),Y&4&&i(X,"style",se.style,ce.style,$),Y&8){const Ze=b.dynamicProps;for(let We=0;We<Ze.length;We++){const A=Ze[We],R=se[A],D=ce[A];(D!==R||A==="value")&&i(X,A,R,D,$,_.children,N,F,G)}}Y&1&&_.children!==b.children&&u(X,b.children)}else!Z&&B==null&&L(X,b,se,ce,N,F,$);((ye=ce.onVnodeUpdated)||le)&&Xt(()=>{ye&&Cn(ye,N,b,_),le&&dr(b,_,N,"updated")},F)},P=(_,b,N,F,$,W,Z)=>{for(let X=0;X<b.length;X++){const Y=_[X],B=b[X],le=Y.el&&(Y.type===lt||!tr(Y,B)||Y.shapeFlag&70)?h(Y.el):N;m(Y,B,le,null,F,$,W,Z,!0)}},L=(_,b,N,F,$,W,Z)=>{if(N!==F){if(N!==it)for(const X in N)!xa(X)&&!(X in F)&&i(_,X,N[X],null,Z,b.children,$,W,G);for(const X in F){if(xa(X))continue;const Y=F[X],B=N[X];Y!==B&&X!=="value"&&i(_,X,B,Y,Z,b.children,$,W,G)}"value"in F&&i(_,"value",N.value,F.value)}},U=(_,b,N,F,$,W,Z,X,Y)=>{const B=b.el=_?_.el:a(""),le=b.anchor=_?_.anchor:a("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:ye}=b;ye&&(X=X?X.concat(ye):ye),_==null?(r(B,N,F),r(le,N,F),I(b.children,N,le,$,W,Z,X,Y)):se>0&&se&64&&ce&&_.dynamicChildren?(P(_.dynamicChildren,ce,N,$,W,Z,X),(b.key!=null||$&&b===$.subTree)&&gg(_,b,!0)):ie(_,b,N,le,$,W,Z,X,Y)},k=(_,b,N,F,$,W,Z,X,Y)=>{b.slotScopeIds=X,_==null?b.shapeFlag&512?$.ctx.activate(b,N,F,Z,Y):O(b,N,F,$,W,Z,Y):J(_,b,Y)},O=(_,b,N,F,$,W,Z)=>{const X=_.component=V_(_,F,$);if(xl(_)&&(X.ctx.renderer=we),K_(X),X.asyncDep){if($&&$.registerDep(X,j),!_.el){const Y=X.subTree=pe(fn);v(null,Y,b,N)}return}j(X,_,b,N,$,W,Z)},J=(_,b,N)=>{const F=b.component=_.component;if(Y1(_,b,N))if(F.asyncDep&&!F.asyncResolved){q(F,b,N);return}else F.next=b,B1(F.update),F.update();else b.el=_.el,F.vnode=b},j=(_,b,N,F,$,W,Z)=>{const X=()=>{if(_.isMounted){let{next:le,bu:se,u:ce,parent:ye,vnode:Pe}=_,Ze=le,We;Ks(_,!1),le?(le.el=Pe.el,q(_,le,Z)):le=Pe,se&&no(se),(We=le.props&&le.props.onVnodeBeforeUpdate)&&Cn(We,ye,le,Pe),Ks(_,!0);const A=Wc(_),R=_.subTree;_.subTree=A,m(R,A,h(R.el),H(R),_,$,W),le.el=A.el,Ze===null&&ag(_,A.el),ce&&Xt(ce,$),(We=le.props&&le.props.onVnodeUpdated)&&Xt(()=>Cn(We,ye,le,Pe),$)}else{let le;const{el:se,props:ce}=b,{bm:ye,m:Pe,parent:Ze}=_,We=oi(b);if(Ks(_,!1),ye&&no(ye),!We&&(le=ce&&ce.onVnodeBeforeMount)&&Cn(le,Ze,b),Ks(_,!0),se&&Ie){const A=()=>{_.subTree=Wc(_),Ie(se,_.subTree,_,$,null)};We?b.type.__asyncLoader().then(()=>!_.isUnmounted&&A()):A()}else{const A=_.subTree=Wc(_);m(null,A,N,F,_,$,W),b.el=A.el}if(Pe&&Xt(Pe,$),!We&&(le=ce&&ce.onVnodeMounted)){const A=b;Xt(()=>Cn(le,Ze,A),$)}(b.shapeFlag&256||Ze&&oi(Ze.vnode)&&Ze.vnode.shapeFlag&256)&&_.a&&Xt(_.a,$),_.isMounted=!0,b=N=F=null}},Y=_.effect=new Al(X,()=>vh(B),_.scope),B=_.update=()=>Y.run();B.id=_.uid,Ks(_,!0),B()},q=(_,b,N)=>{b.component=_;const F=_.vnode.props;_.vnode=b,_.next=null,wA(_,b.props,F,N),SA(_,b.children,N),Lo(),fv(),Fo()},ie=(_,b,N,F,$,W,Z,X,Y=!1)=>{const B=_&&_.children,le=_?_.shapeFlag:0,se=b.children,{patchFlag:ce,shapeFlag:ye}=b;if(ce>0){if(ce&128){ft(B,se,N,F,$,W,Z,X,Y);return}else if(ce&256){$e(B,se,N,F,$,W,Z,X,Y);return}}ye&8?(le&16&&G(B,$,W),se!==B&&u(N,se)):le&16?ye&16?ft(B,se,N,F,$,W,Z,X,Y):G(B,$,W,!0):(le&8&&u(N,""),ye&16&&I(se,N,F,$,W,Z,X,Y))},$e=(_,b,N,F,$,W,Z,X,Y)=>{_=_||eo,b=b||eo;const B=_.length,le=b.length,se=Math.min(B,le);let ce;for(ce=0;ce<se;ce++){const ye=b[ce]=Y?ds(b[ce]):Ln(b[ce]);m(_[ce],ye,N,null,$,W,Z,X,Y)}B>le?G(_,$,W,!0,!1,se):I(b,N,F,$,W,Z,X,Y,se)},ft=(_,b,N,F,$,W,Z,X,Y)=>{let B=0;const le=b.length;let se=_.length-1,ce=le-1;for(;B<=se&&B<=ce;){const ye=_[B],Pe=b[B]=Y?ds(b[B]):Ln(b[B]);if(tr(ye,Pe))m(ye,Pe,N,null,$,W,Z,X,Y);else break;B++}for(;B<=se&&B<=ce;){const ye=_[se],Pe=b[ce]=Y?ds(b[ce]):Ln(b[ce]);if(tr(ye,Pe))m(ye,Pe,N,null,$,W,Z,X,Y);else break;se--,ce--}if(B>se){if(B<=ce){const ye=ce+1,Pe=ye<le?b[ye].el:F;for(;B<=ce;)m(null,b[B]=Y?ds(b[B]):Ln(b[B]),N,Pe,$,W,Z,X,Y),B++}}else if(B>ce)for(;B<=se;)Fe(_[B],$,W,!0),B++;else{const ye=B,Pe=B,Ze=new Map;for(B=Pe;B<=ce;B++){const de=b[B]=Y?ds(b[B]):Ln(b[B]);de.key!=null&&Ze.set(de.key,B)}let We,A=0;const R=ce-Pe+1;let D=!1,V=0;const re=new Array(R);for(B=0;B<R;B++)re[B]=0;for(B=ye;B<=se;B++){const de=_[B];if(A>=R){Fe(de,$,W,!0);continue}let De;if(de.key!=null)De=Ze.get(de.key);else for(We=Pe;We<=ce;We++)if(re[We-Pe]===0&&tr(de,b[We])){De=We;break}De===void 0?Fe(de,$,W,!0):(re[De-Pe]=B+1,De>=V?V=De:D=!0,m(de,b[De],N,null,$,W,Z,X,Y),A++)}const Ee=D?RA(re):eo;for(We=Ee.length-1,B=R-1;B>=0;B--){const de=Pe+B,De=b[de],vt=de+1<le?b[de+1].el:F;re[B]===0?m(null,De,N,vt,$,W,Z,X,Y):D&&(We<0||B!==Ee[We]?Ke(De,N,vt,2):We--)}}},Ke=(_,b,N,F,$=null)=>{const{el:W,type:Z,transition:X,children:Y,shapeFlag:B}=_;if(B&6){Ke(_.component.subTree,b,N,F);return}if(B&128){_.suspense.move(b,N,F);return}if(B&64){Z.move(_,b,N,we);return}if(Z===lt){r(W,b,N);for(let se=0;se<Y.length;se++)Ke(Y[se],b,N,F);r(_.anchor,b,N);return}if(Z===li){E(_,b,N);return}if(F!==2&&B&1&&X)if(F===0)X.beforeEnter(W),r(W,b,N),Xt(()=>X.enter(W),$);else{const{leave:se,delayLeave:ce,afterLeave:ye}=X,Pe=()=>r(W,b,N),Ze=()=>{se(W,()=>{Pe(),ye&&ye()})};ce?ce(W,Pe,Ze):Ze()}else r(W,b,N)},Fe=(_,b,N,F=!1,$=!1)=>{const{type:W,props:Z,ref:X,children:Y,dynamicChildren:B,shapeFlag:le,patchFlag:se,dirs:ce}=_;if(X!=null&&fu(X,null,N,_,!0),le&256){b.ctx.deactivate(_);return}const ye=le&1&&ce,Pe=!oi(_);let Ze;if(Pe&&(Ze=Z&&Z.onVnodeBeforeUnmount)&&Cn(Ze,b,_),le&6)M(_.component,N,F);else{if(le&128){_.suspense.unmount(N,F);return}ye&&dr(_,null,b,"beforeUnmount"),le&64?_.type.remove(_,b,N,$,we,F):B&&(W!==lt||se>0&&se&64)?G(B,b,N,!1,!0):(W===lt&&se&384||!$&&le&16)&&G(Y,b,N),F&&ut(_)}(Pe&&(Ze=Z&&Z.onVnodeUnmounted)||ye)&&Xt(()=>{Ze&&Cn(Ze,b,_),ye&&dr(_,null,b,"unmounted")},N)},ut=_=>{const{type:b,el:N,anchor:F,transition:$}=_;if(b===lt){St(N,F);return}if(b===li){w(_);return}const W=()=>{s(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:X}=$,Y=()=>Z(N,W);X?X(_.el,W,Y):Y()}else W()},St=(_,b)=>{let N;for(;_!==b;)N=f(_),s(_),_=N;s(b)},M=(_,b,N)=>{const{bum:F,scope:$,update:W,subTree:Z,um:X}=_;F&&no(F),$.stop(),W&&(W.active=!1,Fe(Z,_,b,N)),X&&Xt(X,b),Xt(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},G=(_,b,N,F=!1,$=!1,W=0)=>{for(let Z=W;Z<_.length;Z++)Fe(_[Z],b,N,F,$)},H=_=>_.shapeFlag&6?H(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),ne=(_,b,N)=>{_==null?b._vnode&&Fe(b._vnode,null,null,!0):m(b._vnode||null,_,b,null,null,null,N),fv(),uu(),b._vnode=_},we={p:m,um:Fe,m:Ke,r:ut,mt:O,mc:I,pc:ie,pbc:P,n:H,o:t};let Xe,Ie;return e&&([Xe,Ie]=e(we)),{render:ne,hydrate:Xe,createApp:CA(ne,Xe)}}function Ks({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gg(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ds(s[i]),a.el=o.el),n||gg(o,a)),a.type===mi&&(a.el=o.el)}}function RA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xA=t=>t.__isTeleport,Pa=t=>t&&(t.disabled||t.disabled===""),Tv=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Cd=(t,e)=>{const n=t&&t.to;return Tt(n)?e?e(n):null:n},OA={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=Pa(e.props);let{shapeFlag:g,children:E,dynamicChildren:w}=e;if(t==null){const T=e.el=m(""),S=e.anchor=m("");d(T,n,r),d(S,n,r);const x=e.target=Cd(e.props,p),I=e.targetAnchor=m("");x&&(d(I,x),o=o||Tv(x));const C=(P,L)=>{g&16&&u(E,P,L,s,i,o,a,l)};v?C(n,S):x&&C(x,I)}else{e.el=t.el;const T=e.anchor=t.anchor,S=e.target=t.target,x=e.targetAnchor=t.targetAnchor,I=Pa(t.props),C=I?n:S,P=I?T:x;if(o=o||Tv(S),w?(f(t.dynamicChildren,w,C,s,i,o,a),gg(t,e,!0)):l||h(t,e,C,P,s,i,o,a,!1),v)I||Ec(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Cd(e.props,p);L&&Ec(e,L,null,c,0)}else I&&Ec(e,S,x,c,1)}L_(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!Pa(f))&&(i(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];s(p,e,n,!0,!!p.dynamicChildren)}},move:Ec,hydrate:NA};function Ec(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Pa(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);h&&r(a,e,n)}function NA(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Cd(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Pa(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}L_(e)}return e.anchor&&o(e.anchor)}const PA=OA;function L_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const lt=Symbol(void 0),mi=Symbol(void 0),fn=Symbol(void 0),li=Symbol(void 0),Da=[];let An=null;function ge(t=!1){Da.push(An=t?null:[])}function F_(){Da.pop(),An=Da[Da.length-1]||null}let vi=1;function Ad(t){vi+=t}function U_(t){return t.dynamicChildren=vi>0?An||eo:null,F_(),vi>0&&An&&An.push(t),t}function at(t,e,n,r,s,i){return U_(Te(t,e,n,r,s,i,!0))}function bt(t,e,n,r,s){return U_(pe(t,e,n,r,s,!0))}function Ns(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}function DA(t){}const Ih="__vInternal",$_=({key:t})=>t??null,Gc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Tt(t)||Ct(t)||Re(t)?{i:Zt,r:t,k:e,f:!!n}:t:null;function Te(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$_(e),ref:e&&Gc(e),scopeId:Eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return a?(mg(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Tt(n)?8:16),vi>0&&!o&&An&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&An.push(l),l}const pe=kA;function kA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===S_)&&(t=fn),Ns(t)){const a=Sr(t,e,!0);return n&&mg(a,n),vi>0&&!i&&An&&(a.shapeFlag&6?An[An.indexOf(t)]=a:An.push(a)),a.patchFlag|=-2,a}if(VA(t)&&(t=t.__vccOpts),e){e=j_(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Ri(a)),ct(l)&&(eg(l)&&!ae(l)&&(l=Dt({},l)),e.style=ko(l))}const o=Tt(t)?1:u_(t)?128:xA(t)?64:ct(t)?4:Re(t)?2:0;return Te(t,e,n,r,s,o,i,!0)}function j_(t){return t?eg(t)||Ih in t?Dt({},t):t:null}function Sr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?B_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$_(a),ref:e&&e.ref?n&&s?ae(s)?s.concat(Gc(e)):[s,Gc(e)]:Gc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fn(t=" ",e=0){return pe(mi,null,t,e)}function MA(t,e){const n=pe(li,null,t);return n.staticCount=e,n}function Gr(t="",e=!1){return e?(ge(),bt(fn,null,t)):pe(fn,null,t)}function Ln(t){return t==null||typeof t=="boolean"?pe(fn):ae(t)?pe(lt,null,t.slice()):typeof t=="object"?ds(t):pe(mi,null,String(t))}function ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function mg(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mg(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ih in e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),r&64?(n=16,e=[Fn(e)]):n=8);t.children=e,t.shapeFlag|=n}function B_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ri([e.class,r.class]));else if(s==="style")e.style=ko([e.style,r.style]);else if(Il(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Cn(t,e,n,r=null){Un(t,e,7,[n,r])}const LA=P_();let FA=0;function V_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||LA,i={uid:FA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:R_(r,s),emitsOptions:a_(r,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:r.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=H1.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const Nr=()=>Pt||Zt,Ps=t=>{Pt=t,t.scope.on()},Ss=()=>{Pt&&Pt.scope.off(),Pt=null};function H_(t){return t.vnode.shapeFlag&4}let yo=!1;function K_(t,e=!1){yo=e;const{props:n,children:r}=t.vnode,s=H_(t);_A(t,n,s,e),TA(t,r);const i=s?UA(t,e):void 0;return yo=!1,i}function UA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pi(new Proxy(t.ctx,bd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?G_(t):null;Ps(t),Lo();const i=Kr(r,t,0,[t.props,s]);if(Fo(),Ss(),zp(i)){if(i.then(Ss,Ss),e)return i.then(o=>{Rd(t,o,e)}).catch(o=>{Oi(o,t,0)});t.asyncDep=i}else Rd(t,i,e)}else W_(t,e)}function Rd(t,e,n){Re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=rg(e)),W_(t,n)}let du,xd;function $A(t){du=t,xd=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,pA))}}const jA=()=>!du;function W_(t,e,n){const r=t.type;if(!t.render){if(!e&&du&&!r.render){const s=r.template||dg(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Dt(Dt({isCustomElement:i,delimiters:a},o),l);r.render=du(s,c)}}t.render=r.render||or,xd&&xd(t)}Ps(t),Lo(),gA(t),Fo(),Ss()}function BA(t){return new Proxy(t.attrs,{get(e,n){return Pn(t,"get","$attrs"),e[n]}})}function G_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=BA(t))},slots:t.slots,emit:t.emit,expose:e}}function Ch(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rg(pi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Na)return Na[n](t)},has(e,n){return n in e||n in Na}}))}function Od(t,e=!0){return Re(t)?t.displayName||t.name:t.name||e&&t.__name}function VA(t){return Re(t)&&"__vccOpts"in t}const Ut=(t,e)=>L1(t,e,yo);function HA(){return null}function KA(){return null}function WA(t){}function GA(t,e){return null}function zA(){return z_().slots}function YA(){return z_().attrs}function z_(){const t=Nr();return t.setupContext||(t.setupContext=G_(t))}function XA(t,e){const n=ae(t)?t.reduce((r,s)=>(r[s]={},r),{}):t;for(const r in e){const s=n[r];s?ae(s)||Re(s)?n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(n[r]={default:e[r]})}return n}function QA(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function qA(t){const e=Nr();let n=t();return Ss(),zp(n)&&(n=n.catch(r=>{throw Ps(e),r})),[n,()=>Ps(e)]}function Ah(t,e,n){const r=arguments.length;return r===2?ct(e)&&!ae(e)?Ns(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ns(n)&&(n=[n]),pe(t,e,n))}const Y_=Symbol(""),X_=()=>On(Y_);function JA(){}function ZA(t,e,n,r){const s=n[r];if(s&&Q_(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function Q_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(mo(n[r],e[r]))return!1;return vi>0&&An&&An.push(t),!0}const q_="3.2.47",eR={createComponentInstance:V_,setupComponent:K_,renderComponentRoot:Wc,setCurrentRenderingInstance:rl,isVNode:Ns,normalizeVNode:Ln},tR=eR,nR=null,rR=null,sR="http://www.w3.org/2000/svg",Zs=typeof document<"u"?document:null,Sv=Zs&&Zs.createElement("template"),iR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Zs.createElementNS(sR,t):Zs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Zs.createTextNode(t),createComment:t=>Zs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Sv.innerHTML=r?`<svg>${t}</svg>`:t;const a=Sv.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function oR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function aR(t,e,n){const r=t.style,s=Tt(n);if(n&&!s){if(e&&!Tt(e))for(const i in e)n[i]==null&&Nd(r,i,"");for(const i in n)Nd(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Iv=/\s*!important$/;function Nd(t,e,n){if(ae(n))n.forEach(r=>Nd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lR(t,e);Iv.test(n)?t.setProperty(Kn(r),n.replace(Iv,""),"important"):t[r]=n}}const Cv=["Webkit","Moz","ms"],Sf={};function lR(t,e){const n=Sf[e];if(n)return n;let r=xn(e);if(r!=="filter"&&r in t)return Sf[e]=r;r=Cl(r);for(let s=0;s<Cv.length;s++){const i=Cv[s]+r;if(i in t)return Sf[e]=i}return e}const Av="http://www.w3.org/1999/xlink";function cR(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Av,e.slice(6,e.length)):t.setAttributeNS(Av,e,n);else{const i=VC(e);n==null||i&&!k0(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function uR(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=k0(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function hR(t,e,n,r){t.removeEventListener(e,n,r)}function fR(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=dR(e);if(r){const c=i[e]=mR(r,s);Ur(t,a,c,l)}else o&&(hR(t,a,o,l),i[e]=void 0)}}const Rv=/(?:Once|Passive|Capture)$/;function dR(t){let e;if(Rv.test(t)){e={};let r;for(;r=t.match(Rv);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kn(t.slice(2)),e]}let If=0;const pR=Promise.resolve(),gR=()=>If||(pR.then(()=>If=0),If=Date.now());function mR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Un(vR(r,n.value),e,5,[r])};return n.value=t,n.attached=gR(),n}function vR(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xv=/^on[a-z]/,yR=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?oR(t,r,s):e==="style"?aR(t,n,r):Il(e)?Wp(e)||fR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ER(t,e,r,s))?uR(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cR(t,e,r,s))};function ER(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&xv.test(e)&&Re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xv.test(e)&&Tt(n)?!1:e in t}function J_(t,e){const n=st(t);class r extends Rh{constructor(i){super(n,i,e)}}return r.def=n,r}const _R=t=>J_(t,pw),wR=typeof HTMLElement<"u"?HTMLElement:class{};class Rh extends wR{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Ni(()=>{this._connected||(kd(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!ae(i))for(const l in i){const c=i[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=lu(this._props[l])),(a||(a=Object.create(null)))[xn(l)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=ae(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(xn))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.getAttribute(e);const r=xn(e);this._numberProps&&this._numberProps[r]&&(n=lu(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Kn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Kn(e),n+""):n||this.removeAttribute(Kn(e))))}_update(){kd(this._createVNode(),this.shadowRoot)}_createVNode(){const e=pe(this._def,Dt({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Kn(i)!==i&&r(Kn(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Rh){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function bR(t="$style"){{const e=Nr();if(!e)return it;const n=e.type.__cssModules;if(!n)return it;const r=n[t];return r||it}}function TR(t){const e=Nr();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>Dd(i,s))},r=()=>{const s=t(e.proxy);Pd(e.subTree,s),n(s)};f_(r),js(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Sh(()=>s.disconnect())})}function Pd(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Pd(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Dd(t.el,e);else if(t.type===lt)t.children.forEach(n=>Pd(n,e));else if(t.type===li){let{el:n,anchor:r}=t;for(;n&&(Dd(n,e),n!==r);)n=n.nextSibling}}function Dd(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const ls="transition",na="animation",vg=(t,{slots:e})=>Ah(ug,ew(t),e);vg.displayName="Transition";const Z_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},SR=vg.props=Dt({},ug.props,Z_),Ws=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ov=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function ew(t){const e={};for(const U in t)U in Z_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=IR(s),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:w,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:x=g,onAppearCancelled:I=E}=e,C=(U,k,O)=>{hs(U,k?u:a),hs(U,k?c:o),O&&O()},P=(U,k)=>{U._isLeaving=!1,hs(U,h),hs(U,d),hs(U,f),k&&k()},L=U=>(k,O)=>{const J=U?x:g,j=()=>C(k,U,O);Ws(J,[k,j]),Nv(()=>{hs(k,U?l:i),Mr(k,U?u:a),Ov(J)||Pv(k,r,m,j)})};return Dt(e,{onBeforeEnter(U){Ws(v,[U]),Mr(U,i),Mr(U,o)},onBeforeAppear(U){Ws(S,[U]),Mr(U,l),Mr(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const O=()=>P(U,k);Mr(U,h),nw(),Mr(U,f),Nv(()=>{U._isLeaving&&(hs(U,h),Mr(U,d),Ov(w)||Pv(U,r,y,O))}),Ws(w,[U,O])},onEnterCancelled(U){C(U,!1),Ws(E,[U])},onAppearCancelled(U){C(U,!0),Ws(I,[U])},onLeaveCancelled(U){P(U),Ws(T,[U])}})}function IR(t){if(t==null)return null;if(ct(t))return[Cf(t.enter),Cf(t.leave)];{const e=Cf(t);return[e,e]}}function Cf(t){return lu(t)}function Mr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function hs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Nv(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let CR=0;function Pv(t,e,n,r){const s=t._endId=++CR,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=tw(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function tw(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${ls}Delay`),i=r(`${ls}Duration`),o=Dv(s,i),a=r(`${na}Delay`),l=r(`${na}Duration`),c=Dv(a,l);let u=null,h=0,f=0;e===ls?o>0&&(u=ls,h=o,f=i.length):e===na?c>0&&(u=na,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ls:na:null,f=u?u===ls?i.length:l.length:0);const d=u===ls&&/\b(transform|all)(,|$)/.test(r(`${ls}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Dv(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>kv(n)+kv(t[r])))}function kv(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function nw(){return document.body.offsetHeight}const rw=new WeakMap,sw=new WeakMap,iw={name:"TransitionGroup",props:Dt({},SR,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Nr(),r=cg();let s,i;return bh(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!NR(s[0].el,n.vnode.el,o))return;s.forEach(RR),s.forEach(xR);const a=s.filter(OR);nw(),a.forEach(l=>{const c=l.el,u=c.style;Mr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,hs(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Ue(t),a=ew(o);let l=o.tag||lt;s=i,i=e.default?_h(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&gi(u,vo(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];gi(u,vo(u,a,r,n)),rw.set(u,u.el.getBoundingClientRect())}return pe(l,null,i)}}},AR=t=>delete t.mode;iw.props;const ow=iw;function RR(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function xR(t){sw.set(t,t.el.getBoundingClientRect())}function OR(t){const e=rw.get(t),n=sw.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function NR(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=tw(r);return s.removeChild(r),i}const Ds=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>no(e,n):e};function PR(t){t.target.composing=!0}function Mv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pu={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ds(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=au(a)),t._assign(a)}),n&&Ur(t,"change",()=>{t.value=t.value.trim()}),e||(Ur(t,"compositionstart",PR),Ur(t,"compositionend",Mv),Ur(t,"change",Mv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ds(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&au(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yg={deep:!0,created(t,e,n){t._assign=Ds(n),Ur(t,"change",()=>{const r=t._modelValue,s=Eo(t),i=t.checked,o=t._assign;if(ae(r)){const a=ch(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(xi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(lw(t,i))})},mounted:Lv,beforeUpdate(t,e,n){t._assign=Ds(n),Lv(t,e,n)}};function Lv(t,{value:e,oldValue:n},r){t._modelValue=e,ae(e)?t.checked=ch(e,r.props.value)>-1:xi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=xs(e,lw(t,!0)))}const Eg={created(t,{value:e},n){t.checked=xs(e,n.props.value),t._assign=Ds(n),Ur(t,"change",()=>{t._assign(Eo(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Ds(r),e!==n&&(t.checked=xs(e,r.props.value))}},aw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xi(e);Ur(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?au(Eo(o)):Eo(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ds(r)},mounted(t,{value:e}){Fv(t,e)},beforeUpdate(t,e,n){t._assign=Ds(n)},updated(t,{value:e}){Fv(t,e)}};function Fv(t,e){const n=t.multiple;if(!(n&&!ae(e)&&!xi(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Eo(i);if(n)ae(e)?i.selected=ch(e,o)>-1:i.selected=e.has(o);else if(xs(Eo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Eo(t){return"_value"in t?t._value:t.value}function lw(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cw={created(t,e,n){_c(t,e,n,null,"created")},mounted(t,e,n){_c(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){_c(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){_c(t,e,n,r,"updated")}};function uw(t,e){switch(t){case"SELECT":return aw;case"TEXTAREA":return pu;default:switch(e){case"checkbox":return yg;case"radio":return Eg;default:return pu}}}function _c(t,e,n,r,s){const o=uw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function DR(){pu.getSSRProps=({value:t})=>({value:t}),Eg.getSSRProps=({value:t},e)=>{if(e.props&&xs(e.props.value,t))return{checked:!0}},yg.getSSRProps=({value:t},e)=>{if(ae(t)){if(e.props&&ch(t,e.props.value)>-1)return{checked:!0}}else if(xi(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},cw.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=uw(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const kR=["ctrl","shift","alt","meta"],MR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kR.some(n=>t[`${n}Key`]&&!e.includes(n))},xh=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=MR[e[s]];if(i&&i(n,e))return}return t(n,...r)},LR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},FR=(t,e)=>n=>{if(!("key"in n))return;const r=Kn(n.key);if(e.some(s=>s===r||LR[s]===r))return t(n)},gu={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ra(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ra(t,!0),r.enter(t)):r.leave(t,()=>{ra(t,!1)}):ra(t,e))},beforeUnmount(t,{value:e}){ra(t,e)}};function ra(t,e){t.style.display=e?t._vod:"none"}function UR(){gu.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const hw=Dt({patchProp:yR},iR);let ka,Uv=!1;function fw(){return ka||(ka=D_(hw))}function dw(){return ka=Uv?ka:k_(hw),Uv=!0,ka}const kd=(...t)=>{fw().render(...t)},pw=(...t)=>{dw().hydrate(...t)},gw=(...t)=>{const e=fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mw(r);if(!s)return;const i=e._component;!Re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},$R=(...t)=>{const e=dw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mw(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function mw(t){return Tt(t)?document.querySelector(t):t}let $v=!1;const jR=()=>{$v||($v=!0,DR(),UR())},BR=()=>{},VR=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ug,Comment:fn,EffectScope:Xp,Fragment:lt,KeepAlive:aA,ReactiveEffect:Al,Static:li,Suspense:Q1,Teleport:PA,Text:mi,Transition:vg,TransitionGroup:ow,VueElement:Rh,assertNumber:U1,callWithAsyncErrorHandling:Un,callWithErrorHandling:Kr,camelize:xn,capitalize:Cl,cloneVNode:Sr,compatUtils:rR,compile:BR,computed:Ut,createApp:gw,createBlock:bt,createCommentVNode:Gr,createElementBlock:at,createElementVNode:Te,createHydrationRenderer:k_,createPropsRestProxy:QA,createRenderer:D_,createSSRApp:$R,createSlots:fA,createStaticVNode:MA,createTextVNode:Fn,createVNode:pe,customRef:D1,defineAsyncComponent:iA,defineComponent:st,defineCustomElement:J_,defineEmits:KA,defineExpose:WA,defineProps:HA,defineSSRCustomElement:_R,get devtools(){return Ki},effect:e1,effectScope:hh,getCurrentInstance:Nr,getCurrentScope:Qp,getTransitionRawChildren:_h,guardReactiveProps:j_,h:Ah,handleError:Oi,hydrate:pw,initCustomFormatter:JA,initDirectivesForSSR:jR,inject:On,isMemoSame:Q_,isProxy:eg,isReactive:yr,isReadonly:di,isRef:Ct,isRuntimeOnly:jA,isShallow:Za,isVNode:Ns,markRaw:pi,mergeDefaults:XA,mergeProps:B_,nextTick:Ni,normalizeClass:Ri,normalizeProps:jC,normalizeStyle:ko,onActivated:g_,onBeforeMount:y_,onBeforeUnmount:Th,onBeforeUpdate:E_,onDeactivated:m_,onErrorCaptured:T_,onMounted:js,onRenderTracked:b_,onRenderTriggered:w_,onScopeDispose:$0,onServerPrefetch:__,onUnmounted:Sh,onUpdated:bh,openBlock:ge,popScopeId:c_,provide:io,proxyRefs:rg,pushScopeId:l_,queuePostFlushCb:og,reactive:fr,readonly:Zp,ref:wn,registerRuntimeCompiler:$A,render:kd,renderList:Uo,renderSlot:ai,resolveComponent:Ol,resolveDirective:hA,resolveDynamicComponent:uA,resolveFilter:nR,resolveTransitionHooks:vo,setBlockTracking:Ad,setDevtoolsHook:o_,setTransitionHooks:gi,shallowReactive:J0,shallowReadonly:R1,shallowRef:Z0,ssrContextKey:Y_,ssrUtils:tR,stop:t1,toDisplayString:$t,toHandlerKey:Oa,toHandlers:dA,toRaw:Ue,toRef:sg,toRefs:t_,transformVNodeArgs:DA,triggerRef:O1,unref:fe,useAttrs:YA,useCssModule:bR,useCssVars:TR,useSSRContext:X_,useSlots:zA,useTransitionState:cg,vModelCheckbox:yg,vModelDynamic:cw,vModelRadio:Eg,vModelSelect:aw,vModelText:pu,vShow:gu,version:q_,warn:F1,watch:Wr,watchEffect:tA,watchPostEffect:f_,watchSyncEffect:nA,withAsyncContext:qA,withCtx:At,withDefaults:GA,withDirectives:_d,withKeys:FR,withMemo:ZA,withModifiers:xh,withScopeId:K1},Symbol.toStringTag,{value:"Module"})),mu=DC();let jv=0;const HR=()=>{const t=jv;return jv+=1,t},vw=()=>(t,e)=>{const n={...t,id:HR(),group:t.group||""};return mu.emit("notify",{notification:n,timeout:e}),()=>mu.emit("close",n.id)},yw="context",Md=st({__name:"Notification",props:{maxNotifications:{default:10},enter:{default:""},enterFrom:{default:""},enterTo:{default:""},leave:{default:""},leaveFrom:{default:""},leaveTo:{default:""},move:{default:""},moveDelay:{default:""}},emits:["close"],setup(t,{emit:e}){const n=t,r=On(yw),s=fr({notifications:[],timeouts:{}}),i=Ut(()=>s.notifications.filter(u=>u.group===r.group)),o=Ut(()=>r.position==="bottom"?[...i.value].slice(0,n.maxNotifications):[...i.value].reverse().slice(0,n.maxNotifications)),a=u=>{s.notifications.splice(s.notifications.findIndex(h=>h.id===u),1),clearTimeout(s.timeouts[u])},l=({notification:u,timeout:h})=>{s.notifications.push(u),s.timeouts[u.id]=window.setTimeout(()=>{a(u.id)},h||3e3)},c=u=>{e("close"),a(u)};return js(()=>{mu.on("notify",l),mu.on("close",a)}),(u,h)=>(ge(),bt(ow,{"enter-active-class":fe(i).length>1?[n.enter,n.moveDelay].join(" "):n.enter,"enter-from-class":n.enterFrom,"enter-to-class":n.enterTo,"leave-active-class":n.leave,"leave-from-class":n.leaveFrom,"leave-to-class":n.leaveTo,"move-class":n.move},{default:At(()=>[ai(u.$slots,"default",{notifications:fe(o),close:c})]),_:3},8,["enter-active-class","enter-from-class","enter-to-class","leave-active-class","leave-from-class","leave-to-class","move-class"]))}}),Ld=st({__name:"NotificationGroup",props:{group:{default:""},position:{default:"top"}},setup(t){const e=t;return io(yw,{group:e.group,position:e.position}),(n,r)=>ai(n.$slots,"default",{group:t.group})}});function KR(t){t.config.globalProperties.$notify=vw(),t.component("Notification",Md),t.component("NotificationGroup",Ld),t.component("notification",Md),t.component("notificationGroup",Ld)}const WR={install:KR},Bv=vw();/**
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
 */const Ew={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ee=function(t,e){if(!t)throw $o(e)},$o=function(t){return new Error("Firebase Database ("+Ew.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},GR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new zR;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=_w(t);return Oh.encodeByteArray(e,!0)},vu=function(t){return ww(t).replace(/\./g,"")},yu=function(t){try{return Oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YR(t){return bw(void 0,t)}function bw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XR(n)||(t[n]=bw(t[n],e[n]));return t}function XR(t){return t!=="__proto__"}/**
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
 */function QR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qR=()=>QR().__FIREBASE_DEFAULTS__,JR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yu(t[1]);return e&&JSON.parse(e)},_g=()=>{try{return qR()||JR()||ZR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tw=t=>{var e,n;return(n=(e=_g())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ex=t=>{const e=Tw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tx=()=>{var t;return(t=_g())===null||t===void 0?void 0:t.config},Sw=t=>{var e;return(e=_g())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),a].join(".")}/**
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
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function rx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sx(){const t=mn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cw(){return Ew.NODE_ADMIN===!0}function Aw(){try{return typeof indexedDB=="object"}catch{return!1}}function ix(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ox="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ox,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ax(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pr(s,a,r)}}function ax(t,e){return t.replace(lx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lx=/\{\$([^}]+)}/g;/**
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
 */function ol(t){return JSON.parse(t)}function Jt(t){return JSON.stringify(t)}/**
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
 */const Rw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=ol(yu(i[0])||""),n=ol(yu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},cx=function(t){const e=Rw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ux=function(t){const e=Rw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ss(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _o(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function _u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vv(i)&&Vv(o)){if(!_u(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vv(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function va(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class hx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function fx(t,e){const n=new dx(t,e);return n.subscribe.bind(n)}class dx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");px(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Af),s.error===void 0&&(s.error=Af),s.complete===void 0&&(s.complete=Af);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function px(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Af(){}function gx(t,e){return`${t} failed: ${e} argument `}/**
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
 */const mx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,ee(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bn(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xs="[DEFAULT]";/**
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
 */class vx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new il;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ex(e))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xs){return this.instances.has(e)}getOptions(e=Xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xs){return this.component?this.component.multipleInstances?e:Xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yx(t){return t===Xs?void 0:t}function Ex(t){return t.instantiationMode==="EAGER"}/**
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
 */class _x{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const wx={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},bx=Je.INFO,Tx={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},Sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Tx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=bx,this._logHandler=Sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const Ix=(t,e)=>e.some(n=>t instanceof n);let Hv,Kv;function Cx(){return Hv||(Hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ax(){return Kv||(Kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,Ud=new WeakMap,Ow=new WeakMap,Rf=new WeakMap,bg=new WeakMap;function Rx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Is(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),bg.set(e,t),e}function xx(t){if(Ud.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ud.set(t,e)}let $d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ow.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ox(t){$d=t($d)}function Nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xf(this),e,...n);return Ow.set(r,e.sort?e.sort():[e]),Is(r)}:Ax().includes(t)?function(...e){return t.apply(xf(this),e),Is(xw.get(this))}:function(...e){return Is(t.apply(xf(this),e))}}function Px(t){return typeof t=="function"?Nx(t):(t instanceof IDBTransaction&&xx(t),Ix(t,Cx())?new Proxy(t,$d):t)}function Is(t){if(t instanceof IDBRequest)return Rx(t);if(Rf.has(t))return Rf.get(t);const e=Px(t);return e!==t&&(Rf.set(t,e),bg.set(e,t)),e}const xf=t=>bg.get(t);function Dx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Is(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Is(o.result),l.oldVersion,l.newVersion,Is(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kx=["get","getKey","getAll","getAllKeys","count"],Mx=["put","add","delete","clear"],Of=new Map;function Wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Of.get(e))return Of.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Mx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kx.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Of.set(e,i),i}Ox(t=>({...t,get:(e,n,r)=>Wv(e,n)||t.get(e,n,r),has:(e,n)=>!!Wv(e,n)||t.has(e,n)}));/**
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
 */class Lx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",Gv="0.9.9";/**
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
 */const yi=new Nl("@firebase/app"),Ux="@firebase/app-compat",$x="@firebase/analytics-compat",jx="@firebase/analytics",Bx="@firebase/app-check-compat",Vx="@firebase/app-check",Hx="@firebase/auth",Kx="@firebase/auth-compat",Wx="@firebase/database",Gx="@firebase/database-compat",zx="@firebase/functions",Yx="@firebase/functions-compat",Xx="@firebase/installations",Qx="@firebase/installations-compat",qx="@firebase/messaging",Jx="@firebase/messaging-compat",Zx="@firebase/performance",eO="@firebase/performance-compat",tO="@firebase/remote-config",nO="@firebase/remote-config-compat",rO="@firebase/storage",sO="@firebase/storage-compat",iO="@firebase/firestore",oO="@firebase/firestore-compat",aO="firebase",lO="9.21.0";/**
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
 */const Bd="[DEFAULT]",cO={[jd]:"fire-core",[Ux]:"fire-core-compat",[jx]:"fire-analytics",[$x]:"fire-analytics-compat",[Vx]:"fire-app-check",[Bx]:"fire-app-check-compat",[Hx]:"fire-auth",[Kx]:"fire-auth-compat",[Wx]:"fire-rtdb",[Gx]:"fire-rtdb-compat",[zx]:"fire-fn",[Yx]:"fire-fn-compat",[Xx]:"fire-iid",[Qx]:"fire-iid-compat",[qx]:"fire-fcm",[Jx]:"fire-fcm-compat",[Zx]:"fire-perf",[eO]:"fire-perf-compat",[tO]:"fire-rc",[nO]:"fire-rc-compat",[rO]:"fire-gcs",[sO]:"fire-gcs-compat",[iO]:"fire-fst",[oO]:"fire-fst-compat","fire-js":"fire-js",[aO]:"fire-js-all"};/**
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
 */const wu=new Map,Vd=new Map;function uO(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(Vd.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of wu.values())uO(n,t);return!0}function Tg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cs=new jo("app","Firebase",hO);/**
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
 */class fO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cs.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=lO;function Nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cs.create("bad-app-name",{appName:String(s)});if(n||(n=tx()),!n)throw Cs.create("no-options");const i=wu.get(s);if(i){if(_u(n,i.options)&&_u(r,i.config))return i;throw Cs.create("duplicate-app",{appName:s})}const o=new _x(s);for(const l of Vd.values())o.addComponent(l);const a=new fO(n,r,o);return wu.set(s,a),a}function Sg(t=Bd){const e=wu.get(t);if(!e&&t===Bd)return Nw();if(!e)throw Cs.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=cO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}Ir(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dO="firebase-heartbeat-database",pO=1,al="firebase-heartbeat-store";let Nf=null;function Pw(){return Nf||(Nf=Dx(dO,pO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(al)}}}).catch(t=>{throw Cs.create("idb-open",{originalErrorMessage:t.message})})),Nf}async function gO(t){try{return(await Pw()).transaction(al).objectStore(al).get(Dw(t))}catch(e){if(e instanceof Pr)yi.warn(e.message);else{const n=Cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function zv(t,e){try{const r=(await Pw()).transaction(al,"readwrite");return await r.objectStore(al).put(e,Dw(t)),r.done}catch(n){if(n instanceof Pr)yi.warn(n.message);else{const r=Cs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function Dw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mO=1024,vO=30*24*60*60*1e3;class yO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _O(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yv(),{heartbeatsToSend:n,unsentEntries:r}=EO(this._heartbeatsCache.heartbeats),s=vu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yv(){return new Date().toISOString().substring(0,10)}function EO(t,e=mO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?ix().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xv(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wO(t){Ir(new lr("platform-logger",e=>new Lx(e),"PRIVATE")),Ir(new lr("heartbeat",e=>new yO(e),"PRIVATE")),$n(jd,Gv,t),$n(jd,Gv,"esm2017"),$n("fire-js","")}wO("");function Ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bO=kw,Mw=new jo("auth","Firebase",kw());/**
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
 */const bu=new Nl("@firebase/auth");function TO(t,...e){bu.logLevel<=Je.WARN&&bu.warn(`Auth (${Bs}): ${t}`,...e)}function zc(t,...e){bu.logLevel<=Je.ERROR&&bu.error(`Auth (${Bs}): ${t}`,...e)}/**
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
 */function cr(t,...e){throw Cg(t,...e)}function Er(t,...e){return Cg(t,...e)}function SO(t,e,n){const r=Object.assign(Object.assign({},bO()),{[e]:n});return new jo("auth","Firebase",r).create(e,{appName:t.name})}function Cg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mw.create(t,...e)}function Se(t,e,...n){if(!t)throw Cg(e,...n)}function $r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zc(e),new Error(e)}function Jr(t,e){t||$r(e)}/**
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
 */function Hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IO(){return Qv()==="http:"||Qv()==="https:"}function Qv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IO()||rx()||"connection"in navigator)?navigator.onLine:!0}function AO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jr(n>e,"Short delay should be less than long delay!"),this.isMobile=wg()||Iw()}get(){return CO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ag(t,e){Jr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xO=new Pl(3e4,6e4);function Vo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ho(t,e,n,r,s={}){return Fw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Lw.fetch()(Uw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Fw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RO),e);try{const s=new OO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wc(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw SO(t,u,c);cr(t,u)}}catch(s){if(s instanceof Pr)throw s;cr(t,"network-request-failed",{message:String(s)})}}async function Dl(t,e,n,r,s={}){const i=await Ho(t,e,n,r,s);return"mfaPendingCredential"in i&&cr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ag(t.config,s):`${t.config.apiScheme}://${s}`}class OO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Er(this.auth,"network-request-failed")),xO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Er(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function NO(t,e){return Ho(t,"POST","/v1/accounts:delete",e)}async function PO(t,e){return Ho(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DO(t,e=!1){const n=bn(t),r=await n.getIdToken(e),s=Rg(r);Se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ma(Pf(s.auth_time)),issuedAtTime:Ma(Pf(s.iat)),expirationTime:Ma(Pf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pf(t){return Number(t)*1e3}function Rg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zc("JWT malformed, contained fewer than 3 sections"),null;try{const s=yu(n);return s?JSON.parse(s):(zc("Failed to decode base64 JWT payload"),null)}catch(s){return zc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kO(t){const e=Rg(t);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ll(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&MO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $w{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ll(t,PO(n,{idToken:r}));Se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$O(i.providerUserInfo):[],a=UO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $w(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function FO(t){const e=bn(t);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $O(t){return t.map(e=>{var{providerId:n}=e,r=Ig(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jO(t,e){const n=await Fw(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class cl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new cl;return r&&(Se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cl,this.toJSON())}_performRefresh(){return $r("not implemented")}}/**
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
 */function cs(t,e){Se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $w(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ll(this,this.stsTokenManager.getToken(this.auth,e));return Se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DO(this,e)}reload(){return FO(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ll(this,NO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:w,isAnonymous:T,providerData:S,stsTokenManager:x}=n;Se(E&&x,e,"internal-error");const I=cl.fromJSON(this.name,x);Se(typeof E=="string",e,"internal-error"),cs(h,e.name),cs(f,e.name),Se(typeof w=="boolean",e,"internal-error"),Se(typeof T=="boolean",e,"internal-error"),cs(d,e.name),cs(p,e.name),cs(m,e.name),cs(y,e.name),cs(v,e.name),cs(g,e.name);const C=new ci({uid:E,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:I,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(C.providerData=S.map(P=>Object.assign({},P))),y&&(C._redirectEventId=y),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new cl;s.updateFromServerResponse(n);const i=new ci({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tu(i),i}}/**
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
 */const qv=new Map;function jr(t){Jr(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(Jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}/**
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
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jw.type="NONE";const Jv=jw;/**
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
 */function Yc(t,e,n){return`firebase:${t}:${e}:${n}`}class oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oo(jr(Jv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||jr(Jv);const o=Yc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ci._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new oo(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new oo(i,e,r))}}/**
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
 */function Zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ww(e))return"Blackberry";if(Gw(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Vw(e))&&!e.includes("edge/"))return"Chrome";if(Kw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bw(t=mn()){return/firefox\//i.test(t)}function xg(t=mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vw(t=mn()){return/crios\//i.test(t)}function Hw(t=mn()){return/iemobile/i.test(t)}function Kw(t=mn()){return/android/i.test(t)}function Ww(t=mn()){return/blackberry/i.test(t)}function Gw(t=mn()){return/webos/i.test(t)}function Ph(t=mn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BO(t=mn()){var e;return Ph(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VO(){return sx()&&document.documentMode===10}function zw(t=mn()){return Ph(t)||Kw(t)||Gw(t)||Ww(t)||/windows phone/i.test(t)||Hw(t)}function HO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yw(t,e=[]){let n;switch(t){case"Browser":n=Zv(mn());break;case"Worker":n=`${Zv(mn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}async function Xw(t,e){return Ho(t,"GET","/v2/recaptchaConfig",Vo(t,e))}function ey(t){return t!==void 0&&t.enterprise!==void 0}class Qw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function KO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Er("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KO().appendChild(r)})}function WO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GO="https://www.google.com/recaptcha/enterprise.js?render=",zO="recaptcha-enterprise",YO="NO_RECAPTCHA";class Jw{constructor(e){this.type=zO,this.auth=Ko(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Xw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qw(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;ey(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(YO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ey(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qw(GO+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Su(t,e,n,r=!1){const s=new Jw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class XO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class QO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ty(this),this.idTokenSubscription=new ty(this),this.beforeStateQueue=new XO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?bn(e):null;return n&&Se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}async initializeRecaptchaConfig(){const e=await Xw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Jw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jr(e)||this._popupRedirectResolver;Se(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Se(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ko(t){return bn(t)}class ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=fx(n=>this.observer=n)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qO(t,e){const n=Tg(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_u(i,e??{}))return s;cr(s,"already-initialized")}return n.initialize({options:e})}function JO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZO(t,e,n){const r=Ko(t);Se(r._canInitEmulator,r,"emulator-config-failed"),Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Zw(e),{host:o,port:a}=eN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||tN()}function Zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eN(t){const e=Zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ny(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ny(o)}}}function ny(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Og{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,n){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}async function nN(t,e){return Ho(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Df(t,e){return Dl(t,"POST","/v1/accounts:signInWithPassword",Vo(t,e))}/**
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
 */async function rN(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",Vo(t,e))}async function sN(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",Vo(t,e))}/**
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
 */class ul extends Og{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Su(e,r,"signInWithPassword");return Df(e,s)}else return Df(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Su(e,r,"signInWithPassword");return Df(e,i)}else return Promise.reject(s)});case"emailLink":return rN(e,{email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sN(e,{idToken:n,email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(t,e){return Dl(t,"POST","/v1/accounts:signInWithIdp",Vo(t,e))}/**
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
 */const iN="http://localhost";class Ei extends Og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ig(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ei(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ao(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
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
 */function oN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aN(t){const e=va(ya(t)).link,n=e?va(ya(e)).deep_link_id:null,r=va(ya(t)).deep_link_id;return(r?va(ya(r)).link:null)||r||n||e||t}class Ng{constructor(e){var n,r,s,i,o,a;const l=va(ya(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=oN((s=l.mode)!==null&&s!==void 0?s:null);Se(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aN(e);try{return new Ng(n)}catch{return null}}}/**
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
 */class Wo{constructor(){this.providerId=Wo.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ng.parseLink(n);return Se(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Wo.PROVIDER_ID="password";Wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kl extends eb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ms extends kl{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";ms.PROVIDER_ID="facebook.com";/**
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
 */class vs extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vs.credential(n,r)}catch{return null}}}vs.GOOGLE_SIGN_IN_METHOD="google.com";vs.PROVIDER_ID="google.com";/**
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
 */class ys extends kl{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.GITHUB_SIGN_IN_METHOD="github.com";ys.PROVIDER_ID="github.com";/**
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
 */class Es extends kl{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Es.credential(n,r)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
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
 */async function kf(t,e){return Dl(t,"POST","/v1/accounts:signUp",Vo(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ci._fromIdTokenResponse(e,r,s),o=ry(r);return new _i({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ry(r);return new _i({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ry(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Iu extends Pr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Iu(e,n,r,s)}}function tb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,i,e,r):i})}async function lN(t,e,n=!1){const r=await ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function cN(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ll(t,tb(r,s,e,t),n);Se(i.idToken,r,"internal-error");const o=Rg(i.idToken);Se(o,r,"internal-error");const{sub:a}=o;return Se(t.uid===a,r,"user-mismatch"),_i._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cr(r,"user-mismatch"),i}}/**
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
 */async function nb(t,e,n=!1){const r="signIn",s=await tb(t,r,e),i=await _i._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function uN(t,e){return nb(Ko(t),e)}async function hN(t,e,n){var r;const s=Ko(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Su(s,i,"signUpPassword");o=kf(s,c)}else o=kf(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Su(s,i,"signUpPassword");return kf(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await _i._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function fN(t,e,n){return uN(bn(t),Wo.credential(e,n))}function rb(t,e,n,r){return bn(t).onIdTokenChanged(e,n,r)}function dN(t,e,n){return bn(t).beforeAuthStateChanged(e,n)}function pN(t){return bn(t).signOut()}async function gN(t){return bn(t).delete()}const Cu="__sak";/**
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
 */class sb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cu,"1"),this.storage.removeItem(Cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mN(){const t=mn();return xg(t)||Ph(t)}const vN=1e3,yN=10;class ib extends sb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mN()&&HO(),this.fallbackToPolling=zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ib.type="LOCAL";const EN=ib;/**
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
 */class ob extends sb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ob.type="SESSION";const ab=ob;/**
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
 */function _N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await _N(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dh.receivers=[];/**
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
 */function Pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Pg("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _r(){return window}function bN(t){_r().location.href=t}/**
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
 */function lb(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function TN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IN(){return lb()?self:null}/**
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
 */const cb="firebaseLocalStorageDb",CN=1,Au="firebaseLocalStorage",ub="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function AN(){const t=indexedDB.deleteDatabase(cb);return new Ml(t).toPromise()}function Kd(){const t=indexedDB.open(cb,CN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:ub})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await AN(),e(await Kd()))})})}async function sy(t,e,n){const r=kh(t,!0).put({[ub]:e,value:n});return new Ml(r).toPromise()}async function RN(t,e){const n=kh(t,!1).get(e),r=await new Ml(n).toPromise();return r===void 0?null:r.value}function iy(t,e){const n=kh(t,!0).delete(e);return new Ml(n).toPromise()}const xN=800,ON=3;class hb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ON)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dh._getInstance(IN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TN(),!this.activeServiceWorker)return;this.sender=new wN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kd();return await sy(e,Cu,"1"),await iy(e,Cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kh(s,!1).getAll();return new Ml(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hb.type="LOCAL";const NN=hb;new Pl(3e4,6e4);/**
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
 */function PN(t,e){return e?jr(e):(Se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dg extends Og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DN(t){return nb(t.auth,new Dg(t),t.bypassAuthState)}function kN(t){const{auth:e,user:n}=t;return Se(n,e,"internal-error"),cN(n,new Dg(t),t.bypassAuthState)}async function MN(t){const{auth:e,user:n}=t;return Se(n,e,"internal-error"),lN(n,new Dg(t),t.bypassAuthState)}/**
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
 */class fb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DN;case"linkViaPopup":case"linkViaRedirect":return MN;case"reauthViaPopup":case"reauthViaRedirect":return kN;default:cr(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LN=new Pl(2e3,1e4);class Xi extends fb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LN.get())};e()}}Xi.currentPopupAction=null;/**
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
 */const FN="pendingRedirect",Xc=new Map;class UN extends fb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xc.get(this.auth._key());if(!e){try{const r=await $N(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xc.set(this.auth._key(),e)}return this.bypassAuthState||Xc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $N(t,e){const n=VN(e),r=BN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jN(t,e){Xc.set(t._key(),e)}function BN(t){return jr(t._redirectPersistence)}function VN(t){return Yc(FN,t.config.apiKey,t.name)}async function HN(t,e,n=!1){const r=Ko(t),s=PN(r,e),o=await new UN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const KN=10*60*1e3;class WN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!db(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Er(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KN&&this.cachedEventUids.clear(),this.cachedEventUids.has(oy(e))}saveEventToCache(e){this.cachedEventUids.add(oy(e)),this.lastProcessedEventTime=Date.now()}}function oy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function db({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return db(t);default:return!1}}/**
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
 */async function zN(t,e={}){return Ho(t,"GET","/v1/projects",e)}/**
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
 */const YN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XN=/^https?/;async function QN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zN(t);for(const n of e)try{if(qN(n))return}catch{}cr(t,"unauthorized-domain")}function qN(t){const e=Hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XN.test(n))return!1;if(YN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JN=new Pl(3e4,6e4);function ay(){const t=_r().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZN(t){return new Promise((e,n)=>{var r,s,i;function o(){ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ay(),n(Er(t,"network-request-failed"))},timeout:JN.get()})}if(!((s=(r=_r().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_r().gapi)===null||i===void 0)&&i.load)o();else{const a=WO("iframefcb");return _r()[a]=()=>{gapi.load?o():n(Er(t,"network-request-failed"))},qw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function eP(t){return Qc=Qc||ZN(t),Qc}/**
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
 */const tP=new Pl(5e3,15e3),nP="__/auth/iframe",rP="emulator/auth/iframe",sP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oP(t){const e=t.config;Se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ag(e,rP):`https://${t.config.authDomain}/${nP}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},s=iP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function aP(t){const e=await eP(t),n=_r().gapi;return Se(n,t,"internal-error"),e.open({where:document.body,url:oP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Er(t,"network-request-failed"),a=_r().setTimeout(()=>{i(o)},tP.get());function l(){_r().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const lP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cP=500,uP=600,hP="_blank",fP="http://localhost";class ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dP(t,e,n,r=cP,s=uP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=mn().toLowerCase();n&&(a=Vw(c)?hP:n),Bw(c)&&(e=e||fP,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(BO(c)&&a!=="_self")return pP(e||"",a),new ly(null);const h=window.open(e||"",a,u);Se(h,t,"popup-blocked");try{h.focus()}catch{}return new ly(h)}function pP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gP="__/auth/handler",mP="emulator/auth/handler",vP=encodeURIComponent("fac");async function cy(t,e,n,r,s,i){Se(t.config.authDomain,t,"auth-domain-config-required"),Se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:s};if(e instanceof eb){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof kl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${vP}=${encodeURIComponent(l)}`:"";return`${yP(t)}?${Bo(a).slice(1)}${c}`}function yP({config:t}){return t.emulator?Ag(t,mP):`https://${t.authDomain}/${gP}`}/**
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
 */const Mf="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ab,this._completeRedirectFn=HN,this._overrideRedirectResult=jN}async _openPopup(e,n,r,s){var i;Jr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cy(e,n,r,Hd(),s);return dP(e,o,Pg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cy(e,n,r,Hd(),s);return bN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aP(e),r=new WN(e);return n.register("authEvent",s=>(Se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mf,{type:Mf},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mf];o!==void 0&&n(!!o),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zw()||xg()||Ph()}}const _P=EP;var uy="@firebase/auth",hy="0.23.1";/**
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
 */class wP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TP(t){Ir(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),Se(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yw(t)},c=new QO(r,s,i,l);return JO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new lr("auth-internal",e=>{const n=Ko(e.getProvider("auth").getImmediate());return(r=>new wP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(uy,hy,bP(t)),$n(uy,hy,"esm2017")}/**
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
 */const SP=5*60,IP=Sw("authIdTokenMaxAge")||SP;let fy=null;const CP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IP)return;const s=n==null?void 0:n.token;fy!==s&&(fy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pb(t=Sg()){const e=Tg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qO(t,{popupRedirectResolver:_P,persistence:[NN,EN,ab]}),r=Sw("authTokenSyncURL");if(r){const i=CP(r);dN(n,i,()=>i(n.currentUser)),rb(n,o=>i(o))}const s=Tw("auth");return s&&ZO(n,`http://${s}`),n}TP("Browser");var AP=!1;/**
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
 */const RP=new Map,xP={activated:!1,tokenObservers:[]};function Cr(t){return RP.get(t)||Object.assign({},xP)}const dy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class OP{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new il,await NP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new il,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function NP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const PP={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ru=new jo("appCheck","AppCheck",PP);function DP(t){if(!Cr(t).activated)throw Ru.create("use-before-activation",{appName:t.name})}/**
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
 */const kP="firebase-app-check-database",MP=1,Wd="firebase-app-check-store";let bc=null;function LP(){return bc||(bc=new Promise((t,e)=>{try{const n=indexedDB.open(kP,MP);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ru.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Wd,{keyPath:"compositeKey"})}}}catch(n){e(Ru.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),bc)}function FP(t,e){return UP($P(t),e)}async function UP(t,e){const r=(await LP()).transaction(Wd,"readwrite"),i=r.objectStore(Wd).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Ru.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function $P(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Gd=new Nl("@firebase/app-check");function py(t,e){return Aw()?FP(t,e).catch(n=>{Gd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const jP={error:"UNKNOWN_ERROR"};function BP(t){return Oh.encodeString(JSON.stringify(t),!1)}async function zd(t,e=!1){const n=t.app;DP(n);const r=Cr(n);let s=r.token,i;if(s&&!Ea(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Ea(l)?s=l:await py(n,void 0))}if(!e&&s&&Ea(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Cr(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Gd.warn(l.message):Gd.error(l),i=l}let a;return s?i?Ea(s)?a={token:s.token,internalError:i}:a=my(i):(a={token:s.token},r.token=s,await py(n,s)):a=my(i),o&&KP(n,a),a}function VP(t,e,n,r){const{app:s}=t,i=Cr(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ea(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),gy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>gy(t))}function gb(t,e){const n=Cr(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function gy(t){const{app:e}=t,n=Cr(e);let r=n.tokenRefresher;r||(r=HP(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function HP(t){const{app:e}=t;return new OP(async()=>{const n=Cr(e);let r;if(n.token?r=await zd(t,!0):r=await zd(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Cr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},dy.RETRIAL_MIN_WAIT,dy.RETRIAL_MAX_WAIT)}function KP(t,e){const n=Cr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ea(t){return t.expireTimeMillis-Date.now()>0}function my(t){return{token:BP(jP),error:t}}/**
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
 */class WP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Cr(this.app);for(const n of e)gb(this.app,n.next);return Promise.resolve()}}function GP(t,e){return new WP(t,e)}function zP(t){return{getToken:e=>zd(t,e),addTokenListener:e=>VP(t,"INTERNAL",e),removeTokenListener:e=>gb(t.app,e)}}const YP="@firebase/app-check",XP="0.7.0",QP="app-check",vy="app-check-internal";function qP(){Ir(new lr(QP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return GP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(vy).initialize()})),Ir(new lr(vy,t=>{const e=t.getProvider("app-check").getImmediate();return zP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),$n(YP,XP)}qP();var JP="firebase",ZP="9.21.0";/**
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
 */$n(JP,ZP,"app");const mb=Symbol("firebaseApp");function vb(t){return Nr()&&On(mb,null)||Sg(t)}const Tc=new WeakMap;function eD(t,e){if(!Tc.has(t)){const n=hh(!0);Tc.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Tc.delete(t)}}return Tc.get(t)}const tD=new WeakMap,Sc=new WeakMap;function nD(t){const e=vb(t);if(!Sc.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Sc.set(e,i),n(i.value)}];Sc.set(e,s)}return Sc.get(e)}function rD(t,e){const n=pb(e);rb(n,r=>{const s=nD();t.value=r,Array.isArray(s)&&s[1](t)})}const yy="@firebase/database",Ey="0.14.4";/**
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
 */let yb="";function sD(t){yb=t}/**
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
 */class iD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Jt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ol(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ss(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Eb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iD(e)}}catch{}return new oD},ti=Eb("localStorage"),Yd=Eb("sessionStorage");/**
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
 */const lo=new Nl("@firebase/database"),aD=function(){let t=1;return function(){return t++}}(),_b=function(t){const e=mx(t),n=new hx;n.update(e);const r=n.digest();return Oh.encodeByteArray(r)},Ll=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ll.apply(null,r):typeof r=="object"?e+=Jt(r):e+=r,e+=" "}return e};let ui=null,_y=!0;const lD=function(t,e){ee(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(lo.logLevel=Je.VERBOSE,ui=lo.log.bind(lo),e&&Yd.set("logging_enabled",!0)):typeof t=="function"?ui=t:(ui=null,Yd.remove("logging_enabled"))},sn=function(...t){if(_y===!0&&(_y=!1,ui===null&&Yd.get("logging_enabled")===!0&&lD(!0)),ui){const e=Ll.apply(null,t);ui(e)}},Fl=function(t){return function(...e){sn(t,...e)}},Xd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ll(...t);lo.error(e)},wi=function(...t){const e=`FIREBASE FATAL ERROR: ${Ll(...t)}`;throw lo.error(e),new Error(e)},jn=function(...t){const e="FIREBASE WARNING: "+Ll(...t);lo.warn(e)},cD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wo="[MIN_NAME]",bi="[MAX_NAME]",Go=function(t,e){if(t===e)return 0;if(t===wo||e===bi)return-1;if(e===wo||t===bi)return 1;{const n=wy(t),r=wy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},hD=function(t,e){return t===e?0:t<e?-1:1},sa=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Jt(e))},kg=function(t){if(typeof t!="object"||t===null)return Jt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Jt(e[r]),n+=":",n+=kg(t[e[r]]);return n+="}",n},bb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Yn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tb=function(t){ee(!wb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},fD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},pD=new RegExp("^-?(0*)\\d{1,10}$"),gD=-2147483648,mD=2147483647,wy=function(t){if(pD.test(t)){const e=Number(t);if(e>=gD&&e<=mD)return e}return null},Ul=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jn("Exception was thrown by user callback.",n),e},Math.floor(0))}},vD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class yD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){jn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ED{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(sn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jn(e)}}class Qd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qd.OWNER="owner";/**
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
 */const Mg="5",Sb="v",Ib="s",Cb="r",Ab="f",Rb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xb="ls",Ob="p",qd="ac",Nb="websocket",Pb="long_polling";/**
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
 */class _D{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Db(t,e,n){ee(typeof e=="string","typeof type must == string"),ee(typeof n=="object","typeof params must == object");let r;if(e===Nb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wD(t)&&(n.ns=t.namespace);const s=[];return Yn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class bD{constructor(){this.counters_={}}incrementCounter(e,n=1){ss(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return YR(this.counters_)}}/**
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
 */const Lf={},Ff={};function Lg(t){const e=t.toString();return Lf[e]||(Lf[e]=new bD),Lf[e]}function TD(t,e){const n=t.toString();return Ff[n]||(Ff[n]=e()),Ff[n]}/**
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
 */class SD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ul(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const by="start",ID="close",CD="pLPCommand",AD="pRTLPCB",kb="id",Mb="pw",Lb="ser",RD="cb",xD="seg",OD="ts",ND="d",PD="dframe",Fb=1870,Ub=30,DD=Fb-Ub,kD=25e3,MD=3e4;class Qi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fl(e),this.stats_=Lg(n),this.urlFn=l=>(this.appCheckToken&&(l[qd]=this.appCheckToken),Db(n,Pb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new SD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(MD)),uD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fg((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===by)this.id=a,this.password=l;else if(o===ID)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[by]="t",r[Lb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Sb]=Mg,this.transportSessionId&&(r[Ib]=this.transportSessionId),this.lastSessionId&&(r[xb]=this.lastSessionId),this.applicationId&&(r[Ob]=this.applicationId),this.appCheckToken&&(r[qd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rb.test(location.hostname)&&(r[Cb]=Ab);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qi.forceAllow_=!0}static forceDisallow(){Qi.forceDisallow_=!0}static isAvailable(){return Qi.forceAllow_?!0:!Qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fD()&&!dD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ww(n),s=bb(r,DD);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[PD]="t",r[kb]=e,r[Mb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Jt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aD(),window[CD+this.uniqueCallbackIdentifier]=e,window[AD+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){sn("frame writing exception"),a.stack&&sn(a.stack),sn(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||sn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kb]=this.myID,e[Mb]=this.myPW,e[Lb]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ub+r.length<=Fb;){const o=this.pendingSegs.shift();r=r+"&"+xD+s+"="+o.seg+"&"+OD+s+"="+o.ts+"&"+ND+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(kD)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{sn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const LD=16384,FD=45e3;let xu=null;typeof MozWebSocket<"u"?xu=MozWebSocket:typeof WebSocket<"u"&&(xu=WebSocket);class nr{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fl(this.connId),this.stats_=Lg(n),this.connURL=nr.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Sb]=Mg,typeof location<"u"&&location.hostname&&Rb.test(location.hostname)&&(o[Cb]=Ab),n&&(o[Ib]=n),r&&(o[xb]=r),s&&(o[qd]=s),i&&(o[Ob]=i),Db(e,Nb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;Cw(),this.mySock=new xu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xu!==null&&!nr.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ol(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bb(n,LD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nr.responsesRequiredToBeHealthy=2;nr.healthyTimeout=3e4;/**
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
 */class hl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qi,nr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nr&&nr.isAvailable();let r=n&&!nr.previouslyFailed();if(e.webSocketOnly&&(n||jn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nr];else{const s=this.transports_=[];for(const i of hl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);hl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hl.globalTransportInitialized_=!1;/**
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
 */const UD=6e4,$D=5e3,jD=10*1024,BD=100*1024,Uf="t",Ty="d",VD="s",Sy="r",HD="e",Iy="o",Cy="a",Ay="n",Ry="p",KD="h";class WD{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fl("c:"+this.id+":"),this.transportManager_=new hl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uf in e){const n=e[Uf];n===Cy?this.upgradeIfSecondaryHealthy_():n===Sy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Iy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=sa("t",e),r=sa("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ry,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ay,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=sa("t",e),r=sa("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=sa(Uf,e);if(Ty in e){const r=e[Ty];if(n===KD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ay){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VD?this.onConnectionShutdown_(r):n===Sy?this.onReset_(r):n===HD?Xd("Server Error: "+r):n===Iy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mg!==r&&jn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($D))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ry,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class $b{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class jb{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ou extends jb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ou}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xy=32,Oy=768;class mt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ot(){return new mt("")}function ze(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ks(t){return t.pieces_.length-t.pieceNum_}function pt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new mt(t.pieces_,e)}function Bb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new mt(e,0)}function Wt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof mt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new mt(n,0)}function He(t){return t.pieceNum_>=t.pieces_.length}function zn(t,e){const n=ze(t),r=ze(e);if(n===null)return e;if(n===r)return zn(pt(t),pt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kb(t,e){if(ks(t)!==ks(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rr(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ks(t)>ks(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zD{constructor(e,n){this.errorPrefix_=n,this.parts_=Vb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nh(this.parts_[r]);Wb(this)}}function YD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nh(e),Wb(t)}function XD(t){const e=t.parts_.pop();t.byteLength_-=Nh(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wb(t){if(t.byteLength_>Oy)throw new Error(t.errorPrefix_+"has a key path longer than "+Oy+" bytes ("+t.byteLength_+").");if(t.parts_.length>xy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xy+") or object contains a cycle "+Qs(t))}function Qs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ug extends jb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ug}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ia=1e3,QD=60*5*1e3,Ny=30*1e3,qD=1.3,JD=3e4,ZD="server_kill",Py=3;class zr extends $b{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zr.nextPersistentConnectionId_++,this.log_=Fl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ia,this.maxReconnectDelay_=QD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ug.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ou.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Jt(i)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new il,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;zr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ss(e,"w")){const r=_o(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();jn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ux(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ny)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Jt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xd("Unrecognized action received from server: "+Jt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JD&&(this.reconnectDelay_=ia),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+zr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?sn("getToken() completed but was canceled"):(sn("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new WD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{jn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZD)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jn(h),l())}}}interrupt(e){sn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fd(this.interruptReasons_)&&(this.reconnectDelay_=ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>kg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new mt(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){sn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Py&&(this.reconnectDelay_=Ny,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){sn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Py&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yb.replace(/\./g,"-")]=1,wg()?e["framework.cordova"]=1:Iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ou.getInstance().currentlyOnline();return Fd(this.interruptReasons_)&&e}}zr.nextPersistentConnectionId_=0;zr.nextConnectionId_=0;/**
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
 */class Ye{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ye(e,n)}}/**
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
 */class Mh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ye(wo,e),s=new Ye(wo,n);return this.compare(r,s)!==0}minPost(){return Ye.MIN}}/**
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
 */let Ic;class Gb extends Mh{static get __EMPTY_NODE(){return Ic}static set __EMPTY_NODE(e){Ic=e}compare(e,n){return Go(e.name,n.name)}isDefinedOn(e){throw $o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(bi,Ic)}makePost(e,n){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,Ic)}toString(){return".key"}}const co=new Gb;/**
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
 */class Cc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Kt.RED,this.left=s??Rn.EMPTY_NODE,this.right=i??Rn.EMPTY_NODE}copy(e,n,r,s,i){return new Kt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kt.RED=!0;Kt.BLACK=!1;class ek{copy(e,n,r,s,i){return this}insert(e,n,r){return new Kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rn{constructor(e,n=Rn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Cc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Cc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Cc(this.root_,null,this.comparator_,!0,e)}}Rn.EMPTY_NODE=new ek;/**
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
 */function tk(t,e){return Go(t.name,e.name)}function $g(t,e){return Go(t,e)}/**
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
 */let Jd;function nk(t){Jd=t}const zb=function(t){return typeof t=="number"?"number:"+Tb(t):"string:"+t},Yb=function(t){if(t.isLeafNode()){const e=t.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ss(e,".sv"),"Priority must be a string or number.")}else ee(t===Jd||t.isEmpty(),"priority of unexpected type.");ee(t===Jd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dy;class Vt{constructor(e,n=Vt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yb(this.priorityNode_)}static set __childrenNodeConstructor(e){Dy=e}static get __childrenNodeConstructor(){return Dy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return He(e)?this:ze(e)===".priority"?this.priorityNode_:Vt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Vt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ze(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||ks(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Vt.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tb(this.value_):e+=this.value_,this.lazyHash_=_b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vt.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Vt.VALUE_TYPE_ORDER.indexOf(n),i=Vt.VALUE_TYPE_ORDER.indexOf(r);return ee(s>=0,"Unknown leaf type: "+n),ee(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Vt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Xb,Qb;function rk(t){Xb=t}function sk(t){Qb=t}class ik extends Mh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Go(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(bi,new Vt("[PRIORITY-POST]",Qb))}makePost(e,n){const r=Xb(e);return new Ye(n,new Vt("[PRIORITY-POST]",r))}toString(){return".priority"}}const hn=new ik;/**
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
 */const ok=Math.log(2);class ak{constructor(e){const n=i=>parseInt(Math.log(i)/ok,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nu=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Kt(f,h.node,Kt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),m=s(d+1,c);return h=t[d],f=n?n(h):h,new Kt(f,h.node,Kt.BLACK,p,m)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const y=h-p,v=h;h-=p;const g=s(y+1,v),E=t[y],w=n?n(E):E;d(new Kt(w,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?f(y,Kt.BLACK):(f(y,Kt.BLACK),f(y,Kt.RED))}return u},o=new ak(t.length),a=i(o);return new Rn(r||e,a)};/**
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
 */let $f;const Fi={};class Br{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ee(Fi&&hn,"ChildrenNode.ts has not been loaded"),$f=$f||new Br({".priority":Fi},{".priority":hn}),$f}get(e){const n=_o(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rn?n:null}hasIndex(e){return ss(this.indexSet_,e.toString())}addIndex(e,n){ee(e!==co,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ye.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Nu(r,e.getCompare()):a=Fi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Br(u,c)}addToIndexes(e,n){const r=Eu(this.indexes_,(s,i)=>{const o=_o(this.indexSet_,i);if(ee(o,"Missing index implementation for "+i),s===Fi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ye.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Nu(a,o.getCompare())}else return Fi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ye(e.name,a))),l.insert(e,e.node)}});return new Br(r,this.indexSet_)}removeFromIndexes(e,n){const r=Eu(this.indexes_,s=>{if(s===Fi)return s;{const i=n.get(e.name);return i?s.remove(new Ye(e.name,i)):s}});return new Br(r,this.indexSet_)}}/**
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
 */let oa;class tt{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yb(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oa||(oa=new tt(new Rn($g),null,Br.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oa}updatePriority(e){return this.children_.isEmpty()?this:new tt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oa:n}}getChild(e){const n=ze(e);return n===null?this:this.getImmediateChild(n).getChild(pt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ee(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ye(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?oa:this.priorityNode_;return new tt(s,o,i)}}updateChild(e,n){const r=ze(e);if(r===null)return n;{ee(ze(e)!==".priority"||ks(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(pt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(hn,(o,a)=>{n[o]=a.val(e),r++,i&&tt.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zb(this.getPriority().val())+":"),this.forEachChild(hn,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_b(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ye(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ye(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ye(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$l?-1:0}withIndex(e){if(e===co||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new tt(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===co||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(hn),s=n.getIterator(hn);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===co?null:this.indexMap_.get(e.toString())}}tt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lk extends tt{constructor(){super(new Rn($g),tt.EMPTY_NODE,Br.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tt.EMPTY_NODE}isEmpty(){return!1}}const $l=new lk;Object.defineProperties(Ye,{MIN:{value:new Ye(wo,tt.EMPTY_NODE)},MAX:{value:new Ye(bi,$l)}});Gb.__EMPTY_NODE=tt.EMPTY_NODE;Vt.__childrenNodeConstructor=tt;nk($l);sk($l);/**
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
 */const ck=!0;function on(t,e=null){if(t===null)return tt.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Vt(n,on(e))}if(!(t instanceof Array)&&ck){const n=[];let r=!1;if(Yn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=on(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ye(o,l)))}}),n.length===0)return tt.EMPTY_NODE;const i=Nu(n,tk,o=>o.name,$g);if(r){const o=Nu(n,hn.getCompare());return new tt(i,on(e),new Br({".priority":o},{".priority":hn}))}else return new tt(i,on(e),Br.Default)}else{let n=tt.EMPTY_NODE;return Yn(t,(r,s)=>{if(ss(t,r)&&r.substring(0,1)!=="."){const i=on(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(on(e))}}rk(on);/**
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
 */class uk extends Mh{constructor(e){super(),this.indexPath_=e,ee(!He(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Go(e.name,n.name):i}makePost(e,n){const r=on(e),s=tt.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ye(n,s)}maxPost(){const e=tt.EMPTY_NODE.updateChild(this.indexPath_,$l);return new Ye(bi,e)}toString(){return Vb(this.indexPath_,0).join("/")}}/**
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
 */class hk extends Mh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Go(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,n){const r=on(e);return new Ye(n,r)}toString(){return".value"}}const fk=new hk;/**
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
 */function dk(t){return{type:"value",snapshotNode:t}}function pk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ky(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class jg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=hn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wo}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===hn}copy(){const e=new jg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function My(t){const e={};if(t.isDefault())return e;let n;if(t.index_===hn?n="$priority":t.index_===fk?n="$value":t.index_===co?n="$key":(ee(t.index_ instanceof uk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Jt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Jt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Jt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Jt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Jt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ly(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==hn&&(e.i=t.index_.toString()),e}/**
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
 */class Pu extends $b{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Fl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Pu.getListenId_(e,r),a={};this.listens_[o]=a;const l=My(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),_o(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Pu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=My(e._queryParams),r=e._path.toString(),s=new il;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ol(a.responseText)}catch{jn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&jn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class vk{constructor(){this.rootNode_=tt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Du(){return{value:null,children:new Map}}function qb(t,e,n){if(He(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ze(e);t.children.has(r)||t.children.set(r,Du());const s=t.children.get(r);e=pt(e),qb(s,e,n)}}function Zd(t,e,n){t.value!==null?n(e,t.value):yk(t,(r,s)=>{const i=new mt(e.toString()+"/"+r);Zd(s,i,n)})}function yk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Ek{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Yn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Fy=10*1e3,_k=30*1e3,wk=5*60*1e3;class bk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ek(e);const r=Fy+(_k-Fy)*Math.random();La(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Yn(e,(s,i)=>{i>0&&ss(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*wk))}}/**
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
 */var mr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mr||(mr={}));function Jb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ku{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mr.ACK_USER_WRITE,this.source=Jb()}operationForChild(e){if(He(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new mt(e));return new ku(ot(),n,this.revert)}}else return ee(ze(this.path)===e,"operationForChild called for unrelated child."),new ku(pt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ti{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mr.OVERWRITE}operationForChild(e){return He(this.path)?new Ti(this.source,ot(),this.snap.getImmediateChild(e)):new Ti(this.source,pt(this.path),this.snap)}}/**
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
 */class fl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mr.MERGE}operationForChild(e){if(He(this.path)){const n=this.children.subtree(new mt(e));return n.isEmpty()?null:n.value?new Ti(this.source,ot(),n.value):new fl(this.source,ot(),n)}else return ee(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fl(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(He(e))return this.isFullyInitialized()&&!this.filtered_;const n=ze(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Tk(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(mk(o.childName,o.snapshotNode))}),aa(t,s,"child_removed",e,r,n),aa(t,s,"child_added",e,r,n),aa(t,s,"child_moved",i,r,n),aa(t,s,"child_changed",e,r,n),aa(t,s,"value",e,r,n),s}function aa(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Ik(t,a,l)),o.forEach(a=>{const l=Sk(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Sk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ik(t,e,n){if(e.childName==null||n.childName==null)throw $o("Should only compare child_ events.");const r=new Ye(e.childName,e.snapshotNode),s=new Ye(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function tT(t,e){return{eventCache:t,serverCache:e}}function Fa(t,e,n,r){return tT(new Bg(e,n,r),t.serverCache)}function nT(t,e,n,r){return tT(t.eventCache,new Bg(e,n,r))}function ep(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let jf;const Ck=()=>(jf||(jf=new Rn(hD)),jf);class dt{constructor(e,n=Ck()){this.value=e,this.children=n}static fromObject(e){let n=new dt(null);return Yn(e,(r,s)=>{n=n.set(new mt(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ot(),value:this.value};if(He(e))return null;{const r=ze(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(pt(e),n);return i!=null?{path:Wt(new mt(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(He(e))return this;{const n=ze(e),r=this.children.get(n);return r!==null?r.subtree(pt(e)):new dt(null)}}set(e,n){if(He(e))return new dt(n,this.children);{const r=ze(e),i=(this.children.get(r)||new dt(null)).set(pt(e),n),o=this.children.insert(r,i);return new dt(this.value,o)}}remove(e){if(He(e))return this.children.isEmpty()?new dt(null):new dt(null,this.children);{const n=ze(e),r=this.children.get(n);if(r){const s=r.remove(pt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new dt(null):new dt(this.value,i)}else return this}}get(e){if(He(e))return this.value;{const n=ze(e),r=this.children.get(n);return r?r.get(pt(e)):null}}setTree(e,n){if(He(e))return n;{const r=ze(e),i=(this.children.get(r)||new dt(null)).setTree(pt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new dt(this.value,o)}}fold(e){return this.fold_(ot(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Wt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ot(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(He(e))return null;{const i=ze(e),o=this.children.get(i);return o?o.findOnPath_(pt(e),Wt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ot(),n)}foreachOnPath_(e,n,r){if(He(e))return this;{this.value&&r(n,this.value);const s=ze(e),i=this.children.get(s);return i?i.foreachOnPath_(pt(e),Wt(n,s),r):new dt(null)}}foreach(e){this.foreach_(ot(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Wt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ar{constructor(e){this.writeTree_=e}static empty(){return new ar(new dt(null))}}function Ua(t,e,n){if(He(e))return new ar(new dt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=zn(s,e);return i=i.updateChild(o,n),new ar(t.writeTree_.set(s,i))}else{const s=new dt(n),i=t.writeTree_.setTree(e,s);return new ar(i)}}}function Uy(t,e,n){let r=t;return Yn(n,(s,i)=>{r=Ua(r,Wt(e,s),i)}),r}function $y(t,e){if(He(e))return ar.empty();{const n=t.writeTree_.setTree(e,new dt(null));return new ar(n)}}function tp(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zn(n.path,e)):null}function jy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(hn,(r,s)=>{e.push(new Ye(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ye(r,s.value))}),e}function As(t,e){if(He(e))return t;{const n=Pi(t,e);return n!=null?new ar(new dt(n)):new ar(t.writeTree_.subtree(e))}}function np(t){return t.writeTree_.isEmpty()}function bo(t,e){return rT(ot(),t.writeTree_,e)}function rT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ee(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=rT(Wt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Wt(t,".priority"),r)),n}}/**
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
 */function sT(t,e){return cT(e,t)}function Ak(t,e,n,r,s){ee(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ua(t.visibleWrites,e,n)),t.lastWriteId=r}function Rk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function xk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ee(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ok(a,r.path)?s=!1:rr(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Nk(t),!0;if(r.snap)t.visibleWrites=$y(t.visibleWrites,r.path);else{const a=r.children;Yn(a,l=>{t.visibleWrites=$y(t.visibleWrites,Wt(r.path,l))})}return!0}else return!1}function Ok(t,e){if(t.snap)return rr(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rr(Wt(t.path,n),e))return!0;return!1}function Nk(t){t.visibleWrites=iT(t.allWrites,Pk,ot()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pk(t){return t.visible}function iT(t,e,n){let r=ar.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)rr(n,o)?(a=zn(n,o),r=Ua(r,a,i.snap)):rr(o,n)&&(a=zn(o,n),r=Ua(r,ot(),i.snap.getChild(a)));else if(i.children){if(rr(n,o))a=zn(n,o),r=Uy(r,a,i.children);else if(rr(o,n))if(a=zn(o,n),He(a))r=Uy(r,ot(),i.children);else{const l=_o(i.children,ze(a));if(l){const c=l.getChild(pt(a));r=Ua(r,ot(),c)}}}else throw $o("WriteRecord should have .snap or .children")}}return r}function oT(t,e,n,r,s){if(!r&&!s){const i=Pi(t.visibleWrites,e);if(i!=null)return i;{const o=As(t.visibleWrites,e);if(np(o))return n;if(n==null&&!tp(o,ot()))return null;{const a=n||tt.EMPTY_NODE;return bo(o,a)}}}else{const i=As(t.visibleWrites,e);if(!s&&np(i))return n;if(!s&&n==null&&!tp(i,ot()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(rr(c.path,e)||rr(e,c.path))},a=iT(t.allWrites,o,e),l=n||tt.EMPTY_NODE;return bo(a,l)}}}function Dk(t,e,n){let r=tt.EMPTY_NODE;const s=Pi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(hn,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=As(t.visibleWrites,e);return n.forEachChild(hn,(o,a)=>{const l=bo(As(i,new mt(o)),a);r=r.updateImmediateChild(o,l)}),jy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=As(t.visibleWrites,e);return jy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function kk(t,e,n,r,s){ee(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Wt(e,n);if(tp(t.visibleWrites,i))return null;{const o=As(t.visibleWrites,i);return np(o)?s.getChild(n):bo(o,s.getChild(n))}}function Mk(t,e,n,r){const s=Wt(e,n),i=Pi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=As(t.visibleWrites,s);return bo(o,r.getNode().getImmediateChild(n))}else return null}function Lk(t,e){return Pi(t.visibleWrites,e)}function Fk(t,e,n,r,s,i,o){let a;const l=As(t.visibleWrites,e),c=Pi(l,ot());if(c!=null)a=c;else if(n!=null)a=bo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Uk(){return{visibleWrites:ar.empty(),allWrites:[],lastWriteId:-1}}function rp(t,e,n,r){return oT(t.writeTree,t.treePath,e,n,r)}function aT(t,e){return Dk(t.writeTree,t.treePath,e)}function By(t,e,n,r){return kk(t.writeTree,t.treePath,e,n,r)}function Mu(t,e){return Lk(t.writeTree,Wt(t.treePath,e))}function $k(t,e,n,r,s,i){return Fk(t.writeTree,t.treePath,e,n,r,s,i)}function Vg(t,e,n){return Mk(t.writeTree,t.treePath,e,n)}function lT(t,e){return cT(Wt(t.treePath,e),t.writeTree)}function cT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class jk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ee(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ky(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,gk(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,pk(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ky(r,e.snapshotNode,s.oldSnap));else throw $o("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Bk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uT=new Bk;class Hg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Si(this.viewCache_),i=$k(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function Vk(t,e){ee(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Hk(t,e,n,r,s){const i=new jk;let o,a;if(n.type===mr.OVERWRITE){const c=n;c.source.fromUser?o=sp(t,e,c.path,c.snap,r,s,i):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!He(c.path),o=Lu(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===mr.MERGE){const c=n;c.source.fromUser?o=Wk(t,e,c.path,c.children,r,s,i):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ip(t,e,c.path,c.children,r,s,a,i))}else if(n.type===mr.ACK_USER_WRITE){const c=n;c.revert?o=Yk(t,e,c.path,r,s,i):o=Gk(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===mr.LISTEN_COMPLETE)o=zk(t,e,n.path,r,i);else throw $o("Unknown operation type: "+n.type);const l=i.getChanges();return Kk(e,o,l),{viewCache:o,changes:l}}function Kk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ep(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(dk(ep(e)))}}function hT(t,e,n,r,s,i){const o=e.eventCache;if(Mu(r,n)!=null)return e;{let a,l;if(He(n))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Si(e),u=c instanceof tt?c:tt.EMPTY_NODE,h=aT(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=rp(r,Si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ze(n);if(c===".priority"){ee(ks(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=By(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=pt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=By(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Vg(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return Fa(e,a,o.isFullyInitialized()||He(n),t.filter.filtersNodes())}}function Lu(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(He(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ze(n);if(!l.isCompleteForPath(n)&&ks(n)>1)return e;const p=pt(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,uT,null)}const h=nT(e,c,l.isFullyInitialized()||He(n),u.filtersNodes()),f=new Hg(s,h,i);return hT(t,h,n,s,f,a)}function sp(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Hg(s,e,i);if(He(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fa(e,c,!0,t.filter.filtersNodes());else{const h=ze(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Fa(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=pt(n),d=a.getNode().getImmediateChild(h);let p;if(He(f))p=r;else{const m=u.getCompleteChild(h);m!=null?Bb(f)===".priority"&&m.getChild(Hb(f)).isEmpty()?p=m:p=m.updateChild(f,r):p=tt.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Fa(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Vy(t,e){return t.eventCache.isCompleteForChild(e)}function Wk(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Wt(n,l);Vy(e,ze(u))&&(a=sp(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Wt(n,l);Vy(e,ze(u))||(a=sp(t,a,u,c,s,i,o))}),a}function Hy(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ip(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;He(n)?c=r:c=new dt(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Hy(t,d,f);l=Lu(t,l,new mt(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=Hy(t,p,f);l=Lu(t,l,new mt(h),m,s,i,o,a)}}),l}function Gk(t,e,n,r,s,i,o){if(Mu(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(He(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Lu(t,e,n,l.getNode().getChild(n),s,i,a,o);if(He(n)){let c=new dt(null);return l.getNode().forEachChild(co,(u,h)=>{c=c.set(new mt(u),h)}),ip(t,e,n,c,s,i,a,o)}else return e}else{let c=new dt(null);return r.foreach((u,h)=>{const f=Wt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ip(t,e,n,c,s,i,a,o)}}function zk(t,e,n,r,s){const i=e.serverCache,o=nT(e,i.getNode(),i.isFullyInitialized()||He(n),i.isFiltered());return hT(t,o,n,r,uT,s)}function Yk(t,e,n,r,s,i){let o;if(Mu(r,n)!=null)return e;{const a=new Hg(r,e,s),l=e.eventCache.getNode();let c;if(He(n)||ze(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=rp(r,Si(e));else{const h=e.serverCache.getNode();ee(h instanceof tt,"serverChildren would be complete if leaf node"),u=aT(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ze(n);let h=Vg(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,pt(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,tt.EMPTY_NODE,pt(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rp(r,Si(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Mu(r,ot())!=null,Fa(e,c,o,t.filter.filtersNodes())}}function Xk(t,e){const n=Si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!He(e)&&!n.getImmediateChild(ze(e)).isEmpty())?n.getChild(e):null}function Ky(t,e,n,r){e.type===mr.MERGE&&e.source.queryId!==null&&(ee(Si(t.viewCache_),"We should always have a full cache before handling merges"),ee(ep(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=Hk(t.processor_,s,e,n,r);return Vk(t.processor_,i.viewCache),ee(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Qk(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Qk(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Tk(t.eventGenerator_,e,n,s)}/**
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
 */let Wy;function qk(t){ee(!Wy,"__referenceConstructor has already been defined"),Wy=t}function Kg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return ee(i!=null,"SyncTree gave us an op for an invalid query."),Ky(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Ky(o,e,n,r));return i}}function Wg(t,e){let n=null;for(const r of t.views.values())n=n||Xk(r,e);return n}/**
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
 */let Gy;function Jk(t){ee(!Gy,"__referenceConstructor has already been defined"),Gy=t}class zy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new dt(null),this.pendingWriteTree_=Uk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zk(t,e,n,r,s){return Ak(t.pendingWriteTree_,e,n,r,s),s?Fh(t,new Ti(Jb(),e,n)):[]}function qi(t,e,n=!1){const r=Rk(t.pendingWriteTree_,e);if(xk(t.pendingWriteTree_,e)){let i=new dt(null);return r.snap!=null?i=i.set(ot(),!0):Yn(r.children,o=>{i=i.set(new mt(o),!0)}),Fh(t,new ku(r.path,i,n))}else return[]}function Lh(t,e,n){return Fh(t,new Ti(Zb(),e,n))}function eM(t,e,n){const r=dt.fromObject(n);return Fh(t,new fl(Zb(),e,r))}function tM(t,e,n,r){const s=gT(t,r);if(s!=null){const i=mT(s),o=i.path,a=i.queryId,l=zn(o,e),c=new Ti(eT(a),l,n);return vT(t,o,c)}else return[]}function nM(t,e,n,r){const s=gT(t,r);if(s){const i=mT(s),o=i.path,a=i.queryId,l=zn(o,e),c=dt.fromObject(n),u=new fl(eT(a),l,c);return vT(t,o,u)}else return[]}function fT(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=zn(o,e),c=Wg(a,l);if(c)return c});return oT(s,e,i,n,!0)}function Fh(t,e){return dT(e,t.syncPointTree_,null,sT(t.pendingWriteTree_,ot()))}function dT(t,e,n,r){if(He(t.path))return pT(t,e,n,r);{const s=e.get(ot());n==null&&s!=null&&(n=Wg(s,ot()));let i=[];const o=ze(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=lT(r,o);i=i.concat(dT(a,l,c,u))}return s&&(i=i.concat(Kg(s,t,r,n))),i}}function pT(t,e,n,r){const s=e.get(ot());n==null&&s!=null&&(n=Wg(s,ot()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=lT(r,o),u=t.operationForChild(o);u&&(i=i.concat(pT(u,a,l,c)))}),s&&(i=i.concat(Kg(s,t,r,n))),i}function gT(t,e){return t.tagToQueryMap.get(e)}function mT(t){const e=t.indexOf("$");return ee(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new mt(t.substr(0,e))}}function vT(t,e,n){const r=t.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const s=sT(t.pendingWriteTree_,e);return Kg(r,n,s,null)}/**
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
 */class Gg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gg(n)}node(){return this.node_}}class zg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Wt(this.path_,e);return new zg(this.syncTree_,n)}node(){return fT(this.syncTree_,this.path_)}}const rM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yy=function(t,e,n){if(!t||typeof t!="object")return t;if(ee(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return sM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iM(t[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},sM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ee(!1,"Unexpected server value: "+t)}},iM=function(t,e,n){t.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const s=e.node();if(ee(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},oM=function(t,e,n,r){return Yg(e,new zg(n,t),r)},aM=function(t,e,n){return Yg(t,new Gg(e),n)};function Yg(t,e,n){const r=t.getPriority().val(),s=Yy(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Yy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Vt(a,on(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Vt(s))),o.forEachChild(hn,(a,l)=>{const c=Yg(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Xg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qg(t,e){let n=e instanceof mt?e:new mt(e),r=t,s=ze(n);for(;s!==null;){const i=_o(r.node.children,s)||{children:{},childCount:0};r=new Xg(s,r,i),n=pt(n),s=ze(n)}return r}function zo(t){return t.node.value}function yT(t,e){t.node.value=e,op(t)}function ET(t){return t.node.childCount>0}function lM(t){return zo(t)===void 0&&!ET(t)}function Uh(t,e){Yn(t.node.children,(n,r)=>{e(new Xg(n,t,r))})}function _T(t,e,n,r){n&&!r&&e(t),Uh(t,s=>{_T(s,e,!0,r)}),n&&r&&e(t)}function cM(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function jl(t){return new mt(t.parent===null?t.name:jl(t.parent)+"/"+t.name)}function op(t){t.parent!==null&&uM(t.parent,t.name,t)}function uM(t,e,n){const r=lM(n),s=ss(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,op(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,op(t))}/**
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
 */const hM=/[\[\].#$\/\u0000-\u001F\u007F]/,fM=/[\[\].#$\u0000-\u001F\u007F]/,Bf=10*1024*1024,wT=function(t){return typeof t=="string"&&t.length!==0&&!hM.test(t)},dM=function(t){return typeof t=="string"&&t.length!==0&&!fM.test(t)},pM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dM(t)},bT=function(t,e,n){const r=n instanceof mt?new zD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qs(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qs(r)+" with contents = "+e.toString());if(wb(e))throw new Error(t+"contains "+e.toString()+" "+Qs(r));if(typeof e=="string"&&e.length>Bf/3&&Nh(e)>Bf)throw new Error(t+"contains a string greater than "+Bf+" utf8 bytes "+Qs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Yn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!wT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YD(r,o),bT(t,a,r),XD(r)}),s&&i)throw new Error(t+' contains ".value" child '+Qs(r)+" in addition to actual children.")}},gM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pM(n))throw new Error(gx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class mM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vM(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Kb(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Di(t,e,n){vM(t,n),yM(t,r=>rr(r,e)||rr(e,r))}function yM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(EM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function EM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ui&&sn("event: "+n.toString()),Ul(r)}}}/**
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
 */const _M="repo_interrupt",wM=25;class bM{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Du(),this.transactionQueueTree_=new Xg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TM(t,e,n){if(t.stats_=Lg(t.repoInfo_),t.forceRestClient_||vD())t.server_=new Pu(t.repoInfo_,(r,s,i,o)=>{Xy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Jt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zr(t.repoInfo_,e,(r,s,i,o)=>{Xy(t,r,s,i,o)},r=>{Qy(t,r)},r=>{IM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=TD(t.repoInfo_,()=>new bk(t.stats_,t.server_)),t.infoData_=new vk,t.infoSyncTree_=new zy({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Lh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),qg(t,"connected",!1),t.serverSyncTree_=new zy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Di(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function SM(t){const n=t.infoData_.getNode(new mt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function TT(t){return rM({timestamp:SM(t)})}function Xy(t,e,n,r,s){t.dataUpdateCount++;const i=new mt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Eu(n,c=>on(c));o=nM(t.serverSyncTree_,i,l,s)}else{const l=on(n);o=tM(t.serverSyncTree_,i,l,s)}else if(r){const l=Eu(n,c=>on(c));o=eM(t.serverSyncTree_,i,l)}else{const l=on(n);o=Lh(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Zg(t,i)),Di(t.eventQueue_,a,o)}function Qy(t,e){qg(t,"connected",e),e===!1&&AM(t)}function IM(t,e){Yn(e,(n,r)=>{qg(t,n,r)})}function qg(t,e,n){const r=new mt("/.info/"+e),s=on(n);t.infoData_.updateSnapshot(r,s);const i=Lh(t.infoSyncTree_,r,s);Di(t.eventQueue_,r,i)}function CM(t){return t.nextWriteId_++}function AM(t){ST(t,"onDisconnectEvents");const e=TT(t),n=Du();Zd(t.onDisconnect_,ot(),(s,i)=>{const o=oM(s,i,t.serverSyncTree_,e);qb(n,s,o)});let r=[];Zd(n,ot(),(s,i)=>{r=r.concat(Lh(t.serverSyncTree_,s,i));const o=NM(t,s);Zg(t,o)}),t.onDisconnect_=Du(),Di(t.eventQueue_,ot(),r)}function RM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_M)}function ST(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),sn(n,...e)}function IT(t,e,n){return fT(t.serverSyncTree_,e,n)||tt.EMPTY_NODE}function Jg(t,e=t.transactionQueueTree_){if(e||$h(t,e),zo(e)){const n=AT(t,e);ee(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&xM(t,jl(e),n)}else ET(e)&&Uh(e,n=>{Jg(t,n)})}function xM(t,e,n){const r=n.map(c=>c.currentWriteId),s=IT(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];ee(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=zn(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ST(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(qi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();$h(t,Qg(t.transactionQueueTree_,e)),Jg(t,t.transactionQueueTree_),Di(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ul(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{jn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zg(t,e)}},o)}function Zg(t,e){const n=CT(t,e),r=jl(n),s=AT(t,n);return OM(t,s,r),r}function OM(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=zn(n,l.path);let u=!1,h;if(ee(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wM)u=!0,h="maxretry",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=IT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){bT("transaction failed: Data returned ",d,l.path);let p=on(d);typeof d=="object"&&d!=null&&ss(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,v=TT(t),g=aM(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=CM(t),o.splice(o.indexOf(y),1),s=s.concat(Zk(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(qi(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0))}Di(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}$h(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ul(r[a]);Jg(t,t.transactionQueueTree_)}function CT(t,e){let n,r=t.transactionQueueTree_;for(n=ze(e);n!==null&&zo(r)===void 0;)r=Qg(r,n),e=pt(e),n=ze(e);return r}function AT(t,e){const n=[];return RT(t,e,n),n.sort((r,s)=>r.order-s.order),n}function RT(t,e,n){const r=zo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Uh(e,s=>{RT(t,s,n)})}function $h(t,e){const n=zo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,yT(e,n.length>0?n:void 0)}Uh(e,r=>{$h(t,r)})}function NM(t,e){const n=jl(CT(t,e)),r=Qg(t.transactionQueueTree_,e);return cM(r,s=>{Vf(t,s)}),Vf(t,r),_T(r,s=>{Vf(t,s)}),n}function Vf(t,e){const n=zo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ee(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(ee(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(qi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?yT(e,void 0):n.length=i+1,Di(t.eventQueue_,jl(e),s);for(let o=0;o<r.length;o++)Ul(r[o])}}/**
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
 */function PM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function DM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):jn(`Invalid query segment '${n}' in query '${t}'`)}return e}const qy=function(t,e){const n=kM(t),r=n.namespace;n.domain==="firebase.com"&&wi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||cD();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _D(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new mt(n.pathString)}},kM=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=PM(t.substring(u,h)));const f=DM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class em{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return He(this._path)?null:Bb(this._path)}get ref(){return new Yo(this._repo,this._path)}get _queryIdentifier(){const e=Ly(this._queryParams),n=kg(e);return n==="{}"?"default":n}get _queryObject(){return Ly(this._queryParams)}isEqual(e){if(e=bn(e),!(e instanceof em))return!1;const n=this._repo===e._repo,r=Kb(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+GD(this._path)}}class Yo extends em{constructor(e,n){super(e,n,new jg,!1)}get parent(){const e=Hb(this._path);return e===null?null:new Yo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}qk(Yo);Jk(Yo);/**
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
 */const MM="FIREBASE_DATABASE_EMULATOR_HOST",ap={};let LM=!1;function FM(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||wi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sn("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qy(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[MM]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=qy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Qd(Qd.OWNER):new ED(t.name,t.options,e);gM("Invalid Firebase Database URL",o),He(o.path)||wi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$M(a,t,u,new yD(t.name,n));return new jM(h,t)}function UM(t,e){const n=ap[e];(!n||n[t.key]!==t)&&wi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RM(t),delete n[t.key]}function $M(t,e,n,r){let s=ap[e.name];s||(s={},ap[e.name]=s);let i=s[t.toURLString()];return i&&wi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new bM(t,LM,n,r),s[t.toURLString()]=i,i}class jM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yo(this._repo,ot())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function BM(t){sD(Bs),Ir(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return FM(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),$n(yy,Ey,t),$n(yy,Ey,"esm2017")}zr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};BM();var VM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,tm=tm||{},xe=VM||self;function Fu(){}function jh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HM(t){return Object.prototype.hasOwnProperty.call(t,Hf)&&t[Hf]||(t[Hf]=++KM)}var Hf="closure_uid_"+(1e9*Math.random()>>>0),KM=0;function WM(t,e,n){return t.call.apply(t.bind,arguments)}function GM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dn=WM:dn=GM,dn.apply(null,arguments)}function Ac(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function zt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Vs(){this.s=this.s,this.o=this.o}var zM=0;Vs.prototype.s=!1;Vs.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),zM!=0)&&HM(this)};Vs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jh(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function pn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pn.prototype.h=function(){this.defaultPrevented=!0};var YM=function(){if(!xe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{xe.addEventListener("test",Fu,e),xe.removeEventListener("test",Fu,e)}catch{}return t}();function Uu(t){return/^[\s\xa0]*$/.test(t)}var Zy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kf(t,e){return t<e?-1:t>e?1:0}function Bh(){var t=xe.navigator;return t&&(t=t.userAgent)?t:""}function gr(t){return Bh().indexOf(t)!=-1}function rm(t){return rm[" "](t),t}rm[" "]=Fu;function OT(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var XM=gr("Opera"),To=gr("Trident")||gr("MSIE"),NT=gr("Edge"),lp=NT||To,PT=gr("Gecko")&&!(Bh().toLowerCase().indexOf("webkit")!=-1&&!gr("Edge"))&&!(gr("Trident")||gr("MSIE"))&&!gr("Edge"),QM=Bh().toLowerCase().indexOf("webkit")!=-1&&!gr("Edge");function DT(){var t=xe.document;return t?t.documentMode:void 0}var $u;e:{var Wf="",Gf=function(){var t=Bh();if(PT)return/rv:([^\);]+)(\)|;)/.exec(t);if(NT)return/Edge\/([\d\.]+)/.exec(t);if(To)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QM)return/WebKit\/(\S+)/.exec(t);if(XM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gf&&(Wf=Gf?Gf[1]:""),To){var zf=DT();if(zf!=null&&zf>parseFloat(Wf)){$u=String(zf);break e}}$u=Wf}var qM={};function JM(){return OT(qM,9,function(){let t=0;const e=Zy(String($u)).split("."),n=Zy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Kf(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Kf(s[2].length==0,i[2].length==0)||Kf(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var cp;if(xe.document&&To){var eE=DT();cp=eE||parseInt($u,10)||void 0}else cp=void 0;var ZM=cp;function dl(t,e){if(pn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(PT){e:{try{rm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dl.$.h.call(this)}}zt(dl,pn);var eL={2:"touch",3:"pen",4:"mouse"};dl.prototype.h=function(){dl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),tL=0;function nL(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++tL,this.fa=this.ia=!1}function Vh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kT(t){const e={};for(const n in t)e[n]=t[n];return e}const tE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function MT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<tE.length;i++)n=tE[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hh(t){this.src=t,this.g={},this.h=0}Hh.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hp(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new nL(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function up(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=xT(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Vh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var im="closure_lm_"+(1e6*Math.random()|0),Yf={};function LT(t,e,n,r,s){if(r&&r.once)return UT(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)LT(t,e[i],n,r,s);return null}return n=lm(n),t&&t[Vl]?t.O(e,n,Bl(r)?!!r.capture:!!r,s):FT(t,e,n,!1,r,s)}function FT(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Bl(s)?!!s.capture:!!s,a=am(t);if(a||(t[im]=a=new Hh(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=rL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YM||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rL(){function t(n){return e.call(t.src,t.listener,n)}const e=sL;return t}function UT(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)UT(t,e[i],n,r,s);return null}return n=lm(n),t&&t[Vl]?t.P(e,n,Bl(r)?!!r.capture:!!r,s):FT(t,e,n,!0,r,s)}function $T(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)$T(t,e[i],n,r,s);else r=Bl(r)?!!r.capture:!!r,n=lm(n),t&&t[Vl]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hp(i,n,r,s),-1<n&&(Vh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=am(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,s)),(n=-1<t?e[t]:null)&&om(n))}function om(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vl])up(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=am(e))?(up(n,t),n.h==0&&(n.src=null,e[im]=null)):Vh(t)}}}function jT(t){return t in Yf?Yf[t]:Yf[t]="on"+t}function sL(t,e){if(t.fa)t=!0;else{e=new dl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&om(t),t=n.call(r,e)}return t}function am(t){return t=t[im],t instanceof Hh?t:null}var Xf="__closure_events_fn_"+(1e9*Math.random()>>>0);function lm(t){return typeof t=="function"?t:(t[Xf]||(t[Xf]=function(e){return t.handleEvent(e)}),t[Xf])}function Gt(){Vs.call(this),this.i=new Hh(this),this.S=this,this.J=null}zt(Gt,Vs);Gt.prototype[Vl]=!0;Gt.prototype.removeEventListener=function(t,e,n,r){$T(this,t,e,n,r)};function en(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new pn(e,t);else if(e instanceof pn)e.target=e.target||t;else{var s=e;e=new pn(r,t),MT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Rc(o,r,!0,e)&&s}if(o=e.g=t,s=Rc(o,r,!0,e)&&s,s=Rc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Rc(o,r,!1,e)&&s}Gt.prototype.N=function(){if(Gt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vh(n[r]);delete t.g[e],t.h--}}this.J=null};Gt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Gt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Rc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&up(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var cm=xe.JSON.stringify;function iL(){var t=HT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oL{constructor(){this.h=this.g=null}add(e,n){const r=BT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var BT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aL,t=>t.reset());class aL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lL(t){xe.setTimeout(()=>{throw t},0)}function VT(t,e){fp||cL(),dp||(fp(),dp=!0),HT.add(t,e)}var fp;function cL(){var t=xe.Promise.resolve(void 0);fp=function(){t.then(uL)}}var dp=!1,HT=new oL;function uL(){for(var t;t=iL();){try{t.h.call(t.g)}catch(n){lL(n)}var e=BT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dp=!1}function Kh(t,e){Gt.call(this),this.h=t||1,this.g=e||xe,this.j=dn(this.qb,this),this.l=Date.now()}zt(Kh,Gt);te=Kh.prototype;te.ga=!1;te.T=null;te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),en(this,"tick"),this.ga&&(um(this),this.start()))}};te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function um(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}te.N=function(){Kh.$.N.call(this),um(this),delete this.g};function hm(t,e,n){if(typeof t=="function")n&&(t=dn(t,n));else if(t&&typeof t.handleEvent=="function")t=dn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:xe.setTimeout(t,e||0)}function KT(t){t.g=hm(()=>{t.g=null,t.i&&(t.i=!1,KT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hL extends Vs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KT(this)}N(){super.N(),this.g&&(xe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pl(t){Vs.call(this),this.h=t,this.g={}}zt(pl,Vs);var nE=[];function WT(t,e,n,r){Array.isArray(n)||(n&&(nE[0]=n.toString()),n=nE);for(var s=0;s<n.length;s++){var i=LT(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function GT(t){sm(t.g,function(e,n){this.g.hasOwnProperty(n)&&om(e)},t),t.g={}}pl.prototype.N=function(){pl.$.N.call(this),GT(this)};pl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wh(){this.g=!0}Wh.prototype.Ea=function(){this.g=!1};function fL(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function dL(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ji(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gL(t,n)+(r?" "+r:"")})}function pL(t,e){t.info(function(){return"TIMEOUT: "+e})}Wh.prototype.info=function(){};function gL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cm(n)}catch{return e}}var ki={},rE=null;function Gh(){return rE=rE||new Gt}ki.Ta="serverreachability";function zT(t){pn.call(this,ki.Ta,t)}zt(zT,pn);function gl(t){const e=Gh();en(e,new zT(e))}ki.STAT_EVENT="statevent";function YT(t,e){pn.call(this,ki.STAT_EVENT,t),this.stat=e}zt(YT,pn);function _n(t){const e=Gh();en(e,new YT(e,t))}ki.Ua="timingevent";function XT(t,e){pn.call(this,ki.Ua,t),this.size=e}zt(XT,pn);function Hl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return xe.setTimeout(function(){t()},e)}var zh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},QT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fm(){}fm.prototype.h=null;function sE(t){return t.h||(t.h=t.i())}function qT(){}var Kl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dm(){pn.call(this,"d")}zt(dm,pn);function pm(){pn.call(this,"c")}zt(pm,pn);var pp;function Yh(){}zt(Yh,fm);Yh.prototype.g=function(){return new XMLHttpRequest};Yh.prototype.i=function(){return{}};pp=new Yh;function Wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pl(this),this.P=mL,t=lp?125:void 0,this.V=new Kh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new JT}function JT(){this.i=null,this.g="",this.h=!1}var mL=45e3,gp={},ju={};te=Wl.prototype;te.setTimeout=function(t){this.P=t};function mp(t,e,n){t.L=1,t.v=Qh(Zr(e)),t.s=n,t.S=!0,ZT(t,null)}function ZT(t,e){t.G=Date.now(),Gl(t),t.A=Zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),aS(n.i,"t",r),t.C=0,n=t.l.I,t.h=new JT,t.g=RS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new hL(dn(t.Pa,t,t.g),t.O)),WT(t.U,t.g,"readystatechange",t.nb),e=t.I?kT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gl(),fL(t.j,t.u,t.A,t.m,t.W,t.s)}te.nb=function(t){t=t.target;const e=this.M;e&&Vr(t)==3?e.l():this.Pa(t)};te.Pa=function(t){try{if(t==this.g)e:{const u=Vr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||lp||this.g&&(this.h.h||this.g.ja()||lE(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gl(3):gl(2)),Xh(this);var n=this.g.da();this.aa=n;t:if(eS(this)){var r=lE(this.g);t="";var s=r.length,i=Vr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),$a(this);var o="";break t}this.h.i=new xe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uu(a)){var c=a;break t}}c=null}if(n=c)Ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vp(this,n);else{this.i=!1,this.o=3,_n(12),ni(this),$a(this);break e}}this.S?(tS(this,u,o),lp&&this.i&&u==3&&(WT(this.U,this.V,"tick",this.mb),this.V.start())):(Ji(this.j,this.m,o,null),vp(this,o)),u==4&&ni(this),this.i&&!this.J&&(u==4?SS(this.l,this):(this.i=!1,Gl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_n(12)):(this.o=0,_n(13)),ni(this),$a(this)}}}catch{}finally{}};function eS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function tS(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=vL(t,n),s==ju){e==4&&(t.o=4,_n(14),r=!1),Ji(t.j,t.m,null,"[Incomplete Response]");break}else if(s==gp){t.o=4,_n(15),Ji(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ji(t.j,t.m,s,null),vp(t,s);eS(t)&&s!=ju&&s!=gp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_n(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wm(e),e.L=!0,_n(11))):(Ji(t.j,t.m,n,"[Invalid Chunked Response]"),ni(t),$a(t))}te.mb=function(){if(this.g){var t=Vr(this.g),e=this.g.ja();this.C<e.length&&(Xh(this),tS(this,t,e),this.i&&t!=4&&Gl(this))}};function vL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ju:(n=Number(e.substring(n,r)),isNaN(n)?gp:(r+=1,r+n>e.length?ju:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.J=!0,ni(this)};function Gl(t){t.Y=Date.now()+t.P,nS(t,t.P)}function nS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hl(dn(t.lb,t),e)}function Xh(t){t.B&&(xe.clearTimeout(t.B),t.B=null)}te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pL(this.j,this.A),this.L!=2&&(gl(),_n(17)),ni(this),this.o=2,$a(this)):nS(this,this.Y-t)};function $a(t){t.l.H==0||t.J||SS(t.l,t)}function ni(t){Xh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,um(t.V),GT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function vp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yp(n.h,t))){if(!t.K&&yp(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hu(n),Zh(n);else break e;_m(n),_n(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Hl(dn(n.ib,n),6e3));if(1>=uS(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ri(n,11)}else if((t.K||n.g==t)&&Hu(n),!Uu(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(gm(i,i.h),i.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,_t(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=AS(r,r.I?r.oa:null,r.Y),o.K){hS(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Xh(a),Gl(a)),r.g=o}else bS(r);0<n.i.length&&ef(n)}else c[0]!="stop"&&c[0]!="close"||ri(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ri(n,7):Em(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}gl(4)}catch{}}function yL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function EL(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=EL(t),r=yL(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var sS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _L(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hi){this.h=e!==void 0?e:t.h,Bu(this,t.j),this.s=t.s,this.g=t.g,Vu(this,t.m),this.l=t.l,e=t.i;var n=new ml;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),iE(this,n),this.o=t.o}else t&&(n=String(t).match(sS))?(this.h=!!e,Bu(this,n[1]||"",!0),this.s=_a(n[2]||""),this.g=_a(n[3]||"",!0),Vu(this,n[4]),this.l=_a(n[5]||"",!0),iE(this,n[6]||"",!0),this.o=_a(n[7]||"")):(this.h=!!e,this.i=new ml(null,this.h))}hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wa(e,oE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wa(e,oE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wa(n,n.charAt(0)=="/"?TL:bL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wa(n,IL)),t.join("")};function Zr(t){return new hi(t)}function Bu(t,e,n){t.j=n?_a(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function iE(t,e,n){e instanceof ml?(t.i=e,CL(t.i,t.h)):(n||(e=wa(e,SL)),t.i=new ml(e,t.h))}function _t(t,e,n){t.i.set(e,n)}function Qh(t){return _t(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _a(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oE=/[#\/\?@]/g,bL=/[#\?:]/g,TL=/[#\?]/g,SL=/[#\?@]/g,IL=/#/g;function ml(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hs(t){t.g||(t.g=new Map,t.h=0,t.i&&_L(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=ml.prototype;te.add=function(t,e){Hs(this),this.i=null,t=Xo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iS(t,e){Hs(t),e=Xo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function oS(t,e){return Hs(t),e=Xo(t,e),t.g.has(e)}te.forEach=function(t,e){Hs(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};te.sa=function(){Hs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};te.Z=function(t){Hs(this);let e=[];if(typeof t=="string")oS(this,t)&&(e=e.concat(this.g.get(Xo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return Hs(this),this.i=null,t=Xo(this,t),oS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function aS(t,e,n){iS(t,e),0<n.length&&(t.i=null,t.g.set(Xo(t,e),nm(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Xo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CL(t,e){e&&!t.j&&(Hs(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(iS(this,r),aS(this,s,n))},t)),t.j=e}var AL=class{constructor(t,e){this.h=t,this.g=e}};function lS(t){this.l=t||RL,xe.PerformanceNavigationTiming?(t=xe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(xe.g&&xe.g.Ka&&xe.g.Ka()&&xe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RL=10;function cS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uS(t){return t.h?1:t.g?t.g.size:0}function yp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gm(t,e){t.g?t.g.add(e):t.h=e}function hS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lS.prototype.cancel=function(){if(this.i=fS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nm(t.i)}function mm(){}mm.prototype.stringify=function(t){return xe.JSON.stringify(t,void 0)};mm.prototype.parse=function(t){return xe.JSON.parse(t,void 0)};function xL(){this.g=new mm}function OL(t,e,n){const r=n||"";try{rS(t,function(s,i){let o=s;Bl(s)&&(o=cm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function NL(t,e){const n=new Wh;if(xe.Image){const r=new Image;r.onload=Ac(xc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ac(xc,n,r,"TestLoadImage: error",!1,e),r.onabort=Ac(xc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ac(xc,n,r,"TestLoadImage: timeout",!1,e),xe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zl(t){this.l=t.fc||null,this.j=t.ob||!1}zt(zl,fm);zl.prototype.g=function(){return new qh(this.l,this.j)};zl.prototype.i=function(t){return function(){return t}}({});function qh(t,e){Gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zt(qh,Gt);var vm=0;te=qh.prototype;te.open=function(t,e){if(this.readyState!=vm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vl(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||xe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yl(this)),this.readyState=vm};te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vl(this)),this.g&&(this.readyState=3,vl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof xe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yl(this):vl(this),this.readyState==3&&dS(this)}};te.Za=function(t){this.g&&(this.response=this.responseText=t,Yl(this))};te.Ya=function(t){this.g&&(this.response=t,Yl(this))};te.ka=function(){this.g&&Yl(this)};function Yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vl(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PL=xe.JSON.parse;function kt(t){Gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pS,this.L=this.M=!1}zt(kt,Gt);var pS="",DL=/^https?$/i,kL=["POST","PUT"];te=kt.prototype;te.Oa=function(t){this.M=t};te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pp.g(),this.C=this.u?sE(this.u):sE(pp),this.g.onreadystatechange=dn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){aE(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=xe.FormData&&t instanceof xe.FormData,!(0<=xT(kL,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vS(this),0<this.B&&((this.L=ML(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dn(this.ua,this)):this.A=hm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){aE(this,i)}};function ML(t){return To&&JM()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.ua=function(){typeof tm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,en(this,"timeout"),this.abort(8))};function aE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gS(t),Jh(t)}function gS(t){t.F||(t.F=!0,en(t,"complete"),en(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,en(this,"complete"),en(this,"abort"),Jh(this))};te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jh(this,!0)),kt.$.N.call(this)};te.La=function(){this.s||(this.G||this.v||this.l?mS(this):this.kb())};te.kb=function(){mS(this)};function mS(t){if(t.h&&typeof tm<"u"&&(!t.C[1]||Vr(t)!=4||t.da()!=2)){if(t.v&&Vr(t)==4)hm(t.La,0,t);else if(en(t,"readystatechange"),Vr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(sS)[1]||null;if(!s&&xe.self&&xe.self.location){var i=xe.self.location.protocol;s=i.substr(0,i.length-1)}r=!DL.test(s?s.toLowerCase():"")}n=r}if(n)en(t,"complete"),en(t,"success");else{t.m=6;try{var o=2<Vr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",gS(t)}}finally{Jh(t)}}}}function Jh(t,e){if(t.g){vS(t);const n=t.g,r=t.C[0]?Fu:null;t.g=null,t.C=null,e||en(t,"ready");try{n.onreadystatechange=r}catch{}}}function vS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(xe.clearTimeout(t.A),t.A=null)}function Vr(t){return t.g?t.g.readyState:0}te.da=function(){try{return 2<Vr(this)?this.g.status:-1}catch{return-1}};te.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PL(e)}};function lE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ia=function(){return this.m};te.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yS(t){let e="";return sm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ym(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_t(t,e,n))}function la(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ES(t){this.Ga=0,this.i=[],this.j=new Wh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=la("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=la("baseRetryDelayMs",5e3,t),this.hb=la("retryDelaySeedMs",1e4,t),this.eb=la("forwardChannelMaxRetries",2,t),this.xa=la("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new lS(t&&t.concurrentRequestLimit),this.Ja=new xL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}te=ES.prototype;te.qa=8;te.H=1;function Em(t){if(_S(t),t.H==3){var e=t.W++,n=Zr(t.G);_t(n,"SID",t.J),_t(n,"RID",e),_t(n,"TYPE","terminate"),Xl(t,n),e=new Wl(t,t.j,e,void 0),e.L=2,e.v=Qh(Zr(n)),n=!1,xe.navigator&&xe.navigator.sendBeacon&&(n=xe.navigator.sendBeacon(e.v.toString(),"")),!n&&xe.Image&&(new Image().src=e.v,n=!0),n||(e.g=RS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Gl(e)}CS(t)}function Zh(t){t.g&&(wm(t),t.g.cancel(),t.g=null)}function _S(t){Zh(t),t.u&&(xe.clearTimeout(t.u),t.u=null),Hu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&xe.clearTimeout(t.m),t.m=null)}function ef(t){cS(t.h)||t.m||(t.m=!0,VT(t.Na,t),t.C=0)}function LL(t,e){return uS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Hl(dn(t.Na,t,e),IS(t,t.C)),t.C++,!0)}te.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Wl(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=kT(i),MT(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wS(this,s,e),n=Zr(this.G),_t(n,"RID",t),_t(n,"CVER",22),this.F&&_t(n,"X-HTTP-Session-Id",this.F),Xl(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(yS(i)))+"&"+e:this.o&&ym(n,this.o,i)),gm(this.h,s),this.bb&&_t(n,"TYPE","init"),this.P?(_t(n,"$req",e),_t(n,"SID","null"),s.ba=!0,mp(s,n,null)):mp(s,n,e),this.H=2}}else this.H==3&&(t?cE(this,t):this.i.length==0||cS(this.h)||cE(this))};function cE(t,e){var n;e?n=e.m:n=t.W++;const r=Zr(t.G);_t(r,"SID",t.J),_t(r,"RID",n),_t(r,"AID",t.V),Xl(t,r),t.o&&t.s&&ym(r,t.o,t.s),n=new Wl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=wS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gm(t.h,n),mp(n,r,e)}function Xl(t,e){t.ma&&sm(t.ma,function(n,r){_t(e,r,n)}),t.l&&rS({},function(n,r){_t(e,r,n)})}function wS(t,e,n){n=Math.min(t.i.length,n);var r=t.l?dn(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{OL(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function bS(t){t.g||t.u||(t.ba=1,VT(t.Ma,t),t.A=0)}function _m(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Hl(dn(t.Ma,t),IS(t,t.A)),t.A++,!0)}te.Ma=function(){if(this.u=null,TS(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Hl(dn(this.jb,this),t)}};te.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,_n(10),Zh(this),TS(this))};function wm(t){t.B!=null&&(xe.clearTimeout(t.B),t.B=null)}function TS(t){t.g=new Wl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Zr(t.wa);_t(e,"RID","rpc"),_t(e,"SID",t.J),_t(e,"CI",t.M?"0":"1"),_t(e,"AID",t.V),_t(e,"TYPE","xmlhttp"),Xl(t,e),t.o&&t.s&&ym(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Qh(Zr(e)),n.s=null,n.S=!0,ZT(n,t)}te.ib=function(){this.v!=null&&(this.v=null,Zh(this),_m(this),_n(19))};function Hu(t){t.v!=null&&(xe.clearTimeout(t.v),t.v=null)}function SS(t,e){var n=null;if(t.g==e){Hu(t),wm(t),t.g=null;var r=2}else if(yp(t.h,e))n=e.F,hS(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Gh(),en(r,new XT(r,n)),ef(t)}else bS(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&LL(t,e)||r==2&&_m(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ri(t,5);break;case 4:ri(t,10);break;case 3:ri(t,6);break;default:ri(t,2)}}}function IS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ri(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=dn(t.pb,t);n||(n=new hi("//www.google.com/images/cleardot.gif"),xe.location&&xe.location.protocol=="http"||Bu(n,"https"),Qh(n)),NL(n.toString(),r)}else _n(2);t.H=0,t.l&&t.l.za(e),CS(t),_S(t)}te.pb=function(t){t?(this.j.info("Successfully pinged google.com"),_n(2)):(this.j.info("Failed to ping google.com"),_n(1))};function CS(t){if(t.H=0,t.pa=[],t.l){const e=fS(t.h);(e.length!=0||t.i.length!=0)&&(Jy(t.pa,e),Jy(t.pa,t.i),t.h.i.length=0,nm(t.i),t.i.length=0),t.l.ya()}}function AS(t,e,n){var r=n instanceof hi?Zr(n):new hi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Vu(r,r.m);else{var s=xe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hi(null,void 0);r&&Bu(i,r),e&&(i.g=e),s&&Vu(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&_t(r,n,e),_t(r,"VER",t.qa),Xl(t,r),r}function RS(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kt(new zl({ob:!0})):new kt(t.va),e.Oa(t.I),e}function xS(){}te=xS.prototype;te.Ba=function(){};te.Aa=function(){};te.za=function(){};te.ya=function(){};te.Va=function(){};function Ku(){if(To&&!(10<=Number(ZM)))throw Error("Environmental error: no available transport.")}Ku.prototype.g=function(t,e){return new Bn(t,e)};function Bn(t,e){Gt.call(this),this.g=new ES(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qo(this)}zt(Bn,Gt);Bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;_n(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=AS(t,null,t.Y),ef(t)};Bn.prototype.close=function(){Em(this.g)};Bn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cm(t),t=n);e.i.push(new AL(e.fb++,t)),e.H==3&&ef(e)};Bn.prototype.N=function(){this.g.l=null,delete this.j,Em(this.g),delete this.g,Bn.$.N.call(this)};function OS(t){dm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}zt(OS,dm);function NS(){pm.call(this),this.status=1}zt(NS,pm);function Qo(t){this.g=t}zt(Qo,xS);Qo.prototype.Ba=function(){en(this.g,"a")};Qo.prototype.Aa=function(t){en(this.g,new OS(t))};Qo.prototype.za=function(t){en(this.g,new NS)};Qo.prototype.ya=function(){en(this.g,"b")};function FL(){this.blockSize=-1}function ur(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}zt(ur,FL);ur.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}ur.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Qf(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Qf(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Qf(this,r),s=0;break}}this.h=s,this.i+=e};ur.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function rt(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var UL={};function bm(t){return-128<=t&&128>t?OT(UL,t,function(e){return new rt([e|0],0>e?-1:0)}):new rt([t|0],0>t?-1:0)}function vr(t){if(isNaN(t)||!isFinite(t))return uo;if(0>t)return qt(vr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ep;return new rt(e,0)}function PS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qt(PS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vr(Math.pow(e,8)),r=uo,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=vr(Math.pow(e,i)),r=r.R(i).add(vr(o))):(r=r.R(n),r=r.add(vr(o)))}return r}var Ep=4294967296,uo=bm(0),_p=bm(1),uE=bm(16777216);te=rt.prototype;te.ea=function(){if(Wn(this))return-qt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ep+r)*e,e*=Ep}return t};te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Hr(this))return"0";if(Wn(this))return"-"+qt(this).toString(t);for(var e=vr(Math.pow(t,6)),n=this,r="";;){var s=Gu(n,e).g;n=Wu(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Hr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Hr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wn(t){return t.h==-1}te.X=function(t){return t=Wu(this,t),Wn(t)?-1:Hr(t)?0:1};function qt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new rt(n,~t.h).add(_p)}te.abs=function(){return Wn(this)?qt(this):this};te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new rt(n,n[n.length-1]&-2147483648?-1:0)};function Wu(t,e){return t.add(qt(e))}te.R=function(t){if(Hr(this)||Hr(t))return uo;if(Wn(this))return Wn(t)?qt(this).R(qt(t)):qt(qt(this).R(t));if(Wn(t))return qt(this.R(qt(t)));if(0>this.X(uE)&&0>t.X(uE))return vr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Oc(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Oc(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Oc(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Oc(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new rt(n,0)};function Oc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ca(t,e){this.g=t,this.h=e}function Gu(t,e){if(Hr(e))throw Error("division by zero");if(Hr(t))return new ca(uo,uo);if(Wn(t))return e=Gu(qt(t),e),new ca(qt(e.g),qt(e.h));if(Wn(e))return e=Gu(t,qt(e)),new ca(qt(e.g),e.h);if(30<t.g.length){if(Wn(t)||Wn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_p,r=e;0>=r.X(t);)n=hE(n),r=hE(r);var s=Ui(n,1),i=Ui(r,1);for(r=Ui(r,2),n=Ui(n,2);!Hr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ui(r,1),n=Ui(n,1)}return e=Wu(t,s.R(e)),new ca(s,e)}for(s=uo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=vr(n),o=i.R(e);Wn(o)||0<o.X(t);)n-=r,i=vr(n),o=i.R(e);Hr(i)&&(i=_p),s=s.add(i),t=Wu(t,o)}return new ca(s,t)}te.gb=function(t){return Gu(this,t).h};te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new rt(n,this.h&t.h)};te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new rt(n,this.h|t.h)};te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new rt(n,this.h^t.h)};function hE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new rt(n,t.h)}function Ui(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new rt(s,t.h)}Ku.prototype.createWebChannel=Ku.prototype.g;Bn.prototype.send=Bn.prototype.u;Bn.prototype.open=Bn.prototype.m;Bn.prototype.close=Bn.prototype.close;zh.NO_ERROR=0;zh.TIMEOUT=8;zh.HTTP_ERROR=6;QT.COMPLETE="complete";qT.EventType=Kl;Kl.OPEN="a";Kl.CLOSE="b";Kl.ERROR="c";Kl.MESSAGE="d";Gt.prototype.listen=Gt.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;ur.prototype.digest=ur.prototype.l;ur.prototype.reset=ur.prototype.reset;ur.prototype.update=ur.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=vr;rt.fromString=PS;var $L=function(){return new Ku},jL=function(){return Gh()},qf=zh,BL=QT,VL=ki,fE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},HL=zl,Nc=qT,KL=kt,WL=ur,ho=rt;const dE="@firebase/firestore";/**
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
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */let qo="9.21.0";/**
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
 */const Ii=new Nl("@firebase/firestore");function pE(){return Ii.logLevel}function he(t,...e){if(Ii.logLevel<=Je.DEBUG){const n=e.map(Tm);Ii.debug(`Firestore (${qo}): ${t}`,...n)}}function es(t,...e){if(Ii.logLevel<=Je.ERROR){const n=e.map(Tm);Ii.error(`Firestore (${qo}): ${t}`,...n)}}function So(t,...e){if(Ii.logLevel<=Je.WARN){const n=e.map(Tm);Ii.warn(`Firestore (${qo}): ${t}`,...n)}}function Tm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw es(e),new Error(e)}function gt(t,e){t||Ae()}function Me(t,e){return t}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rn.UNAUTHENTICATED))}shutdown(){}}class zL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YL{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(gt(typeof r.accessToken=="string"),new DS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return gt(e===null||typeof e=="string"),new rn(e)}}class XL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class QL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new XL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gt(typeof n.token=="string"),this.T=n.token,new qL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class kS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ZL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function et(t,e){return t<e?-1:t>e?1:0}function Io(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new me(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Bt(0,0))}static max(){return new Ne(new Bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(),r===void 0?r=e.length-n:r>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class wt extends yl{construct(e,n,r){return new wt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const e2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cn extends yl{construct(e,n,r){return new cn(e,n,r)}static isValidIdentifier(e){return e2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new cn(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new me(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new me(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new me(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new me(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cn(n)}static emptyPath(){return new cn([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(wt.fromString(e))}static fromName(e){return new ve(wt.fromString(e).popFirst(5))}static empty(){return new ve(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return wt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new wt(e.slice()))}}function t2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ne.fromTimestamp(r===1e9?new Bt(n+1,0):new Bt(n,r));return new Ms(s,ve.empty(),e)}function n2(t){return new Ms(t.readTime,t.key,-1)}class Ms{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ms(Ne.min(),ve.empty(),-1)}static max(){return new Ms(Ne.max(),ve.empty(),-1)}}function r2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(t.documentKey,e.documentKey),n!==0?n:et(t.largestBatchId,e.largestBatchId))}/**
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
 */const s2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class i2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ql(t){if(t.code!==K.FAILED_PRECONDITION||t.message!==s2)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ql(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Sm.ct=-1;function tf(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function o2(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function MS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Rt{constructor(e,n){this.comparator=e,this.root=n||Qt.EMPTY}insert(e,n){return new Rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pc(this.root,e,this.comparator,!0)}}class Pc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qt.RED,this.left=s??Qt.EMPTY,this.right=i??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gn{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mE(this.data.getIterator())}getIteratorFrom(e){return new mE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gn(this.comparator);return n.data=e,n}}class mE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sr{constructor(e){this.fields=e,e.sort(cn.comparator)}static empty(){return new sr([])}unionWith(e){let n=new gn(cn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class LS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LS("Invalid base64 string: "+s):s}}(e);return new vn(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new vn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vn.EMPTY_BYTE_STRING=new vn("");const a2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(t){if(gt(!!t),typeof t=="string"){let e=0;const n=a2.exec(t);if(gt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ft(t.seconds),nanos:Ft(t.nanos)}}function Ft(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?vn.fromBase64String(t):vn.fromUint8Array(t)}/**
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
 */function Im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cm(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?Cm(e):e}function El(t){const e=Ls(t.mapValue.fields.__local_write_time__.timestampValue);return new Bt(e.seconds,e.nanos)}/**
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
 */class l2{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class _l{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _l("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _l&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:c2(t)?9007199254740991:10:Ae()}function Ar(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return El(t).isEqual(El(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Ls(r.timestampValue),o=Ls(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ci(r.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ft(r.geoPointValue.latitude)===Ft(s.geoPointValue.latitude)&&Ft(r.geoPointValue.longitude)===Ft(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ft(r.integerValue)===Ft(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ft(r.doubleValue),o=Ft(s.doubleValue);return i===o?zu(i)===zu(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Io(t.arrayValue.values||[],e.arrayValue.values||[],Ar);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(gE(i)!==gE(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ar(i[a],o[a])))return!1;return!0}(t,e);default:return Ae()}}function wl(t,e){return(t.values||[]).find(n=>Ar(n,e))!==void 0}function Co(t,e){if(t===e)return 0;const n=Ai(t),r=Ai(e);if(n!==r)return et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ft(s.integerValue||s.doubleValue),a=Ft(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vE(t.timestampValue,e.timestampValue);case 4:return vE(El(t),El(e));case 5:return et(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ci(s),a=Ci(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=et(o[l],a[l]);if(c!==0)return c}return et(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=et(Ft(s.latitude),Ft(i.latitude));return o!==0?o:et(Ft(s.longitude),Ft(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Co(o[l],a[l]);if(c)return c}return et(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Dc.mapValue&&i===Dc.mapValue)return 0;if(s===Dc.mapValue)return 1;if(i===Dc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=et(a[u],c[u]);if(h!==0)return h;const f=Co(o[a[u]],l[c[u]]);if(f!==0)return f}return et(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function vE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return et(t,e);const n=Ls(t),r=Ls(e),s=et(n.seconds,r.seconds);return s!==0?s:et(n.nanos,r.nanos)}function Ao(t){return wp(t)}function wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Ls(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ci(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ve.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=wp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${wp(r.fields[a])}`;return i+"}"}(t.mapValue):Ae();var e,n}function bp(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function yE(t){return!!t&&"nullValue"in t}function EE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qc(t){return!!t&&"mapValue"in t}function ja(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ja(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ja(t.arrayValue.values[n]);return e}return Object.assign({},t)}function c2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gn{constructor(e){this.value=e}static empty(){return new Gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(n)}setAll(e){let n=cn.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ja(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Jo(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gn(ja(this.value))}}function FS(t){const e=[];return Jo(t.fields,(n,r)=>{const s=new cn([n]);if(qc(r)){const i=FS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new sr(e)}/**
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
 */class an{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new an(e,0,Ne.min(),Ne.min(),Ne.min(),Gn.empty(),0)}static newFoundDocument(e,n,r,s){return new an(e,1,n,Ne.min(),r,s,0)}static newNoDocument(e,n){return new an(e,2,n,Ne.min(),Ne.min(),Gn.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,Ne.min(),Ne.min(),Gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yu{constructor(e,n){this.position=e,this.inclusive=n}}function _E(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ve.comparator(ve.fromName(o.referenceValue),n.key):r=Co(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ar(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function u2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class US{}class jt extends US{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new f2(e,n,r):n==="array-contains"?new g2(e,r):n==="in"?new m2(e,r):n==="not-in"?new v2(e,r):n==="array-contains-any"?new y2(e,r):new jt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new d2(e,r):new p2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Co(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(Co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rr extends US{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Rr(e,n)}matches(e){return $S(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $S(t){return t.op==="and"}function jS(t){return h2(t)&&$S(t)}function h2(t){for(const e of t.filters)if(e instanceof Rr)return!1;return!0}function Tp(t){if(t instanceof jt)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(jS(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function BS(t,e){return t instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.field.isEqual(r.field)&&Ar(n.value,r.value)}(t,e):t instanceof Rr?function(n,r){return r instanceof Rr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&BS(i,r.filters[o]),!0):!1}(t,e):void Ae()}function VS(t){return t instanceof jt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ao(e.value)}`}(t):t instanceof Rr?function(e){return e.op.toString()+" {"+e.getFilters().map(VS).join(" ,")+"}"}(t):"Filter"}class f2 extends jt{constructor(e,n,r){super(e,n,r),this.key=ve.fromName(r.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class d2 extends jt{constructor(e,n){super(e,"in",n),this.keys=HS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class p2 extends jt{constructor(e,n){super(e,"not-in",n),this.keys=HS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ve.fromName(r.referenceValue))}class g2 extends jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&wl(n.arrayValue,this.value)}}class m2 extends jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class v2 extends jt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class y2 extends jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class E2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function bE(t,e=null,n=[],r=[],s=null,i=null,o=null){return new E2(t,e,n,r,s,i,o)}function Rm(t){const e=Me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),tf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.ft=n}return e.ft}function xm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!u2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wE(t.startAt,e.startAt)&&wE(t.endAt,e.endAt)}function Sp(t){return ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class nf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function _2(t,e,n,r,s,i,o,a){return new nf(t,e,n,r,s,i,o,a)}function Om(t){return new nf(t)}function TE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b2(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function T2(t){return t.collectionGroup!==null}function fo(t){const e=Me(t);if(e.dt===null){e.dt=[];const n=b2(e),r=w2(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ba(n)),e.dt.push(new Ba(cn.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ba(cn.keyField(),i))}}}return e.dt}function ts(t){const e=Me(t);if(!e._t)if(e.limitType==="F")e._t=bE(e.path,e.collectionGroup,fo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of fo(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ba(i.field,o))}const r=e.endAt?new Yu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Yu(e.startAt.position,e.startAt.inclusive):null;e._t=bE(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Ip(t,e,n){return new nf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rf(t,e){return xm(ts(t),ts(e))&&t.limitType===e.limitType}function KS(t){return`${Rm(ts(t))}|lt:${t.limitType}`}function Cp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>VS(r)).join(", ")}]`),tf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),`Target(${n})`}(ts(t))}; limitType=${t.limitType})`}function sf(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ve.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of fo(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=_E(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,fo(n),r)||n.endAt&&!function(s,i,o){const a=_E(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,fo(n),r))}(t,e)}function S2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WS(t){return(e,n)=>{let r=!1;for(const s of fo(t)){const i=I2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function I2(t,e,n){const r=t.field.isKeyField()?ve.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Co(a,l):Ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae()}}/**
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
 */class Zo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jo(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return MS(this.inner)}size(){return this.innerSize}}/**
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
 */const C2=new Rt(ve.comparator);function ns(){return C2}const GS=new Rt(ve.comparator);function ba(...t){let e=GS;for(const n of t)e=e.insert(n.key,n);return e}function zS(t){let e=GS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return Va()}function YS(){return Va()}function Va(){return new Zo(t=>t.toString(),(t,e)=>t.isEqual(e))}const A2=new Rt(ve.comparator),R2=new gn(ve.comparator);function Be(...t){let e=R2;for(const n of t)e=e.add(n);return e}const x2=new gn(et);function O2(){return x2}/**
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
 */function XS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function QS(t){return{integerValue:""+t}}function N2(t,e){return o2(e)?QS(e):XS(t,e)}/**
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
 */class of{constructor(){this._=void 0}}function P2(t,e,n){return t instanceof Xu?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Im(s)&&(s=Cm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof bl?JS(t,e):t instanceof Tl?ZS(t,e):function(r,s){const i=qS(r,s),o=SE(i)+SE(r.wt);return bp(i)&&bp(r.wt)?QS(o):XS(r.serializer,o)}(t,e)}function D2(t,e,n){return t instanceof bl?JS(t,e):t instanceof Tl?ZS(t,e):n}function qS(t,e){return t instanceof Qu?bp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Xu extends of{}class bl extends of{constructor(e){super(),this.elements=e}}function JS(t,e){const n=eI(e);for(const r of t.elements)n.some(s=>Ar(s,r))||n.push(r);return{arrayValue:{values:n}}}class Tl extends of{constructor(e){super(),this.elements=e}}function ZS(t,e){let n=eI(e);for(const r of t.elements)n=n.filter(s=>!Ar(s,r));return{arrayValue:{values:n}}}class Qu extends of{constructor(e,n){super(),this.serializer=e,this.wt=n}}function SE(t){return Ft(t.integerValue||t.doubleValue)}function eI(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function k2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bl&&r instanceof bl||n instanceof Tl&&r instanceof Tl?Io(n.elements,r.elements,Ar):n instanceof Qu&&r instanceof Qu?Ar(n.wt,r.wt):n instanceof Xu&&r instanceof Xu}(t.transform,e.transform)}class M2{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class af{}function tI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nm(t.key,wr.none()):new Jl(t.key,t.data,wr.none());{const n=t.data,r=Gn.empty();let s=new gn(cn.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mi(t.key,r,new sr(s.toArray()),wr.none())}}function L2(t,e,n){t instanceof Jl?function(r,s,i){const o=r.value.clone(),a=CE(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(r,s,i){if(!Jc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=CE(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(nI(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof Jl?function(s,i,o,a){if(!Jc(s.precondition,i))return o;const l=s.value.clone(),c=AE(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,i,o,a){if(!Jc(s.precondition,i))return o;const l=AE(s.fieldTransforms,a,i),c=i.data;return c.setAll(nI(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Jc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function F2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qS(r.transform,s||null);i!=null&&(n===null&&(n=Gn.empty()),n.set(r.field,i))}return n||null}function IE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Io(n,r,(s,i)=>k2(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jl extends af{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mi extends af{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function CE(t,e,n){const r=new Map;gt(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,D2(o,a,n[s]))}return r}function AE(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,P2(i,o,e))}return r}class Nm extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U2 extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&L2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YS();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=tI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Be())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(n,r)=>IE(n,r))&&Io(this.baseMutations,e.baseMutations,(n,r)=>IE(n,r))}}class Pm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){gt(e.mutations.length===r.length);let s=A2;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pm(e,n,r,s)}}/**
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
 */class j2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class B2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Mt,Ge;function V2(t){switch(t){default:return Ae();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function rI(t){if(t===void 0)return es("GRPC error has no .code"),K.UNKNOWN;switch(t){case Mt.OK:return K.OK;case Mt.CANCELLED:return K.CANCELLED;case Mt.UNKNOWN:return K.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return K.INTERNAL;case Mt.UNAVAILABLE:return K.UNAVAILABLE;case Mt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Mt.NOT_FOUND:return K.NOT_FOUND;case Mt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Mt.ABORTED:return K.ABORTED;case Mt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Mt.DATA_LOSS:return K.DATA_LOSS;default:return Ae()}}(Ge=Mt||(Mt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Dm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return kc}static getOrCreateInstance(){return kc===null&&(kc=new Dm),kc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let kc=null;/**
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
 */function H2(){return new TextEncoder}/**
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
 */const K2=new ho([4294967295,4294967295],0);function RE(t){const e=H2().encode(t),n=new WL;return n.update(e),new Uint8Array(n.digest())}function xE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ho([n,r],0),new ho([s,i],0)]}class km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(r<0)throw new Ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=ho.fromNumber(this.yt)}Tt(e,n,r){let s=e.add(n.multiply(ho.fromNumber(r)));return s.compare(K2)===1&&(s=new ho([s.getBits(0),s.getBits(1)],0)),s.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=RE(e),[r,s]=xE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);if(!this.Et(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new km(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=RE(e),[r,s]=xE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lf{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lf(Ne.min(),s,new Rt(et),ns(),Be())}}class Zl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zl(r,n,Be(),Be(),Be())}}/**
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
 */class Zc{constructor(e,n,r,s){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=s}}class sI{constructor(e,n){this.targetId=e,this.bt=n}}class iI{constructor(e,n,r=vn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class OE{constructor(){this.Vt=0,this.St=PE(),this.Dt=vn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Be(),n=Be(),r=Be();return this.St.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Ae()}}),new Zl(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=PE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class W2{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=ns(),this.jt=NE(),this.zt=new Rt(et)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,s)=>{this.Zt(s)&&n(s)})}ee(e){var n;const r=e.targetId,s=e.bt.count,i=this.ne(r);if(i){const o=i.target;if(Sp(o))if(s===0){const a=new ve(o.path);this.Jt(r,a,an.newNoDocument(a,Ne.min()))}else gt(s===1);else{const a=this.se(r);if(a!==s){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=Dm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:s}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Ci(i).toUint8Array()}catch(u){if(u instanceof LS)return So("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new km(l,o,a)}catch(u){return So(u instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:s!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),s++)}),s}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Sp(a.target)){const l=new ve(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,an.newNoDocument(l,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let r=Be();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const s=new lf(e,n,this.zt,this.Qt,r);return this.Qt=ns(),this.jt=NE(),this.zt=new Rt(et),s}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const s=this.Xt(e);this.ce(e,n)?s.Ft(n,1):s.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new OE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new gn(et),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new OE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function NE(){return new Rt(ve.comparator)}function PE(){return new Rt(ve.comparator)}const G2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),z2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Y2=(()=>({and:"AND",or:"OR"}))();class X2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ap(t,e){return t.useProto3Json||tf(e)?e:{value:e}}function qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Q2(t,e){return qu(t,e.toTimestamp())}function br(t){return gt(!!t),Ne.fromTimestamp(function(e){const n=Ls(e);return new Bt(n.seconds,n.nanos)}(t))}function Mm(t,e){return function(n){return new wt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function aI(t){const e=wt.fromString(t);return gt(hI(e)),e}function Rp(t,e){return Mm(t.databaseId,e.path)}function Jf(t,e){const n=aI(e);if(n.get(1)!==t.databaseId.projectId)throw new me(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new me(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(lI(n))}function xp(t,e){return Mm(t.databaseId,e)}function q2(t){const e=aI(t);return e.length===4?wt.emptyPath():lI(e)}function Op(t){return new wt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lI(t){return gt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function DE(t,e,n){return{name:Rp(t,e),fields:n.value.mapValue.fields}}function J2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(gt(c===void 0||typeof c=="string"),vn.fromBase64String(c||"")):(gt(c===void 0||c instanceof Uint8Array),vn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?K.UNKNOWN:rI(l.code);return new me(c,l.message||"")}(o);n=new iI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jf(t,r.document.name),i=br(r.document.updateTime),o=r.document.createTime?br(r.document.createTime):Ne.min(),a=new Gn({mapValue:{fields:r.document.fields}}),l=an.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Zc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jf(t,r.document),i=r.readTime?br(r.readTime):Ne.min(),o=an.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jf(t,r.document),i=r.removedTargetIds||[];n=new Zc([],i,s,null)}else{if(!("filter"in e))return Ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new B2(s,i),a=r.targetId;n=new sI(a,o)}}return n}function Z2(t,e){let n;if(e instanceof Jl)n={update:DE(t,e.key,e.value)};else if(e instanceof Nm)n={delete:Rp(t,e.key)};else if(e instanceof Mi)n={update:DE(t,e.key,e.data),updateMask:lF(e.fieldMask)};else{if(!(e instanceof U2))return Ae();n={verify:Rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Xu)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bl)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tl)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qu)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw Ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Q2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ae()}(t,e.precondition)),n}function eF(t,e){return t&&t.length>0?(gt(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?br(r.updateTime):br(s);return i.isEqual(Ne.min())&&(i=br(s)),new M2(i,r.transformResults||[])}(n,e))):[]}function tF(t,e){return{documents:[xp(t,e.path)]}}function nF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=xp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return uI(Rr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Wi(u.field),direction:iF(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ap(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function rF(t){let e=q2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){gt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=cI(u);return h instanceof Rr&&jS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ba(Gi(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,tf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Yu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Yu(f,h)}(n.endAt)),_2(e,s,o,i,a,"F",l,c)}function sF(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Gi(e.unaryFilter.field);return jt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Gi(e.unaryFilter.field);return jt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gi(e.unaryFilter.field);return jt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gi(e.unaryFilter.field);return jt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(t):t.fieldFilter!==void 0?function(e){return jt.create(Gi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rr.create(e.compositeFilter.filters.map(n=>cI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Ae()}}(e.compositeFilter.op))}(t):Ae()}function iF(t){return G2[t]}function oF(t){return z2[t]}function aF(t){return Y2[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function Gi(t){return cn.fromServerFormat(t.fieldPath)}function uI(t){return t instanceof jt?function(e){if(e.op==="=="){if(EE(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NAN"}};if(yE(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(EE(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NAN"}};if(yE(e.value))return{unaryFilter:{field:Wi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(e.field),op:oF(e.op),value:e.value}}}(t):t instanceof Rr?function(e){const n=e.getFilters().map(r=>uI(r));return n.length===1?n[0]:{compositeFilter:{op:aF(e.op),filters:n}}}(t):Ae()}function lF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ws{constructor(e,n,r,s,i=Ne.min(),o=Ne.min(),a=vn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cF{constructor(e){this.le=e}}function uF(t){const e=rF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ip(e,e.limit,"L"):e}/**
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
 */class hF{constructor(){this.sn=new fF}addToCollectionParentIndex(e,n){return this.sn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Ms.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class fF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gn(wt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gn(wt.comparator)).toArray()}}/**
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
 */class Ro{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Ro(0)}static kn(){return new Ro(-1)}}/**
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
 */class dF{constructor(){this.changes=new Zo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class pF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gF{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ha(r.mutation,s,sr.empty(),Bt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Be()){const s=si();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ba();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ns();const o=Va(),a=Va();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Mi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ha(u.mutation,c,u.mutation.getFieldMask(),Bt.now())):o.set(c.key,sr.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new pF(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Va();let s=new Rt((o,a)=>o-a),i=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||sr.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Be()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=YS();u.forEach(f=>{if(!i.has(f)){const d=tI(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ve.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(si());let a=-1,l=i;return o.next(c=>z.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?z.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Be())).next(u=>({batchId:a,changes:zS(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(r=>{let s=ba();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ba();return this.indexManager.getCollectionParents(e,s).next(o=>z.forEach(o,a=>{const l=function(c,u){return new nf(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,an.newInvalidDocument(c)))});let o=ba();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Ha(c.mutation,l,sr.empty(),Bt.now()),sf(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class mF{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return z.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:br(r.createTime)}),z.resolve()}getNamedQuery(e,n){return z.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:uF(r.bundledQuery),readTime:br(r.readTime)}}(n)),z.resolve()}}/**
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
 */class vF{constructor(){this.overlays=new Rt(ve.comparator),this.hs=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.de(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=si(),i=n.length+1,o=new ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Rt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=si(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=si(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return z.resolve(a)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new j2(n,r));let i=this.hs.get(n);i===void 0&&(i=Be(),this.hs.set(n,i)),this.hs.set(n,i.add(r.key))}}/**
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
 */class Lm{constructor(){this.ls=new gn(Ht.fs),this.ds=new gn(Ht._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ht(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ht(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new ve(new wt([])),r=new Ht(n,e),s=new Ht(n,e+1),i=[];return this.ds.forEachInRange([r,s],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new ve(new wt([])),r=new Ht(n,e),s=new Ht(n,e+1);let i=Be();return this.ds.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ht(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ht{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return ve.comparator(e.key,n.key)||et(e.Es,n.Es)}static _s(e,n){return et(e.Es,n.Es)||ve.comparator(e.key,n.key)}}/**
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
 */class yF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new gn(Ht.fs)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ht(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ht(n,0),s=new Ht(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.vs(o.Es);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gn(et);return n.forEach(s=>{const i=new Ht(s,0),o=new Ht(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.Es)})}),z.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ve.isDocumentKey(i)||(i=i.child(""));const o=new Ht(new ve(i),0);let a=new gn(et);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),z.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){gt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return z.forEach(n.mutations,s=>{const i=new Ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ht(n,0),s=this.Rs.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EF{constructor(e){this.Ss=e,this.docs=new Rt(ve.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():an.newInvalidDocument(n))}getEntries(e,n){let r=ns();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():an.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ns();const o=n.path,a=new ve(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||r2(n2(u),r)<=0||(s.has(u.key)||sf(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Ae()}Ds(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _F(this)}getSize(e){return z.resolve(this.size)}}class _F extends dF{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class wF{constructor(e){this.persistence=e,this.Cs=new Zo(n=>Rm(n),xm),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Lm,this.targetCount=0,this.ks=Ro.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),z.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Ro(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.$n(n),z.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Ns.containsKey(n))}}/**
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
 */class bF{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Sm(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new wF(this),this.indexManager=new hF,this.remoteDocumentCache=function(r){return new EF(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new cF(n),this.Ls=new mF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new yF(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const s=new TF(this.Os.next());return this.referenceDelegate.qs(),r(s).next(i=>this.referenceDelegate.Us(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ks(e,n){return z.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class TF extends i2{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Gs=new Lm,this.Qs=null}static js(e){return new Fm(e)}get zs(){if(this.Qs)return this.Qs;throw Ae()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),z.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.zs,r=>{const s=ve.fromPath(r);return this.Ws(e,s).next(i=>{i||n.removeEntry(s,Ne.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return z.or([()=>z.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Um{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=Be(),s=Be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Um(e,n.fromCache,r,s)}}/**
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
 */class SF{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Ki(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(TE(n))return z.resolve(null);let r=ts(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ip(n,null,"F"),r=ts(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Be(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Ip(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,s){return TE(n)||s.isEqual(Ne.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(pE()<=Je.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cp(n)),this.zi(e,o,n,t2(s,-1)))})}Qi(e,n){let r=new gn(WS(e));return n.forEach((s,i)=>{sf(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return pE()<=Je.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Cp(n)),this.qi.getDocumentsMatchingQuery(e,n,Ms.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class IF{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Rt(et),this.Ji=new Zo(i=>Rm(i),xm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gF(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function CF(t,e,n,r){return new IF(t,e,n,r)}async function fI(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Be();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function AF(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=z.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);gt(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Be();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function dI(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function RF(t,e){const n=Me(t),r=e.snapshotVersion;let s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(vn.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(i,d))});let l=ns(),c=Be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(xF(i,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(Ne.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return z.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Hi=s,i))}function xF(t,e,n){let r=Be(),s=Be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ns();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):he("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:s}})}function OF(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NF(t,e){const n=Me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Fs.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Fs.allocateTargetId(r).next(o=>(s=new ws(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Hi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Np(t,e,n){const r=Me(t),s=r.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ql(o))throw o;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(s.target)}function kE(t,e,n){const r=Me(t);let s=Ne.min(),i=Be();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Me(a),h=u.Ji.get(c);return h!==void 0?z.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(r,o,ts(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?s:Ne.min(),n?i:Be())).next(a=>(PF(r,S2(e),a),{documents:a,sr:i})))}function PF(t,e,n){let r=t.Yi.get(e)||Ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Yi.set(e,r)}class ME{constructor(){this.activeTargetIds=O2()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DF{constructor(){this.Wr=new ME,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new ME,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kF{Jr(e){}shutdown(){}}/**
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
 */class LE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function Zf(){return Mc===null?Mc=268435456+Math.round(2147483648*Math.random()):Mc++,"0x"+Mc.toString(16)}/**
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
 */const MF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LF{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const tn="WebChannelConnection";class FF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,i){const o=Zf(),a=this.Io(e,n);he("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,s,i),this.Eo(e,a,l,r).then(c=>(he("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw So("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,s,i,o){return this.po(e,n,r,s,i)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Io(e,n){const r=MF[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const i=Zf();return new Promise((o,a)=>{const l=new KL;l.setWithCredentials(!0),l.listenOnce(BL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qf.NO_ERROR:const u=l.getResponseJson();he(tn,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case qf.TIMEOUT:he(tn,`RPC '${e}' ${i} timed out`),a(new me(K.DEADLINE_EXCEEDED,"Request time out"));break;case qf.HTTP_ERROR:const h=l.getStatus();if(he(tn,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(y)>=0?y:K.UNKNOWN}(d.status);a(new me(p,d.message))}else a(new me(K.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new me(K.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{he(tn,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);he(tn,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=Zf(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$L(),a=jL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new HL({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");he(tn,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new LF({io:m=>{f?he(tn,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(he(tn,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),he(tn,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},ro:()=>u.close()}),p=(m,y,v)=>{m.listen(y,g=>{try{v(g)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,Nc.EventType.OPEN,()=>{f||he(tn,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Nc.EventType.CLOSE,()=>{f||(f=!0,he(tn,`RPC '${e}' stream ${s} transport closed`),d.fo())}),p(u,Nc.EventType.ERROR,m=>{f||(f=!0,So(tn,`RPC '${e}' stream ${s} transport errored:`,m),d.fo(new me(K.UNAVAILABLE,"The operation could not be completed")))}),p(u,Nc.EventType.MESSAGE,m=>{var y;if(!f){const v=m.data[0];gt(!!v);const g=v,E=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(E){he(tn,`RPC '${e}' stream ${s} received error:`,E);const w=E.status;let T=function(x){const I=Mt[x];if(I!==void 0)return rI(I)}(w),S=E.message;T===void 0&&(T=K.INTERNAL,S="Unknown error status: "+w+" with message "+E.message),f=!0,d.fo(new me(T,S)),u.close()}else he(tn,`RPC '${e}' stream ${s} received:`,v),d._o(v)}}),p(a,VL.STAT_EVENT,m=>{m.stat===fE.PROXY?he(tn,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===fE.NOPROXY&&he(tn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function ed(){return typeof document<"u"?document:null}/**
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
 */function cf(t){return new X2(t,!0)}/**
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
 */class pI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class gI{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Mo=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new pI(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new me(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UF extends gI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=J2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Ne.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Ne.min():i.readTime?br(i.readTime):Ne.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Op(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Sp(a)?{documents:tF(s,a)}:{query:nF(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=oI(s,i.resumeToken);const l=Ap(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(Ne.min())>0){o.readTime=qu(s,i.snapshotVersion.toTimestamp());const l=Ap(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=sF(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Op(this.serializer),n.removeTarget=e,this.zo(n)}}class $F extends gI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(gt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=eF(e.writeResults,e.commitTime),r=br(e.commitTime);return this.listener.uu(r,n)}return gt(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Op(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Z2(this.serializer,r))};this.zo(n)}}/**
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
 */class jF extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new me(K.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.po(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new me(K.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new me(K.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class BF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(es(n),this.wu=!1):he("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class VF{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Li(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Me(a);l.Au.add(4),await ec(l),l.Pu.set("Unknown"),l.Au.delete(4),await uf(l)}(this))})}),this.Pu=new BF(r,s)}}async function uf(t){if(Li(t))for(const e of t.Ru)await e(!0)}async function ec(t){for(const e of t.Ru)await e(!1)}function mI(t,e){const n=Me(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Bm(n)?jm(n):ea(n).Uo()&&$m(n,e))}function vI(t,e){const n=Me(t),r=ea(n);n.Eu.delete(e),r.Uo()&&yI(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Li(n)&&n.Pu.set("Unknown"))}function $m(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ea(t).nu(e)}function yI(t,e){t.bu.Lt(e),ea(t).su(e)}function jm(t){t.bu=new W2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),ea(t).start(),t.Pu.mu()}function Bm(t){return Li(t)&&!ea(t).qo()&&t.Eu.size>0}function Li(t){return Me(t).Au.size===0}function EI(t){t.bu=void 0}async function HF(t){t.Eu.forEach((e,n)=>{$m(t,e)})}async function KF(t,e){EI(t),Bm(t)?(t.Pu.pu(e),jm(t)):t.Pu.set("Unknown")}async function WF(t,e,n){if(t.Pu.set("Online"),e instanceof iI&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ju(t,r)}else if(e instanceof Zc?t.bu.Wt(e):e instanceof sI?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ne.min()))try{const r=await dI(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.bu.ue(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Eu.get(l);c&&s.Eu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Eu.get(a);if(!c)return;s.Eu.set(a,c.withResumeToken(vn.EMPTY_BYTE_STRING,c.snapshotVersion)),yI(s,a);const u=new ws(c.target,a,l,c.sequenceNumber);$m(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){he("RemoteStore","Failed to raise snapshot:",r),await Ju(t,r)}}async function Ju(t,e,n){if(!ql(e))throw e;t.Au.add(1),await ec(t),t.Pu.set("Offline"),n||(n=()=>dI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await uf(t)})}function _I(t,e){return e().catch(n=>Ju(t,n,e))}async function hf(t){const e=Me(t),n=Fs(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;GF(e);)try{const s=await OF(e.localStore,r);if(s===null){e.Tu.length===0&&n.Qo();break}r=s.batchId,zF(e,s)}catch(s){await Ju(e,s)}wI(e)&&bI(e)}function GF(t){return Li(t)&&t.Tu.length<10}function zF(t,e){t.Tu.push(e);const n=Fs(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function wI(t){return Li(t)&&!Fs(t).qo()&&t.Tu.length>0}function bI(t){Fs(t).start()}async function YF(t){Fs(t).au()}async function XF(t){const e=Fs(t);for(const n of t.Tu)e.ou(n.mutations)}async function QF(t,e,n){const r=t.Tu.shift(),s=Pm.from(r,e,n);await _I(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hf(t)}async function qF(t,e){e&&Fs(t).ru&&await async function(n,r){if(s=r.code,V2(s)&&s!==K.ABORTED){const i=n.Tu.shift();Fs(n).Go(),await _I(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await hf(n)}var s}(t,e),wI(t)&&bI(t)}async function FE(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const r=Li(n);n.Au.add(3),await ec(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await uf(n)}async function JF(t,e){const n=Me(t);e?(n.Au.delete(2),await uf(n)):e||(n.Au.add(2),await ec(n),n.Pu.set("Unknown"))}function ea(t){return t.Vu||(t.Vu=function(e,n,r){const s=Me(e);return s.lu(),new UF(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:HF.bind(null,t),co:KF.bind(null,t),eu:WF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Bm(t)?jm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),EI(t))})),t.Vu}function Fs(t){return t.Su||(t.Su=function(e,n,r){const s=Me(e);return s.lu(),new $F(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:YF.bind(null,t),co:qF.bind(null,t),cu:XF.bind(null,t),uu:QF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await hf(t)):(await t.Su.stop(),t.Tu.length>0&&(he("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Vm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Vm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hm(t,e){if(es("AsyncQueue",`${e}: ${t}`),ql(t))return new me(K.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ve.comparator(n.key,r.key):(n,r)=>ve.comparator(n.key,r.key),this.keyedMap=ba(),this.sortedSet=new Rt(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class UE{constructor(){this.Du=new Rt(ve.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Ae():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,po.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ZF{constructor(){this.xu=void 0,this.listeners=[]}}class eU{constructor(){this.queries=new Zo(e=>KS(e),rf),this.onlineState="Unknown",this.Nu=new Set}}async function TI(t,e){const n=Me(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ZF),s)try{i.xu=await n.onListen(r)}catch(o){const a=Hm(o,`Initialization of query '${Cp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Km(n)}async function SI(t,e){const n=Me(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function tU(t,e){const n=Me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(s)&&(r=!0);o.xu=s}}r&&Km(n)}function nU(t,e,n){const r=Me(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Km(t){t.Nu.forEach(e=>{e.next()})}class II{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class CI{constructor(e){this.key=e}}class AI{constructor(e){this.key=e}}class rU{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Be(),this.mutatedKeys=Be(),this.Zu=WS(e),this.tc=new po(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new UE,s=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=sf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.ic(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.Zu(d,l)>0||c&&this.Zu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return d(h)-d(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,i.length!==0||l?{snapshot:new xo(this.query,e.tc,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new UE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Be(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new AI(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new CI(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Be();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return xo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class sU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iU{constructor(e){this.key=e,this.lc=!1}}class oU{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Zo(a=>KS(a),rf),this._c=new Map,this.wc=new Set,this.mc=new Rt(ve.comparator),this.gc=new Map,this.yc=new Lm,this.Ic={},this.Tc=new Map,this.Ec=Ro.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function aU(t,e){const n=vU(t);let r,s;const i=n.dc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.hc();else{const o=await NF(n.localStore,ts(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await lU(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&mI(n.remoteStore,o)}return s}async function lU(t,e,n,r,s){t.Rc=(h,f,d)=>async function(p,m,y,v){let g=m.view.nc(y);g.ji&&(g=await kE(p.localStore,m.query,!1).then(({documents:T})=>m.view.nc(T,g)));const E=v&&v.targetChanges.get(m.targetId),w=m.view.applyChanges(g,p.isPrimaryClient,E);return jE(p,m.targetId,w.uc),w.snapshot}(t,h,f,d);const i=await kE(t.localStore,e,!0),o=new rU(e,i.sr),a=o.nc(i.documents),l=Zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);jE(t,n,c.uc);const u=new sU(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function cU(t,e){const n=Me(t),r=n.dc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!rf(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Np(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vI(n.remoteStore,r.targetId),Pp(n,r.targetId)}).catch(Ql)):(Pp(n,r.targetId),await Np(n.localStore,r.targetId,!0))}async function uU(t,e,n){const r=yU(t);try{const s=await function(i,o){const a=Me(i),l=Bt.now(),c=o.reduce((f,d)=>f.add(d.key),Be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ns(),p=Be();return a.Xi.getEntries(f,c).next(m=>{d=m,d.forEach((y,v)=>{v.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const y=[];for(const v of o){const g=F2(v,u.get(v.key).overlayedDocument);g!=null&&y.push(new Mi(v.key,g,FS(g.value.mapValue),wr.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:zS(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.Ic[i.currentUser.toKey()];l||(l=new Rt(et)),l=l.insert(o,a),i.Ic[i.currentUser.toKey()]=l}(r,s.batchId,n),await tc(r,s.changes),await hf(r.remoteStore)}catch(s){const i=Hm(s,"Failed to persist write");n.reject(i)}}async function RI(t,e){const n=Me(t);try{const r=await RF(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.gc.get(i);o&&(gt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?gt(o.lc):s.removedDocuments.size>0&&(gt(o.lc),o.lc=!1))}),await tc(n,r,e)}catch(r){await Ql(r)}}function $E(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Me(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&Km(a)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hU(t,e,n){const r=Me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.gc.get(e),i=s&&s.key;if(i){let o=new Rt(ve.comparator);o=o.insert(i,an.newNoDocument(i,Ne.min()));const a=Be().add(i),l=new lf(Ne.min(),new Map,new Rt(et),o,a);await RI(r,l),r.mc=r.mc.remove(i),r.gc.delete(e),Wm(r)}else await Np(r.localStore,e,!1).then(()=>Pp(r,e,n)).catch(Ql)}async function fU(t,e){const n=Me(t),r=e.batch.batchId;try{const s=await AF(n.localStore,e);OI(n,r,null),xI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tc(n,s)}catch(s){await Ql(s)}}async function dU(t,e,n){const r=Me(t);try{const s=await function(i,o){const a=Me(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(gt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);OI(r,e,n),xI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tc(r,s)}catch(s){await Ql(s)}}function xI(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function OI(t,e,n){const r=Me(t);let s=r.Ic[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ic[r.currentUser.toKey()]=s}}function Pp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||NI(t,r)})}function NI(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(vI(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Wm(t))}function jE(t,e,n){for(const r of n)r instanceof CI?(t.yc.addReference(r.key,e),pU(t,r)):r instanceof AI?(he("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||NI(t,r.key)):Ae()}function pU(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(he("SyncEngine","New document in limbo: "+n),t.wc.add(r),Wm(t))}function Wm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new ve(wt.fromString(e)),r=t.Ec.next();t.gc.set(r,new iU(n)),t.mc=t.mc.insert(n,r),mI(t.remoteStore,new ws(ts(Om(n.path)),r,"TargetPurposeLimboResolution",Sm.ct))}}async function tc(t,e,n){const r=Me(t),s=[],i=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Um.Bi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fc.eu(s),await async function(a,l){const c=Me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>z.forEach(l,h=>z.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>z.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ql(u))throw u;he("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Hi=c.Hi.insert(h,p)}}}(r.localStore,i))}async function gU(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const r=await fI(n.localStore,e);n.currentUser=e,function(s,i){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new me(K.CANCELLED,i))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tc(n,r.tr)}}function mU(t,e){const n=Me(t),r=n.gc.get(e);if(r&&r.lc)return Be().add(r.key);{let s=Be();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.dc.get(o);s=s.unionWith(a.view.ec)}return s}}function vU(t){const e=Me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hU.bind(null,e),e.fc.eu=tU.bind(null,e.eventManager),e.fc.vc=nU.bind(null,e.eventManager),e}function yU(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dU.bind(null,e),e}class BE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return CF(this.persistence,new SF,e.initialUser,this.serializer)}createPersistence(e){return new bF(Fm.js,this.serializer)}createSharedClientState(e){return new DF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$E(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gU.bind(null,this.syncEngine),await JF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eU}createDatastore(e){const n=cf(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new FF(s));var s;return function(i,o,a,l){return new jF(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>$E(this.syncEngine,a,0),o=LE.D()?new LE:new kF,new VF(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new oU(r,s,i,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Me(e);he("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await ec(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class PI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):es("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _U{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rn.UNAUTHENTICATED,this.clientId=kS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{he("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(he("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new me(K.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function td(t,e){t.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function VE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bU(t);he("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>FE(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>FE(e.remoteStore,i)),t._onlineComponents=e}function wU(t){return t.name==="FirebaseError"?t.code===K.FAILED_PRECONDITION||t.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await td(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wU(n))throw n;So("Error using user provided cache. Falling back to memory cache: "+n),await td(t,new BE)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await td(t,new BE);return t._offlineComponents}async function DI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await VE(t,t._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await VE(t,new EU))),t._onlineComponents}function TU(t){return DI(t).then(e=>e.syncEngine)}async function kI(t){const e=await DI(t),n=e.eventManager;return n.onListen=aU.bind(null,e.syncEngine),n.onUnlisten=cU.bind(null,e.syncEngine),n}function SU(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new PI({next:h=>{i.enqueueAndForget(()=>SI(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new me(K.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new me(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new II(Om(o.path),c,{includeMetadataChanges:!0,Uu:!0});return TI(s,u)}(await kI(t),t.asyncQueue,e,n,r)),r.promise}function IU(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new PI({next:h=>{i.enqueueAndForget(()=>SI(s,u)),h.fromCache&&a.source==="server"?l.reject(new me(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new II(o,c,{includeMetadataChanges:!0,Uu:!0});return TI(s,u)}(await kI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const HE=new Map;/**
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
 */function MI(t,e,n){if(!n)throw new me(K.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CU(t,e,n,r){if(e===!0&&r===!0)throw new me(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function KE(t){if(!ve.isDocumentKey(t))throw new me(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WE(t){if(ve.isDocumentKey(t))throw new me(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function Us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gm(t);throw new me(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class GE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new me(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ff{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new me(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new me(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GL;switch(n.type){case"firstParty":return new QL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new me(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=HE.get(e);n&&(he("ComponentProvider","Removing Datastore"),HE.delete(e),n.terminate())}(this),Promise.resolve()}}function AU(t,e,n,r={}){var s;const i=(t=Us(t,ff))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&So("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=rn.MOCK_USER;else{o=nx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new me(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new rn(l)}t._authCredentials=new zL(new DS(o,a))}}/**
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
 */class Nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nn(this.firestore,e,this._key)}}class df{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new df(this.firestore,e,this._query)}}class Rs extends df{constructor(e,n,r){super(e,n,Om(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nn(this.firestore,null,new ve(e))}withConverter(e){return new Rs(this.firestore,e,this._path)}}function RU(t,e,...n){if(t=bn(t),MI("collection","path",e),t instanceof ff){const r=wt.fromString(e,...n);return WE(r),new Rs(t,null,r)}{if(!(t instanceof Nn||t instanceof Rs))throw new me(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wt.fromString(e,...n));return WE(r),new Rs(t.firestore,null,r)}}function Lc(t,e,...n){if(t=bn(t),arguments.length===1&&(e=kS.A()),MI("doc","path",e),t instanceof ff){const r=wt.fromString(e,...n);return KE(r),new Nn(t,null,new ve(r))}{if(!(t instanceof Nn||t instanceof Rs))throw new me(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wt.fromString(e,...n));return KE(r),new Nn(t.firestore,t instanceof Rs?t.converter:null,new ve(r))}}/**
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
 */class xU{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new pI(this,"async_queue_retry"),this.Yc=()=>{const n=ed();n&&he("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Yr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!ql(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw es("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=Vm.createAndSchedule(this,e,n,r,i=>this.ea(i));return this.jc.push(s),s}Xc(){this.zc&&Ae()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class nc extends ff{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xU,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LI(this),this._firestoreClient.terminate()}}function OU(t,e){const n=typeof t=="object"?t:Sg(),r=typeof t=="string"?t:e||"(default)",s=Tg(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ex("firestore");i&&AU(s,...i)}return s}function zm(t){return t._firestoreClient||LI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LI(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new l2(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new _U(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(vn.fromBase64String(e))}catch(n){throw new me(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oo(vn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ym{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class FI{constructor(e){this._methodName=e}}/**
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
 */class Xm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
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
 */const NU=/^__.*__$/;class PU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(e,this.data,n,this.fieldTransforms)}}function UI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class Qm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Qm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Zu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(UI(this.ua)&&NU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class DU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cf(e)}ga(e,n,r,s=!1){return new Qm({ua:e,methodName:n,ma:r,path:cn.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kU(t){const e=t._freezeSettings(),n=cf(t._databaseId);return new DU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MU(t,e,n,r,s,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,s);VI("Data must be an object, but it was:",o,r);const a=jI(r,o);let l,c;if(i.merge)l=new sr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=LU(e,h,n);if(!o.contains(f))throw new me(K.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);UU(u,f)||u.push(f)}l=new sr(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new PU(new Gn(a),l,c)}function $I(t,e){if(BI(t=bn(t)))return VI("Unsupported field value:",e,t),jI(t,e);if(t instanceof FI)return function(n,r){if(!UI(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=$I(o,r.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=bn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return N2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Bt.fromDate(n);return{timestampValue:qu(r.serializer,s)}}if(n instanceof Bt){const s=new Bt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qu(r.serializer,s)}}if(n instanceof Xm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Oo)return{bytesValue:oI(r.serializer,n._byteString)};if(n instanceof Nn){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Gm(n)}`)}(t,e)}function jI(t,e){const n={};return MS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jo(t,(r,s)=>{const i=$I(s,e.aa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function BI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Bt||t instanceof Xm||t instanceof Oo||t instanceof Nn||t instanceof FI)}function VI(t,e,n){if(!BI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Gm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function LU(t,e,n){if((e=bn(e))instanceof Ym)return e._internalPath;if(typeof e=="string")return HI(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const FU=new RegExp("[~\\*/\\[\\]]");function HI(t,e,n){if(e.search(FU)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ym(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new me(K.INVALID_ARGUMENT,a+t+l)}function UU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class KI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $U(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(WI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $U extends KI{data(){return super.data()}}function WI(t,e){return typeof e=="string"?HI(t,e):e instanceof Ym?e._internalPath:e._delegate._internalPath}/**
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
 */function jU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new me(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BU{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jo(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Xm(Ft(e.latitude),Ft(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(El(e));default:return null}}convertTimestamp(e){const n=Ls(e);return new Bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=wt.fromString(e);gt(hI(r));const s=new _l(r.get(1),r.get(3)),i=new ve(r.popFirst(5));return s.isEqual(n)||es(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function VU(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GI extends KI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(WI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class eu extends GI{data(e={}){return super.data(e)}}class HU{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Sa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new eu(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new eu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new eu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:KU(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
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
 */function zI(t){t=Us(t,Nn);const e=Us(t.firestore,nc);return SU(zm(e),t._key).then(n=>zU(e,t,n))}class YI extends BU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nn(this.firestore,null,n)}}function WU(t){t=Us(t,df);const e=Us(t.firestore,nc),n=zm(e),r=new YI(e);return jU(t._query),IU(n,t._query).then(s=>new HU(e,r,t,s))}function zE(t,e,n){t=Us(t,Nn);const r=Us(t.firestore,nc),s=VU(t.converter,e,n);return XI(r,[MU(kU(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wr.none())])}function GU(t){return XI(Us(t.firestore,nc),[new Nm(t._key,wr.none())])}function XI(t,e){return function(n,r){const s=new Yr;return n.asyncQueue.enqueueAndForget(async()=>uU(await TU(n),r,s)),s.promise}(zm(t),e)}function zU(t,e,n){const r=n.docs.get(e._key),s=new YI(t);return new GI(t,s,e._key,r,new Sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qo=n})(Bs),Ir(new lr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new nc(new YL(n.getProvider("auth-internal")),new JL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new me(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _l(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),$n(dE,"3.11.0",t),$n(dE,"3.11.0","esm2017")})();/**
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
 */const QI="firebasestorage.googleapis.com",YU="storageBucket",XU=2*60*1e3,QU=10*60*1e3;/**
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
 */class Dr extends Pr{constructor(e,n,r=0){super(nd(e),`Firebase Storage: ${n} (${nd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xr||(xr={}));function nd(t){return"storage/"+t}function qU(){const t="An unknown error occurred, please check the error payload for server response.";return new Dr(xr.UNKNOWN,t)}function JU(){return new Dr(xr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZU(){return new Dr(xr.CANCELED,"User canceled the upload/download.")}function e4(t){return new Dr(xr.INVALID_URL,"Invalid URL '"+t+"'.")}function t4(t){return new Dr(xr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function YE(t){return new Dr(xr.INVALID_ARGUMENT,t)}function qI(){return new Dr(xr.APP_DELETED,"The Firebase app was deleted.")}function n4(t){return new Dr(xr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ir{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ir.makeFromUrl(e,n)}catch{return new ir(e,"")}if(r.path==="")return r;throw t4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},m=n===QI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${s}/${y}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<E.length;w++){const T=E[w],S=T.regex.exec(e);if(S){const x=S[T.indices.bucket];let I=S[T.indices.path];I||(I=""),r=new ir(x,I),T.postModify(r);break}}if(r==null)throw e4(e);return r}}class r4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function s4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(d,l())},y)}function f(){i&&clearTimeout(i)}function d(y,...v){if(c){f();return}if(y){f(),u.call(null,y,...v);return}if(l()||o){f(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function m(y){p||(p=!0,f(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function i4(t){t(!1)}/**
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
 */function o4(t){return t!==void 0}function XE(t,e,n,r){if(r<e)throw YE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw YE(`Invalid value for '${t}'. Expected ${n} or less.`)}function a4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var eh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(eh||(eh={}));/**
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
 */function l4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class c4{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===eh.NO_ERROR,l=i.getStatus();if(!a||l4(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===eh.ABORT;r(!1,new Fc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Fc(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());o4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=qU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?qI():ZU();o(l)}else{const l=JU();o(l)}};this.canceled_?n(!1,new Fc(!1,null,!0)):this.backoffId_=s4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&i4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function u4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function h4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function f4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function d4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function p4(t,e,n,r,s,i,o=!0){const a=a4(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return f4(c,e),u4(c,n),h4(c,i),d4(c,r),new c4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function g4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function m4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class th{constructor(e,n){this._service=e,n instanceof ir?this._location=n:this._location=ir.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new th(e,n)}get root(){const e=new ir(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return m4(this._location.path)}get storage(){return this._service}get parent(){const e=g4(this._location.path);if(e===null)return null;const n=new ir(this._location.bucket,e);return new th(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw n4(e)}}function QE(t,e){const n=e==null?void 0:e[YU];return n==null?null:ir.makeFromBucketSpec(n,t)}class v4{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=QI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XU,this._maxUploadRetryTime=QU,this._requests=new Set,s!=null?this._bucket=ir.makeFromBucketSpec(s,this._host):this._bucket=QE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ir.makeFromBucketSpec(this._url,e):this._bucket=QE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){XE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){XE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new th(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new r4(qI());{const o=p4(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const qE="@firebase/storage",JE="0.11.2";/**
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
 */const y4="storage";function E4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new v4(n,r,s,e,Bs)}function _4(){Ir(new lr(y4,E4,"PUBLIC").setMultipleInstances(!0)),$n(qE,JE,""),$n(qE,JE,"esm2017")}_4();function JI(t){return OU(vb(t))}function w4(t){return(e,n)=>{const r=eD(e,n).run(()=>wn(t));tD.set(e,r),rD(r,e)}}function b4(t,{firebaseApp:e,modules:n=[]}){t.provide(mb,e);for(const r of n)t.use(r.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zi=typeof window<"u";function T4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const nt=Object.assign;function rd(t,e){const n={};for(const r in e){const s=e[r];n[r]=hr(s)?s.map(t):t(s)}return n}const Ka=()=>{},hr=Array.isArray,S4=/\/$/,I4=t=>t.replace(S4,"");function sd(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=x4(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function C4(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ZE(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function A4(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&No(e.matched[r],n.matched[s])&&ZI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function No(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ZI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!R4(t[n],e[n]))return!1;return!0}function R4(t,e){return hr(t)?e0(t,e):hr(e)?e0(e,t):t===e}function e0(t,e){return hr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function x4(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Sl;(function(t){t.pop="pop",t.push="push"})(Sl||(Sl={}));var Wa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wa||(Wa={}));function O4(t){if(!t)if(zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),I4(t)}const N4=/^[^#]+#/;function P4(t,e){return t.replace(N4,"#")+e}function D4(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const pf=()=>({left:window.pageXOffset,top:window.pageYOffset});function k4(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=D4(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function t0(t,e){return(history.state?history.state.position-e:-1)+t}const Dp=new Map;function M4(t,e){Dp.set(t,e)}function L4(t){const e=Dp.get(t);return Dp.delete(t),e}let F4=()=>location.protocol+"//"+location.host;function eC(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ZE(l,"")}return ZE(n,t)+r+s}function U4(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=eC(t,location),p=n.value,m=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=m?f.position-m.position:0}else r(d);s.forEach(v=>{v(n.value,p,{delta:y,type:Sl.pop,direction:y?y>0?Wa.forward:Wa.back:Wa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(nt({},f.state,{scroll:pf()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function n0(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?pf():null}}function $4(t){const{history:e,location:n}=window,r={value:eC(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:F4()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=nt({},e.state,n0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=nt({},s.value,e.state,{forward:l,scroll:pf()});i(u.current,u,!0);const h=nt({},n0(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function j4(t){t=O4(t);const e=$4(t),n=U4(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=nt({location:"",base:t,go:r,createHref:P4.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function B4(t){return typeof t=="string"||t&&typeof t=="object"}function tC(t){return typeof t=="string"||typeof t=="symbol"}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nC=Symbol("");var r0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(r0||(r0={}));function Po(t,e){return nt(new Error,{type:t,[nC]:!0},e)}function kr(t,e){return t instanceof Error&&nC in t&&(e==null||!!(t.type&e))}const s0="[^/]+?",V4={sensitive:!1,strict:!1,start:!0,end:!0},H4=/[.+*?^${}()[\]/\\]/g;function K4(t,e){const n=nt({},V4,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(H4,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=f;i.push({name:p,repeatable:m,optional:y});const g=v||s0;if(g!==s0){d+=10;try{new RegExp(`(${g})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+w.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),s+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(hr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=hr(v)?v.join("/"):v;if(!g)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function W4(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function G4(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=W4(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(i0(r))return 1;if(i0(s))return-1}return s.length-r.length}function i0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z4={type:0,value:""},Y4=/[a-zA-Z0-9_]/;function X4(t){if(!t)return[[]];if(t==="/")return[[z4]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Y4.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Q4(t,e,n){const r=K4(X4(t.path),n),s=nt(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function q4(t,e){const n=[],r=new Map;e=l0({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=J4(u);p.aliasOf=f&&f.record;const m=l0(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of E)y.push(nt({},p,{components:f?f.record.components:p.components,path:w,aliasOf:f?f.record:p}))}let v,g;for(const E of y){const{path:w}=E;if(h&&w[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";E.path=h.record.path+(w&&S+w)}if(v=Q4(E,h,m),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!a0(v)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)i(T[S],v,f&&f.children[S])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:Ka}function o(u){if(tC(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&G4(u,n[h])>=0&&(u.record.path!==n[h].record.path||!rC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!a0(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Po(1,{location:u});m=f.record.name,d=nt(o0(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&o0(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw Po(1,{location:u,currentLocation:h});m=f.record.name,d=nt({},h.params,u.params),p=f.stringify(d)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:e$(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function o0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function J4(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Z4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Z4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function a0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function e$(t){return t.reduce((e,n)=>nt(e,n.meta),{})}function l0(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rC(t,e){return e.children.some(n=>n===t||rC(t,n))}const sC=/#/g,t$=/&/g,n$=/\//g,r$=/=/g,s$=/\?/g,iC=/\+/g,i$=/%5B/g,o$=/%5D/g,oC=/%5E/g,a$=/%60/g,aC=/%7B/g,l$=/%7C/g,lC=/%7D/g,c$=/%20/g;function qm(t){return encodeURI(""+t).replace(l$,"|").replace(i$,"[").replace(o$,"]")}function u$(t){return qm(t).replace(aC,"{").replace(lC,"}").replace(oC,"^")}function kp(t){return qm(t).replace(iC,"%2B").replace(c$,"+").replace(sC,"%23").replace(t$,"%26").replace(a$,"`").replace(aC,"{").replace(lC,"}").replace(oC,"^")}function h$(t){return kp(t).replace(r$,"%3D")}function f$(t){return qm(t).replace(sC,"%23").replace(s$,"%3F")}function d$(t){return t==null?"":f$(t).replace(n$,"%2F")}function nh(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function p$(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(iC," "),o=i.indexOf("="),a=nh(o<0?i:i.slice(0,o)),l=o<0?null:nh(i.slice(o+1));if(a in e){let c=e[a];hr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function c0(t){let e="";for(let n in t){const r=t[n];if(n=h$(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hr(r)?r.map(i=>i&&kp(i)):[r&&kp(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function g$(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hr(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const m$=Symbol(""),u0=Symbol(""),gf=Symbol(""),cC=Symbol(""),Mp=Symbol("");function ua(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ps(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Po(4,{from:n,to:e})):h instanceof Error?a(h):B4(h)?a(Po(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function id(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(v$(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ps(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=T4(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ps(f,n,r,i,o)()}))}}return s}function v$(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function h0(t){const e=On(gf),n=On(cC),r=Ut(()=>e.resolve(fe(t.to))),s=Ut(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(No.bind(null,u));if(f>-1)return f;const d=f0(l[c-2]);return c>1&&f0(u)===d&&h[h.length-1].path!==d?h.findIndex(No.bind(null,l[c-2])):f}),i=Ut(()=>s.value>-1&&w$(n.params,r.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&ZI(n.params,r.value.params));function a(l={}){return _$(l)?e[fe(t.replace)?"replace":"push"](fe(t.to)).catch(Ka):Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const y$=st({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:h0,setup(t,{slots:e}){const n=fr(h0(t)),{options:r}=On(gf),s=Ut(()=>({[d0(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[d0(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ah("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),E$=y$;function _$(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w$(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hr(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function f0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const d0=(t,e,n)=>t??e??n,b$=st({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=On(Mp),s=Ut(()=>t.route||r.value),i=On(u0,0),o=Ut(()=>{let c=fe(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ut(()=>s.value.matched[o.value]);io(u0,Ut(()=>o.value+1)),io(m$,a),io(Mp,s);const l=wn();return Wr(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!No(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return p0(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Ah(f,nt({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return p0(n.default,{Component:y,route:c})||y}}});function p0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uC=b$;function T$(t){const e=q4(t.routes,t),n=t.parseQuery||p$,r=t.stringifyQuery||c0,s=t.history,i=ua(),o=ua(),a=ua(),l=Z0(us);let c=us;zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rd.bind(null,M=>""+M),h=rd.bind(null,d$),f=rd.bind(null,nh);function d(M,G){let H,ne;return tC(M)?(H=e.getRecordMatcher(M),ne=G):ne=M,e.addRoute(ne,H)}function p(M){const G=e.getRecordMatcher(M);G&&e.removeRoute(G)}function m(){return e.getRoutes().map(M=>M.record)}function y(M){return!!e.getRecordMatcher(M)}function v(M,G){if(G=nt({},G||l.value),typeof M=="string"){const _=sd(n,M,G.path),b=e.resolve({path:_.path},G),N=s.createHref(_.fullPath);return nt(_,b,{params:f(b.params),hash:nh(_.hash),redirectedFrom:void 0,href:N})}let H;if("path"in M)H=nt({},M,{path:sd(n,M.path,G.path).path});else{const _=nt({},M.params);for(const b in _)_[b]==null&&delete _[b];H=nt({},M,{params:h(M.params)}),G.params=h(G.params)}const ne=e.resolve(H,G),we=M.hash||"";ne.params=u(f(ne.params));const Xe=C4(r,nt({},M,{hash:u$(we),path:ne.path})),Ie=s.createHref(Xe);return nt({fullPath:Xe,hash:we,query:r===c0?g$(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:Ie})}function g(M){return typeof M=="string"?sd(n,M,l.value.path):nt({},M)}function E(M,G){if(c!==M)return Po(8,{from:G,to:M})}function w(M){return x(M)}function T(M){return w(nt(g(M),{replace:!0}))}function S(M){const G=M.matched[M.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let ne=typeof H=="function"?H(M):H;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=g(ne):{path:ne},ne.params={}),nt({query:M.query,hash:M.hash,params:"path"in ne?{}:M.params},ne)}}function x(M,G){const H=c=v(M),ne=l.value,we=M.state,Xe=M.force,Ie=M.replace===!0,_=S(H);if(_)return x(nt(g(_),{state:typeof _=="object"?nt({},we,_.state):we,force:Xe,replace:Ie}),G||H);const b=H;b.redirectedFrom=G;let N;return!Xe&&A4(r,ne,H)&&(N=Po(16,{to:b,from:ne}),ft(ne,ne,!0,!1)),(N?Promise.resolve(N):C(b,ne)).catch(F=>kr(F)?kr(F,2)?F:$e(F):q(F,b,ne)).then(F=>{if(F){if(kr(F,2))return x(nt({replace:Ie},g(F.to),{state:typeof F.to=="object"?nt({},we,F.to.state):we,force:Xe}),G||b)}else F=L(b,ne,!0,Ie,we);return P(b,ne,F),F})}function I(M,G){const H=E(M,G);return H?Promise.reject(H):Promise.resolve()}function C(M,G){let H;const[ne,we,Xe]=S$(M,G);H=id(ne.reverse(),"beforeRouteLeave",M,G);for(const _ of ne)_.leaveGuards.forEach(b=>{H.push(ps(b,M,G))});const Ie=I.bind(null,M,G);return H.push(Ie),$i(H).then(()=>{H=[];for(const _ of i.list())H.push(ps(_,M,G));return H.push(Ie),$i(H)}).then(()=>{H=id(we,"beforeRouteUpdate",M,G);for(const _ of we)_.updateGuards.forEach(b=>{H.push(ps(b,M,G))});return H.push(Ie),$i(H)}).then(()=>{H=[];for(const _ of M.matched)if(_.beforeEnter&&!G.matched.includes(_))if(hr(_.beforeEnter))for(const b of _.beforeEnter)H.push(ps(b,M,G));else H.push(ps(_.beforeEnter,M,G));return H.push(Ie),$i(H)}).then(()=>(M.matched.forEach(_=>_.enterCallbacks={}),H=id(Xe,"beforeRouteEnter",M,G),H.push(Ie),$i(H))).then(()=>{H=[];for(const _ of o.list())H.push(ps(_,M,G));return H.push(Ie),$i(H)}).catch(_=>kr(_,8)?_:Promise.reject(_))}function P(M,G,H){for(const ne of a.list())ne(M,G,H)}function L(M,G,H,ne,we){const Xe=E(M,G);if(Xe)return Xe;const Ie=G===us,_=zi?history.state:{};H&&(ne||Ie?s.replace(M.fullPath,nt({scroll:Ie&&_&&_.scroll},we)):s.push(M.fullPath,we)),l.value=M,ft(M,G,H,Ie),$e()}let U;function k(){U||(U=s.listen((M,G,H)=>{if(!St.listening)return;const ne=v(M),we=S(ne);if(we){x(nt(we,{replace:!0}),ne).catch(Ka);return}c=ne;const Xe=l.value;zi&&M4(t0(Xe.fullPath,H.delta),pf()),C(ne,Xe).catch(Ie=>kr(Ie,12)?Ie:kr(Ie,2)?(x(Ie.to,ne).then(_=>{kr(_,20)&&!H.delta&&H.type===Sl.pop&&s.go(-1,!1)}).catch(Ka),Promise.reject()):(H.delta&&s.go(-H.delta,!1),q(Ie,ne,Xe))).then(Ie=>{Ie=Ie||L(ne,Xe,!1),Ie&&(H.delta&&!kr(Ie,8)?s.go(-H.delta,!1):H.type===Sl.pop&&kr(Ie,20)&&s.go(-1,!1)),P(ne,Xe,Ie)}).catch(Ka)}))}let O=ua(),J=ua(),j;function q(M,G,H){$e(M);const ne=J.list();return ne.length?ne.forEach(we=>we(M,G,H)):console.error(M),Promise.reject(M)}function ie(){return j&&l.value!==us?Promise.resolve():new Promise((M,G)=>{O.add([M,G])})}function $e(M){return j||(j=!M,k(),O.list().forEach(([G,H])=>M?H(M):G()),O.reset()),M}function ft(M,G,H,ne){const{scrollBehavior:we}=t;if(!zi||!we)return Promise.resolve();const Xe=!H&&L4(t0(M.fullPath,0))||(ne||!H)&&history.state&&history.state.scroll||null;return Ni().then(()=>we(M,G,Xe)).then(Ie=>Ie&&k4(Ie)).catch(Ie=>q(Ie,M,G))}const Ke=M=>s.go(M);let Fe;const ut=new Set,St={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:w,replace:T,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ie,install(M){const G=this;M.component("RouterLink",E$),M.component("RouterView",uC),M.config.globalProperties.$router=G,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(l)}),zi&&!Fe&&l.value===us&&(Fe=!0,w(s.location).catch(we=>{}));const H={};for(const we in us)H[we]=Ut(()=>l.value[we]);M.provide(gf,G),M.provide(cC,fr(H)),M.provide(Mp,l);const ne=M.unmount;ut.add(M),M.unmount=function(){ut.delete(M),ut.size<1&&(c=us,U&&U(),U=null,l.value=us,Fe=!1,j=!1),ne()}}};return St}function $i(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function S$(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>No(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>No(c,l))||s.push(l))}return[n,r,s]}function I$(){return On(gf)}const C$={class:"fixed inset-0 flex items-end justify-center p-6 px-4 py-6 pointer-events-none"},A$={class:"w-full max-w-sm"},R$={class:"px-4 py-2 -mx-3"},x$={class:"mx-3"},O$={class:"font-semibold text-white"},N$={class:"text-sm text-gray-100"},g0=st({__name:"Notification",props:{group:null,color:null},setup(t){return(e,n)=>(ge(),bt(fe(Ld),{group:t.group},{default:At(()=>[Te("div",C$,[Te("div",A$,[pe(fe(Md),{enter:"transform ease-out duration-300 transition","enter-from":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4","enter-to":"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-500","leave-from":"opacity-100","leave-to":"opacity-0",move:"transition duration-500","move-delay":"delay-300"},{default:At(({notifications:r})=>[(ge(!0),at(lt,null,Uo(r,s=>(ge(),at("div",{class:Ri("flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-opacity-75 rounded-lg shadow-md "+t.color),key:s.id},[Te("div",R$,[Te("div",x$,[Te("span",O$,$t(s.title),1),Te("p",N$,$t(s.text),1)])])],2))),128))]),_:1})])])]),_:1},8,["group"]))}}),P$=st({__name:"NotificationGroup",setup(t){return(e,n)=>(ge(),at(lt,null,[pe(g0,{group:"error",color:"bg-red-800"}),pe(g0,{group:"success",color:"bg-green-800"})],64))}}),D$=st({__name:"App",setup(t){return(e,n)=>(ge(),at(lt,null,[pe(fe(uC)),pe(P$)],64))}});const k$={apiKey:"AIzaSyAjt3RyE1KkK110jxZQUrm9kjfclWO126k",authDomain:"personal-website-c3482.firebaseapp.com",projectId:"personal-website-c3482",storageBucket:"personal-website-c3482.appspot.com",messagingSenderId:"110986644823",appId:"1:110986644823:web:4081c484521ba6b37bc212",measurementId:"G-PF7D6JKSC3"},hC=Nw(k$);/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let fC;const mf=t=>fC=t,dC=Symbol();function Lp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ga;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ga||(Ga={}));function M$(){const t=hh(!0),e=t.run(()=>wn({}));let n=[],r=[];const s=pi({install(i){mf(s),s._a=i,i.provide(dC,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!AP?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const pC=()=>{};function m0(t,e,n,r=pC){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qp()&&$0(s),s}function ji(t,...e){t.slice().forEach(n=>{n(...e)})}function Fp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Lp(s)&&Lp(r)&&t.hasOwnProperty(n)&&!Ct(r)&&!yr(r)?t[n]=Fp(s,r):t[n]=r}return t}const L$=Symbol();function F$(t){return!Lp(t)||!t.hasOwnProperty(L$)}const{assign:fs}=Object;function U$(t){return!!(Ct(t)&&t.effect)}function $$(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=t_(n.state.value[t]);return fs(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=pi(Ut(()=>{mf(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=gC(t,c,e,n,r,!0),l}function gC(t,e,n={},r,s,i){let o;const a=fs({actions:{}},n),l={deep:!0};let c,u,h=pi([]),f=pi([]),d;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),wn({});let m;function y(x){let I;c=u=!1,typeof x=="function"?(x(r.state.value[t]),I={type:Ga.patchFunction,storeId:t,events:d}):(Fp(r.state.value[t],x),I={type:Ga.patchObject,payload:x,storeId:t,events:d});const C=m=Symbol();Ni().then(()=>{m===C&&(c=!0)}),u=!0,ji(h,I,r.state.value[t])}const v=i?function(){const{state:I}=n,C=I?I():{};this.$patch(P=>{fs(P,C)})}:pC;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function E(x,I){return function(){mf(r);const C=Array.from(arguments),P=[],L=[];function U(J){P.push(J)}function k(J){L.push(J)}ji(f,{args:C,name:x,store:T,after:U,onError:k});let O;try{O=I.apply(this&&this.$id===t?this:T,C)}catch(J){throw ji(L,J),J}return O instanceof Promise?O.then(J=>(ji(P,J),J)).catch(J=>(ji(L,J),Promise.reject(J))):(ji(P,O),O)}}const w={_p:r,$id:t,$onAction:m0.bind(null,f),$patch:y,$reset:v,$subscribe(x,I={}){const C=m0(h,x,I.detached,()=>P()),P=o.run(()=>Wr(()=>r.state.value[t],L=>{(I.flush==="sync"?u:c)&&x({storeId:t,type:Ga.direct,events:d},L)},fs({},l,I)));return C},$dispose:g},T=fr(w);r._s.set(t,T);const S=r._e.run(()=>(o=hh(),o.run(()=>e())));for(const x in S){const I=S[x];if(Ct(I)&&!U$(I)||yr(I))i||(p&&F$(I)&&(Ct(I)?I.value=p[x]:Fp(I,p[x])),r.state.value[t][x]=I);else if(typeof I=="function"){const C=E(x,I);S[x]=C,a.actions[x]=I}}return fs(T,S),fs(Ue(T),S),Object.defineProperty(T,"$state",{get:()=>r.state.value[t],set:x=>{y(I=>{fs(I,x)})}}),r._p.forEach(x=>{fs(T,o.run(()=>x({store:T,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(T.$state,p),c=!0,u=!0,T}function mC(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Nr();return a=a||c&&On(dC,null),a&&mf(a),a=fC,a._s.has(r)||(i?gC(r,e,s,a):$$(r,s,a)),a._s.get(r)}return o.$id=r,o}function $s(t){{t=Ue(t);const e={};for(const n in t){const r=t[n];(Ct(r)||yr(r))&&(e[n]=sg(t,n))}return e}}const v0=(t,e)=>{const n=t.storage||sessionStorage,r=t.key||e.$id;if(t.paths){const s=t.paths.reduce((i,o)=>(i[o]=e.$state[o],i),{});n.setItem(r,JSON.stringify(s))}else n.setItem(r,JSON.stringify(e.$state))};var j$=({options:t,store:e})=>{var n,r,s,i;if((n=t.persist)!=null&&n.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(s=(r=t.persist)==null?void 0:r.strategies)!=null&&s.length?(i=t.persist)==null?void 0:i.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),v0(l,e))}),e.$subscribe(()=>{a.forEach(l=>{v0(l,e)})})}};const vC=M$();vC.use(j$);const ha=pb(hC),Uc=JI(),y0={"auth/user-not-found":"Unknown user","auth/invalid-email":"Invalid e-mail address","auth/email-already-in-use":"E-mail already in use","auth/wrong-password":"Invalid password","auth/too-many-requests":"Temporarily blocked","auth/weak-password":"Weak password"},Xr=mC("auth",{state:()=>({currentUser:void 0,loading:!1}),actions:{async getUser(t){const e=(await zI(Lc(Uc,"/users/"+t))).data();this.currentUser={name:"Unknown",...e}},async login(t,e){try{this.loading=!0;const{user:n}=await fN(ha,t,e);await this.getUser(n.uid),this.loading=!1,Fr.push({name:"dashboard",query:{success:"Successfully logged in"}})}catch(n){Fr.push({query:{error:y0[n.code]||"Something went wrong"}})}},async register(t,e,n){try{this.loading=!0;const{user:r}=await hN(ha,t,e);await zE(Lc(Uc,"/users/"+r.uid),{name:n}),await this.getUser(r.uid),this.loading=!1,Fr.push({name:"dashboard",query:{success:"Successfully created your account"}})}catch(r){Fr.push({query:{error:y0[r.code]||"Something went wrong"}})}},async updateUser(t){const{currentUser:e}=ha;e&&(await zE(Lc(Uc,"/users/"+e.uid),t),await this.getUser(e.uid),Fr.push({query:{success:"Successfully updated your profile"}}))},async logout(){await pN(ha),this.currentUser=void 0,Fr.push({name:"home",query:{success:"Successfully logged out"}})},async deleteAccount(){const{currentUser:t}=ha;t&&(await GU(Lc(Uc,"/users/"+t.uid)),await gN(t),this.currentUser=void 0,Fr.push({name:"home",query:{success:"Successfully deleted your account"}}))}},persist:{enabled:!0}}),yC={name:"Sander Derks",role:"Full-Stack Developer",service:"Software Development",location:{country:"The Netherlands",city:"Nijmegen"},description:["Welcome to my website!","Here you'll soon find a lot of resources from me."],websites:[{name:"GitHub",url:"https://github.com/sanderderks",logo:"github.png"},{name:"LinkedIn",url:"https://www.linkedin.com/in/sander-derks/",logo:"linkedin.png"}]},B$=[{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0}],V$=[{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0}],Zn={required:{test:t=>!!t.length,error:"Required"},email:{test:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),error:"Must be an e-mail address"},minLength3:{test:t=>t.length>=3,error:"Must be at least 3 characters"},minLength6:{test:t=>t.length>=6,error:"Must be at least 6 characters"}},E0=async(t,e)=>{const n=await WU(RU(t,e));return Promise.all(n.docs.map(async r=>{const s=r.data(),i=Object.entries(s).filter(([,o])=>o instanceof Array&&o[0]instanceof Nn);if(i.length){const o=i.map(async([l,c])=>{const h=(await Promise.all(c.map(f=>zI(f)))).map(f=>f.data());return{[l]:Up(h)}}),a=await Promise.all(o);return{...s,...a.reduce((l,c)=>({...l,...c}),{})}}else return s}))},Up=t=>t.sort((e,n)=>(n.order||0)-(e.order||0)),H$=(t,e,n,r)=>{setTimeout(()=>{t.forEach((s,i)=>{setTimeout(()=>{r(s)},i*n)})},e)},_0=JI(),rc=mC("main",{state:()=>({profile:yC,menuItems:V$,projects:B$,online:!0}),getters:{filteredProjects:t=>t.projects.filter(e=>!e.loading),filteredMenuItems:t=>t.menuItems.filter(e=>!e.loading)},actions:{async fetchAll(){this.online&&(!this.filteredProjects.length||!this.filteredMenuItems.length)&&await Promise.all([this.fetchProjects(),this.fetchMenuItems()])},async fetchProjects(){const t=await E0(_0,"projects");this.projects=t.length?Up(t):this.projects},async fetchMenuItems(){const t=await E0(_0,"menuItems");this.menuItems=t.length?Up(t):this.menuItems},moveProject(t,e){const n=this.projects.splice(t,1)[0];this.projects.splice(e,0,n)}},persist:{enabled:!0}}),Jm=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},K$={},W$={class:"bg-black text-white shadow-md py-4"},G$={class:"container mx-auto text-center"};function z$(t,e){return ge(),at("footer",W$,[Te("div",G$,[Te("p",null,"© "+$t(new Date().getFullYear())+" Sander Derks. All rights reserved.",1)])])}const Y$=Jm(K$,[["render",z$]]),X$=""+new URL("bundle.css",import.meta.url).href;var Q$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q$(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function EC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}const ta=EC(VR),{createElementVNode:J$,openBlock:Z$,createElementBlock:ej}=ta;var tj=function(e,n){return Z$(),ej("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[J$("path",{"fill-rule":"evenodd",d:"M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z","clip-rule":"evenodd"})])};const{createElementVNode:w0,openBlock:nj,createElementBlock:rj}=ta;var sj=function(e,n){return nj(),rj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[w0("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),w0("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})])};const{createElementVNode:ij,openBlock:oj,createElementBlock:aj}=ta;var lj=function(e,n){return oj(),aj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[ij("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])};const{createElementVNode:cj,openBlock:uj,createElementBlock:hj}=ta;var fj=function(e,n){return uj(),hj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[cj("path",{"fill-rule":"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z","clip-rule":"evenodd"})])};const{createElementVNode:dj,openBlock:pj,createElementBlock:gj}=ta;var mj=function(e,n){return pj(),gj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[dj("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])},_C=tj,vj=sj,yj=lj,Ej=fj,_j=mj;const wj=["href"],bj=st({__name:"DropDown",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){const e=Xr(),{currentUser:n}=$s(e),{menuItems:r}=$s(rc());return(s,i)=>{const o=Ol("RouterLink");return ge(),at(lt,null,[_d(Te("div",{class:"md:hidden w-screen h-screen z-10 bg-gray-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:i[0]||(i[0]=(...a)=>t.toggle&&t.toggle(...a))},null,512),[[gu,t.isOpen]]),_d(Te("div",{class:"md:hidden absolute z-20 w-3/4 left-1/2 transform -translate-x-1/2 mt-2 p-4 py-8 bg-gray-900 border border-indigo-600 rounded-xl",onClick:i[1]||(i[1]=(...a)=>t.toggle&&t.toggle(...a))},[(ge(!0),at(lt,null,Uo(fe(r),a=>(ge(),at("a",{href:a.url,class:"button-outlined-list-primary flex flex-column justify-center text-lg first:rounded-t-xl"},[a.loading?(ge(),bt(fe(_C),{key:0,class:"mt-1 mr-2.5 h-5 w-5 animate-spin"})):Gr("",!0),Fn(" "+$t(a.name),1)],8,wj))),256)),fe(n)?(ge(),bt(o,{key:0,to:{name:"dashboard"},class:"button-outlined-list-primary block text-lg first:rounded-t-xl"},{default:At(()=>[Fn(" Dashboard ")]),_:1})):Gr("",!0),fe(n)?(ge(),bt(o,{key:1,to:{},class:"button-outlined-list-danger flex flex-column justify-center text-lg rounded-b-xl first:rounded-t-xl",onClick:fe(e).logout},{default:At(()=>[Fn(" Logout ")]),_:1},8,["onClick"])):(ge(),bt(o,{key:2,to:{name:"login"},class:"button-outlined-list-secondary block text-lg rounded-b-xl first:rounded-t-xl"},{default:At(()=>[Fn(" Login ")]),_:1}))],512),[[gu,t.isOpen]])],64)}}}),Tj={key:0,class:"col-span-5 flex items-center justify-between md:justify-around mt-5 gap-3 flex-wrap"},Sj=["href"],Ij={class:"flex justify-center"},Cj=st({__name:"Menu",setup(t){const e=Xr(),{currentUser:n}=$s(e),{menuItems:r}=$s(rc()),s=wn(),i=wn(!1),o=()=>{i.value=!i.value,i.value&&Ni(()=>{var a;(a=s.value)==null||a.scrollIntoView({behavior:"smooth",block:"center"})})};return(a,l)=>fe(r).length?(ge(),at("div",Tj,[(ge(!0),at(lt,null,Uo(fe(r),c=>(ge(),at("a",{class:"button-outlined-primary hidden md:flex flex-column grow justify-center",type:"button",href:c.url},[c.loading?(ge(),bt(fe(_C),{key:0,class:"my-1 mr-2.5 h-5 w-5 animate-spin"})):Gr("",!0),Fn(" "+$t(c.name),1)],8,Sj))),256)),fe(n)?(ge(),at("button",{key:0,class:"button-outlined-danger hidden md:flex flex-column grow justify-center",type:"button",onClick:l[0]||(l[0]=(...c)=>fe(e).logout&&fe(e).logout(...c))}," Logout ")):Gr("",!0),Te("div",{ref_key:"dropdown",ref:s,class:"dropdown w-full"},[Te("button",{class:"button-outlined-primary md:hidden w-full",type:"button",onClick:o},[Te("div",Ij,[pe(fe(yj),{class:"mt-0.5 mr-2.5 h-5 w-5"}),Fn(" Menu ")])]),pe(bj,{"is-open":i.value,toggle:()=>i.value=!i.value},null,8,["is-open","toggle"])],512)])):Gr("",!0)}}),Aj={class:"lg:flex lg:items-center lg:justify-between"},Rj={class:"min-w-0 flex-1"},xj=["src","alt"],Oj={class:"title-primary"},Nj={class:"title-secondary"},Pj={class:"title-tertiary mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap xl:space-x-6"},Dj={class:"mt-2 flex items-center"},kj={class:"mt-2 flex items-center"},Mj={class:"grid grid-cols-5 lg:w-1/2 justify-stretch mt-8 lg:mt-0 p-8 bg-black bg-opacity-50 text-indigo-300 rounded-3xl"},Lj={class:"col-span-5 md:col-span-4 space-y-2"},Fj={class:"font-semibold text-base first:font-bold first:text-lg"},Uj={class:"hidden md:visible col-span-5 md:col-span-1 md:flex items-center justify-center md:justify-end"},$j=st({__name:"Header",setup(t){const{currentUser:e}=$s(Xr()),{profile:n}=$s(rc());return(r,s)=>{const i=Ol("RouterLink");return ge(),at("div",Aj,[Te("div",Rj,[pe(i,{to:{name:"home"}},{default:At(()=>[Te("img",{class:"w-48 h-48 rounded-full animation-scale mb-4 cursor-pointer",src:fe(X$),alt:fe(n).name},null,8,xj)]),_:1}),Te("h1",Oj,$t(fe(n).name),1),Te("h2",Nj,$t(fe(n).service),1),Te("div",Pj,[Te("div",Dj,[pe(fe(vj),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Fn(" "+$t(fe(n).role),1)]),Te("div",kj,[pe(fe(Ej),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Fn(" "+$t(fe(n).location.city)+", "+$t(fe(n).location.country),1)])])]),Te("div",Mj,[Te("div",Lj,[(ge(!0),at(lt,null,Uo(fe(n).description,o=>(ge(),at("p",Fj,$t(o),1))),256))]),Te("div",Uj,[pe(i,{to:{name:fe(e)?"dashboard":"login"}},{default:At(()=>[pe(fe(_j),{class:"w-16 h-16 rounded-full border-2 text-indigo-600 border-indigo-600 animation-scale"})]),_:1},8,["to"])]),pe(Cj)])])}}}),jj={class:"min-h-screen bg-gradient-to-t from-black to-blue-900 via-gray-800"},Bj={class:"mx-0 sm:mx-16 p-5 sm:p-14 rounded-bl-3xl rounded-br-3xl text-white bg-blue-gray-900 bg-opacity-50 bg-gradient-to-b from-transparent to-black via-purple-900 border-opacity-100"},sc=st({__name:"Page",setup(t){const{fetchAll:e}=rc(),n=I$(),r=Ut(()=>n.currentRoute.value.query.success),s=Ut(()=>n.currentRoute.value.query.error),i=()=>{r.value?Bv({group:"success",title:"Success",text:r.value}):s.value&&Bv({group:"error",title:"Error",text:s.value}),n.push({query:void 0})};return Wr(()=>[r.value,s.value],()=>{i()}),js(()=>{e(),i()}),(o,a)=>(ge(),at(lt,null,[Te("div",jj,[Te("div",Bj,[Te("header",null,[o.$slots.header?ai(o.$slots,"header",{key:0}):(ge(),bt($j,{key:1}))]),Te("main",null,[ai(o.$slots,"content")])])]),Te("footer",null,[o.$slots.footer?ai(o.$slots,"footer",{key:0}):(ge(),bt(Y$,{key:1}))])],64))}}),Vj=["href"],Hj={class:"text-2xl group-hover/bubble:underline font-bold mb-2"},Kj={key:1,class:"text-2xl font-bold mb-2"},Wj={key:2,class:"text-gray-400 mb-2"},ic=st({__name:"Bubble",props:{name:null,url:null,description:null,buttonText:null,loading:{type:Boolean}},setup(t){return(e,n)=>(ge(),at("div",{class:Ri("group/bubble color-primary rounded-3xl p-10 "+(t.url?"hover:bg-opacity-30":"")+(t.loading?"animate-pulse":""))},[t.url?(ge(),at("a",{key:0,href:t.url},[Te("h2",Hj,$t(t.name),1)],8,Vj)):(ge(),at("h2",Kj,$t(t.name),1)),t.description?(ge(),at("p",Wj,$t(t.description),1)):Gr("",!0),ai(e.$slots,"default")],2))}}),Gj={key:0,class:"text-red-600"},zj=st({__name:"ErrorMessage",props:{name:null,state:null},setup(t){const e=t,n=Ut(()=>e.state[e.name].error);return(r,s)=>fe(n)&&!t.state[t.name].length?(ge(),at("p",Gj,$t(fe(n)),1)):Gr("",!0)}}),Yj={class:"mb-4"},Xj=["for"],Qj=["value","id","type","placeholder"],go=st({__name:"TextField",props:{name:null,displayName:null,placeholder:null,state:null,inputProps:null,rules:null},emits:["update","error"],setup(t,{expose:e,emit:n}){const r=t,s=Ut(()=>{const a=r.state[r.name].value;return a.endsWith("  ")?a.trim():a}),i=a=>{const l=a.target.value;n("update",l),o(l)},o=async a=>{const l=a||s.value,c=r.rules.filter(u=>!u.test(l)).map(u=>u.error);n("error",c[0]||"")};return e({test:o}),(a,l)=>{var c;return ge(),at("div",Yj,[Te("label",{class:"block text-sm font-bold mb-2",for:t.name},$t(t.displayName),9,Xj),Te("input",{ref:"input",value:fe(s),class:"input-field",id:t.name,type:((c=t.inputProps)==null?void 0:c.type)||"text",placeholder:t.placeholder,onInput:i},null,40,Qj),pe(zj,{name:t.name,state:t.state},null,8,["name","state"])])}}}),qj={class:"flex flex-col items-center content-center"},Jj={class:"flex gap-3 mt-10 flex-wrap"},Zj=Te("button",{class:"button-outlined-primary w-full",type:"submit"}," Save ",-1),eB=st({__name:"Dashboard",setup(t){var s;const e=Xr(),{currentUser:n}=$s(e),r=fr({name:{value:((s=n==null?void 0:n.value)==null?void 0:s.name)||"Unknown",error:""}});return(i,o)=>(ge(),bt(sc,null,{content:At(()=>[fe(n)?(ge(),bt(ic,{key:0,class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Welcome "+fe(n).name},{default:At(()=>[Te("div",qj,[Te("form",{class:"w-full lg:w-1/2 px-8 pt-6 pb-8 mb-4",onSubmit:o[3]||(o[3]=xh(a=>fe(e).updateUser({name:r.name.value}),["prevent"]))},[pe(go,{ref:"name",name:"name","display-name":"First Name",placeholder:"Someone",state:r,rules:[fe(Zn).required,fe(Zn).minLength3],onUpdate:o[0]||(o[0]=a=>r.name.value=a),onError:o[1]||(o[1]=a=>r.name.error=a)},null,8,["state","rules"]),Te("div",Jj,[Zj,Te("button",{class:"button-outlined-danger w-full",type:"button",onClick:o[2]||(o[2]=a=>fe(e).deleteAccount())}," Delete account ")])],32)])]),_:1},8,["name"])):Gr("",!0)]),_:1}))}}),tB=st({__name:"Dashboard",setup(t){return(e,n)=>(ge(),bt(eB))}}),nB=["href"],rB={key:1},sB=st({__name:"ColororedButton",props:{text:null,url:null,color:null},setup(t){return(e,n)=>(ge(),at("button",{class:"mt-3 md:mt-0 text-white font-bold py-2 px-4 rounded-full",style:ko({backgroundColor:t.color})},[t.url?(ge(),at("a",{key:0,href:t.url},$t(t.text),9,nB)):(ge(),at("p",rB,$t(t.text),1))],4))}});const iB=Jm(sB,[["__scopeId","data-v-a9693f67"]]);var $p={},oB={get exports(){return $p},set exports(t){$p=t}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function b0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b0(Object(n),!0).forEach(function(r){aB(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tu=function(e){return typeof e}:tu=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tu(t)}function aB(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xn(){return Xn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xn.apply(this,arguments)}function lB(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function cB(t,e){if(t==null)return{};var n=lB(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function uB(t){return hB(t)||fB(t)||dB(t)||pB()}function hB(t){if(Array.isArray(t))return jp(t)}function fB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dB(t,e){if(t){if(typeof t=="string")return jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(t,e)}}function jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gB="1.14.0";function Qr(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var is=Qr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),oc=Qr(/Edge/i),T0=Qr(/firefox/i),za=Qr(/safari/i)&&!Qr(/chrome/i)&&!Qr(/android/i),wC=Qr(/iP(ad|od|hone)/i),mB=Qr(/chrome/i)&&Qr(/android/i),bC={capture:!1,passive:!1};function je(t,e,n){t.addEventListener(e,n,!is&&bC)}function Le(t,e,n){t.removeEventListener(e,n,!is&&bC)}function rh(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function vB(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Jn(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&rh(t,e):rh(t,e))||r&&t===n)return t;if(t===n)break}while(t=vB(t))}return null}var S0=/\s+/g;function It(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(S0," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(S0," ")}}function oe(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function fi(t,e){var n="";if(typeof t=="string")n=t;else do{var r=oe(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(n)}function TC(t,e,n){if(t){var r=t.getElementsByTagName(e),s=0,i=r.length;if(n)for(;s<i;s++)n(r[s],s);return r}return[]}function Tr(){var t=document.scrollingElement;return t||document.documentElement}function Et(t,e,n,r,s){if(!(!t.getBoundingClientRect&&t!==window)){var i,o,a,l,c,u,h;if(t!==window&&t.parentNode&&t!==Tr()?(i=t.getBoundingClientRect(),o=i.top,a=i.left,l=i.bottom,c=i.right,u=i.height,h=i.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(s=s||t.parentNode,!is))do if(s&&s.getBoundingClientRect&&(oe(s,"transform")!=="none"||n&&oe(s,"position")!=="static")){var f=s.getBoundingClientRect();o-=f.top+parseInt(oe(s,"border-top-width")),a-=f.left+parseInt(oe(s,"border-left-width")),l=o+i.height,c=a+i.width;break}while(s=s.parentNode);if(r&&t!==window){var d=fi(s||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,h/=p,u/=m,l=o+u,c=a+h)}return{top:o,left:a,bottom:l,right:c,width:h,height:u}}}function I0(t,e,n){for(var r=bs(t,!0),s=Et(t)[e];r;){var i=Et(r)[n],o=void 0;if(n==="top"||n==="left"?o=s>=i:o=s<=i,!o)return r;if(r===Tr())break;r=bs(r,!1)}return!1}function Do(t,e,n,r){for(var s=0,i=0,o=t.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==be.ghost&&(r||o[i]!==be.dragged)&&Jn(o[i],n.draggable,t,!1)){if(s===e)return o[i];s++}i++}return null}function Zm(t,e){for(var n=t.lastElementChild;n&&(n===be.ghost||oe(n,"display")==="none"||e&&!rh(n,e));)n=n.previousElementSibling;return n||null}function Nt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==be.clone&&(!e||rh(t,e))&&n++;return n}function C0(t){var e=0,n=0,r=Tr();if(t)do{var s=fi(t),i=s.a,o=s.d;e+=t.scrollLeft*i,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function yB(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function bs(t,e){if(!t||!t.getBoundingClientRect)return Tr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var s=oe(n);if(n.clientWidth<n.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return Tr();if(r||e)return n;r=!0}}while(n=n.parentNode);return Tr()}function EB(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function od(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ya;function SC(t,e){return function(){if(!Ya){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),Ya=setTimeout(function(){Ya=void 0},e)}}}function _B(){clearTimeout(Ya),Ya=void 0}function IC(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function ev(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function A0(t,e){oe(t,"position","absolute"),oe(t,"top",e.top),oe(t,"left",e.left),oe(t,"width",e.width),oe(t,"height",e.height)}function ad(t){oe(t,"position",""),oe(t,"top",""),oe(t,"left",""),oe(t,"width",""),oe(t,"height","")}var un="Sortable"+new Date().getTime();function wB(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(s){if(!(oe(s,"display")==="none"||s===be.ghost)){t.push({target:s,rect:Et(s)});var i=Or({},t[t.length-1].rect);if(s.thisAnimationDuration){var o=fi(s,!0);o&&(i.top-=o.f,i.left-=o.e)}s.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(yB(t,{target:r}),1)},animateAll:function(r){var s=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,h=Et(c),f=c.prevFromRect,d=c.prevToRect,p=a.rect,m=fi(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&od(f,h)&&!od(u,h)&&(p.top-h.top)/(p.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(l=TB(p,f,d,s.options)),od(h,u)||(c.prevFromRect=u,c.prevToRect=h,l||(l=s.options.animation),s.animate(c,p,h,l)),l&&(i=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,s,i,o){if(o){oe(r,"transition",""),oe(r,"transform","");var a=fi(this.el),l=a&&a.a,c=a&&a.d,u=(s.left-i.left)/(l||1),h=(s.top-i.top)/(c||1);r.animatingX=!!u,r.animatingY=!!h,oe(r,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=bB(r),oe(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),oe(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){oe(r,"transition",""),oe(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function bB(t){return t.offsetWidth}function TB(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var Bi=[],ld={initializeByDefault:!0},ac={mount:function(e){for(var n in ld)ld.hasOwnProperty(n)&&!(n in e)&&(e[n]=ld[n]);Bi.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Bi.push(e)},pluginEvent:function(e,n,r){var s=this;this.eventCanceled=!1,r.cancel=function(){s.eventCanceled=!0};var i=e+"Global";Bi.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][i]&&n[o.pluginName][i](Or({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](Or({sortable:n},r)))})},initializePlugins:function(e,n,r,s){Bi.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,Xn(r,c.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,n){var r={};return Bi.forEach(function(s){typeof s.eventProperties=="function"&&Xn(r,s.eventProperties.call(n[s.pluginName],e))}),r},modifyOption:function(e,n,r){var s;return Bi.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[n]=="function"&&(s=i.optionListeners[n].call(e[i.pluginName],r))}),s}};function Ia(t){var e=t.sortable,n=t.rootEl,r=t.name,s=t.targetEl,i=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,h=t.newDraggableIndex,f=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[un],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!is&&!oc?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=s||n,m.clone=i,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=d?d.lastPutMode:void 0;var g=Or(Or({},p),ac.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var SB=["evt"],Sn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.evt,i=cB(r,SB);ac.pluginEvent.bind(be)(e,n,Or({dragEl:Q,parentEl:xt,ghostEl:ke,rootEl:yt,nextEl:qs,lastDownEl:nu,cloneEl:Ot,cloneHidden:_s,dragStarted:Ca,putSortable:Yt,activeSortable:be.active,originalEvent:s,oldIndex:Zi,oldDraggableIndex:Xa,newIndex:kn,newDraggableIndex:gs,hideGhostForTarget:xC,unhideGhostForTarget:OC,cloneNowHidden:function(){_s=!0},cloneNowShown:function(){_s=!1},dispatchSortableEvent:function(a){En({sortable:n,name:a,originalEvent:s})}},i))};function En(t){Ia(Or({putSortable:Yt,cloneEl:Ot,targetEl:Q,rootEl:yt,oldIndex:Zi,oldDraggableIndex:Xa,newIndex:kn,newDraggableIndex:gs},t))}var Q,xt,ke,yt,qs,nu,Ot,_s,Zi,kn,Xa,gs,$c,Yt,Yi=!1,sh=!1,ih=[],Gs,Qn,cd,ud,R0,x0,Ca,Vi,Qa,qa=!1,jc=!1,ru,nn,hd=[],Bp=!1,oh=[],vf=typeof document<"u",Bc=wC,O0=oc||is?"cssFloat":"float",IB=vf&&!mB&&!wC&&"draggable"in document.createElement("div"),CC=function(){if(vf){if(is)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),AC=function(e,n){var r=oe(e),s=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Do(e,0,n),o=Do(e,1,n),a=i&&oe(i),l=o&&oe(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Et(i).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+Et(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return i&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=s&&r[O0]==="none"||o&&r[O0]==="none"&&c+u>s)?"vertical":"horizontal"},CB=function(e,n,r){var s=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return s===a||i===l||s+o/2===a+c/2},AB=function(e,n){var r;return ih.some(function(s){var i=s[un].options.emptyInsertThreshold;if(!(!i||Zm(s))){var o=Et(s),a=e>=o.left-i&&e<=o.right+i,l=n>=o.top-i&&n<=o.bottom+i;if(a&&l)return r=s}}),r},RC=function(e){function n(i,o){return function(a,l,c,u){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(i==null&&(o||h))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return n(i(a,l,c,u),o)(a,l,c,u);var f=(o?a:l).options.group.name;return i===!0||typeof i=="string"&&i===f||i.join&&i.indexOf(f)>-1}}var r={},s=e.group;(!s||tu(s)!="object")&&(s={name:s}),r.name=s.name,r.checkPull=n(s.pull,!0),r.checkPut=n(s.put),r.revertClone=s.revertClone,e.group=r},xC=function(){!CC&&ke&&oe(ke,"display","none")},OC=function(){!CC&&ke&&oe(ke,"display","")};vf&&document.addEventListener("click",function(t){if(sh)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),sh=!1,!1},!0);var zs=function(e){if(Q){e=e.touches?e.touches[0]:e;var n=AB(e.clientX,e.clientY);if(n){var r={};for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[un]._onDragOver(r)}}},RB=function(e){Q&&Q.parentNode[un]._isOutsideThisEl(e.target)};function be(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Xn({},e),t[un]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return AC(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:be.supportPointer!==!1&&"PointerEvent"in window&&!za,emptyInsertThreshold:5};ac.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);RC(e);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=e.forceFallback?!1:IB,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?je(t,"pointerdown",this._onTapStart):(je(t,"mousedown",this._onTapStart),je(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(je(t,"dragover",this),je(t,"dragenter",this)),ih.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Xn(this,wB())}be.prototype={constructor:be,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Vi=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,Q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,s=this.options,i=s.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=s.filter;if(LB(r),!Q&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||s.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&za&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=Jn(l,s.draggable,r,!1),!(l&&l.animated)&&nu!==l)){if(Zi=Nt(l),Xa=Nt(l,s.draggable),typeof u=="function"){if(u.call(this,e,l,this)){En({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),Sn("filter",n,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=Jn(c,h.trim(),r,!1),h)return En({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),Sn("filter",n,{evt:e}),!0}),u)){i&&e.cancelable&&e.preventDefault();return}s.handle&&!Jn(c,s.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var s=this,i=s.el,o=s.options,a=i.ownerDocument,l;if(r&&!Q&&r.parentNode===i){var c=Et(r);if(yt=i,Q=r,xt=Q.parentNode,qs=Q.nextSibling,nu=r,$c=o.group,be.dragged=Q,Gs={target:Q,clientX:(n||e).clientX,clientY:(n||e).clientY},R0=Gs.clientX-c.left,x0=Gs.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,Q.style["will-change"]="all",l=function(){if(Sn("delayEnded",s,{evt:e}),be.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!T0&&s.nativeDraggable&&(Q.draggable=!0),s._triggerDragStart(e,n),En({sortable:s,name:"choose",originalEvent:e}),It(Q,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){TC(Q,u.trim(),fd)}),je(a,"dragover",zs),je(a,"mousemove",zs),je(a,"touchmove",zs),je(a,"mouseup",s._onDrop),je(a,"touchend",s._onDrop),je(a,"touchcancel",s._onDrop),T0&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Q.draggable=!0),Sn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(oc||is))){if(be.eventCanceled){this._onDrop();return}je(a,"mouseup",s._disableDelayedDrag),je(a,"touchend",s._disableDelayedDrag),je(a,"touchcancel",s._disableDelayedDrag),je(a,"mousemove",s._delayedDragTouchMoveHandler),je(a,"touchmove",s._delayedDragTouchMoveHandler),o.supportPointer&&je(a,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Q&&fd(Q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._disableDelayedDrag),Le(e,"touchend",this._disableDelayedDrag),Le(e,"touchcancel",this._disableDelayedDrag),Le(e,"mousemove",this._delayedDragTouchMoveHandler),Le(e,"touchmove",this._delayedDragTouchMoveHandler),Le(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?je(document,"pointermove",this._onTouchMove):n?je(document,"touchmove",this._onTouchMove):je(document,"mousemove",this._onTouchMove):(je(Q,"dragend",this),je(yt,"dragstart",this._onDragStart));try{document.selection?su(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(Yi=!1,yt&&Q){Sn("dragStarted",this,{evt:n}),this.nativeDraggable&&je(document,"dragover",RB);var r=this.options;!e&&It(Q,r.dragClass,!1),It(Q,r.ghostClass,!0),be.active=this,e&&this._appendGhost(),En({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Qn){this._lastX=Qn.clientX,this._lastY=Qn.clientY,xC();for(var e=document.elementFromPoint(Qn.clientX,Qn.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Qn.clientX,Qn.clientY),e!==n);)n=e;if(Q.parentNode[un]._isOutsideThisEl(e),n)do{if(n[un]){var r=void 0;if(r=n[un]._onDragOver({clientX:Qn.clientX,clientY:Qn.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);OC()}},_onTouchMove:function(e){if(Gs){var n=this.options,r=n.fallbackTolerance,s=n.fallbackOffset,i=e.touches?e.touches[0]:e,o=ke&&fi(ke,!0),a=ke&&o&&o.a,l=ke&&o&&o.d,c=Bc&&nn&&C0(nn),u=(i.clientX-Gs.clientX+s.x)/(a||1)+(c?c[0]-hd[0]:0)/(a||1),h=(i.clientY-Gs.clientY+s.y)/(l||1)+(c?c[1]-hd[1]:0)/(l||1);if(!be.active&&!Yi){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(ke){o?(o.e+=u-(cd||0),o.f+=h-(ud||0)):o={a:1,b:0,c:0,d:1,e:u,f:h};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");oe(ke,"webkitTransform",f),oe(ke,"mozTransform",f),oe(ke,"msTransform",f),oe(ke,"transform",f),cd=u,ud=h,Qn=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ke){var e=this.options.fallbackOnBody?document.body:yt,n=Et(Q,!0,Bc,!0,e),r=this.options;if(Bc){for(nn=e;oe(nn,"position")==="static"&&oe(nn,"transform")==="none"&&nn!==document;)nn=nn.parentNode;nn!==document.body&&nn!==document.documentElement?(nn===document&&(nn=Tr()),n.top+=nn.scrollTop,n.left+=nn.scrollLeft):nn=Tr(),hd=C0(nn)}ke=Q.cloneNode(!0),It(ke,r.ghostClass,!1),It(ke,r.fallbackClass,!0),It(ke,r.dragClass,!0),oe(ke,"transition",""),oe(ke,"transform",""),oe(ke,"box-sizing","border-box"),oe(ke,"margin",0),oe(ke,"top",n.top),oe(ke,"left",n.left),oe(ke,"width",n.width),oe(ke,"height",n.height),oe(ke,"opacity","0.8"),oe(ke,"position",Bc?"absolute":"fixed"),oe(ke,"zIndex","100000"),oe(ke,"pointerEvents","none"),be.ghost=ke,e.appendChild(ke),oe(ke,"transform-origin",R0/parseInt(ke.style.width)*100+"% "+x0/parseInt(ke.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,s=e.dataTransfer,i=r.options;if(Sn("dragStart",this,{evt:e}),be.eventCanceled){this._onDrop();return}Sn("setupClone",this),be.eventCanceled||(Ot=ev(Q),Ot.draggable=!1,Ot.style["will-change"]="",this._hideClone(),It(Ot,this.options.chosenClass,!1),be.clone=Ot),r.cloneId=su(function(){Sn("clone",r),!be.eventCanceled&&(r.options.removeCloneOnHide||yt.insertBefore(Ot,Q),r._hideClone(),En({sortable:r,name:"clone"}))}),!n&&It(Q,i.dragClass,!0),n?(sh=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Le(document,"mouseup",r._onDrop),Le(document,"touchend",r._onDrop),Le(document,"touchcancel",r._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(r,s,Q)),je(document,"drop",r),oe(Q,"transform","translateZ(0)")),Yi=!0,r._dragStartId=su(r._dragStarted.bind(r,n,e)),je(document,"selectstart",r),Ca=!0,za&&oe(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,s,i,o,a=this.options,l=a.group,c=be.active,u=$c===l,h=a.sort,f=Yt||c,d,p=this,m=!1;if(Bp)return;function y(ie,$e){Sn(ie,p,Or({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:s,targetRect:i,canSort:h,fromSortable:f,target:r,completed:g,onMove:function(Ke,Fe){return Vc(yt,n,Q,s,Ke,Et(Ke),e,Fe)},changed:E},$e))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function g(ie){return y("dragOverCompleted",{insertion:ie}),ie&&(u?c._hideClone():c._showClone(p),p!==f&&(It(Q,Yt?Yt.options.ghostClass:c.options.ghostClass,!1),It(Q,a.ghostClass,!0)),Yt!==p&&p!==be.active?Yt=p:p===be.active&&Yt&&(Yt=null),f===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===Q&&!Q.animated||r===n&&!r.animated)&&(Vi=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(Q.parentNode[un]._isOutsideThisEl(e.target),!ie&&zs(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){kn=Nt(Q),gs=Nt(Q,a.draggable),En({sortable:p,name:"change",toEl:n,newIndex:kn,newDraggableIndex:gs,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=Jn(r,a.draggable,n,!0),y("dragOver"),be.eventCanceled)return m;if(Q.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(sh=!1,c&&!a.disabled&&(u?h||(o=xt!==yt):Yt===this||(this.lastPutMode=$c.checkPull(this,c,Q,e))&&l.checkPut(this,c,Q,e))){if(d=this._getDirection(e,r)==="vertical",s=Et(Q),y("dragOverValid"),be.eventCanceled)return m;if(o)return xt=yt,v(),this._hideClone(),y("revert"),be.eventCanceled||(qs?yt.insertBefore(Q,qs):yt.appendChild(Q)),g(!0);var w=Zm(n,a.draggable);if(!w||PB(e,d,this)&&!w.animated){if(w===Q)return g(!1);if(w&&n===e.target&&(r=w),r&&(i=Et(r)),Vc(yt,n,Q,s,r,i,e,!!r)!==!1)return v(),n.appendChild(Q),xt=n,E(),g(!0)}else if(w&&NB(e,d,this)){var T=Do(n,0,a,!0);if(T===Q)return g(!1);if(r=T,i=Et(r),Vc(yt,n,Q,s,r,i,e,!1)!==!1)return v(),n.insertBefore(Q,T),xt=n,E(),g(!0)}else if(r.parentNode===n){i=Et(r);var S=0,x,I=Q.parentNode!==n,C=!CB(Q.animated&&Q.toRect||s,r.animated&&r.toRect||i,d),P=d?"top":"left",L=I0(r,"top","top")||I0(Q,"top","top"),U=L?L.scrollTop:void 0;Vi!==r&&(x=i[P],qa=!1,jc=!C&&a.invertSwap||I),S=DB(e,r,i,d,C?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,jc,Vi===r);var k;if(S!==0){var O=Nt(Q);do O-=S,k=xt.children[O];while(k&&(oe(k,"display")==="none"||k===ke))}if(S===0||k===r)return g(!1);Vi=r,Qa=S;var J=r.nextElementSibling,j=!1;j=S===1;var q=Vc(yt,n,Q,s,r,i,e,j);if(q!==!1)return(q===1||q===-1)&&(j=q===1),Bp=!0,setTimeout(OB,30),v(),j&&!J?n.appendChild(Q):r.parentNode.insertBefore(Q,j?J:r),L&&IC(L,0,U-L.scrollTop),xt=Q.parentNode,x!==void 0&&!jc&&(ru=Math.abs(x-Et(r)[P])),E(),g(!0)}if(n.contains(Q))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Le(document,"mousemove",this._onTouchMove),Le(document,"touchmove",this._onTouchMove),Le(document,"pointermove",this._onTouchMove),Le(document,"dragover",zs),Le(document,"mousemove",zs),Le(document,"touchmove",zs)},_offUpEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._onDrop),Le(e,"touchend",this._onDrop),Le(e,"pointerup",this._onDrop),Le(e,"touchcancel",this._onDrop),Le(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(kn=Nt(Q),gs=Nt(Q,r.draggable),Sn("drop",this,{evt:e}),xt=Q&&Q.parentNode,kn=Nt(Q),gs=Nt(Q,r.draggable),be.eventCanceled){this._nulling();return}Yi=!1,jc=!1,qa=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Vp(this.cloneId),Vp(this._dragStartId),this.nativeDraggable&&(Le(document,"drop",this),Le(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),za&&oe(document.body,"user-select",""),oe(Q,"transform",""),e&&(Ca&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),ke&&ke.parentNode&&ke.parentNode.removeChild(ke),(yt===xt||Yt&&Yt.lastPutMode!=="clone")&&Ot&&Ot.parentNode&&Ot.parentNode.removeChild(Ot),Q&&(this.nativeDraggable&&Le(Q,"dragend",this),fd(Q),Q.style["will-change"]="",Ca&&!Yi&&It(Q,Yt?Yt.options.ghostClass:this.options.ghostClass,!1),It(Q,this.options.chosenClass,!1),En({sortable:this,name:"unchoose",toEl:xt,newIndex:null,newDraggableIndex:null,originalEvent:e}),yt!==xt?(kn>=0&&(En({rootEl:xt,name:"add",toEl:xt,fromEl:yt,originalEvent:e}),En({sortable:this,name:"remove",toEl:xt,originalEvent:e}),En({rootEl:xt,name:"sort",toEl:xt,fromEl:yt,originalEvent:e}),En({sortable:this,name:"sort",toEl:xt,originalEvent:e})),Yt&&Yt.save()):kn!==Zi&&kn>=0&&(En({sortable:this,name:"update",toEl:xt,originalEvent:e}),En({sortable:this,name:"sort",toEl:xt,originalEvent:e})),be.active&&((kn==null||kn===-1)&&(kn=Zi,gs=Xa),En({sortable:this,name:"end",toEl:xt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){Sn("nulling",this),yt=Q=xt=ke=qs=Ot=nu=_s=Gs=Qn=Ca=kn=gs=Zi=Xa=Vi=Qa=Yt=$c=be.dragged=be.ghost=be.clone=be.active=null,oh.forEach(function(e){e.checked=!0}),oh.length=cd=ud=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Q&&(this._onDragOver(e),xB(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,s=0,i=r.length,o=this.options;s<i;s++)n=r[s],Jn(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||MB(n));return e},sort:function(e,n){var r={},s=this.el;this.toArray().forEach(function(i,o){var a=s.children[o];Jn(a,this.options.draggable,s,!1)&&(r[i]=a)},this),n&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(s.removeChild(r[i]),s.appendChild(r[i]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return Jn(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var s=ac.modifyOption(this,e,n);typeof s<"u"?r[e]=s:r[e]=n,e==="group"&&RC(r)},destroy:function(){Sn("destroy",this);var e=this.el;e[un]=null,Le(e,"mousedown",this._onTapStart),Le(e,"touchstart",this._onTapStart),Le(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Le(e,"dragover",this),Le(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ih.splice(ih.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!_s){if(Sn("hideClone",this),be.eventCanceled)return;oe(Ot,"display","none"),this.options.removeCloneOnHide&&Ot.parentNode&&Ot.parentNode.removeChild(Ot),_s=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(_s){if(Sn("showClone",this),be.eventCanceled)return;Q.parentNode==yt&&!this.options.group.revertClone?yt.insertBefore(Ot,Q):qs?yt.insertBefore(Ot,qs):yt.appendChild(Ot),this.options.group.revertClone&&this.animate(Q,Ot),oe(Ot,"display",""),_s=!1}}};function xB(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Vc(t,e,n,r,s,i,o,a){var l,c=t[un],u=c.options.onMove,h;return window.CustomEvent&&!is&&!oc?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=s||e,l.relatedRect=i||Et(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(h=u.call(c,l,o)),h}function fd(t){t.draggable=!1}function OB(){Bp=!1}function NB(t,e,n){var r=Et(Do(n.el,0,n.options,!0)),s=10;return e?t.clientX<r.left-s||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-s||t.clientY<r.bottom&&t.clientX<r.left}function PB(t,e,n){var r=Et(Zm(n.el,n.options.draggable)),s=10;return e?t.clientX>r.right+s||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+s}function DB(t,e,n,r,s,i,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,h=r?n.bottom:n.right,f=!1;if(!o){if(a&&ru<c*s){if(!qa&&(Qa===1?l>u+c*i/2:l<h-c*i/2)&&(qa=!0),qa)f=!0;else if(Qa===1?l<u+ru:l>h-ru)return-Qa}else if(l>u+c*(1-s)/2&&l<h-c*(1-s)/2)return kB(e)}return f=f||o,f&&(l<u+c*i/2||l>h-c*i/2)?l>u+c/2?1:-1:0}function kB(t){return Nt(Q)<Nt(t)?1:-1}function MB(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function LB(t){oh.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&oh.push(r)}}function su(t){return setTimeout(t,0)}function Vp(t){return clearTimeout(t)}vf&&je(document,"touchmove",function(t){(be.active||Yi)&&t.cancelable&&t.preventDefault()});be.utils={on:je,off:Le,css:oe,find:TC,is:function(e,n){return!!Jn(e,n,e,!1)},extend:EB,throttle:SC,closest:Jn,toggleClass:It,clone:ev,index:Nt,nextTick:su,cancelNextTick:Vp,detectDirection:AC,getChild:Do};be.get=function(t){return t[un]};be.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(be.utils=Or(Or({},be.utils),r.utils)),ac.mount(r)})};be.create=function(t,e){return new be(t,e)};be.version=gB;var Lt=[],Aa,Hp,Kp=!1,dd,pd,ah,Ra;function FB(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?je(document,"dragover",this._handleAutoScroll):this.options.supportPointer?je(document,"pointermove",this._handleFallbackAutoScroll):r.touches?je(document,"touchmove",this._handleFallbackAutoScroll):je(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Le(document,"dragover",this._handleAutoScroll):(Le(document,"pointermove",this._handleFallbackAutoScroll),Le(document,"touchmove",this._handleFallbackAutoScroll),Le(document,"mousemove",this._handleFallbackAutoScroll)),N0(),iu(),_B()},nulling:function(){ah=Hp=Aa=Kp=Ra=dd=pd=null,Lt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var s=this,i=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(i,o);if(ah=n,r||this.options.forceAutoScrollFallback||oc||is||za){gd(n,this.options,a,r);var l=bs(a,!0);Kp&&(!Ra||i!==dd||o!==pd)&&(Ra&&N0(),Ra=setInterval(function(){var c=bs(document.elementFromPoint(i,o),!0);c!==l&&(l=c,iu()),gd(n,s.options,c,r)},10),dd=i,pd=o)}else{if(!this.options.bubbleScroll||bs(a,!0)===Tr()){iu();return}gd(n,this.options,bs(a,!1),!1)}}},Xn(t,{pluginName:"scroll",initializeByDefault:!0})}function iu(){Lt.forEach(function(t){clearInterval(t.pid)}),Lt=[]}function N0(){clearInterval(Ra)}var gd=SC(function(t,e,n,r){if(e.scroll){var s=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=Tr(),c=!1,u;Hp!==n&&(Hp=n,iu(),Aa=e.scroll,u=e.scrollFn,Aa===!0&&(Aa=bs(n,!0)));var h=0,f=Aa;do{var d=f,p=Et(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,w=p.height,T=void 0,S=void 0,x=d.scrollWidth,I=d.scrollHeight,C=oe(d),P=d.scrollLeft,L=d.scrollTop;d===l?(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"||C.overflowX==="visible"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"||C.overflowY==="visible")):(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"));var U=T&&(Math.abs(g-s)<=o&&P+E<x)-(Math.abs(v-s)<=o&&!!P),k=S&&(Math.abs(y-i)<=o&&L+w<I)-(Math.abs(m-i)<=o&&!!L);if(!Lt[h])for(var O=0;O<=h;O++)Lt[O]||(Lt[O]={});(Lt[h].vx!=U||Lt[h].vy!=k||Lt[h].el!==d)&&(Lt[h].el=d,Lt[h].vx=U,Lt[h].vy=k,clearInterval(Lt[h].pid),(U!=0||k!=0)&&(c=!0,Lt[h].pid=setInterval(function(){r&&this.layer===0&&be.active._onTouchMove(ah);var J=Lt[this.layer].vy?Lt[this.layer].vy*a:0,j=Lt[this.layer].vx?Lt[this.layer].vx*a:0;typeof u=="function"&&u.call(be.dragged.parentNode[un],j,J,t,ah,Lt[this.layer].el)!=="continue"||IC(Lt[this.layer].el,j,J)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==l&&(f=bs(f,!1)));Kp=c}},30),NC=function(e){var n=e.originalEvent,r=e.putSortable,s=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||i;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(h)&&(o("spill"),this.onSpill({dragEl:s,putSortable:r}))}};function tv(){}tv.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var s=Do(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(n,s):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:NC};Xn(tv,{pluginName:"revertOnSpill"});function nv(){}nv.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,s=r||this.sortable;s.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),s.animateAll()},drop:NC};Xn(nv,{pluginName:"removeOnSpill"});var Hn;function UB(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;Hn=r},dragOverValid:function(n){var r=n.completed,s=n.target,i=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(s&&s!==c){var h=Hn;i(s)!==!1?(It(s,u.swapClass,!0),Hn=s):Hn=null,h&&h!==Hn&&It(h,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,s=n.putSortable,i=n.dragEl,o=s||this.sortable,a=this.options;Hn&&It(Hn,a.swapClass,!1),Hn&&(a.swap||s&&s.options.swap)&&i!==Hn&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),$B(i,Hn),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){Hn=null}},Xn(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Hn}}})}function $B(t,e){var n=t.parentNode,r=e.parentNode,s,i;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(s=Nt(t),i=Nt(e),n.isEqualNode(r)&&s<i&&i++,n.insertBefore(e,n.children[s]),r.insertBefore(t,r.children[i]))}var Oe=[],Dn=[],fa,qn,da=!1,In=!1,Hi=!1,ht,pa,Hc;function jB(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?je(document,"pointerup",this._deselectMultiDrag):(je(document,"mouseup",this._deselectMultiDrag),je(document,"touchend",this._deselectMultiDrag)),je(document,"keydown",this._checkKeyDown),je(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(s,i){var o="";Oe.length&&qn===e?Oe.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=i.textContent,s.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;ht=r},delayEnded:function(){this.isMultiDrag=~Oe.indexOf(ht)},setupClone:function(n){var r=n.sortable,s=n.cancel;if(this.isMultiDrag){for(var i=0;i<Oe.length;i++)Dn.push(ev(Oe[i])),Dn[i].sortableIndex=Oe[i].sortableIndex,Dn[i].draggable=!1,Dn[i].style["will-change"]="",It(Dn[i],this.options.selectedClass,!1),Oe[i]===ht&&It(Dn[i],this.options.chosenClass,!1);r._hideClone(),s()}},clone:function(n){var r=n.sortable,s=n.rootEl,i=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Oe.length&&qn===r&&(P0(!0,s),i("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,s=n.rootEl,i=n.cancel;this.isMultiDrag&&(P0(!1,s),Dn.forEach(function(o){oe(o,"display","")}),r(),Hc=!1,i())},hideClone:function(n){var r=this;n.sortable;var s=n.cloneNowHidden,i=n.cancel;this.isMultiDrag&&(Dn.forEach(function(o){oe(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),s(),Hc=!0,i())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&qn&&qn.multiDrag._deselectMultiDrag(),Oe.forEach(function(r){r.sortableIndex=Nt(r)}),Oe=Oe.sort(function(r,s){return r.sortableIndex-s.sortableIndex}),Hi=!0},dragStarted:function(n){var r=this,s=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(s.captureAnimationState(),this.options.animation)){Oe.forEach(function(o){o!==ht&&oe(o,"position","absolute")});var i=Et(ht,!1,!0,!0);Oe.forEach(function(o){o!==ht&&A0(o,i)}),In=!0,da=!0}s.animateAll(function(){In=!1,da=!1,r.options.animation&&Oe.forEach(function(o){ad(o)}),r.options.sort&&Kc()})}},dragOver:function(n){var r=n.target,s=n.completed,i=n.cancel;In&&~Oe.indexOf(r)&&(s(!1),i())},revert:function(n){var r=n.fromSortable,s=n.rootEl,i=n.sortable,o=n.dragRect;Oe.length>1&&(Oe.forEach(function(a){i.addAnimationState({target:a,rect:In?Et(a):o}),ad(a),a.fromRect=o,r.removeAnimationState(a)}),In=!1,BB(!this.options.removeCloneOnHide,s))},dragOverCompleted:function(n){var r=n.sortable,s=n.isOwner,i=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(i){if(s&&o._hideClone(),da=!1,c.animation&&Oe.length>1&&(In||!s&&!o.options.sort&&!l)){var u=Et(ht,!1,!0,!0);Oe.forEach(function(f){f!==ht&&(A0(f,u),a.appendChild(f))}),In=!0}if(!s)if(In||Kc(),Oe.length>1){var h=Hc;o._showClone(r),o.options.animation&&!Hc&&h&&Dn.forEach(function(f){o.addAnimationState({target:f,rect:pa}),f.fromRect=pa,f.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,s=n.isOwner,i=n.activeSortable;if(Oe.forEach(function(a){a.thisAnimationDuration=null}),i.options.animation&&!s&&i.multiDrag.isMultiDrag){pa=Xn({},r);var o=fi(ht,!0);pa.top-=o.f,pa.left-=o.e}},dragOverAnimationComplete:function(){In&&(In=!1,Kc())},drop:function(n){var r=n.originalEvent,s=n.rootEl,i=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var h=this.options,f=i.children;if(!Hi)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),It(ht,h.selectedClass,!~Oe.indexOf(ht)),~Oe.indexOf(ht))Oe.splice(Oe.indexOf(ht),1),fa=null,Ia({sortable:o,rootEl:s,name:"deselect",targetEl:ht,originalEvt:r});else{if(Oe.push(ht),Ia({sortable:o,rootEl:s,name:"select",targetEl:ht,originalEvt:r}),r.shiftKey&&fa&&o.el.contains(fa)){var d=Nt(fa),p=Nt(ht);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~Oe.indexOf(f[y])||(It(f[y],h.selectedClass,!0),Oe.push(f[y]),Ia({sortable:o,rootEl:s,name:"select",targetEl:f[y],originalEvt:r}))}}else fa=ht;qn=u}if(Hi&&this.isMultiDrag){if(In=!1,(i[un].options.sort||i!==s)&&Oe.length>1){var v=Et(ht),g=Nt(ht,":not(."+this.options.selectedClass+")");if(!da&&h.animation&&(ht.thisAnimationDuration=null),u.captureAnimationState(),!da&&(h.animation&&(ht.fromRect=v,Oe.forEach(function(w){if(w.thisAnimationDuration=null,w!==ht){var T=In?Et(w):v;w.fromRect=T,u.addAnimationState({target:w,rect:T})}})),Kc(),Oe.forEach(function(w){f[g]?i.insertBefore(w,f[g]):i.appendChild(w),g++}),l===Nt(ht))){var E=!1;Oe.forEach(function(w){if(w.sortableIndex!==Nt(w)){E=!0;return}}),E&&a("update")}Oe.forEach(function(w){ad(w)}),u.animateAll()}qn=u}(s===i||c&&c.lastPutMode!=="clone")&&Dn.forEach(function(w){w.parentNode&&w.parentNode.removeChild(w)})}},nullingGlobal:function(){this.isMultiDrag=Hi=!1,Dn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Le(document,"pointerup",this._deselectMultiDrag),Le(document,"mouseup",this._deselectMultiDrag),Le(document,"touchend",this._deselectMultiDrag),Le(document,"keydown",this._checkKeyDown),Le(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof Hi<"u"&&Hi)&&qn===this.sortable&&!(n&&Jn(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;Oe.length;){var r=Oe[0];It(r,this.options.selectedClass,!1),Oe.shift(),Ia({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Xn(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[un];!r||!r.options.multiDrag||~Oe.indexOf(n)||(qn&&qn!==r&&(qn.multiDrag._deselectMultiDrag(),qn=r),It(n,r.options.selectedClass,!0),Oe.push(n))},deselect:function(n){var r=n.parentNode[un],s=Oe.indexOf(n);!r||!r.options.multiDrag||!~s||(It(n,r.options.selectedClass,!1),Oe.splice(s,1))}},eventProperties:function(){var n=this,r=[],s=[];return Oe.forEach(function(i){r.push({multiDragElement:i,index:i.sortableIndex});var o;In&&i!==ht?o=-1:In?o=Nt(i,":not(."+n.options.selectedClass+")"):o=Nt(i),s.push({multiDragElement:i,index:o})}),{items:uB(Oe),clones:[].concat(Dn),oldIndicies:r,newIndicies:s}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function BB(t,e){Oe.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function P0(t,e){Dn.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function Kc(){Oe.forEach(function(t){t!==ht&&t.parentNode&&t.parentNode.removeChild(t)})}be.mount(new FB);be.mount(nv,tv);const VB=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:jB,Sortable:be,Swap:UB,default:be},Symbol.toStringTag,{value:"Module"})),HB=EC(VB);(function(t,e){(function(r,s){t.exports=s(ta,HB)})(typeof self<"u"?self:Q$,function(n,r){return function(s){var i={};function o(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return s[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=i,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(h){return a[h]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(s,i,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",s.exports=String(c)==="[object z]"},"0366":function(s,i,o){var a=o("1c0b");s.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(h){return l.call(c,h)};case 2:return function(h,f){return l.call(c,h,f)};case 3:return function(h,f,d){return l.call(c,h,f,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(s,i,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(f){try{return l(f)}catch{return u.slice()}};s.exports.f=function(d){return u&&c.call(d)=="[object Window]"?h(d):l(a(d))}},"06cf":function(s,i,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),h=o("c04e"),f=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;i.f=a?p:function(y,v){if(y=u(y),v=h(v,!0),d)try{return p(y,v)}catch{}if(f(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("cc12");s.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(s,i,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),h=c("reduce"),f=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!h||!f},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(s,i,o){var a=o("c6b6"),l=o("9263");s.exports=function(c,u){var h=c.exec;if(typeof h=="function"){var f=h.call(c,u);if(typeof f!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return f}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var h in l){var f=a[h],d=f&&f.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(s,i,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),h=c("forEach");s.exports=!u||!h?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(s,i,o){var a=o("d066");s.exports=a("document","documentElement")},"1c0b":function(s,i){s.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(s,i,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,h={next:function(){return{done:!!u++}},return:function(){c=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch{}s.exports=function(f,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},f(m)}catch{}return p}},"1d80":function(s,i){s.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(s,i,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");s.exports=function(h){return c>=51||!a(function(){var f=[],d=f.constructor={};return d[u]=function(){return{foo:1}},f[h](Boolean).foo!==1})}},"23cb":function(s,i,o){var a=o("a691"),l=Math.max,c=Math.min;s.exports=function(u,h){var f=a(u);return f<0?l(f+h,0):c(f,h)}},"23e7":function(s,i,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),h=o("ce4e"),f=o("e893"),d=o("94ca");s.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,w,T,S,x,I;if(v?w=a:g?w=a[y]||h(y,{}):w=(a[y]||{}).prototype,w)for(T in m){if(x=m[T],p.noTargetGet?(I=l(w,T),S=I&&I.value):S=w[T],E=d(v?T:y+(g?".":"#")+T,p.forced),!E&&S!==void 0){if(typeof x==typeof S)continue;f(x,S)}(p.sham||S&&S.sham)&&c(x,"sham",!0),u(w,T,x,p)}}},"241c":function(s,i,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");i.f=Object.getOwnPropertyNames||function(h){return a(h,c)}},"25f0":function(s,i,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=h;(p||m)&&a(RegExp.prototype,h,function(){var v=l(this),g=String(v.source),E=v.flags,w=String(E===void 0&&v instanceof RegExp&&!("flags"in f)?u.call(v):E);return"/"+g+"/"+w},{unsafe:!0})},"2ca0":function(s,i,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),h=o("1d80"),f=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=f("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var w=String(h(this));u(E);var T=c(m(arguments.length>1?arguments[1]:void 0,w.length)),S=String(E);return p?p.call(w,S,T):w.slice(T,T+S.length)===S}})},"2d00":function(s,i,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,h=u&&u.v8,f,d;h?(f=h.split("."),d=f[0]+f[1]):l&&(f=l.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=l.match(/Chrome\/(\d+)/),f&&(d=f[1]))),s.exports=d&&+d},"342f":function(s,i,o){var a=o("d066");s.exports=a("navigator","userAgent")||""},"35a1":function(s,i,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");s.exports=function(h){if(h!=null)return h[u]||h["@@iterator"]||l[a(h)]}},"37e8":function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");s.exports=a?Object.defineProperties:function(f,d){c(f);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(f,v=p[y++],d[v]);return f}},"3bbe":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(s,i,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",h=l.set,f=l.getterFor(u);c(String,"String",function(d){h(this,{type:u,string:String(d),index:0})},function(){var p=f(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(s,i){s.exports={}},4160:function(s,i,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(s,i,o){var a=o("da84");s.exports=a},"44ad":function(s,i,o){var a=o("d039"),l=o("c6b6"),c="".split;s.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(s,i,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),h=Array.prototype;h[u]==null&&c.f(h,u,{configurable:!0,value:l(null)}),s.exports=function(f){h[u][f]=!0}},"44e7":function(s,i,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");s.exports=function(h){var f;return a(h)&&((f=h[u])!==void 0?!!f:l(h)=="RegExp")}},4930:function(s,i,o){var a=o("d039");s.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(s,i,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(h){return function(f,d,p){var m=a(f),y=l(m.length),v=c(p,y),g;if(h&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((h||v in m)&&m[v]===d)return h||v||0;return!h&&-1}};s.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(s,i,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),h=c("filter"),f=u("filter");a({target:"Array",proto:!0,forced:!h||!f},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(s,i,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),h=o("50c4"),f=o("8418"),d=o("35a1");s.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,w=E!==void 0,T=d(y),S=0,x,I,C,P,L,U;if(w&&(E=a(E,g>2?arguments[2]:void 0,2)),T!=null&&!(v==Array&&u(T)))for(P=T.call(y),L=P.next,I=new v;!(C=L.call(P)).done;S++)U=w?c(P,E,[C.value,S],!0):C.value,f(I,S,U);else for(x=h(y.length),I=new v(x);x>S;S++)U=w?E(y[S],S):y[S],f(I,S,U);return I.length=S,I}},"4fad":function(s,i,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(s,i,o){var a=o("a691"),l=Math.min;s.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(s,i){var o={}.hasOwnProperty;s.exports=function(a,l){return o.call(a,l)}},5319:function(s,i,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),h=o("a691"),f=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,w=function(T){return T===void 0?T:String(T)};a("replace",2,function(T,S,x,I){var C=I.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,P=I.REPLACE_KEEPS_$0,L=C?"$":"$0";return[function(O,J){var j=f(this),q=O==null?void 0:O[T];return q!==void 0?q.call(O,j,J):S.call(String(j),O,J)},function(k,O){if(!C&&P||typeof O=="string"&&O.indexOf(L)===-1){var J=x(S,k,this,O);if(J.done)return J.value}var j=l(k),q=String(this),ie=typeof O=="function";ie||(O=String(O));var $e=j.global;if($e){var ft=j.unicode;j.lastIndex=0}for(var Ke=[];;){var Fe=p(j,q);if(Fe===null||(Ke.push(Fe),!$e))break;var ut=String(Fe[0]);ut===""&&(j.lastIndex=d(q,u(j.lastIndex),ft))}for(var St="",M=0,G=0;G<Ke.length;G++){Fe=Ke[G];for(var H=String(Fe[0]),ne=m(y(h(Fe.index),q.length),0),we=[],Xe=1;Xe<Fe.length;Xe++)we.push(w(Fe[Xe]));var Ie=Fe.groups;if(ie){var _=[H].concat(we,ne,q);Ie!==void 0&&_.push(Ie);var b=String(O.apply(void 0,_))}else b=U(H,q,ne,we,Ie,O);ne>=M&&(St+=q.slice(M,ne)+b,M=ne+H.length)}return St+q.slice(M)}];function U(k,O,J,j,q,ie){var $e=J+k.length,ft=j.length,Ke=E;return q!==void 0&&(q=c(q),Ke=g),S.call(ie,Ke,function(Fe,ut){var St;switch(ut.charAt(0)){case"$":return"$";case"&":return k;case"`":return O.slice(0,J);case"'":return O.slice($e);case"<":St=q[ut.slice(1,-1)];break;default:var M=+ut;if(M===0)return Fe;if(M>ft){var G=v(M/10);return G===0?Fe:G<=ft?j[G-1]===void 0?ut.charAt(1):j[G-1]+ut.charAt(1):Fe}St=j[M-1]}return St===void 0?"":St})}})},5692:function(s,i,o){var a=o("c430"),l=o("c6cd");(s.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(s,i,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");s.exports=a("Reflect","ownKeys")||function(f){var d=l.f(u(f)),p=c.f;return p?d.concat(p(f)):d}},"5a34":function(s,i,o){var a=o("44e7");s.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(s,i){s.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(s,i,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),h=o("1c0b"),f=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return h(p),v=f(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(s,i,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(h,f){var d=String(l(h)),p=a(f),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};s.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(s,i,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");s.exports=function(h,f){var d;return l(h)&&(d=h.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(f===0?0:f)}},"69f3":function(s,i,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),h=o("5135"),f=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(C){return v(C)?y(C):m(C,{})},E=function(C){return function(P){var L;if(!c(P)||(L=y(P)).type!==C)throw TypeError("Incompatible receiver, "+C+" required");return L}};if(a){var w=new p,T=w.get,S=w.has,x=w.set;m=function(C,P){return x.call(w,C,P),P},y=function(C){return T.call(w,C)||{}},v=function(C){return S.call(w,C)}}else{var I=f("state");d[I]=!0,m=function(C,P){return u(C,I,P),P},y=function(C){return h(C,I)?C[I]:{}},v=function(C){return h(C,I)}}s.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(s,i,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),h=o("8925"),f=o("69f3"),d=f.get,p=f.enforce,m=String(String).split("String");(s.exports=function(y,v,g,E){var w=E?!!E.unsafe:!1,T=E?!!E.enumerable:!1,S=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){T?y[v]=g:u(v,g);return}else w?!S&&y[v]&&(T=!0):delete y[v];T?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||h(this)})},"6f53":function(s,i,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,h=function(f){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(f?[E,p[E]]:p[E]);return g}};s.exports={entries:h(!0),values:h(!1)}},"73d9":function(s,i,o){var a=o("44d2");a("flatMap")},7418:function(s,i){i.f=Object.getOwnPropertySymbols},"746f":function(s,i,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;s.exports=function(h){var f=a.Symbol||(a.Symbol={});l(f,h)||u(f,h,{value:c.f(h)})}},7839:function(s,i){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(s,i,o){var a=o("1d80");s.exports=function(l){return Object(a(l))}},"7c73":function(s,i,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),h=o("1be4"),f=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},w=function(C){return m+v+p+C+m+"/"+v+p},T=function(C){C.write(w("")),C.close();var P=C.parentWindow.Object;return C=null,P},S=function(){var C=f("iframe"),P="java"+v+":",L;return C.style.display="none",h.appendChild(C),C.src=String(P),L=C.contentWindow.document,L.open(),L.write(w("document.F=Object")),L.close(),L.F},x,I=function(){try{x=document.domain&&new ActiveXObject("htmlfile")}catch{}I=x?T(x):S();for(var C=c.length;C--;)delete I[y][c[C]];return I()};u[g]=!0,s.exports=Object.create||function(P,L){var U;return P!==null?(E[y]=a(P),U=new E,E[y]=null,U[g]=P):U=I(),L===void 0?U:l(U,L)}},"7dd0":function(s,i,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),h=o("d44e"),f=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),T="keys",S="values",x="entries",I=function(){return this};s.exports=function(C,P,L,U,k,O,J){l(L,P,U);var j=function(G){if(G===k&&Ke)return Ke;if(!E&&G in $e)return $e[G];switch(G){case T:return function(){return new L(this,G)};case S:return function(){return new L(this,G)};case x:return function(){return new L(this,G)}}return function(){return new L(this)}},q=P+" Iterator",ie=!1,$e=C.prototype,ft=$e[w]||$e["@@iterator"]||k&&$e[k],Ke=!E&&ft||j(k),Fe=P=="Array"&&$e.entries||ft,ut,St,M;if(Fe&&(ut=c(Fe.call(new C)),g!==Object.prototype&&ut.next&&(!m&&c(ut)!==g&&(u?u(ut,g):typeof ut[w]!="function"&&f(ut,w,I)),h(ut,q,!0,!0),m&&(y[q]=I))),k==S&&ft&&ft.name!==S&&(ie=!0,Ke=function(){return ft.call(this)}),(!m||J)&&$e[w]!==Ke&&f($e,w,Ke),y[P]=Ke,k)if(St={values:j(S),keys:O?Ke:j(T),entries:j(x)},J)for(M in St)(E||ie||!(M in $e))&&d($e,M,St[M]);else a({target:P,proto:!0,forced:E||ie},St);return St}},"7f9a":function(s,i,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;s.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(s,i,o){var a=o("d039");s.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(s,i,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");s.exports=function(u,h,f){var d=a(h);d in u?l.f(u,d,c(0,f)):u[d]=f}},"861d":function(s,i){s.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(s,i,o){var a,l,c;(function(u,h){l=[],a=h,c=typeof a=="function"?a.apply(i,l):a,c!==void 0&&(s.exports=c)})(typeof self<"u"?self:this,function(){function u(){var h=Object.getOwnPropertyDescriptor(document,"currentScript");if(!h&&"currentScript"in document&&document.currentScript||h&&h.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var f=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=f.exec(x.stack)||d.exec(x.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,w,T=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),w=g.replace(E,"$1").trim());for(var S=0;S<T.length;S++)if(T[S].readyState==="interactive"||T[S].src===m||m===v&&T[S].innerHTML&&T[S].innerHTML.trim()===w)return T[S];return null}}return u})},8925:function(s,i,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),s.exports=a.inspectSource},"8aa5":function(s,i,o){var a=o("6547").charAt;s.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(s,i){s.exports=n},"90e3":function(s,i){var o=0,a=Math.random();s.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");s.exports=a?function(u,h,f){return l.f(u,h,c(1,f))}:function(u,h,f){return u[h]=f,u}},9263:function(s,i,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,h=c,f=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=f||p||d;m&&(h=function(v){var g=this,E,w,T,S,x=d&&g.sticky,I=a.call(g),C=g.source,P=0,L=v;return x&&(I=I.replace("y",""),I.indexOf("g")===-1&&(I+="g"),L=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(C="(?: "+C+")",L=" "+L,P++),w=new RegExp("^(?:"+C+")",I)),p&&(w=new RegExp("^"+C+"$(?!\\s)",I)),f&&(E=g.lastIndex),T=c.call(x?w:g,L),x?T?(T.input=T.input.slice(P),T[0]=T[0].slice(P),T.index=g.lastIndex,g.lastIndex+=T[0].length):g.lastIndex=0:f&&T&&(g.lastIndex=g.global?T.index+T[0].length:E),p&&T&&T.length>1&&u.call(T[0],w,function(){for(S=1;S<arguments.length-2;S++)arguments[S]===void 0&&(T[S]=void 0)}),T}),s.exports=h},"94ca":function(s,i,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=h[u(p)];return y==d?!0:y==f?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},h=c.data={},f=c.NATIVE="N",d=c.POLYFILL="P";s.exports=c},"99af":function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),h=o("7b0b"),f=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,w="Maximum allowed index exceeded",T=v>=51||!l(function(){var C=[];return C[g]=!1,C.concat()[0]!==C}),S=m("concat"),x=function(C){if(!u(C))return!1;var P=C[g];return P!==void 0?!!P:c(C)},I=!T||!S;a({target:"Array",proto:!0,forced:I},{concat:function(P){var L=h(this),U=p(L,0),k=0,O,J,j,q,ie;for(O=-1,j=arguments.length;O<j;O++)if(ie=O===-1?L:arguments[O],x(ie)){if(q=f(ie.length),k+q>E)throw TypeError(w);for(J=0;J<q;J++,k++)J in ie&&d(U,k,ie[J])}else{if(k>=E)throw TypeError(w);d(U,k++,ie)}return U.length=k,U}})},"9bdd":function(s,i,o){var a=o("825a");s.exports=function(l,c,u,h){try{return h?c(a(u)[0],u[1]):c(u)}catch(d){var f=l.return;throw f!==void 0&&a(f.call(l)),d}}},"9bf2":function(s,i,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),h=Object.defineProperty;i.f=a?h:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return h(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(s,i,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),h=o("3f8c"),f=function(){return this};s.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),h[y]=f,d}},"9f7f":function(s,i,o){var a=o("d039");function l(c,u){return RegExp(c,u)}i.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),i.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(s,i,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(h,f,d,p,m,y,v,g){for(var E=m,w=0,T=v?c(v,g,3):!1,S;w<p;){if(w in d){if(S=T?T(d[w],w,f):d[w],y>0&&a(S))E=u(h,f,S,l(S.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");h[E]=S}E++}w++}return E};s.exports=u},a352:function(s,i){s.exports=r},a434:function(s,i,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),h=o("7b0b"),f=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,w=9007199254740991,T="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(x,I){var C=h(this),P=u(C.length),L=l(x,P),U=arguments.length,k,O,J,j,q,ie;if(U===0?k=O=0:U===1?(k=0,O=P-L):(k=U-2,O=E(g(c(I),0),P-L)),P+k-O>w)throw TypeError(T);for(J=f(C,O),j=0;j<O;j++)q=L+j,q in C&&d(J,j,C[q]);if(J.length=O,k<O){for(j=L;j<P-O;j++)q=j+O,ie=j+k,q in C?C[ie]=C[q]:delete C[ie];for(j=P;j>P-O+k;j--)delete C[j-1]}else if(k>O)for(j=P-O;j>L;j--)q=j+O-1,ie=j+k-1,q in C?C[ie]=C[q]:delete C[ie];for(j=0;j<k;j++)C[j+L]=arguments[j+2];return C.length=P-O+k,J}})},a4d3:function(s,i,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),h=o("83ab"),f=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),w=o("fc6a"),T=o("c04e"),S=o("5c6c"),x=o("7c73"),I=o("df75"),C=o("241c"),P=o("057f"),L=o("7418"),U=o("06cf"),k=o("9bf2"),O=o("d1e7"),J=o("9112"),j=o("6eeb"),q=o("5692"),ie=o("f772"),$e=o("d012"),ft=o("90e3"),Ke=o("b622"),Fe=o("e538"),ut=o("746f"),St=o("d44e"),M=o("69f3"),G=o("b727").forEach,H=ie("hidden"),ne="Symbol",we="prototype",Xe=Ke("toPrimitive"),Ie=M.set,_=M.getterFor(ne),b=Object[we],N=l.Symbol,F=c("JSON","stringify"),$=U.f,W=k.f,Z=P.f,X=O.f,Y=q("symbols"),B=q("op-symbols"),le=q("string-to-symbol-registry"),se=q("symbol-to-string-registry"),ce=q("wks"),ye=l.QObject,Pe=!ye||!ye[we]||!ye[we].findChild,Ze=h&&p(function(){return x(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a!=7})?function(Ce,ue,_e){var Ve=$(b,ue);Ve&&delete b[ue],W(Ce,ue,_e),Ve&&Ce!==b&&W(b,ue,Ve)}:W,We=function(Ce,ue){var _e=Y[Ce]=x(N[we]);return Ie(_e,{type:ne,tag:Ce,description:ue}),h||(_e.description=ue),_e},A=d?function(Ce){return typeof Ce=="symbol"}:function(Ce){return Object(Ce)instanceof N},R=function(ue,_e,Ve){ue===b&&R(B,_e,Ve),g(ue);var Qe=T(_e,!0);return g(Ve),m(Y,Qe)?(Ve.enumerable?(m(ue,H)&&ue[H][Qe]&&(ue[H][Qe]=!1),Ve=x(Ve,{enumerable:S(0,!1)})):(m(ue,H)||W(ue,H,S(1,{})),ue[H][Qe]=!0),Ze(ue,Qe,Ve)):W(ue,Qe,Ve)},D=function(ue,_e){g(ue);var Ve=w(_e),Qe=I(Ve).concat(De(Ve));return G(Qe,function(Tn){(!h||re.call(Ve,Tn))&&R(ue,Tn,Ve[Tn])}),ue},V=function(ue,_e){return _e===void 0?x(ue):D(x(ue),_e)},re=function(ue){var _e=T(ue,!0),Ve=X.call(this,_e);return this===b&&m(Y,_e)&&!m(B,_e)?!1:Ve||!m(this,_e)||!m(Y,_e)||m(this,H)&&this[H][_e]?Ve:!0},Ee=function(ue,_e){var Ve=w(ue),Qe=T(_e,!0);if(!(Ve===b&&m(Y,Qe)&&!m(B,Qe))){var Tn=$(Ve,Qe);return Tn&&m(Y,Qe)&&!(m(Ve,H)&&Ve[H][Qe])&&(Tn.enumerable=!0),Tn}},de=function(ue){var _e=Z(w(ue)),Ve=[];return G(_e,function(Qe){!m(Y,Qe)&&!m($e,Qe)&&Ve.push(Qe)}),Ve},De=function(ue){var _e=ue===b,Ve=Z(_e?B:w(ue)),Qe=[];return G(Ve,function(Tn){m(Y,Tn)&&(!_e||m(b,Tn))&&Qe.push(Y[Tn])}),Qe};if(f||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor");var ue=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),_e=ft(ue),Ve=function(Qe){this===b&&Ve.call(B,Qe),m(this,H)&&m(this[H],_e)&&(this[H][_e]=!1),Ze(this,_e,S(1,Qe))};return h&&Pe&&Ze(b,_e,{configurable:!0,set:Ve}),We(_e,ue)},j(N[we],"toString",function(){return _(this).tag}),j(N,"withoutSetter",function(Ce){return We(ft(Ce),Ce)}),O.f=re,k.f=R,U.f=Ee,C.f=P.f=de,L.f=De,Fe.f=function(Ce){return We(Ke(Ce),Ce)},h&&(W(N[we],"description",{configurable:!0,get:function(){return _(this).description}}),u||j(b,"propertyIsEnumerable",re,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:N}),G(I(ce),function(Ce){ut(Ce)}),a({target:ne,stat:!0,forced:!f},{for:function(Ce){var ue=String(Ce);if(m(le,ue))return le[ue];var _e=N(ue);return le[ue]=_e,se[_e]=ue,_e},keyFor:function(ue){if(!A(ue))throw TypeError(ue+" is not a symbol");if(m(se,ue))return se[ue]},useSetter:function(){Pe=!0},useSimple:function(){Pe=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!h},{create:V,defineProperty:R,defineProperties:D,getOwnPropertyDescriptor:Ee}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:de,getOwnPropertySymbols:De}),a({target:"Object",stat:!0,forced:p(function(){L.f(1)})},{getOwnPropertySymbols:function(ue){return L.f(E(ue))}}),F){var vt=!f||p(function(){var Ce=N();return F([Ce])!="[null]"||F({a:Ce})!="{}"||F(Object(Ce))!="{}"});a({target:"JSON",stat:!0,forced:vt},{stringify:function(ue,_e,Ve){for(var Qe=[ue],Tn=1,yf;arguments.length>Tn;)Qe.push(arguments[Tn++]);if(yf=_e,!(!v(_e)&&ue===void 0||A(ue)))return y(_e)||(_e=function(PC,cc){if(typeof yf=="function"&&(cc=yf.call(this,PC,cc)),!A(cc))return cc}),Qe[1]=_e,F.apply(null,Qe)}})}N[we][Xe]||J(N[we],Xe,N[we].valueOf),St(N,ne),$e[H]=!0},a630:function(s,i,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(h){Array.from(h)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(s,i,o){var a=o("d039");s.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(s,i){var o=Math.ceil,a=Math.floor;s.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(s,i,o){var a=o("b622"),l=a("match");s.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(s,i,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(s,i,o){var a=o("825a");s.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,h={},f=function(d){throw d};s.exports=function(d,p){if(c(h,d))return h[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:f,g=c(p,1)?p[1]:void 0;return h[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:f}):E[1]=1,m.call(E,v,g)})}},ae93:function(s,i,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),h=o("c430"),f=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!h&&!c(m,f)&&l(m,f,p),s.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(s,i,o){var a=o("00ee"),l=o("f5df");s.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(s,i,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,h=/^\s*function ([^ (]*)/,f="name";a&&!(f in c)&&l(c,f,{configurable:!0,get:function(){try{return u.call(this).match(h)[1]}catch{return""}}})},b622:function(s,i,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),h=o("4930"),f=o("fdbf"),d=l("wks"),p=a.Symbol,m=f?p:p&&p.withoutSetter||u;s.exports=function(y){return c(d,y)||(h&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(s,i,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),h=u(function(){c(1)});a({target:"Object",stat:!0,forced:h},{keys:function(d){return c(l(d))}})},b727:function(s,i,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),h=o("65f0"),f=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,w=p==5||E;return function(T,S,x,I){for(var C=c(T),P=l(C),L=a(S,x,3),U=u(P.length),k=0,O=I||h,J=m?O(T,U):y?O(T,0):void 0,j,q;U>k;k++)if((w||k in P)&&(j=P[k],q=L(j,k,C),p)){if(m)J[k]=q;else if(q)switch(p){case 3:return!0;case 5:return j;case 6:return k;case 2:f.call(J,j)}else if(g)return!1}return E?-1:v||g?g:J}};s.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(s,i,o){var a=o("861d");s.exports=function(l,c){if(!a(l))return l;var u,h;if(c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(h=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l)))return h;throw TypeError("Can't convert object to primitive value")}},c430:function(s,i){s.exports=!1},c6b6:function(s,i){var o={}.toString;s.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(s,i,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});s.exports=u},c740:function(s,i,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),h="findIndex",f=!0,d=u(h);h in[]&&Array(1)[h](function(){f=!1}),a({target:"Array",proto:!0,forced:f||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(h)},c8ba:function(s,i){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}s.exports=o},c975:function(s,i,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),h=[].indexOf,f=!!h&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:f||!d||!p},{indexOf:function(y){return f?h.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(s,i,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");s.exports=function(h,f){var d=l(h),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;f.length>p;)a(d,y=f[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(s,i,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),h=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!h},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(s,i,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);s.exports=function(h){return u?c.createElement(h):{}}},ce4e:function(s,i,o){var a=o("da84"),l=o("9112");s.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(s,i){s.exports={}},d039:function(s,i){s.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(s,i,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};s.exports=function(u,h){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][h]||l[u]&&l[u][h]}},d1e7:function(s,i,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);i.f=c?function(h){var f=l(this,h);return!!f&&f.enumerable}:a},d28b:function(s,i,o){var a=o("746f");a("iterator")},d2bb:function(s,i,o){var a=o("825a"),l=o("3bbe");s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},h;try{h=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,h.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?h.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(s,i,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(s,i,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");s.exports=function(h,f,d){h&&!l(h=d?h:h.prototype,u)&&a(h,u,{configurable:!0,value:f})}},d58f:function(s,i,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),h=function(f){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),w=f?E-1:0,T=f?-1:1;if(m<2)for(;;){if(w in g){y=g[w],w+=T;break}if(w+=T,f?w<0:E<=w)throw TypeError("Reduce of empty array with no initial value")}for(;f?w>=0:E>w;w+=T)w in g&&(y=p(y,g[w],w,v));return y}};s.exports={left:h(!1),right:h(!0)}},d784:function(s,i,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),h=o("9112"),f=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var w="ab".split(g);return w.length!==2||w[0]!=="a"||w[1]!=="b"});s.exports=function(g,E,w,T){var S=c(g),x=!l(function(){var k={};return k[S]=function(){return 7},""[g](k)!=7}),I=x&&!l(function(){var k=!1,O=/a/;return g==="split"&&(O={},O.constructor={},O.constructor[f]=function(){return O},O.flags="",O[S]=/./[S]),O.exec=function(){return k=!0,null},O[S](""),!k});if(!x||!I||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var C=/./[S],P=w(S,""[g],function(k,O,J,j,q){return O.exec===u?x&&!q?{done:!0,value:C.call(O,J,j)}:{done:!0,value:k.call(J,O,j)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),L=P[0],U=P[1];a(String.prototype,g,L),a(RegExp.prototype,S,E==2?function(k,O){return U.call(k,this,O)}:function(k){return U.call(k,this)})}T&&h(RegExp.prototype[S],"sham",!0)}},d81d:function(s,i,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),h=c("map"),f=u("map");a({target:"Array",proto:!0,forced:!h||!f},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(s,i,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};s.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),h=o("06cf"),f=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=h.f,v=c(m),g={},E=0,w,T;v.length>E;)T=y(m,w=v[E++]),T!==void 0&&f(g,w,T);return g}})},dbf1:function(s,i,o){(function(a){o.d(i,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),h=o("b622"),f=h("iterator"),d=h("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[f]!==p)try{u(v,f,p)}catch{v[f]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(s,i,o){var a=o("ca84"),l=o("7839");s.exports=Object.keys||function(u){return a(u,l)}},e01a:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),h=o("861d"),f=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var S=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),x=this instanceof y?new p(S):S===void 0?p():p(S);return S===""&&(m[x]=!0),x};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",w=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var S=h(this)?this.valueOf():this,x=g.call(S);if(u(m,S))return"";var I=E?x.slice(7,-1):x.replace(w,"$1");return I===""?void 0:I}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(s,i,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),h=c("IE_PROTO"),f=Object.prototype;s.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,h)?d[h]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?f:null}},e177:function(s,i,o){var a=o("d039");s.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(s,i,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),h=o("7dd0"),f="Array Iterator",d=u.set,p=u.getterFor(f);s.exports=h(Array,"Array",function(m,y){d(this,{type:f,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,h=o("83ab"),f=l(function(){u(1)}),d=!h||f;a({target:"Object",stat:!0,forced:d,sham:!h},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(s,i,o){var a=o("b622");i.f=a},e893:function(s,i,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");s.exports=function(h,f){for(var d=l(f),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(h,v)||p(h,v,m(f,v))}}},e8b5:function(s,i,o){var a=o("c6b6");s.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(s,i,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;s.exports=function(h){return h!==void 0&&(l.Array===h||u[c]===h)}},f5df:function(s,i,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),h=l(function(){return arguments}())=="Arguments",f=function(d,p){try{return d[p]}catch{}};s.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=f(p=Object(d),u))=="string"?m:h?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(s,i,o){var a=o("5692"),l=o("90e3"),c=a("keys");s.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(s,i,o){if(o.r(i),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(A,R,D){return R in A?Object.defineProperty(A,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):A[R]=D,A}function h(A,R){var D=Object.keys(A);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(A);R&&(V=V.filter(function(re){return Object.getOwnPropertyDescriptor(A,re).enumerable})),D.push.apply(D,V)}return D}function f(A){for(var R=1;R<arguments.length;R++){var D=arguments[R]!=null?arguments[R]:{};R%2?h(Object(D),!0).forEach(function(V){u(A,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(V){Object.defineProperty(A,V,Object.getOwnPropertyDescriptor(D,V))})}return A}function d(A){if(Array.isArray(A))return A}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(A,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(A)))){var D=[],V=!0,re=!1,Ee=void 0;try{for(var de=A[Symbol.iterator](),De;!(V=(De=de.next()).done)&&(D.push(De.value),!(R&&D.length===R));V=!0);}catch(vt){re=!0,Ee=vt}finally{try{!V&&de.return!=null&&de.return()}finally{if(re)throw Ee}}return D}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(A,R){(R==null||R>A.length)&&(R=A.length);for(var D=0,V=new Array(R);D<R;D++)V[D]=A[D];return V}function y(A,R){if(A){if(typeof A=="string")return m(A,R);var D=Object.prototype.toString.call(A).slice(8,-1);if(D==="Object"&&A.constructor&&(D=A.constructor.name),D==="Map"||D==="Set")return Array.from(A);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(A,R)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(A,R){return d(A)||p(A,R)||y(A,R)||v()}function E(A){if(Array.isArray(A))return m(A)}function w(A){if(typeof Symbol<"u"&&Symbol.iterator in Object(A))return Array.from(A)}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(A){return E(A)||w(A)||y(A)||T()}var x=o("a352"),I=o.n(x);function C(A){A.parentElement!==null&&A.parentElement.removeChild(A)}function P(A,R,D){var V=D===0?A.children[0]:A.children[D-1].nextSibling;A.insertBefore(R,V)}var L=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(A){var R=Object.create(null);return function(V){var re=R[V];return re||(R[V]=A(V))}}var k=/-(\w)/g,O=U(function(A){return A.replace(k,function(R,D){return D.toUpperCase()})});o("5db7"),o("73d9");var J=["Start","Add","Remove","Update","End"],j=["Choose","Unchoose","Sort","Filter","Clone"],q=["Move"],ie=[q,J,j].flatMap(function(A){return A}).map(function(A){return"on".concat(A)}),$e={manage:q,manageAndEmit:J,emit:j};function ft(A){return ie.indexOf(A)!==-1}o("caad"),o("2ca0");var Ke=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Fe(A){return Ke.includes(A)}function ut(A){return["transition-group","TransitionGroup"].includes(A)}function St(A){return["id","class","role","style"].includes(A)||A.startsWith("data-")||A.startsWith("aria-")||A.startsWith("on")}function M(A){return A.reduce(function(R,D){var V=g(D,2),re=V[0],Ee=V[1];return R[re]=Ee,R},{})}function G(A){var R=A.$attrs,D=A.componentData,V=D===void 0?{}:D,re=M(Object.entries(R).filter(function(Ee){var de=g(Ee,2),De=de[0];return de[1],St(De)}));return f(f({},re),V)}function H(A){var R=A.$attrs,D=A.callBackBuilder,V=M(ne(R));Object.entries(D).forEach(function(Ee){var de=g(Ee,2),De=de[0],vt=de[1];$e[De].forEach(function(Ce){V["on".concat(Ce)]=vt(Ce)})});var re="[data-draggable]".concat(V.draggable||"");return f(f({},V),{},{draggable:re})}function ne(A){return Object.entries(A).filter(function(R){var D=g(R,2),V=D[0];return D[1],!St(V)}).map(function(R){var D=g(R,2),V=D[0],re=D[1];return[O(V),re]}).filter(function(R){var D=g(R,2),V=D[0];return D[1],!ft(V)})}o("c740");function we(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}function Xe(A,R){for(var D=0;D<R.length;D++){var V=R[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(A,V.key,V)}}function Ie(A,R,D){return R&&Xe(A.prototype,R),D&&Xe(A,D),A}var _=function(R){var D=R.el;return D},b=function(R,D){return R.__draggable_context=D},N=function(R){return R.__draggable_context},F=function(){function A(R){var D=R.nodes,V=D.header,re=D.default,Ee=D.footer,de=R.root,De=R.realList;we(this,A),this.defaultNodes=re,this.children=[].concat(S(V),S(re),S(Ee)),this.externalComponent=de.externalComponent,this.rootTransition=de.transition,this.tag=de.tag,this.realList=De}return Ie(A,[{key:"render",value:function(D,V){var re=this.tag,Ee=this.children,de=this._isRootComponent,De=de?{default:function(){return Ee}}:Ee;return D(re,V,De)}},{key:"updated",value:function(){var D=this.defaultNodes,V=this.realList;D.forEach(function(re,Ee){b(_(re),{element:V[Ee],index:Ee})})}},{key:"getUnderlyingVm",value:function(D){return N(D)}},{key:"getVmIndexFromDomIndex",value:function(D,V){var re=this.defaultNodes,Ee=re.length,de=V.children,De=de.item(D);if(De===null)return Ee;var vt=N(De);if(vt)return vt.index;if(Ee===0)return 0;var Ce=_(re[0]),ue=S(de).findIndex(function(_e){return _e===Ce});return D<ue?0:Ee}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),A}(),$=o("8bbf");function W(A,R){var D=A[R];return D?D():[]}function Z(A){var R=A.$slots,D=A.realList,V=A.getKey,re=D||[],Ee=["header","footer"].map(function(_e){return W(R,_e)}),de=g(Ee,2),De=de[0],vt=de[1],Ce=R.item;if(!Ce)throw new Error("draggable element must have an item slot");var ue=re.flatMap(function(_e,Ve){return Ce({element:_e,index:Ve}).map(function(Qe){return Qe.key=V(_e),Qe.props=f(f({},Qe.props||{}),{},{"data-draggable":!0}),Qe})});if(ue.length!==re.length)throw new Error("Item slot must have only one child");return{header:De,footer:vt,default:ue}}function X(A){var R=ut(A),D=!Fe(A)&&!R;return{transition:R,externalComponent:D,tag:D?Object($.resolveComponent)(A):R?$.TransitionGroup:A}}function Y(A){var R=A.$slots,D=A.tag,V=A.realList,re=A.getKey,Ee=Z({$slots:R,realList:V,getKey:re}),de=X(D);return new F({nodes:Ee,root:de,realList:V})}function B(A,R){var D=this;Object($.nextTick)(function(){return D.$emit(A.toLowerCase(),R)})}function le(A){var R=this;return function(D,V){if(R.realList!==null)return R["onDrag".concat(A)](D,V)}}function se(A){var R=this,D=le.call(this,A);return function(V,re){D.call(R,V,re),B.call(R,A,V)}}var ce=null,ye={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(R){return R}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},Pe=["update:modelValue","change"].concat(S([].concat(S($e.manageAndEmit),S($e.emit)).map(function(A){return A.toLowerCase()}))),Ze=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:ye,emits:Pe,data:function(){return{error:!1}},render:function(){try{this.error=!1;var R=this.$slots,D=this.$attrs,V=this.tag,re=this.componentData,Ee=this.realList,de=this.getKey,De=Y({$slots:R,tag:V,realList:Ee,getKey:de});this.componentStructure=De;var vt=G({$attrs:D,componentData:re});return De.render($.h,vt)}catch(Ce){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},Ce.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&L.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var R=this;if(!this.error){var D=this.$attrs,V=this.$el,re=this.componentStructure;re.updated();var Ee=H({$attrs:D,callBackBuilder:{manageAndEmit:function(vt){return se.call(R,vt)},emit:function(vt){return B.bind(R,vt)},manage:function(vt){return le.call(R,vt)}}}),de=V.nodeType===1?V:V.parentElement;this._sortable=new I.a(de,Ee),this.targetDomElement=de,de.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var R=this.list;return R||this.modelValue},getKey:function(){var R=this.itemKey;return typeof R=="function"?R:function(D){return D[R]}}},watch:{$attrs:{handler:function(R){var D=this._sortable;D&&ne(R).forEach(function(V){var re=g(V,2),Ee=re[0],de=re[1];D.option(Ee,de)})},deep:!0}},methods:{getUnderlyingVm:function(R){return this.componentStructure.getUnderlyingVm(R)||null},getUnderlyingPotencialDraggableComponent:function(R){return R.__draggable_component__},emitChanges:function(R){var D=this;Object($.nextTick)(function(){return D.$emit("change",R)})},alterList:function(R){if(this.list){R(this.list);return}var D=S(this.modelValue);R(D),this.$emit("update:modelValue",D)},spliceList:function(){var R=arguments,D=function(re){return re.splice.apply(re,S(R))};this.alterList(D)},updatePosition:function(R,D){var V=function(Ee){return Ee.splice(D,0,Ee.splice(R,1)[0])};this.alterList(V)},getRelatedContextFromMoveEvent:function(R){var D=R.to,V=R.related,re=this.getUnderlyingPotencialDraggableComponent(D);if(!re)return{component:re};var Ee=re.realList,de={list:Ee,component:re};if(D!==V&&Ee){var De=re.getUnderlyingVm(V)||{};return f(f({},De),de)}return de},getVmIndexFromDomIndex:function(R){return this.componentStructure.getVmIndexFromDomIndex(R,this.targetDomElement)},onDragStart:function(R){this.context=this.getUnderlyingVm(R.item),R.item._underlying_vm_=this.clone(this.context.element),ce=R.item},onDragAdd:function(R){var D=R.item._underlying_vm_;if(D!==void 0){C(R.item);var V=this.getVmIndexFromDomIndex(R.newIndex);this.spliceList(V,0,D);var re={element:D,newIndex:V};this.emitChanges({added:re})}},onDragRemove:function(R){if(P(this.$el,R.item,R.oldIndex),R.pullMode==="clone"){C(R.clone);return}var D=this.context,V=D.index,re=D.element;this.spliceList(V,1);var Ee={element:re,oldIndex:V};this.emitChanges({removed:Ee})},onDragUpdate:function(R){C(R.item),P(R.from,R.item,R.oldIndex);var D=this.context.index,V=this.getVmIndexFromDomIndex(R.newIndex);this.updatePosition(D,V);var re={element:this.context.element,oldIndex:D,newIndex:V};this.emitChanges({moved:re})},computeFutureIndex:function(R,D){if(!R.element)return 0;var V=S(D.to.children).filter(function(De){return De.style.display!=="none"}),re=V.indexOf(D.related),Ee=R.component.getVmIndexFromDomIndex(re),de=V.indexOf(ce)!==-1;return de||!D.willInsertAfter?Ee:Ee+1},onDragMove:function(R,D){var V=this.move,re=this.realList;if(!V||!re)return!0;var Ee=this.getRelatedContextFromMoveEvent(R),de=this.computeFutureIndex(Ee,R),De=f(f({},this.context),{},{futureIndex:de}),vt=f(f({},R),{},{relatedContext:Ee,draggedContext:De});return V(vt,D)},onDragEnd:function(){ce=null}}}),We=Ze;i.default=We},fb6a:function(s,i,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),h=o("50c4"),f=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),w=[].slice,T=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(x,I){var C=f(this),P=h(C.length),L=u(x,P),U=u(I===void 0?P:I,P),k,O,J;if(c(C)&&(k=C.constructor,typeof k=="function"&&(k===Array||c(k.prototype))?k=void 0:l(k)&&(k=k[E],k===null&&(k=void 0)),k===Array||k===void 0))return w.call(C,L,U);for(O=new(k===void 0?Array:k)(T(U-L,0)),J=0;L<U;L++,J++)L in C&&d(O,J,C[L]);return O.length=J,O}})},fc6a:function(s,i,o){var a=o("44ad"),l=o("1d80");s.exports=function(c){return a(l(c))}},fdbc:function(s,i){s.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(s,i,o){var a=o("4930");s.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(oB);const KB=q$($p),WB=t=>(l_("data-v-bdf62c14"),t=t(),c_(),t),GB=WB(()=>Te("h3",{class:"title-secondary"},"My Work",-1)),zB=st({__name:"Projects",setup(t){const e=rc(),{moveProject:n}=e,{projects:r}=$s(e),s=o=>{o.moved&&n(o.moved.oldIndex,o.moved.newIndex)},i=()=>{Ni(()=>{const o=document.querySelectorAll(".transition-opacity");o.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),H$(Array.from(o),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return Wr(()=>r.value,(o,a)=>{o>a&&i()}),js(()=>{i()}),(o,a)=>(ge(),at(lt,null,[GB,pe(fe(KB),{class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none","model-value":fe(r),"item-key":"index",onChange:s,animation:150,delay:50},{item:At(({element:l})=>[pe(ic,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",name:l.name,url:l.url,description:l.description,loading:l.loading},{default:At(()=>[(ge(!0),at(lt,null,Uo(l.technologies,c=>(ge(),bt(iB,{class:"m-1 md:mt-2",text:c.name,color:c.color},null,8,["text","color"]))),256))]),_:2},1032,["name","url","description","loading"])]),_:1},8,["model-value"])],64))}});const YB=Jm(zB,[["__scopeId","data-v-bdf62c14"]]),XB={class:"grid mt-20"},QB=st({__name:"Home",setup(t){return(e,n)=>(ge(),bt(sc,null,{content:At(()=>[Te("div",XB,[pe(YB)])]),_:1}))}}),qB=st({__name:"Home",setup(t){return(e,n)=>(ge(),bt(QB))}}),JB={class:"flex flex-col items-center content-center"},ZB={class:"flex items-center mt-10 gap-3 flex-wrap md:flex-nowrap"},e9=Te("button",{class:"button-primary w-full md:w-2/3",type:"submit"}," Login ",-1),t9=st({__name:"Login",setup(t){const e=Xr(),n=wn(),r=wn(),s=fr({email:{value:"",error:""},password:{value:"",error:""}}),i=async()=>{await Promise.all([n.value.test(),r.value.test()]),!s.email.error&&!s.password.error&&e.login(s.email.value,s.password.value)};return(o,a)=>{const l=Ol("RouterLink");return ge(),bt(sc,null,{content:At(()=>[pe(ic,{class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Login",description:"Please login using your e-mail and password."},{default:At(()=>[Te("div",JB,[Te("form",{class:"w-full lg:w-1/2 px-8 pt-6 pb-8 mb-4",onSubmit:a[4]||(a[4]=xh(c=>i(),["prevent"]))},[pe(go,{ref_key:"email",ref:n,name:"email","display-name":"E-mail",placeholder:"E-mail",state:s,rules:[fe(Zn).required,fe(Zn).email],onUpdate:a[0]||(a[0]=c=>s.email.value=c),onError:a[1]||(a[1]=c=>s.email.error=c)},null,8,["state","rules"]),pe(go,{ref_key:"password",ref:r,name:"password","display-name":"Password",placeholder:"Password",state:s,"input-props":{type:"password"},rules:[fe(Zn).required],onUpdate:a[2]||(a[2]=c=>s.password.value=c),onError:a[3]||(a[3]=c=>s.password.error=c)},null,8,["state","rules"]),Te("div",ZB,[e9,pe(l,{to:{name:"register"},class:"button-outlined-primary w-full md:w-1/3",type:"button"},{default:At(()=>[Fn(" Register ")]),_:1})])],32)])]),_:1})]),_:1})}}}),n9=st({__name:"Login",setup(t){return(e,n)=>(ge(),bt(t9))}}),r9=st({__name:"NotFound",setup(t){return(e,n)=>(ge(),bt(sc,null,{content:At(()=>[pe(ic,{class:"!bg-red-800 !bg-opacity-50 my-5",name:"Not found.",description:"Where are you going?"})]),_:1}))}}),s9=st({__name:"NotFound",setup(t){return(e,n)=>(ge(),bt(r9))}}),i9={class:"flex flex-col items-center content-center"},o9={class:"flex items-center mt-10 gap-3 flex-wrap md:flex-nowrap"},a9=Te("button",{class:"button-primary w-full md:w-2/3",type:"submit"}," Register ",-1),l9=st({__name:"Register",setup(t){const e=Xr(),n=wn(),r=wn(),s=wn(),i=fr({email:{value:"",error:""},password:{value:"",error:""},name:{value:"",error:""}}),o=async()=>{await Promise.all([n.value.test(),r.value.test(),s.value.test()]),!i.email.error&&!i.password.error&&!i.name.error&&e.register(i.email.value,i.password.value,i.name.value)};return(a,l)=>{const c=Ol("RouterLink");return ge(),bt(sc,null,{content:At(()=>[pe(ic,{class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Register",description:"Please register using your e-mail, password and first name."},{default:At(()=>[Te("div",i9,[Te("form",{class:"w-full lg:w-1/2 px-8 pt-6 pb-8 mb-4",onSubmit:l[6]||(l[6]=xh(u=>o(),["prevent"]))},[pe(go,{ref_key:"name",ref:s,name:"name","display-name":"First Name",placeholder:"Someone",state:i,rules:[fe(Zn).required,fe(Zn).minLength3],onUpdate:l[0]||(l[0]=u=>i.name.value=u),onError:l[1]||(l[1]=u=>i.name.error=u)},null,8,["state","rules"]),pe(go,{ref_key:"email",ref:n,name:"email","display-name":"E-mail",placeholder:"someone@example.com",state:i,rules:[fe(Zn).required,fe(Zn).email],onUpdate:l[2]||(l[2]=u=>i.email.value=u),onError:l[3]||(l[3]=u=>i.email.error=u)},null,8,["state","rules"]),pe(go,{ref_key:"password",ref:r,name:"password","display-name":"Password",placeholder:"******",state:i,"input-props":{type:"password"},rules:[fe(Zn).required,fe(Zn).minLength6],onUpdate:l[4]||(l[4]=u=>i.password.value=u),onError:l[5]||(l[5]=u=>i.password.error=u)},null,8,["state","rules"]),Te("div",o9,[a9,pe(c,{to:{name:"login"},class:"button-outlined-primary w-full md:w-1/3",type:"button"},{default:At(()=>[Fn(" Login ")]),_:1})])],32)])]),_:1})]),_:1})}}}),c9=st({__name:"Register",setup(t){return(e,n)=>(ge(),bt(l9))}}),Fr=T$({history:j4(""),routes:[{path:"/",name:"home",meta:{title:"Home"},component:qB,beforeEnter:(t,e,n)=>{t.query.notfound?n({name:"notfound"}):n()}},{path:"/register",name:"register",meta:{title:"Register"},component:c9,beforeEnter:(t,e,n)=>{Xr().currentUser?n({name:"dashboard"}):n()}},{path:"/login",name:"login",meta:{title:"Login"},component:n9,beforeEnter:(t,e,n)=>{Xr().currentUser?n({name:"dashboard"}):n()}},{path:"/dashboard",name:"dashboard",meta:{title:"Dashboard"},component:tB,beforeEnter:(t,e,n)=>{Xr().currentUser?n():n({name:"login"})}},{path:"/:pathMatch(.*)*",name:"notfound",meta:{title:"404"},component:s9}]}),D0=yC.name;Fr.beforeResolve(t=>{document.title=D0+" | "+t.meta.title||D0});const lc=gw(D$);lc.use(Fr);lc.use(b4,{firebaseApp:hC,modules:[w4()]});lc.use(vC);lc.use(WR);lc.mount("#app");
