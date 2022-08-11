import React from 'react';
import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';

function MagnifyingGlass({ onClick }) {
  return (
    <MagnifyingGlassComponent onClick={onClick} className="search-bar">
      <GiMagnifyingGlass className="search-bar" />
    </MagnifyingGlassComponent>
  );
}

const MagnifyingGlassComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: 22px;
  background-color: #CCC;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  &:hover {
    color: #3cba54;
    border: 1px solid #3cba54;
    cursor: pointer;
  }
`;

export default MagnifyingGlass;
