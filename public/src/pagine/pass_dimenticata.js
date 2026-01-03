const PassDimenticata = {
    template:
        `

        <main>
        <div class="align-items-center text-center mt-5 mb-5">
          <h1 class="title-custom">
            Password dimenticata
          </h1>
        </div>
        
        <form action="" class="align-items-center text-center mb-2">
          <div class="mb-2 d-flex justify-content-center align-items-center">
            <label for="email" class="fw-bold label-custom">
              Email
            </label>
            <input type="text" class="input-custom" name="email">
          </div>
        </form>

        <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
          Invia codice
        </button>


        <form action="" class="align-items-center text-center mb-2">
          <div class="mb-2 d-flex justify-content-center align-items-center">
            <label for="codice" class="fw-bold label-custom">
              Codice
            </label>
            <input type="text" class="input-custom" name="codice">
          </div>
        </form>

        <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
          Conferma codice
        </button>


        <form action="" class="align-items-center text-center mb-3">
          <div class="mb-3 d-flex justify-content-center align-items-center">
            <label for="newpassword" class="fw-bold label-custom">
              Nuova Password
            </label>
            <input type="text" class="input-custom" name="newpassword">
          </div>
        </form>

        <form action="" class="align-items-center text-center mb-2">
          <div class="mb-2 d-flex justify-content-center align-items-center">
            <label for="confermapassword" class="fw-bold label-custom">
              Conferma Password
            </label>
            <input type="text" class="input-custom" name="confermapassword">
          </div>
        </form>

        <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
          Conferma
        </button>






      </main>

    `
    
};

export default PassDimenticata;