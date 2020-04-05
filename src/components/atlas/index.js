import React, { useEffect } from 'react';
import AtlasSection1 from 'src/components/atlas/atlas-section-1';
import AtlasSection2 from 'src/components/atlas/atlas-section-2';

function Atlas({ destinations, getDestinations }) {
  useEffect(() => {
    getDestinations();
  }, [getDestinations]);

  return (
    <React.Fragment>
      <AtlasSection1 />
      <AtlasSection2 destinations={destinations} />
    </React.Fragment>
  );
};

export default Atlas;
