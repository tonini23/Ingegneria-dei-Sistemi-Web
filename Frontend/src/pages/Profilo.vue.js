import { ref, onMounted } from 'vue';
import axios from 'axios';
const prenotazioni = ref([]);
// Funzione per formattare la data
const formattaData = (dataString) => {
    if (!dataString)
        return "";
    const data = new Date(dataString);
    const giorno = String(data.getDate()).padStart(2, '0');
    const mese = String(data.getMonth() + 1).padStart(2, '0');
    const anno = data.getFullYear();
    return `${giorno}-${mese}-${anno}`;
};
// Funzione per formattare l'ora (toglie :00 finale)
const formattaOra = (oraString) => {
    if (!oraString)
        return "";
    // Prende solo i primi 5 caratteri (es. "16:30")
    return oraString.slice(0, 5);
};
const getPrenotazioni = async () => {
    try {
        const response = await axios.get('/api/prenotazioni/');
        console.log("Dati ricevuti:", response.data);
        prenotazioni.value = response.data;
    }
    catch (error) {
        console.error("Errore caricamento:", error);
    }
};
const deletePrenotazione = () => {
    console.log("Elimina prenotazione");
};
const updatePrenotazione = () => {
    console.log("Modifica prenotazione");
};
onMounted(() => {
    getPrenotazioni();
});
async function logout() {
    try {
        await axios.post('/api/auth/logout');
        location.reload();
    }
    catch (error) {
        console.error("Errore durante il logout:", error);
    }
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "container mt-4 mb-5" },
});
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-lg-none" },
});
/** @type {__VLS_StyleScopedClasses['d-lg-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "title-custom fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['title-custom']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 col-md-10 col-lg-8" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-10']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "filter-box p-4 text-white" },
});
/** @type {__VLS_StyleScopedClasses['filter-box']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-3 text-center" },
});
/** @type {__VLS_StyleScopedClasses['col-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    alt: "Foto Profilo",
    ...{ class: "profile-img shadow-lg" },
});
/** @type {__VLS_StyleScopedClasses['profile-img']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-9" },
});
/** @type {__VLS_StyleScopedClasses['col-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "ms-0 w-25 text-start" },
    for: "Nome_",
});
/** @type {__VLS_StyleScopedClasses['ms-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Nome",
    id: "Nome_",
    value: "Marco",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Cognome_",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Cognome",
    id: "Cognome_",
    value: "Rossi",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Email_",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Email",
    id: "Email_",
    value: "marco.rossi@studio.unibo.it",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Matricola_",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Matricola",
    id: "Matricola",
    value: "1234567890",
    readonly: true,
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mb-3 gap-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mb-5 gap-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.logout) },
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 col-md-10 col-lg-8" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-10']} */ ;
/** @type {__VLS_StyleScopedClasses['col-lg-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "section-header text-center mb-0 border border-white border-bottom-0" },
});
/** @type {__VLS_StyleScopedClasses['section-header']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "" },
});
/** @type {__VLS_StyleScopedClasses['']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table-unibo" },
});
/** @type {__VLS_StyleScopedClasses['table-unibo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "checkbox",
    ...{ class: "custom-check" },
});
/** @type {__VLS_StyleScopedClasses['custom-check']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mt-3 gap-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.updatePrenotazione) },
    ...{ class: "col-4 btn btn-blue shadow fw-bold py-2" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.deletePrenotazione) },
    ...{ class: "col-4 btn btn-red shadow fw-bold py-2" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-red']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "justify-content-center align-items-center text-center my-5 d-none d-lg-block" },
});
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['my-5']} */ ;
/** @type {__VLS_StyleScopedClasses['d-none']} */ ;
/** @type {__VLS_StyleScopedClasses['d-lg-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "title-custom fw-bold" },
});
/** @type {__VLS_StyleScopedClasses['title-custom']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row my-5" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['my-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "filter-box p-5 text-white" },
});
/** @type {__VLS_StyleScopedClasses['filter-box']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-3 text-center" },
});
/** @type {__VLS_StyleScopedClasses['col-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    alt: "Foto Profilo",
    ...{ class: "profile-img shadow-lg" },
});
/** @type {__VLS_StyleScopedClasses['profile-img']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-9" },
});
/** @type {__VLS_StyleScopedClasses['col-9']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-3" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "ms-0 w-25 text-start" },
    for: "Nome",
});
/** @type {__VLS_StyleScopedClasses['ms-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Nome",
    id: "Nome",
    value: "Marco",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-3" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Cognome",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Cognome",
    id: "Cognome",
    value: "Rossi",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center mb-3" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Email",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Email",
    id: "Email",
    value: "marco.rossi@studio.unibo.it",
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-items-center" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "w-25 text-start" },
    for: "Matricola",
});
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['text-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input, __VLS_intrinsics.input)({
    type: "text",
    ...{ class: "profile-input" },
    name: "Matricola",
    id: "Matricola",
    value: "1234567890",
    readonly: true,
});
/** @type {__VLS_StyleScopedClasses['profile-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mt-5 mb-4 gap-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mb-5 gap-3" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.logout) },
    ...{ class: "col-5 btn text-white shadow fw-bold py-2" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['col-5']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-6" },
});
/** @type {__VLS_StyleScopedClasses['col-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "col-12 col-md-10" },
});
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "section-header text-center mb-0 border border-white border-bottom-0" },
});
/** @type {__VLS_StyleScopedClasses['section-header']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom-0']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "" },
});
/** @type {__VLS_StyleScopedClasses['']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "table-unibo" },
});
/** @type {__VLS_StyleScopedClasses['table-unibo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "row justify-content-center mt-3 gap-4" },
});
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.deletePrenotazione) },
    ...{ class: "col-4 btn text-white btn-red shadow fw-bold py-2" },
});
/** @type {__VLS_StyleScopedClasses['col-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-red']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['fw-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
// @ts-ignore
[logout, logout, updatePrenotazione, deletePrenotazione, deletePrenotazione,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Profilo.vue.js.map