import React from 'react';
import { motion } from 'motion/react';

export const AnimatedHeading = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const lines = text.split('\n');
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} style={{ overflow: 'hidden', lineHeight: '1.1em', paddingBottom: '0.05em' }}>
          <motion.div
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + (i * 0.12)
            }}
            viewport={{ once: true }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export const AnimatedWordHeading = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const words = text.split(' ');
  return (
    <div className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, i) => (
        <div key={i} style={{ overflow: 'hidden', lineHeight: '1.1em', paddingBottom: '0.05em', marginRight: '0.3em' }}>
          <motion.div
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + (i * 0.06)
            }}
            viewport={{ once: true }}
          >
            {word}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
