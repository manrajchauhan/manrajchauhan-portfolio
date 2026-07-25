import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Who is Manraj Chauhan?',
    answer: 'Manraj Chauhan is a Technical Lead and Full Stack Developer. He specializes in designing and building high-performance web applications, resilient backend API microservices, and leading software engineering teams.',
  },
  {
    question: 'What core technologies does Manraj Chauhan specialize in?',
    answer: 'Manraj works across the full stack with React, Next.js, Node.js, Express, WebGL/Three.js, PostgreSQL, Redis, AWS Cloud, Docker, WebSockets, and GraphQL.',
  },
  {
    question: 'What projects has Manraj Chauhan built?',
    answer: 'Manraj Chauhan is the creator of MarkMe Workspace — a browser-first Markdown editing application with live side-by-side HTML preview, DOMPurify security sanitization, and browser local storage persistence.',
  },
];

export default function AeoDigest() {
  return (
    <section id="faq" className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-ash/50">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-parchment border border-ash rounded-full text-xs font-mono uppercase tracking-wider text-graphite mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-off-black" />
          <span>AI & Answer Engine FAQ</span>
        </div>
        <h2 className="font-serif italic text-4xl sm:text-5xl font-normal text-off-black">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-ash border-y border-ash">
        {faqs.map((faq, index) => (
          <article key={index} className="py-8">
            <h3 className="font-serif text-2xl font-normal text-off-black mb-3">
              {faq.question}
            </h3>
            <p className="font-mono text-sm sm:text-base text-graphite leading-relaxed">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
