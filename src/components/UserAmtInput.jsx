import React from 'react';

function UserAmtInput({setUserAmt, userAmt, handleClick}) {

  const handleUserAmt = (e) => {
    setUserAmt(e.target.value);
  }

  return (
    <div>
      <input onChange={handleUserAmt} value={userAmt}></input>
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default UserAmtInput;