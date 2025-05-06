const mysql = require("mysql2");
const sql = require('mssql');
require("dotenv").config();

// Conexão com banco do raio-x
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Conexão com banco de pacientes
async function connectPacientes() {
  try {
    const pool = await sql.connect({
      user: process.env.PACIENTES_DB_USER,
      password: process.env.PACIENTES_DB_PASSWORD,
      server: process.env.PACIENTES_DB_HOST,
      database: process.env.PACIENTES_DB_DATABASE,
      port: parseInt(process.env.PACIENTES_DB_PORT),
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    });

    console.log('Conectado ao banco de pacientes com sucesso!');
    return pool;
  } catch (err) {
    console.error('Erro ao conectar ao banco de pacientes:', err);
    throw err;
  }
}
  
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL.");
  }
});

module.exports = { connection, connectPacientes, sql };
