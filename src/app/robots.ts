import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://aws-developer-associate.koydo.app/sitemap.xml",
    host: "https://aws-developer-associate.koydo.app",
  };
}
