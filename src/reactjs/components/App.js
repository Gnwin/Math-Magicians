import React, { useState, useEffect } from 'react';
import '../../assets/stylesheets/App.css';
import Calculator from './Calculator';
import numbers from './numbers';
import operands from './operands';

const App = () => {
  const [calcNumbers, setNumbers] = useState([]);
  const [calcOperands, setOperands] = useState([]);

  useEffect(() => {
    setNumbers(numbers);
    setOperands(operands);
  }, []);

  return (
    <div className="app">
      <Calculator operands={calcOperands} numbers={calcNumbers} />
    </div>
  );
};

export default App;
