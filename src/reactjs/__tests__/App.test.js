// import dependencies
import React from 'react';

// import react-testing methods
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// the component to test
import App from "../components/App";

// import Link from '../Link.react';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('it tests the App Component', () => {
  // beforeEach(() => {
  //   const renderWithRouter = (ui, { route = '/' } = {}) => {
  //     window.history.pushState({}, 'Test page', route);

  //     return render(ui, { wrapper: BrowserRouter });
  //   };
  //   renderWithRouter(<App />);
  // });

  // afterEach(() => {
  //   cleanup();
  // });

  // test('should render without crashing', () => {});
  // test('should render home page', () => {
  //   const homePage = screen.getByText('Home');
  //   expect(homePage).toBeInTheDocument();
  // });

  it('renders the App Component', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const appComponent = screen.getByTestId("app-1");
    expect(appComponent).toBeInTheDocument();
  });

  it('renders quote component correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><App /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });





//   it('checks if Home title is a descendant of Home Component', () => {
//     render(<Home />);
//     const homeComponent = screen.getByTestId('home-1');
//     const homeTitle = screen.getByTestId('home-2');
//     expect(homeComponent).toContainElement(homeTitle);
//   });

//   it('checks if a p tag is a descendant of Home Component', () => {
//     render(<Home />);
//     const homeComponent = screen.getByTestId('home-1');
//     const paragraph = screen.getByTestId('home-3');
//     expect(homeComponent).toContainElement(paragraph);
//   });

//   it('checks if Home Component has a title description', () => {
//     render(<Home />);
//     const homeComponent = screen.getByTestId('home-1');
//     expect(homeComponent).not.toHaveAccessibleDescription()
//   });

//   // it('checks if Home Component contains some html content', () => {
//   //   render(<Home />);
//   //   const homeComponent = screen.getByTestId('home-1');
//   //   expect(homeComponent).toContainHTML('');
//   // });
});