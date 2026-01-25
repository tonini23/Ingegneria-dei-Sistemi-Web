"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUtenti = void 0;
const db_1 = require("../utils/db");
const getAllUtenti = (req, res) => {
    const sql = 'SELECT Id, Nome, Cognome FROM utenti';
    db_1.connection.query(sql, (error, results) => {
        if (error) {
            console.error("Errore recupero utenti:", error);
            res.status(500).send('Errore del server');
        }
        else {
            res.json(results);
        }
    });
};
exports.getAllUtenti = getAllUtenti;
