import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Map, LogOut, LayoutDashboard, User } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import KostCard, { KostCardSkeleton } from '../../components/marketplace/KostCard';

// Data Mock
const mockKostData = [
  { 
    id: 1, 
    title: 'Kost Eksklusif Bintang', 
    location: 'Tembalang, Semarang', 
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop', 
    type: 'Campur', 
    price: 1500000, 
    rating: 4.8, 
    ownerName: 'Faza Tegar', 
    ownerImage: 'https://randomuser.me/api/portraits/men/32.jpg', 
    facilities: { beds: 1, baths: 1, sqft: 20 } 
  },
  { 
    id: 2, 
    title: 'Wisma Asri Mas Indro', 
    location: 'Sekaran, Semarang', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', 
    type: 'Putra', 
    price: 850000, 
    rating: 4.5, 
    ownerName: 'Indra', 
    ownerImage: 'https://randomuser.me/api/portraits/men/75.jpg', 
    facilities: { beds: 1, baths: 1, sqft: 15 } 
  },
  { 
    id: 3, 
    title: 'Kost Putri Mawar Biru', 
    location: 'Banyumanik, Semarang', 
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop', 
    type: 'Putri', 
    price: 1200000, 
    rating: 4.9, 
    ownerName: 'Sarah', 
    ownerImage: 'https://randomuser.me/api/portraits/women/68.jpg', 
    facilities: { beds: 2, baths: 1, sqft: 25 } 
  },
  { 
    id: 4, 
    title: 'Paviliun Tengah Kota', 
    location: 'Semarang Tengah', 
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop', 
    type: 'Campur', 
    price: 2100000, 
    rating: 4.7, 
    ownerName: 'Budi', 
    ownerImage: 'https://randomuser.me/api/portraits/men/11.jpg', 
    facilities: { beds: 1, baths: 1, sqft: 30 } 
  },
];

const FILTER_CATEGORIES = ['Semua', 'Promo Termurah', 'Dekat Kampus', 'AC & WiFi', 'Kamar Mandi Dalam', 'Bebas Jam Malam'];

