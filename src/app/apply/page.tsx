import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { getContactEmail } from "@/lib/site-config";
import { ApplicationForm } from "./application-form";

export const metadata: Metadata = {
  title: "H2W Coaching Application",
  description:
    "Apply for a complimentary 30-minute H2W Fit Call with Dr. Moe.",
  robots: { index: false, follow: false },
};

export default function ApplyPage() {
  const contactEmail = getContactEmail();

  return (
    <main className="secondary-page application-page">
      <a className="skip-link" href="#page-content">Skip to application</a>
      <header className="application-header page-shell">
        <Link href="/" aria-label="Happy Healthy Wealthy home">
          <Image
            src="/logos/h2w-horizontal.webp"
            alt="H2W Happy Healthy Wealthy"
            width={210}
            height={140}
            priority
          />
        </Link>
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" size={17} /> Back to H2W
        </Link>
      </header>

      <div className="application-shell page-shell" id="page-content">
        <aside className="application-intro">
          <p className="eyebrow eyebrow-orange">H2W coaching application</p>
          <h1>Let&apos;s understand where you are now.</h1>
          <p>
            This application helps Dr. Moe understand your health and life right now, what you
            want to change, and whether H2W coaching may be an appropriate next step.
          </p>
          <ul>
            <li><Check aria-hidden="true" size={18} /> Three clear, mobile-friendly steps</li>
            <li><Check aria-hidden="true" size={18} /> Reviewed before your 30-minute H2W Fit Call</li>
            <li><Check aria-hidden="true" size={18} /> No obligation or guaranteed acceptance</li>
          </ul>
        </aside>
        <ApplicationForm contactEmail={contactEmail} />
      </div>
    </main>
  );
}
