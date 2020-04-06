import React from 'react';
import Fade from 'react-reveal/Fade';

function PostSection2({ post }) {
  console.log('post', post);
  return (
    <section className="post-section-2">
      <div className='overlay'>
        <div className='poster'>
          <picture>
            {/* <source media="(min-width: 800px)" srcSet={post.assets.medium_large.source_url} /> */}
            {/* <img src={post.assets.medium.source_url} alt={post.slug} /> */}
            <img src={post.assets.medium_large.source_url} alt={post.slug} />
          </picture>
        </div>
        <div className='content'>
          <p dangerouslySetInnerHTML={{__html: post.content}}></p>
        </div>
      </div>
    </section>
  );
};

export default PostSection2;
