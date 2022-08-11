import React from 'react';
import styled from 'styled-components';
import { CgMagnet } from 'react-icons/cg';

function Magnet({ onClick }) {
  return (
    <MagnetComponent className="search-bar">
      <CgMagnet class="search-bar" />
    </MagnetComponent>
  );
}

const MagnetComponent = styled.div`
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
    color: #4885ed;
    border: 1px solid #4885ed;
    cursor: pointer;
  }
`;

export default Magnet;
