<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { Utente } from '../types';
import { Materia } from '../types';
import { defineComponent } from 'vue';
import { mostraNotifica } from '../notification'; 


// ------------------ VARIABILI DI STATO --------------------------------------
const localita = ref('');
const ora = ref('');
const selectedMateriaId = ref<number | string>("");
const listaMaterie = ref<Materia[]>([]);

// ------------------ CONFIGURAZIONE DATA DINAMICA ---------------------------  
const nomiMesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
const annoCorrente = new Date().getFullYear();
const anniDisponibili = [annoCorrente, annoCorrente + 1];

const selectedAnno = ref(annoCorrente);
const selectedMeseIndex = ref(new Date().getMonth()); // 0 = Gennaio
const selectedGiorno = ref(new Date().getDate());

// -------------------------- Calcolo giorni ----------------------------
const giorniDisponibili = computed(() => {
    // Calcola l'ultimo giorno del mese scelto
    const numeroGiorni = new Date(selectedAnno.value, selectedMeseIndex.value + 1, 0).getDate();
    // Crea array [1, 2, ..., 30, 31]
    return Array.from({ length: numeroGiorni }, (_, i) => i + 1);
});

// -------------------------- Funzioni---------------------------

// Caricamento materie all'avvio
const getDatiIniziali = async () => {
    try {
        const resMaterie = await axios.get('/api/materie');
        listaMaterie.value = resMaterie.data;
    } catch (error) {
        console.error("Errore caricamento dati:", error);
    }
};

// Invio del form
const onSubmit = async () => {
    try {


        // Formattazione Data per MySQL (YYYY-MM-DD)
        // Aggiungiamo 1 al mese perché in JS gennaio è 0
        const meseFormat = String(selectedMeseIndex.value + 1).padStart(2, '0');
        const giornoFormat = String(selectedGiorno.value).padStart(2, '0');
        const dataFormattata = `${selectedAnno.value}-${meseFormat}-${giornoFormat}`;


        // Validazione base
        if (!selectedMateriaId.value || !ora.value || !localita.value) {
            console.log("Campi mancanti:", { selectedMateriaId: selectedMateriaId.value, ora: ora.value, dataFormattata: dataFormattata, localita: localita.value });
            mostraNotifica("Compila tutti i campi!", "error");
            return;
        }

        
        // Invio al backend
        await axios.post("/api/prenotazioni", {
            data: dataFormattata,
            ora: ora.value,
            localita: localita.value,
            id_materia: selectedMateriaId.value
        });
        
        mostraNotifica("Disponibilità inserita con successo!", "success");
        
        // Aspetta 3 secondi e poi va alla homepage
        setTimeout(() => {
            location.href = "/"; 
        }, 3000);

    } catch (e: any) {
        console.error(e);
        if(e.response){
            mostraNotifica(e.response.data.message, "error");
        } else {
            mostraNotifica("Errore di connessione", "error");
        }
    }
};

// Montiamo la funzione
onMounted(() => {
    getDatiIniziali();
});
</script>

<template>
     <main>

        <form class="d-lg-none">

            <div class = "align-items-center text-center mt-5 mb-5" >
                <h1 style=" color:black; font-size: 30px"> Renditi Diponibile </h1>
            </div>

            <div class="row justify-content-center mb-4">
                <div class="col-9 col-md-6 text-white p-4 shadow-lg" style="background-color: #6B0808; border-radius: 20px;">
                    <h2 class="text-center mb-3">Data</h2>
                
                    <div class="row align-items-center">
                        <div class="col-5 text-center border-end border-white">
                            <label class="mb-1 fs-5">Ora</label>
                            <input type="time" class="form-control rounded-pill text-center border-0 fw-bold" v-model="ora">
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
            </div>

            <div class="row justify-content-center align-items-center text-center mb-5 mt-5">
                <div class="col-"></div>
                <div class="col-9 shadow-lg p-4 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">
                    <h2>Località</h2>
                    <div class= "row"> 
                        <div class="pt-3 pb-2 mt-1">
                            <input type="text" name="luogo" v-model="localita" class = "mt-1 input-custom">
                        </div>
                    </div>
                </div>
                <div class="col-"></div>
            </div>

                    
            <div class="row justify-content-center align-items-center text-center mb-2 mt-5"> 
                <div class="col-1"></div>
                <div class="col-9 shadow-lg p-4 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">
                    <h2>Materia</h2>
                    <div class= "row"> 
                        <div class="pt-3 pb-2 mt-1">
                            <select v-model="selectedMateriaId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                                    <option value="" disabled selected>Seleziona Materia</option>
                                    
                                    <option v-for="materia in listaMaterie" :key="materia.Id" :value="materia.Id">
                                        {{ materia.Nome }}
                                    </option>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>

            <button @click.prevent="onSubmit" class="btn btn-danger shadow-lg fw-bold p-1 mb-2" 
            style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto; width: 25%;">
                Conferma
            </button>
        
        </form>

    



        <form class="justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block align-middle">
        
            <div class = "align-items-center text-center mt-5 mb-5" >
                <h1 style=" color:black; font-size: 30px"> Renditi Diponibile </h1>
            </div>

            <div class="row">

                <div class="col-1"></div>

                    <div class="col-4">

                        <div class="row justify-content-center ">
                            <div class="mt-5 text-white p-4 shadow-lg" style="background-color: #6B0808; border-radius: 20px;">
                                <h2 class="text-center mb-3">Data</h2>
                            
                                <div class="row align-items-center">
                                    <div class="col-5 text-center border-end border-white">
                                        <label class="mb-1 fs-5">Ora</label>
                                        <input type="time" class="form-control rounded-pill text-center border-0 fw-bold" v-model="ora">
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
                        </div>

                    </div>

                    <div class="col-2"></div>

                <div class="col-4">

                    <div class="row justify-content-center align-items-center text-center mb-5 mt-5">
                        <div class=" shadow-lg p-4 pb-5 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">
                            <h2>Località</h2>
                            <div class= "row"> 
                                <div class="pt-3 pb-2 mt-1">
                                    <input type="text" name="luogo" v-model="localita"  class = "mt-2 mb-1 input-custom">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-1"></div>

            </div>
            
            <div class="row justify-content-center align-items-center text-center mb-4 mt-5"> 
                <div class="col-3"></div>
                <div class="col-6 shadow-lg p-4 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">
                    <h2>Materia</h2>
                    <div class= "row"> 
                        <div class="pt-3 pb-2 mt-1">
                            <select v-model="selectedMateriaId" class="mt-1 input-base input-wide form-select border-0 fw-bold text-center">
                                    <option value="" disabled selected>Seleziona Materia</option>
                                    
                                    <option v-for="materia in listaMaterie" :key="materia.Id" :value="materia.Id">
                                        {{ materia.Nome }}
                                    </option>
                                
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>

            <button @click.prevent="onSubmit" class="btn btn-danger shadow-lg fw-bold p-1 mb-2" 
            style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto; width: 25%;">
                Conferma
            </button>

        </form>

    </main>
</template>
