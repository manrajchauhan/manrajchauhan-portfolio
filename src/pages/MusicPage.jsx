import React, { useState } from 'react';
import { musicData } from '../data/musicData';
import { Play, Pause, SkipForward, SkipBack, Music2 } from 'lucide-react';

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
      <div className="page-header">
        <span className="vivid-eyebrow">// ATMOSPHERE & AUDIO SHIMMER</span>
        <h1 className="vivid-display-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 105px)', marginBottom: '16px' }}>
          ATMOSPHERE
        </h1>
        <p className="drei-desc" style={{ maxWidth: '640px', color: 'var(--color-bone-white)', fontSize: '20px' }}>
          Curated studio soundscapes and synthwave playlists that accompany late-night WebGL & spatial code sessions.
        </p>
      </div>

      <div className="music-container-2d">
        {/* Vinyl Visual Container */}
        <div className="vinyl-box-2d">
          <div className={`vinyl-disc-2d ${isPlaying ? 'spinning' : ''}`}>
            <div className="vinyl-center-label" />
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '15px', color: 'var(--color-fog-blue)', textTransform: 'uppercase' }}>
              {isPlaying ? '[ AUDIO PLAYING ]' : '[ AUDIO PAUSED ]'}
            </span>
          </div>
        </div>

        {/* Audio Player */}
        <div className="audio-player-box-2d">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-neue-montreal)',
            fontSize: '15px',
            color: 'var(--color-fog-blue)',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            <Music2 size={16} color="var(--color-fog-blue)" />
            <span>STUDIO PLAYLIST</span>
          </div>

          <div style={{
            borderBottom: '1px solid var(--color-ash-border)',
            paddingBottom: '20px',
            marginBottom: '20px'
          }}>
            <h2 className="drei-title" style={{ fontSize: '32px', marginBottom: '4px' }}>
              {track.title}
            </h2>
            <div style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '18px', color: 'var(--color-fog-blue)' }}>
              {track.artist}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
            <button onClick={prevTrack} className="bs-btn">
              <SkipBack size={16} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="bs-btn"
              style={{
                borderColor: 'var(--color-bone-white)',
                padding: '10px 24px'
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
            <button onClick={nextTrack} className="bs-btn">
              <SkipForward size={16} />
            </button>
          </div>

          {/* Playlist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {musicData.playlist.map((item, idx) => (
              <div
                key={idx}
                onClick={() => { setTrackIndex(idx); setIsPlaying(true); }}
                style={{
                  fontFamily: 'var(--font-neue-montreal)',
                  fontSize: '16px',
                  padding: '10px 14px',
                  borderRadius: '0px',
                  background: idx === trackIndex ? 'rgba(255, 253, 249, 0.08)' : 'transparent',
                  borderBottom: '1px solid var(--color-ash-border)',
                  color: idx === trackIndex ? 'var(--color-bone-white)' : 'var(--color-fog-blue)',
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
