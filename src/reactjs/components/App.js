import React, { useState } from 'react';
import '../../assets/stylesheets/App.css';
import Calculator from './Calculator';
import numbers from './numbers';
import operands from './operands';

const App = () => {
  const [calcNumbers] = useState(numbers);
  const [calcOperands] = useState(operands);

  return (
    <div className="app">
      <Calculator operands={calcOperands} numbers={calcNumbers} />
    </div>
  );
};

export default App;
