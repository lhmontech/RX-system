const mysql = require('mysql2');
require('dotenv').config();

// Conexão com banco do raio-x
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

// Conexão com banco de pacientes
const connectPacientes = mysql.createConnection({
    host: process.env.PACIENTES_DB_HOST,
    user: process.env.PACIENTES_DB_USER,
    password: process.env.PACIENTES_DB_PASSWORD,
    database: process.env.PACIENTES_DB_NAME,
    port: process.env.PACIENTES_DB_PORT
});
  
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar no banco de dados:', err);
    } else {
      console.log('Conectado ao banco de dados MySQL.');
    }
  });
  connectPacientes.connect((err) => {
    if (err) {
      console.error('Erro ao conectar no banco de pacientes:', err);
    } else {
      console.log('Conectado ao banco de pacientes.');
    }
  });
  
  module.exports = {connection, connectPacientes};