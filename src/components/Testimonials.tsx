import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { testimonials, Testimonial } from "../data/testimonials";
import { WhatsAppIcon } from "./icons/WhatsApp";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(251,191,36,0.15)",
        borderColor: "rgba(251,191,36,0.2)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="w-[280px] lg:w-[340px] shrink-0 min-h-[200px] rounded-[20px] p-[24px] flex flex-col gap-[16px] relative overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.025) 60%, rgba(10,18,40,0.5) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)",
        willChange: "transform"
      }}
    >
      {/* Decorative Quote */}
      <div 
        className="absolute top-[16px] right-[20px] font-serif text-[80px] leading-none pointer-events-none z-0"
        style={{ color: "rgba(251,191,36,0.06)", fontFamily: "Georgia, serif" }}
      >
        "
      </div>

      {/* Top Row */}
      <div className="flex justify-between items-center relative z-10 w-full">
        {/* Stars */}
        <div className="flex gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-[14px] h-[14px]" fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
          ))}
        </div>
        {/* Canada Badge */}
        <div 
          className="rounded-full px-[10px] py-[3px] font-sans text-[9px] font-semibold tracking-wide whitespace-nowrap"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.18)",
            color: "rgba(239,68,68,0.6)"
          }}
        >
          🍁 Canada Device
        </div>
      </div>

      {/* Quote Text */}
      <p className="font-sans text-[14px] font-normal leading-[1.75] relative z-10" style={{ color: "rgba(255,255,255,0.72)" }}>
        {testimonial.review}
      </p>

      {/* Product Purchased Tag */}
      <div 
        className="inline-flex rounded-full px-[12px] py-[4px] self-start relative z-10 font-sans text-[10px] font-semibold"
        style={{
          background: "rgba(96,165,250,0.08)",
          border: "1px solid rgba(96,165,250,0.18)",
          color: "#93C5FD"
        }}
      >
        Purchased: {testimonial.product}
      </div>

      {/* Reviewer Row */}
      <div className="flex items-center gap-[12px] mt-auto pt-[14px] relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Avatar */}
        <div 
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 font-space text-[16px] font-bold text-white relative"
          style={{
            background: testimonial.avatarGradient,
            border: "1.5px solid rgba(255,255,255,0.12)"
          }}
        >
          {testimonial.avatarInitial}
        </div>
        
        {/* Reviewer Info */}
        <div className="flex flex-col gap-[2px]">
          <span className="font-space text-[14px] font-bold text-white leading-none">
            {testimonial.reviewer}
          </span>
          <div className="flex items-center gap-[6px]">
            <span className="font-sans text-[11px] leading-none" style={{ color: "rgba(255,255,255,0.38)" }}>
              {testimonial.location}
            </span>
            <div className="flex items-center gap-[3px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#22C55E" }} />
              <span className="font-sans text-[10px] leading-none whitespace-nowrap" style={{ color: "rgba(34,197,94,0.7)" }}>
                Verified Buyer
              </span>
            </div>
          </div>
        </div>

        {/* Time Stamp */}
        <span className="font-sans text-[11px] font-normal ml-auto leading-none shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>
          {testimonial.timeAgo}
        </span>
      </div>
    </motion.div>
  );
};

const MarqueeRow: React.FC<{ items: Testimonial[], direction: 'left' | 'right' }> = ({ items, direction }) => {
  const duplicatedItems = [...items, ...items];
  const animationClass = direction === 'left' ? '[animation:scrollLeft_35s_linear_infinite]' : '[animation:scrollRight_40s_linear_infinite]';
  const rowClass = `flex gap-[20px] w-max ${animationClass} group-hover:[animation-play-state:paused]`;

  return (
    <div className={rowClass} style={{ willChange: "transform" }}>
      {duplicatedItems.map((testimonial, idx) => (
        <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
      ))}
    </div>
  );
};

