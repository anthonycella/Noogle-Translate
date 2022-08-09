import React from 'react';
import styled from 'styled-components';

function JavaTab() {
  return (
    <JavaTabComponent>Java</JavaTabComponent>
  );
}

const JavaTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  background-color: #db3236;
  border-radius: 5px;
`;

export default JavaTab;
