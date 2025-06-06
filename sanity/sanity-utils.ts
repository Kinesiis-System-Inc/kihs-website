// Create this file at @/sanity/sanity-utils.ts
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

// Configure your Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use the API version you're working with
  useCdn: process.env.NODE_ENV === 'production',
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}