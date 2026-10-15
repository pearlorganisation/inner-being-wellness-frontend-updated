import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggleAmbientSound, setAmbientVolume } from '../../store/wellnessSlice';

export const AmbientSoundPlayer = () => {
  const dispatch = useAppDispatch();
  const { isAmbientSoundActive, ambientVolume } = useAppSelector((state) => state.wellness);
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const intervalRef = useRef(null);

  const playBowlChime = (freq) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.76, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 6.0);

    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.0);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(masterGainRef.current);
    gain2.connect(masterGainRef.current);

    osc.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 6.5);
    osc2.stop(ctx.currentTime + 4.5);
  };

  useEffect(() => {
    if (isAmbientSoundActive) {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
        masterGainRef.current = audioCtxRef.current.createGain();
        masterGainRef.current.gain.setValueAtTime(ambientVolume, audioCtxRef.current.currentTime);
        masterGainRef.current.connect(audioCtxRef.current.destination);
      }

      playBowlChime(432);

      const bowlFreqs = [432, 324, 216, 288, 384];
      let idx = 1;
      intervalRef.current = window.setInterval(() => {
        const freq = bowlFreqs[idx % bowlFreqs.length];
        playBowlChime(freq);
        idx++;
      }, 5500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAmbientSoundActive]);

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(ambientVolume, audioCtxRef.current.currentTime);
    }
  }, [ambientVolume]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#EAE5DD] shadow-lg shadow-black/5 transition-all">
      <button
        onClick={() => dispatch(toggleAmbientSound())}
        className={`flex items-center gap-2 text-xs font-medium transition-colors ${
          isAmbientSoundActive ? 'text-[#13382C] font-semibold' : 'text-[#6B6673] hover:text-[#1F1B44]'
        }`}
        title="Toggle relaxing singing bowl ambient sound"
      >
        {isAmbientSoundActive ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13382C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13382C]"></span>
            </span>
            <Volume2 className="w-4 h-4 text-[#13382C]" />
            <span className="hidden sm:inline">Singing Bowl Chimes</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#6B6673]" />
            <span className="hidden sm:inline">Sound Sanctuary</span>
          </>
        )}
      </button>

      {isAmbientSoundActive && (
        <div className="flex items-center gap-1.5 pl-1 border-l border-[#EAE5DD]">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={ambientVolume}
            onChange={(e) => dispatch(setAmbientVolume(parseFloat(e.target.value)))}
            className="w-14 h-1 bg-[#E4ECE6] rounded-lg appearance-none cursor-pointer accent-[#13382C]"
            title="Adjust Volume"
          />
        </div>
      )}
    </div>
  );
};
