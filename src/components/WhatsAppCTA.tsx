import React from "react";
import { motion, useMotionValue } from "motion/react";
import { MessageCircle, Search, Star, Check } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4 + (i * 0.13)
    }
  })
};

const WhatsAppIconDisplay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true }}
      className="relative w-[100px] h-[100px] flex items-center justify-center mx-auto mb-[32px] z-10"
    >
      <motion.div
        animate={{ y: [-6, 6] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="relative flex items-center justify-center"
      >
        {/* Pulse Ring 1 */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 80, height: 80, border: "2px solid rgba(34,197,94,0.4)" }}
          animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
        />
        {/* Pulse Ring 2 */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 80, height: 80, border: "2px solid rgba(34,197,94,0.4)" }}
          animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, delay: 1 }}
        />
        {/* Inner Circle */}
        <div 
          className="w-[80px] h-[80px] rounded-full flex items-center justify-center relative z-10"
          style={{
            background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
            boxShadow: "0 0 0 12px rgba(34,197,94,0.08), 0 0 0 24px rgba(34,197,94,0.04), 0 8px 32px rgba(34,197,94,0.4)"
          }}
        >
          <WhatsAppIcon className="w-[40px] h-[40px] text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CTAButton: React.FC = () => {
  const buttonRef = React.useRef<HTMLAnchorElement>(null);
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);
      if (dist < 120) {
        const strength = Math.max(0, (120 - dist) / 120);
        buttonX.set((e.clientX - btnCenterX) * strength * 0.15);
        buttonY.set((e.clientY - btnCenterY) * strength * 0.15);
      } else {
        buttonX.set(0);
        buttonY.set(0);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [buttonX, buttonY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 1.1 }}
      viewport={{ once: true }}
      className="relative inline-block mt-[48px] z-10"
      style={{ x: buttonX, y: buttonY }}
    >
      {/* Decorative Glow Ring */}
      <motion.div 
        className="absolute inset-[-8px] rounded-full pointer-events-none"
        style={{
          background: "transparent",
        }}
        animate={{ 
            boxShadow: ["0 4px 24px rgba(34,197,94,0.35)", "0 4px 40px rgba(34,197,94,0.60)", "0 4px 24px rgba(34,197,94,0.35)"]
        }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      
      {/* Button */}
      <motion.a
        ref={buttonRef}
        href={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm ready to order a Canada-sourced device. What do you have available right now?")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center justify-center gap-[12px] px-[36px] py-[18px] md:px-[52px] md:py-[22px] rounded-full text-white cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #22C55E 0%, #16A34A 60%, #15803D 100%)",
          boxShadow: "0 4px 32px rgba(34,197,94,0.45), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 0 0 1px rgba(255,255,255,0.08)",
          willChange: "transform"
        }}
        whileHover={{
          scale: 1.06, // from 1.04 to 1.06
          boxShadow: "0 8px 56px rgba(34,197,94,0.70), 0 0 100px rgba(34,197,94,0.20), inset 0 0 0 1px rgba(255,255,255,0.1)",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
      >
        <WhatsAppIcon className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-white flex-shrink-0" />
        <span className="font-space font-bold text-[clamp(16px,2vw,20px)] tracking-[-0.01em] leading-none pt-1">
          Start Your Order on WhatsApp
        </span>
      </motion.a>
    </motion.div>
  );
};

const AlternativeOptionCard: React.FC<{
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  title: string;
  subtitle: string;
  link: string;
  delay: number;
}> = ({ icon, iconBg, iconBorder, title, subtitle, link, delay }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className="flex flex-1 items-center gap-[14px] p-[18px_22px] rounded-[16px] cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        willChange: "transform"
      }}
      whileHover={{
        background: "rgba(255,255,255,0.055)",
        borderColor: "rgba(255,255,255,0.13)",
        y: -3,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
    >
      <div 
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg, border: `1px solid ${iconBorder}` }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-[2px]">
        <h4 className="font-space font-bold text-[14px] text-white leading-tight">
          {title}
        </h4>
        <p className="font-sans font-normal text-[12px] leading-tight" style={{ color: "rgba(255,255,255,0.42)" }}>
          {subtitle}
        </p>
      </div>
    </motion.a>
  );
};

