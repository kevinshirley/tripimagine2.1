import React, { useEffect } from 'react';
import BlogSection1 from 'src/components/blog/blog-section-1';
import BlogSection2 from 'src/components/blog/blog-section-2';

function Blog({ getPosts, posts, setPost }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <React.Fragment>
      <BlogSection1 />
      <BlogSection2 posts={posts} setPost={setPost} />
    </React.Fragment>
  );
};

export default Blog;
