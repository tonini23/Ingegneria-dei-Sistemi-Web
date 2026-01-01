/*import { connection } from "../utils/db.js";

async function allPrenotazioniUtente(req, res) {
connection.query('SELECT * FROM prenotazioni WHERE id_utente = ?',
    [], 
    function (error, results, fields) {
    if (error) {
        res.status(500).send('Errore del server');
    } else {
        res.json(results);
    }
    }
)
};

export { allPrenotazioniUtente }; */