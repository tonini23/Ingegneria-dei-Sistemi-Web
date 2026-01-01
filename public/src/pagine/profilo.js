//import { allPrenotazioniUtente } from "../../../server/controllers/profiloController";

const Profilo = {
    template:
        `

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
                                    <label class="ms-0 w-25 text-start" >Nome</label>
                                    <input type="text" class="profile-input" value="Marco" readonly>
                                </div>

                                <div class="d-flex align-items-center mb-2">
                                    <label class="w-25 text-start">Cognome</label>
                                    <input type="text" class="profile-input" value="Rossi" readonly>
                                </div>

                                <div class="d-flex align-items-center mb-2">
                                    <label class="w-25 text-start">Email</label>
                                    <input type="text" class="profile-input" value="marco.rossi@studio.unibo.it" readonly style="font-size: 0.8rem;">
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

            <div class="row justify-content-center mb-5 gap-3">
                <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; border-radius: 20px;">
                    Modifica Dati
                </button>
                <button class="col-5 btn text-white shadow fw-bold py-2" style="background-color: #6B0808; border-radius: 20px;">
                    Modifica Immagine
                </button>
            </div>

            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    
                    <div class="section-header text-center mb-0 border border-white border-bottom-0">
                        Prenotazioni
                    </div>

                    <div class="t">
                        <table class="table-unibo">
                            <thead>
                                <tr>
                                    <th ></th>
                                    <th>Data</th>
                                    <th>Località</th>
                                    <th>Materia</th>
                                    <th>Studente</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="prenotazione in prenotazioni" :key="prenotazione.id">
                                    <td>
                                        <input type="checkbox" class="custom-check">
                                    </td>
                                    <td>{{ prenotazione.data }}</td>
                                    <td>{{ prenotazione.localita }}</td>
                                    <td>{{ prenotazione.materia }}</td>
                                    <td>{{ prenotazione.studente }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="row justify-content-center mt-3 gap-4">
                        <button class="col-4 btn btn-blue shadow fw-bold py-2">
                            Modifica
                        </button>
                        <button class="col-4 btn btn-red shadow fw-bold py-2">
                            Elimina
                        </button>
                    </div>

                </div>
            </div>

        </main>

    `
    ,
    methods: {
        getAllPrenotazioni: function() {
            //axios.get('/profilo')
        },
        deletePrenotazione: function() {
            //logica per eliminare le prenotazioni selezionate
        },
        updatePrenotazione: function() {
            //logica per modificare le prenotazioni selezionate
        }
    }
};

export default Profilo;