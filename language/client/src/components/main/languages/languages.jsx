import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';
import CodeBox from './codebox/codebox';

function Languages({ topic, languages }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <LanguagesComponent>
      <Tabs
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />
      <CodeBox selectedLanguage={selectedLanguage} topic={topic} />
    </LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  min-height: 750px;
  width: 750px;
`;

export default Languages;
