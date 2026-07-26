'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Circle, Code2, Layers3, Server } from 'lucide-react';
import Divider from '@/components/ui/Divider';
import SectionMarker from '@/components/ui/SectionMarker';
import { articles } from '@/data/siteData';

export default function ArticlesSection() {
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
    <section id="pages" className="content-section article-section">
      <Divider />
      <SectionMarker label="Latest Article" />

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
            <h3>{article.title}</h3>
            <div className="article-footer">
              <span>{article.tag}</span>
              <a href="mailto:contact@manrajchauhan.com">
                Read All <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
