import{Fr as e,Rr as t,Sr as n,Tr as r,Wr as i,l as a,qr as o,s,wr as c}from"./c-ripple.js";var l=a.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}});e();var u={name:`Card`,extends:{name:`BaseCard`,extends:s,style:l,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function d(e,a,s,l,u,d){return i(),r(`div`,t({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(i(),r(`div`,t({key:0,class:e.cx(`header`)},e.ptm(`header`)),[o(e.$slots,`header`)],16)):c(``,!0),n(`div`,t({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(i(),r(`div`,t({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(i(),r(`div`,t({key:0,class:e.cx(`title`)},e.ptm(`title`)),[o(e.$slots,`title`)],16)):c(``,!0),e.$slots.subtitle?(i(),r(`div`,t({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[o(e.$slots,`subtitle`)],16)):c(``,!0)],16)):c(``,!0),n(`div`,t({class:e.cx(`content`)},e.ptm(`content`)),[o(e.$slots,`content`)],16),e.$slots.footer?(i(),r(`div`,t({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[o(e.$slots,`footer`)],16)):c(``,!0)],16)],16)}u.render=d;export{u as t};