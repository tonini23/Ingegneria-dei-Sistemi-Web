import axios from 'axios';
import { defineComponent } from 'vue';
import { mostraNotifica } from '../notification';
export default {};
;
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "align-items-center text-center mt-5 mb-5 row justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-5" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "align-items-center text-center mt-5 mb-5" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "title-custom" },
});
/** @type {__VLS_StyleScopedClasses['title-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    action: "/",
    ...{ class: "align-items-center text-center mb-5" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-5" },
});
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "email",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "email",
    name: "email",
    ...{ class: "input-custom" },
    required: true,
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-3" },
});
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "password",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "password",
    name: "password",
    ...{ class: "input-custom" },
    required: true,
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    to: "/pass_dimenticata",
}));
const __VLS_2 = __VLS_1({
    to: "/pass_dimenticata",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "align-items-end text-end mb-5 me-4" },
});
/** @type {__VLS_StyleScopedClasses['align-items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['text-end']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['me-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "",
    ...{ class: "text-decoration-none fst-italic" },
});
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
/** @type {__VLS_StyleScopedClasses['fst-italic']} */ ;
var __VLS_3;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-5 btn text-white shadow fw-bold py-1" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-5" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "align-items-center text-center mt-5 mb-5" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "title-custom" },
});
/** @type {__VLS_StyleScopedClasses['title-custom']} */ ;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    to: "/registrazione",
}));
const __VLS_8 = __VLS_7({
    to: "/registrazione",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-4 btn btn-lg btn-danger p-3 shadow-lg my-5 btn-large" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['my-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-large']} */ ;
var __VLS_9;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    to: "/studente",
}));
const __VLS_14 = __VLS_13({
    to: "/studente",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-4 btn btn-lg btn-danger p-3 shadow-lg mt-4 mb-5 btn-large" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-large']} */ ;
var __VLS_15;
const __VLS_export = defineComponent({
    data() {
        return {
            nome: '',
            cognome: '',
            matricola: '',
            email: '',
            password: '',
            conferma_password: '',
        };
    },
    methods: {
        async onSubmit() {
            if (this.password !== this.conferma_password) {
                console.log("Le password non coincidono!");
                return;
            }
            try {
                await axios.post("/api/auth/login", {
                    nome: this.nome,
                    cognome: this.cognome,
                    matricola: this.matricola,
                    email: this.email,
                    password: this.password,
                });
                mostraNotifica("Registrazione completata! Ora sei loggato.", "success");
                setTimeout(() => {
                    location.href = "/";
                }, 2000);
            }
            catch (e) {
                if (e.response) {
                    mostraNotifica(e.response.data.message, "error");
                }
            }
        },
    },
});
//# sourceMappingURL=Login.vue.js.map