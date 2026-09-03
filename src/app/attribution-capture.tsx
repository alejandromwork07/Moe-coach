"use client";

import { useEffect } from "react";

const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function AttributionCapture() {
  useEffect(() => {
    try {
      const existing = JSON.parse(sessionStorage.getItem("h2w_attribution") ?? "{}");
      const params = new URLSearchParams(window.location.search);
      const campaign = Object.fromEntries(
        campaignKeys
          .map((key) => [key, params.get(key)])
          .filter((entry): entry is [string, string] => Boolean(entry[1])),
      );
      const attribution = {
        landingPage: existing.landingPage ?? window.location.href,
        referrer: existing.referrer ?? document.referrer,
        ...existing,
        ...campaign,
      };
      sessionStorage.setItem("h2w_attribution", JSON.stringify(attribution));
    } catch {
      return;
    }
  }, []);

  return null;
}
