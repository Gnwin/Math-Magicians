/* eslint-disable */
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
  useEffect(() => {
    const buttons = document.querySelectorAll('.center');
    buttons.forEach((button) => {
      button.addEventListener('click', clickButton);
    });
  }, []);
 
  const clickButton = (event) => {
    event.preventDefault();
    const buttonContent = event.target.innerHTML;
    if (props.operands.includes(buttonContent)) {
      setCalcState((oldCalcState) => ({
        total: (calculate(oldCalcState, buttonContent)).total,
        next: '',
        operation: (calculate(oldCalcState, buttonContent)).operation
      }))
    } else if (buttonContent === '=') {
      setCalcState((oldCalcState) => ({
        total: (calculate(oldCalcState, buttonContent)).total,
        next: '',
        operation: ''
      }))
    } else if (buttonContent === 'AC') {
      setCalcState({
        total: '',
        next: '',
        operation: '',
      })
    } else if (buttonContent === '+/-') {  
      setCalcState((oldCalcState) => ({
        total: calculate(oldCalcState, buttonContent).total,
        next: calculate(oldCalcState, buttonContent).next,
        operation: calculate(oldCalcState, buttonContent).operation,
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
  }

  return (
    <div className="calculator">
      <Screen data={calcState} />
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

export default Calculator;

Calculator.propTypes = {
  numbers: PropTypes.array.isRequired,
  operands: PropTypes.array.isRequired,
};

/* eslint-enable */
