(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ru(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const gI="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",mI=Ru(gI);function wo(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=yt(r)?_I(r):wo(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(yt(t))return t;if(ot(t))return t}}const vI=/;(?![^(]*\))/g,yI=/:([^]+)/,EI=/\/\*.*?\*\//gs;function _I(t){const e={};return t.replace(EI,"").split(vI).forEach(n=>{if(n){const r=n.split(yI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gs(t){let e="";if(yt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=gs(t[n]);r&&(e+=r+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wI(t){if(!t)return null;let{class:e,style:n}=t;return e&&!yt(e)&&(t.class=gs(e)),n&&(t.style=wo(n)),t}const bI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",TI=Ru(bI);function VE(t){return!!t||t===""}function SI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=yi(t[r],e[r]);return n}function yi(t,e){if(t===e)return!0;let n=ym(t),r=ym(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pa(t),r=Pa(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?SI(t,e):!1;if(n=ot(t),r=ot(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!yi(t[o],e[o]))return!1}}return String(t)===String(e)}function xu(t,e){return t.findIndex(n=>yi(n,e))}const pn=t=>yt(t)?t:t==null?"":ae(t)||ot(t)&&(t.toString===KE||!Te(t.toString))?JSON.stringify(t,HE,2):String(t),HE=(t,e)=>e&&e.__v_isRef?HE(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ms(e)?{[`Set(${e.size})`]:[...e.values()]}:ot(e)&&!ae(e)&&!WE(e)?String(e):e,rt={},js=[],qn=()=>{},II=()=>!1,CI=/^on[^a-z]/,rl=t=>CI.test(t),lp=t=>t.startsWith("onUpdate:"),At=Object.assign,cp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},AI=Object.prototype.hasOwnProperty,ze=(t,e)=>AI.call(t,e),ae=Array.isArray,Vs=t=>bo(t)==="[object Map]",ms=t=>bo(t)==="[object Set]",ym=t=>bo(t)==="[object Date]",RI=t=>bo(t)==="[object RegExp]",Te=t=>typeof t=="function",yt=t=>typeof t=="string",Pa=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",up=t=>ot(t)&&Te(t.then)&&Te(t.catch),KE=Object.prototype.toString,bo=t=>KE.call(t),xI=t=>bo(t).slice(8,-1),WE=t=>bo(t)==="[object Object]",hp=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,aa=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ou=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},OI=/-(\w)/g,In=Ou(t=>t.replace(OI,(e,n)=>n?n.toUpperCase():"")),NI=/\B([A-Z])/g,Un=Ou(t=>t.replace(NI,"-$1").toLowerCase()),il=Ou(t=>t.charAt(0).toUpperCase()+t.slice(1)),la=Ou(t=>t?`on${il(t)}`:""),no=(t,e)=>!Object.is(t,e),Hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Oc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pc=t=>{const e=yt(t)?Number(t):NaN;return isNaN(e)?t:e};let Em;const PI=()=>Em||(Em=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let On;class fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=On;try{return On=this,e()}finally{On=n}}}on(){On=this}off(){On=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Nu(t){return new fp(t)}function GE(t,e=On){e&&e.active&&e.effects.push(t)}function dp(){return On}function zE(t){On&&On.cleanups.push(t)}const pp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},YE=t=>(t.w&Ei)>0,XE=t=>(t.n&Ei)>0,DI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ei},kI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];YE(i)&&!XE(i)?i.delete(t):e[n++]=i,i.w&=~Ei,i.n&=~Ei}e.length=n}},Dc=new WeakMap;let Xo=0,Ei=1;const Mf=30;let zn;const zi=Symbol(""),Lf=Symbol("");class sl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,GE(this,r)}run(){if(!this.active)return this.fn();let e=zn,n=hi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,hi=!0,Ei=1<<++Xo,Xo<=Mf?DI(this):_m(this),this.fn()}finally{Xo<=Mf&&kI(this),Ei=1<<--Xo,zn=this.parent,hi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(_m(this),this.onStop&&this.onStop(),this.active=!1)}}function _m(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function MI(t,e){t.effect&&(t=t.effect.fn);const n=new sl(t);e&&(At(n,e),e.scope&&GE(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function LI(t){t.effect.stop()}let hi=!0;const QE=[];function To(){QE.push(hi),hi=!1}function So(){const t=QE.pop();hi=t===void 0?!0:t}function An(t,e,n){if(hi&&zn){let r=Dc.get(t);r||Dc.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=pp()),JE(i)}}function JE(t,e){let n=!1;Xo<=Mf?XE(t)||(t.n|=Ei,n=!YE(t)):n=!t.has(zn),n&&(t.add(zn),zn.deps.push(t))}function Fr(t,e,n,r,i,s){const o=Dc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ae(t)?hp(n)&&a.push(o.get("length")):(a.push(o.get(zi)),Vs(t)&&a.push(o.get(Lf)));break;case"delete":ae(t)||(a.push(o.get(zi)),Vs(t)&&a.push(o.get(Lf)));break;case"set":Vs(t)&&a.push(o.get(zi));break}if(a.length===1)a[0]&&Ff(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ff(pp(l))}}function Ff(t,e){const n=ae(t)?t:[...t];for(const r of n)r.computed&&wm(r);for(const r of n)r.computed||wm(r)}function wm(t,e){(t!==zn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function FI(t,e){var n;return(n=Dc.get(t))===null||n===void 0?void 0:n.get(e)}const UI=Ru("__proto__,__v_isRef,__isVue"),qE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pa)),$I=Pu(),BI=Pu(!1,!0),jI=Pu(!0),VI=Pu(!0,!0),bm=HI();function HI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ke(this);for(let s=0,o=this.length;s<o;s++)An(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ke)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){To();const r=ke(this)[e].apply(this,n);return So(),r}}),t}function KI(t){const e=ke(this);return An(e,"has",t),e.hasOwnProperty(t)}function Pu(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?s0:i0:e?r0:n0).get(r))return r;const o=ae(r);if(!t){if(o&&ze(bm,i))return Reflect.get(bm,i,s);if(i==="hasOwnProperty")return KI}const a=Reflect.get(r,i,s);return(Pa(i)?qE.has(i):UI(i))||(t||An(r,"get",i),e)?a:wt(a)?o&&hp(i)?a:a.value:ot(a)?t?mp(a):vs(a):a}}const WI=ZE(),GI=ZE(!0);function ZE(t=!1){return function(n,r,i,s){let o=n[r];if(ts(o)&&wt(o)&&!wt(i))return!1;if(!t&&(!Da(i)&&!ts(i)&&(o=ke(o),i=ke(i)),!ae(n)&&wt(o)&&!wt(i)))return o.value=i,!0;const a=ae(n)&&hp(r)?Number(r)<n.length:ze(n,r),l=Reflect.set(n,r,i,s);return n===ke(s)&&(a?no(i,o)&&Fr(n,"set",r,i):Fr(n,"add",r,i)),l}}function zI(t,e){const n=ze(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Fr(t,"delete",e,void 0),r}function YI(t,e){const n=Reflect.has(t,e);return(!Pa(e)||!qE.has(e))&&An(t,"has",e),n}function XI(t){return An(t,"iterate",ae(t)?"length":zi),Reflect.ownKeys(t)}const e0={get:$I,set:WI,deleteProperty:zI,has:YI,ownKeys:XI},t0={get:jI,set(t,e){return!0},deleteProperty(t,e){return!0}},QI=At({},e0,{get:BI,set:GI}),JI=At({},t0,{get:VI}),gp=t=>t,Du=t=>Reflect.getPrototypeOf(t);function Ll(t,e,n=!1,r=!1){t=t.__v_raw;const i=ke(t),s=ke(e);n||(e!==s&&An(i,"get",e),An(i,"get",s));const{has:o}=Du(i),a=r?gp:n?yp:ka;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Fl(t,e=!1){const n=this.__v_raw,r=ke(n),i=ke(t);return e||(t!==i&&An(r,"has",t),An(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ul(t,e=!1){return t=t.__v_raw,!e&&An(ke(t),"iterate",zi),Reflect.get(t,"size",t)}function Tm(t){t=ke(t);const e=ke(this);return Du(e).has.call(e,t)||(e.add(t),Fr(e,"add",t,t)),this}function Sm(t,e){e=ke(e);const n=ke(this),{has:r,get:i}=Du(n);let s=r.call(n,t);s||(t=ke(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?no(e,o)&&Fr(n,"set",t,e):Fr(n,"add",t,e),this}function Im(t){const e=ke(this),{has:n,get:r}=Du(e);let i=n.call(e,t);i||(t=ke(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Fr(e,"delete",t,void 0),s}function Cm(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&Fr(t,"clear",void 0,void 0),n}function $l(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ke(o),l=e?gp:t?yp:ka;return!t&&An(a,"iterate",zi),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Bl(t,e,n){return function(...r){const i=this.__v_raw,s=ke(i),o=Vs(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?gp:e?yp:ka;return!e&&An(s,"iterate",l?Lf:zi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function zr(t){return function(...e){return t==="delete"?!1:this}}function qI(){const t={get(s){return Ll(this,s)},get size(){return Ul(this)},has:Fl,add:Tm,set:Sm,delete:Im,clear:Cm,forEach:$l(!1,!1)},e={get(s){return Ll(this,s,!1,!0)},get size(){return Ul(this)},has:Fl,add:Tm,set:Sm,delete:Im,clear:Cm,forEach:$l(!1,!0)},n={get(s){return Ll(this,s,!0)},get size(){return Ul(this,!0)},has(s){return Fl.call(this,s,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:$l(!0,!1)},r={get(s){return Ll(this,s,!0,!0)},get size(){return Ul(this,!0)},has(s){return Fl.call(this,s,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:$l(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Bl(s,!1,!1),n[s]=Bl(s,!0,!1),e[s]=Bl(s,!1,!0),r[s]=Bl(s,!0,!0)}),[t,n,e,r]}const[ZI,eC,tC,nC]=qI();function ku(t,e){const n=e?t?nC:tC:t?eC:ZI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ze(n,i)&&i in r?n:r,i,s)}const rC={get:ku(!1,!1)},iC={get:ku(!1,!0)},sC={get:ku(!0,!1)},oC={get:ku(!0,!0)},n0=new WeakMap,r0=new WeakMap,i0=new WeakMap,s0=new WeakMap;function aC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lC(t){return t.__v_skip||!Object.isExtensible(t)?0:aC(xI(t))}function vs(t){return ts(t)?t:Mu(t,!1,e0,rC,n0)}function o0(t){return Mu(t,!1,QI,iC,r0)}function mp(t){return Mu(t,!0,t0,sC,i0)}function cC(t){return Mu(t,!0,JI,oC,s0)}function Mu(t,e,n,r,i){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=lC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ur(t){return ts(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function Da(t){return!!(t&&t.__v_isShallow)}function vp(t){return ur(t)||ts(t)}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function ns(t){return Oc(t,"__v_skip",!0),t}const ka=t=>ot(t)?vs(t):t,yp=t=>ot(t)?mp(t):t;function Ep(t){hi&&zn&&(t=ke(t),JE(t.dep||(t.dep=pp())))}function Lu(t,e){t=ke(t);const n=t.dep;n&&Ff(n)}function wt(t){return!!(t&&t.__v_isRef===!0)}function hr(t){return l0(t,!1)}function a0(t){return l0(t,!0)}function l0(t,e){return wt(t)?t:new uC(t,e)}class uC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ke(e),this._value=n?e:ka(e)}get value(){return Ep(this),this._value}set value(e){const n=this.__v_isShallow||Da(e)||ts(e);e=n?e:ke(e),no(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ka(e),Lu(this))}}function hC(t){Lu(t)}function st(t){return wt(t)?t.value:t}const fC={get:(t,e,n)=>st(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return wt(i)&&!wt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _p(t){return ur(t)?t:new Proxy(t,fC)}class dC{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Ep(this),()=>Lu(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function pC(t){return new dC(t)}function c0(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=wp(t,n);return e}class gC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return FI(ke(this._object),this._key)}}function wp(t,e,n){const r=t[e];return wt(r)?r:new gC(t,e,n)}var u0;class mC{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[u0]=!1,this._dirty=!0,this.effect=new sl(e,()=>{this._dirty||(this._dirty=!0,Lu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ke(this);return Ep(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}u0="__v_isReadonly";function vC(t,e,n=!1){let r,i;const s=Te(t);return s?(r=t,i=qn):(r=t.get,i=t.set),new mC(r,i,s||!i,n)}function yC(t,...e){}function EC(t,e){}function kr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ys(s,e,n)}return i}function Pn(t,e,n,r){if(Te(t)){const s=kr(t,e,n,r);return s&&up(s)&&s.catch(o=>{ys(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Pn(t[s],e,n,r));return i}function ys(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){kr(l,null,10,[t,o,a]);return}}_C(t,n,i,r)}function _C(t,e,n,r=!0){console.error(t)}let Ma=!1,Uf=!1;const nn=[];let sr=0;const Ks=[];let Ar=null,Bi=0;const h0=Promise.resolve();let bp=null;function Es(t){const e=bp||h0;return t?e.then(this?t.bind(this):t):e}function wC(t){let e=sr+1,n=nn.length;for(;e<n;){const r=e+n>>>1;La(nn[r])<t?e=r+1:n=r}return e}function Fu(t){(!nn.length||!nn.includes(t,Ma&&t.allowRecurse?sr+1:sr))&&(t.id==null?nn.push(t):nn.splice(wC(t.id),0,t),f0())}function f0(){!Ma&&!Uf&&(Uf=!0,bp=h0.then(d0))}function bC(t){const e=nn.indexOf(t);e>sr&&nn.splice(e,1)}function Tp(t){ae(t)?Ks.push(...t):(!Ar||!Ar.includes(t,t.allowRecurse?Bi+1:Bi))&&Ks.push(t),f0()}function Am(t,e=Ma?sr+1:0){for(;e<nn.length;e++){const n=nn[e];n&&n.pre&&(nn.splice(e,1),e--,n())}}function kc(t){if(Ks.length){const e=[...new Set(Ks)];if(Ks.length=0,Ar){Ar.push(...e);return}for(Ar=e,Ar.sort((n,r)=>La(n)-La(r)),Bi=0;Bi<Ar.length;Bi++)Ar[Bi]();Ar=null,Bi=0}}const La=t=>t.id==null?1/0:t.id,TC=(t,e)=>{const n=La(t)-La(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function d0(t){Uf=!1,Ma=!0,nn.sort(TC);const e=qn;try{for(sr=0;sr<nn.length;sr++){const n=nn[sr];n&&n.active!==!1&&kr(n,null,14)}}finally{sr=0,nn.length=0,kc(),Ma=!1,bp=null,(nn.length||Ks.length)&&d0()}}let Ns,jl=[];function p0(t,e){var n,r;Ns=t,Ns?(Ns.enabled=!0,jl.forEach(({event:i,args:s})=>Ns.emit(i,...s)),jl=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{p0(s,e)}),setTimeout(()=>{Ns||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jl=[])},3e3)):jl=[]}function SC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||rt;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||rt;f&&(i=n.map(d=>yt(d)?d.trim():d)),h&&(i=n.map(Nc))}let a,l=r[a=la(e)]||r[a=la(In(e))];!l&&s&&(l=r[a=la(Un(e))]),l&&Pn(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,i)}}function g0(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Te(t)){const l=c=>{const u=g0(c,e,!0);u&&(a=!0,At(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ot(t)&&r.set(t,null),null):(ae(s)?s.forEach(l=>o[l]=null):At(o,s),ot(t)&&r.set(t,o),o)}function Uu(t,e){return!t||!rl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,Un(e))||ze(t,e))}let Yt=null,$u=null;function Fa(t){const e=Yt;return Yt=t,$u=t&&t.type.__scopeId||null,e}function m0(t){$u=t}function v0(){$u=null}const IC=t=>er;function er(t,e=Yt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Gf(-1);const s=Fa(e);let o;try{o=t(...i)}finally{Fa(s),r._d&&Gf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=Fa(t);try{if(n.shapeFlag&4){const w=i||r;y=Nn(u.call(w,w,h,s,d,f,p)),v=l}else{const w=e;y=Nn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),v=e.props?l:AC(l)}}catch(w){da.length=0,ys(w,t,1),y=Ne(on)}let E=y;if(v&&m!==!1){const w=Object.keys(v),{shapeFlag:T}=E;w.length&&T&7&&(o&&w.some(lp)&&(v=RC(v,o)),E=gr(E,v))}return n.dirs&&(E=gr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,Fa(g),y}function CC(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(_i(r)){if(r.type!==on||r.children==="v-if"){if(e)return;e=r}}else return}return e}const AC=t=>{let e;for(const n in t)(n==="class"||n==="style"||rl(n))&&((e||(e={}))[n]=t[n]);return e},RC=(t,e)=>{const n={};for(const r in t)(!lp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Rm(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Uu(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Rm(r,o,c):!0:!!o;return!1}function Rm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Uu(n,s))return!0}return!1}function Sp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const y0=t=>t.__isSuspense,OC={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,l,c){t==null?PC(e,n,r,i,s,o,a,l,c):DC(t,e,n,r,i,o,a,l,c)},hydrate:kC,create:Ip,normalize:MC},NC=OC;function Ua(t,e){const n=t.props&&t.props[e];Te(n)&&n()}function PC(t,e,n,r,i,s,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Ip(t,i,r,e,h,n,s,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,r,f,s,o),f.deps>0?(Ua(t,"onPending"),Ua(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,s,o),Ws(f,t.ssFallback)):f.resolve()}function DC(t,e,n,r,i,s,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=h;if(m)h.pendingBranch=f,Yn(f,m)?(l(m,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():y&&(l(p,d,n,r,i,null,s,o,a),Ws(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=m):c(m,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),y?(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(l(p,d,n,r,i,null,s,o,a),Ws(h,d))):p&&Yn(f,p)?(l(p,f,n,r,i,h,s,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&Yn(f,p))l(p,f,n,r,i,h,s,o,a),Ws(h,f);else if(Ua(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:g,pendingId:E}=h;g>0?setTimeout(()=>{h.pendingId===E&&h.fallback(d)},g):g===0&&h.fallback(d)}}function Ip(t,e,n,r,i,s,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:m,remove:y}}=c,v=t.props?Pc(t.props.timeout):void 0,g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1){const{vnode:w,activeBranch:T,pendingBranch:S,pendingId:x,effects:I,parentComponent:C,container:P}=g;if(g.isHydrating)g.isHydrating=!1;else if(!E){const k=T&&S.transition&&S.transition.mode==="out-in";k&&(T.transition.afterLeave=()=>{x===g.pendingId&&f(S,P,O,0)});let{anchor:O}=g;T&&(O=p(T),d(T,C,g,!0)),k||f(S,P,O,0)}Ws(g,S),g.pendingBranch=null,g.isInFallback=!1;let L=g.parent,U=!1;for(;L;){if(L.pendingBranch){L.effects.push(...I),U=!0;break}L=L.parent}U||Tp(I),g.effects=[],Ua(w,"onResolve")},fallback(E){if(!g.pendingBranch)return;const{vnode:w,activeBranch:T,parentComponent:S,container:x,isSVG:I}=g;Ua(w,"onFallback");const C=p(T),P=()=>{g.isInFallback&&(h(null,E,x,C,S,null,I,a,l),Ws(g,E))},L=E.transition&&E.transition.mode==="out-in";L&&(T.transition.afterLeave=P),g.isInFallback=!0,d(T,S,null,!0),L||P()},move(E,w,T){g.activeBranch&&f(g.activeBranch,E,w,T),g.container=E},next(){return g.activeBranch&&p(g.activeBranch)},registerDep(E,w){const T=!!g.pendingBranch;T&&g.deps++;const S=E.vnode.el;E.asyncDep.catch(x=>{ys(x,E,0)}).then(x=>{if(E.isUnmounted||g.isUnmounted||g.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:I}=E;zf(E,x,!1),S&&(I.el=S);const C=!S&&E.subTree.el;w(E,I,m(S||E.subTree.el),S?null:p(E.subTree),g,o,l),C&&y(C),Sp(E,I.el),T&&--g.deps===0&&g.resolve()})},unmount(E,w){g.isUnmounted=!0,g.activeBranch&&d(g.activeBranch,n,E,w),g.pendingBranch&&d(g.pendingBranch,n,E,w)}};return g}function kC(t,e,n,r,i,s,o,a,l){const c=e.suspense=Ip(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(),u}function MC(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=xm(r?n.default:n),t.ssFallback=r?xm(n.fallback):Ne(on)}function xm(t){let e;if(Te(t)){const n=ss&&t._c;n&&(t._d=!1,$e()),t=t(),n&&(t._d=!0,e=Tn,W0())}return ae(t)&&(t=CC(t)),t=Nn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function E0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Tp(t)}function Ws(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,Sp(r,i))}function ca(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function jn(t,e,n=!1){const r=Ct||Yt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Te(e)?e.call(r.proxy):e}}function LC(t,e){return ol(t,null,e)}function _0(t,e){return ol(t,null,{flush:"post"})}function FC(t,e){return ol(t,null,{flush:"sync"})}const Vl={};function fi(t,e,n){return ol(t,e,n)}function ol(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=rt){const a=dp()===(Ct==null?void 0:Ct.scope)?Ct:null;let l,c=!1,u=!1;if(wt(t)?(l=()=>t.value,c=Da(t)):ur(t)?(l=()=>t,r=!0):ae(t)?(u=!0,c=t.some(E=>ur(E)||Da(E)),l=()=>t.map(E=>{if(wt(E))return E.value;if(ur(E))return Vi(E);if(Te(E))return kr(E,a,2)})):Te(t)?e?l=()=>kr(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pn(t,a,3,[f])}:l=qn,e&&r){const E=l;l=()=>Vi(E())}let h,f=E=>{h=v.onStop=()=>{kr(E,a,4)}},d;if(io)if(f=qn,e?n&&Pn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const E=r_();d=E.__watcherHandles||(E.__watcherHandles=[])}else return qn;let p=u?new Array(t.length).fill(Vl):Vl;const m=()=>{if(v.active)if(e){const E=v.run();(r||c||(u?E.some((w,T)=>no(w,p[T])):no(E,p)))&&(h&&h(),Pn(e,a,3,[E,p===Vl?void 0:u&&p[0]===Vl?[]:p,f]),p=E)}else v.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Kt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>Fu(m));const v=new sl(l,y);e?n?m():p=v.run():i==="post"?Kt(v.run.bind(v),a&&a.suspense):v.run();const g=()=>{v.stop(),a&&a.scope&&cp(a.scope.effects,v)};return d&&d.push(g),g}function UC(t,e,n){const r=this.proxy,i=yt(t)?t.includes(".")?w0(r,t):()=>r[t]:t.bind(r,r);let s;Te(e)?s=e:(s=e.handler,n=e);const o=Ct;wi(this);const a=ol(i,s.bind(r),n);return o?wi(o):di(),a}function w0(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Vi(t,e){if(!ot(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),wt(t))Vi(t.value,e);else if(ae(t))for(let n=0;n<t.length;n++)Vi(t[n],e);else if(ms(t)||Vs(t))t.forEach(n=>{Vi(n,e)});else if(WE(t))for(const n in t)Vi(t[n],e);return t}function Cp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _s(()=>{t.isMounted=!0}),Hu(()=>{t.isUnmounting=!0}),t}const Ln=[Function,Array],$C={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln},setup(t,{slots:e}){const n=br(),r=Cp();let i;return()=>{const s=e.default&&Bu(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==on){o=m;break}}const a=ke(t),{mode:l}=a;if(r.isLeaving)return Fh(o);const c=Om(o);if(!c)return Fh(o);const u=ro(c,a,r,n);rs(c,u);const h=n.subTree,f=h&&Om(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,d=!0)}if(f&&f.type!==on&&(!Yn(c,f)||d)){const m=ro(f,a,r,n);if(rs(f,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Fh(o);l==="in-out"&&c.type!==on&&(m.delayLeave=(y,v,g)=>{const E=b0(r,f);E[String(f.key)]=f,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Ap=$C;function b0(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ro(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),w=b0(n,t),T=(I,C)=>{I&&Pn(I,r,9,C)},S=(I,C)=>{const P=C[1];T(I,C),ae(I)?I.every(L=>L.length<=1)&&P():I.length<=1&&P()},x={mode:s,persisted:o,beforeEnter(I){let C=a;if(!n.isMounted)if(i)C=m||a;else return;I._leaveCb&&I._leaveCb(!0);const P=w[E];P&&Yn(t,P)&&P.el._leaveCb&&P.el._leaveCb(),T(C,[I])},enter(I){let C=l,P=c,L=u;if(!n.isMounted)if(i)C=y||l,P=v||c,L=g||u;else return;let U=!1;const k=I._enterCb=O=>{U||(U=!0,O?T(L,[I]):T(P,[I]),x.delayedLeave&&x.delayedLeave(),I._enterCb=void 0)};C?S(C,[I,k]):k()},leave(I,C){const P=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return C();T(h,[I]);let L=!1;const U=I._leaveCb=k=>{L||(L=!0,C(),k?T(p,[I]):T(d,[I]),I._leaveCb=void 0,w[P]===t&&delete w[P])};w[P]=t,f?S(f,[I,U]):U()},clone(I){return ro(I,e,n,r)}};return x}function Fh(t){if(al(t))return t=gr(t),t.children=null,t}function Om(t){return al(t)?t.children?t.children[0]:void 0:t}function rs(t,e){t.shapeFlag&6&&t.component?rs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bu(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===mt?(o.patchFlag&128&&i++,r=r.concat(Bu(o.children,e,a))):(e||o.type!==on)&&r.push(a!=null?gr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Lt(t){return Te(t)?{setup:t,name:t.name}:t}const Yi=t=>!!t.type.__asyncLoader;function BC(t){Te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(h()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Lt({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Ct;if(c)return()=>Uh(c,d);const p=g=>{l=null,ys(g,d,13,!r)};if(o&&d.suspense||io)return f().then(g=>()=>Uh(g,d)).catch(g=>(p(g),()=>r?Ne(r,{error:g}):null));const m=hr(!1),y=hr(),v=hr(!!i);return i&&setTimeout(()=>{v.value=!1},i),s!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${s}ms.`);p(g),y.value=g}},s),f().then(()=>{m.value=!0,d.parent&&al(d.parent.vnode)&&Fu(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return Uh(c,d);if(y.value&&r)return Ne(r,{error:y.value});if(n&&!v.value)return Ne(n)}}})}function Uh(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=Ne(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const al=t=>t.type.__isKeepAlive,jC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=br(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=r,f=h("div");r.activate=(g,E,w,T,S)=>{const x=g.component;c(g,E,w,0,a),l(x.vnode,g,E,w,x,a,T,g.slotScopeIds,S),Kt(()=>{x.isDeactivated=!1,x.a&&Hs(x.a);const I=g.props&&g.props.onVnodeMounted;I&&_n(I,x.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,f,null,1,a),Kt(()=>{E.da&&Hs(E.da);const w=g.props&&g.props.onVnodeUnmounted;w&&_n(w,E.parent,g),E.isDeactivated=!0},a)};function d(g){$h(g),u(g,n,a,!0)}function p(g){i.forEach((E,w)=>{const T=Xf(E.type);T&&(!g||!g(T))&&m(w)})}function m(g){const E=i.get(g);!o||!Yn(E,o)?d(E):o&&$h(o),i.delete(g),s.delete(g)}fi(()=>[t.include,t.exclude],([g,E])=>{g&&p(w=>Qo(g,w)),E&&p(w=>!Qo(E,w))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&i.set(y,Bh(n.subTree))};return _s(v),Vu(v),Hu(()=>{i.forEach(g=>{const{subTree:E,suspense:w}=n,T=Bh(E);if(g.type===T.type&&g.key===T.key){$h(T);const S=T.component.da;S&&Kt(S,w);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!_i(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let w=Bh(E);const T=w.type,S=Xf(Yi(w)?w.type.__asyncResolved||{}:T),{include:x,exclude:I,max:C}=t;if(x&&(!S||!Qo(x,S))||I&&S&&Qo(I,S))return o=w,E;const P=w.key==null?T:w.key,L=i.get(P);return w.el&&(w=gr(w),E.shapeFlag&128&&(E.ssContent=w)),y=P,L?(w.el=L.el,w.component=L.component,w.transition&&rs(w,w.transition),w.shapeFlag|=512,s.delete(P),s.add(P)):(s.add(P),C&&s.size>parseInt(C,10)&&m(s.values().next().value)),w.shapeFlag|=256,o=w,y0(E.type)?E:w}}},VC=jC;function Qo(t,e){return ae(t)?t.some(n=>Qo(n,e)):yt(t)?t.split(",").includes(e):RI(t)?t.test(e):!1}function T0(t,e){I0(t,"a",e)}function S0(t,e){I0(t,"da",e)}function I0(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ju(e,r,n),n){let i=n.parent;for(;i&&i.parent;)al(i.parent.vnode)&&HC(r,e,n,i),i=i.parent}}function HC(t,e,n,r){const i=ju(e,t,r,!0);Ku(()=>{cp(r[e],i)},n)}function $h(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Bh(t){return t.shapeFlag&128?t.ssContent:t}function ju(t,e,n=Ct,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;To(),wi(n);const a=Pn(e,n,t,o);return di(),So(),a});return r?i.unshift(s):i.push(s),s}}const Kr=t=>(e,n=Ct)=>(!io||t==="sp")&&ju(t,(...r)=>e(...r),n),C0=Kr("bm"),_s=Kr("m"),A0=Kr("bu"),Vu=Kr("u"),Hu=Kr("bum"),Ku=Kr("um"),R0=Kr("sp"),x0=Kr("rtg"),O0=Kr("rtc");function N0(t,e=Ct){ju("ec",t,e)}function $f(t,e){const n=Yt;if(n===null)return t;const r=Gu(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=rt]=e[s];o&&(Te(o)&&(o={mounted:o,updated:o}),o.deep&&Vi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ir(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(To(),Pn(l,n,8,[t.el,a,t,e]),So())}}const Rp="components",KC="directives";function xp(t,e){return Op(Rp,t,!0,e)||t}const P0=Symbol();function WC(t){return yt(t)?Op(Rp,t,!1)||t:t||P0}function GC(t){return Op(KC,t)}function Op(t,e,n=!0,r=!1){const i=Yt||Ct;if(i){const s=i.type;if(t===Rp){const a=Xf(s,!1);if(a&&(a===e||a===In(e)||a===il(In(e))))return s}const o=Nm(i[t]||s[t],e)||Nm(i.appContext[t],e);return!o&&r?s:o}}function Nm(t,e){return t&&(t[e]||t[In(e)]||t[il(In(e))])}function ll(t,e,n,r){let i;const s=n&&n[r];if(ae(t)||yt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ot(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function zC(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ae(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function ua(t,e,n={},r,i){if(Yt.isCE||Yt.parent&&Yi(Yt.parent)&&Yt.parent.isCE)return e!=="default"&&(n.name=e),Ne("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),$e();const o=s&&D0(s(n)),a=mn(mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function D0(t){return t.some(e=>_i(e)?!(e.type===on||e.type===mt&&!D0(e.children)):!0)?t:null}function YC(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:la(r)]=t[r];return n}const Bf=t=>t?J0(t)?Gu(t)||t.proxy:Bf(t.parent):null,ha=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bf(t.parent),$root:t=>Bf(t.root),$emit:t=>t.emit,$options:t=>Np(t),$forceUpdate:t=>t.f||(t.f=()=>Fu(t.update)),$nextTick:t=>t.n||(t.n=Es.bind(t.proxy)),$watch:t=>UC.bind(t)}),jh=(t,e)=>t!==rt&&!t.__isScriptSetup&&ze(t,e),jf={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(jh(r,e))return o[e]=1,r[e];if(i!==rt&&ze(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ze(c,e))return o[e]=3,s[e];if(n!==rt&&ze(n,e))return o[e]=4,n[e];Vf&&(o[e]=0)}}const u=ha[e];let h,f;if(u)return e==="$attrs"&&An(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==rt&&ze(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ze(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return jh(i,e)?(i[e]=n,!0):r!==rt&&ze(r,e)?(r[e]=n,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==rt&&ze(t,o)||jh(e,o)||(a=s[0])&&ze(a,o)||ze(r,o)||ze(ha,o)||ze(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},XC=At({},jf,{get(t,e){if(e!==Symbol.unscopables)return jf.get(t,e,t)},has(t,e){return e[0]!=="_"&&!mI(e)}});let Vf=!0;function QC(t){const e=Np(t),n=t.proxy,r=t.ctx;Vf=!1,e.beforeCreate&&Pm(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:w,render:T,renderTracked:S,renderTriggered:x,errorCaptured:I,serverPrefetch:C,expose:P,inheritAttrs:L,components:U,directives:k,filters:O}=e;if(c&&JC(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Q in o){const se=o[Q];Te(se)&&(r[Q]=se.bind(n))}if(i){const Q=i.call(n,n);ot(Q)&&(t.data=vs(Q))}if(Vf=!0,s)for(const Q in s){const se=s[Q],Me=Te(se)?se.bind(n,n):Te(se.get)?se.get.bind(n,n):qn,ct=!Te(se)&&Te(se.set)?se.set.bind(n):qn,Be=wn({get:Me,set:ct});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Be.value,set:De=>Be.value=De})}if(a)for(const Q in a)k0(a[Q],r,n,Q);if(l){const Q=Te(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(se=>{ca(se,Q[se])})}u&&Pm(u,t,"c");function B(Q,se){ae(se)?se.forEach(Me=>Q(Me.bind(n))):se&&Q(se.bind(n))}if(B(C0,h),B(_s,f),B(A0,d),B(Vu,p),B(T0,m),B(S0,y),B(N0,I),B(O0,S),B(x0,x),B(Hu,g),B(Ku,w),B(R0,C),ae(P))if(P.length){const Q=t.exposed||(t.exposed={});P.forEach(se=>{Object.defineProperty(Q,se,{get:()=>n[se],set:Me=>n[se]=Me})})}else t.exposed||(t.exposed={});T&&t.render===qn&&(t.render=T),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function JC(t,e,n=qn,r=!1){ae(t)&&(t=Hf(t));for(const i in t){const s=t[i];let o;ot(s)?"default"in s?o=jn(s.from||i,s.default,!0):o=jn(s.from||i):o=jn(s),wt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Pm(t,e,n){Pn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function k0(t,e,n,r){const i=r.includes(".")?w0(n,r):()=>n[r];if(yt(t)){const s=e[t];Te(s)&&fi(i,s)}else if(Te(t))fi(i,t.bind(n));else if(ot(t))if(ae(t))t.forEach(s=>k0(s,e,n,r));else{const s=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(s)&&fi(i,s,t)}}function Np(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Mc(l,c,o,!0)),Mc(l,e,o)),ot(e)&&s.set(e,l),l}function Mc(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Mc(t,s,n,!0),i&&i.forEach(o=>Mc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qC={data:Dm,props:Li,emits:Li,methods:Li,computed:Li,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:Li,directives:Li,watch:eA,provide:Dm,inject:ZC};function Dm(t,e){return e?t?function(){return At(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function ZC(t,e){return Li(Hf(t),Hf(e))}function Hf(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fn(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?At(At(Object.create(null),t),e):e}function eA(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const r in e)n[r]=fn(t[r],e[r]);return n}function tA(t,e,n,r=!1){const i={},s={};Oc(s,Wu,1),t.propsDefaults=Object.create(null),M0(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:o0(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function nA(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ke(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Uu(t.emitsOptions,f))continue;const d=e[f];if(l)if(ze(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const p=In(f);i[p]=Kf(l,a,p,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{M0(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!ze(e,h)&&((u=Un(h))===h||!ze(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Kf(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ze(e,h))&&(delete s[h],c=!0)}c&&Fr(t,"set","$attrs")}function M0(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(aa(l))continue;const c=e[l];let u;i&&ze(i,u=In(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Uu(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ke(n),c=a||rt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Kf(i,l,h,c[h],t,!ze(c,h))}}return o}function Kf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ze(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Te(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(wi(i),r=c[n]=l.call(null,e),di())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Un(n))&&(r=!0))}return r}function L0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Te(t)){const u=h=>{l=!0;const[f,d]=L0(h,e,!0);At(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ot(t)&&r.set(t,js),js;if(ae(s))for(let u=0;u<s.length;u++){const h=In(s[u]);km(h)&&(o[h]=rt)}else if(s)for(const u in s){const h=In(u);if(km(h)){const f=s[u],d=o[h]=ae(f)||Te(f)?{type:f}:Object.assign({},f);if(d){const p=Fm(Boolean,d.type),m=Fm(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||ze(d,"default"))&&a.push(h)}}}const c=[o,a];return ot(t)&&r.set(t,c),c}function km(t){return t[0]!=="$"}function Mm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Lm(t,e){return Mm(t)===Mm(e)}function Fm(t,e){return ae(e)?e.findIndex(n=>Lm(n,t)):Te(e)&&Lm(e,t)?0:-1}const F0=t=>t[0]==="_"||t==="$stable",Pp=t=>ae(t)?t.map(Nn):[Nn(t)],rA=(t,e,n)=>{if(e._n)return e;const r=er((...i)=>Pp(e(...i)),n);return r._c=!1,r},U0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(F0(i))continue;const s=t[i];if(Te(s))e[i]=rA(i,s,r);else if(s!=null){const o=Pp(s);e[i]=()=>o}}},$0=(t,e)=>{const n=Pp(e);t.slots.default=()=>n},iA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ke(e),Oc(e,"_",n)):U0(e,t.slots={})}else t.slots={},e&&$0(t,e);Oc(t.slots,Wu,1)},sA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=rt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(At(i,e),!n&&a===1&&delete i._):(s=!e.$stable,U0(e,i)),o=e}else e&&($0(t,e),o={default:1});if(s)for(const a in i)!F0(a)&&!(a in o)&&delete i[a]};function B0(){return{app:null,config:{isNativeTag:II,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oA=0;function aA(t,e){return function(r,i=null){Te(r)||(r=Object.assign({},r)),i!=null&&!ot(i)&&(i=null);const s=B0(),o=new Set;let a=!1;const l=s.app={_uid:oA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:s_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Te(c.install)?(o.add(c),c.install(l,...u)):Te(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ne(r,i);return f.appContext=s,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Gu(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Lc(t,e,n,r,i=!1){if(ae(t)){t.forEach((f,d)=>Lc(f,e&&(ae(e)?e[d]:e),n,r,i));return}if(Yi(r)&&!i)return;const s=r.shapeFlag&4?Gu(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,ze(h,c)&&(h[c]=null)):wt(c)&&(c.value=null)),Te(l))kr(l,a,12,[o,u]);else{const f=yt(l),d=wt(l);if(f||d){const p=()=>{if(t.f){const m=f?ze(h,l)?h[l]:u[l]:l.value;i?ae(m)&&cp(m,s):ae(m)?m.includes(s)||m.push(s):f?(u[l]=[s],ze(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ze(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Kt(p,n)):p()}}}let Yr=!1;const Hl=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Kl=t=>t.nodeType===8;function lA(t){const{mt:e,p:n,o:{patchProp:r,createText:i,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),kc(),g._vnode=v;return}Yr=!1,h(g.firstChild,v,null,null,null),kc(),g._vnode=v,Yr&&console.error("Hydration completed but contains mismatches.")},h=(v,g,E,w,T,S=!1)=>{const x=Kl(v)&&v.data==="[",I=()=>m(v,g,E,w,T,x),{type:C,ref:P,shapeFlag:L,patchFlag:U}=g;let k=v.nodeType;g.el=v,U===-2&&(S=!1,g.dynamicChildren=null);let O=null;switch(C){case is:k!==3?g.children===""?(l(g.el=i(""),o(v),v),O=v):O=I():(v.data!==g.children&&(Yr=!0,v.data=g.children),O=s(v));break;case on:k!==8||x?O=I():O=s(v);break;case Xi:if(x&&(v=s(v),k=v.nodeType),k===1||k===3){O=v;const J=!g.children.length;for(let B=0;B<g.staticCount;B++)J&&(g.children+=O.nodeType===1?O.outerHTML:O.data),B===g.staticCount-1&&(g.anchor=O),O=s(O);return x?s(O):O}else I();break;case mt:x?O=p(v,g,E,w,T,S):O=I();break;default:if(L&1)k!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?O=I():O=f(v,g,E,w,T,S);else if(L&6){g.slotScopeIds=T;const J=o(v);if(e(g,J,null,E,w,Hl(J),S),O=x?y(v):s(v),O&&Kl(O)&&O.data==="teleport end"&&(O=s(O)),Yi(g)){let B;x?(B=Ne(mt),B.anchor=O?O.previousSibling:J.lastChild):B=v.nodeType===3?Ur(""):Ne("div"),B.el=v,g.component.subTree=B}}else L&64?k!==8?O=I():O=g.type.hydrate(v,g,E,w,T,S,t,d):L&128&&(O=g.type.hydrate(v,g,E,w,Hl(o(v)),T,S,t,h))}return P!=null&&Lc(P,null,w,g),O},f=(v,g,E,w,T,S)=>{S=S||!!g.dynamicChildren;const{type:x,props:I,patchFlag:C,shapeFlag:P,dirs:L}=g,U=x==="input"&&L||x==="option";if(U||C!==-1){if(L&&ir(g,null,E,"created"),I)if(U||!S||C&48)for(const O in I)(U&&O.endsWith("value")||rl(O)&&!aa(O))&&r(v,O,null,I[O],!1,void 0,E);else I.onClick&&r(v,"onClick",null,I.onClick,!1,void 0,E);let k;if((k=I&&I.onVnodeBeforeMount)&&_n(k,E,g),L&&ir(g,null,E,"beforeMount"),((k=I&&I.onVnodeMounted)||L)&&E0(()=>{k&&_n(k,E,g),L&&ir(g,null,E,"mounted")},w),P&16&&!(I&&(I.innerHTML||I.textContent))){let O=d(v.firstChild,g,v,E,w,T,S);for(;O;){Yr=!0;const J=O;O=O.nextSibling,a(J)}}else P&8&&v.textContent!==g.children&&(Yr=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,w,T,S,x)=>{x=x||!!g.dynamicChildren;const I=g.children,C=I.length;for(let P=0;P<C;P++){const L=x?I[P]:I[P]=Nn(I[P]);if(v)v=h(v,L,w,T,S,x);else{if(L.type===is&&!L.children)continue;Yr=!0,n(null,L,E,null,w,T,Hl(E),S)}}return v},p=(v,g,E,w,T,S)=>{const{slotScopeIds:x}=g;x&&(T=T?T.concat(x):x);const I=o(v),C=d(s(v),g,I,E,w,T,S);return C&&Kl(C)&&C.data==="]"?s(g.anchor=C):(Yr=!0,l(g.anchor=c("]"),I,C),C)},m=(v,g,E,w,T,S)=>{if(Yr=!0,g.el=null,S){const C=y(v);for(;;){const P=s(v);if(P&&P!==C)a(P);else break}}const x=s(v),I=o(v);return a(v),n(null,g,I,x,E,w,Hl(I),T),x},y=v=>{let g=0;for(;v;)if(v=s(v),v&&Kl(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return s(v);g--}return v};return[u,h]}const Kt=E0;function j0(t){return H0(t)}function V0(t){return H0(t,lA)}function H0(t,e){const n=PI();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=qn,insertStaticContent:p}=t,m=(_,b,N,F=null,$=null,K=null,q=!1,Y=null,z=!!b.dynamicChildren)=>{if(_===b)return;_&&!Yn(_,b)&&(F=H(_),De(_,$,K,!0),_=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:j,ref:le,shapeFlag:ie}=b;switch(j){case is:y(_,b,N,F);break;case on:v(_,b,N,F);break;case Xi:_==null&&g(b,N,F,q);break;case mt:U(_,b,N,F,$,K,q,Y,z);break;default:ie&1?T(_,b,N,F,$,K,q,Y,z):ie&6?k(_,b,N,F,$,K,q,Y,z):(ie&64||ie&128)&&j.process(_,b,N,F,$,K,q,Y,z,me)}le!=null&&$&&Lc(le,_&&_.ref,K,b||_,!b)},y=(_,b,N,F)=>{if(_==null)r(b.el=a(b.children),N,F);else{const $=b.el=_.el;b.children!==_.children&&c($,b.children)}},v=(_,b,N,F)=>{_==null?r(b.el=l(b.children||""),N,F):b.el=_.el},g=(_,b,N,F)=>{[_.el,_.anchor]=p(_.children,b,N,F,_.el,_.anchor)},E=({el:_,anchor:b},N,F)=>{let $;for(;_&&_!==b;)$=f(_),r(_,N,F),_=$;r(b,N,F)},w=({el:_,anchor:b})=>{let N;for(;_&&_!==b;)N=f(_),i(_),_=N;i(b)},T=(_,b,N,F,$,K,q,Y,z)=>{q=q||b.type==="svg",_==null?S(b,N,F,$,K,q,Y,z):C(_,b,$,K,q,Y,z)},S=(_,b,N,F,$,K,q,Y)=>{let z,j;const{type:le,props:ie,shapeFlag:ce,transition:de,dirs:Ae}=_;if(z=_.el=o(_.type,K,ie&&ie.is,ie),ce&8?u(z,_.children):ce&16&&I(_.children,z,null,F,$,K&&le!=="foreignObject",q,Y),Ae&&ir(_,null,F,"created"),x(z,_,_.scopeId,q,F),ie){for(const je in ie)je!=="value"&&!aa(je)&&s(z,je,null,ie[je],K,_.children,F,$,W);"value"in ie&&s(z,"value",null,ie.value),(j=ie.onVnodeBeforeMount)&&_n(j,F,_)}Ae&&ir(_,null,F,"beforeMount");const Qe=(!$||$&&!$.pendingBranch)&&de&&!de.persisted;Qe&&de.beforeEnter(z),r(z,b,N),((j=ie&&ie.onVnodeMounted)||Qe||Ae)&&Kt(()=>{j&&_n(j,F,_),Qe&&de.enter(z),Ae&&ir(_,null,F,"mounted")},$)},x=(_,b,N,F,$)=>{if(N&&d(_,N),F)for(let K=0;K<F.length;K++)d(_,F[K]);if($){let K=$.subTree;if(b===K){const q=$.vnode;x(_,q,q.scopeId,q.slotScopeIds,$.parent)}}},I=(_,b,N,F,$,K,q,Y,z=0)=>{for(let j=z;j<_.length;j++){const le=_[j]=Y?ei(_[j]):Nn(_[j]);m(null,le,b,N,F,$,K,q,Y)}},C=(_,b,N,F,$,K,q)=>{const Y=b.el=_.el;let{patchFlag:z,dynamicChildren:j,dirs:le}=b;z|=_.patchFlag&16;const ie=_.props||rt,ce=b.props||rt;let de;N&&Pi(N,!1),(de=ce.onVnodeBeforeUpdate)&&_n(de,N,b,_),le&&ir(b,_,N,"beforeUpdate"),N&&Pi(N,!0);const Ae=$&&b.type!=="foreignObject";if(j?P(_.dynamicChildren,j,Y,N,F,Ae,K):q||se(_,b,Y,null,N,F,Ae,K,!1),z>0){if(z&16)L(Y,b,ie,ce,N,F,$);else if(z&2&&ie.class!==ce.class&&s(Y,"class",null,ce.class,$),z&4&&s(Y,"style",ie.style,ce.style,$),z&8){const Qe=b.dynamicProps;for(let je=0;je<Qe.length;je++){const A=Qe[je],R=ie[A],D=ce[A];(D!==R||A==="value")&&s(Y,A,R,D,$,_.children,N,F,W)}}z&1&&_.children!==b.children&&u(Y,b.children)}else!q&&j==null&&L(Y,b,ie,ce,N,F,$);((de=ce.onVnodeUpdated)||le)&&Kt(()=>{de&&_n(de,N,b,_),le&&ir(b,_,N,"updated")},F)},P=(_,b,N,F,$,K,q)=>{for(let Y=0;Y<b.length;Y++){const z=_[Y],j=b[Y],le=z.el&&(z.type===mt||!Yn(z,j)||z.shapeFlag&70)?h(z.el):N;m(z,j,le,null,F,$,K,q,!0)}},L=(_,b,N,F,$,K,q)=>{if(N!==F){if(N!==rt)for(const Y in N)!aa(Y)&&!(Y in F)&&s(_,Y,N[Y],null,q,b.children,$,K,W);for(const Y in F){if(aa(Y))continue;const z=F[Y],j=N[Y];z!==j&&Y!=="value"&&s(_,Y,j,z,q,b.children,$,K,W)}"value"in F&&s(_,"value",N.value,F.value)}},U=(_,b,N,F,$,K,q,Y,z)=>{const j=b.el=_?_.el:a(""),le=b.anchor=_?_.anchor:a("");let{patchFlag:ie,dynamicChildren:ce,slotScopeIds:de}=b;de&&(Y=Y?Y.concat(de):de),_==null?(r(j,N,F),r(le,N,F),I(b.children,N,le,$,K,q,Y,z)):ie>0&&ie&64&&ce&&_.dynamicChildren?(P(_.dynamicChildren,ce,N,$,K,q,Y),(b.key!=null||$&&b===$.subTree)&&Dp(_,b,!0)):se(_,b,N,le,$,K,q,Y,z)},k=(_,b,N,F,$,K,q,Y,z)=>{b.slotScopeIds=Y,_==null?b.shapeFlag&512?$.ctx.activate(b,N,F,q,z):O(b,N,F,$,K,q,z):J(_,b,z)},O=(_,b,N,F,$,K,q)=>{const Y=_.component=Q0(_,F,$);if(al(_)&&(Y.ctx.renderer=me),q0(Y),Y.asyncDep){if($&&$.registerDep(Y,B),!_.el){const z=Y.subTree=Ne(on);v(null,z,b,N)}return}B(Y,_,b,N,$,K,q)},J=(_,b,N)=>{const F=b.component=_.component;if(xC(_,b,N))if(F.asyncDep&&!F.asyncResolved){Q(F,b,N);return}else F.next=b,bC(F.update),F.update();else b.el=_.el,F.vnode=b},B=(_,b,N,F,$,K,q)=>{const Y=()=>{if(_.isMounted){let{next:le,bu:ie,u:ce,parent:de,vnode:Ae}=_,Qe=le,je;Pi(_,!1),le?(le.el=Ae.el,Q(_,le,q)):le=Ae,ie&&Hs(ie),(je=le.props&&le.props.onVnodeBeforeUpdate)&&_n(je,de,le,Ae),Pi(_,!0);const A=gc(_),R=_.subTree;_.subTree=A,m(R,A,h(R.el),H(R),_,$,K),le.el=A.el,Qe===null&&Sp(_,A.el),ce&&Kt(ce,$),(je=le.props&&le.props.onVnodeUpdated)&&Kt(()=>_n(je,de,le,Ae),$)}else{let le;const{el:ie,props:ce}=b,{bm:de,m:Ae,parent:Qe}=_,je=Yi(b);if(Pi(_,!1),de&&Hs(de),!je&&(le=ce&&ce.onVnodeBeforeMount)&&_n(le,Qe,b),Pi(_,!0),ie&&_e){const A=()=>{_.subTree=gc(_),_e(ie,_.subTree,_,$,null)};je?b.type.__asyncLoader().then(()=>!_.isUnmounted&&A()):A()}else{const A=_.subTree=gc(_);m(null,A,N,F,_,$,K),b.el=A.el}if(Ae&&Kt(Ae,$),!je&&(le=ce&&ce.onVnodeMounted)){const A=b;Kt(()=>_n(le,Qe,A),$)}(b.shapeFlag&256||Qe&&Yi(Qe.vnode)&&Qe.vnode.shapeFlag&256)&&_.a&&Kt(_.a,$),_.isMounted=!0,b=N=F=null}},z=_.effect=new sl(Y,()=>Fu(j),_.scope),j=_.update=()=>z.run();j.id=_.uid,Pi(_,!0),j()},Q=(_,b,N)=>{b.component=_;const F=_.vnode.props;_.vnode=b,_.next=null,nA(_,b.props,F,N),sA(_,b.children,N),To(),Am(),So()},se=(_,b,N,F,$,K,q,Y,z=!1)=>{const j=_&&_.children,le=_?_.shapeFlag:0,ie=b.children,{patchFlag:ce,shapeFlag:de}=b;if(ce>0){if(ce&128){ct(j,ie,N,F,$,K,q,Y,z);return}else if(ce&256){Me(j,ie,N,F,$,K,q,Y,z);return}}de&8?(le&16&&W(j,$,K),ie!==j&&u(N,ie)):le&16?de&16?ct(j,ie,N,F,$,K,q,Y,z):W(j,$,K,!0):(le&8&&u(N,""),de&16&&I(ie,N,F,$,K,q,Y,z))},Me=(_,b,N,F,$,K,q,Y,z)=>{_=_||js,b=b||js;const j=_.length,le=b.length,ie=Math.min(j,le);let ce;for(ce=0;ce<ie;ce++){const de=b[ce]=z?ei(b[ce]):Nn(b[ce]);m(_[ce],de,N,null,$,K,q,Y,z)}j>le?W(_,$,K,!0,!1,ie):I(b,N,F,$,K,q,Y,z,ie)},ct=(_,b,N,F,$,K,q,Y,z)=>{let j=0;const le=b.length;let ie=_.length-1,ce=le-1;for(;j<=ie&&j<=ce;){const de=_[j],Ae=b[j]=z?ei(b[j]):Nn(b[j]);if(Yn(de,Ae))m(de,Ae,N,null,$,K,q,Y,z);else break;j++}for(;j<=ie&&j<=ce;){const de=_[ie],Ae=b[ce]=z?ei(b[ce]):Nn(b[ce]);if(Yn(de,Ae))m(de,Ae,N,null,$,K,q,Y,z);else break;ie--,ce--}if(j>ie){if(j<=ce){const de=ce+1,Ae=de<le?b[de].el:F;for(;j<=ce;)m(null,b[j]=z?ei(b[j]):Nn(b[j]),N,Ae,$,K,q,Y,z),j++}}else if(j>ce)for(;j<=ie;)De(_[j],$,K,!0),j++;else{const de=j,Ae=j,Qe=new Map;for(j=Ae;j<=ce;j++){const fe=b[j]=z?ei(b[j]):Nn(b[j]);fe.key!=null&&Qe.set(fe.key,j)}let je,A=0;const R=ce-Ae+1;let D=!1,V=0;const re=new Array(R);for(j=0;j<R;j++)re[j]=0;for(j=de;j<=ie;j++){const fe=_[j];if(A>=R){De(fe,$,K,!0);continue}let Re;if(fe.key!=null)Re=Qe.get(fe.key);else for(je=Ae;je<=ce;je++)if(re[je-Ae]===0&&Yn(fe,b[je])){Re=je;break}Re===void 0?De(fe,$,K,!0):(re[Re-Ae]=j+1,Re>=V?V=Re:D=!0,m(fe,b[Re],N,null,$,K,q,Y,z),A++)}const pe=D?cA(re):js;for(je=pe.length-1,j=R-1;j>=0;j--){const fe=Ae+j,Re=b[fe],dt=fe+1<le?b[fe+1].el:F;re[j]===0?m(null,Re,N,dt,$,K,q,Y,z):D&&(je<0||j!==pe[je]?Be(Re,N,dt,2):je--)}}},Be=(_,b,N,F,$=null)=>{const{el:K,type:q,transition:Y,children:z,shapeFlag:j}=_;if(j&6){Be(_.component.subTree,b,N,F);return}if(j&128){_.suspense.move(b,N,F);return}if(j&64){q.move(_,b,N,me);return}if(q===mt){r(K,b,N);for(let ie=0;ie<z.length;ie++)Be(z[ie],b,N,F);r(_.anchor,b,N);return}if(q===Xi){E(_,b,N);return}if(F!==2&&j&1&&Y)if(F===0)Y.beforeEnter(K),r(K,b,N),Kt(()=>Y.enter(K),$);else{const{leave:ie,delayLeave:ce,afterLeave:de}=Y,Ae=()=>r(K,b,N),Qe=()=>{ie(K,()=>{Ae(),de&&de()})};ce?ce(K,Ae,Qe):Qe()}else r(K,b,N)},De=(_,b,N,F=!1,$=!1)=>{const{type:K,props:q,ref:Y,children:z,dynamicChildren:j,shapeFlag:le,patchFlag:ie,dirs:ce}=_;if(Y!=null&&Lc(Y,null,N,_,!0),le&256){b.ctx.deactivate(_);return}const de=le&1&&ce,Ae=!Yi(_);let Qe;if(Ae&&(Qe=q&&q.onVnodeBeforeUnmount)&&_n(Qe,b,_),le&6)M(_.component,N,F);else{if(le&128){_.suspense.unmount(N,F);return}de&&ir(_,null,b,"beforeUnmount"),le&64?_.type.remove(_,b,N,$,me,F):j&&(K!==mt||ie>0&&ie&64)?W(j,b,N,!1,!0):(K===mt&&ie&384||!$&&le&16)&&W(z,b,N),F&&at(_)}(Ae&&(Qe=q&&q.onVnodeUnmounted)||de)&&Kt(()=>{Qe&&_n(Qe,b,_),de&&ir(_,null,b,"unmounted")},N)},at=_=>{const{type:b,el:N,anchor:F,transition:$}=_;if(b===mt){Et(N,F);return}if(b===Xi){w(_);return}const K=()=>{i(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:q,delayLeave:Y}=$,z=()=>q(N,K);Y?Y(_.el,K,z):z()}else K()},Et=(_,b)=>{let N;for(;_!==b;)N=f(_),i(_),_=N;i(b)},M=(_,b,N)=>{const{bum:F,scope:$,update:K,subTree:q,um:Y}=_;F&&Hs(F),$.stop(),K&&(K.active=!1,De(q,_,b,N)),Y&&Kt(Y,b),Kt(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},W=(_,b,N,F=!1,$=!1,K=0)=>{for(let q=K;q<_.length;q++)De(_[q],b,N,F,$)},H=_=>_.shapeFlag&6?H(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),ne=(_,b,N)=>{_==null?b._vnode&&De(b._vnode,null,null,!0):m(b._vnode||null,_,b,null,null,null,N),Am(),kc(),b._vnode=_},me={p:m,um:De,m:Be,r:at,mt:O,mc:I,pc:se,pbc:P,n:H,o:t};let We,_e;return e&&([We,_e]=e(me)),{render:ne,hydrate:We,createApp:aA(ne,We)}}function Pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dp(t,e,n=!1){const r=t.children,i=e.children;if(ae(r)&&ae(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ei(i[s]),a.el=o.el),n||Dp(o,a)),a.type===is&&(a.el=o.el)}}function cA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const uA=t=>t.__isTeleport,fa=t=>t&&(t.disabled||t.disabled===""),Um=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Wf=(t,e)=>{const n=t&&t.to;return yt(n)?e?e(n):null:n},hA={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=fa(e.props);let{shapeFlag:g,children:E,dynamicChildren:w}=e;if(t==null){const T=e.el=m(""),S=e.anchor=m("");d(T,n,r),d(S,n,r);const x=e.target=Wf(e.props,p),I=e.targetAnchor=m("");x&&(d(I,x),o=o||Um(x));const C=(P,L)=>{g&16&&u(E,P,L,i,s,o,a,l)};v?C(n,S):x&&C(x,I)}else{e.el=t.el;const T=e.anchor=t.anchor,S=e.target=t.target,x=e.targetAnchor=t.targetAnchor,I=fa(t.props),C=I?n:S,P=I?T:x;if(o=o||Um(S),w?(f(t.dynamicChildren,w,C,i,s,o,a),Dp(t,e,!0)):l||h(t,e,C,P,i,s,o,a,!1),v)I||Wl(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Wf(e.props,p);L&&Wl(e,L,null,c,0)}else I&&Wl(e,S,x,c,1)}K0(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&s(u),(o||!fa(f))&&(s(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];i(p,e,n,!0,!!p.dynamicChildren)}},move:Wl,hydrate:fA};function Wl(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||fa(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&r(a,e,n)}function fA(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Wf(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(fa(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}K0(e)}return e.anchor&&o(e.anchor)}const dA=hA;function K0(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const mt=Symbol(void 0),is=Symbol(void 0),on=Symbol(void 0),Xi=Symbol(void 0),da=[];let Tn=null;function $e(t=!1){da.push(Tn=t?null:[])}function W0(){da.pop(),Tn=da[da.length-1]||null}let ss=1;function Gf(t){ss+=t}function G0(t){return t.dynamicChildren=ss>0?Tn||js:null,W0(),ss>0&&Tn&&Tn.push(t),t}function Dt(t,e,n,r,i,s){return G0(tt(t,e,n,r,i,s,!0))}function mn(t,e,n,r,i){return G0(Ne(t,e,n,r,i,!0))}function _i(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}function pA(t){}const Wu="__vInternal",z0=({key:t})=>t??null,mc=({ref:t,ref_key:e,ref_for:n})=>t!=null?yt(t)||wt(t)||Te(t)?{i:Yt,r:t,k:e,f:!!n}:t:null;function tt(t,e=null,n=null,r=0,i=null,s=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&z0(e),ref:e&&mc(e),scopeId:$u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Yt};return a?(kp(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),ss>0&&!o&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const Ne=gA;function gA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===P0)&&(t=on),_i(t)){const a=gr(t,e,!0);return n&&kp(a,n),ss>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(TA(t)&&(t=t.__vccOpts),e){e=Y0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=gs(a)),ot(l)&&(vp(l)&&!ae(l)&&(l=At({},l)),e.style=wo(l))}const o=yt(t)?1:y0(t)?128:uA(t)?64:ot(t)?4:Te(t)?2:0;return tt(t,e,n,r,i,o,s,!0)}function Y0(t){return t?vp(t)||Wu in t?At({},t):t:null}function gr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?X0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&z0(a),ref:e&&e.ref?n&&i?ae(i)?i.concat(mc(e)):[i,mc(e)]:mc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ur(t=" ",e=0){return Ne(is,null,t,e)}function mA(t,e){const n=Ne(Xi,null,t);return n.staticCount=e,n}function Fc(t="",e=!1){return e?($e(),mn(on,null,t)):Ne(on,null,t)}function Nn(t){return t==null||typeof t=="boolean"?Ne(on):ae(t)?Ne(mt,null,t.slice()):typeof t=="object"?ei(t):Ne(is,null,String(t))}function ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function kp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),kp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Wu in e)?e._ctx=Yt:i===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),r&64?(n=16,e=[Ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function X0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=gs([e.class,r.class]));else if(i==="style")e.style=wo([e.style,r.style]);else if(rl(i)){const s=e[i],o=r[i];o&&s!==o&&!(ae(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function _n(t,e,n,r=null){Pn(t,e,7,[n,r])}const vA=B0();let yA=0;function Q0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vA,s={uid:yA++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L0(r,i),emitsOptions:g0(r,i),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:r.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=SC.bind(null,s),t.ce&&t.ce(s),s}let Ct=null;const br=()=>Ct||Yt,wi=t=>{Ct=t,t.scope.on()},di=()=>{Ct&&Ct.scope.off(),Ct=null};function J0(t){return t.vnode.shapeFlag&4}let io=!1;function q0(t,e=!1){io=e;const{props:n,children:r}=t.vnode,i=J0(t);tA(t,n,i,e),iA(t,r);const s=i?EA(t,e):void 0;return io=!1,s}function EA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,jf));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?e_(t):null;wi(t),To();const s=kr(r,t,0,[t.props,i]);if(So(),di(),up(s)){if(s.then(di,di),e)return s.then(o=>{zf(t,o,e)}).catch(o=>{ys(o,t,0)});t.asyncDep=s}else zf(t,s,e)}else Z0(t,e)}function zf(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=_p(e)),Z0(t,n)}let Uc,Yf;function _A(t){Uc=t,Yf=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,XC))}}const wA=()=>!Uc;function Z0(t,e,n){const r=t.type;if(!t.render){if(!e&&Uc&&!r.render){const i=r.template||Np(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=At(At({isCustomElement:s,delimiters:a},o),l);r.render=Uc(i,c)}}t.render=r.render||qn,Yf&&Yf(t)}wi(t),To(),QC(t),So(),di()}function bA(t){return new Proxy(t.attrs,{get(e,n){return An(t,"get","$attrs"),e[n]}})}function e_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=bA(t))},slots:t.slots,emit:t.emit,expose:e}}function Gu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_p(ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ha)return ha[n](t)},has(e,n){return n in e||n in ha}}))}function Xf(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function TA(t){return Te(t)&&"__vccOpts"in t}const wn=(t,e)=>vC(t,e,io);function SA(){return null}function IA(){return null}function CA(t){}function AA(t,e){return null}function RA(){return t_().slots}function xA(){return t_().attrs}function t_(){const t=br();return t.setupContext||(t.setupContext=e_(t))}function OA(t,e){const n=ae(t)?t.reduce((r,i)=>(r[i]={},r),{}):t;for(const r in e){const i=n[r];i?ae(i)||Te(i)?n[r]={type:i,default:e[r]}:i.default=e[r]:i===null&&(n[r]={default:e[r]})}return n}function NA(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function PA(t){const e=br();let n=t();return di(),up(n)&&(n=n.catch(r=>{throw wi(e),r})),[n,()=>wi(e)]}function zu(t,e,n){const r=arguments.length;return r===2?ot(e)&&!ae(e)?_i(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_i(n)&&(n=[n]),Ne(t,e,n))}const n_=Symbol(""),r_=()=>jn(n_);function DA(){}function kA(t,e,n,r){const i=n[r];if(i&&i_(i,t))return i;const s=e();return s.memo=t.slice(),n[r]=s}function i_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(no(n[r],e[r]))return!1;return ss>0&&Tn&&Tn.push(t),!0}const s_="3.2.47",MA={createComponentInstance:Q0,setupComponent:q0,renderComponentRoot:gc,setCurrentRenderingInstance:Fa,isVNode:_i,normalizeVNode:Nn},LA=MA,FA=null,UA=null,$A="http://www.w3.org/2000/svg",ji=typeof document<"u"?document:null,$m=ji&&ji.createElement("template"),BA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?ji.createElementNS($A,t):ji.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>ji.createTextNode(t),createComment:t=>ji.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ji.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{$m.innerHTML=r?`<svg>${t}</svg>`:t;const a=$m.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function VA(t,e,n){const r=t.style,i=yt(n);if(n&&!i){if(e&&!yt(e))for(const s in e)n[s]==null&&Qf(r,s,"");for(const s in n)Qf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Bm=/\s*!important$/;function Qf(t,e,n){if(ae(n))n.forEach(r=>Qf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=HA(t,e);Bm.test(n)?t.setProperty(Un(r),n.replace(Bm,""),"important"):t[r]=n}}const jm=["Webkit","Moz","ms"],Vh={};function HA(t,e){const n=Vh[e];if(n)return n;let r=In(e);if(r!=="filter"&&r in t)return Vh[e]=r;r=il(r);for(let i=0;i<jm.length;i++){const s=jm[i]+r;if(s in t)return Vh[e]=s}return e}const Vm="http://www.w3.org/1999/xlink";function KA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vm,e.slice(6,e.length)):t.setAttributeNS(Vm,e,n);else{const s=TI(e);n==null||s&&!VE(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function WA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=VE(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rr(t,e,n,r){t.addEventListener(e,n,r)}function GA(t,e,n,r){t.removeEventListener(e,n,r)}function zA(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=YA(e);if(r){const c=s[e]=JA(r,i);Rr(t,a,c,l)}else o&&(GA(t,a,o,l),s[e]=void 0)}}const Hm=/(?:Once|Passive|Capture)$/;function YA(t){let e;if(Hm.test(t)){e={};let r;for(;r=t.match(Hm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Un(t.slice(2)),e]}let Hh=0;const XA=Promise.resolve(),QA=()=>Hh||(XA.then(()=>Hh=0),Hh=Date.now());function JA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pn(qA(r,n.value),e,5,[r])};return n.value=t,n.attached=QA(),n}function qA(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Km=/^on[a-z]/,ZA=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?jA(t,r,i):e==="style"?VA(t,n,r):rl(e)?lp(e)||zA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e1(t,e,r,i))?WA(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),KA(t,e,r,i))};function e1(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Km.test(e)&&Te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Km.test(e)&&yt(n)?!1:e in t}function o_(t,e){const n=Lt(t);class r extends Yu{constructor(s){super(n,s,e)}}return r.def=n,r}const t1=t=>o_(t,w_),n1=typeof HTMLElement<"u"?HTMLElement:class{};class Yu extends n1{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Es(()=>{this._connected||(Zf(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(r,i=!1)=>{const{props:s,styles:o}=r;let a;if(s&&!ae(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Pc(this._props[l])),(a||(a=Object.create(null)))[In(l)]=!0)}this._numberProps=a,i&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=ae(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(In))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(s){this._setProp(i,s)}})}_setAttr(e){let n=this.getAttribute(e);const r=In(e);this._numberProps&&this._numberProps[r]&&(n=Pc(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Un(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Un(e),n+""):n||this.removeAttribute(Un(e))))}_update(){Zf(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ne(this._def,At({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,{detail:o}))};n.emit=(s,...o)=>{r(s,o),Un(s)!==s&&r(Un(s),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Yu){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function r1(t="$style"){{const e=br();if(!e)return rt;const n=e.type.__cssModules;if(!n)return rt;const r=n[t];return r||rt}}function i1(t){const e=br();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>qf(s,i))},r=()=>{const i=t(e.proxy);Jf(e.subTree,i),n(i)};_0(r),_s(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Ku(()=>i.disconnect())})}function Jf(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Jf(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)qf(t.el,e);else if(t.type===mt)t.children.forEach(n=>Jf(n,e));else if(t.type===Xi){let{el:n,anchor:r}=t;for(;n&&(qf(n,e),n!==r);)n=n.nextSibling}}function qf(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const Xr="transition",Fo="animation",Mp=(t,{slots:e})=>zu(Ap,l_(t),e);Mp.displayName="Transition";const a_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},s1=Mp.props=At({},Ap.props,a_),Di=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wm=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function l_(t){const e={};for(const U in t)U in a_||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=o1(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:w,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:x=g,onAppearCancelled:I=E}=e,C=(U,k,O)=>{qr(U,k?u:a),qr(U,k?c:o),O&&O()},P=(U,k)=>{U._isLeaving=!1,qr(U,h),qr(U,d),qr(U,f),k&&k()},L=U=>(k,O)=>{const J=U?x:g,B=()=>C(k,U,O);Di(J,[k,B]),Gm(()=>{qr(k,U?l:s),Cr(k,U?u:a),Wm(J)||zm(k,r,m,B)})};return At(e,{onBeforeEnter(U){Di(v,[U]),Cr(U,s),Cr(U,o)},onBeforeAppear(U){Di(S,[U]),Cr(U,l),Cr(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const O=()=>P(U,k);Cr(U,h),u_(),Cr(U,f),Gm(()=>{U._isLeaving&&(qr(U,h),Cr(U,d),Wm(w)||zm(U,r,y,O))}),Di(w,[U,O])},onEnterCancelled(U){C(U,!1),Di(E,[U])},onAppearCancelled(U){C(U,!0),Di(I,[U])},onLeaveCancelled(U){P(U),Di(T,[U])}})}function o1(t){if(t==null)return null;if(ot(t))return[Kh(t.enter),Kh(t.leave)];{const e=Kh(t);return[e,e]}}function Kh(t){return Pc(t)}function Cr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Gm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let a1=0;function zm(t,e,n,r){const i=t._endId=++a1,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=c_(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),s()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function c_(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${Xr}Delay`),s=r(`${Xr}Duration`),o=Ym(i,s),a=r(`${Fo}Delay`),l=r(`${Fo}Duration`),c=Ym(a,l);let u=null,h=0,f=0;e===Xr?o>0&&(u=Xr,h=o,f=s.length):e===Fo?c>0&&(u=Fo,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Xr:Fo:null,f=u?u===Xr?s.length:l.length:0);const d=u===Xr&&/\b(transform|all)(,|$)/.test(r(`${Xr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Ym(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Xm(n)+Xm(t[r])))}function Xm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function u_(){return document.body.offsetHeight}const h_=new WeakMap,f_=new WeakMap,d_={name:"TransitionGroup",props:At({},s1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=br(),r=Cp();let i,s;return Vu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!d1(i[0].el,n.vnode.el,o))return;i.forEach(u1),i.forEach(h1);const a=i.filter(f1);u_(),a.forEach(l=>{const c=l.el,u=c.style;Cr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,qr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ke(t),a=l_(o);let l=o.tag||mt;i=s,s=e.default?Bu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&rs(u,ro(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];rs(u,ro(u,a,r,n)),h_.set(u,u.el.getBoundingClientRect())}return Ne(l,null,s)}}},l1=t=>delete t.mode;d_.props;const c1=d_;function u1(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function h1(t){f_.set(t,t.el.getBoundingClientRect())}function f1(t){const e=h_.get(t),n=f_.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function d1(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=c_(r);return i.removeChild(r),s}const bi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Hs(e,n):e};function p1(t){t.target.composing=!0}function Qm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $c={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=bi(i);const s=r||i.props&&i.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Nc(a)),t._assign(a)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",p1),Rr(t,"compositionend",Qm),Rr(t,"change",Qm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=bi(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Nc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Lp={deep:!0,created(t,e,n){t._assign=bi(n),Rr(t,"change",()=>{const r=t._modelValue,i=so(t),s=t.checked,o=t._assign;if(ae(r)){const a=xu(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(ms(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(g_(t,s))})},mounted:Jm,beforeUpdate(t,e,n){t._assign=bi(n),Jm(t,e,n)}};function Jm(t,{value:e,oldValue:n},r){t._modelValue=e,ae(e)?t.checked=xu(e,r.props.value)>-1:ms(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=yi(e,g_(t,!0)))}const Fp={created(t,{value:e},n){t.checked=yi(e,n.props.value),t._assign=bi(n),Rr(t,"change",()=>{t._assign(so(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=bi(r),e!==n&&(t.checked=yi(e,r.props.value))}},p_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=ms(e);Rr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Nc(so(o)):so(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=bi(r)},mounted(t,{value:e}){qm(t,e)},beforeUpdate(t,e,n){t._assign=bi(n)},updated(t,{value:e}){qm(t,e)}};function qm(t,e){const n=t.multiple;if(!(n&&!ae(e)&&!ms(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=so(s);if(n)ae(e)?s.selected=xu(e,o)>-1:s.selected=e.has(o);else if(yi(so(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function so(t){return"_value"in t?t._value:t.value}function g_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const m_={created(t,e,n){Gl(t,e,n,null,"created")},mounted(t,e,n){Gl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Gl(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Gl(t,e,n,r,"updated")}};function v_(t,e){switch(t){case"SELECT":return p_;case"TEXTAREA":return $c;default:switch(e){case"checkbox":return Lp;case"radio":return Fp;default:return $c}}}function Gl(t,e,n,r,i){const o=v_(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}function g1(){$c.getSSRProps=({value:t})=>({value:t}),Fp.getSSRProps=({value:t},e)=>{if(e.props&&yi(e.props.value,t))return{checked:!0}},Lp.getSSRProps=({value:t},e)=>{if(ae(t)){if(e.props&&xu(t,e.props.value)>-1)return{checked:!0}}else if(ms(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},m_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=v_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const m1=["ctrl","shift","alt","meta"],v1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>m1.some(n=>t[`${n}Key`]&&!e.includes(n))},y1=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=v1[e[i]];if(s&&s(n,e))return}return t(n,...r)},E1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_1=(t,e)=>n=>{if(!("key"in n))return;const r=Un(n.key);if(e.some(i=>i===r||E1[i]===r))return t(n)},Bc={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Uo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Uo(t,!0),r.enter(t)):r.leave(t,()=>{Uo(t,!1)}):Uo(t,e))},beforeUnmount(t,{value:e}){Uo(t,e)}};function Uo(t,e){t.style.display=e?t._vod:"none"}function w1(){Bc.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const y_=At({patchProp:ZA},BA);let pa,Zm=!1;function E_(){return pa||(pa=j0(y_))}function __(){return pa=Zm?pa:V0(y_),Zm=!0,pa}const Zf=(...t)=>{E_().render(...t)},w_=(...t)=>{__().hydrate(...t)},b_=(...t)=>{const e=E_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=T_(r);if(!i)return;const s=e._component;!Te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},b1=(...t)=>{const e=__().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=T_(r);if(i)return n(i,!0,i instanceof SVGElement)},e};function T_(t){return yt(t)?document.querySelector(t):t}let ev=!1;const T1=()=>{ev||(ev=!0,g1(),w1())},S1=()=>{},I1=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Ap,Comment:on,EffectScope:fp,Fragment:mt,KeepAlive:VC,ReactiveEffect:sl,Static:Xi,Suspense:NC,Teleport:dA,Text:is,Transition:Mp,TransitionGroup:c1,VueElement:Yu,assertNumber:EC,callWithAsyncErrorHandling:Pn,callWithErrorHandling:kr,camelize:In,capitalize:il,cloneVNode:gr,compatUtils:UA,compile:S1,computed:wn,createApp:b_,createBlock:mn,createCommentVNode:Fc,createElementBlock:Dt,createElementVNode:tt,createHydrationRenderer:V0,createPropsRestProxy:NA,createRenderer:j0,createSSRApp:b1,createSlots:zC,createStaticVNode:mA,createTextVNode:Ur,createVNode:Ne,customRef:pC,defineAsyncComponent:BC,defineComponent:Lt,defineCustomElement:o_,defineEmits:IA,defineExpose:CA,defineProps:SA,defineSSRCustomElement:t1,get devtools(){return Ns},effect:MI,effectScope:Nu,getCurrentInstance:br,getCurrentScope:dp,getTransitionRawChildren:Bu,guardReactiveProps:Y0,h:zu,handleError:ys,hydrate:w_,initCustomFormatter:DA,initDirectivesForSSR:T1,inject:jn,isMemoSame:i_,isProxy:vp,isReactive:ur,isReadonly:ts,isRef:wt,isRuntimeOnly:wA,isShallow:Da,isVNode:_i,markRaw:ns,mergeDefaults:OA,mergeProps:X0,nextTick:Es,normalizeClass:gs,normalizeProps:wI,normalizeStyle:wo,onActivated:T0,onBeforeMount:C0,onBeforeUnmount:Hu,onBeforeUpdate:A0,onDeactivated:S0,onErrorCaptured:N0,onMounted:_s,onRenderTracked:O0,onRenderTriggered:x0,onScopeDispose:zE,onServerPrefetch:R0,onUnmounted:Ku,onUpdated:Vu,openBlock:$e,popScopeId:v0,provide:ca,proxyRefs:_p,pushScopeId:m0,queuePostFlushCb:Tp,reactive:vs,readonly:mp,ref:hr,registerRuntimeCompiler:_A,render:Zf,renderList:ll,renderSlot:ua,resolveComponent:xp,resolveDirective:GC,resolveDynamicComponent:WC,resolveFilter:FA,resolveTransitionHooks:ro,setBlockTracking:Gf,setDevtoolsHook:p0,setTransitionHooks:rs,shallowReactive:o0,shallowReadonly:cC,shallowRef:a0,ssrContextKey:n_,ssrUtils:LA,stop:LI,toDisplayString:pn,toHandlerKey:la,toHandlers:YC,toRaw:ke,toRef:wp,toRefs:c0,transformVNodeArgs:pA,triggerRef:hC,unref:st,useAttrs:xA,useCssModule:r1,useCssVars:i1,useSSRContext:r_,useSlots:RA,useTransitionState:Cp,vModelCheckbox:Lp,vModelDynamic:m_,vModelRadio:Fp,vModelSelect:p_,vModelText:$c,vShow:Bc,version:s_,warn:yC,watch:fi,watchEffect:LC,watchPostEffect:_0,watchSyncEffect:FC,withAsyncContext:PA,withCtx:er,withDefaults:AA,withDirectives:$f,withKeys:_1,withMemo:kA,withModifiers:y1,withScopeId:IC},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ee=function(t,e){if(!t)throw Io(e)},Io=function(t){return new Error("Firebase Database ("+S_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},C1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new A1;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(t){const e=I_(t);return Xu.encodeByteArray(e,!0)},jc=function(t){return C_(t).replace(/\./g,"")},Vc=function(t){try{return Xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){return A_(void 0,t)}function A_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!x1(n)||(t[n]=A_(t[n],e[n]));return t}function x1(t){return t!=="__proto__"}/**
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
 */function O1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N1=()=>O1().__FIREBASE_DEFAULTS__,P1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vc(t[1]);return e&&JSON.parse(e)},Up=()=>{try{return N1()||P1()||D1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=Up())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k1=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},M1=()=>{var t;return(t=Up())===null||t===void 0?void 0:t.config},x_=t=>{var e;return(e=Up())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function L1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jc(JSON.stringify(n)),jc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function F1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function O_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U1(){const t=un();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N_(){return S_.NODE_ADMIN===!0}function P_(){try{return typeof indexedDB=="object"}catch{return!1}}function $1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=B1,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?j1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tr(i,a,r)}}function j1(t,e){return t.replace(V1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return JSON.parse(t)}function zt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ba(Vc(s[0])||""),n=Ba(Vc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},H1=function(t){const e=D_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K1=function(t){const e=D_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!Kc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class W1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function G1(t,e){const n=new z1(t,e);return n.subscribe.bind(n)}class z1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wh),i.error===void 0&&(i.error=Wh),i.complete===void 0&&(i.complete=Wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wh(){}function X1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,ee(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ai(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fi="[DEFAULT]";/**
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
 */class J1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z1(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q1(t){return t===Fi?void 0:t}function Z1(t){return t.instantiationMode==="EAGER"}/**
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
 */class eR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ye||(Ye={}));const tR={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},nR=Ye.INFO,rR={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},iR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=nR,this._logHandler=iR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}const sR=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function oR(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aR(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,td=new WeakMap,M_=new WeakMap,Gh=new WeakMap,Bp=new WeakMap;function lR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function cR(t){if(td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uR(t){nd=t(nd)}function hR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zh(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),pi(r)}:aR().includes(t)?function(...e){return t.apply(zh(this),e),pi(k_.get(this))}:function(...e){return pi(t.apply(zh(this),e))}}function fR(t){return typeof t=="function"?hR(t):(t instanceof IDBTransaction&&cR(t),sR(t,oR())?new Proxy(t,nd):t)}function pi(t){if(t instanceof IDBRequest)return lR(t);if(Gh.has(t))return Gh.get(t);const e=fR(t);return e!==t&&(Gh.set(t,e),Bp.set(e,t)),e}const zh=t=>Bp.get(t);function dR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pi(o.result),l.oldVersion,l.newVersion,pi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pR=["get","getKey","getAll","getAllKeys","count"],gR=["put","add","delete","clear"],Yh=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yh.set(e,s),s}uR(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
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
 */class mR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",sv="0.9.9";/**
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
 */const os=new cl("@firebase/app"),yR="@firebase/app-compat",ER="@firebase/analytics-compat",_R="@firebase/analytics",wR="@firebase/app-check-compat",bR="@firebase/app-check",TR="@firebase/auth",SR="@firebase/auth-compat",IR="@firebase/database",CR="@firebase/database-compat",AR="@firebase/functions",RR="@firebase/functions-compat",xR="@firebase/installations",OR="@firebase/installations-compat",NR="@firebase/messaging",PR="@firebase/messaging-compat",DR="@firebase/performance",kR="@firebase/performance-compat",MR="@firebase/remote-config",LR="@firebase/remote-config-compat",FR="@firebase/storage",UR="@firebase/storage-compat",$R="@firebase/firestore",BR="@firebase/firestore-compat",jR="firebase",VR="9.21.0";/**
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
 */const id="[DEFAULT]",HR={[rd]:"fire-core",[yR]:"fire-core-compat",[_R]:"fire-analytics",[ER]:"fire-analytics-compat",[bR]:"fire-app-check",[wR]:"fire-app-check-compat",[TR]:"fire-auth",[SR]:"fire-auth-compat",[IR]:"fire-rtdb",[CR]:"fire-rtdb-compat",[AR]:"fire-fn",[RR]:"fire-fn-compat",[xR]:"fire-iid",[OR]:"fire-iid-compat",[NR]:"fire-fcm",[PR]:"fire-fcm-compat",[DR]:"fire-perf",[kR]:"fire-perf-compat",[MR]:"fire-rc",[LR]:"fire-rc-compat",[FR]:"fire-gcs",[UR]:"fire-gcs-compat",[$R]:"fire-fst",[BR]:"fire-fst-compat","fire-js":"fire-js",[jR]:"fire-js-all"};/**
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
 */const Wc=new Map,sd=new Map;function KR(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(sd.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,t);for(const n of Wc.values())KR(n,t);return!0}function jp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const WR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gi=new Co("app","Firebase",WR);/**
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
 */class GR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=VR;function L_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:id,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gi.create("bad-app-name",{appName:String(i)});if(n||(n=M1()),!n)throw gi.create("no-options");const s=Wc.get(i);if(s){if(Kc(n,s.options)&&Kc(r,s.config))return s;throw gi.create("duplicate-app",{appName:i})}const o=new eR(i);for(const l of sd.values())o.addComponent(l);const a=new GR(n,r,o);return Wc.set(i,a),a}function Vp(t=id){const e=Wc.get(t);if(!e&&t===id)return L_();if(!e)throw gi.create("no-app",{appName:t});return e}function Dn(t,e,n){var r;let i=(r=HR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}mr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zR="firebase-heartbeat-database",YR=1,ja="firebase-heartbeat-store";let Xh=null;function F_(){return Xh||(Xh=dR(zR,YR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ja)}}}).catch(t=>{throw gi.create("idb-open",{originalErrorMessage:t.message})})),Xh}async function XR(t){try{return(await F_()).transaction(ja).objectStore(ja).get(U_(t))}catch(e){if(e instanceof Tr)os.warn(e.message);else{const n=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function ov(t,e){try{const r=(await F_()).transaction(ja,"readwrite");return await r.objectStore(ja).put(e,U_(t)),r.done}catch(n){if(n instanceof Tr)os.warn(n.message);else{const r=gi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function U_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QR=1024,JR=30*24*60*60*1e3;class qR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ex(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=av();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=av(),{heartbeatsToSend:n,unsentEntries:r}=ZR(this._heartbeatsCache.heartbeats),i=jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function av(){return new Date().toISOString().substring(0,10)}function ZR(t,e=QR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P_()?$1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await XR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lv(t){return jc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tx(t){mr(new tr("platform-logger",e=>new mR(e),"PRIVATE")),mr(new tr("heartbeat",e=>new qR(e),"PRIVATE")),Dn(rd,sv,t),Dn(rd,sv,"esm2017"),Dn("fire-js","")}tx("");function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nx=$_,B_=new Co("auth","Firebase",$_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new cl("@firebase/auth");function rx(t,...e){Gc.logLevel<=Ye.WARN&&Gc.warn(`Auth (${Ri}): ${t}`,...e)}function vc(t,...e){Gc.logLevel<=Ye.ERROR&&Gc.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,...e){throw Kp(t,...e)}function fr(t,...e){return Kp(t,...e)}function ix(t,e,n){const r=Object.assign(Object.assign({},nx()),{[e]:n});return new Co("auth","Firebase",r).create(e,{appName:t.name})}function Kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B_.create(t,...e)}function be(t,e,...n){if(!t)throw Kp(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vc(e),new Error(e)}function Br(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sx(){return cv()==="http:"||cv()==="https:"}function cv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||F1()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,Br(n>e,"Short delay should be less than long delay!"),this.isMobile=$p()||O_()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){Br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new ul(3e4,6e4);function V_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hl(t,e,n,r,i={}){return H_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),j_.fetch()(K_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lx),e);try{const i=new hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ix(t,u,c);$r(t,u)}}catch(i){if(i instanceof Tr)throw i;$r(t,"network-request-failed",{message:String(i)})}}async function ux(t,e,n,r,i={}){const s=await hl(t,e,n,r,i);return"mfaPendingCredential"in s&&$r(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`}class hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fr(this.auth,"network-request-failed")),cx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,e){return hl(t,"POST","/v1/accounts:delete",e)}async function dx(t,e){return hl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function px(t,e=!1){const n=Ai(t),r=await n.getIdToken(e),i=Gp(r);be(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ga(Qh(i.auth_time)),issuedAtTime:ga(Qh(i.iat)),expirationTime:ga(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vc(n);return i?JSON.parse(i):(vc("Failed to decode base64 JWT payload"),null)}catch(i){return vc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gx(t){const e=Gp(t);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tr&&mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Va(t,dx(n,{idToken:r}));be(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_x(s.providerUserInfo):[],a=Ex(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W_(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yx(t){const e=Ai(t);await zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ex(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _x(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){const n=await H_(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return be(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ha;return r&&(be(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(be(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(be(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){be(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new W_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return px(this,e)}reload(){return yx(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Va(this,fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:w,isAnonymous:T,providerData:S,stsTokenManager:x}=n;be(E&&x,e,"internal-error");const I=Ha.fromJSON(this.name,x);be(typeof E=="string",e,"internal-error"),Qr(h,e.name),Qr(f,e.name),be(typeof w=="boolean",e,"internal-error"),be(typeof T=="boolean",e,"internal-error"),Qr(d,e.name),Qr(p,e.name),Qr(m,e.name),Qr(y,e.name),Qr(v,e.name),Qr(g,e.name);const C=new Qi({uid:E,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:I,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(C.providerData=S.map(P=>Object.assign({},P))),y&&(C._redirectEventId=y),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function Or(t){Br(t instanceof Function,"Expected a class definition");let e=uv.get(t);return e?(Br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uv.set(t,e),e)}/**
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
 */class G_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}G_.type="NONE";const hv=G_;/**
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
 */function yc(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yc(this.userKey,i.apiKey,s),this.fullPersistenceKey=yc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(Or(hv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Or(hv);const o=yc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Qi._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(X_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(q_(e))return"Webos";if(zp(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=un()){return/firefox\//i.test(t)}function zp(t=un()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(t=un()){return/crios\//i.test(t)}function X_(t=un()){return/iemobile/i.test(t)}function Q_(t=un()){return/android/i.test(t)}function J_(t=un()){return/blackberry/i.test(t)}function q_(t=un()){return/webos/i.test(t)}function Ju(t=un()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bx(t=un()){var e;return Ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tx(){return U1()&&document.documentMode===10}function Z_(t=un()){return Ju(t)||Q_(t)||q_(t)||J_(t)||/windows phone/i.test(t)||X_(t)}function Sx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e=[]){let n;switch(t){case"Browser":n=fv(un());break;case"Worker":n=`${fv(un())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}async function tw(t,e){return hl(t,"GET","/v2/recaptchaConfig",V_(t,e))}function dv(t){return t!==void 0&&t.enterprise!==void 0}class nw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ix().appendChild(r)})}function Cx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ax="https://www.google.com/recaptcha/enterprise.js?render=",Rx="recaptcha-enterprise",xx="NO_RECAPTCHA";class Ox{constructor(e){this.type=Rx,this.auth=qu(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;dv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rw(Ax+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Nx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pv(this),this.idTokenSubscription=new pv(this),this.beforeStateQueue=new Nx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ai(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}async initializeRecaptchaConfig(){const e=await tw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ox(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return be(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qu(t){return Ai(t)}class pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){const n=jp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kc(s,e??{}))return i;$r(i,"already-initialized")}return n.initialize({options:e})}function kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mx(t,e,n){const r=qu(t);be(r._canInitEmulator,r,"emulator-config-failed"),be(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=iw(e),{host:o,port:a}=Lx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fx()}function iw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lx(t){const e=iw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gv(o)}}}function gv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return ux(t,"POST","/v1/accounts:signInWithIdp",V_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="http://localhost";class as extends sw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$r("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:Ux,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fl extends ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends fl{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends fl{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends fl{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=mv(r);return new ao({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mv(r);return new ao({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yc(e,n,r,i)}}function aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,r):s})}async function $x(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ao._forOperation(t,"link",r)}/**
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
 */async function Bx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Va(t,aw(r,i,e,t),n);be(s.idToken,r,"internal-error");const o=Gp(s.idToken);be(o,r,"internal-error");const{sub:a}=o;return be(t.uid===a,r,"user-mismatch"),ao._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$r(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(t,e,n=!1){const r="signIn",i=await aw(t,r,e),s=await ao._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function lw(t,e,n,r){return Ai(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return Ai(t).beforeAuthStateChanged(e,n)}const Xc="__sak";/**
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
 */class cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(){const t=un();return zp(t)||Ju(t)}const Kx=1e3,Wx=10;class uw extends cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hx()&&Sx(),this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uw.type="LOCAL";const Gx=uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const fw=hw;/**
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
 */function zx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await zx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Yx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Yp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function Xx(t){dr().location.href=t}/**
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
 */function dw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function Qx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qx(){return dw()?self:null}/**
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
 */const pw="firebaseLocalStorageDb",Zx=1,Qc="firebaseLocalStorage",gw="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eh(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function eO(){const t=indexedDB.deleteDatabase(pw);return new dl(t).toPromise()}function ad(){const t=indexedDB.open(pw,Zx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:gw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await eO(),e(await ad()))})})}async function vv(t,e,n){const r=eh(t,!0).put({[gw]:e,value:n});return new dl(r).toPromise()}async function tO(t,e){const n=eh(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function yv(t,e){const n=eh(t,!0).delete(e);return new dl(n).toPromise()}const nO=800,rO=3;class mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(qx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qx(),!this.activeServiceWorker)return;this.sender=new Yx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await vv(e,Xc,"1"),await yv(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eh(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mw.type="LOCAL";const iO=mw;new ul(3e4,6e4);/**
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
 */function sO(t,e){return e?Or(e):(be(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xp extends sw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oO(t){return jx(t.auth,new Xp(t),t.bypassAuthState)}function aO(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),Bx(n,new Xp(t),t.bypassAuthState)}async function lO(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),$x(n,new Xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oO;case"linkViaPopup":case"linkViaRedirect":return lO;case"reauthViaPopup":case"reauthViaRedirect":return aO;default:$r(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new ul(2e3,1e4);class Ls extends vw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=Yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cO.get())};e()}}Ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO="pendingRedirect",Ec=new Map;class hO extends vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ec.get(this.auth._key());if(!e){try{const r=await fO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ec.set(this.auth._key(),e)}return this.bypassAuthState||Ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fO(t,e){const n=gO(e),r=pO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function dO(t,e){Ec.set(t._key(),e)}function pO(t){return Or(t._redirectPersistence)}function gO(t){return yc(uO,t.config.apiKey,t.name)}async function mO(t,e,n=!1){const r=qu(t),i=sO(r,e),o=await new hO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=10*60*1e3;class yO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(e))}saveEventToCache(e){this.cachedEventUids.add(Ev(e)),this.lastProcessedEventTime=Date.now()}}function Ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e={}){return hl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bO=/^https?/;async function TO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _O(t);for(const n of e)try{if(SO(n))return}catch{}$r(t,"unauthorized-domain")}function SO(t){const e=od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bO.test(n))return!1;if(wO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const IO=new ul(3e4,6e4);function _v(){const t=dr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CO(t){return new Promise((e,n)=>{var r,i,s;function o(){_v(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_v(),n(fr(t,"network-request-failed"))},timeout:IO.get()})}if(!((i=(r=dr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dr().gapi)===null||s===void 0)&&s.load)o();else{const a=Cx("iframefcb");return dr()[a]=()=>{gapi.load?o():n(fr(t,"network-request-failed"))},rw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _c=null,e})}let _c=null;function AO(t){return _c=_c||CO(t),_c}/**
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
 */const RO=new ul(5e3,15e3),xO="__/auth/iframe",OO="emulator/auth/iframe",NO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DO(t){const e=t.config;be(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,OO):`https://${t.config.authDomain}/${xO}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=PO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function kO(t){const e=await AO(t),n=dr().gapi;return be(n,t,"internal-error"),e.open({where:document.body,url:DO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fr(t,"network-request-failed"),a=dr().setTimeout(()=>{s(o)},RO.get());function l(){dr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const MO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LO=500,FO=600,UO="_blank",$O="http://localhost";class wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BO(t,e,n,r=LO,i=FO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=un().toLowerCase();n&&(a=Y_(c)?UO:n),z_(c)&&(e=e||$O,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(bx(c)&&a!=="_self")return jO(e||"",a),new wv(null);const h=window.open(e||"",a,u);be(h,t,"popup-blocked");try{h.focus()}catch{}return new wv(h)}function jO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VO="__/auth/handler",HO="emulator/auth/handler",KO=encodeURIComponent("fac");async function bv(t,e,n,r,i,s){be(t.config.authDomain,t,"auth-domain-config-required"),be(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof ow){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof fl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${KO}=${encodeURIComponent(l)}`:"";return`${WO(t)}?${Ao(a).slice(1)}${c}`}function WO({config:t}){return t.emulator?Wp(t,HO):`https://${t.authDomain}/${VO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="webStorageSupport";class GO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fw,this._completeRedirectFn=mO,this._overrideRedirectResult=dO}async _openPopup(e,n,r,i){var s;Br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bv(e,n,r,od(),i);return BO(e,o,Yp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bv(e,n,r,od(),i);return Xx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kO(e),r=new yO(e);return n.register("authEvent",i=>(be(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jh];o!==void 0&&n(!!o),$r(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||zp()||Ju()}}const zO=GO;var Tv="@firebase/auth",Sv="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QO(t){mr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;be(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),be(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ew(t)},c=new Px(r,i,s,l);return kx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new tr("auth-internal",e=>{const n=qu(e.getProvider("auth").getImmediate());return(r=>new YO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Tv,Sv,XO(t)),Dn(Tv,Sv,"esm2017")}/**
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
 */const JO=5*60,qO=x_("authIdTokenMaxAge")||JO;let Iv=null;const ZO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qO)return;const i=n==null?void 0:n.token;Iv!==i&&(Iv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eN(t=Vp()){const e=jp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dx(t,{popupRedirectResolver:zO,persistence:[iO,Gx,fw]}),r=x_("authTokenSyncURL");if(r){const s=ZO(r);Vx(n,s,()=>s(n.currentUser)),lw(n,o=>s(o))}const i=R_("auth");return i&&Mx(n,`http://${i}`),n}QO("Browser");var tN=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=new Map,rN={activated:!1,tokenObservers:[]};function vr(t){return nN.get(t)||Object.assign({},rN)}const Cv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $a,await sN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $a,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function sN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Jc=new Co("appCheck","AppCheck",oN);function aN(t){if(!vr(t).activated)throw Jc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="firebase-app-check-database",cN=1,ld="firebase-app-check-store";let Yl=null;function uN(){return Yl||(Yl=new Promise((t,e)=>{try{const n=indexedDB.open(lN,cN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Jc.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(ld,{keyPath:"compositeKey"})}}}catch(n){e(Jc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Yl)}function hN(t,e){return fN(dN(t),e)}async function fN(t,e){const r=(await uN()).transaction(ld,"readwrite"),s=r.objectStore(ld).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Jc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function dN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new cl("@firebase/app-check");function Av(t,e){return P_()?hN(t,e).catch(n=>{cd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN={error:"UNKNOWN_ERROR"};function gN(t){return Xu.encodeString(JSON.stringify(t),!1)}async function ud(t,e=!1){const n=t.app;aN(n);const r=vr(n);let i=r.token,s;if(i&&!Jo(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(Jo(l)?i=l:await Av(n,void 0))}if(!e&&i&&Jo(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await vr(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?cd.warn(l.message):cd.error(l),s=l}let a;return i?s?Jo(i)?a={token:i.token,internalError:s}:a=xv(s):(a={token:i.token},r.token=i,await Av(n,i)):a=xv(s),o&&yN(n,a),a}function mN(t,e,n,r){const{app:i}=t,s=vr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Jo(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Rv(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Rv(t))}function Ew(t,e){const n=vr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Rv(t){const{app:e}=t,n=vr(e);let r=n.tokenRefresher;r||(r=vN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function vN(t){const{app:e}=t;return new iN(async()=>{const n=vr(e);let r;if(n.token?r=await ud(t,!0):r=await ud(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=vr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Cv.RETRIAL_MIN_WAIT,Cv.RETRIAL_MAX_WAIT)}function yN(t,e){const n=vr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Jo(t){return t.expireTimeMillis-Date.now()>0}function xv(t){return{token:gN(pN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=vr(this.app);for(const n of e)Ew(this.app,n.next);return Promise.resolve()}}function _N(t,e){return new EN(t,e)}function wN(t){return{getToken:e=>ud(t,e),addTokenListener:e=>mN(t,"INTERNAL",e),removeTokenListener:e=>Ew(t.app,e)}}const bN="@firebase/app-check",TN="0.7.0",SN="app-check",Ov="app-check-internal";function IN(){mr(new tr(SN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return _N(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Ov).initialize()})),mr(new tr(Ov,t=>{const e=t.getProvider("app-check").getImmediate();return wN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Dn(bN,TN)}IN();var CN="firebase",AN="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(CN,AN,"app");const _w=Symbol("firebaseApp");function ww(t){return br()&&jn(_w,null)||Vp(t)}const Xl=new WeakMap;function RN(t,e){if(!Xl.has(t)){const n=Nu(!0);Xl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Xl.delete(t)}}return Xl.get(t)}const xN=new WeakMap,Ql=new WeakMap;function ON(t){const e=ww(t);if(!Ql.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{Ql.set(e,s),n(s.value)}];Ql.set(e,i)}return Ql.get(e)}function NN(t,e){const n=eN(e);lw(n,r=>{const i=ON();t.value=r,Array.isArray(i)&&i[1](t)})}const Nv="@firebase/database",Pv="0.14.4";/**
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
 */let bw="";function PN(t){bw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),zt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DN(e)}}catch{}return new kN},Hi=Tw("localStorage"),hd=Tw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new cl("@firebase/database"),MN=function(){let t=1;return function(){return t++}}(),Sw=function(t){const e=Q1(t),n=new W1;n.update(e);const r=n.digest();return Xu.encodeByteArray(r)},pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=pl.apply(null,r):typeof r=="object"?e+=zt(r):e+=r,e+=" "}return e};let Ji=null,Dv=!0;const LN=function(t,e){ee(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ys.logLevel=Ye.VERBOSE,Ji=Ys.log.bind(Ys),e&&hd.set("logging_enabled",!0)):typeof t=="function"?Ji=t:(Ji=null,hd.remove("logging_enabled"))},Zt=function(...t){if(Dv===!0&&(Dv=!1,Ji===null&&hd.get("logging_enabled")===!0&&LN(!0)),Ji){const e=pl.apply(null,t);Ji(e)}},gl=function(t){return function(...e){Zt(t,...e)}},fd=function(...t){const e="FIREBASE INTERNAL ERROR: "+pl(...t);Ys.error(e)},ls=function(...t){const e=`FIREBASE FATAL ERROR: ${pl(...t)}`;throw Ys.error(e),new Error(e)},kn=function(...t){const e="FIREBASE WARNING: "+pl(...t);Ys.warn(e)},FN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Iw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",cs="[MAX_NAME]",Ro=function(t,e){if(t===e)return 0;if(t===lo||e===cs)return-1;if(e===lo||t===cs)return 1;{const n=kv(t),r=kv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$N=function(t,e){return t===e?0:t<e?-1:1},$o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+zt(e))},Qp=function(t){if(typeof t!="object"||t===null)return zt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=zt(e[r]),n+=":",n+=Qp(t[e[r]]);return n+="}",n},Cw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Vn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Aw=function(t){ee(!Iw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},BN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},VN=new RegExp("^-?(0*)\\d{1,10}$"),HN=-2147483648,KN=2147483647,kv=function(t){if(VN.test(t)){const e=Number(t);if(e>=HN&&e<=KN)return e}return null},ml=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw kn("Exception was thrown by user callback.",n),e},Math.floor(0))}},WN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ma=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class GN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class dd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="5",Rw="v",xw="s",Ow="r",Nw="f",Pw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dw="ls",kw="p",pd="ac",Mw="websocket",Lw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fw(t,e,n){ee(typeof e=="string","typeof type must == string"),ee(typeof n=="object","typeof params must == object");let r;if(e===Mw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XN(t)&&(n.ns=t.namespace);const i=[];return Vn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.counters_={}}incrementCounter(e,n=1){Wr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return R1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={},Zh={};function qp(t){const e=t.toString();return qh[e]||(qh[e]=new QN),qh[e]}function JN(t,e){const n=t.toString();return Zh[n]||(Zh[n]=e()),Zh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ml(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="start",ZN="close",eP="pLPCommand",tP="pRTLPCB",Uw="id",$w="pw",Bw="ser",nP="cb",rP="seg",iP="ts",sP="d",oP="dframe",jw=1870,Vw=30,aP=jw-Vw,lP=25e3,cP=3e4;class Fs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gl(e),this.stats_=qp(n),this.urlFn=l=>(this.appCheckToken&&(l[pd]=this.appCheckToken),Fw(n,Lw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cP)),UN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mv)this.id=a,this.password=l;else if(o===ZN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mv]="t",r[Bw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[nP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rw]=Jp,this.transportSessionId&&(r[xw]=this.transportSessionId),this.lastSessionId&&(r[Dw]=this.lastSessionId),this.applicationId&&(r[kw]=this.applicationId),this.appCheckToken&&(r[pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pw.test(location.hostname)&&(r[Ow]=Nw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fs.forceAllow_=!0}static forceDisallow(){Fs.forceDisallow_=!0}static isAvailable(){return Fs.forceAllow_?!0:!Fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BN()&&!jN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=zt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n),i=Cw(r,aP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[oP]="t",r[Uw]=e,r[$w]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=zt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MN(),window[eP+this.uniqueCallbackIdentifier]=e,window[tP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Zt("frame writing exception"),a.stack&&Zt(a.stack),Zt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uw]=this.myID,e[$w]=this.myPW,e[Bw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vw+r.length<=jw;){const o=this.pendingSegs.shift();r=r+"&"+rP+i+"="+o.seg+"&"+iP+i+"="+o.ts+"&"+sP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(lP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=16384,hP=45e3;let qc=null;typeof MozWebSocket<"u"?qc=MozWebSocket:typeof WebSocket<"u"&&(qc=WebSocket);class Xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gl(this.connId),this.stats_=qp(n),this.connURL=Xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Rw]=Jp,typeof location<"u"&&location.hostname&&Pw.test(location.hostname)&&(o[Ow]=Nw),n&&(o[xw]=n),r&&(o[Dw]=r),i&&(o[pd]=i),s&&(o[kw]=s),Fw(e,Mw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hi.set("previous_websocket_failure",!0);try{let r;N_(),this.mySock=new qc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&qc!==null&&!Xn.forceDisallow_}static previouslyFailed(){return Hi.isInMemoryStorage||Hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=zt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Cw(n,uP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xn.responsesRequiredToBeHealthy=2;Xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fs,Xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xn&&Xn.isAvailable();let r=n&&!Xn.previouslyFailed();if(e.webSocketOnly&&(n||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xn];else{const i=this.transports_=[];for(const s of Ka.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ka.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=6e4,dP=5e3,pP=10*1024,gP=100*1024,ef="t",Lv="d",mP="s",Fv="r",vP="e",Uv="o",$v="a",Bv="n",jv="p",yP="h";class EP{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gl("c:"+this.id+":"),this.transportManager_=new Ka(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ef in e){const n=e[ef];n===$v?this.upgradeIfSecondaryHealthy_():n===Fv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$v,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$o(ef,e);if(Lv in e){const r=e[Lv];if(n===yP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mP?this.onConnectionShutdown_(r):n===Fv?this.onReset_(r):n===vP?fd("Server Error: "+r):n===Uv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jp!==r&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Kw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$p()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zc}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=32,Hv=768;class ft{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function it(){return new ft("")}function He(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ti(t){return t.pieces_.length-t.pieceNum_}function ht(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ft(t.pieces_,e)}function Ww(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _P(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ft(e,0)}function Bt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ft)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ft(n,0)}function Ue(t){return t.pieceNum_>=t.pieces_.length}function Bn(t,e){const n=He(t),r=He(e);if(n===null)return e;if(n===r)return Bn(ht(t),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yw(t,e){if(Ti(t)!==Ti(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ti(t)>Ti(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wP{constructor(e,n){this.errorPrefix_=n,this.parts_=Gw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qu(this.parts_[r]);Xw(this)}}function bP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qu(e),Xw(t)}function TP(t){const e=t.parts_.pop();t.byteLength_-=Qu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xw(t){if(t.byteLength_>Hv)throw new Error(t.errorPrefix_+"has a key path longer than "+Hv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vv+") or object contains a cycle "+Ui(t))}function Ui(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends Kw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new eg}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=1e3,SP=60*5*1e3,Kv=30*1e3,IP=1.3,CP=3e4,AP="server_kill",Wv=3;class Mr extends Hw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mr.nextPersistentConnectionId_++,this.log_=gl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bo,this.maxReconnectDelay_=SP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!N_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");eg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(zt(s)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $a,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Mr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wr(e,"w")){const r=oo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=H1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+zt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fd("Unrecognized action received from server: "+zt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CP&&(this.reconnectDelay_=Bo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Zt("getToken() completed but was canceled"):(Zt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new EP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{kn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(AP)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&kn(h),l())}}}interrupt(e){Zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ed(this.interruptReasons_)&&(this.reconnectDelay_=Bo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ft(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Zt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wv&&(this.reconnectDelay_=Kv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Zt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bw.replace(/\./g,"-")]=1,$p()?e["framework.cordova"]=1:O_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zc.getInstance().currentlyOnline();return ed(this.interruptReasons_)&&e}}Mr.nextPersistentConnectionId_=0;Mr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ke(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ke(lo,e),i=new Ke(lo,n);return this.compare(r,i)!==0}minPost(){return Ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;class Qw extends th{static get __EMPTY_NODE(){return Jl}static set __EMPTY_NODE(e){Jl=e}compare(e,n){return Ro(e.name,n.name)}isDefinedOn(e){throw Io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ke.MIN}maxPost(){return new Ke(cs,Jl)}makePost(e,n){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Ke(e,Jl)}toString(){return".key"}}const Xs=new Qw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$t.RED,this.left=i??Sn.EMPTY_NODE,this.right=s??Sn.EMPTY_NODE}copy(e,n,r,i,s){return new $t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Sn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0;$t.BLACK=!1;class RP{copy(e,n,r,i,s){return this}insert(e,n,r){return new $t(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Sn{constructor(e,n=Sn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Sn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Sn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ql(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ql(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ql(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ql(this.root_,null,this.comparator_,!0,e)}}Sn.EMPTY_NODE=new RP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t,e){return Ro(t.name,e.name)}function tg(t,e){return Ro(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;function OP(t){gd=t}const Jw=function(t){return typeof t=="number"?"number:"+Aw(t):"string:"+t},qw=function(t){if(t.isLeafNode()){const e=t.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wr(e,".sv"),"Priority must be a string or number.")}else ee(t===gd||t.isEmpty(),"priority of unexpected type.");ee(t===gd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gv;class Ft{constructor(e,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qw(this.priorityNode_)}static set __childrenNodeConstructor(e){Gv=e}static get __childrenNodeConstructor(){return Gv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:He(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=He(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||Ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Aw(this.value_):e+=this.value_,this.lazyHash_=Sw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ft.VALUE_TYPE_ORDER.indexOf(n),s=Ft.VALUE_TYPE_ORDER.indexOf(r);return ee(i>=0,"Unknown leaf type: "+n),ee(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zw,eb;function NP(t){Zw=t}function PP(t){eb=t}class DP extends th{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ro(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ke.MIN}maxPost(){return new Ke(cs,new Ft("[PRIORITY-POST]",eb))}makePost(e,n){const r=Zw(e);return new Ke(n,new Ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const sn=new DP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=Math.log(2);class MP{constructor(e){const n=s=>parseInt(Math.log(s)/kP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const eu=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new $t(f,h.node,$t.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),m=i(d+1,c);return h=t[d],f=n?n(h):h,new $t(f,h.node,$t.BLACK,p,m)}},s=function(l){let c=null,u=null,h=t.length;const f=function(p,m){const y=h-p,v=h;h-=p;const g=i(y+1,v),E=t[y],w=n?n(E):E;d(new $t(w,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?f(y,$t.BLACK):(f(y,$t.BLACK),f(y,$t.RED))}return u},o=new MP(t.length),a=s(o);return new Sn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf;const Ss={};class Nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ee(Ss&&sn,"ChildrenNode.ts has not been loaded"),tf=tf||new Nr({".priority":Ss},{".priority":sn}),tf}get(e){const n=oo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Sn?n:null}hasIndex(e){return Wr(this.indexSet_,e.toString())}addIndex(e,n){ee(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Ke.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=eu(r,e.getCompare()):a=Ss;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Nr(u,c)}addToIndexes(e,n){const r=Hc(this.indexes_,(i,s)=>{const o=oo(this.indexSet_,s);if(ee(o,"Missing index implementation for "+s),i===Ss)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ke.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),eu(a,o.getCompare())}else return Ss;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ke(e.name,a))),l.insert(e,e.node)}});return new Nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Hc(this.indexes_,i=>{if(i===Ss)return i;{const s=n.get(e.name);return s?i.remove(new Ke(e.name,s)):i}});return new Nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class Ze{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qw(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jo||(jo=new Ze(new Sn(tg),null,Nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jo}updatePriority(e){return this.children_.isEmpty()?this:new Ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?jo:n}}getChild(e){const n=He(e);return n===null?this:this.getImmediateChild(n).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ee(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ke(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?jo:this.priorityNode_;return new Ze(i,o,s)}}updateChild(e,n){const r=He(e);if(r===null)return n;{ee(He(e)!==".priority"||Ti(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ht(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(sn,(o,a)=>{n[o]=a.val(e),r++,s&&Ze.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jw(this.getPriority().val())+":"),this.forEachChild(sn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Sw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ke(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ke(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ke.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ke.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vl?-1:0}withIndex(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(sn),i=n.getIterator(sn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xs?null:this.indexMap_.get(e.toString())}}Ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LP extends Ze{constructor(){super(new Sn(tg),Ze.EMPTY_NODE,Nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ze.EMPTY_NODE}isEmpty(){return!1}}const vl=new LP;Object.defineProperties(Ke,{MIN:{value:new Ke(lo,Ze.EMPTY_NODE)},MAX:{value:new Ke(cs,vl)}});Qw.__EMPTY_NODE=Ze.EMPTY_NODE;Ft.__childrenNodeConstructor=Ze;OP(vl);PP(vl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=!0;function en(t,e=null){if(t===null)return Ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ft(n,en(e))}if(!(t instanceof Array)&&FP){const n=[];let r=!1;if(Vn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=en(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ke(o,l)))}}),n.length===0)return Ze.EMPTY_NODE;const s=eu(n,xP,o=>o.name,tg);if(r){const o=eu(n,sn.getCompare());return new Ze(s,en(e),new Nr({".priority":o},{".priority":sn}))}else return new Ze(s,en(e),Nr.Default)}else{let n=Ze.EMPTY_NODE;return Vn(t,(r,i)=>{if(Wr(t,r)&&r.substring(0,1)!=="."){const s=en(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(en(e))}}NP(en);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP extends th{constructor(e){super(),this.indexPath_=e,ee(!Ue(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ro(e.name,n.name):s}makePost(e,n){const r=en(e),i=Ze.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ke(n,i)}maxPost(){const e=Ze.EMPTY_NODE.updateChild(this.indexPath_,vl);return new Ke(cs,e)}toString(){return Gw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P extends th{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ro(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ke.MIN}maxPost(){return Ke.MAX}makePost(e,n){const r=en(e);return new Ke(n,r)}toString(){return".value"}}const BP=new $P;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return{type:"value",snapshotNode:t}}function VP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function HP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function KP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const e=new ng;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===sn?n="$priority":t.index_===BP?n="$value":t.index_===Xs?n="$key":(ee(t.index_ instanceof UP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=zt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=zt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+zt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=zt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+zt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==sn&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Hw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=gl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Yv(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),oo(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=tu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Yv(e._queryParams),r=e._path.toString(),i=new $a;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ao(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ba(a.responseText)}catch{kn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&kn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.rootNode_=Ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){return{value:null,children:new Map}}function tb(t,e,n){if(Ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=He(e);t.children.has(r)||t.children.set(r,nu());const i=t.children.get(r);e=ht(e),tb(i,e,n)}}function md(t,e,n){t.value!==null?n(e,t.value):GP(t,(r,i)=>{const s=new ft(e.toString()+"/"+r);md(i,s,n)})}function GP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=10*1e3,YP=30*1e3,XP=5*60*1e3;class QP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zP(e);const r=Qv+(YP-Qv)*Math.random();ma(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Vn(e,(i,s)=>{s>0&&Wr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*XP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lr||(lr={}));function nb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ib(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lr.ACK_USER_WRITE,this.source=nb()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ft(e));return new ru(it(),n,this.revert)}}else return ee(He(this.path)===e,"operationForChild called for unrelated child."),new ru(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lr.MERGE}operationForChild(e){if(Ue(this.path)){const n=this.children.subtree(new ft(e));return n.isEmpty()?null:n.value?new us(this.source,it(),n.value):new Wa(this.source,it(),n)}else return ee(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wa(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=He(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function JP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(KP(o.childName,o.snapshotNode))}),Vo(t,i,"child_removed",e,r,n),Vo(t,i,"child_added",e,r,n),Vo(t,i,"child_moved",s,r,n),Vo(t,i,"child_changed",e,r,n),Vo(t,i,"value",e,r,n),i}function Vo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ZP(t,a,l)),o.forEach(a=>{const l=qP(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function qP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZP(t,e,n){if(e.childName==null||n.childName==null)throw Io("Should only compare child_ events.");const r=new Ke(e.childName,e.snapshotNode),i=new Ke(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e){return{eventCache:t,serverCache:e}}function va(t,e,n,r){return sb(new rg(e,n,r),t.serverCache)}function ob(t,e,n,r){return sb(t.eventCache,new rg(e,n,r))}function vd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;const eD=()=>(nf||(nf=new Sn($N)),nf);class ut{constructor(e,n=eD()){this.value=e,this.children=n}static fromObject(e){let n=new ut(null);return Vn(e,(r,i)=>{n=n.set(new ft(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:it(),value:this.value};if(Ue(e))return null;{const r=He(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ht(e),n);return s!=null?{path:Bt(new ft(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const n=He(e),r=this.children.get(n);return r!==null?r.subtree(ht(e)):new ut(null)}}set(e,n){if(Ue(e))return new ut(n,this.children);{const r=He(e),s=(this.children.get(r)||new ut(null)).set(ht(e),n),o=this.children.insert(r,s);return new ut(this.value,o)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const n=He(e),r=this.children.get(n);if(r){const i=r.remove(ht(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ut(null):new ut(this.value,s)}else return this}}get(e){if(Ue(e))return this.value;{const n=He(e),r=this.children.get(n);return r?r.get(ht(e)):null}}setTree(e,n){if(Ue(e))return n;{const r=He(e),s=(this.children.get(r)||new ut(null)).setTree(ht(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ut(this.value,o)}}fold(e){return this.fold_(it(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Bt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,it(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ue(e))return null;{const s=He(e),o=this.children.get(s);return o?o.findOnPath_(ht(e),Bt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,it(),n)}foreachOnPath_(e,n,r){if(Ue(e))return this;{this.value&&r(n,this.value);const i=He(e),s=this.children.get(i);return s?s.foreachOnPath_(ht(e),Bt(n,i),r):new ut(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Bt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.writeTree_=e}static empty(){return new Zn(new ut(null))}}function ya(t,e,n){if(Ue(e))return new Zn(new ut(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Bn(i,e);return s=s.updateChild(o,n),new Zn(t.writeTree_.set(i,s))}else{const i=new ut(n),s=t.writeTree_.setTree(e,i);return new Zn(s)}}}function Jv(t,e,n){let r=t;return Vn(n,(i,s)=>{r=ya(r,Bt(e,i),s)}),r}function qv(t,e){if(Ue(e))return Zn.empty();{const n=t.writeTree_.setTree(e,new ut(null));return new Zn(n)}}function yd(t,e){return ws(t,e)!=null}function ws(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bn(n.path,e)):null}function Zv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(sn,(r,i)=>{e.push(new Ke(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ke(r,i.value))}),e}function mi(t,e){if(Ue(e))return t;{const n=ws(t,e);return n!=null?new Zn(new ut(n)):new Zn(t.writeTree_.subtree(e))}}function Ed(t){return t.writeTree_.isEmpty()}function co(t,e){return ab(it(),t.writeTree_,e)}function ab(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(ee(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ab(Bt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Bt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e){return db(e,t)}function tD(t,e,n,r,i){ee(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ya(t.visibleWrites,e,n)),t.lastWriteId=r}function nD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function rD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ee(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iD(a,r.path)?i=!1:Qn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return sD(t),!0;if(r.snap)t.visibleWrites=qv(t.visibleWrites,r.path);else{const a=r.children;Vn(a,l=>{t.visibleWrites=qv(t.visibleWrites,Bt(r.path,l))})}return!0}else return!1}function iD(t,e){if(t.snap)return Qn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qn(Bt(t.path,n),e))return!0;return!1}function sD(t){t.visibleWrites=cb(t.allWrites,oD,it()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oD(t){return t.visible}function cb(t,e,n){let r=Zn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qn(n,o)?(a=Bn(n,o),r=ya(r,a,s.snap)):Qn(o,n)&&(a=Bn(o,n),r=ya(r,it(),s.snap.getChild(a)));else if(s.children){if(Qn(n,o))a=Bn(n,o),r=Jv(r,a,s.children);else if(Qn(o,n))if(a=Bn(o,n),Ue(a))r=Jv(r,it(),s.children);else{const l=oo(s.children,He(a));if(l){const c=l.getChild(ht(a));r=ya(r,it(),c)}}}else throw Io("WriteRecord should have .snap or .children")}}return r}function ub(t,e,n,r,i){if(!r&&!i){const s=ws(t.visibleWrites,e);if(s!=null)return s;{const o=mi(t.visibleWrites,e);if(Ed(o))return n;if(n==null&&!yd(o,it()))return null;{const a=n||Ze.EMPTY_NODE;return co(o,a)}}}else{const s=mi(t.visibleWrites,e);if(!i&&Ed(s))return n;if(!i&&n==null&&!yd(s,it()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Qn(c.path,e)||Qn(e,c.path))},a=cb(t.allWrites,o,e),l=n||Ze.EMPTY_NODE;return co(a,l)}}}function aD(t,e,n){let r=Ze.EMPTY_NODE;const i=ws(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(sn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mi(t.visibleWrites,e);return n.forEachChild(sn,(o,a)=>{const l=co(mi(s,new ft(o)),a);r=r.updateImmediateChild(o,l)}),Zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mi(t.visibleWrites,e);return Zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lD(t,e,n,r,i){ee(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Bt(e,n);if(yd(t.visibleWrites,s))return null;{const o=mi(t.visibleWrites,s);return Ed(o)?i.getChild(n):co(o,i.getChild(n))}}function cD(t,e,n,r){const i=Bt(e,n),s=ws(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mi(t.visibleWrites,i);return co(o,r.getNode().getImmediateChild(n))}else return null}function uD(t,e){return ws(t.visibleWrites,e)}function hD(t,e,n,r,i,s,o){let a;const l=mi(t.visibleWrites,e),c=ws(l,it());if(c!=null)a=c;else if(n!=null)a=co(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<i;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function fD(){return{visibleWrites:Zn.empty(),allWrites:[],lastWriteId:-1}}function _d(t,e,n,r){return ub(t.writeTree,t.treePath,e,n,r)}function hb(t,e){return aD(t.writeTree,t.treePath,e)}function ey(t,e,n,r){return lD(t.writeTree,t.treePath,e,n,r)}function iu(t,e){return uD(t.writeTree,Bt(t.treePath,e))}function dD(t,e,n,r,i,s){return hD(t.writeTree,t.treePath,e,n,r,i,s)}function ig(t,e,n){return cD(t.writeTree,t.treePath,e,n)}function fb(t,e){return db(Bt(t.treePath,e),t.writeTree)}function db(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ee(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,zv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,HP(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,VP(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,zv(r,e.snapshotNode,i.oldSnap));else throw Io("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const pb=new gD;class sg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ig(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),s=dD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function mD(t,e){ee(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vD(t,e,n,r,i){const s=new pD;let o,a;if(n.type===lr.OVERWRITE){const c=n;c.source.fromUser?o=wd(t,e,c.path,c.snap,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ue(c.path),o=su(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===lr.MERGE){const c=n;c.source.fromUser?o=ED(t,e,c.path,c.children,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===lr.ACK_USER_WRITE){const c=n;c.revert?o=bD(t,e,c.path,r,i,s):o=_D(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===lr.LISTEN_COMPLETE)o=wD(t,e,n.path,r,s);else throw Io("Unknown operation type: "+n.type);const l=s.getChanges();return yD(e,o,l),{viewCache:o,changes:l}}function yD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=vd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(jP(vd(e)))}}function gb(t,e,n,r,i,s){const o=e.eventCache;if(iu(r,n)!=null)return e;{let a,l;if(Ue(n))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof Ze?c:Ze.EMPTY_NODE,h=hb(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=_d(r,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=He(n);if(c===".priority"){ee(Ti(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ey(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ht(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ey(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=ig(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,s):a=o.getNode()}}return va(e,a,o.isFullyInitialized()||Ue(n),t.filter.filtersNodes())}}function su(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=He(n);if(!l.isCompleteForPath(n)&&Ti(n)>1)return e;const p=ht(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,pb,null)}const h=ob(e,c,l.isFullyInitialized()||Ue(n),u.filtersNodes()),f=new sg(i,h,s);return gb(t,h,n,i,f,a)}function wd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new sg(i,e,s);if(Ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=va(e,c,!0,t.filter.filtersNodes());else{const h=He(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=va(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ht(n),d=a.getNode().getImmediateChild(h);let p;if(Ue(f))p=r;else{const m=u.getCompleteChild(h);m!=null?Ww(f)===".priority"&&m.getChild(zw(f)).isEmpty()?p=m:p=m.updateChild(f,r):p=Ze.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=va(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ty(t,e){return t.eventCache.isCompleteForChild(e)}function ED(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Bt(n,l);ty(e,He(u))&&(a=wd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Bt(n,l);ty(e,He(u))||(a=wd(t,a,u,c,i,s,o))}),a}function ny(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ue(n)?c=r:c=new ut(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=ny(t,d,f);l=su(t,l,new ft(h),p,i,s,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),m=ny(t,p,f);l=su(t,l,new ft(h),m,i,s,o,a)}}),l}function _D(t,e,n,r,i,s,o){if(iu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return su(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Ue(n)){let c=new ut(null);return l.getNode().forEachChild(Xs,(u,h)=>{c=c.set(new ft(u),h)}),bd(t,e,n,c,i,s,a,o)}else return e}else{let c=new ut(null);return r.foreach((u,h)=>{const f=Bt(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),bd(t,e,n,c,i,s,a,o)}}function wD(t,e,n,r,i){const s=e.serverCache,o=ob(e,s.getNode(),s.isFullyInitialized()||Ue(n),s.isFiltered());return gb(t,o,n,r,pb,i)}function bD(t,e,n,r,i,s){let o;if(iu(r,n)!=null)return e;{const a=new sg(r,e,i),l=e.eventCache.getNode();let c;if(Ue(n)||He(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=_d(r,hs(e));else{const h=e.serverCache.getNode();ee(h instanceof Ze,"serverChildren would be complete if leaf node"),u=hb(r,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=He(n);let h=ig(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ht(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ze.EMPTY_NODE,ht(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_d(r,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||iu(r,it())!=null,va(e,c,o,t.filter.filtersNodes())}}function TD(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ue(e)&&!n.getImmediateChild(He(e)).isEmpty())?n.getChild(e):null}function ry(t,e,n,r){e.type===lr.MERGE&&e.source.queryId!==null&&(ee(hs(t.viewCache_),"We should always have a full cache before handling merges"),ee(vd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vD(t.processor_,i,e,n,r);return mD(t.processor_,s.viewCache),ee(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,SD(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SD(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return JP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iy;function ID(t){ee(!iy,"__referenceConstructor has already been defined"),iy=t}function og(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return ee(s!=null,"SyncTree gave us an op for an invalid query."),ry(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ry(o,e,n,r));return s}}function ag(t,e){let n=null;for(const r of t.views.values())n=n||TD(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy;function CD(t){ee(!sy,"__referenceConstructor has already been defined"),sy=t}class oy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=fD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AD(t,e,n,r,i){return tD(t.pendingWriteTree_,e,n,r,i),i?rh(t,new us(nb(),e,n)):[]}function Us(t,e,n=!1){const r=nD(t.pendingWriteTree_,e);if(rD(t.pendingWriteTree_,e)){let s=new ut(null);return r.snap!=null?s=s.set(it(),!0):Vn(r.children,o=>{s=s.set(new ft(o),!0)}),rh(t,new ru(r.path,s,n))}else return[]}function nh(t,e,n){return rh(t,new us(rb(),e,n))}function RD(t,e,n){const r=ut.fromObject(n);return rh(t,new Wa(rb(),e,r))}function xD(t,e,n,r){const i=Eb(t,r);if(i!=null){const s=_b(i),o=s.path,a=s.queryId,l=Bn(o,e),c=new us(ib(a),l,n);return wb(t,o,c)}else return[]}function OD(t,e,n,r){const i=Eb(t,r);if(i){const s=_b(i),o=s.path,a=s.queryId,l=Bn(o,e),c=ut.fromObject(n),u=new Wa(ib(a),l,c);return wb(t,o,u)}else return[]}function mb(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bn(o,e),c=ag(a,l);if(c)return c});return ub(i,e,s,n,!0)}function rh(t,e){return vb(e,t.syncPointTree_,null,lb(t.pendingWriteTree_,it()))}function vb(t,e,n,r){if(Ue(t.path))return yb(t,e,n,r);{const i=e.get(it());n==null&&i!=null&&(n=ag(i,it()));let s=[];const o=He(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fb(r,o);s=s.concat(vb(a,l,c,u))}return i&&(s=s.concat(og(i,t,r,n))),s}}function yb(t,e,n,r){const i=e.get(it());n==null&&i!=null&&(n=ag(i,it()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fb(r,o),u=t.operationForChild(o);u&&(s=s.concat(yb(u,a,l,c)))}),i&&(s=s.concat(og(i,t,r,n))),s}function Eb(t,e){return t.tagToQueryMap.get(e)}function _b(t){const e=t.indexOf("$");return ee(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ft(t.substr(0,e))}}function wb(t,e,n){const r=t.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const i=lb(t.pendingWriteTree_,e);return og(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lg(n)}node(){return this.node_}}class cg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Bt(this.path_,e);return new cg(this.syncTree_,n)}node(){return mb(this.syncTree_,this.path_)}}const ND=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ay=function(t,e,n){if(!t||typeof t!="object")return t;if(ee(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return PD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DD(t[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},PD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ee(!1,"Unexpected server value: "+t)}},DD=function(t,e,n){t.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const i=e.node();if(ee(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},kD=function(t,e,n,r){return ug(e,new cg(n,t),r)},MD=function(t,e,n){return ug(t,new lg(e),n)};function ug(t,e,n){const r=t.getPriority().val(),i=ay(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ay(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ft(a,en(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ft(i))),o.forEachChild(sn,(a,l)=>{const c=ug(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fg(t,e){let n=e instanceof ft?e:new ft(e),r=t,i=He(n);for(;i!==null;){const s=oo(r.node.children,i)||{children:{},childCount:0};r=new hg(i,r,s),n=ht(n),i=He(n)}return r}function xo(t){return t.node.value}function bb(t,e){t.node.value=e,Td(t)}function Tb(t){return t.node.childCount>0}function LD(t){return xo(t)===void 0&&!Tb(t)}function ih(t,e){Vn(t.node.children,(n,r)=>{e(new hg(n,t,r))})}function Sb(t,e,n,r){n&&!r&&e(t),ih(t,i=>{Sb(i,e,!0,r)}),n&&r&&e(t)}function FD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yl(t){return new ft(t.parent===null?t.name:yl(t.parent)+"/"+t.name)}function Td(t){t.parent!==null&&UD(t.parent,t.name,t)}function UD(t,e,n){const r=LD(n),i=Wr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Td(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Td(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=/[\[\].#$\/\u0000-\u001F\u007F]/,BD=/[\[\].#$\u0000-\u001F\u007F]/,rf=10*1024*1024,Ib=function(t){return typeof t=="string"&&t.length!==0&&!$D.test(t)},jD=function(t){return typeof t=="string"&&t.length!==0&&!BD.test(t)},VD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jD(t)},Cb=function(t,e,n){const r=n instanceof ft?new wP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ui(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ui(r)+" with contents = "+e.toString());if(Iw(e))throw new Error(t+"contains "+e.toString()+" "+Ui(r));if(typeof e=="string"&&e.length>rf/3&&Qu(e)>rf)throw new Error(t+"contains a string greater than "+rf+" utf8 bytes "+Ui(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Vn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ib(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ui(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bP(r,o),Cb(t,a,r),TP(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ui(r)+" in addition to actual children.")}},HD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ib(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VD(n))throw new Error(X1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WD(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Yw(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function bs(t,e,n){WD(t,n),GD(t,r=>Qn(r,e)||Qn(e,r))}function GD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ji&&Zt("event: "+n.toString()),ml(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="repo_interrupt",XD=25;class QD{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nu(),this.transactionQueueTree_=new hg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JD(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||WN())t.server_=new tu(t.repoInfo_,(r,i,s,o)=>{ly(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mr(t.repoInfo_,e,(r,i,s,o)=>{ly(t,r,i,s,o)},r=>{cy(t,r)},r=>{ZD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JN(t.repoInfo_,()=>new QP(t.stats_,t.server_)),t.infoData_=new WP,t.infoSyncTree_=new oy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=nh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dg(t,"connected",!1),t.serverSyncTree_=new oy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);bs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function qD(t){const n=t.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ab(t){return ND({timestamp:qD(t)})}function ly(t,e,n,r,i){t.dataUpdateCount++;const s=new ft(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Hc(n,c=>en(c));o=OD(t.serverSyncTree_,s,l,i)}else{const l=en(n);o=xD(t.serverSyncTree_,s,l,i)}else if(r){const l=Hc(n,c=>en(c));o=RD(t.serverSyncTree_,s,l)}else{const l=en(n);o=nh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gg(t,s)),bs(t.eventQueue_,a,o)}function cy(t,e){dg(t,"connected",e),e===!1&&tk(t)}function ZD(t,e){Vn(e,(n,r)=>{dg(t,n,r)})}function dg(t,e,n){const r=new ft("/.info/"+e),i=en(n);t.infoData_.updateSnapshot(r,i);const s=nh(t.infoSyncTree_,r,i);bs(t.eventQueue_,r,s)}function ek(t){return t.nextWriteId_++}function tk(t){Rb(t,"onDisconnectEvents");const e=Ab(t),n=nu();md(t.onDisconnect_,it(),(i,s)=>{const o=kD(i,s,t.serverSyncTree_,e);tb(n,i,o)});let r=[];md(n,it(),(i,s)=>{r=r.concat(nh(t.serverSyncTree_,i,s));const o=sk(t,i);gg(t,o)}),t.onDisconnect_=nu(),bs(t.eventQueue_,it(),r)}function nk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YD)}function Rb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Zt(n,...e)}function xb(t,e,n){return mb(t.serverSyncTree_,e,n)||Ze.EMPTY_NODE}function pg(t,e=t.transactionQueueTree_){if(e||sh(t,e),xo(e)){const n=Nb(t,e);ee(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rk(t,yl(e),n)}else Tb(e)&&ih(e,n=>{pg(t,n)})}function rk(t,e,n){const r=n.map(c=>c.currentWriteId),i=xb(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];ee(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Bn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Rb(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Us(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();sh(t,fg(t.transactionQueueTree_,e)),pg(t,t.transactionQueueTree_),bs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ml(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{kn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}gg(t,e)}},o)}function gg(t,e){const n=Ob(t,e),r=yl(n),i=Nb(t,n);return ik(t,i,r),r}function ik(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Bn(n,l.path);let u=!1,h;if(ee(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Us(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XD)u=!0,h="maxretry",i=i.concat(Us(t.serverSyncTree_,l.currentWriteId,!0));else{const f=xb(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Cb("transaction failed: Data returned ",d,l.path);let p=en(d);typeof d=="object"&&d!=null&&Wr(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,v=Ab(t),g=MD(p,f,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=ek(t),o.splice(o.indexOf(y),1),i=i.concat(AD(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Us(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Us(t.serverSyncTree_,l.currentWriteId,!0))}bs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}sh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ml(r[a]);pg(t,t.transactionQueueTree_)}function Ob(t,e){let n,r=t.transactionQueueTree_;for(n=He(e);n!==null&&xo(r)===void 0;)r=fg(r,n),e=ht(e),n=He(e);return r}function Nb(t,e){const n=[];return Pb(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Pb(t,e,n){const r=xo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ih(e,i=>{Pb(t,i,n)})}function sh(t,e){const n=xo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bb(e,n.length>0?n:void 0)}ih(e,r=>{sh(t,r)})}function sk(t,e){const n=yl(Ob(t,e)),r=fg(t.transactionQueueTree_,e);return FD(r,i=>{sf(t,i)}),sf(t,r),Sb(r,i=>{sf(t,i)}),n}function sf(t,e){const n=xo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ee(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(ee(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Us(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bb(e,void 0):n.length=s+1,bs(t.eventQueue_,yl(e),i);for(let o=0;o<r.length;o++)ml(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ak(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):kn(`Invalid query segment '${n}' in query '${t}'`)}return e}const uy=function(t,e){const n=lk(t),r=n.namespace;n.domain==="firebase.com"&&ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new YN(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ft(n.pathString)}},lk=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ok(t.substring(u,h)));const f=ak(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ue(this._path)?null:Ww(this._path)}get ref(){return new Oo(this._repo,this._path)}get _queryIdentifier(){const e=Xv(this._queryParams),n=Qp(e);return n==="{}"?"default":n}get _queryObject(){return Xv(this._queryParams)}isEqual(e){if(e=Ai(e),!(e instanceof mg))return!1;const n=this._repo===e._repo,r=Yw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_P(this._path)}}class Oo extends mg{constructor(e,n){super(e,n,new ng,!1)}get parent(){const e=zw(this._path);return e===null?null:new Oo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ID(Oo);CD(Oo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="FIREBASE_DATABASE_EMULATOR_HOST",Sd={};let uk=!1;function hk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uy(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ck]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=uy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new dd(dd.OWNER):new zN(t.name,t.options,e);HD("Invalid Firebase Database URL",o),Ue(o.path)||ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=dk(a,t,u,new GN(t.name,n));return new pk(h,t)}function fk(t,e){const n=Sd[e];(!n||n[t.key]!==t)&&ls(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nk(t),delete n[t.key]}function dk(t,e,n,r){let i=Sd[e.name];i||(i={},Sd[e.name]=i);let s=i[t.toURLString()];return s&&ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new QD(t,uk,n,r),i[t.toURLString()]=s,s}class pk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oo(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ls("Cannot call "+e+" on a deleted database.")}}/**
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
 */function gk(t){PN(Ri),mr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Dn(Nv,Pv,t),Dn(Nv,Pv,"esm2017")}Mr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gk();var mk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,vg=vg||{},Se=mk||self;function ou(){}function oh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function El(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vk(t){return Object.prototype.hasOwnProperty.call(t,of)&&t[of]||(t[of]=++yk)}var of="closure_uid_"+(1e9*Math.random()>>>0),yk=0;function Ek(t,e,n){return t.call.apply(t.bind,arguments)}function _k(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function an(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?an=Ek:an=_k,an.apply(null,arguments)}function Zl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xi(){this.s=this.s,this.o=this.o}var wk=0;xi.prototype.s=!1;xi.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),wk!=0)&&vk(this)};xi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Db=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(oh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ln(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ln.prototype.h=function(){this.defaultPrevented=!0};var bk=function(){if(!Se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Se.addEventListener("test",ou,e),Se.removeEventListener("test",ou,e)}catch{}return t}();function au(t){return/^[\s\xa0]*$/.test(t)}var fy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function af(t,e){return t<e?-1:t>e?1:0}function ah(){var t=Se.navigator;return t&&(t=t.userAgent)?t:""}function or(t){return ah().indexOf(t)!=-1}function Eg(t){return Eg[" "](t),t}Eg[" "]=ou;function kb(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Tk=or("Opera"),uo=or("Trident")||or("MSIE"),Mb=or("Edge"),Id=Mb||uo,Lb=or("Gecko")&&!(ah().toLowerCase().indexOf("webkit")!=-1&&!or("Edge"))&&!(or("Trident")||or("MSIE"))&&!or("Edge"),Sk=ah().toLowerCase().indexOf("webkit")!=-1&&!or("Edge");function Fb(){var t=Se.document;return t?t.documentMode:void 0}var lu;e:{var lf="",cf=function(){var t=ah();if(Lb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mb)return/Edge\/([\d\.]+)/.exec(t);if(uo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Sk)return/WebKit\/(\S+)/.exec(t);if(Tk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cf&&(lf=cf?cf[1]:""),uo){var uf=Fb();if(uf!=null&&uf>parseFloat(lf)){lu=String(uf);break e}}lu=lf}var Ik={};function Ck(){return kb(Ik,9,function(){let t=0;const e=fy(String(lu)).split("."),n=fy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=af(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||af(i[2].length==0,s[2].length==0)||af(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Cd;if(Se.document&&uo){var dy=Fb();Cd=dy||parseInt(lu,10)||void 0}else Cd=void 0;var Ak=Cd;function Ga(t,e){if(ln.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lb){e:{try{Eg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Rk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ga.$.h.call(this)}}Vt(Ga,ln);var Rk={2:"touch",3:"pen",4:"mouse"};Ga.prototype.h=function(){Ga.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _l="closure_listenable_"+(1e6*Math.random()|0),xk=0;function Ok(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++xk,this.fa=this.ia=!1}function lh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _g(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ub(t){const e={};for(const n in t)e[n]=t[n];return e}const py="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $b(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<py.length;s++)n=py[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ch(t){this.src=t,this.g={},this.h=0}ch.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ok(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ad(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Db(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var wg="closure_lm_"+(1e6*Math.random()|0),hf={};function Bb(t,e,n,r,i){if(r&&r.once)return Vb(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bb(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[_l]?t.O(e,n,El(r)?!!r.capture:!!r,i):jb(t,e,n,!1,r,i)}function jb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=El(i)?!!i.capture:!!i,a=Tg(t);if(a||(t[wg]=a=new ch(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Nk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Kb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nk(){function t(n){return e.call(t.src,t.listener,n)}const e=Pk;return t}function Vb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vb(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[_l]?t.P(e,n,El(r)?!!r.capture:!!r,i):jb(t,e,n,!0,r,i)}function Hb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Hb(t,e[s],n,r,i);else r=El(r)?!!r.capture:!!r,n=Sg(n),t&&t[_l]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rd(s,n,r,i),-1<n&&(lh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rd(e,n,r,i)),(n=-1<t?e[t]:null)&&bg(n))}function bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_l])Ad(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tg(e))?(Ad(n,t),n.h==0&&(n.src=null,e[wg]=null)):lh(t)}}}function Kb(t){return t in hf?hf[t]:hf[t]="on"+t}function Pk(t,e){if(t.fa)t=!0;else{e=new Ga(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bg(t),t=n.call(r,e)}return t}function Tg(t){return t=t[wg],t instanceof ch?t:null}var ff="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sg(t){return typeof t=="function"?t:(t[ff]||(t[ff]=function(e){return t.handleEvent(e)}),t[ff])}function jt(){xi.call(this),this.i=new ch(this),this.S=this,this.J=null}Vt(jt,xi);jt.prototype[_l]=!0;jt.prototype.removeEventListener=function(t,e,n,r){Hb(this,t,e,n,r)};function Xt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ln(e,t);else if(e instanceof ln)e.target=e.target||t;else{var i=e;e=new ln(r,t),$b(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ec(o,r,!0,e)&&i}if(o=e.g=t,i=ec(o,r,!0,e)&&i,i=ec(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ec(o,r,!1,e)&&i}jt.prototype.N=function(){if(jt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lh(n[r]);delete t.g[e],t.h--}}this.J=null};jt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};jt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ec(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ad(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ig=Se.JSON.stringify;function Dk(){var t=zb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kk{constructor(){this.h=this.g=null}add(e,n){const r=Wb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Wb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Mk,t=>t.reset());class Mk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lk(t){Se.setTimeout(()=>{throw t},0)}function Gb(t,e){xd||Fk(),Od||(xd(),Od=!0),zb.add(t,e)}var xd;function Fk(){var t=Se.Promise.resolve(void 0);xd=function(){t.then(Uk)}}var Od=!1,zb=new kk;function Uk(){for(var t;t=Dk();){try{t.h.call(t.g)}catch(n){Lk(n)}var e=Wb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Od=!1}function uh(t,e){jt.call(this),this.h=t||1,this.g=e||Se,this.j=an(this.qb,this),this.l=Date.now()}Vt(uh,jt);te=uh.prototype;te.ga=!1;te.T=null;te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xt(this,"tick"),this.ga&&(Cg(this),this.start()))}};te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}te.N=function(){uh.$.N.call(this),Cg(this),delete this.g};function Ag(t,e,n){if(typeof t=="function")n&&(t=an(t,n));else if(t&&typeof t.handleEvent=="function")t=an(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Se.setTimeout(t,e||0)}function Yb(t){t.g=Ag(()=>{t.g=null,t.i&&(t.i=!1,Yb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $k extends xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yb(this)}N(){super.N(),this.g&&(Se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){xi.call(this),this.h=t,this.g={}}Vt(za,xi);var gy=[];function Xb(t,e,n,r){Array.isArray(n)||(n&&(gy[0]=n.toString()),n=gy);for(var i=0;i<n.length;i++){var s=Bb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qb(t){_g(t.g,function(e,n){this.g.hasOwnProperty(n)&&bg(e)},t),t.g={}}za.prototype.N=function(){za.$.N.call(this),Qb(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hh(){this.g=!0}hh.prototype.Ea=function(){this.g=!1};function Bk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function $s(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hk(t,n)+(r?" "+r:"")})}function Vk(t,e){t.info(function(){return"TIMEOUT: "+e})}hh.prototype.info=function(){};function Hk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ig(n)}catch{return e}}var Ts={},my=null;function fh(){return my=my||new jt}Ts.Ta="serverreachability";function Jb(t){ln.call(this,Ts.Ta,t)}Vt(Jb,ln);function Ya(t){const e=fh();Xt(e,new Jb(e))}Ts.STAT_EVENT="statevent";function qb(t,e){ln.call(this,Ts.STAT_EVENT,t),this.stat=e}Vt(qb,ln);function gn(t){const e=fh();Xt(e,new qb(e,t))}Ts.Ua="timingevent";function Zb(t,e){ln.call(this,Ts.Ua,t),this.size=e}Vt(Zb,ln);function wl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Se.setTimeout(function(){t()},e)}var dh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rg(){}Rg.prototype.h=null;function vy(t){return t.h||(t.h=t.i())}function tT(){}var bl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xg(){ln.call(this,"d")}Vt(xg,ln);function Og(){ln.call(this,"c")}Vt(Og,ln);var Nd;function ph(){}Vt(ph,Rg);ph.prototype.g=function(){return new XMLHttpRequest};ph.prototype.i=function(){return{}};Nd=new ph;function Tl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new za(this),this.P=Kk,t=Id?125:void 0,this.V=new uh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new nT}function nT(){this.i=null,this.g="",this.h=!1}var Kk=45e3,Pd={},cu={};te=Tl.prototype;te.setTimeout=function(t){this.P=t};function Dd(t,e,n){t.L=1,t.v=mh(jr(e)),t.s=n,t.S=!0,rT(t,null)}function rT(t,e){t.G=Date.now(),Sl(t),t.A=jr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),hT(n.i,"t",r),t.C=0,n=t.l.I,t.h=new nT,t.g=PT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $k(an(t.Pa,t,t.g),t.O)),Xb(t.U,t.g,"readystatechange",t.nb),e=t.I?Ub(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ya(),Bk(t.j,t.u,t.A,t.m,t.W,t.s)}te.nb=function(t){t=t.target;const e=this.M;e&&Pr(t)==3?e.l():this.Pa(t)};te.Pa=function(t){try{if(t==this.g)e:{const u=Pr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Id||this.g&&(this.h.h||this.g.ja()||wy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ya(3):Ya(2)),gh(this);var n=this.g.da();this.aa=n;t:if(iT(this)){var r=wy(this.g);t="";var i=r.length,s=Pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Ea(this);var o="";break t}this.h.i=new Se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!au(a)){var c=a;break t}}c=null}if(n=c)$s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kd(this,n);else{this.i=!1,this.o=3,gn(12),Ki(this),Ea(this);break e}}this.S?(sT(this,u,o),Id&&this.i&&u==3&&(Xb(this.U,this.V,"tick",this.mb),this.V.start())):($s(this.j,this.m,o,null),kd(this,o)),u==4&&Ki(this),this.i&&!this.J&&(u==4?RT(this.l,this):(this.i=!1,Sl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gn(12)):(this.o=0,gn(13)),Ki(this),Ea(this)}}}catch{}finally{}};function iT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function sT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=Wk(t,n),i==cu){e==4&&(t.o=4,gn(14),r=!1),$s(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Pd){t.o=4,gn(15),$s(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $s(t.j,t.m,i,null),kd(t,i);iT(t)&&i!=cu&&i!=Pd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fg(e),e.L=!0,gn(11))):($s(t.j,t.m,n,"[Invalid Chunked Response]"),Ki(t),Ea(t))}te.mb=function(){if(this.g){var t=Pr(this.g),e=this.g.ja();this.C<e.length&&(gh(this),sT(this,t,e),this.i&&t!=4&&Sl(this))}};function Wk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?cu:(n=Number(e.substring(n,r)),isNaN(n)?Pd:(r+=1,r+n>e.length?cu:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.J=!0,Ki(this)};function Sl(t){t.Y=Date.now()+t.P,oT(t,t.P)}function oT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wl(an(t.lb,t),e)}function gh(t){t.B&&(Se.clearTimeout(t.B),t.B=null)}te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Vk(this.j,this.A),this.L!=2&&(Ya(),gn(17)),Ki(this),this.o=2,Ea(this)):oT(this,this.Y-t)};function Ea(t){t.l.H==0||t.J||RT(t.l,t)}function Ki(t){gh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Cg(t.V),Qb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function kd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Md(n.h,t))){if(!t.K&&Md(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fu(n),Eh(n);else break e;Lg(n),gn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=wl(an(n.ib,n),6e3));if(1>=pT(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Wi(n,11)}else if((t.K||n.g==t)&&fu(n),!au(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ng(s,s.h),s.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,vt(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=NT(r,r.I?r.oa:null,r.Y),o.K){gT(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(gh(a),Sl(a)),r.g=o}else CT(r);0<n.i.length&&_h(n)}else c[0]!="stop"&&c[0]!="close"||Wi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Wi(n,7):Mg(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Ya(4)}catch{}}function Gk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(oh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zk(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(oh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function aT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zk(t),r=Gk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var lT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qi){this.h=e!==void 0?e:t.h,uu(this,t.j),this.s=t.s,this.g=t.g,hu(this,t.m),this.l=t.l,e=t.i;var n=new Xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yy(this,n),this.o=t.o}else t&&(n=String(t).match(lT))?(this.h=!!e,uu(this,n[1]||"",!0),this.s=qo(n[2]||""),this.g=qo(n[3]||"",!0),hu(this,n[4]),this.l=qo(n[5]||"",!0),yy(this,n[6]||"",!0),this.o=qo(n[7]||"")):(this.h=!!e,this.i=new Xa(null,this.h))}qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zo(e,Ey,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zo(e,Ey,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zo(n,n.charAt(0)=="/"?Jk:Qk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zo(n,Zk)),t.join("")};function jr(t){return new qi(t)}function uu(t,e,n){t.j=n?qo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yy(t,e,n){e instanceof Xa?(t.i=e,eM(t.i,t.h)):(n||(e=Zo(e,qk)),t.i=new Xa(e,t.h))}function vt(t,e,n){t.i.set(e,n)}function mh(t){return vt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Xk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ey=/[#\/\?@]/g,Qk=/[#\?:]/g,Jk=/[#\?]/g,qk=/[#\?@]/g,Zk=/#/g;function Xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oi(t){t.g||(t.g=new Map,t.h=0,t.i&&Yk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=Xa.prototype;te.add=function(t,e){Oi(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cT(t,e){Oi(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uT(t,e){return Oi(t),e=No(t,e),t.g.has(e)}te.forEach=function(t,e){Oi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};te.sa=function(){Oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};te.Z=function(t){Oi(this);let e=[];if(typeof t=="string")uT(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return Oi(this),this.i=null,t=No(this,t),uT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hT(t,e,n){cT(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),yg(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eM(t,e){e&&!t.j&&(Oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cT(this,r),hT(this,i,n))},t)),t.j=e}var tM=class{constructor(t,e){this.h=t,this.g=e}};function fT(t){this.l=t||nM,Se.PerformanceNavigationTiming?(t=Se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Se.g&&Se.g.Ka&&Se.g.Ka()&&Se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nM=10;function dT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pT(t){return t.h?1:t.g?t.g.size:0}function Md(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ng(t,e){t.g?t.g.add(e):t.h=e}function gT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fT.prototype.cancel=function(){if(this.i=mT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yg(t.i)}function Pg(){}Pg.prototype.stringify=function(t){return Se.JSON.stringify(t,void 0)};Pg.prototype.parse=function(t){return Se.JSON.parse(t,void 0)};function rM(){this.g=new Pg}function iM(t,e,n){const r=n||"";try{aT(t,function(i,s){let o=i;El(i)&&(o=Ig(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sM(t,e){const n=new hh;if(Se.Image){const r=new Image;r.onload=Zl(tc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zl(tc,n,r,"TestLoadImage: error",!1,e),r.onabort=Zl(tc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zl(tc,n,r,"TestLoadImage: timeout",!1,e),Se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function tc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Il(t){this.l=t.fc||null,this.j=t.ob||!1}Vt(Il,Rg);Il.prototype.g=function(){return new vh(this.l,this.j)};Il.prototype.i=function(t){return function(){return t}}({});function vh(t,e){jt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(vh,jt);var Dg=0;te=vh.prototype;te.open=function(t,e){if(this.readyState!=Dg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qa(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cl(this)),this.readyState=Dg};te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cl(this):Qa(this),this.readyState==3&&vT(this)}};te.Za=function(t){this.g&&(this.response=this.responseText=t,Cl(this))};te.Ya=function(t){this.g&&(this.response=t,Cl(this))};te.ka=function(){this.g&&Cl(this)};function Cl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qa(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oM=Se.JSON.parse;function Rt(t){jt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yT,this.L=this.M=!1}Vt(Rt,jt);var yT="",aM=/^https?$/i,lM=["POST","PUT"];te=Rt.prototype;te.Oa=function(t){this.M=t};te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nd.g(),this.C=this.u?vy(this.u):vy(Nd),this.g.onreadystatechange=an(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){_y(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Se.FormData&&t instanceof Se.FormData,!(0<=Db(lM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wT(this),0<this.B&&((this.L=cM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=an(this.ua,this)):this.A=Ag(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){_y(this,s)}};function cM(t){return uo&&Ck()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.ua=function(){typeof vg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xt(this,"timeout"),this.abort(8))};function _y(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ET(t),yh(t)}function ET(t){t.F||(t.F=!0,Xt(t,"complete"),Xt(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xt(this,"complete"),Xt(this,"abort"),yh(this))};te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yh(this,!0)),Rt.$.N.call(this)};te.La=function(){this.s||(this.G||this.v||this.l?_T(this):this.kb())};te.kb=function(){_T(this)};function _T(t){if(t.h&&typeof vg<"u"&&(!t.C[1]||Pr(t)!=4||t.da()!=2)){if(t.v&&Pr(t)==4)Ag(t.La,0,t);else if(Xt(t,"readystatechange"),Pr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(lT)[1]||null;if(!i&&Se.self&&Se.self.location){var s=Se.self.location.protocol;i=s.substr(0,s.length-1)}r=!aM.test(i?i.toLowerCase():"")}n=r}if(n)Xt(t,"complete"),Xt(t,"success");else{t.m=6;try{var o=2<Pr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",ET(t)}}finally{yh(t)}}}}function yh(t,e){if(t.g){wT(t);const n=t.g,r=t.C[0]?ou:null;t.g=null,t.C=null,e||Xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function wT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Se.clearTimeout(t.A),t.A=null)}function Pr(t){return t.g?t.g.readyState:0}te.da=function(){try{return 2<Pr(this)?this.g.status:-1}catch{return-1}};te.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oM(e)}};function wy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case yT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ia=function(){return this.m};te.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bT(t){let e="";return _g(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):vt(t,e,n))}function Ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function TT(t){this.Ga=0,this.i=[],this.j=new hh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ho("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ho("baseRetryDelayMs",5e3,t),this.hb=Ho("retryDelaySeedMs",1e4,t),this.eb=Ho("forwardChannelMaxRetries",2,t),this.xa=Ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new fT(t&&t.concurrentRequestLimit),this.Ja=new rM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}te=TT.prototype;te.qa=8;te.H=1;function Mg(t){if(ST(t),t.H==3){var e=t.W++,n=jr(t.G);vt(n,"SID",t.J),vt(n,"RID",e),vt(n,"TYPE","terminate"),Al(t,n),e=new Tl(t,t.j,e,void 0),e.L=2,e.v=mh(jr(n)),n=!1,Se.navigator&&Se.navigator.sendBeacon&&(n=Se.navigator.sendBeacon(e.v.toString(),"")),!n&&Se.Image&&(new Image().src=e.v,n=!0),n||(e.g=PT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Sl(e)}OT(t)}function Eh(t){t.g&&(Fg(t),t.g.cancel(),t.g=null)}function ST(t){Eh(t),t.u&&(Se.clearTimeout(t.u),t.u=null),fu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Se.clearTimeout(t.m),t.m=null)}function _h(t){dT(t.h)||t.m||(t.m=!0,Gb(t.Na,t),t.C=0)}function uM(t,e){return pT(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wl(an(t.Na,t,e),xT(t,t.C)),t.C++,!0)}te.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Tl(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Ub(s),$b(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=IT(this,i,e),n=jr(this.G),vt(n,"RID",t),vt(n,"CVER",22),this.F&&vt(n,"X-HTTP-Session-Id",this.F),Al(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(bT(s)))+"&"+e:this.o&&kg(n,this.o,s)),Ng(this.h,i),this.bb&&vt(n,"TYPE","init"),this.P?(vt(n,"$req",e),vt(n,"SID","null"),i.ba=!0,Dd(i,n,null)):Dd(i,n,e),this.H=2}}else this.H==3&&(t?by(this,t):this.i.length==0||dT(this.h)||by(this))};function by(t,e){var n;e?n=e.m:n=t.W++;const r=jr(t.G);vt(r,"SID",t.J),vt(r,"RID",n),vt(r,"AID",t.V),Al(t,r),t.o&&t.s&&kg(r,t.o,t.s),n=new Tl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=IT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ng(t.h,n),Dd(n,r,e)}function Al(t,e){t.ma&&_g(t.ma,function(n,r){vt(e,r,n)}),t.l&&aT({},function(n,r){vt(e,r,n)})}function IT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?an(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{iM(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function CT(t){t.g||t.u||(t.ba=1,Gb(t.Ma,t),t.A=0)}function Lg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wl(an(t.Ma,t),xT(t,t.A)),t.A++,!0)}te.Ma=function(){if(this.u=null,AT(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=wl(an(this.jb,this),t)}};te.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,gn(10),Eh(this),AT(this))};function Fg(t){t.B!=null&&(Se.clearTimeout(t.B),t.B=null)}function AT(t){t.g=new Tl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=jr(t.wa);vt(e,"RID","rpc"),vt(e,"SID",t.J),vt(e,"CI",t.M?"0":"1"),vt(e,"AID",t.V),vt(e,"TYPE","xmlhttp"),Al(t,e),t.o&&t.s&&kg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=mh(jr(e)),n.s=null,n.S=!0,rT(n,t)}te.ib=function(){this.v!=null&&(this.v=null,Eh(this),Lg(this),gn(19))};function fu(t){t.v!=null&&(Se.clearTimeout(t.v),t.v=null)}function RT(t,e){var n=null;if(t.g==e){fu(t),Fg(t),t.g=null;var r=2}else if(Md(t.h,e))n=e.F,gT(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=fh(),Xt(r,new Zb(r,n)),_h(t)}else CT(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&uM(t,e)||r==2&&Lg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}}function xT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Wi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=an(t.pb,t);n||(n=new qi("//www.google.com/images/cleardot.gif"),Se.location&&Se.location.protocol=="http"||uu(n,"https"),mh(n)),sM(n.toString(),r)}else gn(2);t.H=0,t.l&&t.l.za(e),OT(t),ST(t)}te.pb=function(t){t?(this.j.info("Successfully pinged google.com"),gn(2)):(this.j.info("Failed to ping google.com"),gn(1))};function OT(t){if(t.H=0,t.pa=[],t.l){const e=mT(t.h);(e.length!=0||t.i.length!=0)&&(hy(t.pa,e),hy(t.pa,t.i),t.h.i.length=0,yg(t.i),t.i.length=0),t.l.ya()}}function NT(t,e,n){var r=n instanceof qi?jr(n):new qi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),hu(r,r.m);else{var i=Se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qi(null,void 0);r&&uu(s,r),e&&(s.g=e),i&&hu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&vt(r,n,e),vt(r,"VER",t.qa),Al(t,r),r}function PT(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Rt(new Il({ob:!0})):new Rt(t.va),e.Oa(t.I),e}function DT(){}te=DT.prototype;te.Ba=function(){};te.Aa=function(){};te.za=function(){};te.ya=function(){};te.Va=function(){};function du(){if(uo&&!(10<=Number(Ak)))throw Error("Environmental error: no available transport.")}du.prototype.g=function(t,e){return new Mn(t,e)};function Mn(t,e){jt.call(this),this.g=new TT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!au(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!au(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Po(this)}Vt(Mn,jt);Mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;gn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=NT(t,null,t.Y),_h(t)};Mn.prototype.close=function(){Mg(this.g)};Mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ig(t),t=n);e.i.push(new tM(e.fb++,t)),e.H==3&&_h(e)};Mn.prototype.N=function(){this.g.l=null,delete this.j,Mg(this.g),delete this.g,Mn.$.N.call(this)};function kT(t){xg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Vt(kT,xg);function MT(){Og.call(this),this.status=1}Vt(MT,Og);function Po(t){this.g=t}Vt(Po,DT);Po.prototype.Ba=function(){Xt(this.g,"a")};Po.prototype.Aa=function(t){Xt(this.g,new kT(t))};Po.prototype.za=function(t){Xt(this.g,new MT)};Po.prototype.ya=function(){Xt(this.g,"b")};function hM(){this.blockSize=-1}function nr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Vt(nr,hM);nr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function df(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}nr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)df(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){df(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){df(this,r),i=0;break}}this.h=i,this.i+=e};nr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function nt(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var fM={};function Ug(t){return-128<=t&&128>t?kb(fM,t,function(e){return new nt([e|0],0>e?-1:0)}):new nt([t|0],0>t?-1:0)}function cr(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return Gt(cr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ld;return new nt(e,0)}function LT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Gt(LT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cr(Math.pow(e,8)),r=Qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=cr(Math.pow(e,s)),r=r.R(s).add(cr(o))):(r=r.R(n),r=r.add(cr(o)))}return r}var Ld=4294967296,Qs=Ug(0),Fd=Ug(1),Ty=Ug(16777216);te=nt.prototype;te.ea=function(){if($n(this))return-Gt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ld+r)*e,e*=Ld}return t};te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if($n(this))return"-"+Gt(this).toString(t);for(var e=cr(Math.pow(t,6)),n=this,r="";;){var i=gu(n,e).g;n=pu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $n(t){return t.h==-1}te.X=function(t){return t=pu(this,t),$n(t)?-1:Dr(t)?0:1};function Gt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new nt(n,~t.h).add(Fd)}te.abs=function(){return $n(this)?Gt(this):this};te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new nt(n,n[n.length-1]&-2147483648?-1:0)};function pu(t,e){return t.add(Gt(e))}te.R=function(t){if(Dr(this)||Dr(t))return Qs;if($n(this))return $n(t)?Gt(this).R(Gt(t)):Gt(Gt(this).R(t));if($n(t))return Gt(this.R(Gt(t)));if(0>this.X(Ty)&&0>t.X(Ty))return cr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,nc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new nt(n,0)};function nc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ko(t,e){this.g=t,this.h=e}function gu(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Ko(Qs,Qs);if($n(t))return e=gu(Gt(t),e),new Ko(Gt(e.g),Gt(e.h));if($n(e))return e=gu(t,Gt(e)),new Ko(Gt(e.g),e.h);if(30<t.g.length){if($n(t)||$n(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fd,r=e;0>=r.X(t);)n=Sy(n),r=Sy(r);var i=Is(n,1),s=Is(r,1);for(r=Is(r,2),n=Is(n,2);!Dr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Is(r,1),n=Is(n,1)}return e=pu(t,i.R(e)),new Ko(i,e)}for(i=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=cr(n),o=s.R(e);$n(o)||0<o.X(t);)n-=r,s=cr(n),o=s.R(e);Dr(s)&&(s=Fd),i=i.add(s),t=pu(t,o)}return new Ko(i,t)}te.gb=function(t){return gu(this,t).h};te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new nt(n,this.h&t.h)};te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new nt(n,this.h|t.h)};te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new nt(n,this.h^t.h)};function Sy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new nt(n,t.h)}function Is(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new nt(i,t.h)}du.prototype.createWebChannel=du.prototype.g;Mn.prototype.send=Mn.prototype.u;Mn.prototype.open=Mn.prototype.m;Mn.prototype.close=Mn.prototype.close;dh.NO_ERROR=0;dh.TIMEOUT=8;dh.HTTP_ERROR=6;eT.COMPLETE="complete";tT.EventType=bl;bl.OPEN="a";bl.CLOSE="b";bl.ERROR="c";bl.MESSAGE="d";jt.prototype.listen=jt.prototype.O;Rt.prototype.listenOnce=Rt.prototype.P;Rt.prototype.getLastError=Rt.prototype.Sa;Rt.prototype.getLastErrorCode=Rt.prototype.Ia;Rt.prototype.getStatus=Rt.prototype.da;Rt.prototype.getResponseJson=Rt.prototype.Wa;Rt.prototype.getResponseText=Rt.prototype.ja;Rt.prototype.send=Rt.prototype.ha;Rt.prototype.setWithCredentials=Rt.prototype.Oa;nr.prototype.digest=nr.prototype.l;nr.prototype.reset=nr.prototype.reset;nr.prototype.update=nr.prototype.j;nt.prototype.add=nt.prototype.add;nt.prototype.multiply=nt.prototype.R;nt.prototype.modulo=nt.prototype.gb;nt.prototype.compare=nt.prototype.X;nt.prototype.toNumber=nt.prototype.ea;nt.prototype.toString=nt.prototype.toString;nt.prototype.getBits=nt.prototype.D;nt.fromNumber=cr;nt.fromString=LT;var dM=function(){return new du},pM=function(){return fh()},pf=dh,gM=eT,mM=Ts,Iy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vM=Il,rc=tT,yM=Rt,EM=nr,Js=nt;const Cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fs=new cl("@firebase/firestore");function Ay(){return fs.logLevel}function he(t,...e){if(fs.logLevel<=Ye.DEBUG){const n=e.map($g);fs.debug(`Firestore (${Do}): ${t}`,...n)}}function Vr(t,...e){if(fs.logLevel<=Ye.ERROR){const n=e.map($g);fs.error(`Firestore (${Do}): ${t}`,...n)}}function ho(t,...e){if(fs.logLevel<=Ye.WARN){const n=e.map($g);fs.warn(`Firestore (${Do}): ${t}`,...n)}}function $g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Oe(t="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+t;throw Vr(e),new Error(e)}function Mt(t,e){t||Oe()}function Je(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class wM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bM{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Mt(typeof r.accessToken=="string"),new FT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Mt(e===null||typeof e=="string"),new qt(e)}}class TM{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class SM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new TM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CM{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Mt(typeof n.token=="string"),this.T=n.token,new IM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function qe(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Cn.fromMillis(Date.now())}static fromDate(e){return Cn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Cn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&Oe(),r===void 0?r=e.length-n:r>e.length-n&&Oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class It extends Ja{construct(e,n,r){return new It(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const xM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bn extends Ja{construct(e,n,r){return new bn(e,n,r)}static isValidIdentifier(e){return xM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ye(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ye(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ye(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ye(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bn(n)}static emptyPath(){return new bn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(It.fromString(e))}static fromName(e){return new Ee(It.fromString(e).popFirst(5))}static empty(){return new Ee(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new It(e.slice()))}}function OM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Cn(n+1,0):new Cn(n,r));return new Si(i,Ee.empty(),e)}function NM(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(Ce.min(),Ee.empty(),-1)}static max(){return new Si(Ce.max(),Ee.empty(),-1)}}function PM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ee.comparator(t.documentKey,e.documentKey),n!==0?n:qe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==DM)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(i=>i?G.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new G((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new G((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Rl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}jg.ct=-1;function wh(t){return t==null}function Ud(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function MM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.comparator=e,this.root=n||Wt.EMPTY}insert(e,n){return new xt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Wt.RED,this.left=i??Wt.EMPTY,this.right=s??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Oe();const e=this.left.check();if(e!==this.right.check())throw Oe();return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe()}get value(){throw Oe()}get color(){throw Oe()}get left(){throw Oe()}get right(){throw Oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.comparator=e,this.data=new xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xy(this.data.getIterator())}getIteratorFrom(e){return new xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new cn(this.comparator);return n.data=e,n}}class xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.fields=e,e.sort(bn.comparator)}static empty(){return new li([])}unionWith(e){let n=new cn(bn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new li(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UT("Invalid base64 string: "+i):i}}(e);return new hn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new hn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const LM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Mt(!!t),typeof t=="string"){let e=0;const n=LM.exec(t);if(Mt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?hn.fromBase64String(t):hn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hg(t){const e=t.mapValue.fields.__previous_value__;return Vg(e)?Hg(e):e}function qa(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new Cn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vg(t)?4:UM(t)?9007199254740991:10:Oe()}function yr(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ii(r.timestampValue),o=Ii(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ds(r.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pt(r.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(r.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pt(r.integerValue)===Pt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pt(r.doubleValue),o=Pt(i.doubleValue);return s===o?Ud(s)===Ud(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ry(s)!==Ry(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yr(s[a],o[a])))return!1;return!0}(t,e);default:return Oe()}}function el(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return qe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return qe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Pt(i.integerValue||i.doubleValue),a=Pt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(qa(t),qa(e));case 5:return qe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ds(i),a=ds(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=qe(o[l],a[l]);if(c!==0)return c}return qe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=qe(Pt(i.latitude),Pt(s.latitude));return o!==0?o:qe(Pt(i.longitude),Pt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=po(o[l],a[l]);if(c)return c}return qe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===sc.mapValue&&s===sc.mapValue)return 0;if(i===sc.mapValue)return 1;if(s===sc.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=qe(a[u],c[u]);if(h!==0)return h;const f=po(o[a[u]],l[c[u]]);if(f!==0)return f}return qe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Oe()}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return qe(t,e);const n=Ii(t),r=Ii(e),i=qe(n.seconds,r.seconds);return i!==0?i:qe(n.nanos,r.nanos)}function go(t){return $d(t)}function $d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ii(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ds(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=$d(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${$d(r.fields[a])}`;return s+"}"}(t.mapValue):Oe();var e,n}function Bd(t){return!!t&&"integerValue"in t}function Kg(t){return!!t&&"arrayValue"in t}function Ny(t){return!!t&&"nullValue"in t}function Py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gf(t){return!!t&&"mapValue"in t}function _a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bh(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.value=e}static empty(){return new ar({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=bn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bh(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ar(_a(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tn(e,0,Ce.min(),Ce.min(),Ce.min(),ar.empty(),0)}static newFoundDocument(e,n,r,i){return new tn(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new tn(e,2,n,Ce.min(),Ce.min(),ar.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ce.min(),Ce.min(),ar.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ar.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ar.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mu{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Ee.comparator(Ee.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function $M(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $T{}class kt extends $T{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jM(e,n,r):n==="array-contains"?new KM(e,r):n==="in"?new WM(e,r):n==="not-in"?new GM(e,r):n==="array-contains-any"?new zM(e,r):new kt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VM(e,r):new HM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Er extends $T{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Er(e,n)}matches(e){return BT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function BT(t){return t.op==="and"}function jT(t){return BM(t)&&BT(t)}function BM(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function jd(t){if(t instanceof kt)return t.field.canonicalString()+t.op.toString()+go(t.value);if(jT(t))return t.filters.map(e=>jd(e)).join(",");{const e=t.filters.map(n=>jd(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof kt?function(n,r){return r instanceof kt&&n.op===r.op&&n.field.isEqual(r.field)&&yr(n.value,r.value)}(t,e):t instanceof Er?function(n,r){return r instanceof Er&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&VT(s,r.filters[o]),!0):!1}(t,e):void Oe()}function HT(t){return t instanceof kt?function(e){return`${e.field.canonicalString()} ${e.op} ${go(e.value)}`}(t):t instanceof Er?function(e){return e.op.toString()+" {"+e.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class jM extends kt{constructor(e,n,r){super(e,n,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const n=Ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class VM extends kt{constructor(e,n){super(e,"in",n),this.keys=KT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HM extends kt{constructor(e,n){super(e,"not-in",n),this.keys=KT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ee.fromName(r.referenceValue))}class KM extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kg(n)&&el(n.arrayValue,this.value)}}class WM extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class GM extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!el(this.value.arrayValue,n)}}class zM extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}/**
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
 */class YM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function My(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YM(t,e,n,r,i,s,o)}function Wg(t){const e=Je(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>go(r)).join(",")),e.ft=n}return e.ft}function Gg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$M(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ky(t.startAt,e.startAt)&&ky(t.endAt,e.endAt)}function Vd(t){return Ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function XM(t,e,n,r,i,s,o,a){return new Th(t,e,n,r,i,s,o,a)}function zg(t){return new Th(t)}function Ly(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function JM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qM(t){return t.collectionGroup!==null}function qs(t){const e=Je(t);if(e.dt===null){e.dt=[];const n=JM(e),r=QM(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new wa(n)),e.dt.push(new wa(bn.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wa(bn.keyField(),s))}}}return e.dt}function Hr(t){const e=Je(t);if(!e._t)if(e.limitType==="F")e._t=My(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of qs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new wa(s.field,o))}const r=e.endAt?new mu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mu(e.startAt.position,e.startAt.inclusive):null;e._t=My(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Hd(t,e,n){return new Th(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sh(t,e){return Gg(Hr(t),Hr(e))&&t.limitType===e.limitType}function WT(t){return`${Wg(Hr(t))}|lt:${t.limitType}`}function Kd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>HT(r)).join(", ")}]`),wh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>go(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>go(r)).join(",")),`Target(${n})`}(Hr(t))}; limitType=${t.limitType})`}function Ih(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of qs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Dy(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,qs(n),r)||n.endAt&&!function(i,s,o){const a=Dy(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,qs(n),r))}(t,e)}function ZM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GT(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const s=eL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eL(t,e,n){const r=t.field.isKeyField()?Ee.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?po(a,l):Oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bh(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return MM(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=new xt(Ee.comparator);function Ci(){return tL}const zT=new xt(Ee.comparator);function ea(...t){let e=zT;for(const n of t)e=e.insert(n.key,n);return e}function nL(t){let e=zT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return ba()}function YT(){return ba()}function ba(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const rL=new cn(Ee.comparator);function Xe(...t){let e=rL;for(const n of t)e=e.add(n);return e}const iL=new cn(qe);function sL(){return iL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ud(e)?"-0":e}}function aL(t){return{integerValue:""+t}}/**
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
 */class Ch{constructor(){this._=void 0}}function lL(t,e,n){return t instanceof Wd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Vg(i)&&(i=Hg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof vu?XT(t,e):t instanceof yu?QT(t,e):function(r,i){const s=uL(r,i),o=Fy(s)+Fy(r.wt);return Bd(s)&&Bd(r.wt)?aL(o):oL(r.serializer,o)}(t,e)}function cL(t,e,n){return t instanceof vu?XT(t,e):t instanceof yu?QT(t,e):n}function uL(t,e){return t instanceof Gd?Bd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Wd extends Ch{}class vu extends Ch{constructor(e){super(),this.elements=e}}function XT(t,e){const n=JT(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class yu extends Ch{constructor(e){super(),this.elements=e}}function QT(t,e){let n=JT(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class Gd extends Ch{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Fy(t){return Pt(t.integerValue||t.doubleValue)}function JT(t){return Kg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vu&&r instanceof vu||n instanceof yu&&r instanceof yu?fo(n.elements,r.elements,yr):n instanceof Gd&&r instanceof Gd?yr(n.wt,r.wt):n instanceof Wd&&r instanceof Wd}(t.transform,e.transform)}class Zi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zi}static exists(e){return new Zi(void 0,e)}static updateTime(e){return new Zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yg{}function qT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dL(t.key,Zi.none()):new Xg(t.key,t.data,Zi.none());{const n=t.data,r=ar.empty();let i=new cn(bn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ah(t.key,r,new li(i.toArray()),Zi.none())}}function fL(t,e,n){t instanceof Xg?function(r,i,s){const o=r.value.clone(),a=$y(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ah?function(r,i,s){if(!wc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$y(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ZT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n,r){return t instanceof Xg?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=i.value.clone(),c=By(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ah?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=By(i.fieldTransforms,a,s),c=s.data;return c.setAll(ZT(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return wc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fo(n,r,(i,s)=>hL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xg extends Yg{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ah extends Yg{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $y(t,e,n){const r=new Map;Mt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,cL(o,a,n[i]))}return r}function By(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lL(s,o,e))}return r}class dL extends Yg{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=qT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>Uy(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>Uy(n,r))}}/**
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
 */class gL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Ve;function eS(t){if(t===void 0)return Vr("GRPC error has no .code"),Z.UNKNOWN;switch(t){case Ot.OK:return Z.OK;case Ot.CANCELLED:return Z.CANCELLED;case Ot.UNKNOWN:return Z.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return Z.INTERNAL;case Ot.UNAVAILABLE:return Z.UNAVAILABLE;case Ot.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Ot.NOT_FOUND:return Z.NOT_FOUND;case Ot.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Ot.ABORTED:return Z.ABORTED;case Ot.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Ot.DATA_LOSS:return Z.DATA_LOSS;default:return Oe()}}(Ve=Ot||(Ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return oc}static getOrCreateInstance(){return oc===null&&(oc=new Qg),oc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let oc=null;/**
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
 */function vL(){return new TextEncoder}/**
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
 */const yL=new Js([4294967295,4294967295],0);function jy(t){const e=vL().encode(t),n=new EM;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Js([n,r],0),new Js([i,s],0)]}class Jg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ta(`Invalid padding: ${n}`);if(r<0)throw new ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ta(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Js.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Js.fromNumber(r)));return i.compare(yL)===1&&(i=new Js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=jy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=jy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(Ce.min(),i,new xt(qe),Ci(),Xe())}}class xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xl(r,n,Xe(),Xe(),Xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class tS{constructor(e,n){this.targetId=e,this.bt=n}}class nS{constructor(e,n,r=hn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hy{constructor(){this.Vt=0,this.St=Wy(),this.Dt=hn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=Xe(),n=Xe(),r=Xe();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Oe()}}),new xl(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=Wy()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class EL{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Ci(),this.jt=Ky(),this.zt=new xt(qe)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:Oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(Vd(o))if(i===0){const a=new Ee(o.path);this.Jt(r,a,tn.newNoDocument(a,Ce.min()))}else Mt(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=Qg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:h.count},E=h.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(f=E==null?void 0:E.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=ds(s).toUint8Array()}catch(u){if(u instanceof UT)return ho("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Jg(l,o,a)}catch(u){return ho(u instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.yt===0?1:i!==n-this.re(e.targetId,c)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Vd(a.target)){const l=new Ee(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,tn.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Xe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ne(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Rh(e,n,this.zt,this.Qt,r);return this.Qt=Ci(),this.jt=Ky(),this.zt=new xt(qe),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Hy,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new cn(qe),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Hy),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function Ky(){return new xt(Ee.comparator)}function Wy(){return new xt(Ee.comparator)}const _L=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bL=(()=>({and:"AND",or:"OR"}))();class TL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zd(t,e){return t.useProto3Json||wh(e)?e:{value:e}}function SL(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zs(t){return Mt(!!t),Ce.fromTimestamp(function(e){const n=Ii(e);return new Cn(n.seconds,n.nanos)}(t))}function CL(t,e){return function(n){return new It(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function rS(t){const e=It.fromString(t);return Mt(aS(e)),e}function mf(t,e){const n=rS(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ee(iS(n))}function Yd(t,e){return CL(t.databaseId,e)}function AL(t){const e=rS(t);return e.length===4?It.emptyPath():iS(e)}function Gy(t){return new It(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iS(t){return Mt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function RL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Mt(c===void 0||typeof c=="string"),hn.fromBase64String(c||"")):(Mt(c===void 0||c instanceof Uint8Array),hn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?Z.UNKNOWN:eS(l.code);return new ye(c,l.message||"")}(o);n=new nS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mf(t,r.document.name),s=Zs(r.document.updateTime),o=r.document.createTime?Zs(r.document.createTime):Ce.min(),a=new ar({mapValue:{fields:r.document.fields}}),l=tn.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new bc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mf(t,r.document),s=r.readTime?Zs(r.readTime):Ce.min(),o=tn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mf(t,r.document),s=r.removedTargetIds||[];n=new bc([],s,i,null)}else{if(!("filter"in e))return Oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mL(i,s),a=r.targetId;n=new tS(a,o)}}return n}function xL(t,e){return{documents:[Yd(t,e.path)]}}function OL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Yd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return oS(Er.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ps(u.field),direction:DL(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=zd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function NL(t){let e=AL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=sS(u);return h instanceof Er&&jT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new wa(Ds(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,wh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new mu(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new mu(f,h)}(n.endAt)),XM(e,i,o,s,a,"F",l,c)}function PL(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ds(e.unaryFilter.field);return kt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ds(e.unaryFilter.field);return kt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(e.unaryFilter.field);return kt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ds(e.unaryFilter.field);return kt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Oe()}}(t):t.fieldFilter!==void 0?function(e){return kt.create(Ds(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Er.create(e.compositeFilter.filters.map(n=>sS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Oe()}}(e.compositeFilter.op))}(t):Oe()}function DL(t){return _L[t]}function kL(t){return wL[t]}function ML(t){return bL[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Ds(t){return bn.fromServerFormat(t.fieldPath)}function oS(t){return t instanceof kt?function(e){if(e.op==="=="){if(Py(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(Ny(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Py(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(Ny(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:kL(e.op),value:e.value}}}(t):t instanceof Er?function(e){const n=e.getFilters().map(r=>oS(r));return n.length===1?n[0]:{compositeFilter:{op:ML(e.op),filters:n}}}(t):Oe()}function aS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i,s=Ce.min(),o=Ce.min(),a=hn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e){this.le=e}}function FL(t){const e=NL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hd(e,e.limit,"L"):e}/**
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
 */class UL{constructor(){this.sn=new $L}addToCollectionParentIndex(e,n){return this.sn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(Si.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class $L{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new cn(It.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new cn(It.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new mo(0)}static kn(){return new mo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ta(r.mutation,i,li.empty(),Cn.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Xe()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ea();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Xe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ci();const o=ba(),a=ba();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ah)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ta(u.mutation,c,u.mutation.getFieldMask(),Cn.now())):o.set(c.key,li.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new jL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new xt((o,a)=>o-a),s=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||li.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||Xe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=YT();u.forEach(f=>{if(!s.has(f)){const d=qT(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):G.resolve(Gi());let a=-1,l=s;return o.next(c=>G.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?G.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Xe())).next(u=>({batchId:a,changes:nL(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ee(n)).next(r=>{let i=ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ea();return this.indexManager.getCollectionParents(e,i).next(o=>G.forEach(o,a=>{const l=function(c,u){return new Th(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,tn.newInvalidDocument(c)))});let o=ea();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Ta(c.mutation,l,li.empty(),Cn.now()),Ih(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return G.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Zs(r.createTime)}),G.resolve()}getNamedQuery(e,n){return G.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:FL(r.bundledQuery),readTime:Zs(r.readTime)}}(n)),G.resolve()}}/**
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
 */class KL{constructor(){this.overlays=new xt(Ee.comparator),this.hs=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return G.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),s=n.length+1,o=new Ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return G.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Gi(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return G.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gL(n,r));let s=this.hs.get(n);s===void 0&&(s=Xe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.ls=new cn(Ut.fs),this.ds=new cn(Ut._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ut(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ut(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new Ee(new It([])),r=new Ut(n,e),i=new Ut(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new Ee(new It([])),r=new Ut(n,e),i=new Ut(n,e+1);let s=Xe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ut(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ut{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return Ee.comparator(e.key,n.key)||qe(e.Es,n.Es)}static _s(e,n){return qe(e.Es,n.Es)||Ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new cn(Ut.fs)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ut(n,0),i=new Ut(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new cn(qe);return n.forEach(i=>{const s=new Ut(i,0),o=new Ut(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),G.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Ee.isDocumentKey(s)||(s=s.child(""));const o=new Ut(new Ee(s),0);let a=new cn(qe);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Es)),!0)},o),G.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Mt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return G.forEach(n.mutations,i=>{const s=new Ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ut(n,0),i=this.Rs.firstAfterOrEqual(r);return G.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.Ss=e,this.docs=new xt(Ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let r=Ci();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tn.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ci();const o=n.path,a=new Ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||PM(NM(u),r)<=0||(i.has(u.key)||Ih(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Oe()}Ds(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zL(this)}getSize(e){return G.resolve(this.size)}}class zL extends BL{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.persistence=e,this.Cs=new ko(n=>Wg(n),Gg),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new qg,this.targetCount=0,this.ks=mo.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),G.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.$n(n),G.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n){this.Ms={},this.overlays={},this.Os=new jg(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new YL(this),this.indexManager=new UL,this.remoteDocumentCache=function(r){return new GL(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new LL(n),this.Ls=new HL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new WL(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const i=new QL(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return G.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class QL extends kM{constructor(e){super(),this.currentSequenceNumber=e}}class Zg{constructor(e){this.persistence=e,this.Gs=new qg,this.Qs=null}static js(e){return new Zg(e)}get zs(){if(this.Qs)return this.Qs;throw Oe()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),G.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.zs,r=>{const i=Ee.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return G.or([()=>G.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=Xe(),i=Xe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new em(e,n.fromCache,r,i)}}/**
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
 */class JL{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Ly(n))return G.resolve(null);let r=Hr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hd(n,null,"F"),r=Hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Xe(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,Hd(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,r,i){return Ly(n)||i.isEqual(Ce.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Ay()<=Ye.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kd(n)),this.zi(e,o,n,OM(i,-1)))})}Qi(e,n){let r=new cn(GT(e));return n.forEach((i,s)=>{Ih(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Ay()<=Ye.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Kd(n)),this.qi.getDocumentsMatchingQuery(e,n,Si.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new xt(qe),this.Ji=new ko(s=>Wg(s),Gg),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VL(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function ZL(t,e,n,r){return new qL(t,e,n,r)}async function lS(t,e){const n=Je(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Xe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function cS(t){const e=Je(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function e2(t,e){const n=Je(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.Fs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(hn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Fs.updateTargetData(s,d))});let l=Ci(),c=Xe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(t2(s,o,e.documentUpdates).next(u=>{l=u.er,c=u.nr})),!r.isEqual(Ce.min())){const u=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return G.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Hi=i,s))}function t2(t,e,n){let r=Xe(),i=Xe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ci();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):he("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{er:o,nr:i}})}function n2(t,e){const n=Je(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function Xd(t,e,n){const r=Je(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rl(o))throw o;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function zy(t,e,n){const r=Je(t);let i=Ce.min(),s=Xe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Je(a),h=u.Ji.get(c);return h!==void 0?G.resolve(u.Hi.get(h)):u.Fs.getTargetData(l,c)}(r,o,Hr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:Ce.min(),n?s:Xe())).next(a=>(r2(r,ZM(e),a),{documents:a,sr:s})))}function r2(t,e,n){let r=t.Yi.get(e)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class Yy{constructor(){this.activeTargetIds=sL()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i2{constructor(){this.Wr=new Yy,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Yy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class s2{Jr(e){}shutdown(){}}/**
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
 */class Xy{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ac=null;function vf(){return ac===null?ac=268435456+Math.round(2147483648*Math.random()):ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class l2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=vf(),a=this.Io(e,n);he("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(c=>(he("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw ho("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Do,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=o2[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=vf();return new Promise((o,a)=>{const l=new yM;l.setWithCredentials(!0),l.listenOnce(gM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pf.NO_ERROR:const u=l.getResponseJson();he(Qt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case pf.TIMEOUT:he(Qt,`RPC '${e}' ${s} timed out`),a(new ye(Z.DEADLINE_EXCEEDED,"Request time out"));break;case pf.HTTP_ERROR:const h=l.getStatus();if(he(Qt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(y)>=0?y:Z.UNKNOWN}(d.status);a(new ye(p,d.message))}else a(new ye(Z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ye(Z.UNAVAILABLE,"Connection failed."));break;default:Oe()}}finally{he(Qt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);he(Qt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const i=vf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dM(),a=pM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new vM({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");he(Qt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,f=!1;const d=new a2({io:m=>{f?he(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(he(Qt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),he(Qt,`RPC '${e}' stream ${i} sending:`,m),u.send(m))},ro:()=>u.close()}),p=(m,y,v)=>{m.listen(y,g=>{try{v(g)}catch(E){setTimeout(()=>{throw E},0)}})};return p(u,rc.EventType.OPEN,()=>{f||he(Qt,`RPC '${e}' stream ${i} transport opened.`)}),p(u,rc.EventType.CLOSE,()=>{f||(f=!0,he(Qt,`RPC '${e}' stream ${i} transport closed`),d.fo())}),p(u,rc.EventType.ERROR,m=>{f||(f=!0,ho(Qt,`RPC '${e}' stream ${i} transport errored:`,m),d.fo(new ye(Z.UNAVAILABLE,"The operation could not be completed")))}),p(u,rc.EventType.MESSAGE,m=>{var y;if(!f){const v=m.data[0];Mt(!!v);const g=v,E=g.error||((y=g[0])===null||y===void 0?void 0:y.error);if(E){he(Qt,`RPC '${e}' stream ${i} received error:`,E);const w=E.status;let T=function(x){const I=Ot[x];if(I!==void 0)return eS(I)}(w),S=E.message;T===void 0&&(T=Z.INTERNAL,S="Unknown error status: "+w+" with message "+E.message),f=!0,d.fo(new ye(T,S)),u.close()}else he(Qt,`RPC '${e}' stream ${i} received:`,v),d._o(v)}}),p(a,mM.STAT_EVENT,m=>{m.stat===Iy.PROXY?he(Qt,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===Iy.NOPROXY&&he(Qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.lo()},0),d}}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){return new TL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&he("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new hS(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Vr(n.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new ye(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u2 extends c2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=RL(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?Zs(s.readTime):Ce.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Gy(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Vd(a)?{documents:xL(i,a)}:{query:OL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=IL(i,s.resumeToken);const l=zd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=SL(i,s.snapshotVersion.toTimestamp());const l=zd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=PL(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Gy(this.serializer),n.removeTarget=e,this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ye(Z.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ye(Z.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class f2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Vr(n),this.wu=!1):he("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Nl(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Je(a);l.Au.add(4),await Ol(l),l.Pu.set("Unknown"),l.Au.delete(4),await xh(l)}(this))})}),this.Pu=new f2(r,i)}}async function xh(t){if(Nl(t))for(const e of t.Ru)await e(!0)}async function Ol(t){for(const e of t.Ru)await e(!1)}function fS(t,e){const n=Je(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),rm(n)?nm(n):Mo(n).Uo()&&tm(n,e))}function dS(t,e){const n=Je(t),r=Mo(n);n.Eu.delete(e),r.Uo()&&pS(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Nl(n)&&n.Pu.set("Unknown"))}function tm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).nu(e)}function pS(t,e){t.bu.Lt(e),Mo(t).su(e)}function nm(t){t.bu=new EL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.Pu.mu()}function rm(t){return Nl(t)&&!Mo(t).qo()&&t.Eu.size>0}function Nl(t){return Je(t).Au.size===0}function gS(t){t.bu=void 0}async function p2(t){t.Eu.forEach((e,n)=>{tm(t,e)})}async function g2(t,e){gS(t),rm(t)?(t.Pu.pu(e),nm(t)):t.Pu.set("Unknown")}async function m2(t,e,n){if(t.Pu.set("Online"),e instanceof nS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qy(t,r)}else if(e instanceof bc?t.bu.Wt(e):e instanceof tS?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ce.min()))try{const r=await cS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(l);c&&i.Eu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(hn.EMPTY_BYTE_STRING,c.snapshotVersion)),pS(i,a);const u=new ci(c.target,a,l,c.sequenceNumber);tm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){he("RemoteStore","Failed to raise snapshot:",r),await Qy(t,r)}}async function Qy(t,e,n){if(!Rl(e))throw e;t.Au.add(1),await Ol(t),t.Pu.set("Offline"),n||(n=()=>cS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await xh(t)})}async function Jy(t,e){const n=Je(t);n.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const r=Nl(n);n.Au.add(3),await Ol(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await xh(n)}async function v2(t,e){const n=Je(t);e?(n.Au.delete(2),await xh(n)):e||(n.Au.add(2),await Ol(n),n.Pu.set("Unknown"))}function Mo(t){return t.Vu||(t.Vu=function(e,n,r){const i=Je(e);return i.lu(),new u2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:p2.bind(null,t),co:g2.bind(null,t),eu:m2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),rm(t)?nm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),gS(t))})),t.Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new im(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mS(t,e){if(Vr("AsyncQueue",`${e}: ${t}`),Rl(t))return new ye(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ee.comparator(n.key,r.key):(n,r)=>Ee.comparator(n.key,r.key),this.keyedMap=ea(),this.sortedSet=new xt(this.comparator)}static emptySet(e){return new eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Du=new xt(Ee.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Oe():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class vo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vo(e,n,eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.xu=void 0,this.listeners=[]}}class E2{constructor(){this.queries=new ko(e=>WT(e),Sh),this.onlineState="Unknown",this.Nu=new Set}}async function vS(t,e){const n=Je(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new y2),i)try{s.xu=await n.onListen(r)}catch(o){const a=mS(o,`Initialization of query '${Kd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&sm(n)}async function yS(t,e){const n=Je(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _2(t,e){const n=Je(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&sm(n)}function w2(t,e,n){const r=Je(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function sm(t){t.Nu.forEach(e=>{e.next()})}class ES{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.key=e}}class wS{constructor(e){this.key=e}}class b2{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Xe(),this.mutatedKeys=Xe(),this.Zu=GT(e),this.tc=new eo(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new qy,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=Ih(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.ic(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.Zu(d,l)>0||c&&this.Zu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe()}};return d(h)-d(f)}(c.type,u.type)||this.Zu(c.doc,u.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new vo(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new qy,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=Xe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new wS(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new _S(r))}),n}ac(e){this.Ju=e.sr,this.Xu=Xe();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return vo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class T2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S2{constructor(e){this.key=e,this.lc=!1}}class I2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ko(a=>WT(a),Sh),this._c=new Map,this.wc=new Set,this.mc=new xt(Ee.comparator),this.gc=new Map,this.yc=new qg,this.Ic={},this.Tc=new Map,this.Ec=mo.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function C2(t,e){const n=D2(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await n2(n.localStore,Hr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await A2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&fS(n.remoteStore,o)}return i}async function A2(t,e,n,r,i){t.Rc=(h,f,d)=>async function(p,m,y,v){let g=m.view.nc(y);g.ji&&(g=await zy(p.localStore,m.query,!1).then(({documents:T})=>m.view.nc(T,g)));const E=v&&v.targetChanges.get(m.targetId),w=m.view.applyChanges(g,p.isPrimaryClient,E);return eE(p,m.targetId,w.uc),w.snapshot}(t,h,f,d);const s=await zy(t.localStore,e,!0),o=new b2(e,s.sr),a=o.nc(s.documents),l=xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);eE(t,n,c.uc);const u=new T2(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function R2(t,e){const n=Je(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Sh(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),dS(n.remoteStore,r.targetId),Qd(n,r.targetId)}).catch(Bg)):(Qd(n,r.targetId),await Xd(n.localStore,r.targetId,!0))}async function bS(t,e){const n=Je(t);try{const r=await e2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(Mt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Mt(o.lc):i.removedDocuments.size>0&&(Mt(o.lc),o.lc=!1))}),await SS(n,r,e)}catch(r){await Bg(r)}}function Zy(t,e,n){const r=Je(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Je(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ku(o)&&(l=!0)}),l&&sm(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x2(t,e,n){const r=Je(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new xt(Ee.comparator);o=o.insert(s,tn.newNoDocument(s,Ce.min()));const a=Xe().add(s),l=new Rh(Ce.min(),new Map,new xt(qe),o,a);await bS(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),om(r)}else await Xd(r.localStore,e,!1).then(()=>Qd(r,e,n)).catch(Bg)}function Qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||TS(t,r)})}function TS(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(dS(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),om(t))}function eE(t,e,n){for(const r of n)r instanceof _S?(t.yc.addReference(r.key,e),O2(t,r)):r instanceof wS?(he("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||TS(t,r.key)):Oe()}function O2(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(he("SyncEngine","New document in limbo: "+n),t.wc.add(r),om(t))}function om(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new Ee(It.fromString(e)),r=t.Ec.next();t.gc.set(r,new S2(n)),t.mc=t.mc.insert(n,r),fS(t.remoteStore,new ci(Hr(zg(n.path)),r,"TargetPurposeLimboResolution",jg.ct))}}async function SS(t,e,n){const r=Je(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=em.Bi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const c=Je(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>G.forEach(l,h=>G.forEach(h.$i,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>G.forEach(h.Fi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Rl(u))throw u;he("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Hi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Hi=c.Hi.insert(h,p)}}}(r.localStore,s))}async function N2(t,e){const n=Je(t);if(!n.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const r=await lS(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new ye(Z.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await SS(n,r.tr)}}function P2(t,e){const n=Je(t),r=n.gc.get(e);if(r&&r.lc)return Xe().add(r.key);{let i=Xe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function D2(t){const e=Je(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=P2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x2.bind(null,e),e.fc.eu=_2.bind(null,e.eventManager),e.fc.vc=w2.bind(null,e.eventManager),e}class tE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=uS(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZL(this.persistence,new JL,e.initialUser,this.serializer)}createPersistence(e){return new XL(Zg.js,this.serializer)}createSharedClientState(e){return new i2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class k2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=N2.bind(null,this.syncEngine),await v2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new E2}createDatastore(e){const n=uS(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new l2(i));var i;return function(s,o,a,l){return new h2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Zy(this.syncEngine,a,0),o=Xy.D()?new Xy:new s2,new d2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new I2(r,i,s,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Je(e);he("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ol(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qt.UNAUTHENTICATED,this.clientId=RM.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{he("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(he("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mS(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await F2(t);he("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Jy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Jy(e.remoteStore,s)),t._onlineComponents=e}function L2(t){return t.name==="FirebaseError"?t.code===Z.FAILED_PRECONDITION||t.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function F2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!L2(n))throw n;ho("Error using user provided cache. Falling back to memory cache: "+n),await Ef(t,new tE)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await Ef(t,new tE);return t._offlineComponents}async function U2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await nE(t,t._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await nE(t,new k2))),t._onlineComponents}async function CS(t){const e=await U2(t),n=e.eventManager;return n.onListen=C2.bind(null,e.syncEngine),n.onUnlisten=R2.bind(null,e.syncEngine),n}function $2(t,e,n={}){const r=new vi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new IS({next:h=>{s.enqueueAndForget(()=>yS(i,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new ye(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new ye(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new ES(zg(o.path),c,{includeMetadataChanges:!0,Uu:!0});return vS(i,u)}(await CS(t),t.asyncQueue,e,n,r)),r.promise}function B2(t,e,n={}){const r=new vi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new IS({next:h=>{s.enqueueAndForget(()=>yS(i,u)),h.fromCache&&a.source==="server"?l.reject(new ye(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new ES(o,c,{includeMetadataChanges:!0,Uu:!0});return vS(i,u)}(await CS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t,e,n){if(!n)throw new ye(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V2(t,e,n,r){if(e===!0&&r===!0)throw new ye(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function iE(t){if(Ee.isDocumentKey(t))throw new ye(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function H2(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe()}function tl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=H2(t);throw new ye(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ye(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _M;switch(n.type){case"firstParty":return new SM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ye(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rE.get(e);n&&(he("ComponentProvider","Removing Datastore"),rE.delete(e),n.terminate())}(this),Promise.resolve()}}function K2(t,e,n,r={}){var i;const s=(t=tl(t,am))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ho("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qt.MOCK_USER;else{o=L1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ye(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qt(l)}t._authCredentials=new wM(new FT(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ni(this.firestore,e,this._key)}}class Oh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oh(this.firestore,e,this._query)}}class to extends Oh{constructor(e,n,r){super(e,n,zg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ni(this.firestore,null,new Ee(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function W2(t,e,...n){if(t=Ai(t),j2("collection","path",e),t instanceof am){const r=It.fromString(e,...n);return iE(r),new to(t,null,r)}{if(!(t instanceof Ni||t instanceof to))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(It.fromString(e,...n));return iE(r),new to(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new hS(this,"async_queue_retry"),this.Yc=()=>{const n=yf();n&&he("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=yf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new vi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Rl(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=im.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Oe()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class lm extends am{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new G2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RS(this),this._firestoreClient.terminate()}}function z2(t,e){const n=typeof t=="object"?t:Vp(),r=typeof t=="string"?t:e||"(default)",i=jp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=k1("firestore");s&&K2(i,...s)}return i}function AS(t){return t._firestoreClient||RS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new FM(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new M2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Eu(hn.fromBase64String(e))}catch(n){throw new ye(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Eu(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}}const X2=new RegExp("[~\\*/\\[\\]]");function Q2(t,e,n){if(e.search(X2)>=0)throw oE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xS(...e.split("."))._internalPath}catch{throw oE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oE(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ye(Z.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ni(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(NS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J2 extends OS{data(){return super.data()}}function NS(t,e){return typeof e=="string"?Q2(t,e):e instanceof xS?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ye(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Z2{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bh(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Y2(Pt(e.latitude),Pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new Cn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=It.fromString(e);Mt(aS(r));const i=new Za(r.get(1),r.get(3)),s=new Ee(r.popFirst(5));return i.isEqual(n)||Vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PS extends OS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(NS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tc extends PS{data(e={}){return super.data(e)}}class eF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tc(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Tc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Tc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:tF(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){t=tl(t,Ni);const e=tl(t.firestore,lm);return $2(AS(e),t._key).then(n=>iF(e,t,n))}class DS extends Z2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Eu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ni(this.firestore,null,n)}}function rF(t){t=tl(t,Oh);const e=tl(t.firestore,lm),n=AS(e),r=new DS(e);return q2(t._query),B2(n,t._query).then(i=>new eF(e,r,t,i))}function iF(t,e,n){const r=n.docs.get(e._key),i=new DS(t);return new PS(t,i,e._key,r,new na(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Do=n})(Ri),mr(new tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new lm(new bM(n.getProvider("auth-internal")),new CM(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ye(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Dn(Cy,"3.11.0",t),Dn(Cy,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebasestorage.googleapis.com",sF="storageBucket",oF=2*60*1e3,aF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Tr{constructor(e,n,r=0){super(_f(e),`Firebase Storage: ${n} (${_f(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _r;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_r||(_r={}));function _f(t){return"storage/"+t}function lF(){const t="An unknown error occurred, please check the error payload for server response.";return new Sr(_r.UNKNOWN,t)}function cF(){return new Sr(_r.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uF(){return new Sr(_r.CANCELED,"User canceled the upload/download.")}function hF(t){return new Sr(_r.INVALID_URL,"Invalid URL '"+t+"'.")}function fF(t){return new Sr(_r.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aE(t){return new Sr(_r.INVALID_ARGUMENT,t)}function MS(){return new Sr(_r.APP_DELETED,"The Firebase app was deleted.")}function dF(t){return new Sr(_r.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jn.makeFromUrl(e,n)}catch{return new Jn(e,"")}if(r.path==="")return r;throw fF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},m=n===kS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${y}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<E.length;w++){const T=E[w],S=T.regex.exec(e);if(S){const x=S[T.indices.bucket];let I=S[T.indices.path];I||(I=""),r=new Jn(x,I),T.postModify(r);break}}if(r==null)throw hF(e);return r}}class pF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function f(){s&&clearTimeout(s)}function d(y,...v){if(c){f();return}if(y){f(),u.call(null,y,...v);return}if(l()||o){f(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function m(y){p||(p=!0,f(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function mF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vF(t){return t!==void 0}function lE(t,e,n,r){if(r<e)throw aE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw aE(`Invalid value for '${t}'. Expected ${n} or less.`)}function yF(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _u;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_u||(_u={}));/**
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
 */function EF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n,r,i,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new lc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_u.NO_ERROR,l=s.getStatus();if(!a||EF(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===_u.ABORT;r(!1,new lc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new lc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());vF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=lF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MS():uF();o(l)}else{const l=cF();o(l)}};this.canceled_?n(!1,new lc(!1,null,!0)):this.backoffId_=gF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function IF(t,e,n,r,i,s,o=!0){const a=yF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return TF(c,e),wF(c,n),bF(c,s),SF(c,r),new _F(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wu{constructor(e,n){this._service=e,n instanceof Jn?this._location=n:this._location=Jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wu(e,n)}get root(){const e=new Jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AF(this._location.path)}get storage(){return this._service}get parent(){const e=CF(this._location.path);if(e===null)return null;const n=new Jn(this._location.bucket,e);return new wu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dF(e)}}function cE(t,e){const n=e==null?void 0:e[sF];return n==null?null:Jn.makeFromBucketSpec(n,t)}class RF{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=kS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oF,this._maxUploadRetryTime=aF,this._requests=new Set,i!=null?this._bucket=Jn.makeFromBucketSpec(i,this._host):this._bucket=cE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jn.makeFromBucketSpec(this._url,e):this._bucket=cE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new pF(MS());{const o=IF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const uE="@firebase/storage",hE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF="storage";function OF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new RF(n,r,i,e,Ri)}function NF(){mr(new tr(xF,OF,"PUBLIC").setMultipleInstances(!0)),Dn(uE,hE,""),Dn(uE,hE,"esm2017")}NF();function PF(t){return z2(ww(t))}function DF(t){return(e,n)=>{const r=RN(e,n).run(()=>hr(t));xN.set(e,r),NN(r,e)}}function kF(t,{firebaseApp:e,modules:n=[]}){t.provide(_w,e);for(const r of n)t.use(r.bind(null,e))}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof window<"u";function MF(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const et=Object.assign;function wf(t,e){const n={};for(const r in e){const i=e[r];n[r]=rr(i)?i.map(t):t(i)}return n}const Sa=()=>{},rr=Array.isArray,LF=/\/$/,FF=t=>t.replace(LF,"");function bf(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jF(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function UF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fE(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $F(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&yo(e.matched[r],n.matched[i])&&LS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function LS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BF(t[n],e[n]))return!1;return!0}function BF(t,e){return rr(t)?dE(t,e):rr(e)?dE(e,t):t===e}function dE(t,e){return rr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var nl;(function(t){t.pop="pop",t.push="push"})(nl||(nl={}));var Ia;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ia||(Ia={}));function VF(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FF(t)}const HF=/^[^#]+#/;function KF(t,e){return t.replace(HF,"#")+e}function WF(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nh=()=>({left:window.pageXOffset,top:window.pageYOffset});function GF(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=WF(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pE(t,e){return(history.state?history.state.position-e:-1)+t}const Jd=new Map;function zF(t,e){Jd.set(t,e)}function YF(t){const e=Jd.get(t);return Jd.delete(t),e}let XF=()=>location.protocol+"//"+location.host;function FS(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),fE(l,"")}return fE(n,t)+r+i}function QF(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const d=FS(t,location),p=n.value,m=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=m?f.position-m.position:0}else r(d);i.forEach(v=>{v(n.value,p,{delta:y,type:nl.pop,direction:y?y>0?Ia.forward:Ia.back:Ia.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const p=i.indexOf(f);p>-1&&i.splice(p,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(et({},f.state,{scroll:Nh()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function gE(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Nh():null}}function JF(t){const{history:e,location:n}=window,r={value:FS(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:XF()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=et({},e.state,gE(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=et({},i.value,e.state,{forward:l,scroll:Nh()});s(u.current,u,!0);const h=et({},gE(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function qF(t){t=VF(t);const e=JF(t),n=QF(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=et({location:"",base:t,go:r,createHref:KF.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZF(t){return typeof t=="string"||t&&typeof t=="object"}function US(t){return typeof t=="string"||typeof t=="symbol"}const Jr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$S=Symbol("");var mE;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mE||(mE={}));function Eo(t,e){return et(new Error,{type:t,[$S]:!0},e)}function Ir(t,e){return t instanceof Error&&$S in t&&(e==null||!!(t.type&e))}const vE="[^/]+?",eU={sensitive:!1,strict:!1,start:!0,end:!0},tU=/[.+*?^${}()[\]/\\]/g;function nU(t,e){const n=et({},eU,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(tU,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=f;s.push({name:p,repeatable:m,optional:y});const g=v||vE;if(g!==vE){d+=10;try{new RegExp(`(${g})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+w.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;h||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=s[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(rr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=rr(v)?v.join("/"):v;if(!g)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function rU(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iU(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=rU(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(yE(r))return 1;if(yE(i))return-1}return i.length-r.length}function yE(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sU={type:0,value:""},oU=/[a-zA-Z0-9_]/;function aU(t){if(!t)return[[]];if(t==="/")return[[sU]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:oU.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function lU(t,e,n){const r=nU(aU(t.path),n),i=et(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cU(t,e){const n=[],r=new Map;e=wE({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const d=!f,p=uU(u);p.aliasOf=f&&f.record;const m=wE(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of E)y.push(et({},p,{components:f?f.record.components:p.components,path:w,aliasOf:f?f.record:p}))}let v,g;for(const E of y){const{path:w}=E;if(h&&w[0]!=="/"){const T=h.record.path,S=T[T.length-1]==="/"?"":"/";E.path=h.record.path+(w&&S+w)}if(v=lU(E,h,m),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!_E(v)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)s(T[S],v,f&&f.children[S])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:Sa}function o(u){if(US(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&iU(u,n[h])>=0&&(u.record.path!==n[h].record.path||!BS(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_E(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},p,m;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Eo(1,{location:u});m=f.record.name,d=et(EE(h.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&EE(u.params,f.keys.map(g=>g.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(g=>g.re.test(p)),f&&(d=f.parse(p),m=f.record.name);else{if(f=h.name?r.get(h.name):n.find(g=>g.re.test(h.path)),!f)throw Eo(1,{location:u,currentLocation:h});m=f.record.name,d=et({},h.params,u.params),p=f.stringify(d)}const y=[];let v=f;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:fU(y)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function EE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uU(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hU(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hU(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _E(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fU(t){return t.reduce((e,n)=>et(e,n.meta),{})}function wE(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function BS(t,e){return e.children.some(n=>n===t||BS(t,n))}const jS=/#/g,dU=/&/g,pU=/\//g,gU=/=/g,mU=/\?/g,VS=/\+/g,vU=/%5B/g,yU=/%5D/g,HS=/%5E/g,EU=/%60/g,KS=/%7B/g,_U=/%7C/g,WS=/%7D/g,wU=/%20/g;function cm(t){return encodeURI(""+t).replace(_U,"|").replace(vU,"[").replace(yU,"]")}function bU(t){return cm(t).replace(KS,"{").replace(WS,"}").replace(HS,"^")}function qd(t){return cm(t).replace(VS,"%2B").replace(wU,"+").replace(jS,"%23").replace(dU,"%26").replace(EU,"`").replace(KS,"{").replace(WS,"}").replace(HS,"^")}function TU(t){return qd(t).replace(gU,"%3D")}function SU(t){return cm(t).replace(jS,"%23").replace(mU,"%3F")}function IU(t){return t==null?"":SU(t).replace(pU,"%2F")}function bu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CU(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(VS," "),o=s.indexOf("="),a=bu(o<0?s:s.slice(0,o)),l=o<0?null:bu(s.slice(o+1));if(a in e){let c=e[a];rr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bE(t){let e="";for(let n in t){const r=t[n];if(n=TU(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rr(r)?r.map(s=>s&&qd(s)):[r&&qd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function AU(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const RU=Symbol(""),TE=Symbol(""),um=Symbol(""),GS=Symbol(""),Zd=Symbol("");function Wo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ti(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Eo(4,{from:n,to:e})):h instanceof Error?a(h):ZF(h)?a(Eo(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Tf(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(xU(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ti(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=MF(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ti(f,n,r,s,o)()}))}}return i}function xU(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function SE(t){const e=jn(um),n=jn(GS),r=wn(()=>e.resolve(st(t.to))),i=wn(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(yo.bind(null,u));if(f>-1)return f;const d=IE(l[c-2]);return c>1&&IE(u)===d&&h[h.length-1].path!==d?h.findIndex(yo.bind(null,l[c-2])):f}),s=wn(()=>i.value>-1&&DU(n.params,r.value.params)),o=wn(()=>i.value>-1&&i.value===n.matched.length-1&&LS(n.params,r.value.params));function a(l={}){return PU(l)?e[st(t.replace)?"replace":"push"](st(t.to)).catch(Sa):Promise.resolve()}return{route:r,href:wn(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const OU=Lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:SE,setup(t,{slots:e}){const n=vs(SE(t)),{options:r}=jn(um),i=wn(()=>({[CE(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[CE(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:zu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),NU=OU;function PU(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DU(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!rr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function IE(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const CE=(t,e,n)=>t??e??n,kU=Lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jn(Zd),i=wn(()=>t.route||r.value),s=jn(TE,0),o=wn(()=>{let c=st(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=wn(()=>i.value.matched[o.value]);ca(TE,wn(()=>o.value+1)),ca(RU,a),ca(Zd,i);const l=hr();return fi(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!yo(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return AE(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=zu(f,et({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return AE(n.default,{Component:y,route:c})||y}}});function AE(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zS=kU;function MU(t){const e=cU(t.routes,t),n=t.parseQuery||CU,r=t.stringifyQuery||bE,i=t.history,s=Wo(),o=Wo(),a=Wo(),l=a0(Jr);let c=Jr;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wf.bind(null,M=>""+M),h=wf.bind(null,IU),f=wf.bind(null,bu);function d(M,W){let H,ne;return US(M)?(H=e.getRecordMatcher(M),ne=W):ne=M,e.addRoute(ne,H)}function p(M){const W=e.getRecordMatcher(M);W&&e.removeRoute(W)}function m(){return e.getRoutes().map(M=>M.record)}function y(M){return!!e.getRecordMatcher(M)}function v(M,W){if(W=et({},W||l.value),typeof M=="string"){const _=bf(n,M,W.path),b=e.resolve({path:_.path},W),N=i.createHref(_.fullPath);return et(_,b,{params:f(b.params),hash:bu(_.hash),redirectedFrom:void 0,href:N})}let H;if("path"in M)H=et({},M,{path:bf(n,M.path,W.path).path});else{const _=et({},M.params);for(const b in _)_[b]==null&&delete _[b];H=et({},M,{params:h(M.params)}),W.params=h(W.params)}const ne=e.resolve(H,W),me=M.hash||"";ne.params=u(f(ne.params));const We=UF(r,et({},M,{hash:bU(me),path:ne.path})),_e=i.createHref(We);return et({fullPath:We,hash:me,query:r===bE?AU(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:_e})}function g(M){return typeof M=="string"?bf(n,M,l.value.path):et({},M)}function E(M,W){if(c!==M)return Eo(8,{from:W,to:M})}function w(M){return x(M)}function T(M){return w(et(g(M),{replace:!0}))}function S(M){const W=M.matched[M.matched.length-1];if(W&&W.redirect){const{redirect:H}=W;let ne=typeof H=="function"?H(M):H;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=g(ne):{path:ne},ne.params={}),et({query:M.query,hash:M.hash,params:"path"in ne?{}:M.params},ne)}}function x(M,W){const H=c=v(M),ne=l.value,me=M.state,We=M.force,_e=M.replace===!0,_=S(H);if(_)return x(et(g(_),{state:typeof _=="object"?et({},me,_.state):me,force:We,replace:_e}),W||H);const b=H;b.redirectedFrom=W;let N;return!We&&$F(r,ne,H)&&(N=Eo(16,{to:b,from:ne}),ct(ne,ne,!0,!1)),(N?Promise.resolve(N):C(b,ne)).catch(F=>Ir(F)?Ir(F,2)?F:Me(F):Q(F,b,ne)).then(F=>{if(F){if(Ir(F,2))return x(et({replace:_e},g(F.to),{state:typeof F.to=="object"?et({},me,F.to.state):me,force:We}),W||b)}else F=L(b,ne,!0,_e,me);return P(b,ne,F),F})}function I(M,W){const H=E(M,W);return H?Promise.reject(H):Promise.resolve()}function C(M,W){let H;const[ne,me,We]=LU(M,W);H=Tf(ne.reverse(),"beforeRouteLeave",M,W);for(const _ of ne)_.leaveGuards.forEach(b=>{H.push(ti(b,M,W))});const _e=I.bind(null,M,W);return H.push(_e),Cs(H).then(()=>{H=[];for(const _ of s.list())H.push(ti(_,M,W));return H.push(_e),Cs(H)}).then(()=>{H=Tf(me,"beforeRouteUpdate",M,W);for(const _ of me)_.updateGuards.forEach(b=>{H.push(ti(b,M,W))});return H.push(_e),Cs(H)}).then(()=>{H=[];for(const _ of M.matched)if(_.beforeEnter&&!W.matched.includes(_))if(rr(_.beforeEnter))for(const b of _.beforeEnter)H.push(ti(b,M,W));else H.push(ti(_.beforeEnter,M,W));return H.push(_e),Cs(H)}).then(()=>(M.matched.forEach(_=>_.enterCallbacks={}),H=Tf(We,"beforeRouteEnter",M,W),H.push(_e),Cs(H))).then(()=>{H=[];for(const _ of o.list())H.push(ti(_,M,W));return H.push(_e),Cs(H)}).catch(_=>Ir(_,8)?_:Promise.reject(_))}function P(M,W,H){for(const ne of a.list())ne(M,W,H)}function L(M,W,H,ne,me){const We=E(M,W);if(We)return We;const _e=W===Jr,_=ks?history.state:{};H&&(ne||_e?i.replace(M.fullPath,et({scroll:_e&&_&&_.scroll},me)):i.push(M.fullPath,me)),l.value=M,ct(M,W,H,_e),Me()}let U;function k(){U||(U=i.listen((M,W,H)=>{if(!Et.listening)return;const ne=v(M),me=S(ne);if(me){x(et(me,{replace:!0}),ne).catch(Sa);return}c=ne;const We=l.value;ks&&zF(pE(We.fullPath,H.delta),Nh()),C(ne,We).catch(_e=>Ir(_e,12)?_e:Ir(_e,2)?(x(_e.to,ne).then(_=>{Ir(_,20)&&!H.delta&&H.type===nl.pop&&i.go(-1,!1)}).catch(Sa),Promise.reject()):(H.delta&&i.go(-H.delta,!1),Q(_e,ne,We))).then(_e=>{_e=_e||L(ne,We,!1),_e&&(H.delta&&!Ir(_e,8)?i.go(-H.delta,!1):H.type===nl.pop&&Ir(_e,20)&&i.go(-1,!1)),P(ne,We,_e)}).catch(Sa)}))}let O=Wo(),J=Wo(),B;function Q(M,W,H){Me(M);const ne=J.list();return ne.length?ne.forEach(me=>me(M,W,H)):console.error(M),Promise.reject(M)}function se(){return B&&l.value!==Jr?Promise.resolve():new Promise((M,W)=>{O.add([M,W])})}function Me(M){return B||(B=!M,k(),O.list().forEach(([W,H])=>M?H(M):W()),O.reset()),M}function ct(M,W,H,ne){const{scrollBehavior:me}=t;if(!ks||!me)return Promise.resolve();const We=!H&&YF(pE(M.fullPath,0))||(ne||!H)&&history.state&&history.state.scroll||null;return Es().then(()=>me(M,W,We)).then(_e=>_e&&GF(_e)).catch(_e=>Q(_e,M,W))}const Be=M=>i.go(M);let De;const at=new Set,Et={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:w,replace:T,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:se,install(M){const W=this;M.component("RouterLink",NU),M.component("RouterView",zS),M.config.globalProperties.$router=W,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),ks&&!De&&l.value===Jr&&(De=!0,w(i.location).catch(me=>{}));const H={};for(const me in Jr)H[me]=wn(()=>l.value[me]);M.provide(um,W),M.provide(GS,vs(H)),M.provide(Zd,l);const ne=M.unmount;at.add(M),M.unmount=function(){at.delete(M),at.size<1&&(c=Jr,U&&U(),U=null,l.value=Jr,De=!1,B=!1),ne()}}};return Et}function Cs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LU(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>yo(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yo(c,l))||i.push(l))}return[n,r,i]}const FU=Lt({__name:"App",setup(t){return(e,n)=>($e(),mn(st(zS)))}});const UU={apiKey:"AIzaSyAjt3RyE1KkK110jxZQUrm9kjfclWO126k",authDomain:"personal-website-c3482.firebaseapp.com",projectId:"personal-website-c3482",storageBucket:"personal-website-c3482.appspot.com",messagingSenderId:"110986644823",appId:"1:110986644823:web:4081c484521ba6b37bc212",measurementId:"G-PF7D6JKSC3"},$U=L_(UU);/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let YS;const Ph=t=>YS=t,XS=Symbol();function ep(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ca;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ca||(Ca={}));function BU(){const t=Nu(!0),e=t.run(()=>hr({}));let n=[],r=[];const i=ns({install(s){Ph(i),i._a=s,s.provide(XS,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!tN?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const QS=()=>{};function RE(t,e,n,r=QS){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&dp()&&zE(i),i}function As(t,...e){t.slice().forEach(n=>{n(...e)})}function tp(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ep(i)&&ep(r)&&t.hasOwnProperty(n)&&!wt(r)&&!ur(r)?t[n]=tp(i,r):t[n]=r}return t}const jU=Symbol();function VU(t){return!ep(t)||!t.hasOwnProperty(jU)}const{assign:Zr}=Object;function HU(t){return!!(wt(t)&&t.effect)}function KU(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=c0(n.state.value[t]);return Zr(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=ns(wn(()=>{Ph(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=JS(t,c,e,n,r,!0),l}function JS(t,e,n={},r,i,s){let o;const a=Zr({actions:{}},n),l={deep:!0};let c,u,h=ns([]),f=ns([]),d;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),hr({});let m;function y(x){let I;c=u=!1,typeof x=="function"?(x(r.state.value[t]),I={type:Ca.patchFunction,storeId:t,events:d}):(tp(r.state.value[t],x),I={type:Ca.patchObject,payload:x,storeId:t,events:d});const C=m=Symbol();Es().then(()=>{m===C&&(c=!0)}),u=!0,As(h,I,r.state.value[t])}const v=s?function(){const{state:I}=n,C=I?I():{};this.$patch(P=>{Zr(P,C)})}:QS;function g(){o.stop(),h=[],f=[],r._s.delete(t)}function E(x,I){return function(){Ph(r);const C=Array.from(arguments),P=[],L=[];function U(J){P.push(J)}function k(J){L.push(J)}As(f,{args:C,name:x,store:T,after:U,onError:k});let O;try{O=I.apply(this&&this.$id===t?this:T,C)}catch(J){throw As(L,J),J}return O instanceof Promise?O.then(J=>(As(P,J),J)).catch(J=>(As(L,J),Promise.reject(J))):(As(P,O),O)}}const w={_p:r,$id:t,$onAction:RE.bind(null,f),$patch:y,$reset:v,$subscribe(x,I={}){const C=RE(h,x,I.detached,()=>P()),P=o.run(()=>fi(()=>r.state.value[t],L=>{(I.flush==="sync"?u:c)&&x({storeId:t,type:Ca.direct,events:d},L)},Zr({},l,I)));return C},$dispose:g},T=vs(w);r._s.set(t,T);const S=r._e.run(()=>(o=Nu(),o.run(()=>e())));for(const x in S){const I=S[x];if(wt(I)&&!HU(I)||ur(I))s||(p&&VU(I)&&(wt(I)?I.value=p[x]:tp(I,p[x])),r.state.value[t][x]=I);else if(typeof I=="function"){const C=E(x,I);S[x]=C,a.actions[x]=I}}return Zr(T,S),Zr(ke(T),S),Object.defineProperty(T,"$state",{get:()=>r.state.value[t],set:x=>{y(I=>{Zr(I,x)})}}),r._p.forEach(x=>{Zr(T,o.run(()=>x({store:T,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(T.$state,p),c=!0,u=!0,T}function WU(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=br();return a=a||c&&jn(XS,null),a&&Ph(a),a=YS,a._s.has(r)||(s?JS(r,e,i,a):KU(r,i,a)),a._s.get(r)}return o.$id=r,o}function Dh(t){{t=ke(t);const e={};for(const n in t){const r=t[n];(wt(r)||ur(r))&&(e[n]=wp(t,n))}return e}}const xE=(t,e)=>{const n=t.storage||sessionStorage,r=t.key||e.$id;if(t.paths){const i=t.paths.reduce((s,o)=>(s[o]=e.$state[o],s),{});n.setItem(r,JSON.stringify(i))}else n.setItem(r,JSON.stringify(e.$state))};var GU=({options:t,store:e})=>{var n,r,i,s;if((n=t.persist)!=null&&n.enabled){const o=[{key:e.$id,storage:sessionStorage}],a=(i=(r=t.persist)==null?void 0:r.strategies)!=null&&i.length?(s=t.persist)==null?void 0:s.strategies:o;a.forEach(l=>{const c=l.storage||sessionStorage,u=l.key||e.$id,h=c.getItem(u);h&&(e.$patch(JSON.parse(h)),xE(l,e))}),e.$subscribe(()=>{a.forEach(l=>{xE(l,e)})})}};const qS=BU();qS.use(GU);const ZS={name:"Sander Derks",role:"Full-Stack Developer",service:"Software Development",location:{country:"The Netherlands",city:"Nijmegen"},description:["Welcome to my website!","Here you'll soon find a lot of resources from me."],websites:[{name:"GitHub",url:"https://github.com/sanderderks",logo:"github.png"},{name:"LinkedIn",url:"https://www.linkedin.com/in/sander-derks/",logo:"linkedin.png"}]},zU=[{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0},{name:"",description:"Loading...",technologies:[],loading:!0}],YU=[{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0},{name:"Loading...",url:"#",loading:!0}],Sf=t=>t.sort((e,n)=>(n.order||0)-(e.order||0)),XU=(t,e,n,r)=>{setTimeout(()=>{t.forEach((i,s)=>{setTimeout(()=>{r(i)},s*n)})},e)},QU=PF(),Pl=WU("main",{state:()=>({profile:ZS,menuItems:YU,projects:zU,online:!0}),getters:{filteredProjects:t=>t.projects.filter(e=>!e.loading),filteredMenuItems:t=>t.menuItems.filter(e=>!e.loading)},actions:{async fetchData(t){const e=await rF(W2(QU,t));return Promise.all(e.docs.map(async n=>{const r=n.data(),i=Object.entries(r).filter(([,s])=>s instanceof Array&&s[0]instanceof Ni);if(i.length){const s=i.map(async([a,l])=>{const u=(await Promise.all(l.map(h=>nF(h)))).map(h=>h.data());return{[a]:Sf(u)}}),o=await Promise.all(s);return{...r,...o.reduce((a,l)=>({...a,...l}),{})}}else return r}))},async fetchAll(){this.online&&(!this.filteredProjects.length||!this.filteredMenuItems.length)&&await Promise.all([this.fetchProjects(),this.fetchMenuItems()])},async fetchProjects(){const t=await this.fetchData("projects");this.projects=t.length?Sf(t):this.projects},async fetchMenuItems(){const t=await this.fetchData("menuItems");this.menuItems=t.length?Sf(t):this.menuItems},moveProject(t,e){const n=this.projects.splice(t,1)[0];this.projects.splice(e,0,n)}},persist:{enabled:!0}}),hm=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},JU={},qU={class:"bg-black text-white shadow-md py-4"},ZU={class:"container mx-auto text-center"};function e4(t,e){return $e(),Dt("footer",qU,[tt("div",ZU,[tt("p",null,"© "+pn(new Date().getFullYear())+" Sander Derks. All rights reserved.",1)])])}const t4=hm(JU,[["render",e4]]),n4=""+new URL("bundle.css",import.meta.url).href;var r4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function i4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function eI(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}const Lo=eI(I1),{createElementVNode:s4,openBlock:o4,createElementBlock:a4}=Lo;var l4=function(e,n){return o4(),a4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s4("path",{"fill-rule":"evenodd",d:"M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z","clip-rule":"evenodd"})])};const{createElementVNode:OE,openBlock:c4,createElementBlock:u4}=Lo;var h4=function(e,n){return c4(),u4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[OE("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),OE("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})])};const{createElementVNode:f4,openBlock:d4,createElementBlock:p4}=Lo;var g4=function(e,n){return d4(),p4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[f4("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])};const{createElementVNode:m4,openBlock:v4,createElementBlock:y4}=Lo;var E4=function(e,n){return v4(),y4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[m4("path",{"fill-rule":"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z","clip-rule":"evenodd"})])};const{createElementVNode:_4,openBlock:w4,createElementBlock:b4}=Lo;var T4=function(e,n){return w4(),b4("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_4("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})])},tI=l4,S4=h4,I4=g4,C4=E4,A4=T4;const R4={class:"md:hidden absolute z-20 w-3/4 left-1/2 transform -translate-x-1/2 mt-2 p-4 py-8 bg-gray-900 border border-indigo-600 rounded-xl"},x4=["href"],O4=Lt({__name:"DropDown",props:{isOpen:{type:Boolean},toggle:{type:Function}},setup(t){const{menuItems:e}=Dh(Pl());return(n,r)=>{const i=xp("RouterLink");return $e(),Dt(mt,null,[$f(tt("div",{class:"w-screen h-screen z-10 bg-gray-900 opacity-25 fixed top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 animation",onClick:r[0]||(r[0]=(...s)=>t.toggle&&t.toggle(...s))},null,512),[[Bc,t.isOpen]]),$f(tt("div",R4,[($e(!0),Dt(mt,null,ll(st(e),s=>($e(),Dt("a",{href:s.url,class:"button-outlined-list-primary flex flex-column justify-center text-lg first:rounded-t-xl",onClick:r[1]||(r[1]=(...o)=>t.toggle&&t.toggle(...o))},[s.loading?($e(),mn(st(tI),{key:0,class:"mt-1 mr-2.5 h-5 w-5 animate-spin"})):Fc("",!0),Ur(" "+pn(s.name),1)],8,x4))),256)),Ne(i,{to:{name:"login"},class:"button-outlined-list-secondary block text-lg rounded-b-xl first:rounded-t-xl"},{default:er(()=>[Ur(" Login ")]),_:1})],512),[[Bc,t.isOpen]])],64)}}}),N4={key:0,class:"col-span-5 flex items-center justify-between md:justify-around mt-5 gap-3 flex-wrap"},P4=["href"],D4={class:"flex justify-center"},k4=Lt({__name:"Menu",setup(t){const{menuItems:e}=Dh(Pl()),n=hr(),r=hr(!1),i=()=>{r.value=!r.value,r.value&&Es(()=>{var s;(s=n.value)==null||s.scrollIntoView({behavior:"smooth",block:"center"})})};return(s,o)=>st(e).length?($e(),Dt("div",N4,[($e(!0),Dt(mt,null,ll(st(e),a=>($e(),Dt("a",{class:"button-outlined-primary hidden md:flex flex-column justify-center",type:"button",href:a.url},[a.loading?($e(),mn(st(tI),{key:0,class:"my-1 mr-2.5 h-5 w-5 animate-spin"})):Fc("",!0),Ur(" "+pn(a.name),1)],8,P4))),256)),tt("div",{ref_key:"dropdown",ref:n,class:"dropdown w-full"},[tt("button",{class:"button-outlined-primary md:hidden w-full",type:"button",onClick:i},[tt("div",D4,[Ne(st(I4),{class:"mt-0.5 mr-2.5 h-5 w-5"}),Ur(" Menu ")])]),Ne(O4,{"is-open":r.value,toggle:()=>r.value=!r.value},null,8,["is-open","toggle"])],512)])):Fc("",!0)}}),M4={class:"lg:flex lg:items-center lg:justify-between"},L4={class:"min-w-0 flex-1"},F4=["src","alt"],U4={class:"title-primary"},$4={class:"title-secondary"},B4={class:"title-tertiary mt-1 sm:mt-0 flex flex-col xl:flex-row xl:flex-wrap xl:space-x-6"},j4={class:"mt-2 flex items-center"},V4={class:"mt-2 flex items-center"},H4={class:"grid grid-cols-5 lg:w-1/2 justify-stretch mt-8 lg:mt-0 p-8 bg-black bg-opacity-50 text-indigo-300 rounded-3xl"},K4={class:"col-span-5 md:col-span-4 space-y-2"},W4={class:"hidden md:visible col-span-5 md:col-span-1 md:flex items-center justify-center md:justify-end"},G4=Lt({__name:"Header",setup(t){const{profile:e}=Dh(Pl());return(n,r)=>{const i=xp("RouterLink");return $e(),Dt("div",M4,[tt("div",L4,[Ne(i,{to:{name:"home"}},{default:er(()=>[tt("img",{class:"w-48 h-48 rounded-full animation-scale mb-4 cursor-pointer",src:st(n4),alt:st(e).name},null,8,F4)]),_:1}),tt("h1",U4,pn(st(e).name),1),tt("h2",$4,pn(st(e).service),1),tt("div",B4,[tt("div",j4,[Ne(st(S4),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Ur(" "+pn(st(e).role),1)]),tt("div",V4,[Ne(st(C4),{class:"mr-1.5 h-5 w-5 text-gray-400"}),Ur(" "+pn(st(e).location.city)+", "+pn(st(e).location.country),1)])])]),tt("div",H4,[tt("div",K4,[($e(!0),Dt(mt,null,ll(st(e).description,(s,o)=>($e(),Dt("p",{class:gs(o===0?"font-bold text-lg":"font-semibold text-base")},pn(s),3))),256))]),tt("div",W4,[Ne(i,{to:{name:"login"}},{default:er(()=>[Ne(st(A4),{class:"w-16 h-16 rounded-full border-2 text-indigo-600 border-indigo-600 animation-scale"})]),_:1})]),Ne(k4)])])}}}),z4={class:"min-h-screen bg-gradient-to-t from-black to-blue-900 via-gray-800"},Y4={class:"mx-0 sm:mx-16 p-5 sm:p-14 rounded-bl-3xl rounded-br-3xl text-white bg-blue-gray-900 bg-opacity-50 bg-gradient-to-b from-transparent to-black via-purple-900 border-opacity-100"},fm=Lt({__name:"Page",setup(t){const{fetchAll:e}=Pl();return _s(()=>{e()}),(n,r)=>($e(),Dt(mt,null,[tt("div",z4,[tt("div",Y4,[tt("header",null,[n.$slots.header?ua(n.$slots,"header",{key:0}):($e(),mn(G4,{key:1}))]),tt("main",null,[ua(n.$slots,"content")])])]),tt("footer",null,[n.$slots.footer?ua(n.$slots,"footer",{key:0}):($e(),mn(t4,{key:1}))])],64))}}),X4=["href"],Q4={class:"text-2xl group-hover/bubble:underline font-bold mb-2"},J4={key:1,class:"text-2xl font-bold mb-2"},q4={class:"text-gray-400 mb-2"},dm=Lt({__name:"Bubble",props:{name:null,url:null,description:null,buttonText:null,loading:{type:Boolean}},setup(t){return(e,n)=>($e(),Dt("div",{class:gs("group/bubble bg-gray-700 bg-opacity-50 rounded-3xl p-10 "+(t.url?"hover:bg-opacity-30":"")+(t.loading?"animate-pulse":""))},[t.url?($e(),Dt("a",{key:0,href:t.url},[tt("h2",Q4,pn(t.name),1)],8,X4)):($e(),Dt("h2",J4,pn(t.name),1)),tt("p",q4,pn(t.description),1),ua(e.$slots,"default")],2))}}),Z4=["href"],e$={key:1},t$=Lt({__name:"ColororedButton",props:{text:null,url:null,color:null},setup(t){return(e,n)=>($e(),Dt("button",{class:"mt-3 md:mt-0 text-white font-bold py-2 px-4 rounded-full",style:wo({backgroundColor:t.color})},[t.url?($e(),Dt("a",{key:0,href:t.url},pn(t.text),9,Z4)):($e(),Dt("p",e$,pn(t.text),1))],4))}});const n$=hm(t$,[["__scopeId","data-v-a9693f67"]]);var np={},r$={get exports(){return np},set exports(t){np=t}};/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function NE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?NE(Object(n),!0).forEach(function(r){i$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):NE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Sc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sc=function(e){return typeof e}:Sc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sc(t)}function i$(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hn(){return Hn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hn.apply(this,arguments)}function s$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function o$(t,e){if(t==null)return{};var n=s$(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function a$(t){return l$(t)||c$(t)||u$(t)||h$()}function l$(t){if(Array.isArray(t))return rp(t)}function c$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u$(t,e){if(t){if(typeof t=="string")return rp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rp(t,e)}}function rp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f$="1.14.0";function Lr(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var Gr=Lr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Dl=Lr(/Edge/i),PE=Lr(/firefox/i),Aa=Lr(/safari/i)&&!Lr(/chrome/i)&&!Lr(/android/i),nI=Lr(/iP(ad|od|hone)/i),d$=Lr(/chrome/i)&&Lr(/android/i),rI={capture:!1,passive:!1};function Le(t,e,n){t.addEventListener(e,n,!Gr&&rI)}function Pe(t,e,n){t.removeEventListener(e,n,!Gr&&rI)}function Tu(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function p$(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function Gn(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&Tu(t,e):Tu(t,e))||r&&t===n)return t;if(t===n)break}while(t=p$(t))}return null}var DE=/\s+/g;function _t(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(DE," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(DE," ")}}function oe(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function es(t,e){var n="";if(typeof t=="string")n=t;else do{var r=oe(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function iI(t,e,n){if(t){var r=t.getElementsByTagName(e),i=0,s=r.length;if(n)for(;i<s;i++)n(r[i],i);return r}return[]}function pr(){var t=document.scrollingElement;return t||document.documentElement}function gt(t,e,n,r,i){if(!(!t.getBoundingClientRect&&t!==window)){var s,o,a,l,c,u,h;if(t!==window&&t.parentNode&&t!==pr()?(s=t.getBoundingClientRect(),o=s.top,a=s.left,l=s.bottom,c=s.right,u=s.height,h=s.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!Gr))do if(i&&i.getBoundingClientRect&&(oe(i,"transform")!=="none"||n&&oe(i,"position")!=="static")){var f=i.getBoundingClientRect();o-=f.top+parseInt(oe(i,"border-top-width")),a-=f.left+parseInt(oe(i,"border-left-width")),l=o+s.height,c=a+s.width;break}while(i=i.parentNode);if(r&&t!==window){var d=es(i||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,h/=p,u/=m,l=o+u,c=a+h)}return{top:o,left:a,bottom:l,right:c,width:h,height:u}}}function kE(t,e,n){for(var r=ui(t,!0),i=gt(t)[e];r;){var s=gt(r)[n],o=void 0;if(n==="top"||n==="left"?o=i>=s:o=i<=s,!o)return r;if(r===pr())break;r=ui(r,!1)}return!1}function _o(t,e,n,r){for(var i=0,s=0,o=t.children;s<o.length;){if(o[s].style.display!=="none"&&o[s]!==ve.ghost&&(r||o[s]!==ve.dragged)&&Gn(o[s],n.draggable,t,!1)){if(i===e)return o[s];i++}s++}return null}function pm(t,e){for(var n=t.lastElementChild;n&&(n===ve.ghost||oe(n,"display")==="none"||e&&!Tu(n,e));)n=n.previousElementSibling;return n||null}function St(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==ve.clone&&(!e||Tu(t,e))&&n++;return n}function ME(t){var e=0,n=0,r=pr();if(t)do{var i=es(t),s=i.a,o=i.d;e+=t.scrollLeft*s,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function g$(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function ui(t,e){if(!t||!t.getBoundingClientRect)return pr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=oe(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return pr();if(r||e)return n;r=!0}}while(n=n.parentNode);return pr()}function m$(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function If(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Ra;function sI(t,e){return function(){if(!Ra){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),Ra=setTimeout(function(){Ra=void 0},e)}}}function v$(){clearTimeout(Ra),Ra=void 0}function oI(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function gm(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function LE(t,e){oe(t,"position","absolute"),oe(t,"top",e.top),oe(t,"left",e.left),oe(t,"width",e.width),oe(t,"height",e.height)}function Cf(t){oe(t,"position",""),oe(t,"top",""),oe(t,"left",""),oe(t,"width",""),oe(t,"height","")}var rn="Sortable"+new Date().getTime();function y$(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(i){if(!(oe(i,"display")==="none"||i===ve.ghost)){t.push({target:i,rect:gt(i)});var s=wr({},t[t.length-1].rect);if(i.thisAnimationDuration){var o=es(i,!0);o&&(s.top-=o.f,s.left-=o.e)}i.fromRect=s}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(g$(t,{target:r}),1)},animateAll:function(r){var i=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var s=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,h=gt(c),f=c.prevFromRect,d=c.prevToRect,p=a.rect,m=es(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&If(f,h)&&!If(u,h)&&(p.top-h.top)/(p.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(l=_$(p,f,d,i.options)),If(h,u)||(c.prevFromRect=u,c.prevToRect=h,l||(l=i.options.animation),i.animate(c,p,h,l)),l&&(s=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),s?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,i,s,o){if(o){oe(r,"transition",""),oe(r,"transform","");var a=es(this.el),l=a&&a.a,c=a&&a.d,u=(i.left-s.left)/(l||1),h=(i.top-s.top)/(c||1);r.animatingX=!!u,r.animatingY=!!h,oe(r,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=E$(r),oe(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),oe(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){oe(r,"transition",""),oe(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function E$(t){return t.offsetWidth}function _$(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var Rs=[],Af={initializeByDefault:!0},kl={mount:function(e){for(var n in Af)Af.hasOwnProperty(n)&&!(n in e)&&(e[n]=Af[n]);Rs.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Rs.push(e)},pluginEvent:function(e,n,r){var i=this;this.eventCanceled=!1,r.cancel=function(){i.eventCanceled=!0};var s=e+"Global";Rs.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][s]&&n[o.pluginName][s](wr({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](wr({sortable:n},r)))})},initializePlugins:function(e,n,r,i){Rs.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,Hn(r,c.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var o=this.modifyOption(e,s,e.options[s]);typeof o<"u"&&(e.options[s]=o)}},getEventProperties:function(e,n){var r={};return Rs.forEach(function(i){typeof i.eventProperties=="function"&&Hn(r,i.eventProperties.call(n[i.pluginName],e))}),r},modifyOption:function(e,n,r){var i;return Rs.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[n]=="function"&&(i=s.optionListeners[n].call(e[s.pluginName],r))}),i}};function ra(t){var e=t.sortable,n=t.rootEl,r=t.name,i=t.targetEl,s=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,h=t.newDraggableIndex,f=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[rn],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!Gr&&!Dl?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=i||n,m.clone=s,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=d?d.lastPutMode:void 0;var g=wr(wr({},p),kl.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var w$=["evt"],yn=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.evt,s=o$(r,w$);kl.pluginEvent.bind(ve)(e,n,wr({dragEl:X,parentEl:bt,ghostEl:xe,rootEl:pt,nextEl:$i,lastDownEl:Ic,cloneEl:Tt,cloneHidden:ai,dragStarted:ia,putSortable:Ht,activeSortable:ve.active,originalEvent:i,oldIndex:Bs,oldDraggableIndex:xa,newIndex:xn,newDraggableIndex:ni,hideGhostForTarget:uI,unhideGhostForTarget:hI,cloneNowHidden:function(){ai=!0},cloneNowShown:function(){ai=!1},dispatchSortableEvent:function(a){dn({sortable:n,name:a,originalEvent:i})}},s))};function dn(t){ra(wr({putSortable:Ht,cloneEl:Tt,targetEl:X,rootEl:pt,oldIndex:Bs,oldDraggableIndex:xa,newIndex:xn,newDraggableIndex:ni},t))}var X,bt,xe,pt,$i,Ic,Tt,ai,Bs,xn,xa,ni,cc,Ht,Ms=!1,Su=!1,Iu=[],ki,Kn,Rf,xf,FE,UE,ia,xs,Oa,Na=!1,uc=!1,Cc,Jt,Of=[],ip=!1,Cu=[],kh=typeof document<"u",hc=nI,$E=Dl||Gr?"cssFloat":"float",b$=kh&&!d$&&!nI&&"draggable"in document.createElement("div"),aI=function(){if(kh){if(Gr)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),lI=function(e,n){var r=oe(e),i=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),s=_o(e,0,n),o=_o(e,1,n),a=s&&oe(s),l=o&&oe(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+gt(s).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+gt(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return s&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=i&&r[$E]==="none"||o&&r[$E]==="none"&&c+u>i)?"vertical":"horizontal"},T$=function(e,n,r){var i=r?e.left:e.top,s=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return i===a||s===l||i+o/2===a+c/2},S$=function(e,n){var r;return Iu.some(function(i){var s=i[rn].options.emptyInsertThreshold;if(!(!s||pm(i))){var o=gt(i),a=e>=o.left-s&&e<=o.right+s,l=n>=o.top-s&&n<=o.bottom+s;if(a&&l)return r=i}}),r},cI=function(e){function n(s,o){return function(a,l,c,u){var h=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(s==null&&(o||h))return!0;if(s==null||s===!1)return!1;if(o&&s==="clone")return s;if(typeof s=="function")return n(s(a,l,c,u),o)(a,l,c,u);var f=(o?a:l).options.group.name;return s===!0||typeof s=="string"&&s===f||s.join&&s.indexOf(f)>-1}}var r={},i=e.group;(!i||Sc(i)!="object")&&(i={name:i}),r.name=i.name,r.checkPull=n(i.pull,!0),r.checkPut=n(i.put),r.revertClone=i.revertClone,e.group=r},uI=function(){!aI&&xe&&oe(xe,"display","none")},hI=function(){!aI&&xe&&oe(xe,"display","")};kh&&document.addEventListener("click",function(t){if(Su)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Su=!1,!1},!0);var Mi=function(e){if(X){e=e.touches?e.touches[0]:e;var n=S$(e.clientX,e.clientY);if(n){var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[rn]._onDragOver(r)}}},I$=function(e){X&&X.parentNode[rn]._isOutsideThisEl(e.target)};function ve(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=Hn({},e),t[rn]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return lI(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:ve.supportPointer!==!1&&"PointerEvent"in window&&!Aa,emptyInsertThreshold:5};kl.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);cI(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:b$,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Le(t,"pointerdown",this._onTapStart):(Le(t,"mousedown",this._onTapStart),Le(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(Le(t,"dragover",this),Le(t,"dragenter",this)),Iu.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Hn(this,y$())}ve.prototype={constructor:ve,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(xs=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,X):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,i=this.options,s=i.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=i.filter;if(D$(r),!X&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||i.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Aa&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=Gn(l,i.draggable,r,!1),!(l&&l.animated)&&Ic!==l)){if(Bs=St(l),xa=St(l,i.draggable),typeof u=="function"){if(u.call(this,e,l,this)){dn({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),yn("filter",n,{evt:e}),s&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=Gn(c,h.trim(),r,!1),h)return dn({sortable:n,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),yn("filter",n,{evt:e}),!0}),u)){s&&e.cancelable&&e.preventDefault();return}i.handle&&!Gn(c,i.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var i=this,s=i.el,o=i.options,a=s.ownerDocument,l;if(r&&!X&&r.parentNode===s){var c=gt(r);if(pt=s,X=r,bt=X.parentNode,$i=X.nextSibling,Ic=r,cc=o.group,ve.dragged=X,ki={target:X,clientX:(n||e).clientX,clientY:(n||e).clientY},FE=ki.clientX-c.left,UE=ki.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,X.style["will-change"]="all",l=function(){if(yn("delayEnded",i,{evt:e}),ve.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!PE&&i.nativeDraggable&&(X.draggable=!0),i._triggerDragStart(e,n),dn({sortable:i,name:"choose",originalEvent:e}),_t(X,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){iI(X,u.trim(),Nf)}),Le(a,"dragover",Mi),Le(a,"mousemove",Mi),Le(a,"touchmove",Mi),Le(a,"mouseup",i._onDrop),Le(a,"touchend",i._onDrop),Le(a,"touchcancel",i._onDrop),PE&&this.nativeDraggable&&(this.options.touchStartThreshold=4,X.draggable=!0),yn("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Dl||Gr))){if(ve.eventCanceled){this._onDrop();return}Le(a,"mouseup",i._disableDelayedDrag),Le(a,"touchend",i._disableDelayedDrag),Le(a,"touchcancel",i._disableDelayedDrag),Le(a,"mousemove",i._delayedDragTouchMoveHandler),Le(a,"touchmove",i._delayedDragTouchMoveHandler),o.supportPointer&&Le(a,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){X&&Nf(X),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Pe(e,"mouseup",this._disableDelayedDrag),Pe(e,"touchend",this._disableDelayedDrag),Pe(e,"touchcancel",this._disableDelayedDrag),Pe(e,"mousemove",this._delayedDragTouchMoveHandler),Pe(e,"touchmove",this._delayedDragTouchMoveHandler),Pe(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?Le(document,"pointermove",this._onTouchMove):n?Le(document,"touchmove",this._onTouchMove):Le(document,"mousemove",this._onTouchMove):(Le(X,"dragend",this),Le(pt,"dragstart",this._onDragStart));try{document.selection?Ac(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(Ms=!1,pt&&X){yn("dragStarted",this,{evt:n}),this.nativeDraggable&&Le(document,"dragover",I$);var r=this.options;!e&&_t(X,r.dragClass,!1),_t(X,r.ghostClass,!0),ve.active=this,e&&this._appendGhost(),dn({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(Kn){this._lastX=Kn.clientX,this._lastY=Kn.clientY,uI();for(var e=document.elementFromPoint(Kn.clientX,Kn.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Kn.clientX,Kn.clientY),e!==n);)n=e;if(X.parentNode[rn]._isOutsideThisEl(e),n)do{if(n[rn]){var r=void 0;if(r=n[rn]._onDragOver({clientX:Kn.clientX,clientY:Kn.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);hI()}},_onTouchMove:function(e){if(ki){var n=this.options,r=n.fallbackTolerance,i=n.fallbackOffset,s=e.touches?e.touches[0]:e,o=xe&&es(xe,!0),a=xe&&o&&o.a,l=xe&&o&&o.d,c=hc&&Jt&&ME(Jt),u=(s.clientX-ki.clientX+i.x)/(a||1)+(c?c[0]-Of[0]:0)/(a||1),h=(s.clientY-ki.clientY+i.y)/(l||1)+(c?c[1]-Of[1]:0)/(l||1);if(!ve.active&&!Ms){if(r&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(xe){o?(o.e+=u-(Rf||0),o.f+=h-(xf||0)):o={a:1,b:0,c:0,d:1,e:u,f:h};var f="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");oe(xe,"webkitTransform",f),oe(xe,"mozTransform",f),oe(xe,"msTransform",f),oe(xe,"transform",f),Rf=u,xf=h,Kn=s}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!xe){var e=this.options.fallbackOnBody?document.body:pt,n=gt(X,!0,hc,!0,e),r=this.options;if(hc){for(Jt=e;oe(Jt,"position")==="static"&&oe(Jt,"transform")==="none"&&Jt!==document;)Jt=Jt.parentNode;Jt!==document.body&&Jt!==document.documentElement?(Jt===document&&(Jt=pr()),n.top+=Jt.scrollTop,n.left+=Jt.scrollLeft):Jt=pr(),Of=ME(Jt)}xe=X.cloneNode(!0),_t(xe,r.ghostClass,!1),_t(xe,r.fallbackClass,!0),_t(xe,r.dragClass,!0),oe(xe,"transition",""),oe(xe,"transform",""),oe(xe,"box-sizing","border-box"),oe(xe,"margin",0),oe(xe,"top",n.top),oe(xe,"left",n.left),oe(xe,"width",n.width),oe(xe,"height",n.height),oe(xe,"opacity","0.8"),oe(xe,"position",hc?"absolute":"fixed"),oe(xe,"zIndex","100000"),oe(xe,"pointerEvents","none"),ve.ghost=xe,e.appendChild(xe),oe(xe,"transform-origin",FE/parseInt(xe.style.width)*100+"% "+UE/parseInt(xe.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,i=e.dataTransfer,s=r.options;if(yn("dragStart",this,{evt:e}),ve.eventCanceled){this._onDrop();return}yn("setupClone",this),ve.eventCanceled||(Tt=gm(X),Tt.draggable=!1,Tt.style["will-change"]="",this._hideClone(),_t(Tt,this.options.chosenClass,!1),ve.clone=Tt),r.cloneId=Ac(function(){yn("clone",r),!ve.eventCanceled&&(r.options.removeCloneOnHide||pt.insertBefore(Tt,X),r._hideClone(),dn({sortable:r,name:"clone"}))}),!n&&_t(X,s.dragClass,!0),n?(Su=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Pe(document,"mouseup",r._onDrop),Pe(document,"touchend",r._onDrop),Pe(document,"touchcancel",r._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(r,i,X)),Le(document,"drop",r),oe(X,"transform","translateZ(0)")),Ms=!0,r._dragStartId=Ac(r._dragStarted.bind(r,n,e)),Le(document,"selectstart",r),ia=!0,Aa&&oe(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,i,s,o,a=this.options,l=a.group,c=ve.active,u=cc===l,h=a.sort,f=Ht||c,d,p=this,m=!1;if(ip)return;function y(se,Me){yn(se,p,wr({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:i,targetRect:s,canSort:h,fromSortable:f,target:r,completed:g,onMove:function(Be,De){return fc(pt,n,X,i,Be,gt(Be),e,De)},changed:E},Me))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function g(se){return y("dragOverCompleted",{insertion:se}),se&&(u?c._hideClone():c._showClone(p),p!==f&&(_t(X,Ht?Ht.options.ghostClass:c.options.ghostClass,!1),_t(X,a.ghostClass,!0)),Ht!==p&&p!==ve.active?Ht=p:p===ve.active&&Ht&&(Ht=null),f===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(r===X&&!X.animated||r===n&&!r.animated)&&(xs=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(X.parentNode[rn]._isOutsideThisEl(e.target),!se&&Mi(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){xn=St(X),ni=St(X,a.draggable),dn({sortable:p,name:"change",toEl:n,newIndex:xn,newDraggableIndex:ni,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=Gn(r,a.draggable,n,!0),y("dragOver"),ve.eventCanceled)return m;if(X.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(Su=!1,c&&!a.disabled&&(u?h||(o=bt!==pt):Ht===this||(this.lastPutMode=cc.checkPull(this,c,X,e))&&l.checkPut(this,c,X,e))){if(d=this._getDirection(e,r)==="vertical",i=gt(X),y("dragOverValid"),ve.eventCanceled)return m;if(o)return bt=pt,v(),this._hideClone(),y("revert"),ve.eventCanceled||($i?pt.insertBefore(X,$i):pt.appendChild(X)),g(!0);var w=pm(n,a.draggable);if(!w||x$(e,d,this)&&!w.animated){if(w===X)return g(!1);if(w&&n===e.target&&(r=w),r&&(s=gt(r)),fc(pt,n,X,i,r,s,e,!!r)!==!1)return v(),n.appendChild(X),bt=n,E(),g(!0)}else if(w&&R$(e,d,this)){var T=_o(n,0,a,!0);if(T===X)return g(!1);if(r=T,s=gt(r),fc(pt,n,X,i,r,s,e,!1)!==!1)return v(),n.insertBefore(X,T),bt=n,E(),g(!0)}else if(r.parentNode===n){s=gt(r);var S=0,x,I=X.parentNode!==n,C=!T$(X.animated&&X.toRect||i,r.animated&&r.toRect||s,d),P=d?"top":"left",L=kE(r,"top","top")||kE(X,"top","top"),U=L?L.scrollTop:void 0;xs!==r&&(x=s[P],Na=!1,uc=!C&&a.invertSwap||I),S=O$(e,r,s,d,C?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,uc,xs===r);var k;if(S!==0){var O=St(X);do O-=S,k=bt.children[O];while(k&&(oe(k,"display")==="none"||k===xe))}if(S===0||k===r)return g(!1);xs=r,Oa=S;var J=r.nextElementSibling,B=!1;B=S===1;var Q=fc(pt,n,X,i,r,s,e,B);if(Q!==!1)return(Q===1||Q===-1)&&(B=Q===1),ip=!0,setTimeout(A$,30),v(),B&&!J?n.appendChild(X):r.parentNode.insertBefore(X,B?J:r),L&&oI(L,0,U-L.scrollTop),bt=X.parentNode,x!==void 0&&!uc&&(Cc=Math.abs(x-gt(r)[P])),E(),g(!0)}if(n.contains(X))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Pe(document,"mousemove",this._onTouchMove),Pe(document,"touchmove",this._onTouchMove),Pe(document,"pointermove",this._onTouchMove),Pe(document,"dragover",Mi),Pe(document,"mousemove",Mi),Pe(document,"touchmove",Mi)},_offUpEvents:function(){var e=this.el.ownerDocument;Pe(e,"mouseup",this._onDrop),Pe(e,"touchend",this._onDrop),Pe(e,"pointerup",this._onDrop),Pe(e,"touchcancel",this._onDrop),Pe(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(xn=St(X),ni=St(X,r.draggable),yn("drop",this,{evt:e}),bt=X&&X.parentNode,xn=St(X),ni=St(X,r.draggable),ve.eventCanceled){this._nulling();return}Ms=!1,uc=!1,Na=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),sp(this.cloneId),sp(this._dragStartId),this.nativeDraggable&&(Pe(document,"drop",this),Pe(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Aa&&oe(document.body,"user-select",""),oe(X,"transform",""),e&&(ia&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),xe&&xe.parentNode&&xe.parentNode.removeChild(xe),(pt===bt||Ht&&Ht.lastPutMode!=="clone")&&Tt&&Tt.parentNode&&Tt.parentNode.removeChild(Tt),X&&(this.nativeDraggable&&Pe(X,"dragend",this),Nf(X),X.style["will-change"]="",ia&&!Ms&&_t(X,Ht?Ht.options.ghostClass:this.options.ghostClass,!1),_t(X,this.options.chosenClass,!1),dn({sortable:this,name:"unchoose",toEl:bt,newIndex:null,newDraggableIndex:null,originalEvent:e}),pt!==bt?(xn>=0&&(dn({rootEl:bt,name:"add",toEl:bt,fromEl:pt,originalEvent:e}),dn({sortable:this,name:"remove",toEl:bt,originalEvent:e}),dn({rootEl:bt,name:"sort",toEl:bt,fromEl:pt,originalEvent:e}),dn({sortable:this,name:"sort",toEl:bt,originalEvent:e})),Ht&&Ht.save()):xn!==Bs&&xn>=0&&(dn({sortable:this,name:"update",toEl:bt,originalEvent:e}),dn({sortable:this,name:"sort",toEl:bt,originalEvent:e})),ve.active&&((xn==null||xn===-1)&&(xn=Bs,ni=xa),dn({sortable:this,name:"end",toEl:bt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){yn("nulling",this),pt=X=bt=xe=$i=Tt=Ic=ai=ki=Kn=ia=xn=ni=Bs=xa=xs=Oa=Ht=cc=ve.dragged=ve.ghost=ve.clone=ve.active=null,Cu.forEach(function(e){e.checked=!0}),Cu.length=Rf=xf=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":X&&(this._onDragOver(e),C$(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,i=0,s=r.length,o=this.options;i<s;i++)n=r[i],Gn(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||P$(n));return e},sort:function(e,n){var r={},i=this.el;this.toArray().forEach(function(s,o){var a=i.children[o];Gn(a,this.options.draggable,i,!1)&&(r[s]=a)},this),n&&this.captureAnimationState(),e.forEach(function(s){r[s]&&(i.removeChild(r[s]),i.appendChild(r[s]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return Gn(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var i=kl.modifyOption(this,e,n);typeof i<"u"?r[e]=i:r[e]=n,e==="group"&&cI(r)},destroy:function(){yn("destroy",this);var e=this.el;e[rn]=null,Pe(e,"mousedown",this._onTapStart),Pe(e,"touchstart",this._onTapStart),Pe(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Pe(e,"dragover",this),Pe(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Iu.splice(Iu.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ai){if(yn("hideClone",this),ve.eventCanceled)return;oe(Tt,"display","none"),this.options.removeCloneOnHide&&Tt.parentNode&&Tt.parentNode.removeChild(Tt),ai=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ai){if(yn("showClone",this),ve.eventCanceled)return;X.parentNode==pt&&!this.options.group.revertClone?pt.insertBefore(Tt,X):$i?pt.insertBefore(Tt,$i):pt.appendChild(Tt),this.options.group.revertClone&&this.animate(X,Tt),oe(Tt,"display",""),ai=!1}}};function C$(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function fc(t,e,n,r,i,s,o,a){var l,c=t[rn],u=c.options.onMove,h;return window.CustomEvent&&!Gr&&!Dl?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=i||e,l.relatedRect=s||gt(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(h=u.call(c,l,o)),h}function Nf(t){t.draggable=!1}function A$(){ip=!1}function R$(t,e,n){var r=gt(_o(n.el,0,n.options,!0)),i=10;return e?t.clientX<r.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-i||t.clientY<r.bottom&&t.clientX<r.left}function x$(t,e,n){var r=gt(pm(n.el,n.options.draggable)),i=10;return e?t.clientX>r.right+i||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+i}function O$(t,e,n,r,i,s,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,h=r?n.bottom:n.right,f=!1;if(!o){if(a&&Cc<c*i){if(!Na&&(Oa===1?l>u+c*s/2:l<h-c*s/2)&&(Na=!0),Na)f=!0;else if(Oa===1?l<u+Cc:l>h-Cc)return-Oa}else if(l>u+c*(1-i)/2&&l<h-c*(1-i)/2)return N$(e)}return f=f||o,f&&(l<u+c*s/2||l>h-c*s/2)?l>u+c/2?1:-1:0}function N$(t){return St(X)<St(t)?1:-1}function P$(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function D$(t){Cu.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&Cu.push(r)}}function Ac(t){return setTimeout(t,0)}function sp(t){return clearTimeout(t)}kh&&Le(document,"touchmove",function(t){(ve.active||Ms)&&t.cancelable&&t.preventDefault()});ve.utils={on:Le,off:Pe,css:oe,find:iI,is:function(e,n){return!!Gn(e,n,e,!1)},extend:m$,throttle:sI,closest:Gn,toggleClass:_t,clone:gm,index:St,nextTick:Ac,cancelNextTick:sp,detectDirection:lI,getChild:_o};ve.get=function(t){return t[rn]};ve.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(ve.utils=wr(wr({},ve.utils),r.utils)),kl.mount(r)})};ve.create=function(t,e){return new ve(t,e)};ve.version=f$;var Nt=[],sa,op,ap=!1,Pf,Df,Au,oa;function k$(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?Le(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Le(document,"pointermove",this._handleFallbackAutoScroll):r.touches?Le(document,"touchmove",this._handleFallbackAutoScroll):Le(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Pe(document,"dragover",this._handleAutoScroll):(Pe(document,"pointermove",this._handleFallbackAutoScroll),Pe(document,"touchmove",this._handleFallbackAutoScroll),Pe(document,"mousemove",this._handleFallbackAutoScroll)),BE(),Rc(),v$()},nulling:function(){Au=op=sa=ap=oa=Pf=Df=null,Nt.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var i=this,s=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(s,o);if(Au=n,r||this.options.forceAutoScrollFallback||Dl||Gr||Aa){kf(n,this.options,a,r);var l=ui(a,!0);ap&&(!oa||s!==Pf||o!==Df)&&(oa&&BE(),oa=setInterval(function(){var c=ui(document.elementFromPoint(s,o),!0);c!==l&&(l=c,Rc()),kf(n,i.options,c,r)},10),Pf=s,Df=o)}else{if(!this.options.bubbleScroll||ui(a,!0)===pr()){Rc();return}kf(n,this.options,ui(a,!1),!1)}}},Hn(t,{pluginName:"scroll",initializeByDefault:!0})}function Rc(){Nt.forEach(function(t){clearInterval(t.pid)}),Nt=[]}function BE(){clearInterval(oa)}var kf=sI(function(t,e,n,r){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=pr(),c=!1,u;op!==n&&(op=n,Rc(),sa=e.scroll,u=e.scrollFn,sa===!0&&(sa=ui(n,!0)));var h=0,f=sa;do{var d=f,p=gt(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,w=p.height,T=void 0,S=void 0,x=d.scrollWidth,I=d.scrollHeight,C=oe(d),P=d.scrollLeft,L=d.scrollTop;d===l?(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"||C.overflowX==="visible"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"||C.overflowY==="visible")):(T=E<x&&(C.overflowX==="auto"||C.overflowX==="scroll"),S=w<I&&(C.overflowY==="auto"||C.overflowY==="scroll"));var U=T&&(Math.abs(g-i)<=o&&P+E<x)-(Math.abs(v-i)<=o&&!!P),k=S&&(Math.abs(y-s)<=o&&L+w<I)-(Math.abs(m-s)<=o&&!!L);if(!Nt[h])for(var O=0;O<=h;O++)Nt[O]||(Nt[O]={});(Nt[h].vx!=U||Nt[h].vy!=k||Nt[h].el!==d)&&(Nt[h].el=d,Nt[h].vx=U,Nt[h].vy=k,clearInterval(Nt[h].pid),(U!=0||k!=0)&&(c=!0,Nt[h].pid=setInterval(function(){r&&this.layer===0&&ve.active._onTouchMove(Au);var J=Nt[this.layer].vy?Nt[this.layer].vy*a:0,B=Nt[this.layer].vx?Nt[this.layer].vx*a:0;typeof u=="function"&&u.call(ve.dragged.parentNode[rn],B,J,t,Au,Nt[this.layer].el)!=="continue"||oI(Nt[this.layer].el,B,J)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==l&&(f=ui(f,!1)));ap=c}},30),fI=function(e){var n=e.originalEvent,r=e.putSortable,i=e.dragEl,s=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||s;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,h=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(h)&&(o("spill"),this.onSpill({dragEl:i,putSortable:r}))}};function mm(){}mm.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var i=_o(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:fI};Hn(mm,{pluginName:"revertOnSpill"});function vm(){}vm.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,i=r||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop:fI};Hn(vm,{pluginName:"removeOnSpill"});var Fn;function M$(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;Fn=r},dragOverValid:function(n){var r=n.completed,i=n.target,s=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(i&&i!==c){var h=Fn;s(i)!==!1?(_t(i,u.swapClass,!0),Fn=i):Fn=null,h&&h!==Fn&&_t(h,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,i=n.putSortable,s=n.dragEl,o=i||this.sortable,a=this.options;Fn&&_t(Fn,a.swapClass,!1),Fn&&(a.swap||i&&i.options.swap)&&s!==Fn&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),L$(s,Fn),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){Fn=null}},Hn(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Fn}}})}function L$(t,e){var n=t.parentNode,r=e.parentNode,i,s;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(i=St(t),s=St(e),n.isEqualNode(r)&&i<s&&s++,n.insertBefore(e,n.children[i]),r.insertBefore(t,r.children[s]))}var Ie=[],Rn=[],Go,Wn,zo=!1,En=!1,Os=!1,lt,Yo,dc;function F$(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?Le(document,"pointerup",this._deselectMultiDrag):(Le(document,"mouseup",this._deselectMultiDrag),Le(document,"touchend",this._deselectMultiDrag)),Le(document,"keydown",this._checkKeyDown),Le(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(i,s){var o="";Ie.length&&Wn===e?Ie.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=s.textContent,i.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;lt=r},delayEnded:function(){this.isMultiDrag=~Ie.indexOf(lt)},setupClone:function(n){var r=n.sortable,i=n.cancel;if(this.isMultiDrag){for(var s=0;s<Ie.length;s++)Rn.push(gm(Ie[s])),Rn[s].sortableIndex=Ie[s].sortableIndex,Rn[s].draggable=!1,Rn[s].style["will-change"]="",_t(Rn[s],this.options.selectedClass,!1),Ie[s]===lt&&_t(Rn[s],this.options.chosenClass,!1);r._hideClone(),i()}},clone:function(n){var r=n.sortable,i=n.rootEl,s=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Ie.length&&Wn===r&&(jE(!0,i),s("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,i=n.rootEl,s=n.cancel;this.isMultiDrag&&(jE(!1,i),Rn.forEach(function(o){oe(o,"display","")}),r(),dc=!1,s())},hideClone:function(n){var r=this;n.sortable;var i=n.cloneNowHidden,s=n.cancel;this.isMultiDrag&&(Rn.forEach(function(o){oe(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),i(),dc=!0,s())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&Wn&&Wn.multiDrag._deselectMultiDrag(),Ie.forEach(function(r){r.sortableIndex=St(r)}),Ie=Ie.sort(function(r,i){return r.sortableIndex-i.sortableIndex}),Os=!0},dragStarted:function(n){var r=this,i=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(i.captureAnimationState(),this.options.animation)){Ie.forEach(function(o){o!==lt&&oe(o,"position","absolute")});var s=gt(lt,!1,!0,!0);Ie.forEach(function(o){o!==lt&&LE(o,s)}),En=!0,zo=!0}i.animateAll(function(){En=!1,zo=!1,r.options.animation&&Ie.forEach(function(o){Cf(o)}),r.options.sort&&pc()})}},dragOver:function(n){var r=n.target,i=n.completed,s=n.cancel;En&&~Ie.indexOf(r)&&(i(!1),s())},revert:function(n){var r=n.fromSortable,i=n.rootEl,s=n.sortable,o=n.dragRect;Ie.length>1&&(Ie.forEach(function(a){s.addAnimationState({target:a,rect:En?gt(a):o}),Cf(a),a.fromRect=o,r.removeAnimationState(a)}),En=!1,U$(!this.options.removeCloneOnHide,i))},dragOverCompleted:function(n){var r=n.sortable,i=n.isOwner,s=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(s){if(i&&o._hideClone(),zo=!1,c.animation&&Ie.length>1&&(En||!i&&!o.options.sort&&!l)){var u=gt(lt,!1,!0,!0);Ie.forEach(function(f){f!==lt&&(LE(f,u),a.appendChild(f))}),En=!0}if(!i)if(En||pc(),Ie.length>1){var h=dc;o._showClone(r),o.options.animation&&!dc&&h&&Rn.forEach(function(f){o.addAnimationState({target:f,rect:Yo}),f.fromRect=Yo,f.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,i=n.isOwner,s=n.activeSortable;if(Ie.forEach(function(a){a.thisAnimationDuration=null}),s.options.animation&&!i&&s.multiDrag.isMultiDrag){Yo=Hn({},r);var o=es(lt,!0);Yo.top-=o.f,Yo.left-=o.e}},dragOverAnimationComplete:function(){En&&(En=!1,pc())},drop:function(n){var r=n.originalEvent,i=n.rootEl,s=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var h=this.options,f=s.children;if(!Os)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),_t(lt,h.selectedClass,!~Ie.indexOf(lt)),~Ie.indexOf(lt))Ie.splice(Ie.indexOf(lt),1),Go=null,ra({sortable:o,rootEl:i,name:"deselect",targetEl:lt,originalEvt:r});else{if(Ie.push(lt),ra({sortable:o,rootEl:i,name:"select",targetEl:lt,originalEvt:r}),r.shiftKey&&Go&&o.el.contains(Go)){var d=St(Go),p=St(lt);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~Ie.indexOf(f[y])||(_t(f[y],h.selectedClass,!0),Ie.push(f[y]),ra({sortable:o,rootEl:i,name:"select",targetEl:f[y],originalEvt:r}))}}else Go=lt;Wn=u}if(Os&&this.isMultiDrag){if(En=!1,(s[rn].options.sort||s!==i)&&Ie.length>1){var v=gt(lt),g=St(lt,":not(."+this.options.selectedClass+")");if(!zo&&h.animation&&(lt.thisAnimationDuration=null),u.captureAnimationState(),!zo&&(h.animation&&(lt.fromRect=v,Ie.forEach(function(w){if(w.thisAnimationDuration=null,w!==lt){var T=En?gt(w):v;w.fromRect=T,u.addAnimationState({target:w,rect:T})}})),pc(),Ie.forEach(function(w){f[g]?s.insertBefore(w,f[g]):s.appendChild(w),g++}),l===St(lt))){var E=!1;Ie.forEach(function(w){if(w.sortableIndex!==St(w)){E=!0;return}}),E&&a("update")}Ie.forEach(function(w){Cf(w)}),u.animateAll()}Wn=u}(i===s||c&&c.lastPutMode!=="clone")&&Rn.forEach(function(w){w.parentNode&&w.parentNode.removeChild(w)})}},nullingGlobal:function(){this.isMultiDrag=Os=!1,Rn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Pe(document,"pointerup",this._deselectMultiDrag),Pe(document,"mouseup",this._deselectMultiDrag),Pe(document,"touchend",this._deselectMultiDrag),Pe(document,"keydown",this._checkKeyDown),Pe(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof Os<"u"&&Os)&&Wn===this.sortable&&!(n&&Gn(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;Ie.length;){var r=Ie[0];_t(r,this.options.selectedClass,!1),Ie.shift(),ra({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Hn(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[rn];!r||!r.options.multiDrag||~Ie.indexOf(n)||(Wn&&Wn!==r&&(Wn.multiDrag._deselectMultiDrag(),Wn=r),_t(n,r.options.selectedClass,!0),Ie.push(n))},deselect:function(n){var r=n.parentNode[rn],i=Ie.indexOf(n);!r||!r.options.multiDrag||!~i||(_t(n,r.options.selectedClass,!1),Ie.splice(i,1))}},eventProperties:function(){var n=this,r=[],i=[];return Ie.forEach(function(s){r.push({multiDragElement:s,index:s.sortableIndex});var o;En&&s!==lt?o=-1:En?o=St(s,":not(."+n.options.selectedClass+")"):o=St(s),i.push({multiDragElement:s,index:o})}),{items:a$(Ie),clones:[].concat(Rn),oldIndicies:r,newIndicies:i}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function U$(t,e){Ie.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function jE(t,e){Rn.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function pc(){Ie.forEach(function(t){t!==lt&&t.parentNode&&t.parentNode.removeChild(t)})}ve.mount(new k$);ve.mount(vm,mm);const $$=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:F$,Sortable:ve,Swap:M$,default:ve},Symbol.toStringTag,{value:"Module"})),B$=eI($$);(function(t,e){(function(r,i){t.exports=i(Lo,B$)})(typeof self<"u"?self:r4,function(n,r){return function(i){var s={};function o(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return i[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=i,o.c=s,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(h){return a[h]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(i,s,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",i.exports=String(c)==="[object z]"},"0366":function(i,s,o){var a=o("1c0b");i.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(h){return l.call(c,h)};case 2:return function(h,f){return l.call(c,h,f)};case 3:return function(h,f,d){return l.call(c,h,f,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(i,s,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],h=function(f){try{return l(f)}catch{return u.slice()}};i.exports.f=function(d){return u&&c.call(d)=="[object Window]"?h(d):l(a(d))}},"06cf":function(i,s,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),h=o("c04e"),f=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;s.f=a?p:function(y,v){if(y=u(y),v=h(v,!0),d)try{return p(y,v)}catch{}if(f(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("cc12");i.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(i,s,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),h=c("reduce"),f=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!h||!f},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(i,s,o){var a=o("c6b6"),l=o("9263");i.exports=function(c,u){var h=c.exec;if(typeof h=="function"){var f=h.call(c,u);if(typeof f!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return f}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var h in l){var f=a[h],d=f&&f.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(i,s,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),h=c("forEach");i.exports=!u||!h?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(i,s,o){var a=o("d066");i.exports=a("document","documentElement")},"1c0b":function(i,s){i.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(i,s,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,h={next:function(){return{done:!!u++}},return:function(){c=!0}};h[l]=function(){return this},Array.from(h,function(){throw 2})}catch{}i.exports=function(f,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},f(m)}catch{}return p}},"1d80":function(i,s){i.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(i,s,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");i.exports=function(h){return c>=51||!a(function(){var f=[],d=f.constructor={};return d[u]=function(){return{foo:1}},f[h](Boolean).foo!==1})}},"23cb":function(i,s,o){var a=o("a691"),l=Math.max,c=Math.min;i.exports=function(u,h){var f=a(u);return f<0?l(f+h,0):c(f,h)}},"23e7":function(i,s,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),h=o("ce4e"),f=o("e893"),d=o("94ca");i.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,w,T,S,x,I;if(v?w=a:g?w=a[y]||h(y,{}):w=(a[y]||{}).prototype,w)for(T in m){if(x=m[T],p.noTargetGet?(I=l(w,T),S=I&&I.value):S=w[T],E=d(v?T:y+(g?".":"#")+T,p.forced),!E&&S!==void 0){if(typeof x==typeof S)continue;f(x,S)}(p.sham||S&&S.sham)&&c(x,"sham",!0),u(w,T,x,p)}}},"241c":function(i,s,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");s.f=Object.getOwnPropertyNames||function(h){return a(h,c)}},"25f0":function(i,s,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),h="toString",f=RegExp.prototype,d=f[h],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=h;(p||m)&&a(RegExp.prototype,h,function(){var v=l(this),g=String(v.source),E=v.flags,w=String(E===void 0&&v instanceof RegExp&&!("flags"in f)?u.call(v):E);return"/"+g+"/"+w},{unsafe:!0})},"2ca0":function(i,s,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),h=o("1d80"),f=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=f("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var w=String(h(this));u(E);var T=c(m(arguments.length>1?arguments[1]:void 0,w.length)),S=String(E);return p?p.call(w,S,T):w.slice(T,T+S.length)===S}})},"2d00":function(i,s,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,h=u&&u.v8,f,d;h?(f=h.split("."),d=f[0]+f[1]):l&&(f=l.match(/Edge\/(\d+)/),(!f||f[1]>=74)&&(f=l.match(/Chrome\/(\d+)/),f&&(d=f[1]))),i.exports=d&&+d},"342f":function(i,s,o){var a=o("d066");i.exports=a("navigator","userAgent")||""},"35a1":function(i,s,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");i.exports=function(h){if(h!=null)return h[u]||h["@@iterator"]||l[a(h)]}},"37e8":function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");i.exports=a?Object.defineProperties:function(f,d){c(f);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(f,v=p[y++],d[v]);return f}},"3bbe":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(i,s,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",h=l.set,f=l.getterFor(u);c(String,"String",function(d){h(this,{type:u,string:String(d),index:0})},function(){var p=f(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(i,s){i.exports={}},4160:function(i,s,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(i,s,o){var a=o("da84");i.exports=a},"44ad":function(i,s,o){var a=o("d039"),l=o("c6b6"),c="".split;i.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(i,s,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),h=Array.prototype;h[u]==null&&c.f(h,u,{configurable:!0,value:l(null)}),i.exports=function(f){h[u][f]=!0}},"44e7":function(i,s,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");i.exports=function(h){var f;return a(h)&&((f=h[u])!==void 0?!!f:l(h)=="RegExp")}},4930:function(i,s,o){var a=o("d039");i.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(i,s,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(h){return function(f,d,p){var m=a(f),y=l(m.length),v=c(p,y),g;if(h&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((h||v in m)&&m[v]===d)return h||v||0;return!h&&-1}};i.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(i,s,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),h=c("filter"),f=u("filter");a({target:"Array",proto:!0,forced:!h||!f},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(i,s,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),h=o("50c4"),f=o("8418"),d=o("35a1");i.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,w=E!==void 0,T=d(y),S=0,x,I,C,P,L,U;if(w&&(E=a(E,g>2?arguments[2]:void 0,2)),T!=null&&!(v==Array&&u(T)))for(P=T.call(y),L=P.next,I=new v;!(C=L.call(P)).done;S++)U=w?c(P,E,[C.value,S],!0):C.value,f(I,S,U);else for(x=h(y.length),I=new v(x);x>S;S++)U=w?E(y[S],S):y[S],f(I,S,U);return I.length=S,I}},"4fad":function(i,s,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(i,s,o){var a=o("a691"),l=Math.min;i.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(i,s){var o={}.hasOwnProperty;i.exports=function(a,l){return o.call(a,l)}},5319:function(i,s,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),h=o("a691"),f=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,w=function(T){return T===void 0?T:String(T)};a("replace",2,function(T,S,x,I){var C=I.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,P=I.REPLACE_KEEPS_$0,L=C?"$":"$0";return[function(O,J){var B=f(this),Q=O==null?void 0:O[T];return Q!==void 0?Q.call(O,B,J):S.call(String(B),O,J)},function(k,O){if(!C&&P||typeof O=="string"&&O.indexOf(L)===-1){var J=x(S,k,this,O);if(J.done)return J.value}var B=l(k),Q=String(this),se=typeof O=="function";se||(O=String(O));var Me=B.global;if(Me){var ct=B.unicode;B.lastIndex=0}for(var Be=[];;){var De=p(B,Q);if(De===null||(Be.push(De),!Me))break;var at=String(De[0]);at===""&&(B.lastIndex=d(Q,u(B.lastIndex),ct))}for(var Et="",M=0,W=0;W<Be.length;W++){De=Be[W];for(var H=String(De[0]),ne=m(y(h(De.index),Q.length),0),me=[],We=1;We<De.length;We++)me.push(w(De[We]));var _e=De.groups;if(se){var _=[H].concat(me,ne,Q);_e!==void 0&&_.push(_e);var b=String(O.apply(void 0,_))}else b=U(H,Q,ne,me,_e,O);ne>=M&&(Et+=Q.slice(M,ne)+b,M=ne+H.length)}return Et+Q.slice(M)}];function U(k,O,J,B,Q,se){var Me=J+k.length,ct=B.length,Be=E;return Q!==void 0&&(Q=c(Q),Be=g),S.call(se,Be,function(De,at){var Et;switch(at.charAt(0)){case"$":return"$";case"&":return k;case"`":return O.slice(0,J);case"'":return O.slice(Me);case"<":Et=Q[at.slice(1,-1)];break;default:var M=+at;if(M===0)return De;if(M>ct){var W=v(M/10);return W===0?De:W<=ct?B[W-1]===void 0?at.charAt(1):B[W-1]+at.charAt(1):De}Et=B[M-1]}return Et===void 0?"":Et})}})},5692:function(i,s,o){var a=o("c430"),l=o("c6cd");(i.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(i,s,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");i.exports=a("Reflect","ownKeys")||function(f){var d=l.f(u(f)),p=c.f;return p?d.concat(p(f)):d}},"5a34":function(i,s,o){var a=o("44e7");i.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(i,s){i.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(i,s,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),h=o("1c0b"),f=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return h(p),v=f(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(i,s,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(h,f){var d=String(l(h)),p=a(f),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};i.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(i,s,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");i.exports=function(h,f){var d;return l(h)&&(d=h.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(f===0?0:f)}},"69f3":function(i,s,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),h=o("5135"),f=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(C){return v(C)?y(C):m(C,{})},E=function(C){return function(P){var L;if(!c(P)||(L=y(P)).type!==C)throw TypeError("Incompatible receiver, "+C+" required");return L}};if(a){var w=new p,T=w.get,S=w.has,x=w.set;m=function(C,P){return x.call(w,C,P),P},y=function(C){return T.call(w,C)||{}},v=function(C){return S.call(w,C)}}else{var I=f("state");d[I]=!0,m=function(C,P){return u(C,I,P),P},y=function(C){return h(C,I)?C[I]:{}},v=function(C){return h(C,I)}}i.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(i,s,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),h=o("8925"),f=o("69f3"),d=f.get,p=f.enforce,m=String(String).split("String");(i.exports=function(y,v,g,E){var w=E?!!E.unsafe:!1,T=E?!!E.enumerable:!1,S=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){T?y[v]=g:u(v,g);return}else w?!S&&y[v]&&(T=!0):delete y[v];T?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||h(this)})},"6f53":function(i,s,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,h=function(f){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(f?[E,p[E]]:p[E]);return g}};i.exports={entries:h(!0),values:h(!1)}},"73d9":function(i,s,o){var a=o("44d2");a("flatMap")},7418:function(i,s){s.f=Object.getOwnPropertySymbols},"746f":function(i,s,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;i.exports=function(h){var f=a.Symbol||(a.Symbol={});l(f,h)||u(f,h,{value:c.f(h)})}},7839:function(i,s){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(i,s,o){var a=o("1d80");i.exports=function(l){return Object(a(l))}},"7c73":function(i,s,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),h=o("1be4"),f=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},w=function(C){return m+v+p+C+m+"/"+v+p},T=function(C){C.write(w("")),C.close();var P=C.parentWindow.Object;return C=null,P},S=function(){var C=f("iframe"),P="java"+v+":",L;return C.style.display="none",h.appendChild(C),C.src=String(P),L=C.contentWindow.document,L.open(),L.write(w("document.F=Object")),L.close(),L.F},x,I=function(){try{x=document.domain&&new ActiveXObject("htmlfile")}catch{}I=x?T(x):S();for(var C=c.length;C--;)delete I[y][c[C]];return I()};u[g]=!0,i.exports=Object.create||function(P,L){var U;return P!==null?(E[y]=a(P),U=new E,E[y]=null,U[g]=P):U=I(),L===void 0?U:l(U,L)}},"7dd0":function(i,s,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),h=o("d44e"),f=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),T="keys",S="values",x="entries",I=function(){return this};i.exports=function(C,P,L,U,k,O,J){l(L,P,U);var B=function(W){if(W===k&&Be)return Be;if(!E&&W in Me)return Me[W];switch(W){case T:return function(){return new L(this,W)};case S:return function(){return new L(this,W)};case x:return function(){return new L(this,W)}}return function(){return new L(this)}},Q=P+" Iterator",se=!1,Me=C.prototype,ct=Me[w]||Me["@@iterator"]||k&&Me[k],Be=!E&&ct||B(k),De=P=="Array"&&Me.entries||ct,at,Et,M;if(De&&(at=c(De.call(new C)),g!==Object.prototype&&at.next&&(!m&&c(at)!==g&&(u?u(at,g):typeof at[w]!="function"&&f(at,w,I)),h(at,Q,!0,!0),m&&(y[Q]=I))),k==S&&ct&&ct.name!==S&&(se=!0,Be=function(){return ct.call(this)}),(!m||J)&&Me[w]!==Be&&f(Me,w,Be),y[P]=Be,k)if(Et={values:B(S),keys:O?Be:B(T),entries:B(x)},J)for(M in Et)(E||se||!(M in Me))&&d(Me,M,Et[M]);else a({target:P,proto:!0,forced:E||se},Et);return Et}},"7f9a":function(i,s,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;i.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(i,s,o){var a=o("d039");i.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(i,s,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");i.exports=function(u,h,f){var d=a(h);d in u?l.f(u,d,c(0,f)):u[d]=f}},"861d":function(i,s){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(i,s,o){var a,l,c;(function(u,h){l=[],a=h,c=typeof a=="function"?a.apply(s,l):a,c!==void 0&&(i.exports=c)})(typeof self<"u"?self:this,function(){function u(){var h=Object.getOwnPropertyDescriptor(document,"currentScript");if(!h&&"currentScript"in document&&document.currentScript||h&&h.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(x){var f=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=f.exec(x.stack)||d.exec(x.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,w,T=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),w=g.replace(E,"$1").trim());for(var S=0;S<T.length;S++)if(T[S].readyState==="interactive"||T[S].src===m||m===v&&T[S].innerHTML&&T[S].innerHTML.trim()===w)return T[S];return null}}return u})},8925:function(i,s,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),i.exports=a.inspectSource},"8aa5":function(i,s,o){var a=o("6547").charAt;i.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(i,s){i.exports=n},"90e3":function(i,s){var o=0,a=Math.random();i.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");i.exports=a?function(u,h,f){return l.f(u,h,c(1,f))}:function(u,h,f){return u[h]=f,u}},9263:function(i,s,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,h=c,f=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=f||p||d;m&&(h=function(v){var g=this,E,w,T,S,x=d&&g.sticky,I=a.call(g),C=g.source,P=0,L=v;return x&&(I=I.replace("y",""),I.indexOf("g")===-1&&(I+="g"),L=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(C="(?: "+C+")",L=" "+L,P++),w=new RegExp("^(?:"+C+")",I)),p&&(w=new RegExp("^"+C+"$(?!\\s)",I)),f&&(E=g.lastIndex),T=c.call(x?w:g,L),x?T?(T.input=T.input.slice(P),T[0]=T[0].slice(P),T.index=g.lastIndex,g.lastIndex+=T[0].length):g.lastIndex=0:f&&T&&(g.lastIndex=g.global?T.index+T[0].length:E),p&&T&&T.length>1&&u.call(T[0],w,function(){for(S=1;S<arguments.length-2;S++)arguments[S]===void 0&&(T[S]=void 0)}),T}),i.exports=h},"94ca":function(i,s,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=h[u(p)];return y==d?!0:y==f?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},h=c.data={},f=c.NATIVE="N",d=c.POLYFILL="P";i.exports=c},"99af":function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),h=o("7b0b"),f=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,w="Maximum allowed index exceeded",T=v>=51||!l(function(){var C=[];return C[g]=!1,C.concat()[0]!==C}),S=m("concat"),x=function(C){if(!u(C))return!1;var P=C[g];return P!==void 0?!!P:c(C)},I=!T||!S;a({target:"Array",proto:!0,forced:I},{concat:function(P){var L=h(this),U=p(L,0),k=0,O,J,B,Q,se;for(O=-1,B=arguments.length;O<B;O++)if(se=O===-1?L:arguments[O],x(se)){if(Q=f(se.length),k+Q>E)throw TypeError(w);for(J=0;J<Q;J++,k++)J in se&&d(U,k,se[J])}else{if(k>=E)throw TypeError(w);d(U,k++,se)}return U.length=k,U}})},"9bdd":function(i,s,o){var a=o("825a");i.exports=function(l,c,u,h){try{return h?c(a(u)[0],u[1]):c(u)}catch(d){var f=l.return;throw f!==void 0&&a(f.call(l)),d}}},"9bf2":function(i,s,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),h=Object.defineProperty;s.f=a?h:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return h(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(i,s,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),h=o("3f8c"),f=function(){return this};i.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),h[y]=f,d}},"9f7f":function(i,s,o){var a=o("d039");function l(c,u){return RegExp(c,u)}s.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),s.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(i,s,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(h,f,d,p,m,y,v,g){for(var E=m,w=0,T=v?c(v,g,3):!1,S;w<p;){if(w in d){if(S=T?T(d[w],w,f):d[w],y>0&&a(S))E=u(h,f,S,l(S.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");h[E]=S}E++}w++}return E};i.exports=u},a352:function(i,s){i.exports=r},a434:function(i,s,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),h=o("7b0b"),f=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,w=9007199254740991,T="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(x,I){var C=h(this),P=u(C.length),L=l(x,P),U=arguments.length,k,O,J,B,Q,se;if(U===0?k=O=0:U===1?(k=0,O=P-L):(k=U-2,O=E(g(c(I),0),P-L)),P+k-O>w)throw TypeError(T);for(J=f(C,O),B=0;B<O;B++)Q=L+B,Q in C&&d(J,B,C[Q]);if(J.length=O,k<O){for(B=L;B<P-O;B++)Q=B+O,se=B+k,Q in C?C[se]=C[Q]:delete C[se];for(B=P;B>P-O+k;B--)delete C[B-1]}else if(k>O)for(B=P-O;B>L;B--)Q=B+O-1,se=B+k-1,Q in C?C[se]=C[Q]:delete C[se];for(B=0;B<k;B++)C[B+L]=arguments[B+2];return C.length=P-O+k,J}})},a4d3:function(i,s,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),h=o("83ab"),f=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),w=o("fc6a"),T=o("c04e"),S=o("5c6c"),x=o("7c73"),I=o("df75"),C=o("241c"),P=o("057f"),L=o("7418"),U=o("06cf"),k=o("9bf2"),O=o("d1e7"),J=o("9112"),B=o("6eeb"),Q=o("5692"),se=o("f772"),Me=o("d012"),ct=o("90e3"),Be=o("b622"),De=o("e538"),at=o("746f"),Et=o("d44e"),M=o("69f3"),W=o("b727").forEach,H=se("hidden"),ne="Symbol",me="prototype",We=Be("toPrimitive"),_e=M.set,_=M.getterFor(ne),b=Object[me],N=l.Symbol,F=c("JSON","stringify"),$=U.f,K=k.f,q=P.f,Y=O.f,z=Q("symbols"),j=Q("op-symbols"),le=Q("string-to-symbol-registry"),ie=Q("symbol-to-string-registry"),ce=Q("wks"),de=l.QObject,Ae=!de||!de[me]||!de[me].findChild,Qe=h&&p(function(){return x(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a!=7})?function(we,ue,ge){var Fe=$(b,ue);Fe&&delete b[ue],K(we,ue,ge),Fe&&we!==b&&K(b,ue,Fe)}:K,je=function(we,ue){var ge=z[we]=x(N[me]);return _e(ge,{type:ne,tag:we,description:ue}),h||(ge.description=ue),ge},A=d?function(we){return typeof we=="symbol"}:function(we){return Object(we)instanceof N},R=function(ue,ge,Fe){ue===b&&R(j,ge,Fe),g(ue);var Ge=T(ge,!0);return g(Fe),m(z,Ge)?(Fe.enumerable?(m(ue,H)&&ue[H][Ge]&&(ue[H][Ge]=!1),Fe=x(Fe,{enumerable:S(0,!1)})):(m(ue,H)||K(ue,H,S(1,{})),ue[H][Ge]=!0),Qe(ue,Ge,Fe)):K(ue,Ge,Fe)},D=function(ue,ge){g(ue);var Fe=w(ge),Ge=I(Fe).concat(Re(Fe));return W(Ge,function(vn){(!h||re.call(Fe,vn))&&R(ue,vn,Fe[vn])}),ue},V=function(ue,ge){return ge===void 0?x(ue):D(x(ue),ge)},re=function(ue){var ge=T(ue,!0),Fe=Y.call(this,ge);return this===b&&m(z,ge)&&!m(j,ge)?!1:Fe||!m(this,ge)||!m(z,ge)||m(this,H)&&this[H][ge]?Fe:!0},pe=function(ue,ge){var Fe=w(ue),Ge=T(ge,!0);if(!(Fe===b&&m(z,Ge)&&!m(j,Ge))){var vn=$(Fe,Ge);return vn&&m(z,Ge)&&!(m(Fe,H)&&Fe[H][Ge])&&(vn.enumerable=!0),vn}},fe=function(ue){var ge=q(w(ue)),Fe=[];return W(ge,function(Ge){!m(z,Ge)&&!m(Me,Ge)&&Fe.push(Ge)}),Fe},Re=function(ue){var ge=ue===b,Fe=q(ge?j:w(ue)),Ge=[];return W(Fe,function(vn){m(z,vn)&&(!ge||m(b,vn))&&Ge.push(z[vn])}),Ge};if(f||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor");var ue=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),ge=ct(ue),Fe=function(Ge){this===b&&Fe.call(j,Ge),m(this,H)&&m(this[H],ge)&&(this[H][ge]=!1),Qe(this,ge,S(1,Ge))};return h&&Ae&&Qe(b,ge,{configurable:!0,set:Fe}),je(ge,ue)},B(N[me],"toString",function(){return _(this).tag}),B(N,"withoutSetter",function(we){return je(ct(we),we)}),O.f=re,k.f=R,U.f=pe,C.f=P.f=fe,L.f=Re,De.f=function(we){return je(Be(we),we)},h&&(K(N[me],"description",{configurable:!0,get:function(){return _(this).description}}),u||B(b,"propertyIsEnumerable",re,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:N}),W(I(ce),function(we){at(we)}),a({target:ne,stat:!0,forced:!f},{for:function(we){var ue=String(we);if(m(le,ue))return le[ue];var ge=N(ue);return le[ue]=ge,ie[ge]=ue,ge},keyFor:function(ue){if(!A(ue))throw TypeError(ue+" is not a symbol");if(m(ie,ue))return ie[ue]},useSetter:function(){Ae=!0},useSimple:function(){Ae=!1}}),a({target:"Object",stat:!0,forced:!f,sham:!h},{create:V,defineProperty:R,defineProperties:D,getOwnPropertyDescriptor:pe}),a({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:fe,getOwnPropertySymbols:Re}),a({target:"Object",stat:!0,forced:p(function(){L.f(1)})},{getOwnPropertySymbols:function(ue){return L.f(E(ue))}}),F){var dt=!f||p(function(){var we=N();return F([we])!="[null]"||F({a:we})!="{}"||F(Object(we))!="{}"});a({target:"JSON",stat:!0,forced:dt},{stringify:function(ue,ge,Fe){for(var Ge=[ue],vn=1,Lh;arguments.length>vn;)Ge.push(arguments[vn++]);if(Lh=ge,!(!v(ge)&&ue===void 0||A(ue)))return y(ge)||(ge=function(pI,Ml){if(typeof Lh=="function"&&(Ml=Lh.call(this,pI,Ml)),!A(Ml))return Ml}),Ge[1]=ge,F.apply(null,Ge)}})}N[me][We]||J(N[me],We,N[me].valueOf),Et(N,ne),Me[H]=!0},a630:function(i,s,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(h){Array.from(h)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(i,s,o){var a=o("d039");i.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(i,s){var o=Math.ceil,a=Math.floor;i.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(i,s,o){var a=o("b622"),l=a("match");i.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(i,s,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(i,s,o){var a=o("825a");i.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,h={},f=function(d){throw d};i.exports=function(d,p){if(c(h,d))return h[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:f,g=c(p,1)?p[1]:void 0;return h[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:f}):E[1]=1,m.call(E,v,g)})}},ae93:function(i,s,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),h=o("c430"),f=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!h&&!c(m,f)&&l(m,f,p),i.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(i,s,o){var a=o("00ee"),l=o("f5df");i.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(i,s,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,h=/^\s*function ([^ (]*)/,f="name";a&&!(f in c)&&l(c,f,{configurable:!0,get:function(){try{return u.call(this).match(h)[1]}catch{return""}}})},b622:function(i,s,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),h=o("4930"),f=o("fdbf"),d=l("wks"),p=a.Symbol,m=f?p:p&&p.withoutSetter||u;i.exports=function(y){return c(d,y)||(h&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(i,s,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),h=u(function(){c(1)});a({target:"Object",stat:!0,forced:h},{keys:function(d){return c(l(d))}})},b727:function(i,s,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),h=o("65f0"),f=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,w=p==5||E;return function(T,S,x,I){for(var C=c(T),P=l(C),L=a(S,x,3),U=u(P.length),k=0,O=I||h,J=m?O(T,U):y?O(T,0):void 0,B,Q;U>k;k++)if((w||k in P)&&(B=P[k],Q=L(B,k,C),p)){if(m)J[k]=Q;else if(Q)switch(p){case 3:return!0;case 5:return B;case 6:return k;case 2:f.call(J,B)}else if(g)return!1}return E?-1:v||g?g:J}};i.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(i,s,o){var a=o("861d");i.exports=function(l,c){if(!a(l))return l;var u,h;if(c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(h=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(h=u.call(l)))return h;throw TypeError("Can't convert object to primitive value")}},c430:function(i,s){i.exports=!1},c6b6:function(i,s){var o={}.toString;i.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(i,s,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});i.exports=u},c740:function(i,s,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),h="findIndex",f=!0,d=u(h);h in[]&&Array(1)[h](function(){f=!1}),a({target:"Array",proto:!0,forced:f||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(h)},c8ba:function(i,s){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}i.exports=o},c975:function(i,s,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),h=[].indexOf,f=!!h&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:f||!d||!p},{indexOf:function(y){return f?h.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(i,s,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");i.exports=function(h,f){var d=l(h),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;f.length>p;)a(d,y=f[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(i,s,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),h=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!h},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(i,s,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);i.exports=function(h){return u?c.createElement(h):{}}},ce4e:function(i,s,o){var a=o("da84"),l=o("9112");i.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(i,s){i.exports={}},d039:function(i,s){i.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(i,s,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};i.exports=function(u,h){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][h]||l[u]&&l[u][h]}},d1e7:function(i,s,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);s.f=c?function(h){var f=l(this,h);return!!f&&f.enumerable}:a},d28b:function(i,s,o){var a=o("746f");a("iterator")},d2bb:function(i,s,o){var a=o("825a"),l=o("3bbe");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},h;try{h=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,h.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?h.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(i,s,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(i,s,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");i.exports=function(h,f,d){h&&!l(h=d?h:h.prototype,u)&&a(h,u,{configurable:!0,value:f})}},d58f:function(i,s,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),h=function(f){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),w=f?E-1:0,T=f?-1:1;if(m<2)for(;;){if(w in g){y=g[w],w+=T;break}if(w+=T,f?w<0:E<=w)throw TypeError("Reduce of empty array with no initial value")}for(;f?w>=0:E>w;w+=T)w in g&&(y=p(y,g[w],w,v));return y}};i.exports={left:h(!1),right:h(!0)}},d784:function(i,s,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),h=o("9112"),f=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var w="ab".split(g);return w.length!==2||w[0]!=="a"||w[1]!=="b"});i.exports=function(g,E,w,T){var S=c(g),x=!l(function(){var k={};return k[S]=function(){return 7},""[g](k)!=7}),I=x&&!l(function(){var k=!1,O=/a/;return g==="split"&&(O={},O.constructor={},O.constructor[f]=function(){return O},O.flags="",O[S]=/./[S]),O.exec=function(){return k=!0,null},O[S](""),!k});if(!x||!I||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var C=/./[S],P=w(S,""[g],function(k,O,J,B,Q){return O.exec===u?x&&!Q?{done:!0,value:C.call(O,J,B)}:{done:!0,value:k.call(J,O,B)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),L=P[0],U=P[1];a(String.prototype,g,L),a(RegExp.prototype,S,E==2?function(k,O){return U.call(k,this,O)}:function(k){return U.call(k,this)})}T&&h(RegExp.prototype[S],"sham",!0)}},d81d:function(i,s,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),h=c("map"),f=u("map");a({target:"Array",proto:!0,forced:!h||!f},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(i,s,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};i.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),h=o("06cf"),f=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=h.f,v=c(m),g={},E=0,w,T;v.length>E;)T=y(m,w=v[E++]),T!==void 0&&f(g,w,T);return g}})},dbf1:function(i,s,o){(function(a){o.d(s,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),h=o("b622"),f=h("iterator"),d=h("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[f]!==p)try{u(v,f,p)}catch{v[f]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(i,s,o){var a=o("ca84"),l=o("7839");i.exports=Object.keys||function(u){return a(u,l)}},e01a:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),h=o("861d"),f=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var S=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),x=this instanceof y?new p(S):S===void 0?p():p(S);return S===""&&(m[x]=!0),x};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",w=/^Symbol\((.*)\)[^)]+$/;f(v,"description",{configurable:!0,get:function(){var S=h(this)?this.valueOf():this,x=g.call(S);if(u(m,S))return"";var I=E?x.slice(7,-1):x.replace(w,"$1");return I===""?void 0:I}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(i,s,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),h=c("IE_PROTO"),f=Object.prototype;i.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,h)?d[h]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?f:null}},e177:function(i,s,o){var a=o("d039");i.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(i,s,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),h=o("7dd0"),f="Array Iterator",d=u.set,p=u.getterFor(f);i.exports=h(Array,"Array",function(m,y){d(this,{type:f,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,h=o("83ab"),f=l(function(){u(1)}),d=!h||f;a({target:"Object",stat:!0,forced:d,sham:!h},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(i,s,o){var a=o("b622");s.f=a},e893:function(i,s,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");i.exports=function(h,f){for(var d=l(f),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(h,v)||p(h,v,m(f,v))}}},e8b5:function(i,s,o){var a=o("c6b6");i.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(i,s,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;i.exports=function(h){return h!==void 0&&(l.Array===h||u[c]===h)}},f5df:function(i,s,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),h=l(function(){return arguments}())=="Arguments",f=function(d,p){try{return d[p]}catch{}};i.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=f(p=Object(d),u))=="string"?m:h?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(i,s,o){var a=o("5692"),l=o("90e3"),c=a("keys");i.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(i,s,o){if(o.r(s),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(A,R,D){return R in A?Object.defineProperty(A,R,{value:D,enumerable:!0,configurable:!0,writable:!0}):A[R]=D,A}function h(A,R){var D=Object.keys(A);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(A);R&&(V=V.filter(function(re){return Object.getOwnPropertyDescriptor(A,re).enumerable})),D.push.apply(D,V)}return D}function f(A){for(var R=1;R<arguments.length;R++){var D=arguments[R]!=null?arguments[R]:{};R%2?h(Object(D),!0).forEach(function(V){u(A,V,D[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(V){Object.defineProperty(A,V,Object.getOwnPropertyDescriptor(D,V))})}return A}function d(A){if(Array.isArray(A))return A}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(A,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(A)))){var D=[],V=!0,re=!1,pe=void 0;try{for(var fe=A[Symbol.iterator](),Re;!(V=(Re=fe.next()).done)&&(D.push(Re.value),!(R&&D.length===R));V=!0);}catch(dt){re=!0,pe=dt}finally{try{!V&&fe.return!=null&&fe.return()}finally{if(re)throw pe}}return D}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(A,R){(R==null||R>A.length)&&(R=A.length);for(var D=0,V=new Array(R);D<R;D++)V[D]=A[D];return V}function y(A,R){if(A){if(typeof A=="string")return m(A,R);var D=Object.prototype.toString.call(A).slice(8,-1);if(D==="Object"&&A.constructor&&(D=A.constructor.name),D==="Map"||D==="Set")return Array.from(A);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(A,R)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(A,R){return d(A)||p(A,R)||y(A,R)||v()}function E(A){if(Array.isArray(A))return m(A)}function w(A){if(typeof Symbol<"u"&&Symbol.iterator in Object(A))return Array.from(A)}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(A){return E(A)||w(A)||y(A)||T()}var x=o("a352"),I=o.n(x);function C(A){A.parentElement!==null&&A.parentElement.removeChild(A)}function P(A,R,D){var V=D===0?A.children[0]:A.children[D-1].nextSibling;A.insertBefore(R,V)}var L=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(A){var R=Object.create(null);return function(V){var re=R[V];return re||(R[V]=A(V))}}var k=/-(\w)/g,O=U(function(A){return A.replace(k,function(R,D){return D.toUpperCase()})});o("5db7"),o("73d9");var J=["Start","Add","Remove","Update","End"],B=["Choose","Unchoose","Sort","Filter","Clone"],Q=["Move"],se=[Q,J,B].flatMap(function(A){return A}).map(function(A){return"on".concat(A)}),Me={manage:Q,manageAndEmit:J,emit:B};function ct(A){return se.indexOf(A)!==-1}o("caad"),o("2ca0");var Be=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function De(A){return Be.includes(A)}function at(A){return["transition-group","TransitionGroup"].includes(A)}function Et(A){return["id","class","role","style"].includes(A)||A.startsWith("data-")||A.startsWith("aria-")||A.startsWith("on")}function M(A){return A.reduce(function(R,D){var V=g(D,2),re=V[0],pe=V[1];return R[re]=pe,R},{})}function W(A){var R=A.$attrs,D=A.componentData,V=D===void 0?{}:D,re=M(Object.entries(R).filter(function(pe){var fe=g(pe,2),Re=fe[0];return fe[1],Et(Re)}));return f(f({},re),V)}function H(A){var R=A.$attrs,D=A.callBackBuilder,V=M(ne(R));Object.entries(D).forEach(function(pe){var fe=g(pe,2),Re=fe[0],dt=fe[1];Me[Re].forEach(function(we){V["on".concat(we)]=dt(we)})});var re="[data-draggable]".concat(V.draggable||"");return f(f({},V),{},{draggable:re})}function ne(A){return Object.entries(A).filter(function(R){var D=g(R,2),V=D[0];return D[1],!Et(V)}).map(function(R){var D=g(R,2),V=D[0],re=D[1];return[O(V),re]}).filter(function(R){var D=g(R,2),V=D[0];return D[1],!ct(V)})}o("c740");function me(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}function We(A,R){for(var D=0;D<R.length;D++){var V=R[D];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(A,V.key,V)}}function _e(A,R,D){return R&&We(A.prototype,R),D&&We(A,D),A}var _=function(R){var D=R.el;return D},b=function(R,D){return R.__draggable_context=D},N=function(R){return R.__draggable_context},F=function(){function A(R){var D=R.nodes,V=D.header,re=D.default,pe=D.footer,fe=R.root,Re=R.realList;me(this,A),this.defaultNodes=re,this.children=[].concat(S(V),S(re),S(pe)),this.externalComponent=fe.externalComponent,this.rootTransition=fe.transition,this.tag=fe.tag,this.realList=Re}return _e(A,[{key:"render",value:function(D,V){var re=this.tag,pe=this.children,fe=this._isRootComponent,Re=fe?{default:function(){return pe}}:pe;return D(re,V,Re)}},{key:"updated",value:function(){var D=this.defaultNodes,V=this.realList;D.forEach(function(re,pe){b(_(re),{element:V[pe],index:pe})})}},{key:"getUnderlyingVm",value:function(D){return N(D)}},{key:"getVmIndexFromDomIndex",value:function(D,V){var re=this.defaultNodes,pe=re.length,fe=V.children,Re=fe.item(D);if(Re===null)return pe;var dt=N(Re);if(dt)return dt.index;if(pe===0)return 0;var we=_(re[0]),ue=S(fe).findIndex(function(ge){return ge===we});return D<ue?0:pe}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),A}(),$=o("8bbf");function K(A,R){var D=A[R];return D?D():[]}function q(A){var R=A.$slots,D=A.realList,V=A.getKey,re=D||[],pe=["header","footer"].map(function(ge){return K(R,ge)}),fe=g(pe,2),Re=fe[0],dt=fe[1],we=R.item;if(!we)throw new Error("draggable element must have an item slot");var ue=re.flatMap(function(ge,Fe){return we({element:ge,index:Fe}).map(function(Ge){return Ge.key=V(ge),Ge.props=f(f({},Ge.props||{}),{},{"data-draggable":!0}),Ge})});if(ue.length!==re.length)throw new Error("Item slot must have only one child");return{header:Re,footer:dt,default:ue}}function Y(A){var R=at(A),D=!De(A)&&!R;return{transition:R,externalComponent:D,tag:D?Object($.resolveComponent)(A):R?$.TransitionGroup:A}}function z(A){var R=A.$slots,D=A.tag,V=A.realList,re=A.getKey,pe=q({$slots:R,realList:V,getKey:re}),fe=Y(D);return new F({nodes:pe,root:fe,realList:V})}function j(A,R){var D=this;Object($.nextTick)(function(){return D.$emit(A.toLowerCase(),R)})}function le(A){var R=this;return function(D,V){if(R.realList!==null)return R["onDrag".concat(A)](D,V)}}function ie(A){var R=this,D=le.call(this,A);return function(V,re){D.call(R,V,re),j.call(R,A,V)}}var ce=null,de={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(R){return R}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},Ae=["update:modelValue","change"].concat(S([].concat(S(Me.manageAndEmit),S(Me.emit)).map(function(A){return A.toLowerCase()}))),Qe=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:de,emits:Ae,data:function(){return{error:!1}},render:function(){try{this.error=!1;var R=this.$slots,D=this.$attrs,V=this.tag,re=this.componentData,pe=this.realList,fe=this.getKey,Re=z({$slots:R,tag:V,realList:pe,getKey:fe});this.componentStructure=Re;var dt=W({$attrs:D,componentData:re});return Re.render($.h,dt)}catch(we){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},we.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&L.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var R=this;if(!this.error){var D=this.$attrs,V=this.$el,re=this.componentStructure;re.updated();var pe=H({$attrs:D,callBackBuilder:{manageAndEmit:function(dt){return ie.call(R,dt)},emit:function(dt){return j.bind(R,dt)},manage:function(dt){return le.call(R,dt)}}}),fe=V.nodeType===1?V:V.parentElement;this._sortable=new I.a(fe,pe),this.targetDomElement=fe,fe.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var R=this.list;return R||this.modelValue},getKey:function(){var R=this.itemKey;return typeof R=="function"?R:function(D){return D[R]}}},watch:{$attrs:{handler:function(R){var D=this._sortable;D&&ne(R).forEach(function(V){var re=g(V,2),pe=re[0],fe=re[1];D.option(pe,fe)})},deep:!0}},methods:{getUnderlyingVm:function(R){return this.componentStructure.getUnderlyingVm(R)||null},getUnderlyingPotencialDraggableComponent:function(R){return R.__draggable_component__},emitChanges:function(R){var D=this;Object($.nextTick)(function(){return D.$emit("change",R)})},alterList:function(R){if(this.list){R(this.list);return}var D=S(this.modelValue);R(D),this.$emit("update:modelValue",D)},spliceList:function(){var R=arguments,D=function(re){return re.splice.apply(re,S(R))};this.alterList(D)},updatePosition:function(R,D){var V=function(pe){return pe.splice(D,0,pe.splice(R,1)[0])};this.alterList(V)},getRelatedContextFromMoveEvent:function(R){var D=R.to,V=R.related,re=this.getUnderlyingPotencialDraggableComponent(D);if(!re)return{component:re};var pe=re.realList,fe={list:pe,component:re};if(D!==V&&pe){var Re=re.getUnderlyingVm(V)||{};return f(f({},Re),fe)}return fe},getVmIndexFromDomIndex:function(R){return this.componentStructure.getVmIndexFromDomIndex(R,this.targetDomElement)},onDragStart:function(R){this.context=this.getUnderlyingVm(R.item),R.item._underlying_vm_=this.clone(this.context.element),ce=R.item},onDragAdd:function(R){var D=R.item._underlying_vm_;if(D!==void 0){C(R.item);var V=this.getVmIndexFromDomIndex(R.newIndex);this.spliceList(V,0,D);var re={element:D,newIndex:V};this.emitChanges({added:re})}},onDragRemove:function(R){if(P(this.$el,R.item,R.oldIndex),R.pullMode==="clone"){C(R.clone);return}var D=this.context,V=D.index,re=D.element;this.spliceList(V,1);var pe={element:re,oldIndex:V};this.emitChanges({removed:pe})},onDragUpdate:function(R){C(R.item),P(R.from,R.item,R.oldIndex);var D=this.context.index,V=this.getVmIndexFromDomIndex(R.newIndex);this.updatePosition(D,V);var re={element:this.context.element,oldIndex:D,newIndex:V};this.emitChanges({moved:re})},computeFutureIndex:function(R,D){if(!R.element)return 0;var V=S(D.to.children).filter(function(Re){return Re.style.display!=="none"}),re=V.indexOf(D.related),pe=R.component.getVmIndexFromDomIndex(re),fe=V.indexOf(ce)!==-1;return fe||!D.willInsertAfter?pe:pe+1},onDragMove:function(R,D){var V=this.move,re=this.realList;if(!V||!re)return!0;var pe=this.getRelatedContextFromMoveEvent(R),fe=this.computeFutureIndex(pe,R),Re=f(f({},this.context),{},{futureIndex:fe}),dt=f(f({},R),{},{relatedContext:pe,draggedContext:Re});return V(dt,D)},onDragEnd:function(){ce=null}}}),je=Qe;s.default=je},fb6a:function(i,s,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),h=o("50c4"),f=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),w=[].slice,T=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(x,I){var C=f(this),P=h(C.length),L=u(x,P),U=u(I===void 0?P:I,P),k,O,J;if(c(C)&&(k=C.constructor,typeof k=="function"&&(k===Array||c(k.prototype))?k=void 0:l(k)&&(k=k[E],k===null&&(k=void 0)),k===Array||k===void 0))return w.call(C,L,U);for(O=new(k===void 0?Array:k)(T(U-L,0)),J=0;L<U;L++,J++)L in C&&d(O,J,C[L]);return O.length=J,O}})},fc6a:function(i,s,o){var a=o("44ad"),l=o("1d80");i.exports=function(c){return a(l(c))}},fdbc:function(i,s){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(i,s,o){var a=o("4930");i.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(r$);const j$=i4(np),V$=t=>(m0("data-v-bdf62c14"),t=t(),v0(),t),H$=V$(()=>tt("h3",{class:"title-secondary"},"My Work",-1)),K$=Lt({__name:"Projects",setup(t){const e=Pl(),{moveProject:n}=e,{projects:r}=Dh(e),i=o=>{o.moved&&n(o.moved.oldIndex,o.moved.newIndex)},s=()=>{Es(()=>{const o=document.querySelectorAll(".transition-opacity");o.forEach(a=>{a.classList.replace("opacity-100","opacity-0")}),XU(Array.from(o),500,300,a=>{a.classList.replace("opacity-0","opacity-100")})})};return fi(()=>r.value,(o,a)=>{o>a&&s()}),_s(()=>{s()}),(o,a)=>($e(),Dt(mt,null,[H$,Ne(st(j$),{class:"grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer select-none","model-value":st(r),"item-key":"index",onChange:i,animation:150,delay:50},{item:er(({element:l})=>[Ne(dm,{class:"border-4 border-transparent opacity-100 transition-opacity duration-1000 ease-in",name:l.name,url:l.url,description:l.description,loading:l.loading},{default:er(()=>[($e(!0),Dt(mt,null,ll(l.technologies,c=>($e(),mn(n$,{class:"m-1 md:mt-2",text:c.name,color:c.color},null,8,["text","color"]))),256))]),_:2},1032,["name","url","description","loading"])]),_:1},8,["model-value"])],64))}});const W$=hm(K$,[["__scopeId","data-v-bdf62c14"]]),G$={class:"grid mt-20"},z$=Lt({__name:"Home",setup(t){return(e,n)=>($e(),mn(fm,null,{content:er(()=>[tt("div",G$,[Ne(W$)])]),_:1}))}}),Y$=Lt({__name:"Home",setup(t){return(e,n)=>($e(),mn(z$))}}),X$=Lt({__name:"Login",setup(t){return(e,n)=>($e(),mn(fm,null,{content:er(()=>[Ne(dm,{class:"!bg-cyan-800 !bg-opacity-50 my-5",name:"Login",description:"Please login using your username and password."})]),_:1}))}}),Q$=Lt({__name:"Login",setup(t){return(e,n)=>($e(),mn(X$))}}),J$=Lt({__name:"NotFound",setup(t){return(e,n)=>($e(),mn(fm,null,{content:er(()=>[Ne(dm,{class:"!bg-red-800 !bg-opacity-50 my-5",name:"Not found.",description:"Where are you going?"})]),_:1}))}}),q$=Lt({__name:"NotFound",setup(t){return(e,n)=>($e(),mn(J$))}}),xc=ZS.name,dI=MU({history:qF(""),routes:[{path:"/",name:"home",meta:{title:xc+" | Home"},component:Y$,beforeEnter:(t,e,n)=>{t.query.notfound?n({name:"notfound"}):n()}},{path:"/login",name:"login",meta:{title:xc+" | Login"},component:Q$},{path:"/:pathMatch(.*)*",name:"notfound",meta:{title:xc+" | 404"},component:q$}]});dI.beforeResolve(t=>{document.title=t.meta.title||xc});const Mh=b_(FU);Mh.use(dI);Mh.use(kF,{firebaseApp:$U,modules:[DF()]});Mh.use(qS);Mh.mount("#app");
