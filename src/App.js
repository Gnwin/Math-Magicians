import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component() {
  state = {}

  render() {
    return (
      <div className="calculator">
        <Calculator />
      </div>
    );
  }
}

export default App;
