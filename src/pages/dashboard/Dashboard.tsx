import OwnerView from './components/OwnerView';
import SeekerView from './components/SeekerView';
import OwnerSidebar from '../../components/shared/OwnerSidebar';
import SeekerNavbar from '../../components/shared/SeekerNavbar';
import SeekerBottomNav from '../../components/shared/SeekerBottomNav';

export default function Dashboard() {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.clear(); 
    window.location.href = '/login';
  };

  // === RENDER UNTUK PEMILIK KOS (OWNER) ===
  if (user?.role === 'OWNER') {
    return (
      <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
        {/* Pastikan OwnerSidebar juga menggunakan tema light */}
        <OwnerSidebar handleLogout={handleLogout} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-6xl mx-auto">
            <header className="mb-10">
              <p className="text-orange-500 font-black uppercase text-xs tracking-widest mb-2">Panel Pemilik</p>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Halo, {user?.fullName?.split(' ')[0]}! 👋</h1>
              <p className="text-slate-500 font-medium">Pantau dan kelola properti Anda dalam satu dasbor terpusat.</p>
            </header>
            <OwnerView />
          </div>
        </main>
      </div>
    );
  }

  // === RENDER UNTUK PENCARI KOS (SEEKER) ===
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SeekerNavbar user={user} handleLogout={handleLogout} />
      
      <main className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <header className="mb-10">
          <p className="text-yk-cherry font-black uppercase text-xs tracking-widest mb-2">Aktivitas Saya</p>
          <h1 className="text-4xl font-black text-slate-900">Halo, {user?.fullName?.split(' ')[0]}!</h1>
          <p className="text-slate-500 font-medium mt-2">Kelola hunian dan cek riwayat pembayaran Anda.</p>
        </header>
        <SeekerView />
      </main>

      <SeekerBottomNav />
    </div>
  );
}