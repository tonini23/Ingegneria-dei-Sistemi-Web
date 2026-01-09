import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'


import App from './App.vue'
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Profilo from './pages/Profilo.vue';
import PassDimenticata from './pages/PassDimenticata.vue';
import Registrazione from './pages/Registrazione.vue';
import Studente from './pages/Studente.vue';
import Tutor from './pages/Tutor.vue';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registrazione', component: Registrazione },
    { path: '/profilo', component: Profilo },
    { path: '/studente', component: Studente },
    { path: '/tutor', component: Tutor },
    { path: '/pass_dimenticata', component: PassDimenticata },
    //{ path: "/:pathMatch(.*)*", component: PaginaNonTrovata} Non so se la faremo
  ]
})

createApp(App)
.use(router)
.mount("#app")