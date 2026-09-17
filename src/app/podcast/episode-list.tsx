import Image from "next/image";
import { Music2, Podcast, Video } from "lucide-react";
import type { PodcastEpisode } from "@/content/podcast";

const platformDetails = [
  { key: "spotify", label: "Spotify", icon: Music2 },
  { key: "applePodcasts", label: "Apple Podcasts", icon: Podcast },
  { key: "youtube", label: "YouTube", icon: Video },
] as const;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(parsedDate.getTime()) ? date : dateFormatter.format(parsedDate);
}

export function EpisodeList({ episodes }: { episodes: PodcastEpisode[] }) {
  if (!episodes.length) {
    return (
      <div className="episode-placeholder">
        <span>Season one</span>
        <h3>Launch lineup coming soon</h3>
        <p>Research, health, performance, entrepreneurship, and remarkable personal stories.</p>
      </div>
    );
  }

  return (
    <div className="episode-grid">
      {episodes.map((episode) => {
        const episodeLinks = platformDetails.filter(({ key }) => Boolean(episode.links[key]));

        return (
          <article className="episode-card" key={`${episode.number}-${episode.title}`}>
            {episode.artwork ? (
              <div className="episode-artwork">
                <Image src={episode.artwork} alt="" fill sizes="(max-width: 900px) 100vw, 42vw" />
              </div>
            ) : null}
            <div className="episode-card-content">
              <div className="episode-meta">
                <span>Episode {String(episode.number).padStart(2, "0")}</span>
                <time dateTime={episode.publishedAt}>{formatDate(episode.publishedAt)}</time>
                {episode.duration ? <span>{episode.duration}</span> : null}
              </div>
              {episode.guest ? <p className="episode-guest">With {episode.guest}</p> : null}
              <h3>{episode.title}</h3>
              <p className="episode-description">{episode.description}</p>
              {episodeLinks.length ? (
                <div className="episode-links" aria-label={`Listen to ${episode.title}`}>
                  {episodeLinks.map(({ key, label, icon: Icon }) => (
                    <a href={episode.links[key]} target="_blank" rel="noreferrer" key={key}>
                      <Icon aria-hidden="true" size={17} /> {label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
