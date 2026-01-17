<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      nome: '',
      cognome: '',
      matricola: '',
      email: '',
      password: '',
      conferma_password: '',
    };
  },
  methods: {
      async onSubmit(){
        try {
          await axios.post("/api/auth/register", {
            nome: this.nome,
            cognome: this.cognome,
            matricola: this.matricola,
            email: this.email,
            password: this.password,
          });
          console.log("Registrazione avvenuta con successo!");
          location.href = "/";
        } catch (e: any) {
          if(e.response){
            console.log(e.response.data.message);
          }
      }
    },
  },
});

</script>

<template>
  <main>
    <div class="d-lg-none">
      <div class="align-items-center text-center mt-5 mb-5">
        <h1 class="title-custom">Registrati</h1>
      </div>
      <form action="" class="align-items-center text-center mb-4" @submit.prevent="onSubmit">
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <label for="nome"  class="fw-bold label-custom">Nome</label>
          <input type="text" v-model="nome" class="input-custom" name="nome">
        </div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <label for="cognome" class="fw-bold label-custom">Cognome</label>
          <input type="text" v-model="cognome" class="input-custom" name="cognome">
        </div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <label for="matricola" class="fw-bold label-custom">Matricola</label>
          <input type="number" v-model="matricola" class="input-custom" name="matricola">
        </div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <label for="email" class="fw-bold label-custom">Email</label>
          <input type="email" class="input-custom" name="email">
        </div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <label for="password" class="fw-bold label-custom">Password</label>
          <input type="password" v-model="password" class="input-custom" name="password">
        </div>
        <div class="mb-5 d-flex justify-content-center align-items-center">
          <label for="conferma_password" class="fw-bold label-custom">Conferma<br>Password</label>
          <input type="password" v-model="conferma_password" class="input-custom" name="conferma_password">
        </div>
        <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm" >
          Conferma
        </button>
      </form>
    </div>

    <div class="justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block">
      <div class="align-items-center text-center mt-5 mb-5">
        <h1 class="title-custom">Registrati</h1>
      </div>
      <form action="" class="align-items-center text-center mb-4" @submit.prevent="onSubmit">
        <div class="row row-gap-5 d-flex justify-content-center align-items-center">
          <div class="row col-5 row-gap-5 mb-5">
            <div>
              <label for="nome" class="fw-bold label-custom">Nome</label>
              <input type="text" v-model="nome" class="input-custom" name="nome">
            </div>
            <div>
              <label for="cognome" class="fw-bold label-custom">Cognome</label>
              <input type="text" v-model="cognome" class="input-custom" name="cognome">
            </div>
            <div>
              <label for="matricola" class="fw-bold label-custom">Matricola</label>
              <input type="number" v-model="matricola" class="input-custom" name="matricola">
            </div>
          </div>
          <div class="row col-5 row-gap-5 mb-5">
            <div>
              <label for="email" class="fw-bold label-custom">Email</label>
              <input type="email" v-model="email" class="input-custom" name="email">
            </div>
            <div>
              <label for="password" class="fw-bold label-custom">Password</label>
              <input type="password" v-model="password" class="input-custom" name="password">
            </div>
            <div>
              <label for="conferma_password" class="fw-bold label-custom">Conferma<br>Password</label>
              <input type="password" v-model="conferma_password" class="input-custom" name="conferma_password">
            </div>
          </div>
        </div>
        <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm mt-3" style="width:30%;">
          Conferma
        </button>
      </form>
    </div>
  </main>
</template>