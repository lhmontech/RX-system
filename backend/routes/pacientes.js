const express = require('express');
const router = express.Router();
const connectPacientes = require('../database');

//Rota para buscar registros através do prontuário - Método GET
router.get('/prontuario/:id', (req, res) => {
    const { id } = req.params;
  
    const query = 'SELECT * FROM registros WHERE prontuario = ? LIMIT 1';
  
    connectPacientes.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Erro no banco de dados' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'Prontuário não encontrado' });
      }
  
      res.json(results[0]);
    });
  });

  module.exports = router;