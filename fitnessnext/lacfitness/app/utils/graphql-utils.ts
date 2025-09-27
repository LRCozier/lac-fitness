import { hygraphClient } from "../lib/hygraph-client";
import { Post, Testimonials } from "../types";

export const fetchGraphQL = async<T> (query: string, variables?: any): Promise<T> => {
  try{
    return await hygraphClient.request<T>(query, variables);
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw new Error ('Failed to fetch data from Hygraph');
  }
};

export const getBlogPosts = async(): Promise<Post[]> => {
  try {
    const data = await fetchGraphQL<{posts: Post[]}>(
      `query GetBlogPosts {
    posts(orderBy: publishedAt_DESC) {
      id
      title
      excerpt
      content
      category
      publishedAt
    }
  }
      `
    );
    return data.posts;
  } catch (error) {
    console.log("Unable to load blog posts")
  }
};