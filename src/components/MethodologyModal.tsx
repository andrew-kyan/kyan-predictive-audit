
import React from 'react';
import { X, TrendingUp, ShieldCheck, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MethodologyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10"
            >
                <div className="p-8 md:p-12">
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-400" />
                    </button>

                    <div className="mb-12">
                        <span className="text-kyan-blue font-bold tracking-widest uppercase text-sm mb-4 block">Our Approach</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Predictive Audit Methodology</h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            How we reconstruct your organizational health using only public data signals and advanced AI heuristics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Database className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Data Ingestion</h3>
                            <p className="text-gray-500">
                                We aggregate thousands of public data points including LinkedIn growth patterns, Glassdoor sentiment text, and press mentions to build a "digital twin" of your workforce.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Brain className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Sentiment Decoding</h3>
                            <p className="text-gray-500">
                                Our LLMs analyze language patterns in employee reviews to detect hidden signals of burnout, such as "cynicism", "exhaustion", and "inefficacy" (Maslach Burnout Inventory).
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Risk Projection</h3>
                            <p className="text-gray-500">
                                We correlate your internal signals against industry benchmarks to project the financial risk of "Hidden Costs" like presenteeism and attrition probability.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Strategy Generation</h3>
                            <p className="text-gray-500">
                                Finally, we generate a tailored Kyan Engage rollout plan designed to target the specific friction points identified in your audit throughout.
                            </p>
                        </div>
                    </div>

                    <div className="bg-kyan-blue/5 border border-kyan-blue/10 p-8 rounded-3xl text-center">
                        <p className="text-kyan-blue font-medium">
                            "The most accurate outside-in view of organizational health available today."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
