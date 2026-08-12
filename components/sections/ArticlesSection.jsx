'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '@/components/ui/SectionMarker';
import { articles } from '@/data/siteData';

export default function ArticlesSection() {
  return (
    <section id="pages" className="notes-section editorial-section">
      <div className="section-rail"><SectionMarker label="Field notes" /><span>06</span></div>
      <div className="notes-heading"><p>Writing on systems, interfaces, and the decisions behind both.</p><a className="inline-link" href="/blog">Read all notes <ArrowUpRight size={15} /></a></div>
      <div className="notes-list">
        {articles.map((article, index) => <motion.a href={article.href} key={article.slug} className="note-row" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }}>
          <span>0{index + 1}</span><p>{article.title}</p><span>{article.tag}</span><ArrowUpRight size={17} />
        </motion.a>)}
      </div>
    </section>
  );
}
