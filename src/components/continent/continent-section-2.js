import React from 'react';
import * as R from 'ramda';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';
import continentMedia from 'src/utils/continent-asset';
import { spaceToDash } from 'src/utils/string';

function ContinentSection2({ destination }) {
  return (
    <section className="continent-section-2">
      <div className="back-to-atlas">
        <Fade bottom><Link href="/atlas">← Back to Atlas</Link></Fade>
      </div>
      <div className="destinations-container container-fluid">
        <div className="content row">
          <div className="img col-sm-6">
            {destination && destination.continent && (
              <Fade bottom><img src={ continentMedia(spaceToDash(R.toLower(destination.continent))) } alt={ destination.continent } className="img-fluid" /></Fade>
            )}
          </div>
          <div className="text col-sm-6">
            <br/>
              <Fade bottom><h3>{ destination.pageSubTitle }</h3></Fade>
            <br/>
              <Fade bottom><p>{ destination.pageDescription }</p></Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinentSection2;
