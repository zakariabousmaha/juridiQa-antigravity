import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CRM from './pages/CRM';
import Generator from './pages/Generator';
import AIAssistant from './pages/AIAssistant';
import Signatures from './pages/Signatures';
import Checkout from './pages/Checkout';

// Placeholder for Login
const Login = () => <div className="p-10 text-center">Login Page Placeholder</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/monitoring" element={<div className="p-8">Monitoring Module</div>} />
          <Route path="/signatures" element={<Signatures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
