import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Lock, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-gradient-to-br from-[#020408] via-[#050D1A] to-[#020810]">
      {/* BACKGROUND TREATMENT */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Orbs */}
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"
        />
        <motion.div 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 3 }}
          className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]"
        />
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-[120px] md:pt-[160px] pb-12 md:pb-[80px] px-6 md:px-12 flex flex-col md:grid md:grid-cols-[55%_45%] items-center gap-12 md:gap-0">
        
        {/* LEFT COLUMN — TEXT CONTENT */}
        <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1 items-start w-full">
          {/* Top micro-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/30 text-[#93C5FD] text-[12px] font-medium tracking-widest">
              ✦ PREMIUM GADGETS · IKEJA, LAGOS
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-[clamp(48px,7vw,88px)] leading-[1.05] tracking-tighter text-white">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}>
              The Finest
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}>
              Gadgets in
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
            >
              Lagos.
            </motion.div>
          </h1>

          {/* Subheadline paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="font-sans text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-white/60 max-w-[480px]"
          >
            iPhones, Android phones, smartwatches, AirPods, Bluetooth speakers, and premium accessories — delivered with trust across Lagos.
          </motion.p>

          {/* CTA BUTTON GROUP */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-2 w-full md:w-auto">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              href="https://wa.me/2349150480142"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#22C55E] to-[#15803D] px-8 py-4 rounded-full text-[15px] font-bold text-white flex items-center justify-center gap-2 hover:shadow-[0_0_32px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.04] active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Shop on WhatsApp
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              href="#"
              className="border border-white/20 px-8 py-4 rounded-full text-[15px] font-semibold text-white/85 hover:bg-white/5 hover:text-white hover:border-white/60 transition-all flex justify-center"
            >
              Browse Products
            </motion.a>
          </div>

          {/* TRUST BADGES ROW */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 mt-4 md:mt-6"
          >
            <div className="flex items-center gap-1.5 text-white/45 text-[12px] font-medium">
              <Check className="w-4 h-4 text-blue-400" />
              100% Authentic Products
            </div>
            <div className="flex items-center gap-1.5 text-white/45 text-[12px] font-medium">
              <Zap className="w-4 h-4 text-blue-400" />
              Fast Lagos Delivery
            </div>
            <div className="flex items-center gap-1.5 text-white/45 text-[12px] font-medium">
              <Lock className="w-4 h-4 text-blue-400" />
              Secure WhatsApp Orders
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — PRODUCT VISUAL */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2 w-full max-w-[85vw] md:max-w-none">
          {/* Blue-purple radial glow behind product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/15 rounded-full blur-[80px] z-0"></div>
          
          <motion.div 
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 w-full max-w-[420px] aspect-[4/5] bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-8 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center shadow-2xl"
          >
            {/* Mockup Placeholder */}
            <div className="w-[160px] md:w-48 h-[320px] md:h-96 border-4 border-white/20 rounded-[2.5rem] md:rounded-[3rem] bg-black/40 relative overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 h-5 md:h-6 bg-black flex items-center justify-center rounded-full">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
              </div>
              <div className="text-blue-400/30 font-bold text-3xl md:text-4xl tracking-widest transform -rotate-90">MAYOR</div>
              
              {/* Elegant reflections inside mockup */}
              <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="absolute -left-[50%] top-[20%] w-[200%] h-12 bg-white/5 rotate-45 blur-md"></div>
            </div>
            
            <div className="absolute bottom-6 text-center">
              <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Featured: Premium Setup</p>
            </div>
          </motion.div>
        </div>
        
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, opacity: { duration: 1} }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white">Scroll to explore</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>

    </section>
  );
}
