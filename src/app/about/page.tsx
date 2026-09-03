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
  description: "Meet Dr. Moe Sarah Smith, a Doctor of Chiropractic, functional-medicine and nutrition clinician, educator, and founder of Happy Healthy Wealthy.",
};

const principles = [
  ["Ask better questions", "Useful change starts by challenging assumptions and understanding what is actually connected."],
  ["Translate the science", "Complex ideas only matter when they become clear enough to use in everyday decisions."],
  ["Respect the whole person", "A strategy should account for biology, mindset, relationships, work, purpose, and real constraints."],
];

export default function AboutPage() {
  return (
    <main className="secondary-page about-page">
      <SiteHeader />
      <PageHero
        eyebrow="About Dr. Moe"
        title="Clinical experience. Clear decisions. A whole-person view."
        copy="Dr. Moe Sarah Smith is a Doctor of Chiropractic, functional-medicine and nutrition clinician, educator, and founder of Moe Bodyworks."
        image="/images/dr-moe-about-v2.webp"
        imageAlt="Dr. Moe Sarah Smith"
        imagePosition="70% 30%"
      />

      <section className="section section-light editorial-section">
        <div className="page-shell editorial-grid">
          <div>
            <p className="eyebrow">Meet Dr. Moe</p>
            <h2>Experience matters when your health story is complicated.</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead">For more than 22 years, Dr. Moe has worked directly with people navigating pain, fatigue, injury, metabolic challenges, complicated health histories, and the distance between being &ldquo;not sick&rdquo; and actually feeling well.</p>
            <p>Her work combines clinical experience, individualized laboratory insights, nutrition, recovery strategy, movement, and practical coaching. She has also spent years teaching anatomy and clinical concepts in higher education, giving her a rare ability to translate complicated science into clear decisions people can use.</p>
            <p>Happy Healthy Wealthy is the next evolution of that work: helping people understand what may be keeping them stuck, rebuild their health, and reclaim the parts of life that poor health has taken away.</p>
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
            <Image src="/images/dr-moe-hero.webp" alt="Dr. Moe in conversation" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
          <div>
            <p className="eyebrow">Experience in context</p>
            <h2>Clinical roots. A distinct coaching path.</h2>
            <p>Dr. Moe&apos;s clinical experience informs the H2W perspective, but H2W coaching is not medical treatment. Clinical services are handled separately through Moe Bodyworks and the appropriate clinical process.</p>
            <ul className="check-list">
              <li><Check aria-hidden="true" /> Doctor of Chiropractic</li>
              <li><Check aria-hidden="true" /> More than 22 years in clinical practice</li>
              <li><Check aria-hidden="true" /> Functional medicine, nutrition, and individualized laboratory assessment</li>
              <li><Check aria-hidden="true" /> Former higher-education anatomy and clinical educator</li>
              <li><Check aria-hidden="true" /> Founder of Moe Bodyworks</li>
              <li><Check aria-hidden="true" /> Host of the Happy Healthy Wealthy Podcast</li>
            </ul>
            <a className="text-link" href="https://moebodyworks.com" target="_blank" rel="noreferrer">
              Clinical services: visit Moe Bodyworks <ExternalLink aria-hidden="true" size={16} />
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
