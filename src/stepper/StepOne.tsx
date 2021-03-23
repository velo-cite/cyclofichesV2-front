import React from 'react';
import './StepOne.scss';

function StepOne() {
  const handleClick = () => false;
  
  return (
    <article className="StepOne bg-gray-200">
      <h2>Localiser un problème</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="stepper_map">The map</div>

        <fieldset className="flex flex-col justify-around">
          <div>
            <label className="block" htmlFor="localisation">Localisation précise</label>
            <input id="localisation" type="text" placeholder="Localisation précise" />
          </div>

          <div>
            <label className="block" htmlFor="commune">Commune</label>
            <input id="commune" placeholder="Commune" />
          </div>
          
          <button type="button" onClick={handleClick}>Next</button>
        </fieldset>
      </div>
    </article>
  );
}

export default StepOne;
