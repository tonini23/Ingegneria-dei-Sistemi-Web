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
exports.addPrenotazione = addPrenotazione;
exports.deletePrenotazione = deletePrenotazione;
const db_1 = require("../utils/db");
function allPrenotazioni(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        // Aggiungiamo la JOIN con la tabella 'materie'
        // Assumiamo che la tabella si chiami 'materie' e abbia un campo 'nome'
        // e che in 'prenotazioni' ci sia la chiave esterna 'id_materia'
        const sql = `
        SELECT 
            p.*, 
            u.nome AS nome_studente, 
            u.cognome AS cognome_studente,
            m.nome AS materia_nome
        FROM prenotazioni p
        JOIN utenti u ON p.id_studente = u.id
        JOIN materie m ON p.id_materia = m.id
        WHERE p.id_studente = ? OR p.id_tutor = ?
    `;
        db_1.connection.query(sql, [userId, userId], function (error, results, fields) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            }
            else {
                res.json(results);
            }
        });
    });
}
function addPrenotazione(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        const { id_tutor, id_materia, data_prenotazione } = req.body;
        const sql = `
        INSERT INTO prenotazioni (id_studente, id_tutor, id_materia, data_prenotazione)
        VALUES (?, ?, ?, ?)
    `;
        db_1.connection.query(sql, [userId, id_tutor, id_materia, data_prenotazione], function (error, results, fields) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            }
            else {
                res.json({ message: "Prenotazione aggiunta con successo" });
            }
        });
    });
}
function deletePrenotazione(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        const sql = `
        DELETE FROM prenotazioni
        WHERE id_studente = ?
    `;
        db_1.connection.query(sql, [userId], function (error, results, fields) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore del server');
            }
            else {
                res.json({ message: "Prenotazione eliminata con successo" });
            }
        });
    });
}
