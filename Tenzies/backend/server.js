import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();

const app = express();
const port = 3001;

// Permite CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Endpoint para retornar a chave de API do Unsplash
app.get('/api/config', (req, res) => {
  const config = {
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY
  };
  res.json(config);
});

// Endpoint para retornar uma imagem aleatória do Unsplash com base em um parâmetro de pesquisa
app.get('/api/random-photo', async (req, res) => {
  try {
    // Pega o parâmetro 'query' passado pela requisição ou usa 'game' como padrão
    const query = req.query.query || 'game';
    const apiKey = process.env.UNSPLASH_API_KEY;

    // Faz a requisição para o Unsplash com o 'query' recebido
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${apiKey}`
      },
      params: {
        query: query,  // Passa o parâmetro 'query' para buscar imagens relacionadas
        count: 1        // Define a quantidade de imagens retornadas
      }
    });

    // Verifica se a resposta tem dados e retorna a URL da imagem
    if (response.data && response.data.length > 0) {
      res.json({ photoUrl: response.data[0].urls.regular });
    } else {
      res.status(500).json({ error: "No images found" });
    }
  } catch (error) {
    console.error("Error fetching Unsplash photo", error);
    res.status(500).json({ error: "Failed to fetch photo" });
  }
});

// Inicia o servidor na porta 3001
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
