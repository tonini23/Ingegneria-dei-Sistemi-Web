<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const selectedFile = ref<File | null>(null);
const uploadMsg = ref('');
const externalUrl = ref('https://jsonplaceholder.typicode.com/todos/1');
const externalRes = ref('');

const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0];
    }
};

const caricaFile = async () => {
    if (!selectedFile.value) return;
    const reader = new FileReader();
    reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1] || '';
        const res = await axios.post('/api/upload', {
            filename: selectedFile.value?.name,
            content: base64
        });
        uploadMsg.value = `${res.data.message}: ${res.data.path}`;
    };
    reader.readAsDataURL(selectedFile.value);
};

const chiamaApi = async () => {
    try {
        const res = await axios.post('/api/servizi/esterno', { url: externalUrl.value });
        externalRes.value = JSON.stringify(res.data, null, 2);
    } catch (err: any) {
        externalRes.value = err.message;
    }
};
</script>

<template>
    <div class="container mt-4">
        <h2>Servizi Aggiuntivi</h2>

        <div class="card p-3 mt-3">
            <h5>Caricamento File (es. Documento / Immagine Profilo)</h5>
            <input type="file" class="form-control mb-2" @change="onFileChange" />
            <button class="btn btn-primary" @click="caricaFile">Carica</button>
            <div v-if="uploadMsg" class="alert alert-info mt-2">{{ uploadMsg }}</div>
        </div>

        <div class="card p-3 mt-3">
            <h5>Integrazione API Esterna</h5>
            <input v-model="externalUrl" type="text" class="form-control mb-2" placeholder="URL servizio esterno" />
            <button class="btn btn-secondary" @click="chiamaApi">Invia Richiesta</button>
            <pre v-if="externalRes" class="mt-2 bg-light p-2">{{ externalRes }}</pre>
        </div>
    </div>
</template>
