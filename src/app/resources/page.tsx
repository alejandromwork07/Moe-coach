import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, HeartPulse, Landmark, PlayCircle } from "lucide-react";
import { CtaBand } from "../cta-band";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical Happy Healthy Wealthy ideas for health, mindset, purpose, and freedom.",
};

const tracks: Array<[LucideIcon, string, string, string]> = [
  [HeartPulse, "Health foundations", "Energy, recovery, physiology, and the habits that support a capable body.", "Healthy"],
  [Brain, "Mindset & meaning", "Identity, emotional wellbeing, relationships, purpose, and personal agency.", "Happy"],
  [Landmark, "Work & freedom", "Time, resources, leadership, wealth, and building success without losing yourself.", "Wealthy"],
];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="H2W resources"
        title="Ideas become valuable when they change a decision."
        copy="A growing collection of practical frameworks, thoughtful questions, and evidence-aware guidance for a more connected life."
        image="/images/dr-moe-resources-v1.webp"
        imageAlt="Dr. Moe reviewing research and notes"
        imagePosition="center"
      />

      <section className="section section-light resource-intro">
        <div className="page-shell editorial-grid">
          <div><p className="eyebrow">The resource library</p><h2>Less content to consume. More insight to use.</h2></div>
          <div className="editorial-copy">
            <p className="lead">H2W resources are designed to help you connect information to your own context.</p>
            <p>The library will grow alongside the podcast with concise guides, conversation notes, reflection prompts, and frameworks across the Happy, Healthy, and Wealthy dimensions.</p>
          </div>
        </div>
      </section>

      <section className="section resource-tracks">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">Explore by dimension</p><h2>Start where the friction is. Follow the connections.</h2></div>
            <p>Every track stands on its own, but the most useful insights often live where two or more intersect.</p>
          </div>
          <div className="track-grid">
            {tracks.map(([ItemIcon, title, copy, label]) => {
              return (
                <article key={title}>
                  <ItemIcon aria-hidden="true" />
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <small>Resources coming with season one</small>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light featured-resource">
        <div className="page-shell featured-resource-grid">
          <div className="resource-mark"><BookOpen aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">Start here</p>
            <h2>The better-question practice.</h2>
            <p>Before solving a problem, ask: what else does this affect, what might be driving it, and what would sustainable progress look like in the rest of my life?</p>
          </div>
          <Link className="button button-primary" href="/podcast"><PlayCircle aria-hidden="true" size={18} /> Explore the podcast</Link>
        </div>
      </section>

      <section className="section resource-coming">
        <div className="page-shell center-heading">
          <p className="eyebrow eyebrow-orange">Building with intention</p>
          <h2>New resources are coming.</h2>
          <p>Episode notes and original H2W guides will be published here as they are completed and reviewed.</p>
          <Link className="text-link text-link-light" href="/contact">Ask a question for Dr. Moe <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
