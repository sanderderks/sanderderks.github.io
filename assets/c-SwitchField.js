import{Br as e,Di as t,Er as n,Lr as r,Mi as i,O as a,Tt as o,_r as s,br as c,g as l,gr as u,jr as d,mr as f,oi as p,wr as m,yr as h}from"../bundle.js";var g=a.extend({name:`toggleswitch`,style:`
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
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),_={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:l,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:g,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return o({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},v=[`data-p-checked`,`data-p-disabled`,`data-p`],y=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],b=[`data-p`],x=[`data-p`];function S(t,n,i,a,o,l){return r(),c(`div`,d({class:t.cx(`root`),style:t.sx(`root`)},l.getPTOptions(`root`),{"data-p-checked":l.checked,"data-p-disabled":t.disabled,"data-p":l.dataP}),[s(`input`,d({id:t.inputId,type:`checkbox`,role:`switch`,class:[t.cx(`input`),t.inputClass],style:t.inputStyle,checked:l.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":l.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||=function(){return l.onFocus&&l.onFocus.apply(l,arguments)},onBlur:n[1]||=function(){return l.onBlur&&l.onBlur.apply(l,arguments)},onChange:n[2]||=function(){return l.onChange&&l.onChange.apply(l,arguments)}},l.getPTOptions(`input`)),null,16,y),s(`div`,d({class:t.cx(`slider`)},l.getPTOptions(`slider`),{"data-p":l.dataP}),[s(`div`,d({class:t.cx(`handle`)},l.getPTOptions(`handle`),{"data-p":l.dataP}),[e(t.$slots,`handle`,{checked:l.checked})],16,x)],16,b)],16,v)}_.render=S;var C=[`for`],w=n({__name:`SwitchField`,props:{id:{},name:{},label:{},modelValue:{type:Boolean},labelProps:{},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:n}){let a=e,o=u({get:()=>a.modelValue,set:e=>{a.disabled||g(`update:modelValue`,e)}}),l=u(()=>a.name+(a.id?`.${a.id}`:``)),g=n;return(n,a)=>(r(),c(`div`,null,[e.label?(r(),c(`label`,d({key:0,class:`block text-sm font-bold mb-2`,for:l.value},e.labelProps),i(e.label),17,C)):h(``,!0),s(`div`,{class:t([`p-input flex align-middle`,{"cursor-pointer":!e.disabled}]),onClick:a[1]||=f(e=>o.value=!o.value,[`prevent`])},[m(p(_),{inputId:l.value,ref:`input`,modelValue:o.value,"onUpdate:modelValue":a[0]||=e=>o.value=e,disabled:e.disabled,pt:{slider:{class:o.value?`bg-primary-500`:void 0}}},null,8,[`inputId`,`modelValue`,`disabled`,`pt`])],2)]))}});export{_ as n,w as t};