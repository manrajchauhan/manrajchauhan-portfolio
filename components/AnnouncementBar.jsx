'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-ink text-parchment py-2.5 px-6 flex items-center justify-between text-xs font-mono tracking-tight z-50 relative border-b border-neutral-800">
      <div className="flex items-center gap-2 mx-auto sm:mx-0">
        <Sparkles className="w-3.5 h-3.5 text-accent-green" />
        <span className="uppercase tracking-wider">
          TECHNICAL LEAD & FULL STACK ARCHITECT // OPEN FOR SELECTIVE COLLABORATIONS
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <a 
          href="https://markme-5uj.pages.dev/" 
          target="_blank" 
          rel="noreferrer"
          className="px-3 py-1 rounded-full border border-parchment text-[11px] font-mono uppercase tracking-wider hover:bg-parchment hover:text-ink transition-colors"
        >
          Explore MarkMe ▸
        </a>
        <button 
          onClick={() => setVisible(false)}
          className="text-smoke hover:text-parchment transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
