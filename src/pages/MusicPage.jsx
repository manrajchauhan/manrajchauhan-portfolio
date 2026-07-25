import React, { useState } from 'react';
import { musicData } from '../data/musicData';
import { Play, Pause, SkipForward, SkipBack, Disc, Disc3, Music2, Volume2 } from 'lucide-react';

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const track = musicData.playlist[trackIndex];

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % musicData.playlist.length);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + musicData.playlist.length) % musicData.playlist.length);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <span className="drei-subtitle">// AUDIO & ATMOSPHERE</span>
        <h1 className="drei-title" style={{ fontSize: '3rem' }}>
          MY MUSIC <span style={{ color: 'var(--accent-orange)' }}>TASTE</span>
        </h1>
        <p className="drei-desc" style={{ maxWidth: '650px', margin: '0.5rem auto 0' }}>
          The synthwave, electronic, and ambient studio playlists that power late-night 3D coding & engineering sessions.
        </p>
      </div>

      <div className="music-container-2d">
        {/* Vinyl Visual Container */}
        <div className="vinyl-box-2d">
          <div className={`vinyl-disc-2d ${isPlaying ? 'spinning' : ''}`}>
            <div className="vinyl-center-label" />
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <span className="bs-status-pill" style={{ display: 'inline-flex' }}>
              <Volume2 size={14} color="var(--accent-orange)" />
              <span>{isPlaying ? 'NOW PLAYING' : 'AUDIO PAUSED'}</span>
            </span>
          </div>
        </div>

        {/* Audio Player */}
        <div className="audio-player-box-2d">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent-orange)',
            marginBottom: '1rem'
          }}>
            <Music2 size={18} />
            <span>STUDIO PLAYER</span>
          </div>

          <div style={{
            background: 'rgba(20, 18, 16, 0.04)',
            border: '1px solid var(--border-subtle)',
            padding: '1.2rem',
            borderRadius: '10px',
            marginBottom: '1.5rem'
          }}>
            <h2 className="drei-title" style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>
              {track.title}
            </h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {track.artist}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <button onClick={prevTrack} className="bs-btn" style={{ padding: '0.6rem 1rem' }}>
              <SkipBack size={18} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="bs-btn"
              style={{
                padding: '0.8rem 1.8rem',
                background: isPlaying ? 'var(--accent-orange)' : 'var(--bg-surface)',
                color: isPlaying ? '#faf4ec' : 'var(--text-main)'
              }}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
            <button onClick={nextTrack} className="bs-btn" style={{ padding: '0.6rem 1rem' }}>
              <SkipForward size={18} />
            </button>
          </div>

          {/* Playlist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {musicData.playlist.map((item, idx) => (
              <div
                key={idx}
                onClick={() => { setTrackIndex(idx); setIsPlaying(true); }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '6px',
                  background: idx === trackIndex ? 'rgba(224, 75, 22, 0.12)' : 'rgba(20, 18, 16, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  color: idx === trackIndex ? 'var(--accent-orange)' : 'var(--text-main)',
                  display: 'flex',
                  justify: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <span>{idx + 1}. {item.title} — {item.artist}</span>
                <span>{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
