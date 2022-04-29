import React from 'react';
import '../../assets/stylesheets/App.css';
import Calculator from './Calculator';
import numbers from './numbers';
import operands from './operands';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [],
      numbers: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      operands,
      numbers,
    });
  }

  render() {
    const { operands, numbers } = this.state;
    return (
      <div className="app">
        <Calculator operands={operands} numbers={numbers} />
      </div>
    );
  }
}

export default App;
