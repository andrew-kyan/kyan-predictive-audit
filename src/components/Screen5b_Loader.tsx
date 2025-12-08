import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface Screen5bProps {
    onComplete: () => void;
}

export const Screen5b_Loader: React.FC<Screen5bProps> = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 7000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFBF5] overflow-hidden">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.05) 25%, rgba(37, 99, 235, 0.05) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.05) 75%, rgba(37, 99, 235, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.05) 25%, rgba(37, 99, 235, 0.05) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.05) 75%, rgba(37, 99, 235, 0.05) 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Pulsing Hexagon Grid */}
            <div className="relative z-10">

                {/* Center Hexagon */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 relative"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.polygon
                            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-kyan-blue"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                strokeWidth: [1, 3, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                </motion.div>

                {/* Orbiting Hexagons */}
                {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * (Math.PI / 180);
                    const radius = 80;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/2 w-12 h-12"
                            style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                            }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <polygon
                                    points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-kyan-blue/40"
                                />
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Data Streams */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`stream-${i}`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 100, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.7,
                            ease: "linear"
                        }}
                        className="absolute left-1/2 w-0.5 h-20 bg-gradient-to-b from-transparent via-kyan-blue to-transparent"
                        style={{ marginLeft: (i - 1) * 40 }}
                    />
                ))}
            </div>

            {/* Text Feedback */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-32 relative z-20 text-center"
            >
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
                    <span className="inline-block">Processing Model</span>
                </h2>
                <div className="flex items-center justify-center space-x-2 text-kyan-blue font-mono text-xs tracking-[0.2em]">
                    {[...Array(3)].map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                            className="w-1 h-3 bg-kyan-blue"
                        />
                    ))}
                    <span>COMPUTING_INSIGHTS</span>
                    {[...Array(3)].map((_, i) => (
                        <motion.span
                            key={`right-${i}`}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                            className="w-1 h-3 bg-kyan-blue"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
