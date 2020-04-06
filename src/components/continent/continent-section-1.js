import React from 'react';
import Fade from 'react-reveal/Fade';
import { toUpperFirst } from 'src/utils/string';

function ContinentSection1({ continent }) {
  return (
    <section className="contact-section-1 continent-section-1">
      <div className="overlay">
        <div className="title-container">
          <div className="content">
            <Fade bottom><h2>{toUpperFirst(continent)}</h2></Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinentSection1;
