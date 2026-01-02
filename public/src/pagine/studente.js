const Studente = {
    template: `

            <main>
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
                    <input type="text" name="" class="col-3 input-base input-narrow input-custom">
                    <input type="text" name="" class="col-6 input-base input-narrow input-custom">
                    <input type="text" name="" class="col-6 mt-1 input-base input-narrow input-custom">
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
                        <select name="materia" class="mt-1 input-base input-wide">
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                             <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                             <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                             <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
                            <option>123131</option>
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
                        <select name="luogo" class="mt-1 input-base input-wide">
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
                <th>Data</th>
                <th>Ora</th>
                <th>Luogo</th>
                <th>Materia</th>
                <th>Tutor</th>
            </tr>
        </thead>
        <tbody> <tr v-for="prenotazione in prenotazioni" :key="prenotazione.Id">
                <td>{{ prenotazione.Data }}</td>
                <td>{{ prenotazione.Ora }}</td>
                <td>{{ prenotazione.Luogo }}</td>
                <td>{{ prenotazione.Materia }}</td>
                <td>{{ prenotazione.Tutor }}</td>
            </tr>
        </tbody>
    </table>
</div>
</main>

<button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-search mb-2 "
  style="background-color: #6B0808; border-radius: 20px; color: white; display: block; margin-left: auto; margin-right: auto;">
  Conferma
</button>

`

};

export default Studente;
