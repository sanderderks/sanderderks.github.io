import{Dr as e,Mr as t,Ni as n,Oi as r,Rr as i,S as a,Tr as o,Vr as s,_r as c,b as l,br as u,ft as d,hr as f,si as p,vr as m,xr as h}from"../bundle.js";var g=a.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),_={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:l,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:g,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return d({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},v=[`data-p-checked`,`data-p-disabled`,`data-p`],y=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],b=[`data-p`],x=[`data-p`];function S(e,n,r,a,o,c){return i(),h(`div`,t({class:e.cx(`root`),style:e.sx(`root`)},c.getPTOptions(`root`),{"data-p-checked":c.checked,"data-p-disabled":e.disabled,"data-p":c.dataP}),[m(`input`,t({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:c.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":c.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:n[0]||=function(){return c.onFocus&&c.onFocus.apply(c,arguments)},onBlur:n[1]||=function(){return c.onBlur&&c.onBlur.apply(c,arguments)},onChange:n[2]||=function(){return c.onChange&&c.onChange.apply(c,arguments)}},c.getPTOptions(`input`)),null,16,y),m(`div`,t({class:e.cx(`slider`)},c.getPTOptions(`slider`),{"data-p":c.dataP}),[m(`div`,t({class:e.cx(`handle`)},c.getPTOptions(`handle`),{"data-p":c.dataP}),[s(e.$slots,`handle`,{checked:c.checked})],16,x)],16,b)],16,v)}_.render=S;var C=[`for`],w=e({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:a}){let s=e,l=c({get:()=>s.modelValue,set:e=>{s.disabled||g(`update:modelValue`,e)}}),d=c(()=>s.name+(s.id?`.${s.id}`:``)),g=a;return(a,s)=>(i(),h(`div`,null,[e.label?(i(),h(`label`,t({key:0,class:`block text-sm font-bold mb-2`,for:d.value},e.labelProps),n(e.label),17,C)):u(``,!0),m(`div`,{class:r([`p-input flex align-middle`,{"cursor-pointer":!e.disabled}]),onClick:s[1]||=f(e=>l.value=!l.value,[`prevent`])},[o(p(_),{inputId:d.value,ref:`input`,modelValue:l.value,"onUpdate:modelValue":s[0]||=e=>l.value=e,disabled:e.disabled,pt:{slider:{class:l.value?`bg-primary-500`:void 0}}},null,8,[`inputId`,`modelValue`,`disabled`,`pt`])],2)]))}});export{_ as n,w as t};