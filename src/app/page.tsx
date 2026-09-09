import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  CalendarRange,
  Check,
  CirclePlay,
  ClipboardList,
  Dna,
  ExternalLink,
  HeartPulse,
  Lightbulb,
  MessagesSquare,
  Mic2,
  RefreshCw,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { CtaBand } from "./cta-band";
import { PodcastPlatforms } from "./podcast-platforms";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TestimonialsSection } from "./testimonials-section";

const homeDescription =
  "Build an extraordinary life, physically, personally, and financially. H2W helps people rebuilding after a major health challenge, and people simply ready to feel, live, and perform better, identify what's holding them back. Apply for a complimentary strategy session with Dr. Moe.";

export const metadata: Metadata = {
  title: { absolute: "Happy Healthy Wealthy | Health, Life & Coaching with Dr. Moe" },
  description: homeDescription,
  openGraph: {
    title: "Happy Healthy Wealthy | Health, Life & Coaching with Dr. Moe",
    description: homeDescription,
    url: "/",
  },
  twitter: {
    title: "Happy Healthy Wealthy | Dr. Moe",
    description: homeDescription,
  },
};

const pillars = [
  {
    name: "Happy",
    eyebrow: "Identity & connection",
    description: "Relationships, fulfillment, purpose, lifestyle, and the personal growth that make your life feel like your own.",
    color: "pillar-blue",
    icon: Sparkles,
  },
  {
    name: "Healthy",
    eyebrow: "Biology & capacity",
    description: "Recovery, energy, strength, metabolism, and the functional health, longevity, and performance to keep showing up at your best.",
    color: "pillar-green",
    icon: HeartPulse,
  },
  {
    name: "Wealthy",
    eyebrow: "Freedom & resources",
    description: "Career, business, finances, and the freedom to build the life you actually want.",
    color: "pillar-gold",
    icon: TrendingUp,
  },
];

const recoverySignals = [
  "Fatigue that does not match the amount of effort you are putting in",
  "Loss of strength, stamina, muscle, or physical confidence",
  "Weight or metabolic changes that no longer respond the way they once did",
  "Feeling stuck, burned out, or unsure what direction to take next",
  "Conflicting advice and no clear sense of what to prioritize",
  "Rebuilding after illness, surgery, injury, cancer treatment, or another major health event",
];

const transformationOutcomes = [
  ["01", "Clarity", "Know what deserves attention now and what can wait."],
  ["02", "Capacity", "Build the physical and mental reserve required to participate more fully in life."],
  ["03", "Confidence", "Understand your body and make decisions from a plan instead of fear or confusion."],
  ["04", "Consistency", "Turn good intentions into actions that fit your actual schedule and limitations."],
  ["05", "Momentum", "Stop waiting to feel normal and begin building the next version of your life."],
];

const recoverySteps = [
  ["01", "Map the full story", "Organize the health event, treatment history, current symptoms, lifestyle, goals, obstacles, and available testing."],
  ["02", "Find the leverage points", "Identify the patterns and priorities most likely to be holding back progress."],
  ["03", "Build the roadmap", "Create clear, realistic actions across health, habits, strength, recovery, and life context."],
  ["04", "Implement and adjust", "Use twice-monthly coaching and weekday messaging to troubleshoot, refine, and maintain momentum."],
  ["05", "Reassess and move forward", "Measure meaningful changes and create a plan for the next stage."],
];

const fitSignals = [
  "You are rebuilding after cancer treatment, illness, surgery, injury, or an accident.",
  "You are healthy on paper but feel stuck, depleted, burned out, or underperforming.",
  "You were once highly capable and active, but fatigue or health changes have made your life smaller.",
  "You are ready for a major life improvement but unsure where to start.",
  "You want a personalized strategy rather than a one-size-fits-all protocol.",
  "You value science and measurable information while understanding that change happens inside a real life.",
];

