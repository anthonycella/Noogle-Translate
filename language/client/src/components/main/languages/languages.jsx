import React from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';

function Languages() {
  return (
    <LanguagesComponent>
      <Tabs />
    </LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  height: 750px;
  width: 750px;
  border: 1px solid red;
`;

export default Languages;
