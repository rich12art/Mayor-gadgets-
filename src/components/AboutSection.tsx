import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, MapPin, Search, Leaf, CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return isMobile;
}

const leftVariants = {
  hidden: (isMobile: boolean) => ({ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 30 : 0 }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

const rightVariants = {
  hidden: (isMobile: boolean) => ({ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 30 : 0, scale: isMobile ? 1 : 0.97 }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

const BrandIdentityCard: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <motion.div
      custom={0}
      variants={rightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative rounded-[28px] overflow-hidden p-[28px] md:p-[40px] flex flex-col items-center"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(5,15,35,0.6) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        willChange: "transform",
      }}
    >
      <div 
        className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top right, rgba(59,130,246,0.10) 0%, transparent 70%)"
        }}
      />
      <motion.div
        className="absolute top-0 w-[60%] h-[100%] pointer-events-none z-[5]"
        style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            transform: 'skewX(-15deg)',
            left: '-100%'
        }}
        whileInView={{ left: '150%' }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
      />
      
      <div className="flex flex-col items-center w-full relative z-10">
        <div className="flex items-center gap-[6px]">
          <span className="font-space font-extrabold text-[28px] text-white leading-none tracking-tight">Mayor</span>
          <span className="font-space font-extrabold text-[28px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 leading-none tracking-tight">Gadgets</span>
        </div>
        <div className="font-sans text-[12px] font-medium text-white/40 tracking-[0.08em] mt-[6px]">
          🍁 Canada · Nigeria
        </div>
        <div 
          className="w-[80px] h-[1px] m-[16px_auto]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)" }}
        />
      </div>

      <div className="flex items-center justify-center gap-[12px] md:gap-[16px] py-[24px] w-full relative z-10">
        <div 
          className="flex flex-col items-center justify-center rounded-[14px] p-[10px_14px] md:p-[12px_16px] shrink-0"
          style={{
            background: "rgba(239,68,68,0.10)",
            border: "1px solid rgba(239,68,68,0.25)"
          }}
        >
          <span className="text-[20px] leading-none mb-[4px]">🍁</span>
          <span className="font-sans text-[11px] font-extrabold text-white/80 tracking-[0.1em]">CANADA</span>
          <span className="font-sans text-[10px] font-normal text-white/35">Source</span>
        </div>

        <div className="relative w-[60px] md:w-[80px] h-[8px] flex items-center justify-center shrink-0">
          <span className="absolute top-[-18px] left-1/2 -translate-x-1/2 font-sans text-[9px] font-semibold text-white/30 tracking-[0.06em] whitespace-nowrap">
            Direct Import
          </span>
          <div 
            className="w-full h-[1px]"
            style={{ background: "linear-gradient(90deg, rgba(239,68,68,0.4), rgba(96,165,250,0.4))" }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-[6px] h-[6px] rounded-full bg-white z-10 -translate-y-1/2"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            style={{ willChange: "left" }}
          />
        </div>

        <div 
          className="flex flex-col items-center justify-center rounded-[14px] p-[10px_14px] md:p-[12px_16px] shrink-0"
          style={{
            background: "rgba(59,130,246,0.10)",
            border: "1px solid rgba(59,130,246,0.25)"
          }}
        >
          <span className="text-[20px] leading-none mb-[4px]">🇳🇬</span>
          <span className="font-sans text-[11px] font-extrabold text-white/80 tracking-[0.1em]">NIGERIA</span>
          <span className="font-sans text-[10px] font-normal text-white/35">Delivery</span>
        </div>
      </div>

      <div className="w-full mt-[14px] relative z-10">
        <div className="font-sans text-[10px] font-semibold text-white/25 tracking-[0.10em] uppercase text-center mb-[14px]">
          How it works
        </div>
        <div className="flex justify-between items-start gap-[6px] md:gap-[8px]">
          {[
            { num: "1", text: "Sourced in Canada" },
            { num: "2", text: "Inspected & Certified" },
            { num: "3", text: "Delivered to Lagos" }
          ].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-[6px] flex-1">
                <div 
                  className="w-[24px] h-[24px] rounded-full flex items-center justify-center font-sans text-[11px] font-bold text-blue-400 shrink-0"
                  style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)" }}
                >
                  {step.num}
                </div>
                <div className="font-sans text-[10px] font-medium text-white/45 text-center leading-[1.4]">
                  {step.text}
                </div>
              </div>
              {idx < 2 && (
                <div className="font-sans text-[12px] text-white/15 pt-[4px] shrink-0">
                  {'>'}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const InspectionChecklist: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const items = [
    { label: "Battery Health", stat: "90%+ Required" },
    { label: "Screen Integrity", stat: "Passed" },
    { label: "Camera Function", stat: "Passed" },
    { label: "All Ports & Buttons", stat: "Passed" },
    { label: "Software Performance", stat: "Passed" },
    { label: "No Internal Repairs", stat: "Verified" },
    { label: "Factory Reset & Unlocked", stat: "Confirmed" }
  ];

  return (
    <motion.div
      custom={1}
      variants={rightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mt-[20px] rounded-[20px] p-[20px] md:p-[24px]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        willChange: "transform"
      }}
    >
      <div className="flex justify-between items-center w-full">
        <h3 className="font-space text-[15px] font-bold text-white leading-none">
          Multi-Point Inspection
        </h3>
        <div 
          className="rounded-full px-[12px] py-[4px] font-sans text-[11px] font-bold text-green-400 tracking-wide leading-none"
          style={{
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.3)"
          }}
        >
          Grade A ✓
        </div>
      </div>

      <div className="flex flex-col gap-[10px] mt-[18px]">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-[12px]">
            <div 
              className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              <Check className="w-[11px] h-[11px] text-green-400" strokeWidth={3} />
            </div>
            <span className="font-sans text-[13px] font-medium text-white/75 truncate">
              {item.label}
            </span>
            <span className="font-sans text-[10px] font-semibold text-green-400/70 ml-auto shrink-0 uppercase tracking-wide">
              {item.stat}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] mt-[16px]" style={{ background: "rgba(255,255,255,0.06)" }} />
      <p className="font-sans text-[11px] text-white/30 text-center mt-[14px]">
        🍁 Every Mayor Gadgets device passes all 7 checks before shipping.
      </p>
    </motion.div>
  );
};

