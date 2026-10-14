import{Mr as e,Rr as t,S as n,Vr as r,br as i,vr as a,x as o,xr as s}from"../bundle.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:o,style:n.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(n,o,c,l,u,d){return t(),s(`div`,e({class:n.cx(`root`)},n.ptmi(`root`)),[n.$slots.header?(t(),s(`div`,e({key:0,class:n.cx(`header`)},n.ptm(`header`)),[r(n.$slots,`header`)],16)):i(``,!0),a(`div`,e({class:n.cx(`body`)},n.ptm(`body`)),[n.$slots.title||n.$slots.subtitle?(t(),s(`div`,e({key:0,class:n.cx(`caption`)},n.ptm(`caption`)),[n.$slots.title?(t(),s(`div`,e({key:0,class:n.cx(`title`)},n.ptm(`title`)),[r(n.$slots,`title`)],16)):i(``,!0),n.$slots.subtitle?(t(),s(`div`,e({key:1,class:n.cx(`subtitle`)},n.ptm(`subtitle`)),[r(n.$slots,`subtitle`)],16)):i(``,!0)],16)):i(``,!0),a(`div`,e({class:n.cx(`content`)},n.ptm(`content`)),[r(n.$slots,`content`)],16),n.$slots.footer?(t(),s(`div`,e({key:1,class:n.cx(`footer`)},n.ptm(`footer`)),[r(n.$slots,`footer`)],16)):i(``,!0)],16)],16)}c.render=l;export{c as t};