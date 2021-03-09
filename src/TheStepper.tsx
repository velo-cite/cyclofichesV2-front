import React, { useState } from 'react';
import './TheStepper.scss';

function TheStepper() {
  const [step, setStep] = useState(0);

  return (
    <form className="TheStepper">
      <article hidden={step !== 0}>
        <h2>Localiser un problème</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="stepper_map">The map</div>

          <fieldset className="flex flex-col justify-around">
            <div>
              <label className="block" htmlFor="localisation">Localisation précise</label>
              <input id="localisation" placeholder="Localisation précise" />
            </div>

            <div>
              <label className="block" htmlFor="commune">Commune</label>
              <input id="commune" placeholder="Commune" />
            </div>
            
            <button type="button" onClick={() => setStep(step + 1)}>Next</button>
          </fieldset>
        </div>
      </article>
            
      <article hidden={step !== 1}>{step}</article>
      <article hidden={step !== 2}>{step}</article>
      <article hidden={step !== 3}>{step}</article>
    </form>
  );
}

export default TheStepper;
