import React from "react";
import { useParams } from "react-router-dom";
import {
  GiBodySwapping,
  GiArtificialIntelligence,
  GiPriceTag,
} from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";

const serviceData = [
  {
    id: 1,
    logo: <GiBodySwapping className="text-4xl text-blue-500" />,
    serviceName: "Hassle-Free Appointment Scheduling",
    serviceDescription:
      "Book appointments with professionals seamlessly through the chatbot. Choose your preferred date and time, and let the chatbot handle the rest, ensuring you get the help you need when you need it.",
    details: "Detailed information about appointment scheduling...",
  },
  {
    id: 2,
    logo: <IoImages className="text-4xl text-blue-500" />,
    serviceName: "Image Upload and Analysis",
    serviceDescription:
      "Upload images directly to the chatbot for a detailed analysis. Whether it’s identifying repair needs or evaluating home conditions, our AI-powered image recognition provides accurate insights.",
    details: "Detailed information about image upload and analysis...",
  },
  {
    id: 3,
    logo: <GiArtificialIntelligence className="text-4xl text-blue-500" />,
    serviceName: "Enhanced Responses with RAG",
    serviceDescription:
      "Experience superior interaction with Retrieval Augmented Generation (RAG). The chatbot retrieves relevant information from vast data sources to provide precise and informed responses to your inquiries.",
    details: "Detailed information about RAG...",
  },
  {
    id: 4,
    logo: <RiRobot3Fill className="text-4xl text-blue-500" />,
    serviceName: "Advanced AI-Powered Interaction",
    serviceDescription:
      "Engage in natural, meaningful conversations with our GPT-4 powered chatbot. Whether it’s answering questions or analyzing images, the bot delivers intelligent and context-aware responses.",
    details: "Detailed information about AI-powered interaction...",
  },
  {
    id: 5,
    logo: <GiPriceTag className="text-4xl text-blue-500" />,
    serviceName: "Accurate Cost Estimation",
    serviceDescription:
      "Plan your budget with confidence. Provide basic details, and our chatbot will deliver accurate cost estimates for your home improvement projects, helping you manage expenses effectively.",
    details: "Detailed information about cost estimation...",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="p-8">
      <div className="flex items-center">
        {service.logo}
        <h2 className="text-3xl font-bold ml-4">{service.serviceName}</h2>
      </div>
      <p className="text-lg text-gray-700 mt-4">{service.serviceDescription}</p>
      <p className="text-base text-gray-600 mt-4">{service.details}</p>
    </div>
  );
};

export default ServiceDetail;
