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

  it('When user click the Home link the home page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    const homeContainer = screen.getByTestId('home-1');
    const firstchild = homeContainer.childNodes[0];
    expect(firstchild).toHaveClass('home-title');
  });
  
  it('When user click the Calculator link the calculator page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    const calculatorContainer = screen.getByTestId('calc');
    expect(calculatorContainer).toHaveClass('calculator');
  });
  
  it('When user click the Quote link the Quote page is shown', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const quoteLink = screen.getByText('Quote');
    fireEvent.click(quoteLink);
    const quoteContainer = screen.getByTestId('quote-1');
    expect(quoteContainer).toHaveClass('quote');
  });
});
