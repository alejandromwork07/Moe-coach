import type { Metadata } from "next";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = { title: "Educational Disclaimer" };

export default function DisclaimerPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page page-shell">
        <p className="eyebrow eyebrow-orange">Happy Healthy Wealthy</p>
        <h1>Educational disclaimer</h1>
        <p className="legal-updated">Last updated: September 1, 2026</p>
        <h2>Educational information only</h2>
        <p>Happy Healthy Wealthy website, podcast, resources, and strategy sessions are provided for general educational and informational purposes. They are not medical, psychological, legal, tax, or financial advice.</p>
        <h2>No clinical relationship</h2>
        <p>Using this website, submitting a form, listening to the podcast, or participating in an introductory strategy session does not create a doctor-patient or other licensed professional relationship.</p>
        <h2>Seek appropriate professional care</h2>
        <p>Always consult qualified professionals regarding your individual health, finances, or other regulated matters. Do not delay or disregard professional care because of information presented by H2W.</p>
        <h2>Results and guests</h2>
        <p>Individual experiences vary and no result is promised or guaranteed. Guest views are their own and their appearance does not necessarily constitute endorsement by Happy Healthy Wealthy or Dr. Moe.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
