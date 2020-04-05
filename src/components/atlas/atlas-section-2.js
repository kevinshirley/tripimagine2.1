import React from 'react';
import cx from 'classnames';
import * as R from 'ramda';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';
import { spaceToDash } from 'src/utils/string';
import continentMedia from 'src/utils/continent-asset';

function AtlasSection2(props) {
  const { destinations } = props;

  let continents = destinations;
  continents = Object.entries(continents);

  return (
    <section className="atlas-section-2">
      <div className="overlay">

        <div className="desc-container">
          <div className="content">
            <Fade bottom><h4>Where you can get a glimpse of the best destinations in the world.</h4></Fade>
          </div>
        </div>
        
      </div>

      <div className="destinations-container container-fluid">
        <div className="content row">
          {continents.map((continent, i) => {
            const continentClasses = cx(
              `continent-${i+1}`,
            );

            let objContinent = continent;

            objContinent = objContinent[1];

            const upperContinent = continent[0];
            const lowerContinent = spaceToDash(R.toLower(continent[0]));

            return (
              <div className={continentClasses} key={i}>
                <Fade bottom key={i}>
                  <Link as={`/continent/${lowerContinent}`} href={`/continent?name=${lowerContinent}`} key={i}>
                    <div className="destination" key={i}>
                      <img src={ continentMedia(lowerContinent) } alt={upperContinent} />
                      <div className="text"><span>{upperContinent}</span></div>
                    </div>
                  </Link>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AtlasSection2;
