import React from 'react';

interface KyanLogoProps {
    className?: string;
    // Color prop is kept for compatibility but ignored for the PNG image
    color?: string;
}

export const KyanLogo: React.FC<KyanLogoProps> = ({ className = "h-8" }) => {
    return (
        <img
            src="/kyan-logo.png"
            alt="Kyan Health"
            className={`${className} object-contain`}
        />
    );
};
