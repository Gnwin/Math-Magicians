import { render, screen } from '@testing-library/react';
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
});