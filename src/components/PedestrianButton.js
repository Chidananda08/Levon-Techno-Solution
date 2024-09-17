import React from 'react';

const PedestrianButton = ({ setPedestrianRequested }) => {
  const handleClick = () => {
    setPedestrianRequested(true);
  };

  return (
    <button className="pedestrian-button" onClick={handleClick}>
      Request to Cross
    </button>
  );
};

export default PedestrianButton;
