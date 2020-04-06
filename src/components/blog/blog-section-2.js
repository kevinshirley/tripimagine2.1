import React from 'react';
import Spinner from 'src/components/common/spinner';
import Link from 'src/components/common/link';

function BlogSection2({ posts, setPost }) {
  return (
    <div className='blog-section-2'>
      <div className='overlay'>
        {!posts ? <Spinner /> : posts.map((post, i) => (
          <article className='post' key={i}>
            {post && post.assets && (
              <picture>
                <img src={post.assets.medium_large.source_url} alt={post.slug} />
              </picture>
            )}
            <h2>{post.title}</h2>
            {post && (
              <Link 
                className='learn-more btn'
                as={`/post/${post.slug}`}
                href={`/post?${post.slug}`}
                onClick={() => setPost(post)}
              >
                Learn More
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection2;
