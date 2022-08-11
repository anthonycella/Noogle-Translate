import React from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';

function MagnifyingGlass() {
  return (
    <MagnifyingGlassComponent>
      <GiMagnifyingGlass />
    </MagnifyingGlassComponent>
  );
}

const MagnifyingGlassComponent = styled.div`
  width: 50px;
  height: 50px;
  background-color: #CCC;
  border: 3px solid black;
`;

export default MagnifyingGlass;
