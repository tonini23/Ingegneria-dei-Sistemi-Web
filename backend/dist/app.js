"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prenotazioniRouter_1 = require("./routes/prenotazioniRouter");
const app = (0, express_1.default)();
const port = 3001; // Per convenzione sarebbe 3000 
// Nota: 'public' si riferisce alla vecchia cartella. 
// Quando useremo Vite, questo dovrà cambiare o sparire, ma per ora lascialo così.
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
// Qui aggiungiamo i tipi : Request e : Response
app.get('/', (req, res) => {
    // Nota: anche questo path potrebbe dover cambiare con la nuova struttura
    res.sendFile('index.html', { root: 'public' });
});
app.use('/', prenotazioniRouter_1.prenotazioniRouter);
// Qui aggiungiamo anche NextFunction
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Pagina non trovata');
});
app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port);
});
