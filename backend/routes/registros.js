const express = require("express");
const router = express.Router();
const { connection, connectPacientes} = require("../database");

//Rota para buscar registros de um outro banco através do prontuário - Método GET
router.get("/prontuario/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM szpaciente WHERE prontuario = ? LIMIT 1`;

  connectPacientes.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao executar a query:', err); 
      return res.status(500).json({ error: "Erro no banco de dados", detalhes: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Prontuário não encontrado" });
    }

    res.json(results[0]);
  });
});

//Rota para inclusão de dados - Método POST
router.post("/", (req, res) => {
  console.log(req.body);

  const {
    nomepaciente,
    sexo,
    datanascimento,
    exame,
    qtdincidencias,
    origem,
    reexposicao,
    motivo,
    datarealizada,
    horapedido,
    horarealizada,
    nometecnico,
  } = req.body;

  const query = `
  INSERT INTO registros(
    nomepaciente, sexo, datanascimento, exame, qtdincidencias, 
    origem, reexposicao, motivo, datarealizada,
    horapedido, horarealizada, nometecnico
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [
      nomepaciente,
      sexo,
      datanascimento,
      exame,
      qtdincidencias,
      origem,
      reexposicao,
      motivo,
      datarealizada,
      horapedido,
      horarealizada,
      nometecnico,
    ],
    (err, results) => {
      if (err) {
        console.error("Erro ao inserir o registro:", err);
        res.status(500).json({ error: "Erro ao salvar no banco de dados" });
      } else {
        res.status(201).json({ message: "Registro salvo com sucesso!" });
      }
    }
  );
});

//Rota que faz uma busca e retorna os dados - Método GET
router.get("/", (req, res) => {
  const query = `
    SELECT * FROM registros
    ORDER BY id DESC
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao buscar registros:", err);
      res.status(500).json({ error: "Erro ao buscar registros" });
    } else {
      res.json(results);
    }
  });
});

//Rota para fazer busca usando filtros váriados - Método GET
router.get("/filtro", (req, res) => {
  const { dataInicio, dataFim, exame, sexo, origem, idadeInicio, idadeFim } =
    req.query;

  let query = `
    SELECT * 
    FROM registros 
    WHERE 1=1`;
  const values = [];

  if (dataInicio && dataFim) {
    query += " AND datarealizada BETWEEN ? AND ?";
    values.push(dataInicio, dataFim);
  }

  if (exame) {
    query += " AND exame = ?";
    values.push(exame);
  }

  if (sexo) {
    query += " AND sexo = ?";
    values.push(sexo);
  }

  if (origem) {
    query += " AND origem = ?";
    values.push(origem);
  }

  if (idadeInicio && idadeFim) {
    query +=
      " AND TIMESTAMPDIFF(YEAR, datanascimento, CURDATE()) BETWEEN ? AND ?";
    values.push(idadeInicio, idadeFim);
  }

  query += " ORDER BY datarealizada DESC";

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Erro ao buscar registros:", err);
      res.status(500).json({ error: "Erro ao buscar registros" });
    } else {
      res.json(results);
    }
  });
});

//Rota para editar um registro - Método PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    nomepaciente,
    sexo,
    datanascimento,
    exame,
    qtdincidencias,
    origem,
    reexposicao,
    motivo,
    datarealizada,
    horapedido,
    horarealizada,
    nometecnico,
  } = req.body;

  const query = `
    UPDATE registros SET 
      nomepaciente = ?, 
      sexo = ?, 
      datanascimento = ?, 
      exame = ?, 
      qtdincidencias = ?, 
      origem = ?, 
      reexposicao = ?, 
      motivo = ?, 
      datarealizada = ?, 
      horapedido = ?, 
      horarealizada = ?, 
      nometecnico = ?
    WHERE id = ?`;

  connection.query(
    query,
    [
      nomepaciente,
      sexo,
      datanascimento,
      exame,
      qtdincidencias,
      origem,
      reexposicao,
      motivo,
      datarealizada,
      horapedido,
      horarealizada,
      nometecnico,
      id,
    ],
    (err, results) => {
      if (err) {
        console.error("Erro ao atualizar registro:", err);
        return res.status(500).send("Erro ao atualizar registro");
      }

      res.sendStatus(200);
    }
  );
});

//Rota para deletar um registro - Método DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM registros WHERE id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erro ao excluir registros:", err);
      res.status(500).json({ error: "Erro ao excluir registros" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;