import React from "react";
import FAQ from "../components/Faq";

function HomePage() {
  const faqs = [
    {
      question: "What is this chatbot for?",
      answer:
        "This chatbot assists you with various home improvement tasks, including scheduling appointments, providing cost estimates, answering FAQs, and more.",
    },
    {
      question: "How do I schedule an appointment through the chatbot?",
      answer:
        "You can schedule an appointment by providing your preferred date and time when prompted by the chatbot. It will handle the rest for you.",
    },
    {
      question: "Can I upload images for analysis?",
      answer:
        "Yes, you can upload images to the chatbot, which will analyze them to identify repair needs or evaluate home conditions.",
    },
    {
      question: "How does the cost estimation feature work?",
      answer:
        "The chatbot can provide cost estimates based on the data you provide. Simply input the necessary details, and the chatbot will calculate an estimate for your home improvement project.",
    },
    {
      question: "What is GPT-4, and how does it help the chatbot?",
      answer:
        "GPT-4 is a powerful AI model used by the chatbot to understand natural language, generate intelligent responses, and analyze images for home improvement tasks.",
    },
    {
      question: "What is Retrieval Augmented Generation (RAG)?",
      answer:
        "RAG is a technique that enhances the chatbot's responses by retrieving relevant information from vast data sources, ensuring accurate and informative answers.",
    },
    {
      question: "What are vector stores, and why are they used?",
      answer:
        "Vector stores like ChromaDB or Coordinate are used to efficiently retrieve data, allowing the chatbot to provide quick and relevant responses.",
    },
    {
      question: "Can the chatbot handle form filling?",
      answer:
        "Yes, the chatbot can assist with form filling, such as entering your name, email, and phone number for various home improvement services.",
    },
    {
      question: "How does the image upload and analysis feature work?",
      answer:
        "You can upload an image directly to the chatbot, and it will analyze the image using AI to provide insights related to home repair or improvement needs.",
    },
    {
      question: "Is my data secure when using the chatbot?",
      answer:
        "Yes, your data is handled securely, and the chatbot adheres to strict privacy protocols to ensure your information is protected at all times.",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Our Home Improvement Website
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your one-stop solution for all home repair needs.
        </p>
      </section>
      <FAQ faqs={faqs} />
    </>
  );
}

export default HomePage;
