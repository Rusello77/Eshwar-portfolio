import { Link, useLocation } from 'react-router';
import { Home, Users, Plus, BookOpen, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { CreateOptionsBottomSheet } from './CreateOptionsBottomSheet';

export function BottomNav() {
  const location = useLocation();
  const [showCreateOptions, setShowCreateOptions] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Users, label: 'Connections', path: '/connections' },
    { icon: BookOpen, label: 'Learning', path: '/learning' },
    { icon: Briefcase, label: 'My Business', path: '/my-business' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-[#FAF8F2] border-t border-[#D8D3C8] px-2 py-2 z-50 shadow-[0_-2px_12px_rgba(90,139,111,0.08)]">
        <div className="max-w-[390px] mx-auto flex justify-around items-center relative">
          {navItems.slice(0, 2).map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors"
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? 'text-[#5A8B6F]' : 'text-[#666666]'}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[11px] ${isActive ? 'text-[#5A8B6F] font-medium' : 'text-[#666666]'}`}>
                  {label}
                </span>
              </Link>
            );
          })}

          {/* Create FAB */}
          <button
            onClick={() => setShowCreateOptions(true)}
            className="flex flex-col items-center gap-1 px-2 py-1 -mt-8"
          >
            <div className="w-14 h-14 bg-[#5A8B6F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#4A7360] transition-all active:scale-95">
              <Plus className="w-7 h-7 text-[#FAF8F2]" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] text-[#5A8B6F] font-medium">Create</span>
          </button>

          {navItems.slice(2, 4).map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors"
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? 'text-[#5A8B6F]' : 'text-[#666666]'}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={`text-[11px] ${isActive ? 'text-[#5A8B6F] font-medium' : 'text-[#666666]'}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <CreateOptionsBottomSheet
        isOpen={showCreateOptions}
        onClose={() => setShowCreateOptions(false)}
      />
    </>
  );
}