const FeaturedTestimonial: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className="max-w-[800px] mx-auto mb-[64px] rounded-[24px] p-[28px] lg:p-[48px] relative overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(145deg, rgba(251,191,36,0.06) 0%, rgba(255,255,255,0.04) 50%, rgba(10,18,40,0.6) 100%)",
        border: "1px solid rgba(251,191,36,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.5), 0 0 60px rgba(251,191,36,0.05), inset 0 1px 0 rgba(251,191,36,0.1)"
      }}
    >
      {/* Shimmer Effect */}
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
      {/* Top Row */}
      <div className="flex justify-between items-center w-full flex-wrap gap-4 relative z-10">
         <div className="flex gap-[3px]">
           {[...Array(5)].map((_, i) => (
             <Star key={i} className="w-[20px] h-[20px]" fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
           ))}
         </div>
         <div 
           className="rounded-full px-[14px] py-[5px] font-sans text-[11px] font-semibold whitespace-nowrap inline-flex items-center"
           style={{
             background: "rgba(251,191,36,0.10)",
             border: "1px solid rgba(251,191,36,0.25)",
             color: "#FDE68A"
           }}
         >
           ⭐ Featured Review
         </div>
      </div>

      {/* Review Text */}
      <div className="my-[20px] relative z-10 w-full overflow-hidden">
        <span 
          className="absolute font-serif text-[64px] leading-none font-bold z-0 opacity-20 pointer-events-none"
          style={{ 
            color: "rgba(251,191,36,0.2)", 
            fontFamily: "Georgia, serif", 
            left: 0, 
            top: 0 
          }}
        >
          "
        </span>
        <p className="font-space text-[clamp(16px,2vw,20px)] font-medium leading-[1.75] relative z-10 block" style={{ color: "rgba(255,255,255,0.85)", textIndent: "40px" }}>
          {testimonial.review}
        </p>
      </div>

      {/* Purchased Tag */}
      <div 
        className="inline-flex rounded-full px-[12px] py-[4px] self-start font-sans text-[10px] font-semibold mb-[28px]"
        style={{
          background: "rgba(96,165,250,0.08)",
          border: "1px solid rgba(96,165,250,0.18)",
          color: "#93C5FD"
        }}
      >
        Purchased: iPhone 15 Pro Max · iPhone 13 · Apple Watch Series 9 (3 orders)
      </div>

      {/* Reviewer Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-[16px]">
        {/* Avatar */}
        <div 
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 font-space text-[20px] font-bold text-white relative z-10"
          style={{
            background: testimonial.avatarGradient,
            border: "1.5px solid rgba(255,255,255,0.12)"
          }}
        >
          {testimonial.avatarInitial}
        </div>
        
        {/* Reviewer Info */}
        <div className="flex flex-col gap-[4px] relative z-10">
          <span className="font-space text-[16px] font-bold text-white leading-none">
            {testimonial.reviewer}
          </span>
          <div className="flex flex-wrap items-center gap-[6px]">
            <span className="font-sans text-[12px] leading-none block" style={{ color: "rgba(255,255,255,0.38)" }}>
              {testimonial.location}
            </span>
            <div className="flex items-center gap-[4px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: "#22C55E" }} />
              <span className="font-sans text-[11px] leading-none font-bold whitespace-nowrap" style={{ color: "rgba(34,197,94,0.7)" }}>
                Verified
              </span>
              <span className="font-sans text-[11px] leading-none text-white/20">·</span>
              <span className="font-sans text-[11px] leading-none font-bold whitespace-nowrap" style={{ color: "#FBBF24" }}>
                3x Repeat Customer
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AggregateRating: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-[32px] flex flex-wrap items-center justify-center gap-[16px] lg:gap-[32px]"
    >
      {/* Left Block */}
      <div className="flex flex-col items-center gap-[6px]">
        <div className="flex items-center sm:items-baseline gap-[12px]">
          <span className="font-space text-[56px] font-extrabold text-white leading-[1]">4.9</span>
          <div className="flex flex-col justify-center gap-[6px]">
            <div className="flex gap-[3px]">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-[20px] h-[20px]" fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
              ))}
              <div className="relative w-[20px] h-[20px]">
                <Star className="w-[20px] h-[20px] absolute top-0 left-0" fill="rgba(255,255,255,0.15)" strokeWidth={0} />
                <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: "90%" }}>
                  <Star className="w-[20px] h-[20px]" fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
                </div>
              </div>
            </div>
            <span className="font-sans text-[12px] font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.38)" }}>
              Based on 200+ orders
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-[1px] h-[64px]" style={{ background: "rgba(255,255,255,0.1)" }} />

      {/* Right Block */}
      <div className="flex gap-[28px] mt-[16px] lg:mt-0">
        {[
          { label: "Satisfied", val: "98%" },
          { label: "Orders", val: "500+" },
          { label: "Avg Delivery", val: "48hr" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-[3px]">
            <span className="font-space text-[22px] font-bold text-white leading-[1]">{stat.val}</span>
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(255,255,255,0.38)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const row1 = testimonials.filter(t => t.row === 1);
  const row2 = testimonials.filter(t => t.row === 2);
  const featured = testimonials.find(t => t.id === 4) as Testimonial;

  return (
    <section 
      id="testimonials"
      className="relative w-full overflow-hidden z-10"
      style={{
        background: "linear-gradient(180deg, #050C1E 0%, #060E22 30%, #071025 65%, #060D20 100%)",
        paddingTop: "clamp(72px, 10vw, 140px)",
        paddingBottom: "clamp(72px, 10vw, 140px)"
      }}
    >
      {/* Decorative */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
      
      <div className="absolute top-[-10%] right-[-15%] w-[700px] h-[700px] pointer-events-none z-0">
        <motion.div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 65%)"
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] pointer-events-none z-0">
        <motion.div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)"
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, delay: 4.5 }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[24px] lg:px-[48px] relative z-10 overflow-visible">
         {/* HEADER BLOCK */}
         <div className="flex flex-col items-center text-center mb-[52px] lg:mb-[80px]">
           <motion.div 
             className="mb-[18px] inline-flex items-center gap-[8px] px-[18px] py-[7px] rounded-full"
             style={{
               background: "rgba(251,191,36,0.08)",
               border: "1px solid rgba(251,191,36,0.22)"
             }}
             initial={{ opacity: 0, y: 24 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ duration: 0.6, ease: "easeOut" }}
           >
             <Star className="w-[12px] h-[12px] text-yellow-400" fill="#FBBF24" strokeWidth={0} />
             <span className="font-sans text-[11px] font-semibold tracking-[0.07em] text-[#FDE68A]">
               Real Customers. Real Devices. Real Trust.
             </span>
           </motion.div>

           <h2 className="font-space font-extrabold text-[clamp(36px,5vw,64px)] leading-[1.06] tracking-tight text-white m-0">
             {["What Our", "Customers", "Are Saying."].map((line, idx) => (
                <div key={idx} style={{ overflow: "hidden", paddingBottom: "0.05em", lineHeight: "1.06em" }}>
                  <motion.div
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                  {line === "Are Saying." ? (
                    <span 
                      className="bg-clip-text text-transparent"
                      style={{ background: "linear-gradient(90deg, #FBBF24 0%, #F59E0B 50%, #60A5FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
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
             transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
             viewport={{ once: true, margin: "-80px" }}
             className="font-sans text-[clamp(14px,1.6vw,17px)] leading-[1.78] max-w-[500px] mx-auto mt-[18px]"
             style={{ color: "rgba(255,255,255,0.48)" }}
           >
             Hundreds of customers across Lagos have trusted Mayor Gadgets with their hard-earned money. Here's what they found on the other side.
           </motion.p>

           <AggregateRating />
         </div>

         {/* FEATURED TESTIMONIAL BLOCK */}
         {featured && <FeaturedTestimonial testimonial={featured} />}
      </div>

      {/* MARQUEE */}
      <div 
        className="w-full relative py-[10px] group overflow-hidden" 
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div className="flex flex-col gap-[20px] w-full mt-2" style={{ marginLeft: "calc(-50vw + 50%)" }}>
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[24px] lg:px-[48px] relative z-10 overflow-visible">
        {/* BOTTOM CTA BLOCK */}
        <motion.div
           initial={{ opacity: 0, y: 32 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
           viewport={{ once: true, margin: "-40px" }}
           className="flex flex-col items-center gap-[18px] mt-[52px] lg:mt-[80px]"
        >
          <h3 className="font-space font-extrabold text-[clamp(22px,3vw,36px)] text-white text-center leading-tight m-0">
            Join hundreds of satisfied customers.
          </h3>
          <p className="font-sans text-[15px] font-normal text-center max-w-[440px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Every review above is from a real Mayor Gadgets customer. Your device is next.
          </p>

          <a
            href={`https://wa.me/2349150480142?text=${encodeURIComponent("Hi Mayor Gadgets, I saw your reviews and I'd like to place an order. What devices do you have available?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[10px] px-[40px] md:px-[44px] py-[16px] md:py-[18px] rounded-full font-sans text-[15px] md:text-[16px] font-bold text-white mt-[8px] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
              boxShadow: "0 4px 28px rgba(34,197,94,0.3)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 6px 36px rgba(34,197,94,0.55)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 28px rgba(34,197,94,0.3)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
          >
            <WhatsAppIcon className="w-[17px] h-[17px] text-white" />
            Order Your Device on WhatsApp
          </a>

          <p className="font-sans text-[12px] font-normal text-center mt-[4px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            🍁 Canada sourced · ✓ Grade A certified · 💬 Reply in under 5 minutes
          </p>
        </motion.div>
      </div>

      {/* SECTION BOTTOM DIVIDER */}
      <div 
        className="w-full h-[1px] mt-[68px] lg:mt-[110px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(251,191,36,0.18) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)"
        }}
      />

    </section>
  );
}
