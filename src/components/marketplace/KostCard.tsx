import { Heart, MapPin, Bed, Bath, Maximize2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface KostCardProps {
  kost: {
    id: number;
    title: string;
    location: string;
    image: string;
    type: string; // 'Putra', 'Putri', 'Campur'
    price: number;
    rating: number;
    ownerName: string;
    ownerImage: string;
    facilities: { beds: number; baths: number; sqft: number; };
  };
}

export default function KostCard({ kost }: KostCardProps) {
  // Warna badge berdasarkan tipe
  const typeColor = 
    kost.type === 'Putri' ? 'bg-pink-100 text-pink-700' : 
    kost.type === 'Putra' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';

  return (
    // 👇 1. Mengubah div menjadi Link dan menambahkan 'block' di className
    <Link 
      to={`/kost/${kost.id}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
    >
      {/* Gambar Properti dengan Badge */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img src={kost.image} alt={kost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges Atas */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${typeColor}`}>
            {kost.type}
          </div>
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
            <Star size={12} className="text-yellow-500 fill-current" /> {kost.rating}
          </div>
        </div>

        {/* Tombol Favorit */}
        {/* 👇 2. Menambahkan e.preventDefault() agar tidak pindah halaman saat klik love */}
        <button 
          onClick={(e) => {
            e.preventDefault(); 
            // Nanti logika simpan ke favorit ditaruh di sini
          }}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/50 backdrop-blur-md text-slate-700 hover:bg-white hover:text-yk-cherry transition-all shadow-sm z-10"
        >
          <Heart size={18} className="fill-none hover:fill-yk-cherry" />
        </button>
      </div>

      {/* Detail Konten */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="space-y-1">
            <h3 className="font-black text-lg text-slate-900 line-clamp-1 group-hover:text-yk-cherry transition-colors">{kost.title}</h3>
            <p className="text-slate-500 text-sm flex items-center gap-1.5"><MapPin size={14} className="text-slate-400" /> {kost.location}</p>
          </div>
          <img src={kost.ownerImage} alt={kost.ownerName} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm shrink-0" title={`Pemilik: ${kost.ownerName}`} />
        </div>

        {/* Fasilitas */}
        <div className="flex items-center gap-4 py-3 text-slate-600">
          <div className="flex items-center gap-1.5 text-xs font-medium"><Bed size={16} className="text-slate-400" /> {kost.facilities.beds} Kasur</div>
          <div className="flex items-center gap-1.5 text-xs font-medium"><Bath size={16} className="text-slate-400" /> {kost.facilities.baths} K. Mandi</div>
          <div className="flex items-center gap-1.5 text-xs font-medium"><Maximize2 size={16} className="text-slate-400" /> {kost.facilities.sqft} m²</div>
        </div>

        {/* Harga (Selalu di bawah) */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500 font-medium mb-0.5">Mulai dari</p>
            <p className="text-xl font-black text-slate-900">Rp {kost.price.toLocaleString('id-ID')} <span className="text-xs font-medium text-slate-500 font-normal">/ bln</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Skeleton loading tetap sama
export function KostCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm">
      {/* Gambar Area - Skeleton */}
      <div className="relative aspect-[4/3] bg-slate-200 animate-pulse">
        {/* Placeholder Badges Kiri Atas */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="w-16 h-6 bg-slate-300 rounded-full"></div>
          <div className="w-12 h-6 bg-slate-300 rounded-full"></div>
        </div>
        {/* Placeholder Tombol Love Kanan Atas */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-slate-300 rounded-full"></div>
      </div>

      {/* Detail Konten - Skeleton */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2 flex-1 mr-4">
            {/* Placeholder Judul */}
            <div className="h-5 bg-slate-200 rounded-md w-3/4 animate-pulse"></div>
            {/* Placeholder Lokasi */}
            <div className="h-4 bg-slate-200 rounded-md w-1/2 animate-pulse"></div>
          </div>
          {/* Placeholder Foto Avatar */}
          <div className="w-10 h-10 bg-slate-300 rounded-full shrink-0 animate-pulse"></div>
        </div>

        {/* Placeholder Fasilitas */}
        <div className="flex items-center gap-4 py-3 border-t border-transparent">
          <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded-md w-16 animate-pulse"></div>
        </div>

        {/* Placeholder Harga */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-1.5">
          <div className="h-3 bg-slate-200 rounded-md w-16 animate-pulse"></div>
          <div className="h-6 bg-slate-200 rounded-md w-32 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}