import type { Metadata } from "next";
import { Clock3, MessageSquareText } from "lucide-react";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Happy Healthy Wealthy about the podcast, speaking, partnerships, or general questions.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact H2W"
        title="Start the right conversation."
        copy="Questions, podcast ideas, speaking invitations, and thoughtful partnerships all begin here."
        image="/images/dr-moe-resources-v1.png"
        imageAlt="Dr. Moe at her desk"
        imagePosition="left center"
      />
      <section className="section section-light contact-section">
        <div className="page-shell contact-grid">
          <aside>
            <p className="eyebrow">Send an inquiry</p>
            <h2>Give us enough context to be useful.</h2>
            <p>Select the closest inquiry type and share the relevant details. For a complimentary strategy session, please use the dedicated application instead.</p>
            <div className="contact-notes">
              <span><MessageSquareText aria-hidden="true" /><strong>Specific is helpful</strong>Include dates, audience, format, or goals when relevant.</span>
              <span><Clock3 aria-hidden="true" /><strong>Response timing</strong>The H2W team will respond as availability allows.</span>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
