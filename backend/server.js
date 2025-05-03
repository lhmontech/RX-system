const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const registrosRoutes = require('./routes/registros');
const path = require('path');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/registros', registrosRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/*path', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
