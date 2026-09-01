import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { CtaBand } from "../cta-band";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "About Dr. Moe",
  description: "Meet Dr. Moe and discover the perspective behind Happy Healthy Wealthy.",
};

const principles = [
  ["Ask better questions", "Useful change starts by challenging assumptions and understanding what is actually connected."],
  ["Translate the science", "Complex ideas only matter when they become clear enough to use in everyday decisions."],
  ["Respect the whole person", "A strategy should account for biology, mindset, relationships, work, purpose, and real constraints."],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About Dr. Moe"
        title="A wider lens on what makes life work."
        copy="Clinician, educator, interviewer, and relentless student of the systems that shape how people feel and live."
        image="/images/dr-moe-about-v2.png"
        imageAlt="Dr. Moe"
        imagePosition="70% 30%"
      />

      <section className="section section-light editorial-section">
        <div className="page-shell editorial-grid">
          <div>
            <p className="eyebrow">Why H2W exists</p>
            <h2>People are not a collection of separate problems.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">For more than two decades, Dr. Moe has worked where health information meets the complexity of a real human life.</p>
            <p>That perspective revealed a recurring pattern: people often receive fragmented answers to connected questions. They may improve one metric while losing energy, success while losing meaning, or gather more information without gaining direction.</p>
            <p>Happy Healthy Wealthy was created to widen the conversation. It brings together science, lived experience, practical strategy, and candid dialogue so people can make more coherent decisions about the life they are building.</p>
          </div>
        </div>
      </section>

      <section className="section principle-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">The operating principles</p><h2>Rigorous. Human. Useful.</h2></div>
            <p>H2W is grounded in curiosity without hype and practical action without oversimplifying the person.</p>
          </div>
          <div className="principle-grid">
            {principles.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light origin-section">
        <div className="page-shell origin-grid">
          <div className="origin-image">
            <Image src="/images/dr-moe-hero.png" alt="Dr. Moe in conversation" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div>
            <p className="eyebrow">Experience in context</p>
            <h2>Clinical roots. A bigger conversation.</h2>
            <p>Dr. Moe&apos;s background informs H2W, but H2W is broader than a clinic. The podcast and coaching work explore the decisions, environments, beliefs, and relationships that shape wellbeing over time.</p>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> More than two decades of client-facing perspective</li>
              <li><Check aria-hidden="true" /> Experience translating technical ideas for real people</li>
              <li><Check aria-hidden="true" /> A cross-disciplinary approach to health and performance</li>
              <li><Check aria-hidden="true" /> Founder of Moe Bodyworks</li>
            </ul>
            <a className="text-link" href="https://moebodyworks.com" target="_blank" rel="noreferrer">
              Visit the clinical practice <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section next-paths">
        <div className="page-shell">
          <p className="eyebrow eyebrow-orange">Choose your next path</p>
          <div className="path-grid">
            <Link href="/podcast"><span>Listen & learn</span><h3>Explore the podcast</h3><ArrowRight aria-hidden="true" /></Link>
            <Link href="/work-with-dr-moe"><span>Go deeper</span><h3>Work with Dr. Moe</h3><ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
