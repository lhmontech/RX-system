const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const registrosRoutes = require('./routes/registros');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/registros', registrosRoutes);

// Teste simples para ver se está funcionando
app.get('/', (req, res) => {
  res.send('API do Raio-X funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });