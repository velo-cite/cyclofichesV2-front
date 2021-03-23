import React from 'react';
import './App.scss';
import TheHeader from './TheHeader';
import TheStepper from './stepper/TheStepper';

function App() {
  return (
    <div className="App">
      <TheHeader/>
      <TheStepper/>
    </div>
  );
}

export default App;
