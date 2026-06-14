import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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

        <div className="page-container space-y-10 relative z-10 text-left">
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Terms and Conditions
            </h1>
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-white/60">Terms and Conditions</span>
            </nav>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-xl text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
              <p className="mb-2">
                Welcome to AdcoraAI. These Terms and Conditions outline the general principles and practices that govern all interactions, services, and relationships with our clients and visitors.
              </p>
              <p className="m-0">
                By accessing our website or engaging with any of our services, you agree to the following terms:
              </p>
            </div>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Services</h2>
            <p>
              All services are subject to mutual agreement via proposals, quotations, or contracts. Deliverables, timelines, and costs will be outlined prior to commencement. Work begins only after receipt of required information and any advance payment.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. Payment & Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment terms will be specified in invoices or proposals.</li>
              <li>Some services may require upfront payments or milestones.</li>
              <li>We accept payments through authorized payment gateways.</li>
              <li>Late payments may attract penalties or suspension of services.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Refunds & Cancellations</h2>
            <p>
              Refunds and cancellations are subject to our <Link href="/cancellation-policy" className="text-secondary hover:underline transition-all font-semibold">Cancellation & Refund Policy</Link>. Clients are encouraged to review the policy before making payments.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Client Responsibilities</h2>
            <p>Clients must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, timely information and approvals.</li>
              <li>Ensure all materials shared (logos, content, data) are legally owned or licensed.</li>
              <li>Settle invoices within agreed timelines.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ownership of final deliverables is transferred upon full payment.</li>
              <li>We retain rights to showcase non-confidential work in our portfolio.</li>
              <li>Third-party licenses remain bound by their own terms.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">6. Confidentiality</h2>
            <p>
              All proprietary client information will be treated confidentially and not disclosed without consent, except as required by law.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">7. Limitation of Liability</h2>
            <p>AdcoraAI is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delays or failures beyond our control (hosting, third-party APIs, payment gateways).</li>
              <li>Losses caused by misuse, client delays, or third-party service failures.</li>
              <li>Any indirect, incidental, or consequential damages.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">8. Termination of Services</h2>
            <p>We may suspend or terminate services if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments are not made as agreed.</li>
              <li>There is a breach of terms.</li>
              <li>There is misuse of services or unethical conduct.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">9. Governing Law & Dispute Resolution</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Bangalore, Karnataka, India.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">10. Updates</h2>
            <p>
              We may revise these Terms periodically. Updated versions will be posted on our website with the effective date.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">11. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please feel free to contact us:</p>
            <ul className="list-none pl-0 space-y-2">
              <li><span className="text-white font-semibold">Email:</span>{" "}<a href="mailto:connect.adcoraai@gmail.com" className="text-primary hover:underline transition-all">connect.adcoraai@gmail.com</a></li>
              <li><span className="text-white font-semibold">Phone:</span>{" "}<a href="https://wa.me/919153765913" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-all">+91 91537 65913</a>{" | "}<a href="tel:+918360607130" className="text-primary hover:underline transition-all">+91 83606 07130</a></li>
              <li><span className="text-white font-semibold">Website:</span>{" "}<a href="https://adcoraai.com" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-all">https://adcoraai.com</a></li>
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
