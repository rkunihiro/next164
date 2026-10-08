import type { MetadataRoute } from "next";

import { siteUrl } from "#/config.ts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: "hourly",
            priority: 1,
        },
    ];
}
