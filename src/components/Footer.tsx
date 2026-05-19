import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

const scrollToSection = (id: string, e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const footerColumnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay: i * 0.10
    }
  })
};

const FooterPreCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full relative z-10"
    style={{
      background: "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 50%, rgba(59,130,246,0.05) 100%)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "clamp(28px, 4vw, 48px) clamp(20px, 4vw, 48px)",
    }}
  >
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-[32px] text-center md:text-left">
      <div>
        <h3 className="font-space font-bold text-[clamp(20px,2.5vw,28px)] text-white m-0 leading-tight">
          Still thinking about it?
        </h3>
        <p className="font-sans text-[14px] font-normal leading-[1.65] mt-[6px] max-w-full md:max-w-[420px]" style={{ color: "rgba(255,255,255,0.48)" }}>
          Our Canada-sourced devices go fast. Chat with us now before your preferred model is gone.
        </p>
      </div>
      <a
        href={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm still browsing and would like to know what Canada-sourced devices you currently have available.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-[8px] whitespace-nowrap text-white font-sans font-bold w-full md:w-auto"
        style={{
          background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
          fontSize: "clamp(14px, 1.5vw, 15px)",
          padding: "clamp(14px, 1.5vw, 16px) clamp(24px, 2.5vw, 28px)",
          borderRadius: "clamp(14px, 1.5vw, 999px)",
          boxShadow: "0 4px 20px rgba(34,197,94,0.3)",
          transition: "all 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
          e.currentTarget.style.boxShadow = "0 0 28px rgba(34,197,94,0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(34,197,94,0.3)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.97)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1.04)";
        }}
      >
        <WhatsAppIcon className="w-[16px] h-[16px] text-white" />
        WhatsApp Us Now →
      </a>
    </div>
  </motion.div>
);

const FooterBrandColumn = () => (
  <motion.div custom={0} variants={footerColumnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
    <div className="flex items-center gap-[4px] mb-[4px]">
      <span className="font-space font-extrabold text-[24px] text-white leading-none tracking-tight">Mayor</span>
      <span className="font-space font-extrabold text-[24px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 leading-none tracking-tight">Gadgets</span>
    </div>
    
    <div className="font-sans text-[11px] font-semibold mb-[16px] tracking-[0.07em]" style={{ color: "rgba(255,255,255,0.35)" }}>
      🍁 Canada Sourced · Grade A Certified
    </div>

    <p className="font-sans text-[13px] font-normal leading-[1.8] mb-[28px] max-w-full md:max-w-[280px]" style={{ color: "rgba(255,255,255,0.42)" }}>
      Mayor Gadgets imports Grade A certified pre-owned electronics directly from Canada. Every device is multi-point inspected for battery health, hardware integrity, and software performance before delivery. Zero local usage. Zero local repairs. Just premium devices and total transparency.
    </p>

    <div className="font-sans text-[10px] font-bold mb-[12px] tracking-[0.12em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
      CONTACT US
    </div>

    <a href="https://wa.me/2349150480142" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px] group transition-colors">
      <WhatsAppIcon className="w-[16px] h-[16px] text-[#4ADE80]" />
      <div className="flex flex-col gap-[2px]">
        <span className="font-sans text-[11px] font-semibold tracking-[0.06em] uppercase transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>WhatsApp</span>
        <span className="font-space text-[16px] font-bold text-white group-hover:text-[#4ADE80] transition-colors duration-200">09150480142</span>
      </div>
    </a>

    <div className="mt-[14px] flex items-start flex-row gap-[10px]">
      <MapPin className="w-[16px] h-[16px] text-[#F87171] shrink-0 mt-[2px]" />
      <div className="flex flex-col gap-[2px]">
        <span className="font-sans text-[11px] font-semibold tracking-[0.06em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Location</span>
        <span className="font-sans text-[14px] font-semibold" style={{ color: "rgba(255,255,255,0.72)" }}>Ikeja, Lagos, Nigeria</span>
      </div>
    </div>

    <div className="mt-[14px] flex items-start flex-row gap-[10px]">
      <Clock className="w-[16px] h-[16px] text-[#60A5FA] shrink-0 mt-[2px]" />
      <div className="flex flex-col gap-[2px]">
        <span className="font-sans text-[11px] font-semibold tracking-[0.06em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Business Hours</span>
        <span className="font-sans text-[14px] font-semibold" style={{ color: "rgba(255,255,255,0.72)" }}>Mon – Sat: 8AM – 8PM</span>
        <span className="font-sans text-[13px] font-normal" style={{ color: "rgba(255,255,255,0.45)" }}>Sun: 10AM – 6PM</span>
      </div>
    </div>

    <div className="mt-[28px] flex gap-[10px] flex-wrap">
      <div className="inline-flex items-center px-[12px] py-[6px] rounded-[8px] font-sans text-[11px] font-semibold text-[#86EFAC]" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.20)" }}>
        ✅ Grade A
      </div>
      <div className="inline-flex items-center px-[12px] py-[6px] rounded-[8px] font-sans text-[11px] font-semibold text-[#FCA5A5]" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.20)" }}>
        🍁 Canada Import
      </div>
      <div className="inline-flex items-center px-[12px] py-[6px] rounded-[8px] font-sans text-[11px] font-semibold text-[#93C5FD]" style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.20)" }}>
        🔒 Verified
      </div>
    </div>
  </motion.div>
);

