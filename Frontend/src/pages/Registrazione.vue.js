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
    ...{ class: "d-lg-none" },
});
/** @type {__VLS_StyleScopedClasses['d-lg-none']} */ ;
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
    ...{ onSubmit: (__VLS_ctx.onSubmit) },
    action: "",
    ...{ class: "align-items-center text-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "nome",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    value: (__VLS_ctx.nome),
    ...{ class: "input-custom" },
    name: "nome",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "cognome",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    value: (__VLS_ctx.cognome),
    ...{ class: "input-custom" },
    name: "cognome",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "matricola",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    maxlength: "10",
    value: (__VLS_ctx.matricola),
    ...{ class: "input-custom" },
    name: "matricola",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
if (__VLS_ctx.erroreMatricola) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-danger mt-1 small fw-bold" },
    });
    /** @type {__VLS_StyleScopedClasses['text-danger']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['small']} */ ;
    /** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
    (__VLS_ctx.erroreMatricola);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "email",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "email",
    ...{ class: "input-custom" },
    name: "email",
});
(__VLS_ctx.email);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "password",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "password",
    ...{ class: "input-custom" },
    name: "password",
});
(__VLS_ctx.password);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-5 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "conferma_password",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "password",
    ...{ class: "input-custom" },
    name: "conferma_password",
});
(__VLS_ctx.conferma_password);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-confirm']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block" },
});
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-lg-block']} */ ;
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
    ...{ onSubmit: (__VLS_ctx.onSubmit) },
    action: "",
    ...{ class: "align-items-center text-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row row-gap-5 d-flex justify-content-center align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['row-gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row col-5 row-gap-5 mb-5" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['row-gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "nome",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    value: (__VLS_ctx.nome),
    ...{ class: "input-custom" },
    name: "nome",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "cognome",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    value: (__VLS_ctx.cognome),
    ...{ class: "input-custom" },
    name: "cognome",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "matricola",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    maxlength: "10",
    value: (__VLS_ctx.matricola),
    ...{ class: "input-custom" },
    name: "matricola",
});
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
if (__VLS_ctx.erroreMatricola) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-danger mt-1 small fw-bold" },
    });
    /** @type {__VLS_StyleScopedClasses['text-danger']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['small']} */ ;
    /** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
    (__VLS_ctx.erroreMatricola);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row col-5 row-gap-5 mb-5" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['row-gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "email",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "email",
    ...{ class: "input-custom" },
    name: "email",
});
(__VLS_ctx.email);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "password",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "password",
    ...{ class: "input-custom" },
    name: "password",
});
(__VLS_ctx.password);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "conferma_password",
    ...{ class: "fw-bold label-custom" },
});
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['label-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "password",
    ...{ class: "input-custom" },
    name: "conferma_password",
});
(__VLS_ctx.conferma_password);
/** @type {__VLS_StyleScopedClasses['input-custom']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm mt-3" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-confirm']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
// @ts-ignore
[onSubmit, onSubmit, nome, nome, cognome, cognome, matricola, matricola, erroreMatricola, erroreMatricola, erroreMatricola, erroreMatricola, email, email, password, password, conferma_password, conferma_password,];
const __VLS_export = defineComponent({
    data() {
        return {
            nome: '',
            cognome: '',
            matricola: '',
            email: '',
            password: '',
            conferma_password: '',
            erroreMatricola: '',
        };
    },
    methods: {
        async onSubmit() {
            this.erroreMatricola = '';
            const regexMatricola = /^\d+$/;
            if (!regexMatricola.test(this.matricola)) {
                this.erroreMatricola = "La matricola deve contenere solo numeri.";
                return;
            }
            if (this.matricola.length > 10 || this.matricola.length < 7) {
                this.erroreMatricola = "La matricola Deve avere almeno 7 cifre e massimo 10 cifre.";
                return;
            }
            try {
                await axios.post("/api/auth/register", {
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
                    console.log(e.response.data.message);
                    mostraNotifica(e.response.data.message, "error");
                }
            }
        },
    },
});
//# sourceMappingURL=Registrazione.vue.js.map