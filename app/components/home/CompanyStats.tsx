"use client";
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

const MechanicalCounter: React.FC<CounterProps> = ({ end, duration = 2, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);

      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    return num.toString().split('').map((digit, index) => (
      <span
        key={index}
        className="inline-block tabular-nums transition-all duration-150"
        style={{
          animation: isVisible ? `flip 0.6s ease-out ${index * 0.1}s` : 'none'
        }}
      >
        {digit}
      </span>
    ));
  };

  return (
    <div
      ref={counterRef}
      className="group relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="relative z-10">
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            {formatNumber(count)}
          </span>
          {suffix && (
            <span className="text-4xl md:text-5xl font-bold text-red-500 ml-1">
              {suffix}
            </span>
          )}
        </div>

        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">
              {label}
            </p>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500/30 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500/30 rounded-br-lg" />
      </div>

      <style jsx>{`
        @keyframes flip {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(180deg); }
        }
      `}</style>
    </div>
  );
};

const CompanyStats: React.FC = () => {
  const stats = [
    { end: 1976, label: 'Establishment Year', suffix: '' },
    { end: 48, label: 'Years of Dedication', suffix: '' },
    { end: 11000, label: 'Workforce', suffix: '' },
    { end: 11, label: 'Billions AED Current Projects', suffix: 'B' },
    { end: 341, label: 'Projects Completed', suffix: '' },
    { end: 21, label: 'On-Going Projects', suffix: '' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                UNEC
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A multi-award winning general contracting company with more than 40 years of expertise in the region
          </p>

          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our vast experience, forward-thinking innovations and commitment to the highest standards in
            professionalism, safety and efficiency have made us a trusted collaborator to the developers
            of some of the area's most iconic buildings and landmarks.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <MechanicalCounter
              key={index}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
              duration={2.5}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105">
          <span className="relative z-10">Corporate Profile</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>
      </div>
    </div>
  );
};

export default CompanyStats;