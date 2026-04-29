import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, Share2, Bed, Bath, Car, 
  MapPin, Wifi, Tv, Snowflake, Waves, 
  Phone, ChevronLeft, CheckCircle2
} from 'lucide-react';

// Data Mock untuk halaman detail
const MOCK_DETAIL = {
  id: 1,
  title: 'Kost Eksklusif Hornet Bintang',
  address: 'Jalan Bintang Terang No. 12, Tembalang, Semarang',
  price: {
    daily: 75000,
    weekly: 450000,
    monthly: 1500000,
    yearly: 16000000
  },
  owner: {
    name: 'Faza Tegar',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    joined: '2023'
  },
  stats: { bed: 2, bath: 2, garage: 1 },
  description: 'Hunian eksklusif dengan desain modern minimalis yang dirancang khusus untuk kenyamanan dan produktivitas Anda. Berlokasi strategis hanya 5 menit dari kampus utama. Lingkungan tenang, aman, dan dilengkapi dengan keamanan 24 jam. \n\nSangat cocok bagi mahasiswa maupun profesional muda yang mencari ketenangan setelah seharian beraktivitas.',
  features: [
    { icon: <Waves size={20} />, label: 'Dapur Bersama' },
    { icon: <Snowflake size={20} />, label: 'AC di setiap kamar' },
    { icon: <Tv size={20} />, label: 'TV dengan Netflix' },
    { icon: <Wifi size={20} />, label: 'Free Wi-Fi (100Mbps)' },
    { icon: <CheckCircle2 size={20} />, label: 'Mesin Cuci' },
  ],
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop', // Utama
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop'
  ]
};

export default function KostDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false);

  // Fungsi format mata uang
  const formatRp = (num: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24">
      
      {/* HEADER MINIMALIS */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/explore" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-slate-700" />
          </Link>
          <Link to="/" className="hidden md:block">
            <h2 className="text-2xl font-black tracking-tighter"><span className="text-slate-900">Yuk</span><span className="text-orange-500">kos</span></h2>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
          <Link to="/" className="hover:text-yk-cherry transition-colors">Home</Link>
          <Link to="/explore" className="text-yk-cherry">Cari Kost</Link>
        </nav>
        <div className="flex gap-3">
          <Link to="/login" className="text-sm font-bold text-orange-500 border-2 border-orange-500 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-all">Log in</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        
        {/* GALERI FOTO (Sesuai Wireframe) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-12">
          {/* Gambar Utama (Kiri) */}
          <div className="col-span-1 md:col-span-2 relative group cursor-pointer">
            <img src={MOCK_DETAIL.images[0]} alt="Kamar Utama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            {/* Overlay Profil Pemilik di sudut kiri bawah */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 pr-6 rounded-2xl shadow-lg">
              <img src={MOCK_DETAIL.owner.avatar} alt="Owner" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pemilik</p>
                <p className="text-sm font-black text-slate-900 leading-tight">{MOCK_DETAIL.owner.name}</p>
                <p className="text-xs text-yk-cherry font-bold mt-0.5">Dimulai dari: {formatRp(MOCK_DETAIL.price.daily)}</p>
              </div>
            </div>
          </div>
          
          {/* Grid Gambar Kecil (Kanan) */}
          <div className="hidden md:grid col-span-2 grid-cols-2 grid-rows-2 gap-4">
            {MOCK_DETAIL.images.slice(1, 5).map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl cursor-pointer">
                <img src={img} alt={`Preview ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {/* Tombol More Photos di gambar terakhir */}
                {i === 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
                    <div className="text-center text-white">
                      <span className="text-3xl font-black">+5</span>
                      <p className="text-sm font-bold">More Photos</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* KONTEN BAWAH (Grid 2 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI (Detail Kost) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Judul & Action */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h1 className="text-4xl font-black text-slate-900 mb-2">{MOCK_DETAIL.title}</h1>
                <p className="text-slate-500 font-medium flex items-center gap-2"><MapPin size={18} className="text-slate-400" /> {MOCK_DETAIL.address}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => setIsFavorite(!isFavorite)} className="p-3 rounded-full bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-500 transition-colors">
                  <Heart size={22} className={isFavorite ? "fill-red-500 text-red-500" : ""} />
                </button>
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                  <Share2 size={22} />
                </button>
              </div>
            </div>

            {/* Highlight Fasilitas Utama (Kotak-kotak abu) */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              <div className="bg-slate-100/80 p-5 rounded-2xl min-w-[120px] flex flex-col items-center justify-center text-center gap-2 border border-slate-200/50">
                <Bed size={28} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">{MOCK_DETAIL.stats.bed} Kamar Tidur</span>
              </div>
              <div className="bg-slate-100/80 p-5 rounded-2xl min-w-[120px] flex flex-col items-center justify-center text-center gap-2 border border-slate-200/50">
                <Bath size={28} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">{MOCK_DETAIL.stats.bath} Kamar Mandi</span>
              </div>
              <div className="bg-slate-100/80 p-5 rounded-2xl min-w-[120px] flex flex-col items-center justify-center text-center gap-2 border border-slate-200/50">
                <Car size={28} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">{MOCK_DETAIL.stats.garage} Garasi</span>
              </div>
            </div>

            {/* Deskripsi */}
            <div>
              <h3 className="text-2xl font-black mb-4">Deskripsi Kost</h3>
              <div className="text-slate-600 leading-relaxed space-y-4 font-medium whitespace-pre-line">
                {MOCK_DETAIL.description}
              </div>
            </div>

            {/* Fitur Lainnya */}
            <div>
              <h3 className="text-2xl font-black mb-6">Fitur Lainnya</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {MOCK_DETAIL.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-slate-700">
                    <div className="p-2.5 bg-slate-100 rounded-xl text-slate-600">{feat.icon}</div>
                    <span className="font-bold text-sm">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Peta Lokasi */}
            <div>
              <h3 className="text-2xl font-black mb-4">Lokasi</h3>
              <div className="w-full h-[300px] bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-200 shadow-inner">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" alt="Map View" className="w-full h-full object-cover opacity-70 grayscale" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl mb-2 border-4 border-white">
                    <MapPin size={28} />
                  </div>
                  <span className="bg-white px-4 py-1.5 rounded-full font-black text-sm shadow-md">Lokasi Kost</span>
                </div>
              </div>
            </div>

          </div>

          {/* KOLOM KANAN (Booking Card Sticky) */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="sticky top-28 bg-white border border-slate-200 rounded-[2rem] p-8 shadow-2xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-6">{formatRp(MOCK_DETAIL.price.daily)} - {formatRp(MOCK_DETAIL.price.monthly)}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Harian</span>
                  <span className="font-bold text-slate-900">{formatRp(MOCK_DETAIL.price.daily)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Mingguan</span>
                  <span className="font-bold text-slate-900">{formatRp(MOCK_DETAIL.price.weekly)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Bulanan</span>
                  <span className="font-bold text-slate-900">{formatRp(MOCK_DETAIL.price.monthly)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-500 font-medium">Tahunan</span>
                  <span className="font-bold text-slate-900">{formatRp(MOCK_DETAIL.price.yearly)}</span>
                </div>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1 mb-4">
                Sewa Sekarang
              </button>
              
              <button className="w-full bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold text-lg py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                <Phone size={20} /> Kontak Pemilik
              </button>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}