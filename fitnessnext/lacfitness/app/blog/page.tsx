import { getBlogPosts } from '../utils/graphql-utils';
import BlogCard from '../components/ui/blogcard';

const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="section animate-fade-in">
      <div className="container">
        <div className="text-center">
          <h1 className="page-title">BEYOND THE "AFTER PIC"</h1>
          <p className="section-text">Knowledge is power. Experience is the teacher. Here's your weekly dose.</p>
        </div>
        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map(post => <BlogCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;