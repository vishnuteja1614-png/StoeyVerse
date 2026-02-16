import { useState, useEffect, useRef, useCallback } from 'react';
import { bookContent } from '../data/book';

interface AudioSettings {
  pitch: number;
  rate: number;
  volume: number;
  voiceURI: string;
}

export function useAudioBook() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [settings, setSettings] = useState<AudioSettings>({
    pitch: 1,
    rate: 1,
    volume: 1,
    voiceURI: '',
  });

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const synth = window.speechSynthesis;

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (!settings.voiceURI && availableVoices.length > 0) {
        // Try to find a good English voice
        const preferred = availableVoices.find(v => v.name.includes("Google US English") || v.name.includes("Samantha")) || availableVoices[0];
        setSettings(prev => ({ ...prev, voiceURI: preferred.voiceURI }));
      }
    };

    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }, []);

  const cancel = useCallback(() => {
    synth.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentCharIndex(-1);
  }, [synth]);

  // Handle Page Change or Stop
  useEffect(() => {
    setCurrentCharIndex(-1);
    cancel();
  }, [currentPageIndex, cancel]);

  const play = useCallback(() => {
    if (isPaused) {
      synth.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    cancel();

    const text = bookContent[currentPageIndex].text;
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Apply settings
    utterance.pitch = settings.pitch;
    utterance.rate = settings.rate;
    utterance.volume = settings.volume;
    
    if (settings.voiceURI) {
      const voice = voices.find(v => v.voiceURI === settings.voiceURI);
      if (voice) utterance.voice = voice;
    }

    // Highlighting Logic
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        setCurrentCharIndex(event.charIndex); 
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentCharIndex(-1);
    };

    synth.speak(utterance);
    setIsPlaying(true);
  }, [currentPageIndex, settings, voices, isPaused, cancel, synth]);

  const pause = () => {
    synth.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const stop = () => {
    cancel();
  };

  const nextPage = () => {
    if (currentPageIndex < bookContent.length - 1) {
      stop();
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      stop();
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const updateSettings = (newSettings: Partial<AudioSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return {
    currentPage: bookContent[currentPageIndex],
    currentPageIndex,
    totalPages: bookContent.length,
    isPlaying,
    isPaused,
    currentCharIndex,
    voices,
    settings,
    actions: {
      play,
      pause,
      stop,
      nextPage,
      prevPage,
      setPage: setCurrentPageIndex,
      updateSettings
    }
  };
}
