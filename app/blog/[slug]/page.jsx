import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag, User } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import SectionMarker from '@/components/ui/SectionMarker';
import Divider from '@/components/ui/Divider';
import ActionButton from '@/components/ui/ActionButton';
import { articles, getArticleBySlug } from '@/data/siteData';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const article = getArticleBySlug(params?.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Manraj Chauhan Blog`,
    description: article.subtitle,
  };
}

export default async function BlogSinglePage(props) {
  const params = await props.params;
  const article = getArticleBySlug(params?.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="site-shell">
      <section className="hero-section" style={{ minHeight: 'auto', paddingBottom: '64px' }}>
        <Header />

        <div className="hero-content" style={{ minHeight: 'auto', paddingTop: '60px' }}>
          <div className="hero-title-wrap" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--color-lime)', marginBottom: '16px', textTransform: 'uppercase' }}>
              <span><Tag size={11} style={{ display: 'inline', marginRight: '4px' }} /> {article.tag}</span>
              <span>•</span>
              <span><Calendar size={11} style={{ display: 'inline', marginRight: '4px' }} /> {article.date}</span>
              <span>•</span>
              <span><Clock size={11} style={{ display: 'inline', marginRight: '4px' }} /> {article.read}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 68px)', lineHeight: '1.08', marginBottom: '24px' }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'rgba(255, 255, 255, 0.78)', maxWidth: '760px' }}>
              {article.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-lime)', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontFamily: 'var(--font-code)' }}>
              MC
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--color-paper)', fontFamily: 'var(--font-display)', fontSize: '14px' }}>{article.author}</strong>
              <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'var(--font-code)', fontSize: '11px' }}>{article.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="content-section">
        <Divider />
        <div className="section-layout">
          <div className="section-left">
            <SectionMarker label="Article" />
            <ActionButton href="/blog">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ArrowLeft size={12} /> All Articles
              </span>
            </ActionButton>
          </div>

          <article className="about-copy" style={{ maxWidth: '800px' }}>
            {article.paragraphs.map((p, idx) => (
              <p key={idx} style={{ fontSize: '16px', lineHeight: '1.75', color: 'var(--color-ink)', marginBottom: '28px' }}>
                {p}
              </p>
            ))}

            {article.codeSnippet && (
              <div style={{ margin: '40px 0', borderRadius: 'var(--radius)', overflow: 'hidden', background: '#0d0d0d', border: '1px solid var(--color-line)', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                  <span style={{ color: 'var(--color-lime)', fontFamily: 'var(--font-code)', fontSize: '11px' }}>Code Example</span>
                  <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '10px' }}>TypeScript / React</span>
                </div>
                <pre style={{ margin: 0, fontFamily: 'var(--font-code)', fontSize: '13px', lineHeight: '1.6', color: '#e0e0e0', overflowX: 'auto' }}>
                  <code>{article.codeSnippet}</code>
                </pre>
              </div>
            )}

            <div style={{ marginTop: '48px', padding: '28px', borderRadius: 'var(--radius)', background: 'var(--color-soft)', border: '1px solid var(--color-line)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, margin: '0 0 10px' }}>
                Enjoyed this read?
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: '0 0 20px', lineHeight: '1.5' }}>
                Have questions about full-stack engineering, performance optimizations, or system design? Feel free to reach out directly.
              </p>
              <ActionButton href="mailto:contact@manrajchauhan.com">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Let&apos;s Discuss <ArrowUpRight size={12} />
                </span>
              </ActionButton>
            </div>
          </article>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
