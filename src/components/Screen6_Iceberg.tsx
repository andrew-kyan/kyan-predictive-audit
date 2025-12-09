import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, AlertTriangle, Layers, MessageSquare, Check, Loader2, Lock, ChevronLeft, ChevronRight, UserMinus, Hourglass, DollarSign, Wand2, Palette, CalendarCheck, MapPin, Leaf, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Screen6Props {
    onNext: () => void;
}

const FEATURES = [
    {
        id: 'dashboard',
        title: 'Strategic Rollout Planner',
        description: 'AI-driven insights map your campaign approaches across audiences and regions.',
        image: '/feature-dashboard.png'
    },
    {
        id: 'assets',
        title: 'Asset Generator',
        description: 'Instantly create on-brand flyers, emails, and posters tailored to each department.',
        image: '/feature-assets.png'
    },
    {
        id: 'timeline',
        title: 'Launch Timeline',
        description: 'Visualize your entire rollout schedule from awareness to activation and feedback.',
        image: '/feature-timeline.png'
    }
];


// Context-Aware Signals (Swiss company example)
const SIGNALS = [
    {
        date: 'Apr 14',
        type: 'Local',
        event: 'Zürich Marathon',
        action: 'Physical Recovery Kit',
        icon: MapPin,
        color: 'red',
        bg: 'bg-red-50',
        textColor: 'text-red-600',
        borderColor: 'border-red-200'
    },
    {
        date: 'Oct 1',
        type: 'Internal',
        event: 'Q4 Sprint Kickoff',
        action: 'Focus Time Blocker',
        icon: Zap,
        color: 'purple',
        bg: 'bg-purple-50',
        textColor: 'text-purple-600',
        borderColor: 'border-purple-200'
    },
    {
        date: 'Dec 15',
        type: 'Seasonal',
        event: 'Holiday Season',
        action: 'Gratitude Campaign',
        icon: Leaf,
        color: 'green',
        bg: 'bg-green-50',
        textColor: 'text-green-600',
        borderColor: 'border-green-200'
    },
    {
        date: 'Jan 20',
        type: 'Internal',
        event: 'Annual Planning Week',
        action: 'Mental Reset Program',
        icon: Zap,
        color: 'purple',
        bg: 'bg-purple-50',
        textColor: 'text-purple-600',
        borderColor: 'border-purple-200'
    },
    {
        date: 'Mar 5',
        type: 'Local',
        event: 'Basel Fasnacht',
        action: 'Energy Recovery Kit',
        icon: MapPin,
        color: 'red',
        bg: 'bg-red-50',
        textColor: 'text-red-600',
        borderColor: 'border-red-200'
    }
];

// Cost multipliers and baseline metrics
const COST_MULTIPLIERS = {
    avg_days_lost: 14, // industry baseline days lost per employee
    presenteeism_multiplier: 6.6,
    base_attrition: 0.12 // 12% baseline attrition
};

