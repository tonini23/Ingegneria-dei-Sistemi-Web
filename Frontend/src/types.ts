export interface Utente {
    Id: number;
    Nome: string;
    Cognome: string;
    Matricola: number; 
    Email: string;
    Password: string;
}


export interface Materia {
    Id: number;
    Nome: string;
    Corso: string;
}


export interface Prenotazione {
    Id: number;        
    Data: string;      
    Ora: string;       
    Localita: string;  
    materia_nome?: string; 
    nome_studente: string;    
    cognome_studente: string; 
    id_tutor: number;
    id_studente: number;
}
