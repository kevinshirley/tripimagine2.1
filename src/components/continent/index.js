import React, { useEffect } from 'react';
import ContinentSection1 from 'src/components/continent/continent-section-1';
import ContinentSection2 from 'src/components/continent/continent-section-2';
import { toUpperFirstEach, dashToSpace } from 'src/utils/string';

function Continent({ destination, getDestinations, getDestination }) {
  const continentName = window.location.pathname.substr(11);

  useEffect(() => {
    getDestinations();
    getDestination(toUpperFirstEach(continentName));
  }, [getDestinations, getDestination, toUpperFirstEach]);

  return (
    <React.Fragment>
      <ContinentSection1 continent={dashToSpace(continentName)} />
      <ContinentSection2 destination={destination} />
    </React.Fragment>
  );
};

export default Continent;
