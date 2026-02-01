<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { Materia } from '../types';
import { Utente } from '../types';
import { Prenotazione } from '../types';
import { mostraNotifica } from '../notification';
import { auth } from '../stores/auth';


// Interfaccia estesa per le prenotazioni con compatibilità
interface PrenotazioneConMatch extends Prenotazione {
    matchPercentage?: number;
}

// Questa proprietà restituisce la lista dei tutor TRANNE l'utente corrente
const tutorsFiltrati = computed(() => {
    if (!currentUserId.value) return listaTutors.value; // Se non sei loggato, vedi tutti

    return listaTutors.value.filter(utente => utente.Id !== currentUserId.value);
});

const listaMaterie = ref<Materia[]>([]);
const listaTutors = ref<Utente[]>([]);
const prenotazioni = ref<Prenotazione[]>([]); // Risultati ricerca
const selectedSlotId = ref<number | null>(null); // ID della lezione scelta (Radio button)

const selectedMateriaId = ref<number | string>("");
const selectedTutorId = ref<number | string>("");
const selectedLocalita = ref<string>("");
const currentUserId = ref<number | null>(null);

// Flag per filtrare per data
const filterByDate = ref<boolean>(false);

const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

// Funzione per formattare la data
const formattaData = (dataString: string) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    const giorno = String(data.getDate()).padStart(2, "0");
    const mese = String(data.getMonth() + 1).padStart(2, "0");
    const anno = data.getFullYear();
    return `${giorno}-${mese}-${anno}`;
};

// Funzione per formattare l'ora (toglie :00 finale)
const formattaOra = (oraString: string) => {
    if (!oraString) return "";
    // Prende solo i primi 5 caratteri (es. "16:30")
    return oraString.slice(0, 5);
};

const calcolaCompatibilita = (prenotazione: any, filtri: any): number => {
    // Prima conta i filtri attivi
    let filtriAttivi = 0;
    if (filtri.data) filtriAttivi++;
    if (filtri.id_materia) filtriAttivi++;
    if (filtri.id_tutor) filtriAttivi++;
    if (filtri.localita) filtriAttivi++;

    // Se non ci sono filtri attivi, tutti hanno 100%
    if (filtriAttivi === 0) {
        return 100;
    }

    // Calcola il peso per ogni filtro (distribuzione equa)
    const pesoPerFiltro = 100 / filtriAttivi;
    
    let punti = 0;

    // Filtro DATA
    if (filtri.data) {
        const date = new Date(prenotazione.Data);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dataPrenotazione = `${year}-${month}-${day}`;
        const dataFiltro = filtri.data;
        
        if (dataPrenotazione === dataFiltro) {
            punti += pesoPerFiltro;
        }

    }

    // Filtro MATERIA
    if (filtri.id_materia) {
        const materiaPrenotazione = Number(prenotazione.id_materia);
        const materiaFiltro = Number(filtri.id_materia);
        
        if (materiaPrenotazione === materiaFiltro) {
            punti += pesoPerFiltro;
        }
    }

    // Filtro TUTOR
    if (filtri.id_tutor) {
        const tutorPrenotazione = Number(prenotazione.id_tutor);
        const tutorFiltro = Number(filtri.id_tutor);
        
        if (tutorPrenotazione === tutorFiltro) {
            punti += pesoPerFiltro;
        }
    }

    // Filtro LOCALITÀ (con match parziale)
    if (filtri.localita) {
        const localitaPrenotazione = prenotazione.Localita?.toLowerCase() || '';
        const localitaFiltro = filtri.localita.toLowerCase();
        
        // Match esatto
        if (localitaPrenotazione === localitaFiltro) {
            punti += pesoPerFiltro;
        }
        // Match parziale (contiene la parola) - 75% del peso
        else if (localitaPrenotazione.includes(localitaFiltro)) {
            punti += pesoPerFiltro * 0.75;
        }
        // Match molto parziale (inizia con) - 50% del peso
        else if (localitaPrenotazione.startsWith(localitaFiltro)) {
            punti += pesoPerFiltro * 0.5;
        }
    }

    return Math.round(punti);
};

const getMatchColor = (percentage?: number): string => {
    if (!percentage) return 'bg-secondary';
    if (percentage >= 90) return 'bg-success';
    if (percentage >= 70) return 'bg-primary';
    if (percentage >= 50) return 'bg-warning';
    return 'bg-danger';
};



