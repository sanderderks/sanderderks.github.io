import{Ar as e,Ci as t,Ii as n,Lr as r,Pr as i,Sr as a,Ur as o,Vr as s,ai as c,fi as l,hi as u,l as d,ni as f,nt as p,s as m,wr as h,xr as g}from"./c-ripple.js";import{t as _}from"../bundle.js";var v=d.extend({name:`skeleton`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-skeleton p-component`,{"p-skeleton-circle":t.shape===`circle`,"p-skeleton-animation-none":t.animation===`none`}]}},inlineStyles:{root:{position:`relative`}}});i();var y={name:`BaseSkeleton`,extends:m,props:{shape:{type:String,default:`rectangle`},size:{type:String,default:null},width:{type:String,default:`100%`},height:{type:String,default:`1rem`},borderRadius:{type:String,default:null},animation:{type:String,default:`wave`}},style:v,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function b(e){"@babel/helpers - typeof";return b=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},b(e)}function x(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){var t=C(e,`string`);return b(t)==`symbol`?t:t+``}function C(e,t){if(b(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(b(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var w={name:`Skeleton`,extends:y,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return p(x({},this.shape,this.shape))}}},T=[`data-p`];function E(e,t,n,i,a,s){return o(),h(`div`,r({class:e.cx(`root`),style:[e.sx(`root`),s.containerStyle],"aria-hidden":`true`},e.ptmi(`root`),{"data-p":s.dataP}),null,16,T)}w.render=E,i(),t(),c();var D=[`src`],O=e({__name:`Image`,props:{src:{},imageClass:{}},setup(e){let t=e,r=l(!1);return s(()=>{let e=new Image;e.src=t.src,e.onload=()=>{r.value=!0}}),(t,i)=>r.value?(o(),a(u(_),{key:0,class:`w-full flex justify-center cursor-pointer`},{default:f(()=>[g(`img`,{class:n([`max-h-[70vh]`,e.imageClass]),src:e.src},null,10,D)]),_:1})):(o(),a(u(w),{key:1,class:`mt-5 background-gray-light`,height:`50vh`,width:`50vw`}))}});export{O as t};