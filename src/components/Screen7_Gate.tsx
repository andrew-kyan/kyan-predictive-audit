import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Screen7Props {
    onRestart: () => void;
}

export const Screen7_Gate: React.FC<Screen7Props> = ({ onRestart: _onRestart }) => {
    const [selectedDate, setSelectedDate] = useState<number>(25);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const dates = [
        { day: 24, label: 'Oct' },
        { day: 25, label: 'Oct' },
        { day: 26, label: 'Oct' },
        { day: 27, label: 'Oct' },
    ];

    const morningSlots = ['09:00', '09:30', '10:00', '11:30'];
    const afternoonSlots = ['13:00', '14:30', '15:00', '16:45'];

    return (
        <div className="flex-grow w-full h-full flex flex-col md:flex-row bg-white relative z-10 overflow-hidden">

            {/* Left Panel - Dark Mode */}
            <div className="w-full md:w-5/12 bg-[#050505] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-800 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Report Unlocked</span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Let's fix this.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        Review your <span className="text-white font-medium">CHF 61 savings opportunity</span> with a Kyan Organizational Psychologist.
                    </p>
                </div>

                {/* Expert Profile */}
                <div className="relative z-10 mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center space-x-5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-white/20 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                                alt="Sarah Jenkins"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-black"></div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Sarah Jenkins</h3>
                        <p className="text-sm text-gray-400">Change Management Lead</p>
                    </div>
                </div>

                <div className="relative z-10 mt-auto pt-10 text-xs text-gray-600 font-medium tracking-wide uppercase">
                    No commitment required. 30 min strategy call.
                </div>
            </div>

            {/* Right Panel - Light Mode (Calendar) */}
            <div className="w-full md:w-7/12 bg-white p-8 md:p-12 overflow-y-auto">
                <div className="max-w-xl mx-auto">
                    <div className="flex justify-end space-x-6 text-sm font-bold text-gray-400 uppercase tracking-widest mb-16">
                        <span>Methodology</span>
                        <span>Case Studies</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Select a Time</h2>

                    {/* Date Picker */}
                    <div className="flex space-x-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                        {dates.map((d) => (
                            <button
                                key={d.day}
                                onClick={() => setSelectedDate(d.day)}
                                className={`flex flex-col items-center justify-center w-20 h-24 rounded-2xl border-2 transition-all shrink-0 ${selectedDate === d.day
                                    ? 'border-kyan-blue bg-blue-50/50 text-kyan-blue ring-2 ring-kyan-blue/20 ring-offset-2'
                                    : 'border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                                    }`}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">{d.label}</span>
                                <span className={`text-3xl font-bold ${selectedDate === d.day ? 'text-kyan-blue' : 'text-gray-800'}`}>
                                    {d.day}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-10 mb-24">
                        {/* Morning */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-4">Morning</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {morningSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-4 rounded-xl border transition-all font-semibold ${selectedTime === time
                                            ? 'bg-black text-white border-black shadow-lg scale-105'
                                            : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Afternoon */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-4">Afternoon</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {afternoonSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-4 rounded-xl border transition-all font-semibold ${selectedTime === time
                                            ? 'bg-black text-white border-black shadow-lg scale-105'
                                            : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Confirm Button (Sticky) */}
                    <div className={`fixed bottom-8 right-8 transition-all duration-500 transform ${selectedTime ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <button className="bg-kyan-blue text-white pl-8 pr-2 py-3 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-2xl flex items-center group">
                            Confirm Booking
                            <span className="ml-4 bg-white/20 p-2 rounded-full group-hover:bg-white text-white group-hover:text-black transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
