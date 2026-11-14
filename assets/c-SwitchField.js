import{Bi as e,Fi as t,Fr as n,Rr as r,Si as i,Sr as a,Tr as o,Wr as s,jr as c,kr as l,l as u,mi as d,mr as f,nt as p,oi as m,qr as h,wr as g,xr as _,yr as v}from"./c-ripple.js";import{m as y}from"../bundle.js";var b=u.extend({name:`toggleswitch`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}});n();var x={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:y,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:b,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return p({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},S=[`data-p-checked`,`data-p-disabled`,`data-p`],C=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],w=[`data-p`],T=[`data-p`];function E(e,t,n,i,c,l){return s(),o(`div`,r({class:e.cx(`root`),style:e.sx(`root`)},l.getPTOptions(`root`),{"data-p-checked":l.checked,"data-p-disabled":e.disabled,"data-p":l.dataP}),[a(`input`,r({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:l.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":l.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||=function(){return l.onFocus&&l.onFocus.apply(l,arguments)},onBlur:t[1]||=function(){return l.onBlur&&l.onBlur.apply(l,arguments)},onChange:t[2]||=function(){return l.onChange&&l.onChange.apply(l,arguments)}},l.getPTOptions(`input`)),null,16,C),a(`div`,r({class:e.cx(`slider`)},l.getPTOptions(`slider`),{"data-p":l.dataP}),[a(`div`,r({class:e.cx(`handle`)},l.getPTOptions(`handle`),{"data-p":l.dataP}),[h(e.$slots,`handle`,{checked:l.checked})],16,T)],16,w)],16,S)}x.render=E,n(),i(),m(),f();var D=[`for`],O=c({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(n,{emit:i}){let c=n,u=_({get:()=>c.modelValue,set:e=>{c.disabled||p(`update:modelValue`,e)}}),f=_(()=>c.name+(c.id?`.${c.id}`:``)),p=i;return(i,c)=>(s(),o(`div`,null,[n.label?(s(),o(`label`,r({key:0,class:`block text-sm font-bold mb-2`,for:f.value},n.labelProps),e(n.label),17,D)):g(``,!0),a(`div`,{class:t([`p-input flex align-middle`,{"cursor-pointer":!n.disabled}]),onClick:c[1]||=v(e=>u.value=!u.value,[`prevent`])},[l(d(x),{ref:`input`,modelValue:u.value,"onUpdate:modelValue":c[0]||=e=>u.value=e,"input-id":f.value,disabled:n.disabled,pt:{slider:{class:u.value?`bg-primary-500`:void 0}}},null,8,[`modelValue`,`input-id`,`disabled`,`pt`])],2)]))}});export{x as n,O as t};