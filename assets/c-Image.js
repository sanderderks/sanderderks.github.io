import{Ar as e,D as t,Ei as n,Ir as r,O as i,Pr as a,Tr as o,Tt as s,Yr as c,_r as l,ai as u,br as d,ri as f,t as p,vr as m}from"../bundle.js";var h=i.extend({name:`skeleton`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-skeleton p-component`,{"p-skeleton-circle":t.shape===`circle`,"p-skeleton-animation-none":t.animation===`none`}]}},inlineStyles:{root:{position:`relative`}}}),g={name:`BaseSkeleton`,extends:t,props:{shape:{type:String,default:`rectangle`},size:{type:String,default:null},width:{type:String,default:`100%`},height:{type:String,default:`1rem`},borderRadius:{type:String,default:null},animation:{type:String,default:`wave`}},style:h,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_(e)}function v(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=b(e,`string`);return _(t)==`symbol`?t:t+``}function b(e,t){if(_(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var x={name:`Skeleton`,extends:g,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return s(v({},this.shape,this.shape))}}},S=[`data-p`];function C(t,n,i,a,o,s){return r(),d(`div`,e({class:t.cx(`root`),style:[t.sx(`root`),s.containerStyle],"aria-hidden":`true`},t.ptmi(`root`),{"data-p":s.dataP}),null,16,S)}x.render=C;var w=[`src`],T=o({__name:`Image`,props:{src:{},imageClass:{}},setup(e){let t=e,i=f(!1);return a(()=>{let e=new Image;e.src=t.src,e.onload=()=>{i.value=!0}}),(t,a)=>i.value?(r(),m(u(p),{key:0,class:`w-full flex justify-center cursor-pointer`},{default:c(()=>[l(`img`,{class:n([`max-h-[70vh]`,e.imageClass]),src:e.src},null,10,w)]),_:1})):(r(),m(u(x),{key:1,class:`mt-5 background-gray-light`,height:`50vh`,width:`50vw`}))}});export{T as t};