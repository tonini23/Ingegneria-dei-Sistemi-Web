<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Definizione delle variabili reattive
const prenotazioni = ref<any[]>([]);

// Funzione per formattare la data
const formattaData = (dataString: string) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    const giorno = String(data.getDate()).padStart(2, '0');
    const mese = String(data.getMonth() + 1).padStart(2, '0');
    const anno = data.getFullYear();
    return `${giorno}-${mese}-${anno}`;
};

// Funzione per caricare i dati dal Backend
const getPrenotazioni = async () => {
    try {
        // NOTA: Assicurati che il percorso API sia corretto (es. http://localhost:3000/api/...)
        // In sviluppo potresti dover configurare un proxy su vite.config.ts
        const response = await axios.get('/api/prenotazioni');
        console.log("Dati ricevuti:", response.data);
        prenotazioni.value = response.data;
    } catch (error) {
        console.error("Errore caricamento:", error);
    }
};

const deletePrenotazione = () => {
    console.log("Elimina prenotazione");
};

const updatePrenotazione = () => {
    console.log("Modifica prenotazione");
};

// Lifecycle Hook: Carica i dati quando il componente è montato
onMounted(() => {
    getPrenotazioni();
});
</script>

<template>
  <main class="container mt-4 mb-5">
    <div class="text-center mb-4">
      <h1 class="title-custom fw-bold">Profilo</h1>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="filter-box p-4 text-white">
          <div class="row align-items-center">
            <div class="col-3 text-center">
              <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Foto Profilo" class="profile-img shadow-lg">
            </div>
            <div class="col-9">
              <div class="d-flex align-items-center mb-2">
                <label class="ms-0 w-25 text-start">Nome</label>
                <input type="text" class="profile-input" value="Marco">
              </div>
              <div class="d-flex align-items-center mb-2">
                <label class="w-25 text-start">Cognome</label>
                <input type="text" class="profile-input" value="Rossi">
              </div>
              <div class="d-flex align-items-center mb-2">
                <label class="w-25 text-start">Email</label>
                <input type="text" class="profile-input" value="marco.rossi@studio.unibo.it">
              </div>
              <div class="d-flex align-items-center">
                <label class="w-25 text-start">Matricola</label>
                <input type="text" class="profile-input" value="1234567890" readonly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mb-3 gap-3">
      <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 40%; border-radius: 20px;">
        Modifica Dati
      </button>
      <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 40%; border-radius: 20px;">
        Modifica Immagine
      </button>
    </div>

    <div class="row justify-content-center mb-5 gap-3">
      <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 60%; border-radius: 20px;">
        Logout
      </button>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="section-header text-center mb-0 border border-white border-bottom-0">
          Prenotazioni
        </div>
        <div class="">
          <table class="table-unibo">
            <thead>
              <tr>
                <th></th>
                <th>Data</th>
                <th>Ora</th>
                <th>Località</th>
                <th>Materia</th>
                <th>Studente</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
                <td>
                  <input type="checkbox" class="custom-check">
                </td>
                <td>{{ formattaData(prenotazione.Data) }}</td>
                <td>{{ prenotazione.Ora }}</td>
                <td>{{ prenotazione.Localita }}</td>
                <td>{{ prenotazione.Materia }}</td>
                <td>{{ prenotazione.studente }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="row justify-content-center mt-3 gap-4">
          <button class="col-4 btn btn-blue shadow fw-bold py-2" @click="updatePrenotazione">
            Modifica
          </button>
          <button class="col-4 btn btn-red shadow fw-bold py-2" @click="deletePrenotazione">
            Elimina
          </button>
        </div>
      </div>
    </div>
  </main>
</template>