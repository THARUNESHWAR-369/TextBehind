import { NEXT_PUBLIC_URL } from "@/constants/constants";
import { MetadataRoute } from "next";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const changeFrequency: changeFrequency = "daily";
  const routes = ["", "/login", "/app"].map((route) => ({
    url: `${NEXT_PUBLIC_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
