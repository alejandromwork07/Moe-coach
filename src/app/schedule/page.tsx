import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Your Complimentary H2W Fit Call",
  description: "Choose a time for your complimentary 30-minute H2W Fit Call.",
};

function getCalendlyEventUrl() {
  const configuredUrl = process.env.CALENDLY_EVENT_URL;
  if (!configuredUrl) return null;

  try {
    const url = new URL(configuredUrl);
    const isCalendlyHost = url.hostname === "calendly.com" || url.hostname.endsWith(".calendly.com");

    if (url.protocol !== "https:" || !isCalendlyHost || url.username || url.password) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export default async function SchedulePage() {
  const cookieStore = await cookies();
  if (cookieStore.get("h2w_application_submitted")?.value !== "1") redirect("/apply");

  const schedulingUrl = getCalendlyEventUrl();
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
        <h1>{schedulingUrl ? "Schedule your complimentary H2W Fit Call." : "Scheduling is being finalized."}</h1>
        <p>
          {schedulingUrl
            ? "Choose a time below for your 30-minute call with Dr. Moe. You will discuss your goals, what you have been struggling with, and whether the concierge health coaching program may be appropriate for you."
            : "The dedicated H2W calendar will appear here as soon as the scheduling connection is complete."}
        </p>
      </section>

      <section className="scheduler-shell page-shell">
        {schedulingUrl ? (
          <iframe title="Schedule a complimentary H2W Fit Call" src={schedulingUrl} referrerPolicy="strict-origin-when-cross-origin" />
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
