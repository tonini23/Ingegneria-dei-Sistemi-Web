export interface Utente {
    id: number;
    nome: string;
    cognome: string;
    matricola: number; 
    email: string;
    password: string;
}


export interface Materia {
    id: number;
    nome: string;
    corso: string;
}


export interface Prenotazione {
    id: number;
    data: string;     
    ora: string;      
    localita: string;
    id_materia: number;
    id_tutor: number;
    id_studente: number;
}
