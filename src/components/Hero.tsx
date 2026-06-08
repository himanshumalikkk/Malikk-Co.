import { useState, useEffect } from 'react';
import { ArrowDown, Check, ArrowUpRight, Globe, Zap, Cpu, Code2, Users2 } from 'lucide-react';
import workflowAutomationImg from '../assets/images/workflow_automation_1780819916087.png';

interface HeroProps {
  onCtaClick: (href: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0');

  const industries = [
    "Salons",
    "Interior Designers",
    "Clinics",
    "Real Estate Agencies",
    "Consultants",
    "Local Businesses"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger smooth slide out
      setFadeState('opacity-0 -translate-y-2 transition-all duration-300');
      setTimeout(() => {
        setIndustryIndex((prev) => (prev + 1) % industries.length);
        // Trigger smooth slide in
        setFadeState('opacity-100 translate-y-0 transition-all duration-300');
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "50+", label: "Projects Built", desc: "Engineered and delivered" },
    { number: "AI Agent", label: "Custom Solutions", desc: "Qualified voice/text bots" },
    { number: "48h", label: "Average Delivery", desc: "Rapid agile development" },
    { number: "Global", label: "Client Support", desc: "US, UK, EU, AU availability" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 md:py-40 bg-[#081120] overflow-hidden flex items-center"
    >
      {/* Absolute grid background overlay with ambient color highlights */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70"></div>
      
      {/* Ambient background glows */}
      <div className="absolute left-[15%] top-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none select-none"></div>
      <div className="absolute right-[10%] bottom-[15%] w-[450px] h-[450px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column Information */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-300 tracking-wider uppercase mb-8 w-fit shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            <span>Websites, AI Agents &amp; Automations That Help Businesses Grow</span>
          </div>

          {/* Brand Name Title as H1 - Massive, Sleek & Extremely Aesthetic */}
          <h1 className="font-sans font-extrabold text-5xl sm:text-6xl lg:text-[84px] tracking-tighter leading-[0.9] mb-4">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-350 bg-clip-text text-transparent">Malik </span>
            <span className="font-light text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]">&amp;</span>
            <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-white bg-clip-text text-transparent"> Co.</span>
          </h1>

          {/* Interactive H2 subtitle representing the headline with animated industry text */}
          <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[36px] text-slate-300 tracking-tight leading-tight mb-6">
            <span className="block sm:inline mr-2">We Build High-End Systems For</span>
            <span className="inline-block h-[1.25em] relative overflow-hidden align-middle w-full sm:w-auto">
              <span className={`inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transform ${fadeState}`}>
                {industries[industryIndex]}
              </span>
            </span>
          </h2>

          {/* Subheadline description */}
          <p className="font-sans text-md sm:text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
            We build conversion-focused premium websites, pre-qualifying AI agents, and frictionless workflow integrations designed to capture client leads 24/7.
          </p>

          {/* Core Interactive buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={() => onCtaClick('#portfolio')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-4.5 text-xs uppercase tracking-widest transition-all duration-300 rounded-lg inline-flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 cursor-pointer border border-blue-400/20 hover:scale-[1.02]"
            >
              <span>View Blueprints</span>
              <ArrowDown className="h-4 w-4 text-cyan-300" />
            </button>
            <button
              onClick={() => onCtaClick('#contact')}
              className="border border-white/10 text-white hover:border-cyan-400/80 bg-white/5 hover:bg-white/10 px-8 py-4.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-lg inline-flex items-center justify-center space-x-2 cursor-pointer hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="h-4 w-4 text-cyan-400" />
            </button>
          </div>

          {/* Dynamic Trust Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/5">
            {stats.map((st, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-blue-500/25 transition-all duration-300 flex flex-col justify-between"
              >
                <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{st.number}</span>
                <span className="text-xs font-bold text-white mt-1">{st.label}</span>
                <span className="text-[10px] text-slate-400 font-light mt-0.5 leading-tight">{st.desc}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Dynamic SaaS visual illustration embedding our generated asset */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-lg bg-[#0a1224]/80 border border-white/15 shadow-2xl shadow-blue-500/10 rounded-2xl overflow-hidden flex flex-col relative group">
            
            {/* Absolute accent border highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

            {/* Simulated Desktop/Device Window Header */}
            <div className="bg-[#0b1429] px-4 py-3.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/30"></span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono tracking-widest font-medium uppercase">
                AUTOMATION_ENGINE_ACTIVE.SH
              </span>
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse"></span>
            </div>

            {/* Display Body containing our high-fidelity generated illustration */}
            <div className="bg-[#080f1e] p-5 space-y-5">
              
              {/* Actual Generated Image Container with ambient glow frame */}
              <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-inner group-hover:border-blue-500/25 transition-all duration-500">
                <img 
                  src={workflowAutomationImg} 
                  alt="Workflow Automation Graph Render" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 select-none"
                />
                
                {/* Floating active overlay tags */}
                <div className="absolute top-3.5 left-3.5 bg-[#091124]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[9px] font-mono font-bold text-cyan-400">
                  LIVE PIPELINE CONTEXT
                </div>

                <div className="absolute bottom-3.5 right-3.5 bg-[#10b881]/15 backdrop-blur-md border border-[#10b881]/20 px-2.5 py-1 rounded text-[9px] font-mono font-bold text-[#10b981]">
                  HEALTH_SECURE_100%
                </div>
              </div>

              {/* Verified Output Metrics */}
              <div className="grid grid-cols-2 gap-3 pb-1">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-400">QUALIFIED LEADS CATCH</span>
                  <span className="text-2xl font-black text-white mt-1">99.4%</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-400">RESPONSE LATENCY</span>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-1">&lt; 1.2M</span>
                </div>
              </div>

            </div>

            {/* Explanatory bottom label */}
            <div className="bg-[#0b1429] py-3.5 px-6 border-t border-white/5 text-center text-[10px] text-slate-400 font-medium font-mono">
              ★ NO-CODE BULLETPROOF INTEGRATIONS PREFERRED FOR SCALE
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
