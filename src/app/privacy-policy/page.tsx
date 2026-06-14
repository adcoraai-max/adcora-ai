import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AdcoraAI",
  description: "Read the privacy policy of AdcoraAI to understand how we collect, store, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground">Last Updated: June 15, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <p>
              At AdcoraAI, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information when you use our website, services, or interact with our digital agency.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when contacting us, requesting consultations, or subscribing to our services. This may include your name, email address, phone number, company name, and details of your inquiry.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. How We Use Your Information</h2>
            <p>
              We use your information to deliver and optimize our services, respond to your inquiries, send you technical updates, process payments, and ensure compliance with our security standards and legal obligations.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Data Protection and Security</h2>
            <p>
              We implement industry-standard technical and organizational security measures to safeguard your data. This includes secure data isolation, credential token protection, and routine vulnerability scanning.
            </p>
            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted third-party service providers (such as cloud hosting and database systems) solely to help us operate our business and deliver our services under strict confidentiality terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