// --- CARICAMENTO INIZIALE ---
onMounted(async () => {
    try {
        const userRes = await axios.get('/api/auth/utente');
        currentUserId.value = userRes.data.Id || userRes.data.id;

        const matRes = await axios.get('/api/materie');
        listaMaterie.value = matRes.data;

        // Carica gli utenti
        const utentiRes = await axios.get('/api/utenti');
        const tuttiUtenti = utentiRes.data;

        // Cerca nelle disponibilità per trovare gli ID dei tutor
        const dispRes = await axios.get('/api/disponibilita/cerca');
        const disponibilita = dispRes.data;

        // Estrai gli ID univoci dei tutor
        const tutorIds = [...new Set(disponibilita.map((d: any) => d.id_tutor))];

        // Filtra gli utenti per ottenere solo i tutor
        listaTutors.value = tuttiUtenti.filter((u: any) => tutorIds.includes(u.Id));

        console.log("Lista tutor caricata:", listaTutors.value);

    } catch (error) {
        console.error("Errore init", error);
    }
});

// --- FUNZIONE CERCA ---
const cercaDisponibilita = async () => {
    try {
        // NON inviamo filtri al backend - prendiamo TUTTO
        // e filtriamo/ordiniamo lato client per la compatibilità
        const res = await axios.get('/api/disponibilita/cerca');

        // Costruisci l'oggetto filtri per il calcolo compatibilità
        const filtri: any = {};

        if (filterByDate.value && selectedGiorno.value && selectedMeseIndex.value !== null && selectedAnno.value) {
            const mese = String(selectedMeseIndex.value + 1).padStart(2, '0');
            const giorno = String(selectedGiorno.value).padStart(2, '0');
            filtri.data = `${selectedAnno.value}-${mese}-${giorno}`;
        }

        if (selectedMateriaId.value) filtri.id_materia = selectedMateriaId.value;
        if (selectedTutorId.value) filtri.id_tutor = selectedTutorId.value;
        if (selectedLocalita.value) filtri.localita = selectedLocalita.value;

        // Calcola la compatibilità per ogni prenotazione
        const prenotazioniConMatch = res.data.map((p: any) => ({
            ...p,
            matchPercentage: calcolaCompatibilita(p, filtri)
        }));

        // Ordina per percentuale di compatibilità (dal più alto al più basso)
        prenotazioniConMatch.sort((a: any, b: any) => b.matchPercentage - a.matchPercentage);

        prenotazioni.value = prenotazioniConMatch;
        selectedSlotId.value = null;

        if (prenotazioni.value.length === 0) {
            mostraNotifica("Nessuna disponibilità trovata.", "error");
        } else {
            const haFiltri = Object.keys(filtri).length > 0;
            if (haFiltri) {
                const miglioreMatch = prenotazioni.value[0].matchPercentage;
                mostraNotifica(
                    `Trovate ${prenotazioni.value.length} disponibilità. Migliore compatibilità: ${miglioreMatch}%`,
                    "success"
                );
            }
        }

    } catch (error) {
        console.error(error);
        mostraNotifica("Errore durante la ricerca", "error");
    }
};

// --- FUNZIONE PRENOTA ---
const confermaPrenotazione = async () => {
    if (!selectedSlotId.value) {
        mostraNotifica("Seleziona una lezione dalla tabella prima di confermare.", "error");
        return;
    }
    if (!auth.isLoggedIn) {
        mostraNotifica("Devi essere loggato per prenotare una lezione.", "error");
        return;
    }

    try {
        await axios.put(`/api/prenotazioni/${selectedSlotId.value}/prenota`);
        mostraNotifica("Lezione prenotata con successo!", "success");

        prenotazioni.value = prenotazioni.value.filter(p => p.Id !== selectedSlotId.value);
        selectedSlotId.value = null;

    } catch (error: any) {
        console.error(error);
        const msg = error.response?.data?.message || "Errore prenotazione";
        mostraNotifica(msg, "error");
    }
};

// CONFIGURAZIONE DATA
const nomiMesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];

const annoCorrente = new Date().getFullYear();
const anniDisponibili = [annoCorrente, annoCorrente + 1];
const selectedAnno = ref(annoCorrente);
const selectedMeseIndex = ref(new Date().getMonth());
const selectedGiorno = ref(new Date().getDate());

const giorniDisponibili = computed(() => {
    const numeroGiorni = new Date(selectedAnno.value, selectedMeseIndex.value + 1, 0).getDate();
    return Array.from({ length: numeroGiorni }, (_, i) => i + 1);
});
</script>

