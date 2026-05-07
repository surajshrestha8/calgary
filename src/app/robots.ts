import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://calgaryprep.ca/sitemap.xml",
    host: "https://calgaryprep.ca",
  };
}
