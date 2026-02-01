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
exports.cercaDisponibilita = cercaDisponibilita;
exports.prenotaLezione = prenotaLezione;
const db_1 = require("../utils/db");
const auth_1 = require("../utils/auth");
function allPrenotazioni(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        // Usiamo LEFT JOIN per lo studente perché potrebbe non esserci ancora (id_studente NULL)
        const sql = `
        SELECT 
            p.*, 
            m.Nome AS materia_nome,
            s.Nome AS nome_studente, 
            s.Cognome AS cognome_studente,
            t.Nome AS nome_tutor,
            t.Cognome AS cognome_tutor
        FROM prenotazioni p
        JOIN materie m ON p.id_materia = m.Id
        JOIN utenti t ON p.id_tutor = t.Id       -- Join per i dati del Tutor
        LEFT JOIN utenti s ON p.id_studente = s.Id -- Left Join per i dati dello Studente
        WHERE p.id_studente = ? OR p.id_tutor = ?
        ORDER BY p.Data DESC, p.Ora DESC
    `;
        db_1.connection.query(sql, [userId, userId], // Passiamo l'ID due volte (per il WHERE OR)
        function (error, results) {
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
        const utenteLoggato = (0, auth_1.GetUtente)(req, res);
        if (!utenteLoggato) {
            res.status(401).json({ message: 'Devi essere loggato come Tutor.' });
            return;
        }
        const { id_materia, data, ora, localita } = req.body;
        const tutorId = utenteLoggato.Id; // Usiamo l'ID reale
        console.log("Inserimento in prenotazioni:", { tutorId, id_materia, data, ora, localita });
        // Query di inserimento nella tabella 'prenotazioni'
        const sql = `
        INSERT INTO prenotazioni (id_tutor, id_materia, Data, Ora, Localita)
        VALUES (?, ?, ?, ?, ?)
    `;
        db_1.connection.query(sql, [tutorId, id_materia, data, ora, localita], function (error, results) {
            if (error) {
                console.error("Errore DB:", error);
                res.status(500).send('Errore salvataggio prenotazione');
            }
            else {
                res.json({ message: "Prenotazione creata con successo" });
            }
        });
    });
}
function deletePrenotazione(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const utenteLoggato = (0, auth_1.GetUtente)(req, res);
        const id_prenotazione = req.params.id;
        if (!utenteLoggato) {
            res.status(401).json({ message: "Non autorizzato" });
            return;
        }
        let sql = "";
        console.log(`Tutor ${utenteLoggato.Id} elimina disponibilità ${id_prenotazione}`);
        sql = "DELETE FROM prenotazioni WHERE Id = ?";
        db_1.connection.query(sql, [id_prenotazione], (err, results) => {
            if (err) {
                console.error("Errore disdetta:", err);
                res.status(500).json({ message: "Errore nel database" });
            }
            else if (results.affectedRows === 0) {
                // Questo è il controllo che mancava!
                res.status(404).json({ message: "Prenotazione non trovata o già cancellata" });
            }
            else {
                res.json({ message: "Disdetta effettuata con successo" });
            }
        });
    });
}
function cercaDisponibilita(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data, id_materia, id_tutor, localita } = req.query;
        // Ottieni l'utente corrente per escludere le sue prenotazioni (se è un tutor)
        const utenteLoggato = (0, auth_1.GetUtente)(req, res);
        // Query: Seleziona tutto da prenotazioni dove NON c'è ancora uno studente
        // IMPORTANTE: Aggiunti p.id_materia e p.id_tutor per il matching lato client
        let sql = `
        SELECT 
            p.Id, p.Data, p.Ora, p.Localita,
            p.id_materia, p.id_tutor,
            m.Nome as materia_nome,
            u.Nome as tutor_nome, u.Cognome as tutor_cognome
        FROM prenotazioni p
        JOIN materie m ON p.id_materia = m.Id
        JOIN utenti u ON p.id_tutor = u.Id
        WHERE p.id_studente IS NULL
    `;
        const params = [];
        // ESCLUDI le prenotazioni create dal tutor corrente
        if (utenteLoggato && utenteLoggato.Id) {
            sql += ` AND p.id_tutor != ?`;
            params.push(utenteLoggato.Id);
        }
        // Filtri opzionali (mantenuti per compatibilità ma non usati per il matching)
        if (data) {
            sql += ` AND p.Data = ?`;
            params.push(data);
        }
        if (id_materia) {
            sql += ` AND p.id_materia = ?`;
            params.push(id_materia);
        }
        if (id_tutor) {
            sql += ` AND p.id_tutor = ?`;
            params.push(id_tutor);
        }
        if (localita) {
            sql += ` AND p.Localita LIKE ?`;
            params.push(`%${localita}%`);
        }
        // Ordina per data e ora più vicine
        sql += ` ORDER BY p.Data ASC, p.Ora ASC`;
        db_1.connection.query(sql, params, (err, results) => {
            if (err) {
                console.error("Errore ricerca:", err);
                res.status(500).send('Errore server durante la ricerca');
            }
            else {
                res.json(results);
            }
        });
    });
}
// PRENOTA LA LEZIONE (Aggiorna id_studente)
function prenotaLezione(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const utenteLoggato = (0, auth_1.GetUtente)(req, res);
        const id_prenotazione = req.params.id; // L'ID della lezione da prenotare
        if (!utenteLoggato) {
            res.status(401).json({ message: "Devi essere loggato per prenotare." });
            return;
        }
        // Controlliamo che la lezione sia ancora libera
        const checkSql = "SELECT * FROM prenotazioni WHERE Id = ? AND id_studente IS NULL";
        db_1.connection.query(checkSql, [id_prenotazione], (err, results) => {
            if (err || results.length === 0) {
                res.status(400).json({ message: "Lezione non disponibile o inesistente." });
                return;
            }
            // Se è libera, assegniamo lo studente
            const updateSql = "UPDATE prenotazioni SET id_studente = ? WHERE Id = ?";
            db_1.connection.query(updateSql, [utenteLoggato.Id || utenteLoggato.Id, id_prenotazione], (errUpdate) => {
                if (errUpdate) {
                    console.error(errUpdate);
                    res.status(500).json({ message: "Errore durante la prenotazione." });
                }
                else {
                    res.json({ message: "Prenotazione confermata con successo!" });
                }
            });
        });
    });
}
