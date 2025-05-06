const express = require("express");
const router = express.Router();
const { connection, connectPacientes, sql } = require("../database");

//Rota para buscar registros através do prontuário - Método GET
router.get('/prontuario/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await connectPacientes();
    const result = await pool.request()
      .input('prontuario', sql.VarChar, id) 
      .query('SELECT * FROM szpaciente WHERE prontuario = @prontuario');

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'Prontuário não encontrado' });
    }

    res.json(result.recordset[0]);
  } catch (err) {
    console.error('Erro ao buscar prontuário:', err);
    res.status(500).json({ error: 'Erro no banco de dados' });
  }
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

//Rota para buscar os dados - Método GET
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

//Rota para fazer consultas mais específicas via GET
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
app.put('/:id', async (req, res) => {
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
    nometecnico
  } = req.body;

  try {
    await db.query(
      `UPDATE registros SET 
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
      WHERE id = ?`,
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
        id
      ]
    );

    res.sendStatus(200);
  } catch (error) {
    console.error('Erro ao atualizar registro:', error);
    res.status(500).send('Erro ao atualizar registro');
  }
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
