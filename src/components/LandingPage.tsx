import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Coffee, Heart, ChevronRight, CheckCircle2, Calculator, TrendingUp, Mail, Globe, Phone, Quote, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [kamar, setKamar] = useState(10);
  const hargaPerKamar = 1500000;
  const estimasiPendapatan = kamar * hargaPerKamar;

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
      .format(angka)
      .replace(/\u00A0/g, ' '); 
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yk-deepblue via-[#051026] to-yk-deepblue font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <motion.div 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full pt-4 px-4 sm:pt-6 sm:px-6 z-50"
      >
        <nav className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shadow-inner p-1 sm:p-2">
               <img src="/logo-yukkos.svg" alt="Yukkos Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Yuk<span className="text-yk-cherry">kos</span></span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#ekosistem" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Ekosistem</a>
            <a href="#cerita" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Cerita Mitra</a>
            <a href="#simulasi" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Simulasi Cuan</a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="px-4 py-2 sm:px-5 sm:py-2.5 bg-yk-cherry text-white text-xs sm:text-sm font-bold rounded-full hover:bg-yk-cherry-hover transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(239,57,20,0.4)]">
              Daftar <span className="hidden sm:inline">Properti</span>
            </Link>
          </div>
        </nav>
      </motion.div>

      <main className="pt-32 sm:pt-36 pb-20 px-4 sm:px-6 relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-yk-cherry/20 to-orange-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none"></div>

        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-6 sm:mt-10">
          <motion.div 
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.2 } } }}
            className="text-left relative z-10"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-400 text-orange-400" />
              Platform Pilihan Juragan Kos
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tighter">
              Ngekos Nggak Pake <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yk-cherry to-orange-400">
                Ribet!
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed font-light max-w-lg">
              Tinggalkan buku catatan kusam Anda. Yukkos bantu promosikan kamar kosong Anda, sambil menagih uang sewa secara otomatis. Urus kos jadi lebih santai.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/dashboard" className="px-6 py-4 w-full sm:w-auto rounded-xl bg-white text-yk-deepblue font-extrabold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-slate-100 shadow-xl transition-all hover:-translate-y-1 group">
                Mulai Listing Sekarang <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* MOCKUP CARD VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto lg:ml-auto group mt-8 lg:mt-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yk-cherry to-orange-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="bg-white p-4 rounded-[2rem] shadow-2xl relative z-10">
              <div className="w-full h-40 sm:h-48 bg-slate-200 rounded-2xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-200"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-slate-700">
                  <Heart className="w-3 h-3 text-yk-cherry fill-yk-cherry" /> 124 Suka
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">KosanGrid Tlogosari</h3>
                <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> Semarang, Jawa Tengah</p>
                <div className="border-t border-slate-100 pt-4 mt-4 flex justify-between items-center">
                  <p className="text-xs text-slate-500">Mulai dari</p>
                  <p className="text-base sm:text-lg font-extrabold text-yk-cherry">Rp 1.200.000<span className="text-[10px] sm:text-xs text-slate-400 font-normal">/bln</span></p>
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-10 bg-yk-deepblue-light border border-white/10 p-3 sm:p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yk-cherry/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-yk-cherry" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-medium">Kamar A-02</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Baru saja disewa!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CERITA MITRA */}
        <div id="cerita" className="max-w-6xl mx-auto mt-32 sm:mt-40 border-t border-white/5 pt-16 sm:pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Kisah Sukses <span className="text-yk-cherry">Mitra Yukkos</span></h2>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Mendengar langsung bagaimana sistem otomatis Yukkos membantu Juragan Kos memaksimalkan potensi properti mereka.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[2rem] hover:border-yk-cherry/30 transition-colors relative group shadow-2xl"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-white/5 group-hover:text-yk-cherry/10 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 relative z-10 min-h-[120px] sm:min-h-[140px]">
                "Awalnya ragu, tapi sejak pakai Yukkos, 15 kamar saya penuh terus. Fitur pengingat tagihan otomatisnya ke WhatsApp itu juara banget."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yk-cherry/10 flex items-center justify-center border border-yk-cherry/20">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-yk-cherry" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm">Bapak Bintoro</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500">Pemilik KosanGrid</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[2rem] hover:border-yk-cherry/30 transition-colors relative group shadow-2xl"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-white/5 group-hover:text-yk-cherry/10 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 relative z-10 min-h-[120px] sm:min-h-[140px]">
                "Tampilannya sangat bersih dan gampang dipahami. Onboarding-nya kilat, hari ini daftar, besoknya langsung ada yang survei kamar."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm">Ibu Anisa</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500">Juragan Kos Putri</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[2rem] hover:border-yk-cherry/30 transition-colors relative group shadow-2xl hidden md:block"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-white/5 group-hover:text-yk-cherry/10 transition-colors" />
              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 relative z-10 min-h-[120px] sm:min-h-[140px]">
                "Fitur analitik finansialnya luar biasa. Saya jadi tahu persis proyeksi pendapatan bulan depan dan potensi kerugian kalau ada kamar kosong."
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-700/30 flex items-center justify-center border border-slate-700/50">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-sm">Mas Dimas</h4>
                  <p className="text-[10px] sm:text-xs text-slate-500">Manajer Properti</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          id="simulasi" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          className="max-w-6xl mx-auto mt-32 sm:mt-40 bg-yk-deepblue-light/50 border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 lg:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-yk-cherry/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center relative z-10 w-full">
            
            {/* Kolom Kiri */}
            <div className="col-span-1 lg:col-span-3 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-orange-500/20 shadow-inner">
                <Calculator className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight">Atur Strategi Kesuksesan Anda</h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
                Yukkos memberdayakan Anda dengan visibilitas finansial penuh. Simulasikan jumlah kamar, dan lihat potensi arus kas bersih yang bisa Anda amankan.
              </p>
              
              <div className="mb-6 p-4 sm:p-6 bg-yk-deepblue/50 rounded-2xl border border-white/5 shadow-inner">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <label className="text-sm sm:text-base font-semibold text-white">Jumlah Kamar Kosong Saat Ini:</label>
                  <span className="text-xl sm:text-2xl font-black text-yk-cherry">{kamar} Kamar</span>
                </div>
                <input 
                  type="range" min="1" max="50" value={kamar} 
                  onChange={(e) => setKamar(Number(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yk-cherry"
                  style={{ accentColor: '#ef3914' }}
                />
              </div>
            </div>

            {/* Kolom Kanan (Kartu Angka) */}
            <div className="col-span-1 lg:col-span-2 bg-[#081735] p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-3xl text-center relative w-full min-w-0">
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 w-14 h-14 sm:w-20 sm:h-20 bg-yk-deepblue-light rounded-full border border-white/10 flex items-center justify-center shadow-2xl">
                 <TrendingUp className="w-6 h-6 sm:w-10 sm:h-10 text-yk-cherry animate-pulse" />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-widest break-words">ESTIMASI PENDAPATAN BULANAN</p>
              
              <h3 className="text-4xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tighter break-words">
                {formatRupiah(estimasiPendapatan)}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-slate-500 mb-6 sm:mb-10 max-w-xs mx-auto">Angka di atas adalah potensi pendapatan kotor bulan depan dengan tingkat hunian 100% dan rata-rata sewa Rp 1.5 Juta/kamar.</p>
              <Link to="/dashboard" className="w-full block py-3 sm:py-4 rounded-xl bg-yk-cherry text-white font-extrabold hover:bg-yk-cherry-hover transition-colors shadow-lg shadow-yk-cherry/30 text-sm sm:text-base">
                Klaim Cuan Sekarang
              </Link>
            </div>
            
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#051026] mt-20 pt-16 sm:pt-20 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white/5 p-1.5 rounded-lg border border-white/10">
                 <img src="/logo-yukkos.svg" alt="Yukkos Logo" className="h-6 sm:h-7 w-auto object-contain opacity-80" />
               </div>
               <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Yuk<span className="text-yk-cherry opacity-80">kos</span></span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6 font-light">
              Ngekos nggak pake ribet! Kami mentransformasi manajemen properti konvensional menjadi ekosistem digital otomatis yang menguntungkan.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Phone].map((Icon, i) => <a href="#" key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:bg-yk-cherry hover:text-white transition-all"><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></a>)}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Ekosistem</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-400 font-light">
              {['Pemilik Kos', 'Pencari Kos', 'Analitik Bisnis', 'Manajemen Unit', 'Kontrak Digital'].map(link => <li key={link}><a href="#" className="hover:text-yk-cherry transition-colors">{link}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Perusahaan</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-400 font-light">
              {['Tentang Kami', 'Karir', 'Pusat Mitra', 'Jadi Investor', 'Hubungi Kami'].map(link => <li key={link}><a href="#" className="hover:text-yk-cherry transition-colors">{link}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Legal</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-400 font-light">
              {['Syarat & Ketentuan', 'Kebijakan Privasi', 'Keamanan Data'].map(link => <li key={link}><a href="#" className="hover:text-yk-cherry transition-colors">{link}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[10px] sm:text-xs font-mono text-center md:text-left">© 2026 Yukkos Platform (MVP v1.0). Ngekos Nggak Pake Ribet!</p>
          <p className="text-slate-500 text-[10px] sm:text-xs flex items-center gap-2 font-mono">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" /> support@yukkos.id
          </p>
        </div>
      </footer>
    </div>
  );
}