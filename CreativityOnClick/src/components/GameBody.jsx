import { useState , useEffect , useRef } from "react";
import axios from "axios";
import clsx from "clsx";

const GameBody = () => {
  // Controla a exibição do chat
  const [showChat, setShowChat] = useState(false);

  // Armazena as mensagens da conversa
  const [messages, setMessages] = useState([
    {
      sender: "IA",
      text: "Já posso advinhar o seu seu personagem? (Digite 'Sim para começar)",
    },
  ]);

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
	messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
	scrollToBottom();
  }, [messages])

  const API_KEY = "AIzaSyBYzMPK8QDOzmMhjyYyRGa_vCIhRgb3Dco";
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const SYSTEM_PROMPT =
    "Finja que você é o Akinator e procure advinhar qual personagem estou pensando fazendo perguntas sobre ele. Procure fazer perguntas curtas.";

  const sendMessageToAI = async (userInput) => {
    console.log("[sendMessageToAI] Iniciando com input:", userInput);
    console.log("[sendMessageToAI] Mensagens antes da requisição:", messages);

    const requestBody = {
      contents: [
        ...messages.map((msg) => ({
          role: msg.sender === "IA" ? "model" : "user",
          parts: [{ text: msg.text }],
        })),
        { role: "user", parts: [{ text: userInput }] },
      ],
      system_instruction: {
        parts: [
          {
            text: SYSTEM_PROMPT,
          },
        ],
      },
    };

    console.log(
      "[sendMessageToAI] Corpo da requisição:",
      JSON.stringify(requestBody, null, 2)
    );

    try {
      const response = await axios.post(GEMINI_API_URL, requestBody, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("[sendMessageToAI] Resposta da API:", response.data);

      const aiResponse =
        response.data.candidates[0].content.parts[0].text ||
        "Não entendi, pode repetir?";
      console.log("[sendMessageToAI] Resposta extraída:", aiResponse);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "IA", text: aiResponse },
      ]);
    } catch (error) {
      console.error("[sendMessageToAI] Erro ao conectar com a IA:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "IA",
          text: "Houve um erro ao tentar me conectar. Tente novamente.",
        },
      ]);
    }
  };

  const handleUserResponse = (event) => {
    if (event.key === "Enter") {
      const userInput = event.target.value.trim();
      if (!userInput) return;

      console.log("[handleUserResponse] Input do usuário:", userInput);

      // Adiciona a mensagem e chama a IA
      setMessages((prevMessages) => {
        const updatedMessages = [
          ...prevMessages,
          { sender: "Você", text: userInput },
        ];
        console.log(
          "[handleUserResponse] Mensagens atualizadas:",
          updatedMessages
        );
        return updatedMessages;
      });

      sendMessageToAI(userInput);
      event.target.value = "";
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-[70vh] p-4">
      {!showChat ? (
        <>
          <p className="text-lg font-medium">
            Pense em um personagem famoso e clique no botão para começar!
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Começar
          </button>
        </>
      ) : (
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
          <div className="h-64 overflow-y-auto border-b border-gray-300 mb-2 p-2">
            {messages.map((msg, index) => (
              <p key={index} className="pt-2">
                <span
                  className={clsx({
                    "text-blue-600": msg.sender === "IA",
                    "text-green-600": msg.sender !== "IA",
                    "font-medium": true,
                  })}
                >
                  {msg.sender}:
                </span>{" "}
                {msg.text}
              </p>
            ))}
			<div ref={messagesEndRef} />
          </div>

          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Digite sua resposta..."
            onKeyDown={handleUserResponse}
          />
        </div>
      )}
    </main>
  );
};

export default GameBody;
