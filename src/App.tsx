import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyMalik from './components/WhyMalik';
import Process from './components/Process';
import Showcase from './components/Showcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Telemetry: Automatically detect scroll position and highlight appropriate sticky nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "process", "showcase", "contact"];
      const scrollPosition = window.scrollY + 180; // offset buffer

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple clean scroll function
  const handleScrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 72; // matching sticky navigation height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#081120] font-sans text-slate-100 selection:bg-blue-500/20 flex flex-col overflow-hidden">
      {/* Dynamic Background Glow Blobs */}
      <div className="glow-spot glow-blue top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]"></div>
      <div className="glow-spot glow-purple top-[30%] right-[5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px]"></div>
      <div className="glow-spot glow-cyan bottom-[15%] left-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px]"></div>
      
      {/* Sticky Header Nav */}
      <Header activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* HERO */}
        <div id="home">
          <Hero onCtaClick={handleScrollToSection} />
        </div>

        {/* SERVICES */}
        <div id="services">
          <Services onCtaClick={handleScrollToSection} />
        </div>

        {/* PORTFOLIO */}
        <div id="portfolio">
          <Portfolio />
        </div>

        {/* WHY MALIK & CO */}
        <div id="why-malik">
          <WhyMalik />
        </div>

        {/* PROCESS */}
        <div id="process">
          <Process />
        </div>

        {/* AI AUTOMATION SHOWCASE */}
        <div id="showcase">
          <Showcase />
        </div>

        {/* CONTACT FORM */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
