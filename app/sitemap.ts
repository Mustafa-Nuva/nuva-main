import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://nuva.krd", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://nuva.krd/#product", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://nuva.krd/#roles", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://nuva.krd/#languages", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://nuva.krd/#voice", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://nuva.krd/#safety", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://nuva.krd/#download", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://nuva.krd/#team", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://nuva.krd/#contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
