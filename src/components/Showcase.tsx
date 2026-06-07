import { useState, useEffect } from 'react';
import { DemoScenario } from '../types';
import { 
  Bot, 
  MessageSquare, 
  Database, 
  CheckCircle, 
  Play, 
  Calendar, 
  Sparkles, 
  Check, 
  ListTodo, 
  Clock, 
  CornerDownRight 
} from 'lucide-react';

export default function Showcase() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("clinic-lead");
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [chatLines, setChatLines] = useState<{ role: 'ai' | 'lead'; text: string }[]>([]);
  const [systemLogs, setSystemLogs] = useState<string[]>([]);

  const scenarios: DemoScenario[] = [
    {
      id: "clinic-lead",
      label: "Aesthetic Clinic Lead",
      businessType: "Clinic Website",
      leadName: "Jameson Carter",
      leadInput: "Hey! Looking to book an urgent acne scar reduction consultation with a dermatologist this Friday afternoon if you have slots.",
      extractedDetails: {
        budget: "Tier-1 Acne Scar Procedure ($850+)",
        timeline: "Urgent (This Friday afternoon)",
        interest: "Dermatological Laser Treatment"
      },
      chatLog: [
        { role: 'lead', text: "Hey! Looking to book an urgent acne scar reduction consultation with a dermatologist this Friday afternoon if you have slots." },
        { role: 'ai', text: "Hi Jameson! Let me search doctor timetables on our dermatologist calendars instantly..." },
        { role: 'ai', text: "✓ Found: Dr. Helena Vance has a 3:00 PM acne scar initial diagnostics check open this Friday. Would that fit your schedule?" },
        { role: 'lead', text: "Perfect, please reserve that spot for me!" },
        { role: 'ai', text: "Booking locked! Let me gather your contact number to finalize your WhatsApp reminders." },
        { role: 'lead', text: "+1 (555) 321-9876 works." },
        { role: 'ai', text: "Great! Booking confirmed. Sending instant WhatsApp receipt in 3, 2, 1..." }
      ],
      whatsAppMsg: "Hi Jameson! Your dermatology consult at Metro Clinic is locked for Friday at 3:00 PM with Dr. Helena. To change this treatment slot, reply to this automated WhatsApp assistant directly. See you soon! Clinic Desk.",
      googleSheetRow: {
        name: "Jameson Carter",
        business: "Metro Aesthetics Clinic",
        budget: "$850 (Qualified Procedure)",
        score: "High",
        status: "Slot Reserved ✅ (Dr. Vance)"
      }
    },
    {
      id: "interior-lead",
      label: "Luxury Interior Penthouse",
      businessType: "High-End Architecture Studio",
      leadName: "Miranda Cole",
      leadInput: "Hi there, I need a luxury interior agency to refurnish my 3,500 sqft penthouse in Manhattan soon. Budget is around $75,000.",
      extractedDetails: {
        budget: "Gold-Tier Retainer ($75,000+ Potential)",
        timeline: "Near term (Next 30 days)",
        interest: "Penthouse Premium Refurnish"
      },
      chatLog: [
        { role: 'lead', text: "Hi there, I need a luxury interior agency to refurnish my 3,500 sqft penthouse in Manhattan soon. Budget is around $75,050." },
        { role: 'ai', text: "Wow, sounds like a beautiful modern design canvas, Miranda! Our system categorizes this project scale under our Gold-Tier Concierge track." },
        { role: 'ai', text: "To assign our head creative architect for your consultation, what is your specific timeline target for project kickoff?" },
        { role: 'lead', text: "Within the next 3 weeks if possible. I would love to verify your material catalog first." },
        { role: 'ai', text: "Understood! I am reserving a private 1v1 video briefing with our Founder, Malik, this Friday at 11:00 AM EDT. Please confirm your email." },
        { role: 'lead', text: "miranda@coleholdings.com" },
        { role: 'ai', text: "Perfect, Calendar entry synced and Material Catalog PDF dispatched on WhatsApp!" }
      ],
      whatsAppMsg: "Hi Miranda! Your design consultation with Malik is confirmed for Friday at 11:00 AM EDT. I have attached our Obsidian Texture Studio catalog to this WhatsApp thread. Reply directly if you have any questions! Malik & Co. Assistant.",
      googleSheetRow: {
        name: "Miranda Cole",
        business: "Obsidian Design Studio",
        budget: "$75,000 (Gold Architectural)",
        score: "High",
        status: "Founder Consult ✅ (Malik)"
      }
    },
    {
      id: "salon-lead",
      label: "Salon Treatment Upsell",
      businessType: "Beauty & Wellness Lounge",
      leadName: "Chloe Sterling",
      leadInput: "Hello, looking for a professional balayage treatment and premium deep-condition blowout this Saturday afternoon with a senior stylist.",
      extractedDetails: {
        budget: "Pro Hair Combo ($280+ Session)",
        timeline: "This Saturday afternoon",
        interest: "Balayage treatment + Blowout"
      },
      chatLog: [
        { role: 'lead', text: "Hello, looking for a professional balayage treatment and premium deep-condition blowout this Saturday afternoon with a senior stylist." },
        { role: 'ai', text: "Greetings Chloe! I see you want our top tier signature hair treatments. Let me consult therapist rosters..." },
        { role: 'ai', text: "✓ Available: Master Stylist Rebecca has a 1:30 PM slot open this Saturday. Rebecca specializes in custom-blends & balayage." },
        { role: 'lead', text: "That works beautifully. Book me in." },
        { role: 'ai', text: "Excellent choice! To prevent high-demand slot empty times, our system requires active SMS authentication. Please enter your mobile details." },
        { role: 'lead', text: "Use +1 (415) 888-0202" },
        { role: 'ai', text: "Confirmed! Initial reservation logged. Watch out for your instant WhatsApp welcome packet!" }
      ],
      whatsAppMsg: "Hi Chloe! Rebecca is excited to style you this Saturday at 1:30 PM at Mane & Glow. We have provisionally booked your Balayage + Blowout combo ($280 value). Reply to this automatic WhatsApp thread to modify. See you!",
      googleSheetRow: {
        name: "Chloe Sterling",
        business: "Mane & Glow Salon",
        budget: "$280 (Senior Stylist Rebecca)",
        score: "Medium",
        status: "Therapist Spot Confirmed ✅"
      }
    }
  ];

  const currentScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  // Triggers simulator timing chain
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);
    setChatLines([]);
    setSystemLogs(["Initializing Malik Automation trigger...", "Connecting to Twilio, WhatsApp, Google Sheets APIs"]);

    // Sequence timer events representing the steps
    setTimeout(() => {
      setChatLines(prev => [...prev, currentScenario.chatLog[0]]);
      setSystemLogs(prev => [...prev, "Incoming message captured via live webhooks", `Sender name: ${currentScenario.leadName}`]);
      setSimulationStep(2);

      setTimeout(() => {
        setChatLines(prev => [...prev, currentScenario.chatLog[1], currentScenario.chatLog[2]]);
        setSystemLogs(prev => [...prev, "AI Lead Agent initiated analysis", `Extracted Project Interest: ${currentScenario.extractedDetails.interest}`]);
        setSimulationStep(3);

        setTimeout(() => {
          setChatLines(prev => [...prev, currentScenario.chatLog[3], currentScenario.chatLog[4], currentScenario.chatLog[5], currentScenario.chatLog[6]]);
          setSystemLogs(prev => [...prev, "Lead qualification criteria matched", "Booking API synced successfully into calendar workspace database"]);
          setSimulationStep(4);

          setTimeout(() => {
            setSystemLogs(prev => [...prev, "Formulating custom WhatsApp receipt payload", "WhatsApp template approved", "Concierge delivery state: DELIVERED (Status 200)"]);
            setSimulationStep(5);

            setTimeout(() => {
              setSystemLogs(prev => [...prev, "Authenticating Google Sheets token", `Appending Row inside ${currentScenario.businessType} sheet`, "Lead Qualification fully indexed. Sync finished."]);
              setSimulationStep(6);
              setIsSimulating(false);
            }, 1800);
          }, 1800);
        }, 2200);
      }, 2000);
    }, 1000);
  };

  useEffect(() => {
    setSimulationStep(0);
    setIsSimulating(false);
    setChatLines([]);
    setSystemLogs([]);
  }, [activeScenarioId]);

  return (
    <section id="process-machine" className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Heading */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-4 font-mono">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 shrink-0 shadow-[0_0_8px_#22d3ee]" />
            <span>Interactive Automation Hub</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
            The Malik &amp; Co. Core Pipeline Machine
          </h2>
          <p className="font-sans text-md text-slate-300 mt-4 font-light leading-relaxed">
            See exactly how we synchronize multiple micro-services into a single seamless, high-converting revenue workflow. Select a target business scenario below and initiate the live simulation.
          </p>
        </div>

        {/* Outer Dashboard Area */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a1224]/50 flex flex-col lg:grid lg:grid-cols-12 gap-0 shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          {/* LEFT UTILITY RAIL: Scenario selector & controls (3 cols) */}
          <div className="lg:col-span-3 bg-[#0a1325]/75 border-b lg:border-b-0 lg:border-r border-white/10 p-6 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-4">
                01 // Select Lead Profile
              </span>
              <div className="space-y-2 mb-8">
                {scenarios.map((scen) => (
                  <button
                    key={scen.id}
                    disabled={isSimulating}
                    onClick={() => setActiveScenarioId(scen.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeScenarioId === scen.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-450/40 shadow-lg shadow-blue-500/15'
                        : 'bg-white/[0.02] text-slate-400 border-white/5 hover:border-white/15 hover:bg-white/[0.04] disabled:opacity-50 cursor-pointer'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{scen.label}</span>
                      <span className={`text-[9px] lowercase font-normal mt-1.5 font-mono ${activeScenarioId === scen.id ? 'text-blue-200' : 'text-slate-500'}`}>
                        {scen.businessType}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Simulation Driver Trigger Button */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  02 // Drive Pipeline
                </span>
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 disabled:from-white/5 disabled:to-white/5 text-white disabled:text-slate-500 text-xs font-bold uppercase tracking-widest py-4.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/10 cursor-pointer border border-emerald-400/20 disabled:border-transparent"
                >
                  <Play className={`h-4 w-4 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? "Dispatching webhook..." : "Initialize Simulation"}</span>
                </button>
              </div>
            </div>

            {/* Micro instructions badge */}
            <div className="mt-8 pt-4 border-t border-white/5 hidden lg:block text-[10px] text-slate-400 font-mono leading-relaxed">
              * Click Initialize to animate Lead-Gen, AI Qualification feedback, WhatsApp alerts, and Sheets rows syncing instantly.
            </div>
          </div>

          {/* MAIN SIMULATOR LAYOUT: Divided into grids (9 cols) */}
          <div className="lg:col-span-9 p-6 md:p-8 flex flex-col space-y-6">
            
            {/* GRID TOP: AI Qualification chat and WhatsApp concierge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* COMPONENT A: AI Lead Qualification (Web Client) */}
              <div className="bg-[#090f1d] border border-white/10 rounded-xl p-5 flex flex-col h-84 justify-between text-left shadow-lg relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg">
                      <Bot className="h-4.5 w-4.5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block leading-none">Module 01</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Agent Qualification</h4>
                    </div>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${isSimulating ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`}></span>
                </div>

                {/* Simulated conversations viewport */}
                <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 text-xs py-2 scrollbar-thin">
                  {simulationStep === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <MessageSquare className="h-8 w-8 text-slate-600 mb-2 animate-pulse" />
                      <p className="text-slate-400 text-xs italic font-light">Lead details will load here. Press Initialize above to start.</p>
                    </div>
                  )}

                  {simulationStep >= 1 && (
                    <div className="space-y-4">
                      {/* Original Lead message */}
                      <div className="bg-white/[0.02] border border-white/15 p-3 rounded-xl">
                        <span className="text-[9px] font-mono font-bold text-cyan-400 block mb-1">Incoming Message // {currentScenario.leadName}</span>
                        <p className="text-slate-200 font-light leading-relaxed">{currentScenario.leadInput}</p>
                      </div>

                      {/* Extracted Data tags appearing */}
                      {simulationStep >= 3 && (
                        <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl space-y-2 animate-in fade-in duration-500">
                          <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">✓ Extracted &amp; Qualified Criteria</span>
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div>
                              <span className="text-slate-400 font-semibold block">Budget Rating:</span>
                              <span className="font-bold text-white block mt-0.5">{currentScenario.extractedDetails.budget}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-semibold block">Timeline Urgency:</span>
                              <span className="font-bold text-white block mt-0.5">{currentScenario.extractedDetails.timeline}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Transcribed interactive chat logs */}
                      {simulationStep >= 3 && chatLines.slice(1).map((line, idx) => (
                        <div 
                          key={idx} 
                          className={`flex space-x-2 animate-in fade-in duration-300 ${line.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                        >
                          <div className={`p-3 rounded-xl max-w-[85%] text-left ${line.role === 'ai' ? 'bg-[#101b30] border border-blue-500/20 text-slate-200' : 'bg-white/5 border border-white/5 text-slate-300'}`}>
                            <span className="text-[8px] font-mono block opacity-60 mb-1">{line.role === 'ai' ? 'Malik AI Receptionist' : 'Prospect Name'}</span>
                            <p className="font-light leading-relaxed text-xs">{line.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* COMPONENT B: Automated WhatsApp Concierge */}
              <div className="bg-[#090f1d] border border-white/10 rounded-xl p-5 flex flex-col h-84 justify-between text-left shadow-lg relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg">
                      <MessageSquare className="h-4.5 w-4.5 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block leading-none">Module 02</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp Concierge</h4>
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full ${simulationStep >= 5 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/5 text-slate-400'}`}>
                    {simulationStep >= 5 ? "Dispatched" : "Pending step 4"}
                  </span>
                </div>

                {/* WhatsApp Screen Mockup */}
                <div className="flex-1 bg-[#060b13] rounded-xl p-4 border border-white/5 overflow-hidden flex flex-col justify-end text-xs relative">
                  
                  {simulationStep < 5 ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#060b13]/85 backdrop-blur-xs select-none">
                      <Clock className="h-6 w-6 text-slate-500 mb-2 animate-pulse" />
                      <p className="text-[10px] text-slate-400 italic">Dispatches confirmation alert during step 4 of simulation pipeline.</p>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 w-full">
                      
                      {/* WhatsApp Date Label */}
                      <div className="text-center">
                        <span className="bg-[#101b30] border border-white/5 text-[8px] text-slate-400 font-medium px-2.5 py-0.5 rounded-full font-mono">TODAY // AUTOMATION</span>
                      </div>

                      {/* WhatsApp Chat Message Bubbles */}
                      <div className="bg-[#0b2c1f] text-emerald-100 border border-emerald-500/20 shadow-xl px-3.5 py-3 rounded-2xl text-left max-w-[95%] relative self-start ml-1.5">
                        <span className="text-[9px] font-bold text-emerald-400 block mb-1.5 font-mono">
                          ★ MALIK &amp; CO AUTO-CONCIERGE
                        </span>
                        <p className="font-light leading-relaxed text-xs text-slate-200">
                          {currentScenario.whatsAppMsg}
                        </p>
                        <span className="text-[8px] text-emerald-500 font-mono text-right block mt-2">
                          Delivered ✓✓
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[9px] text-slate-400 font-mono font-medium mt-3 flex items-center justify-between">
                  <span>Provider: Twilio Dispatch Gateway</span>
                  <span className="text-emerald-400 font-bold">100% Delivery Tracked</span>
                </div>
              </div>

            </div>

            {/* GRID BOTTOM: Interactive Google Sheets updates */}
            <div className="bg-[#090f1d] border border-white/10 rounded-xl p-5 text-left shadow-lg flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-white/[0.03] border border-white/10 rounded-lg">
                    <Database className="h-4.5 w-4.5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block leading-none">Module 03</span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sheets / CRM Database Sync</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[10px]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-300 font-semibold">Active Sink Connection</span>
                </div>
              </div>

              {/* simulated table representing client database */}
              <div className="overflow-x-auto w-full border border-white/5 rounded-xl bg-white/[0.01]">
                <table className="w-full text-xs font-mono text-left border-collapse" id="spreadsheet-mock">
                  <thead>
                    <tr className="bg-white/[0.02] border-y border-white/5 text-[9px] text-slate-400 uppercase tracking-widest">
                      <th className="py-3 px-4">System Row</th>
                      <th className="py-3 px-4">Lead Name</th>
                      <th className="py-3 px-4">Business Location</th>
                      <th className="py-3 px-4">Qualified Budget</th>
                      <th className="py-3 px-4">Tier</th>
                      <th className="py-3 px-4">Dispatch Hook Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr className="border-b border-white/5 text-slate-400 text-[11px]">
                      <td className="py-3 px-4 font-bold">Row #316</td>
                      <td className="py-3 px-4 text-white font-sans font-medium">Alistair Finch</td>
                      <td className="py-3 px-4">Alistair Dental</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">$1,200</td>
                      <td className="py-3 px-4">
                        <span className="px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20 text-[9px] uppercase">Medium</span>
                      </td>
                      <td className="py-3 px-4 text-emerald-400">Indexed ✓</td>
                    </tr>
                    
                    {/* Row 2 */}
                    <tr className="border-b border-white/5 text-slate-400 text-[11px]">
                      <td className="py-3 px-4 font-bold">Row #317</td>
                      <td className="py-3 px-4 text-white font-sans font-medium">Kendra Ross</td>
                      <td className="py-3 px-4">Luxe Decor Studio</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">$15,000</td>
                      <td className="py-3 px-4">
                        <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 text-[9px] uppercase">High</span>
                      </td>
                      <td className="py-3 px-4 text-emerald-400">Indexed ✓</td>
                    </tr>

                    {/* DYNAMIC ROW INSERTION */}
                    {simulationStep >= 6 ? (
                      <tr className="bg-emerald-500/[0.03] border-b border-emerald-500/30 text-white text-[11px] animate-in fade-in duration-500">
                        <td className="py-3.5 px-4 font-bold text-cyan-400">Row #318</td>
                        <td className="py-3.5 px-4 font-sans font-extrabold text-white">{currentScenario.googleSheetRow.name}</td>
                        <td className="py-3.5 px-4 font-semibold text-slate-200">{currentScenario.googleSheetRow.business}</td>
                        <td className="py-3.5 px-4 font-black text-emerald-400">{currentScenario.googleSheetRow.budget}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20 text-[9px] uppercase">
                            {currentScenario.googleSheetRow.score}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-emerald-400 flex items-center space-x-1.5">
                          <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 inline" />
                          <span>{currentScenario.googleSheetRow.status}</span>
                        </td>
                      </tr>
                    ) : (
                      <tr className="border-b border-dashed border-white/5 text-slate-500 text-[11px]">
                        <td className="py-3 px-4 italic font-bold">Row #318</td>
                        <td className="py-3 px-4 italic font-extralight" colSpan={5}>
                          {isSimulating ? "Running calculations... preparing db index block" : "Row #318 idle. Run simulation above to sync."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Real-time system logger terminal (mono font, clean, pure dark) */}
              <div className="mt-4 p-4 bg-[#030712] border border-white/5 text-cyan-400 rounded-xl font-mono text-[10px] space-y-1 block max-h-24 overflow-y-auto w-full">
                <span className="text-[#8b5cf6] font-bold mb-1 block uppercase tracking-widest">// AUTOMATED TELEMETRY DISPATCH CONSOLE</span>
                {systemLogs.length === 0 ? (
                  <p className="text-slate-500 italic">No triggers logged. Waiting for pipeline execution initialization...</p>
                ) : (
                  systemLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-1.5">
                      <span className="text-emerald-400 font-bold select-none">[LOG]</span>
                      <p className="leading-snug text-slate-200">{log}</p>
                    </div>
                  ))
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
