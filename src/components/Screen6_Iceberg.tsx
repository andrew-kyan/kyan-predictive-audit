import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, TrendingUp, AlertTriangle, Layers, MessageSquare, Check, Loader2, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
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

export const Screen6_Iceberg: React.FC<Screen6Props> = ({ onNext }) => {
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [userData, setUserData] = useState({ name: '', email: '' });
    const isFormValid = userData.name.trim().length > 0 && userData.email.includes('@');

    const [currentFeature, setCurrentFeature] = useState(0);

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
                    <div className="mb-6">
                        {/* Kyan Health Logo */}
                        <img
                            src="/kyan-logo.png"
                            alt="Kyan Health"
                            className="h-8 mb-4 object-contain"
                        />
                        <div className="flex items-center space-x-2 mb-6">
                            {/* Removed text logo in favor of the image above */}
                        </div>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span>AI Context: High Growth / Tech</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-2">Organizational <br /> Health Audit</h1>
                    <p className="text-gray-500 text-lg">Analysis based on 250 employees in the Technology sector.</p>
                </div>

            </div>

            {/* Benchmark Cards */}
            <div className="w-full grid md:grid-cols-2 gap-6 mb-12">
                {/* Industry Benchmark */}
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Industry Benchmark</span>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-5xl font-bold text-gray-900">€1,200</span>
                        <span className="text-gray-500 font-medium text-xl">/ employee</span>
                    </div>
                </div>

                {/* Your Risk */}
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-red-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <AlertTriangle className="w-32 h-32 text-red-500" />
                    </div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-4">Your Risk Assessment</span>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-6xl font-bold text-red-500">€1,291</span>
                        <span className="text-red-400 font-medium text-xl">/ employee</span>
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

            {/* Recommendations / Kyan Engage Carousel */}
            <div className="w-full border-t border-gray-200 pt-16">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Kyan Engage</h2>
                    </div>
                    <span className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest border border-green-200">
                        Ready to Deploy
                    </span>
                </div>

                <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
                    We have automatically generated a <strong className="text-gray-900">Burnout Prevention Program</strong> tailored to your risk profile.
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

                {/* CTAs */}
                {/* Dynamic Footer / Gate */}
                <div className="w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 pt-8 pb-10 sticky bottom-0 z-40 -mx-4 md:-mx-8 px-4 md:px-8 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                    <AnimatePresence mode="wait">
                        {!isFormValid ? (
                            <motion.div
                                key="gate-form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full max-w-3xl mx-auto"
                            >
                                <div className="text-center mb-8">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">What's next?</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Get your detailed plan</h3>
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
                                                className="w-40 md:w-48 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none text-black placeholder:text-gray-300 transition-colors py-1 text-center md:text-left"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
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
                                                className="w-56 md:w-64 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none text-black placeholder:text-gray-300 transition-colors py-1 text-center md:text-left"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center bg-gray-100 w-12 h-12 rounded-full">
                                        <Lock className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="gate-actions"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex gap-4 md:flex-row flex-col w-full max-w-4xl mx-auto"
                            >
                                <button
                                    onClick={handleSendReport}
                                    disabled={emailStatus !== 'idle'}
                                    className={`flex-1 py-4 rounded-xl border font-bold text-lg transition-all flex items-center justify-center ${emailStatus === 'sent'
                                        ? 'bg-green-50 border-green-200 text-green-700'
                                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
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

        </div>
    );
};
