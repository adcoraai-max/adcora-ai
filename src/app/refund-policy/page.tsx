import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | AdcoraAI",
  description: "Read the refund policy of AdcoraAI to understand under what circumstances refunds may be considered and how they are processed.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

        <div className="page-container space-y-10 relative z-10 text-left">
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Refund Policy
            </h1>
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-white/60">Refund Policy</span>
            </nav>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-xl text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              AdcoraAI is committed to client satisfaction. This Refund Policy explains under what circumstances refunds may be considered and how they are processed.
            </div>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Eligibility for Refunds</h2>
            <p>
              Refunds may be considered in cases where we have failed to deliver the agreed scope of work within the agreed timeline, or where there is a material breach of the service agreement. Each request is reviewed on a case-by-case basis. Refunds are not available for work that has been completed and delivered as per the contract.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. How to Request a Refund</h2>
            <p>
              To request a refund, please send an email to <a href="mailto:connect.adcoraai@gmail.com" className="text-primary hover:underline transition-all">connect.adcoraai@gmail.com</a> with your project reference, reason for the request, and any supporting details. We will acknowledge your request within 3 business days and respond with a decision within 10 business days.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Processing of Refunds</h2>
            <p>
              If a refund is approved, it will be processed using the same method of payment used for the original transaction, unless otherwise agreed. Refunds may take 7–14 business days to reflect in your account, depending on your bank or payment provider.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Disputes</h2>
            <p>
              Any disputes related to refunds shall be governed by the laws of India and subject to the jurisdiction of the courts of Bangalore, Karnataka, India.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">5. Contact</h2>
            <p>For refund-related queries, contact us at:</p>
            <ul className="list-none pl-0 space-y-2">
              <li>📧 <span className="text-white font-semibold">Email:</span>{" "}<a href="mailto:connect.adcoraai@gmail.com" className="text-primary hover:underline transition-all">connect.adcoraai@gmail.com</a></li>
              <li>📞 <span className="text-white font-semibold">Phone:</span>{" "}<a href="https://wa.me/919153765913" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-all">+91 91537 65913</a>{" | "}<a href="tel:+918360607130" className="text-primary hover:underline transition-all">+91 83606 07130</a></li>
            </ul>

            <p className="text-xs text-muted-foreground pt-6 border-t border-white/5 mt-4">
              Last Updated: June 5, 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
