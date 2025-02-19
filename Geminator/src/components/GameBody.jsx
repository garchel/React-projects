import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import clsx from "clsx";

const INITIAL_MESSAGES = [{
  sender: "GEMINATOR",
  text: "Já posso advinhar o seu seu personagem? (Digite 'Sim' para começar)",
}];

const API_CONFIG = {
  ENDPOINT: 'http://localhost:3001/api/ask',
};

const SYSTEM_INSTRUCTION = {
  role: "system",
  content: "Finja que você é o Akinator e procure advinhar qual personagem estou pensando fazendo perguntas sobre ele. Procure fazer perguntas curtas."
};

const ChatMessage = ({ sender, text }) => (
  <p className="pt-2">
    <span className={clsx("font-medium", {
      "text-blue-600": sender === "GEMINATOR",
      "text-green-600": sender !== "GEMINATOR",
    })}>
      {sender}:
    </span>{" "}
    {text}
  </p>
);

const ChatInterface = ({ messages, onSendMessage }) => {
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const userInput = event.target.value.trim();
      if (!userInput) return;
      
      onSendMessage(userInput);
      event.target.value = "";
    }
  };

  return (
    <div className="h-5/6 w-full max-w-md bg-white p-7 rounded-lg shadow-lg">
      <div className="h-6/7 overflow-y-auto border-b border-gray-300 mb-2 p-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={inputRef} />
      </div>
      
      <input
        type="text"
        className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite sua resposta..."
        onKeyDown={handleKeyPress}
        aria-label="Campo de resposta do jogo"
      />
    </div>
  );
};

const GameBody = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = useCallback(async (userInput) => {
    try {
      setMessages(prev => [...prev, { sender: "Você", text: userInput }]);
  
      const response = await axios.post(API_CONFIG.ENDPOINT, {
        messages: [
          ...messages.map(msg => ({
            role: msg.sender === "GEMINATOR" ? "model" : "user",
            parts: [{ text: msg.text }],
          })),
          { role: "user", parts: [{ text: userInput }] }
        ]
      });
  
      const aiText = response.data.success 
        ? response.data.message
        : "Houve um erro na comunicação";
  
      setMessages(prev => [...prev, { sender: "GEMINATOR", text: aiText }]);
    } catch (error) {
      console.error("Erro na comunicação:", error);
      setMessages(prev => [...prev, {
        sender: "GEMINATOR",
        text: error.response?.data?.message || "Erro de conexão com o servidor"
      }]);
    }
  }, [messages]);

  return (
    <main className="flex flex-col items-center justify-center h-[70vh] p-4">
      {!showChat ? (
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <p className="text-lg font-medium text-center mb-4">
            Pense em um personagem famoso e clique para começar!
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg 
              shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
          >
            Iniciar Desafio
          </button>
        </div>
      ) : (
        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          messagesEndRef={messagesEndRef}
        />
      )}
    </main>
  );
};

export default GameBody;