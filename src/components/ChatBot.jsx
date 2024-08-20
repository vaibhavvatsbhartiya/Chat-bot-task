import React, { useState, useEffect } from 'react';

function ChatBot() {
  const [step, setStep] = useState(1);
  const [nameInput, setNameInput] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageQueue, setMessageQueue] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Initial messages
    setMessageQueue(['Welcome!', 'Please enter your name.']);
  }, []);

  useEffect(() => {
    if (messageQueue.length > 0 && messageIndex < messageQueue.length) {
      processNextMessage();
    }
  }, [messageQueue, messageIndex]);

  useEffect(() => {
    if (step === 2 && userMessage) {
      setIsTyping(true);
      fetchGPT4Response(userMessage);
    }
  }, [step, userMessage]);

  const fetchGPT4Response = async (message) => {
    const response = await fetch('/api/gpt4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setMessageQueue((prevQueue) => [
      ...prevQueue,
      data.reply,
    ]);
    setMessageIndex(0); // Restart index to show new messages
  };

  const processNextMessage = () => {
    if (messageIndex >= messageQueue.length) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: messageQueue[messageIndex] },
      ]);
      setMessageIndex(messageIndex + 1);
      setIsTyping(false);
      // If there are more messages, set typing again before processing next
      if (messageIndex < messageQueue.length - 1) {
        setIsTyping(true);
      }
    }, 1000); // Delay for showing messages
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Handle name input
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: nameInput },
      ]);
      setMessageQueue([
        `Hello ${nameInput}!`,
        'How can I help you?',
      ]);
      setMessageIndex(0);
      setStep(2);
      setIsTyping(true);
    } else if (step === 2) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: userMessage },
      ]);
      setUserMessage('');
      setIsTyping(true);
      fetchGPT4Response(userMessage);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-full h-full flex flex-col justify-between">
      {/* Header */}
      <div className="bg-blue-600 text-white py-2 px-4 rounded-t-lg">
        <h2 className="text-lg font-bold">RenovatorBot</h2>
      </div>

      {/* Chat Messages */}
      <div className="p-4 flex-grow overflow-y-auto">
        {chatMessages.map((msg, index) => (
          <p
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-xs ${
              msg.type === 'bot'
                ? 'bg-blue-100 text-blue-700 self-start'
                : 'bg-gray-200 text-gray-900 self-end text-right'
            }`}
          >
            {msg.text}
          </p>
        ))}
        {isTyping && (
          <p className="mb-2 p-2 rounded-lg max-w-xs bg-gray-300 text-gray-600 self-start">
            typing...
          </p>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleInputSubmit} className="bg-gray-100 p-3 rounded-b-lg flex items-center">
        {step === 1 ? (
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter your name"
            className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        ) : (
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message"
            className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        )}
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
