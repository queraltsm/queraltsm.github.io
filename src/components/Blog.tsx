import { Link } from "react-router-dom";
import posts from "./Data/Posts.json";

function Blog() {
  return (
    <div className="container">
      <br />
      <br />

      <h3>
        <span className="highlight-1">Tech blog</span>
      </h3>
      <p className="blog-description">
        Welcome to my blog, a space where I share my passion for programming,
        tech trends, and how to improve as a developer. I love writing and
        reading about technology, and this blog is my way of sharing everything
        I learn. I hope what you find here inspires you to keep exploring,
        learning, and overcoming the challenges technology presents. This space
        is not only mine, but also yours—a place where we can grow together,
        share experiences, and move forward in this exciting world. If you have
        something to share with me or want to discuss any tech-related topic,
        don't hesitate to contact me through my social media or by email. I’d be
        happy to hear from you!
      </p>
      <br />
      <br />
      <div className="blog-grid">
        {posts.map((post, idx) => (
          <div key={idx} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-overlay">
              <h3 className="blog-title-text">
                {post.title}
                <span></span>
              </h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/${post.url}`} className="blog-read-more">
                Read more →
              </Link>
            </div>
          </div>
        ))}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Blog;
