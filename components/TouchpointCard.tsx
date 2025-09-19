
import React from 'react';
import type { Touchpoint } from '../types';

interface TouchpointCardProps {
  touchpoint: Touchpoint;
  onClick: () => void;
}

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const ChannelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
);


export const TouchpointCard: React.FC<TouchpointCardProps> = ({ touchpoint, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 cursor-pointer group hover:bg-slate-700/80 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-pink-500/20"
    >
      <h4 className="font-semibold text-gray-100 group-hover:text-pink-300 transition-colors">{touchpoint.title}</h4>
      <div className="flex items-center space-x-4 mt-2 text-xs">
        <div className="flex items-center space-x-1.5">
            <ClockIcon/>
            <span>{touchpoint.timing}</span>
        </div>
        <div className="flex items-center space-x-1.5">
            <ChannelIcon/>
            <span>{touchpoint.channel}</span>
        </div>
      </div>
    </div>
  );
};
   