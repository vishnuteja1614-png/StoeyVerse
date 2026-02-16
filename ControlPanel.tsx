import { 
  Play, Pause, Square, SkipBack, SkipForward, 
  Volume2, Mic, Settings2, Gauge
} from 'lucide-react';

interface ControlPanelProps {
  isPlaying: boolean;
  isPaused: boolean;
  settings: {
    pitch: number;
    rate: number;
    volume: number;
    voiceURI: string;
  };
  voices: SpeechSynthesisVoice[];
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onNext: () => void;
  onPrev: () => void;
  onUpdateSettings: (settings: any) => void;
}

export function ControlPanel({
  isPlaying,
  isPaused,
  settings,
  voices,
  onPlay,
  onPause,
  onStop,
  onNext,
  onPrev,
  onUpdateSettings
}: ControlPanelProps) {

  const presets = [
    { name: 'Normal', pitch: 1, rate: 1 },
    { name: 'Fast', pitch: 1, rate: 1.5 },
    { name: 'Slow', pitch: 1, rate: 0.7 },
    { name: 'Deep', pitch: 0.5, rate: 0.9 },
    { name: 'High', pitch: 1.5, rate: 1.1 },
    { name: 'Chipmunk', pitch: 2, rate: 1.2 },
    { name: 'Robot', pitch: 0.1, rate: 0.8 },
    { name: 'Dreamy', pitch: 0.8, rate: 0.8 },
  ];

  const applyPreset = (preset: any) => {
    onUpdateSettings({ pitch: preset.pitch, rate: preset.rate });
  };

  return (
    <div className="bg-white border-t border-slate-200 p-4 shadow-xl-up fixed bottom-0 w-full z-40 max-h-[35vh] overflow-y-auto">
      <div className="container mx-auto max-w-4xl">
        
        {/* Main Controls */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button onClick={onPrev} className="p-2 text-slate-500 hover:text-indigo-600 transition">
            <SkipBack size={24} />
          </button>
          
          {isPlaying && !isPaused ? (
            <button 
              onClick={onPause}
              className="p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition transform hover:scale-105"
            >
              <Pause size={32} fill="currentColor" />
            </button>
          ) : (
            <button 
              onClick={onPlay}
              className="p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition transform hover:scale-105"
            >
              <Play size={32} fill="currentColor" className="ml-1" />
            </button>
          )}

          <button onClick={onStop} className="p-2 text-slate-500 hover:text-red-600 transition">
            <Square size={20} fill="currentColor" />
          </button>

          <button onClick={onNext} className="p-2 text-slate-500 hover:text-indigo-600 transition">
            <SkipForward size={24} />
          </button>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl">
          
          {/* Sliders */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Volume2 size={18} className="text-slate-500" />
              <input 
                type="range" 
                min="0" max="1" step="0.1" 
                value={settings.volume}
                onChange={(e) => onUpdateSettings({ volume: parseFloat(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Gauge size={18} className="text-slate-500" />
              <label className="text-xs text-slate-500 w-12">Speed</label>
              <input 
                type="range" 
                min="0.5" max="2" step="0.1" 
                value={settings.rate}
                onChange={(e) => onUpdateSettings({ rate: parseFloat(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Settings2 size={18} className="text-slate-500" />
              <label className="text-xs text-slate-500 w-12">Pitch</label>
              <input 
                type="range" 
                min="0" max="2" step="0.1" 
                value={settings.pitch}
                onChange={(e) => onUpdateSettings({ pitch: parseFloat(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>

          {/* Voices & Presets */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mic size={18} className="text-slate-500" />
              <select 
                value={settings.voiceURI}
                onChange={(e) => onUpdateSettings({ voiceURI: e.target.value })}
                className="w-full p-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {voices.map(voice => (
                  <option key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {presets.map(p => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="px-2 py-1 text-xs bg-white border border-slate-200 rounded hover:bg-indigo-50 hover:border-indigo-200 transition text-slate-600"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
