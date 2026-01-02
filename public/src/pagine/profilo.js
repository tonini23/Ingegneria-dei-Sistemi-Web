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
                <div class="col-12 col-md-12 col-lg-12">
                    
                    <div class="section-header text-center mb-0 border border-white border-bottom-0">
                        Prenotazioni
                    </div>

                    <div class="">
                        <table class="table-unibo">
                            <thead>
                                <tr>
                                    <th ></th>
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

    `
    ,
        data() {
        return {
            prenotazioni: []
    }
    },
    methods: {
        getPrenotazioni: function() {
            axios.get('api/prenotazioni')
             .then(response => {
                console.log("Dati ricevuti:", response.data); // Debug per vedere cosa arriva
                this.prenotazioni = response.data;
             })
             .catch(error => {
                console.error("Errore caricamento:", error);
             });
        },
        deletePrenotazione: function() {
            //logica per eliminare le prenotazioni selezionate
            console.log("Elimina prenotazione");
        },
        updatePrenotazione: function() {
            //logica per modificare le prenotazioni selezionate
            console.log("Modifica prenotazione");
        },
        formattaData: function(dataString) {
            if (!dataString) return ""; 
            
            const data = new Date(dataString); 

            
            // padStart(2, '0') serve ad aggiungere lo zero davanti (es. "5" diventa "05")
            const giorno = String(data.getDate()).padStart(2, '0');
            const mese = String(data.getMonth() + 1).padStart(2, '0'); // I mesi partono da 0 in JS
            const anno = data.getFullYear();

            return `${giorno}-${mese}-${anno}`;
        },
        formattaOra: function(orario) {
            if (!orario) return '-';
            return orario.slice(0, 5);
        }
    },
    mounted() {
        this.getPrenotazioni();
    }
};

export default Profilo;