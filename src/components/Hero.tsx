import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import heroImg from "../assets/images/hero_iphone_15_pro_max_1779201332954.png";
import { CheckCircle2, ShieldCheck, BatteryCharging, Leaf } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

const orbVariantA = {
  animate: {
    opacity: [0.5, 1.0, 0.5],
    transition: { duration: 7, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const }
  }
};

const orbVariantB = {
  animate: {
    opacity: [0.5, 1.0, 0.5],
    transition: { duration: 7, delay: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const }
  }
};

const floatImageVariant = {
  animate: {
    y: [-14, 14, -14],
    transition: { duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const }
  }
};

const floatCardAVariant = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1, x: 0, y: [-6, 6, -6],
    transition: { 
      opacity: { duration: 0.6, delay: 1.4 },
      x: { duration: 0.6, delay: 1.4, type: "spring" },
      y: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const, delay: 2 }
    }
  }
};

const floatCardBVariant = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1, x: 0, y: [8, -8, 8],
    transition: { 
      opacity: { duration: 0.6, delay: 1.6 },
      x: { duration: 0.6, delay: 1.6, type: "spring" },
      y: { duration: 5.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const, delay: 2.2 }
    }
  }
};

const badgeItemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  const disableParallax = shouldReduceMotion || isMobile;
  const orbY = useTransform(scrollY, [0, 500], [0, disableParallax ? 0 : 60]);
  const imageY = useTransform(scrollY, [0, 500], [0, disableParallax ? 0 : -30]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      
      {/* Layer 1: Base gradient */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ background: "linear-gradient(145deg, #020508 0%, #040C1A 40%, #050E20 70%, #030810 100%)" }}
      />
      
      {/* Layer 2: Atmospheric glow orbs */}
      <motion.div
        variants={orbVariantA}
        animate="animate"
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full z-[1] pointer-events-none filter blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)", y: orbY }}
      />
      <motion.div
        variants={orbVariantB}
        animate="animate"
        className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full z-[1] pointer-events-none filter blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)", y: orbY }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full z-[1] pointer-events-none opacity-60 filter blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 70%)" }}
      />

      {/* Layer 3: Blueprint grid texture */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }} 
      />

      {/* Layer 4 & 5: Content and Product Image */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-[48px] pt-[110px] md:pt-[160px] pb-[60px] md:pb-[100px] grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[54%_46%] gap-12 md:gap-8 items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start w-full">
          
          {/* Top Origin Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 backdrop-blur-[8px] mb-6 md:mb-8"
          >
            <span className="text-[16px] leading-none">🍁</span>
            <span className="font-sans text-[12px] font-semibold text-white/75 tracking-[0.06em]">
              Sourced Directly from Canada
            </span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDuration: "1.5s" }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-space font-extrabold text-[clamp(44px,6.5vw,84px)] leading-[1.06] tracking-tight text-white mb-6 w-full">
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
                Grade A Devices.
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ delay: 0.49, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
                Straight from
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
              <motion.div initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ delay: 0.63, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 relative" style={{ filter: "drop-shadow(0 0 20px rgba(96,165,250,0.25))" }}>
                  Canada.
                </span>
              </motion.div>
            </div>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.65, ease: "easeOut" }}
            className="font-sans text-[clamp(14px,1.7vw,17px)] leading-[1.75] text-white/55 max-w-[500px]"
          >
            We import certified pre-owned smartphones and electronics directly from Canada — Grade A only. Every device is multi-point inspected for battery health, hardware integrity, and software performance. Zero local usage. Zero local repairs. Just premium devices delivered to your door in Lagos.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-[14px] mt-9 w-full sm:w-auto">
            <motion.a
              href="https://wa.me/2349150480142"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(34,197,94,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-[32px] py-[16px] rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-sans font-bold text-[15px] cursor-pointer"
            >
              <WhatsAppIcon className="w-[16px] h-[16px] text-white" />
              Shop Certified Devices
            </motion.a>

            <motion.a
              href="#products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ borderColor: "rgba(255,255,255,0.5)", backgroundColor: "rgba(255,255,255,0.05)", color: "#FFFFFF" }}
              className="flex items-center justify-center px-[30px] py-[16px] rounded-full border-[1.5px] border-white/18 text-white/80 bg-transparent font-sans font-semibold text-[15px] transition-colors duration-200 cursor-pointer"
            >
              See All Products →
            </motion.a>
          </div>

          {/* Certification Trust Strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 1.3 }
              }
            }}
            className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6 mt-11 w-full"
          >
            {[
              { icon: CheckCircle2, iconColor: "text-green-500", title: "Grade A Certified", sub: "Multi-point inspected", pl: "" },
              { icon: Leaf, iconColor: "text-red-500", title: "Canada Direct", sub: "Zero local usage", pl: "lg:border-l-[2px] lg:border-blue-400/30 lg:pl-3" },
              { icon: BatteryCharging, iconColor: "text-blue-400", title: "Battery Verified", sub: "Health checked before shipping", pl: "lg:border-l-[2px] lg:border-blue-400/30 lg:pl-3" },
              { icon: ShieldCheck, iconColor: "text-indigo-400", title: "Trusted & Transparent", sub: "No hidden damage, no repairs", pl: "lg:border-l-[2px] lg:border-blue-400/30 lg:pl-3" },
            ].map((badge, idx) => (
              <motion.div key={idx} variants={badgeItemVariant} className={`flex flex-col lg:items-start items-center text-center lg:text-left gap-[6px] ${badge.pl}`}>
                <badge.icon className={`w-5 h-5 ${badge.iconColor}`} />
                <div className="flex flex-col">
                  <span className="font-sans text-[12px] font-bold text-white">{badge.title}</span>
                  <span className="font-sans text-[11px] font-normal text-white/40 leading-snug">{badge.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Right Column - Product Image */}
        <div className="relative flex justify-center items-center w-full mt-12 md:mt-0 max-w-[80vw] md:max-w-none mx-auto lg:mx-0 lg:h-[540px]">
          
          {/* Radial Glow behind Image */}
          <motion.div
            className="absolute z-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full pointer-events-none filter blur-[60px]"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)" }}
            animate={{ opacity: [0.6, 1.0, 0.6] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const }}
          />
          
          {/* Main Floating Image */}
          <motion.img
            src={heroImg}
            alt="Certified Premium Smartphone"
            className="relative z-10 w-full max-h-[280px] md:max-h-[320px] lg:max-h-[540px] object-contain drop-shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
            variants={floatImageVariant}
            animate="animate"
            style={{ willChange: "transform", y: imageY }}
          />

          {/* Floating Card 1: Canada Origin (Desktop Only) */}
          <motion.div
            variants={floatCardAVariant}
            initial="initial"
            animate="animate"
            className="hidden lg:flex flex-col items-center justify-center absolute top-[12%] left-[-5%] z-20 bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-[14px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-bold text-white mb-0.5">
              <span>🍁</span> Canada
            </div>
            <div className="text-[11px] font-sans text-white/50">Direct Import</div>
          </motion.div>

          {/* Floating Card 2: Inspection Badge (Desktop Only) */}
          <motion.div
            variants={floatCardBVariant}
            initial="initial"
            animate="animate"
            className="hidden lg:flex items-center gap-2.5 absolute bottom-[14%] right-[-4%] z-20 bg-white/5 backdrop-blur-[16px] border border-white/10 rounded-[14px] px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-green-500/15 border-[1.5px] border-green-500/40 shrink-0">
              <span className="text-green-500 text-[14px] font-bold">✓</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[11px] font-bold text-white whitespace-nowrap">Multi-Point Inspected</span>
              <span className="font-sans text-[10px] font-normal text-white/45 whitespace-nowrap mt-0.5">Battery · Hardware · Software</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[10px] font-semibold text-white/25 uppercase tracking-[0.15em]">Explore</span>
        <div className="relative w-[2px] h-[40px] bg-gradient-to-b from-blue-400/50 to-transparent rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[6px] bg-blue-400 rounded-full"
            animate={{ y: [0, 40], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
          />
        </div>
      </motion.div>

    </section>
  );
}
