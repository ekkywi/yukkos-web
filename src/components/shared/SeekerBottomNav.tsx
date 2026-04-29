import { Home, Search, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeekerBottomNav() {
  const activeMenu = 'profile'; // Default aktif di profil/dashboard

  const navItems = [
    { id: 'explore', label: 'Eksplor', icon: <Search size={22} />, path: '/explore' },
    { id: 'saved', label: 'Favorit', icon: <Heart size={22} />, path: '/dashboard' },
    { id: 'chat', label: 'Pesan', icon: <MessageSquare size={22} />, path: '/dashboard' },
    { id: 'profile', label: 'Aktivitas', icon: <Home size={22} />, path: '/dashboard' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200 px-6 py-3 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = activeMenu === item.id;
          return (
            <Link 
              key={item.id} 
              to={item.path}
              className={`flex flex-col items-center gap-1.5 transition-all ${
                isActive 
                  ? 'text-yk-cherry scale-110' 
                  : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              <div className={`${isActive ? 'bg-yk-cherry/10 p-1.5 rounded-xl' : 'p-1.5'}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] ${isActive ? 'font-black' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}