export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  benefit: string;
  highlights: string[];
}

export interface ProjectInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  outcome: string;
  conversionStat: string;
  techKeywords: string[];
  mockupBg: string;
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ValueProposition {
  title: string;
  description: string;
}

export interface DemoScenario {
  id: string;
  label: string;
  businessType: string;
  leadName: string;
  leadInput: string;
  extractedDetails: {
    budget: string;
    timeline: string;
    interest: string;
  };
  chatLog: { role: 'ai' | 'lead'; text: string }[];
  whatsAppMsg: string;
  googleSheetRow: {
    name: string;
    business: string;
    budget: string;
    score: 'High' | 'Medium';
    status: string;
  };
}

