import React, { useState } from 'react';

import numbers from './numbers';
import operators from './operators';
import Calculator from './Calculator';

const CalculatorPage = () => {
  const [calcNumbers] = useState(numbers);
  const [calcOperators] = useState(operators);

  return (
    <div className="calcpage" data-testid="calc-1">
      <div className="calctitle" data-testid="calc-2">Lets do some math!</div>
      <Calculator operators={calcOperators} numbers={calcNumbers} />
    </div>
  );
};

export default CalculatorPage;
