import React from 'react';
import cx from 'classnames';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';

function AtlasSection2(props: any) {
  const { destinations } = props;

  let continents = destinations;
  continents = Object.entries(continents);

  const prepareString = (obj: any) => {
    var string = obj;
    // console.log('string', string);
    string = string.toString().toLowerCase();

    if(string.indexOf(' ') >= 0){
      string = string.replace(/\s+/g, '-');
    }

    return string;
  };

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
          {continents.map((continent, i: number) => {
            const continentClasses = cx(
              `continent-${i+1}`,
            );

            let objContinent = continent;

            objContinent = objContinent[1];

            const upperContinent = continent[0];
            const lowerContinent = prepareString(continent[0]);

            const imgUrl = `http://media.tripimagine.com/img/${lowerContinent}-with-trip-imagine.jpg`;

            return (
              <div className={continentClasses} key={i}>
                <Fade bottom key={i}>
                  <Link as={`/atlas/${lowerContinent}`} href={`/continent?${lowerContinent}`} key={i}>
                    <div className="destination" key={i}>
                      <img src={ imgUrl } alt={upperContinent} />
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
