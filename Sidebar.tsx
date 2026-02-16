import { X, BookOpen } from 'lucide-react';
import { Page } from '../data/book';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pages: Page[];
  currentPageIndex: number;
  onSelectPage: (index: number) => void;
}

export function Sidebar({ isOpen, onClose, pages, currentPageIndex, onSelectPage }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center space-x-2 text-indigo-900">
              <BookOpen size={20} />
              <h2 className="font-bold text-lg">Table of Contents</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition">
              <X size={20} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => {
                  onSelectPage(index);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-lg text-sm transition-all duration-200 border ${
                  index === currentPageIndex 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-medium shadow-sm' 
                    : 'hover:bg-slate-50 border-transparent hover:border-slate-100 text-slate-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="truncate">{page.chapter}</span>
                  {index === currentPageIndex && (
                    <span className="w-2 h-2 bg-indigo-500 rounded-full ml-2 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-center text-slate-400">
            {pages.length} Chapters Total
          </div>
        </div>
      </div>
    </>
  );
}
