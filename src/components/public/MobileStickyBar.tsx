"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the bar only after user has scrolled 300px
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,11,0.98) 60%, transparent)",
          }}
        >
          <div className="flex items-center gap-3 max-w-sm mx-auto">
            {/* Call button */}
            <a
              href="tel:+919153765913"
              id="mobile-sticky-call-btn"
              aria-label="Call AdcoraAI"
              className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-2xl border border-white/10 bg-white/[0.07] text-white text-sm font-semibold backdrop-blur-md active:scale-95 transition-transform"
            >
              <Phone className="h-4 w-4 text-primary" />
              Call Us
            </a>

            {/* Get a Quote button */}
            <Link
              href="/contact"
              id="mobile-sticky-quote-btn"
              aria-label="Get a free quote from AdcoraAI"
              className="flex items-center justify-center gap-2 flex-[2] py-3.5 rounded-2xl text-sm font-bold text-white active:scale-95 transition-transform"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.35)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Get a Free Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
