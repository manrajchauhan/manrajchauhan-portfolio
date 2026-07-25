import Image from 'next/image';
import { Terminal, ExternalLink, Sparkles, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-24">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-parchment border border-ash rounded-full text-xs font-mono uppercase tracking-wider text-graphite mb-4">
          <Terminal className="w-3.5 h-3.5 text-off-black" />
          <span>Featured Work</span>
        </div>
        <h2 className="font-serif italic text-4xl sm:text-6xl font-normal text-off-black tracking-tight">
          Selected Work
        </h2>
      </div>

      {/* Single Featured Project Card: MarkMe Workspace */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-periwinkle-mist/40 rounded-[40px] border border-ash p-8 sm:p-12 transition-all duration-300 group flex flex-col justify-between">
          <div>
            {/* Top Header Tag */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-smoke">
                FEATURED LOG // 01
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-ash bg-parchment text-xs font-mono uppercase text-off-black">
                <Sparkles className="w-3.5 h-3.5 text-off-black" />
                Live App
              </span>
            </div>

            {/* Banner Image */}
            <a 
              href="https://markme-5uj.pages.dev/"
              target="_blank"
              rel="noreferrer"
              className="block relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-ash mb-8 bg-neutral-900 group"
            >
              <Image 
                src="/markme.png" 
                alt="MarkMe Workspace"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
              />
            </a>

            {/* Category & Title */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-smoke mb-2">
              <Code2 className="w-4 h-4 text-off-black" />
              <span>Markdown Editor & Productivity App</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-off-black mb-3">
              MarkMe Workspace
            </h3>

            <p className="font-mono text-sm sm:text-base text-graphite leading-relaxed mb-6">
              A warm, browser-first Markdown workspace with live side-by-side preview, split-screen resizing, and automatic browser-local saving.
            </p>
          </div>

          {/* Bottom Footer */}
          <div className="pt-6 border-t border-ash/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Tailwind CSS', 'DOMPurify', 'Local Storage'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1 rounded-full border border-ash bg-parchment text-xs font-mono uppercase text-graphite"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="https://markme-5uj.pages.dev/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-[100px] bg-off-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors w-fit shrink-0 shadow-sm"
            >
              <span>Explore Workspace</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
