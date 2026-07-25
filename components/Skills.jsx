import { Rocket, Cpu, Zap, Globe, Settings, Sparkles } from 'lucide-react';

const skills = [
  { name: 'FULL STACK ENGINEERING', icon: Rocket },
  { name: 'SYSTEM ARCHITECTURE', icon: Cpu },
  { name: 'TECHNICAL LEADERSHIP', icon: Zap },
  { name: 'SCALABLE WEB APPS', icon: Globe },
  { name: 'API DESIGN', icon: Settings },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-6 py-20 text-center">
      
      {/* Monad Pipeline Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-parchment border border-ash rounded-full text-xs font-mono uppercase tracking-wider text-graphite mb-6">
        <Sparkles className="w-3.5 h-3.5 text-off-black" />
        <span>Core Capabilities</span>
      </div>

      {/* Untitled Serif Headline 48px locked weight 400 */}
      <h2 className="font-serif text-3xl sm:text-5xl font-normal text-off-black leading-[1.2] max-w-4xl mx-auto mb-12">
        I am a <span className="font-serif italic text-graphite">Full Stack Developer</span> and{' '}
        <span className="font-serif italic text-graphite">Technical Lead</span> focused on robust engineering and scalable digital solutions.
      </h2>

      {/* Monad Pipeline Node Tags */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index} 
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-parchment border border-ash text-xs font-mono uppercase tracking-wider text-off-black hover:border-off-black transition-all cursor-default"
            >
              <Icon className="w-4 h-4 text-off-black" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>

    </section>
  );
}