const FooterLinkColumn = ({ title, links, isSmoothScroll, index }: { title: string, links: any[], isSmoothScroll: boolean, index: number }) => (
  <motion.div custom={index} variants={footerColumnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
    <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] mb-[20px]" style={{ color: "rgba(255,255,255,0.25)" }}>
      {title}
    </h4>
    <div className="w-[24px] h-[2px] rounded-[1px] mb-[20px] mt-[-14px]" style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)" }} />
    <div className="flex flex-col gap-[12px]">
      {links.map((link, i) => (
        <a 
          key={i} 
          href={isSmoothScroll ? `#${link.id}` : link.url}
          target={isSmoothScroll ? undefined : "_blank"}
          rel={isSmoothScroll ? undefined : "noopener noreferrer"}
          onClick={isSmoothScroll ? (e) => scrollToSection(link.id, e) : undefined}
          className="group flex items-center gap-[8px] font-sans text-[14px] font-normal cursor-pointer transition-all duration-200" 
          style={{ color: "rgba(255,255,255,0.48)", textDecoration: "none" }}
        >
          <span className="text-[14px] leading-none transition-all duration-200 group-hover:translate-x-[2px] group-hover:text-[#60A5FA]" style={{ color: "rgba(255,255,255,0.2)" }}>
            ›
          </span>
          <span className="transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-[#FFFFFF]">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  </motion.div>
);

const FooterPromiseColumn = ({ index }: { index: number }) => (
  <motion.div custom={index} variants={footerColumnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
    <h4 className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] mb-[20px]" style={{ color: "rgba(255,255,255,0.25)" }}>
      Our Promise
    </h4>
    <div className="w-[24px] h-[2px] rounded-[1px] mb-[20px] mt-[-14px]" style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)" }} />
    <div className="flex flex-col gap-[14px]">
      {[
        "Sourced directly from Canada",
        "Grade A certified — no exceptions",
        "Battery health verified before shipping",
        "Zero local usage or repairs",
        "Multi-point hardware inspection",
        "Full transparency on every device"
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-[10px]">
          <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px]" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.28)" }}>
            <span className="font-sans text-[10px] font-bold text-[#4ADE80] mt-[1px]">✓</span>
          </div>
          <span className="font-sans text-[13px] font-normal leading-[1.5]" style={{ color: "rgba(255,255,255,0.52)" }}>
            {item}
          </span>
        </div>
      ))}
    </div>
    <div className="mt-[24px] font-sans text-[11px] font-semibold tracking-[0.04em]" style={{ color: "rgba(255,255,255,0.28)" }}>
      🍁 Canada → 📦 Inspected → 🇳🇬 Lagos
    </div>
  </motion.div>
);

