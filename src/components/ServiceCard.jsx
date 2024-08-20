// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ id, logo, heading, description, onClick }) => {
  return (
    <div 
      className="max-w-sm mt-8 max-h-60 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer" 
      key={id} 
      onClick={onClick} // Attach the onClick handler
    >
      <div className="flex items-center p-4 border-b border-gray-200">
        {logo}
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
