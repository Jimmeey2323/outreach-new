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

        {/* Issues with Current SOP */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 dark:text-gray-100">
              🔎 Issues in the Current SOP
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Understanding why the existing process needs transformation to build a more effective, relationship-focused approach.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Too Transactional, Not Relational */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-red-800 dark:text-red-300">Too Transactional</h3>
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                  The process focuses heavily on sending schedules, fee structures, and waiver links immediately.
                </p>
                <p className="text-red-600 dark:text-red-400 text-sm">
                  This comes across as sales-first instead of client-first. Little focus on understanding real needs, goals, or lifestyle before pushing pricing.
                </p>
              </div>

              {/* Rigid Timing */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300">Rigid Timing</h3>
                </div>
                <p className="text-orange-700 dark:text-orange-300 text-sm mb-3">
                  The "2 hours, 48 hours, 7 days, 14 days" sequence is rigid and doesn't adapt to different lead types.
                </p>
                <p className="text-orange-600 dark:text-orange-400 text-sm">
                  No segmentation means hot vs. cold, corporate vs. individual, referral vs. ad-generated leads are all treated the same.
                </p>
              </div>

              {/* WhatsApp Over-Reliance */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300">Channel Over-Reliance</h3>
                </div>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                  Assuming WhatsApp is the primary method overlooks preferences. Some leads may prefer email or calls.
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 text-sm">
                  No personalization in channel selection leads to risk of low response rates.
                </p>
              </div>

              {/* Information Overload */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300">Information Overload</h3>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                  Immediately sharing fee structures and schedules in the first touchpoint often scares away prospects.
                </p>
                <p className="text-blue-600 dark:text-blue-400 text-sm">
                  Pricing should come after establishing value and understanding client motivations.
                </p>
              </div>

              {/* Weak Value Communication */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300">Weak Value Communication</h3>
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm mb-3">
                  The SOP doesn't guide staff on communicating Physique 57's unique value (method, community, results).
                </p>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  Assumes logistics and pricing are enough to convert, which is rarely true in fitness sales.
                </p>
              </div>

              {/* Lack of Personalization */}
              <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <h3 className="text-lg font-bold text-pink-800 dark:text-pink-300">Lack of Personalization</h3>
                </div>
                <p className="text-pink-700 dark:text-pink-300 text-sm mb-3">
                  Conversations framed around "signing up for trial" instead of discovering the client's why.
                </p>
                <p className="text-pink-600 dark:text-pink-400 text-sm">
                  No mention of using client data (age, fitness level, referral source) to tailor the pitch.
                </p>
              </div>
            </div>

            {/* Additional Issues */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Short-Sighted Journey</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Only 4 touchpoints in 14 days - fitness sales often require 8-12+ touches</li>
                  <li>• Many people decide after weeks of nurturing, not within 2 weeks</li>
                  <li>• No automation or CRM tracking for consistency</li>
                  <li>• Missing social proof and emotional hooks</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Lost Opportunities</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• No retargeting after 14 days - leaves money on the table</li>
                  <li>• No feedback loop to understand why leads drop off</li>
                  <li>• End of journey = dead end, no long-term nurturing</li>
                  <li>• Many "not now" prospects could convert later if kept warm</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-200 dark:border-pink-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-pink-800 dark:text-pink-300 mb-2">The Solution Below</h3>
              <p className="text-pink-700 dark:text-pink-400">
                Our new tiered approach addresses these issues with segmented journeys, relationship-first communication, 
                and long-term nurturing strategies that convert more leads and build stronger client relationships.
              </p>
            </div>
          </div>
        </section>

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
                    {/* Tier 1 Journey Map Overview */}
                    <div className="mb-12 bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4 text-center">
                            Tier 1: High-Intent Lead Journey Overview
                        </h3>
                        <p className="text-slate-700 dark:text-gray-300 text-center mb-6">
                            A comprehensive visual map of the high-touch journey for warm prospects
                        </p>
                        <div className="flex justify-center">
                            <img 
                                src="/images/tier1-journey-map.png" 
                                alt="Physique 57 India: Tier 1 Lead Journey Map showing the complete customer journey from lead ingestion through post-purchase engagement"
                                className="max-w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-md"
                                style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
                            High-intent leads receive immediate, personalized engagement with multiple touchpoints to maximize conversion
                        </p>
                    </div>
                    
                    {JOURNEY_MAP.map((phase, index) => (
                        <JourneyPhase key={phase.id} phase={phase} isFirst={index === 0} />
                    ))}
                </div>
            )}
            {activeTab === 'tier2' && (
                 <div className="relative">
                    {/* Tier 2 Timeline Overview */}
                    <div className="mb-12 bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                            Tier 2: Nurture-Intent Lead Timeline
                        </h3>
                        <p className="text-slate-700 dark:text-gray-300 text-center mb-6">
                            An automated nurture sequence designed to educate and build trust over time
                        </p>
                        <div className="flex justify-center">
                            <img 
                                src="/images/tier2-timeline.png" 
                                alt="Physique 57 India's Lead Management Timeline showing automated touchpoints from 5 minutes to quarterly re-engagement campaigns"
                                className="max-w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-md"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
                            Automated nurture sequence with strategic touchpoints to gradually build interest and filter for intent
                        </p>
                    </div>
                    
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