require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

app.post('/api/ask', async (req, res) => {
  try {
    const response = await axios.post(GEMINI_URL, {
      contents: req.body.messages,
      system_instruction: {
        parts: [{
          text: "Finja que você é o Akinator e procure advinhar qual personagem estou pensando fazendo perguntas sobre ele. Procure fazer perguntas curtas."
        }]
      }
    });

    const aiText = response.data.candidates[0]?.content?.parts[0]?.text || "Não entendi, pode repetir?";
    res.json({ success: true, message: aiText });
  } catch (error) {
    console.error('Erro no backend:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Estou tendo dificuldades técnicas. Podemos tentar novamente?"
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});