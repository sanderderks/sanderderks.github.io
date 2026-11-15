import{Cr as e,Kr as t,Lr as n,Pr as r,Ur as i,l as a,s as o,wr as s,xr as c}from"./c-ripple.js";var l=a.extend({name:`card`,style:`
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
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}});r();var u={name:`Card`,extends:{name:`BaseCard`,extends:o,style:l,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function d(r,a,o,l,u,d){return i(),s(`div`,n({class:r.cx(`root`)},r.ptmi(`root`)),[r.$slots.header?(i(),s(`div`,n({key:0,class:r.cx(`header`)},r.ptm(`header`)),[t(r.$slots,`header`)],16)):e(``,!0),c(`div`,n({class:r.cx(`body`)},r.ptm(`body`)),[r.$slots.title||r.$slots.subtitle?(i(),s(`div`,n({key:0,class:r.cx(`caption`)},r.ptm(`caption`)),[r.$slots.title?(i(),s(`div`,n({key:0,class:r.cx(`title`)},r.ptm(`title`)),[t(r.$slots,`title`)],16)):e(``,!0),r.$slots.subtitle?(i(),s(`div`,n({key:1,class:r.cx(`subtitle`)},r.ptm(`subtitle`)),[t(r.$slots,`subtitle`)],16)):e(``,!0)],16)):e(``,!0),c(`div`,n({class:r.cx(`content`)},r.ptm(`content`)),[t(r.$slots,`content`)],16),r.$slots.footer?(i(),s(`div`,n({key:1,class:r.cx(`footer`)},r.ptm(`footer`)),[t(r.$slots,`footer`)],16)):e(``,!0)],16)],16)}u.render=d;export{u as t};