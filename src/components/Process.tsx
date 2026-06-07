import { ProcessStep } from '../types';
import { Target, PenTool, Braces, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery",
      description: "We deeply audit your business goals, target client audience, average deal value, and lead bottlenecks, designing a visual layout wireframe designed to capture inquiries.",
      deliverables: ["Competitor conversion review", "Lead capture user story mapping", "System design blueprint"]
    },
    {
      number: "02",
      title: "Design",
      description: "We craft an exquisite professional brand experience custom-suited to your service, implementing generous negative whitespace, clean typography pairings, and responsive grids.",
      deliverables: ["Tailored visual layouts", "Pre-consult questionnaire UX", "Interactive component prototypes"]
    },
    {
      number: "03",
      title: "Build",
      description: "We program the custom template and integrate AI Agents. We wire automated notification loops that dispatch leads into synchronized platforms (CRMs, sheets).",
      deliverables: ["Blazing fast Tailwind frontend", "AI voice qualification rules", "WhatsApp & spreadsheet webhook lines"]
    },
    {
      number: "04",
      title: "Launch",
      description: "We deploy onto fast Cloud infrastructure, perform load audits, verify Core Web Vitals performance, set live telemetry monitoring, and transfer complete code ownership.",
      deliverables: ["SEO optimization check", "Comprehensive integration audit", "Ownership & source code hand-off"]
    }
  ];

  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Target className="h-5 w-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />;
      case "02":
        return <PenTool className="h-5 w-5 text-purple-400 group-hover:text-pink-400 transition-colors" />;
      case "03":
        return <Braces className="h-5 w-5 text-cyan-400 group-hover:text-blue-400 transition-colors" />;
      case "04":
        return <Rocket className="h-5 w-5 text-emerald-400 group-hover:text-green-400 transition-colors" />;
      default:
        return <Target className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-450 mb-3 font-mono text-cyan-400">
            Execution Roadmap
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
            How We Deploy Your Automated Lead Engine
          </h2>
          <p className="font-sans text-md text-slate-300 mt-4 font-light leading-relaxed">
            Our modular process is built to protect your schedule. We require minimal administrative input, moving systematically from clean scoping to final deployment in four transparent phases.
          </p>
        </div>

        {/* Process Timeline Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative items-stretch" id="process-timeline">
          {steps.map((step, idx) => (
            <div 
              key={step.number}
              className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group"
              id={`process-card-${step.number}`}
            >
              <div>
                {/* Visual Connector Line (Desktop Only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-purple-500/0 z-0 select-none pointer-events-none transform -translate-x-4"></div>
                )}

                {/* Header step tracker */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl group-hover:border-blue-500/20 transition-colors">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-white/5 group-hover:text-cyan-400/10 select-none transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Summary block */}
                <h3 className="font-sans font-bold text-lg text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables box */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-3">
                  Key Deliverables
                </p>
                <ul className="space-y-2">
                  {step.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start text-xs text-slate-300 leading-normal">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#22d3ee]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Timeline Notice Info */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 font-mono font-medium inline-flex items-center space-x-1 justify-center border border-white/15 bg-white/[0.01] px-4.5 py-2.5 rounded-full shadow-lg">
            <span>Average time to deployment:</span>
            <span className="font-extrabold text-white font-sans ml-1 text-xs">14-25 business days</span>
            <span className="text-cyan-400 font-bold ml-1.5">✓ End-to-end Ownership Transferred</span>
          </p>
        </div>

      </div>
    </section>
  );
}
