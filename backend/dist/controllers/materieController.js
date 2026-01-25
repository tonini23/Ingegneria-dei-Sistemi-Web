"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMaterie = void 0;
const db_1 = require("../utils/db");
const getAllMaterie = (req, res) => {
    const sql = 'SELECT * FROM materie';
    db_1.connection.query(sql, (error, results) => {
        if (error) {
            console.error("Errore recupero materie:", error);
            res.status(500).send('Errore del server');
        }
        else {
            res.json(results);
        }
    });
};
exports.getAllMaterie = getAllMaterie;
