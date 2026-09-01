import type { Metadata, Viewport } from "next";
import "./globals.css";

const description = "Science, strategy, and honest conversations for building a healthier body, a happier life, and greater freedom with Dr. Moe.";

export const metadata: Metadata = {
  metadataBase: new URL("https://happyhealthywealthy.info"),
  title: {
    default: "Happy Healthy Wealthy | The Formula for Extraordinary",
    template: "%s | Happy Healthy Wealthy",
  },
  description,
  applicationName: "Happy Healthy Wealthy",
  openGraph: {
    title: "Happy Healthy Wealthy | The Formula for Extraordinary",
    description,
    type: "website",
    siteName: "Happy Healthy Wealthy",
    url: "/",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "Happy Healthy Wealthy — The Formula for Extraordinary" }],
  },
  twitter: { card: "summary_large_image", title: "Happy Healthy Wealthy", description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Happy Healthy Wealthy",
    url: "https://happyhealthywealthy.info",
    description,
    publisher: {
      "@type": "Organization",
      name: "Happy Healthy Wealthy",
      url: "https://happyhealthywealthy.info",
    },
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
