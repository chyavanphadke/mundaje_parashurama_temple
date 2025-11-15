import React, { useEffect, useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import backgroundMusic from '../assets/backgroundMusic.mp3';

export default function BackgroundMusicToggle() {
  const audioRef = useRef(null);

  // Default ON unless user has turned it off earlier
  const [enabled, setEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem('bgMusicEnabled');
      if (stored === null) return true;
      return stored === 'true';
    } catch {
      return true;
    }
  });

  // Create audio object once
  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.volume = 0.15; // low volume
    audioRef.current = audio;

    // 🔴 IMPORTANT: cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // React to enabled state (play/pause)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      const playPromise = audio.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {
          // Autoplay may be blocked; user can manually start via button
        });
      }
    } else {
      audio.pause();
    }

    try {
      localStorage.setItem('bgMusicEnabled', String(enabled));
    } catch {
      // ignore storage errors
    }
  }, [enabled]);

  const handleToggle = () => {
    setEnabled(prev => !prev);
  };

  return (
    <Tooltip
      title={
        enabled
          ? 'Mute background music'
          : 'Play background music'
      }
    >
      <IconButton
        size="small"
        onClick={handleToggle}
        aria-label="Toggle background music"
      >
        {enabled ? (
          <MusicNoteIcon fontSize="small" />
        ) : (
          <MusicOffIcon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
}
