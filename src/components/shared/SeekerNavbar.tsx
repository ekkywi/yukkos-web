import { motion } from 'framer-motion';
import { LogOut, UserCircle, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeekerNavbar({ user, handleLogout }: { user: any, handleLogout: () => void }) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Yukkos */}
          <Link to="/" className="flex items-center gap-2">
            <h2 className="text-2xl font-black tracking-tighter">
              <span className="text-slate-900">Yuk</span><span className="text-orange-500">kos</span>
            </h2>
          </Link>

          {/* Menu Kanan (Desktop) */}
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors relative p-2.5 rounded-full border border-slate-200">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-yk-cherry rounded-full border-2 border-white"></span>
            </button>
            
            <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900 leading-none">{user?.fullName}</p>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Pencari Kos</p>
              </div>
              {/* Inisial Avatar Menggantikan UserCircle Default */}
              <div className="w-10 h-10 bg-yk-cherry text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                {user?.fullName?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>

            {/* Tombol Logout */}
            <button 
              onClick={handleLogout}
              className="ml-2 bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 p-2.5 rounded-full border border-slate-200 hover:border-red-200 transition-all"
              title="Keluar"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}