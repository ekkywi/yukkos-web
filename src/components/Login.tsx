import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, AlertCircle, Loader2, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Email atau password salah');
      }

      // SIMPAN TOKEN & DATA USER
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Arahkan ke Dashboard atau Home
      navigate('/');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#051026] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Efek Latar Belakang - Berbeda warna sedikit dari Register untuk variasi */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-yk-cherry/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-6">
            <div className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shadow-inner px-3 overflow-hidden">
               <img src="/logo-yukkos.svg" alt="Yukkos Logo" className="h-[80%] w-auto object-contain drop-shadow-md" />
            </div>
          </Link>
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">Selamat Datang Kembali</h2>
          <p className="text-sm text-slate-400 font-light">Masuk untuk mengelola hunian Anda.</p>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Email */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yk-cherry/50 focus:border-yk-cherry transition-all text-sm"
                placeholder="juragan@yukkos.com"
              />
            </div>
          </div>

          {/* Input Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="text-xs font-medium text-slate-400">Kata Sandi</label>
              <a href="#" className="text-[10px] text-yk-cherry hover:underline">Lupa sandi?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yk-cherry/50 focus:border-yk-cherry transition-all text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 px-4 bg-yk-cherry hover:bg-yk-cherry-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 shadow-[0_0_20px_rgba(239,57,20,0.3)]"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>Masuk Sekarang <LogIn className="w-5 h-5" /></>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400 font-light">
          Belum punya akun?{' '}
          <Link to="/register" className="text-yk-cherry font-bold hover:underline">
            Daftar Gratis
          </Link>
        </p>
      </motion.div>
    </div>
  );
}