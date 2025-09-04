const mysql = require("mysql2/promise");
const fs = require("fs");
require("dotenv").config();

async function main() {
  try {
    // Conexão ao MySQL sem banco definido
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    });

    console.log("✅ Conectado ao MySQL");

    // Lê o arquivo SQL
    const sql = fs.readFileSync("./database/init.sql", "utf8");

    // Executa todo o SQL do arquivo
    await connection.query(sql);

    console.log("✅ Banco de dados e tabelas criados com sucesso!");

    await connection.end();
  } catch (err) {
    console.error("❌ Erro ao criar bancos/tabelas:", err.message);
  }
}

main();
