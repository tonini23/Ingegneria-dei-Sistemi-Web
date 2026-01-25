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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.logout = exports.login = exports.register = void 0;
const db_1 = require("../utils/db");
const auth_1 = require("../utils/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const utente = (0, auth_1.GetUtente)(req, res);
    if (utente) {
        res.status(401).json({ message: 'Questa operazione richiede il logout' });
        return;
    }
    const { nome, cognome, matricola, email, password } = req.body;
    const [utenti] = yield db_1.connection.promise().execute('SELECT email FROM utenti WHERE email = ? ', [email]);
    if (Array.isArray(utenti) && utenti.length > 0) {
        res.status(400).json({ message: 'Email già registrata' });
        return;
    }
    /*const [matricole] = await connection.promise().execute(
        'SELECT matricola FROM utenti WHERE matricola = ? ', [matricola]);

    if (Array.isArray(matricole) && matricole.length > 0) {
        res.status(400).json({ message: 'Matricola già registrata' });
        return;
    }*/
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
    yield db_1.connection.promise().execute('INSERT INTO utenti (nome, cognome, matricola, email, password) VALUES (?, ?, ?, ?, ?)', [nome, cognome, matricola, email, passwordHash]);
    const [results] = yield db_1.connection.promise().execute('SELECT * FROM utenti WHERE email = ?', [email]);
    const newUtente = results[0];
    (0, auth_1.SetUtente)(req, res, newUtente);
    res.json({ message: 'Utente registrato con successo', user: newUtente });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const utente = (0, auth_1.GetUtente)(req, res);
    if (utente) {
        res.status(401).json({ message: 'Questa operazione richiede il logout' });
        return;
    }
    const { email, password } = req.body;
    const [results] = yield db_1.connection.promise().execute('SELECT * FROM utenti WHERE email = ? ', [email]);
    if (!Array.isArray(results) || results.length === 0) {
        res.status(400).json({ message: 'Email o password non validi' });
        return;
    }
    const utenteData = results[0];
    const correctPassword = yield bcrypt_1.default.compare(password, utenteData.Password);
    if (!correctPassword) {
        res.status(400).json({ message: 'Email o password non validi' });
        return;
    } // non segnaliamo il tipo di errore per motivi di sicurezza
    delete utenteData.Password;
    (0, auth_1.SetUtente)(req, res, utenteData);
    res.json({ message: 'Login effettuato con successo' });
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const utente = (0, auth_1.GetUtente)(req, res);
    if (!utente) {
        res.status(401).json({ message: 'Questa operazione richiede il login' });
        return;
    }
    (0, auth_1.UnsetUtente)(req, res);
    res.json({ message: 'Logout effettuato con successo' });
});
exports.logout = logout;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 1. Recupera i dati decodificati dal cookie
    const utente = (0, auth_1.GetUtente)(req, res);
    // 2. Se il cookie non c'è o è scaduto, restituisci errore 401
    // (Così il frontend capisce che deve mandarti al login)
    if (!utente) {
        res.status(401).json({ message: "Nessun utente loggato" });
        return;
    }
    // 3. FONDAMENTALE: Restituisci l'oggetto utente (che contiene Id, Nome, ecc.)
    // PRIMA avevi scritto: res.json({});  <-- QUESTO ERA L'ERRORE
    res.json(utente);
});
exports.getProfile = getProfile;
