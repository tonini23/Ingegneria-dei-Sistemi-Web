<template>
    <nav class="navbar navbar-expand-lg pb-3">
        <div class="container-fluid">
            <button
                class="navbar-toggler border-0 p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
                style="background-color: #ce1126"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-white">Menù</h5>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body w-100">
                    <ul
                        class="navbar-nav w-100 justify-content-between mb-2 mb-lg-0"
                        style="font-size: 20px"
                    >
                        <li class="nav-item">
                            <router-link to="/" class="nav-link text-white ps-0"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                to="/profilo"
                                class="nav-link text-white ps-0"
                                >Profilo</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                to="/studente"
                                class="nav-link text-white ps-0"
                                >Studente</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                to="/tutor"
                                class="nav-link text-white ps-0"
                                >Tutor</router-link
                            >
                        </li>
                        <li class="nav-item" v-if="!auth.isLoggedIn">
                            <router-link
                                to="/login"
                                class="nav-link text-white ps-0"
                                >Login</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { auth } from "../stores/auth";

onMounted(async () => {
    await auth.checkAuth();
});

const handleLogout = async () => {
    await auth.logout();
    location.href = "/login";
};
</script>

<style scoped>
/* Stile base per tutti i link */
.nav-link {
    padding: 8px 16px !important;
    border-radius: 8px;
    transition: all 0.3s ease;
}

/* Stile per i link attivi - background più scuro */
.nav-link.router-link-exact-active {
    background-color: #8b0000 !important;
    font-weight: 600;
}

/* Stile hover per tutti i link */
.nav-link:hover {
    background-color: #a30000 !important;
}

/* Stile hover per il link attivo (mantieni il colore scuro) */
.nav-link.router-link-exact-active:hover {
    background-color: #6b0808 !important;
}
</style>
