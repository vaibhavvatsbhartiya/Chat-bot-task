// src/pages/AIChatPage.js
import React, { useState } from 'react';

const AIChatPage = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      setInput('');

      // Simulate bot response after a short delay
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'This is a response from the AI bot.', isBot: true }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Advanced AI-Powered Interaction</h2>
        <p className="text-gray-700 mb-6">
          Engage in natural, meaningful conversations with our GPT-4 powered chatbot. Whether it’s answering questions or analyzing images, the bot delivers intelligent and context-aware responses.
        </p>
        <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${message.isBot ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="border border-gray-300 rounded-lg p-2 flex-1"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;
