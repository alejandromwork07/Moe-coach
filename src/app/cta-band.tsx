import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  eyebrow = "A clearer next step",
  title = "Ready to stop guessing at what needs to change?",
  copy = "Complete the H2W coaching application to request a complimentary 30-minute Fit Call.",
  buttonLabel = "Apply for a complimentary H2W Fit Call",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="final-cta">
      <div className="page-shell final-cta-inner">
        <p className="eyebrow eyebrow-orange">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <Link className="button button-primary" href="/apply">
          {buttonLabel}
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
