import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, CheckCircle2 } from 'lucide-react';

interface Screen3Props {
  onConfirm: () => void;
  data: any;
}

export const Screen3_Confirmation: React.FC<Screen3Props> = ({ onConfirm, data }) => {
  const [salary, setSalary] = useState('');

  if (!data) return null;

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 w-full max-w-6xl mx-auto z-10">
      <div className="w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Text & Action */}
        <div className="text-left space-y-8">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-50/80 backdrop-blur border border-green-100 text-green-700 text-xs font-bold tracking-widest uppercase">
            ANALYSIS COMPLETE
          </span>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            We found your <br /> profile.
          </h1>
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            We've successfully enriched your company data. To ensure an accurate ROI forecast, we need you to confirm the scraped data and provide one missing financial metric.
          </p>

          <div className="pt-4">
            <button
              onClick={onConfirm}
              disabled={!salary} // Requirement: "Input Required"
              className="bg-black/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] flex items-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm & Continue
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {!salary && (
              <p className="text-red-400 text-xs mt-3 font-medium ml-1 flex items-center">
                * Please enter Average Salary to proceed.
              </p>
            )}
          </div>
        </div>

        {/* Right: Verified Data Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-2 text-green-600 font-bold text-sm tracking-widest uppercase">
              <CheckCircle2 className="w-5 h-5" />
              <span>Verified Public Data</span>
            </div>
            <span className="text-gray-300 text-xs font-medium uppercase tracking-widest">Read-only</span>
          </div>

          <div className="flex items-center space-x-6 mb-10">
            {data.logo ? (
              <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-center">
                <img src={data.logo} alt={data.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-24 h-24 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                <span className="text-gray-300 font-bold text-xl uppercase">Logo</span>
              </div>
            )}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">{data.name}</h2>
              <span className="text-gray-400 font-medium text-lg">Global</span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <span className="text-gray-400 font-medium">Industry</span>
              <span className="text-gray-900 font-bold text-lg">{data.industry}</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <span className="text-gray-400 font-medium">Headcount</span>
              <span className="text-gray-900 font-bold text-lg">{data.headcount.toLocaleString()} FTE</span>
            </div>
          </div>

          <div className="pl-5 border-l-4 border-blue-500">
            <div className="flex items-center space-x-2 mb-3">
              <Pencil className="w-4 h-4 text-blue-500" />
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Input Required</span>
            </div>
            <label className="block text-gray-900 font-bold text-lg mb-3">Average Annual Salary (CHF)</label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl">₣</span>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="e.g. 110000"
                className="w-full pl-12 pr-6 py-5 bg-blue-50/30 border border-blue-100 rounded-2xl text-xl font-bold text-gray-900 placeholder:text-gray-300 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>
            <p className="text-gray-400 text-xs mt-3">Required to calculate your specific financial loss.</p>
          </div>

        </motion.div>

      </div>
    </div>
  );
};
