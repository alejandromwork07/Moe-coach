"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/work-with-dr-moe", label: "Coaching" },
  { href: "/resources", label: "Resources" },
  { href: "/media", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-link" href="#page-content">Skip to page content</a>
      <Link className="brand-link" href="/" aria-label="Happy Healthy Wealthy home">
        <Image src="/logos/h2w-horizontal.webp" alt="H2W Happy Healthy Wealthy" width={300} height={200} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/apply">
        Apply now <ArrowRight aria-hidden="true" size={17} />
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        title={open ? "Close menu" : "Menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? "mobile-nav open" : "mobile-nav"} id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/apply" onClick={() => setOpen(false)}>Apply for a recovery strategy call <ArrowRight aria-hidden="true" size={18} /></Link>
      </nav>
    </header>
  );
}
