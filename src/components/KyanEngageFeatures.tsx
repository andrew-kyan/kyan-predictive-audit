import React from 'react';
import {
    Calendar,
    Sparkles,
    Download,
    Globe,
    Smartphone,
    Check
} from 'lucide-react';

// --- FEATURE 1: CAMPAIGN ROLLOUT ---
export const CampaignRollout = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
            <div className="border-b border-gray-100 p-4 flex justify-between items-center bg-gray-50/50">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Automated Rollout</span>
                </div>
                <button className="text-xs bg-black text-white px-3 py-1.5 rounded-full font-medium">Auto-Generate</button>
            </div>

            <div className="p-6 flex-grow">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Launching your wellbeing program</h3>
                    <p className="text-xs text-gray-500">AI-driven insights mapped to audience segments.</p>
                </div>

                <div className="space-y-4">
                    {/* Audience Card 1 */}
                    <div className="bg-[#FAF9F6] p-4 rounded-lg border border-gray-100 relative group">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-2">
                                <div className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">1</div>
                                <span className="font-bold text-gray-900 text-sm">High-performers</span>
                            </div>
                            <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">12 week rollout</span>
                        </div>

                        <div className="bg-white p-3 rounded-md shadow-sm border border-gray-100 mb-3">
                            <div className="flex items-start space-x-3">
                                <div className="bg-blue-500 p-1.5 rounded-md text-white">
                                    <Sparkles className="w-3 h-3" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-800 mb-1">Momentum Mind Strategy</p>
                                    <p className="text-[10px] text-gray-500 leading-relaxed">
                                        "Insight: Saw 47% increase in uptake driven by early goal-setting."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide opacity-60 group-hover:opacity-100 transition-opacity">
                            {['Webinar', 'Kick-off', 'Challenge'].map((tag, i) => (
                                <span key={i} className="text-[10px] border border-gray-200 px-2 py-1 rounded bg-white text-gray-600">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- FEATURE 2: ASSET GENERATOR ---
export const AssetGenerator = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
            <div className="border-b border-gray-100 p-4 flex justify-between items-center bg-gray-50/50">
                <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <Smartphone className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gray-400">PNG</span>
                    <button className="bg-black text-white px-3 py-1 rounded text-xs font-bold flex items-center space-x-1">
                        <span>Export</span>
                        <Download className="w-3 h-3" />
                    </button>
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                {/* Preview Area */}
                <div className="w-full relative h-48 bg-gray-900 group overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1552674605-469455302ea5?auto=format&fit=crop&q=80&w=800"
                        alt="Running Woman"
                        className="opacity-60 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 p-4 flex flex-col justify-center text-white">
                        <div className="w-6 h-6 mb-2">
                            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                        </div>
                        <h2 className="text-lg font-bold mb-1 leading-tight">Confidential coaching.</h2>
                        <ul className="space-y-1 mt-1">
                            <li className="flex items-center text-[10px]">
                                <Check className="w-2 h-2 mr-1 bg-white text-black rounded-full p-0.5" /> 12 live sessions
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sidebar Controls */}
                <div className="w-full bg-white p-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] uppercase font-bold text-gray-400">Tone of Voice</label>
                        <span className="text-xs bg-black text-white px-2 py-0.5 rounded">Uplifting ☀️</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- FEATURE 3: TIMELINE ---
export const TimelinePlanner = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
            <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-sm text-gray-900 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Wellbeing Timeline
                    </h3>
                </div>

                {/* Timeline Visual */}
                <div className="relative pt-4 overflow-hidden flex-grow">
                    <div className="absolute top-4 left-1/4 w-px h-full bg-black/10 z-0 border-l border-dashed border-gray-300"></div>

                    {/* Month Headers */}
                    <div className="flex text-[10px] uppercase font-bold text-gray-400 mb-4 px-2">
                        <div className="w-1/3">June</div>
                        <div className="w-1/3 text-center">July</div>
                        <div className="w-1/3 text-right">August</div>
                    </div>

                    <div className="space-y-3 relative z-10 pb-4">
                        {/* Event 1 */}
                        <div className="flex items-center">
                            <div className="w-1/3 pr-2">
                                <div className="bg-orange-100 border border-orange-200 p-2 rounded-lg">
                                    <p className="text-[10px] font-bold text-orange-900">Kickoff</p>
                                    <div className="h-1 w-full bg-orange-200 mt-1 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-orange-400"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="flex items-center justify-center">
                            <div className="w-1/3 px-1">
                                <div className="bg-blue-100 border border-blue-200 p-2 rounded-lg shadow-sm">
                                    <p className="text-[10px] font-bold text-blue-900">Mindset Wkshp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
