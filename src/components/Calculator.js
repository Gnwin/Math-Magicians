import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>{value}</div>
        <div>ac</div>
      </div>
    );
  }
}

export default Calculator;
