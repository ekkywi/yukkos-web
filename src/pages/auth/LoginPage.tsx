import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Lock, ArrowRight, CheckCircle2, Eye, EyeOff, AlertCircle, X } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // console.log('Login berhasil:', data);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/explore');
      } else {
        setErrorMessage(`Login gagal: ${data.message || 'Periksa kembali email dan kata sandi Anda.'}`);
      } 
    } catch (error) {
      // console.error('Error saat login:', error);
      setErrorMessage('Terjadi kesalahan jaringan. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      
      {/* === BAGIAN KIRI: BRANDING & GAMBAR (Sembunyi di Mobile) === */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden">
        {/* Gambar Latar Dianimasikan Zoom-out */}
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
          alt="Yukkos Premium Room" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-transparent"></div>
        
        {/* Wrapper Teks Kiri dengan Animasi Stagger */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 p-16 flex flex-col justify-between h-full w-full"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp}>
            <Link to="/" className="inline-block">
              <h2 className="text-4xl font-black tracking-tighter">
                <span className="text-white">Yuk</span><span className="text-orange-500">kos</span>
              </h2>
            </Link>
          </motion.div>

          <div className="space-y-6 max-w-md">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wide border border-white/20 backdrop-blur-md">
              <CheckCircle2 size={14} className="text-green-400" /> Selamat Datang Kembali
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl font-black text-white leading-tight">
              Lanjutkan <br /> Perjalananmu.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-300 text-lg leading-relaxed">
              Masuk ke akun Anda untuk mengelola properti, mengecek tagihan, atau melanjutkan pencarian kost idaman disekitar Anda.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="text-slate-400 text-sm font-medium">
            © 2026 Yukkos by Mamalia Fullstack Team.
          </motion.div>
        </motion.div>
      </div>

      {/* === BAGIAN KANAN: FORM LOGIN === */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 bg-[#F8F9FA] relative">
        
        {/* Logo untuk Mobile (Juga dianimasikan) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden mb-12 text-center"
        >
          <Link to="/" className="inline-block">
            <h2 className="text-4xl font-black tracking-tighter">
              <span className="text-slate-900">Yuk</span><span className="text-orange-500">kos</span>
            </h2>
          </Link>
        </motion.div>

        {/* Wrapper Form Kanan dengan Animasi Stagger */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-md w-full mx-auto space-y-8"
        >
          {/* Header Form */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Masuk ke Akun</h2>
            <p className="text-slate-500 mt-2">Silakan masukkan email dan kata sandi Anda.</p>
          </motion.div>

          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
            
            {/* ALERT ERROR KUSTOM */}
            {errorMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3 shadow-sm"
              >
                <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-red-800">Gagal Masuk</h4>
                  <p className="text-xs font-medium text-red-600 mt-0.5 leading-relaxed">{errorMessage}</p>
                </div>
                <button 
                  type="button" 
                  onClick={() => setErrorMessage(null)} 
                  className="text-red-400 hover:text-red-700 hover:bg-red-100 p-1 rounded-md transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}

            <div className="space-y-5">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" name="email" required
                    value={formData.email} onChange={handleInputChange}
                    placeholder="johndoe@mail.com" 
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yk-cherry/20 focus:border-yk-cherry transition-all font-medium"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between ml-1 mb-1.5">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                   {/* Link Lupa Password */}
                    <Link to="/forgot-password" className="text-xs font-bold text-yk-cherry hover:underline">
                      Lupa Password?
                    </Link>
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type={showPassword ? "text" : "password"} name="password" required
                    value={formData.password} onChange={handleInputChange}
                    placeholder="Masukkan kata sandi" 
                    className="w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yk-cherry/20 focus:border-yk-cherry transition-all font-medium"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Ingat Saya (Remember Me) */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 text-yk-cherry border-slate-300 rounded focus:ring-yk-cherry cursor-pointer" />
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium cursor-pointer select-none">
                Ingat saya di perangkat ini
              </label>
            </div>

            {/* Tombol Submit */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-yk-cherry hover:bg-yk-cherry/90 text-white font-bold p-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-yk-cherry/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isLoading ? 'Memeriksa Kredensial...' : (
                <>Masuk <ArrowRight size={18} /></>
              )}
            </button>
          </motion.form>

          {/* Footer Form */}
          <motion.p variants={fadeInUp} className="text-center text-sm text-slate-500 font-medium">
            Belum punya akun?{' '}
            <Link to="/register" className="font-bold text-slate-900 hover:text-yk-cherry transition-colors">
              Daftar sekarang
            </Link>
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
}