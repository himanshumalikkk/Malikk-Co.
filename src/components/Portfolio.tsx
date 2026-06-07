import { useState } from 'react';
import { ProjectInfo } from '../types';
import { ExternalLink, CheckCircle, Smartphone, Flame, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import luxuryInteriorImg from '../assets/images/luxury_interior_1780819872207.png';
import premiumClinicImg from '../assets/images/premium_clinic_1780819886617.png';
import modernSalonImg from '../assets/images/modern_salon_1780819901637.png';

interface ExtendedProjectInfo extends ProjectInfo {
  image: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProjectInfo | null>(null);

  const projects: ExtendedProjectInfo[] = [
    {
      id: "interior-base",
      title: "Interior Designer Website",
      category: "Interior Design & Architecture",
      description: "A gorgeous, presentation-grade aesthetic website that highlights premium design projects, pairing immersive photography grids with modular lead-capture consult elements.",
      challenge: "High-end interior designers struggle to filter out casual seekers from serious residential clients looking to invest $50,000+.",
      outcome: "Designed a multi-step pre-consult assessment directly on the homepage. Qualified prospects answer scope, budget, and timing questions, yielding warm leads already categorized.",
      conversionStat: "8.4% Appointment Inquiry Rate",
      techKeywords: ["Tailwind 4.0", "Consult Pre-filtering Form", "Photo Studio Lazy Grids", "Client CRM Hook"],
      mockupBg: "bg-amber-950/10",
      accentColor: "text-amber-400",
      image: luxuryInteriorImg
    },
    {
      id: "interior-luxury",
      title: "Luxury Interior Design Website",
      category: "High-End Residential Studio",
      description: "A dark theme design designed to evoke prestige and exclusivity. Framed by delicate high-contrast borders and custom layout styles that showcase fine finishes.",
      challenge: "Prestige brands lose credible status if their websites utilize generic mobile layouts, confusing contact sheets or slow rendering times.",
      outcome: "Built an ultra-fast, high-visual-fidelity portfolio that displays raw textures. Fully integrated with automated WhatsApp concierge triggers for instant high-touch communication.",
      conversionStat: "42% Increase in Premium Inquiries",
      techKeywords: ["Aesthetic Dark layout", "Concierge WhatsApp API", "WebP Image Optimization", "SMS Team Dispatcher"],
      mockupBg: "bg-slate-900/40",
      accentColor: "text-blue-400",
      image: luxuryInteriorImg
    },
    {
      id: "clinic",
      title: "Clinic Website",
      category: "Medical & Specialist Healthcare",
      description: "A clean, clinical, and highly trustworthy patient interface focused entirely on booking friction reduction, physician availability, and services clarification.",
      challenge: "Most medical and therapeutic clinic websites have complicated call structures, making online appointment booking frustrating for busy patients.",
      outcome: "Engineered a rapid appointment reserving engine directly into the primary hero. Synchronized with internal doctor timetables and automated WhatsApp reminders to eliminate no-shows.",
      conversionStat: "-60% Front-Desk Call Volume",
      techKeywords: ["Calendar Reserving API", "Doctor Schedule Synchronization", "Automated SMS Reminders", "HIPAA Compliant Input"],
      mockupBg: "bg-[#0b1c2e]",
      accentColor: "text-emerald-400",
      image: premiumClinicImg
    },
    {
      id: "salon",
      title: "Salon Website",
      category: "Beauty & Wellness Lounge",
      description: "A rich layout focusing on treatment visual menus, team expert selections, transparent pricing structures, and social proof reviews.",
      challenge: "Salons with phone-only appointment reserving systems suffer from high vacancy gaps during peak afternoon and evening business hours.",
      outcome: "Added an intuitive, visual treatment-builder reservation flow with quick-touch upsells. Automatically qualified booking statuses and synced with the team member timetables.",
      conversionStat: "+54% Late Afternoon Slots Booked",
      techKeywords: ["Visual Treatment Builder", "Employee Timetable Sync", "SMS Payment Triggers", "Google Review Fetcher"],
      mockupBg: "bg-[#140c1e]",
      accentColor: "text-purple-400",
      image: modernSalonImg
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4 font-mono">
            <Flame className="h-3.5 w-3.5 text-red-400 shrink-0 shadow-[0_0_8px_#f87171]" />
            <span>Interactive Blueprints</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
            High-Converting Client Assets
          </h2>
          <p className="font-sans text-md text-slate-300 mt-4 font-light leading-relaxed">
            All our custom-tailored projects are mathematically engineered for top Google core vitals, organic discoverability, and clean scheduling pipelines. Take a diagnostic look at our concept blueprints below.
          </p>
        </div>

        {/* Portfolio Grid with premium layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12" id="portfolio-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col glass-card border border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl relative"
              id={`portfolio-card-${project.id}`}
            >
              {/* Immersive Viewport Mockup Area with custom theme tint backgrounds */}
              <div className={`p-6 ${project.mockupBg} border-b border-white/5 relative h-68 flex items-center justify-center transition-all duration-300 overflow-hidden`}>
                
                {/* Simulated Web Browser Border Container */}
                <div className="w-full max-w-sm h-52 bg-[#080e1a] border border-white/15 rounded-xl shadow-xl overflow-hidden flex flex-col transform group-hover:scale-[1.03] transition-transform duration-500">
                  
                  {/* Browser Header Bar */}
                  <div className="bg-[#0b1429] px-3.5 py-2 border-b border-white/10 flex items-center justify-between">
                    <div className="flex space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    </div>
                    <span className="text-[8px] font-mono text-slate-400 select-none">https://demo.malikand.co/</span>
                    <span className="w-3"></span>
                  </div>

                  {/* High Quality Screen Render Container */}
                  <div className="flex-1 overflow-hidden relative bg-black">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient blur over image cards for better typography contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Concept Label watermark */}
                <div className="absolute top-4 right-4 bg-[#091124]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[8px] uppercase tracking-widest font-bold text-slate-300 rounded font-mono">
                  Concept Blueprints
                </div>
                
                {/* Quick Stats Banner */}
                <div className="absolute bottom-4 left-4 bg-[#091124]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-lg text-left">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest leading-none block font-mono">Outcome Metric</span>
                  <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{project.conversionStat}</span>
                </div>
              </div>

              {/* Information Text Block */}
              <div className="p-6.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                      {project.category}
                    </span>
                    <span className="text-[8px] font-semibold text-slate-400 border border-white/5 bg-white/[0.01] px-2.5 py-0.5 rounded cursor-default font-mono">
                      Transparency Compliant
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 flex items-center group-hover:text-cyan-300 transition-colors">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Action parameters */}
                <div className="flex items-center justify-between pt-4.5 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                    {project.techKeywords.slice(0, 2).map((word, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded">
                        {word}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn inline-flex items-center space-x-1.5 py-2 px-3 border border-blue-500/30 hover:border-cyan-400 bg-blue-500/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-lg cursor-pointer"
                  >
                    <span>Analyze Specs</span>
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal (animated overlay) */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            id="portfolio-spec-modal"
          >
            <div className="bg-[#0b1425] border border-white/10 text-left w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
              
              {/* Modal Banner Title */}
              <div className="bg-[#0e172a] p-6 border-b border-white/5 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-1.5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Inside info */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
                
                {/* Concept Label Disclaimer Warning */}
                <div className="bg-cyan-500/5 border border-cyan-400/25 rounded-xl p-4 text-xs text-slate-300 leading-normal">
                  <span className="font-mono font-bold uppercase block tracking-wider text-[9px] text-cyan-400 mb-1.5">MALIK &amp; CO. TRANSPARENCY PROMISE</span>
                  This is a <strong>concept case blueprint</strong> demonstrating Malik &amp; Co. technical and aesthetic capabilities. We do not claim this as completed client work to comply with legal credit transparency.
                </div>

                {/* Challenge Section */}
                <div className="space-y-1.5 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] font-sans">Business Bottleneck</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{selectedProject.challenge}</p>
                </div>

                {/* Outcome Section */}
                <div className="space-y-1.5 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4] font-sans">Strategic Resolution</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{selectedProject.outcome}</p>
                </div>

                {/* Conversion Stat Box */}
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-left">
                  <div>
                    <span className="text-[8px] text-slate-400 font-mono uppercase font-bold tracking-widest block leading-none mb-1">Target Metric</span>
                    <span className="text-slate-200 font-medium text-xs">Simulated Business Lift</span>
                  </div>
                  <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono">{selectedProject.conversionStat}</span>
                </div>

                {/* High tech stack details */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] font-sans font-mono">Systems Infrastructure</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedProject.techKeywords.map((tag, i) => (
                      <span key={i} className="flex items-center space-x-1.5 font-mono text-[9px] text-slate-300 bg-white/[0.03] border border-white/10 px-2.5 py-1.5 rounded-lg">
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom bar */}
              <div className="p-4 bg-[#0e172a] border-t border-white/5 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 hover:bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedProject(null);
                    const target = document.querySelector('#contact');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Consult on Setup
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