const programIncludes: Array<[LucideIcon, string, string]> = [
  [CalendarRange, "90-minute Recovery Mapping Session", "Organize your history, current challenges, goals, constraints, and existing information."],
  [ClipboardList, "Personalized H2W Recovery Roadmap", "Prioritized action steps across health, habits, recovery capacity, and life context."],
  [MessagesSquare, "Eleven private coaching sessions", "Focused 45-minute sessions, generally held twice monthly after your initial mapping session."],
  [RefreshCw, "Weekday course correction", "Brief text or voice-message support during stated business hours, with a one-business-day response expectation."],
  [Activity, "Individualized progress tracking", "Follow relevant symptoms, habits, performance markers, body composition, or laboratory information."],
  [Dna, "Optional targeted recommendations", "Additional testing, supplements, products, and clinical services may be recommended and are billed separately."],
];

const faqs = [
  ["Is this medical treatment?", "No. H2W Health Recovery Coaching is a coaching and educational service. It does not replace your physicians, oncology team, rehabilitation providers, mental-health professionals, or emergency care. Any separate clinical service is clearly identified and handled through the appropriate clinical process."],
  ["Do I need a specific diagnosis?", "No. The program begins with your health history, present challenges, goals, and readiness for change. Fit is determined through the application and complimentary strategy session."],
  ["Do you work with people after cancer treatment?", "Yes. Post-treatment recovery is an important focus of the program. Coaching does not treat cancer or replace oncology care. Clients must be appropriate for coaching and continue recommended medical follow-up."],
  ["What if I am still in active treatment?", "Apply and share where you are in treatment. Dr. Moe will determine whether coaching is appropriate now, whether coordination with your treating team is needed, or whether it is better to begin later."],
  ["Is laboratory testing included?", "Testing is individualized. Additional labs, supplements, and clinical services are optional and billed separately. Clients who pay for the six-month program in full receive the DNA Health Blueprint (3X4 Genetics) with personalized interpretation at no additional charge."],
  ["Can I participate remotely?", "Yes. Private coaching sessions can be completed remotely. Some laboratory or in-person clinical services may depend on location, eligibility, and provider requirements."],
  ["What happens after I apply?", "After submitting the application, applicants are directed to schedule a complimentary 20-minute H2W strategy session. The session is used to understand your goals, answer questions, and determine whether coaching is a strong fit. Dr. Moe's team may contact you beforehand if your situation requires a different kind of support."],
  ["Is a result guaranteed?", "No ethical recovery program can guarantee a specific result. Outcomes vary based on health history, medical factors, participation, consistency, and many other circumstances."],
];

