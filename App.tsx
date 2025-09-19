// FIX: Replaced placeholder content with a functional React component to serve as the main application entry point.
// This resolves compilation errors and renders the main journey map view.
import React, { useState, useEffect } from 'react';
import { JOURNEY_MAP, TIER2_JOURNEY_MAP } from './constants';
import { JourneyPhase } from './components/JourneyPhase';

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;

const ThemeToggle: React.FC<{ theme: string; toggleTheme: () => void; }> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

const App: React.FC = () => {
    const [theme, setTheme] = useState('dark');
    const [activeTab, setActiveTab] = useState<'tier1' | 'tier2'>('tier1');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <header className="relative text-center mb-12">
          <div className="absolute top-0 right-0">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-600">
              Physique 57 Lead Engagement Playbook
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive guide to converting leads through strategic, personalized, and automated outreach.
          </p>
        </header>

        {/* Lead Segmentation Info */}
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-gray-100">Lead Segmentation Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400">Tier 1: High-Intent Leads</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Client Referrals, Website Forms, Walk-ins, Hosted Class Attendees.</p>
                    <p className="mt-4 text-slate-700 dark:text-gray-300">These are warm prospects who have shown clear interest. The goal is immediate, personalized, high-touch engagement to convert them quickly while they are most receptive.</p>
                </div>
                <div className="bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Tier 2: Nurture-Intent Leads</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Social Media Ads, DMs, General Enquiries.</p>
                    <p className="mt-4 text-slate-700 dark:text-gray-300">These are colder leads who require education and inspiration. The process is automated to build trust over time, filtering for intent and "hot-transferring" them to the Tier 1 process when they engage.</p>
                </div>
            </div>
        </section>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-slate-300 dark:border-slate-700">
            <button
                onClick={() => setActiveTab('tier1')}
                className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 relative ${activeTab === 'tier1' ? 'text-pink-600 dark:text-pink-400' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
                Tier 1 Journey
                {activeTab === 'tier1' && <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 rounded-t-full"></span>}
            </button>
            <button
                onClick={() => setActiveTab('tier2')}
                className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 relative ${activeTab === 'tier2' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
            >
                Tier 2 Journey
                 {activeTab === 'tier2' && <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-full"></span>}
            </button>
        </div>
        
        {/* Conditional Content */}
        <div>
            {activeTab === 'tier1' && (
                 <div className="relative">
                    {JOURNEY_MAP.map((phase, index) => (
                        <JourneyPhase key={phase.id} phase={phase} isFirst={index === 0} />
                    ))}
                </div>
            )}
            {activeTab === 'tier2' && (
                 <div className="relative">
                    {TIER2_JOURNEY_MAP.map((phase, index) => (
                        <JourneyPhase key={phase.id} phase={phase} isFirst={index === 0} />
                    ))}
                </div>
            )}
        </div>
      </main>
      <footer className="text-center py-8 text-gray-500 dark:text-gray-500 text-sm">
        <p>Physique 57 - Lead Conversion Strategy</p>
      </footer>
    </div>
  );
};

export default App;