
export interface Template {
  title: string;
  channel: 'WhatsApp' | 'Email' | 'Phone Call' | 'In-Person';
  content: string;
}

export interface Step {
  id: string;
  title: string;
  timeline: string;
  action: string;
  comms: string;
  logic: string;
  details?: string[];
  templates?: Template[];
}

export interface JourneyPhase {
  id: string;
  title: string;
  description: string;
  steps: Step[];
}

// FIX: Added missing type definitions to resolve compilation errors.
export interface NonResponseProtocol {
  timing: string;
  steps: string[];
  template?: Template;
}

export interface Touchpoint {
  id: string;
  title: string;
  timing: string;
  channel: string;
  description: string;
  agenda?: string[];
  templates: Template[];
  nonResponseProtocol?: NonResponseProtocol;
}

export interface Phase {
  title: string;
  duration: string;
  touchpoints: Touchpoint[];
}

export interface ScenarioDetail {
  title: string;
  description: string;
  templates: Template[];
}

export interface Scenario {
  title: string;
  details: ScenarioDetail[];
}
