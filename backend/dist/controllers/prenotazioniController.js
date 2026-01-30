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
exports.searchDisponibilita = searchDisponibilita;
const db_1 = require("../utils/db");
const auth_1 = require("../utils/auth");
function allPrenotazioni(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        // Aggiungiamo la JOIN con la tabella 'materie'
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
        // Prendiamo l'ID dal Token
        console.log("aaaaaaaaaaaaaaaaaaa");
        const utenteLoggato = (0, auth_1.GetUtente)(req, res);
        console.log("bbbbbbbbbbbbbbbbbbb");
        if (!utenteLoggato) {
            res.status(401).json({ message: 'Devi essere loggato come Tutor.' });
            return;
        }
        const { id_materia, data, ora, localita } = req.body;
        const tutorId = utenteLoggato.Id; // Usiamo l'ID reale
        console.log("Inserimento in Disponibilità:", { tutorId, id_materia, data, ora, localita });
        // Query di inserimento nella tabella 'disponibilita'
        const sql = `
        INSERT INTO disponibilita (id_tutor, id_materia, Data, Ora, Localita)
        VALUES (?, ?, ?, ?, ?)
    `;
        db_1.connection.query(sql, [tutorId, id_materia, data, ora, localita], function (error, results) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore salvataggio disponibilità');
            }
            else {
                res.json({ message: "Disponibilità creata con successo" });
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
function searchDisponibilita(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, id_materia, id_tutor, luogo } = req.query;
        console.log("Ricerca disponibilità:", req.query);
        // Query sulla tabella 'disponibilita' (non prenotazioni)
        // Mostriamo il nome del tutor e la materia
        let sql = `
        SELECT 
            d.Id, d.Data, d.Ora, d.Localita,
            m.Nome as materia_nome,
            u.Nome as tutor_nome, u.Cognome as tutor_cognome
        FROM disponibilita d
        JOIN materie m ON d.id_materia = m.Id
        JOIN utenti u ON d.id_tutor = u.Id
        WHERE 1=1
    `;
        const params = [];
        // --- VINCOLO RICHIESTO: La data non deve essere futura ---
        // (Mostra solo disponibilità di oggi o passate)
        sql += ` AND d.Data <= CURDATE() `;
        // Filtri opzionali (se l'utente li ha selezionati)
        if (data) {
            sql += ` AND d.Data = ?`;
            params.push(data);
        }
        if (id_materia) {
            sql += ` AND d.id_materia = ?`;
            params.push(id_materia);
        }
        if (id_tutor) {
            sql += ` AND d.id_tutor = ?`;
            params.push(id_tutor);
        }
        if (luogo) {
            sql += ` AND d.Localita LIKE ?`;
            params.push(`%${luogo}%`);
        }
        db_1.connection.query(sql, params, (error, results) => {
            if (error) {
                console.error("Errore ricerca disponibilità:", error);
                res.status(500).send('Errore del server');
            }
            else {
                res.json(results);
            }
        });
    });
}
