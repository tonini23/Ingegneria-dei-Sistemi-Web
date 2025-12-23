import Home from './pagine/home.js';
import Login from './pagine/login.js';
import Registrazione from './pagine/registrazione.js';
import Profilo from './pagine/profilo.js';  
import Studente from './pagine/studente.js';
import Tutor from './pagine/tutor.js';


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registrazione', component: Registrazione },
    { path: '/profilo', component: Profilo },
    { path: '/studente', component: Studente },
    { path: '/tutor', component: Tutor }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
