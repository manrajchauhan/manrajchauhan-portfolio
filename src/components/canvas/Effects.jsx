import React from 'react';
import { 
  EffectComposer, 
  Bloom, 
  Vignette, 
  ChromaticAberration, 
  Noise 
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

export default function Effects() {
  return (
    <EffectComposer disableNormalPass>
      {/* Soft Neon Glow Bloom */}
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      {/* Subtle Lens Distortion Chromatic Aberration */}
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(0.0015, 0.0015)}
      />
      {/* Studio Vignette Framing */}
      <Vignette
        eskil={false}
        offset={0.1}
        darkness={0.85}
      />
      {/* Film Noise Texture */}
      <Noise
        opacity={0.025}
        blendFunction={BlendFunction.OVERLAY}
      />
    </EffectComposer>
  );
}
