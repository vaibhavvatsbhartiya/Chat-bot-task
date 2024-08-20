// src/pages/CostEstimationPage.js
import React, { useState } from 'react';

const CostEstimationPage = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    projectScope: '',
    estimatedCost: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEstimate = () => {
    // Simple cost estimation logic based on input
    let cost = 0;

    if (formData.projectType === 'renovation') {
      cost = 5000;
    } else if (formData.projectType === 'construction') {
      cost = 10000;
    }

    if (formData.projectScope === 'large') {
      cost += 3000;
    } else if (formData.projectScope === 'medium') {
      cost += 1500;
    }

    setFormData({
      ...formData,
      estimatedCost: cost,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Accurate Cost Estimation</h2>
        <p className="text-gray-700 mb-6">
          Plan your budget with confidence. Provide basic details, and our chatbot will deliver accurate cost estimates for your home improvement projects, helping you manage expenses effectively.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">Select Project Type</option>
            <option value="renovation">Renovation</option>
            <option value="construction">Construction</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Project Scope</label>
          <select
            name="projectScope"
            value={formData.projectScope}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">Select Project Scope</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button
          onClick={handleEstimate}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Get Estimate
        </button>
        {formData.estimatedCost !== null && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold">Estimated Cost:</h3>
            <p className="text-gray-700">${formData.estimatedCost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostEstimationPage;
