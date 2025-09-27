import { hygraphClient } from '@/lib/hygraph-client';
import { Post, Testimonials } from '../types';

export async function fetchGraphQL<T>(query: string, variables?: any): Promise<T> {
  try {
    return await hygraphClient.request<T>(query, variables);
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw new Error('Failed to fetch data from CMS');
  }
}

export async function getBlogPosts(): Promise<Post[]> {
  try {
    const data = await fetchGraphQL<{ posts: Post[] }>(`
      query GetBlogPosts {
        posts(orderBy: publishedAt_DESC) {
          id
          title
          excerpt
          category
          slug
          featuredImage { url }
          publishedAt
        }
      }
    `);
    return data.posts;
  } catch (error) {
    console.log('Using fallback blog posts');
    return fallbackBlogPosts;
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonials[]> {
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
    console.log('Using fallback');
  }
}

export async function getAllTestimonials(): Promise<Testimonials[]> {
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
    console.log('Using fallback');
  }
}



