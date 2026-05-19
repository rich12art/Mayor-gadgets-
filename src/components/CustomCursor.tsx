import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
    const [isTouch, setIsTouch] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isWhatsApp, setIsWhatsApp] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (!('ontouchstart' in window) && !window.matchMedia('(pointer: coarse)').matches) {
            setIsTouch(false);
        }

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            const clickable = target.closest('a, button, [data-cursor="pointer"]');
            setIsHovering(!!clickable);

            const isWa = target.closest('a[href*="wa.me"]');
            setIsWhatsApp(!!isWa);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    let ringSize = 36;
    let ringBg = 'transparent';
    let ringBorder = 'rgba(255,255,255,0.4)';
    let ringBlur = '0px';
    let ringShadow = 'none';

    if (isHovering && !isWhatsApp) {
        ringSize = 64;
        ringBorder = 'rgba(34,197,94,0.7)';
        ringBg = 'rgba(34,197,94,0.06)';
        ringBlur = '4px';
    } else if (isWhatsApp) {
        ringSize = 80;
        ringBorder = 'rgba(34,197,94,1.0)';
        ringBg = 'rgba(34,197,94,0.10)';
        ringShadow = '0 0 20px rgba(34,197,94,0.3)';
    }

    if (isClicking) {
        ringSize = 28;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering || isWhatsApp ? 0 : 1,
                    opacity: isHovering || isWhatsApp ? 0 : 1
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: ringSize,
                    height: ringSize,
                    background: ringBg,
                    border: `1.5px solid ${ringBorder}`,
                    boxShadow: ringShadow,
                    backdropFilter: `blur(${ringBlur})`,
                    WebkitBackdropFilter: `blur(${ringBlur})`
                }}
                animate={{
                    width: ringSize,
                    height: ringSize,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                {isWhatsApp && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white text-[10px] font-bold"
                    >
                        TAP
                    </motion.span>
                )}
            </motion.div>
        </>
    );
};
