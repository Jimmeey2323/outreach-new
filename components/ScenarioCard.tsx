
import React, { useState, useEffect } from 'react';
import type { Scenario, ScenarioDetail, Touchpoint } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onCardClick: (item: Touchpoint | ScenarioDetail) => void;
  animationDelay: number;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onCardClick, animationDelay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg p-6 backdrop-blur-sm transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="text-xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">
        {scenario.title}
      </h3>
      <div className="space-y-3">
        {scenario.details.map((detail, index) => (
          <div
            key={index}
            onClick={() => onCardClick(detail)}
            className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 cursor-pointer group hover:bg-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <h4 className="font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
              {detail.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
   