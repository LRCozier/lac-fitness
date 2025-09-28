import { hygraphClient } from '../lib/hygraph-client';
import { fallbackBlogPosts, fallbackTestimonials } from '../lib/constants';
import { Post, Testimonials } from '../types';

export const fetchGraphQL = async <T>(query: string, variables?: any): Promise<T> => {
  try {
    return await hygraphClient.request<T>(query, variables);
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw new Error('Failed to fetch data from CMS');
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
    console.log('Using fallback testimonials');
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
    console.log('Using fallback testimonials');
    return fallbackTestimonials;
  }
};


