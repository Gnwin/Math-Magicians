import React, { useState } from 'react';

import numbers from './numbers';
import operands from './operands';
import Calculator from './Calculator';

const CalculatorPage = () => {
  const [calcNumbers] = useState(numbers);
  const [calcOperands] = useState(operands);

  return (
    <div className="calcpage">
      <div className="calctitle">Lets do some math!</div>
      <Calculator operands={calcOperands} numbers={calcNumbers} />
    </div>
  );
};

export default CalculatorPage;
