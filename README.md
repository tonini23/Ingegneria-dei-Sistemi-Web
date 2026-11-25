# Laboratorio di Sicurezza dei Sistemi e Privacy
Progetto di Secure coding per l'esame di Laboratorio di Sicurezza dei Sistemi e Privacy del corso LP tecnologie dei sistemi informatici svolto da Andrea Tonini nell'anno accademico 2025-2026 sulla base del progetto di ingegneria dei sistemi web svolto da Andrea Tonini e Lisandro Antonioli.

## Prerequisiti

Prima di avviare il progetto è necessario installare:
- [Node.js](https://nodejs.org/) (versione LTS), comprensivo di npm.
- MySQL Server, con il database `studibo` configurato.

## Installazione

Aprire un terminale nella cartella principale del progetto ed eseguire i seguenti comandi.

**Installazione dipendenze backend:**

```bash
cd backend
npm install
```

**Compilazione backend:**

```bash
npm run build
```

**Installazione dipendenze frontend:**

```bash
cd ../Frontend
npm install
```

## Avvio del progetto

Per avviare l'applicazione sono necessari due terminali distinti.

**Terminale 1 – Backend**

Dalla cartella principale del progetto:

```bash
cd backend
npm start
```

**Terminale 2 – Frontend**

Dalla cartella principale del progetto:

```bash
cd Frontend
npm run dev
```

Una volta avviati entrambi i servizi, il frontend sarà raggiungibile all'indirizzo indicato da Vite nel terminale.

Per arrestare i servizi utilizzare `CTRL + C` nei rispettivi terminali.

## Note

In caso di modifiche al codice TypeScript del backend, eseguire nuovamente `npm run build` prima di avviarlo.
