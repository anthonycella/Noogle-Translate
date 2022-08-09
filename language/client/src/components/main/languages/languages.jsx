import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';

function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  return (
    <LanguagesComponent>
      <Tabs selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
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
