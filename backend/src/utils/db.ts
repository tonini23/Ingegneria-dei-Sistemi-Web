import mysql, { Connection } from 'mysql2'

// Configurazione della connessione al database MySQL
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studibo'
});

