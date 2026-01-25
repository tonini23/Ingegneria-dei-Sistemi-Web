<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { Materia } from '../types';
import { Utente } from '../types';


const listaMaterie = ref<Materia[]>([]);
const listaTutors = ref<Utente[]>([]); // Lista grezza dal DB
const currentUserId = ref<number | null>(null); // Il tuo ID

const selectedMateriaId = ref<number | string>("");
const selectedTutorId = ref<number | string>("");

// --- COMPUTED: LISTA FILTRATA ---
// Questa proprietà restituisce la lista dei tutor TRANNE te stesso
const tutorsFiltrati = computed(() => {
    if (!currentUserId.value) return listaTutors.value; // Se non sei loggato, vedi tutti

    return listaTutors.value.filter(utente => utente.id !== currentUserId.value);
});

/*const cercaDisponibilita = async () => {
    try {
        const dataSelezionata = formattaDataPerDb(selectedAnno.value, selectedMeseIndex.value, selectedGiorno.value);
        
        // La chiamata punta alla rotta che abbiamo appena definito
        const response = await axios.get('/api/disponibilita/search', {
            params: {
                data: dataSelezionata,
                id_materia: selectedMateriaId.value,
                id_tutor: selectedTutorId.value,
                luogo: luogoRicerca.value
            }
        });

        risultatiRicerca.value = response.data;

        // Feedback utente
        if (risultatiRicerca.value.length === 0) {
           alert("Nessuna disponibilità trovata per i criteri selezionati (o data futura).");
        }

    } catch (error) {
        console.error("Errore ricerca:", error);
    }
};*/

// --- CHIAMATE API ---
const getDatiIniziali = async () => {
    try {
        // 1. Scarichiamo le Materie
        const resMaterie = await axios.get('/api/materie');
        listaMaterie.value = resMaterie.data;

        // 2. Scarichiamo TUTTI gli utenti
        const resUtenti = await axios.get('/api/utenti');
        listaTutors.value = resUtenti.data;

        // 3. Scarichiamo i TUOI dati (per sapere chi escludere)
        // Usiamo un try/catch interno perché se non sei loggato questa chiamata fallisce (401)
        // ma noi vogliamo mostrare comunque la pagina
        try {
            const resMe = await axios.get('/api/auth/utente');
            currentUserId.value = resMe.data.Id || resMe.data.id;
        } catch (e) {
            console.log("Utente non loggato (modalità ospite)");
        }

    } catch (error) {
        console.error("Errore caricamento dati:", error);
    }
};

//CONFIGURAZIONE SELEZIONE DATA DINAMICA
const nomiMesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];

const annoCorrente = new Date().getFullYear();
const anniDisponibili = [annoCorrente, annoCorrente + 1];
const selectedAnno = ref(annoCorrente);
const selectedMeseIndex = ref(new Date().getMonth()); // 0 = Gennaio, 11 = Dicembre
const selectedGiorno = ref(new Date().getDate());

// Calcola quanti giorni ha il mese scelto
const giorniDisponibili = computed(() => {
    // new Date(anno, mese + 1, 0).getDate() restituisce l'ultimo giorno del mese precedente
    // Esempio: new Date(2025, 2, 0) -> Ultimo giorno di Febbraio 2025 (28)
    const numeroGiorni = new Date(selectedAnno.value, selectedMeseIndex.value + 1, 0).getDate();
    
    // Crea un array da 1 a numeroGiorni [1, 2, ..., 30, 31]
    return Array.from({ length: numeroGiorni }, (_, i) => i + 1);
});

onMounted(() => {
    getDatiIniziali();});

</script>



<template>
    <main>

    <div class="d-lg-none">   

        <div class="align-items-center text-center mt-3 mb-2">
            <h1 class="page-title">
                Trova Disponibilità
            </h1>
        </div>
                
        <div class="row justify-content-center align-items-center text-center mb-2 mt-3">
            <div class="col-5 shadow-lg p-3 mb-1 text-white me-3 filter-box">
                <h2>
                    Data
                </h2>
                <div class="">
                    <div class="d-flex gap-2 mb-2 justify-content-center">
    
    <select v-model="selectedGiorno" class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
        <option v-for="giorno in giorniDisponibili" :key="giorno" :value="giorno">
            {{ giorno }}
        </option>
    </select>

    <select v-model="selectedMeseIndex" class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
        <option v-for="(mese, index) in nomiMesi" :key="index" :value="index">
            {{ mese }}
        </option>
    </select>
</div>

<div class="d-flex justify-content-center">
    <select v-model="selectedAnno" class="form-select rounded-pill border-0 text-center fw-bold w-100">
        <option v-for="anno in anniDisponibili" :key="anno" :value="anno">
            {{ anno }}
        </option>
    </select>
