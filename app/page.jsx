import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import AeoDigest from '@/components/AeoDigest';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment text-off-black selection:bg-periwinkle-mist selection:text-off-black">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Marquee />
      <Skills />
      <Projects />
      <Experience />
      <AeoDigest />
      <Footer />
    </main>
  );
}
