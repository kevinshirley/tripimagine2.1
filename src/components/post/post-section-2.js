import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';
import { ARROW_LEFT_ICON, SPACING } from 'src/components/material-ui/icons';

function PostSection2({ post }) {
  return (
    <section className="post-section-2">
      <div className='overlay'>
        <div className='poster'>
          <picture>
            <Fade bottom><img src={post.assets.medium_large.source_url} alt={post.slug} /></Fade>
          </picture>
        </div>
        <div className='content'>
          <Fade bottom><p dangerouslySetInnerHTML={{__html: post.content}}></p></Fade>
        </div>
        <Link className='back-to-blog' href={'/blog'}>{ARROW_LEFT_ICON}{SPACING}Back to Blog</Link>
      </div>
    </section>
  );
};

export default PostSection2;
