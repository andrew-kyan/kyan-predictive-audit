import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Screen2Props {
    onComplete: () => void;
}

export const Screen2_Loader: React.FC<Screen2Props> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3500); // 3.5s duration for the "magic"

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 w-full h-full relative overflow-hidden bg-white">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Abstract Core */}
                <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
                    {/* Ring 1 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-blue-200 border-t-blue-500 w-32 h-32"
                    />
                    {/* Ring 2 (Counter) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border border-purple-100 border-b-purple-400 w-28 h-28"
                    />
                    {/* Ring 3 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 rounded-full border border-cyan-100 border-l-cyan-400 w-24 h-24"
                    />

                    {/* Core Pulse */}
                    <motion.div
                        animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-lg blur-sm"
                    />
                    <div className="absolute w-12 h-12 bg-white rounded-full opacity-20 animate-pulse" />
                </div>

                {/* Text Container */}
                <div className="h-12 flex flex-col items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Synthesizing Organizational DNA</h2>
                        <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">Mapping Patterns</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
