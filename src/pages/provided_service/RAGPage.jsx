// src/pages/RAGPage.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RAGPage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.warn("this functionlality is not working because API is not available right now");
    // Mock function to simulate the response from RAG
    const fetchResponse = async (query) => {
      // In a real implementation, replace this with an API call to your RAG service
      // Example:
      // const res = await fetch('/api/rag', { method: 'POST', body: JSON.stringify({ query }) });
      // const data = await res.json();
      // return data.response;

      // Mock response for demonstration purposes
      return `Response for query: "${query}" from RAG`;
    };

    const ragResponse = await fetchResponse(query);
    setResponse(ragResponse);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Enhanced Responses with RAG</h2>
        <p className="text-gray-700 mb-6">
          Experience superior interaction with Retrieval Augmented Generation (RAG). The chatbot retrieves relevant information from vast data sources to provide precise and informed responses to your inquiries.
        </p>
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="query" className="block text-gray-700 mb-2">Your Query</label>
          <input
            id="query"
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Type your query here"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Get Response
          </button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold">Chatbot Response:</h3>
            <p className="text-gray-700">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RAGPage;
