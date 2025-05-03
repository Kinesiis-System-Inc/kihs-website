// app/robots.js
// import { MetadataRoute } from 'next'; // If using TypeScript

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Use the base URL variable
  };
}