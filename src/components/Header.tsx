import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, Workflow } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetHeader = 72; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-blue-950/20'
          : 'bg-transparent py-5 border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2.5 group focus:outline-none"
          id="nav-logo"
        >
          {/* Extremely Aesthetic Glowing Tech Logo Icon */}
          <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.45)] group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#081120] rounded-[11px] flex items-center justify-center">
              <Workflow className="h-4.5 w-4.5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <span className="font-sans font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent flex items-center">
            Malik <span className="text-cyan-400 font-light mx-1 group-hover:rotate-12 transition-transform duration-300">&amp;</span> Co.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8" id="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none relative py-1 ${
                activeSection === item.href.slice(1)
                  ? 'text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center" id="nav-cta-container">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group inline-flex items-center space-x-1.5 border border-blue-500/40 hover:border-cyan-400/85 px-4.5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-blue-500/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 rounded-lg focus:outline-hidden"
            id="nav-cta-btn"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="h-4.5 w-4.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-blue-400 focus:outline-none p-1.5 hover:bg-white/5 rounded-lg border border-white/10"
          aria-label="Toggle Menu"
          id="nav-mobile-toggle"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-y-0 right-0 w-80 bg-[#081120]/95 border-l border-white/10 shadow-2xl backdrop-blur-2xl z-40 flex flex-col justify-between p-8 md:hidden animate-in slide-in-from-right duration-300"
          id="nav-mobile-drawer"
        >
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
              <div className="flex items-center space-x-2.5">
                <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                  <div className="w-full h-full bg-[#081120] rounded-[11px] flex items-center justify-center">
                    <Workflow className="h-4.5 w-4.5 text-cyan-400" />
                  </div>
                </div>
                <span className="font-sans font-extrabold text-xl tracking-tight bg-gradient-to-r from-white to-slate-350 bg-clip-text text-transparent flex items-center">
                  Malik <span className="text-cyan-400 font-light mx-1">&amp;</span> Co.
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white focus:outline-none p-1.5 hover:bg-white/10 rounded-lg"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-5">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-bold uppercase tracking-wider border-b border-white/5 pb-2 ${
                    activeSection === item.href.slice(1)
                      ? 'text-white border-blue-500 font-extrabold bg-gradient-to-r from-blue-500/10 to-transparent pl-2.5 transition-all'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6 pb-6 border-t border-white/5 pt-6">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-semibold">
              TRUSTED REVENUE WORKFLOWS
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-4.5 font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-lg shadow-blue-500/25"
            >
              <span>Consultation Briefing</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
            <div className="text-[10px] text-slate-500 font-mono text-center">
              Malik &amp; Co. Global Digital Growth LLC
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
