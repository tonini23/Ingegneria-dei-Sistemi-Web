import { reactive } from 'vue';


export const statoNotifica = reactive({
    show: false,
    message: '',
    type: 'success' 
});

let timeoutId: any;


export const mostraNotifica = (message: string, type: 'success' | 'error' = 'success') => {
    statoNotifica.message = message;
    statoNotifica.type = type;
    statoNotifica.show = true;

    // Resetta il timer precedente se l'utente clicca velocemente
    if (timeoutId) clearTimeout(timeoutId);

    // Nascondi automaticamente dopo 4 secondi
    timeoutId = setTimeout(() => {
        statoNotifica.show = false;
    }, 4000);
};