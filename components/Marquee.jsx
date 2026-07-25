import React from 'react';
import { 
  Code2, 
  Server, 
  Boxes, 
  Database, 
  Cloud, 
  Layers 
} from 'lucide-react';

const techStack = [
  { name: 'REACT & NEXT.JS', icon: Code2 },
  { name: 'NODE.JS & EXPRESS', icon: Server },
  { name: 'WEBGL & THREE.JS', icon: Boxes },
  { name: 'POSTGRESQL & REDIS', icon: Database },
  { name: 'AWS CLOUD & DOCKER', icon: Cloud },
  { name: 'WEBSOCKETS & GRAPHQL', icon: Layers },
];

export default function Marquee() {
  return (
    <section className="w-full overflow-hidden py-6 bg-parchment border-y border-ash select-none">
      <div className="flex w-max animate-marquee">
        {[1, 2, 3].map((loopIndex) => (
          <div key={loopIndex} className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider text-graphite hover:text-off-black transition-colors"
                >
                  <Icon className="w-4 h-4 text-off-black" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
