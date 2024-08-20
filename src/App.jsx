// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/image-analysis" element={<ImageUploadPage />} />
          <Route path="/services/chat-with-ai" element={<AIChatPage />} />
          <Route path="/services/rag-service" element={<RAGPage />} />
          <Route path="/services/cost-estimation" element={<CostEstimationPage />} />
          <Route path="/services/schedule-appointment" element={<AppointmentSchedulingPage />} />
        </Routes>
        <ChatIcon />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
