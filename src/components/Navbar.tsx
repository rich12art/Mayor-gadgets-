import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsApp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Products", "About", "Why Us", "Contact"];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        initial="top"
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: {
            backgroundColor: "rgba(4, 8, 18, 0)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            borderBottom: "1px solid rgba(255,255,255,0)",
            boxShadow: "none",
          },
          scrolled: {
            backgroundColor: "rgba(4, 8, 18, 0.80)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.45)",
          }
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="w-full max-w-[1280px] h-[64px] md:h-[72px] px-5 md:px-[48px] flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col md:flex-row md:items-baseline md:gap-3 cursor-pointer group"
          >
            <div className="flex items-center text-[18px] md:text-[21px] font-space font-extrabold" style={{ textShadow: "0 0 24px rgba(96,165,250,0.35)" }}>
              <span className="text-white">Mayor&nbsp;</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Gadgets
              </span>
            </div>
            <div className="text-[9px] font-sans font-semibold text-white/50 tracking-[0.06em] uppercase mt-[-2px] md:mt-0">
              🍁 Canada Sourced
            </div>
          </motion.a>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="relative font-sans text-[14px] font-medium tracking-[0.02em] text-white/65 hover:text-white transition-colors duration-200 py-2"
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
                {/* Active/Hover Line */}
                {(hoveredLink === link || link === "Home") && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ originX: 0.5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Canada Pill */}
            <div className="hidden md:flex items-center px-3 py-[5px] rounded-full border border-red-500/25 bg-red-500/10 text-red-200/80 font-sans text-[11px] font-medium pointer-events-none">
              🍁 Direct from Canada
            </div>

            {/* Desktop WhatsApp CTA */}
            <motion.a
              href="https://wa.me/2349150480142"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(34, 197, 94, 0.5)", filter: "brightness(1.08)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="hidden md:flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-700 text-white px-[22px] py-[10px] rounded-full font-sans font-bold text-[13px] border-none cursor-pointer"
            >
              <WhatsAppIcon className="w-[15px] h-[15px] text-white" />
              Order on WhatsApp
            </motion.a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center text-white p-2"
            >
              <Menu className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col justify-center px-8"
            style={{ backgroundColor: "rgba(4, 8, 20, 0.97)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-opacity"
            >
              <X className="w-[28px] h-[28px]" />
            </button>

            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center gap-[36px] mb-10 w-full text-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    className="font-sans text-[26px] font-bold text-white tracking-wide"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + navLinks.length * 0.08 }}
                className="w-[60%] border-t border-white/10 my-6"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.08 }}
                className="flex flex-col items-center w-full"
              >
                <div className="font-sans text-[12px] text-white/40 mb-6 text-center">
                  🍁 Sourced Directly from Canada
                </div>

                <a
                  href="https://wa.me/2349150480142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-green-500 to-green-700 text-white w-[85%] h-[52px] rounded-[14px] font-sans font-bold text-[15px]"
                >
                  <WhatsAppIcon className="w-[15px] h-[15px] text-white" />
                  Order on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
