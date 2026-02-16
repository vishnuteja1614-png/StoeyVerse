import { Headphones, Menu } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
}

export function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenMenu}
            className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-300 hover:text-white"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-lg hidden sm:block">
              <Headphones size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider">StoryVerse</h1>
              <p className="text-xs text-slate-400 hidden sm:block">Interactive Audiobooks</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <span className="text-xs bg-indigo-900/50 px-2 py-1 rounded text-indigo-300 border border-indigo-700/50">Free Edition</span>
        </div>
      </div>
    </header>
  );
}
