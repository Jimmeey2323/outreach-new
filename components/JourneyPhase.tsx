// FIX: Replaced placeholder content with a functional React component.
// This component renders a single journey phase and its steps, resolving compilation errors.
import React from 'react';
import type { JourneyPhase as JourneyPhaseType } from '../types';
import { JourneyStep } from './JourneyStep';

interface JourneyPhaseProps {
  phase: JourneyPhaseType;
  isFirst: boolean;
}

export const JourneyPhase: React.FC<JourneyPhaseProps> = ({ phase, isFirst }) => {
  return (
    <section className="mb-16 relative">
      {!isFirst && <div className="absolute left-4 -top-16 h-16 w-0.5 bg-slate-300 dark:bg-slate-700 -translate-x-1/2" aria-hidden="true"></div>}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-500 dark:to-violet-500">{phase.title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{phase.description}</p>
      </div>
      <div className="space-y-8">
        {phase.steps.map((step) => (
          <JourneyStep key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};