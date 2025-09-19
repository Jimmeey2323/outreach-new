import React from 'react';
import type { Touchpoint, ScenarioDetail, Template } from '../types';

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Touchpoint | ScenarioDetail;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const ChannelIcon: React.FC<{ channel?: string }> = ({ channel }) => {
    switch (channel) {
        case 'WhatsApp':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
        case 'Email':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
        case 'Phone Call':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
        case 'In-Person':
            return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
        default:
            return null;
    }
}


const TemplateDisplay: React.FC<{ template: Template }> = ({ template }) => (
    <div className="bg-slate-900/70 border border-slate-700 rounded-lg mt-4">
        <div className="px-4 py-2 border-b border-slate-700 flex items-center justify-between">
            <h5 className="font-semibold text-gray-300">{template.title}</h5>
            {template.channel && <div className="flex items-center space-x-2 text-sm text-gray-400"><ChannelIcon channel={template.channel} /> <span>{template.channel}</span></div>}
        </div>
        {/* FIX: Corrected property access from 'template.template' to 'template.content' to match the 'Template' type. */}
        <pre className="whitespace-pre-wrap break-words p-4 text-sm text-gray-300 font-sans">{template.content}</pre>
    </div>
);

export const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  const isTouchpoint = 'timing' in data;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative w-full max-w-3xl max-h-[90vh] bg-[#14142b] border border-slate-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{data.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><CloseIcon/></button>
        </header>

        <div className="p-6 overflow-y-auto">
          {isTouchpoint && 'timing' in data && (
            <div className="flex space-x-6 text-sm text-gray-400 mb-4">
              <p><span className="font-semibold text-gray-200">Timing:</span> {data.timing}</p>
              <p><span className="font-semibold text-gray-200">Channel:</span> {data.channel}</p>
            </div>
          )}
          
          {data.description && <p className="mb-4 text-gray-300">{data.description}</p>}
          
          {isTouchpoint && 'agenda' in data && data.agenda && (
            <div className="mb-4">
                 <h4 className="font-semibold text-gray-200 mb-2">Agenda / Key Points:</h4>
                 <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {data.agenda.map((item, index) => <li key={index}>{item}</li>)}
                 </ul>
            </div>
          )}

          <div>
            {data.templates.map((template, index) => <TemplateDisplay key={index} template={template} />)}
          </div>
          
          {isTouchpoint && 'nonResponseProtocol' in data && data.nonResponseProtocol && (
            <div className="mt-6 border-t border-dashed border-slate-600 pt-4">
                <h4 className="font-semibold text-amber-300 mb-2">Non-Response Protocol</h4>
                <p className="text-sm text-gray-400">{data.nonResponseProtocol.timing}</p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2">
                    {data.nonResponseProtocol.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
                {data.nonResponseProtocol.template && <TemplateDisplay template={data.nonResponseProtocol.template} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};