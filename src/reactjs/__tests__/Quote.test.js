import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Quote from '../components/Quote';

describe('it tests the Quote Component', () => {
  it('renders quote component correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('checks if quotemsg is a descendant of quoteComponent', () => {
    render(<Quote />);
    const quoteComponent = screen.getByTestId('quote-1');
    const quotemsg = screen.getByTestId('quote-2');
    expect(quoteComponent).toContainElement(quotemsg);
  });

  it('checks if quotemsg has a text content', () => {
    render(<Quote />);
    const quotemsg = screen.getByTestId('quote-2');
    expect(quotemsg).toHaveTextContent('Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. -William Paul Thurston');
  });
});