const FooterBottomBar = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
    viewport={{ once: true }}
    className="w-full relative z-10"
    style={{ padding: "clamp(20px, 4vw, 24px) clamp(20px, 4vw, 48px) clamp(24px, 4vw, 32px)" }}
  >
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[16px] md:gap-[24px] text-center md:text-left">
      <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[8px]">
        <span className="font-sans text-[12px] font-normal" style={{ color: "rgba(255,255,255,0.22)" }}>
          © 2025 Mayor Gadgets. All rights reserved.
        </span>
        <span className="hidden md:inline font-sans text-[12px]" style={{ color: "rgba(255,255,255,0.22)" }}>·</span>
        <span className="font-sans text-[12px] font-normal flex items-center justify-center" style={{ color: "rgba(255,255,255,0.18)" }}>
          Certified Electronics · Ikeja, Lagos, Nigeria
        </span>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="flex items-center gap-[2px]">
          <span className="font-space font-bold text-[14px] text-white leading-none">Mayor</span>
          <span className="font-space font-bold text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 leading-none">Gadgets</span>
        </div>
        <span className="font-sans text-[10px] mt-[2px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          🍁 Canada Sourced
        </span>
      </div>

      <div className="flex flex-col md:items-end items-center gap-[2px]">
        <span className="font-sans text-[12px] font-normal" style={{ color: "rgba(255,255,255,0.18)" }}>
          Crafted with care for the Lagos tech community
        </span>
        <span className="font-sans text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.15)" }}>
          🍁 CA → NG
        </span>
      </div>
    </div>
  </motion.div>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          whileHover={{
            background: "rgba(96,165,250,0.15)",
            borderColor: "rgba(96,165,250,0.35)",
            scale: 1.08,
            boxShadow: "0 0 20px rgba(96,165,250,0.25)",
            transition: { duration: 0.25, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[28px] right-[28px] w-[48px] h-[48px] rounded-full flex items-center justify-center z-[99] cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            willChange: "transform"
          }}
        >
          <ChevronUp className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export function Footer() {
  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Our Products", id: "products" },
    { label: "Categories", id: "categories" },
    { label: "Why Choose Us", id: "why-us" },
    { label: "Testimonials", id: "testimonials" },
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" }
  ];

  const productLinks = [
    { label: "iPhones", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your Canada-sourced iPhones.")}` },
    { label: "Android Phones", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your Android phones.")}` },
    { label: "Smartwatches", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your smartwatches.")}` },
    { label: "AirPods", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your AirPods.")}` },
    { label: "Bluetooth Speakers", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your Bluetooth speakers.")}` },
    { label: "Accessories", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I'm interested in your phone accessories.")}` },
    { label: "Custom Order", url: `https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I have a custom device request from Canada.")}` }
  ];

  return (
    <footer 
      id="footer" 
      className="relative w-full overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #030810 0%, #020609 40%, #010406 80%, #010305 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 0
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)"
        }}
      />

      <FooterPreCTA />

      <div 
        className="w-full relative z-10"
        style={{ padding: "clamp(48px, 6vw, 72px) clamp(20px, 4vw, 48px) clamp(40px, 5vw, 64px)" }}
      >
        <div className="max-w-[1280px] mx-auto min-h-[300px]">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[32%_1fr_1fr_1fr] gap-[40px] lg:gap-[0px]"
          >
            <div className="md:col-span-1 lg:border-r lg:border-[rgba(255,255,255,0.06)] lg:pr-[48px]">
              <FooterBrandColumn />
            </div>
            <div className="md:col-span-1 lg:pl-[48px]">
              <FooterLinkColumn title="Quick Links" links={quickLinks} isSmoothScroll={true} index={1} />
            </div>
            <div className="md:col-span-1 lg:pl-[48px]">
              <FooterLinkColumn title="Our Products" links={productLinks} isSmoothScroll={false} index={2} />
            </div>
            <div className="md:col-span-1 lg:pl-[48px]">
              <FooterPromiseColumn index={3} />
            </div>
          </div>
        </div>
        
        <div className="max-w-[1280px] mx-auto h-[1px] mt-[40px] md:mt-[56px]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>

      <FooterBottomBar />
      <ScrollToTopButton />
    </footer>
  );
}
