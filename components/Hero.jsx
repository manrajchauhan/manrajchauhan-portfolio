import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 pb-24 flex flex-col justify-center items-center overflow-hidden bg-parchment px-6">
      
      {/* Soft Blurred Gradient Wash behind Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full atmospheric-wash pointer-events-none z-0"></div>

      {/* Hero Stack */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Monad Pipeline Node Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-parchment border border-ash rounded-full text-xs font-mono uppercase tracking-wider text-off-black mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-off-black"></span>
          <span>Technical Lead // Full Stack Architect</span>
        </div>

        {/* Display Headline - Untitled Serif weight 400 locked */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal text-off-black tracking-tight leading-[1.05] mb-6">
          Full Stack Developer <br />
          <span className="italic text-graphite font-serif">Technical Lead</span>
        </h1>

        {/* Monospace Subtext */}
        <p className="font-mono text-base sm:text-lg md:text-xl text-graphite max-w-2xl leading-[1.35] tracking-tight mb-10">
          Building high-performance web applications, resilient backend microservices, and leading technical teams to ship scalable software.
        </p>

        {/* Monad Black Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a 
            href="mailto:contact@manrajchauhan.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-off-black text-white text-xs font-mono uppercase tracking-wider rounded-[100px] hover:bg-neutral-800 transition-all shadow-md"
          >
            <span>Get in Touch</span>
            <span className="text-sm">▸</span>
          </a>

          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 border border-off-black text-off-black text-xs font-mono uppercase tracking-wider rounded-[100px] hover:bg-off-black hover:text-parchment transition-all"
          >
            View Projects
          </a>
        </div>

        {/* AI Transparent Cutout Portrait - Extra Large Height & Width */}
        <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto mt-4">
          <div className="relative w-full h-[550px] sm:h-[700px] md:h-[850px] lg:h-[950px]">
            <Image 
              src="/hero.png" 
              alt="Manraj Chauhan" 
              fill
              priority 
              className="object-contain drop-shadow-xl scale-105"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
