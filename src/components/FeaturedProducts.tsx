import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Search, BatteryCharging, Leaf } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import { ShimmerCard } from "./ShimmerCard";

const tabs = ["All", "iPhones", "Android", "Smartwatches", "AirPods", "Accessories", "Speakers"];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.filter === activeTab);

  return (
    <section 
      id="products"
      className="relative w-full overflow-hidden z-10"
      style={{
        background: "linear-gradient(180deg, #030810 0%, #040C1A 35%, #050E20 70%, #040A16 100%)",
        paddingTop: "clamp(70px, 10vw, 130px)",
        paddingBottom: "clamp(70px, 10vw, 130px)"
      }}
    >
      {/* Decorative Background Element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-[20px] md:px-[24px] lg:px-[48px] relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[52px] lg:mb-[72px]">
          <motion.div 
            className="mb-4 inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full border border-blue-400/20 bg-blue-500/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[12px] leading-none">🍁</span>
            <span className="font-sans text-[11px] font-semibold text-blue-300 tracking-[0.08em]">
              Canada-Sourced · Grade A Certified
            </span>
          </motion.div>
          
          <h2 className="font-space font-extrabold text-[clamp(38px,5.5vw,68px)] leading-[1.05] tracking-tight text-white m-0 mt-4 flex flex-col items-center">
            <div style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.08em" }}>
              <motion.div 
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                Our Featured
              </motion.div>
            </div>
            <div style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.08em" }}>
              <motion.div
                initial={{ y: "105%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Devices
                </span>
              </motion.div>
            </div>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[clamp(14px,1.6vw,17px)] leading-[1.75] text-white/50 max-w-[540px] mx-auto mt-4"
          >
            Every device on this page was sourced directly from Canada. 
            Grade A certified, multi-point inspected, and shipped to Lagos 
            with zero local usage or repairs.
          </motion.p>
        </div>

        {/* GLOBAL CERTIFICATION BAR */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[40px] rounded-2xl px-[32px] py-[18px] mb-[36px] lg:mb-[52px]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)"
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {[
            { icon: CheckCircle2, iconColor: "text-green-500", label: "Grade A Only" },
            { icon: Leaf, iconColor: "text-red-500", label: "Canada Direct Import" },
            { icon: BatteryCharging, iconColor: "text-blue-400", label: "Battery Health Certified" },
            { icon: Search, iconColor: "text-white/70", label: "Multi-Point Inspected" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-[7px]">
              <item.icon className={`w-4 h-4 ${item.iconColor}`} />
              <span className="font-sans text-[12px] font-semibold text-white/70">{item.label}</span>
              {index < 3 && (
                <div className="hidden lg:block w-[1px] h-[18px] ml-[40px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* FILTER TABS */}
        <div className="flex flex-row items-center justify-start sm:justify-center gap-2 mb-[36px] lg:mb-[56px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full max-w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-[22px] py-[9px] rounded-full font-sans text-[13px] whitespace-nowrap transition-colors duration-200 shrink-0 ${
                  isActive 
                    ? "text-white font-bold"
                    : "text-white/45 font-medium border border-white/10 bg-white/4 hover:bg-white/10 hover:text-white/85 hover:border-white/15"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
                      boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                      zIndex: -1
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* PRODUCT GRID */}
        <motion.div 
          className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-[16px] min-[400px]:gap-[12px] md:gap-[20px] lg:gap-[24px]"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full"
              >
                <ShimmerCard className="h-full rounded-[16px] md:rounded-[20px]" delay={0.4}>
                  <ProductCard product={product} />
                </ShimmerCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA ROW */}
        <div className="flex flex-col items-center mt-[48px] lg:mt-[72px]">
          <a
            href="https://wa.me/2349150480142"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[40px] py-[15px] rounded-full font-sans text-[14px] font-semibold text-white/65 hover:text-white transition-all duration-250 cursor-pointer text-center"
            style={{
              border: "1.5px solid rgba(255,255,255,0.14)",
              background: "transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#60A5FA";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.background = "rgba(96,165,250,0.07)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(96,165,250,0.14)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Browse All Devices on WhatsApp →
          </a>
          <p className="font-sans text-[12px] text-white/30 mt-[14px] text-center font-normal">
            💬 Chat with us on WhatsApp — no forms, no waiting, no stress.
          </p>
          <p className="font-sans text-[12px] text-white/30 mt-[5px] text-center font-normal">
            🍁 All devices sourced directly from Canada.
          </p>
        </div>

      </div>

      {/* SECTION BOTTOM DIVIDER */}
      <div 
        className="w-full h-[1px] mt-[60px] lg:mt-[96px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(96,165,250,0.22) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)"
        }}
      />
    </section>
  );
}
