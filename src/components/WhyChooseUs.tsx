import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { ShieldCheck, Battery, Package, Settings, MessageCircle, Leaf, CheckCircle2, Lock } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

// Hook for counting up numbers
function useCountUp(target: number, duration: number, decimals: number = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(latest)
      });
    }
  }, [isInView, target, duration]);

  return { ref, value: count.toFixed(decimals) };
}

// --- DATA ---

const featureCards = [
  {
    id: 1,
    accent: "#60A5FA",
    gradient: "linear-gradient(145deg, #040C1E 0%, #061428 60%, #050E20 100%)",
    icon: Leaf,
    number: "01",
    title: "Direct from Canada. Always.",
    body: "We don't buy from middlemen, local markets, or third-party aggregators. Every single device is sourced directly from Canada — giving you access to inventory that has never been touched, used, or repaired on Nigerian soil. What you order is what arrives."
  },
  {
    id: 2,
    accent: "#4ADE80",
    gradient: "linear-gradient(145deg, #030F0A 0%, #051408 60%, #040D07 100%)",
    icon: CheckCircle2,
    number: "02",
    title: "Grade A Certified. Not Just Words.",
    body: "Grade A at Mayor Gadgets means something specific. Every device passes a comprehensive multi-point inspection covering battery health, screen integrity, hardware function, and software performance. We document it. We stand behind it. No hidden damage. No exceptions."
  },
  {
    id: 3,
    accent: "#A78BFA",
    gradient: "linear-gradient(145deg, #0A0618 0%, #0E0820 60%, #090516 100%)",
    icon: Lock,
    number: "03",
    title: "Transparency Is Our Policy.",
    body: "We tell you the battery percentage. We tell you the storage. We tell you the exact condition. No vague descriptions. No 'Lagos Grade A' ambiguity. You know exactly what you're buying before you send a single naira. That's the Mayor Gadgets standard."
  }
];

const detailCards = [
  {
    id: 1,
    accent: "#60A5FA",
    icon: Battery,
    title: "Battery Health Verified",
    body: "Every device arrives with a confirmed battery health percentage — typically 88% or above. We don't sell devices with degraded batteries and hide it. You'll know the exact health before you buy.",
    proof: "● Battery % disclosed on every listing"
  },
  {
    id: 2,
    accent: "#34D399",
    icon: Package,
    title: "Zero Local Stress",
    body: "Your device has never been used in Nigeria before you receive it. It has never been opened at a local repair shop, swapped for parts, or touched by a local technician. It comes to you exactly as it left Canada.",
    proof: "● Direct Canada import — no local handling"
  },
  {
    id: 3,
    accent: "#F472B6",
    icon: Settings,
    title: "Hardware Integrity Checked",
    body: "Every button, port, speaker, microphone, camera, and sensor is tested before shipping. We don't gloss over hardware faults — we reject devices that don't pass. Only the ones that pass every test make it into your order.",
    proof: "● Full hardware test on every device"
  },
  {
    id: 4,
    accent: "#FBBF24",
    icon: MessageCircle,
    title: "WhatsApp-First Service",
    body: "No complicated checkout. No waiting for email replies. Reach us directly on WhatsApp — ask about any device, get real answers, confirm availability, and place your order. Fast, personal, and accountable.",
    proof: "● Average response time under 5 minutes"
  }
];

const stats = [
  { id: 1, accent: "#60A5FA", number: 500, suffix: "+", label: "Devices Sold", decimals: 0 },
  { id: 2, accent: "#4ADE80", number: 100, suffix: "%", label: "Canada Sourced", decimals: 0 },
  { id: 3, accent: "#A78BFA", number: 48, suffix: "hr", label: "Avg. Delivery", decimals: 0 },
  { id: 4, accent: "#FBBF24", number: 4.9, suffix: "★", label: "Customer Rating", decimals: 1 }
];

// --- VARIANTS ---

const largeCardVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.12
    }
  })
};

const detailCardVariants = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -24 : 24 }),
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay: i * 0.10
    }
  })
};

// --- COMPONENTS ---

