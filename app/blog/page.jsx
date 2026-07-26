'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Circle, Code2, Layers3, Server } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import SectionMarker from '@/components/ui/SectionMarker';
import Divider from '@/components/ui/Divider';
import ActionButton from '@/components/ui/ActionButton';
import { articles } from '@/data/siteData';

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="site-shell">
      <section className="hero-section" style={{ minHeight: 'auto', paddingBottom: '60px' }}>
        <Header />

        <div className="hero-content" style={{ minHeight: 'auto', paddingTop: '60px' }}>
          <div className="hero-title-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(42px, 8vw, 96px)' }}
            >
              Blog
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-summary"
            style={{ maxWidth: '680px' }}
          >
            <p>
              Articles, Technical Insights & Architecture Guides. Engineering notes on high-performance frontend systems, API design, and UI direction.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>
              <ActionButton href="/" tone="light">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={12} /> Back to Home
                </span>
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="content-section">
        <Divider />
        <SectionMarker label="All Articles" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="article-grid"
        >
          {articles.map((article, index) => (
            <motion.article
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="article-card"
              key={article.title}
            >
              <div className={`article-thumb article-thumb--${index + 1}`}>
                {index === 1 && <Code2 size={48} />}
                {index === 2 && <Layers3 size={48} />}
                {index === 0 && <Server size={48} />}
              </div>
              <p className="article-date">
                {article.date} <Circle size={5} fill="currentColor" /> {article.read}
              </p>
              <h3>
                <a href={article.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {article.title}
                </a>
              </h3>
              <div className="article-footer">
                <span>{article.tag}</span>
                <a href={article.href}>
                  Read Article <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <FooterSection />
    </main>
  );
}
