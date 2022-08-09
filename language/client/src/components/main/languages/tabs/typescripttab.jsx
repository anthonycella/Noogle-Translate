import React from 'react';
import styled from 'styled-components';

function TypescriptTab() {
  return (
    <TypescriptTabComponent>Typescript</TypescriptTabComponent>
  );
}

const TypescriptTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  background-color: #4885ed;
  border-radius: 5px;
`;

export default TypescriptTab;
