import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Screen2Props {
    onComplete: () => void;
}

export const Screen2_Loader: React.FC<Screen2Props> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFBF5] overflow-hidden">

            {/* Background energy field */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-kyan-blue/30 via-transparent to-transparent animate-pulse" />
            </div>

            {/* Central Singularity */}
            <div className="relative z-10">

                {/* Core */}
                <motion.div
                    animate={{ scale: [1, 1.5, 0.5, 30], opacity: [1, 1, 1, 0] }}
                    transition={{ duration: 5, times: [0, 0.6, 0.9, 1], ease: "easeInOut" }}
                    className="w-4 h-4 bg-kyan-blue rounded-full shadow-[0_0_100px_60px_rgba(37,99,235,0.4)] relative z-20"
                />

                {/* Shockwaves */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0, borderWidth: '2px' }}
                        animate={{ scale: 20, opacity: [0.8, 0], borderWidth: '0px' }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-kyan-blue shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    />
                ))}

                {/* Orbiting Particles */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-t-2 border-r-2 border-kyan-blue/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-b-2 border-l-2 border-gray-900/10 rounded-full"
                />

            </div>

            {/* Text Feedback */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-32 relative z-20 text-center"
            >
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
                    <span className="inline-block animate-pulse">Building Company Profile</span>
                </h2>
                <div className="flex items-center justify-center space-x-2 text-kyan-blue font-mono text-xs tracking-[0.2em]">
                    <span className="w-1 h-3 bg-kyan-blue animate-[pulse_0.2s_ease-in-out_infinite]" />
                    <span>ANALYZING_DATA</span>
                    <span className="w-1 h-3 bg-kyan-blue animate-[pulse_0.3s_ease-in-out_infinite]" />
                </div>
            </motion.div>
        </div>
    );
};
