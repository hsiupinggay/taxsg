import React, { useState } from 'react';
import UserAmtInput from './UserAmtInput';
import TaxCalculator from './TaxCalculator';

function HomePage() {
    const [userAmt, setUserAmt] = useState('');

    console.log(setUserAmt)
    const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <UserAmtInput setUserAmt={setUserAmt} userAmt={userAmt} handleClick={handleClick}/>
      <TaxCalculator userAmt={userAmt}/>
    </div>
  );
}

export default HomePage;