<script setup lang="ts">
import Home from './components/Home.vue'
import PassDimenticata from './components/passDimenticata.vue'
import Registrazione from './components/registrazione.vue'
import Login from './components/login.vue'
import Studente from './components/studente.vue'
import Tutor from './components/tutor.vue'
import Profilo from './components/profilo.vue'

</script>

<template>
  <header>
    <div class="d-flex justify-content-center align-items-center pt-4 pb-2">
      <h1 class="m-0 text-white me-3">StudiBO</h1>
      <img src="./img/download (4).png" alt="Unibo Logo" style="height: 60px;">
    </div>
    <nav class="navbar navbar-expand-lg pb-3">
      <div class="container-fluid">        
          <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" style="background-color: #CE1126;">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title text-white">Menù</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body w-100">   
                  <ul class="navbar-nav w-100 justify-content-between mb-2 mb-lg-0" style="font-size: 20px;"> 
                      <li class="nav-item">
                          <router-link to="/" class="nav-link text-white ps-0">Home</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/login" class="nav-link text-white ps-0">Login</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/registrazione" class="nav-link text-white ps-0">Registrati</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/profilo" class="nav-link text-white ps-0">Profilo</router-link>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </nav>
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
