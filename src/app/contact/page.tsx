import type { Metadata } from "next";
import { Clock3, Mail, MessageSquareText } from "lucide-react";
import { getContactEmail } from "@/lib/site-config";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Happy Healthy Wealthy about the podcast, speaking, partnerships, or general questions.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initialType = ["podcast", "media", "coaching", "partnership"].includes(type ?? "") ? type : "";
  const contactEmail = getContactEmail();

  return (
    <main className="secondary-page contact-page">
      <SiteHeader />
      <PageHero
        eyebrow="Contact H2W"
        title="Start the right conversation."
        copy="Questions, podcast ideas, speaking invitations, and thoughtful partnerships all begin here."
        image="/images/dr-moe-portrait-black-top.webp"
        imageAlt="Dr. Moe"
        imagePosition="left bottom"
        imageFit="contain"
        align="right"
      />
      <section className="section section-light contact-section">
        <div className="page-shell contact-grid">
          <aside>
            <p className="eyebrow">Send an inquiry</p>
            <h2>Give us enough context to be useful.</h2>
            <p>Select the closest inquiry type and share the relevant details. To request a complimentary H2W Fit Call, please use the dedicated coaching application instead.</p>
            <div className="contact-notes">
              <span><MessageSquareText aria-hidden="true" /><strong>Specific is helpful</strong>Include dates, audience, format, or goals when relevant.</span>
              <span><Clock3 aria-hidden="true" /><strong>Response timing</strong>The H2W team will respond as availability allows.</span>
            </div>
            {contactEmail ? (
              <a className="contact-email" href={`mailto:${contactEmail}`}>
                <Mail aria-hidden="true" size={18} />
                <span><strong>Email H2W directly</strong>{contactEmail}</span>
              </a>
            ) : null}
          </aside>
          <ContactForm initialType={initialType} contactEmail={contactEmail} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
