'use client';

import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = 'large',
  children,
}: HeroSectionProps) {
  const heightClass = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-screen',
  }[height];

  return (
    <div
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-hw-charcoal`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay for dark effect */}
      {backgroundImage && <div className="absolute inset-0 bg-black/30" />}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in">
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Scroll indicator */}
      {height === 'large' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
