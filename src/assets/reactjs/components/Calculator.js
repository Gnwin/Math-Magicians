/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import Screen from './Screen';
import calculate from './calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  componentDidMount = () => {
    const buttons = document.querySelectorAll('.center');
    buttons.forEach((button) => {
      button.addEventListener('click', this.clickButton);
    });
  }

  clickButton = (event) => {
    event.preventDefault();
    const buttonContent = event.target.innerHTML;
    const operands = this.props.operands;
    let calcData;
    if (operands.includes(buttonContent)) {
      calcData = calculate(this.state, buttonContent);
      this.setState({
        total: calcData.total,
        next: '',
        operation: calcData.operation,
      });
    } else if (buttonContent === '=') {
      calcData = calculate(this.state, buttonContent);
      this.setState({
        total: calcData.total,
        next: '',
        operation: '',
      });
    } else if (buttonContent === 'AC') {
      calcData = calculate(this.state, buttonContent);
      this.setState({
        total: '',
        next: '',
        operation: '',
      });
    } else if (buttonContent === '+/-') {
      calcData = calculate(this.state, buttonContent);
      this.setState({
        total: 'undefined',
        next: '',
        operation: '',
      });
    } else {
      calcData = calculate(this.state, buttonContent);
      this.setState((oldState) => ({
        next: oldState.next + buttonContent,
      }));
    }
  }

  render() {
    return (
      <div className="calculator">
        <Screen data={this.state} />
        <div className="center">AC</div>
        <div className="center">+/-</div>
        <div className="center">%</div>
        <div className="center orange">÷</div>
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

Calculator.propTypes = {
  numbers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  operands: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

/* eslint-enable */
