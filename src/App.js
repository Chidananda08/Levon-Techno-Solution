import React, { useState } from 'react';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';

function App() {
  const [pedestrianRequested, setPedestrianRequested] = useState(false);

  return (
    <div className="App">
      <h1>Traffic Light Simulator</h1>
      <TrafficLight pedestrianRequested={pedestrianRequested} setPedestrianRequested={setPedestrianRequested} />
      <PedestrianButton setPedestrianRequested={setPedestrianRequested} />
    </div>
  );
}

export default App;
