<script setup lang="ts">
// Logica per recupero password
</script>

<template>
  <main>
    <div class="d-lg-none">
      <div class="align-items-center text-center mt-5 mb-5">
        <h1 class="title-custom">Password dimenticata</h1>
      </div>
      
      <form action="" class="align-items-center text-center mb-2">
        <div class="mb-2 d-flex justify-content-center align-items-center">
          <label for="email" class="fw-bold label-custom">Email</label>
          <input type="text" class="input-custom" name="email">
        </div>
      </form>
      <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; width:50%; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
        Invia codice
      </button>

      <form action="" class="align-items-center text-center mb-2">
        <div class="mb-2 d-flex justify-content-center align-items-center">
          <label for="codice" class="fw-bold label-custom">Codice</label>
          <input type="text" class="input-custom" name="codice">
        </div>
      </form>
      <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; width:50%; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
        Conferma codice
      </button>

      <form action="" class="align-items-center text-center mb-2">
        <div class="mb-3 d-flex justify-content-center align-items-center">
          <label for="newpassword" class="fw-bold label-custom">Nuova<br>Password</label>
          <input type="password" class="input-custom" name="newpassword">
        </div>
        <div class="mb-2 d-flex justify-content-center align-items-center">
          <label for="confermapassword" class="fw-bold label-custom">Conferma<br>Password</label>
          <input type="password" class="input-custom" name="confermapassword">
        </div>
      </form>
      <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; border-radius:20px; width:50%; color:white; display:block; margin-left:auto; margin-right:auto;">
        Conferma
      </button>
    </div>

    <div class="justify-content-center align-items-center text-center my-5 d-none d-lg-block">
      <div class="align-items-center text-center mt-5 my-5">
        <h1 class="title-custom">Password dimenticata</h1>
      </div>
      <div class="row my-5">
        <div class="col-1"></div>
        <div class="col-5">
          <form action="" class="align-items-center text-center mb-2">
            <div class=" mb-2 d-flex justify-content-center align-items-center">
              <label for="email" class="fw-bold label-custom">Email</label>
              <input type="text" class="input-custom" name="email">
            </div>
            <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; width:50%; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
              Invia codice
            </button>
          </form>
        </div>
        <div class="col-5">
          <form action="" class="align-items-center text-center mb-2">
            <div class=" mb-2 d-flex justify-content-center align-items-center">
              <label for="codice" class="fw-bold label-custom">Codice</label>
              <input type="text" class="input-custom" name="codice">
            </div>
            <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; width:50%; border-radius:20px; color:white; display:block; margin-left:auto; margin-right:auto;">
              Conferma codice
            </button>
          </form>
        </div>
        <div class="col-1"></div>
      </div>

      <div class="row my-5">
        <div class="col-3"></div>
        <div class="col-6">
          <form action="" class="align-items-center text-center mb-2">
            <div class="mb-3 d-flex justify-content-center align-items-center">
              <label for="newpassword" class="fw-bold label-custom">Nuova<br>Password</label>
              <input type="password" class="input-custom" name="newpassword">
            </div>
            <div class="mb-2 d-flex justify-content-center align-items-center">
              <label for="confermapassword" class="fw-bold label-custom">Conferma<br>Password</label>
              <input type="password" class="input-custom" name="confermapassword">
            </div>
            <button class="btn btn-danger shadow-lg fw-bold p-1 mb-5" style="background-color:#6B0808; border-radius:20px; width:50%; color:white; display:block; margin-left:auto; margin-right:auto;">
              Conferma
            </button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </main>
</template>