import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  imagePosition = "center",
  action,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  action?: { href: string; label: string };
}) {
  return (
    <section className="page-hero">
      <Image className="page-hero-image" src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectPosition: imagePosition }} />
      <div className="page-hero-shade" />
      <div className="page-shell page-hero-content">
        <p className="eyebrow eyebrow-orange">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {action ? (
          <Link className="button button-primary" href={action.href}>
            {action.label} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
