import Link from 'next/link';
import { BlogCardProps } from '.../types/index.ts';

const BlogCard =({ post }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <img className="blog-card-image" src={post.imageUrl} alt={post.title} />
      <div className="blog-card-content">
        <p className="blog-card-category">{post.category}</p>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
      </div>
      <div className="blog-card-footer">
        <Link href={`/blog/${post.id}`} className="blog-card-link">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;