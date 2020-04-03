import React from 'react';
import Fade from 'react-reveal/Fade';

import { FLIGHT_TAKE_OFF_ICON, SPACING } from 'src/components/material-ui/icons';

function DreamVacationCta() {
  return (
    <section className="home-section-6">
      <div className="content">

        <button>
          <Fade bottom><div><h3>Plan Your Dream Vacation</h3>{SPACING}</div></Fade>
          <Fade bottom><div>{FLIGHT_TAKE_OFF_ICON}</div></Fade>
        </button>

      </div>
    </section>
  );
};

export default DreamVacationCta;
