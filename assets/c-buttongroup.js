import{Kr as e,Lr as t,Pr as n,Ur as r,l as i,s as a,wr as o}from"./c-ripple.js";var s=i.extend({name:`buttongroup`,style:`
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
`,classes:{root:`p-buttongroup p-component`}});n();var c={name:`ButtonGroup`,extends:{name:`BaseButtonGroup`,extends:a,style:s,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},inheritAttrs:!1};function l(n,i,a,s,c,l){return r(),o(`span`,t({class:n.cx(`root`),role:`group`},n.ptmi(`root`)),[e(n.$slots,`default`)],16)}c.render=l;export{c as t};