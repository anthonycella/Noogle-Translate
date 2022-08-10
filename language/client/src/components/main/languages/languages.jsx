import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';
import CodeBox from './codebox/codebox';

function Languages({ languageData }) {
  const languages = Object.keys(languageData);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const textContent = languageData[selectedLanguage] || 'Select a language to begin';
  return (
    <LanguagesComponent>
      <Tabs
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />
      <CodeBox textContent={textContent} />
    </LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  min-height: 750px;
  width: 750px;
`;

export default Languages;
