import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Cancellation Policy | AdcoraAI",
  description: "Read the cancellation policy regarding project scopes, services, and subscription cancellations.",
};

export default function CancellationPolicyPage() {
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
              Cancellation Policy
            </h1>
            <p className="text-xs text-muted-foreground">Last Updated: June 15, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <p>
              This Cancellation Policy describes the terms and procedures for cancelling project scopes, consultation bookings, and recurring support retainers with AdcoraAI.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Project Development Scope</h2>
            <p>
              Once a project scope is signed and the initial deposit (downpayment) is processed, cancellation requests must be submitted in writing. Upon cancellation, the client will be billed for all engineering hours, assets modeled, and design sprints completed up to the date of receipt of the written notice.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. Consultation Bookings</h2>
            <p>
              Free and paid consultations can be rescheduled or cancelled up to 24 hours prior to the scheduled meeting time. Cancellations made less than 24 hours in advance may be subject to rescheduling limits or consultation fee forfeitures.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Retainer and Support Plans</h2>
            <p>
              Monthly recurring support, server maintenance, or developer retainer plans can be cancelled by providing at least 15 days written notice before the next billing cycle. Support services will continue until the end of the paid billing period.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
