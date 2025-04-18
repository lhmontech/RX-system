const express = require('express');
const router = express.Router();
const connection = require('../database');

//Rota para inclusão de dados - Método POST
router.post('/', (req, res) => {
    console.log(req.body);
    const {
        prontuario,
        nomepaciente,
        sexo,
        datanascimento,
        exame,
        qtdincidencias,
        dataatual,
        datapedido,
        horaatual,
        horapedido,
        nometecnico
    } = req.body;

    const query = `
    INSERT INTO registros(
        prontuario, nomepaciente, sexo, datanascimento, exame, qtdincidencias,
        dataatual, datapedido, horaatual, horapedido, nometecnico
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        query,
        [
            prontuario, nomepaciente, sexo, datanascimento, exame, qtdincidencias,
            dataatual, datapedido, horaatual, horapedido, nometecnico
        ],
        (err, results) => {
            if (err){
                console.error('Erro ao inserir o registro:', err);
                res.status(500).json({ error: 'Erro ao salvar no banco de dados'});
            }else{
                res.status(201).json({message: 'Registro salvo com sucesso!'});
            }
        }
    );
});

//Rota para buscar os dados - Método GET
router.get('/',(req, res) =>{
    const query = `
        SELECT * FROM registros
        ORDER BY id DESC
        LIMIT 30
    `;

    connection.query(query, (err, results) => {
        if (err){
            console.error('Erro ao buscar registros:', err);
            res.status(500).json({ error: 'Erro ao buscar registros'});
        }else{
            res.json(results);
        }
    });
});

module.exports = router;