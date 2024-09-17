import React, { useState, useEffect, useCallback } from 'react';

const TrafficLight = ({ pedestrianRequested, setPedestrianRequested }) => {
  const [currentLight, setCurrentLight] = useState('green');
  const [timer, setTimer] = useState(10);

  // Memoizing switchLight function to prevent unnecessary re-renders
  const switchLight = useCallback(() => {
    if (pedestrianRequested && currentLight === 'green') {
      setCurrentLight('red');
      setPedestrianRequested(false);
    } else {
      if (currentLight === 'green') {
        setCurrentLight('yellow');
      } else if (currentLight === 'yellow') {
        setCurrentLight('red');
      } else {
        setCurrentLight('green');
      }
    }
  }, [pedestrianRequested, currentLight, setPedestrianRequested]);

  // Get the duration for each light
  const getDuration = (light) => {
    switch (light) {
      case 'green':
        return 10;
      case 'yellow':
        return 3;
      case 'red':
        return 7;
      default:
        return 10;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          switchLight();
          return getDuration(currentLight); // Reset timer when light changes
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLight, pedestrianRequested, switchLight]);

  return (
    <div className="traffic-light">
      <div className={`light ${currentLight === 'red' ? 'red' : ''}`}></div>
      <div className={`light ${currentLight === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`light ${currentLight === 'green' ? 'green' : ''}`}></div>
      <div className="timer">Time left: {timer}</div>
    </div>
  );
};

export default TrafficLight;
