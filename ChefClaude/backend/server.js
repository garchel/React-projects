require('dotenv').config();

const express = require('express');
const app = express();
const port = 3001; // Escolha uma porta diferente da porta do frontend (geralmente 5173 ou 3000)

// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Rota para retornar as variáveis de ambiente
app.get('/api/config', (req, res) => {
  const config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
  };
  res.json(config);
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});