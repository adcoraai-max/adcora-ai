import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | AdcoraAI",
  description: "Read the terms and conditions for working with AdcoraAI and using our software agency services.",
};

export default function TermsConditionsPage() {
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
              Terms and Conditions
            </h1>
            <p className="text-xs text-muted-foreground">Last Updated: June 15, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <p>
              Welcome to AdcoraAI. By accessing or using our website, services, and products, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Use of Services</h2>
            <p>
              AdcoraAI provides AI automation, full-stack development, and digital marketing services. All deliverables, codebases, and systems produced during our engagements are subject to separate service level agreements (SLAs) or project contracts signed between AdcoraAI and the client.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. Intellectual Property</h2>
            <p>
              Unless otherwise specified in a signed contract, all source code, assets, UI designs, and intellectual property created by AdcoraAI remain under the ownership of AdcoraAI until final payment is received and processed, at which point ownership transfers to the client.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Client Obligations</h2>
            <p>
              Clients must provide accurate requirements, necessary API keys, access credentials, and timely feedback during development cycles. AdcoraAI is not liable for project delays caused by client response latencies or missing access permissions.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Limitation of Liability</h2>
            <p>
              AdcoraAI is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software deliverables, including database downtimes, third-party API changes (e.g., Sabre, Amadeus, OpenAI rate limits), or server hacks, beyond the amounts paid under the specific project scope.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
