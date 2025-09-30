import { hygraphClient } from '../lib/hygraph-client';
import { fallbackBlogPosts, fallbackTestimonials, fallbackServices } from '../lib/constants.js';
import { Post, Testimonials, Service } from '@/app/types';

const sanitizeQuery = (query: string): string => {
  return query.replace(/[^\w\s\n{}\[\]():.,@$]/g, '');
};

export const fetchGraphQL = async <T>(query: string, variables?: Record<string, unknown>): Promise<T> => {
  if (!hygraphClient) throw new Error('GraphQL client not configured');
  
  try {
    const sanitizedQuery = sanitizeQuery(query);
    return await hygraphClient.request<T>(sanitizedQuery, variables);
  } catch (error) {
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `GraphQL Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      : 'Failed to fetch data from CMS';
    throw new Error(errorMessage);
  }
};

export const getBlogPosts = async (): Promise<Post[]> => {
  try {
    const data = await fetchGraphQL<{ posts: Post[] }>(`
      query GetBlogPosts {
        posts(orderBy: publishedAt_DESC) {
          id
          title
          excerpt
          category
          slug
          featuredImage { url alt }
          publishedAt
        }
      }
    `);
    return data.posts;
  } catch (error) {
    console.warn('Using fallback blog posts due to CMS error');
    return fallbackBlogPosts;
  }
};

export const getFeaturedTestimonials = async (): Promise<Testimonials[]> => {
  try {
    const data = await fetchGraphQL<{ testimonials: Testimonials[] }>(`
      query GetFeaturedTestimonials {
        testimonials(where: { featured: true }, orderBy: createdAt_DESC, first: 3) {
          id
          clientName
          location
          testimonialText
          rating
          category
        }
      }
    `);
    return data.testimonials;
  } catch (error) {
    console.warn('Using fallback testimonials due to CMS error');
    return fallbackTestimonials.filter(t => t.featured).slice(0, 3);
  }
};

export const getAllTestimonials = async (): Promise<Testimonials[]> => {
  try {
    const data = await fetchGraphQL<{ testimonials: Testimonials[] }>(`
      query GetAllTestimonials {
        testimonials(orderBy: createdAt_DESC) {
          id
          clientName
          location
          testimonialText
          rating
          category
          featured
        }
      }
    `);
    return data.testimonials;
  } catch (error) {
    console.warn('Using fallback testimonials due to CMS error');
    return fallbackTestimonials;
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const data = await fetchGraphQL<{ services: Service[] }>(`
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
        }
      }
    `);
    return data.services;
  } catch (error) {
    console.warn('Using fallback services due to CMS error');
    return fallbackServices;
  }
};

