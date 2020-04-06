import React from 'react';
import spinner from 'src/assets/img/spinner-rounded-lines.gif';

export default () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};
