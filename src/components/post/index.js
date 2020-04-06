import React from 'react';
import PostSection1 from 'src/components/post/post-section-1';
import PostSection2 from 'src/components/post/post-section-2';

function Post({ post }) {
  return (
    <React.Fragment>
      <PostSection1 title={post.title} />
      <PostSection2 post={post} />
    </React.Fragment>
  );
};

export default Post;
