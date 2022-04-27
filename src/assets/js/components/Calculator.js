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
        <div>AC</div>
        <div>+-</div>
        <div>%</div>
        <div>/</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
        <div className="zero">0</div>
        <div>.</div>
        <div>=</div>
      </div>
    );
  }
}

export default Calculator;
