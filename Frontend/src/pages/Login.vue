<script setup lang="ts">
// In futuro qui metterò la logica per chiamare l'API di login
</script>

<template>
   <main>
      <div class="align-items-center text-center mt-5 mb-5 row justify-content-center">
        <div class="col-5" style="height: 100%;">
              
          <div class="align-items-center text-center mt-5 mb-5">
                        <h1 class="title-custom"> Accedi </h1>
          </div>
                    
          <form action="/" class="align-items-center text-center mb-5">

            <div class="mb-5">
                <label for="email" class="fw-bold label-custom">Email</label>
                <input type="email" name="email" class="input-custom" required>
            </div>

            <div class="mb-3">
                <label for="password" class="fw-bold label-custom">Password</label>
                <input type="password" name="password" class="input-custom" required>
            </div>

            <router-link to="/pass_dimenticata">
                <div class="align-items-end text-end mb-5 me-4">
                    <a href="" class="text-decoration-none fst-italic">Password Dimenticata</a>
                </div>
            </router-link>

            <div class="row justify-content-center">
                <button class="col-5 btn text-white shadow fw-bold py-1" style="background-color: #6B0808; width: 40%; border-radius: 20px;">
                    Accedi
                </button>
            </div>
          </form>
        </div>

          <div class="col-5" style="height: 100%;">
                    
            <div class="align-items-center text-center mt-5 mb-5">
                        <h1 class="title-custom"> Non hai un account? </h1>
            </div>

            <router-link to="/registrazione">
                <button class="col-4 btn btn-lg btn-danger p-3 shadow-lg my-5 btn-large">Registrati</button>
            </router-link>

            <router-link to="/studente">
                <button class="col-4 btn btn-lg btn-danger p-3 shadow-lg mt-4 mb-5 btn-large">Entra come guest</button>
            </router-link>
          </div>
      </div>      
    </main>
</template>