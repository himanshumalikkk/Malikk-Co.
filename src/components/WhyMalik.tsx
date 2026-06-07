import { 
  Zap, 
  Smartphone, 
  TrendingUp, 
  Cpu, 
  MessageSquare, 
  Layers,
  ArrowUpRight 
} from 'lucide-react';

export default function WhyMalik() {
  const points = [
    {
      title: "Fast Delivery",
      description: "We work in focused sprints, launching high-performance baseline systems in weeks, not months. This allows you to start generating real customer inquiries almost immediately.",
      icon: <Zap className="h-5 w-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
    },
    {
      title: "Mobile-First Design",
      description: "Over 68% of your service-seeking traffic operates from mobile screens. We style and program responsive architectures so scheduling appointments is frictionless.",
      icon: <Smartphone className="h-5 w-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
    },
    {
      title: "Lead-Focused Approach",
      description: "We are brutal about conversion optimization. Every pixel, title, and button layout is positioned with single-minded focus: turning curious visitors into paying inquiries.",
      icon: <TrendingUp className="h-5 w-5 text-cyan-400 group-hover:text-blue-400 transition-colors" />
    },
    {
      title: "AI Automation Expertise",
      description: "We go beyond basic static pages. Our systems feature smart qualification logic, instant SMS alerts, calendar synchronizers, and live spreadsheet logging.",
      icon: <Cpu className="h-5 w-5 text-[#8b5cf6] group-hover:text-indigo-400 transition-colors" />
    },
    {
      title: "Direct Communication",
      description: "No account managers or bloated bureaucratic layers. You collaborate directly with our leading technical designers, resulting in faster turnarounds and seamless iterations.",
      icon: <MessageSquare className="h-5 w-5 text-blue-400 group-hover:text-[#06b6d4] transition-colors" />
    },
    {
      title: "Scalable Solutions",
      description: "Our lean clean codebase architecture allows our projects to scale as your company grows. Upgrade steps are backward-compatible without requiring complete site rewrites.",
      icon: <Layers className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
    }
  ];

  return (
    <section id="why-malik" className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Double-column modern layout headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 animate-none">
          <div className="lg:col-span-5 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3 block font-mono text-cyan-400">
              Our Professional Standard
            </p>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Designed For High-Growth Professional Service Firms
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3 text-left">
            <p className="font-sans text-md text-slate-300 font-light leading-relaxed">
              We position ourselves strictly as a strategic digital growth partner, meaning we measure the efficacy of our code by your operational business numbers. We deliver clean, lightning-fast digital pipelines that run 24/7.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch" id="why-grid">
          {points.map((point, index) => (
            <div 
              key={index}
              className="group flex flex-col justify-between p-7 glass-card glass-card-hover rounded-2xl transition-all duration-300"
              id={`why-card-${index}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-200 group-hover:border-blue-500/20">
                    {point.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    SYSTEM_STRENGTH // 0{index + 1}
                  </span>
                </div>

                {/* Content Block */}
                <h3 className="font-sans font-bold text-lg text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {point.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {point.description}
                </p>
              </div>

              {/* Verified Badge footnote */}
              <div className="text-[10px] text-slate-400 font-medium font-mono flex items-center space-x-1.5 border-t border-white/5 pt-4">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Malik &amp; Co. Standard Method</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Trust Statement badge */}
        <div className="mt-16 bg-gradient-to-r from-[#0c1425] to-[#120a1f] border border-white/10 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          
          <div className="md:col-span-8 text-left space-y-1">
            <h4 className="text-sm font-bold tracking-tight text-white uppercase font-mono text-cyan-400">The Malik Guarantee</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
              We maintain absolute transparency: No hidden agency subscription retainers, pure code ownership transferred under your control immediately upon completion.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 border border-blue-500/40 hover:border-cyan-400 bg-blue-500/10 hover:bg-gradient-to-r hover:from-blue-650 hover:to-indigo-650 text-white text-xs font-bold uppercase tracking-widest px-6 py-4 transition-all duration-300 rounded-lg"
            >
              <span>Talk to our Team</span>
              <ArrowUpRight className="h-4 w-4 text-cyan-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
