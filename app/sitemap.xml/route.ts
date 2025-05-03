// app/sitemap.xml/route.ts
import { client } from '@/sanity/lib/client';


export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||'http://localhost:3000';

  // Optional: Fetch slugs from Sanity
  const jobs = await client.fetch(`*[_type == "jobPosting"]{ "slug": slug.current }`);

  const staticUrls = [
    '',
    'about',
    'academics',
    'career',
    'contact-us',
    'doctors-and-dept',
    'frequantly-asked-questions',
    'medical-services',
    'patients-and-visitors',
    'social-reponsibility',
  ].map(path => `<url><loc>${baseUrl}/${path}</loc></url>`).join('');

  const dynamicUrls = jobs.map((job: { slug: string }) =>
    `<url><loc>${baseUrl}/careers/${job.slug}</loc></url>`
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${dynamicUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
