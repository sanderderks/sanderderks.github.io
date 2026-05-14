import{Lr as e,Or as t,Pr as n,S as r,_r as i,x as a}from"../bundle.js";var o={name:`ButtonGroup`,extends:{name:`BaseButtonGroup`,extends:a,style:r.extend({name:`buttongroup`,style:`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`,classes:{root:`p-buttongroup p-component`}}),provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},inheritAttrs:!1};function s(r,a,o,s,c,l){return n(),i(`span`,t({class:r.cx(`root`),role:`group`},r.ptmi(`root`)),[e(r.$slots,`default`)],16)}o.render=s;export{o as t};