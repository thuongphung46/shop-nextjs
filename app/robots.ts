/** @format */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout/"], // Don't index API routes and checkout process
    },
    sitemap: "https://shop-nha-lam.netlify.app/sitemap.xml", // Update with your actual domain
  };
}
