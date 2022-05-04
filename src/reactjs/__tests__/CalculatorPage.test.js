// import dependencies
import React from 'react';

// import react-testing methods
import {render, screen} from '@testing-library/react'

import renderer from 'react-test-renderer';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// the component to test
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

  // it('checks if calcpageTitle title is a descendant of calcpageComponent', () => {
  //   render(<CalculatorPage />);
  //   const calcpageComponent = screen.getByTestId('calc-1');
  //   const calcpageTitle = screen.getByTestId('calc-2');
  //   expect(calcpageComponent).toContainElement(calcpageTitle);
  // });

});