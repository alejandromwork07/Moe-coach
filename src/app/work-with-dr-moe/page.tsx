import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, Check, Compass, MessageSquareText, Route } from "lucide-react";
import { CtaBand } from "../cta-band";
import { PageHero } from "../page-hero";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Work With Dr. Moe",
  description: "Learn about the Happy Healthy Wealthy strategy session and coaching process.",
};

const session: Array<[LucideIcon, string, string]> = [
  [Compass, "Orient", "Clarify where you are now and what feels most urgent, costly, or out of alignment."],
  [MessageSquareText, "Understand", "Explore the connections that may be hiding underneath separate symptoms or goals."],
  [Route, "Prioritize", "Identify a practical next step and determine whether further H2W support makes sense."],
];

export default function CoachingPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Work with Dr. Moe"
        title="Clarity before another commitment."
        copy="A thoughtful starting point for people ready to understand the whole picture and make more intentional progress."
        image="/images/dr-moe-hero.png"
        imageAlt="Dr. Moe"
        imagePosition="64% center"
        action={{ href: "/apply", label: "Apply for your strategy session" }}
      />

      <section className="section section-light coaching-intro">
        <div className="page-shell editorial-grid">
          <div><p className="eyebrow">The starting point</p><h2>A strategy session with a real purpose.</h2></div>
          <div className="editorial-copy">
            <p className="lead">This is not a scripted sales call or a substitute for medical care.</p>
            <p>It is a focused conversation designed to understand your goals, the friction you are experiencing, and the broader system surrounding both. The objective is clarity: what deserves attention first, what kind of support may help, and whether Dr. Moe&apos;s approach is aligned with what you need.</p>
          </div>
        </div>
      </section>

      <section className="section session-section">
        <div className="page-shell">
          <div className="center-heading"><p className="eyebrow eyebrow-orange">During the conversation</p><h2>See. Understand. Prioritize.</h2></div>
          <div className="session-grid">
            {session.map(([ItemIcon, title, copy]) => {
              return <article key={title}><ItemIcon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section section-light readiness-section">
        <div className="page-shell readiness-grid">
          <div>
            <p className="eyebrow">You may be ready if</p>
            <h2>You want a connected strategy, not another isolated tactic.</h2>
          </div>
          <ul className="check-list large">
            <li><Check aria-hidden="true" /> You are functioning, but know your current pattern is not sustainable.</li>
            <li><Check aria-hidden="true" /> You have information, yet struggle to turn it into priorities.</li>
            <li><Check aria-hidden="true" /> You are willing to look honestly at your habits, assumptions, and tradeoffs.</li>
            <li><Check aria-hidden="true" /> You value individualized thinking over a one-size-fits-all formula.</li>
          </ul>
        </div>
      </section>

      <section className="section application-steps">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">The application path</p><h2>Three steps. No pressure.</h2></div>
            <p>The application protects the quality of the conversation by giving Dr. Moe useful context in advance.</p>
          </div>
          <ol className="numbered-path">
            <li><span>01</span><div><h3>Apply</h3><p>Share your goals, challenges, and why now matters.</p></div></li>
            <li><span>02</span><div><h3>Schedule</h3><p>If appropriate, select an available complimentary session.</p></div></li>
            <li><span>03</span><div><h3>Talk</h3><p>Clarify the landscape and decide on the next best step.</p></div></li>
          </ol>
          <div className="center-action"><Link className="button button-primary" href="/apply">Begin your application <ArrowRight aria-hidden="true" size={18} /></Link></div>
        </div>
      </section>

      <CtaBand eyebrow="Begin with clarity" title="The right next step starts with the right conversation." />
      <SiteFooter />
    </main>
  );
}
