const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.150.82',
  user: 'mestre',
  password: '123456',
  database: 'bdraiox'
});

connection.connect();

const query = `DELETE FROM registros WHERE datarealizada < DATE_SUB(CURDATE(), INTERVAL 3 MONTH)`;

connection.query(query, (err, result) => {
  if (err) console.error("Erro ao apagar registros:", err);
  else console.log("Registros antigos apagados:", result.affectedRows);
  connection.end();
});
