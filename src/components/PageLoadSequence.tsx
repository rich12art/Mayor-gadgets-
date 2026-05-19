import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const PageLoadSequence = ({ children }: { children: React.ReactNode }) => {
    const [hasPlayed, setHasPlayed] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const played = sessionStorage.getItem("mayorGadgetsIntroPlayed");
        if (!played) {
            setHasPlayed(false);
            sessionStorage.setItem("mayorGadgetsIntroPlayed", "true");
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 1500);
        }
    }, []);

    if (!isClient) return <>{children}</>;
    if (hasPlayed) return <>{children}</>;

    return (
        <motion.div
            initial={{ opacity: 0, backgroundColor: "#020508" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-[#020508]"
        >
            {children}
        </motion.div>
    );
};
