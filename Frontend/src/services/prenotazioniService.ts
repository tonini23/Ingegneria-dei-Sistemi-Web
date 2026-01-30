import axios from "axios";
import { Prenotazione } from "../types";

interface AddPrenotazioneRequest {
  Data: string;
  Ora: string;
  Localita: string;
  id_materia: number;
  id_tutor?: number;
  id_studente?: number;
}

interface SearchDisponibilitaRequest {
  data?: string;
  id_materia?: number;
  localita?: string;
}

interface PrenotazioniResponse extends Array<Prenotazione> {}

interface SearchDisponibilitaResponse {
  disponibili: Prenotazione[];
  count: number;
}

export const prenotazioniService = {
  async getPrenotazioniByUtente(id: number): Promise<PrenotazioniResponse> {
    try {
      const response = await axios.get<PrenotazioniResponse>(
        `/api/prenotazioni/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Errore recupero prenotazioni:", error);
      throw error;
    }
  },

  async addPrenotazione(
    id: number,
    data: AddPrenotazioneRequest,
  ): Promise<Prenotazione> {
    try {
      const response = await axios.post<Prenotazione>(
        `/api/prenotazioni/${id}`,
        {
          Data: data.Data,
          Ora: data.Ora,
          Localita: data.Localita,
          id_materia: data.id_materia,
          id_tutor: data.id_tutor,
          id_studente: data.id_studente,
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore aggiunta prenotazione:", error);
      throw error;
    }
  },

  async deletePrenotazione(id: number): Promise<{ message: string }> {
    try {
      const response = await axios.delete<{ message: string }>(
        `/api/prenotazioni/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Errore cancellazione prenotazione:", error);
      throw error;
    }
  },

  async searchDisponibilita(
    params: SearchDisponibilitaRequest,
  ): Promise<SearchDisponibilitaResponse> {
    try {
      const response = await axios.get<SearchDisponibilitaResponse>(
        "/api/disponibilita/search",
        {
          params: {
            data: params.data,
            id_materia: params.id_materia,
            localita: params.localita,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Errore ricerca disponibilità:", error);
      throw error;
    }
  },

  async getPrenotazioneById(id: number): Promise<Prenotazione> {
    try {
      const response = await axios.get<Prenotazione>(
        `/api/prenotazioni/dettaglio/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Errore recupero prenotazione:", error);
      throw error;
    }
  },
};
