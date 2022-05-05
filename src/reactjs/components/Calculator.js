import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Screen from './Screen';
import calculate from './calculate';

const Calculator = (props) => {
  const [calcState, setCalcState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const { numbers, operators } = props;

  const clickButton = (event) => {
    event.preventDefault();
    const buttonContent = event.target.innerHTML;
    if (operators.includes(buttonContent)) {
      setCalcState((oldCalcState) => ({
        total: (calculate(oldCalcState, buttonContent)).total,
        next: '',
        operation: (calculate(oldCalcState, buttonContent)).operation,
      }));
    } else if (buttonContent === '=') {
      setCalcState((oldCalcState) => ({
        total: (calculate(oldCalcState, buttonContent)).total,
        next: '',
        operation: '',
      }));
    } else if (buttonContent === 'AC') {
      setCalcState({
        total: '',
        next: '',
        operation: '',
      });
    } else if (buttonContent === '+/-') {
      setCalcState((oldCalcState) => ({
        total: oldCalcState.total ? (calculate(oldCalcState, buttonContent)).total : '',
        next: oldCalcState.next ? (calculate(oldCalcState, buttonContent)).next : '',
        operation: oldCalcState.operation ? (calculate(oldCalcState, buttonContent)).operation : '',
      }));
    } else if (buttonContent === '.') {
      setCalcState((oldCalcState) => ({
        total: oldCalcState.total ? (calculate(oldCalcState, buttonContent)).total : '',
        next: oldCalcState.next ? (calculate(oldCalcState, buttonContent)).next : '',
        operation: oldCalcState.operation ? (calculate(oldCalcState, buttonContent)).operation : '',
      }));
    } else {
      setCalcState((oldCalcState) => ({
        total: oldCalcState.total ? (calculate(oldCalcState, buttonContent)).total : '',
        next: oldCalcState.next + buttonContent,
        operation: oldCalcState.operation ? (calculate(oldCalcState, buttonContent)).operation : '',
      }));
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.center');
    buttons.forEach((button) => {
      button.addEventListener('click', clickButton);
    });
  }, []);

  return (
    <div className="calculator" data-testid="calc">
      <Screen data={calcState} />
      <div className="center">AC</div>
      <div className="center">+/-</div>
      <div className="center">%</div>
      <div className="center orange">÷</div>
      <div className="center">{numbers[7]}</div>
      <div className="center">{numbers[8]}</div>
      <div className="center">{numbers[9]}</div>
      <div className="center orange">x</div>
      <div className="center">{numbers[4]}</div>
      <div className="center">{numbers[5]}</div>
      <div className="center">{numbers[6]}</div>
      <div className="center orange">-</div>
      <div className="center">{numbers[1]}</div>
      <div className="center">{numbers[2]}</div>
      <div className="center">{numbers[3]}</div>
      <div className="center orange">+</div>
      <div className="center zero">{numbers[0]}</div>
      <div className="center">.</div>
      <div className="center orange">=</div>
    </div>
  );
};

export default Calculator;

Calculator.propTypes = {
  numbers: PropTypes.instanceOf(Array).isRequired,
  operators: PropTypes.arrayOf(PropTypes.string).isRequired,
};
