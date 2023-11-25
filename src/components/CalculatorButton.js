import React from 'react';

const CalculatorButton = ({ name, onClick }) => {
  return (
    <button className='calculator-button' name={name} onClick={onClick}>
      {name}
    </button>
  );
};

export default CalculatorButton;
