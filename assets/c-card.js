import{Cr as e,D as t,Fr as n,O as r,Vr as i,Wr as a,wr as o,xr as s}from"../bundle.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:t,style:r.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(t,r,c,l,u,d){return i(),o(`div`,n({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(i(),o(`div`,n({key:0,class:t.cx(`header`)},t.ptm(`header`)),[a(t.$slots,`header`)],16)):e(``,!0),s(`div`,n({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(i(),o(`div`,n({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(i(),o(`div`,n({key:0,class:t.cx(`title`)},t.ptm(`title`)),[a(t.$slots,`title`)],16)):e(``,!0),t.$slots.subtitle?(i(),o(`div`,n({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[a(t.$slots,`subtitle`)],16)):e(``,!0)],16)):e(``,!0),s(`div`,n({class:t.cx(`content`)},t.ptm(`content`)),[a(t.$slots,`content`)],16),t.$slots.footer?(i(),o(`div`,n({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[a(t.$slots,`footer`)],16)):e(``,!0)],16)],16)}c.render=l;export{c as t};