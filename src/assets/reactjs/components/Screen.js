/* eslint-disable */
import React from 'react';

import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 0,
    };
  }

  render() {
    const { content } = this.state;
    console.log(content)
    let ans;
    const data = this.props.data; // eslint-disable-line no-unused-vars
    console.log(data)
    if (!data.total && data.next && !data.operation) {
      ans = data.next;
    } else if (data.total && !data.next && data.operation) {
      ans = content;
    } else if (data.total && !data.next && !data.operation) {
      ans = data.total;
    } else if (data.total && data.next && data.operation) {
      ans = data.next;
    } else {
      ans = content;
    }

    console.log(ans);
    return (
      <div className="answer">{ans}</div>
    );
  }
}

Screen.propTypes = {
  total: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  next: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  operation: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

// Screen.defaultProps = {
//   output: 0
// }

export default Screen;

/* eslint-enable */