const FeatureCard: React.FC<{ card: typeof featureCards[0], index: number }> = ({ card, index }) => {
  const Icon = card.icon;
  // Create rgba colors from hex for accents
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <motion.div
      custom={index}
      variants={largeCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 56px rgba(0,0,0,0.55), 0 0 0 1px ${hexToRgba(card.accent, 0.25)}, 0 0 40px ${hexToRgba(card.accent, 0.10)}`,
        transition: { duration: 0.38, ease: "easeOut" }
      }}
      className="relative overflow-hidden rounded-[20px] md:rounded-[24px] p-[28px] md:p-[36px] flex flex-col gap-[20px] cursor-default h-full min-h-[240px] md:min-h-[280px]"
      style={{
        background: card.gradient,
        border: `1px solid ${hexToRgba(card.accent, 0.15)}`,
        boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        willChange: "transform"
      }}
    >
      {/* Decorative Corner Element */}
      <div 
        className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at top right, ${hexToRgba(card.accent, 0.12)} 0%, transparent 65%)`
        }}
      />

      {/* Card Number */}
      <div 
        className="absolute top-[28px] right-[28px] font-space text-[48px] font-extrabold pointer-events-none z-0 leading-none"
        style={{ color: hexToRgba(card.accent, 0.08) }}
      >
        {card.number}
      </div>

      <motion.div
        className="absolute top-0 w-[60%] h-full pointer-events-none z-20"
        style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            transform: 'skewX(-15deg)',
            left: '-100%'
        }}
        whileInView={{ left: '150%' }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.12 + 0.3 }}
        viewport={{ once: true }}
      />

      {/* Icon Container */}
      <div 
        className="w-[56px] h-[56px] rounded-[16px] flex flex-shrink-0 items-center justify-center relative z-10"
        style={{
          background: hexToRgba(card.accent, 0.12),
          border: `1px solid ${hexToRgba(card.accent, 0.25)}`,
          boxShadow: `0 4px 16px ${hexToRgba(card.accent, 0.20)}`
        }}
      >
        <Icon className="w-[28px] h-[28px]" color={card.accent} />
      </div>

      <h3 className="font-space text-[19px] md:text-[22px] font-bold text-white leading-[1.2] relative z-10">
        {card.title}
      </h3>

      <p className="font-sans text-[13px] md:text-[14px] font-normal text-white/50 leading-[1.75] relative z-10 mb-auto">
        {card.body}
      </p>

      {/* Bottom Accent Line */}
      <div 
        className="h-[3px] w-[48px] rounded-full mt-auto"
        style={{
          background: card.accent,
          boxShadow: `0 0 12px ${hexToRgba(card.accent, 0.6)}`
        }}
      />
    </motion.div>
  );
}

const DetailCard: React.FC<{ card: typeof detailCards[0], index: number }> = ({ card, index }) => {
  const Icon = card.icon;
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <motion.div
      custom={index}
      variants={detailCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.045)",
        borderColor: "rgba(255,255,255,0.12)",
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative overflow-hidden rounded-[20px] p-[22px] md:p-[28px] flex flex-row items-start gap-[20px] h-full"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        willChange: "transform"
      }}
    >
      <div 
        className="w-[48px] h-[48px] rounded-[14px] flex-shrink-0 flex items-center justify-center"
        style={{
          background: hexToRgba(card.accent, 0.10),
          border: `1px solid ${hexToRgba(card.accent, 0.22)}`
        }}
      >
        <Icon className="w-[22px] h-[22px]" color={card.accent} />
      </div>

      <div className="flex flex-col flex-1">
        <h4 className="font-space text-[15px] md:text-[17px] font-bold text-white leading-[1.3] mb-[8px]">
          {card.title}
        </h4>
        <p className="font-sans text-[13px] font-normal text-white/50 leading-[1.7]">
          {card.body}
        </p>
        <div className="mt-[10px] flex items-center gap-[5px] font-sans text-[11px] font-semibold" style={{ color: hexToRgba(card.accent, 0.75) }}>
          <div className="w-[5px] h-[5px] rounded-full" style={{ background: card.accent }} />
          {card.proof}
        </div>
      </div>
    </motion.div>
  );
}

