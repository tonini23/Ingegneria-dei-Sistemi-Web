import Home from './pagine/home.js';
import Login from './pagine/login.js';


const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },

];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
