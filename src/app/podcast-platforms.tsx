import { Music2, Podcast, Video } from "lucide-react";

const platforms = [
  { label: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL, icon: Video },
  { label: "Apple Podcasts", href: process.env.NEXT_PUBLIC_APPLE_PODCASTS_URL, icon: Podcast },
  { label: "Spotify", href: process.env.NEXT_PUBLIC_SPOTIFY_URL, icon: Music2 },
].filter((platform) => Boolean(platform.href));

export function PodcastPlatforms({ compact = false }: { compact?: boolean }) {
  if (!platforms.length) {
    return (
      <div className={compact ? "podcast-platforms compact" : "podcast-platforms"}>
        <span className="podcast-coming"><i aria-hidden="true" /> New episodes coming soon</span>
      </div>
    );
  }

  return (
    <div className={compact ? "podcast-platforms compact" : "podcast-platforms"} aria-label="Listen to Happy Healthy Wealthy">
      {platforms.map(({ label, href, icon: Icon }) => (
        <a href={href} target="_blank" rel="noreferrer" key={label}>
          <Icon aria-hidden="true" size={17} /> {label}
        </a>
      ))}
    </div>
  );
}