const StatItem: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => {
  const { ref, value } = useCountUp(stat.number, 2, stat.decimals);
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <div ref={ref} className="flex flex-col items-center gap-[6px] text-center w-1/2 sm:w-auto">
      <div 
        className="w-[5px] h-[5px] rounded-full mb-[4px]"
        style={{
          background: stat.accent,
          boxShadow: `0 0 8px ${hexToRgba(stat.accent, 0.8)}`
        }}
      />
      <div className="font-space text-[32px] md:text-[40px] font-extrabold text-white leading-none">
        {value}{stat.suffix}
      </div>
      <div className="font-sans text-[12px] font-medium text-white/45 tracking-[0.04em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section 
      id="why-us"
      className="relative w-full overflow-hidden z-10"
      style={{
        background: "linear-gradient(180deg, #040C1C 0%, #050E22 25%, #060F24 60%, #050C1E 100%)",
        paddingTop: "clamp(72px, 10vw, 140px)",
        paddingBottom: "clamp(72px, 10vw, 140px)"
      }}
    >
      {/* Background Texture Layers */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "32px 32px"
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-[20px] md:px-[24px] lg:px-[48px] relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-center text-center mb-[44px] md:mb-[56px] lg:mb-[88px]">
          <motion.div 
            className="mb-[18px] inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full"
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.22)"
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ShieldCheck className="w-[12px] h-[12px] text-green-400" />
            <span className="font-sans text-[11px] font-semibold text-green-300 tracking-[0.08em]">
              Why Customers Trust Us
            </span>
          </motion.div>

          <h2 className="font-space font-extrabold text-[clamp(34px,4.8vw,62px)] leading-[1.08] tracking-tight text-white m-0">
            {[ "We Don't Just", "Sell Devices.", "We Deliver", "Peace of Mind."].map((line, idx) => (
              <div key={idx} style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.08em" }}>
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: idx * 0.11 }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                {line === "Peace of Mind." ? (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    {line}
                  </span>
                ) : line}
                </motion.div>
              </div>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[clamp(14px,1.6vw,17px)] leading-[1.8] text-white/50 max-w-[580px] mx-auto mt-[18px]"
          >
            In a market full of uncertainty, Mayor Gadgets stands on one promise — every device we sell was sourced directly from Canada, Grade A certified, and thoroughly inspected before it ever reaches you. No surprises. No excuses. Just transparency.
          </motion.p>
        </div>

        {/* PART A — LARGE FEATURE REASON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] lg:gap-[24px]">
          {featureCards.map((card, idx) => (
            <FeatureCard key={card.id} card={card} index={idx} />
          ))}
        </div>

        {/* PART B — SUPPORTING DETAIL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[20px] mt-[24px]">
          {detailCards.map((card, idx) => (
            <DetailCard key={card.id} card={card} index={idx} />
          ))}
        </div>

        {/* PART C — TRUST STATISTICS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-[32px] rounded-[20px] p-[28px_20px] lg:p-[36px_48px] flex flex-wrap justify-center sm:justify-around items-center gap-[32px] lg:gap-[24px]"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={stat.id} className="flex items-center w-[40%] sm:w-auto justify-center">
              <StatItem stat={stat} />
              {idx < stats.length - 1 && (
                <div className="hidden lg:block w-[1px] h-[40px] ml-[24px] lg:ml-[40px] mr-[-24px] lg:mr-[-16px]" style={{ background: "rgba(255,255,255,0.07)" }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* BOTTOM CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col items-center gap-[20px] mt-[48px] lg:mt-[72px]"
        >
          <h3 className="font-space font-extrabold text-[clamp(24px,3.5vw,40px)] text-white text-center leading-tight m-0">
            Ready to order with confidence?
          </h3>
          <p className="font-sans text-[15px] font-normal text-white/45 text-center max-w-[440px] leading-relaxed">
            Join hundreds of customers across Lagos who trust Mayor Gadgets for their Canada-sourced devices.
          </p>

          <motion.a
            href="https://wa.me/2349150480142?text=Hi%20Mayor%20Gadgets%2C%20I%27d%20like%20to%20place%20an%20order.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(34,197,94,0.55)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-[10px] px-[40px] py-[18px] rounded-full font-sans text-[16px] font-bold text-white mt-2"
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
              boxShadow: "0 4px 24px rgba(34,197,94,0.3)",
              willChange: "transform"
            }}
          >
            <WhatsAppIcon className="w-[18px] h-[18px] text-white" />
            Start Your Order on WhatsApp
          </motion.a>

          <p className="font-sans text-[12px] font-normal text-white/30 text-center mt-2">
            🍁 Canada sourced · ✓ Grade A certified · 🔒 Transparent process
          </p>
        </motion.div>

      </div>

      {/* SECTION BOTTOM DIVIDER */}
      <div 
        className="w-full h-[1px] mt-[68px] lg:mt-[110px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(34,197,94,0.18) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)"
        }}
      />
    </section>
  );
}
