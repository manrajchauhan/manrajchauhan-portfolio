'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import { articles } from '@/data/siteData';

export default function BlogPage() {
  return (
    <main className="site-shell">
      <section className="blog-hero">
        <Header />
        <div className="blog-hero-inner">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Writing / Engineering notes</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>Notes from<br /><em>the build.</em></motion.h1>
          <motion.div className="blog-hero-detail" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
            <p>Useful thinking on frontend systems, API boundaries, and the small design decisions that make software feel considered.</p>
            <a href="/" className="blog-back"><ArrowLeft size={14} /> Home</a>
          </motion.div>
        </div>
      </section>

      <section className="blog-index">
        <div className="blog-index-head"><span>All notes</span><span>{String(articles.length).padStart(2, '0')} entries</span></div>
        <div className="blog-list">
          {articles.map((article, index) => (
            <motion.article className="blog-entry" key={article.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <span className="blog-entry-number">0{index + 1}</span>
              <div><p className="blog-entry-meta">{article.tag} · {article.date} · {article.read}</p><h2><a href={article.href}>{article.title}</a></h2><p className="blog-entry-summary">{article.subtitle}</p></div>
              <a className="blog-entry-link" href={article.href} aria-label={`Read ${article.title}`}><ArrowUpRight size={19} /></a>
            </motion.article>
          ))}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
