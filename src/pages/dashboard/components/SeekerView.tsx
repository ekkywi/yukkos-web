import { Home, CreditCard, Heart, ChevronRight, AlertCircle } from 'lucide-react';

export default function SeekerView() {
  return (
    <div className="space-y-8">
      
      {/* 1. Status Kost Saat Ini */}
      <section>
        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
          <Home size={20} className="text-orange-500" /> Hunian Aktif
        </h3>
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400" 
            className="w-full md:w-32 h-32 rounded-2xl object-cover" 
            alt="Kost" 
          />
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-black text-slate-900">Kost Eksklusif Hornet Bintang</h4>
            <p className="text-slate-500 text-sm font-medium">Kamar A-12 • Lantai 2</p>
            <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Masa Sewa Aktif
            </div>
          </div>
          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Jatuh Tempo</p>
            <p className="text-sm font-black text-slate-900">24 Mei 2026</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 2. Tagihan Mendatang */}
        <section>
          <h3 className="text-xl font-black mb-4 flex items-center gap-2">
            <CreditCard size={20} className="text-orange-500" /> Tagihan
          </h3>
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">Pembayaran Kamar Mei</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5">Rp 1.500.000 • Belum Bayar</p>
              </div>
            </div>
            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
              Bayar Sekarang
            </button>
          </div>
        </section>

        {/* 3. Wishlist / Favorit */}
        <section>
          <h3 className="text-xl font-black mb-4 flex items-center gap-2">
            <Heart size={20} className="text-yk-cherry" /> Kost Favorit
          </h3>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-4 hover:border-yk-cherry transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=100&q=80`} className="w-full h-full object-cover" alt="Thumb" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-slate-900 group-hover:text-yk-cherry transition-colors">Wisma Asri Mas Indro</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Rp 850 Rb / bln</p>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-yk-cherry" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}