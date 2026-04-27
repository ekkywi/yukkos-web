import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Heart, Star, MapPin, Search, 
  Play, Apple, Zap, ChevronRight
} from 'lucide-react';
import { formatRupiah } from '../../lib/utils';

// --- DATA DUMMY DENGAN GAMBAR ASLI ---
const DUMMY_KOS = [
  { id: 1, name: "Kos Exclusive Tembalang", location: "Tembalang, Semarang", price: 1500000, rating: 4.8, images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"], ownerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" },
  { id: 2, name: "Wisma Putri Kedungmundu", location: "Kedungmundu, Semarang", price: 850000, rating: 4.5, images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"], ownerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { id: 3, name: "Kost Putra Jati Gede", location: "Banyumanik, Semarang", price: 1200000, rating: 4.9, images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"], ownerAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" },
  { id: 4, name: "Green Garden Residence", location: "Semarang Barat", price: 2100000, rating: 4.7, images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"], ownerAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80" },
];

// --- VARIANT ANIMASI DENGAN TYPE VARIANTS ---
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

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } }
};

export default function LandingPage() {
  const navigate = useNavigate();
  
  const [searchForm, setSearchForm] = useState({
    location: '',
    type: '',
    maxPrice: '',
    checkIn: '',
    checkOut: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); 
    const params = new URLSearchParams();
    if (searchForm.location) params.append('location', searchForm.location);
    if (searchForm.type) params.append('type', searchForm.type);
    if (searchForm.maxPrice) params.append('maxPrice', searchForm.maxPrice);
    navigate(`/explore?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-800 overflow-hidden">
      
      {/* === NAVBAR === */}
      {/* Navbar dianimasikan turun dari atas */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-extrabold text-2xl tracking-tight">
                <span className="text-slate-900">Yuk</span>
                <span className="text-orange-500">kos</span>
              </span>
            </Link>

            {/* Menu Tengah */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
              <Link to="/" className="text-yk-cherry font-bold">Home</Link>
              <Link to="/explore" className="hover:text-yk-cherry transition-colors">Cari Kost</Link>
              <Link to="#promo" className="hover:text-yk-cherry transition-colors">Promo</Link>
            </div>

            {/* Tombol Kanan */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="font-bold text-sm text-slate-700 hover:text-yk-cherry transition-colors">Masuk</Link>
              <Link to="/register" className="bg-yk-cherry hover:bg-yk-cherry/90 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-yk-cherry/20 transition-all hover:-translate-y-0.5">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* === HERO SECTION === */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col justify-center min-h-[600px]">
        {/* Gambar Latar Belakang & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop" 
            alt="Latar Belakang Kost Nyaman" 
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"; }}
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent"></div>
        </div>

        {/* Konten Hero (Teks) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Teks Hero menggunakan motion.div dengan staggered children */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl space-y-6 mb-12"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wide border border-white/20 backdrop-blur-md">
              <Zap size={14} className="text-yellow-400 fill-current" /> Platform Manajemen dan Pencarian Kost #1
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Ngekost Nggak <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yk-cherry to-orange-400">Pake Ribet!</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-200 leading-relaxed max-w-lg">
              Temukan kost idaman di sekitar lingkungan kegiatanmu dengan mudah. Transparansi harga, bebas biaya tersembunyi, dan fasilitas terjamin.
            </motion.p>
          </motion.div>
          
          {/* --- FORM PENCARIAN (Animasi Pop In) --- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={popIn}
            className="bg-white p-5 lg:p-6 rounded-[2rem] shadow-2xl border border-slate-100 w-full max-w-7xl backdrop-blur-xl relative z-20"
          >
            <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4 lg:items-end">
              {/* Lokasi */}
              <div className="flex-1 space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Lokasi Kost</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" name="location" value={searchForm.location} onChange={handleInputChange}
                    placeholder="Tembalang" 
                    className="w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-yk-cherry" 
                  />
                </div>
              </div>

              {/* Tipe Kost */}
              <div className="w-full lg:w-48 space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Tipe Kost</label>
                <select name="type" value={searchForm.type} onChange={handleInputChange} className="w-full p-3.5 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-yk-cherry bg-white">
                  <option value="">Semua Tipe</option>
                  <option value="putra">Putra</option>
                  <option value="putri">Putri</option>
                  <option value="campur">Campur</option>
                </select>
              </div>

              {/* Harga */}
              <div className="w-full lg:w-48 space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Harga Max</label>
                <select name="maxPrice" value={searchForm.maxPrice} onChange={handleInputChange} className="w-full p-3.5 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-yk-cherry bg-white">
                  <option value="">Semua Harga</option>
                  <option value="1000000">&lt; Rp 1 Juta</option>
                  <option value="2000000">Rp 1 - 2 Juta</option>
                  <option value="3000000">&gt; Rp 2 Juta</option>
                </select>
              </div>

              {/* Tanggal */}
              <div className="flex w-full lg:w-auto gap-4">
                <div className="flex-1 lg:w-40 space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-wider">Masuk</label>
                  <input 
                    type="date" name="checkIn" value={searchForm.checkIn} onChange={handleInputChange} 
                    className="w-full px-3 py-3.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-yk-cherry bg-white text-slate-700" 
                  />
                </div>
                <div className="flex-1 lg:w-40 space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase ml-1 tracking-wider">Keluar</label>
                  <input 
                    type="date" name="checkOut" value={searchForm.checkOut} onChange={handleInputChange} 
                    className="w-full px-3 py-3.5 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-yk-cherry bg-white text-slate-700" 
                  />
                </div>
              </div>

              {/* Tombol Cari */}
              <button type="submit" className="w-full lg:w-40 bg-yk-cherry hover:bg-yk-cherry/90 text-white font-bold p-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-yk-cherry/30 h-[50px] shrink-0 mt-2 lg:mt-0">
                <Search size={18} /> Cari Kos
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* === SECTION 1: REKOMENDASI TEMPAT KOST === */}
      {/* Animasi scroll trigger (muncul saat di-scroll) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <SectionHeader title="Rekomendasi Tempat Kost" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DUMMY_KOS.map((kos) => (
             <motion.div key={kos.id} variants={fadeInUp}>
                <KosCard kos={kos} />
             </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === SECTION 2: TEMPAT KOST TERDEKAT === */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-8">
          <SectionHeader title="Tempat Kost Terdekat" noMargin />
          <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-yk-cherry transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <MapPin size={16} /> Lihat di Peta
          </button>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DUMMY_KOS.map((kos) => (
             <motion.div key={`near-${kos.id}`} variants={fadeInUp}>
                 <KosCard kos={kos} />
             </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === BANNER PROMO BERCERITA === */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="promo"
      >
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-lg">
            <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold tracking-wider mb-4 border border-white/20">
              Pencarian Yukkos
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Cari Tempat Kost Nyaman,<br/>Tanpa Drama.</h2>
            <p className="text-slate-300 mb-8 text-lg">Jelajahi tempat kost berdasarkan kebutuhan, tipe, dan harga. Mulai hidup mandiri dengan tenang.</p>
            <button 
              onClick={() => navigate('/explore')}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Mulai Eksplorasi <ChevronRight size={18} />
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Premium Room" className="w-full h-full object-cover rounded-l-[5rem] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
          </div>
        </div>
      </motion.section>

      {/* === APP PROMO EKSKLUSIF === */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-br from-yk-cherry/10 to-orange-500/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white shadow-xl">
          <div className="flex-1 flex justify-center relative">
             <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[12px] border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop" alt="App Mockup" className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-0 w-32 h-6 bg-white rounded-b-3xl"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
                  <span className="font-extrabold text-3xl mb-2 tracking-tighter">Yukkos</span>
                  <p className="text-xs">Ngekos Ngga Pake Ribet!</p>
                </div>
             </div>
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Kost Impianmu,<br/>Di Dalam Genggaman.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Booking lebih cepat, pantau tagihan, dan chat langsung dengan pemilik kos melalui aplikasi mobile Yukkos. Download sekarang!</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1">
                <Play size={24} className="text-green-400" /> 
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 font-normal">GET IT ON</div>
                  <div>Google Play</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1">
                <Apple size={24} /> 
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-slate-300 font-normal">Download on the</div>
                  <div>App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* === FOOTER === */}
      <footer className="bg-[#EAEAEA] pt-16 pb-8 border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-5 space-y-6">
              <Link to="/" className="inline-block">
                <h2 className="text-5xl font-black tracking-tighter">
                  <span className="text-slate-900">Yuk</span><span className="text-orange-500">kos</span>
                </h2>
              </Link>
              <p className="text-slate-700 text-sm leading-relaxed max-w-sm font-medium">
                Ngekos nggak pake ribet! Kami mentransformasi manajemen properti konvensional menjadi ekosistem digital otomatis yang menguntungkan
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex items-center gap-3 bg-[#D1D5DB] hover:bg-slate-400 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm"><Play size={20} className="fill-current" /> PlayStore</button>
                <button className="flex items-center gap-3 bg-[#D1D5DB] hover:bg-slate-400 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-sm"><Apple size={20} className="fill-current" /> AppleStore</button>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <h4 className="font-extrabold text-slate-800 tracking-widest uppercase text-sm">Perusahaan</h4>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Tentang Kami</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Informasi</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Kontak Kami</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <h4 className="font-extrabold text-slate-800 tracking-widest uppercase text-sm">Bantuan</h4>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Cari Kost</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Menjadi Pemilik</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">Kenapa Kami?</Link></li>
                <li><Link to="#" className="hover:text-orange-500 transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-3 space-y-5">
              <h4 className="font-extrabold text-slate-800 tracking-widest uppercase text-sm">Info Kontak</h4>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li>1234567890</li>
                <li>hello@mamfull.com</li>
                <li className="leading-relaxed">Jl. Soekarno-Hatta, Tlogosari Kulon, Pedurungan, Kota Semarang, Jawa Tengah</li>
              </ul>
              <div className="flex gap-4 pt-3">
                <div className="p-2 bg-slate-500 text-white rounded-md hover:bg-orange-500 transition-colors cursor-pointer"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z"/></svg></div>
                <div className="p-2 bg-slate-500 text-white rounded-md hover:bg-orange-500 transition-colors cursor-pointer"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656c-.764.338-1.573.56-2.413.666.863-.514 1.518-1.317 1.827-2.283-.817.485-1.721.834-2.684 1.022-.774-.823-1.883-1.323-3.097-1.323-2.348 0-4.244 1.896-4.244 4.236 0 .334.034.659.106.97C8.137 8.767 5.019 7.075 2.946 4.539c-.366.63-.576 1.359-.576 2.133 0 1.468.75 2.765 1.886 3.524-.697-.019-1.352-.213-1.916-.53v.052c0 2.053 1.462 3.768 3.393 4.153-.353.097-.727.146-1.113.146-.272 0-.536-.023-.792-.073.539 1.678 2.101 2.903 3.955 2.939-1.453 1.139-3.285 1.814-5.276 1.814-.343 0-.682-.019-1.016-.06 1.878 1.205 4.11 1.905 6.513 1.905 7.819 0 12.095-6.478 12.095-12.099 0-.184-.004-.367-.014-.548.831-.599 1.551-1.36 2.076-2.238z"/></svg></div>
                <div className="p-2 bg-slate-500 text-white rounded-md hover:bg-orange-500 transition-colors cursor-pointer"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div>
                <div className="p-2 bg-slate-500 text-white rounded-md hover:bg-orange-500 transition-colors cursor-pointer"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-300 text-slate-800 font-bold text-sm">
            <div>© 2026 Yukkos | All rights reserved</div>
            <div className="mt-4 md:mt-0">Mamalia Fullstack Team</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-KOMPONEN ---
function SectionHeader({ title, noMargin = false }: { title: string, noMargin?: boolean }) {
  return (
    <div className={noMargin ? '' : 'mb-8'}>
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{title}</h2>
      <div className="w-16 h-1.5 bg-yk-cherry rounded-full"></div>
    </div>
  );
}

function KosCard({ kos, showRating = false }: { kos: any, showRating?: boolean }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl p-3 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] bg-slate-200 rounded-xl overflow-hidden mb-4">
        <img src={kos.images[0]} alt={kos.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400/F1F3F5/black?text=Gambar+Kos"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-yk-cherry hover:scale-110 transition-all z-10"><Heart size={16} /></button>
        <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full border-2 border-white shadow-md z-10 overflow-hidden"><img src={kos.ownerAvatar} alt="Owner" className="w-full h-full object-cover" /></div>
        {showRating && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-lg shadow-sm z-10"><Star size={12} className="text-yellow-500 fill-current" /><span className="text-[10px] font-bold text-slate-800">{kos.rating}</span></div>
        )}
      </div>
      <div className="flex flex-col flex-grow px-1">
        <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-yk-cherry transition-colors line-clamp-1">{kos.name}</h3>
        <p className="text-slate-500 text-xs flex items-center gap-1 mt-1 mb-3"><MapPin size={12} className="text-slate-400 shrink-0" /> <span className="truncate">{kos.location}</span></p>
        <div className="mt-auto pt-3 border-t border-slate-100">
          <p className="font-black text-slate-900 text-lg leading-none">{formatRupiah(kos.price)} <span className="text-[10px] text-slate-400 font-medium uppercase">/ bulan</span></p>
        </div>
      </div>
    </div>
  );
}