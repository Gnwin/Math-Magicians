import React from 'react';
import '../../stylesheets/App.css';
import Calculator from './Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
