import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';

interface Screen4Props {
  onNext: () => void;
}

export const Screen4_Vent: React.FC<Screen4Props> = ({ onNext }) => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsAnalyzing(false);
      return;
    }

    setIsAnalyzing(true);
    const timer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto z-10 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full relative"
      >
        <div className="mb-12">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Brain className="w-10 h-10 text-kyan-blue" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            What is your biggest <br /> people challenge?
          </h1>
          <p className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed">
            We analyze your language to map risk categories.
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className={`absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-blue-50 opacity-50 blur-xl transition-all duration-1000 ${isAnalyzing ? 'opacity-80 scale-105' : ''}`} />

          <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-blue-100/50 ring-4 ring-white/50">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. 'We are seeing high turnover in our sales team and I suspect it is due to burnout...'"
              className="w-full h-80 p-12 text-2xl md:text-3xl font-medium text-gray-800 placeholder:text-gray-300 border-none outline-none resize-none leading-relaxed"
              autoFocus
            />

            <div className="absolute bottom-8 right-8 flex items-center space-x-4">
              <AnimatePresence>
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-sm font-bold text-kyan-blue uppercase tracking-widest flex items-center bg-blue-50 px-4 py-2 rounded-full"
                  >
                    <div className="w-2 h-2 bg-kyan-blue rounded-full mr-2 animate-bounce" />
                    AI Analyzing...
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={onNext}
                disabled={text.length < 10}
                className="w-16 h-16 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-200 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
