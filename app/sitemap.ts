import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.webamo.be";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-28"),
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date("2026-03-20"),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-20"),
    },
    {
      url: `${baseUrl}/website-kinesist-brugge`,
      lastModified: new Date("2026-03-20"),
    },
    {
      url: `${baseUrl}/website-dakwerker-brugge`,
      lastModified: new Date("2026-03-20"),
    },
    {
      url: `${baseUrl}/privacybeleid`,
      lastModified: new Date("2025-01-01"),
    },
  ];
}
