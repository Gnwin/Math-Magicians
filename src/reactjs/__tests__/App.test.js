import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from '../components/App';

describe('it tests the App Component', () => {
  it('renders App component correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><App /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the App Component', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const appComponent = screen.getByTestId('app-1');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders the home page in the App component when the user clicks the home link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    const homeContainer = screen.getByTestId('home-1');
    const firstchild = homeContainer.childNodes[0];
    expect(firstchild).toHaveClass('home-title');
  });
  
  it('renders the calculator page in the App component when the user clicks the calculator link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    const calculatorContainer = screen.getByTestId('calc');
    expect(calculatorContainer).toHaveClass('calculator');
  });
  
  it('renders the Quote page in the App component when the user clicks the quote link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const quoteLink = screen.getByText('Quote');
    fireEvent.click(quoteLink);
    const quoteContainer = screen.getByTestId('quote-1');
    expect(quoteContainer).toHaveClass('quote');
  });
});
