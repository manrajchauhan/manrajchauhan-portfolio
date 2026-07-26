import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="site-shell">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FooterSection />
    </main>
  );
}
