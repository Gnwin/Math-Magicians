import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Navigation from '../components/Navigation';
import App from '../components/App';

describe('it tests the Navigation Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Navigation /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('checks if the Navigation Component is in the document', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const logo = screen.getByText('Math magicians');
    expect(logo).toBeInTheDocument();
  });

  it('renders a navigation Component', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const navElement = screen.getByTestId('nav-a');
    expect(navElement).toHaveClass('nav');
  });

  it('checks if there a Home link in the navigation component', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const homeLink = screen.getByText('Home');
    expect(homeLink.closest('a')).toHaveAttribute("href", "/home")
  });

  it('checks if there a Calculator link in the navigation component', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const calculatorLink = screen.getByText('Calculator');
    expect(calculatorLink.closest('a')).toHaveAttribute("href", "/calculator")
  });

  it('checks if there a Quote link in the navigation component', () => {
    render(<BrowserRouter><Navigation /></BrowserRouter>);
    const quoteLink = screen.getByText('Quote');
    expect(quoteLink.closest('a')).toHaveAttribute("href", "/quote")
  });

  it('renders the home page when the user clicks the home link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    const homeContainer = screen.getByTestId('home-1');
    const firstchild = homeContainer.childNodes[0];
    expect(firstchild).toHaveClass('home-title');
  });

  it('renders the calculator page when the user clicks the calculator link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    const calculatorContainer = screen.getByTestId('calc');
    expect(calculatorContainer).toHaveClass('calculator');
  });

  it('renders the Quote page when the user clicks the quote link', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const quoteLink = screen.getByText('Quote');
    fireEvent.click(quoteLink);
    const quoteContainer = screen.getByTestId('quote-1');
    expect(quoteContainer).toHaveClass('quote');
  });
});
