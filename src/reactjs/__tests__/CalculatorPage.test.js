import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import App from '../components/App';
import CalculatorPage from '../components/CalculatorPage';

describe('it tests the CalculatorPage Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('checks if calcpageTitle title is a descendant of calcpageComponent', () => {
    render(<CalculatorPage />);
    const calcpageComponent = screen.getByTestId('calc-1');
    const calcpageTitle = screen.getByTestId('calc-2');
    expect(calcpageComponent).toContainElement(calcpageTitle);
  });

  it('shows 8 in the answer cell when the user clicks the 8 button', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkCalculator = screen.getByText('Calculator');
    fireEvent.click(linkCalculator);
    const button = screen.getByText('8');
    fireEvent.click(button);
    const answerCell = document.getElementsByClassName('answer')[0];
    expect(answerCell.innerHTML).toBe('8');
  });

  it('shows the correct result in the answer cell when user performs an unary operation', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkCalculator = screen.getByText('Calculator');
    fireEvent.click(linkCalculator);
    const button4 = screen.getByText('4');
    fireEvent.click(button4);
    const buttonUnary = screen.getByText('+/-');
    fireEvent.click(buttonUnary);
    const answerCell = document.getElementsByClassName('answer')[0];
    expect(answerCell.innerHTML).toBe('-4');
  });

  it('shows the correct result when user performs a multiplication', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkCalculator = screen.getByText('Calculator');
    fireEvent.click(linkCalculator);
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
