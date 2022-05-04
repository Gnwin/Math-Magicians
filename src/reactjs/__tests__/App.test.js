import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from '../components/App';

describe('it tests the App Component', () => {
  it('renders the App Component', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const appComponent = screen.getByTestId('app-1');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders App component correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><App /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('When user click the Calculator link the calculator page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkCalculator=screen.getByText('Calculator');
    fireEvent.click(linkCalculator);
    const calculatorContainer=screen.getByTestId('calc');
    expect(calculatorContainer).toHaveClass('calculator');
  });
  
  it('When user click the Home link the home page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkHome=screen.getByText('Home');
    fireEvent.click(linkHome);
    const homeContainer=screen.getByTestId('home-1');
    const firstchild=homeContainer.childNodes[0];
    expect(firstchild).toHaveClass('home-title');
  });
  
  it('When user click the Quote link the home page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkQuote=screen.getByText('Quote');
    fireEvent.click(linkQuote);
    const quoteContainer=screen.getByTestId('quote-1');
    expect(quoteContainer).toHaveClass('quote');
  });

  it('When user click 8 the value is shown in the answer cell', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkCalculator = screen.getByText('Calculator');
    fireEvent.click(linkCalculator);
    const button = screen.getByText('8');
    fireEvent.click(button);
    const answerCell = document.getElementsByClassName('answer')[0];
    expect(answerCell.innerHTML).toBe('8');
  });

  it('When user performs an unary operation it is shown the correct result', () => {
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

  it('When user performs a multiplication it is shown the correct result', () => {
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
