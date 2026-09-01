import type { Metadata } from "next";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page page-shell">
        <p className="eyebrow eyebrow-orange">Happy Healthy Wealthy</p>
        <h1>Privacy policy</h1>
        <p className="legal-updated">Last updated: September 1, 2026</p>
        <h2>Information we collect</h2>
        <p>We collect information you voluntarily submit through application and contact forms, including your name, contact details, goals, and message content. Basic technical data may also be processed by our hosting provider to operate and secure the website.</p>
        <h2>How information is used</h2>
        <p>Submitted information is used to review strategy-session applications, respond to inquiries, coordinate scheduling, and operate Happy Healthy Wealthy. We do not sell personal information.</p>
        <h2>Service providers</h2>
        <p>Information may be processed by providers used for website hosting, form delivery, scheduling, and communication. Their own policies govern their handling of data.</p>
        <h2>Your choices</h2>
        <p>You may request access, correction, or deletion of information you submitted by using the contact form on this website. Some records may be retained when required for security, legal, or operational reasons.</p>
        <h2>Important note</h2>
        <p>Do not submit emergency or highly sensitive medical information through this website. The application and contact forms do not create a doctor-patient relationship.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
