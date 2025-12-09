import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Zap, AlertTriangle, Activity, Lock } from 'lucide-react';

interface Screen5Props {
    onNext: () => void;
}

export const Screen5_Sliders: React.FC<Screen5Props> = ({ onNext }) => {
    const [vacationUtil, setVacationUtil] = useState(60);
    const [sickLeaveType, setSickLeaveType] = useState<'reactive' | 'post-deadline' | 'chronic'>('post-deadline');
    const [trustGap, setTrustGap] = useState(50);

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 w-full max-w-5xl mx-auto z-10 pb-32">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-2xl mb-4">
                    <BrainIcon />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Calibrate the Model</h2>
                <p className="text-lg text-gray-500 max-w-xl mx-auto">Precision matters. Adjust these signals to match your internal data.</p>
            </div>

            <div className="w-full space-y-12">

                {/* 1. Vacation Utilization */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
                                <ClockIcon />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Vacation Utilization</h3>
                                <p className="text-gray-500 text-sm mt-1">What percentage of your employees use 100% of their PTO?</p>
                            </div>
                        </div>
                        <span className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase border border-orange-100">
                            Moderate Risk
                        </span>
                    </div>

                    <div className="relative pt-6 pb-2">
                        <div className="flex justify-between text-2xl font-bold text-gray-300 mb-4">
                            <span>0%</span>
                            <span className="text-gray-900 scale-125">{vacationUtil}%</span>
                            <span>100%</span>
                        </div>
                        <div className="relative h-3 bg-gray-100 rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gray-200 rounded-full"
                                style={{ width: `${vacationUtil}%` }}
                            />
                            <input
                                type="range"
                                min="0" max="100"
                                value={vacationUtil}
                                onChange={(e) => setVacationUtil(Number(e.target.value))}
                                className="absolute inset-0 w-full opacity-0 cursor-pointer z-30"
                            />
                            {/* Thumb */}
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full shadow-lg border-4 border-white cursor-grab active:cursor-grabbing z-20"
                                style={{ left: `${vacationUtil}%`, x: '-50%' }}
                            />
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50/50 rounded-xl p-4 flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800">
                            <strong>Why we ask:</strong> Our data indicates that employees with low vacation utilization ({'<'}70%) are 3x more likely to resign within 6 months due to accumulated burnout.
                        </p>
                    </div>
                </div>

                {/* 2. Sick Leave Pattern */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2 px-2">
                        <div className="p-2 bg-red-50 rounded-lg text-red-500">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Sick Leave Pattern</h3>
                    </div>
                    <p className="text-gray-500 px-2">When do you see the highest spikes in short-term absence?</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Option 1 */}
                        <button
                            onClick={() => setSickLeaveType('reactive')}
                            className={`p-6 rounded-2xl text-left border-2 transition-all ${sickLeaveType === 'reactive' ? 'bg-gray-50 border-gray-900 ring-1 ring-gray-900' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                        >
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Reactive</h4>
                            <p className="text-sm text-gray-500">Random spikes (e.g. Flu season). Normal.</p>
                        </button>

                        {/* Option 2 */}
                        <button
                            onClick={() => setSickLeaveType('post-deadline')}
                            className={`p-6 rounded-2xl text-left border-2 transition-all relative overflow-hidden ${sickLeaveType === 'post-deadline' ? 'bg-red-50/30 border-red-500 ring-1 ring-red-500' : 'bg-white border-gray-100 hover:border-red-200'}`}
                        >
                            <h4 className="font-bold text-lg text-red-600 mb-2">Post-Deadline</h4>
                            <p className="text-sm text-gray-600">The "Crash" after big projects.</p>
                            {sickLeaveType === 'post-deadline' && (
                                <div className="absolute top-0 right-0 p-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                </div>
                            )}
                        </button>

                        {/* Option 3 */}
                        <button
                            onClick={() => setSickLeaveType('chronic')}
                            className={`p-6 rounded-2xl text-left border-2 transition-all ${sickLeaveType === 'chronic' ? 'bg-gray-50 border-gray-900 ring-1 ring-gray-900' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                        >
                            <h4 className="font-bold text-lg text-gray-900 mb-2">Chronic</h4>
                            <p className="text-sm text-gray-500">Constant high rate. No recovery.</p>
                        </button>
                    </div>

                    {sickLeaveType === 'post-deadline' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-red-600 text-sm font-bold flex items-center px-2"
                        >
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            "Post-Deadline Crashes" suggest your teams are running on adrenaline, not sustainable energy.
                        </motion.div>
                    )}
                </div>

                {/* 3. Trust Gap */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-500">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Trust Gap</h3>
                                <p className="text-gray-500 text-sm mt-1">Sentiment variance between High Performers vs. Low Performers</p>
                            </div>
                        </div>
                        <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase border border-purple-100">
                            Variance Detected
                        </span>
                    </div>

                    <div className="relative pt-8 pb-4">
                        <div className="relative h-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-300 to-gray-200">
                            <input
                                type="range"
                                min="0" max="100"
                                value={trustGap}
                                onChange={(e) => setTrustGap(Number(e.target.value))}
                                className="absolute inset-0 w-full opacity-0 cursor-pointer z-30"
                            />
                            {/* Thumb */}
                            <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full shadow-lg border-4 border-white cursor-grab active:cursor-grabbing z-20"
                                style={{ left: `${trustGap}%`, x: '-50%' }}
                            />
                        </div>
                        <div className="flex justify-between mt-4 font-bold text-sm">
                            <span className="text-purple-700">Low Performers</span>
                            <span className="text-gray-400">High Performers</span>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50/50 rounded-xl p-4 flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800">
                            <strong>Why we ask:</strong> A high trust gap ({'>'} 30%) indicates that high performers see things very differently than struggling team members. This creates "invisible friction" where disengagement festers undetected in certain pockets of your organization.
                        </p>
                    </div>
                </div>

            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={onNext}
                    className="bg-black text-white pl-8 pr-2 py-3 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center group"
                >
                    Calculate Hidden Costs
                    <span className="ml-4 bg-white/20 p-2 rounded-full group-hover:bg-white text-black transition-colors">
                        <Lock className="w-5 h-5 text-white group-hover:text-black" />
                    </span>
                </button>
            </div>
        </div>
    );
};

// Simple Icons
const BrainIcon = () => (
    <svg className="w-6 h-6 text-kyan-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
