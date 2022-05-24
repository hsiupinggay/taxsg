import React from 'react';
import TaxRenderer from './TaxRenderer';

function TaxCalculator({userAmt}) {

  const dictionary = {
    defense: 0.2,
    welfare: 0.2,
    healthcare: 0.4,
    catfood: 0.2,
  }

  const userDictionary = {}

  for (const [label, ratio] of Object.entries(dictionary) ) {
    userDictionary[label] = ratio * userAmt;
  }

  console.log(userDictionary)
  
  return (
    <div>
      <TaxRenderer />
      
    </div>
  );
}

export default TaxCalculator;