import mysql, { Connection } from 'mysql2'

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studibo'
});

