var HC=Object.defineProperty;var WC=(t,e,n)=>e in t?HC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dc=(t,e,n)=>(WC(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function KC(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(s){s(n)}),(r=t.get("*"))&&r.slice().map(function(s){s(e,n)})}}}function hh(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const GC="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",zC=hh(GC);function Ho(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Tt(r)?qC(r):Ho(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Tt(t))return t;if(ut(t))return t}}const YC=/;(?![^(]*\))/g,XC=/:([^]+)/,QC=/\/\*.*?\*\//gs;function qC(t){const e={};return t.replace(QC,"").split(YC).forEach(n=>{if(n){const r=n.split(XC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ni(t){let e="";if(Tt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Ni(t[n]);r&&(e+=r+" ")}else if(ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function JC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Tt(e)&&(t.class=Ni(e)),n&&(t.style=Ho(n)),t}const ZC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e1=hh(ZC);function j0(t){return!!t||t===""}function t1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ns(t[r],e[r]);return n}function Ns(t,e){if(t===e)return!0;let n=uv(t),r=uv(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rl(t),r=rl(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?t1(t,e):!1;if(n=ut(t),r=ut(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ns(t[o],e[o]))return!1}}return String(t)===String(e)}function fh(t,e){return t.findIndex(n=>Ns(n,e))}const Mt=t=>Tt(t)?t:t==null?"":le(t)||ut(t)&&(t.toString===V0||!Re(t.toString))?JSON.stringify(t,B0,2):String(t),B0=(t,e)=>e&&e.__v_isRef?B0(t,e.value):co(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pi(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!le(e)&&!H0(e)?String(e):e,ot={},lo=[],lr=()=>{},n1=()=>!1,r1=/^on[^a-z]/,xl=t=>r1.test(t),Qp=t=>t.startsWith("onUpdate:"),Dt=Object.assign,qp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},s1=Object.prototype.hasOwnProperty,qe=(t,e)=>s1.call(t,e),le=Array.isArray,co=t=>Wo(t)==="[object Map]",Pi=t=>Wo(t)==="[object Set]",uv=t=>Wo(t)==="[object Date]",i1=t=>Wo(t)==="[object RegExp]",Re=t=>typeof t=="function",Tt=t=>typeof t=="string",rl=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",Jp=t=>ut(t)&&Re(t.then)&&Re(t.catch),V0=Object.prototype.toString,Wo=t=>V0.call(t),o1=t=>Wo(t).slice(8,-1),H0=t=>Wo(t)==="[object Object]",Zp=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Da=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},a1=/-(\w)/g,Nn=dh(t=>t.replace(a1,(e,n)=>n?n.toUpperCase():"")),l1=/\B([A-Z])/g,zn=dh(t=>t.replace(l1,"-$1").toLowerCase()),Ol=dh(t=>t.charAt(0).toUpperCase()+t.slice(1)),ka=dh(t=>t?`on${Ol(t)}`:""),To=(t,e)=>!Object.is(t,e),uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},uu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fu=t=>{const e=Tt(t)?Number(t):NaN;return isNaN(e)?t:e};let hv;const c1=()=>hv||(hv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ln;class eg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!e&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ln;try{return Ln=this,e()}finally{Ln=n}}}on(){Ln=this}off(){Ln=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ph(t){return new eg(t)}function W0(t,e=Ln){e&&e.active&&e.effects.push(t)}function tg(){return Ln}function K0(t){Ln&&Ln.cleanups.push(t)}const ng=t=>{const e=new Set(t);return e.w=0,e.n=0,e},G0=t=>(t.w&Ps)>0,z0=t=>(t.n&Ps)>0,u1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},h1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];G0(s)&&!z0(s)?s.delete(t):e[n++]=s,s.w&=~Ps,s.n&=~Ps}e.length=n}},du=new WeakMap;let Ea=0,Ps=1;const bd=30;let nr;const li=Symbol(""),Td=Symbol("");class Nl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,W0(this,r)}run(){if(!this.active)return this.fn();let e=nr,n=Ss;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nr,nr=this,Ss=!0,Ps=1<<++Ea,Ea<=bd?u1(this):fv(this),this.fn()}finally{Ea<=bd&&h1(this),Ps=1<<--Ea,nr=this.parent,Ss=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nr===this?this.deferStop=!0:this.active&&(fv(this),this.onStop&&this.onStop(),this.active=!1)}}function fv(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function f1(t,e){t.effect&&(t=t.effect.fn);const n=new Nl(t);e&&(Dt(n,e),e.scope&&W0(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function d1(t){t.effect.stop()}let Ss=!0;const Y0=[];function Ko(){Y0.push(Ss),Ss=!1}function Go(){const t=Y0.pop();Ss=t===void 0?!0:t}function Dn(t,e,n){if(Ss&&nr){let r=du.get(t);r||du.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ng()),X0(s)}}function X0(t,e){let n=!1;Ea<=bd?z0(t)||(t.n|=Ps,n=!G0(t)):n=!t.has(nr),n&&(t.add(nr),nr.deps.push(t))}function qr(t,e,n,r,s,i){const o=du.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Zp(n)&&a.push(o.get("length")):(a.push(o.get(li)),co(t)&&a.push(o.get(Td)));break;case"delete":le(t)||(a.push(o.get(li)),co(t)&&a.push(o.get(Td)));break;case"set":co(t)&&a.push(o.get(li));break}if(a.length===1)a[0]&&Sd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Sd(ng(l))}}function Sd(t,e){const n=le(t)?t:[...t];for(const r of n)r.computed&&dv(r);for(const r of n)r.computed||dv(r)}function dv(t,e){(t!==nr||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function p1(t,e){var n;return(n=du.get(t))===null||n===void 0?void 0:n.get(e)}const g1=hh("__proto__,__v_isRef,__isVue"),Q0=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rl)),m1=gh(),v1=gh(!1,!0),y1=gh(!0),E1=gh(!0,!0),pv=w1();function w1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ue(this);for(let i=0,o=this.length;i<o;i++)Dn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ko();const r=Ue(this)[e].apply(this,n);return Go(),r}}),t}function _1(t){const e=Ue(this);return Dn(e,"has",t),e.hasOwnProperty(t)}function gh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?rw:nw:e?tw:ew).get(r))return r;const o=le(r);if(!t){if(o&&qe(pv,s))return Reflect.get(pv,s,i);if(s==="hasOwnProperty")return _1}const a=Reflect.get(r,s,i);return(rl(s)?Q0.has(s):g1(s))||(t||Dn(r,"get",s),e)?a:Ct(a)?o&&Zp(s)?a:a.value:ut(a)?t?sg(a):pr(a):a}}const b1=q0(),T1=q0(!0);function q0(t=!1){return function(n,r,s,i){let o=n[r];if(mi(o)&&Ct(o)&&!Ct(s))return!1;if(!t&&(!sl(s)&&!mi(s)&&(o=Ue(o),s=Ue(s)),!le(n)&&Ct(o)&&!Ct(s)))return o.value=s,!0;const a=le(n)&&Zp(r)?Number(r)<n.length:qe(n,r),l=Reflect.set(n,r,s,i);return n===Ue(i)&&(a?To(s,o)&&qr(n,"set",r,s):qr(n,"add",r,s)),l}}function S1(t,e){const n=qe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qr(t,"delete",e,void 0),r}function I1(t,e){const n=Reflect.has(t,e);return(!rl(e)||!Q0.has(e))&&Dn(t,"has",e),n}function C1(t){return Dn(t,"iterate",le(t)?"length":li),Reflect.ownKeys(t)}const J0={get:m1,set:b1,deleteProperty:S1,has:I1,ownKeys:C1},Z0={get:y1,set(t,e){return!0},deleteProperty(t,e){return!0}},A1=Dt({},J0,{get:v1,set:T1}),R1=Dt({},Z0,{get:E1}),rg=t=>t,mh=t=>Reflect.getPrototypeOf(t);function pc(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ue(t),i=Ue(e);n||(e!==i&&Dn(s,"get",e),Dn(s,"get",i));const{has:o}=mh(s),a=r?rg:n?og:il;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gc(t,e=!1){const n=this.__v_raw,r=Ue(n),s=Ue(t);return e||(t!==s&&Dn(r,"has",t),Dn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function mc(t,e=!1){return t=t.__v_raw,!e&&Dn(Ue(t),"iterate",li),Reflect.get(t,"size",t)}function gv(t){t=Ue(t);const e=Ue(this);return mh(e).has.call(e,t)||(e.add(t),qr(e,"add",t,t)),this}function mv(t,e){e=Ue(e);const n=Ue(this),{has:r,get:s}=mh(n);let i=r.call(n,t);i||(t=Ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?To(e,o)&&qr(n,"set",t,e):qr(n,"add",t,e),this}function vv(t){const e=Ue(this),{has:n,get:r}=mh(e);let s=n.call(e,t);s||(t=Ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qr(e,"delete",t,void 0),i}function yv(){const t=Ue(this),e=t.size!==0,n=t.clear();return e&&qr(t,"clear",void 0,void 0),n}function vc(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ue(o),l=e?rg:t?og:il;return!t&&Dn(a,"iterate",li),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function yc(t,e,n){return function(...r){const s=this.__v_raw,i=Ue(s),o=co(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?rg:e?og:il;return!e&&Dn(i,"iterate",l?Td:li),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function os(t){return function(...e){return t==="delete"?!1:this}}function x1(){const t={get(i){return pc(this,i)},get size(){return mc(this)},has:gc,add:gv,set:mv,delete:vv,clear:yv,forEach:vc(!1,!1)},e={get(i){return pc(this,i,!1,!0)},get size(){return mc(this)},has:gc,add:gv,set:mv,delete:vv,clear:yv,forEach:vc(!1,!0)},n={get(i){return pc(this,i,!0)},get size(){return mc(this,!0)},has(i){return gc.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:vc(!0,!1)},r={get(i){return pc(this,i,!0,!0)},get size(){return mc(this,!0)},has(i){return gc.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:vc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yc(i,!1,!1),n[i]=yc(i,!0,!1),e[i]=yc(i,!1,!0),r[i]=yc(i,!0,!0)}),[t,n,e,r]}const[O1,N1,P1,D1]=x1();function vh(t,e){const n=e?t?D1:P1:t?N1:O1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(qe(n,s)&&s in r?n:r,s,i)}const k1={get:vh(!1,!1)},M1={get:vh(!1,!0)},L1={get:vh(!0,!1)},F1={get:vh(!0,!0)},ew=new WeakMap,tw=new WeakMap,nw=new WeakMap,rw=new WeakMap;function U1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $1(t){return t.__v_skip||!Object.isExtensible(t)?0:U1(o1(t))}function pr(t){return mi(t)?t:yh(t,!1,J0,k1,ew)}function sw(t){return yh(t,!1,A1,M1,tw)}function sg(t){return yh(t,!0,Z0,L1,nw)}function j1(t){return yh(t,!0,R1,F1,rw)}function yh(t,e,n,r,s){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function _r(t){return mi(t)?_r(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function sl(t){return!!(t&&t.__v_isShallow)}function ig(t){return _r(t)||mi(t)}function Ue(t){const e=t&&t.__v_raw;return e?Ue(e):t}function vi(t){return uu(t,"__v_skip",!0),t}const il=t=>ut(t)?pr(t):t,og=t=>ut(t)?sg(t):t;function ag(t){Ss&&nr&&(t=Ue(t),X0(t.dep||(t.dep=ng())))}function Eh(t,e){t=Ue(t);const n=t.dep;n&&Sd(n)}function Ct(t){return!!(t&&t.__v_isRef===!0)}function $t(t){return ow(t,!1)}function iw(t){return ow(t,!0)}function ow(t,e){return Ct(t)?t:new B1(t,e)}class B1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ue(e),this._value=n?e:il(e)}get value(){return ag(this),this._value}set value(e){const n=this.__v_isShallow||sl(e)||mi(e);e=n?e:Ue(e),To(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:il(e),Eh(this))}}function V1(t){Eh(t)}function se(t){return Ct(t)?t.value:t}const H1={get:(t,e,n)=>se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lg(t){return _r(t)?t:new Proxy(t,H1)}class W1{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ag(this),()=>Eh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function K1(t){return new W1(t)}function aw(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=cg(t,n);return e}class G1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return p1(Ue(this._object),this._key)}}function cg(t,e,n){const r=t[e];return Ct(r)?r:new G1(t,e,n)}var lw;class z1{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[lw]=!1,this._dirty=!0,this.effect=new Nl(e,()=>{this._dirty||(this._dirty=!0,Eh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ue(this);return ag(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}lw="__v_isReadonly";function Y1(t,e,n=!1){let r,s;const i=Re(t);return i?(r=t,s=lr):(r=t.get,s=t.set),new z1(r,s,i||!s,n)}function X1(t,...e){}function Q1(t,e){}function zr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Di(i,e,n)}return s}function $n(t,e,n,r){if(Re(t)){const i=zr(t,e,n,r);return i&&Jp(i)&&i.catch(o=>{Di(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($n(t[i],e,n,r));return s}function Di(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){zr(l,null,10,[t,o,a]);return}}q1(t,n,s,r)}function q1(t,e,n,r=!0){console.error(t)}let ol=!1,Id=!1;const hn=[];let mr=0;const ho=[];let jr=null,ti=0;const cw=Promise.resolve();let ug=null;function ki(t){const e=ug||cw;return t?e.then(this?t.bind(this):t):e}function J1(t){let e=mr+1,n=hn.length;for(;e<n;){const r=e+n>>>1;al(hn[r])<t?e=r+1:n=r}return e}function wh(t){(!hn.length||!hn.includes(t,ol&&t.allowRecurse?mr+1:mr))&&(t.id==null?hn.push(t):hn.splice(J1(t.id),0,t),uw())}function uw(){!ol&&!Id&&(Id=!0,ug=cw.then(hw))}function Z1(t){const e=hn.indexOf(t);e>mr&&hn.splice(e,1)}function hg(t){le(t)?ho.push(...t):(!jr||!jr.includes(t,t.allowRecurse?ti+1:ti))&&ho.push(t),uw()}function Ev(t,e=ol?mr+1:0){for(;e<hn.length;e++){const n=hn[e];n&&n.pre&&(hn.splice(e,1),e--,n())}}function pu(t){if(ho.length){const e=[...new Set(ho)];if(ho.length=0,jr){jr.push(...e);return}for(jr=e,jr.sort((n,r)=>al(n)-al(r)),ti=0;ti<jr.length;ti++)jr[ti]();jr=null,ti=0}}const al=t=>t.id==null?1/0:t.id,eA=(t,e)=>{const n=al(t)-al(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hw(t){Id=!1,ol=!0,hn.sort(eA);const e=lr;try{for(mr=0;mr<hn.length;mr++){const n=hn[mr];n&&n.active!==!1&&zr(n,null,14)}}finally{mr=0,hn.length=0,pu(),ol=!1,ug=null,(hn.length||ho.length)&&hw()}}let qi,Ec=[];function fw(t,e){var n,r;qi=t,qi?(qi.enabled=!0,Ec.forEach(({event:s,args:i})=>qi.emit(s,...i)),Ec=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{fw(i,e)}),setTimeout(()=>{qi||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ec=[])},3e3)):Ec=[]}function tA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ot;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ot;f&&(s=n.map(d=>Tt(d)?d.trim():d)),h&&(s=n.map(hu))}let a,l=r[a=ka(e)]||r[a=ka(Nn(e))];!l&&i&&(l=r[a=ka(zn(e))]),l&&$n(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$n(c,t,6,s)}}function dw(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Re(t)){const l=c=>{const u=dw(c,e,!0);u&&(a=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ut(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):Dt(o,i),ut(t)&&r.set(t,o),o)}function _h(t,e){return!t||!xl(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,zn(e))||qe(t,e))}let tn=null,bh=null;function ll(t){const e=tn;return tn=t,bh=t&&t.type.__scopeId||null,e}function pw(t){bh=t}function gw(){bh=null}const nA=t=>At;function At(t,e=tn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dd(-1);const i=ll(e);let o;try{o=t(...s)}finally{ll(i),r._d&&Dd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=ll(t);try{if(n.shapeFlag&4){const _=s||r;y=Fn(u.call(_,_,h,i,d,f,p)),v=l}else{const _=e;y=Fn(_.length>1?_(i,{attrs:l,slots:a,emit:c}):_(i,null)),v=e.props?l:sA(l)}}catch(_){Fa.length=0,Di(_,t,1),y=pe(gn)}let E=y;if(v&&m!==!1){const _=Object.keys(v),{shapeFlag:T}=E;_.length&&T&7&&(o&&_.some(Qp)&&(v=iA(v,o)),E=Rr(E,v))}return n.dirs&&(E=Rr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,ll(g),y}function rA(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ds(r)){if(r.type!==gn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const sA=t=>{let e;for(const n in t)(n==="class"||n==="style"||xl(n))&&((e||(e={}))[n]=t[n]);return e},iA=(t,e)=>{const n={};for(const r in t)(!Qp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function oA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wv(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!_h(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wv(r,o,c):!0:!!o;return!1}function wv(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_h(n,i))return!0}return!1}function fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mw=t=>t.__isSuspense,aA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?cA(e,n,r,s,i,o,a,l,c):uA(t,e,n,r,s,o,a,l,c)},hydrate:hA,create:dg,normalize:fA},lA=aA;function cl(t,e){const n=t.props&&t.props[e];Re(n)&&n()}function cA(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=dg(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(cl(t,"onPending"),cl(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),fo(f,t.ssFallback)):f.resolve()}function uA(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=h;if(m)h.pendingBranch=f,rr(f,m)?(l(m,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():y&&(l(p,d,n,r,s,null,i,o,a),fo(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):c(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),fo(h,d))):p&&rr(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&rr(f,p))l(p,f,n,r,s,h,i,o,a),fo(h,f);else if(cl(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function dg(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:y}}=c,v=t.props?fu(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:_,activeBranch:T,pendingBranch:S,pendingId:x,effects:I,parentComponent:C,container:P}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const k=T&&S.transition&&S.transition.mode==="out-in";k&&(T.transition.afterLeave=()=>{x===g.pendingId&&f(S,P,O,0)});let{anchor:O}=g;T&&(O=p(T),d(T,C,g,!0)),k||f(S,P,O,0)}fo(g,S),g.pendingBranch=null,g.isInFallback=!1;let L=g.parent,U=!1;for(;L;){if(L.pendingBranch){L.effects.push(...I),U=!0;break}L=L.parent}U||hg(I),g.effects=[],cl(_,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:_,activeBranch:T,parentComponent:S,container:x,isSVG:I}=g;cl(_,"onFallback");const C=p(T),P=()=>{g.isInFallback&&(h(null,E,x,C,S,null,I,a,l),fo(g,E))},L=E.transition&&E.transition.mode==="out-in";L&&(T.transition.afterLeave=P),g.isInFallback=!0,d(T,S,null,!0),L||P()},move(E,_,T){g.activeBranch&&f(g.activeBranch,E,_,T),g.container=E},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(E,_){const T=!!g.pendingBranch;T&&g.deps++;const S=E.vnode.el;E.asyncDep.catch(x=>{Di(x,E,0)}).then(x=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:I}=E;kd(E,x,!1),S&&(I.el=S);const C=!S&&E.subTree.el;_(E,I,m(S||E.subTree.el),S?null:p(E.subTree),g,o,l),C&&y(C),fg(E,I.el),T&&--g.deps===0&&g.resolve()})},unmount(E,_){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,_),g.pendingBranch&&d(g.pendingBranch,n,E,_)}};return g}function hA(t,e,n,r,s,i,o,a,l){const c=e.suspense=dg(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function fA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=_v(r?n.default:n),t.ssFallback=r?_v(n.fallback):pe(gn)}function _v(t){let e;if(Re(t)){const n=wi&&t._c;n&&(t._d=!1,de()),t=t(),n&&(t._d=!0,e=xn,Hw())}return le(t)&&(t=rA(t)),t=Fn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function vw(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):hg(t)}function fo(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,fg(r,s))}function po(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function jn(t,e,n=!1){const r=Pt||tn;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Re(e)?e.call(r.proxy):e}}function dA(t,e){return Pl(t,null,e)}function yw(t,e){return Pl(t,null,{flush:"post"})}function pA(t,e){return Pl(t,null,{flush:"sync"})}const wc={};function Is(t,e,n){return Pl(t,e,n)}function Pl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ot){const a=tg()===(Pt==null?void 0:Pt.scope)?Pt:null;let l,c=!1,u=!1;if(Ct(t)?(l=()=>t.value,c=sl(t)):_r(t)?(l=()=>t,r=!0):le(t)?(u=!0,c=t.some(E=>_r(E)||sl(E)),l=()=>t.map(E=>{if(Ct(E))return E.value;if(_r(E))return ri(E);if(Re(E))return zr(E,a,2)})):Re(t)?e?l=()=>zr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),$n(t,a,3,[f])}:l=lr,e&&r){const E=l;l=()=>ri(E())}let h,f=E=>{h=v.onStop=()=>{zr(E,a,4)}},d;if(Io)if(f=lr,e?n&&$n(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const E=e_();d=E.__watcherHandles||(E.__watcherHandles=[])}else return lr;let p=u?new Array(t.length).fill(wc):wc;const m=()=>{if(v.active)if(e){const E=v.run();(r||c||(u?E.some((_,T)=>To(_,p[T])):To(E,p)))&&(h&&h(),$n(e,a,3,[E,p===wc?void 0:u&&p[0]===wc?[]:p,f]),p=E)}else v.run()};m.allowRecurse=!!e;let y;s==="sync"?y=m:s==="post"?y=()=>qt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>wh(m));const v=new Nl(l,y);e?n?m():p=v.run():s==="post"?qt(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&qp(a.scope.effects,v)};return d&&d.push(g),g}function gA(t,e,n){const r=this.proxy,s=Tt(t)?t.includes(".")?Ew(r,t):()=>r[t]:t.bind(r,r);let i;Re(e)?i=e:(i=e.handler,n=e);const o=Pt;ks(this);const a=Pl(s,i.bind(r),n);return o?ks(o):Cs(),a}function Ew(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ri(t,e){if(!ut(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ct(t))ri(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)ri(t[n],e);else if(Pi(t)||co(t))t.forEach(n=>{ri(n,e)});else if(H0(t))for(const n in t)ri(t[n],e);return t}function pg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hs(()=>{t.isMounted=!0}),Ch(()=>{t.isUnmounting=!0}),t}const Kn=[Function,Array],mA={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kn,onEnter:Kn,onAfterEnter:Kn,onEnterCancelled:Kn,onBeforeLeave:Kn,onLeave:Kn,onAfterLeave:Kn,onLeaveCancelled:Kn,onBeforeAppear:Kn,onAppear:Kn,onAfterAppear:Kn,onAppearCancelled:Kn},setup(t,{slots:e}){const n=Mr(),r=pg();let s;return()=>{const i=e.default&&Th(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const m of i)if(m.type!==gn){o=m;break}}const a=Ue(t),{mode:l}=a;if(r.isLeaving)return bf(o);const c=bv(o);if(!c)return bf(o);const u=So(c,a,r,n);yi(c,u);const h=n.subTree,f=h&&bv(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();s===void 0?s=m:m!==s&&(s=m,d=!0)}if(f&&f.type!==gn&&(!rr(c,f)||d)){const m=So(f,a,r,n);if(yi(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},bf(o);l==="in-out"&&c.type!==gn&&(m.delayLeave=(y,v,g)=>{const E=ww(r,f);E[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},gg=mA;function ww(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function So(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),_=ww(n,t),T=(I,C)=>{I&&$n(I,r,9,C)},S=(I,C)=>{const P=C[1];T(I,C),le(I)?I.every(L=>L.length<=1)&&P():I.length<=1&&P()},x={mode:i,persisted:o,beforeEnter(I){let C=a;if(!n.isMounted)if(s)C=m||a;else return;I._leaveCb&&I._leaveCb(!0);const P=_[E];P&&rr(t,P)&&P.el._leaveCb&&P.el._leaveCb(),T(C,[I])},enter(I){let C=l,P=c,L=u;if(!n.isMounted)if(s)C=y||l,P=v||c,L=g||u;else return;let U=!1;const k=I._enterCb=O=>{U||(U=!0,O?T(L,[I]):T(P,[I]),x.delayedLeave&&x.delayedLeave(),I._enterCb=void 0)};C?S(C,[I,k]):k()},leave(I,C){const P=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return C();T(h,[I]);let L=!1;const U=I._leaveCb=k=>{L||(L=!0,C(),k?T(p,[I]):T(d,[I]),I._leaveCb=void 0,_[P]===t&&delete _[P])};_[P]=t,f?S(f,[I,U]):U()},clone(I){return So(I,e,n,r)}};return x}function bf(t){if(Dl(t))return t=Rr(t),t.children=null,t}function bv(t){return Dl(t)?t.children?t.children[0]:void 0:t}function yi(t,e){t.shapeFlag&6&&t.component?yi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Th(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ct?(o.patchFlag&128&&s++,r=r.concat(Th(o.children,e,a))):(e||o.type!==gn)&&r.push(a!=null?Rr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function nt(t){return Re(t)?{setup:t,name:t.name}:t}const ci=t=>!!t.type.__asyncLoader;function vA(t){Re(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(h()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return nt({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Pt;if(c)return()=>Tf(c,d);const p=g=>{l=null,Di(g,d,13,!r)};if(o&&d.suspense||Io)return f().then(g=>()=>Tf(g,d)).catch(g=>(p(g),()=>r?pe(r,{error:g}):null));const m=$t(!1),y=$t(),v=$t(!!s);return s&&setTimeout(()=>{v.value=!1},s),i!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),y.value=g}},i),f().then(()=>{m.value=!0,d.parent&&Dl(d.parent.vnode)&&wh(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return Tf(c,d);if(y.value&&r)return pe(r,{error:y.value});if(n&&!v.value)return pe(n)}}})}function Tf(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Dl=t=>t.type.__isKeepAlive,yA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Mr(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,E,_,T,S)=>{const x=g.component;c(g,E,_,0,a),l(x.vnode,g,E,_,x,a,T,g.slotScopeIds,S),qt(()=>{x.isDeactivated=!1,x.a&&uo(x.a);const I=g.props&&g.props.onVnodeMounted;I&&Rn(I,x.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,f,null,1,a),qt(()=>{E.da&&uo(E.da);const _=g.props&&g.props.onVnodeUnmounted;_&&Rn(_,E.parent,g),E.isDeactivated=!0},a)};function d(g){Sf(g),u(g,n,a,!0)}function p(g){s.forEach((E,_)=>{const T=Ld(E.type);T&&(!g||!g(T))&&m(_)})}function m(g){const E=s.get(g);!o||!rr(E,o)?d(E):o&&Sf(o),s.delete(g),i.delete(g)}Is(()=>[t.include,t.exclude],([g,E])=>{g&&p(_=>wa(g,_)),E&&p(_=>!wa(E,_))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&s.set(y,If(n.subTree))};return Hs(v),Ih(v),Ch(()=>{s.forEach(g=>{const{subTree:E,suspense:_}=n,T=If(E);if(g.type===T.type&&g.key===T.key){Sf(T);const S=T.component.da;S&&qt(S,_);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!Ds(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let _=If(E);const T=_.type,S=Ld(ci(_)?_.type.__asyncResolved||{}:T),{include:x,exclude:I,max:C}=t;if(x&&(!S||!wa(x,S))||I&&S&&wa(I,S))return o=_,E;const P=_.key==null?T:_.key,L=s.get(P);return _.el&&(_=Rr(_),E.shapeFlag&128&&(E.ssContent=_)),y=P,L?(_.el=L.el,_.component=L.component,_.transition&&yi(_,_.transition),_.shapeFlag|=512,i.delete(P),i.add(P)):(i.add(P),C&&i.size>parseInt(C,10)&&m(i.values().next().value)),_.shapeFlag|=256,o=_,mw(E.type)?E:_}}},EA=yA;function wa(t,e){return le(t)?t.some(n=>wa(n,e)):Tt(t)?t.split(",").includes(e):i1(t)?t.test(e):!1}function _w(t,e){Tw(t,"a",e)}function bw(t,e){Tw(t,"da",e)}function Tw(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sh(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dl(s.parent.vnode)&&wA(r,e,n,s),s=s.parent}}function wA(t,e,n,r){const s=Sh(e,t,r,!0);Ah(()=>{qp(r[e],s)},n)}function Sf(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function If(t){return t.shapeFlag&128?t.ssContent:t}function Sh(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ko(),ks(n);const a=$n(e,n,t,o);return Cs(),Go(),a});return r?s.unshift(i):s.push(i),i}}const rs=t=>(e,n=Pt)=>(!Io||t==="sp")&&Sh(t,(...r)=>e(...r),n),Sw=rs("bm"),Hs=rs("m"),Iw=rs("bu"),Ih=rs("u"),Ch=rs("bum"),Ah=rs("um"),Cw=rs("sp"),Aw=rs("rtg"),Rw=rs("rtc");function xw(t,e=Pt){Sh("ec",t,e)}function Cd(t,e){const n=tn;if(n===null)return t;const r=xh(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ot]=e[i];o&&(Re(o)&&(o={mounted:o,updated:o}),o.deep&&ri(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ko(),$n(l,n,8,[t.el,a,t,e]),Go())}}const mg="components",_A="directives";function zo(t,e){return vg(mg,t,!0,e)||t}const Ow=Symbol();function bA(t){return Tt(t)?vg(mg,t,!1)||t:t||Ow}function TA(t){return vg(_A,t)}function vg(t,e,n=!0,r=!1){const s=tn||Pt;if(s){const i=s.type;if(t===mg){const a=Ld(i,!1);if(a&&(a===e||a===Nn(e)||a===Ol(Nn(e))))return i}const o=Tv(s[t]||i[t],e)||Tv(s.appContext[t],e);return!o&&r?i:o}}function Tv(t,e){return t&&(t[e]||t[Nn(e)]||t[Ol(Nn(e))])}function Mi(t,e,n,r){let s;const i=n&&n[r];if(le(t)||Tt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ut(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function SA(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(le(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function ui(t,e,n={},r,s){if(tn.isCE||tn.parent&&ci(tn.parent)&&tn.parent.isCE)return e!=="default"&&(n.name=e),pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),de();const o=i&&Nw(i(n)),a=lt(ct,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Nw(t){return t.some(e=>Ds(e)?!(e.type===gn||e.type===ct&&!Nw(e.children)):!0)?t:null}function IA(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:ka(r)]=t[r];return n}const Ad=t=>t?Yw(t)?xh(t)||t.proxy:Ad(t.parent):null,Ma=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ad(t.parent),$root:t=>Ad(t.root),$emit:t=>t.emit,$options:t=>yg(t),$forceUpdate:t=>t.f||(t.f=()=>wh(t.update)),$nextTick:t=>t.n||(t.n=ki.bind(t.proxy)),$watch:t=>gA.bind(t)}),Cf=(t,e)=>t!==ot&&!t.__isScriptSetup&&qe(t,e),Rd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cf(r,e))return o[e]=1,r[e];if(s!==ot&&qe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&qe(c,e))return o[e]=3,i[e];if(n!==ot&&qe(n,e))return o[e]=4,n[e];xd&&(o[e]=0)}}const u=Ma[e];let h,f;if(u)return e==="$attrs"&&Dn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ot&&qe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cf(s,e)?(s[e]=n,!0):r!==ot&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ot&&qe(t,o)||Cf(e,o)||(a=i[0])&&qe(a,o)||qe(r,o)||qe(Ma,o)||qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},CA=Dt({},Rd,{get(t,e){if(e!==Symbol.unscopables)return Rd.get(t,e,t)},has(t,e){return e[0]!=="_"&&!zC(e)}});let xd=!0;function AA(t){const e=yg(t),n=t.proxy,r=t.ctx;xd=!1,e.beforeCreate&&Sv(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:_,render:T,renderTracked:S,renderTriggered:x,errorCaptured:I,serverPrefetch:C,expose:P,inheritAttrs:L,components:U,directives:k,filters:O}=e;if(c&&RA(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const q in o){const oe=o[q];Re(oe)&&(r[q]=oe.bind(n))}if(s){const q=s.call(n,n);ut(q)&&(t.data=pr(q))}if(xd=!0,i)for(const q in i){const oe=i[q],$e=Re(oe)?oe.bind(n,n):Re(oe.get)?oe.get.bind(n,n):lr,dt=!Re(oe)&&Re(oe.set)?oe.set.bind(n):lr,We=jt({get:$e,set:dt});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>We.value,set:Fe=>We.value=Fe})}if(a)for(const q in a)Pw(a[q],r,n,q);if(l){const q=Re(l)?l.call(n):l;Reflect.ownKeys(q).forEach(oe=>{po(oe,q[oe])})}u&&Sv(u,t,"c");function j(q,oe){le(oe)?oe.forEach($e=>q($e.bind(n))):oe&&q(oe.bind(n))}if(j(Sw,h),j(Hs,f),j(Iw,d),j(Ih,p),j(_w,m),j(bw,y),j(xw,I),j(Rw,S),j(Aw,x),j(Ch,g),j(Ah,_),j(Cw,C),le(P))if(P.length){const q=t.exposed||(t.exposed={});P.forEach(oe=>{Object.defineProperty(q,oe,{get:()=>n[oe],set:$e=>n[oe]=$e})})}else t.exposed||(t.exposed={});T&&t.render===lr&&(t.render=T),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function RA(t,e,n=lr,r=!1){le(t)&&(t=Od(t));for(const s in t){const i=t[s];let o;ut(i)?"default"in i?o=jn(i.from||s,i.default,!0):o=jn(i.from||s):o=jn(i),Ct(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Sv(t,e,n){$n(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pw(t,e,n,r){const s=r.includes(".")?Ew(n,r):()=>n[r];if(Tt(t)){const i=e[t];Re(i)&&Is(s,i)}else if(Re(t))Is(s,t.bind(n));else if(ut(t))if(le(t))t.forEach(i=>Pw(i,e,n,r));else{const i=Re(t.handler)?t.handler.bind(n):e[t.handler];Re(i)&&Is(s,i,t)}}function yg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>gu(l,c,o,!0)),gu(l,e,o)),ut(e)&&i.set(e,l),l}function gu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gu(t,i,n,!0),s&&s.forEach(o=>gu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xA={data:Iv,props:qs,emits:qs,methods:qs,computed:qs,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:qs,directives:qs,watch:NA,provide:Iv,inject:OA};function Iv(t,e){return e?t?function(){return Dt(Re(t)?t.call(this,this):t,Re(e)?e.call(this,this):e)}:e:t}function OA(t,e){return qs(Od(t),Od(e))}function Od(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _n(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Dt(Dt(Object.create(null),t),e):e}function NA(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const r in e)n[r]=_n(t[r],e[r]);return n}function PA(t,e,n,r=!1){const s={},i={};uu(i,Rh,1),t.propsDefaults=Object.create(null),Dw(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function DA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ue(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_h(t.emitsOptions,f))continue;const d=e[f];if(l)if(qe(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=Nn(f);s[p]=Nd(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{Dw(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!qe(e,h)&&((u=zn(h))===h||!qe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Nd(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!qe(e,h))&&(delete i[h],c=!0)}c&&qr(t,"set","$attrs")}function Dw(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Da(l))continue;const c=e[l];let u;s&&qe(s,u=Nn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:_h(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ue(n),c=a||ot;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Nd(s,l,h,c[h],t,!qe(c,h))}}return o}function Nd(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=qe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Re(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ks(s),r=c[n]=l.call(null,e),Cs())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===zn(n))&&(r=!0))}return r}function kw(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Re(t)){const u=h=>{l=!0;const[f,d]=kw(h,e,!0);Dt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ut(t)&&r.set(t,lo),lo;if(le(i))for(let u=0;u<i.length;u++){const h=Nn(i[u]);Cv(h)&&(o[h]=ot)}else if(i)for(const u in i){const h=Nn(u);if(Cv(h)){const f=i[u],d=o[h]=le(f)||Re(f)?{type:f}:Object.assign({},f);if(d){const p=xv(Boolean,d.type),m=xv(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||qe(d,"default"))&&a.push(h)}}}const c=[o,a];return ut(t)&&r.set(t,c),c}function Cv(t){return t[0]!=="$"}function Av(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Rv(t,e){return Av(t)===Av(e)}function xv(t,e){return le(e)?e.findIndex(n=>Rv(n,t)):Re(e)&&Rv(e,t)?0:-1}const Mw=t=>t[0]==="_"||t==="$stable",Eg=t=>le(t)?t.map(Fn):[Fn(t)],kA=(t,e,n)=>{if(e._n)return e;const r=At((...s)=>Eg(e(...s)),n);return r._c=!1,r},Lw=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mw(s))continue;const i=t[s];if(Re(i))e[s]=kA(s,i,r);else if(i!=null){const o=Eg(i);e[s]=()=>o}}},Fw=(t,e)=>{const n=Eg(e);t.slots.default=()=>n},MA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ue(e),uu(e,"_",n)):Lw(e,t.slots={})}else t.slots={},e&&Fw(t,e);uu(t.slots,Rh,1)},LA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ot;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Dt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Lw(e,s)),o=e}else e&&(Fw(t,e),o={default:1});if(i)for(const a in s)!Mw(a)&&!(a in o)&&delete s[a]};function Uw(){return{app:null,config:{isNativeTag:n1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let FA=0;function UA(t,e){return function(r,s=null){Re(r)||(r=Object.assign({},r)),s!=null&&!ut(s)&&(s=null);const i=Uw(),o=new Set;let a=!1;const l=i.app={_uid:FA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:n_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Re(c.install)?(o.add(c),c.install(l,...u)):Re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=pe(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,xh(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function mu(t,e,n,r,s=!1){if(le(t)){t.forEach((f,d)=>mu(f,e&&(le(e)?e[d]:e),n,r,s));return}if(ci(r)&&!s)return;const i=r.shapeFlag&4?xh(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):Ct(c)&&(c.value=null)),Re(l))zr(l,a,12,[o,u]);else{const f=Tt(l),d=Ct(l);if(f||d){const p=()=>{if(t.f){const m=f?qe(h,l)?h[l]:u[l]:l.value;s?le(m)&&qp(m,i):le(m)?m.includes(i)||m.push(i):f?(u[l]=[i],qe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,qe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,qt(p,n)):p()}}}let as=!1;const _c=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",bc=t=>t.nodeType===8;function $A(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),pu(),g._vnode=v;return}as=!1,h(g.firstChild,v,null,null,null),pu(),g._vnode=v,as&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,_,T,S=!1)=>{const x=bc(v)&&v.data==="[",I=()=>m(v,g,E,_,T,x),{type:C,ref:P,shapeFlag:L,patchFlag:U}=g;let k=v.nodeType;g.el=v,U===-2&&(S=!1,g.dynamicChildren=null);let O=null;switch(C){case Ei:k!==3?g.children===""?(l(g.el=s(""),o(v),v),O=v):O=I():(v.data!==g.children&&(as=!0,v.data=g.children),O=i(v));break;case gn:k!==8||x?O=I():O=i(v);break;case hi:if(x&&(v=i(v),k=v.nodeType),k===1||k===3){O=v;const J=!g.children.length;for(let j=0;j<g.staticCount;j++)J&&(g.children+=O.nodeType===1?O.outerHTML:O.data),j===g.staticCount-1&&(g.anchor=O),O=i(O);return x?i(O):O}else I();break;case ct:x?O=p(v,g,E,_,T,S):O=I();break;default:if(L&1)k!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?O=I():O=f(v,g,E,_,T,S);else if(L&6){g.slotScopeIds=T;const J=o(v);if(e(g,J,null,E,_,_c(J),S),O=x?y(v):i(v),O&&bc(O)&&O.data==="teleport end"&&(O=i(O)),ci(g)){let j;x?(j=pe(ct),j.anchor=O?O.previousSibling:J.lastChild):j=v.nodeType===3?Un(""):pe("div"),j.el=v,g.component.subTree=j}}else L&64?k!==8?O=I():O=g.type.hydrate(v,g,E,_,T,S,t,d):L&128&&(O=g.type.hydrate(v,g,E,_,_c(o(v)),T,S,t,h))}return P!=null&&mu(P,null,_,g),O},f=(v,g,E,_,T,S)=>{S=S||!!g.dynamicChildren;const{type:x,props:I,patchFlag:C,shapeFlag:P,dirs:L}=g,U=x==="input"&&L||x==="option";if(U||C!==-1){if(L&&gr(g,null,E,"created"),I)if(U||!S||C&48)for(const O in I)(U&&O.endsWith("value")||xl(O)&&!Da(O))&&r(v,O,null,I[O],!1,void 0,E);else I.onClick&&r(v,"onClick",null,I.onClick,!1,void 0,E);let k;if((k=I&&I.onVnodeBeforeMount)&&Rn(k,E,g),L&&gr(g,null,E,"beforeMount"),((k=I&&I.onVnodeMounted)||L)&&vw(()=>{k&&Rn(k,E,g),L&&gr(g,null,E,"mounted")},_),P&16&&!(I&&(I.innerHTML||I.textContent))){let O=d(v.firstChild,g,v,E,_,T,S);for(;O;){as=!0;const J=O;O=O.nextSibling,a(J)}}else P&8&&v.textContent!==g.children&&(as=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,_,T,S,x)=>{x=x||!!g.dynamicChildren;const I=g.children,C=I.length;for(let P=0;P<C;P++){const L=x?I[P]:I[P]=Fn(I[P]);if(v)v=h(v,L,_,T,S,x);else{if(L.type===Ei&&!L.children)continue;as=!0,n(null,L,E,null,_,T,_c(E),S)}}return v},p=(v,g,E,_,T,S)=>{const{slotScopeIds:x}=g;x&&(T=T?T.concat(x):x);const I=o(v),C=d(i(v),g,I,E,_,T,S);return C&&bc(C)&&C.data==="]"?i(g.anchor=C):(as=!0,l(g.anchor=c("]"),I,C),C)},m=(v,g,E,_,T,S)=>{if(as=!0,g.el=null,S){const C=y(v);for(;;){const P=i(v);if(P&&P!==C)a(P);else break}}const x=i(v),I=o(v);return a(v),n(null,g,I,x,E,_,_c(I),T),x},y=v=>{let g=0;for(;v;)if(v=i(v),v&&bc(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const qt=vw;function $w(t){return Bw(t)}function jw(t){return Bw(t,$A)}function Bw(t,e){const n=c1();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=lr,insertStaticContent:p}=t,m=(w,b,N,F=null,$=null,K=null,Z=!1,X=null,Y=!!b.dynamicChildren)=>{if(w===b)return;w&&!rr(w,b)&&(F=H(w),Fe(w,$,K,!0),w=null),b.patchFlag===-2&&(Y=!1,b.dynamicChildren=null);const{type:B,ref:ce,shapeFlag:ie}=b;switch(B){case Ei:y(w,b,N,F);break;case gn:v(w,b,N,F);break;case hi:w==null&&g(b,N,F,Z);break;case ct:U(w,b,N,F,$,K,Z,X,Y);break;default:ie&1?T(w,b,N,F,$,K,Z,X,Y):ie&6?k(w,b,N,F,$,K,Z,X,Y):(ie&64||ie&128)&&B.process(w,b,N,F,$,K,Z,X,Y,Te)}ce!=null&&$&&mu(ce,w&&w.ref,K,b||w,!b)},y=(w,b,N,F)=>{if(w==null)r(b.el=a(b.children),N,F);else{const $=b.el=w.el;b.children!==w.children&&c($,b.children)}},v=(w,b,N,F)=>{w==null?r(b.el=l(b.children||""),N,F):b.el=w.el},g=(w,b,N,F)=>{[w.el,w.anchor]=p(w.children,b,N,F,w.el,w.anchor)},E=({el:w,anchor:b},N,F)=>{let $;for(;w&&w!==b;)$=f(w),r(w,N,F),w=$;r(b,N,F)},_=({el:w,anchor:b})=>{let N;for(;w&&w!==b;)N=f(w),s(w),w=N;s(b)},T=(w,b,N,F,$,K,Z,X,Y)=>{Z=Z||b.type==="svg",w==null?S(b,N,F,$,K,Z,X,Y):C(w,b,$,K,Z,X,Y)},S=(w,b,N,F,$,K,Z,X)=>{let Y,B;const{type:ce,props:ie,shapeFlag:ue,transition:Ee,dirs:Pe}=w;if(Y=w.el=o(w.type,K,ie&&ie.is,ie),ue&8?u(Y,w.children):ue&16&&I(w.children,Y,null,F,$,K&&ce!=="foreignObject",Z,X),Pe&&gr(w,null,F,"created"),x(Y,w,w.scopeId,Z,F),ie){for(const Ke in ie)Ke!=="value"&&!Da(Ke)&&i(Y,Ke,null,ie[Ke],K,w.children,F,$,G);"value"in ie&&i(Y,"value",null,ie.value),(B=ie.onVnodeBeforeMount)&&Rn(B,F,w)}Pe&&gr(w,null,F,"beforeMount");const Ze=(!$||$&&!$.pendingBranch)&&Ee&&!Ee.persisted;Ze&&Ee.beforeEnter(Y),r(Y,b,N),((B=ie&&ie.onVnodeMounted)||Ze||Pe)&&qt(()=>{B&&Rn(B,F,w),Ze&&Ee.enter(Y),Pe&&gr(w,null,F,"mounted")},$)},x=(w,b,N,F,$)=>{if(N&&d(w,N),F)for(let K=0;K<F.length;K++)d(w,F[K]);if($){let K=$.subTree;if(b===K){const Z=$.vnode;x(w,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},I=(w,b,N,F,$,K,Z,X,Y=0)=>{for(let B=Y;B<w.length;B++){const ce=w[B]=X?ps(w[B]):Fn(w[B]);m(null,ce,b,N,F,$,K,Z,X)}},C=(w,b,N,F,$,K,Z)=>{const X=b.el=w.el;let{patchFlag:Y,dynamicChildren:B,dirs:ce}=b;Y|=w.patchFlag&16;const ie=w.props||ot,ue=b.props||ot;let Ee;N&&zs(N,!1),(Ee=ue.onVnodeBeforeUpdate)&&Rn(Ee,N,b,w),ce&&gr(b,w,N,"beforeUpdate"),N&&zs(N,!0);const Pe=$&&b.type!=="foreignObject";if(B?P(w.dynamicChildren,B,X,N,F,Pe,K):Z||oe(w,b,X,null,N,F,Pe,K,!1),Y>0){if(Y&16)L(X,b,ie,ue,N,F,$);else if(Y&2&&ie.class!==ue.class&&i(X,"class",null,ue.class,$),Y&4&&i(X,"style",ie.style,ue.style,$),Y&8){const Ze=b.dynamicProps;for(let Ke=0;Ke<Ze.length;Ke++){const A=Ze[Ke],R=ie[A],D=ue[A];(D!==R||A==="value")&&i(X,A,R,D,$,w.children,N,F,G)}}Y&1&&w.children!==b.children&&u(X,b.children)}else!Z&&B==null&&L(X,b,ie,ue,N,F,$);((Ee=ue.onVnodeUpdated)||ce)&&qt(()=>{Ee&&Rn(Ee,N,b,w),ce&&gr(b,w,N,"updated")},F)},P=(w,b,N,F,$,K,Z)=>{for(let X=0;X<b.length;X++){const Y=w[X],B=b[X],ce=Y.el&&(Y.type===ct||!rr(Y,B)||Y.shapeFlag&70)?h(Y.el):N;m(Y,B,ce,null,F,$,K,Z,!0)}},L=(w,b,N,F,$,K,Z)=>{if(N!==F){if(N!==ot)for(const X in N)!Da(X)&&!(X in F)&&i(w,X,N[X],null,Z,b.children,$,K,G);for(const X in F){if(Da(X))continue;const Y=F[X],B=N[X];Y!==B&&X!=="value"&&i(w,X,B,Y,Z,b.children,$,K,G)}"value"in F&&i(w,"value",N.value,F.value)}},U=(w,b,N,F,$,K,Z,X,Y)=>{const B=b.el=w?w.el:a(""),ce=b.anchor=w?w.anchor:a("");let{patchFlag:ie,dynamicChildren:ue,slotScopeIds:Ee}=b;Ee&&(X=X?X.concat(Ee):Ee),w==null?(r(B,N,F),r(ce,N,F),I(b.children,N,ce,$,K,Z,X,Y)):ie>0&&ie&64&&ue&&w.dynamicChildren?(P(w.dynamicChildren,ue,N,$,K,Z,X),(b.key!=null||$&&b===$.subTree)&&wg(w,b,!0)):oe(w,b,N,ce,$,K,Z,X,Y)},k=(w,b,N,F,$,K,Z,X,Y)=>{b.slotScopeIds=X,w==null?b.shapeFlag&512?$.ctx.activate(b,N,F,Z,Y):O(b,N,F,$,K,Z,Y):J(w,b,Y)},O=(w,b,N,F,$,K,Z)=>{const X=w.component=zw(w,F,$);if(Dl(w)&&(X.ctx.renderer=Te),Xw(X),X.asyncDep){if($&&$.registerDep(X,j),!w.el){const Y=X.subTree=pe(gn);v(null,Y,b,N)}return}j(X,w,b,N,$,K,Z)},J=(w,b,N)=>{const F=b.component=w.component;if(oA(w,b,N))if(F.asyncDep&&!F.asyncResolved){q(F,b,N);return}else F.next=b,Z1(F.update),F.update();else b.el=w.el,F.vnode=b},j=(w,b,N,F,$,K,Z)=>{const X=()=>{if(w.isMounted){let{next:ce,bu:ie,u:ue,parent:Ee,vnode:Pe}=w,Ze=ce,Ke;zs(w,!1),ce?(ce.el=Pe.el,q(w,ce,Z)):ce=Pe,ie&&uo(ie),(Ke=ce.props&&ce.props.onVnodeBeforeUpdate)&&Rn(Ke,Ee,ce,Pe),zs(w,!0);const A=Xc(w),R=w.subTree;w.subTree=A,m(R,A,h(R.el),H(R),w,$,K),ce.el=A.el,Ze===null&&fg(w,A.el),ue&&qt(ue,$),(Ke=ce.props&&ce.props.onVnodeUpdated)&&qt(()=>Rn(Ke,Ee,ce,Pe),$)}else{let ce;const{el:ie,props:ue}=b,{bm:Ee,m:Pe,parent:Ze}=w,Ke=ci(b);if(zs(w,!1),Ee&&uo(Ee),!Ke&&(ce=ue&&ue.onVnodeBeforeMount)&&Rn(ce,Ze,b),zs(w,!0),ie&&Ie){const A=()=>{w.subTree=Xc(w),Ie(ie,w.subTree,w,$,null)};Ke?b.type.__asyncLoader().then(()=>!w.isUnmounted&&A()):A()}else{const A=w.subTree=Xc(w);m(null,A,N,F,w,$,K),b.el=A.el}if(Pe&&qt(Pe,$),!Ke&&(ce=ue&&ue.onVnodeMounted)){const A=b;qt(()=>Rn(ce,Ze,A),$)}(b.shapeFlag&256||Ze&&ci(Ze.vnode)&&Ze.vnode.shapeFlag&256)&&w.a&&qt(w.a,$),w.isMounted=!0,b=N=F=null}},Y=w.effect=new Nl(X,()=>wh(B),w.scope),B=w.update=()=>Y.run();B.id=w.uid,zs(w,!0),B()},q=(w,b,N)=>{b.component=w;const F=w.vnode.props;w.vnode=b,w.next=null,DA(w,b.props,F,N),LA(w,b.children,N),Ko(),Ev(),Go()},oe=(w,b,N,F,$,K,Z,X,Y=!1)=>{const B=w&&w.children,ce=w?w.shapeFlag:0,ie=b.children,{patchFlag:ue,shapeFlag:Ee}=b;if(ue>0){if(ue&128){dt(B,ie,N,F,$,K,Z,X,Y);return}else if(ue&256){$e(B,ie,N,F,$,K,Z,X,Y);return}}Ee&8?(ce&16&&G(B,$,K),ie!==B&&u(N,ie)):ce&16?Ee&16?dt(B,ie,N,F,$,K,Z,X,Y):G(B,$,K,!0):(ce&8&&u(N,""),Ee&16&&I(ie,N,F,$,K,Z,X,Y))},$e=(w,b,N,F,$,K,Z,X,Y)=>{w=w||lo,b=b||lo;const B=w.length,ce=b.length,ie=Math.min(B,ce);let ue;for(ue=0;ue<ie;ue++){const Ee=b[ue]=Y?ps(b[ue]):Fn(b[ue]);m(w[ue],Ee,N,null,$,K,Z,X,Y)}B>ce?G(w,$,K,!0,!1,ie):I(b,N,F,$,K,Z,X,Y,ie)},dt=(w,b,N,F,$,K,Z,X,Y)=>{let B=0;const ce=b.length;let ie=w.length-1,ue=ce-1;for(;B<=ie&&B<=ue;){const Ee=w[B],Pe=b[B]=Y?ps(b[B]):Fn(b[B]);if(rr(Ee,Pe))m(Ee,Pe,N,null,$,K,Z,X,Y);else break;B++}for(;B<=ie&&B<=ue;){const Ee=w[ie],Pe=b[ue]=Y?ps(b[ue]):Fn(b[ue]);if(rr(Ee,Pe))m(Ee,Pe,N,null,$,K,Z,X,Y);else break;ie--,ue--}if(B>ie){if(B<=ue){const Ee=ue+1,Pe=Ee<ce?b[Ee].el:F;for(;B<=ue;)m(null,b[B]=Y?ps(b[B]):Fn(b[B]),N,Pe,$,K,Z,X,Y),B++}}else if(B>ue)for(;B<=ie;)Fe(w[B],$,K,!0),B++;else{const Ee=B,Pe=B,Ze=new Map;for(B=Pe;B<=ue;B++){const ge=b[B]=Y?ps(b[B]):Fn(b[B]);ge.key!=null&&Ze.set(ge.key,B)}let Ke,A=0;const R=ue-Pe+1;let D=!1,V=0;const re=new Array(R);for(B=0;B<R;B++)re[B]=0;for(B=Ee;B<=ie;B++){const ge=w[B];if(A>=R){Fe(ge,$,K,!0);continue}let De;if(ge.key!=null)De=Ze.get(ge.key);else for(Ke=Pe;Ke<=ue;Ke++)if(re[Ke-Pe]===0&&rr(ge,b[Ke])){De=Ke;break}De===void 0?Fe(ge,$,K,!0):(re[De-Pe]=B+1,De>=V?V=De:D=!0,m(ge,b[De],N,null,$,K,Z,X,Y),A++)}const we=D?jA(re):lo;for(Ke=we.length-1,B=R-1;B>=0;B--){const ge=Pe+B,De=b[ge],yt=ge+1<ce?b[ge+1].el:F;re[B]===0?m(null,De,N,yt,$,K,Z,X,Y):D&&(Ke<0||B!==we[Ke]?We(De,N,yt,2):Ke--)}}},We=(w,b,N,F,$=null)=>{const{el:K,type:Z,transition:X,children:Y,shapeFlag:B}=w;if(B&6){We(w.component.subTree,b,N,F);return}if(B&128){w.suspense.move(b,N,F);return}if(B&64){Z.move(w,b,N,Te);return}if(Z===ct){r(K,b,N);for(let ie=0;ie<Y.length;ie++)We(Y[ie],b,N,F);r(w.anchor,b,N);return}if(Z===hi){E(w,b,N);return}if(F!==2&&B&1&&X)if(F===0)X.beforeEnter(K),r(K,b,N),qt(()=>X.enter(K),$);else{const{leave:ie,delayLeave:ue,afterLeave:Ee}=X,Pe=()=>r(K,b,N),Ze=()=>{ie(K,()=>{Pe(),Ee&&Ee()})};ue?ue(K,Pe,Ze):Ze()}else r(K,b,N)},Fe=(w,b,N,F=!1,$=!1)=>{const{type:K,props:Z,ref:X,children:Y,dynamicChildren:B,shapeFlag:ce,patchFlag:ie,dirs:ue}=w;if(X!=null&&mu(X,null,N,w,!0),ce&256){b.ctx.deactivate(w);return}const Ee=ce&1&&ue,Pe=!ci(w);let Ze;if(Pe&&(Ze=Z&&Z.onVnodeBeforeUnmount)&&Rn(Ze,b,w),ce&6)M(w.component,N,F);else{if(ce&128){w.suspense.unmount(N,F);return}Ee&&gr(w,null,b,"beforeUnmount"),ce&64?w.type.remove(w,b,N,$,Te,F):B&&(K!==ct||ie>0&&ie&64)?G(B,b,N,!1,!0):(K===ct&&ie&384||!$&&ce&16)&&G(Y,b,N),F&&ht(w)}(Pe&&(Ze=Z&&Z.onVnodeUnmounted)||Ee)&&qt(()=>{Ze&&Rn(Ze,b,w),Ee&&gr(w,null,b,"unmounted")},N)},ht=w=>{const{type:b,el:N,anchor:F,transition:$}=w;if(b===ct){St(N,F);return}if(b===hi){_(w);return}const K=()=>{s(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:X}=$,Y=()=>Z(N,K);X?X(w.el,K,Y):Y()}else K()},St=(w,b)=>{let N;for(;w!==b;)N=f(w),s(w),w=N;s(b)},M=(w,b,N)=>{const{bum:F,scope:$,update:K,subTree:Z,um:X}=w;F&&uo(F),$.stop(),K&&(K.active=!1,Fe(Z,w,b,N)),X&&qt(X,b),qt(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},G=(w,b,N,F=!1,$=!1,K=0)=>{for(let Z=K;Z<w.length;Z++)Fe(w[Z],b,N,F,$)},H=w=>w.shapeFlag&6?H(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),ne=(w,b,N)=>{w==null?b._vnode&&Fe(b._vnode,null,null,!0):m(b._vnode||null,w,b,null,null,null,N),Ev(),pu(),b._vnode=w},Te={p:m,um:Fe,m:We,r:ht,mt:O,mc:I,pc:oe,pbc:P,n:H,o:t};let Xe,Ie;return e&&([Xe,Ie]=e(Te)),{render:ne,hydrate:Xe,createApp:UA(ne,Xe)}}function zs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ps(s[i]),a.el=o.el),n||wg(o,a)),a.type===Ei&&(a.el=o.el)}}function jA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const BA=t=>t.__isTeleport,La=t=>t&&(t.disabled||t.disabled===""),Ov=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Pd=(t,e)=>{const n=t&&t.to;return Tt(n)?e?e(n):null:n},VA={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=La(e.props);let{shapeFlag:g,children:E,dynamicChildren:_}=e;if(t==null){const T=e.el=m(""),S=e.anchor=m("");d(T,n,r),d(S,n,r);const x=e.target=Pd(e.props,p),I=e.targetAnchor=m("");x&&(d(I,x),o=o||Ov(x));const C=(P,L)=>{g&16&&u(E,P,L,s,i,o,a,l)};v?C(n,S):x&&C(x,I)}else{e.el=t.el;const T=e.anchor=t.anchor,S=e.target=t.target,x=e.targetAnchor=t.targetAnchor,I=La(t.props),C=I?n:S,P=I?T:x;if(o=o||Ov(S),_?(f(t.dynamicChildren,_,C,s,i,o,a),wg(t,e,!0)):l||h(t,e,C,P,s,i,o,a,!1),v)I||Tc(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Pd(e.props,p);L&&Tc(e,L,null,c,0)}else I&&Tc(e,S,x,c,1)}Vw(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!La(f))&&(i(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];s(p,e,n,!0,!!p.dynamicChildren)}},move:Tc,hydrate:HA};function Tc(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||La(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);h&&r(a,e,n)}function HA(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Pd(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(La(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}Vw(e)}return e.anchor&&o(e.anchor)}const WA=VA;function Vw(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ct=Symbol(void 0),Ei=Symbol(void 0),gn=Symbol(void 0),hi=Symbol(void 0),Fa=[];let xn=null;function de(t=!1){Fa.push(xn=t?null:[])}function Hw(){Fa.pop(),xn=Fa[Fa.length-1]||null}let wi=1;function Dd(t){wi+=t}function Ww(t){return t.dynamicChildren=wi>0?xn||lo:null,Hw(),wi>0&&xn&&xn.push(t),t}function tt(t,e,n,r,s,i){return Ww(be(t,e,n,r,s,i,!0))}function lt(t,e,n,r,s){return Ww(pe(t,e,n,r,s,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function rr(t,e){return t.type===e.type&&t.key===e.key}function KA(t){}const Rh="__vInternal",Kw=({key:t})=>t??null,Qc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Tt(t)||Ct(t)||Re(t)?{i:tn,r:t,k:e,f:!!n}:t:null;function be(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kw(e),ref:e&&Qc(e),scopeId:bh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return a?(_g(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Tt(n)?8:16),wi>0&&!o&&xn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xn.push(l),l}const pe=GA;function GA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ow)&&(t=gn),Ds(t)){const a=Rr(t,e,!0);return n&&_g(a,n),wi>0&&!i&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag|=-2,a}if(eR(t)&&(t=t.__vccOpts),e){e=Gw(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Ni(a)),ut(l)&&(ig(l)&&!le(l)&&(l=Dt({},l)),e.style=Ho(l))}const o=Tt(t)?1:mw(t)?128:BA(t)?64:ut(t)?4:Re(t)?2:0;return be(t,e,n,r,s,o,i,!0)}function Gw(t){return t?ig(t)||Rh in t?Dt({},t):t:null}function Rr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bg(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kw(a),ref:e&&e.ref?n&&s?le(s)?s.concat(Qc(e)):[s,Qc(e)]:Qc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rr(t.ssContent),ssFallback:t.ssFallback&&Rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Un(t=" ",e=0){return pe(Ei,null,t,e)}function zA(t,e){const n=pe(hi,null,t);return n.staticCount=e,n}function Bn(t="",e=!1){return e?(de(),lt(gn,null,t)):pe(gn,null,t)}function Fn(t){return t==null||typeof t=="boolean"?pe(gn):le(t)?pe(ct,null,t.slice()):typeof t=="object"?ps(t):pe(Ei,null,String(t))}function ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rr(t)}function _g(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_g(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Rh in e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Re(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),r&64?(n=16,e=[Un(e)]):n=8);t.children=e,t.shapeFlag|=n}function bg(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ni([e.class,r.class]));else if(s==="style")e.style=Ho([e.style,r.style]);else if(xl(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Rn(t,e,n,r=null){$n(t,e,7,[n,r])}const YA=Uw();let XA=0;function zw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||YA,i={uid:XA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kw(r,s),emitsOptions:dw(r,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:r.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tA.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const Mr=()=>Pt||tn,ks=t=>{Pt=t,t.scope.on()},Cs=()=>{Pt&&Pt.scope.off(),Pt=null};function Yw(t){return t.vnode.shapeFlag&4}let Io=!1;function Xw(t,e=!1){Io=e;const{props:n,children:r}=t.vnode,s=Yw(t);PA(t,n,s,e),MA(t,r);const i=s?QA(t,e):void 0;return Io=!1,i}function QA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vi(new Proxy(t.ctx,Rd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?qw(t):null;ks(t),Ko();const i=zr(r,t,0,[t.props,s]);if(Go(),Cs(),Jp(i)){if(i.then(Cs,Cs),e)return i.then(o=>{kd(t,o,e)}).catch(o=>{Di(o,t,0)});t.asyncDep=i}else kd(t,i,e)}else Qw(t,e)}function kd(t,e,n){Re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=lg(e)),Qw(t,n)}let vu,Md;function qA(t){vu=t,Md=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,CA))}}const JA=()=>!vu;function Qw(t,e,n){const r=t.type;if(!t.render){if(!e&&vu&&!r.render){const s=r.template||yg(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Dt(Dt({isCustomElement:i,delimiters:a},o),l);r.render=vu(s,c)}}t.render=r.render||lr,Md&&Md(t)}ks(t),Ko(),AA(t),Go(),Cs()}function ZA(t){return new Proxy(t.attrs,{get(e,n){return Dn(t,"get","$attrs"),e[n]}})}function qw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ZA(t))},slots:t.slots,emit:t.emit,expose:e}}function xh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lg(vi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ma)return Ma[n](t)},has(e,n){return n in e||n in Ma}}))}function Ld(t,e=!0){return Re(t)?t.displayName||t.name:t.name||e&&t.__name}function eR(t){return Re(t)&&"__vccOpts"in t}const jt=(t,e)=>Y1(t,e,Io);function tR(){return null}function nR(){return null}function rR(t){}function sR(t,e){return null}function iR(){return Jw().slots}function oR(){return Jw().attrs}function Jw(){const t=Mr();return t.setupContext||(t.setupContext=qw(t))}function aR(t,e){const n=le(t)?t.reduce((r,s)=>(r[s]={},r),{}):t;for(const r in e){const s=n[r];s?le(s)||Re(s)?n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(n[r]={default:e[r]})}return n}function lR(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function cR(t){const e=Mr();let n=t();return Cs(),Jp(n)&&(n=n.catch(r=>{throw ks(e),r})),[n,()=>ks(e)]}function Oh(t,e,n){const r=arguments.length;return r===2?ut(e)&&!le(e)?Ds(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ds(n)&&(n=[n]),pe(t,e,n))}const Zw=Symbol(""),e_=()=>jn(Zw);function uR(){}function hR(t,e,n,r){const s=n[r];if(s&&t_(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function t_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(To(n[r],e[r]))return!1;return wi>0&&xn&&xn.push(t),!0}const n_="3.2.47",fR={createComponentInstance:zw,setupComponent:Xw,renderComponentRoot:Xc,setCurrentRenderingInstance:ll,isVNode:Ds,normalizeVNode:Fn},dR=fR,pR=null,gR=null,mR="http://www.w3.org/2000/svg",ni=typeof document<"u"?document:null,Nv=ni&&ni.createElement("template"),vR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ni.createElementNS(mR,t):ni.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nv.innerHTML=r?`<svg>${t}</svg>`:t;const a=Nv.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ER(t,e,n){const r=t.style,s=Tt(n);if(n&&!s){if(e&&!Tt(e))for(const i in e)n[i]==null&&Fd(r,i,"");for(const i in n)Fd(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Pv=/\s*!important$/;function Fd(t,e,n){if(le(n))n.forEach(r=>Fd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wR(t,e);Pv.test(n)?t.setProperty(zn(r),n.replace(Pv,""),"important"):t[r]=n}}const Dv=["Webkit","Moz","ms"],Af={};function wR(t,e){const n=Af[e];if(n)return n;let r=Nn(e);if(r!=="filter"&&r in t)return Af[e]=r;r=Ol(r);for(let s=0;s<Dv.length;s++){const i=Dv[s]+r;if(i in t)return Af[e]=i}return e}const kv="http://www.w3.org/1999/xlink";function _R(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(kv,e.slice(6,e.length)):t.setAttributeNS(kv,e,n);else{const i=e1(e);n==null||i&&!j0(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bR(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=j0(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Br(t,e,n,r){t.addEventListener(e,n,r)}function TR(t,e,n,r){t.removeEventListener(e,n,r)}function SR(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=IR(e);if(r){const c=i[e]=RR(r,s);Br(t,a,c,l)}else o&&(TR(t,a,o,l),i[e]=void 0)}}const Mv=/(?:Once|Passive|Capture)$/;function IR(t){let e;if(Mv.test(t)){e={};let r;for(;r=t.match(Mv);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zn(t.slice(2)),e]}let Rf=0;const CR=Promise.resolve(),AR=()=>Rf||(CR.then(()=>Rf=0),Rf=Date.now());function RR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$n(xR(r,n.value),e,5,[r])};return n.value=t,n.attached=AR(),n}function xR(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Lv=/^on[a-z]/,OR=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?yR(t,r,s):e==="style"?ER(t,n,r):xl(e)?Qp(e)||SR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NR(t,e,r,s))?bR(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_R(t,e,r,s))};function NR(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Lv.test(e)&&Re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lv.test(e)&&Tt(n)?!1:e in t}function r_(t,e){const n=nt(t);class r extends Nh{constructor(i){super(n,i,e)}}return r.def=n,r}const PR=t=>r_(t,E_),DR=typeof HTMLElement<"u"?HTMLElement:class{};class Nh extends DR{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,ki(()=>{this._connected||(jd(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!le(i))for(const l in i){const c=i[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=fu(this._props[l])),(a||(a=Object.create(null)))[Nn(l)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=le(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Nn))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.getAttribute(e);const r=Nn(e);this._numberProps&&this._numberProps[r]&&(n=fu(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(zn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(zn(e),n+""):n||this.removeAttribute(zn(e))))}_update(){jd(this._createVNode(),this.shadowRoot)}_createVNode(){const e=pe(this._def,Dt({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),zn(i)!==i&&r(zn(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Nh){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function kR(t="$style"){{const e=Mr();if(!e)return ot;const n=e.type.__cssModules;if(!n)return ot;const r=n[t];return r||ot}}function MR(t){const e=Mr();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>$d(i,s))},r=()=>{const s=t(e.proxy);Ud(e.subTree,s),n(s)};yw(r),Hs(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Ah(()=>s.disconnect())})}function Ud(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ud(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)$d(t.el,e);else if(t.type===ct)t.children.forEach(n=>Ud(n,e));else if(t.type===hi){let{el:n,anchor:r}=t;for(;n&&($d(n,e),n!==r);)n=n.nextSibling}}function $d(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const ls="transition",aa="animation",Tg=(t,{slots:e})=>Oh(gg,i_(t),e);Tg.displayName="Transition";const s_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},LR=Tg.props=Dt({},gg.props,s_),Ys=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fv=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function i_(t){const e={};for(const U in t)U in s_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=FR(s),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:_,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:x=g,onAppearCancelled:I=E}=e,C=(U,k,O)=>{fs(U,k?u:a),fs(U,k?c:o),O&&O()},P=(U,k)=>{U._isLeaving=!1,fs(U,h),fs(U,d),fs(U,f),k&&k()},L=U=>(k,O)=>{const J=U?x:g,j=()=>C(k,U,O);Ys(J,[k,j]),Uv(()=>{fs(k,U?l:i),$r(k,U?u:a),Fv(J)||$v(k,r,m,j)})};return Dt(e,{onBeforeEnter(U){Ys(v,[U]),$r(U,i),$r(U,o)},onBeforeAppear(U){Ys(S,[U]),$r(U,l),$r(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const O=()=>P(U,k);$r(U,h),a_(),$r(U,f),Uv(()=>{U._isLeaving&&(fs(U,h),$r(U,d),Fv(_)||$v(U,r,y,O))}),Ys(_,[U,O])},onEnterCancelled(U){C(U,!1),Ys(E,[U])},onAppearCancelled(U){C(U,!0),Ys(I,[U])},onLeaveCancelled(U){P(U),Ys(T,[U])}})}function FR(t){if(t==null)return null;if(ut(t))return[xf(t.enter),xf(t.leave)];{const e=xf(t);return[e,e]}}function xf(t){return fu(t)}function $r(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Uv(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let UR=0;function $v(t,e,n,r){const s=t._endId=++UR,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=o_(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function o_(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${ls}Delay`),i=r(`${ls}Duration`),o=jv(s,i),a=r(`${aa}Delay`),l=r(`${aa}Duration`),c=jv(a,l);let u=null,h=0,f=0;e===ls?o>0&&(u=ls,h=o,f=i.length):e===aa?c>0&&(u=aa,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ls:aa:null,f=u?u===ls?i.length:l.length:0);const d=u===ls&&/\b(transform|all)(,|$)/.test(r(`${ls}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function jv(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Bv(n)+Bv(t[r])))}function Bv(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function a_(){return document.body.offsetHeight}const l_=new WeakMap,c_=new WeakMap,u_={name:"TransitionGroup",props:Dt({},LR,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Mr(),r=pg();let s,i;return Ih(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!HR(s[0].el,n.vnode.el,o))return;s.forEach(jR),s.forEach(BR);const a=s.filter(VR);a_(),a.forEach(l=>{const c=l.el,u=c.style;$r(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,fs(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Ue(t),a=i_(o);let l=o.tag||ct;s=i,i=e.default?Th(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&yi(u,So(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];yi(u,So(u,a,r,n)),l_.set(u,u.el.getBoundingClientRect())}return pe(l,null,i)}}},$R=t=>delete t.mode;u_.props;const h_=u_;function jR(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function BR(t){c_.set(t,t.el.getBoundingClientRect())}function VR(t){const e=l_.get(t),n=c_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function HR(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=o_(r);return s.removeChild(r),i}const Ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>uo(e,n):e};function WR(t){t.target.composing=!0}function Vv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yu={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ms(s);const i=r||s.props&&s.props.type==="number";Br(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hu(a)),t._assign(a)}),n&&Br(t,"change",()=>{t.value=t.value.trim()}),e||(Br(t,"compositionstart",WR),Br(t,"compositionend",Vv),Br(t,"change",Vv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ms(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Sg={deep:!0,created(t,e,n){t._assign=Ms(n),Br(t,"change",()=>{const r=t._modelValue,s=Co(t),i=t.checked,o=t._assign;if(le(r)){const a=fh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Pi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(d_(t,i))})},mounted:Hv,beforeUpdate(t,e,n){t._assign=Ms(n),Hv(t,e,n)}};function Hv(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=fh(e,r.props.value)>-1:Pi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ns(e,d_(t,!0)))}const Ig={created(t,{value:e},n){t.checked=Ns(e,n.props.value),t._assign=Ms(n),Br(t,"change",()=>{t._assign(Co(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Ms(r),e!==n&&(t.checked=Ns(e,r.props.value))}},f_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Pi(e);Br(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hu(Co(o)):Co(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ms(r)},mounted(t,{value:e}){Wv(t,e)},beforeUpdate(t,e,n){t._assign=Ms(n)},updated(t,{value:e}){Wv(t,e)}};function Wv(t,e){const n=t.multiple;if(!(n&&!le(e)&&!Pi(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Co(i);if(n)le(e)?i.selected=fh(e,o)>-1:i.selected=e.has(o);else if(Ns(Co(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Co(t){return"_value"in t?t._value:t.value}function d_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const p_={created(t,e,n){Sc(t,e,n,null,"created")},mounted(t,e,n){Sc(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Sc(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Sc(t,e,n,r,"updated")}};function g_(t,e){switch(t){case"SELECT":return f_;case"TEXTAREA":return yu;default:switch(e){case"checkbox":return Sg;case"radio":return Ig;default:return yu}}}function Sc(t,e,n,r,s){const o=g_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function KR(){yu.getSSRProps=({value:t})=>({value:t}),Ig.getSSRProps=({value:t},e)=>{if(e.props&&Ns(e.props.value,t))return{checked:!0}},Sg.getSSRProps=({value:t},e)=>{if(le(t)){if(e.props&&fh(t,e.props.value)>-1)return{checked:!0}}else if(Pi(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},p_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=g_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const GR=["ctrl","shift","alt","meta"],zR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GR.some(n=>t[`${n}Key`]&&!e.includes(n))},Ph=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=zR[e[s]];if(i&&i(n,e))return}return t(n,...r)},YR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},XR=(t,e)=>n=>{if(!("key"in n))return;const r=zn(n.key);if(e.some(s=>s===r||YR[s]===r))return t(n)},Eu={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):la(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),la(t,!0),r.enter(t)):r.leave(t,()=>{la(t,!1)}):la(t,e))},beforeUnmount(t,{value:e}){la(t,e)}};function la(t,e){t.style.display=e?t._vod:"none"}function QR(){Eu.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const m_=Dt({patchProp:OR},vR);let Ua,Kv=!1;function v_(){return Ua||(Ua=$w(m_))}function y_(){return Ua=Kv?Ua:jw(m_),Kv=!0,Ua}const jd=(...t)=>{v_().render(...t)},E_=(...t)=>{y_().hydrate(...t)},w_=(...t)=>{const e=v_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=__(r);if(!s)return;const i=e._component;!Re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},qR=(...t)=>{const e=y_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=__(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function __(t){return Tt(t)?document.querySelector(t):t}let Gv=!1;const JR=()=>{Gv||(Gv=!0,KR(),QR())},ZR=()=>{},ex=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:gg,Comment:gn,EffectScope:eg,Fragment:ct,KeepAlive:EA,ReactiveEffect:Nl,Static:hi,Suspense:lA,Teleport:WA,Text:Ei,Transition:Tg,TransitionGroup:h_,VueElement:Nh,assertNumber:Q1,callWithAsyncErrorHandling:$n,callWithErrorHandling:zr,camelize:Nn,capitalize:Ol,cloneVNode:Rr,compatUtils:gR,compile:ZR,computed:jt,createApp:w_,createBlock:lt,createCommentVNode:Bn,createElementBlock:tt,createElementVNode:be,createHydrationRenderer:jw,createPropsRestProxy:lR,createRenderer:$w,createSSRApp:qR,createSlots:SA,createStaticVNode:zA,createTextVNode:Un,createVNode:pe,customRef:K1,defineAsyncComponent:vA,defineComponent:nt,defineCustomElement:r_,defineEmits:nR,defineExpose:rR,defineProps:tR,defineSSRCustomElement:PR,get devtools(){return qi},effect:f1,effectScope:ph,getCurrentInstance:Mr,getCurrentScope:tg,getTransitionRawChildren:Th,guardReactiveProps:Gw,h:Oh,handleError:Di,hydrate:E_,initCustomFormatter:uR,initDirectivesForSSR:JR,inject:jn,isMemoSame:t_,isProxy:ig,isReactive:_r,isReadonly:mi,isRef:Ct,isRuntimeOnly:JA,isShallow:sl,isVNode:Ds,markRaw:vi,mergeDefaults:aR,mergeProps:bg,nextTick:ki,normalizeClass:Ni,normalizeProps:JC,normalizeStyle:Ho,onActivated:_w,onBeforeMount:Sw,onBeforeUnmount:Ch,onBeforeUpdate:Iw,onDeactivated:bw,onErrorCaptured:xw,onMounted:Hs,onRenderTracked:Rw,onRenderTriggered:Aw,onScopeDispose:K0,onServerPrefetch:Cw,onUnmounted:Ah,onUpdated:Ih,openBlock:de,popScopeId:gw,provide:po,proxyRefs:lg,pushScopeId:pw,queuePostFlushCb:hg,reactive:pr,readonly:sg,ref:$t,registerRuntimeCompiler:qA,render:jd,renderList:Mi,renderSlot:ui,resolveComponent:zo,resolveDirective:TA,resolveDynamicComponent:bA,resolveFilter:pR,resolveTransitionHooks:So,setBlockTracking:Dd,setDevtoolsHook:fw,setTransitionHooks:yi,shallowReactive:sw,shallowReadonly:j1,shallowRef:iw,ssrContextKey:Zw,ssrUtils:dR,stop:d1,toDisplayString:Mt,toHandlerKey:ka,toHandlers:IA,toRaw:Ue,toRef:cg,toRefs:aw,transformVNodeArgs:KA,triggerRef:V1,unref:se,useAttrs:oR,useCssModule:kR,useCssVars:MR,useSSRContext:e_,useSlots:iR,useTransitionState:pg,vModelCheckbox:Sg,vModelDynamic:p_,vModelRadio:Ig,vModelSelect:f_,vModelText:yu,vShow:Eu,version:n_,warn:X1,watch:Is,watchEffect:dA,watchPostEffect:yw,watchSyncEffect:pA,withAsyncContext:cR,withCtx:At,withDefaults:sR,withDirectives:Cd,withKeys:XR,withMemo:hR,withModifiers:Ph,withScopeId:nA},Symbol.toStringTag,{value:"Module"})),wu=KC();let zv=0;const tx=()=>{const t=zv;return zv+=1,t},b_=()=>(t,e)=>{const n={...t,id:tx(),group:t.group||""};return wu.emit("notify",{notification:n,timeout:e}),()=>wu.emit("close",n.id)},T_="context",Bd=nt({__name:"Notification",props:{maxNotifications:{default:10},enter:{default:""},enterFrom:{default:""},enterTo:{default:""},leave:{default:""},leaveFrom:{default:""},leaveTo:{default:""},move:{default:""},moveDelay:{default:""}},emits:["close"],setup(t,{emit:e}){const n=t,r=jn(T_),s=pr({notifications:[],timeouts:{}}),i=jt(()=>s.notifications.filter(u=>u.group===r.group)),o=jt(()=>r.position==="bottom"?[...i.value].slice(0,n.maxNotifications):[...i.value].reverse().slice(0,n.maxNotifications)),a=u=>{s.notifications.splice(s.notifications.findIndex(h=>h.id===u),1),clearTimeout(s.timeouts[u])},l=({notification:u,timeout:h})=>{s.notifications.push(u),s.timeouts[u.id]=window.setTimeout(()=>{a(u.id)},h||3e3)},c=u=>{e("close"),a(u)};return Hs(()=>{wu.on("notify",l),wu.on("close",a)}),(u,h)=>(de(),lt(h_,{"enter-active-class":se(i).length>1?[n.enter,n.moveDelay].join(" "):n.enter,"enter-from-class":n.enterFrom,"enter-to-class":n.enterTo,"leave-active-class":n.leave,"leave-from-class":n.leaveFrom,"leave-to-class":n.leaveTo,"move-class":n.move},{default:At(()=>[ui(u.$slots,"default",{notifications:se(o),close:c})]),_:3},8,["enter-active-class","enter-from-class","enter-to-class","leave-active-class","leave-from-class","leave-to-class","move-class"]))}}),Yv=nt({__name:"NotificationGroup",props:{group:{default:""},position:{default:"top"}},setup(t){const e=t;return po(T_,{group:e.group,position:e.position}),(n,r)=>ui(n.$slots,"default",{group:t.group})}});function nx(t){t.config.globalProperties.$notify=b_(),t.component("Notification",Bd),t.component("NotificationGroup",Yv),t.component("notification",Bd),t.component("notificationGroup",Yv)}const rx={install:nx},sx=b_();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(t,e){if(!t)throw Yo(e)},Yo=function(t){return new Error("Firebase Database ("+S_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ix=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ix(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new ox;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ox extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(t){const e=I_(t);return Dh.encodeByteArray(e,!0)},_u=function(t){return C_(t).replace(/\./g,"")},bu=function(t){try{return Dh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){return A_(void 0,t)}function A_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lx(n)||(t[n]=A_(t[n],e[n]));return t}function lx(t){return t!=="__proto__"}/**
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
 */function cx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ux=()=>cx().__FIREBASE_DEFAULTS__,hx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bu(t[1]);return e&&JSON.parse(e)},Cg=()=>{try{return ux()||hx()||fx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=Cg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dx=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},px=()=>{var t;return(t=Cg())===null||t===void 0?void 0:t.config},x_=t=>{var e;return(e=Cg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ag(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function O_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vx(){const t=En();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N_(){return S_.NODE_ADMIN===!0}function P_(){try{return typeof indexedDB=="object"}catch{return!1}}function yx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="FirebaseError";class Lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ex,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xo.prototype.create)}}class Xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wx(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Lr(s,a,r)}}function wx(t,e){return t.replace(_x,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _x=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return JSON.parse(t)}function en(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=hl(bu(i[0])||""),n=hl(bu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},bx=function(t){const e=D_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tx=function(t){const e=D_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ao(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Su(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xv(i)&&Xv(o)){if(!Su(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _a(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Ix(t,e){const n=new Cx(t,e);return n.subscribe.bind(n)}class Cx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ax(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Of),s.error===void 0&&(s.error=Of),s.complete===void 0&&(s.complete=Of);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ax(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Of(){}function Rx(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,ee(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function zt(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Js="[DEFAULT]";/**
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
 */class Ox{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ul;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Px(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nx(t){return t===Js?void 0:t}function Px(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ox(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const kx={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},Mx=Je.INFO,Lx={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},Fx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Lx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kl{constructor(e){this.name=e,this._logLevel=Mx,this._logHandler=Fx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const Ux=(t,e)=>e.some(n=>t instanceof n);let Qv,qv;function $x(){return Qv||(Qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jx(){return qv||(qv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,Hd=new WeakMap,M_=new WeakMap,Nf=new WeakMap,Rg=new WeakMap;function Bx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(As(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,t)}).catch(()=>{}),Rg.set(e,t),e}function Vx(t){if(Hd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hd.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return As(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hx(t){Wd=t(Wd)}function Wx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pf(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),As(r)}:jx().includes(t)?function(...e){return t.apply(Pf(this),e),As(k_.get(this))}:function(...e){return As(t.apply(Pf(this),e))}}function Kx(t){return typeof t=="function"?Wx(t):(t instanceof IDBTransaction&&Vx(t),Ux(t,$x())?new Proxy(t,Wd):t)}function As(t){if(t instanceof IDBRequest)return Bx(t);if(Nf.has(t))return Nf.get(t);const e=Kx(t);return e!==t&&(Nf.set(t,e),Rg.set(e,t)),e}const Pf=t=>Rg.get(t);function Gx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=As(o);return r&&o.addEventListener("upgradeneeded",l=>{r(As(o.result),l.oldVersion,l.newVersion,As(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zx=["get","getKey","getAll","getAllKeys","count"],Yx=["put","add","delete","clear"],Df=new Map;function Jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zx.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Df.set(e,i),i}Hx(t=>({...t,get:(e,n,r)=>Jv(e,n)||t.get(e,n,r),has:(e,n)=>!!Jv(e,n)||t.has(e,n)}));/**
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
 */class Xx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kd="@firebase/app",Zv="0.9.9";/**
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
 */const _i=new kl("@firebase/app"),qx="@firebase/app-compat",Jx="@firebase/analytics-compat",Zx="@firebase/analytics",eO="@firebase/app-check-compat",tO="@firebase/app-check",nO="@firebase/auth",rO="@firebase/auth-compat",sO="@firebase/database",iO="@firebase/database-compat",oO="@firebase/functions",aO="@firebase/functions-compat",lO="@firebase/installations",cO="@firebase/installations-compat",uO="@firebase/messaging",hO="@firebase/messaging-compat",fO="@firebase/performance",dO="@firebase/performance-compat",pO="@firebase/remote-config",gO="@firebase/remote-config-compat",mO="@firebase/storage",vO="@firebase/storage-compat",yO="@firebase/firestore",EO="@firebase/firestore-compat",wO="firebase",_O="9.21.0";/**
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
 */const Gd="[DEFAULT]",bO={[Kd]:"fire-core",[qx]:"fire-core-compat",[Zx]:"fire-analytics",[Jx]:"fire-analytics-compat",[tO]:"fire-app-check",[eO]:"fire-app-check-compat",[nO]:"fire-auth",[rO]:"fire-auth-compat",[sO]:"fire-rtdb",[iO]:"fire-rtdb-compat",[oO]:"fire-fn",[aO]:"fire-fn-compat",[lO]:"fire-iid",[cO]:"fire-iid-compat",[uO]:"fire-fcm",[hO]:"fire-fcm-compat",[fO]:"fire-perf",[dO]:"fire-perf-compat",[pO]:"fire-rc",[gO]:"fire-rc-compat",[mO]:"fire-gcs",[vO]:"fire-gcs-compat",[yO]:"fire-fst",[EO]:"fire-fst-compat","fire-js":"fire-js",[wO]:"fire-js-all"};/**
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
 */const Iu=new Map,zd=new Map;function TO(t,e){try{t.container.addComponent(e)}catch(n){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(zd.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;zd.set(e,t);for(const n of Iu.values())TO(n,t);return!0}function xg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const SO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rs=new Xo("app","Firebase",SO);/**
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
 */class IO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=_O;function L_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rs.create("bad-app-name",{appName:String(s)});if(n||(n=px()),!n)throw Rs.create("no-options");const i=Iu.get(s);if(i){if(Su(n,i.options)&&Su(r,i.config))return i;throw Rs.create("duplicate-app",{appName:s})}const o=new Dx(s);for(const l of zd.values())o.addComponent(l);const a=new IO(n,r,o);return Iu.set(s,a),a}function Og(t=Gd){const e=Iu.get(t);if(!e&&t===Gd)return L_();if(!e)throw Rs.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let s=(r=bO[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(a.join(" "));return}xr(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const CO="firebase-heartbeat-database",AO=1,fl="firebase-heartbeat-store";let kf=null;function F_(){return kf||(kf=Gx(CO,AO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fl)}}}).catch(t=>{throw Rs.create("idb-open",{originalErrorMessage:t.message})})),kf}async function RO(t){try{return(await F_()).transaction(fl).objectStore(fl).get(U_(t))}catch(e){if(e instanceof Lr)_i.warn(e.message);else{const n=Rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(n.message)}}}async function ey(t,e){try{const r=(await F_()).transaction(fl,"readwrite");return await r.objectStore(fl).put(e,U_(t)),r.done}catch(n){if(n instanceof Lr)_i.warn(n.message);else{const r=Rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_i.warn(r.message)}}}function U_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xO=1024,OO=30*24*60*60*1e3;class NO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ty();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=OO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ty(),{heartbeatsToSend:n,unsentEntries:r}=PO(this._heartbeatsCache.heartbeats),s=_u(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ty(){return new Date().toISOString().substring(0,10)}function PO(t,e=xO){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ny(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P_()?yx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ny(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kO(t){xr(new ur("platform-logger",e=>new Xx(e),"PRIVATE")),xr(new ur("heartbeat",e=>new NO(e),"PRIVATE")),Vn(Kd,Zv,t),Vn(Kd,Zv,"esm2017"),Vn("fire-js","")}kO("");function Ng(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MO=$_,j_=new Xo("auth","Firebase",$_());/**
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
 */const Cu=new kl("@firebase/auth");function LO(t,...e){Cu.logLevel<=Je.WARN&&Cu.warn(`Auth (${Ws}): ${t}`,...e)}function qc(t,...e){Cu.logLevel<=Je.ERROR&&Cu.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function hr(t,...e){throw Pg(t,...e)}function br(t,...e){return Pg(t,...e)}function FO(t,e,n){const r=Object.assign(Object.assign({},MO()),{[e]:n});return new Xo("auth","Firebase",r).create(e,{appName:t.name})}function Pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function ye(t,e,...n){if(!t)throw Pg(e,...n)}function Vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qc(e),new Error(e)}function Jr(t,e){t||Vr(e)}/**
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
 */function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UO(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UO()||mx()||"connection"in navigator)?navigator.onLine:!0}function jO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ml{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ag()||O_()}get(){return $O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dg(t,e){Jr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class B_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VO=new Ml(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fi(t,e,n,r,s={}){return V_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),B_.fetch()(H_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function V_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},BO),e);try{const s=new HO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ic(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ic(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ic(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw FO(t,u,c);hr(t,u)}}catch(s){if(s instanceof Lr)throw s;hr(t,"network-request-failed",{message:String(s)})}}async function Ll(t,e,n,r,s={}){const i=await Fi(t,e,n,r,s);return"mfaPendingCredential"in i&&hr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function H_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dg(t.config,s):`${t.config.apiScheme}://${s}`}class HO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(br(this.auth,"network-request-failed")),VO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ic(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=br(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function WO(t,e){return Fi(t,"POST","/v1/accounts:delete",e)}async function KO(t,e){return Fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GO(t,e=!1){const n=zt(t),r=await n.getIdToken(e),s=kg(r);ye(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$a(Mf(s.auth_time)),issuedAtTime:$a(Mf(s.iat)),expirationTime:$a(Mf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mf(t){return Number(t)*1e3}function kg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const s=bu(n);return s?JSON.parse(s):(qc("Failed to decode base64 JWT payload"),null)}catch(s){return qc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zO(t){const e=kg(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lr&&YO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class W_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Au(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ro(t,KO(n,{idToken:r}));ye(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?JO(i.providerUserInfo):[],a=qO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new W_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function QO(t){const e=zt(t);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function JO(t){return t.map(e=>{var{providerId:n}=e,r=Ng(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZO(t,e){const n=await V_(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=H_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",B_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class dl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ye(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ZO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new dl;return r&&(ye(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ye(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ye(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dl,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function cs(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fi{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GO(this,e)}reload(){return QO(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ro(this,WO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:_,isAnonymous:T,providerData:S,stsTokenManager:x}=n;ye(E&&x,e,"internal-error");const I=dl.fromJSON(this.name,x);ye(typeof E=="string",e,"internal-error"),cs(h,e.name),cs(f,e.name),ye(typeof _=="boolean",e,"internal-error"),ye(typeof T=="boolean",e,"internal-error"),cs(d,e.name),cs(p,e.name),cs(m,e.name),cs(y,e.name),cs(v,e.name),cs(g,e.name);const C=new fi({uid:E,auth:e,email:f,emailVerified:_,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:I,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(C.providerData=S.map(P=>Object.assign({},P))),y&&(C._redirectEventId=y),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new dl;s.updateFromServerResponse(n);const i=new fi({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Au(i),i}}/**
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
 */const sy=new Map;function Hr(t){Jr(t instanceof Function,"Expected a class definition");let e=sy.get(t);return e?(Jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sy.set(t,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K_.type="NONE";const iy=K_;/**
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
 */function Jc(t,e,n){return`firebase:${t}:${e}:${n}`}class go{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new go(Hr(iy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Hr(iy);const o=Jc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fi._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new go(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new go(i,e,r))}}/**
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
 */function oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(q_(e))return"Webos";if(Mg(e))return"Safari";if((e.includes("chrome/")||z_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=En()){return/firefox\//i.test(t)}function Mg(t=En()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z_(t=En()){return/crios\//i.test(t)}function Y_(t=En()){return/iemobile/i.test(t)}function X_(t=En()){return/android/i.test(t)}function Q_(t=En()){return/blackberry/i.test(t)}function q_(t=En()){return/webos/i.test(t)}function Mh(t=En()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eN(t=En()){var e;return Mh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tN(){return vx()&&document.documentMode===10}function J_(t=En()){return Mh(t)||X_(t)||q_(t)||Q_(t)||/windows phone/i.test(t)||Y_(t)}function nN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=oy(En());break;case"Worker":n=`${oy(En())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}async function eb(t,e){return Fi(t,"GET","/v2/recaptchaConfig",Li(t,e))}function ay(t){return t!==void 0&&t.enterprise!==void 0}class tb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function rN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=br("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rN().appendChild(r)})}function sN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iN="https://www.google.com/recaptcha/enterprise.js?render=",oN="recaptcha-enterprise",aN="NO_RECAPTCHA";class rb{constructor(e){this.type=oN,this.auth=Ui(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{eb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tb(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;ay(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(aN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ay(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nb(iN+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xo(t,e,n,r=!1){const s=new rb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class lN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class cN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ly(this),this.idTokenSubscription=new ly(this),this.beforeStateQueue=new lN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?zt(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}async initializeRecaptchaConfig(){const e=await eb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tb(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hr(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ye(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ui(t){return zt(t)}class ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ix(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function uN(t,e){const n=xg(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Su(i,e??{}))return s;hr(s,"already-initialized")}return n.initialize({options:e})}function hN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fN(t,e,n){const r=Ui(t);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=sb(e),{host:o,port:a}=dN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||pN()}function sb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dN(t){const e=sb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cy(o)}}}function cy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,n){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function ib(t,e){return Fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Lf(t,e){return Ll(t,"POST","/v1/accounts:signInWithPassword",Li(t,e))}async function gN(t,e){return Fi(t,"POST","/v1/accounts:sendOobCode",Li(t,e))}async function Ff(t,e){return gN(t,e)}/**
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
 */async function mN(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}async function vN(t,e){return Ll(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}/**
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
 */class pl extends Lg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await xo(e,r,"signInWithPassword");return Lf(e,s)}else return Lf(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await xo(e,r,"signInWithPassword");return Lf(e,i)}else return Promise.reject(s)});case"emailLink":return mN(e,{email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ib(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vN(e,{idToken:n,email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mo(t,e){return Ll(t,"POST","/v1/accounts:signInWithIdp",Li(t,e))}/**
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
 */const yN="http://localhost";class bi extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ng(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new bi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mo(e,n)}buildRequest(){const e={requestUri:yN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function EN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wN(t){const e=_a(ba(t)).link,n=e?_a(ba(e)).deep_link_id:null,r=_a(ba(t)).deep_link_id;return(r?_a(ba(r)).link:null)||r||n||e||t}class Fg{constructor(e){var n,r,s,i,o,a;const l=_a(ba(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=EN((s=l.mode)!==null&&s!==void 0?s:null);ye(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wN(e);try{return new Fg(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fg.parseLink(n);return ye(r,"argument-error"),pl._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ob{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fl extends ob{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vs extends Fl{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";vs.PROVIDER_ID="facebook.com";/**
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
 */class ys extends Fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ys.credential(n,r)}catch{return null}}}ys.GOOGLE_SIGN_IN_METHOD="google.com";ys.PROVIDER_ID="google.com";/**
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
 */class Es extends Fl{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.GITHUB_SIGN_IN_METHOD="github.com";Es.PROVIDER_ID="github.com";/**
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
 */class ws extends Fl{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ws.credential(n,r)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
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
 */async function Uf(t,e){return Ll(t,"POST","/v1/accounts:signUp",Li(t,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fi._fromIdTokenResponse(e,r,s),o=uy(r);return new Ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uy(r);return new Ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ru extends Lr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ru.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ru(e,n,r,s)}}function ab(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ru._fromErrorAndOperation(t,i,e,r):i})}async function _N(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
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
 */async function lb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ro(t,ab(r,s,e,t),n);ye(i.idToken,r,"internal-error");const o=kg(i.idToken);ye(o,r,"internal-error");const{sub:a}=o;return ye(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hr(r,"user-mismatch"),i}}/**
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
 */async function cb(t,e,n=!1){const r="signIn",s=await ab(t,r,e),i=await Ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bN(t,e){return cb(Ui(t),e)}async function hy(t,e){return lb(zt(t),e)}/**
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
 */function $f(t,e,n){var r;ye(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ye(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ye(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ye(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function TN(t,e,n){var r;const s=Ui(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await xo(s,i,"getOobCode",!0);n&&$f(s,o,n),await Ff(s,o)}else n&&$f(s,i,n),await Ff(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xo(s,i,"getOobCode",!0);n&&$f(s,a,n),await Ff(s,a)}else return Promise.reject(o)})}async function SN(t,e,n){var r;const s=Ui(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await xo(s,i,"signUpPassword");o=Uf(s,c)}else o=Uf(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await xo(s,i,"signUpPassword");return Uf(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Ti._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function IN(t,e,n){return bN(zt(t),Ls.credential(e,n))}function CN(t,e){return ub(zt(t),e,null)}function AN(t,e){return ub(zt(t),null,e)}async function ub(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Ro(t,ib(r,i));await t._updateTokensIfNecessary(o,!0)}function hb(t,e,n,r){return zt(t).onIdTokenChanged(e,n,r)}function RN(t,e,n){return zt(t).beforeAuthStateChanged(e,n)}function xN(t){return zt(t).signOut()}async function ON(t){return zt(t).delete()}const xu="__sak";/**
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
 */class fb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NN(){const t=En();return Mg(t)||Mh(t)}const PN=1e3,DN=10;class db extends fb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NN()&&nN(),this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}db.type="LOCAL";const kN=db;/**
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
 */class pb extends fb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pb.type="SESSION";const gb=pb;/**
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
 */function MN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await MN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
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
 */function Ug(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ug("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tr(){return window}function FN(t){Tr().location.href=t}/**
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
 */function mb(){return typeof Tr().WorkerGlobalScope<"u"&&typeof Tr().importScripts=="function"}async function UN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $N(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jN(){return mb()?self:null}/**
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
 */const vb="firebaseLocalStorageDb",BN=1,Ou="firebaseLocalStorage",yb="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fh(t,e){return t.transaction([Ou],e?"readwrite":"readonly").objectStore(Ou)}function VN(){const t=indexedDB.deleteDatabase(vb);return new Ul(t).toPromise()}function Xd(){const t=indexedDB.open(vb,BN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ou,{keyPath:yb})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ou)?e(r):(r.close(),await VN(),e(await Xd()))})})}async function fy(t,e,n){const r=Fh(t,!0).put({[yb]:e,value:n});return new Ul(r).toPromise()}async function HN(t,e){const n=Fh(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function dy(t,e){const n=Fh(t,!0).delete(e);return new Ul(n).toPromise()}const WN=800,KN=3;class Eb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(jN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UN(),!this.activeServiceWorker)return;this.sender=new LN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await fy(e,xu,"1"),await dy(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fh(s,!1).getAll();return new Ul(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eb.type="LOCAL";const GN=Eb;new Ml(3e4,6e4);/**
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
 */function zN(t,e){return e?Hr(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $g extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YN(t){return cb(t.auth,new $g(t),t.bypassAuthState)}function XN(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),lb(n,new $g(t),t.bypassAuthState)}async function QN(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),_N(n,new $g(t),t.bypassAuthState)}/**
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
 */class wb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YN;case"linkViaPopup":case"linkViaRedirect":return QN;case"reauthViaPopup":case"reauthViaRedirect":return XN;default:hr(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qN=new Ml(2e3,1e4);class ro extends wb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=Ug();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(br(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(br(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}ro.currentPopupAction=null;/**
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
 */const JN="pendingRedirect",Zc=new Map;class ZN extends wb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const r=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(t,e){const n=rP(e),r=nP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tP(t,e){Zc.set(t._key(),e)}function nP(t){return Hr(t._redirectPersistence)}function rP(t){return Jc(JN,t.config.apiKey,t.name)}async function sP(t,e,n=!1){const r=Ui(t),s=zN(r,e),o=await new ZN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const iP=10*60*1e3;class oP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_b(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(br(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iP&&this.cachedEventUids.clear(),this.cachedEventUids.has(py(e))}saveEventToCache(e){this.cachedEventUids.add(py(e)),this.lastProcessedEventTime=Date.now()}}function py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _b({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _b(t);default:return!1}}/**
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
 */async function lP(t,e={}){return Fi(t,"GET","/v1/projects",e)}/**
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
 */const cP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function hP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lP(t);for(const n of e)try{if(fP(n))return}catch{}hr(t,"unauthorized-domain")}function fP(t){const e=Yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uP.test(n))return!1;if(cP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dP=new Ml(3e4,6e4);function gy(){const t=Tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pP(t){return new Promise((e,n)=>{var r,s,i;function o(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),n(br(t,"network-request-failed"))},timeout:dP.get()})}if(!((s=(r=Tr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tr().gapi)===null||i===void 0)&&i.load)o();else{const a=sN("iframefcb");return Tr()[a]=()=>{gapi.load?o():n(br(t,"network-request-failed"))},nb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw eu=null,e})}let eu=null;function gP(t){return eu=eu||pP(t),eu}/**
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
 */const mP=new Ml(5e3,15e3),vP="__/auth/iframe",yP="emulator/auth/iframe",EP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _P(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dg(e,yP):`https://${t.config.authDomain}/${vP}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=wP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qo(r).slice(1)}`}async function bP(t){const e=await gP(t),n=Tr().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:_P(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=br(t,"network-request-failed"),a=Tr().setTimeout(()=>{i(o)},mP.get());function l(){Tr().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const TP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SP=500,IP=600,CP="_blank",AP="http://localhost";class my{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RP(t,e,n,r=SP,s=IP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=En().toLowerCase();n&&(a=z_(c)?CP:n),G_(c)&&(e=e||AP,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(eN(c)&&a!=="_self")return xP(e||"",a),new my(null);const h=window.open(e||"",a,u);ye(h,t,"popup-blocked");try{h.focus()}catch{}return new my(h)}function xP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OP="__/auth/handler",NP="emulator/auth/handler",PP=encodeURIComponent("fac");async function vy(t,e,n,r,s,i){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof ob){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Fl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${PP}=${encodeURIComponent(l)}`:"";return`${DP(t)}?${Qo(a).slice(1)}${c}`}function DP({config:t}){return t.emulator?Dg(t,NP):`https://${t.authDomain}/${OP}`}/**
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
 */const jf="webStorageSupport";class kP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gb,this._completeRedirectFn=sP,this._overrideRedirectResult=tP}async _openPopup(e,n,r,s){var i;Jr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vy(e,n,r,Yd(),s);return RP(e,o,Ug())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await vy(e,n,r,Yd(),s);return FN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bP(e),r=new oP(e);return n.register("authEvent",s=>(ye(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jf,{type:jf},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jf];o!==void 0&&n(!!o),hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J_()||Mg()||Mh()}}const MP=kP;var yy="@firebase/auth",Ey="0.23.1";/**
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
 */class LP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UP(t){xr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ye(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},c=new cN(r,s,i,l);return hN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new ur("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new LP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(yy,Ey,FP(t)),Vn(yy,Ey,"esm2017")}/**
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
 */const $P=5*60,jP=x_("authIdTokenMaxAge")||$P;let wy=null;const BP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jP)return;const s=n==null?void 0:n.token;wy!==s&&(wy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bb(t=Og()){const e=xg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uN(t,{popupRedirectResolver:MP,persistence:[GN,kN,gb]}),r=x_("authTokenSyncURL");if(r){const i=BP(r);RN(n,i,()=>i(n.currentUser)),hb(n,o=>i(o))}const s=R_("auth");return s&&fN(n,`http://${s}`),n}UP("Browser");var VP=!1;/**
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
 */const HP=new Map,WP={activated:!1,tokenObservers:[]};function Or(t){return HP.get(t)||Object.assign({},WP)}const _y={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class KP{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ul,await GP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ul,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function GP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const zP={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Nu=new Xo("appCheck","AppCheck",zP);function YP(t){if(!Or(t).activated)throw Nu.create("use-before-activation",{appName:t.name})}/**
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
 */const XP="firebase-app-check-database",QP=1,Qd="firebase-app-check-store";let Cc=null;function qP(){return Cc||(Cc=new Promise((t,e)=>{try{const n=indexedDB.open(XP,QP);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Nu.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Qd,{keyPath:"compositeKey"})}}}catch(n){e(Nu.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Cc)}function JP(t,e){return ZP(eD(t),e)}async function ZP(t,e){const r=(await qP()).transaction(Qd,"readwrite"),i=r.objectStore(Qd).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Nu.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function eD(t){return`${t.options.appId}-${t.name}`}/**
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
 */const qd=new kl("@firebase/app-check");function by(t,e){return P_()?JP(t,e).catch(n=>{qd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const tD={error:"UNKNOWN_ERROR"};function nD(t){return Dh.encodeString(JSON.stringify(t),!1)}async function Jd(t,e=!1){const n=t.app;YP(n);const r=Or(n);let s=r.token,i;if(s&&!Ta(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Ta(l)?s=l:await by(n,void 0))}if(!e&&s&&Ta(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Or(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?qd.warn(l.message):qd.error(l),i=l}let a;return s?i?Ta(s)?a={token:s.token,internalError:i}:a=Sy(i):(a={token:s.token},r.token=s,await by(n,s)):a=Sy(i),o&&iD(n,a),a}function rD(t,e,n,r){const{app:s}=t,i=Or(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Ta(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Ty(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Ty(t))}function Tb(t,e){const n=Or(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Ty(t){const{app:e}=t,n=Or(e);let r=n.tokenRefresher;r||(r=sD(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function sD(t){const{app:e}=t;return new KP(async()=>{const n=Or(e);let r;if(n.token?r=await Jd(t,!0):r=await Jd(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Or(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},_y.RETRIAL_MIN_WAIT,_y.RETRIAL_MAX_WAIT)}function iD(t,e){const n=Or(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Ta(t){return t.expireTimeMillis-Date.now()>0}function Sy(t){return{token:nD(tD),error:t}}/**
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
 */class oD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Or(this.app);for(const n of e)Tb(this.app,n.next);return Promise.resolve()}}function aD(t,e){return new oD(t,e)}function lD(t){return{getToken:e=>Jd(t,e),addTokenListener:e=>rD(t,"INTERNAL",e),removeTokenListener:e=>Tb(t.app,e)}}const cD="@firebase/app-check",uD="0.7.0",hD="app-check",Iy="app-check-internal";function fD(){xr(new ur(hD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return aD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Iy).initialize()})),xr(new ur(Iy,t=>{const e=t.getProvider("app-check").getImmediate();return lD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Vn(cD,uD)}fD();var dD="firebase",pD="9.21.0";/**
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
 */Vn(dD,pD,"app");const Sb=Symbol("firebaseApp");function Ib(t){return Mr()&&jn(Sb,null)||Og(t)}const Ac=new WeakMap;function gD(t,e){if(!Ac.has(t)){const n=ph(!0);Ac.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ac.delete(t)}}return Ac.get(t)}const mD=new WeakMap,Rc=new WeakMap;function vD(t){const e=Ib(t);if(!Rc.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Rc.set(e,i),n(i.value)}];Rc.set(e,s)}return Rc.get(e)}function yD(t,e){const n=bb(e);hb(n,r=>{const s=vD();t.value=r,Array.isArray(s)&&s[1](t)})}const Cy="@firebase/database",Ay="0.14.4";/**
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
 */let Cb="";function ED(t){Cb=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),en(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ss(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wD(e)}}catch{}return new _D},si=Ab("localStorage"),Zd=Ab("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new kl("@firebase/database"),bD=function(){let t=1;return function(){return t++}}(),Rb=function(t){const e=xx(t),n=new Sx;n.update(e);const r=n.digest();return Dh.encodeByteArray(r)},$l=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$l.apply(null,r):typeof r=="object"?e+=en(r):e+=r,e+=" "}return e};let di=null,Ry=!0;const TD=function(t,e){ee(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vo.logLevel=Je.VERBOSE,di=vo.log.bind(vo),e&&Zd.set("logging_enabled",!0)):typeof t=="function"?di=t:(di=null,Zd.remove("logging_enabled"))},ln=function(...t){if(Ry===!0&&(Ry=!1,di===null&&Zd.get("logging_enabled")===!0&&TD(!0)),di){const e=$l.apply(null,t);di(e)}},jl=function(t){return function(...e){ln(t,...e)}},ep=function(...t){const e="FIREBASE INTERNAL ERROR: "+$l(...t);vo.error(e)},Si=function(...t){const e=`FIREBASE FATAL ERROR: ${$l(...t)}`;throw vo.error(e),new Error(e)},Hn=function(...t){const e="FIREBASE WARNING: "+$l(...t);vo.warn(e)},SD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ID=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Oo="[MIN_NAME]",Ii="[MAX_NAME]",qo=function(t,e){if(t===e)return 0;if(t===Oo||e===Ii)return-1;if(e===Oo||t===Ii)return 1;{const n=xy(t),r=xy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},CD=function(t,e){return t===e?0:t<e?-1:1},ca=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+en(e))},jg=function(t){if(typeof t!="object"||t===null)return en(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=en(e[r]),n+=":",n+=jg(t[e[r]]);return n+="}",n},Ob=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function qn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nb=function(t){ee(!xb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},AD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xD=new RegExp("^-?(0*)\\d{1,10}$"),OD=-2147483648,ND=2147483647,xy=function(t){if(xD.test(t)){const e=Number(t);if(e>=OD&&e<=ND)return e}return null},Bl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},PD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ja=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Hn(e)}}class tp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="5",Pb="v",Db="s",kb="r",Mb="f",Lb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fb="ls",Ub="p",np="ac",$b="websocket",jb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bb(t,e,n){ee(typeof e=="string","typeof type must == string"),ee(typeof n=="object","typeof params must == object");let r;if(e===$b)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LD(t)&&(n.ns=t.namespace);const s=[];return qn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.counters_={}}incrementCounter(e,n=1){ss(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ax(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={},Vf={};function Vg(t){const e=t.toString();return Bf[e]||(Bf[e]=new FD),Bf[e]}function UD(t,e){const n=t.toString();return Vf[n]||(Vf[n]=e()),Vf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Bl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="start",jD="close",BD="pLPCommand",VD="pRTLPCB",Vb="id",Hb="pw",Wb="ser",HD="cb",WD="seg",KD="ts",GD="d",zD="dframe",Kb=1870,Gb=30,YD=Kb-Gb,XD=25e3,QD=3e4;class so{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jl(e),this.stats_=Vg(n),this.urlFn=l=>(this.appCheckToken&&(l[np]=this.appCheckToken),Bb(n,jb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $D(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QD)),ID(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hg((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oy)this.id=a,this.password=l;else if(o===jD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Oy]="t",r[Wb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[HD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Pb]=Bg,this.transportSessionId&&(r[Db]=this.transportSessionId),this.lastSessionId&&(r[Fb]=this.lastSessionId),this.applicationId&&(r[Ub]=this.applicationId),this.appCheckToken&&(r[np]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lb.test(location.hostname)&&(r[kb]=Mb);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){so.forceAllow_=!0}static forceDisallow(){so.forceDisallow_=!0}static isAvailable(){return so.forceAllow_?!0:!so.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AD()&&!RD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=en(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n),s=Ob(r,YD);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[zD]="t",r[Vb]=e,r[Hb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=en(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bD(),window[BD+this.uniqueCallbackIdentifier]=e,window[VD+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ln("frame writing exception"),a.stack&&ln(a.stack),ln(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vb]=this.myID,e[Hb]=this.myPW,e[Wb]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gb+r.length<=Kb;){const o=this.pendingSegs.shift();r=r+"&"+WD+s+"="+o.seg+"&"+KD+s+"="+o.ts+"&"+GD+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(XD)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=16384,JD=45e3;let Pu=null;typeof MozWebSocket<"u"?Pu=MozWebSocket:typeof WebSocket<"u"&&(Pu=WebSocket);class sr{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jl(this.connId),this.stats_=Vg(n),this.connURL=sr.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Pb]=Bg,typeof location<"u"&&location.hostname&&Lb.test(location.hostname)&&(o[kb]=Mb),n&&(o[Db]=n),r&&(o[Fb]=r),s&&(o[np]=s),i&&(o[Ub]=i),Bb(e,$b,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,si.set("previous_websocket_failure",!0);try{let r;N_(),this.mySock=new Pu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){sr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Pu!==null&&!sr.forceDisallow_}static previouslyFailed(){return si.isInMemoryStorage||si.get("previous_websocket_failure")===!0}markConnectionHealthy(){si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=en(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ob(n,qD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sr.responsesRequiredToBeHealthy=2;sr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[so,sr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sr&&sr.isAvailable();let r=n&&!sr.previouslyFailed();if(e.webSocketOnly&&(n||Hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sr];else{const s=this.transports_=[];for(const i of gl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);gl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=6e4,ek=5e3,tk=10*1024,nk=100*1024,Hf="t",Ny="d",rk="s",Py="r",sk="e",Dy="o",ky="a",My="n",Ly="p",ik="h";class ok{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jl("c:"+this.id+":"),this.transportManager_=new gl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ja(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hf in e){const n=e[Hf];n===ky?this.upgradeIfSecondaryHealthy_():n===Py?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ca("t",e),r=ca("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ly,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ky,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:My,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ca("t",e),r=ca("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ca(Hf,e);if(Ny in e){const r=e[Ny];if(n===ik){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===My){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rk?this.onConnectionShutdown_(r):n===Py?this.onReset_(r):n===sk?ep("Server Error: "+r):n===Dy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ep("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bg!==r&&Hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ja(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ja(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ek))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ly,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Yb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ag()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Du}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=32,Uy=768;class vt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function at(){return new vt("")}function ze(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fs(t){return t.pieces_.length-t.pieceNum_}function gt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new vt(t.pieces_,e)}function Xb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ak(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new vt(e,0)}function Gt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof vt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new vt(n,0)}function He(t){return t.pieceNum_>=t.pieces_.length}function Qn(t,e){const n=ze(t),r=ze(e);if(n===null)return e;if(n===r)return Qn(gt(t),gt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jb(t,e){if(Fs(t)!==Fs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ir(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fs(t)>Fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lk{constructor(e,n){this.errorPrefix_=n,this.parts_=Qb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kh(this.parts_[r]);Zb(this)}}function ck(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kh(e),Zb(t)}function uk(t){const e=t.parts_.pop();t.byteLength_-=kh(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zb(t){if(t.byteLength_>Uy)throw new Error(t.errorPrefix_+"has a key path longer than "+Uy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fy+") or object contains a cycle "+Zs(t))}function Zs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Yb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Wg}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e3,hk=60*5*1e3,$y=30*1e3,fk=1.3,dk=3e4,pk="server_kill",jy=3;class Yr extends zb{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yr.nextPersistentConnectionId_++,this.log_=jl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ua,this.maxReconnectDelay_=hk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!N_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Du.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(en(i)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ul,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Yr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ss(e,"w")){const r=Ao(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$y)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+en(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ep("Unrecognized action received from server: "+en(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dk&&(this.reconnectDelay_=ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ok(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{Hn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(pk)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Hn(h),l())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vd(this.interruptReasons_)&&(this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>jg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new vt(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ln("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jy&&(this.reconnectDelay_=$y,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ln("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cb.replace(/\./g,"-")]=1,Ag()?e["framework.cordova"]=1:O_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Du.getInstance().currentlyOnline();return Vd(this.interruptReasons_)&&e}}Yr.nextPersistentConnectionId_=0;Yr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ye(Oo,e),s=new Ye(Oo,n);return this.compare(r,s)!==0}minPost(){return Ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;class eT extends Uh{static get __EMPTY_NODE(){return xc}static set __EMPTY_NODE(e){xc=e}compare(e,n){return qo(e.name,n.name)}isDefinedOn(e){throw Yo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ye.MIN}maxPost(){return new Ye(Ii,xc)}makePost(e,n){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Ye(e,xc)}toString(){return".key"}}const yo=new eT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Kt.RED,this.left=s??On.EMPTY_NODE,this.right=i??On.EMPTY_NODE}copy(e,n,r,s,i){return new Kt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return On.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kt.RED=!0;Kt.BLACK=!1;class gk{copy(e,n,r,s,i){return this}insert(e,n,r){return new Kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class On{constructor(e,n=On.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new On(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new On(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oc(this.root_,null,this.comparator_,!0,e)}}On.EMPTY_NODE=new gk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return qo(t.name,e.name)}function Kg(t,e){return qo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp;function vk(t){rp=t}const tT=function(t){return typeof t=="number"?"number:"+Nb(t):"string:"+t},nT=function(t){if(t.isLeafNode()){const e=t.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ss(e,".sv"),"Priority must be a string or number.")}else ee(t===rp||t.isEmpty(),"priority of unexpected type.");ee(t===rp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let By;class Ht{constructor(e,n=Ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nT(this.priorityNode_)}static set __childrenNodeConstructor(e){By=e}static get __childrenNodeConstructor(){return By}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return He(e)?this:ze(e)===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ze(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||Fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nb(this.value_):e+=this.value_,this.lazyHash_=Rb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ht.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ht.VALUE_TYPE_ORDER.indexOf(n),i=Ht.VALUE_TYPE_ORDER.indexOf(r);return ee(s>=0,"Unknown leaf type: "+n),ee(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rT,sT;function yk(t){rT=t}function Ek(t){sT=t}class wk extends Uh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?qo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ye.MIN}maxPost(){return new Ye(Ii,new Ht("[PRIORITY-POST]",sT))}makePost(e,n){const r=rT(e);return new Ye(n,new Ht("[PRIORITY-POST]",r))}toString(){return".priority"}}const pn=new wk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=Math.log(2);class bk{constructor(e){const n=i=>parseInt(Math.log(i)/_k,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ku=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Kt(f,h.node,Kt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),m=s(d+1,c);return h=t[d],f=n?n(h):h,new Kt(f,h.node,Kt.BLACK,p,m)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const y=h-p,v=h;h-=p;const g=s(y+1,v),E=t[y],_=n?n(E):E;d(new Kt(_,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?f(y,Kt.BLACK):(f(y,Kt.BLACK),f(y,Kt.RED))}return u},o=new bk(t.length),a=i(o);return new On(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;const Wi={};class Wr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ee(Wi&&pn,"ChildrenNode.ts has not been loaded"),Wf=Wf||new Wr({".priority":Wi},{".priority":pn}),Wf}get(e){const n=Ao(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof On?n:null}hasIndex(e){return ss(this.indexSet_,e.toString())}addIndex(e,n){ee(e!==yo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ye.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ku(r,e.getCompare()):a=Wi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wr(u,c)}addToIndexes(e,n){const r=Tu(this.indexes_,(s,i)=>{const o=Ao(this.indexSet_,i);if(ee(o,"Missing index implementation for "+i),s===Wi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ye.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ku(a,o.getCompare())}else return Wi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ye(e.name,a))),l.insert(e,e.node)}});return new Wr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Tu(this.indexes_,s=>{if(s===Wi)return s;{const i=n.get(e.name);return i?s.remove(new Ye(e.name,i)):s}});return new Wr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class rt{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nT(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ha||(ha=new rt(new On(Kg),null,Wr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ha}updatePriority(e){return this.children_.isEmpty()?this:new rt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ha:n}}getChild(e){const n=ze(e);return n===null?this:this.getImmediateChild(n).getChild(gt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ee(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ye(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ha:this.priorityNode_;return new rt(s,o,i)}}updateChild(e,n){const r=ze(e);if(r===null)return n;{ee(ze(e)!==".priority"||Fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(gt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(pn,(o,a)=>{n[o]=a.val(e),r++,i&&rt.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tT(this.getPriority().val())+":"),this.forEachChild(pn,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Rb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ye(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ye(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ye(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ye.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vl?-1:0}withIndex(e){if(e===yo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new rt(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pn),s=n.getIterator(pn);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yo?null:this.indexMap_.get(e.toString())}}rt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tk extends rt{constructor(){super(new On(Kg),rt.EMPTY_NODE,Wr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return rt.EMPTY_NODE}isEmpty(){return!1}}const Vl=new Tk;Object.defineProperties(Ye,{MIN:{value:new Ye(Oo,rt.EMPTY_NODE)},MAX:{value:new Ye(Ii,Vl)}});eT.__EMPTY_NODE=rt.EMPTY_NODE;Ht.__childrenNodeConstructor=rt;vk(Vl);Ek(Vl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=!0;function cn(t,e=null){if(t===null)return rt.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ht(n,cn(e))}if(!(t instanceof Array)&&Sk){const n=[];let r=!1;if(qn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=cn(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ye(o,l)))}}),n.length===0)return rt.EMPTY_NODE;const i=ku(n,mk,o=>o.name,Kg);if(r){const o=ku(n,pn.getCompare());return new rt(i,cn(e),new Wr({".priority":o},{".priority":pn}))}else return new rt(i,cn(e),Wr.Default)}else{let n=rt.EMPTY_NODE;return qn(t,(r,s)=>{if(ss(t,r)&&r.substring(0,1)!=="."){const i=cn(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(cn(e))}}yk(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends Uh{constructor(e){super(),this.indexPath_=e,ee(!He(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?qo(e.name,n.name):i}makePost(e,n){const r=cn(e),s=rt.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ye(n,s)}maxPost(){const e=rt.EMPTY_NODE.updateChild(this.indexPath_,Vl);return new Ye(Ii,e)}toString(){return Qb(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck extends Uh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ye.MIN}maxPost(){return Ye.MAX}makePost(e,n){const r=cn(e);return new Ye(n,r)}toString(){return".value"}}const Ak=new Ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){return{type:"value",snapshotNode:t}}function xk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ok(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Nk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oo}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pn}copy(){const e=new Gg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pn?n="$priority":t.index_===Ak?n="$value":t.index_===yo?n="$key":(ee(t.index_ instanceof Ik,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=en(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=en(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+en(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=en(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+en(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends zb{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=jl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Mu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Hy(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Ao(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Mu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Hy(e._queryParams),r=e._path.toString(),s=new ul;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hl(a.responseText)}catch{Hn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Hn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.rootNode_=rt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){return{value:null,children:new Map}}function iT(t,e,n){if(He(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ze(e);t.children.has(r)||t.children.set(r,Lu());const s=t.children.get(r);e=gt(e),iT(s,e,n)}}function sp(t,e,n){t.value!==null?n(e,t.value):Dk(t,(r,s)=>{const i=new vt(e.toString()+"/"+r);sp(s,i,n)})}function Dk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=10*1e3,Mk=30*1e3,Lk=5*60*1e3;class Fk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kk(e);const r=Ky+(Mk-Ky)*Math.random();ja(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qn(e,(s,i)=>{i>0&&ss(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ja(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Er||(Er={}));function oT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function aT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Er.ACK_USER_WRITE,this.source=oT()}operationForChild(e){if(He(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new vt(e));return new Fu(at(),n,this.revert)}}else return ee(ze(this.path)===e,"operationForChild called for unrelated child."),new Fu(gt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Er.OVERWRITE}operationForChild(e){return He(this.path)?new Ci(this.source,at(),this.snap.getImmediateChild(e)):new Ci(this.source,gt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Er.MERGE}operationForChild(e){if(He(this.path)){const n=this.children.subtree(new vt(e));return n.isEmpty()?null:n.value?new Ci(this.source,at(),n.value):new ml(this.source,at(),n)}else return ee(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ml(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(He(e))return this.isFullyInitialized()&&!this.filtered_;const n=ze(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Uk(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Nk(o.childName,o.snapshotNode))}),fa(t,s,"child_removed",e,r,n),fa(t,s,"child_added",e,r,n),fa(t,s,"child_moved",i,r,n),fa(t,s,"child_changed",e,r,n),fa(t,s,"value",e,r,n),s}function fa(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>jk(t,a,l)),o.forEach(a=>{const l=$k(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function $k(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jk(t,e,n){if(e.childName==null||n.childName==null)throw Yo("Should only compare child_ events.");const r=new Ye(e.childName,e.snapshotNode),s=new Ye(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){return{eventCache:t,serverCache:e}}function Ba(t,e,n,r){return cT(new zg(e,n,r),t.serverCache)}function uT(t,e,n,r){return cT(t.eventCache,new zg(e,n,r))}function ip(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ai(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;const Bk=()=>(Kf||(Kf=new On(CD)),Kf);class pt{constructor(e,n=Bk()){this.value=e,this.children=n}static fromObject(e){let n=new pt(null);return qn(e,(r,s)=>{n=n.set(new vt(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:at(),value:this.value};if(He(e))return null;{const r=ze(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(gt(e),n);return i!=null?{path:Gt(new vt(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(He(e))return this;{const n=ze(e),r=this.children.get(n);return r!==null?r.subtree(gt(e)):new pt(null)}}set(e,n){if(He(e))return new pt(n,this.children);{const r=ze(e),i=(this.children.get(r)||new pt(null)).set(gt(e),n),o=this.children.insert(r,i);return new pt(this.value,o)}}remove(e){if(He(e))return this.children.isEmpty()?new pt(null):new pt(null,this.children);{const n=ze(e),r=this.children.get(n);if(r){const s=r.remove(gt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new pt(null):new pt(this.value,i)}else return this}}get(e){if(He(e))return this.value;{const n=ze(e),r=this.children.get(n);return r?r.get(gt(e)):null}}setTree(e,n){if(He(e))return n;{const r=ze(e),i=(this.children.get(r)||new pt(null)).setTree(gt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new pt(this.value,o)}}fold(e){return this.fold_(at(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Gt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,at(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(He(e))return null;{const i=ze(e),o=this.children.get(i);return o?o.findOnPath_(gt(e),Gt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,at(),n)}foreachOnPath_(e,n,r){if(He(e))return this;{this.value&&r(n,this.value);const s=ze(e),i=this.children.get(s);return i?i.foreachOnPath_(gt(e),Gt(n,s),r):new pt(null)}}foreach(e){this.foreach_(at(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Gt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.writeTree_=e}static empty(){return new cr(new pt(null))}}function Va(t,e,n){if(He(e))return new cr(new pt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qn(s,e);return i=i.updateChild(o,n),new cr(t.writeTree_.set(s,i))}else{const s=new pt(n),i=t.writeTree_.setTree(e,s);return new cr(i)}}}function Gy(t,e,n){let r=t;return qn(n,(s,i)=>{r=Va(r,Gt(e,s),i)}),r}function zy(t,e){if(He(e))return cr.empty();{const n=t.writeTree_.setTree(e,new pt(null));return new cr(n)}}function op(t,e){return $i(t,e)!=null}function $i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qn(n.path,e)):null}function Yy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pn,(r,s)=>{e.push(new Ye(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ye(r,s.value))}),e}function xs(t,e){if(He(e))return t;{const n=$i(t,e);return n!=null?new cr(new pt(n)):new cr(t.writeTree_.subtree(e))}}function ap(t){return t.writeTree_.isEmpty()}function No(t,e){return hT(at(),t.writeTree_,e)}function hT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(ee(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=hT(Gt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Gt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){return vT(e,t)}function Vk(t,e,n,r,s){ee(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Va(t.visibleWrites,e,n)),t.lastWriteId=r}function Hk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Wk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ee(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Kk(a,r.path)?s=!1:ir(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Gk(t),!0;if(r.snap)t.visibleWrites=zy(t.visibleWrites,r.path);else{const a=r.children;qn(a,l=>{t.visibleWrites=zy(t.visibleWrites,Gt(r.path,l))})}return!0}else return!1}function Kk(t,e){if(t.snap)return ir(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ir(Gt(t.path,n),e))return!0;return!1}function Gk(t){t.visibleWrites=dT(t.allWrites,zk,at()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zk(t){return t.visible}function dT(t,e,n){let r=cr.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ir(n,o)?(a=Qn(n,o),r=Va(r,a,i.snap)):ir(o,n)&&(a=Qn(o,n),r=Va(r,at(),i.snap.getChild(a)));else if(i.children){if(ir(n,o))a=Qn(n,o),r=Gy(r,a,i.children);else if(ir(o,n))if(a=Qn(o,n),He(a))r=Gy(r,at(),i.children);else{const l=Ao(i.children,ze(a));if(l){const c=l.getChild(gt(a));r=Va(r,at(),c)}}}else throw Yo("WriteRecord should have .snap or .children")}}return r}function pT(t,e,n,r,s){if(!r&&!s){const i=$i(t.visibleWrites,e);if(i!=null)return i;{const o=xs(t.visibleWrites,e);if(ap(o))return n;if(n==null&&!op(o,at()))return null;{const a=n||rt.EMPTY_NODE;return No(o,a)}}}else{const i=xs(t.visibleWrites,e);if(!s&&ap(i))return n;if(!s&&n==null&&!op(i,at()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(ir(c.path,e)||ir(e,c.path))},a=dT(t.allWrites,o,e),l=n||rt.EMPTY_NODE;return No(a,l)}}}function Yk(t,e,n){let r=rt.EMPTY_NODE;const s=$i(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(pn,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=xs(t.visibleWrites,e);return n.forEachChild(pn,(o,a)=>{const l=No(xs(i,new vt(o)),a);r=r.updateImmediateChild(o,l)}),Yy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=xs(t.visibleWrites,e);return Yy(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Xk(t,e,n,r,s){ee(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Gt(e,n);if(op(t.visibleWrites,i))return null;{const o=xs(t.visibleWrites,i);return ap(o)?s.getChild(n):No(o,s.getChild(n))}}function Qk(t,e,n,r){const s=Gt(e,n),i=$i(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=xs(t.visibleWrites,s);return No(o,r.getNode().getImmediateChild(n))}else return null}function qk(t,e){return $i(t.visibleWrites,e)}function Jk(t,e,n,r,s,i,o){let a;const l=xs(t.visibleWrites,e),c=$i(l,at());if(c!=null)a=c;else if(n!=null)a=No(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Zk(){return{visibleWrites:cr.empty(),allWrites:[],lastWriteId:-1}}function lp(t,e,n,r){return pT(t.writeTree,t.treePath,e,n,r)}function gT(t,e){return Yk(t.writeTree,t.treePath,e)}function Xy(t,e,n,r){return Xk(t.writeTree,t.treePath,e,n,r)}function Uu(t,e){return qk(t.writeTree,Gt(t.treePath,e))}function eM(t,e,n,r,s,i){return Jk(t.writeTree,t.treePath,e,n,r,s,i)}function Yg(t,e,n){return Qk(t.writeTree,t.treePath,e,n)}function mT(t,e){return vT(Gt(t.treePath,e),t.writeTree)}function vT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ee(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Vy(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ok(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,xk(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Vy(r,e.snapshotNode,s.oldSnap));else throw Yo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const yT=new nM;class Xg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ai(this.viewCache_),i=eM(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function rM(t,e){ee(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sM(t,e,n,r,s){const i=new tM;let o,a;if(n.type===Er.OVERWRITE){const c=n;c.source.fromUser?o=cp(t,e,c.path,c.snap,r,s,i):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!He(c.path),o=$u(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Er.MERGE){const c=n;c.source.fromUser?o=oM(t,e,c.path,c.children,r,s,i):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=up(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Er.ACK_USER_WRITE){const c=n;c.revert?o=cM(t,e,c.path,r,s,i):o=aM(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Er.LISTEN_COMPLETE)o=lM(t,e,n.path,r,i);else throw Yo("Unknown operation type: "+n.type);const l=i.getChanges();return iM(e,o,l),{viewCache:o,changes:l}}function iM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ip(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Rk(ip(e)))}}function ET(t,e,n,r,s,i){const o=e.eventCache;if(Uu(r,n)!=null)return e;{let a,l;if(He(n))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ai(e),u=c instanceof rt?c:rt.EMPTY_NODE,h=gT(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=lp(r,Ai(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ze(n);if(c===".priority"){ee(Fs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Xy(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=gt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Xy(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Yg(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return Ba(e,a,o.isFullyInitialized()||He(n),t.filter.filtersNodes())}}function $u(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(He(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=ze(n);if(!l.isCompleteForPath(n)&&Fs(n)>1)return e;const p=gt(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,yT,null)}const h=uT(e,c,l.isFullyInitialized()||He(n),u.filtersNodes()),f=new Xg(s,h,i);return ET(t,h,n,s,f,a)}function cp(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new Xg(s,e,i);if(He(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ba(e,c,!0,t.filter.filtersNodes());else{const h=ze(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ba(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=gt(n),d=a.getNode().getImmediateChild(h);let p;if(He(f))p=r;else{const m=u.getCompleteChild(h);m!=null?Xb(f)===".priority"&&m.getChild(qb(f)).isEmpty()?p=m:p=m.updateChild(f,r):p=rt.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Ba(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qy(t,e){return t.eventCache.isCompleteForChild(e)}function oM(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Gt(n,l);Qy(e,ze(u))&&(a=cp(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Gt(n,l);Qy(e,ze(u))||(a=cp(t,a,u,c,s,i,o))}),a}function qy(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function up(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;He(n)?c=r:c=new pt(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=qy(t,d,f);l=$u(t,l,new vt(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=qy(t,p,f);l=$u(t,l,new vt(h),m,s,i,o,a)}}),l}function aM(t,e,n,r,s,i,o){if(Uu(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(He(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $u(t,e,n,l.getNode().getChild(n),s,i,a,o);if(He(n)){let c=new pt(null);return l.getNode().forEachChild(yo,(u,h)=>{c=c.set(new vt(u),h)}),up(t,e,n,c,s,i,a,o)}else return e}else{let c=new pt(null);return r.foreach((u,h)=>{const f=Gt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),up(t,e,n,c,s,i,a,o)}}function lM(t,e,n,r,s){const i=e.serverCache,o=uT(e,i.getNode(),i.isFullyInitialized()||He(n),i.isFiltered());return ET(t,o,n,r,yT,s)}function cM(t,e,n,r,s,i){let o;if(Uu(r,n)!=null)return e;{const a=new Xg(r,e,s),l=e.eventCache.getNode();let c;if(He(n)||ze(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=lp(r,Ai(e));else{const h=e.serverCache.getNode();ee(h instanceof rt,"serverChildren would be complete if leaf node"),u=gT(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ze(n);let h=Yg(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,gt(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,rt.EMPTY_NODE,gt(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lp(r,Ai(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Uu(r,at())!=null,Ba(e,c,o,t.filter.filtersNodes())}}function uM(t,e){const n=Ai(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!He(e)&&!n.getImmediateChild(ze(e)).isEmpty())?n.getChild(e):null}function Jy(t,e,n,r){e.type===Er.MERGE&&e.source.queryId!==null&&(ee(Ai(t.viewCache_),"We should always have a full cache before handling merges"),ee(ip(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=sM(t.processor_,s,e,n,r);return rM(t.processor_,i.viewCache),ee(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,hM(t,i.changes,i.viewCache.eventCache.getNode(),null)}function hM(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Uk(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zy;function fM(t){ee(!Zy,"__referenceConstructor has already been defined"),Zy=t}function Qg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return ee(i!=null,"SyncTree gave us an op for an invalid query."),Jy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Jy(o,e,n,r));return i}}function qg(t,e){let n=null;for(const r of t.views.values())n=n||uM(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE;function dM(t){ee(!eE,"__referenceConstructor has already been defined"),eE=t}class tE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pt(null),this.pendingWriteTree_=Zk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pM(t,e,n,r,s){return Vk(t.pendingWriteTree_,e,n,r,s),s?jh(t,new Ci(oT(),e,n)):[]}function io(t,e,n=!1){const r=Hk(t.pendingWriteTree_,e);if(Wk(t.pendingWriteTree_,e)){let i=new pt(null);return r.snap!=null?i=i.set(at(),!0):qn(r.children,o=>{i=i.set(new vt(o),!0)}),jh(t,new Fu(r.path,i,n))}else return[]}function $h(t,e,n){return jh(t,new Ci(aT(),e,n))}function gM(t,e,n){const r=pt.fromObject(n);return jh(t,new ml(aT(),e,r))}function mM(t,e,n,r){const s=TT(t,r);if(s!=null){const i=ST(s),o=i.path,a=i.queryId,l=Qn(o,e),c=new Ci(lT(a),l,n);return IT(t,o,c)}else return[]}function vM(t,e,n,r){const s=TT(t,r);if(s){const i=ST(s),o=i.path,a=i.queryId,l=Qn(o,e),c=pt.fromObject(n),u=new ml(lT(a),l,c);return IT(t,o,u)}else return[]}function wT(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qn(o,e),c=qg(a,l);if(c)return c});return pT(s,e,i,n,!0)}function jh(t,e){return _T(e,t.syncPointTree_,null,fT(t.pendingWriteTree_,at()))}function _T(t,e,n,r){if(He(t.path))return bT(t,e,n,r);{const s=e.get(at());n==null&&s!=null&&(n=qg(s,at()));let i=[];const o=ze(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=mT(r,o);i=i.concat(_T(a,l,c,u))}return s&&(i=i.concat(Qg(s,t,r,n))),i}}function bT(t,e,n,r){const s=e.get(at());n==null&&s!=null&&(n=qg(s,at()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=mT(r,o),u=t.operationForChild(o);u&&(i=i.concat(bT(u,a,l,c)))}),s&&(i=i.concat(Qg(s,t,r,n))),i}function TT(t,e){return t.tagToQueryMap.get(e)}function ST(t){const e=t.indexOf("$");return ee(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new vt(t.substr(0,e))}}function IT(t,e,n){const r=t.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const s=fT(t.pendingWriteTree_,e);return Qg(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jg(n)}node(){return this.node_}}class Zg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Gt(this.path_,e);return new Zg(this.syncTree_,n)}node(){return wT(this.syncTree_,this.path_)}}const yM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nE=function(t,e,n){if(!t||typeof t!="object")return t;if(ee(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return EM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wM(t[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},EM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ee(!1,"Unexpected server value: "+t)}},wM=function(t,e,n){t.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const s=e.node();if(ee(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},_M=function(t,e,n,r){return em(e,new Zg(n,t),r)},bM=function(t,e,n){return em(t,new Jg(e),n)};function em(t,e,n){const r=t.getPriority().val(),s=nE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=nE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ht(a,cn(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ht(s))),o.forEachChild(pn,(a,l)=>{const c=em(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nm(t,e){let n=e instanceof vt?e:new vt(e),r=t,s=ze(n);for(;s!==null;){const i=Ao(r.node.children,s)||{children:{},childCount:0};r=new tm(s,r,i),n=gt(n),s=ze(n)}return r}function Jo(t){return t.node.value}function CT(t,e){t.node.value=e,hp(t)}function AT(t){return t.node.childCount>0}function TM(t){return Jo(t)===void 0&&!AT(t)}function Bh(t,e){qn(t.node.children,(n,r)=>{e(new tm(n,t,r))})}function RT(t,e,n,r){n&&!r&&e(t),Bh(t,s=>{RT(s,e,!0,r)}),n&&r&&e(t)}function SM(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hl(t){return new vt(t.parent===null?t.name:Hl(t.parent)+"/"+t.name)}function hp(t){t.parent!==null&&IM(t.parent,t.name,t)}function IM(t,e,n){const r=TM(n),s=ss(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,hp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,hp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=/[\[\].#$\/\u0000-\u001F\u007F]/,AM=/[\[\].#$\u0000-\u001F\u007F]/,Gf=10*1024*1024,xT=function(t){return typeof t=="string"&&t.length!==0&&!CM.test(t)},RM=function(t){return typeof t=="string"&&t.length!==0&&!AM.test(t)},xM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RM(t)},OT=function(t,e,n){const r=n instanceof vt?new lk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zs(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zs(r)+" with contents = "+e.toString());if(xb(e))throw new Error(t+"contains "+e.toString()+" "+Zs(r));if(typeof e=="string"&&e.length>Gf/3&&kh(e)>Gf)throw new Error(t+"contains a string greater than "+Gf+" utf8 bytes "+Zs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(qn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!xT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ck(r,o),OT(t,a,r),uk(r)}),s&&i)throw new Error(t+' contains ".value" child '+Zs(r)+" in addition to actual children.")}},OM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xM(n))throw new Error(Rx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PM(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Jb(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ji(t,e,n){PM(t,n),DM(t,r=>ir(r,e)||ir(e,r))}function DM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(kM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();di&&ln("event: "+n.toString()),Bl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM="repo_interrupt",LM=25;class FM{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lu(),this.transactionQueueTree_=new tm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UM(t,e,n){if(t.stats_=Vg(t.repoInfo_),t.forceRestClient_||PD())t.server_=new Mu(t.repoInfo_,(r,s,i,o)=>{rE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{en(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yr(t.repoInfo_,e,(r,s,i,o)=>{rE(t,r,s,i,o)},r=>{sE(t,r)},r=>{jM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=UD(t.repoInfo_,()=>new Fk(t.stats_,t.server_)),t.infoData_=new Pk,t.infoSyncTree_=new tE({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=$h(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rm(t,"connected",!1),t.serverSyncTree_=new tE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);ji(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function $M(t){const n=t.infoData_.getNode(new vt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function NT(t){return yM({timestamp:$M(t)})}function rE(t,e,n,r,s){t.dataUpdateCount++;const i=new vt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Tu(n,c=>cn(c));o=vM(t.serverSyncTree_,i,l,s)}else{const l=cn(n);o=mM(t.serverSyncTree_,i,l,s)}else if(r){const l=Tu(n,c=>cn(c));o=gM(t.serverSyncTree_,i,l)}else{const l=cn(n);o=$h(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=im(t,i)),ji(t.eventQueue_,a,o)}function sE(t,e){rm(t,"connected",e),e===!1&&VM(t)}function jM(t,e){qn(e,(n,r)=>{rm(t,n,r)})}function rm(t,e,n){const r=new vt("/.info/"+e),s=cn(n);t.infoData_.updateSnapshot(r,s);const i=$h(t.infoSyncTree_,r,s);ji(t.eventQueue_,r,i)}function BM(t){return t.nextWriteId_++}function VM(t){PT(t,"onDisconnectEvents");const e=NT(t),n=Lu();sp(t.onDisconnect_,at(),(s,i)=>{const o=_M(s,i,t.serverSyncTree_,e);iT(n,s,o)});let r=[];sp(n,at(),(s,i)=>{r=r.concat($h(t.serverSyncTree_,s,i));const o=GM(t,s);im(t,o)}),t.onDisconnect_=Lu(),ji(t.eventQueue_,at(),r)}function HM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MM)}function PT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ln(n,...e)}function DT(t,e,n){return wT(t.serverSyncTree_,e,n)||rt.EMPTY_NODE}function sm(t,e=t.transactionQueueTree_){if(e||Vh(t,e),Jo(e)){const n=MT(t,e);ee(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&WM(t,Hl(e),n)}else AT(e)&&Bh(e,n=>{sm(t,n)})}function WM(t,e,n){const r=n.map(c=>c.currentWriteId),s=DT(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];ee(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qn(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{PT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(io(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vh(t,nm(t.transactionQueueTree_,e)),sm(t,t.transactionQueueTree_),ji(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Bl(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Hn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}im(t,e)}},o)}function im(t,e){const n=kT(t,e),r=Hl(n),s=MT(t,n);return KM(t,s,r),r}function KM(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qn(n,l.path);let u=!1,h;if(ee(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=LM)u=!0,h="maxretry",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0));else{const f=DT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){OT("transaction failed: Data returned ",d,l.path);let p=cn(d);typeof d=="object"&&d!=null&&ss(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,v=NT(t),g=bM(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=BM(t),o.splice(o.indexOf(y),1),s=s.concat(pM(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(io(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(io(t.serverSyncTree_,l.currentWriteId,!0))}ji(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bl(r[a]);sm(t,t.transactionQueueTree_)}function kT(t,e){let n,r=t.transactionQueueTree_;for(n=ze(e);n!==null&&Jo(r)===void 0;)r=nm(r,n),e=gt(e),n=ze(e);return r}function MT(t,e){const n=[];return LT(t,e,n),n.sort((r,s)=>r.order-s.order),n}function LT(t,e,n){const r=Jo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Bh(e,s=>{LT(t,s,n)})}function Vh(t,e){const n=Jo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,CT(e,n.length>0?n:void 0)}Bh(e,r=>{Vh(t,r)})}function GM(t,e){const n=Hl(kT(t,e)),r=nm(t.transactionQueueTree_,e);return SM(r,s=>{zf(t,s)}),zf(t,r),RT(r,s=>{zf(t,s)}),n}function zf(t,e){const n=Jo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ee(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(ee(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(io(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?CT(e,void 0):n.length=i+1,ji(t.eventQueue_,Hl(e),s);for(let o=0;o<r.length;o++)Bl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function YM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const iE=function(t,e){const n=XM(t),r=n.namespace;n.domain==="firebase.com"&&Si(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Si("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||SD();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MD(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new vt(n.pathString)}},XM=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=zM(t.substring(u,h)));const f=YM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class om{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return He(this._path)?null:Xb(this._path)}get ref(){return new Zo(this._repo,this._path)}get _queryIdentifier(){const e=Wy(this._queryParams),n=jg(e);return n==="{}"?"default":n}get _queryObject(){return Wy(this._queryParams)}isEqual(e){if(e=zt(e),!(e instanceof om))return!1;const n=this._repo===e._repo,r=Jb(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ak(this._path)}}class Zo extends om{constructor(e,n){super(e,n,new Gg,!1)}get parent(){const e=qb(this._path);return e===null?null:new Zo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}fM(Zo);dM(Zo);/**
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
 */const QM="FIREBASE_DATABASE_EMULATOR_HOST",fp={};let qM=!1;function JM(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Si("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=iE(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[QM]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=iE(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new tp(tp.OWNER):new kD(t.name,t.options,e);OM("Invalid Firebase Database URL",o),He(o.path)||Si("Database URL must point to the root of a Firebase Database (not including a child path).");const h=eL(a,t,u,new DD(t.name,n));return new tL(h,t)}function ZM(t,e){const n=fp[e];(!n||n[t.key]!==t)&&Si(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HM(t),delete n[t.key]}function eL(t,e,n,r){let s=fp[e.name];s||(s={},fp[e.name]=s);let i=s[t.toURLString()];return i&&Si("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new FM(t,qM,n,r),s[t.toURLString()]=i,i}class tL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zo(this._repo,at())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Si("Cannot call "+e+" on a deleted database.")}}/**
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
 */function nL(t){ED(Ws),xr(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return JM(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Vn(Cy,Ay,t),Vn(Cy,Ay,"esm2017")}Yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nL();var rL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,am=am||{},xe=rL||self;function ju(){}function Hh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sL(t){return Object.prototype.hasOwnProperty.call(t,Yf)&&t[Yf]||(t[Yf]=++iL)}var Yf="closure_uid_"+(1e9*Math.random()>>>0),iL=0;function oL(t,e,n){return t.call.apply(t.bind,arguments)}function aL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function mn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mn=oL:mn=aL,mn.apply(null,arguments)}function Nc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ks(){this.s=this.s,this.o=this.o}var lL=0;Ks.prototype.s=!1;Ks.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),lL!=0)&&sL(this)};Ks.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const FT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function lm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Hh(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function vn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vn.prototype.h=function(){this.defaultPrevented=!0};var cL=function(){if(!xe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{xe.addEventListener("test",ju,e),xe.removeEventListener("test",ju,e)}catch{}return t}();function Bu(t){return/^[\s\xa0]*$/.test(t)}var aE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xf(t,e){return t<e?-1:t>e?1:0}function Wh(){var t=xe.navigator;return t&&(t=t.userAgent)?t:""}function vr(t){return Wh().indexOf(t)!=-1}function cm(t){return cm[" "](t),t}cm[" "]=ju;function UT(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var uL=vr("Opera"),Po=vr("Trident")||vr("MSIE"),$T=vr("Edge"),dp=$T||Po,jT=vr("Gecko")&&!(Wh().toLowerCase().indexOf("webkit")!=-1&&!vr("Edge"))&&!(vr("Trident")||vr("MSIE"))&&!vr("Edge"),hL=Wh().toLowerCase().indexOf("webkit")!=-1&&!vr("Edge");function BT(){var t=xe.document;return t?t.documentMode:void 0}var Vu;e:{var Qf="",qf=function(){var t=Wh();if(jT)return/rv:([^\);]+)(\)|;)/.exec(t);if($T)return/Edge\/([\d\.]+)/.exec(t);if(Po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hL)return/WebKit\/(\S+)/.exec(t);if(uL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qf&&(Qf=qf?qf[1]:""),Po){var Jf=BT();if(Jf!=null&&Jf>parseFloat(Qf)){Vu=String(Jf);break e}}Vu=Qf}var fL={};function dL(){return UT(fL,9,function(){let t=0;const e=aE(String(Vu)).split("."),n=aE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Xf(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Xf(s[2].length==0,i[2].length==0)||Xf(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var pp;if(xe.document&&Po){var lE=BT();pp=lE||parseInt(Vu,10)||void 0}else pp=void 0;var pL=pp;function vl(t,e){if(vn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jT){e:{try{cm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vl.$.h.call(this)}}Xt(vl,vn);var gL={2:"touch",3:"pen",4:"mouse"};vl.prototype.h=function(){vl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kl="closure_listenable_"+(1e6*Math.random()|0),mL=0;function vL(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++mL,this.fa=this.ia=!1}function Kh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function um(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VT(t){const e={};for(const n in t)e[n]=t[n];return e}const cE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function HT(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<cE.length;i++)n=cE[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gh(t){this.src=t,this.g={},this.h=0}Gh.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mp(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vL(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function gp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=FT(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Kh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mp(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var hm="closure_lm_"+(1e6*Math.random()|0),Zf={};function WT(t,e,n,r,s){if(r&&r.once)return GT(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)WT(t,e[i],n,r,s);return null}return n=pm(n),t&&t[Kl]?t.O(e,n,Wl(r)?!!r.capture:!!r,s):KT(t,e,n,!1,r,s)}function KT(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Wl(s)?!!s.capture:!!s,a=dm(t);if(a||(t[hm]=a=new Gh(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cL||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(YT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yL(){function t(n){return e.call(t.src,t.listener,n)}const e=EL;return t}function GT(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)GT(t,e[i],n,r,s);return null}return n=pm(n),t&&t[Kl]?t.P(e,n,Wl(r)?!!r.capture:!!r,s):KT(t,e,n,!0,r,s)}function zT(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)zT(t,e[i],n,r,s);else r=Wl(r)?!!r.capture:!!r,n=pm(n),t&&t[Kl]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mp(i,n,r,s),-1<n&&(Kh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=dm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mp(e,n,r,s)),(n=-1<t?e[t]:null)&&fm(n))}function fm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Kl])gp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(YT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dm(e))?(gp(n,t),n.h==0&&(n.src=null,e[hm]=null)):Kh(t)}}}function YT(t){return t in Zf?Zf[t]:Zf[t]="on"+t}function EL(t,e){if(t.fa)t=!0;else{e=new vl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&fm(t),t=n.call(r,e)}return t}function dm(t){return t=t[hm],t instanceof Gh?t:null}var ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function pm(t){return typeof t=="function"?t:(t[ed]||(t[ed]=function(e){return t.handleEvent(e)}),t[ed])}function Yt(){Ks.call(this),this.i=new Gh(this),this.S=this,this.J=null}Xt(Yt,Ks);Yt.prototype[Kl]=!0;Yt.prototype.removeEventListener=function(t,e,n,r){zT(this,t,e,n,r)};function nn(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new vn(e,t);else if(e instanceof vn)e.target=e.target||t;else{var s=e;e=new vn(r,t),HT(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Pc(o,r,!0,e)&&s}if(o=e.g=t,s=Pc(o,r,!0,e)&&s,s=Pc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Pc(o,r,!1,e)&&s}Yt.prototype.N=function(){if(Yt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kh(n[r]);delete t.g[e],t.h--}}this.J=null};Yt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Yt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gp(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var gm=xe.JSON.stringify;function wL(){var t=qT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _L{constructor(){this.h=this.g=null}add(e,n){const r=XT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var XT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bL,t=>t.reset());class bL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TL(t){xe.setTimeout(()=>{throw t},0)}function QT(t,e){vp||SL(),yp||(vp(),yp=!0),qT.add(t,e)}var vp;function SL(){var t=xe.Promise.resolve(void 0);vp=function(){t.then(IL)}}var yp=!1,qT=new _L;function IL(){for(var t;t=wL();){try{t.h.call(t.g)}catch(n){TL(n)}var e=XT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yp=!1}function zh(t,e){Yt.call(this),this.h=t||1,this.g=e||xe,this.j=mn(this.qb,this),this.l=Date.now()}Xt(zh,Yt);te=zh.prototype;te.ga=!1;te.T=null;te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nn(this,"tick"),this.ga&&(mm(this),this.start()))}};te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}te.N=function(){zh.$.N.call(this),mm(this),delete this.g};function vm(t,e,n){if(typeof t=="function")n&&(t=mn(t,n));else if(t&&typeof t.handleEvent=="function")t=mn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:xe.setTimeout(t,e||0)}function JT(t){t.g=vm(()=>{t.g=null,t.i&&(t.i=!1,JT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CL extends Ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:JT(this)}N(){super.N(),this.g&&(xe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yl(t){Ks.call(this),this.h=t,this.g={}}Xt(yl,Ks);var uE=[];function ZT(t,e,n,r){Array.isArray(n)||(n&&(uE[0]=n.toString()),n=uE);for(var s=0;s<n.length;s++){var i=WT(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function eS(t){um(t.g,function(e,n){this.g.hasOwnProperty(n)&&fm(e)},t),t.g={}}yl.prototype.N=function(){yl.$.N.call(this),eS(this)};yl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yh(){this.g=!0}Yh.prototype.Ea=function(){this.g=!1};function AL(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function RL(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function oo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OL(t,n)+(r?" "+r:"")})}function xL(t,e){t.info(function(){return"TIMEOUT: "+e})}Yh.prototype.info=function(){};function OL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return gm(n)}catch{return e}}var Bi={},hE=null;function Xh(){return hE=hE||new Yt}Bi.Ta="serverreachability";function tS(t){vn.call(this,Bi.Ta,t)}Xt(tS,vn);function El(t){const e=Xh();nn(e,new tS(e))}Bi.STAT_EVENT="statevent";function nS(t,e){vn.call(this,Bi.STAT_EVENT,t),this.stat=e}Xt(nS,vn);function Sn(t){const e=Xh();nn(e,new nS(e,t))}Bi.Ua="timingevent";function rS(t,e){vn.call(this,Bi.Ua,t),this.size=e}Xt(rS,vn);function Gl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return xe.setTimeout(function(){t()},e)}var Qh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ym(){}ym.prototype.h=null;function fE(t){return t.h||(t.h=t.i())}function iS(){}var zl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Em(){vn.call(this,"d")}Xt(Em,vn);function wm(){vn.call(this,"c")}Xt(wm,vn);var Ep;function qh(){}Xt(qh,ym);qh.prototype.g=function(){return new XMLHttpRequest};qh.prototype.i=function(){return{}};Ep=new qh;function Yl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new yl(this),this.P=NL,t=dp?125:void 0,this.V=new zh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new oS}function oS(){this.i=null,this.g="",this.h=!1}var NL=45e3,wp={},Hu={};te=Yl.prototype;te.setTimeout=function(t){this.P=t};function _p(t,e,n){t.L=1,t.v=Zh(Zr(e)),t.s=n,t.S=!0,aS(t,null)}function aS(t,e){t.G=Date.now(),Xl(t),t.A=Zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),gS(n.i,"t",r),t.C=0,n=t.l.I,t.h=new oS,t.g=LS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new CL(mn(t.Pa,t,t.g),t.O)),ZT(t.U,t.g,"readystatechange",t.nb),e=t.I?VT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),El(),AL(t.j,t.u,t.A,t.m,t.W,t.s)}te.nb=function(t){t=t.target;const e=this.M;e&&Kr(t)==3?e.l():this.Pa(t)};te.Pa=function(t){try{if(t==this.g)e:{const u=Kr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||dp||this.g&&(this.h.h||this.g.ja()||mE(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?El(3):El(2)),Jh(this);var n=this.g.da();this.aa=n;t:if(lS(this)){var r=mE(this.g);t="";var s=r.length,i=Kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Ha(this);var o="";break t}this.h.i=new xe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RL(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bu(a)){var c=a;break t}}c=null}if(n=c)oo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bp(this,n);else{this.i=!1,this.o=3,Sn(12),ii(this),Ha(this);break e}}this.S?(cS(this,u,o),dp&&this.i&&u==3&&(ZT(this.U,this.V,"tick",this.mb),this.V.start())):(oo(this.j,this.m,o,null),bp(this,o)),u==4&&ii(this),this.i&&!this.J&&(u==4?PS(this.l,this):(this.i=!1,Xl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Sn(12)):(this.o=0,Sn(13)),ii(this),Ha(this)}}}catch{}finally{}};function lS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cS(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=PL(t,n),s==Hu){e==4&&(t.o=4,Sn(14),r=!1),oo(t.j,t.m,null,"[Incomplete Response]");break}else if(s==wp){t.o=4,Sn(15),oo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else oo(t.j,t.m,s,null),bp(t,s);lS(t)&&s!=Hu&&s!=wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Sn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Am(e),e.L=!0,Sn(11))):(oo(t.j,t.m,n,"[Invalid Chunked Response]"),ii(t),Ha(t))}te.mb=function(){if(this.g){var t=Kr(this.g),e=this.g.ja();this.C<e.length&&(Jh(this),cS(this,t,e),this.i&&t!=4&&Xl(this))}};function PL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Hu:(n=Number(e.substring(n,r)),isNaN(n)?wp:(r+=1,r+n>e.length?Hu:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.J=!0,ii(this)};function Xl(t){t.Y=Date.now()+t.P,uS(t,t.P)}function uS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gl(mn(t.lb,t),e)}function Jh(t){t.B&&(xe.clearTimeout(t.B),t.B=null)}te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xL(this.j,this.A),this.L!=2&&(El(),Sn(17)),ii(this),this.o=2,Ha(this)):uS(this,this.Y-t)};function Ha(t){t.l.H==0||t.J||PS(t.l,t)}function ii(t){Jh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,mm(t.V),eS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function bp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Tp(n.h,t))){if(!t.K&&Tp(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gu(n),nf(n);else break e;Cm(n),Sn(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Gl(mn(n.ib,n),6e3));if(1>=yS(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else oi(n,11)}else if((t.K||n.g==t)&&Gu(n),!Bu(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_m(i,i.h),i.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,_t(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=MS(r,r.I?r.oa:null,r.Y),o.K){ES(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Jh(a),Xl(a)),r.g=o}else OS(r);0<n.i.length&&rf(n)}else c[0]!="stop"&&c[0]!="close"||oi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?oi(n,7):Im(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}El(4)}catch{}}function DL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Hh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kL(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Hh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kL(t),r=DL(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var fS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ML(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pi){this.h=e!==void 0?e:t.h,Wu(this,t.j),this.s=t.s,this.g=t.g,Ku(this,t.m),this.l=t.l,e=t.i;var n=new wl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dE(this,n),this.o=t.o}else t&&(n=String(t).match(fS))?(this.h=!!e,Wu(this,n[1]||"",!0),this.s=Sa(n[2]||""),this.g=Sa(n[3]||"",!0),Ku(this,n[4]),this.l=Sa(n[5]||"",!0),dE(this,n[6]||"",!0),this.o=Sa(n[7]||"")):(this.h=!!e,this.i=new wl(null,this.h))}pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ia(e,pE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ia(e,pE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ia(n,n.charAt(0)=="/"?UL:FL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ia(n,jL)),t.join("")};function Zr(t){return new pi(t)}function Wu(t,e,n){t.j=n?Sa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dE(t,e,n){e instanceof wl?(t.i=e,BL(t.i,t.h)):(n||(e=Ia(e,$L)),t.i=new wl(e,t.h))}function _t(t,e,n){t.i.set(e,n)}function Zh(t){return _t(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pE=/[#\/\?@]/g,FL=/[#\?:]/g,UL=/[#\?]/g,$L=/[#\?@]/g,jL=/#/g;function wl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gs(t){t.g||(t.g=new Map,t.h=0,t.i&&ML(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=wl.prototype;te.add=function(t,e){Gs(this),this.i=null,t=ea(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dS(t,e){Gs(t),e=ea(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pS(t,e){return Gs(t),e=ea(t,e),t.g.has(e)}te.forEach=function(t,e){Gs(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};te.sa=function(){Gs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};te.Z=function(t){Gs(this);let e=[];if(typeof t=="string")pS(this,t)&&(e=e.concat(this.g.get(ea(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return Gs(this),this.i=null,t=ea(this,t),pS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gS(t,e,n){dS(t,e),0<n.length&&(t.i=null,t.g.set(ea(t,e),lm(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ea(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BL(t,e){e&&!t.j&&(Gs(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dS(this,r),gS(this,s,n))},t)),t.j=e}var VL=class{constructor(t,e){this.h=t,this.g=e}};function mS(t){this.l=t||HL,xe.PerformanceNavigationTiming?(t=xe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(xe.g&&xe.g.Ka&&xe.g.Ka()&&xe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HL=10;function vS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yS(t){return t.h?1:t.g?t.g.size:0}function Tp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _m(t,e){t.g?t.g.add(e):t.h=e}function ES(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mS.prototype.cancel=function(){if(this.i=wS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return lm(t.i)}function bm(){}bm.prototype.stringify=function(t){return xe.JSON.stringify(t,void 0)};bm.prototype.parse=function(t){return xe.JSON.parse(t,void 0)};function WL(){this.g=new bm}function KL(t,e,n){const r=n||"";try{hS(t,function(s,i){let o=s;Wl(s)&&(o=gm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function GL(t,e){const n=new Yh;if(xe.Image){const r=new Image;r.onload=Nc(Dc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Nc(Dc,n,r,"TestLoadImage: error",!1,e),r.onabort=Nc(Dc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Nc(Dc,n,r,"TestLoadImage: timeout",!1,e),xe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Dc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ql(t){this.l=t.fc||null,this.j=t.ob||!1}Xt(Ql,ym);Ql.prototype.g=function(){return new ef(this.l,this.j)};Ql.prototype.i=function(t){return function(){return t}}({});function ef(t,e){Yt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xt(ef,Yt);var Tm=0;te=ef.prototype;te.open=function(t,e){if(this.readyState!=Tm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_l(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||xe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ql(this)),this.readyState=Tm};te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_l(this)),this.g&&(this.readyState=3,_l(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof xe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_S(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _S(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ql(this):_l(this),this.readyState==3&&_S(this)}};te.Za=function(t){this.g&&(this.response=this.responseText=t,ql(this))};te.Ya=function(t){this.g&&(this.response=t,ql(this))};te.ka=function(){this.g&&ql(this)};function ql(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_l(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _l(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ef.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zL=xe.JSON.parse;function kt(t){Yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bS,this.L=this.M=!1}Xt(kt,Yt);var bS="",YL=/^https?$/i,XL=["POST","PUT"];te=kt.prototype;te.Oa=function(t){this.M=t};te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ep.g(),this.C=this.u?fE(this.u):fE(Ep),this.g.onreadystatechange=mn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){gE(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=xe.FormData&&t instanceof xe.FormData,!(0<=FT(XL,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{IS(this),0<this.B&&((this.L=QL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mn(this.ua,this)):this.A=vm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){gE(this,i)}};function QL(t){return Po&&dL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.ua=function(){typeof am<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))};function gE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,TS(t),tf(t)}function TS(t){t.F||(t.F=!0,nn(t,"complete"),nn(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),tf(this))};te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tf(this,!0)),kt.$.N.call(this)};te.La=function(){this.s||(this.G||this.v||this.l?SS(this):this.kb())};te.kb=function(){SS(this)};function SS(t){if(t.h&&typeof am<"u"&&(!t.C[1]||Kr(t)!=4||t.da()!=2)){if(t.v&&Kr(t)==4)vm(t.La,0,t);else if(nn(t,"readystatechange"),Kr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(fS)[1]||null;if(!s&&xe.self&&xe.self.location){var i=xe.self.location.protocol;s=i.substr(0,i.length-1)}r=!YL.test(s?s.toLowerCase():"")}n=r}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<Kr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",TS(t)}}finally{tf(t)}}}}function tf(t,e){if(t.g){IS(t);const n=t.g,r=t.C[0]?ju:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=r}catch{}}}function IS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(xe.clearTimeout(t.A),t.A=null)}function Kr(t){return t.g?t.g.readyState:0}te.da=function(){try{return 2<Kr(this)?this.g.status:-1}catch{return-1}};te.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zL(e)}};function mE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ia=function(){return this.m};te.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function CS(t){let e="";return um(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Sm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=CS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_t(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function AS(t){this.Ga=0,this.i=[],this.j=new Yh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new mS(t&&t.concurrentRequestLimit),this.Ja=new WL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}te=AS.prototype;te.qa=8;te.H=1;function Im(t){if(RS(t),t.H==3){var e=t.W++,n=Zr(t.G);_t(n,"SID",t.J),_t(n,"RID",e),_t(n,"TYPE","terminate"),Jl(t,n),e=new Yl(t,t.j,e,void 0),e.L=2,e.v=Zh(Zr(n)),n=!1,xe.navigator&&xe.navigator.sendBeacon&&(n=xe.navigator.sendBeacon(e.v.toString(),"")),!n&&xe.Image&&(new Image().src=e.v,n=!0),n||(e.g=LS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Xl(e)}kS(t)}function nf(t){t.g&&(Am(t),t.g.cancel(),t.g=null)}function RS(t){nf(t),t.u&&(xe.clearTimeout(t.u),t.u=null),Gu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&xe.clearTimeout(t.m),t.m=null)}function rf(t){vS(t.h)||t.m||(t.m=!0,QT(t.Na,t),t.C=0)}function qL(t,e){return yS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Gl(mn(t.Na,t,e),DS(t,t.C)),t.C++,!0)}te.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Yl(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=VT(i),HT(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xS(this,s,e),n=Zr(this.G),_t(n,"RID",t),_t(n,"CVER",22),this.F&&_t(n,"X-HTTP-Session-Id",this.F),Jl(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(CS(i)))+"&"+e:this.o&&Sm(n,this.o,i)),_m(this.h,s),this.bb&&_t(n,"TYPE","init"),this.P?(_t(n,"$req",e),_t(n,"SID","null"),s.ba=!0,_p(s,n,null)):_p(s,n,e),this.H=2}}else this.H==3&&(t?vE(this,t):this.i.length==0||vS(this.h)||vE(this))};function vE(t,e){var n;e?n=e.m:n=t.W++;const r=Zr(t.G);_t(r,"SID",t.J),_t(r,"RID",n),_t(r,"AID",t.V),Jl(t,r),t.o&&t.s&&Sm(r,t.o,t.s),n=new Yl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=xS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_m(t.h,n),_p(n,r,e)}function Jl(t,e){t.ma&&um(t.ma,function(n,r){_t(e,r,n)}),t.l&&hS({},function(n,r){_t(e,r,n)})}function xS(t,e,n){n=Math.min(t.i.length,n);var r=t.l?mn(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{KL(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function OS(t){t.g||t.u||(t.ba=1,QT(t.Ma,t),t.A=0)}function Cm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Gl(mn(t.Ma,t),DS(t,t.A)),t.A++,!0)}te.Ma=function(){if(this.u=null,NS(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Gl(mn(this.jb,this),t)}};te.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Sn(10),nf(this),NS(this))};function Am(t){t.B!=null&&(xe.clearTimeout(t.B),t.B=null)}function NS(t){t.g=new Yl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Zr(t.wa);_t(e,"RID","rpc"),_t(e,"SID",t.J),_t(e,"CI",t.M?"0":"1"),_t(e,"AID",t.V),_t(e,"TYPE","xmlhttp"),Jl(t,e),t.o&&t.s&&Sm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Zh(Zr(e)),n.s=null,n.S=!0,aS(n,t)}te.ib=function(){this.v!=null&&(this.v=null,nf(this),Cm(this),Sn(19))};function Gu(t){t.v!=null&&(xe.clearTimeout(t.v),t.v=null)}function PS(t,e){var n=null;if(t.g==e){Gu(t),Am(t),t.g=null;var r=2}else if(Tp(t.h,e))n=e.F,ES(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Xh(),nn(r,new rS(r,n)),rf(t)}else OS(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&qL(t,e)||r==2&&Cm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:oi(t,5);break;case 4:oi(t,10);break;case 3:oi(t,6);break;default:oi(t,2)}}}function DS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function oi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=mn(t.pb,t);n||(n=new pi("//www.google.com/images/cleardot.gif"),xe.location&&xe.location.protocol=="http"||Wu(n,"https"),Zh(n)),GL(n.toString(),r)}else Sn(2);t.H=0,t.l&&t.l.za(e),kS(t),RS(t)}te.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Sn(2)):(this.j.info("Failed to ping google.com"),Sn(1))};function kS(t){if(t.H=0,t.pa=[],t.l){const e=wS(t.h);(e.length!=0||t.i.length!=0)&&(oE(t.pa,e),oE(t.pa,t.i),t.h.i.length=0,lm(t.i),t.i.length=0),t.l.ya()}}function MS(t,e,n){var r=n instanceof pi?Zr(n):new pi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ku(r,r.m);else{var s=xe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new pi(null,void 0);r&&Wu(i,r),e&&(i.g=e),s&&Ku(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&_t(r,n,e),_t(r,"VER",t.qa),Jl(t,r),r}function LS(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kt(new Ql({ob:!0})):new kt(t.va),e.Oa(t.I),e}function FS(){}te=FS.prototype;te.Ba=function(){};te.Aa=function(){};te.za=function(){};te.ya=function(){};te.Va=function(){};function zu(){if(Po&&!(10<=Number(pL)))throw Error("Environmental error: no available transport.")}zu.prototype.g=function(t,e){return new Wn(t,e)};function Wn(t,e){Yt.call(this),this.g=new AS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ta(this)}Xt(Wn,Yt);Wn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Sn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=MS(t,null,t.Y),rf(t)};Wn.prototype.close=function(){Im(this.g)};Wn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gm(t),t=n);e.i.push(new VL(e.fb++,t)),e.H==3&&rf(e)};Wn.prototype.N=function(){this.g.l=null,delete this.j,Im(this.g),delete this.g,Wn.$.N.call(this)};function US(t){Em.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xt(US,Em);function $S(){wm.call(this),this.status=1}Xt($S,wm);function ta(t){this.g=t}Xt(ta,FS);ta.prototype.Ba=function(){nn(this.g,"a")};ta.prototype.Aa=function(t){nn(this.g,new US(t))};ta.prototype.za=function(t){nn(this.g,new $S)};ta.prototype.ya=function(){nn(this.g,"b")};function JL(){this.blockSize=-1}function fr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xt(fr,JL);fr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function td(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}fr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)td(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){td(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){td(this,r),s=0;break}}this.h=s,this.i+=e};fr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function it(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var ZL={};function Rm(t){return-128<=t&&128>t?UT(ZL,t,function(e){return new it([e|0],0>e?-1:0)}):new it([t|0],0>t?-1:0)}function wr(t){if(isNaN(t)||!isFinite(t))return Eo;if(0>t)return Zt(wr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Sp;return new it(e,0)}function jS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Zt(jS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wr(Math.pow(e,8)),r=Eo,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=wr(Math.pow(e,i)),r=r.R(i).add(wr(o))):(r=r.R(n),r=r.add(wr(o)))}return r}var Sp=4294967296,Eo=Rm(0),Ip=Rm(1),yE=Rm(16777216);te=it.prototype;te.ea=function(){if(Yn(this))return-Zt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Sp+r)*e,e*=Sp}return t};te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Gr(this))return"0";if(Yn(this))return"-"+Zt(this).toString(t);for(var e=wr(Math.pow(t,6)),n=this,r="";;){var s=Xu(n,e).g;n=Yu(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Gr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Gr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yn(t){return t.h==-1}te.X=function(t){return t=Yu(this,t),Yn(t)?-1:Gr(t)?0:1};function Zt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new it(n,~t.h).add(Ip)}te.abs=function(){return Yn(this)?Zt(this):this};te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new it(n,n[n.length-1]&-2147483648?-1:0)};function Yu(t,e){return t.add(Zt(e))}te.R=function(t){if(Gr(this)||Gr(t))return Eo;if(Yn(this))return Yn(t)?Zt(this).R(Zt(t)):Zt(Zt(this).R(t));if(Yn(t))return Zt(this.R(Zt(t)));if(0>this.X(yE)&&0>t.X(yE))return wr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,kc(n,2*r+2*s),n[2*r+2*s+1]+=i*l,kc(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,kc(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,kc(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new it(n,0)};function kc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function pa(t,e){this.g=t,this.h=e}function Xu(t,e){if(Gr(e))throw Error("division by zero");if(Gr(t))return new pa(Eo,Eo);if(Yn(t))return e=Xu(Zt(t),e),new pa(Zt(e.g),Zt(e.h));if(Yn(e))return e=Xu(t,Zt(e)),new pa(Zt(e.g),e.h);if(30<t.g.length){if(Yn(t)||Yn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ip,r=e;0>=r.X(t);)n=EE(n),r=EE(r);var s=Ki(n,1),i=Ki(r,1);for(r=Ki(r,2),n=Ki(n,2);!Gr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ki(r,1),n=Ki(n,1)}return e=Yu(t,s.R(e)),new pa(s,e)}for(s=Eo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=wr(n),o=i.R(e);Yn(o)||0<o.X(t);)n-=r,i=wr(n),o=i.R(e);Gr(i)&&(i=Ip),s=s.add(i),t=Yu(t,o)}return new pa(s,t)}te.gb=function(t){return Xu(this,t).h};te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new it(n,this.h&t.h)};te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new it(n,this.h|t.h)};te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new it(n,this.h^t.h)};function EE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new it(n,t.h)}function Ki(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new it(s,t.h)}zu.prototype.createWebChannel=zu.prototype.g;Wn.prototype.send=Wn.prototype.u;Wn.prototype.open=Wn.prototype.m;Wn.prototype.close=Wn.prototype.close;Qh.NO_ERROR=0;Qh.TIMEOUT=8;Qh.HTTP_ERROR=6;sS.COMPLETE="complete";iS.EventType=zl;zl.OPEN="a";zl.CLOSE="b";zl.ERROR="c";zl.MESSAGE="d";Yt.prototype.listen=Yt.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;fr.prototype.digest=fr.prototype.l;fr.prototype.reset=fr.prototype.reset;fr.prototype.update=fr.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=wr;it.fromString=jS;var e2=function(){return new zu},t2=function(){return Xh()},nd=Qh,n2=sS,r2=Bi,wE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},s2=Ql,Mc=iS,i2=kt,o2=fr,wo=it;const _E="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new kl("@firebase/firestore");function bE(){return Ri.logLevel}function fe(t,...e){if(Ri.logLevel<=Je.DEBUG){const n=e.map(xm);Ri.debug(`Firestore (${na}): ${t}`,...n)}}function es(t,...e){if(Ri.logLevel<=Je.ERROR){const n=e.map(xm);Ri.error(`Firestore (${na}): ${t}`,...n)}}function Do(t,...e){if(Ri.logLevel<=Je.WARN){const n=e.map(xm);Ri.warn(`Firestore (${na}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw es(e),new Error(e)}function mt(t,e){t||Ae()}function Me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(on.UNAUTHENTICATED))}shutdown(){}}class l2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c2{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string"),new BS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string"),new on(e)}}class u2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=on.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class h2{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new u2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(mt(typeof n.token=="string"),this.T=n.token,new f2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function p2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=p2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function et(t,e){return t<e?-1:t>e?1:0}function ko(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new me(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Vt(0,0))}static max(){return new Ne(new Vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(),r===void 0?r=e.length-n:r>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class bt extends bl{construct(e,n,r){return new bt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const g2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fn extends bl{construct(e,n,r){return new fn(e,n,r)}static isValidIdentifier(e){return g2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fn(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new me(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new me(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new me(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new me(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fn(n)}static emptyPath(){return new fn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(bt.fromString(e))}static fromName(e){return new ve(bt.fromString(e).popFirst(5))}static empty(){return new ve(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new bt(e.slice()))}}function m2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ne.fromTimestamp(r===1e9?new Vt(n+1,0):new Vt(n,r));return new Us(s,ve.empty(),e)}function v2(t){return new Us(t.readTime,t.key,-1)}class Us{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Us(Ne.min(),ve.empty(),-1)}static max(){return new Us(Ne.max(),ve.empty(),-1)}}function y2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(t.documentKey,e.documentKey),n!==0?n:et(t.largestBatchId,e.largestBatchId))}/**
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
 */const E2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==E2)throw t;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ec(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Om{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Om.ct=-1;function sf(t){return t==null}function Qu(t){return t===0&&1/t==-1/0}function _2(t){return typeof t=="number"&&Number.isInteger(t)&&!Qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ra(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.comparator=e,this.root=n||Jt.EMPTY}insert(e,n){return new Rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new Rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Jt.RED,this.left=s??Jt.EMPTY,this.right=i??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Jt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new SE(this.data.getIterator())}getIteratorFrom(e){return new SE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yn(this.comparator);return n.data=e,n}}class SE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class or{constructor(e){this.fields=e,e.sort(fn.comparator)}static empty(){return new or([])}unionWith(e){let n=new yn(fn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new or(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class WS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new WS("Invalid base64 string: "+s):s}}(e);return new wn(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new wn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wn.EMPTY_BYTE_STRING=new wn("");const b2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $s(t){if(mt(!!t),typeof t=="string"){let e=0;const n=b2.exec(t);if(mt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ut(t.seconds),nanos:Ut(t.nanos)}}function Ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?wn.fromBase64String(t):wn.fromUint8Array(t)}/**
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
 */function Nm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pm(t){const e=t.mapValue.fields.__previous_value__;return Nm(e)?Pm(e):e}function Tl(t){const e=$s(t.mapValue.fields.__local_write_time__.timestampValue);return new Vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nm(t)?4:S2(t)?9007199254740991:10:Ae()}function Nr(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tl(t).isEqual(Tl(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=$s(r.timestampValue),o=$s(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return xi(r.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ut(r.geoPointValue.latitude)===Ut(s.geoPointValue.latitude)&&Ut(r.geoPointValue.longitude)===Ut(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ut(r.integerValue)===Ut(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ut(r.doubleValue),o=Ut(s.doubleValue);return i===o?Qu(i)===Qu(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],Nr);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(TE(i)!==TE(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nr(i[a],o[a])))return!1;return!0}(t,e);default:return Ae()}}function Il(t,e){return(t.values||[]).find(n=>Nr(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ut(s.integerValue||s.doubleValue),a=Ut(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return IE(t.timestampValue,e.timestampValue);case 4:return IE(Tl(t),Tl(e));case 5:return et(t.stringValue,e.stringValue);case 6:return function(s,i){const o=xi(s),a=xi(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=et(o[l],a[l]);if(c!==0)return c}return et(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=et(Ut(s.latitude),Ut(i.latitude));return o!==0?o:et(Ut(s.longitude),Ut(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Mo(o[l],a[l]);if(c)return c}return et(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Fc.mapValue&&i===Fc.mapValue)return 0;if(s===Fc.mapValue)return 1;if(i===Fc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=et(a[u],c[u]);if(h!==0)return h;const f=Mo(o[a[u]],l[c[u]]);if(f!==0)return f}return et(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function IE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return et(t,e);const n=$s(t),r=$s(e),s=et(n.seconds,r.seconds);return s!==0?s:et(n.nanos,r.nanos)}function Lo(t){return Cp(t)}function Cp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=$s(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ve.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Cp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Cp(r.fields[a])}`;return i+"}"}(t.mapValue):Ae();var e,n}function Ap(t){return!!t&&"integerValue"in t}function Dm(t){return!!t&&"arrayValue"in t}function CE(t){return!!t&&"nullValue"in t}function AE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tu(t){return!!t&&"mapValue"in t}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ra(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function S2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=fn.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Wa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];tu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ra(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xn(Wa(this.value))}}function KS(t){const e=[];return ra(t.fields,(n,r)=>{const s=new fn([n]);if(tu(r)){const i=KS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new or(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new un(e,0,Ne.min(),Ne.min(),Ne.min(),Xn.empty(),0)}static newFoundDocument(e,n,r,s){return new un(e,1,n,Ne.min(),r,s,0)}static newNoDocument(e,n){return new un(e,2,n,Ne.min(),Ne.min(),Xn.empty(),0)}static newUnknownDocument(e,n){return new un(e,3,n,Ne.min(),Ne.min(),Xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qu{constructor(e,n){this.position=e,this.inclusive=n}}function RE(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ve.comparator(ve.fromName(o.referenceValue),n.key):r=Mo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function I2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class GS{}class Bt extends GS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new A2(e,n,r):n==="array-contains"?new O2(e,r):n==="in"?new N2(e,r):n==="not-in"?new P2(e,r):n==="array-contains-any"?new D2(e,r):new Bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new R2(e,r):new x2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pr extends GS{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pr(e,n)}matches(e){return zS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zS(t){return t.op==="and"}function YS(t){return C2(t)&&zS(t)}function C2(t){for(const e of t.filters)if(e instanceof Pr)return!1;return!0}function Rp(t){if(t instanceof Bt)return t.field.canonicalString()+t.op.toString()+Lo(t.value);if(YS(t))return t.filters.map(e=>Rp(e)).join(",");{const e=t.filters.map(n=>Rp(n)).join(",");return`${t.op}(${e})`}}function XS(t,e){return t instanceof Bt?function(n,r){return r instanceof Bt&&n.op===r.op&&n.field.isEqual(r.field)&&Nr(n.value,r.value)}(t,e):t instanceof Pr?function(n,r){return r instanceof Pr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&XS(i,r.filters[o]),!0):!1}(t,e):void Ae()}function QS(t){return t instanceof Bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Lo(e.value)}`}(t):t instanceof Pr?function(e){return e.op.toString()+" {"+e.getFilters().map(QS).join(" ,")+"}"}(t):"Filter"}class A2 extends Bt{constructor(e,n,r){super(e,n,r),this.key=ve.fromName(r.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class R2 extends Bt{constructor(e,n){super(e,"in",n),this.keys=qS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class x2 extends Bt{constructor(e,n){super(e,"not-in",n),this.keys=qS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ve.fromName(r.referenceValue))}class O2 extends Bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dm(n)&&Il(n.arrayValue,this.value)}}class N2 extends Bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Il(this.value.arrayValue,n)}}class P2 extends Bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Il(this.value.arrayValue,n)}}class D2 extends Bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Il(this.value.arrayValue,r))}}/**
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
 */class k2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function OE(t,e=null,n=[],r=[],s=null,i=null,o=null){return new k2(t,e,n,r,s,i,o)}function km(t){const e=Me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Lo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Lo(r)).join(",")),e.ft=n}return e.ft}function Mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!I2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!XS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xE(t.startAt,e.startAt)&&xE(t.endAt,e.endAt)}function xp(t){return ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function M2(t,e,n,r,s,i,o,a){return new of(t,e,n,r,s,i,o,a)}function Lm(t){return new of(t)}function NE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function F2(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function U2(t){return t.collectionGroup!==null}function _o(t){const e=Me(t);if(e.dt===null){e.dt=[];const n=F2(e),r=L2(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ka(n)),e.dt.push(new Ka(fn.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ka(fn.keyField(),i))}}}return e.dt}function ts(t){const e=Me(t);if(!e._t)if(e.limitType==="F")e._t=OE(e.path,e.collectionGroup,_o(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of _o(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ka(i.field,o))}const r=e.endAt?new qu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new qu(e.startAt.position,e.startAt.inclusive):null;e._t=OE(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Op(t,e,n){return new of(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function af(t,e){return Mm(ts(t),ts(e))&&t.limitType===e.limitType}function JS(t){return`${km(ts(t))}|lt:${t.limitType}`}function Np(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>QS(r)).join(", ")}]`),sf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Lo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Lo(r)).join(",")),`Target(${n})`}(ts(t))}; limitType=${t.limitType})`}function lf(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ve.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of _o(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=RE(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,_o(n),r)||n.endAt&&!function(s,i,o){const a=RE(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,_o(n),r))}(t,e)}function $2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ZS(t){return(e,n)=>{let r=!1;for(const s of _o(t)){const i=j2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function j2(t,e,n){const r=t.field.isKeyField()?ve.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Mo(a,l):Ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ra(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return HS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Rt(ve.comparator);function ns(){return B2}const eI=new Rt(ve.comparator);function Ca(...t){let e=eI;for(const n of t)e=e.insert(n.key,n);return e}function tI(t){let e=eI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ai(){return Ga()}function nI(){return Ga()}function Ga(){return new sa(t=>t.toString(),(t,e)=>t.isEqual(e))}const V2=new Rt(ve.comparator),H2=new yn(ve.comparator);function Be(...t){let e=H2;for(const n of t)e=e.add(n);return e}const W2=new yn(et);function K2(){return W2}/**
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
 */function rI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function sI(t){return{integerValue:""+t}}function G2(t,e){return _2(e)?sI(e):rI(t,e)}/**
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
 */class cf{constructor(){this._=void 0}}function z2(t,e,n){return t instanceof Ju?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Nm(s)&&(s=Pm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Cl?oI(t,e):t instanceof Al?aI(t,e):function(r,s){const i=iI(r,s),o=PE(i)+PE(r.wt);return Ap(i)&&Ap(r.wt)?sI(o):rI(r.serializer,o)}(t,e)}function Y2(t,e,n){return t instanceof Cl?oI(t,e):t instanceof Al?aI(t,e):n}function iI(t,e){return t instanceof Zu?Ap(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ju extends cf{}class Cl extends cf{constructor(e){super(),this.elements=e}}function oI(t,e){const n=lI(e);for(const r of t.elements)n.some(s=>Nr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Al extends cf{constructor(e){super(),this.elements=e}}function aI(t,e){let n=lI(e);for(const r of t.elements)n=n.filter(s=>!Nr(s,r));return{arrayValue:{values:n}}}class Zu extends cf{constructor(e,n){super(),this.serializer=e,this.wt=n}}function PE(t){return Ut(t.integerValue||t.doubleValue)}function lI(t){return Dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function X2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Cl&&r instanceof Cl||n instanceof Al&&r instanceof Al?ko(n.elements,r.elements,Nr):n instanceof Zu&&r instanceof Zu?Nr(n.wt,r.wt):n instanceof Ju&&r instanceof Ju}(t.transform,e.transform)}class Q2{constructor(e,n){this.version=e,this.transformResults=n}}class Sr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sr}static exists(e){return new Sr(void 0,e)}static updateTime(e){return new Sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uf{}function cI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,Sr.none()):new tc(t.key,t.data,Sr.none());{const n=t.data,r=Xn.empty();let s=new yn(fn.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vi(t.key,r,new or(s.toArray()),Sr.none())}}function q2(t,e,n){t instanceof tc?function(r,s,i){const o=r.value.clone(),a=kE(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(r,s,i){if(!nu(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=kE(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(uI(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function za(t,e,n,r){return t instanceof tc?function(s,i,o,a){if(!nu(s.precondition,i))return o;const l=s.value.clone(),c=ME(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vi?function(s,i,o,a){if(!nu(s.precondition,i))return o;const l=ME(s.fieldTransforms,a,i),c=i.data;return c.setAll(uI(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return nu(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function J2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=iI(r.transform,s||null);i!=null&&(n===null&&(n=Xn.empty()),n.set(r.field,i))}return n||null}function DE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ko(n,r,(s,i)=>X2(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tc extends uf{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vi extends uf{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kE(t,e,n){const r=new Map;mt(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Y2(o,a,n[s]))}return r}function ME(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,z2(i,o,e))}return r}class Fm extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z2 extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&q2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=cI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Be())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(n,r)=>DE(n,r))&&ko(this.baseMutations,e.baseMutations,(n,r)=>DE(n,r))}}class Um{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){mt(e.mutations.length===r.length);let s=V2;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Um(e,n,r,s)}}/**
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
 */class tF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,Ge;function rF(t){switch(t){default:return Ae();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function hI(t){if(t===void 0)return es("GRPC error has no .code"),W.UNKNOWN;switch(t){case Lt.OK:return W.OK;case Lt.CANCELLED:return W.CANCELLED;case Lt.UNKNOWN:return W.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return W.INTERNAL;case Lt.UNAVAILABLE:return W.UNAVAILABLE;case Lt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Lt.NOT_FOUND:return W.NOT_FOUND;case Lt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Lt.ABORTED:return W.ABORTED;case Lt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Lt.DATA_LOSS:return W.DATA_LOSS;default:return Ae()}}(Ge=Lt||(Lt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class $m{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Uc}static getOrCreateInstance(){return Uc===null&&(Uc=new $m),Uc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Uc=null;/**
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
 */function sF(){return new TextEncoder}/**
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
 */const iF=new wo([4294967295,4294967295],0);function LE(t){const e=sF().encode(t),n=new o2;return n.update(e),new Uint8Array(n.digest())}function FE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wo([n,r],0),new wo([s,i],0)]}class jm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Aa(`Invalid padding: ${n}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=wo.fromNumber(this.yt)}Tt(e,n,r){let s=e.add(n.multiply(wo.fromNumber(r)));return s.compare(iF)===1&&(s=new wo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=LE(e),[r,s]=FE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);if(!this.Et(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=LE(e),[r,s]=FE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hf(Ne.min(),s,new Rt(et),ns(),Be())}}class nc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new nc(r,n,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=s}}class fI{constructor(e,n){this.targetId=e,this.bt=n}}class dI{constructor(e,n,r=wn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class UE{constructor(){this.Vt=0,this.St=jE(),this.Dt=wn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Be(),n=Be(),r=Be();return this.St.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Ae()}}),new nc(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=jE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class oF{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=ns(),this.jt=$E(),this.zt=new Rt(et)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,s)=>{this.Zt(s)&&n(s)})}ee(e){var n;const r=e.targetId,s=e.bt.count,i=this.ne(r);if(i){const o=i.target;if(xp(o))if(s===0){const a=new ve(o.path);this.Jt(r,a,un.newNoDocument(a,Ne.min()))}else mt(s===1);else{const a=this.se(r);if(a!==s){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=$m.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:s}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=xi(i).toUint8Array()}catch(u){if(u instanceof WS)return Do("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new jm(l,o,a)}catch(u){return Do(u instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:s!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),s++)}),s}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&xp(a.target)){const l=new ve(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,un.newNoDocument(l,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let r=Be();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const s=new hf(e,n,this.zt,this.Qt,r);return this.Qt=ns(),this.jt=$E(),this.zt=new Rt(et),s}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const s=this.Xt(e);this.ce(e,n)?s.Ft(n,1):s.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new UE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new yn(et),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new UE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function $E(){return new Rt(ve.comparator)}function jE(){return new Rt(ve.comparator)}const aF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cF=(()=>({and:"AND",or:"OR"}))();class uF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pp(t,e){return t.useProto3Json||sf(e)?e:{value:e}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hF(t,e){return eh(t,e.toTimestamp())}function Ir(t){return mt(!!t),Ne.fromTimestamp(function(e){const n=$s(e);return new Vt(n.seconds,n.nanos)}(t))}function Bm(t,e){return function(n){return new bt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gI(t){const e=bt.fromString(t);return mt(EI(e)),e}function Dp(t,e){return Bm(t.databaseId,e.path)}function rd(t,e){const n=gI(e);if(n.get(1)!==t.databaseId.projectId)throw new me(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new me(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ve(mI(n))}function kp(t,e){return Bm(t.databaseId,e)}function fF(t){const e=gI(t);return e.length===4?bt.emptyPath():mI(e)}function Mp(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mI(t){return mt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function BE(t,e,n){return{name:Dp(t,e),fields:n.value.mapValue.fields}}function dF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(mt(c===void 0||typeof c=="string"),wn.fromBase64String(c||"")):(mt(c===void 0||c instanceof Uint8Array),wn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?W.UNKNOWN:hI(l.code);return new me(c,l.message||"")}(o);n=new dI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rd(t,r.document.name),i=Ir(r.document.updateTime),o=r.document.createTime?Ir(r.document.createTime):Ne.min(),a=new Xn({mapValue:{fields:r.document.fields}}),l=un.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ru(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rd(t,r.document),i=r.readTime?Ir(r.readTime):Ne.min(),o=un.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rd(t,r.document),i=r.removedTargetIds||[];n=new ru([],i,s,null)}else{if(!("filter"in e))return Ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nF(s,i),a=r.targetId;n=new fI(a,o)}}return n}function pF(t,e){let n;if(e instanceof tc)n={update:BE(t,e.key,e.value)};else if(e instanceof Fm)n={delete:Dp(t,e.key)};else if(e instanceof Vi)n={update:BE(t,e.key,e.data),updateMask:TF(e.fieldMask)};else{if(!(e instanceof Z2))return Ae();n={verify:Dp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ju)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Cl)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Al)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zu)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw Ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:hF(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ae()}(t,e.precondition)),n}function gF(t,e){return t&&t.length>0?(mt(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ir(r.updateTime):Ir(s);return i.isEqual(Ne.min())&&(i=Ir(s)),new Q2(i,r.transformResults||[])}(n,e))):[]}function mF(t,e){return{documents:[kp(t,e.path)]}}function vF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return yI(Pr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ji(u.field),direction:wF(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Pp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yF(t){let e=fF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){mt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=vI(u);return h instanceof Pr&&YS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ka(Zi(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new qu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new qu(f,h)}(n.endAt)),M2(e,s,o,i,a,"F",l,c)}function EF(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zi(e.unaryFilter.field);return Bt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Zi(e.unaryFilter.field);return Bt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zi(e.unaryFilter.field);return Bt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zi(e.unaryFilter.field);return Bt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(t):t.fieldFilter!==void 0?function(e){return Bt.create(Zi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pr.create(e.compositeFilter.filters.map(n=>vI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Ae()}}(e.compositeFilter.op))}(t):Ae()}function wF(t){return aF[t]}function _F(t){return lF[t]}function bF(t){return cF[t]}function Ji(t){return{fieldPath:t.canonicalString()}}function Zi(t){return fn.fromServerFormat(t.fieldPath)}function yI(t){return t instanceof Bt?function(e){if(e.op==="=="){if(AE(e.value))return{unaryFilter:{field:Ji(e.field),op:"IS_NAN"}};if(CE(e.value))return{unaryFilter:{field:Ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(AE(e.value))return{unaryFilter:{field:Ji(e.field),op:"IS_NOT_NAN"}};if(CE(e.value))return{unaryFilter:{field:Ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ji(e.field),op:_F(e.op),value:e.value}}}(t):t instanceof Pr?function(e){const n=e.getFilters().map(r=>yI(r));return n.length===1?n[0]:{compositeFilter:{op:bF(e.op),filters:n}}}(t):Ae()}function TF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,s,i=Ne.min(),o=Ne.min(),a=wn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new bs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(e){this.le=e}}function IF(t){const e=yF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Op(e,e.limit,"L"):e}/**
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
 */class CF{constructor(){this.sn=new AF}addToCollectionParentIndex(e,n){return this.sn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Us.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Us.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class AF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new yn(bt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new yn(bt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Fo(0)}static kn(){return new Fo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(){this.changes=new sa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,un.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&za(r.mutation,s,or.empty(),Vt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Be()){const s=ai();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ca();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ns();const o=Ga(),a=Ga();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Vi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),za(u.mutation,c,u.mutation.getFieldMask(),Vt.now())):o.set(c.key,or.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new xF(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ga();let s=new Rt((o,a)=>o-a),i=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||or.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Be()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=nI();u.forEach(f=>{if(!i.has(f)){const d=cI(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ve.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):U2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(ai());let a=-1,l=i;return o.next(c=>z.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?z.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Be())).next(u=>({batchId:a,changes:tI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(r=>{let s=Ca();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ca();return this.indexManager.getCollectionParents(e,s).next(o=>z.forEach(o,a=>{const l=function(c,u){return new of(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,un.newInvalidDocument(c)))});let o=Ca();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&za(c.mutation,l,or.empty(),Vt.now()),lf(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class NF{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return z.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Ir(r.createTime)}),z.resolve()}getNamedQuery(e,n){return z.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:IF(r.bundledQuery),readTime:Ir(r.readTime)}}(n)),z.resolve()}}/**
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
 */class PF{constructor(){this.overlays=new Rt(ve.comparator),this.hs=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ai();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.de(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=ai(),i=n.length+1,o=new ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Rt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=ai(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ai(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return z.resolve(a)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tF(n,r));let i=this.hs.get(n);i===void 0&&(i=Be(),this.hs.set(n,i)),this.hs.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.ls=new yn(Wt.fs),this.ds=new yn(Wt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Wt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Wt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new ve(new bt([])),r=new Wt(n,e),s=new Wt(n,e+1),i=[];return this.ds.forEachInRange([r,s],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new ve(new bt([])),r=new Wt(n,e),s=new Wt(n,e+1);let i=Be();return this.ds.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Wt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Wt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return ve.comparator(e.key,n.key)||et(e.Es,n.Es)}static _s(e,n){return et(e.Es,n.Es)||ve.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new yn(Wt.fs)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eF(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Wt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.vs(o.Es);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yn(et);return n.forEach(s=>{const i=new Wt(s,0),o=new Wt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.Es)})}),z.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ve.isDocumentKey(i)||(i=i.child(""));const o=new Wt(new ve(i),0);let a=new yn(et);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),z.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){mt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return z.forEach(n.mutations,s=>{const i=new Wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Wt(n,0),s=this.Rs.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e){this.Ss=e,this.docs=new Rt(ve.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():un.newInvalidDocument(n))}getEntries(e,n){let r=ns();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():un.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ns();const o=n.path,a=new ve(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||y2(v2(u),r)<=0||(s.has(u.key)||lf(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Ae()}Ds(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MF(this)}getSize(e){return z.resolve(this.size)}}class MF extends RF{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e){this.persistence=e,this.Cs=new sa(n=>km(n),Mm),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Vm,this.targetCount=0,this.ks=Fo.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),z.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Fo(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.$n(n),z.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Om(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new LF(this),this.indexManager=new CF,this.remoteDocumentCache=function(r){return new kF(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new SF(n),this.Ls=new NF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new DF(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){fe("MemoryPersistence","Starting transaction:",e);const s=new UF(this.Os.next());return this.referenceDelegate.qs(),r(s).next(i=>this.referenceDelegate.Us(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ks(e,n){return z.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class UF extends w2{constructor(e){super(),this.currentSequenceNumber=e}}class Hm{constructor(e){this.persistence=e,this.Gs=new Vm,this.Qs=null}static js(e){return new Hm(e)}get zs(){if(this.Qs)return this.Qs;throw Ae()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),z.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.zs,r=>{const s=ve.fromPath(r);return this.Ws(e,s).next(i=>{i||n.removeEntry(s,Ne.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return z.or([()=>z.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=Be(),s=Be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Wm(e,n.fromCache,r,s)}}/**
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
 */class $F{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Ki(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(NE(n))return z.resolve(null);let r=ts(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Op(n,null,"F"),r=ts(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Be(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Op(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,s){return NE(n)||s.isEqual(Ne.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(bE()<=Je.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Np(n)),this.zi(e,o,n,m2(s,-1)))})}Qi(e,n){let r=new yn(ZS(e));return n.forEach((s,i)=>{lf(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return bE()<=Je.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Np(n)),this.qi.getDocumentsMatchingQuery(e,n,Us.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jF{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Rt(et),this.Ji=new sa(i=>km(i),Mm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OF(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function BF(t,e,n,r){return new jF(t,e,n,r)}async function wI(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Be();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function VF(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=z.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);mt(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Be();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _I(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function HF(t,e){const n=Me(t),r=e.snapshotVersion;let s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(wn.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(i,d))});let l=ns(),c=Be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(WF(i,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(Ne.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return z.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Hi=s,i))}function WF(t,e,n){let r=Be(),s=Be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ns();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):fe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:s}})}function KF(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GF(t,e){const n=Me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Fs.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Fs.allocateTargetId(r).next(o=>(s=new bs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Hi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Lp(t,e,n){const r=Me(t),s=r.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ec(o))throw o;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(s.target)}function VE(t,e,n){const r=Me(t);let s=Ne.min(),i=Be();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Me(a),h=u.Ji.get(c);return h!==void 0?z.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(r,o,ts(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?s:Ne.min(),n?i:Be())).next(a=>(zF(r,$2(e),a),{documents:a,sr:i})))}function zF(t,e,n){let r=t.Yi.get(e)||Ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Yi.set(e,r)}class HE{constructor(){this.activeTargetIds=K2()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YF{constructor(){this.Wr=new HE,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new HE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XF{Jr(e){}shutdown(){}}/**
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
 */class WE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $c=null;function sd(){return $c===null?$c=268435456+Math.round(2147483648*Math.random()):$c++,"0x"+$c.toString(16)}/**
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
 */const QF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class JF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,i){const o=sd(),a=this.Io(e,n);fe("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,s,i),this.Eo(e,a,l,r).then(c=>(fe("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Do("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,s,i,o){return this.po(e,n,r,s,i)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+na,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Io(e,n){const r=QF[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const i=sd();return new Promise((o,a)=>{const l=new i2;l.setWithCredentials(!0),l.listenOnce(n2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nd.NO_ERROR:const u=l.getResponseJson();fe(rn,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case nd.TIMEOUT:fe(rn,`RPC '${e}' ${i} timed out`),a(new me(W.DEADLINE_EXCEEDED,"Request time out"));break;case nd.HTTP_ERROR:const h=l.getStatus();if(fe(rn,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(d.status);a(new me(p,d.message))}else a(new me(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new me(W.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{fe(rn,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);fe(rn,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=sd(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=e2(),a=t2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new s2({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");fe(rn,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new qF({io:m=>{f?fe(rn,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(fe(rn,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),fe(rn,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},ro:()=>u.close()}),p=(m,y,v)=>{m.listen(y,g=>{try{v(g)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,Mc.EventType.OPEN,()=>{f||fe(rn,`RPC '${e}' stream ${s} transport opened.`)}),p(u,Mc.EventType.CLOSE,()=>{f||(f=!0,fe(rn,`RPC '${e}' stream ${s} transport closed`),d.fo())}),p(u,Mc.EventType.ERROR,m=>{f||(f=!0,Do(rn,`RPC '${e}' stream ${s} transport errored:`,m),d.fo(new me(W.UNAVAILABLE,"The operation could not be completed")))}),p(u,Mc.EventType.MESSAGE,m=>{var y;if(!f){const v=m.data[0];mt(!!v);const g=v,E=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(E){fe(rn,`RPC '${e}' stream ${s} received error:`,E);const _=E.status;let T=function(x){const I=Lt[x];if(I!==void 0)return hI(I)}(_),S=E.message;T===void 0&&(T=W.INTERNAL,S="Unknown error status: "+_+" with message "+E.message),f=!0,d.fo(new me(T,S)),u.close()}else fe(rn,`RPC '${e}' stream ${s} received:`,v),d._o(v)}}),p(a,r2.STAT_EVENT,m=>{m.stat===wE.PROXY?fe(rn,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===wE.NOPROXY&&fe(rn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function id(){return typeof document<"u"?document:null}/**
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
 */function ff(t){return new uF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Mo=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new bI(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new me(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZF extends TI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=dF(this.serializer,e),r=function(s){if(!("targetChange"in s))return Ne.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Ne.min():i.readTime?Ir(i.readTime):Ne.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Mp(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=xp(a)?{documents:mF(s,a)}:{query:vF(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=pI(s,i.resumeToken);const l=Pp(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(Ne.min())>0){o.readTime=eh(s,i.snapshotVersion.toTimestamp());const l=Pp(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=EF(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Mp(this.serializer),n.removeTarget=e,this.zo(n)}}class eU extends TI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(mt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=gF(e.writeResults,e.commitTime),r=Ir(e.commitTime);return this.listener.uu(r,n)}return mt(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Mp(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pF(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new me(W.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.po(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new me(W.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new me(W.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class nU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(es(n),this.wu=!1):fe("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Hi(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Me(a);l.Au.add(4),await rc(l),l.Pu.set("Unknown"),l.Au.delete(4),await df(l)}(this))})}),this.Pu=new nU(r,s)}}async function df(t){if(Hi(t))for(const e of t.Ru)await e(!0)}async function rc(t){for(const e of t.Ru)await e(!1)}function SI(t,e){const n=Me(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),zm(n)?Gm(n):ia(n).Uo()&&Km(n,e))}function II(t,e){const n=Me(t),r=ia(n);n.Eu.delete(e),r.Uo()&&CI(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Hi(n)&&n.Pu.set("Unknown"))}function Km(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).nu(e)}function CI(t,e){t.bu.Lt(e),ia(t).su(e)}function Gm(t){t.bu=new oF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.Pu.mu()}function zm(t){return Hi(t)&&!ia(t).qo()&&t.Eu.size>0}function Hi(t){return Me(t).Au.size===0}function AI(t){t.bu=void 0}async function sU(t){t.Eu.forEach((e,n)=>{Km(t,e)})}async function iU(t,e){AI(t),zm(t)?(t.Pu.pu(e),Gm(t)):t.Pu.set("Unknown")}async function oU(t,e,n){if(t.Pu.set("Online"),e instanceof dI&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof ru?t.bu.Wt(e):e instanceof fI?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ne.min()))try{const r=await _I(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.bu.ue(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Eu.get(l);c&&s.Eu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Eu.get(a);if(!c)return;s.Eu.set(a,c.withResumeToken(wn.EMPTY_BYTE_STRING,c.snapshotVersion)),CI(s,a);const u=new bs(c.target,a,l,c.sequenceNumber);Km(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){fe("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!ec(e))throw e;t.Au.add(1),await rc(t),t.Pu.set("Offline"),n||(n=()=>_I(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await df(t)})}function RI(t,e){return e().catch(n=>th(t,n,e))}async function pf(t){const e=Me(t),n=js(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;aU(e);)try{const s=await KF(e.localStore,r);if(s===null){e.Tu.length===0&&n.Qo();break}r=s.batchId,lU(e,s)}catch(s){await th(e,s)}xI(e)&&OI(e)}function aU(t){return Hi(t)&&t.Tu.length<10}function lU(t,e){t.Tu.push(e);const n=js(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function xI(t){return Hi(t)&&!js(t).qo()&&t.Tu.length>0}function OI(t){js(t).start()}async function cU(t){js(t).au()}async function uU(t){const e=js(t);for(const n of t.Tu)e.ou(n.mutations)}async function hU(t,e,n){const r=t.Tu.shift(),s=Um.from(r,e,n);await RI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pf(t)}async function fU(t,e){e&&js(t).ru&&await async function(n,r){if(s=r.code,rF(s)&&s!==W.ABORTED){const i=n.Tu.shift();js(n).Go(),await RI(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await pf(n)}var s}(t,e),xI(t)&&OI(t)}async function KE(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const r=Hi(n);n.Au.add(3),await rc(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await df(n)}async function dU(t,e){const n=Me(t);e?(n.Au.delete(2),await df(n)):e||(n.Au.add(2),await rc(n),n.Pu.set("Unknown"))}function ia(t){return t.Vu||(t.Vu=function(e,n,r){const s=Me(e);return s.lu(),new ZF(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:sU.bind(null,t),co:iU.bind(null,t),eu:oU.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),zm(t)?Gm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),AI(t))})),t.Vu}function js(t){return t.Su||(t.Su=function(e,n,r){const s=Me(e);return s.lu(),new eU(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:cU.bind(null,t),co:fU.bind(null,t),cu:uU.bind(null,t),uu:hU.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await pf(t)):(await t.Su.stop(),t.Tu.length>0&&(fe("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ym(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(t,e){if(es("AsyncQueue",`${e}: ${t}`),ec(t))return new me(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ve.comparator(n.key,r.key):(n,r)=>ve.comparator(n.key,r.key),this.keyedMap=Ca(),this.sortedSet=new Rt(this.comparator)}static emptySet(e){return new bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.Du=new Rt(ve.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Ae():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Uo{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,bo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(){this.xu=void 0,this.listeners=[]}}class gU{constructor(){this.queries=new sa(e=>JS(e),af),this.onlineState="Unknown",this.Nu=new Set}}async function NI(t,e){const n=Me(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pU),s)try{i.xu=await n.onListen(r)}catch(o){const a=Xm(o,`Initialization of query '${Np(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Qm(n)}async function PI(t,e){const n=Me(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function mU(t,e){const n=Me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(s)&&(r=!0);o.xu=s}}r&&Qm(n)}function vU(t,e,n){const r=Me(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Qm(t){t.Nu.forEach(e=>{e.next()})}class DI{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.key=e}}class MI{constructor(e){this.key=e}}class yU{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Be(),this.mutatedKeys=Be(),this.Zu=ZS(e),this.tc=new bo(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new GE,s=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=lf(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.ic(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.Zu(d,l)>0||c&&this.Zu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return d(h)-d(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,i.length!==0||l?{snapshot:new Uo(this.query,e.tc,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new GE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Be(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new MI(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new kI(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Be();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Uo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class EU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wU{constructor(e){this.key=e,this.lc=!1}}class _U{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new sa(a=>JS(a),af),this._c=new Map,this.wc=new Set,this.mc=new Rt(ve.comparator),this.gc=new Map,this.yc=new Vm,this.Ic={},this.Tc=new Map,this.Ec=Fo.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function bU(t,e){const n=PU(t);let r,s;const i=n.dc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.hc();else{const o=await GF(n.localStore,ts(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await TU(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&SI(n.remoteStore,o)}return s}async function TU(t,e,n,r,s){t.Rc=(h,f,d)=>async function(p,m,y,v){let g=m.view.nc(y);g.ji&&(g=await VE(p.localStore,m.query,!1).then(({documents:T})=>m.view.nc(T,g)));const E=v&&v.targetChanges.get(m.targetId),_=m.view.applyChanges(g,p.isPrimaryClient,E);return YE(p,m.targetId,_.uc),_.snapshot}(t,h,f,d);const i=await VE(t.localStore,e,!0),o=new yU(e,i.sr),a=o.nc(i.documents),l=nc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);YE(t,n,c.uc);const u=new EU(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function SU(t,e){const n=Me(t),r=n.dc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!af(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),II(n.remoteStore,r.targetId),Fp(n,r.targetId)}).catch(Zl)):(Fp(n,r.targetId),await Lp(n.localStore,r.targetId,!0))}async function IU(t,e,n){const r=DU(t);try{const s=await function(i,o){const a=Me(i),l=Vt.now(),c=o.reduce((f,d)=>f.add(d.key),Be());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ns(),p=Be();return a.Xi.getEntries(f,c).next(m=>{d=m,d.forEach((y,v)=>{v.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const y=[];for(const v of o){const g=J2(v,u.get(v.key).overlayedDocument);g!=null&&y.push(new Vi(v.key,g,KS(g.value.mapValue),Sr.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:tI(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.Ic[i.currentUser.toKey()];l||(l=new Rt(et)),l=l.insert(o,a),i.Ic[i.currentUser.toKey()]=l}(r,s.batchId,n),await sc(r,s.changes),await pf(r.remoteStore)}catch(s){const i=Xm(s,"Failed to persist write");n.reject(i)}}async function LI(t,e){const n=Me(t);try{const r=await HF(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.gc.get(i);o&&(mt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?mt(o.lc):s.removedDocuments.size>0&&(mt(o.lc),o.lc=!1))}),await sc(n,r,e)}catch(r){await Zl(r)}}function zE(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Me(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&Qm(a)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CU(t,e,n){const r=Me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.gc.get(e),i=s&&s.key;if(i){let o=new Rt(ve.comparator);o=o.insert(i,un.newNoDocument(i,Ne.min()));const a=Be().add(i),l=new hf(Ne.min(),new Map,new Rt(et),o,a);await LI(r,l),r.mc=r.mc.remove(i),r.gc.delete(e),qm(r)}else await Lp(r.localStore,e,!1).then(()=>Fp(r,e,n)).catch(Zl)}async function AU(t,e){const n=Me(t),r=e.batch.batchId;try{const s=await VF(n.localStore,e);UI(n,r,null),FI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sc(n,s)}catch(s){await Zl(s)}}async function RU(t,e,n){const r=Me(t);try{const s=await function(i,o){const a=Me(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(mt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);UI(r,e,n),FI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sc(r,s)}catch(s){await Zl(s)}}function FI(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function UI(t,e,n){const r=Me(t);let s=r.Ic[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ic[r.currentUser.toKey()]=s}}function Fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||$I(t,r)})}function $I(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(II(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),qm(t))}function YE(t,e,n){for(const r of n)r instanceof kI?(t.yc.addReference(r.key,e),xU(t,r)):r instanceof MI?(fe("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||$I(t,r.key)):Ae()}function xU(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(fe("SyncEngine","New document in limbo: "+n),t.wc.add(r),qm(t))}function qm(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new ve(bt.fromString(e)),r=t.Ec.next();t.gc.set(r,new wU(n)),t.mc=t.mc.insert(n,r),SI(t.remoteStore,new bs(ts(Lm(n.path)),r,"TargetPurposeLimboResolution",Om.ct))}}async function sc(t,e,n){const r=Me(t),s=[],i=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Wm.Bi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fc.eu(s),await async function(a,l){const c=Me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>z.forEach(l,h=>z.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>z.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ec(u))throw u;fe("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Hi=c.Hi.insert(h,p)}}}(r.localStore,i))}async function OU(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const r=await wI(n.localStore,e);n.currentUser=e,function(s,i){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new me(W.CANCELLED,i))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sc(n,r.tr)}}function NU(t,e){const n=Me(t),r=n.gc.get(e);if(r&&r.lc)return Be().add(r.key);{let s=Be();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.dc.get(o);s=s.unionWith(a.view.ec)}return s}}function PU(t){const e=Me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CU.bind(null,e),e.fc.eu=mU.bind(null,e.eventManager),e.fc.vc=vU.bind(null,e.eventManager),e}function DU(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RU.bind(null,e),e}class XE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ff(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BF(this.persistence,new $F,e.initialUser,this.serializer)}createPersistence(e){return new FF(Hm.js,this.serializer)}createSharedClientState(e){return new YF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OU.bind(null,this.syncEngine),await dU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gU}createDatastore(e){const n=ff(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new JF(s));var s;return function(i,o,a,l){return new tU(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>zE(this.syncEngine,a,0),o=WE.D()?new WE:new XF,new rU(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new _U(r,s,i,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Me(e);fe("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await rc(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class jI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):es("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=on.UNAUTHENTICATED,this.clientId=VS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{fe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(fe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new me(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function od(t,e){t.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function QE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FU(t);fe("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>KE(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>KE(e.remoteStore,i)),t._onlineComponents=e}function LU(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function FU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LU(n))throw n;Do("Error using user provided cache. Falling back to memory cache: "+n),await od(t,new XE)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await od(t,new XE);return t._offlineComponents}async function BI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await QE(t,t._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await QE(t,new kU))),t._onlineComponents}function UU(t){return BI(t).then(e=>e.syncEngine)}async function VI(t){const e=await BI(t),n=e.eventManager;return n.onListen=bU.bind(null,e.syncEngine),n.onUnlisten=SU.bind(null,e.syncEngine),n}function $U(t,e,n={}){const r=new Xr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new jI({next:h=>{i.enqueueAndForget(()=>PI(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new me(W.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new me(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new DI(Lm(o.path),c,{includeMetadataChanges:!0,Uu:!0});return NI(s,u)}(await VI(t),t.asyncQueue,e,n,r)),r.promise}function jU(t,e,n={}){const r=new Xr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new jI({next:h=>{i.enqueueAndForget(()=>PI(s,u)),h.fromCache&&a.source==="server"?l.reject(new me(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new DI(o,c,{includeMetadataChanges:!0,Uu:!0});return NI(s,u)}(await VI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const qE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e,n){if(!n)throw new me(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BU(t,e,n,r){if(e===!0&&r===!0)throw new me(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function JE(t){if(!ve.isDocumentKey(t))throw new me(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ZE(t){if(ve.isDocumentKey(t))throw new me(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function Bs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jm(t);throw new me(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class e0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new me(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new me(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new me(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new a2;switch(n.type){case"firstParty":return new h2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new me(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qE.get(e);n&&(fe("ComponentProvider","Removing Datastore"),qE.delete(e),n.terminate())}(this),Promise.resolve()}}function VU(t,e,n,r={}){var s;const i=(t=Bs(t,gf))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Do("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=on.MOCK_USER;else{o=gx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new me(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new on(l)}t._authCredentials=new l2(new BS(o,a))}}/**
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
 */class Pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class mf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mf(this.firestore,e,this._query)}}class Os extends mf{constructor(e,n,r){super(e,n,Lm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new ve(e))}withConverter(e){return new Os(this.firestore,e,this._path)}}function HU(t,e,...n){if(t=zt(t),HI("collection","path",e),t instanceof gf){const r=bt.fromString(e,...n);return ZE(r),new Os(t,null,r)}{if(!(t instanceof Pn||t instanceof Os))throw new me(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(bt.fromString(e,...n));return ZE(r),new Os(t.firestore,null,r)}}function jc(t,e,...n){if(t=zt(t),arguments.length===1&&(e=VS.A()),HI("doc","path",e),t instanceof gf){const r=bt.fromString(e,...n);return JE(r),new Pn(t,null,new ve(r))}{if(!(t instanceof Pn||t instanceof Os))throw new me(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(bt.fromString(e,...n));return JE(r),new Pn(t.firestore,t instanceof Os?t.converter:null,new ve(r))}}/**
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
 */class WU{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new bI(this,"async_queue_retry"),this.Yc=()=>{const n=id();n&&fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=id();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Xr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!ec(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw es("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=Ym.createAndSchedule(this,e,n,r,i=>this.ea(i));return this.jc.push(s),s}Xc(){this.zc&&Ae()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class ic extends gf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new WU,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WI(this),this._firestoreClient.terminate()}}function KU(t,e){const n=typeof t=="object"?t:Og(),r=typeof t=="string"?t:e||"(default)",s=xg(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dx("firestore");i&&VU(s,...i)}return s}function Zm(t){return t._firestoreClient||WI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WI(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new T2(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new MU(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class $o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $o(wn.fromBase64String(e))}catch(n){throw new me(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $o(wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ev{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class KI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU=/^__.*__$/;class zU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new tc(e,this.data,n,this.fieldTransforms)}}function GI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class nv{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new nv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return nh(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(GI(this.ua)&&GU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class YU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ff(e)}ga(e,n,r,s=!1){return new nv({ua:e,methodName:n,ma:r,path:fn.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XU(t){const e=t._freezeSettings(),n=ff(t._databaseId);return new YU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QU(t,e,n,r,s,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,s);QI("Data must be an object, but it was:",o,r);const a=YI(r,o);let l,c;if(i.merge)l=new or(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=qU(e,h,n);if(!o.contains(f))throw new me(W.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ZU(u,f)||u.push(f)}l=new or(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new zU(new Xn(a),l,c)}function zI(t,e){if(XI(t=zt(t)))return QI("Unsupported field value:",e,t),YI(t,e);if(t instanceof KI)return function(n,r){if(!GI(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=zI(o,r.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=zt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return G2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Vt.fromDate(n);return{timestampValue:eh(r.serializer,s)}}if(n instanceof Vt){const s=new Vt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eh(r.serializer,s)}}if(n instanceof tv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $o)return{bytesValue:pI(r.serializer,n._byteString)};if(n instanceof Pn){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Jm(n)}`)}(t,e)}function YI(t,e){const n={};return HS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ra(t,(r,s)=>{const i=zI(s,e.aa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function XI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Vt||t instanceof tv||t instanceof $o||t instanceof Pn||t instanceof KI)}function QI(t,e,n){if(!XI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Jm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function qU(t,e,n){if((e=zt(e))instanceof ev)return e._internalPath;if(typeof e=="string")return qI(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const JU=new RegExp("[~\\*/\\[\\]]");function qI(t,e,n){if(e.search(JU)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ev(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new me(W.INVALID_ARGUMENT,a+t+l)}function ZU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class JI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ZI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e4 extends JI{data(){return super.data()}}function ZI(t,e){return typeof e=="string"?qI(t,e):e instanceof ev?e._internalPath:e._delegate._internalPath}/**
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
 */function t4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new me(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class n4{convertValue(e,n="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ra(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new tv(Ut(e.latitude),Ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tl(e));default:return null}}convertTimestamp(e){const n=$s(e);return new Vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=bt.fromString(e);mt(EI(r));const s=new Sl(r.get(1),r.get(3)),i=new ve(r.popFirst(5));return s.isEqual(n)||es(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function r4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eC extends JI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ZI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class su extends eC{data(e={}){return super.data(e)}}class s4{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ra(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new su(this._firestore,this._userDataWriter,r.key,r,new Ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new su(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ra(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new su(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ra(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:i4(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function i4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
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
 */function tC(t){t=Bs(t,Pn);const e=Bs(t.firestore,ic);return $U(Zm(e),t._key).then(n=>l4(e,t,n))}class nC extends n4{constructor(e){super(),this.firestore=e}convertBytes(e){return new $o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pn(this.firestore,null,n)}}function o4(t){t=Bs(t,mf);const e=Bs(t.firestore,ic),n=Zm(e),r=new nC(e);return t4(t._query),jU(n,t._query).then(s=>new s4(e,r,t,s))}function t0(t,e,n){t=Bs(t,Pn);const r=Bs(t.firestore,ic),s=r4(t.converter,e,n);return rC(r,[QU(XU(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Sr.none())])}function a4(t){return rC(Bs(t.firestore,ic),[new Fm(t._key,Sr.none())])}function rC(t,e){return function(n,r){const s=new Xr;return n.asyncQueue.enqueueAndForget(async()=>IU(await UU(n),r,s)),s.promise}(Zm(t),e)}function l4(t,e,n){const r=n.docs.get(e._key),s=new nC(t);return new eC(t,s,e._key,r,new Ra(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){na=n})(Ws),xr(new ur("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new ic(new c2(n.getProvider("auth-internal")),new d2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new me(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Vn(_E,"3.11.0",t),Vn(_E,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="firebasestorage.googleapis.com",c4="storageBucket",u4=2*60*1e3,h4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Lr{constructor(e,n,r=0){super(ad(e),`Firebase Storage: ${n} (${ad(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ad(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dr||(Dr={}));function ad(t){return"storage/"+t}function f4(){const t="An unknown error occurred, please check the error payload for server response.";return new Fr(Dr.UNKNOWN,t)}function d4(){return new Fr(Dr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function p4(){return new Fr(Dr.CANCELED,"User canceled the upload/download.")}function g4(t){return new Fr(Dr.INVALID_URL,"Invalid URL '"+t+"'.")}function m4(t){return new Fr(Dr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function n0(t){return new Fr(Dr.INVALID_ARGUMENT,t)}function iC(){return new Fr(Dr.APP_DELETED,"The Firebase app was deleted.")}function v4(t){return new Fr(Dr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ar.makeFromUrl(e,n)}catch{return new ar(e,"")}if(r.path==="")return r;throw m4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(_){_.path_=decodeURIComponent(_.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},m=n===sC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${s}/${y}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let _=0;_<E.length;_++){const T=E[_],S=T.regex.exec(e);if(S){const x=S[T.indices.bucket];let I=S[T.indices.path];I||(I=""),r=new ar(x,I),T.postModify(r);break}}if(r==null)throw g4(e);return r}}class y4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(d,l())},y)}function f(){i&&clearTimeout(i)}function d(y,...v){if(c){f();return}if(y){f(),u.call(null,y,...v);return}if(l()||o){f(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function m(y){p||(p=!0,f(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function w4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){return t!==void 0}function r0(t,e,n,r){if(r<e)throw n0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw n0(`Invalid value for '${t}'. Expected ${n} or less.`)}function b4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rh||(rh={}));/**
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
 */function T4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===rh.NO_ERROR,l=i.getStatus();if(!a||T4(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===rh.ABORT;r(!1,new Bc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Bc(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=f4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?iC():p4();o(l)}else{const l=d4();o(l)}};this.canceled_?n(!1,new Bc(!1,null,!0)):this.backoffId_=E4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function I4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function C4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function A4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function R4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function x4(t,e,n,r,s,i,o=!0){const a=b4(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return A4(c,e),I4(c,n),C4(c,i),R4(c,r),new S4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function N4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class sh{constructor(e,n){this._service=e,n instanceof ar?this._location=n:this._location=ar.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sh(e,n)}get root(){const e=new ar(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return N4(this._location.path)}get storage(){return this._service}get parent(){const e=O4(this._location.path);if(e===null)return null;const n=new ar(this._location.bucket,e);return new sh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw v4(e)}}function s0(t,e){const n=e==null?void 0:e[c4];return n==null?null:ar.makeFromBucketSpec(n,t)}class P4{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=sC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u4,this._maxUploadRetryTime=h4,this._requests=new Set,s!=null?this._bucket=ar.makeFromBucketSpec(s,this._host):this._bucket=s0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ar.makeFromBucketSpec(this._url,e):this._bucket=s0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){r0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){r0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sh(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new y4(iC());{const o=x4(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const i0="@firebase/storage",o0="0.11.2";/**
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
 */const D4="storage";function k4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new P4(n,r,s,e,Ws)}function M4(){xr(new ur(D4,k4,"PUBLIC").setMultipleInstances(!0)),Vn(i0,o0,""),Vn(i0,o0,"esm2017")}M4();function oC(t){return KU(Ib(t))}function L4(t){return(e,n)=>{const r=gD(e,n).run(()=>$t(t));mD.set(e,r),yD(r,e)}}function F4(t,{firebaseApp:e,modules:n=[]}){t.provide(Sb,e);for(const r of n)t.use(r.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const eo=typeof window<"u";function U4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const st=Object.assign;function ld(t,e){const n={};for(const r in e){const s=e[r];n[r]=dr(s)?s.map(t):t(s)}return n}const Ya=()=>{},dr=Array.isArray,$4=/\/$/,j4=t=>t.replace($4,"");function cd(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=W4(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function B4(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function a0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function V4(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jo(e.matched[r],n.matched[s])&&aC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function aC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H4(t[n],e[n]))return!1;return!0}function H4(t,e){return dr(t)?l0(t,e):dr(e)?l0(e,t):t===e}function l0(t,e){return dr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function W4(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Rl;(function(t){t.pop="pop",t.push="push"})(Rl||(Rl={}));var Xa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xa||(Xa={}));function K4(t){if(!t)if(eo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),j4(t)}const G4=/^[^#]+#/;function z4(t,e){return t.replace(G4,"#")+e}function Y4(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const vf=()=>({left:window.pageXOffset,top:window.pageYOffset});function X4(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Y4(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function c0(t,e){return(history.state?history.state.position-e:-1)+t}const Up=new Map;function Q4(t,e){Up.set(t,e)}function q4(t){const e=Up.get(t);return Up.delete(t),e}let J4=()=>location.protocol+"//"+location.host;function lC(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),a0(l,"")}return a0(n,t)+r+s}function Z4(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=lC(t,location),p=n.value,m=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=m?f.position-m.position:0}else r(d);s.forEach(v=>{v(n.value,p,{delta:y,type:Rl.pop,direction:y?y>0?Xa.forward:Xa.back:Xa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(st({},f.state,{scroll:vf()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function u0(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?vf():null}}function e$(t){const{history:e,location:n}=window,r={value:lC(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:J4()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=st({},e.state,u0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=st({},s.value,e.state,{forward:l,scroll:vf()});i(u.current,u,!0);const h=st({},u0(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function t$(t){t=K4(t);const e=e$(t),n=Z4(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=st({location:"",base:t,go:r,createHref:z4.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function n$(t){return typeof t=="string"||t&&typeof t=="object"}function cC(t){return typeof t=="string"||typeof t=="symbol"}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uC=Symbol("");var h0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(h0||(h0={}));function Bo(t,e){return st(new Error,{type:t,[uC]:!0},e)}function Ur(t,e){return t instanceof Error&&uC in t&&(e==null||!!(t.type&e))}const f0="[^/]+?",r$={sensitive:!1,strict:!1,start:!0,end:!0},s$=/[.+*?^${}()[\]/\\]/g;function i$(t,e){const n=st({},r$,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(s$,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=f;i.push({name:p,repeatable:m,optional:y});const g=v||f0;if(g!==f0){d+=10;try{new RegExp(`(${g})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+_.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),s+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(dr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=dr(v)?v.join("/"):v;if(!g)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function o$(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a$(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=o$(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(d0(r))return 1;if(d0(s))return-1}return s.length-r.length}function d0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const l$={type:0,value:""},c$=/[a-zA-Z0-9_]/;function u$(t){if(!t)return[[]];if(t==="/")return[[l$]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:c$.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function h$(t,e,n){const r=i$(u$(t.path),n),s=st(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function f$(t,e){const n=[],r=new Map;e=m0({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=d$(u);p.aliasOf=f&&f.record;const m=m0(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of E)y.push(st({},p,{components:f?f.record.components:p.components,path:_,aliasOf:f?f.record:p}))}let v,g;for(const E of y){const{path:_}=E;if(h&&_[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";E.path=h.record.path+(_&&S+_)}if(v=h$(E,h,m),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!g0(v)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)i(T[S],v,f&&f.children[S])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:Ya}function o(u){if(cC(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&a$(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hC(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!g0(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Bo(1,{location:u});m=f.record.name,d=st(p0(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&p0(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw Bo(1,{location:u,currentLocation:h});m=f.record.name,d=st({},h.params,u.params),p=f.stringify(d)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:g$(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function p0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function d$(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:p$(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function p$(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function g0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function g$(t){return t.reduce((e,n)=>st(e,n.meta),{})}function m0(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hC(t,e){return e.children.some(n=>n===t||hC(t,n))}const fC=/#/g,m$=/&/g,v$=/\//g,y$=/=/g,E$=/\?/g,dC=/\+/g,w$=/%5B/g,_$=/%5D/g,pC=/%5E/g,b$=/%60/g,gC=/%7B/g,T$=/%7C/g,mC=/%7D/g,S$=/%20/g;function rv(t){return encodeURI(""+t).replace(T$,"|").replace(w$,"[").replace(_$,"]")}function I$(t){return rv(t).replace(gC,"{").replace(mC,"}").replace(pC,"^")}function $p(t){return rv(t).replace(dC,"%2B").replace(S$,"+").replace(fC,"%23").replace(m$,"%26").replace(b$,"`").replace(gC,"{").replace(mC,"}").replace(pC,"^")}function C$(t){return $p(t).replace(y$,"%3D")}function A$(t){return rv(t).replace(fC,"%23").replace(E$,"%3F")}function R$(t){return t==null?"":A$(t).replace(v$,"%2F")}function ih(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function x$(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dC," "),o=i.indexOf("="),a=ih(o<0?i:i.slice(0,o)),l=o<0?null:ih(i.slice(o+1));if(a in e){let c=e[a];dr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function v0(t){let e="";for(let n in t){const r=t[n];if(n=C$(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dr(r)?r.map(i=>i&&$p(i)):[r&&$p(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function O$(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dr(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const N$=Symbol(""),y0=Symbol(""),sv=Symbol(""),vC=Symbol(""),jp=Symbol("");function ga(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gs(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Bo(4,{from:n,to:e})):h instanceof Error?a(h):n$(h)?a(Bo(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ud(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(P$(a)){const c=(a.__vccOpts||a)[e];c&&s.push(gs(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=U4(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&gs(f,n,r,i,o)()}))}}return s}function P$(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function E0(t){const e=jn(sv),n=jn(vC),r=jt(()=>e.resolve(se(t.to))),s=jt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(jo.bind(null,u));if(f>-1)return f;const d=w0(l[c-2]);return c>1&&w0(u)===d&&h[h.length-1].path!==d?h.findIndex(jo.bind(null,l[c-2])):f}),i=jt(()=>s.value>-1&&L$(n.params,r.value.params)),o=jt(()=>s.value>-1&&s.value===n.matched.length-1&&aC(n.params,r.value.params));function a(l={}){return M$(l)?e[se(t.replace)?"replace":"push"](se(t.to)).catch(Ya):Promise.resolve()}return{route:r,href:jt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const D$=nt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:E0,setup(t,{slots:e}){const n=pr(E0(t)),{options:r}=jn(sv),s=jt(()=>({[_0(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_0(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Oh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k$=D$;function M$(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L$(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dr(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function w0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _0=(t,e,n)=>t??e??n,F$=nt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jn(jp),s=jt(()=>t.route||r.value),i=jn(y0,0),o=jt(()=>{let c=se(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=jt(()=>s.value.matched[o.value]);po(y0,jt(()=>o.value+1)),po(N$,a),po(jp,s);const l=$t();return Is(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!jo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return b0(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Oh(f,st({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return b0(n.default,{Component:y,route:c})||y}}});function b0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yC=F$;function U$(t){const e=f$(t.routes,t),n=t.parseQuery||x$,r=t.stringifyQuery||v0,s=t.history,i=ga(),o=ga(),a=ga(),l=iw(us);let c=us;eo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ld.bind(null,M=>""+M),h=ld.bind(null,R$),f=ld.bind(null,ih);function d(M,G){let H,ne;return cC(M)?(H=e.getRecordMatcher(M),ne=G):ne=M,e.addRoute(ne,H)}function p(M){const G=e.getRecordMatcher(M);G&&e.removeRoute(G)}function m(){return e.getRoutes().map(M=>M.record)}function y(M){return!!e.getRecordMatcher(M)}function v(M,G){if(G=st({},G||l.value),typeof M=="string"){const w=cd(n,M,G.path),b=e.resolve({path:w.path},G),N=s.createHref(w.fullPath);return st(w,b,{params:f(b.params),hash:ih(w.hash),redirectedFrom:void 0,href:N})}let H;if("path"in M)H=st({},M,{path:cd(n,M.path,G.path).path});else{const w=st({},M.params);for(const b in w)w[b]==null&&delete w[b];H=st({},M,{params:h(M.params)}),G.params=h(G.params)}const ne=e.resolve(H,G),Te=M.hash||"";ne.params=u(f(ne.params));const Xe=B4(r,st({},M,{hash:I$(Te),path:ne.path})),Ie=s.createHref(Xe);return st({fullPath:Xe,hash:Te,query:r===v0?O$(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:Ie})}function g(M){return typeof M=="string"?cd(n,M,l.value.path):st({},M)}function E(M,G){if(c!==M)return Bo(8,{from:G,to:M})}function _(M){return x(M)}function T(M){return _(st(g(M),{replace:!0}))}function S(M){const G=M.matched[M.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let ne=typeof H=="function"?H(M):H;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=g(ne):{path:ne},ne.params={}),st({query:M.query,hash:M.hash,params:"path"in ne?{}:M.params},ne)}}function x(M,G){const H=c=v(M),ne=l.value,Te=M.state,Xe=M.force,Ie=M.replace===!0,w=S(H);if(w)return x(st(g(w),{state:typeof w=="object"?st({},Te,w.state):Te,force:Xe,replace:Ie}),G||H);const b=H;b.redirectedFrom=G;let N;return!Xe&&V4(r,ne,H)&&(N=Bo(16,{to:b,from:ne}),dt(ne,ne,!0,!1)),(N?Promise.resolve(N):C(b,ne)).catch(F=>Ur(F)?Ur(F,2)?F:$e(F):q(F,b,ne)).then(F=>{if(F){if(Ur(F,2))return x(st({replace:Ie},g(F.to),{state:typeof F.to=="object"?st({},Te,F.to.state):Te,force:Xe}),G||b)}else F=L(b,ne,!0,Ie,Te);return P(b,ne,F),F})}function I(M,G){const H=E(M,G);return H?Promise.reject(H):Promise.resolve()}function C(M,G){let H;const[ne,Te,Xe]=$$(M,G);H=ud(ne.reverse(),"beforeRouteLeave",M,G);for(const w of ne)w.leaveGuards.forEach(b=>{H.push(gs(b,M,G))});const Ie=I.bind(null,M,G);return H.push(Ie),Gi(H).then(()=>{H=[];for(const w of i.list())H.push(gs(w,M,G));return H.push(Ie),Gi(H)}).then(()=>{H=ud(Te,"beforeRouteUpdate",M,G);for(const w of Te)w.updateGuards.forEach(b=>{H.push(gs(b,M,G))});return H.push(Ie),Gi(H)}).then(()=>{H=[];for(const w of M.matched)if(w.beforeEnter&&!G.matched.includes(w))if(dr(w.beforeEnter))for(const b of w.beforeEnter)H.push(gs(b,M,G));else H.push(gs(w.beforeEnter,M,G));return H.push(Ie),Gi(H)}).then(()=>(M.matched.forEach(w=>w.enterCallbacks={}),H=ud(Xe,"beforeRouteEnter",M,G),H.push(Ie),Gi(H))).then(()=>{H=[];for(const w of o.list())H.push(gs(w,M,G));return H.push(Ie),Gi(H)}).catch(w=>Ur(w,8)?w:Promise.reject(w))}function P(M,G,H){for(const ne of a.list())ne(M,G,H)}function L(M,G,H,ne,Te){const Xe=E(M,G);if(Xe)return Xe;const Ie=G===us,w=eo?history.state:{};H&&(ne||Ie?s.replace(M.fullPath,st({scroll:Ie&&w&&w.scroll},Te)):s.push(M.fullPath,Te)),l.value=M,dt(M,G,H,Ie),$e()}let U;function k(){U||(U=s.listen((M,G,H)=>{if(!St.listening)return;const ne=v(M),Te=S(ne);if(Te){x(st(Te,{replace:!0}),ne).catch(Ya);return}c=ne;const Xe=l.value;eo&&Q4(c0(Xe.fullPath,H.delta),vf()),C(ne,Xe).catch(Ie=>Ur(Ie,12)?Ie:Ur(Ie,2)?(x(Ie.to,ne).then(w=>{Ur(w,20)&&!H.delta&&H.type===Rl.pop&&s.go(-1,!1)}).catch(Ya),Promise.reject()):(H.delta&&s.go(-H.delta,!1),q(Ie,ne,Xe))).then(Ie=>{Ie=Ie||L(ne,Xe,!1),Ie&&(H.delta&&!Ur(Ie,8)?s.go(-H.delta,!1):H.type===Rl.pop&&Ur(Ie,20)&&s.go(-1,!1)),P(ne,Xe,Ie)}).catch(Ya)}))}let O=ga(),J=ga(),j;function q(M,G,H){$e(M);const ne=J.list();return ne.length?ne.forEach(Te=>Te(M,G,H)):console.error(M),Promise.reject(M)}function oe(){return j&&l.value!==us?Promise.resolve():new Promise((M,G)=>{O.add([M,G])})}function $e(M){return j||(j=!M,k(),O.list().forEach(([G,H])=>M?H(M):G()),O.reset()),M}function dt(M,G,H,ne){const{scrollBehavior:Te}=t;if(!eo||!Te)return Promise.resolve();const Xe=!H&&q4(c0(M.fullPath,0))||(ne||!H)&&history.state&&history.state.scroll||null;return ki().then(()=>Te(M,G,Xe)).then(Ie=>Ie&&X4(Ie)).catch(Ie=>q(Ie,M,G))}const We=M=>s.go(M);let Fe;const ht=new Set,St={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:_,replace:T,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:oe,install(M){const G=this;M.component("RouterLink",k$),M.component("RouterView",yC),M.config.globalProperties.$router=G,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>se(l)}),eo&&!Fe&&l.value===us&&(Fe=!0,_(s.location).catch(Te=>{}));const H={};for(const Te in us)H[Te]=jt(()=>l.value[Te]);M.provide(sv,G),M.provide(vC,pr(H)),M.provide(jp,l);const ne=M.unmount;ht.add(M),M.unmount=function(){ht.delete(M),ht.size<1&&(c=us,U&&U(),U=null,l.value=us,Fe=!1,j=!1),ne()}}};return St}function Gi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $$(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>jo(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>jo(c,l))||s.push(l))}return[n,r,s]}const j$={class:"px-4 py-2 -mx-3"},B$={class:"mx-3"},V$={class:"font-semibold text-white"},H$={class:"text-sm text-gray-100"},hd=nt({__name:"Notification",props:{type:null,color:null},setup(t){return(e,n)=>(de(),lt(se(Bd),{enter:"transform ease-out duration-300 transition","enter-from":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4","enter-to":"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-500","leave-from":"opacity-100","leave-to":"opacity-0",move:"transition duration-500","move-delay":"delay-300"},{default:At(({notifications:r})=>[(de(!0),tt(ct,null,Mi(r,s=>(de(),tt("div",{key:s.id},[s.type===t.type?(de(),tt("div",{key:0,class:Ni("flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-opacity-75 rounded-lg shadow-md "+t.color)},[be("div",j$,[be("div",B$,[be("span",V$,Mt(s.title),1),be("p",H$,Mt(s.text),1)])])],2)):Bn("",!0)]))),128))]),_:1}))}}),W$={class:"fixed inset-0 flex items-end justify-center p-6 px-4 py-6 pointer-events-none"},K$={class:"w-full max-w-sm"},G$=nt({__name:"NotificationGroup",setup(t){return(e,n)=>{const r=zo("NotificationGroup",!0);return de(),lt(r,null,{default:At(()=>[be("div",W$,[be("div",K$,[pe(hd,{type:"error",color:"bg-red-800"}),pe(hd,{type:"warning",color:"bg-yellow-800"}),pe(hd,{type:"success",color:"bg-green-800"})])])]),_:1})}}}),z$=nt({__name:"App",setup(t){return(e,n)=>(de(),tt(ct,null,[pe(se(yC)),pe(G$)],64))}});const Y$={apiKey:"AIzaSyAjt3RyE1KkK110jxZQUrm9kjfclWO126k",authDomain:"personal-website-c3482.firebaseapp.com",projectId:"personal-website-c3482",storageBucket:"personal-website-c3482.appspot.com",messagingSenderId:"110986644823",appId:"1:110986644823:web:4081c484521ba6b37bc212",measurementId:"G-PF7D6JKSC3"},EC=L_(Y$);/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let wC;const yf=t=>wC=t,_C=Symbol();function Bp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qa||(Qa={}));function X$(){const t=ph(!0),e=t.run(()=>$t({}));let n=[],r=[];const s=vi({install(i){yf(s),s._a=i,i.provide(_C,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!VP?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const bC=()=>{};function T0(t,e,n,r=bC){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&tg()&&K0(s),s}function zi(t,...e){t.slice().forEach(n=>{n(...e)})}function Vp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Bp(s)&&Bp(r)&&t.hasOwnProperty(n)&&!Ct(r)&&!_r(r)?t[n]=Vp(s,r):t[n]=r}return t}const Q$=Symbol();function q$(t){return!Bp(t)||!t.hasOwnProperty(Q$)}const{assign:ds}=Object;function J$(t){return!!(Ct(t)&&t.effect)}function Z$(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=aw(n.state.value[t]);return ds(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=vi(jt(()=>{yf(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=TC(t,c,e,n,r,!0),l}function TC(t,e,n={},r,s,i){let o;const a=ds({actions:{}},n),l={deep:!0};let c,u,h=vi([]),f=vi([]),d;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),$t({});let m;function y(x){let I;c=u=!1,typeof x=="function"?(x(r.state.value[t]),I={type:Qa.patchFunction,storeId:t,events:d}):(Vp(r.state.value[t],x),I={type:Qa.patchObject,payload:x,storeId:t,events:d});const C=m=Symbol();ki().then(()=>{m===C&&(c=!0)}),u=!0,zi(h,I,r.state.value[t])}const v=i?function(){const{state:I}=n,C=I?I():{};this.$patch(P=>{ds(P,C)})}:bC;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function E(x,I){return function(){yf(r);const C=Array.from(arguments),P=[],L=[];function U(J){P.push(J)}function k(J){L.push(J)}zi(f,{args:C,name:x,store:T,after:U,onError:k});let O;try{O=I.apply(this&&this.$id===t?this:T,C)}catch(J){throw zi(L,J),J}return O instanceof Promise?O.then(J=>(zi(P,J),J)).catch(J=>(zi(L,J),Promise.reject(J))):(zi(P,O),O)}}const _={_p:r,$id:t,$onAction:T0.bind(null,f),$patch:y,$reset:v,$subscribe(x,I={}){const C=T0(h,x,I.detached,()=>P()),P=o.run(()=>Is(()=>r.state.value[t],L=>{(I.flush==="sync"?u:c)&&x({storeId:t,type:Qa.direct,events:d},L)},ds({},l,I)));return C},$dispose:g},T=pr(_);r._s.set(t,T);const S=r._e.run(()=>(o=ph(),o.run(()=>e())));for(const x in S){const I=S[x];if(Ct(I)&&!J$(I)||_r(I))i||(p&&q$(I)&&(Ct(I)?I.value=p[x]:Vp(I,p[x])),r.state.value[t][x]=I);else if(typeof I=="function"){const C=E(x,I);S[x]=C,a.actions[x]=I}}return ds(T,S),ds(Ue(T),S),Object.defineProperty(T,"$state",{get:()=>r.state.value[t],set:x=>{y(I=>{ds(I,x)})}}),r._p.forEach(x=>{ds(T,o.run(()=>x({store:T,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(T.$state,p),c=!0,u=!0,T}function SC(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=Mr();return a=a||c&&jn(_C,null),a&&yf(a),a=wC,a._s.has(r)||(i?TC(r,e,s,a):Z$(r,s,a)),a._s.get(r)}return o.$id=r,o}function Vs(t){{t=Ue(t);const e={};for(const n in t){const r=t[n];(Ct(r)||_r(r))&&(e[n]=cg(t,n))}return e}}const S0=(t,e)=>{const n=t.storage||sessionStorage,r=t.key||e.$id;if(t.paths){const s=t.paths.reduce((i,o)=>(i[o]=e.$state[o],i),{});n.setItem(r,JSON.stringify(s))}else n.setItem(r,JSON.stringify(e.$state))};var ej=({options:t,store:e})=>{var n,r,s,i;if((n=t.persist)!=null&&n.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(s=(r=t.persist)==null?void 0:r.strategies)!=null&&s.length?(i=t.persist)==null?void 0:i.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),S0(l,e))}),e.$subscribe(()=>{a.forEach(l=>{S0(l,e)})})}};const IC=X$();IC.use(ej);const nl=class{constructor(e,n,r){BC.push({name:r}),sx({title:e,type:e.toLowerCase(),text:n},5e3)}};let Tn=nl;dc(Tn,"success",(e,n)=>new nl("Success",e,n)),dc(Tn,"warning",e=>new nl("Warning",e)),dc(Tn,"error",e=>new nl("Error",e));const I0=async(t,e)=>{const n=await o4(HU(t,e));return Promise.all(n.docs.map(async r=>{const s=r.data(),i=Object.entries(s).filter(([,o])=>o instanceof Array&&o[0]instanceof Pn);if(i.length){const o=i.map(async([l,c])=>{const h=(await Promise.all(c.map(f=>tC(f)))).map(f=>f.data());return{[l]:Hp(h)}}),a=await Promise.all(o);return{...s,...a.reduce((l,c)=>({...l,...c}),{})}}else return s}))},Hp=t=>t.sort((e,n)=>(n.order||0)-(e.order||0)),tj=(t,e,n,r)=>{setTimeout(()=>{t.forEach((s,i)=>{setTimeout(()=>{r(s)},i*n)})},e)},nj=(t,e)=>Object.keys(t).length===Object.keys(e).length&&Object.keys(t).every(n=>t[n]===e[n]),to=bb(EC);to.onAuthStateChanged(t=>{Cr().fetchUser(t)});const Vc=oC(),rj={"auth/user-not-found":"Unknown user","auth/invalid-email":"Invalid e-mail address","auth/email-already-in-use":"E-mail already in use","auth/wrong-password":"Wrong password","auth/too-many-requests":"Temporarily blocked","auth/weak-password":"Weak password","auth/requires-recent-login":"You need to re-login to do this"},hs=t=>{Tn.error(rj[t??""]??"Something went wrong")},Cr=SC("auth",{state:()=>({currentUser:void 0,firebaseUser:to.currentUser}),actions:{async fetchUser(t){this.firebaseUser=t,t&&(this.currentUser=(await tC(jc(Vc,"/users/"+t.uid))).data())},async login(t,e){try{const{user:n}=await IN(to,t,e);await this.fetchUser(n),Tn.success("Successfully logged in","dashboard")}catch(n){hs(n.code)}},async register(t,e,n){try{const{user:r}=await SN(to,t,e);await t0(jc(Vc,"/users/"+r.uid),{firstName:n}),await this.fetchUser(r),Tn.success("Successfully created your account","dashboard")}catch(r){hs(r.code)}},async updateMail(t,e){try{if(this.firebaseUser&&this.firebaseUser.email){const n=Ls.credential(this.firebaseUser.email,e);await hy(this.firebaseUser,n),await CN(this.firebaseUser,t),Tn.success("Successfully changed your e-mail")}}catch(n){hs(n.code)}},async updatePassword(t,e){try{if(this.firebaseUser&&this.firebaseUser.email){const n=Ls.credential(this.firebaseUser.email,e);await hy(this.firebaseUser,n),await AN(this.firebaseUser,t),Tn.success("Successfully changed your password")}}catch(n){hs(n.code)}},async resetPassword(t){try{await TN(to,t),Tn.success("Successfully requested password reset")}catch(e){hs(e.code)}},async updateUser(t){try{this.currentUser&&this.firebaseUser&&(nj(this.currentUser,t)?Tn.warning("Nothing changed in your details"):(await t0(jc(Vc,"/users/"+this.firebaseUser.uid),t),await this.fetchUser(this.firebaseUser),Tn.success("Successfully updated your profile")))}catch(e){hs(e.code)}},async logout(){try{await xN(to),this.currentUser=void 0,Tn.success("Successfully logged out","home")}catch(t){hs(t.code)}},async deleteAccount(){try{this.currentUser&&this.firebaseUser&&(await a4(jc(Vc,"/users/"+this.firebaseUser.uid)),await ON(this.firebaseUser),this.currentUser=void 0,Tn.success("Successfully deleted your account","home"))}catch(t){hs(t.code)}}},persist:{enabled:!0}}),sj=""+new URL("bundle.css",import.meta.url).href,Ef={name:"Sander Derks",role:"Full-Stack Developer",service:"Software Development",location:{country:"The Netherlands",city:"Nijmegen"},avatarUrl:sj,description:["Welcome to my website!","Here you'll soon find a lot of resources from me."],websites:[{name:"GitHub",url:"https://github.com/sanderderks",logo:"github.png"},{name:"LinkedIn",url:"https://www.linkedin.com/in/sander-derks/",logo:"linkedin.png"}],footer:"Sander Derks. All rights reserved.",privacyStatement:["Your login info and data are managed by Google Firebase.","All data you share (except for your password) is visible to the site admin.","Your data can be easily deleted on your profile dashboard."]},ij=[{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0}],oj=[{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0}],aj={class:"text-md text-primary p-10"},lj={class:"m-1"},iv=nt({__name:"Privacy",setup(t){return(e,n)=>(de(),tt("div",aj,[(de(!0),tt(ct,null,Mi(se(Ef).privacyStatement,r=>(de(),tt("p",lj,Mt(r),1))),256))]))}}),an={Required:{test:t=>!!t.length,error:"Required"},Email:{test:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),error:"Must be an e-mail address"},MinLength3:{test:t=>!t.length||t.length>=3,error:"Must be at least 3 characters"},MinLength6:{test:t=>!t.length||t.length>=6,error:"Must be at least 6 characters"}},C0=oC(),oc=SC("main",{state:()=>({profile:Ef,menuItems:oj,projects:ij}),getters:{filteredProjects:t=>t.projects.filter(e=>!e.loading),filteredMenuItems:t=>t.menuItems.filter(e=>!e.loading)},actions:{async fetchAll(){(!this.filteredProjects.length||!this.filteredMenuItems.length)&&await Promise.all([this.fetchProjects(),this.fetchMenuItems()])},async fetchProjects(){const t=await I0(C0,"projects");this.projects=t.length?Hp(t):this.projects},async fetchMenuItems(){const t=await I0(C0,"menuItems");this.menuItems=t.length?Hp(t):this.menuItems},moveProject(t,e){const n=this.projects.splice(t,1)[0];this.projects.splice(e,0,n)}},persist:{enabled:!0}}),cj={class:"bg-black text-white shadow-md py-4"},uj={class:"container mx-auto text-center"},hj=nt({__name:"Footer",setup(t){return(e,n)=>(de(),tt("footer",cj,[be("div",uj,[be("p",null,"© "+Mt(new Date().getFullYear()+" "+se(Ef).footer),1)])]))}});var fj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dj(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function CC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}const oa=CC(ex),{createElementVNode:pj,openBlock:gj,createElementBlock:mj}=oa;var vj=function(e,n){return gj(),mj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[pj("path",{"fill-rule":"evenodd",d:"M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z","clip-rule":"evenodd"})])};const{createElementVNode:A0,openBlock:yj,createElementBlock:Ej}=oa;var wj=function(e,n){return yj(),Ej("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[A0("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),A0("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})])};const{createElementVNode:_j,openBlock:bj,createElementBlock:Tj}=oa;var Sj=function(e,n){return bj(),Tj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_j("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])};const{createElementVNode:Ij,openBlock:Cj,createElementBlock:Aj}=oa;var Rj=function(e,n){return Cj(),Aj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Ij("path",{"fill-rule":"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z","clip-rule":"evenodd"})])};const{createElementVNode:xj,openBlock:Oj,createElementBlock:Nj}=oa;var Pj=function(e,n){return Oj(),Nj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[xj("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])},AC=vj,Dj=wj,kj=Sj,Mj=Rj,Lj=Pj;const Fj=["href"],Uj=nt({__name:"DropDown",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){const e=Cr(),{currentUser:n}=Vs(e),{menuItems:r}=Vs(oc());return(s,i)=>{const o=zo("RouterLink");return de(),tt(ct,null,[Cd(be("div",{class:"md:hidden w-screen h-screen z-10 bg-gray-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:i[0]||(i[0]=(...a)=>t.toggle&&t.toggle(...a))},null,512),[[Eu,t.isOpen]]),Cd(be("div",{class:"md:hidden absolute z-20 w-3/4 left-1/2 transform -translate-x-1/2 mt-2 p-4 py-8 bg-gray-900 border border-indigo-600 rounded-xl",onClick:i[1]||(i[1]=(...a)=>t.toggle&&t.toggle(...a))},[(de(!0),tt(ct,null,Mi(se(r),a=>(de(),tt("a",{href:a.url,class:"button-outlined-list-primary flex flex-column justify-center text-lg first:rounded-t-xl"},[a.loading?(de(),lt(se(AC),{key:0,class:"mt-1 mr-2.5 h-5 w-5 animate-spin"})):Bn("",!0),Un(" "+Mt(a.name),1)],8,Fj))),256)),se(n)?(de(),lt(o,{key:0,to:{name:"dashboard"},class:"button-outlined-list-primary block text-lg first:rounded-t-xl"},{default:At(()=>[Un(" Dashboard ")]),_:1})):Bn("",!0),se(n)?(de(),lt(o,{key:1,to:{},class:"button-outlined-list-danger flex flex-column justify-center text-lg rounded-b-xl first:rounded-t-xl",onClick:se(e).logout},{default:At(()=>[Un(" Logout ")]),_:1},8,["onClick"])):(de(),lt(o,{key:2,to:{name:"login"},class:"button-outlined-list-secondary block text-lg rounded-b-xl first:rounded-t-xl"},{default:At(()=>[Un(" Login ")]),_:1}))],512),[[Eu,t.isOpen]])],64)}}}),$j={key:0,class:"col-span-5 flex items-center justify-between md:justify-around mt-5 gap-3 flex-wrap"},jj=["href"],Bj={class:"flex justify-center"},Vj=nt({__name:"Menu",setup(t){const e=Cr(),{currentUser:n}=Vs(e),{menuItems:r}=Vs(oc()),s=$t(),i=$t(!1),o=()=>{i.value=!i.value,i.value&&ki(()=>{var a;(a=s.value)==null||a.scrollIntoView({behavior:"smooth",block:"center"})})};return(a,l)=>se(r).length?(de(),tt("div",$j,[(de(!0),tt(ct,null,Mi(se(r),c=>(de(),tt("a",{class:"button-outlined-primary hidden md:flex flex-column grow justify-center",type:"button",href:c.url},[c.loading?(de(),lt(se(AC),{key:0,class:"my-1 mr-2.5 h-5 w-5 animate-spin"})):Bn("",!0),Un(" "+Mt(c.name),1)],8,jj))),256)),se(n)?(de(),tt("button",{key:0,class:"button-outlined-danger hidden md:flex flex-column grow justify-center",type:"button",onClick:l[0]||(l[0]=(...c)=>se(e).logout&&se(e).logout(...c))}," Logout ")):Bn("",!0),be("div",{ref_key:"dropdown",ref:s,class:"dropdown w-full"},[be("button",{class:"button-outlined-primary md:hidden w-full",type:"button",onClick:o},[be("div",Bj,[pe(se(kj),{class:"mt-0.5 mr-2.5 h-5 w-5"}),Un(" Menu ")])]),pe(Uj,{"is-open":i.value,toggle:()=>i.value=!i.value},null,8,["is-open","toggle"])],512)])):Bn("",!0)}}),Hj={class:"lg:flex lg:items-center lg:justify-between"},Wj={class:"min-w-0 flex-1"},Kj=["src","alt"],Gj={class:"title-primary"},zj={class:"title-secondary"},Yj={class:"title-tertiary mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap xl:space-x-6"},Xj={class:"mt-2 flex items-center"},Qj={class:"mt-2 flex items-center"},qj={class:"grid grid-cols-5 lg:w-1/2 justify-stretch mt-8 lg:mt-0 p-8 bg-black bg-opacity-50 text-indigo-300 rounded-3xl"},Jj={class:"col-span-5 md:col-span-4 space-y-2"},Zj={class:"font-semibold text-base first:font-bold first:text-lg"},e9={class:"hidden md:visible col-span-5 md:col-span-1 md:flex items-center justify-center md:justify-end"},t9=nt({__name:"Header",setup(t){const{currentUser:e}=Vs(Cr()),{profile:n}=Vs(oc());return(r,s)=>{const i=zo("RouterLink");return de(),tt("div",Hj,[be("div",Wj,[pe(i,{to:{name:"home"}},{default:At(()=>[be("img",{class:"w-48 h-48 rounded-full animation-scale mb-4 cursor-pointer",src:se(n).avatarUrl,alt:se(n).name},null,8,Kj)]),_:1}),be("h1",Gj,Mt(se(n).name),1),be("h2",zj,Mt(se(n).service),1),be("div",Yj,[be("div",Xj,[pe(se(Dj),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Un(" "+Mt(se(n).role),1)]),be("div",Qj,[pe(se(Mj),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Un(" "+Mt(se(n).location.city)+", "+Mt(se(n).location.country),1)])])]),be("div",qj,[be("div",Jj,[(de(!0),tt(ct,null,Mi(se(n).description,o=>(de(),tt("p",Zj,Mt(o),1))),256))]),be("div",e9,[pe(i,{to:{name:se(e)?"dashboard":"login"}},{default:At(()=>[pe(se(Lj),{class:"w-16 h-16 rounded-full border-2 text-indigo-600 border-indigo-600 animation-scale"})]),_:1},8,["to"])]),pe(Vj)])])}}}),n9={class:"min-h-screen bg-gradient-to-t from-black to-blue-900 via-gray-800"},r9={class:"mx-0 sm:mx-16 p-5 sm:p-14 rounded-bl-3xl rounded-br-3xl text-white bg-blue-gray-900 bg-opacity-50 bg-gradient-to-b from-transparent to-black via-purple-900 border-opacity-100"},ac=nt({__name:"Page",setup(t){const{fetchAll:e}=oc();return Hs(()=>{e()}),(n,r)=>(de(),tt(ct,null,[be("div",n9,[be("div",r9,[be("header",null,[n.$slots.header?ui(n.$slots,"header",{key:0}):(de(),lt(t9,{key:1}))]),be("main",null,[ui(n.$slots,"content")])])]),be("footer",null,[n.$slots.footer?ui(n.$slots,"footer",{key:0}):(de(),lt(hj,{key:1}))])],64))}}),s9=["href"],i9={class:"text-2xl group-hover/bubble:underline font-bold mb-2"},o9={key:1,class:"text-2xl font-bold mb-2"},a9={key:2,class:"text-gray-400 mb-2"},lc=nt({__name:"Bubble",props:{name:null,url:null,description:null,buttonText:null,loading:{type:Boolean}},setup(t){return(e,n)=>(de(),tt("div",{class:Ni("group/bubble color-primary rounded-3xl p-10 "+(t.url?"hover:bg-opacity-30":"")+(t.loading?"animate-pulse":""))},[t.url?(de(),tt("a",{key:0,href:t.url},[be("h2",i9,Mt(t.name),1)],8,s9)):(de(),tt("h2",o9,Mt(t.name),1)),t.description?(de(),tt("p",a9,Mt(t.description),1)):Bn("",!0),ui(e.$slots,"default")],2))}}),l9={key:0,class:"text-red-600"},c9=nt({__name:"ErrorMessage",props:{name:null,state:null},setup(t){const e=t,n=jt(()=>e.state[e.name].error);return(r,s)=>se(n)&&!t.state[t.name].length?(de(),tt("p",l9,Mt(se(n)),1)):Bn("",!0)}}),u9={class:"mb-4"},h9=["for"],f9=["value","id","type","placeholder"],yr=nt({__name:"TextField",props:{name:null,displayName:null,placeholder:null,value:null,state:null,rules:null,inputProps:null},emits:["update","error"],setup(t,{expose:e,emit:n}){const r=t,s=jt(()=>{var l;const a=((l=r.state)==null?void 0:l[r.name].value)||r.value||"";return a.endsWith("  ")?a.trim():a}),i=a=>{const l=a.target.value;n("update",l),o(l)},o=async a=>{var u;const l=a||s.value,c=((u=r.rules)==null?void 0:u.filter(h=>!h.test(l)).map(h=>h.error))||[];n("error",c[0]||"")};return e({test:o}),(a,l)=>{var c;return de(),tt("div",u9,[be("label",{class:"block text-sm font-bold mb-2",for:t.name},Mt(t.displayName),9,h9),be("input",bg({ref:"input",value:se(s),class:"input-field",id:t.name,type:((c=t.inputProps)==null?void 0:c.type)||"text",placeholder:t.placeholder,onInput:i},t.inputProps),null,16,f9),t.state?(de(),lt(c9,{key:0,name:t.name,state:t.state},null,8,["name","state"])):Bn("",!0)])}}}),d9={class:"flex flex-col items-center content-center"},p9={class:"flex gap-3 mt-10 flex-wrap"},g9={class:"button-primary w-full",type:"submit"},m9=nt({__name:"Dashboard",setup(t){var d,p,m;const e=Cr(),{currentUser:n,firebaseUser:r}=Vs(e),s=$t(),i=$t(),o=$t(),a=$t(),l=$t(),c=pr({firstName:{value:((d=n==null?void 0:n.value)==null?void 0:d.firstName)||"",error:""},lastName:{value:((p=n==null?void 0:n.value)==null?void 0:p.lastName)||"",error:""},email:{value:((m=r.value)==null?void 0:m.email)||"",error:""},newPassword:{value:"",error:""},currentPassword:{value:"",error:""}}),u=jt(()=>{var y;return c.email.value!==((y=r.value)==null?void 0:y.email)}),h=jt(()=>{const y=["Details"];return u.value&&y.push("E-mail"),c.newPassword.value&&y.push("Password"),"Save "+y.join(", ").replace(/,([^,]*)$/," and$1")}),f=async()=>{var y;c.newPassword.value&&c.currentPassword.value&&(await Promise.all([a.value.test(),l.value.test()]),!c.newPassword.error&&!c.currentPassword.error&&await e.updatePassword(c.newPassword.value,c.currentPassword.value)),c.email.value!==((y=r.value)==null?void 0:y.email)&&(await Promise.all([o.value.test(),l.value.test()]),!c.email.error&&!c.currentPassword.error&&await e.updateMail(c.email.value,c.currentPassword.value)),await Promise.all([s.value.test(),i.value.test()]),!c.firstName.error&&!c.lastName.error&&e.updateUser({firstName:c.firstName.value,lastName:c.lastName.value})};return(y,v)=>(de(),lt(ac,null,{content:At(()=>[se(n)&&se(r)?(de(),lt(lc,{key:0,class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Welcome "+se(n).firstName+(se(n).lastName?" "+se(n).lastName:""),description:"Soon you'll be able to use this account for interaction with my blog posts and more!"},{default:At(()=>[be("div",d9,[be("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:v[11]||(v[11]=Ph(g=>f(),["prevent"]))},[pe(yr,{ref_key:"firstName",ref:s,name:"firstName","display-name":"First Name",placeholder:"Someone",state:c,rules:[se(an).Required,se(an).MinLength3],onUpdate:v[0]||(v[0]=g=>c.firstName.value=g),onError:v[1]||(v[1]=g=>c.firstName.error=g)},null,8,["state","rules"]),pe(yr,{ref_key:"lastName",ref:i,name:"lastName","display-name":"Last Name",state:c,rules:[se(an).MinLength3],onUpdate:v[2]||(v[2]=g=>c.lastName.value=g),onError:v[3]||(v[3]=g=>c.lastName.error=g)},null,8,["state","rules"]),pe(yr,{ref_key:"email",ref:o,name:"email","display-name":"E-mail",placeholder:"someone@example.com",state:c,rules:[se(an).Required,se(an).Email],onUpdate:v[4]||(v[4]=g=>c.email.value=g),onError:v[5]||(v[5]=g=>c.email.error=g)},null,8,["state","rules"]),c.email.value===se(r).email?(de(),lt(yr,{key:0,ref_key:"newPassword",ref:a,name:"newPassword","display-name":"New Password",placeholder:"*****","input-props":{type:"password"},state:c,rules:[se(an).MinLength6],onUpdate:v[6]||(v[6]=g=>c.newPassword.value=g),onError:v[7]||(v[7]=g=>c.newPassword.error=g)},null,8,["state","rules"])):Bn("",!0),c.newPassword.value||se(u)?(de(),lt(yr,{key:1,ref_key:"currentPassword",ref:l,name:"currentPassword","display-name":"Current Password",placeholder:"*****","input-props":{type:"password"},state:c,rules:[se(an).Required],onUpdate:v[8]||(v[8]=g=>c.currentPassword.value=g),onError:v[9]||(v[9]=g=>c.currentPassword.error=g)},null,8,["state","rules"])):Bn("",!0),be("div",p9,[be("button",g9,Mt(se(h)),1),be("button",{class:"button-outlined-danger w-full",type:"button",onClick:v[10]||(v[10]=g=>se(e).deleteAccount())}," Delete account ")])],32),pe(iv)])]),_:1},8,["name"])):Bn("",!0)]),_:1}))}}),v9=nt({__name:"Dashboard",setup(t){return(e,n)=>(de(),lt(m9))}}),y9=["href"],E9={key:1},w9=nt({__name:"ColororedButton",props:{text:null,url:null,color:null},setup(t){return(e,n)=>(de(),tt("button",{class:"mt-3 md:mt-0 text-white font-bold py-2 px-4 rounded-full",style:Ho({backgroundColor:t.color})},[t.url?(de(),tt("a",{key:0,href:t.url},Mt(t.text),9,y9)):(de(),tt("p",E9,Mt(t.text),1))],4))}});const RC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_9=RC(w9,[["__scopeId","data-v-a9693f67"]]);var Wp={},b9={get exports(){return Wp},set exports(t){Wp=t}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function R0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function kr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R0(Object(n),!0).forEach(function(r){T9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?iu=function(e){return typeof e}:iu=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iu(t)}function T9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jn(){return Jn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jn.apply(this,arguments)}function S9(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function I9(t,e){if(t==null)return{};var n=S9(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function C9(t){return A9(t)||R9(t)||x9(t)||O9()}function A9(t){if(Array.isArray(t))return Kp(t)}function R9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function x9(t,e){if(t){if(typeof t=="string")return Kp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kp(t,e)}}function Kp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N9="1.14.0";function Qr(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var is=Qr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),cc=Qr(/Edge/i),x0=Qr(/firefox/i),qa=Qr(/safari/i)&&!Qr(/chrome/i)&&!Qr(/android/i),xC=Qr(/iP(ad|od|hone)/i),P9=Qr(/chrome/i)&&Qr(/android/i),OC={capture:!1,passive:!1};function je(t,e,n){t.addEventListener(e,n,!is&&OC)}function Le(t,e,n){t.removeEventListener(e,n,!is&&OC)}function oh(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function D9(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function tr(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&oh(t,e):oh(t,e))||r&&t===n)return t;if(t===n)break}while(t=D9(t))}return null}var O0=/\s+/g;function It(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(O0," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(O0," ")}}function ae(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function gi(t,e){var n="";if(typeof t=="string")n=t;else do{var r=ae(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(n)}function NC(t,e,n){if(t){var r=t.getElementsByTagName(e),s=0,i=r.length;if(n)for(;s<i;s++)n(r[s],s);return r}return[]}function Ar(){var t=document.scrollingElement;return t||document.documentElement}function wt(t,e,n,r,s){if(!(!t.getBoundingClientRect&&t!==window)){var i,o,a,l,c,u,h;if(t!==window&&t.parentNode&&t!==Ar()?(i=t.getBoundingClientRect(),o=i.top,a=i.left,l=i.bottom,c=i.right,u=i.height,h=i.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(s=s||t.parentNode,!is))do if(s&&s.getBoundingClientRect&&(ae(s,"transform")!=="none"||n&&ae(s,"position")!=="static")){var f=s.getBoundingClientRect();o-=f.top+parseInt(ae(s,"border-top-width")),a-=f.left+parseInt(ae(s,"border-left-width")),l=o+i.height,c=a+i.width;break}while(s=s.parentNode);if(r&&t!==window){var d=gi(s||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,h/=p,u/=m,l=o+u,c=a+h)}return{top:o,left:a,bottom:l,right:c,width:h,height:u}}}function N0(t,e,n){for(var r=Ts(t,!0),s=wt(t)[e];r;){var i=wt(r)[n],o=void 0;if(n==="top"||n==="left"?o=s>=i:o=s<=i,!o)return r;if(r===Ar())break;r=Ts(r,!1)}return!1}function Vo(t,e,n,r){for(var s=0,i=0,o=t.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==Se.ghost&&(r||o[i]!==Se.dragged)&&tr(o[i],n.draggable,t,!1)){if(s===e)return o[i];s++}i++}return null}function ov(t,e){for(var n=t.lastElementChild;n&&(n===Se.ghost||ae(n,"display")==="none"||e&&!oh(n,e));)n=n.previousElementSibling;return n||null}function Nt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==Se.clone&&(!e||oh(t,e))&&n++;return n}function P0(t){var e=0,n=0,r=Ar();if(t)do{var s=gi(t),i=s.a,o=s.d;e+=t.scrollLeft*i,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function k9(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function Ts(t,e){if(!t||!t.getBoundingClientRect)return Ar();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var s=ae(n);if(n.clientWidth<n.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return Ar();if(r||e)return n;r=!0}}while(n=n.parentNode);return Ar()}function M9(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function fd(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ja;function PC(t,e){return function(){if(!Ja){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),Ja=setTimeout(function(){Ja=void 0},e)}}}function L9(){clearTimeout(Ja),Ja=void 0}function DC(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function av(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function D0(t,e){ae(t,"position","absolute"),ae(t,"top",e.top),ae(t,"left",e.left),ae(t,"width",e.width),ae(t,"height",e.height)}function dd(t){ae(t,"position",""),ae(t,"top",""),ae(t,"left",""),ae(t,"width",""),ae(t,"height","")}var dn="Sortable"+new Date().getTime();function F9(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(s){if(!(ae(s,"display")==="none"||s===Se.ghost)){t.push({target:s,rect:wt(s)});var i=kr({},t[t.length-1].rect);if(s.thisAnimationDuration){var o=gi(s,!0);o&&(i.top-=o.f,i.left-=o.e)}s.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(k9(t,{target:r}),1)},animateAll:function(r){var s=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,h=wt(c),f=c.prevFromRect,d=c.prevToRect,p=a.rect,m=gi(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&fd(f,h)&&!fd(u,h)&&(p.top-h.top)/(p.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(l=$9(p,f,d,s.options)),fd(h,u)||(c.prevFromRect=u,c.prevToRect=h,l||(l=s.options.animation),s.animate(c,p,h,l)),l&&(i=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,s,i,o){if(o){ae(r,"transition",""),ae(r,"transform","");var a=gi(this.el),l=a&&a.a,c=a&&a.d,u=(s.left-i.left)/(l||1),h=(s.top-i.top)/(c||1);r.animatingX=!!u,r.animatingY=!!h,ae(r,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=U9(r),ae(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),ae(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){ae(r,"transition",""),ae(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function U9(t){return t.offsetWidth}function $9(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var Yi=[],pd={initializeByDefault:!0},uc={mount:function(e){for(var n in pd)pd.hasOwnProperty(n)&&!(n in e)&&(e[n]=pd[n]);Yi.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Yi.push(e)},pluginEvent:function(e,n,r){var s=this;this.eventCanceled=!1,r.cancel=function(){s.eventCanceled=!0};var i=e+"Global";Yi.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][i]&&n[o.pluginName][i](kr({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](kr({sortable:n},r)))})},initializePlugins:function(e,n,r,s){Yi.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,Jn(r,c.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,n){var r={};return Yi.forEach(function(s){typeof s.eventProperties=="function"&&Jn(r,s.eventProperties.call(n[s.pluginName],e))}),r},modifyOption:function(e,n,r){var s;return Yi.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[n]=="function"&&(s=i.optionListeners[n].call(e[i.pluginName],r))}),s}};function xa(t){var e=t.sortable,n=t.rootEl,r=t.name,s=t.targetEl,i=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,h=t.newDraggableIndex,f=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[dn],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!is&&!cc?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=s||n,m.clone=i,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=d?d.lastPutMode:void 0;var g=kr(kr({},p),uc.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var j9=["evt"],Cn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.evt,i=I9(r,j9);uc.pluginEvent.bind(Se)(e,n,kr({dragEl:Q,parentEl:xt,ghostEl:ke,rootEl:Et,nextEl:ei,lastDownEl:ou,cloneEl:Ot,cloneHidden:_s,dragStarted:Oa,putSortable:Qt,activeSortable:Se.active,originalEvent:s,oldIndex:ao,oldDraggableIndex:Za,newIndex:Mn,newDraggableIndex:ms,hideGhostForTarget:FC,unhideGhostForTarget:UC,cloneNowHidden:function(){_s=!0},cloneNowShown:function(){_s=!1},dispatchSortableEvent:function(a){bn({sortable:n,name:a,originalEvent:s})}},i))};function bn(t){xa(kr({putSortable:Qt,cloneEl:Ot,targetEl:Q,rootEl:Et,oldIndex:ao,oldDraggableIndex:Za,newIndex:Mn,newDraggableIndex:ms},t))}var Q,xt,ke,Et,ei,ou,Ot,_s,ao,Mn,Za,ms,Hc,Qt,no=!1,ah=!1,lh=[],Xs,Zn,gd,md,k0,M0,Oa,Xi,el,tl=!1,Wc=!1,au,sn,vd=[],Gp=!1,ch=[],wf=typeof document<"u",Kc=xC,L0=cc||is?"cssFloat":"float",B9=wf&&!P9&&!xC&&"draggable"in document.createElement("div"),kC=function(){if(wf){if(is)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),MC=function(e,n){var r=ae(e),s=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Vo(e,0,n),o=Vo(e,1,n),a=i&&ae(i),l=o&&ae(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+wt(i).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+wt(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return i&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=s&&r[L0]==="none"||o&&r[L0]==="none"&&c+u>s)?"vertical":"horizontal"},V9=function(e,n,r){var s=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return s===a||i===l||s+o/2===a+c/2},H9=function(e,n){var r;return lh.some(function(s){var i=s[dn].options.emptyInsertThreshold;if(!(!i||ov(s))){var o=wt(s),a=e>=o.left-i&&e<=o.right+i,l=n>=o.top-i&&n<=o.bottom+i;if(a&&l)return r=s}}),r},LC=function(e){function n(i,o){return function(a,l,c,u){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(i==null&&(o||h))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return n(i(a,l,c,u),o)(a,l,c,u);var f=(o?a:l).options.group.name;return i===!0||typeof i=="string"&&i===f||i.join&&i.indexOf(f)>-1}}var r={},s=e.group;(!s||iu(s)!="object")&&(s={name:s}),r.name=s.name,r.checkPull=n(s.pull,!0),r.checkPut=n(s.put),r.revertClone=s.revertClone,e.group=r},FC=function(){!kC&&ke&&ae(ke,"display","none")},UC=function(){!kC&&ke&&ae(ke,"display","")};wf&&document.addEventListener("click",function(t){if(ah)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ah=!1,!1},!0);var Qs=function(e){if(Q){e=e.touches?e.touches[0]:e;var n=H9(e.clientX,e.clientY);if(n){var r={};for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[dn]._onDragOver(r)}}},W9=function(e){Q&&Q.parentNode[dn]._isOutsideThisEl(e.target)};function Se(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Jn({},e),t[dn]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return MC(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Se.supportPointer!==!1&&"PointerEvent"in window&&!qa,emptyInsertThreshold:5};uc.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);LC(e);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=e.forceFallback?!1:B9,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?je(t,"pointerdown",this._onTapStart):(je(t,"mousedown",this._onTapStart),je(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(je(t,"dragover",this),je(t,"dragenter",this)),lh.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Jn(this,F9())}Se.prototype={constructor:Se,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Xi=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,Q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,s=this.options,i=s.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=s.filter;if(J9(r),!Q&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||s.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&qa&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=tr(l,s.draggable,r,!1),!(l&&l.animated)&&ou!==l)){if(ao=Nt(l),Za=Nt(l,s.draggable),typeof u=="function"){if(u.call(this,e,l,this)){bn({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),Cn("filter",n,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=tr(c,h.trim(),r,!1),h)return bn({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),Cn("filter",n,{evt:e}),!0}),u)){i&&e.cancelable&&e.preventDefault();return}s.handle&&!tr(c,s.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var s=this,i=s.el,o=s.options,a=i.ownerDocument,l;if(r&&!Q&&r.parentNode===i){var c=wt(r);if(Et=i,Q=r,xt=Q.parentNode,ei=Q.nextSibling,ou=r,Hc=o.group,Se.dragged=Q,Xs={target:Q,clientX:(n||e).clientX,clientY:(n||e).clientY},k0=Xs.clientX-c.left,M0=Xs.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,Q.style["will-change"]="all",l=function(){if(Cn("delayEnded",s,{evt:e}),Se.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!x0&&s.nativeDraggable&&(Q.draggable=!0),s._triggerDragStart(e,n),bn({sortable:s,name:"choose",originalEvent:e}),It(Q,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){NC(Q,u.trim(),yd)}),je(a,"dragover",Qs),je(a,"mousemove",Qs),je(a,"touchmove",Qs),je(a,"mouseup",s._onDrop),je(a,"touchend",s._onDrop),je(a,"touchcancel",s._onDrop),x0&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Q.draggable=!0),Cn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(cc||is))){if(Se.eventCanceled){this._onDrop();return}je(a,"mouseup",s._disableDelayedDrag),je(a,"touchend",s._disableDelayedDrag),je(a,"touchcancel",s._disableDelayedDrag),je(a,"mousemove",s._delayedDragTouchMoveHandler),je(a,"touchmove",s._delayedDragTouchMoveHandler),o.supportPointer&&je(a,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Q&&yd(Q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._disableDelayedDrag),Le(e,"touchend",this._disableDelayedDrag),Le(e,"touchcancel",this._disableDelayedDrag),Le(e,"mousemove",this._delayedDragTouchMoveHandler),Le(e,"touchmove",this._delayedDragTouchMoveHandler),Le(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?je(document,"pointermove",this._onTouchMove):n?je(document,"touchmove",this._onTouchMove):je(document,"mousemove",this._onTouchMove):(je(Q,"dragend",this),je(Et,"dragstart",this._onDragStart));try{document.selection?lu(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(no=!1,Et&&Q){Cn("dragStarted",this,{evt:n}),this.nativeDraggable&&je(document,"dragover",W9);var r=this.options;!e&&It(Q,r.dragClass,!1),It(Q,r.ghostClass,!0),Se.active=this,e&&this._appendGhost(),bn({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Zn){this._lastX=Zn.clientX,this._lastY=Zn.clientY,FC();for(var e=document.elementFromPoint(Zn.clientX,Zn.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Zn.clientX,Zn.clientY),e!==n);)n=e;if(Q.parentNode[dn]._isOutsideThisEl(e),n)do{if(n[dn]){var r=void 0;if(r=n[dn]._onDragOver({clientX:Zn.clientX,clientY:Zn.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);UC()}},_onTouchMove:function(e){if(Xs){var n=this.options,r=n.fallbackTolerance,s=n.fallbackOffset,i=e.touches?e.touches[0]:e,o=ke&&gi(ke,!0),a=ke&&o&&o.a,l=ke&&o&&o.d,c=Kc&&sn&&P0(sn),u=(i.clientX-Xs.clientX+s.x)/(a||1)+(c?c[0]-vd[0]:0)/(a||1),h=(i.clientY-Xs.clientY+s.y)/(l||1)+(c?c[1]-vd[1]:0)/(l||1);if(!Se.active&&!no){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(ke){o?(o.e+=u-(gd||0),o.f+=h-(md||0)):o={a:1,b:0,c:0,d:1,e:u,f:h};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");ae(ke,"webkitTransform",f),ae(ke,"mozTransform",f),ae(ke,"msTransform",f),ae(ke,"transform",f),gd=u,md=h,Zn=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ke){var e=this.options.fallbackOnBody?document.body:Et,n=wt(Q,!0,Kc,!0,e),r=this.options;if(Kc){for(sn=e;ae(sn,"position")==="static"&&ae(sn,"transform")==="none"&&sn!==document;)sn=sn.parentNode;sn!==document.body&&sn!==document.documentElement?(sn===document&&(sn=Ar()),n.top+=sn.scrollTop,n.left+=sn.scrollLeft):sn=Ar(),vd=P0(sn)}ke=Q.cloneNode(!0),It(ke,r.ghostClass,!1),It(ke,r.fallbackClass,!0),It(ke,r.dragClass,!0),ae(ke,"transition",""),ae(ke,"transform",""),ae(ke,"box-sizing","border-box"),ae(ke,"margin",0),ae(ke,"top",n.top),ae(ke,"left",n.left),ae(ke,"width",n.width),ae(ke,"height",n.height),ae(ke,"opacity","0.8"),ae(ke,"position",Kc?"absolute":"fixed"),ae(ke,"zIndex","100000"),ae(ke,"pointerEvents","none"),Se.ghost=ke,e.appendChild(ke),ae(ke,"transform-origin",k0/parseInt(ke.style.width)*100+"% "+M0/parseInt(ke.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,s=e.dataTransfer,i=r.options;if(Cn("dragStart",this,{evt:e}),Se.eventCanceled){this._onDrop();return}Cn("setupClone",this),Se.eventCanceled||(Ot=av(Q),Ot.draggable=!1,Ot.style["will-change"]="",this._hideClone(),It(Ot,this.options.chosenClass,!1),Se.clone=Ot),r.cloneId=lu(function(){Cn("clone",r),!Se.eventCanceled&&(r.options.removeCloneOnHide||Et.insertBefore(Ot,Q),r._hideClone(),bn({sortable:r,name:"clone"}))}),!n&&It(Q,i.dragClass,!0),n?(ah=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Le(document,"mouseup",r._onDrop),Le(document,"touchend",r._onDrop),Le(document,"touchcancel",r._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(r,s,Q)),je(document,"drop",r),ae(Q,"transform","translateZ(0)")),no=!0,r._dragStartId=lu(r._dragStarted.bind(r,n,e)),je(document,"selectstart",r),Oa=!0,qa&&ae(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,s,i,o,a=this.options,l=a.group,c=Se.active,u=Hc===l,h=a.sort,f=Qt||c,d,p=this,m=!1;if(Gp)return;function y(oe,$e){Cn(oe,p,kr({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:s,targetRect:i,canSort:h,fromSortable:f,target:r,completed:g,onMove:function(We,Fe){return Gc(Et,n,Q,s,We,wt(We),e,Fe)},changed:E},$e))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function g(oe){return y("dragOverCompleted",{insertion:oe}),oe&&(u?c._hideClone():c._showClone(p),p!==f&&(It(Q,Qt?Qt.options.ghostClass:c.options.ghostClass,!1),It(Q,a.ghostClass,!0)),Qt!==p&&p!==Se.active?Qt=p:p===Se.active&&Qt&&(Qt=null),f===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===Q&&!Q.animated||r===n&&!r.animated)&&(Xi=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(Q.parentNode[dn]._isOutsideThisEl(e.target),!oe&&Qs(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){Mn=Nt(Q),ms=Nt(Q,a.draggable),bn({sortable:p,name:"change",toEl:n,newIndex:Mn,newDraggableIndex:ms,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=tr(r,a.draggable,n,!0),y("dragOver"),Se.eventCanceled)return m;if(Q.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(ah=!1,c&&!a.disabled&&(u?h||(o=xt!==Et):Qt===this||(this.lastPutMode=Hc.checkPull(this,c,Q,e))&&l.checkPut(this,c,Q,e))){if(d=this._getDirection(e,r)==="vertical",s=wt(Q),y("dragOverValid"),Se.eventCanceled)return m;if(o)return xt=Et,v(),this._hideClone(),y("revert"),Se.eventCanceled||(ei?Et.insertBefore(Q,ei):Et.appendChild(Q)),g(!0);var _=ov(n,a.draggable);if(!_||Y9(e,d,this)&&!_.animated){if(_===Q)return g(!1);if(_&&n===e.target&&(r=_),r&&(i=wt(r)),Gc(Et,n,Q,s,r,i,e,!!r)!==!1)return v(),n.appendChild(Q),xt=n,E(),g(!0)}else if(_&&z9(e,d,this)){var T=Vo(n,0,a,!0);if(T===Q)return g(!1);if(r=T,i=wt(r),Gc(Et,n,Q,s,r,i,e,!1)!==!1)return v(),n.insertBefore(Q,T),xt=n,E(),g(!0)}else if(r.parentNode===n){i=wt(r);var S=0,x,I=Q.parentNode!==n,C=!V9(Q.animated&&Q.toRect||s,r.animated&&r.toRect||i,d),P=d?"top":"left",L=N0(r,"top","top")||N0(Q,"top","top"),U=L?L.scrollTop:void 0;Xi!==r&&(x=i[P],tl=!1,Wc=!C&&a.invertSwap||I),S=X9(e,r,i,d,C?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,Wc,Xi===r);var k;if(S!==0){var O=Nt(Q);do O-=S,k=xt.children[O];while(k&&(ae(k,"display")==="none"||k===ke))}if(S===0||k===r)return g(!1);Xi=r,el=S;var J=r.nextElementSibling,j=!1;j=S===1;var q=Gc(Et,n,Q,s,r,i,e,j);if(q!==!1)return(q===1||q===-1)&&(j=q===1),Gp=!0,setTimeout(G9,30),v(),j&&!J?n.appendChild(Q):r.parentNode.insertBefore(Q,j?J:r),L&&DC(L,0,U-L.scrollTop),xt=Q.parentNode,x!==void 0&&!Wc&&(au=Math.abs(x-wt(r)[P])),E(),g(!0)}if(n.contains(Q))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Le(document,"mousemove",this._onTouchMove),Le(document,"touchmove",this._onTouchMove),Le(document,"pointermove",this._onTouchMove),Le(document,"dragover",Qs),Le(document,"mousemove",Qs),Le(document,"touchmove",Qs)},_offUpEvents:function(){var e=this.el.ownerDocument;Le(e,"mouseup",this._onDrop),Le(e,"touchend",this._onDrop),Le(e,"pointerup",this._onDrop),Le(e,"touchcancel",this._onDrop),Le(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(Mn=Nt(Q),ms=Nt(Q,r.draggable),Cn("drop",this,{evt:e}),xt=Q&&Q.parentNode,Mn=Nt(Q),ms=Nt(Q,r.draggable),Se.eventCanceled){this._nulling();return}no=!1,Wc=!1,tl=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),zp(this.cloneId),zp(this._dragStartId),this.nativeDraggable&&(Le(document,"drop",this),Le(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),qa&&ae(document.body,"user-select",""),ae(Q,"transform",""),e&&(Oa&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),ke&&ke.parentNode&&ke.parentNode.removeChild(ke),(Et===xt||Qt&&Qt.lastPutMode!=="clone")&&Ot&&Ot.parentNode&&Ot.parentNode.removeChild(Ot),Q&&(this.nativeDraggable&&Le(Q,"dragend",this),yd(Q),Q.style["will-change"]="",Oa&&!no&&It(Q,Qt?Qt.options.ghostClass:this.options.ghostClass,!1),It(Q,this.options.chosenClass,!1),bn({sortable:this,name:"unchoose",toEl:xt,newIndex:null,newDraggableIndex:null,originalEvent:e}),Et!==xt?(Mn>=0&&(bn({rootEl:xt,name:"add",toEl:xt,fromEl:Et,originalEvent:e}),bn({sortable:this,name:"remove",toEl:xt,originalEvent:e}),bn({rootEl:xt,name:"sort",toEl:xt,fromEl:Et,originalEvent:e}),bn({sortable:this,name:"sort",toEl:xt,originalEvent:e})),Qt&&Qt.save()):Mn!==ao&&Mn>=0&&(bn({sortable:this,name:"update",toEl:xt,originalEvent:e}),bn({sortable:this,name:"sort",toEl:xt,originalEvent:e})),Se.active&&((Mn==null||Mn===-1)&&(Mn=ao,ms=Za),bn({sortable:this,name:"end",toEl:xt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){Cn("nulling",this),Et=Q=xt=ke=ei=Ot=ou=_s=Xs=Zn=Oa=Mn=ms=ao=Za=Xi=el=Qt=Hc=Se.dragged=Se.ghost=Se.clone=Se.active=null,ch.forEach(function(e){e.checked=!0}),ch.length=gd=md=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Q&&(this._onDragOver(e),K9(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,s=0,i=r.length,o=this.options;s<i;s++)n=r[s],tr(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||q9(n));return e},sort:function(e,n){var r={},s=this.el;this.toArray().forEach(function(i,o){var a=s.children[o];tr(a,this.options.draggable,s,!1)&&(r[i]=a)},this),n&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(s.removeChild(r[i]),s.appendChild(r[i]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return tr(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var s=uc.modifyOption(this,e,n);typeof s<"u"?r[e]=s:r[e]=n,e==="group"&&LC(r)},destroy:function(){Cn("destroy",this);var e=this.el;e[dn]=null,Le(e,"mousedown",this._onTapStart),Le(e,"touchstart",this._onTapStart),Le(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Le(e,"dragover",this),Le(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),lh.splice(lh.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!_s){if(Cn("hideClone",this),Se.eventCanceled)return;ae(Ot,"display","none"),this.options.removeCloneOnHide&&Ot.parentNode&&Ot.parentNode.removeChild(Ot),_s=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(_s){if(Cn("showClone",this),Se.eventCanceled)return;Q.parentNode==Et&&!this.options.group.revertClone?Et.insertBefore(Ot,Q):ei?Et.insertBefore(Ot,ei):Et.appendChild(Ot),this.options.group.revertClone&&this.animate(Q,Ot),ae(Ot,"display",""),_s=!1}}};function K9(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Gc(t,e,n,r,s,i,o,a){var l,c=t[dn],u=c.options.onMove,h;return window.CustomEvent&&!is&&!cc?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=s||e,l.relatedRect=i||wt(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(h=u.call(c,l,o)),h}function yd(t){t.draggable=!1}function G9(){Gp=!1}function z9(t,e,n){var r=wt(Vo(n.el,0,n.options,!0)),s=10;return e?t.clientX<r.left-s||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-s||t.clientY<r.bottom&&t.clientX<r.left}function Y9(t,e,n){var r=wt(ov(n.el,n.options.draggable)),s=10;return e?t.clientX>r.right+s||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+s}function X9(t,e,n,r,s,i,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,h=r?n.bottom:n.right,f=!1;if(!o){if(a&&au<c*s){if(!tl&&(el===1?l>u+c*i/2:l<h-c*i/2)&&(tl=!0),tl)f=!0;else if(el===1?l<u+au:l>h-au)return-el}else if(l>u+c*(1-s)/2&&l<h-c*(1-s)/2)return Q9(e)}return f=f||o,f&&(l<u+c*i/2||l>h-c*i/2)?l>u+c/2?1:-1:0}function Q9(t){return Nt(Q)<Nt(t)?1:-1}function q9(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function J9(t){ch.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&ch.push(r)}}function lu(t){return setTimeout(t,0)}function zp(t){return clearTimeout(t)}wf&&je(document,"touchmove",function(t){(Se.active||no)&&t.cancelable&&t.preventDefault()});Se.utils={on:je,off:Le,css:ae,find:NC,is:function(e,n){return!!tr(e,n,e,!1)},extend:M9,throttle:PC,closest:tr,toggleClass:It,clone:av,index:Nt,nextTick:lu,cancelNextTick:zp,detectDirection:MC,getChild:Vo};Se.get=function(t){return t[dn]};Se.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(Se.utils=kr(kr({},Se.utils),r.utils)),uc.mount(r)})};Se.create=function(t,e){return new Se(t,e)};Se.version=N9;var Ft=[],Na,Yp,Xp=!1,Ed,wd,uh,Pa;function Z9(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?je(document,"dragover",this._handleAutoScroll):this.options.supportPointer?je(document,"pointermove",this._handleFallbackAutoScroll):r.touches?je(document,"touchmove",this._handleFallbackAutoScroll):je(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Le(document,"dragover",this._handleAutoScroll):(Le(document,"pointermove",this._handleFallbackAutoScroll),Le(document,"touchmove",this._handleFallbackAutoScroll),Le(document,"mousemove",this._handleFallbackAutoScroll)),F0(),cu(),L9()},nulling:function(){uh=Yp=Na=Xp=Pa=Ed=wd=null,Ft.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var s=this,i=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(i,o);if(uh=n,r||this.options.forceAutoScrollFallback||cc||is||qa){_d(n,this.options,a,r);var l=Ts(a,!0);Xp&&(!Pa||i!==Ed||o!==wd)&&(Pa&&F0(),Pa=setInterval(function(){var c=Ts(document.elementFromPoint(i,o),!0);c!==l&&(l=c,cu()),_d(n,s.options,c,r)},10),Ed=i,wd=o)}else{if(!this.options.bubbleScroll||Ts(a,!0)===Ar()){cu();return}_d(n,this.options,Ts(a,!1),!1)}}},Jn(t,{pluginName:"scroll",initializeByDefault:!0})}function cu(){Ft.forEach(function(t){clearInterval(t.pid)}),Ft=[]}function F0(){clearInterval(Pa)}var _d=PC(function(t,e,n,r){if(e.scroll){var s=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=Ar(),c=!1,u;Yp!==n&&(Yp=n,cu(),Na=e.scroll,u=e.scrollFn,Na===!0&&(Na=Ts(n,!0)));var h=0,f=Na;do{var d=f,p=wt(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,_=p.height,T=void 0,S=void 0,x=d.scrollWidth,I=d.scrollHeight,C=ae(d),P=d.scrollLeft,L=d.scrollTop;d===l?(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"||C.overflowX==="visible"),S=_<I&&(C.overflowY==="auto"||C.overflowY==="scroll"||C.overflowY==="visible")):(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"),S=_<I&&(C.overflowY==="auto"||C.overflowY==="scroll"));var U=T&&(Math.abs(g-s)<=o&&P+E<x)-(Math.abs(v-s)<=o&&!!P),k=S&&(Math.abs(y-i)<=o&&L+_<I)-(Math.abs(m-i)<=o&&!!L);if(!Ft[h])for(var O=0;O<=h;O++)Ft[O]||(Ft[O]={});(Ft[h].vx!=U||Ft[h].vy!=k||Ft[h].el!==d)&&(Ft[h].el=d,Ft[h].vx=U,Ft[h].vy=k,clearInterval(Ft[h].pid),(U!=0||k!=0)&&(c=!0,Ft[h].pid=setInterval(function(){r&&this.layer===0&&Se.active._onTouchMove(uh);var J=Ft[this.layer].vy?Ft[this.layer].vy*a:0,j=Ft[this.layer].vx?Ft[this.layer].vx*a:0;typeof u=="function"&&u.call(Se.dragged.parentNode[dn],j,J,t,uh,Ft[this.layer].el)!=="continue"||DC(Ft[this.layer].el,j,J)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==l&&(f=Ts(f,!1)));Xp=c}},30),$C=function(e){var n=e.originalEvent,r=e.putSortable,s=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||i;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(h)&&(o("spill"),this.onSpill({dragEl:s,putSortable:r}))}};function lv(){}lv.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var s=Vo(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(n,s):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:$C};Jn(lv,{pluginName:"revertOnSpill"});function cv(){}cv.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,s=r||this.sortable;s.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),s.animateAll()},drop:$C};Jn(cv,{pluginName:"removeOnSpill"});var Gn;function eB(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;Gn=r},dragOverValid:function(n){var r=n.completed,s=n.target,i=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(s&&s!==c){var h=Gn;i(s)!==!1?(It(s,u.swapClass,!0),Gn=s):Gn=null,h&&h!==Gn&&It(h,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,s=n.putSortable,i=n.dragEl,o=s||this.sortable,a=this.options;Gn&&It(Gn,a.swapClass,!1),Gn&&(a.swap||s&&s.options.swap)&&i!==Gn&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),tB(i,Gn),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){Gn=null}},Jn(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Gn}}})}function tB(t,e){var n=t.parentNode,r=e.parentNode,s,i;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(s=Nt(t),i=Nt(e),n.isEqualNode(r)&&s<i&&i++,n.insertBefore(e,n.children[s]),r.insertBefore(t,r.children[i]))}var Oe=[],kn=[],ma,er,va=!1,An=!1,Qi=!1,ft,ya,zc;function nB(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?je(document,"pointerup",this._deselectMultiDrag):(je(document,"mouseup",this._deselectMultiDrag),je(document,"touchend",this._deselectMultiDrag)),je(document,"keydown",this._checkKeyDown),je(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(s,i){var o="";Oe.length&&er===e?Oe.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=i.textContent,s.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;ft=r},delayEnded:function(){this.isMultiDrag=~Oe.indexOf(ft)},setupClone:function(n){var r=n.sortable,s=n.cancel;if(this.isMultiDrag){for(var i=0;i<Oe.length;i++)kn.push(av(Oe[i])),kn[i].sortableIndex=Oe[i].sortableIndex,kn[i].draggable=!1,kn[i].style["will-change"]="",It(kn[i],this.options.selectedClass,!1),Oe[i]===ft&&It(kn[i],this.options.chosenClass,!1);r._hideClone(),s()}},clone:function(n){var r=n.sortable,s=n.rootEl,i=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Oe.length&&er===r&&(U0(!0,s),i("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,s=n.rootEl,i=n.cancel;this.isMultiDrag&&(U0(!1,s),kn.forEach(function(o){ae(o,"display","")}),r(),zc=!1,i())},hideClone:function(n){var r=this;n.sortable;var s=n.cloneNowHidden,i=n.cancel;this.isMultiDrag&&(kn.forEach(function(o){ae(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),s(),zc=!0,i())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&er&&er.multiDrag._deselectMultiDrag(),Oe.forEach(function(r){r.sortableIndex=Nt(r)}),Oe=Oe.sort(function(r,s){return r.sortableIndex-s.sortableIndex}),Qi=!0},dragStarted:function(n){var r=this,s=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(s.captureAnimationState(),this.options.animation)){Oe.forEach(function(o){o!==ft&&ae(o,"position","absolute")});var i=wt(ft,!1,!0,!0);Oe.forEach(function(o){o!==ft&&D0(o,i)}),An=!0,va=!0}s.animateAll(function(){An=!1,va=!1,r.options.animation&&Oe.forEach(function(o){dd(o)}),r.options.sort&&Yc()})}},dragOver:function(n){var r=n.target,s=n.completed,i=n.cancel;An&&~Oe.indexOf(r)&&(s(!1),i())},revert:function(n){var r=n.fromSortable,s=n.rootEl,i=n.sortable,o=n.dragRect;Oe.length>1&&(Oe.forEach(function(a){i.addAnimationState({target:a,rect:An?wt(a):o}),dd(a),a.fromRect=o,r.removeAnimationState(a)}),An=!1,rB(!this.options.removeCloneOnHide,s))},dragOverCompleted:function(n){var r=n.sortable,s=n.isOwner,i=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(i){if(s&&o._hideClone(),va=!1,c.animation&&Oe.length>1&&(An||!s&&!o.options.sort&&!l)){var u=wt(ft,!1,!0,!0);Oe.forEach(function(f){f!==ft&&(D0(f,u),a.appendChild(f))}),An=!0}if(!s)if(An||Yc(),Oe.length>1){var h=zc;o._showClone(r),o.options.animation&&!zc&&h&&kn.forEach(function(f){o.addAnimationState({target:f,rect:ya}),f.fromRect=ya,f.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,s=n.isOwner,i=n.activeSortable;if(Oe.forEach(function(a){a.thisAnimationDuration=null}),i.options.animation&&!s&&i.multiDrag.isMultiDrag){ya=Jn({},r);var o=gi(ft,!0);ya.top-=o.f,ya.left-=o.e}},dragOverAnimationComplete:function(){An&&(An=!1,Yc())},drop:function(n){var r=n.originalEvent,s=n.rootEl,i=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var h=this.options,f=i.children;if(!Qi)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),It(ft,h.selectedClass,!~Oe.indexOf(ft)),~Oe.indexOf(ft))Oe.splice(Oe.indexOf(ft),1),ma=null,xa({sortable:o,rootEl:s,name:"deselect",targetEl:ft,originalEvt:r});else{if(Oe.push(ft),xa({sortable:o,rootEl:s,name:"select",targetEl:ft,originalEvt:r}),r.shiftKey&&ma&&o.el.contains(ma)){var d=Nt(ma),p=Nt(ft);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~Oe.indexOf(f[y])||(It(f[y],h.selectedClass,!0),Oe.push(f[y]),xa({sortable:o,rootEl:s,name:"select",targetEl:f[y],originalEvt:r}))}}else ma=ft;er=u}if(Qi&&this.isMultiDrag){if(An=!1,(i[dn].options.sort||i!==s)&&Oe.length>1){var v=wt(ft),g=Nt(ft,":not(."+this.options.selectedClass+")");if(!va&&h.animation&&(ft.thisAnimationDuration=null),u.captureAnimationState(),!va&&(h.animation&&(ft.fromRect=v,Oe.forEach(function(_){if(_.thisAnimationDuration=null,_!==ft){var T=An?wt(_):v;_.fromRect=T,u.addAnimationState({target:_,rect:T})}})),Yc(),Oe.forEach(function(_){f[g]?i.insertBefore(_,f[g]):i.appendChild(_),g++}),l===Nt(ft))){var E=!1;Oe.forEach(function(_){if(_.sortableIndex!==Nt(_)){E=!0;return}}),E&&a("update")}Oe.forEach(function(_){dd(_)}),u.animateAll()}er=u}(s===i||c&&c.lastPutMode!=="clone")&&kn.forEach(function(_){_.parentNode&&_.parentNode.removeChild(_)})}},nullingGlobal:function(){this.isMultiDrag=Qi=!1,kn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Le(document,"pointerup",this._deselectMultiDrag),Le(document,"mouseup",this._deselectMultiDrag),Le(document,"touchend",this._deselectMultiDrag),Le(document,"keydown",this._checkKeyDown),Le(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof Qi<"u"&&Qi)&&er===this.sortable&&!(n&&tr(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;Oe.length;){var r=Oe[0];It(r,this.options.selectedClass,!1),Oe.shift(),xa({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Jn(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[dn];!r||!r.options.multiDrag||~Oe.indexOf(n)||(er&&er!==r&&(er.multiDrag._deselectMultiDrag(),er=r),It(n,r.options.selectedClass,!0),Oe.push(n))},deselect:function(n){var r=n.parentNode[dn],s=Oe.indexOf(n);!r||!r.options.multiDrag||!~s||(It(n,r.options.selectedClass,!1),Oe.splice(s,1))}},eventProperties:function(){var n=this,r=[],s=[];return Oe.forEach(function(i){r.push({multiDragElement:i,index:i.sortableIndex});var o;An&&i!==ft?o=-1:An?o=Nt(i,":not(."+n.options.selectedClass+")"):o=Nt(i),s.push({multiDragElement:i,index:o})}),{items:C9(Oe),clones:[].concat(kn),oldIndicies:r,newIndicies:s}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function rB(t,e){Oe.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function U0(t,e){kn.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function Yc(){Oe.forEach(function(t){t!==ft&&t.parentNode&&t.parentNode.removeChild(t)})}Se.mount(new Z9);Se.mount(cv,lv);const sB=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:nB,Sortable:Se,Swap:eB,default:Se},Symbol.toStringTag,{value:"Module"})),iB=CC(sB);(function(t,e){(function(r,s){t.exports=s(oa,iB)})(typeof self<"u"?self:fj,function(n,r){return function(s){var i={};function o(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return s[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=i,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(h){return a[h]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(s,i,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",s.exports=String(c)==="[object z]"},"0366":function(s,i,o){var a=o("1c0b");s.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(h){return l.call(c,h)};case 2:return function(h,f){return l.call(c,h,f)};case 3:return function(h,f,d){return l.call(c,h,f,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(s,i,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(f){try{return l(f)}catch{return u.slice()}};s.exports.f=function(d){return u&&c.call(d)=="[object Window]"?h(d):l(a(d))}},"06cf":function(s,i,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),h=o("c04e"),f=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;i.f=a?p:function(y,v){if(y=u(y),v=h(v,!0),d)try{return p(y,v)}catch{}if(f(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("cc12");s.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(s,i,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),h=c("reduce"),f=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!h||!f},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(s,i,o){var a=o("c6b6"),l=o("9263");s.exports=function(c,u){var h=c.exec;if(typeof h=="function"){var f=h.call(c,u);if(typeof f!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return f}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var h in l){var f=a[h],d=f&&f.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(s,i,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),h=c("forEach");s.exports=!u||!h?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(s,i,o){var a=o("d066");s.exports=a("document","documentElement")},"1c0b":function(s,i){s.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(s,i,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,h={next:function(){return{done:!!u++}},return:function(){c=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch{}s.exports=function(f,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},f(m)}catch{}return p}},"1d80":function(s,i){s.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(s,i,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");s.exports=function(h){return c>=51||!a(function(){var f=[],d=f.constructor={};return d[u]=function(){return{foo:1}},f[h](Boolean).foo!==1})}},"23cb":function(s,i,o){var a=o("a691"),l=Math.max,c=Math.min;s.exports=function(u,h){var f=a(u);return f<0?l(f+h,0):c(f,h)}},"23e7":function(s,i,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),h=o("ce4e"),f=o("e893"),d=o("94ca");s.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,_,T,S,x,I;if(v?_=a:g?_=a[y]||h(y,{}):_=(a[y]||{}).prototype,_)for(T in m){if(x=m[T],p.noTargetGet?(I=l(_,T),S=I&&I.value):S=_[T],E=d(v?T:y+(g?".":"#")+T,p.forced),!E&&S!==void 0){if(typeof x==typeof S)continue;f(x,S)}(p.sham||S&&S.sham)&&c(x,"sham",!0),u(_,T,x,p)}}},"241c":function(s,i,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");i.f=Object.getOwnPropertyNames||function(h){return a(h,c)}},"25f0":function(s,i,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=h;(p||m)&&a(RegExp.prototype,h,function(){var v=l(this),g=String(v.source),E=v.flags,_=String(E===void 0&&v instanceof RegExp&&!("flags"in f)?u.call(v):E);return"/"+g+"/"+_},{unsafe:!0})},"2ca0":function(s,i,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),h=o("1d80"),f=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=f("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var _=String(h(this));u(E);var T=c(m(arguments.length>1?arguments[1]:void 0,_.length)),S=String(E);return p?p.call(_,S,T):_.slice(T,T+S.length)===S}})},"2d00":function(s,i,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,h=u&&u.v8,f,d;h?(f=h.split("."),d=f[0]+f[1]):l&&(f=l.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=l.match(/Chrome\/(\d+)/),f&&(d=f[1]))),s.exports=d&&+d},"342f":function(s,i,o){var a=o("d066");s.exports=a("navigator","userAgent")||""},"35a1":function(s,i,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");s.exports=function(h){if(h!=null)return h[u]||h["@@iterator"]||l[a(h)]}},"37e8":function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");s.exports=a?Object.defineProperties:function(f,d){c(f);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(f,v=p[y++],d[v]);return f}},"3bbe":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(s,i,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",h=l.set,f=l.getterFor(u);c(String,"String",function(d){h(this,{type:u,string:String(d),index:0})},function(){var p=f(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(s,i){s.exports={}},4160:function(s,i,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(s,i,o){var a=o("da84");s.exports=a},"44ad":function(s,i,o){var a=o("d039"),l=o("c6b6"),c="".split;s.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(s,i,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),h=Array.prototype;h[u]==null&&c.f(h,u,{configurable:!0,value:l(null)}),s.exports=function(f){h[u][f]=!0}},"44e7":function(s,i,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");s.exports=function(h){var f;return a(h)&&((f=h[u])!==void 0?!!f:l(h)=="RegExp")}},4930:function(s,i,o){var a=o("d039");s.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(s,i,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(h){return function(f,d,p){var m=a(f),y=l(m.length),v=c(p,y),g;if(h&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((h||v in m)&&m[v]===d)return h||v||0;return!h&&-1}};s.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(s,i,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),h=c("filter"),f=u("filter");a({target:"Array",proto:!0,forced:!h||!f},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(s,i,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),h=o("50c4"),f=o("8418"),d=o("35a1");s.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,_=E!==void 0,T=d(y),S=0,x,I,C,P,L,U;if(_&&(E=a(E,g>2?arguments[2]:void 0,2)),T!=null&&!(v==Array&&u(T)))for(P=T.call(y),L=P.next,I=new v;!(C=L.call(P)).done;S++)U=_?c(P,E,[C.value,S],!0):C.value,f(I,S,U);else for(x=h(y.length),I=new v(x);x>S;S++)U=_?E(y[S],S):y[S],f(I,S,U);return I.length=S,I}},"4fad":function(s,i,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(s,i,o){var a=o("a691"),l=Math.min;s.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(s,i){var o={}.hasOwnProperty;s.exports=function(a,l){return o.call(a,l)}},5319:function(s,i,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),h=o("a691"),f=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,_=function(T){return T===void 0?T:String(T)};a("replace",2,function(T,S,x,I){var C=I.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,P=I.REPLACE_KEEPS_$0,L=C?"$":"$0";return[function(O,J){var j=f(this),q=O==null?void 0:O[T];return q!==void 0?q.call(O,j,J):S.call(String(j),O,J)},function(k,O){if(!C&&P||typeof O=="string"&&O.indexOf(L)===-1){var J=x(S,k,this,O);if(J.done)return J.value}var j=l(k),q=String(this),oe=typeof O=="function";oe||(O=String(O));var $e=j.global;if($e){var dt=j.unicode;j.lastIndex=0}for(var We=[];;){var Fe=p(j,q);if(Fe===null||(We.push(Fe),!$e))break;var ht=String(Fe[0]);ht===""&&(j.lastIndex=d(q,u(j.lastIndex),dt))}for(var St="",M=0,G=0;G<We.length;G++){Fe=We[G];for(var H=String(Fe[0]),ne=m(y(h(Fe.index),q.length),0),Te=[],Xe=1;Xe<Fe.length;Xe++)Te.push(_(Fe[Xe]));var Ie=Fe.groups;if(oe){var w=[H].concat(Te,ne,q);Ie!==void 0&&w.push(Ie);var b=String(O.apply(void 0,w))}else b=U(H,q,ne,Te,Ie,O);ne>=M&&(St+=q.slice(M,ne)+b,M=ne+H.length)}return St+q.slice(M)}];function U(k,O,J,j,q,oe){var $e=J+k.length,dt=j.length,We=E;return q!==void 0&&(q=c(q),We=g),S.call(oe,We,function(Fe,ht){var St;switch(ht.charAt(0)){case"$":return"$";case"&":return k;case"`":return O.slice(0,J);case"'":return O.slice($e);case"<":St=q[ht.slice(1,-1)];break;default:var M=+ht;if(M===0)return Fe;if(M>dt){var G=v(M/10);return G===0?Fe:G<=dt?j[G-1]===void 0?ht.charAt(1):j[G-1]+ht.charAt(1):Fe}St=j[M-1]}return St===void 0?"":St})}})},5692:function(s,i,o){var a=o("c430"),l=o("c6cd");(s.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(s,i,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");s.exports=a("Reflect","ownKeys")||function(f){var d=l.f(u(f)),p=c.f;return p?d.concat(p(f)):d}},"5a34":function(s,i,o){var a=o("44e7");s.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(s,i){s.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(s,i,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),h=o("1c0b"),f=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return h(p),v=f(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(s,i,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(h,f){var d=String(l(h)),p=a(f),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};s.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(s,i,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");s.exports=function(h,f){var d;return l(h)&&(d=h.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(f===0?0:f)}},"69f3":function(s,i,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),h=o("5135"),f=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(C){return v(C)?y(C):m(C,{})},E=function(C){return function(P){var L;if(!c(P)||(L=y(P)).type!==C)throw TypeError("Incompatible receiver, "+C+" required");return L}};if(a){var _=new p,T=_.get,S=_.has,x=_.set;m=function(C,P){return x.call(_,C,P),P},y=function(C){return T.call(_,C)||{}},v=function(C){return S.call(_,C)}}else{var I=f("state");d[I]=!0,m=function(C,P){return u(C,I,P),P},y=function(C){return h(C,I)?C[I]:{}},v=function(C){return h(C,I)}}s.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(s,i,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),h=o("8925"),f=o("69f3"),d=f.get,p=f.enforce,m=String(String).split("String");(s.exports=function(y,v,g,E){var _=E?!!E.unsafe:!1,T=E?!!E.enumerable:!1,S=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){T?y[v]=g:u(v,g);return}else _?!S&&y[v]&&(T=!0):delete y[v];T?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||h(this)})},"6f53":function(s,i,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,h=function(f){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(f?[E,p[E]]:p[E]);return g}};s.exports={entries:h(!0),values:h(!1)}},"73d9":function(s,i,o){var a=o("44d2");a("flatMap")},7418:function(s,i){i.f=Object.getOwnPropertySymbols},"746f":function(s,i,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;s.exports=function(h){var f=a.Symbol||(a.Symbol={});l(f,h)||u(f,h,{value:c.f(h)})}},7839:function(s,i){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(s,i,o){var a=o("1d80");s.exports=function(l){return Object(a(l))}},"7c73":function(s,i,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),h=o("1be4"),f=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},_=function(C){return m+v+p+C+m+"/"+v+p},T=function(C){C.write(_("")),C.close();var P=C.parentWindow.Object;return C=null,P},S=function(){var C=f("iframe"),P="java"+v+":",L;return C.style.display="none",h.appendChild(C),C.src=String(P),L=C.contentWindow.document,L.open(),L.write(_("document.F=Object")),L.close(),L.F},x,I=function(){try{x=document.domain&&new ActiveXObject("htmlfile")}catch{}I=x?T(x):S();for(var C=c.length;C--;)delete I[y][c[C]];return I()};u[g]=!0,s.exports=Object.create||function(P,L){var U;return P!==null?(E[y]=a(P),U=new E,E[y]=null,U[g]=P):U=I(),L===void 0?U:l(U,L)}},"7dd0":function(s,i,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),h=o("d44e"),f=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,_=p("iterator"),T="keys",S="values",x="entries",I=function(){return this};s.exports=function(C,P,L,U,k,O,J){l(L,P,U);var j=function(G){if(G===k&&We)return We;if(!E&&G in $e)return $e[G];switch(G){case T:return function(){return new L(this,G)};case S:return function(){return new L(this,G)};case x:return function(){return new L(this,G)}}return function(){return new L(this)}},q=P+" Iterator",oe=!1,$e=C.prototype,dt=$e[_]||$e["@@iterator"]||k&&$e[k],We=!E&&dt||j(k),Fe=P=="Array"&&$e.entries||dt,ht,St,M;if(Fe&&(ht=c(Fe.call(new C)),g!==Object.prototype&&ht.next&&(!m&&c(ht)!==g&&(u?u(ht,g):typeof ht[_]!="function"&&f(ht,_,I)),h(ht,q,!0,!0),m&&(y[q]=I))),k==S&&dt&&dt.name!==S&&(oe=!0,We=function(){return dt.call(this)}),(!m||J)&&$e[_]!==We&&f($e,_,We),y[P]=We,k)if(St={values:j(S),keys:O?We:j(T),entries:j(x)},J)for(M in St)(E||oe||!(M in $e))&&d($e,M,St[M]);else a({target:P,proto:!0,forced:E||oe},St);return St}},"7f9a":function(s,i,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;s.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(s,i,o){var a=o("d039");s.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(s,i,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");s.exports=function(u,h,f){var d=a(h);d in u?l.f(u,d,c(0,f)):u[d]=f}},"861d":function(s,i){s.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(s,i,o){var a,l,c;(function(u,h){l=[],a=h,c=typeof a=="function"?a.apply(i,l):a,c!==void 0&&(s.exports=c)})(typeof self<"u"?self:this,function(){function u(){var h=Object.getOwnPropertyDescriptor(document,"currentScript");if(!h&&"currentScript"in document&&document.currentScript||h&&h.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var f=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=f.exec(x.stack)||d.exec(x.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,_,T=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),_=g.replace(E,"$1").trim());for(var S=0;S<T.length;S++)if(T[S].readyState==="interactive"||T[S].src===m||m===v&&T[S].innerHTML&&T[S].innerHTML.trim()===_)return T[S];return null}}return u})},8925:function(s,i,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),s.exports=a.inspectSource},"8aa5":function(s,i,o){var a=o("6547").charAt;s.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(s,i){s.exports=n},"90e3":function(s,i){var o=0,a=Math.random();s.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");s.exports=a?function(u,h,f){return l.f(u,h,c(1,f))}:function(u,h,f){return u[h]=f,u}},9263:function(s,i,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,h=c,f=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=f||p||d;m&&(h=function(v){var g=this,E,_,T,S,x=d&&g.sticky,I=a.call(g),C=g.source,P=0,L=v;return x&&(I=I.replace("y",""),I.indexOf("g")===-1&&(I+="g"),L=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(C="(?: "+C+")",L=" "+L,P++),_=new RegExp("^(?:"+C+")",I)),p&&(_=new RegExp("^"+C+"$(?!\\s)",I)),f&&(E=g.lastIndex),T=c.call(x?_:g,L),x?T?(T.input=T.input.slice(P),T[0]=T[0].slice(P),T.index=g.lastIndex,g.lastIndex+=T[0].length):g.lastIndex=0:f&&T&&(g.lastIndex=g.global?T.index+T[0].length:E),p&&T&&T.length>1&&u.call(T[0],_,function(){for(S=1;S<arguments.length-2;S++)arguments[S]===void 0&&(T[S]=void 0)}),T}),s.exports=h},"94ca":function(s,i,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=h[u(p)];return y==d?!0:y==f?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},h=c.data={},f=c.NATIVE="N",d=c.POLYFILL="P";s.exports=c},"99af":function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),h=o("7b0b"),f=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,_="Maximum allowed index exceeded",T=v>=51||!l(function(){var C=[];return C[g]=!1,C.concat()[0]!==C}),S=m("concat"),x=function(C){if(!u(C))return!1;var P=C[g];return P!==void 0?!!P:c(C)},I=!T||!S;a({target:"Array",proto:!0,forced:I},{concat:function(P){var L=h(this),U=p(L,0),k=0,O,J,j,q,oe;for(O=-1,j=arguments.length;O<j;O++)if(oe=O===-1?L:arguments[O],x(oe)){if(q=f(oe.length),k+q>E)throw TypeError(_);for(J=0;J<q;J++,k++)J in oe&&d(U,k,oe[J])}else{if(k>=E)throw TypeError(_);d(U,k++,oe)}return U.length=k,U}})},"9bdd":function(s,i,o){var a=o("825a");s.exports=function(l,c,u,h){try{return h?c(a(u)[0],u[1]):c(u)}catch(d){var f=l.return;throw f!==void 0&&a(f.call(l)),d}}},"9bf2":function(s,i,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),h=Object.defineProperty;i.f=a?h:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return h(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(s,i,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),h=o("3f8c"),f=function(){return this};s.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),h[y]=f,d}},"9f7f":function(s,i,o){var a=o("d039");function l(c,u){return RegExp(c,u)}i.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),i.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(s,i,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(h,f,d,p,m,y,v,g){for(var E=m,_=0,T=v?c(v,g,3):!1,S;_<p;){if(_ in d){if(S=T?T(d[_],_,f):d[_],y>0&&a(S))E=u(h,f,S,l(S.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");h[E]=S}E++}_++}return E};s.exports=u},a352:function(s,i){s.exports=r},a434:function(s,i,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),h=o("7b0b"),f=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,_=9007199254740991,T="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(x,I){var C=h(this),P=u(C.length),L=l(x,P),U=arguments.length,k,O,J,j,q,oe;if(U===0?k=O=0:U===1?(k=0,O=P-L):(k=U-2,O=E(g(c(I),0),P-L)),P+k-O>_)throw TypeError(T);for(J=f(C,O),j=0;j<O;j++)q=L+j,q in C&&d(J,j,C[q]);if(J.length=O,k<O){for(j=L;j<P-O;j++)q=j+O,oe=j+k,q in C?C[oe]=C[q]:delete C[oe];for(j=P;j>P-O+k;j--)delete C[j-1]}else if(k>O)for(j=P-O;j>L;j--)q=j+O-1,oe=j+k-1,q in C?C[oe]=C[q]:delete C[oe];for(j=0;j<k;j++)C[j+L]=arguments[j+2];return C.length=P-O+k,J}})},a4d3:function(s,i,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),h=o("83ab"),f=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),_=o("fc6a"),T=o("c04e"),S=o("5c6c"),x=o("7c73"),I=o("df75"),C=o("241c"),P=o("057f"),L=o("7418"),U=o("06cf"),k=o("9bf2"),O=o("d1e7"),J=o("9112"),j=o("6eeb"),q=o("5692"),oe=o("f772"),$e=o("d012"),dt=o("90e3"),We=o("b622"),Fe=o("e538"),ht=o("746f"),St=o("d44e"),M=o("69f3"),G=o("b727").forEach,H=oe("hidden"),ne="Symbol",Te="prototype",Xe=We("toPrimitive"),Ie=M.set,w=M.getterFor(ne),b=Object[Te],N=l.Symbol,F=c("JSON","stringify"),$=U.f,K=k.f,Z=P.f,X=O.f,Y=q("symbols"),B=q("op-symbols"),ce=q("string-to-symbol-registry"),ie=q("symbol-to-string-registry"),ue=q("wks"),Ee=l.QObject,Pe=!Ee||!Ee[Te]||!Ee[Te].findChild,Ze=h&&p(function(){return x(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a!=7})?function(Ce,he,_e){var Ve=$(b,he);Ve&&delete b[he],K(Ce,he,_e),Ve&&Ce!==b&&K(b,he,Ve)}:K,Ke=function(Ce,he){var _e=Y[Ce]=x(N[Te]);return Ie(_e,{type:ne,tag:Ce,description:he}),h||(_e.description=he),_e},A=d?function(Ce){return typeof Ce=="symbol"}:function(Ce){return Object(Ce)instanceof N},R=function(he,_e,Ve){he===b&&R(B,_e,Ve),g(he);var Qe=T(_e,!0);return g(Ve),m(Y,Qe)?(Ve.enumerable?(m(he,H)&&he[H][Qe]&&(he[H][Qe]=!1),Ve=x(Ve,{enumerable:S(0,!1)})):(m(he,H)||K(he,H,S(1,{})),he[H][Qe]=!0),Ze(he,Qe,Ve)):K(he,Qe,Ve)},D=function(he,_e){g(he);var Ve=_(_e),Qe=I(Ve).concat(De(Ve));return G(Qe,function(In){(!h||re.call(Ve,In))&&R(he,In,Ve[In])}),he},V=function(he,_e){return _e===void 0?x(he):D(x(he),_e)},re=function(he){var _e=T(he,!0),Ve=X.call(this,_e);return this===b&&m(Y,_e)&&!m(B,_e)?!1:Ve||!m(this,_e)||!m(Y,_e)||m(this,H)&&this[H][_e]?Ve:!0},we=function(he,_e){var Ve=_(he),Qe=T(_e,!0);if(!(Ve===b&&m(Y,Qe)&&!m(B,Qe))){var In=$(Ve,Qe);return In&&m(Y,Qe)&&!(m(Ve,H)&&Ve[H][Qe])&&(In.enumerable=!0),In}},ge=function(he){var _e=Z(_(he)),Ve=[];return G(_e,function(Qe){!m(Y,Qe)&&!m($e,Qe)&&Ve.push(Qe)}),Ve},De=function(he){var _e=he===b,Ve=Z(_e?B:_(he)),Qe=[];return G(Ve,function(In){m(Y,In)&&(!_e||m(b,In))&&Qe.push(Y[In])}),Qe};if(f||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor");var he=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),_e=dt(he),Ve=function(Qe){this===b&&Ve.call(B,Qe),m(this,H)&&m(this[H],_e)&&(this[H][_e]=!1),Ze(this,_e,S(1,Qe))};return h&&Pe&&Ze(b,_e,{configurable:!0,set:Ve}),Ke(_e,he)},j(N[Te],"toString",function(){return w(this).tag}),j(N,"withoutSetter",function(Ce){return Ke(dt(Ce),Ce)}),O.f=re,k.f=R,U.f=we,C.f=P.f=ge,L.f=De,Fe.f=function(Ce){return Ke(We(Ce),Ce)},h&&(K(N[Te],"description",{configurable:!0,get:function(){return w(this).description}}),u||j(b,"propertyIsEnumerable",re,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:N}),G(I(ue),function(Ce){ht(Ce)}),a({target:ne,stat:!0,forced:!f},{for:function(Ce){var he=String(Ce);if(m(ce,he))return ce[he];var _e=N(he);return ce[he]=_e,ie[_e]=he,_e},keyFor:function(he){if(!A(he))throw TypeError(he+" is not a symbol");if(m(ie,he))return ie[he]},useSetter:function(){Pe=!0},useSimple:function(){Pe=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!h},{create:V,defineProperty:R,defineProperties:D,getOwnPropertyDescriptor:we}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:ge,getOwnPropertySymbols:De}),a({target:"Object",stat:!0,forced:p(function(){L.f(1)})},{getOwnPropertySymbols:function(he){return L.f(E(he))}}),F){var yt=!f||p(function(){var Ce=N();return F([Ce])!="[null]"||F({a:Ce})!="{}"||F(Object(Ce))!="{}"});a({target:"JSON",stat:!0,forced:yt},{stringify:function(he,_e,Ve){for(var Qe=[he],In=1,_f;arguments.length>In;)Qe.push(arguments[In++]);if(_f=_e,!(!v(_e)&&he===void 0||A(he)))return y(_e)||(_e=function(VC,fc){if(typeof _f=="function"&&(fc=_f.call(this,VC,fc)),!A(fc))return fc}),Qe[1]=_e,F.apply(null,Qe)}})}N[Te][Xe]||J(N[Te],Xe,N[Te].valueOf),St(N,ne),$e[H]=!0},a630:function(s,i,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(h){Array.from(h)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(s,i,o){var a=o("d039");s.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(s,i){var o=Math.ceil,a=Math.floor;s.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(s,i,o){var a=o("b622"),l=a("match");s.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(s,i,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(s,i,o){var a=o("825a");s.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,h={},f=function(d){throw d};s.exports=function(d,p){if(c(h,d))return h[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:f,g=c(p,1)?p[1]:void 0;return h[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:f}):E[1]=1,m.call(E,v,g)})}},ae93:function(s,i,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),h=o("c430"),f=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!h&&!c(m,f)&&l(m,f,p),s.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(s,i,o){var a=o("00ee"),l=o("f5df");s.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(s,i,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,h=/^\s*function ([^ (]*)/,f="name";a&&!(f in c)&&l(c,f,{configurable:!0,get:function(){try{return u.call(this).match(h)[1]}catch{return""}}})},b622:function(s,i,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),h=o("4930"),f=o("fdbf"),d=l("wks"),p=a.Symbol,m=f?p:p&&p.withoutSetter||u;s.exports=function(y){return c(d,y)||(h&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(s,i,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),h=u(function(){c(1)});a({target:"Object",stat:!0,forced:h},{keys:function(d){return c(l(d))}})},b727:function(s,i,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),h=o("65f0"),f=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,_=p==5||E;return function(T,S,x,I){for(var C=c(T),P=l(C),L=a(S,x,3),U=u(P.length),k=0,O=I||h,J=m?O(T,U):y?O(T,0):void 0,j,q;U>k;k++)if((_||k in P)&&(j=P[k],q=L(j,k,C),p)){if(m)J[k]=q;else if(q)switch(p){case 3:return!0;case 5:return j;case 6:return k;case 2:f.call(J,j)}else if(g)return!1}return E?-1:v||g?g:J}};s.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(s,i,o){var a=o("861d");s.exports=function(l,c){if(!a(l))return l;var u,h;if(c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(h=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l)))return h;throw TypeError("Can't convert object to primitive value")}},c430:function(s,i){s.exports=!1},c6b6:function(s,i){var o={}.toString;s.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(s,i,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});s.exports=u},c740:function(s,i,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),h="findIndex",f=!0,d=u(h);h in[]&&Array(1)[h](function(){f=!1}),a({target:"Array",proto:!0,forced:f||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(h)},c8ba:function(s,i){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}s.exports=o},c975:function(s,i,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),h=[].indexOf,f=!!h&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:f||!d||!p},{indexOf:function(y){return f?h.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(s,i,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");s.exports=function(h,f){var d=l(h),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;f.length>p;)a(d,y=f[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(s,i,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),h=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!h},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(s,i,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);s.exports=function(h){return u?c.createElement(h):{}}},ce4e:function(s,i,o){var a=o("da84"),l=o("9112");s.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(s,i){s.exports={}},d039:function(s,i){s.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(s,i,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};s.exports=function(u,h){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][h]||l[u]&&l[u][h]}},d1e7:function(s,i,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);i.f=c?function(h){var f=l(this,h);return!!f&&f.enumerable}:a},d28b:function(s,i,o){var a=o("746f");a("iterator")},d2bb:function(s,i,o){var a=o("825a"),l=o("3bbe");s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},h;try{h=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,h.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?h.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(s,i,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(s,i,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");s.exports=function(h,f,d){h&&!l(h=d?h:h.prototype,u)&&a(h,u,{configurable:!0,value:f})}},d58f:function(s,i,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),h=function(f){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),_=f?E-1:0,T=f?-1:1;if(m<2)for(;;){if(_ in g){y=g[_],_+=T;break}if(_+=T,f?_<0:E<=_)throw TypeError("Reduce of empty array with no initial value")}for(;f?_>=0:E>_;_+=T)_ in g&&(y=p(y,g[_],_,v));return y}};s.exports={left:h(!1),right:h(!0)}},d784:function(s,i,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),h=o("9112"),f=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var _="ab".split(g);return _.length!==2||_[0]!=="a"||_[1]!=="b"});s.exports=function(g,E,_,T){var S=c(g),x=!l(function(){var k={};return k[S]=function(){return 7},""[g](k)!=7}),I=x&&!l(function(){var k=!1,O=/a/;return g==="split"&&(O={},O.constructor={},O.constructor[f]=function(){return O},O.flags="",O[S]=/./[S]),O.exec=function(){return k=!0,null},O[S](""),!k});if(!x||!I||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var C=/./[S],P=_(S,""[g],function(k,O,J,j,q){return O.exec===u?x&&!q?{done:!0,value:C.call(O,J,j)}:{done:!0,value:k.call(J,O,j)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),L=P[0],U=P[1];a(String.prototype,g,L),a(RegExp.prototype,S,E==2?function(k,O){return U.call(k,this,O)}:function(k){return U.call(k,this)})}T&&h(RegExp.prototype[S],"sham",!0)}},d81d:function(s,i,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),h=c("map"),f=u("map");a({target:"Array",proto:!0,forced:!h||!f},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(s,i,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};s.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),h=o("06cf"),f=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=h.f,v=c(m),g={},E=0,_,T;v.length>E;)T=y(m,_=v[E++]),T!==void 0&&f(g,_,T);return g}})},dbf1:function(s,i,o){(function(a){o.d(i,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),h=o("b622"),f=h("iterator"),d=h("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[f]!==p)try{u(v,f,p)}catch{v[f]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(s,i,o){var a=o("ca84"),l=o("7839");s.exports=Object.keys||function(u){return a(u,l)}},e01a:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),h=o("861d"),f=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var S=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),x=this instanceof y?new p(S):S===void 0?p():p(S);return S===""&&(m[x]=!0),x};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",_=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var S=h(this)?this.valueOf():this,x=g.call(S);if(u(m,S))return"";var I=E?x.slice(7,-1):x.replace(_,"$1");return I===""?void 0:I}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(s,i,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),h=c("IE_PROTO"),f=Object.prototype;s.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,h)?d[h]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?f:null}},e177:function(s,i,o){var a=o("d039");s.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(s,i,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),h=o("7dd0"),f="Array Iterator",d=u.set,p=u.getterFor(f);s.exports=h(Array,"Array",function(m,y){d(this,{type:f,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,h=o("83ab"),f=l(function(){u(1)}),d=!h||f;a({target:"Object",stat:!0,forced:d,sham:!h},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(s,i,o){var a=o("b622");i.f=a},e893:function(s,i,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");s.exports=function(h,f){for(var d=l(f),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(h,v)||p(h,v,m(f,v))}}},e8b5:function(s,i,o){var a=o("c6b6");s.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(s,i,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;s.exports=function(h){return h!==void 0&&(l.Array===h||u[c]===h)}},f5df:function(s,i,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),h=l(function(){return arguments}())=="Arguments",f=function(d,p){try{return d[p]}catch{}};s.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=f(p=Object(d),u))=="string"?m:h?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(s,i,o){var a=o("5692"),l=o("90e3"),c=a("keys");s.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(s,i,o){if(o.r(i),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(A,R,D){return R in A?Object.defineProperty(A,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):A[R]=D,A}function h(A,R){var D=Object.keys(A);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(A);R&&(V=V.filter(function(re){return Object.getOwnPropertyDescriptor(A,re).enumerable})),D.push.apply(D,V)}return D}function f(A){for(var R=1;R<arguments.length;R++){var D=arguments[R]!=null?arguments[R]:{};R%2?h(Object(D),!0).forEach(function(V){u(A,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(V){Object.defineProperty(A,V,Object.getOwnPropertyDescriptor(D,V))})}return A}function d(A){if(Array.isArray(A))return A}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(A,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(A)))){var D=[],V=!0,re=!1,we=void 0;try{for(var ge=A[Symbol.iterator](),De;!(V=(De=ge.next()).done)&&(D.push(De.value),!(R&&D.length===R));V=!0);}catch(yt){re=!0,we=yt}finally{try{!V&&ge.return!=null&&ge.return()}finally{if(re)throw we}}return D}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(A,R){(R==null||R>A.length)&&(R=A.length);for(var D=0,V=new Array(R);D<R;D++)V[D]=A[D];return V}function y(A,R){if(A){if(typeof A=="string")return m(A,R);var D=Object.prototype.toString.call(A).slice(8,-1);if(D==="Object"&&A.constructor&&(D=A.constructor.name),D==="Map"||D==="Set")return Array.from(A);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(A,R)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(A,R){return d(A)||p(A,R)||y(A,R)||v()}function E(A){if(Array.isArray(A))return m(A)}function _(A){if(typeof Symbol<"u"&&Symbol.iterator in Object(A))return Array.from(A)}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(A){return E(A)||_(A)||y(A)||T()}var x=o("a352"),I=o.n(x);function C(A){A.parentElement!==null&&A.parentElement.removeChild(A)}function P(A,R,D){var V=D===0?A.children[0]:A.children[D-1].nextSibling;A.insertBefore(R,V)}var L=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(A){var R=Object.create(null);return function(V){var re=R[V];return re||(R[V]=A(V))}}var k=/-(\w)/g,O=U(function(A){return A.replace(k,function(R,D){return D.toUpperCase()})});o("5db7"),o("73d9");var J=["Start","Add","Remove","Update","End"],j=["Choose","Unchoose","Sort","Filter","Clone"],q=["Move"],oe=[q,J,j].flatMap(function(A){return A}).map(function(A){return"on".concat(A)}),$e={manage:q,manageAndEmit:J,emit:j};function dt(A){return oe.indexOf(A)!==-1}o("caad"),o("2ca0");var We=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function Fe(A){return We.includes(A)}function ht(A){return["transition-group","TransitionGroup"].includes(A)}function St(A){return["id","class","role","style"].includes(A)||A.startsWith("data-")||A.startsWith("aria-")||A.startsWith("on")}function M(A){return A.reduce(function(R,D){var V=g(D,2),re=V[0],we=V[1];return R[re]=we,R},{})}function G(A){var R=A.$attrs,D=A.componentData,V=D===void 0?{}:D,re=M(Object.entries(R).filter(function(we){var ge=g(we,2),De=ge[0];return ge[1],St(De)}));return f(f({},re),V)}function H(A){var R=A.$attrs,D=A.callBackBuilder,V=M(ne(R));Object.entries(D).forEach(function(we){var ge=g(we,2),De=ge[0],yt=ge[1];$e[De].forEach(function(Ce){V["on".concat(Ce)]=yt(Ce)})});var re="[data-draggable]".concat(V.draggable||"");return f(f({},V),{},{draggable:re})}function ne(A){return Object.entries(A).filter(function(R){var D=g(R,2),V=D[0];return D[1],!St(V)}).map(function(R){var D=g(R,2),V=D[0],re=D[1];return[O(V),re]}).filter(function(R){var D=g(R,2),V=D[0];return D[1],!dt(V)})}o("c740");function Te(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}function Xe(A,R){for(var D=0;D<R.length;D++){var V=R[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(A,V.key,V)}}function Ie(A,R,D){return R&&Xe(A.prototype,R),D&&Xe(A,D),A}var w=function(R){var D=R.el;return D},b=function(R,D){return R.__draggable_context=D},N=function(R){return R.__draggable_context},F=function(){function A(R){var D=R.nodes,V=D.header,re=D.default,we=D.footer,ge=R.root,De=R.realList;Te(this,A),this.defaultNodes=re,this.children=[].concat(S(V),S(re),S(we)),this.externalComponent=ge.externalComponent,this.rootTransition=ge.transition,this.tag=ge.tag,this.realList=De}return Ie(A,[{key:"render",value:function(D,V){var re=this.tag,we=this.children,ge=this._isRootComponent,De=ge?{default:function(){return we}}:we;return D(re,V,De)}},{key:"updated",value:function(){var D=this.defaultNodes,V=this.realList;D.forEach(function(re,we){b(w(re),{element:V[we],index:we})})}},{key:"getUnderlyingVm",value:function(D){return N(D)}},{key:"getVmIndexFromDomIndex",value:function(D,V){var re=this.defaultNodes,we=re.length,ge=V.children,De=ge.item(D);if(De===null)return we;var yt=N(De);if(yt)return yt.index;if(we===0)return 0;var Ce=w(re[0]),he=S(ge).findIndex(function(_e){return _e===Ce});return D<he?0:we}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),A}(),$=o("8bbf");function K(A,R){var D=A[R];return D?D():[]}function Z(A){var R=A.$slots,D=A.realList,V=A.getKey,re=D||[],we=["header","footer"].map(function(_e){return K(R,_e)}),ge=g(we,2),De=ge[0],yt=ge[1],Ce=R.item;if(!Ce)throw new Error("draggable element must have an item slot");var he=re.flatMap(function(_e,Ve){return Ce({element:_e,index:Ve}).map(function(Qe){return Qe.key=V(_e),Qe.props=f(f({},Qe.props||{}),{},{"data-draggable":!0}),Qe})});if(he.length!==re.length)throw new Error("Item slot must have only one child");return{header:De,footer:yt,default:he}}function X(A){var R=ht(A),D=!Fe(A)&&!R;return{transition:R,externalComponent:D,tag:D?Object($.resolveComponent)(A):R?$.TransitionGroup:A}}function Y(A){var R=A.$slots,D=A.tag,V=A.realList,re=A.getKey,we=Z({$slots:R,realList:V,getKey:re}),ge=X(D);return new F({nodes:we,root:ge,realList:V})}function B(A,R){var D=this;Object($.nextTick)(function(){return D.$emit(A.toLowerCase(),R)})}function ce(A){var R=this;return function(D,V){if(R.realList!==null)return R["onDrag".concat(A)](D,V)}}function ie(A){var R=this,D=ce.call(this,A);return function(V,re){D.call(R,V,re),B.call(R,A,V)}}var ue=null,Ee={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(R){return R}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},Pe=["update:modelValue","change"].concat(S([].concat(S($e.manageAndEmit),S($e.emit)).map(function(A){return A.toLowerCase()}))),Ze=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:Ee,emits:Pe,data:function(){return{error:!1}},render:function(){try{this.error=!1;var R=this.$slots,D=this.$attrs,V=this.tag,re=this.componentData,we=this.realList,ge=this.getKey,De=Y({$slots:R,tag:V,realList:we,getKey:ge});this.componentStructure=De;var yt=G({$attrs:D,componentData:re});return De.render($.h,yt)}catch(Ce){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},Ce.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&L.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var R=this;if(!this.error){var D=this.$attrs,V=this.$el,re=this.componentStructure;re.updated();var we=H({$attrs:D,callBackBuilder:{manageAndEmit:function(yt){return ie.call(R,yt)},emit:function(yt){return B.bind(R,yt)},manage:function(yt){return ce.call(R,yt)}}}),ge=V.nodeType===1?V:V.parentElement;this._sortable=new I.a(ge,we),this.targetDomElement=ge,ge.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var R=this.list;return R||this.modelValue},getKey:function(){var R=this.itemKey;return typeof R=="function"?R:function(D){return D[R]}}},watch:{$attrs:{handler:function(R){var D=this._sortable;D&&ne(R).forEach(function(V){var re=g(V,2),we=re[0],ge=re[1];D.option(we,ge)})},deep:!0}},methods:{getUnderlyingVm:function(R){return this.componentStructure.getUnderlyingVm(R)||null},getUnderlyingPotencialDraggableComponent:function(R){return R.__draggable_component__},emitChanges:function(R){var D=this;Object($.nextTick)(function(){return D.$emit("change",R)})},alterList:function(R){if(this.list){R(this.list);return}var D=S(this.modelValue);R(D),this.$emit("update:modelValue",D)},spliceList:function(){var R=arguments,D=function(re){return re.splice.apply(re,S(R))};this.alterList(D)},updatePosition:function(R,D){var V=function(we){return we.splice(D,0,we.splice(R,1)[0])};this.alterList(V)},getRelatedContextFromMoveEvent:function(R){var D=R.to,V=R.related,re=this.getUnderlyingPotencialDraggableComponent(D);if(!re)return{component:re};var we=re.realList,ge={list:we,component:re};if(D!==V&&we){var De=re.getUnderlyingVm(V)||{};return f(f({},De),ge)}return ge},getVmIndexFromDomIndex:function(R){return this.componentStructure.getVmIndexFromDomIndex(R,this.targetDomElement)},onDragStart:function(R){this.context=this.getUnderlyingVm(R.item),R.item._underlying_vm_=this.clone(this.context.element),ue=R.item},onDragAdd:function(R){var D=R.item._underlying_vm_;if(D!==void 0){C(R.item);var V=this.getVmIndexFromDomIndex(R.newIndex);this.spliceList(V,0,D);var re={element:D,newIndex:V};this.emitChanges({added:re})}},onDragRemove:function(R){if(P(this.$el,R.item,R.oldIndex),R.pullMode==="clone"){C(R.clone);return}var D=this.context,V=D.index,re=D.element;this.spliceList(V,1);var we={element:re,oldIndex:V};this.emitChanges({removed:we})},onDragUpdate:function(R){C(R.item),P(R.from,R.item,R.oldIndex);var D=this.context.index,V=this.getVmIndexFromDomIndex(R.newIndex);this.updatePosition(D,V);var re={element:this.context.element,oldIndex:D,newIndex:V};this.emitChanges({moved:re})},computeFutureIndex:function(R,D){if(!R.element)return 0;var V=S(D.to.children).filter(function(De){return De.style.display!=="none"}),re=V.indexOf(D.related),we=R.component.getVmIndexFromDomIndex(re),ge=V.indexOf(ue)!==-1;return ge||!D.willInsertAfter?we:we+1},onDragMove:function(R,D){var V=this.move,re=this.realList;if(!V||!re)return!0;var we=this.getRelatedContextFromMoveEvent(R),ge=this.computeFutureIndex(we,R),De=f(f({},this.context),{},{futureIndex:ge}),yt=f(f({},R),{},{relatedContext:we,draggedContext:De});return V(yt,D)},onDragEnd:function(){ue=null}}}),Ke=Ze;i.default=Ke},fb6a:function(s,i,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),h=o("50c4"),f=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),_=[].slice,T=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(x,I){var C=f(this),P=h(C.length),L=u(x,P),U=u(I===void 0?P:I,P),k,O,J;if(c(C)&&(k=C.constructor,typeof k=="function"&&(k===Array||c(k.prototype))?k=void 0:l(k)&&(k=k[E],k===null&&(k=void 0)),k===Array||k===void 0))return _.call(C,L,U);for(O=new(k===void 0?Array:k)(T(U-L,0)),J=0;L<U;L++,J++)L in C&&d(O,J,C[L]);return O.length=J,O}})},fc6a:function(s,i,o){var a=o("44ad"),l=o("1d80");s.exports=function(c){return a(l(c))}},fdbc:function(s,i){s.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(s,i,o){var a=o("4930");s.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(b9);const oB=dj(Wp),aB=t=>(pw("data-v-b1032a9e"),t=t(),gw(),t),lB=aB(()=>be("h3",{class:"title-secondary"},"My Work",-1)),cB=nt({__name:"Projects",setup(t){const e=oc(),{moveProject:n}=e,{projects:r}=Vs(e),s=o=>{o.moved&&n(o.moved.oldIndex,o.moved.newIndex)},i=()=>{ki(()=>{const o=document.querySelectorAll(".transition-opacity");o.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),tj(Array.from(o),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return Is(()=>r.value,(o,a)=>{o>a&&i()}),Hs(()=>{i()}),(o,a)=>(de(),tt(ct,null,[lB,pe(se(oB),{class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none","model-value":se(r),"item-key":"index",onChange:s,animation:150,delay:50},{item:At(({element:l})=>[pe(lc,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",name:l.name,url:l.url,description:l.description,loading:l.loading},{default:At(()=>[(de(!0),tt(ct,null,Mi(l.technologies,c=>(de(),lt(_9,{class:"m-1 md:mt-2",text:c.name,color:c.color},null,8,["text","color"]))),256))]),_:2},1032,["name","url","description","loading"])]),_:1},8,["model-value"])],64))}});const uB=RC(cB,[["__scopeId","data-v-b1032a9e"]]),hB={class:"grid mt-20"},fB=nt({__name:"Home",setup(t){return(e,n)=>(de(),lt(ac,null,{content:At(()=>[be("div",hB,[pe(uB)])]),_:1}))}}),dB=nt({__name:"Home",setup(t){return(e,n)=>(de(),lt(fB))}}),pB={class:"flex flex-col items-center content-center"},gB={class:"grid grid-cols-4 mt-10 gap-3"},mB=be("button",{class:"button-primary col-span-full md:col-span-2",type:"submit"}," Login ",-1),vB=nt({__name:"Login",setup(t){const e=Cr(),n=$t(),r=$t(),s=pr({email:{value:"",error:""},password:{value:"",error:""}}),i=async()=>{await Promise.all([n.value.test(),r.value.test()]),!s.email.error&&!s.password.error&&e.login(s.email.value,s.password.value)},o=async()=>{await n.value.test(),s.email.error||e.resetPassword(s.email.value)};return(a,l)=>{const c=zo("RouterLink");return de(),lt(ac,null,{content:At(()=>[pe(lc,{class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Login",description:"Please login using your e-mail and password."},{default:At(()=>[be("div",pB,[be("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:l[4]||(l[4]=Ph(u=>i(),["prevent"]))},[pe(yr,{ref_key:"email",ref:n,name:"email","display-name":"E-mail",placeholder:"E-mail",state:s,rules:[se(an).Required,se(an).Email],onUpdate:l[0]||(l[0]=u=>s.email.value=u),onError:l[1]||(l[1]=u=>s.email.error=u)},null,8,["state","rules"]),pe(yr,{ref_key:"password",ref:r,name:"password","display-name":"Password",placeholder:"Password",state:s,"input-props":{type:"password"},rules:[se(an).Required],onUpdate:l[2]||(l[2]=u=>s.password.value=u),onError:l[3]||(l[3]=u=>s.password.error=u)},null,8,["state","rules"]),be("div",gB,[mB,pe(c,{to:{name:"register"},class:"button-outlined-primary col-span-full md:col-span-2",type:"button"},{default:At(()=>[Un(" Register ")]),_:1}),be("button",{class:"button-outlined-primary col-span-full md:col-span-2 md:col-start-3",type:"button",onClick:o}," Forgot Password ")])],32),pe(iv)])]),_:1})]),_:1})}}}),yB=nt({__name:"Login",setup(t){return(e,n)=>(de(),lt(vB))}}),EB=nt({__name:"NotFound",setup(t){return(e,n)=>(de(),lt(ac,null,{content:At(()=>[pe(lc,{class:"!bg-red-800 !bg-opacity-50 my-5",name:"Not found.",description:"Where are you going?"})]),_:1}))}}),wB=nt({__name:"NotFound",setup(t){return(e,n)=>(de(),lt(EB))}}),_B={class:"flex flex-col items-center content-center"},bB={class:"grid grid-cols-2 mt-10 gap-3"},TB=be("button",{class:"button-primary col-span-full md:col-span-1",type:"submit"}," Register ",-1),SB=nt({__name:"Register",setup(t){const e=Cr(),n=$t(),r=$t(),s=$t(),i=pr({email:{value:"",error:""},password:{value:"",error:""},firstName:{value:"",error:""}}),o=async()=>{await Promise.all([n.value.test(),r.value.test(),s.value.test()]),!i.email.error&&!i.password.error&&!i.firstName.error&&e.register(i.email.value,i.password.value,i.firstName.value)};return(a,l)=>{const c=zo("RouterLink");return de(),lt(ac,null,{content:At(()=>[pe(lc,{class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Register",description:"Please register using your e-mail, password and first name."},{default:At(()=>[be("div",_B,[be("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:l[6]||(l[6]=Ph(u=>o(),["prevent"]))},[pe(yr,{ref_key:"firstName",ref:s,name:"firstName","display-name":"First Name",placeholder:"Someone",state:i,rules:[se(an).Required,se(an).MinLength3],onUpdate:l[0]||(l[0]=u=>i.firstName.value=u),onError:l[1]||(l[1]=u=>i.firstName.error=u)},null,8,["state","rules"]),pe(yr,{ref_key:"email",ref:n,name:"email","display-name":"E-mail",placeholder:"someone@example.com",state:i,rules:[se(an).Required,se(an).Email],onUpdate:l[2]||(l[2]=u=>i.email.value=u),onError:l[3]||(l[3]=u=>i.email.error=u)},null,8,["state","rules"]),pe(yr,{ref_key:"password",ref:r,name:"password","display-name":"Password",placeholder:"******",state:i,"input-props":{type:"password"},rules:[se(an).Required,se(an).MinLength6],onUpdate:l[4]||(l[4]=u=>i.password.value=u),onError:l[5]||(l[5]=u=>i.password.error=u)},null,8,["state","rules"]),be("div",bB,[TB,pe(c,{to:{name:"login"},class:"button-outlined-primary col-span-full md:col-span-1",type:"button"},{default:At(()=>[Un(" Login ")]),_:1})])],32),pe(iv)])]),_:1})]),_:1})}}}),IB=nt({__name:"Register",setup(t){return(e,n)=>(de(),lt(SB))}}),jC=U$({history:t$(""),routes:[{path:"/",name:"home",meta:{title:"Home"},component:dB,beforeEnter:(t,e,n)=>{t.query.notfound?n({name:"notfound"}):n()}},{path:"/register",name:"register",meta:{title:"Register"},component:IB,beforeEnter:(t,e,n)=>{Cr().currentUser?n({name:"dashboard"}):n()}},{path:"/login",name:"login",meta:{title:"Login"},component:yB,beforeEnter:(t,e,n)=>{Cr().currentUser?n({name:"dashboard"}):n()}},{path:"/dashboard",name:"dashboard",meta:{title:"Dashboard"},component:v9,beforeEnter:(t,e,n)=>{Cr().currentUser?n():n({name:"login"})}},{path:"/:pathMatch(.*)*",name:"notfound",meta:{title:"404"},component:wB}]}),$0=Ef.name;jC.beforeResolve(t=>{document.title=$0+" | "+t.meta.title||$0});const BC=jC,hc=w_(z$);hc.use(BC);hc.use(F4,{firebaseApp:EC,modules:[L4()]});hc.use(IC);hc.use(rx);hc.mount("#app");