function ApplyLink({ label = "Apply for a complimentary H2W strategy session" }: { label?: string }) {
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

      <section className="hero health-recovery-hero" id="page-content">
        <Image className="hero-image" src="/images/dr-moe-hero.webp" alt="Dr. Moe, founder of Happy Healthy Wealthy" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="eyebrow eyebrow-orange">Happy Healthy Wealthy</p>
          <h1>Build an extraordinary life.<span>Physically, personally, and financially.</span></h1>
          <p className="hero-copy">
            Whether you&apos;re rebuilding after a major health challenge or simply know you&apos;re
            capable of feeling, living, and performing better, H2W helps you identify what&apos;s
            holding you back and build a strategy for moving forward.
          </p>
          <div className="hero-actions">
            <ApplyLink />
            <Link className="button button-ghost" href="#dr-moe">
              Meet Dr. Moe <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="authority-band" aria-label="Dr. Moe's health recovery experience">
        <div className="page-shell authority-grid">
          <div><strong>22+</strong><span>Years in clinical practice</span></div>
          <div><strong>Functional</strong><span>Medicine &amp; nutrition</span></div>
          <div><strong>Personalized</strong><span>Laboratory insights</span></div>
          <div><strong>Private</strong><span>Recovery coaching</span></div>
        </div>
      </section>

      <section className="section section-light recognition-section">
        <div className="page-shell">
          <div className="recognition-layout">
            <div className="recognition-intro">
              <p className="eyebrow">When the crisis has passed</p>
              <h2>The crisis may be over.<span>But you still don&apos;t feel recovered.</span></h2>
              <p>
                Maybe your tests look &ldquo;fine.&rdquo; Maybe treatment ended months ago. Maybe
                everyone expects you to be grateful, relieved, or back to normal. But your energy
                is gone, your strength has changed, your body feels unfamiliar, and the life you
                used to manage now feels harder than it should.
              </p>
            </div>
            <div className="recovery-signals">
              <p className="list-label">You may be dealing with</p>
              {recoverySignals.map((signal, index) => (
                <article key={signal}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{signal}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="recognition-close">
            <span aria-hidden="true">H2W</span>
            <p>
              You do not need more disconnected advice. You need someone to help you see the whole
              picture, identify the leverage points, and build a plan you can actually follow.
            </p>
          </div>
        </div>
      </section>

      <section className="section pillars-section" id="philosophy">
        <div className="page-shell">
          <div className="section-intro-row formula-intro">
            <div>
              <p className="eyebrow eyebrow-orange">Life is not one-dimensional</p>
              <h2>Your health affects your whole life.</h2>
            </div>
            <p>
              Whether you are rebuilding after a major health challenge or simply know you are
              capable of more, it becomes harder to feel happy, think clearly, reconnect with
              people, perform at work, or create financial and personal freedom when one part of
              your life is out of sync. H2W looks at the system, not one isolated symptom.
            </p>
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
            <p>
              <strong>The H2W formula:</strong> Happy, Healthy, and Wealthy are not separate goals.
              They are connected parts of one extraordinary life.
            </p>
          </div>
        </div>
      </section>

      <section className="section transformation-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div>
              <p className="eyebrow eyebrow-orange">What changes when the pieces finally connect</p>
              <h2>From surviving to actively rebuilding.</h2>
            </div>
            <p>
              The goal is not a perfect body, a guaranteed result, or a return to an exact former
              version of yourself. It is to understand your current reality, make better decisions,
              rebuild capacity, and create forward momentum.
            </p>
          </div>
          <div className="progression-grid">
            {transformationOutcomes.map(([number, title, copy]) => (
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
            <Image src="/images/dr-moe-about-v2.webp" alt="Dr. Moe Sarah Smith" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="about-caption"><span>Clinician. Educator. Recovery strategist.</span><strong>Dr. Moe</strong></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet your guide</p>
            <h2>Experience matters when your health story is complicated.</h2>
            <p>
              Dr. Moe Sarah Smith is a Doctor of Chiropractic, functional-medicine and nutrition
              clinician, educator, and founder of Moe Bodyworks. For more than 22 years, she has
              worked directly with people navigating pain, fatigue, injury, metabolic challenges,
              complicated health histories, and the frustrating distance between being
              &ldquo;not sick&rdquo; and actually feeling well.
            </p>
            <p>
              Her work combines clinical experience, individualized laboratory insights,
              nutrition, recovery strategy, movement, and practical coaching. Years spent teaching
              anatomy and clinical concepts in higher education shaped her ability to translate
              complicated science into clear decisions people can use.
            </p>
            <p>
              Happy Healthy Wealthy is the next evolution of that work: helping people understand
              what is keeping them stuck, rebuild their health, and reclaim the parts of life that
              poor health has taken away.
            </p>
            <div className="credential-list">
              <span><Check aria-hidden="true" size={17} /> Doctor of Chiropractic</span>
              <span><Check aria-hidden="true" size={17} /> More than 22 years in clinical practice</span>
              <span><Check aria-hidden="true" size={17} /> Functional medicine, nutrition, and laboratory assessment</span>
              <span><Check aria-hidden="true" size={17} /> Former higher-education anatomy and clinical educator</span>
              <span><Check aria-hidden="true" size={17} /> Founder of Moe Bodyworks</span>
              <span><Check aria-hidden="true" size={17} /> Host of the Happy Healthy Wealthy Podcast</span>
            </div>
            <div className="about-actions">
              <Link className="text-link" href="/about">Read Dr. Moe&apos;s story <ArrowRight aria-hidden="true" size={17} /></Link>
              <a className="text-link clinical-link" href="https://moebodyworks.com" target="_blank" rel="noreferrer">
                Clinical services: Moe Bodyworks <ExternalLink aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="page-shell">
          <div className="fit-grid">
            <div className="fit-lead">
              <p className="eyebrow eyebrow-orange">You may be a fit if</p>
              <h2>You are ready to rebuild, but need help knowing what matters most.</h2>
              <p>
                H2W is designed for capable, motivated adults who want an experienced guide to
                organize the many pieces of health, life, and momentum into a practical,
                personalized plan.
              </p>
              <ApplyLink />
            </div>
            <div className="fit-lists">
              <ul>
                {fitSignals.map((signal) => (
                  <li key={signal}><Check aria-hidden="true" /> {signal}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="clinical-boundary">
            <span>Important boundary</span>
            <p>
              This program is not emergency care, cancer treatment, or a replacement for your
              licensed medical team. It is a structured coaching relationship designed to help
              appropriate clients organize and support the next phase of recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="page-shell">
          <div className="section-intro-row">
            <div><p className="eyebrow eyebrow-orange">How the recovery process works</p><h2>From the full story to a forward plan.</h2></div>
            <p>A structured recovery process turns a complicated health story into priorities you can understand, apply, and adjust.</p>
          </div>
          <div className="steps-list">
            {recoverySteps.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
          <div className="center-action"><ApplyLink /></div>
        </div>
      </section>

      <section className="section program-section" id="health-recovery">
        <div className="page-shell">
          <div className="program-heading">
            <p className="eyebrow">Private six-month coaching</p>
            <h2>The H2W Health Recovery Program</h2>
            <p>
              Recovery rarely happens in a straight line. This six-month private coaching
              experience gives you time to understand the full picture, build a personalized
              strategy, implement it in real life, and adjust as your health and capacity change.
            </p>
          </div>

          <div className="program-overview">
            <div className="program-duration">
              <span>06</span>
              <strong>Months of structured support</strong>
              <p>Enough time for meaningful implementation, adjustment, and reassessment.</p>
            </div>
            <div className="program-includes">
              {programIncludes.map(([ItemIcon, title, copy]) => {
                return (
                  <article key={title}>
                    <ItemIcon aria-hidden="true" size={22} />
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="program-bonus">
            <div className="bonus-icon"><Dna aria-hidden="true" size={34} /></div>
            <div>
              <p className="eyebrow eyebrow-orange">Pay-in-full enrollment bonus · $299 menu value</p>
              <h3>DNA Health Blueprint <span>(3X4 Genetics)</span></h3>
              <p>
                Enroll with one upfront payment and receive a DNA Health Blueprint with
                personalized interpretation and integration into your H2W Recovery Roadmap,
                included at no additional charge.
              </p>
            </div>
          </div>

          <div className="program-action">
            <p>Program investment is discussed with qualified applicants during the complimentary session.</p>
            <ApplyLink />
          </div>
        </div>
      </section>

      <section className="section podcast-section" id="podcast">
        <div className="page-shell podcast-grid">
          <div className="podcast-art">
            <Image src="/images/h2w-podcast-studio-v2.webp" alt="Dr. Moe recording the Happy Healthy Wealthy podcast" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="podcast-copy">
            <p className="eyebrow eyebrow-orange"><Mic2 aria-hidden="true" size={16} /> The Happy Healthy Wealthy Podcast</p>
            <h2><span>Real conversations</span><span>about rebuilding and living</span><span>an extraordinary life.</span></h2>
            <p>
              Dr. Moe speaks with researchers, clinicians, entrepreneurs, innovators, and people
              with remarkable recovery stories about the science, decisions, setbacks, and
              strategies behind living better. The podcast expands beyond health recovery while
              remaining a natural entry point into the H2W philosophy.
            </p>
            <div className="podcast-action-row">
              <Image className="podcast-cover-thumbnail" src="/images/dr-moe-podcast.webp" alt="Happy Healthy Wealthy podcast cover art" width={104} height={104} />
              <div className="podcast-actions">
                <div className="podcast-buttons">
                  <Link className="button button-light" href="/podcast"><CirclePlay aria-hidden="true" size={19} /> Explore the podcast</Link>
                  <Link className="button button-ghost" href="/contact?type=podcast">Suggest a guest</Link>
                </div>
                <PodcastPlatforms compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

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

      <CtaBand
        eyebrow="Your next chapter starts with clarity"
        title="You do not have to figure out the next phase alone."
        copy="If you are ready to understand what is keeping you stuck and build a practical plan for your health, your life, and your freedom, apply for a complimentary H2W strategy session with Dr. Moe."
      />
      <SiteFooter />
    </main>
  );
}
