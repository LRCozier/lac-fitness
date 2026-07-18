import 'server-only';
import { GraphQLClient } from 'graphql-request';

import { fallbackServices, fallbackTestimonials } from '@/lib/fallbacks';
import type { Service, Testimonial } from '@/lib/types';


const getClient = (): GraphQLClient | null => {
  const url = process.env.HYGRAPH_URL;
  const token = process.env.HYGRAPH_TOKEN;

  if (!url || !token) {
    console.warn('[Hygraph] HYGRAPH_URL or HYGRAPH_TOKEN not set — using fallback data.');
    return null;
  }

  return new GraphQLClient(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

async function query<T>(document: string): Promise<T> {
  const client = getClient();
  if (!client) throw new Error('Hygraph client not configured.');
  return client.request<T>(document);
}

const TESTIMONIAL_FIELDS = `
  id
  clientName
  location
  testimonialText
  rating
  category
  featured
  createdAt
`;

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await query<{ testimonials: Testimonial[] }>(`
      query GetFeaturedTestimonials {
        testimonials(where: { featured: true }, orderBy: createdAt_DESC, first: 3) {
          ${TESTIMONIAL_FIELDS}
        }
      }
    `);
    return data.testimonials;
  } catch (error) {
    console.warn('[Hygraph] Falling back to local featured testimonials:', error);
    return fallbackTestimonials.filter((item) => item.featured).slice(0, 3);
  }
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await query<{ testimonials: Testimonial[] }>(`
      query GetAllTestimonials {
        testimonials(orderBy: createdAt_DESC) {
          ${TESTIMONIAL_FIELDS}
        }
      }
    `);
    return data.testimonials;
  } catch (error) {
    console.warn('[Hygraph] Falling back to local testimonials:', error);
    return fallbackTestimonials;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const data = await query<{ services: Service[] }>(`
      query GetServices {
        services {
          id
          title
          price
          description
          features
          ctaText
          duration
          intensity
          recommendedFor
        }
      }
    `);
    return data.services;
  } catch (error) {
    console.warn('[Hygraph] Falling back to local services:', error);
    return fallbackServices;
  }
}