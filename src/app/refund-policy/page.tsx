import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | AdcoraAI",
  description: "Read the refund policy regarding service deposits, monthly retainers, and completed code milestones.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

        <div className="page-container max-w-4xl space-y-8 relative z-10 text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">COMPLIANCE</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Refund Policy
            </h1>
            <p className="text-xs text-muted-foreground">Last Updated: June 15, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <p>
              Thank you for partnering with AdcoraAI. This Refund Policy describes the terms under which refunds may be requested or processed for our custom digital solutions.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Custom Software & Engineering Services</h2>
            <p>
              Due to the nature of custom software engineering, resources deployed, and dedicated design sprints, payments made for completed milestones, features, or design layouts are non-refundable. 
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. Retainer and Maintenance Billing</h2>
            <p>
              Charges for monthly recurring support or server maintenance retainers are billed in advance and are non-refundable. If you cancel your subscription retainer, you will not be refunded for the remaining days of the current billing cycle.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Disputed Work</h2>
            <p>
              If there is a dispute regarding the quality or scope of a deliverable, AdcoraAI will work in good faith to resolve the issue through code adjustments, bug fixes, or revisions, in accordance with the specifications outlined in the project agreement.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
