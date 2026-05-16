import{ak as l,al as c,b as n,c as s,am as r,e as t,d,t as i,S as g,y as f}from"../bundle.js";var m=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,h={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},u=l.extend({name:"progressspinner",style:m,classes:h}),k={name:"BaseProgressSpinner",extends:c,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:u,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},y={name:"ProgressSpinner",extends:k,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},v=["fill","stroke-width"];function S(e,o,a,B,_,p){return n(),s("div",r({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(n(),s("svg",r({class:e.cx("spin"),viewBox:"25 25 50 50",style:p.svgStyle},e.ptm("spin")),[t("circle",r({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,v)],16))],16)}y.render=S;const x={class:"mt-3 mb-5 flex flex-col gap-3"},b={class:"w-full flex gap-1 justify-between items-center"},$={class:"text-xl font-bold"},w={key:0},D=d({__name:"SimpleHeader",props:{title:{},description:{}},setup(e){return(o,a)=>(n(),s("div",x,[t("div",b,[t("h3",$,i(e.title),1),g(o.$slots,"default")]),e.description?(n(),s("p",w,i(e.description),1)):f("",!0)]))}});export{D as _,y as s};
