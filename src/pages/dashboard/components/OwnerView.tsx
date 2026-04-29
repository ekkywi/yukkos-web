import { Building2, Users, Wallet, ArrowUpRight } from 'lucide-react';

export default function OwnerView() {
  return (
    <div className="space-y-8">
      {/* Grid Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<Building2 size={24} />} title="Total Kamar" value="15 Unit" detail="3 Kamar Kosong" color="bg-blue-500" />
        <StatCard icon={<Users size={24} />} title="Penyewa Aktif" value="12 Orang" detail="90% Okupansi" color="bg-orange-500" />
        <StatCard icon={<Wallet size={24} />} title="Pendapatan Mei" value="Rp 18.250.000" detail="+12% dari bulan lalu" color="bg-emerald-500" />
      </div>

      {/* Placeholder untuk List Kamar atau Aktivitas Terbaru */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black text-slate-900">Properti Terlaris</h3>
          <button className="text-sm font-bold text-orange-500 hover:underline flex items-center gap-1">
            Lihat Semua <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="h-40 border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
          Daftar properti Anda akan muncul di sini.
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, detail, color }: any) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all group">
      <div className={`w-12 h-12 ${color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-inner`}>
        {icon}
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <p className="text-3xl font-black text-slate-900 mb-2">{value}</p>
      <p className="text-xs font-bold text-slate-400">{detail}</p>
    </div>
  );
}