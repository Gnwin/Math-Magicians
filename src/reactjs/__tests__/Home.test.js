import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Home from "../components/Home";

describe('it tests the Home Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Home Component', () => {
    render(<Home />);
    const homeComponent = screen.getByTestId('home-1');
    expect(homeComponent).toBeInTheDocument();
  });

  it('checks if Home title is a descendant of Home Component', () => {
    render(<Home />);
    const homeComponent = screen.getByTestId('home-1');
    const homeTitle = screen.getByTestId('home-2');
    expect(homeComponent).toContainElement(homeTitle);
  });

  it('checks if a p tag is a descendant of Home Component', () => {
    render(<Home />);
    const homeComponent = screen.getByTestId('home-1');
    const paragraph = screen.getByTestId('home-3');
    expect(homeComponent).toContainElement(paragraph);
  });

  it('checks if Home Component has a title description', () => {
    render(<Home />);
    const homeComponent = screen.getByTestId('home-1');
    expect(homeComponent).not.toHaveAccessibleDescription();
  });
});