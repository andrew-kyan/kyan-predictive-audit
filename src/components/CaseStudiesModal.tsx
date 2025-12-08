
import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CaseStudiesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
                        <span className="text-kyan-blue font-bold tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proven Impact</h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            See how leading companies used Kyan's Predictive Audit to identify risks and turnaround workforce health.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Case Study 1 */}
                        <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="bg-black text-white px-4 py-2 font-bold inline-block rounded mb-4">TechCorp Inc.</div>
                                    <div className="text-5xl font-bold text-green-500 mb-2">-32%</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Reduction in Burnout Risk</div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Turning Growth Pain into Performance</h3>
                                    <p className="text-gray-500 mb-6 leading-relaxed">
                                        Following a Series C raise, TechCorp saw a spike in "cynicism" flags in our audit. By deploying a targeted Kyan Engage 'Manager Support' campaign, they stabilized sentiment within 3 months.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-kyan-blue font-bold hover:underline">
                                        Read full case study <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="bg-blue-600 text-white px-4 py-2 font-bold inline-block rounded mb-4">Global Retail Grp</div>
                                    <div className="text-5xl font-bold text-green-500 mb-2">4.5x</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">ROI on Wellbeing Spend</div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cutting Hidden Costs of Absenteeism</h3>
                                    <p className="text-gray-500 mb-6 leading-relaxed">
                                        Our audit revealed a high "Hidden Cost" multiplier due to presenteeism in retail staff. Kyan's automated 'Energy Management' micro-learnings reduced sick leave days by 15%.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-kyan-blue font-bold hover:underline">
                                        Read full case study <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
