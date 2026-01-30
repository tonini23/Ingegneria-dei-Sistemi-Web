import { reactive } from "vue";
import { Utente } from "../types";
import { authService } from "../services/authService";

const authState = reactive({
  isLoggedIn: false,
  utente: null as Utente | null,
  loading: false,
});

export const auth = {
  get isLoggedIn() {
    return authState.isLoggedIn;
  },

  get utente() {
    return authState.utente;
  },

  get loading() {
    return authState.loading;
  },

  async checkAuth(): Promise<boolean> {
    authState.loading = true;
    try {
      const utente = await authService.getProfile();
      authState.utente = utente;
      authState.isLoggedIn = true;
      return true;
    } catch (error) {
      authState.utente = null;
      authState.isLoggedIn = false;
      return false;
    } finally {
      authState.loading = false;
    }
  },

  async logout() {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Errore logout:", error);
    } finally {
      authState.utente = null;
      authState.isLoggedIn = false;
    }
  },
};
