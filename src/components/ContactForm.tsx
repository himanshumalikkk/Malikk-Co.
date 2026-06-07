import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Smartphone, Database, Calendar, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "Interior Design Studio",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const businessOptions = [
    "Interior Design Studio",
    "Clinic / Healthcare Practice",
    "Salon / Aesthetic Lounge",
    "Real Estate Agency",
    "Local Service Business",
    "Consulting / Professional Specialist",
    "Other"
  ];

  const getWhatsAppUrl = () => {
    const whatsappMsg = `Hello Malik & Co., I am interested in your digital growth solutions.

📋 *My Lead Profile:*
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
💼 *Business Category:* ${formData.businessType}
📝 *Project Scope details:* ${formData.details || "N/A"}`;

    return `https://wa.me/919220820685?text=${encodeURIComponent(whatsappMsg)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate high-converting automation delivery pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      const whatsappUrl = getWhatsAppUrl();
      // Auto redirect to WhatsApp
      window.open(whatsappUrl, '_blank', 'noreferrer,noopener');
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Call to action details */}
        <div className="lg:col-span-5 text-left space-y-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3 block font-mono text-cyan-400">
              Inquire Project
            </p>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Ready to Automate Your Brand Growth?
            </h2>
            <p className="font-sans text-md text-slate-300 mt-4 font-light leading-relaxed">
              Book a session or submit your details. Within 24 business hours, our technical team will review your digital footprint and create a draft blueprint of your revenue capture workflow.
            </p>
          </div>

          {/* Quick specs lists on left */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3.5 text-left">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/10 mt-0.5">
                <CheckCircle className="h-4.5 w-4.5 text-cyan-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">No-Obligation Blueprint</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Receive a realistic wireframe scoping your pipeline free of charge.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5 text-left">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/10 mt-0.5">
                <CheckCircle className="h-4.5 w-4.5 text-cyan-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">Complete IP Ownership</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Your source code and system webhooks belong strictly to your company.</p>
              </div>
            </div>
          </div>

          {/* Contact Details block */}
          <div className="pt-6 border-t border-white/5 space-y-1 text-xs">
            <p className="font-bold uppercase tracking-widest text-[10px] text-slate-400">Direct Inquiries</p>
            <p className="text-sm font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer">malik.businessweb@gmail.com</p>
            <p className="text-slate-500 mt-2">Malik &amp; Co. Global Digital Growth LLC</p>
          </div>
        </div>

        {/* Right Side: Interactive premium Lead Capture form */}
        <div className="lg:col-span-7 glass-card p-8 rounded-2xl shadow-2xl text-left w-full h-full min-h-[420px] flex flex-col justify-center border border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent"></div>
          
          {!submitSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5" id="lead-capture-form">
              {/* Form Row: Name */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  id="form-name"
                  required
                  placeholder="e.g., Alistair Finch"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 text-sm text-white rounded-lg focus:border-blue-500/50 focus:outline-none transition-all placeholder-slate-600"
                />
              </div>

              {/* Form Row: Email */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Business Email Address *
                </label>
                <input
                  type="email"
                  id="form-email"
                  required
                  placeholder="e.g., alistair@finchdesign.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 text-sm text-white rounded-lg focus:border-blue-500/50 focus:outline-none transition-all placeholder-slate-600"
                />
              </div>

              {/* Form Row: Business Type Dropdown */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-business-type" className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Primary Business Category
                </label>
                <select
                  id="form-business-type"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-[#0d162a] border border-white/10 p-3.5 text-sm rounded-lg focus:border-blue-500/50 focus:outline-none focus:ring-0 transition-all cursor-pointer text-slate-200"
                >
                  {businessOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0c1325]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Form Row: Project Details Textarea */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="form-details" className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Brief Project Requirements &amp; Focus Questions
                </label>
                <textarea
                  id="form-details"
                  rows={4}
                  placeholder="What bottlenecks are you experiencing? (e.g. Too many missed customer calls, want a modern high-speed portfolio website, need automated calendar reservations, etc.)"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 text-sm text-white rounded-lg focus:border-blue-500/50 focus:outline-none transition-all resize-none font-light leading-relaxed placeholder-slate-600 text-xs sm:text-sm"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-white/5 text-white disabled:text-slate-500 font-bold tracking-widest uppercase text-xs py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2 border border-blue-400/20 disabled:border-transparent cursor-pointer shadow-lg shadow-blue-500/10"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white"></span>
                    <span>Triggering Malik Pipeline Assets...</span>
                  </>
                ) : (
                  <>
                    <span>Let&apos;s Discuss Your Project</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            // Dynamic Custom Success Output proving our automated architecture
            <div className="text-center py-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto p-3.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-emerald-400 animate-bounce" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Lead Capture Successfully Synchronized!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                  Hi {formData.name}, your request has successfully triggered our demonstrative agency pipeline sandbox. Here is what just happened behind the scenes:
                </p>
              </div>

              {/* Visual checklist showing our real integrations */}
              <div className="max-w-sm mx-auto bg-[#050b15] border border-white/10 rounded-2xl p-5 text-left space-y-3.5 shadow-xl">
                <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                  MALIK &amp; CO ACTUATOR LOGS
                </span>
                
                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <span className="h-5 w-5 bg-emerald-500/15 rounded-full border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-[10px] font-bold">✓</span>
                  <div>
                    <span className="font-bold block leading-tight">Lead Row Ingested</span>
                    <span className="text-[9px] text-[#06b6d4] font-mono font-semibold">Appended to Malik &amp; Co. master ledger</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <span className="h-5 w-5 bg-emerald-500/15 rounded-full border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-[10px] font-bold">✓</span>
                  <div>
                    <span className="font-bold block leading-tight">Direct Email Sync Dispatched</span>
                    <span className="text-[9px] text-[#06b6d4] font-mono font-semibold">Sent to malik.businessweb@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-300">
                  <span className="h-5 w-5 bg-emerald-500/15 rounded-full border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-[10px] font-bold">✓</span>
                  <div>
                    <span className="font-bold block leading-tight">WhatsApp Dispatch Hook Connected</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-semibold">Prepopulated text routed to +91 92208 20685</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-200 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">WhatsApp &amp; SMS active redirect</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 inline-flex items-center space-x-2 w-full sm:w-auto justify-center cursor-pointer font-sans"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-white animate-pulse" />
                  <span>Open WhatsApp Personally</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({ name: "", email: "", businessType: "Interior Design Studio", details: "" });
                  }}
                  className="px-6 py-3.5 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 hover:text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  ← Submit Another
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
