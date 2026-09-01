import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  eyebrow = "A clearer next step",
  title = "Ready to stop guessing at what needs to change?",
  copy = "Apply for a complimentary strategy session and bring the whole picture into focus.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="final-cta">
      <div className="page-shell final-cta-inner">
        <p className="eyebrow eyebrow-orange">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <Link className="button button-primary" href="/apply">
          Apply for your complimentary strategy session
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
