import type { MetadataRoute } from "next";

const routes = ["", "/about", "/podcast", "/work-with-dr-moe", "/resources", "/media", "/contact", "/privacy", "/terms", "/disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `https://happyhealthywealthy.info${route}`,
    lastModified: now,
    changeFrequency: route === "/podcast" || route === "/resources" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
