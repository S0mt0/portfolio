import { MetadataRoute } from "next";

import { BASE_URL, VERSION } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${BASE_URL}/seo/opengraph-image.jpg?v=${VERSION}`,
        `${BASE_URL}/avatar.png?v=${VERSION}`,
        `${BASE_URL}/dp.png?v=${VERSION}`,
      ],
    },
    {
      url: `${BASE_URL}/notes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE_URL}/seo/blank-book.jpg?v=${VERSION}`],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // {
    //   url: `${BASE_URL}/extra`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    //   images: [`${BASE_URL}/dp.png?v=${VERSION}`],
    // },
    {
      url: `${BASE_URL}/builds`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
