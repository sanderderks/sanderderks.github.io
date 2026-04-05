import{an as d,ao as p,aT as f,b as o,c as m,ap as h,d as y,k as b,g as s,f as l,bc as g,w as k,e as v,n as S,E as w}from"../bundle.js";var _=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,P={root:{position:"relative"}},x={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},$=d.extend({name:"skeleton",style:_,classes:x,inlineStyles:P}),z={name:"BaseSkeleton",extends:p,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:$,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(e)}function B(e,n,t){return(n=C(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e){var n=R(e,"string");return a(n)=="symbol"?n:n+""}function R(e,n){if(a(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var u={name:"Skeleton",extends:z,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return f(B({},this.shape,this.shape))}}},X=["data-p"];function j(e,n,t,r,c,i){return o(),m("div",h({class:e.cx("root"),style:[e.sx("root"),i.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":i.dataP}),null,16,X)}u.render=j;const E=["src"],N=y({__name:"Image",props:{src:{},imageClass:{}},setup(e){const n=e,t=w(!1);return b(()=>{const r=new Image;r.src=n.src,r.onload=()=>{t.value=!0}}),(r,c)=>t.value?(o(),s(l(g),{key:0,class:"w-full flex justify-center cursor-pointer"},{default:k(()=>[v("img",{class:S(["max-h-[70vh]",e.imageClass]),src:e.src},null,10,E)]),_:1})):(o(),s(l(u),{key:1,class:"mt-5 background-gray-light",height:"50vh",width:"50vw"}))}});export{N as _};
