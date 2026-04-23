import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WebDashboard from './components/WebDashboard';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-yk-dark selection:bg-yk-normal selection:text-yk-dark text-slate-200">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<WebDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;