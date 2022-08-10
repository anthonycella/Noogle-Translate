import React, { useState } from 'react';
import styled from 'styled-components';

function blink(isCurrentlyVisible, setBlink) {
  setTimeout(() => {
    setBlink(!isCurrentlyVisible);
  }, 500);
}

function Blinker() {
  const [isCurrentlyVisible, setBlink] = useState(true);
  blink(isCurrentlyVisible, setBlink);

  if (isCurrentlyVisible === true) {
    return (
      <BlinkerComponent />
    );
  }

  return (
    <div />
  );
}

const BlinkerComponent = styled.div`
  height: 30px;
  width: 3px;
  background-color: black;
`;

export default Blinker;
