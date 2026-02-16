import { useState } from 'react';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { BookPage } from './components/BookPage';
import { Sidebar } from './components/Sidebar';
import { useAudioBook } from './hooks/useAudioBook';
import { bookContent } from './data/book';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { 
    currentPage, 
    currentPageIndex,
    isPlaying, 
    isPaused, 
    currentCharIndex, 
    settings, 
    voices, 
    actions 
  } = useAudioBook();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header onOpenMenu={() => setIsSidebarOpen(true)} />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        pages={bookContent}
        currentPageIndex={currentPageIndex}
        onSelectPage={(index) => actions.setPage(index)}
      />

      <main className="py-8 transition-all duration-300">
        <BookPage 
          page={currentPage} 
          currentCharIndex={currentCharIndex} 
        />
      </main>

      <ControlPanel 
        isPlaying={isPlaying}
        isPaused={isPaused}
        settings={settings}
        voices={voices}
        onPlay={actions.play}
        onPause={actions.pause}
        onStop={actions.stop}
        onNext={actions.nextPage}
        onPrev={actions.prevPage}
        onUpdateSettings={actions.updateSettings}
      />
    </div>
  );
}
