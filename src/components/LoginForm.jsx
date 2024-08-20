// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast function from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    usernameOrEmail: '',
    password: '',
  });

  // Access environment variables
  const tempUsername = import.meta.env.VITE_APP_USERNAME;
  const tempPassword = import.meta.env.VITE_APP_PASSWORD;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log submitted credentials
    console.log('Submitted Username:', credentials.usernameOrEmail);
    console.log('Submitted Password:', credentials.password);

    // Temporary authentication logic
    if (
      credentials.usernameOrEmail === tempUsername &&
      credentials.password === tempPassword
    ) {
      console.log('Login successful');
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Login successful'); // Show success notification
      navigate('/'); // Redirect to home page
    } else {
      console.error('Login failed: Invalid credentials');
      toast.error('Invalid username or password'); // Show error notification
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="usernameOrEmail" className="block text-gray-700">
            Username or Email <span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={credentials.usernameOrEmail}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password <span className='text-red-500'>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