export default function MarketplacePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const locationQuery = searchParams.get('location') || 'Semarang';
  const [activeFilter, setActiveFilter] = useState('Semua');
  
  // STATE UNTUK LOADING & AUTH
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CEK LOGIN STATUS SAAT HALAMAN DIMUAT
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // FUNGSI LOGOUT
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  // SIMULASI LOADING (1.5 Detik)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [locationQuery]);

  return (
    <div className="h-screen flex flex-col bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* HEADER MARKETPLACE */}
      <header className="flex-none bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-30 relative">
        <Link to="/" className="flex-none w-48">
          <h2 className="text-3xl font-black tracking-tighter"><span className="text-slate-900">Yuk</span><span className="text-orange-500">kos</span></h2>
        </Link>
        
        {/* Search Bar ala Yukkos */}
        <div className="flex-1 max-w-2xl mx-auto flex items-center bg-white border border-slate-300 rounded-full px-2 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex-[1.5] px-4 border-r border-slate-200">
            <p className="text-[10px] font-black uppercase text-slate-400">Lokasi</p>
            <input 
              type="text" 
              className="text-sm font-bold bg-transparent outline-none w-full text-slate-800 placeholder:text-slate-400" 
              placeholder="Cari kampus atau area..." 
              defaultValue={locationQuery} 
            />
          </div>
          
          <div className="flex-1 px-4 border-r border-slate-200 relative group">
            <p className="text-[10px] font-black uppercase text-slate-400">Tipe Kost</p>
            <select className="text-sm font-bold bg-transparent outline-none w-full text-slate-800 appearance-none cursor-pointer">
                <option value="semua">Semua Tipe</option>
                <option value="putra">Putra</option>
                <option value="putri">Putri</option>
                <option value="campur">Campur</option>
            </select>
          </div>
          
          <div className="flex-1 px-4 relative group">
            <p className="text-[10px] font-black uppercase text-slate-400">Harga Maks</p>
            <select className="text-sm font-bold bg-transparent outline-none w-full text-slate-800 appearance-none cursor-pointer">
                <option value="0">Bebas</option>
                <option value="1000000">&lt; Rp 1 Juta</option>
                <option value="2000000">&lt; Rp 2 Juta</option>
                <option value="3000000">&lt; Rp 3 Juta</option>
            </select>
          </div>
          
          <button className="bg-yk-cherry p-3 rounded-full text-white ml-2 hover:bg-yk-cherry/90 hover:scale-105 transition-all shadow-md">
            <Search size={18} />
          </button>
        </div>

        {/* AREA AUTH KANAN */}
        <div className="flex-none w-48 flex justify-end items-center gap-3">
          {user ? (
            // JIKA SUDAH LOGIN: Tampilkan Avatar & Dropdown
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 p-1 pl-3 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 transition-all shadow-sm focus:outline-none"
              >
                <span className="text-sm font-bold text-slate-700 hidden md:block">
                  {user.fullName.split(' ')[0]} {/* Ambil nama depan saja */}
                </span>
                <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>
              </button>

              {/* Popup Dropdown Menu */}
              {isMenuOpen && (
                <>
                  {/* Invisible Overlay untuk menutup menu jika diklik di luar */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}></div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                      <p className="text-sm font-black text-slate-900 truncate">{user.fullName}</p>
                      <p className="text-xs font-medium text-slate-500 truncate">{user.email || 'User'}</p>
                    </div>

                    <div className="py-2">
                      {/* Tampilkan menu Dashboard hanya jika rolenya OWNER */}
                      {user.role === 'OWNER' && (
                        <Link 
                          to="/dashboard" 
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                          <LayoutDashboard size={18} /> Dashboard Pemilik
                        </Link>
                      )}
                      
                      <Link 
                        to="/profile" 
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        <User size={18} /> Profil Saya
                      </Link>

                      <div className="h-px bg-slate-100 my-1"></div>

                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <LogOut size={18} /> Keluar
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ) : (
            // JIKA BELUM LOGIN: Tampilkan tombol Log in
            <Link 
              to="/login" 
              className="text-sm font-bold text-orange-500 border-2 border-orange-500 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-sm"
            >
              Log in
            </Link>
          )}
        </div>
      </header>

      {/* FILTER BAR */}
      <div className="flex-none bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between z-10 shadow-sm">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {FILTER_CATEGORIES.map(cat => (
            <button 
              key={cat} onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === cat ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-900'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 ml-4 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 shrink-0">
          <SlidersHorizontal size={16} /> Filter Lanjutan
        </button>
      </div>

      {/* AREA UTAMA */}
      <main className="flex flex-1 overflow-hidden">
        
        {/* KOLOM KIRI: Daftar Kost */}
        <div className="w-full lg:w-[55%] xl:w-[60%] h-full overflow-y-auto p-6 lg:p-8 bg-[#F8F9FA]">
          <div className="mb-6 flex justify-between items-end">
            <div>
              {/* Teks berubah saat loading */}
              <p className="text-sm font-bold text-slate-500 mb-1">
                {isLoading ? 'Mencari tempat menginap terbaik...' : `Lebih dari 100 tempat menginap di ${locationQuery}`}
              </p>
              <h1 className="text-3xl font-black">Kost Tersedia di {locationQuery}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {/* LOGIKA SKELETON VS DATA ASLI */}
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => (
                  <motion.div key={`skeleton-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <KostCardSkeleton />
                  </motion.div>
                ))
              : mockKostData.map((kost, i) => (
                  <motion.div key={kost.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <KostCard kost={kost} />
                  </motion.div>
                ))
            }
          </div>
        </div>

        {/* KOLOM KANAN: Peta */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[40%] h-full relative bg-slate-200 overflow-hidden border-l border-slate-200">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover opacity-60" />
          
          {!isLoading && (
            <>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-1/3 left-1/4 bg-white px-3 py-1.5 rounded-full shadow-lg font-bold text-sm hover:scale-110 cursor-pointer transition-transform z-10">Rp 1.5 Jt</motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="absolute top-1/2 right-1/3 bg-yk-cherry text-white px-3 py-1.5 rounded-full shadow-lg font-bold text-sm hover:scale-110 cursor-pointer transition-transform z-10">Rp 850 Rb</motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} className="absolute bottom-1/3 left-1/3 bg-white px-3 py-1.5 rounded-full shadow-lg font-bold text-sm hover:scale-110 cursor-pointer transition-transform z-10">Rp 1.2 Jt</motion.div>
            </>
          )}

          <div className="absolute right-6 bottom-8 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center font-bold text-xl hover:bg-slate-50">+</button>
            <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center font-bold text-xl hover:bg-slate-50">-</button>
          </div>
        </div>

        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl border border-slate-700">
            <Map size={18} /> Peta
          </button>
        </div>
      </main>
    </div>
  );
}