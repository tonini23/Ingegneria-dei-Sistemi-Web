import axios from "axios";
import { Utente } from "../types";

interface UtentiResponse extends Array<Utente> {}

export const utentiService = {
  async getAllUtenti(): Promise<UtentiResponse> {
    try {
      const response = await axios.get<UtentiResponse>("/api/utenti");
      return response.data;
    } catch (error) {
      console.error("Errore recupero utenti:", error);
      throw error;
    }
  },

  async getUtenteById(id: number): Promise<Utente> {
    try {
      const response = await axios.get<Utente>(`/api/utenti/${id}`);
      return response.data;
    } catch (error) {
      console.error("Errore recupero utente:", error);
      throw error;
    }
  },
};
