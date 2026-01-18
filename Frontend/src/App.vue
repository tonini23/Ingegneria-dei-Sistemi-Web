<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import { Utente } from './types';
import axios from 'axios';


export default defineComponent({
  components: { 
    Navbar
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

  <footer class="text-white footer fixed-bottom">
    <p> Progetto svolto da: </p>
    <p class="text-center">
      Andrea Tonini e Lisandro Antonioli - A.A. 2025-2026
    </p>
  </footer>
   
</template>

<style scoped>
  
</style>
