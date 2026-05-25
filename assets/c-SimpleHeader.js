import{Ar as e,D as t,Ir as n,O as r,Tr as i,_r as a,br as o,ji as s,yr as c,zr as l}from"../bundle.js";var u=r.extend({name:`progressspinner`,style:`
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
`,classes:{root:`p-progressspinner`,spin:`p-progressspinner-spin`,circle:`p-progressspinner-circle`}}),d={name:`ProgressSpinner`,extends:{name:`BaseProgressSpinner`,extends:t,props:{strokeWidth:{type:String,default:`2`},fill:{type:String,default:`none`},animationDuration:{type:String,default:`2s`}},style:u,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},f=[`fill`,`stroke-width`];function p(t,r,i,s,c,l){return n(),o(`div`,e({class:t.cx(`root`),role:`progressbar`},t.ptmi(`root`)),[(n(),o(`svg`,e({class:t.cx(`spin`),viewBox:`25 25 50 50`,style:l.svgStyle},t.ptm(`spin`)),[a(`circle`,e({class:t.cx(`circle`),cx:`50`,cy:`50`,r:`20`,fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:`10`},t.ptm(`circle`)),null,16,f)],16))],16)}d.render=p;var m={class:`mt-3 mb-5 flex flex-col gap-3`},h={class:`w-full flex gap-1 justify-between items-center`},g={class:`text-xl font-bold`},_={key:0},v=i({__name:`SimpleHeader`,props:{title:{},description:{}},setup(e){return(t,r)=>(n(),o(`div`,m,[a(`div`,h,[a(`h3`,g,s(e.title),1),l(t.$slots,`default`)]),e.description?(n(),o(`p`,_,s(e.description),1)):c(``,!0)]))}});export{d as n,v as t};