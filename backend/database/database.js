const mysql = require("mysql2");
const sql = require("mssql");
require("dotenv").config();

// Conexão com banco do raio-x
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL.");
  }
});

// Conexão com banco de pacientes
const connection = mysql.createConnection({
  host: process.env.PACIENTES_DB_HOST,
  user: process.env.PACIENTES_DB_USER,
  password: process.env.PACIENTES_DB_PASSWORD,
  database: process.env.PACIENTES_DB_DATABASE,
  port: process.env.PACIENTES_DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados MySQL.");
  }
});

module.exports = { connection, connectPacientes, sql };
