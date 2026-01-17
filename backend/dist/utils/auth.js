"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsetUtente = exports.GetUtente = exports.SetUtente = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = 'il_mio_segreto_jwt_studibo';
const COOKIE_NAME = 'studibo_token';
const SetUtente = (req, res, utente) => {
    const accessToken = jsonwebtoken_1.default.sign(utente, JWT_SECRET, { expiresIn: '1d' });
    res.cookie(COOKIE_NAME, accessToken, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: true,
    });
};
exports.SetUtente = SetUtente;
const GetUtente = (req, res) => {
    const accessToken = req.cookies[COOKIE_NAME];
    if (!accessToken)
        return null;
    try {
        const utente = jsonwebtoken_1.default.verify(accessToken, JWT_SECRET);
        return utente;
    }
    catch (err) {
        return null;
    }
};
exports.GetUtente = GetUtente;
const UnsetUtente = (req, res) => {
    res.clearCookie(COOKIE_NAME);
};
exports.UnsetUtente = UnsetUtente;
