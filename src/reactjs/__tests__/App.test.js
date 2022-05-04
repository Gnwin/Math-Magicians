import { render, screen } from '@testing-library/react';
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

  it('renders quote component correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><App /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
