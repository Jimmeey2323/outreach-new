import React, { useEffect, useRef, useState } from 'react';
import type { Step, Template } from '../types';

interface JourneyStepProps {
  step: Step;
}

const ActionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const CommsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const LogicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 19-7-7"/></svg>;
const DetailsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;

const ChannelIcon: React.FC<{ channel: Template['channel'] }> = ({ channel }) => {
    switch (channel) {
        case 'WhatsApp':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
        case 'Email':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
        case 'Phone Call':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 dark:text-purple-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
        case 'In-Person':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 dark:text-pink-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
        default:
            return null;
    }
}


export const JourneyStep: React.FC<JourneyStepProps> = ({ step }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const hasTemplates = step.templates && step.templates.length > 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const sections = [
    { title: 'Action', icon: <ActionIcon />, content: step.action, color: 'text-green-600 dark:text-green-300' },
    { title: 'Comms', icon: <CommsIcon />, content: step.comms, color: 'text-blue-600 dark:text-blue-300' },
    { title: 'Logic', icon: <LogicIcon />, content: step.logic, color: 'text-amber-600 dark:text-amber-300' },
  ];

  return (
    <div ref={ref} className={`relative pl-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute left-4 top-2 w-4 h-4 bg-pink-500 dark:bg-pink-400 rounded-full border-4 border-gray-50 dark:border-slate-800 -translate-x-1/2" aria-hidden="true"></div>
      
      <div 
        className={`bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-300 ${hasTemplates ? 'hover:border-pink-500/50 cursor-pointer' : ''}`}
        onClick={() => hasTemplates && setIsExpanded(!isExpanded)}
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
              <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400/80">{step.timeline}</span>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mt-1">{step.title}</h3>
              </div>
              {hasTemplates && (
                  <div className="text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">
                      <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDownIcon/>
                      </div>
                  </div>
              )}
          </div>
          
          <div className="mt-6 space-y-5">
            {sections.map(section => (
                <div key={section.title}>
                    <div className={`flex items-center space-x-3 mb-2 font-semibold ${section.color}`}>
                       {section.icon}
                       <h4>{section.title}</h4>
                    </div>
                    <p className="text-slate-700 dark:text-gray-300 text-sm pl-8 border-l-2 border-slate-300 dark:border-slate-700/50 ml-[9px]">{section.content}</p>
                </div>
            ))}

            {step.details && (
                 <div>
                    <div className="flex items-center space-x-3 mb-2 font-semibold text-purple-600 dark:text-purple-300">
                       <DetailsIcon/>
                       <h4>Key Details</h4>
                    </div>
                    <div className="text-slate-700 dark:text-gray-300 text-sm pl-8 border-l-2 border-slate-300 dark:border-slate-700/50 ml-[9px]">
                        <ul className="list-disc list-inside space-y-1">
                            {step.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                    </div>
                </div>
            )}
          </div>
        </div>
        
        {hasTemplates && (
          <div className={`transition-all duration-500 ease-in-out grid ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <div className="bg-gray-100/80 dark:bg-slate-900/80 p-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-300 mb-4 text-base">Templates & Scripts</h4>
                    <div className="space-y-4">
                        {step.templates.map((template, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg">
                                <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                                    <h5 className="font-semibold text-slate-800 dark:text-gray-300 text-sm">{template.title}</h5>
                                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                        <ChannelIcon channel={template.channel} /> 
                                        <span>{template.channel}</span>
                                    </div>
                                </div>
                                <pre className="whitespace-pre-wrap break-words p-4 text-sm text-slate-700 dark:text-gray-300 font-sans">{template.content}</pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};