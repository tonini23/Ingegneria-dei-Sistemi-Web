





















const Studente = {
    template: `

           <main>
        <div class = "align-items-center text-center mt-5 mb-5" >
            <h1 style=" color:black; font-size: 30px"> Renditi Diponibile </h1>
        </div>

<div class="row justify-content-center mb-4">
        <div class="col-10 col-md-6 text-white p-4 shadow-lg" style="background-color: #6B0808; border-radius: 20px;">
            <h2 class="text-center mb-3">Data</h2>
            
            <div class="row align-items-center">
                <div class="col-5 text-center border-end border-white">
                    <label class="mb-1 fs-5">Ora</label>
                    <input type="time" class="form-control rounded-pill text-center border-0 fw-bold" value="16:40">
                </div>

                <div class="col-7">
                    <div class="d-flex gap-2 mb-2 justify-content-center">
                        <select class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
                            <option>29</option>
                            <option>30</option>
                        </select>
                        <select class="form-select rounded-pill border-0 text-center fw-bold" style="width: 48%;">
                            <option>Nov</option>
                            <option>Dic</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-center">
                        <select class="form-select rounded-pill border-0 text-center fw-bold w-100">
                            <option>2025</option>
                            <option>2026</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

            <div class="row justify-content-center align-items-center text-center mb-5 mt-5">

                <div class="col-2"></div>

                <div class="col-8 shadow-lg p-3 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">

                    <h2>Località</h2>
                    
                    <div class= "row"> 
                        <div class="pt-1 pb-2 mt-1">
                            <input type="text" name="luogo" class = "mt-1 input-custom">
                        </div>
                    </div>
                </div>

                <div class="col-2"></div>

            </div>

            <div class="row justify-content-center align-items-center text-center mb-5 mt-5">

                <div class="col-2"></div>

                <div class="col-8 shadow-lg p-3 mb-1 text-white" style="background-color: #6B0808; border-radius: 20px;">

                    <h2>Materia</h2>
                    
                    <div class= "row"> 
                        <div class="pt-1 pb-2 mt-1">
                            <input type="text" name="materia" class = "mt-1 input-custom">
                        </div>
                    </div>
                </div>

                <div class="col-2"></div>

            </div>
</main>

`
    
};

export default Studente;