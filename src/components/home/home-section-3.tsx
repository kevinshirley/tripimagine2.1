import React from 'react';
import Fade from 'react-reveal/Fade';
import { ARROW_FORWARD_IOS_ICON } from 'src/components/material-ui/icons';

function HomeSection3() {
  return (
    <section className="home-section-3">
      <div className="so-you-want">
        <div className="content">

          <Fade bottom><h3>"So, You Want An Amazing Travel Experience...But"</h3></Fade>

          <ul>
            <Fade bottom><li>{ARROW_FORWARD_IOS_ICON}&nbsp;&nbsp;Do not have the time or resources to research and make your dream vacation happen</li></Fade>
            <Fade bottom><li>{ARROW_FORWARD_IOS_ICON}&nbsp;&nbsp;You also want to make sure the process is completely worry-free</li></Fade>
            <Fade bottom><li>{ARROW_FORWARD_IOS_ICON}&nbsp;&nbsp;Want to make sure you get the best value for your time and money</li></Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;