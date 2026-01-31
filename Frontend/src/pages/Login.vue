<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { mostraNotifica } from "../notification";
import { auth } from "../stores/auth";


export default defineComponent({
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async onSubmit() {
            if (!this.email || !this.password) {
                mostraNotifica("Inserisci email e password", "error");
                return;
            }

            try {
                await axios.post("/api/auth/login", {
                    email: this.email,
                    password: this.password,
                });

                await auth.checkAuth();
                mostraNotifica("Login effettuato con successo!", "success");

                setTimeout(() => {
                    location.href = "/";
                }, 1500);
            } catch (e: any) {
                if (e.response) {
                    mostraNotifica(e.response.data.message, "error");
                } else {
                    mostraNotifica("Errore di connessione", "error");
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
                <h1 class="title-custom">Accedi</h1>
            </div>

            <form
                class="align-items-center text-center mb-5"
                @submit.prevent="onSubmit"
            >
                <div
                    class="mb-4 d-flex justify-content-center align-items-center"
                >
                    <label for="email" class="fw-bold label-custom"
                        >Email</label
                    >
                    <input
                        type="email"
                        v-model="email"
                        class="input-custom"
                        name="email"
                        required
                    />
                </div>

                <div
                    class="mb-2 d-flex justify-content-center align-items-center"
                >
                    <label for="password" class="fw-bold label-custom"
                        >Password</label
                    >
                    <input
                        type="password"
                        v-model="password"
                        class="input-custom"
                        name="password"
                        required
                    />
                </div>

                <div class="mb-4 text-end" style="width: 85%; margin: 0 auto">
                    <router-link
                        to="/pass_dimenticata"
                        class="text-decoration-none fst-italic text-dark"
                        style="font-size: 0.9rem"
                    >
                        Password Dimenticata?
                    </router-link>
                </div>

                <button
                    class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm"
                >
                    Accedi
                </button>
            </form>

            <hr class="my-5 w-75 mx-auto" style="border-top: 2px solid #ccc" />

            <div class="align-items-center text-center mb-4">
                <h2>Non hai un account?</h2>
            </div>

            <div class="d-flex flex-column align-items-center gap-3 mt-3">
                <router-link to="/registrazione" class="w-100 text-center">
                    <button
                        class="btn btn-danger shadow-lg fw-bold py-2"
                        style="width: 60%; border-radius: 20px"
                    >
                        Registrati
                    </button>
                </router-link>
            </div>

            <div class="d-flex flex-column align-items-center gap-3 mt-3">
                <router-link to="/registrazione" class="w-100 text-center">
                    <button
                        class="btn btn-danger shadow-lg fw-bold py-2"
                        style="width: 60%; border-radius: 20px"
                    >
                        Entra come Guest
                    </button>
                </router-link>
            </div>
        </div>

        <div
            class="justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block"
        >
            <div class="row justify-content-center align-items-start mt-5">
                <div class="col-5 border-end border-2 pe-5">
                    <div class="align-items-center text-center mt-4 mb-5">
                        <h1 class="title-custom">Accedi</h1>
                    </div>

                    <form
                        class="align-items-center text-center mb-4"
                        @submit.prevent="onSubmit"
                    >
                        <div
                            class="my-5 d-flex justify-content-center align-items-center"
                        >
                            <label for="email" class="fw-bold label-custom"
                                >Email</label
                            >
                            <input
                                type="email"
                                v-model="email"
                                class="input-custom"
                                name="email"
                            />
                        </div>
                        <div
                            class="mt-5 mb-3 d-flex justify-content-center align-items-center"
                        >
                            <label for="password" class="fw-bold label-custom"
                                >Password</label
                            >
                            <input
                                type="password"
                                v-model="password"
                                class="input-custom"
                                name="password"
                            />
                        </div>

                        <div class="mb-5 text-end pe-5 me-1">
                            <router-link
                                to="/pass_dimenticata"
                                class="text-decoration-none fst-italic text-dark"
                            >
                                Password Dimenticata?
                            </router-link>
                        </div>

                        <button
                            class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm mt-3"
                            style="width: 40%"
                        >
                            Accedi
                        </button>
                    </form>
                </div>

                <div
                    class="col-5 ps-5 d-flex flex-column justify-content-center"
                    style="height: 100%"
                >
                    <div class="align-items-center text-center mb-5 mt-4">
                        <h2>Non hai un account?</h2>
                    </div>

                    <div
                        class="d-flex flex-column align-items-center gap-4 my-5"
                    >
                        <router-link to="/registrazione" class="w-100">
                            <button
                                class="btn btn-danger shadow-lg fw-bold py-3 px-5"
                                style="
                                    border-radius: 30px;
                                    font-size: 1.2rem;
                                    width: 60%;
                                "
                            >
                                Registrati
                            </button>
                        </router-link>
                    </div>

                    <div
                        class="d-flex flex-column align-items-center gap-4 mb-5"
                    >
                        <router-link to="/studente" class="w-100">
                            <button
                                class="btn btn-danger shadow-lg fw-bold py-3 px-5"
                                style="
                                    border-radius: 30px;
                                    font-size: 1.2rem;
                                    width: 60%;
                                "
                            >
                                Entra come Guest
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