const LocationCard: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <motion.div
      custom={2}
      variants={rightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mt-[16px] rounded-[16px] p-[18px_22px] flex items-center gap-[16px]"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        willChange: "transform"
      }}
    >
      <div 
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0"
        style={{
          background: "rgba(239,68,68,0.10)",
          border: "1px solid rgba(239,68,68,0.22)"
        }}
      >
        <MapPin className="w-[18px] h-[18px] text-red-400" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <h4 className="font-space text-[14px] font-bold text-white leading-[1.2]">
          Find Us in Ikeja, Lagos
        </h4>
        <p className="font-sans text-[12px] font-normal text-white/40 leading-[1.4] mb-[2px]">
          Serving customers across Lagos & Nigeria
        </p>
        <a 
          href={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'd like to know your exact location in Ikeja, Lagos.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[12px] font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors w-max"
        >
          WhatsApp us for directions →
        </a>
      </div>
    </motion.div>
  );
};

const FoundingPrinciplesStrip: React.FC = () => {
  const principles = [
    {
      num: "01",
      icon: Search,
      accent: "#60A5FA",
      title: "Transparency First",
      body: "We believe every buyer deserves to know exactly what they are purchasing. Battery health, screen condition, repair history — we disclose everything, always."
    },
    {
      num: "02",
      icon: Leaf,
      accent: "#4ADE80",
      title: "Canada Standard",
      body: "Canada has one of the world's most honest pre-owned electronics markets. We chose it deliberately — because our customers deserve that standard."
    },
    {
      num: "03",
      icon: HeartHandshake,
      accent: "#A78BFA",
      title: "Accountability Always",
      body: "We stand behind every device we sell. If there is ever a discrepancy between what we described and what you received, we make it right. No arguments. No excuses."
    }
  ];

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  const stripVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: "easeOut", delay: i * 0.14 }
    })
  };

  return (
    <div 
      className="w-full rounded-[24px] overflow-hidden mt-[52px] md:mt-[80px]"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {principles.map((p, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={stripVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.035)", transition: { duration: 0.25 } }}
            className={`p-[24px] md:p-[36px] flex flex-col gap-[14px] relative overflow-hidden ${
              idx < principles.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''
            }`}
          >
            <span className="absolute top-[24px] md:top-[36px] right-[24px] md:right-[36px] font-space text-[80px] font-extrabold leading-none pointer-events-none" style={{ color: "rgba(255,255,255,0.03)" }}>
              {p.num}
            </span>
            <div 
              className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center relative z-10"
              style={{ background: hexToRgba(p.accent, 0.1), border: `1px solid ${hexToRgba(p.accent, 0.25)}` }}
            >
              <p.icon className="w-[20px] h-[20px]" color={p.accent} />
            </div>
            <h4 className="font-space text-[18px] font-bold text-white relative z-10 mt-[2px]">
              {p.title}
            </h4>
            <p className="font-sans text-[13px] font-normal text-white/50 leading-[1.7] relative z-10 mb-[16px]">
              {p.body}
            </p>
            <div 
              className="mt-auto w-[32px] h-[3px] rounded-full relative z-10"
              style={{ background: p.accent, boxShadow: `0 0 10px ${hexToRgba(p.accent, 0.6)}` }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section 
      id="about"
      className="relative w-full overflow-hidden z-10"
      style={{
        background: "linear-gradient(180deg, #060D20 0%, #070F24 30%, #081126 65%, #060E22 100%)",
        paddingTop: "clamp(72px, 10vw, 140px)",
        paddingBottom: "clamp(72px, 10vw, 140px)"
      }}
    >
      {/* Background Texture Layers */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 50%)",
          backgroundSize: "36px 36px"
        }}
      />
      
      <motion.div 
        className="absolute top-[-5%] left-[-20%] w-[800px] h-[600px] pointer-events-none z-0 rounded-[50%]"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)" }}
        animate={{ opacity: [0.5, 1.0, 0.5] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" as const }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] pointer-events-none z-0 rounded-[50%]"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.04) 0%, transparent 65%)" }}
        animate={{ opacity: [0.5, 1.0, 0.5] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 5, repeatType: "mirror" as const }}
      />

      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[24px] lg:px-[48px] relative z-10">
        
        {/* TWO COLUMN SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[52%_48%] gap-[52px] md:gap-[48px] lg:gap-[80px] items-center">
          
          {/* LEFT COLUMN - NARRATIVE */}
          <div className="flex flex-col items-start w-full relative z-10">
            {/* Badge */}
            <motion.div 
              custom={0}
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="inline-flex items-center gap-[8px] px-[18px] py-[7px] rounded-full mb-[20px]"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.20)" }}
            >
              <span className="text-[12px] leading-none">🍁</span>
              <span className="font-sans text-[11px] font-semibold text-red-300 tracking-[0.08em]">
                Our Story
              </span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="font-space font-extrabold text-[clamp(32px,4.5vw,58px)] leading-[1.08] tracking-tight text-white m-0">
              {["Built on One", "Simple Belief:", "You Deserve"].map((line, idx) => (
                <div key={idx} style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.08em" }}>
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (idx + 1) * 0.1 }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
              <div style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.08em" }}>
                <motion.div
                  initial={{ y: "105%" }}
                  whileInView={{ y: "0%" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 4 * 0.1 }}
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    Better.
                  </span>
                </motion.div>
              </div>
            </h2>

            {/* Origin Paragraph */}
            <motion.p
              custom={4.5}
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-sans text-[clamp(14px,1.55vw,17px)] font-normal leading-[1.85] text-white/60 max-w-[520px] mt-[28px]"
            >
              Mayor Gadgets was founded on a simple observation: the Nigerian electronics market was full of devices described as 'Grade A' or 'UK used' — but with no real accountability, no transparency, and no way for a buyer to verify what they were actually getting.
            </motion.p>
            
            {/* Mission Paragraph */}
            <motion.p
              custom={5.5}
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-sans text-[clamp(14px,1.55vw,17px)] font-normal leading-[1.85] text-white/60 max-w-[520px] mt-[16px]"
            >
              We decided to do something different. We built direct sourcing relationships in Canada — a market with rigorous standards, honest grading systems, and devices that have genuinely never been repaired or misused locally. We import those devices, inspect them thoroughly ourselves, and sell them to you with complete transparency about their exact condition.
            </motion.p>

            {/* Pull Quote */}
            <motion.div
              custom={6.5}
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="my-[32px] p-[16px_20px] max-w-[520px]"
              style={{
                borderLeft: "3px solid #60A5FA",
                background: "rgba(96,165,250,0.04)",
                borderRadius: "0 12px 12px 0"
              }}
            >
              <p className="font-sans text-[clamp(14px,1.6vw,16px)] font-medium leading-[1.80] text-white/80">
                At Mayor Gadgets, our commitment extends beyond merely selling devices — it encompasses delivering peace of mind with each shipment. Directly sourced from Canada, with absolutely no local stress involved.
              </p>
              <div className="font-sans text-[12px] font-semibold text-blue-400 tracking-[0.04em] mt-[10px]">
                — The Mayor Gadgets Promise
              </div>
            </motion.div>

            {/* Values Row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.75 } }
              }}
              className="flex flex-wrap gap-[10px] mt-[12px]" // 32px visually from pull quote
            >
              {[
                { icon: "🔍", text: "Radical Transparency" },
                { icon: "🍁", text: "Canada Direct" },
                { icon: "✅", text: "Grade A Only" },
                { icon: "🔒", text: "Zero Hidden Damage" },
                { icon: "💬", text: "Personal Service" }
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    background: "rgba(96,165,250,0.08)",
                    borderColor: "rgba(96,165,250,0.25)",
                    color: "#FFFFFF",
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  className="inline-flex items-center gap-[7px] px-[16px] py-[8px] rounded-full cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.72)"
                  }}
                >
                  <span className="text-[14px] leading-none">{val.icon}</span>
                  <span className="font-sans text-[13px] font-semibold">{val.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Row */}
            <motion.div
              custom={9}
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col sm:flex-row gap-[14px] mt-[36px] w-full sm:w-auto"
            >
              <a
                href={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'd like to know more about your brand and what devices you have available.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-[8px] px-[30px] py-[15px] rounded-full font-sans text-[15px] font-bold text-white transition-all duration-200 w-full sm:w-auto"
                style={{ background: "linear-gradient(135deg, #22C55E, #15803D)" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(34,197,94,0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <WhatsAppIcon className="w-[16px] h-[16px] text-white" />
                Talk to Us on WhatsApp
              </a>

              <a
                href="#products"
                className="flex items-center justify-center px-[28px] py-[15px] rounded-full font-sans text-[15px] font-semibold transition-all duration-200 w-full sm:w-auto"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.75)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                See Our Products →
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - VISUAL CARDS */}
          <div className="flex flex-col w-full relative z-10">
            <BrandIdentityCard isMobile={isMobile} />
            <InspectionChecklist isMobile={isMobile} />
            <LocationCard isMobile={isMobile} />
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <FoundingPrinciplesStrip />

      </div>

      {/* SECTION BOTTOM DIVIDER */}
      <div 
        className="w-full h-[1px] mt-[68px] lg:mt-[110px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(96,165,250,0.20) 40%, rgba(239,68,68,0.12) 60%, rgba(255,255,255,0.05) 85%, transparent 100%)"
        }}
      />
    </section>
  );
}
