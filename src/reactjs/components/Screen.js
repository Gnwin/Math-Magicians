/* eslint-disable */
import React, { useState, useEffect } from 'react';

const Screen = (props) => {
  const [screenState, setScreenState] = useState({});

  useEffect(() => {
    setScreenState({
      content: 0,
    });
  }, []);

  const { content } = screenState;
  let answer;
  const data = props.data;
  if (!data.total && data.next && !data.operation) {
    answer = data.next;
  } else if (data.total && !data.next && data.operation) {
    answer = data.operation;
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

export default Screen;

/* eslint-enable */
