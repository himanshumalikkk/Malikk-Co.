import { MouseEvent } from 'react';
import { Linkedin, Mail, ShieldAlert, Github, Instagram, MessageSquare, Workflow } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetHeader = 72; // matching sticky navigation offset
      const position = target.getBoundingClientRect().top + window.pageYOffset - offsetHeader;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#081120] border-t border-white/5 py-16 md:py-20 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
          
          {/* Brand block (5 cols) */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-2.5">
              {/* Extremely Aesthetic Glowing Tech Logo Icon */}
              <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                <div className="w-full h-full bg-[#081120] rounded-[11px] flex items-center justify-center">
                  <Workflow className="h-4.5 w-4.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-white flex items-center">
                Malik <span className="text-cyan-400 font-light mx-1">&amp;</span> Co.
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              We engineer custom, high-speed lead-generation websites, pre-qualifying AI voice agents, and direct operational automations synchronized specifically for high-growth service firms.
            </p>
            <p className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest font-mono">
              Websites // AI Agents // Business Automation
            </p>
            
            {/* Customer Requested Social Channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://github.com/himanshumalikkk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 rounded-xl text-slate-400 hover:text-white transition-all transform hover:scale-110 duration-200"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/himanshumalikkkk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 rounded-xl text-slate-400 hover:text-sky-400 transition-all transform hover:scale-110 duration-200"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/malikkandcompany?igsh=MW4yNHpqOWhtM2Ux" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.02] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 rounded-xl text-slate-400 hover:text-pink-400 transition-all transform hover:scale-110 duration-200"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links block (3 cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
              Navigation index
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Services", href: "#services" },
                { label: "Design Portfolio", href: "#portfolio" },
                { label: "System Process", href: "#process" },
                { label: "Automation Interactive Showcase", href: "#process-machine" }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleFooterNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-250 cursor-pointer text-xs"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block (4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
              Secure Channels
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:malik.businessweb@gmail.com"
                className="flex items-center space-x-3 group w-fit cursor-pointer"
              >
                <span className="p-2.5 bg-white/[0.02] border border-white/10 rounded-xl group-hover:scale-105 transition-all group-hover:border-blue-500/20">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </span>
                <div>
                  <span className="text-[8px] font-mono text-slate-400 block uppercase leading-none mb-1">Electronic Mail</span>
                  <span className="text-xs font-bold text-white leading-none hover:text-cyan-300 duration-200">malik.businessweb@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://wa.me/919220820685" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group w-fit cursor-pointer"
              >
                <span className="p-2.5 bg-white/[0.02] border border-white/10 rounded-xl group-hover:scale-105 transition-all group-hover:border-emerald-500/20">
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                </span>
                <div>
                  <span className="text-[8px] font-mono text-slate-400 block uppercase leading-none mb-1">WhatsApp Business</span>
                  <span className="text-xs font-bold text-white leading-none hover:text-emerald-300 duration-200">+91 92208 20685</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Divider bar */}
        <div className="h-px bg-white/5 w-full mb-8"></div>

        {/* Footnotes copyright disclaimer area */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-500 font-mono gap-4">
          <div className="flex items-center space-x-1">
            <span>&copy; {currentYear} Malik &amp; Co. LLC. All rights transferrable.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center space-x-1 border border-white/10 bg-white/[0.01] px-2.5 py-1 rounded-lg text-[9px] text-slate-300">
              <ShieldAlert className="h-3.5 w-3.5 text-cyan-400 mr-0.5 shadow-[0_0_8px_#22d3ee]" />
              <span>Concept case transparency applied</span>
            </span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span>GDPR compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
