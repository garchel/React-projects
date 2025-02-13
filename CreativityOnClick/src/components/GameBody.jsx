import { useState } from "react";
import axios from "axios";

const GameBody = () => {
  // Controla a exibição do chat
  const [showChat, setShowChat] = useState(false);

  // Armazena as mensagens da conversa
  const [messages, setMessages] = useState([
    {
      sender: "IA",
      text: "Já pensou no seu personagem? (Digite 'Sim para começar)",
    },
  ]);

  const sendMessageToAI = async (userInput) => {
    const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
    cibst API_KEY = "AIzaSyBYzMPK8QDOzmMhjyYyRGa_vCIhRgb3Dco"
  };


  const handleUserResponse = (event) => {
    if (event.key === "Enter") {
      const userInput = event.target.value.trim(); // Captura o input e remove espaços
      if (!userInput) return;

      // Adiciona a resposta do user ao histórico de msgs
      setMessages([...messages, { sender: "Você", text: userInput }]);
      event.target.value = ""; // Limpa o input
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
                <span className={`text-${msg.sender === "IA" ? "blue" : "green"}-600 font-medium`}>{msg.sender}:</span> {msg.text}
              </p>
            ))}
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
