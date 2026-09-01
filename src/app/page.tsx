import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CirclePlay,
  HeartPulse,
  Lightbulb,
  Mic2,
  Quote,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { CtaBand } from "./cta-band";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const pillars = [
  {
    name: "Happy",
    eyebrow: "Mindset & meaning",
    description: "Create the clarity, confidence, relationships, and sense of purpose that make your life feel like your own.",
    color: "pillar-blue",
    icon: Sparkles,
  },
  {
    name: "Healthy",
    eyebrow: "Biology & vitality",
    description: "Understand your body, strengthen the foundations of health, and build energy for everything that matters.",
    color: "pillar-green",
    icon: HeartPulse,
  },
  {
    name: "Wealthy",
    eyebrow: "Freedom & impact",
    description: "Align your time, work, and resources with the extraordinary life you are actually trying to build.",
    color: "pillar-gold",
    icon: TrendingUp,
  },
];

const tensions = [
  ["Capable, but depleted", "You keep delivering for everyone else while your own energy, focus, or health slips."],
  ["Informed, but overwhelmed", "You have advice from everywhere and no confident way to decide what matters first."],
  ["Successful, but misaligned", "Life looks good from the outside, yet your days no longer feel connected to what matters."],
  ["Ready, but unclear", "You know something needs to change. The difficult part is finding the right starting point."],
];

const progression = [
  ["01", "See the whole picture", "Move beyond isolated symptoms and surface-level goals."],
  ["02", "Find the leverage point", "Identify the pattern or priority that can unlock meaningful progress."],
  ["03", "Build a practical strategy", "Turn insight into decisions that work in your actual life."],
  ["04", "Create sustainable momentum", "Strengthen the system instead of relying on another temporary push."],
];

const steps = [
  ["01", "Share the full picture", "Complete a focused application about your goals, current challenges, and readiness for change."],
  ["02", "Clarify your next move", "If there is a potential fit, choose a time for a complimentary conversation with Dr. Moe."],
  ["03", "Decide what comes next", "Leave with greater clarity and, when appropriate, explore a more individualized path forward."],
];

const faqs = [
  ["Who is the strategy session for?", "It is for people who are ready to look beyond a single symptom or goal and examine how health, mindset, work, relationships, and freedom affect one another."],
  ["Is this medical care?", "No. H2W podcast content and strategy sessions are educational and coaching-oriented. They do not diagnose, treat, or replace care from your licensed healthcare professionals."],
  ["What happens after I apply?", "Dr. Moe's team reviews the application for alignment. When the next step is appropriate, you will be directed to the H2W calendar to select an available time."],
  ["Is the session really complimentary?", "Yes. There is no fee for the initial strategy session and no obligation to continue. The purpose is to understand your goals, identify priorities, and assess fit."],
];

