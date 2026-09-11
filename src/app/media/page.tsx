import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Check, Mic2, Presentation, Radio } from "lucide-react";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Media & Speaking",
  description: "Invite Dr. Moe for interviews, podcasts, panels, and speaking engagements.",
};

const formats: Array<[LucideIcon, string, string]> = [
  [Mic2, "Podcast & interview", "Thoughtful, candid conversations shaped for the audience in front of her."],
  [Presentation, "Keynote & workshop", "Practical ideas that connect wellbeing, performance, purpose, and sustainable success."],
  [Radio, "Panel & media", "A clear, human perspective on complex health and whole-life questions."],
];

export default function MediaPage() {
  return (
    <main className="secondary-page media-page">
      <SiteHeader />
      <PageHero
        eyebrow="Media & speaking"
        title="A conversation people carry with them."
        copy="Invite Dr. Moe to bring clarity, curiosity, and a whole-person perspective to your audience."
        image="/images/dr-moe-portrait-blazer.webp"
        imageAlt="Dr. Moe"
        imagePosition="right bottom"
        imageFit="contain"
        action={{ href: "/contact", label: "Start an inquiry" }}
      />

      <section className="section section-light media-intro">
        <div className="page-shell editorial-grid">
          <div><p className="eyebrow">For thoughtful audiences</p><h2>Big ideas without the distance.</h2></div>
          <div className="editorial-copy">
            <p className="lead">Dr. Moe combines clinical perspective, educator&apos;s clarity, and interviewer&apos;s curiosity.</p>
            <p>Her strongest conversations challenge the audience to think across categories: how biology influences behavior, how definitions of success affect health, and why sustainable change requires a wider lens.</p>
          </div>
        </div>
      </section>

      <section className="section format-section">
        <div className="page-shell">
          <div className="center-heading"><p className="eyebrow eyebrow-orange">Engagement formats</p><h2>Built around the room.</h2></div>
          <div className="format-grid">
            {formats.map(([ItemIcon, title, copy]) => {
              return <article key={title}><ItemIcon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-light topic-section">
        <div className="page-shell topic-layout">
          <div><p className="eyebrow">Conversation territories</p><h2>Topics that connect.</h2></div>
          <ul className="check-list large">
            <li><Check aria-hidden="true" /> Why health, happiness, and wealth cannot be optimized separately</li>
            <li><Check aria-hidden="true" /> Turning complex health information into useful personal decisions</li>
            <li><Check aria-hidden="true" /> The hidden costs of high performance and fragmented success</li>
            <li><Check aria-hidden="true" /> Better questions for sustainable behavior change</li>
            <li><Check aria-hidden="true" /> Additional topics shaped in collaboration with the host or organizer</li>
          </ul>
        </div>
      </section>

      <section className="section media-cta">
        <div className="page-shell media-cta-grid">
          <div><p className="eyebrow eyebrow-orange">Invite Dr. Moe</p><h2>Tell us about your audience and event.</h2></div>
          <div>
            <p>Share the format, timing, audience, and the conversation you want to create. The H2W team will follow up with availability and next steps.</p>
            <Link className="button button-light" href="/contact">Start a media inquiry <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
