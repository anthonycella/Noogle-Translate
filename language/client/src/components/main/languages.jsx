import React from 'react';
import styled from 'styled-components';

function Languages() {
  return (
    <LanguagesComponent>I am Batman</LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  height: 750px;
  width: 750px;
  border: 1px solid red;
`;

export default Languages;
