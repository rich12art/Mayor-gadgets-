import React from 'react';
import { motion } from 'motion/react';

export const ShimmerCard = ({ children, className = "", delay = 0.3 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {children}
            <motion.div
                className="absolute top-0 w-[60%] h-full pointer-events-none z-20"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                    transform: 'skewX(-15deg)',
                    left: '-100%'
                }}
                whileInView={{ left: '150%' }}
                transition={{ duration: 0.8, ease: "easeInOut", delay }}
                viewport={{ once: true }}
            />
        </div>
    );
};
