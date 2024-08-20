// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import ImageUploadPage from "./pages/provided_service/ImageUploadPage";
import AIChatPage from "./pages/provided_service/AIChatPage";
import RAGPage from "./pages/provided_service/RAGPage";
import CostEstimationPage from "./pages/provided_service/CostEstimationPage";
import AppointmentSchedulingPage from "./pages/provided_service/AppointmentSchedulingPage";
import ChatIcon from "./components/ChatIcon";
import LoginForm from "./components/LoginForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/image-analysis" element={<ImageUploadPage />} />
            <Route path="/services/chat-with-ai" element={<AIChatPage />} />
            <Route path="/services/rag-service" element={<RAGPage />} />
            <Route path="/services/cost-estimation" element={<CostEstimationPage />} />
            <Route path="/services/schedule-appointment" element={<AppointmentSchedulingPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
      <ChatIcon />  
      <Footer />  
      <ToastContainer /> 
    </Router>
  );
}

export default App;
