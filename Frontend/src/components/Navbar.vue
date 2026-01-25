<template>
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
                          <router-link to="/profilo" class="nav-link text-white ps-0">Profilo</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/studente" class="nav-link text-white ps-0">Studente</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/tutor" class="nav-link text-white ps-0">Tutor</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/login" class="nav-link text-white ps-0">Login</router-link>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </nav>
</template>