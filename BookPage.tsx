import { useMemo } from 'react';
import { Page } from '../data/book';

interface BookPageProps {
  page: Page;
  currentCharIndex: number;
}

export function BookPage({ page, currentCharIndex }: BookPageProps) {
  
  // Memoize the tokenized text so we don't recalculate on every render unless page changes
  const words = useMemo(() => {
    const text = page.text;
    const tokens = [];
    let currentPosition = 0;
    
    // We split by spaces but keep delimiters to track accurate indices if we want perfect precision.
    // Simpler approach: split by space, assume 1 char for space.
    // SpeechSynthesis usually counts all characters.
    
    const rawWords = text.split(' ');
    
    for (let i = 0; i < rawWords.length; i++) {
      const word = rawWords[i];
      const start = currentPosition;
      const end = currentPosition + word.length;
      tokens.push({ word, start, end });
      currentPosition += word.length + 1; // +1 for the space
    }
    
    return tokens;
  }, [page]);

  // Determine active word
  // If charIndex is 10, and word is at 8-12, it's active.
  const activeWordIndex = useMemo(() => {
    if (currentCharIndex === -1) return -1;
    return words.findIndex(t => currentCharIndex >= t.start && currentCharIndex <= t.end + 1); // +1 buffer for trailing space
  }, [currentCharIndex, words]);

  return (
    <div className="container mx-auto max-w-3xl p-4 md:p-6 pb-40">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Image Section */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden bg-slate-100 group">
          <img 
            src={page.image} 
            alt="Chapter Scene" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-200 uppercase bg-indigo-900/50 rounded-full border border-indigo-500/30 backdrop-blur-sm">
              Now Reading
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight drop-shadow-md leading-tight">
              {page.chapter}
            </h2>
          </div>
        </div>

        {/* Text Section */}
        <div className="p-8 md:p-16 bg-white">
          <p className="text-xl md:text-2xl leading-loose text-slate-700 font-serif tracking-wide">
            {words.map((token, index) => (
              <span 
                key={index}
                className={`
                  transition-all duration-200 rounded px-0.5 inline-block
                  ${index === activeWordIndex 
                    ? 'bg-indigo-100 text-indigo-900 font-semibold scale-110 shadow-sm' 
                    : 'text-slate-600'}
                `}
              >
                {token.word}{' '}
              </span>
            ))}
          </p>
        </div>

      </div>
    </div>
  );
}
