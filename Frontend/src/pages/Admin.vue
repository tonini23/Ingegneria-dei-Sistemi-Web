<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { Utente } from '../types';

const utenti = ref<Utente[]>([]);
const errore = ref('');

const caricaUtenti = async () => {
    try {
        const res = await axios.get('/api/admin/utenti');
        utenti.value = res.data;
    } catch (err) {
        errore.value = 'Errore nel caricamento degli utenti';
    }
};

const cambiaRuolo = async (id: number, nuovoRuolo: string) => {
    try {
        await axios.put(`/api/admin/utenti/${id}/ruolo`, { ruolo: nuovoRuolo });
        await caricaUtenti();
    } catch (err) {
        errore.value = 'Errore aggiornamento ruolo';
    }
};

const eliminaUtente = async (id: number) => {
    try {
        await axios.delete(`/api/admin/utenti/${id}`);
        await caricaUtenti();
    } catch (err) {
        errore.value = 'Errore eliminazione utente';
    }
};

onMounted(caricaUtenti);
</script>

<template>
    <div class="container mt-4">
        <h2>Pannello Amministratore</h2>
        <div v-if="errore" class="alert alert-danger">{{ errore }}</div>
        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Email</th>
                    <th>Ruolo</th>
                    <th>Azioni</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u in utenti" :key="u.Id">
                    <td>{{ u.Id }}</td>
                    <td>{{ u.Nome }}</td>
                    <td>{{ u.Cognome }}</td>
                    <td>{{ u.Email }}</td>
                    <td>{{ u.Ruolo || 'user' }}</td>
                    <td>
                        <button
                            class="btn btn-sm btn-warning text-white me-2"
                            @click="cambiaRuolo(u.Id, u.Ruolo === 'admin' ? 'user' : 'admin')"
                        >
                            Rendi {{ u.Ruolo === 'admin' ? 'user' : 'admin' }}
                        </button>
                        <button
                            class="btn btn-sm btn-danger"
                            @click="eliminaUtente(u.Id)"
                        >
                            Elimina
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
