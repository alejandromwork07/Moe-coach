import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Your Recovery Strategy Call",
  description: "Choose a time for your complimentary H2W Recovery Strategy Call.",
};

export default async function SchedulePage() {
  const cookieStore = await cookies();
  if (!cookieStore.has("h2w_application_submitted")) redirect("/apply");

  const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <main className="secondary-page schedule-page">
      <a className="skip-link" href="#page-content">Skip to scheduling</a>
      <header className="application-header page-shell">
        <Link href="/" aria-label="Happy Healthy Wealthy home">
          <Image
            src="/logos/h2w-horizontal.webp"
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

      <section className="schedule-intro page-shell" id="page-content">
        <CalendarCheck aria-hidden="true" size={30} />
        <p className="eyebrow eyebrow-orange">Thank you for applying</p>
        <h1>{schedulingUrl ? "Schedule your Recovery Strategy Call." : "Scheduling is being finalized."}</h1>
        <p>
          {schedulingUrl
            ? "Choose a time below for your complimentary 20-minute call. If your situation requires a different kind of support, Dr. Moe's team may contact you before the call."
            : "The dedicated H2W calendar will appear here as soon as the scheduling connection is complete."}
        </p>
      </section>

      <section className="scheduler-shell page-shell">
        {schedulingUrl ? (
          <iframe title="Schedule a Recovery Strategy Call" src={schedulingUrl} referrerPolicy="strict-origin-when-cross-origin" />
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
