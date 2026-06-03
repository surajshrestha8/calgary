import type { MetadataRoute } from "next";

const lastModified = new Date("2026-05-31");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://calgaryprepexperts.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
