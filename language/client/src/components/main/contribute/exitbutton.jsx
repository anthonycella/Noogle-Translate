import React from 'react';
import styled from 'styled-components';

function ExitButton({ setVisibility }) {
  return (
    <ExitComponent onClick={setVisibility}>
      X
    </ExitComponent>
  );
}

const ExitComponent = styled.button`
  background-color: none;
  border: none;
  position: absolute;
  font-size: 18px;
  margin-left: 430px;
`;

export default ExitButton;
