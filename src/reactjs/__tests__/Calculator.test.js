import { render, fireEvent, screen } from '@testing-library/react';
import App from '../components/App';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import numbers from '../components/numbers';
import operators from '../components/operators';
import Calculator from '../components/Calculator';

describe('it tests the Calculator Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Calculator operators={operators} numbers={numbers} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Calculator Component', () => {
    render(<Calculator operators={operators} numbers={numbers} />);
    const calcComponent = screen.getByTestId('calc');
    expect(calcComponent).toBeInTheDocument();
  });

  it('When user click 8 the value is shown in the answer cell', () => {
    render(<Calculator operators={operators} numbers={numbers} />);
    const button = screen.getByText('8');
    fireEvent.click(button);
    const answerCell = document.getElementsByClassName('answer')[0];
    expect(answerCell.innerHTML).toBe('8');
  });

  // it('When user performs an unary operation it is shown the correct result', () => {
  //   render(<Calculator operators={operators} numbers={numbers} />);
  //   const linkCalculator = screen.getByText('Calculator');
  //   fireEvent.click(linkCalculator);
  //   const button4 = screen.getByText('4');
  //   fireEvent.click(button4);
  //   const buttonUnary = screen.getByText('+/-');
  //   fireEvent.click(buttonUnary);
  //   const answerCell = document.getElementsByClassName('answer')[0];
  //   expect(answerCell.innerHTML).toBe('-4');
  // });

  it('When user performs a multiplication it is shown the correct result', () => {
    render(<Calculator operators={operators} numbers={numbers} />);
    const button8 = screen.getByText('8');
    fireEvent.click(button8);
    const buttonx = screen.getByText('x');
    fireEvent.click(buttonx);
    const button9 = screen.getByText('9');
    fireEvent.click(button9);
    const buttonEqual = screen.getByText('=');
    fireEvent.click(buttonEqual);
    const answerCell = document.getElementsByClassName('answer')[0];
    expect(answerCell.innerHTML).toBe('72');
  });
});
