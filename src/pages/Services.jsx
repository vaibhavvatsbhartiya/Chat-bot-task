// src/pages/Services.js
import React from "react";
import ServiceCard from "../components/ServiceCard";
import {
  GiBodySwapping,
  GiArtificialIntelligence,
  GiPriceTag,
} from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      logo: <GiBodySwapping className="text-4xl text-blue-500" />,
      route: "/services/schedule-appointment",
      serviceName: "Hassle-Free Appointment Scheduling",
      serviceDescription:
        "Book appointments with professionals seamlessly through the chatbot. Choose your preferred date and time, and let the chatbot handle the rest, ensuring you get the help you need when you need it.",
    },
    {
      id: 2,
      logo: <IoImages className="text-4xl text-blue-500" />,
      route: "/services/image-analysis",
      serviceName: "Image Upload and Analysis",
      serviceDescription:
        "Upload images directly to the chatbot for a detailed analysis. Whether it’s identifying repair needs or evaluating home conditions, our AI-powered image recognition provides accurate insights.",
    },
    {
      id: 3,
      logo: <GiArtificialIntelligence className="text-4xl text-blue-500" />,
      route: "/services/rag-service",
      serviceName: "Enhanced Responses with RAG",
      serviceDescription:
        "Experience superior interaction with Retrieval Augmented Generation (RAG). The chatbot retrieves relevant information from vast data sources to provide precise and informed responses to your inquiries.",
    },
    {
      id: 4,
      logo: <RiRobot3Fill className="text-4xl text-blue-500" />,
      route: "/services/chat-with-ai",
      serviceName: "Advanced AI-Powered Interaction",
      serviceDescription:
        "Engage in natural, meaningful conversations with our GPT-4 powered chatbot. Whether it’s answering questions or analyzing images, the bot delivers intelligent and context-aware responses.",
    },
    {
      id: 5,
      logo: <GiPriceTag className="text-4xl text-blue-500" />,
      route: "/services/cost-estimation",
      serviceName: "Accurate Cost Estimation",
      serviceDescription:
        "Plan your budget with confidence. Provide basic details, and our chatbot will deliver accurate cost estimates for your home improvement projects, helping you manage expenses effectively.",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div id="services" className="bg-gray-100 flex flex-wrap justify-evenly p-4">
      {data.map((service) => (
        <ServiceCard
          key={service.id}
          logo={service.logo}
          heading={service.serviceName}
          description={service.serviceDescription}
          onClick={() => handleCardClick(service.route)}
        />
      ))}
    </div>
  );
};

export default Services;
