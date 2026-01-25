<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { format } from 'path';
import { Prenotazione } from '../types';


const prenotazioni = ref<Prenotazione[]>([]);
const currentUserId = ref<number | null>(null);
  
// Funzione per formattare la data
const formattaData = (dataString: string) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    const giorno = String(data.getDate()).padStart(2, '0');
    const mese = String(data.getMonth() + 1).padStart(2, '0');
    const anno = data.getFullYear();
    return `${giorno}-${mese}-${anno}`;
};

// Funzione per formattare l'ora (toglie :00 finale)
const formattaOra = (oraString: string) => {
    if (!oraString) return "";
    // Prende solo i primi 5 caratteri (es. "16:30")
    return oraString.slice(0, 5); 
};


const getUtenteAndPrenotazioni = async () => {
    try {
        const resUtente = await axios.get('/api/auth/utente');
        
        currentUserId.value = resUtente.data.Id || resUtente.data.id;

        if (currentUserId.value) {
            await getPrenotazioni(currentUserId.value);
        }
    } catch (error) {
        console.error("Errore recupero utente:", error);
        // Se non è loggato, magari rimandiamo al login o non mostriamo nulla
    }
};

// Funzione che scarica le prenotazioni passando l'ID
const getPrenotazioni = async (id: number) => {
   try {
        const response = await axios.get(`/api/prenotazioni/${id}`);
        console.log("Prenotazioni ricevute:", response.data);
        prenotazioni.value = response.data;
    } catch (error) {
        console.error("Errore caricamento prenotazioni:", error);
    }
};

const updatePrenotazione = () => { console.log("Modifica"); };

const logout = async () => {
    try {
        await axios.post('/api/auth/logout');
        location.href = '/login'; // Meglio di reload per pulire lo stato
    } catch (error) {
        console.error("Errore logout:", error);
    }
}

onMounted(() => {
    getUtenteAndPrenotazioni();
});
</script>

<template>
  <main class="container mt-4 mb-5">

    <div class="d-lg-none">
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
                  <label class="ms-0 w-25 text-start" for="Nome_">Nome</label>
                  <input type="text" class="profile-input" name="Nome" id="Nome_" value="Marco">
                </div>
                <div class="d-flex align-items-center mb-2">
                  <label class="w-25 text-start" for="Cognome_">Cognome</label>
                  <input type="text" class="profile-input" name="Cognome" id="Cognome_" value="Rossi">
                </div>
                <div class="d-flex align-items-center mb-2">
                  <label class="w-25 text-start" for="Email_">Email</label>
                  <input type="text" class="profile-input" name="Email" id="Email_" value="marco.rossi@studio.unibo.it">
                </div>
                <div class="d-flex align-items-center">
                  <label class="w-25 text-start" for="Matricola_">Matricola</label>
                  <input type="text" class="profile-input" name="Matricola" id="Matricola" value="1234567890" readonly>
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
        <button @click="logout" class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 60%; border-radius: 20px;">
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
                  <th><input type="checkbox" class="custom-check"></th>
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
                          <td>{{ formattaOra(prenotazione.Ora) }}</td>
                          
                          <td>{{ prenotazione.Localita }}</td>
                          
                          <td>{{ prenotazione.materia_nome }}</td>
                          
                          <td>
                              {{ prenotazione.nome_studente }} {{ prenotazione.cognome_studente }}
                          </td>
                                                    <td>
                            <span v-if="prenotazione.id_tutor == currentUserId" class="badge bg-warning text-dark">
                                Sei il Tutor
                            </span>
                            <span v-else class="badge bg-danger">
                                Sei lo Studente
                            </span>
                          </td>
                      </tr>
                      
                      <tr v-if="prenotazioni.length === 0">
                          <td colspan="6" class="text-center py-3">Nessuna prenotazione trovata</td>
                      </tr>
                </tbody>
            </table>
          </div>

          <div class="row justify-content-center mt-3 gap-4">
            <button class="col-4 btn btn-blue shadow fw-bold py-2" @click="updatePrenotazione">
              Modifica
            </button>
            <button class="col-4 btn btn-red shadow fw-bold py-2" >
              Elimina
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="justify-content-center align-items-center text-center my-5 d-none d-lg-block">
      <div class="text-center mb-4">
        <h1 class="title-custom fw-bold">Profilo</h1>
      </div>
      <div class="row my-5">
        <div class="col-6">
          <div class="row justify-content-center mb-4">
            <div class="col-12">
              <div class="filter-box p-5 text-white">
                <div class="row align-items-center">
                  <div class="col-3 text-center">
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Foto Profilo" class="profile-img shadow-lg">
                  </div>
                  <div class="col-9">
                    <div class="d-flex align-items-center mb-3">
                      <label class="ms-0 w-25 text-start" for="Nome" >Nome</label>
                      <input type="text" class="profile-input" name="Nome" id="Nome" value="Marco">
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <label class="w-25 text-start" for="Cognome">Cognome</label>
                      <input type="text" class="profile-input" name="Cognome" id="Cognome" value="Rossi">
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <label class="w-25 text-start" for="Email">Email</label>
                      <input type="text" class="profile-input" name="Email" id="Email" value="marco.rossi@studio.unibo.it">
                    </div>
                    <div class="d-flex align-items-center">
                      <label class="w-25 text-start" for="Matricola">Matricola</label>
                      <input type="text" class="profile-input" name="Matricola" id="Matricola" value="1234567890" readonly>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-5 mb-4 gap-3">
            <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 40%; border-radius: 20px;">
              Modifica Dati
            </button>
            <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 40%; border-radius: 20px;">
              Modifica Immagine
            </button>
          </div>

          <div class="row justify-content-center mb-5 gap-3">
            <button @click="logout" class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; width: 60%; border-radius: 20px;">
              Logout
            </button>
          </div>
        </div>  

        <div class="col-6">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10">
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
                      <th>Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
                          <td>
                              <input type="checkbox" class="custom-check">
                          </td>
                          <td>{{ formattaData(prenotazione.Data) }}</td>
                          <td>{{ formattaOra(prenotazione.Ora) }}</td>
                          
                          <td>{{ prenotazione.Localita }}</td>
                          
                          <td>{{ prenotazione.materia_nome }}</td>
                          
                          <td>
                              {{ prenotazione.nome_studente }} {{ prenotazione.cognome_studente }}
                          </td>
                          <td>
                            <span v-if="prenotazione.id_tutor == currentUserId" class="badge bg-warning text-dark">
                                Sei il Tutor
                            </span>
                            <span v-else class="badge bg-danger">
                                Sei lo Studente
                            </span>
                          </td>
                      </tr>
                      
                      <tr v-if="prenotazioni.length === 0">
                          <td colspan="6" class="text-center py-3">Nessuna prenotazione trovata</td>
                      </tr>
                  </tbody>
                </table>
              </div>

              
            </div>
        </div>
        </div>
    </div>
  </div>








  







  </main>
</template>