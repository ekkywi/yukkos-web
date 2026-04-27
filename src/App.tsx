import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import MarketplacePage from './pages/public/MarketplacePage';
import KostDetailPage from './pages/public/KostDetailPage';


// Import Pages
import LandingPage from './pages/home/LandingPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.1)'
          }
        }} 
      />

      <Routes>
        {/* Rute publik */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<MarketplacePage />} />
        <Route path="/kost/:id" element={<KostDetailPage />} />

        {/* Rute guest */}
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Rute private */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}