import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | AdcoraAI",
  description: "Read the cancellation and refund policy of AdcoraAI for IT and digital solutions services.",
};

export default function CancellationPolicyPage() {
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
              Cancellation & Refund Policy
            </h1>
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-white/60">Cancellation & Refund Policy</span>
            </nav>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-xl text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              At AdcoraAI, we aim to deliver high-quality IT and digital solutions. This policy outlines how cancellations and refunds are handled.
            </div>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Service Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients may request cancellation of services by writing to <a href="mailto:connect.adcoraai@gmail.com" className="text-primary hover:underline transition-all">connect.adcoraai@gmail.com</a>.</li>
              <li>Cancellations are subject to review depending on project stage and resource allocation.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. Refund Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-white font-semibold">Advance Payments / Deposits</span> are non-refundable once the project has commenced.</li>
              <li><span className="text-white font-semibold">Milestone Payments</span> are refundable only if the work corresponding to that milestone has not started.</li>
              <li><span className="text-white font-semibold">Completed Services</span> are non-refundable.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Refund Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds, if applicable, will be processed within 7–10 business days to the original payment method.</li>
              <li>Transaction charges deducted by payment gateways or banks are non-refundable.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Exceptions</h2>
            <p>No refunds will be issued in cases of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client delays in communication or approvals.</li>
              <li>Change of mind after project commencement.</li>
              <li>Third-party service issues (e.g., hosting, domain providers, payment gateway failures).</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">5. Contact for Cancellations / Refunds</h2>
            <p>For assistance, please contact:</p>
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
