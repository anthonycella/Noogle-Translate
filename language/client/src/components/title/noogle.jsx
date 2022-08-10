/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

function Noogle() {
  return (
    <span>
      <ColorfulLetter color="#4885ed">N</ColorfulLetter>
      <ColorfulLetter color="#db3236">o</ColorfulLetter>
      <ColorfulLetter color="#f4c20d">o</ColorfulLetter>
      <ColorfulLetter color="#4885ed">g</ColorfulLetter>
      <ColorfulLetter color="#3cba54">l</ColorfulLetter>
      <ColorfulLetter color="#db3236">e</ColorfulLetter>
    </span>
  );
}

const ColorfulLetter = styled.span`
  color: ${((props) => props.color)};
`;

export default Noogle;
