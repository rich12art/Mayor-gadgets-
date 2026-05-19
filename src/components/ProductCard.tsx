import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { Star } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const getBadgeStyle = (badge: Product["badge"]) => {
    switch (badge) {
      case "popular":
        return { background: "linear-gradient(135deg, #F59E0B, #D97706)", text: "🔥 Popular" };
      case "new":
        return { background: "linear-gradient(135deg, #3B82F6, #6366F1)", text: "✦ New Arrival" };
      case "hot":
        return { background: "linear-gradient(135deg, #EF4444, #DC2626)", text: "⚡ Hot Deal" };
      default:
        return null;
    }
  };

  const badgeInfo = getBadgeStyle(product.badge);

  const phoneHref = `https://wa.me/2349150480142?text=${encodeURIComponent(
    `Hi Mayor Gadgets, I'm interested in the ${product.name}. Is it available?`
  )}`;

  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    rotateX.set(-(mouseY / rect.height) * 8);
    rotateY.set((mouseX / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    animate(rotateX, 0, { type: "spring", stiffness: 200, damping: 20 });
    animate(rotateY, 0, { type: "spring", stiffness: 200, damping: 20 });
  };

  return (
    <div style={{ perspective: 800 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover="hover"
        className="relative overflow-hidden rounded-[16px] md:rounded-[20px] cursor-pointer w-full h-full flex flex-col"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(150deg, rgba(255,255,255,0.065) 0%, rgba(255,255,255,0.02) 60%, rgba(10,20,40,0.4) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
          willChange: "transform",
        }}
      variants={{
        initial: { y: 0, boxShadow: "0 2px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.08)" },
        hover: { 
          y: -10, 
          boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(59,130,246,0.25), 0 0 40px rgba(59,130,246,0.10)",
          borderColor: "rgba(59,130,246,0.3)" 
        }
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Inner Glow */}
      <div 
        className="absolute top-0 right-0 w-[180px] h-[180px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.07) 0%, transparent 65%)" }}
      />

      {/* Image Area */}
      <div 
        className="relative h-[165px] lg:h-[210px] py-[28px] px-[24px] flex items-center justify-center overflow-hidden shrink-0 z-[1]"
        style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(5,15,35,0.5) 100%)", borderRadius: "20px 20px 0 0" }}
      >
        {/* CA Watermark */}
        <div className="absolute bottom-[10px] right-[12px] font-sans text-[10px] font-bold text-red-500/25 tracking-[0.05em] pointer-events-none">
          🍁 CA
        </div>

        {badgeInfo && (
          <div 
            className="absolute top-[12px] left-[12px] px-[11px] py-[4px] rounded-full text-[10px] font-bold font-sans text-white z-[5]"
            style={{ 
              background: badgeInfo.background, 
              boxShadow: "0 2px 10px rgba(0,0,0,0.35)" 
            }}
          >
            {badgeInfo.text}
          </div>
        )}

        {/* Grade A Badge */}
        <div 
          className="absolute top-[12px] right-[12px] px-[8px] py-[3px] rounded-[8px] text-[10px] font-bold font-sans text-green-400 z-[5]"
          style={{ 
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.3)",
            lineHeight: 1,
            transform: isDesktop ? "translateZ(30px)" : "none"
          }}
        >
          Grade A
        </div>

        <motion.img
          src={product.image}
          alt={product.name}
          className="max-h-[125px] lg:max-h-[165px] max-w-[75%] object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
          style={{ transform: isDesktop ? "translateZ(20px)" : "none" }}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.07 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Content Area */}
      <div className="p-[14px] lg:p-[20px] flex flex-col gap-[10px] flex-grow z-[1]" style={{ transform: isDesktop ? "translateZ(10px)" : "none" }}>
        <span className="font-sans text-[10px] font-bold text-blue-400 tracking-[0.10em] uppercase leading-none">
          {product.category}
        </span>
        
        <h3 className="font-space text-[13px] lg:text-[16px] font-bold text-white leading-[1.3] line-clamp-2" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {product.name}
        </h3>
        
        <p className="font-sans text-[11px] lg:text-[12px] font-normal text-white/40 leading-[1.5] whitespace-nowrap overflow-hidden text-ellipsis">
          {product.specs}
        </p>

        {/* Certification Micro-badges */}
        <div className="flex flex-row flex-wrap gap-[6px]">
          {product.certBadges.map((badge, idx) => (
            <div 
              key={idx} 
              className="px-[8px] py-[3px] rounded-[6px] font-sans text-[10px] font-medium text-white/45"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="w-[12px] h-[12px]" 
                fill={star <= product.rating ? "#F59E0B" : "rgba(255,255,255,0.18)"} 
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] text-white/30">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-[8px]">
          <span className="font-space text-[16px] lg:text-[20px] font-extrabold text-white leading-none">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="font-sans text-[13px] text-white/30 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        <div className="font-sans text-[10px] font-medium text-red-500/55 tracking-[0.03em] leading-none mb-1">
          🍁 Sourced from Canada · Zero Local Usage
        </div>

        {/* CTA Button */}
        <motion.a
          href={phoneHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(34,197,94,0.45)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto w-full h-[40px] lg:h-[44px] rounded-[12px] flex items-center justify-center gap-[8px] text-white font-sans text-[13px] font-bold shrink-0"
          style={{ 
            background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
            transition: "all 0.22s ease" 
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon className="w-[15px] h-[15px] text-white" />
          Order via WhatsApp
        </motion.a>
      </div>
    </motion.div>
    </div>
  );
}
