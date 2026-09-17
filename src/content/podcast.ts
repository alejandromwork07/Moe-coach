export type PodcastEpisode = {
  number: number;
  title: string;
  description: string;
  publishedAt: string;
  guest?: string;
  duration?: string;
  artwork?: string;
  links: {
    spotify?: string;
    applePodcasts?: string;
    youtube?: string;
  };
};

// Add published episodes here, newest first. Artwork paths should point to /public assets.
export const podcastEpisodes: PodcastEpisode[] = [
  // {
  //   number: 1,
  //   title: "Episode title",
  //   description: "A concise summary of the conversation.",
  //   publishedAt: "2026-10-01",
  //   guest: "Guest name",
  //   duration: "48 min",
  //   artwork: "/images/podcast/episode-01.webp",
  //   links: {
  //     spotify: "https://open.spotify.com/episode/...",
  //     applePodcasts: "https://podcasts.apple.com/...",
  //     youtube: "https://www.youtube.com/watch?v=...",
  //   },
  // },
];
