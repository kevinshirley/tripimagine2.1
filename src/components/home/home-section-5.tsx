import React from 'react';
import Fade from 'react-reveal/Fade';
import { FORMAT_SHAPES_ICON, EMOJI_FLAGS_ICON, BEACH_ACCESS_ICON } from 'src/components/material-ui/icons';

function HomeSection5() {
  return (
    <section className="home-section-5">

        <div className="content">

          <div className="title">
            <Fade bottom><h3>What To Expect From Us</h3></Fade>
          </div>

          <div className="you-will">
            <Fade bottom cascade>
            <div className="item">
              {FORMAT_SHAPES_ICON}
              <h4>Custom Designed Itinerary</h4>
              <button>Get More</button>
            </div>
            </Fade>
            <Fade bottom cascade>
            <div className="item">
              {EMOJI_FLAGS_ICON}
              <h4>Front Of The Line</h4>
              <button>Get More</button>
            </div>
            </Fade>
            <Fade bottom cascade>
            <div className="item">
              {BEACH_ACCESS_ICON}
              <h4>Private Local Guides</h4>
              <button>Get More</button>
            </div>
            </Fade>
          </div>

        </div>

      </section>
  );
};

export default HomeSection5;