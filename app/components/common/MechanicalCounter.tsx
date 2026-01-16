
"use client";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
interface CounterProps {
  keyIndex: number;
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

const MechanicalCounter: React.FC<CounterProps> = ({keyIndex, end, duration = 2, label, suffix = '' }) => {
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
    <motion.div variants={moveUp(keyIndex * 0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}} ref={counterRef} key={keyIndex}>
    <div className="group relative overflow-hidden bg-[#f0f0f0] p-3 xs:py-4 xl:py-6 hover:border-white-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-white-500/20" >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-baseline justify-center mb-2 xl:mb-4">
          <span className="text-xl xs:text-2xl lg:text-3xl xl:text-4xl">[</span>
          <span className="text-lg xs:text-xl lg:text-2xl xl:text-3xl font-bold text-primary tracking-tight">
            {formatNumber(count)}
          </span>
          <span className="text-xl xs:text-2xl lg:text-3xl xl:text-4xl">]</span>
          {suffix && (
            <span className="text-lg font-bold text-red-500 ml-1">
              {suffix}
            </span>
          )}
        </div>

        <div className="text-center">
          <div className="inline-block px-0 xl:px-4 py-1 xl:py-1.5">
            <p className="text-xs lg:text-sm font-normal xl:font-semibold  uppercase tracking-wider text-black xl:text-black/70">
              {label}
            </p>
          </div>
        </div>

        {/* Decorative corner accents */}
       
      </div>

      <style jsx>{`
        @keyframes flip {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(180deg); }
        }
      `}
      </style>
    </div>
    </motion.div>
  );
};

export default MechanicalCounter;