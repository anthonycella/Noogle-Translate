import React from 'react';
import styled from 'styled-components';

function AutoTypeIntro({ topics, startSearch }) {
  return (
    <AutoTypeIntroComponent onClick={startSearch}>
      I am Batman
    </AutoTypeIntroComponent>
  );
}

const AutoTypeIntroComponent = styled.span`
  text-align: center;
  text-decoration: underline;
  font-size: 36px;
  margin: 15px;
`;

export default AutoTypeIntro;
