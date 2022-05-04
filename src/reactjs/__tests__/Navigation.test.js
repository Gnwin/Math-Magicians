// import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
// import { Link } from 'react-router-dom';
// import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

import Navigation from '../components/Navigation';

// describe('it tests the Navigation Component', () => {
// test('renders a navigation link', () => {
//   render(<Navigation />);
//   // const linkElement = screen.getByText(calculator/i);
//   // expect(linkElement).toBeInTheDocument();
//   // expect(screen.getByText('Calculator').closest('a')).toHaveAttribute("href", "/calculator")
//   const linkElement = screen.getByTestId('nav-a');
//   expect(linkElement).toHaveClass('nav')
// });

// it('renders the Navigation Component', () => {
//   render(<Navigation />);
//   const navigationComponent = screen.getByTestId('nav-a');
//   expect(navigationComponent).toHaveClass('nav');
//   // const first = useRef(second);
// });

// it('routes to a new route', async () => {
//   const history = createMemoryHistory();

//   // mock push function
//   history.push = jest.fn();

//   const { getByText } = render(
//     <Router history={history}>
//       <Link to="/calculator">Calculator</Link>
//     </Router>
//   );

//   fireEvent.click(getByText('Calculator'));

//   // spy on push calls, assert on url (parameter)
//   expect(history.push).toHaveBeenCalledWith('/calculator');
// });

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Navigation />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('checks if Home title is a descendant of Home Component', () => {
//   render(<Home />);
//   const homeComponent = screen.getByTestId('home-1');
//   const homeTitle = screen.getByTestId('home-2');
//   expect(homeComponent).
//   // const first = useRef(second);
// });

// it('checks if a p tag is a descendant of Home Component', () => {
//   render(<Home />);
//   const homeComponent = screen.getByTestId('home-1');
//   const paragraph = screen.getByTestId('home-3');
//   expect(homeComponent).toContainElement(paragraph);
// });

// it('checks if Home Component has a title description', () => {
//   render(<Home />);
//   const homeComponent = screen.getByTestId('home-1');
//   expect(homeComponent).not.toHaveAccessibleDescription()
// });

// it('checks if Home Component contains some html content', () => {
//   render(<Home />);
//   const homeComponent = screen.getByTestId('home-1');
//   expect(homeComponent).toContainHTML('');
// });

// const linkToTest = screen.getByRole("link", { name: /Calculator/i })
// // I used regex here as a value of name property which ignores casing
// expect(linkToTest.getAttribute("href")).toMatchInlineSnapshot();

// it('renders correctly', () => {
//   expect(screen.getByText('Calculator').closest('a')).toHaveAttribute('href', 'http://localhost:3000/calculator')
// });
// });
