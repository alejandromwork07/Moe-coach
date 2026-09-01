import Image from "next/image";
import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Podcast", "/podcast"],
  ["Coaching", "/work-with-dr-moe"],
  ["Resources", "/resources"],
  ["Speaking", "/media"],
  ["Contact", "/contact"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <Image src="/logos/h2w-square.png" alt="Happy Healthy Wealthy" width={150} height={150} />
        <div className="footer-brand-copy">
          <p>Happy Healthy Wealthy</p>
          <span>The Formula for Extraordinary</span>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </div>
      <div className="page-shell footer-legal">
        <span>© {new Date().getFullYear()} Happy Healthy Wealthy</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
        <p>Educational content only. Individual results vary and no outcome is guaranteed.</p>
      </div>
    </footer>
  );
}
