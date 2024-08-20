import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 bg-gray-100 p-4">
          <div
            className="flex justify-between items-center cursor-pointer  "
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium text-blue-600">{faq.question}</h3>
            {activeIndex === index ? (
              <FaChevronUp className="text-blue-600" />
            ) : (
              <FaChevronDown className="text-blue-600" />
            )}
          </div>
          {activeIndex === index && (
            <p className="text-gray-700  w-full mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
