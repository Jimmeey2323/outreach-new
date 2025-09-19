
import React from 'react';
import type { Phase as PhaseType, Touchpoint, ScenarioDetail } from '../types';
import { TouchpointCard } from './TouchpointCard';

interface PhaseProps {
  phase: PhaseType;
  onCardClick: (item: Touchpoint | ScenarioDetail) => void;
  isLast: boolean;
  isVisible: boolean;
}

const FlowConnector: React.FC = () => (
  <div className="hidden lg:flex items-center justify-center w-24">
    <div className="w-full h-1 bg-gray-700/50 relative">
      <div className="absolute right-0 top-1/2 -mt-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-500"></div>
    </div>
  </div>
);

export const Phase: React.FC<PhaseProps> = ({ phase, onCardClick, isLast, isVisible }) => {
  return (
    <div className={`flex items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex-shrink-0 w-80 bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg p-6 backdrop-blur-sm">
        <div className="text-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-pink-400">{phase.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{phase.duration}</p>
        </div>
        <div className="space-y-4">
            {phase.touchpoints.map(tp => (
            <TouchpointCard key={tp.id} touchpoint={tp} onClick={() => onCardClick(tp)} />
            ))}
        </div>
        </div>
        {!isLast && <FlowConnector />}
    </div>
  );
};
   