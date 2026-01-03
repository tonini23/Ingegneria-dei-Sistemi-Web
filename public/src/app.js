import Home from './pagine/home.js';
import Login from './pagine/login.js';
import Registrazione from './pagine/registrazione.js';
import Profilo from './pagine/profilo.js';  
import Studente from './pagine/studente.js';
import Tutor from './pagine/tutor.js';
import PassDimenticata from './pagine/pass_dimenticata.js';


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registrazione', component: Registrazione },
    { path: '/profilo', component: Profilo },
    { path: '/studente', component: Studente },
    { path: '/tutor', component: Tutor },
    { path: '/pass_dimenticata', component: PassDimenticata }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
