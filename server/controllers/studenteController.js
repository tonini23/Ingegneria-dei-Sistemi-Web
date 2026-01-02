import { connection } from "../utils/db.js";

async function allPrenotazioni(req, res) {
connection.query('SELECT * FROM prenotazioni WHERE Id_studente = null',
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

export { allPrenotazioni }; 