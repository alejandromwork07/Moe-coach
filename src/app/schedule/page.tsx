import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Your Strategy Session",
  description: "Choose a time for your Happy Healthy Wealthy strategy session.",
};

export default function SchedulePage() {
  const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <main className="schedule-page">
      <header className="application-header page-shell">
        <Link href="/" aria-label="Happy Healthy Wealthy home">
          <Image
            src="/logos/h2w-horizontal.png"
            alt="H2W Happy Healthy Wealthy"
            width={210}
            height={140}
            priority
          />
        </Link>
        <Link href="/" className="back-link">
          <ArrowLeft aria-hidden="true" size={17} /> Back to H2W
        </Link>
      </header>

      <section className="schedule-intro page-shell">
        <CalendarCheck aria-hidden="true" size={30} />
        <p className="eyebrow eyebrow-orange">Your next step</p>
        <h1>{schedulingUrl ? "Choose a time to talk." : "Scheduling is being finalized."}</h1>
        <p>
          {schedulingUrl
            ? "Select the appointment that works best for you. You will receive confirmation and call details by email."
            : "The dedicated H2W calendar will appear here as soon as the scheduling connection is complete."}
        </p>
      </section>

      <section className="scheduler-shell page-shell">
        {schedulingUrl ? (
          <iframe title="Schedule a strategy session" src={schedulingUrl} />
        ) : (
          <div className="scheduler-placeholder">
            <CalendarCheck aria-hidden="true" size={42} />
            <h2>Calendar connection pending.</h2>
            <p>No appointment link has been published yet. This preview intentionally avoids sending visitors to an unverified calendar.</p>
            {contactEmail ? (
              <a className="button button-primary" href={`mailto:${contactEmail}`}>
                <Mail aria-hidden="true" size={18} /> Contact H2W
              </a>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
}
