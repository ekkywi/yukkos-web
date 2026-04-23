import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building2, UserCircle2, ArrowRight, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'OWNER' // Default: Pemilik Kos
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Panggil API Backend Anda
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan saat mendaftar');
      }

      setSuccess(true);
      // Pindah ke halaman login setelah 2 detik
      setTimeout(() => navigate('/login'), 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#051026] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Efek Latar Belakang */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yk-cherry/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-2 mx-auto shadow-inner">
              <img src="/logo-yukkos.svg" alt="Yukkos Logo" className="h-full w-auto object-contain drop-shadow-md" />
            </div>
          </Link>
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">Mulai Perjalanan Anda</h2>
          <p className="text-sm text-slate-400 font-light">Bergabung dengan ekosistem kos digital terbaik.</p>
        </div>

        {/* Pesan Error / Sukses */}
        {error && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">{error}</p>
          </motion.div>
        )}
        
        {success && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <p className="text-sm text-green-200">Registrasi berhasil! Mengarahkan ke halaman login...</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Pemilihan Role */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'OWNER' })}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                formData.role === 'OWNER' 
                  ? 'bg-yk-cherry/10 border-yk-cherry text-white shadow-[0_0_15px_rgba(239,57,20,0.2)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              <Building2 className={`w-6 h-6 ${formData.role === 'OWNER' ? 'text-yk-cherry' : ''}`} />
              <span className="text-xs font-bold">Pemilik Kos</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'SEEKER' })}
              className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                formData.role === 'SEEKER' 
                  ? 'bg-blue-500/10 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              <UserCircle2 className={`w-6 h-6 ${formData.role === 'SEEKER' ? 'text-blue-500' : ''}`} />
              <span className="text-xs font-bold">Pencari Kos</span>
            </button>
          </div>

          {/* Input Nama */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Nama Lengkap</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yk-cherry/50 focus:border-yk-cherry transition-all text-sm"
                placeholder="Budi Santoso"
              />
            </div>
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email Aktif</label>
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
                placeholder="budi@email.com"
              />
            </div>
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Kata Sandi</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="password"
                required
                minLength={6}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yk-cherry/50 focus:border-yk-cherry transition-all text-sm"
                placeholder="Minimal 6 karakter"
              />
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full mt-6 py-4 px-4 bg-yk-cherry hover:bg-yk-cherry-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(239,57,20,0.3)]"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : success ? (
              "Berhasil!"
            ) : (
              <>Buat Akun Yukkos <ArrowRight className="w-5 h-5" /></>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400 font-light">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-yk-cherry font-bold hover:underline">
            Masuk di sini
          </Link>
        </p>
      </motion.div>
    </div>
  );
}