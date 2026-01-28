<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import { Utente } from './types';
import axios from 'axios';
import { statoNotifica } from './notification';


export default defineComponent({
  components: { 
    Navbar
  },
  data() {
    return {
      utente: {} as Utente,
      statoNotifica
    };
  },
});
</script>

<template>
  <header>
    <div class="d-flex justify-content-center align-items-center pt-4 pb-2">
      <h1 class="m-0 text-white me-3">StudiBO</h1>
      <img src="./img/download (4).png" alt="Unibo Logo" style="height: 60px;">
    </div>
    <Navbar/>
  </header>

  <router-view></router-view>

  <!-- Notifica -->
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 2">
    <div class="toast align-items-center text-white border-0" 
        :class="{'show': statoNotifica.show, 'text-bg-success': statoNotifica.type === 'success', 'text-bg-danger': statoNotifica.type === 'error'}"
        role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
        <div class="toast-body fw-bold">
            {{ statoNotifica.message }}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" 
                @click="statoNotifica.show = false"></button>
        </div>
    </div>
  </div>

  <footer class="text-white footer fixed-bottom">
    <p> Progetto svolto da: </p>
    <p class="text-center">
      Andrea Tonini e Lisandro Antonioli - A.A. 2025-2026
    </p>
  </footer>
   
</template>

<style scoped>
  
</style>
