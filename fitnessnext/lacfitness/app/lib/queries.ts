import { gql } from 'graphql-request';

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts(orderBy: publishedAt_DESC) {
      id
      title
      excerpt
      content
      category
      publishedAt
    }
  }
`;

export const GET_FEATURED_TESTIMONIALS = gql`
  query GetFeaturedTestimonials {
    testimonials(where: { featured: true }, orderBy: createdAt_DESC, first: 3) {
      id
      clientName
      location
      testimonialText
      rating
      category
      featured
      createdAt
    }
  }
`;

export const GET_ALL_TESTIMONIALS = gql`
  query GetAllTestimonials {
    testimonials(orderBy: createdAt_DESC) {
      id
      clientName
      location
      testimonialText
      rating
      category
      featured
      createdAt
    }
  }
`;


