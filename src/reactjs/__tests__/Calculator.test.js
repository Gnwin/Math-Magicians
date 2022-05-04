// import react-testing methods
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'

import renderer from 'react-test-renderer';

// import { renderHook } from '@testing-library/react-hooks';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// import { renderHook } from '@testing-library/react-hooks'

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