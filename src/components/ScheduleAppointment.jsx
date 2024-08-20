
import React, { useState, useEffect } from 'react';

const ScheduleAppointment = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });
  
    // State to hold the minimum date
    const [minDate, setMinDate] = useState('');
  
    useEffect(() => {
      // Get today's date and format it as YYYY-MM-DD
      const today = new Date();
      today.setDate(today.getDate() + 1); // Add 1 day to the current date
      const formattedDate = today.toISOString().split('T')[0];
      setMinDate(formattedDate);
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle appointment scheduling logic here
      console.log('Appointment Data:', formData);
      // You can add form submission logic or API calls here
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white m-8 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Hassle-Free Appointment Scheduling</h2>
          <p className="text-gray-700 mb-6">
            Book appointments with professionals seamlessly through the chatbot. Choose your preferred date and time, and let the chatbot handle the rest, ensuring you get the help you need when you need it.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name <span className='text-red-500'>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email <span className='text-red-500'>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number <span className='text-red-500'>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">Date <span className='text-red-500'>*</span></label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate} // Set the minimum date to tomorrow
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700">Time <span className='text-red-500'>*</span></label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Schedule Appointment
            </button>
          </form>
        </div>
      </div>
    );
  };
  

  export default ScheduleAppointment;
