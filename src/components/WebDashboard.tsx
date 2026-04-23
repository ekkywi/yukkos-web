import { useEffect, useState } from 'react';
import axios from 'axios';
import { Home, Users, Wallet, AlertCircle, TrendingUp, Building } from 'lucide-react';

interface PropertyData {
  id: string;
  name: string;
  address: string;
  metrics: {
    total_rooms: number;
    occupied_rooms_count: number;
    available_rooms_count: number;
    occupancy_rate_percentage: number;
  };
  financials: {
    monthly_revenue: number;
    potential_loss: number;
  };
}

export default function WebDashboard() {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get('http://localhost:3000/api/v1/bff/web/properties')
      .then((res) => {
        const safeData = Array.isArray(res.data?.data) ? res.data.data : [];
        setProperties(safeData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dari API:", err);
        setProperties([]);
        setLoading(false);
      });
  }, []);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <Building className="w-12 h-12 text-yk-normal mb-4 animate-bounce" />
          <p className="text-slate-400 font-medium">Memuat Data Analitik Kosan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard <span className="text-yk-normal">Juragan</span></h1>
        <p className="text-slate-400">Ringkasan performa finansial dan operasional properti Anda.</p>
      </header>

      {properties.map((prop) => (
        <div key={prop.id} className="mb-12">
          {/* Header Properti */}
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <div className="p-3 bg-slate-800 rounded-xl">
              <Home className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{prop.name}</h2>
              <p className="text-sm text-slate-400">{prop.address}</p>
            </div>
          </div>

          {/* Grid Kartu Analitik */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Kartu 1: Okupansi */}
            <div className="bg-yk-card p-6 rounded-2xl border border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Users className="text-blue-400 w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-slate-800 rounded-full text-slate-300">
                  {prop.metrics.occupancy_rate_percentage}% Terisi
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-1">Kamar Disewa</p>
              <h3 className="text-2xl font-bold text-white">
                {prop.metrics.occupied_rooms_count} <span className="text-base font-normal text-slate-500">/ {prop.metrics.total_rooms}</span>
              </h3>
            </div>

            {/* Kartu 2: Pendapatan Aktif */}
            <div className="bg-yk-card p-6 rounded-2xl border border-slate-700 hover:-translate-y-1 hover:shadow-yk-normal/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-yk-normal/10 rounded-lg">
                  <Wallet className="text-yk-normal w-5 h-5" />
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-1">Estimasi Pendapatan</p>
              <h3 className="text-2xl font-bold text-emerald-400">
                {formatRupiah(prop.financials.monthly_revenue)}
              </h3>
            </div>

            {/* Kartu 3: Potensi Kerugian */}
            <div className="bg-yk-card p-6 rounded-2xl border border-slate-700 hover:-translate-y-1 hover:shadow-yk-danger/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-yk-danger/10 rounded-lg">
                  <AlertCircle className="text-yk-danger w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-yk-danger/10 rounded-full text-yk-danger">
                  {prop.metrics.available_rooms_count} Kosong
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-1">Potensi Hilang</p>
              <h3 className="text-2xl font-bold text-rose-400">
                {formatRupiah(prop.financials.potential_loss)}
              </h3>
            </div>

            {/* Kartu 4: ROI / Status Pertumbuhan */}
            <div className="bg-yk-card p-6 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full border-4 border-yk-normal flex items-center justify-center mb-3">
                <TrendingUp className="text-yk-normal w-8 h-8" />
              </div>
              <h3 className="text-white font-bold">Status Sehat</h3>
              <p className="text-xs text-slate-400 mt-1">Cashflow stabil bulan ini</p>
            </div>

          </div>
        </div>
      ))}

      {/* Pesan jika database masih kosong */}
      {properties.length === 0 && (
        <div className="text-center py-20 bg-yk-card rounded-2xl border border-slate-700 border-dashed">
          <Building className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Belum Ada Data Properti</h3>
          <p className="text-slate-400">Silakan tambahkan data kosan beserta kamar melalui API Backend Anda.</p>
        </div>
      )}
    </div>
  );
}