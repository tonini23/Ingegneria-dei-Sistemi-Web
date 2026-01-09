"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPrenotazioni = allPrenotazioni;
const db_1 = require("../utils/db");
// Manteniamo 'async' come nel tuo file originale
function allPrenotazioni(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Usiamo la tua logica corretta con il parametro ?
        db_1.connection.query('SELECT * FROM prenotazioni WHERE Id = ?', [req.params.id], function (error, results, fields) {
            if (error) {
                console.error("Errore DB:", error); // È utile loggare l'errore nel server
                res.status(500).send('Errore del server');
            }
            else {
                res.json(results);
            }
        });
    });
}
