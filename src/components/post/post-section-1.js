import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';
import { ARROW_LEFT_ICON, SPACING } from 'src/components/material-ui/icons';

function PostSection1({ title }) {
  console.log('title', title);
  return (
    <section className="contact-section-1 post-section-1">
      <div className="overlay">
        <Link className='back-to-blog' href={'/blog'}>{ARROW_LEFT_ICON}{SPACING}Back to Blog</Link>
        <div className="title-container">
          <div className="content">
            <Fade bottom><h2 dangerouslySetInnerHTML={{__html: title}}></h2></Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSection1;
