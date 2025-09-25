export interface Post {
  id: number,
  title: string,
  excerpt: string;
  category: string;
  imageUrl: string;
}

export interface BlogCardProps {
  post: Post;
}