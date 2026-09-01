import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CirclePlay, Mic2, Video } from "lucide-react";
import { CtaBand } from "../cta-band";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Explore Happy Healthy Wealthy conversations with Dr. Moe.",
};

const topics = [
  ["The body", "Health, energy, recovery, and the science that helps us understand ourselves."],
  ["The inner life", "Mindset, identity, relationships, resilience, meaning, and the courage to change."],
  ["The outer life", "Work, money, leadership, freedom, and designing success that is worth having."],
];

export default function PodcastPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="The Happy Healthy Wealthy podcast"
        title="Better questions change what becomes possible."
        copy="Dr. Moe sits down with remarkable people to explore the ideas, evidence, and lived experiences behind an extraordinary life."
        image="/images/h2w-podcast-studio-v2.png"
        imageAlt="Dr. Moe in the Happy Healthy Wealthy podcast studio"
        imagePosition="right center"
      />

      <section className="section section-light show-intro">
        <div className="page-shell show-grid">
          <Image src="/images/dr-moe-podcast.png" alt="Happy Healthy Wealthy podcast cover" width={560} height={560} />
          <div>
            <p className="eyebrow">The premise</p>
            <h2>No single discipline has the whole answer.</h2>
            <p>The show creates room for rigorous ideas and honest stories to meet. Expect conversations that cross categories, resist easy slogans, and leave you with a more useful question to carry into your own life.</p>
            <div className="platform-row" aria-label="Podcast platforms">
              <span><Video aria-hidden="true" /> YouTube coming soon</span>
              <span><CirclePlay aria-hidden="true" /> Audio platforms coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section podcast-topics">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">What we explore</p><h2>One show. The whole human experience.</h2></div>
            <p>Each conversation connects a specific topic to the larger life it influences.</p>
          </div>
          <div className="topic-grid">
            {topics.map(([title, copy], index) => (
              <article key={title}><Mic2 aria-hidden="true" /><span>Series 0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light episode-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow">Latest conversations</p><h2>The first episodes are on their way.</h2></div>
            <p>Verified episode titles and platform links will appear here as the show launches.</p>
          </div>
          <div className="episode-placeholder">
            <span>Season one</span><h3>Launch lineup coming soon</h3>
            <p>Research, health, performance, entrepreneurship, and remarkable personal stories.</p>
          </div>
        </div>
      </section>

      <section className="section guest-band">
        <div className="page-shell guest-grid">
          <div><p className="eyebrow eyebrow-orange">Know a remarkable voice?</p><h2>Suggest a guest or story.</h2></div>
          <div><p>H2W is interested in thoughtful experts, unconventional insight, and lived experiences that can help people see differently.</p>
            <Link className="button button-light" href="/contact?type=podcast">Start a podcast inquiry <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Turn insight into your next move" title="Listening can open a door. Strategy helps you walk through it." />
      <SiteFooter />
    </main>
  );
}
