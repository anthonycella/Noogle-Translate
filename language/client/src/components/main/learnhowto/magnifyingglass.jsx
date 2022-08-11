import React from 'react';
import styled from 'styled-components';

function MagnifyingGlass() {
  return (
    <MagnifyingGlassComponent type="text" />
  );
}

const MagnifyingGlassComponent = styled.div`
  width: 50px;
  height: 50px;
  background-color: #CCC;
  border: 3px solid black;
`;

export default MagnifyingGlass;
