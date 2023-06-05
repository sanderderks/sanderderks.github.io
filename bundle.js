var f1=Object.defineProperty;var d1=(t,e,n)=>e in t?f1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ya=(t,e,n)=>(d1(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function bh(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const p1="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",g1=bh(p1);function ta(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xt(r)?E1(r):ta(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(xt(t))return t;if(pt(t))return t}}const m1=/;(?![^(]*\))/g,v1=/:([^]+)/,y1=/\/\*.*?\*\//gs;function E1(t){const e={};return t.replace(y1,"").split(m1).forEach(n=>{if(n){const r=n.split(v1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function as(t){let e="";if(xt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=as(t[n]);r&&(e+=r+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function w1(t){if(!t)return null;let{class:e,style:n}=t;return e&&!xt(e)&&(t.class=as(e)),n&&(t.style=ta(n)),t}const b1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_1=bh(b1);function ow(t){return!!t||t===""}function T1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=js(t[r],e[r]);return n}function js(t,e){if(t===e)return!0;let n=Pv(t),r=Pv(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ml(t),r=ml(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?T1(t,e):!1;if(n=pt(t),r=pt(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!js(t[o],e[o]))return!1}}return String(t)===String(e)}function _h(t,e){return t.findIndex(n=>js(n,e))}const at=t=>xt(t)?t:t==null?"":he(t)||pt(t)&&(t.toString===lw||!xe(t.toString))?JSON.stringify(t,aw,2):String(t),aw=(t,e)=>e&&e.__v_isRef?aw(t,e.value):bo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Bi(e)?{[`Set(${e.size})`]:[...e.values()]}:pt(e)&&!he(e)&&!cw(e)?String(e):e,ft={},wo=[],pr=()=>{},S1=()=>!1,I1=/^on[^a-z]/,Wl=t=>I1.test(t),pg=t=>t.startsWith("onUpdate:"),$t=Object.assign,gg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C1=Object.prototype.hasOwnProperty,nt=(t,e)=>C1.call(t,e),he=Array.isArray,bo=t=>na(t)==="[object Map]",Bi=t=>na(t)==="[object Set]",Pv=t=>na(t)==="[object Date]",A1=t=>na(t)==="[object RegExp]",xe=t=>typeof t=="function",xt=t=>typeof t=="string",ml=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",mg=t=>pt(t)&&xe(t.then)&&xe(t.catch),lw=Object.prototype.toString,na=t=>lw.call(t),R1=t=>na(t).slice(8,-1),cw=t=>na(t)==="[object Object]",vg=t=>xt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ga=bh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Th=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},x1=/-(\w)/g,Mn=Th(t=>t.replace(x1,(e,n)=>n?n.toUpperCase():"")),O1=/\B([A-Z])/g,Zn=Th(t=>t.replace(O1,"-$1").toLowerCase()),Kl=Th(t=>t.charAt(0).toUpperCase()+t.slice(1)),za=Th(t=>t?`on${Kl(t)}`:""),ko=(t,e)=>!Object.is(t,e),_o=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bu=t=>{const e=xt(t)?Number(t):NaN;return isNaN(e)?t:e};let Nv;const P1=()=>Nv||(Nv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let jn;class yg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jn,!e&&jn&&(this.index=(jn.scopes||(jn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=jn;try{return jn=this,e()}finally{jn=n}}}on(){jn=this}off(){jn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sh(t){return new yg(t)}function uw(t,e=jn){e&&e.active&&e.effects.push(t)}function Eg(){return jn}function hw(t){jn&&jn.cleanups.push(t)}const wg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fw=t=>(t.w&Vs)>0,dw=t=>(t.n&Vs)>0,N1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vs},D1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];fw(s)&&!dw(s)?s.delete(t):e[n++]=s,s.w&=~Vs,s.n&=~Vs}e.length=n}},_u=new WeakMap;let Na=0,Vs=1;const Bd=30;let cr;const yi=Symbol(""),jd=Symbol("");class Gl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uw(this,r)}run(){if(!this.active)return this.fn();let e=cr,n=Ms;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cr,cr=this,Ms=!0,Vs=1<<++Na,Na<=Bd?N1(this):Dv(this),this.fn()}finally{Na<=Bd&&D1(this),Vs=1<<--Na,cr=this.parent,Ms=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cr===this?this.deferStop=!0:this.active&&(Dv(this),this.onStop&&this.onStop(),this.active=!1)}}function Dv(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function k1(t,e){t.effect&&(t=t.effect.fn);const n=new Gl(t);e&&($t(n,e),e.scope&&uw(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function M1(t){t.effect.stop()}let Ms=!0;const pw=[];function ra(){pw.push(Ms),Ms=!1}function sa(){const t=pw.pop();Ms=t===void 0?!0:t}function Un(t,e,n){if(Ms&&cr){let r=_u.get(t);r||_u.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wg()),gw(s)}}function gw(t,e){let n=!1;Na<=Bd?dw(t)||(t.n|=Vs,n=!fw(t)):n=!t.has(cr),n&&(t.add(cr),cr.deps.push(t))}function ls(t,e,n,r,s,i){const o=_u.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&he(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":he(t)?vg(n)&&a.push(o.get("length")):(a.push(o.get(yi)),bo(t)&&a.push(o.get(jd)));break;case"delete":he(t)||(a.push(o.get(yi)),bo(t)&&a.push(o.get(jd)));break;case"set":bo(t)&&a.push(o.get(yi));break}if(a.length===1)a[0]&&Vd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vd(wg(l))}}function Vd(t,e){const n=he(t)?t:[...t];for(const r of n)r.computed&&kv(r);for(const r of n)r.computed||kv(r)}function kv(t,e){(t!==cr||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function L1(t,e){var n;return(n=_u.get(t))===null||n===void 0?void 0:n.get(e)}const F1=bh("__proto__,__v_isRef,__isVue"),mw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ml)),U1=Ih(),$1=Ih(!1,!0),B1=Ih(!0),j1=Ih(!0,!0),Mv=V1();function V1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ve(this);for(let i=0,o=this.length;i<o;i++)Un(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ve)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ra();const r=Ve(this)[e].apply(this,n);return sa(),r}}),t}function H1(t){const e=Ve(this);return Un(e,"has",t),e.hasOwnProperty(t)}function Ih(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Tw:_w:e?bw:ww).get(r))return r;const o=he(r);if(!t){if(o&&nt(Mv,s))return Reflect.get(Mv,s,i);if(s==="hasOwnProperty")return H1}const a=Reflect.get(r,s,i);return(ml(s)?mw.has(s):F1(s))||(t||Un(r,"get",s),e)?a:Nt(a)?o&&vg(s)?a:a.value:pt(a)?t?_g(a):Yn(a):a}}const W1=vw(),K1=vw(!0);function vw(t=!1){return function(n,r,s,i){let o=n[r];if(Ii(o)&&Nt(o)&&!Nt(s))return!1;if(!t&&(!vl(s)&&!Ii(s)&&(o=Ve(o),s=Ve(s)),!he(n)&&Nt(o)&&!Nt(s)))return o.value=s,!0;const a=he(n)&&vg(r)?Number(r)<n.length:nt(n,r),l=Reflect.set(n,r,s,i);return n===Ve(i)&&(a?ko(s,o)&&ls(n,"set",r,s):ls(n,"add",r,s)),l}}function G1(t,e){const n=nt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ls(t,"delete",e,void 0),r}function z1(t,e){const n=Reflect.has(t,e);return(!ml(e)||!mw.has(e))&&Un(t,"has",e),n}function Y1(t){return Un(t,"iterate",he(t)?"length":yi),Reflect.ownKeys(t)}const yw={get:U1,set:W1,deleteProperty:G1,has:z1,ownKeys:Y1},Ew={get:B1,set(t,e){return!0},deleteProperty(t,e){return!0}},X1=$t({},yw,{get:$1,set:K1}),Q1=$t({},Ew,{get:j1}),bg=t=>t,Ch=t=>Reflect.getPrototypeOf(t);function Sc(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ve(t),i=Ve(e);n||(e!==i&&Un(s,"get",e),Un(s,"get",i));const{has:o}=Ch(s),a=r?bg:n?Sg:yl;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ic(t,e=!1){const n=this.__v_raw,r=Ve(n),s=Ve(t);return e||(t!==s&&Un(r,"has",t),Un(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Cc(t,e=!1){return t=t.__v_raw,!e&&Un(Ve(t),"iterate",yi),Reflect.get(t,"size",t)}function Lv(t){t=Ve(t);const e=Ve(this);return Ch(e).has.call(e,t)||(e.add(t),ls(e,"add",t,t)),this}function Fv(t,e){e=Ve(e);const n=Ve(this),{has:r,get:s}=Ch(n);let i=r.call(n,t);i||(t=Ve(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ko(e,o)&&ls(n,"set",t,e):ls(n,"add",t,e),this}function Uv(t){const e=Ve(this),{has:n,get:r}=Ch(e);let s=n.call(e,t);s||(t=Ve(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ls(e,"delete",t,void 0),i}function $v(){const t=Ve(this),e=t.size!==0,n=t.clear();return e&&ls(t,"clear",void 0,void 0),n}function Ac(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ve(o),l=e?bg:t?Sg:yl;return!t&&Un(a,"iterate",yi),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Rc(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=bo(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?bg:e?Sg:yl;return!e&&Un(i,"iterate",l?jd:yi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ys(t){return function(...e){return t==="delete"?!1:this}}function q1(){const t={get(i){return Sc(this,i)},get size(){return Cc(this)},has:Ic,add:Lv,set:Fv,delete:Uv,clear:$v,forEach:Ac(!1,!1)},e={get(i){return Sc(this,i,!1,!0)},get size(){return Cc(this)},has:Ic,add:Lv,set:Fv,delete:Uv,clear:$v,forEach:Ac(!1,!0)},n={get(i){return Sc(this,i,!0)},get size(){return Cc(this,!0)},has(i){return Ic.call(this,i,!0)},add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear"),forEach:Ac(!0,!1)},r={get(i){return Sc(this,i,!0,!0)},get size(){return Cc(this,!0)},has(i){return Ic.call(this,i,!0)},add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear"),forEach:Ac(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Rc(i,!1,!1),n[i]=Rc(i,!0,!1),e[i]=Rc(i,!1,!0),r[i]=Rc(i,!0,!0)}),[t,n,e,r]}const[J1,Z1,eA,tA]=q1();function Ah(t,e){const n=e?t?tA:eA:t?Z1:J1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(nt(n,s)&&s in r?n:r,s,i)}const nA={get:Ah(!1,!1)},rA={get:Ah(!1,!0)},sA={get:Ah(!0,!1)},iA={get:Ah(!0,!0)},ww=new WeakMap,bw=new WeakMap,_w=new WeakMap,Tw=new WeakMap;function oA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aA(t){return t.__v_skip||!Object.isExtensible(t)?0:oA(R1(t))}function Yn(t){return Ii(t)?t:Rh(t,!1,yw,nA,ww)}function Sw(t){return Rh(t,!1,X1,rA,bw)}function _g(t){return Rh(t,!0,Ew,sA,_w)}function lA(t){return Rh(t,!0,Q1,iA,Tw)}function Rh(t,e,n,r,s){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=aA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Rr(t){return Ii(t)?Rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ii(t){return!!(t&&t.__v_isReadonly)}function vl(t){return!!(t&&t.__v_isShallow)}function Tg(t){return Rr(t)||Ii(t)}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function Ci(t){return Eu(t,"__v_skip",!0),t}const yl=t=>pt(t)?Yn(t):t,Sg=t=>pt(t)?_g(t):t;function Ig(t){Ms&&cr&&(t=Ve(t),gw(t.dep||(t.dep=wg())))}function xh(t,e){t=Ve(t);const n=t.dep;n&&Vd(n)}function Nt(t){return!!(t&&t.__v_isRef===!0)}function lt(t){return Cw(t,!1)}function Iw(t){return Cw(t,!0)}function Cw(t,e){return Nt(t)?t:new cA(t,e)}class cA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ve(e),this._value=n?e:yl(e)}get value(){return Ig(this),this._value}set value(e){const n=this.__v_isShallow||vl(e)||Ii(e);e=n?e:Ve(e),ko(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yl(e),xh(this))}}function uA(t){xh(t)}function Y(t){return Nt(t)?t.value:t}const hA={get:(t,e,n)=>Y(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Nt(s)&&!Nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cg(t){return Rr(t)?t:new Proxy(t,hA)}class fA{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Ig(this),()=>xh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function dA(t){return new fA(t)}function Aw(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=Ag(t,n);return e}class pA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return L1(Ve(this._object),this._key)}}function Ag(t,e,n){const r=t[e];return Nt(r)?r:new pA(t,e,n)}var Rw;class gA{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rw]=!1,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,xh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ve(this);return Ig(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rw="__v_isReadonly";function mA(t,e,n=!1){let r,s;const i=xe(t);return i?(r=t,s=pr):(r=t.get,s=t.set),new gA(r,s,i||!s,n)}function vA(t,...e){}function yA(t,e){}function es(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ji(i,e,n)}return s}function Wn(t,e,n,r){if(xe(t)){const i=es(t,e,n,r);return i&&mg(i)&&i.catch(o=>{ji(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Wn(t[i],e,n,r));return s}function ji(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){es(l,null,10,[t,o,a]);return}}EA(t,n,s,r)}function EA(t,e,n,r=!0){console.error(t)}let El=!1,Hd=!1;const dn=[];let Sr=0;const To=[];let Gr=null,ui=0;const xw=Promise.resolve();let Rg=null;function Vi(t){const e=Rg||xw;return t?e.then(this?t.bind(this):t):e}function wA(t){let e=Sr+1,n=dn.length;for(;e<n;){const r=e+n>>>1;wl(dn[r])<t?e=r+1:n=r}return e}function Oh(t){(!dn.length||!dn.includes(t,El&&t.allowRecurse?Sr+1:Sr))&&(t.id==null?dn.push(t):dn.splice(wA(t.id),0,t),Ow())}function Ow(){!El&&!Hd&&(Hd=!0,Rg=xw.then(Pw))}function bA(t){const e=dn.indexOf(t);e>Sr&&dn.splice(e,1)}function xg(t){he(t)?To.push(...t):(!Gr||!Gr.includes(t,t.allowRecurse?ui+1:ui))&&To.push(t),Ow()}function Bv(t,e=El?Sr+1:0){for(;e<dn.length;e++){const n=dn[e];n&&n.pre&&(dn.splice(e,1),e--,n())}}function Tu(t){if(To.length){const e=[...new Set(To)];if(To.length=0,Gr){Gr.push(...e);return}for(Gr=e,Gr.sort((n,r)=>wl(n)-wl(r)),ui=0;ui<Gr.length;ui++)Gr[ui]();Gr=null,ui=0}}const wl=t=>t.id==null?1/0:t.id,_A=(t,e)=>{const n=wl(t)-wl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pw(t){Hd=!1,El=!0,dn.sort(_A);const e=pr;try{for(Sr=0;Sr<dn.length;Sr++){const n=dn[Sr];n&&n.active!==!1&&es(n,null,14)}}finally{Sr=0,dn.length=0,Tu(),El=!1,Rg=null,(dn.length||To.length)&&Pw()}}let oo,xc=[];function Nw(t,e){var n,r;oo=t,oo?(oo.enabled=!0,xc.forEach(({event:s,args:i})=>oo.emit(s,...i)),xc=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Nw(i,e)}),setTimeout(()=>{oo||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xc=[])},3e3)):xc=[]}function TA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ft;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ft;f&&(s=n.map(d=>xt(d)?d.trim():d)),h&&(s=n.map(wu))}let a,l=r[a=za(e)]||r[a=za(Mn(e))];!l&&i&&(l=r[a=za(Zn(e))]),l&&Wn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wn(c,t,6,s)}}function Dw(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!xe(t)){const l=c=>{const u=Dw(c,e,!0);u&&(a=!0,$t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(pt(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>o[l]=null):$t(o,i),pt(t)&&r.set(t,o),o)}function Ph(t,e){return!t||!Wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,Zn(e))||nt(t,e))}let sn=null,Nh=null;function bl(t){const e=sn;return sn=t,Nh=t&&t.type.__scopeId||null,e}function kw(t){Nh=t}function Mw(){Nh=null}const SA=t=>it;function it(t,e=sn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qd(-1);const i=bl(e);let o;try{o=t(...s)}finally{bl(i),r._d&&Qd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ru(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=bl(t);try{if(n.shapeFlag&4){const b=s||r;y=Vn(u.call(b,b,h,i,d,f,p)),v=l}else{const b=e;y=Vn(b.length>1?b(i,{attrs:l,slots:a,emit:c}):b(i,null)),v=e.props?l:CA(l)}}catch(b){Qa.length=0,ji(b,t,1),y=le(yn)}let E=y;if(v&&m!==!1){const b=Object.keys(v),{shapeFlag:I}=E;b.length&&I&7&&(o&&b.some(pg)&&(v=AA(v,o)),E=Dr(E,v))}return n.dirs&&(E=Dr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,bl(g),y}function IA(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Hs(r)){if(r.type!==yn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const CA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wl(n))&&((e||(e={}))[n]=t[n]);return e},AA=(t,e)=>{const n={};for(const r in t)(!pg(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?jv(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ph(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?jv(r,o,c):!0:!!o;return!1}function jv(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ph(n,i))return!0}return!1}function Og({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Lw=t=>t.__isSuspense,xA={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?PA(e,n,r,s,i,o,a,l,c):NA(t,e,n,r,s,o,a,l,c)},hydrate:DA,create:Pg,normalize:kA},OA=xA;function _l(t,e){const n=t.props&&t.props[e];xe(n)&&n()}function PA(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Pg(t,s,r,e,h,n,i,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,i,o),f.deps>0?(_l(t,"onPending"),_l(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),So(f,t.ssFallback)):f.resolve()}function NA(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=h;if(m)h.pendingBranch=f,ur(f,m)?(l(m,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():y&&(l(p,d,n,r,s,null,i,o,a),So(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):c(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,s,null,i,o,a),So(h,d))):p&&ur(f,p)?(l(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&ur(f,p))l(p,f,n,r,s,h,i,o,a),So(h,f);else if(_l(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function Pg(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:y}}=c,v=t.props?bu(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:b,activeBranch:I,pendingBranch:C,pendingId:A,effects:_,parentComponent:S,container:N}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const k=I&&C.transition&&C.transition.mode==="out-in";k&&(I.transition.afterLeave=()=>{A===g.pendingId&&f(C,N,O,0)});let{anchor:O}=g;I&&(O=p(I),d(I,S,g,!0)),k||f(C,N,O,0)}So(g,C),g.pendingBranch=null,g.isInFallback=!1;let L=g.parent,U=!1;for(;L;){if(L.pendingBranch){L.effects.push(..._),U=!0;break}L=L.parent}U||xg(_),g.effects=[],_l(b,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:b,activeBranch:I,parentComponent:C,container:A,isSVG:_}=g;_l(b,"onFallback");const S=p(I),N=()=>{g.isInFallback&&(h(null,E,A,S,C,null,_,a,l),So(g,E))},L=E.transition&&E.transition.mode==="out-in";L&&(I.transition.afterLeave=N),g.isInFallback=!0,d(I,C,null,!0),L||N()},move(E,b,I){g.activeBranch&&f(g.activeBranch,E,b,I),g.container=E},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(E,b){const I=!!g.pendingBranch;I&&g.deps++;const C=E.vnode.el;E.asyncDep.catch(A=>{ji(A,E,0)}).then(A=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:_}=E;qd(E,A,!1),C&&(_.el=C);const S=!C&&E.subTree.el;b(E,_,m(C||E.subTree.el),C?null:p(E.subTree),g,o,l),S&&y(S),Og(E,_.el),I&&--g.deps===0&&g.resolve()})},unmount(E,b){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,b),g.pendingBranch&&d(g.pendingBranch,n,E,b)}};return g}function DA(t,e,n,r,s,i,o,a,l){const c=e.suspense=Pg(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function kA(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Vv(r?n.default:n),t.ssFallback=r?Vv(n.fallback):le(yn)}function Vv(t){let e;if(xe(t)){const n=xi&&t._c;n&&(t._d=!1,K()),t=t(),n&&(t._d=!0,e=Dn,hb())}return he(t)&&(t=IA(t)),t=Vn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Fw(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):xg(t)}function So(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Og(r,s))}function Io(t,e){if(Ft){let n=Ft.provides;const r=Ft.parent&&Ft.parent.provides;r===n&&(n=Ft.provides=Object.create(r)),n[t]=e}}function Ln(t,e,n=!1){const r=Ft||sn;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&xe(e)?e.call(r.proxy):e}}function MA(t,e){return zl(t,null,e)}function Uw(t,e){return zl(t,null,{flush:"post"})}function LA(t,e){return zl(t,null,{flush:"sync"})}const Oc={};function ts(t,e,n){return zl(t,e,n)}function zl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ft){const a=Eg()===(Ft==null?void 0:Ft.scope)?Ft:null;let l,c=!1,u=!1;if(Nt(t)?(l=()=>t.value,c=vl(t)):Rr(t)?(l=()=>t,r=!0):he(t)?(u=!0,c=t.some(E=>Rr(E)||vl(E)),l=()=>t.map(E=>{if(Nt(E))return E.value;if(Rr(E))return di(E);if(xe(E))return es(E,a,2)})):xe(t)?e?l=()=>es(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Wn(t,a,3,[f])}:l=pr,e&&r){const E=l;l=()=>di(E())}let h,f=E=>{h=v.onStop=()=>{es(E,a,4)}},d;if(Lo)if(f=pr,e?n&&Wn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const E=_b();d=E.__watcherHandles||(E.__watcherHandles=[])}else return pr;let p=u?new Array(t.length).fill(Oc):Oc;const m=()=>{if(v.active)if(e){const E=v.run();(r||c||(u?E.some((b,I)=>ko(b,p[I])):ko(E,p)))&&(h&&h(),Wn(e,a,3,[E,p===Oc?void 0:u&&p[0]===Oc?[]:p,f]),p=E)}else v.run()};m.allowRecurse=!!e;let y;s==="sync"?y=m:s==="post"?y=()=>en(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Oh(m));const v=new Gl(l,y);e?n?m():p=v.run():s==="post"?en(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&gg(a.scope.effects,v)};return d&&d.push(g),g}function FA(t,e,n){const r=this.proxy,s=xt(t)?t.includes(".")?$w(r,t):()=>r[t]:t.bind(r,r);let i;xe(e)?i=e:(i=e.handler,n=e);const o=Ft;Ws(this);const a=zl(s,i.bind(r),n);return o?Ws(o):Ls(),a}function $w(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function di(t,e){if(!pt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Nt(t))di(t.value,e);else if(he(t))for(let n=0;n<t.length;n++)di(t[n],e);else if(Bi(t)||bo(t))t.forEach(n=>{di(n,e)});else if(cw(t))for(const n in t)di(t[n],e);return t}function Ng(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Br(()=>{t.isMounted=!0}),Lh(()=>{t.isUnmounting=!0}),t}const Xn=[Function,Array],UA={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},setup(t,{slots:e}){const n=jr(),r=Ng();let s;return()=>{const i=e.default&&Dh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const m of i)if(m.type!==yn){o=m;break}}const a=Ve(t),{mode:l}=a;if(r.isLeaving)return Ff(o);const c=Hv(o);if(!c)return Ff(o);const u=Mo(c,a,r,n);Ai(c,u);const h=n.subTree,f=h&&Hv(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();s===void 0?s=m:m!==s&&(s=m,d=!0)}if(f&&f.type!==yn&&(!ur(c,f)||d)){const m=Mo(f,a,r,n);if(Ai(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ff(o);l==="in-out"&&c.type!==yn&&(m.delayLeave=(y,v,g)=>{const E=Bw(r,f);E[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Dg=UA;function Bw(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mo(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),b=Bw(n,t),I=(_,S)=>{_&&Wn(_,r,9,S)},C=(_,S)=>{const N=S[1];I(_,S),he(_)?_.every(L=>L.length<=1)&&N():_.length<=1&&N()},A={mode:i,persisted:o,beforeEnter(_){let S=a;if(!n.isMounted)if(s)S=m||a;else return;_._leaveCb&&_._leaveCb(!0);const N=b[E];N&&ur(t,N)&&N.el._leaveCb&&N.el._leaveCb(),I(S,[_])},enter(_){let S=l,N=c,L=u;if(!n.isMounted)if(s)S=y||l,N=v||c,L=g||u;else return;let U=!1;const k=_._enterCb=O=>{U||(U=!0,O?I(L,[_]):I(N,[_]),A.delayedLeave&&A.delayedLeave(),_._enterCb=void 0)};S?C(S,[_,k]):k()},leave(_,S){const N=String(t.key);if(_._enterCb&&_._enterCb(!0),n.isUnmounting)return S();I(h,[_]);let L=!1;const U=_._leaveCb=k=>{L||(L=!0,S(),k?I(p,[_]):I(d,[_]),_._leaveCb=void 0,b[N]===t&&delete b[N])};b[N]=t,f?C(f,[_,U]):U()},clone(_){return Mo(_,e,n,r)}};return A}function Ff(t){if(Yl(t))return t=Dr(t),t.children=null,t}function Hv(t){return Yl(t)?t.children?t.children[0]:void 0:t}function Ai(t,e){t.shapeFlag&6&&t.component?Ai(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&s++,r=r.concat(Dh(o.children,e,a))):(e||o.type!==yn)&&r.push(a!=null?Dr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function $e(t){return xe(t)?{setup:t,name:t.name}:t}const Ei=t=>!!t.type.__asyncLoader;function $A(t){xe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(h()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return $e({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ft;if(c)return()=>Uf(c,d);const p=g=>{l=null,ji(g,d,13,!r)};if(o&&d.suspense||Lo)return f().then(g=>()=>Uf(g,d)).catch(g=>(p(g),()=>r?le(r,{error:g}):null));const m=lt(!1),y=lt(),v=lt(!!s);return s&&setTimeout(()=>{v.value=!1},s),i!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${i}ms.`);p(g),y.value=g}},i),f().then(()=>{m.value=!0,d.parent&&Yl(d.parent.vnode)&&Oh(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return Uf(c,d);if(y.value&&r)return le(r,{error:y.value});if(n&&!v.value)return le(n)}}})}function Uf(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=le(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Yl=t=>t.type.__isKeepAlive,BA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=jr(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,E,b,I,C)=>{const A=g.component;c(g,E,b,0,a),l(A.vnode,g,E,b,A,a,I,g.slotScopeIds,C),en(()=>{A.isDeactivated=!1,A.a&&_o(A.a);const _=g.props&&g.props.onVnodeMounted;_&&Pn(_,A.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,f,null,1,a),en(()=>{E.da&&_o(E.da);const b=g.props&&g.props.onVnodeUnmounted;b&&Pn(b,E.parent,g),E.isDeactivated=!0},a)};function d(g){$f(g),u(g,n,a,!0)}function p(g){s.forEach((E,b)=>{const I=Zd(E.type);I&&(!g||!g(I))&&m(b)})}function m(g){const E=s.get(g);!o||!ur(E,o)?d(E):o&&$f(o),s.delete(g),i.delete(g)}ts(()=>[t.include,t.exclude],([g,E])=>{g&&p(b=>Da(g,b)),E&&p(b=>!Da(E,b))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&s.set(y,Bf(n.subTree))};return Br(v),Mh(v),Lh(()=>{s.forEach(g=>{const{subTree:E,suspense:b}=n,I=Bf(E);if(g.type===I.type&&g.key===I.key){$f(I);const C=I.component.da;C&&en(C,b);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!Hs(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let b=Bf(E);const I=b.type,C=Zd(Ei(b)?b.type.__asyncResolved||{}:I),{include:A,exclude:_,max:S}=t;if(A&&(!C||!Da(A,C))||_&&C&&Da(_,C))return o=b,E;const N=b.key==null?I:b.key,L=s.get(N);return b.el&&(b=Dr(b),E.shapeFlag&128&&(E.ssContent=b)),y=N,L?(b.el=L.el,b.component=L.component,b.transition&&Ai(b,b.transition),b.shapeFlag|=512,i.delete(N),i.add(N)):(i.add(N),S&&i.size>parseInt(S,10)&&m(i.values().next().value)),b.shapeFlag|=256,o=b,Lw(E.type)?E:b}}},jA=BA;function Da(t,e){return he(t)?t.some(n=>Da(n,e)):xt(t)?t.split(",").includes(e):A1(t)?t.test(e):!1}function jw(t,e){Hw(t,"a",e)}function Vw(t,e){Hw(t,"da",e)}function Hw(t,e,n=Ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kh(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yl(s.parent.vnode)&&VA(r,e,n,s),s=s.parent}}function VA(t,e,n,r){const s=kh(e,t,r,!0);Fh(()=>{gg(r[e],s)},n)}function $f(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Bf(t){return t.shapeFlag&128?t.ssContent:t}function kh(t,e,n=Ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ra(),Ws(n);const a=Wn(e,n,t,o);return Ls(),sa(),a});return r?s.unshift(i):s.push(i),i}}const ps=t=>(e,n=Ft)=>(!Lo||t==="sp")&&kh(t,(...r)=>e(...r),n),Ww=ps("bm"),Br=ps("m"),Kw=ps("bu"),Mh=ps("u"),Lh=ps("bum"),Fh=ps("um"),Gw=ps("sp"),zw=ps("rtg"),Yw=ps("rtc");function Xw(t,e=Ft){kh("ec",t,e)}function Tl(t,e){const n=sn;if(n===null)return t;const r=$h(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ft]=e[i];o&&(xe(o)&&(o={mounted:o,updated:o}),o.deep&&di(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ra(),Wn(l,n,8,[t.el,a,t,e]),sa())}}const kg="components",HA="directives";function Hi(t,e){return Mg(kg,t,!0,e)||t}const Qw=Symbol();function qw(t){return xt(t)?Mg(kg,t,!1)||t:t||Qw}function WA(t){return Mg(HA,t)}function Mg(t,e,n=!0,r=!1){const s=sn||Ft;if(s){const i=s.type;if(t===kg){const a=Zd(i,!1);if(a&&(a===e||a===Mn(e)||a===Kl(Mn(e))))return i}const o=Wv(s[t]||i[t],e)||Wv(s.appContext[t],e);return!o&&r?i:o}}function Wv(t,e){return t&&(t[e]||t[Mn(e)]||t[Kl(Mn(e))])}function mr(t,e,n,r){let s;const i=n&&n[r];if(he(t)||xt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(pt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Jw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(he(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function ns(t,e,n={},r,s){if(sn.isCE||sn.parent&&Ei(sn.parent)&&sn.parent.isCE)return e!=="default"&&(n.name=e),le("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),K();const o=i&&Zw(i(n)),a=Oe(Je,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Zw(t){return t.some(e=>Hs(e)?!(e.type===yn||e.type===Je&&!Zw(e.children)):!0)?t:null}function KA(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:za(r)]=t[r];return n}const Wd=t=>t?mb(t)?$h(t)||t.proxy:Wd(t.parent):null,Ya=$t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wd(t.parent),$root:t=>Wd(t.root),$emit:t=>t.emit,$options:t=>Lg(t),$forceUpdate:t=>t.f||(t.f=()=>Oh(t.update)),$nextTick:t=>t.n||(t.n=Vi.bind(t.proxy)),$watch:t=>FA.bind(t)}),jf=(t,e)=>t!==ft&&!t.__isScriptSetup&&nt(t,e),Kd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jf(r,e))return o[e]=1,r[e];if(s!==ft&&nt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&nt(c,e))return o[e]=3,i[e];if(n!==ft&&nt(n,e))return o[e]=4,n[e];Gd&&(o[e]=0)}}const u=Ya[e];let h,f;if(u)return e==="$attrs"&&Un(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ft&&nt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jf(s,e)?(s[e]=n,!0):r!==ft&&nt(r,e)?(r[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ft&&nt(t,o)||jf(e,o)||(a=i[0])&&nt(a,o)||nt(r,o)||nt(Ya,o)||nt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},GA=$t({},Kd,{get(t,e){if(e!==Symbol.unscopables)return Kd.get(t,e,t)},has(t,e){return e[0]!=="_"&&!g1(e)}});let Gd=!0;function zA(t){const e=Lg(t),n=t.proxy,r=t.ctx;Gd=!1,e.beforeCreate&&Kv(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:b,render:I,renderTracked:C,renderTriggered:A,errorCaptured:_,serverPrefetch:S,expose:N,inheritAttrs:L,components:U,directives:k,filters:O}=e;if(c&&YA(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const ce=o[Z];xe(ce)&&(r[Z]=ce.bind(n))}if(s){const Z=s.call(n,n);pt(Z)&&(t.data=Yn(Z))}if(Gd=!0,i)for(const Z in i){const ce=i[Z],He=xe(ce)?ce.bind(n,n):xe(ce.get)?ce.get.bind(n,n):pr,yt=!xe(ce)&&xe(ce.set)?ce.set.bind(n):pr,Ye=vt({get:He,set:yt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:je=>Ye.value=je})}if(a)for(const Z in a)eb(a[Z],r,n,Z);if(l){const Z=xe(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(ce=>{Io(ce,Z[ce])})}u&&Kv(u,t,"c");function B(Z,ce){he(ce)?ce.forEach(He=>Z(He.bind(n))):ce&&Z(ce.bind(n))}if(B(Ww,h),B(Br,f),B(Kw,d),B(Mh,p),B(jw,m),B(Vw,y),B(Xw,_),B(Yw,C),B(zw,A),B(Lh,g),B(Fh,b),B(Gw,S),he(N))if(N.length){const Z=t.exposed||(t.exposed={});N.forEach(ce=>{Object.defineProperty(Z,ce,{get:()=>n[ce],set:He=>n[ce]=He})})}else t.exposed||(t.exposed={});I&&t.render===pr&&(t.render=I),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function YA(t,e,n=pr,r=!1){he(t)&&(t=zd(t));for(const s in t){const i=t[s];let o;pt(i)?"default"in i?o=Ln(i.from||s,i.default,!0):o=Ln(i.from||s):o=Ln(i),Nt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Kv(t,e,n){Wn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function eb(t,e,n,r){const s=r.includes(".")?$w(n,r):()=>n[r];if(xt(t)){const i=e[t];xe(i)&&ts(s,i)}else if(xe(t))ts(s,t.bind(n));else if(pt(t))if(he(t))t.forEach(i=>eb(i,e,n,r));else{const i=xe(t.handler)?t.handler.bind(n):e[t.handler];xe(i)&&ts(s,i,t)}}function Lg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Su(l,c,o,!0)),Su(l,e,o)),pt(e)&&i.set(e,l),l}function Su(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Su(t,i,n,!0),s&&s.forEach(o=>Su(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=XA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const XA={data:Gv,props:oi,emits:oi,methods:oi,computed:oi,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:oi,directives:oi,watch:qA,provide:Gv,inject:QA};function Gv(t,e){return e?t?function(){return $t(xe(t)?t.call(this,this):t,xe(e)?e.call(this,this):e)}:e:t}function QA(t,e){return oi(zd(t),zd(e))}function zd(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Sn(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?$t($t(Object.create(null),t),e):e}function qA(t,e){if(!t)return e;if(!e)return t;const n=$t(Object.create(null),t);for(const r in e)n[r]=Sn(t[r],e[r]);return n}function JA(t,e,n,r=!1){const s={},i={};Eu(i,Uh,1),t.propsDefaults=Object.create(null),tb(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ve(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ph(t.emitsOptions,f))continue;const d=e[f];if(l)if(nt(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const p=Mn(f);s[p]=Yd(l,a,p,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{tb(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!nt(e,h)&&((u=Zn(h))===h||!nt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Yd(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!nt(e,h))&&(delete i[h],c=!0)}c&&ls(t,"set","$attrs")}function tb(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ga(l))continue;const c=e[l];let u;s&&nt(s,u=Mn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ph(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ve(n),c=a||ft;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Yd(s,l,h,c[h],t,!nt(c,h))}}return o}function Yd(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&xe(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ws(s),r=c[n]=l.call(null,e),Ls())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Zn(n))&&(r=!0))}return r}function nb(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!xe(t)){const u=h=>{l=!0;const[f,d]=nb(h,e,!0);$t(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return pt(t)&&r.set(t,wo),wo;if(he(i))for(let u=0;u<i.length;u++){const h=Mn(i[u]);zv(h)&&(o[h]=ft)}else if(i)for(const u in i){const h=Mn(u);if(zv(h)){const f=i[u],d=o[h]=he(f)||xe(f)?{type:f}:Object.assign({},f);if(d){const p=Qv(Boolean,d.type),m=Qv(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||nt(d,"default"))&&a.push(h)}}}const c=[o,a];return pt(t)&&r.set(t,c),c}function zv(t){return t[0]!=="$"}function Yv(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xv(t,e){return Yv(t)===Yv(e)}function Qv(t,e){return he(e)?e.findIndex(n=>Xv(n,t)):xe(e)&&Xv(e,t)?0:-1}const rb=t=>t[0]==="_"||t==="$stable",Fg=t=>he(t)?t.map(Vn):[Vn(t)],eR=(t,e,n)=>{if(e._n)return e;const r=it((...s)=>Fg(e(...s)),n);return r._c=!1,r},sb=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rb(s))continue;const i=t[s];if(xe(i))e[s]=eR(s,i,r);else if(i!=null){const o=Fg(i);e[s]=()=>o}}},ib=(t,e)=>{const n=Fg(e);t.slots.default=()=>n},tR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ve(e),Eu(e,"_",n)):sb(e,t.slots={})}else t.slots={},e&&ib(t,e);Eu(t.slots,Uh,1)},nR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ft;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($t(s,e),!n&&a===1&&delete s._):(i=!e.$stable,sb(e,s)),o=e}else e&&(ib(t,e),o={default:1});if(i)for(const a in s)!rb(a)&&!(a in o)&&delete s[a]};function ob(){return{app:null,config:{isNativeTag:S1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rR=0;function sR(t,e){return function(r,s=null){xe(r)||(r=Object.assign({},r)),s!=null&&!pt(s)&&(s=null);const i=ob(),o=new Set;let a=!1;const l=i.app={_uid:rR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sb,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&xe(c.install)?(o.add(c),c.install(l,...u)):xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=le(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,$h(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Iu(t,e,n,r,s=!1){if(he(t)){t.forEach((f,d)=>Iu(f,e&&(he(e)?e[d]:e),n,r,s));return}if(Ei(r)&&!s)return;const i=r.shapeFlag&4?$h(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(xt(c)?(u[c]=null,nt(h,c)&&(h[c]=null)):Nt(c)&&(c.value=null)),xe(l))es(l,a,12,[o,u]);else{const f=xt(l),d=Nt(l);if(f||d){const p=()=>{if(t.f){const m=f?nt(h,l)?h[l]:u[l]:l.value;s?he(m)&&gg(m,i):he(m)?m.includes(i)||m.push(i):f?(u[l]=[i],nt(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,nt(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,en(p,n)):p()}}}let Es=!1;const Pc=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Nc=t=>t.nodeType===8;function iR(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),Tu(),g._vnode=v;return}Es=!1,h(g.firstChild,v,null,null,null),Tu(),g._vnode=v,Es&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,b,I,C=!1)=>{const A=Nc(v)&&v.data==="[",_=()=>m(v,g,E,b,I,A),{type:S,ref:N,shapeFlag:L,patchFlag:U}=g;let k=v.nodeType;g.el=v,U===-2&&(C=!1,g.dynamicChildren=null);let O=null;switch(S){case Ri:k!==3?g.children===""?(l(g.el=s(""),o(v),v),O=v):O=_():(v.data!==g.children&&(Es=!0,v.data=g.children),O=i(v));break;case yn:k!==8||A?O=_():O=i(v);break;case wi:if(A&&(v=i(v),k=v.nodeType),k===1||k===3){O=v;const te=!g.children.length;for(let B=0;B<g.staticCount;B++)te&&(g.children+=O.nodeType===1?O.outerHTML:O.data),B===g.staticCount-1&&(g.anchor=O),O=i(O);return A?i(O):O}else _();break;case Je:A?O=p(v,g,E,b,I,C):O=_();break;default:if(L&1)k!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?O=_():O=f(v,g,E,b,I,C);else if(L&6){g.slotScopeIds=I;const te=o(v);if(e(g,te,null,E,b,Pc(te),C),O=A?y(v):i(v),O&&Nc(O)&&O.data==="teleport end"&&(O=i(O)),Ei(g)){let B;A?(B=le(Je),B.anchor=O?O.previousSibling:te.lastChild):B=v.nodeType===3?pn(""):le("div"),B.el=v,g.component.subTree=B}}else L&64?k!==8?O=_():O=g.type.hydrate(v,g,E,b,I,C,t,d):L&128&&(O=g.type.hydrate(v,g,E,b,Pc(o(v)),I,C,t,h))}return N!=null&&Iu(N,null,b,g),O},f=(v,g,E,b,I,C)=>{C=C||!!g.dynamicChildren;const{type:A,props:_,patchFlag:S,shapeFlag:N,dirs:L}=g,U=A==="input"&&L||A==="option";if(U||S!==-1){if(L&&Tr(g,null,E,"created"),_)if(U||!C||S&48)for(const O in _)(U&&O.endsWith("value")||Wl(O)&&!Ga(O))&&r(v,O,null,_[O],!1,void 0,E);else _.onClick&&r(v,"onClick",null,_.onClick,!1,void 0,E);let k;if((k=_&&_.onVnodeBeforeMount)&&Pn(k,E,g),L&&Tr(g,null,E,"beforeMount"),((k=_&&_.onVnodeMounted)||L)&&Fw(()=>{k&&Pn(k,E,g),L&&Tr(g,null,E,"mounted")},b),N&16&&!(_&&(_.innerHTML||_.textContent))){let O=d(v.firstChild,g,v,E,b,I,C);for(;O;){Es=!0;const te=O;O=O.nextSibling,a(te)}}else N&8&&v.textContent!==g.children&&(Es=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,b,I,C,A)=>{A=A||!!g.dynamicChildren;const _=g.children,S=_.length;for(let N=0;N<S;N++){const L=A?_[N]:_[N]=Vn(_[N]);if(v)v=h(v,L,b,I,C,A);else{if(L.type===Ri&&!L.children)continue;Es=!0,n(null,L,E,null,b,I,Pc(E),C)}}return v},p=(v,g,E,b,I,C)=>{const{slotScopeIds:A}=g;A&&(I=I?I.concat(A):A);const _=o(v),S=d(i(v),g,_,E,b,I,C);return S&&Nc(S)&&S.data==="]"?i(g.anchor=S):(Es=!0,l(g.anchor=c("]"),_,S),S)},m=(v,g,E,b,I,C)=>{if(Es=!0,g.el=null,C){const S=y(v);for(;;){const N=i(v);if(N&&N!==S)a(N);else break}}const A=i(v),_=o(v);return a(v),n(null,g,_,A,E,b,Pc(_),I),A},y=v=>{let g=0;for(;v;)if(v=i(v),v&&Nc(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return i(v);g--}return v};return[u,h]}const en=Fw;function ab(t){return cb(t)}function lb(t){return cb(t,iR)}function cb(t,e){const n=P1();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=pr,insertStaticContent:p}=t,m=(w,T,P,F=null,$=null,G=null,ne=!1,q=null,Q=!!T.dynamicChildren)=>{if(w===T)return;w&&!ur(w,T)&&(F=H(w),je(w,$,G,!0),w=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null);const{type:j,ref:fe,shapeFlag:ae}=T;switch(j){case Ri:y(w,T,P,F);break;case yn:v(w,T,P,F);break;case wi:w==null&&g(T,P,F,ne);break;case Je:U(w,T,P,F,$,G,ne,q,Q);break;default:ae&1?I(w,T,P,F,$,G,ne,q,Q):ae&6?k(w,T,P,F,$,G,ne,q,Q):(ae&64||ae&128)&&j.process(w,T,P,F,$,G,ne,q,Q,Te)}fe!=null&&$&&Iu(fe,w&&w.ref,G,T||w,!T)},y=(w,T,P,F)=>{if(w==null)r(T.el=a(T.children),P,F);else{const $=T.el=w.el;T.children!==w.children&&c($,T.children)}},v=(w,T,P,F)=>{w==null?r(T.el=l(T.children||""),P,F):T.el=w.el},g=(w,T,P,F)=>{[w.el,w.anchor]=p(w.children,T,P,F,w.el,w.anchor)},E=({el:w,anchor:T},P,F)=>{let $;for(;w&&w!==T;)$=f(w),r(w,P,F),w=$;r(T,P,F)},b=({el:w,anchor:T})=>{let P;for(;w&&w!==T;)P=f(w),s(w),w=P;s(T)},I=(w,T,P,F,$,G,ne,q,Q)=>{ne=ne||T.type==="svg",w==null?C(T,P,F,$,G,ne,q,Q):S(w,T,$,G,ne,q,Q)},C=(w,T,P,F,$,G,ne,q)=>{let Q,j;const{type:fe,props:ae,shapeFlag:de,transition:we,dirs:ke}=w;if(Q=w.el=o(w.type,G,ae&&ae.is,ae),de&8?u(Q,w.children):de&16&&_(w.children,Q,null,F,$,G&&fe!=="foreignObject",ne,q),ke&&Tr(w,null,F,"created"),A(Q,w,w.scopeId,ne,F),ae){for(const Xe in ae)Xe!=="value"&&!Ga(Xe)&&i(Q,Xe,null,ae[Xe],G,w.children,F,$,z);"value"in ae&&i(Q,"value",null,ae.value),(j=ae.onVnodeBeforeMount)&&Pn(j,F,w)}ke&&Tr(w,null,F,"beforeMount");const st=(!$||$&&!$.pendingBranch)&&we&&!we.persisted;st&&we.beforeEnter(Q),r(Q,T,P),((j=ae&&ae.onVnodeMounted)||st||ke)&&en(()=>{j&&Pn(j,F,w),st&&we.enter(Q),ke&&Tr(w,null,F,"mounted")},$)},A=(w,T,P,F,$)=>{if(P&&d(w,P),F)for(let G=0;G<F.length;G++)d(w,F[G]);if($){let G=$.subTree;if(T===G){const ne=$.vnode;A(w,ne,ne.scopeId,ne.slotScopeIds,$.parent)}}},_=(w,T,P,F,$,G,ne,q,Q=0)=>{for(let j=Q;j<w.length;j++){const fe=w[j]=q?Is(w[j]):Vn(w[j]);m(null,fe,T,P,F,$,G,ne,q)}},S=(w,T,P,F,$,G,ne)=>{const q=T.el=w.el;let{patchFlag:Q,dynamicChildren:j,dirs:fe}=T;Q|=w.patchFlag&16;const ae=w.props||ft,de=T.props||ft;let we;P&&ti(P,!1),(we=de.onVnodeBeforeUpdate)&&Pn(we,P,T,w),fe&&Tr(T,w,P,"beforeUpdate"),P&&ti(P,!0);const ke=$&&T.type!=="foreignObject";if(j?N(w.dynamicChildren,j,q,P,F,ke,G):ne||ce(w,T,q,null,P,F,ke,G,!1),Q>0){if(Q&16)L(q,T,ae,de,P,F,$);else if(Q&2&&ae.class!==de.class&&i(q,"class",null,de.class,$),Q&4&&i(q,"style",ae.style,de.style,$),Q&8){const st=T.dynamicProps;for(let Xe=0;Xe<st.length;Xe++){const R=st[Xe],x=ae[R],D=de[R];(D!==x||R==="value")&&i(q,R,x,D,$,w.children,P,F,z)}}Q&1&&w.children!==T.children&&u(q,T.children)}else!ne&&j==null&&L(q,T,ae,de,P,F,$);((we=de.onVnodeUpdated)||fe)&&en(()=>{we&&Pn(we,P,T,w),fe&&Tr(T,w,P,"updated")},F)},N=(w,T,P,F,$,G,ne)=>{for(let q=0;q<T.length;q++){const Q=w[q],j=T[q],fe=Q.el&&(Q.type===Je||!ur(Q,j)||Q.shapeFlag&70)?h(Q.el):P;m(Q,j,fe,null,F,$,G,ne,!0)}},L=(w,T,P,F,$,G,ne)=>{if(P!==F){if(P!==ft)for(const q in P)!Ga(q)&&!(q in F)&&i(w,q,P[q],null,ne,T.children,$,G,z);for(const q in F){if(Ga(q))continue;const Q=F[q],j=P[q];Q!==j&&q!=="value"&&i(w,q,j,Q,ne,T.children,$,G,z)}"value"in F&&i(w,"value",P.value,F.value)}},U=(w,T,P,F,$,G,ne,q,Q)=>{const j=T.el=w?w.el:a(""),fe=T.anchor=w?w.anchor:a("");let{patchFlag:ae,dynamicChildren:de,slotScopeIds:we}=T;we&&(q=q?q.concat(we):we),w==null?(r(j,P,F),r(fe,P,F),_(T.children,P,fe,$,G,ne,q,Q)):ae>0&&ae&64&&de&&w.dynamicChildren?(N(w.dynamicChildren,de,P,$,G,ne,q),(T.key!=null||$&&T===$.subTree)&&Ug(w,T,!0)):ce(w,T,P,fe,$,G,ne,q,Q)},k=(w,T,P,F,$,G,ne,q,Q)=>{T.slotScopeIds=q,w==null?T.shapeFlag&512?$.ctx.activate(T,P,F,ne,Q):O(T,P,F,$,G,ne,Q):te(w,T,Q)},O=(w,T,P,F,$,G,ne)=>{const q=w.component=gb(w,F,$);if(Yl(w)&&(q.ctx.renderer=Te),vb(q),q.asyncDep){if($&&$.registerDep(q,B),!w.el){const Q=q.subTree=le(yn);v(null,Q,T,P)}return}B(q,w,T,P,$,G,ne)},te=(w,T,P)=>{const F=T.component=w.component;if(RA(w,T,P))if(F.asyncDep&&!F.asyncResolved){Z(F,T,P);return}else F.next=T,bA(F.update),F.update();else T.el=w.el,F.vnode=T},B=(w,T,P,F,$,G,ne)=>{const q=()=>{if(w.isMounted){let{next:fe,bu:ae,u:de,parent:we,vnode:ke}=w,st=fe,Xe;ti(w,!1),fe?(fe.el=ke.el,Z(w,fe,ne)):fe=ke,ae&&_o(ae),(Xe=fe.props&&fe.props.onVnodeBeforeUpdate)&&Pn(Xe,we,fe,ke),ti(w,!0);const R=ru(w),x=w.subTree;w.subTree=R,m(x,R,h(x.el),H(x),w,$,G),fe.el=R.el,st===null&&Og(w,R.el),de&&en(de,$),(Xe=fe.props&&fe.props.onVnodeUpdated)&&en(()=>Pn(Xe,we,fe,ke),$)}else{let fe;const{el:ae,props:de}=T,{bm:we,m:ke,parent:st}=w,Xe=Ei(T);if(ti(w,!1),we&&_o(we),!Xe&&(fe=de&&de.onVnodeBeforeMount)&&Pn(fe,st,T),ti(w,!0),ae&&Ce){const R=()=>{w.subTree=ru(w),Ce(ae,w.subTree,w,$,null)};Xe?T.type.__asyncLoader().then(()=>!w.isUnmounted&&R()):R()}else{const R=w.subTree=ru(w);m(null,R,P,F,w,$,G),T.el=R.el}if(ke&&en(ke,$),!Xe&&(fe=de&&de.onVnodeMounted)){const R=T;en(()=>Pn(fe,st,R),$)}(T.shapeFlag&256||st&&Ei(st.vnode)&&st.vnode.shapeFlag&256)&&w.a&&en(w.a,$),w.isMounted=!0,T=P=F=null}},Q=w.effect=new Gl(q,()=>Oh(j),w.scope),j=w.update=()=>Q.run();j.id=w.uid,ti(w,!0),j()},Z=(w,T,P)=>{T.component=w;const F=w.vnode.props;w.vnode=T,w.next=null,ZA(w,T.props,F,P),nR(w,T.children,P),ra(),Bv(),sa()},ce=(w,T,P,F,$,G,ne,q,Q=!1)=>{const j=w&&w.children,fe=w?w.shapeFlag:0,ae=T.children,{patchFlag:de,shapeFlag:we}=T;if(de>0){if(de&128){yt(j,ae,P,F,$,G,ne,q,Q);return}else if(de&256){He(j,ae,P,F,$,G,ne,q,Q);return}}we&8?(fe&16&&z(j,$,G),ae!==j&&u(P,ae)):fe&16?we&16?yt(j,ae,P,F,$,G,ne,q,Q):z(j,$,G,!0):(fe&8&&u(P,""),we&16&&_(ae,P,F,$,G,ne,q,Q))},He=(w,T,P,F,$,G,ne,q,Q)=>{w=w||wo,T=T||wo;const j=w.length,fe=T.length,ae=Math.min(j,fe);let de;for(de=0;de<ae;de++){const we=T[de]=Q?Is(T[de]):Vn(T[de]);m(w[de],we,P,null,$,G,ne,q,Q)}j>fe?z(w,$,G,!0,!1,ae):_(T,P,F,$,G,ne,q,Q,ae)},yt=(w,T,P,F,$,G,ne,q,Q)=>{let j=0;const fe=T.length;let ae=w.length-1,de=fe-1;for(;j<=ae&&j<=de;){const we=w[j],ke=T[j]=Q?Is(T[j]):Vn(T[j]);if(ur(we,ke))m(we,ke,P,null,$,G,ne,q,Q);else break;j++}for(;j<=ae&&j<=de;){const we=w[ae],ke=T[de]=Q?Is(T[de]):Vn(T[de]);if(ur(we,ke))m(we,ke,P,null,$,G,ne,q,Q);else break;ae--,de--}if(j>ae){if(j<=de){const we=de+1,ke=we<fe?T[we].el:F;for(;j<=de;)m(null,T[j]=Q?Is(T[j]):Vn(T[j]),P,ke,$,G,ne,q,Q),j++}}else if(j>de)for(;j<=ae;)je(w[j],$,G,!0),j++;else{const we=j,ke=j,st=new Map;for(j=ke;j<=de;j++){const me=T[j]=Q?Is(T[j]):Vn(T[j]);me.key!=null&&st.set(me.key,j)}let Xe,R=0;const x=de-ke+1;let D=!1,V=0;const oe=new Array(x);for(j=0;j<x;j++)oe[j]=0;for(j=we;j<=ae;j++){const me=w[j];if(R>=x){je(me,$,G,!0);continue}let Me;if(me.key!=null)Me=st.get(me.key);else for(Xe=ke;Xe<=de;Xe++)if(oe[Xe-ke]===0&&ur(me,T[Xe])){Me=Xe;break}Me===void 0?je(me,$,G,!0):(oe[Me-ke]=j+1,Me>=V?V=Me:D=!0,m(me,T[Me],P,null,$,G,ne,q,Q),R++)}const be=D?oR(oe):wo;for(Xe=be.length-1,j=x-1;j>=0;j--){const me=ke+j,Me=T[me],St=me+1<fe?T[me+1].el:F;oe[j]===0?m(null,Me,P,St,$,G,ne,q,Q):D&&(Xe<0||j!==be[Xe]?Ye(Me,P,St,2):Xe--)}}},Ye=(w,T,P,F,$=null)=>{const{el:G,type:ne,transition:q,children:Q,shapeFlag:j}=w;if(j&6){Ye(w.component.subTree,T,P,F);return}if(j&128){w.suspense.move(T,P,F);return}if(j&64){ne.move(w,T,P,Te);return}if(ne===Je){r(G,T,P);for(let ae=0;ae<Q.length;ae++)Ye(Q[ae],T,P,F);r(w.anchor,T,P);return}if(ne===wi){E(w,T,P);return}if(F!==2&&j&1&&q)if(F===0)q.beforeEnter(G),r(G,T,P),en(()=>q.enter(G),$);else{const{leave:ae,delayLeave:de,afterLeave:we}=q,ke=()=>r(G,T,P),st=()=>{ae(G,()=>{ke(),we&&we()})};de?de(G,ke,st):st()}else r(G,T,P)},je=(w,T,P,F=!1,$=!1)=>{const{type:G,props:ne,ref:q,children:Q,dynamicChildren:j,shapeFlag:fe,patchFlag:ae,dirs:de}=w;if(q!=null&&Iu(q,null,P,w,!0),fe&256){T.ctx.deactivate(w);return}const we=fe&1&&de,ke=!Ei(w);let st;if(ke&&(st=ne&&ne.onVnodeBeforeUnmount)&&Pn(st,T,w),fe&6)M(w.component,P,F);else{if(fe&128){w.suspense.unmount(P,F);return}we&&Tr(w,null,T,"beforeUnmount"),fe&64?w.type.remove(w,T,P,$,Te,F):j&&(G!==Je||ae>0&&ae&64)?z(j,T,P,!1,!0):(G===Je&&ae&384||!$&&fe&16)&&z(Q,T,P),F&&gt(w)}(ke&&(st=ne&&ne.onVnodeUnmounted)||we)&&en(()=>{st&&Pn(st,T,w),we&&Tr(w,null,T,"unmounted")},P)},gt=w=>{const{type:T,el:P,anchor:F,transition:$}=w;if(T===Je){Ot(P,F);return}if(T===wi){b(w);return}const G=()=>{s(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:ne,delayLeave:q}=$,Q=()=>ne(P,G);q?q(w.el,G,Q):Q()}else G()},Ot=(w,T)=>{let P;for(;w!==T;)P=f(w),s(w),w=P;s(T)},M=(w,T,P)=>{const{bum:F,scope:$,update:G,subTree:ne,um:q}=w;F&&_o(F),$.stop(),G&&(G.active=!1,je(ne,w,T,P)),q&&en(q,T),en(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},z=(w,T,P,F=!1,$=!1,G=0)=>{for(let ne=G;ne<w.length;ne++)je(w[ne],T,P,F,$)},H=w=>w.shapeFlag&6?H(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),ie=(w,T,P)=>{w==null?T._vnode&&je(T._vnode,null,null,!0):m(T._vnode||null,w,T,null,null,null,P),Bv(),Tu(),T._vnode=w},Te={p:m,um:je,m:Ye,r:gt,mt:O,mc:_,pc:ce,pbc:N,n:H,o:t};let et,Ce;return e&&([et,Ce]=e(Te)),{render:ie,hydrate:et,createApp:sR(ie,et)}}function ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ug(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Is(s[i]),a.el=o.el),n||Ug(o,a)),a.type===Ri&&(a.el=o.el)}}function oR(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const aR=t=>t.__isTeleport,Xa=t=>t&&(t.disabled||t.disabled===""),qv=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Xd=(t,e)=>{const n=t&&t.to;return xt(n)?e?e(n):null:n},lR={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=Xa(e.props);let{shapeFlag:g,children:E,dynamicChildren:b}=e;if(t==null){const I=e.el=m(""),C=e.anchor=m("");d(I,n,r),d(C,n,r);const A=e.target=Xd(e.props,p),_=e.targetAnchor=m("");A&&(d(_,A),o=o||qv(A));const S=(N,L)=>{g&16&&u(E,N,L,s,i,o,a,l)};v?S(n,C):A&&S(A,_)}else{e.el=t.el;const I=e.anchor=t.anchor,C=e.target=t.target,A=e.targetAnchor=t.targetAnchor,_=Xa(t.props),S=_?n:C,N=_?I:A;if(o=o||qv(C),b?(f(t.dynamicChildren,b,S,s,i,o,a),Ug(t,e,!0)):l||h(t,e,S,N,s,i,o,a,!1),v)_||Dc(e,n,I,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Xd(e.props,p);L&&Dc(e,L,null,c,0)}else _&&Dc(e,C,A,c,1)}ub(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!Xa(f))&&(i(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];s(p,e,n,!0,!!p.dynamicChildren)}},move:Dc,hydrate:cR};function Dc(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Xa(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);h&&r(a,e,n)}function cR(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Xd(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Xa(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}ub(e)}return e.anchor&&o(e.anchor)}const uR=lR;function ub(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Je=Symbol(void 0),Ri=Symbol(void 0),yn=Symbol(void 0),wi=Symbol(void 0),Qa=[];let Dn=null;function K(t=!1){Qa.push(Dn=t?null:[])}function hb(){Qa.pop(),Dn=Qa[Qa.length-1]||null}let xi=1;function Qd(t){xi+=t}function fb(t){return t.dynamicChildren=xi>0?Dn||wo:null,hb(),xi>0&&Dn&&Dn.push(t),t}function Ie(t,e,n,r,s,i){return fb(ee(t,e,n,r,s,i,!0))}function Oe(t,e,n,r,s){return fb(le(t,e,n,r,s,!0))}function Hs(t){return t?t.__v_isVNode===!0:!1}function ur(t,e){return t.type===e.type&&t.key===e.key}function hR(t){}const Uh="__vInternal",db=({key:t})=>t??null,su=({ref:t,ref_key:e,ref_for:n})=>t!=null?xt(t)||Nt(t)||xe(t)?{i:sn,r:t,k:e,f:!!n}:t:null;function ee(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&db(e),ref:e&&su(e),scopeId:Nh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?($g(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xt(n)?8:16),xi>0&&!o&&Dn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Dn.push(l),l}const le=fR;function fR(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qw)&&(t=yn),Hs(t)){const a=Dr(t,e,!0);return n&&$g(a,n),xi>0&&!i&&Dn&&(a.shapeFlag&6?Dn[Dn.indexOf(t)]=a:Dn.push(a)),a.patchFlag|=-2,a}if(wR(t)&&(t=t.__vccOpts),e){e=pb(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=as(a)),pt(l)&&(Tg(l)&&!he(l)&&(l=$t({},l)),e.style=ta(l))}const o=xt(t)?1:Lw(t)?128:aR(t)?64:pt(t)?4:xe(t)?2:0;return ee(t,e,n,r,s,o,i,!0)}function pb(t){return t?Tg(t)||Uh in t?$t({},t):t:null}function Dr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Sl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&db(a),ref:e&&e.ref?n&&s?he(s)?s.concat(su(e)):[s,su(e)]:su(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pn(t=" ",e=0){return le(Ri,null,t,e)}function dR(t,e){const n=le(wi,null,t);return n.staticCount=e,n}function bt(t="",e=!1){return e?(K(),Oe(yn,null,t)):le(yn,null,t)}function Vn(t){return t==null||typeof t=="boolean"?le(yn):he(t)?le(Je,null,t.slice()):typeof t=="object"?Is(t):le(Ri,null,String(t))}function Is(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function $g(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$g(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Uh in e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else xe(e)?(e={default:e,_ctx:sn},n=32):(e=String(e),r&64?(n=16,e=[pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=as([e.class,r.class]));else if(s==="style")e.style=ta([e.style,r.style]);else if(Wl(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pn(t,e,n,r=null){Wn(t,e,7,[n,r])}const pR=ob();let gR=0;function gb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pR,i={uid:gR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nb(r,s),emitsOptions:Dw(r,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:r.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=TA.bind(null,i),t.ce&&t.ce(i),i}let Ft=null;const jr=()=>Ft||sn,Ws=t=>{Ft=t,t.scope.on()},Ls=()=>{Ft&&Ft.scope.off(),Ft=null};function mb(t){return t.vnode.shapeFlag&4}let Lo=!1;function vb(t,e=!1){Lo=e;const{props:n,children:r}=t.vnode,s=mb(t);JA(t,n,s,e),tR(t,r);const i=s?mR(t,e):void 0;return Lo=!1,i}function mR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ci(new Proxy(t.ctx,Kd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Eb(t):null;Ws(t),ra();const i=es(r,t,0,[t.props,s]);if(sa(),Ls(),mg(i)){if(i.then(Ls,Ls),e)return i.then(o=>{qd(t,o,e)}).catch(o=>{ji(o,t,0)});t.asyncDep=i}else qd(t,i,e)}else yb(t,e)}function qd(t,e,n){xe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Cg(e)),yb(t,n)}let Cu,Jd;function vR(t){Cu=t,Jd=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,GA))}}const yR=()=>!Cu;function yb(t,e,n){const r=t.type;if(!t.render){if(!e&&Cu&&!r.render){const s=r.template||Lg(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=$t($t({isCustomElement:i,delimiters:a},o),l);r.render=Cu(s,c)}}t.render=r.render||pr,Jd&&Jd(t)}Ws(t),ra(),zA(t),sa(),Ls()}function ER(t){return new Proxy(t.attrs,{get(e,n){return Un(t,"get","$attrs"),e[n]}})}function Eb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ER(t))},slots:t.slots,emit:t.emit,expose:e}}function $h(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cg(Ci(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ya)return Ya[n](t)},has(e,n){return n in e||n in Ya}}))}function Zd(t,e=!0){return xe(t)?t.displayName||t.name:t.name||e&&t.__name}function wR(t){return xe(t)&&"__vccOpts"in t}const vt=(t,e)=>mA(t,e,Lo);function bR(){return null}function _R(){return null}function TR(t){}function SR(t,e){return null}function IR(){return wb().slots}function CR(){return wb().attrs}function wb(){const t=jr();return t.setupContext||(t.setupContext=Eb(t))}function AR(t,e){const n=he(t)?t.reduce((r,s)=>(r[s]={},r),{}):t;for(const r in e){const s=n[r];s?he(s)||xe(s)?n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(n[r]={default:e[r]})}return n}function RR(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function xR(t){const e=jr();let n=t();return Ls(),mg(n)&&(n=n.catch(r=>{throw Ws(e),r})),[n,()=>Ws(e)]}function Bh(t,e,n){const r=arguments.length;return r===2?pt(e)&&!he(e)?Hs(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hs(n)&&(n=[n]),le(t,e,n))}const bb=Symbol(""),_b=()=>Ln(bb);function OR(){}function PR(t,e,n,r){const s=n[r];if(s&&Tb(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function Tb(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(ko(n[r],e[r]))return!1;return xi>0&&Dn&&Dn.push(t),!0}const Sb="3.2.47",NR={createComponentInstance:gb,setupComponent:vb,renderComponentRoot:ru,setCurrentRenderingInstance:bl,isVNode:Hs,normalizeVNode:Vn},DR=NR,kR=null,MR=null,LR="http://www.w3.org/2000/svg",hi=typeof document<"u"?document:null,Jv=hi&&hi.createElement("template"),FR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?hi.createElementNS(LR,t):hi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jv.innerHTML=r?`<svg>${t}</svg>`:t;const a=Jv.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function UR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $R(t,e,n){const r=t.style,s=xt(n);if(n&&!s){if(e&&!xt(e))for(const i in e)n[i]==null&&ep(r,i,"");for(const i in n)ep(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Zv=/\s*!important$/;function ep(t,e,n){if(he(n))n.forEach(r=>ep(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BR(t,e);Zv.test(n)?t.setProperty(Zn(r),n.replace(Zv,""),"important"):t[r]=n}}const ey=["Webkit","Moz","ms"],Vf={};function BR(t,e){const n=Vf[e];if(n)return n;let r=Mn(e);if(r!=="filter"&&r in t)return Vf[e]=r;r=Kl(r);for(let s=0;s<ey.length;s++){const i=ey[s]+r;if(i in t)return Vf[e]=i}return e}const ty="http://www.w3.org/1999/xlink";function jR(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ty,e.slice(6,e.length)):t.setAttributeNS(ty,e,n);else{const i=_1(e);n==null||i&&!ow(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function VR(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ow(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function HR(t,e,n,r){t.removeEventListener(e,n,r)}function WR(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=KR(e);if(r){const c=i[e]=YR(r,s);zr(t,a,c,l)}else o&&(HR(t,a,o,l),i[e]=void 0)}}const ny=/(?:Once|Passive|Capture)$/;function KR(t){let e;if(ny.test(t)){e={};let r;for(;r=t.match(ny);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}let Hf=0;const GR=Promise.resolve(),zR=()=>Hf||(GR.then(()=>Hf=0),Hf=Date.now());function YR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wn(XR(r,n.value),e,5,[r])};return n.value=t,n.attached=zR(),n}function XR(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ry=/^on[a-z]/,QR=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?UR(t,r,s):e==="style"?$R(t,n,r):Wl(e)?pg(e)||WR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qR(t,e,r,s))?VR(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jR(t,e,r,s))};function qR(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ry.test(e)&&xe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ry.test(e)&&xt(n)?!1:e in t}function Ib(t,e){const n=$e(t);class r extends jh{constructor(i){super(n,i,e)}}return r.def=n,r}const JR=t=>Ib(t,Vb),ZR=typeof HTMLElement<"u"?HTMLElement:class{};class jh extends ZR{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Vi(()=>{this._connected||(rp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!he(i))for(const l in i){const c=i[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=bu(this._props[l])),(a||(a=Object.create(null)))[Mn(l)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=he(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Mn))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.getAttribute(e);const r=Mn(e);this._numberProps&&this._numberProps[r]&&(n=bu(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Zn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Zn(e),n+""):n||this.removeAttribute(Zn(e))))}_update(){rp(this._createVNode(),this.shadowRoot)}_createVNode(){const e=le(this._def,$t({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Zn(i)!==i&&r(Zn(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof jh){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function ex(t="$style"){{const e=jr();if(!e)return ft;const n=e.type.__cssModules;if(!n)return ft;const r=n[t];return r||ft}}function tx(t){const e=jr();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>np(i,s))},r=()=>{const s=t(e.proxy);tp(e.subTree,s),n(s)};Uw(r),Br(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Fh(()=>s.disconnect())})}function tp(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{tp(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)np(t.el,e);else if(t.type===Je)t.children.forEach(n=>tp(n,e));else if(t.type===wi){let{el:n,anchor:r}=t;for(;n&&(np(n,e),n!==r);)n=n.nextSibling}}function np(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const ws="transition",Ea="animation",Bg=(t,{slots:e})=>Bh(Dg,Ab(t),e);Bg.displayName="Transition";const Cb={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nx=Bg.props=$t({},Dg.props,Cb),ni=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},sy=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function Ab(t){const e={};for(const U in t)U in Cb||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=rx(s),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:b,onLeaveCancelled:I,onBeforeAppear:C=v,onAppear:A=g,onAppearCancelled:_=E}=e,S=(U,k,O)=>{Ts(U,k?u:a),Ts(U,k?c:o),O&&O()},N=(U,k)=>{U._isLeaving=!1,Ts(U,h),Ts(U,d),Ts(U,f),k&&k()},L=U=>(k,O)=>{const te=U?A:g,B=()=>S(k,U,O);ni(te,[k,B]),iy(()=>{Ts(k,U?l:i),Kr(k,U?u:a),sy(te)||oy(k,r,m,B)})};return $t(e,{onBeforeEnter(U){ni(v,[U]),Kr(U,i),Kr(U,o)},onBeforeAppear(U){ni(C,[U]),Kr(U,l),Kr(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const O=()=>N(U,k);Kr(U,h),xb(),Kr(U,f),iy(()=>{U._isLeaving&&(Ts(U,h),Kr(U,d),sy(b)||oy(U,r,y,O))}),ni(b,[U,O])},onEnterCancelled(U){S(U,!1),ni(E,[U])},onAppearCancelled(U){S(U,!0),ni(_,[U])},onLeaveCancelled(U){N(U),ni(I,[U])}})}function rx(t){if(t==null)return null;if(pt(t))return[Wf(t.enter),Wf(t.leave)];{const e=Wf(t);return[e,e]}}function Wf(t){return bu(t)}function Kr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ts(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function iy(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sx=0;function oy(t,e,n,r){const s=t._endId=++sx,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Rb(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Rb(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(`${ws}Delay`),i=r(`${ws}Duration`),o=ay(s,i),a=r(`${Ea}Delay`),l=r(`${Ea}Duration`),c=ay(a,l);let u=null,h=0,f=0;e===ws?o>0&&(u=ws,h=o,f=i.length):e===Ea?c>0&&(u=Ea,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ws:Ea:null,f=u?u===ws?i.length:l.length:0);const d=u===ws&&/\b(transform|all)(,|$)/.test(r(`${ws}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function ay(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ly(n)+ly(t[r])))}function ly(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xb(){return document.body.offsetHeight}const Ob=new WeakMap,Pb=new WeakMap,Nb={name:"TransitionGroup",props:$t({},nx,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=jr(),r=Ng();let s,i;return Mh(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!cx(s[0].el,n.vnode.el,o))return;s.forEach(ox),s.forEach(ax);const a=s.filter(lx);xb(),a.forEach(l=>{const c=l.el,u=c.style;Kr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Ts(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Ve(t),a=Ab(o);let l=o.tag||Je;s=i,i=e.default?Dh(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Ai(u,Mo(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Ai(u,Mo(u,a,r,n)),Ob.set(u,u.el.getBoundingClientRect())}return le(l,null,i)}}},ix=t=>delete t.mode;Nb.props;const Db=Nb;function ox(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ax(t){Pb.set(t,t.el.getBoundingClientRect())}function lx(t){const e=Ob.get(t),n=Pb.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function cx(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Rb(r);return s.removeChild(r),i}const Ks=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>_o(e,n):e};function ux(t){t.target.composing=!0}function cy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Au={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ks(s);const i=r||s.props&&s.props.type==="number";zr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wu(a)),t._assign(a)}),n&&zr(t,"change",()=>{t.value=t.value.trim()}),e||(zr(t,"compositionstart",ux),zr(t,"compositionend",cy),zr(t,"change",cy))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ks(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&wu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jg={deep:!0,created(t,e,n){t._assign=Ks(n),zr(t,"change",()=>{const r=t._modelValue,s=Fo(t),i=t.checked,o=t._assign;if(he(r)){const a=_h(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Bi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Mb(t,i))})},mounted:uy,beforeUpdate(t,e,n){t._assign=Ks(n),uy(t,e,n)}};function uy(t,{value:e,oldValue:n},r){t._modelValue=e,he(e)?t.checked=_h(e,r.props.value)>-1:Bi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=js(e,Mb(t,!0)))}const Vg={created(t,{value:e},n){t.checked=js(e,n.props.value),t._assign=Ks(n),zr(t,"change",()=>{t._assign(Fo(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Ks(r),e!==n&&(t.checked=js(e,r.props.value))}},kb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bi(e);zr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?wu(Fo(o)):Fo(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ks(r)},mounted(t,{value:e}){hy(t,e)},beforeUpdate(t,e,n){t._assign=Ks(n)},updated(t,{value:e}){hy(t,e)}};function hy(t,e){const n=t.multiple;if(!(n&&!he(e)&&!Bi(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Fo(i);if(n)he(e)?i.selected=_h(e,o)>-1:i.selected=e.has(o);else if(js(Fo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fo(t){return"_value"in t?t._value:t.value}function Mb(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Lb={created(t,e,n){kc(t,e,n,null,"created")},mounted(t,e,n){kc(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){kc(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){kc(t,e,n,r,"updated")}};function Fb(t,e){switch(t){case"SELECT":return kb;case"TEXTAREA":return Au;default:switch(e){case"checkbox":return jg;case"radio":return Vg;default:return Au}}}function kc(t,e,n,r,s){const o=Fb(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function hx(){Au.getSSRProps=({value:t})=>({value:t}),Vg.getSSRProps=({value:t},e)=>{if(e.props&&js(e.props.value,t))return{checked:!0}},jg.getSSRProps=({value:t},e)=>{if(he(t)){if(e.props&&_h(t,e.props.value)>-1)return{checked:!0}}else if(Bi(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Lb.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Fb(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const fx=["ctrl","shift","alt","meta"],dx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fx.some(n=>t[`${n}Key`]&&!e.includes(n))},Vh=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=dx[e[s]];if(i&&i(n,e))return}return t(n,...r)},px={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ub=(t,e)=>n=>{if(!("key"in n))return;const r=Zn(n.key);if(e.some(s=>s===r||px[s]===r))return t(n)},Uo={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wa(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wa(t,!0),r.enter(t)):r.leave(t,()=>{wa(t,!1)}):wa(t,e))},beforeUnmount(t,{value:e}){wa(t,e)}};function wa(t,e){t.style.display=e?t._vod:"none"}function gx(){Uo.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const $b=$t({patchProp:QR},FR);let qa,fy=!1;function Bb(){return qa||(qa=ab($b))}function jb(){return qa=fy?qa:lb($b),fy=!0,qa}const rp=(...t)=>{Bb().render(...t)},Vb=(...t)=>{jb().hydrate(...t)},Hb=(...t)=>{const e=Bb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wb(r);if(!s)return;const i=e._component;!xe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},mx=(...t)=>{const e=jb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wb(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Wb(t){return xt(t)?document.querySelector(t):t}let dy=!1;const vx=()=>{dy||(dy=!0,hx(),gx())},yx=()=>{},Ex=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Dg,Comment:yn,EffectScope:yg,Fragment:Je,KeepAlive:jA,ReactiveEffect:Gl,Static:wi,Suspense:OA,Teleport:uR,Text:Ri,Transition:Bg,TransitionGroup:Db,VueElement:jh,assertNumber:yA,callWithAsyncErrorHandling:Wn,callWithErrorHandling:es,camelize:Mn,capitalize:Kl,cloneVNode:Dr,compatUtils:MR,compile:yx,computed:vt,createApp:Hb,createBlock:Oe,createCommentVNode:bt,createElementBlock:Ie,createElementVNode:ee,createHydrationRenderer:lb,createPropsRestProxy:RR,createRenderer:ab,createSSRApp:mx,createSlots:Jw,createStaticVNode:dR,createTextVNode:pn,createVNode:le,customRef:dA,defineAsyncComponent:$A,defineComponent:$e,defineCustomElement:Ib,defineEmits:_R,defineExpose:TR,defineProps:bR,defineSSRCustomElement:JR,get devtools(){return oo},effect:k1,effectScope:Sh,getCurrentInstance:jr,getCurrentScope:Eg,getTransitionRawChildren:Dh,guardReactiveProps:pb,h:Bh,handleError:ji,hydrate:Vb,initCustomFormatter:OR,initDirectivesForSSR:vx,inject:Ln,isMemoSame:Tb,isProxy:Tg,isReactive:Rr,isReadonly:Ii,isRef:Nt,isRuntimeOnly:yR,isShallow:vl,isVNode:Hs,markRaw:Ci,mergeDefaults:AR,mergeProps:Sl,nextTick:Vi,normalizeClass:as,normalizeProps:w1,normalizeStyle:ta,onActivated:jw,onBeforeMount:Ww,onBeforeUnmount:Lh,onBeforeUpdate:Kw,onDeactivated:Vw,onErrorCaptured:Xw,onMounted:Br,onRenderTracked:Yw,onRenderTriggered:zw,onScopeDispose:hw,onServerPrefetch:Gw,onUnmounted:Fh,onUpdated:Mh,openBlock:K,popScopeId:Mw,provide:Io,proxyRefs:Cg,pushScopeId:kw,queuePostFlushCb:xg,reactive:Yn,readonly:_g,ref:lt,registerRuntimeCompiler:vR,render:rp,renderList:mr,renderSlot:ns,resolveComponent:Hi,resolveDirective:WA,resolveDynamicComponent:qw,resolveFilter:kR,resolveTransitionHooks:Mo,setBlockTracking:Qd,setDevtoolsHook:Nw,setTransitionHooks:Ai,shallowReactive:Sw,shallowReadonly:lA,shallowRef:Iw,ssrContextKey:bb,ssrUtils:DR,stop:M1,toDisplayString:at,toHandlerKey:za,toHandlers:KA,toRaw:Ve,toRef:Ag,toRefs:Aw,transformVNodeArgs:hR,triggerRef:uA,unref:Y,useAttrs:CR,useCssModule:ex,useCssVars:tx,useSSRContext:_b,useSlots:IR,useTransitionState:Ng,vModelCheckbox:jg,vModelDynamic:Lb,vModelRadio:Vg,vModelSelect:kb,vModelText:Au,vShow:Uo,version:Sb,warn:vA,watch:ts,watchEffect:MA,watchPostEffect:Uw,watchSyncEffect:LA,withAsyncContext:xR,withCtx:it,withDefaults:SR,withDirectives:Tl,withKeys:Ub,withMemo:PR,withModifiers:Vh,withScopeId:SA},Symbol.toStringTag,{value:"Module"}));function wx(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(s){s(n)}),(r=t.get("*"))&&r.slice().map(function(s){s(e,n)})}}}const Ru=wx();let py=0;const bx=()=>{const t=py;return py+=1,t},Kb=()=>(t,e)=>{const n={...t,id:bx(),group:t.group||""};return Ru.emit("notify",{notification:n,timeout:e}),()=>Ru.emit("close",n.id)},Gb="context",sp=$e({__name:"Notification",props:{maxNotifications:{default:10},enter:{default:""},enterFrom:{default:""},enterTo:{default:""},leave:{default:""},leaveFrom:{default:""},leaveTo:{default:""},move:{default:""},moveDelay:{default:""}},emits:["close"],setup(t,{emit:e}){const n=t,r=Ln(Gb),s=Yn({notifications:[],timeouts:{}}),i=vt(()=>s.notifications.filter(u=>u.group===r.group)),o=vt(()=>r.position==="bottom"?[...i.value].slice(0,n.maxNotifications):[...i.value].reverse().slice(0,n.maxNotifications)),a=u=>{s.notifications.splice(s.notifications.findIndex(h=>h.id===u),1),clearTimeout(s.timeouts[u])},l=({notification:u,timeout:h})=>{s.notifications.push(u),s.timeouts[u.id]=window.setTimeout(()=>{a(u.id)},h||3e3)},c=u=>{e("close"),a(u)};return Br(()=>{Ru.on("notify",l),Ru.on("close",a)}),(u,h)=>(K(),Oe(Db,{"enter-active-class":Y(i).length>1?[n.enter,n.moveDelay].join(" "):n.enter,"enter-from-class":n.enterFrom,"enter-to-class":n.enterTo,"leave-active-class":n.leave,"leave-from-class":n.leaveFrom,"leave-to-class":n.leaveTo,"move-class":n.move},{default:it(()=>[ns(u.$slots,"default",{notifications:Y(o),close:c})]),_:3},8,["enter-active-class","enter-from-class","enter-to-class","leave-active-class","leave-from-class","leave-to-class","move-class"]))}}),gy=$e({__name:"NotificationGroup",props:{group:{default:""},position:{default:"top"}},setup(t){const e=t;return Io(Gb,{group:e.group,position:e.position}),(n,r)=>ns(n.$slots,"default",{group:t.group})}});function _x(t){t.config.globalProperties.$notify=Kb(),t.component("Notification",sp),t.component("NotificationGroup",gy),t.component("notification",sp),t.component("notificationGroup",gy)}const Tx={install:_x},Sx=Kb(),Ix={class:"px-4 py-2 -mx-3"},Cx={class:"mx-3"},Ax={class:"font-semibold text-white"},Rx={class:"text-sm text-gray-100"},Kf=$e({__name:"Notification",props:{type:null,color:null},setup(t){return(e,n)=>(K(),Oe(Y(sp),{enter:"transform ease-out duration-300 transition","enter-from":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4","enter-to":"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-500","leave-from":"opacity-100","leave-to":"opacity-0",move:"transition duration-500","move-delay":"delay-300"},{default:it(({notifications:r})=>[(K(!0),Ie(Je,null,mr(r,s=>(K(),Ie("div",{key:s.id},[s.type===t.type?(K(),Ie("div",{key:0,class:as("flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-opacity-75 rounded-lg shadow-md "+t.color)},[ee("div",Ix,[ee("div",Cx,[ee("span",Ax,at(s.title),1),ee("p",Rx,at(s.text),1)])])],2)):bt("",!0)]))),128))]),_:1}))}}),xx={class:"fixed inset-0 flex items-end justify-center p-6 px-4 py-6 pointer-events-none"},Ox={class:"w-full max-w-sm"},Px=$e({__name:"NotificationGroup",setup(t){return(e,n)=>{const r=Hi("NotificationGroup",!0);return K(),Oe(r,null,{default:it(()=>[ee("div",xx,[ee("div",Ox,[le(Kf,{type:"error",color:"bg-red-800"}),le(Kf,{type:"warning",color:"bg-yellow-800"}),le(Kf,{type:"success",color:"bg-green-800"})])])]),_:1})}}});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ao=typeof window<"u";function Nx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ut=Object.assign;function Gf(t,e){const n={};for(const r in e){const s=e[r];n[r]=vr(s)?s.map(t):t(s)}return n}const Ja=()=>{},vr=Array.isArray,Dx=/\/$/,kx=t=>t.replace(Dx,"");function zf(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ux(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Mx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function my(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lx(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$o(e.matched[r],n.matched[s])&&zb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $o(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fx(t[n],e[n]))return!1;return!0}function Fx(t,e){return vr(t)?vy(t,e):vr(e)?vy(e,t):t===e}function vy(t,e){return vr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ux(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Il;(function(t){t.pop="pop",t.push="push"})(Il||(Il={}));var Za;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Za||(Za={}));function $x(t){if(!t)if(ao){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kx(t)}const Bx=/^[^#]+#/;function jx(t,e){return t.replace(Bx,"#")+e}function Vx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hh=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hx(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Vx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function yy(t,e){return(history.state?history.state.position-e:-1)+t}const ip=new Map;function Wx(t,e){ip.set(t,e)}function Kx(t){const e=ip.get(t);return ip.delete(t),e}let Gx=()=>location.protocol+"//"+location.host;function Yb(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),my(l,"")}return my(n,t)+r+s}function zx(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=Yb(t,location),p=n.value,m=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=m?f.position-m.position:0}else r(d);s.forEach(v=>{v(n.value,p,{delta:y,type:Il.pop,direction:y?y>0?Za.forward:Za.back:Za.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ut({},f.state,{scroll:Hh()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ey(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hh():null}}function Yx(t){const{history:e,location:n}=window,r={value:Yb(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Gx()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=ut({},e.state,Ey(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ut({},s.value,e.state,{forward:l,scroll:Hh()});i(u.current,u,!0);const h=ut({},Ey(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Xx(t){t=$x(t);const e=Yx(t),n=zx(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ut({location:"",base:t,go:r,createHref:jx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qx(t){return typeof t=="string"||t&&typeof t=="object"}function Xb(t){return typeof t=="string"||typeof t=="symbol"}const bs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qb=Symbol("");var wy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wy||(wy={}));function Bo(t,e){return ut(new Error,{type:t,[Qb]:!0},e)}function Wr(t,e){return t instanceof Error&&Qb in t&&(e==null||!!(t.type&e))}const by="[^/]+?",qx={sensitive:!1,strict:!1,start:!0,end:!0},Jx=/[.+*?^${}()[\]/\\]/g;function Zx(t,e){const n=ut({},qx,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Jx,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=f;i.push({name:p,repeatable:m,optional:y});const g=v||by;if(g!==by){d+=10;try{new RegExp(`(${g})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+b.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),s+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=i[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(vr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=vr(v)?v.join("/"):v;if(!g)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function eO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tO(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eO(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_y(r))return 1;if(_y(s))return-1}return s.length-r.length}function _y(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nO={type:0,value:""},rO=/[a-zA-Z0-9_]/;function sO(t){if(!t)return[[]];if(t==="/")return[[nO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:rO.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function iO(t,e,n){const r=Zx(sO(t.path),n),s=ut(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function oO(t,e){const n=[],r=new Map;e=Iy({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,p=aO(u);p.aliasOf=f&&f.record;const m=Iy(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of E)y.push(ut({},p,{components:f?f.record.components:p.components,path:b,aliasOf:f?f.record:p}))}let v,g;for(const E of y){const{path:b}=E;if(h&&b[0]!=="/"){const I=h.record.path,C=I[I.length-1]==="/"?"":"/";E.path=h.record.path+(b&&C+b)}if(v=iO(E,h,m),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!Sy(v)&&o(u.name)),p.children){const I=p.children;for(let C=0;C<I.length;C++)i(I[C],v,f&&f.children[C])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:Ja}function o(u){if(Xb(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&tO(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sy(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Bo(1,{location:u});m=f.record.name,d=ut(Ty(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Ty(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw Bo(1,{location:u,currentLocation:h});m=f.record.name,d=ut({},h.params,u.params),p=f.stringify(d)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:cO(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ty(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function aO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Sy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cO(t){return t.reduce((e,n)=>ut(e,n.meta),{})}function Iy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qb(t,e){return e.children.some(n=>n===t||qb(t,n))}const Jb=/#/g,uO=/&/g,hO=/\//g,fO=/=/g,dO=/\?/g,Zb=/\+/g,pO=/%5B/g,gO=/%5D/g,e_=/%5E/g,mO=/%60/g,t_=/%7B/g,vO=/%7C/g,n_=/%7D/g,yO=/%20/g;function Hg(t){return encodeURI(""+t).replace(vO,"|").replace(pO,"[").replace(gO,"]")}function EO(t){return Hg(t).replace(t_,"{").replace(n_,"}").replace(e_,"^")}function op(t){return Hg(t).replace(Zb,"%2B").replace(yO,"+").replace(Jb,"%23").replace(uO,"%26").replace(mO,"`").replace(t_,"{").replace(n_,"}").replace(e_,"^")}function wO(t){return op(t).replace(fO,"%3D")}function bO(t){return Hg(t).replace(Jb,"%23").replace(dO,"%3F")}function _O(t){return t==null?"":bO(t).replace(hO,"%2F")}function xu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zb," "),o=i.indexOf("="),a=xu(o<0?i:i.slice(0,o)),l=o<0?null:xu(i.slice(o+1));if(a in e){let c=e[a];vr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cy(t){let e="";for(let n in t){const r=t[n];if(n=wO(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(vr(r)?r.map(i=>i&&op(i)):[r&&op(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=vr(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IO=Symbol(""),Ay=Symbol(""),Wh=Symbol(""),r_=Symbol(""),ap=Symbol("");function ba(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cs(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Bo(4,{from:n,to:e})):h instanceof Error?a(h):Qx(h)?a(Bo(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Yf(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CO(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Cs(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Nx(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Cs(f,n,r,i,o)()}))}}return s}function CO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ry(t){const e=Ln(Wh),n=Ln(r_),r=vt(()=>e.resolve(Y(t.to))),s=vt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex($o.bind(null,u));if(f>-1)return f;const d=xy(l[c-2]);return c>1&&xy(u)===d&&h[h.length-1].path!==d?h.findIndex($o.bind(null,l[c-2])):f}),i=vt(()=>s.value>-1&&OO(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&zb(n.params,r.value.params));function a(l={}){return xO(l)?e[Y(t.replace)?"replace":"push"](Y(t.to)).catch(Ja):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const AO=$e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ry,setup(t,{slots:e}){const n=Yn(Ry(t)),{options:r}=Ln(Wh),s=vt(()=>({[Oy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Oy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Bh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RO=AO;function xO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OO(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!vr(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oy=(t,e,n)=>t??e??n,PO=$e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ln(ap),s=vt(()=>t.route||r.value),i=Ln(Ay,0),o=vt(()=>{let c=Y(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=vt(()=>s.value.matched[o.value]);Io(Ay,vt(()=>o.value+1)),Io(IO,a),Io(ap,s);const l=lt();return ts(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!$o(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Py(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Bh(f,ut({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Py(n.default,{Component:y,route:c})||y}}});function Py(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const s_=PO;function NO(t){const e=oO(t.routes,t),n=t.parseQuery||TO,r=t.stringifyQuery||Cy,s=t.history,i=ba(),o=ba(),a=ba(),l=Iw(bs);let c=bs;ao&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gf.bind(null,M=>""+M),h=Gf.bind(null,_O),f=Gf.bind(null,xu);function d(M,z){let H,ie;return Xb(M)?(H=e.getRecordMatcher(M),ie=z):ie=M,e.addRoute(ie,H)}function p(M){const z=e.getRecordMatcher(M);z&&e.removeRoute(z)}function m(){return e.getRoutes().map(M=>M.record)}function y(M){return!!e.getRecordMatcher(M)}function v(M,z){if(z=ut({},z||l.value),typeof M=="string"){const w=zf(n,M,z.path),T=e.resolve({path:w.path},z),P=s.createHref(w.fullPath);return ut(w,T,{params:f(T.params),hash:xu(w.hash),redirectedFrom:void 0,href:P})}let H;if("path"in M)H=ut({},M,{path:zf(n,M.path,z.path).path});else{const w=ut({},M.params);for(const T in w)w[T]==null&&delete w[T];H=ut({},M,{params:h(M.params)}),z.params=h(z.params)}const ie=e.resolve(H,z),Te=M.hash||"";ie.params=u(f(ie.params));const et=Mx(r,ut({},M,{hash:EO(Te),path:ie.path})),Ce=s.createHref(et);return ut({fullPath:et,hash:Te,query:r===Cy?SO(M.query):M.query||{}},ie,{redirectedFrom:void 0,href:Ce})}function g(M){return typeof M=="string"?zf(n,M,l.value.path):ut({},M)}function E(M,z){if(c!==M)return Bo(8,{from:z,to:M})}function b(M){return A(M)}function I(M){return b(ut(g(M),{replace:!0}))}function C(M){const z=M.matched[M.matched.length-1];if(z&&z.redirect){const{redirect:H}=z;let ie=typeof H=="function"?H(M):H;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=g(ie):{path:ie},ie.params={}),ut({query:M.query,hash:M.hash,params:"path"in ie?{}:M.params},ie)}}function A(M,z){const H=c=v(M),ie=l.value,Te=M.state,et=M.force,Ce=M.replace===!0,w=C(H);if(w)return A(ut(g(w),{state:typeof w=="object"?ut({},Te,w.state):Te,force:et,replace:Ce}),z||H);const T=H;T.redirectedFrom=z;let P;return!et&&Lx(r,ie,H)&&(P=Bo(16,{to:T,from:ie}),yt(ie,ie,!0,!1)),(P?Promise.resolve(P):S(T,ie)).catch(F=>Wr(F)?Wr(F,2)?F:He(F):Z(F,T,ie)).then(F=>{if(F){if(Wr(F,2))return A(ut({replace:Ce},g(F.to),{state:typeof F.to=="object"?ut({},Te,F.to.state):Te,force:et}),z||T)}else F=L(T,ie,!0,Ce,Te);return N(T,ie,F),F})}function _(M,z){const H=E(M,z);return H?Promise.reject(H):Promise.resolve()}function S(M,z){let H;const[ie,Te,et]=DO(M,z);H=Yf(ie.reverse(),"beforeRouteLeave",M,z);for(const w of ie)w.leaveGuards.forEach(T=>{H.push(Cs(T,M,z))});const Ce=_.bind(null,M,z);return H.push(Ce),Zi(H).then(()=>{H=[];for(const w of i.list())H.push(Cs(w,M,z));return H.push(Ce),Zi(H)}).then(()=>{H=Yf(Te,"beforeRouteUpdate",M,z);for(const w of Te)w.updateGuards.forEach(T=>{H.push(Cs(T,M,z))});return H.push(Ce),Zi(H)}).then(()=>{H=[];for(const w of M.matched)if(w.beforeEnter&&!z.matched.includes(w))if(vr(w.beforeEnter))for(const T of w.beforeEnter)H.push(Cs(T,M,z));else H.push(Cs(w.beforeEnter,M,z));return H.push(Ce),Zi(H)}).then(()=>(M.matched.forEach(w=>w.enterCallbacks={}),H=Yf(et,"beforeRouteEnter",M,z),H.push(Ce),Zi(H))).then(()=>{H=[];for(const w of o.list())H.push(Cs(w,M,z));return H.push(Ce),Zi(H)}).catch(w=>Wr(w,8)?w:Promise.reject(w))}function N(M,z,H){for(const ie of a.list())ie(M,z,H)}function L(M,z,H,ie,Te){const et=E(M,z);if(et)return et;const Ce=z===bs,w=ao?history.state:{};H&&(ie||Ce?s.replace(M.fullPath,ut({scroll:Ce&&w&&w.scroll},Te)):s.push(M.fullPath,Te)),l.value=M,yt(M,z,H,Ce),He()}let U;function k(){U||(U=s.listen((M,z,H)=>{if(!Ot.listening)return;const ie=v(M),Te=C(ie);if(Te){A(ut(Te,{replace:!0}),ie).catch(Ja);return}c=ie;const et=l.value;ao&&Wx(yy(et.fullPath,H.delta),Hh()),S(ie,et).catch(Ce=>Wr(Ce,12)?Ce:Wr(Ce,2)?(A(Ce.to,ie).then(w=>{Wr(w,20)&&!H.delta&&H.type===Il.pop&&s.go(-1,!1)}).catch(Ja),Promise.reject()):(H.delta&&s.go(-H.delta,!1),Z(Ce,ie,et))).then(Ce=>{Ce=Ce||L(ie,et,!1),Ce&&(H.delta&&!Wr(Ce,8)?s.go(-H.delta,!1):H.type===Il.pop&&Wr(Ce,20)&&s.go(-1,!1)),N(ie,et,Ce)}).catch(Ja)}))}let O=ba(),te=ba(),B;function Z(M,z,H){He(M);const ie=te.list();return ie.length?ie.forEach(Te=>Te(M,z,H)):console.error(M),Promise.reject(M)}function ce(){return B&&l.value!==bs?Promise.resolve():new Promise((M,z)=>{O.add([M,z])})}function He(M){return B||(B=!M,k(),O.list().forEach(([z,H])=>M?H(M):z()),O.reset()),M}function yt(M,z,H,ie){const{scrollBehavior:Te}=t;if(!ao||!Te)return Promise.resolve();const et=!H&&Kx(yy(M.fullPath,0))||(ie||!H)&&history.state&&history.state.scroll||null;return Vi().then(()=>Te(M,z,et)).then(Ce=>Ce&&Hx(Ce)).catch(Ce=>Z(Ce,M,z))}const Ye=M=>s.go(M);let je;const gt=new Set,Ot={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:b,replace:I,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:ce,install(M){const z=this;M.component("RouterLink",RO),M.component("RouterView",s_),M.config.globalProperties.$router=z,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(l)}),ao&&!je&&l.value===bs&&(je=!0,b(s.location).catch(Te=>{}));const H={};for(const Te in bs)H[Te]=vt(()=>l.value[Te]);M.provide(Wh,z),M.provide(r_,Yn(H)),M.provide(ap,l);const ie=M.unmount;gt.add(M),M.unmount=function(){gt.delete(M),gt.size<1&&(c=bs,U&&U(),U=null,l.value=bs,je=!1,B=!1),ie()}}};return Ot}function Zi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function DO(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>$o(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>$o(c,l))||s.push(l))}return[n,r,s]}function i_(){return Ln(Wh)}const kO=$e({__name:"App",setup(t){return(e,n)=>(K(),Ie(Je,null,[le(Y(s_)),le(Px)],64))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(t,e){if(!t)throw ia(e)},ia=function(t){return new Error("Firebase Database ("+o_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new LO;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l_=function(t){const e=a_(t);return Kh.encodeByteArray(e,!0)},Ou=function(t){return l_(t).replace(/\./g,"")},Pu=function(t){try{return Kh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return c_(void 0,t)}function c_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UO(n)||(t[n]=c_(t[n],e[n]));return t}function UO(t){return t!=="__proto__"}/**
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
 */function $O(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BO=()=>$O().__FIREBASE_DEFAULTS__,jO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},Wg=()=>{try{return BO()||jO()||VO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u_=t=>{var e,n;return(n=(e=Wg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HO=t=>{const e=u_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WO=()=>{var t;return(t=Wg())===null||t===void 0?void 0:t.config},h_=t=>{var e;return(e=Wg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function KO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ou(JSON.stringify(n)),Ou(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function GO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zO(){const t=_n();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d_(){return o_.NODE_ADMIN===!0}function p_(){try{return typeof indexedDB=="object"}catch{return!1}}function YO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XO,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oa.prototype.create)}}class oa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vr(s,a,r)}}function QO(t,e){return t.replace(qO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t){return JSON.parse(t)}function rn(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Al(Pu(i[0])||""),n=Al(Pu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},JO=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZO=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function lp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ny(i)&&Ny(o)){if(!Du(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ny(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ka(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function tP(t,e){const n=new nP(t,e);return n.subscribe.bind(n)}class nP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xf),s.error===void 0&&(s.error=Xf),s.complete===void 0&&(s.complete=Xf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xf(){}function sP(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,re(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function jt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ai="[DEFAULT]";/**
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
 */class oP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lP(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aP(t){return t===ai?void 0:t}function lP(t){return t.instantiationMode==="EAGER"}/**
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
 */class cP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(rt||(rt={}));const uP={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},hP=rt.INFO,fP={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},dP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=hP,this._logHandler=dP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in rt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...e),this._logHandler(this,rt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...e),this._logHandler(this,rt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...e),this._logHandler(this,rt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...e),this._logHandler(this,rt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...e),this._logHandler(this,rt.ERROR,...e)}}const pP=(t,e)=>e.some(n=>t instanceof n);let Dy,ky;function gP(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mP(){return ky||(ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,cp=new WeakMap,v_=new WeakMap,Qf=new WeakMap,Gg=new WeakMap;function vP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),Gg.set(e,t),e}function yP(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let up={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||v_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EP(t){up=t(up)}function wP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qf(this),e,...n);return v_.set(r,e.sort?e.sort():[e]),Fs(r)}:mP().includes(t)?function(...e){return t.apply(qf(this),e),Fs(m_.get(this))}:function(...e){return Fs(t.apply(qf(this),e))}}function bP(t){return typeof t=="function"?wP(t):(t instanceof IDBTransaction&&yP(t),pP(t,gP())?new Proxy(t,up):t)}function Fs(t){if(t instanceof IDBRequest)return vP(t);if(Qf.has(t))return Qf.get(t);const e=bP(t);return e!==t&&(Qf.set(t,e),Gg.set(e,t)),e}const qf=t=>Gg.get(t);function _P(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fs(o.result),l.oldVersion,l.newVersion,Fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TP=["get","getKey","getAll","getAllKeys","count"],SP=["put","add","delete","clear"],Jf=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jf.get(e))return Jf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TP.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Jf.set(e,i),i}EP(t=>({...t,get:(e,n,r)=>My(e,n)||t.get(e,n,r),has:(e,n)=>!!My(e,n)||t.has(e,n)}));/**
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
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",Ly="0.9.9";/**
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
 */const Oi=new Xl("@firebase/app"),AP="@firebase/app-compat",RP="@firebase/analytics-compat",xP="@firebase/analytics",OP="@firebase/app-check-compat",PP="@firebase/app-check",NP="@firebase/auth",DP="@firebase/auth-compat",kP="@firebase/database",MP="@firebase/database-compat",LP="@firebase/functions",FP="@firebase/functions-compat",UP="@firebase/installations",$P="@firebase/installations-compat",BP="@firebase/messaging",jP="@firebase/messaging-compat",VP="@firebase/performance",HP="@firebase/performance-compat",WP="@firebase/remote-config",KP="@firebase/remote-config-compat",GP="@firebase/storage",zP="@firebase/storage-compat",YP="@firebase/firestore",XP="@firebase/firestore-compat",QP="firebase",qP="9.21.0";/**
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
 */const fp="[DEFAULT]",JP={[hp]:"fire-core",[AP]:"fire-core-compat",[xP]:"fire-analytics",[RP]:"fire-analytics-compat",[PP]:"fire-app-check",[OP]:"fire-app-check-compat",[NP]:"fire-auth",[DP]:"fire-auth-compat",[kP]:"fire-rtdb",[MP]:"fire-rtdb-compat",[LP]:"fire-fn",[FP]:"fire-fn-compat",[UP]:"fire-iid",[$P]:"fire-iid-compat",[BP]:"fire-fcm",[jP]:"fire-fcm-compat",[VP]:"fire-perf",[HP]:"fire-perf-compat",[WP]:"fire-rc",[KP]:"fire-rc-compat",[GP]:"fire-gcs",[zP]:"fire-gcs-compat",[YP]:"fire-fst",[XP]:"fire-fst-compat","fire-js":"fire-js",[QP]:"fire-js-all"};/**
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
 */const ku=new Map,dp=new Map;function ZP(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kr(t){const e=t.name;if(dp.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;dp.set(e,t);for(const n of ku.values())ZP(n,t);return!0}function zg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const eN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Us=new oa("app","Firebase",eN);/**
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
 */class tN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Us.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=qP;function y_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Us.create("bad-app-name",{appName:String(s)});if(n||(n=WO()),!n)throw Us.create("no-options");const i=ku.get(s);if(i){if(Du(n,i.options)&&Du(r,i.config))return i;throw Us.create("duplicate-app",{appName:s})}const o=new cP(s);for(const l of dp.values())o.addComponent(l);const a=new tN(n,r,o);return ku.set(s,a),a}function Yg(t=fp){const e=ku.get(t);if(!e&&t===fp)return y_();if(!e)throw Us.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=JP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}kr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nN="firebase-heartbeat-database",rN=1,Rl="firebase-heartbeat-store";let Zf=null;function E_(){return Zf||(Zf=_P(nN,rN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rl)}}}).catch(t=>{throw Us.create("idb-open",{originalErrorMessage:t.message})})),Zf}async function sN(t){try{return(await E_()).transaction(Rl).objectStore(Rl).get(w_(t))}catch(e){if(e instanceof Vr)Oi.warn(e.message);else{const n=Us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function Fy(t,e){try{const r=(await E_()).transaction(Rl,"readwrite");return await r.objectStore(Rl).put(e,w_(t)),r.done}catch(n){if(n instanceof Vr)Oi.warn(n.message);else{const r=Us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iN=1024,oN=30*24*60*60*1e3;class aN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=oN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uy(),{heartbeatsToSend:n,unsentEntries:r}=lN(this._heartbeatsCache.heartbeats),s=Ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uy(){return new Date().toISOString().substring(0,10)}function lN(t,e=iN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$y(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p_()?YO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $y(t){return Ou(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uN(t){kr(new yr("platform-logger",e=>new IP(e),"PRIVATE")),kr(new yr("heartbeat",e=>new aN(e),"PRIVATE")),Kn(hp,Ly,t),Kn(hp,Ly,"esm2017"),Kn("fire-js","")}uN("");var hN="firebase",fN="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(hN,fN,"app");const dN={apiKey:"AIzaSyAjt3RyE1KkK110jxZQUrm9kjfclWO126k",authDomain:"personal-website-c3482.firebaseapp.com",projectId:"personal-website-c3482",storageBucket:"personal-website-c3482.appspot.com",messagingSenderId:"110986644823",appId:"1:110986644823:web:4081c484521ba6b37bc212",measurementId:"G-PF7D6JKSC3"},b_=y_(dN);var pN=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let __;const zh=t=>__=t,T_=Symbol();function pp(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var el;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(el||(el={}));function gN(){const t=Sh(!0),e=t.run(()=>lt({}));let n=[],r=[];const s=Ci({install(i){zh(s),s._a=i,i.provide(T_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!pN?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const S_=()=>{};function By(t,e,n,r=S_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Eg()&&hw(s),s}function eo(t,...e){t.slice().forEach(n=>{n(...e)})}function gp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];pp(s)&&pp(r)&&t.hasOwnProperty(n)&&!Nt(r)&&!Rr(r)?t[n]=gp(s,r):t[n]=r}return t}const mN=Symbol();function vN(t){return!pp(t)||!t.hasOwnProperty(mN)}const{assign:Ss}=Object;function yN(t){return!!(Nt(t)&&t.effect)}function EN(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Aw(n.state.value[t]);return Ss(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ci(vt(()=>{zh(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=I_(t,c,e,n,r,!0),l}function I_(t,e,n={},r,s,i){let o;const a=Ss({actions:{}},n),l={deep:!0};let c,u,h=Ci([]),f=Ci([]),d;const p=r.state.value[t];!i&&!p&&(r.state.value[t]={}),lt({});let m;function y(A){let _;c=u=!1,typeof A=="function"?(A(r.state.value[t]),_={type:el.patchFunction,storeId:t,events:d}):(gp(r.state.value[t],A),_={type:el.patchObject,payload:A,storeId:t,events:d});const S=m=Symbol();Vi().then(()=>{m===S&&(c=!0)}),u=!0,eo(h,_,r.state.value[t])}const v=i?function(){const{state:_}=n,S=_?_():{};this.$patch(N=>{Ss(N,S)})}:S_;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function E(A,_){return function(){zh(r);const S=Array.from(arguments),N=[],L=[];function U(te){N.push(te)}function k(te){L.push(te)}eo(f,{args:S,name:A,store:I,after:U,onError:k});let O;try{O=_.apply(this&&this.$id===t?this:I,S)}catch(te){throw eo(L,te),te}return O instanceof Promise?O.then(te=>(eo(N,te),te)).catch(te=>(eo(L,te),Promise.reject(te))):(eo(N,O),O)}}const b={_p:r,$id:t,$onAction:By.bind(null,f),$patch:y,$reset:v,$subscribe(A,_={}){const S=By(h,A,_.detached,()=>N()),N=o.run(()=>ts(()=>r.state.value[t],L=>{(_.flush==="sync"?u:c)&&A({storeId:t,type:el.direct,events:d},L)},Ss({},l,_)));return S},$dispose:g},I=Yn(b);r._s.set(t,I);const C=r._e.run(()=>(o=Sh(),o.run(()=>e())));for(const A in C){const _=C[A];if(Nt(_)&&!yN(_)||Rr(_))i||(p&&vN(_)&&(Nt(_)?_.value=p[A]:gp(_,p[A])),r.state.value[t][A]=_);else if(typeof _=="function"){const S=E(A,_);C[A]=S,a.actions[A]=_}}return Ss(I,C),Ss(Ve(I),C),Object.defineProperty(I,"$state",{get:()=>r.state.value[t],set:A=>{y(_=>{Ss(_,A)})}}),r._p.forEach(A=>{Ss(I,o.run(()=>A({store:I,app:r._a,pinia:r,options:a})))}),p&&i&&n.hydrate&&n.hydrate(I.$state,p),c=!0,u=!0,I}function C_(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=jr();return a=a||c&&Ln(T_,null),a&&zh(a),a=__,a._s.has(r)||(i?I_(r,e,s,a):EN(r,s,a)),a._s.get(r)}return o.$id=r,o}function Er(t){{t=Ve(t);const e={};for(const n in t){const r=t[n];(Nt(r)||Rr(r))&&(e[n]=Ag(t,n))}return e}}const jy=(t,e)=>{const n=t.storage||sessionStorage,r=t.key||e.$id;if(t.paths){const s=t.paths.reduce((i,o)=>(i[o]=e.$state[o],i),{});n.setItem(r,JSON.stringify(s))}else n.setItem(r,JSON.stringify(e.$state))};var wN=({options:t,store:e})=>{var n,r,s,i;if((n=t.persist)!=null&&n.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(s=(r=t.persist)==null?void 0:r.strategies)!=null&&s.length?(i=t.persist)==null?void 0:i.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),jy(l,e))}),e.$subscribe(()=>{a.forEach(l=>{jy(l,e)})})}};const A_=gN();A_.use(wN);const Eo=class{constructor(e,n,r){u1.push({name:r}),Sx({title:e,type:e.toLowerCase(),text:n},5e3)}};let Fe=Eo;ya(Fe,"success",(e,n)=>new Eo("Success",e,n)),ya(Fe,"warning",e=>new Eo("Warning",e)),ya(Fe,"error",e=>new Eo("Error",e)),ya(Fe,"firebaseError",e=>Eo.error(bN[e??""]??"Something went wrong"));const bN={"auth/user-not-found":"Unknown user","auth/invalid-email":"Invalid e-mail address","auth/email-already-in-use":"E-mail already in use","auth/wrong-password":"Wrong password","auth/too-many-requests":"Temporarily blocked","auth/weak-password":"Weak password","auth/requires-recent-login":"You need to re-login to do this","permission-denied":"Not logged in or no permission"};var _N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se,Xg=Xg||{},Pe=_N||self;function Mu(){}function Yh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ql(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TN(t){return Object.prototype.hasOwnProperty.call(t,ed)&&t[ed]||(t[ed]=++SN)}var ed="closure_uid_"+(1e9*Math.random()>>>0),SN=0;function IN(t,e,n){return t.call.apply(t.bind,arguments)}function CN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function En(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?En=IN:En=CN,En.apply(null,arguments)}function Mc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Jt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Js(){this.s=this.s,this.o=this.o}var AN=0;Js.prototype.s=!1;Js.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),AN!=0)&&TN(this)};Js.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const R_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yh(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function wn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var RN=function(){if(!Pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Pe.addEventListener("test",Mu,e),Pe.removeEventListener("test",Mu,e)}catch{}return t}();function Lu(t){return/^[\s\xa0]*$/.test(t)}var Hy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function td(t,e){return t<e?-1:t>e?1:0}function Xh(){var t=Pe.navigator;return t&&(t=t.userAgent)?t:""}function Ir(t){return Xh().indexOf(t)!=-1}function qg(t){return qg[" "](t),t}qg[" "]=Mu;function x_(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var xN=Ir("Opera"),Vo=Ir("Trident")||Ir("MSIE"),O_=Ir("Edge"),mp=O_||Vo,P_=Ir("Gecko")&&!(Xh().toLowerCase().indexOf("webkit")!=-1&&!Ir("Edge"))&&!(Ir("Trident")||Ir("MSIE"))&&!Ir("Edge"),ON=Xh().toLowerCase().indexOf("webkit")!=-1&&!Ir("Edge");function N_(){var t=Pe.document;return t?t.documentMode:void 0}var Fu;e:{var nd="",rd=function(){var t=Xh();if(P_)return/rv:([^\);]+)(\)|;)/.exec(t);if(O_)return/Edge\/([\d\.]+)/.exec(t);if(Vo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ON)return/WebKit\/(\S+)/.exec(t);if(xN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rd&&(nd=rd?rd[1]:""),Vo){var sd=N_();if(sd!=null&&sd>parseFloat(nd)){Fu=String(sd);break e}}Fu=nd}var PN={};function NN(){return x_(PN,9,function(){let t=0;const e=Hy(String(Fu)).split("."),n=Hy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=td(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||td(s[2].length==0,i[2].length==0)||td(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var vp;if(Pe.document&&Vo){var Wy=N_();vp=Wy||parseInt(Fu,10)||void 0}else vp=void 0;var DN=vp;function xl(t,e){if(wn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P_){e:{try{qg(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xl.$.h.call(this)}}Jt(xl,wn);var kN={2:"touch",3:"pen",4:"mouse"};xl.prototype.h=function(){xl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ql="closure_listenable_"+(1e6*Math.random()|0),MN=0;function LN(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++MN,this.fa=this.ia=!1}function Qh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function D_(t){const e={};for(const n in t)e[n]=t[n];return e}const Ky="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ky.length;i++)n=Ky[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qh(t){this.src=t,this.g={},this.h=0}qh.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ep(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LN(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function yp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=R_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Qh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ep(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Zg="closure_lm_"+(1e6*Math.random()|0),id={};function M_(t,e,n,r,s){if(r&&r.once)return F_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)M_(t,e[i],n,r,s);return null}return n=nm(n),t&&t[ql]?t.O(e,n,Ql(r)?!!r.capture:!!r,s):L_(t,e,n,!1,r,s)}function L_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ql(s)?!!s.capture:!!s,a=tm(t);if(a||(t[Zg]=a=new qh(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=FN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent($_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FN(){function t(n){return e.call(t.src,t.listener,n)}const e=UN;return t}function F_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)F_(t,e[i],n,r,s);return null}return n=nm(n),t&&t[ql]?t.P(e,n,Ql(r)?!!r.capture:!!r,s):L_(t,e,n,!0,r,s)}function U_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)U_(t,e[i],n,r,s);else r=Ql(r)?!!r.capture:!!r,n=nm(n),t&&t[ql]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ep(i,n,r,s),-1<n&&(Qh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=tm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ep(e,n,r,s)),(n=-1<t?e[t]:null)&&em(n))}function em(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ql])yp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tm(e))?(yp(n,t),n.h==0&&(n.src=null,e[Zg]=null)):Qh(t)}}}function $_(t){return t in id?id[t]:id[t]="on"+t}function UN(t,e){if(t.fa)t=!0;else{e=new xl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&em(t),t=n.call(r,e)}return t}function tm(t){return t=t[Zg],t instanceof qh?t:null}var od="__closure_events_fn_"+(1e9*Math.random()>>>0);function nm(t){return typeof t=="function"?t:(t[od]||(t[od]=function(e){return t.handleEvent(e)}),t[od])}function qt(){Js.call(this),this.i=new qh(this),this.S=this,this.J=null}Jt(qt,Js);qt.prototype[ql]=!0;qt.prototype.removeEventListener=function(t,e,n,r){U_(this,t,e,n,r)};function on(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new wn(e,t);else if(e instanceof wn)e.target=e.target||t;else{var s=e;e=new wn(r,t),k_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Lc(o,r,!0,e)&&s}if(o=e.g=t,s=Lc(o,r,!0,e)&&s,s=Lc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Lc(o,r,!1,e)&&s}qt.prototype.N=function(){if(qt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qh(n[r]);delete t.g[e],t.h--}}this.J=null};qt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Lc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&yp(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var rm=Pe.JSON.stringify;function $N(){var t=V_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BN{constructor(){this.h=this.g=null}add(e,n){const r=B_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var B_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jN,t=>t.reset());class jN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VN(t){Pe.setTimeout(()=>{throw t},0)}function j_(t,e){wp||HN(),bp||(wp(),bp=!0),V_.add(t,e)}var wp;function HN(){var t=Pe.Promise.resolve(void 0);wp=function(){t.then(WN)}}var bp=!1,V_=new BN;function WN(){for(var t;t=$N();){try{t.h.call(t.g)}catch(n){VN(n)}var e=B_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bp=!1}function Jh(t,e){qt.call(this),this.h=t||1,this.g=e||Pe,this.j=En(this.qb,this),this.l=Date.now()}Jt(Jh,qt);se=Jh.prototype;se.ga=!1;se.T=null;se.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),on(this,"tick"),this.ga&&(sm(this),this.start()))}};se.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}se.N=function(){Jh.$.N.call(this),sm(this),delete this.g};function im(t,e,n){if(typeof t=="function")n&&(t=En(t,n));else if(t&&typeof t.handleEvent=="function")t=En(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Pe.setTimeout(t,e||0)}function H_(t){t.g=im(()=>{t.g=null,t.i&&(t.i=!1,H_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KN extends Js{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:H_(this)}N(){super.N(),this.g&&(Pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ol(t){Js.call(this),this.h=t,this.g={}}Jt(Ol,Js);var Gy=[];function W_(t,e,n,r){Array.isArray(n)||(n&&(Gy[0]=n.toString()),n=Gy);for(var s=0;s<n.length;s++){var i=M_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function K_(t){Jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&em(e)},t),t.g={}}Ol.prototype.N=function(){Ol.$.N.call(this),K_(this)};Ol.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zh(){this.g=!0}Zh.prototype.Ea=function(){this.g=!1};function GN(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function zN(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function fo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XN(t,n)+(r?" "+r:"")})}function YN(t,e){t.info(function(){return"TIMEOUT: "+e})}Zh.prototype.info=function(){};function XN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return rm(n)}catch{return e}}var Wi={},zy=null;function ef(){return zy=zy||new qt}Wi.Ta="serverreachability";function G_(t){wn.call(this,Wi.Ta,t)}Jt(G_,wn);function Pl(t){const e=ef();on(e,new G_(e))}Wi.STAT_EVENT="statevent";function z_(t,e){wn.call(this,Wi.STAT_EVENT,t),this.stat=e}Jt(z_,wn);function An(t){const e=ef();on(e,new z_(e,t))}Wi.Ua="timingevent";function Y_(t,e){wn.call(this,Wi.Ua,t),this.size=e}Jt(Y_,wn);function Jl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Pe.setTimeout(function(){t()},e)}var tf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},X_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function om(){}om.prototype.h=null;function Yy(t){return t.h||(t.h=t.i())}function Q_(){}var Zl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function am(){wn.call(this,"d")}Jt(am,wn);function lm(){wn.call(this,"c")}Jt(lm,wn);var _p;function nf(){}Jt(nf,om);nf.prototype.g=function(){return new XMLHttpRequest};nf.prototype.i=function(){return{}};_p=new nf;function ec(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ol(this),this.P=QN,t=mp?125:void 0,this.V=new Jh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new q_}function q_(){this.i=null,this.g="",this.h=!1}var QN=45e3,Tp={},Uu={};se=ec.prototype;se.setTimeout=function(t){this.P=t};function Sp(t,e,n){t.L=1,t.v=sf(cs(e)),t.s=n,t.S=!0,J_(t,null)}function J_(t,e){t.G=Date.now(),tc(t),t.A=cs(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),oT(n.i,"t",r),t.C=0,n=t.l.I,t.h=new q_,t.g=AT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new KN(En(t.Pa,t,t.g),t.O)),W_(t.U,t.g,"readystatechange",t.nb),e=t.I?D_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Pl(),GN(t.j,t.u,t.A,t.m,t.W,t.s)}se.nb=function(t){t=t.target;const e=this.M;e&&Yr(t)==3?e.l():this.Pa(t)};se.Pa=function(t){try{if(t==this.g)e:{const u=Yr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||mp||this.g&&(this.h.h||this.g.ja()||Jy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pl(3):Pl(2)),rf(this);var n=this.g.da();this.aa=n;t:if(Z_(this)){var r=Jy(this.g);t="";var s=r.length,i=Yr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),tl(this);var o="";break t}this.h.i=new Pe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zN(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lu(a)){var c=a;break t}}c=null}if(n=c)fo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ip(this,n);else{this.i=!1,this.o=3,An(12),pi(this),tl(this);break e}}this.S?(eT(this,u,o),mp&&this.i&&u==3&&(W_(this.U,this.V,"tick",this.mb),this.V.start())):(fo(this.j,this.m,o,null),Ip(this,o)),u==4&&pi(this),this.i&&!this.J&&(u==4?TT(this.l,this):(this.i=!1,tc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,An(12)):(this.o=0,An(13)),pi(this),tl(this)}}}catch{}finally{}};function Z_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function eT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=qN(t,n),s==Uu){e==4&&(t.o=4,An(14),r=!1),fo(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Tp){t.o=4,An(15),fo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else fo(t.j,t.m,s,null),Ip(t,s);Z_(t)&&s!=Uu&&s!=Tp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,An(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gm(e),e.L=!0,An(11))):(fo(t.j,t.m,n,"[Invalid Chunked Response]"),pi(t),tl(t))}se.mb=function(){if(this.g){var t=Yr(this.g),e=this.g.ja();this.C<e.length&&(rf(this),eT(this,t,e),this.i&&t!=4&&tc(this))}};function qN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Uu:(n=Number(e.substring(n,r)),isNaN(n)?Tp:(r+=1,r+n>e.length?Uu:(e=e.substr(r,n),t.C=r+n,e)))}se.cancel=function(){this.J=!0,pi(this)};function tc(t){t.Y=Date.now()+t.P,tT(t,t.P)}function tT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jl(En(t.lb,t),e)}function rf(t){t.B&&(Pe.clearTimeout(t.B),t.B=null)}se.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YN(this.j,this.A),this.L!=2&&(Pl(),An(17)),pi(this),this.o=2,tl(this)):tT(this,this.Y-t)};function tl(t){t.l.H==0||t.J||TT(t.l,t)}function pi(t){rf(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,sm(t.V),K_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Ip(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cp(n.h,t))){if(!t.K&&Cp(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ju(n),lf(n);else break e;pm(n),An(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Jl(En(n.ib,n),6e3));if(1>=cT(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else gi(n,11)}else if((t.K||n.g==t)&&ju(n),!Lu(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(cm(i,i.h),i.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,At(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=CT(r,r.I?r.oa:null,r.Y),o.K){uT(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(rf(a),tc(a)),r.g=o}else bT(r);0<n.i.length&&cf(n)}else c[0]!="stop"&&c[0]!="close"||gi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?gi(n,7):dm(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Pl(4)}catch{}}function JN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function nT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZN(t),r=JN(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var rT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function bi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bi){this.h=e!==void 0?e:t.h,$u(this,t.j),this.s=t.s,this.g=t.g,Bu(this,t.m),this.l=t.l,e=t.i;var n=new Nl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xy(this,n),this.o=t.o}else t&&(n=String(t).match(rT))?(this.h=!!e,$u(this,n[1]||"",!0),this.s=La(n[2]||""),this.g=La(n[3]||"",!0),Bu(this,n[4]),this.l=La(n[5]||"",!0),Xy(this,n[6]||"",!0),this.o=La(n[7]||"")):(this.h=!!e,this.i=new Nl(null,this.h))}bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fa(e,Qy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fa(e,Qy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fa(n,n.charAt(0)=="/"?rD:nD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fa(n,iD)),t.join("")};function cs(t){return new bi(t)}function $u(t,e,n){t.j=n?La(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xy(t,e,n){e instanceof Nl?(t.i=e,oD(t.i,t.h)):(n||(e=Fa(e,sD)),t.i=new Nl(e,t.h))}function At(t,e,n){t.i.set(e,n)}function sf(t){return At(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function La(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qy=/[#\/\?@]/g,nD=/[#\?:]/g,rD=/[#\?]/g,sD=/[#\?@]/g,iD=/#/g;function Nl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zs(t){t.g||(t.g=new Map,t.h=0,t.i&&eD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}se=Nl.prototype;se.add=function(t,e){Zs(this),this.i=null,t=la(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sT(t,e){Zs(t),e=la(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function iT(t,e){return Zs(t),e=la(t,e),t.g.has(e)}se.forEach=function(t,e){Zs(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};se.sa=function(){Zs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};se.Z=function(t){Zs(this);let e=[];if(typeof t=="string")iT(this,t)&&(e=e.concat(this.g.get(la(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};se.set=function(t,e){return Zs(this),this.i=null,t=la(this,t),iT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};se.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function oT(t,e,n){sT(t,e),0<n.length&&(t.i=null,t.g.set(la(t,e),Qg(n)),t.h+=n.length)}se.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function la(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oD(t,e){e&&!t.j&&(Zs(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(sT(this,r),oT(this,s,n))},t)),t.j=e}var aD=class{constructor(t,e){this.h=t,this.g=e}};function aT(t){this.l=t||lD,Pe.PerformanceNavigationTiming?(t=Pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Pe.g&&Pe.g.Ka&&Pe.g.Ka()&&Pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lD=10;function lT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cT(t){return t.h?1:t.g?t.g.size:0}function Cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cm(t,e){t.g?t.g.add(e):t.h=e}function uT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aT.prototype.cancel=function(){if(this.i=hT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Qg(t.i)}function um(){}um.prototype.stringify=function(t){return Pe.JSON.stringify(t,void 0)};um.prototype.parse=function(t){return Pe.JSON.parse(t,void 0)};function cD(){this.g=new um}function uD(t,e,n){const r=n||"";try{nT(t,function(s,i){let o=s;Ql(s)&&(o=rm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function hD(t,e){const n=new Zh;if(Pe.Image){const r=new Image;r.onload=Mc(Fc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mc(Fc,n,r,"TestLoadImage: error",!1,e),r.onabort=Mc(Fc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mc(Fc,n,r,"TestLoadImage: timeout",!1,e),Pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Fc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function nc(t){this.l=t.fc||null,this.j=t.ob||!1}Jt(nc,om);nc.prototype.g=function(){return new of(this.l,this.j)};nc.prototype.i=function(t){return function(){return t}}({});function of(t,e){qt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Jt(of,qt);var hm=0;se=of.prototype;se.open=function(t,e){if(this.readyState!=hm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dl(this)};se.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};se.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=hm};se.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dl(this)),this.g&&(this.readyState=3,Dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function fT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}se.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rc(this):Dl(this),this.readyState==3&&fT(this)}};se.Za=function(t){this.g&&(this.response=this.responseText=t,rc(this))};se.Ya=function(t){this.g&&(this.response=t,rc(this))};se.ka=function(){this.g&&rc(this)};function rc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dl(t)}se.setRequestHeader=function(t,e){this.v.append(t,e)};se.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};se.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(of.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fD=Pe.JSON.parse;function Bt(t){qt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dT,this.L=this.M=!1}Jt(Bt,qt);var dT="",dD=/^https?$/i,pD=["POST","PUT"];se=Bt.prototype;se.Oa=function(t){this.M=t};se.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_p.g(),this.C=this.u?Yy(this.u):Yy(_p),this.g.onreadystatechange=En(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){qy(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Pe.FormData&&t instanceof Pe.FormData,!(0<=R_(pD,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mT(this),0<this.B&&((this.L=gD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=En(this.ua,this)):this.A=im(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qy(this,i)}};function gD(t){return Vo&&NN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}se.ua=function(){typeof Xg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,on(this,"timeout"),this.abort(8))};function qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pT(t),af(t)}function pT(t){t.F||(t.F=!0,on(t,"complete"),on(t,"error"))}se.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,on(this,"complete"),on(this,"abort"),af(this))};se.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),af(this,!0)),Bt.$.N.call(this)};se.La=function(){this.s||(this.G||this.v||this.l?gT(this):this.kb())};se.kb=function(){gT(this)};function gT(t){if(t.h&&typeof Xg<"u"&&(!t.C[1]||Yr(t)!=4||t.da()!=2)){if(t.v&&Yr(t)==4)im(t.La,0,t);else if(on(t,"readystatechange"),Yr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(rT)[1]||null;if(!s&&Pe.self&&Pe.self.location){var i=Pe.self.location.protocol;s=i.substr(0,i.length-1)}r=!dD.test(s?s.toLowerCase():"")}n=r}if(n)on(t,"complete"),on(t,"success");else{t.m=6;try{var o=2<Yr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",pT(t)}}finally{af(t)}}}}function af(t,e){if(t.g){mT(t);const n=t.g,r=t.C[0]?Mu:null;t.g=null,t.C=null,e||on(t,"ready");try{n.onreadystatechange=r}catch{}}}function mT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Pe.clearTimeout(t.A),t.A=null)}function Yr(t){return t.g?t.g.readyState:0}se.da=function(){try{return 2<Yr(this)?this.g.status:-1}catch{return-1}};se.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};se.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fD(e)}};function Jy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case dT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}se.Ia=function(){return this.m};se.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vT(t){let e="";return Jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):At(t,e,n))}function _a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yT(t){this.Ga=0,this.i=[],this.j=new Zh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_a("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_a("baseRetryDelayMs",5e3,t),this.hb=_a("retryDelaySeedMs",1e4,t),this.eb=_a("forwardChannelMaxRetries",2,t),this.xa=_a("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new aT(t&&t.concurrentRequestLimit),this.Ja=new cD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}se=yT.prototype;se.qa=8;se.H=1;function dm(t){if(ET(t),t.H==3){var e=t.W++,n=cs(t.G);At(n,"SID",t.J),At(n,"RID",e),At(n,"TYPE","terminate"),sc(t,n),e=new ec(t,t.j,e,void 0),e.L=2,e.v=sf(cs(n)),n=!1,Pe.navigator&&Pe.navigator.sendBeacon&&(n=Pe.navigator.sendBeacon(e.v.toString(),"")),!n&&Pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=AT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),tc(e)}IT(t)}function lf(t){t.g&&(gm(t),t.g.cancel(),t.g=null)}function ET(t){lf(t),t.u&&(Pe.clearTimeout(t.u),t.u=null),ju(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Pe.clearTimeout(t.m),t.m=null)}function cf(t){lT(t.h)||t.m||(t.m=!0,j_(t.Na,t),t.C=0)}function mD(t,e){return cT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Jl(En(t.Na,t,e),ST(t,t.C)),t.C++,!0)}se.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ec(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=D_(i),k_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wT(this,s,e),n=cs(this.G),At(n,"RID",t),At(n,"CVER",22),this.F&&At(n,"X-HTTP-Session-Id",this.F),sc(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(vT(i)))+"&"+e:this.o&&fm(n,this.o,i)),cm(this.h,s),this.bb&&At(n,"TYPE","init"),this.P?(At(n,"$req",e),At(n,"SID","null"),s.ba=!0,Sp(s,n,null)):Sp(s,n,e),this.H=2}}else this.H==3&&(t?Zy(this,t):this.i.length==0||lT(this.h)||Zy(this))};function Zy(t,e){var n;e?n=e.m:n=t.W++;const r=cs(t.G);At(r,"SID",t.J),At(r,"RID",n),At(r,"AID",t.V),sc(t,r),t.o&&t.s&&fm(r,t.o,t.s),n=new ec(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=wT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cm(t.h,n),Sp(n,r,e)}function sc(t,e){t.ma&&Jg(t.ma,function(n,r){At(e,r,n)}),t.l&&nT({},function(n,r){At(e,r,n)})}function wT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?En(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{uD(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function bT(t){t.g||t.u||(t.ba=1,j_(t.Ma,t),t.A=0)}function pm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Jl(En(t.Ma,t),ST(t,t.A)),t.A++,!0)}se.Ma=function(){if(this.u=null,_T(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Jl(En(this.jb,this),t)}};se.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,An(10),lf(this),_T(this))};function gm(t){t.B!=null&&(Pe.clearTimeout(t.B),t.B=null)}function _T(t){t.g=new ec(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=cs(t.wa);At(e,"RID","rpc"),At(e,"SID",t.J),At(e,"CI",t.M?"0":"1"),At(e,"AID",t.V),At(e,"TYPE","xmlhttp"),sc(t,e),t.o&&t.s&&fm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=sf(cs(e)),n.s=null,n.S=!0,J_(n,t)}se.ib=function(){this.v!=null&&(this.v=null,lf(this),pm(this),An(19))};function ju(t){t.v!=null&&(Pe.clearTimeout(t.v),t.v=null)}function TT(t,e){var n=null;if(t.g==e){ju(t),gm(t),t.g=null;var r=2}else if(Cp(t.h,e))n=e.F,uT(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ef(),on(r,new Y_(r,n)),cf(t)}else bT(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&mD(t,e)||r==2&&pm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:gi(t,5);break;case 4:gi(t,10);break;case 3:gi(t,6);break;default:gi(t,2)}}}function ST(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function gi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=En(t.pb,t);n||(n=new bi("//www.google.com/images/cleardot.gif"),Pe.location&&Pe.location.protocol=="http"||$u(n,"https"),sf(n)),hD(n.toString(),r)}else An(2);t.H=0,t.l&&t.l.za(e),IT(t),ET(t)}se.pb=function(t){t?(this.j.info("Successfully pinged google.com"),An(2)):(this.j.info("Failed to ping google.com"),An(1))};function IT(t){if(t.H=0,t.pa=[],t.l){const e=hT(t.h);(e.length!=0||t.i.length!=0)&&(Vy(t.pa,e),Vy(t.pa,t.i),t.h.i.length=0,Qg(t.i),t.i.length=0),t.l.ya()}}function CT(t,e,n){var r=n instanceof bi?cs(n):new bi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bu(r,r.m);else{var s=Pe.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new bi(null,void 0);r&&$u(i,r),e&&(i.g=e),s&&Bu(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&At(r,n,e),At(r,"VER",t.qa),sc(t,r),r}function AT(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Bt(new nc({ob:!0})):new Bt(t.va),e.Oa(t.I),e}function RT(){}se=RT.prototype;se.Ba=function(){};se.Aa=function(){};se.za=function(){};se.ya=function(){};se.Va=function(){};function Vu(){if(Vo&&!(10<=Number(DN)))throw Error("Environmental error: no available transport.")}Vu.prototype.g=function(t,e){return new zn(t,e)};function zn(t,e){qt.call(this),this.g=new yT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ca(this)}Jt(zn,qt);zn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;An(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=CT(t,null,t.Y),cf(t)};zn.prototype.close=function(){dm(this.g)};zn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rm(t),t=n);e.i.push(new aD(e.fb++,t)),e.H==3&&cf(e)};zn.prototype.N=function(){this.g.l=null,delete this.j,dm(this.g),delete this.g,zn.$.N.call(this)};function xT(t){am.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Jt(xT,am);function OT(){lm.call(this),this.status=1}Jt(OT,lm);function ca(t){this.g=t}Jt(ca,RT);ca.prototype.Ba=function(){on(this.g,"a")};ca.prototype.Aa=function(t){on(this.g,new xT(t))};ca.prototype.za=function(t){on(this.g,new OT)};ca.prototype.ya=function(){on(this.g,"b")};function vD(){this.blockSize=-1}function wr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Jt(wr,vD);wr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ad(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}wr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ad(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ad(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ad(this,r),s=0;break}}this.h=s,this.i+=e};wr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ht(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var yD={};function mm(t){return-128<=t&&128>t?x_(yD,t,function(e){return new ht([e|0],0>e?-1:0)}):new ht([t|0],0>t?-1:0)}function Cr(t){if(isNaN(t)||!isFinite(t))return Co;if(0>t)return nn(Cr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ap;return new ht(e,0)}function PT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nn(PT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cr(Math.pow(e,8)),r=Co,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Cr(Math.pow(e,i)),r=r.R(i).add(Cr(o))):(r=r.R(n),r=r.add(Cr(o)))}return r}var Ap=4294967296,Co=mm(0),Rp=mm(1),eE=mm(16777216);se=ht.prototype;se.ea=function(){if(er(this))return-nn(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ap+r)*e,e*=Ap}return t};se.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xr(this))return"0";if(er(this))return"-"+nn(this).toString(t);for(var e=Cr(Math.pow(t,6)),n=this,r="";;){var s=Wu(n,e).g;n=Hu(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Xr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};se.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function er(t){return t.h==-1}se.X=function(t){return t=Hu(this,t),er(t)?-1:Xr(t)?0:1};function nn(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ht(n,~t.h).add(Rp)}se.abs=function(){return er(this)?nn(this):this};se.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ht(n,n[n.length-1]&-2147483648?-1:0)};function Hu(t,e){return t.add(nn(e))}se.R=function(t){if(Xr(this)||Xr(t))return Co;if(er(this))return er(t)?nn(this).R(nn(t)):nn(nn(this).R(t));if(er(t))return nn(this.R(nn(t)));if(0>this.X(eE)&&0>t.X(eE))return Cr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Uc(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Uc(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Uc(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Uc(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ht(n,0)};function Uc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ta(t,e){this.g=t,this.h=e}function Wu(t,e){if(Xr(e))throw Error("division by zero");if(Xr(t))return new Ta(Co,Co);if(er(t))return e=Wu(nn(t),e),new Ta(nn(e.g),nn(e.h));if(er(e))return e=Wu(t,nn(e)),new Ta(nn(e.g),e.h);if(30<t.g.length){if(er(t)||er(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Rp,r=e;0>=r.X(t);)n=tE(n),r=tE(r);var s=to(n,1),i=to(r,1);for(r=to(r,2),n=to(n,2);!Xr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=to(r,1),n=to(n,1)}return e=Hu(t,s.R(e)),new Ta(s,e)}for(s=Co;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Cr(n),o=i.R(e);er(o)||0<o.X(t);)n-=r,i=Cr(n),o=i.R(e);Xr(i)&&(i=Rp),s=s.add(i),t=Hu(t,o)}return new Ta(s,t)}se.gb=function(t){return Wu(this,t).h};se.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ht(n,this.h&t.h)};se.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ht(n,this.h|t.h)};se.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ht(n,this.h^t.h)};function tE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ht(n,t.h)}function to(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ht(s,t.h)}Vu.prototype.createWebChannel=Vu.prototype.g;zn.prototype.send=zn.prototype.u;zn.prototype.open=zn.prototype.m;zn.prototype.close=zn.prototype.close;tf.NO_ERROR=0;tf.TIMEOUT=8;tf.HTTP_ERROR=6;X_.COMPLETE="complete";Q_.EventType=Zl;Zl.OPEN="a";Zl.CLOSE="b";Zl.ERROR="c";Zl.MESSAGE="d";qt.prototype.listen=qt.prototype.O;Bt.prototype.listenOnce=Bt.prototype.P;Bt.prototype.getLastError=Bt.prototype.Sa;Bt.prototype.getLastErrorCode=Bt.prototype.Ia;Bt.prototype.getStatus=Bt.prototype.da;Bt.prototype.getResponseJson=Bt.prototype.Wa;Bt.prototype.getResponseText=Bt.prototype.ja;Bt.prototype.send=Bt.prototype.ha;Bt.prototype.setWithCredentials=Bt.prototype.Oa;wr.prototype.digest=wr.prototype.l;wr.prototype.reset=wr.prototype.reset;wr.prototype.update=wr.prototype.j;ht.prototype.add=ht.prototype.add;ht.prototype.multiply=ht.prototype.R;ht.prototype.modulo=ht.prototype.gb;ht.prototype.compare=ht.prototype.X;ht.prototype.toNumber=ht.prototype.ea;ht.prototype.toString=ht.prototype.toString;ht.prototype.getBits=ht.prototype.D;ht.fromNumber=Cr;ht.fromString=PT;var ED=function(){return new Vu},wD=function(){return ef()},ld=tf,bD=X_,_D=Wi,nE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},TD=nc,$c=Q_,SD=Bt,ID=wr,Ao=ht;const rE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Xl("@firebase/firestore");function sE(){return Pi.logLevel}function ge(t,...e){if(Pi.logLevel<=rt.DEBUG){const n=e.map(vm);Pi.debug(`Firestore (${ua}): ${t}`,...n)}}function us(t,...e){if(Pi.logLevel<=rt.ERROR){const n=e.map(vm);Pi.error(`Firestore (${ua}): ${t}`,...n)}}function Ho(t,...e){if(Pi.logLevel<=rt.WARN){const n=e.map(vm);Pi.warn(`Firestore (${ua}): ${t}`,...n)}}function vm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Re(t="Unexpected state"){const e=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: `+t;throw us(e),new Error(e)}function _t(t,e){t||Re()}function Ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends Vr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(cn.UNAUTHENTICATED))}shutdown(){}}class AD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RD{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rs,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string"),new NT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _t(e===null||typeof e=="string"),new cn(e)}}class xD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class OD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new xD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ND{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,ge("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_t(typeof n.token=="string"),this.T=n.token,new PD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ot(t,e){return t<e?-1:t>e?1:0}function Wo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ve(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ve(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ve(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ot(this.nanoseconds,e.nanoseconds):ot(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.timestamp=e}static fromTimestamp(e){return new De(e)}static min(){return new De(new Ut(0,0))}static max(){return new De(new Ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Re(),r===void 0?r=e.length-n:r>e.length-n&&Re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Rt extends kl{construct(e,n,r){return new Rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ve(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Rt(n)}static emptyPath(){return new Rt([])}}const kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends kl{construct(e,n,r){return new gn(e,n,r)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gn(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ve(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ve(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ve(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ve(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(n)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Rt.fromString(e))}static fromName(e){return new ye(Rt.fromString(e).popFirst(5))}static empty(){return new ye(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Rt(e.slice()))}}function MD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=De.fromTimestamp(r===1e9?new Ut(n+1,0):new Ut(n,r));return new Gs(s,ye.empty(),e)}function LD(t){return new Gs(t.readTime,t.key,-1)}class Gs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gs(De.min(),ye.empty(),-1)}static max(){return new Gs(De.max(),ye.empty(),-1)}}function FD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:ot(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $D{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==UD)throw t;ge("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,r)=>{n(e)})}static reject(e){return new X((n,r)=>{r(e)})}static waitFor(e){return new X((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=X.resolve(!1);for(const r of e)n=n.next(s=>s?X.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new X((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new X((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function oc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ym{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ym.ct=-1;function uf(t){return t==null}function Ku(t){return t===0&&1/t==-1/0}function BD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new Dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bc(this.root,e,this.comparator,!0)}}class Bc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tn.RED,this.left=s??tn.EMPTY,this.right=i??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(t,e,n,r,s){return this}insert(t,e,n){return new tn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oE(this.data.getIterator())}getIteratorFrom(e){return new oE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bn(this.comparator);return n.data=e,n}}class oE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new Hn([])}unionWith(e){let n=new bn(gn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MT("Invalid base64 string: "+s):s}}(e);return new Tn(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ot(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tn.EMPTY_BYTE_STRING=new Tn("");const jD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zs(t){if(_t(!!t),typeof t=="string"){let e=0;const n=jD.exec(t);if(_t(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Wt(t.seconds),nanos:Wt(t.nanos)}}function Wt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?Tn.fromBase64String(t):Tn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wm(t){const e=t.mapValue.fields.__previous_value__;return Em(e)?wm(e):e}function Ml(t){const e=zs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ll{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:HD(t)?9007199254740991:10:Re()}function Mr(t,e){if(t===e)return!0;const n=Di(t);if(n!==Di(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ml(t).isEqual(Ml(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=zs(r.timestampValue),o=zs(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ni(r.bytesValue).isEqual(Ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Wt(r.geoPointValue.latitude)===Wt(s.geoPointValue.latitude)&&Wt(r.geoPointValue.longitude)===Wt(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Wt(r.integerValue)===Wt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Wt(r.doubleValue),o=Wt(s.doubleValue);return i===o?Ku(i)===Ku(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Wo(t.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(iE(i)!==iE(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mr(i[a],o[a])))return!1;return!0}(t,e);default:return Re()}}function Fl(t,e){return(t.values||[]).find(n=>Mr(n,e))!==void 0}function Ko(t,e){if(t===e)return 0;const n=Di(t),r=Di(e);if(n!==r)return ot(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ot(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Wt(s.integerValue||s.doubleValue),a=Wt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return aE(t.timestampValue,e.timestampValue);case 4:return aE(Ml(t),Ml(e));case 5:return ot(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ni(s),a=Ni(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ot(o[l],a[l]);if(c!==0)return c}return ot(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ot(Wt(s.latitude),Wt(i.latitude));return o!==0?o:ot(Wt(s.longitude),Wt(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ko(o[l],a[l]);if(c)return c}return ot(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===jc.mapValue&&i===jc.mapValue)return 0;if(s===jc.mapValue)return 1;if(i===jc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ot(a[u],c[u]);if(h!==0)return h;const f=Ko(o[a[u]],l[c[u]]);if(f!==0)return f}return ot(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Re()}}function aE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ot(t,e);const n=zs(t),r=zs(e),s=ot(n.seconds,r.seconds);return s!==0?s:ot(n.nanos,r.nanos)}function Go(t){return xp(t)}function xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=zs(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ni(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ye.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=xp(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${xp(r.fields[a])}`;return i+"}"}(t.mapValue):Re();var e,n}function Op(t){return!!t&&"integerValue"in t}function bm(t){return!!t&&"arrayValue"in t}function lE(t){return!!t&&"nullValue"in t}function cE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function nl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=nl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(n)}setAll(e){let n=gn.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=nl(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];iu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nn(nl(this.value))}}function LT(t){const e=[];return Ki(t.fields,(n,r)=>{const s=new gn([n]);if(iu(r)){const i=LT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new un(e,0,De.min(),De.min(),De.min(),Nn.empty(),0)}static newFoundDocument(e,n,r,s){return new un(e,1,n,De.min(),r,s,0)}static newNoDocument(e,n){return new un(e,2,n,De.min(),De.min(),Nn.empty(),0)}static newUnknownDocument(e,n){return new un(e,3,n,De.min(),De.min(),Nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function uE(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ye.comparator(ye.fromName(o.referenceValue),n.key):r=Ko(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function WD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class FT{}class Gt extends FT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GD(e,n,r):n==="array-contains"?new XD(e,r):n==="in"?new QD(e,r):n==="not-in"?new qD(e,r):n==="array-contains-any"?new JD(e,r):new Gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zD(e,r):new YD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ko(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.matchesComparison(Ko(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lr extends FT{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Lr(e,n)}matches(e){return UT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function UT(t){return t.op==="and"}function $T(t){return KD(t)&&UT(t)}function KD(t){for(const e of t.filters)if(e instanceof Lr)return!1;return!0}function Pp(t){if(t instanceof Gt)return t.field.canonicalString()+t.op.toString()+Go(t.value);if($T(t))return t.filters.map(e=>Pp(e)).join(",");{const e=t.filters.map(n=>Pp(n)).join(",");return`${t.op}(${e})`}}function BT(t,e){return t instanceof Gt?function(n,r){return r instanceof Gt&&n.op===r.op&&n.field.isEqual(r.field)&&Mr(n.value,r.value)}(t,e):t instanceof Lr?function(n,r){return r instanceof Lr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&BT(i,r.filters[o]),!0):!1}(t,e):void Re()}function jT(t){return t instanceof Gt?function(e){return`${e.field.canonicalString()} ${e.op} ${Go(e.value)}`}(t):t instanceof Lr?function(e){return e.op.toString()+" {"+e.getFilters().map(jT).join(" ,")+"}"}(t):"Filter"}class GD extends Gt{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class zD extends Gt{constructor(e,n){super(e,"in",n),this.keys=VT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YD extends Gt{constructor(e,n){super(e,"not-in",n),this.keys=VT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class XD extends Gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bm(n)&&Fl(n.arrayValue,this.value)}}class QD extends Gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fl(this.value.arrayValue,n)}}class qD extends Gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fl(this.value.arrayValue,n)}}class JD extends Gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fl(this.value.arrayValue,r))}}/**
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
 */class ZD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function fE(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ZD(t,e,n,r,s,i,o)}function _m(t){const e=Ue(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Go(r)).join(",")),e.ft=n}return e.ft}function Tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hE(t.startAt,e.startAt)&&hE(t.endAt,e.endAt)}function Np(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function ek(t,e,n,r,s,i,o,a){return new hf(t,e,n,r,s,i,o,a)}function Sm(t){return new hf(t)}function dE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nk(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rk(t){return t.collectionGroup!==null}function Ro(t){const e=Ue(t);if(e.dt===null){e.dt=[];const n=nk(e),r=tk(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new rl(n)),e.dt.push(new rl(gn.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new rl(gn.keyField(),i))}}}return e.dt}function hs(t){const e=Ue(t);if(!e._t)if(e.limitType==="F")e._t=fE(e.path,e.collectionGroup,Ro(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ro(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rl(i.field,o))}const r=e.endAt?new Gu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Gu(e.startAt.position,e.startAt.inclusive):null;e._t=fE(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Dp(t,e,n){return new hf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ff(t,e){return Tm(hs(t),hs(e))&&t.limitType===e.limitType}function HT(t){return`${_m(hs(t))}|lt:${t.limitType}`}function kp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>jT(r)).join(", ")}]`),uf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Go(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Go(r)).join(",")),`Target(${n})`}(hs(t))}; limitType=${t.limitType})`}function df(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ye.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Ro(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=uE(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ro(n),r)||n.endAt&&!function(s,i,o){const a=uE(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ro(n),r))}(t,e)}function sk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WT(t){return(e,n)=>{let r=!1;for(const s of Ro(t)){const i=ik(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ik(t,e,n){const r=t.field.isKeyField()?ye.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ko(a,l):Re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new Dt(ye.comparator);function fs(){return ok}const KT=new Dt(ye.comparator);function Ua(...t){let e=KT;for(const n of t)e=e.insert(n.key,n);return e}function GT(t){let e=KT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return sl()}function zT(){return sl()}function sl(){return new ha(t=>t.toString(),(t,e)=>t.isEqual(e))}const ak=new Dt(ye.comparator),lk=new bn(ye.comparator);function Ke(...t){let e=lk;for(const n of t)e=e.add(n);return e}const ck=new bn(ot);function uk(){return ck}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ku(e)?"-0":e}}function XT(t){return{integerValue:""+t}}function hk(t,e){return BD(e)?XT(e):YT(t,e)}/**
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
 */class pf{constructor(){this._=void 0}}function fk(t,e,n){return t instanceof zu?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Em(s)&&(s=wm(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ul?qT(t,e):t instanceof $l?JT(t,e):function(r,s){const i=QT(r,s),o=pE(i)+pE(r.wt);return Op(i)&&Op(r.wt)?XT(o):YT(r.serializer,o)}(t,e)}function dk(t,e,n){return t instanceof Ul?qT(t,e):t instanceof $l?JT(t,e):n}function QT(t,e){return t instanceof Yu?Op(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class zu extends pf{}class Ul extends pf{constructor(e){super(),this.elements=e}}function qT(t,e){const n=ZT(e);for(const r of t.elements)n.some(s=>Mr(s,r))||n.push(r);return{arrayValue:{values:n}}}class $l extends pf{constructor(e){super(),this.elements=e}}function JT(t,e){let n=ZT(e);for(const r of t.elements)n=n.filter(s=>!Mr(s,r));return{arrayValue:{values:n}}}class Yu extends pf{constructor(e,n){super(),this.serializer=e,this.wt=n}}function pE(t){return Wt(t.integerValue||t.doubleValue)}function ZT(t){return bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ul&&r instanceof Ul||n instanceof $l&&r instanceof $l?Wo(n.elements,r.elements,Mr):n instanceof Yu&&r instanceof Yu?Mr(n.wt,r.wt):n instanceof zu&&r instanceof zu}(t.transform,e.transform)}class gk{constructor(e,n){this.version=e,this.transformResults=n}}class nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gf{}function eS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Im(t.key,nr.none()):new ac(t.key,t.data,nr.none());{const n=t.data,r=Nn.empty();let s=new bn(gn.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ei(t.key,r,new Hn(s.toArray()),nr.none())}}function mk(t,e,n){t instanceof ac?function(r,s,i){const o=r.value.clone(),a=mE(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(r,s,i){if(!ou(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=mE(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(tS(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function il(t,e,n,r){return t instanceof ac?function(s,i,o,a){if(!ou(s.precondition,i))return o;const l=s.value.clone(),c=vE(s.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,i,o,a){if(!ou(s.precondition,i))return o;const l=vE(s.fieldTransforms,a,i),c=i.data;return c.setAll(tS(s)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return ou(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function vk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=QT(r.transform,s||null);i!=null&&(n===null&&(n=Nn.empty()),n.set(r.field,i))}return n||null}function gE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wo(n,r,(s,i)=>pk(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ac extends gf{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ei extends gf{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mE(t,e,n){const r=new Map;_t(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,dk(o,a,n[s]))}return r}function vE(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fk(i,o,e))}return r}class Im extends gf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yk extends gf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=eS(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(De.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(n,r)=>gE(n,r))&&Wo(this.baseMutations,e.baseMutations,(n,r)=>gE(n,r))}}class Cm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_t(e.mutations.length===r.length);let s=ak;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cm(e,n,r,s)}}/**
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
 */class wk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,Qe;function _k(t){switch(t){default:return Re();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function nS(t){if(t===void 0)return us("GRPC error has no .code"),W.UNKNOWN;switch(t){case Vt.OK:return W.OK;case Vt.CANCELLED:return W.CANCELLED;case Vt.UNKNOWN:return W.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return W.INTERNAL;case Vt.UNAVAILABLE:return W.UNAVAILABLE;case Vt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Vt.NOT_FOUND:return W.NOT_FOUND;case Vt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Vt.ABORTED:return W.ABORTED;case Vt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Vt.DATA_LOSS:return W.DATA_LOSS;default:return Re()}}(Qe=Vt||(Vt={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Am{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vc}static getOrCreateInstance(){return Vc===null&&(Vc=new Am),Vc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Vc=null;/**
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
 */function Tk(){return new TextEncoder}/**
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
 */const Sk=new Ao([4294967295,4294967295],0);function yE(t){const e=Tk().encode(t),n=new ID;return n.update(e),new Uint8Array(n.digest())}function EE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ao([n,r],0),new Ao([s,i],0)]}class Rm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $a(`Invalid padding: ${n}`);if(r<0)throw new $a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $a(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Ao.fromNumber(this.yt)}Tt(e,n,r){let s=e.add(n.multiply(Ao.fromNumber(r)));return s.compare(Sk)===1&&(s=new Ao([s.getBits(0),s.getBits(1)],0)),s.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=yE(e),[r,s]=EE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);if(!this.Et(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=yE(e),[r,s]=EE(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mf(De.min(),s,new Dt(ot),fs(),Ke())}}class lc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lc(r,n,Ke(),Ke(),Ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,s){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=s}}class rS{constructor(e,n){this.targetId=e,this.bt=n}}class sS{constructor(e,n,r=Tn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wE{constructor(){this.Vt=0,this.St=_E(),this.Dt=Tn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Ke(),n=Ke(),r=Ke();return this.St.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Re()}}),new lc(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=_E()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Ik{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=fs(),this.jt=bE(),this.zt=new Dt(ot)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:Re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,s)=>{this.Zt(s)&&n(s)})}ee(e){var n;const r=e.targetId,s=e.bt.count,i=this.ne(r);if(i){const o=i.target;if(Np(o))if(s===0){const a=new ye(o.path);this.Jt(r,a,un.newNoDocument(a,De.min()))}else _t(s===1);else{const a=this.se(r);if(a!==s){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=Am.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:s}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Ni(i).toUint8Array()}catch(u){if(u instanceof MT)return Ho("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Rm(l,o,a)}catch(u){return Ho(u instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:s!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),s++)}),s}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Np(a.target)){const l=new ye(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,un.newNoDocument(l,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let r=Ke();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const s=new mf(e,n,this.zt,this.Qt,r);return this.Qt=fs(),this.jt=bE(),this.zt=new Dt(ot),s}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const s=this.Xt(e);this.ce(e,n)?s.Ft(n,1):s.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new wE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new bn(ot),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||ge("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new wE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function bE(){return new Dt(ye.comparator)}function _E(){return new Dt(ye.comparator)}const Ck=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ak=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Rk=(()=>({and:"AND",or:"OR"}))();class xk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mp(t,e){return t.useProto3Json||uf(e)?e:{value:e}}function Xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ok(t,e){return Xu(t,e.toTimestamp())}function xr(t){return _t(!!t),De.fromTimestamp(function(e){const n=zs(e);return new Ut(n.seconds,n.nanos)}(t))}function xm(t,e){return function(n){return new Rt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oS(t){const e=Rt.fromString(t);return _t(uS(e)),e}function Lp(t,e){return xm(t.databaseId,e.path)}function cd(t,e){const n=oS(e);if(n.get(1)!==t.databaseId.projectId)throw new ve(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ve(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(aS(n))}function Fp(t,e){return xm(t.databaseId,e)}function Pk(t){const e=oS(t);return e.length===4?Rt.emptyPath():aS(e)}function Up(t){return new Rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aS(t){return _t(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function TE(t,e,n){return{name:Lp(t,e),fields:n.value.mapValue.fields}}function Nk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(_t(c===void 0||typeof c=="string"),Tn.fromBase64String(c||"")):(_t(c===void 0||c instanceof Uint8Array),Tn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?W.UNKNOWN:nS(l.code);return new ve(c,l.message||"")}(o);n=new sS(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cd(t,r.document.name),i=xr(r.document.updateTime),o=r.document.createTime?xr(r.document.createTime):De.min(),a=new Nn({mapValue:{fields:r.document.fields}}),l=un.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new au(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cd(t,r.document),i=r.readTime?xr(r.readTime):De.min(),o=un.newNoDocument(s,i),a=r.removedTargetIds||[];n=new au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cd(t,r.document),i=r.removedTargetIds||[];n=new au([],i,s,null)}else{if(!("filter"in e))return Re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new bk(s,i),a=r.targetId;n=new rS(a,o)}}return n}function Dk(t,e){let n;if(e instanceof ac)n={update:TE(t,e.key,e.value)};else if(e instanceof Im)n={delete:Lp(t,e.key)};else if(e instanceof ei)n={update:TE(t,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof yk))return Re();n={verify:Lp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof zu)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ul)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $l)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yu)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw Re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ok(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Re()}(t,e.precondition)),n}function kk(t,e){return t&&t.length>0?(_t(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?xr(r.updateTime):xr(s);return i.isEqual(De.min())&&(i=xr(s)),new gk(i,r.transformResults||[])}(n,e))):[]}function Mk(t,e){return{documents:[Fp(t,e.path)]}}function Lk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return cS(Lr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:lo(u.field),direction:$k(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Mp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Fk(t){let e=Pk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_t(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=lS(u);return h instanceof Lr&&$T(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rl(co(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,uf(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Gu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Gu(f,h)}(n.endAt)),ek(e,s,o,i,a,"F",l,c)}function Uk(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=co(e.unaryFilter.field);return Gt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=co(e.unaryFilter.field);return Gt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=co(e.unaryFilter.field);return Gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=co(e.unaryFilter.field);return Gt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(t):t.fieldFilter!==void 0?function(e){return Gt.create(co(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Lr.create(e.compositeFilter.filters.map(n=>lS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Re()}}(e.compositeFilter.op))}(t):Re()}function $k(t){return Ck[t]}function Bk(t){return Ak[t]}function jk(t){return Rk[t]}function lo(t){return{fieldPath:t.canonicalString()}}function co(t){return gn.fromServerFormat(t.fieldPath)}function cS(t){return t instanceof Gt?function(e){if(e.op==="=="){if(cE(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NAN"}};if(lE(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cE(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NOT_NAN"}};if(lE(e.value))return{unaryFilter:{field:lo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(e.field),op:Bk(e.op),value:e.value}}}(t):t instanceof Lr?function(e){const n=e.getFilters().map(r=>cS(r));return n.length===1?n[0]:{compositeFilter:{op:jk(e.op),filters:n}}}(t):Re()}function Vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,r,s,i=De.min(),o=De.min(),a=Tn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ds(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.le=e}}function Wk(t){const e=Fk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dp(e,e.limit,"L"):e}/**
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
 */class Kk{constructor(){this.sn=new Gk}addToCollectionParentIndex(e,n){return this.sn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(Gs.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(Gs.min())}updateCollectionGroup(e,n,r){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class Gk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new bn(Rt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bn(Rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new zo(0)}static kn(){return new zo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.changes=new ha(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,un.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?X.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&il(r.mutation,s,Hn.empty(),Ut.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ke()){const s=mi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ua();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ke()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=fs();const o=sl(),a=sl();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ei)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),il(u.mutation,c,u.mutation.getFieldMask(),Ut.now())):o.set(c.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Yk(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=sl();let s=new Dt((o,a)=>o-a),i=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Hn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Ke()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=zT();u.forEach(f=>{if(!i.has(f)){const d=eS(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return X.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return ye.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):X.resolve(mi());let a=-1,l=i;return o.next(c=>X.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?X.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Ke())).next(u=>({batchId:a,changes:GT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(r=>{let s=Ua();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ua();return this.indexManager.getCollectionParents(e,s).next(o=>X.forEach(o,a=>{const l=function(c,u){return new hf(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,un.newInvalidDocument(c)))});let o=Ua();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&il(c.mutation,l,Hn.empty(),Ut.now()),df(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return X.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:xr(r.createTime)}),X.resolve()}getNamedQuery(e,n){return X.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Wk(r.bundledQuery),readTime:xr(r.readTime)}}(n)),X.resolve()}}/**
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
 */class qk{constructor(){this.overlays=new Dt(ye.comparator),this.hs=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return X.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.de(e,n,i)}),X.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(r)),X.resolve()}getOverlaysForCollection(e,n,r){const s=mi(),i=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return X.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Dt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=mi(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=mi(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return X.resolve(a)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wk(n,r));let i=this.hs.get(n);i===void 0&&(i=Ke(),this.hs.set(n,i)),this.hs.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.ls=new bn(Yt.fs),this.ds=new bn(Yt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Yt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Yt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new ye(new Rt([])),r=new Yt(n,e),s=new Yt(n,e+1),i=[];return this.ds.forEachInRange([r,s],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new ye(new Rt([])),r=new Yt(n,e),s=new Yt(n,e+1);let i=Ke();return this.ds.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Yt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Yt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return ye.comparator(e.key,n.key)||ot(e.Es,n.Es)}static _s(e,n){return ot(e.Es,n.Es)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new bn(Yt.fs)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ek(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Yt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return X.resolve(o)}lookupMutationBatch(e,n){return X.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),i=s<0?0:s;return X.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Yt(n,0),s=new Yt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.vs(o.Es);i.push(a)}),X.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bn(ot);return n.forEach(s=>{const i=new Yt(s,0),o=new Yt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.Es)})}),X.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ye.isDocumentKey(i)||(i=i.child(""));const o=new Yt(new ye(i),0);let a=new bn(ot);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),X.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_t(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return X.forEach(n.mutations,s=>{const i=new Yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Yt(n,0),s=this.Rs.firstAfterOrEqual(r);return X.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.Ss=e,this.docs=new Dt(ye.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return X.resolve(r?r.document.mutableCopy():un.newInvalidDocument(n))}getEntries(e,n){let r=fs();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():un.newInvalidDocument(s))}),X.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fs();const o=n.path,a=new ye(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||FD(LD(u),r)<=0||(s.has(u.key)||df(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return X.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Re()}Ds(e,n){return X.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eM(this)}getSize(e){return X.resolve(this.size)}}class eM extends zk{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),X.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.persistence=e,this.Cs=new ha(n=>_m(n),Tm),this.lastRemoteSnapshotVersion=De.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Om,this.targetCount=0,this.ks=zo.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),X.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new zo(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.$n(n),X.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),X.waitFor(i).next(()=>s)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return X.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),X.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),X.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),X.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return X.resolve(r)}containsKey(e,n){return X.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n){this.Ms={},this.overlays={},this.Os=new ym(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new tM(this),this.indexManager=new Kk,this.remoteDocumentCache=function(r){return new Zk(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new Hk(n),this.Ls=new Qk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new Jk(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){ge("MemoryPersistence","Starting transaction:",e);const s=new rM(this.Os.next());return this.referenceDelegate.qs(),r(s).next(i=>this.referenceDelegate.Us(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ks(e,n){return X.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class rM extends $D{constructor(e){super(),this.currentSequenceNumber=e}}class Pm{constructor(e){this.persistence=e,this.Gs=new Om,this.Qs=null}static js(e){return new Pm(e)}get zs(){if(this.Qs)return this.Qs;throw Re()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),X.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),X.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.zs,r=>{const s=ye.fromPath(r);return this.Ws(e,s).next(i=>{i||n.removeEntry(s,De.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return X.or([()=>X.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=Ke(),s=Ke();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nm(e,n.fromCache,r,s)}}/**
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
 */class sM{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(i=>i||this.Ki(e,n,s,r)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(dE(n))return X.resolve(null);let r=hs(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Dp(n,null,"F"),r=hs(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ke(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Dp(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,s){return dE(n)||s.isEqual(De.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,r,s)?this.Gi(e,n):(sE()<=rt.DEBUG&&ge("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kp(n)),this.zi(e,o,n,MD(s,-1)))})}Qi(e,n){let r=new bn(WT(e));return n.forEach((s,i)=>{df(e,i)&&(r=r.add(i))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Gi(e,n){return sE()<=rt.DEBUG&&ge("QueryEngine","Using full collection scan to execute query:",kp(n)),this.qi.getDocumentsMatchingQuery(e,n,Gs.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Dt(ot),this.Ji=new ha(i=>_m(i),Tm),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function oM(t,e,n,r){return new iM(t,e,n,r)}async function hS(t,e){const n=Ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ke();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function aM(t,e){const n=Ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=X.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);_t(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Ke();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function fS(t){const e=Ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function lM(t,e){const n=Ue(t),r=e.snapshotVersion;let s=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Tn.EMPTY_BYTE_STRING,De.min()).withLastLimboFreeSnapshotVersion(De.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(i,d))});let l=fs(),c=Ke();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(cM(i,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(De.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return X.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Hi=s,i))}function cM(t,e,n){let r=Ke(),s=Ke();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fs();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(De.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ge("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:s}})}function uM(t,e){const n=Ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hM(t,e){const n=Ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Fs.getTargetData(r,e).next(i=>i?(s=i,X.resolve(s)):n.Fs.allocateTargetId(r).next(o=>(s=new Ds(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Hi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function $p(t,e,n){const r=Ue(t),s=r.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!oc(o))throw o;ge("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(s.target)}function SE(t,e,n){const r=Ue(t);let s=De.min(),i=Ke();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Ue(a),h=u.Ji.get(c);return h!==void 0?X.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(r,o,hs(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?s:De.min(),n?i:Ke())).next(a=>(fM(r,sk(e),a),{documents:a,sr:i})))}function fM(t,e,n){let r=t.Yi.get(e)||De.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Yi.set(e,r)}class IE{constructor(){this.activeTargetIds=uk()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dM{constructor(){this.Wr=new IE,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new IE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pM{Jr(e){}shutdown(){}}/**
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
 */class CE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ge("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){ge("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hc=null;function ud(){return Hc===null?Hc=268435456+Math.round(2147483648*Math.random()):Hc++,"0x"+Hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class vM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,i){const o=ud(),a=this.Io(e,n);ge("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,s,i),this.Eo(e,a,l,r).then(c=>(ge("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Ho("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,s,i,o){return this.po(e,n,r,s,i)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ua,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Io(e,n){const r=gM[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const i=ud();return new Promise((o,a)=>{const l=new SD;l.setWithCredentials(!0),l.listenOnce(bD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ld.NO_ERROR:const u=l.getResponseJson();ge(an,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ld.TIMEOUT:ge(an,`RPC '${e}' ${i} timed out`),a(new ve(W.DEADLINE_EXCEEDED,"Request time out"));break;case ld.HTTP_ERROR:const h=l.getStatus();if(ge(an,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(d.status);a(new ve(p,d.message))}else a(new ve(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ve(W.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{ge(an,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);ge(an,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=ud(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ED(),a=wD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new TD({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");ge(an,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new mM({io:m=>{f?ge(an,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(h||(ge(an,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),ge(an,`RPC '${e}' stream ${s} sending:`,m),u.send(m))},ro:()=>u.close()}),p=(m,y,v)=>{m.listen(y,g=>{try{v(g)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,$c.EventType.OPEN,()=>{f||ge(an,`RPC '${e}' stream ${s} transport opened.`)}),p(u,$c.EventType.CLOSE,()=>{f||(f=!0,ge(an,`RPC '${e}' stream ${s} transport closed`),d.fo())}),p(u,$c.EventType.ERROR,m=>{f||(f=!0,Ho(an,`RPC '${e}' stream ${s} transport errored:`,m),d.fo(new ve(W.UNAVAILABLE,"The operation could not be completed")))}),p(u,$c.EventType.MESSAGE,m=>{var y;if(!f){const v=m.data[0];_t(!!v);const g=v,E=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(E){ge(an,`RPC '${e}' stream ${s} received error:`,E);const b=E.status;let I=function(A){const _=Vt[A];if(_!==void 0)return nS(_)}(b),C=E.message;I===void 0&&(I=W.INTERNAL,C="Unknown error status: "+b+" with message "+E.message),f=!0,d.fo(new ve(I,C)),u.close()}else ge(an,`RPC '${e}' stream ${s} received:`,v),d._o(v)}}),p(a,_D.STAT_EVENT,m=>{m.stat===nE.PROXY?ge(an,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===nE.NOPROXY&&ge(an,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){return new xk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&ge("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Mo=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new dS(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(us(n.toString()),us("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new ve(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return ge("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(ge("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yM extends pS{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=Nk(this.serializer,e),r=function(s){if(!("targetChange"in s))return De.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?De.min():i.readTime?xr(i.readTime):De.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Up(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=Np(a)?{documents:Mk(s,a)}:{query:Lk(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=iS(s,i.resumeToken);const l=Mp(s,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(De.min())>0){o.readTime=Xu(s,i.snapshotVersion.toTimestamp());const l=Mp(s,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=Uk(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Up(this.serializer),n.removeTarget=e,this.zo(n)}}class EM extends pS{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(_t(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=kk(e.writeResults,e.commitTime),r=xr(e.commitTime);return this.listener.uu(r,n)}return _t(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Up(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dk(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new ve(W.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.po(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ve(W.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ve(W.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class bM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(us(n),this.wu=!1):ge("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(ge("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ue(a);l.Au.add(4),await cc(l),l.Pu.set("Unknown"),l.Au.delete(4),await yf(l)}(this))})}),this.Pu=new bM(r,s)}}async function yf(t){if(Gi(t))for(const e of t.Ru)await e(!0)}async function cc(t){for(const e of t.Ru)await e(!1)}function gS(t,e){const n=Ue(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Mm(n)?km(n):fa(n).Uo()&&Dm(n,e))}function mS(t,e){const n=Ue(t),r=fa(n);n.Eu.delete(e),r.Uo()&&vS(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Gi(n)&&n.Pu.set("Unknown"))}function Dm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(De.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fa(t).nu(e)}function vS(t,e){t.bu.Lt(e),fa(t).su(e)}function km(t){t.bu=new Ik({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),fa(t).start(),t.Pu.mu()}function Mm(t){return Gi(t)&&!fa(t).qo()&&t.Eu.size>0}function Gi(t){return Ue(t).Au.size===0}function yS(t){t.bu=void 0}async function TM(t){t.Eu.forEach((e,n)=>{Dm(t,e)})}async function SM(t,e){yS(t),Mm(t)?(t.Pu.pu(e),km(t)):t.Pu.set("Unknown")}async function IM(t,e,n){if(t.Pu.set("Online"),e instanceof sS&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){ge("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qu(t,r)}else if(e instanceof au?t.bu.Wt(e):e instanceof rS?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(De.min()))try{const r=await fS(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.bu.ue(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Eu.get(l);c&&s.Eu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Eu.get(a);if(!c)return;s.Eu.set(a,c.withResumeToken(Tn.EMPTY_BYTE_STRING,c.snapshotVersion)),vS(s,a);const u=new Ds(c.target,a,l,c.sequenceNumber);Dm(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){ge("RemoteStore","Failed to raise snapshot:",r),await Qu(t,r)}}async function Qu(t,e,n){if(!oc(e))throw e;t.Au.add(1),await cc(t),t.Pu.set("Offline"),n||(n=()=>fS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ge("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await yf(t)})}function ES(t,e){return e().catch(n=>Qu(t,n,e))}async function Ef(t){const e=Ue(t),n=Ys(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;CM(e);)try{const s=await uM(e.localStore,r);if(s===null){e.Tu.length===0&&n.Qo();break}r=s.batchId,AM(e,s)}catch(s){await Qu(e,s)}wS(e)&&bS(e)}function CM(t){return Gi(t)&&t.Tu.length<10}function AM(t,e){t.Tu.push(e);const n=Ys(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function wS(t){return Gi(t)&&!Ys(t).qo()&&t.Tu.length>0}function bS(t){Ys(t).start()}async function RM(t){Ys(t).au()}async function xM(t){const e=Ys(t);for(const n of t.Tu)e.ou(n.mutations)}async function OM(t,e,n){const r=t.Tu.shift(),s=Cm.from(r,e,n);await ES(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ef(t)}async function PM(t,e){e&&Ys(t).ru&&await async function(n,r){if(s=r.code,_k(s)&&s!==W.ABORTED){const i=n.Tu.shift();Ys(n).Go(),await ES(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ef(n)}var s}(t,e),wS(t)&&bS(t)}async function AE(t,e){const n=Ue(t);n.asyncQueue.verifyOperationInProgress(),ge("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n.Au.add(3),await cc(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await yf(n)}async function NM(t,e){const n=Ue(t);e?(n.Au.delete(2),await yf(n)):e||(n.Au.add(2),await cc(n),n.Pu.set("Unknown"))}function fa(t){return t.Vu||(t.Vu=function(e,n,r){const s=Ue(e);return s.lu(),new yM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:TM.bind(null,t),co:SM.bind(null,t),eu:IM.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Mm(t)?km(t):t.Pu.set("Unknown")):(await t.Vu.stop(),yS(t))})),t.Vu}function Ys(t){return t.Su||(t.Su=function(e,n,r){const s=Ue(e);return s.lu(),new EM(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:RM.bind(null,t),co:PM.bind(null,t),cu:xM.bind(null,t),uu:OM.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Ef(t)):(await t.Su.stop(),t.Tu.length>0&&(ge("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Lm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fm(t,e){if(us("AsyncQueue",`${e}: ${t}`),oc(t))return new ve(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ye.comparator(n.key,r.key):(n,r)=>ye.comparator(n.key,r.key),this.keyedMap=Ua(),this.sortedSet=new Dt(this.comparator)}static emptySet(e){return new xo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.Du=new Dt(ye.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Re():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yo{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yo(e,n,xo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ff(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.xu=void 0,this.listeners=[]}}class kM{constructor(){this.queries=new ha(e=>HT(e),ff),this.onlineState="Unknown",this.Nu=new Set}}async function _S(t,e){const n=Ue(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new DM),s)try{i.xu=await n.onListen(r)}catch(o){const a=Fm(o,`Initialization of query '${kp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Um(n)}async function TS(t,e){const n=Ue(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function MM(t,e){const n=Ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(s)&&(r=!0);o.xu=s}}r&&Um(n)}function LM(t,e,n){const r=Ue(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Um(t){t.Nu.forEach(e=>{e.next()})}class SS{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.key=e}}class CS{constructor(e){this.key=e}}class FM{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Ke(),this.mutatedKeys=Ke(),this.Zu=WT(e),this.tc=new xo(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new RE,s=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=df(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.ic(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.Zu(d,l)>0||c&&this.Zu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re()}};return d(h)-d(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,i.length!==0||l?{snapshot:new Yo(this.query,e.tc,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new RE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Ke(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new CS(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new IS(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Ke();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Yo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class UM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $M{constructor(e){this.key=e,this.lc=!1}}class BM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ha(a=>HT(a),ff),this._c=new Map,this.wc=new Set,this.mc=new Dt(ye.comparator),this.gc=new Map,this.yc=new Om,this.Ic={},this.Tc=new Map,this.Ec=zo.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function jM(t,e){const n=qM(t);let r,s;const i=n.dc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.hc();else{const o=await hM(n.localStore,hs(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await VM(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&gS(n.remoteStore,o)}return s}async function VM(t,e,n,r,s){t.Rc=(h,f,d)=>async function(p,m,y,v){let g=m.view.nc(y);g.ji&&(g=await SE(p.localStore,m.query,!1).then(({documents:I})=>m.view.nc(I,g)));const E=v&&v.targetChanges.get(m.targetId),b=m.view.applyChanges(g,p.isPrimaryClient,E);return OE(p,m.targetId,b.uc),b.snapshot}(t,h,f,d);const i=await SE(t.localStore,e,!0),o=new FM(e,i.sr),a=o.nc(i.documents),l=lc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);OE(t,n,c.uc);const u=new UM(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function HM(t,e){const n=Ue(t),r=n.dc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!ff(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $p(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mS(n.remoteStore,r.targetId),Bp(n,r.targetId)}).catch(ic)):(Bp(n,r.targetId),await $p(n.localStore,r.targetId,!0))}async function WM(t,e,n){const r=JM(t);try{const s=await function(i,o){const a=Ue(i),l=Ut.now(),c=o.reduce((f,d)=>f.add(d.key),Ke());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=fs(),p=Ke();return a.Xi.getEntries(f,c).next(m=>{d=m,d.forEach((y,v)=>{v.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const y=[];for(const v of o){const g=vk(v,u.get(v.key).overlayedDocument);g!=null&&y.push(new ei(v.key,g,LT(g.value.mapValue),nr.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:GT(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.Ic[i.currentUser.toKey()];l||(l=new Dt(ot)),l=l.insert(o,a),i.Ic[i.currentUser.toKey()]=l}(r,s.batchId,n),await uc(r,s.changes),await Ef(r.remoteStore)}catch(s){const i=Fm(s,"Failed to persist write");n.reject(i)}}async function AS(t,e){const n=Ue(t);try{const r=await lM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.gc.get(i);o&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?_t(o.lc):s.removedDocuments.size>0&&(_t(o.lc),o.lc=!1))}),await uc(n,r,e)}catch(r){await ic(r)}}function xE(t,e,n){const r=Ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Ue(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&Um(a)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KM(t,e,n){const r=Ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.gc.get(e),i=s&&s.key;if(i){let o=new Dt(ye.comparator);o=o.insert(i,un.newNoDocument(i,De.min()));const a=Ke().add(i),l=new mf(De.min(),new Map,new Dt(ot),o,a);await AS(r,l),r.mc=r.mc.remove(i),r.gc.delete(e),$m(r)}else await $p(r.localStore,e,!1).then(()=>Bp(r,e,n)).catch(ic)}async function GM(t,e){const n=Ue(t),r=e.batch.batchId;try{const s=await aM(n.localStore,e);xS(n,r,null),RS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uc(n,s)}catch(s){await ic(s)}}async function zM(t,e,n){const r=Ue(t);try{const s=await function(i,o){const a=Ue(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(_t(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);xS(r,e,n),RS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uc(r,s)}catch(s){await ic(s)}}function RS(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function xS(t,e,n){const r=Ue(t);let s=r.Ic[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ic[r.currentUser.toKey()]=s}}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||OS(t,r)})}function OS(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(mS(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),$m(t))}function OE(t,e,n){for(const r of n)r instanceof IS?(t.yc.addReference(r.key,e),YM(t,r)):r instanceof CS?(ge("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||OS(t,r.key)):Re()}function YM(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(ge("SyncEngine","New document in limbo: "+n),t.wc.add(r),$m(t))}function $m(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new ye(Rt.fromString(e)),r=t.Ec.next();t.gc.set(r,new $M(n)),t.mc=t.mc.insert(n,r),gS(t.remoteStore,new Ds(hs(Sm(n.path)),r,"TargetPurposeLimboResolution",ym.ct))}}async function uc(t,e,n){const r=Ue(t),s=[],i=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Nm.Bi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fc.eu(s),await async function(a,l){const c=Ue(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>X.forEach(l,h=>X.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>X.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!oc(u))throw u;ge("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Hi=c.Hi.insert(h,p)}}}(r.localStore,i))}async function XM(t,e){const n=Ue(t);if(!n.currentUser.isEqual(e)){ge("SyncEngine","User change. New user:",e.toKey());const r=await hS(n.localStore,e);n.currentUser=e,function(s,i){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new ve(W.CANCELLED,i))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uc(n,r.tr)}}function QM(t,e){const n=Ue(t),r=n.gc.get(e);if(r&&r.lc)return Ke().add(r.key);{let s=Ke();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.dc.get(o);s=s.unionWith(a.view.ec)}return s}}function qM(t){const e=Ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KM.bind(null,e),e.fc.eu=MM.bind(null,e.eventManager),e.fc.vc=LM.bind(null,e.eventManager),e}function JM(t){const e=Ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zM.bind(null,e),e}class PE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oM(this.persistence,new sM,e.initialUser,this.serializer)}createPersistence(e){return new nM(Pm.js,this.serializer)}createSharedClientState(e){return new dM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XM.bind(null,this.syncEngine),await NM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kM}createDatastore(e){const n=vf(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new vM(s));var s;return function(i,o,a,l){return new wM(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>xE(this.syncEngine,a,0),o=CE.D()?new CE:new pM,new _M(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new BM(r,s,i,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ue(e);ge("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await cc(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):us("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=cn.UNAUTHENTICATED,this.clientId=DT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ge("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ge("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ve(W.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),ge("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await hS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function NE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nL(t);ge("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>AE(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>AE(e.remoteStore,i)),t._onlineComponents=e}function tL(t){return t.name==="FirebaseError"?t.code===W.FAILED_PRECONDITION||t.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ge("FirestoreClient","Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tL(n))throw n;Ho("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new PE)}}else ge("FirestoreClient","Using default OfflineComponentProvider"),await fd(t,new PE);return t._offlineComponents}async function NS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ge("FirestoreClient","Using user provided OnlineComponentProvider"),await NE(t,t._uninitializedComponentsProvider._online)):(ge("FirestoreClient","Using default OnlineComponentProvider"),await NE(t,new ZM))),t._onlineComponents}function rL(t){return NS(t).then(e=>e.syncEngine)}async function DS(t){const e=await NS(t),n=e.eventManager;return n.onListen=jM.bind(null,e.syncEngine),n.onUnlisten=HM.bind(null,e.syncEngine),n}function sL(t,e,n={}){const r=new rs;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new PS({next:h=>{i.enqueueAndForget(()=>TS(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new ve(W.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new ve(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new SS(Sm(o.path),c,{includeMetadataChanges:!0,Uu:!0});return _S(s,u)}(await DS(t),t.asyncQueue,e,n,r)),r.promise}function iL(t,e,n={}){const r=new rs;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new PS({next:h=>{i.enqueueAndForget(()=>TS(s,u)),h.fromCache&&a.source==="server"?l.reject(new ve(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new SS(o,c,{includeMetadataChanges:!0,Uu:!0});return _S(s,u)}(await DS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e,n){if(!n)throw new ve(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oL(t,e,n,r){if(e===!0&&r===!0)throw new ve(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kE(t){if(!ye.isDocumentKey(t))throw new ve(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ME(t){if(ye.isDocumentKey(t))throw new ve(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Re()}function br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ve(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(t);throw new ve(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ve(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ve(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CD;switch(n.type){case"firstParty":return new OD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ve(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=DE.get(e);n&&(ge("ComponentProvider","Removing Datastore"),DE.delete(e),n.terminate())}(this),Promise.resolve()}}function aL(t,e,n,r={}){var s;const i=(t=br(t,wf))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ho("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=cn.MOCK_USER;else{o=KO(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ve(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new cn(l)}t._authCredentials=new AD(new NT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class bf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bf(this.firestore,e,this._query)}}class $s extends bf{constructor(e,n,r){super(e,n,Sm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new ye(e))}withConverter(e){return new $s(this.firestore,e,this._path)}}function Sa(t,e,...n){if(t=jt(t),kS("collection","path",e),t instanceof wf){const r=Rt.fromString(e,...n);return ME(r),new $s(t,null,r)}{if(!(t instanceof Fn||t instanceof $s))throw new ve(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Rt.fromString(e,...n));return ME(r),new $s(t.firestore,null,r)}}function Cn(t,e,...n){if(t=jt(t),arguments.length===1&&(e=DT.A()),kS("doc","path",e),t instanceof wf){const r=Rt.fromString(e,...n);return kE(r),new Fn(t,null,new ye(r))}{if(!(t instanceof Fn||t instanceof $s))throw new ve(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Rt.fromString(e,...n));return kE(r),new Fn(t.firestore,t instanceof $s?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new dS(this,"async_queue_retry"),this.Yc=()=>{const n=hd();n&&ge("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=hd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new rs;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!oc(e))throw e;ge("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw us("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=Lm.createAndSchedule(this,e,n,r,i=>this.ea(i));return this.jc.push(s),s}Xc(){this.zc&&Re()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class zi extends wf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new lL,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MS(this),this._firestoreClient.terminate()}}function cL(t,e){const n=typeof t=="object"?t:Yg(),r=typeof t=="string"?t:e||"(default)",s=zg(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HO("firestore");i&&aL(s,...i)}return s}function jm(t){return t._firestoreClient||MS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function MS(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,l,c){return new VD(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eL(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xo(Tn.fromBase64String(e))}catch(n){throw new ve(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xo(Tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ve(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ve(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ve(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ot(this._lat,e._lat)||ot(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=/^__.*__$/;class hL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new ac(e,this.data,n,this.fieldTransforms)}}class LS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function FS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class Wm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return qu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(FS(this.ua)&&uL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class fL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vf(e)}ga(e,n,r,s=!1){return new Wm({ua:e,methodName:n,ma:r,path:gn.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Km(t){const e=t._freezeSettings(),n=vf(t._databaseId);return new fL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function US(t,e,n,r,s,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,s);Gm("Data must be an object, but it was:",o,r);const a=$S(r,o);let l,c;if(i.merge)l=new Hn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=jp(e,h,n);if(!o.contains(f))throw new ve(W.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jS(u,f)||u.push(f)}l=new Hn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new hL(new Nn(a),l,c)}class Tf extends Vm{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tf}}function dL(t,e,n,r){const s=t.ga(1,e,n);Gm("Data must be an object, but it was:",s,r);const i=[],o=Nn.empty();Ki(r,(l,c)=>{const u=zm(e,l,n);c=jt(c);const h=s.fa(u);if(c instanceof Tf)i.push(u);else{const f=Sf(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Hn(i);return new LS(o,a,s.fieldTransforms)}function pL(t,e,n,r,s,i){const o=t.ga(1,e,n),a=[jp(e,r,n)],l=[s];if(i.length%2!=0)throw new ve(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(jp(e,i[f])),l.push(i[f+1]);const c=[],u=Nn.empty();for(let f=a.length-1;f>=0;--f)if(!jS(c,a[f])){const d=a[f];let p=l[f];p=jt(p);const m=o.fa(d);if(p instanceof Tf)c.push(d);else{const y=Sf(p,m);y!=null&&(c.push(d),u.set(d,y))}}const h=new Hn(c);return new LS(u,h,o.fieldTransforms)}function Sf(t,e){if(BS(t=jt(t)))return Gm("Unsupported field value:",e,t),$S(t,e);if(t instanceof Vm)return function(n,r){if(!FS(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Sf(o,r.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hk(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ut.fromDate(n);return{timestampValue:Xu(r.serializer,s)}}if(n instanceof Ut){const s=new Ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xu(r.serializer,s)}}if(n instanceof Hm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xo)return{bytesValue:iS(r.serializer,n._byteString)};if(n instanceof Fn){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Bm(n)}`)}(t,e)}function $S(t,e){const n={};return kT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,s)=>{const i=Sf(s,e.aa(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function BS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ut||t instanceof Hm||t instanceof Xo||t instanceof Fn||t instanceof Vm)}function Gm(t,e,n){if(!BS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function jp(t,e,n){if((e=jt(e))instanceof _f)return e._internalPath;if(typeof e=="string")return zm(t,e);throw qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const gL=new RegExp("[~\\*/\\[\\]]");function zm(t,e,n){if(e.search(gL)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _f(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ve(W.INVALID_ARGUMENT,a+t+l)}function jS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mL extends VS{data(){return super.data()}}function HS(t,e){return typeof e=="string"?zm(t,e):e instanceof _f?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ve(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yL{convertValue(e,n="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ki(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Hm(Wt(e.latitude),Wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ml(e));default:return null}}convertTimestamp(e){const n=zs(e);return new Ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Rt.fromString(e);_t(uS(r));const s=new Ll(r.get(1),r.get(3)),i=new ye(r.popFirst(5));return s.isEqual(n)||us(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KS extends VS{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(HS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends KS{data(e={}){return super.data(e)}}class EL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ba(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new Ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ve(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ba(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ba(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:wL(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(t){t=br(t,Fn);const e=br(t.firestore,zi);return sL(jm(e),t._key).then(n=>AL(e,t,n))}class GS extends yL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,n)}}function _L(t){t=br(t,bf);const e=br(t.firestore,zi),n=jm(e),r=new GS(e);return vL(t._query),iL(n,t._query).then(s=>new EL(e,r,t,s))}function TL(t,e,n){t=br(t,Fn);const r=br(t.firestore,zi),s=WS(t.converter,e,n);return If(r,[US(Km(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nr.none())])}function SL(t,e,n,...r){t=br(t,Fn);const s=br(t.firestore,zi),i=Km(s);let o;return o=typeof(e=jt(e))=="string"||e instanceof _f?pL(i,"updateDoc",t._key,e,n,r):dL(i,"updateDoc",t._key,e),If(s,[o.toMutation(t._key,nr.exists(!0))])}function IL(t){return If(br(t.firestore,zi),[new Im(t._key,nr.none())])}function CL(t,e){const n=br(t.firestore,zi),r=Cn(t),s=WS(t.converter,e);return If(n,[US(Km(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nr.exists(!1))]).then(()=>r)}function If(t,e){return function(n,r){const s=new rs;return n.asyncQueue.enqueueAndForget(async()=>WM(await rL(n),r,s)),s.promise}(jm(t),e)}function AL(t,e,n){const r=n.docs.get(e._key),s=new GS(t);return new KS(t,s,e._key,r,new Ba(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ua=n})(qs),kr(new yr("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new zi(new RD(n.getProvider("auth-internal")),new ND(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ve(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ll(a.options.projectId,l)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Kn(rE,"3.11.0",t),Kn(rE,"3.11.0","esm2017")})();const zS=async t=>{const e=await bL(t),n=e.data();return n?{id:e.id,...n}:null},dd=async t=>{const e=await _L(t);return Promise.all(e.docs.map(n=>zS(n.ref)))},fi=zS,FE=CL,UE=TL,ol=SL,Vp=IL,pd=t=>t.sort((e,n)=>{const r=(n.order||0)-(e.order||0);return r!==0?r:e.date&&n.date?n.date.getTime()-e.date.getTime():0}),RL=(t,e,n,r)=>{setTimeout(()=>{t.forEach((s,i)=>{setTimeout(()=>{r(s)},i*n)})},e)},Ju=(t,e)=>{if(!t||!e)return!1;for(const n in t)if(t[n]!==e[n]&&!(t[n]===void 0||e[n]===void 0))return!1;return!0},gd=t=>{const e=Math.round((Date.now()-t.getTime())/1e3);if(e<30)return"Just now";if(e<60)return`${e} second${e!==1?"s":""} ago`;if(e<60*60){const n=Math.floor(e/60);return`${n} minute${n!==1?"s":""} ago`}else if(e<60*60*24){const n=Math.floor(e/3600);return`${n} hour${n!==1?"s":""} ago`}else{if(e<60*60*24*2)return"Yesterday";{const n=new Date,s=n.getFullYear()===t.getFullYear()?{month:"long",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"},i=t.toLocaleDateString(void 0,s);if(n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()){const o={weekday:"long"};return t.toLocaleDateString(void 0,o)}else return i}}};function Ym(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function YS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xL=YS,XS=new oa("auth","Firebase",YS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Xl("@firebase/auth");function OL(t,...e){Zu.logLevel<=rt.WARN&&Zu.warn(`Auth (${qs}): ${t}`,...e)}function cu(t,...e){Zu.logLevel<=rt.ERROR&&Zu.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,...e){throw Xm(t,...e)}function Or(t,...e){return Xm(t,...e)}function PL(t,e,n){const r=Object.assign(Object.assign({},xL()),{[e]:n});return new oa("auth","Firebase",r).create(e,{appName:t.name})}function Xm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XS.create(t,...e)}function Ee(t,e,...n){if(!t)throw Xm(e,...n)}function Qr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cu(e),new Error(e)}function ds(t,e){t||Qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NL(){return $E()==="http:"||$E()==="https:"}function $E(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NL()||GO()||"connection"in navigator)?navigator.onLine:!0}function kL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ds(n>e,"Short delay should be less than long delay!"),this.isMobile=Kg()||f_()}get(){return DL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){ds(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=new hc(3e4,6e4);function Yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xi(t,e,n,r,s={}){return qS(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),QS.fetch()(JS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function qS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ML),e);try{const s=new FL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wc(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw PL(t,u,c);_r(t,u)}}catch(s){if(s instanceof Vr)throw s;_r(t,"network-request-failed",{message:String(s)})}}async function fc(t,e,n,r,s={}){const i=await Xi(t,e,n,r,s);return"mfaPendingCredential"in i&&_r(t,"multi-factor-auth-required",{_serverResponse:i}),i}function JS(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qm(t.config,s):`${t.config.apiScheme}://${s}`}class FL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Or(this.auth,"network-request-failed")),LL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Or(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e){return Xi(t,"POST","/v1/accounts:delete",e)}async function $L(t,e){return Xi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BL(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=qm(r);Ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:al(md(s.auth_time)),issuedAtTime:al(md(s.iat)),expirationTime:al(md(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function md(t){return Number(t)*1e3}function qm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pu(n);return s?JSON.parse(s):(cu("Failed to decode base64 JWT payload"),null)}catch(s){return cu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jL(t){const e=qm(t);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&VL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eh(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Qo(t,$L(n,{idToken:r}));Ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?GL(i.providerUserInfo):[],a=KL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ZS(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WL(t){const e=jt(t);await eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function GL(t){return t.map(e=>{var{providerId:n}=e,r=Ym(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(t,e){const n=await qS(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=JS(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Bl;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bl,this.toJSON())}_performRefresh(){return Qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){Ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ym(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ZS(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BL(this,e)}reload(){return WL(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qo(this,UL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:b,isAnonymous:I,providerData:C,stsTokenManager:A}=n;Ee(E&&A,e,"internal-error");const _=Bl.fromJSON(this.name,A);Ee(typeof E=="string",e,"internal-error"),_s(h,e.name),_s(f,e.name),Ee(typeof b=="boolean",e,"internal-error"),Ee(typeof I=="boolean",e,"internal-error"),_s(d,e.name),_s(p,e.name),_s(m,e.name),_s(y,e.name),_s(v,e.name),_s(g,e.name);const S=new _i({uid:E,auth:e,email:f,emailVerified:b,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:_,createdAt:v,lastLoginAt:g});return C&&Array.isArray(C)&&(S.providerData=C.map(N=>Object.assign({},N))),y&&(S._redirectEventId=y),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Bl;s.updateFromServerResponse(n);const i=new _i({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await eh(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Map;function qr(t){ds(t instanceof Function,"Expected a class definition");let e=BE.get(t);return e?(ds(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,BE.set(t,e),e)}/**
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
 */class eI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eI.type="NONE";const jE=eI;/**
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
 */function uu(t,e,n){return`firebase:${t}:${e}:${n}`}class Oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uu(this.userKey,s.apiKey,i),this.fullPersistenceKey=uu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oo(qr(jE),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||qr(jE);const o=uu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_i._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Oo(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Oo(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iI(e))return"Blackberry";if(oI(e))return"Webos";if(Jm(e))return"Safari";if((e.includes("chrome/")||nI(e))&&!e.includes("edge/"))return"Chrome";if(sI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tI(t=_n()){return/firefox\//i.test(t)}function Jm(t=_n()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nI(t=_n()){return/crios\//i.test(t)}function rI(t=_n()){return/iemobile/i.test(t)}function sI(t=_n()){return/android/i.test(t)}function iI(t=_n()){return/blackberry/i.test(t)}function oI(t=_n()){return/webos/i.test(t)}function Cf(t=_n()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YL(t=_n()){var e;return Cf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XL(){return zO()&&document.documentMode===10}function aI(t=_n()){return Cf(t)||sI(t)||oI(t)||iI(t)||/windows phone/i.test(t)||rI(t)}function QL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e=[]){let n;switch(t){case"Browser":n=VE(_n());break;case"Worker":n=`${VE(_n())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}async function cI(t,e){return Xi(t,"GET","/v2/recaptchaConfig",Yi(t,e))}function HE(t){return t!==void 0&&t.enterprise!==void 0}class uI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Or("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qL().appendChild(r)})}function JL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZL="https://www.google.com/recaptcha/enterprise.js?render=",e2="recaptcha-enterprise",t2="NO_RECAPTCHA";class fI{constructor(e){this.type=e2,this.auth=Qi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uI(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;HE(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(t2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&HE(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}hI(ZL+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function qo(t,e,n,r=!1){const s=new fI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class n2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WE(this),this.idTokenSubscription=new WE(this),this.beforeStateQueue=new n2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}async initializeRecaptchaConfig(){const e=await cI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qr(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[qr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qi(t){return jt(t)}class WE{constructor(e){this.auth=e,this.observer=null,this.addObserver=tP(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t,e){const n=zg(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Du(i,e??{}))return s;_r(s,"already-initialized")}return n.initialize({options:e})}function i2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o2(t,e,n){const r=Qi(t);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=dI(e),{host:o,port:a}=a2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||l2()}function dI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a2(t){const e=dI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:KE(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:KE(o)}}}function KE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qr("not implemented")}_getIdTokenResponse(e){return Qr("not implemented")}_linkToIdToken(e,n){return Qr("not implemented")}_getReauthenticationResolver(e){return Qr("not implemented")}}async function pI(t,e){return Xi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t,e){return fc(t,"POST","/v1/accounts:signInWithPassword",Yi(t,e))}async function c2(t,e){return Xi(t,"POST","/v1/accounts:sendOobCode",Yi(t,e))}async function yd(t,e){return c2(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){return fc(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}async function h2(t,e){return fc(t,"POST","/v1/accounts:signInWithEmailLink",Yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Zm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await qo(e,r,"signInWithPassword");return vd(e,s)}else return vd(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await qo(e,r,"signInWithPassword");return vd(e,i)}else return Promise.reject(s)});case"emailLink":return u2(e,{email:this._email,oobCode:this._password});default:_r(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h2(e,{idToken:n,email:this._email,oobCode:this._password});default:_r(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e){return fc(t,"POST","/v1/accounts:signInWithIdp",Yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="http://localhost";class ki extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ym(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ki(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Po(e,n)}buildRequest(){const e={requestUri:f2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p2(t){const e=ka(Ma(t)).link,n=e?ka(Ma(e)).deep_link_id:null,r=ka(Ma(t)).deep_link_id;return(r?ka(Ma(r)).link:null)||r||n||e||t}class ev{constructor(e){var n,r,s,i,o,a;const l=ka(Ma(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=d2((s=l.mode)!==null&&s!==void 0?s:null);Ee(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p2(e);try{return new ev(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ev.parseLink(n);return Ee(r,"argument-error"),jl._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dc extends gI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends dc{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends dc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xs.credential(n,r)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends dc{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Os.credential(e.oauthAccessToken)}catch{return null}}}Os.GITHUB_SIGN_IN_METHOD="github.com";Os.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends dc{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ps.credential(n,r)}catch{return null}}}Ps.TWITTER_SIGN_IN_METHOD="twitter.com";Ps.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(t,e){return fc(t,"POST","/v1/accounts:signUp",Yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _i._fromIdTokenResponse(e,r,s),o=GE(r);return new Mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=GE(r);return new Mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function GE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Vr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,th.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new th(e,n,r,s)}}function mI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?th._fromErrorAndOperation(t,i,e,r):i})}async function g2(t,e,n=!1){const r=await Qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function vI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Qo(t,mI(r,s,e,t),n);Ee(i.idToken,r,"internal-error");const o=qm(i.idToken);Ee(o,r,"internal-error");const{sub:a}=o;return Ee(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_r(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e,n=!1){const r="signIn",s=await mI(t,r,e),i=await Mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function m2(t,e){return yI(Qi(t),e)}async function zE(t,e){return vI(jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t,e,n){var r;Ee(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Ee(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Ee(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Ee(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e,n){var r;const s=Qi(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await qo(s,i,"getOobCode",!0);n&&wd(s,o,n),await yd(s,o)}else n&&wd(s,i,n),await yd(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await qo(s,i,"getOobCode",!0);n&&wd(s,a,n),await yd(s,a)}else return Promise.reject(o)})}async function y2(t,e,n){var r;const s=Qi(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await qo(s,i,"signUpPassword");o=Ed(s,c)}else o=Ed(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await qo(s,i,"signUpPassword");return Ed(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Mi._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function E2(t,e,n){return m2(jt(t),Xs.credential(e,n))}function w2(t,e){return EI(jt(t),e,null)}function b2(t,e){return EI(jt(t),null,e)}async function EI(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Qo(t,pI(r,i));await t._updateTokensIfNecessary(o,!0)}function wI(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function _2(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}function T2(t){return jt(t).signOut()}async function S2(t){return jt(t).delete()}const nh="__sak";/**
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
 */class bI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nh,"1"),this.storage.removeItem(nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(){const t=_n();return Jm(t)||Cf(t)}const C2=1e3,A2=10;class _I extends bI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=I2()&&QL(),this.fallbackToPolling=aI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);XL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,A2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_I.type="LOCAL";const R2=_I;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI extends bI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TI.type="SESSION";const SI=TI;/**
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
 */function x2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Af{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Af(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await x2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Af.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class O2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=tv("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return window}function P2(t){Pr().location.href=t}/**
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
 */function II(){return typeof Pr().WorkerGlobalScope<"u"&&typeof Pr().importScripts=="function"}async function N2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k2(){return II()?self:null}/**
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
 */const CI="firebaseLocalStorageDb",M2=1,rh="firebaseLocalStorage",AI="fbase_key";class pc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rf(t,e){return t.transaction([rh],e?"readwrite":"readonly").objectStore(rh)}function L2(){const t=indexedDB.deleteDatabase(CI);return new pc(t).toPromise()}function Wp(){const t=indexedDB.open(CI,M2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rh,{keyPath:AI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rh)?e(r):(r.close(),await L2(),e(await Wp()))})})}async function YE(t,e,n){const r=Rf(t,!0).put({[AI]:e,value:n});return new pc(r).toPromise()}async function F2(t,e){const n=Rf(t,!1).get(e),r=await new pc(n).toPromise();return r===void 0?null:r.value}function XE(t,e){const n=Rf(t,!0).delete(e);return new pc(n).toPromise()}const U2=800,$2=3;class RI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return II()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Af._getInstance(k2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await N2(),!this.activeServiceWorker)return;this.sender=new O2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wp();return await YE(e,nh,"1"),await XE(e,nh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>YE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>F2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>XE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Rf(s,!1).getAll();return new pc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RI.type="LOCAL";const B2=RI;new hc(3e4,6e4);/**
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
 */function j2(t,e){return e?qr(e):(Ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nv extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V2(t){return yI(t.auth,new nv(t),t.bypassAuthState)}function H2(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),vI(n,new nv(t),t.bypassAuthState)}async function W2(t){const{auth:e,user:n}=t;return Ee(n,e,"internal-error"),g2(n,new nv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V2;case"linkViaPopup":case"linkViaRedirect":return W2;case"reauthViaPopup":case"reauthViaRedirect":return H2;default:_r(this.auth,"internal-error")}}resolve(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new hc(2e3,1e4);class po extends xI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ds(this.filter.length===1,"Popup operations only handle one event");const e=tv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,K2.get())};e()}}po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="pendingRedirect",hu=new Map;class z2 extends xI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hu.get(this.auth._key());if(!e){try{const r=await Y2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hu.set(this.auth._key(),e)}return this.bypassAuthState||hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y2(t,e){const n=q2(e),r=Q2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function X2(t,e){hu.set(t._key(),e)}function Q2(t){return qr(t._redirectPersistence)}function q2(t){return uu(G2,t.config.apiKey,t.name)}async function J2(t,e,n=!1){const r=Qi(t),s=j2(r,e),o=await new z2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=10*60*1e3;class eF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!OI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Or(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z2&&this.cachedEventUids.clear(),this.cachedEventUids.has(QE(e))}saveEventToCache(e){this.cachedEventUids.add(QE(e)),this.lastProcessedEventTime=Date.now()}}function QE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nF(t,e={}){return Xi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sF=/^https?/;async function iF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nF(t);for(const n of e)try{if(oF(n))return}catch{}_r(t,"unauthorized-domain")}function oF(t){const e=Hp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sF.test(n))return!1;if(rF.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const aF=new hc(3e4,6e4);function qE(){const t=Pr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lF(t){return new Promise((e,n)=>{var r,s,i;function o(){qE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qE(),n(Or(t,"network-request-failed"))},timeout:aF.get()})}if(!((s=(r=Pr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Pr().gapi)===null||i===void 0)&&i.load)o();else{const a=JL("iframefcb");return Pr()[a]=()=>{gapi.load?o():n(Or(t,"network-request-failed"))},hI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fu=null,e})}let fu=null;function cF(t){return fu=fu||lF(t),fu}/**
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
 */const uF=new hc(5e3,15e3),hF="__/auth/iframe",fF="emulator/auth/iframe",dF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gF(t){const e=t.config;Ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qm(e,fF):`https://${t.config.authDomain}/${hF}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=pF.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${aa(r).slice(1)}`}async function mF(t){const e=await cF(t),n=Pr().gapi;return Ee(n,t,"internal-error"),e.open({where:document.body,url:gF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dF,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Or(t,"network-request-failed"),a=Pr().setTimeout(()=>{i(o)},uF.get());function l(){Pr().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const vF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yF=500,EF=600,wF="_blank",bF="http://localhost";class JE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _F(t,e,n,r=yF,s=EF){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vF),{width:r.toString(),height:s.toString(),top:i,left:o}),c=_n().toLowerCase();n&&(a=nI(c)?wF:n),tI(c)&&(e=e||bF,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(YL(c)&&a!=="_self")return TF(e||"",a),new JE(null);const h=window.open(e||"",a,u);Ee(h,t,"popup-blocked");try{h.focus()}catch{}return new JE(h)}function TF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SF="__/auth/handler",IF="emulator/auth/handler",CF=encodeURIComponent("fac");async function ZE(t,e,n,r,s,i){Ee(t.config.authDomain,t,"auth-domain-config-required"),Ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof gI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof dc){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${CF}=${encodeURIComponent(l)}`:"";return`${AF(t)}?${aa(a).slice(1)}${c}`}function AF({config:t}){return t.emulator?Qm(t,IF):`https://${t.authDomain}/${SF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="webStorageSupport";class RF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SI,this._completeRedirectFn=J2,this._overrideRedirectResult=X2}async _openPopup(e,n,r,s){var i;ds((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ZE(e,n,r,Hp(),s);return _F(e,o,tv())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ZE(e,n,r,Hp(),s);return P2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ds(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mF(e),r=new eF(e);return n.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bd,{type:bd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bd];o!==void 0&&n(!!o),_r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aI()||Jm()||Cf()}}const xF=RF;var e0="@firebase/auth",t0="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NF(t){kr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),Ee(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lI(t)},c=new r2(r,s,i,l);return i2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kr(new yr("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new OF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(e0,t0,PF(t)),Kn(e0,t0,"esm2017")}/**
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
 */const DF=5*60,kF=h_("authIdTokenMaxAge")||DF;let n0=null;const MF=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kF)return;const s=n==null?void 0:n.token;n0!==s&&(n0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PI(t=Yg()){const e=zg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=s2(t,{popupRedirectResolver:xF,persistence:[B2,R2,SI]}),r=h_("authTokenSyncURL");if(r){const i=MF(r);_2(n,i,()=>i(n.currentUser)),wI(n,o=>i(o))}const s=u_("auth");return s&&o2(n,`http://${s}`),n}NF("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF=new Map,FF={activated:!1,tokenObservers:[]};function Fr(t){return LF.get(t)||Object.assign({},FF)}const r0={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Cl,await $F(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Cl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function $F(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},sh=new oa("appCheck","AppCheck",BF);function jF(t){if(!Fr(t).activated)throw sh.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="firebase-app-check-database",HF=1,Kp="firebase-app-check-store";let Kc=null;function WF(){return Kc||(Kc=new Promise((t,e)=>{try{const n=indexedDB.open(VF,HF);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(sh.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Kp,{keyPath:"compositeKey"})}}}catch(n){e(sh.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Kc)}function KF(t,e){return GF(zF(t),e)}async function GF(t,e){const r=(await WF()).transaction(Kp,"readwrite"),i=r.objectStore(Kp).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(sh.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function zF(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Xl("@firebase/app-check");function s0(t,e){return p_()?KF(t,e).catch(n=>{Gp.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YF={error:"UNKNOWN_ERROR"};function XF(t){return Kh.encodeString(JSON.stringify(t),!1)}async function zp(t,e=!1){const n=t.app;jF(n);const r=Fr(n);let s=r.token,i;if(s&&!ja(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(ja(l)?s=l:await s0(n,void 0))}if(!e&&s&&ja(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Fr(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Gp.warn(l.message):Gp.error(l),i=l}let a;return s?i?ja(s)?a={token:s.token,internalError:i}:a=o0(i):(a={token:s.token},r.token=s,await s0(n,s)):a=o0(i),o&&JF(n,a),a}function QF(t,e,n,r){const{app:s}=t,i=Fr(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ja(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),i0(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>i0(t))}function NI(t,e){const n=Fr(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function i0(t){const{app:e}=t,n=Fr(e);let r=n.tokenRefresher;r||(r=qF(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function qF(t){const{app:e}=t;return new UF(async()=>{const n=Fr(e);let r;if(n.token?r=await zp(t,!0):r=await zp(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Fr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},r0.RETRIAL_MIN_WAIT,r0.RETRIAL_MAX_WAIT)}function JF(t,e){const n=Fr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ja(t){return t.expireTimeMillis-Date.now()>0}function o0(t){return{token:XF(YF),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Fr(this.app);for(const n of e)NI(this.app,n.next);return Promise.resolve()}}function eU(t,e){return new ZF(t,e)}function tU(t){return{getToken:e=>zp(t,e),addTokenListener:e=>QF(t,"INTERNAL",e),removeTokenListener:e=>NI(t.app,e)}}const nU="@firebase/app-check",rU="0.7.0",sU="app-check",a0="app-check-internal";function iU(){kr(new yr(sU,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return eU(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(a0).initialize()})),kr(new yr(a0,t=>{const e=t.getProvider("app-check").getImmediate();return tU(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kn(nU,rU)}iU();const DI=Symbol("firebaseApp");function kI(t){return jr()&&Ln(DI,null)||Yg(t)}const Gc=new WeakMap;function oU(t,e){if(!Gc.has(t)){const n=Sh(!0);Gc.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Gc.delete(t)}}return Gc.get(t)}const aU=new WeakMap,zc=new WeakMap;function lU(t){const e=kI(t);if(!zc.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{zc.set(e,i),n(i.value)}];zc.set(e,s)}return zc.get(e)}function cU(t,e){const n=PI(e);wI(n,r=>{const s=lU();t.value=r,Array.isArray(s)&&s[1](t)})}const l0="@firebase/database",c0="0.14.4";/**
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
 */let MI="";function uU(t){MI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rn(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Al(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hU(e)}}catch{}return new fU},vi=LI("localStorage"),Yp=LI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Xl("@firebase/database"),dU=function(){let t=1;return function(){return t++}}(),FI=function(t){const e=iP(t),n=new eP;n.update(e);const r=n.digest();return Kh.encodeByteArray(r)},gc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gc.apply(null,r):typeof r=="object"?e+=rn(r):e+=r,e+=" "}return e};let Ti=null,u0=!0;const pU=function(t,e){re(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(No.logLevel=rt.VERBOSE,Ti=No.log.bind(No),e&&Yp.set("logging_enabled",!0)):typeof t=="function"?Ti=t:(Ti=null,Yp.remove("logging_enabled"))},hn=function(...t){if(u0===!0&&(u0=!1,Ti===null&&Yp.get("logging_enabled")===!0&&pU(!0)),Ti){const e=gc.apply(null,t);Ti(e)}},mc=function(t){return function(...e){hn(t,...e)}},Xp=function(...t){const e="FIREBASE INTERNAL ERROR: "+gc(...t);No.error(e)},Li=function(...t){const e=`FIREBASE FATAL ERROR: ${gc(...t)}`;throw No.error(e),new Error(e)},Gn=function(...t){const e="FIREBASE WARNING: "+gc(...t);No.warn(e)},gU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},UI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jo="[MIN_NAME]",Fi="[MAX_NAME]",da=function(t,e){if(t===e)return 0;if(t===Jo||e===Fi)return-1;if(e===Jo||t===Fi)return 1;{const n=h0(t),r=h0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vU=function(t,e){return t===e?0:t<e?-1:1},Ia=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rn(e))},rv=function(t){if(typeof t!="object"||t===null)return rn(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rn(e[r]),n+=":",n+=rv(t[e[r]]);return n+="}",n},$I=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function sr(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const BI=function(t){re(!UI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},yU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wU=new RegExp("^-?(0*)\\d{1,10}$"),bU=-2147483648,_U=2147483647,h0=function(t){if(wU.test(t)){const e=Number(t);if(e>=bU&&e<=_U)return e}return null},vc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gn("Exception was thrown by user callback.",n),e},Math.floor(0))}},TU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ll=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class SU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Gn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gn(e)}}class Qp{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qp.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="5",jI="v",VI="s",HI="r",WI="f",KI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,GI="ls",zI="p",qp="ac",YI="websocket",XI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function QI(t,e,n){re(typeof e=="string","typeof type must == string"),re(typeof n=="object","typeof params must == object");let r;if(e===YI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===XI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AU(t)&&(n.ns=t.namespace);const s=[];return sr(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(){this.counters_={}}incrementCounter(e,n=1){gs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={},Td={};function iv(t){const e=t.toString();return _d[e]||(_d[e]=new RU),_d[e]}function xU(t,e){const n=t.toString();return Td[n]||(Td[n]=e()),Td[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&vc(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="start",PU="close",NU="pLPCommand",DU="pRTLPCB",qI="id",JI="pw",ZI="ser",kU="cb",MU="seg",LU="ts",FU="d",UU="dframe",eC=1870,tC=30,$U=eC-tC,BU=25e3,jU=3e4;class go{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mc(e),this.stats_=iv(n),this.urlFn=l=>(this.appCheckToken&&(l[qp]=this.appCheckToken),QI(n,XI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new OU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jU)),mU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ov((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===f0)this.id=a,this.password=l;else if(o===PU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[f0]="t",r[ZI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[kU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jI]=sv,this.transportSessionId&&(r[VI]=this.transportSessionId),this.lastSessionId&&(r[GI]=this.lastSessionId),this.applicationId&&(r[zI]=this.applicationId),this.appCheckToken&&(r[qp]=this.appCheckToken),typeof location<"u"&&location.hostname&&KI.test(location.hostname)&&(r[HI]=WI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){go.forceAllow_=!0}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){return go.forceAllow_?!0:!go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yU()&&!EU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l_(n),s=$I(r,$U);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UU]="t",r[qI]=e,r[JI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rn(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ov{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dU(),window[NU+this.uniqueCallbackIdentifier]=e,window[DU+this.uniqueCallbackIdentifier]=n,this.myIFrame=ov.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){hn("frame writing exception"),a.stack&&hn(a.stack),hn(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||hn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qI]=this.myID,e[JI]=this.myPW,e[ZI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tC+r.length<=eC;){const o=this.pendingSegs.shift();r=r+"&"+MU+s+"="+o.seg+"&"+LU+s+"="+o.ts+"&"+FU+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(BU)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU=16384,HU=45e3;let ih=null;typeof MozWebSocket<"u"?ih=MozWebSocket:typeof WebSocket<"u"&&(ih=WebSocket);class hr{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mc(this.connId),this.stats_=iv(n),this.connURL=hr.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[jI]=sv,typeof location<"u"&&location.hostname&&KI.test(location.hostname)&&(o[HI]=WI),n&&(o[VI]=n),r&&(o[GI]=r),s&&(o[qp]=s),i&&(o[zI]=i),QI(e,YI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vi.set("previous_websocket_failure",!0);try{let r;d_(),this.mySock=new ih(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){hr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ih!==null&&!hr.forceDisallow_}static previouslyFailed(){return vi.isInMemoryStorage||vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){vi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Al(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$I(n,VU);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hr.responsesRequiredToBeHealthy=2;hr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[go,hr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hr&&hr.isAvailable();let r=n&&!hr.previouslyFailed();if(e.webSocketOnly&&(n||Gn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hr];else{const s=this.transports_=[];for(const i of Vl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Vl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU=6e4,KU=5e3,GU=10*1024,zU=100*1024,Sd="t",d0="d",YU="s",p0="r",XU="e",g0="o",m0="a",v0="n",y0="p",QU="h";class qU{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mc("c:"+this.id+":"),this.transportManager_=new Vl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ll(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sd in e){const n=e[Sd];n===m0?this.upgradeIfSecondaryHealthy_():n===p0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===g0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:y0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:v0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ia(Sd,e);if(d0 in e){const r=e[d0];if(n===QU){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===v0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YU?this.onConnectionShutdown_(r):n===p0?this.onReset_(r):n===XU?Xp("Server Error: "+r):n===g0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sv!==r&&Gn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ll(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ll(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:y0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){re(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends rC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oh}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=32,w0=768;class Tt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function dt(){return new Tt("")}function qe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qs(t){return t.pieces_.length-t.pieceNum_}function wt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Tt(t.pieces_,e)}function sC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function iC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function oC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Tt(e,0)}function Qt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Tt(n,0)}function ze(t){return t.pieceNum_>=t.pieces_.length}function tr(t,e){const n=qe(t),r=qe(e);if(n===null)return e;if(n===r)return tr(wt(t),wt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function aC(t,e){if(Qs(t)!==Qs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fr(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qs(t)>Qs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZU{constructor(e,n){this.errorPrefix_=n,this.parts_=iC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gh(this.parts_[r]);lC(this)}}function e4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gh(e),lC(t)}function t4(t){const e=t.parts_.pop();t.byteLength_-=Gh(e),t.parts_.length>0&&(t.byteLength_-=1)}function lC(t){if(t.byteLength_>w0)throw new Error(t.errorPrefix_+"has a key path longer than "+w0+" bytes ("+t.byteLength_+").");if(t.parts_.length>E0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+E0+") or object contains a cycle "+li(t))}function li(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends rC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new av}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=1e3,n4=60*5*1e3,b0=30*1e3,r4=1.3,s4=3e4,i4="server_kill",_0=3;class ss extends nC{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ss.nextPersistentConnectionId_++,this.log_=mc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ca,this.maxReconnectDelay_=n4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!d_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");av.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(rn(i)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Cl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;ss.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gs(e,"w")){const r=jo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Gn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=b0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rn(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xp("Unrecognized action received from server: "+rn(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s4&&(this.reconnectDelay_=Ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*r4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ss.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){re(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new qU(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{Gn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(i4)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Gn(h),l())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],lp(this.interruptReasons_)&&(this.reconnectDelay_=Ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>rv(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Tt(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){hn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_0&&(this.reconnectDelay_=b0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){hn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+MI.replace(/\./g,"-")]=1,Kg()?e["framework.cordova"]=1:f_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oh.getInstance().currentlyOnline();return lp(this.interruptReasons_)&&e}}ss.nextPersistentConnectionId_=0;ss.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ze(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ze(Jo,e),s=new Ze(Jo,n);return this.compare(r,s)!==0}minPost(){return Ze.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;class cC extends xf{static get __EMPTY_NODE(){return Yc}static set __EMPTY_NODE(e){Yc=e}compare(e,n){return da(e.name,n.name)}isDefinedOn(e){throw ia("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ze.MIN}maxPost(){return new Ze(Fi,Yc)}makePost(e,n){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Ze(e,Yc)}toString(){return".key"}}const Do=new cC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xt.RED,this.left=s??kn.EMPTY_NODE,this.right=i??kn.EMPTY_NODE}copy(e,n,r,s,i){return new Xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class o4{copy(e,n,r,s,i){return this}insert(e,n,r){return new Xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kn{constructor(e,n=kn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new kn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xc(this.root_,null,this.comparator_,!0,e)}}kn.EMPTY_NODE=new o4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t,e){return da(t.name,e.name)}function lv(t,e){return da(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jp;function l4(t){Jp=t}const uC=function(t){return typeof t=="number"?"number:"+BI(t):"string:"+t},hC=function(t){if(t.isLeafNode()){const e=t.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gs(e,".sv"),"Priority must be a string or number.")}else re(t===Jp||t.isEmpty(),"priority of unexpected type.");re(t===Jp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T0;class zt{constructor(e,n=zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hC(this.priorityNode_)}static set __childrenNodeConstructor(e){T0=e}static get __childrenNodeConstructor(){return T0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ze(e)?this:qe(e)===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=qe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(re(r!==".priority"||Qs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(wt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=BI(this.value_):e+=this.value_,this.lazyHash_=FI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zt.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=zt.VALUE_TYPE_ORDER.indexOf(n),i=zt.VALUE_TYPE_ORDER.indexOf(r);return re(s>=0,"Unknown leaf type: "+n),re(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fC,dC;function c4(t){fC=t}function u4(t){dC=t}class h4 extends xf{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?da(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ze.MIN}maxPost(){return new Ze(Fi,new zt("[PRIORITY-POST]",dC))}makePost(e,n){const r=fC(e);return new Ze(n,new zt("[PRIORITY-POST]",r))}toString(){return".priority"}}const vn=new h4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=Math.log(2);class d4{constructor(e){const n=i=>parseInt(Math.log(i)/f4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ah=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Xt(f,h.node,Xt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),m=s(d+1,c);return h=t[d],f=n?n(h):h,new Xt(f,h.node,Xt.BLACK,p,m)}},i=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const y=h-p,v=h;h-=p;const g=s(y+1,v),E=t[y],b=n?n(E):E;d(new Xt(b,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?f(y,Xt.BLACK):(f(y,Xt.BLACK),f(y,Xt.RED))}return u},o=new d4(t.length),a=i(o);return new kn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;const no={};class Jr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return re(no&&vn,"ChildrenNode.ts has not been loaded"),Id=Id||new Jr({".priority":no},{".priority":vn}),Id}get(e){const n=jo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kn?n:null}hasIndex(e){return gs(this.indexSet_,e.toString())}addIndex(e,n){re(e!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ze.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ah(r,e.getCompare()):a=no;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Jr(u,c)}addToIndexes(e,n){const r=Nu(this.indexes_,(s,i)=>{const o=jo(this.indexSet_,i);if(re(o,"Missing index implementation for "+i),s===no)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ze.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ah(a,o.getCompare())}else return no;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ze(e.name,a))),l.insert(e,e.node)}});return new Jr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Nu(this.indexes_,s=>{if(s===no)return s;{const i=n.get(e.name);return i?s.remove(new Ze(e.name,i)):s}});return new Jr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class ct{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hC(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Aa||(Aa=new ct(new kn(lv),null,Jr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Aa}updatePriority(e){return this.children_.isEmpty()?this:new ct(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Aa:n}}getChild(e){const n=qe(e);return n===null?this:this.getImmediateChild(n).getChild(wt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(re(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ze(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Aa:this.priorityNode_;return new ct(s,o,i)}}updateChild(e,n){const r=qe(e);if(r===null)return n;{re(qe(e)!==".priority"||Qs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(wt(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(vn,(o,a)=>{n[o]=a.val(e),r++,i&&ct.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uC(this.getPriority().val())+":"),this.forEachChild(vn,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":FI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ze(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ze(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ze(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ze.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ze.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yc?-1:0}withIndex(e){if(e===Do||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ct(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Do||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(vn),s=n.getIterator(vn);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Do?null:this.indexMap_.get(e.toString())}}ct.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p4 extends ct{constructor(){super(new kn(lv),ct.EMPTY_NODE,Jr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ct.EMPTY_NODE}isEmpty(){return!1}}const yc=new p4;Object.defineProperties(Ze,{MIN:{value:new Ze(Jo,ct.EMPTY_NODE)},MAX:{value:new Ze(Fi,yc)}});cC.__EMPTY_NODE=ct.EMPTY_NODE;zt.__childrenNodeConstructor=ct;l4(yc);u4(yc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=!0;function fn(t,e=null){if(t===null)return ct.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new zt(n,fn(e))}if(!(t instanceof Array)&&g4){const n=[];let r=!1;if(sr(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fn(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ze(o,l)))}}),n.length===0)return ct.EMPTY_NODE;const i=ah(n,a4,o=>o.name,lv);if(r){const o=ah(n,vn.getCompare());return new ct(i,fn(e),new Jr({".priority":o},{".priority":vn}))}else return new ct(i,fn(e),Jr.Default)}else{let n=ct.EMPTY_NODE;return sr(t,(r,s)=>{if(gs(t,r)&&r.substring(0,1)!=="."){const i=fn(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(fn(e))}}c4(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4 extends xf{constructor(e){super(),this.indexPath_=e,re(!ze(e)&&qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?da(e.name,n.name):i}makePost(e,n){const r=fn(e),s=ct.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ze(n,s)}maxPost(){const e=ct.EMPTY_NODE.updateChild(this.indexPath_,yc);return new Ze(Fi,e)}toString(){return iC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4 extends xf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?da(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ze.MIN}maxPost(){return Ze.MAX}makePost(e,n){const r=fn(e);return new Ze(n,r)}toString(){return".value"}}const y4=new v4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){return{type:"value",snapshotNode:t}}function w4(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function b4(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function S0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jo}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vn}copy(){const e=new cv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vn?n="$priority":t.index_===y4?n="$value":t.index_===Do?n="$key":(re(t.index_ instanceof m4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rn(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rn(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rn(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rn(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rn(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function C0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends nC{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=mc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=lh.getListenId_(e,r),a={};this.listens_[o]=a;const l=I0(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),jo(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=lh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=I0(e._queryParams),r=e._path.toString(),s=new Cl;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+aa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Al(a.responseText)}catch{Gn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Gn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.rootNode_=ct.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){return{value:null,children:new Map}}function pC(t,e,n){if(ze(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=qe(e);t.children.has(r)||t.children.set(r,ch());const s=t.children.get(r);e=wt(e),pC(s,e,n)}}function Zp(t,e,n){t.value!==null?n(e,t.value):S4(t,(r,s)=>{const i=new Tt(e.toString()+"/"+r);Zp(s,i,n)})}function S4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&sr(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*1e3,C4=30*1e3,A4=5*60*1e3;class R4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new I4(e);const r=A0+(C4-A0)*Math.random();ll(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;sr(e,(s,i)=>{i>0&&gs(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ll(this.reportStats_.bind(this),Math.floor(Math.random()*2*A4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ar||(Ar={}));function gC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ar.ACK_USER_WRITE,this.source=gC()}operationForChild(e){if(ze(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Tt(e));return new uh(dt(),n,this.revert)}}else return re(qe(this.path)===e,"operationForChild called for unrelated child."),new uh(wt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ar.OVERWRITE}operationForChild(e){return ze(this.path)?new Ui(this.source,dt(),this.snap.getImmediateChild(e)):new Ui(this.source,wt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ar.MERGE}operationForChild(e){if(ze(this.path)){const n=this.children.subtree(new Tt(e));return n.isEmpty()?null:n.value?new Ui(this.source,dt(),n.value):new Hl(this.source,dt(),n)}else return re(qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hl(this.source,wt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ze(e))return this.isFullyInitialized()&&!this.filtered_;const n=qe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function x4(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(_4(o.childName,o.snapshotNode))}),Ra(t,s,"child_removed",e,r,n),Ra(t,s,"child_added",e,r,n),Ra(t,s,"child_moved",i,r,n),Ra(t,s,"child_changed",e,r,n),Ra(t,s,"value",e,r,n),s}function Ra(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>P4(t,a,l)),o.forEach(a=>{const l=O4(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function O4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function P4(t,e,n){if(e.childName==null||n.childName==null)throw ia("Should only compare child_ events.");const r=new Ze(e.childName,e.snapshotNode),s=new Ze(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t,e){return{eventCache:t,serverCache:e}}function cl(t,e,n,r){return yC(new uv(e,n,r),t.serverCache)}function EC(t,e,n,r){return yC(t.eventCache,new uv(e,n,r))}function eg(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $i(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;const N4=()=>(Cd||(Cd=new kn(vU)),Cd);class Et{constructor(e,n=N4()){this.value=e,this.children=n}static fromObject(e){let n=new Et(null);return sr(e,(r,s)=>{n=n.set(new Tt(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:dt(),value:this.value};if(ze(e))return null;{const r=qe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(wt(e),n);return i!=null?{path:Qt(new Tt(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ze(e))return this;{const n=qe(e),r=this.children.get(n);return r!==null?r.subtree(wt(e)):new Et(null)}}set(e,n){if(ze(e))return new Et(n,this.children);{const r=qe(e),i=(this.children.get(r)||new Et(null)).set(wt(e),n),o=this.children.insert(r,i);return new Et(this.value,o)}}remove(e){if(ze(e))return this.children.isEmpty()?new Et(null):new Et(null,this.children);{const n=qe(e),r=this.children.get(n);if(r){const s=r.remove(wt(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Et(null):new Et(this.value,i)}else return this}}get(e){if(ze(e))return this.value;{const n=qe(e),r=this.children.get(n);return r?r.get(wt(e)):null}}setTree(e,n){if(ze(e))return n;{const r=qe(e),i=(this.children.get(r)||new Et(null)).setTree(wt(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Et(this.value,o)}}fold(e){return this.fold_(dt(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Qt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,dt(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ze(e))return null;{const i=qe(e),o=this.children.get(i);return o?o.findOnPath_(wt(e),Qt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,dt(),n)}foreachOnPath_(e,n,r){if(ze(e))return this;{this.value&&r(n,this.value);const s=qe(e),i=this.children.get(s);return i?i.foreachOnPath_(wt(e),Qt(n,s),r):new Et(null)}}foreach(e){this.foreach_(dt(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Qt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.writeTree_=e}static empty(){return new gr(new Et(null))}}function ul(t,e,n){if(ze(e))return new gr(new Et(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=tr(s,e);return i=i.updateChild(o,n),new gr(t.writeTree_.set(s,i))}else{const s=new Et(n),i=t.writeTree_.setTree(e,s);return new gr(i)}}}function R0(t,e,n){let r=t;return sr(n,(s,i)=>{r=ul(r,Qt(e,s),i)}),r}function x0(t,e){if(ze(e))return gr.empty();{const n=t.writeTree_.setTree(e,new Et(null));return new gr(n)}}function tg(t,e){return qi(t,e)!=null}function qi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tr(n.path,e)):null}function O0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vn,(r,s)=>{e.push(new Ze(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ze(r,s.value))}),e}function Bs(t,e){if(ze(e))return t;{const n=qi(t,e);return n!=null?new gr(new Et(n)):new gr(t.writeTree_.subtree(e))}}function ng(t){return t.writeTree_.isEmpty()}function Zo(t,e){return wC(dt(),t.writeTree_,e)}function wC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(re(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=wC(Qt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e){return CC(e,t)}function D4(t,e,n,r,s){re(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ul(t.visibleWrites,e,n)),t.lastWriteId=r}function k4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function M4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);re(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&L4(a,r.path)?s=!1:fr(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return F4(t),!0;if(r.snap)t.visibleWrites=x0(t.visibleWrites,r.path);else{const a=r.children;sr(a,l=>{t.visibleWrites=x0(t.visibleWrites,Qt(r.path,l))})}return!0}else return!1}function L4(t,e){if(t.snap)return fr(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fr(Qt(t.path,n),e))return!0;return!1}function F4(t){t.visibleWrites=_C(t.allWrites,U4,dt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function U4(t){return t.visible}function _C(t,e,n){let r=gr.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)fr(n,o)?(a=tr(n,o),r=ul(r,a,i.snap)):fr(o,n)&&(a=tr(o,n),r=ul(r,dt(),i.snap.getChild(a)));else if(i.children){if(fr(n,o))a=tr(n,o),r=R0(r,a,i.children);else if(fr(o,n))if(a=tr(o,n),ze(a))r=R0(r,dt(),i.children);else{const l=jo(i.children,qe(a));if(l){const c=l.getChild(wt(a));r=ul(r,dt(),c)}}}else throw ia("WriteRecord should have .snap or .children")}}return r}function TC(t,e,n,r,s){if(!r&&!s){const i=qi(t.visibleWrites,e);if(i!=null)return i;{const o=Bs(t.visibleWrites,e);if(ng(o))return n;if(n==null&&!tg(o,dt()))return null;{const a=n||ct.EMPTY_NODE;return Zo(o,a)}}}else{const i=Bs(t.visibleWrites,e);if(!s&&ng(i))return n;if(!s&&n==null&&!tg(i,dt()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(fr(c.path,e)||fr(e,c.path))},a=_C(t.allWrites,o,e),l=n||ct.EMPTY_NODE;return Zo(a,l)}}}function $4(t,e,n){let r=ct.EMPTY_NODE;const s=qi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(vn,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Bs(t.visibleWrites,e);return n.forEachChild(vn,(o,a)=>{const l=Zo(Bs(i,new Tt(o)),a);r=r.updateImmediateChild(o,l)}),O0(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Bs(t.visibleWrites,e);return O0(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function B4(t,e,n,r,s){re(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Qt(e,n);if(tg(t.visibleWrites,i))return null;{const o=Bs(t.visibleWrites,i);return ng(o)?s.getChild(n):Zo(o,s.getChild(n))}}function j4(t,e,n,r){const s=Qt(e,n),i=qi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Bs(t.visibleWrites,s);return Zo(o,r.getNode().getImmediateChild(n))}else return null}function V4(t,e){return qi(t.visibleWrites,e)}function H4(t,e,n,r,s,i,o){let a;const l=Bs(t.visibleWrites,e),c=qi(l,dt());if(c!=null)a=c;else if(n!=null)a=Zo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function W4(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function rg(t,e,n,r){return TC(t.writeTree,t.treePath,e,n,r)}function SC(t,e){return $4(t.writeTree,t.treePath,e)}function P0(t,e,n,r){return B4(t.writeTree,t.treePath,e,n,r)}function hh(t,e){return V4(t.writeTree,Qt(t.treePath,e))}function K4(t,e,n,r,s,i){return H4(t.writeTree,t.treePath,e,n,r,s,i)}function hv(t,e,n){return j4(t.writeTree,t.treePath,e,n)}function IC(t,e){return CC(Qt(t.treePath,e),t.writeTree)}function CC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;re(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),re(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,S0(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,b4(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,w4(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,S0(r,e.snapshotNode,s.oldSnap));else throw ia("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const AC=new z4;class fv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new uv(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),i=K4(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function Y4(t,e){re(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function X4(t,e,n,r,s){const i=new G4;let o,a;if(n.type===Ar.OVERWRITE){const c=n;c.source.fromUser?o=sg(t,e,c.path,c.snap,r,s,i):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ze(c.path),o=fh(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Ar.MERGE){const c=n;c.source.fromUser?o=q4(t,e,c.path,c.children,r,s,i):(re(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ig(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Ar.ACK_USER_WRITE){const c=n;c.revert?o=e$(t,e,c.path,r,s,i):o=J4(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Ar.LISTEN_COMPLETE)o=Z4(t,e,n.path,r,i);else throw ia("Unknown operation type: "+n.type);const l=i.getChanges();return Q4(e,o,l),{viewCache:o,changes:l}}function Q4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=eg(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(E4(eg(e)))}}function RC(t,e,n,r,s,i){const o=e.eventCache;if(hh(r,n)!=null)return e;{let a,l;if(ze(n))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$i(e),u=c instanceof ct?c:ct.EMPTY_NODE,h=SC(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=rg(r,$i(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=qe(n);if(c===".priority"){re(Qs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=P0(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=wt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=P0(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=hv(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return cl(e,a,o.isFullyInitialized()||ze(n),t.filter.filtersNodes())}}function fh(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ze(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=qe(n);if(!l.isCompleteForPath(n)&&Qs(n)>1)return e;const p=wt(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,AC,null)}const h=EC(e,c,l.isFullyInitialized()||ze(n),u.filtersNodes()),f=new fv(s,h,i);return RC(t,h,n,s,f,a)}function sg(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new fv(s,e,i);if(ze(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=cl(e,c,!0,t.filter.filtersNodes());else{const h=qe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=cl(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=wt(n),d=a.getNode().getImmediateChild(h);let p;if(ze(f))p=r;else{const m=u.getCompleteChild(h);m!=null?sC(f)===".priority"&&m.getChild(oC(f)).isEmpty()?p=m:p=m.updateChild(f,r):p=ct.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=cl(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function N0(t,e){return t.eventCache.isCompleteForChild(e)}function q4(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Qt(n,l);N0(e,qe(u))&&(a=sg(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Qt(n,l);N0(e,qe(u))||(a=sg(t,a,u,c,s,i,o))}),a}function D0(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ig(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ze(n)?c=r:c=new Et(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=D0(t,d,f);l=fh(t,l,new Tt(h),p,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=D0(t,p,f);l=fh(t,l,new Tt(h),m,s,i,o,a)}}),l}function J4(t,e,n,r,s,i,o){if(hh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ze(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fh(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ze(n)){let c=new Et(null);return l.getNode().forEachChild(Do,(u,h)=>{c=c.set(new Tt(u),h)}),ig(t,e,n,c,s,i,a,o)}else return e}else{let c=new Et(null);return r.foreach((u,h)=>{const f=Qt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ig(t,e,n,c,s,i,a,o)}}function Z4(t,e,n,r,s){const i=e.serverCache,o=EC(e,i.getNode(),i.isFullyInitialized()||ze(n),i.isFiltered());return RC(t,o,n,r,AC,s)}function e$(t,e,n,r,s,i){let o;if(hh(r,n)!=null)return e;{const a=new fv(r,e,s),l=e.eventCache.getNode();let c;if(ze(n)||qe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=rg(r,$i(e));else{const h=e.serverCache.getNode();re(h instanceof ct,"serverChildren would be complete if leaf node"),u=SC(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=qe(n);let h=hv(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,wt(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ct.EMPTY_NODE,wt(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rg(r,$i(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||hh(r,dt())!=null,cl(e,c,o,t.filter.filtersNodes())}}function t$(t,e){const n=$i(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ze(e)&&!n.getImmediateChild(qe(e)).isEmpty())?n.getChild(e):null}function k0(t,e,n,r){e.type===Ar.MERGE&&e.source.queryId!==null&&(re($i(t.viewCache_),"We should always have a full cache before handling merges"),re(eg(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=X4(t.processor_,s,e,n,r);return Y4(t.processor_,i.viewCache),re(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,n$(t,i.changes,i.viewCache.eventCache.getNode(),null)}function n$(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return x4(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M0;function r$(t){re(!M0,"__referenceConstructor has already been defined"),M0=t}function dv(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return re(i!=null,"SyncTree gave us an op for an invalid query."),k0(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(k0(o,e,n,r));return i}}function pv(t,e){let n=null;for(const r of t.views.values())n=n||t$(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L0;function s$(t){re(!L0,"__referenceConstructor has already been defined"),L0=t}class F0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Et(null),this.pendingWriteTree_=W4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i$(t,e,n,r,s){return D4(t.pendingWriteTree_,e,n,r,s),s?Pf(t,new Ui(gC(),e,n)):[]}function mo(t,e,n=!1){const r=k4(t.pendingWriteTree_,e);if(M4(t.pendingWriteTree_,e)){let i=new Et(null);return r.snap!=null?i=i.set(dt(),!0):sr(r.children,o=>{i=i.set(new Tt(o),!0)}),Pf(t,new uh(r.path,i,n))}else return[]}function Of(t,e,n){return Pf(t,new Ui(mC(),e,n))}function o$(t,e,n){const r=Et.fromObject(n);return Pf(t,new Hl(mC(),e,r))}function a$(t,e,n,r){const s=NC(t,r);if(s!=null){const i=DC(s),o=i.path,a=i.queryId,l=tr(o,e),c=new Ui(vC(a),l,n);return kC(t,o,c)}else return[]}function l$(t,e,n,r){const s=NC(t,r);if(s){const i=DC(s),o=i.path,a=i.queryId,l=tr(o,e),c=Et.fromObject(n),u=new Hl(vC(a),l,c);return kC(t,o,u)}else return[]}function xC(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tr(o,e),c=pv(a,l);if(c)return c});return TC(s,e,i,n,!0)}function Pf(t,e){return OC(e,t.syncPointTree_,null,bC(t.pendingWriteTree_,dt()))}function OC(t,e,n,r){if(ze(t.path))return PC(t,e,n,r);{const s=e.get(dt());n==null&&s!=null&&(n=pv(s,dt()));let i=[];const o=qe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=IC(r,o);i=i.concat(OC(a,l,c,u))}return s&&(i=i.concat(dv(s,t,r,n))),i}}function PC(t,e,n,r){const s=e.get(dt());n==null&&s!=null&&(n=pv(s,dt()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=IC(r,o),u=t.operationForChild(o);u&&(i=i.concat(PC(u,a,l,c)))}),s&&(i=i.concat(dv(s,t,r,n))),i}function NC(t,e){return t.tagToQueryMap.get(e)}function DC(t){const e=t.indexOf("$");return re(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Tt(t.substr(0,e))}}function kC(t,e,n){const r=t.syncPointTree_.get(e);re(r,"Missing sync point for query tag that we're tracking");const s=bC(t.pendingWriteTree_,e);return dv(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gv(n)}node(){return this.node_}}class mv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qt(this.path_,e);return new mv(this.syncTree_,n)}node(){return xC(this.syncTree_,this.path_)}}const c$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},U0=function(t,e,n){if(!t||typeof t!="object")return t;if(re(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return u$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return h$(t[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},u$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:re(!1,"Unexpected server value: "+t)}},h$=function(t,e,n){t.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&re(!1,"Unexpected increment value: "+r);const s=e.node();if(re(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},f$=function(t,e,n,r){return vv(e,new mv(n,t),r)},d$=function(t,e,n){return vv(t,new gv(e),n)};function vv(t,e,n){const r=t.getPriority().val(),s=U0(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=U0(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new zt(a,fn(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new zt(s))),o.forEachChild(vn,(a,l)=>{const c=vv(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ev(t,e){let n=e instanceof Tt?e:new Tt(e),r=t,s=qe(n);for(;s!==null;){const i=jo(r.node.children,s)||{children:{},childCount:0};r=new yv(s,r,i),n=wt(n),s=qe(n)}return r}function pa(t){return t.node.value}function MC(t,e){t.node.value=e,og(t)}function LC(t){return t.node.childCount>0}function p$(t){return pa(t)===void 0&&!LC(t)}function Nf(t,e){sr(t.node.children,(n,r)=>{e(new yv(n,t,r))})}function FC(t,e,n,r){n&&!r&&e(t),Nf(t,s=>{FC(s,e,!0,r)}),n&&r&&e(t)}function g$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ec(t){return new Tt(t.parent===null?t.name:Ec(t.parent)+"/"+t.name)}function og(t){t.parent!==null&&m$(t.parent,t.name,t)}function m$(t,e,n){const r=p$(n),s=gs(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,og(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,og(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v$=/[\[\].#$\/\u0000-\u001F\u007F]/,y$=/[\[\].#$\u0000-\u001F\u007F]/,Ad=10*1024*1024,UC=function(t){return typeof t=="string"&&t.length!==0&&!v$.test(t)},E$=function(t){return typeof t=="string"&&t.length!==0&&!y$.test(t)},w$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),E$(t)},$C=function(t,e,n){const r=n instanceof Tt?new ZU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+li(r));if(typeof e=="function")throw new Error(t+"contains a function "+li(r)+" with contents = "+e.toString());if(UI(e))throw new Error(t+"contains "+e.toString()+" "+li(r));if(typeof e=="string"&&e.length>Ad/3&&Gh(e)>Ad)throw new Error(t+"contains a string greater than "+Ad+" utf8 bytes "+li(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(sr(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!UC(o)))throw new Error(t+" contains an invalid key ("+o+") "+li(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e4(r,o),$C(t,a,r),t4(r)}),s&&i)throw new Error(t+' contains ".value" child '+li(r)+" in addition to actual children.")}},b$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!UC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!w$(n))throw new Error(sP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function T$(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!aC(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ji(t,e,n){T$(t,n),S$(t,r=>fr(r,e)||fr(e,r))}function S$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(I$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function I$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ti&&hn("event: "+n.toString()),vc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$="repo_interrupt",A$=25;class R${constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ch(),this.transactionQueueTree_=new yv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x$(t,e,n){if(t.stats_=iv(t.repoInfo_),t.forceRestClient_||TU())t.server_=new lh(t.repoInfo_,(r,s,i,o)=>{$0(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>B0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rn(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ss(t.repoInfo_,e,(r,s,i,o)=>{$0(t,r,s,i,o)},r=>{B0(t,r)},r=>{P$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xU(t.repoInfo_,()=>new R4(t.stats_,t.server_)),t.infoData_=new T4,t.infoSyncTree_=new F0({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Of(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wv(t,"connected",!1),t.serverSyncTree_=new F0({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ji(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function O$(t){const n=t.infoData_.getNode(new Tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function BC(t){return c$({timestamp:O$(t)})}function $0(t,e,n,r,s){t.dataUpdateCount++;const i=new Tt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Nu(n,c=>fn(c));o=l$(t.serverSyncTree_,i,l,s)}else{const l=fn(n);o=a$(t.serverSyncTree_,i,l,s)}else if(r){const l=Nu(n,c=>fn(c));o=o$(t.serverSyncTree_,i,l)}else{const l=fn(n);o=Of(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=_v(t,i)),Ji(t.eventQueue_,a,o)}function B0(t,e){wv(t,"connected",e),e===!1&&D$(t)}function P$(t,e){sr(e,(n,r)=>{wv(t,n,r)})}function wv(t,e,n){const r=new Tt("/.info/"+e),s=fn(n);t.infoData_.updateSnapshot(r,s);const i=Of(t.infoSyncTree_,r,s);Ji(t.eventQueue_,r,i)}function N$(t){return t.nextWriteId_++}function D$(t){jC(t,"onDisconnectEvents");const e=BC(t),n=ch();Zp(t.onDisconnect_,dt(),(s,i)=>{const o=f$(s,i,t.serverSyncTree_,e);pC(n,s,o)});let r=[];Zp(n,dt(),(s,i)=>{r=r.concat(Of(t.serverSyncTree_,s,i));const o=F$(t,s);_v(t,o)}),t.onDisconnect_=ch(),Ji(t.eventQueue_,dt(),r)}function k$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(C$)}function jC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),hn(n,...e)}function VC(t,e,n){return xC(t.serverSyncTree_,e,n)||ct.EMPTY_NODE}function bv(t,e=t.transactionQueueTree_){if(e||Df(t,e),pa(e)){const n=WC(t,e);re(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&M$(t,Ec(e),n)}else LC(e)&&Nf(e,n=>{bv(t,n)})}function M$(t,e,n){const r=n.map(c=>c.currentWriteId),s=VC(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];re(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tr(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jC(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(mo(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Df(t,Ev(t.transactionQueueTree_,e)),bv(t,t.transactionQueueTree_),Ji(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)vc(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Gn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}_v(t,e)}},o)}function _v(t,e){const n=HC(t,e),r=Ec(n),s=WC(t,n);return L$(t,s,r),r}function L$(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tr(n,l.path);let u=!1,h;if(re(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(mo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=A$)u=!0,h="maxretry",s=s.concat(mo(t.serverSyncTree_,l.currentWriteId,!0));else{const f=VC(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){$C("transaction failed: Data returned ",d,l.path);let p=fn(d);typeof d=="object"&&d!=null&&gs(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,v=BC(t),g=d$(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=N$(t),o.splice(o.indexOf(y),1),s=s.concat(i$(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),s=s.concat(mo(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(mo(t.serverSyncTree_,l.currentWriteId,!0))}Ji(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Df(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)vc(r[a]);bv(t,t.transactionQueueTree_)}function HC(t,e){let n,r=t.transactionQueueTree_;for(n=qe(e);n!==null&&pa(r)===void 0;)r=Ev(r,n),e=wt(e),n=qe(e);return r}function WC(t,e){const n=[];return KC(t,e,n),n.sort((r,s)=>r.order-s.order),n}function KC(t,e,n){const r=pa(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Nf(e,s=>{KC(t,s,n)})}function Df(t,e){const n=pa(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,MC(e,n.length>0?n:void 0)}Nf(e,r=>{Df(t,r)})}function F$(t,e){const n=Ec(HC(t,e)),r=Ev(t.transactionQueueTree_,e);return g$(r,s=>{Rd(t,s)}),Rd(t,r),FC(r,s=>{Rd(t,s)}),n}function Rd(t,e){const n=pa(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(re(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(re(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(mo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?MC(e,void 0):n.length=i+1,Ji(t.eventQueue_,Ec(e),s);for(let o=0;o<r.length;o++)vc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function $$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Gn(`Invalid query segment '${n}' in query '${t}'`)}return e}const j0=function(t,e){const n=B$(t),r=n.namespace;n.domain==="firebase.com"&&Li(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Li("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gU();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new CU(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Tt(n.pathString)}},B$=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=U$(t.substring(u,h)));const f=$$(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ze(this._path)?null:sC(this._path)}get ref(){return new ga(this._repo,this._path)}get _queryIdentifier(){const e=C0(this._queryParams),n=rv(e);return n==="{}"?"default":n}get _queryObject(){return C0(this._queryParams)}isEqual(e){if(e=jt(e),!(e instanceof Tv))return!1;const n=this._repo===e._repo,r=aC(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+JU(this._path)}}class ga extends Tv{constructor(e,n){super(e,n,new cv,!1)}get parent(){const e=oC(this._path);return e===null?null:new ga(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}r$(ga);s$(ga);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j$="FIREBASE_DATABASE_EMULATOR_HOST",ag={};let V$=!1;function H$(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Li("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=j0(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[j$]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=j0(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Qp(Qp.OWNER):new IU(t.name,t.options,e);b$("Invalid Firebase Database URL",o),ze(o.path)||Li("Database URL must point to the root of a Firebase Database (not including a child path).");const h=K$(a,t,u,new SU(t.name,n));return new G$(h,t)}function W$(t,e){const n=ag[e];(!n||n[t.key]!==t)&&Li(`Database ${e}(${t.repoInfo_}) has already been deleted.`),k$(t),delete n[t.key]}function K$(t,e,n,r){let s=ag[e.name];s||(s={},ag[e.name]=s);let i=s[t.toURLString()];return i&&Li("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new R$(t,V$,n,r),s[t.toURLString()]=i,i}class G${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ga(this._repo,dt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Li("Cannot call "+e+" on a deleted database.")}}/**
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
 */function z$(t){uU(qs),kr(new yr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return H$(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Kn(l0,c0,t),Kn(l0,c0,"esm2017")}ss.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ss.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};z$();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="firebasestorage.googleapis.com",Y$="storageBucket",X$=2*60*1e3,Q$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Vr{constructor(e,n,r=0){super(xd(e),`Firebase Storage: ${n} (${xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ur;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ur||(Ur={}));function xd(t){return"storage/"+t}function q$(){const t="An unknown error occurred, please check the error payload for server response.";return new Hr(Ur.UNKNOWN,t)}function J$(){return new Hr(Ur.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Z$(){return new Hr(Ur.CANCELED,"User canceled the upload/download.")}function eB(t){return new Hr(Ur.INVALID_URL,"Invalid URL '"+t+"'.")}function tB(t){return new Hr(Ur.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function V0(t){return new Hr(Ur.INVALID_ARGUMENT,t)}function zC(){return new Hr(Ur.APP_DELETED,"The Firebase app was deleted.")}function nB(t){return new Hr(Ur.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dr.makeFromUrl(e,n)}catch{return new dr(e,"")}if(r.path==="")return r;throw tB(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},m=n===GC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${s}/${y}`,"i"),E=[{regex:a,indices:l,postModify:i},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<E.length;b++){const I=E[b],C=I.regex.exec(e);if(C){const A=C[I.indices.bucket];let _=C[I.indices.path];_||(_=""),r=new dr(A,_),I.postModify(r);break}}if(r==null)throw eB(e);return r}}class rB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sB(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(d,l())},y)}function f(){i&&clearTimeout(i)}function d(y,...v){if(c){f();return}if(y){f(),u.call(null,y,...v);return}if(l()||o){f(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function m(y){p||(p=!0,f(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function iB(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oB(t){return t!==void 0}function H0(t,e,n,r){if(r<e)throw V0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw V0(`Invalid value for '${t}'. Expected ${n} or less.`)}function aB(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dh||(dh={}));/**
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
 */function lB(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cB{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Qc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===dh.NO_ERROR,l=i.getStatus();if(!a||lB(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===dh.ABORT;r(!1,new Qc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qc(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oB(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=q$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?zC():Z$();o(l)}else{const l=J$();o(l)}};this.canceled_?n(!1,new Qc(!1,null,!0)):this.backoffId_=sB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pB(t,e,n,r,s,i,o=!0){const a=aB(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fB(c,e),uB(c,n),hB(c,i),dB(c,r),new cB(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mB(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ph{constructor(e,n){this._service=e,n instanceof dr?this._location=n:this._location=dr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ph(e,n)}get root(){const e=new dr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mB(this._location.path)}get storage(){return this._service}get parent(){const e=gB(this._location.path);if(e===null)return null;const n=new dr(this._location.bucket,e);return new ph(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nB(e)}}function W0(t,e){const n=e==null?void 0:e[Y$];return n==null?null:dr.makeFromBucketSpec(n,t)}class vB{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=GC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=X$,this._maxUploadRetryTime=Q$,this._requests=new Set,s!=null?this._bucket=dr.makeFromBucketSpec(s,this._host):this._bucket=W0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dr.makeFromBucketSpec(this._url,e):this._bucket=W0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ph(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new rB(zC());{const o=pB(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const K0="@firebase/storage",G0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB="storage";function EB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vB(n,r,s,e,qs)}function wB(){kr(new yr(yB,EB,"PUBLIC").setMultipleInstances(!0)),Kn(K0,G0,""),Kn(K0,G0,"esm2017")}wB();function YC(t){return cL(kI(t))}function bB(t){return(e,n)=>{const r=oU(e,n).run(()=>lt(t));aU.set(e,r),cU(r,e)}}function _B(t,{firebaseApp:e,modules:n=[]}){t.provide(DI,e);for(const r of n)t.use(r.bind(null,e))}const uo=PI(b_);uo.onAuthStateChanged(t=>{rr().fetchUser(t)});const ri=YC(),rr=C_("auth",{state:()=>({currentUser:null,publicUser:null,firebaseUser:uo.currentUser}),getters:{isOwner:t=>{var e;return((e=t.firebaseUser)==null?void 0:e.uid)==="wEaq28Vfx8aygJ6TUi0hDrNut1F2"}},actions:{async fetchUser(t){this.firebaseUser=t,t&&(this.currentUser=await fi(Cn(ri,"users",t.uid)),this.publicUser=await fi(Cn(ri,"usersPublic",t.uid)))},async login(t,e){try{const{user:n}=await E2(uo,t,e);await this.fetchUser(n),Fe.success("Successfully logged in","dashboard")}catch(n){Fe.firebaseError(n.code)}},async register(t,e,n){try{const{user:r}=await y2(uo,t,e);await UE(Cn(ri,"users",r.uid),{firstName:n}),await this.fetchUser(r),Fe.success("Successfully created your account","dashboard")}catch(r){Fe.firebaseError(r.code)}},async updateMail(t,e){try{if(this.firebaseUser&&this.firebaseUser.email){const n=Xs.credential(this.firebaseUser.email,e);await zE(this.firebaseUser,n),await w2(this.firebaseUser,t),Fe.success("Successfully changed your e-mail")}}catch(n){Fe.firebaseError(n.code)}},async updatePassword(t,e){try{if(this.firebaseUser&&this.firebaseUser.email){const n=Xs.credential(this.firebaseUser.email,e);await zE(this.firebaseUser,n),await b2(this.firebaseUser,t),Fe.success("Successfully changed your password")}}catch(n){Fe.firebaseError(n.code)}},async resetPassword(t){try{await v2(uo,t),Fe.success("Successfully requested password reset")}catch(e){Fe.firebaseError(e.code)}},async updateUser(t){try{this.currentUser&&this.firebaseUser&&(Ju(this.currentUser,t)?Fe.warning("Nothing changed in your details"):(await ol(Cn(ri,"users",this.firebaseUser.uid),t),await this.fetchUser(this.firebaseUser),Fe.success("Successfully updated your profile")))}catch(e){Fe.firebaseError(e.code)}},async updatePublicUser(t){try{this.publicUser?Ju(this.publicUser,t)?Fe.warning("Nothing changed in your public profile"):(await ol(Cn(ri,"usersPublic",this.publicUser.id),{displayName:t.displayName}),await this.fetchUser(this.firebaseUser),Fe.success("Successfully updated your public profile")):this.firebaseUser?(await UE(Cn(ri,"usersPublic",this.firebaseUser.uid),{displayName:t.displayName}),await this.fetchUser(this.firebaseUser),Fe.success("Successfully updated your public profile")):Fe.firebaseError()}catch(e){Fe.firebaseError(e.code)}},async logout(){try{await T2(uo),this.currentUser=null,this.publicUser=null,Fe.success("Successfully logged out","home")}catch(t){Fe.firebaseError(t.code)}},async deleteAccount(){try{this.currentUser&&this.firebaseUser&&(await Vp(Cn(ri,"users",this.firebaseUser.uid)),await S2(this.firebaseUser),this.currentUser=null,this.publicUser=null,Fe.success("Successfully deleted your account","home"))}catch(t){Fe.firebaseError(t.code)}}},persist:{enabled:!0}}),TB=""+new URL("bundle.css",import.meta.url).href,SB={online:!0},kf={name:"Sander Derks",role:"Full-Stack Developer",service:"Software Development",location:{country:"The Netherlands",city:"Nijmegen"},avatarUrl:TB,description:["Welcome to portfolio and blog website!"],websites:[{name:"GitHub",url:"https://github.com/sanderderks",logo:"github.png"},{name:"LinkedIn",url:"https://www.linkedin.com/in/sander-derks/",logo:"linkedin.png"}],footer:"Sander Derks. All rights reserved.",privacyStatement:["Your login info and data are managed by Google Firebase.","All data you share (except for your password) is visible to the site admin.","Your data can be easily deleted on your profile dashboard."]},IB=[{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0}],CB=[{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0}],du=[{value:"bg-gray-900",label:"Default"},{value:"bg-red-700",label:"Important"},{value:"bg-yellow-900",label:"Amber"},{value:"bg-blue-600",label:"Blue"},{value:"bg-sky-500",label:"Sky"},{value:"bg-green-500",label:"Success"},{value:"bg-purple-600",label:"Purple"},{value:"bg-pink-600",label:"Pink"},{value:"bg-orange-500",label:"Orange"},{value:"bg-cyan-500",label:"Aqua"},{value:"bg-emerald-500",label:"Emerald"}],Jn=YC(),Qn={projects:Sa(Jn,"projects"),menuItems:Sa(Jn,"menuItems"),blogPosts:Sa(Jn,"blogPosts"),blogReactions:Sa(Jn,"blogReactions"),usersPublic:Sa(Jn,"usersPublic")},ms=C_("main",{state:()=>({profile:kf,menuItems:CB,projects:IB,blogPosts:[]}),getters:{filteredProjects:t=>t.projects.filter(e=>!e.loading),filteredMenuItems:t=>t.menuItems.filter(e=>!e.loading)},actions:{async fetchAll(t){try{SB.online&&(!this.filteredProjects.length||!this.filteredMenuItems.length||t)&&await Promise.all([this.fetchProjects(),this.fetchMenuItems(),this.fetchBlogPosts()])}catch(e){Fe.firebaseError(e.code)}},async fetchProjects(){try{const t=await Promise.all((await dd(Qn.projects)).map(async e=>({...e,technologies:await Promise.all(e.technologies.map(async n=>await fi(n)))})));this.projects=t.length?pd(t):this.projects}catch(t){Fe.firebaseError(t.code)}},moveProject(t,e){const n=this.projects.splice(t,1)[0];this.projects.splice(e,0,n)},async fetchMenuItems(){try{const t=await dd(Qn.menuItems);this.menuItems=t.length?pd(t):this.menuItems}catch(t){Fe.firebaseError(t.code)}},async fetchBlogPosts(){try{const t=await Promise.all((await dd(Qn.blogPosts)).map(async e=>{var n;return{id:e.id,title:e.title,description:e.description,color:e.color,date:e.date.toDate(),dateUpdated:(n=e.dateUpdated)==null?void 0:n.toDate(),reactions:await Promise.all((await Promise.all(e.reactions.map(async r=>await fi(r)))).map(async r=>({id:r.id,message:r.message,user:await fi(r.user),date:r.date.toDate()})))}}));this.blogPosts=t.length?pd(t):this.blogPosts}catch(t){Fe.firebaseError(t.code)}},async createBlogPost(t){try{return await FE(Qn.blogPosts,{...t,date:Ut.now()}),this.fetchBlogPosts(),Fe.success("Successfully created Post"),!0}catch(e){return Fe.firebaseError(e.code),!1}},async updateBlogPost(t,e){try{return await ol(Cn(Jn,Qn.blogPosts.id,t),{title:e.title,description:e.description,color:e.color,dateUpdated:Ut.now()}),this.fetchBlogPosts(),Fe.success("Successfully updated Post"),!0}catch(n){return Fe.firebaseError(n.code),!1}},async deleteBlogPost(t){try{return await Vp(Cn(Jn,Qn.blogPosts.id,t)),this.blogPosts=this.blogPosts.filter(e=>e.id!==t),Fe.success("Successfully deleted Post"),!0}catch(e){return Fe.firebaseError(e.code),!1}},async createBlogReaction(t,e){try{const n=await FE(Qn.blogReactions,{user:Cn(Jn,Qn.usersPublic.id,e.userId),message:e.message,date:Ut.now()}),r=await fi(Cn(Jn,Qn.blogPosts.id,t));return r?(await ol(Cn(Jn,Qn.blogPosts.id,r.id),{reactions:[...r.reactions,n]}),this.fetchBlogPosts(),Fe.success("Successfully created Reaction"),!0):!1}catch(n){return Fe.firebaseError(n.code),!1}},async deleteBlogReaction(t,e){try{const n=Cn(Jn,Qn.blogPosts.id,e),r=await fi(n);return r?(await ol(n,{reactions:r.reactions.filter(s=>s.id!==t)}),await Vp(Cn(Jn,Qn.blogReactions.id,t)),this.fetchBlogPosts(),Fe.success("Successfully deleted Reaction"),!0):!1}catch(n){return Fe.firebaseError(n.code),!1}}},persist:{enabled:!0}}),AB={class:"flex flex-col"},RB={class:"flex justify-between"},xB={class:"xl:flex"},OB=["href"],PB={class:"text-2xl group-hover/bubble:underline font-bold mb-2"},NB={key:2,class:"text-sm text-gray-300 mb-2 xl:ms-2 xl:mt-1"},DB={class:"flex justify-between"},kB={key:0,class:"text-gray-400 mb-2"},Zr=$e({__name:"Bubble",props:{title:null,subTitle:null,url:null,description:null,loading:{type:Boolean},titleProps:null},setup(t){return(e,n)=>(K(),Ie("div",{class:as("group/bubble color-primary rounded-3xl p-10 "+(t.url?"hover:bg-opacity-30":"")+(t.loading?"animate-pulse":""))},[ee("div",AB,[ee("div",RB,[ee("div",xB,[t.url?(K(),Ie("a",{key:0,href:t.url},[ee("h2",PB,at(t.title),1)],8,OB)):t.title?(K(),Ie("h2",Sl({key:1,class:"text-2xl font-bold mb-2"},t.titleProps),at(t.title),17)):bt("",!0),t.subTitle?(K(),Ie("p",NB,at(t.subTitle),1)):bt("",!0)])]),ee("div",DB,[t.description?(K(),Ie("p",kB,at(t.description),1)):bt("",!0),ns(e.$slots,"right")])]),ns(e.$slots,"default")],2))}}),MB={key:0,class:"text-red-600"},XC=$e({__name:"ErrorMessage",props:{name:null,state:null},setup(t){const e=t,n=vt(()=>e.state[e.name].error);return(r,s)=>Y(n)&&!t.state[t.name].length?(K(),Ie("p",MB,at(Y(n)),1)):bt("",!0)}});var Sv=(t=>(t.Required="Required",t.Email="Email",t.MinLength="MinLength",t.MaxLength="MaxLength",t.EqualTo="EqualTo",t))(Sv||{});const Kt={Required:{type:"Required",test:({value:t})=>!!t.length,error:()=>"Required"},Email:{type:"Email",test:({value:t})=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),error:()=>"Must be an e-mail address"},MinLength:{type:"MinLength",test:({value:t,min:e})=>!t.length||t.length>=(e||3),error:({min:t})=>`Must be at least ${t} characters`},MaxLength:{type:"MaxLength",test:({value:t,max:e})=>!t.length||t.length<=(e||50),error:({max:t})=>`May not be more than ${t} characters`},EqualTo:{type:"EqualTo",test:({value:t,compare:e})=>!t.length||!e||t===e.value,error:()=>"Fields don't match",compareError:({compare:t})=>t?"Must be equal to "+(t==null?void 0:t.name):""}},LB={class:"m-4"},FB=["for"],is=$e({__name:"TextField",props:{name:null,label:null,placeholder:null,value:null,state:null,rules:null,inputProps:null,labelProps:null,min:null,max:null,compare:null},emits:["update","error"],setup(t,{expose:e,emit:n}){const r=t,s=vt(()=>{var c,u;const l=((u=(c=r.state)==null?void 0:c[r.name])==null?void 0:u.value)||r.value||"";return l.endsWith("  ")?l.trim():l}),i=vt(()=>r.label?r.label+((r.rules??[]).some(l=>l.type===Sv.Required)?" *":""):void 0),o=l=>{const c=l.target.value;n("update",c),a(c)},a=async l=>{const c=l||s.value,u=r.rules||[];r.min&&u.push(Kt.MinLength),r.max&&u.push(Kt.MaxLength),r.compare&&u.push(Kt.EqualTo);const h={value:c,min:r.min,max:r.max,compare:r.compare},f=u.filter(d=>!d.test(h)).map(d=>{var p;return((p=d.compareError)==null?void 0:p.call(d,h))||d.error(h)})||[];n("error",f[0]||"")};return e({test:a}),(l,c)=>{var u,h;return K(),Ie("div",LB,[t.label?(K(),Ie("label",Sl({key:0,class:"block text-sm font-bold mb-2",for:t.name},t.labelProps),at(Y(i)),17,FB)):bt("",!0),(K(),Oe(qw(((u=t.inputProps)==null?void 0:u.type)==="textarea"?"textarea":"input"),Sl({ref:"input",value:Y(s),class:"input-field",id:t.name,type:((h=t.inputProps)==null?void 0:h.type)||"text",placeholder:t.placeholder,onInput:o},t.inputProps),null,16,["value","id","type","placeholder"])),t.state?(K(),Oe(XC,{key:1,name:t.name,state:t.state},null,8,["name","state"])):bt("",!0)])}}}),UB={class:"flex justify-between"},$B={class:"text-lg p-1"},BB={key:0,class:"flex flex-col justify-end mt-5 gap-2"},jB={class:"grid justify-items-center"},VB={class:"flex justify-end"},HB=["onClick"],WB=$e({__name:"BlogPost",props:{post:null},emits:["editClicked","deleteClicked"],setup(t){const{post:e}=t,{publicUser:n,isOwner:r}=Er(rr()),{createBlogReaction:s,deleteBlogReaction:i}=ms(),o=lt(),a=Yn({reaction:{value:"",error:""}}),l=async()=>{await o.value.test(),!a.reaction.error&&n.value&&await s(e.id,{userId:n.value.id,message:a.reaction.value})&&(a.reaction.value="")};return(c,u)=>(K(),Oe(Zr,{class:as(["h-fit !bg-opacity-30 border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",t.post.color||"bg-yellow-900"]),title:t.post.title,subTitle:Y(gd)(new Date(t.post.date))+(t.post.dateUpdated?" - updated "+Y(gd)(new Date(t.post.dateUpdated)):""),loading:t.post.loading},{default:it(()=>[le(Zr,{class:as(["p-5 mt-5 bg-opacity-25",t.post.color||"bg-yellow-900"])},{default:it(()=>[ee("div",UB,[ee("div",null,[(K(!0),Ie(Je,null,mr(t.post.description.replace(`

`,`
 
`).split(`
`),h=>(K(),Ie("p",$B,at(h),1))),256))]),Y(r)?(K(),Ie("div",BB,[ee("button",{class:"button-primary col-span-full md:col-span-2 md:col-start-3",type:"button",onClick:u[0]||(u[0]=h=>c.$emit("editClicked"))}," Edit "),ee("button",{class:"button-outlined-danger col-span-full md:col-span-2 md:col-start-3",type:"button",onClick:u[1]||(u[1]=h=>c.$emit("deleteClicked"))}," Delete ")])):bt("",!0)])]),_:1},8,["class"]),ee("div",jB,[(K(!0),Ie(Je,null,mr(t.post.reactions,h=>(K(),Oe(Zr,{class:"p-5 mt-5 w-full md:w-3/4",titleProps:{class:"!text-base"},title:h.user.displayName||"Unknown user",subTitle:Y(gd)(new Date(h.date)),description:h.message},Jw({_:2},[Y(n)&&h.user.id===Y(n).id?{name:"right",fn:it(()=>[ee("div",VB,[ee("button",{class:"button-outlined-danger h-fit",type:"button",onClick:f=>Y(i)(h.id,t.post.id)}," Delete ",8,HB)])]),key:"0"}:void 0]),1032,["title","subTitle","description"]))),256)),Y(n)&&t.post.reactions.filter(h=>h.user.id===Y(n).id).length<3?(K(),Oe(Zr,{key:0,class:"p-5 mt-5 flex justify-center bg-gray-700 bg-opacity-50 w-full md:w-3/4"},{default:it(()=>[le(is,{class:"w-5/6",inputProps:{class:["rounded-xl border-none !bg-opacity-20 !placeholder-gray-300 hover:!bg-gray-700 focus:!bg-gray-600 focus:!text-white focus:!placeholder-gray-200",t.post.color]},ref_key:"reaction",ref:o,name:"reaction",placeholder:"Reply",state:a,rules:[Y(Kt).Required],onKeyup:u[2]||(u[2]=Ub(h=>l(),["enter"])),onUpdate:u[3]||(u[3]=h=>a.reaction.value=h),onError:u[4]||(u[4]=h=>a.reaction.error=h)},null,8,["inputProps","state","rules"])]),_:1})):bt("",!0)])]),_:1},8,["class","title","subTitle","loading"]))}}),KB={class:"fixed z-20 w-screen md:w-1/2 h-1/2 top-1/4 md:start-1/4 -start-2"},GB={class:"relative bg-gray-800 bg-opacity-100 border border-gray-500 rounded-2xl p-5"},zB={class:"p-8"},YB={class:"title-secondary"},XB={class:"mt-2 text-lg text-gray-500"},QB={class:"grid grid-cols-4 mt-10 gap-3"},qB=$e({__name:"Dialog",props:{isOpen:{type:Boolean},title:null,description:null,confirmText:null},emits:["confirm","cancel"],setup(t){return(e,n)=>(K(),Ie("div",null,[Tl(ee("div",{class:"fixed z-10 w-screen h-screen bg-gray-900 opacity-50 top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:n[0]||(n[0]=r=>e.$emit("cancel"))},null,512),[[Uo,t.isOpen]]),Tl(ee("div",KB,[ee("div",GB,[ee("div",zB,[ee("h3",YB,at(t.title),1),ee("p",XB,at(t.description),1),ns(e.$slots,"default")]),ee("div",QB,[ee("button",{class:"button-outlined-primary col-span-full md:col-span-2",type:"button",onClick:n[1]||(n[1]=r=>e.$emit("cancel"))}," Cancel "),ee("button",{class:"button-primary col-span-full md:col-span-2 md:col-start-3",type:"submit",onClick:n[2]||(n[2]=r=>e.$emit("confirm"))},at(t.confirmText),1)])])],512),[[Uo,t.isOpen]])]))}}),JB={class:"m-4"},ZB=["for"],ej=["name","value"],tj=["value"],nj=$e({__name:"SelectField",props:{name:null,label:null,state:null,rules:null,values:null},emits:["update","error"],setup(t,{expose:e,emit:n}){const{label:r,state:s,values:i,rules:o}=t,a=vt(()=>s&&du.some(({value:u})=>u===s.color.value)?s.color.value:i[0].value||""),l=vt(()=>r+((o??[]).some(u=>u.type===Sv.Required)?" *":""));return e({test:async()=>{const u=o||[],h={value:`${a.value}`},f=u.filter(d=>!d.test(h)).map(d=>d.error(h))||[];n("error",f[0]||"")}}),(u,h)=>(K(),Ie("div",JB,[ee("label",{class:"block text-sm font-bold mb-2",for:t.name},at(Y(l)),9,ZB),ee("select",{name:t.name,value:Y(a),class:"w-full px-4 py-2 select-field block",onChange:h[0]||(h[0]=f=>u.$emit("update",f.target.value))},[(K(!0),Ie(Je,null,mr(t.values,({value:f,label:d},p)=>(K(),Ie("option",{value:f||p},at(d),9,tj))),256))],40,ej),t.state?(K(),Oe(XC,{key:0,name:t.name,state:t.state},null,8,["name","state"])):bt("",!0)]))}}),rj={class:"pt-6 mb-4 xl:px-36"},sj=$e({__name:"BlogPostDialog",props:{isOpen:{type:Boolean},selected:null},emits:["close"],setup(t,{emit:e}){const n=t,{createBlogPost:r,updateBlogPost:s}=ms(),i=lt(),o=lt(),a=lt(),l=Yn({title:{value:"",error:""},description:{value:"",error:""},color:{value:"",error:""}}),c=()=>{Object.keys(l).forEach(d=>{l[d].value="",l[d].error=""})},u=vt(()=>{var d;return{title:l.title.value,description:l.description.value,color:l.color.value,date:((d=n.selected)==null?void 0:d.date)||new Date,reactions:[]}}),h=async()=>{await Promise.all([i.value.test(),o.value.test(),a.value.test()]),!l.title.error&&!l.description.error&&!l.color.error&&(n.selected?await s(n.selected.id,u.value):await r(u.value))&&e("close")},f=()=>{c(),e("close")};return ts(()=>n.selected,d=>{d?(l.title.value=d.title,l.description.value=d.description,l.color.value=d.color&&du.some(p=>p.value===d.color)?d.color:du[0].value||"bg-yellow-900"):c()}),(d,p)=>(K(),Oe(qB,{isOpen:t.isOpen,title:t.selected?"Update Post":"Create Post",description:t.selected?"Update this post":"Create a new post","confirm-text":t.selected?"Update":"Create",onConfirm:h,onCancel:f},{default:it(()=>[ee("form",rj,[le(is,{ref_key:"title",ref:i,name:"title",label:"Title",placeholder:"Amazing Post",state:l,rules:[Y(Kt).Required],min:3,max:50,onUpdate:p[0]||(p[0]=m=>l.title.value=m),onError:p[1]||(p[1]=m=>l.title.error=m)},null,8,["state","rules"]),le(is,{ref_key:"description",ref:o,name:"description",label:"Description",placeholder:"Something about my post...",state:l,rules:[Y(Kt).Required],max:300,"input-props":{type:"textarea",rows:l.description.value.split(`
`).length<=5?l.description.value.split(`
`).length:5},onUpdate:p[2]||(p[2]=m=>l.description.value=m),onError:p[3]||(p[3]=m=>l.description.error=m)},null,8,["state","rules","input-props"]),le(nj,{ref_key:"color",ref:a,name:"color",label:"Style",state:l,rules:[Y(Kt).Required],values:Y(du),onUpdate:p[4]||(p[4]=m=>l.color.value=m.toString()),onError:p[5]||(p[5]=m=>l.color.error=m)},null,8,["state","rules","values"])])]),_:1},8,["isOpen","title","description","confirm-text"]))}}),ij={class:"grid gap-4 my-5 xl:mx-20 xl:gap-20"},oj={key:0,class:"flex justify-center mt-10"},aj=$e({__name:"BlogPosts",setup(t){const e=ms(),{deleteBlogPost:n}=e,{blogPosts:r}=Er(e),{isOwner:s}=Er(rr()),i=lt(!1),o=lt(null),a=()=>{o.value=null,i.value=!0},l=u=>{o.value=u,i.value=!0},c=()=>{i.value=!1,o.value=null};return(u,h)=>(K(),Ie(Je,null,[ee("div",ij,[(K(!0),Ie(Je,null,mr(Y(r),f=>(K(),Oe(WB,{post:f,onEditClicked:d=>l(f),onDeleteClicked:d=>Y(n)(f.id)},null,8,["post","onEditClicked","onDeleteClicked"]))),256))]),Y(s)?(K(),Ie("div",oj,[ee("button",{class:"button-outlined-primary w-full md:w-1/2 xl:w-1/4",type:"button",onClick:h[0]||(h[0]=f=>a())}," New Post ")])):bt("",!0),le(sj,{isOpen:i.value,selected:o.value,onClose:h[1]||(h[1]=f=>c())},null,8,["isOpen","selected"])],64))}}),lj={class:"bg-black text-white shadow-md py-4"},cj={class:"container mx-auto text-center"},uj=$e({__name:"Footer",setup(t){return(e,n)=>(K(),Ie("footer",lj,[ee("div",cj,[ee("p",null,"© "+at(new Date().getFullYear()+" "+Y(kf).footer),1)])]))}});var hj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fj(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function QC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}const ma=QC(Ex),{createElementVNode:dj,openBlock:pj,createElementBlock:gj}=ma;var mj=function(e,n){return pj(),gj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[dj("path",{"fill-rule":"evenodd",d:"M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z","clip-rule":"evenodd"})])};const{createElementVNode:z0,openBlock:vj,createElementBlock:yj}=ma;var Ej=function(e,n){return vj(),yj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[z0("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),z0("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})])};const{createElementVNode:wj,openBlock:bj,createElementBlock:_j}=ma;var Tj=function(e,n){return bj(),_j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[wj("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])};const{createElementVNode:Sj,openBlock:Ij,createElementBlock:Cj}=ma;var Aj=function(e,n){return Ij(),Cj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Sj("path",{"fill-rule":"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z","clip-rule":"evenodd"})])};const{createElementVNode:Rj,openBlock:xj,createElementBlock:Oj}=ma;var Pj=function(e,n){return xj(),Oj("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Rj("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])},gh=mj,Nj=Ej,Dj=Tj,kj=Aj,Mj=Pj;const Lj=["href"],Fj=$e({__name:"DropDown",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){const e=rr(),{currentUser:n}=Er(e),{menuItems:r}=Er(ms());return(s,i)=>{const o=Hi("RouterLink");return K(),Ie(Je,null,[Tl(ee("div",{class:"md:hidden w-screen h-screen z-10 bg-gray-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:i[0]||(i[0]=(...a)=>t.toggle&&t.toggle(...a))},null,512),[[Uo,t.isOpen]]),Tl(ee("div",{class:"md:hidden absolute z-20 w-3/4 start-1/2 transform -translate-x-1/2 mt-2 p-4 py-8 bg-gray-900 border border-indigo-600 rounded-xl",onClick:i[1]||(i[1]=(...a)=>t.toggle&&t.toggle(...a))},[(K(!0),Ie(Je,null,mr(Y(r),a=>(K(),Ie(Je,null,[a.url.startsWith("http")?(K(),Ie("a",{key:1,href:a.url,class:"button-outlined-list-primary flex flex-column justify-center text-lg first:rounded-t-xl"},[a.loading?(K(),Oe(Y(gh),{key:0,class:"mt-1 mr-2.5 h-5 w-5 animate-spin"})):bt("",!0),pn(" "+at(a.name),1)],8,Lj)):(K(),Oe(o,{key:0,to:{path:a.url},class:"button-outlined-list-primary block text-lg first:rounded-t-xl"},{default:it(()=>[a.loading?(K(),Oe(Y(gh),{key:0,class:"mt-1 mr-2.5 h-5 w-5 animate-spin"})):bt("",!0),pn(" "+at(a.name),1)]),_:2},1032,["to"]))],64))),256)),Y(n)?(K(),Oe(o,{key:0,to:{name:"dashboard"},class:"button-outlined-list-primary block text-lg first:rounded-t-xl"},{default:it(()=>[pn(" Dashboard ")]),_:1})):bt("",!0),Y(n)?(K(),Oe(o,{key:1,to:{},class:"button-outlined-list-danger flex flex-column justify-center text-lg rounded-b-xl first:rounded-t-xl",onClick:Y(e).logout},{default:it(()=>[pn(" Logout ")]),_:1},8,["onClick"])):(K(),Oe(o,{key:2,to:{name:"login"},class:"button-outlined-list-secondary block text-lg rounded-b-xl first:rounded-t-xl"},{default:it(()=>[pn(" Login ")]),_:1}))],512),[[Uo,t.isOpen]])],64)}}}),Uj={key:0,class:"col-span-5 flex items-center justify-between md:justify-around gap-x-3 flex-wrap"},$j=["href"],Bj={class:"flex justify-center"},jj=$e({__name:"Menu",setup(t){const e=rr(),{currentUser:n}=Er(e),{menuItems:r}=Er(ms()),s=lt(),i=lt(!1),o=()=>{i.value=!i.value,i.value&&Vi(()=>{var a;(a=s.value)==null||a.scrollIntoView({behavior:"smooth",block:"center"})})};return(a,l)=>{const c=Hi("RouterLink");return Y(r).length?(K(),Ie("div",Uj,[(K(!0),Ie(Je,null,mr(Y(r),u=>(K(),Ie(Je,null,[u.url.startsWith("http")?(K(),Ie("a",{key:1,class:"button-outlined-primary hidden md:flex flex-column grow justify-center",type:"button",href:u.url},[u.loading?(K(),Oe(Y(gh),{key:0,class:"my-1 mr-2.5 h-5 w-5 animate-spin"})):bt("",!0),pn(" "+at(u.name),1)],8,$j)):(K(),Oe(c,{key:0,class:"button-outlined-primary hidden md:flex flex-column grow justify-center",to:{path:u.url}},{default:it(()=>[u.loading?(K(),Oe(Y(gh),{key:0,class:"my-1 mr-2.5 h-5 w-5 animate-spin"})):bt("",!0),pn(" "+at(u.name),1)]),_:2},1032,["to"]))],64))),256)),Y(n)?bt("",!0):(K(),Oe(c,{key:0,to:{name:"login"},class:"button-outlined-secondary hidden md:flex flex-column grow justify-center"},{default:it(()=>[pn(" Login ")]),_:1})),Y(n)?(K(),Ie("button",{key:1,class:"button-outlined-danger hidden md:flex flex-column grow justify-center",type:"button",onClick:l[0]||(l[0]=(...u)=>Y(e).logout&&Y(e).logout(...u))}," Logout ")):bt("",!0),ee("div",{ref_key:"dropdown",ref:s,class:"dropdown w-full"},[ee("button",{class:"button-outlined-primary md:hidden w-full",type:"button",onClick:o},[ee("div",Bj,[le(Y(Dj),{class:"mt-0.5 mr-2.5 h-5 w-5"}),pn(" Menu ")])]),le(Fj,{"is-open":i.value,toggle:()=>i.value=!i.value},null,8,["is-open","toggle"])],512)])):bt("",!0)}}}),Vj={class:"lg:flex items-start lg:items-start lg:justify-between"},Hj={class:"min-w-0 flex-1"},Wj=["src","alt"],Kj={class:"title-primary"},Gj={class:"title-secondary"},zj={class:"title-tertiary mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap xl:space-x-6"},Yj={class:"mt-2 flex items-center"},Xj={class:"mt-2 flex items-center"},Qj={class:"lg:w-1/2 mt-8 lg:mt-0 p-8 bg-black bg-opacity-50 text-indigo-300 rounded-3xl"},qj={key:0,class:"grid grid-cols-5 mb-4"},Jj={class:"col-span-5 md:col-span-4 space-y-2"},Zj={class:"font-semibold text-base first:font-bold first:text-lg"},e6=ee("p",null,"To my personal portfolio and blog website!",-1),t6={class:"hidden md:visible col-span-5 md:col-span-1 md:flex items-center justify-center md:justify-end"},n6={key:1},r6={class:"col-span-5 md:col-span-4 space-y-2 mb-5"},s6={class:"font-semibold text-base first:font-bold first:text-lg"},i6=$e({__name:"Header",setup(t){const{currentUser:e,publicUser:n}=Er(rr()),{profile:r}=Er(ms());return(s,i)=>{const o=Hi("RouterLink");return K(),Ie("div",Vj,[ee("div",Hj,[le(o,{to:{name:"home"}},{default:it(()=>[ee("img",{class:"w-48 h-48 rounded-full animation-scale mb-4 cursor-pointer",src:Y(r).avatarUrl,alt:Y(r).name},null,8,Wj)]),_:1}),ee("h1",Kj,at(Y(r).name),1),ee("h2",Gj,at(Y(r).service),1),ee("div",zj,[ee("div",Yj,[le(Y(Nj),{class:"mr-1.5 h-5 w-5 text-gray-400"}),pn(" "+at(Y(r).role),1)]),ee("div",Xj,[le(Y(kj),{class:"mr-1.5 h-5 w-5 text-gray-400"}),pn(" "+at(Y(r).location.city)+", "+at(Y(r).location.country),1)])])]),ee("div",Qj,[Y(e)?(K(),Ie("div",qj,[ee("div",Jj,[ee("p",Zj," Welcome "+at(Y(e).firstName+(Y(e).lastName?" "+Y(e).lastName:"")),1),e6]),ee("div",t6,[le(o,{to:{name:"dashboard"}},{default:it(()=>[le(Y(Mj),{class:"w-16 h-16 rounded-full border-2 text-indigo-600 border-indigo-600 animation-scale"})]),_:1})])])):(K(),Ie("div",n6,[ee("div",r6,[(K(!0),Ie(Je,null,mr(Y(r).description,a=>(K(),Ie("p",s6,at(a),1))),256))])])),le(jj)])])}}}),o6={class:"min-h-screen bg-gradient-to-t from-black to-blue-900 via-gray-800"},a6={class:"mx-0 sm:mx-16 p-5 sm:p-14 rounded-bl-3xl rounded-br-3xl text-white bg-blue-gray-900 bg-opacity-50 bg-gradient-to-b from-transparent to-black via-purple-900 border-opacity-100"},va=$e({__name:"Page",setup(t){const{fetchAll:e}=ms();return Br(()=>{e()}),(n,r)=>(K(),Ie(Je,null,[ee("div",o6,[ee("div",a6,[ee("header",null,[n.$slots.header?ns(n.$slots,"header",{key:0}):(K(),Oe(i6,{key:1}))]),ee("main",null,[ns(n.$slots,"content")])])]),ee("footer",null,[n.$slots.footer?ns(n.$slots,"footer",{key:0}):(K(),Oe(uj,{key:1}))])],64))}}),l6={class:"grid mt-20"},c6=$e({__name:"Blog",setup(t){return(e,n)=>(K(),Oe(va,null,{content:it(()=>[ee("div",l6,[le(aj)])]),_:1}))}}),u6=$e({__name:"Blog",setup(t){return(e,n)=>(K(),Oe(c6))}}),h6={class:"flex flex-col lg:justify-center lg:items-center py-10 text-md text-primary"},f6={class:"m-1 lg:w-4/5"},Iv=$e({__name:"Privacy",setup(t){return(e,n)=>(K(),Ie("div",h6,[(K(!0),Ie(Je,null,mr(Y(kf).privacyStatement,r=>(K(),Ie("p",f6,at(r),1))),256))]))}}),Cv=$e({__name:"EmailField",props:{name:null,label:null,rules:null,state:null},emits:["update","error"],setup(t,{expose:e}){const n=lt();return e({test:async()=>await n.value.test()}),(r,s)=>(K(),Oe(is,{ref_key:"email",ref:n,name:t.name,label:t.label,placeholder:"someone@example.com","input-props":{type:"email"},state:t.state,rules:[...t.rules,Y(Kt).Email],onUpdate:s[0]||(s[0]=i=>r.$emit("update",i)),onError:s[1]||(s[1]=i=>r.$emit("error",i))},null,8,["name","label","state","rules"]))}}),vo=$e({__name:"PasswordField",props:{name:null,label:null,placeholder:null,rules:null,state:null,min:null,max:null,compare:null},emits:["update","error"],setup(t,{expose:e}){const n=lt();return e({test:async()=>n.value.test()}),(r,s)=>(K(),Oe(is,{ref_key:"password",ref:n,name:t.name,label:t.label,placeholder:"******","input-props":{type:"password",autocomplete:"on"},state:t.state,rules:t.rules,min:t.min,max:t.max,compare:t.compare,onUpdate:s[0]||(s[0]=i=>r.$emit("update",i)),onError:s[1]||(s[1]=i=>r.$emit("error",i))},null,8,["name","label","state","rules","min","max","compare"]))}}),d6={class:"flex flex-col items-center content-center"},p6={class:"flex gap-3 mt-10 flex-wrap"},g6={key:0,class:"button-primary w-full",type:"submit"},m6=$e({__name:"Dashboard",setup(t){var E,b,I,C;const e=rr(),{currentUser:n,firebaseUser:r,publicUser:s}=Er(e),{fetchAll:i}=ms(),o=lt(),a=lt(),l=lt(),c=lt(),u=lt(),h=lt(),f=lt(),d=Yn({firstName:{value:((E=n.value)==null?void 0:E.firstName)||"",error:""},lastName:{value:((b=n.value)==null?void 0:b.lastName)||"",error:""},displayName:{value:((I=s.value)==null?void 0:I.displayName)||"",error:""},email:{value:((C=r.value)==null?void 0:C.email)||"",error:""},newPassword:{value:"",error:""},currentPassword:{value:"",error:""},repeatPassword:{value:"",error:""}}),p=vt(()=>({firstName:d.firstName.value,lastName:d.lastName.value})),m=vt(()=>{var A;return d.displayName.value&&d.displayName.value!==((A=s.value)==null?void 0:A.displayName)}),y=vt(()=>{var A;return d.email.value!==((A=r.value)==null?void 0:A.email)}),v=vt(()=>{const A=[];return Ju(n.value,p.value)||A.push("Details"),m.value&&A.push("Public Profile"),y.value&&A.push("E-mail"),d.newPassword.value&&A.push("Password"),A.length?"Save "+A.join(", ").replace(/,([^,]*)$/," and$1"):void 0}),g=async()=>{Object.keys(d).forEach(A=>d[A].error=""),d.newPassword.value&&(await Promise.all([u.value.test(),h.value.test(),f.value.test()]),!d.newPassword.error&&!d.currentPassword.error&&!d.repeatPassword.error&&(await e.updatePassword(d.newPassword.value,d.currentPassword.value),d.newPassword.value="",d.currentPassword.value="")),m.value&&(await l.value.test(),d.displayName.error||e.updatePublicUser({displayName:d.displayName.value})),y.value&&(await Promise.all([c.value.test(),h.value.test()]),!d.email.error&&!d.currentPassword.error&&(await e.updateMail(d.email.value,d.currentPassword.value),d.currentPassword.value="")),Ju(n.value,p.value)||(await Promise.all([o.value.test(),a.value.test()]),!d.firstName.error&&!d.lastName.error&&e.updateUser({firstName:d.firstName.value,lastName:d.lastName.value})),await i(!0)};return(A,_)=>(K(),Oe(va,null,{content:it(()=>[Y(n)&&Y(r)?(K(),Oe(Zr,{key:0,class:"!bg-cyan-800 !bg-opacity-50 my-5",title:"Welcome "+Y(n).firstName+(Y(n).lastName?" "+Y(n).lastName:""),description:"Soon you'll be able to use this account for interaction with my blog posts and more!"},{default:it(()=>[ee("div",d6,[ee("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:_[17]||(_[17]=Vh(S=>g(),["prevent"]))},[le(is,{ref_key:"firstName",ref:o,name:"firstName",label:"First Name",placeholder:"Someone",state:d,rules:[Y(Kt).Required],min:3,max:50,onUpdate:_[0]||(_[0]=S=>d.firstName.value=S),onError:_[1]||(_[1]=S=>d.firstName.error=S)},null,8,["state","rules"]),le(is,{ref_key:"lastName",ref:a,name:"lastName",label:"Last Name",state:d,min:3,max:50,onUpdate:_[2]||(_[2]=S=>d.lastName.value=S),onError:_[3]||(_[3]=S=>d.lastName.error=S)},null,8,["state"]),le(is,{ref_key:"displayName",ref:l,name:"displayName",label:"Public Username",state:d,rules:[Y(Kt).MinLength],min:3,max:50,onUpdate:_[4]||(_[4]=S=>d.displayName.value=S),onError:_[5]||(_[5]=S=>d.displayName.error=S)},null,8,["state","rules"]),le(Cv,{ref_key:"email",ref:c,name:"email",label:"E-mail",state:d,rules:[Y(Kt).Required],onUpdate:_[6]||(_[6]=S=>d.email.value=S),onError:_[7]||(_[7]=S=>d.email.error=S)},null,8,["state","rules"]),Y(y)?(K(),Oe(vo,{key:0,ref_key:"currentPassword",ref:h,name:"currentPassword",label:"Current Password",state:d,rules:[Y(Kt).Required],onUpdate:_[8]||(_[8]=S=>d.currentPassword.value=S),onError:_[9]||(_[9]=S=>d.currentPassword.error=S)},null,8,["state","rules"])):bt("",!0),le(vo,{ref_key:"newPassword",ref:u,name:"newPassword",label:"New Password",state:d,min:6,max:50,onUpdate:_[10]||(_[10]=S=>d.newPassword.value=S),onError:_[11]||(_[11]=S=>d.newPassword.error=S)},null,8,["state"]),d.newPassword.value?(K(),Oe(vo,{key:1,ref_key:"repeatPassword",ref:f,name:"repeatPassword",label:"Repeat New Password",state:d,rules:[Y(Kt).Required],compare:{value:d.newPassword.value,name:"New Password"},onUpdate:_[12]||(_[12]=S=>d.repeatPassword.value=S),onError:_[13]||(_[13]=S=>d.repeatPassword.error=S)},null,8,["state","rules","compare"])):bt("",!0),d.newPassword.value&&!Y(y)?(K(),Oe(vo,{key:2,ref_key:"currentPassword",ref:h,name:"currentPassword",label:"Current Password",state:d,rules:[Y(Kt).Required],onUpdate:_[14]||(_[14]=S=>d.currentPassword.value=S),onError:_[15]||(_[15]=S=>d.currentPassword.error=S)},null,8,["state","rules"])):bt("",!0),ee("div",p6,[Y(v)?(K(),Ie("button",g6,at(Y(v)),1)):bt("",!0),ee("button",{class:"button-outlined-danger w-full",type:"button",onClick:_[16]||(_[16]=S=>Y(e).deleteAccount())}," Delete account ")])],32),le(Iv)])]),_:1},8,["title"])):bt("",!0)]),_:1}))}}),v6=$e({__name:"Dashboard",setup(t){return(e,n)=>(K(),Oe(m6))}}),y6=["href"],E6={key:1},w6=$e({__name:"ColororedButton",props:{text:null,url:null,color:null},setup(t){return(e,n)=>(K(),Ie("button",{class:"mt-3 md:mt-0 text-white font-bold py-2 px-4 rounded-full",style:ta({backgroundColor:t.color})},[t.url?(K(),Ie("a",{key:0,href:t.url},at(t.text),9,y6)):(K(),Ie("p",E6,at(t.text),1))],4))}});const qC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},b6=qC(w6,[["__scopeId","data-v-a9693f67"]]);var lg={},_6={get exports(){return lg},set exports(t){lg=t}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Y0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function $r(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Y0(Object(n),!0).forEach(function(r){T6(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pu=function(e){return typeof e}:pu=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pu(t)}function T6(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ir(){return ir=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ir.apply(this,arguments)}function S6(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function I6(t,e){if(t==null)return{};var n=S6(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function C6(t){return A6(t)||R6(t)||x6(t)||O6()}function A6(t){if(Array.isArray(t))return cg(t)}function R6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function x6(t,e){if(t){if(typeof t=="string")return cg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cg(t,e)}}function cg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P6="1.14.0";function os(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var vs=os(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),wc=os(/Edge/i),X0=os(/firefox/i),hl=os(/safari/i)&&!os(/chrome/i)&&!os(/android/i),JC=os(/iP(ad|od|hone)/i),N6=os(/chrome/i)&&os(/android/i),ZC={capture:!1,passive:!1};function We(t,e,n){t.addEventListener(e,n,!vs&&ZC)}function Be(t,e,n){t.removeEventListener(e,n,!vs&&ZC)}function mh(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function D6(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function lr(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&mh(t,e):mh(t,e))||r&&t===n)return t;if(t===n)break}while(t=D6(t))}return null}var Q0=/\s+/g;function Pt(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(Q0," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(Q0," ")}}function ue(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function Si(t,e){var n="";if(typeof t=="string")n=t;else do{var r=ue(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(n)}function e1(t,e,n){if(t){var r=t.getElementsByTagName(e),s=0,i=r.length;if(n)for(;s<i;s++)n(r[s],s);return r}return[]}function Nr(){var t=document.scrollingElement;return t||document.documentElement}function Ct(t,e,n,r,s){if(!(!t.getBoundingClientRect&&t!==window)){var i,o,a,l,c,u,h;if(t!==window&&t.parentNode&&t!==Nr()?(i=t.getBoundingClientRect(),o=i.top,a=i.left,l=i.bottom,c=i.right,u=i.height,h=i.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(s=s||t.parentNode,!vs))do if(s&&s.getBoundingClientRect&&(ue(s,"transform")!=="none"||n&&ue(s,"position")!=="static")){var f=s.getBoundingClientRect();o-=f.top+parseInt(ue(s,"border-top-width")),a-=f.left+parseInt(ue(s,"border-left-width")),l=o+i.height,c=a+i.width;break}while(s=s.parentNode);if(r&&t!==window){var d=Si(s||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,h/=p,u/=m,l=o+u,c=a+h)}return{top:o,left:a,bottom:l,right:c,width:h,height:u}}}function q0(t,e,n){for(var r=ks(t,!0),s=Ct(t)[e];r;){var i=Ct(r)[n],o=void 0;if(n==="top"||n==="left"?o=s>=i:o=s<=i,!o)return r;if(r===Nr())break;r=ks(r,!1)}return!1}function ea(t,e,n,r){for(var s=0,i=0,o=t.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==Se.ghost&&(r||o[i]!==Se.dragged)&&lr(o[i],n.draggable,t,!1)){if(s===e)return o[i];s++}i++}return null}function Av(t,e){for(var n=t.lastElementChild;n&&(n===Se.ghost||ue(n,"display")==="none"||e&&!mh(n,e));)n=n.previousElementSibling;return n||null}function Lt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==Se.clone&&(!e||mh(t,e))&&n++;return n}function J0(t){var e=0,n=0,r=Nr();if(t)do{var s=Si(t),i=s.a,o=s.d;e+=t.scrollLeft*i,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function k6(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function ks(t,e){if(!t||!t.getBoundingClientRect)return Nr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var s=ue(n);if(n.clientWidth<n.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return Nr();if(r||e)return n;r=!0}}while(n=n.parentNode);return Nr()}function M6(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function Od(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var fl;function t1(t,e){return function(){if(!fl){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),fl=setTimeout(function(){fl=void 0},e)}}}function L6(){clearTimeout(fl),fl=void 0}function n1(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function Rv(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function Z0(t,e){ue(t,"position","absolute"),ue(t,"top",e.top),ue(t,"left",e.left),ue(t,"width",e.width),ue(t,"height",e.height)}function Pd(t){ue(t,"position",""),ue(t,"top",""),ue(t,"left",""),ue(t,"width",""),ue(t,"height","")}var mn="Sortable"+new Date().getTime();function F6(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(s){if(!(ue(s,"display")==="none"||s===Se.ghost)){t.push({target:s,rect:Ct(s)});var i=$r({},t[t.length-1].rect);if(s.thisAnimationDuration){var o=Si(s,!0);o&&(i.top-=o.f,i.left-=o.e)}s.fromRect=i}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(k6(t,{target:r}),1)},animateAll:function(r){var s=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var i=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,h=Ct(c),f=c.prevFromRect,d=c.prevToRect,p=a.rect,m=Si(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&Od(f,h)&&!Od(u,h)&&(p.top-h.top)/(p.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(l=$6(p,f,d,s.options)),Od(h,u)||(c.prevFromRect=u,c.prevToRect=h,l||(l=s.options.animation),s.animate(c,p,h,l)),l&&(i=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),i?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,s,i,o){if(o){ue(r,"transition",""),ue(r,"transform","");var a=Si(this.el),l=a&&a.a,c=a&&a.d,u=(s.left-i.left)/(l||1),h=(s.top-i.top)/(c||1);r.animatingX=!!u,r.animatingY=!!h,ue(r,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=U6(r),ue(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),ue(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){ue(r,"transition",""),ue(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function U6(t){return t.offsetWidth}function $6(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var ro=[],Nd={initializeByDefault:!0},bc={mount:function(e){for(var n in Nd)Nd.hasOwnProperty(n)&&!(n in e)&&(e[n]=Nd[n]);ro.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),ro.push(e)},pluginEvent:function(e,n,r){var s=this;this.eventCanceled=!1,r.cancel=function(){s.eventCanceled=!0};var i=e+"Global";ro.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][i]&&n[o.pluginName][i]($r({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e]($r({sortable:n},r)))})},initializePlugins:function(e,n,r,s){ro.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,ir(r,c.defaults)}});for(var i in e.options)if(e.options.hasOwnProperty(i)){var o=this.modifyOption(e,i,e.options[i]);typeof o<"u"&&(e.options[i]=o)}},getEventProperties:function(e,n){var r={};return ro.forEach(function(s){typeof s.eventProperties=="function"&&ir(r,s.eventProperties.call(n[s.pluginName],e))}),r},modifyOption:function(e,n,r){var s;return ro.forEach(function(i){e[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[n]=="function"&&(s=i.optionListeners[n].call(e[i.pluginName],r))}),s}};function Va(t){var e=t.sortable,n=t.rootEl,r=t.name,s=t.targetEl,i=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,h=t.newDraggableIndex,f=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[mn],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!vs&&!wc?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=s||n,m.clone=i,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=d?d.lastPutMode:void 0;var g=$r($r({},p),bc.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var B6=["evt"],xn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.evt,i=I6(r,B6);bc.pluginEvent.bind(Se)(e,n,$r({dragEl:J,parentEl:kt,ghostEl:Le,rootEl:It,nextEl:ci,lastDownEl:gu,cloneEl:Mt,cloneHidden:Ns,dragStarted:Ha,putSortable:Zt,activeSortable:Se.active,originalEvent:s,oldIndex:yo,oldDraggableIndex:dl,newIndex:Bn,newDraggableIndex:As,hideGhostForTarget:o1,unhideGhostForTarget:a1,cloneNowHidden:function(){Ns=!0},cloneNowShown:function(){Ns=!1},dispatchSortableEvent:function(a){In({sortable:n,name:a,originalEvent:s})}},i))};function In(t){Va($r({putSortable:Zt,cloneEl:Mt,targetEl:J,rootEl:It,oldIndex:yo,oldDraggableIndex:dl,newIndex:Bn,newDraggableIndex:As},t))}var J,kt,Le,It,ci,gu,Mt,Ns,yo,Bn,dl,As,qc,Zt,ho=!1,vh=!1,yh=[],si,or,Dd,kd,ew,tw,Ha,so,pl,gl=!1,Jc=!1,mu,ln,Md=[],ug=!1,Eh=[],Mf=typeof document<"u",Zc=JC,nw=wc||vs?"cssFloat":"float",j6=Mf&&!N6&&!JC&&"draggable"in document.createElement("div"),r1=function(){if(Mf){if(vs)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),s1=function(e,n){var r=ue(e),s=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=ea(e,0,n),o=ea(e,1,n),a=i&&ue(i),l=o&&ue(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ct(i).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+Ct(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return i&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=s&&r[nw]==="none"||o&&r[nw]==="none"&&c+u>s)?"vertical":"horizontal"},V6=function(e,n,r){var s=r?e.left:e.top,i=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return s===a||i===l||s+o/2===a+c/2},H6=function(e,n){var r;return yh.some(function(s){var i=s[mn].options.emptyInsertThreshold;if(!(!i||Av(s))){var o=Ct(s),a=e>=o.left-i&&e<=o.right+i,l=n>=o.top-i&&n<=o.bottom+i;if(a&&l)return r=s}}),r},i1=function(e){function n(i,o){return function(a,l,c,u){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(i==null&&(o||h))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return n(i(a,l,c,u),o)(a,l,c,u);var f=(o?a:l).options.group.name;return i===!0||typeof i=="string"&&i===f||i.join&&i.indexOf(f)>-1}}var r={},s=e.group;(!s||pu(s)!="object")&&(s={name:s}),r.name=s.name,r.checkPull=n(s.pull,!0),r.checkPut=n(s.put),r.revertClone=s.revertClone,e.group=r},o1=function(){!r1&&Le&&ue(Le,"display","none")},a1=function(){!r1&&Le&&ue(Le,"display","")};Mf&&document.addEventListener("click",function(t){if(vh)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),vh=!1,!1},!0);var ii=function(e){if(J){e=e.touches?e.touches[0]:e;var n=H6(e.clientX,e.clientY);if(n){var r={};for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[mn]._onDragOver(r)}}},W6=function(e){J&&J.parentNode[mn]._isOutsideThisEl(e.target)};function Se(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=ir({},e),t[mn]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return s1(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Se.supportPointer!==!1&&"PointerEvent"in window&&!hl,emptyInsertThreshold:5};bc.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);i1(e);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=e.forceFallback?!1:j6,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?We(t,"pointerdown",this._onTapStart):(We(t,"mousedown",this._onTapStart),We(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(We(t,"dragover",this),We(t,"dragenter",this)),yh.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ir(this,F6())}Se.prototype={constructor:Se,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(so=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,J):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,s=this.options,i=s.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=s.filter;if(J6(r),!J&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||s.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&hl&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=lr(l,s.draggable,r,!1),!(l&&l.animated)&&gu!==l)){if(yo=Lt(l),dl=Lt(l,s.draggable),typeof u=="function"){if(u.call(this,e,l,this)){In({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),xn("filter",n,{evt:e}),i&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=lr(c,h.trim(),r,!1),h)return In({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),xn("filter",n,{evt:e}),!0}),u)){i&&e.cancelable&&e.preventDefault();return}s.handle&&!lr(c,s.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var s=this,i=s.el,o=s.options,a=i.ownerDocument,l;if(r&&!J&&r.parentNode===i){var c=Ct(r);if(It=i,J=r,kt=J.parentNode,ci=J.nextSibling,gu=r,qc=o.group,Se.dragged=J,si={target:J,clientX:(n||e).clientX,clientY:(n||e).clientY},ew=si.clientX-c.left,tw=si.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,J.style["will-change"]="all",l=function(){if(xn("delayEnded",s,{evt:e}),Se.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!X0&&s.nativeDraggable&&(J.draggable=!0),s._triggerDragStart(e,n),In({sortable:s,name:"choose",originalEvent:e}),Pt(J,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){e1(J,u.trim(),Ld)}),We(a,"dragover",ii),We(a,"mousemove",ii),We(a,"touchmove",ii),We(a,"mouseup",s._onDrop),We(a,"touchend",s._onDrop),We(a,"touchcancel",s._onDrop),X0&&this.nativeDraggable&&(this.options.touchStartThreshold=4,J.draggable=!0),xn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(wc||vs))){if(Se.eventCanceled){this._onDrop();return}We(a,"mouseup",s._disableDelayedDrag),We(a,"touchend",s._disableDelayedDrag),We(a,"touchcancel",s._disableDelayedDrag),We(a,"mousemove",s._delayedDragTouchMoveHandler),We(a,"touchmove",s._delayedDragTouchMoveHandler),o.supportPointer&&We(a,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){J&&Ld(J),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Be(e,"mouseup",this._disableDelayedDrag),Be(e,"touchend",this._disableDelayedDrag),Be(e,"touchcancel",this._disableDelayedDrag),Be(e,"mousemove",this._delayedDragTouchMoveHandler),Be(e,"touchmove",this._delayedDragTouchMoveHandler),Be(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?We(document,"pointermove",this._onTouchMove):n?We(document,"touchmove",this._onTouchMove):We(document,"mousemove",this._onTouchMove):(We(J,"dragend",this),We(It,"dragstart",this._onDragStart));try{document.selection?vu(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(ho=!1,It&&J){xn("dragStarted",this,{evt:n}),this.nativeDraggable&&We(document,"dragover",W6);var r=this.options;!e&&Pt(J,r.dragClass,!1),Pt(J,r.ghostClass,!0),Se.active=this,e&&this._appendGhost(),In({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(or){this._lastX=or.clientX,this._lastY=or.clientY,o1();for(var e=document.elementFromPoint(or.clientX,or.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(or.clientX,or.clientY),e!==n);)n=e;if(J.parentNode[mn]._isOutsideThisEl(e),n)do{if(n[mn]){var r=void 0;if(r=n[mn]._onDragOver({clientX:or.clientX,clientY:or.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);a1()}},_onTouchMove:function(e){if(si){var n=this.options,r=n.fallbackTolerance,s=n.fallbackOffset,i=e.touches?e.touches[0]:e,o=Le&&Si(Le,!0),a=Le&&o&&o.a,l=Le&&o&&o.d,c=Zc&&ln&&J0(ln),u=(i.clientX-si.clientX+s.x)/(a||1)+(c?c[0]-Md[0]:0)/(a||1),h=(i.clientY-si.clientY+s.y)/(l||1)+(c?c[1]-Md[1]:0)/(l||1);if(!Se.active&&!ho){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(Le){o?(o.e+=u-(Dd||0),o.f+=h-(kd||0)):o={a:1,b:0,c:0,d:1,e:u,f:h};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");ue(Le,"webkitTransform",f),ue(Le,"mozTransform",f),ue(Le,"msTransform",f),ue(Le,"transform",f),Dd=u,kd=h,or=i}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!Le){var e=this.options.fallbackOnBody?document.body:It,n=Ct(J,!0,Zc,!0,e),r=this.options;if(Zc){for(ln=e;ue(ln,"position")==="static"&&ue(ln,"transform")==="none"&&ln!==document;)ln=ln.parentNode;ln!==document.body&&ln!==document.documentElement?(ln===document&&(ln=Nr()),n.top+=ln.scrollTop,n.left+=ln.scrollLeft):ln=Nr(),Md=J0(ln)}Le=J.cloneNode(!0),Pt(Le,r.ghostClass,!1),Pt(Le,r.fallbackClass,!0),Pt(Le,r.dragClass,!0),ue(Le,"transition",""),ue(Le,"transform",""),ue(Le,"box-sizing","border-box"),ue(Le,"margin",0),ue(Le,"top",n.top),ue(Le,"left",n.left),ue(Le,"width",n.width),ue(Le,"height",n.height),ue(Le,"opacity","0.8"),ue(Le,"position",Zc?"absolute":"fixed"),ue(Le,"zIndex","100000"),ue(Le,"pointerEvents","none"),Se.ghost=Le,e.appendChild(Le),ue(Le,"transform-origin",ew/parseInt(Le.style.width)*100+"% "+tw/parseInt(Le.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,s=e.dataTransfer,i=r.options;if(xn("dragStart",this,{evt:e}),Se.eventCanceled){this._onDrop();return}xn("setupClone",this),Se.eventCanceled||(Mt=Rv(J),Mt.draggable=!1,Mt.style["will-change"]="",this._hideClone(),Pt(Mt,this.options.chosenClass,!1),Se.clone=Mt),r.cloneId=vu(function(){xn("clone",r),!Se.eventCanceled&&(r.options.removeCloneOnHide||It.insertBefore(Mt,J),r._hideClone(),In({sortable:r,name:"clone"}))}),!n&&Pt(J,i.dragClass,!0),n?(vh=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Be(document,"mouseup",r._onDrop),Be(document,"touchend",r._onDrop),Be(document,"touchcancel",r._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(r,s,J)),We(document,"drop",r),ue(J,"transform","translateZ(0)")),ho=!0,r._dragStartId=vu(r._dragStarted.bind(r,n,e)),We(document,"selectstart",r),Ha=!0,hl&&ue(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,s,i,o,a=this.options,l=a.group,c=Se.active,u=qc===l,h=a.sort,f=Zt||c,d,p=this,m=!1;if(ug)return;function y(ce,He){xn(ce,p,$r({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:s,targetRect:i,canSort:h,fromSortable:f,target:r,completed:g,onMove:function(Ye,je){return eu(It,n,J,s,Ye,Ct(Ye),e,je)},changed:E},He))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function g(ce){return y("dragOverCompleted",{insertion:ce}),ce&&(u?c._hideClone():c._showClone(p),p!==f&&(Pt(J,Zt?Zt.options.ghostClass:c.options.ghostClass,!1),Pt(J,a.ghostClass,!0)),Zt!==p&&p!==Se.active?Zt=p:p===Se.active&&Zt&&(Zt=null),f===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===J&&!J.animated||r===n&&!r.animated)&&(so=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(J.parentNode[mn]._isOutsideThisEl(e.target),!ce&&ii(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){Bn=Lt(J),As=Lt(J,a.draggable),In({sortable:p,name:"change",toEl:n,newIndex:Bn,newDraggableIndex:As,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=lr(r,a.draggable,n,!0),y("dragOver"),Se.eventCanceled)return m;if(J.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(vh=!1,c&&!a.disabled&&(u?h||(o=kt!==It):Zt===this||(this.lastPutMode=qc.checkPull(this,c,J,e))&&l.checkPut(this,c,J,e))){if(d=this._getDirection(e,r)==="vertical",s=Ct(J),y("dragOverValid"),Se.eventCanceled)return m;if(o)return kt=It,v(),this._hideClone(),y("revert"),Se.eventCanceled||(ci?It.insertBefore(J,ci):It.appendChild(J)),g(!0);var b=Av(n,a.draggable);if(!b||Y6(e,d,this)&&!b.animated){if(b===J)return g(!1);if(b&&n===e.target&&(r=b),r&&(i=Ct(r)),eu(It,n,J,s,r,i,e,!!r)!==!1)return v(),n.appendChild(J),kt=n,E(),g(!0)}else if(b&&z6(e,d,this)){var I=ea(n,0,a,!0);if(I===J)return g(!1);if(r=I,i=Ct(r),eu(It,n,J,s,r,i,e,!1)!==!1)return v(),n.insertBefore(J,I),kt=n,E(),g(!0)}else if(r.parentNode===n){i=Ct(r);var C=0,A,_=J.parentNode!==n,S=!V6(J.animated&&J.toRect||s,r.animated&&r.toRect||i,d),N=d?"top":"left",L=q0(r,"top","top")||q0(J,"top","top"),U=L?L.scrollTop:void 0;so!==r&&(A=i[N],gl=!1,Jc=!S&&a.invertSwap||_),C=X6(e,r,i,d,S?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,Jc,so===r);var k;if(C!==0){var O=Lt(J);do O-=C,k=kt.children[O];while(k&&(ue(k,"display")==="none"||k===Le))}if(C===0||k===r)return g(!1);so=r,pl=C;var te=r.nextElementSibling,B=!1;B=C===1;var Z=eu(It,n,J,s,r,i,e,B);if(Z!==!1)return(Z===1||Z===-1)&&(B=Z===1),ug=!0,setTimeout(G6,30),v(),B&&!te?n.appendChild(J):r.parentNode.insertBefore(J,B?te:r),L&&n1(L,0,U-L.scrollTop),kt=J.parentNode,A!==void 0&&!Jc&&(mu=Math.abs(A-Ct(r)[N])),E(),g(!0)}if(n.contains(J))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Be(document,"mousemove",this._onTouchMove),Be(document,"touchmove",this._onTouchMove),Be(document,"pointermove",this._onTouchMove),Be(document,"dragover",ii),Be(document,"mousemove",ii),Be(document,"touchmove",ii)},_offUpEvents:function(){var e=this.el.ownerDocument;Be(e,"mouseup",this._onDrop),Be(e,"touchend",this._onDrop),Be(e,"pointerup",this._onDrop),Be(e,"touchcancel",this._onDrop),Be(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(Bn=Lt(J),As=Lt(J,r.draggable),xn("drop",this,{evt:e}),kt=J&&J.parentNode,Bn=Lt(J),As=Lt(J,r.draggable),Se.eventCanceled){this._nulling();return}ho=!1,Jc=!1,gl=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),hg(this.cloneId),hg(this._dragStartId),this.nativeDraggable&&(Be(document,"drop",this),Be(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),hl&&ue(document.body,"user-select",""),ue(J,"transform",""),e&&(Ha&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),Le&&Le.parentNode&&Le.parentNode.removeChild(Le),(It===kt||Zt&&Zt.lastPutMode!=="clone")&&Mt&&Mt.parentNode&&Mt.parentNode.removeChild(Mt),J&&(this.nativeDraggable&&Be(J,"dragend",this),Ld(J),J.style["will-change"]="",Ha&&!ho&&Pt(J,Zt?Zt.options.ghostClass:this.options.ghostClass,!1),Pt(J,this.options.chosenClass,!1),In({sortable:this,name:"unchoose",toEl:kt,newIndex:null,newDraggableIndex:null,originalEvent:e}),It!==kt?(Bn>=0&&(In({rootEl:kt,name:"add",toEl:kt,fromEl:It,originalEvent:e}),In({sortable:this,name:"remove",toEl:kt,originalEvent:e}),In({rootEl:kt,name:"sort",toEl:kt,fromEl:It,originalEvent:e}),In({sortable:this,name:"sort",toEl:kt,originalEvent:e})),Zt&&Zt.save()):Bn!==yo&&Bn>=0&&(In({sortable:this,name:"update",toEl:kt,originalEvent:e}),In({sortable:this,name:"sort",toEl:kt,originalEvent:e})),Se.active&&((Bn==null||Bn===-1)&&(Bn=yo,As=dl),In({sortable:this,name:"end",toEl:kt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){xn("nulling",this),It=J=kt=Le=ci=Mt=gu=Ns=si=or=Ha=Bn=As=yo=dl=so=pl=Zt=qc=Se.dragged=Se.ghost=Se.clone=Se.active=null,Eh.forEach(function(e){e.checked=!0}),Eh.length=Dd=kd=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":J&&(this._onDragOver(e),K6(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,s=0,i=r.length,o=this.options;s<i;s++)n=r[s],lr(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||q6(n));return e},sort:function(e,n){var r={},s=this.el;this.toArray().forEach(function(i,o){var a=s.children[o];lr(a,this.options.draggable,s,!1)&&(r[i]=a)},this),n&&this.captureAnimationState(),e.forEach(function(i){r[i]&&(s.removeChild(r[i]),s.appendChild(r[i]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return lr(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var s=bc.modifyOption(this,e,n);typeof s<"u"?r[e]=s:r[e]=n,e==="group"&&i1(r)},destroy:function(){xn("destroy",this);var e=this.el;e[mn]=null,Be(e,"mousedown",this._onTapStart),Be(e,"touchstart",this._onTapStart),Be(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Be(e,"dragover",this),Be(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),yh.splice(yh.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Ns){if(xn("hideClone",this),Se.eventCanceled)return;ue(Mt,"display","none"),this.options.removeCloneOnHide&&Mt.parentNode&&Mt.parentNode.removeChild(Mt),Ns=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Ns){if(xn("showClone",this),Se.eventCanceled)return;J.parentNode==It&&!this.options.group.revertClone?It.insertBefore(Mt,J):ci?It.insertBefore(Mt,ci):It.appendChild(Mt),this.options.group.revertClone&&this.animate(J,Mt),ue(Mt,"display",""),Ns=!1}}};function K6(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function eu(t,e,n,r,s,i,o,a){var l,c=t[mn],u=c.options.onMove,h;return window.CustomEvent&&!vs&&!wc?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=s||e,l.relatedRect=i||Ct(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(h=u.call(c,l,o)),h}function Ld(t){t.draggable=!1}function G6(){ug=!1}function z6(t,e,n){var r=Ct(ea(n.el,0,n.options,!0)),s=10;return e?t.clientX<r.left-s||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-s||t.clientY<r.bottom&&t.clientX<r.left}function Y6(t,e,n){var r=Ct(Av(n.el,n.options.draggable)),s=10;return e?t.clientX>r.right+s||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+s}function X6(t,e,n,r,s,i,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,h=r?n.bottom:n.right,f=!1;if(!o){if(a&&mu<c*s){if(!gl&&(pl===1?l>u+c*i/2:l<h-c*i/2)&&(gl=!0),gl)f=!0;else if(pl===1?l<u+mu:l>h-mu)return-pl}else if(l>u+c*(1-s)/2&&l<h-c*(1-s)/2)return Q6(e)}return f=f||o,f&&(l<u+c*i/2||l>h-c*i/2)?l>u+c/2?1:-1:0}function Q6(t){return Lt(J)<Lt(t)?1:-1}function q6(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function J6(t){Eh.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&Eh.push(r)}}function vu(t){return setTimeout(t,0)}function hg(t){return clearTimeout(t)}Mf&&We(document,"touchmove",function(t){(Se.active||ho)&&t.cancelable&&t.preventDefault()});Se.utils={on:We,off:Be,css:ue,find:e1,is:function(e,n){return!!lr(e,n,e,!1)},extend:M6,throttle:t1,closest:lr,toggleClass:Pt,clone:Rv,index:Lt,nextTick:vu,cancelNextTick:hg,detectDirection:s1,getChild:ea};Se.get=function(t){return t[mn]};Se.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(Se.utils=$r($r({},Se.utils),r.utils)),bc.mount(r)})};Se.create=function(t,e){return new Se(t,e)};Se.version=P6;var Ht=[],Wa,fg,dg=!1,Fd,Ud,wh,Ka;function Z6(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?We(document,"dragover",this._handleAutoScroll):this.options.supportPointer?We(document,"pointermove",this._handleFallbackAutoScroll):r.touches?We(document,"touchmove",this._handleFallbackAutoScroll):We(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Be(document,"dragover",this._handleAutoScroll):(Be(document,"pointermove",this._handleFallbackAutoScroll),Be(document,"touchmove",this._handleFallbackAutoScroll),Be(document,"mousemove",this._handleFallbackAutoScroll)),rw(),yu(),L6()},nulling:function(){wh=fg=Wa=dg=Ka=Fd=Ud=null,Ht.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var s=this,i=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(i,o);if(wh=n,r||this.options.forceAutoScrollFallback||wc||vs||hl){$d(n,this.options,a,r);var l=ks(a,!0);dg&&(!Ka||i!==Fd||o!==Ud)&&(Ka&&rw(),Ka=setInterval(function(){var c=ks(document.elementFromPoint(i,o),!0);c!==l&&(l=c,yu()),$d(n,s.options,c,r)},10),Fd=i,Ud=o)}else{if(!this.options.bubbleScroll||ks(a,!0)===Nr()){yu();return}$d(n,this.options,ks(a,!1),!1)}}},ir(t,{pluginName:"scroll",initializeByDefault:!0})}function yu(){Ht.forEach(function(t){clearInterval(t.pid)}),Ht=[]}function rw(){clearInterval(Ka)}var $d=t1(function(t,e,n,r){if(e.scroll){var s=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=Nr(),c=!1,u;fg!==n&&(fg=n,yu(),Wa=e.scroll,u=e.scrollFn,Wa===!0&&(Wa=ks(n,!0)));var h=0,f=Wa;do{var d=f,p=Ct(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,b=p.height,I=void 0,C=void 0,A=d.scrollWidth,_=d.scrollHeight,S=ue(d),N=d.scrollLeft,L=d.scrollTop;d===l?(I=E<A&&(S.overflowX==="auto"||S.overflowX==="scroll"||S.overflowX==="visible"),C=b<_&&(S.overflowY==="auto"||S.overflowY==="scroll"||S.overflowY==="visible")):(I=E<A&&(S.overflowX==="auto"||S.overflowX==="scroll"),C=b<_&&(S.overflowY==="auto"||S.overflowY==="scroll"));var U=I&&(Math.abs(g-s)<=o&&N+E<A)-(Math.abs(v-s)<=o&&!!N),k=C&&(Math.abs(y-i)<=o&&L+b<_)-(Math.abs(m-i)<=o&&!!L);if(!Ht[h])for(var O=0;O<=h;O++)Ht[O]||(Ht[O]={});(Ht[h].vx!=U||Ht[h].vy!=k||Ht[h].el!==d)&&(Ht[h].el=d,Ht[h].vx=U,Ht[h].vy=k,clearInterval(Ht[h].pid),(U!=0||k!=0)&&(c=!0,Ht[h].pid=setInterval(function(){r&&this.layer===0&&Se.active._onTouchMove(wh);var te=Ht[this.layer].vy?Ht[this.layer].vy*a:0,B=Ht[this.layer].vx?Ht[this.layer].vx*a:0;typeof u=="function"&&u.call(Se.dragged.parentNode[mn],B,te,t,wh,Ht[this.layer].el)!=="continue"||n1(Ht[this.layer].el,B,te)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==l&&(f=ks(f,!1)));dg=c}},30),l1=function(e){var n=e.originalEvent,r=e.putSortable,s=e.dragEl,i=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||i;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(h)&&(o("spill"),this.onSpill({dragEl:s,putSortable:r}))}};function xv(){}xv.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var s=ea(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(n,s):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:l1};ir(xv,{pluginName:"revertOnSpill"});function Ov(){}Ov.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,s=r||this.sortable;s.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),s.animateAll()},drop:l1};ir(Ov,{pluginName:"removeOnSpill"});var qn;function e9(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;qn=r},dragOverValid:function(n){var r=n.completed,s=n.target,i=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(s&&s!==c){var h=qn;i(s)!==!1?(Pt(s,u.swapClass,!0),qn=s):qn=null,h&&h!==qn&&Pt(h,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,s=n.putSortable,i=n.dragEl,o=s||this.sortable,a=this.options;qn&&Pt(qn,a.swapClass,!1),qn&&(a.swap||s&&s.options.swap)&&i!==qn&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),t9(i,qn),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){qn=null}},ir(t,{pluginName:"swap",eventProperties:function(){return{swapItem:qn}}})}function t9(t,e){var n=t.parentNode,r=e.parentNode,s,i;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(s=Lt(t),i=Lt(e),n.isEqualNode(r)&&s<i&&i++,n.insertBefore(e,n.children[s]),r.insertBefore(t,r.children[i]))}var Ne=[],$n=[],xa,ar,Oa=!1,On=!1,io=!1,mt,Pa,tu;function n9(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?We(document,"pointerup",this._deselectMultiDrag):(We(document,"mouseup",this._deselectMultiDrag),We(document,"touchend",this._deselectMultiDrag)),We(document,"keydown",this._checkKeyDown),We(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(s,i){var o="";Ne.length&&ar===e?Ne.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=i.textContent,s.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;mt=r},delayEnded:function(){this.isMultiDrag=~Ne.indexOf(mt)},setupClone:function(n){var r=n.sortable,s=n.cancel;if(this.isMultiDrag){for(var i=0;i<Ne.length;i++)$n.push(Rv(Ne[i])),$n[i].sortableIndex=Ne[i].sortableIndex,$n[i].draggable=!1,$n[i].style["will-change"]="",Pt($n[i],this.options.selectedClass,!1),Ne[i]===mt&&Pt($n[i],this.options.chosenClass,!1);r._hideClone(),s()}},clone:function(n){var r=n.sortable,s=n.rootEl,i=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Ne.length&&ar===r&&(sw(!0,s),i("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,s=n.rootEl,i=n.cancel;this.isMultiDrag&&(sw(!1,s),$n.forEach(function(o){ue(o,"display","")}),r(),tu=!1,i())},hideClone:function(n){var r=this;n.sortable;var s=n.cloneNowHidden,i=n.cancel;this.isMultiDrag&&($n.forEach(function(o){ue(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),s(),tu=!0,i())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&ar&&ar.multiDrag._deselectMultiDrag(),Ne.forEach(function(r){r.sortableIndex=Lt(r)}),Ne=Ne.sort(function(r,s){return r.sortableIndex-s.sortableIndex}),io=!0},dragStarted:function(n){var r=this,s=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(s.captureAnimationState(),this.options.animation)){Ne.forEach(function(o){o!==mt&&ue(o,"position","absolute")});var i=Ct(mt,!1,!0,!0);Ne.forEach(function(o){o!==mt&&Z0(o,i)}),On=!0,Oa=!0}s.animateAll(function(){On=!1,Oa=!1,r.options.animation&&Ne.forEach(function(o){Pd(o)}),r.options.sort&&nu()})}},dragOver:function(n){var r=n.target,s=n.completed,i=n.cancel;On&&~Ne.indexOf(r)&&(s(!1),i())},revert:function(n){var r=n.fromSortable,s=n.rootEl,i=n.sortable,o=n.dragRect;Ne.length>1&&(Ne.forEach(function(a){i.addAnimationState({target:a,rect:On?Ct(a):o}),Pd(a),a.fromRect=o,r.removeAnimationState(a)}),On=!1,r9(!this.options.removeCloneOnHide,s))},dragOverCompleted:function(n){var r=n.sortable,s=n.isOwner,i=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(i){if(s&&o._hideClone(),Oa=!1,c.animation&&Ne.length>1&&(On||!s&&!o.options.sort&&!l)){var u=Ct(mt,!1,!0,!0);Ne.forEach(function(f){f!==mt&&(Z0(f,u),a.appendChild(f))}),On=!0}if(!s)if(On||nu(),Ne.length>1){var h=tu;o._showClone(r),o.options.animation&&!tu&&h&&$n.forEach(function(f){o.addAnimationState({target:f,rect:Pa}),f.fromRect=Pa,f.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,s=n.isOwner,i=n.activeSortable;if(Ne.forEach(function(a){a.thisAnimationDuration=null}),i.options.animation&&!s&&i.multiDrag.isMultiDrag){Pa=ir({},r);var o=Si(mt,!0);Pa.top-=o.f,Pa.left-=o.e}},dragOverAnimationComplete:function(){On&&(On=!1,nu())},drop:function(n){var r=n.originalEvent,s=n.rootEl,i=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var h=this.options,f=i.children;if(!io)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),Pt(mt,h.selectedClass,!~Ne.indexOf(mt)),~Ne.indexOf(mt))Ne.splice(Ne.indexOf(mt),1),xa=null,Va({sortable:o,rootEl:s,name:"deselect",targetEl:mt,originalEvt:r});else{if(Ne.push(mt),Va({sortable:o,rootEl:s,name:"select",targetEl:mt,originalEvt:r}),r.shiftKey&&xa&&o.el.contains(xa)){var d=Lt(xa),p=Lt(mt);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~Ne.indexOf(f[y])||(Pt(f[y],h.selectedClass,!0),Ne.push(f[y]),Va({sortable:o,rootEl:s,name:"select",targetEl:f[y],originalEvt:r}))}}else xa=mt;ar=u}if(io&&this.isMultiDrag){if(On=!1,(i[mn].options.sort||i!==s)&&Ne.length>1){var v=Ct(mt),g=Lt(mt,":not(."+this.options.selectedClass+")");if(!Oa&&h.animation&&(mt.thisAnimationDuration=null),u.captureAnimationState(),!Oa&&(h.animation&&(mt.fromRect=v,Ne.forEach(function(b){if(b.thisAnimationDuration=null,b!==mt){var I=On?Ct(b):v;b.fromRect=I,u.addAnimationState({target:b,rect:I})}})),nu(),Ne.forEach(function(b){f[g]?i.insertBefore(b,f[g]):i.appendChild(b),g++}),l===Lt(mt))){var E=!1;Ne.forEach(function(b){if(b.sortableIndex!==Lt(b)){E=!0;return}}),E&&a("update")}Ne.forEach(function(b){Pd(b)}),u.animateAll()}ar=u}(s===i||c&&c.lastPutMode!=="clone")&&$n.forEach(function(b){b.parentNode&&b.parentNode.removeChild(b)})}},nullingGlobal:function(){this.isMultiDrag=io=!1,$n.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Be(document,"pointerup",this._deselectMultiDrag),Be(document,"mouseup",this._deselectMultiDrag),Be(document,"touchend",this._deselectMultiDrag),Be(document,"keydown",this._checkKeyDown),Be(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof io<"u"&&io)&&ar===this.sortable&&!(n&&lr(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;Ne.length;){var r=Ne[0];Pt(r,this.options.selectedClass,!1),Ne.shift(),Va({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},ir(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[mn];!r||!r.options.multiDrag||~Ne.indexOf(n)||(ar&&ar!==r&&(ar.multiDrag._deselectMultiDrag(),ar=r),Pt(n,r.options.selectedClass,!0),Ne.push(n))},deselect:function(n){var r=n.parentNode[mn],s=Ne.indexOf(n);!r||!r.options.multiDrag||!~s||(Pt(n,r.options.selectedClass,!1),Ne.splice(s,1))}},eventProperties:function(){var n=this,r=[],s=[];return Ne.forEach(function(i){r.push({multiDragElement:i,index:i.sortableIndex});var o;On&&i!==mt?o=-1:On?o=Lt(i,":not(."+n.options.selectedClass+")"):o=Lt(i),s.push({multiDragElement:i,index:o})}),{items:C6(Ne),clones:[].concat($n),oldIndicies:r,newIndicies:s}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function r9(t,e){Ne.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function sw(t,e){$n.forEach(function(n,r){var s=e.children[n.sortableIndex+(t?Number(r):0)];s?e.insertBefore(n,s):e.appendChild(n)})}function nu(){Ne.forEach(function(t){t!==mt&&t.parentNode&&t.parentNode.removeChild(t)})}Se.mount(new Z6);Se.mount(Ov,xv);const s9=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:n9,Sortable:Se,Swap:e9,default:Se},Symbol.toStringTag,{value:"Module"})),i9=QC(s9);(function(t,e){(function(r,s){t.exports=s(ma,i9)})(typeof self<"u"?self:hj,function(n,r){return function(s){var i={};function o(a){if(i[a])return i[a].exports;var l=i[a]={i:a,l:!1,exports:{}};return s[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=i,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(h){return a[h]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(s,i,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",s.exports=String(c)==="[object z]"},"0366":function(s,i,o){var a=o("1c0b");s.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(h){return l.call(c,h)};case 2:return function(h,f){return l.call(c,h,f)};case 3:return function(h,f,d){return l.call(c,h,f,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(s,i,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(f){try{return l(f)}catch{return u.slice()}};s.exports.f=function(d){return u&&c.call(d)=="[object Window]"?h(d):l(a(d))}},"06cf":function(s,i,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),h=o("c04e"),f=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;i.f=a?p:function(y,v){if(y=u(y),v=h(v,!0),d)try{return p(y,v)}catch{}if(f(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("cc12");s.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(s,i,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),h=c("reduce"),f=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!h||!f},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(s,i,o){var a=o("c6b6"),l=o("9263");s.exports=function(c,u){var h=c.exec;if(typeof h=="function"){var f=h.call(c,u);if(typeof f!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return f}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var h in l){var f=a[h],d=f&&f.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(s,i,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),h=c("forEach");s.exports=!u||!h?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(s,i,o){var a=o("d066");s.exports=a("document","documentElement")},"1c0b":function(s,i){s.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(s,i,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,h={next:function(){return{done:!!u++}},return:function(){c=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch{}s.exports=function(f,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},f(m)}catch{}return p}},"1d80":function(s,i){s.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(s,i,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");s.exports=function(h){return c>=51||!a(function(){var f=[],d=f.constructor={};return d[u]=function(){return{foo:1}},f[h](Boolean).foo!==1})}},"23cb":function(s,i,o){var a=o("a691"),l=Math.max,c=Math.min;s.exports=function(u,h){var f=a(u);return f<0?l(f+h,0):c(f,h)}},"23e7":function(s,i,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),h=o("ce4e"),f=o("e893"),d=o("94ca");s.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,b,I,C,A,_;if(v?b=a:g?b=a[y]||h(y,{}):b=(a[y]||{}).prototype,b)for(I in m){if(A=m[I],p.noTargetGet?(_=l(b,I),C=_&&_.value):C=b[I],E=d(v?I:y+(g?".":"#")+I,p.forced),!E&&C!==void 0){if(typeof A==typeof C)continue;f(A,C)}(p.sham||C&&C.sham)&&c(A,"sham",!0),u(b,I,A,p)}}},"241c":function(s,i,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");i.f=Object.getOwnPropertyNames||function(h){return a(h,c)}},"25f0":function(s,i,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=h;(p||m)&&a(RegExp.prototype,h,function(){var v=l(this),g=String(v.source),E=v.flags,b=String(E===void 0&&v instanceof RegExp&&!("flags"in f)?u.call(v):E);return"/"+g+"/"+b},{unsafe:!0})},"2ca0":function(s,i,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),h=o("1d80"),f=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=f("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var b=String(h(this));u(E);var I=c(m(arguments.length>1?arguments[1]:void 0,b.length)),C=String(E);return p?p.call(b,C,I):b.slice(I,I+C.length)===C}})},"2d00":function(s,i,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,h=u&&u.v8,f,d;h?(f=h.split("."),d=f[0]+f[1]):l&&(f=l.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=l.match(/Chrome\/(\d+)/),f&&(d=f[1]))),s.exports=d&&+d},"342f":function(s,i,o){var a=o("d066");s.exports=a("navigator","userAgent")||""},"35a1":function(s,i,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");s.exports=function(h){if(h!=null)return h[u]||h["@@iterator"]||l[a(h)]}},"37e8":function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");s.exports=a?Object.defineProperties:function(f,d){c(f);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(f,v=p[y++],d[v]);return f}},"3bbe":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(s,i,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",h=l.set,f=l.getterFor(u);c(String,"String",function(d){h(this,{type:u,string:String(d),index:0})},function(){var p=f(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(s,i){s.exports={}},4160:function(s,i,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(s,i,o){var a=o("da84");s.exports=a},"44ad":function(s,i,o){var a=o("d039"),l=o("c6b6"),c="".split;s.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(s,i,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),h=Array.prototype;h[u]==null&&c.f(h,u,{configurable:!0,value:l(null)}),s.exports=function(f){h[u][f]=!0}},"44e7":function(s,i,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");s.exports=function(h){var f;return a(h)&&((f=h[u])!==void 0?!!f:l(h)=="RegExp")}},4930:function(s,i,o){var a=o("d039");s.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(s,i,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(h){return function(f,d,p){var m=a(f),y=l(m.length),v=c(p,y),g;if(h&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((h||v in m)&&m[v]===d)return h||v||0;return!h&&-1}};s.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(s,i,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),h=c("filter"),f=u("filter");a({target:"Array",proto:!0,forced:!h||!f},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(s,i,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),h=o("50c4"),f=o("8418"),d=o("35a1");s.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,b=E!==void 0,I=d(y),C=0,A,_,S,N,L,U;if(b&&(E=a(E,g>2?arguments[2]:void 0,2)),I!=null&&!(v==Array&&u(I)))for(N=I.call(y),L=N.next,_=new v;!(S=L.call(N)).done;C++)U=b?c(N,E,[S.value,C],!0):S.value,f(_,C,U);else for(A=h(y.length),_=new v(A);A>C;C++)U=b?E(y[C],C):y[C],f(_,C,U);return _.length=C,_}},"4fad":function(s,i,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(s,i,o){var a=o("a691"),l=Math.min;s.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(s,i){var o={}.hasOwnProperty;s.exports=function(a,l){return o.call(a,l)}},5319:function(s,i,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),h=o("a691"),f=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,b=function(I){return I===void 0?I:String(I)};a("replace",2,function(I,C,A,_){var S=_.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,N=_.REPLACE_KEEPS_$0,L=S?"$":"$0";return[function(O,te){var B=f(this),Z=O==null?void 0:O[I];return Z!==void 0?Z.call(O,B,te):C.call(String(B),O,te)},function(k,O){if(!S&&N||typeof O=="string"&&O.indexOf(L)===-1){var te=A(C,k,this,O);if(te.done)return te.value}var B=l(k),Z=String(this),ce=typeof O=="function";ce||(O=String(O));var He=B.global;if(He){var yt=B.unicode;B.lastIndex=0}for(var Ye=[];;){var je=p(B,Z);if(je===null||(Ye.push(je),!He))break;var gt=String(je[0]);gt===""&&(B.lastIndex=d(Z,u(B.lastIndex),yt))}for(var Ot="",M=0,z=0;z<Ye.length;z++){je=Ye[z];for(var H=String(je[0]),ie=m(y(h(je.index),Z.length),0),Te=[],et=1;et<je.length;et++)Te.push(b(je[et]));var Ce=je.groups;if(ce){var w=[H].concat(Te,ie,Z);Ce!==void 0&&w.push(Ce);var T=String(O.apply(void 0,w))}else T=U(H,Z,ie,Te,Ce,O);ie>=M&&(Ot+=Z.slice(M,ie)+T,M=ie+H.length)}return Ot+Z.slice(M)}];function U(k,O,te,B,Z,ce){var He=te+k.length,yt=B.length,Ye=E;return Z!==void 0&&(Z=c(Z),Ye=g),C.call(ce,Ye,function(je,gt){var Ot;switch(gt.charAt(0)){case"$":return"$";case"&":return k;case"`":return O.slice(0,te);case"'":return O.slice(He);case"<":Ot=Z[gt.slice(1,-1)];break;default:var M=+gt;if(M===0)return je;if(M>yt){var z=v(M/10);return z===0?je:z<=yt?B[z-1]===void 0?gt.charAt(1):B[z-1]+gt.charAt(1):je}Ot=B[M-1]}return Ot===void 0?"":Ot})}})},5692:function(s,i,o){var a=o("c430"),l=o("c6cd");(s.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(s,i,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");s.exports=a("Reflect","ownKeys")||function(f){var d=l.f(u(f)),p=c.f;return p?d.concat(p(f)):d}},"5a34":function(s,i,o){var a=o("44e7");s.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(s,i){s.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(s,i,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),h=o("1c0b"),f=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return h(p),v=f(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(s,i,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(h,f){var d=String(l(h)),p=a(f),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};s.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(s,i,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");s.exports=function(h,f){var d;return l(h)&&(d=h.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(f===0?0:f)}},"69f3":function(s,i,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),h=o("5135"),f=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(S){return v(S)?y(S):m(S,{})},E=function(S){return function(N){var L;if(!c(N)||(L=y(N)).type!==S)throw TypeError("Incompatible receiver, "+S+" required");return L}};if(a){var b=new p,I=b.get,C=b.has,A=b.set;m=function(S,N){return A.call(b,S,N),N},y=function(S){return I.call(b,S)||{}},v=function(S){return C.call(b,S)}}else{var _=f("state");d[_]=!0,m=function(S,N){return u(S,_,N),N},y=function(S){return h(S,_)?S[_]:{}},v=function(S){return h(S,_)}}s.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(s,i,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),h=o("8925"),f=o("69f3"),d=f.get,p=f.enforce,m=String(String).split("String");(s.exports=function(y,v,g,E){var b=E?!!E.unsafe:!1,I=E?!!E.enumerable:!1,C=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){I?y[v]=g:u(v,g);return}else b?!C&&y[v]&&(I=!0):delete y[v];I?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||h(this)})},"6f53":function(s,i,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,h=function(f){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(f?[E,p[E]]:p[E]);return g}};s.exports={entries:h(!0),values:h(!1)}},"73d9":function(s,i,o){var a=o("44d2");a("flatMap")},7418:function(s,i){i.f=Object.getOwnPropertySymbols},"746f":function(s,i,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;s.exports=function(h){var f=a.Symbol||(a.Symbol={});l(f,h)||u(f,h,{value:c.f(h)})}},7839:function(s,i){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(s,i,o){var a=o("1d80");s.exports=function(l){return Object(a(l))}},"7c73":function(s,i,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),h=o("1be4"),f=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},b=function(S){return m+v+p+S+m+"/"+v+p},I=function(S){S.write(b("")),S.close();var N=S.parentWindow.Object;return S=null,N},C=function(){var S=f("iframe"),N="java"+v+":",L;return S.style.display="none",h.appendChild(S),S.src=String(N),L=S.contentWindow.document,L.open(),L.write(b("document.F=Object")),L.close(),L.F},A,_=function(){try{A=document.domain&&new ActiveXObject("htmlfile")}catch{}_=A?I(A):C();for(var S=c.length;S--;)delete _[y][c[S]];return _()};u[g]=!0,s.exports=Object.create||function(N,L){var U;return N!==null?(E[y]=a(N),U=new E,E[y]=null,U[g]=N):U=_(),L===void 0?U:l(U,L)}},"7dd0":function(s,i,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),h=o("d44e"),f=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,b=p("iterator"),I="keys",C="values",A="entries",_=function(){return this};s.exports=function(S,N,L,U,k,O,te){l(L,N,U);var B=function(z){if(z===k&&Ye)return Ye;if(!E&&z in He)return He[z];switch(z){case I:return function(){return new L(this,z)};case C:return function(){return new L(this,z)};case A:return function(){return new L(this,z)}}return function(){return new L(this)}},Z=N+" Iterator",ce=!1,He=S.prototype,yt=He[b]||He["@@iterator"]||k&&He[k],Ye=!E&&yt||B(k),je=N=="Array"&&He.entries||yt,gt,Ot,M;if(je&&(gt=c(je.call(new S)),g!==Object.prototype&&gt.next&&(!m&&c(gt)!==g&&(u?u(gt,g):typeof gt[b]!="function"&&f(gt,b,_)),h(gt,Z,!0,!0),m&&(y[Z]=_))),k==C&&yt&&yt.name!==C&&(ce=!0,Ye=function(){return yt.call(this)}),(!m||te)&&He[b]!==Ye&&f(He,b,Ye),y[N]=Ye,k)if(Ot={values:B(C),keys:O?Ye:B(I),entries:B(A)},te)for(M in Ot)(E||ce||!(M in He))&&d(He,M,Ot[M]);else a({target:N,proto:!0,forced:E||ce},Ot);return Ot}},"7f9a":function(s,i,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;s.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(s,i,o){var a=o("861d");s.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(s,i,o){var a=o("d039");s.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(s,i,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");s.exports=function(u,h,f){var d=a(h);d in u?l.f(u,d,c(0,f)):u[d]=f}},"861d":function(s,i){s.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(s,i,o){var a,l,c;(function(u,h){l=[],a=h,c=typeof a=="function"?a.apply(i,l):a,c!==void 0&&(s.exports=c)})(typeof self<"u"?self:this,function(){function u(){var h=Object.getOwnPropertyDescriptor(document,"currentScript");if(!h&&"currentScript"in document&&document.currentScript||h&&h.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(A){var f=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=f.exec(A.stack)||d.exec(A.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,b,I=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),b=g.replace(E,"$1").trim());for(var C=0;C<I.length;C++)if(I[C].readyState==="interactive"||I[C].src===m||m===v&&I[C].innerHTML&&I[C].innerHTML.trim()===b)return I[C];return null}}return u})},8925:function(s,i,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),s.exports=a.inspectSource},"8aa5":function(s,i,o){var a=o("6547").charAt;s.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(s,i){s.exports=n},"90e3":function(s,i){var o=0,a=Math.random();s.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(s,i,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");s.exports=a?function(u,h,f){return l.f(u,h,c(1,f))}:function(u,h,f){return u[h]=f,u}},9263:function(s,i,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,h=c,f=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=f||p||d;m&&(h=function(v){var g=this,E,b,I,C,A=d&&g.sticky,_=a.call(g),S=g.source,N=0,L=v;return A&&(_=_.replace("y",""),_.indexOf("g")===-1&&(_+="g"),L=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(S="(?: "+S+")",L=" "+L,N++),b=new RegExp("^(?:"+S+")",_)),p&&(b=new RegExp("^"+S+"$(?!\\s)",_)),f&&(E=g.lastIndex),I=c.call(A?b:g,L),A?I?(I.input=I.input.slice(N),I[0]=I[0].slice(N),I.index=g.lastIndex,g.lastIndex+=I[0].length):g.lastIndex=0:f&&I&&(g.lastIndex=g.global?I.index+I[0].length:E),p&&I&&I.length>1&&u.call(I[0],b,function(){for(C=1;C<arguments.length-2;C++)arguments[C]===void 0&&(I[C]=void 0)}),I}),s.exports=h},"94ca":function(s,i,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=h[u(p)];return y==d?!0:y==f?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},h=c.data={},f=c.NATIVE="N",d=c.POLYFILL="P";s.exports=c},"99af":function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),h=o("7b0b"),f=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,b="Maximum allowed index exceeded",I=v>=51||!l(function(){var S=[];return S[g]=!1,S.concat()[0]!==S}),C=m("concat"),A=function(S){if(!u(S))return!1;var N=S[g];return N!==void 0?!!N:c(S)},_=!I||!C;a({target:"Array",proto:!0,forced:_},{concat:function(N){var L=h(this),U=p(L,0),k=0,O,te,B,Z,ce;for(O=-1,B=arguments.length;O<B;O++)if(ce=O===-1?L:arguments[O],A(ce)){if(Z=f(ce.length),k+Z>E)throw TypeError(b);for(te=0;te<Z;te++,k++)te in ce&&d(U,k,ce[te])}else{if(k>=E)throw TypeError(b);d(U,k++,ce)}return U.length=k,U}})},"9bdd":function(s,i,o){var a=o("825a");s.exports=function(l,c,u,h){try{return h?c(a(u)[0],u[1]):c(u)}catch(d){var f=l.return;throw f!==void 0&&a(f.call(l)),d}}},"9bf2":function(s,i,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),h=Object.defineProperty;i.f=a?h:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return h(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(s,i,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),h=o("3f8c"),f=function(){return this};s.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),h[y]=f,d}},"9f7f":function(s,i,o){var a=o("d039");function l(c,u){return RegExp(c,u)}i.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),i.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(s,i,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(h,f,d,p,m,y,v,g){for(var E=m,b=0,I=v?c(v,g,3):!1,C;b<p;){if(b in d){if(C=I?I(d[b],b,f):d[b],y>0&&a(C))E=u(h,f,C,l(C.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");h[E]=C}E++}b++}return E};s.exports=u},a352:function(s,i){s.exports=r},a434:function(s,i,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),h=o("7b0b"),f=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,b=9007199254740991,I="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(A,_){var S=h(this),N=u(S.length),L=l(A,N),U=arguments.length,k,O,te,B,Z,ce;if(U===0?k=O=0:U===1?(k=0,O=N-L):(k=U-2,O=E(g(c(_),0),N-L)),N+k-O>b)throw TypeError(I);for(te=f(S,O),B=0;B<O;B++)Z=L+B,Z in S&&d(te,B,S[Z]);if(te.length=O,k<O){for(B=L;B<N-O;B++)Z=B+O,ce=B+k,Z in S?S[ce]=S[Z]:delete S[ce];for(B=N;B>N-O+k;B--)delete S[B-1]}else if(k>O)for(B=N-O;B>L;B--)Z=B+O-1,ce=B+k-1,Z in S?S[ce]=S[Z]:delete S[ce];for(B=0;B<k;B++)S[B+L]=arguments[B+2];return S.length=N-O+k,te}})},a4d3:function(s,i,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),h=o("83ab"),f=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),b=o("fc6a"),I=o("c04e"),C=o("5c6c"),A=o("7c73"),_=o("df75"),S=o("241c"),N=o("057f"),L=o("7418"),U=o("06cf"),k=o("9bf2"),O=o("d1e7"),te=o("9112"),B=o("6eeb"),Z=o("5692"),ce=o("f772"),He=o("d012"),yt=o("90e3"),Ye=o("b622"),je=o("e538"),gt=o("746f"),Ot=o("d44e"),M=o("69f3"),z=o("b727").forEach,H=ce("hidden"),ie="Symbol",Te="prototype",et=Ye("toPrimitive"),Ce=M.set,w=M.getterFor(ie),T=Object[Te],P=l.Symbol,F=c("JSON","stringify"),$=U.f,G=k.f,ne=N.f,q=O.f,Q=Z("symbols"),j=Z("op-symbols"),fe=Z("string-to-symbol-registry"),ae=Z("symbol-to-string-registry"),de=Z("wks"),we=l.QObject,ke=!we||!we[Te]||!we[Te].findChild,st=h&&p(function(){return A(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a!=7})?function(Ae,pe,_e){var Ge=$(T,pe);Ge&&delete T[pe],G(Ae,pe,_e),Ge&&Ae!==T&&G(T,pe,Ge)}:G,Xe=function(Ae,pe){var _e=Q[Ae]=A(P[Te]);return Ce(_e,{type:ie,tag:Ae,description:pe}),h||(_e.description=pe),_e},R=d?function(Ae){return typeof Ae=="symbol"}:function(Ae){return Object(Ae)instanceof P},x=function(pe,_e,Ge){pe===T&&x(j,_e,Ge),g(pe);var tt=I(_e,!0);return g(Ge),m(Q,tt)?(Ge.enumerable?(m(pe,H)&&pe[H][tt]&&(pe[H][tt]=!1),Ge=A(Ge,{enumerable:C(0,!1)})):(m(pe,H)||G(pe,H,C(1,{})),pe[H][tt]=!0),st(pe,tt,Ge)):G(pe,tt,Ge)},D=function(pe,_e){g(pe);var Ge=b(_e),tt=_(Ge).concat(Me(Ge));return z(tt,function(Rn){(!h||oe.call(Ge,Rn))&&x(pe,Rn,Ge[Rn])}),pe},V=function(pe,_e){return _e===void 0?A(pe):D(A(pe),_e)},oe=function(pe){var _e=I(pe,!0),Ge=q.call(this,_e);return this===T&&m(Q,_e)&&!m(j,_e)?!1:Ge||!m(this,_e)||!m(Q,_e)||m(this,H)&&this[H][_e]?Ge:!0},be=function(pe,_e){var Ge=b(pe),tt=I(_e,!0);if(!(Ge===T&&m(Q,tt)&&!m(j,tt))){var Rn=$(Ge,tt);return Rn&&m(Q,tt)&&!(m(Ge,H)&&Ge[H][tt])&&(Rn.enumerable=!0),Rn}},me=function(pe){var _e=ne(b(pe)),Ge=[];return z(_e,function(tt){!m(Q,tt)&&!m(He,tt)&&Ge.push(tt)}),Ge},Me=function(pe){var _e=pe===T,Ge=ne(_e?j:b(pe)),tt=[];return z(Ge,function(Rn){m(Q,Rn)&&(!_e||m(T,Rn))&&tt.push(Q[Rn])}),tt};if(f||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor");var pe=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),_e=yt(pe),Ge=function(tt){this===T&&Ge.call(j,tt),m(this,H)&&m(this[H],_e)&&(this[H][_e]=!1),st(this,_e,C(1,tt))};return h&&ke&&st(T,_e,{configurable:!0,set:Ge}),Xe(_e,pe)},B(P[Te],"toString",function(){return w(this).tag}),B(P,"withoutSetter",function(Ae){return Xe(yt(Ae),Ae)}),O.f=oe,k.f=x,U.f=be,S.f=N.f=me,L.f=Me,je.f=function(Ae){return Xe(Ye(Ae),Ae)},h&&(G(P[Te],"description",{configurable:!0,get:function(){return w(this).description}}),u||B(T,"propertyIsEnumerable",oe,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:P}),z(_(de),function(Ae){gt(Ae)}),a({target:ie,stat:!0,forced:!f},{for:function(Ae){var pe=String(Ae);if(m(fe,pe))return fe[pe];var _e=P(pe);return fe[pe]=_e,ae[_e]=pe,_e},keyFor:function(pe){if(!R(pe))throw TypeError(pe+" is not a symbol");if(m(ae,pe))return ae[pe]},useSetter:function(){ke=!0},useSimple:function(){ke=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!h},{create:V,defineProperty:x,defineProperties:D,getOwnPropertyDescriptor:be}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:me,getOwnPropertySymbols:Me}),a({target:"Object",stat:!0,forced:p(function(){L.f(1)})},{getOwnPropertySymbols:function(pe){return L.f(E(pe))}}),F){var St=!f||p(function(){var Ae=P();return F([Ae])!="[null]"||F({a:Ae})!="{}"||F(Object(Ae))!="{}"});a({target:"JSON",stat:!0,forced:St},{stringify:function(pe,_e,Ge){for(var tt=[pe],Rn=1,Lf;arguments.length>Rn;)tt.push(arguments[Rn++]);if(Lf=_e,!(!v(_e)&&pe===void 0||R(pe)))return y(_e)||(_e=function(h1,Tc){if(typeof Lf=="function"&&(Tc=Lf.call(this,h1,Tc)),!R(Tc))return Tc}),tt[1]=_e,F.apply(null,tt)}})}P[Te][et]||te(P[Te],et,P[Te].valueOf),Ot(P,ie),He[H]=!0},a630:function(s,i,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(h){Array.from(h)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(s,i,o){var a=o("d039");s.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(s,i){var o=Math.ceil,a=Math.floor;s.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(s,i,o){var a=o("b622"),l=a("match");s.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(s,i,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(s,i,o){var a=o("825a");s.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(s,i,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,h={},f=function(d){throw d};s.exports=function(d,p){if(c(h,d))return h[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:f,g=c(p,1)?p[1]:void 0;return h[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:f}):E[1]=1,m.call(E,v,g)})}},ae93:function(s,i,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),h=o("c430"),f=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!h&&!c(m,f)&&l(m,f,p),s.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(s,i,o){var a=o("00ee"),l=o("f5df");s.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(s,i,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,h=/^\s*function ([^ (]*)/,f="name";a&&!(f in c)&&l(c,f,{configurable:!0,get:function(){try{return u.call(this).match(h)[1]}catch{return""}}})},b622:function(s,i,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),h=o("4930"),f=o("fdbf"),d=l("wks"),p=a.Symbol,m=f?p:p&&p.withoutSetter||u;s.exports=function(y){return c(d,y)||(h&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(s,i,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),h=u(function(){c(1)});a({target:"Object",stat:!0,forced:h},{keys:function(d){return c(l(d))}})},b727:function(s,i,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),h=o("65f0"),f=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,b=p==5||E;return function(I,C,A,_){for(var S=c(I),N=l(S),L=a(C,A,3),U=u(N.length),k=0,O=_||h,te=m?O(I,U):y?O(I,0):void 0,B,Z;U>k;k++)if((b||k in N)&&(B=N[k],Z=L(B,k,S),p)){if(m)te[k]=Z;else if(Z)switch(p){case 3:return!0;case 5:return B;case 6:return k;case 2:f.call(te,B)}else if(g)return!1}return E?-1:v||g?g:te}};s.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(s,i,o){var a=o("861d");s.exports=function(l,c){if(!a(l))return l;var u,h;if(c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(h=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l)))return h;throw TypeError("Can't convert object to primitive value")}},c430:function(s,i){s.exports=!1},c6b6:function(s,i){var o={}.toString;s.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(s,i,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});s.exports=u},c740:function(s,i,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),h="findIndex",f=!0,d=u(h);h in[]&&Array(1)[h](function(){f=!1}),a({target:"Array",proto:!0,forced:f||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(h)},c8ba:function(s,i){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}s.exports=o},c975:function(s,i,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),h=[].indexOf,f=!!h&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:f||!d||!p},{indexOf:function(y){return f?h.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(s,i,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");s.exports=function(h,f){var d=l(h),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;f.length>p;)a(d,y=f[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(s,i,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),h=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!h},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(s,i,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);s.exports=function(h){return u?c.createElement(h):{}}},ce4e:function(s,i,o){var a=o("da84"),l=o("9112");s.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(s,i){s.exports={}},d039:function(s,i){s.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(s,i,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};s.exports=function(u,h){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][h]||l[u]&&l[u][h]}},d1e7:function(s,i,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);i.f=c?function(h){var f=l(this,h);return!!f&&f.enumerable}:a},d28b:function(s,i,o){var a=o("746f");a("iterator")},d2bb:function(s,i,o){var a=o("825a"),l=o("3bbe");s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},h;try{h=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,h.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?h.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(s,i,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(s,i,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");s.exports=function(h,f,d){h&&!l(h=d?h:h.prototype,u)&&a(h,u,{configurable:!0,value:f})}},d58f:function(s,i,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),h=function(f){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),b=f?E-1:0,I=f?-1:1;if(m<2)for(;;){if(b in g){y=g[b],b+=I;break}if(b+=I,f?b<0:E<=b)throw TypeError("Reduce of empty array with no initial value")}for(;f?b>=0:E>b;b+=I)b in g&&(y=p(y,g[b],b,v));return y}};s.exports={left:h(!1),right:h(!0)}},d784:function(s,i,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),h=o("9112"),f=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var b="ab".split(g);return b.length!==2||b[0]!=="a"||b[1]!=="b"});s.exports=function(g,E,b,I){var C=c(g),A=!l(function(){var k={};return k[C]=function(){return 7},""[g](k)!=7}),_=A&&!l(function(){var k=!1,O=/a/;return g==="split"&&(O={},O.constructor={},O.constructor[f]=function(){return O},O.flags="",O[C]=/./[C]),O.exec=function(){return k=!0,null},O[C](""),!k});if(!A||!_||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var S=/./[C],N=b(C,""[g],function(k,O,te,B,Z){return O.exec===u?A&&!Z?{done:!0,value:S.call(O,te,B)}:{done:!0,value:k.call(te,O,B)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),L=N[0],U=N[1];a(String.prototype,g,L),a(RegExp.prototype,C,E==2?function(k,O){return U.call(k,this,O)}:function(k){return U.call(k,this)})}I&&h(RegExp.prototype[C],"sham",!0)}},d81d:function(s,i,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),h=c("map"),f=u("map");a({target:"Array",proto:!0,forced:!h||!f},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(s,i,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};s.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),h=o("06cf"),f=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=h.f,v=c(m),g={},E=0,b,I;v.length>E;)I=y(m,b=v[E++]),I!==void 0&&f(g,b,I);return g}})},dbf1:function(s,i,o){(function(a){o.d(i,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(s,i,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),h=o("b622"),f=h("iterator"),d=h("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[f]!==p)try{u(v,f,p)}catch{v[f]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(s,i,o){var a=o("ca84"),l=o("7839");s.exports=Object.keys||function(u){return a(u,l)}},e01a:function(s,i,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),h=o("861d"),f=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var C=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),A=this instanceof y?new p(C):C===void 0?p():p(C);return C===""&&(m[A]=!0),A};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",b=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var C=h(this)?this.valueOf():this,A=g.call(C);if(u(m,C))return"";var _=E?A.slice(7,-1):A.replace(b,"$1");return _===""?void 0:_}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(s,i,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),h=c("IE_PROTO"),f=Object.prototype;s.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,h)?d[h]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?f:null}},e177:function(s,i,o){var a=o("d039");s.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(s,i,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),h=o("7dd0"),f="Array Iterator",d=u.set,p=u.getterFor(f);s.exports=h(Array,"Array",function(m,y){d(this,{type:f,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(s,i,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,h=o("83ab"),f=l(function(){u(1)}),d=!h||f;a({target:"Object",stat:!0,forced:d,sham:!h},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(s,i,o){var a=o("b622");i.f=a},e893:function(s,i,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");s.exports=function(h,f){for(var d=l(f),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(h,v)||p(h,v,m(f,v))}}},e8b5:function(s,i,o){var a=o("c6b6");s.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(s,i,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;s.exports=function(h){return h!==void 0&&(l.Array===h||u[c]===h)}},f5df:function(s,i,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),h=l(function(){return arguments}())=="Arguments",f=function(d,p){try{return d[p]}catch{}};s.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=f(p=Object(d),u))=="string"?m:h?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(s,i,o){var a=o("5692"),l=o("90e3"),c=a("keys");s.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(s,i,o){if(o.r(i),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(R,x,D){return x in R?Object.defineProperty(R,x,{value:D,enumerable:!0,configurable:!0,writable:!0}):R[x]=D,R}function h(R,x){var D=Object.keys(R);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(R);x&&(V=V.filter(function(oe){return Object.getOwnPropertyDescriptor(R,oe).enumerable})),D.push.apply(D,V)}return D}function f(R){for(var x=1;x<arguments.length;x++){var D=arguments[x]!=null?arguments[x]:{};x%2?h(Object(D),!0).forEach(function(V){u(R,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(V){Object.defineProperty(R,V,Object.getOwnPropertyDescriptor(D,V))})}return R}function d(R){if(Array.isArray(R))return R}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(R,x){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(R)))){var D=[],V=!0,oe=!1,be=void 0;try{for(var me=R[Symbol.iterator](),Me;!(V=(Me=me.next()).done)&&(D.push(Me.value),!(x&&D.length===x));V=!0);}catch(St){oe=!0,be=St}finally{try{!V&&me.return!=null&&me.return()}finally{if(oe)throw be}}return D}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(R,x){(x==null||x>R.length)&&(x=R.length);for(var D=0,V=new Array(x);D<x;D++)V[D]=R[D];return V}function y(R,x){if(R){if(typeof R=="string")return m(R,x);var D=Object.prototype.toString.call(R).slice(8,-1);if(D==="Object"&&R.constructor&&(D=R.constructor.name),D==="Map"||D==="Set")return Array.from(R);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(R,x)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(R,x){return d(R)||p(R,x)||y(R,x)||v()}function E(R){if(Array.isArray(R))return m(R)}function b(R){if(typeof Symbol<"u"&&Symbol.iterator in Object(R))return Array.from(R)}function I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(R){return E(R)||b(R)||y(R)||I()}var A=o("a352"),_=o.n(A);function S(R){R.parentElement!==null&&R.parentElement.removeChild(R)}function N(R,x,D){var V=D===0?R.children[0]:R.children[D-1].nextSibling;R.insertBefore(x,V)}var L=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(R){var x=Object.create(null);return function(V){var oe=x[V];return oe||(x[V]=R(V))}}var k=/-(\w)/g,O=U(function(R){return R.replace(k,function(x,D){return D.toUpperCase()})});o("5db7"),o("73d9");var te=["Start","Add","Remove","Update","End"],B=["Choose","Unchoose","Sort","Filter","Clone"],Z=["Move"],ce=[Z,te,B].flatMap(function(R){return R}).map(function(R){return"on".concat(R)}),He={manage:Z,manageAndEmit:te,emit:B};function yt(R){return ce.indexOf(R)!==-1}o("caad"),o("2ca0");var Ye=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function je(R){return Ye.includes(R)}function gt(R){return["transition-group","TransitionGroup"].includes(R)}function Ot(R){return["id","class","role","style"].includes(R)||R.startsWith("data-")||R.startsWith("aria-")||R.startsWith("on")}function M(R){return R.reduce(function(x,D){var V=g(D,2),oe=V[0],be=V[1];return x[oe]=be,x},{})}function z(R){var x=R.$attrs,D=R.componentData,V=D===void 0?{}:D,oe=M(Object.entries(x).filter(function(be){var me=g(be,2),Me=me[0];return me[1],Ot(Me)}));return f(f({},oe),V)}function H(R){var x=R.$attrs,D=R.callBackBuilder,V=M(ie(x));Object.entries(D).forEach(function(be){var me=g(be,2),Me=me[0],St=me[1];He[Me].forEach(function(Ae){V["on".concat(Ae)]=St(Ae)})});var oe="[data-draggable]".concat(V.draggable||"");return f(f({},V),{},{draggable:oe})}function ie(R){return Object.entries(R).filter(function(x){var D=g(x,2),V=D[0];return D[1],!Ot(V)}).map(function(x){var D=g(x,2),V=D[0],oe=D[1];return[O(V),oe]}).filter(function(x){var D=g(x,2),V=D[0];return D[1],!yt(V)})}o("c740");function Te(R,x){if(!(R instanceof x))throw new TypeError("Cannot call a class as a function")}function et(R,x){for(var D=0;D<x.length;D++){var V=x[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(R,V.key,V)}}function Ce(R,x,D){return x&&et(R.prototype,x),D&&et(R,D),R}var w=function(x){var D=x.el;return D},T=function(x,D){return x.__draggable_context=D},P=function(x){return x.__draggable_context},F=function(){function R(x){var D=x.nodes,V=D.header,oe=D.default,be=D.footer,me=x.root,Me=x.realList;Te(this,R),this.defaultNodes=oe,this.children=[].concat(C(V),C(oe),C(be)),this.externalComponent=me.externalComponent,this.rootTransition=me.transition,this.tag=me.tag,this.realList=Me}return Ce(R,[{key:"render",value:function(D,V){var oe=this.tag,be=this.children,me=this._isRootComponent,Me=me?{default:function(){return be}}:be;return D(oe,V,Me)}},{key:"updated",value:function(){var D=this.defaultNodes,V=this.realList;D.forEach(function(oe,be){T(w(oe),{element:V[be],index:be})})}},{key:"getUnderlyingVm",value:function(D){return P(D)}},{key:"getVmIndexFromDomIndex",value:function(D,V){var oe=this.defaultNodes,be=oe.length,me=V.children,Me=me.item(D);if(Me===null)return be;var St=P(Me);if(St)return St.index;if(be===0)return 0;var Ae=w(oe[0]),pe=C(me).findIndex(function(_e){return _e===Ae});return D<pe?0:be}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),R}(),$=o("8bbf");function G(R,x){var D=R[x];return D?D():[]}function ne(R){var x=R.$slots,D=R.realList,V=R.getKey,oe=D||[],be=["header","footer"].map(function(_e){return G(x,_e)}),me=g(be,2),Me=me[0],St=me[1],Ae=x.item;if(!Ae)throw new Error("draggable element must have an item slot");var pe=oe.flatMap(function(_e,Ge){return Ae({element:_e,index:Ge}).map(function(tt){return tt.key=V(_e),tt.props=f(f({},tt.props||{}),{},{"data-draggable":!0}),tt})});if(pe.length!==oe.length)throw new Error("Item slot must have only one child");return{header:Me,footer:St,default:pe}}function q(R){var x=gt(R),D=!je(R)&&!x;return{transition:x,externalComponent:D,tag:D?Object($.resolveComponent)(R):x?$.TransitionGroup:R}}function Q(R){var x=R.$slots,D=R.tag,V=R.realList,oe=R.getKey,be=ne({$slots:x,realList:V,getKey:oe}),me=q(D);return new F({nodes:be,root:me,realList:V})}function j(R,x){var D=this;Object($.nextTick)(function(){return D.$emit(R.toLowerCase(),x)})}function fe(R){var x=this;return function(D,V){if(x.realList!==null)return x["onDrag".concat(R)](D,V)}}function ae(R){var x=this,D=fe.call(this,R);return function(V,oe){D.call(x,V,oe),j.call(x,R,V)}}var de=null,we={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(x){return x}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},ke=["update:modelValue","change"].concat(C([].concat(C(He.manageAndEmit),C(He.emit)).map(function(R){return R.toLowerCase()}))),st=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:we,emits:ke,data:function(){return{error:!1}},render:function(){try{this.error=!1;var x=this.$slots,D=this.$attrs,V=this.tag,oe=this.componentData,be=this.realList,me=this.getKey,Me=Q({$slots:x,tag:V,realList:be,getKey:me});this.componentStructure=Me;var St=z({$attrs:D,componentData:oe});return Me.render($.h,St)}catch(Ae){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},Ae.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&L.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var x=this;if(!this.error){var D=this.$attrs,V=this.$el,oe=this.componentStructure;oe.updated();var be=H({$attrs:D,callBackBuilder:{manageAndEmit:function(St){return ae.call(x,St)},emit:function(St){return j.bind(x,St)},manage:function(St){return fe.call(x,St)}}}),me=V.nodeType===1?V:V.parentElement;this._sortable=new _.a(me,be),this.targetDomElement=me,me.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var x=this.list;return x||this.modelValue},getKey:function(){var x=this.itemKey;return typeof x=="function"?x:function(D){return D[x]}}},watch:{$attrs:{handler:function(x){var D=this._sortable;D&&ie(x).forEach(function(V){var oe=g(V,2),be=oe[0],me=oe[1];D.option(be,me)})},deep:!0}},methods:{getUnderlyingVm:function(x){return this.componentStructure.getUnderlyingVm(x)||null},getUnderlyingPotencialDraggableComponent:function(x){return x.__draggable_component__},emitChanges:function(x){var D=this;Object($.nextTick)(function(){return D.$emit("change",x)})},alterList:function(x){if(this.list){x(this.list);return}var D=C(this.modelValue);x(D),this.$emit("update:modelValue",D)},spliceList:function(){var x=arguments,D=function(oe){return oe.splice.apply(oe,C(x))};this.alterList(D)},updatePosition:function(x,D){var V=function(be){return be.splice(D,0,be.splice(x,1)[0])};this.alterList(V)},getRelatedContextFromMoveEvent:function(x){var D=x.to,V=x.related,oe=this.getUnderlyingPotencialDraggableComponent(D);if(!oe)return{component:oe};var be=oe.realList,me={list:be,component:oe};if(D!==V&&be){var Me=oe.getUnderlyingVm(V)||{};return f(f({},Me),me)}return me},getVmIndexFromDomIndex:function(x){return this.componentStructure.getVmIndexFromDomIndex(x,this.targetDomElement)},onDragStart:function(x){this.context=this.getUnderlyingVm(x.item),x.item._underlying_vm_=this.clone(this.context.element),de=x.item},onDragAdd:function(x){var D=x.item._underlying_vm_;if(D!==void 0){S(x.item);var V=this.getVmIndexFromDomIndex(x.newIndex);this.spliceList(V,0,D);var oe={element:D,newIndex:V};this.emitChanges({added:oe})}},onDragRemove:function(x){if(N(this.$el,x.item,x.oldIndex),x.pullMode==="clone"){S(x.clone);return}var D=this.context,V=D.index,oe=D.element;this.spliceList(V,1);var be={element:oe,oldIndex:V};this.emitChanges({removed:be})},onDragUpdate:function(x){S(x.item),N(x.from,x.item,x.oldIndex);var D=this.context.index,V=this.getVmIndexFromDomIndex(x.newIndex);this.updatePosition(D,V);var oe={element:this.context.element,oldIndex:D,newIndex:V};this.emitChanges({moved:oe})},computeFutureIndex:function(x,D){if(!x.element)return 0;var V=C(D.to.children).filter(function(Me){return Me.style.display!=="none"}),oe=V.indexOf(D.related),be=x.component.getVmIndexFromDomIndex(oe),me=V.indexOf(de)!==-1;return me||!D.willInsertAfter?be:be+1},onDragMove:function(x,D){var V=this.move,oe=this.realList;if(!V||!oe)return!0;var be=this.getRelatedContextFromMoveEvent(x),me=this.computeFutureIndex(be,x),Me=f(f({},this.context),{},{futureIndex:me}),St=f(f({},x),{},{relatedContext:be,draggedContext:Me});return V(St,D)},onDragEnd:function(){de=null}}}),Xe=st;i.default=Xe},fb6a:function(s,i,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),h=o("50c4"),f=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),b=[].slice,I=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(A,_){var S=f(this),N=h(S.length),L=u(A,N),U=u(_===void 0?N:_,N),k,O,te;if(c(S)&&(k=S.constructor,typeof k=="function"&&(k===Array||c(k.prototype))?k=void 0:l(k)&&(k=k[E],k===null&&(k=void 0)),k===Array||k===void 0))return b.call(S,L,U);for(O=new(k===void 0?Array:k)(I(U-L,0)),te=0;L<U;L++,te++)L in S&&d(O,te,S[L]);return O.length=te,O}})},fc6a:function(s,i,o){var a=o("44ad"),l=o("1d80");s.exports=function(c){return a(l(c))}},fdbc:function(s,i){s.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(s,i,o){var a=o("4930");s.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(_6);const o9=fj(lg),a9=t=>(kw("data-v-191b7ac8"),t=t(),Mw(),t),l9=a9(()=>ee("h3",{class:"title-secondary"},"My Work",-1)),c9=$e({__name:"Projects",setup(t){const e=ms(),{moveProject:n}=e,{projects:r}=Er(e),s=o=>{o.moved&&n(o.moved.oldIndex,o.moved.newIndex)},i=()=>{Vi(()=>{const o=document.querySelectorAll(".transition-opacity");o.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),RL(Array.from(o),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return ts(()=>r.value,(o,a)=>{o>a&&i()}),Br(()=>{i()}),(o,a)=>(K(),Ie(Je,null,[l9,le(Y(o9),{class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none","model-value":Y(r),"item-key":"index",onChange:s,animation:150,delay:50},{item:it(({element:l})=>[le(Zr,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",title:l.name,url:l.url,description:l.description,loading:l.loading},{default:it(()=>[(K(!0),Ie(Je,null,mr(l.technologies,c=>(K(),Oe(b6,{class:"m-1 md:mt-2",text:c.name,color:c.color},null,8,["text","color"]))),256))]),_:2},1032,["title","url","description","loading"])]),_:1},8,["model-value"])],64))}});const u9=qC(c9,[["__scopeId","data-v-191b7ac8"]]),h9={class:"grid mt-20"},f9=$e({__name:"Home",setup(t){return(e,n)=>(K(),Oe(va,null,{content:it(()=>[ee("div",h9,[le(u9)])]),_:1}))}}),d9=$e({__name:"Home",setup(t){return(e,n)=>(K(),Oe(f9))}}),p9={class:"flex flex-col items-center content-center"},g9={class:"grid grid-cols-4 mt-10 gap-3"},m9=ee("button",{class:"button-primary col-span-full md:col-span-2",type:"submit"}," Login ",-1),v9=$e({__name:"Login",setup(t){const e=rr(),n=i_(),{initEmail:r,initPassword:s}=n.currentRoute.value.query,i=lt(),o=lt(),a=Yn({email:{value:(r==null?void 0:r.toString())||"",error:""},password:{value:(s==null?void 0:s.toString())||"",error:""}}),l=async()=>{Object.keys(a).forEach(u=>a[u].error=""),await Promise.all([i.value.test(),o.value.test()]),!a.email.error&&!a.password.error&&e.login(a.email.value,a.password.value)},c=async()=>{await i.value.test(),a.email.error||e.resetPassword(a.email.value)};return Br(()=>{n.replace({query:void 0})}),(u,h)=>{const f=Hi("RouterLink");return K(),Oe(va,null,{content:it(()=>[le(Zr,{class:"!bg-cyan-800 !bg-opacity-50 my-5",title:"Login",description:"Please login using your e-mail and password."},{default:it(()=>[ee("div",p9,[ee("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:h[4]||(h[4]=Vh(d=>l(),["prevent"]))},[le(Cv,{ref_key:"email",ref:i,name:"email",label:"E-mail",state:a,rules:[Y(Kt).Required],onUpdate:h[0]||(h[0]=d=>a.email.value=d),onError:h[1]||(h[1]=d=>a.email.error=d)},null,8,["state","rules"]),le(vo,{ref_key:"password",ref:o,name:"password",label:"Password",state:a,rules:[Y(Kt).Required],onUpdate:h[2]||(h[2]=d=>a.password.value=d),onError:h[3]||(h[3]=d=>a.password.error=d)},null,8,["state","rules"]),ee("div",g9,[m9,le(f,{to:{name:"register",query:{initEmail:a.email.value,initPassword:a.password.value}},class:"button-outlined-primary col-span-full md:col-span-2",type:"button"},{default:it(()=>[pn(" Register ")]),_:1},8,["to"]),ee("button",{class:"button-outlined-primary col-span-full md:col-span-2 md:col-start-3",type:"button",onClick:c}," Forgot Password ")])],32),le(Iv)])]),_:1})]),_:1})}}}),y9=$e({__name:"Login",setup(t){return(e,n)=>(K(),Oe(v9))}}),E9=$e({__name:"NotFound",setup(t){return(e,n)=>(K(),Oe(va,null,{content:it(()=>[le(Zr,{class:"!bg-red-800 !bg-opacity-50 my-5",title:"Not found.",description:"Where are you going?"})]),_:1}))}}),w9=$e({__name:"NotFound",setup(t){return(e,n)=>(K(),Oe(E9))}}),b9={class:"flex flex-col items-center content-center"},_9={class:"grid grid-cols-2 mt-10 gap-3"},T9=ee("button",{class:"button-primary col-span-full md:col-span-1",type:"submit"}," Register ",-1),S9=$e({__name:"Register",setup(t){const e=rr(),n=i_(),{initEmail:r,initPassword:s}=n.currentRoute.value.query,i=lt(),o=lt(),a=lt(),l=Yn({email:{value:(r==null?void 0:r.toString())||"",error:""},password:{value:(s==null?void 0:s.toString())||"",error:""},firstName:{value:"",error:""}}),c=async()=>{Object.keys(l).forEach(u=>l[u].error=""),await Promise.all([i.value.test(),o.value.test(),a.value.test()]),!l.email.error&&!l.password.error&&!l.firstName.error&&e.register(l.email.value,l.password.value,l.firstName.value)};return Br(()=>{n.replace({query:void 0})}),(u,h)=>{const f=Hi("RouterLink");return K(),Oe(va,null,{content:it(()=>[le(Zr,{class:"!bg-cyan-800 !bg-opacity-50 my-5",title:"Register",description:"Please register using your e-mail, password and first name."},{default:it(()=>[ee("div",b9,[ee("form",{class:"w-full lg:w-1/2 xl:w-1/3 px-8 pt-6 pb-8 mb-4",onSubmit:h[6]||(h[6]=Vh(d=>c(),["prevent"]))},[le(is,{ref_key:"firstName",ref:a,name:"firstName",label:"First Name",placeholder:"Someone",state:l,rules:[Y(Kt).Required,Y(Kt).MinLength],min:3,max:25,onUpdate:h[0]||(h[0]=d=>l.firstName.value=d),onError:h[1]||(h[1]=d=>l.firstName.error=d)},null,8,["state","rules"]),le(Cv,{ref_key:"email",ref:i,name:"email",label:"E-mail",state:l,rules:[Y(Kt).Required],onUpdate:h[2]||(h[2]=d=>l.email.value=d),onError:h[3]||(h[3]=d=>l.email.error=d)},null,8,["state","rules"]),le(vo,{ref_key:"password",ref:o,name:"password",label:"Password",state:l,rules:[Y(Kt).Required],onUpdate:h[4]||(h[4]=d=>l.password.value=d),onError:h[5]||(h[5]=d=>l.password.error=d)},null,8,["state","rules"]),ee("div",_9,[T9,le(f,{to:{name:"login",query:{initEmail:l.email.value,initPassword:l.password.value}},class:"button-outlined-primary col-span-full md:col-span-1",type:"button"},{default:it(()=>[pn(" Login ")]),_:1},8,["to"])])],32),le(Iv)])]),_:1})]),_:1})}}}),I9=$e({__name:"Register",setup(t){return(e,n)=>(K(),Oe(S9))}}),c1=NO({history:Xx(""),routes:[{path:"/",name:"home",meta:{title:"Home"},component:d9,beforeEnter:(t,e,n)=>{t.query.notfound?n({name:"notfound"}):n()}},{path:"/login",name:"login",meta:{title:"Login"},component:y9,beforeEnter:(t,e,n)=>{rr().currentUser?n({name:"dashboard"}):n()}},{path:"/register",name:"register",meta:{title:"Register"},component:I9,beforeEnter:(t,e,n)=>{rr().currentUser?n({name:"dashboard"}):n()}},{path:"/dashboard",name:"dashboard",meta:{title:"Dashboard"},component:v6,beforeEnter:(t,e,n)=>{rr().currentUser?n():n({name:"login"})}},{path:"/blog",name:"blog",meta:{title:"Blog"},component:u6},{path:"/:pathMatch(.*)*",name:"notfound",meta:{title:"404"},component:w9}]}),iw=kf.name;c1.beforeResolve(t=>{document.title=iw+" | "+t.meta.title||iw});const u1=c1,_c=Hb(kO);_c.use(u1);_c.use(_B,{firebaseApp:b_,modules:[bB()]});_c.use(A_);_c.use(Tx);_c.mount("#app");
