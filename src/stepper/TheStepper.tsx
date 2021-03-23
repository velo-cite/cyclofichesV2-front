import React, { useState } from 'react';
import StepOne from './StepOne';
import './TheStepper.scss';

function TheStepper() {
  const [step, setStep] = useState(0);

  return (
    <form className="TheStepper bg-gray-200">
      <StepOne hidden={step !== 0} onClick={() => setStep(step + 1)} />
            
      <article hidden={step !== 1}>{step}</article>
      <article hidden={step !== 2}>{step}</article>
      <article hidden={step !== 3}>{step}</article>
    </form>
  );
}

export default TheStepper;
