/* eslint-disable */
import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 0,
    };
  }

  render() {
    const { content } = this.state;
    let answer;
    const data = this.props.data;
    if (!data.total && data.next && !data.operation) {
      answer = data.next;
    } else if (data.total && !data.next && data.operation) {
      answer = content;
    } else if (data.total && !data.next && !data.operation) {
      answer = data.total;
    } else if (data.total && data.next && data.operation) {
      answer = data.next;
    } else {
      answer = content;
    }

    return (
      <div className="answer">{answer}</div>
    );
  }
}
/* eslint-enable */

export default Screen;
