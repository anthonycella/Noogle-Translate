import React from 'react';
import styled from 'styled-components';
import Noogle from './noogle';

function Title() {
  return (
    <TitleContainer>
      <Noogle />
      &nbsp;
      Translate
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  font-size: 64px;
  color: #777;
  text-align: center;
`;

export default Title;
