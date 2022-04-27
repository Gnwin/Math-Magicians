import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="answer">0</div>
        <div className="center">AC</div>
        <div className="center">+-</div>
        <div className="center">%</div>
        <div className="center orange">/</div>
        <div className="center">7</div>
        <div className="center">8</div>
        <div className="center">9</div>
        <div className="center orange">x</div>
        <div className="center">4</div>
        <div className="center">5</div>
        <div className="center">6</div>
        <div className="center orange">-</div>
        <div className="center">1</div>
        <div className="center">2</div>
        <div className="center">3</div>
        <div className="center orange">+</div>
        <div className="center zero">0</div>
        <div className="center">.</div>
        <div className="center orange">=</div>
      </div>
    );
  }
}

export default Calculator;
