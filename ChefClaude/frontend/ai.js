import axios from 'axios';

let GEMINI_API_KEY = ''; 

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
Please send the instructions in inglish and portuguese in case someone from brazil is reading
`;

async function fetchConfig() {
  try {
    const response = await axios.get('http://localhost:3001/api/config');
    // Remove quaisquer caracteres especiais ou espaços extras
    GEMINI_API_KEY = response.data.GEMINI_API_KEY.trim().replace(/[;"\s]/g, '');
  } catch (error) {
    console.error('Error fetching config:', error);
    throw new Error('Failed to fetch API key from backend');
  }
}

export async function getRecipeFromGemini(ingredientsArr) {
  if (!GEMINI_API_KEY) {
    await fetchConfig();
  }

  if (!GEMINI_API_KEY) {
    throw new Error('No API key available');
  }

  // Garante que não há ponto e vírgula ou outros caracteres especiais na URL
  const cleanApiKey = GEMINI_API_KEY.trim().replace(/[;"\s]/g, '');
  const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${cleanApiKey}`;
  
  console.log('Using endpoint:', GEMINI_ENDPOINT); // Para debug

  const ingredientsString = ingredientsArr.join(", ");
  
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `I have ${ingredientsString}. Please give me a recipe!`
          }
        ]
      }
    ],
    system_instruction: {
      parts: [
        {
          text: SYSTEM_PROMPT
        }
      ]
    },
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7
    }
  };

  try {
    const response = await axios.post(GEMINI_ENDPOINT, requestBody, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log("Gemini API response:", response.data);
    const generatedRecipe = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    return generatedRecipe || "No recipe generated.";
  } catch (error) {
    console.error("Error details:", error.response?.data);
    throw new Error(`Failed to generate recipe: ${error.response?.data?.error?.message || error.message}`);
  }
}