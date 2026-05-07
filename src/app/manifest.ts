import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calgary Prep Center",
    short_name: "Calgary Prep",
    description:
      "Amazon FBA prep, FBM fulfillment, and 3PL storage in Calgary, Alberta.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f8f4",
    theme_color: "#ff6b35",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
