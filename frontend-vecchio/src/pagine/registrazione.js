const Registrazione = {
    template:
        `

        <main>
        <div class="d-lg-none">
          <div class="align-items-center text-center mt-5 mb-5">
            <h1 class="title-custom">
              Registrati
            </h1>
          </div>

          <form action="" class="align-items-center text-center mb-4">
            <div class="mb-4 d-flex justify-content-center align-items-center">
              <label for="nome" class="fw-bold label-custom">
                Nome
              </label>
              <input type="text" class="input-custom" name="nome">
            </div>
            <div class="mb-4 d-flex justify-content-center align-items-center">
              <label for="cognome" class="fw-bold label-custom">
                Cognome
              </label>
              <input type="text" class="input-custom" name="cognome">
            </div>
            <div class="mb-4 d-flex justify-content-center align-items-center">
              <label for="matricola" class="fw-bold label-custom">
                Matricola
              </label>
              <input type="number" class="input-custom" name="matricola">
            </div>
            <div class="mb-4 d-flex justify-content-center align-items-center">
              <label for="email" class="fw-bold label-custom">
                Email
              </label>
              <input type="email" class="input-custom" name="email">
            </div>
            <div class="mb-4 d-flex justify-content-center align-items-center">
              <label for="password" class="fw-bold label-custom">
                Password
              </label>
              <input type="password" class="input-custom" name="password">
            </div>
            <div class="mb-5 d-flex justify-content-center align-items-center">
              <label for="conferma_password" class="fw-bold label-custom">
                Conferma
                <br>
                Password
              </label>
              <input type="password" class="input-custom" name="conferma_password">
            </div>
            <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm">
              Conferma
            </button>
          </form>
        </div>



        <div class="justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block">
        
          <div class="align-items-center text-center mt-5 mb-5">
            <h1 class="title-custom">
              Registrati
            </h1>
          </div>

          <form action="" class="align-items-center text-center mb-4">

              <div class="row row-gap-5 d-flex justify-content-center align-items-center">

                <div class="row col-5 row-gap-5 mb-5">

                  <div>
                    <label for="nome" class="fw-bold label-custom">
                      Nome
                    </label>
                    <input type="text" class="input-custom" name="nome">
                  </div>
                  <div>
                    <label for="cognome" class="fw-bold label-custom">
                      Cognome
                    </label>
                    <input type="text" class="input-custom" name="cognome">
                  </div>
                  <div>
                    <label for="matricola" class="fw-bold label-custom">
                      Matricola
                    </label>
                    <input type="number" class="input-custom" name="matricola">
                  </div>

                </div>

                <div class="row col-5 row-gap-5 mb-5">

                  <div>
                    <label for="email" class="fw-bold label-custom">
                      Email
                    </label>
                    <input type="email" class="input-custom" name="email">
                  </div>
                  <div>
                    <label for="password" class="fw-bold label-custom">
                      Password
                    </label>
                    <input type="password" class="input-custom" name="password">
                  </div>
                  <div>
                    <label for="conferma_password" class="fw-bold label-custom">
                      Conferma
                      <br>
                      Password
                    </label>
                    <input type="password" class="input-custom" name="conferma_password">
                  </div>

                </div>

              </div>

            
              <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm mt-3" style="width:30%;">
                Conferma
              </button>



            </div>
          </form> 
        
      </main>

    `
    
};

export default Registrazione;