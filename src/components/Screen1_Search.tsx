import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

interface Screen1Props {
    onAnalyze: (domain: string) => void;
}

export const Screen1_Search: React.FC<Screen1Props> = ({ onAnalyze }) => {
    const [domain, setDomain] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (domain.trim()) {
            onAnalyze(domain.trim());
        }
    };

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center relative z-10 w-full max-w-4xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold tracking-widest uppercase text-kyan-blue">
                        <span className="w-2 h-2 bg-kyan-blue rounded-full mr-2"></span>
                        New Predictive Model 2.0
                    </span>
                </div>

                <h1 className="text-7xl md:text-8xl font-bold mb-6 text-gray-900 tracking-tighter leading-[0.9]">
                    The Cost of <br />
                    <span className="text-kyan-blue">Invisible Risk</span>
                </h1>

                <p className="text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Traditional audits only catch absenteeism. We use predictive scraping and internal signaling to calculate the <strong className="text-gray-900">True Cost</strong> of mental wellbeing.
                </p>

                <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <Globe className="h-6 w-6 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="Enter company domain (e.g. on.com)"
                        className="w-full pl-16 pr-40 py-6 rounded-full border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all text-xl placeholder:text-gray-300 focus:ring-4 focus:ring-kyan-blue/10 focus:border-gray-300 outline-none"
                        autoFocus
                    />
                    <div className="absolute inset-y-2 right-2 flex items-center">
                        <button
                            type="submit"
                            disabled={!domain.trim()}
                            className="h-full px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </form>

                <div className="mt-16 flex items-center justify-center gap-12 max-w-3xl mx-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="/partner-on.png" alt="On Running" className="h-10 w-auto object-contain" />
                    <img src="/partner-hitachi.png" alt="Hitachi" className="h-8 w-auto object-contain" />
                    <img src="/partner-achs.jpg" alt="ACHS" className="h-12 w-auto object-contain" />
                </div>
                <p className="text-center text-xs text-gray-300 mt-4 font-medium uppercase tracking-widest">Trusted by leading HR teams</p>

            </motion.div>
        </div>
    );
};
