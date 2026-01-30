import axios from "axios";
import { Materia } from "../types";

interface MaterieResponse extends Array<Materia> {}

export const materieService = {
  async getAllMaterie(): Promise<MaterieResponse> {
    try {
      const response = await axios.get<MaterieResponse>("/api/materie");
      return response.data;
    } catch (error) {
      console.error("Errore recupero materie:", error);
      throw error;
    }
  },

  async getMateriaById(id: number): Promise<Materia> {
    try {
      const response = await axios.get<Materia>(`/api/materie/${id}`);
      return response.data;
    } catch (error) {
      console.error("Errore recupero materia:", error);
      throw error;
    }
  },
};
