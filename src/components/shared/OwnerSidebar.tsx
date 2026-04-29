import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Wallet, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OwnerSidebar({ handleLogout }: { handleLogout: () => void }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activeMenu = 'dashboard';

  const menuItems = [
    { id: 'dashboard', label: 'Beranda', icon: <LayoutDashboard size={20} /> },
    { id: 'properties', label: 'Properti Kos', icon: <Building2 size={20} /> },
    { id: 'tenants', label: 'Penyewa Aktif', icon: <Users size={20} /> },
    { id: 'finance', label: 'Laporan Keuangan', icon: <Wallet size={20} /> },
    { id: 'settings', label: 'Pengaturan', icon: <Settings size={20} /> },
  ];

  return (
    <motion.aside 
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-white border-r border-slate-200 flex flex-col relative shrink-0 z-20 shadow-sm"
    >
      {/* Tombol Collapse */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3.5 top-8 bg-white border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-orange-500 rounded-full p-1.5 transition-colors z-30 shadow-sm"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Header / Logo */}
      <div className="p-6 flex items-center justify-center min-h-[88px] border-b border-slate-100">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center shadow-inner shrink-0 p-1.5">
            {/* Ganti src dengan logo terang Anda jika ada, atau biarkan default */}
            <img src="/logo-yukkos.svg" alt="Yukkos" className="w-full h-full object-contain" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-black text-xl tracking-tight text-slate-900 whitespace-nowrap"
            >
              Juragan<span className="text-orange-500">Kos</span>
            </motion.span>
          )}
        </Link>
      </div>

      {/* Menu Navigasi */}
      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => {
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-orange-50 text-orange-600 border border-orange-200 font-bold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent font-medium'
              }`}
              title={isCollapsed ? item.label : ''}
            >
              <div className="shrink-0">{item.icon}</div>
              {!isCollapsed && (
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer / User Profile & Logout */}
      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-3 py-3.5 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all group border border-transparent hover:border-red-100 font-medium"
          title={isCollapsed ? "Keluar" : ''}
        >
          <LogOut size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
          {!isCollapsed && (
            <span className="text-sm whitespace-nowrap">Keluar</span>
          )}
        </button>
      </div>
    </motion.aside>
  );
}