export const Screen6_Iceberg: React.FC<Screen6Props> = ({ onNext }) => {
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [userData, setUserData] = useState({ name: '', email: '' });
    const isFormValid = userData.name.trim().length > 0 && userData.email.includes('@');

    const [currentFeature, setCurrentFeature] = useState(0);

    // Mock data - in real app this would come from previous screens
    const headcount = 250;
    const avgSalary = 110000;

    // Risk factors (mock - would come from Screen 5)
    const vacationUtil = 60; // 60% utilization = moderate risk
    const trustGap = 50; // 50% gap = high variance
    const burnoutRisk = 0.4; // Based on sick leave pattern

    // Triple Bottom Line Calculations
    const totalRiskProfile = (100 - vacationUtil) / 100; // Higher risk when vacation util is low
    const fatigueMultiplier = 1 + burnoutRisk;

    const daysLostPerEmployee = Math.round(
        COST_MULTIPLIERS.avg_days_lost * totalRiskProfile * fatigueMultiplier * 1.8
    );

    const employeesAtRisk = Math.round(
        headcount * COST_MULTIPLIERS.base_attrition * (1 + burnoutRisk + (trustGap / 100))
    );

    const costPerEmployee = Math.round((avgSalary / 220) * daysLostPerEmployee);
    const totalCost = costPerEmployee * headcount;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextFeature = () => setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
    const prevFeature = () => setCurrentFeature((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);

    const handleSendReport = () => {
        if (emailStatus !== 'idle') return;
        setEmailStatus('sending');
        setTimeout(() => {
            setEmailStatus('sent');
        }, 2000);
    };

    return (
        <div className="flex-grow flex flex-col items-center justify-start pt-24 pb-32 px-4 md:px-8 w-full max-w-6xl mx-auto z-10 overflow-y-auto">

            {/* Header */}
            <div className="w-full flex justify-between items-end mb-12">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-2">Organizational <br /> Health Audit</h1>
                    <p className="text-gray-500 text-lg">Analysis based on 250 employees in the Technology sector.</p>
                </div>

            </div>

            {/* Triple Bottom Line Dashboard */}
            <div className="w-full bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 mb-12">
                <div className="grid md:grid-cols-3 divide-x divide-gray-100">

                    {/* Financial (CFO) */}
                    <div className="px-6 py-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Financial</span>
                                <span className="text-sm font-bold text-gray-900">Cost of Inaction</span>
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-bold text-blue-600">€{Math.round(totalCost / 1000)}k</span>
                            <span className="text-gray-400 font-medium text-sm">/ year</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Based on {headcount} employees</p>
                    </div>

                    {/* Operational (COO) */}
                    <div className="px-6 py-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <Hourglass className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Operational</span>
                                <span className="text-sm font-bold text-gray-900">Productivity Loss</span>
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-bold text-orange-600">{daysLostPerEmployee}</span>
                            <span className="text-gray-400 font-medium text-sm">days / employee</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Annual avg per person</p>
                    </div>

                    {/* Human (CHRO) */}
                    <div className="px-6 py-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <UserMinus className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Human</span>
                                <span className="text-sm font-bold text-gray-900">Attrition Risk</span>
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-bold text-red-600">{employeesAtRisk}</span>
                            <span className="text-gray-400 font-medium text-sm">employees</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">At risk next 12 months</p>
                    </div>

                </div>
            </div>

            {/* Cost Structure Analysis (Iceberg) */}
            <div className="w-full relative rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-gray-100">
                {/* Backgrounds */}
                <div className="absolute inset-0 bg-blue-50 h-[35%] z-0"></div>
                <div className="absolute inset-0 top-[35%] bg-gradient-to-b from-[#003B4D] to-[#001E2B] z-0"></div>

                {/* Animated Wave */}
                <div className="absolute top-[35%] left-0 right-0 -translate-y-1/2 z-10">
                    <svg className="w-full h-12 md:h-24 fill-[#003B4D]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <motion.path
                            animate={{
                                d: [
                                    "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,149.3C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                ]
                            }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                {/* Iceberg Abstract Shape */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <svg width="400" height="600" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200 50 L250 200 L350 550 L50 550 L150 200 Z" fill="url(#icebergGradient)" />
                        <defs>
                            <linearGradient id="icebergGradient" x1="200" y1="0" x2="200" y2="600" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.8" />
                                <stop offset="1" stopColor="#003B4D" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between min-h-[500px]">

                    {/* Top Section (Visible) */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">Cost Structure Analysis</h2>
                            <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg inline-block border border-white">
                                <h3 className="text-sm font-bold text-gray-600 uppercase tracking-widest">Visible Cost</h3>
                                <p className="text-gray-500 text-xs text-center">Absenteeism</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-5xl font-black text-gray-900 tracking-tighter">€111</span>
                        </div>
                    </div>

                    {/* Middle Indicator */}
                    <div className="absolute top-[35%] right-8 -translate-y-1/2 flex items-center space-x-2">
                        <div className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
                            WATERLINE
                        </div>
                    </div>

                    {/* Bottom Section (Hidden) */}
                    <div className="mt-auto">
                        <div className="flex justify-between items-end text-white">
                            <div>
                                <div className="flex items-center space-x-3 text-cyan-400 mb-2">
                                    <AlertTriangle className="w-6 h-6 animate-pulse" />
                                    <h3 className="text-lg font-bold uppercase tracking-widest text-shadow-glow">Hidden Cost</h3>
                                </div>
                                <p className="text-gray-300 max-w-xs text-sm leading-relaxed">Presenteeism, Disengagement, and Productivity Loss hiding deep below the surface.</p>
                            </div>
                            <div className="text-right">
                                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-200 mb-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                    €1,180
                                </div>
                                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                    6.6x Multiplier
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get Your Detailed Plan Section - Combined with Report Teaser */}
            <div className="w-full bg-white rounded-[2rem] p-12 shadow-lg border border-gray-100 mb-16 relative overflow-hidden min-h-[700px]">

                {/* Blurred Report Teaser Background */}
                <div className={`absolute inset-0 p-12 transition-all duration-700 ${!isFormValid ? 'blur-[2px] opacity-70' : 'blur-0 opacity-100 pointer-events-none'}`}>
                    {/* Mock Report Layout */}
                    <div className="space-y-8">
                        {/* Report Title */}
                        <div className="border-b-2 border-gray-300 pb-4">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-10 w-2/3 rounded mb-2"></div>
                            <div className="bg-gray-400 h-5 w-1/2 rounded"></div>
                        </div>

                        {/* Executive Summary Section */}
                        <div className="space-y-3">
                            <div className="bg-gray-700 h-6 w-48 rounded"></div>
                            <div className="bg-gray-400 h-3 w-full rounded"></div>
                            <div className="bg-gray-400 h-3 w-11/12 rounded"></div>
                            <div className="bg-gray-400 h-3 w-10/12 rounded"></div>
                        </div>

                        {/* Section 1: Departmental Risk Heatmap */}
                        <div className="border-2 border-gray-300 rounded-xl p-6 bg-white/50">
                            <div className="bg-gray-700 h-6 w-64 rounded mb-4"></div>
                            <div className="grid grid-cols-4 gap-4 mb-4">
                                <div className="space-y-2">
                                    <div className="bg-gray-500 h-4 w-full rounded text-xs"></div>
                                    <div className="bg-red-400 h-24 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl opacity-60">72%</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-500 h-4 w-full rounded"></div>
                                    <div className="bg-orange-400 h-24 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl opacity-60">58%</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-500 h-4 w-full rounded"></div>
                                    <div className="bg-yellow-400 h-24 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl opacity-60">43%</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-500 h-4 w-full rounded"></div>
                                    <div className="bg-green-400 h-24 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl opacity-60">21%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 text-xs">
                                <div className="bg-gray-300 h-3 rounded"></div>
                                <div className="bg-gray-300 h-3 rounded"></div>
                                <div className="bg-gray-300 h-3 rounded"></div>
                                <div className="bg-gray-300 h-3 rounded"></div>
                            </div>
                        </div>

                        {/* Section 2: Industry Benchmarks Comparison */}
                        <div className="border-2 border-gray-300 rounded-xl p-6 bg-white/50">
                            <div className="bg-gray-700 h-6 w-56 rounded mb-6"></div>
                            <div className="flex items-end justify-between h-40 gap-3">
                                <div className="flex-1 space-y-1">
                                    <div className="bg-blue-400 w-full rounded-t" style={{ height: '60%' }}></div>
                                    <div className="bg-gray-400 h-3 w-full rounded"></div>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="bg-blue-500 w-full rounded-t" style={{ height: '85%' }}></div>
                                    <div className="bg-gray-400 h-3 w-full rounded"></div>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="bg-blue-600 w-full rounded-t" style={{ height: '100%' }}></div>
                                    <div className="bg-gray-400 h-3 w-full rounded"></div>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="bg-purple-500 w-full rounded-t" style={{ height: '75%' }}></div>
                                    <div className="bg-gray-400 h-3 w-full rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Key Performance Indicators */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="border-2 border-gray-300 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-blue-100">
                                <div className="bg-gray-500 h-3 w-24 rounded mb-3"></div>
                                <div className="bg-blue-600 h-12 w-20 rounded mb-2 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">€2.1M</span>
                                </div>
                                <div className="bg-gray-400 h-2 w-16 rounded"></div>
                            </div>
                            <div className="border-2 border-gray-300 rounded-lg p-5 bg-gradient-to-br from-orange-50 to-orange-100">
                                <div className="bg-gray-500 h-3 w-24 rounded mb-3"></div>
                                <div className="bg-orange-600 h-12 w-20 rounded mb-2 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">18d</span>
                                </div>
                                <div className="bg-gray-400 h-2 w-16 rounded"></div>
                            </div>
                            <div className="border-2 border-gray-300 rounded-lg p-5 bg-gradient-to-br from-red-50 to-red-100">
                                <div className="bg-gray-500 h-3 w-24 rounded mb-3"></div>
                                <div className="bg-red-600 h-12 w-20 rounded mb-2 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">42</span>
                                </div>
                                <div className="bg-gray-400 h-2 w-16 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[650px]">
                    <AnimatePresence mode="wait">
                        {!isFormValid ? (
                            <motion.div
                                key="gate-form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-3xl backdrop-blur-md bg-white/90 rounded-2xl p-10 border-2 border-gray-300 shadow-2xl"
                            >
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                                        <Lock className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">What's next?</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Unlock Your Detailed Report</h3>
                                    <p className="text-base text-gray-600">Includes Departmental Heatmaps, Industry Benchmarks & Cost Breakdown</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 text-center md:text-left">
                                    <div className="flex-grow text-2xl md:text-3xl font-medium text-gray-400 leading-relaxed md:leading-normal">
                                        <span className="">I'm </span>
                                        <div className="inline-block relative group mx-2">
                                            <input
                                                type="text"
                                                placeholder="your name"
                                                value={userData.name}
                                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                                className="w-40 md:w-48 bg-white border-b-2 border-gray-300 focus:border-blue-600 outline-none text-black placeholder:text-gray-300 transition-colors py-1 text-center md:text-left rounded px-2"
                                            />
                                        </div>
                                        <span className="block md:inline mt-2 md:mt-0">
                                            and you can reach me at
                                        </span>
                                        <div className="inline-block relative group mx-2 mt-2 md:mt-0">
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={userData.email}
                                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                                className="w-56 md:w-64 bg-white border-b-2 border-gray-300 focus:border-blue-600 outline-none text-black placeholder:text-gray-300 transition-colors py-1 text-center md:text-left rounded px-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="gate-actions"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex gap-4 md:flex-row flex-col w-full"
                            >
                                <button
                                    onClick={handleSendReport}
                                    disabled={emailStatus !== 'idle'}
                                    className={`flex-1 py-4 rounded-xl border-2 font-bold text-lg transition-all flex items-center justify-center ${emailStatus === 'sent'
                                        ? 'bg-green-50 border-green-300 text-green-700'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'
                                        }`}
                                >
                                    {emailStatus === 'idle' && (
                                        <>
                                            <Download className="w-5 h-5 mr-3" />
                                            Send Report to {userData.email}
                                        </>
                                    )}
                                    {emailStatus === 'sending' && (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                            Sending...
                                        </>
                                    )}
                                    {emailStatus === 'sent' && (
                                        <>
                                            <Check className="w-5 h-5 mr-3" />
                                            Report Sent!
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={onNext}
                                    className="flex-[2] py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group"
                                >
                                    <MessageSquare className="w-5 h-5 mr-3" />
                                    Book deployment talk as {userData.name}
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Recommendations / Kyan Engage Carousel */}
            <div className="w-full border-t border-gray-200 pt-16">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">How we fix this? Introducing Kyan Engage</h2>
                    </div>
                    <span className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest border border-green-200">
                        Ready to Deploy
                    </span>
                </div>

                <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
                    Context-aware interventions deployed at the right time, automatically tailored to your risk profile and local events.
                </p>

                {/* Carousel */}
                <div className="relative w-full h-[500px] md:h-[600px] mb-16 rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={FEATURES[currentFeature].id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={FEATURES[currentFeature].image}
                                alt={FEATURES[currentFeature].title}
                                className="w-full h-full object-cover opacity-80"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-10 md:p-12">
                        <motion.div
                            key={`text-${FEATURES[currentFeature].id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{FEATURES[currentFeature].title}</h3>
                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">{FEATURES[currentFeature].description}</p>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={prevFeature}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextFeature}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-12 right-12 flex space-x-2">
                        {FEATURES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentFeature(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentFeature ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Month Timeline Header + Horizontal Scrolling Timeline */}
                <div className="relative w-full mb-16">
                    {/* Timeline Visualization */}
                    <div className="mb-8">
                        {/* Year Label */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">2025 Wellbeing Program Rollout</h3>
                            <p className="text-gray-500 text-sm mt-1">Context-aware interventions deployed throughout the year</p>
                        </div>

                        {/* Timeline Bar Container */}
                        <div className="relative px-8">
                            {/* Background Timeline Bar */}
                            <div className="relative h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full mb-12">
                                {/* Month Markers */}
                                <div className="absolute inset-0 flex justify-between items-center px-2">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="w-0.5 h-3 bg-gray-300 -translate-y-2"></div>
                                            <span className="text-[10px] text-gray-400 font-semibold mt-1">{month}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Event Dots on Timeline */}
                                {/* Jan 20 - Annual Planning Week */}
                                <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '5.5%' }}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-purple-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-purple-300 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Mar 5 - Basel Fasnacht */}
                                <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '19%' }}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-red-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-red-300 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Apr 14 - Zürich Marathon */}
                                <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '29%' }}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-red-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-red-300 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Oct 1 - Q4 Sprint */}
                                <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '75%' }}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-purple-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-purple-300 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Dec 15 - Holiday Season */}
                                <div className="absolute top-1/2 -translate-y-1/2" style={{ left: '95%' }}>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-green-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-green-300 opacity-50"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Legend */}
                            <div className="flex justify-center items-center space-x-6 text-xs mt-6">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <span className="text-gray-600">Local Events</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-600">Internal Milestones</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-600">Seasonal Moments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
                        <div className="flex space-x-6 px-2">
                            {SIGNALS.map((signal, index) => {
                                const IconComponent = signal.icon;
                                return (
                                    <div
                                        key={index}
                                        className="snap-center flex-shrink-0 w-80 bg-white rounded-2xl shadow-sm border-2 border-gray-100 hover:shadow-md transition-all overflow-hidden"
                                    >
                                        {/* Header: Signal Type Badge + Date */}
                                        <div className={`${signal.bg} ${signal.borderColor} border-b-2 p-4 flex items-center justify-between`}>
                                            <div className="flex items-center space-x-2">
                                                <IconComponent className={`w-4 h-4 ${signal.textColor}`} />
                                                <span className={`text-xs font-bold uppercase tracking-widest ${signal.textColor}`}>
                                                    {signal.type} Signal
                                                </span>
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500">{signal.date}</span>
                                        </div>

                                        {/* Body: Event Name */}
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{signal.event}</h4>
                                            <p className="text-sm text-gray-500">
                                                {signal.type === 'Local' && 'Community event creates physical demand'}
                                                {signal.type === 'Internal' && 'High-intensity work period detected'}
                                                {signal.type === 'Seasonal' && 'Cultural moment for team connection'}
                                            </p>
                                        </div>

                                        {/* Footer: Deploy Action */}
                                        <div className="px-6 pb-6">
                                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className={`p-2 ${signal.bg} rounded-lg`}>
                                                            <Wand2 className={`w-4 h-4 ${signal.textColor}`} />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Deploy</p>
                                                            <p className="text-sm font-bold text-gray-900">{signal.action}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll Hint */}
                    <div className="flex justify-center mt-4">
                        <div className="flex items-center space-x-2 text-gray-400 text-xs">
                            <ChevronLeft className="w-3 h-3" />
                            <span>Scroll to see more signals</span>
                            <ChevronRight className="w-3 h-3" />
                        </div>
                    </div>
                </div>


                {/* Feature Deep Dive Section */}
                <div className="w-full mt-16">
                    {/* Divider with "Powered By" */}
                    <div className="relative flex items-center justify-center mb-10">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="px-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Powered By</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Single Consolidated Feature Card - Iceberg Style */}
                    <div className="w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

                        {/* Split Background - Light top, dark bottom like iceberg */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-cyan-50 h-[30%] z-0"></div>
                        <div className="absolute inset-0 top-[30%] bg-gradient-to-b from-[#003B4D] via-[#002633] to-[#001E2B] z-0"></div>

                        {/* Animated Wave Separator */}
                        <div className="absolute top-[30%] left-0 right-0 -translate-y-1/2 z-10">
                            <svg className="w-full h-12 md:h-20 fill-[#003B4D]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                                <motion.path
                                    animate={{
                                        d: [
                                            "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                            "M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,149.3C672,160,768,160,864,149.3C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                            "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ]
                                    }}
                                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                />
                            </svg>
                        </div>

                        {/* Abstract Floating Shapes */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                            {/* Glowing orb top-right */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-teal-400/20 rounded-full blur-2xl"></div>
                            {/* Glowing orb bottom-left */}
                            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/30 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10 p-10 md:p-12 min-h-[600px] flex flex-col">

                            {/* Header on light section */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-200 mb-4">
                                    <Layers className="w-4 h-4 text-cyan-600" />
                                    <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">Kyan Engage</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Complete Wellbeing Platform</h3>
                                <p className="text-cyan-600/70 text-lg max-w-2xl mx-auto font-medium">
                                    Everything you need to launch and scale
                                </p>
                            </div>

                            {/* Features on dark section with glassmorphism */}
                            <div className="flex-1 grid md:grid-cols-3 gap-6 mt-8">

                                {/* Feature 1: AI Asset Studio */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/60 transition-shadow">
                                        <Wand2 className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">AI Asset Studio</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
                                        Instantly create posters, decks, and emails with AI-powered design tools.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">Posters</span>
                                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">Slides</span>
                                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-bold rounded border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">Emails</span>
                                    </div>
                                </div>

                                {/* Feature 2: Smart Rollout */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-teal-500/40 group-hover:shadow-teal-500/60 transition-shadow">
                                        <CalendarCheck className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Smart Rollout</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
                                        Pre-built 4-week timeline. Launch faster with proven templates.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Week 1</span>
                                        <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Week 2</span>
                                        <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Week 3</span>
                                        <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded border border-teal-500/30 shadow-[0_0_10px_rgba(20,184,166,0.2)]">Week 4</span>
                                    </div>
                                </div>

                                {/* Feature 3: Co-Branded Hub */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/40 group-hover:shadow-orange-500/60 transition-shadow">
                                        <Palette className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Co-Branded Hub</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
                                        Your logo and tone applied automatically across all comms.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-[10px] font-bold rounded border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]">Branding</span>
                                        <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-[10px] font-bold rounded border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]">Tone</span>
                                        <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-[10px] font-bold rounded border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]">White Label</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};
