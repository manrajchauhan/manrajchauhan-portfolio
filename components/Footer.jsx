import { Globe, Share2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-parchment text-off-black pt-20 pb-16 px-6 border-t border-ash mt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Untitled Serif Headline */}
        <h2 className="font-serif italic text-5xl sm:text-7xl md:text-8xl font-normal text-off-black tracking-tight mb-4">
          Let's Make It Happen
        </h2>
        
        <p className="font-mono text-sm sm:text-base text-graphite max-w-md mb-10">
          Always open to new opportunities, collaborations, and creative challenges.
        </p>

        {/* Monad Primary Off-Black Pill Button */}
        <a 
          href="mailto:contact@manrajchauhan.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-off-black text-white text-xs font-mono uppercase tracking-wider rounded-[100px] hover:bg-neutral-800 transition-all shadow-md mb-16"
        >
          <span>Get in Touch</span>
          <span className="text-sm">▸</span>
        </a>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 border-t border-ash pt-10 w-full mb-16 font-mono text-xs uppercase tracking-wider">
          <a 
            href="https://github.com/manrajchauhan" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-graphite hover:text-off-black transition-colors"
          >
            <Globe className="w-4 h-4 text-off-black" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/mrmanrajchauhan/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-graphite hover:text-off-black transition-colors"
          >
            <Share2 className="w-4 h-4 text-off-black" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:contact@manrajchauhan.com" 
            className="flex items-center gap-2 text-graphite hover:text-off-black transition-colors"
          >
            <Mail className="w-4 h-4 text-off-black" />
            <span>Email</span>
          </a>
        </div>

        {/* Massive Untitled Serif Signature */}
        <div className="font-serif italic text-6xl sm:text-8xl md:text-9xl text-smoke/30 tracking-tight font-normal select-none">
          Manraj Chauhan
        </div>

      </div>
    </footer>
  );
}