function ApplyLink({ label = "Apply for your complimentary strategy session" }: { label?: string }) {
  return (
    <Link className="button button-primary" href="/apply">
      {label}<ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <Image className="hero-image" src="/images/dr-moe-hero.png" alt="Dr. Moe, host of Happy Healthy Wealthy" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="eyebrow eyebrow-orange">The formula for extraordinary</p>
          <h1>Your life is a system.<span>Make every part stronger.</span></h1>
          <p className="hero-copy">
            Science, strategy, and honest conversations for building a healthier body,
            a happier life, and greater freedom with Dr. Moe.
          </p>
          <div className="hero-actions">
            <ApplyLink label="Apply for your strategy session" />
            <Link className="button button-ghost" href="/podcast">
              <CirclePlay aria-hidden="true" size={19} /> Explore the podcast
            </Link>
          </div>
          <p className="hero-note">Complimentary. Focused. Designed to clarify your next step.</p>
        </div>
      </section>

      <section className="authority-band" aria-label="Happy Healthy Wealthy perspective">
        <div className="page-shell authority-grid">
          <div><strong>20+</strong><span>Years of clinical perspective</span></div>
          <div><strong>3</strong><span>Connected dimensions of life</span></div>
          <div><strong>1</strong><span>Whole-person strategy</span></div>
          <div><strong>H2W</strong><span>The formula for extraordinary</span></div>
        </div>
      </section>

      <section className="section section-light recognition-section">
        <div className="page-shell">
          <div className="recognition-intro">
            <p className="eyebrow">When effort is not the problem</p>
            <h2>You do not need more noise.<span>You need the pattern.</span></h2>
            <p>
              Most meaningful problems do not stay in one category. Energy changes decisions.
              Work shapes relationships. Mindset affects health. H2W starts by seeing what is connected.
            </p>
          </div>
          <div className="tension-grid">
            {tensions.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="recognition-note">
            If one of these feels familiar, the answer may not be to try harder. It may be to see your life differently.
          </p>
        </div>
      </section>

      <section className="section pillars-section" id="philosophy">
        <div className="page-shell">
          <div className="center-heading">
            <p className="eyebrow eyebrow-orange">One life. Three essential dimensions.</p>
            <h2>The H2W formula</h2>
            <p>An extraordinary life is not created by optimizing one part while the others absorb the cost.</p>
          </div>
          <div className="pillars-grid">
            {pillars.map(({ name, eyebrow, description, color, icon: Icon }) => (
              <article className={`pillar ${color}`} key={name}>
                <div className="pillar-topline" />
                <Icon aria-hidden="true" size={28} strokeWidth={1.7} />
                <p>{eyebrow}</p>
                <h3>{name}</h3>
                <span>{description}</span>
              </article>
            ))}
          </div>
          <div className="system-statement">
            <Lightbulb aria-hidden="true" size={24} />
            <p><strong>The insight:</strong> when the three dimensions support one another, progress stops feeling like a tradeoff.</p>
          </div>
        </div>
      </section>

      <section className="section transformation-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div>
              <p className="eyebrow eyebrow-orange">How change becomes usable</p>
              <h2>From scattered effort to intentional progress.</h2>
            </div>
            <p>Information can explain a problem. A connected strategy helps you move through it.</p>
          </div>
          <div className="progression-grid">
            {progression.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light about-section" id="dr-moe">
        <div className="page-shell about-grid">
          <div className="about-visual">
            <Image src="/images/dr-moe-about-v2.png" alt="Dr. Moe" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="about-caption"><span>Clinician. Educator. Interviewer.</span><strong>Dr. Moe</strong></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet your guide</p>
            <h2>Curious enough to question. Practical enough to make it useful.</h2>
            <p>
              Dr. Moe brings more than two decades of clinical perspective to the questions
              that shape how people feel, perform, connect, and live.
            </p>
            <p>
              Happy Healthy Wealthy is the next evolution of that work: a platform for better
              questions, rigorous conversations, and practical ideas that respect the complexity of real life.
            </p>
            <div className="credential-list">
              <span><Check aria-hidden="true" size={17} /> Whole-person perspective</span>
              <span><Check aria-hidden="true" size={17} /> Science translated clearly</span>
              <span><Check aria-hidden="true" size={17} /> Strategy grounded in real life</span>
              <span><Check aria-hidden="true" size={17} /> Decades of client-facing experience</span>
            </div>
            <Link className="text-link" href="/about">Read Dr. Moe&apos;s story <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="page-shell fit-grid">
          <div className="fit-lead">
            <p className="eyebrow eyebrow-orange">Work with Dr. Moe</p>
            <h2>A focused conversation. Not another generic prescription.</h2>
            <p>
              The strategy session is designed to understand where you are, what is creating friction,
              and whether H2W is an appropriate next step.
            </p>
            <ApplyLink />
          </div>
          <div className="fit-lists">
            <div>
              <p className="list-label">A strong fit if you are</p>
              <ul>
                <li><Check aria-hidden="true" /> Ready to examine the whole picture</li>
                <li><Check aria-hidden="true" /> Open to honest questions and new patterns</li>
                <li><Check aria-hidden="true" /> Willing to participate in meaningful change</li>
              </ul>
            </div>
            <div className="not-fit">
              <p className="list-label">Probably not a fit if you want</p>
              <ul>
                <li>A quick fix with no personal involvement</li>
                <li>A diagnosis or replacement for medical care</li>
                <li>A guaranteed result from a single conversation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">What happens next</p><h2>Simple by design.</h2></div>
            <p>No pressure tactics and no mysterious process. Just enough context to make the conversation valuable.</p>
          </div>
          <div className="steps-list">
            {steps.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
          <div className="center-action"><ApplyLink /></div>
        </div>
      </section>

      <section className="section podcast-section" id="podcast">
        <div className="page-shell podcast-grid">
          <div className="podcast-art">
            <Image src="/images/h2w-podcast-studio-v2.png" alt="Dr. Moe recording the Happy Healthy Wealthy podcast" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="podcast-copy">
            <p className="eyebrow eyebrow-orange"><Mic2 aria-hidden="true" size={16} /> The podcast</p>
            <h2><span>Better questions.</span><span>Remarkable people.</span><span>An extraordinary life.</span></h2>
            <p>
              Conversations with researchers, clinicians, entrepreneurs, innovators, performers,
              and people whose stories reveal what it really takes to live better.
            </p>
            <div className="podcast-action-row">
              <Image className="podcast-cover-thumbnail" src="/images/dr-moe-podcast.png" alt="Happy Healthy Wealthy podcast cover art" width={104} height={104} />
              <div className="podcast-actions">
                <Link className="button button-light" href="/podcast"><CirclePlay aria-hidden="true" size={19} /> Explore the show</Link>
                <span>YouTube · Apple Podcasts · Spotify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light stories-section">
        <div className="page-shell stories-layout">
          <div><p className="eyebrow">Results with integrity</p><h2>Real stories deserve to be told well.</h2></div>
          <div className="story-placeholder">
            <Quote aria-hidden="true" size={34} />
            <p>Verified client experiences and professional endorsements will appear here as permissions are finalized.</p>
            <span>Client stories coming soon</span>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="page-shell faq-grid">
          <div><p className="eyebrow eyebrow-orange">Before you apply</p><h2>Clear answers. No fine print.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Your next chapter can start here" />
      <SiteFooter />
    </main>
  );
}
