import { Laptop, PhoneCall, Workflow, Check, ArrowRight } from 'lucide-react';
import { ServiceInfo } from '../types';

interface ServicesProps {
  onCtaClick: (href: string) => void;
}

export default function Services({ onCtaClick }: ServicesProps) {
  const services: ServiceInfo[] = [
    {
      id: "web",
      title: "Lead Generation Websites",
      description: "Professional, blazingly fast websites engineered to instantly convert casual traffic into highly qualified leads and appointment requests.",
      benefit: "Converts traffic at 3x-5x the rate of standard template websites.",
      highlights: [
        "Core Web Vitals certified (98%+ speed performance)",
        "Precision conversion architecture and dynamic forms",
        "CRM & analytical tracking built-in out of the box",
        "Mobile-first responsive fluid layouts"
      ]
    },
    {
      id: "voice",
      title: "AI Voice Agents",
      description: "24/7 intelligent voice representatives that answer phone calls instantly, qualify hot prospects, capture bookings, and route urgent requests.",
      benefit: "Never miss a customer call, and save $2,500+ every month on reception fees.",
      highlights: [
        "Natural, realistic speech qualification flows",
        "Direct Google Calendar & Booking engine syncing",
        "Pre-qualifies prospects matching your criteria",
        "Works holidays, evenings, and weekends"
      ]
    },
    {
      id: "automation",
      title: "Business Automation",
      description: "End-to-end operational software synchronizations. We build instant WhatsApp bot notifications, CRM entries, and sheets dashboards.",
      benefit: "Reduces administrative work hours by up to 80% through automated pipelines.",
      highlights: [
        "Two-way WhatsApp automated messaging",
        "Live Google Sheets & CRM synchronization",
        "Instant text/email lead alerts for team members",
        "Frictionless customer tracking pipelines"
      ]
    }
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "web":
        return <Laptop className="h-6 w-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />;
      case "voice":
        return <PhoneCall className="h-6 w-6 text-purple-400 group-hover:text-pink-400 transition-colors" />;
      case "automation":
        return <Workflow className="h-6 w-6 text-cyan-400 group-hover:text-blue-400 transition-colors" />;
      default:
        return <Laptop className="h-6 w-6 text-blue-400" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-transparent border-y border-white/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-450 mb-3 font-mono text-cyan-400">
            Core Competencies
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Digital Assets Designed For One Outcome: Revenue Growth
          </h2>
          <p className="font-sans text-md text-slate-300 mt-4 font-light leading-relaxed">
            We don&apos;t build decorative websites or complicated code. We design clean, robust client acquisition workflows customized specifically for your local or professional service business.
          </p>
        </div>

        {/* Services Cards Grid with Glassmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="services-grid">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="glass-card glass-card-hover p-8 flex flex-col justify-between transition-all duration-300 rounded-2xl group relative"
              id={`service-card-${service.id}`}
            >
              {/* Glow accent bubble inside card */}
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-colors pointer-events-none select-none"></div>

              <div>
                {/* Header Icon */}
                <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-xl w-fit mb-6 group-hover:scale-105 transition-transform duration-300 group-hover:border-blue-500/30">
                  {getServiceIcon(service.id)}
                </div>

                {/* Number badge */}
                <span className="text-xs font-mono font-medium text-slate-400 block mb-2">
                  0{idx + 1} // Core Service
                </span>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl text-white mb-3.5 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/5 w-full mb-6"></div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-8">
                  {service.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-xs text-slate-300 text-left">
                      <span className="p-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 mr-2.5 mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-cyan-400" />
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom value proposition banner */}
              <div>
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1.5 font-mono text-cyan-400">
                    Value Deliverable
                  </p>
                  <p className="text-xs text-white font-semibold">
                    {service.benefit}
                  </p>
                </div>

                <button
                  onClick={() => onCtaClick('#contact')}
                  className="w-full inline-flex items-center justify-center space-x-1.5 border border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/10 text-white text-xs font-bold uppercase tracking-widest py-4 transition-all duration-300 rounded-lg focus:outline-hidden cursor-pointer animate-none"
                >
                  <span>Inquire Spec Briefing</span>
                  <ArrowRight className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom CTA notice */}
        <div className="mt-16 border border-white/10 bg-[#0d1629]/40 backdrop-blur-md p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between text-left gap-4 max-w-7xl mx-auto">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full uppercase">
              Flexible Integrations Enabled
            </span>
            <p className="text-sm font-bold text-white mt-2">
              Want a customized multi-channel system?
            </p>
            <p className="text-xs text-slate-300">
              We seamlessly combine Websites + AI Agents + Automations to establish your complete digital office.
            </p>
          </div>
          <button
            onClick={() => onCtaClick('#contact')}
            className="text-xs font-bold uppercase tracking-widest text-[#06b6d4] hover:text-white transition-colors cursor-pointer py-2 focus:outline-none shrink-0"
          >
            Request Custom Integration →
          </button>
        </div>

      </div>
    </section>
  );
}
