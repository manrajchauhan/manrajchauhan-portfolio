import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-6 py-20">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-parchment border border-ash rounded-full text-xs font-mono uppercase tracking-wider text-graphite mb-4">
          <Briefcase className="w-3.5 h-3.5 text-off-black" />
          <span>Biography // Track Record</span>
        </div>
        <h2 className="font-serif italic text-4xl sm:text-5xl font-normal text-off-black">
          Manraj Chauhan
        </h2>
      </div>

      {/* Monad Card */}
      <div className="max-w-3xl mx-auto monad-card">
        <p className="font-mono text-base sm:text-lg text-graphite leading-relaxed mb-10 text-center sm:text-left">
          Results-driven Full Stack Developer and Technical Lead specializing in high-performance web applications, scalable architectures, and leading technical teams to deliver impactful software.
        </p>

        {/* Monad FAQ / Accordion Row Style */}
        <div className="divide-y divide-ash">
          
          <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-off-black shrink-0" />
              <div>
                <h3 className="font-serif text-2xl font-normal text-off-black">
                  Technical Lead
                </h3>
                <p className="font-mono text-xs uppercase text-smoke mt-1">
                  Architecture & Technical Direction
                </p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase px-3.5 py-1.5 rounded-full border border-ash bg-parchment text-off-black w-fit font-medium">
              Present
            </span>
          </div>

          <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Briefcase className="w-5 h-5 text-smoke shrink-0" />
              <div>
                <h3 className="font-serif text-2xl font-normal text-off-black">
                  Full Stack Developer
                </h3>
                <p className="font-mono text-xs uppercase text-smoke mt-1">
                  Scalable Web Platforms & API Infrastructure
                </p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase px-3.5 py-1.5 rounded-full border border-ash bg-parchment text-smoke w-fit">
              Previous
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
