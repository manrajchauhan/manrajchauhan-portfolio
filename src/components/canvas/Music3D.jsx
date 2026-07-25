import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import { musicData } from '../../data/musicData';
import { Play, Pause, SkipForward, SkipBack, Disc, Disc3, Music2 } from 'lucide-react';

export default function Music3D() {
  const vinylRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const track = musicData.playlist[trackIndex];

  useFrame((state, delta) => {
    if (vinylRef.current && isPlaying) {
      vinylRef.current.rotation.z -= delta * 1.5;
    }
  });

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % musicData.playlist.length);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + musicData.playlist.length) % musicData.playlist.length);
  };

  return (
    <group position={[0, -36, 0]}>
      {/* Title */}
      <Html
        transform
        position={[0, 3.5, 0]}
        distanceFactor={6}
        center
        className="drei-spatial-card"
      >
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <div className="drei-subtitle">// AUDIO & ATMOSPHERE</div>
          <h2 className="drei-title" style={{ fontSize: '2.4rem' }}>
            MY MUSIC TASTE
          </h2>
        </div>
      </Html>

      {/* 3D Vinyl Record Mesh */}
      <group position={[-2.8, 0, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh ref={vinylRef} rotation={[Math.PI / 3, 0, 0]}>
            <cylinderGeometry args={[2, 2, 0.05, 64]} />
            <meshStandardMaterial color="#121214" roughness={0.2} metalness={0.8} />

            {/* Vinyl Grooves Texture Rings */}
            <mesh position={[0, 0.03, 0]}>
              <ringGeometry args={[0.6, 1.8, 64]} />
              <meshBasicMaterial color="#222" wireframe />
            </mesh>

            {/* Vinyl Center Label */}
            <mesh position={[0, 0.031, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.01, 32]} />
              <meshBasicMaterial color="#e04b16" />
            </mesh>
          </mesh>
        </Float>
      </group>

      {/* Spatial Audio Player Card */}
      <group position={[2.2, 0, 0]}>
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Html
            transform
            position={[0, 0, 0.1]}
            distanceFactor={5}
            center
            className="drei-spatial-card"
            style={{ width: '420px' }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-orange)'
                }}>
                  <Music2 size={16} />
                  <span>STUDIO PLAYLIST // NOW PLAYING</span>
                </div>
                {isPlaying && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent-orange)'
                  }}>
                    <Disc3 size={14} className="spin-icon" /> SPINNING
                  </div>
                )}
              </div>

              {/* Currently Playing Track Info */}
              <div style={{
                background: 'rgba(20, 18, 16, 0.04)',
                border: '1px solid var(--border-subtle)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.2rem'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  fontSize: '1.4rem',
                  color: 'var(--text-main)',
                  marginBottom: '0.2rem'
                }}>
                  {track.title}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}>
                  {track.artist}
                </div>
              </div>

              {/* Audio Controls */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                gap: '1.2rem',
                marginBottom: '1.2rem'
              }}>
                <button onClick={prevTrack} className="bs-btn" style={{ padding: '0.5rem 0.8rem' }}>
                  <SkipBack size={16} />
                </button>

                <button 
                  onClick={() => setIsPlaying(!isPlaying)} 
                  className="bs-btn" 
                  style={{
                    padding: '0.7rem 1.4rem',
                    background: isPlaying ? 'var(--accent-orange)' : 'var(--bg-surface)',
                    color: isPlaying ? '#faf4ec' : 'var(--text-main)'
                  }}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
                </button>

                <button onClick={nextTrack} className="bs-btn" style={{ padding: '0.5rem 0.8rem' }}>
                  <SkipForward size={16} />
                </button>
              </div>

              {/* Playlist Tracks List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {musicData.playlist.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => { setTrackIndex(idx); setIsPlaying(true); }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '4px',
                      background: idx === trackIndex ? 'rgba(224, 75, 22, 0.12)' : 'transparent',
                      color: idx === trackIndex ? 'var(--accent-orange)' : 'var(--text-secondary)',
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
          </Html>
        </Float>
      </group>
    </group>
  );
}
