import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import { statoNotifica } from './notification';
export default {};
;
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Navbar
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-content-center align-items-center pt-4 pb-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "m-0 text-white me-3" },
});
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['me-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "./img/download (4).png",
    alt: "Unibo Logo",
    ...{ style: {} },
});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Navbar} */
Navbar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.routerView | typeof __VLS_components.RouterView | typeof __VLS_components.routerView | typeof __VLS_components.RouterView} */
routerView;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-container position-fixed top-0 end-0 p-3" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['toast-container']} */ ;
/** @type {__VLS_StyleScopedClasses['position-fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast align-items-center text-white border-0" },
    ...{ class: ({ 'show': __VLS_ctx.statoNotifica.show, 'text-bg-success': __VLS_ctx.statoNotifica.type === 'success', 'text-bg-danger': __VLS_ctx.statoNotifica.type === 'error' }) },
    role: "alert",
    'aria-live': "assertive",
    'aria-atomic': "true",
});
/** @type {__VLS_StyleScopedClasses['toast']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bg-success']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bg-danger']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toast-body fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['toast-body']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
(__VLS_ctx.statoNotifica.message);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.statoNotifica.show = false;
            // @ts-ignore
            [statoNotifica, statoNotifica, statoNotifica, statoNotifica, statoNotifica,];
        } },
    type: "button",
    ...{ class: "btn-close btn-close-white me-2 m-auto" },
});
/** @type {__VLS_StyleScopedClasses['btn-close']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-close-white']} */ ;
/** @type {__VLS_StyleScopedClasses['me-2']} */ ;
/** @type {__VLS_StyleScopedClasses['m-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({
    ...{ class: "text-white footer fixed-bottom" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed-bottom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
// @ts-ignore
[];
const __VLS_export = defineComponent({
    components: {
        Navbar
    },
    data() {
        return {
            utente: {},
            statoNotifica
        };
    },
});
//# sourceMappingURL=App.vue.js.map