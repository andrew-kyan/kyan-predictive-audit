import React from 'react';


import { KyanLogo } from './KyanLogo';

interface LayoutProps {
    children: React.ReactNode;
    onOpenMethodology?: () => void;
    onOpenCaseStudies?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenMethodology, onOpenCaseStudies }) => {
    return (
        <div className="min-h-screen relative flex flex-col p-8 overflow-hidden bg-[#FFFBF5]">
            {/* Top Navigation */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-50 relative mb-8">
                <div className="flex items-center space-x-2">
                    <KyanLogo className="h-10 w-auto text-black" color="black" />
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={onOpenMethodology} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all uppercase tracking-wider bg-white">
                        Methodology
                    </button>
                    <button onClick={onOpenCaseStudies} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all uppercase tracking-wider bg-white">
                        Case Studies
                    </button>
                </div>
            </div>

            {/* Main Content Area - Full Width/Height flexibility */}
            <main className="flex-grow flex flex-col relative w-full max-w-7xl mx-auto z-10">
                {children}
            </main>
        </div>
    );
};
