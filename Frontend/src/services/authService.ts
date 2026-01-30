import axios from "axios";
import { Utente } from "../types";

interface RegistrazioneRequest {
  nome: string;
  cognome: string;
  matricola: number;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  utente?: Utente;
  token?: string;
}

interface ProfileResponse extends Utente {}

export const authService = {
  async registrazione(data: RegistrazioneRequest): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        "/api/auth/registrazione",
        {
          nome: data.nome,
          cognome: data.cognome,
          matricola: data.matricola,
          email: data.email,
          password: data.password,
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore registrazione:", error);
      throw error;
    }
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>("/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      console.error("Errore login:", error);
      throw error;
    }
  },

  async logout(): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>("/api/auth/logout");
      return response.data;
    } catch (error) {
      console.error("Errore logout:", error);
      throw error;
    }
  },

  async getProfile(): Promise<ProfileResponse> {
    try {
      const response = await axios.get<ProfileResponse>("/api/auth/utente");
      return response.data;
    } catch (error) {
      console.error("Errore recupero profilo:", error);
      throw error;
    }
  },
};