<template>
  <main>
    <div class="d-lg-none">
      <div class="align-items-center text-center mt-3 mb-2">
        <h1 class="page-title">Trova Disponibilità</h1>
      </div>

      <div
        class="row justify-content-center align-items-center text-center mb-2 mt-3"
      >
        <div class="col-5 shadow-lg p-3 mb-1 text-white me-3 filter-box">
          <h2>Data</h2>

          <div class="mb-2">
            <label
              class="d-flex align-items-center justify-content-center gap-2"
            >
              <input
                type="checkbox"
                v-model="filterByDate"
                class="form-check-input"
              />
              <span>Filtra per data</span>
            </label>
          </div>

          <div class="" :class="{ 'opacity-50': !filterByDate }">
            <div class="d-flex gap-2 mb-2 justify-content-center">
              <select
                v-model="selectedGiorno"
                class="form-select rounded-pill border-0 text-center fw-bold"
                style="width: 48%"
                :disabled="!filterByDate"
              >
                <option
                  v-for="giorno in giorniDisponibili"
                  :key="giorno"
                  :value="giorno"
                >
                  {{ giorno }}
                </option>
              </select>

              <select
                v-model="selectedMeseIndex"
                class="form-select rounded-pill border-0 text-center fw-bold"
                style="width: 48%"
                :disabled="!filterByDate"
              >
                <option
                  v-for="(mese, index) in nomiMesi"
                  :key="index"
                  :value="index"
                >
                  {{ mese }}
                </option>
              </select>
            </div>

            <div class="d-flex justify-content-center">
              <select
                v-model="selectedAnno"
                class="form-select rounded-pill border-0 text-center fw-bold w-100"
                :disabled="!filterByDate"
              >
                <option
                  v-for="anno in anniDisponibili"
                  :key="anno"
                  :value="anno"
                >
                  {{ anno }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-5 shadow-lg p-4 mb-1 text-white filter-box">
          <h2>Località</h2>
          <div class="row">
            <div class="pt-1 pb-2 mt-1">
              <input
                type="text"
                v-model="selectedLocalita"
                name="luogo"
                placeholder="Es. Bologna"
                class="mt-1 input-base input-custom"
              />
            </div>
          </div>
        </div>
      </div>

      <form
        class="row justify-content-center align-items-center text-center mb-2 mt-3"
        @submit.prevent="cercaDisponibilita"
      >
        <div class="col-5 shadow-lg p-4 mb-1 text-white me-3 filter-box">
          <h2>Materia</h2>
          <div class="row">
            <div class="pt-1 pb-2 mt-1">
              <select
                v-model="selectedMateriaId"
                class="mt-1 input-base form-select border-0 fw-bold text-center"
              >
                <option value="" disabled selected>Seleziona Materia</option>

                <option
                  v-for="materia in listaMaterie"
                  :key="materia.Id"
                  :value="materia.Id"
                >
                  {{ materia.Nome }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-5 shadow-lg p-4 mb-1 text-white filter-box">
          <h2>Tutor</h2>
          <div class="row">
            <div class="pt-1 pb-2 mt-1">
              <select
                v-model="selectedTutorId"
                class="mt-1 input-base form-select border-0 fw-bold text-center"
              >
                <option value="" disabled selected>Seleziona Tutor</option>

                <option
                  v-for="tutor in tutorsFiltrati"
                  :key="tutor.Id"
                  :value="tutor.Id"
                >
                  {{ tutor.Nome }} {{ tutor.Cognome }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-cerca"
        >
          Cerca
        </button>
      </form>
      <div class="mb-3 table-responsive">
        <table class="table-unibo">
          <thead>
            <tr>
              <th></th>
              <th>Match</th>
              <th>Data</th>
              <th>Ora</th>
              <th>Luogo</th>
              <th>Materia</th>
              <th>Tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
              <td>
                <input
                  type="radio"
                  name="studente"
                  class="custom-check"
                  :value="prenotazione.Id"
                  v-model="selectedSlotId"
                />
              </td>
              <td>
                <span
                  class="badge"
                  :class="getMatchColor(prenotazione.matchPercentage)"
                >
                  {{ prenotazione.matchPercentage }}%
                </span>
              </td>
              <td>{{ formattaData(prenotazione.Data) }}</td>
              <td>{{ formattaOra(prenotazione.Ora) }}</td>
              <td>{{ prenotazione.Localita }}</td>
              <td>{{ prenotazione.materia_nome }}</td>
              <td>
                {{ prenotazione.tutor_nome }} {{ prenotazione.tutor_cognome }}
              </td>
            </tr>
            <tr v-if="prenotazioni.length === 0">
              <td colspan="6" class="text-center py-3">
                Clicca sul tasto "Cerca" per trovare disponibilità senza filtri.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <button
          class="btn btn-danger shadow-lg fw-bold py-2 px-4"
          :disabled="!selectedSlotId"
          @click="confermaPrenotazione"
        >
          Conferma
        </button>
      </div>
    </div>

    <div
      class="align-items-center text-center mt-5 mb-5 row justify-content-center d-none d-lg-flex"
    >
      <div class="align-items-center text-center mt-3 mb-2">
        <h1 class="page-title">Trova Disponibilità</h1>
      </div>

      <form
        class="row justify-content-center align-items-center text-center mb-2 mt-3"
        @submit.prevent="cercaDisponibilita"
      >
        <div
          class="col-12 col-md-8 text-white p-4 shadow-lg"
          style="background-color: #6b0808; border-radius: 20px"
        >
          <h2 class="text-center mb-3">Data</h2>

          <div class="mb-2 text-center">
            <label class="d-inline-flex align-items-center gap-2">
              <input
                type="checkbox"
                v-model="filterByDate"
                class="form-check-input"
              />
              <span>Filtra per data</span>
            </label>
          </div>

          <div
            class="row align-items-center"
            :class="{ 'opacity-50': !filterByDate }"
          >
            
             <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="d-flex gap-2 mb-2 justify-content-center">
                <select
                  v-model="selectedGiorno"
                  class="form-select rounded-pill border-0 text-center fw-bold"
                  style="width: 48%"
                  :disabled="!filterByDate"
                >
                  <option
                    v-for="giorno in giorniDisponibili"
                    :key="giorno"
                    :value="giorno"
                  >
                    {{ giorno }}
                  </option>
                </select>

                <select
                  v-model="selectedMeseIndex"
                  class="form-select rounded-pill border-0 text-center fw-bold"
                  style="width: 48%"
                  :disabled="!filterByDate"
                >
                  <option
                    v-for="(mese, index) in nomiMesi"
                    :key="index"
                    :value="index"
                  >
                    {{ mese }}
                  </option>
                </select>
              </div>

              <div class="d-flex justify-content-center">
                <select
                  v-model="selectedAnno"
                  class="form-select rounded-pill border-0 text-center fw-bold w-100"
                  :disabled="!filterByDate"
                >
                  <option
                    v-for="anno in anniDisponibili"
                    :key="anno"
                    :value="anno"
                  >
                    {{ anno }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          class="row justify-content-center gap-5 align-items-center text-center mt-4 mb-3"
        >
          <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
            <h2>Località</h2>
            <div class="row">
              <div class="pt-1 pb-2 mt-1">
                <input
                  type="text"
                  v-model="selectedLocalita"
                  name="luogo"
                  placeholder="Es. Bologna"
                  class="mt-1 input-base input-custom"
                />
              </div>
            </div>
          </div>

          <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
            <h2>Materia</h2>
            <div class="row">
              <div class="pt-1 pb-2 mt-1">
                <select
                  v-model="selectedMateriaId"
                  class="mt-1 input-base form-select border-0 fw-bold text-center"
                >
                  <option value="" disabled selected>Seleziona Materia</option>

                  <option
                    v-for="materia in listaMaterie"
                    :key="materia.Id"
                    :value="materia.Id"
                  >
                    {{ materia.Nome }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-3 shadow-lg p-4 mb-1 text-white filter-box">
            <h2>Tutor</h2>
            <div class="row">
              <div class="pt-1 pb-2 mt-1">
                <select
                  v-model="selectedTutorId"
                  class="mt-1 input-base form-select border-0 fw-bold text-center"
                >
                  <option value="" disabled selected>Seleziona Tutor</option>

                  <option
                    v-for="tutor in tutorsFiltrati"
                    :key="tutor.Id"
                    :value="tutor.Id"
                  >
                    {{ tutor.Nome }} {{ tutor.Cognome }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="col-6 btn btn-danger shadow-lg fw-bold p-1 mb-5 btn-cerca"
          style="width: 20%"
        >
          Cerca
        </button>
      </form>
      <div class="mb-3 table-responsive">
        <table class="table-unibo">
          <thead>
            <tr>
              <th></th>
              <th>Match</th>
              <th>Data</th>
              <th>Ora</th>
              <th>Luogo</th>
              <th>Materia</th>
              <th>Tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
              <td>
                <input
                  type="radio"
                  name="studente"
                  class="custom-check"
                  :value="prenotazione.Id"
                  v-model="selectedSlotId"
                />
              </td>
              <td>
                <span
                  class="badge"
                  :class="getMatchColor(prenotazione.matchPercentage)"
                >
                  {{ prenotazione.matchPercentage }}%
                </span>
              </td>
              <td>{{ formattaData(prenotazione.Data) }}</td>
              <td>{{ formattaOra(prenotazione.Ora) }}</td>
              <td>{{ prenotazione.Localita }}</td>
              <td>{{ prenotazione.materia_nome }}</td>
              <td>
                {{ prenotazione.tutor_nome }} {{ prenotazione.tutor_cognome }}
              </td>
            </tr>

            <tr v-if="prenotazioni.length === 0">
              <td colspan="6" class="text-center py-3">
                Clicca sul tasto "Cerca" per trovare disponibilità senza filtri.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        @click="confermaPrenotazione"
        :disabled="!selectedSlotId"
        class="col-6 btn btn-danger shadow-lg fw-bold p-1 mb-5 btn-cerca align-center"
        style="width: 20%" 
      >
        Conferma
      </button>
    </div>
  </main>
</template>