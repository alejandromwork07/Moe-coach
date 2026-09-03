import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <main className="secondary-page legal-shell">
      <SiteHeader />
      <article className="legal-page page-shell" id="page-content">
        <p className="eyebrow eyebrow-orange">Happy Healthy Wealthy</p>
        <h1>Terms of use</h1>
        <p className="legal-updated">Last updated: September 3, 2026</p>

        <h2>Acceptance of these terms</h2>
        <p>By using this website or submitting a form, you agree to these terms and acknowledge our Privacy Policy and Educational Disclaimer. If you do not agree, do not use the website or submit information.</p>

        <h2>Educational and coaching scope</h2>
        <p>Happy Healthy Wealthy provides educational content and coaching-oriented services. Website content, podcast material, applications, and introductory calls do not provide diagnosis, treatment, emergency care, or individualized advice from a licensed medical, mental-health, legal, tax, or financial professional.</p>

        <h2>Applications and program participation</h2>
        <p>Submitting an application does not create a doctor-patient relationship, guarantee a call, or guarantee acceptance into a coaching program. Program scope, fees, scheduling, communication expectations, and cancellation terms will be provided separately before enrollment.</p>

        <h2>Medical and emergency needs</h2>
        <p>Do not use this website or H2W messaging for urgent concerns. Contact your licensed treating provider or local emergency services when immediate care is needed. Continue recommended care and medical follow-up regardless of any H2W content or coaching activity.</p>

        <h2>Separate clinical services</h2>
        <p>Clinical services offered through Moe Bodyworks are separate from H2W coaching and follow their own intake, consent, eligibility, and scheduling processes.</p>

        <h2>Intellectual property</h2>
        <p>Unless otherwise identified, H2W website copy, podcast material, graphics, frameworks, and resources are owned by or licensed to Happy Healthy Wealthy. They may not be republished, sold, or presented as your own without written permission.</p>

        <h2>Third-party services</h2>
        <p>This website may link to scheduling, podcast, laboratory, clinic, or other third-party services. H2W is not responsible for their availability, content, or privacy practices.</p>

        <h2>Questions</h2>
        <p>Questions about these terms may be submitted through the <Link className="legal-link" href="/contact">H2W contact page</Link>.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