const FloatingCardLeft: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
      viewport={{ once: true }}
      className="hidden lg:block absolute left-[4%] top-1/2 w-[200px] rounded-[18px] p-[20px] z-20 pointer-events-none"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        willChange: "transform"
      }}
    >
      <motion.div
        animate={{ y: [-8, 8] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <motion.div
          className="absolute top-0 w-[60%] h-[100%] pointer-events-none z-[5]"
          style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
              transform: 'skewX(-15deg)',
              left: '-100%'
          }}
          whileInView={{ left: '150%' }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
          viewport={{ once: true }}
        />
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.35)" }}>
          📦 Last Order
        </span>
        
        <div className="mt-[10px] flex flex-col gap-[2px]">
          <span className="font-space text-[13px] font-bold text-white leading-tight">
            iPhone 15 Pro Max
          </span>
          <span className="font-sans text-[11px] font-normal leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>
            256GB · Titanium
          </span>
        </div>

        <div className="flex items-center mt-[10px]">
          <span className="font-sans text-[10px] font-bold" style={{ color: "#4ADE80" }}>
            ✓ Delivered
          </span>
          <span className="font-sans text-[10px] font-normal ml-auto" style={{ color: "rgba(255,255,255,0.25)" }}>
            2 days ago
          </span>
        </div>

        <div className="my-[12px] h-[1px] w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

        <div className="flex items-center gap-[6px]">
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-[12px] h-[12px] flex-shrink-0" fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
            ))}
          </div>
          <span className="font-sans text-[11px] font-bold" style={{ color: "#FBBF24" }}>
            5.0
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FloatingCardRight: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
      viewport={{ once: true }}
      className="hidden lg:block absolute right-[4%] top-1/2 w-[200px] rounded-[18px] p-[20px] z-20 pointer-events-none"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        willChange: "transform",
        marginTop: "-100px" // Slight offset for visual balance
      }}
    >
      <motion.div
         animate={{ y: [8, -8] }}
         transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <motion.div
          className="absolute top-0 w-[60%] h-[100%] pointer-events-none z-[5]"
          style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
              transform: 'skewX(-15deg)',
              left: '-100%'
          }}
          whileInView={{ left: '150%' }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.1 }}
          viewport={{ once: true }}
        />
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(239,68,68,0.5)" }}>
          🍁 Canada Import
        </span>

        <div className="mt-[10px] flex flex-col gap-[2px]">
          <span className="font-space text-[28px] font-extrabold text-white leading-none">
            500+
          </span>
          <span className="font-sans text-[11px] font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>
            Devices Imported
          </span>
        </div>

        <div className="my-[12px] h-[1px] w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[2px]">
             <span className="font-space text-[16px] font-bold text-white leading-none">98%</span>
             <span className="font-sans text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>Satisfied</span>
          </div>
          <div className="flex flex-col gap-[2px] items-end">
             <span className="font-space text-[16px] font-bold text-white leading-none">4.9★</span>
             <span className="font-sans text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>Rating</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function WhatsAppCTA() {
  return (
    <section 
      id="contact"
      className="relative w-full z-10 overflow-hidden flex items-center justify-center min-h-[auto] lg:min-h-[100vh]"
      style={{
        background: "linear-gradient(145deg, #020508 0%, #030A14 30%, #040C10 60%, #020608 100%)",
      }}
    >
      {/* 
        ========================================================================
        TOP/BOTTOM DIVIDERS 
        (Rendered absolute within section for precise placement)
        ======================================================================== 
      */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(34,197,94,0.25) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[1px] pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(34,197,94,0.20) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)" }}
      />

      {/* 
        ========================================================================
        BACKGROUND LAYERS
        ======================================================================== 
      */}
      {/* Central Green Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, rgba(34,197,94,0.06) 30%, transparent 70%)" }}
        animate={{ scale: [0.95, 1.05] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      
      {/* Blue Glow Top-Left */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)" }}
        animate={{ opacity: [0.4, 0.9] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Red Glow Bottom-Right */}
      <motion.div 
        className="absolute bottom-[-8%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 65%)" }}
        animate={{ opacity: [0.4, 0.9] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 4 }}
      />

      {/* Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
      />

      {/* 
        ========================================================================
        DESKTOP FLOATING CARDS
        ======================================================================== 
      */}
      <FloatingCardLeft />
      <FloatingCardRight />

      {/* 
        ========================================================================
        MAIN CONTENT
        ======================================================================== 
      */}
      <div 
        className="w-full max-w-[780px] mx-auto text-center flex flex-col items-center relative z-30" 
        style={{ padding: "clamp(72px, 8vw, 120px) clamp(20px, 4vw, 48px)" }}
      >
        <WhatsAppIconDisplay />

        {/* Top Micro Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-[8px] px-[20px] py-[7px] rounded-full mb-[24px]"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.22)" }}
        >
          <motion.div 
            className="w-[8px] h-[8px] rounded-full bg-green-500"
            animate={{ scale: [1, 1.6], opacity: [1, 0] }}
            transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
          />
          <span className="font-sans text-[11px] font-semibold text-green-300 tracking-[0.06em]">
            We're Online · Usually reply in under 5 mins
          </span>
        </motion.div>

        {/* Main Headline */}
        <h2 className="font-space font-extrabold text-[clamp(40px,6.5vw,88px)] leading-[1.04] tracking-[-0.035em] text-white m-0 flex flex-wrap justify-center">
          {["Ready", "for", "a", "Device", "You", "Can"].map((word, i) => (
             <div key={i} style={{ overflow: "hidden", paddingBottom: "0.05em", marginRight: "0.3em" }}>
                 <motion.div
                   initial={{ y: "105%" }}
                   whileInView={{ y: "0%" }}
                   transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.4 + (i * 0.06) }}
                   viewport={{ once: true }}
                 >
                   {word}
                 </motion.div>
             </div>
          ))}
          {["Actually", "Trust?"].map((word, j) => (
             <div key={j + 6} style={{ overflow: "hidden", paddingBottom: "0.05em", marginRight: j === 0 ? "0.3em" : "0" }}>
                 <motion.div
                   initial={{ y: "105%" }}
                   whileInView={{ y: "0%" }}
                   transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.4 + ((j + 6) * 0.06) }}
                   viewport={{ once: true }}
                 >
                   <span 
                     className="bg-clip-text text-transparent"
                     style={{ background: "linear-gradient(90deg, #4ADE80 0%, #22C55E 40%, #60A5FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                   >
                     {word}
                   </span>
                 </motion.div>
             </div>
          ))}
        </h2>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.85 }}
          viewport={{ once: true }}
          className="font-sans text-[clamp(15px,1.8vw,19px)] font-normal leading-[1.8] max-w-[580px] mx-auto mt-[28px]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Every device we sell is sourced directly from Canada, Grade A certified, and multi-point inspected before it reaches you. No middlemen. No local repairs. No hidden damage. Just a premium device and a brand you can hold accountable.
        </motion.p>

        {/* Trust Proof Row */}
        <motion.div
           initial={{ opacity: 0, y: 16 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.55, ease: "easeOut", delay: 1.0 }}
           viewport={{ once: true }}
           className="flex flex-wrap items-center justify-center gap-[24px] mt-[36px]"
        >
          {[
            { icon: "✅", text: "Grade A Certified" },
            { icon: "🍁", text: "Canada Direct" },
            { icon: "🔒", text: "Transparent Pricing" }
          ].map((signal, idx) => (
            <React.Fragment key={idx}>
              <div className="inline-flex items-center gap-[7px] font-sans text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span>{signal.icon}</span>
                <span>{signal.text}</span>
              </div>
              {idx < 2 && (
                <div className="hidden lg:block w-[4px] h-[4px] rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTA Button */}
        <CTAButton />

        {/* Button Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.25 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-[16px] text-center"
        >
           <span className="font-sans text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.38)" }}>
             No forms. No waiting. No stress.
           </span>
           <span className="font-sans text-[12px] font-normal mt-[4px]" style={{ color: "rgba(255,255,255,0.25)" }}>
             💬 Chat opens instantly on WhatsApp
           </span>
        </motion.div>

        {/* Alternative Options Row */}
        <div className="mt-[52px] flex flex-col md:flex-row gap-[16px] w-full max-w-[600px] mx-auto z-10 relative">
          <AlternativeOptionCard 
            delay={1.3}
            icon={<MessageCircle className="w-[18px] h-[18px] text-green-400" />}
            iconBg="rgba(34,197,94,0.10)"
            iconBorder="rgba(34,197,94,0.25)"
            title="Ask a Question First"
            subtitle="Not ready to order? Ask us anything"
            link={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I have a question before I order. Can you help?")}`}
          />
          <AlternativeOptionCard 
            delay={1.4}
            icon={<Search className="w-[18px] h-[18px] text-blue-400" />}
            iconBg="rgba(96,165,250,0.10)"
            iconBorder="rgba(96,165,250,0.25)"
            title="Check Device Availability"
            subtitle="Ask about a specific model or spec"
            link={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'd like to check if a specific device is available. Can you help?")}`}
          />
        </div>

        {/* Bottom Reassurance Strip */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
           viewport={{ once: true }}
           className="mt-[52px] font-sans text-[12px] font-medium text-center flex flex-wrap justify-center gap-[8px] leading-tight"
           style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.03em" }}
        >
          <span>🍁 Canada Sourced</span>
          <span>·</span>
          <span>✅ Grade A Certified</span>
          <span>·</span>
          <span>🔋 Battery Verified</span>
          <span>·</span>
          <span>🔒 No Hidden Damage</span>
          <span>·</span>
          <span>📦 Fast Lagos Delivery</span>
        </motion.div>

      </div>
    </section>
  );
}