</div>
                </div>     
            </div>
            <div class="col-5 shadow-lg p-4 mb-1 text-white filter-box">
                <h2>
                    Località
                </h2>
                <div class="row">
                    <div class="pt-1 pb-2 mt-1">
                        <input type="text" name="luogo" class="mt-1 input-base input-wide input-custom input-custom">
                    </div>
                </div>
            </div>
        </div>

        <form class="row justify-content-center align-items-center text-center mb-2 mt-3">
            <div class="col-5 shadow-lg p-4 mb-1 text-white me-3 filter-box">
                <h2>
                    Materia
                </h2>
                <div class="row">
                    <div class="pt-1 pb-2 mt-1">
                        <select v-model="selectedMateriaId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                                    <option value="" disabled selected>Seleziona Materia</option>
                                    
                                    <option v-for="materia in listaMaterie" :key="materia.Id" :value="materia.Id">
                                        {{ materia.Nome }}
                                    </option>
                                
                            </select>
                    </div>
                </div>
            </div>
            <div class="col-5 shadow-lg p-4 mb-1 text-white filter-box">
                <h2>
                    Tutor
                </h2>
                <div class="row">
                    <div class="pt-1 pb-2 mt-1">
                       <select v-model="selectedTutorId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                            <option value="" disabled selected>Seleziona Tutor</option>
                            
                            <option v-for="tutor in tutorsFiltrati" :key="tutor.Id" :value="tutor.Id">
                                {{ tutor.Nome }} {{ tutor.Cognome }}
                            </option>
                                    
                        </select>
                    </div>
                </div>        
            </div>
                    
            <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-search">
                Cerca
            </button>
                
            </form>    
            <div class="mb-3 table-responsive"> <table class="table-unibo">
                <thead> <tr>
                    <th></th>
                    <th>Data</th>
                    <th>Ora</th>
                    <th>Luogo</th>
                    <th>Materia</th>
                    <th>Tutor</th>
                </tr>
            </thead>
            <!-- <tbody> 
                <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
                    <td>
                    <input type="radio" name="studente" class="custom-check">
                    </td>
                    <td>{{ prenotazione.Data }}</td>
                    <td>{{ prenotazione.Ora }}</td>
                    <td>{{ prenotazione.Luogo }}</td>
                    <td>{{ prenotazione.Materia }}</td>
                    <td>{{ prenotazione.Tutor }}</td>
                    </tr>
                </tbody>-->
            </table>
        </div>

        <button class="btn btn-danger shadow-lg fw-bold p-1 mb-2" style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
            Conferma
        </button>

    </div>



    <div class="align-items-center text-center mt-5 mb-5 row justify-content-center d-none d-lg-flex">

        <div class="align-items-center text-center mt-3 mb-2">
                <h1 class="page-title">
                    Trova Disponibilità
                </h1>
            </div>
              
        <form class="row justify-content-center align-items-center text-center mb-2 mt-3">
            
            <div class="col-12 col-md-8 text-white p-4 shadow-lg" style="background-color: #6B0808; border-radius: 20px;">
                <h2 class="text-center mb-3">Data</h2>
                
                <div class="row align-items-center">
                    <div class="col-5 text-center border-end border-white">
                        <label class="mb-1 fs-5">Ora</label>
                        <input type="time" class="form-control rounded-pill text-center border-0 fw-bold" value="16:40">
                    </div>

                    <div class="col-7">
                        <div class="d-flex gap-2 mb-2 justify-content-center">
    
    <select v-model="selectedGiorno" class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
        <option v-for="giorno in giorniDisponibili" :key="giorno" :value="giorno">
            {{ giorno }}
        </option>
    </select>

    <select v-model="selectedMeseIndex" class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
        <option v-for="(mese, index) in nomiMesi" :key="index" :value="index">
            {{ mese }}
        </option>
    </select>
</div>

<div class="d-flex justify-content-center">
    <select v-model="selectedAnno" class="form-select rounded-pill border-0 text-center fw-bold w-100">
        <option v-for="anno in anniDisponibili" :key="anno" :value="anno">
            {{ anno }}
        </option>
    </select>
</div>
                    </div>
                </div>
            </div>
                
            <div class="row justify-content-center gap-5 align-items-center text-center mt-4 mb-3">

                    <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
                        <h2>
                            Località
                        </h2>
                        <div class="row">
                            <div class="pt-1 pb-2 mt-1">
                                <input type="text" name="luogo" class="mt-1 input-base input-wide input-custom input-custom">
                            </div>
                        </div>
                    </div>
                

                
                    <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
                        <h2>
                            Materia
                        </h2>
                        <div class="row">
                            <div class="pt-1 pb-2 mt-1">
                                <select v-model="selectedMateriaId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                                    <option value="" disabled selected>Seleziona Materia</option>
                                    
                                    <option v-for="materia in listaMaterie" :key="materia.Id" :value="materia.Id">
                                        {{ materia.Nome }}
                                    </option>
                                
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
                        <h2>
                            Tutor
                        </h2>
                        <div class="row">
                            <div class="pt-1 pb-2 mt-1">
                                <select v-model="selectedTutorId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                                    <option value="" disabled selected>Seleziona Tutor</option>
                                    
                                    <option v-for="tutor in tutorsFiltrati" :key="tutor.Id" :value="tutor.Id">
                                        {{ tutor.Nome }} {{ tutor.Cognome }}
                                    </option>
                                    
                                </select>
                            </div>
                        </div>        
                    </div>

            </div>
                        
                <button class="col-6 btn btn-danger shadow-lg fw-bold p-1 mb-5 btn-search" style="width: 20%;">
                    Cerca
                </button>
                    
            </form>    
                <div class="mb-3 table-responsive"> <table class="table-unibo">
                    <thead> <tr>
                        <th></th>
                        <th>Data</th>
                        <th>Ora</th>
                        <th>Luogo</th>
                        <th>Materia</th>
                        <th>Tutor</th>
                    </tr>
                </thead>
                <!-- <tbody>  <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
                    <td>
                    <input type="radio" name="studente" class="custom-check">
                    </td>
                    <td>{{ prenotazione.Data }}</td>
                    <td>{{ prenotazione.Ora }}</td>
                    <td>{{ prenotazione.Luogo }}</td>
                    <td>{{ prenotazione.Materia }}</td>
                    <td>{{ prenotazione.Tutor }}</td>
                    </tr>
                </tbody>-->
                </table>
            </div>

            <button class="col-6 btn btn-danger shadow-lg fw-bold p-1 mb-5 btn-search" style="width: 20%;">
                    Conferma
            </button>
        </div>
</main>


</template>
