import type { Metadata } from "next";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page page-shell" id="page-content">
        <p className="eyebrow eyebrow-orange">Happy Healthy Wealthy</p>
        <h1>Privacy policy</h1>
        <p className="legal-updated">Last updated: September 1, 2026</p>
        <h2>Information we collect</h2>
        <p>We collect information you voluntarily submit through application and contact forms. This may include your name, contact details, location, recovery history, current treatment status, goals, readiness for coaching, referral source, and message content. Campaign and referral data may be recorded so H2W can understand how visitors found the website. Basic technical data may also be processed by our hosting provider to operate and secure the website.</p>
        <h2>How information is used</h2>
        <p>Submitted information is used to review coaching applications, assess whether a Recovery Strategy Call may be appropriate, respond to inquiries, coordinate scheduling, measure campaign effectiveness, and operate Happy Healthy Wealthy. We do not sell personal information.</p>
        <h2>Health-related information</h2>
        <p>Application answers may contain sensitive health-related information. H2W uses this information only for application review, communication, and the coaching inquiry process. The website form is not intended for medical records, emergency information, or detailed diagnostic documentation.</p>
        <h2>Service providers</h2>
        <p>Information may be processed by providers used for website hosting, form delivery, scheduling, and communication. Their own policies govern their handling of data.</p>
        <h2>Your choices</h2>
        <p>You may request access, correction, or deletion of information you submitted by using the contact form on this website. Some records may be retained when required for security, legal, or operational reasons.</p>
        <h2>Security and retention</h2>
        <p>H2W uses reasonable service-provider and technical safeguards, but no online transmission or storage method can be guaranteed completely secure. Information is retained only as long as reasonably needed for the purposes described above or applicable obligations.</p>
        <h2>Important note</h2>
        <p>Do not submit emergency or highly sensitive medical information through this website. The application and contact forms do not create a doctor-patient relationship.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
