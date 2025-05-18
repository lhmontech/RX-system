const mysql = require("mysql2");
require("dotenv").config();

// Conexão com banco do raio-x, onde é salvo os registros
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Conexão com banco do hospital onde é buscado os dados dos pacientes
const connectPacientes = mysql.createConnection({
  host: process.env.PACIENTES_DB_HOST,
  user: process.env.PACIENTES_DB_USER,
  password: process.env.PACIENTES_DB_PASSWORD,
  database: process.env.PACIENTES_DB_DATABASE,
  port: process.env.PACIENTES_DB_PORT,
});

//Retorno de erro do banco do raio-x
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados do raio-x.");
  }
});

//Retorno de erro do banco de pacientes
connectPacientes.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de pacientes:", err);
  } else {
    console.log("Conectado ao banco de pacientes.");
  }
});

module.exports = { connection, connectPacientes };