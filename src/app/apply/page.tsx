import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { ApplicationForm } from "./application-form";

export const metadata: Metadata = {
  title: "Apply for a Strategy Session",
  description:
    "Apply for a complimentary Happy Healthy Wealthy strategy session with Dr. Moe.",
};

export default function ApplyPage() {
  return (
    <main className="application-page">
      <header className="application-header page-shell">
        <Link href="/" aria-label="Happy Healthy Wealthy home">
          <Image
            src="/logos/h2w-horizontal.png"
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

      <div className="application-shell page-shell">
        <aside className="application-intro">
          <p className="eyebrow eyebrow-orange">Complimentary strategy session</p>
          <h1>Let&apos;s find your next best step.</h1>
          <p>
            This short application helps Dr. Moe understand where you are, what you want to change,
            and whether an H2W strategy session is the right next move.
          </p>
          <ul>
            <li><Check aria-hidden="true" size={18} /> Takes about five minutes</li>
            <li><Check aria-hidden="true" size={18} /> Your information stays private</li>
            <li><Check aria-hidden="true" size={18} /> No obligation or pressure</li>
          </ul>
        </aside>
        <ApplicationForm />
      </div>
    </main>
  );
}
